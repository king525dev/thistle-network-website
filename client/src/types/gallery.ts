import type { Media } from "./media";

export type GalleryAlbum = {
  id: string;
  uid: string;
  title: string;
  date: string;
  tagline?: string;
  location?: string;
  attendeeCount?: number;
  coverImage?: Media;
  images: Media[];
};
