# Phase 6 — Drag-and-Drop Layout System

**Status:** Planned  
**Target major version:** v4.00  
**Depends on:** Phase 5

## Goal

Allow sections and compatible cards/blocks to be reordered visually while preserving responsive design integrity.

## Scope

- Drag-and-drop ordering for sections and blocks on desktop.
- Touch-compatible reordering where reliable.
- Accessible non-drag alternatives such as Move Up and Move Down.
- Persist order changes using explicit order/rank values.
- Support constrained block sizing such as Small, Medium, Wide, and Full where compatible.
- Support approved alignment or presentation variants.
- Prevent invalid drops between incompatible containers.
- Provide clear visual drop targets and selection feedback.

## Important Constraint

Do **not** build a freeform pixel-positioning page builder.

Avoid storing arbitrary values such as:

```text
x: 173px
y: 482px
width: 391px
```

Instead, use responsive layout tokens and supported grid spans. This keeps mobile layouts predictable and ensures the CMS still renders through the site's design system.

## Data Requirements

Ordering should be deterministic and stable after inserts, deletes, and concurrent edits. The persistence layer should not depend solely on array indexes generated in the browser.

## Deliverables

- Reusable sortable section container.
- Reusable sortable block/card container.
- Keyboard-accessible reorder controls.
- Constrained width/layout controls.
- Mutation logic for persisted order updates.
- Invalid-drop safeguards.

## Validation

Reorder content repeatedly, refresh the page, and confirm ordering persists. Test narrow and wide viewports, keyboard-only operation, touch interactions, insertion between existing blocks, and deletion followed by reorder.

## Exit Criteria

Supported sections and cards can be rearranged without code changes and without creating broken responsive layouts.
