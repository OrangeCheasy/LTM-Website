# Phase 14 — Mobile Editing

**Status:** Planned  
**Target major version:** v4.00  
**Depends on:** Visual editing and core CMS features

## Goal

Make common CMS tasks comfortable on iPhone and other small touch devices rather than merely technically functional.

## Scope

- Mobile admin navigation.
- Touch-friendly forms and media picker.
- Photo upload from device/camera library.
- Project editing.
- Gallery management.
- Safe section/card reordering.
- Draft/preview/publish controls.
- Revision/history access.
- Clear handling of virtual keyboard and viewport resizing.
- Appropriate safe-area spacing.
- Accessible touch target sizing.

## Interaction Strategy

Desktop can use drag-and-drop heavily. Mobile should prefer deterministic controls when drag behavior would be frustrating or ambiguous.

For example:

```text
Project Card

[ Edit ]
[ Move ↑ ]
[ Move ↓ ]
[ Duplicate ]
[ Hide ]
```

Touch drag-and-drop may still be supported where it proves reliable, but it should not be the only way to reorder content.

## Deliverables

- Responsive admin shell.
- Mobile Edit Mode controls.
- Mobile project/content forms.
- Mobile media upload/gallery flow.
- Accessible reorder alternatives.
- Mobile preview/publish UX.

## Validation

Manually validate on the actual iPhone used to maintain the site, plus responsive browser testing. Test orientation changes, image upload, long forms, reorder operations, modal/sheet behavior, keyboard focus, passkey login, preview, and publish.

## Exit Criteria

The owner can comfortably complete the common content-management workflow from a phone without needing desktop mode or source-code access.
