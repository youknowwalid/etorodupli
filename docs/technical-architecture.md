# Technical architecture (implemented first-stage proposal)

**Status:** the first local demo stage is implemented. There is no backend, database, eToro API, authenticated session, or live financial integration.

## Current stack

- React 18 + TypeScript
- Vite 8 development/build tooling
- React Router 7 for direct routes
- Plain CSS with locally defined variables and responsive media queries
- Vitest + Testing Library for critical interaction tests

The dev server binds to `0.0.0.0` and allows the workspace preview host. All images/styles used by the app are local; no CDN/font/API request is required.

## Implemented route/module boundaries

```text
/                 Public homepage reconstruction
/demo/settings    Local-only Settings overview preview
*                 Honest “route not audited” fallback
```

`/demo/settings` is a reconstruction-only route; it is not claimed as the original eToro URL. Other public page families have text evidence but are not yet implemented. Other authenticated routes remain blocked by lack of evidence.

### Main components

- `HomePage` — reference-based public homepage sections, nav menus, local search, quote-category tabs, safe CTA dialogs.
- `SettingsDemoPage` — screenshot-based app shell, generic demo profile, settings summary/cards, local card filtering, no-op explanations for unaudited actions.
- `InfoDialog` — reusable safe disclosure dialog.
- `data.ts` — static screenshot-sourced market samples and observed settings/sidebar labels.

## Data and services

All data currently lives in static TypeScript fixtures. There is no network data layer. The sample quote values and reference metrics are static, visibly described as illustrative, and are not refreshed.

No account model, authentication service, KYC flow, price feed, transaction ledger, order service, or support-ticket API is implemented. The only “services” are local UI actions; they cannot place trades, transfer money, edit a real account, or transmit credentials.

## Security and financial integrity

- Sign-in and account-creation buttons open a clear explanation; there is no password form.
- Settings, funding, withdrawal, copy, and verification controls do not connect to a live account and show a safe explanation.
- Local quote/profile metrics are static and accompanied by risk/simulation disclosures.
- No identity, verification percentage, account name, account IDs, or private financial values from the source screenshot are copied into app data.
- No eToro API/private endpoint has been inspected or authorized. Do not probe undocumented endpoints.

The user affirmed authorization to reproduce the brand/product UI; this is self-reported, not independently verified. Any future integration requires official documentation, explicit authorization, least privilege, and staging/test data.

## Configuration and repo hygiene

`.env.example` contains only demo flags (`VITE_DEMO_MODE`, `VITE_TARGET_COUNTRY`). The country variable is informational and does not configure product availability, fees, or legal terms. Real `.env` files, keys, cookies, tokens, and private user data must stay out of Git.

## Quality checks

- Six automated tests pass for the homepage heading/sign-in boundary, navigation dropdown, market tabs, Settings route, settings search, and safe handling of unaudited Portfolio navigation.
- `npm run build` completes successfully.
- `npm audit` reported zero vulnerabilities after dependency updates.
- Browser screenshot comparison, console inspection, real hover behavior, and manual mobile/tablet validation have not been performed in this session.
