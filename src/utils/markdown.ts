import { marked } from 'marked';
import katex from 'katex';

marked.setOptions({
  gfm: true,
  breaks: false,
});

const BASE = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

/** Menambahkan base path pada tautan internal (href="/..."). */
function withBase(html: string): string {
  if (BASE === '/') return html;
  return html.replace(/href="\/(?!\/)/g, `href="${BASE}`);
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
    const html = katex.renderToString(tex.trim(), {
      displayMode: true,
      throwOnError: false,
      strict: false,
      trust: true,
    });
    return stash(html);
  });

  // 2. Ganti inline $...$ (hindari $$ yang sudah habis).
  withTokens = withTokens.replace(/(?<!\\)\$([^\n$]+?)\$/g, (_m, tex: string) => {
    const html = katex.renderToString(tex.trim(), {
      displayMode: false,
      throwOnError: false,
      strict: false,
      trust: true,
    });
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

/** Merender satu ekspresi LaTeX menjadi HTML KaTeX. */
export function renderMath(tex: string, display = true): string {
  return katex.renderToString(tex, {
    displayMode: display,
    throwOnError: false,
    strict: false,
    trust: true,
  });
}

/** Membersihkan markdown menjadi teks biasa, untuk deskripsi meta dan pencarian. */
export function stripMarkdown(input: string): string {
  if (!input) return '';
  return input
    .replace(/\$\$([\s\S]+?)\$\$/g, ' $1 ')
    .replace(/\$([^\n$]+?)\$/g, ' $1 ')
    .replace(/`{1,3}([^`]+)`{1,3}/g, '$1')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[#>*_~-]/g, ' ')
    .replace(/\|/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}
