'use client';

import { useEffect, useState, useCallback } from 'react';
import Header from "@/components/blocks/Header";
import Gallery from "@/components/blocks/Gallery";
import Image from 'next/image';

export default function GalleryPageClient() {
    const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

    // Close lightbox on Escape key
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') setLightboxSrc(null);
    }, []);

    useEffect(() => {
        // Reveal on scroll
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in');
                        io.unobserve(entry.target); // animate once
                    }
                });
            },
            { threshold: 0.1 }
        );
        document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

        // Lightbox click handlers
        const handleImageClick = (e: MouseEvent) => {
            const img = e.target as HTMLImageElement;
            if (img.classList.contains('masonry-img')) {
                setLightboxSrc(img.src);
            }
        };
        document.querySelectorAll<HTMLImageElement>('.masonry-img').forEach((img) => {
            img.addEventListener('click', handleImageClick);
        });

        document.addEventListener('keydown', handleKeyDown);

        // Cleanup
        return () => {
            io.disconnect();
            document.querySelectorAll<HTMLImageElement>('.masonry-img').forEach((img) => {
                img.removeEventListener('click', handleImageClick);
            });
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    return (
        <>
            <Header
                pageName="Gallery"
                tagLine="Moments from the network."
                description="A look back at insight days, socials and meet-ups from across Scotland — new photos go up after every event."
            />
            <Gallery />

            {/* Lightbox */}
            {lightboxSrc && (
                <div className="lightbox open" onClick={() => setLightboxSrc(null)}>
                    <button
                        className="lightbox-close"
                        onClick={(e) => {
                            e.stopPropagation();
                            setLightboxSrc(null);
                        }}
                        aria-label="Close"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M6 6l12 12M18 6 6 18" />
                        </svg>
                    </button>
                    <Image src={lightboxSrc} alt="Enlarged view" />
                </div>
            )}
        </>
    );
}