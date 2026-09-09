/**
 * Tiny analytics abstraction.
 *
 * No provider is wired up for the MVP, so this safely no-ops in
 * production and logs to the console in development. Swap the body of
 * `trackEvent` for a real provider call (Plausible, GA4, PostHog, etc.)
 * without touching any call site.
 */

export type AnalyticsEventName =
  | "registration_cta_clicked"
  | "whatsapp_cta_clicked"
  | "gallery_image_opened"
  | "news_post_interaction"
  | "event_cta_clicked";

export type AnalyticsEventPayload = Record<string, string | number | boolean | undefined>;

export function trackEvent(
  name: AnalyticsEventName,
  payload?: AnalyticsEventPayload
): void {
  if (process.env.NODE_ENV !== "production") {
    console.log("[analytics]", name, payload ?? {});
    return;
  }

  // No analytics provider configured yet - intentionally a no-op.
}
