import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import type { Event } from "@/types/event";

type EventsProps = {
  upcomingEvent?: Event;
  pastEvent?: Event;
};

function formatEventDate(startDate: string) {
  return new Date(startDate).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

export default function Events({ upcomingEvent, pastEvent }: EventsProps) {
  return (
    <section className="events" id="events">
      <Container>
        <div className="sec-head">
          <p className="eyebrow">Events</p>
          <h2>What&apos;s coming up, and what just happened.</h2>
        </div>

        <div className="events-grid">
          {upcomingEvent ? (
            <div className="flier">
              <span className="flier-tag">Next event</span>
              <h3>{upcomingEvent.title}</h3>
              <div className="flier-meta">
                <div>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="16" rx="2" />
                    <path d="M3 10h18M8 3v4M16 3v4" />
                  </svg>
                  {formatEventDate(upcomingEvent.startDate)}
                </div>
                {upcomingEvent.location && (
                  <div>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M12 21c-4.5-3.5-8-7-8-11a8 8 0 0 1 16 0c0 4-3.5 7.5-8 11Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {upcomingEvent.location}
                  </div>
                )}
              </div>
              <p className="desc">{upcomingEvent.description}</p>
              <Button href={upcomingEvent.registrationUrl ?? "/#registration"}>
                Register to attend
              </Button>
            </div>
          ) : (
            <div className="flier">
              <p>There are no upcoming events at the moment. Check back soon.</p>
            </div>
          )}

          {pastEvent ? (
            <div className="last-event">
              <span className="a-tag past-tag">Last event</span>
              <h3>{pastEvent.title}</h3>
              <p className="recap">{pastEvent.description}</p>
              {pastEvent.image && (
                <div className="gallery-preview">
                  <Link href="/gallery">
                    <Image
                      src={pastEvent.image.url}
                      alt={pastEvent.image.alternativeText ?? ""}
                      width={pastEvent.image.width ?? 700}
                      height={pastEvent.image.height ?? 900}
                      unoptimized
                    />
                  </Link>
                </div>
              )}
              <Button href="/gallery" variant="ghost" className="mt-lg">
                See the full gallery →
              </Button>
            </div>
          ) : (
            <div className="last-event">
              <p>No events have been added to the gallery yet.</p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
