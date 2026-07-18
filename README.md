# 🏃 Saner Coach

An evidence-based running coach at **sanercoach.com**. A runner enters their
profile and one recent race, and the coach returns their VDOT, VO₂max estimate,
personalized heart-rate zones, race predictions, goal feasibility, and a full
periodized training program — plus a ₱709/month 1:1 coaching offer.

Single self-contained `index.html`. No build step, no dependencies.

## Going live on sanercoach.com

There are two parts: **hosting the file** (free) and **pointing your domain at it**.
You only need to buy the domain once (~US$10–15/yr).

### Step 1 — Buy the domain
Register **sanercoach.com** at any registrar (Namecheap, GoDaddy, Cloudflare, Porkbun…).

### Step 2 — Turn on free hosting (GitHub Pages)
1. In this repo: **Settings → Pages**
2. **Source:** Deploy from a branch → branch `main` (merge the PR first) → folder `/ (root)` → **Save**
3. GitHub reads the `CNAME` file in this repo and serves the site at `sanercoach.com`.

### Step 3 — Point the domain at GitHub
At your registrar's DNS settings, add:

| Type  | Host / Name | Value                |
|-------|-------------|----------------------|
| A     | @           | 185.199.108.153      |
| A     | @           | 185.199.109.153      |
| A     | @           | 185.199.110.153      |
| A     | @           | 185.199.111.153      |
| CNAME | www         | `<your-github-username>.github.io` |

Wait for DNS to propagate (minutes to a few hours), then in **Settings → Pages**
tick **Enforce HTTPS**. Done — `https://sanercoach.com` is live.

> Prefer drag-and-drop? Netlify or Vercel also host `index.html` free and let you
> add `sanercoach.com` as a custom domain in their dashboard.

## Taking payments
Open `index.html` and set `STRIPE_LINK` (top of the script) to a recurring
**Stripe Payment Link** (₱709/month). Blank = the Apply button emails the coach
the lead instead. No secret keys ever live in the page.

## The science
VDOT/VO₂ model (Daniels & Gilbert) · max-HR estimate (Tanaka 2001) · HR-reserve
zones (Karvonen) · race cross-check (Riegel 1981) · 80/20 intensity (Seiler) ·
load progression (acute:chronic workload) · taper (taper meta-analyses).

## Disclaimer
Educational tool. Not affiliated with, nor endorsing, any book or publisher.
Train sensibly and consult a professional before hard training.
