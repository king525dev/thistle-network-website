import type { StrapiCollectionResponse, StrapiEntity, StrapiEventFields, StrapiGalleryAlbumFields, StrapiHeroPhotoFields, StrapiHomePageFields, StrapiNewsPostFields, StrapiPageFields, StrapiSingleResponse, StrapiSiteSettingFields } from "./types";
import { strapiFetch, StrapiError } from "./client";

/**
 * Raw requests only. Routes never call these: they go through lib/content.ts.
 * Strapi 5 returns no relations, media or components unless asked, so every
 * request spells out its `populate`.
 */

const HOME_POPULATE = [
  "populate[hero][populate]=*",
  "populate[joinModal][populate][options]=true",
  "populate[registration][populate][steps]=true",
  "populate[eventsSection]=true",
  "populate[about][populate][aboutCta]=true",
  "populate[about][populate][aboutGrid][populate][cta]=true",
  "populate[faq][populate][items]=true",
  "populate[contact][populate][socials]=true",
].join("&");

const SITE_POPULATE = [
  "populate[navLogo]=true",
  "populate[navLinks]=true",
  "populate[navCta]=true",
  "populate[footerLogo]=true",
  "populate[footerSocials]=true",
  "populate[footerColumns][populate][links]=true",
].join("&");

async function fetchSingle<T>(path: string): Promise<T | null> {
  try {
    const res = await strapiFetch<StrapiSingleResponse<T>>(path);
    return res.data;
  } catch (error) {
    if (error instanceof StrapiError && error.status === 404) return null;
    throw error;
  }
}

export const fetchHomePage = () => fetchSingle<StrapiHomePageFields>(`/api/home-page?${HOME_POPULATE}`);
export const fetchSiteSettings = () => fetchSingle<StrapiSiteSettingFields>(`/api/site-setting?${SITE_POPULATE}`);
export const fetchGalleryPage = () => fetchSingle<StrapiPageFields>(`/api/gallery-page?populate[header]=true`);
export const fetchNewsPage = () => fetchSingle<StrapiPageFields>(`/api/news-page?populate[header]=true`);

export async function fetchHeroPhotos(): Promise<StrapiEntity<StrapiHeroPhotoFields>[]> {
  const res = await strapiFetch<StrapiCollectionResponse<StrapiHeroPhotoFields>>(
    "/api/hero-photos?populate[image]=true&sort=order:asc&pagination[pageSize]=100"
  );
  return res.data;
}

export async function fetchEvents(): Promise<StrapiEntity<StrapiEventFields>[]> {
  const res = await strapiFetch<StrapiCollectionResponse<StrapiEventFields>>(
    "/api/events?populate[coverImage]=true&populate[cta]=true&populate[gallery]=true&sort=startDate:desc&pagination[pageSize]=100"
  );
  return res.data;
}

export async function fetchGalleryAlbums(): Promise<StrapiEntity<StrapiGalleryAlbumFields>[]> {
  const res = await strapiFetch<StrapiCollectionResponse<StrapiGalleryAlbumFields>>(
    "/api/gallery-albums?populate[images]=true&populate[coverImage]=true&populate[event]=true&sort=date:desc&pagination[pageSize]=100"
  );
  return res.data;
}

export async function fetchNewsPosts(): Promise<StrapiEntity<StrapiNewsPostFields>[]> {
  const res = await strapiFetch<StrapiCollectionResponse<StrapiNewsPostFields>>(
    "/api/news-posts?populate[avatar]=true&populate[postImage]=true&populate[emojis]=true&sort=postedAt:desc&pagination[pageSize]=100"
  );
  return res.data;
}
