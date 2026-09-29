import { defineConfig } from "astro/config";

// Es publica a GitHub Pages a https://mayerra.github.io/ladescomunal/.
// build.format "file" genera index.html, es.html, nova-essencia.html…
// perquè els enllaços antics continuïn funcionant.
export default defineConfig({
  site: "https://mayerra.github.io",
  base: "/ladescomunal",
  build: { format: "file" },
});
