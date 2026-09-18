# Phase 10 — Drafts, Preview & Publishing

**Status:** Planned  
**Target major version:** v4.00  
**Depends on:** Core editing phases

## Goal

Separate editing from what public visitors see. Normal CMS changes should enter a draft state until explicitly published.

## Scope

- Save edits as draft.
- Preview drafts in the real site renderer.
- Keep currently published content live until publication.
- Publish one coherent set of changes atomically where practical.
- Discard draft changes.
- Clearly identify draft versus published state.
- Prevent accidental publication from routine save operations.
- Support draft-only new projects/pages.
- Define behavior when published content is edited again.
- Integrate with revision history in the following phase.

## Desired Workflow

```text
Published Site
    │
    └── remains unchanged

Draft
├── reordered projects
├── new project
├── changed About section
└── new photos

Preview → Publish
```

## Architecture Considerations

Draft handling should avoid duplicating the entire database unnecessarily if a more maintainable revision/snapshot model can provide the same guarantees. The chosen approach must make it clear which version public reads resolve to.

Publication should avoid exposing a partially applied multi-record update. If true transactional publication is available, use it; otherwise design a version-pointer/snapshot strategy that produces an atomic public switch.

## Deliverables

- Draft storage model.
- Save Draft action.
- Preview mode.
- Publish action.
- Discard/revert draft behavior.
- Publication-status UI.
- Public read path that resolves only published content.

## Validation

Create multi-record draft edits and confirm public users continue to see the previous published state. Preview the draft, publish it, and confirm the new state appears coherently. Test failed publication and verify the previous public version remains valid.

## Exit Criteria

Unfinished editing can never accidentally become public merely because content was saved.
