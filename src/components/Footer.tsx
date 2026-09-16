import Link from "next/link";
import Logo from "@/components/Logo";
import { Container, IconLink } from "@/components/ui";
import { siteIdentity } from "@/data/site";
import { socialLinks, type SocialKind } from "@/data/social";

function SocialIcon({ kind }: { kind: SocialKind }) {
  if (kind === "github") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.79-.25.79-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .3.21.66.8.55C20.21 21.38 23.5 17.07 23.5 12 23.5 5.73 18.27.5 12 .5Z" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

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
