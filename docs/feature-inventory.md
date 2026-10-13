# Feature inventory (partial audit and implemented subset)

**Evidence key:** **Observed — text** = public page extraction; **Observed — screenshot** = visible in a user image; **Inferred** = suggested but not exercised; **Blocked** = needs evidence/browser. Local implementation status is called out separately below.

| Area / feature | Evidence and observed content | Audit status | Boundary |
|---|---|---|---|
| Homepage structure | Hero; trust metrics; fee cards; market panel/quote cards; investor cards; AI/technology; trust/protection cards; institutions; account CTA/QR; partners; footer | Observed — screenshot | Viewport, locale, campaign, exact CSS, and original interactions unknown. |
| Homepage text variant | Fetched text included Edge/promo, social, Academy, virtual portfolio, and regulation sections | Observed — text | Differs from screenshot sequence; region/version discrepancy unresolved. |
| Public header | Trade and Invest, Why eToro, Learn, Company, search, EN, Log in, green CTA | Observed — screenshot | No original hover/click/mobile behavior tested. |
| Sign-in/reset forms | Field/provider labels and reset instructions | Observed — text | No credentials/email entered. Local reconstruction deliberately has no credential form. |
| Sign-up | CTA links and sparse shell | Partial | Full form unavailable; no registration attempted. |
| Market overview | Crypto/stocks/ETF links and sample asset rows | Observed — text | Filters, sorting, charts, quotes, instrument page not operated; data is dynamic. |
| Logged-out app shell | Home, Watchlist, Portfolio, Discover, More, CopyTrader, Club, Rewards, Help/Resources | Shell only | Not authenticated dashboard data. |
| Signed-in sidebar | Home, Watchlist, Portfolio, Discover, Wallet, App Store, Copy Pro Investors, Economic Calendar, Agent Portfolios, eToro Club, Invite Friends, Withdraw Funds, Settings, Help & Resources, Academy, Try Edge, Logout, Deposit Funds | Observed — screenshot | One screen only; routes/submenu behavior untested. |
| Settings hub | Verification summary; Display, Account, Trading, Notifications, Privacy and Blocking, Recurring Orders cards | Observed — screenshot | No card opened. Private values masked; no settings changed. |
| CopyTrader | Public steps/FAQ/disclosures | Observed — text | No discovery UI, confirmation, or execution tested. |
| Fees | Public fee explanations and links | Observed — text | Jurisdiction/date sensitive; Bangladesh terms not verified. |
| Demo account | Public virtual-portfolio explanation | Observed — text | No account switch performed. |
| Academy | Course/topic links and extracted gate copy | Observed — text | Filters/progress/gate triggers untested; extraction may contain hidden text. |
| Customer support | Public support/help copy | Observed — text | No chatbot/ticket submitted. |
| Responsive behavior | Alternate desktop/mobile assets mentioned in text | Inferred | No tablet/mobile reference or browser resize test. |

## Implemented locally (not claims about eToro behavior)

| Local route/control | Current behavior | Status/safety |
|---|---|---|
| `/` | Screenshot-led homepage with locally cropped public reference images | Implemented; static sample values are labelled illustrative. Bangladesh-specific terms are not asserted as verified. |
| Header menus | Click opens local section-link dropdowns | Implemented/tested; original hover behavior unknown. |
| Page search | Opens input and filters local section labels | Implemented; local only. |
| Market tabs | Stocks shows three sample values from screenshot; ETFs/Crypto show “no verified sample” | Implemented/tested; no live prices. |
| Login/create-account CTAs | Open disclosure explaining no account/credential service is connected | Implemented; no login form. |
| `/demo/settings` | Generic mock sidebar and observed Settings cards | Implemented/tested; no personal profile or verification values. |
| Settings search | Filters six cards locally | Implemented/tested. |
| Settings/sidebar/funding controls | Show a safe not-audited/not-connected explanation | Implemented; cannot change settings or initiate financial operations. |

## Authenticated areas still uninspected

Dashboard content, Watchlist entries, Portfolio positions/history, Discover results, charts, instrument pages, Wallet, Copy management, Club/rewards, settings child pages, security, statements, support tickets, loading/error/empty states, and verification workflow remain unaudited. The implementation intentionally does not fabricate these screens.
