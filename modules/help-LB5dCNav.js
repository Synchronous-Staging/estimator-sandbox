const be=`---
keys:
  - automations/approvals
  - automations/runs
title: Approvals and the run log
chain: Automations, Approvals
tool: automations
views:
  - automations
ask: Tom
reviewed: v3.50
sources:
  - src/modules/automations/index.js
  - src/modules/crm/screens/automations-area.js
stub: true
---
# Approvals and the run log

This page is being written.
`,fe=`---
keys:
  - automations/list
  - automations/edit
title: Automations
chain: Automations
tool: automations
views:
  - automations
ask: Tom
reviewed: v3.50
sources:
  - src/modules/automations/index.js
  - src/modules/crm/screens/automations-area.js
  - src/modules/crm/screens/automation-builder.js
stub: true
---
# Automations

This page is being written.
`,ve=`---
keys:
  - crm/activities
  - crm/forecast
  - crm/reports
title: Activities, Forecast and Reports
chain: CRM, Activities
tool: crm
views:
  - crm
ask: Tom
reviewed: v3.50
sources:
  - src/modules/crm/screens/activities.js
  - src/modules/crm/screens/forecast.js
  - src/modules/crm/screens/reports.js
stub: true
---
# Activities, Forecast and Reports

This page is being written.
`,ke=`---
keys:
  - crm/contacts
  - crm/company
  - crm/contact
title: Companies and people
chain: CRM, Contacts
tool: crm
views:
  - crm
ask: Tom
reviewed: v3.50
sources:
  - src/modules/crm/screens/contacts.js
  - src/modules/crm/screens/clients.js
stub: true
---
# Companies and people

This page is being written.
`,we=`---
keys:
  - crm/deal
title: An opportunity
chain: CRM, An opportunity
tool: crm
views:
  - crm
ask: Tom
reviewed: v3.50
sources:
  - src/modules/crm/screens/deal.js
stub: true
---
# An opportunity

This page is being written.
`,ye=`---
keys:
  - crm/pipeline
  - crm/list
  - crm/calendar
  - crm/map
title: Pipeline, List and Calendar
chain: CRM, Pipeline
tool: crm
views:
  - crm
ask: Tom
reviewed: v3.50
sources:
  - src/modules/crm/screens/pipeline.js
  - src/modules/crm/screens/list.js
  - src/modules/crm/screens/calendar.js
  - src/modules/crm/screens/searchbar.js
stub: true
---
# Pipeline, List and Calendar

This page is being written.
`,_e=`---
keys:
  - crm/pivot
  - crm/graph
title: Pivot and Graph
chain: CRM, Pivot
tool: crm
views:
  - crm
ask: Tom
reviewed: v3.50
sources:
  - src/modules/crm/screens/pivot.js
  - src/modules/crm/screens/graph.js
stub: true
---
# Pivot and Graph

This page is being written.
`,Te=`---
keys:
  - crm/settings
title: CRM settings
chain: CRM, Settings
tool: crm
views:
  - crm
  - admin
ask: Tom
reviewed: v3.50
sources:
  - src/modules/crm/screens/settings.js
stub: true
---
# CRM settings

This page is being written.
`,je=`---
keys:
  - crm/widgets
title: The CRM
chain: CRM
tool: crm
views:
  - crm
ask: Tom
reviewed: v3.50
sources:
  - src/modules/crm/index.js
stub: true
---
# The CRM

This page is being written.
`,Se=`---
keys:
  - estimator/e
title: The estimate editor
chain: Estimator, An estimate
tool: estimator
views:
  - estimating
ask: Tom
reviewed: v3.50
sources:
  - modules/estimator/MODULE.json
stub: true
---
# The estimate editor

This page is being written.
`,xe=`---
keys:
  - estimator/handovers
title: Hand-overs
chain: Estimator, Hand-overs
tool: estimator
views:
  - estimating
ask: Tom
reviewed: v3.50
sources:
  - modules/estimator/MODULE.json
stub: true
---
# Hand-overs

This page is being written.
`,Ee=`---
keys:
  - estimator/library
  - estimator/materials
  - estimator/norms
title: Library, materials and labour norms
chain: Estimator, Library
tool: estimator
views:
  - estimating
ask: Tom
reviewed: v3.50
sources:
  - modules/estimator/MODULE.json
stub: true
---
# Library, materials and labour norms

This page is being written.
`,Ae=`---
keys:
  - estimator/settings
  - estimator/file
title: Estimator settings and restricted estimates
chain: Estimator, Settings
tool: estimator
views:
  - estimating_admin
ask: Tom
reviewed: v3.50
sources:
  - modules/estimator/MODULE.json
stub: true
---
# Estimator settings and restricted estimates

This page is being written.
`,Le=`---
keys:
  - estimator
title: Estimates
chain: Estimator, Estimates
tool: estimator
views:
  - estimating
ask: Tom
reviewed: v3.50
sources:
  - modules/estimator/MODULE.json
---
# The Estimator

The Estimator prices Mech-Elec and BMS work from a library of kits (assemblies of materials and labour). You build an
estimate as a tree, drag kits into it, and the tool rolls the quantities, hours and prices up through the tree the way the
Full Estimate workbook did. Every estimate lives on the server, so anyone with the Estimating view in your branch can open
it, and every saved change is a revision you can go back to.

## The Estimates list

This is the home screen. Each row is one estimate: its name, the current revision number, when it was last saved, and a
flag when the price books have moved since it was priced (see Re-price below). Click a row to open it. The
tabs across the top take you to the Library, Materials, Labour norms, Hand-overs and, for an estimating admin, Settings.
The Help link in the Estimator's own header opens the tester guide in a new tab; the ? beside What's new opens these
pages.

## Starting an estimate

**New estimate** asks you first for the BMS platform and the sensor and valve brands, because the kits and the controller
sizing depend on them; you can change brands later from the job's Node info, which previews the swap and applies it as a
new revision. **Open file** opens an estimate file exported from this tool (a .sba-est.json file). An estimate that
already exists on the server is offered as a separate copy, so a file from a colleague never overwrites theirs.

## Revisions

Every save is a revision. The list shows the current one; inside an estimate, the Revisions panel lets you open an older
one read-only, compare, or make it current again as a new revision. A revision that was sent to the tracker is frozen and
cannot be edited; make a new revision instead.

## The stale-price flag

Price books have editions. When a book has a newer edition than the one an estimate was priced with, the estimate shows a
stale flag. Open it and choose **Re-price** to see, row by row, what would change at today's prices, and apply it as a new
revision. Nothing changes until you apply it.

## Who can do what

Anyone with the Estimating view can open and read every estimate in their branch; editors and admins can change drafts
and issued estimates, and a revision already sent to the tracker is never changed. The Settings tab, where the commercial
defaults, rate classes, BMS norms and labour norms are maintained, is for an estimating admin. A restricted estimate (opened as a file, never
saved to the server) is for the rare job that must not be on the shared server; it says so at the top.

## Related

- [The estimate editor](?help=estimator-editor)
- [Library, materials and labour norms](?help=estimator-library)
- [A job from an estimate](?help=tracker-import-estimate)
`,Ce=`---
keys:
title: Your account
chain: The platform, Your account
tool: shell
views:
ask: Tom
reviewed: v3.50
sources:
  - src/shell/header.js
  - src/shell/theme.js
stub: true
---
# Your account

This page is being written.
`,Oe=`---
keys:
  - shell/apps
title: Connected apps
chain: The platform, Connected apps
tool: shell
views:
ask: Tom
reviewed: v3.50
sources:
  - src/shell/header.js
stub: true
---
# Connected apps

This page is being written.
`,Me=`---
keys:
title: Using Claude with the platform
chain: The platform, Using Claude
tool: shell
views:
ask: Tom
reviewed: v3.50
sources:
  - src/shell/header.js
  - src/consent/*
stub: true
---
# Using Claude with the platform

This page is being written.
`,Ie=`---
keys:
  - shell/feedback
title: Feedback
chain: The platform, Feedback
tool: shell
views:
ask: Tom
reviewed: v3.50
sources:
  - src/shell/feedback.js
stub: true
---
# Feedback

This page is being written.
`,Be=`---
keys:
title: Getting around
chain: The platform, Getting around
tool: shell
views:
ask: Tom
reviewed: v3.50
sources:
  - src/shell/rail.js
  - src/shell/registry.js
  - src/shell/nav.js
stub: true
---
# Getting around

This page is being written.
`,$e=`---
keys:
title: Using help
chain: The platform, Using help
tool: shell
views:
ask: Tom
reviewed: v3.50
sources:
  - src/shell/help.js
  - src/modules/help/index.js
stub: true
---
# Using help

This page is being written.
`,Fe=`---
keys:
title: Lists
chain: The platform, Users, Lists
tool: shell
views:
  - group-admin
ask: a group admin
reviewed: v3.50
sources:
  - src/shell/users.js
  - src/modules/tracker/dialogs/lookups.js
stub: true
---
# Lists

This page is being written.
`,Re=`---
keys:
  - shell/users
title: Users
chain: The platform, Users
tool: shell
views:
  - group-admin
ask: a group admin
reviewed: v3.50
sources:
  - src/shell/users.js
  - src/shell/audit.js
stub: true
---
# Users

This page is being written.
`,Pe=`---
keys:
  - shell/whatsnew
title: What's new
chain: The platform, What's new
tool: shell
views:
ask: Tom
reviewed: v3.50
sources:
  - src/shell/whatsnew.js
stub: true
---
# What's new

This page is being written.
`,Ue=`---
keys:
title: Getting started
chain: The platform, Getting started
tool: shell
views:
ask: Tom
reviewed: v3.50
sources:
  - src/shell/signin.js
  - src/shell/identity.js
stub: true
---
# Getting started

This page is being written.
`,ze=`---
keys:
  - tracker/add-job
title: Adding a job
chain: Budget Tracker, Invoicing, Add a job
tool: tracker
views:
  - invoicing
ask: a finance admin
reviewed: v3.50
sources:
  - src/modules/tracker/dialogs/wizard.js
stub: true
---
# Adding a job

This page is being written.
`,De=`---
keys:
  - tracker/budget
title: Budget and OPEX
chain: Budget Tracker, Budget
tool: tracker
views:
  - budget
ask: a finance admin
reviewed: v3.50
sources:
  - src/modules/tracker-budget/index.js
stub: true
---
# Budget and OPEX

This page is being written.
`,He=`---
keys:
  - tracker/conflict
title: Someone else saved
chain: Budget Tracker, Someone else saved
tool: tracker
views:
  - invoicing
ask: a finance admin
reviewed: v3.50
sources:
  - src/modules/tracker/dialogs/conflict.js
stub: true
---
# Someone else saved

This page is being written.
`,We=`---
keys:
  - tracker/financials/import
title: Importing a month
chain: Budget Tracker, Financials, Admin, Import a month
tool: tracker
views:
  - financials
  - admin
ask: a finance admin
reviewed: v3.50
sources:
  - src/modules/tracker-financials/index.js
  - src/modules/tracker/fin-data.js
stub: true
---
# Importing a month

This page is being written.
`,Ne=`---
keys:
  - tracker/financials/settings
title: Settings
chain: Budget Tracker, Financials, Admin, Settings
tool: tracker
views:
  - financials
  - admin
ask: a finance admin
reviewed: v3.50
sources:
  - src/modules/tracker-financials/index.js
  - src/modules/tracker/fin-data.js
---
# Financials settings

These settings are per entity (ACT or NSW; the Combined view has none) and they feed two places: the Financials tiles and
the On track tab in Invoicing. Only a finance admin sees the Admin tab and can save; everyone else with the Financials view
sees the values read-only at the foot of the P&L.

## The fields

- **Chargeable hours**: the entity's billable hours a month. Since departments arrived this is the total of the
  departments' monthly hours and is shown, not typed.
- **Charge rate**: the hourly rate used for the labour run-rate tiles.
- **Estimate percent**: the share of revenue the estimating tiles assume.
- **Depreciation a month**: used when the chart of accounts has no depreciation line for the year; a blank here makes the
  break-even tiles say "excludes D&A".
- **Monthly overhead**: the figure On track shares out across departments. Leave it blank and On track uses the entity's
  average overhead over its closed months instead; type it when you want a planning figure rather than history.

## Departments and overhead

The Departments table is how On track knows who does what. Each row is a department with:

- **Name**: as you want it to read on the On track tab.
- **Job types**: the job types whose lines count for this department. A type can be in one department only; a type in no
  department sends its lines to Unassigned. Projects is never placed: it is a parent-only type and the sections carry the
  work.
- **Headcount** and **Monthly hours**: the people in the department and the hours they are expected to charge in a normal
  month. The table's total becomes the entity's chargeable hours.

Add a row for a new department, remove one that has closed, and move job types between departments by editing the list
on each row. Then **Save settings**. The change shows on On track at its next refresh.

## Adjusting a month

Below the departments, **Adjust a month** lets you give one department a different headcount or hours for one month: a
person on leave, a new starter part way through, a public holiday heavy month. The adjusted month shows a star beside the
department on On track for that month only. Months you do not adjust use the normal figures.

## Where the labour rate lives

The branch's labour rate per hour is not here: it is the rate box at the top of the On track tab, for a group admin or the
branch's admin. The two are kept apart because the rate is a schedule setting every editor's lines use, while the
overhead and departments are finance settings.

## Phone

On a phone these settings are read-only; save changes from a laptop.

## Related

- [On track](?help=tracker-invoicing-ontrack)
- [Financials: the P&L and its tiles](?help=tracker-financials)
- [Lists: job types](?help=shell-users-lists)
`,Ge=`---
keys:
  - tracker/financials
title: Financials: the P&L and its tiles
chain: Budget Tracker, Financials, P&L
tool: tracker
views:
  - financials
ask: a finance admin
reviewed: v3.50
sources:
  - src/modules/tracker-financials/index.js
stub: true
---
# Financials: the P&L and its tiles

This page is being written.
`,Ye=`---
keys:
  - tracker/import-estimate
title: A job from an estimate
chain: Budget Tracker, Invoicing, Import from estimate file
tool: tracker
views:
  - invoicing
ask: a finance admin
reviewed: v3.50
sources:
  - src/modules/tracker-import/index.js
stub: true
---
# A job from an estimate

This page is being written.
`,qe=`---
keys:
  - tracker/import-jobs
title: Importing jobs from a file
chain: Budget Tracker, Invoicing, Import jobs
tool: tracker
views:
  - invoicing
  - admin
ask: a finance admin
reviewed: v3.50
sources:
  - src/modules/tracker/dialogs/import-jobs.js
stub: true
---
# Importing jobs from a file

This page is being written.
`,Xe=`---
keys:
  - tracker/invoicing/ontrack
title: On track
chain: Budget Tracker, Invoicing, On track
tool: tracker
views:
  - invoicing
ask: a finance admin
reviewed: v3.50
sources:
  - src/modules/tracker-invoicing/ontrack.js
  - src/modules/tracker/inv-model.js
  - src/shared/tracker-calc/invoicing.js
---
# On track

On track answers one question for your branch and the month on screen: are the jobs we are working on paying for the
people working on them? It takes the schedule you already keep (forecast and actual claims, materials, subbies and hours
per job per month) and adds the branch's overhead, so each department sees its own position rather than one number for
the whole branch.

## The two tables

**Forecast (whole month)** uses the forecast figures on every job line for the month. It is what the month looks like if
everything lands as planned.

**Actual (month to date)** uses the actual figures entered so far, and scales the overhead to the part of the month that
has passed (the heading shows the percentage). Early in the month this table is thin; by the last week it is the real
answer.

Each table has a row per department (set up in Financials, then Settings), an Unassigned row when some lines have no
department, a Workshop stock row when stock has been bought against no job, and a Total.

## What each column means

- **Revenue**: the claims on the lines in that department for the month.
- **Headcount** and **Monthly billable hours**: the department's people and the hours they are expected to charge, from
  Settings. A star on the name means the month was adjusted in Settings (someone on leave, a new starter).
- **Hours on jobs**: the hours entered on the job lines (estimated hours in the Forecast table, actual hours in the Actual
  table).
- **Hours gap**: billable hours less hours on jobs. Green means the department has enough work booked; amber means it is
  close; red means it is short of work for the people it has.
- **Cost of delivery labour**: the larger of hours on jobs and billable hours, at the branch's labour rate. Idle people
  still cost, so the larger figure is used.
- **% of billable hours**: the department's share of the branch's billable hours. The overhead is shared out by it.
- **Allocated overhead**: the branch's monthly overhead times that share (and times the part of the month elapsed in the
  Actual table). The overhead comes from Settings; if none is typed there, the tracker uses the branch's average from its
  closed months, and the heading says which.
- **Materials** and **Subbies**: from the job lines (estimated in Forecast, actual in Actual). Workshop stock counts as
  materials for the month it was bought.
- **Breakeven**: labour plus allocated overhead plus materials plus subbies.
- **Position**: revenue less breakeven. Green is above breakeven, red is below.

Hover a money cell to see which job lines are behind it.

## Why a job sits in Unassigned

A line reports under its own job type, and each job type belongs to a department in Settings. A line shows in Unassigned
when it has no job type, when its type is Projects (a parent-only type: the sections carry the work), or when its type
has not been placed in a department yet. The note under the tables lists those lines. To fix it, give the job a type in
its job window, or ask a finance admin to place the type in a department.

## The labour rate box

A group admin or the branch's admin sees a rate box at the top. It sets the branch's labour rate per hour, which the
tracker uses to turn hours into dollars on every line that has hours and no typed figure. Changing it re-rates those lines
from now on; months already closed keep their stamped rate.

## If you only see hours

Positions need the Financials view, because the overhead and the departments live there. Without it you see the headcount,
billable hours, hours on jobs and the gap in one Unassigned row, with no money. Ask a finance admin if you need the full
tables.

## Related

- [The invoicing schedule](?help=tracker-invoicing)
- [Labour hours and the branch rate](?help=tracker-labour)
- [Financials settings: departments and overhead](?help=tracker-financials-settings)
`,Je=`---
keys:
  - tracker/invoicing/stock
title: Stock materials
chain: Budget Tracker, Invoicing, Stock materials
tool: tracker
views:
  - invoicing
ask: a finance admin
reviewed: v3.50
sources:
  - src/modules/tracker-invoicing/stock.js
stub: true
---
# Stock materials

This page is being written.
`,Ke=`---
keys:
  - tracker/invoicing
title: The invoicing schedule
chain: Budget Tracker, Invoicing, Schedule
tool: tracker
views:
  - invoicing
ask: a finance admin
reviewed: v3.50
sources:
  - src/modules/tracker-invoicing/index.js
  - src/modules/tracker-invoicing/schedule.js
stub: true
---
# The invoicing schedule

This page is being written.
`,Qe=`---
keys:
  - tracker/job
title: The job window
chain: Budget Tracker, Invoicing, The job window
tool: tracker
views:
  - invoicing
ask: a finance admin
reviewed: v3.50
sources:
  - src/modules/tracker/dialogs/job-modal.js
stub: true
---
# The job window

This page is being written.
`,Ve=`---
keys:
title: Labour hours and the branch rate
chain: Budget Tracker, Labour
tool: tracker
views:
  - invoicing
ask: a finance admin
reviewed: v3.50
sources:
  - src/modules/tracker/inv-model.js
stub: true
---
# Labour hours and the branch rate

This page is being written.
`,Ze=`---
keys:
  - tracker/monthly
title: The Monthly tracker
chain: Budget Tracker, Monthly tracker
tool: tracker
views:
  - monthly
ask: a finance admin
reviewed: v3.50
sources:
  - src/modules/tracker-monthly/index.js
stub: true
---
# The Monthly tracker

This page is being written.
`,en=`---
keys:
title: Job statuses and claim statuses
chain: Budget Tracker, Statuses
tool: tracker
views:
  - invoicing
ask: a finance admin
reviewed: v3.50
sources:
  - src/modules/tracker/dialogs/lookups.js
stub: true
---
# Job statuses and claim statuses

This page is being written.
`,nn=`---
keys:
title: The Budget Tracker
chain: Budget Tracker
tool: tracker
views:
ask: a finance admin
reviewed: v3.50
sources:
  - src/modules/tracker/index.js
  - src/modules/tracker/router.js
stub: true
---
# The Budget Tracker

This page is being written.
`,W=Object.freeze(["keys","views","sources"]),he=Object.freeze(["title","chain","tool","ask","reviewed"]),tn=Object.freeze(["stub"]),sn=Object.freeze([...W,...he,...tn]),an=Object.freeze([...W,...he]);class de extends Error{constructor(s){super(s),this.name="HelpFormatError"}}const oe="---",on=/^([a-z]+):(?:[ \t]+(.*?))?[ \t]*$/,rn=/^ {2}- (\S.*?)[ \t]*$/;function ln(h,s){const a=`page ${s}`,n=(c,u)=>{throw new de(`${a}: line ${c}: ${u}`)},l=String(h).replace(/\r\n?/g,`
`).split(`
`);l[0]!==oe&&n(1,"the page must start with a front matter fence (---)");const d={};let t=1,o=null;for(;t<l.length;t++){const c=l[t],u=t+1;if(c===oe)break;c.trim()===""&&n(u,"a blank line inside the front matter");const m=rn.exec(c);if(m){o||n(u,"a list item with no list field above it"),(/^-\s/.test(m[1])||/^[a-z]+:(\s|$)/.test(m[1]))&&n(u,"a nested list (one list level only)"),d[o].push(m[1]);continue}/^\s/.test(c)&&n(u,"an indented line that is not a two-space list item (one list level only)");const b=on.exec(c);b||n(u,`not a "key: value" line: ${c.slice(0,40)}`);const[,e,v]=b;if(sn.includes(e)||n(u,`an unknown field "${e}"`),Object.prototype.hasOwnProperty.call(d,e)&&n(u,`the field "${e}" twice`),W.includes(e)){v!==void 0&&v!==""&&n(u,`"${e}" is a list: put each item on its own "  - " line`),d[e]=[],o=e;continue}if(o=null,(v===void 0||v==="")&&n(u,`"${e}" is empty`),e==="stub"){v!=="true"&&n(u,'"stub" is true or absent'),d.stub=!0;continue}d[e]=v}t>=l.length&&n(l.length,"the front matter is never closed (---)");for(const c of an)Object.prototype.hasOwnProperty.call(d,c)||n(t+1,`the field "${c}" is missing`);return d.sources.length||n(t+1,'"sources" names no file (at least one)'),d.stub!==!0&&(d.stub=!1),{slug:s,meta:d,body:l.slice(t+1).join(`
`),bodyLine:t+2}}const ue=/^[a-z0-9-]{1,64}$/,cn=/^#([a-z][a-z0-9-]*)((?:\/[A-Za-z0-9._-]+)*)$/,hn=/^(#{1,3}) (\S.*)$/,re=/^- (\S.*)$/,le=/^[0-9]{1,2}\. (\S.*)$/;function dn(h,s){h.includes("`")&&s("a code span (backtick) is outside the subset"),/<[A-Za-z/!?]/.test(h)&&s("HTML is outside the subset"),h.includes("![")&&s("an image is outside the subset");const a=[];let n=h;const l=(d,t,o)=>{t&&a.push({t:d,v:t,...o||{}})};for(;n.length;){const d=n.indexOf("**"),t=n.indexOf("["),o=[d,t].filter(e=>e>=0).sort((e,v)=>e-v)[0];if(o===void 0){l("text",n);break}if(l("text",n.slice(0,o)),n=n.slice(o),n.startsWith("**")){const e=n.indexOf("**",2);e<0&&s("a ** with no closing **");const v=n.slice(2,e);(!v.trim()||/[[\]]/.test(v))&&s("bold must hold plain words"),l("b",v),n=n.slice(e+2);continue}const c=/^\[([^\][]+)\]\(([^()\s]+)\)/.exec(n);c||s("a [ that is not a link [text](?help=slug) or [text](#tool/path)");const[u,m,b]=c;if(b.startsWith("?help=")){const e=b.slice(6);ue.test(e)||s(`a page link to "${e}" is not a page slug`),l("help",m,{slug:e})}else{const e=cn.exec(b);e||s(`a link to "${b}" is neither ?help=<slug> nor #<tool>/<path> (no external links)`),l("screen",m,{tool:e[1],path:e[2]?e[2].slice(1).split("/"):[]})}n=n.slice(u.length)}for(const d of a)d.t==="text"&&/[*\]]/.test(d.v)&&s("a stray * or ] (only **bold** and links are in the subset)");return a}function un(h,s="?",a=1){const n=String(h).replace(/\r\n?/g,`
`).split(`
`),l=[];let d=null,t=null,o=null;const c=()=>{d=null,t=null,o=null};for(let u=0;u<n.length;u++){const m=n[u],b=a+u,e=k=>{throw new de(`page ${s}: line ${b}: ${k}`)},v=k=>dn(k,e);if(!m.trim()){c();continue}if(/[ \t]+$/.test(m)&&e("trailing spaces"),/\t/.test(m)&&e("a tab character"),/^ /.test(m)){o||e("an indented line outside a list (code blocks and nesting are outside the subset)");const k=m.replace(/^ {2}/,"");/^ /.test(k)&&e("a line indented by more than two spaces (nesting is outside the subset)"),(re.test(k)||le.test(k)||/^[*+] /.test(k))&&e("a nested list (one level only)"),o.src+=" "+k,o.inl=v(o.src);continue}if(/^#{4,}/.test(m)&&e("a heading deeper than ### is outside the subset"),/^#/.test(m)){const k=hn.exec(m);k||e('a heading is "#", "##" or "###", a space, then words'),c(),l.push({t:"h",level:k[1].length,inl:v(k[2]),line:b});continue}/^\|/.test(m)&&e("a table is outside the subset"),/^>/.test(m)&&e("a block quote is outside the subset"),/^(?:-{3,}|\*{3,}|_{3,})$/.test(m)&&e("a horizontal rule is outside the subset"),/^[*+] /.test(m)&&e('a list item starts with "- " (or "1. "), never * or +');const S=re.exec(m),x=le.exec(m);if(S||x){const k=S?"ul":"ol";d=null,(!t||t.t!==k)&&(t={t:k,items:[],line:b},l.push(t)),o={src:(S||x)[1],inl:null},o.inl=v(o.src),t.items.push(o);continue}if(t&&e("a paragraph line straight after a list item: indent it by two spaces, or leave a blank line"),d){d.src+=" "+m,d.inl=v(d.src);continue}d={t:"p",src:m,inl:v(m),line:b},l.push(d)}return l.map(u=>u.t==="h"?u:u.t==="p"?{t:"p",inl:u.inl,line:u.line}:{t:u.t,items:u.items.map(m=>m.inl),line:u.line})}function H(h,s=!1){return h.map(a=>s&&a.t==="help"?`${a.v} [${a.slug}]`:a.v).join("")}function pn(h){return h.filter(s=>s.t==="h").map(s=>({level:s.level,text:H(s.inl)}))}function mn(h,s=!1){const a=[];for(const n of h)if(n.t==="h"||n.t==="p")a.push(H(n.inl,s));else for(const l of n.items)a.push("- "+H(l,s));return a.join(`
`)}function gn(h,s){const a=(l,d)=>{for(const t of d){if(t.t==="text"){l.append(s.text?s.text(t.v):t.v);continue}if(t.t==="b"){const c=s.el("strong");c.textContent=t.v,l.append(c);continue}const o=s.el("button","hp-link");o.type="button",o.textContent=t.v,t.t==="help"?(o.dataset.help=t.slug,o.addEventListener("click",()=>s.onHelp(t.slug,t.v))):(o.dataset.screen=t.tool+(t.path.length?"/"+t.path.join("/"):""),o.addEventListener("click",()=>s.onScreen(t.tool,t.path,t.v))),l.append(o)}},n=[];for(const l of h){if(l.t==="h"){const t=s.el("h"+(l.level+2),"hp-h"+l.level);a(t,l.inl),n.push(t);continue}if(l.t==="p"){const t=s.el("p");a(t,l.inl),n.push(t);continue}const d=s.el(l.t);for(const t of l.items){const o=s.el("li");a(o,t),d.append(o)}n.push(d)}return n}const F=Object.freeze({title:8,chain:6,heading:4,body:1}),bn=3,fn=8;function vn(h){return String(h||"").toLowerCase().replace(/(?<=[a-z0-9])[-&](?=[a-z0-9])/g,"")}function E(h){return vn(h).match(/[a-z0-9]+/g)||[]}function kn(h){return h.map((s,a)=>({slug:s.slug,title:s.title,chain:s.chain,order:a,title_t:new Set(E(s.title)),chain_t:new Set([...E(s.chain),...(s.keys||[]).flatMap(n=>E(String(n).replace(/[/-]/g," ")))]),heads:(s.headings||[]).map(n=>({text:n.text,t:new Set(E(n.text))})),body_t:new Set(E(s.body))}))}function wn(h,s){const a=[{words:[h],prefix:h.length>=bn}],n=Object.prototype.hasOwnProperty.call(s||{},h)?String(s[h]):"";for(const l of n.split(",")){const d=E(l);d.length&&!(d.length===1&&d[0]===h)&&a.push({words:d,prefix:!1})}return a}const yn=(h,s,a)=>{if(h.has(s))return!0;if(a){for(const n of h)if(n.startsWith(s))return!0}return!1};function R(h,s){return s.some(a=>a.words.every(n=>yn(h,n,a.prefix)))}function _n(h,s,a,n=fn){const l=[...new Set(E(s))];if(!l.length)return[];const d=l.map(o=>wn(o,a)),t=[];for(const o of h){let c=0;for(const b of d)R(o.title_t,b)&&(c+=F.title),R(o.chain_t,b)&&(c+=F.chain),R(o.body_t,b)&&(c+=F.body);let u=null,m=0;o.heads.forEach((b,e)=>{let v=0;for(const S of d)R(b.t,S)&&(v+=F.heading);v>m&&(m=v,u=e)}),c+=m,c>0&&t.push({slug:o.slug,title:o.title,chain:o.chain,heading:u==null?null:o.heads[u].text,score:c,order:o.order})}return t.sort((o,c)=>c.score-o.score||o.order-c.order),t.slice(0,n).map(({order:o,...c})=>c)}function Tn(h){const s=new Map;for(const a of h)for(const n of a.keys||[])s.has(n)||s.set(n,a.slug);return s}function jn(h,s){const a=String(h||"");if(!a)return null;if(s.has(a))return{key:a,slug:s.get(a),fallback:!1};const n=a.split("/");for(;n.length>1;){n.pop();const l=n.join("/");if(s.has(l))return{key:a,slug:s.get(l),fallback:!0}}return null}const Sn=["start","shell-frame","shell-account","shell-help","shell-feedback","shell-whatsnew","shell-users","shell-users-lists","shell-apps","shell-claude","tracker","tracker-invoicing","tracker-invoicing-stock","tracker-invoicing-ontrack","tracker-job","tracker-add-job","tracker-import-jobs","tracker-import-estimate","tracker-conflict","tracker-labour","tracker-statuses","tracker-budget","tracker-monthly","tracker-financials","tracker-financials-import","tracker-financials-settings","estimator","estimator-editor","estimator-library","estimator-handovers","estimator-settings","crm","crm-pipeline","crm-pivot","crm-deal","crm-contacts","crm-activities","crm-settings","automations","automations-approvals"],xn={pages:Sn},En={claim:"invoice",claims:"invoice",invoice:"claim",invoices:"claim",invoicing:"claim",rate:"labour rate",overhead:"on track",stale:"re-price",reprice:"re-price, stale",kit:"assembly",kits:"assembly",assembly:"kit",deal:"opportunity",deals:"opportunity",opportunity:"deal",opportunities:"deal",pl:"profit loss, financials",profit:"financials",loss:"financials",xero:"financials import, import a month",ontrack:"on track",breakeven:"on track",hours:"labour",timesheet:"labour hours, ascora",ascora:"labour",lists:"lists, job types",jobtype:"job type, lists",status:"statuses",statuses:"status",estimate:"estimator",quote:"estimator, estimate",price:"estimator, re-price",contact:"contacts",client:"company, contacts",customer:"company, contacts",approve:"approvals",workflow:"automations",rule:"automations",bell:"notifications",alert:"notifications",bug:"feedback",request:"feedback",login:"signing in, getting started",signin:"signing in, getting started",password:"signing in, getting started",access:"users, views",permission:"users, views",role:"users",invite:"users",claude:"connected apps, claude",stock:"stock materials",materials:"stock",wizard:"adding a job",csv:"import, export",budget:"budget, opex",opex:"budget"},An={map:En},Ln=Object.assign({"./pages/automations-approvals.md":be,"./pages/automations.md":fe,"./pages/crm-activities.md":ve,"./pages/crm-contacts.md":ke,"./pages/crm-deal.md":we,"./pages/crm-pipeline.md":ye,"./pages/crm-pivot.md":_e,"./pages/crm-settings.md":Te,"./pages/crm.md":je,"./pages/estimator-editor.md":Se,"./pages/estimator-handovers.md":xe,"./pages/estimator-library.md":Ee,"./pages/estimator-settings.md":Ae,"./pages/estimator.md":Le,"./pages/shell-account.md":Ce,"./pages/shell-apps.md":Oe,"./pages/shell-claude.md":Me,"./pages/shell-feedback.md":Ie,"./pages/shell-frame.md":Be,"./pages/shell-help.md":$e,"./pages/shell-users-lists.md":Fe,"./pages/shell-users.md":Re,"./pages/shell-whatsnew.md":Pe,"./pages/start.md":Ue,"./pages/tracker-add-job.md":ze,"./pages/tracker-budget.md":De,"./pages/tracker-conflict.md":He,"./pages/tracker-financials-import.md":We,"./pages/tracker-financials-settings.md":Ne,"./pages/tracker-financials.md":Ge,"./pages/tracker-import-estimate.md":Ye,"./pages/tracker-import-jobs.md":qe,"./pages/tracker-invoicing-ontrack.md":Xe,"./pages/tracker-invoicing-stock.md":Je,"./pages/tracker-invoicing.md":Ke,"./pages/tracker-job.md":Qe,"./pages/tracker-labour.md":Ve,"./pages/tracker-monthly.md":Ze,"./pages/tracker-statuses.md":en,"./pages/tracker.md":nn}),D="shell",Cn=2;let B=null;function On(){if(B)return B;const h=Date.now(),s=new Map;for(const[l,d]of Object.entries(Ln)){const t=l.replace(/^.*\/([^/]+)\.md$/,"$1");try{const o=ln(d,t),c=un(o.body,t,o.bodyLine);s.set(t,{slug:t,...o.meta,blocks:c,headings:pn(c),body:mn(c)})}catch(o){console.warn(`help: ${o&&o.message?o.message:"a page did not parse"}`)}}const a=(xn.pages||[]).filter(l=>s.has(l));for(const l of[...s.keys()].sort())a.includes(l)||a.push(l);const n=a.map(l=>s.get(l));return B={pages:n,bySlug:s,byKey:Tn(n),index:kn(n),buildMs:0},B.buildMs=Date.now()-h,B}const ce=new Set;let y=null;const Mn={id:"help",kind:"dialog",open(h,s){if(y)return y.show(s||{}),y.api;const a=h,n=On(),l=document,d=window.SBA.viewkit.el,t=(i,r)=>d(i,r),o=i=>l.createTextNode(String(i)),c=(i,r,p)=>{const g=t(i,r);return g.textContent=String(p),g},u=(i,r,p)=>{const g=c("button",r,i);return g.type="button",g.addEventListener("click",p),g},m=Array.isArray(a.tools)?a.tools.slice():[],b=a.member||null,e={handle:null,mode:"centre",slug:null,key:null,fallback:!1,unresolved:null,notice:!1,back:[]},v=()=>y===e&&a.live();function S(i){if(i.tool!==D&&!m.includes(i.tool))return!1;const r=b&&Array.isArray(b.views)?b.views:[];return(i.views||[]).every(p=>p==="admin"?!!b&&b.role==="admin":p==="group-admin"?!!b&&b.role==="admin"&&b.scope==="group":r.includes(p))}const x=t("div","hp-root"),k=t("div","hp-top"),N=u("Back","btn hp-back",()=>me()),w=t("input","hp-search");w.type="search",w.placeholder="Search help",w.ariaLabel="Search help",w.autocomplete="off";const pe=u("Close","btn hp-close",()=>I());k.append(N,w,pe);const T=t("div","hp-results");T.hidden=!0,T.role="listbox";const G=t("div","hp-crumb"),A=t("div","hp-body"),Y=t("div","hp-foot"),q=u("All help","btn hp-all",()=>{$(),C(null)}),X=u("Copy link","btn hp-copylink",()=>ge()),J=u("Send feedback","btn hp-feedback",()=>K()),P=t("span","hp-updated"),_=t("input","hp-copybox");_.readOnly=!0,_.hidden=!0,_.ariaLabel="The link to this page",Y.append(q,X,J,P),a.env&&a.env.demo&&(J.hidden=!0),x.append(k,T,G,A,Y,_);function I(){e.handle&&e.handle.close()}function K(){I();try{a.feedback()}catch{}}function $(){e.back.push(e.mode==="page"?{mode:"page",slug:e.slug,notice:e.notice}:{mode:"centre",unresolved:e.unresolved})}function me(){const i=e.back.pop();i&&(i.mode==="page"?L(i.slug,i.notice):C(i.unresolved))}function Q(){N.hidden=e.back.length===0;const i=e.mode==="page";X.hidden=!i,P.hidden=!i,q.hidden=!i,_.hidden=!0,x.dataset.mode=e.mode,x.dataset.slug=i?e.slug:""}function V(i){const r=String(i||"").split(",").map(p=>p.trim()).filter(Boolean);G.replaceChildren(...r.map((p,g)=>c("span",g===r.length-1?"hp-crumb-seg hp-crumb-last":"hp-crumb-seg",p)))}function L(i,r,p){const g=n.bySlug.get(i);if(!g){C(i);return}e.mode="page",e.slug=i,e.notice=!!r&&!S(g),V(g.chain);const M=[];if(e.notice&&M.push(c("p","hp-notice",`You do not have this tool. Ask ${g.ask}.`)),M.push(...gn(g.blocks,{el:t,text:o,onHelp:f=>{$(),L(f,!0)},onScreen:(f,j)=>{I(),a.nav.go(f,j)}})),A.replaceChildren(...M),P.textContent=`Updated in ${g.reviewed}`,Q(),A.scrollTop=0,p){const f=[...A.querySelectorAll("h3, h4, h5")].find(j=>j.textContent===p);f&&typeof f.scrollIntoView=="function"&&f.scrollIntoView({block:"start"})}}function Z(i){const r=t("ul","hp-list");for(const p of i){const g=t("li");g.append(u(p.title,"hp-link hp-page",()=>{$(),L(p.slug,!0)})),g.lastChild.dataset.slug=p.slug,r.append(g)}return r}function ee(i){const r=n.pages.filter(g=>g.tool===i);if(!r.length)return null;const p=t("section","hp-tool");return p.dataset.tool=i,p.append(c("h4","hp-tool-h",String(r[0].chain).split(",")[0].trim()),Z(r)),p}function C(i){e.mode="centre",e.slug=null,e.notice=!1,e.unresolved=i||null,V("All help");const r=[];if(i){const f=t("div","hp-missing");f.append(c("p","","No help page for this screen yet."),c("small","hp-key",String(i))),r.push(f)}const p=t("section","hp-group hp-mine");p.append(c("h3","","Your tools"));for(const f of m){const j=ee(f);j&&p.append(j)}r.push(p);const g=[];for(const f of n.pages)f.tool!==D&&!m.includes(f.tool)&&!g.includes(f.tool)&&g.push(f.tool);if(g.length){const f=t("details","hp-group hp-others");f.append(c("summary","","Other tools"),c("p","hp-muted","Pages for tools you do not have"));for(const j of g){const ae=ee(j);ae&&f.append(ae)}r.push(f)}const M=n.pages.filter(f=>f.tool===D);if(M.length){const f=t("section","hp-group hp-platform");f.append(c("h3","","The platform"),Z(M)),r.push(f)}A.replaceChildren(...r),Q(),A.scrollTop=0}let O=[];function ne(){const i=w.value;if(i.trim().length<Cn){O=[],T.hidden=!0,T.replaceChildren();return}if(O=_n(n.index,i,An.map||{}),O.length)T.replaceChildren(...O.map(r=>{const p=t("button","hp-result");return p.type="button",p.role="option",p.dataset.slug=r.slug,p.append(c("span","hp-result-t",r.title),c("span","hp-result-c",r.heading?`${r.chain}: ${r.heading}`:r.chain)),p.addEventListener("click",()=>te(r)),p}));else{const r=t("p","hp-none");r.append(o(`Nothing found for ${i.trim()}: try another word`+(a.env&&a.env.demo?".":", or "))),a.env&&a.env.demo||r.append(u("send feedback","hp-link",()=>K())),T.replaceChildren(r)}T.hidden=!1}function U(){w.value="",ne()}function te(i){U(),$(),L(i.slug,!0,i.heading)}w.addEventListener("input",ne),w.addEventListener("keydown",i=>{i.key==="Enter"&&O.length&&(i.preventDefault(),te(O[0]))});function ge(){if(e.mode!=="page")return;const i=location.origin+location.pathname+"?help="+e.slug,r=()=>{if(v()){_.value=i,_.hidden=!1;try{_.focus(),_.select()}catch{}}};let p=null;try{p=navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(i):null}catch{p=null}if(!p){r();return}p.then(()=>{v()&&a.toast&&a.toast.show("Link copied.",!0)},r)}function z(i){if(e.back=[],e.key=i.key||null,e.fallback=!1,e.unresolved=null,i.slug!=null){const r=String(i.slug);ue.test(r)&&n.bySlug.has(r)?L(r,!0):C(r||"?")}else if(i.key){const r=jn(i.key,n.byKey);r?(e.fallback=r.fallback,r.fallback&&!ce.has(r.key)&&(ce.add(r.key),console.warn(`help: fallback ${r.key} to ${r.slug}`)),L(r.slug,!1)):C(i.key)}else C(null);if(U(),e.handle)try{w.focus()}catch{}}const se=Object.freeze({close:I,isOpen:()=>y===e,show:i=>{y===e&&z(i||{})},state:()=>({open:y===e,mode:e.mode,key:e.key,slug:e.slug,fallback:e.fallback,unresolved:e.unresolved,notice:e.notice,back:e.back.length,pages:n.pages.length,buildMs:n.buildMs})});e.show=z,e.api=se,y=e,z(s||{});let ie=()=>{};e.handle=a.modal.open({title:"Help",size:"lg",content:x,canClose:()=>w.value?(U(),!1):!0,onClose:()=>{y===e&&(y=null);try{ie()}catch{}}});try{const i=a.onLeave(()=>I());typeof i=="function"&&(ie=i)}catch{}return se}};export{Mn as default};
