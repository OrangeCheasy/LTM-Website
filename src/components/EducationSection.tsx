import { MetadataRow, Section, SectionHeader, Tag } from "@/components/ui";
import { sortedEducation } from "@/data/education";

function educationDate(entry: (typeof sortedEducation)[number]) {
  if (entry.startDate && entry.endDate) {
    return `${entry.startDate} — ${entry.endDate}`;
  }

  return entry.endDate ?? entry.startDate;
}

export default function EducationSection() {
  return (
    <Section spacing="compact" aria-labelledby="education-heading">
      <SectionHeader
        id="education-heading"
        eyebrow="Education"
        title="Computer science studies"
        description="Academic foundations in computer science, mathematics, and software development alongside practical projects."
      />

      <div className="mt-8">
        {sortedEducation.length > 0 ? (
          <ol className="divide-y divide-border border-y border-border">
            {sortedEducation.map((entry) => {
              const date = educationDate(entry);
              const metadata = [
                ...(date ? [{ label: "Dates", value: date }] : []),
                { label: "Location", value: entry.location },
              ];

              return (
                <li key={entry.id} className="py-6 first:pt-5 last:pb-5">
                  <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_minmax(16rem,0.75fr)] md:items-start md:gap-8">
                    <div>
                      <h3 className="text-card text-text">{entry.program}</h3>
                      <p className="mt-1 text-body-secondary text-text-secondary">
                        {entry.institution}
                      </p>
                    </div>
                    <MetadataRow items={metadata} className="md:justify-end" />
                  </div>

                  {entry.coursework?.length ? (
                    <div className="mt-4">
                      <p className="text-caption font-medium uppercase tracking-[0.12em] text-text-muted">
                        Relevant coursework
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {entry.coursework.map((course) => (
                          <Tag key={course}>{course}</Tag>
                        ))}
                      </div>
                    </div>
                  ) : null}

                  {entry.details?.length ? (
                    <ul className="mt-4 max-w-2xl space-y-2 text-body-secondary text-text-muted">
                      {entry.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              );
            })}
          </ol>
        ) : (
          <div className="rounded-card border border-border bg-surface px-5 py-5 sm:px-6">
            <p className="max-w-2xl text-body-secondary text-text-secondary">
              Education details are being finalized.
            </p>
          </div>
        )}
      </div>
    </Section>
  );
}
