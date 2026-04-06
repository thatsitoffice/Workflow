/**
 * Google Places API (New) — nur zur BUILD-Zeit (Astro), nicht im Browser.
 * Key niemals als PUBLIC_* ausliefern; in CI/Cloudflare als Build-Secret setzen.
 *
 * Docs: https://developers.google.com/maps/documentation/places/web-service/place-details
 */

export type NormalizedReview = {
  author: string;
  authorPhoto?: string;
  rating: number;
  text: string;
  relativeTime?: string;
  authorUri?: string;
};

export type PlaceReviewData = {
  displayName: string;
  rating: number;
  userRatingCount: number;
  reviews: NormalizedReview[];
  googleMapsUri: string;
};

type ApiReview = {
  rating?: number;
  text?: { text?: string };
  relativePublishTimeDescription?: string;
  authorAttribution?: {
    displayName?: string;
    uri?: string;
    photoUri?: string;
  };
};

type ApiPlace = {
  displayName?: { text?: string };
  rating?: number;
  userRatingCount?: number;
  reviews?: ApiReview[];
  googleMapsUri?: string;
};

function normalizeReviews(raw: ApiReview[] | undefined): NormalizedReview[] {
  if (!raw?.length) return [];
  return raw.map((r) => ({
    author: r.authorAttribution?.displayName?.trim() || "Google-Nutzer",
    authorPhoto: r.authorAttribution?.photoUri,
    authorUri: r.authorAttribution?.uri,
    rating: typeof r.rating === "number" ? r.rating : 0,
    text: (r.text?.text ?? "").trim(),
    relativeTime: r.relativePublishTimeDescription,
  }));
}

/**
 * Lädt Bewertungs-Snapshot für statisches HTML (max. Anzahl liefert Google je nach Kontext).
 */
export async function fetchPlaceReviewData(
  apiKey: string | undefined,
  placeId: string | undefined
): Promise<PlaceReviewData | null> {
  const key = apiKey?.trim();
  const id = placeId?.trim();
  if (!key || !id) return null;

  const url = `https://places.googleapis.com/v1/places/${encodeURIComponent(id)}`;

  try {
    const res = await fetch(url, {
      headers: {
        "X-Goog-Api-Key": key,
        "X-Goog-FieldMask": "reviews,rating,userRatingCount,displayName,googleMapsUri",
      },
    });

    if (!res.ok) {
      console.warn(
        "[googlePlaces] Places API Fehler:",
        res.status,
        (await res.text()).slice(0, 200)
      );
      return null;
    }

    const data = (await res.json()) as ApiPlace;
    const displayName = data.displayName?.text?.trim() || "";
    const rating = typeof data.rating === "number" ? data.rating : 0;
    const userRatingCount =
      typeof data.userRatingCount === "number" ? data.userRatingCount : 0;
    const reviews = normalizeReviews(data.reviews).filter((r) => r.text.length > 0);
    const googleMapsUri = data.googleMapsUri?.trim() || "";

    if (!displayName && rating === 0 && userRatingCount === 0 && reviews.length === 0) {
      return null;
    }

    return {
      displayName,
      rating,
      userRatingCount,
      reviews,
      googleMapsUri,
    };
  } catch (e) {
    console.warn("[googlePlaces]", e);
    return null;
  }
}
