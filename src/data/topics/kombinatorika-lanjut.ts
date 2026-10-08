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
  applications: ['survei-statistik'],
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
      body: `Sebelum melanjutkan, pastikan kamu menguasai:
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
      body: `**Aturan penjumlahan.** Jika suatu pekerjaan dapat diselesaikan dengan $m$ cara **atau** $n$ cara yang saling lepas, maka totalnya $m + n$ cara. Gunakan ketika memilih salah satu dari beberapa kelompok yang tidak beririsan.

**Aturan perkalian.** Jika suatu pekerjaan terdiri atas tahap-tahap yang berurutan, dengan $m$ cara pada tahap pertama dan $n$ cara pada tahap kedua, maka totalnya $m \\cdot n$ cara. Gunakan ketika tahap-tahapnya saling bergantung.

**Kombinasi.** Banyak cara memilih $k$ objek dari $n$ objek tanpa memperhatikan urutan adalah

$$\\binom{n}{k} = \\frac{n!}{k!\\,(n-k)!}.$$

Aturan penjumlahan dipakai untuk pilihan "atau", sedangkan aturan perkalian untuk rangkaian "dan". Memilih kata hubung yang tepat adalah kunci mencacah dengan benar.`,
      blocks: [
        {
          kind: 'callout',
          variant: 'concept',
          title: 'Inti yang perlu diingat',
          text:
            'Kata "atau" menandakan penjumlahan, kata "dan" menandakan perkalian. Namun jika dua himpunan beririsan, penjumlahan langsung akan menghitung irisan dua kali — di sinilah inklusi-eksklusi berperan.',
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
          explorationId: 'peluang-sim',
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
      body: `**Contoh 1 — Aturan perkalian.** Sebuah kantin menawarkan $3$ jenis makanan dan $4$ jenis minuman. Banyak paket makan–minum adalah $3 \\cdot 4 = 12$.

**Contoh 2 — Inklusi-eksklusi.** Berapa banyak bilangan bulat dari $1$ sampai $100$ yang habis dibagi $3$ atau $5$?

*Penyelesaian.* Kelipatan $3$: $\\left\\lfloor \\dfrac{100}{3} \\right\\rfloor = 33$. Kelipatan $5$: $\\left\\lfloor \\dfrac{100}{5} \\right\\rfloor = 20$. Kelipatan $15$ (irisan): $\\left\\lfloor \\dfrac{100}{15} \\right\\rfloor = 6$. Maka jawabannya $33 + 20 - 6 = 47$.

**Contoh 3 — Pigeonhole.** Jika $10$ merpati masuk ke $3$ sarang, satu sarang pasti memuat paling sedikit $\\left\\lceil \\dfrac{10}{3} \\right\\rceil = 4$ merpati.

**Contoh 4 — Koefisien binomial.** Koefisien $x^3$ pada $(1+x)^6$ adalah $\\binom{6}{3} = 20$.`,
      blocks: [
        {
          kind: 'step-reveal',
          intro: 'Mari hitung banyak bilangan $1$ sampai $100$ yang habis dibagi $3$ atau $5$.',
          steps: [
            {
              title: 'Cacah kelipatan 3',
              text: '$\\left\\lfloor \\dfrac{100}{3} \\right\\rfloor = 33$ bilangan.',
            },
            {
              title: 'Cacah kelipatan 5',
              text: '$\\left\\lfloor \\dfrac{100}{5} \\right\\rfloor = 20$ bilangan.',
            },
            {
              title: 'Kurangi irisan',
              text:
                'Bilangan yang terhitung dua kali adalah kelipatan $15$: $\\left\\lfloor \\dfrac{100}{15} \\right\\rfloor = 6$.',
            },
            {
              title: 'Gabungkan',
              text: '$33 + 20 - 6 = 47$ bilangan.',
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
      body: `Inklusi-eksklusi dipakai untuk menghitung banyak pelanggan yang membeli paling sedikit satu dari beberapa produk, atau banyak siswa yang mengikuti paling sedikit satu kegiatan. Prinsip sarang merpati dipakai untuk menjamin duplikasi pada penomoran, sandi, dan tabrakan data (hash collision). Teorema binomial muncul saat menaksir peluang keberhasilan berulang dan menyusun distribusi binomial.

Pola berpikirnya: (1) tentukan objek dan "kotak"-nya, (2) pilih antara mencacah langsung, mengoreksi dengan inklusi-eksklusi, atau cukup menjamin keberadaan dengan pigeonhole, lalu (3) tafsirkan hasilnya.`,
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
      id: 'refleksi',
      kind: 'refleksi',
      title: 'Refleksi',
      body: 'Renungkan bagaimana teknik mencacah yang lebih halus menyederhanakan masalah penghitungan.',
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
