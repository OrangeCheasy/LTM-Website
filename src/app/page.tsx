import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import FeaturedWork from "@/components/FeaturedWork";
import GitHubActivitySection from "@/components/GitHubActivitySection";
import ProfileHero from "@/components/ProfileHero";
import ServicesSection from "@/components/ServicesSection";
import SkillsSection from "@/components/SkillsSection";
import { LinkButton, Section, SectionHeader } from "@/components/ui";
import { profileContent } from "@/data/profile";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  description: profileContent.intro,
  openGraph: {
    type: "website",
    title: "Liam Mo — Software Developer",
    description: profileContent.intro,
  },
  // Search indexing remains intentionally disabled until the Phase 9 launch audit.
  robots: { index: false, follow: false },
};

export default function Home() {
  return (
    <>
      <ProfileHero />

      <Section spacing="compact" aria-labelledby="featured-work-heading">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            id="featured-work-heading"
            eyebrow="Selected work"
            title="Featured Work"
            description="A selection of software, game, and development projects."
          />
          <LinkButton href="/projects" variant="ghost" size="sm">
            View More
          </LinkButton>
        </div>

        <div className="mt-8">
          <FeaturedWork projects={projects} />
        </div>
      </Section>

      <ExperienceSection />

      <SkillsSection />

      <EducationSection />

      <GitHubActivitySection />

      <ServicesSection />

      <CTASection
        title="Want to build something useful?"
        description="If you have a project, software idea, or technical problem you want to discuss, send me the details and I’ll get back to you."
        ctaLabel="Contact Me"
      />
    </>
  );
}
