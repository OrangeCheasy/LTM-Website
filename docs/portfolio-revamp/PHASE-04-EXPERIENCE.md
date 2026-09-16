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

Recommended desktop pattern:

- left column: dates/location metadata
- right column: role, organization, summary
- subtle row dividers or timeline treatment

Recommended mobile pattern:

- stacked metadata above role content
- no narrow timeline rail that wastes horizontal space

The section should feel editorial and resume-like rather than card-heavy.

## View Details

Add a small `View Details` action beneath or within the section.

Destination: `/experience`

## `/experience` Page

The expanded route can include:

- full role history
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

## Acceptance Criteria

- Date, role, organization, and location are immediately scannable.
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