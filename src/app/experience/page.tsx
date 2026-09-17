import type { Metadata } from "next";
import ExperienceList from "@/components/ExperienceList";
import PageHero from "@/components/PageHero";
import { Section, SectionHeader } from "@/components/ui";
import { orderedExperience } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional, leadership, and software project experience for Liam Mo.",
  alternates: { canonical: "/experience" },
  robots: { index: orderedExperience.length > 0, follow: true },
  openGraph: {
    type: "website",
    url: "/experience",
    title: "Experience — Liam Mo",
    description: "Professional, leadership, and software project experience for Liam Mo.",
  },
};

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        id="experience-page-heading"
        eyebrow="Experience"
        title="Work and leadership experience"
        description="A fuller view of the roles, responsibilities, and skills behind my projects and professional work."
      />

      <Section spacing="compact" aria-labelledby="experience-timeline-heading">
        <SectionHeader
          id="experience-timeline-heading"
          eyebrow="Timeline"
          title="Roles and responsibilities"
          description="Each workplace keeps its own timeline so role progression stays clear without mixing unrelated organizations together."
        />

        <div className="mt-8">
          <ExperienceList
            entries={orderedExperience}
            detailed
            headingLevel="h3"
            emptyDescription="The route and shared experience model are complete. Exact public role wording, date ranges, locations, and any measurable outcomes are being held until they are confirmed rather than publishing guessed résumé information."
          />
        </div>
      </Section>
    </>
  );
}
