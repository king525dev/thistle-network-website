import type { Media } from "./media";

export type EventStatus = "upcoming" | "next" | "previous" | "past";

export type Event = {
  id: string;
  uid: string;
  title: string;
  description: string;
  startDate: string;
  endDate?: string;
  location?: string;
  coverImage?: Media;
  registrationUrl?: string;
  status?: EventStatus;
};
