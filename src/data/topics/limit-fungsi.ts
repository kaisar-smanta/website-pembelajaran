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
    'Menjembatani intuisi nilai fungsi menuju turunan; memperkuat elemen Kalkulus Matematika Tingkat Lanjut meski belum menjadi CP tersendiri.',
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
Jadi ketika $x$ makin dekat ke $1$ — baik dari kiri ($0{,}9;\\ 0{,}99;\\ 0{,}999$) maupun dari kanan ($1{,}1;\\ 1{,}01;\\ 1{,}001$) — nilai $f(x)$ makin dekat ke $2$. Nilai yang didekati inilah yang disebut **limit**:
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
      body: `Sebelum melanjutkan, pastikan kamu menguasai:
- memfaktorkan bentuk aljabar, terutama selisih kuadrat $a^{2}-b^{2}=(a-b)(a+b)$;
- menyederhanakan pecahan aljabar dan merasionalkan bentuk akar;
- menghitung nilai fungsi polinomial dan fungsi rasional;
- memahami konsep nilai yang makin besar tanpa batas, misalnya $\\dfrac{1}{x}$ ketika $x$ membesar.`,
    },
    {
      id: 'konteks',
      kind: 'konteks',
      title: 'Situasi dan Konteks',
      body: `Banyak besaran penting justru muncul saat kita mendekati keadaan ekstrem: berapa kecepatan sesaat pada suatu detik, berapa biaya rata-rata per unit bila produksi terus ditambah, atau berapa konsentrasi obat setelah waktu yang sangat lama. Pertanyaan-pertanyaan itu menuntut kita menghitung **nilai yang didekati**, bukan nilai yang benar-benar tercapai.
Gagasan "nilai yang didekati" inilah yang disebut **limit**. Limit menjadi fondasi untuk membangun turunan dan integral, sekaligus alat untuk menangani bentuk yang tampak mustahil seperti $\\dfrac{0}{0}$ atau $\\dfrac{\\infty}{\\infty}$.`,
    },
    {
      id: 'konsep',
      kind: 'konsep',
      title: 'Konsep Inti: Limit sebagai Nilai yang Didekati',
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
          title: 'Inti yang perlu diingat',
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
          text: 'Limit hanya memeriksa nilai fungsi **di sekitar** $a$, bukan di $a$. Fungsi boleh tidak terdefinisi di $x=a$ (misalnya karena pembagian dengan nol) atau bernilai berbeda di sana, asalkan nilai di sekitar $a$ menuju satu bilangan yang sama. Karena itu $\\lim_{x \\to a} f(x)$ bisa ada meski $f(a)$ tidak ada.',
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
      ],
    },
    {
      id: 'eksplorasi',
      kind: 'eksplorasi',
      title: 'Eksplorasi: Mendekati Nilai Grafik',
      body: `Gunakan simulasi berikut untuk menggeser titik singgung sepanjang kurva dan mengamati gradien garis singgungnya. Perhatikan bagaimana gradien di sebuah titik sebenarnya didefinisikan sebagai limit dari gradien garis sekan ketika dua titik makin berdekatan.`,
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

Masalah muncul ketika substitusi menghasilkan bentuk **tak tentu**, terutama $\\dfrac{0}{0}$. Bentuk ini bukan berarti limit tidak ada, melainkan tanda bahwa fungsi perlu **disederhanakan** lebih dahulu. Pola penanganannya bergantung pada bentuk fungsinya:
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
Untuk bentuk $\\dfrac{\\infty}{\\infty}$, nilai limit ditentukan oleh suku berpangkat tertinggi pada pembilang dan penyebut.

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
      body: `Limit dipakai setiap kali kita ingin tahu **kecenderungan jangka panjang** atau **perilaku di sekitar keadaan ekstrem**. Kecepatan sesaat pada spidometer adalah limit kecepatan rata-rata ketika selang waktunya mengecil menuju nol. Inilah benang merah antara limit dan turunan.
Di bidang kesehatan, konsentrasi obat dalam darah setelah waktu yang sangat lama didekati dengan limit di tak hingga, sehingga dokter dapat memperkirakan kadar sisa. Di bidang ekonomi, biaya rata-rata per unit ketika produksi diperbesar tanpa batas menunjukkan biaya variabel per unit, yang juga dihitung sebagai limit. Ketika jumlah pelanggan membesar, waktu tunggu rata-rata dalam suatu antrean sering dimodelkan dan dianalisis menggunakan limit.
Semua contoh ini berbagi satu gagasan: kita tidak menghitung nilai di titik yang mustahil dicapai, melainkan nilai yang **didekati** ketika keadaan mendekati titik itu.`,
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
          explanation: 'Langkah pertama keliru. Bentuk $\\dfrac{0}{0}$ bukan berarti limit tidak ada, melainkan **tak tentu** sehingga perlu disederhanakan. Setelah difaktorkan dan dicoret, limitnya ada dan bernilai $4$.',
        },
      ],
    },
    {
      id: 'tantangan',
      kind: 'tantangan',
      title: 'Tantangan',
      body: `Limit di tak hingga sering menipu intuisi. Perhatikan

$$\\lim_{x\\to\\infty}\\left(\\sqrt{x^2+x}-x\\right).$$

Bentuk ini tidak dapat langsung disubstitusi. Tentukan nilai limitnya dengan cermat, dan jangan sampai terkecoh oleh hampiran yang terlalu kasar.`,
      blocks: [
        {
          kind: 'callout',
          variant: 'tip',
          title: 'Petunjuk',
          text: `Kalikan dengan akar sekawan $\\sqrt{x^2+x}+x$, lalu bagi pembilang dan penyebut dengan pangkat tertinggi. Jangan menyimpulkan hasilnya hanya karena kedua suku sama besarnya.`,
        },
        {
          kind: 'spot-mistake',
          intro: 'Seorang siswa mengerjakan limit itu sebagai berikut. Klik langkah yang keliru.',
          steps: [
            'Untuk $x$ sangat besar, $x^2+x$ sangat dekat dengan $x^2$.',
            'Maka $\\sqrt{x^2+x}$ sangat dekat dengan $x$.',
            'Karena itu selisih $\\sqrt{x^2+x}-x$ menuju $0$.',
            'Jadi $\\lim_{x\\to\\infty}\\left(\\sqrt{x^2+x}-x\\right)=0$.',
          ],
          wrongIndex: 2,
          explanation: 'Langkah ketiga keliru. Karena kedua suku sama-sama sangat besar, selisihnya justru dapat menuju bilangan selain nol; menghampiri tiap suku secara terpisah sebelum mengurangkan membuang informasi penting. Nilai yang benar adalah $\\dfrac{1}{2}$.',
        },
        {
          kind: 'details',
          summary: 'Perhitungan yang benar',
          text: `Kalikan dengan akar sekawan $\\sqrt{x^2+x}+x$:
$$\\sqrt{x^2+x}-x=\\frac{\\left(\\sqrt{x^2+x}-x\\right)\\left(\\sqrt{x^2+x}+x\\right)}{\\sqrt{x^2+x}+x}=\\frac{(x^2+x)-x^2}{\\sqrt{x^2+x}+x}=\\frac{x}{\\sqrt{x^2+x}+x}.$$

Untuk $x>0$, bagi pembilang dan penyebut dengan $x$:
$$\\frac{1}{\\sqrt{1+\\frac{1}{x}}+1}.$$
Karena $\\dfrac{1}{x}\\to 0$ ketika $x\\to\\infty$, hasilnya
$$\\lim_{x\\to\\infty}\\left(\\sqrt{x^2+x}-x\\right)=\\frac{1}{1+1}=\\frac{1}{2}.$$`,
        },
      ],
    },
    {
      id: 'refleksi',
      kind: 'refleksi',
      title: 'Refleksi',
      body: 'Renungkan bagaimana nilai yang didekati menjelaskan perilaku fungsi di sekitar suatu titik.',
      blocks: [
        {
          kind: 'reflection',
          prompts: [
            'Apa perbedaan antara nilai fungsi $f(a)$ dan limit $\\lim_{x \\to a} f(x)$?',
            'Mengapa limit baru ada jika limit kiri dan limit kanan bernilai sama?',
            'Kapan substitusi langsung cukup, dan kapan kita perlu memfaktorkan atau mengalikan akar sekawan?',
            'Bagaimana gagasan limit muncul dalam definisi turunan?',
          ],
          confidenceLabel: 'Seberapa yakin kamu dengan jawaban refleksimu?',
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
      body: `**Tiket keluar.** (1) Mengapa munculnya bentuk $\\dfrac{0}{0}$ tidak otomatis berarti limit tidak ada, dan bagaimana cara menanganinya? (2) Jelaskan mengapa limit kiri dan limit kanan harus sama agar limit di suatu titik ada. Setelah menjawab, lanjut ke [Latihan & Asesmen](/latihan) topik **Limit Fungsi** untuk latihan tambahan.`,
    },
  ],
};
