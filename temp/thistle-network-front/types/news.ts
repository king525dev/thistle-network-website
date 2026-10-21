import type { Media } from "./media";

export type NewsAuthor = {
  id: string;
  name: string;
  profileImage?: Media;
};

export type NewsComment = {
  id: string;
  author: string;
  body: string;
  createdAt?: string;
};

export type NewsPost = {
  id: string;
  author: NewsAuthor;
  publishedAt: string;
  title?: string;
  body: string;
  image?: Media;
  pinned?: boolean;
  likeCount: number;
  emojiCount: number;
  emojis?: string[];
  comments?: NewsComment[];
};
