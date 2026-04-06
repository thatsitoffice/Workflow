/**
 * Öffentliche Auszüge aus Google-Bewertungen — ohne Places API für die Website.
 *
 * So pflegen: Rezensionen im Google-Profil öffnen und Texte **wörtlich** (ggf. gekürzt) sowie
 * Sterne und Anzeigenamen wie dort übernehmen. Untenstehende Zeilen sind **Platzhalter** —
 * bitte durch echte, bei Google sichtbare Zitate ersetzen (rechtlich sauber).
 *
 * Bei aktiver Places API beim Build (GOOGLE_PLACES_API_KEY + PLACE_ID) haben API-Texte Vorrang.
 */
export type ManualGoogleReview = {
  /** Wie bei Google angezeigt (Vorname, Initialen o. ä.) */
  author: string;
  text: string;
  rating: 1 | 2 | 3 | 4 | 5;
  /** z. B. „vor 2 Wochen“ oder „Google“ */
  relativeTime?: string;
};

export const MANUAL_GOOGLE_REVIEWS: ManualGoogleReview[] = [
  {
    author: "Sarah M.",
    rating: 5,
    relativeTime: "Auszug · Google",
    text: "Endlich ein Salon, an dem man sich nicht überfordert fühlt. Die Beratung war ehrlich und der Schnitt hält wirklich Form — genau das, was ich für den Job brauche.",
  },
  {
    author: "Thomas K.",
    rating: 5,
    relativeTime: "Auszug · Google",
    text: "Sehr saubere Arbeit, ruhige Atmosphäre und klare Absprachen zur Farbe. Ich komme wieder und empfehle den Betrieb gern weiter.",
  },
  {
    author: "Aylin D.",
    rating: 5,
    relativeTime: "Auszug · Google",
    text: "Meisterbetrieb merkt man: Details, Hygiene und Zeit für Fragen. Mein Balayage wirkt natürlich und gepflegt, genau wie besprochen.",
  },
  {
    author: "Michael R.",
    rating: 5,
    relativeTime: "Auszug · Google",
    text: "Termin über Planity hat reibungslos geklappt. Im Salon freundlich, professionell — der Herrenschnitt sitzt perfekt.",
  },
];
