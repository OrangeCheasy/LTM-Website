# Portfolio Design System

Phase 1 establishes the shared visual and structural language used by the rest of the v2 portfolio revamp.

## Visual direction

- warm near-black page background
- warm white primary text
- restrained orange action/current-state accent
- low-contrast secondary and muted copy
- thin borders and subtle surface depth
- imagery, project work, and content provide the visual interest rather than heavy glow effects

## Typography roles

Use the semantic Tailwind roles defined in `src/app/globals.css`:

| Role | Utility | Intended use |
| --- | --- | --- |
| Display | `text-display` | Hero name / highest-impact identity text |
| Page heading | `text-page` | Primary `h1` |
| Section heading | `text-section` | Standard section `h2` |
| Card title | `text-card` | Card headings / `h3` |
| Body | `text-body` | Primary reading copy |
| Secondary body | `text-body-secondary` | Supporting paragraphs |
| Metadata | `text-metadata` | Dates, locations, labels |
| Caption | `text-caption` | Tags and compact supporting text |

The older `text-h1`, `text-h2`, `text-h3`, and `text-small` utilities remain as compatibility aliases while legacy pages are migrated.

## Layout and spacing

The global variables define the default rhythm:

- `--layout-max`: main content width
- `--layout-reading`: long-form reading width
- `--layout-gutter`: responsive page gutter
- `--space-section`: normal section vertical spacing
- `--space-section-compact`: tighter section spacing
- `--space-heading-body`: heading-to-copy gap
- `--space-card`: card padding
- `--space-grid`: grid gap
- `--space-inline`: icon/text gap

Use `Container` and `Section` rather than rebuilding gutters and max-width rules in new sections.

## Shared primitives

All new portfolio work should prefer the components in `src/components/ui/`:

- `Container`
- `Section`
- `SectionHeader`
- `Button` / `LinkButton`
- `IconLink`
- `Card`
- `MetadataRow`
- `Tag`

These are deliberately small. A future section can compose them without creating a second design system.

## Navigation

The global IA is data-driven from `src/data/site.ts` and uses these destinations:

- Home — `/`
- Projects — `/projects`
- Experience — `/experience`
- About — `/about`
- Contact — `/contact`

During the staged migration, `/projects` temporarily redirects to the existing `/portfolio` implementation. `/portfolio` is also treated as an active alias of Projects in the navigation. Phase 3 replaces that compatibility layer with the new projects route.

The `/experience` route shell exists structurally in Phase 1; final experience content is deferred to Phase 4.

## Data architecture

Repeatable content has typed modules under `src/data/`:

- `projects.ts`
- `experience.ts`
- `education.ts`
- `skills.ts`
- `social.ts`
- `site.ts`

Empty experience/education collections are intentional until owner-approved copy is supplied. Do not invent dates, employers, credentials, or metrics merely to populate the arrays.

## Accessibility and motion

- keyboard focus uses one global accent outline
- mobile navigation remains keyboard operable and closes on Escape
- continuous/decorative motion must obey `prefers-reduced-motion`
- icon-only links require accessible labels
- no essential navigation depends on hover
- new layouts should remain usable at 320px without horizontal scrolling
