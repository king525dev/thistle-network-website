"use server";

import { revalidatePath } from "next/cache";
import { isStrapiConfigured } from "@/lib/strapi/client";
import { reactToNewsPost, type ReactionInput, type ReactionResult } from "@/lib/strapi/writes";

export type ReactionOutcome =
  | { persisted: true; result: ReactionResult }
  | { persisted: false };

const ID_PATTERN = /^[a-z0-9-]{1,64}$/i;

/**
 * Called from the browser. It validates the input, writes the like or emoji count to
 * Strapi, and refreshes the news page. With no CMS configured (fallback content),
 * it reports persisted: false and the UI keeps the change on screen only.
 */
export async function reactAction(input: ReactionInput): Promise<ReactionOutcome> {
  if (!ID_PATTERN.test(input.documentId)) throw new Error("Invalid post id");
  if (input.delta !== 1 && input.delta !== -1) throw new Error("Invalid change");
  if (input.kind !== "like" && input.kind !== "emoji") throw new Error("Invalid reaction");
  if (input.kind === "emoji" && (!input.emoji || input.emoji.length > 8)) throw new Error("Invalid emoji");

  if (!isStrapiConfigured()) return { persisted: false };

  const result = await reactToNewsPost(input);
  revalidatePath("/news");
  return { persisted: true, result };
}
