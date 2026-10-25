export type Cta = {
  text: string;
  link: string;
};

export type SocialPlatform = "instagram" | "linkedin" | "tiktok" | "email" | "other";

export type SocialLink = {
  id: string;
  text: string;
  link: string;
  platform: SocialPlatform;
};

export type PageHeader = {
  eyebrow?: string;
  header: string;
  description?: string;
};
