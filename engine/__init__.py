"""Viral Content Engine — a reusable blueprint generator for a faceless
running / biohacking lifestyle brand, powered by the Claude API.

Public API:
    build_system_prompt() -> str
    generate(topic, *, model=..., effort=..., max_tokens=...) -> Blueprint
    save_blueprint(blueprint) -> pathlib.Path
"""

from .engine import (
    Blueprint,
    DEFAULT_MODEL,
    build_system_prompt,
    generate,
    next_index,
    save_blueprint,
)

__all__ = [
    "Blueprint",
    "DEFAULT_MODEL",
    "build_system_prompt",
    "generate",
    "next_index",
    "save_blueprint",
]
