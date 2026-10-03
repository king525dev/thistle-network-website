import type { Media } from "@/types/media";
import type { NewsPost } from "@/types/news";
import type { GalleryAlbum } from "@/types/gallery";
import type {
  StrapiEntity,
  StrapiMedia,
  StrapiNewsPostAttributes,
  StrapiGalleryAlbumAttributes,
} from "./types";

/**
 * Every function in this file takes a raw Strapi shape in and returns a
 * clean application type out. Components should never do this
 * unwrapping themselves - it belongs here, in one place, so that a
 * Strapi schema change is a one-file fix.
 */

export function mapStrapiMedia(media: StrapiMedia | undefined): Media | undefined {
  if (!media?.data) return undefined;
  const { id, attributes } = media.data;
  return {
    id: String(id),
    url: attributes.url,
    width: attributes.width,
    height: attributes.height,
    alternativeText: attributes.alternativeText,
    caption: attributes.caption,
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
    images: (entity.images?.data ?? []).map((image) => ({
      id: String(image.id),
      url: image.url,
      width: image.width,
      height: image.height,
      alternativeText: image.alternativeText,
      caption: image.caption,
    })),
  };
}
