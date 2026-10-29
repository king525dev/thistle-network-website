"use client";

import { useState } from "react";
import NewsPost from "./NewsPost";
import type { Media } from "@/types/media";
import type { NewsPost as NewsPostType, NewsType } from "@/types/news";

type Filter = "All" | NewsType;

const FILTERS: { value: Filter; label: string }[] = [
  { value: "All", label: "All Updates" },
  { value: "Announcement", label: "Announcements" },
  { value: "Event", label: "Events" },
];

type NewsFeedProps = {
  posts: NewsPostType[];
  fallbackAvatar?: Media;
  emptyMessage: string;
};

/**
 * The filterable feed. Pinned posts come first, then newest first. The filter
 * buttons are client state, which is why this component is a client component.
 */
export default function NewsFeed({ posts, fallbackAvatar, emptyMessage }: NewsFeedProps) {
  const [filter, setFilter] = useState<Filter>("All");

  const sorted = [...posts].sort((a, b) => {
    if (a.pinned !== b.pinned) return a.pinned ? -1 : 1;
    return new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime();
  });
  const visible = filter === "All" ? sorted : sorted.filter((post) => post.newsType === filter);

// components/news/NewsFeed.tsx (or wherever this file lives)
return (
  <div className="main-container">
    {/* Left Column: The Feed */}
    <div className="feed" id="feedContainer">
      {visible.length === 0 ? (
        <p className="feed-empty">{emptyMessage}</p>
      ) : (
        visible.map((post) => <NewsPost key={post.id} post={post} fallbackAvatar={fallbackAvatar} />)
      )}
    </div>

    {/* Right Column: The Filter Sidebar */}
    <aside className="sidebar">
      <div className="filter-box">
        <div className="filter-title">Filter Updates</div>
        <div className="feed-filters" role="group" aria-label="Filter updates">
          {FILTERS.map((option) => {
            const count = option.value === "All" ? posts.length : posts.filter((p) => p.newsType === option.value).length;
            return (
              <button
                key={option.value}
                type="button"
                className={`filter-btn${filter === option.value ? " active" : ""}`}
                aria-pressed={filter === option.value}
                onClick={() => setFilter(option.value)}
              >
                {option.label} <span className="filter-count">{count}</span>
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  </div>
);
}
