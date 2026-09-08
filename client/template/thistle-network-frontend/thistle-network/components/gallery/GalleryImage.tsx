import Image from "next/image";
import type { Media } from "@/types/media";

type GalleryImageProps = {
  image: Media;
  onOpen: () => void;
};

/**
 * A single clickable thumbnail. Presentational - the click handler and
 * any open/close state live in the parent (`GalleryGrid`).
 */
export default function GalleryImage({ image, onOpen }: GalleryImageProps) {
  return (
    <button
      type="button"
      className="gallery-image"
      onClick={onOpen}
      aria-label={`Open larger image: ${image.alternativeText ?? "gallery photo"}`}
    >
      <Image
        src={image.url}
        alt={image.alternativeText ?? ""}
        width={image.width ?? 600}
        height={image.height ?? 600}
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px"
        unoptimized
      />
    </button>
  );
}
