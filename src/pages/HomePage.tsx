import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { marketPreview, type MarketTab } from '../data';
import type { InfoMessage } from '../components/InfoDialog';
import investorA from '../assets/investor-a.jpg';
import investorB from '../assets/investor-b.jpg';
import investorC from '../assets/investor-c.jpg';
import techFeature from '../assets/tech-feature.jpg';

type PageProps = { onInfo: (message: InfoMessage) => void };

const navMenus: Record<string, Array<{ label: string; href: string }>> = {
  'Trade and Invest': [
    { label: 'Global markets', href: '#markets' },
    { label: 'Fee overview', href: '#fees' },
    { label: 'Investors worth watching', href: '#investors' },
  ],
  'Why eToro': [
    { label: 'Community', href: '#investors' },
    { label: 'Trust and protection', href: '#trust' },
    { label: 'Get started', href: '#ready' },
  ],
  Learn: [
    { label: 'Markets', href: '#markets' },
    { label: 'Powered by intelligence', href: '#intelligence' },
    { label: 'Explore the app', href: '#ready' },
  ],
  Company: [
    { label: 'Our partners', href: '#partners' },
    { label: 'About this reconstruction', href: '#footer' },
  ],
};

const searchTargets = [
  { label: 'Markets', href: '#markets' },
  { label: 'Fees', href: '#fees' },
  { label: 'Investors', href: '#investors' },
  { label: 'Trust and protection', href: '#trust' },
  { label: 'App preview', href: '#ready' },
];

function ScrollLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <a href={href} onClick={onClick}>
      {children}
    </a>
  );
}

function Header({ onInfo }: PageProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [languageOpen, setLanguageOpen] = useState(false);
  const results = useMemo(
    () => searchTargets.filter((item) => item.label.toLowerCase().includes(query.toLowerCase())),
    [query],
  );

  return (
    <header className="site-header">
      <div className="notice-strip">
        Investments involve risk. Values may rise or fall; this local demo is not connected to a financial service.
      </div>
      <div className="public-nav-wrap">
        <Link aria-label="eToro reconstruction home" className="wordmark" to="/">
          <span>eToro</span><i aria-hidden="true">›</i>
        </Link>
        <nav aria-label="Main navigation" className="public-nav">
          {Object.entries(navMenus).map(([label, items]) => (
            <div className="nav-group" key={label}>
              <button
                aria-expanded={openMenu === label}
                className="nav-trigger"
                onClick={() => {
                  setOpenMenu(openMenu === label ? null : label);
                  setLanguageOpen(false);
                  setSearchOpen(false);
                }}
                type="button"
              >
                {label}<span aria-hidden="true" className="chevron-down">⌄</span>
              </button>
              {openMenu === label && (
                <div className="nav-dropdown">
                  {items.map((item) => (
                    <ScrollLink href={item.href} key={item.label} onClick={() => setOpenMenu(null)}>
                      {item.label}
                    </ScrollLink>
                  ))}
                  {label === 'Company' && <Link onClick={() => setOpenMenu(null)} to="/demo/settings">Settings preview</Link>}
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="nav-actions">
          <div className="search-control">
            <button
              aria-expanded={searchOpen}
              aria-label="Search this page"
              className="icon-button search-trigger"
              onClick={() => {
                setSearchOpen(!searchOpen);
                setOpenMenu(null);
                setLanguageOpen(false);
              }}
              type="button"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="10.8" cy="10.8" r="6.2" /><path d="m15.4 15.4 5 5" /></svg>
            </button>
            {searchOpen && (
              <div className="search-popover">
                <label htmlFor="site-search">Search this page</label>
                <input
                  autoFocus
                  id="site-search"
                  onChange={(event) => setQuery(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === 'Escape') setSearchOpen(false);
                    if (event.key === 'Enter' && results[0]) {
                      document.querySelector(results[0].href)?.scrollIntoView({ behavior: 'smooth' });
                      setSearchOpen(false);
                    }
                  }}
                  placeholder="Markets, fees, investors…"
                  value={query}
                />
                <div className="search-results">
                  {results.length > 0 ? results.map((item) => (
                    <ScrollLink href={item.href} key={item.label} onClick={() => setSearchOpen(false)}>
                      {item.label}<span aria-hidden="true">↗</span>
                    </ScrollLink>
                  )) : <p>No matching section in this demo.</p>}
                </div>
              </div>
            )}
          </div>
          <div className="language-control">
            <button
              aria-expanded={languageOpen}
              className="language-button"
              onClick={() => {
                setLanguageOpen(!languageOpen);
                setOpenMenu(null);
                setSearchOpen(false);
              }}
              type="button"
            >
              <span aria-hidden="true">◎</span> EN <span aria-hidden="true">⌄</span>
            </button>
            {languageOpen && (
              <div className="language-popover">
                <strong>Language: English</strong>
                <p>The reference image shows “EN”. Bangladesh-specific copy and product availability have not been verified.</p>
              </div>
            )}
          </div>
          <button
            className="button button-outline button-small"
            onClick={() => onInfo({
              title: 'Sign-in is disabled in this demo',
              body: 'This reconstruction does not accept, store, or transmit passwords, one-time codes, or eToro session data.',
            })}
            type="button"
          >
            Log in
          </button>
          <button
            className="button button-green button-small"
            onClick={() => onInfo({
              title: 'Account creation is not connected',
              body: 'This is a local visual demo. It cannot create an eToro account or perform any real financial activity.',
            })}
            type="button"
          >
            Start investing
          </button>
        </div>
      </div>
    </header>
  );
}

const trustStats = [
  { icon: '◷', title: 'Since 2007', detail: '19 years' },
  { icon: '▥', title: 'Nasdaq listed', detail: 'ETOR' },
  { icon: '◎', title: '40M+ users', detail: '75 countries' },
  { icon: '◈', title: 'Regulated', detail: 'Globally' },
  { icon: '✓', title: 'Protected', detail: 'Investor-focused' },
];

const investorCards = [
  { name: 'Investor profile 01', return: '+35.38%', followers: '495', image: investorA },
  { name: 'Investor profile 02', return: '+54.46%', followers: '1,518', image: investorB },
  { name: 'Investor profile 03', return: '+32.90%', followers: '799', image: investorC },
];

function MarketSection({ onInfo }: PageProps) {
  const [activeTab, setActiveTab] = useState<MarketTab>('Stocks');
  const quotes = marketPreview[activeTab];
  return (
    <section aria-labelledby="markets-heading" className="markets-section" id="markets">
      <div className="section-shell">
        <h2 className="section-title" id="markets-heading">Global markets. Your move.</h2>
        <div aria-label="Asset class" className="market-tabs" role="tablist">
          {(['Stocks', 'ETFs', 'Crypto'] as MarketTab[]).map((tab) => (
            <button
              aria-selected={activeTab === tab}
              className={activeTab === tab ? 'market-tab active' : 'market-tab'}
              key={tab}
              onClick={() => setActiveTab(tab)}
              role="tab"
              type="button"
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="market-showcase">
          <div className="market-copy-card">
            <span className="market-eyebrow">{activeTab.toUpperCase()}</span>
            <h3>{activeTab === 'Stocks' ? '20+ exchanges. Thousands of shares.' : `${activeTab} at a glance.`}</h3>
            <ul>
              <li>{activeTab === 'Stocks' ? 'Explore markets through one account.' : 'See the market overview and product details.'}</li>
              <li>Tools and availability may vary by country.</li>
              <li>All figures in this demo are illustrative.</li>
            </ul>
            <button
              className="button button-green"
              onClick={() => onInfo({
                title: 'Market details are not connected',
                body: 'No live quotes, order entry, or financial account access is provided in this reconstruction.',
              })}
              type="button"
            >
              Explore markets
            </button>
          </div>
          <div aria-live="polite" className="quote-list">
            {quotes.length > 0 ? quotes.map((quote) => (
              <article className="quote-card" key={quote.symbol}>
                <div className={`quote-avatar quote-avatar-${quote.symbol.toLowerCase()}`} aria-hidden="true">{quote.symbol.slice(0, 1)}</div>
                <div className="quote-name"><strong>{quote.symbol}</strong><span>{quote.name}</span></div>
                <div className="quote-value"><strong>{quote.value}</strong><span>{quote.change}</span></div>
              </article>
            )) : (
              <div className="quote-unavailable">
                <span className="quote-unavailable-icon" aria-hidden="true">⌁</span>
                <strong>No verified {activeTab.toLowerCase()} quote samples</strong>
                <p>The supplied reference only provides stock quote examples.</p>
              </div>
            )}
            <p className="quote-disclaimer">Snapshot values from the supplied reference where shown. Not live market data.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function InvestorSection({ onInfo }: PageProps) {
  return (
    <section aria-labelledby="investors-heading" className="investors-section" id="investors">
      <div className="section-shell">
        <h2 className="section-title" id="investors-heading">The investors worth watching.</h2>
        <p className="section-intro">A community where people share ideas, strategies and different points of view.</p>
        <div className="investor-grid">
          {investorCards.map((investor) => (
            <article className="investor-card" key={investor.name}>
              <img alt="Illustrative community profile" className="investor-photo" src={investor.image} />
              <div className="investor-card-body">
                <h3>{investor.name}</h3>
                <p>Example profile · strategy details not available in this demo</p>
                <div className="investor-stats">
                  <div><strong>{investor.return}</strong><span>Reference metric</span></div>
                  <div><strong>{investor.followers}</strong><span>Reference count</span></div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="fine-print investor-disclaimer">Static figures from the supplied screenshot are illustrative only, not live performance or investment advice.</p>
        <button
          className="button button-green"
          onClick={() => onInfo({
            title: 'Investor discovery is not connected',
            body: 'This demo does not connect to real investor profiles, copying, or portfolio activity.',
          })}
          type="button"
        >
          Find investors to copy
        </button>
      </div>
    </section>
  );
}

function TrustSection() {
  const cards = [
    { icon: '▣', title: 'Regulated entities', copy: 'The relevant entities and rules depend on your country and account.' },
    { icon: '▤', title: 'Your money, held separately', copy: 'Account arrangements vary by entity and jurisdiction.' },
    { icon: '◇', title: 'Investor protection', copy: 'Protection terms depend on location and product type.' },
  ];
  return (
    <section aria-labelledby="trust-heading" className="trust-section" id="trust">
      <div className="section-shell">
        <h2 className="section-title" id="trust-heading">Trusted by 40M+ users. Obviously.</h2>
        <div className="trust-grid">
          {cards.map((card) => (
            <article className="trust-card" key={card.title}>
              <div aria-hidden="true" className="trust-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
              <span className="trust-tag">Details vary by country</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FakeQr() {
  const cells = Array.from({ length: 121 }, (_, index) => (index * 7 + index * index) % 5 !== 0);
  return (
    <div aria-label="Decorative non-scannable demo pattern" className="fake-qr" role="img">
      {cells.map((dark, index) => <span className={dark ? 'qr-cell dark' : 'qr-cell'} key={index} />)}
      <b>DEMO</b>
    </div>
  );
}

function PhoneMock() {
  return (
    <div aria-hidden="true" className="phone-mock">
      <div className="phone-speaker" />
      <div className="phone-screen">
        <div className="phone-mini-title">Portfolio</div>
        <div className="phone-balance">$68,229.77</div>
        <div className="phone-gain">+4.6% <span>sample</span></div>
        <svg className="phone-chart" viewBox="0 0 200 90" preserveAspectRatio="none">
          <path d="M0 73 C20 68 22 43 43 53 S68 62 83 38 S109 55 123 32 S147 52 163 21 S186 23 200 8" />
        </svg>
        <div className="phone-mini-cards"><i /><i /></div>
        <div className="phone-mini-row" /><div className="phone-mini-row short" />
      </div>
    </div>
  );
}

export default function HomePage({ onInfo }: PageProps) {
  return (
    <div className="home-page">
      <Header onInfo={onInfo} />
      <main>
        <section aria-labelledby="hero-title" className="hero-section" id="top">
          <div className="hero-image" />
          <div className="hero-shade" />
          <div className="hero-content">
            <span className="hero-kicker">Invest with a global community</span>
            <h1 id="hero-title">A window into<br />what millions of<br />investors are<br />doing<span>.</span></h1>
            <p>You’re welcome.</p>
            <button
              className="button button-green hero-cta"
              onClick={() => onInfo({
                title: 'Account creation is disabled',
                body: 'The reconstruction is a local visual demo. It does not create accounts or accept personal or payment information.',
              })}
              type="button"
            >
              Start investing
            </button>
          </div>
        </section>

        <section aria-label="Platform highlights" className="stats-strip">
          <div className="stats-inner">
            {trustStats.map((stat) => (
              <div className="stat-item" key={stat.title}>
                <span aria-hidden="true" className="stat-icon">{stat.icon}</span>
                <span><strong>{stat.title}</strong><small>{stat.detail}</small></span>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="fees-heading" className="fees-section" id="fees">
          <div className="section-shell">
            <h2 className="section-title" id="fees-heading">No hidden fees. Just better investing.</h2>
            <div className="fee-grid">
              <article className="fee-card"><strong>$1</strong><h3>Commission on stocks.</h3><p>Reference-page fee statement. Eligibility and terms vary by country.</p></article>
              <article className="fee-card"><strong>0%</strong><h3>Commission on ETFs.</h3><p>Screenshot reference only; fees and conditions require local verification.</p></article>
              <article className="fee-card"><strong>From 0.3%</strong><h3>Trade more crypto, pay less.</h3><p>Reference-page copy. Crypto products and fees vary by region.</p></article>
            </div>
            <p className="fine-print">Pricing and product availability shown in the supplied reference are not verified for Bangladesh.</p>
          </div>
        </section>

        <section className="markets-section-wrapper">
          <MarketSection onInfo={onInfo} />
        </section>

        <InvestorSection onInfo={onInfo} />

        <section aria-labelledby="intelligence-heading" className="intelligence-section" id="intelligence">
          <div className="intelligence-inner">
            <div className="intelligence-copy">
              <span className="eyebrow">Technology</span>
              <h2 id="intelligence-heading">Powered by intelligence.</h2>
              <p>A smarter-feeling terminal, informed by tools and ideas from across the investing community.</p>
              <ul>
                <li>Explore a clear, focused investing experience.</li>
                <li>Bring market information and community ideas together.</li>
                <li>Use this page as a visual reference only; no AI service is connected.</li>
              </ul>
              <button
                className="button button-green"
                onClick={() => onInfo({
                  title: 'App links are disabled',
                  body: 'This local demo does not connect to an app store, download link, or AI investing service.',
                })}
                type="button"
              >
                Visit the app store
              </button>
              <div className="carousel-dots" aria-label="Feature panel 1 of 3"><span className="active" /><span /><span /></div>
            </div>
            <img alt="Editorial technology feature image cropped from the supplied public reference" className="technology-photo" src={techFeature} />
          </div>
        </section>

        <TrustSection />

        <section aria-labelledby="institutions-heading" className="institutions-section">
          <div className="section-shell">
            <h2 className="section-title" id="institutions-heading">Your funds are held in top-tier<br className="desktop-break" /> institutions</h2>
            <div aria-label="Institution names shown in supplied reference" className="institution-logos">
              <span>Coutts</span><span>Deutsche Bank</span><span>J. Safra Sarasin</span><span>citi</span><span>UBS</span><span>J.P. Morgan</span><span>Pictet</span>
            </div>
            <p className="fine-print">Institutional relationships and protections vary by entity, product, and country; verify current terms locally.</p>
          </div>
        </section>

        <section aria-labelledby="ready-heading" className="ready-section" id="ready">
          <div className="ready-inner">
            <div className="ready-copy">
              <span className="eyebrow">Start exploring</span>
              <h2 id="ready-heading">Ready when you are.</h2>
              <p>This local page is a visual reconstruction. No real account or financial service is connected.</p>
              <button
                className="button button-green"
                onClick={() => onInfo({
                  title: 'Create account is unavailable',
                  body: 'No account creation, login, deposits, or trading are connected to this local demo.',
                })}
                type="button"
              >
                Create account
              </button>
              <div className="qr-wrap"><FakeQr /><span>Decorative demo pattern<br />not scannable</span></div>
            </div>
            <div className="ready-art">
              <div className="market-line" />
              <PhoneMock />
            </div>
          </div>
        </section>

        <section aria-labelledby="partners-heading" className="partners-section" id="partners">
          <div className="section-shell">
            <h2 className="section-title" id="partners-heading">From podiums to pitches, look for our name.</h2>
            <div className="partner-row" aria-label="Partner names from supplied reference">
              <span className="partner-slavia">SLAVIA</span><span>FC UNION BERLIN</span><span>BAYER 04<br />LEVERKUSEN</span><span className="partner-pwr">PWR</span><span>1. FC KÖLN</span><span>BWT ALPINE<br />FORMULA ONE</span><span>CRYSTAL PALACE</span><span>PREM RUGBY</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="footer">
        <div className="footer-main">
          <div className="footer-brand">
            <Link className="wordmark footer-wordmark" to="/"><span>eToro</span><i aria-hidden="true">›</i></Link>
            <p>Social investing platform reference.<br />This is an independent local reconstruction demo.</p>
            <div className="social-dots" aria-label="Social links are not connected"><span>f</span><span>𝕏</span><span>◎</span><span>in</span><span>▶</span></div>
            <div className="store-pills"><span>App Store</span><span>Google Play</span></div>
          </div>
          <div className="footer-column"><strong>INVEST</strong><a href="#markets">Stocks</a><a href="#markets">ETFs</a><a href="#markets">Crypto</a><a href="#markets">Markets</a></div>
          <div className="footer-column"><strong>PLATFORM</strong><a href="#investors">CopyTrader</a><a href="#markets">Market overview</a><a href="#intelligence">Tools</a><Link to="/demo/settings">Settings preview</Link></div>
          <div className="footer-column"><strong>SUPPORT</strong><button onClick={() => onInfo({ title: 'Help is not connected', body: 'The local reconstruction does not send support requests or access an eToro account.' })} type="button">Help Center</button><a href="#fees">Fees</a><a href="#trust">Security</a></div>
          <div className="footer-column"><strong>ABOUT US</strong><a href="#partners">Partners</a><a href="#trust">Trust</a><a href="#footer">Our story</a></div>
        </div>
        <div className="footer-disclosures">
          <p>LOCAL DEMO · Not connected to eToro. No live data, account access, investment advice, or financial operations.</p>
          <p>Content, prices, fee text, institution names, and product availability are visual references only. Bangladesh-specific terms have not been verified. Capital is at risk in real investing.</p>
        </div>
      </footer>
    </div>
  );
}
