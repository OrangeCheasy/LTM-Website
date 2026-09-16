import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

export default function Card({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-card)] border border-border bg-surface p-[var(--space-card)]",
        className,
      )}
      {...props}
    />
  );
}
