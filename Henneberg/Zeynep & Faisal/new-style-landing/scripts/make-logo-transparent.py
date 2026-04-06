"""Weißen Hintergrund aus Logo-PNG entfernen → transparentes PNG in public/."""
from __future__ import annotations

from pathlib import Path

from PIL import Image


def main() -> None:
    root = Path(__file__).resolve().parents[1]
    src = root / "src" / "assets" / "logo-meisterbetrieb-source.png"
    out = root / "public" / "logo-zeynep-faisal.png"

    im = Image.open(src).convert("RGBA")
    px = im.load()
    w, h = im.size

    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            mn, mx = min(r, g, b), max(r, g, b)
            # Nur sehr helle Pixel (Hintergrund + Anti-Alias am Rand)
            if mn >= 252:
                px[x, y] = (r, g, b, 0)
            elif mn >= 238 and mx >= 250:
                fade = (mn - 220) / 35.0
                fade = max(0.0, min(1.0, fade))
                px[x, y] = (r, g, b, int(a * (1.0 - fade)))

    out.parent.mkdir(parents=True, exist_ok=True)
    im.save(out, "PNG")
    print(f"{w}x{h} -> {out}")


if __name__ == "__main__":
    main()
