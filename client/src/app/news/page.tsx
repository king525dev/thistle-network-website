import type { Metadata } from "next";
import PageHeader from "../../layout/PageHeader";
import NewsFeed from "@/components/news/NewsFeed";
import { getNewsContent, getSiteContent } from "@/lib/content";
import Footer from "../../layout/Footer";

export async function generateMetadata(): Promise<Metadata> {
  const { page } = await getNewsContent();
  return { title: page.seoTitle ?? "News", description: page.seoDescription };
}

export default async function NewsPage() {
  const [{ page, posts, avatarFallback }, site] = await Promise.all([getNewsContent(), getSiteContent()]);

  return (
    <>
      <PageHeader {...page.header} />
      <section className="feed">
        <NewsFeed
          posts={posts}
          fallbackAvatar={avatarFallback}
          emptyMessage="No news yet. Check back soon for updates from the network."
        />
      </section>
      <Footer site={site} />
    </>
  );
}
