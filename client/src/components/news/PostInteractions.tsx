"use client";

import { useState } from "react";
import PostActions from "./PostActions";
import CommentSection from "./CommentSection";
import type { NewsComment } from "@/types/news";

type PostInteractionsProps = {
  postId: string;
  likeCount: number;
  emojis: string[];
  comments: NewsComment[];
};

/**
 * Small client boundary that lets the "comments open" toggle live in
 * `PostActions` while the panel it controls lives in `CommentSection`.
 * Keeping this coordination in one place means `NewsPost` itself can
 * stay a Server Component.
 */
export default function PostInteractions({ postId, likeCount, emojis, comments }: PostInteractionsProps) {
  const [commentsOpen, setCommentsOpen] = useState(false);

  return (
    <>
      <PostActions
        postId={postId}
        likeCount={likeCount}
        emojis={emojis}
        commentCount={comments.length}
        commentsOpen={commentsOpen}
        onToggleComments={() => setCommentsOpen((v) => !v)}
      />
      <CommentSection postId={postId} comments={comments} open={commentsOpen} />
    </>
  );
}
