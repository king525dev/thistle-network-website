import Image from "next/image";
import type { Media } from "@/types/media";

type GalleryImageProps = {
  image: Media;
  albumTitle: string;
  index: number;
  onOpen: (origin: HTMLButtonElement) => void;
};

/** One thumbnail. A real <button>, so it is keyboard accessible and announced correctly. */
export default function GalleryImage({ image, albumTitle, index, onOpen }: GalleryImageProps) {
  return (
    <button
      type="button"
      className="photo-frame"
      aria-label={`Open ${albumTitle} photo ${index + 1}`}
      onClick={(event) => onOpen(event.currentTarget)}
    >
      <Image
        src={image.url}
        alt={image.alternativeText ?? `${albumTitle} photo ${index + 1}`}
        width={image.width ?? 800}
        height={image.height ?? 1000}
        sizes="(max-width: 520px) 50vw, (max-width: 820px) 50vw, 33vw"
      />
    </button>
  );
}
