# Prioritized implementation plan

**Current phase:** first evidence-limited implementation milestone complete. The user selected partial scope: the public homepage plus the observed Settings overview/sidebar. No backend, live account integration, or unaudited account pages are implemented.

## Scope and open regional issue

Target country: **Bangladesh**, selected by the user. The homepage screenshot only shows English; public text retrieval returned US-oriented content. The Bangladesh-specific route, legal text, availability, fees, and product features remain unverified. The user affirmed authorization to reproduce the branded UI; this is self-reported, not independently verified.

The user chose to use only the current account screenshots. Therefore the full authenticated product is not audited; Dashboard, Watchlist, Portfolio, Discover results, Wallet, Copy management, and Settings subsections remain blocked and are not fabricated.

## P0 — Audit/access boundary (complete for selected scope)

- Public homepage text and full-page screenshot reviewed.
- One signed-in Settings screenshot reviewed; only a privacy-redacted derivative is in Git.
- No credentials/session data used and no account controls activated.
- Interactive browser/session automation unavailable.

## P1 — Evidence-limited implementation (complete for first stage)

### Stage 1: Local demo foundation — complete

- React + TypeScript + Vite + React Router; direct routes, local CSS/static fixtures, `.env.example`, setup/deployment docs, and visible `LOCAL DEMO · NOT CONNECTED` badge.
- No credential form, backend/API, private account data, or real financial operations.

### Stage 2: Public homepage — implemented, visual QA partial

- Screenshot-led homepage sections and cropped local visual references.
- Local navigation dropdowns, section search, market tabs, and safe explanatory dialogs.
- Sample quote/profile metrics are static and labeled illustrative; regional fee/availability caveats are visible.
- Exact screenshot parity is not claimed; no browser screenshot comparison was possible.

### Stage 3: Settings overview — implemented, child routes blocked

- Screenshot-led Settings hub/sidebar with generic demo identity/state.
- Local search filters the six observed settings cards.
- Cards, sidebar destinations, verification, and funding actions cannot change settings or initiate financial activity; they explain the limitation.
- No unobserved account page is fabricated.

### Acceptance status

- `/` and `/demo/settings` direct routes — **pass**.
- Navigation/search/tabs and safe dialogs — **implemented**.
- Automated tests — **6 pass**.
- TypeScript/Vite production build — **pass**.
- npm audit — **zero vulnerabilities reported**.
- Responsive CSS — **implemented, not visually verified at all breakpoints**.
- Bangladesh-specific copy/availability and screenshot parity — **not verified**.

## P2 — Expand public route family (later)

Fetched text provides content evidence for markets, fees, CopyTrader, demo account, Academy, About, and support. Add these routes in a later milestone; clearly label visual approximation where there are no screenshots or browser interaction evidence.

## P3 — Authenticated account expansion (blocked)

Do not implement Dashboard, Watchlist, Portfolio, Discover results, Wallet, Copy management, funding/withdrawals, or Settings child pages without new evidence or an authorized interactive session. If scope/access changes, use fictional fixtures and no live operations.

## P4 — Visual QA and discrepancy reduction

Compare at known matching viewport/zoom when possible. Fix high-impact layout, typography, image, density, and responsive discrepancies first. Maintain a mismatch log; do not claim full replication without route-by-route verification.

## P5 — Optional legitimate integrations (separate approval)

Any official, documented integration requires explicit authorization, least privilege, staging/test data, strict mock/live separation, and safeguards preventing live transactions. No undocumented private API probing.

## Current milestone result

Local homepage and Settings overview mock implemented. Six tests pass; production build passes; dependency audit reported zero vulnerabilities. The specification, privacy-redacted screenshot, setup guide, and QA checklist remain in `docs/`. Other public pages and authenticated sections are not included in this first stage.
