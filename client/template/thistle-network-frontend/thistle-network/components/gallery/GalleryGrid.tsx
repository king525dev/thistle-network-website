"use client";

import { useCallback, useState } from "react";
import type { Media } from "@/types/media";
import GalleryImage from "./GalleryImage";
import GalleryLightbox from "./GalleryLightbox";
import { trackEvent } from "@/lib/analytics/events";

type GalleryGridProps = {
  images: Media[];
  albumTitle: string;
};

export default function GalleryGrid({ images, albumTitle }: GalleryGridProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const open = useCallback(
    (index: number) => {
      setOpenIndex(index);
      trackEvent("gallery_image_opened", { album: albumTitle, index });
    },
    [albumTitle]
  );

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(
    () => setOpenIndex((current) => (current === null ? null : (current - 1 + images.length) % images.length)),
    [images.length]
  );
  const next = useCallback(
    () => setOpenIndex((current) => (current === null ? null : (current + 1) % images.length)),
    [images.length]
  );

  return (
    <>
      <div className="masonry">
        {images.map((image, index) => (
          <GalleryImage key={image.id} image={image} onOpen={() => open(index)} />
        ))}
      </div>

      {openIndex !== null && (
        <GalleryLightbox images={images} index={openIndex} onClose={close} onPrev={prev} onNext={next} />
      )}
    </>
  );
}
