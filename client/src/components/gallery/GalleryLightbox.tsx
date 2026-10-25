"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import Icon from "@/components/ui/Icon";
import type { Media } from "@/types/media";

type GalleryLightboxProps = {
  images: Media[];
  index: number;
  origin: HTMLElement | null;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

const EASING = "cubic-bezier(0.2, 0.8, 0.2, 1)";

/**
 * Full-screen photo viewer, ported from the uploaded gallery_1.html (FLIP animation:
 * the photo grows out of the thumbnail and shrinks back into it).
 *
 * Built on the native <dialog>: showModal() traps focus and makes the page
 * inert, and Escape goes through `cancel`, which lets us play the close animation
 * first. Reduced-motion users get an instant open and close.
 */
export default function GalleryLightbox({ images, index, origin, onClose, onIndexChange }: GalleryLightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const closing = useRef(false);
  const media = images[index];

  const reduceMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Open: show the dialog, then animate the image from the thumbnail's position.
  useLayoutEffect(() => {
    const dialog = dialogRef.current;
    const image = imageRef.current;
    if (!dialog || !image) return;
    dialog.showModal();

    if (origin && origin.isConnected && !reduceMotion() && image.getBoundingClientRect().width > 0) {
      const first = origin.getBoundingClientRect();
      const last = image.getBoundingClientRect();
      const scale = Math.max(first.width / last.width, first.height / last.height);
      const dx = first.left + first.width / 2 - (last.left + last.width / 2);
      const dy = first.top + first.height / 2 - (last.top + last.height / 2);
      image.animate(
        [
          { transform: `translate(${dx}px, ${dy}px) scale(${scale})`, opacity: 0.5, borderRadius: "4px" },
          { transform: "translate(0, 0) scale(1)", opacity: 1, borderRadius: "8px" },
        ],
        { duration: 400, easing: EASING }
      );
    }

    return () => {
      if (dialog.open) dialog.close();
    };
    // Runs once, when the viewer opens. Later photos only swap the src.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Lock page scroll while the viewer is open.
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  const requestClose = () => {
    const dialog = dialogRef.current;
    const image = imageRef.current;
    if (closing.current || !dialog || !image) return;
    closing.current = true;

    if (!origin || !origin.isConnected || reduceMotion()) {
      onClose();
      return;
    }
    const first = image.getBoundingClientRect();
    const last = origin.getBoundingClientRect();
    const scale = Math.max(last.width / first.width, last.height / first.height);
    const dx = last.left + last.width / 2 - (first.left + first.width / 2);
    const dy = last.top + last.height / 2 - (first.top + first.height / 2);
    const animation = image.animate(
      [
        { transform: "translate(0, 0) scale(1)", opacity: 1, borderRadius: "8px" },
        { transform: `translate(${dx}px, ${dy}px) scale(${scale})`, opacity: 0, borderRadius: "4px" },
      ],
      { duration: 300, easing: EASING, fill: "forwards" }
    );
    animation.onfinish = onClose;
  };

  const step = (direction: 1 | -1) => {
    onIndexChange((index + direction + images.length) % images.length);
  };

  if (!media) return null;

  return (
    <dialog
      ref={dialogRef}
      className="lightbox open"
      aria-label={`${media.alternativeText ?? "Gallery photo"} (${index + 1} of ${images.length})`}
      onCancel={(event) => {
        event.preventDefault();
        requestClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) requestClose();
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") step(-1);
        if (event.key === "ArrowRight") step(1);
      }}
    >
      <button className="lightbox-close" id="lightboxClose" type="button" aria-label="Close photo viewer" onClick={requestClose} autoFocus>
        <Icon name="lightboxClose" />
      </button>

      {images.length > 1 && (
        <>
          <button className="lightbox-nav lightbox-prev" type="button" aria-label="Previous photo" onClick={() => step(-1)}>
            ‹
          </button>
          <button className="lightbox-nav lightbox-next" type="button" aria-label="Next photo" onClick={() => step(1)}>
            ›
          </button>
        </>
      )}

      {/* eslint-disable-next-line @next/next/no-img-element -- the FLIP animation needs a plain <img> with a live transform */}
      <img ref={imageRef} id="lightboxImg" className="lightbox-img" src={media.url} alt={media.alternativeText ?? ""} />

      {media.caption && <p className="lightbox-caption">{media.caption}</p>}
    </dialog>
  );
}
