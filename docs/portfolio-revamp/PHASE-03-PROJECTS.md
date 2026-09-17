# Phase 03 — Featured Projects & Projects Route

## Objective

Use project work as the strongest proof on the site, with a concise homepage showcase and a canonical `/projects` route for the full portfolio and case studies.

## Homepage Featured Projects

Display exactly **3 featured projects**.

Each card should show:

- project cover/thumbnail
- project name
- one concise description
- relevant technology tags
- project category where useful
- clear click target to the project detail page

Avoid stuffing every detail into the homepage card. The goal is to make the project worth opening.

## Featured Project Selection

The three projects should collectively show range rather than three versions of the same skill set. Selection is driven by the shared `projects` data and `featured` flags.

## Homepage CTA

Section heading: `Featured Projects`

Action: `View More`

Destination: `/projects`

## Route Migration — Complete

The canonical public routes are now:

- `/projects`
- `/projects/[slug]`

Legacy `/portfolio` and `/portfolio/:slug` URLs permanently redirect to the matching project routes in `next.config.ts`. During v2.10 the obsolete React implementations and legacy Open Graph route files under `src/app/portfolio` were removed, leaving one project-page implementation to maintain. Static image assets under `public/portfolio/...` are intentionally unchanged because their URL paths are asset locations, not public page routes.

## `/projects` Page

The v2.10 Projects index includes:

- responsive portfolio summary derived from shared project data
- a featured case-study panel
- the remaining project grid
- technology tags and category context
- canonical metadata and a route-specific Open Graph image
- CTA paths into Contact and About

## Project Detail Pages

`/projects/[slug]` is now the canonical case-study implementation and supports:

- summary and category context
- responsive cover art
- challenge and implementation approach
- confirmed outcomes/metrics when present
- role/year/client metadata when present
- stack/technology tags
- optional What I Built and Key Features data
- optional screenshot carousel
- optional before/after comparisons
- external/live and public source links when supplied
- previous/next project navigation
- unique canonical/Open Graph metadata

Optional content stays optional. A project without metrics, feature copy, screenshots, or a public repository does not render an empty or invented section.

## Data Architecture

Project content stays in the typed shared source under `src/data/projects.ts`. The homepage, project index, detail route, service cross-links, and metadata all consume that same source.

## Acceptance Criteria

- Homepage shows exactly three featured projects.
- `View More` leads to `/projects`.
- Project typography, spacing, surfaces, borders, buttons, and focus treatment use the shared design system.
- Cards and case studies remain readable and tappable on mobile.
- `/portfolio` continues to work through permanent redirects.
- Project pages have unique title/description/canonical metadata.
- Missing external source/demo links do not leave dead buttons.
- Missing optional evidence does not produce fabricated content.

## Remaining Manual Inputs

Additional project screenshots, public source links, or metrics can be added later when real assets/evidence are available. They are content enhancements, not blockers for the project route architecture.
