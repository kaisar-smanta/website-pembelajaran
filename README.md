# Matematika SMA — Pusat Pembelajaran Matematika

Situs statis berbahasa Indonesia untuk pembelajaran matematika SMA, disusun mengikuti kerangka
**Capaian Pembelajaran (CP)** Kurikulum Merdeka pada empat elemen: **Bilangan**, **Aljabar dan
Fungsi**, **Geometri**, serta **Analisis Data dan Peluang**.

Situs ini bukan kumpulan PDF. Setiap topik mengikuti alur belajar
**konteks → pertanyaan → konsep → representasi → eksplorasi → generalisasi → contoh → latihan
→ penalaran → penerapan nyata → refleksi**, dilengkapi eksplorasi interaktif, latihan berjenjang,
prasyarat, dan topik terkait.

> Catatan: susunan materi merupakan **tafsir instruksional** atas CP, bukan salinan resmi daftar
> isi buku teks. Lihat halaman `/referensi`.

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
npm run test       # memverifikasi nilai matematika & logika simulasi (tests/run-all.mjs)
npm run test:links # memeriksa tautan & anchor internal pada dist/
npm run verify     # jalankan seluruh pemeriksaan di atas
npm run audit      # audit tata letak & aksesibilitas hasil build (Chrome/Edge)
npm run screenshot # tangkapan layar hasil build ke artifacts/ (Chrome/Edge)
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
     element: 'bilangan', // bilangan | aljabar-fungsi | geometri | data-peluang
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
`evaluasi`, `catatan`. Blok khusus: `callout`, `table`, `exploration`, `details`, `geogebra`.

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
   `function-composition`, `function-inverse`, atau `geogebra`. Isi juga `grade`, `element`,
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

## Arsitektur Konten

```
src/
├── components/
│   ├── layout/        Header, Footer, ThemeToggle, BaseLayout
│   ├── navigation/     Breadcrumbs
│   ├── content/        SectionBlock, TopicCard, Callout, DataTable, ElementIcon, MathMascot
│   ├── exercises/      QuestionCard
│   └── interactive/    FunctionSlider, CompoundInterestSim, ProbabilitySim,
│                       LinearRegressionSim, GeogebraEmbed, ExplorationEmbed
├── data/
│   ├── curriculum.ts   Daftar kelas & elemen + meta
│   ├── site.ts         Identitas situs, penyusun, sekolah, & tautan resmi
│   ├── nav.ts          Navigasi header/footer
│   ├── explorations.ts Registri eksplorasi interaktif
│   ├── applications/   Studi kasus "Matematika dalam Kehidupan"
│   │                   (index.ts + satu berkas per kategori)
│   ├── topics/         Satu berkas per topik (materi)
│   └── questions/      Satu berkas per topik (bank soal)
├── layouts/            BaseLayout.astro
├── pages/              Rute (lihat tabel di bawah)
├── styles/             global.css (design token, mode gelap, cetak)
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
| `/kelas/[grade]` | Kelas X/XI/XII |
| `/kelas/[grade]/[element]` | Elemen dalam kelas |
| `/kelas/[grade]/[element]/[topic]` | Halaman materi (breadcrumb, prasyarat, terkait, peta isi) |
| `/latihan`, `/latihan/[topic]` | Latihan berjenjang dengan pemeriksaan sisi klien |
| `/eksplorasi` | Katalog & simulasi interaktif (dapat disaring) |
| `/eksplorasi/[slug]` | Halaman rincian satu eksplorasi (simulasi, brief, navigasi) |
| `/alat` | Alat matematika daring |
| `/aplikasi`, `/aplikasi/[id]` | Matematika dalam kehidupan |
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

Repositori menyertakan workflow `.github/workflows/deploy.yml` yang:

1. memasang dependensi (`npm ci`);
2. memverifikasi konten (`npm run lint:content`, `npm run test`);
3. membangun situs (`npm run build`) dengan `BASE_PATH` dan `SITE_URL` otomatis dari repositori;
4. mengunggah `dist/` dan menerbitkannya ke GitHub Pages.

Aktifkan **Settings → Pages → Build and deployment → Source: GitHub Actions**.

### Base path

`astro.config.mjs` membaca variabel lingkungan:

- `BASE_PATH` — default `/website-pembelajaran` (project page). Gunakan `/` untuk
  user/organization page.
- `SITE_URL` — domain situs, mis. `https://<user>.github.io`.

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
