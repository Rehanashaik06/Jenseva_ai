# SUBMISSION.md — JanSeva AI

## Hackathon: Code for Communities / Hack2Skill 2026

---

## Solution Explanation (1000 chars)

JanSeva AI is a constituency development intelligence platform that converts unstructured citizen complaints into AI-scored priorities, ward heatmaps, and MP-ready action plans. Citizens submit issues (category, severity, ward) via a clean web form. An AI priority engine scores each complaint 0-100 using five weighted dimensions: complaint volume (30%), severity (25%), affected population (20%), infrastructure proximity (15%), and urgency/time factor (10%). MPs see a real-time dashboard with ward-wise heatmaps, filterable issue tables, and recommended actions with cost estimates. The MP Copilot chat assistant answers constituency questions and generates action plans on demand. A one-click report generator produces ministry-ready monthly reports with budget breakdowns, ward priority summaries, and MP action checklists. Built on React + Vite + Tailwind, deployable in minutes.

---

## Technologies Used

- React 19, Vite 6, Tailwind CSS v4
- Lucide React (icons)
- Vanilla CSS (glassmorphism, animations)
- Mock-first architecture (no backend required)
- Vercel deployment

---

## Demo Instructions

1. `git clone https://github.com/shahid-afrid/janseva-ai.git`
2. `npm install`
3. `npm run dev`
4. Open http://localhost:5173
5. Navigate: Overview → Submit Issue → MP Dashboard → AI Engine → Copilot → Report
