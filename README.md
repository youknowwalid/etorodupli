# eToro reconstruction workbench

**Status: evidence-limited local demo implementation.** This repository is an independent reconstruction based on public text retrieval and user-supplied screenshots. It is not connected to eToro services.

## Implemented scope

- Public homepage at `/` based on the supplied full-page reference screenshot.
- Settings overview at `/demo/settings`, based on one redacted Settings screenshot.
- Local-only navigation, menu/search, asset-class preview tabs, settings-card filter, and safe explanatory dialogs.
- Persistent visible `LOCAL DEMO · NOT CONNECTED` label.
- Mock-only/static data; no login, credential collection, backend, live quote service, account API, trade, deposit, withdrawal, or copy action.

Other public pages have text evidence but are not implemented in this first stage. Dashboard, Watchlist, Portfolio, Wallet, Discover results, Settings subpages, and other authenticated routes remain unaudited and are not fabricated. Target country is Bangladesh per the user, but Bangladesh-specific product/fee/legal copy has not been verified.

The user confirmed authorization to reproduce the brand/product UI; this is self-reported, not independently verified. The source Settings screenshot included personal information; the unredacted image was not committed. Only a redacted derivative is in `docs/reference-images/`.

## Run locally

Requirements: Node.js 20.19+ (or 22.12+) and npm 10+.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Use the address printed by Vite. Run checks/build with:

```bash
npm test
npm run build
npm run preview
```

See `docs/deployment.md` for deployment guidance. No environment variables are needed for the current local demo.

## Evidence and limitations

- `docs/site-map.md` and `docs/feature-inventory.md` separate observed evidence from unverified behavior.
- `docs/design-system.md` records screenshot-derived observations and approximate tokens.
- `docs/implementation-plan.md` documents the user-approved partial scope and blocked routes.
- `docs/reference-images/public-homepage-fullpage.png` is the supplied public-page reference.
- `docs/reference-images/settings-hub-redacted.png` is a redacted derivative; the original account image is not in the repo.

No interactive browser or authenticated-session tool was available. The screenshot pixel dimensions are not confirmed viewport sizes; hover/click behavior, locale-specific variants, and full responsive parity remain unverified. The public page text and screenshot also differ, so copy/section variants need further verification.

## Git repository

This is a local Git repository in the workspace. No GitHub/GitLab remote is configured.
