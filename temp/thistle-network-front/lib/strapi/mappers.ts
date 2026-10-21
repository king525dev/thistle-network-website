import type { Media } from "@/types/media";
import type { NewsPost } from "@/types/news";
import type { GalleryAlbum } from "@/types/gallery";
import type { PageContent } from "@/types/page";
import type { Cta, HomePageContent } from "@/types/home";
import { strapiMediaUrl } from "./client";
import type {
  StrapiComponent,
  StrapiCtaFields,
  StrapiEntity,
  StrapiGalleryAlbumFields,
  StrapiHomePageFields,
  StrapiMedia,
  StrapiNewsPostFields,
  StrapiSimplePageFields,
  StrapiTextItemFields,
} from "./types";

/**
 * Every function in this file takes a raw (flattened) Strapi 5 shape in
 * and returns a clean application type out. Components never do this
 * unwrapping themselves - it belongs here, in one place, so that a
 * Strapi schema change is a one-file fix.
 */

export function mapStrapiMedia(media: StrapiMedia | null | undefined): Media | undefined {
  if (!media) return undefined;
  return {
    id: media.documentId,
    url: strapiMediaUrl(media.url),
    width: media.width ?? undefined,
    height: media.height ?? undefined,
    alternativeText: media.alternativeText ?? undefined,
    caption: media.caption ?? undefined,
  };
}

export function mapStrapiNewsPost(entity: StrapiEntity<StrapiNewsPostFields>): NewsPost {
  return {
    id: entity.documentId,
    title: entity.title ?? undefined,
    body: entity.body,
    publishedAt: entity.publishedAt,
    pinned: entity.pinned ?? false,
    image: mapStrapiMedia(entity.image),
    author: entity.author
      ? {
          id: entity.author.documentId,
          name: entity.author.name,
          profileImage: mapStrapiMedia(entity.author.profileImage),
        }
      : { id: "unknown", name: "Thistle Network" },
    // Likes/reactions/comments are not Strapi content - they belong to a
    // future application backend (see PostActions/CommentSection).
    likeCount: 0,
    emojiCount: 0,
    emojis: [],
  };
}

export function mapStrapiGalleryAlbum(entity: StrapiEntity<StrapiGalleryAlbumFields>): GalleryAlbum {
  return {
    id: entity.documentId,
    title: entity.title,
    date: entity.date,
    tagline: entity.tagline ?? undefined,
    location: entity.location ?? undefined,
    attendeeCount: entity.attendeeCount ?? undefined,
    coverImage: mapStrapiMedia(entity.coverImage),
    images: (entity.images ?? [])
      .map(mapStrapiMedia)
      .filter((image): image is Media => image !== undefined),
  };
}

/* ---------- Single types: page copy ---------- */

function textOr(value: string | null | undefined, fallback: string): string {
  return value ? value : fallback;
}

function textItems(
  items: StrapiComponent<StrapiTextItemFields>[] | null | undefined,
  fallback: string[]
): string[] {
  if (!items) return fallback;
  return items.map((item) => item.text ?? "").filter(Boolean);
}

function mapCta(cta: StrapiComponent<StrapiCtaFields> | null | undefined, fallback: Cta): Cta {
  return {
    label: textOr(cta?.label, fallback.label),
    href: textOr(cta?.href, fallback.href),
  };
}

/**
 * Builds the homepage copy from the Home Page single type. Any block an
 * editor has left empty falls back to the default content, so a
 * half-filled page in Strapi never breaks the site.
 */
export function mapStrapiHomePage(
  entity: StrapiEntity<Partial<StrapiHomePageFields>>,
  defaults: HomePageContent
): HomePageContent {
  const { hero, registration, eventsSection, about, activitiesSection, committee, contactSection } = entity;

  return {
    hero: {
      eyebrow: textOr(hero?.eyebrow, defaults.hero.eyebrow),
      headline: textOr(hero?.headline, defaults.hero.headline),
      description: textOr(hero?.description, defaults.hero.description),
      primaryCta: mapCta(hero?.primaryCta, defaults.hero.primaryCta),
      secondaryCta: mapCta(hero?.secondaryCta, defaults.hero.secondaryCta),
      supportingText: textOr(hero?.supportingText, defaults.hero.supportingText),
    },
    registration: {
      eyebrow: textOr(registration?.eyebrow, defaults.registration.eyebrow),
      heading: textOr(registration?.heading, defaults.registration.heading),
      cards: registration?.cards
        ? registration.cards.map((card) => ({
            id: String(card.id),
            audienceKey: card.audienceKey ?? "aspiring",
            tag: card.tag ?? "",
            heading: card.heading ?? "",
            description: card.description ?? "",
            benefits: textItems(card.benefits, []),
            ctaLabel: textOr(card.ctaLabel, "Register to join"),
            ctaUrl: textOr(card.ctaUrl, "/#registration"),
          }))
        : defaults.registration.cards,
    },
    eventsSection: {
      eyebrow: textOr(eventsSection?.eyebrow, defaults.eventsSection.eyebrow),
      heading: textOr(eventsSection?.heading, defaults.eventsSection.heading),
    },
    about: {
      eyebrow: textOr(about?.eyebrow, defaults.about.eyebrow),
      lead: textOr(about?.lead, defaults.about.lead),
      paragraphs: textItems(about?.paragraphs, defaults.about.paragraphs),
      tagline: textOr(about?.tagline, defaults.about.tagline),
    },
    activities: {
      eyebrow: textOr(activitiesSection?.eyebrow, defaults.activities.eyebrow),
      heading: textOr(activitiesSection?.heading, defaults.activities.heading),
      items: activitiesSection?.items
        ? activitiesSection.items.map((item) => ({
            id: String(item.id),
            title: item.title ?? "",
            description: item.description ?? "",
            icon: item.icon ?? "community",
          }))
        : defaults.activities.items,
    },
    committee: {
      eyebrow: textOr(committee?.eyebrow, defaults.committee.eyebrow),
      heading: textOr(committee?.heading, defaults.committee.heading),
      blurb: textOr(committee?.blurb, defaults.committee.blurb),
    },
    contactSection: {
      eyebrow: textOr(contactSection?.eyebrow, defaults.contactSection.eyebrow),
      heading: textOr(contactSection?.heading, defaults.contactSection.heading),
    },
    seoTitle: entity.seoTitle ?? defaults.seoTitle,
    seoDescription: entity.seoDescription ?? defaults.seoDescription,
  };
}

/** Used by both the Gallery Page and News Page single types. */
export function mapStrapiPage(
  entity: StrapiEntity<Partial<StrapiSimplePageFields>>,
  defaults: PageContent
): PageContent {
  return {
    header: {
      eyebrow: entity.header?.eyebrow ?? defaults.header.eyebrow,
      title: textOr(entity.header?.title, defaults.header.title),
      description: entity.header?.description ?? defaults.header.description,
    },
    emptyMessage: textOr(entity.emptyMessage, defaults.emptyMessage),
    seoTitle: entity.seoTitle ?? defaults.seoTitle,
    seoDescription: entity.seoDescription ?? defaults.seoDescription,
  };
}
