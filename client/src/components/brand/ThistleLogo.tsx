import Image from "next/image";
import type { Media } from "@/types/media";

type ThistleLogoProps = {
  image?: Media;
  variant: "nav" | "footer" | "hero";
  priority?: boolean;
};

/**
 * Renders the logo image Strapi or the local fallback provides. If even the
 * local file is missing, it falls back to a plain text wordmark, so the
 * header never shows a broken image.
 */
export default function ThistleLogo({ image, variant, priority = false }: ThistleLogoProps) {
  if (!image) {
    return (
      <span className={`logo-fallback logo-${variant}`}>
        <b>thistle</b>
        <strong>network</strong>
      </span>
    );
  }
  return (
    <Image
      className={`logo-img logo-${variant}`}
      src={image.url}
      alt={image.alternativeText ?? "Thistle Network"}
      width={image.width ?? 2005}
      height={image.height ?? 379}
      priority={priority}
      unoptimized={image.url.endsWith(".svg")}
      sizes={variant === "hero" ? "(max-width: 900px) 80vw, 480px" : "240px"}
    />
  );
}
