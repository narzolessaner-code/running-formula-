#!/usr/bin/env python3
"""
THE RUNNING CONTENT MACHINE — offline content engine.

Encodes the 8 humor formulas + word banks from the master prompt and generates
full, copy-paste-ready Post Kits for a faceless (neck-down) running page in the
deadpan, pseudo-scientific "runner-brain" voice.

No internet, no API key. Just run it:

    python3 machine/generate.py               # 12 kits to stdout + output file
    python3 machine/generate.py -n 30         # 30 kits
    python3 machine/generate.py --formula fake_study
    python3 machine/generate.py --level beginner --seed 7

Output is also written to output/content-drop.md (a week+ of posts you can film).
"""
from __future__ import annotations

import argparse
import datetime as _dt
import os
import random
import textwrap

# ─────────────────────────────────────────────────────────────────────────────
# AUDIENCE LEVELS — every runner from never-started to GOAT. The joke must land
# for all of them; "hits hardest" just tells you who you're pulling most.
# ─────────────────────────────────────────────────────────────────────────────
LEVELS = {
    "never_started": "Never-started",
    "beginner": "Beginner",
    "intermediate": "Intermediate",
    "advanced": "Advanced",
    "elite": "Elite",
    "goat": "GOAT / pro",
}

# ─────────────────────────────────────────────────────────────────────────────
# SHARED BANKS
# ─────────────────────────────────────────────────────────────────────────────

# The "bigger lie" — caption escalations that pair with any overlay.
ESCALATIONS = [
    "I'm basically running 120 miles per week.",
    "Peaking for Boston.",
    "Manifesting the sub-3 in a body built for the couch.",
    "Strava can't measure what the heart already knows.",
    "This is elite-level training if you don't think about it.",
    "The mitochondria understand even if you don't.",
    "Adjusted for conditions, that was a marathon.",
    "Doing the hard thing (the hard thing was nothing).",
    "Kipchoge could never (he could, easily, but let me have this).",
    "Currently in a training block nobody can see.",
    "World-class engine, dial-up connection.",
    "My VO2 max is potential energy right now.",
    "Untrained talent is the most dangerous kind.",
    "Sub-elite mind, pre-beginner legs, unbothered.",
]

FILM_NOTES = [
    "Slow-mo of shoes striking wet pavement, then the feet stop dead.",
    "Treadmill belt + legs; the watch beeps and you glance down (no face).",
    "Sweaty forearm + GPS watch close-up; thumb hits stop.",
    "Chugging a water bottle, framed from the collarbone down.",
    "Lacing up in the dark at 5am, lit by a phone flashlight.",
    "Hands on knees, bent over, heavy-breathing shot.",
    "Feet crossing a finish-line mat in slow-mo.",
    "POV legs on a trail, dust kicking up behind you.",
    "Legs pacing a kitchen while 'resting'; coffee cup in frame.",
    "Static shot of running shoes by the door you didn't use today.",
]

AUDIO_NOTES = [
    "Slowed sad-boy remix (~0:40), big drop around 0:15 — hit it on the punchline.",
    "Trending phonk with a hard beat switch exactly when the text lands.",
    "Soft 'deep thoughts' piano — contrast the sincerity with the dumb claim.",
    "Whatever audio is trending this week; cut the beat to when the overlay hits.",
    "Deadpan silence + one keyboard-clack SFX as the caption snaps in.",
    "Uplifting cinematic build that absolutely does not match the effort shown.",
]

HASHTAGS_BROAD = ["#running", "#runtok", "#runningmotivation", "#marathon",
                  "#halfmarathon", "#cardio", "#fitness", "#runners"]
HASHTAGS_NICHE = ["#zone2", "#vo2max", "#runnersofinstagram", "#couchto5k",
                  "#runnerlife", "#marathontraining", "#trailrunning",
                  "#runningcommunity", "#5k", "#negativesplit"]
HASHTAGS_MICRO = ["#runnerbrain", "#copescience", "#delulurunner",
                  "#runningmemes", "#5amclub"]

PINNED = [
    "Be honest — which level are you 😭",
    "Tag the runner who NEEDS to hear this science.",
    "Sources? My heart. Next question.",
    "Reply with your most delusional running cope, I'll wait.",
    "Which one of you is the '5am is discipline' person.",
    "Rate the science /10 in the comments.",
]

# ─────────────────────────────────────────────────────────────────────────────
# FORMULA BANKS (each formula assembles a coherent overlay from matched slots)
# ─────────────────────────────────────────────────────────────────────────────

COPE_MUNDANE = [
    "Standing up too fast and seeing stars",
    "Drinking a triple espresso on an empty stomach",
    "Carrying every grocery bag in one trip",
    "Sprinting for a closing elevator",
    "Shivering at a cold bus stop",
    "Pacing the kitchen during an intense phone call",
    "Taking the stairs because the lift was full",
    "An hour of doomscrolling with my heart rate somehow up",
    "Chugging a pre-workout and then doing absolutely nothing",
    "A very heated argument (in my head, in the shower)",
    "Walking to the fridge at 2am with real purpose",
    "Carrying a full laundry basket up three floors",
    "Rage-cleaning the entire apartment before guests",
    "Holding a plank for the exact length of one TikTok",
]
COPE_ELITE = [
    "zone 2 cardio", "altitude training", "heat adaptation",
    "a lactate threshold session", "a VO2 max workout", "active recovery",
    "plyometrics", "a tempo run", "cross-training", "base-building",
    "a fasted cardio block", "interval work",
]
COPE_CLOSE = [
    "Same physiological adaptation. Look it up.",
    "The mitochondria don't know the difference.",
    "Biohacking, technically.",
    "Peer-reviewed by my nervous system.",
    "Free gains. Scientifically.",
    "My smartwatch logged it as exercise, so it's official.",
]

FAKE_FINDINGS = [
    "runners who complain about their knees live seven years longer — it's the complaining",
    "90% of your fitness is stored in the shoes you haven't bought yet",
    "saying you woke up at 5am gives the same status as the run, at 0% the effort",
    "the runner's high is just your body thanking you for finally shutting up and moving",
    "one screenshot of your splits delivers 30% of the training effect",
    "describing your long run in full detail burns an extra 200 calories socially",
    "carbon plates improve your mood more than your time, and that still counts",
    "the fastest route to a PR is buying a slightly nicer water bottle",
    "people who say 'I'm not a real runner' run more than people who say they are",
    "negative-splitting the walk to the fridge builds elite mental toughness",
]
FAKE_ATTRIB = [
    "Peer-reviewed by me, on the couch, this morning.",
    "The data is in my heart, not a journal.",
    "Sources: it felt true.",
    "n = 1, but a very confident 1.",
    "Science is just organized coping and I respect it.",
]

MATH_CONDITION = [
    "It was hot", "There were hills", "I forgot to fuel",
    "The wind was in my face the whole time (both ways)",
    "I went in already tired", "The humidity was insane",
    "I ran on dead legs", "It was before coffee",
]
MATH_INFLATION = [
    "so today's 5k counts as a 10k — heat is basically hills for your blood",
    "so every kilometer counts double; that's just physics",
    "so that easy run was secretly a tempo — my watch simply can't measure vibes",
    "so I'm rounding up to a half marathon, adjusted for conditions",
    "so pace is irrelevant, only the suffering counts, and I suffered elite-ly",
    "so technically I did altitude training at sea level",
]

NOBODY_BEHAVIOR = [
    "Me, describing my long run mile by mile to a person eating lunch",
    "My watch after I stop at one red light: 'Resuming activity?'",
    "Me at 4:57am fully dressed, staring at the rain, deciding if I'm a real one",
    "Me explaining negative splits to someone who asked how my weekend was",
    "Me pretending the 5am alarm is discipline and not just anxiety with shoes",
    "Me telling everyone it was 'just an easy run' after nearly dying",
    "My Strava caption doing more mileage than my actual legs",
    "Me icing a knee that has never once been diagnosed with anything",
]

GEAR_ITEM = [
    "New carbon plates", "This overpriced GPS watch", "A fresh pair of running socks",
    "The compression sleeves I do not need", "A gel I bought purely for the aesthetic",
    "Sunglasses I only wear to run", "The new colorway", "A heart-rate strap I trust more than doctors",
]
# Noun-phrase effects joined with a colon, so singular AND plural gear both read clean.
GEAR_EFFECT = [
    "+4% VO2 max on paper. The confidence handles the other +11%",
    "+2% to my pace, +40% to my personality",
    "no faster, but now I'm a problem, and that's enough",
    "mostly they just make me refuse to walk. That's the technology",
    "one (1) PR I'll credit entirely to grit in the caption",
]

RECOVERY_ACT = [
    "Lying face-down on the kitchen floor after a run",
    "A second bowl of pasta 'for the glycogen'",
    "Ice cream, as cold carb replenishment",
    "A strategic 2pm nap",
    "Skipping the cooldown to lie down immediately",
    "Not moving a single muscle for four hours",
]
RECOVERY_SCIENCE = [
    "is active recovery — the tile is grounding me. Biohacking.",
    "is where the actual gains are made. Silently. Horizontally.",
    "is protein-adjacent nutrition timing. I did the math.",
    "is when the magic happens; I'm 90% through the workout.",
    "is elite recovery protocol. Kipchoge also lies down (probably).",
]

SKIP_EXCUSE = [
    "Overtraining kills more gains than laziness ever will — I'm protecting my VO2 max",
    "Rest days are when you get faster, so by that logic I'm about to be extremely fast",
    "You can't PR on tired legs, and mentally my legs are exhausted",
    "The plan said 'listen to your body' and my body said absolutely not",
    "Adaptation happens at rest, and I am adapting harder than anyone alive right now",
]


def _pick(rng, seq):
    return rng.choice(seq)


# Each builder returns (overlay_text, formula_label, typical_levels)
def f_cope(rng):
    line = f"{_pick(rng, COPE_MUNDANE)} is basically {_pick(rng, COPE_ELITE)}. {_pick(rng, COPE_CLOSE)}"
    if rng.random() < 0.45:
        line = "Scientifically speaking, " + line[0].lower() + line[1:]
    return line, "Cope Equivalence", ["beginner", "intermediate", "advanced"]


def f_fake_study(rng):
    return (f"New study: {_pick(rng, FAKE_FINDINGS)}. {_pick(rng, FAKE_ATTRIB)}",
            "Fake Study", list(LEVELS))


def f_math(rng):
    return (f"{_pick(rng, MATH_CONDITION)}, {_pick(rng, MATH_INFLATION)}.",
            "Delulu Runner Math", ["beginner", "intermediate", "advanced"])


def f_nobody(rng):
    return (f"Nobody:\n{_pick(rng, NOBODY_BEHAVIOR)}:",
            "Nobody: / Runners:", ["intermediate", "advanced", "elite"])


def f_gear(rng):
    return (f"{_pick(rng, GEAR_ITEM)}: {_pick(rng, GEAR_EFFECT)}.",
            "Gear Placebo Science", ["intermediate", "advanced", "elite", "goat"])


def f_recovery(rng):
    return (f"{_pick(rng, RECOVERY_ACT)} {_pick(rng, RECOVERY_SCIENCE)}",
            "Recovery Cope", ["beginner", "intermediate", "advanced", "elite"])


def f_skip(rng):
    return (f"Skipping today is the smart move. {_pick(rng, SKIP_EXCUSE)}.",
            "Rationalized Skip", ["never_started", "beginner", "intermediate"])


FORMULAS = {
    "cope": f_cope,
    "fake_study": f_fake_study,
    "math": f_math,
    "nobody": f_nobody,
    "gear": f_gear,
    "recovery": f_recovery,
    "skip": f_skip,
}
# Never-started gets a couple of dedicated soft premises so they feel seen.
NEVER_STARTED_OVERLAYS = [
    ("Watching a marathon on YouTube counts as visualization training. Elite athletes do this. I'm basically tapering.",
     "Cope Equivalence", ["never_started"]),
    ("Signing up for the 5k already burned 400 calories emotionally. The sign-up page is the hardest mile.",
     "Delusional Flex", ["never_started"]),
    ("Getting winded on the stairs is just my VO2 max being humble. The potential is right there.",
     "Cope Equivalence", ["never_started"]),
]


def _hashtags(rng, brand):
    tags = (rng.sample(HASHTAGS_BROAD, 3)
            + rng.sample(HASHTAGS_NICHE, 3)
            + rng.sample(HASHTAGS_MICRO, 1))
    if brand:
        tags.append("#" + brand.lstrip("#@").lower())
    return " ".join(tags)


def make_kit(rng, formula_key=None, level_key=None, brand=None):
    """Assemble one full Post Kit as a dict."""
    if level_key == "never_started" and rng.random() < 0.7:
        overlay, formula_label, levels = _pick(rng, NEVER_STARTED_OVERLAYS)
    else:
        key = formula_key or _pick(rng, list(FORMULAS))
        overlay, formula_label, levels = FORMULAS[key](rng)

    hits = level_key if level_key in LEVELS else _pick(rng, levels)
    caption = _pick(rng, ESCALATIONS)

    why = {
        "Cope Equivalence": "Real jargon + an absurd equivalence, said dead serious — the in-group password plus the cope.",
        "Fake Study": "Invents 'science' that flatters the runner; the fake citation IS the joke.",
        "Delulu Runner Math": "Effort-inflation logic everyone secretly uses; you just said the quiet part out loud.",
        "Nobody: / Runners:": "Names a behavior every runner recognizes in themselves — instant self-tag + share.",
        "Gear Placebo Science": "Turns gear guilt into fake performance math; light, universal, very shareable.",
        "Recovery Cope": "Dresses up rest/food as elite protocol — permission to relax, delivered as science.",
        "Rationalized Skip": "The science-y excuse not to run; the most relatable delusion there is.",
        "Delusional Flex": "Tiny effort, enormous claim — the gap is the whole joke.",
    }.get(formula_label, "Deadpan pseudo-science: small lie on screen, bigger lie in the caption.")

    return {
        "formula": formula_label,
        "hits": LEVELS[hits],
        "overlay": overlay,
        "overlay_alt": _second_overlay(rng, formula_key, level_key),
        "caption": caption,
        "caption_alt": _pick(rng, [e for e in ESCALATIONS if e != caption]),
        "vo": _voiceover(rng, overlay),
        "film": _pick(rng, FILM_NOTES),
        "audio": _pick(rng, AUDIO_NOTES),
        "hashtags": _hashtags(rng, brand),
        "hook": _search_hook(overlay),
        "pinned": _pick(rng, PINNED),
        "why": why,
    }


def _second_overlay(rng, formula_key, level_key):
    key = formula_key or _pick(rng, list(FORMULAS))
    return FORMULAS[key](rng)[0]


def _voiceover(rng, overlay):
    if rng.random() < 0.4:
        return "none — let the on-screen text carry it in silence."
    first = overlay.split("\n")[0].split(". ")[0].strip().rstrip(".:")
    return f'Flat, dead-serious delivery: "{first}." No smile. That\'s the joke.'


def _search_hook(overlay):
    words = overlay.replace("\n", " ").split()
    return " ".join(words[:6]).rstrip(".,:") + " …"


# ─────────────────────────────────────────────────────────────────────────────
# RENDERING
# ─────────────────────────────────────────────────────────────────────────────
def render_md(kit, index):
    ov = kit["overlay"].replace("\n", "\n            ")
    ova = kit["overlay_alt"].replace("\n", " / ")
    return textwrap.dedent(f"""\
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        POST KIT #{index:02d}   ·   {kit['formula']}   ·   hits: {kit['hits']}
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

        ① ON-SCREEN TEXT (the big overlay — the star):
            {ov}
           alt: {ova}

        ② CAPTION (the bigger lie):
            → {kit['caption']}
           alt: {kit['caption_alt']}

        ③ VOICEOVER: {kit['vo']}

        ④ FILM THIS (neck-down): {kit['film']}
           Place the overlay in the top third; hold it 1.5s before movement.

        ⑤ AUDIO: {kit['audio']}

        ⑥ SEO / DISCOVERY:
           Search hook (first caption words): {kit['hook']}
           Hashtags: {kit['hashtags']}

        ⑦ ENGAGEMENT — pinned comment: {kit['pinned']}

        ⑧ WHY IT WORKS: {kit['why']}
        """)


def render_plain(kit):
    """Tight version for quick copy (used by stdout preview)."""
    ov = kit["overlay"].replace("\n", " ")
    return f"[{kit['formula']} · {kit['hits']}]\n  ON-SCREEN: {ov}\n  CAPTION:   {kit['caption']}"


# ─────────────────────────────────────────────────────────────────────────────
# MAIN
# ─────────────────────────────────────────────────────────────────────────────
def main():
    p = argparse.ArgumentParser(description="Generate viral running Post Kits.")
    p.add_argument("-n", "--count", type=int, default=12, help="how many kits")
    p.add_argument("--formula", choices=list(FORMULAS), help="lock a formula")
    p.add_argument("--level", choices=list(LEVELS), help="target one level")
    p.add_argument("--brand", default="", help="brand handle for a branded hashtag")
    p.add_argument("--seed", type=int, default=None, help="reproducible output")
    p.add_argument("--out", default="output/content-drop.md", help="output file")
    p.add_argument("--no-file", action="store_true", help="stdout only")
    args = p.parse_args()

    rng = random.Random(args.seed)
    kits = [make_kit(rng, args.formula, args.level, args.brand)
            for _ in range(args.count)]

    # Console preview
    print(f"\n🏃  THE RUNNING CONTENT MACHINE — generated {len(kits)} post kits\n")
    for k in kits:
        print(render_plain(k))
        print()

    if not args.no_file:
        os.makedirs(os.path.dirname(args.out) or ".", exist_ok=True)
        stamp = _dt.date.today().isoformat()
        header = textwrap.dedent(f"""\
            # Content Drop — {stamp}

            {len(kits)} ready-to-film Post Kits, generated by machine/generate.py in
            the deadpan pseudo-scientific "runner-brain" voice. Film neck-down,
            drop the overlay text on top, post the caption. Punch at our own
            delusion — never at a person; never joke away real safety.

            Regenerate anytime:  `python3 machine/generate.py -n {len(kits)}`

            """)
        body = "\n".join(render_md(k, i + 1) for i, k in enumerate(kits))
        with open(args.out, "w", encoding="utf-8") as fh:
            fh.write(header + body)
        print(f"✅  Wrote {len(kits)} kits → {args.out}\n")


if __name__ == "__main__":
    main()
