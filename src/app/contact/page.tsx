import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";
import SectionLabel from "@/components/SectionLabel";
import { SERVICE_META, type ServiceSlug } from "@/lib/types";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Liam Mo about a software project, game, automation, collaboration, or technical problem.",
  openGraph: {
    type: "website",
    title: "Contact — Liam Mo",
    description:
      "Get in touch about a software project, game, automation, collaboration, or technical problem.",
  },
};

const serviceSlugs = Object.keys(SERVICE_META) as ServiceSlug[];

function resolveTopic(raw: string | undefined): ServiceSlug | "unsure" | "" {
  if (!raw) return "";
  if (raw === "unsure") return "unsure";
  return serviceSlugs.includes(raw as ServiceSlug) ? (raw as ServiceSlug) : "";
}

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ topic?: string }>;
}) {
  const { topic: rawTopic } = await searchParams;
  const topic = resolveTopic(rawTopic);

  const lowPressure = topic === "unsure";
  const heading = lowPressure
    ? "Not sure where to start?"
    : "Let’s talk about what you’re building";
  const description = lowPressure
    ? "Describe the idea or problem in your own words. I’ll help figure out what the next practical step looks like."
    : topic
      ? `You selected ${SERVICE_META[topic].title.toLowerCase()}. Add the remaining details and I’ll take it from there.`
      : "Share the project, idea, or technical problem you want to discuss. Fill in what you know and leave the rest flexible.";

  return (
    <>
      <section className="relative">
        <div className="relative mx-auto max-w-6xl px-5 pt-8 pb-6 sm:px-8 sm:pt-10 sm:pb-8">
          <SectionLabel>Contact</SectionLabel>
          <h1 className="mt-2 max-w-[24ch] text-h1 text-text">{heading}</h1>
          <p className="mt-4 max-w-[56ch] text-body text-text-muted">{description}</p>

          <a
            href="mailto:contact@liamthemo.com"
            className="group mt-7 inline-flex items-center gap-2.5 rounded-full border border-accent px-5 py-2.5 font-medium text-text transition-all duration-200 hover:border-accent-hover hover:shadow-[0_0_24px_var(--color-accent-dim)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 shrink-0 text-accent"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
            contact@liamthemo.com
          </a>
          <p className="mt-2.5 text-small text-text-muted">
            Prefer email? Skip the form and write to me directly.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-6 sm:px-8 sm:py-8">
        <div className="mx-auto max-w-[46rem] rounded-2xl border border-border bg-surface p-6 sm:p-10">
          <QuoteForm initialService={topic} />
        </div>
      </section>
    </>
  );
}
