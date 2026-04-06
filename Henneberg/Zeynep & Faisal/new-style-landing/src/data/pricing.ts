/**
 * Preisliste — orientiert an der öffentlichen Planity-Karte (Stand: Pflege hier bei Änderungen in Planity).
 * @see https://www.planity.com/de-DE/new-style-by-zeynep-faisal-meisterbetrieb-45891-gelsenkirchen
 */
export type PriceRow = {
  name: string;
  duration?: string;
  price: string;
  note?: string;
};

/** Gruppierung für den Katalog-Filter auf /preise/ */
export type PriceCatalogGroup = "damen" | "herren" | "extensions";

export type PriceCategory = {
  id: string;
  title: string;
  intro?: string;
  rows: PriceRow[];
  catalogGroup: PriceCatalogGroup;
};

export const PLANITY_PRICING_URL =
  "https://www.planity.com/de-DE/new-style-by-zeynep-faisal-meisterbetrieb-45891-gelsenkirchen";

/**
 * Vollständige Kategorien wie in Planity gruppiert.
 * Hinweis: In Planity gibt es unter „Hair Design & Styling | Damen“ weitere Positionen („weitere anzeigen“) —
 * hier die sichtbaren Kernleistungen; Rest in Planity buchen.
 */
export const PRICE_CATEGORIES: PriceCategory[] = [
  {
    id: "extensions",
    catalogGroup: "extensions",
    title: "Luxury Bonding Extensions | 100 % Echthaar",
    intro:
      "MyExtensions Keratin-Bondings — Beratung vorab empfohlen. Details und Mengen wie in Planity beschrieben.",
    rows: [
      {
        name: "Luxury Bonding Extensions (50 cm, je Strähne 1 g)",
        duration: "ca. 1 Std.",
        price: "ab 5,50 €",
      },
      {
        name: "Luxury Bonding Extensions (60 cm, je Strähne 1 g)",
        duration: "ca. 1 Std.",
        price: "ab 6 €",
      },
      {
        name: "Beratung & Farbauswahl Luxury Bonding Extensions",
        duration: "20 Min.",
        price: "kostenlos",
        note: "Vor jeder Verlängerung empfohlen",
      },
      {
        name: "Entfernung von Keratin Bondings (je Strähne)",
        duration: "ca. 1 Std.",
        price: "ab 1 €",
      },
    ],
  },
  {
    id: "damen-cut",
    catalogGroup: "damen",
    title: "Hair Design & Styling | Damen",
    intro: "Express- und Signature-Schnitte — optional mit Haarwäsche laut Planity.",
    rows: [
      { name: "Express Cut — Trockenschnitt kurz", duration: "45 Min.", price: "27 €" },
      { name: "Express Cut — Trockenschnitt mittel", duration: "60 Min.", price: "30 €" },
      { name: "Express Cut — Trockenschnitt lang", duration: "60 Min.", price: "ab 32 €" },
      { name: "Signature Haircut — Waschen, Schneiden & Föhnen kurz", duration: "60 Min.", price: "37 €" },
      { name: "Signature Haircut — Waschen, Schneiden & Föhnen mittel", duration: "60 Min.", price: "42 €" },
      {
        name: "Weitere Damen-Styling-Leistungen",
        price: "—",
        note: "Siehe vollständiges Angebot in Planity („weitere Dienstleistungen“)",
      },
    ],
  },
  {
    id: "damen-color",
    catalogGroup: "damen",
    title: "Color & Gloss | Damen",
    intro: "Farbework mit REDKEN Professional (u. a. Color Gels Oils, Shades EQ).",
    rows: [
      { name: "REDKEN Root Shadow — Ansatzabdeckung", duration: "60 Min.", price: "ab 40 €" },
      { name: "REDKEN Color Gels Oils — globale Komplettfärbung kurz", duration: "90 Min.", price: "ab 55 €" },
      { name: "REDKEN Color Gels Oils — globale Komplettfärbung mittel", duration: "90 Min.", price: "ab 70 €" },
      { name: "REDKEN Color Gels Oils — globale Komplettfärbung lang", duration: "120 Min.", price: "ab 95 €" },
      { name: "REDKEN Shades EQ Gloss — Signature Gloss", duration: "30 Min.", price: "ab 40 €" },
    ],
  },
  {
    id: "damen-blond",
    catalogGroup: "damen",
    title: "Blond Signature | Damen",
    intro: "Strähnen, Kammtechnik, Balayage — REDKEN Professional.",
    rows: [
      { name: "REDKEN Highlights Full Head — komplette Strähnentechnik", duration: "165 Min.", price: "ab 150 €" },
      { name: "REDKEN Highlights Full Head — komplette Strähnentechnik (lang)", duration: "180 Min.", price: "ab 180 €" },
      { name: "Natural Comb Highlights — Kammsträhnen", duration: "90 Min.", price: "ab 60 €" },
      { name: "Single Foil Highlight — gezielte Akzentsträhne", duration: "30 Min.", price: "15 €" },
      { name: "Balayage Signature — inkl. individueller Freihandtechnik", duration: "220 Min.", price: "ab 220 €" },
      {
        name: "Weitere Blond-/Strähnen-Leistungen",
        price: "—",
        note: "In Planity unter derselben Kategorie",
      },
    ],
  },
  {
    id: "damen-care",
    catalogGroup: "damen",
    title: "Luxury Care | Damen",
    rows: [
      { name: "REDKEN Acidic Bonding Conditioner", duration: "10 Min.", price: "9 €" },
      { name: "REDKEN Acidic Protein Amino Concentrate Treatment", duration: "20 Min.", price: "32 €" },
    ],
  },
  {
    id: "damen-beauty",
    catalogGroup: "damen",
    title: "Beauty Finish | Damen",
    rows: [
      { name: "Eyebrow Sculpting — Augenbrauen formen", duration: "15 Min.", price: "9 €" },
      { name: "Eyebrow Tinting — Augenbrauen färben", duration: "15 Min.", price: "10 €" },
      { name: "Eyelash Tinting — Wimpern färben", duration: "15 Min.", price: "10 €" },
    ],
  },
  {
    id: "herren-cut",
    catalogGroup: "herren",
    title: "Haar Design & Styling | Herren",
    rows: [
      { name: "Men's Signature Cut — Waschen, Schneiden & Styling", duration: "30 Min.", price: "22 €" },
      { name: "Men's Dry Cut — Trockenhaarschnitt", duration: "30 Min.", price: "17 €" },
      { name: "Precision Buzz Cut — 0 mm", duration: "30 Min.", price: "20 €" },
      { name: "Boy's Haircut — bis 6 Jahre", duration: "30 Min.", price: "15 €" },
      { name: "Scalp Massage with Tonic — Kopfhautmassage", duration: "10 Min.", price: "15 €" },
    ],
  },
  {
    id: "herren-color",
    catalogGroup: "herren",
    title: "Color & Shine | Herren",
    rows: [
      { name: "Men's Grey Coverage — natürliche Grauhaarkaschierung", duration: "25 Min.", price: "ab 35 €" },
      { name: "Men's Natural Highlights — dezente Kammsträhnen", duration: "25 Min.", price: "ab 35 €" },
    ],
  },
  {
    id: "herren-beard",
    catalogGroup: "herren",
    title: "Beard Signature | Herren",
    rows: [
      { name: "Beard Trim & Shave — klassische Nassrasur", duration: "10 Min.", price: "14 €" },
      { name: "Beard Machine Shave — Maschinenrasur", duration: "10 Min.", price: "9 €" },
      { name: "Beard Tinting — Bart färben", duration: "15 Min.", price: "17 €" },
    ],
  },
  {
    id: "herren-beauty",
    catalogGroup: "herren",
    title: "Beauty Finish | Herren",
    rows: [{ name: "Eyebrow Sculpting — Augenbrauen formen", duration: "10 Min.", price: "9 €" }],
  },
];

function isCatalogAggregateRow(r: PriceRow): boolean {
  return r.price === "—" && Boolean(r.note);
}

/** Erste n Leistungen einer Kategorie (ohne Planity-Sammelzeile) — für Startseiten-Kacheln. */
function sliceCategoryPreview(categoryId: string, maxRows: number): PriceRow[] {
  const cat = PRICE_CATEGORIES.find((c) => c.id === categoryId);
  if (!cat) return [];
  return cat.rows
    .filter((r) => !isCatalogAggregateRow(r))
    .slice(0, maxRows)
    .map((r) => ({ name: r.name, duration: r.duration, price: r.price }));
}

const TILE_PREVIEW_COUNT = 3;

/**
 * Startseite: drei Kacheln mit Sprungmarken auf /preise/
 * (`anchorId` entspricht `id` am jeweiligen `PriceCategoryCard`).
 * `previewRows` stammt aus `PRICE_CATEGORIES` (Einstiegskategorie je Kachel).
 */
export type PriceMainGroupTile = {
  anchorId: string;
  title: string;
  blurb: string;
  previewRows: PriceRow[];
  /** Query für den Katalog-Filter auf /preise/ (z. B. ?gruppe=herren) */
  preiseSearch?: string;
};

export const PRICE_MAIN_GROUP_TILES: PriceMainGroupTile[] = [
  {
    anchorId: "damen-cut",
    title: "Damen",
    blurb: "Schnitt, Color, Blond Signature, Pflege & Beauty — Einstieg bei Hair Design | Damen.",
    previewRows: sliceCategoryPreview("damen-cut", TILE_PREVIEW_COUNT),
    preiseSearch: "?gruppe=damen",
  },
  {
    anchorId: "herren-cut",
    title: "Herren",
    blurb: "Haarstyling, Color, Bart & Finish — Einstieg bei Haar Design | Herren.",
    previewRows: sliceCategoryPreview("herren-cut", TILE_PREVIEW_COUNT),
    preiseSearch: "?gruppe=herren",
  },
  {
    anchorId: "extensions",
    title: "Extensions",
    blurb: "Luxury Bonding Extensions, Beratung & Entfernung — 100 % Echthaar.",
    previewRows: sliceCategoryPreview("extensions", TILE_PREVIEW_COUNT),
    preiseSearch: "?gruppe=extensions",
  },
];
