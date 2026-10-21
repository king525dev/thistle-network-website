import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import NewsFeed from "@/components/news/NewsFeed";
import { getNewsPageContent, getNewsPosts } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const { seoTitle, seoDescription } = await getNewsPageContent();
  return { title: seoTitle ?? "News", description: seoDescription };
}

export default async function NewsPage() {
  const [page, posts] = await Promise.all([getNewsPageContent(), getNewsPosts()]);

  return (
    <>
      <PageHeader {...page.header} />

      <section className="feed">
        <NewsFeed posts={posts} emptyMessage={page.emptyMessage} />
      </section>
    </>
  );
}
