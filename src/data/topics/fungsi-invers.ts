import type { Topic } from '@/types/content';

export const fungsiInvers: Topic = {
  id: 'fungsi-invers',
  slug: 'fungsi-invers',
  title: 'Fungsi Invers',
  subtitle: 'Membalik arah sebuah pemetaan',
  grade: 'XI',
  phase: 'F',
  element: 'aljabar-fungsi',
  status: 'lengkap',
  estimatedMinutes: 80,
  summary:
    'Memahami domain, kodomain, dan range, mengenali fungsi bijektif, lalu menentukan rumus dan grafik fungsi invers.',
  description:
    'Fungsi invers adalah fungsi yang membalik arah pemetaan: jika $f$ mengubah $x$ menjadi $y$, maka $f^{-1}$ mengubah $y$ kembali menjadi $x$. Topik ini membangun pemahaman domain, kodomain, dan range, mengenali syarat fungsi memiliki invers (bijektif), menurunkan rumus invers fungsi linear dan rasional sederhana, serta membaca hubungan grafik $f$ dan $f^{-1}$ yang saling mencerminkan terhadap garis $y = x$.',
  keywords: [
    'fungsi invers',
    'bijektif',
    'injektif',
    'surjektif',
    'domain',
    'range',
    'pencerminan y=x',
  ],
  prerequisites: ['fungsi-kuadrat'],
  relatedTopics: ['komposisi-fungsi', 'transformasi-fungsi'],
  prerequisiteKnowledge: [
    'Pengertian relasi dan fungsi',
    'Notasi fungsi serta cara mensubstitusi nilai ke dalam fungsi',
    'Menyelesaikan persamaan linear dan pecahan sederhana',
  ],
  objectives: [
    { text: 'Peserta didik dapat menjelaskan pengertian domain, kodomain, dan range suatu fungsi.' },
    { text: 'Peserta didik dapat menentukan apakah suatu fungsi bijektif sehingga memiliki invers.' },
    { text: 'Peserta didik dapat menentukan rumus fungsi invers dari fungsi linear dan rasional sederhana.' },
    { text: 'Peserta didik dapat menggambarkan grafik fungsi dan inversnya serta menjelaskan pencerminannya terhadap garis $y=x$.' },
    { text: 'Peserta didik dapat menggunakan fungsi invers untuk menyelesaikan masalah kontekstual sederhana.' },
  ],
  applications: ['konversi-mata-uang'],
  sections: [
    {
      id: "tujuan",
      kind: "tujuan",
      title: "Tujuan Pembelajaran",
      body: "Setelah mempelajari topik ini, peserta didik dapat memahami domain, kodomain, dan range sebuah fungsi, mengenali ciri fungsi bijektif, menentukan rumus invers fungsi linear maupun rasional sederhana, menggambar grafik fungsi bersama inversnya, dan menggunakan fungsi invers untuk menyelesaikan masalah sederhana.",
    },
    {
      id: "pemantik",
      kind: "pemantik",
      title: "Pertanyaan Pemantik",
      body: `Sebuah mesin menerima suhu dalam satuan Celsius dan mengeluarkan suhu dalam Fahrenheit dengan aturan $F = \\dfrac{9}{5}C + 32$.
Jika kita memasukkan $C = 25$, mesin mengeluarkan $F = 77$.
Pertanyaannya: **jika yang diketahui adalah keluaran $F = 77$, dapatkah kita menemukan kembali masukan $C = 25$? Bagaimana caranya?**

Mesin tadi adalah sebuah fungsi. Yang kita cari adalah "mesin balik" yang mengubah arah dari Fahrenheit ke Celsius.`,
      blocks: [
        {
          kind: "prediction",
          prompt: "Jika diketahui keluaran $F = 77$, berapakah nilai masukan $C$ semula?",
          options: [
            "$C = 25$",
            "$C = 32$",
            "$C = 45$",
            "$C = 77$",
          ],
          reveal: `Mesin balik diperoleh dengan menyelesaikan $F = \\dfrac{9}{5}C + 32$ untuk $C$:
$$C = \\frac{5}{9}(F - 32).$$
Untuk $F = 77$ diperoleh $C = \\dfrac{5}{9}(77 - 32) = \\dfrac{5}{9}(45) = 25$. Jadi masukan semula memang dapat ditemukan kembali. Inilah gagasan **fungsi invers**.`,
          saveLabel: "Simpan dugaan",
        },
      ],
    },
    {
      id: "prasyarat",
      kind: "prasyarat",
      title: "Prasyarat",
      body: `Menentukan fungsi invers menuntut keluwesan memanipulasi persamaan agar satu variabel menjadi subjek. Pastikan kamu sudah menguasai:
- pengertian relasi dan fungsi;
- cara mensubstitusi nilai ke dalam rumus fungsi, seperti $f(2)$ untuk $f(x)=3x-6$;
- menyelesaikan persamaan linear seperti $2x+1=7$;
- menyelesaikan persamaan berbentuk pecahan seperti $y=\\dfrac{2x+1}{x-3}$.`,
    },
    {
      id: "konteks",
      kind: "konteks",
      title: "Situasi dan Konteks",
      body: `Banyak proses bersifat dua arah. Seorang guru memetakan setiap siswa ke nomor induknya, dan sebaliknya setiap nomor induk menunjuk tepat satu siswa. Kasir memetakan harga ke jumlah bayar, dan kita ingin tahu berapa barang yang bisa dibeli dari sejumlah uang.
Ketika setiap keluaran hanya berasal dari satu masukan, arah pemetaan dapat dibalik. Fungsi yang arahnya dapat dibalik secara sempurna disebut fungsi **bijektif**, dan pembaliknya disebut **fungsi invers**.`,
    },
    {
      id: "konsep",
      kind: "konsep",
      title: "Konsep Inti: Domain, Kodomain, dan Range",
      body: `Suatu fungsi $f: A \\to B$ memetakan setiap anggota **domain** $A$ ke tepat satu anggota **kodomain** $B$. Himpunan semua hasil pemetaan yang benar-benar muncul disebut **range** (daerah hasil), dan range selalu merupakan bagian dari kodomain.
Ambil contoh $f(x) = 2x + 1$ untuk $x \\in \\{1,2,3\\}$:
- domain: $\\{1,2,3\\}$;
- kodomain: himpunan bilangan real $\\mathbb{R}$;
- range: $\\{3,5,7\\}$ karena $f(1)=3$, $f(2)=5$, dan $f(3)=7$.

Untuk fungsi pada bilangan real, himpunan nilai $x$ yang boleh dimasukkan disebut domain alami. Pada $g(x)=\\dfrac{1}{x-2}$, nilai $x=2$ harus dikeluarkan agar pembilang tidak dibagi nol, sehingga domainnya $x \\neq 2$.`,
      blocks: [
        {
          kind: "callout",
          variant: "concept",
          title: "Poin pokok",
          text: "Domain adalah himpunan masukan, kodomain adalah himpunan tujuan, dan range adalah himpunan hasil yang benar-benar tercapai. Range selalu berada di dalam kodomain.",
        },
        {
          kind: "match",
          intro: "Cocokkan istilah dasar pemetaan dengan maknanya.",
          pairs: [
            {
              left: "Domain",
              right: "Himpunan semua masukan yang boleh dimasukkan",
            },
            {
              left: "Kodomain",
              right: "Himpunan tujuan pemetaan",
            },
            {
              left: "Range",
              right: "Himpunan hasil yang benar-benar tercapai",
            },
            {
              left: "Bijektif",
              right: "Fungsi satu-satu dan pada, sehingga memiliki invers",
            },
          ],
        },
      ],
    },
    {
      id: "representasi",
      kind: "representasi",
      title: "Representasi Pemetaan",
      body: "Satu fungsi yang sama dapat kita tampilkan dengan beberapa cara:",
      blocks: [
        {
          kind: "table",
          caption: "Tiga cara menyajikan fungsi $f(x)=2x+1$ dengan domain $\\{1,2,3\\}$",
          headers: [
            "x",
            "$f(x)=2x+1$",
            "Pasangan terurut",
          ],
          rows: [
            [
              "$1$",
              "$3$",
              "$(1,3)$",
            ],
            [
              "$2$",
              "$5$",
              "$(2,5)$",
            ],
            [
              "$3$",
              "$7$",
              "$(3,7)$",
            ],
          ],
        },
        {
          kind: "tabs",
          items: [
            {
              label: "Simbolik",
              body: "Fungsi $f(x)=2x+1$ memetakan $x$ ke $2x+1$; inversnya membalik arah pemetaan itu.",
            },
            {
              label: "Tabel",
              body: "Tabel pasangan terurut $(x, f(x))$ dapat dibaca terbalik menjadi pasangan $(f(x), x)$ untuk inversnya.",
            },
            {
              label: "Grafik",
              body: "Grafik $f^{-1}$ adalah cerminan grafik $f$ terhadap garis $y=x$, karena koordinat tiap titik bertukar.",
            },
          ],
        },
      ],
    },
    {
      id: "bijektif",
      kind: "konsep",
      title: "Fungsi Bijektif: Syarat Fungsi Punya Invers",
      body: `Agar sebuah fungsi dapat dibalik, setiap anggota kodomain harus menjadi hasil dari **tepat satu** anggota domain. Dua syarat yang harus dipenuhi:

**1. Injektif (satu-satu).** Setiap hasil berbeda berasal dari masukan berbeda. Jika $f(x_1)=f(x_2)$ maka haruslah $x_1=x_2$.

**2. Surjektif (pada).** Setiap anggota kodomain tercapai oleh suatu masukan.

Fungsi yang memenuhi keduanya disebut **bijektif**. Hanya fungsi bijektif yang memiliki fungsi invers.

Contohnya, $f(x)=x^2$ pada domain $\\mathbb{R}$ **bukan** injektif karena $f(2)=f(-2)=4$; satu hasil berasal dari dua masukan berbeda. Namun jika domainnya dibatasi menjadi $x \\geq 0$, fungsinya menjadi satu-satu dan memiliki invers.`,
      blocks: [
        {
          kind: "callout",
          variant: "warning",
          title: "Hati-hati",
          text: "Menguji grafik: fungsi satu-satu bila setiap garis horizontal memotong grafik paling banyak satu kali. Grafik parabola $y=x^2$ dipotong dua kali oleh garis horizontal $y=4$.",
        },
        {
          kind: "figure",
          alt: "Parabola y sama dengan x kuadrat dipotong garis putus-putus horizontal y sama dengan 4 di dua titik, yaitu negatif 2 koma 4 dan 2 koma 4, sehingga tidak satu-satu. Cabang kanan x lebih besar atau sama dengan nol digambar lebih tebal dan bersifat satu-satu.",
          caption: "Garis horizontal $y=4$ memotong parabola $y=x^{2}$ di dua titik, $(2,4)$ dan $(-2,4)$, sehingga $x^{2}$ pada seluruh $\\mathbb{R}$ bukan fungsi satu-satu. Dengan membatasi domain pada $x \\geq 0$ (kurva tebal), grafiknya satu-satu dan memiliki invers.",
          svg: '<svg viewBox="0 0 320 220" aria-hidden="true" role="presentation"><defs><marker id="fig-inv-hline" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0,0 L 10,5 L 0,10 z" fill="currentColor"/></marker></defs><line x1="34" y1="170" x2="290" y2="170" stroke="currentColor" stroke-width="1.3" marker-end="url(#fig-inv-hline)"/><line x1="100" y1="205" x2="100" y2="25" stroke="currentColor" stroke-width="1.3" marker-end="url(#fig-inv-hline)"/><line x1="36" y1="66" x2="200" y2="66" stroke="currentColor" stroke-width="1.3" stroke-dasharray="5 4"/><polyline points="48,66 61,111.5 74,144 87,163.5 100,170 113,163.5 126,144 139,111.5 152,66" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3"/><polyline points="100,170 113,163.5 126,144 139,111.5 152,66" fill="none" stroke="currentColor" stroke-width="2.6"/><circle cx="48" cy="66" r="3" fill="currentColor"/><circle cx="152" cy="66" r="3" fill="currentColor"/><text x="196" y="62" font-size="11" fill="currentColor">y = 4</text><text x="286" y="188" font-size="11" fill="currentColor">x</text><text x="106" y="34" font-size="11" fill="currentColor">y</text><text x="150" y="82" font-size="11" fill="currentColor">(2,4)</text><text x="36" y="82" font-size="11" fill="currentColor">(-2,4)</text><text x="116" y="122" font-size="10" fill="currentColor">x ≥ 0</text></svg>',
        },
      ],
    },
    {
      id: "rumus-invers",
      kind: "generalisasi",
      title: "Cara Menentukan Rumus Fungsi Invers",
      body: `Langkah menentukan $f^{-1}(x)$ dari $y=f(x)$:

1. tulis $y = f(x)$;
2. nyatakan $x$ dalam $y$ (jadikan $x$ sebagai subjek rumus);
3. tukar nama $x$ dan $y$;
4. tulis hasilnya sebagai $f^{-1}(x)$.

Fungsi invers memenuhi dua identitas penting:

$$f\\left(f^{-1}(x)\\right) = x \\qquad \\text{dan} \\qquad f^{-1}\\left(f(x)\\right) = x.$$

Kedua identitas ini berguna untuk memeriksa kebenaran jawaban: memasukkan hasil invers ke fungsi asal harus mengembalikan nilai semula.`,
    },
    {
      id: "rumus",
      kind: "rumus",
      title: "Rumus dan Prosedur",
      body: `**Syarat invers ada.** Fungsi $f$ memiliki invers $f^{-1}$ bila $f$ **bijektif**, yaitu injektif (satu-satu) sekaligus surjektif (pada).

**Identitas invers:**
$$f\\left(f^{-1}(x)\\right)=x \\qquad \\text{dan} \\qquad f^{-1}\\left(f(x)\\right)=x.$$

**Rumus praktis.**
- Linear $f(x)=ax+b$: $f^{-1}(x)=\\dfrac{x-b}{a}$.
- Rasional $f(x)=\\dfrac{ax+b}{cx+d}$: $f^{-1}(x)=\\dfrac{-dx+b}{cx-a}$.

**Prosedur.** (1) Tulis $y=f(x)$. (2) Nyatakan $x$ dalam $y$. (3) Tukar nama $x$ dan $y$. (4) Tulis hasilnya sebagai $f^{-1}(x)$ dan periksa dengan $f\\left(f^{-1}(x)\\right)=x$.

**Grafik.** Grafik $f$ dan $f^{-1}$ saling mencerminkan terhadap garis $y=x$.`,
    },
    {
      id: "grafik",
      kind: "representasi",
      title: "Grafik Fungsi dan Inversnya",
      body: `Bacalah titik pada grafik. Jika titik $(a,b)$ terletak pada grafik $f$, maka $f(a)=b$ sehingga $f^{-1}(b)=a$. Artinya titik $(b,a)$ terletak pada grafik $f^{-1}$.

Titik $(a,b)$ dan $(b,a)$ saling bertukar koordinat, sehingga grafik $f$ dan grafik $f^{-1}$ **saling mencerminkan terhadap garis $y = x$**.

Contoh: grafik $f(x)=2x+1$ melalui $(1,3)$. Maka grafik $f^{-1}(x)=\\dfrac{x-1}{2}$ harus melalui titik cerminnya, yaitu $(3,1)$.`,
      blocks: [
        {
          kind: "table",
          caption: "Pencerminan titik terhadap garis $y=x$",
          headers: [
            "Titik pada $f$",
            "Titik pada $f^{-1}$",
          ],
          rows: [
            [
              "$(1,3)$",
              "$(3,1)$",
            ],
            [
              "$(2,5)$",
              "$(5,2)$",
            ],
            [
              "$(0,1)$",
              "$(1,0)$",
            ],
          ],
        },
        {
          kind: "figure",
          alt: "Grafik fungsi f yang naik melalui titik satu koma satu dan grafik inversnya yang juga melalui titik itu, keduanya saling mencerminkan terhadap garis putus-putus y sama dengan x.",
          caption: "Grafik $f(x)=2x-1$ dan inversnya $f^{-1}(x)=\\dfrac{x+1}{2}$ bercermin terhadap garis $y=x$; keduanya berpotongan di $(1,1)$ yang terletak pada $y=x$.",
          svg: '<svg viewBox="0 0 320 240" aria-hidden="true" role="presentation"><defs><marker id="fig-inv-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0,0 L 10,5 L 0,10 z" fill="currentColor"/></marker></defs><line x1="20" y1="185" x2="300" y2="185" stroke="currentColor" stroke-width="1.5" marker-end="url(#fig-inv-arrow)"/><line x1="80" y1="225" x2="80" y2="25" stroke="currentColor" stroke-width="1.5" marker-end="url(#fig-inv-arrow)"/><line x1="80" y1="185" x2="245" y2="20" stroke="currentColor" stroke-width="1.3" stroke-dasharray="5 4"/><line x1="80" y1="215" x2="155" y2="65" stroke="currentColor" stroke-width="2.2"/><line x1="50" y1="185" x2="230" y2="95" stroke="currentColor" stroke-width="2.2"/><circle cx="110" cy="155" r="2.6" fill="currentColor"/><text x="116" y="152" font-size="11" fill="currentColor">(1,1)</text><text x="160" y="80" font-size="12" fill="currentColor">f</text><text x="200" y="128" font-size="12" fill="currentColor">f⁻¹</text><text x="212" y="44" font-size="12" fill="currentColor">y = x</text><text x="66" y="200" font-size="12" fill="currentColor">O</text><text x="304" y="182" font-size="12" fill="currentColor">x</text><text x="64" y="34" font-size="12" fill="currentColor">y</text></svg>',
        },
      ],
    },
    {
      id: "eksplorasi",
      kind: "eksplorasi",
      title: "Eksplorasi Fungsi Invers",
      body: "Gunakan simulator untuk memasukkan fungsi linear dan melihat grafik inversnya. Amati bahwa grafik $f$ dan $f^{-1}$ selalu saling mencerminkan terhadap garis $y=x$. Ubah koefisien dan periksa bagaimana kemiringan serta titik potongnya berubah.",
      blocks: [
        {
          kind: "exploration",
          explorationId: "fungsi-invers-sim",
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
              text: `Tentukan invers dari $f(x)=3x-6$.

*Penyelesaian.* Tulis $y=3x-6$, lalu nyatakan $x$:

$$y = 3x-6 \\Rightarrow 3x = y+6 \\Rightarrow x = \\frac{y+6}{3}.$$

Tukar $x$ dan $y$, sehingga

$$f^{-1}(x) = \\frac{x+6}{3}.$$

*Periksa:* $f(4)=3(4)-6=6$ dan $f^{-1}(6)=\\dfrac{6+6}{3}=4$. Benar.`,
            },
            {
              title: "Contoh 2",
              text: `Tentukan invers dari $f(x)=\\dfrac{2x+1}{x-3}$, $x \\neq 3$.

*Penyelesaian.* Tulis $y=\\dfrac{2x+1}{x-3}$, lalu kalikan silang:

$$y(x-3) = 2x+1 \\Rightarrow xy - 3y = 2x+1.$$

Kumpulkan suku yang memuat $x$:

$$xy - 2x = 1 + 3y \\Rightarrow x(y-2) = 1+3y \\Rightarrow x = \\frac{3y+1}{y-2}.$$

Tukar $x$ dan $y$:

$$f^{-1}(x) = \\frac{3x+1}{x-2}, \\qquad x \\neq 2.$$

*Periksa:* $f(4)=\\dfrac{9}{1}=9$ dan $f^{-1}(9)=\\dfrac{28}{7}=4$. Benar.`,
            },
            {
              title: "Contoh 3",
              text: `Tentukan invers dari $f(x)=x^2$ dengan domain $x \\geq 0$.

*Penyelesaian.* Karena domain dibatasi pada $x \\geq 0$, fungsi satu-satu. Tulis $y=x^2$ dengan $x \\geq 0$, maka $x=\\sqrt{y}$ (akar positif). Jadi

$$f^{-1}(x) = \\sqrt{x}, \\qquad x \\geq 0.$$`,
            },
            {
              title: "Contoh 4",
              text: `Tentukan invers dari $f(x)=x^{3}+1$ untuk $x \\in \\mathbb{R}$.

*Penyelesaian.* Fungsi kubik selalu naik, sehingga satu-satu dan memiliki invers. Tulis $y=x^{3}+1$, maka $x^{3}=y-1$ sehingga $x=\\sqrt[3]{y-1}$. Tukar nama variabel:

$$f^{-1}(x) = \\sqrt[3]{x-1}.$$

*Periksa:* $f(2)=2^{3}+1=9$ dan $f^{-1}(9)=\\sqrt[3]{8}=2$. Benar.`,
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
      body: `Fungsi invers muncul saat kita perlu "membalik" proses. Mengubah Celsius ke Fahrenheit memakai $F=\\dfrac{9}{5}C+32$, sedangkan arah sebaliknya memakai $C=\\dfrac{5}{9}(F-32)$.
Dalam kriptografi sederhana, pesan disandikan dengan suatu fungsi dan diterjemahkan kembali menggunakan fungsi inversnya. Pada ekonomi, fungsi permintaan memetakan harga ke jumlah barang, dan fungsi inversnya memetakan jumlah barang ke harga.
Latihan pemodelan lebih lanjut dapat ditemukan pada topik [Aplikasi](/aplikasi).`,
    },
    {
      id: "kesalahan-umum",
      kind: "kesalahan-umum",
      title: "Kesalahan Umum",
      body: `**1. Menganggap $f^{-1}(x)$ sama dengan $\\dfrac{1}{f(x)}$.** Keduanya sangat berbeda. Untuk $f(x)=2x+3$, $f^{-1}(x)=\\dfrac{x-3}{2}$ bukan $\\dfrac{1}{2x+3}$.
**2. Lupa menukar $x$ dan $y$.** Jika langkah terakhir tidak menukar nama variabel, rumus invers akan salah.
**3. Tidak memeriksa syarat bijektif.** $f(x)=x^2$ pada $\\mathbb{R}$ tidak memiliki invers; perlu pembatasan domain seperti $x \\geq 0$.
**4. Mengabaikan domain hasil akhir.** Pada $f(x)=\\dfrac{2x+1}{x-3}$, nilai $x=3$ dikecualikan; pada inversnya, nilai $x=2$ juga harus dikecualikan.

**5. Menuliskan domain $f^{-1}$ tanpa melihat range $f$.** Domain $f^{-1}$ sama dengan range $f$. Untuk $f(x)=x^{2}$ dengan $x \\geq 0$ diperoleh range $y \\geq 0$, sehingga $f^{-1}(x)=\\sqrt{x}$ hanya terdefinisi untuk $x \\geq 0$. Melupakan syarat ini membuat rumus invers tidak lengkap.`,
    },
    {
      id: "tantangan",
      kind: "tantangan",
      title: "Tantangan",
      body: `**Soal.** Tentukan rumus invers dari $f(x)=x^{2}-4x+7$ dengan domain $x \\ge 2$. Jelaskan mengapa pembatasan domain itu diperlukan.`,
      blocks: [
        {
          kind: "step-reveal",
          intro: "Kita lengkapi kuadrat, lalu balik arah pemetaannya.",
          steps: [
            {
              title: "Langkah 1",
              text: "Tanpa pembatasan, $f(x)=x^2-4x+7$ tidak satu-satu karena satu nilai $y$ dapat berasal dari dua nilai $x$. Pembatasan $x \\ge 2$ membuatnya satu-satu.",
            },
            {
              title: "Langkah 2",
              text: "Lengkapi kuadrat: $f(x)=x^2-4x+7=(x-2)^2+3$.",
            },
            {
              title: "Langkah 3",
              text: "Tulis $y=(x-2)^2+3$, sehingga $(x-2)^2=y-3$.",
            },
            {
              title: "Langkah 4",
              text: "Karena $x \\ge 2$, maka $x-2 \\ge 0$, sehingga $x-2=\\sqrt{y-3}$ dan $x=2+\\sqrt{y-3}$.",
            },
            {
              title: "Langkah 5",
              text: "Tukar nama variabel: $f^{-1}(x)=2+\\sqrt{x-3}$ dengan domain $x \\ge 3$. Periksa: $f(5)=25-20+7=12$ dan $f^{-1}(12)=2+\\sqrt{9}=5$.",
            },
          ],
        },
      ],
    },
    {
      id: "sejarah",
      kind: "sejarah",
      title: "Jejak Sejarah",
      body: `Gagasan fungsi baru matang pada abad ke-17 dan ke-18. Gottfried Leibniz memakai kata *function* pada akhir abad ke-17 untuk menyatakan besaran yang bergantung pada variabel, dan Leonhard Euler pada abad ke-18 memberi notasi $f(x)$ yang kita pakai sekarang. Gagasan membalik pemetaan juga tumbuh dari kebutuhan operasi kebalikan, seperti dari kuadrat ke akar atau dari eksponen ke logaritma. Simbol $f^{-1}$ untuk fungsi invers dibakukan seiring berkembangnya notasi himpunan dan pemetaan pada abad ke-19 dan ke-20. Sejak itu fungsi invers menjadi alat baku untuk "membaca kembali" nilai semula dari suatu hasil.`,
    },
    {
      id: "refleksi",
      kind: "refleksi",
      title: "Refleksi",
      body: "Tinjau kembali bagaimana proses yang dapat dibalik mempertajam pemahamanmu tentang pemetaan.",
      blocks: [
        {
          kind: "reflection",
          prompts: [
            "Bagaimana kamu menjelaskan kepada teman mengapa $f^{-1}(x) \\neq \\dfrac{1}{f(x)}$?",
            "Kapan sebuah fungsi **tidak** memiliki invers, dan bagaimana cara memperbaikinya?",
            "Langkah mana yang paling sering membuatmu keliru ketika menurunkan rumus invers, dan bagaimana kamu akan menghindarinya?",
          ],
          confidenceLabel: "Seberapa yakin kamu membedakan fungsi yang punya invers dari yang tidak?",
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
              "Syarat punya invers",
              "fungsi bersifat bijektif (injektif dan surjektif)",
            ],
            [
              "Langkah mencari invers",
              "$y=f(x) \\to$ nyatakan $x$ $\\to$ tukar $x$ dan $y$",
            ],
            [
              "Identitas invers",
              "$f(f^{-1}(x))=x$ dan $f^{-1}(f(x))=x$",
            ],
            [
              "Invers linear $ax+b$",
              "$f^{-1}(x)=\\dfrac{x-b}{a}$",
            ],
            [
              "Invers rasional $\\dfrac{ax+b}{cx+d}$",
              "$f^{-1}(x)=\\dfrac{-dx+b}{cx-a}$",
            ],
            [
              "Hubungan grafik",
              "grafik $f$ dan $f^{-1}$ bercermin terhadap $y=x$",
            ],
          ],
        },
      ],
    },
    {
      id: "evaluasi",
      kind: "evaluasi",
      title: "Evaluasi",
      body: `**Uji diri.** (1) Mengapa hanya fungsi satu-satu yang memiliki invers? (2) Mengapa grafik $f$ dan $f^{-1}$ saling mencerminkan terhadap garis $y=x$? Setelah menjawab, kaitkan jawabanmu dengan soal pada [Latihan & Asesmen](/latihan) topik **Fungsi Invers**.`,
    },
  ],
};
