import { ArrowRight, BarChart2, Brain, FileText, Users, Shield, TrendingUp, Zap, CheckCircle, Star } from 'lucide-react';

const steps = [
  { icon: '🗣️', step: '01', title: 'Citizens Report', desc: 'Ward residents submit issues via web, WhatsApp or field agents — categorised, geo-tagged, severity-rated.' },
  { icon: '🤖', step: '02', title: 'AI Scores & Ranks', desc: 'Every complaint gets a 0–100 priority score across 5 weighted dimensions in milliseconds.' },
  { icon: '📊', step: '03', title: 'MP Dashboard', desc: 'Ward heatmap, priority table, and cost estimates surface the most impactful actions first.' },
  { icon: '✅', step: '04', title: 'Auto Reports', desc: 'One-click monthly reports sent to ministry, press, and public — ready in 2 minutes, not 2 days.' },
];

const features = [
  { icon: <BarChart2 size={20} color="#3b82f6"/>, title: 'Ward Heatmap',       desc: 'Visual priority map across all wards. Critical zones glow red instantly.',      color: '#3b82f6' },
  { icon: <Brain size={20} color="#10b981"/>,     title: 'AI Priority Engine',  desc: 'Transparent 0–100 scoring with plain-language AI reasoning per issue.',         color: '#10b981' },
  { icon: <FileText size={20} color="#f59e0b"/>,  title: 'Report Generator',    desc: 'Ministry-ready monthly PDF with budgets, priorities, action plans.',            color: '#f59e0b' },
  { icon: <Users size={20} color="#8b5cf6"/>,     title: 'MP Copilot',          desc: 'Conversational AI for instant "which ward is critical?" answers.',              color: '#8b5cf6' },
  { icon: <Shield size={20} color="#ef4444"/>,    title: 'Accountability Layer', desc: 'Resolution rate tracking, pending timelines, commitment monitoring.',          color: '#ef4444' },
  { icon: <TrendingUp size={20} color="#0ea5e9"/>,title: 'Impact Metrics',      desc: '38,420 citizens impacted, funds deployed, month-over-month trends.',           color: '#0ea5e9' },
];

const stats = [
  { value: '428',    label: 'Active Issues',      color: '#3b82f6', bg: 'rgba(59,130,246,0.1)',  border: 'rgba(59,130,246,0.25)' },
  { value: '76',     label: 'Urgent Cases',       color: '#ef4444', bg: 'rgba(239,68,68,0.1)',   border: 'rgba(239,68,68,0.25)'  },
  { value: '38,420', label: 'Citizens Impacted',  color: '#10b981', bg: 'rgba(16,185,129,0.1)',  border: 'rgba(16,185,129,0.25)' },
  { value: '119',    label: 'Resolved This Month',color: '#f59e0b', bg: 'rgba(245,158,11,0.1)',  border: 'rgba(245,158,11,0.25)' },
];

export default function Landing({ setActivePage }) {
  return (
    <div className="fade-in">
      {/* ── HERO ── */}
      <div style={{
        position: 'relative', borderRadius: 24, overflow: 'hidden',
        background: 'linear-gradient(135deg, #080f2e 0%, #0d1a50 55%, #091e46 100%)',
        border: '1px solid rgba(59,130,246,0.22)',
        padding: 'clamp(36px,6vw,72px) clamp(24px,6vw,72px)',
        marginBottom: 28, minHeight: 460,
        display: 'flex', alignItems: 'center'
      }}>
        {/* ambient glows */}
        <div style={{ position:'absolute', top:-100, right:-80, width:420, height:420, borderRadius:'50%', background:'radial-gradient(circle, rgba(37,99,235,0.22) 0%, transparent 68%)', pointerEvents:'none' }}/>
        <div style={{ position:'absolute', bottom:-80, left:-60, width:340, height:340, borderRadius:'50%', background:'radial-gradient(circle, rgba(16,185,129,0.14) 0%, transparent 68%)', pointerEvents:'none' }}/>
        {/* grid texture */}
        <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(rgba(59,130,246,0.08) 1px, transparent 1px)', backgroundSize:'32px 32px', pointerEvents:'none' }}/>

        <div style={{ position:'relative', zIndex:1, maxWidth:680 }}>
          {/* hackathon pill */}
          <div style={{
            display:'inline-flex', alignItems:'center', gap:8,
            background:'rgba(16,185,129,0.1)', border:'1px solid rgba(16,185,129,0.28)',
            borderRadius:20, padding:'6px 14px', marginBottom:22
          }}>
            <Star size={12} color="#34d399" fill="#34d399"/>
            <span style={{ fontSize:11, color:'#34d399', fontWeight:700, letterSpacing:0.6 }}>CODE FOR COMMUNITIES · HACK2SKILL 2026</span>
          </div>

          <h1 style={{ fontSize:'clamp(38px,5.5vw,66px)', fontWeight:900, lineHeight:1.08, color:'white', marginBottom:18 }}>
            <span className="gradient-text">JanSeva AI</span><br/>
            <span style={{ color:'rgba(255,255,255,0.88)' }}>Constituency</span><br/>
            <span style={{ color:'rgba(255,255,255,0.55)', fontWeight:600 }}>Intelligence Platform</span>
          </h1>

          <p style={{ fontSize:18, color:'#94a3b8', marginBottom:34, lineHeight:1.75, maxWidth:530 }}>
            From citizen voices to data-backed public action. Convert ward complaints into AI-scored priorities, heatmaps, and MP-ready action plans — in real time.
          </p>

          <div style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
            <button className="btn-primary" style={{ fontSize:15, padding:'13px 30px' }}
              onClick={() => setActivePage('dashboard')}>
              <BarChart2 size={17}/> Open MP Dashboard <ArrowRight size={15}/>
            </button>
            <button className="btn-secondary" style={{ fontSize:15, padding:'13px 30px' }}
              onClick={() => setActivePage('submit')}>
              <FileText size={17}/> Submit Citizen Issue
            </button>
          </div>

          <div style={{ display:'flex', gap:24, marginTop:28, flexWrap:'wrap' }}>
            {['🏛️ Gov-Ready Design','🔒 No API Keys','📱 Mobile First','🤖 AI-Powered'].map(b => (
              <span key={b} style={{ fontSize:12, color:'#475569', display:'flex', alignItems:'center', gap:5 }}>{b}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── STAT STRIP ── */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:14, marginBottom:28 }}>
        {stats.map(s => (
          <div key={s.label} className="lift" style={{
            background:s.bg, border:`1px solid ${s.border}`,
            borderRadius:14, padding:'18px 20px', textAlign:'center'
          }}>
            <div style={{ fontSize:'clamp(28px,3vw,38px)', fontWeight:900, color:s.color, fontFamily:'Outfit', lineHeight:1 }}>{s.value}</div>
            <div style={{ fontSize:12, color:'var(--text-muted)', marginTop:5, fontWeight:500 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* ── HOW IT WORKS ── */}
      <div style={{ marginBottom:28 }}>
        <div className="section-header">
          <h2>How JanSeva AI Works</h2>
          <span style={{ fontSize:13, color:'var(--text-muted)' }}>4-step pipeline from complaint to action</span>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:14 }}>
          {steps.map((s,i) => (
            <div key={i} className="card lift" style={{ padding:'24px 18px', textAlign:'center', position:'relative' }}>
              {i < steps.length-1 && (
                <div style={{ position:'absolute', right:-8, top:'50%', transform:'translateY(-50%)', color:'rgba(59,130,246,0.3)', fontSize:18, zIndex:2 }}>›</div>
              )}
              <div style={{
                width:52, height:52, borderRadius:14,
                background:'rgba(59,130,246,0.09)', border:'1px solid rgba(59,130,246,0.18)',
                display:'flex', alignItems:'center', justifyContent:'center', fontSize:24, margin:'0 auto 14px'
              }}>{s.icon}</div>
              <div style={{ fontSize:9, fontWeight:800, color:'rgba(59,130,246,0.7)', letterSpacing:1.5, textTransform:'uppercase', marginBottom:6 }}>Step {s.step}</div>
              <h3 style={{ fontSize:15, fontWeight:700, marginBottom:8, color:'white' }}>{s.title}</h3>
              <p style={{ fontSize:12.5, color:'var(--text-muted)', lineHeight:1.65 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── FEATURES ── */}
      <div style={{ marginBottom:28 }}>
        <div className="section-header"><h2>Platform Features</h2></div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:14 }}>
          {features.map((f,i) => (
            <div key={i} className="card lift" style={{ display:'flex', gap:14, alignItems:'flex-start' }}>
              <div style={{
                width:42, height:42, borderRadius:12, flexShrink:0,
                background:`${f.color}12`, border:`1px solid ${f.color}28`,
                display:'flex', alignItems:'center', justifyContent:'center'
              }}>{f.icon}</div>
              <div>
                <h3 style={{ fontSize:14, fontWeight:700, marginBottom:5, color:'white' }}>{f.title}</h3>
                <p style={{ fontSize:12.5, color:'var(--text-muted)', lineHeight:1.6 }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── BOTTOM CTA ── */}
      <div style={{
        borderRadius:20, padding:'32px 44px',
        background:'linear-gradient(135deg, rgba(37,99,235,0.12), rgba(16,185,129,0.08))',
        border:'1px solid rgba(59,130,246,0.22)',
        display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:18
      }}>
        <div>
          <h3 style={{ fontSize:20, fontWeight:800, color:'white', marginBottom:5 }}>Ready to see the full dashboard?</h3>
          <p style={{ color:'var(--text-muted)', fontSize:13 }}>Real-time ward priorities, AI scores, and auto-generated action plans awaiting.</p>
        </div>
        <div style={{ display:'flex', gap:10 }}>
          <button className="btn-primary" onClick={() => setActivePage('dashboard')}><BarChart2 size={15}/> MP Dashboard</button>
          <button className="btn-secondary" onClick={() => setActivePage('copilot')}><Brain size={15}/> Try Copilot</button>
        </div>
      </div>
    </div>
  );
}
