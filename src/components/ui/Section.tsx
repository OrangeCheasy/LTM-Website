import type { ComponentPropsWithoutRef } from "react";
import Container, { type ContainerSize } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

export type SectionSpacing = "default" | "compact" | "none";
export type SectionTone = "default" | "surface";

interface SectionProps extends ComponentPropsWithoutRef<"section"> {
  spacing?: SectionSpacing;
  tone?: SectionTone;
  containerSize?: ContainerSize;
  containerClassName?: string;
}

const spacingClasses: Record<SectionSpacing, string> = {
  default: "py-[var(--space-section)]",
  compact: "py-[var(--space-section-compact)]",
  none: "",
};

const toneClasses: Record<SectionTone, string> = {
  default: "bg-transparent",
  surface: "bg-surface",
};

export default function Section({
  spacing = "default",
  tone = "default",
  containerSize = "default",
  containerClassName,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(spacingClasses[spacing], toneClasses[tone], className)}
      {...props}
    >
      <Container size={containerSize} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}
