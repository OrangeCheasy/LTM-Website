import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type HeadingLevel = "h1" | "h2" | "h3";

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  headingLevel?: HeadingLevel;
  align?: "left" | "center";
  className?: string;
  headingClassName?: string;
  descriptionClassName?: string;
  id?: string;
}

const headingClasses: Record<HeadingLevel, string> = {
  h1: "text-page",
  h2: "text-section",
  h3: "text-card",
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  headingLevel = "h2",
  align = "left",
  className,
  headingClassName,
  descriptionClassName,
  id,
}: SectionHeaderProps) {
  const Heading = headingLevel;

  return (
    <header
      className={cn(
        "max-w-[var(--layout-reading)]",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="text-metadata font-semibold tracking-wide text-accent">
          {eyebrow}
        </p>
      ) : null}
      <Heading
        id={id}
        className={cn(
          eyebrow && "mt-2",
          headingClasses[headingLevel],
          "text-text",
          headingClassName,
        )}
      >
        {title}
      </Heading>
      {description ? (
        <p
          className={cn(
            "mt-[var(--space-heading-body)] text-body-secondary text-text-muted",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}
