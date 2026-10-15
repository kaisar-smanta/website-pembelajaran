import type { Topic } from '@/types/content';

export const fungsiLogaritma: Topic = {
  id: 'fungsi-logaritma',
  slug: 'fungsi-logaritma',
  title: 'Fungsi Logaritma',
  subtitle: 'Invers eksponen, grafik, sifat, dan skala logaritmik',
  grade: 'XI',
  phase: 'F',
  element: 'aljabar-fungsi',
  subject: 'matematika-lanjut',
  status: 'lengkap',
  estimatedMinutes: 90,
  summary:
    'Fungsi logaritma adalah invers fungsi eksponen: $f(x)=\\log_{b}x$ menjawab basis $b$ harus dipangkatkan berapa agar menghasilkan $x$. Topik ini membahas definisi, domain dan asimtot grafiknya, sifat-sifat logaritma termasuk perubahan basis, serta penerapannya pada skala logaritmik.',
  description:
    'Setelah menguasai eksponen dan fungsi eksponensial, kita membalik cara pandangnya: alih-alih mencari hasil pemangkatan, kita mencari pangkatnya. Di sinilah fungsi logaritma berperan, dengan domain $x>0$ dan asimtot tegak $x=0$. Topik ini membangun grafik $f(x)=\\log_{b}x$ sebagai cerminan grafik eksponen terhadap garis $y=x$, menurunkan sifat perkalian, pembagian, dan pangkat, serta memperkenalkan basis $10$ dan bilangan $e$. Kemampuan ini kemudian dipakai untuk membaca besaran berskala logaritmik dan menyelesaikan persamaan logaritma sederhana.',
  keywords: [
    'logaritma',
    'fungsi logaritma',
    'basis',
    'numerus',
    'asimtot',
    'invers eksponen',
    'grafik logaritma',
    'skala logaritmik',
  ],
  prerequisites: ['eksponen', 'fungsi-eksponensial'],
  relatedTopics: ['persamaan-eksponen-logaritma', 'fungsi-rasional-akar', 'pemodelan-fungsi'],
  applications: ['mtl-skala-logaritma'],
  prerequisiteKnowledge: [
    'Sifat-sifat eksponen (ringkasannya ada pada topik Eksponen dan Bentuk Akar)',
    'Fungsi eksponensial $g(x)=b^{x}$ beserta grafik dan asimtot datarnya',
    'Pertidaksamaan linear sederhana dan penulisan himpunan penyelesaian',
  ],
  objectives: [
    { text: 'Peserta didik dapat menjelaskan fungsi logaritma sebagai invers fungsi eksponen.' },
    { text: 'Peserta didik dapat menentukan domain dan asimtot tegak grafik fungsi logaritma.' },
    { text: 'Peserta didik dapat menggambar dan menafsirkan grafik $f(x)=\\log_{b}x$ serta transformasinya.' },
    { text: 'Peserta didik dapat menerapkan sifat perkalian, pembagian, pangkat, dan perubahan basis.' },
    { text: 'Peserta didik dapat menggunakan logaritma basis $10$ dan bilangan $e$ dalam perhitungan.' },
    { text: 'Peserta didik dapat memodelkan besaran berskala logaritmik dan menyelesaikan persamaan logaritma sederhana.' },
  ],
  sections: [
    {
      id: "tujuan",
      kind: "tujuan",
      title: "Tujuan Pembelajaran",
      body: "Setelah mempelajari topik ini, peserta didik dapat menjelaskan fungsi logaritma sebagai invers fungsi eksponen, menentukan domain dan asimtot tegak grafiknya, menggambar serta mentransformasi grafik $f(x)=\\log_{b}x$, menerapkan sifat-sifat logaritma termasuk perubahan basis, menggunakan basis $10$ dan bilangan $e$, serta memodelkan besaran berskala logaritmik dan menyelesaikan persamaan logaritma sederhana.",
    },
    {
      id: "pemantik",
      kind: "pemantik",
      title: "Pertanyaan Pemantik",
      body: `Fungsi eksponen $g(x)=2^{x}$ memasangkan setiap bilangan real $x$ dengan bilangan positif. Ketika sebuah fungsi satu-satu dibalik, peran masukan dan hasil bertukar: pertanyaannya berubah dari "hasilnya berapa" menjadi "basis dipangkatkan berapa".

Perhatikan titik-titik pada $g(x)=2^{x}$, yaitu $(0,1)$, $(1,2)$, $(2,4)$, dan $(3,8)$. Setelah peran koordinatnya ditukar, kita memperoleh $(1,0)$, $(2,1)$, $(4,2)$, dan $(8,3)$. Pola pasangan yang bertukar inilah yang kelak kita sebut logaritma.`,
      blocks: [
        {
          kind: "prediction",
          prompt: "Fungsi $g(x)=2^{x}$ memiliki invers. Berdasarkan pasangan titik yang peran koordinatnya ditukar, berapa nilai $\\log_{2}8$, dan untuk nilai $x$ seperti apa invers ini terdefinisi?",
          options: [
            "$\\log_{2}8=3$ dan terdefinisi untuk $x>0$",
            "$\\log_{2}8=3$ dan terdefinisi untuk semua bilangan real $x$",
            "$\\log_{2}8=8$ dan terdefinisi untuk $x>0$",
            "$\\log_{2}8=\\frac{1}{3}$ dan terdefinisi untuk $x>0$",
          ],
          reveal: "Karena $2^{3}=8$, maka $\\log_{2}8=3$, sesuai pilihan pertama. Invers hanya terdefinisi untuk $x>0$ sebab hasil $2^{x}$ selalu positif, sehingga tidak pernah bernilai negatif maupun nol. Pilihan kedua keliru karena mengira hasil eksponen dapat bernilai negatif, pilihan ketiga tertukar antara hasil dan pangkat, sedangkan pilihan keempat justru memakai kebalikan pangkatnya.",
          saveLabel: "Simpan dugaan & lihat jawabannya",
        },
      ],
    },
    {
      id: "prasyarat",
      kind: "prasyarat",
      title: "Prasyarat",
      body: `Fungsi logaritma adalah cerminan fungsi eksponensial, jadi pastikan kamu sudah bisa:
- menggunakan sifat-sifat eksponen (ringkasannya ada pada topik [Eksponen dan Bentuk Akar](/matematika/kelas/X/bilangan/eksponen));
- membaca grafik fungsi eksponensial $g(x)=b^{x}$ beserta asimtot datarnya;
- menuliskan bilangan sebagai pangkat dengan basis tertentu, seperti $32=2^{5}$ dan $81=3^{4}$;
- menyelesaikan pertidaksamaan linear sederhana seperti $x-3>0$.`,
    },
    {
      id: "konteks",
      kind: "konteks",
      title: "Situasi dan Konteks",
      body: `Logaritma muncul setiap kali kita menanyakan "pangkat berapa" pada pertumbuhan atau peluruhan. Berapa lama populasi berlipat dua, kapan konsentrasi obat turun di bawah ambang, atau berapa pangkat yang dibutuhkan agar $2^{t}$ mencapai $100$. Semuanya dijawab fungsi logaritma.

Fungsi logaritma juga menjadi bahasa alami bagi besaran yang rentangnya sangat lebar. Tingkat keasaman larutan (pH), taraf intensitas bunyi (desibel), dan kekuatan gempa (skala Richter) semuanya diukur pada skala logaritmik. Menambahkan satu satuan pada skala itu berarti mengalikan besaran fisiknya dengan sepuluh, seratus, atau seribu kali, yaitu sesuatu yang jauh lebih mudah dibaca daripada deretan angka nol.`,
    },
    {
      id: "konsep",
      kind: "konsep",
      title: "Konsep Inti: Definisi dan Grafik Fungsi Logaritma",
      body: `Logaritma dibangun dari hubungan yang sudah kita kenal pada eksponen. Untuk basis $b>0$ dengan $b\\neq1$ dan bilangan positif $x$, berlaku

$$b^{y}=x \\iff \\log_{b}x=y.$$

Bentuk $\\log_{b}x$ menjawab pertanyaan "basis $b$ harus dipangkatkan berapa agar menghasilkan $x$". Misalnya, $2^{5}=32$ sehingga $\\log_{2}32=5$, dan $10^{-2}=0{,}01$ sehingga $\\log_{10}0{,}01=-2$.

Fungsi logaritma $f(x)=\\log_{b}x$ adalah **invers** dari fungsi eksponen $g(x)=b^{x}$. Karena $g$ selalu bernilai positif, maka $f$ hanya terdefinisi untuk $x>0$; himpunan hasilnya mencakup seluruh bilangan real. Grafiknya melalui $(1,0)$ karena $b^{0}=1$, dan melalui $(b,1)$ karena $b^{1}=b$. Sumbu-$y$, yaitu garis $x=0$, menjadi **asimtot tegak**: kurva mendekatinya namun tidak pernah menyentuhnya. Bila $b>1$ fungsi naik, sedangkan bila $0<b<1$ fungsi turun.`,
      blocks: [
        {
          kind: "callout",
          variant: "concept",
          title: "Numerus wajib positif",
          text: "Nilai $\\log_{b}x$ hanya terdefinisi bila $x>0$. Inilah jejak sifat eksponen: hasil $b^{x}$ tidak pernah negatif. Jadi menyelesaikan soal logaritma selalu diawali dengan menuliskan syarat numerus.",
        },
        {
          kind: "match",
          intro: "Cocokkan istilah pada fungsi logaritma dengan maknanya.",
          pairs: [
            {
              left: "Basis",
              right: "Bilangan pokok $b>0$, $b\\neq1$ pada $\\log_{b}x$",
            },
            {
              left: "Numerus",
              right: "Bilangan $x>0$ yang dicari logaritmanya",
            },
            {
              left: "Asimtot tegak",
              right: "Garis $x=0$ yang didekati grafik namun tidak disentuh",
            },
            {
              left: "Invers eksponen",
              right: "$f(x)=\\log_{b}x$ membalik $g(x)=b^{x}$",
            },
            {
              left: "Basis $e$",
              right: "Logaritma natural $\\ln x$ dengan $e\\approx2{,}71828$",
            },
          ],
        },
        {
          kind: "flip-cards",
          intro: "Pelajari istilah kunci fungsi logaritma melalui kartu berikut.",
          cards: [
            {
              front: "Definisi logaritma",
              back: "$\\log_{b}x=y$ berarti $b^{y}=x$, dengan $b>0$, $b\\neq1$, dan $x>0$.",
            },
            {
              front: "Domain",
              back: "Himpunan $\\{x \\mid x>0\\}$; logaritma tidak terdefinisi untuk nol atau bilangan negatif.",
            },
            {
              front: "Rentang",
              back: "Seluruh bilangan real, karena eksponen dapat bernilai berapa pun.",
            },
            {
              front: "Titik tetap grafik",
              back: "Grafik selalu melalui $(1,0)$ dan $(b,1)$.",
            },
            {
              front: "Kemonotonan",
              back: "Naik bila $b>1$, turun bila $0<b<1$.",
            },
          ],
        },
      ],
    },
    {
      id: "representasi",
      kind: "representasi",
      title: "Representasi",
      body: "Satu hubungan yang sama dapat dituliskan sebagai bentuk eksponen maupun bentuk logaritma. Keduanya setara; yang berubah hanya cara membacanya.",
      blocks: [
        {
          kind: "table",
          caption: "Dua bentuk untuk hubungan yang sama",
          headers: [
            "Bentuk eksponen",
            "Bentuk logaritma",
            "Makna",
          ],
          rows: [
            [
              "$2^{3}=8$",
              "$\\log_{2}8=3$",
              "basis $2$ dipangkatkan $3$ menghasilkan $8$",
            ],
            [
              "$5^{0}=1$",
              "$\\log_{5}1=0$",
              "bilangan apa pun dipangkatkan $0$ menghasilkan $1$",
            ],
            [
              "$10^{-2}=0{,}01$",
              "$\\log_{10}0{,}01=-2$",
              "basis $10$ dipangkatkan $-2$ menghasilkan $0{,}01$",
            ],
            [
              "$b^{y}=x$",
              "$\\log_{b}x=y$",
              "definisi umum untuk $b>0$, $b\\neq1$, dan $x>0$",
            ],
          ],
        },
        {
          kind: "tabs",
          items: [
            {
              label: "Bentuk umum",
              body: "$f(x)=\\log_{b}x$ memiliki domain $x>0$ dan asimtot tegak $x=0$.",
            },
            {
              label: "Dasar 10",
              body: "Logaritma basis $10$ lazim ditulis $\\log x$ tanpa indeks dan banyak dipakai pada skala pH serta desibel.",
            },
            {
              label: "Basis e",
              body: "Logaritma natural ditulis $\\ln x$ dengan basis $e\\approx2{,}71828$, sering muncul pada pertumbuhan kontinu.",
            },
          ],
        },
        {
          kind: "figure",
          alt: "Grafik fungsi logaritma basis dua yang naik dan mendekati sumbu y sebagai asimtot tegak, memotong titik satu nol, dua satu, dan empat dua.",
          caption: "Grafik $f(x)=\\log_{2}x$ terdefinisi untuk $x>0$, memotong sumbu-$x$ di $(1,0)$, dan mendekati asimtot tegak $x=0$.",
          svg: '<svg viewBox="0 0 320 240" aria-hidden="true" role="presentation"><defs><marker id="flg-log-axis" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0,0 L 10,5 L 0,10 z" fill="currentColor"/></marker></defs><line x1="40" y1="150" x2="300" y2="150" stroke="currentColor" stroke-width="1.2" marker-end="url(#flg-log-axis)"/><line x1="110" y1="215" x2="110" y2="30" stroke="currentColor" stroke-width="1.2" marker-end="url(#flg-log-axis)"/><polyline points="118,210 125,180 140,150 155,133 170,120 200,103 230,90 290,73" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="140" cy="150" r="3" fill="currentColor"/><circle cx="170" cy="120" r="3" fill="currentColor"/><circle cx="230" cy="90" r="3" fill="currentColor"/><text x="292" y="166" font-size="12" fill="currentColor">x</text><text x="116" y="40" font-size="12" fill="currentColor">y</text><text x="98" y="164" font-size="11" fill="currentColor">O</text><text x="130" y="166" font-size="11" fill="currentColor">1</text><text x="164" y="114" font-size="11" fill="currentColor">2</text><text x="224" y="84" font-size="11" fill="currentColor">4</text><text x="42" y="45" font-size="12" fill="currentColor">y = log₂ x</text><text x="56" y="205" font-size="11" fill="currentColor">asimtot x = 0</text></svg>',
        },
        {
          kind: "figure",
          alt: "Grafik y sama dengan 2 pangkat x yang naik tajam dan grafik logaritma basis dua sebagai pencerminannya terhadap garis y sama dengan x, dengan titik satu koma nol dan nol koma satu yang bertukar peran.",
          caption: "Grafik $y=2^{x}$ dan inversnya $y=\\log_{2}x$ saling mencerminkan terhadap garis $y=x$: titik $(0,1)$ pada eksponen bertukar menjadi $(1,0)$ pada logaritma.",
          svg: '<svg viewBox="0 0 320 240" aria-hidden="true" role="presentation"><line x1="80" y1="175" x2="305" y2="175" stroke="currentColor" stroke-width="1.2"/><line x1="80" y1="175" x2="80" y2="15" stroke="currentColor" stroke-width="1.2"/><line x1="80" y1="175" x2="196" y2="59" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4"/><line x1="80" y1="151" x2="104" y2="175" stroke="currentColor" stroke-width="0.9" stroke-dasharray="3 3"/><line x1="104" y1="127" x2="128" y2="151" stroke="currentColor" stroke-width="0.9" stroke-dasharray="3 3"/><polyline points="8,172 32,169 56,163 80,151 104,127 128,79 140,39" fill="none" stroke="currentColor" stroke-width="2.2"/><polyline points="86,223 92,199 104,175 128,151 176,127 216,115 272,103 316,96" fill="none" stroke="currentColor" stroke-width="2.2" stroke-dasharray="7 3"/><circle cx="80" cy="151" r="2.6" fill="currentColor"/><circle cx="104" cy="127" r="2.6" fill="currentColor"/><circle cx="104" cy="175" r="2.6" fill="currentColor"/><circle cx="128" cy="151" r="2.6" fill="currentColor"/><text x="96" y="44" font-size="12" fill="currentColor">y = 2^x</text><text x="196" y="120" font-size="12" fill="currentColor">y = log₂ x</text><text x="150" y="92" font-size="12" fill="currentColor">y = x</text><text x="298" y="168" font-size="11" fill="currentColor">x</text><text x="86" y="24" font-size="11" fill="currentColor">y</text><text x="58" y="188" font-size="11" fill="currentColor">O</text></svg>',
        },
      ],
    },
    {
      id: "eksplorasi",
      kind: "eksplorasi",
      title: "Eksplorasi Grafik Fungsi Logaritma",
      body: `Sebelum menghafal bentuk grafik, amati langsung bagaimana nilai basis $b$ mengubah kemiringan dan arah kurva $f(x)=\\log_{b}x$. Perhatikan pula mengapa kurva tidak pernah menyentuh sumbu-$y$, dan bandingkan grafiknya dengan cerminan kurva eksponen terhadap garis $y=x$.`,
      blocks: [
        {
          kind: "exploration",
          explorationId: "logaritma-fungsi",
        },
        {
          kind: "callout",
          variant: "info",
          title: "Yang perlu diperhatikan",
          text: "Saat basis $b>1$ diperbesar, kurva tumbuh makin lambat. Saat $0<b<1$, kurva turun. Pada semua kasus, grafik tetap melalui titik $(1,0)$ dan sumbu-$y$ tetap menjadi asimtot tegak.",
        },
      ],
    },
    {
      id: "generalisasi",
      kind: "generalisasi",
      title: "Generalisasi: Dari Definisi ke Sifat-Sifat Logaritma",
      body: `Seluruh sifat logaritma mengalir dari satu kesetaraan dasar, yaitu $b^{y}=x \\iff \\log_{b}x=y$. Karena logaritma adalah invers eksponen, operasi pada eksponen berpadanan dengan operasi pada logaritma: perkalian pangkat berpadanan dengan penjumlahan logaritma, sedangkan pembagian pangkat berpadanan dengan pengurangan.

$$\\log_{b}(mn)=\\log_{b}m+\\log_{b}n, \\qquad \\log_{b}\\!\\left(\\frac{m}{n}\\right)=\\log_{b}m-\\log_{b}n, \\qquad \\log_{b}(m^{n})=n\\,\\log_{b}m.$$

Dari sifat pangkat lahir **perubahan basis**. Menuliskan $\\log_{b}x$ dengan basis baru $a$ tidak mengubah nilainya, hanya mengalikannya dengan faktor tetap. Sifat ini memungkinkan kita menghitung logaritma basis apa pun memakai kalkulator yang hanya menyediakan basis $10$ atau $e$.

$$\\log_{b}x=\\frac{\\log_{a}x}{\\log_{a}b}=\\frac{\\ln x}{\\ln b}.$$

Kerangka yang sama juga menjelaskan mengapa logaritma mengubah rentang lebar menjadi ringkas: mengalikan numerus dengan sepuluh hanya menambah konstanta tetap pada nilai logaritmanya.`,
    },
    {
      id: "rumus",
      kind: "rumus",
      title: "Rumus dan Prosedur",
      body: `Untuk $b>0$, $b\\neq1$, $a>0$, $a\\neq1$, dan numerus positif.

**Definisi dan hubungan invers.**
$$b^{y}=x \\iff \\log_{b}x=y, \\qquad b^{\\log_{b}x}=x, \\qquad \\log_{b}b^{x}=x.$$

**Nilai dasar.**
$$\\log_{b}1=0, \\qquad \\log_{b}b=1.$$

**Sifat operasi.**
$$\\log_{b}(mn)=\\log_{b}m+\\log_{b}n, \\qquad \\log_{b}\\!\\left(\\frac{m}{n}\\right)=\\log_{b}m-\\log_{b}n, \\qquad \\log_{b}(m^{n})=n\\,\\log_{b}m.$$

**Perubahan basis.**
$$\\log_{b}x=\\frac{\\log_{a}x}{\\log_{a}b}=\\frac{\\ln x}{\\ln b}=\\frac{\\log x}{\\log b}.$$

**Grafik $f(x)=\\log_{b}x$.** Domain $x>0$, asimtot tegak $x=0$, melalui $(1,0)$ dan $(b,1)$. Untuk transformasi $f(x)=a\\log_{b}(x-h)+k$, asimtot tegaknya bergeser menjadi $x=h$.

**Prosedur.** (1) Tulis syarat numerus positif; (2) ubah ke bentuk eksponen atau gunakan sifat logaritma; (3) selesaikan persamaan yang muncul; (4) periksa kembali setiap solusi terhadap syarat numerus.`,
    },
    {
      id: "contoh",
      kind: "contoh",
      title: "Contoh Terbimbing",
      body: "Buka setiap contoh untuk mengikuti penyelesaian lengkapnya, mulai dari menghitung nilai, menyederhanakan dengan sifat, hingga menyelesaikan persamaan sederhana.",
      blocks: [
        {
          kind: "step-reveal",
          intro: "Ikuti langkah demi langkah.",
          steps: [
            {
              title: "Contoh 1: menghitung nilai logaritma",
              text: `Hitunglah $\\log_{4}64$ dan $\\log_{2}\\left(\\frac{1}{8}\\right)$.

*Penyelesaian.* Karena $4^{3}=64$, maka $\\log_{4}64=3$. Untuk bentuk kedua, tulis $\\frac{1}{8}=2^{-3}$, sehingga $\\log_{2}\\left(\\frac{1}{8}\\right)=\\log_{2}2^{-3}=-3$.`,
            },
            {
              title: "Contoh 2: sifat pengurangan",
              text: `Sederhanakan $\\log_{3}54-\\log_{3}2$.

*Penyelesaian.* Gunakan sifat pembagian:
$$\\log_{3}54-\\log_{3}2=\\log_{3}\\!\\left(\\frac{54}{2}\\right)=\\log_{3}27=3,$$
karena $3^{3}=27$.`,
            },
            {
              title: "Contoh 3: perubahan basis",
              text: `Hitunglah $\\log_{8}32$ memakai basis $2$.

*Penyelesaian.* Dengan perubahan basis,
$$\\log_{8}32=\\frac{\\log_{2}32}{\\log_{2}8}=\\frac{5}{3},$$
karena $2^{5}=32$ dan $2^{3}=8$. Periksa: $8^{5/3}=(2^{3})^{5/3}=2^{5}=32$ benar.`,
            },
            {
              title: "Contoh 4: domain dan asimtot",
              text: `Tentukan domain dan asimtot tegak grafik $f(x)=\\log_{3}(x-2)$.

*Penyelesaian.* Numerus harus positif: $x-2>0$, sehingga $x>2$. Jadi domainnya $\\{x \\mid x>2\\}$ dan asimtot tegaknya adalah garis $x=2$.`,
            },
            {
              title: "Contoh 5: menafsirkan skala logaritmik",
              text: `Konsentrasi ion hidrogen sebuah larutan adalah $[\\text{H}^{+}]=10^{-4}$ mol/L. Tentukan pH-nya, lalu jelaskan arti penurunan pH sebesar satu satuan.

*Penyelesaian.* Gunakan definisi $\\text{pH}=-\\log_{10}[\\text{H}^{+}]$:
$$\\text{pH} = -\\log_{10}10^{-4} = -(-4) = 4.$$
Karena skala pH logaritmik, turun satu satuan berarti $[\\text{H}^{+}]$ naik sepuluh kali. Larutan ber-pH $3$ sepuluh kali lebih asam daripada larutan ber-pH $4$.

*Verifikasi.* Substitusikan balik: $[\\text{H}^{+}]=10^{-\\text{pH}}=10^{-4}$, sesuai data awal. Cocok.`,
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
      body: `Banyak besaran alam memiliki rentang yang sangat lebar sehingga lebih ringkas dinyatakan pada skala logaritmik.

**Tingkat keasaman.** Keasaman larutan diukur dengan $\\text{pH}=-\\log_{10}[\\text{H}^{+}]$, dengan $[\\text{H}^{+}]$ menyatakan konsentrasi ion hidrogen. Larutan dengan $[\\text{H}^{+}]=10^{-4}$ memiliki pH $4$, sedangkan yang sepuluh kali lebih asam, $[\\text{H}^{+}]=10^{-3}$, memiliki pH $3$.

**Taraf intensitas bunyi.** Taraf intensitas didefinisikan $L=10\\log_{10}\\!\\left(\\dfrac{I}{I_{0}}\\right)$ desibel, dengan $I_{0}=10^{-12}\\ \\text{W/m}^{2}$. Karena $\\log_{10}2\\approx0{,}30$, menggandakan intensitas fisik hanya menambah sekitar $3$ dB.

**Kekuatan gempa.** Skala Richter menuliskan magnitudo sebagai $M=\\log_{10}\\!\\left(\\dfrac{A}{A_{0}}\\right)$, sehingga kenaikan satu satuan magnitudo berarti amplitudo naik sepuluh kali.

Untuk pembahasan lebih lengkap, lihat studi kasus [Skala Desibel dan pH](/aplikasi/mtl-skala-logaritma).`,
    },
    {
      id: "kesalahan-umum",
      kind: "kesalahan-umum",
      title: "Kesalahan Umum",
      body: `**1. Mengira logaritma menjumlahkan numerus.** $\\log_{b}m+\\log_{b}n=\\log_{b}(mn)$, bukan $\\log_{b}(m+n)$. Logaritma mengubah perkalian menjadi penjumlahan, bukan penjumlahan menjadi penjumlahan.

**2. Lupa syarat numerus positif.** Kandidat solusi persamaan logaritma belum tentu sah. Setiap nilai yang membuat numerus nol atau negatif harus ditolak.

**3. Menukar sifat pangkat dengan pemangkatan.** $\\log_{b}(m^{n})=n\\log_{b}m$, bukan $(\\log_{b}m)^{n}$. Eksponen turun ke depan sebagai faktor, bukan memangkatkan nilai logaritmanya.

**4. Salah membaca asimtot pada transformasi.** Pada $f(x)=\\log_{b}(x-h)+k$, asimtot tegaknya $x=h$, bukan $x=0$. Pergeseran horizontal memindahkan asimtot.`,
      blocks: [
        {
          kind: "spot-mistake",
          intro: "Perhatikan penentuan domain $f(x)=\\log_{2}(6-2x)$. Ada satu langkah yang keliru. Klik langkah itu.",
          steps: [
            "Syarat numerus positif: $6-2x>0$.",
            "Kurangi $6$ pada kedua ruas: $-2x>-6$.",
            "Bagi kedua ruas dengan $-2$: $x>3$.",
            "Jadi domainnya adalah $\\{x \\mid x>3\\}$.",
          ],
          wrongIndex: 2,
          explanation: "Langkah ketiga keliru. Membagi pertidaksamaan dengan bilangan negatif membalik arah tanda, sehingga $-2x>-6$ menghasilkan $x<3$, bukan $x>3$. Jadi domain yang benar adalah $\\{x \\mid x<3\\}$.",
        },
      ],
    },
    {
      id: "tantangan",
      kind: "tantangan",
      title: "Tantangan",
      body: `**Soal.** Tentukan semua nilai $x$ yang memenuhi $\\log_{2}x+\\log_{4}x=3$, lalu periksa jawabannya.

Soal ini menuntutmu menyadari bahwa kedua logaritma berbeda basis, sehingga tidak dapat langsung disatukan sebelum diseragamkan.`,
      blocks: [
        {
          kind: "callout",
          variant: "tip",
          title: "Petunjuk",
          text: "Ubah $\\log_{4}x$ ke basis $2$ memakai perubahan basis. Setelah basisnya sama, gabungkan suku-sukunya.",
        },
        {
          kind: "step-reveal",
          intro: "Ikuti langkah pembahasan berikut satu per satu.",
          steps: [
            {
              title: "Menyamakan basis",
              text: `Dengan perubahan basis, $\\log_{4}x=\\dfrac{\\log_{2}x}{\\log_{2}4}=\\dfrac{\\log_{2}x}{2}=\\dfrac{1}{2}\\log_{2}x$.`,
            },
            {
              title: "Menulis syarat numerus",
              text: "Numerus harus positif, jadi $x>0$. Syarat ini akan dipakai untuk menyaring solusi.",
            },
            {
              title: "Menggabungkan suku",
              text: `Substitusikan: $\\log_{2}x+\\dfrac{1}{2}\\log_{2}x=\\dfrac{3}{2}\\log_{2}x=3$.`,
            },
            {
              title: "Menyelesaikan persamaan",
              text: `Diperoleh $\\log_{2}x=2$, sehingga $x=2^{2}=4$.`,
            },
            {
              title: "Memeriksa jawaban",
              text: `Substitusi $x=4$: $\\log_{2}4+\\log_{4}4=2+1=3$ benar, dan $x=4>0$ memenuhi syarat. Jadi solusinya $x=4$.`,
            },
          ],
        },
      ],
    },
    {
      id: "sejarah",
      kind: "sejarah",
      title: "Jejak Sejarah",
      body: `Logaritma lahir dari kebutuhan berhitung yang sangat praktis. Pada awal abad ke-17, para astronom harus mengalikan bilangan-bilangan besar yang panjang. John Napier, dalam *Mirifici Logarithmorum Canonis Descriptio* (1614), memperkenalkan gagasan yang mengubah perkalian menjadi penjumlahan. Henry Briggs menyusun tabel logaritma basis 10 pada 1617 sehingga metode ini cepat menyebar. Kata *logarithm* berasal dari bahasa Yunani *logos* (perbandingan) dan *arithmos* (bilangan).

Pada mulanya logaritma dipandang sebagai alat hitung, bukan sebagai fungsi. Leonhard Euler dalam *Introductio in analysin infinitorum* (1748) meletakkannya pada dasar modern: ia memperkenalkan bilangan $e\\approx2{,}71828$, menuliskan fungsi eksponen $e^{x}$, dan menegaskan bahwa logaritma adalah **operasi invers** dari eksponen. Sejak itu $f(x)=\\log_{b}x$ dipelajari sebagai fungsi dengan domain dan grafik tersendiri, tepat seperti yang kita pelajari pada topik ini.`,
      blocks: [
        {
          kind: "table",
          caption: "Tokoh kunci dalam perkembangan logaritma",
          headers: [
            "Tokoh",
            "Sumbangan",
          ],
          rows: [
            [
              "John Napier (1614)",
              "Memperkenalkan logaritma sebagai alat hitung.",
            ],
            [
              "Henry Briggs (1617)",
              "Menyusun tabel logaritma basis $10$.",
            ],
            [
              "Leonhard Euler (1748)",
              "Menegaskan logaritma sebagai invers eksponen dan memperkenalkan bilangan $e$.",
            ],
          ],
        },
      ],
    },
    {
      id: "refleksi",
      kind: "refleksi",
      title: "Refleksi",
      body: "Fungsi logaritma membalik cara kita memandang eksponen. Coba jelaskan dengan kata-katamu sendiri mengapa logaritma disebut invers eksponen, dan bagaimana gagasan itu menentukan domain serta asimtot grafiknya.",
      blocks: [
        {
          kind: "reflection",
          prompts: [
            "Mengapa grafik $f(x)=\\log_{b}x$ tidak pernah menyentuh sumbu-$y$, sedangkan grafik $g(x)=b^{x}$ tidak pernah menyentuh sumbu-$x$?",
            "Bagaimana kamu menjelaskan kepada teman bahwa menambah satu satuan pada skala logaritma berarti mengalikan besaran aslinya dengan sepuluh?",
            "Kapan kamu memerlukan perubahan basis, dan mengapa sifat itu berguna saat memakai kalkulator?",
          ],
          confidenceLabel: "Seberapa yakin kamu membaca grafik dan menerapkan sifat fungsi logaritma?",
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
            "Aspek",
            "Penjelasan",
          ],
          rows: [
            [
              "Definisi",
              "$b^{y}=x \\iff \\log_{b}x=y$ untuk $b>0$, $b\\neq1$, $x>0$",
            ],
            [
              "Hubungan invers",
              "$f(x)=\\log_{b}x$ membalik $g(x)=b^{x}$",
            ],
            [
              "Domain dan asimtot",
              "domain $x>0$, asimtot tegak $x=0$",
            ],
            [
              "Titik kunci grafik",
              "melalui $(1,0)$ dan $(b,1)$",
            ],
            [
              "Sifat perkalian",
              "$\\log_{b}(mn)=\\log_{b}m+\\log_{b}n$",
            ],
            [
              "Sifat pembagian",
              "$\\log_{b}\\!\\left(\\dfrac{m}{n}\\right)=\\log_{b}m-\\log_{b}n$",
            ],
            [
              "Sifat pangkat",
              "$\\log_{b}(m^{n})=n\\,\\log_{b}m$",
            ],
            [
              "Perubahan basis",
              "$\\log_{b}x=\\dfrac{\\log_{a}x}{\\log_{a}b}$",
            ],
            [
              "Skala logaritmik",
              "pH, desibel, dan skala Richter",
            ],
          ],
        },
      ],
    },
    {
      id: "evaluasi",
      kind: "evaluasi",
      title: "Evaluasi",
      body: `**Tiket keluar.** (1) Jelaskan mengapa $\\log_{2}(-8)$ dan $\\log_{1}5$ keduanya tidak terdefinisi. (2) Tentukan domain dan asimtot tegak $f(x)=\\log_{5}(x+4)-2$. (3) Tentukan $x$ dari $\\log_{3}(x-2)=2$ dan sebutkan syarat numerus yang harus dipenuhi. Setelah menjawab, lanjut ke [Latihan & Asesmen](/latihan) topik **Fungsi Logaritma** untuk latihan tambahan.`,
    },
  ],
};
