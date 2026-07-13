# 🏃 VDOT Coach

A web-based running coach built on **Jack Daniels' VDOT methodology** (the engine
behind *Daniels' Running Formula*). A runner enters **one recent race result** and
the coach instantly returns:

- **VDOT** — a single number describing current running fitness
- **The 5 training paces** — Easy, Marathon, Threshold, Interval, Repetition
- **Race predictions** — equivalent times for the mile, 5K, 10K, half & marathon
- **A plain-language weekly plan** — how to actually spend the training week

No login, no build step, no dependencies. It's a single self-contained `index.html`.

## Run it

Just open `index.html` in any browser — that's it.

### Publish it free (GitHub Pages)

1. Push this repo to GitHub.
2. Settings → Pages → Source: **Deploy from a branch** → pick your branch, folder `/root`.
3. Your coach goes live at `https://<user>.github.io/<repo>/`.

## How it works

The math is the published VDOT model, not book text:

- **VO₂ cost of pace:** `VO₂ = -4.60 + 0.182258·v + 0.000104·v²` (v in m/min)
- **Sustainable %VO₂max for a race of `t` minutes:**
  `0.8 + 0.1894393·e^(-0.012778t) + 0.2989558·e^(-0.1932605t)`
- **VDOT** = VO₂ ÷ %VO₂max for the entered race
- Training paces are the velocities that hit each zone's intensity fraction of VDOT;
  predictions invert the model to find equivalent times at equal VDOT.

Validated against Daniels' reference tables (e.g. a 5K of 19:57 → VDOT 50.0, with
matching threshold/interval paces and race-equivalent predictions).

## Roadmap ideas

- Pull recent runs automatically (a Garmin connector is available in this workspace)
- Race-goal countdown plans (couch-to-5K → marathon build)
- Save history and track VDOT progress over time

## Disclaimer

Educational tool. Not affiliated with, nor endorsing, any book or publisher.
Train sensibly and consult a professional before starting hard training.
