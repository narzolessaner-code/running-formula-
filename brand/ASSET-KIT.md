# 🎨 TAKBO LAB — Visual Asset Kit (goes on EVERY video)

> ✅ BUILT — the PNG files are in `brand/assets/`:
> `logo-profile.png` (1080² profile pic) · `watermark.png` (transparent) ·
> `endcard.png` (1080×1920) · `badge-same-legs.png` / `badge-pace-mo.png` /
> `badge-bayan.png` (transparent pills) · `stamp-totoo.png` / `stamp-mito.png` /
> `stamp-depende.png` (transparent, rotated) · `reply-grayzone.png` /
> `reply-zone2.png` / `reply-draw.png` / `reply-saludo.png` (1080² comment
> stickers). The logo is also editable in Canva: https://www.canva.com/d/ofVtALZp82Fl8G5

Style tokens for ALL assets (use in every image prompt):
**dark navy background (#0A1628) · neon-teal line art (#2DD4BF) · single warm-orange accent (#F97316) · bold condensed all-caps type · flat vector, premium/scientific · high contrast · readable at 100×100px**

## A1 — Corner Watermark (every second of every video)
- **What:** logo mark only (watch + pace line), no text, transparent background PNG
- **Placement:** top-right, 8% of frame width, 60% opacity, entire video
- **Prompt:** "Minimalist icon: glowing smartwatch on a wrist as clean neon-teal line art, a heartbeat/pace line running through the watch face with one warm-orange accent dot, flat vector, transparent background, no text, readable at tiny sizes"

## A2 — End Card (final 1.5–2s of every video)
- **What:** 1080×1920 full-screen: logo centered, "TAKBO LAB" large, "New experiment weekly" below, handle @takbolab
- **Prompt:** "Vertical 9:16 social media end card, dark navy background with subtle film grain, centered neon-teal smartwatch line-art logo with orange accent dot, huge bold condensed all-caps white text 'TAKBO LAB', smaller teal text 'NEW EXPERIMENT WEEKLY' and '@takbolab', minimalist, premium, cinematic"

## A3 — Series Badges (top-left, first 5s + at the reveal)
- **What:** pill-shaped lockups, transparent PNG: `SAME LEGS, DIFFERENT RULES #_` · `I TESTED YOUR PACE` · `THE NATION EXPERIMENT`
- **Prompt:** "Pill-shaped badge sticker, dark navy fill with neon-teal border, bold condensed white all-caps text '[SERIES NAME]', small orange dot accent, flat vector, transparent background"

## A4 — Verdict Stamps (slam on at the reveal moment, with shake + deep hit SFX)
- **What:** rubber-stamp style, transparent PNG, 3 versions: `✅ TAKBO LAB: TRUE` (teal) · `❌ TAKBO LAB: MYTH` (red-orange) · `⚠️ DEPENDS` (orange)
- **Prompt:** "Rubber stamp style sticker, slightly rotated, bold condensed all-caps text '[VERDICT]' inside a rough rectangular stamp border, [COLOR] ink on transparent background, distressed texture, flat vector"

## A5 — Comment-Reply Stickers (for FB comment replies — an image reply = more viral)
- **What:** square stickers to reply with in comments: `GRAY ZONE. SLOW DOWN 😅` · `ZONE 2 ✅` · `NOTED. YOU'RE IN THE DRAW 🎟️` · `RESPECT. 🥵🔥`
- **Prompt:** "Square social media reply sticker, dark navy background, huge bold condensed white all-caps English text '[TEXT]', neon-teal underline swoosh, one orange accent, flat vector, punchy meme-adjacent but premium"

## A6 — FB/Reels Cover Template (thumbnail per episode)
- **What:** 1080×1920, top: hook text in massive type; middle: episode footage frame; bottom: logo strip
- **Rule:** the cover text is the episode's Section 4 Hook Text — nothing new

---

## PLACEMENT RULES (already wired into the Gemini editor prompts)
1. A1 watermark: always on, top-right, 60% opacity
2. A3 series badge: 0–5s + at the reveal segment (if a series episode)
3. A4 verdict stamp: at the reveal beat (with the freeze/silence moment)
4. A2 end card: final 1.5–2s, always the same
5. All assets inside the middle 80% safe area
