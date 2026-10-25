import type { Event } from "@/types/event";
import type { GalleryAlbum } from "@/types/gallery";
import type { HeroPhoto, HomePageContent } from "@/types/home";
import type { Media } from "@/types/media";
import type { NewsPost } from "@/types/news";
import type { PageContent } from "@/types/page";
import type { SiteContent } from "@/types/site";
import { fallbackHeroPhotos, fallbackMedia } from "@/data/mock/hero";
import { mockEvents } from "@/data/mock/events";
import { mockGalleryAlbums } from "@/data/mock/gallery";
import { mockHomePage } from "@/data/mock/home";
import { mockNewsPosts } from "@/data/mock/news";
import { mockGalleryPage, mockNewsPage } from "@/data/mock/pages";
import { mockSiteContent } from "@/data/mock/site";
import { imageOrFallback } from "@/lib/media";
import { isStrapiConfigured } from "@/lib/strapi/client";
import * as q from "@/lib/strapi/queries";
import * as m from "@/lib/strapi/mappers";

/**
 * The only door routes use for content. For every section:
 *   - if Strapi is not configured, use the local defaults;
 *   - if Strapi fails (down, misconfigured, network error), log a warning and
 *     use the local defaults, so the site never breaks because of the CMS;
 *   - inside a section, any empty field falls back to its local default.
 * Images follow the three-step chain in lib/media.ts (Strapi, local, picsum).
 * Server-only: this file is imported by Server Components.
 */

function warn(section: string, error: unknown) {
  console.warn(`[content] ${section}: using local defaults. ${error instanceof Error ? error.message : String(error)}`);
}

const LOGO_FALLBACK = "/images/logoWithText.svg";
const NAV_LOGO_FALLBACK = "/images/logoWithIconAligned.svg";
const THISTLE_ICON_FALLBACK = "/images/icon.svg";

async function resolveHeroPhotos(strapiPhotos: HeroPhoto[]): Promise<HeroPhoto[]> {
  if (strapiPhotos.length > 0) return strapiPhotos;
  return fallbackHeroPhotos.map((photo) => ({
    id: photo.id,
    caption: photo.caption,
    image: imageOrFallback({
      local: photo.local,
      remote: photo.remote,
      alt: "",
      width: photo.width,
      height: photo.height,
    })!,
  }));
}

export async function getHomeContent(): Promise<HomePageContent> {
  const defaults: HomePageContent = { ...mockHomePage, heroPhotos: [] };
  const base = { ...defaults, heroPhotos: await resolveHeroPhotos([]) };
  let content: HomePageContent = base;

  if (isStrapiConfigured()) {
    try {
      const [home, photos] = await Promise.all([q.fetchHomePage(), q.fetchHeroPhotos()]);
      const heroPhotos = photos
        .filter((p) => p.image)
        .map((p) => ({ id: p.documentId, caption: p.caption ?? "", image: m.mapMedia(p.image)! }));
      const mapped = home ? m.mapHomePage(home, defaults) : defaults;
      content = { ...mapped, heroPhotos: await resolveHeroPhotos(heroPhotos) };
    } catch (error) {
      warn("home page", error);
    }
  }

  return {
    ...content,
    hero: {
      ...content.hero,
      logo: imageOrFallback({ strapi: content.hero.logo, local: LOGO_FALLBACK, alt: "Thistle Network", width: 1311, height: 430 }),
      thistleIcon: imageOrFallback({ strapi: content.hero.thistleIcon, local: THISTLE_ICON_FALLBACK, alt: "", width: 340, height: 379 }),
    },
  };
}

export async function getSiteContent(): Promise<SiteContent> {
  let site: SiteContent = mockSiteContent;
  if (isStrapiConfigured()) {
    try {
      const raw = await q.fetchSiteSettings();
      if (raw) site = m.mapSiteSettings(raw, mockSiteContent);
    } catch (error) {
      warn("site settings", error);
    }
  }
  return {
    ...site,
    navLogo: imageOrFallback({ strapi: site.navLogo, local: NAV_LOGO_FALLBACK, alt: "Thistle Network home", width: 2005, height: 379 }),
    footerLogo: imageOrFallback({ strapi: site.footerLogo, local: NAV_LOGO_FALLBACK, alt: "Thistle Network", width: 2005, height: 379 }),
  };
}

const EVENT_COVER_LOCAL = "/images/fallback/event-placeholder.png";

function eventCoverFallback(seed: string, title: string): Media | undefined {
  return imageOrFallback({
    local: EVENT_COVER_LOCAL,
    remote: `https://picsum.photos/seed/${seed}/800/1000`,
    alt: title,
    width: 800,
    height: 1000,
  });
}

export async function getEvents(): Promise<Event[]> {
  const fromLocal = () =>
    mockEvents.map((event) => ({ ...event, coverImage: eventCoverFallback(event.id, event.title) }));
  if (!isStrapiConfigured()) return fromLocal();
  try {
    const raw = await q.fetchEvents();
    if (raw.length === 0) return fromLocal();
    return raw.map((e) => m.mapEvent(e, eventCoverFallback(e.documentId, e.title)));
  } catch (error) {
    warn("events", error);
    return fromLocal();
  }
}

export async function getGalleryContent(): Promise<{ page: PageContent; albums: GalleryAlbum[] }> {
  let page = mockGalleryPage;
  let albums = mockGalleryAlbums;
  if (isStrapiConfigured()) {
    try {
      const [raw, rawAlbums] = await Promise.all([q.fetchGalleryPage(), q.fetchGalleryAlbums()]);
      if (raw) page = m.mapPage(raw, mockGalleryPage);
      if (rawAlbums.length > 0) albums = rawAlbums.map(m.mapGalleryAlbum);
    } catch (error) {
      warn("gallery", error);
    }
  }
  return { page, albums };
}

export async function getNewsContent(): Promise<{ page: PageContent; posts: NewsPost[]; avatarFallback: Media | undefined }> {
  let page = mockNewsPage;
  let posts = mockNewsPosts;
  if (isStrapiConfigured()) {
    try {
      const [raw, rawPosts] = await Promise.all([q.fetchNewsPage(), q.fetchNewsPosts()]);
      if (raw) page = m.mapPage(raw, mockNewsPage);
      if (rawPosts.length > 0) posts = rawPosts.map(m.mapNewsPost);
    } catch (error) {
      warn("news", error);
    }
  }
  const avatarFallback = imageOrFallback({ local: THISTLE_ICON_FALLBACK, alt: "Thistle Network", width: 340, height: 379 });
  return { page, posts, avatarFallback };
}

export { fallbackMedia };
