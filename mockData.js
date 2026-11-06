// Mock Data for JanSeva AI

export const mockIssues = [
  {
    id: 1, ward: 3, wardName: "Ward 3 – Rajendra Nagar",
    issue: "Drainage overflow near primary school",
    category: "Drainage", severity: "High", priorityScore: 94,
    reportedBy: "Ramesh Kumar", date: "2026-07-01",
    estimatedCost: "₹3.2L", affectedPopulation: 2800,
    recommendedAction: "Emergency drain repair + desilting within 48hrs",
    status: "Pending",
    aiReasoning: "High complaint volume (23 reports), school proximity raises safety risk, monsoon season amplifies urgency. Population density: 2800 residents directly affected."
  },
  {
    id: 2, ward: 7, wardName: "Ward 7 – Sadar Bazaar",
    issue: "PHC medicine stock shortage – critical drugs unavailable",
    category: "PHC", severity: "High", priorityScore: 91,
    reportedBy: "Dr. Sunita Sharma", date: "2026-07-02",
    estimatedCost: "₹1.8L", affectedPopulation: 5200,
    recommendedAction: "Emergency procurement + inter-district stock transfer",
    status: "Escalated",
    aiReasoning: "Healthcare infrastructure failure with 5200 patients served monthly. 3 essential drug categories out of stock. High severity health risk for vulnerable population."
  },
  {
    id: 3, ward: 5, wardName: "Ward 5 – Civil Lines",
    issue: "Road potholes near main bus stop causing accidents",
    category: "Roads", severity: "High", priorityScore: 86,
    reportedBy: "Priya Verma", date: "2026-07-01",
    estimatedCost: "₹5.6L", affectedPopulation: 4100,
    recommendedAction: "Bituminous patching + road marking restoration",
    status: "In Progress",
    aiReasoning: "17 accident reports in 30 days. High traffic zone near bus terminal. Infrastructure proximity to public transport makes delay cost higher."
  },
  {
    id: 4, ward: 2, wardName: "Ward 2 – Nehru Colony",
    issue: "Broken streetlights in residential area – 8 poles affected",
    category: "Streetlights", severity: "Medium", priorityScore: 78,
    reportedBy: "Mohan Lal", date: "2026-06-29",
    estimatedCost: "₹92K", affectedPopulation: 1600,
    recommendedAction: "Immediate bulb/ballast replacement + cable inspection",
    status: "Pending",
    aiReasoning: "Night safety concerns with 8 consecutive non-functional poles. Crime reporting increased 12% in this stretch. Relatively low cost, high impact fix."
  },
  {
    id: 5, ward: 9, wardName: "Ward 9 – Gandhi Nagar",
    issue: "Waste collection delay – 6 days without pickup",
    category: "Waste", severity: "Medium", priorityScore: 73,
    reportedBy: "Kavita Singh", date: "2026-06-28",
    estimatedCost: "₹45K", affectedPopulation: 3200,
    recommendedAction: "Urgent collection drive + alternate vehicle deployment",
    status: "Pending",
    aiReasoning: "6-day backlog creates sanitation hazard. 3200 residents affected. Dengue-prone zone adds public health multiplier to urgency score."
  },
  {
    id: 6, ward: 1, wardName: "Ward 1 – Anand Vihar",
    issue: "Water supply disrupted for 3 days in northern blocks",
    category: "Water", severity: "High", priorityScore: 89,
    reportedBy: "Anjali Gupta", date: "2026-07-03",
    estimatedCost: "₹2.1L", affectedPopulation: 3800,
    recommendedAction: "Pipeline inspection + tanker deployment within 12hrs",
    status: "Escalated",
    aiReasoning: "Water deprivation for 72+ hours. 3800 residents including elderly and children. Summer peak demand makes restoration time-critical."
  },
  {
    id: 7, ward: 4, wardName: "Ward 4 – Shastri Nagar",
    issue: "Government school roof leaking – classes suspended",
    category: "School", severity: "High", priorityScore: 83,
    reportedBy: "Headmaster D.K. Tiwari", date: "2026-07-02",
    estimatedCost: "₹8.4L", affectedPopulation: 420,
    recommendedAction: "Emergency roof repair + waterproofing before school reopens",
    status: "Pending",
    aiReasoning: "Educational disruption for 420 students. Monsoon damage escalating. State inspection due in 2 weeks adds regulatory urgency."
  },
  {
    id: 8, ward: 6, wardName: "Ward 6 – Laxmi Nagar",
    issue: "Drainage blockage flooding main market street",
    category: "Drainage", severity: "High", priorityScore: 88,
    reportedBy: "Trader Association", date: "2026-07-01",
    estimatedCost: "₹4.1L", affectedPopulation: 6100,
    recommendedAction: "Emergency desilting + storm drain upgrade",
    status: "In Progress",
    aiReasoning: "Commercial hub with 6100 daily footfall. Flooding causing economic losses. 14 businesses reported disruption. Health hazard from stagnant water."
  },
  {
    id: 9, ward: 8, wardName: "Ward 8 – Vidya Nagar",
    issue: "Defunct hand pumps in Dalit basti – 4 non-functional",
    category: "Water", severity: "High", priorityScore: 85,
    reportedBy: "Panchayat Member", date: "2026-06-30",
    estimatedCost: "₹1.2L", affectedPopulation: 890,
    recommendedAction: "Immediate pump repair + piped water connection proposal",
    status: "Pending",
    aiReasoning: "Marginalized community water access issue. 890 residents relying solely on hand pumps. Social equity factor adds weight to priority score."
  },
  {
    id: 10, ward: 10, wardName: "Ward 10 – Tagore Colony",
    issue: "No waste bins on main road – open dumping spreading",
    category: "Waste", severity: "Low", priorityScore: 58,
    reportedBy: "RWA Secretary", date: "2026-06-27",
    estimatedCost: "₹28K", affectedPopulation: 1400,
    recommendedAction: "Install 8 public bins + awareness campaign",
    status: "Pending",
    aiReasoning: "Low severity but preventable spread. Quick win for visible improvement. Low cost, high community satisfaction potential."
  },
  {
    id: 11, ward: 3, wardName: "Ward 3 – Rajendra Nagar",
    issue: "Stray dog menace near school – 2 bite incidents",
    category: "Waste", severity: "High", priorityScore: 80,
    reportedBy: "Parent Committee", date: "2026-07-03",
    estimatedCost: "₹55K", affectedPopulation: 1200,
    recommendedAction: "Coordinate with Animal Husbandry for ABC program",
    status: "Pending",
    aiReasoning: "Two reported bite incidents, school premises at risk. Rabies vaccination drive needed. High visibility issue with media attention risk."
  },
  {
    id: 12, ward: 5, wardName: "Ward 5 – Civil Lines",
    issue: "Non-functional traffic signals near hospital",
    category: "Roads", severity: "Medium", priorityScore: 71,
    reportedBy: "Hospital Administration", date: "2026-06-30",
    estimatedCost: "₹1.1L", affectedPopulation: 2500,
    recommendedAction: "Urgent signal repair + traffic police deployment",
    status: "In Progress",
    aiReasoning: "Hospital proximity increases accident risk. 2500 daily commuters affected. Emergency vehicle access being hampered."
  },
  {
    id: 13, ward: 7, wardName: "Ward 7 – Sadar Bazaar",
    issue: "Transformer failure – power outage in 3 blocks",
    category: "Streetlights", severity: "High", priorityScore: 87,
    reportedBy: "Electricity Consumer Forum", date: "2026-07-03",
    estimatedCost: "₹6.8L", affectedPopulation: 3600,
    recommendedAction: "Emergency transformer replacement + load balancing",
    status: "Escalated",
    aiReasoning: "Complete power outage affecting 3600 residents. Businesses closed, perishables lost. 48hr estimate for repair is unacceptable for summer."
  },
  {
    id: 14, ward: 2, wardName: "Ward 2 – Nehru Colony",
    issue: "Anganwadi center has no drinking water connection",
    category: "Water", severity: "Medium", priorityScore: 76,
    reportedBy: "Anganwadi Supervisor", date: "2026-06-28",
    estimatedCost: "₹85K", affectedPopulation: 180,
    recommendedAction: "Pipeline extension + water purifier installation",
    status: "Pending",
    aiReasoning: "Child nutrition center without clean water. 180 children under 6 at risk. Nutritional outcomes directly affected. State monitoring report due."
  },
  {
    id: 15, ward: 6, wardName: "Ward 6 – Laxmi Nagar",
    issue: "Missing footpath tiles causing injury risk",
    category: "Roads", severity: "Low", priorityScore: 52,
    reportedBy: "Senior Citizens Forum", date: "2026-06-25",
    estimatedCost: "₹38K", affectedPopulation: 900,
    recommendedAction: "Tile replacement + barrier-free pathway compliance",
    status: "Pending",
    aiReasoning: "Elderly accessibility issue. Low severity but 3 fall incidents reported. Quick, low-cost fix with high public goodwill return."
  }
];

export const wardData = [
  { id: 1, name: "Ward 1 – Anand Vihar", issues: 32, urgent: 8, solved: 14, population: 5200, heatLevel: "high" },
  { id: 2, name: "Ward 2 – Nehru Colony", issues: 28, urgent: 5, solved: 19, population: 4100, heatLevel: "medium" },
  { id: 3, name: "Ward 3 – Rajendra Nagar", issues: 51, urgent: 12, solved: 9, population: 6800, heatLevel: "critical" },
  { id: 4, name: "Ward 4 – Shastri Nagar", issues: 22, urgent: 4, solved: 17, population: 3200, heatLevel: "medium" },
  { id: 5, name: "Ward 5 – Civil Lines", issues: 45, urgent: 9, solved: 22, population: 7100, heatLevel: "high" },
  { id: 6, name: "Ward 6 – Laxmi Nagar", issues: 38, urgent: 7, solved: 18, population: 5900, heatLevel: "high" },
  { id: 7, name: "Ward 7 – Sadar Bazaar", issues: 44, urgent: 11, solved: 8, population: 8200, heatLevel: "critical" },
  { id: 8, name: "Ward 8 – Vidya Nagar", issues: 29, urgent: 6, solved: 16, population: 4400, heatLevel: "medium" },
  { id: 9, name: "Ward 9 – Gandhi Nagar", issues: 41, urgent: 9, solved: 12, population: 6100, heatLevel: "high" },
  { id: 10, name: "Ward 10 – Tagore Colony", issues: 18, urgent: 5, solved: 14, population: 3800, heatLevel: "low" },
];

export const aiPromptResponses = {
  "top5": {
    prompt: "What are the top 5 problems this month?",
    response: `📊 **Top 5 Priority Issues — July 2026**

Based on complaint volume, severity, and population impact:

1. **Ward 3 – Drainage overflow near school** (Score: 94)
   → 23 complaints, 2,800 residents affected, school safety risk

2. **Ward 7 – PHC medicine stock shortage** (Score: 91)
   → Critical healthcare failure, 5,200 patients, 3 essential drugs OOS

3. **Ward 1 – Water supply disruption** (Score: 89)
   → 72hrs without water, 3,800 residents, summer peak

4. **Ward 6 – Drainage flooding at market** (Score: 88)
   → 6,100 daily footfall, economic losses, stagnant water hazard

5. **Ward 7 – Transformer failure** (Score: 87)
   → Complete power outage, 3,600 residents, summer emergency

💡 *Recommendation: Prioritize Wards 3 and 7 for emergency funds this week.*`
  },
  "sanitation": {
    prompt: "Generate sanitation action plan.",
    response: `🗑️ **Ward-wise Sanitation Action Plan — July 2026**

**Immediate (0–48 hrs):**
• Ward 9: Deploy alternate vehicle for 6-day backlog pickup
• Ward 6: Emergency drain desilting to clear flooding
• Ward 3: Coordinate stray dog ABC program with Animal Husbandry

**Short-term (Week 1–2):**
• Ward 10: Install 8 public bins + launch "Clean Ward" awareness campaign
• Ward 9: Re-route collection schedule; assign dedicated vehicle
• All Wards: Update digital complaint tracker for waste category

**Budget Estimate:**
| Action | Cost |
|--------|------|
| Emergency collection | ₹45K |
| Bin installation | ₹28K |
| Drain desilting | ₹4.1L |
| **Total** | **₹4.8L** |

**KPI Target:** Reduce sanitation complaints by 60% in 30 days.`
  },
  "urgent": {
    prompt: "Which ward needs urgent attention?",
    response: `🚨 **Ward 3 – Rajendra Nagar** requires IMMEDIATE intervention.

**Why Ward 3 is most critical:**
- Highest issue count: **51 active complaints** (26% above average)
- Drainage overflow affecting school — **child safety emergency**
- Stray dog menace — **2 confirmed bite incidents**
- Only 9 issues resolved this month vs. 51 open (18% resolution rate)
- Population density: 6,800 residents in compact area

**Recommended MP Actions:**
1. ✅ Emergency site visit within 24 hours
2. ✅ Rs. 4-5L emergency fund release
3. ✅ Coordinate with PWD, Municipal & Education dept
4. ✅ Set up Ward 3 grievance camp this weekend
5. ✅ Schedule press briefing on actions taken

**Ward 7** is the second most urgent — healthcare and power issues cannot wait beyond 48hrs.`
  },
  "meeting": {
    prompt: "Prepare public meeting summary.",
    response: `📋 **Public Meeting Summary — Constituency Update**
*Date: July 2026 | Prepared by: JanSeva AI Copilot*

**Agenda Points for Meeting:**

1. **Infrastructure Update** — 119 issues resolved this month
   - Roads: 34 potholes patched, 2 signal repairs underway
   - Drainage: 8 drains desilted across 5 wards

2. **Health & Welfare** — PHC medicine shortage in Ward 7 escalated to District CMO. Resolution expected within 72 hours.

3. **Water Supply** — Emergency tankers deployed in Ward 1 & 8. Pipeline upgrade proposal submitted for ₹22L state grant.

4. **Key Commitments This Month:**
   - School roof repair (Ward 4): Work order issued ₹8.4L
   - Streetlight restoration (Ward 2): 8 poles restored
   - Ward 9 waste collection: Back on schedule

5. **Citizen Feedback:** 38,420 citizens impacted positively by resolved issues.

6. **Next Steps:** Focus on drainage master plan + PHC infrastructure audit.

*"Your voice drives our action."* — JanSeva AI`
  }
};

export const reportData = {
  month: "July 2026",
  constituency: "Rajnagar Constituency",
  mp: "Hon. Shri Arvind Kumar Singh, MP",
  totalIssues: 428,
  resolved: 119,
  urgent: 76,
  citizensImpacted: 38420,
  topCategories: [
    { name: "Drainage", count: 89, percentage: 21 },
    { name: "Roads", count: 82, percentage: 19 },
    { name: "Water", count: 74, percentage: 17 },
    { name: "Waste", count: 68, percentage: 16 },
    { name: "Streetlights", count: 61, percentage: 14 },
    { name: "PHC", count: 33, percentage: 8 },
    { name: "School", count: 21, percentage: 5 },
  ],
  budgetRecommendation: [
    { category: "Emergency Drainage Repairs", amount: "₹18.5L", priority: "Immediate" },
    { category: "Road & Pothole Rectification", amount: "₹24.2L", priority: "High" },
    { category: "Water Supply Restoration", amount: "₹12.8L", priority: "High" },
    { category: "PHC Drug Procurement", amount: "₹6.4L", priority: "Immediate" },
    { category: "School Infrastructure", amount: "₹15.1L", priority: "Medium" },
    { category: "Streetlight Upgrades", amount: "₹8.9L", priority: "Medium" },
    { category: "Waste Management", amount: "₹4.2L", priority: "Routine" },
  ],
  wardPriority: [
    { ward: "Ward 3", score: 94, status: "Critical" },
    { ward: "Ward 7", score: 91, status: "Critical" },
    { ward: "Ward 1", score: 89, status: "High" },
    { ward: "Ward 6", score: 88, status: "High" },
    { ward: "Ward 5", score: 86, status: "High" },
    { ward: "Ward 9", score: 73, status: "Medium" },
    { ward: "Ward 2", score: 68, status: "Medium" },
  ],
  mpActionPlan: [
    "Convene emergency meeting with PWD and Municipal Corporation heads",
    "Release ₹18.5L emergency fund for drainage repairs in Wards 3, 6",
    "Write to District CMO for PHC drug procurement in Ward 7",
    "Approve school roof repair work order – Ward 4 (₹8.4L)",
    "Launch 'JanSeva Mela' – public grievance camps in top 3 critical wards",
    "Submit constituency water infrastructure upgrade proposal to Ministry",
    "Monthly review with ward panches/sachivs for accountability"
  ]
};
