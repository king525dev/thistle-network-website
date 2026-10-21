import type { FaqItem } from "@/types/site";

export const mockFaqItems: FaqItem[] = [
  {
    id: "who-can-join",
    question: "Who can join?",
    answer:
      "Any current or aspiring apprentice in Scotland aged 16–25. If you're an employer or training provider wanting to partner with us, use the contact section below.",
    order: 1,
    published: true,
  },
  {
    id: "is-it-free",
    question: "Is it free?",
    answer:
      "Yes — joining the network and the WhatsApp groups is free. Some events may have a small ticket cost to cover venue and travel.",
    order: 2,
    published: true,
  },
  {
    id: "why-not-direct-join",
    question: "Why can't I join WhatsApp directly?",
    answer:
      "Registration lets us check who's joining and match you to the right group by sector and location, keeping the space safe and relevant for everyone in it.",
    order: 3,
    published: true,
  },
  {
    id: "employers",
    question: "Can employers get involved?",
    answer:
      "Yes. Employers can participate through insight days, sponsorship, events, careers activities, and other partnerships. Reach out via the contact section below.",
    order: 4,
    published: true,
  },
];
