import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import GalleryAlbum from "@/components/gallery/GalleryAlbum";
import { getGalleryAlbums, getGalleryPageContent } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const { seoTitle, seoDescription } = await getGalleryPageContent();
  return { title: seoTitle ?? "Gallery", description: seoDescription };
}

export default async function GalleryPage() {
  const [page, albums] = await Promise.all([getGalleryPageContent(), getGalleryAlbums()]);

  return (
    <>
      <PageHeader {...page.header} />

      <section className="gallery-page">
        <div className="wrap gallery-albums">
          {albums.length > 0 ? (
            albums.map((album) => <GalleryAlbum key={album.id} album={album} />)
          ) : (
            <p>{page.emptyMessage}</p>
          )}
        </div>
      </section>
    </>
  );
}
