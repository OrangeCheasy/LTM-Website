import { LinkButton, MetadataRow, Section, SectionHeader } from "@/components/ui";
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
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeader
          id="education-heading"
          eyebrow="Education"
          title="Computer science studies"
          description="Full-time study alongside practical software projects and development work."
        />
        <LinkButton href="/about#outside-tech" variant="ghost" size="sm">
          Outside the Tech
        </LinkButton>
      </div>

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
              I’m currently studying computer science full time in Calgary. Exact institution,
              date, and coursework details are being held back until the final public wording is
              confirmed.
            </p>
          </div>
        )}
      </div>
    </Section>
  );
}
