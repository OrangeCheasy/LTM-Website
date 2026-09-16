import type { ButtonHTMLAttributes } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

interface StyleOptions {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border border-accent bg-accent text-bg hover:border-accent-hover hover:bg-accent-hover",
  secondary:
    "border border-border bg-transparent text-text hover:border-accent hover:bg-accent-dim",
  ghost:
    "border border-transparent bg-transparent text-text-secondary hover:bg-surface-2 hover:text-text",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-metadata",
  md: "h-11 px-5 text-body-secondary",
  lg: "h-12 px-6 text-body",
};

export function buttonStyles({
  variant = "secondary",
  size = "md",
  className,
}: StyleOptions = {}) {
  return cn(
    "inline-flex shrink-0 items-center justify-center gap-2 rounded-[var(--radius-control)] font-medium transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, StyleOptions {}

export function Button({
  variant = "secondary",
  size = "md",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonStyles({ variant, size, className })}
      {...props}
    />
  );
}

interface LinkButtonProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
    StyleOptions {
  href: string;
}

export function LinkButton({
  href,
  variant = "secondary",
  size = "md",
  className,
  rel,
  target,
  ...props
}: LinkButtonProps) {
  const safeRel = target === "_blank" ? rel ?? "noreferrer" : rel;

  return (
    <Link
      href={href}
      target={target}
      rel={safeRel}
      className={buttonStyles({ variant, size, className })}
      {...props}
    />
  );
}
