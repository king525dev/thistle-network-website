import type { Media } from "./media";

export type GalleryEventSummary = {
  id: string;
  title: string;
  startDate: string;
};

export type GalleryAlbum = {
  id: string;
  uid: string;
  title: string;
  date: string;
  tagline?: string;
  location?: string;
  attendeeCount?: number;
  event?: GalleryEventSummary;
  fullAlbumLink?: string;
  coverImage?: Media;
  images: Media[];
};
