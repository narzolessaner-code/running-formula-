# 🏃 running-formula-

**Your faceless running page, run by an AI content company.**

You shoot neck-down running clips and post them. The AI does everything else —
branding, viral on-screen text, captions, SEO, research, editing direction,
community replies, strategy. The signature is **deadpan, pseudo-scientific
"runner-brain" comedy** — the humor of *"if you slam enough espresso to hit
125–150 bpm you're basically biohacking zone 2 cardio / I'm basically running
120 miles per week."*

It's built to make **every level of runner laugh at once** — from never-started,
to beginners, intermediate, advanced, elite, all the way to GOATs — because they
all share the same cope, the same delusion, the same fake math.

---

## Two ways to use it: the **app**, or the **prompt**

### 🖥️ The App (no other AI needed — runs by itself)
**`app/index.html`** — *The Running Content Machine* console. Open it, pick a
runner level, hit **Generate**, and it builds a full post kit instantly: on-screen
text, caption, voiceover, what to film neck-down, trending-audio direction, SEO
hook + hashtags, a pinned comment, and *why it works* — with a **live phone
preview** of the meme. "**Drop 7**" gives you a week to film in one session.
Works offline, on your phone, no login. (Also published as a live link you can
bookmark.)

### 🧠 The Engine (scriptable)
**`machine/generate.py`** — the same 8-formula engine in Python. Run it to spit
out a batch of ready posts as Markdown:

```bash
python3 machine/generate.py -n 30                 # 30 post kits → output/content-drop.md
python3 machine/generate.py --formula fake_study  # lock a formula
python3 machine/generate.py --level beginner      # target one level
```

A fresh 30-post drop is already committed at **`output/content-drop.md`** —
that's your content for the next two-plus weeks, right now.

### 📋 The Prompts (paste into any AI when you want a human-level co-writer)

| File | What it is | When to use it |
|---|---|---|
| **`prompts/RUNNING-CONTENT-MACHINE.md`** | ⭐ Master prompt. Paste into Claude/Gemini/ChatGPT → it becomes your whole content company. | When you want a smart co-writer for a specific idea. |
| **`prompts/BRANDING-KIT.md`** | One-time prompt to name & dress the page (name, handle, bio, profile pic, cover, fonts, colors, pillars, launch plan). | Once, before you start. |
| **`swipe-file/VIRAL-TEXT-BANK.md`** | 50+ ready-to-use lines + captions by level & formula, plus a Filipino/Taglish layer. | Grab-and-post, no generation. |

---

## Quick start

**Fastest (30 seconds):** open **`app/index.html`** → pick a level → hit
**Generate**. Copy the kit, film the neck-down clip, drop the text on top, post.
Or run `python3 machine/generate.py -n 30` and pull from `output/content-drop.md`.

**Want a co-writer for a specific idea?**
1. *(Optional)* Name the page: open `prompts/BRANDING-KIT.md`, fill the 4 blanks,
   paste into your AI → name, handle, bio, profile/cover prompts, fonts, colors,
   first 9 posts.
2. Copy **all** of `prompts/RUNNING-CONTENT-MACHINE.md` into a fresh Claude/Gemini
   chat. It replies `READY`.
3. Send it anything — `today's run: 8k, felt like death` — and it hands back a
   full Post Kit. You film, you post. Done.

---

## Commands you can type into the machine

`/post [topic]` · `/batch 7` (a week of posts to film in one session) ·
`/hooks [topic]` (10 overlay lines) · `/caption` · `/remix [a line]` ·
`/study [paste science]` · `/rundata [paste watch stats]` · `/series` ·
`/brand` · `/calendar 30` · `/trends` · `/localize ph` (Taglish for PH reach) ·
`/harder` · `/safer`

---

## The humor engine (why it works)

Every line is: **real running jargon + absurd logic, delivered dead serious.**
The overlay tells a small lie; the caption tells a bigger one. It flatters the
runner's wish to have done the work without doing it — so a beginner laughs
because they *wish* it were true, and a GOAT laughs because they *know* it isn't.
Full breakdown + the 8 repeatable formulas live inside the master prompt.

**The only rules:** punch at our own delusion (never at a person's body or
ability), and never turn real safety into a joke. Funny, kind, and it scales.

---

## Real data = rocket fuel

This page has a Garmin/watch behind it. When you paste real numbers into the
machine (`/rundata`), it wraps the *true* stat around the *fake* conclusion —
which makes the joke land harder and read as credible. Real pain, delusional spin.

---

*Shoot the clip. Post the text. Let the company handle the rest.*
