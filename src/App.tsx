import { useCallback, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SettingsDemoPage from './pages/SettingsDemoPage';
import InfoDialog, { type InfoMessage } from './components/InfoDialog';

export default function App() {
  const [message, setMessage] = useState<InfoMessage | null>(null);
  const showInfo = useCallback((nextMessage: InfoMessage) => setMessage(nextMessage), []);
  const closeInfo = useCallback(() => setMessage(null), []);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage onInfo={showInfo} />} />
        <Route path="/demo/settings" element={<SettingsDemoPage onInfo={showInfo} />} />
        <Route
          path="*"
          element={
            <main className="not-found-page">
              <span className="eyebrow">Route not audited</span>
              <h1>This screen is not part of the verified demo yet.</h1>
              <p>No live account or financial service is connected.</p>
              <Link className="button button-green" to="/">
                Return to the public page
              </Link>
            </main>
          }
        />
      </Routes>
      <div aria-label="Local demo, not connected to eToro" className="demo-stamp">
        <span className="demo-stamp-dot" /> LOCAL DEMO · NOT CONNECTED
      </div>
      {message && <InfoDialog message={message} onClose={closeInfo} />}
    </>
  );
}
