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
Jadi bayangan akhirnya $(2,6)$. Ternyata urutan langkah menentukan hasil, karena menggeser lalu memutar tidak sama dengan memutar lalu menggeser.`,
          saveLabel: "Simpan dugaan & lihat jawabannya",
        },
      ],
    },
    {
      id: "prasyarat",
      kind: "prasyarat",
      title: "Prasyarat",
      body: `Sebelum memindahkan bangun di bidang, segarkan dahulu kemampuan berikut:
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

Translasi $\\binom{3}{-2}$ memetakan $(1,4)$ ke $(4,2)$. Semua titik bergeser dengan panjang dan arah yang sama, sehingga luas dan orientasi bangun tetap.`,
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

Refleksi terhadap sumbu-$x$ mengubah tanda ordinat, sedangkan refleksi terhadap sumbu-$y$ mengubah tanda absis. Keduanya berbeda dan tidak boleh dipertukarkan. Refleksi menjaga bentuk dan luas, tetapi membalik orientasi bangun.`,
      blocks: [
        {
          kind: "table",
          caption: "Pemetaan refleksi pada bidang",
          headers: [
            "Sumbu / garis",
            "Pemetaan titik",
            "Contoh",
          ],
          rows: [
            [
              "Sumbu $x$",
              "$(x,y)\\rightarrow(x,-y)$",
              "$(3,2)\\rightarrow(3,-2)$",
            ],
            [
              "Sumbu $y$",
              "$(x,y)\\rightarrow(-x,y)$",
              "$(3,2)\\rightarrow(-3,2)$",
            ],
            [
              "Garis $y=x$",
              "$(x,y)\\rightarrow(y,x)$",
              "$(3,2)\\rightarrow(2,3)$",
            ],
          ],
        },
        {
          kind: "callout",
          variant: "tip",
          title: "Cek cepat",
          text: "Refleksi menjaga bentuk dan luas, tetapi membalik orientasi bangun. Selalu pilih refleksi yang sesuai dengan garis yang diminta. Bentuk matriksnya dibahas pada topik [Matriks Transformasi](/matematika-lanjut/kelas/XI/aljabar-fungsi/matriks-transformasi).",
        },
        {
          kind: "figure",
          alt: "Segitiga ABC pada bidang koordinat dicerminkan terhadap sumbu-y sehingga muncul bayangan A aksen, B aksen, dan C aksen di sebelah kiri sumbu-y.",
          caption: "Refleksi terhadap sumbu-$y$ memetakan segitiga $ABC$ (garis padat) menjadi bayangannya $A^{\\prime}B^{\\prime}C^{\\prime}$ (garis putus-putus). Jarak setiap titik ke sumbu-$y$ tetap, hanya tandanya yang berubah.",
          svg: '<svg viewBox="0 0 320 220" aria-hidden="true" role="presentation"><line x1="160" y1="15" x2="160" y2="205" stroke="currentColor" stroke-width="1"/><line x1="25" y1="120" x2="295" y2="120" stroke="currentColor" stroke-width="1"/><polygon points="200,100 240,100 220,60" fill="none" stroke="currentColor" stroke-width="2.5"/><polygon points="120,100 80,100 100,60" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="5 4"/><circle cx="200" cy="100" r="3" fill="currentColor"/><circle cx="240" cy="100" r="3" fill="currentColor"/><circle cx="220" cy="60" r="3" fill="currentColor"/><circle cx="120" cy="100" r="3" fill="currentColor"/><circle cx="80" cy="100" r="3" fill="currentColor"/><circle cx="100" cy="60" r="3" fill="currentColor"/><text x="292" y="135" font-size="12" fill="currentColor">x</text><text x="166" y="20" font-size="12" fill="currentColor">y</text><text x="206" y="108" font-size="12" fill="currentColor">A</text><text x="244" y="112" font-size="12" fill="currentColor">B</text><text x="224" y="55" font-size="12" fill="currentColor">C</text><text x="106" y="108" font-size="12" fill="currentColor">A&#8242;</text><text x="64" y="112" font-size="12" fill="currentColor">B&#8242;</text><text x="86" y="55" font-size="12" fill="currentColor">C&#8242;</text></svg>',
        },
      ],
    },
    {
      id: "rotasi",
      kind: "rumus",
      title: "Rotasi terhadap Titik Asal",
      body: `Rotasi memutar sebuah titik terhadap pusat $O$ sebesar sudut tertentu. Untuk sudut istimewa, pemetaannya sederhana:
$$(x,y)\\rightarrow(-y,x) \\quad (90^\\circ), \\qquad (x,y)\\rightarrow(-x,-y) \\quad (180^\\circ), \\qquad (x,y)\\rightarrow(y,-x) \\quad (270^\\circ),$$
dihitung berlawanan arah jarum jam.

Contohnya, rotasi $90^\\circ$ memetakan $(3,1)$ ke $(-1,3)$, sedangkan rotasi $180^\\circ$ memetakan $(3,1)$ ke $(-3,-1)$. Rotasi menjaga bentuk dan luas bangun; hanya arahnya yang berputar. Bentuk matriks rotasi, termasuk rumus umum untuk sudut $\\theta$ sembarang, dipelajari pada topik [Matriks Transformasi](/matematika-lanjut/kelas/XI/aljabar-fungsi/matriks-transformasi).`,
      blocks: [
        {
          kind: "figure",
          alt: "Titik A pada kuadran I diputar 90 derajat berlawanan arah jarum jam terhadap titik asal O menjadi titik A aksen di kuadran II, dengan busur panah sebagai arah putaran.",
          caption: "Rotasi $90^\\circ$ berlawanan arah jarum jam terhadap titik asal memetakan $A(3,1)$ ke $A^{\\prime}(-1,3)$. Jarak titik ke titik asal tetap, hanya arahnya yang berputar.",
          svg: '<svg viewBox="0 0 320 220" aria-hidden="true" role="presentation"><defs><marker id="fig-tgeo-rot-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0,0 L 10,5 L 0,10 z" fill="currentColor"/></marker></defs><line x1="30" y1="150" x2="300" y2="150" stroke="currentColor" stroke-width="1.2"/><line x1="160" y1="25" x2="160" y2="205" stroke="currentColor" stroke-width="1.2"/><line x1="160" y1="150" x2="250" y2="120" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="150" x2="130" y2="60" stroke="currentColor" stroke-width="1.6"/><path d="M250,120 Q215,55 130,60" fill="none" stroke="currentColor" stroke-width="1.4" stroke-dasharray="4 3" marker-end="url(#fig-tgeo-rot-arrow)"/><circle cx="160" cy="150" r="3" fill="currentColor"/><circle cx="250" cy="120" r="3.5" fill="currentColor"/><circle cx="130" cy="60" r="3.5" fill="currentColor"/><text x="150" y="168" font-size="12" fill="currentColor">O</text><text x="256" y="118" font-size="12" fill="currentColor">A</text><text x="112" y="55" font-size="12" fill="currentColor">A&#8242;</text><text x="292" y="166" font-size="12" fill="currentColor">x</text><text x="166" y="34" font-size="12" fill="currentColor">y</text></svg>',
        },
      ],
    },
    {
      id: "dilatasi",
      kind: "konsep",
      title: "Dilatasi: Mengubah Ukuran",
      body: `Dilatasi dengan pusat titik asal dan faktor skala $k$ memetakan titik sebagai
$$(x,y)\\rightarrow(kx,\\,ky).$$

Jika $k>1$ bangun diperbesar; jika $0<k<1$ bangun diperkecil; dan jika $k<0$ ukurannya dikalikan $\\lvert k\\rvert$ sekaligus dicerminkan terhadap titik asal. Karena setiap panjang dikalikan $\\lvert k\\rvert$, luas bayangan menjadi $k^{2}$ kali luas semula.

Dengan faktor skala $2$, titik $(-1,3)$ dipetakan ke $(-2,6)$ dan luas bangun menjadi $2^{2}=4$ kali semula.`,
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
        {
          kind: "figure",
          alt: "Persegi satuan dan bayangan dilatasinya berpusat di titik asal dengan faktor dua; persegi besar memiliki luas empat kali persegi kecil.",
          caption: "Dilatasi berpusat $O$ dengan faktor skala $k=2$: setiap panjang menjadi $2$ kali, sehingga luas menjadi $k^{2}=2^{2}=4$ kali. Persegi kecil berluas $1$ satuan luas, sedangkan bayangannya berluas $4$ satuan luas.",
          svg: '<svg viewBox="0 0 320 220" aria-hidden="true" role="presentation"><line x1="30" y1="170" x2="300" y2="170" stroke="currentColor" stroke-width="1"/><line x1="100" y1="25" x2="100" y2="205" stroke="currentColor" stroke-width="1"/><rect x="100" y="130" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2.5"/><rect x="100" y="90" width="80" height="80" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="5 4"/><line x1="100" y1="170" x2="180" y2="90" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/><circle cx="100" cy="170" r="3" fill="currentColor"/><text x="106" y="164" font-size="12" fill="currentColor">O</text><text x="292" y="185" font-size="12" fill="currentColor">x</text><text x="106" y="35" font-size="12" fill="currentColor">y</text><text x="112" y="155" font-size="11" fill="currentColor">luas 1</text><text x="184" y="86" font-size="11" fill="currentColor">luas 4</text></svg>',
        },
      ],
    },
    {
      id: "representasi",
      kind: "representasi",
      title: "Menyajikan Transformasi: Koordinat",
      body: "Setiap transformasi linear terhadap titik asal dapat dibaca dari perubahan koordinat titiknya. Bentuk matriks refleksi, rotasi, dan dilatasi, serta cara mengalikannya, dipelajari pada topik [Matriks Transformasi](/matematika-lanjut/kelas/XI/aljabar-fungsi/matriks-transformasi).",
      blocks: [
        {
          kind: "table",
          caption: "Ringkasan pemetaan titik pada bidang",
          headers: [
            "Transformasi",
            "Pemetaan titik",
            "Sifat",
          ],
          rows: [
            [
              "Translasi $\\binom{a}{b}$",
              "$(x+a,\\,y+b)$",
              "bentuk dan orientasi tetap",
            ],
            [
              "Refleksi sumbu $x$",
              "$(x,-y)$",
              "orientasi terbalik, luas tetap",
            ],
            [
              "Refleksi sumbu $y$",
              "$(-x,y)$",
              "orientasi terbalik, luas tetap",
            ],
            [
              "Refleksi $y=x$",
              "$(y,x)$",
              "orientasi terbalik, luas tetap",
            ],
            [
              "Rotasi $90^\\circ$",
              "$(-y,x)$",
              "berputar, luas tetap",
            ],
            [
              "Dilatasi $k$",
              "$(kx,ky)$",
              "ukuran berubah $\\lvert k\\rvert$ kali",
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
              body: "Secara aljabar, rotasi $90^\\circ$ mengubah $(x,y)$ menjadi $(-y,x)$; aturan ini berlaku untuk setiap titik pada bidang.",
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
        {
          kind: "flip-cards",
          intro: "Latih istilah dasar transformasi bidang.",
          cards: [
            {
              front: "Transformasi",
              back: "Aturan yang memetakan setiap titik bidang ke titik lain",
            },
            {
              front: "Translasi",
              back: "Pergeseran sejauh vektor tertentu; bentuk dan orientasi tetap",
            },
            {
              front: "Refleksi",
              back: "Pencerminan terhadap garis; jarak ke garis tetap, orientasi terbalik",
            },
            {
              front: "Rotasi",
              back: "Pemutaran terhadap titik asal sebesar sudut tertentu",
            },
            {
              front: "Dilatasi",
              back: "Pembesaran atau pengecilan dengan faktor skala $k$",
            },
            {
              front: "Komposisi",
              back: "Menggabungkan beberapa transformasi menjadi satu",
            },
            {
              front: "Faktor skala luas",
              back: "Berapa kali luas bangun berubah setelah transformasi",
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
          explorationId: "transformasi-geometri-matriks",
        },
      ],
    },
    {
      id: "generalisasi",
      kind: "generalisasi",
      title: "Komposisi dan Pola Umum",
      body: `Menggabungkan beberapa transformasi menghasilkan satu transformasi tunggal. Jika titik dikenai $T_{1}$ lebih dahulu, lalu $T_{2}$, hasil akhirnya sama dengan satu transformasi gabungan:
$$T(x,y)=T_{2}\\bigl(T_{1}(x,y)\\bigr).$$
Transformasi yang dikerjakan **lebih dahulu** diterapkan paling awal. Karena urutan langkah tidak dapat ditukar, **urutan transformasi menentukan hasil**.

Refleksi terhadap sumbu-$x$ lalu rotasi $180^\\circ$ memindahkan $(2,1)$ ke $(-2,1)$: sama dengan refleksi terhadap sumbu-$y$. Menukar urutan kedua langkah dapat memberi hasil yang berbeda.

Satu bilangan merangkum pengaruh transformasi terhadap luas, yaitu faktor skala luas. Untuk dilatasi faktor $k$, luas berubah $k^{2}$ kali; rotasi dan refleksi tidak mengubah luas sama sekali. Cara menghitung faktor ini melalui determinan matriks dijelaskan pada topik [Matriks Transformasi](/matematika-lanjut/kelas/XI/aljabar-fungsi/matriks-transformasi), sedangkan operasi, determinan, dan invers matriksnya sendiri dibahas pada topik [Matriks](/matematika/kelas/XI/aljabar-fungsi/matriks).`,
    },
    {
      id: "rumus",
      kind: "rumus",
      title: "Kumpulan Rumus Transformasi",
      body: `Untuk titik $(x,y)$ pada bidang, berlaku ringkasan pemetaan berikut.

| Transformasi | Pemetaan | Sifat |
| :-- | :-- | :-- |
| Translasi $\\binom{a}{b}$ | $(x+a,\\,y+b)$ | bentuk dan orientasi tetap |
| Refleksi sumbu-$x$ | $(x,-y)$ | orientasi terbalik, luas tetap |
| Refleksi sumbu-$y$ | $(-x,y)$ | orientasi terbalik, luas tetap |
| Refleksi garis $y=x$ | $(y,x)$ | orientasi terbalik, luas tetap |
| Rotasi $90^\\circ$ | $(-y,x)$ | berputar, luas tetap |
| Rotasi $180^\\circ$ | $(-x,-y)$ | berputar, luas tetap |
| Rotasi $270^\\circ$ | $(y,-x)$ | berputar, luas tetap |
| Dilatasi $k$ | $(kx,ky)$ | ukuran berubah $\\lvert k\\rvert$ kali |

Untuk komposisi, kerjakan $T_{1}$ lebih dahulu lalu $T_{2}$; urutan tidak boleh ditukar. Faktor skala luas diperoleh dari determinan matriks transformasi, yang dipelajari pada topik [Matriks Transformasi](/matematika-lanjut/kelas/XI/aljabar-fungsi/matriks-transformasi).`,
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

*Penyelesaian.* Terhadap sumbu-$x$: $(-5,2)\\rightarrow(-5,-2)$. Terhadap garis $y=x$: $(-5,2)\\rightarrow(2,-5)$. Di sini absis dan ordinat bertukar peran pada refleksi $y=x$.`,
            },
            {
              title: "Contoh 3: rotasi",
              text: `Tentukan bayangan titik $C(3,-1)$ oleh rotasi $90^\\circ$ berlawanan arah jarum jam terhadap titik asal.

*Penyelesaian.* Rotasi $90^\\circ$ memetakan $(x,y)\\rightarrow(-y,x)$, sehingga $(3,-1)\\rightarrow(1,3)$. Jadi bayangannya $C'(1,3)$. Bentuk matriks dan cara mengalikannya dibahas pada topik **Matriks Transformasi**.`,
            },
            {
              title: "Contoh 4: dilatasi",
              text: `Tentukan bayangan titik $D(-1,3)$ oleh dilatasi berpusat $O$ dengan faktor skala $2$, lalu tentukan faktor skala luasnya.

*Penyelesaian.* $(x,y)\\rightarrow(2x,2y)$, sehingga $(-1,3)\\rightarrow(-2,6)$. Setiap panjang dikalikan $2$, jadi luas bangun menjadi $2^{2}=4$ kali semula.`,
            },
            {
              title: "Contoh 5: komposisi",
              text: `Titik $E(2,1)$ direfleksikan terhadap sumbu-$x$, lalu dirotasi $180^\\circ$ terhadap titik asal. Tentukan bayangan akhirnya dan transformasi tunggal yang setara.

*Penyelesaian.* Refleksi sumbu-$x$: $(2,1)\\rightarrow(2,-1)$. Rotasi $180^\\circ$: $(2,-1)\\rightarrow(-2,1)$. Hasil $(2,1)\\rightarrow(-2,1)$ sama dengan refleksi terhadap sumbu-$y$. Jadi komposisinya setara dengan refleksi terhadap sumbu-$y$.`,
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

**3. Menukar urutan komposisi.** Untuk $T_{1}$ lalu $T_{2}$, kerjakan $T_{1}$ lebih dahulu; menukar urutan umumnya mengubah hasil akhir.

**4. Mencampur translasi dengan pemutaran.** Translasi menggeser bangun tanpa mengubah orientasinya, sedangkan rotasi memutarnya terhadap sebuah titik.

**5. Melupakan pengaruh dilatasi pada luas.** Setiap panjang dikalikan $\\lvert k\\rvert$, sehingga luas bangun menjadi $k^{2}$ kali semula.`,
      blocks: [
        {
          kind: "spot-mistake",
          intro: "Seorang siswa menentukan bayangan titik $(3,2)$ oleh rotasi $90^\\circ$ berlawanan arah jarum jam terhadap titik asal. Klik langkah yang keliru.",
          steps: [
            "Gunakan aturan rotasi $90^\\circ$ berlawanan arah jarum jam: $(x,y)\\rightarrow(-y,x)$.",
            "Substitusikan titik $(3,2)$: $(-x,y)=(-3,2)$.",
            "Hitung hasilnya menjadi $(-3,2)$.",
            "Simpulkan bayangannya $(-3,2)$.",
          ],
          wrongIndex: 1,
          explanation: "Aturannya $(x,y)\\rightarrow(-y,x)$, sehingga $(3,2)\\rightarrow(-2,3)$. Siswa menukar peran absis dan ordinat, jadi hasil yang benar adalah $(-2,3)$, bukan $(-3,2)$.",
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
          text: `Kerjakan dua aturan refleksi pada titik umum $(x,y)$ satu per satu, lalu bandingkan hasilnya dengan aturan rotasi $90^\\circ$.`,
        },
        {
          kind: "step-reveal",
          intro: "Terapkan aturan refleksi secara berurutan, lalu cocokkan dengan aturan rotasi.",
          steps: [
            {
              title: "Aturan refleksi sumbu-$x$",
              text: `Refleksi terhadap sumbu-$x$ memetakan $(x,y)\\rightarrow(x,-y)$.`,
            },
            {
              title: "Aturan refleksi garis $y=x$",
              text: `Refleksi terhadap garis $y=x$ memetakan $(u,v)\\rightarrow(v,u)$.`,
            },
            {
              title: "Terapkan berturut-turut",
              text: `Mula-mula $(x,y)\\rightarrow(x,-y)$. Titik $(x,-y)$ lalu dikenai refleksi garis $y=x$ dan menjadi $(-y,x)$.`,
            },
            {
              title: "Bandingkan dengan rotasi",
              text: `Aturan rotasi $90^\\circ$ berlawanan arah jarum jam adalah $(x,y)\\rightarrow(-y,x)$.`,
            },
            {
              title: "Kesimpulan",
              text: `Kedua pemetaan memberi hasil yang sama untuk setiap $(x,y)$. Jadi komposisi refleksi sumbu-$x$ lalu refleksi garis $y=x$ setara dengan rotasi $90^\\circ$ berlawanan arah jarum jam. Terbukti.`,
            },
          ],
        },
      ],
    },
    {
      id: "sejarah",
      kind: "sejarah",
      title: "Jejak Sejarah",
      body: `Gagasan memindahkan dan mencerminkan bangun sudah lama hadir dalam seni, misalnya pola simetri pada ornamen dan motif batik. Perhitungan transformasi sebagai perubahan koordinat menjadi mungkin setelah René Descartes memperkenalkan geometri koordinat pada 1637. Pada 1872 Felix Klein dalam *Erlanger Programm* mengusulkan memandang geometri sebagai kajian sifat yang tetap di bawah sekelompok transformasi, sebuah cara pandang yang menyatukan berbagai cabang geometri. Perwakilan transformasi oleh matriks dikembangkan sejalan dengan aljabar matriks pada abad ke-19 dan kini menjadi dasar grafika komputer.`,
    },
    {
      id: "refleksi",
      kind: "refleksi",
      title: "Refleksi",
      body: "Pencerminan dan pemutaran memperlakukan sebuah bangun dengan cara berbeda. Renungan berikut mengajakmu memeriksa apa yang tetap dan apa yang berubah.",
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
            "Sifat",
          ],
          rows: [
            [
              "Translasi $\\binom{a}{b}$",
              "$(x+a,\\,y+b)$",
              "bentuk dan orientasi tetap",
            ],
            [
              "Refleksi sumbu-$x$",
              "$(x,-y)$",
              "orientasi terbalik",
            ],
            [
              "Refleksi sumbu-$y$",
              "$(-x,y)$",
              "orientasi terbalik",
            ],
            [
              "Refleksi garis $y=x$",
              "$(y,x)$",
              "orientasi terbalik",
            ],
            [
              "Rotasi $90^\\circ$",
              "$(-y,x)$",
              "berputar, luas tetap",
            ],
            [
              "Rotasi $180^\\circ$",
              "$(-x,-y)$",
              "berputar, luas tetap",
            ],
            [
              "Rotasi $270^\\circ$",
              "$(y,-x)$",
              "berputar, luas tetap",
            ],
            [
              "Dilatasi $k$",
              "$(kx,ky)$",
              "ukuran berubah $\\lvert k\\rvert$ kali",
            ],
            [
              "Komposisi $T_{1}$ lalu $T_{2}$",
              "$T_{2}(T_{1}(x,y))$",
              "urutan tidak boleh ditukar",
            ],
          ],
        },
      ],
    },
    {
      id: "evaluasi",
      kind: "evaluasi",
      title: "Evaluasi",
      body: `**Tiket keluar.** (1) Bagaimana kamu membedakan bayangan yang dihasilkan rotasi $90^\\circ$ dan $270^\\circ$ hanya dari tanda koordinatnya? (2) Mengapa urutan dua transformasi memengaruhi hasil akhir? Setelah menjawab, lanjut ke [Latihan & Asesmen](/latihan) topik **Transformasi Geometri** untuk latihan tambahan.`,
    },
  ],
};
