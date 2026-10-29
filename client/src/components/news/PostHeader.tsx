import Image from "next/image";
import Icon from "@/components/ui/Icon";
import { formatShortDate } from "@/lib/format";
import type { Media } from "@/types/media";
import type { NewsPost } from "@/types/news";

type PostHeaderProps = {
  post: NewsPost;
  fallbackAvatar?: Media;
};

/** The pinned badge, avatar, author handle, date and type tag. */
export default function PostHeader({ post, fallbackAvatar }: PostHeaderProps) {
  const avatar = post.avatar ?? fallbackAvatar;
  return (
    <>
      {post.pinned && (
        <div className="pinned-badge">
          <Icon name="pinned" />
          Pinned Update
        </div>
      )}
      <div className="post-header">
        <div className="avatar">
          {avatar && (
            <Image src={avatar.url} alt="" width={avatar.width ?? 40} height={avatar.height ?? 40} unoptimized={avatar.url.endsWith(".svg")} style={{ objectFit: "contain" }} />
          )}
        </div>
        <div className="meta">
          <div className="meta-top">
            <span className="author">{post.authorName}</span>
            <span className="handle">{post.authorHandle}</span>
            <time className="time" dateTime={post.postedAt}>· {formatShortDate(post.postedAt)}</time>
          </div>
        </div>
        <span className={`news-type-tag ${post.newsType === "Event" ? "type-event" : "type-announcement"}`}>{post.newsType}</span>
      </div>
    </>
  );
}
