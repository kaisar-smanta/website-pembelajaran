/**
 * Normalisasi jawaban singkat yang murni (tanpa DOM) agar jawaban siswa dapat
 * dicocokkan dengan kunci maupun `acceptedAnswers` bank soal, terlepas dari
 * perbedaan penulisan: LaTeX vs Unicode, koma desimal vs titik, pemisah
 * ribuan, superskrip, dan simbol perkalian.
 *
 * Dipakai bersama oleh komponen QuestionCard (di peramban) dan
 * `tests/answer.mjs` (Node), sehingga perilaku penilaian tidak lagi
 * diduplikasi di dalam komponen.
 */

const SUPERSCRIPTS: Record<string, string> = {
  '⁰': '0',
  '¹': '1',
  '²': '2',
  '³': '3',
  '⁴': '4',
  '⁵': '5',
  '⁶': '6',
  '⁷': '7',
  '⁸': '8',
  '⁹': '9',
};

interface BracedGroup {
  content: string;
  next: number;
}

/** Membaca grup `{...}` berimbang mulai dari indeks `i`, atau null bila gagal. */
function readBracedGroup(source: string, i: number): BracedGroup | null {
  if (source[i] !== '{') return null;
  let depth = 0;
  for (let j = i; j < source.length; j += 1) {
    const ch = source[j];
    if (ch === '{') depth += 1;
    else if (ch === '}') {
      depth -= 1;
      if (depth === 0) return { content: source.slice(i + 1, j), next: j + 1 };
    }
  }
  return null;
}

/**
 * Mengubah `\frac{a}{b}` / `\dfrac{a}{b}` menjadi `(a)/(b)` agar pengelompokan
 * pembilang dan penyebut tetap terjaga. Dilakukan sebelum braces dibuang.
 */
function convertFractions(source: string): string {
  let out = '';
  let i = 0;
  while (i < source.length) {
    const plainAt = source.indexOf('\\frac', i);
    const dAt = source.indexOf('\\dfrac', i);
    if (plainAt === -1 && dAt === -1) {
      out += source.slice(i);
      break;
    }
    let at: number;
    let cmdLen: number;
    if (dAt !== -1 && (plainAt === -1 || dAt <= plainAt)) {
      at = dAt;
      cmdLen = '\\dfrac'.length;
    } else {
      at = plainAt;
      cmdLen = '\\frac'.length;
    }
    out += source.slice(i, at);
    const numerator = readBracedGroup(source, at + cmdLen);
    const denominator = numerator ? readBracedGroup(source, numerator.next) : null;
    if (!numerator || !denominator) {
      out += source.slice(at, at + cmdLen);
      i = at + cmdLen;
      continue;
    }
    out += `(${convertFractions(numerator.content)})/(${convertFractions(denominator.content)})`;
    i = denominator.next;
  }
  return out;
}

/**
 * Menyeragamkan `\sqrt{x}` / `\sqrt x` / `√x` menjadi `sqrt(x)` sehingga
 * penulisan LaTeX dan Unicode saling cocok.
 */
function convertSqrt(source: string): string {
  let out = '';
  let i = 0;
  while (i < source.length) {
    const cmdAt = source.indexOf('\\sqrt', i);
    const symAt = source.indexOf('√', i);
    if (cmdAt === -1 && symAt === -1) {
      out += source.slice(i);
      break;
    }
    const useSymbol = symAt !== -1 && (cmdAt === -1 || symAt < cmdAt);
    const at = useSymbol ? symAt : cmdAt;
    const cmdLen = useSymbol ? 1 : '\\sqrt'.length;
    out += source.slice(i, at);
    let j = at + cmdLen;
    if (!useSymbol) {
      while (source[j] === ' ') j += 1;
    }
    if (source[j] === '{') {
      const group = readBracedGroup(source, j);
      if (group) {
        out += `sqrt(${convertSqrt(group.content)})`;
        i = group.next;
        continue;
      }
    }
    const token = /^[a-zA-Z0-9]+/.exec(source.slice(j));
    if (token) {
      out += `sqrt(${token[0]})`;
      i = j + token[0].length;
      continue;
    }
    out += 'sqrt';
    i = at + cmdLen;
  }
  return out;
}

/**
 * Menyesuaikan angka ala Indonesia: koma menjadi titik desimal, titik pemisah
 * ribuan dibuang. Contoh: `120.000,00` -> `120000.00`, `0,96` -> `0.96`,
 * sedangkan `17.32` (titik desimal) dibiarkan.
 */
function normalizeIndonesianNumber(source: string): string {
  let s = source;
  let previous = '';
  do {
    previous = s;
    s = s.replace(/(\d)\.(\d{3})(?=\D|$)/g, '$1$2');
  } while (s !== previous);
  return s.replace(/,/g, '.');
}

/**
 * Tahap normalisasi sebelum penyesuaian angka ala Indonesia. Dipisahkan agar
 * pencocokan dapat membaca ulang angka asli (lihat `answerCandidates`).
 */
function normalizeCore(value: string): string {
  let s = String(value ?? '')
    .toLowerCase()
    .trim();

  // Tanda minus dan berbagai dash Unicode disamakan ke ASCII '-'.
  s = s.replace(/[\u2212\u2013\u2014]/g, '-');

  // Superskrip angka (dan superskrip minus) menjadi notasi '^n'.
  s = s.replace(/⁻?[⁰¹²³⁴⁵⁶⁷⁸⁹]+/g, (match) => {
    const negative = match.startsWith('⁻');
    const digits = (negative ? match.slice(1) : match)
      .split('')
      .map((ch) => SUPERSCRIPTS[ch] ?? '')
      .join('');
    return `^${negative ? '-' : ''}${digits}`;
  });

  // Notasi LaTeX untuk perkalian titik disamakan dengan '*'.
  s = s.replace(/\\cdot/g, '*');

  // Pecahan & akar diubah selagi braces masih ada.
  s = convertFractions(s);
  s = convertSqrt(s);

  // Buang perintah LaTeX yang tidak bermakna bagi pencocokan.
  s = s.replace(/\\left|\\right/g, '');
  s = s.replace(/\\[,;!]/g, '');
  s = s.replace(/\$/g, '');

  // Buang braces dan sisa backslash (perilaku lama dipertahankan).
  s = s.replace(/[\\{}]/g, '');

  // Spasi tidak pernah bermakna pada jawaban singkat.
  s = s.replace(/\s+/g, '');

  // Simbol perkalian diseragamkan; jangan dihapus agar `3×4` bukan `34`.
  s = s.replace(/[×·]/g, '*');

  // Buang awalan mata uang rupiah, sisa penyesuaian angka dilakukan terpisah.
  if (s.startsWith('rp')) s = s.slice(2);

  return s;
}

/** Menormalkan satu jawaban menjadi bentuk kanonik untuk dibandingkan. */
export function normalizeAnswer(value: string): string {
  return normalizeIndonesianNumber(normalizeCore(value));
}

/**
 * Membuang nol di belakang koma sekaligus menyeragamkan bentuk desimal
 * (`0,90` -> `0.9`, `.9` -> `0.9`, `1.50` -> `1.5`). Mengembalikan `null`
 * untuk nilai yang bukan bilangan.
 */
function trimNumericZeros(value: string): string | null {
  const decimal = /^([+-]?)(\d*)\.(\d*)$/.exec(value);
  if (decimal) {
    const sign = decimal[1] === '-' ? '-' : '';
    const integer = decimal[2] || '0';
    const fraction = decimal[3].replace(/0+$/, '');
    return fraction ? `${sign}${integer}.${fraction}` : `${sign}${integer}`;
  }
  return /^[+-]?\d+$/.test(value) ? value : null;
}

/**
 * Menerjemahkan kandidat menjadi nilai numerik, termasuk pecahan biasa maupun
 * pecahan ber-tanda-kurung hasil konversi LaTeX (`(3)/(4)` -> `0.75`).
 */
function numericValue(value: string): number | null {
  const fraction = /^\(?([+-]?\d+(?:\.\d+)?)\)?\/\(?(\d+(?:\.\d+)?)\)?$/.exec(value);
  if (fraction) {
    const numerator = Number(fraction[1]);
    const denominator = Number(fraction[2]);
    if (!Number.isFinite(numerator) || !Number.isFinite(denominator) || denominator === 0) {
      return null;
    }
    return numerator / denominator;
  }
  if (/^[+-]?(?:\d+(?:\.\d+)?|\.\d+)$/.test(value)) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  }
  return null;
}

/** Toleransi relatif 1e-6 (dengan lantai 1e-6 untuk nilai berukuran < 1). */
function approximatelyEqual(a: number, b: number): boolean {
  return Math.abs(a - b) <= 1e-6 * Math.max(Math.abs(a), Math.abs(b), 1);
}

/**
 * Menghasilkan himpunan tafsir kanonik dari satu jawaban. Selain bentuk
 * normalnya, ditambahkan varian yang setara: nol di belakang koma, bacaan
 * desimal dari angka ber-titik yang ambigu (`1.234` juga dibaca `1.234`,
 * `120.000` juga dibaca `120`), dan bentuk derajat (`45`, `45°`,
 * `45 derajat`, `45^\circ`).
 */
export function answerCandidates(value: string): Set<string> {
  const core = normalizeCore(String(value ?? ''));
  const candidates = new Set<string>();
  const add = (candidate: string) => {
    if (candidate) candidates.add(candidate);
  };

  const base = normalizeIndonesianNumber(core);
  add(base);
  const trimmedBase = trimNumericZeros(base);
  if (trimmedBase !== null) add(trimmedBase);

  // Titik pada `1.234` ambigu: pemisah ribuan (1234) atau desimal (1,234).
  // Tambahkan bacaan desimalnya tanpa menghapus titik.
  if (!core.includes(',') && /^[+-]?(?:\d+(?:\.\d+)?|\.\d+)$/.test(core)) {
    add(core);
    const trimmedCore = trimNumericZeros(core);
    if (trimmedCore !== null) add(trimmedCore);
  }

  const numberBases = new Set<string>();
  for (const candidate of [...candidates]) {
    const bare = candidate.replace(/(?:°|derajat|\^circ)$/, '');
    if (bare !== candidate) numberBases.add(bare);
    if (/^[+-]?\d+(?:\.\d+)?$/.test(candidate)) numberBases.add(candidate);
  }
  for (const bare of numberBases) {
    if (!/^[+-]?\d+(?:\.\d+)?$/.test(bare)) continue;
    add(`${bare}°`);
    add(`${bare}derajat`);
    add(`${bare}^circ`);
  }

  return candidates;
}

/**
 * Memeriksa apakah `input` cocok dengan `answer` atau salah satu
 * `acceptedAnswers`. Pencocokan dilakukan dengan mengiris himpunan kandidat
 * tafsir; bila tidak bertemu, pecahan dan desimal dibandingkan secara numerik
 * dengan toleransi kecil. Jawaban kosong selalu ditolak.
 */
export function answersMatch(
  input: string,
  answer: string,
  acceptedAnswers: string[] = [],
): boolean {
  const inputCandidates = answerCandidates(input);
  if (inputCandidates.size === 0) return false;

  const inputNumbers: number[] = [];
  for (const candidate of inputCandidates) {
    const parsed = numericValue(candidate);
    if (parsed !== null) inputNumbers.push(parsed);
  }

  const pool = [answer, ...(acceptedAnswers ?? [])];
  for (const entry of pool) {
    const entryCandidates = answerCandidates(entry);
    for (const candidate of inputCandidates) {
      if (entryCandidates.has(candidate)) return true;
    }
    if (inputNumbers.length === 0) continue;
    for (const candidate of entryCandidates) {
      const parsed = numericValue(candidate);
      if (parsed === null) continue;
      for (const inputNumber of inputNumbers) {
        if (approximatelyEqual(inputNumber, parsed)) return true;
      }
    }
  }
  return false;
}

/** Nama lama yang dipertahankan untuk pemanggil komponen. */
export function isAcceptedAnswer(
  input: string,
  answer: string,
  acceptedAnswers: string[] = [],
): boolean {
  return answersMatch(input, answer, acceptedAnswers);
}
