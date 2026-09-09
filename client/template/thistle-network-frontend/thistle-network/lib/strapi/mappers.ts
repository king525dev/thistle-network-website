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
  const { id, attributes } = entity;
  const authorEntity = attributes.author?.data;

  return {
    id: String(id),
    title: attributes.title,
    body: attributes.body,
    publishedAt: attributes.publishedAt,
    pinned: attributes.pinned ?? false,
    image: mapStrapiMedia(attributes.image),
    author: authorEntity
      ? {
          id: String(authorEntity.id),
          name: authorEntity.attributes.name,
          profileImage: mapStrapiMedia(authorEntity.attributes.profileImage),
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
  const { id, attributes } = entity;

  return {
    id: String(id),
    title: attributes.title,
    date: attributes.date,
    tagline: attributes.tagline,
    location: attributes.location,
    attendeeCount: attributes.attendeeCount,
    coverImage: mapStrapiMedia(attributes.coverImage),
    images: (attributes.images?.data ?? []).map((image) => ({
      id: String(image.id),
      url: image.attributes.url,
      width: image.attributes.width,
      height: image.attributes.height,
      alternativeText: image.attributes.alternativeText,
      caption: image.attributes.caption,
    })),
  };
}
