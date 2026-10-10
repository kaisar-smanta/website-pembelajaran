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
  applications: ['mtl-navigasi-vektor'],
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
      body: `Sebelum melanjutkan, pastikan kamu menguasai:
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
      body: `Fungsi trigonometri memodelkan gejala yang berulang. Bentuk umumnya
$$f(x) = A\\sin\\big(B(x-C)\\big) + D.$$
Setiap parameter memiliki makna:
- $\\lvert A \\rvert$ adalah **amplitudo**, yaitu setengah selisih nilai maksimum dan minimum;
- periode adalah $\\dfrac{360^\\circ}{\\lvert B \\rvert}$ (atau $\\dfrac{2\\pi}{\\lvert B \\rvert}$ dalam radian);
- $C$ adalah **pergeseran fase** (geser mendatar);
- $D$ adalah **pergeseran tegak** yang menggeser garis tengah grafik.

Nilai maksimum adalah $D+\\lvert A \\rvert$ dan nilai minimum $D-\\lvert A \\rvert$. Sebagai contoh, $f(x)=3\\sin\\big(2(x-45^\\circ)\\big)-1$ memiliki amplitudo $3$, periode $\\dfrac{360^\\circ}{2}=180^\\circ$, pergeseran fase $45^\\circ$, nilai maksimum $2$, dan nilai minimum $-4$.`,
      blocks: [
        {
          kind: "callout",
          variant: "concept",
          title: "Inti yang perlu diingat",
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
Perhatikan bahwa pada kosinus tandanya **berlawanan**, sedangkan pada sinus tandanya **searah**.

Sebagai contoh,
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

Sebagai contoh, jika $\\sin\\alpha=\\dfrac{3}{5}$ dan $\\alpha$ lancip, maka $\\cos\\alpha=\\dfrac{4}{5}$ sehingga
$$\\sin 2\\alpha = 2\\cdot\\frac{3}{5}\\cdot\\frac{4}{5} = \\frac{24}{25}, \\qquad \\cos 2\\alpha = 1 - 2\\left(\\frac{3}{5}\\right)^{2} = 1-\\frac{18}{25} = \\frac{7}{25}.$$`,
    },
    {
      id: "aturan",
      kind: "rumus",
      title: "Aturan Sinus dan Aturan Kosinus",
      body: `Pada segitiga sebarang $ABC$ dengan sisi $a, b, c$ yang berhadapan dengan sudut $A, B, C$:

**Aturan sinus**
$$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}.$$

**Aturan kosinus**
$$a^{2} = b^{2} + c^{2} - 2bc\\cos A.$$

Aturan sinus dipakai bila diketahui dua sudut dan satu sisi, atau dua sisi dan satu sudut di hadapannya. Aturan kosinus dipakai bila diketahui dua sisi dan sudut apitnya, atau ketiga sisinya. Bila $A=90^\\circ$, maka $\\cos A=0$ sehingga aturan kosinus kembali menjadi teorema Pythagoras.`,
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
Sebagai contoh, untuk $b=5$, $c=8$, dan $A=60^\\circ$:
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

Aturan sinus dan kosinus dipakai dalam **triangulasi** untuk mengukur jarak antartitik yang sulit dijangkau, misalnya lebar danau atau tinggi puncak. Teknik yang sama digunakan pada navigasi, survei tanah, dan penentuan posisi satelit.`,
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
      title: "Tantangan",
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
      title: "Jejak Sejarah",
      body: `Rumus jumlah dan selisih sudut berakar pada tabel tali busur yang disusun astronom Yunani seperti Ptolemaeus, yang sifat-sifatnya setara dengan identitas trigonometri kita. Astronom India dan dunia Islam mengembangkan fungsi sinus serta aturan sinus untuk segitiga, termasuk bentuk bola, dan sekitar abad ke-15 Ghiyats al-Din al-Kashi menyatakan aturan kosinus dalam bentuk modernnya. Aturan kosinus sebenarnya memperumum teorema Pythagoras; dalam bentuk geometris, kasus tumpul dan lancip sudah dibahas Euclid dalam *Elements*. Identitas sudut rangkap serta bentuk baku trigonometri pada lingkaran satuan banyak dirapikan oleh Leonhard Euler pada abad ke-18.`,
    },
    {
      id: "refleksi",
      kind: "refleksi",
      title: "Refleksi",
      body: "Renungkan bagaimana identitas dan gelombang trigonometri menjelaskan gejala berkala.",
      blocks: [
        {
          kind: "reflection",
          prompts: [
            "Bagaimana kamu membaca amplitudo dan periode langsung dari rumus fungsi periodik?",
            "Kapan aturan sinus lebih tepat dipakai, dan kapan aturan kosinus?",
            "Mengapa identitas sudut memudahkan menghitung nilai sudut yang bukan sudut istimewa?",
          ],
          confidenceLabel: "Seberapa yakin kamu dengan jawaban refleksimu?",
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
      body: `**Tiket keluar.** (1) Mengapa identitas sudut rangkap cukup diturunkan dari identitas jumlah sudut? (2) Kapan aturan sinus lebih tepat dipakai, dan kapan aturan kosinus? Setelah menjawab, lanjut ke [Latihan & Asesmen](/latihan) topik **Trigonometri Lanjut** untuk latihan tambahan.`,
    },
  ],
};
