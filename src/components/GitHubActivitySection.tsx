import { Card, LinkButton, Section, SectionHeader, Tag } from "@/components/ui";
import { getGitHubActivity } from "@/lib/github";

const activityLevelClasses = {
  0: "h-2 bg-border",
  1: "h-3 bg-accent/25",
  2: "h-5 bg-accent/45",
  3: "h-7 bg-accent/70",
  4: "h-9 bg-accent",
} as const;

function formatRepositoryDate(value: string) {
  return new Intl.DateTimeFormat("en-CA", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(value));
}

export default async function GitHubActivitySection() {
  const activity = await getGitHubActivity();

  return (
    <Section spacing="compact" aria-labelledby="github-activity-heading">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeader
          id="github-activity-heading"
          eyebrow="Open source"
          title="GitHub Activity"
          description="Recent public development activity and repositories, fetched server-side from GitHub."
        />
        <LinkButton
          href={activity.profileUrl}
          target="_blank"
          rel="noreferrer"
          variant="ghost"
          size="sm"
        >
          View GitHub
        </LinkButton>
      </div>

      {!activity.hasLiveData ? (
        <Card className="mt-8">
          <p className="text-card text-text">@{activity.username}</p>
          <p className="mt-2 max-w-2xl text-body-secondary text-text-muted">
            Live GitHub activity is temporarily unavailable. The profile link above still leads to
            the public source directly.
          </p>
        </Card>
      ) : (
        <div className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <Card>
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <div>
                <p className="text-metadata font-medium text-accent">@{activity.username}</p>
                <h3 className="mt-1 text-card text-text">Recent public activity</h3>
              </div>
              <p className="text-metadata text-text-muted">
                {activity.recentEventCount} events / 14 days
              </p>
            </div>

            <div
              className="mt-7"
              role="img"
              aria-label={`Recent public GitHub activity: ${activity.recentEventCount} public events across the last 14 days.`}
            >
              <div className="flex h-10 items-end gap-1.5" aria-hidden="true">
                {activity.activityDays.map((day) => (
                  <span
                    key={day.date}
                    className={`min-w-0 flex-1 rounded-sm transition-[height,opacity] ${activityLevelClasses[day.level]}`}
                    title={`${day.label}: ${day.count} public event${day.count === 1 ? "" : "s"}`}
                  />
                ))}
              </div>
              <div className="mt-2 flex justify-between text-caption text-text-muted" aria-hidden="true">
                <span>{activity.activityDays[0]?.label}</span>
                <span>{activity.activityDays.at(-1)?.label}</span>
              </div>
            </div>

            <dl className="mt-7 grid grid-cols-2 gap-4 border-t border-border pt-5">
              <div>
                <dt className="text-caption uppercase tracking-[0.12em] text-text-muted">
                  Public repos
                </dt>
                <dd className="mt-1 text-card text-text">
                  {activity.publicRepoCount ?? "—"}
                </dd>
              </div>
              <div>
                <dt className="text-caption uppercase tracking-[0.12em] text-text-muted">
                  Followers
                </dt>
                <dd className="mt-1 text-card text-text">
                  {activity.followerCount ?? "—"}
                </dd>
              </div>
            </dl>
          </Card>

          <div>
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="text-card text-text">Recently pushed public repositories</h3>
              <span className="text-caption text-text-muted">GitHub public data</span>
            </div>

            {activity.recentRepositories.length > 0 ? (
              <div className="mt-4 grid gap-3">
                {activity.recentRepositories.map((repository) => (
                  <a
                    key={repository.id}
                    href={repository.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-[var(--radius-card)] border border-border bg-surface px-5 py-4 transition-colors hover:border-accent focus-visible:border-accent"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h4 className="text-body font-medium text-text group-hover:text-accent">
                          {repository.name}
                        </h4>
                        <p className="mt-1 line-clamp-2 text-body-secondary text-text-muted">
                          {repository.description ?? "Public repository on GitHub."}
                        </p>
                      </div>
                      {repository.language ? <Tag>{repository.language}</Tag> : null}
                    </div>
                    <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-caption text-text-muted">
                      <span>Updated {formatRepositoryDate(repository.pushedAt)}</span>
                      <span>{repository.stars} stars</span>
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <Card className="mt-4">
                <p className="text-body-secondary text-text-muted">
                  Repository details are temporarily unavailable. Visit the GitHub profile for the
                  current public repository list.
                </p>
              </Card>
            )}
          </div>
        </div>
      )}
    </Section>
  );
}
