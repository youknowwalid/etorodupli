# Site map (evidence-labelled; partial)

**Status:** representative route-family map, not an exhaustive crawl. The official sitemap index contains many localized market, page, and article sitemaps. Authenticated target-site evidence is limited to sidebar labels and one Settings hub screenshot; original URLs and click behavior are unknown.

## Evidence key

- **Observed — text:** returned in a public page extraction.
- **Observed — screenshot:** visible in a supplied image; not necessarily an exercised link.
- **Observed link:** route present in extracted page text.
- **Shell only:** logged-out app navigation without private account data.
- **Inferred / unverified:** suggested by structure but not opened or tested.
- **Blocked:** needs more evidence or an interactive browser.

## 1. Public target site

```text
/
└── /en-us/                                  Homepage family in text fetch
    ├── /en-us/trading/markets/              Markets overview
    │   ├── #cryptocurrencies / #stocks / #etfs
    │   ├── /discover/markets/cryptocurrencies/coins
    │   ├── /discover/markets/stocks
    │   ├── /discover/markets/etf
    │   └── /markets/{symbol}                 Example links: btc, eth, yeti, ship, vsco, ggg, d
    ├── /en-us/copytrader/ → /discover/people?funnelFromId=54
    ├── /en-us/trading/fees/
    ├── /en-us/trading/demo-account/
    ├── /en-us/trading/platforms/            Fetcher route unresolved
    ├── /en-us/academy/ → /en-us/academy/courses/ → /en-us/academy/courses/{slug}/
    ├── /en-us/academy/guides/ and topic/article families
    ├── /en-us/about/ → /about/vision/ /about/team/ /about/awards/
    ├── /en-us/customer-service/ → external Help Center
    └── /en-us/investing/...                 Article family, not exhaustively inventoried
```

| Route | Evidence/status | Notes |
|---|---|---|
| `/` and `/en-us/` | Observed — text and screenshot | Fetched text is US-oriented and contains promo/Academy/demo sections. User screenshot shows hero, trust row, fees, markets, investors, AI/technology, trust, institutions, CTA, partners, footer. Treat as region/campaign/version discrepancy. |
| `/en-us/trading/markets/` | Observed — text | Category anchors and example asset links. |
| `/en-us/copytrader/` | Observed — text | Explainer, described steps, FAQ, discovery link. |
| `/en-us/trading/fees/` | Observed — text | Region-sensitive content. |
| `/en-us/trading/demo-account/` | Observed — text | Virtual portfolio explanation; no account switch. |
| `/en-us/academy/` | Observed — partial text | Course/guide/article links; not exhaustively read. |
| `/en-us/academy/courses/` | Observed — text | Topic/level query links; filters not operated. |
| `/en-us/about/` | Observed — text | Company history and related links. |
| `/en-us/customer-service/` | Observed — text | Support overview and external help link. |
| `/login` | Observed — text | Login labels only; local implementation intentionally has no credential form. |
| `/accounts/forgot-password` | Observed — text | Reset instructions; no email submitted. |
| `/accounts/sign-up?funnelFromId=54` | Partial shell | Locale/login text only. Unparameterized fetch returned HTTP 500; not evidence of a live-site failure. |
| `/en-us/trading/platforms/` | Unverified | Fetcher returned homepage-family content. |

## 2. Logged-out app shell (text extraction)

`/discover` and `/discover/markets/stocks` exposed logged-out labels/links for Home (`/home`), Watchlist (`/watchlists`), Portfolio (`/app/portfolio-page`), Discover (`/discover` / `/discover/markets`), More, CopyTrader (`/discover/people`), Club, Rewards, Help & Resources (`/learn-more`), English (US), Sign in, and Sign up. This is not the authenticated dashboard.

## 3. Signed-in app shell and Settings hub (screenshot only)

The signed-in screenshot has no URL. It shows sidebar labels Home, Watchlist, Portfolio, Discover, Wallet, App Store, Copy Pro Investors, Economic Calendar, Agent Portfolios, eToro Club, Invite Friends, Withdraw Funds, Settings, Help & Resources, Academy, Try Edge, Logout, and Deposit Funds.

The Settings hub shows a verification-summary banner and six destination cards: Display, Account, Trading, Notifications, Privacy and Blocking, and Recurring Orders. Personal profile/progress/prompt areas are masked in the repo derivative. No card or sidebar item was clicked; URLs and destination pages remain unknown.

| Account area | Target-site status | What is known |
|---|---|---|
| Signed-in sidebar | Observed — screenshot | Labels only; URLs and expand/collapse unknown. |
| Settings hub | Observed — screenshot | Banner and six-card 3×2 layout. URL not visible. |
| Settings card destinations | Inferred / unverified | Names only; child pages not inspected. |
| Dashboard/home, Watchlist, Portfolio, Discover results, Wallet | Blocked | Sidebar labels only. |
| Funding/withdrawal/verification | Not tested | Visible controls/status only; no action performed. |

## 4. Local reconstruction routes (not original eToro route claims)

```text
/                 Evidence-limited public homepage reconstruction
/demo/settings    Local mock Settings overview/sidebar
*                 “Route not audited” fallback
```

On `/`, menus scroll to evidenced homepage sections, search filters local section labels, and market tabs change the static preview. Login/create-account and other financial CTAs open safe explanatory dialogs. On `/demo/settings`, search filters six cards; sidebar/cards/funding controls show a safe “not audited/not connected” dialog instead of opening a fabricated account page. These local interactions are implemented, not observed eToro behavior.

## 5. Regionalization and scale

The user selected **Bangladesh** as the target country. The screenshot shows “EN,” not a Bangladesh-specific route; the page-fetcher returned US-oriented content. The exact Bangladesh-specific site variant, fees, eligibility, disclosures, and features are not verified. The official country-availability help article could not be retrieved as readable text during this audit.

This map is not exhaustive. The user chose not to provide more account screenshots, so account routes other than the Settings overview/sidebar remain blocked.
