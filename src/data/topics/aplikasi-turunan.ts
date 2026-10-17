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
  applications: ['mtl-optimasi-produksi', 'mtl-gerak-kecepatan'],
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
      body: `Topik ini memakai turunan sebagai alat membaca bentuk kurva. Pastikan kamu sudah lancar:
- aturan turunan konstanta, pangkat, jumlah, hasil kali, hasil bagi, dan rantai;
- turunan fungsi eksponensial dan trigonometri dasar;
- menyelesaikan persamaan linear dan kuadrat;
- menafsirkan titik puncak fungsi kuadrat sebagai nilai ekstrem.`,
    },
    {
      id: "konteks",
      kind: "konteks",
      title: "Situasi dan Konteks",
      body: `Turunan bukan hanya alat menghitung. Ia juga cara membaca bentuk perubahan dan mencari keadaan terbaik. Insinyur memakainya untuk merancang kaleng dengan bahan minimum, ekonom mencari tingkat produksi dengan laba maksimum, dan fisika menghitung kecepatan serta percepatan dari fungsi posisi.
Dalam topik ini kita belajar menerjemahkan pertanyaan "kapan fungsi naik?", "di mana puncaknya?", dan "berapa kecepatan saat ini?" menjadi perhitungan turunan.`,
    },
    {
      id: "konsep",
      kind: "konsep",
      title: "Garis Singgung, Kemonotonan, dan Kecekungan",
      questionIds: ['ap-01'],
      body: `**Gradien garis singgung.** Turunan $f'(a)$ adalah gradien garis singgung kurva $y = f(x)$ di $(a, f(a))$. Persamaannya
$$y - f(a) = f'(a)(x - a).$$
Garis normal tegak lurus garis singgung, sehingga gradiennya $\\dfrac{-1}{f'(a)}$ bila $f'(a) \\neq 0$.

**Fungsi naik dan turun.** Jika $f'(x) > 0$ pada suatu selang, maka $f$ **naik** pada selang itu. Jika $f'(x) < 0$, maka $f$ **turun**. Titik tempat $f'$ berubah tanda disebut **titik stasioner**, yang bersyarat $f'(x) = 0$.

**Uji turunan pertama.** Di titik stasioner $x = c$: bila tanda $f'$ berubah dari positif ke negatif, $x = c$ adalah **maksimum lokal**; bila berubah dari negatif ke positif, $x = c$ adalah **minimum lokal**.

**Uji turunan kedua.** Bila $f'(c) = 0$ dan $f''(c) < 0$, maka $x = c$ adalah maksimum lokal. Bila $f''(c) > 0$, maka $x = c$ adalah minimum lokal. Bila $f''(c) = 0$, uji ini tidak memberi simpulan sehingga kita kembali ke uji turunan pertama.

**Kecekungan dan titik belok.** Bila $f''(x) > 0$ pada suatu selang, grafik **cekung ke atas** (terbuka ke atas). Bila $f''(x) < 0$, grafik **cekung ke bawah**. Titik tempat kecekungan berubah disebut **titik belok**, yang bersyarat $f''(x) = 0$ dan tanda $f''$ berubah di sekitarnya.`,
      blocks: [
        {
          kind: "callout",
          variant: "concept",
          title: "Membaca tanda turunan dan memeriksa ujung selang",
          text: `Tanda $f'(x)$ menunjukkan arah grafik: $f'(x) > 0$ berarti naik dan $f'(x) < 0$ berarti turun. Pada **selang tertutup** $[a, b]$, nilai maksimum atau minimum global dapat terjadi di titik stasioner **atau** di ujung selang, jadi bandingkan selalu nilai $f(a)$, $f(b)$, dan nilai di setiap titik stasioner.`,
        },
      ],
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
        {
          kind: "flip-cards",
          intro: "Latih istilah kunci aplikasi turunan.",
          cards: [
            {
              front: "Garis singgung",
              back: "Garis bergradien $f'(a)$ di titik $(a, f(a))$",
            },
            {
              front: "Garis normal",
              back: "Tegak lurus garis singgung, bergradien $-\\dfrac{1}{f'(a)}$",
            },
            {
              front: "Titik stasioner",
              back: "Titik pada kurva dengan $f'(x)=0$",
            },
            {
              front: "Titik belok",
              back: "Titik tempat kecekungan berubah tanda",
            },
            {
              front: "Nilai ekstrem",
              back: "Maksimum atau minimum, diuji lewat tanda $f''$ atau perubahan tanda $f'$",
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
      id: "eksplorasi",
      kind: "eksplorasi",
      title: "Eksplorasi Garis Singgung dan Gradien",
      body: `Rumus garis singgung baru bermakna jika kamu melihat sendiri bagaimana kemiringannya berubah dari titik ke titik. Pada simulasi berikut, geser titik singgung sepanjang kurva $f(x)=x^{3}-3x$. Perhatikan kapan garis singgung menanjak, kapan mendatar tepat di titik stasioner, dan kapan menurun.`,
      blocks: [
        {
          kind: "exploration",
          explorationId: "mtl-aplikasi-turunan-garis-singgung",
        },
        {
          kind: "figure",
          alt: "Kurva kubik dengan sebuah titik maksimum dan titik minimum yang ditandai, serta sebuah garis singgung yang menyentuh kurva di satu titik.",
          caption: "Garis singgung menyentuh kurva di satu titik dengan gradien $f'(a)$, sedangkan titik stasioner $f'(x)=0$ menandai maksimum dan minimum lokal.",
          svg: '<svg viewBox="0 0 320 240" aria-hidden="true" role="presentation"><line x1="45" y1="115" x2="300" y2="115" stroke="currentColor" stroke-width="1.5"/><line x1="170" y1="210" x2="170" y2="25" stroke="currentColor" stroke-width="1.5"/><polyline points="56,183 85,77 113,47 142,68 170,115 199,162 227,183 256,153 284,47" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="164" y1="116" x2="233" y2="208" stroke="currentColor" stroke-width="1.6" stroke-dasharray="6 4"/><circle cx="113" cy="47" r="3.4" fill="currentColor"/><circle cx="227" cy="183" r="3.4" fill="currentColor"/><circle cx="199" cy="162" r="3.4" fill="currentColor"/><text x="292" y="133" font-size="12" fill="currentColor">x</text><text x="174" y="34" font-size="12" fill="currentColor">y</text><text x="74" y="40" font-size="11" fill="currentColor">maksimum</text><text x="234" y="178" font-size="11" fill="currentColor">minimum</text><text x="146" y="204" font-size="11" fill="currentColor">garis singgung</text></svg>',
        },
      ],
    },
    {
      id: "eksplorasi-optimasi",
      kind: "eksplorasi",
      title: "Eksplorasi Optimasi dengan Turunan",
      body: `Setelah melihat garis singgung, telusuri bagaimana tanda turunan menentukan puncak dan lembah kurva. Atur titik uji di sekitar titik stasioner kurva $f(x)=x^{3}-3x$, lalu amati kapan fungsi naik dan kapan turun.`,
      blocks: [
        {
          kind: "exploration",
          explorationId: "mtl-derivative-optimasi",
        },
      ],
    },
    {
      id: "generalisasi",
      kind: "generalisasi",
      title: "Pola Umum: Dari Turunan ke Bentuk Grafik",
      body: `Pola yang muncul pada setiap contoh dapat diringkas menjadi satu rangkaian. Tanda $f'$ menentukan arah gerak grafik, sedangkan tanda $f''$ menentukan cara grafik melengkung:

$$f'(x) > 0 \\Rightarrow \\text{naik}, \\qquad f'(x) < 0 \\Rightarrow \\text{turun},$$

$$f''(x) > 0 \\Rightarrow \\text{cekung ke atas}, \\qquad f''(x) < 0 \\Rightarrow \\text{cekung ke bawah}.$$

Akibatnya, titik dengan $f'(x)=0$ adalah satu-satunya calon nilai ekstrem, dan jenisnya diputuskan oleh tanda $f''$ di titik itu. Untuk masalah nyata, pola ini dipakai dengan urutan tetap: nyatakan besaran yang dicari sebagai fungsi satu variabel, selesaikan $f'(x)=0$, lalu periksa jenisnya dan buang solusi yang tidak masuk domain.`,
      blocks: [
        {
          kind: "figure",
          alt: "Grafik fungsi luas kandang L sama dengan x dikali 40 dikurangi 2x pada selang nol sampai dua puluh, berbentuk parabola terbalik dengan puncak di titik sepuluh koma dua ratus.",
          caption: "Jendela optimasi kandang dari pertanyaan pemantik: domain sah $0 < x < 20$ dan puncak $L(x)=x(40-2x)$ di $x=10$ dengan luas maksimum $200$ m$^{2}$. Di luar domain itu kandang tidak lagi berbentuk persegi panjang.",
          svg: '<svg viewBox="0 0 320 220" aria-hidden="true" role="presentation"><defs><marker id="fig-aplikasi-turunan-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0,0 L 10,5 L 0,10 z" fill="currentColor"/></marker></defs><line x1="45" y1="185" x2="300" y2="185" stroke="currentColor" stroke-width="1.5" marker-end="url(#fig-aplikasi-turunan-arrow)"/><line x1="55" y1="200" x2="55" y2="30" stroke="currentColor" stroke-width="1.5" marker-end="url(#fig-aplikasi-turunan-arrow)"/><polyline points="70,185 123.75,80 177.5,45 231.25,80 285,185" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="177.5" y1="185" x2="177.5" y2="45" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4"/><line x1="55" y1="45" x2="177.5" y2="45" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4"/><circle cx="177.5" cy="45" r="4" fill="currentColor"/><text x="292" y="201" font-size="12" fill="currentColor">x</text><text x="32" y="40" font-size="12" fill="currentColor">L(x)</text><text x="70" y="201" font-size="11" fill="currentColor">0</text><text x="196" y="201" font-size="11" fill="currentColor">20</text><text x="182" y="38" font-size="11" fill="currentColor">maksimum (10, 200)</text><text x="103" y="120" font-size="11" fill="currentColor">L(x) = x(40 - 2x)</text></svg>',
        },
      ],
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
              text: `Posisi sebuah partikel adalah $s(t) = t^{3} - 9t^{2} + 24t$ meter, dengan $t$ dalam sekon. Tentukan kecepatan dan percepatan pada $t = 3$ s, lalu tentukan kapan partikel berhenti sesaat.

*Penyelesaian.* Kecepatan $v(t) = s'(t) = 3t^{2} - 18t + 24$ dan percepatan $a(t) = v'(t) = 6t - 18$. Maka $v(3) = 27 - 54 + 24 = -3$ m/s dan $a(3) = 18 - 18 = 0$ m/s$^{2}$. Partikel berhenti sesaat ketika $v(t) = 0$:
$$3t^{2} - 18t + 24 = 3(t-2)(t-4) = 0,$$
yaitu pada $t = 2$ s dan $t = 4$ s.`,
            },
            {
              title: "Contoh 4",
              text: `Biaya total memproduksi $x$ unit suatu barang adalah $C(x) = 0{,}01x^{2} + 40x + 10000$ rupiah. Tentukan banyak unit yang membuat **biaya rata-rata per unit minimum**, lalu hitung biaya rata-rata minimum itu.

*Penyelesaian.* Biaya rata-rata per unit adalah $A(x) = \\dfrac{C(x)}{x} = 0{,}01x + 40 + \\dfrac{10000}{x}$, dengan $x > 0$. Selesaikan $A'(x) = 0$:
$$A'(x) = 0{,}01 - \\frac{10000}{x^{2}} = 0 \\quad \\Rightarrow \\quad x^{2} = \\frac{10000}{0{,}01} = 1000000,$$
sehingga $x = 1000$ (karena $x > 0$). Untuk memastikan ini minimum, periksa turunan kedua:
$$A''(x) = \\frac{20000}{x^{3}} > 0 \\quad \\text{untuk } x > 0,$$
jadi $x = 1000$ memberi minimum. Nilai $A(1000) = 0{,}01(1000) + 40 + \\dfrac{10000}{1000} = 10 + 40 + 10 = 60$. Jadi biaya rata-rata terkecil adalah Rp60 per unit, terjadi pada produksi $1000$ unit.`,
            },
          ],
        },
        {
          kind: "figure",
          alt: "Kurva biaya rata-rata yang menurun lalu menanjak, dengan titik minimum ditandai pada x sama dengan 1000 dan biaya 60.",
          caption: "Grafik biaya rata-rata $A(x) = 0{,}01x + 40 + \\dfrac{10000}{x}$ dari Contoh 4. Kurva menurun lalu menanjak, dan titik optimumnya berada di $x = 1000$ dengan biaya rata-rata Rp60 per unit.",
          svg: '<svg viewBox="0 0 320 240" aria-hidden="true" role="presentation"><line x1="55" y1="200" x2="300" y2="200" stroke="currentColor" stroke-width="1.4"/><line x1="55" y1="200" x2="55" y2="30" stroke="currentColor" stroke-width="1.4"/><polyline points="78.5,121.8 102,141.4 125.5,146.7 149,148.6 172.5,149 196,148.7 231.3,147.6 290,144.8" fill="none" stroke="currentColor" stroke-width="2.4"/><line x1="172.5" y1="200" x2="172.5" y2="149" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/><line x1="55" y1="149" x2="172.5" y2="149" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/><circle cx="172.5" cy="149" r="3.4" fill="currentColor"/><text x="292" y="216" font-size="12" fill="currentColor">x</text><text x="34" y="40" font-size="12" fill="currentColor">A(x)</text><text x="176" y="162" font-size="11" fill="currentColor">minimum (1000, 60)</text><text x="120" y="216" font-size="11" fill="currentColor">x = 1000</text><text x="16" y="153" font-size="11" fill="currentColor">60</text></svg>',
        },
        {
          kind: "details",
          summary: "Coba sendiri: optimasi keliling tetap",
          text: `Seutas kawat sepanjang $24$ cm dibentuk menjadi persegi panjang. Tentukan ukuran agar **luasnya maksimum**.

*Penyelesaian.* Misalkan panjang $x$ cm, maka lebarnya $12-x$ cm dan luasnya $L(x)=x(12-x)=12x-x^{2}$, dengan $0<x<12$. Selesaikan $L'(x)=0$:
$$L'(x)=12-2x=0 \\quad \\Rightarrow \\quad x=6.$$
Karena $L''(x)=-2<0$, titik $x=6$ memberi **maksimum**. Jadi persegi panjang berukuran $6\\text{ cm}\\times6\\text{ cm}$ (persegi) dengan luas maksimum $36\\text{ cm}^{2}$.`,
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
      body: `Aplikasi turunan muncul pada perancangan produk dan pengambilan keputusan. Perusahaan mencari jumlah produksi dengan laba maksimum dan biaya rata-rata minimum. Insinyur merancang kemasan dengan bahan sesedikit mungkin namun volume tetap.
Dalam lalu lintas, kecepatan dan percepatan kendaraan dihitung dari rekaman posisi. Dalam biologi, laju pertumbuhan populasi mencapai puncak pada titik stasioner, sehingga waktu panen terbaik dapat diperkirakan.`,
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
      blocks: [
        {
          kind: "spot-mistake",
          intro: "Perhatikan penentuan jenis titik stasioner $f(x)=x^{3}-3x^{2}+2$. Ada satu langkah yang keliru. Klik langkah itu.",
          steps: [
            "Turunan pertama: $f'(x)=3x^{2}-6x=3x(x-2)$, sehingga $x=0$ dan $x=2$ stasioner.",
            "Turunan kedua: $f''(x)=6x-6$.",
            "Karena $f''(2)=6>0$, simpulkan $(2,-2)$ adalah **maksimum lokal**.",
            "Karena $f''(0)=-6<0$, simpulkan $(0,2)$ adalah **maksimum lokal**.",
          ],
          wrongIndex: 2,
          explanation: "Langkah ketiga keliru. Bila $f''(c)>0$ grafik cekung ke atas sehingga titik itu **minimum** lokal, bukan maksimum. Sebaliknya $f''(c)<0$ menandakan maksimum. Jadi $(2,-2)$ minimum dan $(0,2)$ maksimum.",
        },
      ],
    },
    {
      id: "tantangan",
      kind: "tantangan",
      title: "Memotong Kawat: Persegi dan Lingkaran",
      body: `**Soal.** Seutas kawat sepanjang $40$ cm dipotong menjadi dua bagian. Satu bagian dibengkokkan menjadi persegi, bagian lain menjadi lingkaran. Tentukan panjang potongan untuk persegi agar **jumlah luas** kedua bangun minimum, lalu hitung luas minimum itu.`,
      blocks: [
        {
          kind: "step-reveal",
          intro: "Ubah soal cerita menjadi fungsi satu variabel, lalu cari titik stasionernya.",
          steps: [
            {
              title: "Langkah 1: Modelkan luas total",
              text: `Misalkan $x$ cm kawat dipakai untuk persegi, maka sisanya $40-x$ cm untuk lingkaran. Sisi persegi adalah $\\dfrac{x}{4}$ sehingga luasnya $\\dfrac{x^{2}}{16}$. Keliling lingkaran $40-x$ memberi jari-jari $\\dfrac{40-x}{2\\pi}$ dan luas $\\dfrac{(40-x)^{2}}{4\\pi}$. Jadi
$$A(x)=\\frac{x^{2}}{16}+\\frac{(40-x)^{2}}{4\\pi}, \\qquad 0 \\le x \\le 40.$$`,
            },
            {
              title: "Langkah 2: Turunkan",
              text: `Turunkan suku demi suku:
$$A'(x)=\\frac{x}{8}-\\frac{40-x}{2\\pi}.$$`,
            },
            {
              title: "Langkah 3: Tentukan titik stasioner",
              text: `Selesaikan $A'(x)=0$:
$$\\frac{x}{8}=\\frac{40-x}{2\\pi} \\;\\Rightarrow\\; 2\\pi x=8(40-x) \\;\\Rightarrow\\; x(2\\pi+8)=320,$$
sehingga $x=\\dfrac{320}{2\\pi+8}=\\dfrac{160}{\\pi+4}\\approx 22{,}4$ cm.`,
            },
            {
              title: "Langkah 4: Uji jenis titik stasioner",
              text: `$$A''(x)=\\frac{1}{8}+\\frac{1}{2\\pi}>0,$$
sehingga $x=\\dfrac{160}{\\pi+4}$ memberi **minimum**.`,
            },
            {
              title: "Langkah 5: Tafsirkan hasil",
              text: `Sisi persegi $=\\dfrac{x}{4}=\\dfrac{40}{\\pi+4}\\approx 5{,}60$ cm dan jari-jari lingkaran $=\\dfrac{40-x}{2\\pi}=\\dfrac{20}{\\pi+4}\\approx 2{,}80$ cm. Karena $\\dfrac{40}{\\pi+4}=2\\cdot\\dfrac{20}{\\pi+4}$, sisi persegi tepat sama dengan diameter lingkaran. Luas minimumnya $A=\\dfrac{400}{\\pi+4}\\approx 56{,}0$ cm$^{2}$.`,
            },
          ],
        },
      ],
    },
    {
      id: "sejarah",
      kind: "sejarah",
      title: "Dari Brachistochrone ke Optimasi",
      body: `Asal-usul pencarian nilai terbaik, termasuk cara Fermat menyusun gagasan $f'(x)=0$, sudah dicatat pada bagian *Jejak Sejarah* topik Turunan. Di sini kita menelusuri sisi penerapannya. Isaac Newton memakai kalkulusnya untuk memecahkan persoalan gerak dan bentuk kurva, termasuk menentukan keadaan ekstrem. Pada 1696 Johann Bernoulli mengajukan masalah *brachistochrone*, yaitu lengkung turun tercepat, yang mendorong lahirnya kalkulus variasi dan diselesaikan oleh Newton, Leibniz, dan L'Hôpital selain Bernoulli sendiri. Sejak abad ke-18, optimasi dengan turunan menjadi alat baku dalam fisika, teknik, dan ekonomi.`,
    },
    {
      id: "refleksi",
      kind: "refleksi",
      title: "Refleksi",
      body: "Puncak, lembah, dan kemiringan kurva ternyata bisa dibaca dari tanda turunan. Pikirkan satu keputusan sehari-hari yang bisa dimodelkan sebagai pencarian nilai terbaik, lalu tuliskan besaran apa yang berperan sebagai fungsi tujuannya.",
      blocks: [
        {
          kind: "reflection",
          prompts: [
            "Mengapa titik stasioner belum tentu titik maksimum atau minimum?",
            "Apa informasi yang diberikan turunan kedua tentang bentuk kurva?",
            "Bagaimana kamu memilih variabel saat menyusun model optimasi pada masalah nyata?",
          ],
          confidenceLabel: "Seberapa yakin kamu memilih uji untuk menentukan jenis titik stasioner?",
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
          caption: "Ringkasan cara membaca bentuk kurva dengan turunan pertama dan kedua.",
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
        {
          kind: "callout",
          variant: "concept",
          title: "Benang merah: satu turunan, banyak keputusan",
          text: "Garis singgung, kemonotonan, kecekungan, dan optimasi semuanya membaca satu hal yang sama, yaitu **tanda turunan**. Turunan pertama menentukan arah grafik, turunan kedua menentukan lengkungannya, dan keduanya bersama menunjukkan di mana nilai terbaik berada. Pola **cari titik dengan $f'(x)=0$, lalu periksa jenisnya** inilah yang dipakai lagi pada **Integral**, ketika laju yang diketahui diubah menjadi akumulasi seperti jarak tempuh.",
        },
        {
          kind: "match",
          intro: "Cocokkan setiap istilah dengan maknanya sebelum menutup topik ini.",
          pairs: [
            {
              left: "Garis singgung",
              right: "Garis bergradien $f'(a)$ yang menyinggung kurva di titik $(a, f(a))$.",
            },
            {
              left: "Garis normal",
              right: "Garis tegak lurus garis singgung, bergradien $-\\dfrac{1}{f'(a)}$.",
            },
            {
              left: "Titik stasioner",
              right: "Titik pada kurva dengan $f'(x) = 0$.",
            },
            {
              left: "Titik belok",
              right: "Titik tempat kecekungan kurva berubah tanda.",
            },
            {
              left: "Uji turunan kedua",
              right: "Menentukan jenis titik ekstrem dari tanda $f''(x)$.",
            },
            {
              left: "Optimasi",
              right: "Mencari nilai maksimum atau minimum pada situasi nyata.",
            },
          ],
        },
      ],
    },
    {
      id: "evaluasi",
      kind: "evaluasi",
      title: "Evaluasi",
      questionIds: ['ap-09'],
      body: `**Uji penguasaan.** Kerjakan dua tugas singkat. (1) Diberikan $f'(x)=0$ di sebuah titik; sebutkan dua cara berbeda untuk menentukan jenis titik itu. (2) Tuliskan urutan langkah menyelesaikan soal optimasi cerita, mulai dari memilih variabel sampai memeriksa batas domain. Setelah itu, lanjut berlatih di [Latihan & Asesmen](/latihan) topik **Aplikasi Turunan**.`,
    },
  ],
};
