import NewsPost from "./NewsPost";
import type { NewsPost as NewsPostType } from "@/types/news";

type NewsFeedProps = {
  posts: NewsPostType[];
};

/**
 * Responsible only for receiving posts and rendering the feed layout -
 * all per-post UI lives in `NewsPost`.
 */
export default function NewsFeed({ posts }: NewsFeedProps) {
  if (posts.length === 0) {
    return <p className="feed-empty">No news yet. Check back soon for updates from the network.</p>;
  }

  const sorted = [...posts].sort((a, b) => {
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });

  return (
    <div className="feed-inner">
      {sorted.map((post) => (
        <NewsPost key={post.id} post={post} />
      ))}
    </div>
  );
}
