import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Registration from "@/components/home/Registration";
import Events from "@/components/home/Events";
import About from "@/components/home/About";
import Activities from "@/components/home/Activities";
import FAQ from "@/components/home/FAQ";
import Contact from "@/components/home/Contact";
import { getHomePageContent } from "@/lib/content";
import { getUpcomingEvent, getPastEvent, mockEvents } from "@/data/mock/events";
import { mockFaqItems } from "@/data/mock/faq";
import { siteConfig } from "@/data/mock/site";

export async function generateMetadata(): Promise<Metadata> {
  const { seoTitle, seoDescription } = await getHomePageContent();
  return {
    title: seoTitle ? { absolute: seoTitle } : undefined,
    description: seoDescription,
  };
}

export default async function HomePage() {
  const content = await getHomePageContent();
  const upcomingEvent = getUpcomingEvent(mockEvents);
  const pastEvent = getPastEvent(mockEvents);

  return (
    <>
      <Hero content={content.hero} />
      <Registration content={content.registration} />
      <Events content={content.eventsSection} upcomingEvent={upcomingEvent} pastEvent={pastEvent} />
      <About content={content.about} />
      <Activities content={content.activities} />
      <FAQ items={mockFaqItems} committee={content.committee} />
      <Contact content={content.contactSection} contact={siteConfig.contact} />
    </>
  );
}
