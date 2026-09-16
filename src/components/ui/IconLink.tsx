import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

interface IconLinkProps {
  href: string;
  label: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}

const classes =
  "inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-muted transition-colors duration-200 hover:border-accent hover:text-text";

export default function IconLink({
  href,
  label,
  children,
  className,
  external = false,
}: IconLinkProps) {
  if (external) {
    return (
      <a
        href={href}
        aria-label={label}
        target="_blank"
        rel="noreferrer"
        className={cn(classes, className)}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} aria-label={label} className={cn(classes, className)}>
      {children}
    </Link>
  );
}
