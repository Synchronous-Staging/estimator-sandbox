const we=`---
keys:
  - automations/approvals
  - automations/runs
title: Approvals and the run log
chain: Automations, Approvals
tool: automations
views:
  - automations
ask: a group admin
reviewed: v3.59.1
sources:
  - src/modules/automations/screens/inbox.js
  - src/modules/automations/screens/runs.js
  - src/modules/automations/lib/engine.js
---
# Approvals and the run log

When an automation wants to email a client, or to set up a deal's Delivery folder in Drive, it stops and asks a person
first. The Approvals tab is where you answer. SyncOS never sends an email itself: approving opens it in your own Gmail,
ready to send, and you send it from there. The tab's name shows a count when something is waiting for you.

## The three lists

- **Pending for me**: the approvals you are named on.
- **All pending**: everyone else's. Anyone with the Automations view can decide these too, for example when the person
  asked is away.
- **Decided**: what has been approved, skipped or has expired. Approved emails not yet marked as sent stay at the top.

An email card shows the deal (click it to open the deal), the automation, who is asked, how long it has waited, the date
to answer by and any reminders sent. Below that are the **To**, **Subject** and **Body** of the email.

## Answering an approval

- **Approve and open in Gmail**: records your approval and opens the email in a new Gmail window. Check it and send it
  there.
- **Edit then open**: change the To, Subject or Body first, then **Approve and open in Gmail**. The card notes that it
  was edited.
- **Skip**: the email is not sent and the run stops. Add a note if it helps; the deal's history says who skipped it.
- **I sent it**: press it once you have sent the email from Gmail, so the record shows it went. If you closed the
  window, **Open in Gmail again** opens the draft once more.

If your approval cannot be recorded, a message says why and no Gmail window stays open.

## A Delivery folder approval

A Delivery folder card shows the **Folder** to be made, where it **Goes in**, the **Template** and, under **Moves**, the
tender folder that will move into it. A **Note** comes first when the deal is not linked to its tender folder and one
found by its name will be used. The built-in Delivery folder automations ask the deal owner and the job PM; either can
answer.

- **Approve**: nothing opens. SyncOS makes the folder and moves the tender folder; the run log shows the work.
- **Skip**: the folder is not made and the run stops. Add a note if it helps.

There is no edit and no **I sent it**. If the deal is reopened before anyone answers, the approval is withdrawn.

## When nobody answers

An approval waits three days by default; its automation can set a different wait. If nobody answers in time, the
automation either reminds the approver and keeps waiting (reminders stop after the third), or skips, so the step after
it does not run, as its builder says.

## Reading the run log

The Run log tab lists every run, newest first. Filter it by app with the chips, or pick one automation from
**Every automation**. Opened from a deal, it shows that deal's runs only; **Show every record** clears that.

Each run shows when it started, its state (Queued, Running, Waiting, Waiting for approval, Working in Drive, Done,
Failed or Cancelled), the automation, a link to the deal and the last thing it did. A run waiting for an approval has
**Open approval**. **Steps** opens the run's steps, one line each with its time and what happened; **Hide steps** closes
them.

A run that is queued, waiting, waiting for approval or working in Drive has **Cancel**. Confirm with **Cancel the run**
(or **Keep it**): it stops there and its approval expires. Drive work already done stays done.

## How a Budget Tracker or Chat run shows

A run started by the invoicing schedule has no deal: it shows the job number and month instead ("Job" then the number
and the month; a month change shows the branch and month, and a big import how many lines changed at once). A Chat step reads **Waits** with "Chat: sending to ..." for a minute or two while the message goes,
then **Would do** with "Sent a Chat message to ...", or the reason it was skipped or failed. See
[Chat messages from automations](?help=automations-chat).

## How a Drive run shows

- **Working in Drive**: the folders are being made or moved. If Google Drive is busy, SyncOS tries again by itself,
  waiting longer each time, before it gives up.
- **Waiting** with "Drive is switched off": a folder someone asked for waits until Drive is switched on.
- **Waiting** for another Drive run on the same deal to finish first.
- **Done**: the last line says what was made or moved. **Failed**: the reason, in words, and a notification goes to the
  deal owner and the people who hold Automations.

## Related

- [Automations](?help=automations)
- [An opportunity](?help=crm-deal)
- [Notifications](?help=shell-notify)
- [Chat messages from automations](?help=automations-chat)
`,fe=`---
keys:
title: Chat messages from automations
chain: Automations, Chat messages
tool: automations
views:
  - automations
ask: Tom
reviewed: v3.59.1
sources:
  - src/modules/automations/screens/chat.js
  - src/modules/automations/screens/chat-fields.js
  - src/modules/automations/lib/chat.js
---
# Chat messages from automations

An automation can send a Google Chat message with the action **Send a Chat message**. The message comes from a Chat app
called **SyncOS**, never from a person's account, and goes to the people you pick, to a role such as Finance, or to an
approved Chat space such as Invoicing. It works on any automation: the Budget Tracker's triggers (a claim's status
changes, a month is closed) and the CRM's alike.

## Adding the SyncOS app once

SyncOS cannot start a direct chat with you by itself. To get direct messages, open Google Chat, choose **New chat**,
then **Find apps**, search for **SyncOS**, open it and send **hi**. It answers with one line, and from then on SyncOS can
reach you. Until you do, a message meant for you fails with "has not added the SyncOS app in Chat yet"; it shows in the
run history, and a message to a space still goes.

To use a space, add the SyncOS app to it in Google Chat (the space name, **Apps & integrations**, **Add apps**). The
space then appears on the Chat card waiting for approval.

## The Chat card

The **Chat messages** card on the Automations tab says in one line whether Chat is **Off**, **On hold** (Tom's message
hold), in **Test** (only the test list receives) or **Live**. Anyone with the Automations view can switch it **Off**;
only Tom can turn it to Test or Live, and staging can never go live.

- **Spaces**: those waiting for approval, those approved and those the app was removed from. Approving a space is a
  declaration of what everyone in it may see: tick **Invoicing** or **CRM**, and the branches. The sentence under the
  ticks says it in words. SyncOS cannot see who is in a space; who is in it is kept in Google Chat, so keep a space
  cleared for invoicing to the people who should see invoicing figures.
- **Direct messages**: each person who has said hi, linked to their SyncOS login. If Google reports an address that
  matches no login (the other domain), Tom links it to the right person once.
- **Today**: messages sent, waiting, skipped and failed. **Send me a test** sends a fixed test line to your own chat.

## Building the step

Add **Send a Chat message** with the **+** between blocks. Choose **To** from three tabs: **People** (every SyncOS
member; marked "reachable in Chat" once they have said hi, and "not in Chat yet" until then: a message to them fails
until they add the app), **Roles** (Finance means everyone with the Financials view; also everyone with the
Invoicing view, the branch's admins, the Automations holders, all admins) and **Spaces** (approved spaces only). Up to
ten recipients.

Write the **Message** once. **Insert field** adds a blank such as {job_name}, {month} or {claim_value}, filled in when
the message is sent; {link} adds a link that opens the job in SyncOS. A field this trigger does not have is underlined
and the save is refused. Chat's own formatting works: a word between stars is bold, between underscores italic, between tildes struck out.
Mentions are not allowed.

The **Preview** beside it shows the message exactly as it would arrive, over the latest matching change or an example,
then **Would go to**, **Would fail** and **Would be skipped**, each with the reason. **Not again within** stops a second
message about the same record to the same person within that many minutes.

## Why a message was skipped

- "Chat is switched off" or "on hold": nothing was sent, and nothing is sent later either.
- "they cannot see this in SyncOS": the person (or someone a role named) cannot open that job or deal in the app.
- "everyone it names who can see this is already covered by": a role whose people are all reached by an earlier
  recipient in the same step (a person or another role); each person gets one message.
- "the space is not cleared for": the space is not approved for that view or branch.
- "test mode: not sent to": Chat is in Test and they are not on the test list.
- "more than 20 Chat messages in 10 minutes": the flood guard; the automation stays on.

SyncOS does not read replies in Chat.

## Related

- [Automations](?help=automations)
- [The invoicing schedule](?help=tracker-invoicing)
- [Notifications](?help=shell-notify)
`,be=`---
keys:
  - automations/list
  - automations/edit
title: Automations
chain: Automations
tool: automations
views:
  - automations
ask: a group admin
reviewed: v3.59.1
sources:
  - src/modules/automations/index.js
  - src/modules/automations/screens/list.js
  - src/modules/automations/screens/drive.js
  - src/modules/automations/screens/builder.js
  - src/modules/automations/screens/banner.js
  - src/modules/automations/lib/engine.js
  - src/modules/automations/screens/chat.js
---
# Automations

An automation does a routine job for you when something happens: a deal moves stage, a date passes, someone is
mentioned, a claim on the invoicing schedule becomes Ready to invoice. Each one starts with a trigger (When), then runs its blocks in order: conditions (If), branches (If / else),
delays (Wait), approvals (Approve) and actions (Do). Nothing reaches a client without a person: an approved email opens
in your own Gmail, ready for you to send.

## The Drive automation card

At the top of the list (with All apps or CRM chosen), this card controls how SyncOS makes and moves deal folders in
Google Drive.

- **The switch**: on, SyncOS makes and moves the folders, one deal at a time. Off, nothing is made or moved. A folder a
  person asks for on a deal page waits, counted in the line "requests waiting for Drive to be switched on", and runs
  once the switch goes on. An automation that fires while Drive is off skips its folder step, so
  switching on never catches up on old deals. Switching on is refused until an admin's Drive setup check has passed.
- **The tender folder**: the stage at which a deal gets its tender folder. **Also when a deal skips past it** catches a
  deal that jumps from an earlier stage to a later one. A change saves at once, and the automation's name follows the
  stage. If that automation is on or has runs under way, the save is refused and **Cancel its runs and save** appears.
- **The worker's limits** (folded): how fast the Drive worker goes and how often it retries a failed try. Each box shows
  its allowed range; leave them alone unless asked.

### The Drive automations

The card lists them with their On or Off state; click a name to open it, and turn each on in the list when you are
ready.

- **Quote folder at** (the stage): makes the deal's tender folder from its template, or links the one already made.
- **Delivery folder when Won**: for a won deal with its job number, the deal owner or the job PM approves, then SyncOS
  makes the Delivery project folder and moves the tender folder into it.
- **Delivery folder when the job number arrives**: the same, when the job number is typed after the win.
- **Lost: move the quote folder to Lost** moves a lost deal's folder into a Lost folder (where: see Drive folders);
  **Reopened: move the quote folder back** returns it when the deal is reopened.
- **Drive: quote folder on request** and **Drive: Delivery folder on request** are system ones behind the deal page's
  buttons, always on.

Which template and folder each deal uses is set by the folder rules: see [Drive folders](?help=crm-drive).

## The Chat messages card

Under the Drive card: whether Chat messages are Off, On hold, in Test or Live, and where SyncOS can post. See
[Chat messages from automations](?help=automations-chat).

## The Budget Tracker's triggers

An automation can start from a change to the invoicing schedule. Each has its own filters; leave one empty for "any".

- **Claim status changed**: a claim's status for a month changes, **From** one status **To** another (Any status, or
  one from the status list), in a **Branch**. A renamed status does not count as a change.
- **Claim value changed**: a claim's Forecast or Actual dollars change. A claim moved to another month shows as two
  changes.
- **Month closed or reopened** and **Job status changed**, each with their filters.
- **Many lines changed at once**: when one save or import changes more than twenty lines, SyncOS sends this ONE event
  instead of one for each line.

A change made by a load or the release chain (no person signed in) starts nothing. A change through Claude or the
assistant does, and says so. Conditions are not offered on a Budget Tracker automation yet: use the trigger's filters.

## The list

The chips filter by app, each with a count. Each row has:

- **The switch**: On or Off. Turning on a rule based on time says how many deals are already past it; those are picked
  up only when they next enter the stage.
- **The name**: opens the builder. The line under it says what starts it, how many steps follow and whether it asks
  for an approval.
- **Pills**: the app; **Drive** for a Drive automation; **later** when it uses an app that is coming later (those steps
  are skipped); **system** for a built-in one, which is always on and shows **View** instead of Edit.
- **Approvals waiting** opens the Approvals tab. **Last run** and the run count, which opens its run log.
- **Edit**, **Duplicate** (the copy starts off) and **Delete**, which cancels its queued and waiting runs; the run log
  keeps its history.

## Pausing everything

The line under the heading says the engine is running and checks every minute. **Pause** stops every automation until
someone presses **Resume** on the banner, which says who paused it and why. Events while paused are skipped, not run
later.

## Building an automation

**New** opens the builder: the name, the **App**, an **On** box, the **Blocks** and **List** switch, and a note.
**Blocks** shows the flow; press a **+** between blocks to add a trigger, a Logic block (Condition, Branch, Delay, Ask
for approval) or an app's action, and click a block to set it in **Block settings**. **List** shows the same steps as
numbered operations.

A client email, and making a Delivery folder, always need a person: an **Ask for approval** block goes in just before
it. Choose **Who approves** (the deal owner, the job PM, the owner and the PM, the branch editors or named people), how
many days to wait, and **Then**: remind them and keep waiting, or skip, so the next step does not run. The strip at the
top says **Ready** or lists what is missing, and **Save** waits until it is clear.

**Send a Chat message** is offered on every automation: see [Chat messages from automations](?help=automations-chat).

**Test run** shows, for one of your deals, what each block would do. Nothing is created, moved or sent. Changing the
trigger or steps of an automation that is on asks first: **Cancel the runs and save**, or **Keep editing**.

## Related

- [Approvals and the run log](?help=automations-approvals)
- [Chat messages from automations](?help=automations-chat)
- [Drive folders](?help=crm-drive)
- [An opportunity](?help=crm-deal)
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
ask: a group admin
reviewed: v3.52
sources:
  - src/modules/crm/screens/activities.js
  - src/modules/crm/screens/forecast.js
  - src/modules/crm/screens/reports.js
---
# Activities, Forecast and Reports

Three pages that each answer one question: what do I need to do, what is likely to land and when, and how are we
winning and losing.

## Activities: what is on my plate

Your open activities grouped as **Overdue**, **Today**, **This week** and **Later**, then the open deals with
**No next activity** (each with **Schedule** to plan one). The owner select starts at Me and can show everyone or one
colleague; the type buttons narrow it to calls, meetings, emails, to dos, site visits or deadlines. Tick an activity to mark it
done, change its date to reschedule it, and click through to its deal. **+ Activity** schedules a new one. Your
notifications from automations sit at the top, with **Mark read** and **Mark all read**.

## Forecast: what is likely to land

Open deals as columns by expected close month, for the rest of this financial year or the next six months. An
**Overdue close** column comes first when any close date has passed, and **Later** holds everything after the range or
with no close date. Narrow it by branch, business unit or salesperson, and switch **By month** to **By month and stage**
for a stacked bar per month. Drag a card to another month, or use its **...** menu, to move its expected close date
(never to a day before today).

## Reports: winning and losing

The Win/loss report compares won with lost deals for your search and a closed period: the win rate by count and by
value, the average days to win and to lose, results by salesperson, branch and month, the lost reasons, and the biggest
wins and losses. A Status filter is set aside here, because the report always compares both. Click any row, or
**Open all in the List**, to see the deals behind it.

## Related

- [An opportunity](?help=crm-deal)
- [Pivot and Graph](?help=crm-pivot)
- [Notifications](?help=shell-notify)
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
ask: a group admin
reviewed: v3.52
sources:
  - src/modules/crm/screens/contacts.js
  - src/modules/crm/screens/clients.js
  - src/modules/crm/screens/dialogs-records.js
---
# Companies and people

Contacts holds the companies you quote to and the people who work there. Switch between **Companies** and **People** at
the top, search by name, company, email, phone, tag or city, and show them as **Cards** or a **List**.

## Adding a company or a person

**New** adds a company (name, kind, phone, suburb, state) or a person (name, company, job title, email, mobile),
depending on the tab you are on. A company typed into a new deal's Customer box is created for you as well. **Edit** on
a company or person page changes the details, including a company's ABN, website, address and tags. An editor can also
type a company's Odoo partner number, which pairs it with the old Odoo record.

## A company's page

The row of tiles at the top counts the company's opportunities, won deals, activities and estimates; click one to open
them. **Jobs** lists the customer's Ascora jobs by status, latest first; it is refreshed when an editor opens the page,
so a view-only member may see "refreshed by an editor" until then. **Invoiced** needs the Financials view: it shows
what was invoiced ex GST over twelve months from Xero, or the tracker's claims when the Xero import has not run for
that client. The tabs list its **People**, **Sites and addresses**, **Opportunities** (including deals where it is one
of several tenderers) and **Notes**. **+ New opportunity** starts a deal with the company as customer.

## A person's page

The same pattern, for one person, with the tabs **Opportunities**, **Colleagues** and **Notes**. Jobs and Invoiced are
shown on the company page.

## History

Both pages end with **History**: notes, finished activities and every changed field, with who changed it, newest first.
**Log note**, **Log email**, **Log call** and **Activity** record what happened or plan what comes next.

## Linking a company to a deal

On the deal's page, the customer is the primary client and **Manage** under Clients adds more companies the job is
quoted to. The deal then shows on each company's page.

## Related

- [The CRM](?help=crm)
- [An opportunity](?help=crm-deal)
`,Te=`---
keys:
  - crm/deal
title: An opportunity
chain: CRM, An opportunity
tool: crm
views:
  - crm
ask: a group admin
reviewed: v3.52
sources:
  - src/modules/crm/screens/deal.js
  - src/modules/crm/screens/clients.js
  - src/modules/crm/screens/dialogs.js
  - src/modules/crm/screens/dialogs-records.js
  - src/modules/crm/lib/feed.js
  - src/modules/crm/lib/drive.js
---
# An opportunity

An opportunity's page holds everything about one deal: what it is worth and how sure you are of it, who it is quoted
to, the estimates behind the price, what is planned next and everything that has happened so far. Open it by clicking a
card, a row or a calendar entry in any view.

## The top of the page

The head shows the title and the priority stars, with **Won** and **Lost** while the deal is open (**Reopen** or
**Restore** once it is closed), and a **...** menu: **Edit title**, **Duplicate**, **+ Activity** and, for an admin,
**Delete**. Under it, the job strip holds the job number: type the Ascora job number there and press Enter. Only an
admin can clear a job number once it is set. Beside it, the Odoo lead box keeps the old Odoo lead number, as a link. A
Switchboards deal may offer **Assign SOA number**. The journey strip below shows the stages; click one to move the deal.

## Won and Lost

**Won** asks for the won value, the client's acceptance reference, the Delivery PM, the kick-off date and the date won,
and shows the job number (type it on the deal first). With estimates linked it asks which revision the client
accepted, and when several clients were quoted it asks who awarded it: that client becomes primary and the others are
marked Lost. After **Mark won**, a green banner names the next step: ask Claude: /sc-job-won.

**Lost** asks for a reason (some need a note, and Lost to competitor asks who won it) and the date lost. A lost deal is
archived. Use Lost rather than Delete, so the deal still counts in the win/loss report; a deal loaded from Odoo, or a
won deal, cannot be deleted. **Reopen** or **Restore** puts the deal back in the stage it was in.

## The value

The Estimates panel decides the expected revenue. With estimates linked, choose **Max**, **Min** or **Avg** of the
included estimates, or **Manual**: a figure you type or a percentage of an estimate (it follows the estimate when it
changes). **+ Link estimates** finds estimates by name, client or job number. Each linked estimate has
**Include in value**, a revision select, a short description, **Unlink** and **Open the Estimator**. You need the
Estimating view to see an estimate's figures.

## The summary

Change the probability (always typed: stages set no default), the expected close date, the salesperson, the branch, the
business unit, the job type, the tags and the source here. The job type comes from the Budget Tracker's list for the
deal's branch (Switchboards uses ACT's); changing the branch clears a job type the new branch does not have. The summary
also shows the weighted value, the time in stage, the site, the customer and contacts. A stale deal shows a banner with
**Schedule an activity**.

## Clients and related deals

**Clients** lists every company the job is quoted to, with the contact, the quoted value and a status. **Manage** adds a
client, **Set primary** changes the primary customer and **Remove** takes one off. **Related opportunities** links
other deals on the same project, a follow-on or a duplicate: **+ Link**, then search.

## Activities, notes and the timeline

**Planned** lists the open activities: mark one **Done** and it moves to the timeline. **+ Activity** schedules a call,
email, meeting, site visit, to do or deadline. **+ Note** writes an internal note: type / for commands and @ to mention
a colleague. The **Timeline** shows every note, logged call or email, finished activity and change, newest first.

## Linked across tools and automations

**Linked across tools** shows the estimates, the Drive folder, and the Ascora quote and tracker job once the deal is
won. The Drive line and its buttons have their own page, [Drive folders](?help=crm-drive). When an automation needs your
approval for a follow-up email, the Automations panel shows it with **Approve and open in Gmail**, **Edit then open**
and **Skip**; see [Approvals](?help=automations-approvals).

## Phone

The page is one column, with Won, Lost and + Activity in a bar at the bottom.

## Related

- [Drive folders](?help=crm-drive)
- [Pipeline, List and Calendar](?help=crm-pipeline)
- [Companies and people](?help=crm-contacts)
- [The Estimator](?help=estimator)
`,Ae=`---
keys:
title: Drive folders
chain: CRM, An opportunity, Drive folders
tool: crm
views:
  - crm
ask: a group admin
reviewed: v3.56
sources:
  - src/modules/crm/screens/deal.js
  - src/modules/crm/lib/drive.js
  - src/modules/crm/screens/drive-rules.js
---
# Drive folders

SyncOS makes a deal's Google Drive folders: a tender folder while you price the job, and at Won a Delivery folder with
the quote folder moved inside it. The Drive line on the deal page shows where that is up to; Settings, then
**Drive folders**, holds the rules for which template is copied and where. The automations behind it are set up in
[Automations](?help=automations).

## The Drive line on a deal

It sits under **Linked across tools**. The first words say where the folder is: **Not created**,
**Quote folder created** or **Moved to the project folder**, with **Open in Drive** once there is one. Below is the
last thing that happened to the folder (made, found and linked, moved to Lost or back, or failed) with the time, and a
line on how folders are made here, such as on entering a stage, and the Delivery folder at Won after approval.

## What a tender folder holds

A tender folder copies its template's folders, with their names. Since v3.56 a template that is switched on copies its
files too, wherever they sit in the template, and each copy starts with the deal's name: a Switchboard tender for Forbes
Hospital gets **Forbes Hospital - SMS Estimating Tool May 2026.xlsx**. Today the Switchboard and NSW templates are switched on;
the ACT mechanical template still copies folders only until it is tidied. A file named DO NOT USE
is never copied. Asking again for a folder that exists finds the files already there and copies nothing twice, even if
the deal was renamed since. A copy you renamed or moved is not found again, so asking again puts a fresh copy beside it;
yours is kept. The history line counts what was made, for example "(9 folders, 3 files)".

## The buttons

An editor sees at most one button; a view-only member sees none.

- **Create tender folder**: an open deal with no folder. If the folder exists, or a request is already waiting, a
  message says so and nothing is made twice.
- **Add a package**: an open deal with a tender folder, for a job that is both mechanical and switchboard.
- **Set up the Delivery folder now**: a won deal with no Delivery folder. It stays greyed out, "needs the job number",
  until the Ascora job number is on the deal.

A lost deal offers nothing until it is reopened. A refusal shows its reason under the button.

## While SyncOS is working

The button gives way to a line. **Working** shows what Drive is doing, or says the work is queued behind other
automations: it will run. It also shows while a Delivery folder waits for its approval. **Waiting**, "Drive is switched
off", means your request is kept and runs once Drive is switched on; you need not ask again.

## Approving the Delivery folder

The deal owner, the job's PM or anyone with the Automations tool approves it in the deal's Automations panel. The card
lists the folder name, where it goes, the template and the quote folder it moves; a Note says when SyncOS will reuse a
folder named after the deal from the tenders folder. **Approve** makes it; **Skip** stops it for this deal, and the
button can ask again later. Anyone else sees who it is waiting for.

## When something goes wrong

A failed request shows as Failed in the Automations panel and on the Drive line, and the deal owner and everyone with
the Automations tool are notified. The message says why: usually a folder is missing or SyncOS cannot see it, two
folders share a name (pick one in Drive), the deal has no site name, or no checked rule fits its branch and business
unit. Fix it and press the button again. A message about the Drive sign-in or setup is one for an admin.

## Lost and reopened

When that automation is on, a lost deal's quote folder moves into a folder named Lost: at the top of the NSW tenders
folder for an NSW deal, otherwise at the root of its shared drive. A reopen can move it back. A deal with its Delivery
folder is never moved.

## The folder rules

Settings, then **Drive folders**, is open to every member. **Tender folders** and **Delivery folders** list rule cards:
the name, who it applies to (a branch, business unit, job type, one person's deals, or every deal), the **Template**,
where it is **Made in** or **Goes under**, and a status. **Access OK** means it is in use; **Checking access...** means
not used until SyncOS has checked both folders; **No access** gives the reason.

The starting rules are marked **Default**. ACT and Switchboards tenders go to the company's tenders folder, NSW tenders
to the NSW tenders folder, and a quote folder is looked for in its own branch's tenders folder. Each branch has a
Delivery rule.

An admin keeps the shared rules (**Add a shared rule**); any member but a view-only one can **Add my own rule** for the
deals they own, which wins over shared ones. A rule you may change has **Edit**, **Check again** and **Delete** (deals
then use the next rule that fits; folders made stay put). Paste the Drive links of the template and the destination. A
Delivery rule also names the project folder (it must carry {job}, the job number), the folders the quote folder moves
into, and whether it sits under a site folder. The most specific rule wins.

## Related

- [An opportunity](?help=crm-deal)
- [CRM settings](?help=crm-settings)
- [Automations](?help=automations)
`,je=`---
keys:
  - crm/pipeline
  - crm/list
  - crm/calendar
title: Pipeline, List and Calendar
chain: CRM, Pipeline
tool: crm
views:
  - crm
ask: a group admin
reviewed: v3.52
sources:
  - src/modules/crm/screens/pipeline.js
  - src/modules/crm/screens/board.js
  - src/modules/crm/screens/list.js
  - src/modules/crm/screens/calendar.js
  - src/modules/crm/screens/searchbar.js
  - src/modules/crm/screens/dialogs.js
  - src/modules/crm/lib/filter.js
---
# Pipeline, List and Calendar

These are three views of the same deals. The Pipeline is a board of cards by stage, the List is a table, and the
Calendar places deals on their expected close date. The search, the filters and the grouping carry across, so you can
switch view without losing what you were looking at.

## Searching and filtering

Type in the search bar and pick what to search: the opportunity title, customer, contact, salesperson, tag, site
address or job number. **Filters** opens three columns:

- **Filters**: My pipeline and Unassigned; a branch; a date period on Created, Expected close or Closed (this month,
  last quarter, this financial year and so on, or **Custom range...**); Open, Won, Lost or On hold; the flags Target,
  Stale, Overdue activity, No next activity and Close date passed; and Primary customer only.
- **Group by**: Salesperson, Branch, Business unit, Stage, Customer, City, Tag, Lost reason, Source or Project / site,
  and a date by year, quarter, month, week or day. **Add custom group** offers a few more.
- **Favourites**: **Save current search** with a name, tick **Default for me** to open the view with it, and choose
  **Shared with** Just me, My branch or Everyone. You can delete your own favourites.

**Add custom filter** builds rules of your own (a field, a test such as contains or between, and a value), matched all
or any, with nested groups; its fields include Job type, Job number (exact), Outcome and Drive folder. **Modify** shows
the whole search as rules you can edit or clear.

## The Pipeline

One column per stage, with its count, its value and a thin bar of the cards' activity: planned, due today, overdue or
none. Click a segment of the bar to show only those cards; click it again to clear. Use **-** to fold a column and click
a folded strip to open it again; **+** adds a deal straight into that stage. A long column shows **Load more**.

Drag a card to another column to change its stage, or use the card's **...** menu (Move to). Dropping on Lost or Won
opens its window first. If you group by Salesperson or Branch, the columns become people or branches, and a drop changes
that field instead. On a card, the stars set its priority and the dot opens its planned activities, where you can mark
one **Done** or schedule another. A card flagged stale has had no stage change and no activity for the company's stale
period.

**Board options** sets which fields the cards show, the density, your own stale days per stage (they only colour your
markers) and what the column totals show: Total value, Weighted value (the amount times the deal's probability) or My
stage weighting (your own weight per stage). These are saved for you alone; **Reset to standard** puts them back.

## The List

A table of the matching deals, open ones by default, with the Job type column among the standard ones. Click a heading
to sort; **Columns** picks the columns; **Export CSV** downloads the rows on screen. The strip above counts the rows
shown, open, stale and won. With a group-by, the rows fold into groups with a subtotal. Click a row to open the deal.

## The Calendar

**Month** or **Week**, with **< Prev**, **Today** and **Next >**. Deals sit on their expected close date, or choose
Created or Closed from the select. Drag an open deal to another day to move its expected close date; won and lost deals
stay put.

## New

**New** opens a quick add: title, customer (a new name creates the company), contact, site, branch, business unit, job
type (optional, from the branch's list), value, close date, salesperson, stage and tags. **Full intake...** adds the
job number and the tender closing date. As you type, possible related deals appear: link one as related, open it if it
is a duplicate, or mark it not related.

## Phone

The Pipeline shows one column at a time with a column picker, and cards move with their **...** menu. The List becomes
cards and the Calendar an agenda by day.

## Related

- [The CRM](?help=crm)
- [An opportunity](?help=crm-deal)
- [Pivot and Graph](?help=crm-pivot)
`,Se=`---
keys:
  - crm/pivot
  - crm/graph
title: Pivot and Graph
chain: CRM, Pivot
tool: crm
views:
  - crm
ask: a group admin
reviewed: v3.52
sources:
  - src/modules/crm/screens/pivot.js
  - src/modules/crm/screens/graph.js
---
# Pivot and Graph

Pivot and Graph summarise the deals your search matches, so you can see the pipeline by month, stage, salesperson or
branch without exporting it. Both use the same search bar as the other views, and the search's group-by sets the rows.

## The Pivot

Rows start as Created by month and columns as Stage. Click a header's + to split it by another field (up to three
levels per axis), and its - to collapse it. **Measures** picks one or more figures: expected revenue, weighted revenue,
count, average probability, average days to close or average days in stage. **Flip axes** swaps rows and columns;
**Expand all** and **Collapse all** open or close every level; **Download CSV** saves the grid. Click a measure heading
to sort by it. **Compare to** shows the previous period or previous year under each figure, and only works when the
search has exactly one date period.

## The Graph

Choose **Bar**, **Line** or **Pie** and one measure. The first group-by is the x axis and the second gives the series.
Bars and lines can be **Stacked**, lines **Cumulative**, and the order natural, descending or ascending. More than eight
series fold into Other. **Show table** lists the figures under the chart.

## Opening the deals behind a figure

Click any figure in the Pivot, or a bar, point or slice in the Graph, to open the List filtered to exactly those deals.

## Related

- [Pipeline, List and Calendar](?help=crm-pipeline)
- [Activities, Forecast and Reports](?help=crm-activities)
`,Ce=`---
keys:
  - crm/settings
title: CRM settings
chain: CRM, Settings
tool: crm
views:
  - crm
  - admin
ask: a group admin
reviewed: v3.52
sources:
  - src/modules/crm/screens/settings.js
  - src/modules/crm/screens/drive-rules.js
  - src/modules/crm/index.js
---
# CRM settings

Every member has the Settings tab. An admin sees two buttons at the top, **CRM settings** and **Drive folders**; anyone
else goes straight to Drive folders, the rules for each deal's Google Drive folders, which have their own page:
[Drive folders](?help=crm-drive). The CRM settings below are for admins. Every change saves when you leave the box, and
a refusal shows its reason under the control.

## The sections

- **Stale rule**: how many days with no stage change and no activity make a deal stale, for everyone, plus an optional
  number per open stage (blank uses the rule).
- **Drive folders**: **Open the Drive folder rules**, and for an Automations holder
  **Set the tender folder stage in Automations**, since the stage that makes the tender folder is set there.
- **Job numbers**: the switch to issue a job number when a deal is entered. It stays off while job numbers are typed
  from Ascora. Below it, **Seed the series** sets the next number of the job series.
- **SOA numbers (Switchboards)**: the switch to issue SOA numbers from the CRM, and **Seed the SOA series** to set the
  next number. The switch is refused until the series is seeded.
- **Reassign owner**: type the from and to e-mail addresses and a reason, then **Reassign**. It moves every deal, undone
  activity and company of one salesperson to another, with a history line on each deal, and the message counts them.
- **Branch grants**: give a member another branch to edit, or remove one. An editor edits their own branch's deals plus
  any branch granted here, at once.
- **Tags** and **Lost reasons**: rename, add or switch off (Active). A tag has a tone; a lost reason can need a note or
  name a competitor.
- **Business units**: add a unit to a branch and set the order they are listed in.
- **Stages**: rename a stage or choose whether it is folded on the board. Their order and meaning are fixed.
- **Automations**: how many CRM automations are on, with a link to them for an Automations holder.

## Related

- [The CRM](?help=crm)
- [Drive folders](?help=crm-drive)
- [Automations](?help=automations)
`,Ee=`---
keys:
title: The CRM
chain: CRM
tool: crm
views:
  - crm
ask: a group admin
reviewed: v3.52
sources:
  - src/modules/crm/index.js
  - src/modules/crm/lib/consts.js
  - src/modules/crm/screens/searchbar.js
---
# The CRM

The CRM is where the company keeps its sales work: every opportunity (a deal), the companies and people it is quoted to,
and the calls, meetings and notes that move it along. It has taken over from Odoo, which is no longer used for sales.
The stages are Odoo's, in the same order, so a deal reads the same here as it did there.

## The three kinds of record

- **Opportunities**: one per job you are pricing or chasing. Each has a value, a probability, an expected close date, a
  salesperson, a branch and business unit, a job type, tags, a site, its Drive folders and its own page with a timeline.
- **Companies**: builders, contractors, consultants and end users. One deal has a primary customer and can be quoted to
  more clients as well.
- **People**: the contacts at those companies. A deal names its contacts; a person's page shows every deal and activity
  they are part of.

## The stages

Deals move through the fourteen stages from Prospects to Lost. Won, In Progress, Completed and Lost are folded on the
board by default, because the board is for the work still open. Won and Lost each ask a few questions first (the won
value and acceptance, or the lost reason). A lost deal is archived: it leaves the board and comes back with the Lost
filter.

## Finding your way around

The tabs across the top are the views and pages: **Pipeline**, **List**, **Calendar**, **Pivot** and **Graph** are five
views of the same deals; **Contacts**, **Activities**, **Forecast** and **Reports** are pages of their own; and
**Settings** holds the Drive folder rules for everyone and the CRM settings for an admin. The word at the right of the
search bar says **live** while colleagues' changes are arriving as they happen, and **reconnecting** when the
connection has dropped for a moment.

## The search bar every view shares

Type in the search bar to search opportunities by title, customer, contact, salesperson, tag, site address or job
number; pick a suggestion and it becomes a chip. **Filters** opens the filters, the group-by and your favourites. Each
chip has an x to remove it, and Backspace in an empty box removes the last one. The search travels with you when you
switch views, lives in the page's link (so a pasted link opens the same search) and each view remembers the last search
you used on it. See [Pipeline, List and Calendar](?help=crm-pipeline) for the filters in detail.

## Who sees what

Anyone with the CRM view can open the CRM, and every CRM member sees every branch's deals. Changing them is limited by
branch. A VIEW ONLY member reads everything and cannot change anything. An editor changes the deals of their own
branch, plus any branch an admin has granted them in Settings, and can add a Drive folder rule of their own. An admin
also deletes deals and keeps the settings: the stale rule, the tags, the lost reasons, the business units, the stage
labels and the shared Drive folder rules.

## Related

- [Pipeline, List and Calendar](?help=crm-pipeline)
- [An opportunity](?help=crm-deal)
- [Companies and people](?help=crm-contacts)
- [CRM settings](?help=crm-settings)
`,Oe=`---
keys:
  - estimator/e
title: The estimate editor
chain: Estimator, An estimate
tool: estimator
views:
  - estimating
ask: a group admin
reviewed: v3.58
sources:
  - modules/estimator/MODULE.json
---
# The estimate editor

Opening an estimate from the list brings you here. The screen has three panes: the **Library** on the left (kits,
equipment, materials, labour norms and labour rates), the **estimate tree** in the middle, and the **detail** of the
selected item on the right. Drag the dividers to resize a pane. Your changes save to the server as you work; the line
in the header says when the last save landed.

## The header

- **The estimate name** (click to rename), the **Status** and the **Rev** chip, which opens the Revisions panel. The
  job number shows here only on a very wide screen; it is always in the job's Node info.
- **New**, **Open** (back to the list), **Import file** and **Export**, which copies the estimate file with every
  revision.
- **Re-price...**, **Send to tracker...** and **Hand to Claude** (see below), and **Library file** for your library.
- **Undo**, **Redo**, **Hide 0 qty**, **Cable calc** (a one-off cable sizing, not saved) and **Help**, the how-to
  guide in a new tab.

On a narrower screen the file actions fold into one **File** menu, and a button opens the Library as a drawer. On a
phone everything sits in **Menu**, and a tab bar at the foot switches between **Library**, **Estimate** and
**Detail**; dragging is off there, so use **Add**.

## Building the tree

Each row is a quantity and a name, and the totals roll up to the job at the top. **Drag** a kit, an equipment
template, a material or a labour norm from the Library onto a row (above, below or into it), or use **Add** on the
library row. A row's **+** menu adds child nodes, points components and cost lines, copies and pastes, saves to the
library, and sets the colour, section, package, board and **BMS mode**. Click a quantity or a name to change it.

In **Add points component...**, click a type to add all its points, or open its arrow, tick the points you want and
choose **Add selected points**.

## The detail tabs

Select a row, then use the tabs on the right: **Node info**, **Scope**, **BOM**, **Points**, **Summary**, **Packages**
and **Boards**. Summary, Packages and Boards are about the whole job.

- **Points**: **Add from library...** ticks points from any equipment type, and **Set wiring for all** gives every
  point of one type the same wiring type. Each part of a point has **edit** (a unit cost by hand), **change** (pick a
  price-book part instead: type its SKU or at least three letters of its name; the quantity per point stays) and
  **remove**; **+ part** adds another price-book part to the point. A picked part shows "picked", prices and re-prices
  like any other part and lands in the BOM, and replacing an unmatched part clears its warning. Choosing another field
  connection still replaces all the point's parts (a notice says how many you had chosen; Undo brings them back).
  The header names the equipment type the points came from and its version, for example "Type CHILLER-AIR-01 v2",
  with "(the standard type is now v3)" when an admin has saved the type since, and "(retired)" for a retired type.
  The estimate's points never change by themselves: a sent price never moves.
- **Manual BMS**: a row set to Manual lists its Engineering, Graphics and Commissioning hours in Node info, filled
  from the calculated values so the price does not move. Change the hours, **Add row**, or reset them with
  **Reset all to calculated**. Installation stays calculated.
- **Cable**: in an item's Electrical section, **Calculate...** sizes the cable; **Save to item** keeps it and
  **Add cable cost line** prices it. The Boards tab lists every item's cable. It is an aid, not a design certificate.

## Revisions, brands and re-pricing

The **Rev** chip lists every revision with who made it and its cost and sell. **Open read-only** shows an older one;
**New revision** copies the current one as the next and freezes the old. **Change brands...** on the job's Node info
and **Re-price...** both show a preview first; nothing changes until you apply, and each makes a new revision.

## Sending to the tracker

**Send to tracker...** asks for the job details and the plan (one job or one per section, the months and the spread),
then confirm. A draft becomes issued, the revision is frozen, and the tracker opens its import preview. A won, lost or
archived estimate cannot be sent.

## Handing an estimate to Claude

Once Claude is connected (see [Claude](?help=shell-claude)), **Hand to Claude** lets it edit the estimate you have
open. It is offered to an editor or admin on an estimate you are editing, not a restricted one; on a narrower screen
it is in the menu. Your changes are saved, your hold on the estimate is released and your view goes read-only: the
save line says **With Claude** and the view updates as Claude's changes land. After half an hour with no change it
stops checking until you press **Check now**.

Press **Take back** when Claude is done to edit again; if Claude is still writing, try again in a moment. Leaving the
estimate (the list, another estimate, closing the tab) also ends the hand-over; a reload does not.

Meanwhile nobody holds the estimate. A colleague who opens it while Claude is saving sees it read-only; if they open
it between Claude's changes they can edit it, and Claude and your Take back are refused until they close it.

## Related

- [The Estimates list](?help=estimator)
- [Library, materials and labour norms](?help=estimator-library)
- [A job from an estimate](?help=tracker-import-estimate)
`,xe=`---
keys:
  - estimator/handovers
title: Hand-overs
chain: Estimator, Hand-overs
tool: estimator
views:
  - estimating
ask: a group admin
reviewed: v3.58
sources:
  - modules/estimator/MODULE.json
---
# Hand-overs

The Hand-overs tab lists every estimate that has been sent to the Budget Tracker with **Send to tracker** and imported
there. Each row shows the estimate (click it to open it), the revision sent, the job number, when it was sent and by
whom, and **Foots**: yes when the tracker's import added up to the revision, no when it did not. **Refresh** reads the
list again. Nothing on this tab changes anything.

## Checking a hand-over

**Check** compares the revision's sell, for the whole job or section by section, with the forecast the tracker now
holds for the job and each of its section jobs. Each part shows the quoted figure, the tracker's forecast, the
difference, and whether it is within a dollar or off. A part the tracker cannot find says so. Use it after someone has
changed the plan in the tracker, to see whether the job still matches the quote.

The Check reads the tracker, so it needs the Invoicing view. Without it you see the list but the Check says it needs
that view.

## Related

- [The estimate editor: Send to tracker](?help=estimator-editor)
- [A job from an estimate](?help=tracker-import-estimate)
`,_e=`---
keys:
  - estimator/library
  - estimator/materials
  - estimator/norms
title: Library, materials and labour norms
chain: Estimator, Library
tool: estimator
views:
  - estimating
ask: a group admin
reviewed: v3.58
sources:
  - modules/estimator/MODULE.json
---
# Library, materials and labour norms

The library is everything you build an estimate from. The **Library**, **Materials** and **Labour norms** tabs at the
top of the Estimator open it on its own, with no estimate open, so you can look things up or tidy your kits. The same
library is the left pane of the estimate editor, where every row can be dragged into the tree or added with **Add**.

It has five tabs: **Assemblies**, **Equipment**, **Materials**, **Labour norms** and **Labour rates**.

## Assemblies (kits)

A kit is a ready-made bundle of materials and labour, kept in folders. Search by name, make a **New folder**, and use
**Import** and **Export** to move kits as a file. Each folder and each kit has a menu:

- In your own folders you can add a sub-folder, rename, move a kit to another folder, duplicate and delete.
- Shared folders are kept by an estimating admin; their menu says so. On a shared kit you can choose
  **Edit (a copy in the estimate)**, which changes only the copy in your estimate, or **Duplicate into my folder** to make your own
  version.

When newer standard kits are available, a line under the Library heading offers an estimating admin
**Update standard kits**; dismiss it and it stays away until the next version.

## Equipment

Templates for common plant and devices, grouped by type. Adding one takes its controller, sensor
and valve parts from the estimate's brands. To add only some of a template's points, use **Add points component...**
on a row of the estimate, or **Add from library...** in its Points tab (see the estimate editor). Each type shows its
version. A retired type is not listed: an estimating admin retires and restores types in Settings, under
[Equipment types](?help=estimator-settings-types).

## Materials

In Browse, a part's details offer **Add to point** (with the point's name) for the row of the Points grid you clicked last (it is
tinted), while that points node is selected on its Points tab.

Materials opens in **Browse**: pick a supplier (with the date of its price book in force), then a category, then the
parts list, which you can filter and sort. Type in the search box to switch to **Search** across the suppliers, with
chips to narrow it; use at least three characters, a part number or words such as a colour and a size. Each part shows
its unit, trade price, list price and book. A part with no trade price is added as **P.O.A.** until a price is
confirmed.

## Labour norms

A read-only reference of labour hours per item: the ESTILEC labour units. Search by item code, words or size, filter by **Page** and **Family**, and
switch between **All** and **P.O.A.** (items with no product in our books yet). Where an item can be installed in more
than one way, chips let you choose the situation. In an estimate, **Add** puts the norm in as a component, and the
row's menu offers **Add labour line only**. The heading names the source: an internal reference, never for clients or
suppliers. No one edits norms here.

## Labour rates

The rate classes the open estimate uses, which turn hours into cost.

## Who maintains what

You keep the kits in your own folders. An estimating admin keeps the shared folders and the standard kits, and the
rate classes new estimates start with (see Estimator settings). The labour norms, the ESTILEC labour units, are loaded
centrally and cannot be changed in the Estimator. The suppliers' price books are loaded by Claude on request: when a new
book arrives, ask an estimating admin and it is loaded for everyone.

## Related

- [The estimate editor](?help=estimator-editor)
- [The Estimates list](?help=estimator)
- [Estimator settings](?help=estimator-settings)
`,Ie=`---
keys:
  - estimator/settings/types
title: Equipment types
chain: Estimator, Settings, Equipment types
tool: estimator
views:
  - estimating_admin
ask: an estimating admin
reviewed: v3.58
sources:
  - modules/estimator/MODULE.json
---
# Equipment types

An equipment type is a standard piece of plant or a device (a chiller, an AHU, a VAV box) with its points, their wiring
and parts, its labour application, its HLI gateway, its control default and its electrical defaults. When you add a type
to an estimate, its points are copied into the estimate. Only an estimating admin edits the types, in the Estimator's
**Settings**, under **Equipment types**; everyone else keeps editing the points inside their own estimates.

## The list

The list shows every type with its code, name, group, application, points, version, status and who updated it last.
Type in the filter box to narrow it. Retired types are listed last, under **Retired**. On a phone the list is read-only:
open the Estimator on a tablet or a desktop to edit.

- **New type** starts a blank type. The code is yours to choose (capital letters, digits and hyphens) and is for ever.
- **Duplicate** makes a new type from an existing one ("make a new one from Chiller"): every point, option group and
  electrical default is copied, and you give it a new code.
- **Edit** opens the type in its own page, with **Back to Settings** at the top.
- **Retire** takes a type out of the pickers and Claude's search; **Restore** brings it back. A type is never deleted:
  estimates that use it are unchanged.

## Editing a type

The editor reads top to bottom: **Identity**, **Labour and HLI** (the application comes from the BMS norms: use
**Add an application in BMS norms** for a new one), **Control default**, **Electrical defaults**
(**Copy built-in defaults into this type** fills them from the standard values), **Option groups**, **Points**, the
**Labour preview** (the hours and material the type would add at a quantity of one, worked out as you edit, never
saved) and **History**.

Each point's parts are either **By brand**, taken from the estimate's brands when the type is added, or fixed parts you
choose with **Fix parts...** from the price books; **Back to by-brand** clears the fixed parts.

Write a one-line **Note** saying what changed and **Save**. Save waits while a problem is listed. If another admin saved
the type since you opened it, your save is refused and the type reloads: make your change again.

## Versions

Every save is a new numbered version, kept for good with who saved it, when and the note. A retire or a restore is a
version too, with the note "retired" or "restored", so if a colleague retires a type while you have it open, your save is
refused and the type reloads. **History** lists them, and **Open read-only** shows an earlier one.

An estimate keeps the points it was built with, so a sent price never moves. The Points tab names the type and its
version, for example "Type CHILLER-AIR-01 v2", and adds "(the standard type is now v3)" when the type has moved on since.
New equipment added after a change takes the new version.

## Related

- [Estimator settings](?help=estimator-settings)
- [Library, materials and labour norms](?help=estimator-library)
`,Re=`---
keys:
  - estimator/settings
  - estimator/file
title: Estimator settings and restricted estimates
chain: Estimator, Settings
tool: estimator
views:
  - estimating
ask: a group admin
reviewed: v3.58
sources:
  - modules/estimator/MODULE.json
---
# Estimator settings and restricted estimates

## Settings (estimating admins)

The Settings tab is for an estimating admin; anyone else sees a note to ask one. A change applies to new estimates and
to Re-price; an estimate already open keeps its own copies.

- **Commercial defaults**: the markups, risk, warranty, contingency, escalation, overhead, GST and adjustment factors
  a new estimate starts with, and **PM % of office hours**. Type percentages as percent. Then
  **Save commercial defaults**.
- **Rate classes**: each labour class with its cost rate per hour, adjustment factor, status and activity. **Save** or
  **Delete** each row; **Add a rate class** for a new one. A seeded class cannot be deleted.
- **BMS norms**: the hours and material per point, as three tables: **Applications** (one row each, with its
  engineering, graphics, commissioning and installation values, a status and **Retired**), the **Constants**, and the
  **Wiring** types. **Add application** and **Add wiring type** add a row; a new row can be removed until it is saved.
  **Save norms** saves every change at once, and refuses while a problem is listed above the tables.
- **Equipment types**: the standard types the equipment picker offers (a chiller, an AHU, a VAV). **New type**,
  **Duplicate**, **Edit**, **Retire** and **Restore**; every save is a version. See
  [Equipment types](?help=estimator-settings-types).
- **Labour norms**: when they were last imported, by whom, and how many items. Read-only: the norms are loaded
  centrally.

A saved application or wiring type is never deleted, because estimates use it: **Retire** marks it retired (a retired
wiring type is hidden from the pickers) and whatever uses it keeps pricing at it; **Restore** brings it back. Renaming a
saved one retires it and adds a new row with the new name and the same values. **Advanced: edit as JSON** shows the
whole table as text, and **Save JSON** replaces the whole table with it. An estimate keeps its own copy of the norms in
its Summary, where **Reset all to library** brings these values in. If another admin saved the settings since you opened
them, your save is refused and the settings reload: make your change again.

## Restricted estimates

A restricted estimate is never saved to the server: you tick **Restricted** when you start it, for a job that must not
be stored centrally, and the flag cannot be cleared later. It opens on its own screen with a red **Restricted** chip
and a banner, and the header's save line says **File only**. **Export** is the only way to keep it, so export before you
close it. Importing a restricted file with **Import file** opens it the same way. If the browser closes first, the
Estimates list offers the copy it kept: **Open it** or **Discard**.

## Related

- [The Estimates list](?help=estimator)
- [Equipment types](?help=estimator-settings-types)
- [Library, materials and labour norms](?help=estimator-library)
`,Me=`---
keys:
  - estimator
title: Estimates
chain: Estimator, Estimates
tool: estimator
views:
  - estimating
ask: a group admin
reviewed: v3.58
sources:
  - modules/estimator/MODULE.json
---
# The Estimator

The Estimator prices Mech-Elec and BMS work from a library of kits (assemblies of materials and labour). You build an
estimate as a tree, drag kits into it, and the tool rolls the quantities, hours and prices up through the tree the way the
Full Estimate workbook did. Every estimate lives on the server, so anyone with the Estimating view in your branch can open
it. Your edits save into the estimate's current revision; a new revision is made only when you ask for one (see Revisions
below).

## The Estimates list

This is the home screen. Each row is one estimate: its name, the current revision number, when it was last saved, and a
flag when the price books have moved since it was priced (see Re-price below). Open an estimate with its name link or its
**Open** button; clicking elsewhere on the row does not open it. The
tabs across the top take you to the Library, Materials, Labour norms, Hand-overs and, for an estimating admin, Settings.
The Help link in the Estimator's own header opens the how-to guide in a new tab; the ? beside What's new opens these
pages.

## Starting an estimate

**New estimate** asks you first for the BMS platform and the sensor and valve brands, because the kits and the controller
sizing depend on them; you can change brands later from the job's Node info, which previews the swap and applies it as a
new revision. **Open file** opens an estimate file exported from this tool (a .sba-est.json file). An estimate that
already exists on the server is offered as a separate copy, so a file from a colleague never overwrites theirs.

## Revisions

Edits save into the current revision as you work. A new revision comes only from four places: **New revision** in the
Revisions panel, **Re-price**, **Change brands** and an import. The list shows the current one. Inside an estimate,
**Revisions...** opens the Revisions panel, which lists every revision and lets you open an older one, read-only; it does
not compare revisions and cannot make an older one current. A revision that was sent to the tracker is frozen and cannot be edited; make a new revision
instead.

## The stale-price flag

Price books have editions. When a book has a newer edition than the one an estimate was priced with, the estimate shows a
stale flag. Open it and choose **Re-price** to see, row by row, what would change at today's prices, and apply it as a new
revision. Nothing changes until you apply it.

## Who can do what

Anyone with the Estimating view can open and read every estimate in their branch; editors and admins can change drafts
and issued estimates, and a revision already sent to the tracker is never changed. An editor can also hand an open
estimate to Claude to edit through the connector (see [The estimate editor](?help=estimator-editor)). The Settings tab,
where the commercial defaults, rate classes, BMS norms and labour norms are maintained, is for an estimating admin. A
restricted estimate (opened as a file, never saved to the server) is for the rare job that must not be on the shared
server; it says so at the top.

## Related

- [The estimate editor](?help=estimator-editor)
- [Library, materials and labour norms](?help=estimator-library)
- [A job from an estimate](?help=tracker-import-estimate)
`,Le=`---
keys:
  - home
title: Home
chain: Home
tool: home
views:
ask: a group admin
reviewed: v3.52
sources:
  - src/modules/home/index.js
  - src/modules/crm/widgets.js
---
# Home

The Home is your day at a glance: "Your day" with your first name and today's date, then a set of cards (widgets) from
the tools you have. Everyone can open it; it is first in the rail.

## Whose widgets you see

Each tool can add widgets, and you see only those from tools your views open. Today the CRM adds four, so with the CRM
view you see:

- **My activities today**: how many of your activities are past their due date and how many are due today, then the
  next few due today. **Go to Activities** opens the full list.
- **My pipeline value by stage**: your open deals by stage. Click a stage to open those deals in the List, or press
  **Open my pipeline**.
- **Deals going stale**: your deals that have not moved recently. **Open in the List** shows them all.
- **Won this month**: deals won this month, with last month beside it. **Open in the List** shows them.

Without a tool that adds widgets, the Home says "Nothing to show yet: the tools you have do not add widgets".

## When something changes

If a group admin gives you a new view or takes one away, the Home redraws with the right widgets. A card that says it
could not load does not stop the others; reload the page to try again. The layout is the same for everyone for now.

## Related

- [The CRM](?help=crm)
- [Getting around](?help=shell-frame)
`,Pe=`---
keys:
title: Your account
chain: The platform, Your account
tool: shell
views:
ask: a group admin
reviewed: v3.55
sources:
  - src/shell/header.js
  - src/shell/theme.js
  - src/shell/identity.js
---
# Your account

Your chip sits at the end of the header and shows the name you are signed in under.

## VIEW ONLY and ADMIN

A label after your name says what you may do. **VIEW ONLY** means you can read everything your views open but change
nothing. **ADMIN** means you can also manage settings. No label means you are an editor: you can change figures. A
group admin sets your level in [Users](?help=shell-users); if it is wrong, ask one.

## Connected apps and sign out

**connected apps** on the chip lists the apps you have let use the platform as you, such as Claude, and lets you
disconnect one. See [Connected apps](?help=shell-apps). **sign out** ends your session on this browser and returns you
to the sign-in card, which says "You signed out."

## Light and dark

The half-filled circle at the end of the header switches between the light and dark themes. The app starts from your
device's own setting each time it opens.

## Signed out somewhere else

If you sign out in another tab, or your sign-in expires, this tab stops and shows a Signed out card with
**Sign in again**. If an edit you had not saved was lost, the card says so. See [Getting started](?help=start).

## Related

- [Getting started](?help=start)
- [Connected apps](?help=shell-apps)
`,Be=`---
keys:
  - shell/apps
title: Connected apps
chain: The platform, Connected apps
tool: shell
views:
ask: a group admin
reviewed: v3.55
sources:
  - src/shell/header.js
---
# Connected apps

Connected apps lists the apps you have allowed to use the platform as you, such as Claude. Open it from
**connected apps** on your chip in the header.

## What the list shows

Each row is one app with the date and time you connected it (Sydney time). These apps can use the platform as you, with
your access and nothing more: if you cannot see or change something, neither can they. "No app is connected." means
you have not connected any.

## Disconnecting

Press **Disconnect** on the row. The app is cut off within a minute and its sign-in is ended; "Disconnected." confirms
it and the list refreshes. You do not need anyone's help to do this. To use the app again, connect it again from the
app itself.

## Related

- [Using Claude with SyncOS](?help=shell-claude)
- [Your account](?help=shell-account)
`,De=`---
keys:
  - shell/assistant
title: Asking the assistant
chain: The platform, Asking the assistant
tool: shell
views:
ask: a group admin
reviewed: v3.55
sources:
  - src/shell/assistant.js
  - src/shell/header.js
  - src/shell/users.js
  - src/modules/assistant/index.js
  - src/modules/assistant/lib/card.js
  - supabase/functions/assistant/handler.ts
  - supabase/functions/assistant/llm.ts
  - supabase/functions/assistant/meter.ts
  - supabase/functions/assistant/tools.ts
---
# Asking the assistant

The assistant answers questions about SyncOS in plain words, looks things up for you, and drafts changes for you to
check. Press **Ask** in the header, beside the **?**, and a panel opens on a new conversation. Every signed-in member
has the button while a group admin has the assistant switched on; when it is off, the button is not there. A change of
the switch shows the next time you load the app. On a phone the panel fills the screen.

## What you can ask

- How to do something: "how do I archive a job". It answers from these help pages and names the page it used, as a
  link that opens the page on top of the panel. A link to a screen closes the panel and takes you there.
- About your own data: "which of my jobs have no claim this month", "what stage is this deal at". It reads the tracker,
  the Estimator and the CRM as you can, through your own access.
- For a change: "move this deal to the next stage", "start a new revision of this estimate". It drafts the change and
  shows it to you as a card. It never makes the change itself.

Type in the box at the foot and press Enter, or **Send**. Shift and Enter starts a new line. A message can be up to
4,000 characters. While it works, a line above the box says what it is reading, such as "Reading the tracker", and
**Send** waits until the answer is finished.

## The card, and Apply

When you ask for a change, the assistant shows a card headed Tracker change, Estimate change or CRM change: what would
change (for many CRM changes, each field before and after) and the time to apply it by, fifteen minutes after it was
drawn.
Nothing has changed yet. You can keep asking while a card is open.

- **Apply** makes the change, in your name, through the same checks as the screen. The card says what it promises: a
  tracker change writes exactly what is shown or is refused if anything moved since; an estimate change is refused if
  the estimate was saved since; a change to an existing CRM record is refused if the record changed since. When it is
  refused, the card shows the platform's reason.
- **Discard** drops it. Nothing changes.

The card then reads Applied, Discarded, Expired, Refused or Failed, with the platform's answer under it, and its
buttons go. A card past its time reads Expired: ask again. If a card reads Unknown, the platform did not answer, so it
is not known whether the change was saved. A tracker card then offers **Check**, which asks the tracker again and never
makes the change twice; for any other card, look at the screen before you ask again. Each card you apply or discard,
and each tracker change made from a card, is in the Audit log under your name, marked "via assistant".

## Your monthly allowance

Each person has a monthly allowance of assistant use, in dollars, set by a group admin. The line at the foot of the
panel shows how much of this month's allowance you have used, against the whole allowance. When it runs out, the
assistant says "You have used this month's assistant allowance", with the amount.
It resets on the first of next month. A group admin can raise it for you. If it runs out part way through an answer,
what it said so far stands and no card is drawn.

## What it never does

- It never makes a change on its own. Only your Apply does.
- It never sees past your access: your level, your branch scope and your views bound it, as they bound you.
- It never acts as anyone but you. It cannot send an email, delete a record or change who has access, and it does not
  change the Budget, Monthly or OPEX figures.

If an answer looks wrong, check the screen it names. The assistant can be mistaken; the platform's own figures are the
record.

## Your conversations

The panel keeps your conversations. **Back** shows them, newest first (the last twenty), each with its title and
when you last used it. Click one to carry on. **New conversation** starts afresh. A very long conversation asks you to
start a new one; one that is still answering in another tab asks you to wait or start a new one. **Delete** on a
conversation, then **Delete for good**, removes it. A conversation is kept for 90 days after you last used it, then
removed. Nobody else can read your conversations, group admins included.

## Related

- [Using help](?help=shell-help)
- [Using Claude with SyncOS](?help=shell-claude)
- [Users: the Audit log](?help=shell-users)
`,We=`---
keys:
title: Using Claude with SyncOS
chain: The platform, Using Claude
tool: shell
views:
ask: a group admin
reviewed: v3.55
sources:
  - src/shell/header.js
  - src/consent/*
  - supabase/functions/mcp/tools/manifest.ts
---
# Using Claude with SyncOS

You can connect Claude to SyncOS so that you can ask it about your jobs, estimates and deals in plain words, and have it
draft changes for you. Claude works as you: it sees what you can see and can change only what you can change. It never
has more access than your own login.

## Connecting

You start the connection from Claude, not from the app. Claude opens the SyncOS connection page in your browser. For now
it still carries the platform's old name: its heading is **Connect Claude to the SBA Platform**.

1. If you are not signed in, sign in there the same way as the app: **Continue with Google** or **Send sign-in link**.
  The link brings you back to this page.
2. The page shows who you are signed in as, and what Claude would get: your email with your level, scope and views.
  If that is not you, press **not you?** and sign in as yourself.
3. Press **Approve** to connect, or **Deny** to refuse. You are returned to Claude.

Approve grants Claude your access and nothing more. If your address is not on the access list, the page offers only
**Deny**. If the page says the request comes from an app that is not the SBA Platform connector, nothing has been
shared: close it.

## What Claude can read

With your views, Claude can read the tracker (jobs, the invoicing schedule, budgets and financials for the entities
your scope covers), the Estimator (estimates, the library, materials and labour norms) and the CRM (deals, companies,
people, the pipeline). Anything your views or scope hide is hidden from Claude too.

## What Claude can change

- **Estimates**: it can start a draft estimate, edit an estimate you can edit, import a schedule into one and start a
  new revision.
- **The CRM**: on deals your branch lets you edit, it can add a deal, change its details, move it to another stage, add
  a note and plan an activity. It can add or change a company or a person. It never sends an email or an invite.

## Preview, then yes

Before Claude changes a figure in the tracker it shows you a preview of exactly what would change, with each value
before and after, and nothing is written. Only when you say yes in the chat does it make the change, and it refuses if
someone else changed those figures in the meantime. Some CRM steps work the same way: closing a deal as won or lost,
setting or clearing its job number, asking SyncOS for a deal's tender folder or another package folder in Drive, and
telling SyncOS which Drive folder belongs to a deal. Claude itself never moves, shares or deletes a Drive folder. Every
change Claude makes to the tracker is in the Audit log under your name with "via Claude". The assistant behind the
**Ask** button inside SyncOS works the same way: it shows each change as a card, nothing is written until you press
**Apply**, and its changes are marked "via assistant" ([Asking the assistant](?help=shell-assistant)).

## What Claude never does

- It never acts as anyone but you, and never goes past your level, scope or views.
- It does not change who has access to SyncOS.
- It does not write the Budget, Monthly or OPEX figures.

## Disconnecting

Open **connected apps** on your chip in the header, find Claude and press **Disconnect**. Claude is cut off within a
minute. You can connect again at any time.

## Related

- [Connected apps](?help=shell-apps)
- [Your account](?help=shell-account)
- [Users: the Audit log](?help=shell-users)
`,Fe=`---
keys:
  - shell/feedback
title: Feedback
chain: The platform, Feedback
tool: shell
views:
ask: a group admin
reviewed: v3.55
sources:
  - src/shell/feedback.js
  - src/shell/header.js
---
# Feedback

Feedback is where anyone in the company logs a bug or asks for a feature. Everything logged is visible to everyone, so
the list doubles as the answer to "is this already known?". Open it with **Feedback** in the header; it is there for
every signed-in member.

## Check the list first

The panel opens with the form at the top and the full list below it, newest first. Each row shows what was logged, who
logged it, the date and its status. Read down the list before you type: if your bug is already there, you do not need to
add it again.

## Logging a bug or a request

1. Choose **Bug** or **Feature request**.
2. Write one line that says what happened or what you want. It needs at least three characters.
3. Add detail if it helps: what you did, what you expected, which job or month.
4. Press **Submit**. "Logged, thank you." confirms it and the list refreshes.

Beside the button, "Auto-attached" shows the screen you were on when you opened the panel. It is saved with your item so
whoever picks it up can find the place without asking.

## What the statuses mean

- **new**: logged and not yet looked at.
- **planned**: accepted and waiting for a release.
- **done**: built and shipped.
- **declined**: not going to be built. The reason is recorded and shown in What's new.

Only a group admin can change a status; everyone else sees it as a label.

## How it reaches a release

Each release in What's new lists the feedback it closed and who raised it, so you can see your request shipped. Items
still planned are listed at the foot of What's new, and a declined item shows "not built:" with the reason, so nothing
just disappears.

## Related

- [What's new](?help=shell-whatsnew)
- [Using help](?help=shell-help)
`,Ne=`---
keys:
title: Getting around
chain: The platform, Getting around
tool: shell
views:
ask: a group admin
reviewed: v3.55
sources:
  - src/shell/rail.js
  - src/shell/registry.js
  - src/shell/nav.js
---
# Getting around

Every screen in SyncOS has the same frame: the tool rail on the left, one header across the top, and the tool itself
below. Once you know the frame you can find any tool and any tab.

## The rail

The rail lists the tools your access opens, in groups that follow the work: Win work (the Estimator and the CRM), Money
and insight (the Budget Tracker) and Run the business (Automations). A group with none of your tools is not shown. The
Home sits first, on its own. Click a tool to open it; the one you are in is marked.

**Collapse** shrinks the rail to a column of two-letter tiles (hover a tile for the tool's name); **Expand** opens it
again. The rail remembers your choice on this browser. If you have never chosen, it starts collapsed on a narrower
screen and open on a wide one.

## The header

The header carries, from left to right:

- the **crumb**: the name of the tool you are in;
- the **tabs** of that tool (the Budget Tracker's Budget, Monthly tracker, Invoicing schedule and Financials, for
  example). The tabs you see depend on your views;
- at the end, your chip and the platform buttons: Notifications, Feedback, What's new, the **?** for help, **Ask** for
  the assistant (while a group admin has it switched on), Users for a group admin, and the light and dark toggle.

## On a phone

Under tablet width the rail becomes a drawer. Press **Menu** at the top left to open it, pick a tool, and it closes.
Tap outside it or press Escape to close it without choosing. The tabs scroll sideways inside the header, and the
help button shows the **?** alone.

## Leaving a tool with unsaved work

If you switch tools while a tool holds work it has not saved, a **Leave this tool?** box asks first. **Stay** keeps you
where you are; **Leave** goes on and the unsaved work is lost.

## When a tool will not load

A panel takes the tool's place and says what happened:

- "A new version of the tracker is available. Reload to get it." Press **Reload**. This appears after a release.
- "This tool hit a problem. Reload it." Press **Reload tool**. If it comes back, log it in Feedback with what you were
  doing.
- "You don't have access to this tool". Your access changed while the tool was open, or the link points at a tool you
  do not have. Ask a group admin if you need it.

The rest of the app keeps working in each case, and the **?** still opens help for that screen.

## Related

- [Getting started](?help=start)
- [Your account](?help=shell-account)
- [Using help](?help=shell-help)
- [Feedback](?help=shell-feedback)
- [Asking the assistant](?help=shell-assistant)
`,qe=`---
keys:
title: Using help
chain: The platform, Using help
tool: shell
views:
ask: a group admin
reviewed: v3.55
sources:
  - src/shell/help.js
  - src/modules/help/index.js
---
# Using help

Help is a set of short pages, one for every screen in SyncOS, written for the person using the screen. You open it from
the **?** in the header, beside What's new. On a laptop the button reads "? Help"; on a phone it shows the **?** alone.
To ask a question in your own words instead, press **Ask**: see [Asking the assistant](?help=shell-assistant).

## Help for the screen you are on

Press **?** and the page for the screen in front of you opens: the tab you are on, the sub-tab, or the window that is
open on top of it (a job window, the Users panel, Feedback, the Ask panel). Close the page with **Close** or Escape and
you are back where you were; nothing on the screen changes while help is open.

The line at the top of a page is its breadcrumb, so you can see which screen it describes. The foot says which release
the page was last checked against ("Updated in" and a version).

## Searching

Type two letters or more in **Search help** and matching pages appear as you type, with the section a match is in.
Press Enter to open the first one, or click any result. Search knows common other words (a claim is found under
invoice, a deal under opportunity), so try the word you would use. If nothing matches, the line under the box offers
to send feedback, which is how a missing page gets written.

Escape clears the search first; a second Escape closes help.

## All help

**All help** at the foot of a page opens the contents. Your tools come first, then **Other tools** (folded: pages for
tools you do not have), then **The platform** (signing in, getting around, your account, and this page). You can read
any page. A page for a tool you do not have opens with the line "You do not have this tool." and who to ask.

Links inside a page open the next page in the same panel; **Back** takes you to the page before. A link to a screen
closes help and takes you there.

## Sharing a page

**Copy link** puts the page's address on your clipboard (if the browser will not allow it, the address appears in a box
for you to copy). Anyone signed in who opens that address lands on the page. If they are not signed in, they sign in
first and then open the link again.

## When a page is wrong or missing

Press **Send feedback** at the foot of the page. Help closes and the Feedback panel opens with the screen already noted.
Say what the page got wrong or what you could not find. Pages are re-checked whenever their screen changes, and a
corrected page ships in the next release.

## Related

- [Getting around](?help=shell-frame)
- [Feedback](?help=shell-feedback)
- [Getting started](?help=start)
- [Asking the assistant](?help=shell-assistant)
`,Ue=`---
keys:
  - shell/notify
title: Notifications
chain: The platform, Notifications
tool: shell
views:
ask: a group admin
reviewed: v3.59
sources:
  - src/shell/notify.js
---
# Notifications

The **Notifications** button in the header (the bell) collects the things addressed to you: approvals waiting for you,
mentions and notices from automations. A number on the bell counts the ones you have not read.

When an automation fails, including one making or moving a Drive folder, the deal owner and the people who hold
Automations are told, with a link to the deal. If Drive work cannot start because Drive is not set up, the people who
hold Automations get one notice that it is waiting, linked to the run log.

## Chat messages beside the bell

An automation can also send a Google Chat message from the SyncOS app, for example when a claim becomes Ready to
invoice. Those arrive in Google Chat, not on the bell. To get them as direct messages, search for the SyncOS app in
Google Chat once and say hi: see [Chat messages from automations](?help=automations-chat).

## Reading them

Press the bell to open the panel. Your latest twenty notifications are listed, unread first, each with its title, how
long ago it arrived and a line of detail. Click one to mark it read and go straight to what it is about, such as a deal
or an approval. **Mark all read** clears the count without opening anything.

A new notification that arrives while you are working shows a short message at the foot of the screen and adds to the
count. "Nothing for you yet." means the list is empty.

## If you do not see the bell

The bell appears once your notifications have loaded. If it never appears, notifications are not switched on for this
copy of the app.

## Related

- [Approvals and the run log](?help=automations-approvals)
- [Automations](?help=automations)
`,Ge=`---
keys:
title: Lists
chain: The platform, Users, Lists
tool: shell
views:
  - group-admin
ask: a group admin
reviewed: v3.57
sources:
  - src/shell/users.js
  - src/modules/tracker/dialogs/lookups.js
  - src/modules/tracker/fin-data.js
---
# Lists

The Lists are the values the Budget Tracker's pickers offer: job types, PMs, and the two status lists. They sit in the
Users panel, below the roster (and below the Assistant block, when there is one), when you open **Users** from the
Budget Tracker. Only a group admin has the Users button.
With the Financials view the panel also holds the P&L account map.

## The four lists

- **Job types**: the types a job can have, kept separately for each branch. Pick ACT or NSW beside the heading.
- **PMs**: the project managers a job can name. Each PM also has an email address for the weekly stale-forecast
  reminder and a **weekly nudge** tick. A blank email, or the tick off, means no reminder; their jobs still appear in
  the Monday report.
- **Line statuses**: the claim statuses an invoicing line can have.
- **Job statuses**: the statuses a job can have.

Each entry says how many jobs or lines use it, so you can see what is safe to touch before you touch it.

## Job types and Ascora

Ascora is where job types are set. Once a day the tracker matches its jobs and sections to Ascora by job number and
copies each one's Ascora job type onto it; those jobs show the type read-only in their job window. Any Ascora type the
branch's list does not have yet is added to it at the same time, so you do not need to type Ascora's names here. Only a
job that is not in Ascora gets its type from the picker.

Because Ascora owns those names, renaming a type that Ascora jobs carry is refused with a count of the jobs: change it in
Ascora instead. A newly added type sits in no department until a group admin places it in
[Financials, then Settings](?help=tracker-financials-settings); until then On track shows its lines as Unassigned. The
line under the Departments table there lists every type in no department, and each department's job-type picker offers
this list for the branch.

## Adding

Type the new values in the box under a list, one per line (you can paste a whole column), and press **+ add**. Blanks
and duplicates are skipped. A new status starts with counts-invoiced and admin-only both off; switch them on its row.

## Renaming, retiring and bringing back

**rename** changes the value and repoints every job or line that uses it, in one step, after a confirm that gives the
count. On job types and PMs, **retire** takes a value out of the pickers without touching the jobs that already use it;
**bring back** returns it. A value that sits on jobs but was never added to the list shows "not in the list" and an
**adopt into list** button.

## The two status lists

Statuses carry a key as well as a label. You can rename the label, change the key, or delete a status that nothing uses.
The two built-in statuses (forecast for a line, in progress for a job) cannot be deleted or re-keyed. On a line status,
**counts-invoiced** decides whether a line with that status counts as invoiced, and **admin-only** means only an admin
can choose it on a line. The arrows set the order, and the order here is the order everywhere: the pickers, the filters
and the tiles. Others see a new order after their next reload.

## The P&L account map

**P&L accounts (Financials)** maps each account imported from Xero to a line of the management P&L, per entity. A change
moves every open month at once; a closed month keeps its snapshot until it is reopened and closed again. The flags mark
the wage accounts, the on-cost accounts, annual costs to spread across the year, and materials. An imported account
that is not mapped blocks the month from closing. When an account is renamed in Xero, map the new name and retire the
old one; never delete it.

## Related

- [Users](?help=shell-users)
- [Job statuses and claim statuses](?help=tracker-statuses)
- [The job window](?help=tracker-job)
- [Financials settings: departments](?help=tracker-financials-settings)
`,Ye=`---
keys:
  - shell/users
title: Users
chain: The platform, Users
tool: shell
views:
  - group-admin
ask: a group admin
reviewed: v3.55
sources:
  - src/shell/users.js
  - src/shell/audit.js
  - src/shell/member.js
---
# Users

The Users panel is the access list for the whole platform: who can sign in, what they may change, which branch they
cover and which tools and tabs they see. Only a group admin (an admin with group scope) has the **Users** button in the
header.

## The roster

Each row is one person: name, email, and three settings.

- **Level**: viewer, editor or admin. A viewer reads and changes nothing (their chip says VIEW ONLY). An editor changes
  figures. An admin also manages settings, and with group scope manages this panel.
- **Scope**: group, act or nsw. Group covers both branches; act or nsw limits the person to that branch's figures.
- **Views**: the tools and tabs they get: Budget, Monthly, Invoicing, OPEX, Financials, Estimating, Estimating admin,
  CRM and Automations. OPEX opens the account-level detail inside the Budget. Estimating admin needs Estimating as
  well, and everyone needs at least one view.

A change saves the moment you make it ("Updated." confirms it) and takes effect at once: the person's tabs and tools
change without them signing in again, and a tool they lose is replaced by "You don't have access to this tool". You
cannot remove your own admin level; ask another admin.

## Inviting someone

Under **Add user**, type the name and work email, choose the level and scope, and tick the views (Budget, Monthly and
Invoicing are ticked to start). Press **Invite**. The person gets an email to sign in. If the email service is busy, the
member is still added and the message says so; they can use the sign-in link on the sign-in card instead.

## Removing someone

Press the cross at the end of their row and confirm. They lose all access at once. Their sign-in account remains but
opens nothing. Your own row says "you" and has no cross.

## The Assistant block

Under the roster, the **Assistant** block sets up the **Ask** button for everyone. If the assistant is not set up on
the platform yet, there is no block.

- **Switch**: On or Off. Off hides the Ask button for everyone and refuses every request. People see the change the
  next time they load the app; requests are refused at once.
- **Model**: which Claude model answers. One is marked recommended.
- **Monthly allowance (A$ a person)**: how much each person may use in a month. Type the amount and press **Save**.
- **A person's own allowance**: type their email and an amount, then press **Set allowance**. **Remove** on their row
  puts them back on the monthly allowance.
- The exchange rate and the prices per million tokens are shown for reference only. They cannot be changed here.

Two tables show this month and last month: for each person, their turns, calls, dollars used, when they last used it,
how many months running they reached their allowance, and two counts of answers that were cut off or settled twice.
You see counts and money only: nobody can read another person's conversations, group admins included.

**Check key** checks that the platform's key for the assistant works, without spending anything. Every change shows
"Saved." or "Not saved:" with the reason.

## The Audit log

At the foot, **Load audit log** shows who changed what across the tracker: invoicing lines, jobs, periods, users,
statuses, clients and the budget. Each row has the time (Sydney time), who did it, the area, the key, the action and the
change from old to new. A change made through Claude says "via Claude" after the name, and one made from an assistant
card says "via assistant". Filter by **Actor** or **Area**, and press **Load 200 more** to go further back.

## The Lists

When you open Users from the Budget Tracker, the panel also holds the Lists: job types, PMs and the two status lists
that the tracker's pickers offer, and the Financials account map. They have their own page:
[Lists](?help=shell-users-lists).

## Related

- [Lists](?help=shell-users-lists)
- [Your account](?help=shell-account)
- [Getting started](?help=start)
- [Asking the assistant](?help=shell-assistant)
`,He=`---
keys:
  - shell/whatsnew
title: What's new
chain: The platform, What's new
tool: shell
views:
ask: a group admin
reviewed: v3.52
sources:
  - src/shell/whatsnew.js
---
# What's new

**What's new** in the header is the release log: every release of the app, newest first, written for the people who
use it rather than for developers.

## Reading a release

Each release shows its version and date, a one-line headline and a short list of what changed. Under
**Closed in this release** are the feedback items it finished, each with the name of the person who raised it.

## The badge

A number on the button counts the releases you have not opened on this browser yet. Open the panel and it clears.

## Not built, and why

A request that was declined is not dropped silently. It appears under the release that decided it, marked
"not built:" with the one-line reason.

## Still planned

The foot of the panel lists every feedback item marked planned that has not shipped yet, with who raised it. If
something you need is missing from the list, add it through [Feedback](?help=shell-feedback).

## Related

- [Feedback](?help=shell-feedback)
`,$e=`---
keys:
title: Getting started
chain: The platform, Getting started
tool: shell
views:
ask: a group admin
reviewed: v3.55
sources:
  - src/shell/signin.js
  - src/shell/identity.js
  - src/shell/index.js
---
# Getting started

SyncOS is the Synchronous Group's own platform: one web address, one sign-in, and a rail of tools down the left (the
Budget Tracker, the Estimator, the CRM, Automations and the Home). What you see depends on the access a group admin has
given you. This page covers signing in and the cards you may meet before the app opens.

## Signing in

The sign-in card offers two ways in.

- **Continue with Google**: use your work Google account. If the card says "Google sign-in isn't switched on yet", use
  your work email instead.
- **Send sign-in link**: type your work email and press the button (or Enter). Check your inbox for the link; it opens
  the app at its normal web address, so open it on the device you want to use.

Signing in only proves who you are. Whether you get in is decided by the access list: if your address is not on it, you
see the No access card whichever way you signed in.

## When you get in

The app opens on the tool your link pointed at, or on the Budget Tracker. The rail lists only the tools your access
opens, and the header shows your name. To find your way around, see [Getting around](?help=shell-frame).

## The cards you may see instead

- **Offline**: the app could not load its sign-in library. Check your connection, then press **Retry**.
- **Connection problem**: the app could not check your access. This is a network hiccup, not a change to your access.
  Press **Retry**.
- **Couldn't load**: a tool's data did not arrive. Press **Retry**; if it keeps happening, log it in Feedback.
- **No access**: your address is not on the access list. The card names the address you signed in with and asks you
  to ask a group admin to add you. Press **Sign out** to try a different account.

## When you were signed out

If your sign-in link expired, or you signed out in another tab, the app stops and shows a **Signed out** card with
**Sign in again**. If the browser is offline at that moment, the card waits and reloads by itself when the connection
is back. The sign-in card then says why you were signed out, for example "You signed out." If an edit you had not saved
was lost, the card says so in red: "Any unsaved edit was not stored." A note with the same words can also appear at the
top of the page after you sign back in; press **Dismiss** to clear it.

A tab signed in as someone else in the same browser stops too, and says so, so one person's work never lands under
another person's name.

## Related

- [Getting around](?help=shell-frame)
- [Your account: the chip and signing out](?help=shell-account)
- [Users: who has access](?help=shell-users)
- [Using help](?help=shell-help)
`,Je=`---
keys:
  - tracker/add-job
title: Adding a job
chain: Budget Tracker, Invoicing, Add a job
tool: tracker
views:
  - invoicing
ask: a finance admin
reviewed: v3.52
sources:
  - src/modules/tracker/dialogs/wizard.js
  - src/modules/tracker-invoicing/index.js
  - src/modules/tracker-invoicing/cards.js
---
# Adding a job

**+ Add job** on the invoicing schedule opens a short wizard, and it is the only way to create a job by hand. It asks for
the job's details, its parts and a forecast for every part, and it will not create the job until every part is forecast
in full. That rule is what keeps the revenue forecast honest: a job with no forecast would sit in the schedule adding
nothing.

An admin can add a job in any branch. An editor can add one in their own branch only, so the Branch box is fixed for
them. If you do not see the button, ask a finance admin.

## Step 1: Job details

- **Job number**: J then six or seven digits, the Ascora job number. The box says at once if the shape is wrong, and
  checks whether the number is already taken (it says "Checking the number" while it asks).
- **Branch**, **Job name**, **Customer** (pick from the list or type a new one) and **Job type**. Once the job is in
  Ascora, the tracker takes Ascora's job type at its next daily match and shows it read-only.
- **Sync BA PM** and **Sync BA Tech** (optional): the project manager and the technician. Put a service job's technician
  in Tech, not in PM; the weekly forecast reminders go to the PM only. Pick **Add new** in either list to add a name.
- **Invoice day**: the day of the month you usually claim, in words such as "15th".
- **Job shape**: a **Single-section job** has one quoted value and skips the Sections step. A **Sectioned job** splits
  the contract into parts you claim separately.
- **Base scope quoted $**: required for a single-section job, because it is the only place its value lives. A sectioned
  job holds its value in the sections instead, and you can give a **Job value $** for the sections to add up to.
- **PO value $** and **PO month** (optional): the customer's order value and the month it arrived. They feed new orders
  received on the Monthly tracker.
- **Status**: the job's status from the list.

## Step 2: Sections (sectioned jobs only)

Add each part with a **Label**, a **Type** (Mech-Elec, MSSB, Controls or Other) and its **Quoted $**. **Standard split**
fills in Mech-Elec, Switchboard (MSSB) and BMS (Controls) for you to price. The line under the list adds the sections up
and says whether they foot to the job value, or how far short or over they are.

## Step 3: Variations

Approved extra scope on top of the contract, each with a label and a quoted value. You can skip this step and add
variations later from the job window.

## Step 4: Forecast schedule

Each part gets a row. Set the **Schedule $** (the claim), the **Start month**, **Over N months** and a **Spread** (Even,
Front-loaded or Back-loaded), and the wizard spreads the claim over those months in whole dollars. You can also give
estimated materials, labour hours or labour dollars, and subbies; these are optional and spread the same way.

The **Forecast completeness** bar at the top shows how much of the quoted value is scheduled. Each part must be forecast
to its own value, within a dollar, and over is caught as well as under. When every part says forecast in full,
**Create job + forecast** lights up.

## When it is refused

- **A closed month**: if any scheduled month is closed for the branch, an editor is told which one. Move the schedule into
  open months, or ask an admin to reopen the month.
- **A taken number**: sections and variations are numbered from the job (the job number, a dot, then two digits), so a
  base number whose section numbers are already used is refused. Pick another base number.
- **No answer from the server**: the wizard locks and says the job may or may not have been created. Press **Retry check**
  rather than creating it again; if it keeps failing, reload the page and look for the job in the schedule.

Once the job is created the wizard closes, the schedule shows the new job expanded, and its job window opens so you can
check the months.

## Related

- [The job window](?help=tracker-job)
- [A job from an estimate](?help=tracker-import-estimate)
- [Importing jobs from a file](?help=tracker-import-jobs)
- [The invoicing schedule](?help=tracker-invoicing)
`,Xe=`---
keys:
  - tracker/budget
title: Budget and OPEX
chain: Budget Tracker, Budget
tool: tracker
views:
  - budget
ask: a finance admin
reviewed: v3.52
sources:
  - src/modules/tracker-budget/index.js
  - src/modules/tracker/model-budget.js
  - src/modules/tracker/markup.js
---
# Budget and OPEX

The Budget tab shows each business unit's revenue and EBIT for a year, and lets the people who set targets type them in
for the years ahead. Last year's actuals come from Xero and Ascora; the budget years are what you type here. With the
OPEX view you also see the operating expenses, budget against actual.

## Choosing the entity and the year

The bar above the tabs sets what you are looking at:

- **Entity**: Group, ACT or NSW. Group adds the two branches together and has nothing of its own to edit, so you edit in
  ACT or NSW.
- **Year**: **FY26 actual**, then each budget year. The actual year is read-only.

A note beside them says how that entity's units are costed. The two branches use different bases, and the notes at the
foot of the page explain both.

## The tiles

Four tiles across the top: **Revenue**, **EBIT**, **Other income** and **Net (pre-tax)**, each with a line saying what it
is measured on. **All metrics** opens a drawer with the memo figures, such as the tax provision (a memo, not in the
ledger).

## The units table

Each row is a business unit, with a total row at the foot. In the actual year you see **Revenue**, **EBIT**, **Margin**
and **% of rev**, with a small bar for each unit's share; some units list their parts beneath them.

In a budget year the columns are **Revenue target**, **EBIT**, **Margin**, **Growth %** and **Target %** (the target EBIT
margin). An editor can type in three of them, for that year only:

- a **Revenue target** in dollars (you can type it short, such as a number followed by k or M);
- or a **Growth %** against the year before;
- and a **Target %** for the EBIT margin.

EBIT and margin then work themselves out. Revenue chains from year to year, so a change to one year flows into the years
after it, never the years before. A year you have not set uses a default growth. Switch the Year above to set each year
in turn.

**Reset** in the bar puts the growth, margin and revenue target assumptions for the entity on screen back to their
defaults, for every year and for everyone who uses the tracker. It asks first, and it does not touch OPEX or the Monthly
tracker.

## The two charts

**EBIT by unit** shows each unit's profit or loss as a bar either side of zero. **Revenue mix** shows each unit's share of
the entity's revenue. Hover a bar to see its figures.

## The OPEX panel

**Operating expenses, budget vs actual** appears only for people with the OPEX view; ask a finance admin if you need it.
It lists each line item grouped by category, with **FY26 actual**, **Budget**, **Actual** and **Variance**. Spending over
budget shows red, because higher spend is worse.

In ACT or NSW an editor can type the budget and actual for each line, add a line with **+ Add line** (name it in the new
row), and remove one with the cross at the end of its row. Group shows the two branches together, read-only; an
account's Group actual appears only once both branches carrying it have reported. The line under the table explains what
the totals cover.

## Saving

Your changes save as you go and are shared with everyone who has the Budget view. The chip beside your name says saving
or saved. If someone else saved first, the tracker shows you both versions to choose from.

## Export and density

**Export CSV** downloads the view on screen. The density switch beside it makes the rows compact or comfortable. On a
phone the tables become read-only cards.

## Related

- [Someone else saved](?help=tracker-conflict)
- [The Monthly tracker](?help=tracker-monthly)
- [The Budget Tracker](?help=tracker)
- [Financials: the P&L](?help=tracker-financials)
`,ze=`---
keys:
  - tracker/conflict
title: Someone else saved
chain: Budget Tracker, Someone else saved
tool: tracker
views:
ask: a finance admin
reviewed: v3.52
sources:
  - src/modules/tracker/dialogs/conflict.js
  - src/modules/tracker/saves-vs.js
---
# Someone else saved

The Budget tab, the OPEX panel and the Monthly tracker are shared: several people can type into them at once, and their
changes merge. When you and a colleague change the same figure and they saved first, the tracker does not quietly keep
one of you. It stops and shows the window **Somebody saved the Budget before you** (or the OPEX). The chip beside your
name says NOT SAVED, someone else saved first.

Nothing has been written and nothing of yours has been lost yet.

Anyone who can type into the Budget tab or the Monthly tracker can meet this window, so the page asks for no particular
view: it is listed for everyone with the Budget Tracker.

## Choosing a version

The table lists every value you changed, with **Your value** and **Their value** side by side. Then:

- **Reapply mine** puts your changes back on top of their version and saves again. Their other changes stay.
- **Take theirs** drops your changes to those values and keeps theirs.

Neither button is pressed by Enter, so read the list first. If you are not sure whose figure is right, ask the colleague
before you choose.

## Decide later

The cross at the top (its tip says **Decide later**), or a click outside the window, closes it without choosing. Then:

- Your values stay on screen, and nothing is sent. While the clash waits, none of your changes are saved, not only
  the clashed ones: for a Budget clash nothing of the Budget tab or the Monthly tracker, for an OPEX clash nothing of
  the OPEX. The chip beside your name keeps saying NOT SAVED.
- The window comes back the next time the tracker tries to save: after your next change, or when you come back to the
  browser tab. It lists the values still in question.
- If you leave the page with the clash still open, the tracker warns you first. Leave anyway and your changes are lost.

If the list is empty, nothing of yours is outstanding: reload the page to see their version.

## Related

- [Budget and OPEX](?help=tracker-budget)
- [The Monthly tracker](?help=tracker-monthly)
- [The Budget Tracker: saving and the sync chip](?help=tracker)
`,Ve=`---
keys:
  - tracker/financials/import
title: Importing a month
chain: Budget Tracker, Financials, Admin, Import a month
tool: tracker
views:
  - financials
  - admin
ask: a finance admin
reviewed: v3.57
sources:
  - src/modules/tracker-financials/index.js
  - src/modules/tracker/fin-data.js
---
# Importing a month

Each entity's P&L comes in from Xero one file at a time. Importing is a group admin task, done per entity: switch the
Entity to ACT or NSW first (Combined has no import of its own).

## Getting the file from Xero

In Xero, open Reports, then Profit and Loss, and export it as a CSV. Use one entity, the accrual basis, monthly columns,
in Australian dollars excluding GST. A file with several months imports every month in it.

## The preview

Choose the file. Before anything is written, the panel lists each month in the file with its rows, Income, COS, Opex,
Other inc and Net profit, and a Check: "ties to the file" when the month's own totals add up. A month that does not tie
says why and is skipped. If no month ties, the file is not imported and the reasons are listed.

Then press the button, which says how many months it will import and into which entity.

## What it replaces

Importing an open month again replaces that month's figures with the new file, as a new version; the Month panel shows
the last import. A closed month is refused, and the rest of the file still lands. To replace a closed month, reopen it
first. Each month is imported on its own, so one refusal never undoes the others.

## Related

- [Financials: the P&L and its tiles](?help=tracker-financials)
- [Financials settings](?help=tracker-financials-settings)
`,Qe=`---
keys:
  - tracker/financials/settings
title: Settings
chain: Budget Tracker, Financials, Admin, Settings
tool: tracker
views:
  - financials
  - group-admin
ask: a group admin
reviewed: v3.57
sources:
  - src/modules/tracker-financials/index.js
  - src/modules/tracker/fin-data.js
---
# Financials settings

These settings are per entity (ACT or NSW; the Combined view has none) and they feed two places: the Financials tiles and
the On track tab in Invoicing. Editing them is a group admin action: only a group admin with the Financials view sees the
Admin tab and can save. Everyone else with the Financials view sees the values read-only at the foot of the P&L.

## The fields

- **Standard week (hours)**: what a full-time week is at Synchronous. It sets the basis the chargeable hours are quoted
  on, and the per-hour tiles name it when you hover them.
- **Chargeable hours / month**: the entity's billable hours a month. Once the Departments table below has rows, this is
  the table's total, saved with it, and is shown rather than typed. Remove every department to type a figure here again.
- **Charge-out rate $/h**: the hourly rate the absorbed cost per hour is measured against on the Financials tiles.
- **On-cost estimate %**: feeds the Estimate column only, the one shown beside a month that has no on-cost posted at
  all. It is never in a total. Type it as a fraction: 0.15 is 15 percent.
- **Monthly overhead $ (On track)**: the overhead On track shares out across this branch's departments by their share of
  the billable hours. Leave it blank and On track uses the normalised overhead run-rate instead; type it when you want a
  planning figure rather than history.

The standard week, the chargeable hours and the charge-out rate are display settings: they are not frozen when a month
closes, so changing one moves the per-hour tiles for closed months too.

## Departments and overhead

The Departments table is how On track knows who does what. Each row is a department with:

- **Name**: as you want it to read on the On track tab.
- **Job types**: the job types whose lines count for this department, shown as chips. A type can be in one department
  only; a type in no department sends its lines to Unassigned. Projects is never placed: it is a parent-only type and the
  sections carry the work.
- **Headcount** and **Monthly hours**: the people in the department and the hours they are expected to charge in a normal
  month. The table's total becomes the entity's chargeable hours.

Add a row for a new department, remove one that has closed, then **Save settings**. The change shows on On track at its
next refresh.

## Picking job types

Click **Add job types** on a row. A list opens below it with every job type for the branch: the job types in Lists, which
the nightly Ascora sync keeps up to date, plus any type a job of the branch carries. Type in the search box to narrow a
long list. Tick a type to add it to the department, and untick it (or press the cross on its chip) to take it off.

Some types cannot be ticked, and say why:

- **in** another department: a type sits in one department only. To move it, untick it on that department's row first,
  then tick it here.
- **parent-only**: Projects, whose sections carry the department's type.
- a name with a comma, which the setting cannot hold: rename it in Lists first.

A chip marked "not in the job-type list" is a type the setting holds that the branch's list no longer has, for example one
renamed in Ascora. Its lines still count until you take it off.

From the keyboard: Tab to **Add job types** and press Enter; the arrow keys move between the search box and the types,
Space ticks one, and Escape closes the list. The save checks everything it checked before (a type in two departments,
Projects, the names and the hours) and saves nothing if one fails.

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
`,Ke=`---
keys:
  - tracker/financials
title: Financials: the P&L and its tiles
chain: Budget Tracker, Financials, P&L
tool: tracker
views:
  - financials
ask: a group admin
reviewed: v3.57
sources:
  - src/modules/tracker-financials/index.js
  - src/modules/tracker/fin-data.js
---
# Financials: the P&L and its tiles

Financials is the management P&L, built from the Xero Profit and Loss each entity imports month by month. It shows every
imported month side by side, the year to date against the budget, and the tiles that say how the business is running:
revenue, margin, overheads, EBIT, and behind them the run-rates and break-even.

## Choosing what you see

The bar across the top has:

- **Entity**: ACT, NSW or Combined. A branch member sees their own entity only. Combined is ACT and NSW added together
  before eliminations, and a month shows a Combined figure only once both entities have closed it.
- **Basis**: Posted, Adjusted or Compare (see below).
- **Month**: the month the side panels and the bridges talk about. Each month in the list says open or closed.
- **Compact** and **Comfortable**: how tightly the table's rows are packed.

## Choosing the basis

**Posted** is the imported Xero file to the cent, every account in the section it was posted to. **Adjusted** is the
management view: on-costs allocated to direct labour by the wage share, and some accounts reclassed into the line they
belong to. Every adjustment moves money between lines, so net profit before tax is the same in both.

**Compare** shows Posted and Adj side by side for each month, with the figures that moved highlighted. On the selected
month's Adj column a **bridge** button lists that month's moves under the table. The **Bridges** panel below the table
explains each month in full: the on-cost allocation, the reclasses, and an estimate column that appears only when no
on-costs were posted at all (it is never in a total).

## Reading the table

The rows are grouped into Income, Cost of sales, Overheads and Below the line. Each month's column says "open" until the
month is closed. A month marked "does not reconcile" did not reproduce its imported file: re-import it and do not use its
figures until you have. After the months come **YTD closed only** (closed months only), **FY to date** (any imported
month, open or closed), **Budget** and **Var**. Budget is the revenue line only for now; every other line shows a dash,
not a nought.

## The tiles

Four tiles sit above the table: **Revenue**, **GM%**, **Overheads** and **EBIT**. They are worked out over the run-rate
window, the last three closed months, and the bar's note names those months. Hover a tile to see how it is worked out.

**Run-rate and break-even** opens the rest: loaded GM%, direct labour as a share of revenue, the overhead, D&A and loaded
labour run-rates, the contribution margin ratio, the two break-evens, and the costs per chargeable hour. Your choice to
keep it open is remembered.

## What the badges mean

- **incomplete**: an overhead category holds an annual account with no annual reference, so its run-rate is a trailing
  average rather than the true yearly cost. The figure is still a number, not a blank. The annual reference figures are
  set by a group admin: ask one.
- **timing**: posted materials and the schedule's actual materials differ a lot in at least one month, so the break-even
  is noisy because cost and revenue landed in different months.
- **excludes D&A (set in Settings)**: there is no depreciation figure, so the break-even is understated.

A tile with no closed month yet says so, and one whose figures did not load says "unavailable". Neither is a nought.

## The month and unmapped accounts

The panel on the right shows the selected month as OPEN or CLOSED, who closed it and when, and its last import. A group
admin closes the month here with the Close button that names it, and reopens it the same way. Below it,
**Unmapped accounts** lists any Xero account the P&L does not yet know where to put. They count inside their Xero
section, so net profit still ties, but a month cannot be closed until they are mapped in Users, then Lists, P&L accounts.

## Admin

The Xero import and the reference figures are done by a group admin. A group admin also sees **P&L** and **Admin** in
the bar, and **Import a month**. Admin holds two tabs: Import a month and Settings. Everyone else sees the same two
panels below the P&L, read-only.

On a phone the Financials tab is read-only.

## Related

- [Importing a month](?help=tracker-financials-import)
- [Financials settings](?help=tracker-financials-settings)
- [On track](?help=tracker-invoicing-ontrack)
- [Lists: P&L accounts](?help=shell-users-lists)
`,Ze=`---
keys:
  - tracker/import-estimate
title: A job from an estimate
chain: Budget Tracker, Invoicing, Import from estimate file
tool: tracker
views:
  - invoicing
ask: a finance admin
reviewed: v3.57
sources:
  - src/modules/tracker-import/index.js
  - src/modules/tracker/deps.js
  - src/modules/tracker/index.js
---
# A job from an estimate

A won estimate can become a tracker job without retyping it: the job, its sections and a forecast for every month come
across in one go. There are two ways in, and both end in the same preview.

- **Send to tracker** from the Estimator. The tracker opens on the invoicing schedule with the preview already filled in.
  If the tracker says the hand-off has expired, send it again from the Estimator.
- **Import from estimate file...** on the invoicing schedule, for the export file the estimating workbook writes (a .json
  file). Choose the file; nothing is written until you press Import.

Both need the Invoicing view as an admin, or as an editor in your own branch. If you do not see the button, ask a
finance admin.

## Choosing a file

Pick the workbook's export file. Two files look similar and are turned away with a sentence each:

- an Estimator save file (the file Open file reads in the Estimator) is not a workbook export: open the estimate in the
  Estimator and use Send to tracker instead;
- an Estimator hand-over only arrives through Send to tracker, never as a file.

A file that is not an export at all stays on this step with the reason listed.

## The preview

Nothing has been written yet. The preview shows:

- **The job card**: job number, name, customer, project manager, branch, job type, status, invoice day and the quoted
  total (ex GST).
- **Sections**: each part with its type, quoted value, number of months, forecast, and a **Footing** column that says OK,
  or how far short or over the part's months are.
- **Months**: every month of the forecast by section, with the claim, labour, materials and subcontractor figures.
- **Checks**: the refusals in one colour and the warnings in another.

A refusal stops the import and leaves **Import** greyed out. The common ones:

- the job number, or one of its section numbers (the job number, a dot, then two digits), already exists, active or
  archived; the file needs a new job number;
- you cannot add jobs to that branch;
- a month in the schedule is closed for the branch (an admin can still import; an editor asks an admin to reopen it);
- the sections do not add up to the total, or a part's months do not add up to it.

A warning does not stop the import. It tells you something to tidy afterwards: the PM is not on the PM list, the customer
is not on the customer list, the job type is not one of the branch's job types, or the job has no status.

When every check passes the list says so in one line. Press **Import**. **Back** returns to the file step and
**Cancel** closes without writing anything.

## What lands where

The job is created the way the setup wizard creates it: the parent job, one line per section numbered from the job, and
each month's forecast claim, labour, materials and subbies on those lines. The dialog closes, the schedule shows the job
expanded, its job window opens, and a message says how many sections and months came across. Check the months in the job
window, then set anything the warnings named. Once the job and its sections are in Ascora, their job types follow
Ascora's at the tracker's next daily match.

## When the server does not answer

If the reply goes missing, the dialog asks the server whether the job exists rather than guessing. It then either says
the job was not created (you can try again), reloads the schedule and opens the job because it was created, or says it
cannot tell yet. In that last case press **Retry check**, or reload the page and look for the job in the schedule before
importing again. Never import twice while it is unsure.

## Related

- [The estimate editor: Send to tracker](?help=estimator-editor)
- [Adding a job by hand](?help=tracker-add-job)
- [The job window](?help=tracker-job)
- [Lists: PMs and job types](?help=shell-users-lists)
`,en=`---
keys:
  - tracker/import-jobs
title: Importing jobs from a file
chain: Budget Tracker, Invoicing, Import jobs
tool: tracker
views:
  - invoicing
  - admin
ask: a finance admin
reviewed: v3.52
sources:
  - src/modules/tracker/dialogs/import-jobs.js
  - src/modules/tracker/dialogs/import-calc.js
---
# Importing jobs from a file

**Import jobs** on the invoicing schedule creates many single-section jobs at once from Ascora's standard job export, one
job per row, each with its whole value forecast in one month. It is for admins only.

## The file and the options

Choose the export (a .csv file), or paste the rows from Google Sheets or Excel, with or without the header row. Then set
the **Branch**, the **Forecast month** every job's value goes into, and an **Invoice day for every job** (or leave it
blank). Two options: **Tech = PM** fills each job's technician with its PM, and
**Jobs assigned to me in Ascora have no PM yet** (shown when you are on the PM list) treats your own name in the file
as a placeholder rather than the real PM. Press **Next**.

## The preview

Nothing is created yet. Each row shows the job number, name, value, job type, customer, PM, tech and status. A row that
needs a look says why; a row that will be skipped says why under its job number. Untick a row to leave it out, correct a
cell, or use **Set for ticked rows** to give many rows the same job type, customer, PM or status. Then press the Import
button, which says how many jobs it will create.

The jobs are created one at a time, the way the wizard creates them. **Stop after this one** halts the run cleanly.
The job type you import is a starting point: at its next daily match with Ascora each job takes Ascora's job type, which
the job window then shows read-only.

## Undo

When it finishes, **Undo this import** removes the jobs it created. The last few imports stay under **Recent imports** in
this browser for a week, each with its own **Undo**. A job someone has since changed, or one with an actual or a note
typed on it, is not removed until that is put back; the window says which and why.

## Related

- [Adding a job by hand](?help=tracker-add-job)
- [The invoicing schedule](?help=tracker-invoicing)
- [Lists: PMs and job types](?help=shell-users-lists)
`,nn=`---
keys:
  - tracker/invoicing/ontrack
title: On track
chain: Budget Tracker, Invoicing, On track
tool: tracker
views:
  - invoicing
ask: a finance admin
reviewed: v3.59.1
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
- **Hours gap**: hours on jobs against billable hours. Red (short of work) means fewer hours are booked than the
  department's people have. In the Forecast table amber (need more labour) means more are booked than they have, and
  green means the two match; in the Actual table anything not short is green.
- **Hours costed**: the hours the labour is costed on, the larger of hours on jobs and billable hours. Idle people still
  cost, so the larger figure is used.
- **Cost of delivery labour**: the hours costed at the branch's labour rate.
- **% of billable hours**: the department's share of the branch's billable hours. The overhead is shared out by it.
- **Allocated overhead**: the branch's monthly overhead times that share (and times the part of the month elapsed in the
  Actual table). The overhead comes from Settings; if none is typed there, the tracker uses the branch's average from its
  closed months, and the heading says which.
- **Materials** and **Subbies**: from the job lines (estimated in Forecast, actual in Actual). Workshop stock counts as
  materials for the month it was bought.
- **Gross margin** and **GM %**: revenue less labour, materials and subbies, before any overhead, and that margin as a
  percentage of revenue. With no revenue there is no percentage.
- **Breakeven**: labour plus allocated overhead plus materials plus subbies.
- **Position**: revenue less breakeven. Green is above breakeven, red is below.

Hover a money cell to see which job lines are behind it.

## A department's job types

Click a department's name (or tab to it and press Enter) to open its job types as indented rows under it; click again to
fold them. It works the same on a phone: tap the name, and scroll the table sideways inside its card. Each table opens on
its own, uses the same month as the department line and stays open while the figures refresh. The Unassigned row opens
too, showing which types sent lines there.

A job type row shows the figures that belong to that type alone:

- **Revenue**, **Hours on jobs**, **Materials** and **Subbies**: from the lines whose own job type it is, on the same basis
  as the department line.
- **Hours costed**: its billable hours, the hours on its own jobs plus its share of the department's billable hours that
  nobody booked. That share follows each type's hours on jobs (or its revenue when no hours are booked).
- **Cost of delivery labour**, **Gross margin** and **GM %**: the department's labour shared by hours costed, then the
  margin as above.

The job types always add up to the department line, to the cent. The screen shows each figure rounded (whole dollars,
hours to one decimal), so adding up the rows as shown can differ from the department line by a dollar (or a tenth of an
hour); the figures behind them agree. When some lines have no job type, or a cent of rounding is left over, an
**Other / no job type** row holds it so the rows still add up.

**Headcount**, **Monthly billable hours**, the **Hours gap**, the **% of billable hours**, the **Allocated overhead**,
**Breakeven** and **Position** show a dash on a job type. People and capacity are set per department, not per job type, so
there is no honest split of them, and the overhead, breakeven and position depend on that share. Read them on the
department line.

## Why a job sits in Unassigned

A line reports under its own job type, and each job type belongs to a department in Settings. A line shows in Unassigned
when it has no job type, when its type is Projects (a parent-only type: the sections carry the work), or when its type
has not been placed in a department yet. The note under the tables lists those lines. To fix it, set the job's type in
Ascora (a job only in the tracker takes it in its job window), or ask a group admin to place the type in a department.

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
`,tn=`---
keys:
  - tracker/invoicing/stock
title: Stock materials
chain: Budget Tracker, Invoicing, Stock materials
tool: tracker
views:
  - invoicing
ask: a finance admin
reviewed: v3.57
sources:
  - src/modules/tracker-invoicing/stock.js
  - src/modules/tracker/inv-model.js
---
# Stock materials

Stock materials is workshop stock: materials ordered for the shelf against no job. Without it, that spend would be
missing from the branch's costs. The tab uses the same branch and months as the schedule, and closed months are locked
here too (a padlock beside the month).

## Keying stock

There is one row per supplier. Under each month, type the order value; beside it, **Actual** is what was actually spent
that month. With several months on screen, Actual shows only while the schedule's Actual column is on. **FY total** and
**FY actual** add up the financial year, and the Total row adds up the suppliers.

To start a new row, pick a supplier in **+ Add supplier...**, then key its order value for a month. An admin can type a
new supplier's name to add it to the list.

An empty cell is blank and stays out of the totals; a typed nought is a real nought and is kept. A view only member sees
the figures without boxes.

## How it counts

The heading shows the month to date actual and the year's ordered and actual totals. The current month's actual spend
counts as materials on the On track tab, in its own Workshop stock row.

## Related

- [On track](?help=tracker-invoicing-ontrack)
- [The invoicing schedule](?help=tracker-invoicing)
`,an=`---
keys:
  - tracker/invoicing
title: The invoicing schedule
chain: Budget Tracker, Invoicing, Schedule
tool: tracker
views:
  - invoicing
ask: a finance admin
reviewed: v3.59
sources:
  - src/modules/tracker-invoicing/index.js
  - src/modules/tracker-invoicing/schedule.js
  - src/modules/tracker-invoicing/metrics.js
  - src/modules/tracker-invoicing/cards.js
  - src/modules/tracker/columns.js
  - src/modules/tracker/exports.js
---
# The invoicing schedule

The schedule is one row per job and one group of columns per month. Each month, the PM forecasts what the job will claim
and what it will cost; an admin later keys what was actually invoiced and spent. The forecast claims, summed across the
jobs, are the branch's revenue forecast in the Monthly tracker, so keeping the schedule current is keeping the forecast
current.

## Choosing the branch and the months

Across the top: the branch (NSW or ACT; a branch member sees their own), the arrows to step back and forward a month,
and the months box: 1 to 6 months, This FY, or Custom. With one month on screen you get every column for that month; with
several, each month is its own bordered group.

The schedule opens with the months a year either side of today and fetches more as you step through. **Load all months**
fetches every month the branch has; **Show the window** goes back to the usual range.

Projects open collapsed, one row each with the project's totals. Click the arrow beside a project to see its sections and
variations, or use **Expand all** and **Collapse all**. Click a job's name to open [the job window](?help=tracker-job).

## Typing a forecast or an actual

Type a dollar figure, a short form such as 8.5k, or a percentage of the quoted value (10%). The percentage always shows
under the dollars. Editors type the forecast, the estimated costs and the hours in open months; admins also key the
actual claim, the actual costs and the actual hours, and set the claim status. The caption under the grid says what you
can do. Job, Quoted and Invoiced stay frozen on the left while the months scroll.

## Filters and search

**Filters** opens the drawer. The filters are Claim status, PM, Job type, Client, Claim date and Job status, plus
**Show archived** (archived jobs are greyed and never counted). The search box finds a job name, number, client or
section label. Each active filter shows as a chip you can remove with its cross. A project shows if it or any of its
lines matches, and then all its lines show for context.

## Choosing columns

The drawer's Columns section has **View**, a set of presets: PM view, Admin claim view, Cost view and Everything. Tick or
untick single columns below it, and the view becomes Custom. The chips beside the search (Claim, Materials, Labour,
Subbies, Margin) switch a whole group on or off. With several months on screen, Forecast is always shown and cannot be
unticked. **Reset my view** puts every display choice back to its default.

Your columns, sort, filters and months follow you to any device you sign in on.

## The tiles and Metrics

The strip above the grid shows **Forecast to invoice**, **Invoiced**, **Ready to invoice** and **Forecast complete**
(the share of quoted value forecast across all months). **Metrics** opens more: the forecast and actual margins, the
number of projects, and a tile per claim status with the value sitting at it. A tile says "loading", "unavailable" or
"nothing in this branch and range" rather than showing a misleading nought.

## Exporting

**Export all data** in the bar downloads every figure for the months loaded; **Export this view** downloads exactly the
columns on screen. For every month the branch has, press **Load all months** first. The file's first line says which
range it holds.

## On a phone

Under a narrow width the grid becomes a list of cards for the month on screen: each job shows Quoted, Forecast, Actual
and Status, with its sections inside. **Mine** shows your own jobs, **All** shows everyone's, and **+ Add job** is there
if you can add jobs. A forecast or status changed on a card is the same change as on the grid.

## Automations on the schedule

A change you make here can start an automation: a claim's status changing (for example to Ready to invoice), a
claim's forecast or actual changing, a month being closed or reopened, or a job's status changing. Someone with the
Automations view builds these, for example "when a claim is Ready to invoice, tell the Invoicing space in Chat". Your
save never waits for them and never fails because of them. A big import sends one summary, not one message per line.
See [Automations](?help=automations) and [Chat messages from automations](?help=automations-chat).

## Related

- [Job statuses and claim statuses](?help=tracker-statuses)
- [Labour hours and the branch rate](?help=tracker-labour)
- [Adding a job](?help=tracker-add-job)
- [On track](?help=tracker-invoicing-ontrack)
- [Stock materials](?help=tracker-invoicing-stock)
`,sn=`---
keys:
  - tracker/job
title: The job window
chain: Budget Tracker, Invoicing, The job window
tool: tracker
views:
  - invoicing
ask: a finance admin
reviewed: v3.52
sources:
  - src/modules/tracker/dialogs/job-modal.js
  - src/modules/tracker-invoicing/schedule.js
  - src/modules/tracker/loaders.js
---
# The job window

The job window is everything the tracker holds about one job: its details, every month that has data, its sections and
variations, and the admin controls to renumber, archive or delete it. Click a job's name (or a section's label) in the
invoicing schedule to open it; it also opens after you create or import a job. **Close** returns to the schedule. The
heading names the job, its number, customer and branch, and the project it belongs to, if any.

## The details

**Job name**, **Customer**, **Sync BA PM**, **Sync BA Tech**, **Job type**, **Invoice day**, **Quoted $** (called
**Base scope quoted $** on a project with sections), **Job status** and **Job number**. A top-level job also has
**Job value $**, **PO value $** and **PO month**. An admin edits these, and can pick **Add new** in a list to add a name;
a change saves when you leave the field. Everyone else sees them read-only, with the status as a coloured pill.

On a section or variation the PM and Tech belong to the parent project: they show the project's names, read-only, with
a note saying where they are set. A PM or Tech change on the project moves to all its sections and variations.

The line under the details shows the invoiced to date (for a project, its quoted and invoiced totals) and the share
forecast.

## Where the job type comes from

A job or section that is in Ascora takes its job type from Ascora. The tracker matches it by job number and branch once
a day, and the window shows the type read-only with "from Ascora" under it. To change it, change the job type in Ascora;
the tracker picks it up at the next daily match. A job that is only in the tracker keeps an editable picker.

If the type looks wrong, check the job in Ascora first. A tracker job number that differs from Ascora's never matches:
fix it with **Change**. If Ascora calls a job with no sections Projects, the tracker keeps its own type until Ascora is
fixed.

## The months

One row per month that has data: **Forecast $**, **Actual $**, estimated and actual materials, subbies, hours and labour,
the **Margin** (claim less materials, subbies and labour; the actual margin shows under it), the **Claim status** and
**Notes**.

- Money cells take a plain amount, a short form such as 8.5k, or a percentage of the quoted value; the percentage shows
  under the figure.
- Hours go in the hours columns and the labour dollars follow at the branch rate. A dollar figure typed over the hours
  stands until you clear it. See [labour hours](?help=tracker-labour).
- Each month says **OPEN** or **CLOSED**. An editor can change the forecast side of an open month; an admin can change
  the actual side and any month, and can click OPEN or CLOSED to close or reopen it. Each cell saves as you leave it.

To start a new month, pick the month and year under the table and press **+ Add month**.

## Sections and variations

A project's window lists its sections and variations; click one to open it. The line beside them says whether they
foot to the job value.

Under the months, **Add line** adds a **Variation** or a **Section** with the next number. Give it a label, a quoted
value (for a section, a type) and a schedule that forecasts it in full. An admin, or an editor in their own branch, can
add one. Only an admin can turn a single-section job into a sectioned one: its base scope and months move into a Base
scope section first.

## Changing the job number

An admin sees **Change** beside the job number. It shows how many month lines and sections move with it, can renumber
the sections to match, and moves everything in one go.

## Archive and delete

An admin sees, at the foot of the window:

- **Archive project** (or section): hides it and its sections from the schedule and keeps all its history. Undo it any
  time: tick **Show archived** in the schedule's filters, open the job and press **Restore**.
- **Delete permanently**: irreversible, and takes the sections and every month line with it. It lists what would be
  destroyed and asks you to type the job number. A job with invoiced history, typed actuals, actual materials or notes
  is blocked: archive it instead. Tick the box that unblocks it only if you truly mean to destroy that history.

## Related

- [Labour hours and the branch rate](?help=tracker-labour)
- [Job statuses and claim statuses](?help=tracker-statuses)
- [Lists: job types and PMs](?help=shell-users-lists)
`,on=`---
keys:
title: Labour hours and the branch rate
chain: Budget Tracker, Labour
tool: tracker
views:
  - invoicing
ask: a finance admin
reviewed: v3.57
sources:
  - src/modules/tracker/inv-model.js
  - src/modules/tracker/inv-data.js
---
# Labour hours and the branch rate

Labour on the invoicing schedule is counted in hours. You type the hours a job takes in a month, and the tracker turns
them into dollars at the branch's labour rate. Keeping hours rather than dollars means every line is costed the same way,
and On track can compare the hours booked on jobs with the hours your people have.

## The four labour columns

Each month has an estimate side and an actual side, and each side has an hours column beside its dollar column:

- **Est. hrs** and **Est. lab.**: the hours the PM expects the job to take that month, and their cost. The PM (any
  editor) types these in an open month.
- **Actual hrs** and **Actual lab.**: the hours actually worked on the job, and their cost. An admin keys these.
- **Lab. var**: actual labour less estimated labour. Red means the job used more labour than estimated.

With several months on screen the same columns are called Est hrs, Est lab, Act hrs and Act lab. Turn them on with the
Labour chip, or in Filters, then Columns.

## Typing hours

Type a number of hours (8, 8h or 7.5 hrs) in an hours column, and the dollar column fills in at the branch rate. You can
also type 8h straight into a dollar column: it is taken as hours for its twin. Hours can never be a percentage or below
nought, and the cell tells you so if you try.

Under each labour figure a small line says what it is: the hours and the rate it was costed at, or "lump sum (no hours)"
when there are dollars and no hours.

## Typing a dollar figure instead

Sometimes a figure is known in dollars, not hours. Type it in the dollar column and it stands as typed. Where it sits
over hours, the line says "typed", with the hours and what they would have cost, so you can see the difference. A typed
figure stays until you clear it or new hours are entered, because the newer entry wins. If you type a figure that is
exactly the hours at the rate, it is treated as derived again.

## The branch rate

Each branch has one labour rate per hour. A group admin or the branch's admin sets it in the rate box on the On track
tab, and the caption under the schedule shows the current rate. A new rate re-costs every line that has hours and no
typed figure. A closed month keeps the rate it was closed with, so a past month's cost never moves.

## Actual hours from Ascora

Actual hours start in Ascora's timesheets. There are two ways in:

1. An admin keys them from the Ascora Job Actuals report, as for actual materials.
2. You ask Claude, through the SyncOS connector, to read the month to date from Ascora. Claude proposes the hours
  job by job and shows you a preview first. Changes that would replace a typed figure are listed first. Nothing is
  written until you say yes.

Claude writes hours, never Ascora's own dollar cost. The tracker then costs them at the branch rate, exactly as if you
had typed them. Claude changes only months that already have a line on the job: add the month in the app first. A job
whose sections are separate lines is left to you to key by hand, and Claude says why. Claude works as you, so it can
change only what you could change yourself.

## Where hours show up

Hours feed the job's margin (Margin fc and Margin act), the On track tables (hours on jobs against billable hours), and
the hours by month line under the On track chart. Labour on a closed month is part of that month's figures for good.

## Related

- [The invoicing schedule](?help=tracker-invoicing)
- [On track and the rate box](?help=tracker-invoicing-ontrack)
- [Using Claude with SyncOS](?help=shell-claude)
- [The job window](?help=tracker-job)
`,rn=`---
keys:
  - tracker/monthly
title: The Monthly tracker
chain: Budget Tracker, Monthly tracker
tool: tracker
views:
  - monthly
ask: a finance admin
reviewed: v3.52
sources:
  - src/modules/tracker-monthly/index.js
  - src/modules/tracker/model-monthly.js
  - src/modules/tracker/controls.js
---
# The Monthly tracker

The Monthly tracker follows one entity through one financial year, month by month: the orders that came in, the revenue
planned, invoiced and forecast, the backlog of work in hand, and the P&L from Xero. Pick the **Entity** and the **Year**
in the bar above the tabs, as on the Budget tab.

## The tiles and charts

Four tiles across the top: **Revenue (FY)**, **Bookings (FY)**, **Backlog (closing)** and **Net profit (FY)**. The line
under each says what it is made of, for example actual plus forecast part way through the year.

**Revenue by month** draws the actual revenue as bars, with the plan and the forecast as lines. **Backlog, work in hand**
draws the closing backlog for each month. The caption under each chart says where its figures come from.

## The table

One column per month from July to June, then the FY total. The rows, in two groups:

**Sales and backlog**

- **Opening backlog**: the work in hand at the start of each month. You type only the first month; every later month
  starts from the month before.
- **New orders (bookings)**: the value of new jobs won each month. Until you type real bookings they default to the
  month's revenue, so the backlog holds flat.
- **Revenue, plan**: in a budget year this defaults to the Budget tab's revenue target, spread over last year's monthly
  shape. Type over a month to change it.
- **Revenue, actual**: the month's actual revenue, typed by hand (it is not filled from Xero). A month with an actual
  is tinted, and the tiles use the actual in place of the forecast for it.
- **Revenue, forecast**: rolled up live from the invoicing schedule's forecast claims. Type over a month only when you
  want a different figure for it.
- **Forecast vs plan**: the forecast less the plan, worked out for you.
- **Closing backlog**: opening plus new orders less revenue. Its FY column is the year-end balance, not a sum.

**P&L, actual (Xero)**: cost of sales, gross margin, operating expenses, other income and net profit. These compute and
cannot be typed.

## Typing a month

If you are an editor, the opening backlog's first month and every month of the four rows you can type in (bookings,
plan, actual and forecast) are boxes. Type a figure and press Enter or Tab; the closing backlog, the totals, the tiles and
the charts follow at once. Clear a box to put the month back to its default (the revenue for bookings, the Budget target
for plan, the roll-up for forecast).

Your edits save as you go and are shared with everyone who has the Monthly view, so a colleague's change can appear on
your screen while you look at it. If you both changed the same figure, you are asked which to keep.

Group is worked out from ACT and NSW added together and has nothing of its own to type. A Group month shows a dash until
both branches have it. Edit in the branch, then look at Group.

## When the forecast is still loading

The forecast row depends on the invoicing schedule. While that loads, its cells show a mark and the tiles say they are
using the plan for now. If the roll-up cannot be read, the cells say it is unavailable and the tracker keeps trying.

## Clear month edits

**Clear month edits** removes every edit on the entity and year on screen: bookings, plan, actual and forecast
overrides, and the opening backlog. It is for everyone who uses the tracker, so it asks first. The invoicing schedule's
roll-up is not touched. It is not offered on Group.

## A negative backlog

A closing backlog below zero usually means the opening figure is too low, or bookings have not been typed while revenue
was invoiced. Set the first month's opening backlog again, or type the real bookings.

## Phone

On a phone you see the tiles and a read-only list of the rows; type figures from a laptop.

## Related

- [Budget and OPEX](?help=tracker-budget)
- [The invoicing schedule](?help=tracker-invoicing)
- [Someone else saved](?help=tracker-conflict)
- [The Budget Tracker](?help=tracker)
`,hn=`---
keys:
title: Job statuses and claim statuses
chain: Budget Tracker, Statuses
tool: tracker
views:
  - invoicing
ask: a finance admin
reviewed: v3.59
sources:
  - src/modules/tracker/dialogs/lookups.js
  - src/modules/tracker/inv-data.js
  - src/modules/tracker/inv-model.js
---
# Job statuses and claim statuses

The tracker has two kinds of status, and they answer different questions. A **job status** says where the whole job is:
is it being quoted, under way, finished or paused? A **claim status** says where one month's claim on one line is: is it
only a forecast, is it ready for an invoice, has it been invoiced? A job has one job status; it has a claim status for
every month it has a line.

## Claim statuses

The claim statuses, in their usual order:

- **No claim**: nothing will be claimed on this line this month.
- **Forecast**: the PM expects to claim the forecast figure. This is where a month starts.
- **Ready to invoice**: the work is done and the PM is asking an admin to raise the invoice in Ascora. It is not
  revenue yet, so it does not count toward Invoiced.
- **Invoiced**: the invoice has been raised and the admin has keyed the actual claim. This counts as invoiced.
- **Complete**: the whole job is finished, not only this line's claim. An admin status that also counts as invoiced.

Only a status that counts as invoiced adds a line's actual claim to the Invoiced tile and to Inv'd $ and Inv'd %. The
Actual $ column shows every actual typed, whatever its status, so the two can differ while a line waits at Ready.

## Who can set a claim status

The Claim status column on the schedule is a drop-down when you may change it.

- A PM or any editor can choose No claim, Forecast or Ready to invoice on their lines, in an open month.
- An admin can choose any status, including Invoiced and Complete, and can change a closed month.
- With several months on screen the claim status is shown but not editable: switch to one month to change it.
- An archived job is read-only. Restore it first in its job window.

An editor whose line an admin has already marked Invoiced still sees that status; they just cannot choose it.

## Job statuses

The job statuses are **Quoting**, **In Progress**, **Completed** and **On Hold**. An admin sets the job status in the
Job status column of the schedule or in the job window; everyone else sees it as a label. Use the Job status filter in
the Filters drawer to see, say, only the jobs in progress.

## Where the lists come from

Both lists are kept in Users, then Lists, as Line statuses and Job statuses. A group admin can add a status, rename one
(every line that uses it follows), change the order, or delete one nobody uses. Each claim status there also carries two
switches: **counts-invoiced**, which decides whether it adds to Invoiced, and **admin-only**, which keeps it off an
editor's drop-down. The statuses above are the starting set; your lists may have more.

## Seeing the money at each status

Open **Metrics** above the schedule. There is a tile for each claim status in use, showing the value sitting at it (the
actual figure where one is keyed, else the forecast) and how many lines. The **Ready to invoice** tile in the strip is
the one to watch: it is work waiting for an invoice.

## A status change can notify someone

An automation can start when a claim's status changes from one status to another, or a job's status changes, and
send a Chat message, for example to the Invoicing space when a claim becomes Ready to invoice. Renaming a status on the
list is not a change of any claim: it starts nothing. See [Automations](?help=automations).

## Related

- [The invoicing schedule](?help=tracker-invoicing)
- [The job window](?help=tracker-job)
- [Lists](?help=shell-users-lists)
`,ln=`---
keys:
title: The Budget Tracker
chain: Budget Tracker
tool: tracker
views:
ask: a finance admin
reviewed: v3.57
sources:
  - src/modules/tracker/index.js
  - src/modules/tracker/router.js
  - src/modules/tracker/markup.js
  - src/modules/tracker/saves-vs.js
---
# The Budget Tracker

The Budget Tracker is where the branches plan and track the money: the budget for each business unit, the month by
month tracker, the invoicing schedule every PM keeps for their jobs, and the P&L imported from Xero. It replaces the
forecasting spreadsheets, and everyone works on the same live figures, so what you type is what the next person sees.

## The four tabs

The tabs sit in the header once the tracker is open. You see only the tabs your account has been given.

- **Budget**: the business unit budget and, for those who hold OPEX, the operating expenses. See
  [Budget and OPEX](?help=tracker-budget).
- **Monthly tracker**: the year month by month, with the rows you can type into. See
  [the Monthly tracker](?help=tracker-monthly).
- **Invoicing schedule**: every job, every month: forecast claims, actuals, costs and hours. See
  [the invoicing schedule](?help=tracker-invoicing).
- **Financials**: the P&L from Xero, its tiles and the month close. See [Financials](?help=tracker-financials).

If your account has no tab at all, the tracker says "No views enabled". Ask a group admin to give you a view in Users.

## Who sees what

Three things decide what you can do. Your **views** decide which tabs you see. Your **level** decides whether you can
change things: a view only member reads, an editor types forecasts and estimates, an admin also keys the actuals, sets any
status and opens and closes months. Your **scope** is your branch (ACT or NSW) or the whole group: a branch member sees
and changes their own branch only, and the Group choice is not offered to them.

## The bar across the top

On Budget and Monthly tracker the bar holds **Entity** (Group, ACT, NSW) and **Year** (FY26 actual, then the plan years).
Invoicing and Financials have their own branch or entity choice, so the bar hides those two there.

- **Export all data** downloads every figure the screen holds as a CSV file.
- **Export this view** (Invoicing only) downloads just the columns you have on, in the order you see them.
- **Reset** (Budget view only) puts the growth, margin and revenue target assumptions of the entity on screen back to
  their defaults, for everyone. It asks first, and OPEX and the Monthly tracker are not touched.

## Open and closed months

Months lock so that a figure, once reported, stays put. On the invoicing schedule each month shows OPEN or CLOSED; an
admin closes a month when its claims are done, and after that an editor can no longer change it. An admin can reopen
it. The P&L has its own close in Financials, which a group admin does once the month's Xero file is in and every account
is mapped. The two are separate: closing one does not close the other.

If you try to change a closed month you get "Not saved, the month is closed. Ask an admin to reopen it."

## Saving and the sync chip

There is no Save button on the schedule. A figure saves when you leave the cell: a small mark shows while it is saving,
and an exclamation mark stays on the cell if it did not save, with the reason above the grid. Lost connections are
retried for you; a refusal is not, and the message says what to do.

On Budget and Monthly tracker the chip beside your name says **saving...**, **saved** or **NOT SAVED**. "NOT SAVED,
someone else saved first" means two people changed the same thing; the tracker shows you both and asks which to keep.
See [Someone else saved](?help=tracker-conflict). If you try to leave with work unsaved, the platform warns you first.

## Sharing what you see

The address in your browser follows the screen: the tab, the branch or entity, the months and an open job. Copy it and
send it, and the other person lands on the same screen. A link never widens anyone's access: a tab or branch they do not
hold is simply ignored.

## Related

- [The invoicing schedule](?help=tracker-invoicing)
- [Job statuses and claim statuses](?help=tracker-statuses)
- [Labour hours and the branch rate](?help=tracker-labour)
- [Users: views, levels and scopes](?help=shell-users)
`,Y=Object.freeze(["keys","views","sources"]),ce=Object.freeze(["title","chain","tool","ask","reviewed"]),dn=Object.freeze(["stub"]),cn=Object.freeze([...Y,...ce,...dn]),un=Object.freeze([...Y,...ce]);class ue extends Error{constructor(a){super(a),this.name="HelpFormatError"}}const re="---",pn=/^([a-z]+):(?:[ \t]+(.*?))?[ \t]*$/,mn=/^ {2}- (\S.*?)[ \t]*$/;function gn(d,a){const o=`page ${a}`,n=(l,u)=>{throw new ue(`${o}: line ${l}: ${u}`)},h=String(d).replace(/\r\n?/g,`
`).split(`
`);h[0]!==re&&n(1,"the page must start with a front matter fence (---)");const c={};let t=1,i=null;for(;t<h.length;t++){const l=h[t],u=t+1;if(l===re)break;l.trim()===""&&n(u,"a blank line inside the front matter");const m=mn.exec(l);if(m){i||n(u,"a list item with no list field above it"),(/^-\s/.test(m[1])||/^[a-z]+:(\s|$)/.test(m[1]))&&n(u,"a nested list (one list level only)"),c[i].push(m[1]);continue}/^\s/.test(l)&&n(u,"an indented line that is not a two-space list item (one list level only)");const y=pn.exec(l);y||n(u,`not a "key: value" line: ${l.slice(0,40)}`);const[,e,f]=y;if(cn.includes(e)||n(u,`an unknown field "${e}"`),Object.prototype.hasOwnProperty.call(c,e)&&n(u,`the field "${e}" twice`),Y.includes(e)){f!==void 0&&f!==""&&n(u,`"${e}" is a list: put each item on its own "  - " line`),c[e]=[],i=e;continue}if(i=null,(f===void 0||f==="")&&n(u,`"${e}" is empty`),e==="stub"){f!=="true"&&n(u,'"stub" is true or absent'),c.stub=!0;continue}c[e]=f}t>=h.length&&n(h.length,"the front matter is never closed (---)");for(const l of un)Object.prototype.hasOwnProperty.call(c,l)||n(t+1,`the field "${l}" is missing`);return c.sources.length||n(t+1,'"sources" names no file (at least one)'),c.stub!==!0&&(c.stub=!1),{slug:a,meta:c,body:h.slice(t+1).join(`
`),bodyLine:t+2}}const pe=/^[a-z0-9-]{1,64}$/,yn=/^#([a-z][a-z0-9-]*)((?:\/[A-Za-z0-9._-]+)*)$/,wn=/^(#{1,3}) (\S.*)$/,he=/^- (\S.*)$/,le=/^[0-9]{1,2}\. (\S.*)$/;function fn(d,a){d.includes("`")&&a("a code span (backtick) is outside the subset"),/<[A-Za-z/!?]/.test(d)&&a("HTML is outside the subset"),d.includes("![")&&a("an image is outside the subset");const o=[];let n=d;const h=(c,t,i)=>{t&&o.push({t:c,v:t,...i||{}})};for(;n.length;){const c=n.indexOf("**"),t=n.indexOf("["),i=[c,t].filter(e=>e>=0).sort((e,f)=>e-f)[0];if(i===void 0){h("text",n);break}if(h("text",n.slice(0,i)),n=n.slice(i),n.startsWith("**")){const e=n.indexOf("**",2);e<0&&a("a ** with no closing **");const f=n.slice(2,e);(!f.trim()||/[[\]]/.test(f))&&a("bold must hold plain words"),h("b",f),n=n.slice(e+2);continue}const l=/^\[([^\][]+)\]\(([^()\s]+)\)/.exec(n);l||a("a [ that is not a link [text](?help=slug) or [text](#tool/path)");const[u,m,y]=l;if(y.startsWith("?help=")){const e=y.slice(6);pe.test(e)||a(`a page link to "${e}" is not a page slug`),h("help",m,{slug:e})}else{const e=yn.exec(y);e||a(`a link to "${y}" is neither ?help=<slug> nor #<tool>/<path> (no external links)`),h("screen",m,{tool:e[1],path:e[2]?e[2].slice(1).split("/"):[]})}n=n.slice(u.length)}for(const c of o)c.t==="text"&&/[*\]]/.test(c.v)&&a("a stray * or ] (only **bold** and links are in the subset)");return o}function bn(d,a="?",o=1){const n=String(d).replace(/\r\n?/g,`
`).split(`
`),h=[];let c=null,t=null,i=null;const l=()=>{c=null,t=null,i=null};for(let u=0;u<n.length;u++){const m=n[u],y=o+u,e=b=>{throw new ue(`page ${a}: line ${y}: ${b}`)},f=b=>fn(b,e);if(!m.trim()){l();continue}if(/[ \t]+$/.test(m)&&e("trailing spaces"),/\t/.test(m)&&e("a tab character"),/^ /.test(m)){i||e("an indented line outside a list (code blocks and nesting are outside the subset)");const b=m.replace(/^ {2}/,"");/^ /.test(b)&&e("a line indented by more than two spaces (nesting is outside the subset)"),(he.test(b)||le.test(b)||/^[*+] /.test(b))&&e("a nested list (one level only)"),i.src+=" "+b,i.inl=f(i.src);continue}if(/^#{4,}/.test(m)&&e("a heading deeper than ### is outside the subset"),/^#/.test(m)){const b=wn.exec(m);b||e('a heading is "#", "##" or "###", a space, then words'),l(),h.push({t:"h",level:b[1].length,inl:f(b[2]),line:y});continue}/^\|/.test(m)&&e("a table is outside the subset"),/^>/.test(m)&&e("a block quote is outside the subset"),/^(?:-{3,}|\*{3,}|_{3,})$/.test(m)&&e("a horizontal rule is outside the subset"),/^[*+] /.test(m)&&e('a list item starts with "- " (or "1. "), never * or +');const S=he.exec(m),C=le.exec(m);if(S||C){const b=S?"ul":"ol";c=null,(!t||t.t!==b)&&(t={t:b,items:[],line:y},h.push(t)),i={src:(S||C)[1],inl:null},i.inl=f(i.src),t.items.push(i);continue}if(t&&e("a paragraph line straight after a list item: indent it by two spaces, or leave a blank line"),c){c.src+=" "+m,c.inl=f(c.src);continue}c={t:"p",src:m,inl:f(m),line:y},h.push(c)}return h.map(u=>u.t==="h"?u:u.t==="p"?{t:"p",inl:u.inl,line:u.line}:{t:u.t,items:u.items.map(m=>m.inl),line:u.line})}function G(d,a=!1){return d.map(o=>a&&o.t==="help"?`${o.v} [${o.slug}]`:o.v).join("")}function vn(d){return d.filter(a=>a.t==="h").map(a=>({level:a.level,text:G(a.inl)}))}function kn(d,a=!1){const o=[];for(const n of d)if(n.t==="h"||n.t==="p")o.push(G(n.inl,a));else for(const h of n.items)o.push("- "+G(h,a));return o.join(`
`)}function Tn(d,a){const o=(h,c)=>{for(const t of c){if(t.t==="text"){h.append(a.text?a.text(t.v):t.v);continue}if(t.t==="b"){const l=a.el("strong");l.textContent=t.v,h.append(l);continue}const i=a.el("button","hp-link");i.type="button",i.textContent=t.v,t.t==="help"?(i.dataset.help=t.slug,i.addEventListener("click",()=>a.onHelp(t.slug,t.v))):(i.dataset.screen=t.tool+(t.path.length?"/"+t.path.join("/"):""),i.addEventListener("click",()=>a.onScreen(t.tool,t.path,t.v))),h.append(i)}},n=[];for(const h of d){if(h.t==="h"){const t=a.el("h"+(h.level+2),"hp-h"+h.level);o(t,h.inl),n.push(t);continue}if(h.t==="p"){const t=a.el("p");o(t,h.inl),n.push(t);continue}const c=a.el(h.t);for(const t of h.items){const i=a.el("li");o(i,t),c.append(i)}n.push(c)}return n}const B=Object.freeze({title:8,chain:6,heading:4,body:1}),An=3,jn=8,Sn=10,me=120;function Cn(d){return String(d||"").toLowerCase().replace(/([a-z0-9])[-&](?=[a-z0-9])/g,"$1")}function E(d){return Cn(d).match(/[a-z0-9]+/g)||[]}function En(d){return d.map((a,o)=>({slug:a.slug,title:a.title,chain:a.chain,order:o,title_t:new Set(E(a.title)),chain_t:new Set([...E(a.chain),...(a.keys||[]).flatMap(n=>E(String(n).replace(/[/-]/g," ")))]),heads:(a.headings||[]).map(n=>({text:n.text,t:new Set(E(n.text))})),body_t:new Set(E(a.body))}))}function On(d,a){const o=[{words:[d],prefix:d.length>=An}],n=Object.prototype.hasOwnProperty.call(a||{},d)?String(a[d]):"";for(const h of n.split(",")){const c=E(h);c.length&&!(c.length===1&&c[0]===d)&&o.push({words:c,prefix:!1})}return o}const xn=(d,a,o)=>{if(d.has(a))return!0;if(o){for(const n of d)if(n.startsWith(a))return!0}return!1};function D(d,a){return a.some(o=>o.words.every(n=>xn(d,n,o.prefix)))}function _n(d,a,o,n=jn){const h=[...new Set(E(String(a||"").slice(0,me)))].slice(0,Sn);if(!h.length)return[];const c=h.map(i=>On(i,o)),t=[];for(const i of d){let l=0;for(const y of c)D(i.title_t,y)&&(l+=B.title),D(i.chain_t,y)&&(l+=B.chain),D(i.body_t,y)&&(l+=B.body);let u=null,m=0;i.heads.forEach((y,e)=>{let f=0;for(const S of c)D(y.t,S)&&(f+=B.heading);f>m&&(m=f,u=e)}),l+=m,l>0&&t.push({slug:i.slug,title:i.title,chain:i.chain,heading:u==null?null:i.heads[u].text,score:l,order:i.order})}return t.sort((i,l)=>l.score-i.score||i.order-l.order),t.slice(0,n).map(({order:i,...l})=>l)}function In(d){const a=new Map;for(const o of d)for(const n of o.keys||[])a.has(n)||a.set(n,o.slug);return a}function Rn(d,a){const o=String(d||"");if(!o)return null;if(a.has(o))return{key:o,slug:a.get(o),fallback:!1};const n=o.split("/");for(;n.length>1;){n.pop();const h=n.join("/");if(a.has(h))return{key:o,slug:a.get(h),fallback:!0}}return null}const Mn=["start","shell-frame","shell-account","shell-help","shell-feedback","shell-whatsnew","shell-notify","shell-users","shell-users-lists","shell-apps","shell-claude","shell-assistant","home","tracker","tracker-invoicing","tracker-invoicing-stock","tracker-invoicing-ontrack","tracker-job","tracker-add-job","tracker-import-jobs","tracker-import-estimate","tracker-conflict","tracker-labour","tracker-statuses","tracker-budget","tracker-monthly","tracker-financials","tracker-financials-import","tracker-financials-settings","estimator","estimator-editor","estimator-library","estimator-handovers","estimator-settings","estimator-settings-types","crm","crm-pipeline","crm-pivot","crm-deal","crm-drive","crm-contacts","crm-activities","crm-settings","automations","automations-approvals","automations-chat"],Ln={pages:Mn},Pn={claim:"invoice",claims:"invoice",invoice:"claim",invoices:"claim",invoicing:"claim",rate:"labour rate",overhead:"on track",stale:"re-price",reprice:"re-price, stale",kit:"assembly",kits:"assembly",assembly:"kit",deal:"opportunity",deals:"opportunity",opportunity:"deal",opportunities:"deal",pl:"profit loss, financials",profit:"financials",loss:"financials",xero:"financials import, import a month",ontrack:"on track",breakeven:"on track",hours:"labour",timesheet:"labour hours, ascora",ascora:"labour",lists:"lists, job types",jobtype:"job type, lists",status:"statuses",statuses:"status",estimate:"estimator",quote:"estimator, estimate",price:"estimator, re-price",contact:"contacts",client:"company, contacts",customer:"company, contacts",approve:"approvals",workflow:"automations",rule:"automations",bell:"notifications",alert:"notifications",bug:"feedback",request:"feedback",login:"signing in, getting started",signin:"signing in, getting started",password:"signing in, getting started",access:"users, views",permission:"users, views",role:"users",invite:"users",claude:"connected apps, claude",stock:"stock materials",materials:"stock",wizard:"adding a job",csv:"import, export",budget:"budget, opex",opex:"budget"},Bn={map:Pn},Dn=Object.assign({"./pages/automations-approvals.md":we,"./pages/automations-chat.md":fe,"./pages/automations.md":be,"./pages/crm-activities.md":ve,"./pages/crm-contacts.md":ke,"./pages/crm-deal.md":Te,"./pages/crm-drive.md":Ae,"./pages/crm-pipeline.md":je,"./pages/crm-pivot.md":Se,"./pages/crm-settings.md":Ce,"./pages/crm.md":Ee,"./pages/estimator-editor.md":Oe,"./pages/estimator-handovers.md":xe,"./pages/estimator-library.md":_e,"./pages/estimator-settings-types.md":Ie,"./pages/estimator-settings.md":Re,"./pages/estimator.md":Me,"./pages/home.md":Le,"./pages/shell-account.md":Pe,"./pages/shell-apps.md":Be,"./pages/shell-assistant.md":De,"./pages/shell-claude.md":We,"./pages/shell-feedback.md":Fe,"./pages/shell-frame.md":Ne,"./pages/shell-help.md":qe,"./pages/shell-notify.md":Ue,"./pages/shell-users-lists.md":Ge,"./pages/shell-users.md":Ye,"./pages/shell-whatsnew.md":He,"./pages/start.md":$e,"./pages/tracker-add-job.md":Je,"./pages/tracker-budget.md":Xe,"./pages/tracker-conflict.md":ze,"./pages/tracker-financials-import.md":Ve,"./pages/tracker-financials-settings.md":Qe,"./pages/tracker-financials.md":Ke,"./pages/tracker-import-estimate.md":Ze,"./pages/tracker-import-jobs.md":en,"./pages/tracker-invoicing-ontrack.md":nn,"./pages/tracker-invoicing-stock.md":tn,"./pages/tracker-invoicing.md":an,"./pages/tracker-job.md":sn,"./pages/tracker-labour.md":on,"./pages/tracker-monthly.md":rn,"./pages/tracker-statuses.md":hn,"./pages/tracker.md":ln}),U="shell",Wn=2;let L=null;function Fn(){if(L)return L;const d=Date.now(),a=new Map;for(const[h,c]of Object.entries(Dn)){const t=h.replace(/^.*\/([^/]+)\.md$/,"$1");try{const i=gn(c,t),l=bn(i.body,t,i.bodyLine);a.set(t,{slug:t,...i.meta,blocks:l,headings:vn(l),body:kn(l)})}catch(i){console.warn(`help: ${i&&i.message?i.message:"a page did not parse"}`)}}const o=(Ln.pages||[]).filter(h=>a.has(h));for(const h of[...a.keys()].sort())o.includes(h)||o.push(h);const n=o.map(h=>a.get(h));return L={pages:n,bySlug:a,byKey:In(n),index:En(n),buildMs:0},L.buildMs=Date.now()-d,L}const de=new Set;let k=null;const Nn={id:"help",kind:"dialog",open(d,a){if(k)return k.show(a||{}),k.api;const o=d,n=Fn(),h=document,c=window.SBA.viewkit.el,t=(s,r)=>c(s,r),i=s=>h.createTextNode(String(s)),l=(s,r,p)=>{const g=t(s,r);return g.textContent=String(p),g},u=(s,r,p)=>{const g=l("button",r,s);return g.type="button",g.addEventListener("click",p),g},m=Array.isArray(o.tools)?o.tools.slice():[],y=o.member||null,e={handle:null,mode:"centre",slug:null,key:null,fallback:!1,unresolved:null,notice:!1,back:[]},f=()=>k===e&&o.live();function S(s){if(s.tool!==U&&!m.includes(s.tool))return!1;const r=y&&Array.isArray(y.views)?y.views:[];return(s.views||[]).every(p=>p==="admin"?!!y&&y.role==="admin":p==="group-admin"?!!y&&y.role==="admin"&&y.scope==="group":r.includes(p))}const C=t("div","hp-root"),b=t("div","hp-top"),H=u("Back","btn hp-back",()=>ge()),v=t("input","hp-search");v.type="search",v.placeholder="Search help",v.ariaLabel="Search help",v.autocomplete="off",v.maxLength=me;const W=u("x","btn hp-close",()=>M());W.ariaLabel="Close help",W.title="Close help",b.append(H,v,W);const A=t("div","hp-results");A.hidden=!0,A.role="listbox";const $=t("div","hp-crumb"),O=t("div","hp-body"),J=t("div","hp-foot"),X=u("All help","btn hp-all",()=>{P(),_(null)}),z=u("Copy link","btn hp-copylink",()=>ye()),V=u("Send feedback","btn hp-feedback",()=>Q()),F=t("span","hp-updated"),T=t("input","hp-copybox");T.readOnly=!0,T.hidden=!0,T.ariaLabel="The link to this page",J.append(X,z,V,F),o.env&&o.env.demo&&(V.hidden=!0),C.append(b,A,$,O,J,T);function M(){e.handle&&e.handle.close()}function Q(){M();try{o.feedback()}catch{}}function P(){e.back.push(e.mode==="page"?{mode:"page",slug:e.slug,notice:e.notice}:{mode:"centre",unresolved:e.unresolved})}function ge(){const s=e.back.pop();s&&(s.mode==="page"?x(s.slug,s.notice):_(s.unresolved))}function K(){H.hidden=e.back.length===0;const s=e.mode==="page";z.hidden=!s,F.hidden=!s,X.hidden=!s,T.hidden=!0,C.dataset.mode=e.mode,C.dataset.slug=s?e.slug:""}function Z(s){const r=String(s||"").split(",").map(p=>p.trim()).filter(Boolean);$.replaceChildren(...r.map((p,g)=>l("span",g===r.length-1?"hp-crumb-seg hp-crumb-last":"hp-crumb-seg",p)))}function x(s,r,p){const g=n.bySlug.get(s);if(!g){_(s);return}e.mode="page",e.slug=s,e.notice=!!r&&!S(g),Z(g.chain);const R=[];if(e.notice&&R.push(l("p","hp-notice",`You do not have this tool. Ask ${g.ask}.`)),R.push(...Tn(g.blocks,{el:t,text:i,onHelp:w=>{P(),x(w,!0)},onScreen:(w,j)=>{M(),o.nav.go(w,j)}})),O.replaceChildren(...R),F.textContent=`Updated in ${g.reviewed}`,K(),O.scrollTop=0,p){const w=[...O.querySelectorAll("h3, h4, h5")].find(j=>j.textContent===p);w&&typeof w.scrollIntoView=="function"&&w.scrollIntoView({block:"start"})}}function ee(s){const r=t("ul","hp-list");for(const p of s){const g=t("li");g.append(u(p.title,"hp-link hp-page",()=>{P(),x(p.slug,!0)})),g.lastChild.dataset.slug=p.slug,r.append(g)}return r}function ne(s){const r=n.pages.filter(g=>g.tool===s);if(!r.length)return null;const p=t("section","hp-tool");return p.dataset.tool=s,p.append(l("h4","hp-tool-h",String(r[0].chain).split(",")[0].trim()),ee(r)),p}function _(s){e.mode="centre",e.slug=null,e.notice=!1,e.unresolved=s||null,Z("All help");const r=[];if(s){const w=t("div","hp-missing");w.append(l("p","","No help page for this screen yet."),l("small","hp-key",String(s))),r.push(w)}const p=t("section","hp-group hp-mine");p.append(l("h3","","Your tools"));for(const w of m){const j=ne(w);j&&p.append(j)}r.push(p);const g=[];for(const w of n.pages)w.tool!==U&&!m.includes(w.tool)&&!g.includes(w.tool)&&g.push(w.tool);if(g.length){const w=t("details","hp-group hp-others");w.append(l("summary","","Other tools"),l("p","hp-muted","Pages for tools you do not have"));for(const j of g){const ie=ne(j);ie&&w.append(ie)}r.push(w)}const R=n.pages.filter(w=>w.tool===U);if(R.length){const w=t("section","hp-group hp-platform");w.append(l("h3","","The platform"),ee(R)),r.push(w)}O.replaceChildren(...r),K(),O.scrollTop=0}let I=[];function te(){const s=v.value;if(s.trim().length<Wn){I=[],A.hidden=!0,A.replaceChildren();return}if(I=_n(n.index,s,Bn.map||{}),I.length)A.replaceChildren(...I.map(r=>{const p=t("button","hp-result");return p.type="button",p.role="option",p.dataset.slug=r.slug,p.append(l("span","hp-result-t",r.title),l("span","hp-result-c",r.heading?`${r.chain}: ${r.heading}`:r.chain)),p.addEventListener("click",()=>ae(r)),p}));else{const r=t("p","hp-none");r.append(i(`Nothing found for ${s.trim()}: try another word`+(o.env&&o.env.demo?".":", or "))),o.env&&o.env.demo||r.append(u("send feedback","hp-link",()=>Q())),A.replaceChildren(r)}A.hidden=!1}function N(){v.value="",te()}function ae(s){N(),P(),x(s.slug,!0,s.heading)}v.addEventListener("input",te),v.addEventListener("keydown",s=>{s.key==="Enter"&&I.length&&(s.preventDefault(),ae(I[0]))});function ye(){if(e.mode!=="page")return;const s=location.origin+location.pathname+"?help="+e.slug,r=()=>{if(f()){T.value=s,T.hidden=!1;try{T.focus(),T.select()}catch{}}};let p=null;try{p=navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(s):null}catch{p=null}if(!p){r();return}p.then(()=>{f()&&o.toast&&o.toast.show("Link copied.",!0)},r)}function q(s){if(e.back=[],e.key=s.key||null,e.fallback=!1,e.unresolved=null,s.slug!=null){const r=String(s.slug);pe.test(r)&&n.bySlug.has(r)?x(r,!0):_(r||"?")}else if(s.key){const r=Rn(s.key,n.byKey);r?(e.fallback=r.fallback,r.fallback&&!de.has(r.key)&&(de.add(r.key),console.warn(`help: fallback ${r.key} to ${r.slug}`)),x(r.slug,!1)):_(s.key)}else _(null);if(N(),e.handle)try{v.focus()}catch{}}const se=Object.freeze({close:M,isOpen:()=>k===e,show:s=>{k===e&&q(s||{})},state:()=>({open:k===e,mode:e.mode,key:e.key,slug:e.slug,fallback:e.fallback,unresolved:e.unresolved,notice:e.notice,back:e.back.length,pages:n.pages.length,buildMs:n.buildMs})});e.show=q,e.api=se,k=e;let oe=()=>{};try{q(a||{}),e.handle=o.modal.open({title:"Help",size:"lg",content:C,backdropClose:!0,canClose:()=>v.value?(N(),!1):!0,onClose:()=>{k===e&&(k=null);try{oe()}catch{}if(typeof o.closed=="function")try{o.closed()}catch{}}})}catch(s){throw k===e&&(k=null),s}try{const s=o.onLeave(()=>M());typeof s=="function"&&(oe=s)}catch{}return se}};export{Nn as default};
