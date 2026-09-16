import type { Metadata } from "next";
import ExperienceList from "@/components/ExperienceList";
import { Section, SectionHeader } from "@/components/ui";
import { orderedExperience } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional, leadership, and software project experience for Liam Mo.",
  alternates: { canonical: "/experience" },
  openGraph: {
    type: "website",
    title: "Experience — Liam Mo",
    description: "Professional, leadership, and software project experience for Liam Mo.",
  },
};

export default function ExperiencePage() {
  return (
    <Section aria-labelledby="experience-page-heading">
      <SectionHeader
        id="experience-page-heading"
        headingLevel="h1"
        eyebrow="Experience"
        title="Work and leadership experience"
        description="A fuller view of the roles, responsibilities, and skills behind my projects and professional work."
      />

      <div className="mt-10">
        <ExperienceList
          entries={orderedExperience}
          detailed
          emptyDescription="The route and shared experience model are complete. Exact public role wording, date ranges, locations, and any measurable outcomes are being held until they are confirmed rather than publishing guessed résumé information."
        />
      </div>
    </Section>
  );
}
