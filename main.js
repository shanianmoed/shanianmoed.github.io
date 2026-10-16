/* Builds the page from data.js. You normally don't need to edit this file. */
(function () {
  const S = window.SITE;
  const $ = (s) => document.querySelector(s);
  const esc = (t) => String(t ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const has = (u) => typeof u === "string" && u.trim() !== "";
  const areaById = Object.fromEntries((S.areas || []).map((a) => [a.id, a]));
  const colorOf = (id) => (areaById[id] ? "c-" + areaById[id].color : "");

  const STATUS_LABEL = { published: "Published", review: "Under review", accepted: "Accepted", preprint: "Preprint", ongoing: "Ongoing" };

  const ICON = {
    doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>',
    scholar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c3 2.5 9 2.5 12 0v-5"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9V21c0 .3.2.6.7.5A10 10 0 0 0 12 2z"/></svg>',
    orcid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9.5"/><path d="M9 10v7M9 7.2v.1M12.5 10h1.7a3.5 3.5 0 0 1 0 7h-1.7z" stroke-linecap="round"/></svg>',
    researchgate: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 17V8h3a2.5 2.5 0 0 1 0 5H8m3 0 3 4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM2.5 9h3v12h-3zM9 9h2.9v1.7c.4-.8 1.5-1.9 3.4-1.9 3.4 0 4.2 2.2 4.2 5.2V21h-3v-6.2c0-1.5-.1-3.2-2-3.2s-2.4 1.5-2.4 3.1V21H9z"/></svg>',
    sun: '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
    moon: '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/></svg>',
    auto: '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/></svg>'
  };

  const PROFILE = {
    scholar: ["Google Scholar", ICON.scholar],
    orcid: ["ORCID", ICON.orcid],
    researchgate: ["ResearchGate", ICON.researchgate],
    github: ["GitHub", ICON.github],
    linkedin: ["LinkedIn", ICON.linkedin]
  };

  /* ---------- simple bindings ---------- */
  document.querySelectorAll("[data-bind]").forEach((el) => { el.textContent = S[el.dataset.bind] || ""; });
  document.title = `${S.name} · ${S.shortTitle}`;
  const affil = $("#affilLink"); affil.textContent = S.affiliation; affil.href = S.affiliationUrl || "#";
  $("#year").textContent = new Date().getFullYear();
  $("#cvTop").href = S.cv || "#";

  if (has(S.status)) $("#status span:last-child").textContent = S.status; else $("#status").hidden = true;

  /* ---------- hero buttons ---------- */
  let btns = "";
  if (has(S.cv)) btns += `<a class="btn primary" href="${esc(S.cv)}">${ICON.doc}Curriculum vitae</a>`;
  if (has(S.email)) btns += `<a class="btn" href="mailto:${esc(S.email)}">${ICON.mail}Email</a>`;
  for (const [k, [label, icon]] of Object.entries(PROFILE)) {
    if (has(S.links?.[k])) btns += `<a class="btn" href="${esc(S.links[k])}" target="_blank" rel="noopener">${icon}${label === "Google Scholar" ? "Scholar" : label}</a>`;
  }
  $("#heroButtons").innerHTML = btns;

  /* ---------- avatar ---------- */
  const words = S.name.split(/\s+/).filter((w) => !/^(md\.?|mohammad|muhammad|mr\.?|dr\.?)$/i.test(w));
  const initials = (words[0][0] + (words.length > 1 ? words[words.length - 1][0] : "")).toUpperCase();
  const av = $("#avatar");
  av.textContent = initials;
  if (has(S.photo)) {
    const img = new Image();
    img.alt = S.name;
    img.onload = () => { av.textContent = ""; av.appendChild(img); };
    img.src = S.photo;
  }
  if (has(S.metricsNote)) $("#metricsNote").textContent = S.metricsNote; else $("#metricsNote").textContent = S.role;

  /* ---------- stats ---------- */
  const pubs = S.publications || [];
  const auto = {
    published: pubs.filter((p) => p.status === "published" || p.status === "accepted").length,
    review: pubs.filter((p) => p.status === "review").length,
    projects: (S.projects || []).length,
    areas: (S.areas || []).length
  };
  $("#stats").innerHTML = (S.stats || []).map((s) => {
    const v = String(s.value).startsWith("auto:") ? auto[s.value.slice(5)] ?? 0 : s.value;
    return `<div class="stat"><b>${esc(v)}</b><span>${esc(s.label)}</span></div>`;
  }).join("");

  /* ---------- research areas ---------- */
  $("#areas").innerHTML = (S.areas || []).map((a) => {
    const np = pubs.filter((p) => (p.areas || []).includes(a.id)).length;
    const nj = (S.projects || []).filter((p) => (p.areas || []).includes(a.id)).length;
    const bits = [];
    if (np) bits.push(`${np} paper${np > 1 ? "s" : ""}`);
    if (nj) bits.push(`${nj} project${nj > 1 ? "s" : ""}`);
    return `<article class="area c-${esc(a.color)}">
      <div><h3>${esc(a.title)}</h3>${bits.length ? `<p class="count">${bits.join(" · ")}</p>` : ""}</div>
      <p>${esc(a.text)}</p>
      <ul>${(a.topics || []).map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
    </article>`;
  }).join("");

  /* ---------- publications ---------- */
  const order = { review: 0, accepted: 1, preprint: 2, published: 3 };
  const sorted = [...pubs].sort((a, b) => (order[a.status] ?? 9) - (order[b.status] ?? 9) || (b.year || 0) - (a.year || 0));
  const LINKS = [["doi", "DOI"], ["preprint", "Preprint"], ["code", "Code"], ["data", "Data"], ["bibtex", "BibTeX"]];

  function pubHTML(p) {
    let authors = esc(p.authors);
    if (has(S.me)) authors = authors.split(esc(S.me)).join(`<b>${esc(S.me)}</b>`);
    const pre = p.status === "review" ? "Submitted to " : "";
    const venue = !has(p.venue) ? `Manuscript under review${p.year ? " · " + esc(p.year) : ""}` : `${pre}<i>${esc(p.venue)}</i>${has(p.publisher) ? " · " + esc(p.publisher) : ""}${p.year ? " · " + esc(p.year) : ""}`;
    const first = (p.areas || [])[0];
    const tags = [
      `<span class="pill ${esc(p.status)}">${STATUS_LABEL[p.status] || esc(p.status)}</span>`,
      has(p.type) ? `<span class="tag">${esc(p.type)}</span>` : "",
      has(p.rank) ? `<span class="tag">${esc(p.rank)}</span>` : "",
      ...(p.areas || []).filter((id) => areaById[id]).map((id) => `<span class="tag atag ${colorOf(id)}">${esc(areaById[id].title)}</span>`)
    ].join("");
    const links = LINKS.filter(([k]) => has(p.links?.[k])).map(([k, l]) => `<a class="linkbtn" href="${esc(p.links[k])}" target="_blank" rel="noopener">${l}</a>`).join("");
    return `<article class="pub ${first ? colorOf(first) : ""}">
      <h3>${esc(p.title)}</h3>
      <p class="authors">${authors}</p>
      <p class="venue">${venue}</p>
      <div class="row-wrap">${tags}</div>
      ${links ? `<div class="row-wrap">${links}</div>` : ""}
    </article>`;
  }

  let fStatus = "all", fArea = "all";
  function renderPubs() {
    const list = sorted.filter((p) =>
      (fStatus === "all" || (fStatus === "published" ? (p.status === "published" || p.status === "accepted") : p.status === fStatus)) &&
      (fArea === "all" || (p.areas || []).includes(fArea)));
    $("#pubs").innerHTML = list.map(pubHTML).join("");
    $("#pubsEmpty").hidden = list.length > 0;
  }
  const statusChips = [["all", "All"], ["published", "Published"], ["review", "Under review"]];
  if (pubs.some((p) => p.status === "preprint")) statusChips.push(["preprint", "Preprints"]);
  $("#filters").innerHTML =
    statusChips.map(([v, l]) => `<button class="chip" data-f="status" data-v="${v}" aria-pressed="${v === "all"}">${l}</button>`).join("") +
    `<span class="chip-sep" aria-hidden="true"></span>` +
    (S.areas || []).filter((a) => pubs.some((p) => (p.areas || []).includes(a.id)))
      .map((a) => `<button class="chip" data-f="area" data-v="${esc(a.id)}" aria-pressed="false">${esc(a.title)}</button>`).join("");
  $("#filters").addEventListener("click", (e) => {
    const b = e.target.closest(".chip"); if (!b) return;
    if (b.dataset.f === "status") {
      fStatus = b.dataset.v;
      document.querySelectorAll('.chip[data-f="status"]').forEach((c) => c.setAttribute("aria-pressed", c === b));
    } else {
      fArea = fArea === b.dataset.v ? "all" : b.dataset.v;
      document.querySelectorAll('.chip[data-f="area"]').forEach((c) => c.setAttribute("aria-pressed", c.dataset.v === fArea));
    }
    renderPubs();
  });
  if (!pubs.length) $("#publications").hidden = true; else renderPubs();

  /* ---------- projects ---------- */
  const PLINKS = [["paper", "Paper"], ["code", "Code"], ["data", "Data"]];
  const projects = S.projects || [];
  if (!projects.length) $("#projects").hidden = true;
  $("#projectCards").innerHTML = projects.map((p) => {
    const first = (p.areas || [])[0];
    const links = PLINKS.filter(([k]) => has(p.links?.[k])).map(([k, l]) => `<a class="linkbtn" href="${esc(p.links[k])}" target="_blank" rel="noopener">${l}</a>`).join("");
    return `<article class="card ${first ? colorOf(first) : ""}">
      <div class="card-head"><div><h3>${esc(p.title)}</h3><p class="kind">${esc(p.kind)}</p></div>
      ${has(p.status) ? `<span class="pill ${esc(p.status)}">${STATUS_LABEL[p.status] || esc(p.status)}</span>` : ""}</div>
      <p>${esc(p.text)}</p>
      <div class="row-wrap">${(p.tags || []).map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
      ${links ? `<div class="row-wrap">${links}</div>` : ""}
    </article>`;
  }).join("");

  /* ---------- experience & education ---------- */
  function timeline(items) {
    return (items || []).map((x) => {
      const now = /present/i.test(x.end);
      return `<article class="tl">
        <div class="tl-date"><b>${esc(x.start)}</b><span class="${now ? "now" : ""}">${now ? "● Present" : "to " + esc(x.end)}</span></div>
        <div>
          <h3>${esc(x.title)}</h3>
          <p class="org">${has(x.orgUrl) && x.orgUrl !== "#" ? `<a href="${esc(x.orgUrl)}" target="_blank" rel="noopener">${esc(x.org)}</a>` : `<span style="color:var(--ok)">${esc(x.org)}</span>`}${has(x.place) ? " · " + esc(x.place) : ""}</p>
          ${(x.tags || []).length ? `<div class="row-wrap">${x.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>` : ""}
          ${(x.points || []).length ? `<ul>${x.points.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>` : ""}
        </div>
      </article>`;
    }).join("");
  }
  $("#experienceList").innerHTML = timeline(S.experience);
  $("#educationList").innerHTML = timeline(S.education);
  if (!(S.experience || []).length) { $("#experienceList").hidden = true; $("#experience .sec-head").hidden = true; }

  /* ---------- skills ---------- */
  if (!(S.skills || []).length) $("#skills").hidden = true;
  $("#skillGroups").innerHTML = (S.skills || []).map((g) =>
    `<div class="skill"><h3>${esc(g.group)}</h3><div class="row-wrap">${g.items.map((i) => `<span class="tag">${esc(i)}</span>`).join("")}</div></div>`).join("");

  /* ---------- teaching ---------- */
  if (!(S.teaching || []).length) $("#teaching").hidden = true;
  $("#teachingList").innerHTML = (S.teaching || []).map((t) =>
    `<a href="${esc(t.url || "#")}"><b>${esc(t.title)}</b><span>${esc(t.text)}</span></a>`).join("");

  /* ---------- awards ---------- */
  if (!(S.awards || []).length) $("#awards").hidden = true;
  $("#awardGroups").innerHTML = (S.awards || []).map((g) =>
    `<div><h3>${esc(g.group)}</h3>${g.items.map((i) => `<div class="award"><b>${esc(i.title)}</b><span>${esc(i.meta)}</span></div>`).join("")}</div>`).join("");

  /* ---------- contact ---------- */
  const em = $("#emailBig"); em.textContent = S.email; em.href = "mailto:" + S.email;
  let prof = "";
  if (has(S.cv)) prof += `<li><a href="${esc(S.cv)}">${ICON.doc}Curriculum vitae<span class="handle">PDF</span></a></li>`;
  for (const [k, [label, icon]] of Object.entries(PROFILE)) {
    if (has(S.links?.[k])) {
      const handle = S.links[k].replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
      prof += `<li><a href="${esc(S.links[k])}" target="_blank" rel="noopener">${icon}${label}<span class="handle">${esc(handle.length > 34 ? handle.slice(0, 32) + "…" : handle)}</span></a></li>`;
    }
  }
  $("#profiles").innerHTML = prof;

  /* ---------- side panel: citations chart + research visuals ---------- */
  const panel = $("#sidePanel");
  const cites = (S.citations || []).filter((c) => c && c.year);
  if (cites.length) {
    const max = Math.max(...cites.map((c) => c.count), 1);
    const W = 400, H = 130, pad = 28, bw = Math.min(46, (W - pad * 2) / cites.length * 0.55);
    const step = (W - pad * 2) / cites.length;
    const bars = cites.map((c, i) => {
      const h = (c.count / max) * (H - 50);
      const x = pad + step * i + (step - bw) / 2;
      return `<rect x="${x}" y="${H - 24 - h}" width="${bw}" height="${h}" rx="3" fill="var(--accent)" opacity=".75"><title>${c.year}: ${c.count}</title></rect>
              <text x="${x + bw / 2}" y="${H - 24 - h - 6}" text-anchor="middle" font-size="11" fill="var(--muted)">${c.count}</text>
              <text x="${x + bw / 2}" y="${H - 6}" text-anchor="middle" font-size="11" fill="var(--muted)">${c.year}</text>`;
    }).join("");
    const total = cites.reduce((s, c) => s + c.count, 0);
    panel.innerHTML = `<div class="panel-head"><h3>Citations per year</h3><span>${total} total · Google Scholar</span></div>
      <div class="chart"><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Citations per year bar chart">
        <line x1="${pad}" x2="${W - pad}" y1="${H - 24}" y2="${H - 24}" stroke="var(--rule)"/>${bars}</svg></div>`;
  } else {
    panel.hidden = true;
  }

  /* ---------- theme toggle ---------- */
  const themeBtn = $("#themeBtn");
  const modes = ["auto", "light", "dark"];
  let mode = document.documentElement.dataset.theme || "auto";
  function applyTheme() {
    if (mode === "auto") delete document.documentElement.dataset.theme; else document.documentElement.dataset.theme = mode;
    try { mode === "auto" ? localStorage.removeItem("theme") : localStorage.setItem("theme", mode); } catch (e) {}
    themeBtn.innerHTML = ICON[{ auto: "auto", light: "sun", dark: "moon" }[mode]];
    themeBtn.setAttribute("aria-label", `Colour theme: ${mode === "auto" ? "match system" : mode}. Click to change.`);
    themeBtn.title = mode === "auto" ? "Theme: system" : "Theme: " + mode;
    window.dispatchEvent(new Event("themechange"));
  }
  themeBtn.addEventListener("click", () => { mode = modes[(modes.indexOf(mode) + 1) % modes.length]; applyTheme(); });
  applyTheme();

  /* ---------- mobile menu ---------- */
  const menu = $("#menu"), menuBtn = $("#menuBtn");
  menuBtn.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
  });
  menu.addEventListener("click", (e) => { if (e.target.tagName === "A") { menu.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); } });

  /* ---------- highlight current section in the menu ---------- */
  const navLinks = [...menu.querySelectorAll("a")];
  const targets = navLinks.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  targets.forEach((t) => io.observe(t));

  /* ---------- interactive MoS2 lattice ---------- */
  function lattice(canvas) {
    const ctx = canvas.getContext("2d");
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let atoms = [], bonds = [], W = 0, H = 0, colors = {}, running = false, t0 = 0;
    const mouse = { x: -1e4, y: -1e4, active: false };
    const INTRO = 1000, R = 90;
    const css = (n) => getComputedStyle(document.documentElement).getPropertyValue(n).trim();
    const readColors = () => { colors = { mo: css("--violet"), s: css("--amber"), bond: css("--rule") }; };

    function build() {
      const r = canvas.getBoundingClientRect(), dpr = Math.min(devicePixelRatio || 1, 2);
      W = r.width; H = r.height; canvas.width = W * dpr; canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const a = 14, ax = Math.sqrt(3) * a, ay = 1.5 * a;
      atoms = [];
      for (let row = -1; row < H / ay + 2; row++)
        for (let c = -1; c < W / ax + 2; c++) {
          const x = c * ax + (row % 2 ? ax / 2 : 0), y = row * ay;
          atoms.push({ x, y, t: 0 }, { x, y: y + a, t: 1 });
        }
      const cx = W / 2, cy = H / 2;
      const md = Math.hypot(cx, cy);
      atoms.forEach((p) => { p.delay = (Math.hypot(p.x - cx, p.y - cy) / md) * INTRO * 0.7; });
      bonds = [];
      for (let i = 0; i < atoms.length; i++)
        for (let j = i + 1; j < atoms.length; j++) {
          if (atoms[i].t === atoms[j].t) continue;
          if (Math.abs(Math.hypot(atoms[i].x - atoms[j].x, atoms[i].y - atoms[j].y) - a) < 1) bonds.push([atoms[i], atoms[j]]);
        }
    }
    const ex = (p) => { const d = Math.hypot(p.x - mouse.x, p.y - mouse.y); return d < R ? (1 - d / R) ** 2 : 0; };
    const ap = (p, el) => { if (el === Infinity) return 1; const k = (el - p.delay) / 300; return k <= 0 ? 0 : k >= 1 ? 1 : 1 - (1 - k) ** 3; };
    function draw(now) {
      const el = reduce ? Infinity : now - t0;
      ctx.clearRect(0, 0, W, H); ctx.lineWidth = 1.1;
      for (const [p, q] of bonds) {
        const v = Math.min(ap(p, el), ap(q, el)); if (!v) continue;
        const e = Math.max(ex(p), ex(q));
        ctx.strokeStyle = e > 0.02 ? colors.mo : colors.bond;
        ctx.globalAlpha = v * (e > 0.02 ? 0.3 + e * 0.7 : 1);
        ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
      }
      for (const p of atoms) {
        const v = ap(p, el); if (!v) continue;
        const e = ex(p);
        ctx.globalAlpha = v * (0.75 + e * 0.25);
        ctx.fillStyle = p.t ? colors.s : colors.mo;
        ctx.beginPath(); ctx.arc(p.x, p.y, (p.t ? 2 : 2.9) * (0.6 + 0.4 * v) * (1 + e * 1.1), 0, Math.PI * 2); ctx.fill();
      }
      ctx.globalAlpha = 1;
      return el < INTRO;
    }
    function loop(now) { const intro = draw(now); if (intro || mouse.active) requestAnimationFrame(loop); else running = false; }
    const kick = () => { if (!running) { running = true; requestAnimationFrame(loop); } };
    canvas.addEventListener("pointermove", (e) => { const r = canvas.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; mouse.active = true; kick(); });
    canvas.addEventListener("pointerleave", () => { mouse.x = mouse.y = -1e4; mouse.active = false; kick(); });
    let rt; addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(() => { build(); kick(); }, 150); });
    addEventListener("themechange", () => { readColors(); kick(); });
    matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => { readColors(); kick(); });
    readColors(); build(); t0 = performance.now(); kick();
  }
})();
