import { Tag } from "@/components/ui";
import type { ExperienceEntry } from "@/data/experience";

interface ExperienceListProps {
  entries: readonly ExperienceEntry[];
  detailed?: boolean;
  emptyDescription?: string;
  headingLevel?: "h2" | "h3";
}

export default function ExperienceList({
  entries,
  detailed = false,
  emptyDescription =
    "Role details, dates, and locations are being finalized before they are published.",
  headingLevel = "h3",
}: ExperienceListProps) {
  if (entries.length === 0) {
    return (
      <div className="border-y border-border py-6 sm:py-8" role="status">
        <p className="text-card text-text">Experience details are being finalized</p>
        <p className="mt-2 max-w-[var(--layout-reading)] text-body-secondary text-text-muted">
          {emptyDescription}
        </p>
      </div>
    );
  }

  const RoleHeading = headingLevel;

  return (
    <ol className="divide-y divide-border border-y border-border">
      {entries.map((entry) => (
        <li
          key={entry.id}
          className="grid gap-4 py-6 sm:py-8 md:grid-cols-[minmax(10rem,14rem)_minmax(0,1fr)] md:gap-8"
        >
          <div className="space-y-1 text-metadata text-text-muted">
            <p className="font-medium text-text-secondary">
              {entry.startDate} — {entry.endDate ?? "Present"}
            </p>
            <p>{entry.location}</p>
          </div>

          <div className="min-w-0">
            <RoleHeading className="text-card text-text">{entry.role}</RoleHeading>
            <p className="mt-1 text-body-secondary font-medium text-text-secondary">
              {entry.organization}
            </p>
            <p className="mt-4 max-w-[var(--layout-reading)] text-body-secondary text-text-muted">
              {entry.summary}
            </p>

            {detailed && entry.details?.length ? (
              <ul className="mt-5 max-w-[var(--layout-reading)] space-y-2 text-body-secondary text-text-secondary">
                {entry.details.map((detail) => (
                  <li key={detail} className="flex gap-3">
                    <span aria-hidden="true" className="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            {entry.skills?.length ? (
              <div className="mt-5 flex flex-wrap gap-2" aria-label="Skills and responsibilities">
                {entry.skills.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
