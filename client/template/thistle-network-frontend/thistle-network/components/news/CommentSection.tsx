"use client";

import { useState, type FormEvent } from "react";
import type { NewsComment } from "@/types/news";

type CommentSectionProps = {
  postId: string;
  comments: NewsComment[];
  open: boolean;
};

function initials(name: string) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

/**
 * Local-only comment thread for the MVP. New comments live in
 * component state and disappear on refresh - there is no backend yet.
 */
export default function CommentSection({ postId, comments, open }: CommentSectionProps) {
  const [localComments, setLocalComments] = useState<NewsComment[]>(comments);
  const [draft, setDraft] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = draft.trim();
    if (!text) return;

    setLocalComments((current) => [
      ...current,
      { id: `${postId}-local-${current.length}`, author: "You", body: text },
    ]);
    setDraft("");
  }

  return (
    <div className="post-comments" hidden={!open}>
      <ul className="comment-list">
        {localComments.map((comment) => (
          <li className="comment" key={comment.id}>
            <div className="comment-avatar" aria-hidden="true">
              {initials(comment.author)}
            </div>
            <div className="comment-bubble">
              <b>{comment.author}</b>
              {comment.body}
            </div>
          </li>
        ))}
      </ul>

      <form className="comment-form" onSubmit={handleSubmit}>
        <label htmlFor={`comment-input-${postId}`} className="sr-only">
          Write a comment
        </label>
        <input
          id={`comment-input-${postId}`}
          type="text"
          placeholder="Write a comment..."
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          required
        />
        <button type="submit" aria-label="Send comment">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="m3 20 18-8L3 4v6l12 2-12 2v6Z" />
          </svg>
        </button>
      </form>
    </div>
  );
}
