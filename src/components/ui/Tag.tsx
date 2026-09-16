import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

export default function Tag({
  className,
  ...props
}: ComponentPropsWithoutRef<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-surface-2 px-2.5 py-1 text-caption font-medium text-text-secondary",
        className,
      )}
      {...props}
    />
  );
}
