# Security Policy

## Supported version

Security fixes are applied to the current production code on `main`. Historical version branches are retained as development milestones and are not separately supported production releases.

## Reporting a vulnerability

Please do **not** open a public issue containing exploit details, credentials, tokens, personal data, or other sensitive information.

Preferred reporting path:

1. Use GitHub's private **Report a vulnerability** / Security Advisory flow for this repository when available.
2. If private vulnerability reporting is unavailable, send a minimal report to `contact@liamthemo.com` with the subject `Security report — LTM-Website`.

Include the affected route or component, a concise description of the issue, reproduction steps that do not expose third-party data, and the impact you believe it could have. Do not include real secrets in the report.

## Repository secrets

Production credentials and resource identifiers must not be committed to this repository. Local secrets belong in ignored `.dev.vars` or `.env` files. GitHub Actions deployment credentials belong in the protected `production` environment/repository secrets, and Cloudflare runtime secrets remain configured in Cloudflare.
