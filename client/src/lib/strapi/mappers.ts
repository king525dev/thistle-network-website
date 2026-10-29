import type { Cta, PageHeader, SocialLink } from "@/types/common";
import type { Event, EventStatus } from "@/types/event";
import type { GalleryAlbum } from "@/types/gallery";
import type { HomePageContent } from "@/types/home";
import type { NewsPost } from "@/types/news";
import type { PageContent } from "@/types/page";
import type { SiteContent } from "@/types/site";
import type { Media } from "@/types/media";
import { strapiMediaUrl } from "./client";
import type {
  StrapiCollectionResponse,
  StrapiComponent,
  StrapiCtaFields,
  StrapiEntity,
  StrapiEventFields,
  StrapiGalleryAlbumFields,
  StrapiMedia,
  StrapiNewsPostFields,
  StrapiPageFields,
  StrapiSiteSettingFields,
  StrapiSocialFields,
} from "./types";

/**
 * The only place Strapi's shape is read. Components receive the clean
 * types from types/*. Every empty field falls back to the local defaults.
 */

export function mapMedia(media: StrapiMedia | null | undefined): Media | undefined {
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

const text = (value: string | null | undefined, fallback: string) => (value ? value : fallback);

export function mapCta(cta: StrapiComponent<StrapiCtaFields> | null | undefined, fallback: Cta): Cta {
  return { text: text(cta?.text, fallback.text), link: text(cta?.link, fallback.link) };
}

export function mapSocials(
  items: StrapiComponent<StrapiSocialFields>[] | null | undefined,
  fallback: SocialLink[]
): SocialLink[] {
  if (!items || items.length === 0) return fallback;
  return items.map((item) => ({
    id: String(item.id),
    text: item.text ?? "",
    link: item.link ?? "#",
    platform: item.platform ?? "other",
  }));
}

export function mapPageHeader(
  header: StrapiComponent<{ eyebrow: string; header: string; description: string }> | null | undefined,
  fallback: PageHeader
): PageHeader {
  return {
    eyebrow: text(header?.eyebrow, fallback.eyebrow ?? ""),
    header: text(header?.header, fallback.header),
    description: text(header?.description, fallback.description ?? ""),
  };
}

export function mapEvent(entity: StrapiEntity<StrapiEventFields>, fallbackCover?: Media): Event {
  return {
    id: entity.documentId,
    title: entity.title,
    description: entity.description ?? "",
    startDate: entity.startDate,
    endDate: entity.endDate ?? undefined,
    location: entity.location ?? undefined,
    coverImage: mapMedia(entity.coverImage) ?? fallbackCover,
    registrationUrl: entity.registrationUrl ?? undefined,
    numberOfAttendees: entity.numberOfAttendees ?? 0,
    gallery: entity.gallery
      ? { id: entity.gallery.documentId, title: entity.gallery.title, fullAlbumLink: entity.gallery.fullAlbumLink ?? undefined }
      : undefined,
    cta: mapCta(entity.cta, { text: "View event", link: entity.registrationUrl ?? "#" }),
    status: (entity.eventStatus ?? "past") as EventStatus,
  };
}

export function mapGalleryAlbum(entity: StrapiEntity<StrapiGalleryAlbumFields>): GalleryAlbum {
  return {
    id: entity.documentId,
    uid: entity.uid ?? entity.documentId,
    title: entity.title,
    date: entity.date,
    tagline: entity.tagline ?? undefined,
    location: entity.location ?? undefined,
    attendeeCount: entity.attendeeCount ?? undefined,
    event: entity.event
      ? { id: entity.event.documentId, title: entity.event.title, startDate: entity.event.startDate }
      : undefined,
    fullAlbumLink: entity.fullAlbumLink ?? undefined,
    coverImage: mapMedia(entity.coverImage),
    images: (entity.images ?? []).map(mapMedia).filter((m): m is Media => m !== undefined),
  };
}

export function mapNewsPost(entity: StrapiEntity<StrapiNewsPostFields>): NewsPost {
  return {
    id: entity.documentId,
    authorHandle: entity.authorHandle,
    avatar: mapMedia(entity.avatar),
    postedAt: entity.postedAt,
    newsType: entity.newsType,
    postBody: entity.postBody,
    postImage: mapMedia(entity.postImage),
    pinned: entity.pinned ?? false,
    likeCount: entity.likeCount ?? 0,
    emojis: (entity.emojis ?? []).map((e) => ({ emoji: e.emoji ?? "", count: e.count ?? 0 })).filter((e) => e.emoji),
  };
}

export function mapHomePage(entity: StrapiHomePageRaw, d: HomePageContent): HomePageContent {
  const hero = entity.hero;
  const joinOptions = entity.joinModal?.options ?? [];
  const steps = entity.registration?.steps ?? [];
  const cards = entity.about?.aboutGrid ?? [];
  const faqItems = entity.faq?.items ?? [];

  return {
    hero: {
      tagLine: text(hero?.tagLine, d.hero.tagLine),
      header: text(hero?.header, d.hero.header),
      description: text(hero?.description, d.hero.description),
      primaryCtaText: text(hero?.primaryCtaText, d.hero.primaryCtaText),
      logo: mapMedia(hero?.heroLogo) ?? d.hero.logo,
      thistleIcon: mapMedia(hero?.thistleIcon) ?? d.hero.thistleIcon,
    },
    heroPhotos: d.heroPhotos,
    joinModal: {
      modalTitle: text(entity.joinModal?.modalTitle, d.joinModal.modalTitle),
      modalDescription: text(entity.joinModal?.modalDescription, d.joinModal.modalDescription),
      options: joinOptions.length
        ? joinOptions.map((o) => ({
            id: String(o.id),
            optionTitle: o.optionTitle ?? "",
            optionDescription: o.optionDescription ?? "",
            optionLink: o.optionLink ?? "#",
            audienceKey: o.audienceKey ?? "aspiring",
          }))
        : d.joinModal.options,
    },
    registration: {
      eyebrow: text(entity.registration?.eyebrow, d.registration.eyebrow),
      header: text(entity.registration?.header, d.registration.header),
      description: d.registration.description,
      steps: steps.length
        ? steps.map((s) => ({
            id: String(s.id),
            stepNumber: s.stepNumber ?? "",
            stepHeader: s.stepHeader ?? "",
            stepDescription: s.stepDescription ?? "",
          }))
        : d.registration.steps,
    },
    eventsSection: {
      eyebrow: text(entity.eventsSection?.eyebrow, d.eventsSection.eyebrow),
      header: text(entity.eventsSection?.header, d.eventsSection.header),
      description: text(entity.eventsSection?.description, d.eventsSection.description),
    },
    about: {
      eyebrow: text(entity.about?.eyebrow, d.about.eyebrow),
      header: text(entity.about?.header, d.about.header),
      description: text(entity.about?.description, d.about.description),
      aboutCta: mapCta(entity.about?.aboutCta, d.about.aboutCta),
      cards: cards.length
        ? cards.map((c) => ({
            id: String(c.id),
            title: c.title ?? "",
            description: c.description ?? "",
            cta: mapCta(c.cta, { text: "Learn more", link: "#" }),
          }))
        : d.about.cards,
    },
    faq: {
      eyebrow: text(entity.faq?.eyebrow, d.faq.eyebrow),
      header: text(entity.faq?.header, d.faq.header),
      description: text(entity.faq?.description, d.faq.description),
      items: faqItems.length
        ? faqItems.map((f) => ({ id: String(f.id), question: f.question ?? "", answer: f.answer ?? "" }))
        : d.faq.items,
    },
    contact: {
      eyebrow: text(entity.contact?.eyebrow, d.contact.eyebrow),
      mailLink: text(entity.contact?.mailLink, d.contact.mailLink),
      socials: mapSocials(entity.contact?.socials, d.contact.socials),
    },
    seoTitle: entity.seoTitle ?? d.seoTitle,
    seoDescription: entity.seoDescription ?? d.seoDescription,
  };
}

export type StrapiHomePageRaw = {
  hero?: StrapiComponent<import("./types").StrapiHeroFields> | null;
  joinModal?: StrapiComponent<{ modalTitle: string; modalDescription: string; options: StrapiComponent<import("./types").StrapiJoinOptionFields>[] }> | null;
  registration?: StrapiComponent<{ eyebrow: string; header: string; steps: StrapiComponent<{ stepNumber: string; stepHeader: string; stepDescription: string }>[] }> | null;
  eventsSection?: StrapiComponent<{ eyebrow: string; header: string; description: string }> | null;
  about?: StrapiComponent<{ eyebrow: string; header: string; description: string; aboutCta: StrapiComponent<StrapiCtaFields>; aboutGrid: StrapiComponent<{ title: string; description: string; cta: StrapiComponent<StrapiCtaFields> }>[] }> | null;
  faq?: StrapiComponent<{ eyebrow: string; header: string; description: string; items: StrapiComponent<{ question: string; answer: string }>[] }> | null;
  contact?: StrapiComponent<{ eyebrow: string; mailLink: string; socials: StrapiComponent<StrapiSocialFields>[] }> | null;
  seoTitle?: string | null;
  seoDescription?: string | null;
};

export function mapPage(entity: StrapiPageFields, d: PageContent): PageContent {
  return {
    header: mapPageHeader(entity.header, d.header),
    seoTitle: entity.seoTitle ?? d.seoTitle,
    seoDescription: entity.seoDescription ?? d.seoDescription,
  };
}

export function mapSiteSettings(entity: StrapiSiteSettingFields, d: SiteContent): SiteContent {
  const links = entity.navLinks ?? [];
  const columns = entity.footerColumns ?? [];
  return {
    navLogo: mapMedia(entity.navLogo) ?? d.navLogo,
    navLinks: links.length
      ? links.map((l) => ({ id: String(l.id), text: l.text ?? "", link: l.link ?? "#" }))
      : d.navLinks,
    navCta: mapCta(entity.navCta, d.navCta),
    footerLogo: mapMedia(entity.footerLogo) ?? d.footerLogo,
    footerDescription: text(entity.footerDescription, d.footerDescription),
    footerSocials: mapSocials(entity.footerSocials, d.footerSocials),
    footerColumns: columns.length
      ? columns.map((c) => ({
          id: String(c.id),
          header: c.header ?? "",
          links: (c.links ?? []).map((l) => ({ id: String(l.id), text: l.text ?? "", link: l.link ?? "#" })),
        }))
      : d.footerColumns,
  };
}

export function collection<T, R>(res: StrapiCollectionResponse<T>, map: (e: StrapiEntity<T>) => R): R[] {
  return res.data.map(map);
}
