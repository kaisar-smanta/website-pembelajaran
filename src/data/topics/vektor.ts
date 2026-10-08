import type { Topic } from '@/types/content';

export const vektor: Topic = {
  id: 'vektor',
  slug: 'vektor',
  title: 'Vektor',
  subtitle: 'Notasi, operasi aljabar, dan pembuktian geometris',
  grade: 'XI',
  phase: 'F',
  element: 'geometri',
  subject: 'matematika-lanjut',
  status: 'lengkap',
  estimatedMinutes: 120,
  summary:
    'Menyatakan vektor pada bidang datar, menghitung panjang dan vektor satuan, melakukan operasi aljabar termasuk perkalian titik, serta membuktikan sifat geometri dengan vektor.',
  description:
    'Vektor adalah besaran yang memiliki besar dan arah. Berbeda dari bilangan biasa, vektor membawa informasi arah sekaligus panjang. Topik ini bermula dari notasi dan representasi vektor pada bidang datar, lalu panjang (magnitudo) dan vektor satuan. Operasi aljabar meliputi penjumlahan, pengurangan, perkalian skalar, dan perkalian titik (dot product). Dari perkalian titik kita menurunkan sudut antar vektor dan proyeksi, kemudian memakai vektor untuk membuktikan kolinearitas, ketegaklurusan, teorema titik tengah, serta sifat-sifat segitiga dan segiempat secara ringkas dan elegan.',
  keywords: [
    'vektor',
    'notasi vektor',
    'panjang vektor',
    'vektor satuan',
    'penjumlahan vektor',
    'perkalian skalar',
    'perkalian titik',
    'dot product',
    'sudut antar vektor',
    'proyeksi vektor',
    'kolinear',
    'tegak lurus',
    'teorema titik tengah',
  ],
  prerequisites: ['trigonometri'],
  relatedTopics: ['matriks-transformasi'],
  prerequisiteKnowledge: [
    'Koordinat Kartesius dan jarak dua titik',
    'Teorema Pythagoras',
    'Perbandingan trigonometri sinus dan kosinus',
    'Operasi bilangan dan bentuk akar',
  ],
  objectives: [
    { text: 'Menyatakan vektor pada bidang datar dalam notasi pasangan terurut, vektor basis, maupun vektor posisi.' },
    { text: 'Menghitung panjang (magnitudo) vektor dan menentukan vektor satuan.' },
    { text: 'Melakukan operasi penjumlahan, pengurangan, dan perkalian skalar pada vektor.' },
    { text: 'Menghitung perkalian titik serta menggunakannya untuk menentukan sudut antar vektor.' },
    { text: 'Menentukan proyeksi skalar dan proyeksi vektor.' },
    { text: 'Membuktikan sifat geometri (kolinear, tegak lurus, teorema titik tengah) menggunakan vektor.' },
  ],
  applications: ['mtl-navigasi-vektor'],
  sections: [
    {
      id: "tujuan",
      kind: "tujuan",
      title: "Tujuan Pembelajaran",
      body: "Setelah mempelajari topik ini, peserta didik dapat menyatakan vektor pada bidang datar, menghitung panjang dan vektor satuannya, melakukan operasi aljabar vektor termasuk perkalian titik, menentukan sudut dan proyeksi antar vektor, serta membuktikan sifat geometri seperti kolinearitas, ketegaklurusan, dan teorema titik tengah.",
    },
    {
      id: "pemantik",
      kind: "pemantik",
      title: "Pertanyaan Pemantik",
      blocks: [
        {
          kind: "prediction",
          prompt: `Sebuah pesawat terbang dengan kecepatan $300$ km/jam menuju timur, sementara angin bertiup $80$ km/jam ke arah utara. Ke manakah arah gerak pesawat sebenarnya, dan berapa besar kecepatannya?

Kedua kecepatan itu bukan sekadar bilangan; masing-masing memiliki **besar dan arah**. Untuk menggabungkannya kita memerlukan alat baru: **vektor**. Bagaimana cara menjumlahkan dua besaran berarah dan menentukan panjang hasilnya?`,
          reveal: `Tulis kecepatan pesawat $\\vec{p} = \\begin{pmatrix} 300 \\\\ 0 \\end{pmatrix}$ dan angin $\\vec{w} = \\begin{pmatrix} 0 \\\\ 80 \\end{pmatrix}$. Kecepatan resultan adalah jumlah vektornya
$$\\vec{r} = \\vec{p} + \\vec{w} = \\begin{pmatrix} 300 \\\\ 80 \\end{pmatrix}.$$
Panjangnya $\\lVert \\vec{r} \\rVert = \\sqrt{300^{2} + 80^{2}} = \\sqrt{90000 + 6400} = \\sqrt{96400} \\approx 310{,}5$ km/jam. Jadi pesawat bergerak dengan laju sekitar $310{,}5$ km/jam, sedikit menyimpang dari arah timur.`,
          saveLabel: "Simpan dugaan & lihat jawabannya",
        },
      ],
    },
    {
      id: "prasyarat",
      kind: "prasyarat",
      title: "Prasyarat",
      body: `Sebelum melanjutkan, pastikan kamu menguasai:
- koordinat Kartesius dan cara menghitung jarak dua titik;
- teorema Pythagoras, misalnya $3^{2}+4^{2}=5^{2}$;
- perbandingan trigonometri sinus dan kosinus;
- penyederhanaan bentuk akar dan operasi bilangan.`,
    },
    {
      id: "konteks",
      kind: "konteks",
      title: "Situasi dan Konteks",
      body: `Banyak besaran di sekitar kita bergantung pada arah: perpindahan, kecepatan, gaya, dan medan listrik. Menyebut "gaya $20$ N" saja belum cukup jika tidak tahu ke mana arahnya. Vektor memberi bahasa untuk menggabungkan besaran berarah: gaya-gaya pada jembatan, arus dan angin pada navigasi, serta pergeseran pada grafika komputer.

Ketika sebuah kapal menyeberang sungai yang berarus, arah dan laju sesungguhnya adalah hasil penjumlahan dua vektor. Menghitungnya dengan tepat menyelamatkan kapal dari melenceng jauh dari tujuan.`,
    },
    {
      id: "notasi",
      kind: "konsep",
      title: "Notasi dan Representasi Vektor di Bidang Datar",
      body: `**Vektor** adalah besaran yang memiliki besar (panjang) dan arah. Di bidang datar, vektor ditulis sebagai pasangan terurut komponennya:

$$\\vec{a} = \\begin{pmatrix} a_{1} \\\\ a_{2} \\end{pmatrix} = a_{1}\\,\\mathbf{i} + a_{2}\\,\\mathbf{j},$$

dengan $\\mathbf{i}$ menyatakan arah sumbu-$x$ dan $\\mathbf{j}$ arah sumbu-$y$. Bilangan $a_{1}$ dan $a_{2}$ disebut **komponen** vektor.

Sebuah vektor juga dapat digambarkan sebagai **ruas garis berarah** dari titik pangkal ke titik ujung. Vektor yang berpindah dari titik $A(x_{1}, y_{1})$ ke titik $B(x_{2}, y_{2})$ adalah

$$\\vec{AB} = B - A = \\begin{pmatrix} x_{2} - x_{1} \\\\ y_{2} - y_{1} \\end{pmatrix}.$$

Sebagai contoh, dari $A(1,2)$ ke $B(4,6)$ diperoleh $\\vec{AB} = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$. Vektor ini sama dengan vektor apa pun yang komponennya $\\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$; letaknya di bidang tidak mengubah nilainya.`,
      blocks: [
        {
          kind: "callout",
          variant: "concept",
          title: "Inti yang perlu diingat",
          text: "Vektor ditentukan oleh **besar dan arah**, bukan oleh letak gambarannya. Dua vektor sama bila semua komponennya sama.",
        },
        {
          kind: "match",
          intro: "Cocokkan operasi vektor dengan hasilnya.",
          pairs: [
            {
              left: "Perkalian titik",
              right: "$\\vec{a}\\cdot\\vec{b}=\\lvert\\vec{a}\\rvert\\,\\lvert\\vec{b}\\rvert\\cos\\theta$",
            },
            {
              left: "Vektor satuan",
              right: "$\\hat{a}=\\dfrac{\\vec{a}}{\\lvert\\vec{a}\\rvert}$",
            },
            {
              left: "Tegak lurus",
              right: "$\\vec{a}\\cdot\\vec{b}=0$",
            },
            {
              left: "Kolinear",
              right: "$\\vec{a}=k\\vec{b}$ untuk skalar $k$",
            },
          ],
        },
      ],
    },
    {
      id: "panjang",
      kind: "rumus",
      title: "Panjang Vektor dan Vektor Satuan",
      body: `**Panjang (magnitudo)** vektor $\\vec{a} = \\begin{pmatrix} a_{1} \\\\ a_{2} \\end{pmatrix}$ diperoleh dari teorema Pythagoras:

$$\\lVert \\vec{a} \\rVert = \\sqrt{a_{1}^{2} + a_{2}^{2}}.$$

Sebagai contoh, $\\lVert \\vec{a} \\rVert$ untuk $\\vec{a} = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$ adalah $\\sqrt{9 + 16} = \\sqrt{25} = 5$, dan untuk $\\vec{b} = \\begin{pmatrix} 5 \\\\ 12 \\end{pmatrix}$ adalah $\\sqrt{25 + 144} = \\sqrt{169} = 13$.

**Vektor satuan** adalah vektor yang panjangnya $1$. Vektor satuan searah $\\vec{a}$ dilambangkan $\\hat{a}$ dan dihitung dengan

$$\\hat{a} = \\frac{\\vec{a}}{\\lVert \\vec{a} \\rVert}.$$

Untuk $\\vec{a} = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$ dengan $\\lVert \\vec{a} \\rVert = 5$:

$$\\hat{a} = \\frac{1}{5}\\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix} = \\begin{pmatrix} \\tfrac{3}{5} \\\\ \\tfrac{4}{5} \\end{pmatrix}.$$

Periksa: $\\sqrt{\\left(\\tfrac{3}{5}\\right)^{2} + \\left(\\tfrac{4}{5}\\right)^{2}} = \\sqrt{\\tfrac{9}{25} + \\tfrac{16}{25}} = \\sqrt{1} = 1$. Benar.`,
    },
    {
      id: "operasi",
      kind: "konsep",
      title: "Operasi Aljabar Vektor",
      body: `**Penjumlahan dan pengurangan** dilakukan komponen demi komponen:

$$\\vec{a} + \\vec{b} = \\begin{pmatrix} a_{1} + b_{1} \\\\ a_{2} + b_{2} \\end{pmatrix}, \\qquad \\vec{a} - \\vec{b} = \\begin{pmatrix} a_{1} - b_{1} \\\\ a_{2} - b_{2} \\end{pmatrix}.$$

Untuk $\\vec{a} = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$ dan $\\vec{b} = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$:

$$\\vec{a} + \\vec{b} = \\begin{pmatrix} 4 \\\\ 6 \\end{pmatrix}, \\qquad \\vec{a} - \\vec{b} = \\begin{pmatrix} 2 \\\\ 2 \\end{pmatrix}.$$

**Perkalian skalar** dilakukan dengan mengalikan setiap komponen dengan bilangan $k$:

$$k\\vec{a} = \\begin{pmatrix} k a_{1} \\\\ k a_{2} \\end{pmatrix}.$$

Sebagai contoh, $2\\vec{a} = \\begin{pmatrix} 6 \\\\ 8 \\end{pmatrix}$ dan $3\\vec{a} - 2\\vec{b} = \\begin{pmatrix} 9 \\\\ 12 \\end{pmatrix} - \\begin{pmatrix} 2 \\\\ 4 \\end{pmatrix} = \\begin{pmatrix} 7 \\\\ 8 \\end{pmatrix}$.

Secara geometris, penjumlahan vektor mengikuti **aturan segitiga** atau **aturan jajargenjang**: tempatkan pangkal $\\vec{b}$ di ujung $\\vec{a}$, maka $\\vec{a} + \\vec{b}$ menghubungkan pangkal $\\vec{a}$ ke ujung $\\vec{b}$.`,
      blocks: [
        {
          kind: "callout",
          variant: "warning",
          title: "Hati-hati",
          text: "Penjumlahan mengikuti komponen yang **seposisi**: komponen-$x$ dengan komponen-$x$, komponen-$y$ dengan komponen-$y$. Jangan mencampur keduanya.",
        },
      ],
    },
    {
      id: "perkalian-titik",
      kind: "rumus",
      title: "Perkalian Titik dan Sudut Antar Vektor",
      body: `**Perkalian titik (dot product)** dua vektor menghasilkan **bilangan**, bukan vektor:

$$\\vec{a} \\cdot \\vec{b} = a_{1}b_{1} + a_{2}b_{2}.$$

Selain itu berlaku pula hubungan dengan sudut $\\theta$ di antara kedua vektor:

$$\\vec{a} \\cdot \\vec{b} = \\lVert \\vec{a} \\rVert \\, \\lVert \\vec{b} \\rVert \\cos\\theta.$$

Dari kedua bentuk itu kita memperoleh **rumus sudut**:

$$\\cos\\theta = \\frac{\\vec{a} \\cdot \\vec{b}}{\\lVert \\vec{a} \\rVert \\, \\lVert \\vec{b} \\rVert}.$$

Sebagai contoh, untuk $\\vec{a} = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$ dan $\\vec{b} = \\begin{pmatrix} 3 \\\\ 1 \\end{pmatrix}$: $\\vec{a} \\cdot \\vec{b} = 1(3) + 2(1) = 5$, $\\lVert \\vec{a} \\rVert = \\sqrt{5}$, dan $\\lVert \\vec{b} \\rVert = \\sqrt{10}$, sehingga

$$\\cos\\theta = \\frac{5}{\\sqrt{5}\\,\\sqrt{10}} = \\frac{5}{\\sqrt{50}} = \\frac{1}{\\sqrt{2}}, \\qquad \\theta = 45^\\circ.$$

**Akibat penting.** Dua vektor **tegak lurus** jika dan hanya jika $\\vec{a} \\cdot \\vec{b} = 0$, karena $\\cos 90^\\circ = 0$. Sebagai contoh, $\\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix} \\cdot \\begin{pmatrix} 4 \\\\ -3 \\end{pmatrix} = 12 - 12 = 0$, jadi kedua vektor itu saling tegak lurus.`,
      blocks: [
        {
          kind: "table",
          caption: "Dua cara menghitung perkalian titik",
          headers: [
            "Bentuk",
            "Rumus",
            "Kapan dipakai",
          ],
          rows: [
            [
              "Komponen",
              "$\\vec{a} \\cdot \\vec{b} = a_{1}b_{1} + a_{2}b_{2}$",
              "komponen diketahui",
            ],
            [
              "Geometris",
              "$\\vec{a} \\cdot \\vec{b} = \\lVert \\vec{a} \\rVert \\lVert \\vec{b} \\rVert \\cos\\theta$",
              "sudut atau panjang diketahui",
            ],
          ],
        },
      ],
    },
    {
      id: "proyeksi",
      kind: "rumus",
      title: "Proyeksi Vektor",
      body: `**Proyeksi skalar** $\\vec{a}$ pada $\\vec{b}$ adalah panjang bayangan $\\vec{a}$ ketika diproyeksikan ke arah $\\vec{b}$:

$$c = \\frac{\\vec{a} \\cdot \\vec{b}}{\\lVert \\vec{b} \\rVert}.$$

**Proyeksi vektor** $\\vec{a}$ pada $\\vec{b}$ adalah vektor bayangan itu sendiri:

$$\\vec{p} = \\left(\\frac{\\vec{a} \\cdot \\vec{b}}{\\lVert \\vec{b} \\rVert^{2}}\\right)\\vec{b}.$$

Sebagai contoh, proyeksi $\\vec{a} = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$ pada $\\vec{b} = \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}$: karena $\\vec{a} \\cdot \\vec{b} = 3$ dan $\\lVert \\vec{b} \\rVert^{2} = 1$, maka $c = 3$ dan $\\vec{p} = \\begin{pmatrix} 3 \\\\ 0 \\end{pmatrix}$.

Contoh lain, proyeksi $\\vec{a} = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$ pada $\\vec{b} = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$: $\\vec{a} \\cdot \\vec{b} = 11$ dan $\\lVert \\vec{b} \\rVert^{2} = 5$, sehingga $c = \\dfrac{11}{\\sqrt{5}}$ dan

$$\\vec{p} = \\frac{11}{5}\\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix} = \\begin{pmatrix} \\tfrac{11}{5} \\\\ \\tfrac{22}{5} \\end{pmatrix}.$$

Panjang proyeksi vektor ini adalah $\\lVert \\vec{p} \\rVert = \\dfrac{11}{5}\\sqrt{5} = \\dfrac{11}{\\sqrt{5}} = c$, sesuai definisinya.`,
    },
    {
      id: "pembuktian",
      kind: "representasi",
      title: "Pembuktian Geometris dengan Vektor",
      body: `Vektor memungkinkan pembuktian sifat geometri tanpa gambar yang rumit.

**Kolinearitas (kesejajaran).** Titik-titik $A$, $B$, $C$ **kolinear** jika $\\vec{AB}$ dan $\\vec{AC}$ sejajar, yaitu $\\vec{AC} = k\\,\\vec{AB}$ untuk suatu skalar $k$. Sebagai contoh, $A(1,1)$, $B(3,3)$, $C(5,5)$: $\\vec{AB} = \\begin{pmatrix} 2 \\\\ 2 \\end{pmatrix}$ dan $\\vec{AC} = \\begin{pmatrix} 4 \\\\ 4 \\end{pmatrix} = 2\\,\\vec{AB}$, jadi ketiga titik kolinear.

**Ketegaklurusan.** Dua ruas garis tegak lurus bila vektor arahnya memiliki perkalian titik nol. Pada segitiga $A(0,0)$, $B(3,0)$, $C(0,4)$: $\\vec{AB} = \\begin{pmatrix} 3 \\\\ 0 \\end{pmatrix}$ dan $\\vec{AC} = \\begin{pmatrix} 0 \\\\ 4 \\end{pmatrix}$, sehingga $\\vec{AB} \\cdot \\vec{AC} = 0$. Jadi segitiga siku-siku di $A$.

**Teorema titik tengah.** Pada segitiga, ruas garis yang menghubungkan titik tengah dua sisi sejajar sisi ketiga dan panjangnya setengah sisi itu. Misalkan $A(0,0)$, $B(4,0)$, $C(0,6)$. Titik tengah $AB$ adalah $M = \\tfrac{1}{2}(A+B) = (2,0)$ dan titik tengah $AC$ adalah $N = \\tfrac{1}{2}(A+C) = (0,3)$. Maka

$$\\vec{MN} = N - M = \\begin{pmatrix} -2 \\\\ 3 \\end{pmatrix}, \\qquad \\vec{BC} = C - B = \\begin{pmatrix} -4 \\\\ 6 \\end{pmatrix} = 2\\,\\vec{MN}.$$

Karena $\\vec{BC} = 2\\,\\vec{MN}$, kedua ruas garis **sejajar**, dan panjangnya $\\lVert \\vec{MN} \\rVert = \\sqrt{13} = \\tfrac{1}{2}\\lVert \\vec{BC} \\rVert$. Terbukti.`,
      blocks: [
        {
          kind: "tabs",
          items: [
            {
              label: "Kolinear",
              body: "Titik $A,B,C$ kolinear bila $\\vec{AC} = k\\,\\vec{AB}$.",
            },
            {
              label: "Tegak lurus",
              body: "$\\vec{AB} \\perp \\vec{AC}$ bila $\\vec{AB} \\cdot \\vec{AC} = 0$.",
            },
            {
              label: "Titik tengah",
              body: "Jika $M,N$ titik tengah dua sisi, maka $\\vec{BC} = 2\\,\\vec{MN}$, sehingga $MN \\parallel BC$ dan $MN = \\tfrac{1}{2}BC$.",
            },
          ],
        },
      ],
    },
    {
      id: "eksplorasi",
      kind: "eksplorasi",
      title: "Eksplorasi",
      body: "Ubah komponen vektor untuk melihat bagaimana besar dan arah resultannya berubah.",
      blocks: [
        {
          kind: "exploration",
          explorationId: "mtl-vektor-bidang",
        },
      ],
    },
    {
      id: "generalisasi",
      kind: "generalisasi",
      title: "Perkalian Titik sebagai Alat Serbaguna",
      body: `Hampir semua sifat geometri pada topik ini dapat dibaca dari satu operasi, yaitu **perkalian titik**. Dari bentuk komponen $\\vec{a}\\cdot\\vec{b}=a_{1}b_{1}+a_{2}b_{2}$ dan bentuk geometris $\\vec{a}\\cdot\\vec{b}=\\lVert\\vec{a}\\rVert\\lVert\\vec{b}\\rVert\\cos\\theta$, kita memperoleh panjang, sudut, ketegaklurusan, dan proyeksi sekaligus:

$$\\lVert\\vec{a}\\rVert=\\sqrt{\\vec{a}\\cdot\\vec{a}}, \\qquad \\cos\\theta=\\frac{\\vec{a}\\cdot\\vec{b}}{\\lVert\\vec{a}\\rVert\\lVert\\vec{b}\\rVert}, \\qquad \\vec{a}\\perp\\vec{b}\\iff\\vec{a}\\cdot\\vec{b}=0, \\qquad \\vec{a}\\parallel\\vec{b}\\iff\\vec{a}=k\\vec{b}.$$

Dengan menghubungkan titik-titik menjadi vektor, pertanyaan geometri berubah menjadi perhitungan aljabar. Itulah sebabnya vektor dipakai membuktikan teorema titik tengah dan sifat segitiga tanpa menggambar ulang.`,
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
              text: `Tentukan panjang dan vektor satuan dari $\\vec{a} = \\begin{pmatrix} 6 \\\\ 8 \\end{pmatrix}$.

*Penyelesaian.* $\\lVert \\vec{a} \\rVert = \\sqrt{6^{2} + 8^{2}} = \\sqrt{100} = 10$, sehingga $\\hat{a} = \\dfrac{1}{10}\\begin{pmatrix} 6 \\\\ 8 \\end{pmatrix} = \\begin{pmatrix} \\tfrac{3}{5} \\\\ \\tfrac{4}{5} \\end{pmatrix}$.`,
            },
            {
              title: "Contoh 2",
              text: `Tentukan sudut antara $\\vec{u} = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$ dan $\\vec{v} = \\begin{pmatrix} 3 \\\\ 1 \\end{pmatrix}$.

*Penyelesaian.* $\\vec{u} \\cdot \\vec{v} = 3 + 2 = 5$; $\\lVert \\vec{u} \\rVert = \\sqrt{5}$ dan $\\lVert \\vec{v} \\rVert = \\sqrt{10}$. Maka

$$\\cos\\theta = \\frac{5}{\\sqrt{5}\\,\\sqrt{10}} = \\frac{1}{\\sqrt{2}}, \\qquad \\theta = 45^\\circ.$$`,
            },
            {
              title: "Contoh 3",
              text: `Tentukan proyeksi vektor $\\vec{a} = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$ pada $\\vec{b} = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$.

*Penyelesaian.* $\\vec{a} \\cdot \\vec{b} = 3 + 8 = 11$ dan $\\lVert \\vec{b} \\rVert^{2} = 1 + 4 = 5$, sehingga

$$\\vec{p} = \\frac{11}{5}\\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix} = \\begin{pmatrix} \\tfrac{11}{5} \\\\ \\tfrac{22}{5} \\end{pmatrix}.$$`,
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
      body: `Vektor muncul pada navigasi: kecepatan kapal digabung dengan arus sungai, dan kecepatan pesawat digabung dengan angin. Hasil penjumlahan vektor menentukan arah serta laju sebenarnya.

Dalam fisika dan teknik, gaya-gaya pada sebuah benda dijumlahkan sebagai vektor; benda seimbang bila resultannya nol. Perkalian titik dipakai untuk menghitung kerja (usaha) suatu gaya, sedangkan proyeksi vektor membantu memecah gaya menjadi komponen yang sejajar dan tegak lurus. Pada grafika komputer dan animasi, vektor menggeser serta memutar objek, dan vektor satuan memberi arah normal pada permukaan sehingga pencahayaan terlihat realistis.`,
    },
    {
      id: "kesalahan-umum",
      kind: "kesalahan-umum",
      title: "Kesalahan Umum",
      body: `**1. Menganggap panjang vektor selalu bilangan bulat.** Panjang adalah akar kuadrat; misalnya $\\lVert \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix} \\rVert = \\sqrt{5}$, bukan $3$.

**2. Menjumlahkan komponen yang tidak seposisi.** Komponen-$x$ hanya dijumlahkan dengan komponen-$x$. Menukar posisi menghasilkan vektor yang salah arah.

**3. Tertukar antara perkalian titik dan perkalian skalar.** $\\vec{a} \\cdot \\vec{b}$ menghasilkan **bilangan**, sedangkan $k\\vec{a}$ menghasilkan **vektor**.

**4. Menyamakan kolinear dengan "sama panjang".** Kolinear hanya menuntut arah sejajar ($\\vec{AC} = k\\,\\vec{AB}$); panjangnya boleh berbeda.

**5. Lupa membagi dengan panjang saat memakai rumus sudut.** Rumusnya $\\cos\\theta = \\dfrac{\\vec{a} \\cdot \\vec{b}}{\\lVert \\vec{a} \\rVert\\lVert \\vec{b} \\rVert}$. Tanpa pembagi, hasilnya bukan kosinus.`,
      blocks: [
        {
          kind: "spot-mistake",
          intro: "Seorang siswa menentukan panjang vektor $\\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$. Klik langkah yang keliru.",
          steps: [
            "Diketahui $\\vec{a} = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$.",
            "Jumlahkan komponennya: $1 + 2 = 3$.",
            "Jadi $\\lVert \\vec{a} \\rVert = 3$.",
          ],
          wrongIndex: 1,
          explanation: "Panjang vektor bukan jumlah komponen, melainkan akar dari jumlah kuadrat komponen. Seharusnya $\\lVert \\vec{a} \\rVert = \\sqrt{1^{2} + 2^{2}} = \\sqrt{5} \\approx 2{,}24$.",
        },
      ],
    },
    {
      id: "tantangan",
      kind: "tantangan",
      title: "Tantangan",
      body: `Salah satu hasil klasik geometri dapat dibuktikan dengan vektor hanya dalam beberapa baris.

Ambil sebarang segiempat $ABCD$. Tandai titik tengah setiap sisinya:
- $P$ titik tengah $AB$,
- $Q$ titik tengah $BC$,
- $R$ titik tengah $CD$,
- $S$ titik tengah $DA$.

Buktikan bahwa $PQRS$ selalu berupa **jajargenjang** (hasil ini dikenal sebagai teorema Varignon).`,
      blocks: [
        {
          kind: "callout",
          variant: "tip",
          title: "Petunjuk",
          text: `Nyatakan setiap titik tengah sebagai vektor posisi, misalnya $\\vec{p}=\\tfrac{1}{2}(\\vec{a}+\\vec{b})$. Kemudian bandingkan $\\vec{PQ}$ dengan $\\vec{SR}$.`,
        },
        {
          kind: "details",
          summary: "Pembahasan lengkap",
          text: `Misalkan $\\vec{a}$, $\\vec{b}$, $\\vec{c}$, $\\vec{d}$ adalah vektor posisi titik $A$, $B$, $C$, $D$. Karena $P,Q,R,S$ titik tengah, berlaku
$$\\vec{p}=\\tfrac{1}{2}(\\vec{a}+\\vec{b}),\\quad \\vec{q}=\\tfrac{1}{2}(\\vec{b}+\\vec{c}),\\quad \\vec{r}=\\tfrac{1}{2}(\\vec{c}+\\vec{d}),\\quad \\vec{s}=\\tfrac{1}{2}(\\vec{d}+\\vec{a}).$$

Hitung dua sisi $PQRS$:
$$\\vec{PQ}=\\vec{q}-\\vec{p}=\\tfrac{1}{2}(\\vec{c}-\\vec{a}),$$
$$\\vec{SR}=\\vec{r}-\\vec{s}=\\tfrac{1}{2}(\\vec{c}-\\vec{a}).$$

Karena $\\vec{PQ}=\\vec{SR}$, sepasang sisi berhadapan itu sejajar dan sama panjang. Jadi $PQRS$ adalah jajargenjang. Terbukti.`,
        },
      ],
    },
    {
      id: "refleksi",
      kind: "refleksi",
      title: "Refleksi",
      body: "Renungkan bagaimana besar dan arah vektor muncul dalam perpindahan dan gaya.",
      blocks: [
        {
          kind: "reflection",
          prompts: [
            "Apa perbedaan pokok antara vektor dan bilangan biasa, dan mengapa perbedaan itu penting?",
            "Kapan kamu memakai perkalian titik, dan informasi apa yang diberikannya?",
            "Bagaimana vektor menyederhanakan pembuktian sifat geometri dibandingkan cara koordinat atau gambar manual?",
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
              "Notasi vektor",
              "$\\vec{a} = \\begin{pmatrix} a_{1} \\\\ a_{2} \\end{pmatrix} = a_{1}\\mathbf{i} + a_{2}\\mathbf{j}$",
            ],
            [
              "Vektor dari $A$ ke $B$",
              "$\\vec{AB} = B - A$",
            ],
            [
              "Panjang vektor",
              "$\\lVert \\vec{a} \\rVert = \\sqrt{a_{1}^{2} + a_{2}^{2}}$",
            ],
            [
              "Vektor satuan",
              "$\\hat{a} = \\dfrac{\\vec{a}}{\\lVert \\vec{a} \\rVert}$",
            ],
            [
              "Penjumlahan / pengurangan",
              "komponen demi komponen",
            ],
            [
              "Perkalian titik",
              "$\\vec{a} \\cdot \\vec{b} = a_{1}b_{1} + a_{2}b_{2}$",
            ],
            [
              "Sudut antar vektor",
              "$\\cos\\theta = \\dfrac{\\vec{a} \\cdot \\vec{b}}{\\lVert \\vec{a} \\rVert\\lVert \\vec{b} \\rVert}$",
            ],
            [
              "Tegak lurus",
              "$\\vec{a} \\cdot \\vec{b} = 0$",
            ],
            [
              "Proyeksi skalar",
              "$c = \\dfrac{\\vec{a} \\cdot \\vec{b}}{\\lVert \\vec{b} \\rVert}$",
            ],
            [
              "Proyeksi vektor",
              "$\\vec{p} = \\dfrac{\\vec{a} \\cdot \\vec{b}}{\\lVert \\vec{b} \\rVert^{2}}\\,\\vec{b}$",
            ],
            [
              "Kolinear",
              "$\\vec{AC} = k\\,\\vec{AB}$",
            ],
          ],
        },
      ],
    },
    {
      id: "evaluasi",
      kind: "evaluasi",
      title: "Evaluasi",
      body: `**Tiket keluar.** (1) Bagaimana satu operasi perkalian titik dapat menentukan panjang, sudut, dan ketegaklurusan sekaligus? (2) Bagaimana vektor dipakai untuk membuktikan sifat geometri seperti teorema titik tengah? Setelah menjawab, lanjut ke [Latihan & Asesmen](/latihan) topik **Vektor** untuk latihan tambahan.`,
    },
  ],
};
