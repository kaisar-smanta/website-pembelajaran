import type { Topic } from '@/types/content';

export const turunan: Topic = {
  id: 'turunan',
  slug: 'turunan',
  title: 'Turunan',
  subtitle: 'Laju perubahan dan aturan pencariannya',
  grade: 'XII',
  phase: 'F',
  element: 'kalkulus',
  subject: 'matematika-lanjut',
  featured: true,
  status: 'lengkap',
  estimatedMinutes: 100,
  summary:
    'Memahami laju perubahan rata-rata dan sesaat, definisi turunan, serta aturan turunan polinomial, eksponensial, dan trigonometri.',
  description:
    'Turunan mengukur seberapa cepat suatu besaran berubah. Topik ini berangkat dari laju perubahan rata-rata pada suatu selang menuju laju perubahan sesaat, lalu menafsirkan turunan secara geometris sebagai gradien garis singgung dan secara aljabar melalui limit. Dari definisi itu kita menurunkan aturan-aturan praktis: aturan konstanta, aturan pangkat, aturan jumlah dan selisih, aturan hasil kali, aturan hasil bagi, dan aturan rantai. Aturan-aturan ini dipakai untuk menurunkan fungsi polinomial, fungsi eksponensial $a^{x}$ dan $e^{x}$, serta fungsi trigonometri $\\sin x$, $\\cos x$, dan $\\tan x$.',
  keywords: [
    'turunan',
    'laju perubahan',
    'limit',
    'garis singgung',
    'aturan pangkat',
    'aturan hasil kali',
    'aturan hasil bagi',
    'aturan rantai',
    'turunan eksponensial',
    'turunan trigonometri',
  ],
  prerequisites: ['fungsi-kuadrat', 'fungsi-eksponensial', 'trigonometri-lanjut', 'limit-fungsi'],
  relatedTopics: ['aplikasi-turunan'],
  prerequisiteKnowledge: [
    'Menentukan gradien garis lurus dan persamaan garis',
    'Menghitung nilai fungsi kuadrat dan menafsirkan grafiknya',
    'Sifat bilangan berpangkat dan fungsi eksponensial',
    'Nilai perbandingan trigonometri pada sudut istimewa',
    'Pengertian limit secara intuitif dari perubahan nilai fungsi',
  ],
  objectives: [
    { text: 'Peserta didik dapat membedakan laju perubahan rata-rata dan laju perubahan sesaat.' },
    { text: 'Peserta didik dapat menjelaskan turunan sebagai gradien garis singgung dan sebagai limit.' },
    { text: 'Peserta didik dapat menggunakan aturan konstanta, pangkat, jumlah, dan selisih.' },
    { text: 'Peserta didik dapat menerapkan aturan hasil kali, hasil bagi, dan aturan rantai.' },
    { text: 'Peserta didik dapat menentukan turunan fungsi polinomial, eksponensial, dan trigonometri.' },
  ],
  applications: ['mtl-optimasi-produksi'],
  sections: [
    {
      id: "tujuan",
      kind: "tujuan",
      title: "Tujuan Pembelajaran",
      body: "Setelah mempelajari topik ini, peserta didik dapat menjelaskan laju perubahan rata-rata dan sesaat, menafsirkan turunan sebagai gradien garis singgung, menentukan turunan dengan definisi limit, serta menggunakan aturan konstanta, pangkat, jumlah, selisih, hasil kali, hasil bagi, dan rantai untuk menurunkan fungsi polinomial, eksponensial $a^{x}$ dan $e^{x}$, serta fungsi trigonometri $\\sin x$, $\\cos x$, dan $\\tan x$.",
    },
    {
      id: "pemantik",
      kind: "pemantik",
      title: "Pertanyaan Pemantik",
      blocks: [
        {
          kind: "prediction",
          prompt: `Sebuah mobil menempuh jarak $100$ km dalam $2$ jam. Kecepatan rata-ratanya
$$\\bar{v} = \\frac{100 - 0}{2 - 0} = 50 \\text{ km/jam}.$$
Namun pada suatu saat tertentu, jarum spidometer menunjukkan $80$ km/jam. Bagaimana mungkin kecepatan sesaat berbeda dari kecepatan rata-rata, dan bagaimana menghitungnya jika kita hanya memeriksa selang waktu yang makin kecil?`,
          reveal: "Kecepatan rata-rata hanya membandingkan perubahan posisi dengan panjang selang waktu. Bila selang waktu dipersempit terus-menerus, hasil bagi $\\dfrac{\\Delta s}{\\Delta t}$ mendekati sebuah nilai tetap, yaitu **kecepatan sesaat**. Gagasan \"nilai yang didekati\" inilah yang disebut **limit**, dan hasilnya kita namakan **turunan** posisi terhadap waktu.",
          saveLabel: "Simpan dugaan & lihat jawabannya",
        },
      ],
    },
    {
      id: "prasyarat",
      kind: "prasyarat",
      title: "Prasyarat",
      body: `Turunan menyatukan tiga bekal: kemiringan garis, perilaku fungsi, dan gagasan limit. Pastikan kamu sudah lancar:
- menentukan gradien garis melalui dua titik dan menyusun persamaan garis;
- menghitung nilai fungsi kuadrat, eksponensial, dan trigonometri;
- sifat-sifat bilangan berpangkat, termasuk pangkat negatif dan pecahan;
- pengertian limit secara intuitif sebagai nilai yang didekati fungsi.`,
    },
    {
      id: "konteks",
      kind: "konteks",
      title: "Situasi dan Konteks",
      body: `Turunan hadir setiap kali kita menanyakan "seberapa cepat". Berapa cepat populasi tumbuh, berapa cepat suhu kopi mendingin, berapa cepat biaya produksi bertambah ketika jumlah barang ditambah satu unit. Semua pertanyaan itu berbentuk laju perubahan.
Dalam fisika, turunan posisi adalah kecepatan dan turunan kecepatan adalah percepatan. Dalam ekonomi, turunan biaya total adalah biaya marginal. Dalam geometri, turunan di sebuah titik adalah gradien garis singgung kurva di titik itu. Satu gagasan, banyak wajah.`,
    },
    {
      id: "konsep",
      kind: "konsep",
      title: "Laju Perubahan Rata-Rata dan Sesaat",
      questionIds: ['tur-04'],
      body: `Untuk fungsi $f$, **laju perubahan rata-rata** pada selang $[a, a+h]$ adalah kemiringan garis yang menghubungkan dua titik pada grafik:
$$\\frac{\\Delta y}{\\Delta x} = \\frac{f(a+h) - f(a)}{h}.$$
Nilai ini disebut juga **hasil bagi selisih**.

**Laju perubahan sesaat** di $x = a$ diperoleh dengan mempersempit selang, yaitu mengambil limit $h \\to 0$:
$$f'(a) = \\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}.$$
Inilah **definisi turunan** di titik $a$. Untuk setiap $x$ dalam domain, turunan fungsi didefinisikan dengan
$$f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h},$$
asalkan limit ini ada. Notasi lain yang sering dipakai adalah $\\dfrac{dy}{dx}$ atau $D f(x)$.

Untuk $f(x) = x^{2}$ pada selang $[1, 3]$:
$$\\frac{f(3) - f(1)}{3 - 1} = \\frac{9 - 1}{2} = 4.$$
Laju perubahan sesaatnya di $x = 2$ diperoleh dari $f'(x) = 2x$, sehingga $f'(2) = 4$.`,
      blocks: [
        {
          kind: "match",
          intro: "Cocokkan aturan turunan dengan hasilnya.",
          pairs: [
            {
              left: "Aturan pangkat",
              right: "$\\dfrac{d}{dx}x^{n}=n x^{n-1}$",
            },
            {
              left: "Aturan hasil kali",
              right: "$(uv)'=u'v+uv'$",
            },
            {
              left: "Aturan rantai",
              right: "$\\dfrac{d}{dx}f(g(x))=f'(g(x))g'(x)$",
            },
            {
              left: "Turunan $\\sin x$",
              right: "$\\cos x$",
            },
          ],
        },
        {
          kind: "flip-cards",
          intro: "Ingat kembali istilah dasar turunan.",
          cards: [
            {
              front: "Turunan $f'(x)$",
              back: "Laju perubahan sesaat, yaitu $\\lim_{h\\to 0}\\dfrac{f(x+h)-f(x)}{h}$",
            },
            {
              front: "Garis sekan",
              back: "Garis melalui dua titik kurva; gradiennya laju perubahan rata-rata",
            },
            {
              front: "Garis singgung",
              back: "Garis bergradien $f'(a)$ di titik $(a, f(a))$",
            },
            {
              front: "Aturan rantai",
              back: "$\\dfrac{d}{dx}f(g(x)) = f'(g(x))\\,g'(x)$",
            },
            {
              front: "Titik stasioner",
              back: "Titik pada kurva dengan $f'(x) = 0$",
            },
          ],
        },
        {
          kind: "figure",
          alt: "Kurva dengan dua titik A dan B yang dihubungkan garis sekan, selisih mendatar kedua titik ditandai delta x; garis singgung di titik A tampak hampir berimpit dengan garis sekan ketika B digeser mendekati A.",
          caption: "Gradien garis sekan $\\dfrac{f(a+h)-f(a)}{h}$ menuju gradien garis singgung ketika $h \\to 0$. Inilah makna geometris turunan.",
          svg: '<svg viewBox="0 0 320 220" aria-hidden="true" role="presentation"><defs><marker id="fig-tur-sec-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0,0 L 10,5 L 0,10 z" fill="currentColor"/></marker></defs><line x1="40" y1="185" x2="300" y2="185" stroke="currentColor" stroke-width="1.5"/><line x1="40" y1="185" x2="40" y2="25" stroke="currentColor" stroke-width="1.5"/><polyline points="64,182 88,172 112,157 120,150 144,126 168,95 192,59 200,45" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="72" y1="179" x2="200" y2="80" stroke="currentColor" stroke-width="1.4"/><line x1="120" y1="150" x2="200" y2="45" stroke="currentColor" stroke-width="1.4" stroke-dasharray="5 4"/><line x1="120" y1="185" x2="200" y2="185" stroke="currentColor" stroke-width="1" marker-start="url(#fig-tur-sec-arrow)" marker-end="url(#fig-tur-sec-arrow)"/><circle cx="120" cy="150" r="3.6" fill="currentColor"/><circle cx="200" cy="45" r="3.6" fill="currentColor"/><text x="292" y="203" font-size="12" fill="currentColor">x</text><text x="24" y="32" font-size="12" fill="currentColor">y</text><text x="112" y="163" font-size="11" fill="currentColor">A</text><text x="205" y="42" font-size="11" fill="currentColor">B</text><text x="150" y="180" font-size="11" fill="currentColor" text-anchor="middle">h</text><text x="92" y="150" font-size="11" fill="currentColor">sekan</text><text x="150" y="108" font-size="11" fill="currentColor">singgung</text></svg>',
        },
      ],
    },
    {
      id: "representasi",
      kind: "representasi",
      title: "Makna Geometris Turunan",
      body: `Secara geometris, hasil bagi selisih adalah gradien **garis sekan** yang memotong kurva di dua titik. Ketika $h \\to 0$, titik kedua bergerak mendekati titik pertama, dan garis sekan berubah menjadi **garis singgung**. Jadi:
$$f'(a) = \\text{gradien garis singgung kurva } y = f(x) \\text{ di } x = a.$$

Garis singgung di titik $(a, f(a))$ memiliki persamaan
$$y - f(a) = f'(a)(x - a).$$
Garis normal di titik yang sama tegak lurus garis singgung, sehingga gradiennya $\\dfrac{-1}{f'(a)}$ (asalkan $f'(a) \\neq 0$).`,
      blocks: [
        {
          kind: "table",
          caption: "Perbandingan laju perubahan rata-rata dan sesaat",
          headers: [
            "Aspek",
            "Rata-rata",
            "Sesaat",
          ],
          rows: [
            [
              "Rumus",
              "$\\dfrac{f(a+h)-f(a)}{h}$",
              "$\\lim_{h \\to 0} \\dfrac{f(a+h)-f(a)}{h}$",
            ],
            [
              "Tafsiran geometris",
              "gradien garis sekan",
              "gradien garis singgung",
            ],
            [
              "Selang waktu",
              "terbatas",
              "selang sangat kecil di sekitar $a$",
            ],
          ],
        },
        {
          kind: "table",
          caption: "Laju perubahan rata-rata $f(x)=x^{2}$ pada selang yang menyusut menuju $x=1$",
          headers: ["Selang", "Panjang $h$", "Laju perubahan rata-rata"],
          rows: [
            ["$[1, 2]$", "$1$", "$3$"],
            ["$[1, 1{,}5]$", "$0{,}5$", "$2{,}5$"],
            ["$[1, 1{,}1]$", "$0{,}1$", "$2{,}1$"],
            ["$[1, 1{,}01]$", "$0{,}01$", "$2{,}01$"],
          ],
        },
        {
          kind: "figure",
          alt: "Kurva dengan garis sekan yang memotong dua titik dan garis singgung yang menyentuh satu titik, dilengkapi sumbu x dan y.",
          caption: "Garis sekan (putus-putus) melalui dua titik kurva; ketika titik kedua mendekat, kemiringannya menuju kemiringan garis singgung di satu titik.",
          svg: '<svg viewBox="0 0 320 200" aria-hidden="true" role="presentation"><line x1="40" y1="170" x2="300" y2="170" stroke="currentColor" stroke-width="1.5"/><line x1="40" y1="170" x2="40" y2="18" stroke="currentColor" stroke-width="1.5"/><polyline points="60,155 100,138 140,114 180,84 220,55 260,34 290,26" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="100" y1="143" x2="250" y2="33" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/><line x1="90" y1="137" x2="240" y2="69" stroke="currentColor" stroke-width="1.2"/><circle cx="140" cy="114" r="4" fill="currentColor"/><text x="292" y="188" font-size="12" fill="currentColor">x</text><text x="18" y="24" font-size="12" fill="currentColor">y</text></svg>',
        },
      ],
    },
    {
      id: "rumus",
      kind: "rumus",
      title: "Aturan-Aturan Turunan",
      body: `Berikut aturan dasar yang mempercepat perhitungan turunan tanpa harus selalu memakai definisi limit.

**Aturan konstanta.** $\\dfrac{d}{dx}(c) = 0$ untuk konstanta $c$.

**Aturan pangkat.** $\\dfrac{d}{dx}\\left(x^{n}\\right) = n x^{n-1}$ untuk setiap bilangan real $n$. Untuk $n$ negatif atau pecahan, domain $x$ perlu dibatasi agar $x^{n}$ terdefinisi, seperti $x > 0$ untuk pangkat pecahan.

**Konstanta kali fungsi.** $\\dfrac{d}{dx}\\left(c\\,f(x)\\right) = c\\,f'(x)$.

**Jumlah dan selisih.** $\\dfrac{d}{dx}\\left(f(x) \\pm g(x)\\right) = f'(x) \\pm g'(x)$.

**Aturan hasil kali.** $\\dfrac{d}{dx}\\left(f(x)g(x)\\right) = f'(x)g(x) + f(x)g'(x)$.

**Aturan hasil bagi.** $\\dfrac{d}{dx}\\left(\\dfrac{f(x)}{g(x)}\\right) = \\dfrac{f'(x)g(x) - f(x)g'(x)}{\\left[g(x)\\right]^{2}}$.

**Aturan rantai.** Jika $y = f\\left(g(x)\\right)$, maka $\\dfrac{dy}{dx} = f'\\left(g(x)\\right) \\cdot g'(x)$.

**Fungsi eksponensial.** Untuk $a > 0$ dan $a \\ne 1$, $\\dfrac{d}{dx}\\left(a^{x}\\right) = a^{x}\\ln a$, khususnya $\\dfrac{d}{dx}\\left(e^{x}\\right) = e^{x}$ dan $\\dfrac{d}{dx}\\left(e^{kx}\\right) = k e^{kx}$.

**Fungsi trigonometri.** $\\dfrac{d}{dx}\\left(\\sin x\\right) = \\cos x$, $\\dfrac{d}{dx}\\left(\\cos x\\right) = -\\sin x$, dan $\\dfrac{d}{dx}\\left(\\tan x\\right) = \\sec^{2} x = \\dfrac{1}{\\cos^{2} x}$.`,
      blocks: [
        {
          kind: "callout",
          variant: "tip",
          title: "Kunci mengingat",
          text: "Turunkan pangkat menjadi koefisien, lalu kurangi pangkatnya satu. Contoh: $\\dfrac{d}{dx}(x^5) = 5x^4$.",
        },
      ],
    },
    {
      id: "eksplorasi",
      kind: "eksplorasi",
      title: "Eksplorasi",
      body: "Gunakan simulasi berikut untuk melihat bagaimana gradien garis singgung berubah ketika titik singgung digeser sepanjang kurva. Perhatikan kapan garis singgung menanjak, mendatar di titik stasioner, dan menurun.",
      blocks: [
        {
          kind: "exploration",
          explorationId: "turunan-garis-singgung-sim",
        },
      ],
    },
    {
      id: "generalisasi",
      kind: "generalisasi",
      title: "Pola Umum: Aturan Turunan sebagai Pola Pangkat",
      body: `Aturan-aturan turunan bukan kumpulan hafalan yang terpisah, tetapi pola yang berulang. Aturan pangkat $\\dfrac{d}{dx}x^{n} = n x^{n-1}$ menyatakan bahwa turunan selalu **menurunkan pangkat satu** dan memindahkan pangkat lama menjadi koefisien. Aturan konstanta dan kelipatan hanyalah kejadian khususnya, sedangkan aturan jumlah memungkinkan kita menurunkan suku demi suku.

Untuk bentuk yang lebih rumit, peraturannya juga mengikuti pola komposisi. Aturan hasil kali $(uv)' = u'v + uv'$ memastikan setiap komponen "berkesempatan" diturunkan sekali, sedangkan aturan rantai menangani fungsi bersarang dengan mengalikan turunan lapisan luar dan dalam:

$$\\frac{d}{dx}f\\big(g(x)\\big) = f'\\big(g(x)\\big)\\,g'(x).$$

Mengenali struktur fungsinya (pangkat, hasil kali, hasil bagi, atau komposisi) menjadi kunci memilih aturan yang tepat.`,
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
              text: `Tentukan turunan $f(x) = 2x^{3} - 5x^{2} + 3x - 7$, lalu hitung $f'(1)$.

*Penyelesaian.* Turunkan suku demi suku:
$$f'(x) = 6x^{2} - 10x + 3.$$
Maka $f'(1) = 6 - 10 + 3 = -1$.`,
            },
            {
              title: "Contoh 2",
              text: `Tentukan turunan $f(x) = (x^{2} + 1)(2x - 3)$ dan $g(x) = (3x + 1)^{4}$.

*Penyelesaian.* Untuk $f$ gunakan aturan hasil kali:
$$f'(x) = 2x(2x - 3) + (x^{2} + 1)(2) = 4x^{2} - 6x + 2x^{2} + 2 = 6x^{2} - 6x + 2.$$
Jadi $f'(1) = 6 - 6 + 2 = 2$. Sebagai pemeriksaan, jabarkan dahulu $f(x) = 2x^{3} - 3x^{2} + 2x - 3$; menurunkan suku demi suku memberi $6x^{2} - 6x + 2$, sama dengan hasil aturan hasil kali di atas. Untuk $g$ gunakan aturan rantai dengan $u = 3x + 1$:
$$g'(x) = 4(3x + 1)^{3} \\cdot 3 = 12(3x + 1)^{3}, \\quad g'(0) = 12.$$`,
            },
            {
              title: "Contoh 3",
              text: `Tentukan turunan $h(x) = 2^{x}$, $p(x) = e^{3x}$, dan $q(x) = x\\cos x$.

*Penyelesaian.*
$$h'(x) = 2^{x}\\ln 2, \\qquad p'(x) = 3e^{3x}, \\qquad q'(x) = \\cos x - x\\sin x.$$
Karena itu $h'(0) = \\ln 2$, $p'(0) = 3$, dan $q'(0) = \\cos 0 - 0 = 1$.`,
            },
            {
              title: "Contoh 4: Dari Definisi Limit",
              text: `Tentukan turunan $f(x) = x^{2}$ langsung dari definisi limit.

*Penyelesaian.* Gunakan definisi turunan:
$$f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}.$$
Bentuk $f(x+h) = (x+h)^{2} = x^{2} + 2xh + h^{2}$, sehingga hasil bagi selisihnya
$$f'(x) = \\lim_{h \\to 0} \\frac{\\left(x^{2} + 2xh + h^{2}\\right) - x^{2}}{h} = \\lim_{h \\to 0} \\frac{2xh + h^{2}}{h}.$$
Untuk $h \\neq 0$ kita dapat membagi dengan $h$:
$$\\frac{2xh + h^{2}}{h} = 2x + h.$$
Karena itu
$$f'(x) = \\lim_{h \\to 0} (2x + h) = 2x.$$
Hasil ini sama dengan aturan pangkat: turunan $x^{2}$ adalah $2x$.`,
            },
            {
              title: "Contoh 5: Aturan Hasil Bagi",
              text: `Tentukan turunan $f(x) = \\dfrac{2x+1}{x-3}$, lalu hitung $f'(4)$.

*Penyelesaian.* Misalkan $u = 2x+1$ dan $v = x-3$, sehingga $u' = 2$ dan $v' = 1$. Dengan aturan hasil bagi:
$$f'(x) = \\frac{u'v - uv'}{v^{2}} = \\frac{2(x-3) - (2x+1)(1)}{(x-3)^{2}} = \\frac{2x - 6 - 2x - 1}{(x-3)^{2}} = \\frac{-7}{(x-3)^{2}}.$$
Maka $f'(4) = \\dfrac{-7}{(4-3)^{2}} = -7$.`,
            },
            {
              title: "Contoh 6: Aturan Rantai pada Fungsi Komposisi",
              text: `Tentukan turunan $h(x) = \\sin(3x)$ dan $p(x) = e^{2x}$.

*Penyelesaian.* Fungsi $\\sin(3x)$ adalah komposisi, dengan fungsi luar $\\sin u$ dan fungsi dalam $u = 3x$. Karena $\\dfrac{d}{du}\\sin u = \\cos u$ dan $\\dfrac{du}{dx} = 3$:
$$h'(x) = \\cos(3x) \\cdot 3 = 3\\cos(3x).$$
Dengan pola yang sama, untuk $e^{2x}$ fungsi dalamnya $u = 2x$ sehingga
$$p'(x) = e^{2x} \\cdot 2 = 2e^{2x}.$$`,
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
      body: `Turunan dipakai untuk mengukur laju dalam sains dan rekayasa. Jika posisi sebuah mobil dinyatakan $s(t) = 4t^{2} + 2t$ meter, maka kecepatannya $v(t) = s'(t) = 8t + 2$ m/s, sehingga pada $t = 3$ s kecepatannya $8(3) + 2 = 26$ m/s dan percepatannya $a(t) = s''(t) = 8$ m/s$^{2}$.
Dalam ekonomi, biaya marginal adalah turunan biaya total. Jika biaya memproduksi $x$ unit adalah $C(x) = 0{,}02x^{2} + 30x + 5000$ rupiah, biaya marginal $C'(x) = 0{,}04x + 30$; pada $x = 100$ unit, tambahan biaya per unit kira-kira $C'(100) = 34$ rupiah.
Dalam teknik, laju pendinginan sebuah benda mengikuti turunan suhunya: jika suhunya $T(t) = 90 - 3t + 0{,}05t^{2}$ derajat Celsius, maka pada $t = 10$ menit laju perubahannya $T'(t) = -3 + 0{,}1t = -2$ derajat Celsius per menit, artinya suhu sedang turun.`,
    },
    {
      id: "kesalahan-umum",
      kind: "kesalahan-umum",
      title: "Kesalahan Umum",
      body: `**1. Menerapkan aturan pangkat pada konstanta kali variabel.** $\\dfrac{d}{dx}(3x) = 3\\cdot x^{0} = 3$, bukan $1$. Banyak siswa lupa bahwa turunan $3x$ adalah $3$.
**2. Lupa aturan rantai.** Turunan $(3x+1)^{4}$ bukan $4(3x+1)^{3}$. Yang benar adalah $4(3x+1)^{3} \\cdot 3 = 12(3x+1)^{3}$.
**3. Salah tanda pada turunan kosinus.** $\\dfrac{d}{dx}(\\cos x) = -\\sin x$, bukan $\\sin x$.
**4. Menganggap turunan hasil kali sama dengan hasil kali turunan.** $(fg)' \\neq f'g'$; gunakan $f'g + fg'$.
**5. Menukar urutan pada aturan hasil bagi.** Pembilangnya $f'g - fg'$, dengan tanda minus di suku kedua.`,
      blocks: [
        {
          kind: "spot-mistake",
          intro: "Perhatikan penurunan $g(x)=(3x+1)^{4}$. Ada satu langkah yang keliru. Klik langkah itu.",
          steps: [
            "Tulis $g(x)=(3x+1)^{4}$ dan misalkan $u=3x+1$.",
            "Turunkan fungsi luar: $\\dfrac{d}{du}u^{4} = 4u^{3} = 4(3x+1)^{3}$.",
            "Karena aturan rantai, kalikan dengan turunan dalam $\\dfrac{du}{dx} = 3$.",
            "Tulis hasil akhir $g'(x) = 4(3x+1)^{3}$.",
          ],
          wrongIndex: 3,
          explanation: "Langkah keempat keliru. Karena langkah ketiga meminta mengalikan dengan $\\dfrac{du}{dx}=3$, hasil yang benar adalah $g'(x) = 4(3x+1)^{3} \\cdot 3 = 12(3x+1)^{3}$, bukan $4(3x+1)^{3}$.",
        },
      ],
    },
    {
      id: "tantangan",
      kind: "tantangan",
      title: "Tantangan",
      body: `Definisi turunan dapat mengungkap sifat fungsi yang ditentukan oleh persamaan fungsional.

Misalkan $f$ dapat diturunkan pada seluruh bilangan real dan memenuhi
$$f(x+y)=f(x)\\,f(y)$$
untuk setiap bilangan real $x$ dan $y$, dengan $f(0)\\neq 0$.

Buktikan bahwa
$$f'(x)=f'(0)\\,f(x),$$
lalu simpulkan bahwa jika $f'(0)=0$, maka $f$ konstan.`,
      blocks: [
        {
          kind: "callout",
          variant: "tip",
          title: "Petunjuk",
          text: `Gunakan definisi turunan $f'(x)=\\lim_{h\\to 0}\\dfrac{f(x+h)-f(x)}{h}$ dan ubah $f(x+h)$ dengan persamaan fungsional.`,
        },
        {
          kind: "step-reveal",
          intro: "Kerjakan dengan definisi turunan, bukan dengan aturan turunan yang biasa.",
          steps: [
            {
              title: "Tentukan $f(0)$",
              text: `Dari $f(0)=f(0+0)=f(0)^2$ dan $f(0)\\neq 0$, diperoleh $f(0)=1$.`,
            },
            {
              title: "Tulis definisi turunan",
              text: `$f'(x)=\\lim_{h\\to 0}\\dfrac{f(x+h)-f(x)}{h}$.`,
            },
            {
              title: "Gunakan persamaan fungsional",
              text: `Karena $f(x+h)=f(x)f(h)$, maka $f'(x)=\\lim_{h\\to 0}\\dfrac{f(x)f(h)-f(x)}{h}=f(x)\\lim_{h\\to 0}\\dfrac{f(h)-1}{h}$.`,
            },
            {
              title: "Kenali $f'(0)$",
              text: `Karena $f(0)=1$, bentuk $\\lim_{h\\to 0}\\dfrac{f(h)-f(0)}{h}$ tepat sama dengan $f'(0)$. Jadi $f'(x)=f(x)\\,f'(0)$.`,
            },
            {
              title: "Akibatnya",
              text: `Jika $f'(0)=0$, maka $f'(x)=0$ untuk semua $x$. Fungsi yang turunannya nol di seluruh garis real adalah fungsi konstan. Karena $f(0)=1$, fungsi itu adalah $f(x)=1$.`,
            },
          ],
        },
      ],
    },
    {
      id: "sejarah",
      kind: "sejarah",
      title: "Jejak Sejarah",
      body: `Turunan lahir dari upaya menggambar garis singgung dan mencari nilai terbesar atau terkecil. Pierre de Fermat pada 1620-an mengembangkan metode menentukan titik ekstrem yang menyerupai turunan. Isaac Newton dan Gottfried Wilhelm Leibniz, bekerja secara terpisah pada paruh kedua abad ke-17, menyusun kalkulus diferensial sebagai sistem, dan Leibniz memberi notasi $\\dfrac{dy}{dx}$ yang kita pakai hingga kini. Dasar limit yang ketat baru dibangun kemudian, terutama oleh Augustin-Louis Cauchy pada 1820-an dan Karl Weierstrass melalui definisi $\\varepsilon$-$\\delta$. Sejak itu turunan menjadi alat baku dalam fisika, teknik, dan ekonomi.`,
    },
    {
      id: "refleksi",
      kind: "refleksi",
      title: "Refleksi",
      body: "Satu bilangan, yaitu gradien, ternyata dapat mewakili laju perubahan pada suatu saat. Renungkan kaitan antara garis sekan yang kamu gambar dan garis singgung yang menjadi tujuannya, lalu tuliskan satu kalimat yang menjelaskannya dengan bahasamu sendiri.",
      blocks: [
        {
          kind: "reflection",
          prompts: [
            "Apa perbedaan mendasar antara laju perubahan rata-rata dan laju perubahan sesaat?",
            "Mengapa turunan dapat ditafsirkan sebagai gradien garis singgung?",
            "Dalam aturan rantai, mengapa faktor turunan fungsi dalam perlu disertakan?",
          ],
          confidenceLabel: "Seberapa yakin kamu membaca laju perubahan dari nilai turunan?",
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
              "Laju perubahan rata-rata",
              "$\\dfrac{f(a+h)-f(a)}{h}$",
            ],
            [
              "Definisi turunan",
              "$f'(x) = \\lim_{h \\to 0} \\dfrac{f(x+h)-f(x)}{h}$",
            ],
            [
              "Makna geometris",
              "gradien garis singgung",
            ],
            [
              "Aturan pangkat",
              "$\\dfrac{d}{dx}(x^{n}) = n x^{n-1}$",
            ],
            [
              "Aturan hasil kali",
              "$f'g + fg'$",
            ],
            [
              "Aturan hasil bagi",
              "$\\dfrac{f'g - fg'}{g^{2}}$",
            ],
            [
              "Aturan rantai",
              "$f'(g(x))\\,g'(x)$",
            ],
            [
              "Eksponensial",
              "$\\dfrac{d}{dx}(a^{x}) = a^{x}\\ln a$, $\\dfrac{d}{dx}(e^{x}) = e^{x}$",
            ],
            [
              "Trigonometri",
              "$\\sin \\to \\cos$, $\\cos \\to -\\sin$, $\\tan \\to \\sec^{2}$",
            ],
          ],
        },
      ],
    },
    {
      id: "evaluasi",
      kind: "evaluasi",
      title: "Evaluasi",
      questionIds: ['tur-10'],
      body: `**Sejenak meninjau ulang.** Jawab dua pertanyaan ini tanpa membuka catatan. (1) Dari dua grafik garis, mana yang gradiennya lebih besar, dan bagaimana turunan membantumu memastikannya? (2) Pilih satu aturan turunan yang paling sering kamu keliru, lalu tulis satu langkah pencegahannya. Uji hasil belajarmu di [Latihan & Asesmen](/latihan) topik **Turunan**.`,
    },
  ],
};
