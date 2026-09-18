import { getCloudflareContext } from "@opennextjs/cloudflare";
import { NextResponse } from "next/server";
import {
  budgetLabel,
  contactMethodLabel,
  describeService,
  timelineLabel,
  validateQuotePayload,
  type QuoteFormPayload,
} from "@/lib/quote";
import {
  contentLengthExceeds,
  hasJsonContentType,
  isSameOriginRequest,
} from "@/lib/request-security";

/*
  The quote form's delivery handler. It is the site's routine dynamic path;
  the portfolio pages are otherwise static-first. The OpenNext adapter targets
  the Node.js runtime, so this route does not opt into an edge runtime.

  One outbound call: a Discord webhook that notifies the owner. This is the
  call that matters — if it fails, the lead is lost, so it is awaited and a
  failure surfaces to the visitor as an error.

  Rate limiting remains an edge concern. Cloudflare WAF/rate-limiting rules
  should protect this path before traffic reaches the Worker; the checks below
  add application-level request validation and same-origin protection.
*/

const DISCORD_EMBED_FIELD_LIMIT = 1000;
const MAX_QUOTE_REQUEST_BYTES = 16 * 1024;
const DISCORD_REQUEST_TIMEOUT_MS = 10_000;
const DISCORD_WEBHOOK_HOSTS = new Set(["discord.com", "discordapp.com"]);

function truncate(value: string, limit: number): string {
  return value.length > limit ? `${value.slice(0, limit)}…` : value;
}

function validatedDiscordWebhookUrl(value: string): string {
  let url: URL;

  try {
    url = new URL(value);
  } catch {
    throw new Error("Discord webhook is not a valid URL.");
  }

  if (
    url.protocol !== "https:" ||
    !DISCORD_WEBHOOK_HOSTS.has(url.hostname) ||
    !url.pathname.startsWith("/api/webhooks/")
  ) {
    throw new Error("Discord webhook destination is not allowed.");
  }

  return url.toString();
}

async function sendDiscordNotification(
  webhookUrl: string,
  data: QuoteFormPayload,
): Promise<void> {
  const contactLine = data.phone
    ? `${contactMethodLabel(data.contactMethod)} — ${data.phone}`
    : contactMethodLabel(data.contactMethod);

  const res = await fetch(validatedDiscordWebhookUrl(webhookUrl), {
    method: "POST",
    headers: { "content-type": "application/json" },
    redirect: "error",
    signal: AbortSignal.timeout(DISCORD_REQUEST_TIMEOUT_MS),
    body: JSON.stringify({
      allowed_mentions: { parse: [] },
      embeds: [
        {
          title: "New quote request",
          color: 0xad3f3c,
          fields: [
            { name: "Name", value: data.name, inline: true },
            { name: "Email", value: data.email, inline: true },
            { name: "Service", value: describeService(data), inline: true },
            { name: "Budget", value: budgetLabel(data.budget), inline: true },
            {
              name: "Timeline",
              value: timelineLabel(data.timeline),
              inline: true,
            },
            { name: "Preferred contact", value: contactLine, inline: true },
            {
              name: "Description",
              value: truncate(data.description, DISCORD_EMBED_FIELD_LIMIT),
            },
          ],
        },
      ],
    }),
  });

  if (!res.ok) {
    throw new Error(`Discord webhook responded ${res.status}`);
  }
}

export async function POST(request: Request) {
  if (!isSameOriginRequest(request)) {
    return NextResponse.json({ error: "Request not allowed." }, { status: 403 });
  }

  if (!hasJsonContentType(request)) {
    return NextResponse.json(
      { error: "Content-Type must be application/json." },
      { status: 415 },
    );
  }

  if (contentLengthExceeds(request, MAX_QUOTE_REQUEST_BYTES)) {
    return NextResponse.json({ error: "Request is too large." }, { status: 413 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "That request wasn't readable. Try submitting the form again." },
      { status: 400 },
    );
  }

  if (typeof body !== "object" || body === null) {
    return NextResponse.json(
      { error: "That request wasn't readable. Try submitting the form again." },
      { status: 400 },
    );
  }

  const result = validateQuotePayload(
    body as Partial<Record<keyof QuoteFormPayload, unknown>>,
  );

  if (!result.ok) {
    return NextResponse.json(
      { error: result.errors[0].message, errors: result.errors },
      { status: 400 },
    );
  }

  const data = result.value;

  // Honeypot tripped: pretend success so whatever filled it learns nothing,
  // but do none of the real work.
  if (data.company) {
    return NextResponse.json({ ok: true });
  }

  const { env } = await getCloudflareContext({ async: true });

  if (!env.DISCORD_WEBHOOK_URL) {
    console.error("Quote form: Discord webhook is not configured");
    return NextResponse.json(
      {
        error:
          "Something went wrong sending your message. Try again, or email contact@liamthemo.com directly.",
      },
      { status: 503 },
    );
  }

  try {
    await sendDiscordNotification(env.DISCORD_WEBHOOK_URL, data);
  } catch {
    // Do not log the thrown error object. Network errors can include the
    // webhook URL, which contains a secret token and must never enter logs.
    console.error("Quote form: Discord notification failed");
    return NextResponse.json(
      {
        error:
          "Something went wrong sending your message. Try again, or email contact@liamthemo.com directly.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
