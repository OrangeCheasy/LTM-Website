# Phase 16 — Security & Failure Hardening

**Status:** Planned  
**Target major version:** v4.00  
**Depends on:** Feature-complete CMS

## Goal

Perform a dedicated adversarial and failure-mode audit before v4.00 is considered release-ready.

## Security Cases

Test at minimum:

- Unauthenticated write attempts.
- Expired sessions.
- Tampered content/entity IDs.
- Malformed JSON.
- Oversized uploads.
- Invalid or deceptive image types.
- XSS payloads.
- HTML/script injection.
- CSRF attempts.
- Cross-origin requests.
- Brute-force/abuse scenarios where relevant.
- Path/key manipulation in media operations.
- Privilege checks on every mutation.
- Secret/configuration leakage in the public repository.
- Unsafe redirects.
- Published-preview boundary bypasses.

## Failure Cases

Test:

- D1 unavailable or returning errors.
- R2 upload/read/delete failures.
- Partial publication attempts.
- Failed migrations.
- Concurrent edits.
- Deleted referenced content.
- Deleted referenced media.
- Broken revision payloads.
- Invalid draft data.
- Cache inconsistency.
- Network interruption during save/publish.

## Backup & Export

Provide a practical content backup/export path, ideally producing a versioned structured export such as:

```text
portfolio-backup-YYYY-MM-DD.json
```

with documented media references or a complementary media-backup strategy.

## Deliverables

- Repository-wide security audit.
- Threat-model update.
- Hardened validation and authorization.
- Failure-state UX.
- Backup/export tooling.
- Recovery documentation.
- Security tests/regression coverage.

## Validation

Repeat the CI loop until actionable findings are resolved. Confirm failures do not expose secrets, corrupt published state, or make the public portfolio unusable.

## Exit Criteria

The CMS fails safely, privileged operations remain protected under direct attack attempts, and recoverable content backups exist.
