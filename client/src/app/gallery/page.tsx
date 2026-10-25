import type { Metadata } from "next";
import PageHeader from "../../layout/PageHeader";
import GalleryAlbum from "@/components/gallery/GalleryAlbum";
import { getGalleryContent, getSiteContent } from "@/lib/content";
import Footer from "../../layout/Footer";

export async function generateMetadata(): Promise<Metadata> {
  const { page } = await getGalleryContent();
  return { title: page.seoTitle ?? "Gallery", description: page.seoDescription };
}

export default async function GalleryPage() {
  const [{ page, albums }, site] = await Promise.all([getGalleryContent(), getSiteContent()]);

  return (
    <>
      <PageHeader {...page.header} />
      <section className="gallery-page">
        <div className="container gallery-albums">
          {albums.length > 0 ? (
            albums.map((album) => <GalleryAlbum key={album.id} album={album} />)
          ) : (
            <p>No events have been added to the gallery yet.</p>
          )}
        </div>
      </section>
      <Footer site={site} />
    </>
  );
}
