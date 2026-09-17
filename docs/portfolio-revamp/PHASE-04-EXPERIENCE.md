# Phase 04 — Experience

## Objective

Add a professional experience section that communicates responsibility and progression without turning the homepage into a full resume.

## Homepage Experience Section

Each experience entry should support:

- date range
- position title
- organization
- city/province or remote location
- short 1–3 sentence summary
- optional small skill/responsibility tags

The homepage should prioritize the most relevant/recent entries and keep detail concise.

## Visual Structure

Experience should be grouped by workplace rather than rendered as one global timeline.

Each organization gets its own visual group and its own timeline. Multiple roles at the same organization stay connected so promotions and role progression read as one employment history. Roles from different organizations must never share a continuous timeline rail.

Recommended desktop pattern:

- workplace label at the start of each group
- role dates/location as metadata
- role title and summary as primary content
- a timeline rail only within workplaces that contain multiple roles
- clear vertical separation between workplaces

Recommended mobile pattern:

- the same workplace grouping as desktop
- stacked metadata above role content
- compact timeline spacing that does not waste horizontal space

The section should feel editorial and resume-like rather than card-heavy.

## View Details

Add a small `View Details` action beneath or within the section.

Destination: `/experience`

## `/experience` Page

The expanded route can include:

- full role history grouped by workplace
- connected role progression only within the same workplace
- responsibilities
- measurable outcomes where available
- leadership/supervision experience
- technical/freelance/project experience where it belongs
- relevant tools/skills per role

Do not invent metrics. Only use numbers that can be supported.

## Data Architecture

Create a typed experience model that can feed both the homepage summary and full experience page.

Suggested fields:

- `company`
- `role`
- `startDate`
- `endDate`
- `location`
- `summary`
- `details[]`
- `skills[]`
- `featured`
- `sortOrder`

Entries with the same organization value should be grouped together by the shared experience renderer while preserving the overall organization order established by the sorted data.

## Acceptance Criteria

- Date, role, organization, and location are immediately scannable.
- Different workplaces have separate timeline groups.
- Multiple roles at the same workplace remain visually connected.
- Homepage entries stay concise.
- `View Details` leads to `/experience`.
- Same experience data powers both homepage and detail route.
- Layout works at narrow mobile widths without horizontal overflow.
- No unsupported claims or invented metrics.

## Manual Inputs

- Final work history wording.
- Exact date ranges.
- Locations.
- Any measurable outcomes the user wants public.
