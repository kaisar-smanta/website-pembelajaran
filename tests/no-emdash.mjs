// Penjaga prosa: tidak boleh ada em-dash (U+2014) di seluruh sumber repositori.
// Em-dash adalah sidik jari prosa mesin; ganti dengan koma, titik dua, kurung,
// atau pisahkan kalimat. Bila kode memang perlu menyebut karakternya, tulis
// escape `\u2014`, bukan literal. node tests/no-emdash.mjs
import { scanEmDashes } from '../scripts/lib/emdash.mjs';
import { check, checks } from './_util.mjs';

const findings = scanEmDashes();

check('tidak ada em-dash (U+2014) di sumber', () => {
  if (findings.length) {
    const preview = findings
      .slice(0, 25)
      .map((f) => `    ${f.file}:${f.line}`)
      .join('\n');
    const more = findings.length > 25 ? `\n    ... dan ${findings.length - 25} lainnya` : '';
    throw new Error(
      `Ditemukan ${findings.length} em-dash. Ganti dengan koma, titik dua, kurung, atau pisahkan kalimat.\n${preview}${more}`,
    );
  }
});

console.log(`PASS no-emdash (${checks.count} pemeriksaan)`);
