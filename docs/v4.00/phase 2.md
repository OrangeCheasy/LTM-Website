# Phase 2 — Persistence Layer

**Status:** Planned  
**Target major version:** v4.00  
**Depends on:** Phase 1

## Goal

Introduce durable storage for structured site content and uploaded media while keeping the public site independent from Git commits for normal content changes.

## Recommended Architecture

Use Cloudflare-native storage unless later requirements justify a change:

- **D1** for structured CMS records, publication state, revisions, relationships, and settings.
- **R2** for uploaded images and other portfolio media.

Example logical separation:

```text
D1
├── pages
├── sections
├── blocks
├── projects
├── experience
├── education
├── media
├── revisions
└── site_settings

R2
├── project-images
├── galleries
├── thumbnails
└── other-media
```

## Scope

- Create database schema and migration tooling.
- Add repository-controlled migrations.
- Implement data-access modules rather than scattering raw database queries through route handlers.
- Establish read APIs/services for public content.
- Establish mutation-ready service boundaries for future authenticated admin operations.
- Add media metadata storage linking D1 records to R2 objects.
- Define deletion, orphan cleanup, and referential-integrity behavior.
- Define development/test storage behavior so production data is never required for local validation.

## Technical Requirements

- Parameterized database operations.
- Schema migrations committed to Git.
- Stable content IDs.
- Foreign-key or application-level integrity as appropriate.
- No production database identifiers or secrets committed to the public repository.
- Environment bindings must remain deployment-safe.
- Graceful behavior when storage is unavailable.
- Caching strategy documented for public reads.

## Deliverables

- Initial migration set.
- Persistence/data-access layer.
- Test fixtures or seed strategy.
- R2 media metadata conventions.
- Environment configuration documentation.

## Validation

Verify create, read, update, and delete operations against a non-production environment. Confirm migrations can be applied from a clean state and that public reads cannot mutate data.

## Exit Criteria

Structured content and media metadata can be stored and retrieved reliably without requiring a source-code commit.
