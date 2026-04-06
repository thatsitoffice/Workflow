function getSlides(track: HTMLElement): HTMLElement[] {
  return [...track.querySelectorAll<HTMLElement>("[data-carousel-slide]")];
}

export function initReviewCarousels(): void {
  document.querySelectorAll<HTMLElement>("[data-carousel]").forEach((root) => {
    const track = root.querySelector<HTMLElement>("[data-carousel-track]");
    if (!track) return;

    const prev = root.querySelector<HTMLButtonElement>("[data-carousel-prev]");
    const next = root.querySelector<HTMLButtonElement>("[data-carousel-next]");
    const dotsRoot = root.querySelector<HTMLElement>("[data-carousel-dots]");
    const dots = dotsRoot
      ? [...dotsRoot.querySelectorAll<HTMLButtonElement>("[data-carousel-dot]")]
      : [];

    const getStep = (): number => {
      const slide = track.querySelector<HTMLElement>("[data-carousel-slide]");
      if (!slide) return track.clientWidth * 0.88;
      const gap = parseFloat(getComputedStyle(track).gap || "16") || 16;
      return slide.offsetWidth + gap;
    };

    if (prev) {
      prev.addEventListener("click", () => {
        track.scrollBy({ left: -getStep(), behavior: "smooth" });
      });
    }
    if (next) {
      next.addEventListener("click", () => {
        track.scrollBy({ left: getStep(), behavior: "smooth" });
      });
    }

    const updateDots = (): void => {
      const slides = getSlides(track);
      if (!slides.length || !dots.length) return;
      let best = 0;
      let bestDist = Infinity;
      const trackRect = track.getBoundingClientRect();
      const center = trackRect.left + trackRect.width / 2;
      slides.forEach((slide, i) => {
        const r = slide.getBoundingClientRect();
        const c = r.left + r.width / 2;
        const d = Math.abs(c - center);
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
      });
      dots.forEach((dot, i) => {
        const on = i === best;
        dot.classList.toggle("testimonials__dot--active", on);
        if (on) dot.setAttribute("aria-current", "true");
        else dot.removeAttribute("aria-current");
      });
    };

    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        const slides = getSlides(track);
        slides[i]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
      });
    });

    track.addEventListener(
      "scroll",
      () => {
        requestAnimationFrame(updateDots);
      },
      { passive: true },
    );

    const ro = new ResizeObserver(() => updateDots());
    ro.observe(track);
    updateDots();

    track.addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        track.scrollBy({ left: -getStep(), behavior: "smooth" });
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        track.scrollBy({ left: getStep(), behavior: "smooth" });
      }
    });
  });
}

initReviewCarousels();
