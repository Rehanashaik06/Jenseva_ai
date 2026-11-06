import {
  LayoutDashboard, FileText, Brain, MessageSquare, BarChart2,
  Award, Zap, ChevronRight, Menu, X, MapPin, Bell
} from 'lucide-react';

const navItems = [
  { id: 'landing',   label: 'Overview',          icon: LayoutDashboard, badge: null },
  { id: 'submit',    label: 'Submit Issue',       icon: FileText,        badge: null },
  { id: 'dashboard', label: 'MP Dashboard',       icon: BarChart2,       badge: '76' },
  { id: 'priority',  label: 'AI Priority Engine', icon: Brain,           badge: null },
  { id: 'copilot',   label: 'MP Copilot',         icon: MessageSquare,   badge: 'AI' },
  { id: 'report',    label: 'Report Generator',   icon: FileText,        badge: null },
  { id: 'pitch',     label: 'Hackathon Pitch',    icon: Award,           badge: null },
];

export default function Sidebar({ activePage, setActivePage, sidebarOpen, setSidebarOpen }) {
  return (
    <>
      {/* Mobile hamburger */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        style={{
          position: 'fixed', top: 14, left: 14, zIndex: 60,
          background: 'var(--surface-2)', border: '1px solid var(--border)',
          borderRadius: 10, padding: 9, cursor: 'pointer', color: 'white',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}
        className="mobile-only"
      >
        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        {/* Logo */}
        <div style={{ padding: '22px 18px 16px', borderBottom: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <div style={{
              width: 40, height: 40, borderRadius: 12, flexShrink: 0,
              background: 'linear-gradient(135deg, #2563eb, #10b981)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 14px rgba(37,99,235,0.4)'
            }}>
              <Zap size={20} color="white" />
            </div>
            <div>
              <div style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: 18, color: 'white', lineHeight: 1.1 }}>JanSeva AI</div>
              <div style={{ fontSize: 9, color: '#3b82f6', fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase' }}>Constituency Intelligence</div>
            </div>
          </div>

          {/* Constituency + live indicator */}
          <div style={{
            background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.2)',
            borderRadius: 10, padding: '8px 12px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <MapPin size={12} color="#3b82f6" />
              <span style={{ fontSize: 11, color: '#94a3b8', fontWeight: 500 }}>Rajnagar Const.</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981', display: 'inline-block', boxShadow: '0 0 6px #10b981' }} />
              <span style={{ fontSize: 10, color: '#34d399', fontWeight: 600 }}>LIVE</span>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav style={{ padding: '14px 10px', flex: 1, overflowY: 'auto' }}>
          <div style={{ fontSize: 9, color: '#475569', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1.2, padding: '0 10px', marginBottom: 6 }}>
            Main Navigation
          </div>
          {navItems.map(({ id, label, icon: Icon, badge }) => (
            <button
              key={id}
              onClick={() => setActivePage(id)}
              className={`sidebar-link ${activePage === id ? 'active' : ''}`}
            >
              <Icon size={16} />
              <span style={{ flex: 1, fontSize: 13 }}>{label}</span>
              {badge && (
                <span style={{
                  fontSize: 9, fontWeight: 800, padding: '2px 6px', borderRadius: 6,
                  background: badge === 'AI' ? 'rgba(139,92,246,0.25)' : 'rgba(239,68,68,0.2)',
                  color: badge === 'AI' ? '#a78bfa' : '#f87171',
                  border: `1px solid ${badge === 'AI' ? 'rgba(139,92,246,0.3)' : 'rgba(239,68,68,0.3)'}`,
                  letterSpacing: 0.3
                }}>{badge}</span>
              )}
              {activePage === id && <ChevronRight size={13} color="#3b82f6" />}
            </button>
          ))}
        </nav>

        {/* Divider */}
        <div style={{ borderTop: '1px solid var(--border)', margin: '0 10px' }} />

        {/* Alert */}
        <div style={{ padding: '12px 14px' }}>
          <div style={{
            background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)',
            borderRadius: 10, padding: '10px 12px',
            display: 'flex', alignItems: 'flex-start', gap: 8
          }}>
            <Bell size={14} color="#f87171" style={{ flexShrink: 0, marginTop: 1 }} />
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#f87171', marginBottom: 2 }}>76 Urgent Issues</div>
              <div style={{ fontSize: 10, color: '#64748b', lineHeight: 1.4 }}>Wards 3 & 7 need immediate attention</div>
            </div>
          </div>
        </div>

        {/* MP profile footer */}
        <div style={{ padding: '12px 14px 18px', borderTop: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 36, height: 36, borderRadius: '50%', flexShrink: 0,
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 13, fontWeight: 800, color: 'white', letterSpacing: 0.5
            }}>AK</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'white', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Arvind Kumar Singh</div>
              <div style={{ fontSize: 10, color: '#64748b' }}>Member of Parliament</div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
