"use client";

import { useEffect, useRef } from "react";
import type { Media } from "@/types/media";

type GalleryLightboxProps = {
  images: Media[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

/**
 * Accessible modal image viewer. The only heavily-interactive piece of
 * the Gallery page: handles Escape/close, previous/next, keeps focus
 * inside the dialog, and restores focus on close.
 */
export default function GalleryLightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: GalleryLightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerElementRef = useRef<Element | null>(null);
  const image = images[index];

  useEffect(() => {
    triggerElementRef.current = document.activeElement;
    closeButtonRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
      if (triggerElementRef.current instanceof HTMLElement) {
        triggerElementRef.current.focus();
      }
    };
  }, []);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "ArrowRight") onNext();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onPrev, onNext]);

  if (!image) return null;

  return (
    <div
      className="lightbox open"
      role="dialog"
      aria-modal="true"
      aria-label={image.caption ?? image.alternativeText ?? "Gallery image"}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <button ref={closeButtonRef} type="button" className="lightbox-close" onClick={onClose} aria-label="Close">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
      </button>

      {images.length > 1 && (
        <button type="button" className="lightbox-nav lightbox-prev" onClick={onPrev} aria-label="Previous image">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
      )}

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image.url}
        alt={image.alternativeText ?? ""}
        className="lightbox-img"
      />

      {image.caption && <p className="lightbox-caption">{image.caption}</p>}

      {images.length > 1 && (
        <button type="button" className="lightbox-nav lightbox-next" onClick={onNext} aria-label="Next image">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      )}
    </div>
  );
}
