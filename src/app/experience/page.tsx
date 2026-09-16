import type { Metadata } from "next";
import { Card, LinkButton, MetadataRow, Section, SectionHeader, Tag } from "@/components/ui";
import { experience } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional, leadership, and software project experience for Liam Mo.",
};

export default function ExperiencePage() {
  return (
    <Section>
      <SectionHeader
        headingLevel="h1"
        eyebrow="Experience"
        title="Work and leadership experience"
        description="A dedicated route for the experience behind the projects. Final role details and dates will be populated from the shared experience data once the portfolio copy is approved."
      />

      <div className="mt-10 grid gap-[var(--space-grid)]">
        {experience.length > 0 ? (
          experience.map((entry) => (
            <Card key={entry.id}>
              <MetadataRow
                items={[
                  { label: "Dates", value: `${entry.startDate} — ${entry.endDate ?? "Present"}` },
                  { label: "Location", value: entry.location },
                ]}
              />
              <h2 className="mt-4 text-card text-text">{entry.role}</h2>
              <p className="mt-1 text-body-secondary text-text-secondary">
                {entry.organization}
              </p>
              <p className="mt-4 max-w-[var(--layout-reading)] text-body-secondary text-text-muted">
                {entry.summary}
              </p>
              {entry.skills?.length ? (
                <div className="mt-5 flex flex-wrap gap-2">
                  {entry.skills.map((skill) => (
                    <Tag key={skill}>{skill}</Tag>
                  ))}
                </div>
              ) : null}
            </Card>
          ))
        ) : (
          <Card className="max-w-[var(--layout-reading)]">
            <h2 className="text-card text-text">Experience details are being consolidated</h2>
            <p className="mt-3 text-body-secondary text-text-muted">
              The route and data model are ready; detailed roles, dates, and descriptions are intentionally held until the Phase 4 content is approved rather than publishing guessed information.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <LinkButton href="/about" variant="secondary" size="sm">
                About me
              </LinkButton>
              <LinkButton href="/contact" variant="ghost" size="sm">
                Contact
              </LinkButton>
            </div>
          </Card>
        )}
      </div>
    </Section>
  );
}
