import type { ReactNode } from "react";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui";
import { cn } from "@/lib/cn";

interface PageHeroProps {
  id: string;
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  actions?: ReactNode;
  aside?: ReactNode;
  asideSize?: "compact" | "wide";
  backLink?: { href: string; label: string };
  className?: string;
}

const asideGridClasses = {
  compact: "lg:grid-cols-[minmax(0,1fr)_22rem]",
  wide: "lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.72fr)]",
} as const;

/**
 * Shared top-of-page composition for portfolio routes.
 *
 * The homepage established the site-wide rhythm: compact sections, shared
 * typography, tokenized spacing, and a single border separating major bands.
 * Secondary routes use this component instead of rebuilding that shell with
 * route-specific max-width, gutter, and heading classes.
 */
export default function PageHero({
  id,
  eyebrow,
  title,
  description,
  actions,
  aside,
  asideSize = "compact",
  backLink,
  className,
}: PageHeroProps) {
  return (
    <Section
      spacing="compact"
      aria-labelledby={id}
      className={cn("border-b border-border/70", className)}
    >
      {backLink ? (
        <Link
          href={backLink.href}
          className="inline-flex items-center gap-2 text-metadata font-medium text-text-muted transition-colors hover:text-accent"
        >
          <span aria-hidden="true">←</span>
          {backLink.label}
        </Link>
      ) : null}

      <div
        className={cn(
          backLink && "mt-6",
          aside && "grid gap-8 lg:items-end lg:gap-12",
          aside && asideGridClasses[asideSize],
        )}
      >
        <div>
          <SectionHeader
            id={id}
            eyebrow={eyebrow}
            headingLevel="h1"
            title={title}
            description={description}
          />

          {actions ? <div className="mt-7 flex flex-wrap gap-3">{actions}</div> : null}
        </div>

        {aside ? <div className="min-w-0">{aside}</div> : null}
      </div>
    </Section>
  );
}
