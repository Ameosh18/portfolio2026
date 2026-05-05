---
title: "NETSCOUT PFS ONE"
subtitle: "Network administrators don't get second chances. One misconfigured topology. One unpublished change. One blind spot in the visibility fabric — and an entire security stack stops seeing the network it's supposed to protect."
tagline: "We had one year to redesign the system they trusted not to fail them."
case_study_number: "02"
role: "UX Designer"
platform: "Web"
timeline: "2016"
studio: "Ogee Studio"
hero_image: "pfsone_hero_image.png"
---

# NETSCOUT PFS ONE

**Case Study 02** · Work / PFS ONE

---

## Hero

Network administrators don't get second chances.

*One misconfigured topology. One unpublished change. One blind spot in the visibility fabric — and an entire security stack stops seeing the network it's supposed to protect.*

*We had one year to redesign the system they trusted not to fail them.*

| Role | Platform | Timeline | Studio |
|---|---|---|---|
| UX Designer | Web | 2016 | Ogee Studio |

---

## Business Context

### The infrastructure existed. The clarity didn't.

**4** — Lifecycle stages to navigate
**3** — Distinct user roles with different access
**1** — Year to replace a decade-old interface

NETSCOUT's nGenius Packet Flow Switch system was already deployed across enterprise data centres and central offices worldwide. Network administrators used it to manage visibility fabric — the infrastructure that routes traffic to monitoring and security tools. If the visibility fabric was misconfigured, security tools went blind. If security tools went blind, threats went undetected.

**The stakes were not abstract.** They were operational.

The existing interface was legacy — built for a different era of networking, a different scale of complexity, and a different expectation of what software should feel like. NETSCOUT needed a complete redesign. Not a reskin. A rethinking.

> **The Stakes**
>
> "This isn't a consumer app where a confused user abandons their cart. This is enterprise infrastructure where a confused administrator makes a change that takes down visibility across an entire data centre."
>
> — *The framing that shaped every design decision*

### My Mandate

UX Designer · Ogee Studio · NETSCOUT's design partner

Navigation Architecture · Topology Flow Design · Interaction Design for the Deploy Lifecycle.

*How do you design a system complex enough for expert users — without making complexity the experience?*

---

## The Ecosystem

### One product. Three roles. Zero margin for error.

PFS ONE wasn't a single-user tool. It was a role-based system where different users had different access, different responsibilities, and fundamentally different mental models of what the product was for.

---

### Network Operators · Monitoring Users

**Want**
- Live status visibility instantly
- Port health at a glance
- Minimal configuration access

**Pain**
- Buried inside a system designed for admins
- Monitoring mixed with configuration — dangerous proximity

---

### Switch Configuration Managers · Power Users

**Want**
- Full configuration control
- Topology versioning and rollback
- Precise publish/unpublish control

**Pain**
- Legacy UI forced hop-by-hop configuration
- No visual representation of traffic flows
- Changes had to be made live — no staging

---

### Service Administrators · System Owners

**Want**
- Full lifecycle access
- User and role management
- System health at scale

**Pain**
- No centralised view across switches
- Software management scattered across interfaces

---

### The Central Tension

Expert users don't need hand-holding. But even experts make mistakes when interfaces obscure system state. *The question wasn't how to simplify — it was how to make complexity navigable without making it invisible.*

Every navigation decision had to serve a user who knew exactly what they were doing — and had no tolerance for a system that got in their way.

---

## Research Approach

### One stakeholder. One year. A domain we had to learn fast.

This project had no traditional user research phase. What it had instead was something equally demanding — **deep domain immersion through a single, highly informed stakeholder channel.**

Our primary — and most critical — research input came through Ogee Studio's CEO, who held direct working sessions with NETSCOUT's product team. Every requirement, every domain insight, every constraint came through that channel. As designers on the team, our job was to translate those inputs into an interaction architecture that served users we never directly met.

That constraint shaped how we worked. We couldn't validate assumptions with users in the field. We had to build the strongest possible mental model of expert behaviour from second-hand domain knowledge — and pressure-test it through the work itself.

**01** — Primary stakeholder channel
**04** — Designers on the team
**03** — User roles designed for simultaneously
**01** — Year engagement

---

### How We Learned the Domain

**Stakeholder Translation**
Requirements and domain knowledge flowed from NETSCOUT through our CEO. Our design process began with making that knowledge structural — turning domain expertise into interaction models, not just feature lists.

**Legacy UI Audit**
The existing interface was our most honest artefact. We had no documented flows — so we reverse-engineered the mental models baked into the old system, then challenged every assumption we found there.

**Cognitive Walkthrough**
We stress-tested critical flows against real administrative tasks — configuring a topology, publishing changes, rolling back to a previous version — asking at every step: where could an expert make a mistake they wouldn't immediately notice?

---

### The Insight That Shaped Everything

> "The existing system treated configuration and deployment as one action. Administrators had to make changes live — there was no staging, no versioning, no safety net."

This wasn't a UI problem. It was a workflow problem baked into the architecture of the old interface. Fixing the navigation meant first understanding why the old navigation had failed — and that answer lived in the gap between how administrators *wanted* to work and how the system *forced* them to work.

---

## Key Insights

### Four insights that defined the design problem.

---

### Insight 01 — "Experts aren't confused by complexity. They're frustrated by obscured state."

Network administrators understood packet flows, port types, topology routing — deeply. What the legacy interface failed them on wasn't the complexity of the domain. It was the inability to see *what state the system was in* at any given moment. Was this topology published or not? Was this port configured or just staged? The system didn't make state visible — and invisible state, for an expert user, is dangerous.

**Strategic Implication**

*The design problem wasn't simplification. It was state visibility. Every navigation and topology decision had to make system state legible at a glance — without requiring the administrator to go looking for it.*

---

### Insight 02 — "The left navigation tree was the entire mental model."

In a lifecycle-based system managing hundreds of ports across multiple switches and geographic locations, the left panel wasn't just navigation — it was the administrator's cognitive map of the entire network. How resources were organised, grouped, and labelled in that panel directly shaped how administrators thought about and managed their infrastructure.

**Strategic Implication**

*Getting the navigation tree wrong didn't just create a usability problem. It created a mental model problem — one that would propagate through every interaction in the system.*

---

### Insight 03 — "Live changes and staged changes needed to be fundamentally separated."

The legacy system conflated two things that expert users needed to keep distinct: what was *configured* and what was *deployed*. Administrators needed the ability to stage changes, validate them, and push them to infrastructure on their own schedule — especially ahead of maintenance windows. Collapsing this distinction into a single action was the root cause of the most critical usability failures in the old interface.

**Strategic Implication**

*The publish/unpublish workflow wasn't a feature. It was the central safety mechanism of the entire product. Designing it required understanding not just the interaction — but the operational context in which administrators would use it.*

---

### Insight 04 — "Role-based access wasn't just a permissions problem — it was a navigation problem."

Different user roles didn't just have different permissions. They had fundamentally different workflows, different entry points, and different definitions of what "the product" was. A Network Operator's product was the Monitor lifecycle. A Switch Configuration Manager's product was the Deploy lifecycle. Designing one navigation system that served all three roles without exposing irrelevant complexity to any of them was one of the hardest structural problems on the project.

**Strategic Implication**

*Navigation had to be role-aware from the first screen — not as a permissions gate, but as a genuine personalisation of the product experience based on what each role actually needed to accomplish.*

---

## Strategic Decisions

### Good design isn't about finding the perfect solution. It's about making the right call when every option has a cost.

---

### Decision 01 — Flat Navigation vs. Lifecycle-Based Navigation

**Option A — Rejected: Flat Feature Navigation**
Organise the product around features — configuration tools, monitoring tools, deployment tools — accessible from a single navigation layer. Familiar. Predictable. Already the model in most enterprise tools.

**Option B — Chosen: Lifecycle-Based Navigation**
Organise the product around the three stages of an administrator's workflow — Configure, Deploy, Monitor — each with its own dedicated context, tools, and left panel state.

**Who Pushed Back**
The temptation internally was toward familiarity. Lifecycle navigation was a less common pattern — it required users to understand the model before they could navigate it fluently.

**How We Resolved It**
We mapped the actual workflow of a network administrator managing a visibility fabric change. The workflow was inherently sequential — configure entities, deploy topologies, monitor outcomes. The navigation should reflect that sequence, not obscure it. Lifecycle navigation wasn't an abstraction — it was a direct mirror of how the work actually happened.

**What We Sacrificed**
Immediate discoverability for new users. Lifecycle navigation rewards understanding — it's faster once learned, but has a steeper initial mental model. For expert users, that was an acceptable trade.

---

### Decision 02 — Flat Tree vs. Perspective-Based Left Panel

**Option A — Rejected: Single Flat Hierarchy**
Show all resources in a single hierarchical tree — switches, ports, port groups — in a fixed structure. Simple to implement. Easy to reason about in isolation.

**Option B — Chosen: Perspective-Based Navigation**
Allow administrators to reorganise the same resources through multiple lenses — by Location, by Logical type, by Filter, by Template — switching perspectives without losing context.

**Who Pushed Back**
Engineering flagged implementation complexity. Multiple perspectives on the same data required a more sophisticated underlying model.

**How We Resolved It**
We demonstrated that a flat tree would break at scale. A network with hundreds of ports across multiple geographic locations, organised alphabetically by port ID, was not navigable in any meaningful sense. Perspectives weren't an enhancement — they were a prerequisite for the tool to work in real deployments.

**What We Sacrificed**
Simplicity of the initial mental model. Perspective switching required administrators to understand that the same resources could be viewed differently — a concept that needed to be introduced carefully in the UI.

---

### Decision 03 — Live Publish vs. Staged Topology Publishing

**Option A — Rejected: Live Configuration**
Changes push to infrastructure immediately on save. Simpler state model. No versioning overhead. Mirrors how the legacy system worked.

**Option B — Chosen: Staged Publishing with Versioning**
Separate configuration from deployment. Allow administrators to stage changes, create versioned snapshots, validate before pushing, and schedule publication ahead of maintenance windows.

**Who Pushed Back**
This was the most technically complex decision on the project. Engineering flagged significant implementation effort. Product stakeholders questioned whether administrators would understand the two-state model.

**How We Resolved It**
We walked through a single real scenario: an administrator needs to reconfigure a topology before a Saturday maintenance window, but it's currently Tuesday. In the live-publish model, they either make the change early and risk live impact, or wait until Saturday and work under time pressure. In the staged model, they configure on Tuesday, validate on Thursday, and push on Saturday — with rollback available if anything goes wrong. The scenario made the decision self-evident.

**What We Sacrificed**
Simplicity of state. The two-state model introduced visual complexity that required careful design to remain legible. Every entity in the topology needed to communicate its publication state clearly — at a glance, without ambiguity.

---

## Design Work

### Six flows. Each chosen because it shows a decision, not just a screen.

---

### Flow 01 — Lifecycle Navigation & Role-Based Access

<!-- ARTIFACT CARD COMPONENT -->
<!--
  card_id: flow_01
  wireframe_source: "PFSOne_DeploymentLC_LF_PartA1_02172016_v19_1_2.pdf"
  wireframe_page: 3
  section_label: "D1 — Page Elements & Access to Lifecycles"
  thumbnail_hint: "Page structure diagram showing primary nav bar, lifecycle tabs, and role-based access matrix"
  expanded_view: "side_by_side_annotated"
  annotations:
    - id: 1
      label: "Lifecycle Bar"
      position: "top-center"
      text: "Configure · Deploy · Monitor are not tabs — they are distinct operational contexts. Switching lifecycle changes the entire left panel, toolbar, and workspace state. Navigation here is a workflow mirror, not a feature menu."
    - id: 2
      label: "Role-Based Lifecycle Visibility"
      position: "right"
      text: "A Network Operator sees only Monitor. A Switch Configuration Manager sees Configure and Deploy. Lifecycle access isn't a permissions gate — it's a product personalisation. Each role gets the product they actually need."
    - id: 3
      label: "User Access Panel"
      position: "top-right"
      text: "Role, organisation, and domain context is surfaced immediately on login. In a multi-tenant enterprise tool, knowing who you are in this system is as important as knowing where you are."
-->

**The Problem**
The legacy interface gave all users access to all functionality — creating noise for operators who only needed monitoring, and risk for junior administrators who could accidentally touch configuration tools they shouldn't.

`[ARTIFACT CARD — Flow 01 · D1 Page Structure · Click to expand annotated view]`

**The Decision**
Designed a primary navigation bar — Configure, Deploy, Monitor — where visible lifecycles are determined by user role at login. A Network Operator sees only Monitor. A Switch Configuration Manager sees Configure and Deploy. A Service Administrator sees everything.

**Annotations**

**① Lifecycle Bar**
"Configure · Deploy · Monitor are not tabs — they are distinct operational contexts. Switching lifecycle changes the entire left panel, toolbar, and workspace state. Navigation here is a workflow mirror, not a feature menu."

**② Role-Based Lifecycle Visibility**
"A Network Operator sees only Monitor. A Switch Configuration Manager sees Configure and Deploy. Lifecycle access isn't a permissions gate — it's a product personalisation. Each role gets the product they actually need."

**③ User Access Panel**
"Role, organisation, and domain context is surfaced immediately on login. In a multi-tenant enterprise tool, knowing *who you are in this system* is as important as knowing *where you are*."

---

### Flow 02 — Perspective-Based Left Panel

<!-- ARTIFACT CARD COMPONENT -->
<!--
  card_id: flow_02
  wireframe_source: "PFSOne_DeploymentLC_LF_PartA1_02172016_v19_1_2.pdf"
  wireframe_page: 4
  section_label: "D2 — Perspectives (Deployment LC)"
  thumbnail_hint: "Side-by-side view of Location, Logical, Filter, and Template perspective panels"
  expanded_view: "side_by_side_annotated"
  annotations:
    - id: 1
      label: "Perspective Selector"
      position: "top-left"
      text: "Four perspectives — Location, Logical, Filter, Template — reorganise the same resources through different cognitive lenses. This isn't filtering. It's giving administrators the ability to think about their network differently depending on the task at hand."
    - id: 2
      label: "Location Perspective"
      position: "center-left"
      text: "Ports organised by geography — New York, Seattle, San Francisco. When an administrator is troubleshooting a regional issue, geographic organisation is the most natural mental model. The interface adapts to the task, not the other way around."
    - id: 3
      label: "Logical Perspective"
      position: "center-right"
      text: "The same ports, reorganised by type — Network, Monitor, Service, Duplex. When auditing port configurations across a deployment, logical grouping is faster and safer than geographic browsing. One perspective switch. Completely different working context."
-->

**The Problem**
A network with hundreds of ports across New York, Seattle, and San Francisco — organised in a flat list by port ID — was not a navigable artefact. It was a data dump.

`[ARTIFACT CARD — Flow 02 · D2 Perspectives · Click to expand annotated view]`

**The Decision**
Built a perspective-switching system — Location, Logical, Filter, Template — that allows administrators to reorganise the same resource hierarchy through the lens most relevant to their current task.

**Annotations**

**① Perspective Selector**
"Four perspectives reorganise the same resources through different cognitive lenses. This isn't filtering. It's giving administrators the ability to think about their network differently depending on the task at hand."

**② Location Perspective**
"Ports organised by geography — New York, Seattle, San Francisco. When an administrator is troubleshooting a regional issue, geographic organisation is the most natural mental model. The interface adapts to the task, not the other way around."

**③ Logical Perspective**
"The same ports, reorganised by type — Network, Monitor, Service, Duplex. When auditing port configurations across a deployment, logical grouping is faster and safer than geographic browsing. One perspective switch. Completely different working context."

---

### Flow 03 — Topology Landing Page

<!-- ARTIFACT CARD COMPONENT -->
<!--
  card_id: flow_03
  wireframe_source: "PFSOne_DeploymentLC_LF_PartA1_02172016_v19_1_2.pdf"
  wireframe_page: 5
  section_label: "D3 — Landing Page (Deployment Lifecycle)"
  thumbnail_hint: "Card-based landing page showing deployment environments, topology versions, and recently modified feed"
  expanded_view: "side_by_side_annotated"
  annotations:
    - id: 1
      label: "Deployment Environment Cards"
      position: "center"
      text: "Each card shows live status, version history, and active editors at a glance. Administrators see the health of their entire deployment before they open a single topology — reducing the risk of entering a workspace blind."
    - id: 2
      label: "Recently Modified Feed"
      position: "right"
      text: "The most recently touched topologies surface automatically — with editor name, timestamp, and deployment environment. In a multi-user system, knowing who changed what and when is not a nice-to-have. It is an operational requirement."
    - id: 3
      label: "Auto Publish Toggle"
      position: "top-right"
      text: "Auto Publish ON vs OFF is visible at the topology level — not buried in settings. This single toggle determines whether changes go live immediately or enter a staged state. Its prominence in the UI reflects its operational weight."
-->

**The Problem**
Administrators managing multiple deployment environments had no coherent overview of what was live, what was staged, and who had touched what — before they opened a single topology.

`[ARTIFACT CARD — Flow 03 · D3 Landing Page · Click to expand annotated view]`

**The Decision**
Designed a card-based landing page where each Deployment Environment surfaces live status, topology versions, active editors, and modification history — before the administrator enters the topology workspace.

**Annotations**

**① Deployment Environment Cards**
"Each card shows live status, version history, and active editors at a glance. Administrators see the health of their entire deployment before they open a single topology — reducing the risk of entering a workspace blind."

**② Recently Modified Feed**
"The most recently touched topologies surface automatically — with editor name, timestamp, and deployment environment. In a multi-user system, knowing *who changed what and when* is not a nice-to-have. It is an operational requirement."

**③ Auto Publish Toggle**
"Auto Publish ON vs OFF is visible at the topology level — not buried in settings. This single toggle determines whether changes go live immediately or enter a staged state. Its prominence in the UI reflects its operational weight."

---

### Flow 04 — Primary Topology Editing Flow

<!-- ARTIFACT CARD COMPONENT -->
<!--
  card_id: flow_04
  wireframe_source: "PFSOne_DeploymentLC_LF_PartA1_02172016_v19_1_2.pdf"
  wireframe_page: 7
  section_label: "D4.2 — Primary Flow: Editing an Existing Topology"
  thumbnail_hint: "Multi-step topology editing flow showing version creation, port state indicators, and configuration panel slide-out"
  expanded_view: "side_by_side_annotated"
  annotations:
    - id: 1
      label: "Version Creation on Edit"
      position: "top-left"
      text: "The moment an administrator begins editing a published topology, a new version is automatically created. The published version remains live and untouched. Editing and deploying are structurally separated — not just conceptually."
    - id: 2
      label: "Entity State Indicators"
      position: "center"
      text: "Blue outline with publish icon means configured but not deployed. Green means live. This visual language operates at the individual entity level — an administrator can see the publication state of every port and connection without opening a single panel."
    - id: 3
      label: "Configuration Panel"
      position: "right"
      text: "Port configuration slides out contextually without navigating away from the topology. The administrator maintains spatial awareness of the full network while editing a single entity — reducing the risk of making a change without understanding its downstream connections."
-->

**The Problem**
The legacy system had no version control. Every edit was made directly on the live topology — meaning administrators had to choose between making changes under pressure during maintenance windows, or risking live network impact by editing outside them.

`[ARTIFACT CARD — Flow 04 · D4.2 Editing Flow · Click to expand annotated view]`

**The Decision**
Designed an editing model where the moment an administrator begins editing a published topology, a new version is automatically created. The published version remains live and untouched until the administrator chooses to push.

**Annotations**

**① Version Creation on Edit**
"The moment an administrator begins editing a published topology, a new version is automatically created. The published version remains live and untouched. Editing and deploying are structurally separated — not just conceptually."

**② Entity State Indicators**
"Blue outline with publish icon means configured but not deployed. Green means live. This visual language operates at the individual entity level — an administrator can see the publication state of every port and connection without opening a single panel."

**③ Configuration Panel**
"Port configuration slides out contextually without navigating away from the topology. The administrator maintains spatial awareness of the full network while editing a single entity — reducing the risk of making a change without understanding its downstream connections."

---

### Flow 05 — Publish & Validate

<!-- ARTIFACT CARD COMPONENT -->
<!--
  card_id: flow_05
  wireframe_source: "PFSOne_DeploymentLC_LF_PartA1_02172016_v19_1_2.pdf"
  wireframe_page: 14
  section_label: "D6 — Publish Now"
  thumbnail_hint: "Publish flow showing multi-stage validation progress, publish all panel, and connection state colour system"
  expanded_view: "side_by_side_annotated"
  annotations:
    - id: 1
      label: "Staged vs Live State"
      position: "center"
      text: "Unpublished connections are black. Published connections are green. Disabled connections are grey. Three states. Three colours. No ambiguity about what is live on the network at any moment — because ambiguity in this context is operationally dangerous."
    - id: 2
      label: "Publish All Topologies"
      position: "right"
      text: "Administrators can select specific versions across multiple topologies and publish them together — with per-topology validation happening in parallel before any changes reach the infrastructure. Coordination without complexity."
    - id: 3
      label: "Validation Progress Flow"
      position: "bottom"
      text: "Validating → Pre-committing → Committing → Finalising. Each stage is visible in real time. If validation fails, publication stops cleanly — with the specific failure surfaced immediately. The administrator always knows exactly where in the process a problem occurred."
-->

**The Problem**
Without a structured publish flow, administrators had no reliable way to validate configurations before they reached live infrastructure — and no visibility into what was deployed versus what was merely staged.

`[ARTIFACT CARD — Flow 05 · D6 Publish Now · Click to expand annotated view]`

**The Decision**
Designed a multi-stage publish flow — Validate → Pre-commit → Commit → Finalise — with real-time progress visibility, per-topology error surfacing, and a bulk publish option for administrators managing multiple topologies simultaneously.

**Annotations**

**① Staged vs Live State**
"Unpublished connections are black. Published connections are green. Disabled connections are grey. Three states. Three colours. No ambiguity about what is live on the network at any moment — because ambiguity in this context is operationally dangerous."

**② Publish All Topologies**
"Administrators can select specific versions across multiple topologies and publish them together — with per-topology validation happening in parallel before any changes reach the infrastructure. Coordination without complexity."

**③ Validation Progress Flow**
"Validating → Pre-committing → Committing → Finalising. Each stage is visible in real time. If validation fails, publication stops cleanly — with the specific failure surfaced immediately. The administrator always knows exactly where in the process a problem occurred."

---

### Flow 06 — Left Panel Interactions

<!-- ARTIFACT CARD COMPONENT -->
<!--
  card_id: flow_06
  wireframe_source: "PFSOne_DeploymentLC_LF_PartA1_02172016_v19_1_2.pdf"
  wireframe_page: 15
  section_label: "D7 — Left Panel Interactions"
  thumbnail_hint: "Left panel showing hover menus, multi-select behaviour, and switch hierarchy drill-down"
  expanded_view: "side_by_side_annotated"
  annotations:
    - id: 1
      label: "Hover Action Menus"
      position: "center-left"
      text: "Every resource surfaces a contextual action menu on hover — Configure, Enable/Disable, Focus In, Monitor, Remove. Actions are available exactly where the administrator's attention already is — no secondary navigation required."
    - id: 2
      label: "Multi-Select Behaviour"
      position: "top"
      text: "Administrators can select multiple ports simultaneously using Ctrl+Click — with counts updating in real time in the hierarchy. Bulk operations on a network with hundreds of ports aren't an edge case. They're the daily workflow."
    - id: 3
      label: "Drill Down into Switch Hierarchy"
      position: "bottom"
      text: "The left panel supports drilling from geographic location → switch → chassis → blade → port — with each level maintaining context of what's above it. Administrators can go deep without losing their place in the broader network structure."
-->

**The Problem**
In the legacy system, acting on a resource required navigating to a separate configuration screen — breaking the administrator's spatial awareness of the topology they were working in.

`[ARTIFACT CARD — Flow 06 · D7 Left Panel · Click to expand annotated view]`

**The Decision**
Designed a contextual hover-action system where every resource in the left panel surfaces relevant actions — Configure, Enable/Disable, Focus In, Monitor, Remove — exactly where the administrator's attention already is.

**Annotations**

**① Hover Action Menus**
"Every resource surfaces a contextual action menu on hover — Configure, Enable/Disable, Focus In, Monitor, Remove. Actions are available exactly where the administrator's attention already is — no secondary navigation required."

**② Multi-Select Behaviour**
"Administrators can select multiple ports simultaneously using Ctrl+Click — with counts updating in real time in the hierarchy. Bulk operations on a network with hundreds of ports aren't an edge case. They're the daily workflow."

**③ Drill Down into Switch Hierarchy**
"The left panel supports drilling from geographic location → switch → chassis → blade → port — with each level maintaining context of what's above it. Administrators can go deep without losing their place in the broader network structure."

---

## AI Opportunity Layer

### This project was completed in 2016. Here's how I'd approach it differently today.

---

### AI 01 — Intelligent Topology Validation

The current validation system checks configurations against known rules before publishing. Today I'd layer an AI model trained on historical topology configurations and deployment outcomes — one that could flag not just rule violations, but *risk patterns*. Configurations that technically pass validation but resemble past deployments that caused issues.

From: "This configuration is valid."
To: "This configuration is valid — but similar topologies caused visibility gaps in 3 previous deployments."

---

### AI 02 — Natural Language Topology Querying

Administrators managing hundreds of ports across multiple locations currently navigate through a hierarchical tree to find what they need. Today I'd add a natural language query layer — "show me all unpublished monitor ports in New York" — that translates intent into filtered topology views without requiring manual navigation.

The perspective system we designed was the right answer in 2016. In 2026, the right answer is letting administrators describe what they need and having the system surface it.

---

### AI 03 — Anomaly Detection in the Monitor Lifecycle

The Monitor lifecycle currently shows port statistics and alarm states — a reactive view of what's happening. Today I'd design an AI layer that learns baseline traffic patterns per port and surfaces anomalies before they become alarms.

Not: "Your port utilisation is at 98%."
But: "This port's traffic pattern has deviated from its 30-day baseline in a way that preceded a failure event twice before."

---

> These three opportunities share a common thread — they all move PFS ONE from a *configuration and monitoring tool* to an *intelligence layer for network visibility*. From a product that shows administrators what the network is doing, to one that helps them understand what the network is about to do.

---

## Outcomes + Impact

### Impact lives at three levels.

---

### Research Impact

**Domain model established**
Extended stakeholder immersion through a single senior channel produced the first structured understanding of how network administrators thought about and managed visibility infrastructure — creating the design foundation for the entire product.

**Legacy failure modes identified**
Reverse-engineering the old interface surfaced three critical workflow gaps: no staged publishing, no perspective-based navigation, no role-differentiated access — each of which became a core design workstream.

**Mental model documented**
The left panel perspective system emerged directly from mapping how administrators organised their thinking about network resources — producing a navigation architecture grounded in cognitive reality rather than data structure.

---

### Design Impact

**Lifecycle navigation shipped**
Configure · Deploy · Monitor · Inline — four lifecycle stages, each with dedicated context and tooling, delivered as the primary navigation architecture of the shipped product.

**Perspective-based left panel shipped**
Location · Logical · Filter · Template perspectives — giving administrators four cognitive lenses on the same resource hierarchy, confirmed in the shipped product datasheet.

**Staged topology publishing shipped**
Two-state publish model with versioning, scheduling, and validation — moving administrators from live-only changes to a controlled, stageable deployment workflow. Confirmed as a core product feature.

**Role-based lifecycle access shipped**
Navigation personalised by user role — confirmed in the shipped product, with Service Administrator, Switch Configuration Manager, and Network Operator roles each accessing a tailored product surface.

---

### Strategic Impact

**A legacy product made future-ready**
The redesign didn't just improve usability — it established an architectural foundation capable of supporting the product's evolution toward centralised management, inline toolchain configuration, and predictive monitoring.

**Design as infrastructure**
The navigation and topology systems we designed weren't screens — they were structural decisions that determined how the entire product could grow. The fact that they shipped without significant architectural change is the outcome that matters most.

---

## Reflection

### The best designers aren't the ones who get everything right. They're the ones who know exactly what they'd do differently.

---

### Reflection 01 — Push harder for direct user access, even with expert users

We learned the domain through a single stakeholder channel — which was the reality of this engagement. But I'd now push harder for even one or two observational sessions with working network administrators in their actual environment. Watching an expert work in a high-stakes operational context reveals things no requirement document can — the workarounds, the muscle memory, the moments of hesitation that signal where real friction lives.

---

### Reflection 02 — Design the onboarding to the mental model, not just the UI

The perspective-based navigation and lifecycle model were the right architectural decisions. But they required administrators to learn a new mental model before they could use the product fluently. In hindsight, I'd invest significantly more in the first-use experience — not a tutorial, but a designed onboarding moment that introduces the lifecycle model in the context of a real task. The architecture was sound. The entry point needed more care.

---

### Reflection 03 — Make the two-state model more forgiving

The publish/unpublish system was the right answer to a real problem. But two-state models introduce cognitive load — administrators had to track not just what was configured, but what was deployed. Looking back, I'd explore whether the visual language could do more of that tracking work for the user — reducing the mental overhead of maintaining awareness of system state across a complex topology with dozens of entities in different publication states.

---

## Next Case Study

*Next Case Study*

Coming Soon

← Back to Work

---

*© 2026 Ameya Kulkarni. All rights reserved.*

---

## Implementation Notes for Claude Code

### Artifact Card Component Spec

Each `[ARTIFACT CARD]` placeholder in the Design Work section should be replaced with an interactive component built as follows:

**Thumbnail State (default)**
- Renders a cropped, low-opacity screenshot of the referenced wireframe page
- Displays section label (e.g. "D1 — Page Structure") as a caption
- Shows a subtle "Click to expand" affordance on hover
- Dark overlay with gold accent border on hover (matching portfolio theme)

**Expanded State (on click)**
- Opens a modal or slide-over panel
- Left side: full wireframe image at readable scale
- Right side: three annotation cards stacked vertically
- Each annotation card shows: numbered badge (①②③) + label + annotation text
- Close button top-right
- ESC key closes

**Data source for each card:**
All artifact card metadata is embedded in the HTML comments directly above each flow section in this file. Parse `card_id`, `wireframe_page`, `section_label`, `thumbnail_hint`, and `annotations` array from those comments when building the component.

**Wireframe PDF pages to extract as images:**
- Flow 01 → Page 3 of PFSOne_DeploymentLC_LF_PartA1_02172016_v19_1_2.pdf
- Flow 02 → Page 4
- Flow 03 → Page 5
- Flow 04 → Page 7
- Flow 05 → Page 14
- Flow 06 → Page 15

### Visual Style Notes

- Background: #000000 (black) — consistent with portfolio dark theme
- Accent: Gold (#C9A84C or equivalent from your existing token set)
- Card borders: 1px solid rgba(201, 168, 76, 0.3) at rest / rgba(201, 168, 76, 0.8) on hover
- Annotation badge: Gold circle with dark number
- Typography: Match DiGiSense case study type system exactly
- Transition: 300ms ease for all hover and expand interactions

### Section Mapping for Page Build

| Section | Component Type |
|---|---|
| Hero | Full-bleed text block — no image |
| Business Context | Stat row (3 stats) + body copy + blockquote |
| The Ecosystem | Three-column role cards |
| Research Approach | Stat row (4 stats) + method list |
| Key Insights | Four numbered insight cards |
| Strategic Decisions | Three decision blocks (A vs B format) |
| Design Work | Six artifact card components (see above) |
| AI Opportunity Layer | Three AI cards + closing blockquote |
| Outcomes + Impact | Three-column impact grid |
| Reflection | Three reflection blocks |
| Footer | Next case study nav + copyright |
