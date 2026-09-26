import type { Media } from "./media";

export type EventStatus = "upcoming" | "past";

export type Event = {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate?: string;
  location?: string;
  image?: Media;
  registrationUrl?: string;
  status?: EventStatus;
};
