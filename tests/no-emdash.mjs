// Penjaga prosa: tidak boleh ada em-dash (U+2014) di seluruh sumber repositori,
// dan en-dash (U+2013) hanya boleh dipakai untuk rentang. Em-dash adalah sidik
// jari prosa mesin; ganti dengan koma, titik dua, kurung, atau pisahkan kalimat.
// En-dash yang bersebelahan dengan huruf kecil (mis. dua kata gabungan yang seharusnya bertanda hubung)
// adalah kekeliruan dan harus memakai hyphen-minus. Bila kode memang perlu
// menyebut karakternya, tulis escape `\u2014`, bukan literal.
// node tests/no-emdash.mjs
import { scanEmDashes, scanEnDashMisuse } from '../scripts/lib/emdash.mjs';
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

const endashFindings = scanEnDashMisuse();

check('tidak ada en-dash (U+2013) di luar rentang', () => {
  if (endashFindings.length) {
    const preview = endashFindings
      .slice(0, 25)
      .map((f) => `    ${f.file}:${f.line} -> ${f.context}`)
      .join('\n');
    const more = endashFindings.length > 25 ? `\n    ... dan ${endashFindings.length - 25} lainnya` : '';
    throw new Error(
      `Ditemukan ${endashFindings.length} en-dash di luar rentang. Ganti dengan hyphen-minus "-".\n${preview}${more}`,
    );
  }
});

console.log(`PASS no-emdash (${checks.count} pemeriksaan)`);
