/**
 * schema.org JSON-LD — Local / Geo SEO (HairSalon, WebSite, WebPage, BreadcrumbList).
 */
import { GOOGLE, GOOGLE_REVIEWS_FALLBACK } from "./google";
import { SITE } from "./site";

function originNoSlash(base: string): string {
  return base.replace(/\/$/, "");
}

/** Kanonische Basis-URL (Build: Astro.site, Fallback: SITE.canonicalBase) */
export function getSiteOrigin(siteFromAstro: URL | undefined): string {
  if (siteFromAstro?.origin) return originNoSlash(siteFromAstro.origin);
  return originNoSlash(SITE.canonicalBase);
}

export function salonEntityId(origin: string): string {
  return `${originNoSlash(origin)}/#salon`;
}

export function websiteEntityId(origin: string): string {
  return `${originNoSlash(origin)}/#website`;
}

export function buildHomeJsonLd(pageDescription: string, origin: string) {
  const base = originNoSlash(origin);
  const mapsUrl = `https://www.google.com/maps?cid=${GOOGLE.mapsCid}&hl=de`;

  const openingHoursSpecification = [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:30",
      closes: "16:00",
    },
  ];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HairSalon",
        "@id": `${base}/#salon`,
        name: SITE.name,
        alternateName: `${SITE.name} — ${SITE.tagline}`,
        description: pageDescription,
        url: base,
        telephone: SITE.phoneTel,
        email: SITE.email,
        image: [`${base}/og-placeholder.svg`, `${base}/logo-zeynep-faisal.png`],
        logo: `${base}/logo-zeynep-faisal.png`,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Cranger Str. 316",
          addressLocality: SITE.city,
          addressRegion: SITE.state,
          postalCode: "45891",
          addressCountry: "DE",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: SITE.geo.latitude,
          longitude: SITE.geo.longitude,
        },
        hasMap: mapsUrl,
        sameAs: [mapsUrl, SITE.bookingUrl],
        openingHoursSpecification,
        areaServed: [
          {
            "@type": "City",
            name: SITE.city,
            containedInPlace: {
              "@type": "AdministrativeArea",
              name: SITE.state,
            },
          },
          {
            "@type": "AdministrativeArea",
            name: SITE.state,
          },
        ],
        priceRange: "€€",
        currenciesAccepted: "EUR",
        paymentAccepted: SITE.paymentMethods,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: GOOGLE_REVIEWS_FALLBACK.rating,
          reviewCount: GOOGLE_REVIEWS_FALLBACK.userRatingCount,
          bestRating: 5,
          worstRating: 1,
        },
        makesOffer: {
          "@type": "Offer",
          url: SITE.bookingUrl,
          name: "Online-Terminbuchung",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${base}/#website`,
        url: base,
        name: SITE.name,
        inLanguage: "de-DE",
        publisher: { "@id": `${base}/#salon` },
      },
    ],
  };
}

/**
 * @param pageUrl Vollständige kanonische URL der Seite (z. B. aus `new URL(Astro.url.pathname, Astro.site)`)
 * @param crumbs Pfade ab Site-Root (z. B. `/`, `/preise/`)
 */
export function buildWebPageBreadcrumbJsonLd(
  origin: string,
  pageUrl: string,
  pageTitle: string,
  description: string,
  crumbs: { name: string; path: string }[],
) {
  const base = originNoSlash(origin);
  const normalizedPage = pageUrl.replace(/\/$/, "");
  const webId = `${normalizedPage}#webpage`;
  const bcId = `${normalizedPage}#breadcrumb`;

  const itemListElement = crumbs.map((c, i) => {
    const p = c.path.startsWith("/") ? c.path : `/${c.path}`;
    const itemUrl = new URL(p, `${base}/`).href;
    return {
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: itemUrl,
    };
  });

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": webId,
        url: pageUrl,
        name: pageTitle,
        description,
        isPartOf: { "@id": `${base}/#website` },
        about: { "@id": `${base}/#salon` },
        breadcrumb: { "@id": bcId },
        inLanguage: "de-DE",
      },
      {
        "@type": "BreadcrumbList",
        "@id": bcId,
        itemListElement,
      },
    ],
  };
}
