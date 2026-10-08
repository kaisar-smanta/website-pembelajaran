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
Pertanyaan lainnya: bagaimana menghitung luas daerah yang dibatasi kurva melengkung, misalnya $y = x^{2}$ di antara $x = 0$ dan $x = 1$?`,
          reveal: "Daerah melengkung dapat didekati oleh banyak persegi panjang tipis. Ketika lebar persegi panjang dibuat makin kecil, jumlah luasnya mendekati luas sebenarnya. Limit jumlah inilah yang disebut **integral tentu**. Untuk $y = x^{2}$ pada $[0, 1]$ diperoleh $\\displaystyle\\int_{0}^{1} x^{2}\\,dx = \\dfrac{1}{3}$.",
          saveLabel: "Simpan dugaan & lihat jawabannya",
        },
      ],
    },
    {
      id: "prasyarat",
      kind: "prasyarat",
      title: "Prasyarat",
      body: `Sebelum melanjutkan, pastikan kamu menguasai:
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
      body: `**Integral tak tentu.** Fungsi $F$ disebut **antiturunan** $f$ jika $F'(x) = f(x)$. Himpunan semua antiturunan ditulis
$$\\int f(x)\\,dx = F(x) + C,$$
dengan $C$ adalah konstanta integrasi. Karena turunan konstanta nol, setiap antiturunan berbeda hanya oleh konstanta.

Sebagai contoh, karena $\\dfrac{d}{dx}\\left(x^{3}\\right) = 3x^{2}$, maka $\\displaystyle\\int 3x^{2}\\,dx = x^{3} + C$.

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
      ],
    },
    {
      id: "rumus",
      kind: "rumus",
      title: "Sifat dan Aturan Dasar",
      body: `**Aturan pangkat.** $\\displaystyle\\int x^{n}\\,dx = \\dfrac{x^{n+1}}{n+1} + C$ untuk $n \\neq -1$.

**Konstanta dan kelipatan.** $\\displaystyle\\int c\\,dx = cx + C$ dan $\\displaystyle\\int c\\,f(x)\\,dx = c\\int f(x)\\,dx$.

**Jumlah dan selisih.** $\\displaystyle\\int \\left[f(x) \\pm g(x)\\right] dx = \\int f(x)\\,dx \\pm \\int g(x)\\,dx$.

**Batas sama.** $\\displaystyle\\int_{a}^{a} f(x)\\,dx = 0$.

**Tukar batas.** $\\displaystyle\\int_{a}^{b} f(x)\\,dx = -\\int_{b}^{a} f(x)\\,dx$.

**Pecah selang.** $\\displaystyle\\int_{a}^{b} f(x)\\,dx = \\int_{a}^{c} f(x)\\,dx + \\int_{c}^{b} f(x)\\,dx$.

**Eksponensial.** $\\displaystyle\\int e^{x}\\,dx = e^{x} + C$ dan $\\displaystyle\\int a^{x}\\,dx = \\dfrac{a^{x}}{\\ln a} + C$.

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
      id: "generalisasi",
      kind: "generalisasi",
      title: "Dari Jumlah Riemann ke Teorema Dasar",
      body: `Pola yang sama muncul pada setiap perhitungan. Memperbanyak persegi panjang ($n \\to \\infty$) membuat jumlah Riemann mendekati sebuah bilangan tetap, yaitu integral tentu. Yang mengejutkan, bilangan itu dapat dihitung tanpa menjumlahkan suku satu per satu sampai tak berhingga: cukup mencari antiturunan $F$, lalu mengevaluasi selisihnya:

$$\\int_{a}^{b} f(x)\\,dx = F(b) - F(a), \\qquad F'(x) = f(x).$$

Teorema dasar kalkulus inilah yang menyatukan dua wajah integral — limit jumlah dan antiturunan. Dari sini semua luas, termasuk luas antara dua kurva, menjadi selisih nilai antiturunan:

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
Dalam fisika, kerja adalah integral gaya terhadap perpindahan, dan muatan listrik adalah integral arus terhadap waktu. Dalam statistika, luas di bawah kurva peluang menunjukkan besarnya peluang suatu kejadian. Kemampuan menghitung integral membuka jalan memahami perubahan yang menumpuk.`,
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
      id: "refleksi",
      kind: "refleksi",
      title: "Refleksi",
      body: "Jawab dengan jujur:",
      blocks: [
        {
          kind: "reflection",
          prompts: [
            "Mengapa integral disebut kebalikan turunan?",
            "Apa perbedaan integral tak tentu dan integral tentu dari segi hasilnya?",
            "Bagaimana teorema dasar kalkulus menghubungkan limit jumlah dengan antiturunan?",
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
              "Integral tak tentu",
              "$\\int f(x)\\,dx = F(x) + C$ dengan $F' = f$",
            ],
            [
              "Aturan pangkat",
              "$\\int x^{n}\\,dx = \\dfrac{x^{n+1}}{n+1} + C$",
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
      body: `**Tiket keluar.** (1) Mengapa integral tak tentu selalu memuat konstanta $C$? (2) Bagaimana teorema dasar kalkulus menghubungkan limit jumlah dengan antiturunan? Setelah menjawab, lanjut ke [Latihan & Asesmen](/latihan) topik **Integral** untuk latihan tambahan.`,
    },
  ],
};
