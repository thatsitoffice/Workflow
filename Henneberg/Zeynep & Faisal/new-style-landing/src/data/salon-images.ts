/**
 * Echte Salon-Motive unter public/images/salon/ und Hero unter public/
 * (WhatsApp + Empfang — bei neuen Fotos Dateien ersetzen und Maße prüfen.)
 */
export const SALON_IMAGES = {
  /** Startseiten-Hero (bereits in public/) */
  hero: {
    src: "/hero-background.webp",
    w: 847,
    h: 1020,
  },
  feature: {
    src: "/images/salon/salon-feature.jpeg",
    w: 1107,
    h: 1600,
  },
  mood1: { src: "/images/salon/salon-mood-1.jpeg", w: 1600, h: 1200 },
  mood2: { src: "/images/salon/salon-mood-2.jpeg", w: 1200, h: 1600 },
  mood3: { src: "/images/salon/salon-mood-3.jpeg", w: 1200, h: 1600 },
  /** Preisseite Hero — Salon-Arbeitsplätze (Lamellenwand, Spiegel) */
  preiseHero: { src: "/images/salon/salon-preise-hero.jpeg", w: 2400, h: 1792 },
  /** Abschnitt „Termin“ — eigenes Motiv (nicht identisch mit Hero) */
  cta: { src: "/images/salon/salon-mood-2.jpeg", w: 1200, h: 1600 },
  /** Atmosphäre-Sektion: Empfang / Markenwand */
  atmosphereReception: { src: "/images/salon/atmosphere-reception.jpeg", w: 2400, h: 1600 },
  /** Atmosphäre-Sektion: Styling-Plätze, Lamellenwand */
  atmosphereStyling: { src: "/images/salon/arbeitsflaeche.jpeg", w: 1600, h: 1200 },
  /** Produkte-Sektion — Redken-Banner (volle Breite) */
  productsBanner: { src: "/images/salon/haarprodukte.png", w: 3000, h: 1688 },
} as const;
