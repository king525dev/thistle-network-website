"use client";

import { useState } from "react";
import PostActions from "./PostActions";

type PostInteractionsProps = {
  postId: string;
  likeCount: number;
  emojis: string[];
};

/**
 * Small client boundary that lets the "comments open" toggle live in
 * `PostActions` while the panel it controls lives in `CommentSection`.
 * Keeping this coordination in one place means `NewsPost` itself can
 * stay a Server Component.
 */
export default function PostInteractions({ postId, likeCount, emojis }: PostInteractionsProps) {

  return (
    <>
      <PostActions
        postId={postId}
        likeCount={likeCount}
        emojis={emojis}
      />
    </>
  );
}
