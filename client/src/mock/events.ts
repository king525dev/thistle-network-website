import type { Event } from "@/types/event";

export const mockEvents: Event[] = [
  {
    id: "insight-night-edinburgh-2026",
    title: "Apprentice Insight Night — Edinburgh",
    description:
      "An evening of speed-networking with employer partners, plus a short panel on switching sectors mid-apprenticeship. Open to registered apprentices only.",
    startDate: "2026-09-24T18:00:00+01:00",
    endDate: "2026-09-24T20:30:00+01:00",
    location: "Venue confirmed on registration",
    registrationUrl: "/#registration",
    status: "upcoming",
  },
  {
    id: "summer-meet-up-glasgow-2026",
    title: "Summer Meet-Up — Glasgow",
    description:
      "Over 60 apprentices came together in Glasgow for an evening of speed-networking, giveaways, and easily the loudest quiz round of the year.",
    startDate: "2026-06-28T18:00:00+01:00",
    location: "Glasgow",
    image: {
      id: "event-summer-meetup-cover",
      url: "https://picsum.photos/seed/thistle-event-a/700/900",
      width: 700,
      height: 900,
      alternativeText: "Apprentices chatting at the Glasgow summer meet-up",
    },
    status: "past",
  },
];

export function getUpcomingEvent(events: Event[] = mockEvents): Event | undefined {
  return events.find((event) => event.status === "upcoming");
}

export function getPastEvent(events: Event[] = mockEvents): Event | undefined {
  return events.find((event) => event.status === "past");
}
