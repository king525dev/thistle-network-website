import type { NewsPost, NewsAuthor } from "@/types/news";

const thistleAdmin: NewsAuthor = {
  id: "thistle-admin",
  name: "Thistle Network",
};

const priya: NewsAuthor = { id: "priya-m", name: "Priya M." };
const aisha: NewsAuthor = { id: "aisha-k", name: "Aisha K." };

export const mockNewsPosts: NewsPost[] = [
  {
    id: "insight-night-registration-open",
    author: thistleAdmin,
    publishedAt: "2026-09-03T09:00:00+01:00",
    pinned: true,
    body: "Registration for our Edinburgh Insight Night (24 Sept) is now open! Spaces are limited to keep the speed-networking rounds meaningful, so register sooner rather than later — link in the Events section.",
    likeCount: 34,
    emojiCount: 2,
    emojis: ["🙌", "📌"],
    comments: [
      {
        id: "c1",
        author: priya.name,
        body: "So excited for this one!",
      },
      {
        id: "c2",
        author: "Callum R.",
        body: "Will there be a hybrid/online option for anyone not in Edinburgh?",
      },
    ],
  },
  {
    id: "summer-meetup-recap",
    author: thistleAdmin,
    publishedAt: "2026-09-02T12:00:00+01:00",
    body: "That's a wrap on our Glasgow Summer Meet-Up! 60+ apprentices, one very competitive quiz, and a lot of new WhatsApp connections made. Photos are up in the Gallery now.",
    image: {
      id: "summer-a",
      url: "https://picsum.photos/seed/thistle-event-a/900/560",
      width: 900,
      height: 560,
      alternativeText: "Apprentices at the Glasgow summer meet-up",
    },
    likeCount: 58,
    emojiCount: 3,
    emojis: ["🎉", "📸", "🙌"],
    comments: [
      { id: "c3", author: aisha.name, body: "Best night out in ages, thank you Thistle team!" },
      { id: "c4", author: "Duncan F.", body: "The quiz round was brutal, already looking forward to the next one." },
      { id: "c5", author: "Emma S.", body: "Loved meeting other apprentices outside my own sector." },
    ],
  },
  {
    id: "ey-insight-day-recap",
    author: thistleAdmin,
    publishedAt: "2026-08-29T10:00:00+01:00",
    body: "Huge thanks to EY for hosting our Apprenticeship Insight Day in Edinburgh — mock interviews, a Q&A panel, and honest advice from current apprentices on switching sectors mid-programme. If you registered but couldn't make it, we'll be sharing a recap resource soon.",
    image: {
      id: "ey-a",
      url: "https://picsum.photos/seed/thistle-event-g/900/560",
      width: 900,
      height: 560,
      alternativeText: "Panel discussion at the EY insight day",
    },
    likeCount: 41,
    emojiCount: 1,
    emojis: ["👏"],
    comments: [
      { id: "c6", author: "Ryan B.", body: "The mock interview feedback was so useful, thank you!" },
    ],
  },
  {
    id: "bpuk-partnership",
    author: thistleAdmin,
    publishedAt: "2026-08-25T09:00:00+01:00",
    body: "New partnership announcement: we're teaming up with Black Professionals UK to connect Thistle Network members with Black Apprentices Scotland — more joint events landing later this year.",
    likeCount: 72,
    emojiCount: 2,
    emojis: ["🎉", "🙌"],
    comments: [
      { id: "c7", author: "Nadia O.", body: "This is brilliant news, been hoping for something like this." },
      { id: "c8", author: "Josh T.", body: "Great to see the network growing." },
    ],
  },
  {
    id: "financial-literacy-recap",
    author: thistleAdmin,
    publishedAt: "2026-08-19T09:00:00+01:00",
    body: "Our Financial Literacy Workshop covered budgeting, saving, and the basics of long-term investing for anyone who's just started earning. Slides and a summary sheet are available on request — email us and we'll send them over.",
    image: {
      id: "fin-a",
      url: "https://picsum.photos/seed/thistle-event-k/900/560",
      width: 900,
      height: 560,
      alternativeText: "Budgeting workshop in Dundee",
    },
    likeCount: 29,
    emojiCount: 0,
    emojis: [],
    comments: [],
  },
  {
    id: "whatsapp-approval-reminder",
    author: thistleAdmin,
    publishedAt: "2026-08-12T09:00:00+01:00",
    body: "Reminder: WhatsApp group access is only granted after your registration is approved. If you registered more than 5 working days ago and haven't heard back, check your spam folder or drop us an email — sometimes our reply lands there.",
    likeCount: 15,
    emojiCount: 1,
    emojis: ["👍"],
    comments: [
      { id: "c9", author: "Sophie L.", body: "Ah this happened to me, found it in spam. Thanks for the heads up!" },
    ],
  },
];
