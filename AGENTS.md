# AGENTS.md · catatan untuk sesi AI/otomatisasi

## CI/CD: JANGAN ditambah (kebijakan proyek)

Proyek ini **sengaja tidak memakai CI/CD penuh** untuk menghemat kuota GitHub Actions.
Workflow `.github/workflows/deploy.yml` hanya **deploy-only**: membangun dan menerbitkan
`dist/` pada `push` ke `main` atau `workflow_dispatch`.

- JANGAN menambahkan job verifikasi, test, lint, build terpisah, atau pemicu
  `pull_request` ke workflow.
- JANGAN merekomendasikan atau menambahkan GitHub Actions / pipeline CI / layanan CI lain
  untuk pemeriksaan mutu.
- Jalankan seluruh pemeriksaan **secara lokal**:

  ```bash
  npm run verify   # astro check → lint:content → build → check:bundle → check:latex → test → test:links
  ```

  Pemeriksaan tambahan (butuh peramban, lokal): `npm run audit`, `npm run screenshot`.

## Prosa & tipografi (WAJIB)

- **JANGAN memakai em-dash (U+2014) di mana pun.** Ini sidik jari prosa mesin dan membuat
  situs terasa tidak profesional. Ganti dengan koma, titik dua, tanda kurung, atau pecah
  menjadi kalimat baru.
- **Pemisah judul/metadata** memakai titik tengah `·` (mis. `Trigonometri · Kelas X ·
  Matematika SMA`), bukan tanda pisah.
- **En-dash (U+2013) hanya untuk rentang angka** (`0–20`, `X–XII`, `E–F`) dan penanda nilai
  kosong. Jangan menyentuh hyphen-minus ASCII (tanda minus, placeholder kode).
- Bila kode memang perlu menyebut karakternya, tulis escape `\u2014`, bukan literal.
- **Ditegakkan otomatis:** `scripts/lib/emdash.mjs` dipindai `npm run lint:content` dan
  `tests/no-emdash.mjs` (bagian dari `npm test`). Repo harus tetap 0 em-dash.
- **Struktur judul:** tepat satu `<h1>` per halaman dan tanpa lompatan tingkat (mis. h2 ke
  h4). Ditegakkan `tests/heading.mjs` (memindai seluruh `dist/`).
- `artifacts/` dan `.github/artifacts/` **diabaikan git** (ephemeral). Keputusan yang perlu
  bertahan ditulis di `AGENTS.md` atau kode, bukan hanya di dokumen rencana di sana.

## Konvensi singkat

- **Node >= 22.18**: uji memakai fitur pemisahan TypeScript bawaan Node.
- Materi adalah **data terstruktur TypeScript** di `src/data/` (topik, soal, eksplorasi,
  studi kasus). Jangan menduplikasi metadata di komponen; impor dari `src/data/`.
- **Registrasi topik & soal otomatis.** `src/data/topics/index.ts` dan
  `src/data/questions/index.ts` memuat berkas lewat `import.meta.glob` (dengan urutan
  deterministik). Menambah topik/soal **cukup membuat berkasnya**: jangan menambah impor
  manual. `planned.ts`, `index.ts`, dan berkas berawalan `.`/`enhance` dikecualikan.
- **`relatedTopics` bersifat terarah, tidak wajib simetris.** A boleh menyebut B tanpa B
  menyebut A. Uji hanya menegakkan id yang ada (`tests/content-integrity.mjs`); jangan
  memaksa simetri saat menyunting materi.
- Blok interaktif ditulis langsung di data topik (tidak ada konversi otomatis).
- **Indeks pencarian wajib lengkap.** `sectionSearchText` (`src/lib/content-text.ts`)
  menangani **seluruh** jenis blok; `default` memanggil `assertNever` sehingga blok baru
  gagal keras bila belum ditangani. Tambahkan blok baru ke switch itu.
- **Diagram `figure`**: blok `{ kind: 'figure', svg, alt, caption? }` menyisipkan SVG
  sebaris (wajib `alt`, SVG memakai `currentColor`, id marker unik per topik). `caption`
  dan `alt` ikut terindeks pencarian (`src/lib/content-text.ts`).
- **Latihan tertanam**: bagian `latihan-dasar`/`latihan-cakap`/`latihan-mahir` menarik soal
  topik secara otomatis; untuk memilih soal eksplisit pakai `questionIds`, atau `practiceLevel`
  untuk menarik seluruh soal tingkat tertentu. Dihitung di `src/lib/practice.ts` dan dirender
  `SectionBlock.astro`. Bagian yang memakai `questionIds` di luar tiga jenis latihan tampil
  sebagai **cek cepat** sisipan (varian `quick` `PracticeSet.astro`). Setiap topik wajib
  punya >=1 cek cepat dan `evaluasi` yang menilai (ditegakkan `tests/section-question-refs.mjs`).
- **Fase alur belajar** dipetakan `sectionPhase`/`phaseLabels` (`src/lib/content-text.ts`) dan
  ditampilkan sebagai penanda fase pada halaman topik (Pembuka, Inti, Latihan, Penutup).
- **Blok `geogebra` sudah dihapus.** Sematan GeoGebra hanya lewat tipe eksplorasi `geogebra`
  (`url` wajib menunjuk applet spesifik, bukan beranda generik).
- **Jawaban singkat** dinilai `src/lib/answer.ts` (normalisasi penulisan + ekuivalensi numerik:
  nol di belakang koma, pecahan ↔ desimal, derajat, mata uang). Untuk `short-answer`, jawaban
  selain bilangan bulat telanjang wajib punya `acceptedAnswers` (ditegakkan `tests/questions.mjs`).
- Bagian `generalisasi` yang memuat rumus tampil `$$...$$` ikut dihimpun halaman `/rumus`
  bersama bagian `rumus` (`src/lib/reference.ts`).
- **Asesmen & tinjauan**: soal `open-response` dapat memuat `rubric` (kriteria penilaian
  mandiri, dirender `QuestionCard.astro`, tersimpan lewat `src/lib/learner.ts`). Halaman
  topik menyediakan ekspor **lembar kerja** dengan opsi **"Sertakan kunci jawaban"**.
  Halaman `/review` + `src/lib/review.ts` membangun antrean **tinjauan berkala** lintas
  topik (model Leitner) dari `localStorage`, tanpa server. Progres kotak disimpan di
  `Attempt.box` (`0` belum dikuasai sampai `REVIEW_MAX_BOX`), naik tiap jawaban benar,
  turun ke nol saat salah; antrean hanya memuat soal yang jatuh tempo
  (`reason` = `missed` | `unanswered` | `scheduled`).
- **PWA offline**: `public/sw.js` dan `public/offline.html` didaftarkan `BaseLayout.astro`
  pada build produksi (memakai `manifest.webmanifest`); halaman yang pernah dibuka tetap
  dapat diakses tanpa jaringan.
- Topik roadmap dicantumkan di `src/data/topics/planned.ts` (`status: 'rencana'`); topik
  pengayaan di luar CP ditandai `supplementary: true` dan wajib `cpNote` (ditegakkan
  `tests/pengayaan.mjs`). Halaman `/tantangan` menghimpun soal `mahir` dan topik pengayaan;
  bagian `sejarah` (latar historis) dan `tantangan` (soal nonrutin) memperkaya materi.
  `tests/pengayaan.mjs` juga menjaga ambang soal mahir per topik.
- Uji di `tests/*.mjs`, dijalankan `npm test` (lewat `tests/run-all.mjs`, auto-discovery).
  **Berkas berawalan `_` adalah pembantu bersama, bukan uji.** Utilitas bersama ada di
  `tests/_util.mjs` (`load`, `ok`, `check`, `checks`, `collectTopics`, `collectQuestions`,
  `mockStorage`): pakai itu alih-alih menyalin loop pemuat topik/soal atau assertion.
  Mencakup jawaban, pencarian (termasuk fuzzy), latihan/kemajuan, tinjauan lintas topik
  (`tests/review.mjs`), pengayaan (`tests/pengayaan.mjs`, `tests/mtl-tambahan.mjs`),
  integritas konten (`tests/content-integrity.mjs`: rujukan topik↔studi kasus, id/slug unik,
  bagian tak kosong, kunci pilihan ganda sehat), teks indeks pencarian
  (`tests/content-text.mjs`), tata letak graf prasyarat, dan setiap simulasi
  (`tests/sim-*.mjs`, termasuk limit & binomial).
- Simulasi disiapkan lazy lewat `initWhenVisible` (`src/lib/dom.ts`).
- **Pustaka bersama (jangan duplikasi):** kunci `localStorage` di `src/lib/storage-keys.ts`;
  keacakan deterministik (`seededShuffle`, `combineSeed`) di `src/lib/random.ts`; pembantu
  klien kuis (`sessionSeed`, `recordProgress`, `clearProgress`, `loadQuizStreak`) di
  `src/lib/quiz-client.ts` (dipakai `QuestionCard.astro` & `QuizTeaser.astro`); ruang rute
  (`subjectGradeElementCombos`, `legacyCombos`, dst.) di `src/lib/routes.ts`.
- **Alur bagian materi** mengikuti fase tetap (pembuka → inti → latihan → penutup);
  `tests/section-order.mjs` menegakkannya, dan setiap topik wajib punya blok
  pengulangan `match`/`flip-cards` (`tests/content-blocks.mjs`).
- **Keragaman konten**: `tests/content-variety.mjs` menolak judul eksplorasi/studi kasus
  ganda, prompt soal duplikat lintas berkas, topik tanpa `figure`, serta pembuka
  `prasyarat`/label keyakinan refleksi yang generik dan berulang.
- Halaman `/latihan` dan `/peta-pembelajaran` mendukung saringan URL (`?q=`, dll.)
  lewat `setupFilterPage` (`syncUrl`); sesi "latihan kilat" memakai `seededShuffle`
  (per topik maupun campuran lintas topik di `/latihan/kilat`).
- Kemajuan di `/kemajuan` (`src/lib/overview/*`) menghitung soal, dugaan, refleksi,
  **dan** penyelesaian blok aktivitas interaktif (`activityIds` dari `buildDashboardEntries`).
  `/peta-pembelajaran` memakai ulang `buildOverview`/`continueLearning`/`suggestedStart`
  untuk saran lanjut yang sadar prasyarat.
- Bahasa konten: Indonesia, sapaan ramah tanpa emoji.
- **Token desain** ada di `src/styles/partials/tokens.css` (warna, radius, skala tipe
  `--text-sm/base/lg`, `--z-*` untuk lapisan tetap, `--focus-ring`, `--dur-*`/`--ease-*`).
  Pakai token alih-alih nilai mentah. Token yang tak terpakai dihapus agar tidak menyesatkan.
- Ikon PWA dibuat `npm run pwa-icons` (butuh Chrome/Edge terpasang); og image `npm run og`.
  Keduanya memakai browser headless lewat `scripts/lib/browser.mjs`.
- `npm run audit` (lokal) juga memeriksa struktur a11y (satu h1, urutan heading, `alt`,
  label kontrol, landmark). Uji statis padanannya: `tests/heading.mjs`, `tests/seo.mjs`.
- **Ditunda:** CSS KaTeX masih dimuat global di `BaseLayout.astro`; memindahkannya per
  halaman butuh pemisahan CSS tingkat build (berisiko ke render matematika), jadi belum
  dikerjakan.

## Keputusan arsitektur (refactor perawatan)

- **Batas lapisan `data` → `lib` ditegakkan.** `src/data/**` tidak boleh mengimpor nilai
  dari `src/lib/**`. Label/urutan tingkat kesulitan tinggal di `src/lib/difficulty.ts`
  (re-export lama di `data/display.ts` dihapus), dan `sectionSearchText` diimpor langsung
  dari `src/lib/content-text.ts`, bukan lewat `data/topics`.
- **Harness uji menyelesaikan alias `@/*`.** `tests/_util.mjs` mendaftarkan hook
  `node:module` sehingga berkas sumber yang dimuat uji boleh memakai `@/...` dengan type
  stripping Node. `import.meta.glob` tetap tidak tersedia di Node, jadi berkas `index.ts`
  ber-glob tidak boleh dimuat uji (uji memakai berkas per-entitas). Primitif uji bersama:
  `close(actual, expected, label, tol)`, `closeVec`, `runCase`, `report`.
- **Registri eksplorasi dipecah** menjadi `src/data/explorations/bagian-*.ts` dan digabung
  **berurutan** oleh `src/data/explorations.ts`. Urutan entri dipertahankan karena beranda
  memilih tiga eksplorasi unggulan pertama.
- **`BlockRenderer.astro` punya penjaga kelengkapan** `Record<Block['kind'], true>`
  sehingga menambah jenis blok baru tanpa menanganinya gagal saat `astro check`.
- **Skema penyimpanan** kini juga dimigrasikan dari versi 0 (data lama tanpa penanda);
  ekspor memakai `SCHEMA_VERSION`, bukan literal. Semua akses penyimpanan lewat
  `safeStorage()`/`safeSessionStorage()` di `src/lib/storage.ts`.
- **Skrip bersama wajib dipakai:** `scripts/lib/files.mjs` (`collectFiles`,
  `resolveDistFile`, `writeTempFile`, `replaceFile`) dan `scripts/lib/browser.mjs`
  (`preparePage`) menggantikan penelusur berkas dan penyiapan peramban yang dulu disalin.
- **Logika klien besar dipindah ke `src/lib`:** `header-nav.ts`, `review-client.ts`,
  `search-page.ts`, `map-client.ts`, `topic-page.ts`.
- **Pemindai matematika bersama** `src/lib/math-scan.ts` (`scanMath`/`replaceMath`) dipakai
  renderer markdown (`src/utils/markdown.ts`) dan linter konten (`scripts/lint-content.mjs`).
  Sisa implementasi terpisah: pencarian LaTeX pada HTML (`scripts/check-latex.mjs`) dan
  audit DOM (`scripts/audit.mjs`).
- **Token tak terpakai dihapus** dari `tokens.css`; `--z-*` kini dipakai untuk lapisan tetap.
  `.badge-grade` tinggal di `components.css`. `featuredTools` diturunkan dari `toolGroups`
  (flag `featured`/`featuredNote`), dan tautan kelas footer dari `gradesFor('matematika')`.
- **Ditunda (sengaja):** `mainNav` dibiarkan eksplisit (struktur IA dropdown tidak
  diturunkan dari `STATIC_PAGES`); relasi topik↔studi kasus masih dua registri.
