import type { NextConfig } from "next";

/**
 * next/image only loads remote images from hosts listed here. picsum.photos is the
 * last-resort placeholder. The Strapi host is added from STRAPI_URL at build time.
 * If your media lives on another host (for example a cloud storage bucket), add it here.
 */
const remotePatterns: NonNullable<NonNullable<NextConfig["images"]>["remotePatterns"]> = [
  { protocol: "https", hostname: "picsum.photos" },
];

if (process.env.STRAPI_URL) {
  const strapi = new URL(process.env.STRAPI_URL);
  remotePatterns.push({
    protocol: strapi.protocol === "https:" ? "https" : "http",
    hostname: strapi.hostname,
    port: strapi.port || "",
    pathname: "/**",
  });
}

const nextConfig: NextConfig = {
  images: { remotePatterns },
  poweredByHeader: false,
};

export default nextConfig;