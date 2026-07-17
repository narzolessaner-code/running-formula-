#!/usr/bin/env python3
"""Generates the Bantay Buwis PH graphic templates as standalone HTML files.

Render to PNG with headless Chromium, e.g.:
  chromium --headless=new --no-sandbox --hide-scrollbars \
    --window-size=1080,1350 --screenshot=out.png file:///path/to/post.html

All copy is opinion/commentary framing: no statistics, no named individuals,
no imitation of any news organization.
"""
import os

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "out")
os.makedirs(OUT, exist_ok=True)

NAVY = "#0A1A33"
NAVY2 = "#10264A"
BLUE = "#0038A8"
RED = "#CE1126"
YELLOW = "#FCD116"
CREAM = "#F5F0E6"

SUN = """<svg viewBox="0 0 100 100" style="width:{size}px;height:{size}px;display:block">
<g fill="{color}">
<circle cx="50" cy="50" r="17"/>
<g>
<polygon points="50,2 45.5,27 54.5,27" />
<polygon points="50,2 45.5,27 54.5,27" transform="rotate(45 50 50)"/>
<polygon points="50,2 45.5,27 54.5,27" transform="rotate(90 50 50)"/>
<polygon points="50,2 45.5,27 54.5,27" transform="rotate(135 50 50)"/>
<polygon points="50,2 45.5,27 54.5,27" transform="rotate(180 50 50)"/>
<polygon points="50,2 45.5,27 54.5,27" transform="rotate(225 50 50)"/>
<polygon points="50,2 45.5,27 54.5,27" transform="rotate(270 50 50)"/>
<polygon points="50,2 45.5,27 54.5,27" transform="rotate(315 50 50)"/>
</g></g></svg>"""


def sun(size, color=YELLOW):
    return SUN.format(size=size, color=color)


BASE_CSS = f"""
*{{margin:0;padding:0;box-sizing:border-box}}
html,body{{overflow:hidden}}
body{{background:{NAVY};font-family:'Liberation Sans',Arial,sans-serif;color:{CREAM};position:relative}}
.texture{{position:absolute;inset:0;background:
  repeating-linear-gradient(-45deg,rgba(255,255,255,.025) 0 2px,transparent 2px 16px)}}
.vign{{position:absolute;inset:0;background:radial-gradient(ellipse at 50% 38%,rgba(0,56,168,.25),transparent 65%)}}
.wrap{{position:relative;height:100%;display:flex;flex-direction:column;padding:70px 80px 0}}
.brandbar{{display:flex;align-items:center;gap:22px}}
.brandname{{font-weight:bold;font-size:38px;letter-spacing:4px}}
.brandname .ph{{background:{RED};color:#fff;padding:2px 12px;margin-left:8px;border-radius:6px;letter-spacing:2px}}
.oplabel{{margin-left:auto;border:2px solid rgba(245,240,230,.45);color:rgba(245,240,230,.75);
  font-size:22px;letter-spacing:5px;padding:8px 16px;font-weight:bold}}
.rule{{height:5px;background:linear-gradient(90deg,{RED} 0 33%,{YELLOW} 33% 66%,{BLUE} 66% 100%);margin-top:26px}}
.chip{{align-self:flex-start;background:{YELLOW};color:{NAVY};font-weight:bold;font-size:32px;
  letter-spacing:4px;padding:12px 26px;margin-top:70px}}
h1{{font-weight:bold;line-height:1.06;margin-top:38px;letter-spacing:-1px;text-transform:uppercase}}
h1 .y{{color:{YELLOW}}}
h1 .r{{color:#FF5A66}}
.sub{{font-size:40px;line-height:1.35;margin-top:42px;color:rgba(245,240,230,.92);max-width:880px}}
.sub b{{color:{YELLOW}}}
.bottom{{position:absolute;left:0;right:0;bottom:0;background:{RED};display:flex;align-items:center;
  justify-content:space-between;padding:30px 80px}}
.bottom .cta{{font-weight:bold;font-size:33px;letter-spacing:2px;color:#fff}}
.bottom .brand{{font-weight:bold;font-size:27px;letter-spacing:3px;color:rgba(255,255,255,.85)}}
.bigsun{{position:absolute;right:-160px;top:44%;opacity:.07}}
"""


def poster(fname, chip, headline_html, headline_size, sub_html):
    html = f"""<!doctype html><html><head><meta charset="utf-8"><style>
{BASE_CSS}
html,body{{width:1080px;height:1350px}}
h1{{font-size:{headline_size}px}}
</style></head><body>
<div class="texture"></div><div class="vign"></div>
<div class="bigsun">{sun(700, CREAM)}</div>
<div class="wrap">
  <div class="brandbar">{sun(56)}
    <div class="brandname">BANTAY BUWIS<span class="ph">PH</span></div>
    <div class="oplabel">OPINYON</div>
  </div>
  <div class="rule"></div>
  <div class="chip">{chip}</div>
  <h1>{headline_html}</h1>
  <div class="sub">{sub_html}</div>
</div>
<div class="bottom">
  <div class="cta">IBAHAGI KUNG SANG-AYON KA</div>
  <div class="brand">BANTAY BUWIS PH</div>
</div>
</body></html>"""
    with open(os.path.join(OUT, fname), "w") as f:
        f.write(html)


posts = [
    dict(
        fname="post1-tax-vs-realidad.html",
        chip="TAX VS. REALIDAD",
        headline='SAAN <span class="y">NAPUPUNTA</span> ANG BUWIS MO?',
        size=118,
        sub='May kaltas ang sweldo mo. May VAT ang bawat bili mo.<br>'
            'Pero pagkatapos ng lahat ng hulog na iyan &mdash; '
            '<b>baha pa rin, pila pa rin, siksikan pa rin.</b>',
    ),
    dict(
        fname="post2-doble-kara.html",
        chip="DOBLE-KARA NG HUSTISYA",
        headline='MABILIS ANG HUSTISYA SA MALIIT. <span class="y">BAKIT ANG BAGAL SA MALAKI?</span>',
        size=96,
        sub='Iisa lang dapat ang timbangan ng batas &mdash; '
            '<b>mahirap man o makapangyarihan.</b>',
    ),
    dict(
        fname="post3-komyuter.html",
        chip="LABAN NG KOMYUTER",
        headline='ILANG ORAS NG <span class="y">BUHAY MO</span> ANG KINUKUHA NG TRAPIK ARAW-ARAW?',
        size=92,
        sub='Oras na dapat para sa pamilya mo, sa pahinga mo, sa pangarap mo &mdash; '
            '<b>naiiwan sa kalsada.</b>',
    ),
    dict(
        fname="post4-edukasyon.html",
        chip="EDUKASYON MUNA",
        headline='SIKSIKAN SA CLASSROOM ANG MGA BATA. <span class="y">ITO BA ANG "DE-KALIDAD NA EDUKASYON"?</span>',
        size=88,
        sub='Ang kinabukasan ng bansa, <b>hindi dapat pinagsisiksikan.</b>',
    ),
    dict(
        fname="post5-baha.html",
        chip="ULAN NA NAMAN, BAHA NA NAMAN",
        headline='ISANG ULAN LANG, LUBOG NA AGAD. <span class="y">HANGGANG KAILAN?</span>',
        size=104,
        sub='Taon-taon may pangako ng solusyon.<br>'
            '<b>Taon-taon pa ring lumulubog ang mamamayan.</b>',
    ),
]

for p in posts:
    poster(p["fname"], p["chip"], p["headline"], p["size"], p["sub"])


# ---- Profile photo (1080x1080) ----
profile = f"""<!doctype html><html><head><meta charset="utf-8"><style>
{BASE_CSS}
html,body{{width:1080px;height:1080px}}
.pwrap{{position:relative;height:100%;display:flex;flex-direction:column;align-items:center;
  justify-content:center;text-align:center;gap:30px;border:26px solid {YELLOW}}}
.pname{{font-weight:bold;font-size:120px;letter-spacing:6px;line-height:1.02}}
.pname .ph{{background:{RED};color:#fff;padding:4px 26px;border-radius:12px}}
.ptag{{font-weight:bold;font-size:40px;letter-spacing:10px;color:{YELLOW};margin-top:6px}}
.pbar{{height:8px;width:420px;background:linear-gradient(90deg,{RED} 0 33%,{YELLOW} 33% 66%,{BLUE} 66% 100%)}}
</style></head><body>
<div class="texture"></div><div class="vign"></div>
<div class="pwrap">
  {sun(300)}
  <div class="pname">BANTAY<br>BUWIS <span class="ph">PH</span></div>
  <div class="pbar"></div>
  <div class="ptag">BOSES NG TAXPAYER</div>
</div>
</body></html>"""
with open(os.path.join(OUT, "profile.html"), "w") as f:
    f.write(profile)


# ---- Cover photo (1640x856) ----
cover = f"""<!doctype html><html><head><meta charset="utf-8"><style>
{BASE_CSS}
html,body{{width:1640px;height:856px}}
.cwrap{{position:relative;height:100%;display:flex;flex-direction:column;justify-content:center;
  padding:0 110px;gap:34px}}
.cbrand{{display:flex;align-items:center;gap:20px;font-weight:bold;font-size:34px;letter-spacing:5px}}
.cbrand .ph{{background:{RED};color:#fff;padding:2px 12px;border-radius:6px}}
.ch1{{font-weight:bold;font-size:96px;line-height:1.05;text-transform:uppercase;max-width:1150px}}
.ch1 .y{{color:{YELLOW}}}
.csub{{font-size:36px;line-height:1.4;color:rgba(245,240,230,.9);max-width:1000px}}
.cbar{{height:7px;width:520px;background:linear-gradient(90deg,{RED} 0 33%,{YELLOW} 33% 66%,{BLUE} 66% 100%)}}
.csun{{position:absolute;right:-140px;top:-160px;opacity:.1}}
</style></head><body>
<div class="texture"></div><div class="vign"></div>
<div class="csun">{sun(900, CREAM)}</div>
<div class="cwrap">
  <div class="cbrand">{sun(50)} BANTAY BUWIS <span class="ph">PH</span></div>
  <div class="ch1">SAAN NAPUPUNTA ANG <span class="y">BUWIS NATIN?</span></div>
  <div class="cbar"></div>
  <div class="csub">Opinyon at komentaryo para sa ordinaryong Pilipino.
  Sama-sama nating bantayan ang kaban ng bayan.</div>
</div>
</body></html>"""
with open(os.path.join(OUT, "cover.html"), "w") as f:
    f.write(cover)

print("Generated", len(os.listdir(OUT)), "templates in", OUT)
