import Hero from "@/components/home/Hero";
import Registration from "@/components/home/Registration";
import Events from "@/components/home/Events";
import About from "@/components/home/About";
import Activities from "@/components/home/Activities";
import FAQ from "@/components/home/FAQ";
import Contact from "@/components/home/Contact";
import { getUpcomingEvent, getPastEvent, mockEvents } from "@/data/mock/events";
import { mockFaqItems } from "@/data/mock/faq";
import { siteConfig } from "@/data/mock/site";

export default function HomePage() {
  const upcomingEvent = getUpcomingEvent(mockEvents);
  const pastEvent = getPastEvent(mockEvents);

  return (
    <>
      <Hero />
      <Registration />
      <Events upcomingEvent={upcomingEvent} pastEvent={pastEvent} />
      <About />
      <Activities />
      <FAQ items={mockFaqItems} />
      <Contact contact={siteConfig.contact} />
    </>
  );
}
