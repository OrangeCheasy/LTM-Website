import Link from "next/link";
import Logo from "@/components/Logo";
import SocialIcon from "@/components/SocialIcon";
import { Container, IconLink } from "@/components/ui";
import { siteIdentity } from "@/data/site";
import { socialLinks } from "@/data/social";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg">
      <Container className="flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            aria-label={`${siteIdentity.name} home`}
            className="shrink-0 text-logo transition-colors hover:text-accent-hover"
          >
            <Logo className="h-5 w-auto" />
          </Link>
          <div>
            <p className="text-metadata text-text-secondary">
              © {year} {siteIdentity.name}
            </p>
            <p className="mt-0.5 text-caption text-text-muted">{siteIdentity.location}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {socialLinks.map((link) => (
            <IconLink
              key={link.kind}
              href={link.href}
              label={link.label}
              external={link.external}
            >
              <SocialIcon kind={link.kind} />
            </IconLink>
          ))}
        </div>
      </Container>
    </footer>
  );
}
