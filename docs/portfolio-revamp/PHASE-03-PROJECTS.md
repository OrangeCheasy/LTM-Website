# Phase 03 — Featured Projects & Projects Route

## Objective

Keep the strongest part of the current site—the project showcase concept—but make it a clearer representation of real development work and connect it to a dedicated `/projects` route.

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

The three projects should collectively show range rather than three versions of the same skill set.

Recommended selection criteria:

1. technically substantial
2. visually understandable
3. demonstrates a different capability from the other two
4. has enough material for a strong detail page

Potential categories represented across the set:

- full-stack/web application
- game development
- automation/tooling

Final project choices are a content decision made during implementation.

## Homepage CTA

Section heading: `Featured Projects`

Action: `View More`

Destination: `/projects`

## Route Migration

The current public route is `/portfolio`. The redesign should standardize the user-facing language around **Projects**.

Implementation order:

1. Build `/projects` using the shared project data.
2. Update internal navigation and links.
3. Add a permanent redirect from `/portfolio` to `/projects`.
4. Preserve individual legacy URLs where necessary through redirects.
5. Update sitemap/canonical metadata.

## `/projects` Page

The projects page should support a larger list/grid and make scanning easy.

Recommended fields:

- title
- summary
- year
- project type
- technologies
- status
- thumbnail
- slug
- featured flag
- source/demo links when public

## Project Detail Pages

Use `/projects/[slug]` and a consistent case-study structure:

- overview
- problem/goal
- role/contribution
- technical approach
- screenshots/media
- notable challenges
- result/current status
- links to source/live demo when appropriate

## Data Architecture

Keep project content in a typed shared source rather than duplicating it between homepage and project pages.

The homepage should derive its three cards from `featured: true` data with a deliberate ordering field.

## Acceptance Criteria

- Homepage always shows exactly three featured projects.
- `View More` leads to `/projects`.
- Project card typography and spacing use Phase 01 primitives.
- Cards remain readable and tappable on mobile.
- `/portfolio` continues to work through a permanent redirect after migration.
- Project pages have unique title/description metadata.
- Missing external source/demo links do not leave dead buttons.

## Manual Inputs

- Final three featured projects.
- Approved project cover images/screenshots.
- Confirmation of which repositories/demos can be publicly linked.