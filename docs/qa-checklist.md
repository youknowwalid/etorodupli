# Audit, implementation, and QA checklist

**Legend:** `Partial` = screenshot/text evidence only; `Blocked` = needs more evidence or browser; `Implemented` = local mock-only UI; `Not tested` = not checked in a rendered browser.

## Public target routes and local implementation

| Route/family | Audit status | Local implementation | Automated/manual test status | Notes |
|---|---|---|---|---|
| `/` homepage | Partial — text + full-page screenshot | Implemented | 3 homepage-related tests pass; screenshot parity not measured | Reference 1920×5684 px; viewport/locale unknown; text fetch differs. |
| `/en-us/trading/markets/` | Partial — text | Not implemented | Not tested | Category/example links documented. |
| `/discover/markets/*` | Shell only | Not implemented | Not tested | No market results observed. |
| `/markets/{symbol}` | Link references only | Not implemented | Not tested | Asset detail uninspected. |
| `/en-us/copytrader/` | Partial — text | Not implemented | Not tested | Public explainer only. |
| `/en-us/trading/fees/` | Partial — text | Not implemented | Not tested | Bangladesh terms unverified. |
| `/en-us/trading/demo-account/` | Partial — text | Not implemented | Not tested | Public explanation only. |
| Academy/courses, About, support | Partial — text | Not implemented | Not tested | Interactions/content access unverified. |
| `/login` and signup | Partial — labels/sparse shell | Safe disclosure only | Sign-in boundary tested; no credential form | No real login or registration. |
| `/accounts/forgot-password` | Partial — instructions | Not implemented | Not tested | No email submitted. |
| Public header/footer/cookie preferences | Partial — homepage screenshot | Header/footer implemented on `/` | Dropdown test passes; hover/cookie/mobile untested | Exact original behavior unknown. |

## Authenticated target account and local preview

| Area | Audit status | Local implementation | Test status |
|---|---|---|---|
| Settings hub | Partial — one screenshot; source PII/state masked in repo copy | Implemented at `/demo/settings` | Route/card/filter/safe-action tests pass |
| Signed-in sidebar labels | Partial — screenshot | Mock sidebar implemented | One safe Portfolio action tested; original URLs/expand behavior unknown |
| Dashboard/home | Blocked | Not implemented | Not tested |
| Watchlist | Blocked | Not implemented | Not tested |
| Portfolio/positions/history | Blocked | Not implemented | Not tested |
| Discover/filters, asset detail/charts | Shell/blocked | Not implemented | Not tested |
| CopyTrader management, Wallet, Settings subpages | Blocked/label only | Not implemented | Not tested |
| Funding/withdrawal/orders/transfers | No live testing permitted | Safe explanation only | No live tests permitted |

## Technical checks

- [x] `npm test` — 6 tests pass.
- [x] `npm run build` — TypeScript and Vite production build pass.
- [x] `npm audit` — zero vulnerabilities reported after dependency update.
- [x] Local dev server returns HTTP 200 for `/` and `/demo/settings`.
- [ ] Browser console and screenshot-diff check (interactive browser unavailable).
- [ ] Manual desktop/tablet/mobile overflow and keyboard pass.

## Viewports and visual states

| Viewport/state | Audit/local QA |
|---|---|
| Public homepage reference | Observed at 1920×5684 image pixels; actual viewport unknown. |
| Settings reference | Observed at 1920×1209 image pixels; actual viewport unknown. |
| Known desktop screenshot comparison | Not tested. |
| Tablet/mobile | Responsive CSS exists; no target/local comparison. |
| Hover/focus/active/disabled | Automated basic interactions only; original states unverified. |
| Loading/empty/error/validation | Local demo only; original states unavailable. |

## Safety and integrity checks

- [x] Target country selected as Bangladesh by user; exact site variant/features remain unverified.
- [x] User affirmed branding authorization (self-reported; not independently verified).
- [x] Unredacted account screenshot not added to Git; redacted derivative only.
- [x] No credentials or private account details committed; no personal documents in repo.
- [x] Local actions cannot execute real orders, deposits, withdrawals, copies, or transfers.
- [x] Sample values are static/illustrative; no real API is connected.
- [x] Visible controls have honest local outcomes; no fabricated login/transaction success.
- [ ] Visual discrepancies are fully resolved; more route evidence and viewport comparison required.
