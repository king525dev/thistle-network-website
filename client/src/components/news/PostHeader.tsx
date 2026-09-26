import Image from "next/image";
import type { NewsAuthor } from "@/types/news";

type PostHeaderProps = {
  author: NewsAuthor;
  publishedAt: string;
  pinned?: boolean;
};

function formatRelativeTime(iso: string) {
  const date = new Date(iso);
  const diffMs = Date.now() - date.getTime();
  const diffHours = Math.round(diffMs / (1000 * 60 * 60));

  if (diffHours < 1) return "Just now";
  if (diffHours < 24) return `${diffHours} hour${diffHours === 1 ? "" : "s"} ago`;
  const diffDays = Math.round(diffHours / 24);
  if (diffDays < 7) return `${diffDays} day${diffDays === 1 ? "" : "s"} ago`;
  const diffWeeks = Math.round(diffDays / 7);
  return `${diffWeeks} week${diffWeeks === 1 ? "" : "s"} ago`;
}

export default function PostHeader({ author, publishedAt, pinned }: PostHeaderProps) {
  return (
    <div className="post-head">
      <div className="post-avatar">
        {author.profileImage ? (
          <Image
            src={author.profileImage.url}
            alt=""
            width={40}
            height={40}
            unoptimized
          />
        ) : (
          <span aria-hidden="true">{author.name.slice(0, 1)}</span>
        )}
      </div>
      <div>
        <div className="post-author">{author.name}</div>
        <div className="post-time">
          <time dateTime={publishedAt}>{formatRelativeTime(publishedAt)}</time>
        </div>
      </div>
      {pinned && <span className="post-pin">Pinned</span>}
    </div>
  );
}
