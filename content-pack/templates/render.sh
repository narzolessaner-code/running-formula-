#!/usr/bin/env bash
# Renders every template in out/ to ../graphics/*.png at exact target size.
# Headless Chromium's viewport can be slightly shorter than --window-size,
# so we render with +160px of slack and crop to the exact canvas with PIL.
set -euo pipefail
cd "$(dirname "$0")"
CH="${CHROMIUM:-/opt/pw-browsers/chromium}"
G="../graphics"
mkdir -p "$G"
python3 build.py

render () { # file.html width height
  local f="$1" w="$2" h="$3" name
  name="$(basename "$f" .html)"
  "$CH" --headless=new --no-sandbox --disable-gpu --hide-scrollbars \
    --window-size="$w",$((h + 160)) \
    --screenshot="$G/$name.png" "file://$PWD/$f" 2>/dev/null
  python3 - "$G/$name.png" "$w" "$h" <<'PY'
import sys
from PIL import Image
path, w, h = sys.argv[1], int(sys.argv[2]), int(sys.argv[3])
Image.open(path).crop((0, 0, w, h)).save(path)
PY
  echo "rendered $name.png (${w}x${h})"
}

render out/profile.html 1080 1080
render out/cover.html 1640 856
for f in out/post*.html; do render "$f" 1080 1350; done
