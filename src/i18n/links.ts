import { paths, type Lang } from "./content";

// Enllaç a una pàgina del lloc tenint en compte la base de GitHub Pages.
export function pageUrl(lang: Lang, page: "home" | "nova", anchor?: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}/${paths[lang][page]}${anchor ? `#${anchor}` : ""}`;
}

export function assetUrl(path: string) {
  return `${import.meta.env.BASE_URL.replace(/\/$/, "")}/${path}`;
}
