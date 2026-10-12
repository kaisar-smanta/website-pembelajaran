import type { Topic } from '@/types/content';

export const analisisDistribusiData: Topic = {
  id: 'analisis-distribusi-data',
  slug: 'analisis-distribusi-data',
  title: 'Analisis Distribusi Data',
  subtitle: 'Merangkum dan membaca sebaran data dengan jujur',
  grade: 'X',
  phase: 'E',
  element: 'data-peluang',
  status: 'lengkap',
  estimatedMinutes: 90,
  summary:
    'Merangkum data tunggal dan kelompok dengan mean, median, modus, kuartil, serta membaca sebaran melalui histogram, dot plot, dan box plot.',
  description:
    'Satu angka rata-rata sering dianggap mewakili seluruh data, padahal dua kumpulan data dengan rata-rata sama bisa sangat berbeda sebarannya. Pada topik ini kita mempelajari ukuran pemusatan (mean, median, modus) dan ukuran penyebaran (jangkauan, kuartil, jangkauan interkuartil), lalu menyajikannya dengan histogram, dot plot, dan box plot untuk mengenali pencilan dan menafsirkan distribusi secara kritis.',
  keywords: [
    'mean',
    'median',
    'modus',
    'kuartil',
    'jangkauan',
    'jangkauan interkuartil',
    'histogram',
    'box plot',
    'pencilan',
    'diagram pencar',
    'data bivariat',
  ],
  prerequisites: [],
  relatedTopics: ['data-bivariat', 'statistik-dalam-kehidupan'],
  prerequisiteKnowledge: [
    'Membaca tabel dan diagram',
    'Operasi bilangan bulat dan pecahan',
    'Mengurutkan sekumpulan data',
  ],
  objectives: [
    { text: 'Menentukan mean, median, dan modus dari data tunggal dan data berkelompok.' },
    { text: 'Menentukan kuartil, jangkauan, dan jangkauan interkuartil (IQR).' },
    { text: 'Menyajikan data dengan dot plot, histogram, dan box plot.' },
    { text: 'Mengenali dan menafsirkan pencilan (outlier) dengan aturan $1{,}5\\times\\text{IQR}$.' },
    { text: 'Menyajikan pasangan dua variabel numerik pada diagram pencar dan menafsirkan arah hubungannya.' },
    { text: 'Membandingkan dua distribusi dan menarik kesimpulan yang wajar.' },
  ],
  applications: ['survei-statistik', 'statistik-harian'],
  sections: [
    {
      id: "tujuan",
      kind: "tujuan",
      title: "Tujuan Pembelajaran",
      body: "Setelah mempelajari topik ini, peserta didik dapat merangkum data menggunakan ukuran pemusatan dan penyebaran, menyajikannya dalam bentuk diagram yang sesuai, serta menafsirkan sebaran dan pencilan secara kritis.",
    },
    {
      id: "pemantik",
      kind: "pemantik",
      title: "Pertanyaan Pemantik",
      blocks: [
        {
          kind: "prediction",
          prompt: `Dua kelas mengikuti ujian yang sama. Rata-rata nilai keduanya **sama**, yaitu $74$. Namun hasilnya:

- Kelas A: $70, 72, 75, 76, 77$;
- Kelas B: $40, 55, 60, 100, 115$.

Apakah kedua kelas benar-benar "sama baik"? Angka apa yang dapat membedakan keduanya?`,
          reveal: "Rata-ratanya sama ($74$), tetapi **median** berbeda: Kelas A bermedian $75$, sedangkan Kelas B bermedian $60$. Kelas B memiliki dua nilai ekstrem ($100$ dan $115$) yang menarik rata-rata ke atas. Rata-rata saja menyesatkan; kita perlu ukuran **penyebaran**.",
          saveLabel: "Simpan dugaan & lihat jawabannya",
        },
      ],
    },
    {
      id: "prasyarat",
      kind: "prasyarat",
      title: "Prasyarat",
      body: `Sebelum melanjutkan, pastikan kamu dapat:

- mengurutkan data dari kecil ke besar;
- menghitung rata-rata sederhana, misalnya rata-rata $2, 4, 6$ adalah $\\dfrac{2+4+6}{3}=4$;
- membaca tabel frekuensi.`,
    },
    {
      id: "konteks",
      kind: "konteks",
      title: "Situasi dan Konteks",
      body: "Laporan survei, nilai rapor, dan data cuaca sering diringkas menjadi beberapa angka. Namun ringkasan yang baik harus menjawab **dua pertanyaan sekaligus**: *di mana pusat datanya* dan *seberapa menyebar datanya*. Nilai ulangan yang rata-ratanya tinggi tetapi sebarannya sangat lebar menandakan pemahaman siswa tidak merata — informasi yang penting bagi guru.",
    },
    {
      id: "konsep",
      kind: "konsep",
      title: "Ukuran Pemusatan: Mean, Median, Modus",
      body: `Untuk data tunggal berukuran $n$:

- **Mean (rata-rata)** adalah jumlah semua data dibagi banyak data:
$$\\bar{x}=\\frac{x_1+x_2+\\cdots+x_n}{n}.$$
- **Median** adalah nilai tengah setelah data diurutkan. Jika $n$ ganjil, median adalah data ke-$\\dfrac{n+1}{2}$. Jika $n$ genap, median adalah rata-rata dua data tengah.
- **Modus** adalah nilai yang paling sering muncul.

**Ilustrasi.** Untuk data $2, 3, 4, 4, 6, 6, 6, 7, 9, 13$ dengan $n=10$:

- mean $=\\dfrac{2+3+4+4+6+6+6+7+9+13}{10}=\\dfrac{60}{10}=6$;
- median $=\\dfrac{6+6}{2}=6$;
- modus $=6$ (muncul paling sering, yaitu tiga kali).`,
      blocks: [
        {
          kind: "callout",
          variant: "concept",
          title: "Mean peka, median tahan",
          text: "Mean memanfaatkan **semua** nilai sehingga sangat peka terhadap data ekstrem. Median hanya bergantung pada posisi tengah sehingga lebih **tahan** terhadap pencilan.",
        },
        {
          kind: "match",
          intro: "Pasangkan ukuran sebaran dengan definisinya.",
          pairs: [
            {
              left: "Jangkauan",
              right: "Selisih nilai terbesar dan terkecil",
            },
            {
              left: "Kuartil bawah $Q_1$",
              right: "Median separuh data bagian bawah",
            },
            {
              left: "Pencilan",
              right: "Data yang jauh dari kelompok utama",
            },
            {
              left: "Simpangan kuartil",
              right: "Setengah selisih $Q_3$ dan $Q_1$",
            },
          ],
        },
      ],
    },
    {
      id: "representasi",
      kind: "representasi",
      title: "Representasi Data",
      body: "Data yang sama dapat disajikan dengan berbagai cara. Setiap penyajian menonjolkan aspek yang berbeda.",
      blocks: [
        {
          kind: "figure",
          alt: "Histogram empat kelas dari data 2, 3, 4, 4, 6, 6, 6, 7, 9, 13, dengan dua kelas tertinggi pada rentang 2 sampai 8 dan satu garis putus-putus di posisi median.",
          caption: "Histogram data $2, 3, 4, 4, 6, 6, 6, 7, 9, 13$; garis putus-putus menandai median $6$.",
          svg: '<svg viewBox="0 0 320 240" aria-hidden="true" role="presentation"><line x1="40" y1="200" x2="300" y2="200" stroke="currentColor" stroke-width="1.5"/><line x1="40" y1="200" x2="40" y2="25" stroke="currentColor" stroke-width="1.5"/><rect x="40" y="50" width="65" height="150" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="1.5"/><rect x="105" y="50" width="65" height="150" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="1.5"/><rect x="170" y="162.5" width="65" height="37.5" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="1.5"/><rect x="235" y="162.5" width="65" height="37.5" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="1.5"/><line x1="126.7" y1="45" x2="126.7" y2="200" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 3"/><text x="112" y="40" font-size="11" fill="currentColor">median</text><text x="46" y="18" font-size="11" fill="currentColor">frekuensi</text><text x="26" y="54" font-size="10" fill="currentColor">4</text><text x="27" y="203" font-size="10" fill="currentColor">0</text><text x="56" y="216" font-size="10" fill="currentColor">2–5</text><text x="121" y="216" font-size="10" fill="currentColor">5–8</text><text x="185" y="216" font-size="10" fill="currentColor">8–11</text><text x="247" y="216" font-size="10" fill="currentColor">11–14</text></svg>',
        },
        {
          kind: "table",
          caption: "Jenis penyajian data dan kegunaannya",
          headers: [
            "Penyajian",
            "Cocok untuk",
            "Menonjolkan",
          ],
          rows: [
            [
              "Dot plot",
              "Data tunggal berukuran kecil",
              "Nilai yang sering muncul",
            ],
            [
              "Histogram",
              "Data berkelompok",
              "Bentuk sebaran dan interval terpadat",
            ],
            [
              "Box plot",
              "Membandingkan dua kelompok",
              "Median, kuartil, dan pencilan",
            ],
          ],
        },
        {
          kind: "tabs",
          items: [
            {
              label: "Tabel",
              body: "Data $2, 3, 4, 4, 6, 6, 6, 7, 9, 13$ disusun berurutan sehingga median dan modus mudah dibaca.",
            },
            {
              label: "Dot plot",
              body: "Setiap titik mewakili satu data; nilai $6$ menumpuk paling tinggi karena muncul tiga kali.",
            },
            {
              label: "Box plot",
              body: "Kotak membentang dari $Q_1=4$ sampai $Q_3=7$ dengan garis median di $6$, sedangkan $13$ berdiri sendiri sebagai pencilan.",
            },
          ],
        },
      ],
    },
    {
      id: "sebaran",
      kind: "konsep",
      title: "Ukuran Penyebaran: Jangkauan dan Kuartil",
      body: `**Jangkauan** adalah selisih data terbesar dan terkecil:
$$\\text{Jangkauan}=x_{\\max}-x_{\\min}.$$

Setelah data diurutkan, **kuartil** membaginya menjadi empat bagian sama banyak:

- $Q_1$ = median separuh data bawah;
- $Q_2$ = median seluruh data;
- $Q_3$ = median separuh data atas.

**Jangkauan interkuartil (IQR)** mengukur lebar "separuh data tengah":
$$\\text{IQR}=Q_3-Q_1.$$

Pada data $2, 3, 4, 4, 6, 6, 6, 7, 9, 13$:
$Q_1=4$ (median dari $2,3,4,4,6$) dan $Q_3=7$ (median dari $6,6,7,9,13$), sehingga $\\text{IQR}=7-4=3$, sedangkan jangkauannya $13-2=11$.`,
      blocks: [
        {
          kind: "figure",
          alt: "Box plot horizontal data 2 sampai 13. Kotak membentang dari kuartil bawah 4 sampai kuartil atas 7 dengan garis median di 6, garis bawah sampai 2, garis atas sampai 9, dan titik terpisah di 13 sebagai pencilan.",
          caption: "Box plot data $2, 3, 4, 4, 6, 6, 6, 7, 9, 13$: kotak dari $Q_1=4$ sampai $Q_3=7$, garis median di $6$, dan $13$ tergambar terpisah karena melampaui batas atas $11{,}5$.",
          svg: '<svg viewBox="0 0 320 240" aria-hidden="true" role="presentation"><line x1="30" y1="170" x2="314" y2="170" stroke="currentColor" stroke-width="1.3"/><line x1="40" y1="170" x2="40" y2="174" stroke="currentColor" stroke-width="1"/><line x1="87.3" y1="170" x2="87.3" y2="174" stroke="currentColor" stroke-width="1"/><line x1="134.5" y1="170" x2="134.5" y2="174" stroke="currentColor" stroke-width="1"/><line x1="158.2" y1="170" x2="158.2" y2="174" stroke="currentColor" stroke-width="1"/><line x1="205.5" y1="170" x2="205.5" y2="174" stroke="currentColor" stroke-width="1"/><line x1="300" y1="170" x2="300" y2="174" stroke="currentColor" stroke-width="1"/><rect x="87.3" y="100" width="70.9" height="40" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.6"/><line x1="134.5" y1="100" x2="134.5" y2="140" stroke="currentColor" stroke-width="2"/><line x1="40" y1="120" x2="87.3" y2="120" stroke="currentColor" stroke-width="1.4"/><line x1="40" y1="110" x2="40" y2="130" stroke="currentColor" stroke-width="1.4"/><line x1="158.2" y1="120" x2="205.5" y2="120" stroke="currentColor" stroke-width="1.4"/><line x1="205.5" y1="110" x2="205.5" y2="130" stroke="currentColor" stroke-width="1.4"/><line x1="300" y1="120" x2="300" y2="170" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/><circle cx="300" cy="120" r="3.4" fill="currentColor"/><text x="106" y="96" font-size="10" fill="currentColor">median</text><text x="74" y="156" font-size="10" fill="currentColor">Q1</text><text x="150" y="156" font-size="10" fill="currentColor">Q3</text><text x="268" y="110" font-size="10" fill="currentColor">pencilan</text><text x="37" y="186" font-size="10" fill="currentColor">2</text><text x="84" y="186" font-size="10" fill="currentColor">4</text><text x="131" y="186" font-size="10" fill="currentColor">6</text><text x="155" y="186" font-size="10" fill="currentColor">7</text><text x="202" y="186" font-size="10" fill="currentColor">9</text><text x="293" y="186" font-size="10" fill="currentColor">13</text></svg>',
        },
        {
          kind: "callout",
          variant: "tip",
          title: "Membaca box plot",
          text: "Lebar kotak sama dengan IQR. Makin lebar kotaknya, makin menyebar separuh data tengah. Titik di luar **ekor** (garis kumis) adalah kandidat pencilan yang perlu diperiksa.",
        },
      ],
    },
    {
      id: "pencilan",
      kind: "konsep",
      title: "Pencilan (Outlier)",
      body: `Nilai data yang jauh dari kelompok utama disebut **pencilan**. Salah satu aturan untuk mengenalinya menggunakan IQR:

- batas bawah $= Q_1-1{,}5\\times\\text{IQR}$;
- batas atas $= Q_3+1{,}5\\times\\text{IQR}$.

Data di luar rentang ini dianggap pencilan. Untuk data di atas, IQR $=3$, sehingga batas bawah $=4-4{,}5=-0{,}5$ dan batas atas $=7+4{,}5=11{,}5$. Karena $13>11{,}5$, nilai $13$ adalah **pencilan**.

Pencilan tidak otomatis dibuang — ia bisa menandakan kesalahan pengukuran **atau** kejadian penting yang nyata.`,
      blocks: [
        {
          kind: "callout",
          variant: "warning",
          title: "Perhatikan",
          text: "Pencilan tetap bagian dari data. Membuangnya tanpa alasan dapat menyesatkan kesimpulan. Periksa dahulu asal-usul nilai tersebut.",
        },
      ],
    },
    {
      id: "data-kelompok",
      kind: "konsep",
      title: "Mean dan Median Data Berkelompok",
      body: `Untuk data berkelompok, nilai asli sudah tidak diketahui sehingga digunakan **titik tengah** kelas. Mean diperkirakan dengan
$$\\bar{x}=\\frac{\\sum f_i x_i}{\\sum f_i},$$
dengan $x_i$ titik tengah dan $f_i$ frekuensi kelas ke-$i$. Median dan kuartil data berkelompok dihitung dengan interpolasi pada kelas yang memuat posisi tersebut:
$$\\text{Median}=L+\\left(\\frac{\\tfrac{n}{2}-F}{f}\\right)c,$$
dengan $L$ tepi bawah kelas median, $F$ frekuensi kumulatif sebelum kelas median, $f$ frekuensi kelas median, dan $c$ panjang kelas.`,
      blocks: [
        {
          kind: "table",
          caption: "Data nilai ujian ($n=20$)",
          headers: [
            "Kelas",
            "$f$",
            "Titik tengah $x$",
            "$f \\cdot x$",
          ],
          rows: [
            [
              "$50$–$59$",
              "$2$",
              "$54{,}5$",
              "$109$",
            ],
            [
              "$60$–$69$",
              "$5$",
              "$64{,}5$",
              "$322{,}5$",
            ],
            [
              "$70$–$79$",
              "$8$",
              "$74{,}5$",
              "$596$",
            ],
            [
              "$80$–$89$",
              "$4$",
              "$84{,}5$",
              "$338$",
            ],
            [
              "$90$–$99$",
              "$1$",
              "$94{,}5$",
              "$94{,}5$",
            ],
            [
              "Jumlah",
              "$20$",
              "",
              "$1460$",
            ],
          ],
        },
      ],
    },
    {
      id: "diagram-pencar",
      kind: "representasi",
      title: "Mengenal Diagram Pencar",
      body: `Sejauh ini setiap diagram menampilkan **satu** variabel. Kadang kita ingin melihat apakah **dua** variabel numerik saling berkaitan, misalnya lama belajar dan nilai ujian. Untuk itu dipakai **diagram pencar** (*scatter plot*): setiap objek digambar sebagai satu titik $(x, y)$ pada bidang koordinat, dengan $x$ nilai variabel pertama dan $y$ nilai variabel kedua.

Dari arah sebaran titik kita membaca kecenderungan hubungan:
- titik cenderung menanjak dari kiri bawah ke kanan atas → **hubungan positif**;
- titik cenderung menurun ke kanan bawah → **hubungan negatif**;
- titik menyebar tanpa arah → **tidak tampak hubungan**.

Diagram pencar hanya menunjukkan **keterkaitan**, bukan sebab-akibat. Dua variabel bisa naik-turun bersama karena kebetulan dipengaruhi faktor lain. Pembacaan yang lebih mendalam, termasuk garis tren terbaik dan koefisien korelasi, dibahas pada topik Data Bivariat dan Regresi di kelas XI.

Contoh data bivariat sederhana:

| Lama belajar (jam, $x$) | Nilai ujian ($y$) |
| --- | --- |
| $1$ | $60$ |
| $2$ | $68$ |
| $3$ | $75$ |
| $4$ | $82$ |
| $5$ | $88$ |

Jika pasangan itu diplot, titik-titiknya menanjak sehingga hubungannya **positif**: makin lama belajar, nilai cenderung makin tinggi.`,
    },
    {
      id: "eksplorasi",
      kind: "eksplorasi",
      title: "Eksplorasi Sebaran dan Pencilan",
      body: "Dua kumpulan data dengan mean sama bisa sangat berbeda sebarannya. Tambahkan atau geser nilai ekstrem untuk melihat ukuran mana yang paling terpengaruh.",
      blocks: [
        {
          kind: "exploration",
          explorationId: "distribusi-sebaran",
        },
      ],
    },
    {
      id: "generalisasi",
      kind: "generalisasi",
      title: "Menggeneralisasi Pola Sebaran",
      body: `Dari contoh-contoh di atas muncul pola umum: **semakin jauh sebuah nilai dari pusat data, semakin besar pengaruhnya terhadap ukuran yang memakai seluruh nilai.** Karena itu mean berubah ketika sebuah nilai digeser, sedangkan median dan kuartil hanya bergeser bila nilai itu melewati posisi tengah.

Aturan pencilan merangkum pola ini untuk data apa pun. Sebuah nilai dicurigai sebagai pencilan bila berada di luar

$$Q_1 - 1{,}5\\,\\text{IQR} \\qquad \\text{atau} \\qquad Q_3 + 1{,}5\\,\\text{IQR}, \\qquad \\text{IQR}=Q_3-Q_1.$$

IQR mengukur lebar separuh data yang paling rapat, sehingga nilai yang jatuh jauh di luar rentang itu layak diperiksa lebih dahulu sebelum disimpulkan.`,
    },
    {
      id: "analisis-distribusi-data-rumus",
      kind: "rumus",
      title: "Rumus: Pemusatan dan Penyebaran",
      body: `**Ukuran pemusatan** untuk data tunggal berukuran $n$:

$$\\bar{x} = \\frac{\\sum x_i}{n},$$

dengan median adalah nilai tengah data terurut dan modus adalah nilai yang paling sering muncul.

**Kuartil** membagi data terurut menjadi empat bagian sama banyak:

$$Q_1 = \\text{median separuh bawah}, \\quad Q_2 = \\text{median}, \\quad Q_3 = \\text{median separuh atas}.$$

**Ukuran penyebaran** mengukur seberapa jauh data tersebar dari pusatnya:

$$\\text{Jangkauan} = x_{\\max} - x_{\\min}, \\qquad \\text{IQR} = Q_3 - Q_1.$$

**Simpangan baku** (deviasi standar) merangkum seberapa jauh nilai-nilai menyimpang dari mean. Untuk data **populasi** dipakai

$$\\sigma = \\sqrt{\\frac{\\sum (x_i-\\bar{x})^2}{n}},$$

sedangkan untuk data **sampel** dipakai

$$s = \\sqrt{\\frac{\\sum (x_i-\\bar{x})^2}{n-1}}.$$

Semakin besar simpangan baku, semakin lebar sebaran data di sekitar mean.`,
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
              text: `Tentukan mean data berkelompok pada tabel di atas.

*Penyelesaian.*
$$\\bar{x}=\\frac{1460}{20}=73.$$`,
            },
            {
              title: "Contoh 2",
              text: `Tentukan median data berkelompok yang sama.

*Penyelesaian.* Karena $\\dfrac{n}{2}=10$, kelas median adalah $70$–$79$ (kumulatifnya mencapai $15$). Dengan $L=69{,}5$, $F=2+5=7$, $f=8$, dan $c=10$:

$$\\text{Median}=69{,}5+\\left(\\frac{10-7}{8}\\right)(10)=69{,}5+3{,}75=73{,}25.$$`,
            },
            {
              title: "Contoh 3",
              text: `Tentukan $Q_1$ dan $Q_3$ data di atas.

*Penyelesaian.* Posisi $Q_1$ adalah $\\dfrac{n}{4}=5$, berada di kelas $60$–$69$ ($L=59{,}5$, $F=2$, $f=5$):

$$Q_1=59{,}5+\\left(\\frac{5-2}{5}\\right)(10)=65{,}5.$$

Posisi $Q_3$ adalah $\\dfrac{3n}{4}=15$, berada di kelas $70$–$79$ ($L=69{,}5$, $F=7$, $f=8$):

$$Q_3=69{,}5+\\left(\\frac{15-7}{8}\\right)(10)=79{,}5.$$

Maka $\\text{IQR}=79{,}5-65{,}5=14$.`,
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
      body: `Box plot sering dipakai membandingkan sebaran gaji di dua kota, sedangkan histogram membantu melihat apakah berat badan bayi berada pada rentang normal. Misalnya, gaji bulanan karyawan di Kota A berkisar dari $Q_1=\\text{Rp}4{,}2$ juta sampai $Q_3=\\text{Rp}6{,}8$ juta dengan IQR $\\text{Rp}2{,}6$ juta, sedangkan di Kota B kotaknya membentang dari $\\text{Rp}3{,}1$ juta sampai $\\text{Rp}9{,}5$ juta dengan IQR $\\text{Rp}6{,}4$ juta. Rata-rata kedua kota bisa mirip, tetapi sebaran Kota B jauh lebih lebar sehingga pemerataannya lebih rendah.

Pemerintah dan perusahaan memakai ukuran penyebaran untuk menilai pemerataan, bukan sekadar rata-rata. Sebuah sekolah dengan rata-rata nilai $78$ tetapi simpangan besar menandakan pemahaman siswa tidak merata dan perlu pendampingan bagi kelompok bawah.

Untuk contoh membaca berita statistik secara kritis, lihat [Membaca Hasil Survei dengan Kritis](/aplikasi/survei-statistik).`,
    },
    {
      id: "kesalahan-umum",
      kind: "kesalahan-umum",
      title: "Kesalahan Umum",
      body: `**1. Menghitung median sebelum mengurutkan data.** Median adalah **nilai tengah data terurut**. Data $3, 9, 5, 1, 7$ harus diurutkan dahulu menjadi $1, 3, 5, 7, 9$; mediannya $5$, bukan $5$ dari urutan aslinya $3,9,5,1,7$ yang kebetulan sama.

**2. Menganggap semua data selalu punya satu modus.** Data bisa tidak punya modus sama sekali (semua nilai berbeda) atau punya beberapa modus.

**3. Menyamakan kuartil dengan membagi data menjadi empat sama besar tanpa aturan.** Untuk $n$ kecil, $Q_1$ dan $Q_3$ ditentukan sebagai median separuh data, bukan dengan mencari persentil secara sembarangan.

**4. Langsung membuang pencilan.** Pencilan dapat berasal dari kesalahan pencatatan, tetapi bisa juga peristiwa nyata. Selidiki dahulu sebelum mengambil keputusan.`,
    },
    {
      id: "tantangan",
      kind: "tantangan",
      title: "Tantangan",
      body: `**Soal.** Nilai ulangan enam siswa adalah $6, 7, 7, 8, 9$, dan $x$. Diketahui rata-ratanya sama dengan mediannya. Tentukan semua nilai $x$ yang mungkin.`,
      blocks: [
        {
          kind: "step-reveal",
          intro: "Tulis rata-rata, lalu periksa median untuk tiap kemungkinan posisi $x$.",
          steps: [
            {
              title: "Tulis rata-rata",
              text: "$\\bar{x}=\\dfrac{6+7+7+8+9+x}{6}=\\dfrac{37+x}{6}$.",
            },
            {
              title: "Median bergantung posisi $x$",
              text: "Setelah data diurutkan, median adalah rata-rata data ke-3 dan ke-4. Nilainya berubah bergantung pada letak $x$, sehingga perlu diperiksa per selang.",
            },
            {
              title: "Kasus $x\\le 6$",
              text: "Data terurut $x,6,7,7,8,9$, median $=\\dfrac{7+7}{2}=7$. Dari $\\dfrac{37+x}{6}=7$ diperoleh $x=5$, dan $5\\le6$ memenuhi.",
            },
            {
              title: "Kasus $7<x\\le 8$",
              text: "Data terurut $6,7,7,x,8,9$, median $=\\dfrac{7+x}{2}$. Dari $\\dfrac{37+x}{6}=\\dfrac{7+x}{2}$ diperoleh $3(7+x)=37+x$, sehingga $2x=16$ dan $x=8$; karena $7<8\\le8$, nilai ini memenuhi.",
            },
            {
              title: "Selang lain",
              text: "Untuk $6<x\\le7$ mediannya $7$ dan untuk $x>8$ mediannya $7{,}5$; keduanya hanya menghasilkan $x=5$ atau $x=8$ yang berada di luar selangnya. Jadi solusinya $x=5$ atau $x=8$.",
            },
          ],
        },
      ],
    },
    {
      id: "sejarah",
      kind: "sejarah",
      title: "Jejak Sejarah",
      body: `Penggunaan rata-rata untuk meringkas data sudah sangat tua, tetapi gagasan **median** sebagai nilai tengah yang tahan terhadap nilai ekstrem baru dipopulerkan Francis Galton pada akhir abad ke-19. Kata "statistik" sendiri berasal dari bahasa Latin *status* (keadaan), karena awalnya statistik dipakai untuk mencatat keadaan penduduk dan ekonomi suatu negara. Pada awal abad ke-20, Karl Pearson membantu meletakkan dasar statistika modern dengan ukuran-ukuran yang lebih teliti. Adapun **box plot** yang kita pakai untuk membandingkan sebaran diperkenalkan John Tukey pada 1977 dalam bukunya *Exploratory Data Analysis*. Jadi ukuran pemusatan dan penyebaran yang kita pelajari adalah hasil akumulasi gagasan selama berabad-abad.`,
    },
    {
      id: "refleksi",
      kind: "refleksi",
      title: "Refleksi",
      body: "Dua kumpulan data dengan rata-rata sama bisa bercerita sangat berbeda begitu sebarannya dilihat. Gunakan refleksi berikut untuk menghubungkan mean, median, kuartil, dan IQR dengan data nyata di sekitarmu, misalnya nilai ulangan kelas atau grafik penjualan di laporan.",
      blocks: [
        {
          kind: "reflection",
          prompts: [
            "Kapan mean lebih tepat digunakan, dan kapan median lebih jujur?",
            "Apa yang dapat kamu simpulkan dari sebuah box plot yang lebar bagian tengahnya?",
            "Menurutmu, mengapa berita sering hanya menyebut rata-rata tanpa menyebut sebaran?",
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
            "Ukuran",
            "Rumus / Pengertian",
          ],
          rows: [
            [
              "Mean",
              "$\\bar{x}=\\dfrac{\\sum x_i}{n}$",
            ],
            [
              "Median",
              "Nilai tengah data terurut",
            ],
            [
              "Modus",
              "Nilai paling sering muncul",
            ],
            [
              "Kuartil",
              "$Q_1, Q_2, Q_3$ membagi data menjadi empat bagian",
            ],
            [
              "Jangkauan",
              "$x_{\\max}-x_{\\min}$",
            ],
            [
              "IQR",
              "$Q_3-Q_1$",
            ],
            [
              "Batas pencilan",
              "$Q_1-1{,}5\\,\\text{IQR}$ dan $Q_3+1{,}5\\,\\text{IQR}$",
            ],
          ],
        },
      ],
    },
    {
      id: "evaluasi",
      kind: "evaluasi",
      title: "Evaluasi",
      body: `**Uji diri.** Diberikan dua kelompok data dengan jangkauan berbeda, jelaskan ukuran mana yang paling tepat membandingkan keragaman keduanya dan alasannya. Lanjutkan dengan menuliskan satu contoh nilai yang layak dicurigai sebagai pencilan beserta batas yang kamu pakai. Setelah menjawab, lanjut ke [Latihan & Asesmen](/latihan) topik **Analisis Distribusi Data** untuk latihan tambahan.`,
    },
  ],
};
