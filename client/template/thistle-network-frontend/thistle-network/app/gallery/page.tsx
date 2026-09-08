import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import GalleryAlbum from "@/components/gallery/GalleryAlbum";
import { mockGalleryAlbums } from "@/data/mock/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A look back at insight days, socials and meet-ups from across Scotland - new photos go up after every Thistle Network event.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Moments from the network."
        description="A look back at insight days, socials and meet-ups from across Scotland — new photos go up after every event."
      />

      <section className="gallery-page">
        <div className="wrap gallery-albums">
          {mockGalleryAlbums.length > 0 ? (
            mockGalleryAlbums.map((album) => <GalleryAlbum key={album.id} album={album} />)
          ) : (
            <p>No events have been added to the gallery yet.</p>
          )}
        </div>
      </section>
    </>
  );
}
