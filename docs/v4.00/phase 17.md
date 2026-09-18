# Phase 17 — v4.00 Final Audit & Release

**Status:** Planned  
**Target major version:** v4.00  
**Depends on:** Phases 0–16

## Goal

Perform the final repository, product, security, and deployment audit required to turn the completed CMS work into the permanent v4.00 checkpoint.

## Final CI Loop

Repeat until no actionable automated or review findings remain:

```text
Audit
  ↓
Implement / Fix
  ↓
Build
  ↓
Lint
  ↓
Typecheck
  ↓
Tests
  ↓
Security checks
  ↓
Review
  ↓
Apply valid findings
  ↓
Revalidate
```

## Repository Audit

Review:

- Architecture and modularity.
- Dead or redundant code.
- Duplicate content sources.
- Type safety.
- Error handling.
- Security boundaries.
- Database migrations.
- Media lifecycle.
- Authentication/session handling.
- Draft/publish behavior.
- Revision recovery.
- Accessibility.
- Responsive behavior.
- Performance.
- SEO.
- Documentation.
- GitHub Actions and deployment restrictions.

## Release Classification

Every finding should be classified as:

### Completed / Passed

Automatically or manually verified functionality that meets v4.00 requirements.

### Requires Manual Validation

Items that inherently need real-device or production-environment confirmation, such as passkey login on actual devices, mobile editing ergonomics, production media delivery, cross-browser behavior, and live publication.

### Incomplete / Needs Work

Any missing or failing requirement that prevents the intended v4.00 scope from being considered complete.

## Branch and Deployment Requirements

- All implementation work must be completed on temporary branches and merged into v4.00.
- v4.00 remains a permanent historical/version checkpoint.
- Production deployment occurs only from `main`.
- When release-ready, merge the validated v4.00 state into `main`, push main, verify deployment checks, and perform required production/manual validation.
- Bugs found during manual validation must be fixed from a new temporary branch created from v4.00, then flow back through v4.00 and main.

## Exit Criteria

v4.00 is complete only when intended work is finished, relevant automated checks pass, actionable review findings are resolved, required manual validation is completed or explicitly documented, and the permanent v4.00 branch represents the released CMS-enabled portfolio.
