# Matematika SMA — Pusat Pembelajaran Matematika

Situs statis berbahasa Indonesia untuk pembelajaran matematika SMA yang memuat **dua mata
pelajaran**:

- **Matematika** (wajib, Fase E–F, Kelas X–XII) pada empat elemen: **Bilangan**, **Aljabar dan
  Fungsi**, **Geometri**, serta **Analisis Data dan Peluang**.
- **Matematika Tingkat Lanjut** (pilihan, Fase F, Kelas XI–XII, 800 JP) pada elemen **Aljabar dan
  Fungsi**, **Geometri**, **Kalkulus**, serta **Analisis Data dan Peluang** (tanpa Bilangan).

Acuan CP yang dipakai adalah **Keputusan Kepala BSKAP Kemendikdasmen Nomor 046/H/KR/2025**
tentang Capaian Pembelajaran pada Pendidikan Anak Usia Dini, Jenjang Pendidikan Dasar, dan
Jenjang Pendidikan Menengah, berlaku sejak **16 Juli 2025**. Untuk Matematika SMA, CP ada pada
**Lampiran II**; regulasi ini menggantikan Kepka BSKAP No. 032/H/KR/2024. Regulasi yang sama juga
memuat CP Matematika Tingkat Lanjut Fase F. Keputusan Kepala BKPDM Nomor 020 Tahun 2026 yang
mengubahnya sejauh penelusuran hanya menyentuh Pendidikan Agama dan Budi Pekerti. Pemetaan CP
beserta riwayat regulasi disimpan di `src/data/curriculum/cp.ts` dan diperiksa
`tests/cp-coverage.mjs`. Konsistensi mata pelajaran diperiksa `tests/subjects.mjs`.

> Catatan: susunan materi merupakan **tafsir instruksional** atas CP, bukan salinan resmi daftar
> isi buku teks maupun dokumen kurikulum. Cocokkan selalu dengan dokumen resmi yang berlaku.
> Lihat halaman `/referensi` dan registri `src/data/curriculum/cp.ts`.

Situs ini bukan kumpulan PDF. Setiap topik mengikuti alur belajar
**konteks → pertanyaan → konsep → representasi → eksplorasi → generalisasi → contoh → latihan
→ penalaran → penerapan nyata → refleksi**, dilengkapi eksplorasi interaktif, latihan berjenjang,
prasyarat, dan topik terkait.

Disusun oleh **Kaisar Titoniran Akbar, S.Pd** untuk **SMAN 1 Tanjung**. Lihat `/tentang`.

---

## Tumpukan Teknologi

| Bagian | Pilihan | Alasan |
| --- | --- | --- |
| Framework | **Astro 7** (output statis) | HTML pra-render per halaman, tanpa SPA routing, SEO baik, cocok GitHub Pages |
| Bahasa | **TypeScript** (strict) | Keamanan tipe untuk model konten |
| Matematika | **KaTeX** + **marked** | Render LaTeX saat build sehingga tidak dikirim ke peramban |
| Interaksi | **JavaScript vanilla** (Astro islands) | Ringan, tanpa framework UI tambahan |
| Gaya | **CSS kustom** (design token) | Tanpa dependensi CSS, mendukung mode gelap & cetak |

Tanpa backend, tanpa basis data, tanpa autentikasi. Seluruh konten dibundel saat build.

---

## Menjalankan Secara Lokal

Memerlukan **Node.js >= 22.18** (lihat `engines` pada `package.json`). Versi ini dipakai
karena test memanfaatkan fitur pemisahan TypeScript bawaan Node. Versi Node di CI (`.github/workflows/deploy.yml`)
disamakan dengan persyaratan tersebut.

```bash
npm install
npm run dev        # http://localhost:4321/website-pembelajaran/
```

Perintah lain:

```bash
npm run build      # membangun situs statis ke dist/
npm run preview    # pratinjau hasil build
npm run check      # pemeriksaan tipe (astro check)
npm run lint:content   # memindai materi dari pola LaTeX berisiko
npm run check:latex    # memeriksa blok LaTeX/KaTeX pada materi (dijalankan setelah build)
npm run test       # memverifikasi nilai matematika & logika simulasi (tests/run-all.mjs)
npm run test:links # memeriksa tautan & anchor internal pada dist/
npm run verify     # jalankan seluruh pemeriksaan di atas (check, lint, build, check:latex, test, test:links)
npm run audit      # audit tata letak & aksesibilitas hasil build (Chrome/Edge)
npm run screenshot # tangkapan layar hasil build ke artifacts/ (Chrome/Edge)
npm run og         # membuat ulang public/og-default.png (Chrome/Edge)
```

---

## Menambah Topik Baru

1. **Buat berkas data** di `src/data/topics/<slug>.ts`:

   ```ts
   import type { Topic } from '@/types/content';

   export const topikBaru: Topic = {
     id: 'topik-baru',
     slug: 'topik-baru',
     title: 'Judul Topik',
     grade: 'X',
     phase: 'E',
     element: 'bilangan', // bilangan | aljabar-fungsi | geometri | kalkulus | data-peluang
     subject: 'matematika', // matematika | matematika-lanjut (kosong = matematika)
     summary: 'Ringkasan satu kalimat untuk kartu.',
     description: 'Deskripsi beberapa kalimat.',
     keywords: ['kata kunci'],
     prerequisites: ['eksponen'],     // id topik (referensi, bukan teks)
     relatedTopics: ['barisan-deret'],
     objectives: [{ text: 'Peserta didik dapat ...' }],
     sections: [
       {
         id: 'konsep',
         kind: 'konsep',
         title: 'Konsep Inti',
         body: 'Tulis markdown di sini. Matematika memakai $x^2$ atau $$\\int x\\,dx$$.',
       },
     ],
   };
   ```

2. **Daftarkan** di `src/data/topics/index.ts`: impor dan tambahkan ke array `topics`.
3. **Tambahkan soal** (opsional) di `src/data/questions/<slug>.ts` lalu daftarkan di
   `src/data/questions/index.ts`.
4. Halaman topik, peta kurikulum, pencarian, dan breadcrumb otomatis dibuat.

Jenis bagian (`SectionKind`) yang tersedia: `tujuan`, `pemantik`, `prasyarat`, `konteks`,
`konsep`, `representasi`, `eksplorasi`, `generalisasi`, `rumus`, `contoh`, `latihan-dasar`,
`latihan-cakap`, `latihan-mahir`, `dunia-nyata`, `kesalahan-umum`, `refleksi`, `rangkuman`,
`evaluasi`, `catatan`.

Selain markdown, sebuah `Section` dapat memuat `blocks`. Blok yang dirender
`src/components/content/BlockRenderer.astro`:

| Blok | Kegunaan |
| --- | --- |
| `callout` | Sorotan info/perhatian/tips/konsep. |
| `table` | Tabel (opsional sel matematika). |
| `exploration` | Menyisipkan simulasi dari `explorations.ts`. |
| `geogebra` | Sematan GeoGebra. |
| `details` | Pembahasan berbalut tombol buka-tutup. |
| `prediction` | Pertanyaan pemantik: siswa menyimpan dugaan lebih dulu, lalu penjelasan terbuka. |
| `reflection` | Pertanyaan refleksi dengan jawaban + skala keyakinan tersimpan di peramban. |
| `step-reveal` | Contoh bertahap yang dibuka langkah demi langkah. |
| `spot-mistake` | Siswa menebak langkah yang salah pada pembahasan. |
| `match` | Mencocokkan istilah–makna dengan kartu. |
| `flip-cards` | Kartu bolak-balik untuk istilah. |
| `tabs` | Penukar representasi (simbolik/grafik/tabel). |

Contoh blok interaktif:

```ts
blocks: [
  { kind: 'prediction', prompt: 'Menurutmu ...?', options: ['A', 'B'], reveal: 'Ternyata ...' },
  { kind: 'step-reveal', intro: 'Ikuti langkahnya.', steps: [
    { title: 'Langkah 1', text: '$2^3 \\cdot 2^4 = 2^{3+4}$' },
    { title: 'Langkah 2', text: '$= 2^7 = 128$' },
  ] },
  { kind: 'spot-mistake', steps: ['$2^3\\cdot2^5=4^8$', '$2^3\\cdot2^5=2^8$'], wrongIndex: 0, explanation: 'Basis tidak berubah.' },
  { kind: 'match', pairs: [{ left: 'Basis', right: 'Bilangan yang dipangkatkan' }] },
  { kind: 'flip-cards', cards: [{ front: 'Eksponen', back: 'Banyaknya faktor' }] },
  { kind: 'tabs', items: [{ label: 'Simbolik', body: '$a^n$' }, { label: 'Tabel', body: '...' }] },
  { kind: 'reflection', prompts: ['Kapan sifat eksponen tidak berlaku?'], confidenceLabel: 'Seberapa yakin?' },
]
```

Interaksi `prediction` dan `reflection` disimpan melalui `src/lib/learner.ts`
(diuji `tests/learner.mjs`). Blok lain mengirim event `mtk:interaction`.

**Blok interaktif ditulis langsung di data topik.** Sebelumnya ada lapisan
peningkatan otomatis (`src/data/topics/enhance.ts`) yang mengubah `body` markdown
menjadi blok saat data dimuat. Lapisan itu kini dihapus: seluruh topik pada
`src/data/topics/*.ts` sudah memuat bloknya sendiri, sehingga satu sumber
kebenaran dan tidak ada lagi pola rapuh berbasis regex. `tests/content-blocks.mjs`
menegakkan kontraknya — setiap bagian `pemantik` wajib punya `prediction`,
`refleksi` wajib punya `reflection`, dan `eksplorasi` wajib punya `exploration`.
`sectionSearchText` (di `src/lib/content-text.ts`) mengindeks isi blok untuk
pencarian. Halaman materi juga menampilkan kartu **Kemajuan halaman**
(`TopicProgress.astro`) yang menghitung dugaan, refleksi, dan latihan yang sudah
dikerjakan.

> Untuk menambah blok interaktif baru, tulis langsung pada `blocks` bagian yang
> bersangkutan (lihat tabel di atas). Tidak ada lagi konversi otomatis, sehingga
> materi tidak akan pernah terhapus atau terduplikasi saat data dimuat.


---

## Menambah Soal

Soal disimpan terpisah dari UI di `src/data/questions/`. Tipe `Question` mendukung
`multiple-choice`, `short-answer`, dan `open-response`. Pemeriksaan jawaban berjalan di
peramban (tanpa server) melalui komponen `QuestionCard.astro`.

```ts
import type { Question } from '@/types/content';

export const topikBaruQuestions: Question[] = [
  {
    id: 'tb-01',
    topicId: 'topik-baru',
    difficulty: 'dasar',       // dasar | cakap | mahir
    type: 'multiple-choice',
    category: 'penerapan',     // cepat | konsep | penerapan | pemodelan | penalaran | kontekstual | evaluasi
    prompt: 'Berapa nilai $2^3 \\cdot 2^5$?',
    options: [
      { key: 'A', text: '$2^{15}$' },
      { key: 'B', text: '$2^{8}$' },
    ],
    answer: 'B',
    explanation: '$2^3 \\cdot 2^5 = 2^{3+5} = 2^8$.',
    hints: ['Basis sama, maka eksponen ...'],
  },
];
```

Untuk `short-answer`, tambahkan `acceptedAnswers` berisi bentuk ekuivalen.

---

## Menambah Studi Kasus (Matematika dalam Kehidupan)

Studi kasus disimpan per kategori di `src/data/applications/`
(`keuangan.ts`, `data.ts`, `pertumbuhan.ts`, `pengukuran.ts`) dan digabung oleh
`src/data/applications/index.ts`. Berkas `index.ts` juga menyimpan metadata
kategori terpusat (`applicationCategories`) — nama, deskripsi, elemen, dan aksen
— sehingga halaman `/aplikasi`, beranda, dan peta kurikulum tidak lagi
menduplikasi pemetaan.

```ts
import type { Application } from '@/types/content';

export const keuanganApplications: Application[] = [
  {
    id: 'contoh-studi',
    title: 'Judul Studi Kasus',
    category: 'keuangan',      // keuangan | data | pertumbuhan | pengukuran
    element: 'bilangan',       // harus cocok dengan salah satu topicIds
    grade: 'X',                // harus cocok dengan salah satu topicIds
    level: 'dasar',            // dasar | cakap | mahir
    estimatedMinutes: 8,
    explorationId: 'bunga-majemuk-sim', // opsional, id dari explorations.ts
    tags: ['bunga', 'investasi'],
    summary: 'Ringkasan satu kalimat untuk kartu.',
    topicIds: ['bunga-majemuk'],        // id topik (referensi, bukan teks)
    body: 'Konteks nyata dan pertanyaan pemicu. Matematika: $M_n = M_0(1+i)^n$.',
    analysis: 'Perhitungan, interpretasi, dan keputusan.',
    takeaways: ['Poin kunci pertama', 'Poin kunci kedua'],
    reflection: ['Pertanyaan refleksi kontekstual khusus studi kasus ini.'],
  },
];
```

Aturan integritas (diperiksa `npm test` lewat `tests/applications.mjs`):
`element` dan `grade` harus cocok dengan salah satu topik pada `topicIds`,
seluruh `topicIds`/`explorationId` harus ada, dan `id` harus unik. Pengesahan
menghitung cakupan: setiap topik idealnya memiliki minimal satu studi kasus.
Halaman `/aplikasi`, rincian `/aplikasi/[id]`, sisipan "Penerapan di Dunia
Nyata" pada halaman topik, beranda, pencarian, dan peta sitemap semuanya
dibangkitkan dari data ini.

---

## Menambah Aktivitas Interaktif

1. Tambahkan entri di `src/data/explorations.ts` dengan `type` salah satu dari
   `function-slider`, `compound-interest`, `probability`, `linear-regression`, `sequence`,
   `distribution`, `conditional-probability`, `circle`, `matrix`, `linear-system`,
   `function-composition`, `function-inverse`, `polynomial`, `conic`, `derivative`, `integral`,
   `random-variable`, atau `geogebra`. Isi juga `grade`, `element`,
   `order`, `level` (`dasar`/`cakap`/`mahir`), dan `estimatedMinutes` agar eksplorasi otomatis
   dikelompokkan dan dapat disaring di halaman `/eksplorasi`, serta `goal` dan `prompts`
   (prediksi–amati–jelaskan) untuk memandu penemuan. Halaman `/eksplorasi`, halaman rincian
   `/eksplorasi/[slug]`, pencarian, dan peta sitemap sepenuhnya dibangkitkan dari registri ini.
2. Untuk tipe yang sudah ada, cukup menautkan `explorationId` pada blok `exploration` di dalam
   sebuah `section`:

   ```ts
   blocks: [{ kind: 'exploration', explorationId: 'regresi-sim' }]
   ```

3. Untuk **GeoGebra**, gunakan blok `geogebra` (tidak ada ID yang di-hardcode di komponen):

   ```ts
   blocks: [{ kind: 'geogebra', url: 'https://www.geogebra.org/classic', title: 'Aktivitas' }]
   ```

4. Untuk tipe baru, buat komponen di `src/components/interactive/`, letakkan logika murni di
   `src/lib/sim/` (agar dapat diuji tanpa DOM), lalu daftarkan pada
   `src/components/interactive/ExplorationSim.astro`. Tambahkan uji `tests/sim-<tipe>.mjs`.

---

## Mata Pelajaran

Mata pelajaran diperlakukan sebagai dimensi tersendiri sejak integrasi Matematika Tingkat Lanjut.
Metadata terpusat ada di `src/data/curriculum.ts`:

- `SubjectId = 'matematika' | 'matematika-lanjut'`;
- `SUBJECTS` menyimpan nama, deskripsi, `grades`, `phases`, `elements` (urutan elemen khas), `elective`,
  dan `hours`;
- `elementOrderFor(subject)`, `gradesFor(subject)`, `phasesFor(subject)`, serta `subjectOf(entry)`
  (entri lama tanpa `subject` dianggap Matematika);
- elemen `kalkulus` hanya dimiliki Matematika Tingkat Lanjut; `ALL_ELEMENT_ORDER` mencakup seluruh
  elemen lintas mata pelajaran untuk halaman global (mis. peta, pencarian, alat).

Topik, eksplorasi, studi kasus, dan jalur konsep memiliki opsional `subject`. Fungsi registri
seperti `topicsBySubject*`, `cpForTopic`, dan `cpCoveredTopicIds` menyaring per mata pelajaran.
Rute lama tanpa segmen mata pelajaran dipertahankan sebagai pengalih ke `/matematika/...`.

## Capaian Pembelajaran & Regulasi

Pemetaan CP disimpan di `src/data/curriculum/cp.ts` — satu-satunya tempat CP "dikodekan". Berkas
ini memuat:

- `regulations` — riwayat regulasi (nomor, penerbit, tanggal berlaku, `supersedes`, `status`);
- `cpStatements` — pernyataan CP berkode (mis. `E-BIL-1`, `F-ALG-3`) beserta `phase`, `element`,
  `grades`, teks parafrasa, dan `topicIds` yang memenuhinya.

Halaman `/referensi` dan peta pembelajaran membangkitkan tampilan langsung dari registri ini,
sehingga tidak ada daftar CP yang diduplikasi di komponen.

### Menghadapi perubahan regulasi

Saat ada Kepka BSKAP baru:

1. **Tandai yang lama.** Ubah `status` regulasi lama menjadi `'digantikan'`.
2. **Tambah regulasi baru.** Tambahkan entri dengan `supersedes: ['<id-lama>']` dan `status: 'berlaku'`.
3. **Perbarui pernyataan.** Tambah/ubah/hapus entri `cpStatements` beserta `topicIds`.
4. **Jalankan `npm test`.** `tests/cp-coverage.mjs` akan:
   - menolak lebih dari satu regulasi `berlaku` atau rujukan `supersedes` yang tidak ada;
   - melaporkan pernyataan CP yang tidak punya topik;
   - melaporkan topik lengkap yang belum dipetakan dan tidak ditandai `supplementary`;
   - memastikan fase/elemen/kelas setiap pernyataan cocok dengan topik yang dipetakan.
5. **Perbarui salinan situs** bila nomor regulasi disebut (footer, beranda, `/tentang`).

Topik pengayaan yang melampaui CP (mis. SPLTV, aljabar matriks) ditandai
`supplementary: true` pada data topik agar pemeriksaan cakupan tidak menganggapnya celah.

---

## Arsitektur Konten

```
src/
├── components/
│   ├── layout/        Header, Footer, ThemeToggle, BaseLayout
│   ├── navigation/    Breadcrumbs
│   ├── content/       SectionBlock, TopicCard, Callout, DataTable, ElementIcon, MathMascot
│   ├── exercises/     QuestionCard, QuizTeaser
│   ├── interactive/   FunctionSlider, CompoundInterestSim, ... + sim.css (gaya bersama)
│   └── ui/            CtaCard (kartu ajakan bersama)
├── data/
│   ├── curriculum.ts   Daftar kelas & elemen + meta
│   ├── display.ts      Metadata tampilan terpusat (warna elemen, label tingkat, halaman statis)
│   ├── curriculum/     Registri CP & riwayat regulasi (cp.ts)
│   ├── site.ts         Identitas situs, penyusun, sekolah, & tautan resmi
│   ├── nav.ts          Navigasi header/footer
│   ├── explorations.ts Registri eksplorasi interaktif
│   ├── applications/   Studi kasus "Matematika dalam Kehidupan"
│   │                   (index.ts + satu berkas per kategori)
│   ├── topics/         Satu berkas per topik (materi, blok interaktif ditulis langsung)
│   └── questions/      Satu berkas per topik (bank soal)
├── layouts/            BaseLayout.astro
├── lib/                Pustaka murni & dapat diuji: sim/ (perhitungan),
│                       graph/layout.ts, storage.ts, learner.ts, progress.ts,
│                       progress-overview.ts (rekap belajar), answer.ts
│                       (normalisasi & pencocokan jawaban), reference.ts
│                       (agregasi glosarium & rumus), format.ts, dom.ts,
│                       interaction.ts, filter.ts, content-text.ts,
│                       search.ts (skor & sorot pencarian),
│                       practice.ts (hitung & kelompokin soal per tingkat)
├── pages/              Rute (lihat tabel di bawah)
├── styles/             global.css (perakit @import berurutan) +
│                       partials/ (tokens, base, layout, components, decor,
│                       home, accents, prose, utilities, motion, print)
├── types/content.ts    Model data: Topic, Section, Block, Question, ...
└── utils/              markdown.ts (KaTeX+marked), url.ts (base path), ...
```

> Materi memakai **data terstruktur TypeScript** di `src/data/`. Pendekatan ini membuat konten
> dapat divalidasi tipe, dicari, dan dibangkitkan menjadi halaman statis tanpa menulis komponen
> UI baru. `src/content/` dapat digunakan kelak bila ingin beralih ke MDX.

### Rute utama

| Pola | Halaman |
| --- | --- |
| `/` | Beranda |
| `/peta-pembelajaran` | Peta kurikulum + jalur konsep |
| `/matematika`, `/matematika-lanjut` | Halaman mata pelajaran |
| `/[subject]/kelas/[grade]` | Kelas X/XI/XII (`subject` = `matematika` \| `matematika-lanjut`) |
| `/[subject]/kelas/[grade]/[element]` | Elemen dalam kelas |
| `/[subject]/kelas/[grade]/[element]/[topic]` | Halaman materi (breadcrumb, prasyarat, terkait, peta isi) |
| `/kelas/...`, `/elemen/...` | Pengalih statis rute lama ke `/matematika/...` |
| `/latihan`, `/latihan/[topic]` | Latihan berjenjang dengan pemeriksaan sisi klien |
| `/eksplorasi` | Katalog & simulasi interaktif (dapat disaring) |
| `/eksplorasi/[slug]` | Halaman rincian satu eksplorasi (simulasi, brief, navigasi) |
| `/alat` | Alat matematika daring |
| `/aplikasi`, `/aplikasi/[id]` | Matematika dalam kehidupan |
| `/glosarium` | Glosarium istilah dari seluruh topik (saring & cari) |
| `/rumus` | Lembar kumpulan rumus per mata pelajaran & elemen |
| `/kemajuan` | Dasbor kemajuan belajar tersimpan (reset & ekspor data) |
| `/peta-situs` | Peta situs ramah manusia (seluruh topik & halaman) |
| `/kontak` | Kanal kontak penyusun & sekolah |
| `/aksesibilitas` | Pernyataan aksesibilitas situs |
| `/referensi` | Catatan kurikulum & sumber |
| `/tentang` | Profil penyusun, sekolah, kredit, & catatan penggunaan |
| `/cari` | Pencarian sisi klien (indeks `search.json`) |
| `/sitemap.xml`, `/robots.txt` | SEO |

---

## Personalisasi, Gerak, dan Kredit

- **Bahasa & nada**: sapaan ramah untuk siswa tanpa emoji; kualitas materi tetap akurat dan serius.
- **Gerak playful**: design token durasi/easing, keyframes (`rise-in`, `pop-in`, `float-slow`,
  `bob`, `wiggle`), kelas utilitas reveal saat scroll (IntersectionObserver), hover lift, dan
  mikrointeraksi pada tombol, kartu, badge, serta header. Semua gerak **dimatikan** saat
  `prefers-reduced-motion: reduce`, konten tidak disembunyikan tanpa JS, dan gaya cetak dibersihkan.
- **Maskot**: ilustrasi SVG sederhana (`MathMascot.astro`) bersifat dekoratif.
- **Kredit terpusat**: identitas penyusun, sekolah, logo, dan tautan resmi disimpan di
  `src/data/site.ts`. Ubah satu berkas untuk memperbarui beranda, footer, header, dan `/tentang`.
- **Logo sekolah**: letakkan berkas di `public/logo-sman1-tanjung.jpg` (atau ubah
  `site.school.logo`). Logo JPG ditampilkan di atas chip terang agar tetap terbaca di mode gelap.
- Menambahkan tautan media sosial sekolah: isi array `site.links` (tersedia penanda TODO).
- **Pemeriksaan visual berbantuan**: `npm run screenshot` menyimpan gambar hasil build, dan
  `npm run audit` menjalankan pemeriksaan di dalam peramban (overflow horizontal, kontras,
  sasaran sentuh, animasi reveal yang macet, gambar rusak, galat konsol). Keduanya memakai
  Chrome/Edge yang terpasang tanpa dependensi npm dan menulis ke `artifacts/` (diabaikan git).

## Deployment ke GitHub Pages

Proyek ini **sengaja tidak memakai CI/CD penuh** demi menghemat kuota GitHub Actions.
Workflow `.github/workflows/deploy.yml` dibuat **minimal (deploy-only)**: ia hanya
membangun (`npm run build`) dan menerbitkan `dist/` ketika ada `push` ke `main` atau
`workflow_dispatch`. Tidak ada job test/lint dan tidak ada pemicu `pull_request`.

> **Penting untuk sesi berikutnya:** jangan menambahkan job verifikasi, pemicu
> `pull_request`, atau pipeline CI apa pun. Seluruh pemeriksaan mutu dijalankan
> **secara lokal**. Lihat `AGENTS.md`.

Jalankan pemeriksaan mutu secara lokal sebelum push:

```bash
npm run verify
```

Aktifkan **Settings → Pages → Build and deployment → Source: GitHub Actions**.

### Base path

`astro.config.mjs` membaca variabel lingkungan:

- `BASE_PATH` — default `/website-pembelajaran` (project page). Gunakan `/` untuk
  user/organization page.
- `SITE_URL` — domain situs, mis. `https://<user>.github.io`. Saat `CI` diset (atau
  `REQUIRE_SITE_URL=1`), build akan **gagal** bila `SITE_URL` kosong agar canonical tidak
  pernah diam-diam memakai default `https://example.github.io`. Build lokal tanpa keduanya
  tetap memakai default.

Build lokal yang meniru GitHub Pages:

```bash
BASE_PATH=/website-pembelajaran SITE_URL=https://<user>.github.io npm run build
```

File `public/.nojekyll` disertakan agar folder `_astro/` tidak diabaikan Jekyll.

---

## Prinsip Mutu

- **Correctness first.** Setiap contoh dihitung dan diverifikasi; `npm test` menjaga
  nilai-nilai kunci.
- **Tiga tingkat kesulitan** (`Dasar`, `Cakap`, `Mahir`) berdasarkan tuntutan penalaran,
  bukan ukuran angka.
- **Kesalahan umum** dibahas beserta alasannya.
- **Aksesibilitas**: HTML semantik, fokus terlihat, navigasi papan tulis, kontras, teks alt.
- **Responsif & dapat dicetak**: tata letak adaptif, tabel dapat digulir, gaya khusus cetak,
  mode terang/gelap.

## Lisensi

Materi disediakan untuk keperluan pendidikan.
