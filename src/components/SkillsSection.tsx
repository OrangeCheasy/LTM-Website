import SkillsMarquee from "@/components/SkillsMarquee";
import { Section, SectionHeader } from "@/components/ui";
import { featuredSkills } from "@/data/skills";

export default function SkillsSection() {
  return (
    <Section spacing="compact" aria-labelledby="skills-heading">
      <SectionHeader
        id="skills-heading"
        eyebrow="Technologies"
        title="Tools I build with"
        description="Languages, frameworks, platforms, and development tools I use across web, automation, data, and game projects."
      />

      <div className="mt-8 -mx-[var(--layout-gutter)] sm:mx-0">
        <SkillsMarquee skills={featuredSkills} />
      </div>
    </Section>
  );
}
