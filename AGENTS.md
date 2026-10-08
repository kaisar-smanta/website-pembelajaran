# AGENTS.md — catatan untuk sesi AI/otomatisasi

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
  npm run verify   # astro check → lint:content → build → check:latex → test → test:links
  ```

  Pemeriksaan tambahan (butuh peramban, lokal): `npm run audit`, `npm run screenshot`.

## Konvensi singkat

- **Node >= 22.18** — uji memakai fitur pemisahan TypeScript bawaan Node.
- Materi adalah **data terstruktur TypeScript** di `src/data/` (topik, soal, eksplorasi,
  studi kasus). Jangan menduplikasi metadata di komponen; impor dari `src/data/`.
- Blok interaktif ditulis langsung di data topik (tidak ada konversi otomatis).
- **Latihan tertanam**: bagian `latihan-dasar`/`latihan-cakap`/`latihan-mahir` menarik soal
  topik secara otomatis; untuk memilih soal eksplisit pakai `questionIds`, atau `practiceLevel`
  untuk menarik seluruh soal tingkat tertentu. Dihitung di `src/lib/practice.ts` dan dirender
  `SectionBlock.astro`.
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
  topik (model Leitner) dari `localStorage`, tanpa server.
- **PWA offline**: `public/sw.js` dan `public/offline.html` didaftarkan `BaseLayout.astro`
  pada build produksi (memakai `manifest.webmanifest`); halaman yang pernah dibuka tetap
  dapat diakses tanpa jaringan.
- Topik roadmap dicantumkan di `src/data/topics/planned.ts` (`status: 'rencana'`); topik
  pengayaan di luar CP ditandai `supplementary: true` dan wajib `cpNote` (ditegakkan
  `tests/pengayaan.mjs`). Halaman `/tantangan` menghimpun soal `mahir` dan topik pengayaan;
  bagian `sejarah` (latar historis) dan `tantangan` (soal nonrutin) memperkaya materi.
  `tests/pengayaan.mjs` juga menjaga ambang soal mahir per topik.
- Uji di `tests/*.mjs`, dijalankan `npm test` (lewat `tests/run-all.mjs`, auto-discovery).
  Mencakup jawaban, pencarian (termasuk fuzzy), latihan/kemajuan, tinjauan lintas topik
  (`tests/review.mjs`), pengayaan (`tests/pengayaan.mjs`, `tests/mtl-tambahan.mjs`), tata
  letak graf prasyarat, dan setiap simulasi (`tests/sim-*.mjs`, termasuk limit & binomial).
- Simulasi disiapkan lazy lewat `initWhenVisible` (`src/lib/dom.ts`).
- Bahasa konten: Indonesia, sapaan ramah tanpa emoji.
