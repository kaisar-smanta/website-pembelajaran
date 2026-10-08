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
    'Pengayaan: CP menyebut matriks terutama sebagai penyajian data (Fase E), sedangkan aljabar matriks di sini melampaui tuntutan itu.',
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
  explorations: [
    "matriks-transformasi",
  ],
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
      body: `Sebelum melanjutkan, pastikan kamu menguasai:
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

Sebagai contoh, $2A = \\begin{pmatrix} 2 & 4 \\\\ 6 & 8 \\end{pmatrix}$.

**Perkalian matriks.** Hasil kali $AB$ terdefinisi jika banyak kolom $A$ sama dengan banyak baris $B$. Jika $A$ berordo $m \\times n$ dan $B$ berordo $n \\times p$, maka $AB$ berordo $m \\times p$. Entri hasil kali pada baris ke-$i$ dan kolom ke-$j$ diperoleh dengan mengalikan entri baris ke-$i$ dari $A$ dengan entri kolom ke-$j$ dari $B$, lalu menjumlahkannya.

$$AB = \\begin{pmatrix} 1(2)+2(1) & 1(0)+2(3) \\\\ 3(2)+4(1) & 3(0)+4(3) \\end{pmatrix} = \\begin{pmatrix} 4 & 6 \\\\ 10 & 12 \\end{pmatrix}.$$

Sebaliknya,
$$BA = \\begin{pmatrix} 2(1)+0(3) & 2(2)+0(4) \\\\ 1(1)+3(3) & 1(2)+3(4) \\end{pmatrix} = \\begin{pmatrix} 2 & 4 \\\\ 10 & 14 \\end{pmatrix}.$$

Karena $AB \\neq BA$, perkalian matriks **tidak komutatif**. Perhatikan juga bahwa $A$ dikalikan matriks identitas menghasilkan $AI = IA = A$.`,
      blocks: [
        {
          kind: "callout",
          variant: "warning",
          title: "Hati-hati",
          text: "Penjumlahan matriks menuntut ordo yang sama. Matriks $2 \\times 3$ tidak dapat dijumlahkan dengan matriks $3 \\times 2$.",
        },
      ],
    },
    {
      id: "determinan",
      kind: "rumus",
      title: "Determinan Matriks",
      body: `Determinan adalah sebuah bilangan yang dihitung dari suatu matriks persegi dan memberi informasi penting, misalnya apakah matriks itu dapat dibalik.

**Determinan $2 \\times 2$.** Untuk $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$:

$$\\det(A) = ad - bc.$$

Sebagai contoh, untuk $A = \\begin{pmatrix} 3 & 1 \\\\ 2 & 4 \\end{pmatrix}$ diperoleh $\\det(A) = 3(4) - 1(2) = 10$.

**Determinan $3 \\times 3$.** Determinan dihitung dengan **ekspansi baris atau kolom**. Untuk baris pertama:

$$\\det \\begin{pmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i \\end{pmatrix} = a(ei - fh) - b(di - fg) + c(dh - eg).$$

Tanda bergantian $+$, $-$, $+$. Kita juga boleh mengekspansi kolom mana pun selama tanda mengikuti pola $(-1)^{i+j}$.

Sebagai contoh, untuk $B = \\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 4 \\\\ 5 & 6 & 0 \\end{pmatrix}$, ekspansi baris pertama memberi
$$\\det(B) = 1(1 \\cdot 0 - 4 \\cdot 6) - 2(0 \\cdot 0 - 4 \\cdot 5) + 3(0 \\cdot 6 - 1 \\cdot 5)$$
$$= 1(-24) - 2(-20) + 3(-5) = -24 + 40 - 15 = 1.$$`,
    },
    {
      id: "invers",
      kind: "konsep",
      title: "Matriks Singular, Invers, dan SPLDV",
      body: `Suatu matriks persegi dikatakan **singular** jika determinannya nol. Matriks singular tidak memiliki invers. Sebagai contoh, $C = \\begin{pmatrix} 2 & 4 \\\\ 1 & 2 \\end{pmatrix}$ memiliki $\\det(C) = 2(2) - 4(1) = 0$, sehingga $C$ singular.

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
Sebagai contoh, selesaikan $2x + 3y = 8$ dan $x + 2y = 5$. Di sini $A = \\begin{pmatrix} 2 & 3 \\\\ 1 & 2 \\end{pmatrix}$ dengan $\\det(A) = 2(2) - 3(1) = 1$, sehingga $A^{-1} = \\begin{pmatrix} 2 & -3 \\\\ -1 & 2 \\end{pmatrix}$, dan
$$\\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 2 & -3 \\\\ -1 & 2 \\end{pmatrix} \\begin{pmatrix} 8 \\\\ 5 \\end{pmatrix} = \\begin{pmatrix} 16 - 15 \\\\ -8 + 10 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}.$$
Jadi $x=1$ dan $y=2$. Periksa: $2(1)+3(2)=8$ dan $1+2(2)=5$. Benar.`,
      blocks: [
        {
          kind: "callout",
          variant: "warning",
          title: "Hati-hati",
          text: "Matriks singular (determinan nol) tidak punya invers. Selalu periksa $\\det(A) \\neq 0$ sebelum menghitung $A^{-1}$.",
        },
      ],
    },
    {
      id: "eksplorasi",
      kind: "eksplorasi",
      title: "Eksplorasi",
      body: "Gunakan simulasi interaktif berikut untuk menguji dugaanmu dan melihat polanya sendiri.",
      blocks: [
        {
          kind: "exploration",
          explorationId: "matriks-transformasi",
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
      ],
    },
    {
      id: "latihan-dasar",
      kind: "latihan-dasar",
      title: "Latihan Dasar",
      level: "dasar",
      body: `1. Tentukan ordo matriks $\\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{pmatrix}$.
2. Diketahui $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 0 & 1 \\\\ 2 & 1 \\end{pmatrix}$. Hitunglah $A+B$.
3. Hitunglah $\\det \\begin{pmatrix} 4 & 2 \\\\ 1 & 3 \\end{pmatrix}$.
4. Hitunglah hasil kali $\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}\\begin{pmatrix} 5 & 6 \\\\ 7 & 8 \\end{pmatrix}$.`,
      blocks: [
        {
          kind: "details",
          summary: "Lihat kunci dan pembahasan",
          text: `1. Matriks itu memiliki $2$ baris dan $3$ kolom, jadi ordonya $2 \\times 3$.
2. $A+B = \\begin{pmatrix} 1+0 & 2+1 \\\\ 3+2 & 4+1 \\end{pmatrix} = \\begin{pmatrix} 1 & 3 \\\\ 5 & 5 \\end{pmatrix}$.
3. $\\det = 4(3) - 2(1) = 12 - 2 = 10$.
4. Karena perkalian dengan matriks identitas, hasilnya tetap $\\begin{pmatrix} 5 & 6 \\\\ 7 & 8 \\end{pmatrix}$.`,
        },
      ],
    },
    {
      id: "latihan-cakap",
      kind: "latihan-cakap",
      title: "Latihan Cakap",
      level: "cakap",
      body: `1. Hitunglah $\\det \\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 4 \\\\ 5 & 6 & 0 \\end{pmatrix}$.
2. Tentukan invers dari $A = \\begin{pmatrix} 3 & 1 \\\\ 2 & 4 \\end{pmatrix}$.
3. Diketahui $\\begin{pmatrix} x & 2 \\\\ 3 & y \\end{pmatrix} = \\begin{pmatrix} 1 & 2 \\\\ 3 & 5 \\end{pmatrix}$. Tentukan $x$ dan $y$.
4. Selesaikan $2x + 3y = 8$ dan $x + 2y = 5$ dengan matriks.`,
      blocks: [
        {
          kind: "details",
          summary: "Lihat kunci dan pembahasan",
          text: `1. Ekspansi baris pertama: $1(1 \\cdot 0 - 4 \\cdot 6) - 2(0 \\cdot 0 - 4 \\cdot 5) + 3(0 \\cdot 6 - 1 \\cdot 5) = -24 + 40 - 15 = 1$.
2. $\\det(A) = 3(4) - 1(2) = 10$, maka $A^{-1} = \\dfrac{1}{10}\\begin{pmatrix} 4 & -1 \\\\ -2 & 3 \\end{pmatrix} = \\begin{pmatrix} \\tfrac{2}{5} & -\\tfrac{1}{10} \\\\ -\\tfrac{1}{5} & \\tfrac{3}{10} \\end{pmatrix}$.
3. Dari kesamaan entri: $x=1$ dan $y=5$.
4. $\\det = 2(2) - 3(1) = 1$, $A^{-1} = \\begin{pmatrix} 2 & -3 \\\\ -1 & 2 \\end{pmatrix}$, sehingga $\\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 2 & -3 \\\\ -1 & 2 \\end{pmatrix}\\begin{pmatrix} 8 \\\\ 5 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$. Jadi $x=1$, $y=2$.`,
        },
      ],
    },
    {
      id: "latihan-mahir",
      kind: "latihan-mahir",
      title: "Latihan Mahir",
      level: "mahir",
      body: `1. Tentukan nilai $x$ agar matriks $\\begin{pmatrix} x & 2 \\\\ 2 & x \\end{pmatrix}$ singular.
2. Diketahui $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 2 & 0 \\\\ 1 & 3 \\end{pmatrix}$. Tunjukkan bahwa $(AB)^{T} = B^{T}A^{T}$.
3. Dengan aturan Cramer, tentukan $x$ dan $y$ dari $2x + 3y = 8$ dan $x + 2y = 5$.`,
      blocks: [
        {
          kind: "details",
          summary: "Lihat pembahasan",
          text: `1. Matriks singular bila determinannya nol: $x \\cdot x - 2 \\cdot 2 = x^{2} - 4 = 0$, sehingga $x = 2$ atau $x = -2$.
2. Dari Contoh sebelumnya, $AB = \\begin{pmatrix} 4 & 6 \\\\ 10 & 12 \\end{pmatrix}$ sehingga $(AB)^{T} = \\begin{pmatrix} 4 & 10 \\\\ 6 & 12 \\end{pmatrix}$. Sementara $B^{T} = \\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix}$ dan $A^{T} = \\begin{pmatrix} 1 & 3 \\\\ 2 & 4 \\end{pmatrix}$, sehingga $B^{T}A^{T} = \\begin{pmatrix} 2(1)+1(2) & 2(3)+1(4) \\\\ 0(1)+3(2) & 0(3)+3(4) \\end{pmatrix} = \\begin{pmatrix} 4 & 10 \\\\ 6 & 12 \\end{pmatrix}$. Keduanya sama.
3. $D = 2(2) - 1(3) = 1$; $D_{x} = 8(2) - 5(3) = 1$; $D_{y} = 2(5) - 1(8) = 2$. Maka $x = \\dfrac{D_{x}}{D} = 1$ dan $y = \\dfrac{D_{y}}{D} = 2$.`,
        },
      ],
    },
    {
      id: "dunia-nyata",
      kind: "dunia-nyata",
      title: "Penerapan di Dunia Nyata",
      body: `Matriks dipakai untuk menyusun dan mengolah data berdimensi banyak, misalnya tabel penjualan beberapa toko atau nilai siswa pada beberapa mata pelajaran. Dengan operasi matriks, total dan rata-rata dapat dihitung serentak.
Dalam grafika komputer, matriks mentransformasi posisi titik sehingga gambar dapat digeser, diputar, dan diperbesar. Dalam ekonomi, matriks digunakan untuk menganalisis keterkaitan antar sektor. Penyelesaian sistem persamaan besar pada rekayasa juga bertumpu pada invers dan eliminasi matriks.`,
    },
    {
      id: "kesalahan-umum",
      kind: "kesalahan-umum",
      title: "Kesalahan Umum",
      body: `**1. Menjumlahkan matriks berbeda ordo.** Penjumlahan hanya sah bila ordonya sama.
**2. Menganggap perkalian matriks komutatif.** Untuk $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 2 & 0 \\\\ 1 & 3 \\end{pmatrix}$, $AB \\neq BA$.
**3. Salah urutan entri pada invers $2 \\times 2$.** Rumusnya $\\dfrac{1}{\\det(A)}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$; entri $a$ dan $d$ bertukar posisi, sedangkan $b$ dan $c$ berganti tanda.
**4. Menghitung invers matriks singular.** Matriks dengan determinan nol tidak memiliki invers; periksa $\\det(A) \\neq 0$ lebih dahulu.`,
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
            "Apakah operasi matriks selalu komutatif? Berikan satu contoh untuk mendukung jawabanmu.",
            "Mengapa determinan penting sebelum menghitung invers?",
            "Bagaimana matriks membantumu menyelesaikan SPLDV dibandingkan cara substitusi atau eliminasi?",
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
      ],
    },
    {
      id: "evaluasi",
      kind: "evaluasi",
      title: "Evaluasi",
      body: `Kerjakan kuis topik ini untuk memeriksa pemahamanmu. Buka halaman [Latihan & Asesmen](/latihan) lalu pilih topik **Matriks**.
`,
    },
  ],
};
