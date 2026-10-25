"use client";

import { useState } from "react";
import type { Media } from "@/types/media";
import GalleryImage from "./GalleryImage";
import GalleryLightbox from "./GalleryLightbox";
import { trackEvent } from "@/lib/analytics/events";

type GalleryGridProps = {
  images: Media[];
  albumTitle: string;
};

/**
 * The photo grid for one album. It owns the lightbox state and remembers the
 * clicked thumbnail, so the lightbox can animate from it.
 */
export default function GalleryGrid({ images, albumTitle }: GalleryGridProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [origin, setOrigin] = useState<HTMLElement | null>(null);

  return (
    <>
      <div className="masonry-grid">
        {images.map((image, index) => (
          <GalleryImage
            key={image.id}
            image={image}
            albumTitle={albumTitle}
            index={index}
            onOpen={(element) => {
              setOrigin(element);
              setOpenIndex(index);
              trackEvent("gallery_image_opened", { album: albumTitle, index });
            }}
          />
        ))}
      </div>

      {openIndex !== null && (
        <GalleryLightbox
          images={images}
          index={openIndex}
          origin={origin}
          onIndexChange={setOpenIndex}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </>
  );
}
