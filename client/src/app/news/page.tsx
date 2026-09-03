import Header from "@/components/blocks/Header";
import NewsFeed from "@/components/blocks/NewsFeed";

export default function Home() {
  return (
    <>
      <Header
        pageName="News &amp; announcements"
        tagLine="What's happening in the network."
        description="pdates from the committee, straight to your feed — react and drop a comment on anything below."
      />
      <NewsFeed />
    </>
  );
}
