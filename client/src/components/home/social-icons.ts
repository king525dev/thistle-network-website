import type { SocialPlatform } from "@/types/common";
import type { IconName } from "@/components/ui/icons";

/** Which uploaded icon to show for each social platform. */
export function socialButtonIcon(platform: SocialPlatform): IconName | null {
  switch (platform) {
    case "linkedin":
      return "socialLinkedinBtn" as IconName;
    case "instagram":
      return "socialInstagramBtn" as IconName;
    case "tiktok":
      return "socialTiktokBtn" as IconName;
    default:
      return null;
  }
}

export function socialIcon(platform: SocialPlatform): IconName | null {
  switch (platform) {
    case "email":
      return "socialMail";
    case "linkedin":
      return "socialLinkedin";
    case "instagram":
      return "socialInstagram";
    default:
      return null;
  }
}
