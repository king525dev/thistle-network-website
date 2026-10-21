"use client";

import { useState } from "react";

const REACTION_PALETTE = ["🙌", "🎉", "👏", "❤️", "👍"];

type EmojiSectionProps = {
  initialEmojis: string[];
};

/**
 * Shows the unique set of emoji reactions on a post and lets the visitor
 * add one. Only the distinct emojis are tracked/displayed, not who
 * reacted - matching the product requirement that authors aren't
 * counted. Local UI state only; nothing is persisted.
 */
export default function EmojiSection({ initialEmojis }: EmojiSectionProps) {
  const [emojis, setEmojis] = useState<string[]>(initialEmojis);
  const [pickerOpen, setPickerOpen] = useState(false);

  function addEmoji(emoji: string) {
    setEmojis((current) => (current.includes(emoji) ? current : [...current, emoji]));
    setPickerOpen(false);
  }

  return (
    <div className="emoji-section">
      <ul className="emoji-list" aria-label="Reactions">
        {emojis.map((emoji) => (
          <li key={emoji} aria-hidden="true">
            {emoji}
          </li>
        ))}
      </ul>

      <div className="emoji-picker-wrap">
        <button
          type="button"
          className="post-action"
          aria-haspopup="true"
          aria-expanded={pickerOpen}
          onClick={() => setPickerOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <circle cx="12" cy="12" r="9" />
            <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
          </svg>
          React
        </button>

        {pickerOpen && (
          <div className="emoji-picker" role="menu">
            {REACTION_PALETTE.map((emoji) => (
              <button
                type="button"
                role="menuitem"
                key={emoji}
                onClick={() => addEmoji(emoji)}
                aria-label={`React with ${emoji}`}
              >
                {emoji}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
