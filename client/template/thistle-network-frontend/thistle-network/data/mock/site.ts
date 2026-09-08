import type { SiteConfig } from "@/types/site";

/**
 * Site-wide configuration: nav, footer, contact details, registration
 * destinations. This is exactly the kind of content that will move to
 * Strapi "Site Settings" first - everything here is data, not markup,
 * so components stay untouched when that happens.
 */
export const siteConfig: SiteConfig = {
  organisationName: "Thistle Network",
  tagline: "Scotland · Apprentice-led community",
  description:
    "Thistle Network brings current and aspiring apprentices together — for advice, friendship, and the social side of work that's easy to miss when you didn't go down the university route.",
  registrationLinks: {
    // Placeholder destinations for the MVP - these point at a Google Form
    // (or similar) rather than a custom registration backend.
    currentApprentice: "https://forms.gle/thistle-network-current-apprentice",
    aspiringApprentice: "https://forms.gle/thistle-network-aspiring-apprentice",
    employer: "mailto:thistlenetwork@gmail.com",
  },
  contact: {
    generalEmail: "thistlenetwork@gmail.com",
    employerEmail: "thistlenetwork@gmail.com",
    aspiringApprenticeEmail: "thistlenetwork@gmail.com",
    socialLinks: [
      {
        id: "email",
        label: "Email",
        href: "mailto:thistlenetwork@gmail.com",
        icon: "email",
      },
      {
        id: "linkedin",
        label: "LinkedIn",
        href: "https://www.linkedin.com",
        icon: "linkedin",
      },
      {
        id: "instagram",
        label: "Instagram",
        href: "https://www.instagram.com",
        icon: "instagram",
      },
    ],
  },
  navLinks: [
    { id: "home", label: "Home", href: "/" },
    { id: "gallery", label: "Gallery", href: "/gallery" },
    { id: "news", label: "News", href: "/news" },
  ],
  footerColumns: [
    {
      id: "network",
      heading: "Network",
      links: [
        { id: "aspiring", label: "Aspiring apprentices", href: "/#audience" },
        { id: "current", label: "Current apprentices", href: "/#audience" },
        { id: "aims", label: "Our aims", href: "/#about" },
        { id: "about", label: "About the committee", href: "/#about" },
      ],
    },
    {
      id: "get-involved",
      heading: "Get involved",
      links: [
        { id: "register", label: "Register to join", href: "/#registration" },
        { id: "gallery", label: "Photo gallery", href: "/gallery" },
        { id: "news", label: "News & announcements", href: "/news" },
        { id: "contact", label: "Contact us", href: "/#contact" },
      ],
    },
    {
      id: "resources",
      heading: "Resources",
      links: [
        { id: "pathways", label: "Apprenticeship pathways", href: "/#" },
        { id: "financial", label: "Financial literacy guide", href: "/#" },
        { id: "calendar", label: "Event calendar", href: "/#events" },
        { id: "contact-2", label: "Contact us", href: "/#contact" },
      ],
    },
  ],
};
