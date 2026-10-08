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

/** Menormalkan satu jawaban menjadi bentuk kanonik untuk dibandingkan. */
export function normalizeAnswer(value: string): string {
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

  // Awalan mata uang rupiah lalu angka ala Indonesia.
  if (s.startsWith('rp')) s = s.slice(2);
  s = normalizeIndonesianNumber(s);

  return s;
}

/**
 * Memeriksa apakah `input` cocok dengan `answer` atau salah satu
 * `acceptedAnswers` setelah dinormalkan. Jawaban kosong selalu ditolak.
 */
export function isAcceptedAnswer(
  input: string,
  answer: string,
  acceptedAnswers: string[] = [],
): boolean {
  const value = normalizeAnswer(input);
  if (!value) return false;
  const pool = [answer, ...(acceptedAnswers ?? [])].map((entry) => normalizeAnswer(entry));
  return pool.includes(value);
}
