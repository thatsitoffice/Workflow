/**
 * Impressum & Datenschutz — vor Livegang von Rechtsanwalt/Steuerberater prüfen und alle
 * Platzhalter in `LEGAL` sowie `SITE` (Telefon, Domain) vollständig ausfüllen.
 */
import { SITE } from "./site";

export const LEGAL = {
  /** Anzeigename wie im Betrieb / auf der Website */
  entityDisplayName: SITE.name,
  streetLine: "Cranger Str. 316",
  postalCode: "45891",
  city: SITE.city,
  country: "Deutschland",
  email: SITE.email,
  phoneDisplay: SITE.phoneDisplay,
  phoneTel: SITE.phoneTel,

  /**
   * Gesetzliche Vertretung: nur sichtbar, was öffentlich aus dem Markenauftritt (Name des Betriebs) hervorgeht.
   * Vollständige Namensangabe ggf. nach § 5 TMG vom Steuerberater/Rechtsanwalt ergänzen.
   */
  representatives: "Zeynep und Faisal (Inhaber:innen)",

  /** USt-IdNr. nach § 27a UStG — nur eintragen, wenn verifiziert öffentlich bzw. für das Impressum vorgesehen */
  vatId: "" as string,

  /**
   * Berufsrechtlicher Kontext ohne behauptete Mitgliedsnummern oder nicht verifizierte Kammer-Zuordnung.
   */
  professionalChamber:
    "Tätigkeit im Friseurhandwerk als Meisterbetrieb gemäß der öffentlich geführten Geschäftsbezeichnung. Konkrete Angaben zu Aufsicht, Handwerksrolle oder Innungszugehörigkeit werden hier ergänzt, sobald sie für das Impressum geprüft vorliegen.",

  /**
   * Berufshaftpflicht — nur ausfüllen, wenn police/public Impressum des Betriebs vorliegt (Anbieter, Geltungsbereich).
   */
  professionalLiabilityInsurance: "" as string,

  /**
   * Zuständige berufsrechtliche oder ortsübliche Aufsicht — nur wenn konkret und belegt (sonst leer).
   */
  tradeSupervisoryAuthority: "" as string,

  /** Unternehmensgegenstand in Kurzform */
  businessPurpose: "Friseur- und Barbierleistungen (Meisterbetrieb), einschließlich Beratung und Verkauf zugehöriger Produkte.",

  /**
   * Hosting gemäß Art. 13 / 28 DSGVO — Anbieter Ihrer Website ergänzen (z. B. Netlify, Vercel, IONOS, eigener Server).
   */
  hostingProviderName: "Cloudflare Germany GmbH",
  hostingProviderAddress:
    "c/o Design Offices München Atlas, Rosenheimer Straße 143C (8. OG), 81671 München, Deutschland",
  hostingPrivacyUrl: "https://cloudflare.com/privacy",

  /** Aufsichtsbehörde Datenschutz (NRW) — Standardformulierung */
  supervisoryAuthority:
    "Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI NRW), Kavalleriestraße 2–4, 40213 Düsseldorf, https://www.ldi.nrw.de",

  /** Link EU-Plattform OS (Pflichtnennung bei Verbraucherstreitigkeiten) */
  euOdrUrl: "https://ec.europa.eu/consumers/odr/",
} as const;
