import Hero from "@/components/home/Hero";
import Registration from "@/components/home/Registration";
import Events from "@/components/home/Events";
import About from "@/components/home/About";
import Activities from "@/components/home/Activities";
import FAQ from "@/components/home/FAQ";
import Contact from "@/components/home/Contact";
import { mockFaqItems } from "@/data/mock/faq";
import { siteConfig } from "@/data/mock/site";
import {
  getNextEvent,
  getPreviousEvent
 } from "@/lib/strapi/queries";

export default async function HomePage() {
  const upcomingEvent = await getNextEvent();
  const pastEvent = await getPreviousEvent();

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
