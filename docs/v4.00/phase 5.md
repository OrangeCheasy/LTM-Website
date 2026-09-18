# Phase 5 — Visual Edit Mode

**Status:** Planned  
**Target major version:** v4.00  
**Depends on:** Phase 4

## Goal

Allow the authenticated owner to edit the portfolio while viewing the real site, preserving the public layout as the editing canvas.

## Scope

Add an authenticated Edit Mode that can be entered from the admin area or site controls. In Edit Mode:

- Editable text surfaces expose edit controls.
- Cards expose edit, duplicate, hide, move, and delete actions where supported.
- Sections expose settings, move, insert, hide, and delete actions.
- Add controls appear between compatible blocks and sections.
- Selection state clearly distinguishes the block currently being edited.
- Changes use the same validated mutation layer established by the admin interface.
- Normal visitors never see editing controls.

## UX Principles

- Editing overlays should not significantly alter the geometry of the page being edited.
- Controls must remain understandable without exposing internal component names.
- Inline text editing should be used only where it is safer and faster than a structured form.
- Complex records should open a side panel, modal, or admin form rather than cramming every field into the page.
- Unsaved state must be obvious.
- Edit Mode must be easy to exit without accidentally publishing changes.

## Performance Requirements

Editor dependencies must be code-split so they are not shipped to public visitors. Public rendering should remain as close as practical to the v3.00 performance baseline.

## Deliverables

- Edit Mode entry/exit.
- Editing overlay primitives.
- Inline editing for approved simple fields.
- Section/card action menus.
- Authenticated mutation integration.
- Unsaved-state and error handling.

## Validation

Test Edit Mode across major pages, keyboard navigation, desktop viewport sizes, and touch devices. Confirm public users receive no edit controls and cannot load privileged data merely by knowing admin routes.

## Exit Criteria

Existing homepage and selected secondary-page content can be edited visually from the real site without changing source code.
