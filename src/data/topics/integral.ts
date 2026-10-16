import type { Topic } from '@/types/content';

export const integral: Topic = {
  id: 'integral',
  slug: 'integral',
  title: 'Integral',
  subtitle: 'Antiturunan, luas, dan teorema dasar kalkulus',
  grade: 'XII',
  phase: 'F',
  element: 'kalkulus',
  subject: 'matematika-lanjut',
  status: 'lengkap',
  estimatedMinutes: 100,
  summary:
    'Memahami integral sebagai antiturunan dan sebagai luas, menghitung integral tak tentu serta tentu, dan menggunakan teorema dasar kalkulus.',
  description:
    'Integral adalah kebalikan dari turunan sekaligus cara menghitung luas. Topik ini berangkat dari gagasan antiturunan integral tak tentu beserta sifat dan aturan dasarnya, lalu memperluasnya ke integral tak tentu polinomial, eksponensial, dan trigonometri. Dari sana kita menafsirkan integral tentu sebagai limit jumlah luas persegi panjang, menghubungkan turunan dan integral melalui teorema dasar kalkulus, serta menerapkannya untuk menghitung luas daerah di bawah kurva dan luas daerah antara dua kurva.',
  keywords: [
    'integral',
    'antiturunan',
    'integral tak tentu',
    'integral tentu',
    'teorema dasar kalkulus',
    'luas di bawah kurva',
    'luas antara dua kurva',
    'limit jumlah',
  ],
  prerequisites: ['turunan'],
  relatedTopics: ['aplikasi-turunan'],
  prerequisiteKnowledge: [
    'Menentukan turunan fungsi polinomial, eksponensial, dan trigonometri',
    'Memahami turunan sebagai laju perubahan dan gradien garis singgung',
    'Menghitung limit sederhana dan jumlah suku berurutan',
    'Menentukan titik potong dua kurva serta luas bangun datar dasar',
  ],
  objectives: [
    { text: 'Peserta didik dapat menjelaskan integral sebagai antiturunan.' },
    { text: 'Peserta didik dapat menggunakan sifat dan aturan dasar integral tak tentu.' },
    { text: 'Peserta didik dapat menentukan integral tak tentu polinomial, eksponensial, dan trigonometri.' },
    { text: 'Peserta didik dapat menafsirkan integral tentu sebagai limit jumlah dan sebagai luas.' },
    { text: 'Peserta didik dapat menggunakan teorema dasar kalkulus untuk menghitung luas di bawah kurva dan antara dua kurva.' },
  ],
  applications: ['mtl-gerak-kecepatan'],
  sections: [
    {
      id: "tujuan",
      kind: "tujuan",
      title: "Tujuan Pembelajaran",
      body: "Setelah mempelajari topik ini, peserta didik dapat menjelaskan integral sebagai antiturunan, menggunakan sifat dan aturan dasar integral tak tentu, menentukan integral tak tentu fungsi polinomial, eksponensial, dan trigonometri, menafsirkan integral tentu sebagai limit jumlah dan sebagai luas, serta menggunakan teorema dasar kalkulus untuk menghitung luas daerah di bawah kurva dan antara dua kurva.",
    },
    {
      id: "pemantik",
      kind: "pemantik",
      title: "Pertanyaan Pemantik",
      blocks: [
        {
          kind: "prediction",
          prompt: `Jika kecepatan sebuah kendaraan diketahui pada setiap saat, bagaimana kita menentukan **jarak total** yang ditempuh? Turunan mengubah posisi menjadi kecepatan, jadi proses kebalikannya seharusnya mengubah kecepatan kembali menjadi posisi. Proses kebalikan itu dinamakan **integral**.
Pertanyaan lainnya: bagaimana menghitung luas daerah yang dibatasi kurva melengkung, seperti $y = x^{2}$ di antara $x = 0$ dan $x = 1$?`,
          reveal: "Daerah melengkung dapat didekati oleh banyak persegi panjang tipis. Ketika lebar persegi panjang dibuat makin kecil, jumlah luasnya mendekati luas sebenarnya. Limit jumlah inilah yang disebut **integral tentu**. Untuk $y = x^{2}$ pada $[0, 1]$ diperoleh $\\displaystyle\\int_{0}^{1} x^{2}\\,dx = \\dfrac{1}{3}$.",
          saveLabel: "Simpan dugaan & lihat jawabannya",
        },
      ],
    },
    {
      id: "prasyarat",
      kind: "prasyarat",
      title: "Prasyarat",
      body: `Integral melanjutkan gagasan turunan dalam arah sebaliknya. Pastikan kamu sudah lancar:
- aturan turunan konstanta, pangkat, jumlah, dan rantai;
- turunan fungsi eksponensial dan trigonometri;
- menentukan titik potong dua kurva;
- menghitung luas persegi, segitiga, dan trapesium.`,
    },
    {
      id: "konteks",
      kind: "konteks",
      title: "Situasi dan Konteks",
      body: `Integral menjawab pertanyaan tentang akumulasi dan luas. Jika turunan mengukur "seberapa cepat", integral mengukur "seberapa banyak" yang terkumpul. Dari kecepatan kita memperoleh jarak, dari laju aliran kita memperoleh volume, dari daya kita memperoleh energi.
Dalam geometri, integral menghitung luas daerah yang batasnya berupa kurva. Dalam statistika, ia dipakai untuk menghitung peluang pada sebaran kontinu. Integral dan turunan adalah dua sisi dari satu gagasan yang sama.`,
    },
    {
      id: "konsep",
      kind: "konsep",
      title: "Integral sebagai Antiturunan dan sebagai Luas",
      questionIds: ['in-01'],
      body: `**Integral tak tentu.** Fungsi $F$ disebut **antiturunan** $f$ jika $F'(x) = f(x)$. Himpunan semua antiturunan ditulis
$$\\int f(x)\\,dx = F(x) + C,$$
dengan $C$ adalah konstanta integrasi. Karena turunan konstanta nol, setiap antiturunan berbeda hanya oleh konstanta.

Karena $\\dfrac{d}{dx}\\left(x^{3}\\right) = 3x^{2}$, maka $\\displaystyle\\int 3x^{2}\\,dx = x^{3} + C$.

**Integral tentu dan limit jumlah.** Integral tentu fungsi $f$ pada selang $[a, b]$ didefinisikan sebagai limit jumlah luas persegi panjang:
$$\\int_{a}^{b} f(x)\\,dx = \\lim_{n \\to \\infty} \\sum_{i=1}^{n} f(x_i)\\,\\Delta x,$$
dengan selang dibagi menjadi $n$ bagian selebar $\\Delta x = \\dfrac{b-a}{n}$. Nilai ini menyatakan **luas bertanda** daerah antara kurva dan sumbu-$x$; daerah di bawah sumbu-$x$ dihitung negatif. Integral tentu berupa sebuah **bilangan**, bukan fungsi.

**Teorema dasar kalkulus.** Jika $F$ antiturunan kontinu dari $f$ pada $[a, b]$, maka
$$\\int_{a}^{b} f(x)\\,dx = F(b) - F(a) = \\Big[F(x)\\Big]_{a}^{b}.$$
Teorema ini menghubungkan dua gagasan integral, yaitu limit jumlah dan antiturunan, sehingga luas dapat dihitung dengan mudah.`,
      blocks: [
        {
          kind: "callout",
          variant: "concept",
          title: "Turunan dan integral saling membatalkan",
          text: "Karena $\\displaystyle\\int f(x)\\,dx$ adalah antiturunan, maka $\\dfrac{d}{dx}\\displaystyle\\int f(x)\\,dx = f(x)$.",
        },
        {
          kind: "match",
          intro: "Cocokkan integral dengan hasilnya.",
          pairs: [
            {
              left: "$\\int x^{n}\\,dx$",
              right: "$\\dfrac{x^{n+1}}{n+1}+C$",
            },
            {
              left: "$\\int \\cos x\\,dx$",
              right: "$\\sin x+C$",
            },
            {
              left: "Teorema dasar kalkulus",
              right: "$\\int_{a}^{b} f(x)\\,dx=F(b)-F(a)$",
            },
            {
              left: "Integral tentu",
              right: "Luas daerah berarah di bawah kurva",
            },
          ],
        },
        {
          kind: "flip-cards",
          intro: "Ingat kembali istilah kunci integral.",
          cards: [
            {
              front: "Antiturunan",
              back: "Fungsi $F$ dengan $F'(x) = f(x)$",
            },
            {
              front: "Integral tak tentu",
              back: "$\\int f(x)\\,dx = F(x) + C$",
            },
            {
              front: "Integral tentu",
              back: "Suatu bilangan hasil limit jumlah, $\\int_{a}^{b} f(x)\\,dx$",
            },
            {
              front: "Teorema dasar kalkulus",
              back: "$\\int_{a}^{b} f(x)\\,dx = F(b) - F(a)$",
            },
            {
              front: "Konstanta integrasi $C$",
              back: "Penanda keluarga antiturunan; wajib ditulis pada integral tak tentu",
            },
          ],
        },
      ],
    },
    {
      id: "rumus",
      kind: "rumus",
      title: "Sifat dan Aturan Dasar",
      body: `**Aturan pangkat.** $\\displaystyle\\int x^{n}\\,dx = \\dfrac{x^{n+1}}{n+1} + C$ untuk $n \\neq -1$.

**Kasus khusus $n = -1$.** Karena aturan pangkat akan memuat pembagian oleh nol, integral $\\dfrac{1}{x}$ dihitung terpisah:
$$\\int \\dfrac{1}{x}\\,dx = \\ln\\lvert x\\rvert + C, \\quad x \\neq 0.$$

**Konstanta dan kelipatan.** $\\displaystyle\\int c\\,dx = cx + C$ dan $\\displaystyle\\int c\\,f(x)\\,dx = c\\int f(x)\\,dx$.

**Jumlah dan selisih.** $\\displaystyle\\int \\left[f(x) \\pm g(x)\\right] dx = \\int f(x)\\,dx \\pm \\int g(x)\\,dx$.

**Batas sama.** $\\displaystyle\\int_{a}^{a} f(x)\\,dx = 0$.

**Tukar batas.** $\\displaystyle\\int_{a}^{b} f(x)\\,dx = -\\int_{b}^{a} f(x)\\,dx$.

**Pecah selang.** $\\displaystyle\\int_{a}^{b} f(x)\\,dx = \\int_{a}^{c} f(x)\\,dx + \\int_{c}^{b} f(x)\\,dx$.

**Eksponensial.** $\\displaystyle\\int e^{x}\\,dx = e^{x} + C$ dan $\\displaystyle\\int a^{x}\\,dx = \\dfrac{a^{x}}{\\ln a} + C$ untuk $a > 0$ dan $a \\ne 1$.

**Trigonometri.** $\\displaystyle\\int \\cos x\\,dx = \\sin x + C$ dan $\\displaystyle\\int \\sin x\\,dx = -\\cos x + C$.`,
    },
    {
      id: "representasi",
      kind: "representasi",
      title: "Luas Daerah",
      body: `**Luas di bawah kurva.** Bila $f(x) \\geq 0$ pada $[a, b]$, luas daerah antara kurva dan sumbu-$x$ adalah
$$L = \\int_{a}^{b} f(x)\\,dx.$$
Bila $f(x)$ dapat bernilai negatif, luas diperoleh dengan membagi selang menurut tanda $f$.

**Luas antara dua kurva.** Bila $f(x) \\geq g(x)$ pada $[a, b]$, luas daerah antara kedua kurva adalah
$$L = \\int_{a}^{b} \\left[f(x) - g(x)\\right] dx.$$
Batas $a$ dan $b$ ditentukan dari titik potong kedua kurva, yaitu penyelesaian $f(x) = g(x)$.`,
      blocks: [
        {
          kind: "table",
          caption: "Dua tafsir integral tentu",
          headers: [
            "Tafsir",
            "Bentuk",
          ],
          rows: [
            [
              "Limit jumlah",
              "$\\lim_{n \\to \\infty} \\sum f(x_i)\\,\\Delta x$",
            ],
            [
              "Antiturunan",
              "$\\Big[F(x)\\Big]_{a}^{b} = F(b) - F(a)$",
            ],
            [
              "Luas di bawah kurva",
              "$\\int_{a}^{b} f(x)\\,dx$",
            ],
            [
              "Luas antara dua kurva",
              "$\\int_{a}^{b} \\left[f(x)-g(x)\\right] dx$",
            ],
          ],
        },
        {
          kind: "figure",
          alt: "Kurva garis y sama dengan x dan kurva y sama dengan x kuadrat berpotongan di titik nol dan satu. Daerah berbentuk lensa di antara kedua kurva pada selang nol sampai satu diberi bayangan.",
          caption: "Luas daerah antara $y=x$ dan $y=x^{2}$ pada $[0,1]$. Karena $x \\ge x^{2}$ di selang ini, luasnya $L = \\int_{0}^{1}\\left(x-x^{2}\\right)dx = \\dfrac{1}{2} - \\dfrac{1}{3} = \\dfrac{1}{6}$.",
          svg: '<svg viewBox="0 0 320 210" aria-hidden="true" role="presentation"><line x1="50" y1="175" x2="300" y2="175" stroke="currentColor" stroke-width="1.5"/><line x1="60" y1="185" x2="60" y2="30" stroke="currentColor" stroke-width="1.5"/><polygon points="60,175 110,167 160,142 210,102 260,45 210,77 160,110 110,142" fill="currentColor" fill-opacity="0.18" stroke="none"/><line x1="60" y1="175" x2="260" y2="45" stroke="currentColor" stroke-width="2"/><polyline points="60,175 110,167 160,142 210,102 260,45" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="60" cy="175" r="3" fill="currentColor"/><circle cx="260" cy="45" r="3" fill="currentColor"/><text x="216" y="60" font-size="11" fill="currentColor">y = x</text><text x="150" y="158" font-size="11" fill="currentColor">y = x^2</text><text x="292" y="193" font-size="12" fill="currentColor">x</text><text x="44" y="36" font-size="12" fill="currentColor">y</text><text x="54" y="190" font-size="11" fill="currentColor" text-anchor="middle">0</text><text x="260" y="190" font-size="11" fill="currentColor" text-anchor="middle">1</text></svg>',
        },
        {
          kind: "figure",
          alt: "Kurva yang memotong sumbu x dengan daerah di bawah sumbu diberi bayangan dan diberi label luas negatif.",
          caption: "Daerah di bawah sumbu-$x$ dihitung negatif pada integral tentu, sehingga $\\int_{0}^{2}(x^{2}-2x)\\,dx=-\\dfrac{4}{3}$, sedangkan luas sebenarnya $\\dfrac{4}{3}$.",
          svg: '<svg viewBox="0 0 320 200" aria-hidden="true" role="presentation"><line x1="40" y1="110" x2="300" y2="110" stroke="currentColor" stroke-width="1.5"/><line x1="40" y1="175" x2="40" y2="22" stroke="currentColor" stroke-width="1.5"/><polygon points="95,110 110,122 140,134 170,138 200,132 230,118 245,110" fill="currentColor" fill-opacity="0.18" stroke="none"/><polyline points="50,80 80,100 110,122 140,134 170,138 200,132 230,118 260,100 290,80" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="118" y="162" font-size="11" fill="currentColor">luas negatif</text><text x="292" y="128" font-size="12" fill="currentColor">x</text><text x="20" y="28" font-size="12" fill="currentColor">y</text></svg>',
        },
        {
          kind: "figure",
          alt: "Kurva y sama dengan x kuadrat pada selang nol sampai satu, dengan empat persegi panjang tipis di bawahnya yang tingginya mengikuti titik kiri tiap bagian, mendekati luas daerah di bawah kurva.",
          caption: "Jumlah Riemann dengan persegi panjang tipis menghampiri luas di bawah kurva. Ketika banyak persegi panjang diperbesar, jumlah luasnya menuju $\\int_{0}^{1} x^{2}\\,dx = \\dfrac{1}{3}$.",
          svg: '<svg viewBox="0 0 320 210" aria-hidden="true" role="presentation"><line x1="50" y1="175" x2="300" y2="175" stroke="currentColor" stroke-width="1.5"/><line x1="60" y1="188" x2="60" y2="35" stroke="currentColor" stroke-width="1.5"/><rect x="104" y="170" width="44" height="5" fill="currentColor" fill-opacity="0.22" stroke="currentColor" stroke-width="1"/><rect x="148" y="156" width="44" height="19" fill="currentColor" fill-opacity="0.22" stroke="currentColor" stroke-width="1"/><rect x="192" y="132" width="44" height="43" fill="currentColor" fill-opacity="0.22" stroke="currentColor" stroke-width="1"/><rect x="236" y="98" width="44" height="77" fill="currentColor" fill-opacity="0.22" stroke="currentColor" stroke-width="1"/><polyline points="60,175 104,170 148,156 192,132 236,98 280,55" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="292" y="193" font-size="12" fill="currentColor">x</text><text x="44" y="42" font-size="12" fill="currentColor">y</text><text x="60" y="190" font-size="11" fill="currentColor" text-anchor="middle">0</text><text x="280" y="190" font-size="11" fill="currentColor" text-anchor="middle">1</text></svg>',
        },
      ],
    },
    {
      id: "eksplorasi",
      kind: "eksplorasi",
      title: "Eksplorasi Jumlah Riemann dan Luas",
      body: `Gagasan integral tentu sebagai limit jumlah paling mudah dipahami dengan mencoba menghitungnya sendiri. Pada simulasi berikut, atur selang $[a,b]$ dan banyak persegi panjang $n$ untuk fungsi $f(x)=x^{2}$. Amati bagaimana hampiran jumlah Riemann makin mendekati nilai integral eksaknya ketika $n$ diperbesar.`,
      blocks: [
        {
          kind: "exploration",
          explorationId: "mtl-integral-riemann",
        },
      ],
    },
    {
      id: "eksplorasi-volume",
      kind: "eksplorasi",
      title: "Eksplorasi Volume Benda Putar",
      body: `Setelah luas, integral juga dipakai menghitung volume benda putar. Putar daerah di bawah $f(x)=\\sqrt{x}$ mengelilingi sumbu-$x$, lalu perbanyak cakram tipisnya dan amati jumlah volumenya makin dekat ke volume eksak.`,
      blocks: [
        {
          kind: "exploration",
          explorationId: "mtl-integral-volume",
        },
      ],
    },
    {
      id: "generalisasi",
      kind: "generalisasi",
      title: "Dari Jumlah Riemann ke Teorema Dasar",
      body: `Pola yang sama muncul pada setiap perhitungan. Memperbanyak persegi panjang ($n \\to \\infty$) membuat jumlah Riemann mendekati sebuah bilangan tetap, yaitu integral tentu. Yang mengejutkan, bilangan itu dapat dihitung tanpa menjumlahkan suku satu per satu sampai tak berhingga: cukup mencari antiturunan $F$, lalu mengevaluasi selisihnya:

$$\\int_{a}^{b} f(x)\\,dx = F(b) - F(a), \\qquad F'(x) = f(x).$$

Teorema dasar kalkulus inilah yang menyatukan dua wajah integral: limit jumlah dan antiturunan. Dari sini semua luas, termasuk luas antara dua kurva, menjadi selisih nilai antiturunan:

$$L = \\int_{a}^{b} \\left[f(x) - g(x)\\right] dx.$$`,
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
              text: `Tentukan $\\displaystyle\\int \\left(3x^{2} - 4x + 5\\right) dx$.

*Penyelesaian.* Integrasikan suku demi suku dengan aturan pangkat:
$$\\int \\left(3x^{2} - 4x + 5\\right) dx = x^{3} - 2x^{2} + 5x + C.$$
Periksa dengan menurunkan: $\\dfrac{d}{dx}\\left(x^{3} - 2x^{2} + 5x\\right) = 3x^{2} - 4x + 5$, benar.`,
            },
            {
              title: "Contoh 2",
              text: `Hitung $\\displaystyle\\int_{1}^{3} (2x + 1)\\,dx$ dan $\\displaystyle\\int_{0}^{2} x^{2}\\,dx$.

*Penyelesaian.*
$$\\int_{1}^{3} (2x + 1)\\,dx = \\Big[x^{2} + x\\Big]_{1}^{3} = (9 + 3) - (1 + 1) = 12 - 2 = 10.$$
$$\\int_{0}^{2} x^{2}\\,dx = \\left[\\frac{x^{3}}{3}\\right]_{0}^{2} = \\frac{8}{3} - 0 = \\frac{8}{3}.$$`,
            },
            {
              title: "Contoh 3",
              text: `Tentukan luas daerah antara $y = x$ dan $y = x^{2}$ pada selang $[0, 1]$.

*Penyelesaian.* Kedua kurva berpotongan di $x = 0$ dan $x = 1$. Karena $x \\geq x^{2}$ pada selang itu:
$$L = \\int_{0}^{1} \\left(x - x^{2}\\right) dx = \\left[\\frac{x^{2}}{2} - \\frac{x^{3}}{3}\\right]_{0}^{1} = \\frac{1}{2} - \\frac{1}{3} = \\frac{1}{6}.$$`,
            },
            {
              title: "Contoh 4: Substitusi",
              text: `Tentukan $\\displaystyle\\int 2x\\left(x^{2}+1\\right)^{3} dx$.

*Penyelesaian.* Ambil $u = x^{2}+1$, maka $\\dfrac{du}{dx} = 2x$ sehingga $du = 2x\\,dx$. Integral berubah menjadi
$$\\int 2x\\left(x^{2}+1\\right)^{3} dx = \\int u^{3}\\,du = \\frac{u^{4}}{4} + C.$$
Substitusikan kembali $u = x^{2}+1$:
$$\\int 2x\\left(x^{2}+1\\right)^{3} dx = \\frac{\\left(x^{2}+1\\right)^{4}}{4} + C.$$
Periksa dengan aturan rantai: turunannya kembali menjadi $2x\\left(x^{2}+1\\right)^{3}$, jadi hasil ini benar.`,
            },
            {
              title: "Contoh 5: Luas Bertanda dan Luas Sebenarnya",
              text: `Hitung $\\displaystyle\\int_{0}^{2} \\left(x^{2}-2x\\right) dx$, lalu tentukan luas daerah yang sebenarnya tertutup antara kurva dan sumbu-$x$ pada selang itu.

*Penyelesaian.* Antiturunannya $\\dfrac{x^{3}}{3} - x^{2}$, sehingga
$$\\int_{0}^{2} \\left(x^{2}-2x\\right) dx = \\left[\\frac{x^{3}}{3} - x^{2}\\right]_{0}^{2} = \\left(\\frac{8}{3} - 4\\right) - 0 = -\\frac{4}{3}.$$
Nilai negatif ini disebut **luas bertanda**, karena kurva berada di bawah sumbu-$x$ pada $(0, 2)$. Karena $x^{2}-2x = x(x-2) \\leq 0$ di sana, luas sebenarnya adalah
$$L = \\left| -\\frac{4}{3} \\right| = \\frac{4}{3}.$$`,
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
      body: `Integral dipakai untuk menghitung akumulasi. Dari grafik kecepatan terhadap waktu, luas di bawah kurva adalah jarak tempuh. Dari laju aliran air, integral memberi volume total. Dalam ekonomi, integral biaya marginal memberi biaya total.
Dalam fisika, kerja adalah integral gaya terhadap perpindahan, dan muatan listrik adalah integral arus terhadap waktu. Dalam statistika, luas di bawah kurva peluang menunjukkan besarnya peluang suatu kejadian, sehingga integral menjadi alat untuk menakar kejadian pada sebaran kontinu.`,
    },
    {
      id: "kesalahan-umum",
      kind: "kesalahan-umum",
      title: "Kesalahan Umum",
      body: `**1. Lupa menambahkan konstanta $C$.** Integral tak tentu selalu menghasilkan keluarga fungsi, jadi $C$ wajib ditulis.
**2. Keliru memakai aturan pangkat untuk $x^{-1}$.** Rumus $\\dfrac{x^{n+1}}{n+1}$ tidak berlaku untuk $n = -1$.
**3. Salah tanda pada integral sinus dan kosinus.** $\\displaystyle\\int \\sin x\\,dx = -\\cos x + C$, bukan $\\cos x + C$.
**4. Menukar $F(a)$ dan $F(b)$.** Nilai integral tentu adalah $F(b) - F(a)$, bukan sebaliknya.
**5. Menghitung luas tanpa memeriksa urutan kurva.** Pada luas antara dua kurva, pastikan fungsi atas dikurangi fungsi bawah agar hasilnya positif.`,
      blocks: [
        {
          kind: "spot-mistake",
          intro: "Perhatikan perhitungan $\\displaystyle\\int x^{-1}\\,dx$. Ada satu langkah yang keliru. Klik langkah itu.",
          steps: [
            "Tulis integral yang diminta: $\\displaystyle\\int x^{-1}\\,dx$.",
            "Gunakan aturan pangkat $\\displaystyle\\int x^{n}\\,dx = \\frac{x^{n+1}}{n+1}+C$.",
            "Substitusi $n=-1$ sehingga diperoleh $\\dfrac{x^{0}}{0}+C$.",
            "Sederhanakan $x^{0}=1$ dan tulis hasil akhirnya.",
          ],
          wrongIndex: 1,
          explanation: "Langkah kedua keliru. Aturan pangkat $\\dfrac{x^{n+1}}{n+1}+C$ hanya berlaku untuk $n \\neq -1$. Untuk $\\displaystyle\\int x^{-1}\\,dx$ hasilnya adalah $\\ln\\lvert x\\rvert + C$.",
        },
      ],
    },
    {
      id: "tantangan",
      kind: "tantangan",
      title: "Tantangan",
      body: `Sebuah simetri kecil dapat menghitung integral yang tampak mustahil.

**Sifat simetri.** Untuk fungsi $f$ yang kontinu pada $[0,a]$, berlaku
$$\\int_0^a f(x)\\,dx=\\int_0^a f(a-x)\\,dx.$$

**Tantangan.** Gunakan sifat di atas untuk menghitung
$$I=\\int_0^{\\pi/2}\\frac{\\sin x}{\\sin x+\\cos x}\\,dx.$$`,
      blocks: [
        {
          kind: "callout",
          variant: "tip",
          title: "Petunjuk",
          text: `Terapkan sifat simetri dengan $a=\\dfrac{\\pi}{2}$ pada fungsi $f(x)=\\dfrac{\\sin x}{\\sin x+\\cos x}$, lalu jumlahkan hasilnya dengan bentuk semula.`,
        },
        {
          kind: "step-reveal",
          intro: "Gunakan simetri untuk membentuk dua bentuk integral yang saling melengkapi.",
          steps: [
            {
              title: "Terapkan sifat simetri",
              text: `Dengan $a=\\dfrac{\\pi}{2}$, diperoleh $I=\\int_0^{\\pi/2}\\dfrac{\\sin\\left(\\frac{\\pi}{2}-x\\right)}{\\sin\\left(\\frac{\\pi}{2}-x\\right)+\\cos\\left(\\frac{\\pi}{2}-x\\right)}\\,dx$.`,
            },
            {
              title: "Sederhanakan",
              text: `Gunakan $\\sin\\left(\\frac{\\pi}{2}-x\\right)=\\cos x$ dan $\\cos\\left(\\frac{\\pi}{2}-x\\right)=\\sin x$, sehingga $I=\\int_0^{\\pi/2}\\dfrac{\\cos x}{\\cos x+\\sin x}\\,dx$.`,
            },
            {
              title: "Jumlahkan kedua bentuk",
              text: `$2I=\\int_0^{\\pi/2}\\left[\\dfrac{\\sin x}{\\sin x+\\cos x}+\\dfrac{\\cos x}{\\cos x+\\sin x}\\right]dx=\\int_0^{\\pi/2}1\\,dx$.`,
            },
            {
              title: "Hitung hasilnya",
              text: `$2I=\\dfrac{\\pi}{2}$, sehingga $I=\\dfrac{\\pi}{4}$.`,
            },
          ],
        },
      ],
    },
    {
      id: "sejarah",
      kind: "sejarah",
      title: "Jejak Sejarah",
      body: `Menghitung luas dan volume bangun melengkung sudah dilakukan Archimedes pada abad ke-3 SM dengan metode penghabisan (*exhaustion*). Pada abad ke-17 Bonaventura Cavalieri mengembangkan gagasan "indivisibel" untuk menghitung luas, dan Isaac Barrow, guru Newton, menyadari hubungan antara masalah garis singgung dan masalah luas. Isaac Newton serta Gottfried Wilhelm Leibniz kemudian merumuskan teorema dasar kalkulus yang mengaitkan turunan dan integral sebagai dua proses yang saling membatalkan. Bentuk modern integral tentu sebagai limit jumlah dirumuskan Bernhard Riemann pada pertengahan abad ke-19.`,
    },
    {
      id: "refleksi",
      kind: "refleksi",
      title: "Refleksi",
      body: "Dari potongan-potongan kecil lahir sebuah luas yang utuh. Renungkan saat kamu merasa paling mudah beralih antara gagasan luas dan gagasan antiturunan, lalu catat langkah mana yang paling sering membuatmu ragu.",
      blocks: [
        {
          kind: "reflection",
          prompts: [
            "Mengapa integral disebut kebalikan turunan?",
            "Apa perbedaan integral tak tentu dan integral tentu dari segi hasilnya?",
            "Bagaimana teorema dasar kalkulus menghubungkan limit jumlah dengan antiturunan?",
          ],
          confidenceLabel: "Seberapa yakin kamu memilih antara antiturunan dan luas saat menghitung integral?",
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
              "Integral tak tentu",
              "$\\int f(x)\\,dx = F(x) + C$ dengan $F' = f$",
            ],
            [
              "Aturan pangkat",
              "$\\int x^{n}\\,dx = \\dfrac{x^{n+1}}{n+1} + C$",
            ],
            [
              "Kasus $n = -1$",
              "$\\int \\dfrac{1}{x}\\,dx = \\ln\\lvert x\\rvert + C$",
            ],
            [
              "Eksponensial",
              "$\\int e^{x}\\,dx = e^{x} + C$, $\\int a^{x}\\,dx = \\dfrac{a^{x}}{\\ln a} + C$",
            ],
            [
              "Trigonometri",
              "$\\int \\cos x\\,dx = \\sin x + C$, $\\int \\sin x\\,dx = -\\cos x + C$",
            ],
            [
              "Integral tentu",
              "$\\int_{a}^{b} f(x)\\,dx = F(b) - F(a)$",
            ],
            [
              "Luas di bawah kurva",
              "$L = \\int_{a}^{b} f(x)\\,dx$",
            ],
            [
              "Luas antara dua kurva",
              "$L = \\int_{a}^{b} \\left[f(x)-g(x)\\right] dx$",
            ],
          ],
        },
      ],
    },
    {
      id: "evaluasi",
      kind: "evaluasi",
      title: "Evaluasi",
      questionIds: ['in-09'],
      body: `**Penutup singkat.** Bandingkan hasil dua pekerjaan ini: (1) menghitung $\\int_{0}^{1} x^{2}\\,dx$ dengan antiturunan, dan (2) menjelaskan dengan kata-katamu mengapa limit jumlah persegi panjang menghasilkan bilangan yang sama. Setelah keduanya selesai, asah kemampuanmu di [Latihan & Asesmen](/latihan) topik **Integral**.`,
    },
  ],
};
