import type { Media } from "@/types/media";

/**
 * Fallback Hero Photos, used only when Strapi has no Hero Photo entries.
 * `local` is tried first (public/images/fallback); `remote` is the last resort.
 * The position in this array decides the frame style (polaroid or taped).
 */
export type FallbackHeroPhoto = {
  id: string;
  caption: string;
  order: number;
  local: string;
  remote: string;
  width: number;
  height: number;
};

export const fallbackHeroPhotos: FallbackHeroPhoto[] = [{"id": "hero-1", "caption": "GLASGOW / 2026", "order": 1, "local": "/images/fallback/hero-placeholder-1.png", "remote": "https://picsum.photos/seed/thistle1/400/500", "width": 400, "height": 500}, {"id": "hero-2", "caption": "THISTLE NETWORK", "order": 2, "local": "/images/fallback/hero-placeholder-2.png", "remote": "https://picsum.photos/seed/thistle2/500/600", "width": 500, "height": 600}, {"id": "hero-3", "caption": "DUNDEE / 2026", "order": 3, "local": "/images/fallback/hero-placeholder-3.png", "remote": "https://picsum.photos/seed/thistle3/600/400", "width": 600, "height": 400}, {"id": "hero-4", "caption": "THISTLE NETWORK", "order": 4, "local": "/images/fallback/hero-placeholder-4.png", "remote": "https://picsum.photos/seed/thistle4/400/500", "width": 400, "height": 500}, {"id": "hero-5", "caption": "THISTLE NETWORK", "order": 5, "local": "/images/fallback/hero-placeholder-5.png", "remote": "https://picsum.photos/seed/thistle5/400/600", "width": 400, "height": 600}, {"id": "hero-6", "caption": "INSIGHT DAY / EY", "order": 6, "local": "/images/fallback/hero-placeholder-6.png", "remote": "https://picsum.photos/seed/thistle6/600/400", "width": 600, "height": 400}, {"id": "hero-7", "caption": "THISTLE NETWORK", "order": 7, "local": "/images/fallback/hero-placeholder-7.png", "remote": "https://picsum.photos/seed/thistle7/400/500", "width": 400, "height": 500}, {"id": "hero-8", "caption": "EDINBURGH / 2025", "order": 8, "local": "/images/fallback/hero-placeholder-8.png", "remote": "https://picsum.photos/seed/thistle8/500/400", "width": 500, "height": 400}] as FallbackHeroPhoto[];

export function fallbackMedia(photo: FallbackHeroPhoto): Media {
  return { id: photo.id, url: photo.local, width: photo.width, height: photo.height, alternativeText: "" };
}
