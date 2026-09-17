import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CTASection from "@/components/CTASection";
import LineIcon from "@/components/LineIcon";
import PageHero from "@/components/PageHero";
import AutomationHeroArt from "@/components/service/AutomationHeroArt";
import AutomationProcessArt from "@/components/service/AutomationProcessArt";
import RobloxHeroArt from "@/components/service/RobloxHeroArt";
import RobloxProcessArt from "@/components/service/RobloxProcessArt";
import { Card, LinkButton, Section, SectionHeader } from "@/components/ui";
import { getService, servicePage, serviceSlugs } from "@/data/services";
import type { ServiceSlug } from "@/lib/types";

export const dynamicParams = false;

const HERO_ART: Partial<
  Record<ServiceSlug, React.ComponentType<{ className?: string }>>
> = {
  automation: AutomationHeroArt,
  roblox: RobloxHeroArt,
};

const PROCESS_ART: Partial<
  Record<ServiceSlug, React.ComponentType<{ className?: string }>>
> = {
  automation: AutomationProcessArt,
  roblox: RobloxProcessArt,
};

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) return {};

  return {
    title: service.title,
    description: service.tagline,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      type: "website",
      url: `/services/${service.slug}`,
      title: `${service.title} — Liam Mo`,
      description: service.tagline,
    },
  };
}

function offerGridClass(count: number) {
  if (count <= 2) return "sm:grid-cols-2";
  if (count === 3) return "sm:grid-cols-2 lg:grid-cols-3";
  return "sm:grid-cols-2 lg:grid-cols-3";
}

function processGridClass(count: number) {
  if (count <= 2) return "sm:grid-cols-2";
  if (count === 3) return "sm:grid-cols-2 lg:grid-cols-3";
  return "sm:grid-cols-2 lg:grid-cols-4";
}

export default async function ServiceDetailPage({
  params,
}: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const page = servicePage(service);
  const HeroArtwork = HERO_ART[service.slug];
  const ProcessArtwork = PROCESS_ART[service.slug];

  return (
    <>
      <PageHero
        id="service-heading"
        eyebrow={service.title}
        title={
          <>
            {page.headline.map((line, lineIndex) => (
              <span key={lineIndex} className="block">
                {line.map((segment, segmentIndex) => (
                  <span key={segmentIndex} className={segment.accent ? "text-accent" : undefined}>
                    {segment.text}
                  </span>
                ))}
              </span>
            ))}
          </>
        }
        description={page.blurb}
        backLink={{ href: "/#services", label: "Back to services" }}
        asideSize="wide"
        actions={
          <>
            <LinkButton href={`/contact?topic=${service.slug}`} variant="primary">
              Get started
              <span aria-hidden="true">↗</span>
            </LinkButton>
            {page.secondaryCta ? (
              <LinkButton href={page.secondaryCta.href} variant="secondary">
                {page.secondaryCta.label}
                <LineIcon name={page.secondaryCta.icon} className="h-4 w-4 shrink-0" />
              </LinkButton>
            ) : null}
          </>
        }
        aside={
          HeroArtwork ? (
            <div className="hidden lg:block">
              <HeroArtwork className="w-full" />
            </div>
          ) : undefined
        }
      />

      <Section spacing="compact" aria-labelledby="offer-heading">
        <SectionHeader
          id="offer-heading"
          eyebrow={page.offer.label}
          title={page.offer.heading}
          description={page.offer.body}
        />

        <ul className={`mt-8 grid gap-[var(--space-grid)] ${offerGridClass(page.offer.cards.length)}`}>
          {page.offer.cards.map((card) => (
            <li key={card.title}>
              <Card className="h-full">
                <span className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-control)] bg-accent-dim text-accent">
                  <LineIcon name={card.icon} className="h-5 w-5" />
                </span>
                <h2 className="mt-4 text-card text-text">{card.title}</h2>
                {card.description ? (
                  <p className="mt-2 text-body-secondary text-text-muted">{card.description}</p>
                ) : null}
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        spacing="compact"
        tone="surface"
        aria-labelledby="process-heading"
        className="border-y border-border/70"
      >
        <div className={ProcessArtwork ? "grid gap-8 lg:grid-cols-[minmax(16rem,0.55fr)_minmax(0,1fr)] lg:gap-12" : undefined}>
          {ProcessArtwork ? (
            <div className="hidden lg:block">
              <ProcessArtwork className="w-full" />
            </div>
          ) : null}

          <div>
            <SectionHeader
              id="process-heading"
              eyebrow={page.process.label}
              title={page.process.heading}
              description={page.process.body}
            />

            <ol className={`mt-8 grid gap-4 ${processGridClass(page.process.steps.length)}`}>
              {page.process.steps.map((step, index) => (
                <li key={step.title}>
                  <Card className="h-full bg-bg">
                    <div className="flex items-center justify-between gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-control)] bg-accent-dim text-accent">
                        <LineIcon name={step.icon} className="h-5 w-5" />
                      </span>
                      <span className="text-metadata font-semibold text-accent">0{index + 1}</span>
                    </div>
                    <h3 className="mt-4 text-card text-text">{step.title}</h3>
                    {step.description ? (
                      <p className="mt-2 text-body-secondary text-text-muted">{step.description}</p>
                    ) : null}
                  </Card>
                </li>
              ))}
            </ol>

            {page.panel ? (
              <Card className="mt-6 bg-bg">
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-control)] bg-accent-dim text-accent">
                    <LineIcon name={page.panel.icon} className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-card text-text">{page.panel.heading}</h3>
                    {page.panel.points.length > 0 ? (
                      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                        {page.panel.points.map((point) => (
                          <li key={point} className="flex items-center gap-2 text-body-secondary text-text-muted">
                            <LineIcon name="check" className="h-4 w-4 shrink-0 text-accent" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>
                <LinkButton
                  href={`/contact?topic=${service.slug}`}
                  variant="primary"
                  size="sm"
                  className="mt-5"
                >
                  Contact me
                </LinkButton>
              </Card>
            ) : null}
          </div>
        </div>
      </Section>

      <CTASection
        title={page.closing.title}
        description={page.closing.description}
        ctaLabel="Get started"
        filled
        secondary={{ href: "/#services", label: "View other services" }}
        topic={service.slug}
      />
    </>
  );
}
