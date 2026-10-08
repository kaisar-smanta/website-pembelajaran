import type { Topic } from '@/types/content';

export const transformasiGeometri: Topic = {
  id: 'transformasi-geometri',
  slug: 'transformasi-geometri',
  title: 'Transformasi Geometri',
  subtitle: 'Menggeser, mencerminkan, memutar, dan memperbesar bangun pada bidang koordinat',
  grade: 'XII',
  phase: 'F',
  element: 'geometri',
  subject: 'matematika',
  status: 'lengkap',
  supplementary: true,
  cpNote:
    'Transformasi geometri belum tercantum sebagai topik eksplisit dalam daftar CP saat ini, tetapi topik ini memperkuat elemen geometri sekaligus menjembatani fungsi, matriks, dan sistem koordinat.',
  estimatedMinutes: 95,
  summary:
    'Mempelajari translasi, refleksi, rotasi, dan dilatasi titik serta bangun pada bidang koordinat dan menyatakannya dengan matriks $2 \\times 2$.',
  description:
    'Transformasi geometri menjelaskan bagaimana sebuah titik atau bangun berpindah dan berubah ukuran pada bidang koordinat. Translasi menggeser, refleksi mencerminkan terhadap garis, rotasi memutar terhadap titik asal, dan dilatasi mengubah ukuran dengan faktor skala. Setiap transformasi dapat dilacak melalui perubahan koordinat $(x,y)$ sekaligus diwakili oleh matriks $2 \\times 2$ untuk refleksi, rotasi, dan dilatasi. Dengan mengenali polanya, kita dapat menyusun transformasi tunggal yang setara dengan komposisi beberapa langkah dan menerapkannya pada desain, animasi, serta navigasi.',
  keywords: [
    'transformasi geometri',
    'translasi',
    'refleksi',
    'rotasi',
    'dilatasi',
    'komposisi transformasi',
    'matriks transformasi',
    'bidang koordinat',
  ],
  prerequisites: ['transformasi-fungsi'],
  relatedTopics: ['matriks', 'lingkaran', 'transformasi-fungsi'],
  prerequisiteKnowledge: [
    'Membaca dan menuliskan koordinat titik pada bidang Cartesius',
    'Menjumlahkan vektor kolom $\\begin{pmatrix} x \\\\ y \\end{pmatrix}$',
    'Mengalikan matriks $2 \\times 2$ dengan vektor kolom',
    'Menghitung determinan matriks $2 \\times 2$ sederhana',
  ],
  objectives: [
    { text: 'Peserta didik dapat menentukan bayangan titik oleh translasi.' },
    { text: 'Peserta didik dapat menentukan bayangan titik dan bangun oleh refleksi terhadap sumbu-$x$, sumbu-$y$, dan garis $y=x$.' },
    { text: 'Peserta didik dapat menentukan bayangan titik oleh rotasi $90^\\circ$, $180^\\circ$, dan $270^\\circ$ terhadap titik asal.' },
    { text: 'Peserta didik dapat menentukan bayangan titik oleh dilatasi dengan pusat titik asal dan faktor skala tertentu.' },
    { text: 'Peserta didik dapat menyelesaikan masalah komposisi transformasi menggunakan koordinat dan matriks $2 \\times 2$.' },
  ],
  applications: ['tgeo-motif-batik'],
  sections: [
    {
      id: "tujuan",
      kind: "tujuan",
      title: "Tujuan Pembelajaran",
      body: "Setelah mempelajari topik ini, peserta didik dapat menentukan bayangan titik dan bangun oleh translasi, refleksi, rotasi, dan dilatasi pada bidang koordinat, menyatakannya dengan matriks $2 \\times 2$, serta menyelesaikan masalah yang melibatkan komposisi transformasi geometri.",
    },
    {
      id: "pemantik",
      kind: "pemantik",
      title: "Pertanyaan Pemantik",
      body: `Sebuah logo pada layar komputer dapat digeser, diputar, dan dicerminkan. Ternyata semua perubahan posisi itu dapat dihitung hanya dari koordinat titik-titiknya.

Jika titik $A(2,-3)$ digeser sejauh $4$ satuan ke kanan dan $1$ satuan ke atas, di manakah posisi barunya? Bagaimana pula jika titik itu kemudian diputar $90^\\circ$ terhadap titik asal?`,
      blocks: [
        {
          kind: "prediction",
          prompt: "Titik $A(2,-3)$ digeser $4$ satuan ke kanan dan $1$ satuan ke atas, lalu diputar $90^\\circ$ berlawanan arah jarum jam terhadap titik asal. Di manakah bayangan akhirnya?",
          options: [
            "Setelah digeser diperoleh $(6,-2)$, lalu diputar menjadi $(2,6)$.",
            "Setelah digeser diperoleh $(6,-2)$, lalu diputar menjadi $(-2,6)$.",
            "Setelah digeser diperoleh $(-2,-4)$, lalu diputar menjadi $(4,-2)$.",
          ],
          reveal: `Digeser $4$ satuan ke kanan dan $1$ satuan ke atas: $(2+4,\\,-3+1)=(6,-2)$. Kemudian rotasi $90^\\circ$ berlawanan arah jarum jam memetakan $(x,y)\\rightarrow(-y,x)$, sehingga
$$(6,-2)\\rightarrow(2,6).$$
Jadi bayangan akhirnya $(2,6)$. Perhatikan bahwa urutan langkah menentukan hasil, karena menggeser lalu memutar tidak sama dengan memutar lalu menggeser.`,
          saveLabel: "Simpan dugaan & lihat jawabannya",
        },
      ],
    },
    {
      id: "prasyarat",
      kind: "prasyarat",
      title: "Prasyarat",
      body: `Sebelum melanjutkan, pastikan kamu menguasai:
- membaca dan menuliskan koordinat titik pada bidang Cartesius;
- menjumlahkan vektor kolom, misalnya $\\begin{pmatrix} 2 \\\\ -3 \\end{pmatrix}+\\begin{pmatrix} 4 \\\\ 1 \\end{pmatrix}=\\begin{pmatrix} 6 \\\\ -2 \\end{pmatrix}$;
- mengalikan matriks $2 \\times 2$ dengan vektor kolom;
- menghitung determinan matriks $2 \\times 2$, yaitu $ad-bc$.`,
    },
    {
      id: "konteks",
      kind: "konteks",
      title: "Situasi dan Konteks",
      body: `Setiap titik pada bidang dapat ditulis sebagai vektor kolom $\\begin{pmatrix} x \\\\ y \\end{pmatrix}$. Transformasi geometri memetakan titik itu ke titik baru.

Perpindahan pola pada kain, perputaran jarum jam, pencerminan pada cermin datar, dan pembesaran logo semuanya dapat dibaca sebagai transformasi. Dengan menyatakannya dalam koordinat dan matriks, kita dapat mengolah ribuan titik sekaligus, seperti yang dilakukan program grafika komputer dan sistem navigasi.`,
    },
    {
      id: "translasi",
      kind: "konsep",
      title: "Translasi: Pergeseran",
      body: `Translasi (pergeseran) sejauh $\\binom{a}{b}$ memindahkan setiap titik tanpa mengubah bentuk maupun ukuran bangun. Pemetaan titiknya adalah
$$(x,y)\\rightarrow(x+a,\\;y+b).$$
Dalam bentuk vektor kolom:
$$\\begin{pmatrix} x' \\\\ y' \\end{pmatrix}=\\begin{pmatrix} x \\\\ y \\end{pmatrix}+\\begin{pmatrix} a \\\\ b \\end{pmatrix}.$$

Sebagai contoh, translasi $\\binom{3}{-2}$ memetakan $(1,4)$ ke $(4,2)$. Semua titik bergeser dengan panjang dan arah yang sama, sehingga luas dan orientasi bangun tetap.`,
      blocks: [
        {
          kind: "callout",
          variant: "warning",
          title: "Hati-hati",
          text: "Translasi adalah penjumlahan vektor, bukan perkalian matriks $2 \\times 2$. Mengalikan dengan matriks identitas tidak memindahkan titik.",
        },
      ],
    },
    {
      id: "refleksi-bangun",
      kind: "konsep",
      title: "Refleksi: Pencerminan",
      body: `Refleksi (pencerminan) terhadap sebuah garis memetakan titik ke bayangannya dengan jarak yang sama terhadap garis itu. Terhadap sumbu koordinat dan garis $y=x$, pemetaannya sederhana.

**Terhadap sumbu-$x$:** $(x,y)\\rightarrow(x,-y)$.
**Terhadap sumbu-$y$:** $(x,y)\\rightarrow(-x,y)$.
**Terhadap garis $y=x$:** $(x,y)\\rightarrow(y,x)$.

Perhatikan bahwa refleksi terhadap sumbu-$x$ mengubah tanda ordinat, sedangkan refleksi terhadap sumbu-$y$ mengubah tanda absis. Keduanya berbeda dan tidak boleh dipertukarkan. Refleksi menjaga bentuk dan luas, tetapi membalik orientasi bangun.`,
      blocks: [
        {
          kind: "table",
          caption: "Matriks refleksi terhadap titik asal",
          headers: [
            "Sumbu / garis",
            "Pemetaan titik",
            "Matriks",
          ],
          rows: [
            [
              "Sumbu $x$",
              "$(x,y)\\rightarrow(x,-y)$",
              "$\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$",
            ],
            [
              "Sumbu $y$",
              "$(x,y)\\rightarrow(-x,y)$",
              "$\\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}$",
            ],
            [
              "Garis $y=x$",
              "$(x,y)\\rightarrow(y,x)$",
              "$\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$",
            ],
          ],
        },
        {
          kind: "callout",
          variant: "tip",
          title: "Cek cepat",
          text: "Setiap matriks refleksi memiliki determinan $-1$, sehingga luas bangun tetap tetapi orientasinya terbalik. Selalu pilih refleksi yang tepat sesuai garis yang diminta.",
        },
      ],
    },
    {
      id: "rotasi",
      kind: "rumus",
      title: "Rotasi terhadap Titik Asal",
      body: `Rotasi sebesar $\\theta$ berlawanan arah jarum jam terhadap titik asal $O$ diwakili matriks
$$R_{\\theta}=\\begin{pmatrix}\\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta\\end{pmatrix}.$$
Sudut-sudut istimewa memberi bentuk sederhana:
$$R_{90^\\circ}=\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix},\\quad R_{180^\\circ}=\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix},\\quad R_{270^\\circ}=\\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}.$$

Pemetaan praktisnya:
- rotasi $90^\\circ$: $(x,y)\\rightarrow(-y,x)$;
- rotasi $180^\\circ$: $(x,y)\\rightarrow(-x,-y)$;
- rotasi $270^\\circ$: $(x,y)\\rightarrow(y,-x)$.

Sebagai contoh, $R_{90^\\circ}$ memetakan $(3,1)$ ke $(-1,3)$, sedangkan $R_{180^\\circ}$ memetakan $(3,1)$ ke $(-3,-1)$. Determinan setiap matriks rotasi adalah $\\cos^{2}\\theta+\\sin^{2}\\theta=1$, sehingga rotasi tidak mengubah luas.`,
    },
    {
      id: "dilatasi",
      kind: "konsep",
      title: "Dilatasi: Mengubah Ukuran",
      body: `Dilatasi dengan pusat titik asal dan faktor skala $k$ memetakan titik sebagai
$$(x,y)\\rightarrow(kx,\\,ky),$$
dan diwakili matriks
$$D_{k}=\\begin{pmatrix} k & 0 \\\\ 0 & k \\end{pmatrix}.$$

Jika $k>1$ bangun diperbesar; jika $0<k<1$ bangun diperkecil; dan jika $k<0$ bangun diperbesar sekaligus dicerminkan terhadap titik asal. Determinan matriksnya adalah $k^{2}$, sehingga luas bayangan menjadi $k^{2}$ kali luas semula.

Sebagai contoh, dengan faktor skala $2$ titik $(-1,3)$ dipetakan ke $(-2,6)$ dan luas bangun menjadi $4$ kali semula.`,
      blocks: [
        {
          kind: "table",
          caption: "Pengaruh faktor skala $k$ pada dilatasi berpusat $O$",
          headers: [
            "Nilai $k$",
            "Pengaruh",
            "Faktor skala luas",
          ],
          rows: [
            [
              "$k=2$",
              "bangun diperbesar",
              "$4$",
            ],
            [
              "$k=\\tfrac{1}{2}$",
              "bangun diperkecil",
              "$\\tfrac{1}{4}$",
            ],
            [
              "$k=-1$",
              "sama dengan rotasi $180^\\circ$",
              "$1$",
            ],
          ],
        },
      ],
    },
    {
      id: "representasi",
      kind: "representasi",
      title: "Menyajikan Transformasi: Koordinat dan Matriks",
      body: "Setiap transformasi linear terhadap titik asal dapat dibaca dari perubahan koordinat sekaligus dari matriksnya.",
      blocks: [
        {
          kind: "table",
          caption: "Ringkasan pemetaan titik dan matriksnya",
          headers: [
            "Transformasi",
            "Pemetaan titik",
            "Matriks",
          ],
          rows: [
            [
              "Translasi $\\binom{a}{b}$",
              "$(x+a,\\,y+b)$",
              "penjumlahan vektor",
            ],
            [
              "Refleksi sumbu $x$",
              "$(x,-y)$",
              "$\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$",
            ],
            [
              "Refleksi sumbu $y$",
              "$(-x,y)$",
              "$\\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}$",
            ],
            [
              "Refleksi $y=x$",
              "$(y,x)$",
              "$\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$",
            ],
            [
              "Rotasi $90^\\circ$",
              "$(-y,x)$",
              "$\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$",
            ],
            [
              "Dilatasi $k$",
              "$(kx,ky)$",
              "$\\begin{pmatrix} k & 0 \\\\ 0 & k \\end{pmatrix}$",
            ],
          ],
        },
        {
          kind: "match",
          intro: "Cocokkan setiap transformasi dengan pemetaan titiknya.",
          pairs: [
            {
              left: "Refleksi terhadap sumbu-$x$",
              right: "$(x,y)\\rightarrow(x,-y)$",
            },
            {
              left: "Refleksi terhadap garis $y=x$",
              right: "$(x,y)\\rightarrow(y,x)$",
            },
            {
              left: "Rotasi $90^\\circ$ berlawanan arah jarum jam",
              right: "$(x,y)\\rightarrow(-y,x)$",
            },
            {
              left: "Dilatasi faktor $2$",
              right: "$(x,y)\\rightarrow(2x,2y)$",
            },
          ],
        },
        {
          kind: "tabs",
          items: [
            {
              label: "Simbolik",
              body: "Rotasi $90^\\circ$ ditulis $\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}\\begin{pmatrix} x \\\\ y \\end{pmatrix}=\\begin{pmatrix} -y \\\\ x \\end{pmatrix}$.",
            },
            {
              label: "Tabel",
              body: "Titik $(2,-3)$ dipetakan oleh rotasi $90^\\circ$ menjadi $(3,2)$; dapat diperiksa langsung pada baris tabel.",
            },
            {
              label: "Grafik",
              body: "Titik $(2,-3)$ di kuadran IV berpindah ke $(3,2)$ di kuadran I, berputar seperempat putaran terhadap titik asal.",
            },
          ],
        },
      ],
    },
    {
      id: "eksplorasi",
      kind: "eksplorasi",
      title: "Eksplorasi Transformasi dengan Matriks",
      body: "Isi dua matriks $2 \\times 2$, hitung hasil kali dan determinannya, lalu amati bagaimana matriks memindahkan titik pada bidang. Selidiki juga pengaruh urutan perkalian terhadap hasil akhir.",
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
      title: "Komposisi dan Pola Umum",
      body: `Jika suatu titik dikenai transformasi $T_{1}$ dengan matriks $M_{1}$, lalu dilanjutkan oleh $T_{2}$ dengan matriks $M_{2}$, matriks gabungannya adalah
$$M=M_{2}M_{1}.$$
Matriks $M_{1}$ berada di kanan karena dipakai lebih dahulu. Karena perkalian matriks tidak komutatif, **urutan langkah menentukan hasil**.

Sebagai contoh, rotasi $90^\\circ$ berlawanan arah jarum jam dilanjutkan refleksi terhadap sumbu-$x$ memberi
$$M=\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}=\\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix},$$
yang tidak lain adalah refleksi terhadap garis $y=-x$.

Satu bilangan merangkum pengaruh transformasi terhadap luas, yaitu determinan $\\det\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}=ad-bc$. Nilai $\\lvert\\det(M)\\rvert$ menyatakan berapa kali luas bangun berubah, sedangkan tanda determinan menunjukkan apakah orientasi bangun terbalik.`,
    },
    {
      id: "rumus",
      kind: "rumus",
      title: "Kumpulan Rumus Transformasi",
      body: `Untuk titik $(x,y)$ pada bidang, berlaku ringkasan berikut.

| Transformasi | Pemetaan | Matriks $2 \\times 2$ |
| :-- | :-- | :-- |
| Translasi $\\binom{a}{b}$ | $(x+a,\\,y+b)$ | $\\begin{pmatrix} x' \\\\ y' \\end{pmatrix}=\\begin{pmatrix} x \\\\ y \\end{pmatrix}+\\begin{pmatrix} a \\\\ b \\end{pmatrix}$ |
| Refleksi sumbu-$x$ | $(x,-y)$ | $\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$ |
| Refleksi sumbu-$y$ | $(-x,y)$ | $\\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}$ |
| Refleksi garis $y=x$ | $(y,x)$ | $\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$ |
| Rotasi $90^\\circ$ | $(-y,x)$ | $\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$ |
| Rotasi $180^\\circ$ | $(-x,-y)$ | $\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$ |
| Rotasi $270^\\circ$ | $(y,-x)$ | $\\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}$ |
| Dilatasi $k$ | $(kx,ky)$ | $\\begin{pmatrix} k & 0 \\\\ 0 & k \\end{pmatrix}$ |

Untuk komposisi $T_{1}$ lalu $T_{2}$, matriks gabungannya $M_{2}M_{1}$. Faktor skala luas sebuah transformasi linear adalah $\\lvert\\det(M)\\rvert$.`,
    },
    {
      id: "contoh",
      kind: "contoh",
      title: "Contoh Terbimbing",
      blocks: [
        {
          kind: "step-reveal",
          intro: "Mari kerjakan beberapa contoh transformasi satu langkah sekaligus.",
          steps: [
            {
              title: "Contoh 1: translasi",
              text: `Tentukan bayangan titik $A(2,-3)$ oleh translasi $\\binom{4}{1}$.

*Penyelesaian.* $(x,y)\\rightarrow(x+4,\\,y+1)$, sehingga $(2,-3)\\rightarrow(6,-2)$. Jadi bayangannya $A'(6,-2)$.`,
            },
            {
              title: "Contoh 2: refleksi",
              text: `Tentukan bayangan titik $B(-5,2)$ oleh refleksi terhadap sumbu-$x$ dan terhadap garis $y=x$.

*Penyelesaian.* Terhadap sumbu-$x$: $(-5,2)\\rightarrow(-5,-2)$. Terhadap garis $y=x$: $(-5,2)\\rightarrow(2,-5)$. Perhatikan bahwa absis dan ordinat bertukar peran pada refleksi $y=x$.`,
            },
            {
              title: "Contoh 3: rotasi",
              text: `Tentukan bayangan titik $C(3,-1)$ oleh rotasi $90^\\circ$ berlawanan arah jarum jam terhadap titik asal.

*Penyelesaian.* $R_{90^\\circ}$ memetakan $(x,y)\\rightarrow(-y,x)$, sehingga $(3,-1)\\rightarrow(1,3)$. Dengan matriks:
$$\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}\\begin{pmatrix} 3 \\\\ -1 \\end{pmatrix}=\\begin{pmatrix} 1 \\\\ 3 \\end{pmatrix}.$$
Jadi bayangannya $C'(1,3)$.`,
            },
            {
              title: "Contoh 4: dilatasi",
              text: `Tentukan bayangan titik $D(-1,3)$ oleh dilatasi berpusat $O$ dengan faktor skala $2$, lalu tentukan faktor skala luasnya.

*Penyelesaian.* $(x,y)\\rightarrow(2x,2y)$, sehingga $(-1,3)\\rightarrow(-2,6)$. Determinan matriksnya $\\det\\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix}=4$, jadi luas bangun menjadi $4$ kali semula.`,
            },
            {
              title: "Contoh 5: komposisi",
              text: `Titik $E(2,1)$ direfleksikan terhadap sumbu-$x$, lalu dirotasi $180^\\circ$ terhadap titik asal. Tentukan bayangan akhirnya dan matriks gabungannya.

*Penyelesaian.* Refleksi sumbu-$x$: $(2,1)\\rightarrow(2,-1)$. Rotasi $180^\\circ$: $(2,-1)\\rightarrow(-2,1)$. Matriks gabungan
$$M=\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}=\\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix},$$
yang setara dengan refleksi terhadap sumbu-$y$; memang $(2,1)\\rightarrow(-2,1)$.`,
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
      body: `Transformasi geometri menjadi tulang punggung grafika komputer dan animasi. Ketika sebuah objek diputar, digeser, atau diperbesar, koordinat setiap titiknya diolah dengan aturan transformasi. Karena komposisi transformasi dapat diringkas menjadi satu matriks, prosesnya menjadi cepat dan hemat.

Dalam desain motif batik, pola dicerminkan dan digeser untuk membentuk ragam hias yang berulang. Pada peta digital dan sistem navigasi, rotasi dan translasi dipakai menyelaraskan koordinat. Teknik yang sama juga muncul pada robotika, pengolahan citra, dan pemodelan tiga dimensi.`,
    },
    {
      id: "kesalahan-umum",
      kind: "kesalahan-umum",
      title: "Kesalahan Umum",
      body: `**1. Menukar refleksi sumbu-$x$ dan sumbu-$y$.** Refleksi sumbu-$x$ mengubah tanda ordinat, $(x,-y)$; refleksi sumbu-$y$ mengubah tanda absis, $(-x,y)$.

**2. Salah tanda pada rotasi.** Rotasi $90^\\circ$ berlawanan arah jarum jam memakai $(x,y)\\rightarrow(-y,x)$, bukan $(y,-x)$ yang justru rotasi $270^\\circ$.

**3. Menukar urutan komposisi.** Untuk $T_{1}$ lalu $T_{2}$, matriksnya $M_{2}M_{1}$, bukan $M_{1}M_{2}$. Perkalian matriks tidak komutatif.

**4. Mencampur translasi dengan perkalian matriks.** Translasi adalah penjumlahan vektor, bukan perkalian matriks $2 \\times 2$ terhadap titik asal.

**5. Melupakan nilai mutlak determinan.** Faktor skala luas adalah $\\lvert\\det(M)\\rvert$; tanda determinan hanya menunjukkan orientasi.`,
      blocks: [
        {
          kind: "spot-mistake",
          intro: "Seorang siswa menentukan bayangan titik $(3,2)$ oleh rotasi $90^\\circ$ berlawanan arah jarum jam terhadap titik asal. Klik langkah yang keliru.",
          steps: [
            "Gunakan $R_{90^\\circ}=\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$.",
            "Kalikan dengan vektor kolom: $\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}\\begin{pmatrix} 3 \\\\ 2 \\end{pmatrix}$.",
            "Hitung hasilnya menjadi $\\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}$.",
            "Simpulkan bayangannya $(2,3)$.",
          ],
          wrongIndex: 2,
          explanation: "Perhitungan yang benar adalah $\\begin{pmatrix} 0 \\cdot 3 + (-1)\\cdot 2 \\\\ 1 \\cdot 3 + 0 \\cdot 2 \\end{pmatrix}=\\begin{pmatrix} -2 \\\\ 3 \\end{pmatrix}$, sehingga bayangannya $(-2,3)$, bukan $(2,3)$.",
        },
      ],
    },
    {
      id: "tantangan",
      kind: "tantangan",
      title: "Tantangan",
      body: `Komposisi dua pencerminan menyimpan pola yang indah.

Misalkan $R_x$ adalah refleksi terhadap sumbu-$x$ dan $R_{y=x}$ refleksi terhadap garis $y=x$. Kedua garis itu berpotongan di titik asal dan membentuk sudut $45^\\circ$.

Buktikan bahwa komposisi "refleksi terhadap sumbu-$x$ **lalu** refleksi terhadap garis $y=x$" setara dengan **rotasi $90^\\circ$ berlawanan arah jarum jam** terhadap titik asal.`,
      blocks: [
        {
          kind: "callout",
          variant: "tip",
          title: "Petunjuk",
          text: `Susun matriks komposisinya, yaitu $M=R_{y=x}\\,R_x$ (yang dikerjakan lebih dahulu berada di kanan). Bandingkan hasilnya dengan matriks rotasi $90^\\circ$.`,
        },
        {
          kind: "step-reveal",
          intro: "Bandingkan hasil komposisi dengan matriks rotasi yang sudah dikenal.",
          steps: [
            {
              title: "Matriks refleksi sumbu-$x$",
              text: `$R_x=\\begin{pmatrix}1&0\\\\0&-1\\end{pmatrix}$.`,
            },
            {
              title: "Matriks refleksi garis $y=x$",
              text: `$R_{y=x}=\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}$.`,
            },
            {
              title: "Susun komposisi",
              text: `Karena $R_x$ dikerjakan lebih dahulu, $M=R_{y=x}R_x=\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}\\begin{pmatrix}1&0\\\\0&-1\\end{pmatrix}$.`,
            },
            {
              title: "Hitung hasil kali",
              text: `$M=\\begin{pmatrix}0\\cdot1+1\\cdot0 & 0\\cdot0+1\\cdot(-1)\\\\ 1\\cdot1+0\\cdot0 & 1\\cdot0+0\\cdot(-1)\\end{pmatrix}=\\begin{pmatrix}0&-1\\\\1&0\\end{pmatrix}$.`,
            },
            {
              title: "Bandingkan dengan rotasi",
              text: `Matriks $\\begin{pmatrix}0&-1\\\\1&0\\end{pmatrix}$ tepat sama dengan matriks rotasi $90^\\circ$ berlawanan arah jarum jam. Jadi komposisi itu setara dengan rotasi $90^\\circ$. Terbukti.`,
            },
          ],
        },
      ],
    },
    {
      id: "refleksi",
      kind: "refleksi",
      title: "Refleksi",
      body: "Renungkan bagaimana pencerminan dan pemutaran menjaga atau mengubah bentuk bangun.",
      blocks: [
        {
          kind: "reflection",
          prompts: [
            "Bagaimana kamu membedakan refleksi terhadap sumbu-$x$, sumbu-$y$, dan garis $y=x$ hanya dari perubahan koordinatnya?",
            "Mengapa rotasi $90^\\circ$ dan rotasi $270^\\circ$ menghasilkan bayangan yang berbeda? Jelaskan dengan tanda koordinat.",
            "Apa arti geometris dari determinan sebuah matriks transformasi?",
            "Mengapa urutan pada komposisi transformasi tidak boleh ditukar? Berikan satu contoh.",
          ],
          confidenceLabel: "Seberapa yakin kamu menentukan bayangan titik oleh setiap transformasi?",
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
            "Pemetaan titik",
            "Matriks / bentuk",
          ],
          rows: [
            [
              "Translasi $\\binom{a}{b}$",
              "$(x+a,\\,y+b)$",
              "penjumlahan vektor",
            ],
            [
              "Refleksi sumbu-$x$",
              "$(x,-y)$",
              "$\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$",
            ],
            [
              "Refleksi sumbu-$y$",
              "$(-x,y)$",
              "$\\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}$",
            ],
            [
              "Refleksi garis $y=x$",
              "$(y,x)$",
              "$\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$",
            ],
            [
              "Rotasi $90^\\circ$",
              "$(-y,x)$",
              "$\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$",
            ],
            [
              "Rotasi $180^\\circ$",
              "$(-x,-y)$",
              "$\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$",
            ],
            [
              "Dilatasi $k$",
              "$(kx,ky)$",
              "$\\begin{pmatrix} k & 0 \\\\ 0 & k \\end{pmatrix}$",
            ],
            [
              "Komposisi $T_{1}$ lalu $T_{2}$",
              "$T_{2}(T_{1}(x,y))$",
              "$M_{2}M_{1}$",
            ],
          ],
        },
      ],
    },
    {
      id: "evaluasi",
      kind: "evaluasi",
      title: "Evaluasi",
      body: `**Tiket keluar.** (1) Bagaimana satu matriks $2 \\times 2$ dapat mewakili refleksi, rotasi, dan dilatasi sekaligus? (2) Mengapa urutan dua transformasi memengaruhi hasil akhir? Setelah menjawab, lanjut ke [Latihan & Asesmen](/latihan) topik **Transformasi Geometri** untuk latihan tambahan.`,
    },
  ],
};
