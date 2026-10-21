/**
 * Minimal Strapi HTTP client.
 *
 * `STRAPI_API_TOKEN` must never be exposed to the client - do not prefix
 * it with `NEXT_PUBLIC_`, and do not import this file from a
 * "use client" component.
 */

const STRAPI_URL = process.env.STRAPI_URL;
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

type StrapiFetchOptions = {
  /** Next.js cache revalidation window, in seconds. */
  revalidate?: number;
};

export class StrapiError extends Error {
  constructor(
    message: string,
    public readonly status: number
  ) {
    super(message);
    this.name = "StrapiError";
  }
}

export function isStrapiConfigured(): boolean {
  return Boolean(STRAPI_URL);
}

/**
 * Strapi's default (local) upload provider returns relative media URLs
 * such as "/uploads/photo_1a2b3c.jpg". The browser would look for those
 * on the Next.js server, so they are turned into absolute URLs here.
 * URLs that are already absolute (cloud storage providers) are untouched.
 */
export function strapiMediaUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${STRAPI_URL ?? ""}${path}`;
}

export async function strapiFetch<T>(
  path: string,
  options: StrapiFetchOptions = {}
): Promise<T> {
  if (!STRAPI_URL) {
    throw new Error(
      "STRAPI_URL is not configured. Add it to .env.local, or leave it unset " +
        "to use the built-in fallback content."
    );
  }

  const res = await fetch(`${STRAPI_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(STRAPI_API_TOKEN ? { Authorization: `Bearer ${STRAPI_API_TOKEN}` } : {}),
    },
    next: { revalidate: options.revalidate ?? 60 },
  });

  if (!res.ok) {
    throw new StrapiError(`Strapi request failed: ${res.status} ${res.statusText} (${path})`, res.status);
  }

  return res.json() as Promise<T>;
}
