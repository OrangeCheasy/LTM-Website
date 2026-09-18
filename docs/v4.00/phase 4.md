# Phase 4 — Admin Foundation

**Status:** Planned  
**Target major version:** v4.00  
**Depends on:** Phases 2–3

## Goal

Build a conventional administrative interface before attempting inline visual editing. A stable form-based admin surface makes the data model, validation, and mutation flows easier to verify independently of drag-and-drop or overlay complexity.

## Proposed Routes

```text
/admin
/admin/pages
/admin/projects
/admin/media
/admin/settings
/admin/history
```

## Scope

- Protected admin shell and navigation.
- Dashboard with recent edits, drafts, content counts, and quick actions.
- List/detail forms for the first editable content types.
- Form validation driven by the same schemas used by the backend.
- Save, cancel, delete, duplicate, archive/hide, and restore patterns where relevant.
- Clear dirty-state handling to avoid accidental navigation loss.
- Accessible keyboard-friendly controls.
- Responsive layout suitable for desktop and mobile administration.
- Centralized error and success feedback.

## Architecture Requirements

- Admin UI should call authenticated service/API boundaries rather than directly coupling presentation to storage.
- Public rendering components and admin editing components should remain separable.
- Editor-only JavaScript should not inflate the normal public-site bundle.
- Mutations should be typed end-to-end where practical.
- Destructive actions require explicit confirmation and should later integrate with revision history.

## Deliverables

- Protected admin application shell.
- Dashboard.
- Initial page/content management forms.
- Shared admin form primitives.
- Mutation/error handling conventions.
- Admin navigation and responsive layout.

## Validation

Verify that authenticated users can edit supported fields through forms and that validation errors are understandable. Confirm unauthenticated access redirects or rejects appropriately and that public pages remain unaffected.

## Exit Criteria

Basic site content can be managed safely through `/admin` even though inline visual editing is not yet available.
