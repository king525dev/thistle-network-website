"use client";

import { useState, useTransition } from "react";
import { setNewsEmoji } from "@/app/actions/news";
import type { NewsEmojiReaction } from "@/types/news";

type EmojiSectionProps = {
  postId: string;
  reactions: NewsEmojiReaction[];
};

/**
 * One pill per unique emoji with its count. Tapping a pill updates at once and
 * saves the count to Strapi. A failed save is undone, as with the like button.
 */
export default function EmojiSection({ postId, reactions }: EmojiSectionProps) {
  const [counts, setCounts] = useState<Record<string, number>>(() => Object.fromEntries(reactions.map((r) => [r.emoji, r.count])));
  const [picked, setPicked] = useState<Record<string, boolean>>({});
  const [error, setError] = useState("");
  const [, startTransition] = useTransition();
  const [seenReactions, setSeenReactions] = useState(reactions);

  // Re-sync when the server sends new reactions (adjusting state during render, not in an effect).
  if (seenReactions !== reactions) {
    setSeenReactions(reactions);
    setCounts(Object.fromEntries(reactions.map((r) => [r.emoji, r.count])));
  }

  const toggle = (emoji: string) => {
    const next = !picked[emoji];
    setPicked((current) => ({ ...current, [emoji]: next }));
    setCounts((current) => ({ ...current, [emoji]: (current[emoji] ?? 0) + (next ? 1 : -1) }));
    setError("");

    startTransition(async () => {
      const result = await setNewsEmoji(postId, emoji, next);
      if (result.ok) {
        setCounts(Object.fromEntries(result.emojis.map((r) => [r.emoji, r.count])));
      } else if (result.reason !== "not-configured") {
        setPicked((current) => ({ ...current, [emoji]: !next }));
        setCounts((current) => ({ ...current, [emoji]: (current[emoji] ?? 0) + (next ? -1 : 1) }));
        setError("Couldn't save that reaction. Please try again.");
      }
    });
  };

  return (
    <div className="emoji-reactions" aria-label="Reactions">
      {reactions.map((reaction) => {
        const isPicked = Boolean(picked[reaction.emoji]);
        const count = counts[reaction.emoji] ?? reaction.count;
        return (
          <button
            key={reaction.emoji}
            type="button"
            className={`emoji-pill${isPicked ? " is-picked" : ""}`}
            aria-pressed={isPicked}
            aria-label={`${reaction.emoji} reaction, ${count}`}
            onClick={() => toggle(reaction.emoji)}
          >
            {reaction.emoji} <span className="count">{count}</span>
          </button>
        );
      })}
      {error && <span role="status" className="action-error">{error}</span>}
    </div>
  );
}
