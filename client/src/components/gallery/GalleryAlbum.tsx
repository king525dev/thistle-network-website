import type { GalleryAlbum as GalleryAlbumType } from "@/types/gallery";
import GalleryGrid from "./GalleryGrid";

type GalleryAlbumProps = {
  album: GalleryAlbumType;
};

function formatAlbumDate(date: string) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function GalleryAlbum({ album }: GalleryAlbumProps) {
  const metaParts = [
    formatAlbumDate(album.date),
    album.location,
    album.tagline ?? (album.attendeeCount ? `${album.attendeeCount}+ attendees` : undefined),
  ].filter(Boolean);

  return (
    <article className="gallery-event">
      <div className="gallery-event-head">
        <h2>{album.title}</h2>
        <span>{metaParts.join(" · ")}</span>
      </div>

      {album.images.length > 0 ? (
        <GalleryGrid images={album.images} albumTitle={album.title} />
      ) : (
        <p>No photos have been added to this album yet.</p>
      )}
    </article>
  );
}
