import qs from 'qs';
import type { NewsPost } from "@/types/news";
import type { GalleryAlbum } from "@/types/gallery";
import type { Event } from "@/types/event";
import { strapiFetch } from "./client";
import { 
  mapStrapiGalleryAlbum, 
  mapStrapiNewsPost ,
  mapStrapiEvent
} from "./mappers";
import type {
  StrapiCollectionResponse,
  StrapiGalleryAlbumAttributes,
  StrapiNewsPostAttributes,
  StrapiEventAttributes
} from "./types";

export async function getNewsPosts(): Promise<NewsPost[]> {

  const newsQuery = qs.stringify({
    populate: {
      image: true,
      author: {
        populate: {
          profileImage: true,
        },
      },
    },
  }, {
    encodeValuesOnly: true,
  });

  const res = await strapiFetch<StrapiCollectionResponse<StrapiNewsPostAttributes>>(
    `/api/news-posts?${newsQuery}`
  );
  
  return res.data.map(mapStrapiNewsPost);
}

export async function getGalleryAlbums(): Promise<GalleryAlbum[]> {

  const galleryQuery = qs.stringify({
    populate: {
      coverImage: true,
      images: true
    },
  }, {
    encodeValuesOnly: true,
  });

  const res = await strapiFetch<StrapiCollectionResponse<StrapiGalleryAlbumAttributes>>(
    `/api/gallery-albums?${galleryQuery}`
  );
  return res.data.map(mapStrapiGalleryAlbum);
}

export async function getEvents(): Promise<Event[]> {

  const eventQuery = qs.stringify({
    populate: {
      coverImage: true,
    },
  }, {
    encodeValuesOnly: true,
  });

  const res = await strapiFetch<StrapiCollectionResponse<StrapiEventAttributes>>(
    `/api/event?${eventQuery}`
  );
  return res.data.map(mapStrapiEvent);
}