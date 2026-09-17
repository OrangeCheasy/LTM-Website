# Phase 06 — Education & Outside the Tech

## Objective

Keep Education concise and professional, then give `Outside the Tech` its own homepage section so the personal side of the portfolio feels intentional rather than hidden behind Education.

## Homepage Education Section

Each education entry should support:

- institution
- program / credential
- date range or expected completion
- city/province
- optional concise note for relevant coursework, activities, or focus areas

Keep the homepage compact. Education should not compete visually with projects and experience.

## Layout Direction

Recommended structure:

- section heading: `Education`
- institution/program as primary text
- date/location as metadata
- optional one-line supporting detail

Use the same metadata typography and spacing primitives introduced in Phase 01 and reused by Experience.

## Outside the Tech Homepage Section

`Outside the Tech` is a standalone homepage section and the second-last content section, directly before `Work With Me`.

The section should include:

- a concise personal introduction
- a swipeable, one-photo-at-a-time gallery
- touch/trackpad horizontal swiping
- previous/next controls for discoverability and keyboard use
- photo-position feedback and direct slide controls

The initial gallery can reuse the current personal photos from `/public/about/`. Additional approved photos can be added to the gallery later without changing the section layout.

The section should add personality without competing with the professional portfolio content above it.

## `/about#outside-tech`

The About page may continue to include expanded personal context and existing personal photography. The homepage gallery is the primary discoverable `Outside the Tech` presentation; the About section is supplemental rather than the destination of an Education CTA.

Potential content types:

- hobbies
- creative interests
- games/projects done for fun
- sports/fitness
- collecting or other interests the user wants public

Keep this section intentional and concise. It should add personality, not become a biography.

## Data Architecture

Education data should remain typed and reusable.

Suggested fields:

- `institution`
- `program`
- `startDate`
- `endDate`
- `location`
- `details[]`
- `sortOrder`

The Outside the Tech gallery should use a small structured image list with `src` and descriptive `alt` text so future photos are easy to add or replace.

## Acceptance Criteria

- Education information is readable in a few seconds.
- Dates and location use the same metadata system as Experience.
- Education does not contain an `Outside the Tech` CTA.
- `Outside the Tech` is a standalone homepage section.
- The section appears directly before `Work With Me`.
- Gallery photos can be changed by touch/trackpad swipe and explicit controls.
- Gallery controls are keyboard accessible and expose meaningful labels.
- The section remains responsive on mobile and desktop.

## Manual Inputs

- Final education dates/status.
- Any public-facing coursework/focus wording.
- Additional approved personal photos and final alt text for each image.
