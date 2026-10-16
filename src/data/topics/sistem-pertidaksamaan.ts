import type { Topic } from '@/types/content';

export const sistemPertidaksamaan: Topic = {
  id: 'sistem-pertidaksamaan',
  slug: 'sistem-pertidaksamaan',
  title: 'Sistem Pertidaksamaan Linear',
  subtitle: 'Daerah penyelesaian dan pemodelan kendala',
  grade: 'X',
  phase: 'E',
  element: 'aljabar-fungsi',
  status: 'lengkap',
  estimatedMinutes: 85,
  summary:
    'Menentukan daerah penyelesaian sistem pertidaksamaan linear dua variabel dan memodelkan kendala nyata sebagai program linear sederhana.',
  description:
    'Pertidaksamaan linear dua variabel membagi bidang koordinat menjadi dua setengah bidang, dan gabungan beberapa pertidaksamaan membentuk satu daerah penyelesaian. Pada topik ini kita belajar menggambar garis pembatas dari titik potong sumbu, memilih titik uji untuk menentukan sisi arsir, menyusun sistem dari dua sampai tiga kendala, serta memodelkan masalah nyata menjadi program linear dan mencari nilai optimum pada titik sudut.',
  keywords: [
    'pertidaksamaan',
    'daerah penyelesaian',
    'program linear',
    'kendala',
    'optimasi',
  ],
  prerequisites: ['spltv'],
  relatedTopics: ['fungsi-kuadrat'],
  prerequisiteKnowledge: [
    'Menggambar garis lurus pada bidang koordinat',
    'Pertidaksamaan linear satu variabel dan arti tanda pertidaksamaan',
    'Menentukan titik potong dua garis',
  ],
  objectives: [
    { text: 'Menentukan daerah penyelesaian satu pertidaksamaan linear dua variabel dengan titik uji.' },
    { text: 'Menggambar daerah penyelesaian sistem dua atau tiga pertidaksamaan linear.' },
    { text: 'Menentukan titik-titik sudut daerah penyelesaian.' },
    { text: 'Memodelkan kendala situasi nyata sebagai sistem pertidaksamaan linear.' },
    { text: 'Menentukan nilai optimum fungsi objektif dengan memeriksa titik sudut.' },
  ],
  applications: ['optimasi-produksi-bengkel'],
  sections: [
    {
      id: "tujuan",
      kind: "tujuan",
      title: "Tujuan Pembelajaran",
      body: "Setelah mempelajari topik ini, peserta didik dapat menentukan daerah penyelesaian satu pertidaksamaan linear dua variabel, menggambar daerah penyelesaian sistem dua atau tiga pertidaksamaan, menentukan titik sudut daerah penyelesaian, memodelkan kendala situasi nyata sebagai sistem pertidaksamaan, serta menentukan nilai optimum fungsi objektif sederhana.",
    },
    {
      id: "pemantik",
      kind: "pemantik",
      title: "Pertanyaan Pemantik",
      blocks: [
        {
          kind: "prediction",
          prompt: `Di kuadran pertama, Ardi ingin menandai semua titik $(x,y)$ yang memenuhi $x + y \\le 4$.

- Apakah titik $(1,1)$ termasuk?
- Apakah titik $(3,0)$ termasuk?
- Apakah titik $(2,3)$ termasuk?

Jika semua titik yang memenuhi digambar, bangun apa yang terbentuk, dan berapa luasnya?`,
          reveal: `Titik $(1,1)$: $1+1=2 \\le 4$ benar, jadi termasuk. Titik $(3,0)$: $3+0=3 \\le 4$ benar, termasuk. Titik $(2,3)$: $2+3=5 \\le 4$ salah, tidak termasuk.

Daerah yang memenuhi adalah segitiga dengan titik sudut $(0,0)$, $(4,0)$, dan $(0,4)$. Luasnya $\\frac{1}{2} \\cdot 4 \\cdot 4 = 8$ satuan luas.`,
          saveLabel: "Simpan dugaan & lihat jawabannya",
        },
      ],
    },
    {
      id: "prasyarat",
      kind: "prasyarat",
      title: "Prasyarat",
      body: `Untuk membaca dan memodelkan kendala, kuasai dahulu dasar berikut:
- menggambar garis lurus dengan menentukan titik potong dengan sumbu;
- menyelesaikan pertidaksamaan linear satu variabel;
- membaca posisi titik pada bidang koordinat.`,
    },
    {
      id: "konteks",
      kind: "konteks",
      title: "Situasi dan Konteks",
      body: `Program linear muncul ketika sumber daya terbatas harus dipakai sebaik mungkin. Seorang pengrajin hanya memiliki sejumlah bahan dan waktu, lalu ingin memilih banyak produk tiap jenis agar keuntungan maksimum. Batas bahan dan waktu itulah yang membentuk sistem pertidaksamaan.

Sebelum mengoptimalkan, kita harus tahu daerah mana yang memenuhi semua kendala. Daerah itu disebut **daerah penyelesaian**, dan titik-titik sudutnya memegang peran penting dalam menentukan nilai terbaik.`,
    },
    {
      id: "konsep",
      kind: "konsep",
      title: "Konsep Inti: Setengah Bidang dan Daerah Penyelesaian",
      questionIds: ['spt-04'],
      body: `Pertidaksamaan linear dua variabel berbentuk
$$ax + by \\le c, \\qquad ax + by \\ge c, \\qquad ax + by < c, \\qquad ax + by > c$$
dengan $a$, $b$, dan $c$ bilangan real serta $a$ dan $b$ tidak keduanya nol. Garis $ax + by = c$ disebut **garis pembatas**, dan garis itu membagi bidang menjadi dua **setengah bidang**.

Untuk memilih setengah bidang yang benar:
1. gambar garis pembatas $ax + by = c$ dari titik potong dengan kedua sumbu;
2. ambil satu titik uji yang tidak terletak pada garis, biasanya $(0,0)$;
3. substitusikan titik uji ke pertidaksamaan;
4. bila pernyataannya benar, arsir setengah bidang yang memuat titik uji; bila salah, arsir setengah bidang di seberangnya.

Daerah penyelesaian sistem adalah **irisan** semua setengah bidang, yaitu himpunan titik yang memenuhi seluruh pertidaksamaan sekaligus.`,
      blocks: [
        {
          kind: "callout",
          variant: "concept",
          title: "Tiga langkah menentukan setengah bidang",
          text: "Menggambar garis, menguji satu titik, lalu mengarsir irisan. Garis penuh dipakai untuk tanda $\\le$ atau $\\ge$, sedangkan garis putus-putus dipakai untuk $<$ atau $>$ karena garisnya tidak termasuk.",
        },
        {
          kind: "flip-cards",
          intro: "Ingat kembali istilah program linear.",
          cards: [
            {
              front: "Daerah penyelesaian",
              back: "Himpunan titik yang memenuhi semua pertidaksamaan",
            },
            {
              front: "Garis batas",
              back: "Garis dari pertidaksamaan; keikutsertaannya bergantung pada tanda pertidaksamaan",
            },
            {
              front: "Uji titik",
              back: "Substitusi satu titik untuk menentukan daerah yang benar",
            },
            {
              front: "Optimasi",
              back: "Mencari nilai maksimum atau minimum pada daerah layak",
            },
          ],
        },
        {
          kind: "figure",
          alt: "Setengah bidang di bawah garis x tambah y sama dengan 4 yang diarsir, mencakup titik asal, dengan garis pembatas digambar penuh.",
          caption: "Daerah penyelesaian $x+y\\le4$ di kuadran pertama, termasuk titik asal $(0,0)$ yang lolos uji; garis $x+y=4$ digambar penuh karena ketaksamaannya memuat tanda sama dengan.",
          svg: '<svg viewBox="0 0 320 240" aria-hidden="true" role="presentation"><line x1="45" y1="190" x2="305" y2="190" stroke="currentColor" stroke-width="1.5"/><line x1="45" y1="195" x2="45" y2="20" stroke="currentColor" stroke-width="1.5"/><polygon points="45,190 245,190 45,40" fill="currentColor" opacity="0.18"/><line x1="45" y1="40" x2="245" y2="190" stroke="currentColor" stroke-width="2"/><circle cx="45" cy="190" r="3" fill="currentColor"/><text x="250" y="188" font-size="12" fill="currentColor">x + y = 4</text><text x="68" y="168" font-size="11" fill="currentColor">daerah x + y ≤ 4</text><text x="298" y="205" font-size="12" fill="currentColor">x</text><text x="30" y="30" font-size="12" fill="currentColor">y</text><text x="30" y="205" font-size="11" fill="currentColor">O</text></svg>',
        },
      ],
    },
    {
      id: "representasi",
      kind: "representasi",
      title: "Representasi",
      body: `Setiap pertidaksamaan dapat disajikan melalui pasangan titik potong, garis pada bidang, dan pernyataan verbal. Ambil $2x + 3y \\le 12$.

Titik potong dengan sumbu: saat $x = 0$, $y = 4$; saat $y = 0$, $x = 6$. Selanjutnya uji titik $(0,0)$: $0 \\le 12$ benar, sehingga daerah penyelesaian memuat titik asal dan merupakan segitiga di kuadran pertama.`,
      blocks: [
        {
          kind: "table",
          caption: "Tiga cara memandang $2x + 3y \\le 12$",
          headers: [
            "Representasi",
            "Bentuk",
          ],
          rows: [
            [
              "Aljabar",
              "$2x + 3y \\le 12$",
            ],
            [
              "Grafik",
              "garis melalui $(0,4)$ dan $(6,0)$",
            ],
            [
              "Verbal",
              "titik di bawah garis, termasuk garisnya",
            ],
          ],
        },
        {
          kind: "tabs",
          items: [
            {
              label: "Simbolik",
              body: "$ax+by \\leq c$",
            },
            {
              label: "Grafik",
              body: "Arsir daerah tiap pertidaksamaan; irisan arsirannya adalah solusi.",
            },
          ],
        },
        {
          kind: "figure",
          alt: "Daerah layak berbentuk segiempat yang dibatasi dua garis dan kedua sumbu koordinat, dengan dua garis kendala diberi label.",
          caption: "Daerah penyelesaian $x+y\\le 4$, $x+2y\\le 6$, $x\\ge 0$, $y\\ge 0$ adalah irisan setengah bidang, yaitu segiempat dengan titik sudut $(0,0)$, $(4,0)$, $(2,2)$, dan $(0,3)$.",
          svg: '<svg viewBox="0 0 320 240" aria-hidden="true" role="presentation"><line x1="50" y1="190" x2="310" y2="190" stroke="currentColor" stroke-width="1.5"/><line x1="50" y1="190" x2="50" y2="15" stroke="currentColor" stroke-width="1.5"/><polygon points="50,190 230,190 140,100 50,55" fill="currentColor" opacity="0.18"/><line x1="50" y1="10" x2="230" y2="190" stroke="currentColor" stroke-width="2"/><line x1="50" y1="55" x2="300" y2="180" stroke="currentColor" stroke-width="2"/><text x="236" y="178" font-size="12" fill="currentColor">x + y = 4</text><text x="86" y="74" font-size="12" fill="currentColor">x + 2y = 6</text><text x="78" y="158" font-size="11" fill="currentColor">daerah</text><text x="78" y="172" font-size="11" fill="currentColor">layak</text><text x="304" y="208" font-size="12" fill="currentColor">x</text><text x="28" y="22" font-size="12" fill="currentColor">y</text></svg>',
        },
      ],
    },
    {
      id: "eksplorasi",
      kind: "eksplorasi",
      title: "Eksplorasi",
      body: `Eksplorasi interaktif ini menampilkan dua garis beserta titik potongnya. Ubah koefisien tiap persamaan, lalu amati kapan kedua garis berpotongan, sejajar, atau berimpit. Titik potong antargaris akan menjadi **titik sudut** daerah penyelesaian yang penting.

Cara memakainya untuk setengah bidang: anggap setiap garis sebagai garis pembatas. Ketika kamu mengubah koefisien, bayangkan setengah bidang di satu sisi garis. Irisan setengah bidang dari dua garis atau lebih itulah daerah penyelesaian sistem.`,
      blocks: [
        {
          kind: "exploration",
          explorationId: "pertidaksamaan-daerah-sim",
        },
      ],
    },
    {
      id: "generalisasi",
      kind: "generalisasi",
      title: "Pola Umum Program Linear Dua Variabel",
      body: `Sistem pertidaksamaan linear selalu menghasilkan daerah penyelesaian berupa **irisan setengah bidang**, yaitu sebuah poligon yang disebut daerah layak. Cara menentukannya mengikuti langkah tetap: gambar tiap garis pembatas, uji satu titik untuk memilih setengah bidang, lalu ambil irisannya.

Dari bentuk daerah layak muncul sifat penting program linear. Fungsi objektif linear $f = px + qy$ mencapai nilai maksimum atau minimumnya di **titik sudut** daerah layak, bukan di tengah. Karena itu pencarian nilai optimum cukup memeriksa titik-titik sudut, yaitu titik potong antargaris pembatas dan titik potong dengan sumbu koordinat.`,
    },
    {
      id: "rumus",
      kind: "rumus",
      title: "Rumus dan Prosedur",
      body: `**Bentuk umum.** Kendala berupa $ax+by\\le c$ atau $ax+by\\ge c$, ditambah syarat tak negatif $x\\ge0$ dan $y\\ge0$.

**Garis pembatas.** Garis $ax+by=c$ digambar dari titik potong dengan kedua sumbu, yaitu $\\left(\\dfrac{c}{a},0\\right)$ dan $\\left(0,\\dfrac{c}{b}\\right)$.

**Uji titik.** Substitusikan titik di luar garis, biasanya $(0,0)$. Bila pernyataannya benar, arsir sisi yang memuat titik uji; bila salah, arsir sisi seberangnya.

**Titik sudut.** Titik sudut daerah layak berasal dari perpotongan dua garis pembatas atau perpotongan dengan sumbu koordinat.

**Fungsi objektif.** Untuk $f=px+qy$, nilai optimum dicapai di salah satu titik sudut. Hitung $f$ pada setiap titik sudut, lalu pilih nilai terbesar (maksimum) atau terkecil (minimum).

**Prosedur.** (1) Tetapkan variabel; (2) ubah setiap batasan menjadi pertidaksamaan; (3) tambahkan syarat tak negatif; (4) tentukan daerah layak; (5) daftar titik sudut; (6) hitung fungsi objektif; (7) tafsirkan hasilnya.`,
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
              text: `Gambarkan daerah penyelesaian $2x + y \\le 6$ pada kuadran pertama.

*Penyelesaian.* Titik potong garis $2x + y = 6$: saat $x = 0$, $y = 6$; saat $y = 0$, $x = 3$. Uji titik $(0,0)$: $0 \\le 6$ benar, jadi arsir sisi yang memuat titik asal. Karena pada kuadran pertama $x \\ge 0$ dan $y \\ge 0$, daerah penyelesaiannya adalah segitiga dengan titik sudut $(0,0)$, $(3,0)$, dan $(0,6)$.`,
            },
            {
              title: "Contoh 2",
              text: `Tentukan titik sudut sistem

$$\\begin{cases} x + y \\le 4 \\\\ x + 2y \\le 6 \\\\ x \\ge 0, \\ y \\ge 0 \\end{cases}$$

*Penyelesaian.* Titik sudut berasal dari titik potong sumbu dan titik potong antargaris.
- Garis $x + y = 4$ memotong sumbu di $(4,0)$ dan $(0,4)$.
- Garis $x + 2y = 6$ memotong sumbu di $(6,0)$ dan $(0,3)$.
- Titik potong kedua garis: $x + y = 4$ dan $x + 2y = 6$ menghasilkan $y = 2$, lalu $x = 2$, yaitu titik $(2,2)$.

Dengan memeriksa setiap titik pada semua pertidaksamaan, titik sudut daerah penyelesaian adalah $(0,0)$, $(4,0)$, $(2,2)$, dan $(0,3)$.`,
            },
            {
              title: "Contoh 3",
              text: `Sebuah usaha kecil membuat dua jenis produk, $x$ dan $y$. Produk $x$ memerlukan $1$ unit bahan dan $2$ jam kerja; produk $y$ memerlukan $2$ unit bahan dan $1$ jam kerja. Tersedia $8$ unit bahan dan $10$ jam kerja. Keuntungan tiap produk $x$ adalah Rp2.000 dan tiap produk $y$ Rp3.000. Tentukan model kendalanya dan keuntungan maksimum.

*Penyelesaian.* Kendala bahan: $x + 2y \\le 8$. Kendala waktu: $2x + y \\le 10$. Ditambah syarat $x \\ge 0$ dan $y \\ge 0$. Fungsi objektif: $f = 2000x + 3000y$.

Titik sudutnya adalah $(0,0)$, $(5,0)$, $(0,4)$, dan titik potong kedua garis. Dari $x + 2y = 8$ dan $2x + y = 10$ diperoleh $x = 4$ dan $y = 2$. Nilai $f$: $(0,0)=0$, $(5,0)=10000$, $(0,4)=12000$, dan $(4,2)=14000$. Keuntungan maksimum Rp14.000 dicapai saat $x = 4$ dan $y = 2$.`,
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
      body: `Program linear membantu mengambil keputusan saat sumber daya terbatas. Usaha dengan $8$ unit bahan dan $10$ jam kerja yang membuat dua produk dengan keuntungan Rp2.000 dan Rp3.000 mencapai laba maksimum Rp14.000 pada kombinasi $4$ unit produk pertama dan $2$ unit produk kedua. Pola pikirnya selalu sama: tetapkan variabel, susun kendala, gambarkan daerah penyelesaian, lalu cari nilai optimum di titik sudut.

Langkah pemodelan yang baik: (1) tentukan variabel dan satuannya, (2) ubah setiap batasan menjadi pertidaksamaan, (3) tambahkan syarat tak negatif, (4) tulis fungsi objektif, (5) periksa nilai pada setiap titik sudut, dan (6) tafsirkan jawabannya dalam konteks.`,
    },
    {
      id: "kesalahan-umum",
      kind: "kesalahan-umum",
      title: "Kesalahan Umum",
      body: `**1. Mengarsir sisi yang salah.** Selalu uji satu titik, misalnya $(0,0)$, sebelum mengarsir. Jangan menebak hanya dari tanda koefisien.

**2. Mengira garis pembatas selalu termasuk.** Tanda $\\le$ dan $\\ge$ menyertakan garis, sedangkan $<$ dan $>$ tidak. Perbedaannya tampak pada garis penuh dan garis putus-putus.

**3. Lupa syarat tak negatif.** Banyak masalah nyata menuntut $x \\ge 0$ dan $y \\ge 0$. Tanpa itu, daerah penyelesaian bisa membentang tanpa batas.

**4. Menyimpulkan nilai optimum tanpa memeriksa semua titik sudut.** Satu titik sudut belum tentu memberi nilai terbaik; periksa seluruhnya.`,
    },
    {
      id: "tantangan",
      kind: "tantangan",
      title: "Tantangan",
      body: `**Soal.** Sebuah usaha rumahan memproduksi dua jenis tas. Tas jenis A memerlukan $2$ jam menjahit dan $1$ jam penyelesaian; tas jenis B memerlukan $1$ jam menjahit dan $2$ jam penyelesaian. Setiap hari tersedia $12$ jam menjahit dan $12$ jam penyelesaian. Keuntungan tas A Rp40.000 dan tas B Rp30.000. Tentukan banyak tiap jenis tas agar keuntungan maksimum, beserta besar keuntungan itu.`,
      blocks: [
        {
          kind: "step-reveal",
          intro: "Susun kendala, tentukan daerah layak beserta titik sudutnya, lalu uji fungsi objektif.",
          steps: [
            {
              title: "Tetapkan variabel",
              text: "Misalkan $x$ banyak tas A dan $y$ banyak tas B. Keuntungan $f=40.000x+30.000y$.",
            },
            {
              title: "Susun kendala",
              text: "Jam menjahit: $2x+y\\le12$. Jam penyelesaian: $x+2y\\le12$. Ditambah $x\\ge0$ dan $y\\ge0$.",
            },
            {
              title: "Titik sudut pada sumbu",
              text: "Garis $2x+y=12$ memotong sumbu di $(6,0)$ dan $(0,12)$; garis $x+2y=12$ memotong sumbu di $(12,0)$ dan $(0,6)$. Karena syarat tak negatif, titik sudut yang layak adalah $(0,0)$, $(6,0)$, dan $(0,6)$.",
            },
            {
              title: "Titik potong kedua garis",
              text: "Selesaikan $2x+y=12$ dan $x+2y=12$. Dari $y=12-2x$ diperoleh $x+2(12-2x)=12$, sehingga $-3x=-12$, $x=4$, dan $y=4$. Titik sudutnya $(4,4)$.",
            },
            {
              title: "Uji fungsi objektif",
              text: "$(6,0)=240.000$; $(0,6)=180.000$; $(4,4)=40.000\\cdot4+30.000\\cdot4=280.000$. Nilai terbesar ada di $(4,4)$.",
            },
            {
              title: "Tafsirkan",
              text: "Buat $4$ tas A dan $4$ tas B untuk keuntungan maksimum Rp280.000. Periksa: menjahit $2(4)+4=12$ jam dan penyelesaian $4+2(4)=12$ jam, tepat habis.",
            },
          ],
        },
      ],
    },
    {
      id: "sejarah",
      kind: "sejarah",
      title: "Jejak Sejarah",
      body: `Program linear sebagai bidang tersendiri lahir dari kebutuhan mengatur sumber daya yang terbatas. Pada 1939 Leonid Kantorovich merumuskan masalah alokasi produksi sebagai optimasi fungsi linear di bawah kendala pertidaksamaan, dan karyanya kemudian diakui dengan Nobel Ekonomi. Pada 1947 George Dantzig mengembangkan metode simpleks, prosedur sistematis untuk menyelesaikan program linear berukuran besar, sehingga bidang ini cepat menyebar ke industri. Gagasan sistem pertidaksamaan linear sendiri sudah muncul lebih awal, seperti pada karya Joseph Fourier pada 1820-an, tetapi baru pada abad ke-20 alat hitungnya cukup kuat. Kini program linear dipakai di bidang transportasi, penjadwalan, dan analisis ekonomi.`,
    },
    {
      id: "refleksi",
      kind: "refleksi",
      title: "Refleksi",
      body: "Daerah penyelesaian adalah cara memvisualkan batas-batas yang saling mengunci: setiap kendala baru hanya dapat mempersempit, bukan memperluas, pilihan yang layak. Temukan satu keputusan di sekitarmu yang dibatasi dua sumber daya sekaligus, lalu tuliskan dua pertidaksamaan kendalanya.",
      blocks: [
        {
          kind: "reflection",
          prompts: [
            "Bagaimana kamu memastikan sisi arsir yang benar saat menggambar pertidaksamaan?",
            "Mengapa syarat $x \\ge 0$ dan $y \\ge 0$ penting dalam pemodelan?",
            "Pada masalah nyata, apa arti fungsi objektif dan titik sudut yang memberi nilai optimum?",
          ],
          confidenceLabel: "Seberapa yakin kamu menentukan daerah penyelesaian dan titik sudutnya?",
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
              "Bentuk umum",
              "$ax + by \\le c$ atau $ax + by \\ge c$",
            ],
            [
              "Garis pembatas",
              "$ax + by = c$ membagi bidang menjadi dua setengah bidang",
            ],
            [
              "Titik uji",
              "substitusi titik seperti $(0,0)$ untuk memilih sisi yang benar",
            ],
            [
              "Daerah penyelesaian",
              "irisan semua setengah bidang yang memenuhi",
            ],
            [
              "Titik sudut",
              "titik potong garis-garis pembatas pada daerah penyelesaian",
            ],
            [
              "Program linear",
              "mengoptimalkan fungsi objektif linear di bawah kendala",
            ],
          ],
        },
      ],
    },
    {
      id: "evaluasi",
      kind: "evaluasi",
      title: "Evaluasi",
      questionIds: ['spt-09'],
      body: `**Tiket keluar.** (1) Gambarkan daerah penyelesaian $x+2y\\le6$ di kuadran pertama, lalu sebutkan koordinat titik sudutnya. (2) Bila sistem ditambah kendala $x+y\\ge2$, jelaskan mengapa titik $(0,0)$ tidak lagi termasuk padahal sebelumnya termasuk. Setelah menjawab, lanjut ke [Latihan & Asesmen](/latihan) topik **Sistem Pertidaksamaan Linear** untuk latihan tambahan.`,
    },
  ],
};
