import type { HomePageContent } from "@/types/home";
import { siteConfig } from "./site";

/**
 * Default homepage copy. It is used when Strapi is not configured, and
 * as the fallback for any block an editor leaves empty in Strapi.
 */
export const mockHomePage: HomePageContent = {
  hero: {
    eyebrow: siteConfig.tagline,
    headline: "Connecting apprentices across Scotland",
    description: siteConfig.description,
    primaryCta: { label: "Register to join", href: "/#registration" },
    secondaryCta: { label: "See our events", href: "/#events" },
    supportingText: "Free to join · WhatsApp access is granted after registration",
  },
  registration: {
    eyebrow: "Two paths, one network",
    heading: "Whichever stage you're at, there's a place here.",
    cards: [
      {
        id: "aspiring",
        audienceKey: "aspiring",
        tag: "For Aspiring Apprentices",
        heading: "Get application-ready",
        description:
          "Still at school or college and weighing up an apprenticeship? Get the insight, mentoring and confidence to apply well.",
        benefits: [
          "Apprenticeship-focused insight days with Scottish employers",
          "Mentoring and mock interviews from current apprentices",
          "Clear, honest guidance on pathways and providers",
        ],
        ctaLabel: "Register to join",
        ctaUrl: siteConfig.registrationLinks.aspiringApprentice,
      },
      {
        id: "current",
        audienceKey: "current",
        tag: "For Current Apprentices",
        heading: "Find your people",
        description:
          "Already on the job? Get matched to a WhatsApp group by industry and location, plus the social side university apprentices often miss out on.",
        benefits: [
          "Industry and regional WhatsApp groups",
          "Socials, trips and meet-ups across Scotland",
          "Financial literacy sessions built for early earners",
        ],
        ctaLabel: "Register to join",
        ctaUrl: siteConfig.registrationLinks.currentApprentice,
      },
    ],
  },
  eventsSection: {
    eyebrow: "Events",
    heading: "What's coming up, and what just happened.",
  },
  about: {
    eyebrow: "Who we are",
    lead: "Thistle Network is a Scottish apprentice community focused on connection, growth and shared opportunity.",
    paragraphs: [
      "We bring apprentices together across industries, universities and training providers to build confidence, expand networks and create a supportive space for early talent in Scotland.",
      "Our aim is to make apprenticeships feel connected rather than isolated. Through meet-ups, peer support and collaborative events, we help apprentices develop personally and professionally while contributing to a stronger early-career ecosystem in Scotland.",
    ],
    tagline: "Thistle Network is built by Scottish apprentices for Scottish apprentices.",
  },
  activities: {
    eyebrow: "What we run",
    heading: "Six ways we show up for apprentices.",
    items: [
      {
        id: "career-access",
        title: "Career access",
        description: "Insight days, company tours and online Q&As focused on apprenticeship routes.",
        icon: "career",
      },
      {
        id: "community",
        title: "Community",
        description: "Regional and industry WhatsApp groups, run by apprentices for apprentices.",
        icon: "community",
      },
      {
        id: "events",
        title: "Events",
        description: "Career meetups, social mixers and retreats across Scotland.",
        icon: "events",
      },
      {
        id: "partnerships",
        title: "Partnerships",
        description: "Corporate sponsors and organisations widening the apprenticeship pipeline.",
        icon: "partnerships",
      },
      {
        id: "visibility",
        title: "Visibility",
        description: "An annual stall at the Big Career Conference and presence at careers fairs.",
        icon: "visibility",
      },
      {
        id: "education",
        title: "Education",
        description: "Budgeting, saving and leadership sessions built for people who start earning early.",
        icon: "education",
      },
    ],
  },
  committee: {
    eyebrow: "About the committee",
    heading: "Run by apprentices who've been where you are.",
    blurb:
      "Thistle Network is led by a small volunteer committee covering events, partnerships, communications and community management — supported by a pool of mentors from across Scottish industry.",
  },
  contactSection: {
    eyebrow: "Get in touch",
    heading: "Say hello.",
  },
};
