import EventCarousel from "@/components/events/EventCarousel";
import { arrangeEvents, startingIndex } from "@/lib/event-order";
import type { Event } from "@/types/event";
import type { EventsSectionContent } from "@/types/home";

type EventsProps = {
  content: EventsSectionContent;
  events: Event[];
};

/**
 * The events section header (server-rendered) and the carousel (client). The
 * events are ordered on the server, so the first paint already shows the
 * right slide in the middle.
 */
export default function Events({ content, events }: EventsProps) {
  const ordered = arrangeEvents(events);
  return (
    <section id="events" className="section-container">
      <header className="section-header">
        <span className="eyebrow">{content.eyebrow}</span>
        <h2>{content.header}</h2>
        <p className="section-intro">{content.description}</p>
      </header>
      <EventCarousel events={ordered} startIndex={startingIndex(ordered)} />
    </section>
  );
}
