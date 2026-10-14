/* ===== EDIT ME: site info ===== */
const SITE = {
  address: "123 Sample Street, Karachi, Pakistan (demo address)",
  phone: "+00 000 000 0000", email: "hello@example.com",
  hours: "Tue–Sun, 5:00 pm – 11:00 pm · Mon closed",
  social: [{n:"Instagram",u:"https://instagram.com/"},{n:"Facebook",u:"https://facebook.com/"},{n:"X",u:"https://x.com/"}],
  currency: "$"
};
/* ===== EDIT ME: image URLs (Unsplash demo images; swap for your own licensed photos) ===== */
const u = (id,w=900)=>`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`;
const IMG = {
  hero:u("1544025162-d76694265947",1800), story1:u("1414235077428-338989a2e8c0",900), story2:u("1517248135467-4c7edcad34c4",700),
  exp:u("1559339352-11d035aa65de",1600)
};
/* ===== EDIT ME: menu data ===== */
const MENU = [
 {n:"Fire-Grilled Ribeye",d:"Dry-aged 300g ribeye, oak-smoked butter, charred shallot.",p:58,c:"Grill",i:u("1544025162-d76694265947"),sig:1},
 {n:"Truffle Cream Pasta",d:"Handmade tagliatelle, black truffle, aged parmesan cream.",p:32,c:"Pasta",i:u("1621996346565-e3dbc646d9a9"),sig:1,v:1},
 {n:"Smoked BBQ Platter",d:"Slow-smoked ribs, brisket and house pickles to share.",p:64,c:"Grill",i:u("1529193591184-b1d58069ecdd"),sig:1},
 {n:"Herb-Roasted Chicken",d:"Free-range half chicken, thyme jus, roasted garlic.",p:36,c:"Main Course",i:u("1598515214211-89d3c73ae83b"),sig:1},
 {n:"Crispy Parmesan Potatoes",d:"Twice-cooked, parmesan crust, rosemary salt.",p:14,c:"Starters",i:u("1572802419224-296b0aeee0d9"),sig:1,v:1},
 {n:"Chocolate Fondant",d:"Warm dark chocolate centre, salted caramel, vanilla cream.",p:16,c:"Desserts",i:u("1606313564200-e75d5e30476c"),sig:1,v:1},
 {n:"Charred Garden Salad",d:"Grilled greens, whipped feta, citrus and toasted seeds.",p:15,c:"Starters",i:u("1546069901-ba9599a7e63c"),v:1},
 {n:"Hearth Flatbread",d:"Blistered dough, burrata, tomato and basil oil.",p:17,c:"Starters",i:u("1565299624946-b28f40a0ae38"),v:1},
 {n:"Pan-Seared Salmon",d:"Crisp skin, fennel purée, lemon beurre blanc.",p:38,c:"Main Course",i:u("1476224203421-9ac39bcb3327")},
 {n:"Wild Mushroom Rigatoni",d:"Roasted mushrooms, thyme, pecorino, toasted breadcrumbs.",p:27,c:"Pasta",i:u("1504674900247-0877df9cc836"),v:1},
 {n:"Wood-Fired Lamb Chops",d:"Rosemary marinade, mint salsa verde, smoked aubergine.",p:52,c:"Grill",i:u("1600891964092-4316c288032e")},
 {n:"Burnt Honey Tart",d:"Buttery shell, burnt honey custard, crème fraîche.",p:14,c:"Desserts",i:u("1567620905732-2d1ec7ab7445"),v:1},
 {n:"Smoked Old Fashioned",d:"Bourbon, demerara, orange oils, oak smoke.",p:16,c:"Drinks",i:u("1514362545857-3bc16c4c7d1b")},
 {n:"Blood Orange Spritz",d:"Blood orange, sparkling wine, rosemary. Alcohol-free version on request.",p:13,c:"Drinks",i:u("1541592106381-b31e9677c0e5")}
];
const GALLERY = [
 [u("1414235077428-338989a2e8c0",1200),"Plated seasonal main course"],[u("1517248135467-4c7edcad34c4"),"Warm dining room at dusk"],
 [u("1529193591184-b1d58069ecdd"),"Slow-smoked ribs"],[u("1555396273-367ea4eb4db5"),"Candlelit restaurant interior"],
 [u("1514362545857-3bc16c4c7d1b"),"Signature cocktail at the bar"],[u("1432139555190-58524dae6a55",1200),"Chef's counter and open kitchen"],
 [u("1606313564200-e75d5e30476c"),"Chocolate fondant"]
];
/* ===== Code ===== */
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
document.documentElement.classList.add("js");
const FALLBACK="data:image/svg+xml,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect width="400" height="300" fill="#241d18"/><text x="200" y="158" fill="#C6A66B" font-family="serif" font-size="28" text-anchor="middle">Ember &amp; Oak</text></svg>');
const fix=img=>img.addEventListener("error",()=>{img.onerror=null;img.src=FALLBACK},{once:true});
const money=n=>SITE.currency+n;
const esc=s=>s.replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

$$("[data-img]").forEach(el=>{const src=IMG[el.dataset.img];
  if(el.tagName==="IMG"){el.src=src;fix(el)}else el.style.backgroundImage=`url("${src}")`;});

const card=m=>`<article class="card"><div class="ph"><img src="${m.i}" alt="${esc(m.n)}" width="900" height="675" loading="lazy"></div><div class="tx"><div class="row"><h3>${esc(m.n)}</h3><span class="price">${money(m.p)}</span></div><p>${esc(m.d)}</p><span class="tag">${m.sig?"Signature · ":""}${m.c}${m.v?" · Vegetarian":""}</span></div></article>`;
$("#sigGrid").innerHTML=MENU.filter(m=>m.sig).map(card).join("");
$$("#sigGrid .card").forEach((c,i)=>{c.classList.add("reveal");c.style.transitionDelay=(i%3)*90+"ms"});
$$("#sigGrid img").forEach(fix);

const order=["All","Starters","Main Course","Pasta","Grill","Desserts","Drinks"];
let cat="All";
$("#tabs").innerHTML=order.map(c=>`<button type="button" aria-pressed="${c==="All"}">${c}</button>`).join("");
function renderMenu(){
  const q=$("#search").value.trim().toLowerCase();
  const list=MENU.filter(m=>(cat==="All"||m.c===cat)&&m.n.toLowerCase().includes(q));
  $("#menuGrid").innerHTML=list.map(card).join("");
  $$("#menuGrid img").forEach(fix);
  $("#empty").hidden=list.length>0;
  $("#menuStatus").textContent=`${list.length} dish${list.length===1?"":"es"} shown`;
}
$("#tabs").addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;
  $$("#tabs button").forEach(x=>x.setAttribute("aria-pressed",x===b));cat=b.textContent;renderMenu()});
$("#search").addEventListener("input",renderMenu);
renderMenu();

$("#gal").innerHTML=GALLERY.map((g,i)=>`<button type="button" data-i="${i}" data-cap="${esc(g[1])}" aria-label="Open image: ${esc(g[1])}"><img src="${g[0]}" alt="${esc(g[1])}" loading="lazy" width="800" height="600"></button>`).join("");
$$("#gal img").forEach(fix);
let gi=0,lastFocus=null;const lb=$("#lb");
function show(i){gi=(i+GALLERY.length)%GALLERY.length;const img=$("#lbImg");img.onerror=()=>{img.onerror=null;img.src=FALLBACK};img.src=GALLERY[gi][0];img.alt=GALLERY[gi][1];$("#lbCap").textContent=GALLERY[gi][1]}
function openLb(i){lastFocus=document.activeElement;show(i);lb.hidden=false;document.body.style.overflow="hidden";$("#lbClose").focus()}
function closeLb(){lb.hidden=true;document.body.style.overflow="";lastFocus&&lastFocus.focus()}
$("#gal").addEventListener("click",e=>{const b=e.target.closest("button");if(b)openLb(+b.dataset.i)});
$("#lbClose").onclick=closeLb;$("#lbPrev").onclick=()=>show(gi-1);$("#lbNext").onclick=()=>show(gi+1);
lb.addEventListener("click",e=>{if(e.target===lb)closeLb()});
document.addEventListener("keydown",e=>{
  if(!lb.hidden){if(e.key==="Escape")closeLb();if(e.key==="ArrowLeft")show(gi-1);if(e.key==="ArrowRight")show(gi+1);
    if(e.key==="Tab"){const f=$$("button",lb),first=f[0],last=f[f.length-1];
      if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}}
  else if(e.key==="Escape")closeNav();
});

const nav=$("#nav"),burger=$("#burger"),mq=matchMedia("(max-width:900px)");
function navInert(){$$("a",nav).forEach(a=>a.tabIndex=(mq.matches&&!nav.classList.contains("open"))?-1:0)}
function closeNav(){nav.classList.remove("open");burger.setAttribute("aria-expanded","false");burger.setAttribute("aria-label","Open menu");document.body.style.overflow="";navInert()}
burger.addEventListener("click",()=>{const o=nav.classList.toggle("open");burger.setAttribute("aria-expanded",o);burger.setAttribute("aria-label",o?"Close menu":"Open menu");document.body.style.overflow=o?"hidden":"";navInert()});
$$("a",nav).forEach(a=>a.addEventListener("click",closeNav));
addEventListener("resize",()=>{if(innerWidth>900)closeNav()});
mq.addEventListener("change",navInert);navInert();

const header=$("#header"),bar=$("#progress"),topBtn=$("#top");
function onScroll(){const y=scrollY,h=document.documentElement.scrollHeight-innerHeight;
  header.classList.toggle("solid",y>40);bar.style.width=(h>0?y/h*100:0)+"%";topBtn.classList.toggle("show",y>700)}
addEventListener("scroll",onScroll,{passive:true});onScroll();

const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});
$$(".reveal").forEach(el=>io.observe(el));
const links=$$(".nav ul a"),secs=links.map(a=>$(a.getAttribute("href")));
const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const id="#"+e.target.id;
  links.forEach(a=>{const on=a.getAttribute("href")===id;a.classList.toggle("active",on);on?a.setAttribute("aria-current","true"):a.removeAttribute("aria-current")})}}),{rootMargin:"-45% 0px -50% 0px"});
secs.forEach(s=>s&&so.observe(s));

$("#cAddr").textContent=SITE.address;$("#cHours").textContent=SITE.hours;
$("#cPhone").textContent=SITE.phone;$("#cPhone").href="tel:"+SITE.phone.replace(/[^\d+]/g,"");
$("#cMail").textContent=SITE.email;$("#cMail").href="mailto:"+SITE.email;
$("#dir").href="https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(SITE.address);
const soc=SITE.social.map(s=>`<li><a href="${s.u}" target="_blank" rel="noopener">${s.n}</a></li>`).join("");
$("#social").innerHTML=soc;$("#fSocial").innerHTML=soc;
$("#fAddr").textContent=SITE.address;$("#fHours").textContent=SITE.hours;
$("#year").textContent=new Date().getFullYear();

$("#rGuests").innerHTML='<option value="">Select</option>'+Array.from({length:10},(_,i)=>`<option value="${i+1}">${i+1} guest${i?"s":""}</option>`).join("")+'<option value="10+">10+ (contact us)</option>';
const times=[];for(let h=17;h<=22;h++)for(const m of["00","30"])if(!(h===22&&m==="30"))times.push(`${h-12}:${m} pm`);
$("#rTime").innerHTML='<option value="">Select</option>'+times.map(t=>`<option>${t}</option>`).join("");
const pad=n=>String(n).padStart(2,"0"),d=new Date();
$("#rDate").min=`${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;

function check(form){let ok=true,first=null;
  $$("input,select,textarea",form).forEach(el=>{
    const f=el.closest(".f"),err=$(".err",f);if(!err)return;let msg="";
    if(el.validity.valueMissing)msg="This field is required.";
    else if(el.validity.typeMismatch)msg="Enter a valid email address.";
    else if(el.validity.patternMismatch)msg="Enter a valid phone number.";
    else if(el.validity.tooShort)msg="Please write at least 10 characters.";
    else if(el.type==="date"&&el.value&&el.value<el.min)msg="Choose today or a future date.";
    f.classList.toggle("bad",!!msg);err.textContent=msg;el.setAttribute("aria-invalid",!!msg);
    if(msg){ok=false;first=first||el}});
  first&&first.focus();return ok}
function demoForm(form,okId,after){
  form.addEventListener("submit",e=>{e.preventDefault();if(!check(form))return;
    after&&after();form.hidden=true;const ok=$("#"+okId);ok.hidden=false;ok.scrollIntoView({block:"center"})});
  form.addEventListener("input",()=>{if($(".bad",form))check(form)})}
demoForm($("#resForm"),"resOk",()=>{const f=$("#resForm");
  $("#resMsg").textContent=`Thank you, ${f.name.value.trim()}. You asked for a table for ${f.guests.value} on ${f.date.value} at ${f.time.value}.`});
demoForm($("#conForm"),"conOk");
$$("[data-reset]").forEach(b=>b.addEventListener("click",()=>{
  const ok=$("#"+b.dataset.reset);ok.hidden=true;const f=ok.previousElementSibling;f.reset();f.hidden=false;
  $$(".bad",f).forEach(x=>x.classList.remove("bad"));$$(".err",f).forEach(x=>x.textContent="");$("input",f).focus()}));

if(matchMedia("(hover:hover) and (pointer:fine)").matches&&!matchMedia("(prefers-reduced-motion:reduce)").matches){
  const c=document.createElement("div");c.className="cur";c.setAttribute("aria-hidden","true");document.body.appendChild(c);
  addEventListener("mousemove",e=>{c.style.transform=`translate(${e.clientX}px,${e.clientY}px)`});
  document.addEventListener("mouseover",e=>c.classList.toggle("big",!!e.target.closest("a,button,.card")));
}
