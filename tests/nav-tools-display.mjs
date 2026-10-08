// Integritas metadata tampilan: navigasi, alat matematika, dan halaman statis.
//
// Memuat src/data/nav.ts, tools.ts, display.ts (semuanya tanpa impor runtime)
// lalu memeriksa tautan internal, rujukan topik unggulan, dan keunikan entri.
//
// Pemakaian: node tests/nav-tools-display.mjs (dipanggil oleh `npm test`).

import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');

async function load(file) {
  return import(pathToFileURL(path.join(root, file)).href);
}

const { mainNav, footerNav } = await load('src/data/nav.ts');
const { toolGroups, featuredTools } = await load('src/data/tools.ts');
const { FEATURED_TOPIC_IDS, STATIC_PAGES } = await load('src/data/display.ts');

let checks = 0;
function ok(condition, message) {
  assert.ok(condition, message);
  checks++;
}

// ---- Id topik dari berkas data topik ----
const topicIds = new Set();
for (const file of fs.readdirSync(path.join(root, 'src/data/topics'))) {
  if (!file.endsWith('.ts') || file === 'index.ts' || file === 'planned.ts') continue;
  const mod = await load(path.join('src/data/topics', file));
  for (const value of Object.values(mod)) {
    if (
      value &&
      typeof value === 'object' &&
      typeof value.id === 'string' &&
      Array.isArray(value.sections)
    ) {
      topicIds.add(value.id);
    }
  }
}

// ---- Navigasi ----
function walkNav(items, source) {
  for (const item of items) {
    ok(typeof item.label === 'string' && item.label.length > 0, `nav ${source}: label kosong`);
    ok(typeof item.href === 'string' && item.href.startsWith('/'), `nav ${source}: href tidak internal (${item.href})`);
    ok(item.href.length > 1, `nav ${source}: href kosong (${item.href})`);
    if (item.children) walkNav(item.children, `${source}>${item.label}`);
  }
}
walkNav(mainNav, 'mainNav');
for (const group of footerNav) {
  ok(typeof group.heading === 'string' && group.heading.length > 0, 'footerNav: heading kosong');
  walkNav(group.items, `footerNav>${group.heading}`);
}

// ---- Topik unggulan ----
for (const id of FEATURED_TOPIC_IDS) {
  ok(topicIds.has(id), `FEATURED_TOPIC_IDS: topik tidak ditemukan -> ${id}`);
}

// ---- Halaman statis ----
const staticPaths = new Set();
for (const page of STATIC_PAGES) {
  ok(typeof page.title === 'string' && page.title.length > 0, `STATIC_PAGES ${page.path}: judul kosong`);
  ok(!staticPaths.has(page.path), `STATIC_PAGES: path duplikat -> ${page.path}`);
  staticPaths.add(page.path);
}

// ---- Alat matematika ----
const groupToolNames = new Set();
for (const group of toolGroups) {
  ok(typeof group.heading === 'string' && group.heading.length > 0, 'toolGroups: heading kosong');
  ok(Array.isArray(group.tools) && group.tools.length > 0, `toolGroups ${group.heading}: tools kosong`);
  for (const tool of group.tools) {
    ok(typeof tool.name === 'string' && tool.name.length > 0, `toolGroups ${group.heading}: nama kosong`);
    ok(!groupToolNames.has(tool.name), `nama alat duplikat: ${tool.name}`);
    groupToolNames.add(tool.name);
    ok(/^https:\/\//.test(tool.url), `alat ${tool.name}: url bukan https (${tool.url})`);
  }
}

const featuredNames = new Set();
for (const tool of featuredTools) {
  ok(typeof tool.name === 'string' && tool.name.length > 0, 'featuredTools: nama kosong');
  ok(!featuredNames.has(tool.name), `nama alat unggulan duplikat: ${tool.name}`);
  featuredNames.add(tool.name);
  ok(/^https:\/\//.test(tool.url), `alat unggulan ${tool.name}: url bukan https (${tool.url})`);
  // featuredTools adalah himpunan bagian terkurasi dari toolGroups, bukan daftar
  // terpisah: nama yang sama memang muncul di kedua tempat.
  ok(groupToolNames.has(tool.name), `alat unggulan ${tool.name}: tidak ada di toolGroups`);
}

console.log(`Navigasi: ${mainNav.length} item utama, ${footerNav.length} grup footer`);
console.log(`Topik unggulan: ${FEATURED_TOPIC_IDS.length}, halaman statis: ${STATIC_PAGES.length}`);
console.log(`Alat: ${groupToolNames.size} di toolGroups, ${featuredTools.length} unggulan`);
console.log(`Metadata tampilan diperiksa: ${checks} asersi`);
