const je=Object.freeze(["keys","views","sources"]),Re=Object.freeze(["title","chain","tool","ask","reviewed"]),He=Object.freeze(["stub"]);Object.freeze([...je,...Re,...He]);Object.freeze([...je,...Re]);function Se(e,t){const a=(c,l)=>{for(const d of l){if(d.t==="text"){c.append(t.text?t.text(d.v):d.v);continue}if(d.t==="b"){const p=t.el("strong");p.textContent=d.v,c.append(p);continue}const o=t.el("button","hp-link");o.type="button",o.textContent=d.v,d.t==="help"?(o.dataset.help=d.slug,o.addEventListener("click",()=>t.onHelp(d.slug,d.v))):(o.dataset.screen=d.tool+(d.path.length?"/"+d.path.join("/"):""),o.addEventListener("click",()=>t.onScreen(d.tool,d.path,d.v))),c.append(o)}},r=[];for(const c of e){if(c.t==="h"){const d=t.el("h"+(c.level+2),"hp-h"+c.level);a(d,c.inl),r.push(d);continue}if(c.t==="p"){const d=t.el("p");a(d,c.inl),r.push(d);continue}const l=t.el(c.t);for(const d of c.items){const o=t.el("li");a(o,d),l.append(o)}r.push(l)}return r}const Ue=`{
 "_": "The help screen registry (SPEC-help-pages.md clause 4.4, vH): \`screens\` is the inventory of clause 3.7 as data, every screen key the \\"?\\" can compute, each needing exactly one page (help-check); \`pages\` is the help centre's order of every page, the keyed and the centre-only. A new tab lands here (and so gets a page) before it can ship: each tool's HELP_KEYS must be a subset of \`screens\`.",
 "screens": [
  {
   "key": "home",
   "label": "Home (widgets)",
   "tool": "home",
   "views": [],
   "order": 1
  },
  {
   "key": "tracker/invoicing",
   "label": "Budget Tracker, Invoicing schedule, Schedule sub-tab",
   "tool": "tracker",
   "views": [
    "invoicing"
   ],
   "order": 2
  },
  {
   "key": "tracker/invoicing/stock",
   "label": "Invoicing, Stock materials",
   "tool": "tracker",
   "views": [
    "invoicing"
   ],
   "order": 3
  },
  {
   "key": "tracker/invoicing/ontrack",
   "label": "Invoicing, On track",
   "tool": "tracker",
   "views": [
    "invoicing"
   ],
   "order": 4
  },
  {
   "key": "tracker/job",
   "label": "The job window (over any tab)",
   "tool": "tracker",
   "views": [
    "invoicing"
   ],
   "order": 5
  },
  {
   "key": "tracker/add-job",
   "label": "Add a job (the wizard)",
   "tool": "tracker",
   "views": [
    "invoicing"
   ],
   "order": 6
  },
  {
   "key": "tracker/import-jobs",
   "label": "Import jobs (CSV)",
   "tool": "tracker",
   "views": [
    "invoicing",
    "admin"
   ],
   "order": 7
  },
  {
   "key": "tracker/import-estimate",
   "label": "Import from estimate file; the Send to tracker landing",
   "tool": "tracker",
   "views": [
    "invoicing"
   ],
   "order": 8
  },
  {
   "key": "tracker/conflict",
   "label": "The conflict dialog (someone else saved)",
   "tool": "tracker",
   "views": [
    "invoicing"
   ],
   "order": 9
  },
  {
   "key": "tracker/budget",
   "label": "Budget and OPEX",
   "tool": "tracker",
   "views": [
    "budget"
   ],
   "order": 10
  },
  {
   "key": "tracker/monthly",
   "label": "Monthly tracker",
   "tool": "tracker",
   "views": [
    "monthly"
   ],
   "order": 11
  },
  {
   "key": "tracker/financials",
   "label": "Financials, P&L",
   "tool": "tracker",
   "views": [
    "financials"
   ],
   "order": 12
  },
  {
   "key": "tracker/financials/import",
   "label": "Financials, Admin, Import a month",
   "tool": "tracker",
   "views": [
    "financials",
    "admin"
   ],
   "order": 13
  },
  {
   "key": "tracker/financials/settings",
   "label": "Financials, Admin, Settings",
   "tool": "tracker",
   "views": [
    "financials",
    "admin"
   ],
   "order": 14
  },
  {
   "key": "estimator",
   "label": "Estimator, Estimates (the list) and the start dialog",
   "tool": "estimator",
   "views": [
    "estimating"
   ],
   "order": 15
  },
  {
   "key": "estimator/e",
   "label": "The estimate editor and a read-only revision",
   "tool": "estimator",
   "views": [
    "estimating"
   ],
   "order": 16
  },
  {
   "key": "estimator/library",
   "label": "Library",
   "tool": "estimator",
   "views": [
    "estimating"
   ],
   "order": 17
  },
  {
   "key": "estimator/materials",
   "label": "Materials",
   "tool": "estimator",
   "views": [
    "estimating"
   ],
   "order": 18
  },
  {
   "key": "estimator/norms",
   "label": "Labour norms",
   "tool": "estimator",
   "views": [
    "estimating"
   ],
   "order": 19
  },
  {
   "key": "estimator/handovers",
   "label": "Hand-overs",
   "tool": "estimator",
   "views": [
    "estimating"
   ],
   "order": 20
  },
  {
   "key": "estimator/settings",
   "label": "Settings",
   "tool": "estimator",
   "views": [
    "estimating_admin"
   ],
   "order": 21
  },
  {
   "key": "estimator/settings/types",
   "label": "Equipment types",
   "tool": "estimator",
   "views": [
    "estimating_admin"
   ],
   "order": 22
  },
  {
   "key": "estimator/file",
   "label": "A restricted estimate (file only)",
   "tool": "estimator",
   "views": [
    "estimating"
   ],
   "order": 23
  },
  {
   "key": "crm/pipeline",
   "label": "CRM, Pipeline",
   "tool": "crm",
   "views": [
    "crm"
   ],
   "order": 24
  },
  {
   "key": "crm/list",
   "label": "CRM, List",
   "tool": "crm",
   "views": [
    "crm"
   ],
   "order": 25
  },
  {
   "key": "crm/calendar",
   "label": "CRM, Calendar",
   "tool": "crm",
   "views": [
    "crm"
   ],
   "order": 26
  },
  {
   "key": "crm/pivot",
   "label": "CRM, Pivot",
   "tool": "crm",
   "views": [
    "crm"
   ],
   "order": 27
  },
  {
   "key": "crm/graph",
   "label": "CRM, Graph",
   "tool": "crm",
   "views": [
    "crm"
   ],
   "order": 28
  },
  {
   "key": "crm/deal",
   "label": "An opportunity",
   "tool": "crm",
   "views": [
    "crm"
   ],
   "order": 29
  },
  {
   "key": "crm/contacts",
   "label": "Contacts",
   "tool": "crm",
   "views": [
    "crm"
   ],
   "order": 30
  },
  {
   "key": "crm/company",
   "label": "A company",
   "tool": "crm",
   "views": [
    "crm"
   ],
   "order": 31
  },
  {
   "key": "crm/contact",
   "label": "A person",
   "tool": "crm",
   "views": [
    "crm"
   ],
   "order": 32
  },
  {
   "key": "crm/activities",
   "label": "Activities",
   "tool": "crm",
   "views": [
    "crm"
   ],
   "order": 33
  },
  {
   "key": "crm/forecast",
   "label": "Forecast",
   "tool": "crm",
   "views": [
    "crm"
   ],
   "order": 34
  },
  {
   "key": "crm/reports",
   "label": "Reports (win/loss)",
   "tool": "crm",
   "views": [
    "crm"
   ],
   "order": 35
  },
  {
   "key": "crm/settings",
   "label": "CRM Settings",
   "tool": "crm",
   "views": [
    "crm",
    "admin"
   ],
   "order": 36
  },
  {
   "key": "automations/list",
   "label": "Automations list",
   "tool": "automations",
   "views": [
    "automations"
   ],
   "order": 37
  },
  {
   "key": "automations/edit",
   "label": "The automation builder",
   "tool": "automations",
   "views": [
    "automations"
   ],
   "order": 38
  },
  {
   "key": "automations/approvals",
   "label": "Approvals",
   "tool": "automations",
   "views": [
    "automations"
   ],
   "order": 39
  },
  {
   "key": "automations/runs",
   "label": "Run log",
   "tool": "automations",
   "views": [
    "automations"
   ],
   "order": 40
  },
  {
   "key": "shell/feedback",
   "label": "Feedback",
   "tool": "shell",
   "views": [],
   "order": 41
  },
  {
   "key": "shell/whatsnew",
   "label": "What's new",
   "tool": "shell",
   "views": [],
   "order": 42
  },
  {
   "key": "shell/notify",
   "label": "Notifications",
   "tool": "shell",
   "views": [],
   "order": 43
  },
  {
   "key": "shell/users",
   "label": "Users (roster, invite, Lists, Audit log)",
   "tool": "shell",
   "views": [
    "group-admin"
   ],
   "order": 44
  },
  {
   "key": "shell/apps",
   "label": "Connected apps",
   "tool": "shell",
   "views": [],
   "order": 45
  },
  {
   "key": "shell/assistant",
   "label": "Ask (the assistant panel)",
   "tool": "shell",
   "views": [],
   "order": 46
  }
 ],
 "pages": [
  "start",
  "shell-frame",
  "shell-account",
  "shell-help",
  "shell-feedback",
  "shell-whatsnew",
  "shell-notify",
  "shell-users",
  "shell-users-lists",
  "shell-apps",
  "shell-claude",
  "shell-assistant",
  "home",
  "tracker",
  "tracker-invoicing",
  "tracker-invoicing-stock",
  "tracker-invoicing-ontrack",
  "tracker-job",
  "tracker-add-job",
  "tracker-import-jobs",
  "tracker-import-estimate",
  "tracker-conflict",
  "tracker-labour",
  "tracker-statuses",
  "tracker-budget",
  "tracker-monthly",
  "tracker-financials",
  "tracker-financials-import",
  "tracker-financials-settings",
  "estimator",
  "estimator-editor",
  "estimator-library",
  "estimator-handovers",
  "estimator-settings",
  "estimator-settings-types",
  "crm",
  "crm-pipeline",
  "crm-pivot",
  "crm-deal",
  "crm-drive",
  "crm-contacts",
  "crm-activities",
  "crm-settings",
  "automations",
  "automations-approvals",
  "automations-chat"
 ]
}
`,Ye=/^[a-z0-9-]{1,64}$/,Ge=/^#[a-z][a-z0-9-]*(\/[a-z0-9-]+)?$/;function ae(e,t){const a=String(e||"");if(a.startsWith("?help=")){const r=a.slice(6);return Ye.test(r)&&t.slugs.has(r)?{t:"help",slug:r}:null}if(Ge.test(a)){const r=a.slice(1),[c,...l]=r.split("/");return c==="shell"||!t.screens.has(r)?null:{t:"screen",tool:c,path:l}}return null}const xe=/(^|[^\w/?#=-])(\?help=[a-z0-9-]{1,64}|#[a-z][a-z0-9-]*(?:\/[a-z0-9-]+)?)(?![\w/?#=&-])/g;function qe(e,t,a){let r=0,c;for(xe.lastIndex=0;c=xe.exec(e);){const l=c.index+c[1].length,d=c[2],o=ae(d,t);o&&(l>r&&a.push({t:"text",v:e.slice(r,l)}),a.push({...o,v:d}),r=l+d.length)}r<e.length&&a.push({t:"text",v:e.slice(r)})}function D(e,t){const a=[];let r=String(e);const c=d=>{d&&qe(d,t,a)};for(;r.length;){const d=/\*\*|`|\[/.exec(r);if(!d){c(r);break}if(c(r.slice(0,d.index)),r=r.slice(d.index),r.startsWith("**")){const p=r.indexOf("**",2),s=p>2?r.slice(2,p):"";s&&!s.includes(`
`)?(a.push({t:"b",v:s}),r=r.slice(p+2)):(a.push({t:"text",v:"**"}),r=r.slice(2));continue}if(r[0]==="`"){const p=r.indexOf("`",1);if(p>1){const s=r.slice(1,p),k=ae(s.trim(),t);a.push(k?{...k,v:s.trim()}:{t:"text",v:s}),r=r.slice(p+1)}else a.push({t:"text",v:"`"}),r=r.slice(1);continue}const o=/^\[([^\][\n]+)\]\(([^()\s]*)\)/.exec(r);if(o){const p=ae(o[2],t);a.push(p?{...p,v:o[1]}:{t:"text",v:o[0]}),r=r.slice(o[0].length);continue}a.push({t:"text",v:"["}),r=r.slice(1)}const l=[];for(const d of a){const o=l[l.length-1];o&&o.t==="text"&&d.t==="text"?o.v+=d.v:l.push(d)}return l}const Te=e=>{let t=e.trim();t.startsWith("|")&&(t=t.slice(1)),t.endsWith("|")&&!t.endsWith("\\|")&&(t=t.slice(0,-1));const a=[];let r="";for(let c=0;c<t.length;c++){if(t[c]==="\\"&&t[c+1]==="|"){r+="|",c++;continue}if(t[c]==="|"){a.push(r.trim()),r="";continue}r+=t[c]}return a.push(r.trim()),a},Ae=e=>/^\s*\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)*\|?\s*$/.test(e);function Ie(e,t){const a=String(e??"").replace(/\r\n?/g,`
`).split(`
`),r=[];let c=null,l=null;const d=()=>{c=null,l=null};for(let o=0;o<a.length;o++){const p=a[o];if(!p.trim()){d();continue}const s=/^\s*(`{3,}|~{3,})/.exec(p);if(s){d();const x=s[1],T=[];let _=o+1;for(;_<a.length&&!a[_].trim().startsWith(x);_++)T.push(a[_]);o=_;const O=T.filter(S=>S.trim());O.length>=2&&O[0].trim().startsWith("|")&&Ae(O[1])?r.push(...Ie(O.join(`
`),t)):r.push({t:"pre",text:T.join(`
`)});continue}if(p.trim().startsWith("|")&&o+1<a.length&&Ae(a[o+1])){d();const x=Te(p).map(O=>D(O,t)),T=[];let _=o+2;for(;_<a.length&&a[_].trim().startsWith("|");_++)T.push(Te(a[_]).map(O=>D(O,t)));r.push({t:"table",head:x,rows:T}),o=_-1;continue}const k=/^\s{0,3}(#{1,6})\s+(\S.*)$/.exec(p);if(k){d(),r.push({t:"h",level:Math.min(3,k[1].length),inl:D(k[2].replace(/\s+#+\s*$/,""),t)});continue}const v=/^\s{0,3}[-*+]\s+(\S.*)$/.exec(p),j=/^\s{0,3}[0-9]{1,3}[.)]\s+(\S.*)$/.exec(p);if(v||j){const x=v?"ul":"ol";c=null,(!l||l.t!==x)&&(l={t:x,items:[],src:[]},r.push(l)),l.src.push((v||j)[1]),l.items.push(D((v||j)[1],t));continue}if(l&&/^\s{2,}\S/.test(p)){const x=l.items.length-1;l.src[x]+=" "+p.trim().replace(/^[-*+]\s+/,""),l.items[x]=D(l.src[x],t);continue}if(l=null,c){c.src+=`
`+p,c.inl=D(c.src,t);continue}c={t:"p",src:p,inl:D(p,t)},r.push(c)}return r.map(o=>o.t==="p"?{t:"p",inl:o.inl}:o.t==="ul"||o.t==="ol"?{t:o.t,items:o.items}:o)}function Je(e){let t="",a=0,r=!1;function c(o){let p="message";const s=[];for(const v of o.split(`
`)){if(!v||v[0]===":")continue;const j=v.indexOf(":"),x=j<0?v:v.slice(0,j);let T=j<0?"":v.slice(j+1);T[0]===" "&&(T=T.slice(1)),x==="event"?p=T:x==="data"&&s.push(T)}if(!s.length)return;let k;try{k=JSON.parse(s.join(`
`))}catch{a++;return}e({event:p,data:k})}function l(){for(;;){const o=t.indexOf(`

`);if(o<0)return;const p=t.slice(0,o);t=t.slice(o+2),c(p)}}function d(o){let p=(r?"\r":"")+String(o);return r=p.endsWith("\r"),r&&(p=p.slice(0,-1)),p.replace(/\r\n?/g,`
`)}return{push(o){t+=d(o),l()},end(){if(r&&(t+=`
`,r=!1),l(),t.trim()){const o=t;t="",c(o.replace(/\n+$/,""))}t=""},bad:()=>a}}async function Ke(e,t,a=()=>!0){const r=Je(t),c=e.body.getReader(),l=new TextDecoder("utf-8");for(;;){const{value:d,done:o}=await c.read();if(!a()){try{c.cancel()}catch{}return{ended:!1,bad:r.bad()}}if(o)break;r.push(l.decode(d,{stream:!0}))}return r.push(l.decode()),r.end(),{ended:!0,bad:r.bad()}}const ie=Object.freeze({money:"Tracker change",estimate:"Estimate change",crm:"CRM change"}),Xe=Object.freeze({money:"The tracker will write exactly this or refuse if anything moved since",estimate:"The estimate will change exactly as shown, or be refused if it was saved since",crm:"This changes exactly what is shown, and is refused if it changed since"}),Ve=Object.freeze(["crm_deal_create","crm_note_add","crm_activity_add"]),Ne=Object.freeze({open:"",applying:"Applying",discarding:"Discarding",applied:"Applied",refused:"Refused",discarded:"Discarded",expired:"Expired",failed:"Failed",unknown:"Unknown",not_found:"Not found"}),Fe=new Set(["open","applying","applied","refused","discarded","expired","failed","unknown"]),Ze=new Set([...Fe,"not_found"]),Qe=5*60*1e3,$e="The platform did not answer, so it is not known whether this change was saved.",en="Press Check to ask the tracker again; it answers with the time if the change was written.",nn="Look at the screen before asking again.",tn="this proposal has expired; ask again",Z=e=>{const t=Date.parse(e);return Number.isFinite(t)?t:NaN};function sn(e,t){const a=e&&ie[e.kind]?e.kind:"crm",r={id:String(e&&e.action_id||""),tool:String(e&&e.tool||""),kind:a,title:String(e&&e.title||""),preview:e&&e.preview&&typeof e.preview=="object"?e.preview:{text:""},expiresAt:String(e&&e.expires_at||""),state:"open",result:null};return oe(r,t)}function _e(e,t){const a=e&&ie[e.family]?e.family:"crm";let r=e&&Fe.has(e.state)?e.state:"unknown";r==="applying"&&Number.isFinite(Z(e.taken_at))&&t-Z(e.taken_at)>Qe&&(r="unknown");const c={id:String(e&&e.id||""),tool:String(e&&e.tool||""),kind:a,title:"",preview:e&&e.preview&&typeof e.preview=="object"?e.preview:{text:""},expiresAt:String(e&&e.expires_at||""),state:r,result:e&&e.result!=null?String(e.result):null};return oe(c,t)}function oe(e,t){return e.state==="open"&&Number.isFinite(Z(e.expiresAt))&&t>=Z(e.expiresAt)?{...e,state:"expired",result:e.result||tn}:e}function V(e,t,a){switch(t){case"apply":return e.state==="open"?{...e,state:"applying",prev:"open"}:e;case"check":return e.state==="unknown"&&e.kind==="money"?{...e,state:"applying",prev:"unknown"}:e;case"discard":return e.state==="open"?{...e,state:"discarding",prev:"open"}:e;case"answer":{if(e.state!=="applying"&&e.state!=="discarding")return e;const r=a||{};let c=Ze.has(r.state)?r.state:e.state==="applying"?"unknown":"open";c==="applying"&&(c="unknown");const l=r.result!=null?String(r.result):r.error!=null?String(r.error):null;return{...e,state:c,result:l,prev:void 0}}case"lost":return e.state==="applying"?{...e,state:"unknown",result:$e,prev:void 0}:e.state==="discarding"?{...e,state:"open",result:"Not discarded: the platform did not answer. Try again.",prev:void 0}:e;default:return e}}function rn(e){return e.state==="open"?["apply","discard"]:e.state==="unknown"&&e.kind==="money"?["check"]:[]}function an(e){return e.kind==="crm"&&Ve.includes(e.tool)?"":Xe[e.kind]||""}function ze(e,t){const a=new Date(e);if(!Number.isFinite(a.getTime()))return null;const r=new Intl.DateTimeFormat("en-AU",{timeZone:"Australia/Sydney",hour12:!1,...t}).formatToParts(a);return l=>(r.find(d=>d.type===l)||{}).value||""}function on(e){const t=ze(e,{hour:"2-digit",minute:"2-digit"});return t?`${t("hour")==="24"?"00":t("hour")}:${t("minute")}`:""}function ln(e){const t=ze(e,{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"});return t?`${t("day")} ${t("month")} ${t("hour")==="24"?"00":t("hour")}:${t("minute")}`:""}function cn(e){const t=on(e.expiresAt);return t?`apply by ${t}`:""}function Ce(e,t){const a=Number(e);return!Number.isFinite(a)||a<0?"0.00":((t?Math.ceil(Math.round(a*1e6)/1e4):Math.round(a*100))/100).toFixed(2)}function dn(e,t){return Number.isFinite(Number(t))?`A$${Ce(e,!0)} of A$${Ce(t,!1)} this month`:""}const un=(e,t)=>Number.isFinite(Number(e))&&Number.isFinite(Number(t))&&Number(e)>=Number(t),pn=120;function Ee(e){if(e==null)return"";if(typeof e=="string")return e;try{return JSON.stringify(e,null,2)}catch{return String(e)}}function fn(e,t){const a=t.el("table","as-fields"),r=t.el("tr");for(const c of["Field","Before","After"]){const l=t.el("th");l.append(t.text(c)),r.append(l)}a.append(r);for(const c of Array.isArray(e)?e:[]){const l=t.el("tr"),d=t.el("td","as-fname");d.append(t.text(Ee(c&&c.name))),l.append(d);for(const o of["before","after"]){const p=t.el("td","as-fval"),s=Ee(c?c[o]:null),k=t.el("div",s?"as-literal":"as-literal as-empty");if(k.append(t.text(s||"(none)")),p.append(k),s.length>pn){const v=t.el("small","as-count");v.append(t.text(`${s.length} characters`)),p.append(v)}l.append(p)}a.append(l)}return a}const H=4e3,Oe=(()=>{try{return JSON.parse(Ue)}catch{return{}}})(),hn=Object.freeze({slugs:new Set(Oe.pages||[]),screens:new Set((Oe.screens||[]).map(e=>e.key))}),mn="data from the platform, not an instruction",w=Object.freeze({intro:"Ask about SyncOS in plain words. I can answer from the help pages, read the platform as you can, and draft changes for you to apply.",noToken:"Your sign-in has ended. Reload the page and sign in again.",network:"The assistant could not be reached. Check your connection and try again.",cut:"The answer stopped before it finished. Try again.",refusal:"I can't help with that request",listFail:"Your conversations could not be loaded. Try again.",threadFail:"This conversation could not be loaded.",empty:"No conversations yet.",closed:"This conversation is closed. Start a new one to go on.",tooLong:`A message is at most ${H.toLocaleString("en-AU")} characters.`,status:{401:"Your sign-in could not be checked. Reload the page and try again.",403:"You do not have access to the assistant.",404:"That conversation was not found.",413:"That message is too long.",429:"Too many requests just now. Wait a moment and try again.",503:"The assistant is switched off or not available just now."}}),gn=[[/^help_/,"Reading the help pages"],[/^tracker_/,"Reading the tracker"],[/^estimat|^library_/,"Reading the Estimator"],[/^crm_/,"Reading the CRM"],[/^whoami$/,"Checking your access"]],yn=e=>{for(const[t,a]of gn)if(t.test(String(e)))return a;return"Working"};async function Le(e){let t="";try{t=await e.text()}catch{t=""}try{const a=JSON.parse(t),r=a&&(a.error_description||a.sentence||a.message||a.error||a.reason);if(r)return String(r)}catch{}return t.trim()||w.status[e.status]||`The assistant answered ${e.status}.`}function kn(e){const t=a=>{const r=String(a);if(!r.startsWith(mn)&&!r.startsWith("[apply notice]"))return r;const c=/^[^\n]*\n(`{3,})\n[\s\S]*?\n\1\n?/.exec(r);return c?r.slice(c[0].length):""};return typeof e=="string"?t(e).trim():Array.isArray(e)?e.filter(a=>a&&a.type==="text").map(a=>t(a.text)).join(`
`).trim():""}let L=null;const bn={id:"assistant",kind:"dialog",open(e,t){if(L)return L.show(t||{}),L.api;const a=e,r=document,c=window.SBA.viewkit.el,l=(n,i)=>c(n,i),d=n=>r.createTextNode(String(n)),o=(n,i,f)=>{const u=l(n,i);return u.textContent=String(f),u},p=(n,i,f)=>{const u=o("button",i,n);return u.type="button",u.addEventListener("click",f),u},s={handle:null,mode:"list",threadId:null,title:"",busy:!1,closed:!1,used:null,cap:null,cards:new Map,ctl:null,turns:0,last:null},k=()=>L===s&&a.live(),v=l("div","as-root"),j=l("div","as-top"),x=p("Back","btn as-back",()=>pe()),T=o("span","as-title","Ask"),_=p("New conversation","btn as-new",()=>K()),O=p("x","btn as-close",()=>G());O.ariaLabel="Close the assistant",O.title="Close the assistant",j.append(x,T,_,O);const S=l("div","as-body"),R=o("div","as-working","");R.hidden=!0,R.role="status";const Q=l("div","as-foot"),A=l("textarea","as-input");A.rows=2,A.maxLength=H,A.placeholder="Ask a question, or ask for a change",A.ariaLabel="Your message";const le=p("Send","btn primary as-send",()=>ye()),F=o("span","as-meter","");F.hidden=!0;const U=o("small","as-count","");U.hidden=!0,Q.append(A,le,U,F),v.append(j,S,R,Q);const ce={el:l,text:d,onHelp:n=>{try{a.help(n)}catch{}},onScreen:(n,i)=>{G();try{a.nav.go(n,i)}catch{}}};function Y(n){const i=[];for(const f of Ie(n,hn)){if(f.t==="pre"){const u=l("pre","as-pre");u.append(d(f.text)),i.push(u);continue}if(f.t==="table"){const u=l("div","as-tablewrap"),h=l("table","as-table"),y=(m,b)=>{const g=l("tr");for(const C of m){const $=l(b),B=Se([{t:"p",inl:C}],ce)[0];$.append(...B.childNodes),g.append($)}return g};h.append(y(f.head,"th"),...f.rows.map(m=>y(m,"td"))),u.append(h),i.push(u);continue}i.push(...Se([f],ce))}return i}function G(){s.handle&&s.handle.close()}function ee(n){s.busy=n,le.disabled=n||s.closed,A.disabled=s.closed}function de(){const n=dn(s.used,s.cap);F.textContent=n,F.hidden=!n,F.classList.toggle("as-full",un(s.used,s.cap))}function ue(){const n=A.value.length;U.hidden=n<H-500,U.textContent=`${n} of ${H}`}function q(){v.dataset.mode=s.mode,x.hidden=s.mode==="list",Q.hidden=s.mode==="list",T.textContent=s.mode==="list"?"Your conversations":s.title||"New conversation",ee(s.busy)}const P=()=>{S.scrollTop=S.scrollHeight};async function Me(){let n=null;try{n=await a.session()}catch{n=null}return typeof n=="string"&&n?n:null}async function J(n,i,f){const u=await Me();return u?fetch(a.fnUrl+n,{method:n==="/usage"?"GET":"POST",signal:f,headers:{Authorization:"Bearer "+u,...i?{"Content-Type":"application/json"}:{}},...i?{body:JSON.stringify(i)}:{}}):{noToken:!0}}async function De(){let n;try{n=await J("/usage",null)}catch{n=null}if(!k()||!n||n.noToken||!n.ok)return;let i=null;try{i=await n.json()}catch{i=null}!k()||!i||(s.used=Number(i.used_aud),s.cap=Number(i.cap_aud),de())}async function pe(){if(s.ctl){try{s.ctl.abort()}catch{}s.ctl=null}s.mode="list",s.threadId=null,s.title="",s.busy=!1,s.closed=!1,s.cards=new Map,R.hidden=!0,q(),S.replaceChildren(o("p","as-muted","Loading..."));let n;try{n=await a.threads.list()}catch{n={ok:!1}}if(!k()||s.mode!=="list")return;if(!n||!n.ok){S.replaceChildren(o("p","as-error",w.listFail));return}const i=(n.rows||[]).slice().sort((u,h)=>String(h.updated_at).localeCompare(String(u.updated_at))).slice(0,20);if(!i.length){S.replaceChildren(o("p","as-muted",w.intro),o("p","as-muted",w.empty));return}const f=l("ul","as-threads");for(const u of i){const h=l("li","as-thread");h.dataset.id=String(u.id);const y=p("","as-thread-open",()=>he(u));y.append(o("span","as-thread-t",u.title||"Conversation"),o("span","as-thread-w",ln(u.updated_at)));const m=p("Delete","btn as-thread-del",()=>m.dataset.sure?We(u,h,m):(m.dataset.sure="1",m.textContent="Delete for good"));h.append(y,m),f.append(h)}S.replaceChildren(f)}async function We(n,i,f){f.disabled=!0;let u,h=null;try{u=await J("/thread/delete",{thread_id:n.id})}catch{u=null}if(k()&&(u?u.noToken?h=w.noToken:u.ok||(h=await Le(u)):h=w.network,!!k())){if(h){f.disabled=!1,f.textContent="Delete",delete f.dataset.sure,i.append(o("p","as-error",h));return}i.remove(),S.querySelector(".as-thread")||S.replaceChildren(o("p","as-muted",w.empty))}}function K(){if(s.ctl){try{s.ctl.abort()}catch{}s.ctl=null}s.mode="thread",s.threadId=null,s.title="",s.busy=!1,s.closed=!1,s.cards=new Map,R.hidden=!0,q(),S.replaceChildren(o("p","as-muted as-intro",w.intro));try{A.focus()}catch{}}const ne=()=>{let n=S.querySelector(".as-msgs");return n||(n=l("div","as-msgs"),n.setAttribute("role","log"),n.setAttribute("aria-live","polite"),S.replaceChildren(n)),n};function fe(n){const i=l("div","as-msg as-user"),f=l("p");return f.append(d(n)),i.append(f),i}async function he(n){s.mode="thread",s.threadId=String(n.id),s.title=n.title||"",s.busy=!1,s.closed=n.state==="closed",s.cards=new Map,q(),S.replaceChildren(o("p","as-muted","Loading..."));let i,f;try{[i,f]=await Promise.all([a.threads.get(s.threadId),a.threads.actions(s.threadId)])}catch{i=null}if(!k()||s.threadId!==String(n.id))return;if(!i||!i.ok){S.replaceChildren(o("p","as-error",w.threadFail));return}s.closed=i.state==="closed",q();const u=Date.now(),h=f&&f.ok?(f.rows||[]).slice().sort((m,b)=>String(m.created_at).localeCompare(String(b.created_at))):[],y=ne();for(const m of Array.isArray(i.messages)?i.messages:[]){if(m&&m.role==="user"){const g=kn(m.content);g&&y.append(fe(g));continue}if(!m||m.role!=="assistant")continue;const b=l("div","as-msg as-bot");for(const g of Array.isArray(m.content)?m.content:typeof m.content=="string"?[{type:"text",text:m.content}]:[]){if(g&&g.type==="text"&&g.text){const C=l("div","as-text");C.append(...Y(g.text)),b.append(C)}g&&g.type==="tool_use"&&h.length&&h[0].tool===g.name&&b.append(te(_e(h.shift(),u)))}b.childNodes.length&&y.append(b)}for(const m of h)y.append(te(_e(m,u)));s.closed&&y.append(me(w.closed)),P()}function me(n){const i=l("div","as-note");return i.append(o("p","",n),p("New conversation","btn as-note-new",()=>K())),i}function te(n){const i=l("div","as-card"),f={c:n,node:i};return s.cards.set(n.id,f),W(f),i}function W(n){const i=n.c,f=n.node;f.dataset.kind=i.kind,f.dataset.state=i.state,f.dataset.id=i.id;const u=l("div","as-card-h");u.append(o("strong","",ie[i.kind]||"Change")),Ne[i.state]&&u.append(o("span","as-card-state",Ne[i.state]));const h=[u];i.title&&h.push(o("div","as-card-title",i.title));const y=l("div","as-card-preview");if(i.preview&&Array.isArray(i.preview.fields)){if(i.preview.text){const g=l("div","as-text");g.append(...Y(i.preview.text)),y.append(g)}y.append(fn(i.preview.fields,{el:l,text:d}))}else y.append(...Y(i.preview&&i.preview.text!=null?String(i.preview.text):""));h.push(y);const m=an(i);if(m&&(i.state==="open"||i.state==="applying")&&h.push(o("p","as-card-promise",m)),i.state==="open"){const g=cn(i);g&&h.push(o("p","as-card-exp",g))}i.state==="unknown"&&h.push(o("p","as-card-unknown",`${$e} ${i.kind==="money"?en:nn}`));const b=rn(i);if(b.length){const g=l("div","as-card-b");for(const C of b)g.append(p(C==="apply"?"Apply":C==="discard"?"Discard":"Check",C==="apply"||C==="check"?"btn primary":"btn",()=>Pe(n,C)));h.push(g)}if((i.state==="applying"||i.state==="discarding")&&h.push(o("p","as-muted",i.state==="applying"?"Applying...":"Discarding...")),i.result){const g=l("div","as-card-result");g.append(d(i.result)),h.push(g)}f.replaceChildren(...h)}async function Pe(n,i){const f=n.c;if(n.c=V(n.c,i==="discard"?"discard":i==="check"?"check":"apply"),n.c===f)return;W(n);let u;try{u=await J(i==="discard"?"/discard":"/apply",{action_id:n.c.id})}catch{u=null}if(!k())return;if(!u){n.c=V(n.c,"lost"),W(n);return}if(u.noToken){n.c={...n.c,state:f.state,result:w.noToken},W(n);return}let h=null,y="";try{y=await u.text(),h=JSON.parse(y)}catch{h=null}k()&&(h&&typeof h.state=="string"?n.c=V(n.c,"answer",h):u.ok?n.c=V(n.c,"lost"):n.c={...n.c,state:f.state,result:h&&(h.error_description||h.sentence||h.message||h.error)||y.trim()||w.status[u.status]||`The assistant answered ${u.status}.`},W(n))}const ge=setInterval(()=>{if(!k())return;const n=Date.now();for(const i of s.cards.values()){const f=oe(i.c,n);f!==i.c&&(i.c=f,W(i))}},15e3);async function ye(){const n=A.value;if(s.busy||s.closed||s.mode!=="thread"||!n.trim())return;if(n.length>H){ne().append(o("p","as-error",w.tooLong));return}const i=S.querySelector(".as-intro");i&&i.remove(),ee(!0),A.value="",ue();const f=ne();f.append(fe(n));const u=l("div","as-msg as-bot");f.append(u),P();const h=s.threadId,y=typeof AbortController=="function"?new AbortController:null;s.ctl=y;const m=()=>k()&&s.ctl===y;let b=null,g="",C=!1,$=!1,B=!1;const z=new Set,M=(N,re)=>{u.append(o("p",N,re)),P()},se=()=>{B=!1,b&&(b.replaceChildren(...Y(g)),P())};function Be({event:N,data:re}){if(!m())return;const E=re||{};if(N==="meta")E.thread_id&&(s.threadId=String(E.thread_id),h||(s.title=n.trim().slice(0,60),T.textContent=s.title));else if(N==="text")b||(b=l("div","as-text"),g="",u.append(b)),g+=String(E.delta==null?"":E.delta),B||(B=!0,Promise.resolve().then(se));else if(N==="tool"){const we=String(E.name||"");E.state==="running"?z.add(we):z.delete(we),R.textContent=z.size?yn([...z][z.size-1]):"",R.hidden=!z.size}else N==="card"?(b&&se(),b=null,u.append(te(sn(E,Date.now()))),P()):N==="usage"?(E.month_aud!=null&&(s.used=Number(E.month_aud)),E.cap_aud!=null&&(s.cap=Number(E.cap_aud)),de()):N==="error"?($=!0,M("as-error",String(E.sentence||w.network))):N==="done"&&(C=!0,E.stop_reason==="refusal"&&M("as-muted",w.refusal))}let I;try{I=await J("/chat",{...h?{thread_id:h}:{},message:n},y?y.signal:void 0)}catch{I=null}if(!m())return;if(!I)return M("as-error",w.network),X();if(I.noToken)return M("as-error",w.noToken),X();if(!I.ok){const N=await Le(I);return m()?(I.status===409?u.append(me(N)):M("as-error",N),X()):void 0}try{await Ke(I,Be,m)}catch{if(!m())return;$||($=!0,M("as-error",w.network))}if(!m())return;b&&se(),!C&&!$&&M("as-error",w.cut),X();function X(){if(m()){s.ctl=null,z.clear(),R.hidden=!0,u.childNodes.length||u.remove(),ee(!1);try{A.focus()}catch{}}}}A.addEventListener("keydown",n=>{n.key==="Enter"&&!n.shiftKey&&!n.isComposing&&(n.preventDefault(),ye())}),A.addEventListener("input",ue);function ke(n){if(n&&n.thread)he(n.thread);else if(n&&n.mode==="list")pe();else if(s.mode==="thread"&&s.handle)try{A.focus()}catch{}else K()}const be=Object.freeze({close:G,isOpen:()=>L===s,show:n=>{L===s&&ke(n||{})},state:()=>({open:L===s,mode:s.mode,threadId:s.threadId,busy:s.busy,closed:s.closed,used:s.used,cap:s.cap,meter:F.hidden?"":F.textContent,cards:[...s.cards.values()].map(n=>({id:n.c.id,kind:n.c.kind,state:n.c.state,result:n.c.result}))})});s.show=ke,s.api=be,L=s;let ve=()=>{};try{K(),s.handle=a.modal.open({title:"Ask",size:"lg",content:v,backdropClose:!0,onClose:()=>{if(L===s&&(L=null),clearInterval(ge),s.ctl){try{s.ctl.abort()}catch{}s.ctl=null}try{ve()}catch{}if(typeof a.closed=="function")try{a.closed()}catch{}}})}catch(n){throw L===s&&(L=null),clearInterval(ge),n}try{const n=a.onLeave(()=>G());typeof n=="function"&&(ve=n)}catch{}try{A.focus()}catch{}return De(),be}};export{H as MAX_CHARS,bn as default};
