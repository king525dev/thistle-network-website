import type { Media } from "./media";

export type NewsType = "Announcement" | "Event";

export type NewsEmojiReaction = {
  emoji: string;
  count: number;
};

export type NewsPost = {
  id: string;
  authorHandle: string;
  authorName: string;
  avatar?: Media;
  postedAt: string;
  newsType: NewsType;
  postBody: string;
  postImage?: Media;
  pinned: boolean;
  likeCount: number;
  emojis: NewsEmojiReaction[];
};
