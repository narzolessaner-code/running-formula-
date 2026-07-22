# running-formula- · Viral Content Engine

A reusable **Viral Content Engine** for a faceless running / biohacking /
daily-optimization lifestyle brand. Type a topic (or `NEXT`) and it returns a
complete, publication-ready **Viral Content Blueprint** — shot direction,
on-screen hook, audio, caption, SEO, and the viral-psychology breakdown — built
to the brand's aesthetic and voice.

Your only job: **record the shot, drop in the text, post.** The engine does the
research, positioning, copy, SEO, and psychology.

It's powered by the Claude API (`claude-opus-4-8`) and every generation is
grounded in [`brand/brand_bible.md`](brand/brand_bible.md), so the whole voice
is version-controlled and tunable in one place.

## How it works

```
brand/system_prompt.md  ─┐
brand/brand_bible.md    ─┴─►  engine  ──►  Claude (claude-opus-4-8)  ──►  blueprints/NNN-topic.md
        (the brand)          (prompt +          (adaptive thinking,        (saved, numbered,
                              API call)          high effort)               ready to post)
```

## Setup

```bash
pip install -r requirements.txt
cp .env.example .env        # then add your ANTHROPIC_API_KEY
```

The engine reads `ANTHROPIC_API_KEY` from the environment (or an `.env` file,
or an `ant auth login` profile).

## Usage

```bash
python -m engine                    # engine picks a fresh angle ("Post #N")
python -m engine "cold plunge"      # blueprint for a specific topic
python -m engine NEXT               # same as no argument
python -m engine "zone 2 cardio" --effort xhigh
python -m engine "espresso ritual" --no-save   # print only, don't save
python -m engine "5am club" --dry-run          # show the assembled prompt, no API call
```

Each run prints the blueprint and saves it to `blueprints/NNN-topic.md`
(auto-numbered like a content calendar). Browse [`blueprints/`](blueprints/) for
examples.

### Flags

| Flag | Default | Notes |
|------|---------|-------|
| `--model` | `claude-opus-4-8` | Any Claude model ID. |
| `--effort` | `high` | `low` · `medium` · `high` · `xhigh` · `max`. |
| `--max-tokens` | `8192` | Output cap (thinking + text). |
| `--no-save` | off | Print only; don't write a file. |
| `--dry-run` | off | Print the assembled prompt and exit (no API call). |

Environment overrides: `VCE_MODEL`, `VCE_EFFORT`, `VCE_MAX_TOKENS`.

## The blueprint format

Every blueprint follows one fixed structure so it's fast to shoot and post:

1. 🎯 **Concept** — the angle and which tier it hits.
2. 📷 **Visual Shot Direction** — faceless framing, the micro-action, lighting.
3. ✍️ **On-Screen Text** — the scroll-stopping hook (+ optional sub-text).
4. 🎶 **Audio & Vibe** — the sound profile and why it fits.
5. 📝 **Caption** — hook line, body, and CTA.
6. 🔍 **SEO & Hashtags** — keywords + a global/niche/PH hashtag stack.
7. 🧠 **Viral Psychology** — the exact share / save / comment trigger.

## Tuning the brand

Edit [`brand/brand_bible.md`](brand/brand_bible.md) to shift the aesthetic,
voice, or rules, and [`brand/system_prompt.md`](brand/system_prompt.md) to
change the output contract. Both are loaded on every generation — no code
changes needed.

## Project layout

```
brand/
  brand_bible.md      # aesthetic, voice, formula, hard rules
  system_prompt.md    # the engine's persona + exact output template
engine/
  engine.py           # prompt assembly, Claude call, save
  __main__.py         # CLI (python -m engine)
blueprints/           # generated blueprints, auto-numbered
requirements.txt
.env.example
```
