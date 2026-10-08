// Uji utilitas markdown: node tests/markdown.mjs
//
// Karena Node tidak mendefinisikan `import.meta.env`, `BASE` di url.ts menjadi
// `/`. Agar penulisan ulang base path tetap teruji, kami menguji helper murni
// `rewriteBase` dengan base non-root, plus fungsi render/strip biasa.
import assert from 'node:assert/strict';
import {
  renderMarkdown,
  renderInlineMarkdown,
  stripMarkdown,
  rewriteBase,
} from '../src/utils/markdown.ts';

let passed = 0;
function check(label, fn) {
  fn();
  passed++;
  console.log(`  ok - ${label}`);
}

const BASE = '/website-pembelajaran/';

check('BASE root tidak mengubah apa pun', () => {
  assert.equal(rewriteBase('href="/a" src="/b.png"', '/'), 'href="/a" src="/b.png"');
});

check('href internal diberi prefiks base', () => {
  assert.equal(rewriteBase('<a href="/a">x</a>', BASE), '<a href="/website-pembelajaran/a">x</a>');
});

check('src gambar internal diberi prefiks base', () => {
  assert.equal(
    rewriteBase('<img src="/img/x.png">', BASE),
    '<img src="/website-pembelajaran/img/x.png">',
  );
});

check('tanda kutip tunggal ikut ditangani', () => {
  assert.equal(
    rewriteBase("<a href='/a'>x</a> <img src='/b.png'>", BASE),
    "<a href='/website-pembelajaran/a'>x</a> <img src='/website-pembelajaran/b.png'>",
  );
});

check('URL absolut http(s) tidak disentuh', () => {
  const html =
    '<a href="https://example.com/a">x</a> <a href="http://example.com/b">y</a> <img src="https://cdn.example.com/c.png">';
  assert.equal(rewriteBase(html, BASE), html);
});

check('URL protokol-relatif tidak disentuh', () => {
  const html = '<a href="//cdn.example.com/a">x</a> <img src="//cdn.example.com/b.png">';
  assert.equal(rewriteBase(html, BASE), html);
});

check('fragmen, mailto, dan relatif biasa tidak disentuh', () => {
  const html = '<a href="#bagian">a</a> <a href="mailto:x@y.z">b</a> <a href="halaman">c</a>';
  assert.equal(rewriteBase(html, BASE), html);
});

check('URL yang sudah berbase tidak digandakan', () => {
  const html =
    '<a href="/website-pembelajaran/a">x</a> <a href="/website-pembelajaran">y</a> <img src="/website-pembelajaran/b.png">';
  assert.equal(rewriteBase(html, BASE), html);
});

check('atribut seperti data-src tidak salah diubah', () => {
  assert.equal(rewriteBase('<img data-src="/a.png">', BASE), '<img data-src="/a.png">');
});

check('renderMarkdown menghasilkan HTML dan rumus KaTeX', () => {
  const html = renderMarkdown('**Tebal** dan $x^2$');
  assert.match(html, /<strong>Tebal<\/strong>/);
  assert.match(html, /class="katex"/);
});

check('renderMarkdown mengubah tautan internal (base root di Node)', () => {
  assert.equal(renderMarkdown('[x](/a)').trim(), '<p><a href="/a">x</a></p>');
});

check('renderInlineMarkdown melepas pembungkus paragraf', () => {
  const html = renderInlineMarkdown('**Halo**');
  assert.equal(html, '<strong>Halo</strong>');
});

check('renderInlineMarkdown mengembalikan string kosong untuk input kosong', () => {
  assert.equal(renderInlineMarkdown(''), '');
});

check('stripMarkdown mempertahankan kata berhubung', () => {
  assert.equal(stripMarkdown('fungsi-kuadrat dan e-mail'), 'fungsi-kuadrat dan e-mail');
});

check('stripMarkdown membersihkan penanda dan tautan', () => {
  assert.equal(
    stripMarkdown('## Judul\n\n**Tebal** [`kode`](/x) dan $x^2$'),
    'Judul Tebal kode dan x^2',
  );
});

check('stripMarkdown menangani daftar berbutir', () => {
  assert.equal(stripMarkdown('- satu\n- dua'), 'satu dua');
});

console.log(`PASS markdown (${passed} pemeriksaan)`);
