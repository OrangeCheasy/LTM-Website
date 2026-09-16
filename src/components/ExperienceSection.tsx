import ExperienceList from "@/components/ExperienceList";
import { LinkButton, Section, SectionHeader } from "@/components/ui";
import { featuredExperience } from "@/data/experience";

export default function ExperienceSection() {
  return (
    <Section spacing="compact" aria-labelledby="experience-heading">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeader
          id="experience-heading"
          eyebrow="Experience"
          title="Work and leadership"
          description="Professional experience focused on responsibility, progression, and the work behind the projects."
        />
        <LinkButton href="/experience" variant="ghost" size="sm">
          View Details
        </LinkButton>
      </div>

      <div className="mt-8">
        <ExperienceList
          entries={featuredExperience}
          emptyDescription="The experience layout is ready. I’m holding back exact roles, dates, and locations until the final public wording is confirmed."
        />
      </div>
    </Section>
  );
}
