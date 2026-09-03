import React from 'react'
import Image from "next/image";

const GalleryAlbum = () => {
    return (
        <div className="gallery-event reveal">
            <div className="gallery-event-head">
                <h3>Big Career Conference — Thistle Network Stall</h3>
                <span>19 March 2026 · Glasgow</span>
            </div>
            <div className="masonry">
                <Image src="https://picsum.photos/seed/thistle-event-n/600/780" alt="Thistle Network stall at the Big Career Conference" loading="lazy" />
                <Image src="https://picsum.photos/seed/thistle-event-o/600/460" alt="Committee members speaking with visitors" loading="lazy" />
                <Image src="https://picsum.photos/seed/thistle-event-p/600/600" alt="Conference attendees signing up on the day" loading="lazy" />
            </div>
        </div>
    )
}

export default GalleryAlbum