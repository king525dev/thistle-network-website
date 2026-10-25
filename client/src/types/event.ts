import type { Cta, } from "./common";
import type { Media } from "./media";

export type EventStatus = "upcoming" | "next" | "previous" | "past";

export type EventGallerySummary = {
  id: string;
  title: string;
  fullAlbumLink?: string;
};

export type Event = {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate?: string;
  location?: string;
  coverImage?: Media;
  registrationUrl?: string;
  numberOfAttendees: number;
  gallery?: EventGallerySummary;
  cta: Cta;
  status: EventStatus;
};
