import SocialIcon from "@/components/SocialIcon";
import VisitorCounter from "@/components/VisitorCounter";
import { Container, IconLink } from "@/components/ui";
import { siteIdentity } from "@/data/site";
import { socialLinks } from "@/data/social";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg">
      <Container className="grid gap-6 py-8 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end sm:gap-8">
        <div>
          <p className="text-card text-text">{siteIdentity.name}</p>
          <p className="mt-1 text-body-secondary text-text-secondary">{siteIdentity.location}</p>
          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1">
            <p className="text-caption text-text-muted">© {year} {siteIdentity.name}</p>
            <span className="hidden text-border sm:inline" aria-hidden="true">•</span>
            <VisitorCounter />
          </div>
        </div>

        <div className="flex items-center gap-2" aria-label="Social and contact links">
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
