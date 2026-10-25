import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Registration from "@/components/home/Registration";
import Events from "@/components/home/Events";
import About from "@/components/home/About";
import FAQ from "@/components/home/FAQ";
import Footer from "@/components/layout/Footer";
import { getEvents, getHomeContent, getSiteContent } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const { seoTitle, seoDescription } = await getHomeContent();
  return {
    title: seoTitle ? { absolute: seoTitle } : undefined,
    description: seoDescription,
  };
}

/** Composes the homepage from its sections. All copy and images come from props. */
export default async function HomePage() {
  const [content, events, site] = await Promise.all([getHomeContent(), getEvents(), getSiteContent()]);

  return (
    <>
      <Hero content={content} />
      <Registration content={content.registration} />
      <Events content={content.eventsSection} events={events} />
      <section id="about" aria-label="About Thistle Network">
        <div className="container">
          <About content={content.about} />
          <FAQ content={content.faq} />
        </div>
      </section>
      <Footer site={site} contact={content.contact} />
    </>
  );
}
