import type { Block, Section, Topic } from '@/types/content';
import { explorations } from '../explorations.ts';

/**
 * Lapisan peningkatan interaktivitas.
 *
 * Alih-alih menyunting puluhan berkas materi satu per satu, fungsi di sini
 * mengubah data topik saat dimuat sehingga SETIAP halaman materi memperoleh:
 *  - pemantik prediktif (dugaan disimpan sebelum jawaban dibuka);
 *  - refleksi yang jawabannya tersimpan di peramban;
 *  - contoh terbimbing yang dibuka bertahap;
 *  - sisipan eksplorasi yang pasti ada bila topik memiliki simulasi sendiri.
 *
 * Perubahan hanya menambah/menggeser blok; teks materi tetap utuh.
 */

const EXPLORATION_FALLBACK_BODY =
  'Gunakan simulasi interaktif berikut untuk menguji dugaanmu dan melihat polanya sendiri.';

/** Id eksplorasi yang memang dimiliki topik ini. */
function ownedExplorationId(topic: Topic): string | undefined {
  return explorations.find(
    (e) => e.topicId === topic.id && (e.status ?? 'lengkap') === 'lengkap',
  )?.id;
}

function detailsOf(section: Section): Extract<Block, { kind: 'details' }> | undefined {
  return (section.blocks ?? []).find(
    (b): b is Extract<Block, { kind: 'details' }> => b.kind === 'details',
  );
}

/** Pemantik: ubah "Lihat jawaban" statis menjadi dugaan tersimpan + reveal. */
function enhancePemantik(section: Section): Section {
  if (section.kind !== 'pemantik') return section;
  const blocks = section.blocks ?? [];
  const hasPrediction = blocks.some((b) => b.kind === 'prediction');
  if (hasPrediction) {
    // Sudah ditulis manual: buang sisa blok jawaban statis agar tidak ganda.
    return blocks.some((b) => b.kind === 'details')
      ? { ...section, blocks: blocks.filter((b) => b.kind !== 'details') }
      : section;
  }
  const details = detailsOf(section);
  if (!details) return section;
  const rest = blocks.filter((b) => b.kind !== 'details');
  const prompt = (section.body ?? '').trim() || section.title || 'Apa dugaanmu?';
  const prediction: Block = {
    kind: 'prediction',
    prompt,
    reveal: details.text,
    saveLabel: 'Simpan dugaan & lihat jawabannya',
  };
  return { ...section, body: undefined, blocks: [prediction, ...rest] };
}

/** Refleksi: ubah daftar bernomor statis menjadi jawaban tersimpan. */
function enhanceRefleksi(section: Section): Section {
  if (section.kind !== 'refleksi') return section;
  const blocks = section.blocks ?? [];
  const existing = blocks.find(
    (b): b is Extract<Block, { kind: 'reflection' }> => b.kind === 'reflection',
  );
  const body = (section.body ?? '').trim();
  if (!body) return section;
  const prompts: string[] = [];
  const intro: string[] = [];
  for (const rawLine of body.split('\n')) {
    const m = rawLine.trim().match(/^\d+\.\s+(.+)/);
    if (m) prompts.push(m[1].trim());
    else if (rawLine.trim()) intro.push(rawLine.trimEnd());
  }
  const cleaned = intro.join('\n').trim() || undefined;
  if (existing) {
    // Pertanyaan sudah dipindah ke blok refleksi; singkirkan duplikat di body.
    return prompts.length ? { ...section, body: cleaned } : section;
  }
  if (prompts.length < 2) return section;
  const reflection: Block = {
    kind: 'reflection',
    prompts,
    confidenceLabel: 'Seberapa yakin kamu dengan jawaban refleksimu?',
  };
  return { ...section, body: cleaned, blocks: [reflection, ...blocks] };
}

/** Contoh: pecah beberapa contoh menjadi langkah yang dibuka bertahap. */
function buildSteps(
  body: string,
  splitMarker: RegExp,
  testRe: RegExp,
  titlePrefix: string,
  strip: RegExp,
): { intro: string; steps: { title: string; text: string }[] } | undefined {
  const parts = body
    .split(new RegExp(`(?=${splitMarker.source})`, 'g'))
    .map((s) => s.trim())
    .filter(Boolean);
  const examples = parts.filter((p) => testRe.test(p));
  if (examples.length < 2) return undefined;
  const intro = parts
    .filter((p) => !testRe.test(p))
    .join('\n\n')
    .trim();
  return {
    intro,
    steps: examples.map((text, i) => ({
      title: `${titlePrefix} ${i + 1}`,
      text: text.replace(strip, '').trim(),
    })),
  };
}

function enhanceContoh(section: Section): Section {
  if (section.kind !== 'contoh' || !section.body) return section;
  const blocks = section.blocks ?? [];
  const existing = blocks.find(
    (b): b is Extract<Block, { kind: 'step-reveal' }> => b.kind === 'step-reveal',
  );
  const built =
    buildSteps(
      section.body,
      /\*\*Contoh\s*\d+[^*]*\*\*/,
      /^\*\*Contoh\s*\d+/,
      'Contoh',
      /^\*\*Contoh\s*\d+[^*]*\*\*\s*/,
    ) ??
    buildSteps(
      section.body,
      /\*\*Langkah\s*\d+[^*]*\*\*/,
      /^\*\*Langkah\s*\d+/,
      'Langkah',
      /^\*\*Langkah\s*\d+[^*]*\*\*\s*/,
    );
  if (!built) return section;
  if (existing) {
    // Sudah ada blok bertahap: buang contoh statis yang akan tampil ganda.
    return existing.steps.length >= built.steps.length
      ? { ...section, body: built.intro || undefined }
      : section;
  }
  const stepBlock: Block = {
    kind: 'step-reveal',
    intro: built.intro || undefined,
    steps: built.steps,
  };
  return { ...section, body: built.intro || undefined, blocks: [stepBlock, ...blocks] };
}

/** Pastikan topik menyisipkan eksplorasinya sendiri (memperbaiki id yang salah). */
function enhanceExploration(topic: Topic, sections: Section[]): Section[] {
  const id = ownedExplorationId(topic);
  if (!id) return sections;
  const embedded = sections.some((s) =>
    (s.blocks ?? []).some((b) => b.kind === 'exploration' && b.explorationId === id),
  );
  if (embedded) return sections;

  const existing = sections.find((s) => s.kind === 'eksplorasi');
  if (existing) {
    const blocks = existing.blocks ?? [];
    const hasOtherExploration = blocks.some((b) => b.kind === 'exploration');
    const nextBlocks: Block[] = hasOtherExploration
      ? blocks.map((b) =>
          b.kind === 'exploration' ? ({ kind: 'exploration', explorationId: id } as Block) : b,
        )
      : [...blocks, { kind: 'exploration', explorationId: id } as Block];
    return sections.map((s) => (s === existing ? { ...s, blocks: nextBlocks } : s));
  }

  const newSection: Section = {
    id: 'eksplorasi',
    kind: 'eksplorasi',
    title: 'Eksplorasi',
    body: EXPLORATION_FALLBACK_BODY,
    blocks: [{ kind: 'exploration', explorationId: id }],
  };
  const stopKinds = new Set<Section['kind']>([
    'contoh',
    'latihan-dasar',
    'latihan-cakap',
    'latihan-mahir',
    'dunia-nyata',
  ]);
  const at = sections.findIndex((s) => stopKinds.has(s.kind));
  const pos = at === -1 ? sections.length : at;
  return [...sections.slice(0, pos), newSection, ...sections.slice(pos)];
}

interface ExtraBlock {
  /** Id bagian sasaran (diutamakan) atau jenis bagian bila id tidak cocok. */
  sectionId?: string;
  kind?: Section['kind'];
  block: Block;
}

/**
 * Blok interaktif tambahan per topik. Diletakkan di sini agar seluruh variasi
 * (mencocokkan, kartu istilah, penukar representasi, cari kesalahan) terpakai
 * tanpa menyunting tiap berkas materi. Block baru cukup ditambahkan ke daftar
 * topik terkait.
 */
const EXTRA_BLOCKS: Record<string, ExtraBlock[]> = {
  eksponen: [
    {
      sectionId: 'konsep',
      block: {
        kind: 'match',
        intro: 'Cocokkan setiap bentuk dengan aturan yang tepat.',
        pairs: [
          { left: '$a^{m} \\cdot a^{n}$', right: '$a^{m+n}$' },
          { left: '$\\dfrac{a^{m}}{a^{n}}$', right: '$a^{m-n}$' },
          { left: '$(a^{m})^{n}$', right: '$a^{mn}$' },
          { left: '$a^{-n}$', right: '$\\dfrac{1}{a^{n}}$' },
        ],
      },
    },
    {
      sectionId: 'representasi',
      block: {
        kind: 'tabs',
        items: [
          { label: 'Perkalian berulang', body: '$2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2$' },
          { label: 'Notasi eksponen', body: '$2^{5}$' },
          { label: 'Hasil', body: '$32$' },
        ],
      },
    },
    {
      sectionId: 'kesalahan-umum',
      block: {
        kind: 'spot-mistake',
        intro: 'Salah satu langkah berikut keliru. Klik langkah yang salah.',
        steps: [
          '$2^{3} \\cdot 2^{5} = 2^{3+5} = 2^{8}$',
          '$2^{3} \\cdot 2^{5} = 4^{8}$',
          '$2^{8} = 256$',
        ],
        wrongIndex: 1,
        explanation:
          'Basis tidak berubah saat mengalikan bilangan berpangkat dengan basis sama. Yang dijumlahkan adalah eksponennya, sehingga $2^{3} \\cdot 2^{5} = 2^{8} = 256$, bukan $4^{8}$.',
      },
    },
  ],
  'barisan-deret': [
    {
      sectionId: 'konsep',
      block: {
        kind: 'match',
        intro: 'Pasangkan istilah dan rumus dengan maknanya.',
        pairs: [
          { left: 'Barisan aritmetika', right: 'Selisih dua suku berurutan tetap' },
          { left: 'Barisan geometri', right: 'Rasio dua suku berurutan tetap' },
          { left: '$U_{n} = a+(n-1)b$', right: 'Rumus suku ke-$n$ aritmetika' },
          {
            left: '$S_{n} = \\dfrac{n}{2}(2a+(n-1)b)$',
            right: 'Jumlah $n$ suku pertama aritmetika',
          },
        ],
      },
    },
  ],
  'fungsi-kuadrat': [
    {
      sectionId: 'konsep',
      block: {
        kind: 'flip-cards',
        intro: 'Klik kartu untuk mengingat kembali istilah kunci.',
        cards: [
          { front: 'Diskriminan $D$', back: '$D=b^{2}-4ac$, menentukan banyak titik potong sumbu-$x$' },
          { front: 'Sumbu simetri', back: '$x=-\\dfrac{b}{2a}$' },
          { front: 'Titik puncak', back: '$\\left(-\\dfrac{b}{2a},\\ f\\left(-\\dfrac{b}{2a}\\right)\\right)$' },
          { front: 'Bentuk puncak', back: '$f(x)=a(x-p)^{2}+q$ dengan puncak $(p,q)$' },
        ],
      },
    },
    {
      sectionId: 'representasi',
      block: {
        kind: 'tabs',
        items: [
          { label: 'Bentuk umum', body: '$f(x)=ax^{2}+bx+c$' },
          { label: 'Bentuk puncak', body: '$f(x)=a(x-p)^{2}+q$' },
          {
            label: 'Grafik',
            body: 'Parabola terbuka ke atas bila $a>0$ dan ke bawah bila $a<0$.',
          },
        ],
      },
    },
  ],
  'fungsi-eksponensial': [
    {
      sectionId: 'konsep',
      block: {
        kind: 'flip-cards',
        intro: 'Bedakan peran setiap bagian fungsi.',
        cards: [
          { front: 'Basis $b$', back: 'Faktor pengali tiap langkah; $b>1$ naik, $0<b<1$ turun' },
          { front: 'Koefisien $a$', back: 'Nilai awal $f(0)=a$' },
          { front: 'Asimtot datar', back: 'Garis $y=0$ yang didekati grafik' },
          { front: 'Peluruhan', back: 'Terjadi ketika $0<b<1$' },
        ],
      },
    },
  ],
  matriks: [
    {
      kind: 'konsep',
      block: {
        kind: 'match',
        intro: 'Cocokkan istilah matriks dengan artinya.',
        pairs: [
          { left: 'Determinan $\\det(A)$', right: '$ad-bc$' },
          { left: '$AB$', right: 'Hasil kali matriks; umumnya $AB \\neq BA$' },
          { left: 'Matriks identitas $I$', right: '$AI=IA=A$' },
          { left: 'Invers $A^{-1}$', right: 'Ada bila $\\det(A) \\neq 0$' },
        ],
      },
    },
  ],
  trigonometri: [
    {
      sectionId: 'konsep',
      block: {
        kind: 'match',
        intro: 'Pasangkan identitas dan nilai sudut istimewa.',
        pairs: [
          { left: '$\\sin^{2}\\theta+\\cos^{2}\\theta$', right: '$1$' },
          { left: '$\\tan\\theta$', right: '$\\dfrac{\\sin\\theta}{\\cos\\theta}$' },
          { left: '$\\sin 30^\\circ$', right: '$\\dfrac{1}{2}$' },
          { left: '$\\cos 60^\\circ$', right: '$\\dfrac{1}{2}$' },
        ],
      },
    },
  ],
  lingkaran: [
    {
      sectionId: 'konsep',
      block: {
        kind: 'flip-cards',
        intro: 'Uji ingatanmu tentang unsur lingkaran.',
        cards: [
          { front: 'Busur', back: 'Bagian dari keliling lingkaran' },
          { front: 'Juring', back: 'Daerah yang dibatasi dua jari-jari dan sebuah busur' },
          { front: 'Tali busur', back: 'Ruas garis yang menghubungkan dua titik pada lingkaran' },
          { front: 'Sudut pusat', back: 'Sudut yang titik sudutnya di pusat lingkaran' },
        ],
      },
    },
  ],
  peluang: [
    {
      sectionId: 'konsep',
      block: {
        kind: 'match',
        intro: 'Cocokkan aturan peluang dengan bentuknya.',
        pairs: [
          { left: 'Peluang teoretis', right: '$P(A)=\\dfrac{n(A)}{n(S)}$' },
          { left: 'Komplemen', right: '$P(A^{c})=1-P(A)$' },
          { left: 'Saling lepas', right: '$P(A \\cup B)=P(A)+P(B)$' },
          { left: 'Saling bebas', right: '$P(A \\cap B)=P(A)P(B)$' },
        ],
      },
    },
  ],
  'peluang-bersyarat': [
    {
      sectionId: 'konsep',
      block: {
        kind: 'match',
        intro: 'Pasangkan notasi peluang bersyarat dengan maknanya.',
        pairs: [
          { left: '$P(A \\mid B)$', right: 'Peluang $A$ dengan syarat $B$ terjadi' },
          { left: '$P(A \\cap B)$', right: '$P(A \\mid B)\\,P(B)$' },
          { left: 'Kejadian saling bebas', right: '$P(A \\mid B)=P(A)$' },
          { left: 'Rumus Bayes', right: 'Menghitung $P(B \\mid A)$ dari $P(A \\mid B)$' },
        ],
      },
    },
  ],
  regresi: [
    {
      sectionId: 'konsep',
      block: {
        kind: 'match',
        intro: 'Cocokkan pola sebaran dengan jenis korelasinya.',
        pairs: [
          { left: 'Korelasi positif', right: 'Titik-titik cenderung naik ke kanan' },
          { left: 'Korelasi negatif', right: 'Titik-titik cenderung turun ke kanan' },
          { left: '$r = 0$', right: 'Tidak ada korelasi linear' },
          { left: 'Nilai $r$ mendekati $1$', right: 'Korelasi positif kuat' },
        ],
      },
    },
  ],
  spltv: [
    {
      kind: 'konsep',
      block: {
        kind: 'match',
        intro: 'Cocokkan jenis sistem dengan banyak solusinya.',
        pairs: [
          { left: 'Sistem konsisten', right: 'Punya tepat satu solusi' },
          { left: 'Sistem tak konsisten', right: 'Tidak punya solusi' },
          { left: 'Sistem bergantung', right: 'Punya tak hingga banyak solusi' },
          { left: 'Determinan nol', right: 'Garis sejajar atau berimpit' },
        ],
      },
    },
    {
      kind: 'representasi',
      block: {
        kind: 'tabs',
        items: [
          { label: 'Substitusi', body: 'Nyatakan satu variabel lalu substitusikan ke persamaan lain.' },
          { label: 'Eliminasi', body: 'Jumlahkan atau kurangkan persamaan untuk menghilangkan variabel.' },
          { label: 'Grafik', body: 'Titik potong dua garis adalah solusi sistem.' },
        ],
      },
    },
  ],
  'sistem-pertidaksamaan': [
    {
      kind: 'konsep',
      block: {
        kind: 'flip-cards',
        intro: 'Ingat kembali istilah program linear.',
        cards: [
          { front: 'Daerah penyelesaian', back: 'Himpunan titik yang memenuhi semua pertidaksamaan' },
          { front: 'Garis batas', back: 'Garis dari pertidaksamaan; keikutsertaannya bergantung pada tanda pertidaksamaan' },
          { front: 'Uji titik', back: 'Substitusi satu titik untuk menentukan daerah yang benar' },
          { front: 'Optimasi', back: 'Mencari nilai maksimum atau minimum pada daerah layak' },
        ],
      },
    },
    {
      kind: 'representasi',
      block: {
        kind: 'tabs',
        items: [
          { label: 'Simbolik', body: '$ax+by \\leq c$' },
          { label: 'Grafik', body: 'Arsir daerah tiap pertidaksamaan; irisan arsirannya adalah solusi.' },
        ],
      },
    },
  ],
  'statistik-dalam-kehidupan': [
    {
      kind: 'konsep',
      block: {
        kind: 'match',
        intro: 'Cocokkan ukuran pemusatan dengan maknanya.',
        pairs: [
          { left: 'Mean', right: 'Jumlah data dibagi banyak data' },
          { left: 'Median', right: 'Nilai tengah data terurut' },
          { left: 'Modus', right: 'Nilai yang paling sering muncul' },
          { left: 'Kuartil', right: 'Nilai yang membagi data terurut menjadi empat bagian' },
        ],
      },
    },
  ],
  'analisis-distribusi-data': [
    {
      kind: 'konsep',
      block: {
        kind: 'match',
        intro: 'Pasangkan ukuran sebaran dengan definisinya.',
        pairs: [
          { left: 'Jangkauan', right: 'Selisih nilai terbesar dan terkecil' },
          { left: 'Kuartil bawah $Q_1$', right: 'Median separuh data bagian bawah' },
          { left: 'Pencilan', right: 'Data yang jauh dari kelompok utama' },
          { left: 'Simpangan kuartil', right: 'Setengah selisih $Q_3$ dan $Q_1$' },
        ],
      },
    },
  ],
  'pemodelan-fungsi': [
    {
      kind: 'konsep',
      block: {
        kind: 'match',
        intro: 'Cocokkan pola perubahan dengan jenis modelnya.',
        pairs: [
          { left: 'Model linear', right: 'Perubahan tetap setiap satuan' },
          { left: 'Model kuadrat', right: 'Perubahan laju yang tetap' },
          { left: 'Model eksponensial', right: 'Berubah dengan faktor pengali tetap' },
          { left: 'Model periodik', right: 'Berulang pada selang tetap' },
        ],
      },
    },
    {
      kind: 'representasi',
      block: {
        kind: 'tabs',
        items: [
          { label: 'Verbal', body: 'Deskripsi situasi dalam kata-kata' },
          { label: 'Tabel', body: 'Daftar pasangan masukan dan keluaran' },
          { label: 'Rumus', body: '$y=f(x)$' },
          { label: 'Grafik', body: 'Gambar hubungan masukan dan keluaran' },
        ],
      },
    },
  ],
  'asosiasi-kausalitas': [
    {
      kind: 'konsep',
      block: {
        kind: 'flip-cards',
        intro: 'Bedakan asosiasi dari sebab-akibat.',
        cards: [
          { front: 'Asosiasi', back: 'Kecenderungan dua variabel berubah bersama' },
          { front: 'Kausalitas', back: 'Satu variabel benar-benar menyebabkan perubahan variabel lain' },
          { front: 'Variabel perancu', back: 'Faktor tersembunyi yang dapat menjelaskan asosiasi' },
          { front: 'Eksperimen', back: 'Menguji sebab-akibat dengan mengendalikan variabel' },
        ],
      },
    },
  ],
  'pinjaman-investasi': [
    {
      kind: 'konsep',
      block: {
        kind: 'match',
        intro: 'Cocokkan istilah pinjaman dengan maknanya.',
        pairs: [
          { left: 'Anuitas', right: 'Pembayaran tetap yang dilakukan berkala' },
          { left: 'Pokok', right: 'Bagian angsuran yang mengurangi utang' },
          { left: 'Bunga', right: 'Biaya atas sisa utang' },
          { left: 'Tenor', right: 'Lama waktu pinjaman' },
        ],
      },
    },
  ],
};

function applyExtras(topic: Topic, sections: Section[]): Section[] {
  const extras = EXTRA_BLOCKS[topic.id];
  if (!extras) return sections;
  let result = sections;
  for (const extra of extras) {
    const index = result.findIndex((section) =>
      extra.sectionId ? section.id === extra.sectionId : section.kind === extra.kind,
    );
    if (index < 0) continue;
    const section = result[index];
    const blocks = section.blocks ?? [];
    if (blocks.some((b) => b.kind === extra.block.kind)) continue;
    const updated: Section = { ...section, blocks: [...blocks, extra.block] };
    result = [...result.slice(0, index), updated, ...result.slice(index + 1)];
  }
  return result;
}

export function enhanceTopic(topic: Topic): Topic {
  let sections = topic.sections
    .map(enhancePemantik)
    .map(enhanceRefleksi)
    .map(enhanceContoh);
  sections = enhanceExploration(topic, sections);
  sections = applyExtras(topic, sections);
  const id = ownedExplorationId(topic);
  return {
    ...topic,
    sections,
    explorations: topic.explorations ?? (id ? [id] : undefined),
  };
}

/** Teks untuk indeks pencarian, termasuk isi blok interaktif. */
export function sectionSearchText(section: Section): string {
  const parts: string[] = [section.title ?? '', section.body ?? ''];
  for (const block of section.blocks ?? []) {
    switch (block.kind) {
      case 'callout':
        parts.push(block.text);
        break;
      case 'details':
        parts.push(block.summary, block.text);
        break;
      case 'prediction':
        parts.push(block.prompt, ...(block.options ?? []), block.reveal);
        break;
      case 'reflection':
        parts.push(...block.prompts);
        break;
      case 'step-reveal':
        parts.push(block.intro ?? '', ...block.steps.map((s) => `${s.title ?? ''} ${s.text}`));
        break;
      case 'spot-mistake':
        parts.push(block.intro ?? '', ...block.steps, block.explanation);
        break;
      case 'match':
        parts.push(block.intro ?? '', ...block.pairs.flatMap((p) => [p.left, p.right]));
        break;
      case 'flip-cards':
        parts.push(block.intro ?? '', ...block.cards.flatMap((c) => [c.front, c.back]));
        break;
      case 'tabs':
        parts.push(...block.items.map((i) => `${i.label} ${i.body}`));
        break;
      default:
        break;
    }
  }
  return parts.filter(Boolean).join(' ');
}
