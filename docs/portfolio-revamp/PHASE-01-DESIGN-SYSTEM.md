# Phase 01 — Design System & Site Shell

## Objective

Fix the inconsistency problem before rebuilding homepage sections. The current project already has global theme tokens, but individual sections still make many local choices for sizing, spacing, widths, and presentation. This phase turns the existing styling into a stricter reusable system.

## Scope

### 1. Visual direction

Retain the dark portfolio direction, but make it cleaner and more personal than the current service-site presentation.

Recommended direction:

- near-black background
- warm white primary text
- one restrained orange accent
- lower-contrast secondary/muted text
- minimal borders
- subtle depth rather than heavy glow effects
- profile/project imagery as the main visual interest

### 2. Typography

Define and consistently use named roles:

- display / hero name
- page heading
- section heading
- card title
- body
- secondary body
- metadata
- caption

Avoid component-specific arbitrary font sizes.

### 3. Spacing

Create a documented spacing rhythm for:

- page gutters
- section vertical padding
- heading-to-body gaps
- card padding
- grid gaps
- inline icon/text gaps

The same section role should use the same spacing on every page.

### 4. Shared layout primitives

Create or standardize reusable components such as:

- `Container`
- `Section`
- `SectionHeader`
- `Button` / `LinkButton`
- `IconLink`
- `Card`
- `MetadataRow`
- `Tag`

### 5. Global navigation

Rebuild the header around the new portfolio IA:

- Home
- Projects
- Experience
- About
- Contact

Desktop and mobile should use the same destinations and active-state logic.

### 6. Data-first content architecture

Move repeatable portfolio information out of page JSX into typed data modules where practical:

- projects
- experience
- education
- skills/tools
- social links

This keeps the homepage and detail pages synchronized.

## Acceptance Criteria

- All homepage sections can be built without inventing a new color or typography size.
- Shared button/link styles are visually identical across pages.
- Mobile gutters and desktop max-widths are consistent.
- Header works with keyboard and touch input.
- No horizontal overflow at common mobile widths.
- Existing routes still render while subsequent phases are in progress.
- `prefers-reduced-motion` remains respected.

## Out of Scope

No final hero, project cards, experience content, GitHub API integration, or visitor counter is implemented in this phase.