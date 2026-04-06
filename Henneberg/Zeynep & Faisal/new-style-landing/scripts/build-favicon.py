"""Friseur-Logo → favicon.png, favicon.ico, apple-touch-icon (Pillow)."""
from __future__ import annotations

from pathlib import Path

from PIL import Image


def white_to_transparent(im: Image.Image) -> Image.Image:
    im = im.convert("RGBA")
    px = im.load()
    w, h = im.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            mn, mx = min(r, g, b), max(r, g, b)
            if mn >= 252:
                px[x, y] = (r, g, b, 0)
            elif mn >= 238 and mx >= 250:
                fade = max(0.0, min(1.0, (mn - 220) / 35.0))
                px[x, y] = (r, g, b, int(a * (1.0 - fade)))
    return im


def fit_square_rgba(im: Image.Image, size: int) -> Image.Image:
    w, h = im.size
    scale = min(size / w, size / h)
    nw, nh = max(1, int(w * scale)), max(1, int(h * scale))
    resized = im.resize((nw, nh), Image.Resampling.LANCZOS)
    canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    canvas.paste(resized, ((size - nw) // 2, (size - nh) // 2), resized)
    return canvas


def fit_square_opaque(im: Image.Image, size: int, bg: tuple[int, int, int]) -> Image.Image:
    """Für Apple Touch: undurchsichtiger Hintergrund (Tab-Farbe)."""
    w, h = im.size
    scale = min(size / w, size / h)
    nw, nh = max(1, int(w * scale)), max(1, int(h * scale))
    resized = im.resize((nw, nh), Image.Resampling.LANCZOS)
    canvas = Image.new("RGBA", (size, size), bg + (255,))
    if resized.mode != "RGBA":
        resized = resized.convert("RGBA")
    x0, y0 = (size - nw) // 2, (size - nh) // 2
    canvas.paste(resized, (x0, y0), resized)
    return canvas.convert("RGB")


def main() -> None:
    root = Path(__file__).resolve().parents[1]
    src = root / "src" / "assets" / "friseur-logo-source.png"
    public = root / "public"

    im = white_to_transparent(Image.open(src))

    fit_square_rgba(im, 32).save(public / "favicon.png", "PNG")
    fit_square_rgba(im, 48).save(public / "favicon-48.png", "PNG")

    # theme-color / Seitenhintergrund
    cream = (244, 241, 235)
    fit_square_opaque(im, 180, cream).save(public / "apple-touch-icon.png", "PNG")

    i16 = fit_square_rgba(im, 16)
    i32 = fit_square_rgba(im, 32)
    i48 = fit_square_rgba(im, 48)
    ico_frames = [i16, i32, i48]
    ico_frames[0].save(
        public / "favicon.ico",
        format="ICO",
        sizes=[(f.width, f.height) for f in ico_frames],
        append_images=ico_frames[1:],
    )

    print("OK:", public / "favicon.png", "favicon.ico", "apple-touch-icon.png")


if __name__ == "__main__":
    main()
