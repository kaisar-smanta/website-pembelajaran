import type { Topic } from '@/types/content';

export const kombinatorikaLanjut: Topic = {
  id: 'kombinatorika-lanjut',
  slug: 'kombinatorika-lanjut',
  title: 'Kombinatorika Lanjut',
  subtitle: 'Mencacah dengan inklusi-eksklusi, pigeonhole, dan koefisien binomial',
  grade: 'XII',
  phase: 'F',
  element: 'data-peluang',
  subject: 'matematika',
  status: 'lengkap',
  supplementary: true,
  cpNote:
    'Pengayaan: memperdalam aturan pencacahan dari CP data-peluang menuju teknik olimpiade seperti inklusi-eksklusi dan prinsip sarang merpati, serta menautkannya dengan teorema binomial.',
  estimatedMinutes: 110,
  summary:
    'Menguasai aturan pencacahan, inklusi-eksklusi, prinsip sarang merpati (pigeonhole), dan koefisien binomial untuk menyelesaikan masalah kombinatorika yang menantang.',
  description:
    'Kombinatorika lanjut membekali kita dengan teknik mencacah yang lebih kuat daripada sekadar perkalian dan kombinasi dasar. Inklusi-eksklusi membantu menghitung himpunan gabungan tanpa cacah ganda, prinsip sarang merpati menjamin keberadaan suatu pola tanpa menghitung semua kemungkinan, dan teorema binomial menghubungkan koefisien penjabaran dengan bilangan kombinasi. Ketiganya adalah pintu masuk menuju masalah olimpiade dan peluang lanjut.',
  keywords: [
    'kombinatorika',
    'inklusi-eksklusi',
    'pigeonhole',
    'sarang merpati',
    'koefisien binomial',
    'teorema binomial',
    'aturan pencacahan',
  ],
  prerequisites: ['permutasi-kombinasi'],
  relatedTopics: ['permutasi-kombinasi', 'peluang'],
  prerequisiteKnowledge: [
    'Aturan perkalian dan penjumlahan dalam mencacah',
    'Permutasi, kombinasi, dan notasi faktorial',
    'Himpunan, irisan, dan gabungan',
  ],
  objectives: [
    { text: 'Menggunakan aturan penjumlahan dan perkalian untuk mencacah secara sistematis.' },
    { text: 'Menerapkan prinsip inklusi-eksklusi untuk dua atau tiga himpunan.' },
    { text: 'Menggunakan prinsip sarang merpati untuk membuktikan keberadaan suatu objek.' },
    { text: 'Menentukan koefisien suku pada penjabaran binomial.' },
    { text: 'Menjelaskan hubungan kombinasi dengan segitiga Pascal.' },
  ],
  applications: ['komb-sandi-dan-pin'],
  sections: [
    {
      id: 'tujuan',
      kind: 'tujuan',
      title: 'Tujuan Pembelajaran',
      body:
        'Setelah mempelajari topik ini, peserta didik dapat mencacah dengan aturan penjumlahan dan perkalian, menerapkan inklusi-eksklusi dan prinsip sarang merpati, serta menentukan koefisien binomial melalui teorema binomial.',
    },
    {
      id: 'pemantik',
      kind: 'pemantik',
      title: 'Pertanyaan Pemantik',
      body: `Dalam sebuah ruangan terdapat $13$ orang. Kepala mereka diwarnai menurut salah satu dari $12$ kemungkinan warna.

- Mungkinkah semua orang memiliki warna berbeda?
- Jika ada $13$ orang dan hanya $12$ warna, apa yang pasti terjadi?
- Berapa paling sedikit siswa yang perlu hadir agar pasti ada dua yang lahir pada bulan yang sama?

Tanpa mencacah satu per satu, kita dapat menjamin adanya dua objek yang "bertabrakan". Inilah inti prinsip sarang merpati.`,
      blocks: [
        {
          kind: 'prediction',
          prompt:
            'Jika $10$ ekor merpati masuk ke dalam $3$ sarang, berapa paling sedikit banyak merpati yang **pasti** menempati sarang yang sama?',
          options: [
            'Paling sedikit $1$',
            'Paling sedikit $2$',
            'Paling sedikit $4$',
            'Tidak dapat dijamin',
          ],
          reveal:
            'Jika setiap sarang berisi paling banyak $3$ merpati, totalnya hanya $9 < 10$. Jadi pasti ada sarang dengan paling sedikit $4$ merpati. Secara umum, $n$ objek ke dalam $k$ kotak menjamin satu kotak berisi paling sedikit $\\left\\lceil \\dfrac{n}{k} \\right\\rceil$ objek.',
          saveLabel: 'Simpan dugaan',
        },
      ],
    },
    {
      id: 'prasyarat',
      kind: 'prasyarat',
      title: 'Prasyarat',
      body: `Teknik pada topik ini memperluas pencacahan dasar, jadi pastikan dahulu bekal berikut sudah kuat:
- aturan perkalian dan penjumlahan dalam mencacah;
- kombinasi $\\binom{n}{k} = \\dfrac{n!}{k!\\,(n-k)!}$ dan faktorial;
- operasi gabungan dan irisan himpunan, termasuk $|A|$ dan $|A \\cap B|$.`,
    },
    {
      id: 'konteks',
      kind: 'konteks',
      title: 'Situasi dan Konteks',
      body: `Kombinatorika menjawab pertanyaan "ada berapa banyak cara" dan "apakah pasti ada". Banyaknya sandi yang mungkin, susunan jadwal, penomoran kursi, sampai peluang menang undian, semuanya berakar pada pencacahan.

Selain menghitung, kombinatorika juga membuktikan keberadaan tanpa mencari contohnya. Misalnya, dari data survei kita dapat menjamin bahwa ada dua responden dengan pola jawaban yang sama, semata-mata karena jumlah responden melebihi jumlah pola yang mungkin.`,
    },
    {
      id: 'konsep',
      kind: 'konsep',
      title: 'Konsep Inti: Aturan Dasar Pencacahan',
      questionIds: ['komb-01'],
      body: `**Aturan penjumlahan.** Jika suatu pekerjaan dapat diselesaikan dengan $m$ cara **atau** $n$ cara yang saling lepas, maka totalnya $m + n$ cara. Gunakan ketika memilih salah satu dari beberapa kelompok yang tidak beririsan.

**Aturan perkalian.** Jika suatu pekerjaan terdiri atas tahap-tahap yang berurutan, dengan $m$ cara pada tahap pertama dan $n$ cara pada tahap kedua, maka totalnya $m \\cdot n$ cara. Gunakan ketika tahap-tahapnya saling bergantung.

**Kombinasi.** Banyak cara memilih $k$ objek dari $n$ objek tanpa memperhatikan urutan adalah

$$\\binom{n}{k} = \\frac{n!}{k!\\,(n-k)!}.$$

Aturan penjumlahan dipakai untuk pilihan "atau", sedangkan aturan perkalian untuk rangkaian "dan". Memilih kata hubung yang tepat adalah kunci mencacah dengan benar.`,
      blocks: [
        {
          kind: 'callout',
          variant: 'concept',
          title: 'Kunci: jumlahkan, kalikan, koreksi irisan',
          text:
            'Kata "atau" menandakan penjumlahan, kata "dan" menandakan perkalian. Namun jika dua himpunan beririsan, penjumlahan langsung akan menghitung irisan dua kali. Di sinilah inklusi-eksklusi berperan.',
        },
        {
          kind: 'match',
          intro: 'Pasangkan istilah kombinatorika dengan maknanya.',
          pairs: [
            { left: 'Aturan penjumlahan', right: 'Digunakan saat memilih "atau" di antara kelompok saling lepas' },
            { left: 'Aturan perkalian', right: 'Digunakan saat tahap-tahap berurutan ("dan")' },
            { left: 'Inklusi-eksklusi', right: 'Mengoreksi cacah ganda pada gabungan himpunan' },
            { left: 'Pigeonhole', right: 'Menjamin adanya kotak berisi objek lebih dari biasanya' },
            { left: 'Koefisien binomial', right: 'Bilangan $\\binom{n}{k}$ pada penjabaran $(x+y)^n$' },
          ],
        },
      ],
    },
    {
      id: 'representasi',
      kind: 'representasi',
      title: 'Representasi: Himpunan dan Segitiga Pascal',
      body:
        'Inklusi-eksklusi paling jelas dibaca melalui diagram himpunan, sedangkan koefisien binomial tersusun rapi pada segitiga Pascal.',
      blocks: [
        {
          kind: 'table',
          caption: 'Koefisien binomial pada segitiga Pascal',
          headers: ['$n$', 'Koefisien $(x+y)^n$', 'Jumlah'],
          rows: [
            ['$0$', '$1$', '$1$'],
            ['$1$', '$1 \\quad 1$', '$2$'],
            ['$2$', '$1 \\quad 2 \\quad 1$', '$4$'],
            ['$3$', '$1 \\quad 3 \\quad 3 \\quad 1$', '$8$'],
            ['$4$', '$1 \\quad 4 \\quad 6 \\quad 4 \\quad 1$', '$16$'],
          ],
        },
        {
          kind: 'tabs',
          items: [
            {
              label: 'Himpunan',
              body:
                'Diagram dua lingkaran $A$ dan $B$ yang berpotongan: agar luas gabungan tidak dihitung dua kali, kurangi bagian irisannya.',
            },
            {
              label: 'Aljabar',
              body:
                '$|A \\cup B| = |A| + |B| - |A \\cap B|$, lalu untuk tiga himpunan tambahkan kembali irisan ketiganya.',
            },
            {
              label: 'Tabel',
              body:
                'Setiap baris segitiga Pascal memberi koefisien $\\binom{n}{k}$; entri berikutnya adalah jumlah dua entri di atasnya.',
            },
          ],
        },
        {
          kind: 'figure',
          alt: 'Diagram Venn dua himpunan A dan B yang berpotongan, dengan bagian irisan ditandai berisi tiga anggota.',
          caption:
            'Inklusi-eksklusi dua himpunan: $|A \\cup B| = |A| + |B| - |A \\cap B| = 10 + 8 - 3 = 15$. Anggota pada irisan $A \\cap B$ tidak boleh dihitung dua kali.',
          svg: '<svg viewBox="0 0 320 220" aria-hidden="true" role="presentation"><rect x="15" y="20" width="290" height="170" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="125" cy="105" r="62" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="195" cy="105" r="62" fill="none" stroke="currentColor" stroke-width="2"/><text x="70" y="55" font-size="13" fill="currentColor">A</text><text x="240" y="55" font-size="13" fill="currentColor">B</text><text x="95" y="110" font-size="13" text-anchor="middle" fill="currentColor">7</text><text x="160" y="110" font-size="13" text-anchor="middle" fill="currentColor">3</text><text x="225" y="110" font-size="13" text-anchor="middle" fill="currentColor">5</text><text x="30" y="40" font-size="11" fill="currentColor">S</text></svg>',
        },
        {
          kind: 'figure',
          alt: 'Diagram pohon keputusan: satu titik awal bercabang menjadi dua pilihan, lalu setiap pilihan bercabang lagi menjadi tiga, sehingga seluruhnya ada enam hasil.',
          caption:
            'Aturan perkalian lewat diagram pohon: $2$ pilihan pada tahap pertama dan $3$ pilihan pada tahap kedua memberi $2 \\times 3 = 6$ hasil. Banyaknya daun menyatakan banyak cara.',
          svg: '<svg viewBox="0 0 320 240" aria-hidden="true" role="presentation"><line x1="30" y1="120" x2="118" y2="62" stroke="currentColor" stroke-width="1.5"/><line x1="30" y1="120" x2="118" y2="178" stroke="currentColor" stroke-width="1.5"/><line x1="126" y1="58" x2="238" y2="24" stroke="currentColor" stroke-width="1.5"/><line x1="126" y1="60" x2="238" y2="60" stroke="currentColor" stroke-width="1.5"/><line x1="126" y1="62" x2="238" y2="96" stroke="currentColor" stroke-width="1.5"/><line x1="126" y1="178" x2="238" y2="144" stroke="currentColor" stroke-width="1.5"/><line x1="126" y1="180" x2="238" y2="180" stroke="currentColor" stroke-width="1.5"/><line x1="126" y1="182" x2="238" y2="216" stroke="currentColor" stroke-width="1.5"/><circle cx="26" cy="120" r="3.5" fill="currentColor"/><circle cx="122" cy="60" r="3.5" fill="currentColor"/><circle cx="122" cy="180" r="3.5" fill="currentColor"/><circle cx="242" cy="24" r="3" fill="currentColor"/><circle cx="242" cy="60" r="3" fill="currentColor"/><circle cx="242" cy="96" r="3" fill="currentColor"/><circle cx="242" cy="144" r="3" fill="currentColor"/><circle cx="242" cy="180" r="3" fill="currentColor"/><circle cx="242" cy="216" r="3" fill="currentColor"/><text x="12" y="140" font-size="11" fill="currentColor">awal</text><text x="60" y="50" font-size="11" fill="currentColor">pilihan 1</text><text x="60" y="200" font-size="11" fill="currentColor">pilihan 2</text><text x="250" y="27" font-size="11" fill="currentColor">hasil</text><text x="250" y="63" font-size="11" fill="currentColor">hasil</text><text x="250" y="99" font-size="11" fill="currentColor">hasil</text><text x="250" y="147" font-size="11" fill="currentColor">hasil</text><text x="250" y="183" font-size="11" fill="currentColor">hasil</text><text x="250" y="219" font-size="11" fill="currentColor">hasil</text></svg>',
        },
      ],
    },
    {
      id: 'eksplorasi',
      kind: 'eksplorasi',
      title: 'Eksplorasi',
      body:
        'Jalankan simulasi peluang ini dan perhatikan bagaimana hasil pencacahan ruang sampel menentukan peluang. Semakin banyak percobaan, semakin dekat frekuensi relatif dengan nilai teoretis hasil pencacahan.',
      blocks: [
        {
          kind: 'exploration',
          explorationId: 'kombinatorika-hitung',
        },
      ],
    },
    {
      id: 'eksplorasi-pohon-aturan',
      kind: 'eksplorasi',
      title: 'Eksplorasi Pohon dan Aturan Perkalian',
      body:
        'Susun aturan perkalian dari sebuah pohon keputusan: banyak daun sama dengan hasil kali banyak pilihan tiap tahap. Ubah banyak tahap dan banyak pilihan, lalu bandingkan dengan rumus pencacahan yang sesuai, termasuk saat objek boleh berulang.',
      blocks: [
        {
          kind: 'exploration',
          explorationId: 'kombinatorika-pohon-aturan',
        },
      ],
    },
    {
      id: 'generalisasi',
      kind: 'generalisasi',
      title: 'Pola Umum: Inklusi-Eksklusi, Pigeonhole, dan Binomial',
      body: `**Inklusi-eksklusi.** Untuk dua himpunan:

$$|A \\cup B| = |A| + |B| - |A \\cap B|.$$

Untuk tiga himpunan:

$$|A \\cup B \\cup C| = |A| + |B| + |C| - |A \\cap B| - |A \\cap C| - |B \\cap C| + |A \\cap B \\cap C|.$$

Pola umumnya: tambahkan himpunan tunggal, kurangi irisan berpasangan, tambahkan irisan bertiga, dan seterusnya secara bergantian.

**Prinsip sarang merpati.** Jika $n$ objek ditempatkan ke dalam $k$ kotak dan $n > k$, maka paling sedikit satu kotak memuat lebih dari satu objek. Versi kuatnya: satu kotak memuat paling sedikit $\\left\\lceil \\dfrac{n}{k} \\right\\rceil$ objek.

**Teorema binomial.** Untuk bilangan bulat $n \\ge 0$:

$$(x+y)^n = \\sum_{k=0}^{n} \\binom{n}{k} x^{n-k} y^k.$$

Koefisien $x^{n-k}y^k$ adalah $\\binom{n}{k}$. Dengan penggantian variabel, kita dapat menentukan koefisien suku tertentu tanpa menjabarkan seluruhnya.`,
      blocks: [
        {
          kind: 'callout',
          variant: 'warning',
          title: 'Hati-hati',
          text:
            'Inklusi-eksklusi menuntut tanda yang bergantian: tambah, kurang, tambah. Lupa mengurangkan irisan adalah kesalahan yang paling sering terjadi.',
        },
        {
          kind: 'figure',
          alt: 'Diagram Venn tiga himpunan A, B, dan C yang saling berpotongan, menandai irisan berpasangan dan irisan ketiganya.',
          caption: 'Inklusi-eksklusi tiga himpunan: tambahkan himpunan tunggal, kurangi irisan berpasangan, lalu tambahkan kembali irisan ketiganya.',
          svg: '<svg viewBox="0 0 320 240" aria-hidden="true" role="presentation"><circle cx="120" cy="92" r="62" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="200" cy="92" r="62" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="160" cy="150" r="62" fill="none" stroke="currentColor" stroke-width="2"/><text x="62" y="62" font-size="13" fill="currentColor">A</text><text x="252" y="62" font-size="13" fill="currentColor">B</text><text x="152" y="226" font-size="13" fill="currentColor">C</text><text x="160" y="62" font-size="9" text-anchor="middle" fill="currentColor">A∩B</text><text x="160" y="124" font-size="9" text-anchor="middle" fill="currentColor">A∩B∩C</text><text x="108" y="156" font-size="9" text-anchor="middle" fill="currentColor">A∩C</text><text x="212" y="156" font-size="9" text-anchor="middle" fill="currentColor">B∩C</text></svg>',
        },
      ],
    },
    {
      id: 'rumus',
      kind: 'rumus',
      title: 'Kumpulan Rumus Pencacahan',
      body: `Aturan dan rumus yang dipakai berulang:

$$|A \\cup B| = |A| + |B| - |A \\cap B|,$$

$$|A \\cup B \\cup C| = |A| + |B| + |C| - |A \\cap B| - |A \\cap C| - |B \\cap C| + |A \\cap B \\cap C|,$$

$$(x+y)^n = \\sum_{k=0}^{n} \\binom{n}{k} x^{n-k} y^k,$$

$$\\binom{n}{k} = \\frac{n!}{k!\\,(n-k)!}.$$

Untuk pigeonhole, jika $n$ objek diletakkan pada $k$ kotak, paling sedikit satu kotak memuat $\\left\\lceil \\dfrac{n}{k} \\right\\rceil$ objek.`,
    },
    {
      id: 'contoh',
      kind: 'contoh',
      title: 'Contoh Terbimbing',
      blocks: [
        {
          kind: 'step-reveal',
          intro: 'Empat contoh berikut dikerjakan langkah demi langkah, dari aturan perkalian sampai koefisien binomial.',
          steps: [
            {
              title: 'Contoh 1: inklusi-eksklusi tiga himpunan',
              text: `Dari $100$ siswa, $60$ menyukai matematika, $50$ fisika, dan $40$ kimia. Diketahui $30$ menyukai matematika dan fisika, $20$ matematika dan kimia, $15$ fisika dan kimia, serta $10$ menyukai ketiganya. Berapa siswa yang menyukai paling sedikit satu pelajaran?

*Penyelesaian.* Tulis $M$, $F$, dan $K$ untuk ketiga himpunan itu. Karena irisan berpasangan dan irisan bertiga diketahui, pakai inklusi-eksklusi tiga himpunan:
$$|M \\cup F \\cup K| = |M| + |F| + |K| - |M \\cap F| - |M \\cap K| - |F \\cap K| + |M \\cap F \\cap K|.$$
Substitusi angkanya:
$$|M \\cup F \\cup K| = 60 + 50 + 40 - 30 - 20 - 15 + 10 = 150 - 65 + 10 = 95.$$
*Verifikasi.* Hasil $95$ tidak melebihi $100$ siswa, dan sisanya $100 - 95 = 5$ siswa tidak menyukai satu pun, jadi jawabannya wajar.`,
            },
            {
              title: 'Contoh 2: inklusi-eksklusi',
              text: `Berapa banyak bilangan bulat dari $1$ sampai $100$ yang habis dibagi $3$ atau $5$?

*Penyelesaian.* Kelipatan $3$: $\\left\\lfloor \\dfrac{100}{3} \\right\\rfloor = 33$. Kelipatan $5$: $\\left\\lfloor \\dfrac{100}{5} \\right\\rfloor = 20$. Kelipatan $15$ (irisan): $\\left\\lfloor \\dfrac{100}{15} \\right\\rfloor = 6$. Maka jawabannya
$$33 + 20 - 6 = 47.$$`,
            },
            {
              title: 'Contoh 3: prinsip sarang merpati',
              text: `Jika $10$ merpati masuk ke $3$ sarang, berapa paling sedikit merpati pada sarang tersibuk?

*Penyelesaian.* Menurut prinsip sarang merpati, satu sarang pasti memuat paling sedikit
$$\\left\\lceil \\dfrac{10}{3} \\right\\rceil = 4$$
merpati. Bila setiap sarang berisi paling banyak $3$, totalnya hanya $9 < 10$.`,
            },
            {
              title: 'Contoh 4: koefisien binomial',
              text: `Tentukan koefisien $x^3$ pada penjabaran $(1+x)^6$.

*Penyelesaian.* Menurut teorema binomial, suku umum penjabaran $(1+x)^6$ adalah $\\binom{6}{k}x^{k}$. Agar pangkatnya $x^3$, pilih $k = 3$, sehingga koefisiennya
$$\\binom{6}{3} = \\frac{6!}{3!\\,3!} = 20.$$
*Verifikasi.* Baris ke-$6$ segitiga Pascal adalah $1, 6, 15, 20, 15, 6, 1$; suku keempat bernilai $20$, cocok dengan hasil di atas.`,
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
      body: `Inklusi-eksklusi, prinsip sarang merpati, dan teorema binomial menolong saat angkanya sudah besar. Koefisien $x^5$ pada penjabaran $(1+x)^{10}$ langsung dibaca dari teorema binomial sebagai $\\binom{10}{5} = 252$ tanpa perlu menjabarkan seluruh suku. Prinsip sarang merpati menjamin bahwa di antara $13$ orang pasti ada dua yang lahir pada bulan yang sama, sebab $\\left\\lceil \\dfrac{13}{12} \\right\\rceil = 2$. Inklusi-eksklusi menghitung banyak bilangan $1$ sampai $1000$ yang habis dibagi $3$ atau $5$: $333 + 200 - 66 = 467$ bilangan.

Pola berpikirnya tetap: (1) tentukan objek dan "kotak"-nya, (2) pilih antara mencacah langsung, mengoreksi dengan inklusi-eksklusi, atau cukup menjamin keberadaan dengan pigeonhole, lalu (3) tafsirkan hasilnya. Teknik yang sama dipakai menghitung cakupan produk, penomoran yang bebas duplikat, dan peluang keberhasilan berulang.`,
    },
    {
      id: 'kesalahan-umum',
      kind: 'kesalahan-umum',
      title: 'Kesalahan Umum',
      body: `**1. Lupa mengurangkan irisan.** Menghitung $|A \\cup B| = |A| + |B|$ padahal $A$ dan $B$ beririsan menyebabkan cacah ganda.

**2. Tertukar antara "atau" dan "dan".** "Atau" untuk pilihan saling lepas memakai penjumlahan; "dan" untuk tahap berurutan memakai perkalian. Memilih aturan yang keliru langsung memberi jawaban salah.

**3. Salah menutup pigeonhole.** Kesimpulan pigeonhole hanya menyatakan **ada** objek yang bertabrakan, bukan menunjukkan objek mana.

**4. Salah menetapkan $k$ pada koefisien binomial.** Pada $(1+x)^n$, koefisien $x^k$ adalah $\\binom{n}{k}$, bukan $\\binom{k}{n}$.

**5. Mengabaikan syarat saling lepas.** Aturan penjumlahan $m + n$ hanya sah bila kedua kelompok tidak beririsan.`,
      blocks: [
        {
          kind: 'spot-mistake',
          intro:
            'Seorang siswa menghitung banyak bilangan $1$ sampai $30$ yang habis dibagi $2$ atau $3$. Klik langkah yang keliru.',
          steps: [
            'Kelipatan $2$: $\\left\\lfloor \\dfrac{30}{2} \\right\\rfloor = 15$ bilangan.',
            'Kelipatan $3$: $\\left\\lfloor \\dfrac{30}{3} \\right\\rfloor = 10$ bilangan.',
            'Karena diminta "atau", jumlahkan langsung: $15 + 10 = 25$ bilangan.',
            'Jadi ada $25$ bilangan yang memenuhi.',
          ],
          wrongIndex: 2,
          explanation:
            'Penjumlahan langsung menghitung bilangan kelipatan $6$ dua kali. Kelipatan $6$ ada $\\left\\lfloor \\dfrac{30}{6} \\right\\rfloor = 5$, sehingga jawaban benar $15 + 10 - 5 = 20$.',
        },
      ],
    },
    {
      id: 'sejarah',
      kind: 'sejarah',
      title: 'Jejak Sejarah',
      body: `Prinsip sarang merpati sering dinamai menurut Peter Gustav Lejeune Dirichlet yang merumuskannya pada abad ke-19, meski gagasan serupa sudah muncul lebih awal. Prinsip inklusi-eksklusi dipakai Abraham de Moivre pada awal abad ke-18 untuk menghitung masalah *derangement*, lalu dikembangkan lebih lanjut. Teorema binomial telah dikenal di Tiongkok dan Persia jauh sebelum Blaise Pascal, sedangkan Isaac Newton pada 1665 memperluasnya ke pangkat rasional. Segitiga koefisien binomial yang kita pakai menghubungkan ketiga gagasan ini dengan segitiga Pascal.`,
    },
    {
      id: 'refleksi',
      kind: 'refleksi',
      title: 'Refleksi',
      body: 'Teknik mencacah yang lebih halus, seperti inklusi-eksklusi dan prinsip sarang merpati, mengubah soal yang tampak berat menjadi argumen singkat. Pikirkan bagaimana caramu memilih antara mencacah langsung, mengoreksi cacah ganda, atau cukup menjamin keberadaan suatu objek.',
      blocks: [
        {
          kind: 'reflection',
          prompts: [
            'Kapan kamu memilih inklusi-eksklusi dibandingkan mencacah langsung?',
            'Mengapa prinsip sarang merpati dapat membuktikan keberadaan tanpa menunjukkan contohnya?',
            'Bagaimana judul segitiga Pascal dan koefisien binomial saling menjelaskan?',
          ],
          confidenceLabel: 'Seberapa yakin kamu membedakan soal pencacahan dan soal jaminan (pigeonhole)?',
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
          headers: ['Teknik', 'Kapan dipakai', 'Bentuk'],
          rows: [
            ['Aturan penjumlahan', 'Memilih "atau" antar kelompok saling lepas', '$m + n$'],
            ['Aturan perkalian', 'Tahap-tahap berurutan "dan"', '$m \\cdot n$'],
            ['Inklusi-eksklusi', 'Gabungan himpunan beririsan', '$|A|+|B|-|A \\cap B|$'],
            ['Pigeonhole', 'Menjamin adanya tabrakan', '$\\left\\lceil n/k \\right\\rceil$'],
            ['Koefisien binomial', 'Suku pada $(x+y)^n$', '$\\binom{n}{k}$'],
          ],
        },
      ],
    },
    {
      id: 'evaluasi',
      kind: 'evaluasi',
      title: 'Evaluasi',
      questionIds: ['komb-10'],
      body: `**Tiket keluar.** (1) Mengapa inklusi-eksklusi perlu menambahkan kembali irisan ketiga? (2) Apa bedanya soal yang meminta banyak cara dengan soal yang meminta jaminan keberadaan? Setelah menjawab, lanjut ke [Latihan & Asesmen](/latihan) topik **Kombinatorika Lanjut** untuk latihan tambahan.`,
    },
    {
      id: 'tantangan',
      kind: 'tantangan',
      title: 'Tantangan',
      body: `Buktikan bahwa di antara sebarang $5$ bilangan bulat yang dipilih dari himpunan $\\{1, 2, \\ldots, 8\\}$, selalu terdapat dua bilangan yang jumlahnya $9$.`,
      blocks: [
        {
          kind: 'callout',
          variant: 'tip',
          title: 'Petunjuk',
          text:
            'Bagi himpunan menjadi pasangan-pasangan yang jumlahnya $9$, lalu hitung ada berapa pasangan dan berapa bilangan yang dipilih.',
        },
        {
          kind: 'step-reveal',
          intro: 'Bukti dengan prinsip sarang merpati.',
          steps: [
            {
              title: 'Susun pasangan berjumlah 9',
              text:
                '$\\{1,8\\}$, $\\{2,7\\}$, $\\{3,6\\}$, dan $\\{4,5\\}$. Ada $4$ pasangan, dan setiap dua anggota dalam satu pasangan berjumlah $9$.',
            },
            {
              title: 'Pandang pasangan sebagai kotak',
              text:
                'Setiap pasangan berperan sebagai satu "sarang". Jadi tersedia $4$ sarang.',
            },
            {
              title: 'Terapkan pigeonhole',
              text:
                'Kita memilih $5$ bilangan (merpati) ke dalam $4$ pasangan (sarang). Karena $5 > 4$, paling sedikit dua bilangan berada pada pasangan yang sama.',
            },
            {
              title: 'Simpulkan',
              text:
                'Dua bilangan pada pasangan yang sama pasti berjumlah $9$. Jadi selalu ada dua bilangan yang jumlahnya $9$. Terbukti.',
            },
          ],
        },
        {
          kind: 'details',
          summary: 'Generalisasi',
          text:
            'Untuk bilangan $\\{1, 2, \\ldots, 2n\\}$, himpunan dapat dipasangkan menjadi $\\{1,2n\\}, \\{2,2n-1\\}, \\ldots, \\{n, n+1\\}$, yaitu $n$ pasangan yang masing-masing berjumlah $2n+1$. Maka setiap pemilihan $n+1$ bilangan pasti memuat dua bilangan yang jumlahnya $2n+1$. Soal di atas adalah kasus khusus $n = 4$.',
        },
        {
          kind: 'spot-mistake',
          intro:
            'Seorang siswa mencoba memakai pigeonhole tetapi keliru menyimpulkan. Klik langkah yang salah.',
          steps: [
            'Himpunan $\\{1,2,\\ldots,8\\}$ dibagi menjadi pasangan berjumlah $9$: $\\{1,8\\}$, $\\{2,7\\}$, $\\{3,6\\}$, $\\{4,5\\}$.',
            'Terdapat $4$ pasangan, sedangkan kita memilih $5$ bilangan.',
            'Karena $5 > 4$, kelima bilangan pasti berasal dari pasangan yang berbeda-beda.',
            'Jadi tidak dijamin ada dua bilangan yang berjumlah $9$.',
          ],
          wrongIndex: 2,
          explanation:
            'Kesimpulan pada langkah 3 terbalik. Menempatkan $5$ objek ke dalam $4$ kotak justru menjamin ada kotak dengan paling sedikit $2$ objek, yaitu dua bilangan dari pasangan yang sama. Jadi ada dua yang berjumlah $9$.',
        },
      ],
    },
  ],
};
