import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostActions from "./PostActions";
import EmojiSection from "./EmojiSection";
import type { Media } from "@/types/media";
import type { NewsPost as NewsPostType } from "@/types/news";

type NewsPostProps = {
  post: NewsPostType;
  fallbackAvatar?: Media;
};

/** One update: header, body, image, and the like and emoji footer. */
export default function NewsPost({ post, fallbackAvatar }: NewsPostProps) {
  return (
    <article className={`post${post.pinned ? " pinned" : ""} reveal`}>
      <PostHeader post={post} fallbackAvatar={fallbackAvatar} />
      <PostContent post={post} />
      <div className="post-footer">
        <PostActions postId={post.id} likeCount={post.likeCount} />
        <EmojiSection postId={post.id} reactions={post.emojis} />
      </div>
    </article>
  );
}
