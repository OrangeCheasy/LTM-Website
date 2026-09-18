# Phase 11 — Revision History & Recovery

**Status:** Planned  
**Target major version:** v4.00  
**Depends on:** Phase 10

## Goal

Make CMS changes recoverable so accidental edits, deletion, or bad publication can be reversed without manually restoring the entire database.

## Scope

- Record revisions for published changes.
- Record useful draft/edit history where appropriate.
- Show a chronological history view.
- Include action metadata such as time, action type, affected entity, and authenticated actor.
- Inspect a revision before restoring it.
- Restore individual entities where safe.
- Restore an entire publication snapshot where supported.
- Preserve audit history after restore operations.
- Define retention policy and storage limits.

## Example History

```text
Sep 17 18:53 — Added Outside the Tech images
Sep 17 18:34 — Changed project ordering
Sep 17 18:12 — Updated Tank Blast description
```

Each entry should provide enough context to understand what changed without exposing secrets or sensitive authentication data.

## Recovery Principles

- Restore operations create a new revision; they do not rewrite or erase history.
- Major-version Git history remains separate from CMS content history.
- Revision data should remain valid across schema migrations or have an explicit migration/compatibility strategy.
- Media restoration behavior must account for deleted R2 objects.

## Deliverables

- Revision persistence model.
- History UI.
- Revision detail/diff view where feasible.
- Restore workflow.
- Audit metadata.
- Retention/cleanup policy.

## Validation

Edit, publish, delete, and reorder representative content, then restore earlier states. Confirm a restore is itself recorded and that public content remains internally consistent.

## Exit Criteria

Accidental content changes can be recovered through the CMS without rewriting Git history or requiring a full database restore.
