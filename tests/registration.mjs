// Penjaga registrasi otomatis (import.meta.glob).
//
// Aplikasi memuat topik & soal lewat `import.meta.glob` yang MEMBUANG berkas
// yang tidak cocok bentuknya tanpa galat. Uji ini memastikan setiap berkas data
// benar-benar menghasilkan setidaknya satu topik/soal, sehingga berkas baru yang
// salah bentuk gagal keras alih-alih hilang diam-diam dari situs.
//
// Pemakaian: node tests/registration.mjs (dipanggil oleh `npm test`).

import { ok, checks, collectTopicFiles, collectQuestionFiles } from './_util.mjs';

const topicFiles = await collectTopicFiles();
const questionFiles = await collectQuestionFiles();

for (const { file, topics } of topicFiles) {
  ok(topics.length >= 1, `berkas topik ${file} tidak menghasilkan topik (bentuk ekspor salah?)`);
  ok(
    topics.length === 1,
    `berkas topik ${file} menghasilkan ${topics.length} topik (harusnya 1 berkas = 1 topik)`,
  );
}

for (const { file, questions } of questionFiles) {
  ok(questions.length >= 1, `berkas soal ${file} tidak menghasilkan soal (bentuk ekspor salah?)`);
}

ok(topicFiles.length >= 40, `jumlah berkas topik mencurigakan: ${topicFiles.length}`);
ok(questionFiles.length >= 40, `jumlah berkas soal mencurigakan: ${questionFiles.length}`);

console.log(
  `Registrasi diperiksa: ${topicFiles.length} berkas topik, ` +
    `${questionFiles.length} berkas soal (${checks.count} asersi)`,
);
