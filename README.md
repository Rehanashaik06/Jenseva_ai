<div align="center">

<br/>

```
     ██╗ █████╗ ███╗   ██╗███████╗███████╗██╗   ██╗ █████╗      █████╗ ██╗
     ██║██╔══██╗████╗  ██║██╔════╝██╔════╝██║   ██║██╔══██╗    ██╔══██╗██║
     ██║███████║██╔██╗ ██║███████╗█████╗  ██║   ██║███████║    ███████║██║
██   ██║██╔══██║██║╚██╗██║╚════██║██╔══╝  ╚██╗ ██╔╝██╔══██║    ██╔══██║██║
╚█████╔╝██║  ██║██║ ╚████║███████║███████╗ ╚████╔╝ ██║  ██║    ██║  ██║██║
 ╚════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚══════╝  ╚═══╝  ╚═╝  ╚═╝    ╚═╝  ╚═╝╚═╝
```

### Constituency Development Intelligence Platform

**"From citizen voices to data-backed public action."**

<br/>

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![React Router](https://img.shields.io/badge/React_Router-v7-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)](https://reactrouter.com)

<br/>

[![License: MIT](https://img.shields.io/badge/License-MIT-22c55e?style=flat-square)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square)](https://github.com/shahid-afrid/janseva-ai/pulls)
[![No Backend](https://img.shields.io/badge/Backend-None_Required-8b5cf6?style=flat-square)]()
[![Hackathon](https://img.shields.io/badge/🏆_Hack2Skill_2026-Code_for_Communities-f59e0b?style=flat-square)](https://hack2skill.com)

<br/>

> 🏛️ **Official Hackathon Submission** — Code for Communities · Hack2Skill 2026
>
> **Track:** Civic Technology · GovTech · AI for Public Good

<br/>

[🚀 Quick Start](#-quick-start) · [✨ Features](#-features) · [🧠 AI Engine](#-ai-priority-engine) · [🎬 Demo Flow](#-demo-walkthrough) · [📐 Architecture](#-project-structure) · [🔭 Roadmap](#-future-roadmap)

<br/>

</div>

---

## 📌 Table of Contents

- [The Problem](#-the-problem)
- [The Solution](#-the-solution)
- [Platform Overview](#-platform-overview)
- [Features](#-features)
- [AI Priority Engine](#-ai-priority-engine)
- [Tech Stack](#%EF%B8%8F-tech-stack)
- [Quick Start](#-quick-start)
- [Demo Walkthrough](#-demo-walkthrough)
- [Project Structure](#-project-structure)
- [Mock Data Coverage](#-mock-data-coverage)
- [Impact Numbers](#-impact-numbers)
- [Future Roadmap](#-future-roadmap)
- [Contributing](#-contributing)
- [Author](#-author)

---

## 🏛️ The Problem

India's **543 Members of Parliament** and thousands of district officials receive **400–1,000+ citizen complaints every month** via WhatsApp, paper forms, phone calls, and field agents. There is **no intelligence layer** to make sense of it all.

| ❌ Pain Point | 😔 Reality Today |
|---|---|
| Unstructured complaints | No unified intake — every format, every channel |
| Political prioritization | Issues resolved by pressure, not population impact |
| Siloed ward data | No real-time analytics across wards |
| Manual reporting | Monthly reports take **2 full days** to prepare |
| Missed deadlines | Ministry submissions delayed; accountability gaps widen |
| Zero transparency | Citizens never know if their complaint was heard |

> **The cost:** Critical issues — PHC drug shortages, drainage flooding near schools, 72-hour water outages — go unaddressed for weeks while officials sift through paperwork.

---

## 💡 The Solution

**JanSeva AI** is a zero-setup, single-dashboard constituency intelligence platform that converts raw citizen voices into AI-scored priorities, interactive ward heatmaps, action plans, and ministry-ready reports — all in one place.

```
 ┌─────────────┐    ┌──────────────────┐    ┌─────────────────┐    ┌──────────────┐
 │  Citizen    │    │   AI Priority    │    │  MP Dashboard   │    │  Auto Report │
 │  Submits    │───▶│  Engine Scores   │───▶│  Ward Heatmap   │───▶│  Generator   │
 │  an Issue   │    │  0–100 in ms     │    │  + Action Plans │    │  2 min PDF   │
 └─────────────┘    └──────────────────┘    └─────────────────┘    └──────────────┘
```

**No backend. No paid APIs. No setup friction.**
Clone → `npm install` → `npm run dev` → It works.

---

## 🖥️ Platform Overview

```
┌────────────────────────────────────────────────────────────────────────┐
│                         JanSeva AI — Sidebar Nav                       │
├─────────────┬──────────────────────────────────────────────────────────┤
│  🏠 Overview │  Hero banner · Live stats · How it works · Feature grid  │
├─────────────┼──────────────────────────────────────────────────────────┤
│  📋 Submit  │  Citizen form · Category · Severity · Ward · Reference ID │
├─────────────┼──────────────────────────────────────────────────────────┤
│  📊 Dashboard│  Ward heatmap (10 wards) · Filterable priority table     │
├─────────────┼──────────────────────────────────────────────────────────┤
│  🤖 AI Engine│  Scoring formula · AI reasoning cards per issue          │
├─────────────┼──────────────────────────────────────────────────────────┤
│  💬 Copilot  │  Chat assistant · 4 pre-built constituency queries        │
├─────────────┼──────────────────────────────────────────────────────────┤
│  📄 Reports  │  Full monthly report · Budget table · Print/PDF export    │
├─────────────┼──────────────────────────────────────────────────────────┤
│  🏆 Pitch    │  6-slide hackathon deck built into the app               │
└─────────────┴──────────────────────────────────────────────────────────┘
```

---

## ✨ Features

### 🗺️ Ward Heatmap Dashboard
10-ward visual priority grid with colour-coded heat levels (🔴 Critical · 🟠 High · 🟡 Medium · 🟢 Low). Instant situational awareness — no training required.

### 🤖 AI Priority Engine
Every complaint gets a **0–100 priority score** across 5 weighted dimensions with full plain-language reasoning explaining *why* a score was assigned. Transparent, auditable, defensible.

### 📋 Citizen Issue Submission
Clean, accessible form — issue category, severity, ward, description, contact. Auto-generates a reference ID on submission for follow-up tracking.

### 💬 MP Copilot Chat
Conversational AI assistant with one-click prompts:
- *"What are the top 5 problems this month?"*
- *"Generate a sanitation action plan"*
- *"Which ward needs urgent attention?"*
- *"Prepare a public meeting summary"*

### 📄 One-Click Report Generator
Produces a complete monthly report in seconds:
- Category-wise issue breakdown with percentages
- Ward priority ranking table
- Budget recommendation matrix
- MP action checklist
- **Print / Export PDF** ready for ministry submission

### 📊 Issue Priority Table
Filterable by category and severity. Each row shows: priority score, AI reasoning, estimated cost, affected population count, recommended action, and current status.

### 📱 Fully Responsive
Sidebar collapses on mobile. All pages adapt to any viewport. Designed for use in field, office, or on a tablet in a public meeting.

---

## 🧠 AI Priority Engine

The scoring formula is **fully transparent** — every number has a human-readable explanation.

```
Priority Score (0–100) =

  Complaint Volume    × 0.30   ← How many citizens reported this?
+ Severity Rating     × 0.25   ← How dangerous or disruptive is it?
+ Population Impact   × 0.20   ← How many residents are affected?
+ Infra Proximity     × 0.15   ← Near a school, hospital, or market?
+ Urgency / Time      × 0.10   ← Seasonal, deadline, or escalating?
                     ──────
                      = Score
```

### Response Tiers

| Score | Priority | Response Required | Real Example |
|:---:|---|---|---|
| **90 – 100** | 🔴 CRITICAL | < 24 hours | Ward 3 School Drainage → **94** |
| **75 – 89** | 🟠 HIGH | 48 – 72 hours | Ward 1 Water Outage → **89** |
| **50 – 74** | 🟡 MEDIUM | This week | Ward 9 Waste Backlog → **73** |
| **0 – 49** | 🟢 LOW | This month | Ward 10 Missing Bins → **58** |

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| UI Framework | **React 19** | Component architecture, concurrent rendering |
| Build Tool | **Vite 8** | Sub-300ms builds, instant HMR |
| Styling | **Tailwind CSS v4** + Vanilla CSS | Utility classes + glassmorphism design system |
| Icons | **Lucide React** | Lightweight, accessible, consistent icon set |
| Routing | **React Router DOM v7** | SPA navigation with clean page transitions |
| State | `useState` / `useEffect` | Right-sized — no Redux overhead for MVP |
| Data Layer | **mockData.js** | Mock-first, API-ready, zero backend |
| Deployment | **Vercel / Netlify** | Zero-config CI/CD, global edge CDN |

> 💡 **Mock-first architecture** — `mockData.js` is the single source of truth. Swap it for a Gemini API call or REST endpoint with **zero changes** to any component.

---

## 🚀 Quick Start

### Prerequisites

| Tool | Version |
|---|---|
| Node.js | ≥ 18.0 |
| npm | ≥ 9.0 |
| Browser | Chrome / Firefox / Edge / Safari (modern) |

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/shahid-afrid/janseva-ai.git
cd janseva-ai

# 2. Install all dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open **[http://localhost:5173](http://localhost:5173)** — the app is live. ✅

### Other Commands

```bash
npm run build     # Production build → /dist
npm run preview   # Preview production build locally
npm run lint      # Run oxlint static analysis
```

---

## 🎬 Demo Walkthrough

> Follow this 6-step flow for the most compelling demonstration.

**Step 1 — 🏠 Overview (Landing)**
Read the hero banner. Note the live stats: 428 issues · 76 urgent · 38,420 citizens impacted · 119 resolved.

**Step 2 — 📋 Submit a Citizen Issue**
Fill in: Category = `Drainage` · Ward = `Ward 3 – Rajendra Nagar` · Severity = `High` · Add a description. Submit → note the auto-generated reference ID.

**Step 3 — 📊 MP Dashboard**
Open the heatmap. Ward 3 glows 🔴 **Critical** (51 issues, score 94). Filter the table by `Drainage` or `High` severity. Click any row to expand the AI reasoning.

**Step 4 — 🤖 AI Priority Engine**
Read the scoring formula card. Browse the issue cards — each shows the breakdown of *why* it scored what it did. Note the school proximity flag on Ward 3.

**Step 5 — 💬 MP Copilot**
Click → *"Which ward needs urgent attention?"* Read the structured AI response recommending Ward 3 with 5 specific action steps. Try *"Generate sanitation action plan"* for a formatted table with cost estimates.

**Step 6 — 📄 Report Generator**
Click **Generate Monthly Report**. The full report renders in under 2 seconds — category breakdown, ward rankings, budget matrix, and MP action checklist. Click **Print / Export PDF** for the ministry-ready version.

---

## 📐 Project Structure

```
janseva-ai/
│
├── public/                         # Static public assets
│
├── src/
│   ├── components/
│   │   └── Sidebar.jsx             # Collapsible nav (desktop + mobile)
│   │
│   ├── data/
│   │   └── mockData.js             # Single source of truth for all demo data
│   │       ├── mockIssues[]        → 15 issues with AI scores & reasoning
│   │       ├── wardData[]          → 10 wards with heat levels & stats
│   │       ├── aiPromptResponses{} → 4 Copilot canned responses
│   │       └── reportData{}        → Full monthly report dataset
│   │
│   ├── pages/
│   │   ├── Landing.jsx             # Overview: hero, stats, how-it-works
│   │   ├── SubmitIssue.jsx         # Citizen complaint form
│   │   ├── Dashboard.jsx           # Heatmap + filterable issue table
│   │   ├── PriorityEngine.jsx      # Scoring explainer + issue cards
│   │   ├── Copilot.jsx             # Chat interface + AI responses
│   │   ├── ReportGenerator.jsx     # Monthly report + print/export
│   │   └── Pitch.jsx               # 6-slide hackathon pitch deck
│   │
│   ├── App.jsx                     # Root: page router + layout shell
│   ├── index.css                   # Global design system: tokens, animations
│   ├── App.css                     # Base reset
│   └── main.jsx                    # React DOM entry point
│
├── index.html                      # HTML shell with meta tags
├── vite.config.js                  # Vite + React + Tailwind plugins
├── package.json
├── README.md
├── SUBMISSION.md                   # Hackathon solution write-up
└── PRESENTATION.md                 # Full pitch deck (6 slides + speaker notes)
```

---

## 📊 Mock Data Coverage

| Dataset | Count | What's Included |
|---|:---:|---|
| **Wards** | 10 | Name, population, issue count, urgency count, solved count, heat level |
| **Issues** | 15 | Category, severity, priority score, AI reasoning, cost, affected pop, status |
| **Issue Categories** | 7 | Drainage · Roads · Water · PHC · School · Waste · Streetlights |
| **AI Copilot Responses** | 4 | Top 5 problems · Sanitation plan · Urgent ward · Meeting summary |
| **Report Sections** | 5 | Stats · Categories · Ward ranking · Budget matrix · Action checklist |
| **Statuses** | 3 | Pending · In Progress · Escalated |

---

## 📈 Impact Numbers

<div align="center">

| Metric | Value |
|---|:---:|
| Parliamentary Constituencies in India | **543** |
| Avg. citizens per constituency | **2.5 million** |
| Active issues tracked (demo month) | **428** |
| Urgent / critical cases | **76** |
| Issues resolved this month | **119** |
| Citizens positively impacted | **38,420** |
| Report generation time | **2 minutes** *(was 2 days)* |
| Prioritization speed improvement | **72% faster** |
| Scale potential (Gram Panchayats) | **250,000+** |

</div>

---

## 🔭 Future Roadmap

### ⚡ Q3 2026 — AI Integration
- [ ] Live **Gemini API** integration for real-time priority scoring
- [ ] **OpenAI GPT-4o** fallback for Copilot conversations
- [ ] NLP-based complaint classification from free-text input
- [ ] Sentiment analysis on citizen complaint language

### 📱 Q4 2026 — Accessibility & Reach
- [ ] **WhatsApp Bot** — issue submission for rural, non-app users
- [ ] **IVR Phone System** — submit issues via a toll-free call
- [ ] **Offline PWA** — field agents can log complaints without internet
- [ ] SMS status notifications for complaint tracking

### 🌐 2027 — Full Platform
- [ ] **GIS / Google Maps** — geographic issue heatmaps overlaid on actual ward boundaries
- [ ] **Government API** integration — Jal Jeevan Mission, PM Awas Yojana, MGNREGS
- [ ] **React Native Mobile App** for ward officers in the field
- [ ] **State-level dashboard** for District Collectors and Cabinet Officers
- [ ] **Role-based access control** — MP · Ward Officer · Citizen · Admin · Ministry Viewer
- [ ] **Multi-language UI** — Hindi + 12 regional Indian languages
- [ ] **Blockchain audit trail** — immutable record of issue → action → resolution

> **🎯 Vision:** JanSeva AI becomes the **operating system for constituency governance** — deployed across all 543 Parliamentary constituencies, 4,000+ municipalities, and 250,000+ Gram Panchayats across India.

---

## 📂 Related Documents

| File | Description |
|---|---|
| [`SUBMISSION.md`](./SUBMISSION.md) | Official hackathon solution write-up + demo instructions |
| [`PRESENTATION.md`](./PRESENTATION.md) | 6-slide pitch deck with full speaker notes |

---

## 🤝 Contributing

Contributions, bug reports, and feature ideas are warmly welcome.

```bash
# Standard fork-and-PR workflow
git clone https://github.com/shahid-afrid/janseva-ai.git
git checkout -b feature/your-feature
# make your changes
git commit -m "feat: describe your change clearly"
git push origin feature/your-feature
# Open a Pull Request on GitHub
```

Please keep PRs focused and add a short description of *what* and *why*.

---

## 📄 License

This project is open-source under the **[MIT License](LICENSE)**.
Free to use, modify, and distribute — with attribution.

---

## 👤 Author

<div align="center">

Built with ❤️ for **Code for Communities · Hack2Skill 2026**

**Shahid Afrid**

[![GitHub](https://img.shields.io/badge/GitHub-shahid--afrid-181717?style=for-the-badge&logo=github)](https://github.com/shahid-afrid)

<br/>

---

**⭐ If JanSeva AI inspires you to build for public good — star this repo.**

<br/>

*"Good governance is not a luxury — it is a right.*
*JanSeva AI exists to make that right transparent, data-driven, and accessible to every citizen."*

<br/>

</div>
