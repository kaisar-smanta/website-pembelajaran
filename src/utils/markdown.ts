import { marked } from 'marked';
import katex from 'katex';
import { BASE } from './url.ts';

marked.setOptions({
  gfm: true,
  breaks: false,
});

/** Opsi KaTeX bersama; `displayMode` ditentukan di tiap pemanggilan. */
const KATEX_OPTIONS = {
  throwOnError: false,
  strict: false,
  trust: true,
};

/**
 * Menambahkan base path pada tautan/gambar internal (`href="/..."`, `src="/..."`).
 *
 * - Mendukung tanda kutip tunggal maupun ganda.
 * - URL protokol-relatif (`//host/...`) dan absolut (`https://...`) dibiarkan.
 * - Tidak menggandakan prefiks bila URL sudah memakai base path.
 *
 * Diekspor agar dapat diuji dengan base path non-root; Node menyelesaikan
 * `BASE` menjadi `/` saat pengujian.
 */
export function rewriteBase(html: string, base: string): string {
  if (base === '/') return html;
  const baseNoSlash = base.replace(/\/+$/, '');
  const pattern = new RegExp(`(?<![\\w-])(href|src)=(["'])(\\/[^"']*)\\2`, 'g');
  return html.replace(
    pattern,
    (match: string, attr: string, quote: string, value: string) => {
      if (value.startsWith('//')) return match;
      if (value === base || value === baseNoSlash) return match;
      if (value.startsWith(base) || value.startsWith(`${baseNoSlash}/`)) return match;
      return `${attr}=${quote}${base}${value.replace(/^\/+/, '')}${quote}`;
    },
  );
}

/** Versi `rewriteBase` yang memakai `BASE` hasil build. */
function withBase(html: string): string {
  return rewriteBase(html, BASE);
}

/**
 * Mengubah markdown (dengan $...$ dan $$...$$) menjadi HTML,
 * lalu merender matematika menggunakan KaTeX pada saat build.
 *
 * Fungsi ini hanya dipakai pada sisi server/build sehingga KaTeX dan marked
 * tidak ikut dikirim ke peramban.
 */
export function renderMarkdown(input: string): string {
  if (!input) return '';

  const store: string[] = [];

  const stash = (html: string): string => {
    const token = `%%MATHBLOCK${store.length}%%`;
    store.push(html);
    return token;
  };

  // 1. Ganti blok display $$...$$ terlebih dahulu.
  let withTokens = input.replace(/\$\$([\s\S]+?)\$\$/g, (_m, tex: string) => {
    const html = katex.renderToString(tex.trim(), { ...KATEX_OPTIONS, displayMode: true });
    return stash(html);
  });

  // 2. Ganti inline $...$ (hindari $$ yang sudah habis).
  withTokens = withTokens.replace(/(?<!\\)\$([^\n$]+?)\$/g, (_m, tex: string) => {
    const html = katex.renderToString(tex.trim(), { ...KATEX_OPTIONS, displayMode: false });
    return stash(html);
  });

  // 3. Render markdown.
  const parsed = marked.parse(withTokens, { async: false }) as string;

  // 4. Kembalikan HTML matematika.
  const restored = parsed.replace(/%%MATHBLOCK(\d+)%%/g, (_m, idx: string) => {
    return store[Number(idx)] ?? '';
  });

  return withBase(restored);
}

/**
 * Merender markdown inline (tanpa paragraf pembungkus) untuk ringkasan kartu,
 * sehingga matematika $...$ tetap tampil sebagai rumus, bukan teks mentah.
 */
export function renderInlineMarkdown(input: string): string {
  if (!input) return '';
  const html = renderMarkdown(input).trim();
  const single = html.match(/^<p>([\s\S]*)<\/p>$/);
  return single ? single[1] : html;
}

/** Merender satu ekspresi LaTeX menjadi HTML KaTeX. */
export function renderMath(tex: string, display = true): string {
  return katex.renderToString(tex, { ...KATEX_OPTIONS, displayMode: display });
}

/** Membersihkan markdown menjadi teks biasa, untuk deskripsi meta dan pencarian. */
export function stripMarkdown(input: string): string {
  if (!input) return '';
  return input
    .replace(/\$\$([\s\S]+?)\$\$/g, ' $1 ')
    .replace(/\$([^\n$]+?)\$/g, '$1 ')
    .replace(/`{1,3}([^`]+)`{1,3}/g, '$1')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/^\s{0,3}#{1,6}\s+/gm, '')
    .replace(/^\s{0,3}>\s?/gm, '')
    .replace(/^\s{0,3}[-*+]\s+/gm, '')
    .replace(/^\s{0,3}([-*_])\1{2,}\s*$/gm, '')
    .replace(/[*_~]+/g, '')
    .replace(/\|/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}
