/**
 * Minimal Strapi HTTP client.
 *
 * Reads are anonymous: they use the Public role, so the token is never needed here.
 * Writes (strapiRequest) use STRAPI_API_TOKEN, only from the server actions in app/actions. Never prefix it with
 * NEXT_PUBLIC_, and never import these files from a "use client" component.
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
    },
    next: { revalidate: options.revalidate ?? 60 },
  });

  if (!res.ok) {
    throw new StrapiError(`Strapi request failed: ${res.status} ${res.statusText} (${path})`, res.status);
  }

  return res.json() as Promise<T>;
}

export function isStrapiWritable(): boolean {
  return Boolean(STRAPI_URL && STRAPI_API_TOKEN);
}

/**
 * Authenticated request to Strapi, for the server actions only (likes and emoji
 * counts). Never cached. STRAPI_API_TOKEN is read on the server and never sent
 * to the browser.
 */
export async function strapiRequest<T>(path: string, options: { method?: "GET" | "PUT"; body?: unknown } = {}): Promise<T> {
  if (!STRAPI_URL || !STRAPI_API_TOKEN) {
    throw new StrapiError("Strapi writes are not configured (STRAPI_URL and STRAPI_API_TOKEN).", 503);
  }
  const res = await fetch(`${STRAPI_URL}${path}`, {
    method: options.method ?? "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${STRAPI_API_TOKEN}`,
    },
    body: options.body === undefined ? undefined : JSON.stringify(options.body),
    cache: "no-store",
  });
  if (!res.ok) {
    throw new StrapiError(`Strapi request failed: ${res.status} ${res.statusText} (${path})`, res.status);
  }
  return res.json() as Promise<T>;
}
