# 🏃‍♂️ TAKBO LAB — Content Vault

Faceless running-science channel for the Philippine Running Era. This repo is
the channel's brain: the AI production system, brand identity, and every
episode's full production package.

## Structure

| Path | What it is |
|---|---|
| [`SKILI-RUNLAB-OS.md`](SKILI-RUNLAB-OS.md) | **The master system prompt** — paste into Claude to boot the whole company (research, scripts, storyboards, edit blueprints, SEO, money) |
| [`brand/BRANDING.md`](brand/BRANDING.md) | Locked channel identity: name, "Manila Blue Hour" grade, bio, logo prompt |
| [`episodes/ep00X-topic/`](episodes/) | One folder per episode: `package.md` (full script + storyboard), `shoot-card.md` (phone-ready field checklist), `gemini-editor-prompt.md` (paste-ready edit handoff) |
| [`templates/`](templates/) | Reusable prompts (Gemini editor template) |
| [`EPISODE-LOG.md`](EPISODE-LOG.md) | Episode tracker + performance numbers → feeds the `ANALYZE` command |

## The pipeline per episode

1. `NEXT POST [topic]` in Claude → save output as `episodes/ep00X-topic/package.md`
2. Record the voiceover at home (2 takes, quiet room)
3. Go outside with only `shoot-card.md` open on your phone
4. Rename clips as listed, upload to Gemini with `gemini-editor-prompt.md`
5. Post per the package's distribution schedule; pin the comment trap
6. Log results in `EPISODE-LOG.md`; if it flops in 48h, swap the hook and repost
