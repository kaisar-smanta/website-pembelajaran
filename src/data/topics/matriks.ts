import type { Topic } from '@/types/content';

export const matriks: Topic = {
  id: 'matriks',
  slug: 'matriks',
  title: 'Matriks',
  subtitle: 'Menyusun data dan menyelesaikan sistem persamaan',
  grade: 'XI',
  phase: 'F',
  element: 'aljabar-fungsi',
  status: 'lengkap',
  supplementary: true,
  cpNote:
    'Topik ini melayani Matematika wajib: operasi aljabar matriks secara eksplisit baru diamanatkan CP Matematika Tingkat Lanjut lewat FL-ALJ-2 (elemen aljabar-fungsi, menerapkan matriks pada transformasi geometri), sedangkan di jenjang wajib matriks baru disinggung sebagai penyajian data pada E-DAT-3 (elemen data-peluang). Karena itu aljabar matriks di sini berperan sebagai pendalaman yang memperkuat penyajian data dan penyelesaian sistem persamaan, sekaligus menyiapkan landasan bagi tuntutan FL-ALJ-2.',
  estimatedMinutes: 90,
  summary:
    'Mengenal notasi dan jenis matriks, melakukan operasi matriks, menghitung determinan dan invers, serta menyelesaikan SPLDV.',
  description:
    'Matriks adalah susunan bilangan dalam baris dan kolom yang memudahkan penyajian data dan penyelesaian sistem persamaan. Topik ini membahas notasi dan ordo, jenis-jenis matriks, kesamaan matriks, operasi penjumlahan, pengurangan, perkalian skalar, dan perkalian matriks, lalu determinan $2 \\times 2$ dan $3 \\times 3$ melalui ekspansi baris atau kolom. Dari sana kita menurunkan invers matriks $2 \\times 2$ dan menggunakannya untuk menyelesaikan sistem persamaan linear dua variabel.',
  keywords: [
    'matriks',
    'ordo matriks',
    'determinan',
    'invers matriks',
    'perkalian matriks',
    'SPLDV',
    'matriks singular',
  ],
  prerequisites: ['spltv'],
  relatedTopics: ['spltv'],
  prerequisiteKnowledge: [
    'Menyelesaikan sistem persamaan linear dua variabel',
    'Operasi bilangan bulat dan pecahan',
    'Pengertian variabel dan bentuk aljabar dasar',
  ],
  objectives: [
    { text: 'Peserta didik dapat menyatakan data dalam bentuk matriks beserta ordonya.' },
    { text: 'Peserta didik dapat mengidentifikasi jenis-jenis matriks serta melakukan kesamaan matriks.' },
    { text: 'Peserta didik dapat melakukan penjumlahan, pengurangan, perkalian skalar, dan perkalian matriks.' },
    { text: 'Peserta didik dapat menghitung determinan matriks $2 \\times 2$ dan $3 \\times 3$.' },
    { text: 'Peserta didik dapat menentukan invers matriks $2 \\times 2$ dan menggunakannya untuk menyelesaikan SPLDV.' },
  ],
  applications: ['transformasi-matriks'],
  sections: [
    {
      id: "tujuan",
      kind: "tujuan",
      title: "Tujuan Pembelajaran",
      body: "Setelah mempelajari topik ini, peserta didik dapat menyatakan data dalam bentuk matriks, mengenali jenis-jenis matriks, melakukan operasi aljabar pada matriks, menghitung determinan, menentukan invers matriks $2 \\times 2$, serta menyelesaikan sistem persamaan linear dua variabel dengan matriks.",
    },
    {
      id: "pemantik",
      kind: "pemantik",
      title: "Pertanyaan Pemantik",
      blocks: [
        {
          kind: "prediction",
          prompt: `Sebuah toko mencatat penjualan dua jenis barang selama dua hari dalam sebuah tabel:

| Hari | Barang A | Barang B |
| :--: | :------: | :------: |
| Senin | $3$ | $4$ |
| Selasa | $5$ | $2$ |

Tabel ini dapat kita ringkas menjadi susunan bilangan
$$A = \\begin{pmatrix} 3 & 4 \\\\ 5 & 2 \\end{pmatrix}.$$

Pertanyaannya: bagaimana cara menghitung **total penjualan** tiap barang selama dua hari, dan bagaimana menyatakannya dalam bentuk susunan bilangan seperti di atas?`,
          reveal: `Jumlahkan baris demi baris: barang A terjual $3+5=8$ dan barang B terjual $4+2=6$. Dalam bentuk matriks, hasilnya adalah
$$\\begin{pmatrix} 8 \\\\ 6 \\end{pmatrix},$$
yang tidak lain adalah jumlah dua vektor kolom dari tiap hari. Gagasan menjumlahkan susunan bilangan inilah yang menjadi awal operasi pada **matriks**.`,
          saveLabel: "Simpan dugaan & lihat jawabannya",
        },
      ],
    },
    {
      id: "prasyarat",
      kind: "prasyarat",
      title: "Prasyarat",
      body: `Sebelum masuk ke operasi matriks, pastikan dahulu kamu menguasai:
- menyelesaikan sistem persamaan linear dua variabel (SPLDV);
- operasi bilangan bulat dan pecahan;
- operasi bentuk aljabar dasar, termasuk mengalikan dua binomial.`,
    },
    {
      id: "konteks",
      kind: "konteks",
      title: "Situasi dan Konteks",
      body: `Matriks muncul ketika data tersusun dalam baris dan kolom: nilai siswa pada beberapa mata pelajaran, stok barang di beberapa gudang, atau koordinat titik-titik pada bidang. Selain menyajikan data secara ringkas, matriks memberi cara sistematis untuk menjumlahkan, mengalikan, dan menyelesaikan sistem persamaan.
Dalam grafika komputer, matriks dipakai untuk memindahkan dan memutar gambar. Dalam jaringan transportasi, matriks menghubungkan asal dan tujuan perjalanan.`,
    },
    {
      id: "notasi",
      kind: "konsep",
      title: "Notasi, Ordo, dan Kesamaan Matriks",
      questionIds: ['mt-04'],
      body: `Matriks adalah susunan bilangan dalam baris dan kolom. Bilangan di dalamnya disebut **elemen** atau **entri**. Entri pada baris ke-$i$ dan kolom ke-$j$ ditulis $a_{ij}$.

Banyaknya baris dan kolom menentukan **ordo**. Matriks
$$A = \\begin{pmatrix} a_{11} & a_{12} & a_{13} \\\\ a_{21} & a_{22} & a_{23} \\end{pmatrix}$$
berordo $2 \\times 3$ karena memiliki $2$ baris dan $3$ kolom.

**Transpose** matriks $A$, ditulis $A^{T}$, diperoleh dengan menukar baris menjadi kolom. Jika $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$, maka $A^{T} = \\begin{pmatrix} 1 & 3 \\\\ 2 & 4 \\end{pmatrix}$.

**Kesamaan matriks.** Dua matriks dikatakan sama jika ordonya sama dan setiap entri yang bersesuaian sama. Dari
$$\\begin{pmatrix} x & 2 \\\\ 3 & y \\end{pmatrix} = \\begin{pmatrix} 1 & 2 \\\\ 3 & 5 \\end{pmatrix}$$
diperoleh $x=1$ dan $y=5$.`,
      blocks: [
        {
          kind: "match",
          intro: "Cocokkan istilah matriks dengan artinya.",
          pairs: [
            {
              left: "Determinan $\\det(A)$",
              right: "$ad-bc$",
            },
            {
              left: "$AB$",
              right: "Hasil kali matriks; umumnya $AB \\neq BA$",
            },
            {
              left: "Matriks identitas $I$",
              right: "$AI=IA=A$",
            },
            {
              left: "Invers $A^{-1}$",
              right: "Ada bila $\\det(A) \\neq 0$",
            },
          ],
        },
      ],
    },
    {
      id: "jenis",
      kind: "representasi",
      title: "Jenis-Jenis Matriks",
      body: "Berikut beberapa matriks khusus yang sering muncul:",
      blocks: [
        {
          kind: "table",
          caption: "Jenis matriks dan contohnya",
          headers: [
            "Jenis",
            "Ciri",
            "Contoh",
          ],
          rows: [
            [
              "Matriks nol",
              "semua entri $0$",
              "$\\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}$",
            ],
            [
              "Matriks persegi",
              "banyak baris = kolom",
              "$\\begin{pmatrix} 2 & 1 \\\\ 3 & 4 \\end{pmatrix}$",
            ],
            [
              "Matriks diagonal",
              "entri luar diagonal $0$",
              "$\\begin{pmatrix} 5 & 0 \\\\ 0 & 3 \\end{pmatrix}$",
            ],
            [
              "Matriks identitas",
              "diagonal $1$, lainnya $0$",
              "$I = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$",
            ],
            [
              "Matriks segitiga atas",
              "di bawah diagonal $0$",
              "$\\begin{pmatrix} 2 & 7 \\\\ 0 & 4 \\end{pmatrix}$",
            ],
            [
              "Matriks segitiga bawah",
              "di atas diagonal $0$",
              "$\\begin{pmatrix} 2 & 0 \\\\ 6 & 4 \\end{pmatrix}$",
            ],
          ],
        },
        {
          kind: "flip-cards",
          intro: "Balik tiap kartu untuk menguji jenis dan sifat matriks.",
          cards: [
            {
              front: "Matriks persegi",
              back: "Matriks yang banyak barisnya sama dengan banyak kolomnya.",
            },
            {
              front: "Matriks diagonal",
              back: "Matriks persegi dengan semua entri di luar diagonal utama bernilai nol.",
            },
            {
              front: "Matriks identitas",
              back: "Matriks diagonal yang entri diagonalnya satu; berlaku $AI = IA = A$.",
            },
            {
              front: "Matriks segitiga atas",
              back: "Matriks persegi dengan semua entri di bawah diagonal utama nol.",
            },
            {
              front: "Matriks singular",
              back: "Matriks persegi yang determinannya nol sehingga tidak memiliki invers.",
            },
          ],
        },
      ],
    },
    {
      id: "operasi",
      kind: "konsep",
      title: "Operasi pada Matriks",
      body: `Penjumlahan dan pengurangan dapat dilakukan hanya jika **ordo kedua matriks sama**, caranya dengan menjumlahkan entri yang seposisi.

Untuk $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 2 & 0 \\\\ 1 & 3 \\end{pmatrix}$:

$$A+B = \\begin{pmatrix} 3 & 2 \\\\ 4 & 7 \\end{pmatrix}, \\qquad A-B = \\begin{pmatrix} -1 & 2 \\\\ 2 & 1 \\end{pmatrix}.$$

**Perkalian skalar** dilakukan dengan mengalikan setiap entri dengan bilangan skalar $k$:

$$kA = \\begin{pmatrix} k a_{11} & k a_{12} \\\\ k a_{21} & k a_{22} \\end{pmatrix}.$$

$2A = \\begin{pmatrix} 2 & 4 \\\\ 6 & 8 \\end{pmatrix}$.

**Perkalian matriks.** Hasil kali $AB$ terdefinisi jika banyak kolom $A$ sama dengan banyak baris $B$. Jika $A$ berordo $m \\times n$ dan $B$ berordo $n \\times p$, maka $AB$ berordo $m \\times p$. Entri hasil kali pada baris ke-$i$ dan kolom ke-$j$ diperoleh dengan mengalikan entri baris ke-$i$ dari $A$ dengan entri kolom ke-$j$ dari $B$, lalu menjumlahkannya.

$$AB = \\begin{pmatrix} 1(2)+2(1) & 1(0)+2(3) \\\\ 3(2)+4(1) & 3(0)+4(3) \\end{pmatrix} = \\begin{pmatrix} 4 & 6 \\\\ 10 & 12 \\end{pmatrix}.$$

Sebaliknya,
$$BA = \\begin{pmatrix} 2(1)+0(3) & 2(2)+0(4) \\\\ 1(1)+3(3) & 1(2)+3(4) \\end{pmatrix} = \\begin{pmatrix} 2 & 4 \\\\ 10 & 14 \\end{pmatrix}.$$

Karena $AB \\neq BA$, perkalian matriks **tidak komutatif**. Perhatikan juga bahwa $A$ dikalikan matriks identitas menghasilkan $AI = IA = A$.`,
      blocks: [
        {
          kind: "callout",
          variant: "warning",
          title: "Ordo harus sepadan",
          text: "Penjumlahan matriks menuntut ordo yang sama. Matriks $2 \\times 3$ tidak dapat dijumlahkan dengan matriks $3 \\times 2$.",
        },
        {
          kind: "figure",
          alt: "Perkalian matriks A berukuran 2 kali 3 dengan matriks B berukuran 3 kali 2 menghasilkan matriks C berukuran 2 kali 2; dimensi dalam 3 dan 3 disorot.",
          caption: "Perkalian $A_{2\\times 3}\\,B_{3\\times 2}=C_{2\\times 2}$: banyak kolom $A$ ($3$) harus sama dengan banyak baris $B$ ($3$), sehingga hasilnya berordo $2\\times 2$.",
          svg: '<svg viewBox="0 0 320 240" aria-hidden="true" role="presentation"><g fill="none" stroke="currentColor"><rect x="30" y="98" width="66" height="44" stroke-width="2"/><line x1="52" y1="98" x2="52" y2="142"/><line x1="74" y1="98" x2="74" y2="142"/><line x1="30" y1="120" x2="96" y2="120"/><rect x="124" y="87" width="44" height="66" stroke-width="2"/><line x1="146" y1="87" x2="146" y2="153"/><line x1="124" y1="109" x2="168" y2="109"/><line x1="124" y1="131" x2="168" y2="131"/><rect x="196" y="98" width="44" height="44" stroke-width="2"/><line x1="218" y1="98" x2="218" y2="142"/><line x1="196" y1="120" x2="240" y2="120"/></g><text x="63" y="90" font-size="13" fill="currentColor" text-anchor="middle">A</text><text x="146" y="79" font-size="13" fill="currentColor" text-anchor="middle">B</text><text x="218" y="90" font-size="13" fill="currentColor" text-anchor="middle">C</text><text x="110" y="126" font-size="13" fill="currentColor" text-anchor="middle">\u00d7</text><text x="182" y="126" font-size="13" fill="currentColor" text-anchor="middle">=</text><text x="63" y="158" font-size="11" fill="currentColor" text-anchor="middle">2 baris \u00d7 <tspan font-weight="bold">3</tspan> kolom</text><text x="146" y="174" font-size="11" fill="currentColor" text-anchor="middle"><tspan font-weight="bold">3</tspan> baris \u00d7 2 kolom</text><text x="218" y="158" font-size="11" fill="currentColor" text-anchor="middle">2 baris \u00d7 2 kolom</text></svg>',
        },
      ],
    },
    {
      id: "determinan",
      kind: "rumus",
      title: "Determinan Matriks",
      body: `Determinan adalah sebuah bilangan yang dihitung dari suatu matriks persegi dan memberi informasi penting, seperti apakah matriks itu dapat dibalik.

**Determinan $2 \\times 2$.** Untuk $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$:

$$\\det(A) = ad - bc.$$

Contohnya, untuk $A = \\begin{pmatrix} 3 & 1 \\\\ 2 & 4 \\end{pmatrix}$ diperoleh $\\det(A) = 3(4) - 1(2) = 10$.

**Determinan $3 \\times 3$.** Determinan dihitung dengan **ekspansi baris atau kolom**. Untuk baris pertama:

$$\\det \\begin{pmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i \\end{pmatrix} = a(ei - fh) - b(di - fg) + c(dh - eg).$$

Tanda bergantian $+$, $-$, $+$. Kita juga boleh mengekspansi kolom mana pun selama tanda mengikuti pola $(-1)^{i+j}$.

Untuk $B = \\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 4 \\\\ 5 & 6 & 0 \\end{pmatrix}$, ekspansi baris pertama memberi
$$\\det(B) = 1(1 \\cdot 0 - 4 \\cdot 6) - 2(0 \\cdot 0 - 4 \\cdot 5) + 3(0 \\cdot 6 - 1 \\cdot 5)$$
$$= 1(-24) - 2(-20) + 3(-5) = -24 + 40 - 15 = 1.$$`,
      blocks: [
        {
          kind: "tabs",
          items: [
            {
              label: "Simbolik",
              body: "Untuk $2\\times2$: $\\det(A)=ad-bc$. Untuk $3\\times3$: $\\det(A)=a(ei-fh)-b(di-fg)+c(dh-eg)$.",
            },
            {
              label: "Tabel",
              body: "Susun entri menurut baris dan kolom. Tanda ekspansi mengikuti pola $+,-,+$, sehingga minor tiap entri tidak tertukar.",
            },
            {
              label: "Prosedur",
              body: "Pilih baris atau kolom dengan nol terbanyak, hitung minor tiap entri, kalikan dengan tanda $(-1)^{i+j}$, lalu jumlahkan hasilnya.",
            },
          ],
        },
      ],
    },
    {
      id: "invers",
      kind: "konsep",
      title: "Matriks Singular, Invers, dan SPLDV",
      body: `Suatu matriks persegi dikatakan **singular** jika determinannya nol. Matriks singular tidak memiliki invers. Contohnya, $C = \\begin{pmatrix} 2 & 4 \\\\ 1 & 2 \\end{pmatrix}$ memiliki $\\det(C) = 2(2) - 4(1) = 0$, sehingga $C$ singular.

Jika $\\det(A) \\neq 0$, maka $A$ memiliki invers:

$$A^{-1} = \\frac{1}{\\det(A)} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}, \\qquad A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}.$$

Untuk $A = \\begin{pmatrix} 3 & 1 \\\\ 2 & 4 \\end{pmatrix}$ dengan $\\det(A)=10$:

$$A^{-1} = \\frac{1}{10} \\begin{pmatrix} 4 & -1 \\\\ -2 & 3 \\end{pmatrix} = \\begin{pmatrix} \\tfrac{2}{5} & -\\tfrac{1}{10} \\\\ -\\tfrac{1}{5} & \\tfrac{3}{10} \\end{pmatrix}.$$

Invers memenuhi $AA^{-1} = A^{-1}A = I$. Periksa entri pertama hasil kali $AA^{-1}$:
$$3 \\cdot \\tfrac{2}{5} + 1 \\cdot \\left(-\\tfrac{1}{5}\\right) = \\tfrac{6}{5} - \\tfrac{1}{5} = 1.$$

**Menyelesaikan SPLDV dengan matriks.** Sistem persamaan linear dua variabel dapat ditulis dalam bentuk matriks. Sistem
$$\\begin{cases} ax + by = c \\\\ dx + ey = f \\end{cases}$$
setara dengan
$$\\begin{pmatrix} a & b \\\\ d & e \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} c \\\\ f \\end{pmatrix}.$$
Jika $A = \\begin{pmatrix} a & b \\\\ d & e \\end{pmatrix}$ dan $\\det(A) \\neq 0$, penyelesaiannya adalah
$$\\begin{pmatrix} x \\\\ y \\end{pmatrix} = A^{-1} \\begin{pmatrix} c \\\\ f \\end{pmatrix}.$$
Mari selesaikan $2x + 3y = 8$ dan $x + 2y = 5$. Di sini $A = \\begin{pmatrix} 2 & 3 \\\\ 1 & 2 \\end{pmatrix}$ dengan $\\det(A) = 2(2) - 3(1) = 1$, sehingga $A^{-1} = \\begin{pmatrix} 2 & -3 \\\\ -1 & 2 \\end{pmatrix}$, dan
$$\\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 2 & -3 \\\\ -1 & 2 \\end{pmatrix} \\begin{pmatrix} 8 \\\\ 5 \\end{pmatrix} = \\begin{pmatrix} 16 - 15 \\\\ -8 + 10 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}.$$
Jadi $x=1$ dan $y=2$. Periksa: $2(1)+3(2)=8$ dan $1+2(2)=5$. Benar.`,
      blocks: [
        {
          kind: "callout",
          variant: "warning",
          title: "Periksa determinan lebih dahulu",
          text: "Matriks singular (determinan nol) tidak punya invers. Selalu periksa $\\det(A) \\neq 0$ sebelum menghitung $A^{-1}$.",
        },
        {
          kind: "figure",
          alt: "Bentuk matriks sistem persamaan linear dua variabel: matriks koefisien A berukuran 2 kali 2 dikalikan vektor variabel x menghasilkan vektor konstanta b.",
          caption: "Sistem $Ax = b$: matriks koefisien $A$ dikalikan vektor variabel $x$ menghasilkan vektor konstanta $b$. Jika $\\det(A) \\neq 0$, penyelesaiannya $x = A^{-1}b$.",
          svg: '<svg viewBox="0 0 320 200" aria-hidden="true" role="presentation"><g fill="none" stroke="currentColor"><rect x="30" y="70" width="70" height="60" stroke-width="2"/><line x1="65" y1="70" x2="65" y2="130"/><line x1="30" y1="100" x2="100" y2="100"/><rect x="130" y="80" width="40" height="40" stroke-width="2"/><line x1="130" y1="100" x2="170" y2="100"/><rect x="210" y="80" width="40" height="40" stroke-width="2"/><line x1="210" y1="100" x2="250" y2="100"/></g><text x="65" y="64" font-size="13" fill="currentColor" text-anchor="middle">A</text><text x="150" y="74" font-size="13" fill="currentColor" text-anchor="middle">x</text><text x="230" y="74" font-size="13" fill="currentColor" text-anchor="middle">b</text><text x="115" y="105" font-size="13" fill="currentColor" text-anchor="middle">\u00d7</text><text x="190" y="105" font-size="13" fill="currentColor" text-anchor="middle">=</text><text x="65" y="158" font-size="11" fill="currentColor" text-anchor="middle">2 \u00d7 2 koefisien</text><text x="150" y="150" font-size="11" fill="currentColor" text-anchor="middle">2 \u00d7 1 variabel</text><text x="230" y="150" font-size="11" fill="currentColor" text-anchor="middle">2 \u00d7 1 konstanta</text></svg>',
        },
      ],
    },
    {
      id: "eksplorasi",
      kind: "eksplorasi",
      title: "Eksplorasi",
      body: "Ubah susunan dan operasi matriks untuk melihat bagaimana hasilnya berubah.",
      blocks: [
        {
          kind: "exploration",
          explorationId: "matriks-transformasi",
        },
      ],
    },
    {
      id: "eksplorasi-invers-determinan",
      kind: "eksplorasi",
      title: "Eksplorasi Determinan dan Invers",
      body: `Setelah melihat bagaimana operasi mengubah susunan matriks, sekarang fokus pada satu bilangan yang menentukan banyak hal. Ubah unsur matriks dan amati nilai determinannya. Ketika determinan mencapai nol, rumus invers kehilangan arti karena pembaginya nol. Catat kapan invers masih ada dan mengapa keberadaannya bergantung pada determinan.`,
      blocks: [
        {
          kind: "exploration",
          explorationId: "matriks-invers-determinan",
        },
      ],
    },
    {
      id: "generalisasi",
      kind: "generalisasi",
      title: "Determinan sebagai Penentu",
      body: `Dari seluruh operasi di atas, satu bilangan ternyata mengendalikan banyak hal, yaitu **determinan**. Untuk matriks $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$ berlaku $\\det(A) = ad - bc$.

Nilai nol atau tidaknya determinan memisahkan dua kemungkinan. Jika $\\det(A) \\neq 0$, matriks **tak singular**, memiliki invers

$$A^{-1} = \\frac{1}{\\det(A)}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix},$$

dan sistem $A\\mathbf{x} = \\mathbf{b}$ memiliki penyelesaian tunggal $\\mathbf{x} = A^{-1}\\mathbf{b}$. Jika $\\det(A) = 0$, matriks singular, invers tidak ada, dan sistem tidak memiliki penyelesaian tunggal. Memeriksa determinan lebih dahulu menghemat langkah sekaligus menghindari pembagian oleh nol.`,
      blocks: [
        {
          kind: "figure",
          alt: "Persegi satuan dengan garis putus-putus dipetakan oleh matriks menjadi jajar genjang dengan titik sudut (0,0), (3,1), (4,3), dan (1,2). Luas jajar genjang itu lima satuan, sama dengan nilai mutlak determinan matriks.",
          caption: "Matriks $A=\\begin{pmatrix}3&1\\\\1&2\\end{pmatrix}$ memetakan persegi satuan (garis putus-putus) ke jajar genjang beralas vektor $(3,1)$ dan $(1,2)$. Luasnya $|\\det A|=|6-1|=5$, sehingga determinan mengukur faktor skala luas.",
          svg: '<svg viewBox="0 0 320 240" aria-hidden="true" role="presentation"><line x1="25" y1="190" x2="300" y2="190" stroke="currentColor" stroke-width="1.3"/><line x1="55" y1="210" x2="55" y2="18" stroke="currentColor" stroke-width="1.3"/><polygon points="55,190 93,190 93,152 55,152" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/><polygon points="55,190 169,152 207,76 93,114" fill="currentColor" opacity="0.16"/><polygon points="55,190 169,152 207,76 93,114" fill="none" stroke="currentColor" stroke-width="2"/><line x1="55" y1="190" x2="169" y2="152" stroke="currentColor" stroke-width="1.6"/><line x1="55" y1="190" x2="93" y2="114" stroke="currentColor" stroke-width="1.6"/><circle cx="169" cy="152" r="2.8" fill="currentColor"/><circle cx="93" cy="114" r="2.8" fill="currentColor"/><circle cx="207" cy="76" r="2.8" fill="currentColor"/><text x="174" y="148" font-size="10" fill="currentColor">(3,1)</text><text x="66" y="110" font-size="10" fill="currentColor">(1,2)</text><text x="212" y="72" font-size="10" fill="currentColor">(4,3)</text><text x="72" y="184" font-size="10" fill="currentColor">1</text><text x="98" y="146" font-size="10" fill="currentColor">satuan</text><text x="150" y="224" font-size="11" fill="currentColor">luas = |det A| = 5</text><text x="294" y="206" font-size="11" fill="currentColor">x</text><text x="62" y="26" font-size="11" fill="currentColor">y</text></svg>',
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
              text: `Diketahui $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 2 & 0 \\\\ 1 & 3 \\end{pmatrix}$. Hitunglah $3A - B$.

*Penyelesaian.*
$$3A = \\begin{pmatrix} 3 & 6 \\\\ 9 & 12 \\end{pmatrix}, \\quad 3A - B = \\begin{pmatrix} 3-2 & 6-0 \\\\ 9-1 & 12-3 \\end{pmatrix} = \\begin{pmatrix} 1 & 6 \\\\ 8 & 9 \\end{pmatrix}.$$`,
            },
            {
              title: "Contoh 2",
              text: `Hitunglah determinan $C = \\begin{pmatrix} 2 & 1 & 3 \\\\ 0 & 4 & 1 \\\\ 1 & 2 & 0 \\end{pmatrix}$.

*Penyelesaian.* Ekspansi baris pertama:
$$\\det(C) = 2(4 \\cdot 0 - 1 \\cdot 2) - 1(0 \\cdot 0 - 1 \\cdot 1) + 3(0 \\cdot 2 - 4 \\cdot 1)$$
$$= 2(-2) - 1(-1) + 3(-4) = -4 + 1 - 12 = -15.$$`,
            },
            {
              title: "Contoh 3",
              text: `Selesaikan $2x + y = 7$ dan $x + 3y = 11$ dengan matriks.

*Penyelesaian.* $A = \\begin{pmatrix} 2 & 1 \\\\ 1 & 3 \\end{pmatrix}$ dengan $\\det(A) = 2(3) - 1(1) = 5$, maka
$$A^{-1} = \\frac{1}{5}\\begin{pmatrix} 3 & -1 \\\\ -1 & 2 \\end{pmatrix}.$$
$$\\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\frac{1}{5}\\begin{pmatrix} 3 & -1 \\\\ -1 & 2 \\end{pmatrix}\\begin{pmatrix} 7 \\\\ 11 \\end{pmatrix} = \\frac{1}{5}\\begin{pmatrix} 21 - 11 \\\\ -7 + 22 \\end{pmatrix} = \\frac{1}{5}\\begin{pmatrix} 10 \\\\ 15 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}.$$
Jadi $x=2$ dan $y=3$. Periksa: $2(2)+3=7$ dan $2+3(3)=11$. Benar.`,
            },
          ],
        },
        {
          kind: "details",
          summary: "Coba sendiri: invers dengan determinan negatif",
          text: `Diketahui $A=\\begin{pmatrix}4&2\\\\3&1\\end{pmatrix}$. Tentukan $A^{-1}$, lalu selesaikan $4x+2y=10$ dan $3x+y=7$.

*Penyelesaian.* $\\det(A)=4(1)-2(3)=-2$. Karena determinan tidak nol,
$$A^{-1}=\\frac{1}{-2}\\begin{pmatrix}1&-2\\\\-3&4\\end{pmatrix}=\\begin{pmatrix}-\\tfrac12&1\\\\\\tfrac32&-2\\end{pmatrix}.$$
Maka
$$\\begin{pmatrix}x\\\\y\\end{pmatrix}=A^{-1}\\begin{pmatrix}10\\\\7\\end{pmatrix}=\\begin{pmatrix}-5+7\\\\15-14\\end{pmatrix}=\\begin{pmatrix}2\\\\1\\end{pmatrix}.$$
Periksa: $4(2)+2(1)=10$ dan $3(2)+1=7$. Jadi $x=2$ dan $y=1$.`,
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
      body: `Matriks dipakai untuk menyusun dan mengolah data berdimensi banyak. Sebuah kios mencatat penjualan dua jenis kue selama Senin dan Selasa dalam matriks
$$S = \\begin{pmatrix} 3 & 4 \\\\ 5 & 2 \\end{pmatrix},$$
dengan baris menyatakan hari dan kolom menyatakan jenis kue. Total tiap jenis kue adalah jumlah kolom, yaitu kue A $3+5=8$ dan kue B $4+2=6$. Bila harga kue A Rp5.000 dan kue B Rp8.000, pendapatan tiap hari diperoleh dari
$$S\\begin{pmatrix} 5000 \\\\ 8000 \\end{pmatrix} = \\begin{pmatrix} 3(5000)+4(8000) \\\\ 5(5000)+2(8000) \\end{pmatrix} = \\begin{pmatrix} 47000 \\\\ 41000 \\end{pmatrix},$$
yaitu Rp47.000 pada Senin dan Rp41.000 pada Selasa, dengan total Rp88.000. Dalam ekonomi, matriks serupa dipakai untuk menganalisis keterkaitan antar sektor, dan penyelesaian sistem persamaan besar pada rekayasa bertumpu pada invers matriks.
Untuk penggunaan matriks dalam transformasi geometri seperti rotasi, refleksi, dan dilatasi, lihat topik **Matriks Transformasi** dan **Transformasi Geometri**; topik ini fokus pada operasi dan determinan.`,
    },
    {
      id: "kesalahan-umum",
      kind: "kesalahan-umum",
      title: "Kesalahan Umum",
      body: `**1. Menjumlahkan matriks berbeda ordo.** Penjumlahan hanya sah bila ordonya sama.
**2. Menganggap perkalian matriks komutatif.** Untuk $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 2 & 0 \\\\ 1 & 3 \\end{pmatrix}$, $AB \\neq BA$.
**3. Salah urutan entri pada invers $2 \\times 2$.** Rumusnya $\\dfrac{1}{\\det(A)}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$; entri $a$ dan $d$ bertukar posisi, sedangkan $b$ dan $c$ berganti tanda.
**4. Menghitung invers matriks singular.** Matriks dengan determinan nol tidak memiliki invers; periksa $\\det(A) \\neq 0$ lebih dahulu.`,
      blocks: [
        {
          kind: "spot-mistake",
          intro: "Perhatikan perhitungan $\\det\\begin{pmatrix} 3 & 1 \\\\ 2 & 4 \\end{pmatrix}$. Ada satu langkah yang keliru. Klik langkah itu.",
          steps: [
            "Tuliskan rumus determinan $2\\times2$: $\\det\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc$.",
            "Substitusi nilai: $a=3$, $b=1$, $c=2$, $d=4$.",
            "Hitung: $3 \\cdot 4 + 1 \\cdot 2 = 12 + 2 = 14$.",
            "Simpulkan $\\det\\begin{pmatrix} 3 & 1 \\\\ 2 & 4 \\end{pmatrix} = 14$.",
          ],
          wrongIndex: 2,
          explanation: "Langkah ketiga keliru. Rumusnya $ad - bc$, sehingga $3 \\cdot 4 - 1 \\cdot 2 = 12 - 2 = 10$, bukan jumlah kedua hasil kali.",
        },
      ],
    },
    {
      id: "tantangan",
      kind: "tantangan",
      title: "Pangkat Tinggi dan Invers lewat Cayley-Hamilton",
      body: `**Soal.** Diketahui matriks $A = \\begin{pmatrix} 0 & 1 \\\\ -2 & 3 \\end{pmatrix}$. (a) Tunjukkan bahwa $A^{2} - 3A + 2I = O$ dengan $I$ matriks identitas dan $O$ matriks nol. (b) Gunakan hubungan itu untuk menghitung $A^{3}$ tanpa mengalikan $A$ tiga kali berturut-turut. (c) Tentukan $A^{-1}$ dari hubungan yang sama.`,
      blocks: [
        {
          kind: "step-reveal",
          intro: "Susun kuadrat matriks, cocokkan dengan kelipatan $A$ dan $I$, lalu pakai hubungan itu untuk pangkat tiga dan invers.",
          steps: [
            {
              title: "Hitung $A^{2}$",
              text: "Kalikan $A$ dengan dirinya sendiri: $A^{2} = \\begin{pmatrix} 0 & 1 \\\\ -2 & 3 \\end{pmatrix}\\begin{pmatrix} 0 & 1 \\\\ -2 & 3 \\end{pmatrix} = \\begin{pmatrix} -2 & 3 \\\\ -6 & 7 \\end{pmatrix}$.",
            },
            {
              title: "Bentuk identitas Cayley-Hamilton",
              text: "Trace $\\operatorname{tr}(A)=0+3=3$ dan determinan $\\det(A)=0(3)-1(-2)=2$, sehingga $A^{2}-3A+2I=O$. Periksa: $3A-2I = \\begin{pmatrix} 0 & 3 \\\\ -6 & 9 \\end{pmatrix} - \\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix} = \\begin{pmatrix} -2 & 3 \\\\ -6 & 7 \\end{pmatrix} = A^{2}$.",
            },
            {
              title: "Turunkan $A^{3}$",
              text: "Dari $A^{2}=3A-2I$ diperoleh $A^{3}=A\\cdot A^{2}=A(3A-2I)=3A^{2}-2A=3(3A-2I)-2A=7A-6I=\\begin{pmatrix} 0 & 7 \\\\ -14 & 21 \\end{pmatrix}-\\begin{pmatrix} 6 & 0 \\\\ 0 & 6 \\end{pmatrix}=\\begin{pmatrix} -6 & 7 \\\\ -14 & 15 \\end{pmatrix}$. Periksa dengan perkalian langsung: $A^{2}A=\\begin{pmatrix} -2 & 3 \\\\ -6 & 7 \\end{pmatrix}\\begin{pmatrix} 0 & 1 \\\\ -2 & 3 \\end{pmatrix}=\\begin{pmatrix} -6 & 7 \\\\ -14 & 15 \\end{pmatrix}$.",
            },
            {
              title: "Tentukan $A^{-1}$",
              text: "Kalikan $A^{2}-3A+2I=O$ dengan $A^{-1}$ dari kiri: $A-3I+2A^{-1}=O$, sehingga $A^{-1}=\\tfrac{1}{2}(3I-A)=\\tfrac{1}{2}\\begin{pmatrix} 3 & -1 \\\\ 2 & 0 \\end{pmatrix}=\\begin{pmatrix} \\tfrac{3}{2} & -\\tfrac{1}{2} \\\\ 1 & 0 \\end{pmatrix}$. Cocok dengan rumus invers $\\dfrac{1}{\\det A}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$.",
            },
          ],
        },
      ],
    },
    {
      id: "sejarah",
      kind: "sejarah",
      title: "Dari Tabel Koefisien ke Aljabar Cayley",
      body: `Menyusun bilangan dalam baris dan kolom sebenarnya bukan gagasan baru. Buku matematika Tiongkok *Sembilan Bab Seni Berhitung* (sekitar abad ke-1 M) memuat tabel koefisien untuk menyelesaikan sistem persamaan linear dengan cara yang menyerupai eliminasi Gauss. Namun istilah dan aljabarnya baru dibentuk pada abad ke-19. James Joseph Sylvester pada 1850 menciptakan istilah **matriks** dari bahasa Latin *mater* ("ibu"), karena tabel itu melahirkan determinan. Arthur Cayley, dalam *A Memoir on the Theory of Matrices* (1858), memperkenalkan notasi satu huruf untuk matriks, mendefinisikan penjumlahan dan perkalian, matriks identitas, serta invers, lalu menunjukkan bahwa $AB$ umumnya tidak sama dengan $BA$.

Determinan ditemukan lebih dahulu: Seki Kowa (1683) di Jepang dan Gottfried Leibniz (1693) menurunkannya ketika menyelesaikan sistem persamaan, lalu Gabriel Cramer merumuskan aturan yang kini menyandang namanya pada 1750. Cayley menjalin keduanya menjadi aljabar tersendiri dan mengaitkannya dengan transformasi geometri. Dari sana matriks menjadi bahasa baku untuk menyelesaikan sistem persamaan linear secara ringkas: apa yang dahulu dikerjakan satu per satu dengan substitusi atau eliminasi, kini dapat dituliskan sebagai $AX = B$ dan diselesaikan dengan $X = A^{-1}B$. Notasi baris-kolom dan ordo yang kita pakai adalah penyempurnaan pada abad ke-20 atas gagasan Cayley.`,
      blocks: [
        {
          kind: "table",
          caption: "Tokoh kunci dalam perkembangan matriks",
          headers: [
            "Tokoh",
            "Sumbangan",
          ],
          rows: [
            [
              "Seki Kowa (1683)",
              "Menemukan determinan dari penyelesaian sistem persamaan.",
            ],
            [
              "Gottfried Leibniz (1693)",
              "Merumuskan determinan secara independen.",
            ],
            [
              "Gabriel Cramer (1750)",
              "Merumuskan aturan Cramer.",
            ],
            [
              "James Joseph Sylvester (1850)",
              "Menciptakan istilah *matriks*.",
            ],
            [
              "Arthur Cayley (1858)",
              "Membangun aljabar matriks, termasuk perkalian dan invers.",
            ],
          ],
        },
        {
          kind: "callout",
          variant: "concept",
          title: "Mengapa perkalian tidak komutatif",
          text: "Cayley menyadari bahwa $AB$ dan $BA$ umumnya berbeda. Sifat yang tampak \"aneh\" ini penting, sebab selain menyimpan data, matriks juga mewakili transformasi yang urutannya menentukan hasil.",
        },
      ],
    },
    {
      id: "refleksi",
      kind: "refleksi",
      title: "Refleksi",
      body: "Tinjau kembali bagaimana satu susunan bilangan dapat mewakili data sekaligus menyelesaikan sistem persamaan.",
      blocks: [
        {
          kind: "reflection",
          prompts: [
            "Apakah operasi matriks selalu komutatif? Berikan satu contoh untuk mendukung jawabanmu.",
            "Mengapa determinan penting sebelum menghitung invers?",
            "Bagaimana matriks membantumu menyelesaikan SPLDV dibandingkan cara substitusi atau eliminasi?",
          ],
          confidenceLabel: "Seberapa yakin kamu pada operasi, determinan, dan invers matriks?",
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
          caption: "Ringkasan operasi, determinan, dan invers matriks yang dipakai menyelesaikan SPLDV.",
          headers: [
            "Konsep",
            "Bentuk / Rumus",
          ],
          rows: [
            [
              "Ordo matriks",
              "banyak baris $\\times$ banyak kolom",
            ],
            [
              "Kesamaan matriks",
              "ordo sama dan entri bersesuaian sama",
            ],
            [
              "Penjumlahan / pengurangan",
              "harus berordo sama",
            ],
            [
              "Perkalian skalar",
              "setiap entri dikalikan $k$",
            ],
            [
              "Perkalian matriks",
              "kolom $A$ = baris $B$; umumnya tidak komutatif",
            ],
            [
              "Determinan $2 \\times 2$",
              "$\\det \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc$",
            ],
            [
              "Invers $2 \\times 2$",
              "$\\dfrac{1}{ad-bc}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$",
            ],
            [
              "SPLDV",
              "$AX = B \\Rightarrow X = A^{-1}B$",
            ],
          ],
        },
        {
          kind: "callout",
          variant: "concept",
          title: "Satu bilangan, banyak keputusan",
          text: "Determinan adalah saklar utama topik ini. Selama nilainya tidak nol, matriks dapat dibalik dan sistem punya penyelesaian tunggal; begitu nilainya nol, invers lenyap dan informasi tidak cukup untuk kembali ke jawaban semula. Peran yang sama muncul di topik **Matriks Transformasi**, tempat determinan menentukan apakah transformasi mempertahankan luas, menyusutkan, atau meruntuhkan bidang menjadi garis.",
        },
      ],
    },
    {
      id: "evaluasi",
      kind: "evaluasi",
      title: "Evaluasi",
      questionIds: ['mt-09'],
      body: `**Cek pemahaman.** (1) Mengapa ordo kedua matriks harus sama agar penjumlahannya terdefinisi? (2) Mengapa nilai determinan menentukan apakah sebuah matriks memiliki invers? Setelah menjawab, lanjutkan ke [Latihan & Asesmen](/latihan) topik **Matriks** untuk latihan tambahan.`,
    },
  ],
};
