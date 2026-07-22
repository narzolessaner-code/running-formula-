"""CLI for the Viral Content Engine.

Examples:
    python -m engine                 # generate the next post (engine picks the angle)
    python -m engine "cold plunge"   # generate a blueprint for a topic
    python -m engine NEXT            # same as no argument
    python -m engine "zone 2" --no-save
    python -m engine "5am club" --model claude-opus-4-8 --effort xhigh
    python -m engine "espresso" --dry-run   # print the assembled prompt, no API call
"""

from __future__ import annotations

import argparse
import sys

from . import engine as _engine


def _build_parser() -> argparse.ArgumentParser:
    p = argparse.ArgumentParser(
        prog="engine",
        description="Generate a publication-ready Viral Content Blueprint.",
    )
    p.add_argument(
        "topic",
        nargs="*",
        help="Topic, trend, or keyword. Omit (or use NEXT) to let the engine choose.",
    )
    p.add_argument("--model", default=_engine.DEFAULT_MODEL, help="Claude model ID.")
    p.add_argument(
        "--effort",
        default=_engine.DEFAULT_EFFORT,
        choices=["low", "medium", "high", "xhigh", "max"],
        help="Reasoning effort (default: %(default)s).",
    )
    p.add_argument(
        "--max-tokens", type=int, default=_engine.DEFAULT_MAX_TOKENS,
        help="Max output tokens (default: %(default)s).",
    )
    p.add_argument("--no-save", action="store_true", help="Print only; do not write a file.")
    p.add_argument(
        "--dry-run", action="store_true",
        help="Print the assembled system + user prompt and exit (no API call).",
    )
    return p


def main(argv: list[str] | None = None) -> int:
    args = _build_parser().parse_args(argv)
    topic = " ".join(args.topic).strip() or "NEXT"

    if args.dry_run:
        print("=" * 70)
        print("SYSTEM PROMPT")
        print("=" * 70)
        print(_engine.build_system_prompt())
        print("=" * 70)
        print("USER MESSAGE")
        print("=" * 70)
        print(_engine.build_user_message(topic))
        return 0

    try:
        bp = _engine.generate(
            topic, model=args.model, effort=args.effort, max_tokens=args.max_tokens
        )
    except ModuleNotFoundError:
        print(
            "The 'anthropic' package is not installed.\n"
            "  pip install -r requirements.txt",
            file=sys.stderr,
        )
        return 1
    except Exception as exc:  # noqa: BLE001 — surface any API/auth error cleanly
        name = type(exc).__name__
        print(f"Generation failed ({name}): {exc}", file=sys.stderr)
        if "auth" in name.lower() or "api_key" in str(exc).lower():
            print(
                "\nSet your key first:  export ANTHROPIC_API_KEY=sk-ant-...\n"
                "or copy .env.example to .env and fill it in.",
                file=sys.stderr,
            )
        return 1

    print(bp.text)

    if not args.no_save:
        path = _engine.save_blueprint(bp)
        print(f"\n→ saved: {path.relative_to(_engine.ROOT)}", file=sys.stderr)
    if bp.usage:
        print(
            f"→ tokens: in={bp.usage.get('input_tokens')} "
            f"out={bp.usage.get('output_tokens')} · model={bp.model}",
            file=sys.stderr,
        )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
