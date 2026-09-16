import type { Metadata } from "next";
import { Card, LinkButton, Section, SectionHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume and professional background for Liam Mo.",
};

export default function ResumePage() {
  return (
    <Section>
      <SectionHeader
        headingLevel="h1"
        eyebrow="Resume"
        title="Liam Mo — Software Developer"
        description="The public resume file is being finalized. This route is stable so the homepage action and future PDF can keep the same destination."
      />

      <Card className="mt-10 max-w-[var(--layout-reading)]">
        <h2 className="text-card text-text">Resume asset pending</h2>
        <p className="mt-3 text-body-secondary text-text-muted">
          The final PDF has not been added to the repository yet. In the meantime, you can review current projects or get in touch directly.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <LinkButton href="/projects" variant="secondary" size="sm">
            View Projects
          </LinkButton>
          <LinkButton href="/contact" variant="ghost" size="sm">
            Contact
          </LinkButton>
        </div>
      </Card>
    </Section>
  );
}
