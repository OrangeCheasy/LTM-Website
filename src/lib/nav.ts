import {
  mainNavigation,
  siteIdentity,
  type SiteNavigationItem,
} from "@/data/site";

export type NavLink = SiteNavigationItem;

export const mainNav = mainNavigation;

/* Shared default CTA copy for CTASection. */
export const CTA = { href: "/contact", label: "Contact Me" } as const;

export const SITE_NAME = siteIdentity.name;

function matchesPath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function isNavItemActive(pathname: string, item: SiteNavigationItem) {
  if (matchesPath(pathname, item.href)) return true;
  return item.aliases?.some((alias) => matchesPath(pathname, alias)) ?? false;
}
