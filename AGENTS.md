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
- Uji di `tests/*.mjs`, dijalankan `npm test` (lewat `tests/run-all.mjs`, auto-discovery).
- Bahasa konten: Indonesia, sapaan ramah tanpa emoji.
