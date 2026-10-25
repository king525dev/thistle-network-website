import type { SiteContent } from "@/types/site";

/** Navigation and footer defaults, from the uploaded pages. */
export const mockSiteContent: SiteContent = {
  navLinks: [
    { id: "about", text: "About", link: "/#about" },
    { id: "gallery", text: "Gallery", link: "/gallery" },
    { id: "news", text: "News", link: "/news" },
    { id: "contact", text: "Contact", link: "/#contact" },
  ],
  navCta: { text: "Register", link: "/#hero" },
  footerDescription: "A community-led network for current and aspiring apprentices across Scotland.",
  footerSocials: [
    { id: "email", text: "Email us", link: "mailto:general@thistle.network", platform: "email" },
    { id: "linkedin", text: "LinkedIn", link: "#", platform: "linkedin" },
    { id: "instagram", text: "Instagram", link: "#", platform: "instagram" },
  ],
  footerColumns: [
    {
      id: "network",
      header: "Network",
      links: [
        { id: "aspiring", text: "Aspiring apprentices", link: "/#hero" },
        { id: "current", text: "Current apprentices", link: "/#hero" },
        { id: "aims", text: "Our aims", link: "/#about" },
        { id: "about", text: "About the network", link: "/#about" },
      ],
    },
    {
      id: "get-involved",
      header: "Get Involved",
      links: [
        { id: "register", text: "Register to join", link: "/#hero" },
        { id: "privacy", text: "Privacy Policy", link: "#" },
        { id: "contact", text: "Contact us", link: "/#contact" },
      ],
    },
  ],
};
