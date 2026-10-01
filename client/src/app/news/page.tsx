import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import NewsFeed from "@/components/news/NewsFeed";
import { getNewsPosts } from "@/lib/strapi/queries";

export const metadata: Metadata = {
  title: "News",
  description:
    "Updates, announcements and stories from Thistle Network - the Scottish apprentice-led community.",
};

export default async function NewsPage() {
  const posts = await getNewsPosts();

  return (
    <>
      <PageHeader
        eyebrow="News & announcements"
        title="What's happening in the network."
        description="Updates from the committee, straight to your feed — react and drop a comment on anything below."
      />

      <section className="feed">
        <NewsFeed posts={posts} />
      </section>
    </>
  );
}
