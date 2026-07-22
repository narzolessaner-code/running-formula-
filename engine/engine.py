"""Core of the Viral Content Engine.

Loads the brand bible + system prompt, calls the Claude API to produce a
publication-ready Viral Content Blueprint, and saves it to ``blueprints/``.
"""

from __future__ import annotations

import dataclasses
import datetime as _dt
import os
import re
from pathlib import Path

# --------------------------------------------------------------------------- #
# Paths & configuration
# --------------------------------------------------------------------------- #

ROOT = Path(__file__).resolve().parent.parent
BRAND_DIR = ROOT / "brand"
BLUEPRINTS_DIR = ROOT / "blueprints"

SYSTEM_PROMPT_FILE = BRAND_DIR / "system_prompt.md"
BRAND_BIBLE_FILE = BRAND_DIR / "brand_bible.md"

# claude-opus-4-8 is the current, most capable Opus-tier model. Override with
# the VCE_MODEL env var or the --model CLI flag.
DEFAULT_MODEL = os.environ.get("VCE_MODEL", "claude-opus-4-8")
DEFAULT_EFFORT = os.environ.get("VCE_EFFORT", "high")  # low | medium | high | xhigh | max
DEFAULT_MAX_TOKENS = int(os.environ.get("VCE_MAX_TOKENS", "8192"))


def _load_dotenv() -> None:
    """Load a local .env if python-dotenv is installed. Optional, best-effort."""
    try:
        from dotenv import load_dotenv  # type: ignore
    except Exception:
        return
    load_dotenv(ROOT / ".env")


_load_dotenv()


# --------------------------------------------------------------------------- #
# Prompt assembly
# --------------------------------------------------------------------------- #

def build_system_prompt() -> str:
    """Concatenate the persona instructions with the full brand bible.

    Order is stable (persona, then bible) so the prefix caches cleanly across
    many requests — see the Anthropic prompt-caching guidance.
    """
    system = SYSTEM_PROMPT_FILE.read_text(encoding="utf-8").strip()
    bible = BRAND_BIBLE_FILE.read_text(encoding="utf-8").strip()
    return f"{system}\n\n---\n\n# BRAND BIBLE\n\n{bible}\n"


def build_user_message(topic: str) -> str:
    """Turn a raw topic (or NEXT) into the user turn."""
    topic = (topic or "").strip()
    if not topic or topic.upper() == "NEXT":
        return (
            "NEXT — pick a fresh, on-brand, high-potential angle yourself and "
            "build one complete Viral Content Blueprint for it."
        )
    return (
        f"Build one complete Viral Content Blueprint for this topic / trend / "
        f"keyword:\n\n{topic}"
    )


# --------------------------------------------------------------------------- #
# Blueprint model & persistence
# --------------------------------------------------------------------------- #

@dataclasses.dataclass
class Blueprint:
    index: int
    topic: str
    text: str
    model: str
    created: str
    usage: dict | None = None

    @property
    def slug(self) -> str:
        return slugify(self.topic) or "next"

    @property
    def filename(self) -> str:
        return f"{self.index:03d}-{self.slug}.md"


def slugify(text: str) -> str:
    text = (text or "").strip().lower()
    text = re.sub(r"[^a-z0-9]+", "-", text)
    return text.strip("-")[:60]


def next_index(directory: Path = BLUEPRINTS_DIR) -> int:
    """Return the next NNN sequence number based on existing blueprint files."""
    directory.mkdir(parents=True, exist_ok=True)
    highest = 0
    for path in directory.glob("[0-9][0-9][0-9]-*.md"):
        try:
            highest = max(highest, int(path.name[:3]))
        except ValueError:
            continue
    return highest + 1


def save_blueprint(bp: Blueprint, directory: Path = BLUEPRINTS_DIR) -> Path:
    directory.mkdir(parents=True, exist_ok=True)
    path = directory / bp.filename
    header = (
        f"<!-- Post #{bp.index} · generated {bp.created} · model {bp.model} -->\n\n"
    )
    path.write_text(header + bp.text.strip() + "\n", encoding="utf-8")
    return path


# --------------------------------------------------------------------------- #
# Generation
# --------------------------------------------------------------------------- #

def _extract_text(response) -> str:
    return "".join(
        block.text for block in response.content if getattr(block, "type", None) == "text"
    ).strip()


def generate(
    topic: str = "NEXT",
    *,
    model: str = DEFAULT_MODEL,
    effort: str = DEFAULT_EFFORT,
    max_tokens: int = DEFAULT_MAX_TOKENS,
) -> Blueprint:
    """Call Claude and return a Blueprint. Raises on API/auth errors."""
    import anthropic  # imported lazily so --help / --dry-run work without the SDK

    client = anthropic.Anthropic()  # resolves ANTHROPIC_API_KEY / auth profile / base URL
    response = client.messages.create(
        model=model,
        max_tokens=max_tokens,
        system=build_system_prompt(),
        thinking={"type": "adaptive"},
        output_config={"effort": effort},
        messages=[{"role": "user", "content": build_user_message(topic)}],
    )

    usage = None
    if getattr(response, "usage", None) is not None:
        usage = {
            "input_tokens": getattr(response.usage, "input_tokens", None),
            "output_tokens": getattr(response.usage, "output_tokens", None),
        }

    return Blueprint(
        index=next_index(),
        topic=topic if topic and topic.upper() != "NEXT" else "NEXT",
        text=_extract_text(response),
        model=model,
        created=_dt.datetime.now().strftime("%Y-%m-%d %H:%M"),
        usage=usage,
    )
