import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";
import SocialIcon from "@/components/SocialIcon";
import { Section, SectionHeader } from "@/components/ui";
import { socialLinks } from "@/data/social";
import { SERVICE_META, type ServiceSlug } from "@/lib/types";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Liam Mo about a software project, game, automation, collaboration, or technical problem.",
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    url: "/contact",
    title: "Contact — Liam Mo",
    description:
      "Get in touch about a software project, game, automation, collaboration, or technical problem.",
  },
};

const serviceSlugs = Object.keys(SERVICE_META) as ServiceSlug[];
const externalSocialLinks = socialLinks.filter((link) => link.external);

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
    ? "Not sure where to start? That’s fine."
    : "Tell me what you’re working on";
  const description = lowPressure
    ? "Describe the idea, problem, or rough goal in your own words. You do not need a finished specification before reaching out."
    : topic
      ? `You selected ${SERVICE_META[topic].title.toLowerCase()}. Add the context you already know and leave anything uncertain flexible.`
      : "Whether it is a project, collaboration, technical problem, or just a question about my work, send the context you have and we can start there.";

  return (
    <>
      <Section
        spacing="compact"
        aria-labelledby="contact-heading"
        className="border-b border-border/70"
      >
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end lg:gap-12">
          <SectionHeader
            id="contact-heading"
            eyebrow="Contact"
            headingLevel="h1"
            title={heading}
            description={description}
          />

          <div className="rounded-[var(--radius-card)] border border-border bg-surface p-[var(--space-card)]">
            <p className="text-caption uppercase tracking-[0.12em] text-text-muted">Direct contact</p>
            <a
              href="mailto:contact@liamthemo.com"
              className="mt-3 block break-all text-body font-medium text-text transition-colors hover:text-accent"
            >
              contact@liamthemo.com
            </a>

            <div className="mt-5 border-t border-border pt-4">
              <p className="text-caption text-text-muted">Elsewhere</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {externalSocialLinks.map((link) => (
                  <a
                    key={link.kind}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-10 items-center gap-2 rounded-[var(--radius-control)] border border-border px-3 text-metadata font-medium text-text-secondary transition-colors hover:border-accent hover:text-text"
                  >
                    <SocialIcon kind={link.kind} />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section spacing="compact" aria-labelledby="contact-form-heading">
        <div className="grid gap-8 lg:grid-cols-[minmax(16rem,0.62fr)_minmax(0,1.38fr)] lg:gap-12">
          <div>
            <SectionHeader
              id="contact-form-heading"
              eyebrow="Send a message"
              title="Start with the useful details"
              description="A short description is enough. The form expands only when a field is relevant to what you selected."
            />

            <ul className="mt-6 space-y-3 text-body-secondary text-text-muted">
              {[
                "What you want to build, fix, improve, or understand",
                "What already exists, if anything",
                "Any constraints or timeline you already know",
                "The best way to reach you back",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span aria-hidden="true" className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-caption text-text-muted">
              Prefer not to use a form? Email works just as well.
            </p>
          </div>

          <div className="rounded-[var(--radius-card)] border border-border bg-surface p-5 sm:p-8 lg:p-10">
            <QuoteForm initialService={topic} />
          </div>
        </div>
      </Section>
    </>
  );
}
