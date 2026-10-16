// Penjaga bundel klien untuk skrip inline: memastikan kode yang disematkan
// langsung di HTML hasil build tidak memuat tanda tangan pustaka server
// (katex/marked). Melengkapi `scripts/check-client-bundle.mjs` yang memindai
// berkas JS; bila `dist/` belum ada, uji dilewati.
// node tests/client-bundle-inline.mjs
import fs from 'node:fs';
import path from 'node:path';
import { root, ok, check, checks } from './_util.mjs';
import { byExtension, collectFiles } from '../scripts/lib/files.mjs';

const dist = path.join(root, 'dist');

if (!fs.existsSync(dist)) {
  console.log('  lewati - dist/ belum ada, uji bundel inline dilewati');
  console.log('PASS client-bundle-inline (dilewati)');
} else {
  const signatures = [
    { name: 'katex', re: /renderToString|katex/i },
    { name: 'marked', re: /\bmarked\b|markedOptions/ },
  ];
  const inlineTag = /<script\b(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi;
  const files = collectFiles(dist, byExtension('.html'));
  const leaks = [];
  let inline = 0;

  for (const file of files) {
    const html = fs.readFileSync(file, 'utf8');
    inlineTag.lastIndex = 0;
    let m;
    while ((m = inlineTag.exec(html))) {
      inline++;
      const hits = signatures.filter((sig) => sig.re.test(m[1])).map((sig) => sig.name);
      if (hits.length) leaks.push(`${path.relative(dist, file)}: ${hits.join(', ')}`);
    }
  }

  check(`skrip inline tanpa pustaka server (${inline} skrip)`, () => {
    ok(leaks.length === 0, `kebocoran pada skrip inline:\n    ${leaks.join('\n    ')}`);
  });

  console.log(`PASS client-bundle-inline (${checks.count} pemeriksaan)`);
}
