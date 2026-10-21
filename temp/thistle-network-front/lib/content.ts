import type { GalleryAlbum } from "@/types/gallery";
import type { HomePageContent } from "@/types/home";
import type { NewsPost } from "@/types/news";
import type { PageContent } from "@/types/page";
import { mockGalleryAlbums } from "@/data/mock/gallery";
import { mockHomePage } from "@/data/mock/home";
import { mockNewsPosts } from "@/data/mock/news";
import { mockGalleryPage, mockNewsPage } from "@/data/mock/pages";
import { isStrapiConfigured } from "@/lib/strapi/client";
import * as strapi from "@/lib/strapi/queries";

/**
 * The only place routes get their content from. If STRAPI_URL is set the
 * content comes from Strapi, otherwise from the built-in fallback data,
 * so the site still runs without a CMS (handy for design work).
 */

export async function getHomePageContent(): Promise<HomePageContent> {
  return isStrapiConfigured() ? strapi.getHomePage() : mockHomePage;
}

export async function getGalleryPageContent(): Promise<PageContent> {
  return isStrapiConfigured() ? strapi.getGalleryPage() : mockGalleryPage;
}

export async function getNewsPageContent(): Promise<PageContent> {
  return isStrapiConfigured() ? strapi.getNewsPage() : mockNewsPage;
}

export async function getNewsPosts(): Promise<NewsPost[]> {
  return isStrapiConfigured() ? strapi.getNewsPosts() : mockNewsPosts;
}

export async function getGalleryAlbums(): Promise<GalleryAlbum[]> {
  return isStrapiConfigured() ? strapi.getGalleryAlbums() : mockGalleryAlbums;
}
