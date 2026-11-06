import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Landing from './pages/Landing';
import SubmitIssue from './pages/SubmitIssue';
import Dashboard from './pages/Dashboard';
import PriorityEngine from './pages/PriorityEngine';
import Copilot from './pages/Copilot';
import ReportGenerator from './pages/ReportGenerator';
import Pitch from './pages/Pitch';

export default function App() {
  const [activePage, setActivePage] = useState('landing');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Close sidebar on page change (mobile)
  useEffect(() => { setSidebarOpen(false); }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case 'landing':   return <Landing setActivePage={setActivePage} />;
      case 'submit':    return <SubmitIssue />;
      case 'dashboard': return <Dashboard setActivePage={setActivePage} />;
      case 'priority':  return <PriorityEngine />;
      case 'copilot':   return <Copilot />;
      case 'report':    return <ReportGenerator />;
      case 'pitch':     return <Pitch setActivePage={setActivePage} />;
      default:          return <Landing setActivePage={setActivePage} />;
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--navy)' }}>
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)',
            zIndex: 40, display: 'none'
          }}
          className="mobile-overlay-active"
        />
      )}
      <main className="main-content" style={{ flex: 1 }}>
        {renderPage()}
      </main>
    </div>
  );
}
