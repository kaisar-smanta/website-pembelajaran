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
  explorations: ['spltv-perpotongan'],
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
      body: `Sebelum melanjutkan, pastikan kamu menguasai:
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
          title: "Inti yang perlu diingat",
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
      ],
    },
    {
      id: "representasi",
      kind: "representasi",
      title: "Representasi",
      body: `Setiap pertidaksamaan dapat disajikan melalui pasangan titik potong, garis pada bidang, dan pernyataan verbal. Misalnya $2x + 3y \\le 12$.

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
          explorationId: "spltv-perpotongan",
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
      body: `1. Tentukan titik potong garis $3x + 2y = 12$ dengan sumbu-$x$ dan sumbu-$y$.

2. Periksa apakah titik $(3,1)$ memenuhi pertidaksamaan $2x - y \\ge 4$.

3. Tentukan dua titik yang dilalui garis $x - 2y = 6$.

4. Sebutkan titik-titik sudut daerah yang dibatasi $x \\ge 0$, $y \\ge 0$, dan $x + y \\le 5$.

5. Tentukan nilai maksimum $f = x + 3y$ pada daerah dengan titik sudut $(0,0)$, $(4,0)$, dan $(0,4)$.`,
      blocks: [
        {
          kind: "details",
          summary: "Lihat kunci dan pembahasan",
          text: `1. Saat $y = 0$, $3x = 12$ sehingga $x = 4$, titik $(4,0)$. Saat $x = 0$, $2y = 12$ sehingga $y = 6$, titik $(0,6)$.
2. $2(3) - 1 = 5 \\ge 4$ benar, jadi titik $(3,1)$ memenuhi.
3. Saat $y = 0$, $x = 6$ sehingga $(6,0)$; saat $y = -3$, $x = 0$ sehingga $(0,-3)$. Jawaban lain yang memenuhi juga benar.
4. Titik sudutnya $(0,0)$, $(5,0)$, dan $(0,5)$.
5. Nilai $f$: $(0,0) = 0$, $(4,0) = 4$, dan $(0,4) = 12$. Maksimum $12$ di titik $(0,4)$.`,
        },
      ],
    },
    {
      id: "latihan-cakap",
      kind: "latihan-cakap",
      title: "Latihan Cakap",
      level: "cakap",
      body: `1. Gambarkan daerah penyelesaian sistem $x + y \\le 6$, $2x + y \\ge 8$, $x \\ge 0$, dan $y \\ge 0$, lalu tentukan titik sudutnya.

2. Tentukan nilai maksimum $f = 2x + 3y$ dengan kendala $x + y \\le 5$, $x + 2y \\le 8$, $x \\ge 0$, dan $y \\ge 0$.

3. Tentukan sistem pertidaksamaan untuk daerah segitiga dengan titik sudut $(0,0)$, $(5,0)$, dan $(0,4)$.

4. Sebuah koperasi siswa menjual dua jenis minuman. Minuman A memberi keuntungan Rp2.000 dan memerlukan $2$ sendok sirup serta $1$ gelas air; minuman B memberi keuntungan Rp3.000 dan memerlukan $1$ sendok sirup serta $2$ gelas air. Tersedia $8$ sendok sirup dan $10$ gelas air. Modelkan kendalanya dan tentukan keuntungan maksimum.`,
      blocks: [
        {
          kind: "details",
          summary: "Lihat kunci dan pembahasan",
          text: `1. Titik potong $x + y = 6$ dan $2x + y = 8$ adalah $(2,4)$. Titik sudut daerah penyelesaian: $(4,0)$, $(6,0)$, dan $(2,4)$.
2. Titik sudut: $(0,0)$, $(5,0)$, $(2,3)$, dan $(0,4)$. Nilai $f$: $0$, $10$, $13$, dan $12$. Maksimum $13$ di titik $(2,3)$.
3. Garis melalui $(5,0)$ dan $(0,4)$ adalah $4x + 5y = 20$. Sistemnya: $x \\ge 0$, $y \\ge 0$, dan $4x + 5y \\le 20$.
4. Kendala: $2x + y \\le 8$ (sirup), $x + 2y \\le 10$ (air), $x \\ge 0$, $y \\ge 0$. Fungsi objektif $f = 2000x + 3000y$. Titik sudut: $(0,0)$, $(4,0)$, $(2,4)$, dan $(0,5)$. Nilai $f$: $0$, $8000$, $16000$, dan $15000$. Keuntungan maksimum Rp16.000 pada $x = 2$ dan $y = 4$.`,
        },
      ],
    },
    {
      id: "latihan-mahir",
      kind: "latihan-mahir",
      title: "Latihan Mahir",
      level: "mahir",
      body: `1. Selidiki apakah titik $(3,2)$ termasuk penyelesaian sistem $x + y \\le 6$, $2x - y \\ge 3$, $x \\ge 0$, dan $y \\ge 0$.

2. Tentukan nilai maksimum $f = 5x + 4y$ dengan kendala $2x + y \\le 10$, $x + 3y \\le 15$, $x \\ge 0$, dan $y \\ge 0$.

3. Sebuah usaha memproduksi dua jenis kerajinan. Jenis A memerlukan $3$ jam kerja dan $2$ unit bahan, sedangkan jenis B memerlukan $1$ jam kerja dan $3$ unit bahan. Tersedia $12$ jam kerja dan $15$ unit bahan. Keuntungan jenis A Rp40.000 dan jenis B Rp30.000. Tentukan banyak tiap jenis agar keuntungan maksimum.

4. Jelaskan mengapa pencarian nilai optimum program linear cukup dilakukan dengan memeriksa titik-titik sudut daerah penyelesaian.`,
      blocks: [
        {
          kind: "details",
          summary: "Lihat pembahasan",
          text: `1. Substitusi $(3,2)$: $3 + 2 = 5 \\le 6$ benar; $2(3) - 2 = 4 \\ge 3$ benar; $x = 3 \\ge 0$ dan $y = 2 \\ge 0$ benar. Jadi $(3,2)$ termasuk penyelesaian.
2. Titik sudut: $(0,0)$, $(5,0)$, $(3,4)$, dan $(0,5)$. Nilai $f$: $0$, $25$, $31$, dan $20$. Maksimum $31$ di titik $(3,4)$.
3. Misal $x$ banyak jenis A dan $y$ banyak jenis B. Kendala: $3x + y \\le 12$, $2x + 3y \\le 15$, $x \\ge 0$, $y \\ge 0$. Fungsi objektif $f = 40000x + 30000y$. Titik sudut: $(0,0)$, $(4,0)$, $(3,3)$, dan $(0,5)$. Nilai $f$: $0$, $160000$, $210000$, dan $150000$. Keuntungan maksimum Rp210.000 pada $3$ jenis A dan $3$ jenis B.
4. Fungsi objektif linear selalu mencapai nilai terbesar atau terkecil di titik sudut, karena di sepanjang sisi daerah nilainya berubah secara linear sehingga nilai ekstrem muncul di ujung sisi, yaitu titik sudut. Karena itu memeriksa semua titik sudut sudah cukup.`,
        },
      ],
    },
    {
      id: "dunia-nyata",
      kind: "dunia-nyata",
      title: "Penerapan di Dunia Nyata",
      body: `Program linear membantu mengambil keputusan saat sumber daya terbatas: menentukan komposisi produk yang memberi laba terbesar, menyusun menu dengan biaya minimum, atau mengatur jadwal pemakaian alat. Pola pikirnya selalu sama: tetapkan variabel, susun kendala, gambarkan daerah penyelesaian, lalu cari nilai optimum di titik sudut.

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
      id: "refleksi",
      kind: "refleksi",
      title: "Refleksi",
      blocks: [
        {
          kind: "reflection",
          prompts: [
            "Bagaimana kamu memastikan sisi arsir yang benar saat menggambar pertidaksamaan?",
            "Mengapa syarat $x \\ge 0$ dan $y \\ge 0$ penting dalam pemodelan?",
            "Pada masalah nyata, apa arti fungsi objektif dan titik sudut yang memberi nilai optimum?",
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
      body: "Kerjakan kuis topik ini untuk memeriksa pemahamanmu. Buka halaman [Latihan & Asesmen](/latihan) lalu pilih topik **Sistem Pertidaksamaan Linear**.",
    },
  ],
};
