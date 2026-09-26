/**
 * Minimal Strapi HTTP client.
 *
 * This is intentionally thin for the MVP: the frontend currently runs
 * entirely on mock data (see `data/mock`), so nothing calls this yet.
 * It exists to establish the boundary so that wiring up a real Strapi
 * instance later does not require touching any UI component.
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

export async function strapiFetch<T>(
  path: string,
  options: StrapiFetchOptions = {}
): Promise<T> {
  if (!STRAPI_URL) {
    throw new Error(
      "STRAPI_URL is not configured. The frontend MVP uses mock data " +
        "(see data/mock) - this client is only needed once a real Strapi " +
        "instance is available."
    );
  }

  const res = await fetch(`${STRAPI_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(STRAPI_API_TOKEN
        ? { Authorization: `Bearer ${STRAPI_API_TOKEN}` }
        : {}),
    },
    next: { revalidate: options.revalidate ?? 60 },
  });

  if (!res.ok) {
    throw new Error(`Strapi request failed: ${res.status} ${res.statusText}`);
  }

  return res.json() as Promise<T>;
}
