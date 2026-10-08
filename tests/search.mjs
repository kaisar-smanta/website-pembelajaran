// Uji logika pencarian murni: node tests/search.mjs
import assert from 'node:assert/strict';
import {
  normalizeSearch,
  scoreItem,
  highlight,
  buildSnippet,
} from '../src/lib/search.ts';

const base = {
  title: '',
  summary: '',
  url: '/',
  type: 'topik',
  keywords: '',
  text: '',
};

let passed = 0;
function check(label, fn) {
  fn();
  passed++;
  console.log(`  ok - ${label}`);
}

check('normalizeSearch menurunkan huruf dan menghapus diakritik', () => {
  assert.equal(normalizeSearch('Bunga MAJEMUK'), 'bunga majemuk');
  assert.equal(normalizeSearch('café'), 'cafe');
  assert.equal(normalizeSearch('Fungsi Kuadrat\u0301'), 'fungsi kuadrat');
});

check('scoreItem mengurutkan judul persis > judul > kata kunci > ringkasan > isi', () => {
  const q = 'eksponen';
  const exact = scoreItem({ ...base, title: 'Eksponen' }, q);
  const title = scoreItem({ ...base, title: 'Fungsi Eksponen' }, q);
  const keywords = scoreItem({ ...base, keywords: 'eksponen' }, q);
  const summary = scoreItem({ ...base, summary: 'eksponen' }, q);
  const text = scoreItem({ ...base, text: 'eksponen' }, q);
  assert.equal(exact, 150);
  assert.equal(title, 50);
  assert.equal(keywords, 25);
  assert.equal(summary, 12);
  assert.equal(text, 6);
  assert.ok(exact > title && title > keywords && keywords > summary && summary > text);
});

check('scoreItem menjumlahkan bobot per istilah untuk kecocokan berlapis', () => {
  const item = {
    ...base,
    title: 'Bunga Majemuk',
    summary: 'Ringkasan bunga majemuk.',
    keywords: 'bunga investasi',
    text: 'Isi tentang anuitas dan bunga.',
  };
  // 'bunga': judul 50 + kata kunci 25 + ringkasan 12 + isi 6 = 93.
  // 'majemuk': judul 50 + ringkasan 12 = 62. Total 155.
  assert.equal(scoreItem(item, 'Bunga Majemuk'), 155);
  assert.equal(scoreItem(item, 'bunga'), 93);
});

check('scoreItem menuntut semua istilah cocok (AND)', () => {
  const item = {
    ...base,
    title: 'Fungsi Kuadrat',
    keywords: 'parabola',
    text: 'akar dan titik puncak',
  };
  assert.ok(scoreItem(item, 'fungsi kuadrat') > 0);
  assert.ok(scoreItem(item, 'fungsi kuadrat akar') > 0, 'akar ada di isi');
  assert.equal(scoreItem(item, 'fungsi kuadrat peluang'), 0, 'istilah hilang membatalkan hasil');
  assert.equal(scoreItem(item, 'fungsi integral'), 0);
});

check('scoreItem memberi peringkat per istilah: judul > kata kunci > isi', () => {
  const q = 'fungsi kuadrat akar';
  const inTitle = scoreItem({ ...base, title: 'Fungsi Kuadrat dan Akar' }, q);
  const inKeywords = scoreItem({ ...base, keywords: 'fungsi kuadrat akar' }, q);
  const inText = scoreItem({ ...base, text: 'fungsi kuadrat akar' }, q);
  assert.equal(inTitle, 50 * 3);
  assert.equal(inKeywords, 25 * 3);
  assert.equal(inText, 6 * 3);
  assert.ok(inTitle > inKeywords && inKeywords > inText);
});

check('scoreItem mengembalikan 0 untuk kata kunci kosong', () => {
  const item = { ...base, title: 'Eksponen', text: 'eksponen' };
  assert.equal(scoreItem(item, ''), 0);
  assert.equal(scoreItem(item, '   '), 0);
});

check('scoreItem tidak memandang entri tanpa kecocokan sebagai hasil', () => {
  assert.equal(scoreItem({ ...base, title: 'Eksponen' }, 'peluang'), 0);
});

check('highlight meng-escape HTML dan membungkus kecocokan', () => {
  const html = highlight('<b>Bunga</b> & "x"', 'bunga');
  assert.ok(html.includes('&lt;b&gt;'), 'tag pembuka di-escape');
  assert.ok(html.includes('&lt;/b&gt;'), 'tag penutup di-escape');
  assert.ok(html.includes('&amp;'), 'ampersand di-escape');
  assert.ok(!html.includes('<b>'), 'tidak ada tag mentah');
  assert.ok(html.includes('<mark'), 'kecocokan disorot');
  assert.ok(html.includes('Bunga'), 'huruf asli dipertahankan');
});

check('highlight menemukan kata berdiakritik lewat bentuk ternormalisasi', () => {
  const html = highlight('Perhatikan café ini', 'cafe');
  assert.ok(html.includes('<mark'), 'kata berdiakritik ikut disorot');
});

check('highlight menyorot setiap istilah kueri multi-kata', () => {
  const html = highlight('Fungsi kuadrat memiliki akar', 'fungsi akar');
  const marks = html.match(/<mark/g) ?? [];
  assert.equal(marks.length, 2);
  assert.ok(html.includes('>Fungsi</mark>'), 'istilah pertama disorot');
  assert.ok(html.includes('>akar</mark>'), 'istilah kedua disorot');
});

check('highlight mengembalikan teks kosong dengan aman', () => {
  assert.equal(highlight('', 'bunga'), '');
  assert.equal(highlight('<x>', ''), '&lt;x&gt;');
});

check('buildSnippet memakai ringkasan bila sudah memuat kata kunci', () => {
  const item = { ...base, summary: 'Bunga majemuk tumbuh cepat.', text: 'Isi lain.' };
  const snippet = buildSnippet(item, 'bunga');
  assert.ok(snippet.includes('<mark'));
  assert.ok(!snippet.startsWith('…'));
});

check('buildSnippet mengambil potongan isi bila kata kunci hanya ada di isi', () => {
  const item = {
    ...base,
    summary: 'Ringkasan umum.',
    text: `${'kata '.repeat(20)}anuitas adalah pembayaran berkala.`,
  };
  const snippet = buildSnippet(item, 'anuitas');
  assert.ok(snippet.includes('<mark'));
  assert.ok(snippet.endsWith('…'));
});

check('buildSnippet memusatkan cuplikan pada istilah yang tidak ada di ringkasan', () => {
  const item = {
    ...base,
    summary: 'Fungsi kuadrat dan grafiknya.',
    text: `${'kata '.repeat(30)}mencari akar persamaan kuadrat.`,
  };
  const snippet = buildSnippet(item, 'fungsi kuadrat akar');
  assert.ok(snippet.includes('<mark'), 'istilah disorot di cuplikan');
  assert.ok(snippet.includes('akar'), 'istilah non-pertama ikut tampil');
  assert.ok(snippet.startsWith('…'), 'cuplikan berasal dari isi, bukan ringkasan');
});

check('kata kunci kosong membuat cuplikan sama dengan ringkasan yang di-escape', () => {
  const item = { ...base, summary: '<b>Ringkas</b>', text: 'isi' };
  assert.equal(buildSnippet(item, ''), '&lt;b&gt;Ringkas&lt;/b&gt;');
});

console.log(`PASS search (${passed} pemeriksaan)`);
