import type { Topic } from '@/types/content';

export const spltv: Topic = {
  id: 'spltv',
  slug: 'spltv',
  title: 'Sistem Persamaan Linear Tiga Variabel',
  subtitle: 'Menyelesaikan dan menafsirkan tiga persamaan sekaligus',
  grade: 'X',
  phase: 'E',
  element: 'aljabar-fungsi',
  status: 'lengkap',
  supplementary: true,
  cpNote:
    'CP Matematika SMA tidak mencantumkan SPLTV secara eksplisit; butir E-ALJ-1 hanya menuntut sistem pertidaksamaan linear dua variabel. Topik ini disajikan sebagai penguatan sebelum E-ALJ-1, karena kebiasaan mereduksi tiga persamaan menjadi dua lalu satu variabel mempermudah penyusunan dan penafsiran daerah penyelesaian. Penyelesaian tiga variabel dengan matriks juga disinggung sebagai lanjutan aljabar.',
  estimatedMinutes: 90,
  summary:
    'Menyusun dan menyelesaikan sistem persamaan linear tiga variabel dengan eliminasi dan substitusi, serta menafsirkan solusinya.',
  description:
    'Banyak situasi nyata menuntut penentuan tiga besaran sekaligus, seperti harga tiga jenis barang atau komposisi tiga bahan. Sistem persamaan linear tiga variabel (SPLTV) menyediakan cara sistematis untuk menemukannya. Pada topik ini kita belajar merepresentasikan SPLTV, menyelesaikannya dengan eliminasi dan substitusi, memodelkan masalah nyata, serta menafsirkan solusinya, termasuk kemungkinan tidak ada solusi atau tak berhingga banyak solusi.',
  keywords: [
    'SPLTV',
    'tiga variabel',
    'eliminasi',
    'substitusi',
    'pemodelan',
    'solusi',
  ],
  prerequisites: [],
  relatedTopics: ['sistem-pertidaksamaan', 'matriks'],
  prerequisiteKnowledge: [
    'Persamaan linear dua variabel dan penyelesaiannya',
    'Operasi bentuk aljabar dan menyederhanakan suku sejenis',
    'Menyelesaikan persamaan linear satu variabel',
  ],
  objectives: [
    { text: 'Menyatakan situasi tiga besaran yang tidak diketahui sebagai SPLTV.' },
    { text: 'Menyelesaikan SPLTV dengan metode eliminasi.' },
    { text: 'Menyelesaikan SPLTV dengan metode substitusi dan gabungan.' },
    { text: 'Memodelkan masalah kontekstual ke dalam SPLTV.' },
    { text: 'Menafsirkan solusi serta mengenali kasus tanpa solusi atau tak berhingga banyak solusi.' },
  ],
  applications: ['optimasi-produksi-bengkel'],
  sections: [
    {
      id: "tujuan",
      kind: "tujuan",
      title: "Tujuan Pembelajaran",
      body: "Setelah mempelajari topik ini, peserta didik dapat merepresentasikan hubungan tiga besaran linear, menyelesaikan sistem persamaan linear tiga variabel dengan metode eliminasi dan substitusi, memodelkan masalah nyata ke dalam SPLTV, serta menafsirkan solusi termasuk kemungkinan sistem yang tidak memiliki solusi atau memiliki tak berhingga banyak solusi.",
    },
    {
      id: "pemantik",
      kind: "pemantik",
      title: "Pertanyaan Pemantik",
      blocks: [
        {
          kind: "prediction",
          prompt: `Ani dan Budi menimbang buah secara berpasangan:
- berat Ani dan Budi bersama $10$ kg;
- berat Budi dan Cita bersama $12$ kg;
- berat Ani dan Cita bersama $8$ kg.

Dapatkah kamu menentukan berat masing-masing anak? Jumlahkan ketiga informasi itu: dua kali total berat mereka adalah $10+12+8=30$ kg. Berapa berat Ani, Budi, dan Cita?`,
          reveal: "Jumlahkan ketiga persamaan: $2(A+B+C)=30$, jadi $A+B+C=15$. Karena $A+B=10$, maka $C=5$. Karena $B+C=12$, maka $A=3$. Karena $A+C=8$, maka $B=7$. Jadi Ani $3$ kg, Budi $7$ kg, dan Cita $5$ kg. Periksa: $3+7=10$, $7+5=12$, $3+5=8$. Semua terpenuhi.",
          saveLabel: "Simpan dugaan & lihat jawabannya",
        },
      ],
    },
    {
      id: "prasyarat",
      kind: "prasyarat",
      title: "Prasyarat",
      body: `Untuk menyusun dan menyelesaikan SPLTV dengan lancar, segarkan dahulu kemampuan berikut:
- menyelesaikan sistem persamaan linear dua variabel dengan eliminasi atau substitusi;
- menyederhanakan bentuk aljabar dengan suku sejenis;
- operasi bilangan bulat dan pecahan.`,
    },
    {
      id: "konteks",
      kind: "konteks",
      title: "Situasi dan Konteks",
      body: `Di kantin sekolah, tiga siswa berbelanja dengan kombinasi barang yang berbeda. Dari total belanja masing-masing kita dapat menebak harga satuan setiap barang. Hal serupa muncul pada campuran bahan, komposisi gizi, hingga penentuan tiga bilangan yang hanya diketahui jumlah dan hubungannya.

Ketika banyak besaran yang dicari bertambah menjadi tiga, menyelesaikan secara coba-coba menjadi tidak praktis. Kita memerlukan prosedur yang rapi: mengubah tiga persamaan menjadi dua, lalu menjadi satu.`,
    },
    {
      id: "representasi",
      kind: "representasi",
      title: "Representasi",
      body: `Satu SPLTV dapat disajikan dalam beberapa bentuk. Contohnya untuk sistem

$$\\begin{cases} 2x + y - z = 3 \\\\ x - y + 2z = 4 \\\\ x + 2y + z = 7 \\end{cases}$$

bentuk aljabarnya adalah himpunan tiga persamaan di atas, sedangkan tiap persamaan dapat ditandai agar mudah dirujuk saat eliminasi.`,
      blocks: [
        {
          kind: "table",
          caption: "Tiga cara memandang SPLTV",
          headers: [
            "Representasi",
            "Bentuk",
          ],
          rows: [
            [
              "Aljabar",
              "tiga persamaan linear dengan $x, y, z$",
            ],
            [
              "Matriks",
              "tabel koefisien $3 \\times 4$ (termasuk konstanta)",
            ],
            [
              "Geometri",
              "tiga bidang yang berpotongan di satu titik",
            ],
          ],
        },
        {
          kind: "tabs",
          items: [
            {
              label: "Substitusi",
              body: "Nyatakan satu variabel lalu substitusikan ke persamaan lain.",
            },
            {
              label: "Eliminasi",
              body: "Jumlahkan atau kurangkan persamaan untuk menghilangkan variabel.",
            },
            {
              label: "Grafik",
              body: "Titik potong dua garis adalah solusi sistem.",
            },
          ],
        },
        {
          kind: "figure",
          alt: "Dua garis lurus berpotongan di satu titik pada bidang koordinat, dan titik potong itu diberi tanda.",
          caption: "Analogi dua dimensi dari SPLTV: solusi sistem dua variabel adalah titik potong dua garis, sedangkan pada tiga variabel solusinya adalah titik potong tiga bidang.",
          svg: '<svg viewBox="0 0 320 220" aria-hidden="true" role="presentation"><line x1="40" y1="190" x2="300" y2="190" stroke="currentColor" stroke-width="1.5"/><line x1="40" y1="190" x2="40" y2="20" stroke="currentColor" stroke-width="1.5"/><line x1="60" y1="170" x2="260" y2="40" stroke="currentColor" stroke-width="2"/><line x1="60" y1="40" x2="260" y2="170" stroke="currentColor" stroke-width="2"/><circle cx="160" cy="105" r="4" fill="currentColor"/><text x="292" y="208" font-size="12" fill="currentColor">x</text><text x="20" y="26" font-size="12" fill="currentColor">y</text><text x="168" y="98" font-size="12" fill="currentColor">solusi</text></svg>',
        },
      ],
    },
    {
      id: "konsep",
      kind: "konsep",
      title: "Konsep Inti: SPLTV dan Jenis Solusinya",
      questionIds: ['sp-13'],
      body: `SPLTV adalah himpunan tiga persamaan linear yang memuat tiga variabel, yaitu

$$\\begin{cases} a_1x + b_1y + c_1z = d_1 \\\\ a_2x + b_2y + c_2z = d_2 \\\\ a_3x + b_3y + c_3z = d_3 \\end{cases}$$

Solusinya adalah pasangan terurut $(x,y,z)$ yang memenuhi **ketiga** persamaan sekaligus. Secara geometris, solusi adalah titik potong tiga bidang.

Ada tiga kemungkinan:
- **solusi tunggal**: ketiga bidang berpotongan di satu titik;
- **tak berhingga banyak solusi**: bidang-bidang berpotongan pada satu garis (persamaan tidak saling bebas);
- **tidak ada solusi**: bidang-bidang sejajar atau bertemu sepanjang garis yang tidak memenuhi salah satu persamaan.

Metode penyelesaian yang umum adalah **eliminasi** (mengurangkan atau menjumlahkan persamaan) dan **substitusi** (mengganti satu variabel dengan bentuk dari variabel lain).`,
      blocks: [
        {
          kind: "callout",
          variant: "concept",
          title: "Tiga variabel, dua langkah",
          text: "Tujuan eliminasi adalah mereduksi tiga variabel menjadi dua, lalu menjadi satu. Setiap langkah harus menghasilkan persamaan baru yang tetap benar untuk solusi yang sama.",
        },
        {
          kind: "match",
          intro: "Cocokkan jenis sistem dengan banyak solusinya.",
          pairs: [
            {
              left: "Sistem konsisten",
              right: "Punya tepat satu solusi",
            },
            {
              left: "Sistem tak konsisten",
              right: "Tidak punya solusi",
            },
            {
              left: "Sistem bergantung",
              right: "Punya tak hingga banyak solusi",
            },
            {
              left: "Determinan nol",
              right: "Garis sejajar atau berimpit",
            },
          ],
        },
        {
          kind: "flip-cards",
          intro: "Balik tiap kartu untuk mengingat langkah dan jenis solusi SPLTV.",
          cards: [
            {
              front: "Reduksi",
              back: "Mengurangi banyak variabel dari tiga menjadi dua, lalu menjadi satu.",
            },
            {
              front: "Substitusi balik",
              back: "Memasukkan nilai variabel yang sudah ditemukan ke persamaan awal untuk memperoleh sisanya.",
            },
            {
              front: "Solusi tunggal",
              back: "Ketiga bidang bertemu tepat di satu titik $(x,y,z)$.",
            },
            {
              front: "Sistem bergantung",
              back: "Salah satu persamaan mengikuti persamaan lain, sehingga solusinya tak berhingga.",
            },
            {
              front: "Sistem tak konsisten",
              back: "Tidak ada titik yang memenuhi ketiga persamaan sekaligus.",
            },
          ],
        },
        {
          kind: "figure",
          alt: "Tiga bidang berpotongan dan bertemu pada satu titik, ditandai sebagai solusi sistem.",
          caption: "Secara geometris, solusi SPLTV adalah titik potong tiga bidang. Bila bidang-bidang bertemu sepanjang sebuah garis atau tidak bertemu sama sekali, sistemnya bergantung atau tidak konsisten.",
          svg: '<svg viewBox="0 0 320 240" aria-hidden="true" role="presentation"><polygon points="40,150 150,110 280,150 170,190" fill="none" stroke="currentColor" stroke-width="1.6"/><polygon points="90,70 210,50 250,140 130,160" fill="none" stroke="currentColor" stroke-width="1.6"/><polygon points="110,90 230,120 200,200 80,170" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="160" cy="128" r="4" fill="currentColor"/><text x="170" y="124" font-size="12" fill="currentColor">titik potong</text><text x="238" y="205" font-size="11" fill="currentColor">tiga bidang</text></svg>',
        },
      ],
    },
    {
      id: "eksplorasi",
      kind: "eksplorasi",
      title: "Eksplorasi",
      body: `Ambil sistem berikut dan coba variasikan caranya:

$$\\begin{cases} x + y + z = 6 \\\\ x - y + z = 2 \\\\ x + y - z = 4 \\end{cases}$$

Kurangkan persamaan (1) dengan (2). Variabel apa yang hilang? Lalu kurangkan persamaan (1) dengan (3). Apakah kamu memperoleh nilai $y$ dan $z$ secara terpisah? Dari sini, berapa $x$? Diskusikan mengapa cara ini lebih cepat daripada mengeliminasi satu variabel berulang kali.`,
      blocks: [
        {
          kind: "exploration",
          explorationId: "spltv-perpotongan",
        },
      ],
    },
    {
      id: "generalisasi",
      kind: "generalisasi",
      title: "Pola Umum Eliminasi dan Substitusi",
      body: `Baik eliminasi maupun substitusi bermuara pada satu ide yang sama: **kurangi banyak variabel satu per satu sampai tersisa satu**. Setiap langkah memilih dua persamaan, menyetel koefisien satu variabel agar berlawanan atau sama, lalu menjumlahkan atau mengurangkannya. Hasilnya adalah sistem baru dengan satu variabel lebih sedikit yang memiliki solusi sama.

Pola ini menjelaskan mengapa SPLTV selalu dapat diredam menjadi dua persamaan dua variabel, lalu menjadi satu. Setelah satu nilai diperoleh, nilainya disubstitusi kembali ke belakang. Hasil akhirnya hanya mungkin salah satu dari tiga kemungkinan: solusi tunggal, tak berhingga banyak solusi, atau tidak ada solusi, bergantung pada apakah tiga bidangnya berpotongan di satu titik, sepanjang garis, atau tidak bertemu.`,
      blocks: [
        {
          kind: "figure",
          alt: "Diagram alur penyelesaian SPLTV dari kotak tiga persamaan menuju kotak dua persamaan, lalu kotak satu variabel, dan akhirnya kotak solusi x y z melalui substitusi balik.",
          caption: "Alur reduksi SPLTV: tiga persamaan dieliminasi bertahap menjadi dua persamaan, lalu satu variabel, dan nilai $x$, $y$, $z$ diperoleh lewat substitusi balik.",
          svg: '<svg viewBox="0 0 320 200" aria-hidden="true" role="presentation"><defs><marker id="fig-spltv-flow-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0,0 L 10,5 L 0,10 z" fill="currentColor"/></marker></defs><rect x="15" y="55" width="85" height="32" rx="4" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="118" y="55" width="85" height="32" rx="4" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="221" y="55" width="85" height="32" rx="4" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="100" y="140" width="120" height="34" rx="4" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/><line x1="100" y1="71" x2="115" y2="71" stroke="currentColor" stroke-width="1.5" marker-end="url(#fig-spltv-flow-arrow)"/><line x1="203" y1="71" x2="218" y2="71" stroke="currentColor" stroke-width="1.5" marker-end="url(#fig-spltv-flow-arrow)"/><polyline points="263,87 263,118 160,118 160,138" fill="none" stroke="currentColor" stroke-width="1.5" marker-end="url(#fig-spltv-flow-arrow)"/><text x="57" y="76" font-size="11" text-anchor="middle" fill="currentColor">3 persamaan</text><text x="160" y="76" font-size="11" text-anchor="middle" fill="currentColor">2 persamaan</text><text x="263" y="76" font-size="11" text-anchor="middle" fill="currentColor">1 variabel</text><text x="160" y="161" font-size="11" text-anchor="middle" fill="currentColor">solusi (x, y, z)</text><text x="107" y="96" font-size="10" text-anchor="middle" fill="currentColor">eliminasi</text><text x="210" y="96" font-size="10" text-anchor="middle" fill="currentColor">eliminasi</text><text x="212" y="113" font-size="10" text-anchor="middle" fill="currentColor">substitusi balik</text></svg>',
        },
      ],
    },
    {
      id: "rumus",
      kind: "rumus",
      title: "Rumus dan Prosedur",
      body: `**Bentuk umum.**
$$\\begin{cases} a_{1}x+b_{1}y+c_{1}z=d_{1} \\\\ a_{2}x+b_{2}y+c_{2}z=d_{2} \\\\ a_{3}x+b_{3}y+c_{3}z=d_{3} \\end{cases}$$

**Eliminasi.** Kalikan persamaan dengan konstanta agar koefisien satu variabel berlawanan, lalu jumlahkan atau kurangkan untuk menghapus variabel itu. Ulangi sampai tersisa satu variabel, kemudian substitusi balik.

**Substitusi.** Nyatakan satu variabel dari satu persamaan, gantikan pada persamaan lain, lalu selesaikan sistem yang lebih kecil.

**Jenis solusi.**
- Solusi tunggal: ketiga bidang berpotongan di satu titik.
- Tak berhingga banyak solusi: ada persamaan yang bergantung pada persamaan lain.
- Tanpa solusi: tidak ada titik yang memenuhi ketiga persamaan.

**Prosedur pemodelan.** (1) Tetapkan variabel dan artinya; (2) susun tiga persamaan dari informasi; (3) reduksi tiga variabel menjadi dua, lalu satu; (4) substitusi balik; (5) periksa solusi pada ketiga persamaan; (6) tafsirkan dalam konteks.`,
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
              text: `Selesaikan

$$\\begin{cases} x + y + z = 6 & (1) \\\\ x - y + z = 2 & (2) \\\\ x + y - z = 4 & (3) \\end{cases}$$

*Penyelesaian.* Kurangkan (1) dan (2) untuk menghilangkan $x$ dan $z$:
$$(x+y+z)-(x-y+z)=6-2 \\Rightarrow 2y=4 \\Rightarrow y=2.$$
Kurangkan (1) dan (3):
$$(x+y+z)-(x+y-z)=6-4 \\Rightarrow 2z=2 \\Rightarrow z=1.$$
Substitusikan ke (1): $x+2+1=6 \\Rightarrow x=3$.

Periksa (2): $3-2+1=2$ ✓ dan (3): $3+2-1=4$ ✓. Solusinya $(x,y,z)=(3,2,1)$.`,
            },
            {
              title: "Contoh 2",
              text: `Selesaikan

$$\\begin{cases} y = x + 1 \\\\ x + y + z = 8 \\\\ 2x - y + z = 3 \\end{cases}$$

*Penyelesaian.* Substitusikan $y=x+1$ ke persamaan kedua:
$$x+(x+1)+z=8 \\Rightarrow 2x+z=7.$$
Substitusikan juga ke persamaan ketiga:
$$2x-(x+1)+z=3 \\Rightarrow x+z=4 \\Rightarrow z=4-x.$$
Masukkan $z=4-x$ ke $2x+z=7$: $2x+(4-x)=7 \\Rightarrow x=3$. Maka $y=4$ dan $z=1$. Periksa: $3+4+1=8$ ✓ dan $2(3)-4+1=3$ ✓. Solusinya $(3,4,1)$.`,
            },
            {
              title: "Contoh 3 (pemodelan): menetapkan variabel",
              text: `Sebuah kedai menyiapkan campuran kopi dari tiga jenis biji. Satu bungkus berisi $60$ gram dengan harga Rp12.500. Harga per gram: arabika Rp300, robusta Rp150, dan liberika Rp200; banyak arabika dua kali banyak liberika. Tentukan komposisi tiap jenis.

Misalkan $a$, $r$, dan $l$ berturut-turut berat arabika, robusta, dan liberika (gram). Kita mencari pasangan $(a, r, l)$.`,
            },
            {
              title: "Contoh 3 (pemodelan): menyusun persamaan",
              text: `Ubah tiap informasi menjadi persamaan.
- Total berat: $a + r + l = 60$.
- Total harga: $300a + 150r + 200l = 12.500$.
- Hubungan banyak arabika dan liberika: $a = 2l$.

Ketiga persamaan itu membentuk sebuah SPLTV.`,
            },
            {
              title: "Contoh 3 (pemodelan): menyelesaikan sistem",
              text: `Substitusikan $a = 2l$ ke persamaan berat: $2l + r + l = 60 \\Rightarrow r = 60 - 3l$. Substitusikan $a=2l$ dan $r=60-3l$ ke persamaan harga:
$$300(2l) + 150(60 - 3l) + 200l = 12.500.$$
Sederhanakan: $600l + 9.000 - 450l + 200l = 12.500$, sehingga $350l = 3.500$ dan $l = 10$. Lalu $a = 20$ dan $r = 30$.`,
            },
            {
              title: "Contoh 3 (pemodelan): memeriksa dan menafsirkan",
              text: `Periksa ketiga persamaan: $20 + 30 + 10 = 60$ ✓, $300(20) + 150(30) + 200(10) = 6.000 + 4.500 + 2.000 = 12.500$ ✓, dan $20 = 2(10)$ ✓.

Jadi tiap bungkus berisi $20$ gram arabika, $30$ gram robusta, dan $10$ gram liberika. Menafsirkan hasil dalam konteks berarti menyatakan jawaban sebagai komposisi nyata, bukan hanya pasangan bilangan.`,
            },
          ],
        },
        {
          kind: "details",
          summary: "Coba sendiri: eliminasi dua kali",
          text: `Selesaikan sistem
$$\\begin{cases} x+y+z=6 \\\\ 2x-y+z=2 \\\\ x+2y-z=7 \\end{cases}$$

*Penyelesaian.* Kurangkan (1) dengan (2): $-x+2y=4$, sehingga $x=2y-4$. Kurangkan (1) dengan (3): $-y+2z=-1$, sehingga $y=1+2z$ dan $x=4z-2$. Substitusikan ke (1): $(4z-2)+(1+2z)+z=6$, yaitu $7z=7$, maka $z=1$, $y=3$, dan $x=2$. Periksa: $2+3+1=6$, $4-3+1=2$, dan $2+6-1=7$. Solusinya $(2,3,1)$.`,
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
      body: `SPLTV dipakai untuk menetapkan harga satuan dari beberapa paket belanja, menyusun campuran bahan dengan komposisi tertentu, dan menganalisis rangkaian listrik sederhana. Sebuah kios buah menjual tiga paket: paket A berisi $2$ mangga, $1$ jeruk, dan $1$ apel seharga Rp34.000; paket B berisi $1$ mangga, $3$ jeruk, dan $2$ apel seharga Rp47.000; paket C berisi $3$ mangga, $1$ jeruk, dan $2$ apel seharga Rp53.000. Dari tiga total itu, harga satuan mangga, jeruk, dan apel dapat ditemukan sekaligus, yaitu Rp9.000, Rp6.000, dan Rp10.000.

Pola pikirnya selalu sama: ubah situasi menjadi persamaan, selesaikan, lalu periksa apakah jawabnya masuk akal. Langkah pemodelan yang baik: (1) tentukan variabel dan artinya, (2) susun tiga persamaan dari informasi, (3) selesaikan, (4) periksa pada ketiga persamaan, dan (5) tafsirkan dalam konteks asal.`,
    },
    {
      id: "kesalahan-umum",
      kind: "kesalahan-umum",
      title: "Kesalahan Umum",
      body: `**1. Salah tanda saat mengurangkan persamaan.** Setelah memperoleh $2y=4$, pastikan seluruh ruas dikurangkan, termasuk konstantanya. Kesalahan tanda adalah penyebab paling umum.

**2. Berhenti pada dua persamaan dua variabel.** Menemukan $y$ dan $z$ belum selesai; kamu masih harus menentukan $x$ dari salah satu persamaan awal.

**3. Tidak memeriksa solusi pada semua persamaan.** Solusi harus memenuhi **ketiga** persamaan. Periksa selalu agar kesalahan aritmetika terdeteksi.

**4. Mengira setiap SPLTV punya solusi tunggal.** Bisa saja sistem konsisten dengan tak berhingga solusi, atau tidak punya solusi sama sekali.`,
      blocks: [
        {
          kind: "spot-mistake",
          intro: "Seorang siswa mengeliminasi $x$ dari dua persamaan. Klik langkah yang keliru.",
          steps: [
            "Tulis persamaan (1) $x+y+z=6$ dan (2) $x-y+z=2$.",
            "Kurangkan (1) dengan (2) ruas demi ruas: $(x-x)+(y-y)+(z-z)=6-2$.",
            "Sederhanakan: $0=4$, sehingga sistem tidak punya solusi.",
          ],
          wrongIndex: 1,
          explanation: "Pada langkah kedua, $y-(-y)$ sama dengan $2y$, bukan $y-y=0$. Pengurangan yang benar memberi $2y=4$, yaitu $y=2$. Setelah $z=1$ dan $x=3$ diperoleh, solusinya $(3,2,1)$ dan sistem tetap konsisten.",
        },
      ],
    },
    {
      id: "tantangan",
      kind: "tantangan",
      title: "Misteri Tiga Angka",
      body: `**Soal.** Sebuah bilangan tiga angka memiliki jumlah digit $15$. Angka satuannya dua kali angka ratusannya. Jika urutan ketiga angkanya dibalik, bilangan baru bertambah $198$ dari bilangan semula. Tentukan bilangan itu.`,
      blocks: [
        {
          kind: "callout",
          variant: "tip",
          title: "Manfaatkan nilai posisi",
          text: "Misalkan bilangan itu $100r + 10p + s$, dengan $r$ angka ratusan, $p$ puluhan, dan $s$ satuan. Nilai posisi angka membuat hubungan bilangan dengan balikannya dapat ditulis sebagai persamaan linear.",
        },
        {
          kind: "step-reveal",
          intro: "Ubah tiap keterangan menjadi persamaan, lalu selesaikan bertahap.",
          steps: [
            {
              title: "Tetapkan variabel",
              text: "Misalkan $r$, $p$, dan $s$ berturut-turut angka ratusan, puluhan, dan satuan. Bilangan semula adalah $100r + 10p + s$ dan balikannya $100s + 10p + r$.",
            },
            {
              title: "Jumlah digit",
              text: "Jumlah digit $15$ memberi $r + p + s = 15$.",
            },
            {
              title: "Hubungan satuan dan ratusan",
              text: "Angka satuan dua kali angka ratusan: $s = 2r$.",
            },
            {
              title: "Selisih dengan balikannya",
              text: "Balikan bertambah $198$: $(100s + 10p + r) - (100r + 10p + s) = 198$. Suku $10p$ saling menghapus, sehingga $99s - 99r = 198$ atau $s - r = 2$.",
            },
            {
              title: "Tentukan angka ratusan dan satuan",
              text: "Substitusi $s = 2r$ ke $s - r = 2$: $2r - r = 2$, maka $r = 2$ dan $s = 4$.",
            },
            {
              title: "Tentukan angka puluhan",
              text: "Dari $r + p + s = 15$ diperoleh $2 + p + 4 = 15$, sehingga $p = 9$.",
            },
            {
              title: "Periksa dan simpulkan",
              text: "Bilangannya $294$. Periksa: jumlah digit $2+9+4=15$ ✓, satuan $4=2\\cdot2$ ✓, dan $492 - 294 = 198$ ✓. Jadi bilangan itu $294$.",
            },
          ],
        },
      ],
    },
    {
      id: "sejarah",
      kind: "sejarah",
      title: "Eliminasi dari Tiongkok ke Gauss",
      body: `Sistem persamaan linear sudah diselesaikan jauh sebelum notasi aljabar modern. Asal-usul penyusunan koefisien dalam tabel dan eliminasi beruntun, dari kitab Tiongkok kuno sampai notasi Cayley, ditelusuri pada topik [Matriks](/matematika/kelas/XI/aljabar-fungsi/matriks). Khusus untuk SPLTV, nama "eliminasi Gauss" melekat karena Carl Friedrich Gauss memakai pengurangan beruntun yang sistematis pada awal abad ke-19, antara lain saat menghitung orbit benda langit. Cara memandang susunan baris dan kolom itu kini meringkas pekerjaan yang dahulu dilakukan satu persamaan demi satu persamaan.`,
    },
    {
      id: "refleksi",
      kind: "refleksi",
      title: "Refleksi",
      body: "Menyelesaikan SPLTV adalah pekerjaan mengurangi tiga hal yang belum diketahui menjadi satu per satu. Gunakan refleksi berikut untuk menilai pilihan strategimu, lalu pikirkan satu situasi di sekitarmu yang melibatkan tiga besaran saling terkait dan dapat dimodelkan sebagai SPLTV.",
      blocks: [
        {
          kind: "reflection",
          prompts: [
            "Bagaimana kamu memutuskan akan memakai eliminasi atau substitusi pada suatu SPLTV?",
            "Kesalahan tanda paling sering muncul di langkah mana, dan bagaimana kamu menghindarinya?",
            "Mengapa menafsirkan solusi dalam konteks soal sama pentingnya dengan menghitungnya?",
          ],
          confidenceLabel: "Seberapa yakin kamu memilih strategi penyelesaian SPLTV?",
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
          caption: "Ringkasan metode penyelesaian SPLTV dan tiga kemungkinan jenis solusinya.",
          headers: [
            "Aspek",
            "Penjelasan",
          ],
          rows: [
            [
              "Bentuk umum",
              "tiga persamaan linear dengan variabel $x, y, z$",
            ],
            [
              "Metode eliminasi",
              "menjumlah/mengurangkan persamaan untuk menghapus variabel",
            ],
            [
              "Metode substitusi",
              "mengganti variabel dengan bentuk variabel lain",
            ],
            [
              "Solusi tunggal",
              "ketiga bidang berpotongan di satu titik",
            ],
            [
              "Tak berhingga solusi",
              "salah satu persamaan bergantung pada yang lain",
            ],
            [
              "Tanpa solusi",
              "tidak ada titik yang memenuhi ketiga persamaan",
            ],
          ],
        },
        {
          kind: "callout",
          variant: "concept",
          title: "Reduksi bertahap, satu titik temu",
          text: "Tiga persamaan tidak diselesaikan sekaligus. Setiap eliminasi membuang satu variabel, dan setelah tersisa satu nilai, substitusi balik mengisi sisanya. Pola ini adalah versi tangan dari eliminasi baris pada topik **Matriks**, yang menuliskan koefisien dalam tabel agar langkah yang sama menjadi lebih ringkas dan mudah diperiksa.",
        },
      ],
    },
    {
      id: "evaluasi",
      kind: "evaluasi",
      title: "Evaluasi",
      questionIds: ['sp-09'],
      body: `**Rangkai langkah.** Tuliskan urutan langkah yang akan kamu pakai untuk menyelesaikan sebuah SPLTV, mulai dari menyusun persamaan hingga memeriksa solusi. Kemudian berikan satu contoh situasi yang menghasilkan sistem tanpa solusi dan jelaskan mengapa demikian. Setelah menjawab, lanjut ke [Latihan & Asesmen](/latihan) topik **Sistem Persamaan Linear Tiga Variabel** untuk latihan tambahan.`,
    },
  ],
};
