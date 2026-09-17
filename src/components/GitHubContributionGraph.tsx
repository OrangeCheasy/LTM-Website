import type { GitHubContributionDay } from "@/lib/github";

interface GitHubContributionGraphProps {
  days: readonly GitHubContributionDay[];
  contributionCount: number | null;
}

interface CalendarWeek {
  start: Date;
  days: readonly (GitHubContributionDay | null)[];
}

const contributionColors = {
  0: "#161b22",
  1: "#0e4429",
  2: "#006d32",
  3: "#26a641",
  4: "#39d353",
} as const;

const CELL_SIZE = 10;
const CELL_GAP = 3;

function dateKey(date: Date) {
  return date.toISOString().slice(0, 10);
}

function parseDate(value: string) {
  return new Date(`${value}T00:00:00Z`);
}

function addDays(date: Date, amount: number) {
  const next = new Date(date);
  next.setUTCDate(next.getUTCDate() + amount);
  return next;
}

function buildWeeks(days: readonly GitHubContributionDay[]): CalendarWeek[] {
  if (days.length === 0) return [];

  const byDate = new Map(days.map((day) => [day.date, day]));
  const first = parseDate(days[0].date);
  const last = parseDate(days[days.length - 1].date);
  const start = addDays(first, -first.getUTCDay());
  const end = addDays(last, 6 - last.getUTCDay());
  const weeks: CalendarWeek[] = [];

  for (let weekStart = start; weekStart <= end; weekStart = addDays(weekStart, 7)) {
    weeks.push({
      start: weekStart,
      days: Array.from({ length: 7 }, (_, dayIndex) => {
        const date = addDays(weekStart, dayIndex);
        return byDate.get(dateKey(date)) ?? null;
      }),
    });
  }

  return weeks;
}

function buildMonthLabels(weeks: readonly CalendarWeek[]) {
  const labels: { label: string; weekIndex: number }[] = [];
  let lastMonth = -1;

  weeks.forEach((week, weekIndex) => {
    const firstWeekOfMonthDay = week.days.find((day) => {
      if (!day) return false;
      const date = parseDate(day.date);
      return date.getUTCDate() <= 7;
    });

    if (!firstWeekOfMonthDay) return;

    const date = parseDate(firstWeekOfMonthDay.date);
    const month = date.getUTCMonth();
    if (month === lastMonth) return;

    labels.push({
      label: new Intl.DateTimeFormat("en-US", {
        month: "short",
        timeZone: "UTC",
      }).format(date),
      weekIndex,
    });
    lastMonth = month;
  });

  return labels;
}

export default function GitHubContributionGraph({
  days,
  contributionCount,
}: GitHubContributionGraphProps) {
  const weeks = buildWeeks(days);
  const monthLabels = buildMonthLabels(weeks);
  const calendarWidth = weeks.length * CELL_SIZE + Math.max(0, weeks.length - 1) * CELL_GAP;
  const summary =
    contributionCount === null
      ? "GitHub contributions in the last year"
      : `${contributionCount.toLocaleString("en-US")} contributions in the last year`;

  if (weeks.length === 0) {
    return (
      <div className="rounded-md border border-[#30363d] bg-[#0d1117] px-4 py-5 text-sm text-[#8b949e]">
        Contribution calendar is temporarily unavailable.
      </div>
    );
  }

  return (
    <div className="rounded-md border border-[#30363d] bg-[#0d1117] p-4 text-[#c9d1d9]">
      <p className="mb-3 text-[16px] font-normal leading-6">{summary}</p>

      <div className="no-scrollbar overflow-x-auto pb-1">
        <div className="w-max min-w-full">
          <div className="ml-8 h-[18px]" style={{ width: calendarWidth }} aria-hidden="true">
            <div
              className="grid h-full text-[12px] leading-[18px] text-[#8b949e]"
              style={{
                gridTemplateColumns: `repeat(${weeks.length}, ${CELL_SIZE}px)`,
                columnGap: `${CELL_GAP}px`,
              }}
            >
              {monthLabels.map((month) => (
                <span
                  key={`${month.label}-${month.weekIndex}`}
                  style={{ gridColumn: `${month.weekIndex + 1} / span 4` }}
                >
                  {month.label}
                </span>
              ))}
            </div>
          </div>

          <div
            className="mt-1 flex"
            role="img"
            aria-label={summary}
          >
            <div
              className="mr-1 grid w-7 shrink-0 text-[12px] leading-[10px] text-[#8b949e]"
              style={{
                gridTemplateRows: `repeat(7, ${CELL_SIZE}px)`,
                rowGap: `${CELL_GAP}px`,
              }}
              aria-hidden="true"
            >
              <span />
              <span>Mon</span>
              <span />
              <span>Wed</span>
              <span />
              <span>Fri</span>
              <span />
            </div>

            <div className="flex" style={{ columnGap: `${CELL_GAP}px` }} aria-hidden="true">
              {weeks.map((week) => (
                <div
                  key={dateKey(week.start)}
                  className="flex flex-col"
                  style={{ rowGap: `${CELL_GAP}px` }}
                >
                  {week.days.map((day, dayIndex) =>
                    day ? (
                      <span
                        key={day.date}
                        title={day.description}
                        className="block rounded-[2px]"
                        style={{
                          width: CELL_SIZE,
                          height: CELL_SIZE,
                          backgroundColor: contributionColors[day.level],
                          boxShadow: "inset 0 0 0 1px rgba(240,246,252,0.03)",
                        }}
                      />
                    ) : (
                      <span
                        key={`${dateKey(week.start)}-${dayIndex}`}
                        className="block"
                        style={{ width: CELL_SIZE, height: CELL_SIZE }}
                      />
                    ),
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-[12px] text-[#8b949e]">
        <a
          href="https://docs.github.com/en/account-and-profile/concepts/contributions-on-your-profile"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#58a6ff] hover:underline"
        >
          Learn how we count contributions
        </a>

        <div className="flex items-center gap-1" aria-label="Contribution activity scale from less to more">
          <span className="mr-1">Less</span>
          {(Object.keys(contributionColors) as unknown as Array<keyof typeof contributionColors>).map(
            (level) => (
              <span
                key={level}
                className="block rounded-[2px]"
                style={{
                  width: CELL_SIZE,
                  height: CELL_SIZE,
                  backgroundColor: contributionColors[level],
                  boxShadow: "inset 0 0 0 1px rgba(240,246,252,0.03)",
                }}
                aria-hidden="true"
              />
            ),
          )}
          <span className="ml-1">More</span>
        </div>
      </div>
    </div>
  );
}
