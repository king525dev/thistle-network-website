"use client";

import { useState } from "react";
import EmojiSection from "./EmojiSection";
import { trackEvent } from "@/lib/analytics/events";

type PostActionsProps = {
  postId: string;
  likeCount: number;
  emojis: string[];
  commentCount: number;
  commentsOpen: boolean;
  onToggleComments: () => void;
};

/**
 * Purely local, frontend-only interaction for the MVP:
 *
 *   like -> local UI state
 *
 * This will eventually become:
 *
 *   PostActions -> application API -> backend -> Postgres
 *
 * No database or Strapi calls belong here or in `NewsPost`.
 */
export default function PostActions({
  postId,
  likeCount,
  emojis,
  commentCount,
  commentsOpen,
  onToggleComments,
}: PostActionsProps) {
  const [liked, setLiked] = useState(false);

  function toggleLike() {
    setLiked((current) => {
      const next = !current;
      trackEvent("news_post_interaction", { postId, type: "like", value: next });
      return next;
    });
  }

  return (
    <div className="post-actions-wrap">
      <div className="post-actions">
        <button
          type="button"
          className={`post-action like-btn${liked ? " liked" : ""}`}
          aria-pressed={liked}
          onClick={toggleLike}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
          </svg>
          <span>{likeCount + (liked ? 1 : 0)}</span>
        </button>

        <button
          type="button"
          className="post-action comment-toggle"
          aria-expanded={commentsOpen}
          onClick={onToggleComments}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5c-1.4 0-2.7-.3-3.9-.9L3 20l1-5.4a8.38 8.38 0 0 1 17-3.1Z" />
          </svg>
          <span>
            {commentCount} comment{commentCount === 1 ? "" : "s"}
          </span>
        </button>

        <EmojiSection initialEmojis={emojis} />
      </div>
    </div>
  );
}
