import type { Topic } from '@/types/content';

export const ketaksamaan: Topic = {
  id: 'ketaksamaan',
  slug: 'ketaksamaan',
  title: 'Ketaksamaan',
  subtitle: 'Membandingkan besaran dan mencari nilai optimum',
  grade: 'X',
  phase: 'E',
  element: 'aljabar-fungsi',
  subject: 'matematika',
  status: 'lengkap',
  supplementary: true,
  cpNote:
    'Pengayaan: memperluas sifat pertidaksamaan dan pemodelan fungsi kuadrat menuju ketaksamaan klasik (AM-GM, Cauchy-Schwarz) serta optimasi, sebagai jembatan ke olimpiade dan kalkulus.',
  estimatedMinutes: 100,
  summary:
    'Menguasai sifat ketaksamaan, AM-GM, Cauchy-Schwarz sederhana, dan ketaksamaan segitiga untuk membandingkan besaran serta menentukan nilai optimum.',
  description:
    'Ketaksamaan mempelajari hubungan "lebih besar", "lebih kecil", dan "paling besar/paling kecil" secara sistematis. Topik ini dimulai dari sifat-sifat dasar ketaksamaan, lalu membangun ketaksamaan AM-GM, Cauchy-Schwarz sederhana, dan ketaksamaan segitiga. Ketiga senjata ini dipakai untuk membuktikan pernyataan dan menyelesaikan masalah optimasi tanpa harus menggambar grafik, misalnya menentukan luas maksimum atau biaya minimum.',
  keywords: [
    'ketaksamaan',
    'pertidaksamaan',
    'AM-GM',
    'Cauchy-Schwarz',
    'ketaksamaan segitiga',
    'optimasi',
    'nilai minimum',
  ],
  prerequisites: ['fungsi-kuadrat'],
  relatedTopics: ['fungsi-kuadrat', 'polinomial'],
  prerequisiteKnowledge: [
    'Sifat dan penyelesaian pertidaksamaan linear',
    'Bentuk kuadrat dan titik puncak parabola',
    'Akar kuadrat dan pemfaktoran bentuk aljabar',
  ],
  objectives: [
    { text: 'Menggunakan sifat-sifat ketaksamaan untuk memanipulasi pertidaksamaan dengan aman.' },
    { text: 'Menerapkan AM-GM untuk membuktikan pernyataan dan mencari nilai minimum.' },
    { text: 'Menerapkan Cauchy-Schwarz sederhana pada bentuk jumlah kuadrat.' },
    { text: 'Menggunakan ketaksamaan segitiga untuk menaksir besar suatu besaran.' },
    { text: 'Menyelesaikan masalah optimasi sederhana tanpa kalkulus.' },
  ],
  applications: ['optimasi-biaya'],
  sections: [
    {
      id: 'tujuan',
      kind: 'tujuan',
      title: 'Tujuan Pembelajaran',
      body:
        'Setelah mempelajari topik ini, peserta didik dapat memanipulasi ketaksamaan dengan benar, membuktikan pernyataan dengan AM-GM, Cauchy-Schwarz sederhana, dan ketaksamaan segitiga, serta menentukan nilai maksimum atau minimum suatu besaran melalui optimasi.',
    },
    {
      id: 'pemantik',
      kind: 'pemantik',
      title: 'Pertanyaan Pemantik',
      body: `Ambil bilangan positif $x$ dan pasangannya $\\dfrac{1}{x}$.

- Jika $x = 2$, berapa nilai $x + \\dfrac{1}{x}$?
- Bisakah jumlah itu turun sampai di bawah $2$?
- Pada nilai $x$ berapa jumlah itu paling kecil?

Jumlah dua bilangan positif yang saling berkebalikan ternyata tidak pernah kurang dari $2$. Ketaksamaan menjelaskan mengapa hal ini selalu benar.`,
      blocks: [
        {
          kind: 'prediction',
          prompt:
            'Untuk setiap $x > 0$, apakah $x + \\dfrac{1}{x}$ selalu bernilai paling sedikit $2$, dan kapan nilai terkecil itu tercapai?',
          options: [
            'Ya, paling sedikit $2$ dan tercapai saat $x = 1$.',
            'Ya, paling sedikit $0$ dan tercapai saat $x = 1$.',
            'Tidak, nilainya bisa negatif.',
            'Tidak dapat ditentukan tanpa menghitung semua $x$.',
          ],
          reveal:
            'Menurut AM-GM, $x + \\dfrac{1}{x} \\ge 2\\sqrt{x \\cdot \\dfrac{1}{x}} = 2$. Kesamaan hanya terjadi ketika kedua suku sama, yaitu $x = \\dfrac{1}{x}$, sehingga $x = 1$ (karena $x > 0$). Jadi nilai terkecilnya $2$, bukan $0$.',
          saveLabel: 'Simpan dugaan',
        },
      ],
    },
    {
      id: 'prasyarat',
      kind: 'prasyarat',
      title: 'Prasyarat',
      body: `Sebelum melanjutkan, pastikan kamu menguasai:
- menyelesaikan pertidaksamaan linear dan kuadrat;
- menentukan titik puncak parabola $f(x) = ax^2 + bx + c$;
- pemfaktoran dan identitas aljabar seperti $(a-b)^2 = a^2 - 2ab + b^2$.`,
    },
    {
      id: 'konteks',
      kind: 'konteks',
      title: 'Situasi dan Konteks',
      body: `Ketaksamaan muncul setiap kali kita mencari **paling besar**, **paling kecil**, **paling murah**, atau **paling efisien**. Seorang petani ingin luas kebun terbesar dengan pagar terbatas; seorang perencana ingin biaya minimum; seorang pengrajin ingin memotong bahan agar sisa sedikit mungkin.

Dengan bantuan ketaksamaan, pertanyaan semacam itu dapat dijawab tanpa menggambar grafik berulang kali. Cukup tunjukkan suatu batas bawah atau batas atas, lalu pastikan batas itu benar-benar tercapai.`,
    },
    {
      id: 'konsep',
      kind: 'konsep',
      title: 'Konsep Inti: Sifat-Sifat Ketaksamaan',
      body: `Ketaksamaan adalah pernyataan perbandingan, misalnya $a < b$ atau $a \\ge b$. Agar manipulasi tetap benar, ingat sifat-sifat berikut.

1. **Menambah/mengurangi.** Jika $a < b$, maka $a + c < b + c$ untuk setiap bilangan real $c$.
2. **Mengalikan bilangan positif.** Jika $a < b$ dan $c > 0$, maka $ac < bc$.
3. **Mengalikan bilangan negatif.** Jika $a < b$ dan $c < 0$, maka $ac > bc$; **tanda ketaksamaan berbalik**.
4. **Menjumlahkan sesama arah.** Jika $a < b$ dan $c < d$, maka $a + c < b + d$.
5. **Transitivitas.** Jika $a < b$ dan $b < c$, maka $a < c$.
6. **Kuadrat tidak selalu aman.** $a < b$ **tidak** dengan sendirinya berarti $a^2 < b^2$; itu hanya benar bila $a, b \\ge 0$.

Sifat nomor 3 adalah sumber kesalahan paling umum. Setiap kali mengalikan atau membagi dengan bilangan yang tandanya belum pasti, kita harus memeriksa tandanya lebih dahulu.`,
      blocks: [
        {
          kind: 'callout',
          variant: 'concept',
          title: 'Inti yang perlu diingat',
          text:
            'Mengalikan ketaksamaan dengan bilangan **negatif** membalik tanda. Karena itu, jangan pernah mengalikan dengan variabel yang tandanya belum diketahui tanpa memisahkan kasus.',
        },
        {
          kind: 'match',
          intro: 'Pasangkan operasi dengan pengaruhnya terhadap ketaksamaan $a < b$.',
          pairs: [
            { left: 'Tambah $c$ pada kedua ruas', right: 'Tanda tetap: $a + c < b + c$' },
            { left: 'Kali $c > 0$', right: 'Tanda tetap: $ac < bc$' },
            { left: 'Kali $c < 0$', right: 'Tanda berbalik: $ac > bc$' },
            { left: 'Kuadratkan kedua ruas', right: 'Hanya aman bila kedua ruas tak negatif' },
          ],
        },
      ],
    },
    {
      id: 'representasi',
      kind: 'representasi',
      title: 'Representasi: Grafik dan Aljabar',
      body:
        'Satu ketaksamaan dapat dibaca melalui grafik maupun aljabar. Bandingkan keduanya pada pernyataan $x + \\dfrac{1}{x} \\ge 2$ untuk $x > 0$.',
      blocks: [
        {
          kind: 'table',
          caption: 'Dua cara membaca $x + \\dfrac{1}{x} \\ge 2$',
          headers: ['Representasi', 'Makna'],
          rows: [
            ['Aljabar', 'Selisih $x + \\dfrac{1}{x} - 2 = \\dfrac{(x-1)^2}{x} \\ge 0$ untuk $x > 0$'],
            ['Grafik', 'Kurva $y = x + \\dfrac{1}{x}$ selalu di atas garis $y = 2$ dan menyinggungnya di $x = 1$'],
            ['Tabel', 'Pada $x = 0{,}5$ nilainya $2{,}5$; pada $x = 1$ nilainya $2$; pada $x = 2$ nilainya $2{,}5$'],
          ],
        },
        {
          kind: 'tabs',
          items: [
            {
              label: 'Aljabar',
              body:
                'Tulis $x + \\dfrac{1}{x} - 2 = \\dfrac{x^2 - 2x + 1}{x} = \\dfrac{(x-1)^2}{x}$. Karena pembilang tak negatif dan penyebut positif, selisihnya $\\ge 0$.',
            },
            {
              label: 'Grafik',
              body:
                'Grafik $y = x + \\dfrac{1}{x}$ turun lalu naik, dengan titik terendah di $x = 1$, tepat menyentuh garis mendatar $y = 2$.',
            },
            {
              label: 'Tabel',
              body:
                'Menghitung beberapa nilai menunjukkan hasil selalu $\\ge 2$, dengan nilai terkecil $2$ di $x = 1$.',
            },
          ],
        },
      ],
    },
    {
      id: 'eksplorasi',
      kind: 'eksplorasi',
      title: 'Eksplorasi',
      body:
        'Geser parameter fungsi kuadrat pada simulasi ini dan amati titik puncaknya. Titik puncak itulah kandidat nilai maksimum atau minimum, yang nantinya dapat dipastikan kebenarannya dengan ketaksamaan.',
      blocks: [
        {
          kind: 'exploration',
          explorationId: 'kuadrat-parameter',
        },
      ],
    },
    {
      id: 'generalisasi',
      kind: 'generalisasi',
      title: 'Pola Umum: AM-GM, Cauchy-Schwarz, dan Segitiga',
      body: `**AM-GM (Rata-rata Aritmetika–Geometri).** Untuk bilangan tak negatif $a$ dan $b$:

$$\\frac{a+b}{2} \\ge \\sqrt{ab}.$$

Kesamaan terjadi tepat ketika $a = b$. Untuk $n$ bilangan tak negatif, berlaku $\\dfrac{a_1 + a_2 + \\cdots + a_n}{n} \\ge \\sqrt[n]{a_1 a_2 \\cdots a_n}$.

**Mengapa benar?** Cukup amati bahwa $(\\sqrt{a} - \\sqrt{b})^2 \\ge 0$. Penjabarannya memberi $a - 2\\sqrt{ab} + b \\ge 0$, yaitu $a + b \\ge 2\\sqrt{ab}$.

**Cauchy-Schwarz (bentuk sederhana).** Untuk bilangan real sembarang:

$$(a^2 + b^2)(c^2 + d^2) \\ge (ac + bd)^2.$$

Kesamaan terjadi ketika $(a,b)$ sebanding dengan $(c,d)$. Jika $c = d = 1$, rumus ini langsung memberi $a^2 + b^2 \\ge \\dfrac{(a+b)^2}{2}$.

**Ketaksamaan segitiga.** Untuk bilangan real $x$ dan $y$:

$$|x + y| \\le |x| + |y|.$$

Ini adalah kasus khusus Cauchy-Schwarz dan menyatakan bahwa panjang sisi ketiga segitiga tidak pernah melebihi jumlah dua sisi lainnya.`,
      blocks: [
        {
          kind: 'callout',
          variant: 'warning',
          title: 'Hati-hati',
          text:
            'AM-GM hanya berlaku untuk bilangan **tak negatif**. Menerapkannya pada bilangan negatif menghasilkan kesimpulan palsu.',
        },
      ],
    },
    {
      id: 'rumus',
      kind: 'rumus',
      title: 'Kumpulan Ketaksamaan Penting',
      body: `Ketaksamaan dasar yang akan sering dipakai:

$$\\frac{a+b}{2} \\ge \\sqrt{ab} \\quad (a, b \\ge 0),$$

$$a^2 + b^2 \\ge 2ab \\quad (a, b \\in \\mathbb{R}),$$

$$(a^2 + b^2)(c^2 + d^2) \\ge (ac + bd)^2,$$

$$|x + y| \\le |x| + |y|.$$

Untuk optimasi, pola yang paling sering dipakai adalah: jika hasil kali dua besaran positif tetap, maka jumlahnya minimum saat keduanya sama; dan jika jumlah tetap, maka hasil kalinya maksimum saat keduanya sama.`,
    },
    {
      id: 'contoh',
      kind: 'contoh',
      title: 'Contoh Terbimbing',
      body: `**Contoh 1 — Sifat ketaksamaan.** Selesaikan $3 - 2x \\ge 7$.

*Penyelesaian.* Kurangi $3$: $-2x \\ge 4$. Bagi dengan $-2$ (negatif), sehingga tanda berbalik: $x \\le -2$.

**Contoh 2 — AM-GM untuk minimum.** Untuk $x > 0$, tentukan nilai terkecil $x + \\dfrac{9}{x}$.

*Penyelesaian.* $x + \\dfrac{9}{x} \\ge 2\\sqrt{x \\cdot \\dfrac{9}{x}} = 2\\sqrt{9} = 6$. Kesamaan saat $x = \\dfrac{9}{x}$, yaitu $x = 3$. Nilai terkecilnya $6$.

**Contoh 3 — Cauchy-Schwarz.** Diketahui $x + y = 10$. Tentukan nilai minimum $x^2 + y^2$.

*Penyelesaian.* Dengan $c = d = 1$: $(x^2 + y^2)(1 + 1) \\ge (x + y)^2 = 100$, sehingga $x^2 + y^2 \\ge 50$. Kesamaan saat $x = y = 5$.

**Contoh 4 — Ketaksamaan segitiga.** Tentukan semua $x$ dengan $|2x - 1| \\le 5$.

*Penyelesaian.* $|2x - 1| \\le 5$ setara dengan $-5 \\le 2x - 1 \\le 5$. Tambah $1$: $-4 \\le 2x \\le 6$, sehingga $-2 \\le x \\le 3$.`,
      blocks: [
        {
          kind: 'step-reveal',
          intro: 'Mari cari nilai minimum $x + \\dfrac{9}{x}$ untuk $x > 0$, satu langkah sekaligus.',
          steps: [
            {
              title: 'Kenali bentuk AM-GM',
              text: 'Tulis suku pertama sebagai $a = x$ dan suku kedua sebagai $b = \\dfrac{9}{x}$.',
            },
            {
              title: 'Terapkan AM-GM',
              text: '$x + \\dfrac{9}{x} \\ge 2\\sqrt{x \\cdot \\dfrac{9}{x}} = 2\\sqrt{9}$.',
            },
            {
              title: 'Hitung batas bawah',
              text: '$2\\sqrt{9} = 2 \\cdot 3 = 6$, jadi $x + \\dfrac{9}{x} \\ge 6$.',
            },
            {
              title: 'Periksa kesamaan',
              text: 'Kesamaan saat $x = \\dfrac{9}{x}$, yaitu $x^2 = 9$ dan $x = 3$ (karena $x > 0$). Jadi nilai minimum $6$ benar-benar tercapai.',
            },
          ],
        },
      ],
    },
    {
      id: 'latihan-dasar',
      kind: 'latihan-dasar',
      title: 'Latihan Dasar',
      level: 'dasar',
    },
    {
      id: 'latihan-cakap',
      kind: 'latihan-cakap',
      title: 'Latihan Cakap',
      level: 'cakap',
    },
    {
      id: 'latihan-mahir',
      kind: 'latihan-mahir',
      title: 'Latihan Mahir',
      level: 'mahir',
    },
    {
      id: 'dunia-nyata',
      kind: 'dunia-nyata',
      title: 'Penerapan di Dunia Nyata',
      body: `Ketaksamaan dipakai di mana-mana untuk menekan biaya dan memaksimalkan hasil. Seorang petani yang memiliki pagar sepanjang tertentu dapat menentukan ukuran kebun persegi agar luasnya maksimum. Sebuah perusahaan dapat menaksir batas bawah biaya produksi per unit.

Pola berpikirnya selalu sama: (1) nyatakan besaran yang dioptimalkan sebagai fungsi variabel, (2) terapkan ketaksamaan yang sesuai untuk memperoleh batas, (3) pastikan batas tercapai saat kedua besaran sama, lalu (4) tafsirkan hasilnya dalam konteks asal.`,
    },
    {
      id: 'kesalahan-umum',
      kind: 'kesalahan-umum',
      title: 'Kesalahan Umum',
      body: `**1. Lupa membalik tanda saat mengali/membagi dengan negatif.** Dari $-2x \\ge 4$ yang benar adalah $x \\le -2$, bukan $x \\ge -2$.

**2. Menerapkan AM-GM pada bilangan negatif.** AM-GM mensyaratkan bilangan tak negatif. Untuk $a = b = -1$, nilai $-2$ jelas tidak $\\ge 2$. Bila variabel boleh negatif, pisahkan kasusnya.

**3. Menguadratkan kedua ruas tanpa memeriksa tanda.** Dari $a < b$ belum tentu $a^2 < b^2$; misalnya $-3 < 2$ tetapi $9 > 4$.

**4. Menyimpulkan minimum tanpa memeriksa kesamaan.** Batas bawah $f(x) \\ge c$ baru bermakna jika ada $x$ yang membuat $f(x) = c$. Periksa syarat kesamaan.

**5. Menyamakan AM-GM dengan rata-rata biasa.** AM-GM membandingkan rata-rata aritmetika dengan rata-rata geometri, bukan menyatakannya sama.`,
      blocks: [
        {
          kind: 'spot-mistake',
          intro:
            'Seorang siswa menyimpulkan bahwa AM-GM berlaku untuk semua bilangan real. Klik langkah yang keliru.',
          steps: [
            'Untuk $a = 2$ dan $b = 8$: $a + b = 10 \\ge 2\\sqrt{16} = 8$, benar.',
            'Karena sudah terbukti benar sekali, AM-GM dianggap berlaku untuk semua bilangan real.',
            'Ambil $a = b = -1$: maka $a + b = -2 \\ge 2\\sqrt{(-1)(-1)} = 2$.',
            'Kesimpulan: $-2 \\ge 2$ sehingga AM-GM sah untuk bilangan negatif.',
          ],
          wrongIndex: 1,
          explanation:
            'AM-GM hanya berlaku untuk bilangan **tak negatif**. Dengan $a = b = -1$, ruas kanan $2\\sqrt{ab} = 2$ sementara ruas kiri $-2$, sehingga ketaksamaan gagal. Satu contoh benar tidak membuktikan keberlakuan umum.',
        },
      ],
    },
    {
      id: 'refleksi',
      kind: 'refleksi',
      title: 'Refleksi',
      body: 'Renungkan bagaimana ketaksamaan membantumu membuktikan batas nilai tanpa menggambar grafik.',
      blocks: [
        {
          kind: 'reflection',
          prompts: [
            'Kapan mengalikan ketaksamaan dengan sebuah bilangan menuntut kita membalik tandanya?',
            'Mengapa memeriksa syarat kesamaan penting sebelum menyimpulkan nilai minimum atau maksimum?',
            'Ketaksamaan mana yang paling cocok untuk masalah optimasi dengan hasil kali tetap, dan mengapa?',
          ],
          confidenceLabel: 'Seberapa yakin kamu memilih ketaksamaan yang tepat untuk suatu soal?',
        },
      ],
    },
    {
      id: 'rangkuman',
      kind: 'rangkuman',
      title: 'Rangkuman',
      blocks: [
        {
          kind: 'table',
          headers: ['Konsep', 'Bentuk', 'Catatan'],
          rows: [
            ['Sifat dasar', 'Jika $a < b$ dan $c > 0$ maka $ac < bc$', 'Tanda tetap'],
            ['Sifat negatif', 'Jika $a < b$ dan $c < 0$ maka $ac > bc$', 'Tanda berbalik'],
            ['AM-GM', '$\\dfrac{a+b}{2} \\ge \\sqrt{ab}$', '$a, b \\ge 0$; sama saat $a = b$'],
            ['Cauchy-Schwarz', '$(a^2+b^2)(c^2+d^2) \\ge (ac+bd)^2$', 'Sama saat $(a,b)$ sebanding $(c,d)$'],
            ['Ketaksamaan segitiga', '$|x+y| \\le |x| + |y|$', 'Selalu benar'],
          ],
        },
      ],
    },
    {
      id: 'evaluasi',
      kind: 'evaluasi',
      title: 'Evaluasi',
      body: `**Tiket keluar.** (1) Mengapa AM-GM tidak boleh dipakai pada bilangan negatif? (2) Bagaimana kamu memastikan suatu batas bawah benar-benar nilai minimum? Setelah menjawab, lanjut ke [Latihan & Asesmen](/latihan) topik **Ketaksamaan** untuk latihan tambahan.`,
    },
    {
      id: 'tantangan',
      kind: 'tantangan',
      title: 'Tantangan',
      body: `Diketahui bilangan real positif $a$, $b$, dan $c$ dengan $a + b + c = 3$.

Buktikan bahwa

$$a^2 + b^2 + c^2 \\ge 3,$$

dan tentukan kapan kesamaan tercapai.`,
      blocks: [
        {
          kind: 'callout',
          variant: 'tip',
          title: 'Petunjuk',
          text:
            'Pandang $(a,b,c)$ dan $(1,1,1)$ sebagai dua vektor, lalu terapkan Cauchy-Schwarz pada hasil kali titiknya.',
        },
        {
          kind: 'step-reveal',
          intro: 'Bukti dengan Cauchy-Schwarz.',
          steps: [
            {
              title: 'Terapkan Cauchy-Schwarz',
              text: '$(a^2 + b^2 + c^2)(1^2 + 1^2 + 1^2) \\ge (a \\cdot 1 + b \\cdot 1 + c \\cdot 1)^2$.',
            },
            {
              title: 'Substitusi syarat',
              text: 'Ruas kanan menjadi $(a+b+c)^2 = 3^2 = 9$, sedangkan $1^2+1^2+1^2 = 3$.',
            },
            {
              title: 'Sederhanakan',
              text: '$3(a^2 + b^2 + c^2) \\ge 9$, sehingga $a^2 + b^2 + c^2 \\ge 3$.',
            },
            {
              title: 'Periksa kesamaan',
              text: 'Kesamaan Cauchy-Schwarz terjadi saat $(a,b,c)$ sebanding dengan $(1,1,1)$, yaitu $a = b = c$. Karena $a+b+c=3$, maka $a = b = c = 1$.',
            },
          ],
        },
        {
          kind: 'details',
          summary: 'Bukti alternatif dengan kuadrat sempurna',
          text:
            'Perhatikan bahwa $(a-1)^2 + (b-1)^2 + (c-1)^2 \\ge 0$. Jabarkan: $a^2 + b^2 + c^2 - 2(a+b+c) + 3 \\ge 0$. Karena $a+b+c=3$, diperoleh $a^2 + b^2 + c^2 - 6 + 3 \\ge 0$, yaitu $a^2 + b^2 + c^2 \\ge 3$. Kesamaan saat $a = b = c = 1$, sama seperti cara sebelumnya.',
        },
        {
          kind: 'spot-mistake',
          intro:
            'Seorang siswa mencoba membuktikan $a^2 + b^2 + c^2 \\ge 3$ dengan AM-GM. Klik langkah yang keliru.',
          steps: [
            'Dengan AM-GM pada $a^2, b^2, c^2$: $a^2 + b^2 + c^2 \\ge 3\\sqrt[3]{a^2 b^2 c^2} = 3abc$.',
            'Karena $a+b+c=3$, AM-GM pada $a,b,c$ memberi $abc \\le 1$.',
            'Dari $a^2+b^2+c^2 \\ge 3abc$ dan $3abc \\le 3$, disimpulkan $a^2+b^2+c^2 \\ge 3$.',
            'Jadi terbukti untuk semua $a,b,c > 0$.',
          ],
          wrongIndex: 2,
          explanation:
            'Langkah 3 keliru karena menyambung dua ketaksamaan dengan arah yang tidak mendukung. Fakta $3abc \\le 3$ tidak dapat digabung dengan $a^2+b^2+c^2 \\ge 3abc$ untuk memperoleh batas bawah $3$; justru memakai $abc \\ge 1$ ke arah yang salah. Bukti yang benar memakai Cauchy-Schwarz atau jumlah kuadrat di atas.',
        },
      ],
    },
  ],
};
