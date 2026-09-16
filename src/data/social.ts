export type SocialKind = "github" | "linkedin" | "contact";

export interface SocialLink {
  kind: SocialKind;
  label: string;
  href: string;
  external?: boolean;
}

/*
  LinkedIn support is built into the shared icon system, but the link remains
  intentionally omitted until the exact profile URL is supplied. Do not guess
  or publish a profile URL from a name search.
*/
export const socialLinks: readonly SocialLink[] = [
  {
    kind: "github",
    label: "GitHub",
    href: "https://github.com/OrangeCheasy",
    external: true,
  },
  {
    kind: "contact",
    label: "Contact",
    href: "/contact",
  },
];
