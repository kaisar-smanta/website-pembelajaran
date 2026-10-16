/**
 * Pemindai matematika bersama (satu sumber kebenaran).
 *
 * Sebelumnya ada beberapa pemindai `$...$`/`$$...$$` yang terpisah: di renderer
 * markdown dan di skrip lint. Modul ini menyatukan semantiknya: segmen `$...$`
 * dan `$$...$$`, dolar yang di-escape (`\$`), interpolasi template (`${...}`),
 * serta display math multi-baris.
 *
 * Modul murni (tanpa DOM) sehingga dapat dipakai renderer build maupun skrip
 * Node.
 */

export interface MathSegment {
  /** Isi di antara pembatas dolar, tanpa `$`. */
  body: string;
  /** `true` untuk `$$...$$` (display), `false` untuk `$...$` (inline). */
  display: boolean;
  /** Indeks karakter awal (posisi `$` pembuka). */
  index: number;
}

export interface MathScan {
  segments: MathSegment[];
  /** Jumlah dolar tak ter-escape yang tidak diikuti `{` (deteksi tak tertutup). */
  dollars: number;
  /** Teks dengan rentang math dikosongkan (spasi), indeks tetap. */
  cleaned: string;
}

/** Memindai teks dan mengembalikan segmen math, jumlah dolar, dan teks bersih. */
export function scanMath(text: string): MathScan {
  const len = text.length;
  const segments: MathSegment[] = [];
  const spans: [number, number][] = [];

  let dollars = 0;
  for (let i = 0; i < len; i += 1) {
    if (text[i] === '$' && text[i - 1] !== '\\' && text[i + 1] !== '{') dollars += 1;
  }

  let i = 0;
  while (i < len) {
    const c = text[i];
    if (c === '\\') {
      i += 2;
      continue;
    }
    if (c !== '$' || text[i + 1] === '{') {
      i += 1;
      continue;
    }
    if (text[i + 1] === '$') {
      const start = i + 2;
      let j = start;
      let end = -1;
      while (j < len) {
        if (text[j] === '\\') {
          j += 2;
          continue;
        }
        if (text[j] === '$' && text[j + 1] === '$') {
          end = j;
          break;
        }
        j += 1;
      }
      if (end === -1) break;
      segments.push({ body: text.slice(start, end), display: true, index: i });
      spans.push([i, end + 2]);
      i = end + 2;
    } else {
      const start = i + 1;
      let j = start;
      let end = -1;
      while (j < len && text[j] !== '\n') {
        if (text[j] === '\\') {
          j += 2;
          continue;
        }
        if (text[j] === '$') {
          end = j;
          break;
        }
        j += 1;
      }
      if (end === -1) {
        i += 1;
        continue;
      }
      segments.push({ body: text.slice(start, end), display: false, index: i });
      spans.push([i, end + 1]);
      i = end + 1;
    }
  }

  // Kosongkan rentang math tanpa menggeser indeks (pakai spasi) dan tanpa
  // menghapus baris baru, sehingga pemetaan indeks tetap sama.
  const chars = text.split('');
  for (const [a, b] of spans) {
    for (let k = a; k < b; k += 1) if (chars[k] !== '\n') chars[k] = ' ';
  }
  return { segments, dollars, cleaned: chars.join('') };
}

/**
 * Mengganti setiap segmen math dengan hasil `replacer(body, display)`; sisa teks
 * dipertahankan apa adanya. Satu lintasan, tanpa regex berlapis.
 */
export function replaceMath(
  text: string,
  replacer: (body: string, display: boolean) => string,
): string {
  const { segments } = scanMath(text);
  if (segments.length === 0) return text;
  let out = '';
  let last = 0;
  for (const segment of segments) {
    const width = segment.body.length + (segment.display ? 4 : 2);
    out += text.slice(last, segment.index) + replacer(segment.body, segment.display);
    last = segment.index + width;
  }
  return out + text.slice(last);
}
