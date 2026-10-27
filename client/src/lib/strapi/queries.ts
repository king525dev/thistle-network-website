import qs from 'qs';
import { strapiFetch, StrapiError } from "./client";
import type { 
  StrapiCollectionResponse, 
  StrapiEntity, 
  StrapiEventFields, 
  StrapiGalleryAlbumFields, 
  StrapiHeroPhotoFields, 
  StrapiHomePageFields, 
  StrapiNewsPostFields, 
  StrapiPageFields, 
  StrapiSingleResponse, 
  StrapiSiteSettingFields 
} from "./types";

// QUERIES

const HOME_PAGE_QUERY = {
  populate: {
    hero: {
      populate: {
        heroLogo: true,
        thistleIcon: true,
      },
    },

    joinModal: {
      populate: {
        options: true,
      },
    },

    registration: {
      populate: {
        steps: true,
      },
    },

    eventsSection: true,

    about: {
      populate: {
        aboutCta: true,
        aboutGrid: {
          populate: {
            cta: true,
          },
        },
      },
    },

    faq: {
      populate: {
        items: true,
      },
    },

    contact: {
      populate: {
        socials: true,
      },
    },
  },
}

const SITE_SETTINGS_QUERY = {
  populate: {
    navLogo: true,
    navLinks: true,
    navCta: true,
    footerLogo: true,
    footerSocials: true,
    footerColumns: {
      populate: { links: true },
    },
  },
};
const GALLERY_PAGE_QUERY = {
  populate: {
    header: true,
  },
};

const NEWS_PAGE_QUERY = {
  populate: {
    header: true,
  },
};

const HEROS_PHOTOS_QUERY = {
  populate: { image: true },
  sort: ['order:asc'],
  pagination: { pageSize: 100 },
};

const EVENTS_QUERY = {
  populate: {
    coverImage: true,
    cta: true,
    gallery: true,
  },
  sort: ['startDate:desc'],
  pagination: { pageSize: 100 },
};

const GALLERY_ALBUMS_QUERY = {
  populate: {
    images: true,
    coverImage: true,
    event: true,
  },
  sort: ['date:desc'],
  pagination: { pageSize: 100 },
};

const NEWS_POSTS_QUERY = {
  populate: {
    avatar: true,
    postImage: true,
    emojis: true,
  },
  sort: ['postedAt:desc'],
  pagination: { pageSize: 100 },
};

const toQueryString = (query: object) =>
  qs.stringify(query, { encodeValuesOnly: true });

async function fetchSingle<T>(path: string): Promise<T | null> {
  try {
    const res = await strapiFetch<StrapiSingleResponse<T>>(path);
    return res.data;
  } catch (error) {
    if (error instanceof StrapiError && error.status === 404) return null;
    throw error;
  }
}

export const fetchHomePage = () => fetchSingle<StrapiHomePageFields>(`/api/home-page?${toQueryString(HOME_PAGE_QUERY)}`);
export const fetchSiteSettings = () => fetchSingle<StrapiSiteSettingFields>(`/api/site-setting?${toQueryString(SITE_SETTINGS_QUERY)}`);
export const fetchGalleryPage = () => fetchSingle<StrapiPageFields>(`/api/gallery-page?${toQueryString(GALLERY_PAGE_QUERY)}`);
export const fetchNewsPage = () => fetchSingle<StrapiPageFields>(`/api/news-page?${toQueryString(NEWS_PAGE_QUERY)}`);

export async function fetchHeroPhotos(): Promise<StrapiEntity<StrapiHeroPhotoFields>[]> {
  const res = await strapiFetch<StrapiCollectionResponse<StrapiHeroPhotoFields>>(
    `/api/hero-photos?${toQueryString(HEROS_PHOTOS_QUERY)}`
  );
  return res.data;
}

export async function fetchEvents(): Promise<StrapiEntity<StrapiEventFields>[]> {
  const res = await strapiFetch<StrapiCollectionResponse<StrapiEventFields>>(
    `/api/events?${toQueryString(EVENTS_QUERY)}`
  );
  return res.data;
}

export async function fetchGalleryAlbums(): Promise<StrapiEntity<StrapiGalleryAlbumFields>[]> {
  const res = await strapiFetch<StrapiCollectionResponse<StrapiGalleryAlbumFields>>(
    `/api/gallery-albums?${toQueryString(GALLERY_ALBUMS_QUERY)}`
  );
  return res.data;
}

export async function fetchNewsPosts(): Promise<StrapiEntity<StrapiNewsPostFields>[]> {
  const res = await strapiFetch<StrapiCollectionResponse<StrapiNewsPostFields>>(
    `/api/news-posts?${toQueryString(NEWS_POSTS_QUERY)}`
  );
  return res.data;
}
