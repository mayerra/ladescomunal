import type { ImageMetadata } from "astro";

// Totes les imatges de src/assets, per nom de fitxer sense extensió
// (per exemple images["projects/enre9"]).
const files = import.meta.glob<{ default: ImageMetadata }>("../assets/**/*.{png,jpg,jpeg,webp}", { eager: true });

export const images: Record<string, ImageMetadata> = Object.fromEntries(
  Object.entries(files).map(([path, module]) => [path.replace("../assets/", "").replace(/\.[^.]+$/, ""), module.default]),
);

export function image(name: string) {
  const found = images[name];
  if (!found) throw new Error(`No existeix la imatge src/assets/${name}`);
  return found;
}
