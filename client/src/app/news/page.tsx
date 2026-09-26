import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import NewsFeed from "@/components/news/NewsFeed";
import { mockNewsPosts } from "@/data/mock/news";

export const metadata: Metadata = {
  title: "News",
  description:
    "Updates, announcements and stories from Thistle Network - the Scottish apprentice-led community.",
};

export default function NewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="News & announcements"
        title="What's happening in the network."
        description="Updates from the committee, straight to your feed — react and drop a comment on anything below."
      />

      <section className="feed">
        <NewsFeed posts={mockNewsPosts} />
      </section>
    </>
  );
}
