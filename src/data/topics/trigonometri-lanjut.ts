import type { Topic } from '@/types/content';

export const trigonometriLanjut: Topic = {
  id: 'trigonometri-lanjut',
  slug: 'trigonometri-lanjut',
  title: 'Trigonometri Lanjut',
  subtitle: 'Fenomena periodik, identitas, dan aturan sinus-kosinus',
  grade: 'XI',
  phase: 'F',
  element: 'aljabar-fungsi',
  subject: 'matematika-lanjut',
  status: 'lengkap',
  estimatedMinutes: 100,
  summary:
    'Memodelkan fenomena periodik dengan fungsi trigonometri serta menggunakan identitas jumlah-sudut, sudut rangkap, aturan sinus, aturan kosinus, dan luas segitiga.',
  description:
    'Trigonometri lanjut memperluas perbandingan trigonometri pada segitiga siku-siku ke fenomena periodik dan segitiga sebarang. Kita mempelajari amplitudo, periode, dan fase fungsi sinus-kosinus, lalu menurunkan identitas jumlah dan selisih sudut serta sudut rangkap. Identitas itu dipakai untuk menghitung nilai sudut tidak istimewa. Selanjutnya aturan sinus, aturan kosinus, dan rumus luas segitiga menyelesaikan masalah pada segitiga sebarang, termasuk pengukuran di dunia nyata.',
  keywords: [
    'trigonometri lanjut',
    'fungsi periodik',
    'amplitudo',
    'periode',
    'identitas trigonometri',
    'sudut rangkap',
    'aturan sinus',
    'aturan kosinus',
    'luas segitiga',
  ],
  prerequisites: ['trigonometri'],
  relatedTopics: ['vektor'],
  prerequisiteKnowledge: [
    'Perbandingan trigonometri pada segitiga siku-siku',
    'Nilai trigonometri sudut istimewa',
    'Identitas dasar $\\sin^{2}\\alpha+\\cos^{2}\\alpha=1$',
  ],
  objectives: [
    { text: 'Peserta didik dapat menentukan amplitudo, periode, dan fase fungsi trigonometri.' },
    { text: 'Peserta didik dapat menggunakan identitas jumlah dan selisih sudut.' },
    { text: 'Peserta didik dapat menggunakan identitas sudut rangkap.' },
    { text: 'Peserta didik dapat menerapkan aturan sinus dan aturan kosinus.' },
    { text: 'Peserta didik dapat menghitung luas segitiga sebarang.' },
  ],
  applications: ['mtl-navigasi-vektor', 'mtl-triangulasi-jarak'],
  sections: [
    {
      id: "tujuan",
      kind: "tujuan",
      title: "Tujuan Pembelajaran",
      body: "Setelah mempelajari topik ini, peserta didik dapat memodelkan fenomena periodik dengan fungsi trigonometri, membuktikan dan menggunakan identitas jumlah-sudut serta sudut rangkap, serta menerapkan aturan sinus, aturan kosinus, dan rumus luas untuk menyelesaikan masalah segitiga sebarang.",
    },
    {
      id: "pemantik",
      kind: "pemantik",
      title: "Pertanyaan Pemantik",
      blocks: [
        {
          kind: "prediction",
          prompt: `Suara gitar, pasang surut laut, dan arus listrik bolak-balik semuanya berulang secara teratur. Fenomena seperti ini dimodelkan dengan fungsi sinus atau kosinus.

Pertanyaannya: nilai trigonometri sudut istimewa hanya untuk $30^\\circ$, $45^\\circ$, dan $60^\\circ$. Bagaimana caranya menghitung $\\sin 75^\\circ$ tanpa kalkulator?`,
          reveal: `Tulis $75^\\circ = 45^\\circ + 30^\\circ$, lalu pakai identitas jumlah sudut:
$$\\sin 75^\\circ = \\sin(45^\\circ+30^\\circ) = \\sin 45^\\circ\\cos 30^\\circ + \\cos 45^\\circ\\sin 30^\\circ.$$
Substitusi nilai sudut istimewa memberi
$$\\frac{\\sqrt{2}}{2}\\cdot\\frac{\\sqrt{3}}{2} + \\frac{\\sqrt{2}}{2}\\cdot\\frac{1}{2} = \\frac{\\sqrt{6}+\\sqrt{2}}{4}.$$
Jadi identitas trigonometri memungkinkan kita menghitung nilai sudut tidak istimewa dari sudut-sudut istimewa.`,
          saveLabel: "Simpan dugaan & lihat jawabannya",
        },
      ],
    },
    {
      id: "prasyarat",
      kind: "prasyarat",
      title: "Prasyarat",
      body: `Trigonometri lanjut melanjutkan perbandingan trigonometri ke sudut sebarang dan segitiga sembarang. Bekal dari trigonometri dasar:
- perbandingan sinus, kosinus, dan tangen pada segitiga siku-siku;
- nilai trigonometri sudut istimewa $0^\\circ$ sampai $90^\\circ$;
- identitas dasar $\\sin^{2}\\alpha+\\cos^{2}\\alpha=1$ dan $\\tan\\alpha=\\dfrac{\\sin\\alpha}{\\cos\\alpha}$.`,
    },
    {
      id: "konteks",
      kind: "konteks",
      title: "Situasi dan Konteks",
      body: `Banyak gejala alam bersifat **periodik**: berulang pada selang waktu tetap. Tinggi gelombang laut, tegangan listrik, dan getaran pegas dapat dinyatakan dengan fungsi sinus atau kosinus. Dengan mengenali amplitudo dan periode, kita dapat memprediksi nilai pada waktu tertentu.

Sementara itu, tidak semua segitiga memiliki sudut siku-siku. Aturan sinus dan aturan kosinus memperluas trigonometri ke segitiga sebarang, sehingga pengukuran jarak dan sudut di lapangan dapat diselesaikan.`,
    },
    {
      id: "periodik",
      kind: "konsep",
      title: "Fungsi Trigonometri dan Fenomena Periodik",
      questionIds: ['tl-01'],
      body: `Fungsi trigonometri memodelkan gejala yang berulang. Bentuk umumnya
$$f(x) = A\\sin\\big(B(x-C)\\big) + D.$$
Setiap parameter memiliki makna:
- $\\lvert A \\rvert$ adalah **amplitudo**, yaitu setengah selisih nilai maksimum dan minimum;
- periode adalah $\\dfrac{360^\\circ}{\\lvert B \\rvert}$ (atau $\\dfrac{2\\pi}{\\lvert B \\rvert}$ dalam radian);
- $C$ adalah **pergeseran fase** (geser mendatar);
- $D$ adalah **pergeseran tegak** yang menggeser garis tengah grafik.

Nilai maksimum adalah $D+\\lvert A \\rvert$ dan nilai minimum $D-\\lvert A \\rvert$. Contohnya, $f(x)=3\\sin\\big(2(x-45^\\circ)\\big)-1$ memiliki amplitudo $3$, periode $\\dfrac{360^\\circ}{2}=180^\\circ$, pergeseran fase $45^\\circ$, nilai maksimum $2$, dan nilai minimum $-4$.`,
      blocks: [
        {
          kind: "callout",
          variant: "concept",
          title: "Tiga pengatur gelombang",
          text: "Amplitudo mengatur **tinggi** gelombang, periode mengatur **panjang** satu siklus, dan pergeseran fase mengatur **titik awal** gelombang.",
        },
        {
          kind: "match",
          intro: "Pasangkan identitas dan aturan trigonometri dengan bentuknya.",
          pairs: [
            {
              left: "$\\sin(A+B)$",
              right: "$\\sin A\\cos B+\\cos A\\sin B$",
            },
            {
              left: "$\\cos 2A$",
              right: "$\\cos^{2}A-\\sin^{2}A$",
            },
            {
              left: "Aturan sinus",
              right: "$\\dfrac{a}{\\sin A}=\\dfrac{b}{\\sin B}$",
            },
            {
              left: "Aturan kosinus",
              right: "$a^{2}=b^{2}+c^{2}-2bc\\cos A$",
            },
          ],
        },
        {
          kind: "flip-cards",
          intro: "Latih istilah fungsi periodik dan identitas berikut.",
          cards: [
            { front: "Fungsi periodik", back: "Fungsi yang nilainya berulang pada selang tetap" },
            { front: "Amplitudo", back: "Setengah selisih nilai maksimum dan minimum, yaitu $\\lvert A \\rvert$" },
            { front: "Periode", back: "Panjang satu siklus penuh, $\\dfrac{360^\\circ}{\\lvert B \\rvert}$" },
            { front: "Pergeseran fase", back: "Geser mendatar grafik sejauh $C$" },
            { front: "Sudut rangkap", back: "$\\sin 2\\alpha=2\\sin\\alpha\\cos\\alpha$" },
            { front: "Identitas dasar", back: "$\\sin^{2}\\alpha+\\cos^{2}\\alpha=1$" },
          ],
        },
      ],
    },
    {
      id: "parameter",
      kind: "representasi",
      title: "Membaca Parameter Fungsi Periodik",
      body: "Perhatikan bagaimana setiap parameter mengubah grafik melalui contoh $f(x)=2\\sin\\big(3(x-30^\\circ)\\big)+1$.",
      blocks: [
        {
          kind: "table",
          caption: "Parameter pada $f(x)=2\\sin(3(x-30^\\circ))+1$",
          headers: [
            "Parameter",
            "Nilai",
            "Makna",
          ],
          rows: [
            [
              "Amplitudo $\\lvert A \\rvert$",
              "$2$",
              "gelombang naik-turun sejauh $2$ dari garis tengah",
            ],
            [
              "Periode",
              "$\\dfrac{360^\\circ}{3} = 120^\\circ$",
              "satu siklus penuh setiap $120^\\circ$",
            ],
            [
              "Pergeseran fase $C$",
              "$30^\\circ$",
              "grafik digeser $30^\\circ$ ke kanan",
            ],
            [
              "Pergeseran tegak $D$",
              "$1$",
              "garis tengah berada di $y=1$",
            ],
            [
              "Nilai maksimum",
              "$2+1 = 3$",
              "puncak tertinggi gelombang",
            ],
            [
              "Nilai minimum",
              "$-2+1 = -1$",
              "lembah terendah gelombang",
            ],
          ],
        },
        {
          kind: "figure",
          alt: "Dua grafik gelombang pada rentang nol sampai tiga ratus enam puluh derajat: y sama dengan sin x bergelombang landai, dan y sama dengan dua sin tiga x bergelombang lebih tinggi dan tiga kali lebih rapat.",
          caption: "Grafik $y=\\sin x$ (garis penuh) dan $y=2\\sin 3x$ (putus-putus) pada $0^\\circ$ sampai $360^\\circ$: amplitudo menaikkan puncak, faktor $3$ memampatkan periode menjadi $120^\\circ$.",
          svg: '<svg viewBox="0 0 320 240" aria-hidden="true" role="presentation"><defs><marker id="fig-tri-axis" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0,0 L 10,5 L 0,10 z" fill="currentColor"/></marker></defs><line x1="40" y1="130" x2="305" y2="130" stroke="currentColor" stroke-width="1.2" marker-end="url(#fig-tri-axis)"/><line x1="40" y1="215" x2="40" y2="25" stroke="currentColor" stroke-width="1.2" marker-end="url(#fig-tri-axis)"/><polyline points="40,130 61.7,110 83.3,95.4 105,90 126.7,95.4 148.3,110 170,130 191.7,150 213.3,164.6 235,170 256.7,164.6 278.3,150 300,130" fill="none" stroke="currentColor" stroke-width="2.2"/><polyline points="40,130 50.8,73.4 61.7,50 72.5,73.4 83.3,130 94.2,186.6 105,210 115.8,186.6 126.7,130 137.5,73.4 148.3,50 159.2,73.4 170,130 180.8,186.6 191.7,210 202.5,186.6 213.3,130 224.2,73.4 235,50 245.8,73.4 256.7,130 267.5,186.6 278.3,210 289.2,186.6 300,130" fill="none" stroke="currentColor" stroke-width="1.8" stroke-dasharray="5 3"/><line x1="48" y1="22" x2="72" y2="22" stroke="currentColor" stroke-width="2.2"/><text x="78" y="26" font-size="11" fill="currentColor">y = sin x</text><line x1="178" y1="22" x2="202" y2="22" stroke="currentColor" stroke-width="1.8" stroke-dasharray="5 3"/><text x="208" y="26" font-size="11" fill="currentColor">y = 2 sin 3x</text><text x="296" y="124" font-size="11" fill="currentColor">x</text><text x="30" y="146" font-size="10" fill="currentColor">0</text><text x="284" y="146" font-size="10" fill="currentColor">360</text></svg>',
        },
      ],
    },
    {
      id: "jumlah-selisih",
      kind: "rumus",
      title: "Identitas Jumlah dan Selisih Sudut",
      body: `Identitas berikut berlaku untuk semua sudut $\\alpha$ dan $\\beta$:
$$\\sin(\\alpha\\pm\\beta) = \\sin\\alpha\\cos\\beta \\pm \\cos\\alpha\\sin\\beta,$$
$$\\cos(\\alpha\\pm\\beta) = \\cos\\alpha\\cos\\beta \\mp \\sin\\alpha\\sin\\beta,$$
$$\\tan(\\alpha\\pm\\beta) = \\frac{\\tan\\alpha \\pm \\tan\\beta}{1 \\mp \\tan\\alpha\\tan\\beta}.$$
Pada kosinus tandanya **berlawanan**, sedangkan pada sinus tandanya **searah**.

Contohnya,
$$\\sin 75^\\circ = \\sin(45^\\circ+30^\\circ) = \\frac{\\sqrt{6}+\\sqrt{2}}{4}.$$`,
    },
    {
      id: "sudut-rangkap",
      kind: "konsep",
      title: "Identitas Sudut Rangkap",
      body: `Dengan mengambil $\\beta=\\alpha$ pada identitas jumlah sudut, diperoleh identitas **sudut rangkap**:
$$\\sin 2\\alpha = 2\\sin\\alpha\\cos\\alpha,$$
$$\\cos 2\\alpha = \\cos^{2}\\alpha - \\sin^{2}\\alpha = 2\\cos^{2}\\alpha - 1 = 1 - 2\\sin^{2}\\alpha,$$
$$\\tan 2\\alpha = \\frac{2\\tan\\alpha}{1-\\tan^{2}\\alpha}.$$
Karena $\\cos 2\\alpha$ memiliki beberapa bentuk, pilih bentuk yang paling sesuai dengan data yang diketahui.

Jika $\\sin\\alpha=\\dfrac{3}{5}$ dan $\\alpha$ lancip, maka $\\cos\\alpha=\\dfrac{4}{5}$ sehingga
$$\\sin 2\\alpha = 2\\cdot\\frac{3}{5}\\cdot\\frac{4}{5} = \\frac{24}{25}, \\qquad \\cos 2\\alpha = 1 - 2\\left(\\frac{3}{5}\\right)^{2} = 1-\\frac{18}{25} = \\frac{7}{25}.$$`,
      blocks: [
        {
          kind: "figure",
          alt: "Lingkaran satuan berpusat di titik asal dengan jari-jari satu; sebuah titik P pada lingkaran dihubungkan ke pusat dan ke sumbu x sehingga membentuk segitiga siku-siku, dengan koordinat P adalah kosinus dan sinus sudut.",
          caption: "Lingkaran satuan: titik $P(\\cos\\alpha, \\sin\\alpha)$ memperlihatkan identitas $\\sin^{2}\\alpha+\\cos^{2}\\alpha=1$ melalui segitiga siku-siku pada jari-jari.",
          svg: '<svg viewBox="0 0 280 280" aria-hidden="true" role="presentation"><line x1="20" y1="150" x2="260" y2="150" stroke="currentColor" stroke-width="1.2"/><line x1="140" y1="272" x2="140" y2="28" stroke="currentColor" stroke-width="1.2"/><circle cx="140" cy="150" r="100" fill="none" stroke="currentColor" stroke-width="2"/><line x1="140" y1="150" x2="222" y2="93" stroke="currentColor" stroke-width="2"/><line x1="222" y1="93" x2="222" y2="150" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 3"/><line x1="140" y1="93" x2="222" y2="93" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 3"/><circle cx="222" cy="93" r="3.5" fill="currentColor"/><path d="M 212,150 L 212,140 L 222,140" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M 160,150 A 20,20 0 0 0 156.4,138.5" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="228" y="90" font-size="11" fill="currentColor">P(cos α, sin α)</text><text x="166" y="143" font-size="11" fill="currentColor">α</text><text x="224" y="166" font-size="11" fill="currentColor">cos α</text><text x="116" y="96" font-size="11" fill="currentColor">sin α</text><text x="252" y="148" font-size="11" fill="currentColor">x</text><text x="146" y="36" font-size="11" fill="currentColor">y</text></svg>',
        },
      ],
    },
    {
      id: "aturan",
      kind: "rumus",
      title: "Aturan Sinus dan Aturan Kosinus",
      body: `Aturan sinus dan aturan kosinus sudah kamu kenal dari topik **Trigonometri**. Di topik lanjut ini keduanya tidak diturunkan ulang, tetapi dipakai bersama identitas jumlah-sudut dan sudut rangkap untuk menangani segitiga sebarang, bukan hanya segitiga siku-siku.

Ingat kembali pasangan yang benar: sisi $a$ berhadapan dengan sudut $A$, sisi $b$ dengan $B$, dan sisi $c$ dengan $C$. **Aturan sinus** dipakai bila diketahui dua sudut dan satu sisi, atau dua sisi dan satu sudut di hadapan salah satunya. **Aturan kosinus** dipakai bila diketahui dua sisi dan sudut apitnya, atau ketiga sisinya. Ketika salah satu sudut $90^\\circ$, aturan kosinus menyusut menjadi teorema Pythagoras.`,
      blocks: [
        {
          kind: "callout",
          variant: "warning",
          title: "Hati-hati",
          text: "Pasangan sudut dan sisi harus benar: sisi $a$ selalu berhadapan dengan sudut $A$. Menukar pasangan ini adalah penyebab kesalahan paling umum.",
        },
      ],
    },
    {
      id: "luas",
      kind: "rumus",
      title: "Luas Segitiga",
      body: `Jika dua sisi dan sudut apitnya diketahui, luas segitiga $ABC$ adalah
$$L = \\frac{1}{2}bc\\sin A = \\frac{1}{2}ac\\sin B = \\frac{1}{2}ab\\sin C.$$
Contohnya, untuk $b=5$, $c=8$, dan $A=60^\\circ$:
$$L = \\frac{1}{2}\\cdot5\\cdot8\\cdot\\sin 60^\\circ = 20\\cdot\\frac{\\sqrt{3}}{2} = 10\\sqrt{3} \\approx 17{,}32.$$`,
    },
    {
      id: "eksplorasi",
      kind: "eksplorasi",
      title: "Eksplorasi",
      body: "Geser parameter gelombang untuk memeriksa bagaimana amplitudo dan periode saling memengaruhi.",
      blocks: [
        {
          kind: "exploration",
          explorationId: "mtl-trigonometri-gelombang",
        },
      ],
    },
    {
      id: "eksplorasi-segitiga",
      kind: "eksplorasi",
      title: "Eksplorasi Aturan Sinus pada Segitiga Sembarang",
      body: "Atur dua sudut dan satu sisi, lalu periksa bagaimana aturan sinus menentukan sudut ketiga dan kedua sisi lainnya pada segitiga sembarang.",
      blocks: [
        {
          kind: "exploration",
          explorationId: "trigonometri-segitiga",
        },
      ],
    },
    {
      id: "generalisasi",
      kind: "generalisasi",
      title: "Benang Merah Identitas dan Aturan Trigonometri",
      body: `Semua rumus pada topik ini berasal dari dua akar. Akar pertama adalah **identitas jumlah sudut**. Dengan mengambil $\\beta=\\alpha$ lahirlah identitas sudut rangkap, dan dari penggabungan bentuk-bentuknya diperoleh tiga penulisan setara untuk $\\cos 2\\alpha$. Jadi menghafal satu identitas inti lebih berguna daripada menghafal semua turunannya.

Akar kedua adalah **hubungan sisi dan sudut pada segitiga**. Aturan sinus dan aturan kosinus menghubungkan panjang sisi dengan besar sudut, dan keduanya saling terkait: ketika $A=90^\\circ$, $\\cos A=0$ sehingga aturan kosinus menyusut menjadi teorema Pythagoras. Dari pasangan itu pula muncul rumus luas $L=\\dfrac{1}{2}bc\\sin A$.

Untuk fungsi periodik $f(x)=A\\sin\\big(B(x-C)\\big)+D$, parameter-parameternya dapat dibaca langsung dari rumus: $\\lvert A\\rvert$ amplitudo, $\\dfrac{360^\\circ}{\\lvert B\\rvert}$ periode, $C$ pergeseran fase, dan $D$ garis tengah.`,
    },
    {
      id: "contoh",
      kind: "contoh",
      title: "Contoh Terbimbing",
      blocks: [
        {
          kind: "step-reveal",
          steps: [
            {
              title: "Contoh 1",
              text: `Diketahui $f(x)=3\\sin\\big(2(x-45^\\circ)\\big)-1$. Tentukan amplitudo, periode, pergeseran fase, serta nilai maksimum dan minimumnya.

*Penyelesaian.* Amplitudo $\\lvert A \\rvert=3$. Periode $\\dfrac{360^\\circ}{2}=180^\\circ$. Pergeseran fase $45^\\circ$ ke kanan dan pergeseran tegak $-1$. Nilai maksimum $3-1=2$ dan nilai minimum $-3-1=-4$.`,
            },
            {
              title: "Contoh 2",
              text: `Hitunglah $\\sin 75^\\circ$.

*Penyelesaian.*
$$\\sin 75^\\circ = \\sin(45^\\circ+30^\\circ) = \\frac{\\sqrt{2}}{2}\\cdot\\frac{\\sqrt{3}}{2} + \\frac{\\sqrt{2}}{2}\\cdot\\frac{1}{2} = \\frac{\\sqrt{6}+\\sqrt{2}}{4} \\approx 0{,}966.$$`,
            },
            {
              title: "Contoh 3",
              text: `Diketahui $\\sin\\alpha=\\dfrac{3}{5}$ dengan $\\alpha$ lancip. Tentukan $\\sin 2\\alpha$ dan $\\cos 2\\alpha$.

*Penyelesaian.* Karena $\\alpha$ lancip, $\\cos\\alpha=\\sqrt{1-\\dfrac{9}{25}}=\\dfrac{4}{5}$. Maka
$$\\sin 2\\alpha = 2\\cdot\\frac{3}{5}\\cdot\\frac{4}{5} = \\frac{24}{25}, \\qquad \\cos 2\\alpha = 1 - 2\\left(\\frac{3}{5}\\right)^{2} = \\frac{7}{25}.$$`,
            },
            {
              title: "Contoh 4",
              text: `Pada segitiga $ABC$ diketahui $b=5$, $c=8$, dan $A=60^\\circ$. Tentukan panjang $a$ dan luas segitiga.

*Penyelesaian.* Dengan aturan kosinus,
$$a^{2} = b^{2}+c^{2}-2bc\\cos A = 25+64-2\\cdot5\\cdot8\\cdot\\frac{1}{2} = 89-40 = 49,$$
sehingga $a=7$. Luasnya
$$L = \\frac{1}{2}bc\\sin A = 20\\cdot\\frac{\\sqrt{3}}{2} = 10\\sqrt{3} \\approx 17{,}32.$$`,
            },
          ],
        },
      ],
    },
    {
      id: "latihan-dasar",
      kind: "latihan-dasar",
      title: "Latihan Dasar",
      level: "dasar",
    },
    {
      id: "latihan-cakap",
      kind: "latihan-cakap",
      title: "Latihan Cakap",
      level: "cakap",
    },
    {
      id: "latihan-mahir",
      kind: "latihan-mahir",
      title: "Latihan Mahir",
      level: "mahir",
    },
    {
      id: "dunia-nyata",
      kind: "dunia-nyata",
      title: "Penerapan di Dunia Nyata",
      body: `Fungsi trigonometri memodelkan pasang surut air laut, suhu musiman, gelombang bunyi, dan arus listrik bolak-balik. Amplitudo menentukan besar simpangan, sedangkan periode menentukan seberapa cepat gejala berulang.

Aturan sinus dan kosinus dipakai dalam **triangulasi** untuk mengukur jarak antartitik yang sulit dijangkau, seperti lebar danau atau tinggi puncak. Teknik yang sama digunakan pada navigasi, survei tanah, dan penentuan posisi satelit.`,
    },
    {
      id: "kesalahan-umum",
      kind: "kesalahan-umum",
      title: "Kesalahan Umum",
      body: `**1. Salah tanda pada identitas sudut.** Untuk kosinus, tanda pada identitas jumlah/selisih **berlawanan** dengan tanda di dalam kurung: $\\cos(\\alpha+\\beta)=\\cos\\alpha\\cos\\beta-\\sin\\alpha\\sin\\beta$.
**2. Menganggap $\\sin 2\\alpha=2\\sin\\alpha$.** Sudut rangkap bukan kelipatan biasa; gunakan $\\sin 2\\alpha=2\\sin\\alpha\\cos\\alpha$.
**3. Tertukar periode dan amplitudo.** Amplitudo mengatur tinggi gelombang, periode mengatur panjang satu siklus.
**4. Salah memasangkan sisi dan sudut pada aturan sinus.** Sisi $a$ selalu berhadapan dengan sudut $A$.`,
      blocks: [
        {
          kind: "spot-mistake",
          intro: "Diketahui $\\sin\\alpha=\\dfrac{3}{5}$ dengan $\\alpha$ lancip. Perhatikan perhitungan $\\sin 2\\alpha$. Ada satu langkah yang keliru. Klik langkah itu.",
          steps: [
            "Karena $\\alpha$ lancip, $\\cos\\alpha=\\sqrt{1-\\dfrac{9}{25}}=\\dfrac{4}{5}$.",
            "Gunakan identitas sudut rangkap $\\sin 2\\alpha = 2\\sin\\alpha$.",
            "Substitusi: $\\sin 2\\alpha = 2 \\cdot \\dfrac{3}{5} = \\dfrac{6}{5}$.",
            "Simpulkan $\\sin 2\\alpha = \\dfrac{6}{5}$.",
          ],
          wrongIndex: 1,
          explanation: "Langkah kedua keliru. Identitas yang benar adalah $\\sin 2\\alpha = 2\\sin\\alpha\\cos\\alpha$, sehingga $\\sin 2\\alpha = 2 \\cdot \\dfrac{3}{5} \\cdot \\dfrac{4}{5} = \\dfrac{24}{25}$, bukan $2\\sin\\alpha$.",
        },
      ],
    },
    {
      id: "tantangan",
      kind: "tantangan",
      title: "Jumlah Tangen Tiga Sudut",
      body: `Identitas tangen jumlah sudut menyimpan hasil yang rapi.

Misalkan $A$, $B$, dan $C$ adalah besar sudut sebuah segitiga, sehingga $A+B+C=180^\\circ$.

Buktikan bahwa
$$\\tan A+\\tan B+\\tan C=\\tan A\\,\\tan B\\,\\tan C.$$
(Sudut tumpul diperbolehkan selama ketiga tangennya terdefinisi.)`,
      blocks: [
        {
          kind: "callout",
          variant: "tip",
          title: "Petunjuk",
          text: `Mulailah dari $A+B=180^\\circ-C$, lalu terapkan identitas $\\tan(A+B)$. Ingat pula bahwa $\\tan(180^\\circ-C)=-\\tan C$.`,
        },
        {
          kind: "step-reveal",
          intro: "Bukti mengalir dari satu identitas ke identitas berikutnya.",
          steps: [
            {
              title: "Ubah hubungan sudut",
              text: `Karena $A+B+C=180^\\circ$, berlaku $A+B=180^\\circ-C$.`,
            },
            {
              title: "Ambil tangen",
              text: `Ambil tangen pada kedua ruas: $\\tan(A+B)=\\tan(180^\\circ-C)=-\\tan C$.`,
            },
            {
              title: "Terapkan identitas jumlah sudut",
              text: `Gunakan $\\tan(A+B)=\\dfrac{\\tan A+\\tan B}{1-\\tan A\\tan B}$, sehingga $\\dfrac{\\tan A+\\tan B}{1-\\tan A\\tan B}=-\\tan C$.`,
            },
            {
              title: "Kalikan silang",
              text: `$\\tan A+\\tan B=-\\tan C\\left(1-\\tan A\\tan B\\right)=-\\tan C+\\tan A\\tan B\\tan C$.`,
            },
            {
              title: "Susun ulang",
              text: `Pindahkan suku $-\\tan C$ ke ruas kiri: $\\tan A+\\tan B+\\tan C=\\tan A\\tan B\\tan C$. Terbukti.`,
            },
          ],
        },
      ],
    },
    {
      id: "sejarah",
      kind: "sejarah",
      title: "Identitas dan Aturan Segitiga",
      body: `Aturan dan identitas pada topik ini berakar pada astronomi, namun kisah tabel tali busur Hipparchus dan *Almagest* Ptolemaeus sudah dibahas pada topik **Trigonometri**. Di sini sorotannya adalah identitas dan aturan pada segitiga sebarang. Sekitar 1424 Ghiyats al-Din al-Kashi, astronom di Samarkand, menyatakan aturan kosinus dalam bentuk yang setara dengan rumus modern dan menghitung nilai sinus dengan ketelitian luar biasa. Pada 1464 Regiomontanus menulis *De triangulis omnimodis*, buku sistematis pertama tentang segitiga. Identitas jumlah-sudut, sudut rangkap, dan bentuk baku trigonometri pada lingkaran satuan dirapikan Leonhard Euler, yang pada 1748 menghubungkan fungsi trigonometri dengan eksponen melalui rumus $e^{ix} = \\cos x + i\\sin x$.`,
    },
    {
      id: "refleksi",
      kind: "refleksi",
      title: "Refleksi",
      body: "Pikirkan bagaimana identitas menyederhanakan perhitungan dan gelombang memodelkan gejala berulang.",
      blocks: [
        {
          kind: "reflection",
          prompts: [
            "Bagaimana kamu membaca amplitudo dan periode langsung dari rumus fungsi periodik?",
            "Kapan aturan sinus lebih tepat dipakai, dan kapan aturan kosinus?",
            "Mengapa identitas sudut memudahkan menghitung nilai sudut yang bukan sudut istimewa?",
          ],
          confidenceLabel: "Seberapa yakin kamu memakai identitas sudut dan aturan pada segitiga sebarang?",
        },
      ],
    },
    {
      id: "rangkuman",
      kind: "rangkuman",
      title: "Rangkuman",
      blocks: [
        {
          kind: "table",
          headers: [
            "Konsep",
            "Bentuk / Rumus",
          ],
          rows: [
            [
              "Fungsi periodik",
              "$f(x)=A\\sin(B(x-C))+D$",
            ],
            [
              "Amplitudo",
              "$\\lvert A \\rvert$",
            ],
            [
              "Periode",
              "$\\dfrac{360^\\circ}{\\lvert B \\rvert}$",
            ],
            [
              "Jumlah sudut sinus",
              "$\\sin(\\alpha+\\beta)=\\sin\\alpha\\cos\\beta+\\cos\\alpha\\sin\\beta$",
            ],
            [
              "Jumlah sudut kosinus",
              "$\\cos(\\alpha+\\beta)=\\cos\\alpha\\cos\\beta-\\sin\\alpha\\sin\\beta$",
            ],
            [
              "Sudut rangkap",
              "$\\sin 2\\alpha=2\\sin\\alpha\\cos\\alpha$",
            ],
            [
              "Aturan sinus",
              "$\\dfrac{a}{\\sin A}=\\dfrac{b}{\\sin B}=\\dfrac{c}{\\sin C}$",
            ],
            [
              "Aturan kosinus",
              "$a^{2}=b^{2}+c^{2}-2bc\\cos A$",
            ],
            [
              "Luas segitiga",
              "$L=\\dfrac{1}{2}bc\\sin A$",
            ],
          ],
        },
      ],
    },
    {
      id: "evaluasi",
      kind: "evaluasi",
      title: "Evaluasi",
      questionIds: ['tl-10'],
      body: `Simpulkan: identitas mana yang menjadi akar semua identitas lain pada topik ini, dan kapan kamu memilih aturan sinus dibanding aturan kosinus? Tuliskan ringkasannya, kemudian lanjut ke [Latihan & Asesmen](/latihan) topik **Trigonometri Lanjut**.`,
    },
  ],
};
