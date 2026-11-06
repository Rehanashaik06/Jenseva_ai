import { useState } from 'react';
import { aiPromptResponses } from '../data/mockData';
import { MessageSquare, Send, Bot, User, Zap } from 'lucide-react';

const suggestions = [
  { key: 'top5', label: '📊 What are the top 5 problems this month?' },
  { key: 'sanitation', label: '🗑️ Generate sanitation action plan.' },
  { key: 'urgent', label: '🚨 Which ward needs urgent attention?' },
  { key: 'meeting', label: '📋 Prepare public meeting summary.' },
];

function formatResponse(text) {
  const lines = text.split('\n');
  return lines.map((line, i) => {
    if (line.startsWith('**') && line.endsWith('**')) {
      return <div key={i} style={{ fontWeight: 700, color: 'white', marginTop: i > 0 ? 8 : 0 }}>{line.slice(2, -2)}</div>;
    }
    if (line.includes('**')) {
      const parts = line.split('**');
      return (
        <div key={i} style={{ marginTop: 4 }}>
          {parts.map((p, j) => j % 2 === 1 ? <strong key={j} style={{ color: '#60a5fa' }}>{p}</strong> : <span key={j}>{p}</span>)}
        </div>
      );
    }
    if (line.startsWith('|')) {
      return <div key={i} style={{ fontFamily: 'monospace', fontSize: 12, color: '#94a3b8', marginTop: 2 }}>{line}</div>;
    }
    if (line.startsWith('•') || line.startsWith('-')) {
      return <div key={i} style={{ paddingLeft: 12, marginTop: 3, color: '#94a3b8' }}>{line}</div>;
    }
    if (line.startsWith('#')) {
      return <div key={i} style={{ fontWeight: 700, fontSize: 15, color: '#60a5fa', marginTop: 8 }}>{line.replace(/^#+\s/, '')}</div>;
    }
    if (line === '') return <div key={i} style={{ height: 6 }} />;
    return <div key={i} style={{ marginTop: 2 }}>{line}</div>;
  });
}

export default function Copilot() {
  const [messages, setMessages] = useState([
    {
      role: 'ai',
      text: `👋 **Hello! I'm your JanSeva AI Copilot.**\n\nI have real-time access to your constituency data — 428 active issues across 10 wards.\n\nTry one of the suggested prompts below, or ask me anything about your constituency.`
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = (promptKey, promptText) => {
    const text = promptText || input.trim();
    if (!text) return;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text }]);
    setLoading(true);
    setTimeout(() => {
      const responseData = promptKey ? aiPromptResponses[promptKey] :
        Object.values(aiPromptResponses).find(r => r.prompt.toLowerCase().includes(text.toLowerCase().slice(0, 10)));
      const response = responseData?.response ||
        `I've analyzed your query: **"${text}"**\n\nBased on current constituency data:\n\n• 428 total active issues across 10 wards\n• Ward 3 and Ward 7 are most critical\n• 76 urgent issues pending resolution\n• Estimated 38,420 citizens affected\n\nFor detailed analysis, try one of the suggested prompts below or ask about a specific ward.`;
      setMessages(prev => [...prev, { role: 'ai', text: response }]);
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="fade-in">
      <div className="section-header">
        <div style={{
          width: 42, height: 42, borderRadius: 12,
          background: 'rgba(0,229,255,0.1)', border: '1px solid rgba(0,229,255,0.25)',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <MessageSquare size={22} color="#0ea5e9" />
        </div>
        <div>
          <h2 style={{ marginBottom: 2 }}>MP Copilot</h2>
          <p style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 400 }}>
            AI assistant trained on your constituency data — ask anything.
          </p>
        </div>
        <div style={{ marginLeft: 'auto' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)',
            borderRadius: 20, padding: '5px 12px', fontSize: 12, color: '#34d399'
          }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
            AI Online
          </span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 24, height: '68vh', alignItems: 'start' }}>
        {/* Chat window */}
        <div style={{ display: 'flex', flexDirection: 'column', height: '68vh' }}>
          {/* Messages */}
          <div style={{
            flex: 1, overflowY: 'auto',
            background: 'var(--surface)', border: '1px solid var(--border)',
            borderRadius: '16px 16px 0 0', padding: 20,
            display: 'flex', flexDirection: 'column', gap: 16
          }}>
            {messages.map((msg, i) => (
              <div key={i} style={{
                display: 'flex', gap: 12,
                flexDirection: msg.role === 'user' ? 'row-reverse' : 'row',
                alignItems: 'flex-start'
              }}>
                <div style={{
                  width: 34, height: 34, borderRadius: '50%', flexShrink: 0,
                  background: msg.role === 'ai'
                    ? 'linear-gradient(135deg, #2563eb, #0ea5e9)'
                    : 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  {msg.role === 'ai' ? <Bot size={17} color="white" /> : <User size={17} color="white" />}
                </div>
                <div className={`chat-bubble ${msg.role === 'ai' ? 'chat-ai' : 'chat-user'}`}>
                  <div style={{ fontSize: 13.5, lineHeight: 1.7 }}>
                    {formatResponse(msg.text)}
                  </div>
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{
                  width: 34, height: 34, borderRadius: '50%',
                  background: 'linear-gradient(135deg, #2563eb, #0ea5e9)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                }}><Bot size={17} color="white" /></div>
                <div className="chat-bubble chat-ai">
                  <div style={{ display: 'flex', gap: 5, padding: '4px 0' }}>
                    {[0, 1, 2].map(d => (
                      <div key={d} style={{
                        width: 7, height: 7, borderRadius: '50%', background: '#3b82f6',
                        animation: 'bounce 1s ease infinite',
                        animationDelay: `${d * 0.15}s`
                      }} />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div style={{
            background: 'var(--surface-2)', border: '1px solid var(--border)',
            borderTop: 'none', borderRadius: '0 0 16px 16px', padding: 14,
            display: 'flex', gap: 10
          }}>
            <input
              className="form-input"
              placeholder="Ask about your constituency... (press Enter to send)"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') sendMessage(null, input); }}
              style={{ flex: 1 }}
            />
            <button
              onClick={() => sendMessage(null, input)}
              disabled={!input.trim() || loading}
              style={{
                background: input.trim() ? 'linear-gradient(135deg, #2563eb, #1d4ed8)' : 'rgba(255,255,255,0.05)',
                border: 'none', borderRadius: 10, padding: '0 16px',
                cursor: input.trim() ? 'pointer' : 'default', color: 'white',
                display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 600,
                transition: 'all 0.2s', minWidth: 80
              }}
            >
              <Send size={16} /> Send
            </button>
          </div>
        </div>

        {/* Suggestions panel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
              <Zap size={16} color="#f59e0b" />
              <span style={{ fontSize: 14, fontWeight: 700, color: 'white' }}>Quick Prompts</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {suggestions.map(s => (
                <button
                  key={s.key}
                  onClick={() => sendMessage(s.key, s.label.replace(/^[^\w]+/, '').trim())}
                  style={{
                    background: 'rgba(59,130,246,0.06)', border: '1px solid rgba(59,130,246,0.2)',
                    borderRadius: 10, padding: '10px 14px', cursor: 'pointer',
                    color: '#94a3b8', fontSize: 13, textAlign: 'left', lineHeight: 1.4,
                    transition: 'all 0.2s', fontFamily: 'Inter, sans-serif'
                  }}
                  onMouseOver={e => { e.currentTarget.style.borderColor = 'rgba(59,130,246,0.5)'; e.currentTarget.style.color = '#60a5fa'; }}
                  onMouseOut={e => { e.currentTarget.style.borderColor = 'rgba(59,130,246,0.2)'; e.currentTarget.style.color = '#94a3b8'; }}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          <div className="card" style={{ background: 'rgba(139,92,246,0.06)', borderColor: 'rgba(139,92,246,0.2)' }}>
            <h4 style={{ fontSize: 13, fontWeight: 700, color: '#a78bfa', marginBottom: 10 }}>📡 Data Sources</h4>
            <div style={{ fontSize: 12, color: '#64748b', lineHeight: 1.8 }}>
              ✓ 428 Active complaints<br />
              ✓ 10 ward datasets<br />
              ✓ Priority scores (AI)<br />
              ✓ Budget estimates<br />
              ✓ Resolution tracking
            </div>
          </div>

          <div className="card">
            <h4 style={{ fontSize: 13, fontWeight: 700, color: '#e2e8f0', marginBottom: 8 }}>💡 Tip</h4>
            <p style={{ fontSize: 12, color: '#64748b', lineHeight: 1.6 }}>
              Ask me to generate action plans, compare wards, estimate budgets, or draft communication for any issue.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
          40% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
