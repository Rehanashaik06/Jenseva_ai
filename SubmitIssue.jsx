import { useState } from 'react';
import { Upload, CheckCircle, ChevronDown, AlertCircle } from 'lucide-react';

const CATEGORIES = [
  { id:'Roads',       emoji:'🛣️' },{ id:'Drainage',    emoji:'🌊' },{ id:'Water',       emoji:'💧' },
  { id:'Streetlights',emoji:'💡' },{ id:'PHC',         emoji:'🏥' },{ id:'School',      emoji:'🏫' },
  { id:'Waste',       emoji:'🗑️' },
];
const WARDS = Array.from({length:10},(_,i)=>`Ward ${i+1}`);

const SEV = {
  Low:    { color:'#10b981', bg:'rgba(16,185,129,0.12)',  border:'rgba(16,185,129,0.35)',  emoji:'🟢' },
  Medium: { color:'#f59e0b', bg:'rgba(245,158,11,0.12)', border:'rgba(245,158,11,0.35)',  emoji:'🟡' },
  High:   { color:'#ef4444', bg:'rgba(239,68,68,0.12)',   border:'rgba(239,68,68,0.38)',   emoji:'🔴' },
};

export default function SubmitIssue() {
  const [form, setForm] = useState({ name:'', ward:'', category:'', complaint:'', severity:'' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [refId] = useState(() => `JS-${Math.floor(Math.random()*9000)+1000}`);

  const validate = () => {
    const e = {};
    if (!form.name.trim())                          e.name = 'Full name is required';
    if (!form.ward)                                 e.ward = 'Please select your ward';
    if (!form.category)                             e.category = 'Select a category';
    if (form.complaint.trim().length < 20)          e.complaint = 'Describe the issue (min 20 characters)';
    if (!form.severity)                             e.severity = 'Select a severity level';
    return e;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 7000);
    setForm({ name:'', ward:'', category:'', complaint:'', severity:'' });
  };

  return (
    <div className="fade-in">
      <div className="section-header">
        <div style={{ width:42,height:42,borderRadius:12,background:'rgba(16,185,129,0.13)',border:'1px solid rgba(16,185,129,0.28)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:20 }}>📝</div>
        <div>
          <h2 style={{ marginBottom:2 }}>Submit Citizen Issue</h2>
          <p style={{ fontSize:12,color:'var(--text-muted)',fontWeight:400 }}>
            AI will classify, score, and route your issue to the correct department — automatically.
          </p>
        </div>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'1fr 340px', gap:22, alignItems:'start' }}>
        {/* Form card */}
        <div className="card" style={{ padding:30 }}>
          <form onSubmit={handleSubmit} noValidate>

            {/* Name + Ward row */}
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:18, marginBottom:20 }}>
              <div>
                <label style={{ display:'block',fontSize:12,fontWeight:700,color:'#94a3b8',marginBottom:7,textTransform:'uppercase',letterSpacing:0.5 }}>Full Name *</label>
                <input className="form-input" placeholder="e.g. Ramesh Kumar" value={form.name}
                  onChange={e=>setForm({...form,name:e.target.value})}/>
                {errors.name && <p style={{ color:'#f87171',fontSize:11,marginTop:4,display:'flex',alignItems:'center',gap:4 }}><AlertCircle size={11}/>{errors.name}</p>}
              </div>
              <div>
                <label style={{ display:'block',fontSize:12,fontWeight:700,color:'#94a3b8',marginBottom:7,textTransform:'uppercase',letterSpacing:0.5 }}>Ward *</label>
                <div style={{ position:'relative' }}>
                  <select className="form-input" style={{ appearance:'none',paddingRight:36 }}
                    value={form.ward} onChange={e=>setForm({...form,ward:e.target.value})}>
                    <option value="">Select your ward</option>
                    {WARDS.map(w=><option key={w}>{w}</option>)}
                  </select>
                  <ChevronDown size={15} style={{ position:'absolute',right:12,top:'50%',transform:'translateY(-50%)',color:'#64748b',pointerEvents:'none' }}/>
                </div>
                {errors.ward && <p style={{ color:'#f87171',fontSize:11,marginTop:4,display:'flex',alignItems:'center',gap:4 }}><AlertCircle size={11}/>{errors.ward}</p>}
              </div>
            </div>

            {/* Category */}
            <div style={{ marginBottom:20 }}>
              <label style={{ display:'block',fontSize:12,fontWeight:700,color:'#94a3b8',marginBottom:9,textTransform:'uppercase',letterSpacing:0.5 }}>Category *</label>
              <div style={{ display:'flex',flexWrap:'wrap',gap:8 }}>
                {CATEGORIES.map(({id,emoji}) => (
                  <button key={id} type="button" onClick={() => setForm({...form,category:id})}
                    style={{
                      padding:'8px 15px', borderRadius:10, fontSize:13, fontWeight:600,
                      border:`1.5px solid ${form.category===id?'#3b82f6':'rgba(59,130,246,0.18)'}`,
                      background:form.category===id?'rgba(59,130,246,0.14)':'rgba(255,255,255,0.02)',
                      color:form.category===id?'#60a5fa':'#64748b', cursor:'pointer', transition:'all 0.18s',
                      display:'flex',alignItems:'center',gap:6
                    }}>
                    {emoji} {id}
                  </button>
                ))}
              </div>
              {errors.category && <p style={{ color:'#f87171',fontSize:11,marginTop:5,display:'flex',alignItems:'center',gap:4 }}><AlertCircle size={11}/>{errors.category}</p>}
            </div>

            {/* Complaint textarea */}
            <div style={{ marginBottom:20 }}>
              <label style={{ display:'block',fontSize:12,fontWeight:700,color:'#94a3b8',marginBottom:7,textTransform:'uppercase',letterSpacing:0.5 }}>Describe the Issue *</label>
              <textarea className="form-input" rows={5}
                placeholder="Describe the problem in detail — location, how long it's been happening, who is affected..."
                value={form.complaint} onChange={e=>setForm({...form,complaint:e.target.value})}
                style={{ resize:'vertical',minHeight:100 }}/>
              <div style={{ display:'flex',justifyContent:'space-between',marginTop:4 }}>
                {errors.complaint
                  ? <p style={{ color:'#f87171',fontSize:11,display:'flex',alignItems:'center',gap:4 }}><AlertCircle size={11}/>{errors.complaint}</p>
                  : <span/>}
                <span style={{ fontSize:11,color:form.complaint.length>=20?'#34d399':'#64748b' }}>{form.complaint.length} chars</span>
              </div>
            </div>

            {/* Severity */}
            <div style={{ marginBottom:26 }}>
              <label style={{ display:'block',fontSize:12,fontWeight:700,color:'#94a3b8',marginBottom:9,textTransform:'uppercase',letterSpacing:0.5 }}>Severity Level *</label>
              <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:10 }}>
                {Object.entries(SEV).map(([sev,s]) => (
                  <button key={sev} type="button" onClick={() => setForm({...form,severity:sev})}
                    style={{
                      padding:'12px 0', borderRadius:12, fontSize:14, fontWeight:700,
                      border:`2px solid ${form.severity===sev?s.color:'rgba(255,255,255,0.08)'}`,
                      background:form.severity===sev?s.bg:'rgba(255,255,255,0.02)',
                      color:form.severity===sev?s.color:'#64748b',
                      cursor:'pointer', transition:'all 0.2s', textAlign:'center'
                    }}>
                    {s.emoji} {sev}
                    {sev==='High' && <div style={{ fontSize:9,marginTop:3,opacity:0.7 }}>Immediate</div>}
                    {sev==='Medium' && <div style={{ fontSize:9,marginTop:3,opacity:0.7 }}>This week</div>}
                    {sev==='Low' && <div style={{ fontSize:9,marginTop:3,opacity:0.7 }}>Planned</div>}
                  </button>
                ))}
              </div>
              {errors.severity && <p style={{ color:'#f87171',fontSize:11,marginTop:5,display:'flex',alignItems:'center',gap:4 }}><AlertCircle size={11}/>{errors.severity}</p>}
            </div>

            {/* Photo upload */}
            <div style={{ marginBottom:26 }}>
              <label style={{ display:'block',fontSize:12,fontWeight:700,color:'#94a3b8',marginBottom:7,textTransform:'uppercase',letterSpacing:0.5 }}>
                Photo Evidence <span style={{ color:'#475569',fontWeight:500,textTransform:'none' }}>(optional)</span>
              </label>
              <div style={{
                border:'2px dashed rgba(59,130,246,0.22)', borderRadius:12, padding:'24px 16px',
                textAlign:'center', background:'rgba(59,130,246,0.02)', cursor:'pointer', transition:'all 0.2s'
              }}
                onDragOver={e=>e.preventDefault()}
                onMouseEnter={e=>e.currentTarget.style.borderColor='rgba(59,130,246,0.45)'}
                onMouseLeave={e=>e.currentTarget.style.borderColor='rgba(59,130,246,0.22)'}
              >
                <Upload size={26} color="#3b82f6" style={{ margin:'0 auto 8px' }}/>
                <p style={{ fontSize:13,color:'#94a3b8',marginBottom:3 }}>
                  Drag & drop or <span style={{ color:'#3b82f6',fontWeight:600 }}>browse file</span>
                </p>
                <p style={{ fontSize:11,color:'#64748b' }}>JPG, PNG, HEIC — max 10MB</p>
              </div>
            </div>

            <button type="submit" className="btn-primary" style={{ width:'100%',justifyContent:'center',fontSize:15,padding:'14px' }}>
              🚀 Submit Issue to Priority Engine
            </button>
          </form>
        </div>

        {/* Right panel */}
        <div style={{ display:'flex',flexDirection:'column',gap:14 }}>
          {/* Pipeline */}
          <div className="card">
            <h3 style={{ fontSize:14,fontWeight:800,marginBottom:14,color:'white' }}>⚙️ What Happens Next?</h3>
            {[
              { step:'1', text:'AI classifies by type & severity', color:'#3b82f6' },
              { step:'2', text:'Priority score calculated (0–100)', color:'#10b981' },
              { step:'3', text:'Added to MP Dashboard heatmap',   color:'#f59e0b' },
              { step:'4', text:'Action plan auto-generated',      color:'#8b5cf6' },
              { step:'5', text:'Resolution status tracked live',  color:'#0ea5e9' },
            ].map(item => (
              <div key={item.step} style={{ display:'flex',gap:10,marginBottom:11,alignItems:'flex-start' }}>
                <div style={{
                  width:22,height:22,borderRadius:'50%',flexShrink:0,
                  background:`${item.color}18`,border:`1.5px solid ${item.color}`,
                  display:'flex',alignItems:'center',justifyContent:'center',
                  fontSize:10,fontWeight:800,color:item.color
                }}>{item.step}</div>
                <p style={{ fontSize:12.5,color:'#94a3b8',lineHeight:1.55 }}>{item.text}</p>
              </div>
            ))}
          </div>

          {/* Live stats */}
          <div className="card" style={{ background:'rgba(59,130,246,0.05)' }}>
            <h3 style={{ fontSize:13,fontWeight:800,marginBottom:12,color:'white' }}>📊 Constituency Stats</h3>
            {[
              { label:'Total issues this month', value:'428', color:'#60a5fa' },
              { label:'Avg. resolution time',    value:'4.2 days', color:'#34d399' },
              { label:'Resolution rate',         value:'72%', color:'#fbbf24' },
              { label:'Wards covered',           value:'10/10', color:'#a78bfa' },
            ].map(s => (
              <div key={s.label} style={{ display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:10 }}>
                <span style={{ fontSize:12,color:'#64748b' }}>{s.label}</span>
                <span style={{ fontSize:13,fontWeight:800,color:s.color }}>{s.value}</span>
              </div>
            ))}
          </div>

          {/* Helpline */}
          <div className="card" style={{ background:'rgba(16,185,129,0.06)',borderColor:'rgba(16,185,129,0.2)' }}>
            <div style={{ fontSize:22,marginBottom:6 }}>📞</div>
            <p style={{ fontSize:13,fontWeight:700,color:'white',marginBottom:3 }}>Helpline: 1800-XXX-XXXX</p>
            <p style={{ fontSize:11,color:'#64748b' }}>Mon–Sat, 9 AM – 6 PM · Free call</p>
          </div>
        </div>
      </div>

      {/* Success toast */}
      {submitted && (
        <div className="toast">
          <div style={{ display:'flex',gap:12,alignItems:'flex-start' }}>
            <CheckCircle size={22} color="#10b981" style={{ flexShrink:0,marginTop:2 }}/>
            <div>
              <p style={{ fontWeight:800,fontSize:14,color:'white',marginBottom:4 }}>Issue Submitted! 🎉</p>
              <p style={{ fontSize:12.5,color:'#94a3b8',lineHeight:1.55 }}>
                Issue classified and added to constituency priority engine.<br/>
                <strong style={{ color:'#34d399' }}>Reference ID: {refId}</strong>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
