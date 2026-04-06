/**
 * Google Maps / Bewertungen — hier pflegen.
 *
 * CID: In der Google-Suche/Maps-URL oft als `cid=…` oder `rldimm=…` (numerisch).
 * Link zu Profil & Rezensionen: https://www.google.com/maps?cid=DEINE_CID
 *
 * Place-ID (ChIJ…): Für Live-Bewertungen via Places API (New) beim Build.
 * Finder: https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder
 */
export const GOOGLE = {
  /** Numerische CID (aus deinem Suchprofil) */
  mapsCid: "5542433512576506106",
  /**
   * Places API (New) — Place-ID. Leer lassen = keine API-Abfrage, nur Link + Fallback-Zahlen.
   * Alternativ Build-Env: GOOGLE_PLACE_ID
   */
  placeId: "",
} as const;

/**
 * Anzeige, wenn keine API-Daten: editierbare Summe (von Hand an Google-Profil anpassen).
 */
export const GOOGLE_REVIEWS_FALLBACK = {
  rating: 4.9,
  /** Planity / Profil (Stand März 2026) */
  userRatingCount: 210,
} as const;
