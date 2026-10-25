import type { HomePageContent } from "@/types/home";


/**
 * Default homepage copy, taken from the uploaded index.html. Used when Strapi
 * is not configured, is unreachable, or an editor leaves a field empty.
 * Hero photos are resolved separately in lib/content.ts (local, then remote).
 */
export const mockHomePage: HomePageContent = {
  hero: {
    tagLine: "Scotland · Apprentice-led Community",
    header: "Connecting Apprentices across Scotland.",
    description:
      "Join a community of current and aspiring apprentices across Scotland. Build your network, find mentors, and make friends along the way.",
    primaryCtaText: "Join the Network",
  },
  heroPhotos: [],
  joinModal: {
    modalTitle: "Which path are you on?",
    modalDescription:
      "Select your current stage so we can match you to the right WhatsApp groups and resources.",
    options: [
      {
        id: "current",
        optionTitle: "Current Apprentice",
        optionDescription: "I'm already on the job and looking to build my network.",
        optionLink: "#",
        audienceKey: "current",
      },
      {
        id: "aspiring",
        optionTitle: "Aspiring Apprentice",
        optionDescription: "I'm at school/college and exploring apprenticeship routes.",
        optionLink: "#",
        audienceKey: "aspiring",
      },
    ],
  },
  registration: {
    eyebrow: "Getting Involved",
    header: "Registration comes first — here's why.",
    steps: [
      { id: "step-1", stepNumber: "01 / Register", stepHeader: "Tell us about you", stepDescription: "A short form — your role, location and employer or training provider, so we can point you to the right group." },
      { id: "step-2", stepNumber: "02 / Get approved", stepHeader: "We review your details", stepDescription: "Every registration is checked before access is granted, so our groups stay safe, relevant and apprentice-only." },
      { id: "step-3", stepNumber: "03 / Join WhatsApp", stepHeader: "Get your invite", stepDescription: "Once approved, you'll receive a WhatsApp invite matched to your sector and area. Direct joining isn't available without registering first." },
    ],
  } as HomePageContent["registration"],
  eventsSection: {
    eyebrow: "Thistle Network / Community Diary",
    header: "What's coming up, and what just happened.",
    description:
      "A little look back at the people, ideas and moments bringing Scotland's apprentice community together.",
  },
  about: {
    eyebrow: "Who we are",
    header: "Built by Scottish apprentices, for Scottish apprentices.",
    description:
      "Thistle Network is a Scottish apprentice community focused on connection, growth and shared opportunity. We bridge the gap between school, the workplace, and the social experience often lost by not going to university.",
    aboutCta: { text: "See the latest updates →", link: "/news" },
    cards: [
      {
        id: "offer",
        title: "What we offer",
        description:
          "From industry-specific WhatsApp groups and socials to financial literacy workshops and corporate insight days, we provide the infrastructure for apprentices to thrive personally and professionally.",
        cta: { text: "Partner with us", link: "mailto:general@thistle.network" },
      },
      {
        id: "involved",
        title: "How to get involved",
        description:
          "Whether you're just starting to explore apprenticeship routes or you're already on the job and looking for your people, registration is the first step to joining the network.",
        cta: { text: "Register to join", link: "#hero" },
      },
    ],
  },
  faq: {
    eyebrow: "Common Questions",
    header: "Frequently Asked Questions",
    description: "Everything you need to know before you join or partner with the network.",
    items: [
      { id: "who", question: "Who can join?", answer: "Any current or aspiring apprentice in Scotland aged 16–25. Employers and training providers can get involved through our partnership channels." },
      { id: "free", question: "Is it free?", answer: "Yes — joining the network and the WhatsApp groups is completely free. Some physical events may have a small ticket cost to cover venue and travel." },
      { id: "whatsapp", question: "Why can't I join WhatsApp directly?", answer: "Registration lets us check who's joining and match you to the right group by sector and location, keeping the space safe and relevant for everyone in it." },
      { id: "employers", question: "Can employers get involved?", answer: "Absolutely — through insight days, sponsorship, or hosting a stall with us. Reach out via the contact section." },
    ],
  },
  contact: {
    eyebrow: "Get in touch",
    mailLink: "general@thistle.network",
    socials: [
      { id: "linkedin", text: "LinkedIn", link: "#", platform: "linkedin" },
      { id: "instagram", text: "Instagram", link: "#", platform: "instagram" },
      { id: "tiktok", text: "TikTok", link: "#", platform: "tiktok" },
    ],
  },
  seoTitle: "Thistle Network | Scottish Apprentice Community",
  seoDescription:
    "Thistle Network is a community-led network connecting current and aspiring apprentices across Scotland.",
};

