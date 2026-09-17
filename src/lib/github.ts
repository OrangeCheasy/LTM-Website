const GITHUB_USERNAME = "OrangeCheasy";
const GITHUB_API_BASE = "https://api.github.com";
const GITHUB_PROFILE_URL = `https://github.com/${GITHUB_USERNAME}`;
const GITHUB_REVALIDATE_SECONDS = 60 * 60;
const ACTIVITY_DAY_COUNT = 14;

const githubHeaders = {
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
  "User-Agent": "liamthemo-portfolio",
} as const;

interface GitHubProfileResponse {
  login: string;
  html_url: string;
  public_repos: number;
  followers: number;
}

interface GitHubRepositoryResponse {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  archived: boolean;
  pushed_at: string;
}

interface GitHubEventResponse {
  id: string;
  type: string;
  created_at: string;
}

export interface GitHubActivityDay {
  date: string;
  label: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export interface GitHubPublicRepository {
  id: number;
  name: string;
  url: string;
  description: string | null;
  language: string | null;
  stars: number;
  pushedAt: string;
}

export interface GitHubActivityData {
  username: string;
  profileUrl: string;
  publicRepoCount: number | null;
  followerCount: number | null;
  recentEventCount: number;
  activityDays: readonly GitHubActivityDay[];
  recentRepositories: readonly GitHubPublicRepository[];
  hasLiveData: boolean;
}

async function fetchGitHub<T>(path: string): Promise<T | null> {
  try {
    const response = await fetch(`${GITHUB_API_BASE}${path}`, {
      headers: githubHeaders,
      next: { revalidate: GITHUB_REVALIDATE_SECONDS },
    });

    if (!response.ok) {
      return null;
    }

    return (await response.json()) as T;
  } catch {
    return null;
  }
}

function dateKey(date: Date) {
  return date.toISOString().slice(0, 10);
}

function formatDayLabel(date: Date) {
  return new Intl.DateTimeFormat("en-CA", {
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  }).format(date);
}

function activityLevel(count: number, maximum: number): 0 | 1 | 2 | 3 | 4 {
  if (count === 0 || maximum === 0) return 0;

  const ratio = count / maximum;
  if (ratio <= 0.25) return 1;
  if (ratio <= 0.5) return 2;
  if (ratio <= 0.75) return 3;
  return 4;
}

function buildActivityDays(events: readonly GitHubEventResponse[]) {
  const now = new Date();
  const counts = new Map<string, number>();

  for (const event of events) {
    const key = dateKey(new Date(event.created_at));
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }

  const rawDays = Array.from({ length: ACTIVITY_DAY_COUNT }, (_, index) => {
    const date = new Date(now);
    date.setUTCHours(0, 0, 0, 0);
    date.setUTCDate(date.getUTCDate() - (ACTIVITY_DAY_COUNT - 1 - index));

    const dateString = dateKey(date);
    return {
      date: dateString,
      label: formatDayLabel(date),
      count: counts.get(dateString) ?? 0,
    };
  });

  const maximum = Math.max(0, ...rawDays.map((day) => day.count));

  return rawDays.map((day) => ({
    ...day,
    level: activityLevel(day.count, maximum),
  }));
}

export async function getGitHubActivity(): Promise<GitHubActivityData> {
  const [profile, repositories, events] = await Promise.all([
    fetchGitHub<GitHubProfileResponse>(`/users/${GITHUB_USERNAME}`),
    fetchGitHub<GitHubRepositoryResponse[]>(
      `/users/${GITHUB_USERNAME}/repos?type=owner&sort=pushed&direction=desc&per_page=8`,
    ),
    fetchGitHub<GitHubEventResponse[]>(`/users/${GITHUB_USERNAME}/events/public?per_page=100`),
  ]);

  const publicEvents = events ?? [];
  const activityDays = buildActivityDays(publicEvents);
  const activityDates = new Set(activityDays.map((day) => day.date));
  const recentEventCount = publicEvents.reduce(
    (total, event) => total + (activityDates.has(dateKey(new Date(event.created_at))) ? 1 : 0),
    0,
  );

  const recentRepositories = (repositories ?? [])
    .filter((repository) => !repository.fork && !repository.archived)
    .slice(0, 3)
    .map((repository) => ({
      id: repository.id,
      name: repository.name,
      url: repository.html_url,
      description: repository.description,
      language: repository.language,
      stars: repository.stargazers_count,
      pushedAt: repository.pushed_at,
    }));

  return {
    username: profile?.login ?? GITHUB_USERNAME,
    profileUrl: profile?.html_url ?? GITHUB_PROFILE_URL,
    publicRepoCount: profile?.public_repos ?? null,
    followerCount: profile?.followers ?? null,
    recentEventCount,
    activityDays,
    recentRepositories,
    hasLiveData: Boolean(profile || repositories || events),
  };
}
