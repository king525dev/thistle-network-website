"use client";

import { useState, useTransition } from "react";
import Icon from "@/components/ui/Icon";
import { setNewsLike } from "@/app/actions/news";
import { trackEvent } from "@/lib/analytics/events";

type PostActionsProps = {
  postId: string;
  likeCount: number;
};

/**
 * The like button. It updates at once (heart fills, count moves), then saves to
 * Strapi through a server action. If the save fails the change is undone and a
 * message is shown. If Strapi isn't configured the change stays visual only.
 */
export default function PostActions({ postId, likeCount }: PostActionsProps) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(likeCount);
  const [error, setError] = useState("");
  const [pending, startTransition] = useTransition();
  const [seenLikeCount, setSeenLikeCount] = useState(likeCount);

  // Re-sync when the server sends a new count (adjusting state during render, not in an effect).
  if (seenLikeCount !== likeCount) {
    setSeenLikeCount(likeCount);
    setCount(likeCount);
  }

  const toggle = () => {
    const next = !liked;
    setLiked(next);
    setCount((value) => value + (next ? 1 : -1));
    setError("");
    trackEvent("news_post_interaction", { postId, type: "like" });

    startTransition(async () => {
      const result = await setNewsLike(postId, next);
      if (result.ok) {
        setCount(result.likeCount);
      } else if (result.reason !== "not-configured") {
        setLiked(!next);
        setCount((value) => value + (next ? -1 : 1));
        setError("Couldn't save your like. Please try again.");
      }
    });
  };

  return (
    <>
      <button
        type="button"
        className={`action-btn like-btn${liked ? " liked" : ""}`}
        aria-pressed={liked}
        aria-busy={pending}
        aria-label={liked ? "Unlike this update" : "Like this update"}
        onClick={toggle}
      >
        <Icon name="newsLike" />
        <span className="like-count">{count}</span>
      </button>
      {error && <span role="status" className="action-error">{error}</span>}
    </>
  );
}
