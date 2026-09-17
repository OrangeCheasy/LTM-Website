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
    <ol className="relative space-y-0 before:absolute before:bottom-3 before:left-[0.45rem] before:top-3 before:w-px before:bg-border">
      {entries.map((entry) => (
        <li key={entry.id} className="relative pb-10 pl-10 last:pb-0 sm:pl-12">
          <span
            aria-hidden="true"
            className="absolute left-0 top-2 z-10 h-[0.9rem] w-[0.9rem] rounded-full border-2 border-bg bg-accent shadow-[0_0_0_1px_var(--color-border)]"
          />

          <div className="flex flex-col gap-1 text-metadata text-text-muted sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3 sm:gap-y-1">
            <span className="font-medium text-text-secondary">
              {entry.startDate} — {entry.endDate ?? "Present"}
            </span>
            <span className="hidden sm:inline" aria-hidden="true">•</span>
            <span>{entry.location}</span>
          </div>

          <div className="mt-2 min-w-0">
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
                    <span
                      aria-hidden="true"
                      className="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-accent"
                    />
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
