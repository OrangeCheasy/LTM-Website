import Image from "next/image";
import SocialIcon from "@/components/SocialIcon";
import { Container, IconLink, LinkButton } from "@/components/ui";
import { profileContent } from "@/data/profile";
import { siteIdentity } from "@/data/site";
import { socialLinks } from "@/data/social";

export default function ProfileHero() {
  return (
    <section aria-labelledby="profile-hero-title" className="border-b border-border/70">
      <Container className="grid gap-10 py-[var(--space-section-compact)] lg:grid-cols-[minmax(0,1fr)_minmax(18rem,26rem)] lg:items-center lg:gap-16">
        <div className="max-w-[var(--layout-reading)]">
          <p className="text-metadata font-medium text-accent">{siteIdentity.location}</p>

          <h1 id="profile-hero-title" className="mt-3 text-display text-text">
            {siteIdentity.name}
          </h1>

          <div className="mt-5 flex items-center gap-2" aria-label="Social and contact links">
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

          <p className="mt-7 text-section text-text-secondary">{siteIdentity.title}</p>
          <p className="mt-[var(--space-heading-body)] text-body text-text-muted">
            {profileContent.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <LinkButton href={profileContent.resumeHref} variant="primary" size="lg">
              View Resume
            </LinkButton>
            <LinkButton href="/projects" variant="secondary" size="lg">
              View Projects
            </LinkButton>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[22rem] overflow-hidden rounded-[var(--radius-card)] border border-border bg-surface lg:max-w-none">
          <div className="relative aspect-[4/5]">
            {profileContent.image ? (
              <Image
                src={profileContent.image.src}
                alt={profileContent.image.alt}
                fill
                priority
                sizes="(min-width: 1024px) 26rem, 22rem"
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-surface-2 px-6 text-center">
                <div
                  aria-hidden="true"
                  className="flex h-24 w-24 items-center justify-center rounded-full border border-accent/70 bg-accent-dim font-display text-section text-accent"
                >
                  LM
                </div>
                <p className="text-caption text-text-muted">Profile photo pending final asset</p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
