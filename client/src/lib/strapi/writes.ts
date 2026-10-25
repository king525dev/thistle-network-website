import "server-only";

/**
 * Writes to Strapi. Server-only: the `server-only` import makes the build fail if a
 * client component ever imports this file, which would expose STRAPI_API_TOKEN.
 * Only the Next.js server holds the token. The browser calls a server action (app/news/actions.ts).
 */

export type ReactionInput = {
  documentId: string;
  kind: "like" | "emoji";
  emoji?: string;
  delta: 1 | -1;
};

export type ReactionResult = {
  likeCount: number;
  emojis: { emoji: string; count: number }[];
};

export async function reactToNewsPost(input: ReactionInput): Promise<ReactionResult> {
  const url = process.env.STRAPI_URL;
  const token = process.env.STRAPI_API_TOKEN;
  if (!url || !token) throw new Error("Reactions need STRAPI_URL and STRAPI_API_TOKEN on the server.");

  const res = await fetch(`${url}/api/news-posts/${encodeURIComponent(input.documentId)}/react`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify({ kind: input.kind, emoji: input.emoji, delta: input.delta }),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Strapi returned ${res.status} for a reaction`);
  const json = (await res.json()) as { data: ReactionResult };
  return json.data;
}
