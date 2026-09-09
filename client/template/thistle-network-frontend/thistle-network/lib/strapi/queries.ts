import type { NewsPost } from "@/types/news";
import type { GalleryAlbum } from "@/types/gallery";
import { strapiFetch } from "./client";
import { mapStrapiGalleryAlbum, mapStrapiNewsPost } from "./mappers";
import type {
  StrapiCollectionResponse,
  StrapiGalleryAlbumAttributes,
  StrapiNewsPostAttributes,
} from "./types";

/**
 * These are the functions a route will eventually call instead of
 * importing mock data, e.g.:
 *
 *   // before
 *   import { mockNewsPosts } from "@/data/mock/news";
 *
 *   // after
 *   import { getNewsPosts } from "@/lib/strapi/queries";
 *   const posts = await getNewsPosts();
 *
 * `NewsFeed`, `NewsPost`, `GalleryAlbum`, etc. don't change either way -
 * they only ever see `NewsPost[]` / `GalleryAlbum[]`.
 */

export async function getNewsPosts(): Promise<NewsPost[]> {
  const res = await strapiFetch<StrapiCollectionResponse<StrapiNewsPostAttributes>>(
    "/api/news-posts?populate=deep"
  );
  return res.data.map(mapStrapiNewsPost);
}

export async function getGalleryAlbums(): Promise<GalleryAlbum[]> {
  const res = await strapiFetch<StrapiCollectionResponse<StrapiGalleryAlbumAttributes>>(
    "/api/gallery-albums?populate=deep"
  );
  return res.data.map(mapStrapiGalleryAlbum);
}
