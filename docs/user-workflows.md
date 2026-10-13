# User workflows (target evidence and local demo)

Target-site workflows below are described by public links/copy or screenshots; they have not been clicked end-to-end. Local reconstruction behavior is listed separately and has automated tests.

## Target-site evidence (not exercised)

### 1. Sign in / recover account

Extracted `/login` form labels include Username or Email, Password, keep-me-logged-in, and Google/Apple/Facebook sign-in. Forgot password links to `/accounts/forgot-password`, which instructs the visitor to enter a registered email.

**Not verified:** validation, MFA, provider redirects, reset delivery, rate limits, errors, and success. No data was entered.

### 2. Create account

Marketing CTAs link to `/accounts/sign-up`; the form itself was not retrieved. No registration was attempted.

### 3. Explore markets

The markets overview links to crypto/stocks/ETF categories and example `/markets/{symbol}` pages. Filters, quotes, chart controls, and trades were not operated.

### 4. CopyTrader

The public page describes finding an investor, reviewing performance/holdings/strategy, choosing COPY and an amount, and adjusting/stopping later. This is marketing copy only; no execution or copy action was observed or performed.

### 5. Demo account

Public copy describes switching to a virtual portfolio and practicing with virtual funds. No account switch was performed.

### 6. Settings hub

The signed-in screenshot shows a Settings overview, a verification-summary banner, six destination cards, and sidebar labels. The URL is not visible. No card/sidebar/funding control was clicked; no settings were changed. Personal account-specific areas are masked in the repo reference.

## Local demo workflows (implemented and tested)

### A. Public navigation and local search

1. Open `/`.
2. Click a top navigation category to reveal links to homepage sections.
3. Use the search icon to filter local section labels and choose a result.

These controls do not reproduce original hover behavior, which was not observed.

### B. Static market preview

1. Open the Markets section.
2. Choose Stocks, ETFs, or Crypto.
3. Stocks displays three static values visible in the supplied screenshot; ETFs/Crypto show a “no verified sample” state.

No live market data or order path exists.

### C. Account-entry buttons

1. Click Log in, Start investing, or Create account.
2. A modal explains that sign-in/account creation is disabled and no credentials or financial activity are connected.

There is deliberately no password form.

### D. Settings overview preview

1. Open `/demo/settings` (a local route, not an observed eToro URL).
2. Search filters the six Settings cards locally.
3. Click a card or unaudited sidebar item to see a not-connected/not-audited explanation.
4. Funding and verification controls likewise do not start real workflows.

## Cross-page gaps

- No original page was clicked through in a browser; screenshots establish layout only.
- The user chose not to provide more account screenshots. Other signed-in sections remain blocked.
- No dashboard/watchlist/portfolio behavior, original Settings URL, mobile layout, or live empty/loading/error state is verified.
- Never execute an order, deposit, withdrawal, copy, transfer, settings/profile change, or support request.
