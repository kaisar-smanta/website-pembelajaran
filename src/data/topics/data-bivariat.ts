import type { Topic } from '@/types/content';

export const dataBivariat: Topic = {
  id: 'data-bivariat',
  slug: 'data-bivariat',
  title: 'Data Bivariat',
  subtitle: 'Membaca hubungan dua variabel lewat diagram pencar',
  grade: 'XI',
  phase: 'F',
  element: 'data-peluang',
  status: 'lengkap',
  estimatedMinutes: 80,
  summary:
    'Menyajikan dua variabel kuantitatif pada diagram pencar dan menafsirkan pola, tren, serta kekuatan hubungannya secara kritis.',
  description:
    'Ketika kita mengamati dua hal sekaligus (contohnya lama belajar dan nilai ujian), muncul pertanyaan apakah keduanya berkaitan. Diagram pencar (scatter plot) menampilkan setiap pasangan data sebagai satu titik, sehingga pola hubungan terlihat secara visual: naik, turun, melengkung, atau tidak berpola. Topik ini melatih membaca arah dan kekuatan hubungan serta menyadari keterbatasan diagram pencar, termasuk bahaya menyimpulkan sebab-akibat dari korelasi semata.',
  keywords: [
    'data bivariat',
    'diagram pencar',
    'scatter plot',
    'korelasi',
    'tren',
    'hubungan positif',
    'hubungan negatif',
  ],
  prerequisites: ['analisis-distribusi-data'],
  relatedTopics: ['regresi', 'asosiasi-kausalitas'],
  prerequisiteKnowledge: [
    'Membaca dan menyajikan data tunggal',
    'Konsep variabel bebas dan variabel terikat',
    'Membaca grafik pada bidang koordinat',
  ],
  objectives: [
    { text: 'Membedakan variabel bebas dan variabel terikat pada data bivariat.' },
    { text: 'Menyajikan data bivariat dalam diagram pencar.' },
    { text: 'Menafsirkan arah pola hubungan: positif, negatif, nonlinear, atau tidak ada.' },
    { text: 'Menilai kekuatan hubungan secara visual dan menyebut korelasinya.' },
    { text: 'Menyadari keterbatasan diagram pencar dan membedakan korelasi dari sebab-akibat.' },
  ],
  applications: ['regresi-nilai-ujian', 'survei-statistik'],
  sections: [
    {
      id: "tujuan",
      kind: "tujuan",
      title: "Tujuan Pembelajaran",
      body: "Setelah mempelajari topik ini, peserta didik dapat menyajikan data dua variabel pada diagram pencar, mengenali arah dan kekuatan polanya, serta menafsirkan hubungan tersebut secara hati-hati tanpa melompat ke kesimpulan sebab-akibat.",
    },
    {
      id: "pemantik",
      kind: "pemantik",
      title: "Pertanyaan Pemantik",
      body: `Seorang siswa percaya bahwa "semakin lama belajar, semakin tinggi nilai". Untuk mengujinya, ia mencatat **lama belajar per minggu** dan **nilai ujian** delapan temannya.

Data apa yang sebaiknya ia kumpulkan, dan bagaimana cara menampilkannya agar pola hubungan terlihat dalam sekali pandang?`,
      blocks: [
        {
          kind: "prediction",
          prompt: "Cara apa yang paling tepat menampilkan pasangan data dua variabel agar pola hubungan terlihat dalam sekali pandang?",
          options: [
            "Diagram batang",
            "Diagram pencar",
            "Diagram lingkaran",
            "Tabel frekuensi",
          ],
          reveal: "Ia perlu mengumpulkan **pasangan** data (lama belajar, nilai) untuk setiap orang, lalu menampilkan setiap pasangan sebagai satu titik pada bidang koordinat. Penyajian inilah yang disebut **diagram pencar**. Dari sebaran titiknya kita dapat melihat arah dan kekuatan hubungan.",
          saveLabel: "Simpan dugaan",
        },
      ],
    },
    {
      id: "prasyarat",
      kind: "prasyarat",
      title: "Prasyarat",
      body: `Sebelum melanjutkan, pastikan kamu dapat:

- membaca titik pada bidang koordinat, seperti $(3,5)$;
- membedakan **variabel bebas** (yang diatur atau dianggap penyebab) dan **variabel terikat** (yang diukur sebagai akibat);
- mengenali pola naik dan turun pada grafik.`,
    },
    {
      id: "konteks",
      kind: "konteks",
      title: "Situasi dan Konteks",
      body: "Banyak keputusan melibatkan dua variabel sekaligus: apakah harga berkaitan dengan permintaan? Apakah jumlah pupuk berkaitan dengan hasil panen? Apakah suhu berkaitan dengan penjualan es? Diagram pencar adalah langkah pertama dan paling jujur untuk melihat apakah ada kaitan, sebelum rumus regresi dipakai untuk memodelkannya.",
    },
    {
      id: "konsep",
      kind: "konsep",
      title: "Konsep Inti: Variabel Bivariat",
      questionIds: ['db-01'],
      body: `**Data bivariat** adalah data yang memuat **dua variabel kuantitatif** untuk setiap objek yang sama. Setiap pengamatan berupa pasangan terurut $(x, y)$.

Kita biasanya menyebut:

- $x$ sebagai **variabel bebas** (variabel penjelas), dan
- $y$ sebagai **variabel terikat** (variabel respons).

Untuk data lama belajar dan nilai ujian, $x$ adalah lama belajar (jam) dan $y$ adalah nilai. Setiap orang menyumbang **satu titik**, bukan dua grafik terpisah.`,
      blocks: [
        {
          kind: "callout",
          variant: "concept",
          title: "Satu titik, dua nilai",
          text: "Pada data bivariat, satu titik merepresentasikan **satu objek** dengan dua nilai sekaligus. Menempatkan $x$ dan $y$ dengan benar penting untuk menafsirkan arah hubungan.",
        },
        {
          kind: "match",
          intro: "Pasangkan istilah dengan maknanya.",
          pairs: [
            {
              left: "Data bivariat",
              right: "Pasangan dua variabel kuantitatif untuk objek yang sama",
            },
            {
              left: "Variabel bebas",
              right: "Variabel penjelas $x$ yang diatur atau diduga sebagai penyebab",
            },
            {
              left: "Variabel terikat",
              right: "Variabel respons $y$ yang diukur sebagai akibat",
            },
            {
              left: "Diagram pencar",
              right: "Setiap pasangan $(x,y)$ digambar sebagai satu titik",
            },
            {
              left: "Korelasi",
              right: "Ukuran arah dan kekuatan hubungan linear, diringkas oleh $r$",
            },
          ],
        },
        {
          kind: "flip-cards",
          intro: "Hafalkan istilah dasar data bivariat.",
          cards: [
            {
              front: "Data bivariat",
              back: "Pasangan $(x,y)$ dari dua variabel kuantitatif untuk objek yang sama",
            },
            {
              front: "Variabel bebas",
              back: "Variabel penjelas $x$ yang diatur atau diduga sebagai penyebab",
            },
            {
              front: "Variabel terikat",
              back: "Variabel respons $y$ yang diukur sebagai akibat",
            },
            {
              front: "Diagram pencar",
              back: "Setiap pasangan $(x,y)$ digambar sebagai satu titik pada bidang koordinat",
            },
            {
              front: "Korelasi $r$",
              back: "Bilangan pada rentang $-1$ sampai $1$ yang merangkum arah dan kekuatan hubungan linear",
            },
            {
              front: "Ekstrapolasi",
              back: "Perkiraan di luar rentang data, berisiko karena pola bisa berubah",
            },
          ],
        },
      ],
    },
    {
      id: "representasi",
      kind: "representasi",
      title: "Diagram Pencar",
      body: `Diagram pencar menempatkan setiap pasangan $(x, y)$ sebagai satu titik. Sumbu mendatar menunjukkan variabel bebas, sumbu tegak menunjukkan variabel terikat.

Berikut data lama belajar per minggu (jam) dan nilai ujian delapan siswa:

| Lama belajar $x$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ |
|---|---|---|---|---|---|---|---|---|
| Nilai $y$ | $2$ | $4$ | $5$ | $4$ | $7$ | $8$ | $9$ | $11$ |

Saat titik-titik di atas digambar pada bidang koordinat, tampak kecenderungan **menaik dari kiri bawah ke kanan atas**: siswa yang belajar lebih lama cenderung memperoleh nilai lebih tinggi.`,
      blocks: [
        {
          kind: "table",
          caption: "Cara membaca diagram pencar",
          headers: [
            "Yang diamati",
            "Pertanyaan",
            "Contoh jawaban",
          ],
          rows: [
            [
              "Arah",
              "Naik, turun, atau melengkung?",
              "Menaik (positif)",
            ],
            [
              "Bentuk",
              "Lurus atau melengkung?",
              "Cenderung lurus",
            ],
            [
              "Kekuatan",
              "Titik mengumpul atau menyebar?",
              "Cukup rapat (kuat)",
            ],
            [
              "Pencilan",
              "Ada titik yang jauh menyimpang?",
              "Tidak tampak mencolok",
            ],
          ],
        },
        {
          kind: "figure",
          alt: "Diagram pencar delapan titik data lama belajar dan nilai, dilengkapi garis tren menanjak dan keterangan koefisien korelasi r sekitar 0,97.",
          caption: "Data lama belajar dan nilai dengan garis tren. Titik-titik rapat mengikuti garis menanjak, menandakan hubungan linear positif kuat dengan $r \\approx 0{,}97$.",
          svg: '<svg viewBox="0 0 320 240" aria-hidden="true" role="presentation"><line x1="50" y1="205" x2="305" y2="205" stroke="currentColor" stroke-width="1.5"/><line x1="50" y1="205" x2="50" y2="25" stroke="currentColor" stroke-width="1.5"/><line x1="80" y1="173.8" x2="290" y2="48.8" stroke="currentColor" stroke-width="2" stroke-dasharray="6 4"/><circle cx="80" cy="175" r="3" fill="currentColor"/><circle cx="110" cy="145" r="3" fill="currentColor"/><circle cx="140" cy="130" r="3" fill="currentColor"/><circle cx="170" cy="145" r="3" fill="currentColor"/><circle cx="200" cy="100" r="3" fill="currentColor"/><circle cx="230" cy="85" r="3" fill="currentColor"/><circle cx="260" cy="70" r="3" fill="currentColor"/><circle cx="290" cy="40" r="3" fill="currentColor"/><text x="298" y="220" font-size="12" fill="currentColor">x</text><text x="34" y="34" font-size="12" fill="currentColor">y</text><text x="150" y="58" font-size="11" fill="currentColor">garis tren</text><text x="188" y="152" font-size="11" fill="currentColor">r &asymp; 0,97</text></svg>',
        },
        {
          kind: "tabs",
          items: [
            {
              label: "Tabel",
              body: "Data lama belajar $x$ dan nilai $y$ disusun berpasangan: $(1,2),(2,4),(3,5),\\dots,(8,11)$.",
            },
            {
              label: "Diagram",
              body: "Titik-titik digambar pada bidang koordinat; sebaran menanjak dari kiri bawah ke kanan atas.",
            },
            {
              label: "Tafsiran",
              body: "Arah menaik (positif), bentuk cenderung lurus, kekuatan cukup rapat, dan tidak tampak pencilan mencolok.",
            },
          ],
        },
      ],
    },
    {
      id: "pola",
      kind: "konsep",
      title: "Pola Hubungan",
      body: `Pola hubungan dua variabel secara umum terbagi menjadi beberapa jenis:

- **Positif (searah).** Ketika $x$ bertambah, $y$ cenderung bertambah. Titik-titik menanjak ke kanan.
- **Negatif (berlawanan arah).** Ketika $x$ bertambah, $y$ cenderung berkurang. Titik-titik menurun ke kanan.
- **Nonlinear.** Pola mengikuti lengkung, seperti menaik lalu mendatar, atau membentuk parabola.
- **Tidak ada hubungan.** Titik-titik menyebar tanpa arah yang jelas.

Menentukan jenis pola adalah langkah pertama sebelum menghitung ukuran hubungan secara numerik.`,
      blocks: [
        {
          kind: "callout",
          variant: "tip",
          title: "Cara mengingat arah",
          text: "Bayangkan berjalan dari kiri ke kanan: jika titik-titik **menanjak**, hubungan positif; jika **menurun**, hubungan negatif.",
        },
        {
          kind: "figure",
          alt: "Tiga diagram pencar kecil yang menunjukkan hubungan positif, negatif, dan nonlinear.",
          caption: "Tiga pola hubungan: titik menanjak (positif), menurun (negatif), dan mengikuti lengkung (nonlinear).",
          svg: '<svg viewBox="0 0 320 200" aria-hidden="true" role="presentation"><line x1="15" y1="95" x2="95" y2="95" stroke="currentColor" stroke-width="1.5"/><line x1="15" y1="95" x2="15" y2="20" stroke="currentColor" stroke-width="1.5"/><circle cx="22" cy="86" r="2.5" fill="currentColor"/><circle cx="34" cy="74" r="2.5" fill="currentColor"/><circle cx="46" cy="62" r="2.5" fill="currentColor"/><circle cx="58" cy="48" r="2.5" fill="currentColor"/><circle cx="70" cy="36" r="2.5" fill="currentColor"/><circle cx="84" cy="26" r="2.5" fill="currentColor"/><text x="34" y="116" font-size="11" fill="currentColor">positif</text><line x1="117" y1="95" x2="197" y2="95" stroke="currentColor" stroke-width="1.5"/><line x1="117" y1="95" x2="117" y2="20" stroke="currentColor" stroke-width="1.5"/><circle cx="122" cy="28" r="2.5" fill="currentColor"/><circle cx="133" cy="40" r="2.5" fill="currentColor"/><circle cx="145" cy="52" r="2.5" fill="currentColor"/><circle cx="157" cy="63" r="2.5" fill="currentColor"/><circle cx="169" cy="75" r="2.5" fill="currentColor"/><circle cx="181" cy="86" r="2.5" fill="currentColor"/><text x="136" y="116" font-size="11" fill="currentColor">negatif</text><line x1="219" y1="95" x2="299" y2="95" stroke="currentColor" stroke-width="1.5"/><line x1="219" y1="95" x2="219" y2="20" stroke="currentColor" stroke-width="1.5"/><path d="M 224,92 Q 258,22 296,30" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="226" cy="88" r="2.5" fill="currentColor"/><circle cx="240" cy="58" r="2.5" fill="currentColor"/><circle cx="254" cy="40" r="2.5" fill="currentColor"/><circle cx="270" cy="32" r="2.5" fill="currentColor"/><circle cx="292" cy="30" r="2.5" fill="currentColor"/><text x="228" y="116" font-size="11" fill="currentColor">nonlinear</text></svg>',
        },
      ],
    },
    {
      id: "kekuatan",
      kind: "konsep",
      title: "Tren dan Kekuatan Hubungan",
      body: `Setelah arah ditentukan, kita menilai **kekuatan** hubungan:

- **Kuat**, jika titik-titik rapat mengikuti satu pola yang jelas;
- **Lemah**, jika titik-titik menyebar lebar di sekitar pola meskipun arahnya masih tampak.

Kekuatan hubungan linear diringkas oleh **koefisien korelasi** $r$ dengan $-1 \\le r \\le 1$:

- $r$ dekat $1$: hubungan linear positif kuat;
- $r$ dekat $-1$: hubungan linear negatif kuat;
- $r$ dekat $0$: hubungan linear lemah atau tidak ada.

Untuk data lama belajar dan nilai di atas, koefisien korelasinya sekitar $r \\approx 0{,}97$, menandakan hubungan linear positif yang **sangat kuat**. Namun ingat: nilai $r$ hanya mengukur hubungan **linear**.`,
      blocks: [
        {
          kind: "callout",
          variant: "warning",
          title: "Penting",
          text: "Korelasi yang kuat **bukan** bukti sebab-akibat. Bisa jadi ada variabel ketiga (perantara) yang memengaruhi keduanya, atau hubungannya kebetulan.",
        },
      ],
    },
    {
      id: "eksplorasi",
      kind: "eksplorasi",
      title: "Eksplorasi",
      body: "Gunakan alat berikut untuk menambah titik data pada diagram pencar dan mengamati bagaimana garis tren serta koefisien yang dihasilkan berubah. Mulailah dengan beberapa titik yang membentuk pola jelas, lalu tambahkan pencilan dan perhatikan efeknya.",
      blocks: [
        {
          kind: "exploration",
          explorationId: "data-bivariat-korelasi",
        },
      ],
    },
    {
      id: "generalisasi",
      kind: "generalisasi",
      title: "Membaca Hubungan Secara Umum",
      body: `Dari contoh-contoh di atas, cara membaca data bivariat selalu mengikuti urutan yang sama: tentukan dulu **arah** (menanjak, menurun, atau tanpa arah), lalu **kekuatan** (rapat atau menyebar), baru diringkas dengan bilangan. Koefisien korelasi $r$ menempatkan kekuatan itu pada skala tetap:

$$-1 \\le r \\le 1.$$

Tanda $r$ menyatakan arah, sedangkan besarnya menyatakan keeratan hubungan linear. Karena $r$ hanya mengukur kedekatan titik pada sebuah garis lurus, pola melengkung yang jelas pun dapat menghasilkan $r$ yang kecil.

Setiap kesimpulan tetap dibatasi rentang data. Pola yang teramati pada $x$ dari $1$ sampai $8$ belum tentu berlaku di luar rentang itu.`,
    },
    {
      id: "data-bivariat-rumus",
      kind: "rumus",
      title: "Rumus: Koefisien Korelasi Linear",
      body: `**Koefisien korelasi** $r$ mengukur arah dan kekuatan hubungan **linear** antara dua variabel, dengan $-1 \\le r \\le 1$:

$$r = \\frac{\\displaystyle\\sum (x_i-\\bar{x})(y_i-\\bar{y})}{\\sqrt{\\displaystyle\\sum (x_i-\\bar{x})^2}\\,\\sqrt{\\displaystyle\\sum (y_i-\\bar{y})^2}}.$$

Bentuk ekuivalen yang lebih mudah dihitung langsung dari data mentah adalah

$$r = \\frac{n\\sum x_i y_i - \\left(\\sum x_i\\right)\\left(\\sum y_i\\right)}{\\sqrt{\\left[n\\sum x_i^2 - \\left(\\sum x_i\\right)^2\\right]\\left[n\\sum y_i^2 - \\left(\\sum y_i\\right)^2\\right]}}.$$

Tanda $r$ menyatakan arah: $r>0$ berarti hubungan positif, sedangkan $r<0$ berarti hubungan negatif. Besarnya $|r|$ menyatakan kekuatan: makin dekat ke $1$, makin rapat titik-titik mengikuti sebuah garis lurus. Ingat, $r$ hanya mengukur hubungan **linear**, sehingga pola melengkung yang kuat pun dapat menghasilkan $r$ yang kecil.`,
    },
    {
      id: "contoh",
      kind: "contoh",
      title: "Contoh Terbimbing",
      blocks: [
        {
          kind: "step-reveal",
          intro: "Lima contoh berikut bergerak dari mengenali peran variabel, menafsirkan arah dan kekuatan, menghitung korelasi, sampai menyadari batas ekstrapolasi.",
          steps: [
            {
              title: "Contoh 1 (peran variabel)",
              text: `Sebuah penelitian mencatat jumlah pupuk (kg) dan hasil panen (kg) pada beberapa petak. Tentukan variabel bebas dan variabel terikatnya.

*Penyelesaian.* Jumlah pupuk adalah hal yang diatur peneliti, sehingga menjadi **variabel bebas** $x$. Hasil panen adalah besaran yang diukur sebagai akibat, sehingga menjadi **variabel terikat** $y$. Setiap petak menyumbang satu titik $(x,y)$.`,
            },
            {
              title: "Contoh 2 (arah hubungan)",
              text: `Sebuah toko mengamati harga produk ($x$, dalam ribuan rupiah) dan banyak penjualan ($y$, dalam unit). Setelah digambar, titik-titik menurun dari kiri atas ke kanan bawah. Tentukan jenis hubungannya.

*Penyelesaian.* Karena $y$ cenderung berkurang saat $x$ bertambah, hubungannya **negatif**. Ini masuk akal: harga naik membuat penjualan menurun.`,
            },
            {
              title: "Contoh 3 (kekuatan hubungan)",
              text: `Himpunan A titiknya rapat membentuk garis menanjak, sedangkan himpunan B menyebar tanpa arah jelas. Bandingkan kekuatan hubungan keduanya.

*Penyelesaian.* Himpunan A menunjukkan hubungan positif **kuat** karena titik-titik rapat mengikuti garis. Himpunan B tidak menunjukkan hubungan yang berarti karena sebarannya tidak berpola.`,
            },
            {
              title: "Contoh 4 (batas ekstrapolasi)",
              text: `Pada data lama belajar dan nilai, apakah wajar memperkirakan nilai siswa yang belajar $20$ jam per minggu?

*Penyelesaian.* Tidak wajar. Data hanya mencakup $x$ dari $1$ sampai $8$ jam dengan nilai maksimum $11$. Perkiraan di luar rentang data disebut **ekstrapolasi** dan berisiko, karena pola linear belum tentu berlaku untuk jam belajar yang jauh lebih banyak.`,
            },
            {
              title: "Contoh 5 (menghitung korelasi)",
              text: `Diberikan lima pasangan data $(1,3)$, $(2,5)$, $(3,4)$, $(4,6)$, $(5,7)$. Hitung koefisien korelasinya.

*Penyelesaian.* Dengan $n=5$ diperoleh $\\sum x_i = 15$, $\\sum y_i = 25$, $\\sum x_i y_i = 84$, $\\sum x_i^2 = 55$, dan $\\sum y_i^2 = 135$. Substitusi ke rumus $r$:
$$r = \\frac{5(84) - (15)(25)}{\\sqrt{\\left[5(55) - 15^2\\right]\\left[5(135) - 25^2\\right]}} = \\frac{420 - 375}{\\sqrt{(275-225)(675-625)}} = \\frac{45}{\\sqrt{50 \\cdot 50}} = \\frac{45}{50} = 0{,}9.$$
Jadi $r = 0{,}9$, yaitu hubungan linear positif yang kuat. Karena $r^2 = 0{,}81$, sekitar $81\%$ variasi nilai $y$ berkaitan dengan variabel $x$.`,
            },
          ],
        },
        {
          kind: "details",
          summary: "Coba sendiri: menghitung korelasi dari tabel",
          text: `Diberikan empat pasangan data $(1,2)$, $(2,4)$, $(3,5)$, $(4,8)$. Hitung koefisien korelasinya, lalu tentukan arah dan kekuatannya.

*Langkah 1.* Dengan $n=4$ diperoleh $\\sum x_i=10$, $\\sum y_i=19$, $\\sum x_i y_i=57$, $\\sum x_i^2=30$, dan $\\sum y_i^2=109$.

*Langkah 2.* Substitusi ke rumus $r$:
$$r = \\frac{4(57) - (10)(19)}{\\sqrt{\\left[4(30) - 10^2\\right]\\left[4(109) - 19^2\\right]}} = \\frac{228 - 190}{\\sqrt{(120-100)(436-361)}} = \\frac{38}{\\sqrt{20 \\cdot 75}} = \\frac{38}{\\sqrt{1500}} \\approx 0{,}98.$$

*Langkah 3.* Karena $r \\approx 0{,}98$ bertanda positif dan dekat dengan $1$, hubungannya linear positif yang kuat.

*Langkah 4.* Periksa bahwa $r$ tetap hanya mengukur hubungan **linear**. Dengan empat titik saja, satu titik menyimpang dapat mengubah nilai $r$ secara drastis, jadi selalu periksa diagram pencarnya, bukan hanya angka $r$.`,
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
      body: `Diagram pencar dipakai di bidang kesehatan (dosis obat dan tekanan darah), ekonomi (pendapatan dan konsumsi), serta olahraga (jumlah latihan dan performa). Sebagai gambaran angka, pada data delapan siswa di atas, koefisien korelasi $r \\approx 0{,}97$ menunjukkan pola menanjak yang sangat rapat; sebaliknya, data penjualan jaket dengan suhu harian memberi $r \\approx -0{,}8$ karena penjualan turun saat suhu menghangat.

Diagram pencar menjadi jembatan menuju **regresi**, yaitu membuat garis atau kurva terbaik yang merangkum tren data. Untuk latihan, lihat [Apakah Waktu Belajar Berkaitan dengan Nilai?](/aplikasi/regresi-nilai-ujian) dan [Membaca Hasil Survei dengan Kritis](/aplikasi/survei-statistik).`,
    },
    {
      id: "kesalahan-umum",
      kind: "kesalahan-umum",
      title: "Kesalahan Umum",
      body: `**1. Menyimpulkan sebab-akibat dari korelasi.** Dua variabel yang berkorelasi belum tentu satu menyebabkan yang lain. Selalu tanyakan kemungkinan variabel perantara.

**2. Menukar sumbu $x$ dan $y$.** Menempatkan variabel terikat di sumbu mendatar dapat membuat arah hubungan tampak berbeda dan menyesatkan penafsiran.

**3. Mengabaikan bentuk lengkung.** Koefisien korelasi mendekati $0$ tidak selalu berarti "tidak ada hubungan"; bisa jadi hubungannya **nonlinear** yang kuat.

**4. Mempercayai ekstrapolasi jauh.** Memperkirakan nilai di luar rentang data berbahaya karena tren bisa berubah.

**5. Menganggap satu pencilan sebagai pola.** Satu titik menyimpang dapat menarik garis tren. Periksa apakah titik itu sah atau kesalahan pencatatan.

**6. Menyamakan arah korelasi dengan urutan sebab-akibat.** Tanda $r$ hanya menyatakan kedua variabel bergerak searah atau berlawanan, bukan mana yang berubah lebih dahulu. Urutan waktu harus diperiksa terpisah, sebab bisa jadi terjadi **kausalitas terbalik**, yaitu akibat yang muncul mendahului dugaan penyebab.`,
      blocks: [
        {
          kind: "figure",
          alt: "Diagram pencar dengan titik-titik membentuk tren menanjak dan satu titik menyimpang jauh di bawah yang ditandai sebagai pencilan.",
          caption: "Sebuah **pencilan** (titik menyimpang) dapat menarik garis tren, sehingga perlu diperiksa dahulu apakah nilainya sah.",
          svg: '<svg viewBox="0 0 320 240" aria-hidden="true" role="presentation"><line x1="40" y1="200" x2="300" y2="200" stroke="currentColor" stroke-width="1.5"/><line x1="40" y1="200" x2="40" y2="25" stroke="currentColor" stroke-width="1.5"/><text x="292" y="216" font-size="12" fill="currentColor">x</text><text x="24" y="34" font-size="12" fill="currentColor">y</text><line x1="60" y1="175" x2="245" y2="52" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/><circle cx="66" cy="170" r="3" fill="currentColor"/><circle cx="92" cy="155" r="3" fill="currentColor"/><circle cx="118" cy="132" r="3" fill="currentColor"/><circle cx="144" cy="125" r="3" fill="currentColor"/><circle cx="170" cy="102" r="3" fill="currentColor"/><circle cx="196" cy="87" r="3" fill="currentColor"/><circle cx="222" cy="65" r="3" fill="currentColor"/><circle cx="183" cy="185" r="3.5" fill="none" stroke="currentColor" stroke-width="2"/><text x="192" y="196" font-size="11" fill="currentColor">pencilan</text></svg>',
        },
        {
          kind: "spot-mistake",
          intro: "Seorang siswa menafsirkan diagram pencar antara penjualan es krim dan angka kejahatan. Klik langkah yang keliru.",
          steps: [
            "Kedua variabel naik-turun bersama, jadi di antara keduanya ada korelasi positif.",
            "Karena berkorelasi, membeli es krim menyebabkan orang berbuat kejahatan.",
            "Maka untuk menekan kejahatan, cukup kurangi penjualan es krim.",
          ],
          wrongIndex: 1,
          explanation: "Korelasi tidak menyiratkan sebab-akibat. Kedua variabel dipengaruhi faktor ketiga, yaitu suhu panas, sehingga hubungannya semu.",
        },
      ],
    },
    {
      id: "data-bivariat-tantangan",
      kind: "tantangan",
      title: "Korelasi Sepatu dan Kacamata",
      body: `**Soal.** Sebuah kota mencatat banyak sepatu terjual $(x)$ dan banyak kacamata hitam terjual $(y)$ setiap bulan. Diagram pencarnya menunjukkan hubungan positif yang sangat kuat, sekitar $r \\approx 0{,}93$. Seorang pengusaha menyimpulkan: "Menjual lebih banyak sepatu akan meningkatkan penjualan kacamata hitam."

- Apa kelemahan kesimpulan itu?
- Variabel apa yang paling masuk akal menjadi perancunya?
- Bagaimana cara menguji apakah benar ada hubungan sebab-akibat?`,
      blocks: [
        {
          kind: "step-reveal",
          intro: "Bongkar klaim sebab-akibat dari sebuah korelasi yang kuat.",
          steps: [
            {
              title: "Kenali jenis klaimnya",
              text: "Data hanya menunjukkan **asosiasi**: kedua jenis barang terjual naik-turun bersama. Nilai $r$ yang tinggi mengukur kekuatan pola linear, tetapi tidak membuktikan bahwa salah satunya **menyebabkan** yang lain.",
            },
            {
              title: "Cari variabel perancu",
              text: "Variabel ketiga yang paling masuk akal adalah **musim atau cuaca**. Pada bulan terang dan hangat, orang lebih banyak beraktivitas di luar rumah sehingga membeli sepatu sekaligus kacamata hitam. Cuaca memengaruhi keduanya, sehingga asosiasinya **semu**.",
            },
            {
              title: "Periksa urutan waktu",
              text: "Tidak ada mekanisme yang masuk akal antara penjualan sepatu dan kacamata hitam, dan data bulanan tidak menunjukkan mana yang berubah lebih dahulu. Jadi arah sebab-akibatnya tidak dapat disimpulkan dari korelasi saja.",
            },
            {
              title: "Rancang pengujian yang lebih kuat",
              text: "Untuk menaksir hubungan sebab-akibat, peneliti perlu **eksperimen acak** (contohnya promosi acak pada sebagian toko) atau membandingkan bulan-bulan dengan cuaca yang setara sambil mengontrol musim. Tanpa pengendalian variabel perancu, kesimpulan kausal tetap lemah.",
            },
          ],
        },
      ],
    },
    {
      id: "data-bivariat-sejarah",
      kind: "sejarah",
      title: "Anscombe dan Batas Ringkasan",
      body: `Diagram pencar lahir dari kebutuhan memeriksa hubungan dua variabel secara visual sebelum menghitung ukuran apa pun. Selama berabad-abad peneliti sudah memetakan pasangan data pada bidang koordinat, dan kebiasaan ini menjadi baku menjelang abad ke-20. Pada 1973 Francis Anscombe menunjukkan empat kumpulan data yang memiliki rata-rata, varians, dan koefisien korelasi yang sama, tetapi diagram pencarnya sangat berbeda: satu lurus, satu melengkung, satu memuat pencilan, dan satu tersusun hampir tegak. Contoh yang kemudian dikenal sebagai **kuartet Anscombe** itu menegaskan bahwa ringkasan angka saja dapat menyembunyikan bentuk sebenarnya, sehingga diagram pencar tetap wajib diperiksa. Kisah perumusan garis tren dan koefisien korelasi dibahas pada topik **Regresi Linear**, sedangkan peringatan bahwa korelasi tidak sama dengan sebab-akibat menjadi tema utama topik **Asosiasi dan Kausalitas**.`,
    },
    {
      id: "refleksi",
      kind: "refleksi",
      title: "Refleksi",
      body: "Periksa kebiasaanmu membaca data berpasangan: apakah kamu menebak arah hubungan sebelum melihat sebaran titiknya? Tinjau kembali dengan contoh baru.",
      blocks: [
        {
          kind: "reflection",
          prompts: [
            "Apa perbedaan antara \"berkorelasi\" dan \"menyebabkan\"?",
            "Ketika melihat diagram pencar, informasi apa yang paling dulu kamu perhatikan?",
            "Sebutkan satu pasangan variabel di sekitarmu yang mungkin berkorelasi karena faktor ketiga, bukan karena sebab-akibat langsung.",
          ],
          confidenceLabel: "Seberapa yakin kamu menafsirkan arah, kekuatan, dan pencilan pada diagram pencar?",
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
          caption: "Ringkasan konsep data bivariat dan tafsirannya",
          headers: [
            "Konsep",
            "Penjelasan",
          ],
          rows: [
            [
              "Data bivariat",
              "Pasangan $(x,y)$ dari dua variabel kuantitatif",
            ],
            [
              "Diagram pencar",
              "Setiap pasangan digambar sebagai satu titik",
            ],
            [
              "Hubungan positif",
              "$y$ cenderung naik saat $x$ naik",
            ],
            [
              "Hubungan negatif",
              "$y$ cenderung turun saat $x$ naik",
            ],
            [
              "Nonlinear",
              "Pola membentuk lengkung",
            ],
            [
              "Kekuatan",
              "Kerapatan titik terhadap pola; diringkas oleh $r$",
            ],
            [
              "Peringatan",
              "Korelasi $\\neq$ sebab-akibat",
            ],
          ],
        },
        {
          kind: "callout",
          variant: "concept",
          title: "Benang merah: lihat sebaran sebelum percaya angka",
          text: "Satu gagasan menyatukan seluruh topik ini: sebelum menghitung apa pun, gambar dahulu titik-titiknya. Arah, kekuatan, bentuk lengkung, dan pencilan semuanya terbaca dari diagram pencar, sedangkan koefisien $r$ hanya meringkas bagian linearnya. Peringatan bahwa korelasi kuat belum tentu sebab-akibat menjadi pintu masuk ke dua topik berikutnya: **Regresi Linear** memakai garis tren untuk memodelkan, sedangkan **Asosiasi dan Kausalitas** memeriksa apakah hubungan itu benar-benar sebab-akibat.",
        },
      ],
    },
    {
      id: "evaluasi",
      kind: "evaluasi",
      title: "Evaluasi",
      questionIds: ['db-09'],
      body: `**Simpulkan sendiri.** (1) Terangkan bedanya arah dan kekuatan hubungan pada diagram pencar. (2) Berikan satu contoh korelasi kuat yang tidak layak disebut sebab-akibat, lalu sebutkan variabel perancunya. Setelah menjawab, lanjut ke [Latihan & Asesmen](/latihan) topik **Data Bivariat** untuk latihan tambahan.`,
    },
  ],
};
