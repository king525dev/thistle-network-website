import Header from "@/components/blocks/Header";
import Gallery from "@/components/blocks/Gallery";

export default function Home() {
  return (
    <>
      <Header 
        pageName="Gallery" 
        tagLine="Moments from the network."
        description="A look back at insight days, socials and meet-ups from across Scotland — new photos go up after every event."
        />
      <Gallery />
    </>
  );
}
