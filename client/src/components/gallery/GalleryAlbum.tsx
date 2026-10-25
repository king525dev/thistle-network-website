import GalleryGrid from "./GalleryGrid";
import { formatLongDate } from "@/lib/format";
import type { GalleryAlbum as GalleryAlbumType } from "@/types/gallery";

type GalleryAlbumProps = {
  album: GalleryAlbumType;
};

/** How many photos show in the grid. The full album link covers the rest. */
const PREVIEW_COUNT = 7;

/** One album: title, meta line, the photo grid and the link to the full album. */
export default function GalleryAlbum({ album }: GalleryAlbumProps) {
  const meta = [formatLongDate(album.date), album.location, album.tagline].filter(Boolean).join(" · ");

  return (
    <article className="album-wrapper reveal">
      <div className="album-header">
        <h2>{album.title}</h2>
        <span className="album-meta">{meta}</span>
      </div>

      {album.images.length > 0 ? (
        <GalleryGrid images={album.images.slice(0, PREVIEW_COUNT)} albumTitle={album.title} />
      ) : (
        <p>No photos have been added to this album yet.</p>
      )}

      <div className="album-footer">
        <a href={album.fullAlbumLink ?? "#"} className="album-btn">
          See Full Album →
        </a>
      </div>
    </article>
  );
}
