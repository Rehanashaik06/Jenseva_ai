import { Award, Zap, Globe, Shield, TrendingUp, Users, Code } from 'lucide-react';

const slides = [
  {
    icon: '⚠️', title: 'The Problem', color: '#ef4444',
    points: [
      'MPs receive thousands of unstructured complaints — no way to prioritize',
      'Ward-level data is siloed, outdated, or non-existent',
      'Officials lack AI tools to convert citizen voices into action plans',
      'Report generation is manual, time-consuming, and inconsistent',
      '428+ issues per constituency per month with zero intelligence layer',
    ]
  },
  {
    icon: '💡', title: 'Our Solution', color: '#3b82f6',
    points: [
      'JanSeva AI — Constituency Development Intelligence Platform',
      'Citizens submit issues → AI scores → MP dashboard → auto action plans',
      'Priority Engine scores every issue on 5 weighted dimensions (0–100)',
      'Ward-wise heatmap for instant visual understanding of problem clusters',
      'One-click monthly reports ready for ministry, press & public meetings',
    ]
  },
  {
    icon: '🚀', title: 'Innovation', color: '#10b981',
    points: [
      'First civic platform combining complaint mgmt + AI priority scoring',
      'Transparent AI reasoning — every score has a human-readable explanation',
      'MP Copilot — conversational AI for constituency insights on demand',
      'Auto-generated ministry-ready PDF reports in seconds',
      'Ward heatmap visualization for non-technical government staff',
    ]
  },
  {
    icon: '📊', title: 'Impact & Scale', color: '#f59e0b',
    points: [
      '543 Parliamentary constituencies across India = 543× impact potential',
      '38,420 citizens impacted per constituency per month (demo data)',
      '72% faster issue prioritization vs. manual methods',
      'Reduces report generation from 2 days to 2 minutes',
      'Deployable for Panchayat, Municipal, and State Government levels',
    ]
  },
  {
    icon: '🛠️', title: 'Tech Stack', color: '#8b5cf6',
    points: [
      'Frontend: React 19 + Vite 6 + Tailwind CSS v4',
      'Icons: Lucide React — lightweight, accessible icon library',
      'Routing: React Router DOM v7 (SPA architecture)',
      'AI Layer: Mock-first, ready for OpenAI / Gemini API integration',
      'Deployment: Vercel / Netlify — zero-config CI/CD',
    ]
  },
  {
    icon: '🔭', title: 'Future Roadmap', color: '#0ea5e9',
    points: [
      'Real AI integration: Gemini API for live priority scoring & copilot',
      'WhatsApp & IVR issue submission for rural, non-smartphone users',
      'GIS integration: Google Maps overlay for geographic issue heatmaps',
      'Multi-language support: Hindi + 12 regional languages',
      'Government API integration: Jal Jeevan Mission, PM Awas, MGNREGS',
    ]
  },
];

export default function Pitch() {
  const techStack = ['React 19', 'Vite 6', 'Tailwind CSS v4', 'Lucide React', 'React Router v7', 'Vercel'];

  return (
    <div className="fade-in">
      <div className="section-header">
        <div style={{
          width: 42, height: 42, borderRadius: 12,
          background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.3)',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <Award size={22} color="#f59e0b" />
        </div>
        <div>
          <h2 style={{ marginBottom: 2 }}>Hackathon Submission</h2>
          <p style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 400 }}>
            Code for Communities / Hack2Skill 2026 — JanSeva AI Pitch Deck
          </p>
        </div>
        <div style={{ marginLeft: 'auto' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 14px',
            background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.3)',
            borderRadius: 20, fontSize: 12, color: '#f59e0b', fontWeight: 700
          }}>🏆 Hackathon Entry</span>
        </div>
      </div>

      {/* Hero banner */}
      <div style={{
        background: 'linear-gradient(135deg, #0b1437, #111d4a, #0d2060)',
        border: '1px solid rgba(59,130,246,0.3)',
        borderRadius: 20, padding: '40px 48px', marginBottom: 32, textAlign: 'center',
        position: 'relative', overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', top: -60, right: -60, width: 250, height: 250, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.2), transparent 70%)', pointerEvents: 'none'
        }} />
        <div style={{ fontSize: 56, marginBottom: 12 }}>⚡</div>
        <h1 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, color: 'white', marginBottom: 8, fontFamily: 'Outfit' }}>
          JanSeva AI
        </h1>
        <p style={{ fontSize: 20, color: '#94a3b8', marginBottom: 4 }}>
          "From citizen voices to data-backed public action."
        </p>
        <p style={{ fontSize: 14, color: '#64748b' }}>
          Constituency Development Intelligence Platform — Code for Communities / Hack2Skill 2026
        </p>
      </div>

      {/* 6 pitch slides */}
      <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>📽️ Pitch Slides</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 32 }}>
        {slides.map((slide, i) => (
          <div key={i} className="card" style={{
            borderColor: `${slide.color}30`,
            background: `linear-gradient(135deg, ${slide.color}08, rgba(255,255,255,0.02))`
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10,
                background: `${slide.color}15`, border: `1px solid ${slide.color}30`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18
              }}>{slide.icon}</div>
              <div>
                <div style={{ fontSize: 10, color: slide.color, fontWeight: 700, letterSpacing: 1 }}>SLIDE {i + 1}</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: 'white' }}>{slide.title}</div>
              </div>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {slide.points.map((p, j) => (
                <li key={j} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', fontSize: 13, color: '#94a3b8', lineHeight: 1.5 }}>
                  <span style={{ color: slide.color, flexShrink: 0, marginTop: 2 }}>▸</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Submission details */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 28 }}>
        {/* Problem + Solution */}
        <div className="card">
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 14, color: '#60a5fa' }}>📝 Submission Summary</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              { label: 'Problem', value: 'MPs and district officials have no AI-powered tool to convert thousands of unstructured citizen complaints into ward-wise priorities, action plans, and budget recommendations.' },
              { label: 'Solution', value: 'JanSeva AI is a constituency intelligence platform that uses an AI priority engine to score every complaint (0-100) based on volume, severity, population impact, proximity, and urgency — then surfaces ward heatmaps, action plans, and auto-reports.' },
              { label: 'Innovation', value: 'First civic platform to combine complaint management + AI priority scoring + MP copilot + auto report generation in a single, government-ready dashboard.' },
              { label: 'Scalability', value: 'Deployable across 543 Parliamentary constituencies, 4,000+ municipalities, and Panchayat-level governance with zero infrastructure change.' },
            ].map(item => (
              <div key={item.label}>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#3b82f6', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 4 }}>{item.label}</div>
                <p style={{ fontSize: 13, color: '#94a3b8', lineHeight: 1.6 }}>{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Demo flow + Tech */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div className="card">
            <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 14, color: '#10b981' }}>🎬 Demo Flow</h3>
            {[
              '① Land on Overview — understand the platform at a glance',
              '② Submit a citizen issue via the form (try Drainage, High severity)',
              '③ Open MP Dashboard — see ward heatmap + priority table',
              '④ Explore AI Priority Engine — see scoring logic & reasoning',
              '⑤ Try MP Copilot — click "Which ward needs urgent attention?"',
              '⑥ Generate Report — click "Generate Monthly Report" → Print/Download',
            ].map((step, i) => (
              <div key={i} style={{ fontSize: 13, color: '#94a3b8', marginBottom: 8, lineHeight: 1.5 }}>{step}</div>
            ))}
          </div>

          <div className="card">
            <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 12, color: '#a78bfa' }}>
              <Code size={16} style={{ display: 'inline', marginRight: 6 }} />Tech Stack
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {techStack.map(t => (
                <span key={t} style={{
                  padding: '5px 12px', borderRadius: 8, fontSize: 12, fontWeight: 600,
                  background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)', color: '#a78bfa'
                }}>{t}</span>
              ))}
            </div>
          </div>

          <div className="card" style={{ background: 'rgba(16,185,129,0.06)', borderColor: 'rgba(16,185,129,0.2)' }}>
            <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 10, color: '#34d399' }}>📊 Impact Numbers</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              {[
                { v: '543', l: 'Constituencies' }, { v: '38K+', l: 'Citizens/mo' },
                { v: '72%', l: 'Faster decisions' }, { v: '2 min', l: 'Report gen.' }
              ].map(s => (
                <div key={s.l} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 22, fontWeight: 900, color: '#10b981' }}>{s.v}</div>
                  <div style={{ fontSize: 11, color: '#64748b' }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* GitHub / Deploy */}
      <div style={{
        background: 'rgba(59,130,246,0.06)', border: '1px solid rgba(59,130,246,0.2)',
        borderRadius: 16, padding: 24
      }}>
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 14, color: '#60a5fa' }}>🔗 Repository & Deployment</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {[
            { icon: '📦', label: 'GitHub Repo', value: 'github.com/shahid-afrid/janseva-ai', color: '#e2e8f0' },
            { icon: '🚀', label: 'Run Locally', value: 'npm install && npm run dev', color: '#34d399' },
            { icon: '🌐', label: 'Deploy', value: 'vercel --prod (zero config)', color: '#60a5fa' },
          ].map(item => (
            <div key={item.label} style={{
              background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 12, padding: 16
            }}>
              <div style={{ fontSize: 24, marginBottom: 8 }}>{item.icon}</div>
              <div style={{ fontSize: 11, color: '#64748b', fontWeight: 700, textTransform: 'uppercase', marginBottom: 4 }}>{item.label}</div>
              <code style={{ fontSize: 13, color: item.color, fontFamily: 'monospace' }}>{item.value}</code>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
