import type { Topic } from '@/types/content';

export const limitFungsi: Topic = {
  id: 'limit-fungsi',
  slug: 'limit-fungsi',
  title: 'Limit Fungsi',
  subtitle: 'Mendekati nilai tanpa harus mencapainya',
  grade: 'XII',
  phase: 'F',
  element: 'kalkulus',
  subject: 'matematika-lanjut',
  status: 'lengkap',
  supplementary: true,
  cpNote:
    'Menyiapkan dasar konseptual bagi elemen Kalkulus Matematika Tingkat Lanjut, khususnya FL-KAL-1 tentang turunan sebagai laju perubahan dan FL-KAL-2 tentang penerapannya. Limit hasil bagi selisih yang dilatih di sini memperkuat perhitungan turunan pada topik Turunan, meski limit sendiri belum berdiri sebagai pernyataan CP tersendiri.',
  estimatedMinutes: 100,
  summary:
    'Memahami limit sebagai nilai yang didekati fungsi, menghitung limit aljabar dengan substitusi, pemfaktoran, dan perkalian akar sekawan, serta menentukan limit di tak hingga.',
  description:
    'Limit adalah gagasan dasar kalkulus: nilai yang didekati suatu fungsi ketika variabelnya mendekati sebuah titik, tanpa mengharuskan fungsi itu terdefinisi di titik tersebut. Topik ini berangkat dari pengamatan nilai fungsi di sekitar satu titik, lalu memperkenalkan notasi $\\lim_{x \\to a} f(x) = L$ dan syarat keberadaan limit melalui limit kiri dan limit kanan. Kita mempelajari sifat-sifat limit, tiga teknik utama menghitung limit bentuk tak tentu $\\dfrac{0}{0}$ (substitusi langsung, pemfaktoran, dan perkalian akar sekawan), serta limit di tak hingga untuk bentuk $\\dfrac{\\infty}{\\infty}$. Sebagai penutup, limit dihubungkan dengan turunan sebagai limit hasil bagi selisih, sehingga menjadi jembatan menuju topik Turunan.',
  keywords: [
    'limit',
    'limit fungsi',
    'limit kiri',
    'limit kanan',
    'limit aljabar',
    'bentuk tak tentu',
    'pemfaktoran',
    'akar sekawan',
    'limit tak hingga',
    'kalkulus',
  ],
  prerequisites: ['polinomial'],
  relatedTopics: ['turunan', 'aplikasi-turunan'],
  prerequisiteKnowledge: [
    'Memfaktorkan bentuk aljabar, termasuk selisih kuadrat $a^{2}-b^{2}=(a-b)(a+b)$',
    'Menyederhanakan pecahan aljabar dan merasionalkan bentuk akar',
    'Menghitung nilai fungsi polinomial dan fungsi rasional',
    'Sifat-sifat bilangan berpangkat dan konsep nilai yang makin besar tanpa batas',
  ],
  objectives: [
    { text: 'Peserta didik dapat menjelaskan pengertian limit fungsi secara intuitif sebagai nilai yang didekati.' },
    { text: 'Peserta didik dapat menentukan limit fungsi aljabar dengan substitusi langsung, pemfaktoran, dan perkalian akar sekawan.' },
    { text: 'Peserta didik dapat menggunakan sifat-sifat limit untuk menghitung limit fungsi.' },
    { text: 'Peserta didik dapat menentukan limit fungsi di tak hingga.' },
    { text: 'Peserta didik dapat menjelaskan hubungan limit dengan turunan dan memakainya pada masalah laju perubahan.' },
  ],
  applications: ['mtl-limit-kadar-obat'],
  sections: [
    {
      id: 'tujuan',
      kind: 'tujuan',
      title: 'Tujuan Pembelajaran',
      body: 'Setelah mempelajari topik ini, peserta didik dapat menjelaskan pengertian limit secara intuitif, menentukan limit fungsi aljabar dengan substitusi langsung, pemfaktoran, dan perkalian akar sekawan, menggunakan sifat-sifat limit, menentukan limit di tak hingga, serta menjelaskan hubungan limit dengan turunan.',
    },
    {
      id: 'pemantik',
      kind: 'pemantik',
      title: 'Pertanyaan Pemantik',
      blocks: [
        {
          kind: 'prediction',
          prompt: `Perhatikan fungsi $f(x) = \\dfrac{x^{2} - 1}{x - 1}$. Di $x = 1$ fungsi ini **tidak terdefinisi** karena penyebutnya nol, sehingga $f(1)$ tidak ada.
- Bagaimana perilaku $f(x)$ ketika $x$ **mendekati** $1$ dari kiri dan dari kanan?
- Apakah nilainya menuju suatu bilangan tertentu, dan berapa bilangan itu?`,
          reveal: `Untuk $x \\neq 1$, pecahan dapat disederhanakan:
$$f(x) = \\frac{(x-1)(x+1)}{x-1} = x + 1.$$
Jadi ketika $x$ makin dekat ke $1$, baik dari kiri ($0{,}9;\\ 0{,}99;\\ 0{,}999$) maupun dari kanan ($1{,}1;\\ 1{,}01;\\ 1{,}001$), nilai $f(x)$ makin dekat ke $2$. Nilai yang didekati inilah yang disebut **limit**:
$$\\lim_{x \\to 1} f(x) = 2,$$
walaupun $f(1)$ sendiri tidak ada.`,
          saveLabel: 'Simpan dugaan & lihat jawabannya',
        },
      ],
    },
    {
      id: 'prasyarat',
      kind: 'prasyarat',
      title: 'Prasyarat',
      body: `Limit menuntut keluwesan menyederhanakan bentuk aljabar. Pastikan kamu sudah lancar:
- memfaktorkan bentuk aljabar, terutama selisih kuadrat $a^{2}-b^{2}=(a-b)(a+b)$;
- menyederhanakan pecahan aljabar dan merasionalkan bentuk akar;
- menghitung nilai fungsi polinomial dan fungsi rasional;
- memahami konsep nilai yang makin besar tanpa batas, seperti $\\dfrac{1}{x}$ ketika $x$ membesar.`,
    },
    {
      id: 'konteks',
      kind: 'konteks',
      title: 'Situasi dan Konteks',
      body: `Banyak besaran penting muncul saat kita mendekati keadaan ekstrem: berapa kecepatan sesaat pada suatu detik, berapa biaya rata-rata per unit bila produksi terus ditambah, atau berapa konsentrasi obat setelah waktu yang sangat lama. Pertanyaan-pertanyaan itu menuntut kita menghitung **nilai yang didekati**, bukan nilai yang benar-benar tercapai.
Gagasan "nilai yang didekati" inilah yang disebut **limit**. Limit menjadi fondasi untuk membangun turunan dan integral, sekaligus alat untuk menangani bentuk yang tampak mustahil seperti $\\dfrac{0}{0}$ atau $\\dfrac{\\infty}{\\infty}$.`,
    },
    {
      id: 'konsep',
      kind: 'konsep',
      title: 'Konsep Inti: Limit sebagai Nilai yang Didekati',
      questionIds: ['lim-07'],
      body: `**Limit** fungsi $f$ di $x = a$ adalah nilai yang didekati $f(x)$ ketika $x$ mendekati $a$, tetapi $x \\neq a$. Kita menuliskan
$$\\lim_{x \\to a} f(x) = L.$$
Penting dipahami bahwa limit **tidak bergantung pada nilai $f(a)$**. Fungsi boleh tidak terdefinisi di $a$, atau terdefinisi dengan nilai yang berbeda, selama nilai di sekitar $a$ menuju satu bilangan yang sama.

Selain itu, $x$ dapat mendekati $a$ dari dua arah:
- **limit kiri** $\\lim_{x \\to a^{-}} f(x)$, yaitu $x$ mendekati $a$ dari nilai yang lebih kecil;
- **limit kanan** $\\lim_{x \\to a^{+}} f(x)$, yaitu $x$ mendekati $a$ dari nilai yang lebih besar.

Limit $\\lim_{x \\to a} f(x)$ **ada** jika dan hanya jika limit kiri dan limit kanan sama:
$$\\lim_{x \\to a^{-}} f(x) = \\lim_{x \\to a^{+}} f(x) = L.$$
Bila kedua limit sepihak berbeda atau salah satunya tidak ada, maka limit di titik itu **tidak ada**.`,
      blocks: [
        {
          kind: 'callout',
          variant: 'concept',
          title: 'Gagasan kunci: yang penting perilaku di sekitar titik',
          text: 'Limit berbicara tentang **perilaku di sekitar** $a$, bukan tentang nilai di $a$. Karena itu $\\lim_{x \\to a} f(x)$ dapat ada meski $f(a)$ tidak ada.',
        },
        {
          kind: 'flip-cards',
          intro: 'Ingat kembali istilah dasar limit.',
          cards: [
            { front: 'Limit', back: 'Nilai yang didekati $f(x)$ saat $x$ menuju $a$' },
            { front: '$\\lim_{x \\to a^{-}} f(x)$', back: 'Limit kiri (dari nilai yang lebih kecil)' },
            { front: '$\\lim_{x \\to a^{+}} f(x)$', back: 'Limit kanan (dari nilai yang lebih besar)' },
            { front: 'Limit ada bila', back: 'limit kiri = limit kanan' },
          ],
        },
        {
          kind: 'match',
          intro: 'Cocokkan istilah atau sifat dengan pernyataannya.',
          pairs: [
            { left: 'Limit jumlah', right: '$\\lim [f(x)+g(x)] = \\lim f(x) + \\lim g(x)$' },
            { left: 'Limit hasil kali', right: '$\\lim [f(x)\\,g(x)] = \\left(\\lim f(x)\\right)\\left(\\lim g(x)\\right)$' },
            { left: 'Limit hasil bagi', right: '$\\dfrac{\\lim f(x)}{\\lim g(x)}$, asalkan $\\lim g(x) \\neq 0$' },
            { left: 'Bentuk tak tentu', right: '$\\dfrac{0}{0}$ atau $\\dfrac{\\infty}{\\infty}$' },
          ],
        },
        {
          kind: 'details',
          summary: 'Mengapa nilai $f(a)$ tidak harus sama dengan limitnya?',
          text: 'Limit hanya memeriksa nilai fungsi **di sekitar** $a$, bukan di $a$. Fungsi boleh tidak terdefinisi di $x=a$ (contohnya karena pembagian dengan nol) atau bernilai berbeda di sana, asalkan nilai di sekitar $a$ menuju satu bilangan yang sama. Karena itu $\\lim_{x \\to a} f(x)$ bisa ada meski $f(a)$ tidak ada.',
        },
        {
          kind: 'figure',
          alt: 'Grafik fungsi yang dari kiri menuju nilai negatif satu dan dari kanan menuju positif satu, dengan titik kosong di kedua sisi, menunjukkan limit dua arah yang berbeda.',
          caption: 'Grafik $f(x)=\\dfrac{|x|}{x}$ untuk $x \\neq 0$. Dari kiri nilainya menuju $-1$ dan dari kanan menuju $1$. Karena limit kiri dan limit kanan berbeda, $\\lim_{x \\to 0} f(x)$ tidak ada.',
          svg: '<svg viewBox="0 0 320 240" aria-hidden="true" role="presentation"><line x1="45" y1="130" x2="300" y2="130" stroke="currentColor" stroke-width="1.3"/><line x1="170" y1="25" x2="170" y2="210" stroke="currentColor" stroke-width="1.3"/><line x1="70" y1="160" x2="164" y2="160" stroke="currentColor" stroke-width="2.4"/><line x1="176" y1="100" x2="280" y2="100" stroke="currentColor" stroke-width="2.4"/><circle cx="164" cy="160" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="176" cy="100" r="4" fill="none" stroke="currentColor" stroke-width="2"/><text x="292" y="146" font-size="12" fill="currentColor">x</text><text x="176" y="36" font-size="12" fill="currentColor">y</text><text x="158" y="146" font-size="11" fill="currentColor">0</text><text x="58" y="176" font-size="11" fill="currentColor">limit kiri = -1</text><text x="196" y="92" font-size="11" fill="currentColor">limit kanan = 1</text></svg>',
        },
      ],
    },
    {
      id: 'representasi',
      kind: 'representasi',
      title: 'Representasi: Numerik, Grafik, dan Aljabar',
      body: `Limit dapat diamati lewat tiga representasi yang saling melengkapi. Dengan membandingkan ketiganya, kita dapat membangun dugaan lalu memastikannya secara aljabar.`,
      blocks: [
        {
          kind: 'tabs',
          items: [
            {
              label: 'Numerik',
              body: `Mensubstitusikan nilai $x$ yang makin dekat ke $1$:
| $x$ | $0{,}9$ | $0{,}99$ | $0{,}999$ | $1$ | $1{,}001$ | $1{,}01$ | $1{,}1$ |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| $f(x)$ | $1{,}9$ | $1{,}99$ | $1{,}999$ | tidak ada | $2{,}001$ | $2{,}01$ | $2{,}1$ |
Dari kiri maupun kanan, nilai $f(x)$ menuju $2$.`,
            },
            {
              label: 'Grafik',
              body: `Grafik $y = \\dfrac{x^{2}-1}{x-1}$ serupa dengan garis $y = x + 1$, tetapi memiliki **lubang** (titik kosong) di $(1, 2)$. Ketika grafik didekati dari kedua arah, ketinggiannya menuju $2$, sehingga $\\lim_{x \\to 1} f(x) = 2$.`,
            },
            {
              label: 'Aljabar',
              body: `Secara aljabar, untuk $x \\neq 1$:
$$\\frac{x^{2}-1}{x-1} = \\frac{(x-1)(x+1)}{x-1} = x + 1.$$
Bentuk sederhana $x+1$ berlaku selama $x \\neq 1$, dan ketika $x \\to 1$ nilainya menuju $1 + 1 = 2$.`,
            },
          ],
        },
        {
          kind: 'table',
          caption: 'Nilai fungsi di sekitar $x = 1$',
          headers: ['$x$', '$0{,}9$', '$0{,}99$', '$0{,}999$', '$1$', '$1{,}001$', '$1{,}01$', '$1{,}1$'],
          rows: [
            ['$f(x)$', '$1{,}9$', '$1{,}99$', '$1{,}999$', 'tidak ada', '$2{,}001$', '$2{,}01$', '$2{,}1$'],
          ],
        },
        {
          kind: 'figure',
          alt: 'Grafik garis dengan satu titik kosong (lubang) yang menandai nilai limit yang didekati, dilengkapi sumbu x dan y.',
          caption: 'Grafik menuju nilai $2$ di sekitar $x=1$, tetapi titik $(1,2)$ digambarkan sebagai lingkaran kosong karena tidak termasuk domain.',
          svg: '<svg viewBox="0 0 320 200" aria-hidden="true" role="presentation"><line x1="50" y1="160" x2="300" y2="160" stroke="currentColor" stroke-width="1.5"/><line x1="50" y1="175" x2="50" y2="22" stroke="currentColor" stroke-width="1.5"/><polyline points="80,152 165,96" fill="none" stroke="currentColor" stroke-width="2.5"/><polyline points="185,80 270,37" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="175" y1="88" x2="175" y2="160" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4"/><line x1="50" y1="88" x2="175" y2="88" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4"/><circle cx="175" cy="88" r="4" fill="none" stroke="currentColor" stroke-width="2"/><text x="292" y="178" font-size="12" fill="currentColor">x</text><text x="30" y="28" font-size="12" fill="currentColor">y</text></svg>',
        },
      ],
    },
    {
      id: 'eksplorasi',
      kind: 'eksplorasi',
      title: 'Eksplorasi: Mendekati Nilai Grafik',
      body: `Gunakan simulasi berikut untuk mengamati nilai grafik di sekitar sebuah titik, mendekati dari kiri dan dari kanan. Perhatikan bagaimana nilainya makin dekat ke suatu bilangan tertentu, yang menjadi gagasan dasar limit.`,
      blocks: [
        {
          kind: 'exploration',
          explorationId: 'mtl-limit-numerik',
        },
      ],
    },
    {
      id: 'generalisasi',
      kind: 'generalisasi',
      title: 'Pola Umum: Substitusi dan Bentuk Tak Tentu',
      body: `Untuk banyak fungsi, limit cukup dihitung dengan **substitusi langsung**, yaitu mengganti $x$ dengan $a$. Sifat-sifat limit menjamin hal ini untuk fungsi polinomial dan fungsi rasional yang penyebutnya tidak nol di $a$:
$$\\lim_{x \\to a} f(x) = f(a) \\quad \\text{bila } f \\text{ kontinu di } a.$$

Masalah muncul ketika substitusi menghasilkan bentuk **tak tentu**, terutama $\\dfrac{0}{0}$. Bentuk ini tidak lantas berarti limit tidak ada. Yang dituntut adalah fungsi perlu **disederhanakan** lebih dahulu. Pola penanganannya bergantung pada bentuk fungsinya:
- jika berbentuk pecahan polinomial, **faktorkan** lalu coret faktor yang sama;
- jika memuat bentuk akar, kalikan dengan **akar sekawan** untuk menghilangkan akar pada selisih;
- jika $x \\to \\infty$ dan berbentuk $\\dfrac{\\infty}{\\infty}$, **bagi pembilang dan penyebut** dengan pangkat tertinggi.

Setelah bentuk tak tentu dihilangkan, substitusi langsung kembali dapat dilakukan.`,
    },
    {
      id: 'rumus',
      kind: 'rumus',
      title: 'Sifat-Sifat Limit dan Limit Istimewa',
      body: `**Sifat dasar.** Untuk $k$ konstanta dan limit yang terlibat ada:
$$\\lim_{x \\to a} k = k, \\qquad \\lim_{x \\to a} x = a.$$
$$\\lim_{x \\to a}\\left[f(x) \\pm g(x)\\right] = \\lim_{x \\to a} f(x) \\pm \\lim_{x \\to a} g(x).$$
$$\\lim_{x \\to a}\\left[f(x)\\,g(x)\\right] = \\left(\\lim_{x \\to a} f(x)\\right)\\left(\\lim_{x \\to a} g(x)\\right).$$
$$\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\frac{\\lim_{x \\to a} f(x)}{\\lim_{x \\to a} g(x)}, \\quad \\text{asalkan } \\lim_{x \\to a} g(x) \\neq 0.$$
$$\\lim_{x \\to a}\\left[f(x)\\right]^{n} = \\left(\\lim_{x \\to a} f(x)\\right)^{n}, \\qquad \\lim_{x \\to a} \\sqrt[n]{f(x)} = \\sqrt[n]{\\lim_{x \\to a} f(x)}.$$

**Limit di tak hingga.**
$$\\lim_{x \\to \\infty} \\frac{1}{x^{n}} = 0 \\quad (n > 0), \\qquad \\lim_{x \\to \\infty} \\left(c + \\frac{k}{x}\\right) = c.$$
Untuk bentuk $\\dfrac{\\infty}{\\infty}$, nilai limit ditentukan oleh suku berpangkat tertinggi pada pembilang dan penyebut. Bila pembilang berderajat $m$ dan penyebut berderajat $n$, maka:
- jika $m = n$, limitnya adalah perbandingan koefisien suku berpangkat tertinggi;
- jika $m > n$, limitnya $\\infty$ (membesar tanpa batas);
- jika $m < n$, limitnya $0$.

**Limit hasil bagi selisih (menuju turunan).**
$$\\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h} = f'(x),$$
asalkan limit ini ada.`,
      blocks: [
        {
          kind: 'callout',
          variant: 'tip',
          title: 'Kunci mengingat',
          text: 'Coba **substitusi langsung** dahulu. Jika muncul $\\dfrac{0}{0}$, jangan menyerah: sederhanakan dengan memfaktorkan atau mengalikan akar sekawan, lalu substitusikan lagi.',
        },
      ],
    },
    {
      id: 'contoh',
      kind: 'contoh',
      title: 'Contoh Terbimbing',
      blocks: [
        {
          kind: 'step-reveal',
          steps: [
            {
              title: 'Contoh 1: Pemfaktoran',
              text: `Hitung $\\lim_{x \\to 2} \\dfrac{x^{2}-4}{x-2}$.

*Penyelesaian.* Substitusi langsung memberi $\\dfrac{4-4}{2-2} = \\dfrac{0}{0}$, bentuk tak tentu. Faktorkan pembilangnya:
$$\\frac{x^{2}-4}{x-2} = \\frac{(x-2)(x+2)}{x-2} = x+2 \\quad (x \\neq 2).$$
Maka $\\lim_{x \\to 2} (x+2) = 2 + 2 = 4$.`,
            },
            {
              title: 'Contoh 2: Perkalian Akar Sekawan',
              text: `Hitung $\\lim_{x \\to 0} \\dfrac{\\sqrt{x+4}-2}{x}$.

*Penyelesaian.* Substitusi langsung memberi $\\dfrac{2-2}{0} = \\dfrac{0}{0}$. Kalikan dengan akar sekawan $\\sqrt{x+4}+2$:
$$\\frac{\\sqrt{x+4}-2}{x} \\cdot \\frac{\\sqrt{x+4}+2}{\\sqrt{x+4}+2} = \\frac{(x+4)-4}{x\\left(\\sqrt{x+4}+2\\right)} = \\frac{x}{x\\left(\\sqrt{x+4}+2\\right)}.$$
Coret $x$ (untuk $x \\neq 0$): $\\dfrac{1}{\\sqrt{x+4}+2}$. Saat $x \\to 0$ hasilnya $\\dfrac{1}{2+2} = \\dfrac{1}{4}$.`,
            },
            {
              title: 'Contoh 3: Limit di Tak Hingga',
              text: `Hitung $\\lim_{x \\to \\infty} \\dfrac{3x^{2}+2x-1}{x^{2}-5}$.

*Penyelesaian.* Ini bentuk $\\dfrac{\\infty}{\\infty}$. Bagi pembilang dan penyebut dengan pangkat tertinggi $x^{2}$:
$$\\frac{3 + \\frac{2}{x} - \\frac{1}{x^{2}}}{1 - \\frac{5}{x^{2}}}.$$
Karena $\\dfrac{1}{x} \\to 0$ dan $\\dfrac{1}{x^{2}} \\to 0$ ketika $x \\to \\infty$, hasilnya $\\dfrac{3+0-0}{1-0} = 3$.`,
            },
            {
              title: 'Contoh 4: Limit yang Tidak Ada',
              text: `Hitung $\\lim_{x \\to 0} \\dfrac{|x|}{x}$.

*Penyelesaian.* Fungsi tidak terdefinisi di $x = 0$, sehingga perlu diperiksa limit satu arah. Untuk $x > 0$ berlaku $|x| = x$, maka $\\dfrac{|x|}{x} = 1$ dan limit kanannya
$$\\lim_{x \\to 0^{+}} \\frac{|x|}{x} = 1.$$
Untuk $x < 0$ berlaku $|x| = -x$, maka $\\dfrac{|x|}{x} = -1$ dan limit kirinya
$$\\lim_{x \\to 0^{-}} \\frac{|x|}{x} = -1.$$
Karena limit kiri dan limit kanan berbeda ($-1 \\neq 1$), limit $\\lim_{x \\to 0} \\dfrac{|x|}{x}$ **tidak ada**.`,
            },
            {
              title: 'Contoh 5: Derajat Pembilang Lebih Besar',
              text: `Hitung $\\lim_{x \\to \\infty} \\dfrac{2x^{3}-x}{x^{2}+5}$.

*Penyelesaian.* Ini bentuk $\\dfrac{\\infty}{\\infty}$ dengan derajat pembilang $3$ lebih besar daripada derajat penyebut $2$. Bagi pembilang dan penyebut dengan $x^{2}$:
$$\\frac{2x - \\frac{1}{x}}{1 + \\frac{5}{x^{2}}}.$$
Ketika $x \\to \\infty$, pembilangnya menuju $\\infty$ (seperti $2x$) sedangkan penyebutnya menuju $1$. Karena itu
$$\\lim_{x \\to \\infty} \\frac{2x^{3}-x}{x^{2}+5} = \\infty.$$`,
            },
            {
              title: 'Contoh 6: Derajat Pembilang Lebih Kecil',
              text: `Hitung $\\lim_{x \\to \\infty} \\dfrac{3x+1}{x^{2}-4}$.

*Penyelesaian.* Di sini derajat pembilang $1$ lebih kecil daripada derajat penyebut $2$. Bagi pembilang dan penyebut dengan $x^{2}$:
$$\\frac{\\frac{3}{x} + \\frac{1}{x^{2}}}{1 - \\frac{4}{x^{2}}}.$$
Karena $\\dfrac{3}{x} \\to 0$ dan $\\dfrac{1}{x^{2}} \\to 0$ ketika $x \\to \\infty$, hasilnya
$$\\lim_{x \\to \\infty} \\frac{3x+1}{x^{2}-4} = \\frac{0+0}{1-0} = 0.$$`,
            },
          ],
        },
      ],
    },
    {
      id: 'latihan-dasar',
      kind: 'latihan-dasar',
      title: 'Latihan Dasar',
      level: 'dasar',
    },
    {
      id: 'latihan-cakap',
      kind: 'latihan-cakap',
      title: 'Latihan Cakap',
      level: 'cakap',
    },
    {
      id: 'latihan-mahir',
      kind: 'latihan-mahir',
      title: 'Latihan Mahir',
      level: 'mahir',
    },
    {
      id: 'dunia-nyata',
      kind: 'dunia-nyata',
      title: 'Penerapan di Dunia Nyata',
      body: `Limit dipakai setiap kali kita ingin tahu **kecenderungan jangka panjang** atau **perilaku di sekitar keadaan ekstrem**. Kecepatan sesaat pada spidometer, contohnya $80$ km/jam, adalah limit kecepatan rata-rata ketika selang waktu diperkecil menuju nol: dari $10$ sekon, $1$ sekon, sampai $0{,}1$ sekon, hasil bagi $\\dfrac{\\Delta s}{\\Delta t}$ makin dekat ke $80$ km/jam. Inilah benang merah antara limit dan turunan.
Di bidang kesehatan, konsentrasi obat dalam darah setelah waktu yang sangat lama didekati dengan limit di tak hingga. Jika kadar awal $200$ mg dan setiap jam tersisa $90\\%$, maka setelah $x$ jam kadarnya $200(0{,}9)^{x}$ mg. Karena $0{,}9^{x} \\to 0$ ketika $x \\to \\infty$, kadar sisa itu menuju $0$ mg, sehingga dokter dapat memperkirakan waktu obat habis bekerja.
Di bidang ekonomi, biaya rata-rata per unit ketika produksi diperbesar tanpa batas menunjukkan biaya variabel per unit. Jika biaya total $C(x) = 5000 + 40x$ rupiah untuk $x$ unit, biaya rata-ratanya $\\dfrac{C(x)}{x} = 40 + \\dfrac{5000}{x}$ menuju $40$ rupiah per unit saat $x \\to \\infty$.
Semua contoh ini berbagi satu gagasan: kita tidak menghitung nilai di titik yang mustahil dicapai; yang kita cari nilai yang **didekati** ketika keadaan mendekati titik itu.`,
    },
    {
      id: 'kesalahan-umum',
      kind: 'kesalahan-umum',
      title: 'Kesalahan Umum',
      body: `**1. Menyimpulkan limit tidak ada hanya karena muncul $\\dfrac{0}{0}$.** Bentuk $\\dfrac{0}{0}$ adalah **tak tentu**, bukan bukti ketiadaan limit. Sederhanakan dahulu, lalu hitung.
**2. Menganggap limit selalu sama dengan nilai fungsi.** $\\lim_{x \\to a} f(x)$ boleh berbeda dari $f(a)$, dan boleh ada walaupun $f(a)$ tidak terdefinisi.
**3. Mencoret faktor tanpa memperhatikan syarat.** Penyederhanaan seperti $\\dfrac{(x-2)(x+2)}{x-2} = x+2$ sah untuk $x \\neq 2$; justru ketidakterdefinisian di $x=2$ itulah alasan kita memakai limit.
**4. Lupa mengalikan dengan akar sekawan pada kedua sisi.** Saat merasionalkan $\\dfrac{\\sqrt{x+4}-2}{x}$, pembilang dan penyebut harus dikalikan bentuk sekawan yang sama.
**5. Salah menaksir limit di tak hingga.** Untuk $\\dfrac{\\infty}{\\infty}$, jangan hanya melihat koefisien; bandingkan **pangkat tertinggi** pembilang dan penyebutnya.`,
      blocks: [
        {
          kind: 'spot-mistake',
          intro: 'Seorang siswa menghitung $\\lim_{x \\to 2} \\dfrac{x^{2}-4}{x-2}$. Ada satu langkah yang keliru. Klik langkah itu.',
          steps: [
            'Substitusi $x=2$ memberi $\\dfrac{0}{0}$, sehingga limitnya **tidak ada**.',
            'Faktorkan pembilang: $x^{2}-4=(x-2)(x+2)$.',
            'Untuk $x \\neq 2$, berlaku $\\dfrac{(x-2)(x+2)}{x-2}=x+2$.',
            'Ambil $x \\to 2$: nilai $x+2$ menuju $4$.',
          ],
          wrongIndex: 0,
          explanation: 'Langkah pertama keliru. Bentuk $\\dfrac{0}{0}$ tidak lantas berarti limit tidak ada; bentuk itu **tak tentu** sehingga perlu disederhanakan. Setelah difaktorkan dan dicoret, limitnya ada dan bernilai $4$.',
        },
      ],
    },
    {
      id: 'tantangan',
      kind: 'tantangan',
      title: 'Akar Pangkat Tiga pada Limit',
      body: `Perkalian akar sekawan tidak hanya berlaku untuk akar kuadrat. Untuk akar pangkat tiga, kita memanfaatkan identitas selisih kubus $u^{3}-1=(u-1)\\left(u^{2}+u+1\\right)$.

**Soal.** Hitung
$$\\lim_{x\\to 0}\\frac{\\sqrt[3]{1+x}-1}{x}.$$

Substitusi langsung $x=0$ memberi $\\dfrac{0}{0}$, jadi bentuk ini perlu disederhanakan lebih dahulu.`,
      blocks: [
        {
          kind: 'callout',
          variant: 'tip',
          title: 'Petunjuk',
          text: 'Misalkan $u=\\sqrt[3]{1+x}$, sehingga $u^{3}=1+x$ dan $x=u^{3}-1$. Perhatikan bahwa $x$ dapat difaktorkan sebagai $(u-1)\\left(u^{2}+u+1\\right)$.',
        },
        {
          kind: 'step-reveal',
          intro: 'Ubah limit ke variabel $u$, sederhanakan dengan selisih kubus, lalu ambil limitnya.',
          steps: [
            {
              title: 'Langkah 1: Substitusi variabel',
              text: `Misalkan $u=\\sqrt[3]{1+x}$. Maka $u^{3}=1+x$, sehingga $x=u^{3}-1$. Ketika $x\\to 0$, nilai $u\\to 1$. Pembilangnya menjadi $u-1$, sehingga
$$\\frac{\\sqrt[3]{1+x}-1}{x}=\\frac{u-1}{u^{3}-1}.$$`,
            },
            {
              title: 'Langkah 2: Faktorkan selisih kubus',
              text: `Gunakan identitas $u^{3}-1=(u-1)\\left(u^{2}+u+1\\right)$, sehingga penyebutnya dapat ditulis $(u-1)\\left(u^{2}+u+1\\right)$.`,
            },
            {
              title: 'Langkah 3: Coret faktor sekutu',
              text: `Untuk $u\\neq 1$ berlaku
$$\\frac{u-1}{(u-1)\\left(u^{2}+u+1\\right)}=\\frac{1}{u^{2}+u+1}.$$`,
            },
            {
              title: 'Langkah 4: Hitung limit',
              text: `Karena substitusi kembali dapat dilakukan ketika $u\\to 1$,
$$\\lim_{x\\to 0}\\frac{\\sqrt[3]{1+x}-1}{x}=\\frac{1}{1^{2}+1+1}=\\frac{1}{3}.$$`,
            },
          ],
        },
      ],
    },
    {
      id: 'sejarah',
      kind: 'sejarah',
      title: 'Lahirnya Gagasan Limit',
      body: `Gagasan "mendekati" muncul sejak awal kalkulus. Isaac Newton berbicara tentang kuantitas yang menyusut menuju nol, dan pada abad ke-18 Jean le Rond d'Alembert mulai merumuskan limit sebagai nilai yang didekati. Pada 1821 Augustin-Louis Cauchy memberikan definisi limit yang sistematis, memperbaiki dasar kalkulus yang sebelumnya bersandar pada bilangan sangat kecil. Karl Weierstrass kemudian, pada pertengahan abad ke-19, memperkenalkan definisi $\\varepsilon$-$\\delta$ yang menjadi bentuk baku hingga kini. Dengan fondasi ini, limit menjadi dasar bagi turunan dan integral.`,
    },
    {
      id: 'refleksi',
      kind: 'refleksi',
      title: 'Refleksi',
      body: 'Nilai yang didekati sering berbeda dari nilai yang benar-benar tercapai. Bandingkan pengalamanmu saat menghitung limit, lalu tarik satu pelajaran pribadi dari tiga teknik yang sudah dipelajari.',
      blocks: [
        {
          kind: 'reflection',
          prompts: [
            'Apa perbedaan antara nilai fungsi $f(a)$ dan limit $\\lim_{x \\to a} f(x)$?',
            'Mengapa limit baru ada jika limit kiri dan limit kanan bernilai sama?',
            'Kapan substitusi langsung cukup, dan kapan kita perlu memfaktorkan atau mengalikan akar sekawan?',
            'Bagaimana gagasan limit muncul dalam definisi turunan?',
          ],
          confidenceLabel: 'Seberapa yakin kamu memilih teknik penyederhanaan untuk bentuk tak tentu?',
        },
      ],
    },
    {
      id: 'rangkuman',
      kind: 'rangkuman',
      title: 'Rangkuman',
      blocks: [
        {
          kind: 'table',
          headers: ['Konsep', 'Bentuk / Rumus'],
          math: true,
          rows: [
            ['Limit di titik', '\\lim_{x \\to a} f(x) = L'],
            ['Limit kiri dan kanan', '\\lim_{x \\to a^{-}} f(x) = \\lim_{x \\to a^{+}} f(x) = L'],
            ['Substitusi langsung (kontinu)', '\\lim_{x \\to a} f(x) = f(a)'],
            ['Limit jumlah', '\\lim (f+g) = \\lim f + \\lim g'],
            ['Limit hasil bagi', '\\lim \\dfrac{f}{g} = \\dfrac{\\lim f}{\\lim g},\\ \\lim g \\neq 0'],
            ['Bentuk tak tentu', '\\dfrac{0}{0},\\ \\dfrac{\\infty}{\\infty}'],
            ['Pemfaktoran', '\\dfrac{(x-a)\\,g(x)}{x-a} = g(x),\\ x \\neq a'],
            ['Akar sekawan', '\\dfrac{\\sqrt{u}-v}{w} \\cdot \\dfrac{\\sqrt{u}+v}{\\sqrt{u}+v}'],
            ['Limit di tak hingga', '\\lim_{x \\to \\infty} \\dfrac{1}{x^{n}} = 0'],
            ['Menuju turunan', 'f\'(x) = \\lim_{h \\to 0} \\dfrac{f(x+h)-f(x)}{h}'],
          ],
        },
      ],
    },
    {
      id: 'evaluasi',
      kind: 'evaluasi',
      title: 'Evaluasi',
      questionIds: ['lim-10'],
      body: `**Cek pemahaman.** Tuliskan jawaban singkat untuk dua hal berikut. Pertama, jika substitusi memberi $\\dfrac{0}{0}$, langkah apa yang kamu pilih dahulu dan mengapa? Kedua, berikan satu contoh fungsi yang limitnya ada di suatu titik meski nilainya di titik itu tidak terdefinisi. Setelah itu, uji dirimu lewat [Latihan & Asesmen](/latihan) topik **Limit Fungsi**.`,
    },
  ],
};
