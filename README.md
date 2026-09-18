# LiamTheMo Portfolio

Personal portfolio website for **Liam Mo**, built around software development, projects, experience, technical skills, education, GitHub activity, and ways to get in touch.

**Live site:** https://liamthemo.com

The former service-first site has been rebuilt as a personal developer portfolio. The primary positioning is **Software Developer**, with supporting work across full-stack development, game development, automation, tooling, and UI implementation.

## Current development line

| Item | Value |
| --- | --- |
| Pre-revamp snapshot | `v2.00` |
| Current major branch | `v2.12` |
| Current phase | Final pre-v3.00 repository cleanup |
| Production domain | `liamthemo.com` |

`v2.00` is the preserved snapshot of the website before the portfolio revamp and should not be rewritten.

## Revamp roadmap

Each portfolio phase maps to a `v0.01` version increment:

| Phase | Major branch | Scope |
| --- | --- | --- |
| 1 | `v2.01` | Design system and site shell |
| 2 | `v2.02` | Hero, identity, about, social links, resume |
| 3 | `v2.03` | Featured projects and `/projects` migration |
| 4 | `v2.04` | Experience |
| 5 | `v2.05` | Skills and technology marquee |
| 6 | `v2.06` | Education and Outside the Tech |
| 7 | `v2.07` | GitHub activity integration |
| 8 | `v2.08` | Work With Me, footer, visitor statistic |
| 9 | `v2.09` | Accessibility, SEO, performance, launch audit |
| Hardening | `v2.10`–`v2.12` | Secondary-page normalization, repository/deployment hardening, SEO launch |
| Portfolio freeze | `v3.00` | Finalized portfolio baseline |
| Visual CMS/editor | `v4.00` | Passkey-protected editing system (planned) |

The completed redesign plan lives in [`docs/portfolio-revamp/`](./docs/portfolio-revamp/). The launch state is tracked in [`docs/portfolio-revamp/LAUNCH-AUDIT.md`](./docs/portfolio-revamp/LAUNCH-AUDIT.md), and the future v4.00 editor roadmap lives in [`docs/v4.00/`](./docs/v4.00/).

## Git workflow

This repository uses version branches as stable major branches.

- Major branches are `main` and branches matching `vX.XX`.
- Never implement work directly on a major branch.
- Create a minor working branch from the current major branch for every feature, fix, cleanup, or documentation task.
- Complete and validate the work on the minor branch, then merge it back into the same major branch.
- Minor branches must not introduce deployment triggers that can deploy from the minor branch.
- Production deployment is restricted to `main` by the GitHub Actions deployment workflow.
- When a phase is complete, the next phase begins from a new major branch with the version incremented by `0.01`.

Example:

```text
v2.01
  └─ feat/v2.01-design-system
       └─ merge back into v2.01

v2.01 complete
  └─ create v2.02 for Phase 2
```

## Stack

| Concern | Technology |
| --- | --- |
| Framework | Next.js 16, App Router |
| UI | React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Hosting | Cloudflare Workers |
| Adapter | `@opennextjs/cloudflare` |
| Worker tooling | Wrangler 4 |
| CI | GitHub Actions |
| Production deployment | GitHub Actions → Cloudflare Workers |
| Security scanning | CodeQL, npm audit, Dependabot |

## Local development

Node.js 22 or newer is recommended.

```bash
npm install
npm run dev
```

Useful validation commands:

```bash
npm run lint
npm run build
npx tsc --noEmit
npm run build:worker
```

`npm run build` must remain the normal Next.js production build (`next build`). OpenNext invokes that script internally when creating the Worker artifact.

`npm run build:worker` runs the OpenNext adapter and generates `.open-next/`, including `.open-next/worker.js` and `.open-next/assets`.

For a local Cloudflare/OpenNext preview:

```bash
npm run preview
```

## Visitor counter

The Phase 8 footer supports an anonymous unique-browser approximation using a Cloudflare D1 binding named `VISITOR_DB`.

The counter stores only one aggregate integer. A first-party HttpOnly cookie prevents the same browser from incrementing the total again for approximately one year; no IP address, email, device fingerprint, or visitor identifier is stored in D1. The increment is a single atomic SQLite upsert, and the API disables caching so the stat remains current even when the homepage itself is cached.

To enable the counter in production without exposing the D1 resource ID in this public repository, configure the GitHub `production` environment secrets `CLOUDFLARE_VISITOR_DB_NAME` and `CLOUDFLARE_VISITOR_DB_ID`. The production deployment workflow injects that binding only into its temporary checkout before building and deploying. If both secrets are omitted, the site deploys without the optional binding and the footer degrades to `Visitor count unavailable`.

## Project structure

```text
src/app/                  Next.js routes and route-level metadata
src/components/           Shared UI components
src/data/                 Structured project/service content
src/lib/                  Shared utilities, types, navigation, and server logic
public/                    Static assets
docs/portfolio-revamp/    Current redesign specification and phase documents
.github/workflows/         PR validation, production deployment, security scanning
```

## Portfolio revamp documents

Start with:

- [`docs/portfolio-revamp/README.md`](./docs/portfolio-revamp/README.md) — master redesign plan and homepage order
- [`docs/portfolio-revamp/CURRENT-STATE-AUDIT.md`](./docs/portfolio-revamp/CURRENT-STATE-AUDIT.md) — current-site audit
- [`docs/portfolio-revamp/LAUNCH-AUDIT.md`](./docs/portfolio-revamp/LAUNCH-AUDIT.md) — current launch/indexing state
- `docs/portfolio-revamp/PHASE-XX-*.md` — phase-specific scope, implementation guidance, and acceptance criteria

Legacy mockups and the old `CLAUDE.md`, `DEPLOYMENT.md`, and `TODO.md` documents have intentionally been removed. Do not use or recreate them as project specifications.

## Deployment

There is **one intended automated production deployment owner: GitHub Actions**.

### Production workflow

`.github/workflows/deploy.yml` runs only when `main` is pushed/merged or when the workflow is explicitly dispatched manually. Version branches and minor working branches cannot trigger it.

The workflow:

1. Checks out the exact commit with persisted Git credentials disabled.
2. Installs the locked npm dependency graph with `npm ci`.
3. Injects the optional `VISITOR_DB` D1 binding from GitHub secrets without committing its resource identifiers.
4. Audits production dependencies for high/critical known vulnerabilities.
5. Runs linting and Cloudflare type generation.
6. Builds the OpenNext Worker and runs TypeScript validation.
7. Authenticates to Cloudflare only for the final deployment step and deploys the already-built Worker.

GitHub Action dependencies are pinned to immutable full commit SHAs rather than mutable version tags.

### Required GitHub secrets

Store deployment credentials in the GitHub **`production` environment** rather than in source files:

- `CLOUDFLARE_API_TOKEN` — a narrowly scoped Cloudflare API token with only the permissions/resources required to deploy this Worker.
- `CLOUDFLARE_ACCOUNT_ID` — the account that owns the Worker.

Optional visitor-counter secrets must be configured as a pair:

- `CLOUDFLARE_VISITOR_DB_NAME`
- `CLOUDFLARE_VISITOR_DB_ID`

The quote-form Discord webhook is a Cloudflare Worker runtime secret named `DISCORD_WEBHOOK_URL`. `wrangler.jsonc` declares it as required but never contains its value. Wrangler does not delete encrypted Worker secrets during a normal deploy.

### Deployment ownership safeguard

GitHub Actions is the sole intended automated production deployment path. Keep the retired Cloudflare Workers Git build integration disconnected so a push to `main` cannot trigger a second independent deployment.

### Pull-request validation

`.github/workflows/ci.yml` runs for pull requests targeting `main` or version branches matching `v*`. It installs dependencies, runs a production dependency audit, lints, generates Cloudflare types, builds the OpenNext Worker, and typechecks. It never deploys.

### Version branches

Branches such as `v2.01`, `v2.02`, and later versions are development milestones. They do not automatically deploy to production. Production changes are released only when intentionally merged/pushed to `main`.

### Manual deployment

For an explicitly requested local manual deployment:

```bash
npm run deploy
```

Use the same narrowly scoped Cloudflare credentials and ensure any required production resource bindings are present before deploying.

## Public-repository security

This repository is intentionally public, so source code must never be treated as a secret boundary.

- `.env*`, `.dev.vars*`, private keys, Wrangler local state, and build output are ignored by Git.
- Cloudflare credentials and private D1 identifiers are supplied through GitHub/Cloudflare secrets, not committed files.
- `wrangler.jsonc` declares required secret names without storing values and preserves dashboard-managed non-secret variables during deployments.
- GitHub Actions use explicit least-privilege permissions and immutable action SHAs.
- CodeQL scans `main` and runs weekly.
- Dependabot checks npm and GitHub Actions dependencies weekly.
- CI blocks pull requests with high/critical production dependency audit findings.
- Public POST endpoints validate origin/request shape, and the quote webhook code avoids logging secret-bearing network errors.
- Baseline browser security headers are applied globally through Next.js.
- See [`SECURITY.md`](./SECURITY.md) for private vulnerability-reporting guidance.

Repository-level branch rules, secret scanning/push protection, private vulnerability reporting, and GitHub Actions allow-list policies are defense-in-depth settings that should also be enabled in GitHub where available.

## License

Copyright © 2026 Liam Mo. All rights reserved.

This repository and its contents are proprietary. Unauthorized copying, modification, distribution, or use of this source code is prohibited.
