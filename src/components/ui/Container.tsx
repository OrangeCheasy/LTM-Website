import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

export type ContainerSize = "default" | "narrow" | "full";

interface ContainerProps extends ComponentPropsWithoutRef<"div"> {
  size?: ContainerSize;
}

const sizeClasses: Record<ContainerSize, string> = {
  default: "max-w-[var(--layout-max)]",
  narrow: "max-w-[var(--layout-reading)]",
  full: "max-w-none",
};

export default function Container({
  size = "default",
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-[var(--layout-gutter)]",
        sizeClasses[size],
        className,
      )}
      {...props}
    />
  );
}
