import type { Topic } from '@/types/content';

export const aplikasiTurunan: Topic = {
  id: 'aplikasi-turunan',
  slug: 'aplikasi-turunan',
  title: 'Aplikasi Turunan',
  subtitle: 'Mensketsa kurva, garis singgung, dan optimasi',
  grade: 'XII',
  phase: 'F',
  element: 'kalkulus',
  subject: 'matematika-lanjut',
  status: 'lengkap',
  estimatedMinutes: 100,
  summary:
    'Menerapkan turunan untuk menentukan garis singgung dan normal, mensketsa kurva, menghitung kecepatan sesaat, dan menyelesaikan soal optimasi.',
  description:
    'Setelah menguasai aturan turunan, kita memakainya untuk membaca bentuk kurva dan menyelesaikan masalah nyata. Topik ini membahas gradien dan persamaan garis singgung serta garis normal, penentuan selang fungsi naik dan turun melalui tanda turunan pertama, titik stasioner beserta uji turunan pertama dan kedua, kecekungan dan titik belok melalui turunan kedua, kecepatan dan percepatan sesaat, serta soal optimasi nilai maksimum dan minimum. Langkah-langkah ini menjadi alat baku untuk mensketsa grafik fungsi dan mengambil keputusan terbaik pada situasi nyata.',
  keywords: [
    'aplikasi turunan',
    'garis singgung',
    'garis normal',
    'fungsi naik',
    'fungsi turun',
    'titik stasioner',
    'uji turunan pertama',
    'uji turunan kedua',
    'kecekungan',
    'titik belok',
    'kecepatan sesaat',
    'optimasi',
  ],
  prerequisites: ['turunan'],
  relatedTopics: ['integral'],
  prerequisiteKnowledge: [
    'Menentukan turunan fungsi polinomial, eksponensial, dan trigonometri',
    'Menyelesaikan persamaan linear dan kuadrat',
    'Menafsirkan grafik fungsi dan titik potongnya dengan sumbu',
    'Menghitung nilai maksimum atau minimum fungsi kuadrat',
  ],
  objectives: [
    { text: 'Peserta didik dapat menentukan gradien dan persamaan garis singgung serta garis normal.' },
    { text: 'Peserta didik dapat menentukan selang fungsi naik dan turun dari tanda turunan pertama.' },
    { text: 'Peserta didik dapat menentukan titik stasioner dan jenisnya dengan uji turunan pertama atau kedua.' },
    { text: 'Peserta didik dapat menyelidiki kecekungan dan titik belok melalui turunan kedua.' },
    { text: 'Peserta didik dapat menghitung kecepatan dan percepatan sesaat serta menyelesaikan soal optimasi.' },
  ],
  applications: ['pertumbuhan', 'pengukuran'],
  sections: [
    {
      id: "tujuan",
      kind: "tujuan",
      title: "Tujuan Pembelajaran",
      body: "Setelah mempelajari topik ini, peserta didik dapat menentukan gradien dan persamaan garis singgung serta garis normal, menentukan selang fungsi naik dan turun, menentukan titik stasioner beserta jenisnya, menyelidiki kecekungan dan titik belok, menghitung kecepatan dan percepatan sesaat, serta menyelesaikan masalah optimasi nilai maksimum dan minimum pada situasi nyata.",
    },
    {
      id: "pemantik",
      kind: "pemantik",
      title: "Pertanyaan Pemantik",
      blocks: [
        {
          kind: "prediction",
          prompt: "Seorang peternak memiliki $40$ meter kawat untuk membuat kandang berbentuk persegi panjang. Salah satu sisinya memanfaatkan tepi sungai sehingga tidak perlu dipagari. Berapa ukuran kandang agar luasnya **maksimum**, dan mengapa nilai maksimum itu muncul ketika turunan luas terhadap panjang sama dengan nol?",
          reveal: "Misalkan sisi yang tegak lurus sungai berukuran $x$, maka sisi yang sejajar sungai berukuran $40 - 2x$ dan luasnya $L(x) = x(40 - 2x)$. Fungsi luas mencapai puncak ketika $L'(x) = 0$, yaitu $40 - 4x = 0$ sehingga $x = 10$. Ukuran terbaik adalah $10$ m dan $20$ m dengan luas $200$ m$^{2}$. Gagasan \"puncak terjadi saat turunan nol\" adalah inti dari **optimasi**.",
          saveLabel: "Simpan dugaan & lihat jawabannya",
        },
      ],
    },
    {
      id: "prasyarat",
      kind: "prasyarat",
      title: "Prasyarat",
      body: `Sebelum melanjutkan, pastikan kamu menguasai:
- aturan turunan konstanta, pangkat, jumlah, hasil kali, hasil bagi, dan rantai;
- turunan fungsi eksponensial dan trigonometri dasar;
- menyelesaikan persamaan linear dan kuadrat;
- menentukan nilai maksimum atau minimum fungsi kuadrat melalui titik puncak.`,
    },
    {
      id: "konteks",
      kind: "konteks",
      title: "Situasi dan Konteks",
      body: `Turunan bukan sekadar alat menghitung, melainkan cara membaca perubahan bentuk dan mencari keadaan terbaik. Insinyur memakainya untuk merancang kaleng dengan bahan minimum, ekonom mencari tingkat produksi dengan laba maksimum, dan fisika menghitung kecepatan serta percepatan dari fungsi posisi.
Dalam topik ini kita belajar menerjemahkan pertanyaan "kapan fungsi naik?", "di mana puncaknya?", dan "berapa kecepatan saat ini?" menjadi perhitungan turunan.`,
    },
    {
      id: "konsep",
      kind: "konsep",
      title: "Garis Singgung, Kemonotonan, dan Kecekungan",
      body: `**Gradien garis singgung.** Turunan $f'(a)$ adalah gradien garis singgung kurva $y = f(x)$ di $(a, f(a))$. Persamaannya
$$y - f(a) = f'(a)(x - a).$$
Garis normal tegak lurus garis singgung, sehingga gradiennya $\\dfrac{-1}{f'(a)}$ bila $f'(a) \\neq 0$.

**Fungsi naik dan turun.** Jika $f'(x) > 0$ pada suatu selang, maka $f$ **naik** pada selang itu. Jika $f'(x) < 0$, maka $f$ **turun**. Titik tempat $f'$ berubah tanda disebut **titik stasioner**, yang bersyarat $f'(x) = 0$.

**Uji turunan pertama.** Di titik stasioner $x = c$: bila tanda $f'$ berubah dari positif ke negatif, $x = c$ adalah **maksimum lokal**; bila berubah dari negatif ke positif, $x = c$ adalah **minimum lokal**.

**Uji turunan kedua.** Bila $f'(c) = 0$ dan $f''(c) < 0$, maka $x = c$ adalah maksimum lokal. Bila $f''(c) > 0$, maka $x = c$ adalah minimum lokal. Bila $f''(c) = 0$, uji ini tidak memberi simpulan sehingga kita kembali ke uji turunan pertama.

**Kecekungan dan titik belok.** Bila $f''(x) > 0$ pada suatu selang, grafik **cekung ke atas** (terbuka ke atas). Bila $f''(x) < 0$, grafik **cekung ke bawah**. Titik tempat kecekungan berubah disebut **titik belok**, yang bersyarat $f''(x) = 0$ dan tanda $f''$ berubah di sekitarnya.`,
    },
    {
      id: "representasi",
      kind: "representasi",
      title: "Membaca Tanda Turunan",
      body: "Tabel berikut merangkum hubungan tanda turunan dengan bentuk grafik:",
      blocks: [
        {
          kind: "table",
          caption: "Tanda turunan pertama dan kedua",
          headers: [
            "Tanda",
            "Kesimpulan",
          ],
          rows: [
            [
              "$f'(x) > 0$",
              "grafik naik",
            ],
            [
              "$f'(x) < 0$",
              "grafik turun",
            ],
            [
              "$f'(x) = 0$",
              "titik stasioner",
            ],
            [
              "$f''(x) > 0$",
              "cekung ke atas, kandidat minimum",
            ],
            [
              "$f''(x) < 0$",
              "cekung ke bawah, kandidat maksimum",
            ],
            [
              "$f''(x) = 0$",
              "kandidat titik belok",
            ],
          ],
        },
        {
          kind: "tabs",
          items: [
            {
              label: "Gradien",
              body: "Gradien garis singgung di $x=a$ adalah $f'(a)$.",
            },
            {
              label: "Kecepatan",
              body: "Kecepatan sesaat adalah turunan fungsi posisi.",
            },
            {
              label: "Optimasi",
              body: "Nilai ekstrem terjadi saat $f'(x)=0$, diuji dengan $f''(x)$.",
            },
          ],
        },
      ],
    },
    {
      id: "rumus",
      kind: "rumus",
      title: "Rumus Penting",
      body: `**Garis singgung** di $(a, f(a))$: $y - f(a) = f'(a)(x - a)$.

**Garis normal** di $(a, f(a))$: $y - f(a) = \\dfrac{-1}{f'(a)}(x - a)$.

**Titik stasioner:** diselesaikan dari $f'(x) = 0$.

**Jenis titik stasioner:** maksimum bila $f''(x) < 0$, minimum bila $f''(x) > 0$.

**Titik belok:** diselesaikan dari $f''(x) = 0$ dengan perubahan tanda $f''$.

**Kecepatan dan percepatan.** Jika posisi $s(t)$, maka $v(t) = s'(t)$ dan $a(t) = v'(t) = s''(t)$.

**Optimasi.** Nyatakan besaran yang dicari sebagai fungsi satu variabel, tentukan titik stasioner, lalu periksa bahwa titik itu memang memberi nilai maksimum atau minimum.`,
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
              text: `Tentukan persamaan garis singgung dan garis normal kurva $y = x^{2}$ di titik $x = 3$.

*Penyelesaian.* Gradien garis singgung $y' = 2x$, sehingga di $x = 3$ gradiennya $6$ dan titiknya $(3, 9)$. Garis singgung:
$$y - 9 = 6(x - 3) \\quad \\Rightarrow \\quad y = 6x - 9.$$
Garis normal bergradien $\\dfrac{-1}{6}$, sehingga $y - 9 = \\dfrac{-1}{6}(x - 3)$.`,
            },
            {
              title: "Contoh 2",
              text: `Selidiki kemonotonan, titik stasioner, kecekungan, dan titik belok $f(x) = x^{3} - 3x^{2} + 2$.

*Penyelesaian.* Turunan pertama $f'(x) = 3x^{2} - 6x = 3x(x - 2)$, sehingga titik stasioner di $x = 0$ dan $x = 2$. Nilai $f(0) = 2$ dan $f(2) = -2$. Turunan kedua $f''(x) = 6x - 6$. Karena $f''(0) = -6 < 0$, titik $(0, 2)$ adalah maksimum lokal. Karena $f''(2) = 6 > 0$, titik $(2, -2)$ adalah minimum lokal. Grafik cekung ke bawah untuk $x < 1$ dan cekung ke atas untuk $x > 1$, dengan titik belok di $x = 1$ dan $f(1) = 0$.`,
            },
            {
              title: "Contoh 3",
              text: `Posisi sebuah partikel adalah $s(t) = t^{3} - 6t^{2} + 9t$ meter. Tentukan kecepatan dan percepatan pada $t = 2$ s. Lalu tentukan ukuran kandang berluas maksimum dari $40$ m kawat yang satu sisinya berupa sungai.

*Penyelesaian.* Kecepatan $v(t) = s'(t) = 3t^{2} - 12t + 9$ dan percepatan $a(t) = 6t - 12$. Maka $v(2) = 12 - 24 + 9 = -3$ m/s dan $a(2) = 0$ m/s$^{2}$. Untuk kandang, $L(x) = x(40 - 2x)$ dengan $L'(x) = 40 - 4x = 0$ memberi $x = 10$ dan luas $L(10) = 10 \\cdot 20 = 200$ m$^{2}$.`,
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
      body: `1. Tentukan gradien garis singgung $y = x^{2}$ di $x = 3$.
2. Tentukan $f'(x)$ dari $f(x) = x^{3} - 3x^{2} + 2$ dan cari titik stasionernya.
3. Tentukan turunan kedua $f(x) = x^{3} - 3x^{2} + 2$.
4. Sebuah partikel bergerak dengan posisi $s(t) = t^{3} - 6t^{2} + 9t$. Tentukan $v(t)$.`,
      blocks: [
        {
          kind: "details",
          summary: "Lihat kunci dan pembahasan",
          text: `1. $y' = 2x$, maka gradien di $x = 3$ adalah $6$.
2. $f'(x) = 3x^{2} - 6x = 3x(x - 2)$; titik stasioner di $x = 0$ dan $x = 2$.
3. $f''(x) = 6x - 6$.
4. $v(t) = s'(t) = 3t^{2} - 12t + 9$.`,
        },
      ],
    },
    {
      id: "latihan-cakap",
      kind: "latihan-cakap",
      title: "Latihan Cakap",
      level: "cakap",
      body: `1. Tentukan persamaan garis singgung kurva $y = x^{2}$ di $x = 3$.
2. Tentukan jenis titik stasioner $f(x) = x^{3} - 3x^{2} + 2$ dengan uji turunan kedua.
3. Tentukan kecepatan dan percepatan pada $t = 2$ s untuk $s(t) = t^{3} - 6t^{2} + 9t$.
4. Tentukan titik belok $f(x) = x^{3} - 3x^{2} + 2$.`,
      blocks: [
        {
          kind: "details",
          summary: "Lihat kunci dan pembahasan",
          text: `1. Gradien $6$, titik $(3, 9)$, sehingga garis singgungnya $y = 6x - 9$.
2. $f''(0) = -6 < 0$ sehingga $(0, 2)$ maksimum lokal; $f''(2) = 6 > 0$ sehingga $(2, -2)$ minimum lokal.
3. $v(2) = 3(4) - 12(2) + 9 = -3$ m/s dan $a(2) = 6(2) - 12 = 0$ m/s$^{2}$.
4. $f''(x) = 6x - 6 = 0$ memberi $x = 1$ dan $f(1) = 0$, jadi titik belok $(1, 0)$.`,
        },
      ],
    },
    {
      id: "latihan-mahir",
      kind: "latihan-mahir",
      title: "Latihan Mahir",
      level: "mahir",
      body: `1. Sebuah kandang persegi panjang memanfaatkan tepi sungai pada satu sisinya dan memakai $40$ m kawat untuk tiga sisi lainnya. Tentukan ukuran yang membuat luas maksimum.
2. Dari selembar karton $20 \\text{ cm} \\times 20 \\text{ cm}$ akan dibuat kotak terbuka dengan memotong persegi bersisi $x$ di setiap sudut. Tentukan $x$ agar volume maksimum dan hitung volume itu.
3. Dua bilangan berjumlah $20$. Tentukan kedua bilangan agar hasil kalinya maksimum.`,
      blocks: [
        {
          kind: "details",
          summary: "Lihat pembahasan",
          text: `1. $L(x) = x(40 - 2x)$, $L'(x) = 40 - 4x = 0$ memberi $x = 10$. Ukurannya $10$ m dan $20$ m dengan luas maksimum $200$ m$^{2}$.
2. $V(x) = x(20 - 2x)^{2}$. Turunannya $V'(x) = (20 - 2x)(20 - 6x) = 0$ memberi $x = 10$ (tidak sah) atau $x = \\dfrac{10}{3}$. Volumenya $V\\left(\\dfrac{10}{3}\\right) = \\dfrac{10}{3}\\left(\\dfrac{40}{3}\\right)^{2} = \\dfrac{16000}{27} \\approx 592{,}59$ cm$^{3}$.
3. $P(x) = x(20 - x) = 20x - x^{2}$, $P'(x) = 20 - 2x = 0$ memberi $x = 10$. Kedua bilangan $10$ dan $10$ dengan hasil kali maksimum $100$.`,
        },
      ],
    },
    {
      id: "dunia-nyata",
      kind: "dunia-nyata",
      title: "Penerapan di Dunia Nyata",
      body: `Aplikasi turunan muncul pada perancangan produk dan pengambilan keputusan. Perusahaan mencari jumlah produksi dengan laba maksimum dan biaya rata-rata minimum. Insinyur merancang kemasan dengan bahan sesedikit mungkin namun volume tetap.
Dalam lalu lintas, kecepatan dan percepatan kendaraan dihitung dari rekaman posisi. Dalam biologi, laju pertumbuhan populasi mencapai puncak pada titik stasioner. Memahami turunan berarti mampu menemukan keadaan terbaik, bukan sekadar menghitung satu nilai.`,
    },
    {
      id: "kesalahan-umum",
      kind: "kesalahan-umum",
      title: "Kesalahan Umum",
      body: `**1. Menganggap setiap titik stasioner adalah titik balik.** $f'(x) = 0$ hanya syarat perlu; jenisnya harus diperiksa dengan uji turunan pertama atau kedua.
**2. Salah menafsirkan $f''(c) = 0$.** Nilai ini hanya kandidat titik belok; perlu memeriksa perubahan tanda $f''$.
**3. Menukar tanda uji turunan kedua.** $f''(c) < 0$ berarti **maksimum** (kurva cekung ke bawah), bukan minimum.
**4. Lupa gradien normal.** Gradien garis normal adalah $\\dfrac{-1}{f'(a)}$, yaitu kebalikan negatif gradien garis singgung.
**5. Menyimpulkan optimasi tanpa memeriksa batas domain.** Ukuran panjang tidak boleh negatif; akar yang tidak masuk akal harus dibuang.`,
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
            "Mengapa titik stasioner belum tentu titik maksimum atau minimum?",
            "Apa informasi yang diberikan turunan kedua tentang bentuk kurva?",
            "Bagaimana kamu memilih variabel saat menyusun model optimasi pada masalah nyata?",
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
              "Garis singgung",
              "$y - f(a) = f'(a)(x - a)$",
            ],
            [
              "Garis normal",
              "$y - f(a) = \\dfrac{-1}{f'(a)}(x - a)$",
            ],
            [
              "Naik / turun",
              "$f' > 0$ naik, $f' < 0$ turun",
            ],
            [
              "Titik stasioner",
              "$f'(x) = 0$",
            ],
            [
              "Uji turunan kedua",
              "$f'' < 0$ maksimum, $f'' > 0$ minimum",
            ],
            [
              "Kecekungan",
              "$f'' > 0$ cekung ke atas, $f'' < 0$ cekung ke bawah",
            ],
            [
              "Titik belok",
              "$f''(x) = 0$ dengan perubahan tanda",
            ],
            [
              "Kecepatan & percepatan",
              "$v = s'$, $a = v' = s''$",
            ],
            [
              "Optimasi",
              "modelkan, cari $f' = 0$, uji jenisnya",
            ],
          ],
        },
      ],
    },
    {
      id: "evaluasi",
      kind: "evaluasi",
      title: "Evaluasi",
      body: `Kerjakan kuis topik ini untuk memeriksa pemahamanmu. Buka halaman [Latihan & Asesmen](/latihan) lalu pilih topik **Aplikasi Turunan**.
`,
    },
  ],
};
