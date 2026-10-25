import Image from "next/image";
import type { HeroPhoto } from "@/types/home";

/** Frame style is decided by position, as in the upload: 1 = polaroid, 2 = taped, and so on. */
const FRAMES = [
  "frame-polaroid",
  "frame-taped-grid",
  "frame-polaroid",
  "frame-taped-grid",
  "frame-taped-grid",
  "frame-polaroid",
  "frame-taped-grid",
  "frame-polaroid",
] as const;

const TAPES: Record<number, string> = {
  1: "tape-top-left",
  2: "tape-bottom-right",
  3: "tape-top-left",
  5: "tape-bottom-right",
  6: "tape-top-left",
  7: "tape-top-left",
};

type HeroPhotoScatterProps = {
  photos: HeroPhoto[];
};

/**
 * Up to eight scattered polaroids, ordered by the Hero Photo `order` field.
 * Decorative, so the captions are in data attributes and the images have alt="".
 */
export default function HeroPhotoScatter({ photos }: HeroPhotoScatterProps) {
  return (
    <div className="photo-scatter" aria-hidden="true">
      {photos.slice(0, 8).map((photo, index) => {
        const position = index + 1;
        const tape = TAPES[position];
        return (
          <div key={photo.id} className={`photo-wrapper p${position} ${FRAMES[index]}`} data-caption={photo.caption}>
            {tape && <div className={`tape ${tape}`} />}
            <Image
              src={photo.image.url}
              alt=""
              width={photo.image.width ?? 400}
              height={photo.image.height ?? 500}
              sizes="(max-width: 640px) 40vw, 260px"
            />
          </div>
        );
      })}
    </div>
  );
}
