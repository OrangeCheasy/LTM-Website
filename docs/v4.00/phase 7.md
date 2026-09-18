# Phase 7 — Media Library

**Status:** Planned  
**Target major version:** v4.00  
**Depends on:** Phases 2–5

## Goal

Make portfolio imagery fully manageable from the CMS so routine image changes no longer require committing files into the repository.

## Scope

- Upload images to R2.
- Browse a media library.
- Preview images.
- Replace media while preserving references where appropriate.
- Rename or label assets.
- Add and edit alt text.
- Reorder images within galleries.
- Delete unused assets.
- Detect references before deletion.
- Track media usage across projects, pages, and galleries.
- Generate or store appropriate optimized variants/thumbnails.
- Support phone-originated uploads.
- Enforce size, type, and image-validation rules.

## Outside the Tech Use Case

The Outside the Tech section should become a first-class gallery managed through this system. The owner should be able to add photos, remove them, replace them, and change their display order without touching Git.

## Safety Requirements

- Do not trust file extensions alone.
- Validate actual content type and supported formats.
- Reject oversized or malformed uploads.
- Prevent executable content from being served in unsafe contexts.
- Sanitize metadata used in rendered HTML.
- Warn before deleting media referenced by published content.

## Deliverables

- Media-library UI.
- Upload endpoint and validation pipeline.
- R2 integration.
- Media metadata records.
- Image picker reusable by other editors.
- Gallery reordering.
- Usage/reference reporting.
- Deletion safeguards.

## Validation

Test uploads from desktop and mobile, duplicate filenames, unsupported formats, oversized files, referenced-asset deletion, alt text, gallery ordering, and production image delivery.

## Exit Criteria

Normal portfolio imagery can be added, replaced, reordered, and removed without placing files manually in `public/` or making a Git commit.
