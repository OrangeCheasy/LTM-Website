# Phase 1 — CMS Architecture & Content Schema

**Status:** Planned  
**Target major version:** v4.00  
**Depends on:** Phase 0

## Goal

Define the content model that will power the entire editable portfolio before introducing persistence or editor UI. The schema must be expressive enough to represent the finalized v3.00 site without losing layout meaning or content fidelity.

## Scope

Design strongly typed models for:

- Pages
- Sections
- Blocks
- Projects
- Project detail content
- Work experience
- Education
- Galleries
- Media references
- Navigation and links
- Global site settings
- SEO metadata
- Draft state
- Published state
- Revision metadata

A conceptual structure may resemble:

```ts
Page {
  id
  slug
  title
  status
  sections[]
}

Section {
  id
  pageId
  type
  order
  settings
  blocks[]
}

Block {
  id
  sectionId
  type
  order
  data
  layout
}
```

The real implementation should use discriminated unions or similarly strong typing so each block type has a validated payload instead of an unstructured object.

## Technical Requirements

- Runtime validation for all CMS data.
- Stable IDs independent of display order.
- Explicit ordering fields rather than relying on array position alone.
- Versionable schema design that supports migrations.
- Clear separation between content data and renderer behavior.
- Safe defaults for malformed or incomplete content.
- No arbitrary JavaScript or raw executable content stored as CMS data.
- Layout configuration must be constrained to supported responsive options.

## Deliverables

- Type definitions and runtime schemas.
- Documented relationships between entities.
- Block-type registry design.
- Content lifecycle definitions for draft, published, hidden, and archived content.
- Migration mapping from current v3.00 hard-coded data into the new schema.

## Validation

Create representative schema fixtures for every major v3.00 content surface and confirm they parse successfully. Invalid fixtures must be rejected with useful errors.

## Exit Criteria

The entire v3.00 website can be represented by the schema without inventing route-specific exceptions or losing important content and layout information.
