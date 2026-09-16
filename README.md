# LiamTheMo Portfolio

Personal portfolio website for **Liam Mo**, built around software development, projects, experience, technical skills, education, GitHub activity, and ways to get in touch.

**Live site:** https://liamthemo.com

The site is currently being rebuilt from its older service-first layout into a personal developer portfolio. The primary positioning for the redesign is **Software Developer**, with supporting work across full-stack development, game development, automation, tooling, and UI implementation.

## Current development line

| Item | Value |
| --- | --- |
| Pre-revamp snapshot | `v2.00` |
| Current major branch | `v2.01` |
| Current phase | Phase 1 — Design System & Site Shell |
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

The detailed implementation plan lives in [`docs/portfolio-revamp/`](./docs/portfolio-revamp/).

## Git workflow

This repository uses version branches as stable major branches.

- Major branches are `main` and branches matching `vX.XX`.
- Never implement work directly on a major branch.
- Create a minor working branch from the current major branch for every feature, fix, cleanup, or documentation task.
- Complete and validate the work on the minor branch, then merge it back into the same major branch.
- Minor branches must not introduce deployment triggers or other automation intended to deploy from the minor branch.
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

`npm run build:worker` generates the OpenNext worker output in `.open-next/`, including `.open-next/worker.js`.

For a local Cloudflare/OpenNext preview:

```bash
npm run preview
```

The Wrangler configuration also defines a build command, so Wrangler upload flows generate the OpenNext worker before reading the configured `.open-next/worker.js` entry point.

## Project structure

```text
src/app/                  Next.js routes and route-level metadata
src/components/           Shared UI components
src/components/service/   Existing service-specific UI components
src/data/                 Structured project/service content
src/lib/                  Shared utilities, types, navigation, and server logic
public/                    Static assets
docs/portfolio-revamp/    Current redesign specification and phase documents
.github/workflows/         CI configuration
```

## Portfolio revamp documents

Start with:

- [`docs/portfolio-revamp/README.md`](./docs/portfolio-revamp/README.md) — master redesign plan and homepage order
- [`docs/portfolio-revamp/CURRENT-STATE-AUDIT.md`](./docs/portfolio-revamp/CURRENT-STATE-AUDIT.md) — current-site audit
- `docs/portfolio-revamp/PHASE-XX-*.md` — phase-specific scope, implementation guidance, and acceptance criteria

Legacy mockups and the old `CLAUDE.md`, `DEPLOYMENT.md`, and `TODO.md` documents have intentionally been removed. Do not use or recreate them as project specifications.

## Deployment

Deployment is Cloudflare Workers + OpenNext + Wrangler. The repository currently contains GitHub CI for verification and the configured production deployment flow.

Deployment behavior must remain isolated from minor working branches. Do not broaden deployment triggers to feature/fix/chore branches unless explicitly requested.

## License

Copyright © 2026 Liam Mo. All rights reserved.

This repository and its contents are proprietary. Unauthorized copying, modification, distribution, or use of this source code is prohibited.
