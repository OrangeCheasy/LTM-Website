# Phase 3 — Passkey Authentication & Admin Security

**Status:** Planned  
**Target major version:** v4.00  
**Depends on:** Phase 2

## Goal

Create a secure administrative boundary before any powerful editing controls are exposed. Authentication must be enforced server-side for every mutation, not merely through hidden client UI.

## Scope

- Implement passkey/WebAuthn authentication for the site owner.
- Create secure authenticated sessions.
- Add login and logout flows.
- Add session expiration and rotation behavior.
- Protect all future admin and mutation endpoints.
- Add CSRF protections where applicable.
- Add rate limiting or abuse controls for authentication-sensitive endpoints.
- Add audit logging for successful and rejected administrative actions.
- Validate origins, redirect targets, and WebAuthn relying-party configuration.
- Ensure the public repository contains no passkey secrets, private keys, or environment credentials.

## Security Rules

The browser must never be trusted solely because it renders edit controls. Every write request must independently verify authorization on the server.

For example:

```text
PUT /api/admin/projects/:id
```

must fail when called without a valid authenticated session, even if a user manually constructs the request.

Admin capability must not be implemented as a simple client-side flag such as `isAdmin = true`.

## Deliverables

- Passkey registration/credential strategy appropriate for a single-owner site.
- Authentication endpoints.
- Secure session middleware.
- Authorization helper used by all admin mutations.
- Logout and expired-session UX.
- Security documentation and threat-model notes.
- Automated tests for protected and unprotected access.

## Validation

Test valid login, invalid login, expired sessions, missing sessions, replayed or malformed requests, direct API calls, logout, and cross-origin attempts. Confirm public users cannot perform any write operation.

## Exit Criteria

An unauthenticated visitor has zero CMS write capability and authenticated access is enforced at the server boundary for every protected operation.
