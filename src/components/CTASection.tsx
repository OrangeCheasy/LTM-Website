import ArrowUpRightIcon from "@/components/ArrowUpRightIcon";
import GlowBorder from "@/components/GlowBorder";
import { Container, LinkButton } from "@/components/ui";
import { warmPanel } from "@/lib/glow";
import { CTA } from "@/lib/nav";
import type { ServiceSlug } from "@/lib/types";

interface CTASectionProps {
  title?: string;
  description?: string;
  ctaLabel?: string;
  secondary?: { href: string; label: string };
  topic?: ServiceSlug;
  tight?: boolean;
  filled?: boolean;
}

export default function CTASection({
  title = "Tell me what you're trying to get done",
  description = "Describe the problem in plain words. I'll reply within one business day with what it would take.",
  ctaLabel,
  secondary,
  topic,
  tight = false,
  filled = false,
}: CTASectionProps) {
  const ctaHref = topic ? `${CTA.href}?topic=${topic}` : CTA.href;

  return (
    <section aria-labelledby="cta-heading">
      <Container className={tight ? "pb-8" : "py-8"}>
        <div
          className="relative flex flex-col gap-5 rounded-[var(--radius-card)] p-[var(--space-card)] sm:flex-row sm:items-center sm:justify-between"
          style={{ background: warmPanel({ peak: 14 }) }}
        >
          <GlowBorder />

          <div>
            <h2 id="cta-heading" className="max-w-[26ch] text-card text-text">
              {title}
            </h2>
            <p className="mt-2 max-w-[70ch] whitespace-pre-line text-body-secondary text-text-muted">
              {description}
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <LinkButton
              href={ctaHref}
              variant={filled ? "primary" : "secondary"}
              size="lg"
              className="group sm:min-w-[220px]"
            >
              {ctaLabel ?? CTA.label}
              <ArrowUpRightIcon className="h-4 w-4 shrink-0 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </LinkButton>

            {secondary ? (
              <LinkButton href={secondary.href} variant="ghost" size="md">
                {secondary.label}
              </LinkButton>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
