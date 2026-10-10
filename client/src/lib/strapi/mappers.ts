import type { Media } from "@/types/media";
import type { NewsPost } from "@/types/news";
import type { GalleryAlbum } from "@/types/gallery";
import type { Event, EventStatus } from "@/types/event";
import type {
  StrapiEntity,
  StrapiMedia,
  StrapiNewsPostAttributes,
  StrapiGalleryAlbumAttributes,
  StrapiEventAttributes
} from "./types";

const STRAPI_URL = process.env.STRAPI_URL;

/**
 * Every function in this file takes a raw Strapi shape in and returns a
 * clean application type out. Components should never do this
 * unwrapping themselves - it belongs here, in one place, so that a
 * Strapi schema change is a one-file fix.
 */

export function mapStrapiMedia(media: StrapiMedia | undefined): Media | undefined {
  if (!media) return undefined;
  const { id, documentId } = media;
  return {
    id: String(id),
    uid: documentId,
    url: STRAPI_URL + media.url,
    width: media.width,
    height: media.height,
    alternativeText: media.alternativeText,
    caption: media.caption,
  };
}

export function mapStrapiNewsPost(
  entity: StrapiEntity<StrapiNewsPostAttributes>
): NewsPost {
  const { id, documentId } = entity;

  return {
    id: String(id),
    uid: documentId,
    title: entity.title,
    body: entity.body,
    publishedAt: entity.publishedAt,
    pinned: entity.pinned ?? false,
    image: mapStrapiMedia(entity.image),
    author: entity.author
      ? {
          id: String(entity.author.id),
          name: entity.author.name,
          profileImage: mapStrapiMedia(entity.author.profileImage),
        }
      : { id: "unknown", name: "Thistle Network" },
    likeCount: 0,
    emojiCount: 0,
    emojis: [],
  };
}

export function mapStrapiGalleryAlbum(
  entity: StrapiEntity<StrapiGalleryAlbumAttributes>
): GalleryAlbum {
  const { id, documentId } = entity;

  return {
    id: String(id),
    uid: documentId,
    title: entity.title,
    date: entity.date,
    tagline: entity.tagline,
    location: entity.location,
    attendeeCount: entity.attendeeCount,
    coverImage: mapStrapiMedia(entity.coverImage),
    images: (entity.images ?? []).map((image) => ({
      id: String(image.id),
      uid: image.documentId,
      url: STRAPI_URL + image.url,
      width: image.width,
      height: image.height,
      alternativeText: image.alternativeText,
      caption: image.caption,
    })),
  };
}

function mapEventStatus(status: string | undefined): EventStatus {
  switch(status){
    case "upcoming":
      return "upcoming";
    case "next":
      return "next";
    case "previous":
      return "previous";
    case "past":
      return "past";
    default:
      return "upcoming";

  }
}

export function mapStrapiEvent(
  entity: StrapiEntity<StrapiEventAttributes>
): Event {
  const { id, documentId } = entity;

  return {
    id: String(id),
    uid: documentId,
    title: entity.title,
    location: entity.location,
    startDate: entity.startDate,
    endDate: entity.endDate,
    description: entity.description,
    registrationUrl: entity.registrationUrl,
    status: mapEventStatus(entity.eventStatus),
    coverImage: mapStrapiMedia(entity.coverImage),
  };
}