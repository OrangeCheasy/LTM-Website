# Phase 13 — Full v3.00 Content Migration

**Status:** Planned  
**Target major version:** v4.00  
**Depends on:** Core CMS, project, media, block, and publishing phases

## Goal

Migrate the finalized v3.00 portfolio from hard-coded content into the CMS while preserving the established public appearance and behavior.

## Scope

Migrate all intended CMS-managed data, including:

- Homepage content
- Projects and project case studies
- Experience/workplaces
- Education
- Outside the Tech gallery
- About content
- Contact content
- Social links
- Images/media
- Navigation where applicable
- SEO content
- Featured selections
- Reorderable sections/cards

Replace hard-coded arrays such as:

```ts
const projects = [...]
const experience = [...]
const education = [...]
```

with CMS-backed read paths, except where static values are intentionally retained as defaults, enums, or application configuration.

## Migration Requirements

- Preserve stable slugs and public URLs wherever possible.
- Preserve existing SEO/canonical behavior.
- Preserve project ordering and featured state.
- Preserve alt text and image associations.
- Avoid duplicate source-of-truth data after cutover.
- Provide a rollback plan until migration is validated.
- Seed/migration scripts should be repeatable or clearly one-time with safeguards.

## Deliverables

- Migration scripts/import tooling.
- Imported v3.00 content.
- CMS-backed public renderers for all targeted content.
- Removal of obsolete hard-coded content sources.
- Documentation of intentionally code-owned data that remains.

## Validation

Perform page-by-page visual comparison with the v3.00 baseline. Validate routes, metadata, images, project links, responsive behavior, accessibility, and publication state.

## Exit Criteria

All content intended to be CMS-managed originates from the CMS, and the v4.00 public site faithfully preserves the finalized v3.00 presentation unless a documented v4.00 change intentionally differs.
