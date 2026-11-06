import { useState } from 'react';
import { mockIssues, wardData } from '../data/mockData';
import { TrendingUp, MapPin, Filter, RefreshCw, AlertOctagon } from 'lucide-react';

const heatMap = {
  critical: { bg:'rgba(239,68,68,0.1)',  border:'rgba(239,68,68,0.35)',  score:'#ef4444', label:'🔴 Critical' },
  high:     { bg:'rgba(245,158,11,0.09)',border:'rgba(245,158,11,0.3)',  score:'#f59e0b', label:'🟠 High'     },
  medium:   { bg:'rgba(59,130,246,0.07)',border:'rgba(59,130,246,0.24)', score:'#3b82f6', label:'🔵 Medium'   },
  low:      { bg:'rgba(16,185,129,0.07)',border:'rgba(16,185,129,0.2)',  score:'#10b981', label:'🟢 Low'      },
};

const cats = ['All','Roads','Drainage','Water','Streetlights','PHC','School','Waste'];

const statCards = [
  { label:'Total Issues',         value:'428',    sub:'+23 this week', icon:'📋', color:'#3b82f6', cls:'glow-blue'  },
  { label:'Urgent Issues',        value:'76',     sub:'Needs action now', icon:'🚨', color:'#ef4444', cls:'glow-red'   },
  { label:'Solved This Month',    value:'119',    sub:'72% resolution rate', icon:'✅', color:'#10b981', cls:'glow-green' },
  { label:'Citizens Impacted',    value:'38,420', sub:'Across 10 wards', icon:'👥', color:'#f59e0b', cls:'glow-amber' },
];

export default function Dashboard({ setActivePage }) {
  const [filter, setFilter] = useState('All');
  const filtered = (filter==='All' ? mockIssues : mockIssues.filter(i=>i.category===filter))
    .sort((a,b) => b.priorityScore - a.priorityScore);

  return (
    <div className="fade-in">
      {/* Header */}
      <div className="section-header" style={{ justifyContent:'space-between' }}>
        <div style={{ display:'flex', alignItems:'center', gap:12 }}>
          <div style={{ width:42,height:42,borderRadius:12,background:'rgba(59,130,246,0.14)',border:'1px solid rgba(59,130,246,0.28)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:20 }}>📊</div>
          <div>
            <h2 style={{ marginBottom:2 }}>MP Dashboard</h2>
            <p style={{ fontSize:12,color:'var(--text-muted)',fontWeight:400 }}>Rajnagar Constituency · Live</p>
          </div>
        </div>
        <div style={{ display:'flex', alignItems:'center', gap:8 }}>
          <div style={{ fontSize:11,color:'var(--text-muted)' }}>Last sync:</div>
          <div style={{ fontSize:12,color:'#34d399',fontWeight:600 }}>Jul 9, 2026 · 12:08 AM</div>
          <RefreshCw size={13} color="#64748b"/>
        </div>
      </div>

      {/* Stat cards */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:14, marginBottom:28 }}>
        {statCards.map(s => (
          <div key={s.label} className={`card ${s.cls} lift`} style={{ padding:22 }}>
            <div style={{ display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:14 }}>
              <span style={{ fontSize:26 }}>{s.icon}</span>
              <span style={{ fontSize:9,padding:'2px 8px',borderRadius:6,background:`${s.color}18`,color:s.color,fontWeight:800,border:`1px solid ${s.color}35`,letterSpacing:0.5 }}>LIVE</span>
            </div>
            <div style={{ fontSize:36,fontWeight:900,color:s.color,fontFamily:'Outfit',lineHeight:1 }}>{s.value}</div>
            <div style={{ fontSize:14,fontWeight:600,color:'#e2e8f0',marginTop:6 }}>{s.label}</div>
            <div style={{ fontSize:11,color:'var(--text-muted)',marginTop:3 }}>{s.sub}</div>
          </div>
        ))}
      </div>

      {/* Ward heatmap */}
      <div style={{ marginBottom:28 }}>
        <div style={{ display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:16,flexWrap:'wrap',gap:10 }}>
          <h3 style={{ fontSize:17,fontWeight:800 }}>🗺️ Ward-wise Priority Heatmap</h3>
          <div style={{ display:'flex',gap:14 }}>
            {Object.values(heatMap).map(h => (
              <span key={h.label} style={{ fontSize:11,color:h.score,fontWeight:600 }}>{h.label}</span>
            ))}
          </div>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:12 }}>
          {wardData.map(ward => {
            const hc = heatMap[ward.heatLevel];
            const resolvedPct = Math.round((ward.solved/ward.issues)*100);
            return (
              <div key={ward.id} style={{
                background:hc.bg, border:`1px solid ${hc.border}`,
                borderRadius:14, padding:16, cursor:'pointer', transition:'all 0.22s'
              }}
                onMouseEnter={e=>e.currentTarget.style.transform='translateY(-3px)'}
                onMouseLeave={e=>e.currentTarget.style.transform='translateY(0)'}
              >
                <div style={{ display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:6 }}>
                  <span style={{ fontSize:13,fontWeight:800,color:'white' }}>Ward {ward.id}</span>
                  <span style={{ fontSize:9,padding:'2px 7px',borderRadius:8,background:`${hc.score}20`,color:hc.score,fontWeight:800,textTransform:'uppercase',letterSpacing:0.5 }}>{ward.heatLevel}</span>
                </div>
                <div style={{ fontSize:11,color:'#64748b',marginBottom:12,fontWeight:500 }}>{ward.name.split('–')[1]?.trim()}</div>
                <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:6,marginBottom:10 }}>
                  <div style={{ textAlign:'center' }}>
                    <div style={{ fontSize:22,fontWeight:900,color:hc.score,fontFamily:'Outfit' }}>{ward.issues}</div>
                    <div style={{ fontSize:9,color:'#64748b',textTransform:'uppercase',fontWeight:700,letterSpacing:0.5 }}>Issues</div>
                  </div>
                  <div style={{ textAlign:'center' }}>
                    <div style={{ fontSize:22,fontWeight:900,color:'#f87171',fontFamily:'Outfit' }}>{ward.urgent}</div>
                    <div style={{ fontSize:9,color:'#64748b',textTransform:'uppercase',fontWeight:700,letterSpacing:0.5 }}>Urgent</div>
                  </div>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width:`${resolvedPct}%`, background:`linear-gradient(90deg,${hc.score},${hc.score}88)` }}/>
                </div>
                <div style={{ fontSize:10,color:'#64748b',marginTop:5 }}>{resolvedPct}% resolved · {ward.solved} done</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Priority table */}
      <div className="card" style={{ padding:0,overflow:'hidden' }}>
        <div style={{ padding:'18px 22px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12 }}>
          <h3 style={{ fontSize:16,fontWeight:800,display:'flex',alignItems:'center',gap:8 }}>
            <AlertOctagon size={17} color="#ef4444"/> Top Priority Issues
          </h3>
          <div style={{ display:'flex',gap:6,flexWrap:'wrap',alignItems:'center' }}>
            <Filter size={13} color="#64748b"/>
            {cats.map(cat => (
              <button key={cat} onClick={() => setFilter(cat)} style={{
                padding:'4px 11px', borderRadius:8, fontSize:11, fontWeight:600,
                border:`1px solid ${filter===cat?'#3b82f6':'rgba(59,130,246,0.18)'}`,
                background:filter===cat?'rgba(59,130,246,0.14)':'transparent',
                color:filter===cat?'#60a5fa':'#64748b', cursor:'pointer', transition:'all 0.15s'
              }}>{cat}</button>
            ))}
          </div>
        </div>
        <div style={{ padding:'12px 0 0', overflowX:'auto' }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>Score</th><th>Ward</th><th>Issue</th><th>Category</th>
                <th>Severity</th><th>Recommended Action</th><th>Cost</th><th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(issue => (
                <tr key={issue.id}>
                  <td>
                    <div className={`score-ring ${issue.priorityScore>=90?'score-critical':issue.priorityScore>=75?'score-high':'score-medium'}`}>
                      {issue.priorityScore}
                    </div>
                  </td>
                  <td>
                    <div style={{ display:'flex',alignItems:'center',gap:5 }}>
                      <MapPin size={11} color="#475569"/>
                      <span style={{ fontWeight:700,color:'#e2e8f0',fontSize:13 }}>Ward {issue.ward}</span>
                    </div>
                  </td>
                  <td style={{ maxWidth:200 }}>
                    <div style={{ color:'#e2e8f0',fontWeight:500,fontSize:13 }}>{issue.issue}</div>
                    <div style={{ fontSize:11,color:'#475569',marginTop:2 }}>👥 {issue.affectedPopulation.toLocaleString()} affected</div>
                  </td>
                  <td><span className="badge badge-blue">{issue.category}</span></td>
                  <td>
                    <span className={`badge ${issue.severity==='High'?'badge-high':issue.severity==='Medium'?'badge-medium':'badge-low'}`}>
                      {issue.severity==='High'?'🔴':issue.severity==='Medium'?'🟡':'🟢'} {issue.severity}
                    </span>
                  </td>
                  <td style={{ maxWidth:220,fontSize:12,color:'#94a3b8',lineHeight:1.5 }}>{issue.recommendedAction}</td>
                  <td style={{ fontWeight:700,color:'#f59e0b',whiteSpace:'nowrap',fontSize:13 }}>{issue.estimatedCost}</td>
                  <td>
                    <span style={{
                      fontSize:11,fontWeight:700,padding:'3px 9px',borderRadius:6,
                      background:issue.status==='Escalated'?'rgba(239,68,68,0.14)':issue.status==='In Progress'?'rgba(59,130,246,0.14)':'rgba(100,116,139,0.12)',
                      color:issue.status==='Escalated'?'#f87171':issue.status==='In Progress'?'#60a5fa':'#94a3b8',
                      border:`1px solid ${issue.status==='Escalated'?'rgba(239,68,68,0.3)':issue.status==='In Progress'?'rgba(59,130,246,0.3)':'rgba(100,116,139,0.2)'}`
                    }}>{issue.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
