# Phase 8 — Project CMS

**Status:** Planned  
**Target major version:** v4.00  
**Depends on:** Phases 4–7

## Goal

Turn projects into first-class CMS entities so complete project listings and case-study pages can be created and maintained without source-code changes.

## Editable Project Fields

At minimum:

- Title
- Slug
- Summary
- Long description
- Thumbnail/cover
- Avatar/icon where applicable
- Screenshot gallery
- Technologies/tags
- Category/services
- Repository URL
- Live/external URL
- Status
- Dates
- Featured state
- Project-specific content sections
- SEO title/description/image
- Visibility/publication state

## Scope

- Create new projects.
- Edit existing projects.
- Duplicate projects.
- Archive/hide projects.
- Safely delete projects.
- Manage project order and featured state.
- Automatically update the project index.
- Render dynamic project detail routes.
- Reuse the block system for long-form case-study content.
- Validate slug uniqueness and reserved routes.
- Generate or update metadata consistently.

## Rendering Requirements

Creating one project should be sufficient for it to appear wherever configured, such as:

```text
/projects
/projects/[slug]
homepage featured projects
related navigation
metadata/sitemap
```

The project editor should not require manually editing multiple disconnected datasets.

## Deliverables

- Project database model and APIs.
- Project list/admin editor.
- Create/edit/duplicate/archive workflows.
- Project-page renderer backed by CMS data.
- Featured-project integration.
- Route and slug safeguards.
- SEO integration.

## Validation

Create a test project from scratch and confirm every intended surface updates correctly. Test invalid slugs, missing optional data, image replacement, hiding, archiving, and restoring.

## Exit Criteria

A complete new portfolio project can be created and published without modifying application source code.
