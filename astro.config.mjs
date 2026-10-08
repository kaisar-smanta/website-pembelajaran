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

/**
 * Penjaga build agar situs produksi/CI tidak pernah terbit dengan canonical
 * default `https://example.github.io`. Build lokal (`npm run dev`/`npm run build`)
 * tanpa SITE_URL tetap berjalan; hanya CI atau flag ketat yang mewajibkannya.
 */
const siteUrl = process.env.SITE_URL;
const requireSiteUrl =
  Boolean(process.env.CI) ||
  ['1', 'true'].includes((process.env.REQUIRE_SITE_URL ?? '').toLowerCase());

if (requireSiteUrl && !siteUrl) {
  throw new Error(
    'SITE_URL wajib diatur untuk build produksi/CI agar situs tidak terbit dengan canonical ' +
      'default "https://example.github.io". Set SITE_URL=https://<user>.github.io, atau ' +
      'jalankan build lokal tanpa SITE_URL (dan tanpa CI/REQUIRE_SITE_URL).'
  );
}

export default defineConfig({
  site: siteUrl || 'https://example.github.io',
  base,
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  devToolbar: {
    enabled: false,
  },
});
