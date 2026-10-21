import type { NewsPost } from "@/types/news";
import type { GalleryAlbum } from "@/types/gallery";
import type { PageContent } from "@/types/page";
import type { HomePageContent } from "@/types/home";
import { mockHomePage } from "@/data/mock/home";
import { mockGalleryPage, mockNewsPage } from "@/data/mock/pages";
import { StrapiError, strapiFetch } from "./client";
import {
  mapStrapiGalleryAlbum,
  mapStrapiHomePage,
  mapStrapiNewsPost,
  mapStrapiPage,
} from "./mappers";
import type {
  StrapiCollectionResponse,
  StrapiGalleryAlbumFields,
  StrapiHomePageFields,
  StrapiNewsPostFields,
  StrapiSimplePageFields,
  StrapiSingleResponse,
} from "./types";

/**
 * Routes should not call these directly - they go through
 * `lib/content.ts`, which decides between Strapi and the fallback
 * content. Note the explicit `populate` strings: Strapi 5 does NOT
 * include relations, media or components unless you ask for them.
 */

const HOME_PAGE_POPULATE = [
  "populate[hero][populate]=*",
  "populate[registration][populate][cards][populate][benefits]=true",
  "populate[eventsSection]=true",
  "populate[about][populate][paragraphs]=true",
  "populate[activitiesSection][populate][items]=true",
  "populate[committee]=true",
  "populate[contactSection]=true",
].join("&");

const SIMPLE_PAGE_POPULATE = "populate[header]=true";

/**
 * A single type that has never been saved AND published in Strapi answers
 * 404. For page copy that just means "use the default content".
 */
async function fetchSingleType<TFields>(path: string) {
  try {
    const res = await strapiFetch<StrapiSingleResponse<TFields>>(path);
    return res.data;
  } catch (error) {
    if (error instanceof StrapiError && error.status === 404) return null;
    throw error;
  }
}

export async function getHomePage(): Promise<HomePageContent> {
  const entity = await fetchSingleType<Partial<StrapiHomePageFields>>(
    `/api/home-page?${HOME_PAGE_POPULATE}`
  );
  return entity ? mapStrapiHomePage(entity, mockHomePage) : mockHomePage;
}

export async function getGalleryPage(): Promise<PageContent> {
  const entity = await fetchSingleType<Partial<StrapiSimplePageFields>>(
    `/api/gallery-page?${SIMPLE_PAGE_POPULATE}`
  );
  return entity ? mapStrapiPage(entity, mockGalleryPage) : mockGalleryPage;
}

export async function getNewsPage(): Promise<PageContent> {
  const entity = await fetchSingleType<Partial<StrapiSimplePageFields>>(
    `/api/news-page?${SIMPLE_PAGE_POPULATE}`
  );
  return entity ? mapStrapiPage(entity, mockNewsPage) : mockNewsPage;
}

export async function getNewsPosts(): Promise<NewsPost[]> {
  const res = await strapiFetch<StrapiCollectionResponse<StrapiNewsPostFields>>(
    "/api/news-posts?populate[image]=true&populate[author][populate][profileImage]=true&sort=publishedAt:desc&pagination[pageSize]=100"
  );
  return res.data.map(mapStrapiNewsPost);
}

export async function getGalleryAlbums(): Promise<GalleryAlbum[]> {
  const res = await strapiFetch<StrapiCollectionResponse<StrapiGalleryAlbumFields>>(
    "/api/gallery-albums?populate[images]=true&populate[coverImage]=true&sort=date:desc&pagination[pageSize]=100"
  );
  return res.data.map(mapStrapiGalleryAlbum);
}
