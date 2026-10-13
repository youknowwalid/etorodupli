import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { settingsSections, sidebarMore, sidebarPrimary } from '../data';
import type { InfoMessage } from '../components/InfoDialog';

type PageProps = { onInfo: (message: InfoMessage) => void };

function SimpleIcon({ name }: { name: string }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, strokeWidth: 1.6 };
  const paths: Record<string, React.ReactNode> = {
    display: <><rect x="3" y="4" width="13" height="11" rx="1.2" /><path d="M7 19h9m-5-4v4" /><rect x="17" y="10" width="4" height="8" rx=".7" /></>,
    account: <><circle cx="12" cy="8" r="3.3" /><path d="M5 20c.5-3.4 2.8-5.1 7-5.1s6.5 1.7 7 5.1" /></>,
    trading: <><path d="M4 7h15l-3.5-3.5M20 17H5l3.5 3.5" /></>,
    notifications: <><path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" /><path d="m4 4-1.5-1.5M20 4l1.5-1.5" /></>,
    privacy: <><rect x="5" y="10" width="14" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3m-4 4v3" /></>,
    recurring: <><ellipse cx="12" cy="5" rx="7" ry="2.5" /><path d="M5 5v5c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V5m-14 5v5c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-5m-14 5v4c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-4" /></>,
  };
  return <svg aria-hidden="true" className="setting-icon" viewBox="0 0 24 24" {...common}>{paths[name] ?? paths.account}</svg>;
}

export default function SettingsDemoPage({ onInfo }: PageProps) {
  const [query, setQuery] = useState('');
  const filteredSections = useMemo(
    () => settingsSections.filter((section) => `${section.title} ${section.description}`.toLowerCase().includes(query.toLowerCase())),
    [query],
  );

  const showUnavailable = (label: string) => onInfo({
    title: `${label} is not part of the verified demo`,
    body: 'This reconstruction only reproduces the visible Settings overview. It does not open real account pages, change settings, or connect to financial services.',
  });

  return (
    <div className="account-demo-shell">
      <aside aria-label="Demo account navigation" className="account-sidebar">
        <div className="sidebar-brand-row">
          <Link aria-label="Return to public page" className="wordmark sidebar-wordmark" to="/"><span>eToro</span><i aria-hidden="true">›</i></Link>
          <button aria-label="Collapse navigation" className="collapse-nav" onClick={() => onInfo({ title: 'Navigation is fixed in this demo', body: 'The supplied screenshot shows a full sidebar. Collapse behavior was not observed.' })} type="button">⇤</button>
        </div>
        <button className="demo-account-switcher" onClick={() => onInfo({ title: 'Demo portfolio only', body: 'This local preview has no real or virtual eToro account behind it.' })} type="button">
          <span className="online-dot" /><span><strong>Demo portfolio</strong><small>Local preview</small></span><span className="switch-chevron">⌄</span>
        </button>
        <div className="demo-profile">
          <div aria-hidden="true" className="demo-avatar">D</div>
          <div><strong>Demo profile</strong><small>Example UI only</small></div>
        </div>
        <div className="profile-progress-label"><span>Profile preview</span><span>Demo</span></div>
        <div className="profile-progress-track"><span /></div>
        <button className="complete-profile" onClick={() => onInfo({ title: 'Profile completion is not connected', body: 'This demo does not collect identity, contact, or verification information.' })} type="button">Profile preview</button>
        <nav aria-label="Account areas" className="sidebar-nav">
          {sidebarPrimary.map((item) => (
            <button className="sidebar-link" key={item} onClick={() => showUnavailable(item)} type="button">{item}</button>
          ))}
          <span className="sidebar-section-label">More</span>
          {sidebarMore.map((item) => (
            <button
              aria-current={item === 'Settings' ? 'page' : undefined}
              className={item === 'Settings' ? 'sidebar-link sidebar-link-active' : 'sidebar-link sidebar-link-small'}
              key={item}
              onClick={() => item !== 'Settings' && showUnavailable(item)}
              type="button"
            >
              <span aria-hidden="true" className="sidebar-symbol">{sidebarSymbol(item)}</span>
              <span>{item}</span>
              {item === 'App Store' && <em>New</em>}
              {item === 'Agent Portfolios' && <em className="beta-badge">Beta</em>}
            </button>
          ))}
          <button className="sidebar-link sidebar-link-small" onClick={() => onInfo({ title: 'Sign-out is not connected', body: 'The local demo has no authenticated session to end.' })} type="button"><span aria-hidden="true" className="sidebar-symbol">↪</span><span>Logout</span></button>
        </nav>
        <button className="deposit-button" onClick={() => onInfo({ title: 'Funding is disabled', body: 'This page is not connected to any account. No deposit or payment can be made.' })} type="button">Deposit Funds</button>
      </aside>

      <div className="account-main-column">
        <header className="account-topbar">
          <label className="account-search">
            <svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="10.8" cy="10.8" r="6.2" /><path d="m15.4 15.4 5 5" /></svg>
            <input aria-label="Search settings" onChange={(event) => setQuery(event.target.value)} placeholder="Search settings" value={query} />
            {query && <button aria-label="Clear search" onClick={() => setQuery('')} type="button">×</button>}
          </label>
          <div className="topbar-actions">
            <button aria-label="Demo tools" onClick={() => onInfo({ title: 'No connected tools', body: 'Live integrations and account data are not available in this local demo.' })} type="button"><span className="sparkle-icon">✣</span></button>
            <button aria-label="Notifications" onClick={() => onInfo({ title: 'No notifications in the demo', body: 'The notification center is not connected to an account.' })} type="button"><span className="bell-icon">♟</span></button>
          </div>
        </header>

        <main className="settings-main">
          <section aria-labelledby="verification-title" className="verification-summary">
            <div className="verification-alert" aria-hidden="true">!</div>
            <div className="verification-copy">
              <h1 id="verification-title">Verification Centre</h1>
              <p>Verification status is not connected in this demo.</p>
              <div aria-hidden="true" className="verification-neutral-line"><span /></div>
            </div>
            <button aria-label="Verification information" className="verification-chevron" onClick={() => onInfo({ title: 'Verification is not available', body: 'No identity documents or verification data are collected by this reconstruction.' })} type="button">›</button>
          </section>

          <section aria-label="Settings categories" className="settings-card-grid">
            {filteredSections.map((section) => (
              <button className="settings-card" key={section.title} onClick={() => showUnavailable(section.title)} type="button">
                <SimpleIcon name={section.icon} />
                <span className="settings-card-content">
                  <strong>{section.title}</strong>
                  <span>{section.description}</span>
                </span>
                <span aria-hidden="true" className="settings-arrow">›</span>
              </button>
            ))}
            {filteredSections.length === 0 && (
              <div className="settings-empty-state">
                <strong>No settings match “{query}”</strong>
                <p>Try Display, Account, Trading, Notifications, Privacy or Recurring Orders.</p>
              </div>
            )}
          </section>
          <div className="settings-version">LOCAL DEMO · SETTINGS OVERVIEW</div>
        </main>
      </div>
      <button className="support-prompt" onClick={() => onInfo({ title: 'Support is not connected', body: 'This local reconstruction does not open support tickets or access account information.' })} type="button">
        <span className="support-avatar">?</span><span>Need help? <strong>Demo support</strong></span><i aria-hidden="true">?</i>
      </button>
    </div>
  );
}

function sidebarSymbol(label: string) {
  const symbols: Record<string, string> = {
    'App Store': '⊞',
    'Copy Pro Investors': '♧',
    'Economic Calendar': '▣',
    'Agent Portfolios': '▧',
    'eToro Club': '◉',
    'Invite Friends': '♧',
    'Withdraw Funds': '↘',
    Settings: '⚙',
    'Help & Resources': '⚑',
    Academy: '▱',
    'Try Edge': '✣',
  };
  return symbols[label] ?? '•';
}
