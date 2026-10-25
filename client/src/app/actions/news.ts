"use server";

import { revalidatePath } from "next/cache";
import { isStrapiWritable, strapiRequest } from "@/lib/strapi/client";
import type { NewsEmojiReaction } from "@/types/news";

/**
 * Server actions for the news like and emoji buttons. They run only on the server,
 * so the Strapi token is never sent to the browser. Each action reads the current
 * post from Strapi, changes one value, writes it back and returns the new values.
 *
 * Known limit: read-then-write is not atomic. Two people pressing at the same
 * instant can overwrite each other's count. Fine for a community site, but a
 * busy page needs an atomic counter in a database (see the tutorial).
 */

export type NewsActionResult =
  | { ok: true; likeCount: number; emojis: NewsEmojiReaction[] }
  | { ok: false; reason: "invalid" | "not-configured" | "strapi-error" };

type StrapiPostResponse = {
  data: { likeCount?: number | null; emojis?: { emoji: string; count: number | null }[] | null } | null;
};

const DOCUMENT_ID = /^[a-z0-9]{10,40}$/i;
const EMOJI = /^\p{Extended_Pictographic}(?:\uFE0F|\u200D\p{Extended_Pictographic})*$/u;

async function loadPost(documentId: string) {
  const res = await strapiRequest<StrapiPostResponse>(`/api/news-posts/${documentId}?populate[emojis]=true`);
  if (!res.data) throw new Error("post not found");
  return {
    likeCount: res.data.likeCount ?? 0,
    emojis: (res.data.emojis ?? []).map((e) => ({ emoji: e.emoji, count: e.count ?? 0 })),
  };
}

async function savePost(documentId: string, likeCount: number, emojis: NewsEmojiReaction[]) {
  await strapiRequest(`/api/news-posts/${documentId}`, {
    method: "PUT",
    body: { data: { likeCount, emojis } },
  });
}

export async function setNewsLike(documentId: string, liked: boolean): Promise<NewsActionResult> {
  if (!DOCUMENT_ID.test(documentId)) return { ok: false, reason: "invalid" };
  if (!isStrapiWritable()) return { ok: false, reason: "not-configured" };
  try {
    const post = await loadPost(documentId);
    const likeCount = Math.max(0, post.likeCount + (liked ? 1 : -1));
    await savePost(documentId, likeCount, post.emojis);
    revalidatePath("/news");
    return { ok: true, likeCount, emojis: post.emojis };
  } catch {
    return { ok: false, reason: "strapi-error" };
  }
}

export async function setNewsEmoji(documentId: string, emoji: string, picked: boolean): Promise<NewsActionResult> {
  if (!DOCUMENT_ID.test(documentId) || !EMOJI.test(emoji)) return { ok: false, reason: "invalid" };
  if (!isStrapiWritable()) return { ok: false, reason: "not-configured" };
  try {
    const post = await loadPost(documentId);
    const existing = post.emojis.find((e) => e.emoji === emoji);
    const current = existing?.count ?? 0;
    const nextCount = Math.max(0, current + (picked ? 1 : -1));
    const emojis = existing
      ? post.emojis.map((e) => (e.emoji === emoji ? { ...e, count: nextCount } : e))
      : [...post.emojis, { emoji, count: nextCount }];
    await savePost(documentId, post.likeCount, emojis);
    revalidatePath("/news");
    return { ok: true, likeCount: post.likeCount, emojis };
  } catch {
    return { ok: false, reason: "strapi-error" };
  }
}
