/* ============================================================================
   BIOMECHANICS STUDY SYSTEM — APP LOGIC
   Navigation, persistence, dashboard, flashcards (SM-2 lite), quiz, error log.
   All state persists in localStorage so the site works every day, offline.
   ========================================================================== */

(function () {
  "use strict";
  const C = window.CONTENT;
  const LS_KEY = "biomech_v1";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const el = (tag, cls, html) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const todayStr = () => new Date().toISOString().slice(0, 10);
  const now = () => Date.now();
  const DAY = 86400000;

  /* -------------------- State -------------------- */
  const defaultState = () => ({
    theme: "auto",
    cards: {},          // id -> {ef, interval, due, reps, lapses}
    quizStats: { taken: 0, correct: 0 },
    errors: [],         // {wrong, truth, reason}
    dailyChecks: {},    // "YYYY-MM-DD" -> {taskId:true}
    streak: { last: null, count: 0 },
    seeded: false,
  });

  let state = load();

  function load() {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (!raw) return defaultState();
      return Object.assign(defaultState(), JSON.parse(raw));
    } catch (e) {
      return defaultState();
    }
  }
  function save() {
    try { localStorage.setItem(LS_KEY, JSON.stringify(state)); } catch (e) {}
  }

  // Seed error log once
  if (!state.seeded) {
    state.errors = C.errorLogSeeds.slice();
    state.seeded = true;
    save();
  }

  /* -------------------- Card identity -------------------- */
  // Stable-ish id from week+front (deck is fixed order, so index is fine + safe)
  C.cards.forEach((c, i) => (c._id = "c" + i));

  function cardMeta(id) {
    if (!state.cards[id]) {
      state.cards[id] = { ef: 2.5, interval: 0, due: 0, reps: 0, lapses: 0 };
    }
    return state.cards[id];
  }

  /* -------------------- Streak -------------------- */
  function touchStreak() {
    const t = todayStr();
    if (state.streak.last === t) return;
    const yest = new Date(Date.now() - DAY).toISOString().slice(0, 10);
    state.streak.count = state.streak.last === yest ? state.streak.count + 1 : 1;
    state.streak.last = t;
    save();
  }

  /* ======================================================================
     NAVIGATION
     ==================================================================== */
  function initNav() {
    $$(".tab").forEach((t) =>
      t.addEventListener("click", () => showView(t.dataset.view))
    );
    const hash = location.hash.replace("#", "");
    showView(hash || "dashboard");
  }
  function showView(name) {
    $$(".view").forEach((v) => v.classList.toggle("active", v.id === "view-" + name));
    $$(".tab").forEach((t) => t.classList.toggle("active", t.dataset.view === name));
    location.hash = name;
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
    if (name === "flashcards") FC.refresh();
    if (name === "dashboard") renderDashboard();
    if (name === "errors") renderErrors();
  }

  /* ======================================================================
     THEME
     ==================================================================== */
  function applyTheme() {
    const root = document.documentElement;
    if (state.theme === "auto") root.removeAttribute("data-theme");
    else root.setAttribute("data-theme", state.theme);
    const btn = $("#themeBtn");
    if (btn) btn.textContent = state.theme === "auto" ? "◐ Auto" : state.theme === "dark" ? "☾ Dark" : "☀ Light";
  }
  function cycleTheme() {
    state.theme = state.theme === "auto" ? "light" : state.theme === "light" ? "dark" : "auto";
    save(); applyTheme();
  }

  /* ======================================================================
     DASHBOARD
     ==================================================================== */
  function dueCount() {
    return C.cards.filter((c) => {
      const m = state.cards[c._id];
      return !m || m.due <= now();
    }).length;
  }

  function renderDashboard() {
    const wrap = $("#view-dashboard");
    const due = dueCount();
    const learned = C.cards.filter((c) => { const m = state.cards[c._id]; return m && m.reps > 0; }).length;
    const acc = state.quizStats.taken ? Math.round((state.quizStats.correct / state.quizStats.taken) * 100) : 0;

    const t = todayStr();
    const checks = state.dailyChecks[t] || {};
    const dailyTasks = [
      { id: "blank", label: "Blank-page tonight's lecture (25 min)" },
      { id: "cards", label: "5 min flashcards — this week + resurfaced" },
      { id: "math", label: "5 min math prep (trig / vectors / a problem)" },
      { id: "aloud", label: "Say one concept out loud, with no jargon" },
    ];
    const doneToday = dailyTasks.filter((x) => checks[x.id]).length;

    wrap.innerHTML = "";

    const hero = el("div", "hero");
    hero.innerHTML = `
      <h2>Study what's needed. Today.</h2>
      <p>The blank page beats re-reading. Study your gaps, not your knowledge.</p>
      <div class="row">
        <div class="stat"><b>${due}</b><span>cards due now</span></div>
        <div class="stat"><b>${learned}/${C.cards.length}</b><span>cards seen</span></div>
        <div class="stat"><b>${acc}%</b><span>quiz accuracy</span></div>
        <div class="stat"><b>${state.streak.count}</b><span>day streak 🔥</span></div>
      </div>`;
    wrap.appendChild(hero);

    // Quick actions
    const qa = el("div", "grid two");
    const a1 = el("div", "card");
    a1.innerHTML = `<h3>▶ Review due cards</h3><p style="color:var(--text-soft);font-size:.9rem;margin:0 0 12px">${due} card${due === 1 ? "" : "s"} waiting. Spaced repetition catches them right as you're about to forget.</p>`;
    const b1 = el("button", "btn", "Start flashcards");
    b1.onclick = () => showView("flashcards");
    a1.appendChild(b1);
    const a2 = el("div", "card");
    a2.innerHTML = `<h3>✎ Take a quiz</h3><p style="color:var(--text-soft);font-size:.9rem;margin:0 0 12px">Discrimination & application questions — the kind exams actually ask.</p>`;
    const b2 = el("button", "btn ghost", "Start quiz");
    b2.onclick = () => showView("quiz");
    a2.appendChild(b2);
    qa.appendChild(a1); qa.appendChild(a2);
    wrap.appendChild(qa);

    // Today's checklist
    const chk = el("div", "card");
    chk.innerHTML = `<h3>Today's loop <span class="pill ${doneToday === dailyTasks.length ? "" : "muted"}">${doneToday}/${dailyTasks.length}</span></h3>`;
    dailyTasks.forEach((task) => {
      const line = el("div", "checkline" + (checks[task.id] ? " done" : ""));
      const box = el("input"); box.type = "checkbox"; box.checked = !!checks[task.id];
      box.id = "chk-" + task.id;
      box.onchange = () => {
        const day = state.dailyChecks[t] || (state.dailyChecks[t] = {});
        day[task.id] = box.checked;
        if (box.checked) touchStreak();
        save(); renderDashboard();
      };
      const lab = el("label", null, esc(task.label)); lab.htmlFor = box.id;
      line.appendChild(box); line.appendChild(lab);
      chk.appendChild(line);
    });
    wrap.appendChild(chk);

    // The weekly loop
    const loopCard = el("div", "card");
    loopCard.innerHTML = `<h3>The weekly loop</h3><p style="color:var(--text-soft);font-size:.88rem;margin:-4px 0 6px">Runs every week. Don't redesign it — just run it. D0 = your class day.</p>`;
    C.loop.forEach((L) => {
      const item = el("div", "loop-item");
      item.innerHTML = `
        <div class="loop-day">${L.day}</div>
        <div class="loop-body">
          <div class="h"><b>${esc(L.title)}</b> <span class="pill muted">${esc(L.time)}</span> <span style="color:var(--text-soft);font-size:.82rem">${esc(L.when)}</span></div>
          <ul>${L.steps.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>
          <div class="point">${esc(L.point)}</div>
        </div>`;
      loopCard.appendChild(item);
    });
    wrap.appendChild(loopCard);
  }

  /* ======================================================================
     WEEK MAP
     ==================================================================== */
  function renderWeeks() {
    const wrap = $("#view-weeks");
    wrap.innerHTML = `<h2 class="view-title">The 13-Week Map</h2>
      <p class="view-sub">Each week: what it is → where to read it → the trap → the embodiment lab.</p>`;

    const nav = el("div", "week-nav");
    C.weeks.forEach((w) => {
      const chip = el("button", "week-chip" + (w.exam ? " exam" : ""), "W" + w.n);
      chip.title = w.title;
      chip.onclick = () => { const t = $("#wk-" + w.n); t.scrollIntoView({ behavior: "smooth", block: "start" }); };
      nav.appendChild(chip);
    });
    wrap.appendChild(nav);

    C.weeks.forEach((w) => {
      const card = el("div", "card");
      card.id = "wk-" + w.n;
      const block = el("div", "week-block" + (w.exam ? " exam" : ""));
      block.innerHTML = `
        <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap">
          <span class="pill ${w.exam ? "warn" : ""}">Week ${w.n}</span>
          <h3 style="margin:0">${esc(w.title)}</h3>
        </div>
        <div class="week-field"><span class="lbl">Read</span><p>${esc(w.read)}</p></div>
        <div class="week-field"><span class="lbl">Core</span><p>${esc(w.core)}</p></div>
        <div class="week-field trap"><span class="lbl">⚠ The trap</span><p>${esc(w.trap)}</p></div>
        <div class="week-field lab"><span class="lbl">◆ Embodiment lab</span><p>${esc(w.lab)}</p></div>`;
      card.appendChild(block);
      wrap.appendChild(card);
    });
  }

  /* ======================================================================
     LABS
     ==================================================================== */
  function renderLabs() {
    const wrap = $("#labList");
    wrap.innerHTML = "";
    C.labs.forEach((L) => {
      const card = el("div", "card");
      const list = (arr, ol) => `<${ol ? "ol" : "ul"} class="lab-list">${arr.map((x) => `<li>${esc(x)}</li>`).join("")}</${ol ? "ol" : "ul"}>`;
      card.innerHTML = `
        <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:4px">
          <span class="pill gold">Lab ${L.n}</span>
          <span class="pill muted">Week ${L.w}</span>
          <h3 style="margin:0">${esc(L.title)}</h3>
        </div>
        <p style="color:var(--text-soft);font-size:.92rem;margin:2px 0 14px">${esc(L.subtitle)}</p>
        <div class="callout" style="margin-bottom:16px"><b>Key takeaway.</b> ${esc(L.takeaway)}</div>

        <div class="lab-sec"><span class="lab-lbl">Learning outcomes</span>${list(L.outcomes)}</div>
        <div class="lab-sec"><span class="lab-lbl">Pre-lab questions</span>${list(L.preLab, true)}</div>

        <div class="lab-sec"><span class="lab-lbl">Key concepts — operational definitions</span>
          <div class="lab-terms">${L.concepts.map((c) => `<div class="lab-term"><b>${esc(c.term)}</b><span>${esc(c.def)}</span></div>`).join("")}</div>
        </div>

        <div class="lab-sec"><span class="lab-lbl">Scenario</span><p style="margin:4px 0 0;font-size:.92rem">${esc(L.scenario)}</p></div>
        <div class="lab-sec"><span class="lab-lbl">Equipment</span>${list(L.equipment)}</div>
        <div class="lab-sec"><span class="lab-lbl">Procedure — discipline over instruments</span>${list(L.procedure)}</div>

        <div class="lab-sec"><span class="lab-lbl">Calculations</span>
          ${L.calcs.map((c) => `<div class="formula-row"><span class="nm" style="flex:none;min-width:150px;color:var(--text)">${esc(c.name)}</span><span class="sym" style="min-width:auto">${esc(c.formula)}</span></div>`).join("")}
        </div>

        <div class="lab-sec"><span class="lab-lbl">Overhead-squat checklist</span>${list(L.squatChecklist)}</div>
        <div class="lab-sec"><span class="lab-lbl">Interpretation questions</span>${list(L.interpretation, true)}</div>`;
      wrap.appendChild(card);
    });
  }

  /* ======================================================================
     FLASHCARDS — SM-2 lite spaced repetition
     ==================================================================== */
  const FC = (function () {
    let queue = [];
    let idx = 0;
    let flipped = false;
    let filterWeek = "all";
    let filterType = "all";

    function buildQueue() {
      let pool = C.cards.filter((c) => {
        if (filterWeek !== "all" && String(c.w) !== filterWeek) return false;
        if (filterType !== "all" && c.type !== filterType) return false;
        return true;
      });
      // Due first (due <= now), then new (reps 0), then rest by soonest due
      const due = [], fresh = [], later = [];
      pool.forEach((c) => {
        const m = state.cards[c._id];
        if (!m || m.reps === 0) fresh.push(c);
        else if (m.due <= now()) due.push(c);
        else later.push(c);
      });
      due.sort((a, b) => cardMeta(a._id).due - cardMeta(b._id).due);
      later.sort((a, b) => cardMeta(a._id).due - cardMeta(b._id).due);
      // In a session, prioritize due + fresh; only show 'later' if nothing else
      queue = due.concat(fresh);
      if (queue.length === 0) queue = later.slice(0, 20);
      idx = 0; flipped = false;
    }

    // SM-2 lite grading. q: 0 again, 1 hard, 2 good, 3 easy
    function grade(c, q) {
      const m = cardMeta(c._id);
      m.reps = (m.reps || 0) + 1;
      if (q === 0) {
        m.lapses = (m.lapses || 0) + 1;
        m.interval = 0;
        m.ef = Math.max(1.3, m.ef - 0.2);
        m.due = now() + 60 * 1000; // ~1 min, re-show this session
      } else {
        const qual = q === 1 ? 3 : q === 2 ? 4 : 5;
        m.ef = Math.max(1.3, m.ef + (0.1 - (5 - qual) * (0.08 + (5 - qual) * 0.02)));
        if (m.interval === 0) m.interval = q === 1 ? 1 : q === 3 ? 3 : 1;
        else if (m.interval === 1) m.interval = q === 3 ? 6 : 3;
        else m.interval = Math.round(m.interval * m.ef * (q === 1 ? 0.7 : q === 3 ? 1.3 : 1));
        m.due = now() + m.interval * DAY;
      }
      save();
      touchStreak();
    }

    function refresh() {
      buildFilters();
      buildQueue();
      render();
    }

    function buildFilters() {
      const wkSel = $("#fcWeek"), tySel = $("#fcType");
      if (wkSel.dataset.built) return;
      const weeks = [...new Set(C.cards.map((c) => c.w))].sort((a, b) => a - b);
      wkSel.innerHTML = '<option value="all">All weeks</option>' + weeks.map((w) => `<option value="${w}">Week ${w}</option>`).join("");
      const types = [...new Set(C.cards.map((c) => c.type))];
      tySel.innerHTML = '<option value="all">All types</option>' + types.map((t) => `<option value="${t}">${t[0].toUpperCase() + t.slice(1)}</option>`).join("");
      wkSel.onchange = () => { filterWeek = wkSel.value; buildQueue(); render(); };
      tySel.onchange = () => { filterType = tySel.value; buildQueue(); render(); };
      wkSel.dataset.built = "1";
    }

    function render() {
      const stage = $("#fcStage");
      const controls = $("#fcControls");
      const prog = $("#fcProgress");
      if (queue.length === 0) {
        stage.innerHTML = `<div class="empty-state"><div class="big">✓</div><b>Nothing due right now.</b><br>You've cleared this set. Switch filters, take a quiz, or come back tomorrow — that's spaced repetition working.</div>`;
        controls.innerHTML = ""; prog.innerHTML = ""; return;
      }
      if (idx >= queue.length) {
        stage.innerHTML = `<div class="empty-state"><div class="big">🎉</div><b>Session complete — ${queue.length} cards reviewed.</b><br>Everything you graded is scheduled for its next review. Come back tomorrow.</div>`;
        controls.innerHTML = "";
        prog.innerHTML = `<div class="progress-bar"><div style="width:100%"></div></div>`;
        return;
      }
      const c = queue[idx];
      prog.innerHTML = `<div class="progress-bar"><div style="width:${(idx / queue.length) * 100}%"></div></div>
        <div style="text-align:center;color:var(--text-soft);font-size:.82rem;margin-top:-8px">Card ${idx + 1} of ${queue.length}</div>`;

      const card = el("div", "flashcard");
      const typeCls = c.type === "discrimination" || c.type === "application" ? "gold" : c.type === "formula" ? "" : "muted";
      if (!flipped) {
        card.innerHTML = `
          <span class="fc-type pill ${typeCls}">${c.type}</span>
          <span class="fc-week pill muted">W${c.w}</span>
          <div class="fc-qlabel">Question</div>
          <div class="fc-text">${esc(c.front)}</div>
          <span class="fc-tap">tap to reveal · space</span>`;
        card.onclick = () => { flipped = true; render(); };
        controls.innerHTML = "";
      } else {
        card.innerHTML = `
          <span class="fc-type pill ${typeCls}">${c.type}</span>
          <span class="fc-week pill muted">W${c.w}</span>
          <div class="fc-qlabel">Answer</div>
          <div class="fc-text answer">${esc(c.back)}</div>`;
        card.onclick = () => {};
        controls.innerHTML = `
          <div class="fc-grade">
            <button class="again" data-q="0">Again<small>&lt;1 min</small></button>
            <button class="hard" data-q="1">Hard<small>soon</small></button>
            <button class="good" data-q="2">Good<small>on track</small></button>
            <button class="easy" data-q="3">Easy<small>later</small></button>
          </div>`;
        $$("#fcControls button").forEach((b) =>
          (b.onclick = () => {
            const q = +b.dataset.q;
            grade(c, q);
            if (q === 0) {
              // move to end of queue to re-show this session
              queue.push(c);
            }
            idx++; flipped = false; render();
          })
        );
      }
      stage.innerHTML = "";
      stage.appendChild(card);
    }

    function handleKey(e) {
      if (!$("#view-flashcards").classList.contains("active")) return;
      if (e.code === "Space") { e.preventDefault(); if (!flipped && queue[idx]) { flipped = true; render(); } return; }
      if (flipped && queue[idx]) {
        const map = { Digit1: 0, Digit2: 1, Digit3: 2, Digit4: 3 };
        if (e.code in map) {
          const q = map[e.code];
          grade(queue[idx], q);
          if (q === 0) queue.push(queue[idx]);
          idx++; flipped = false; render();
        }
      }
    }

    return { refresh, handleKey };
  })();

  /* ======================================================================
     QUIZ
     ==================================================================== */
  const QZ = (function () {
    let set = [];
    let i = 0;
    let answered = false;
    let sessionCorrect = 0;
    let filterWeek = "all";

    function shuffle(a) {
      a = a.slice();
      for (let k = a.length - 1; k > 0; k--) { const j = Math.floor(Math.random() * (k + 1)); [a[k], a[j]] = [a[j], a[k]]; }
      return a;
    }

    function start() {
      let pool = C.quiz.filter((q) => filterWeek === "all" || String(q.w) === filterWeek);
      set = shuffle(pool).slice(0, 10);
      i = 0; answered = false; sessionCorrect = 0;
      render();
    }

    function buildFilter() {
      const sel = $("#qzWeek");
      if (sel.dataset.built) return;
      const weeks = [...new Set(C.quiz.map((q) => q.w))].sort((a, b) => a - b);
      sel.innerHTML = '<option value="all">All weeks</option>' + weeks.map((w) => `<option value="${w}">Week ${w}</option>`).join("");
      sel.onchange = () => { filterWeek = sel.value; start(); };
      sel.dataset.built = "1";
    }

    function render() {
      const stage = $("#qzStage");
      if (i >= set.length) {
        const pct = set.length ? Math.round((sessionCorrect / set.length) * 100) : 0;
        stage.innerHTML = `<div class="quiz-score card">
          <div class="num">${sessionCorrect}/${set.length}</div>
          <p style="color:var(--text-soft)">${pct}% this round. ${pct >= 80 ? "Strong. Interleave a harder week next." : pct >= 50 ? "Getting there — every miss went to habit; review the ones you flubbed." : "Rebuild the weak weeks from a blank page, then come back."}</p>
        </div>`;
        const again = el("button", "btn", "New quiz");
        again.onclick = start;
        stage.appendChild(again);
        return;
      }
      const q = set[i];
      answered = false;
      const card = el("div", "card");
      card.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
          <span class="pill muted">Week ${q.w}</span>
          <span style="color:var(--text-soft);font-size:.82rem">Question ${i + 1} of ${set.length}</span>
        </div>
        <p class="quiz-q">${esc(q.q)}</p>
        <div class="qz-opts"></div>
        <div class="qz-why"></div>
        <div class="quiz-foot"></div>`;
      const opts = $(".qz-opts", card);
      q.opts.forEach((o, oi) => {
        const b = el("button", "quiz-opt", esc(o));
        b.onclick = () => answer(q, oi, card);
        opts.appendChild(b);
      });
      stage.innerHTML = ""; stage.appendChild(card);
    }

    function answer(q, choice, card) {
      if (answered) return;
      answered = true;
      const correct = choice === q.a;
      state.quizStats.taken++;
      if (correct) { state.quizStats.correct++; sessionCorrect++; }
      touchStreak();
      // If wrong, offer to auto-log the error
      const btns = $$(".quiz-opt", card);
      btns.forEach((b, bi) => {
        b.disabled = true;
        if (bi === q.a) b.classList.add("correct");
        else if (bi === choice) b.classList.add("wrong");
      });
      const why = $(".qz-why", card);
      why.className = "quiz-why" + (correct ? "" : " wrong");
      why.innerHTML = `<b>${correct ? "✓ Correct." : "✗ Not quite."}</b> ${esc(q.why)}`;
      const foot = $(".quiz-foot", card);
      const left = el("div");
      if (!correct) {
        const logBtn = el("button", "btn ghost", "+ Add to Error Log");
        logBtn.onclick = () => {
          state.errors.unshift({
            wrong: "Quiz (W" + q.w + "): chose “" + q.opts[choice] + "”",
            truth: q.opts[q.a] + " — " + q.why,
            reason: "",
          });
          save();
          logBtn.textContent = "✓ Logged";
          logBtn.disabled = true;
        };
        left.appendChild(logBtn);
      }
      foot.appendChild(left);
      const next = el("button", "btn", i === set.length - 1 ? "See score" : "Next →");
      next.onclick = () => { i++; render(); };
      foot.appendChild(next);
      save();
    }

    return { start, buildFilter };
  })();

  /* ======================================================================
     ERROR LOG
     ==================================================================== */
  function renderErrors() {
    const wrap = $("#errList");
    wrap.innerHTML = "";
    if (state.errors.length === 0) {
      wrap.innerHTML = `<p style="color:var(--text-soft)">Empty. Every mistake — from the blank page, flashcards, quizzes — gets one line here. Read it before every exam: it's a personalised prediction of what you'll get wrong.</p>`;
      return;
    }
    state.errors.forEach((e, idx) => {
      const div = el("div", "err-entry");
      div.innerHTML = `
        <div class="wrong">${esc(e.wrong)}</div>
        <div class="truth">✓ ${esc(e.truth)}</div>
        ${e.reason ? `<div class="reason">why: ${esc(e.reason)}</div>` : ""}
        <button class="del" title="delete">×</button>`;
      $(".del", div).onclick = () => { state.errors.splice(idx, 1); save(); renderErrors(); };
      wrap.appendChild(div);
    });
  }

  function initErrorForm() {
    $("#errAdd").onclick = () => {
      const w = $("#errWrong").value.trim();
      const t = $("#errTruth").value.trim();
      const r = $("#errReason").value.trim();
      if (!w || !t) { $("#errWrong").focus(); return; }
      state.errors.unshift({ wrong: w, truth: t, reason: r });
      save();
      $("#errWrong").value = $("#errTruth").value = $("#errReason").value = "";
      renderErrors();
    };
  }

  /* ======================================================================
     STATIC CONTENT: formulas, math, resources, rules, shape
     ==================================================================== */
  function renderFormulas() {
    const wrap = $("#formulaList");
    wrap.innerHTML = "";
    C.formulas.forEach((g) => {
      const card = el("div", "card formula-group");
      card.innerHTML = `<h3>${esc(g.group)}</h3>` + g.items.map((it) =>
        `<div class="formula-row"><span class="sym">${esc(it.sym)}</span><span class="nm">${esc(it.name)}</span><span class="un">${esc(it.unit)}</span></div>`
      ).join("");
      wrap.appendChild(card);
    });
  }

  function renderMath() {
    const wrap = $("#mathList");
    wrap.innerHTML = C.mathTrack.map((m) =>
      `<div class="card"><div style="display:flex;gap:12px;align-items:baseline"><span class="pill">Weeks ${esc(m.weeks)}</span><p style="margin:0">${esc(m.drill)}</p></div></div>`
    ).join("");
  }

  function renderResources() {
    const wrap = $("#resList");
    wrap.innerHTML = "";
    C.resources.forEach((r) => {
      const a = el("a", "res-item");
      a.href = r.url; a.target = "_blank"; a.rel = "noopener";
      a.innerHTML = `<div class="res-title">${esc(r.title)} ↗</div><div class="res-note">${esc(r.note)}</div><div class="res-url">${esc(r.url)}</div>`;
      wrap.appendChild(a);
    });
  }

  function renderRules() {
    $("#ruleList").innerHTML = C.rules.map((r) => `<li>${esc(r)}</li>`).join("");
  }

  function renderShape() {
    const s = C.shape;
    const wrap = $("#shapeBox");
    wrap.innerHTML = `
      <table class="shape-table">
        <tr><th></th><th>${esc(s.halves[0].name)}</th><th>${esc(s.halves[1].name)}</th></tr>
        <tr><td>Nature</td><td>${esc(s.halves[0].nature)}</td><td>${esc(s.halves[1].nature)}</td></tr>
        <tr><td>Failure mode</td><td>${esc(s.halves[0].failure)}</td><td>${esc(s.halves[1].failure)}</td></tr>
        <tr><td>Study weapon</td><td>${esc(s.halves[0].weapon)}</td><td>${esc(s.halves[1].weapon)}</td></tr>
        <tr><td>What kills you</td><td>${esc(s.halves[0].kills)}</td><td>${esc(s.halves[1].kills)}</td></tr>
      </table>
      <div class="callout" style="margin-top:14px"><b>The one move:</b> ${esc(s.keyMove)}</div>`;
  }

  /* ======================================================================
     RESET
     ==================================================================== */
  function initReset() {
    $("#resetBtn").onclick = () => {
      if (confirm("Reset ALL progress — flashcard schedule, quiz stats, error log, checklists? This cannot be undone.")) {
        localStorage.removeItem(LS_KEY);
        state = defaultState();
        state.errors = C.errorLogSeeds.slice();
        state.seeded = true;
        save();
        applyTheme();
        renderDashboard(); renderErrors();
        FC.refresh();
        alert("Progress reset.");
      }
    };
  }

  /* ======================================================================
     BOOT
     ==================================================================== */
  function boot() {
    applyTheme();
    initNav();
    $("#themeBtn").onclick = cycleTheme;
    initReset();
    renderShape();
    renderLabs();
    renderWeeks();
    renderFormulas();
    renderMath();
    renderResources();
    renderRules();
    renderErrors();
    initErrorForm();
    QZ.buildFilter();
    $("#qzStart").onclick = QZ.start;
    document.addEventListener("keydown", FC.handleKey);
    renderDashboard();
  }

  document.addEventListener("DOMContentLoaded", boot);
})();
