// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare(),

  // temporary redirect to coming soon page until the blog is ready
  redirects: {
    '/': '/coming-soon' // Redirect root to /coming-soon
  }
});