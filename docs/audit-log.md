# Audit log and evidence method

**Audit date:** 2026-10-14 (Asia/Dhaka)

**Target:** `https://www.etoro.com/`

**Milestone:** public text audit, partial visual audit, and first local mock-only implementation.

## Access check

- **Public website:** reachable through the page-fetch tool. The homepage and several linked pages returned extracted text and asset/link references.
- **Interactive browser:** not available in this session. There is no browser automation, devtools, click/hover tool, viewport control, or authenticated-session handoff.
- **User-supplied visual evidence:** a public homepage full-page capture and an account Settings hub capture were reviewed. Native image dimensions are 1920×5684 and 1920×1209 pixels respectively; viewport, browser zoom, device scale, exact locale, and capture settings are unknown.
- **Account state:** the Settings screenshot showed a signed-in app shell. It included personal details and account-specific state; these are not reproduced in this log. The original account screenshot was not copied into the repository. A derivative with profile/account-identifying area, verification summary, and account-specific support prompts masked is saved as `reference-images/settings-hub-redacted.png`.
- **No live actions:** no credentials were requested or used, and no account control was clicked, submitted, or changed. The screenshot is evidence of visible layout only.
- **Account evidence scope:** the user chose to use only the screenshots already supplied. The authenticated audit remains limited to the Settings hub and visible navigation labels.

## Evidence labels

- **Observed — retrieved text:** returned by page extraction; hidden text may be included, so it does not prove visibility or operation.
- **Observed — screenshot:** visibly present in a user-provided image. This does not prove click behavior or the original URL.
- **Observed — local implementation:** behavior tested in the reconstruction only; not evidence of eToro behavior.
- **Inferred:** suggested by links, copy, or visual structure but not exercised.
- **Unverified / blocked:** requires a browser, regional product evidence, or a safe authorized test session.

Unless explicitly marked otherwise, original-site interactions, exact CSS tokens, accessibility behavior, responsive rules, loading/error states, and authenticated workflows remain unverified.

## Public pages retrieved by text

Representative samples, not an exhaustive crawl:

- `/` and `/en-us/` — homepage-family text; the fetcher returned US-specific copy and dynamic sample prices.
- `/en-us/trading/markets/` — market-category overview and example asset links.
- `/en-us/copytrader/` — explainer, described steps, calls to action, and FAQ.
- `/en-us/trading/fees/` — public fee information and outbound references.
- `/en-us/trading/demo-account/` — virtual-account explainer and FAQ.
- `/en-us/academy/` and `/en-us/academy/courses/` — course/guide listings, filter links, and extracted login/membership-gate text.
- `/en-us/about/` — company history and related-page links.
- `/en-us/customer-service/` — support overview, Help Center link, and visitor/existing-user labels.
- `/en-us/customer-service/security/` — fetcher returned security-guide article content; redirect behavior was not browser-tested.
- `/login` and `/accounts/forgot-password` — sign-in/reset labels and instructions; no data entered.
- `/accounts/sign-up?funnelFromId=54` — sparse shell only. The unparameterized fetch returned HTTP 500; this is a retrieval result, not evidence of a live-site failure.
- `/discover` and `/discover/markets/stocks` — logged-out navigation shell; no private dashboard content.

`robots.txt`, `sitemap.xml`, and portions of two page sitemaps were retrieved. The site has many locales, market pages, and article routes; the sitemaps were not exhaustively enumerated.

## Screenshot findings

### Public homepage

The supplied full-page image shows a slim notice strip and horizontal navigation with product/learning/company categories, search, language, login, and a green CTA. Sections include a dark photographic hero; trust row; fee cards; markets tabs and quote cards; investor cards; AI/technology feature; regulatory/protection cards; institution logos; account CTA with app/QR imagery; partners; and multi-column footer. Backgrounds alternate near-black, charcoal, and dark green/teal with bright green accents.

This differs from the text extractor’s homepage output, which included US-oriented promo, Academy, and demo-account sections. Treat that as a regional/campaign/version discrepancy. The screenshot header only identifies English, not country.

Reference: `reference-images/public-homepage-fullpage.png`.

### Authenticated Settings hub

The screenshot shows a dark sidebar, search/utility header, pale cool-gray canvas, verification-summary card, and a 3×2 grid of Display, Account, Trading, Notifications, Privacy and Blocking, and Recurring Orders cards. Sidebar labels include Home, Watchlist, Portfolio, Discover, Wallet, App Store, Copy Pro Investors, Economic Calendar, Agent Portfolios, eToro Club, Invite Friends, Withdraw Funds, Settings, Help & Resources, Academy, Try Edge, Logout, and Deposit Funds.

The screenshot does not show its URL. No control was clicked. Personal/profile/verification/support details are masked in `reference-images/settings-hub-redacted.png`; the source image is not committed. No account actions were performed.

## Region, authorization, and privacy

The user selected **Bangladesh** as the target country. The screenshot shows English, not a Bangladesh-specific route. The page-fetcher returned US-specific references, so Bangladesh-specific locale, disclosures, availability, fees, and account feature set remain unverified.

The official Help Center article about blocked countries was discovered but could not be retrieved as readable article content; no country-availability conclusion is made from that attempt. See [eToro Help Center: country availability](https://help.etoro.com/s/article/is-etoro-blocked-in-my-country?language=en_GB).

The user affirmed authorization to reproduce eToro branding/product UI. This is self-reported, not independent legal verification. No credential collection, private account-data reuse, undocumented API probing, live order, deposit, withdrawal, or copy action is in scope.

Do not send passwords, OTP/2FA codes, cookies, tokens, API keys, account IDs, identity documents, unredacted balances/holdings, or other personal data in chat or source files. The original Settings screenshot contained identifying details and was not added to Git.

## Local implementation and checks

Implemented local routes `/` and `/demo/settings`. The public page uses static screenshot-derived content/assets; the Settings preview uses generic demo identity/state. Login and financial actions are intentionally disconnected.

- `npm test`: 6 tests pass.
- `npm run build`: passes TypeScript and Vite production build.
- `npm audit`: zero vulnerabilities reported after dependency updates.
- Local dev server returned HTTP 200 for `/` and `/demo/settings`.
- No visual screenshot comparison, browser console inspection, or manual viewport testing was possible.

## Project log

| Date | Milestone | Result |
|---|---|---|
| 2026-10-14 | Public access check | Public pages reachable as text; no interactive browser available. |
| 2026-10-14 | Initial route/content audit | Representative marketing, learning, support, sign-in, and logged-out shell routes sampled. |
| 2026-10-14 | Specification | Required docs and QA checklist created. |
| 2026-10-14 | Scope handoff | Bangladesh selected; user affirmed authorization (self-reported) and chose current screenshots only. |
| 2026-10-14 | Screenshot review | Homepage and Settings hub reviewed; redacted Settings derivative and homepage reference added. |
| 2026-10-14 | Implementation milestone | Local homepage and Settings overview built; 6 tests/build pass; no backend/live actions. |
