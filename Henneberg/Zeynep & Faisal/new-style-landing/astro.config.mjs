import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

/**
 * Cloudflare Pages: statischer Build — `dist/` als Publish-Verzeichnis eintragen.
 * `site` für absolute Sitemap-URLs anpassen (eigene Domain).
 */
export default defineConfig({
  site: "https://new-style-gelsenkirchen.example.com",
  integrations: [sitemap()],
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
});
