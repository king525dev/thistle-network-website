import type { PageContent } from "@/types/page";

export const mockGalleryPage: PageContent = {
  header: {
    eyebrow: "Gallery",
    title: "Moments from the network.",
    description:
      "A look back at insight days, socials and meet-ups from across Scotland — new photos go up after every event.",
  },
  emptyMessage: "No events have been added to the gallery yet.",
  seoTitle: "Gallery",
  seoDescription:
    "A look back at insight days, socials and meet-ups from across Scotland - new photos go up after every Thistle Network event.",
};

export const mockNewsPage: PageContent = {
  header: {
    eyebrow: "News & announcements",
    title: "What's happening in the network.",
    description:
      "Updates from the committee, straight to your feed — react and drop a comment on anything below.",
  },
  emptyMessage: "No news yet. Check back soon for updates from the network.",
  seoTitle: "News",
  seoDescription:
    "Updates, announcements and stories from Thistle Network - the Scottish apprentice-led community.",
};
