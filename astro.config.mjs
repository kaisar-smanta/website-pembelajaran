// @ts-check
import { defineConfig } from 'astro/config';

/**
 * Base path konfigurasi untuk GitHub Pages.
 *
 * - Untuk "project page" (https://<user>.github.io/<repo>/) set BASE_PATH=/<repo>.
 * - Untuk "user/organization page" (https://<user>.github.io/) set BASE_PATH=/.
 *
 * Nilai default mengikuti nama repositori ini.
 */
const rawBase = process.env.BASE_PATH ?? '/website-pembelajaran';
const base = rawBase === '/' ? '/' : `/${rawBase.replace(/^\/+|\/+$/g, '')}`;

export default defineConfig({
  site: process.env.SITE_URL || 'https://example.github.io',
  base,
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  devToolbar: {
    enabled: false,
  },
});
