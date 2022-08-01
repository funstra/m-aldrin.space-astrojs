import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://m-aldrin.space",
  experimental: {
    integrations: true
  },
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), robotsTxt(), sitemap()]
});