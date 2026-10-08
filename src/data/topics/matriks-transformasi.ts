import type { Topic } from '@/types/content';

export const matriksTransformasi: Topic = {
  id: 'matriks-transformasi',
  slug: 'matriks-transformasi',
  title: 'Matriks Transformasi',
  subtitle: 'Memindahkan dan mengubah bangun geometri dengan matriks',
  grade: 'XI',
  phase: 'F',
  element: 'aljabar-fungsi',
  subject: 'matematika-lanjut',
  status: 'lengkap',
  estimatedMinutes: 100,
  summary:
    'Meninjau operasi matriks, menghitung determinan dan invers, lalu memakai matriks untuk translasi, refleksi, rotasi, dilatasi, dan komposisi transformasi geometri.',
  description:
    'Matriks tidak hanya menyajikan data, tetapi juga mengubah posisi titik pada bidang. Topik ini meninjau kembali operasi aljabar matriks, determinan, dan invers $2 \\times 2$, kemudian menggunakannya untuk merumuskan translasi, refleksi, rotasi, dan dilatasi. Determinan dibaca sebagai faktor skala luas, sedangkan perkalian matriks mewakili komposisi transformasi. Pemahaman ini menjadi dasar grafika komputer, animasi, dan robotika.',
  keywords: [
    'matriks transformasi',
    'translasi',
    'refleksi',
    'rotasi',
    'dilatasi',
    'komposisi transformasi',
    'determinan',
    'invers matriks',
  ],
  prerequisites: ['matriks'],
  relatedTopics: ['transformasi-fungsi', 'vektor'],
  prerequisiteKnowledge: [
    'Notasi matriks, ordo, dan operasi matriks',
    'Determinan dan invers matriks $2 \\times 2$',
    'Koordinat titik pada bidang Cartesius',
  ],
  objectives: [
    { text: 'Peserta didik dapat meninjau kembali operasi aljabar matriks, determinan, dan invers.' },
    { text: 'Peserta didik dapat menyatakan translasi dan refleksi dengan matriks.' },
    { text: 'Peserta didik dapat menentukan bayangan titik oleh rotasi dan dilatasi.' },
    { text: 'Peserta didik dapat menghitung komposisi transformasi menggunakan perkalian matriks.' },
    { text: 'Peserta didik dapat menafsirkan determinan sebagai faktor skala luas.' },
  ],
  applications: ['mtl-transformasi-citra'],
  sections: [
    {
      id: "tujuan",
      kind: "tujuan",
      title: "Tujuan Pembelajaran",
      body: "Setelah mempelajari topik ini, peserta didik dapat melakukan operasi aljabar matriks, menghitung determinan dan invers, serta menerapkan matriks untuk translasi, refleksi, rotasi, dilatasi, dan komposisinya dalam menyelesaikan masalah geometri.",
    },
    {
      id: "pemantik",
      kind: "pemantik",
      title: "Pertanyaan Pemantik",
      blocks: [
        {
          kind: "prediction",
          prompt: `Sebuah gambar pada layar komputer dapat diputar, digeser, dan diperbesar. Ternyata ketiga operasi itu dapat dilakukan hanya dengan mengalikan koordinat setiap titik dengan sebuah matriks.

Pertanyaannya: matriks seperti apa yang memutar gambar $90^\\circ$, dan bagaimana hasilnya jika dua transformasi dikerjakan berurutan?`,
          reveal: `Rotasi $90^\\circ$ berlawanan arah jarum jam terhadap titik asal diwakili matriks
$$R_{90^\\circ} = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}.$$
Mengalikannya dengan vektor kolom $\\begin{pmatrix} x \\\\ y \\end{pmatrix}$ menghasilkan $\\begin{pmatrix} -y \\\\ x \\end{pmatrix}$.

Jika dua transformasi dikerjakan berurutan, matriks gabungannya diperoleh dengan mengalikan matriks keduanya, dengan urutan yang tepat. Inilah gagasan **komposisi transformasi**.`,
          saveLabel: "Simpan dugaan & lihat jawabannya",
        },
      ],
    },
    {
      id: "prasyarat",
      kind: "prasyarat",
      title: "Prasyarat",
      body: `Sebelum melanjutkan, pastikan kamu menguasai:
- operasi penjumlahan dan perkalian matriks;
- determinan dan invers matriks $2 \\times 2$;
- penulisan titik sebagai vektor kolom pada bidang Cartesius.`,
    },
    {
      id: "konteks",
      kind: "konteks",
      title: "Situasi dan Konteks",
      body: `Setiap titik pada bidang dapat ditulis sebagai vektor kolom
$$\\begin{pmatrix} x \\\\ y \\end{pmatrix}.$$
Transformasi geometri memetakan titik itu ke titik baru. Untuk translasi kita menambahkan vektor, sedangkan untuk refleksi, rotasi, dan dilatasi terhadap titik asal kita cukup **mengalikan dengan sebuah matriks**. Perkalian matriks yang sama juga mewakili penggabungan beberapa transformasi, sehingga sangat berguna dalam grafika komputer, animasi, dan robotika.`,
    },
    {
      id: "operasi-matriks",
      kind: "konsep",
      title: "Tinjauan Operasi Aljabar Matriks",
      body: `Penjumlahan dan pengurangan hanya dapat dilakukan pada matriks berordo sama. Perkalian matriks $2 \\times 2$ mengikuti aturan baris dikali kolom:
$$\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}\\begin{pmatrix} e & f \\\\ g & h \\end{pmatrix} = \\begin{pmatrix} ae+bg & af+bh \\\\ ce+dg & cf+dh \\end{pmatrix}.$$

Perkalian dengan vektor kolom mengubah satu titik:
$$\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}\\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} ax+by \\\\ cx+dy \\end{pmatrix}.$$

Ingat bahwa perkalian matriks **tidak komutatif**, sehingga urutan transformasi penting.`,
      blocks: [
        {
          kind: "match",
          intro: "Cocokkan transformasi dengan matriksnya.",
          pairs: [
            {
              left: "Rotasi $90^\\circ$ berlawanan arah jarum jam",
              right: "$\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$",
            },
            {
              left: "Refleksi terhadap sumbu-$x$",
              right: "$\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$",
            },
            {
              left: "Dilatasi faktor $k$",
              right: "$\\begin{pmatrix} k & 0 \\\\ 0 & k \\end{pmatrix}$",
            },
            {
              left: "Refleksi terhadap garis $y=x$",
              right: "$\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$",
            },
          ],
        },
      ],
    },
    {
      id: "determinan",
      kind: "representasi",
      title: "Determinan sebagai Faktor Skala Luas",
      body: `Determinan matriks transformasi memuat informasi penting tentang pengaruhnya terhadap luas.
$$\\det \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc.$$

Jika suatu bangun seluas $L$ ditransformasi oleh matriks $M$, luas bayangannya adalah $\\lvert \\det(M) \\rvert \\cdot L$. Determinan juga menentukan apakah sebuah transformasi dapat dibalik.`,
      blocks: [
        {
          kind: "table",
          caption: "Arti nilai determinan",
          headers: [
            "Nilai determinan",
            "Makna geometris",
          ],
          rows: [
            [
              "$\\det(M) = 1$",
              "luas tetap, contohnya rotasi dan refleksi",
            ],
            [
              "$\\det(M) = 0$",
              "bangun menyusut menjadi garis; transformasi singular",
            ],
            [
              "$\\lvert \\det(M) \\rvert > 1$",
              "bangun diperbesar",
            ],
            [
              "$0 < \\lvert \\det(M) \\rvert < 1$",
              "bangun diperkecil",
            ],
            [
              "$\\det(M) < 0$",
              "luas terjaga atau berubah, orientasi terbalik",
            ],
          ],
        },
      ],
    },
    {
      id: "invers",
      kind: "konsep",
      title: "Invers Matriks 2×2",
      body: `Jika $\\det(M) \\neq 0$, matriks $M$ memiliki invers
$$M^{-1} = \\frac{1}{\\det(M)}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}, \\qquad M = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}.$$
Invers memetakan bayangan kembali ke titik asalnya. Sebagai contoh, matriks dilatasi
$$D = \\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \\end{pmatrix}$$
memetakan $(x,y)$ ke $(2x,3y)$. Titik $(8,18)$ akan kembali ke $(4,6)$ melalui
$$D^{-1} = \\frac{1}{6}\\begin{pmatrix} 3 & 0 \\\\ 0 & 2 \\end{pmatrix}\\begin{pmatrix} 8 \\\\ 18 \\end{pmatrix} = \\begin{pmatrix} 4 \\\\ 6 \\end{pmatrix}.$$`,
    },
    {
      id: "translasi",
      kind: "konsep",
      title: "Translasi",
      body: `Translasi (pergeseran) sejauh $\\binom{a}{b}$ memetakan titik $(x,y)$ ke
$$(x', y') = (x+a, \\; y+b).$$
Translasi tidak mengubah bentuk maupun luas, dan dapat ditulis sebagai penjumlahan vektor
$$\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} x \\\\ y \\end{pmatrix} + \\begin{pmatrix} a \\\\ b \\end{pmatrix}.$$
Sebagai contoh, translasi $\\binom{3}{-2}$ memetakan $(1,4)$ ke $(4,2)$.`,
    },
    {
      id: "pencerminan",
      kind: "konsep",
      title: "Refleksi",
      body: "Refleksi (pencerminan) terhadap suatu garis memetakan titik ke bayangannya. Terhadap titik asal, refleksi dinyatakan dengan matriks berikut.",
      blocks: [
        {
          kind: "table",
          caption: "Matriks refleksi terhadap titik asal",
          headers: [
            "Sumbu / garis",
            "Pemetaan",
            "Matriks",
          ],
          rows: [
            [
              "Sumbu $x$",
              "$(x,y) \\rightarrow (x,-y)$",
              "$\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$",
            ],
            [
              "Sumbu $y$",
              "$(x,y) \\rightarrow (-x,y)$",
              "$\\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}$",
            ],
            [
              "Titik asal $O$",
              "$(x,y) \\rightarrow (-x,-y)$",
              "$\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$",
            ],
            [
              "Garis $y=x$",
              "$(x,y) \\rightarrow (y,x)$",
              "$\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$",
            ],
            [
              "Garis $y=-x$",
              "$(x,y) \\rightarrow (-y,-x)$",
              "$\\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix}$",
            ],
          ],
        },
        {
          kind: "callout",
          variant: "tip",
          title: "Cek cepat",
          text: "Semua matriks refleksi memiliki determinan $-1$, sehingga luas bangun tetap tetapi orientasinya terbalik.",
        },
      ],
    },
    {
      id: "rotasi",
      kind: "rumus",
      title: "Rotasi",
      body: `Rotasi sebesar $\\theta$ berlawanan arah jarum jam terhadap titik asal diwakili matriks
$$R_{\\theta} = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}.$$
Sudut-sudut istimewa memberi bentuk sederhana:
$$R_{90^\\circ} = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}, \\quad R_{180^\\circ} = \\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}, \\quad R_{270^\\circ} = \\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}.$$
Sebagai contoh, $R_{90^\\circ}$ memetakan $(1,0)$ ke $(0,1)$ dan $(3,1)$ ke $(-1,3)$.

Determinan setiap matriks rotasi adalah $\\cos^{2}\\theta + \\sin^{2}\\theta = 1$, sehingga rotasi tidak mengubah luas.`,
    },
    {
      id: "dilatasi",
      kind: "konsep",
      title: "Dilatasi",
      body: `Dilatasi dengan pusat titik asal dan faktor skala $k$ memetakan $(x,y)$ ke $(kx,ky)$, diwakili matriks
$$D_{k} = \\begin{pmatrix} k & 0 \\\\ 0 & k \\end{pmatrix}.$$
Jika hanya salah satu arah yang diregangkan, dipakai matriks
$$\\begin{pmatrix} k & 0 \\\\ 0 & m \\end{pmatrix},$$
yang memetakan $(x,y)$ ke $(kx,my)$. Determinan matriks ini tetap memberi faktor skala luas. Sebagai contoh, matriks $\\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \\end{pmatrix}$ memetakan $(1,-2)$ ke $(2,-6)$ dan mengubah luas menjadi $6$ kali semula.`,
    },
    {
      id: "komposisi",
      kind: "konsep",
      title: "Komposisi Transformasi",
      body: `Jika transformasi $T_{1}$ dengan matriks $M_{1}$ dilanjutkan oleh $T_{2}$ dengan matriks $M_{2}$, maka matriks gabungannya adalah
$$M = M_{2} M_{1},$$
dengan $M_{1}$ di kanan karena dipakai lebih dahulu. Urutan perkalian tidak boleh ditukar.

**Contoh ringkas.** Rotasi $90^\\circ$ berlawanan arah jarum jam dilanjutkan refleksi terhadap sumbu $x$ memberi
$$M = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix} = \\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix},$$
yang tidak lain adalah refleksi terhadap garis $y=-x$.`,
    },
    {
      id: "eksplorasi",
      kind: "eksplorasi",
      title: "Eksplorasi",
      body: "Cobakan berbagai matriks transformasi dan amati bagaimana bangun berpindah di bidang.",
      blocks: [
        {
          kind: "exploration",
          explorationId: "mtl-matriks-transformasi",
        },
      ],
    },
    {
      id: "generalisasi",
      kind: "generalisasi",
      title: "Determinan dan Komposisi sebagai Pola Umum",
      body: `Semua transformasi linear pada topik ini dapat ditulis dengan satu matriks $2\\times2$, dan satu bilangan merangkum pengaruhnya terhadap luas, yaitu **determinan**:

$$\\det\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc.$$

Nilai $\\lvert\\det(M)\\rvert$ menyatakan berapa kali luas sebuah bangun berubah setelah ditransformasi; khususnya $\\det(M)=1$ untuk rotasi dan refleksi, serta $\\det(M)=0$ membuat bangun menyusut menjadi garis.

Pola kedua muncul saat beberapa transformasi dirangkai. Bila $T_1$ dengan matriks $M_1$ dikerjakan lebih dahulu lalu $T_2$ dengan matriks $M_2$, matriks gabungannya adalah $M_2M_1$. Karena perkalian matriks tidak komutatif, **urutan langkah menentukan hasil**, seperti yang tampak ketika rotasi dan refleksi ditukar.`,
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
              text: `Titik $A(2,3)$ ditranslasi oleh $\\binom{3}{-2}$, lalu direfleksikan terhadap sumbu $x$. Tentukan bayangan akhirnya.

*Penyelesaian.* Translasi memberi $(2+3, 3-2) = (5,1)$. Refleksi terhadap sumbu $x$ mengubah tanda ordinat: $(5,-1)$. Jadi bayangan akhirnya $A'(5,-1)$.`,
            },
            {
              title: "Contoh 2",
              text: `Tentukan bayangan $B(-1,4)$ oleh rotasi $90^\\circ$ berlawanan arah jarum jam terhadap titik asal.

*Penyelesaian.* Gunakan $R_{90^\\circ}$:
$$\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}\\begin{pmatrix} -1 \\\\ 4 \\end{pmatrix} = \\begin{pmatrix} -4 \\\\ -1 \\end{pmatrix}.$$
Jadi $B'(-4,-1)$.`,
            },
            {
              title: "Contoh 3",
              text: `Titik $C(3,-2)$ didilatasi dengan pusat titik asal dan faktor skala $2$. Tentukan bayangannya dan faktor skala luasnya.

*Penyelesaian.* Bayangannya $(6,-4)$. Matriksnya $\\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix}$ dengan determinan $4$, sehingga luas bangun menjadi $4$ kali semula.`,
            },
            {
              title: "Contoh 4",
              text: `Titik $P(2,1)$ dirotasi $90^\\circ$ berlawanan arah jarum jam, lalu direfleksikan terhadap sumbu $x$. Tentukan bayangannya dan transformasi tunggal yang setara.

*Penyelesaian.* Rotasi memberi $(-1,2)$. Refleksi terhadap sumbu $x$ memberi $(-1,-2)$. Hasil ini sama dengan refleksi terhadap garis $y=-x$, karena $(x,y) \\rightarrow (-y,-x)$ memetakan $(2,1)$ ke $(-1,-2)$.`,
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
      body: `Matriks transformasi menjadi tulang punggung **grafika komputer** dan animasi: setiap objek digeser, diputar, dan diskalakan dengan perkalian matriks. Karena komposisi transformasi cukup diwakili perkalian matriks, ribuan titik dapat diproses dengan cepat.

Pada robotika, lengan robot menggunakan transformasi untuk menghitung posisi ujungnya. Pada pemetaan digital dan sistem navigasi, rotasi dan translasi dipakai untuk menyelaraskan koordinat. Prinsip yang sama juga muncul pada pemodelan 3D dan pengolahan citra.`,
    },
    {
      id: "kesalahan-umum",
      kind: "kesalahan-umum",
      title: "Kesalahan Umum",
      body: `**1. Menukar urutan pada komposisi.** Untuk $T_{1}$ lalu $T_{2}$, matriksnya $M_{2}M_{1}$, bukan $M_{1}M_{2}$, karena perkalian matriks tidak komutatif.
**2. Salah menggunakan matriks rotasi.** Rotasi berlawanan arah jarum jam memakai $\\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}$; tanda pada $\\sin\\theta$ mudah tertukar.
**3. Mencampur translasi dengan perkalian matriks.** Translasi adalah penjumlahan vektor, bukan perkalian matriks $2 \\times 2$ terhadap titik asal.
**4. Melupakan nilai mutlak determinan.** Luas memakai $\\lvert \\det(M) \\rvert$, sedangkan tanda determinan hanya menunjukkan orientasi.`,
    },
    {
      id: "refleksi",
      kind: "refleksi",
      title: "Refleksi",
      body: "Renungkan bagaimana matriks memindahkan dan mengubah bangun pada bidang.",
      blocks: [
        {
          kind: "reflection",
          prompts: [
            "Mengapa translasi tidak dapat diwakili matriks $2 \\times 2$ seperti rotasi dan refleksi?",
            "Bagaimana urutan transformasi memengaruhi hasil akhir pada komposisi?",
            "Apa arti geometris dari determinan sebuah matriks transformasi?",
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
            "Transformasi",
            "Rumus / Matriks",
          ],
          rows: [
            [
              "Translasi $\\binom{a}{b}$",
              "$(x,y) \\rightarrow (x+a, y+b)$",
            ],
            [
              "Refleksi sumbu $x$",
              "$\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$",
            ],
            [
              "Refleksi garis $y=x$",
              "$\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$",
            ],
            [
              "Rotasi $\\theta$",
              "$\\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}$",
            ],
            [
              "Dilatasi $k$",
              "$\\begin{pmatrix} k & 0 \\\\ 0 & k \\end{pmatrix}$",
            ],
            [
              "Komposisi",
              "$M_{2}M_{1}$ untuk $T_{1}$ lalu $T_{2}$",
            ],
            [
              "Faktor skala luas",
              "$\\lvert \\det(M) \\rvert$",
            ],
          ],
        },
      ],
    },
    {
      id: "evaluasi",
      kind: "evaluasi",
      title: "Evaluasi",
      body: `**Tiket keluar.** (1) Apa arti geometris dari $\\lvert\\det(M)\\rvert$ pada sebuah transformasi? (2) Mengapa urutan dua transformasi tidak boleh ditukar? Setelah menjawab, lanjut ke [Latihan & Asesmen](/latihan) topik **Matriks Transformasi** untuk latihan tambahan.`,
    },
  ],
};
