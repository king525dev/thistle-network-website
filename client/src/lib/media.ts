import fs from "node:fs";
import path from "node:path";
import type { Media } from "@/types/media";

/**
 * Three-step image fallback, decided on the server:
 *   1. the image Strapi provides,
 *   2. a file in /public (the local fallback),
 *   3. a remote placeholder URL (picsum.photos).
 * Server-only: uses the file system. Never import this from a client component.
 */

let counter = 0;

export function localFileExists(publicPath: string): boolean {
  return fs.existsSync(path.join(process.cwd(), "public", publicPath));
}

export function imageOrFallback(options: {
  strapi?: Media;
  local?: string;
  remote?: string;
  alt: string;
  width: number;
  height: number;
}): Media | undefined {
  if (options.strapi) return options.strapi;
  if (options.local && localFileExists(options.local)) {
    return { id: `local-${++counter}`, url: options.local, width: options.width, height: options.height, alternativeText: options.alt };
  }
  if (options.remote) {
    return { id: `remote-${++counter}`, url: options.remote, width: options.width, height: options.height, alternativeText: options.alt };
  }
  return undefined;
}
