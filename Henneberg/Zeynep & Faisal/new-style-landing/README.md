# New Style by Zeynep & Faisal — Landingpage

Premium-Friseur-Meisterbetrieb in Gelsenkirchen — statische Website mit [Astro](https://astro.build).

## Entwicklung

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Ausgabe: `dist/` (z. B. [Cloudflare Pages](https://pages.cloudflare.com/) oder GitHub Pages).

Seiten: `/` (Start mit Fullscreen-Hero + transparentem Header), `/preise/` (vollständige Preisliste aus `src/data/pricing.ts`).

Layout: seitlicher Innenabstand site-weit **`10%`** (`--page-pad` in `src/styles/global.css`).

Startseite: **Vollbild-Hero** mit Hintergrundbild + Text-CTA (Planity), **Header** `heroTone="dark"`, Schriften **Source Serif 4** / **Source Sans 3**, Sektionen **FeatureGlass**, **MoodGallery** — ohne separate „Über uns“-Sektion.

## Inhalte pflegen

- Zentrale URLs & Kontakt: `src/data/site.ts`
- SEO-Titel & Beschreibung: `src/pages/index.astro`
- Domain für Sitemap: `astro.config.mjs` → `site`
- **Preise & Katalog:** `src/data/pricing.ts` (Vorschau + Unterseite `/preise/`, Quelle: Planity)
- **Google-Bewertungen:** `src/data/google.ts` (CID, Fallback-Sterne/-Anzahl, optional `placeId`)
  - Link „Alle Bewertungen“ nutzt die **CID** (`mapsCid`) aus dem Google-Profil.
  - Für **automatische Rezensionstexte** beim Build: `.env` aus `.env.example` anlegen und `GOOGLE_PLACES_API_KEY` + `GOOGLE_PLACE_ID` setzen ([Places API New](https://developers.google.com/maps/documentation/places/web-service/place-details)).

Online-Termine: [Planity](https://www.planity.com/de-DE/new-style-by-zeynep-faisal-meisterbetrieb-45891-gelsenkirchen)
