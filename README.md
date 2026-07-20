# Biomechanics — Daily Study System

A self-contained study site built from your `BIOMECHANICS_STUDY_SYSTEM.md`.
Open it every day, study what's due, and let it track your progress.

## Open it

**Just open `index.html` in any browser.** No install, no build, no server, no login.
It works fully offline. Your progress is saved in the browser (localStorage), so
come back tomorrow and pick up exactly where you left off.

To use it on your phone or from anywhere, host it free with GitHub Pages:
repo **Settings → Pages → Deploy from branch → `main` / root**, then visit the URL
it gives you.

## What's inside

| Tab | What it does |
|---|---|
| **Today** | Your dashboard: cards due, a daily loop checklist, a study streak, and the full weekly loop (Prime → Class → Blank Page → 10-min drill → Embodiment lab → Weekend block). |
| **Flashcards** | ~97 cards across all 13 weeks with a real spaced-repetition engine (SM-2 lite). Tap to flip, grade **Again / Hard / Good / Easy** (keys `1–4`), and each card resurfaces right as you're about to forget it. Filter by week or card type (definition / formula / discrimination / application). |
| **Quiz** | 10-question rounds of multiple choice with instant explanations. Wrong answers can be sent straight to your Error Log. |
| **13-Week Map** | Every week: what it is → what to read (Hamm chapters) → **the trap** → the embodiment lab. |
| **Formulas** | The whole quantitative half — stress/strain, kinematics, kinetics, torque, fluids — with symbols and **units**. |
| **Math Prep** | The 10-min/day track for Weeks 1–6 that wins the second half. |
| **Error Log** | Add your own misses (what you got wrong · what's true · why). Seeded with the bone-bending and society-acronym traps. Read it before every exam. |
| **Library** | Direct links to all the free resources (Hamm PDF, OpenStax, PubMed, Anki, Kinovea…). |
| **Rules** | The "two subjects, one name" table and the 8 study rules. |

## How to actually use it (the loop)

1. **Night before class** — skim the week in the Library, do the *Prime*.
2. **Class night** — blank-page the lecture, then add every miss to Flashcards + Error Log.
3. **Every day** — 5 min Flashcards + 5 min Math Prep. Never skip old cards; the old cards are the exam.
4. **Before exams** — read the Error Log end to end and drill the Formula sheet.

*The blank page beats re-reading. Study your gaps, not your knowledge.*

## Files

```
index.html        the app shell + navigation
css/style.css     styles (light + dark, follows your system theme)
js/content.js     all study content — weeks, flashcards, quiz, formulas, resources
js/app.js         logic — spaced repetition, quiz engine, error log, persistence
```

To add or edit study material, edit `js/content.js` — it's plain data, no code.

*Reset all progress any time with the **Reset** button (top-right).*
