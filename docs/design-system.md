# Design system (partial visual audit and local implementation)

**Status:** Visual evidence exists for one public homepage and one account Settings hub. The implementation uses approximate screenshot-derived styles; exact CSS tokens, viewport/zoom, responsive behavior, and original interaction states remain unverified.

## Direct visual observations

### Public homepage

The supplied 1920×5684 image shows a slim top notice strip and dark horizontal navigation. Visible labels include Trade and Invest, Why eToro, Learn, Company, search, EN, Log in, and a bright-green CTA. Sections include a dark photographic hero; trust row; fee cards; markets panel with category pills and quote cards; investor cards; AI/technology feature; regulatory/trust cards; institutions; account CTA/QR/app imagery; sponsors; footer.

The visual palette is near-black, charcoal, dark green/teal, off-white/cream, and vivid green accents. Exact color values are not measured. The screenshot differs from the fetched text’s sections; locale/campaign variance remains unresolved.

### Account Settings hub

The supplied 1920×1209 screenshot shows a dark left navigation rail, light top search header, pale blue-gray canvas, white cards, and blue bottom funding button. A broad verification summary sits above a three-column, two-row set of settings cards. Source profile/verification/support details were masked in the repository derivative.

## Reusable patterns (observed or inferred)

- **Observed:** notice strip, public navigation, green CTAs, trust metrics, alternating full-width bands, quote/investor cards, protection cards, institution/logo strip, multi-column footer.
- **Observed:** authenticated sidebar, top search/utilities, summary banner, icon-led destination cards, arrows/chevrons, blue primary CTA.
- **Inferred:** destination cards, category pills, and investor cards navigate to more detailed pages; none were clicked.
- Public marketing and authenticated app are distinct visual shells; do not force one global navigation layout onto both.

## Token and measurement table

| Token / rule | Screenshot observation | Remaining verification |
|---|---|---|
| Primary accent | Bright green for buttons, stat/icons, chart line | Exact hex, hover, focus values unknown. |
| Public surfaces | Near-black, charcoal, dark green/teal; cream/off-white text | Exact RGB/hex and contrast unknown. |
| App surfaces | Dark sidebar, pale cool-gray canvas, white cards, dark text, blue CTA | Exact color/selected/error states unknown. |
| Typography | Large bold public headline; sans-serif interface text | Family, weights, size/line height unknown. |
| Homepage layout | Full-width alternating sections, centered content groups | Viewport, max-width, gutters, responsive grid unknown. |
| App sidebar | Roughly 18% of image width in supplied screenshot | Actual CSS width cannot be inferred from image pixels alone. |
| Settings grid | Three columns × two rows in source state | Breakpoints, gaps, dimensions, click-target sizes unmeasured. |
| Borders/radii/shadows | Subtle card borders and rounded corners | Exact tokens unmeasured. |
| Icons/images | Logo, line icons, portraits, partner marks, app/QR assets | Exact source asset mapping and license/permissions not independently verified. |
| Responsive breakpoints | Not directly observed | No mobile/tablet captures. |
| Motion and interaction | Not observed | No browser click/hover/focus/loading/error test. |

## Local implementation notes

The first-stage local page uses CSS variables and responsive media queries to approximate the screenshot. Hero/investor/technology image crops were derived from the user-supplied public homepage screenshot; the account screenshot in the repository is redacted. No remote styles, fonts, or images are needed. This is a reconstruction approximation, not a measured style guide.

## Visual references

- [Public homepage full-page screenshot](reference-images/public-homepage-fullpage.png) — 1920×5684 image pixels.
- [Redacted Settings hub screenshot](reference-images/settings-hub-redacted.png) — 1920×1209 image pixels.

Image pixel dimensions are not confirmed CSS viewport sizes; browser, zoom, locale, and capture method are unknown.

## Next visual references needed

Public markets/instrument/CopyTrader/fees/Academy/support pages in the chosen country; authenticated dashboard/watchlist/portfolio/discover and settings subsections if access scope changes; tablet/mobile references; and a local-versus-target screenshot comparison at a known viewport.
