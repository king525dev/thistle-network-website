import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostInteractions from "./PostInteractions";
import type { NewsPost as NewsPostType } from "@/types/news";

type NewsPostProps = {
  post: NewsPostType;
};

/**
 * Composes a single post from PostHeader + PostContent (both server) and
 * PostInteractions (client, owns like/react/comment state). No database,
 * Strapi, or auth logic lives here - see PostActions/CommentSection for
 * where the eventual API calls will go.
 */
export default function NewsPost({ post }: NewsPostProps) {
  return (
    <article className={`post${post.pinned ? " post-pinned" : ""}`}>
      <PostHeader author={post.author} publishedAt={post.publishedAt} pinned={post.pinned} />
      <PostContent title={post.title} body={post.body} image={post.image} />
      <PostInteractions
        postId={post.id}
        likeCount={post.likeCount}
        emojis={post.emojis ?? []}
        comments={post.comments ?? []}
      />
    </article>
  );
}
