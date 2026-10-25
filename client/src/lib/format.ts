/**
 * Dates are formatted in Europe/London on both the server and the browser, so the
 * server-rendered HTML and the hydrated client match exactly (no hydration errors).
 */
const LONDON = "Europe/London";

export function formatLongDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: LONDON });
}

export function formatShortDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: LONDON });
}
