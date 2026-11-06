import { mockIssues } from '../data/mockData';
import { Brain } from 'lucide-react';

const formulaFactors = [
  { label: 'Complaint Volume', weight: '30%', color: '#3b82f6', icon: '📊', desc: 'Number of unique citizens reporting the same issue in a ward' },
  { label: 'Severity Rating', weight: '25%', color: '#ef4444', icon: '🔴', desc: 'Citizen-reported severity: Low (1x), Medium (2x), High (3x) multiplier' },
  { label: 'Affected Population', weight: '20%', color: '#10b981', icon: '👥', desc: 'Estimated residents directly impacted based on ward population density' },
  { label: 'Infrastructure Proximity', weight: '15%', color: '#f59e0b', icon: '🏛️', desc: 'Nearness to schools, hospitals, markets, or public transport hubs' },
  { label: 'Urgency / Time Factor', weight: '10%', color: '#8b5cf6', icon: '⏱️', desc: 'Days since first report + seasonal risk (monsoon, summer) multiplier' },
];

const topScored = [...mockIssues].sort((a, b) => b.priorityScore - a.priorityScore).slice(0, 5);

function ScoreBar({ score }) {
  const color = score >= 90 ? '#ef4444' : score >= 80 ? '#f59e0b' : '#3b82f6';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <div className="progress-bar" style={{ flex: 1 }}>
        <div className="progress-fill" style={{ width: `${score}%`, background: `linear-gradient(90deg, ${color}, ${color}88)` }} />
      </div>
      <span style={{ fontWeight: 800, fontSize: 15, color, minWidth: 32 }}>{score}</span>
    </div>
  );
}

export default function PriorityEngine() {
  return (
    <div className="fade-in">
      <div className="section-header">
        <div style={{
          width: 42, height: 42, borderRadius: 12,
          background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.3)',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <Brain size={22} color="#a78bfa" />
        </div>
        <div>
          <h2 style={{ marginBottom: 2 }}>AI Priority Engine</h2>
          <p style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 400 }}>
            Transparent scoring logic — every number has a reason.
          </p>
        </div>
      </div>

      {/* Formula explainer */}
      <div className="card" style={{ marginBottom: 28, background: 'linear-gradient(135deg, rgba(139,92,246,0.08), rgba(59,130,246,0.08))', borderColor: 'rgba(139,92,246,0.25)' }}>
        <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 6 }}>📐 Priority Score Formula</h3>
        <div style={{
          background: 'rgba(0,0,0,0.3)', borderRadius: 12, padding: '14px 20px',
          fontFamily: 'monospace', fontSize: 14, color: '#a78bfa', marginBottom: 20,
          border: '1px solid rgba(139,92,246,0.2)'
        }}>
          Priority Score = (Volume × 0.30) + (Severity × 0.25) + (Population × 0.20) + (Proximity × 0.15) + (Urgency × 0.10)
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12 }}>
          {formulaFactors.map(f => (
            <div key={f.label} style={{
              background: 'rgba(255,255,255,0.03)', border: `1px solid ${f.color}30`,
              borderRadius: 12, padding: 16, textAlign: 'center'
            }}>
              <div style={{ fontSize: 24, marginBottom: 8 }}>{f.icon}</div>
              <div style={{ fontSize: 18, fontWeight: 900, color: f.color, marginBottom: 4 }}>{f.weight}</div>
              <div style={{ fontSize: 12, fontWeight: 600, color: '#e2e8f0', marginBottom: 6 }}>{f.label}</div>
              <div style={{ fontSize: 11, color: '#64748b', lineHeight: 1.4 }}>{f.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Score range guide */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 28 }}>
        {[
          { range: '90–100', label: 'CRITICAL', color: '#ef4444', desc: 'Immediate intervention required' },
          { range: '75–89', label: 'HIGH', color: '#f59e0b', desc: 'Action within 48–72 hours' },
          { range: '50–74', label: 'MEDIUM', color: '#3b82f6', desc: 'Schedule within this week' },
          { range: '0–49', label: 'LOW', color: '#10b981', desc: 'Plan for this month' },
        ].map(s => (
          <div key={s.range} style={{
            background: `${s.color}10`, border: `1px solid ${s.color}30`,
            borderRadius: 12, padding: 16, textAlign: 'center'
          }}>
            <div style={{ fontSize: 20, fontWeight: 900, color: s.color, fontFamily: 'Outfit' }}>{s.range}</div>
            <div style={{ fontSize: 11, fontWeight: 800, color: s.color, letterSpacing: 1, marginBottom: 4 }}>{s.label}</div>
            <div style={{ fontSize: 12, color: '#64748b' }}>{s.desc}</div>
          </div>
        ))}
      </div>

      {/* Top 5 scored issues with AI reasoning */}
      <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>🤖 Top 5 AI-Scored Issues with Reasoning</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {topScored.map((issue, idx) => {
          const color = issue.priorityScore >= 90 ? '#ef4444' : issue.priorityScore >= 80 ? '#f59e0b' : '#3b82f6';
          return (
            <div key={issue.id} className="card" style={{
              borderColor: `${color}30`,
              background: `linear-gradient(135deg, ${color}08, rgba(255,255,255,0.02))`
            }}>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                {/* Rank + score */}
                <div style={{ textAlign: 'center', flexShrink: 0 }}>
                  <div style={{ fontSize: 11, color: '#64748b', fontWeight: 700, marginBottom: 4 }}>RANK</div>
                  <div style={{
                    width: 48, height: 48, borderRadius: '50%',
                    background: `${color}20`, border: `2px solid ${color}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 18, fontWeight: 900, color
                  }}>#{idx + 1}</div>
                </div>

                {/* Main content */}
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 8 }}>
                    <div>
                      <h4 style={{ fontSize: 15, fontWeight: 700, color: 'white', marginBottom: 4 }}>{issue.issue}</h4>
                      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                        <span style={{ fontSize: 12, color: '#64748b' }}>📍 {issue.wardName}</span>
                        <span className={`badge ${issue.severity === 'High' ? 'badge-high' : 'badge-medium'}`}>{issue.severity}</span>
                        <span className="badge badge-blue">{issue.category}</span>
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: 11, color: '#64748b', marginBottom: 4 }}>Priority Score</div>
                      <ScoreBar score={issue.priorityScore} />
                    </div>
                  </div>

                  {/* AI Reasoning */}
                  <div style={{
                    background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(139,92,246,0.2)',
                    borderRadius: 10, padding: '12px 16px', marginTop: 8
                  }}>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                      <Brain size={15} color="#a78bfa" style={{ flexShrink: 0, marginTop: 2 }} />
                      <div>
                        <span style={{ fontSize: 11, fontWeight: 700, color: '#a78bfa', letterSpacing: 0.5 }}>AI REASONING  </span>
                        <span style={{ fontSize: 13, color: '#94a3b8', lineHeight: 1.6 }}>{issue.aiReasoning}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom row */}
                  <div style={{ display: 'flex', gap: 20, marginTop: 10, flexWrap: 'wrap' }}>
                    <div style={{ fontSize: 12, color: '#64748b' }}>
                      👥 <span style={{ color: '#94a3b8' }}>{issue.affectedPopulation.toLocaleString()} residents</span>
                    </div>
                    <div style={{ fontSize: 12, color: '#64748b' }}>
                      💰 <span style={{ color: '#f59e0b', fontWeight: 600 }}>{issue.estimatedCost}</span>
                    </div>
                    <div style={{ fontSize: 12, color: '#64748b', flex: 1 }}>
                      ✅ <span style={{ color: '#94a3b8' }}>{issue.recommendedAction}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
