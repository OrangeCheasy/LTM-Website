export type SocialKind = "github" | "contact";

export interface SocialLink {
  kind: SocialKind;
  label: string;
  href: string;
  external?: boolean;
}

/*
  LinkedIn is intentionally omitted until the owner supplies the exact profile
  URL. Phase 2 can add it without changing the components that consume this data.
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
