import Header from "@/components/blocks/Header";
import GalleryPage from "@/components/blocks/GalleryPage";

export default function Home() {
  return (
    <>
      <Header 
        pageName="Gallery" 
        tagLine="Moments from the network."
        description="A look back at insight days, socials and meet-ups from across Scotland — new photos go up after every event."
        />
      <GalleryPage />
    </>
  );
}
