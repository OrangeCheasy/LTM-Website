# Phase 06 — Education & Outside the Tech

## Objective

Add a concise education section, then give the homepage one clear path to the more personal side of the portfolio without mixing hobbies into the professional sections.

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

## Outside the Tech

Add a small secondary action labeled:

`Outside the Tech`

Destination:

`/about#outside-tech`

The corresponding About section can include hobbies, interests, and personality-focused content that helps the portfolio feel human without diluting the professional homepage.

## `/about#outside-tech`

Potential content types:

- hobbies
- creative interests
- games/projects done for fun
- sports/fitness
- collecting or other interests the user wants public

Keep this section intentional and concise. It should add personality, not become a biography.

## Data Architecture

Education data should be typed and reusable.

Suggested fields:

- `institution`
- `program`
- `startDate`
- `endDate`
- `location`
- `details[]`
- `sortOrder`

## Acceptance Criteria

- Education information is readable in a few seconds.
- Dates and location use the same metadata system as Experience.
- `Outside the Tech` clearly reads as a secondary personal-content action.
- The button/link targets `/about#outside-tech` and lands on the correct anchored section.
- No hobby content is required on the homepage itself.

## Manual Inputs

- Final education dates/status.
- Any public-facing coursework/focus wording.
- Hobbies/interests to include on the About page.