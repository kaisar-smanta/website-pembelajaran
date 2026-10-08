import type { Topic } from '@/types/content';

export const teoriBilangan: Topic = {
  id: 'teori-bilangan',
  slug: 'teori-bilangan',
  title: 'Teori Bilangan',
  subtitle: 'Keterbagian, FPB, dan aritmetika modulo',
  grade: 'X',
  phase: 'E',
  element: 'bilangan',
  subject: 'matematika',
  status: 'lengkap',
  supplementary: true,
  cpNote:
    'Teori bilangan memperdalam elemen Bilangan Fase E (keterbagian, FPB/KPK, bilangan prima) di luar tuntutan CP resmi. Materi ini melatih penalaran dan menjadi bekal penting untuk olimpiade matematika serta dasar kriptografi.',
  estimatedMinutes: 80,
  summary:
    'Menelaah keterbagian, FPB dan KPK, algoritma Euklides, kongruensi modulo, bilangan prima, serta dasar aritmetika modular.',
  description:
    'Teori bilangan mempelajari sifat-sifat bilangan bulat, terutama keterbagian. Dari aturan sederhana "habis dibagi atau tidak", kita menurunkan alat yang kuat: algoritma Euklides untuk FPB, hubungan FPB dengan KPK, dan bahasa kongruensi modulo. Konsep modulo kini menopang teknologi sehari-hari, mulai dari pemeriksaan angka identitas hingga pengamanan pesan.',
  keywords: [
    'keterbagian',
    'FPB',
    'KPK',
    'algoritma Euklides',
    'kongruensi',
    'modulo',
    'bilangan prima',
    'aritmetika modular',
  ],
  prerequisites: ['eksponen'],
  relatedTopics: ['eksponen', 'barisan-deret'],
  prerequisiteKnowledge: [
    'Operasi pembagian bersisa pada bilangan bulat',
    'Faktorisasi prima dan sifat bentuk pangkat',
    'Operasi bilangan bulat positif dan negatif',
  ],
  objectives: [
    { text: 'Menjelaskan konsep keterbagian dan sifat-sifatnya.' },
    { text: 'Menentukan FPB dan KPK dengan faktorisasi prima dan algoritma Euklides.' },
    { text: 'Menggunakan hubungan $\\gcd(a,b)\\cdot\\operatorname{lcm}(a,b)=ab$ untuk menyelesaikan masalah.' },
    { text: 'Menuliskan dan memanfaatkan kongruensi modulo beserta sifat operasinya.' },
    { text: 'Menguji keprimaan dan menggunakan dasar aritmetika modular.' },
  ],
  applications: ['kata-sandi'],
  sections: [
    {
      id: 'tujuan',
      kind: 'tujuan',
      title: 'Tujuan Pembelajaran',
      body: 'Setelah mempelajari topik ini, peserta didik dapat menggunakan konsep keterbagian, menentukan FPB dan KPK melalui faktorisasi prima maupun algoritma Euklides, menyatakan hubungan antara FPB dan KPK, bekerja dengan kongruensi modulo, serta menguji keprimaan dan menyelesaikan masalah aritmetika modular sederhana.',
    },
    {
      id: 'pemantik',
      kind: 'pemantik',
      title: 'Pertanyaan Pemantik',
      body: `Ambil bilangan $1\\,234\\,567\\,890$. Kita bisa tahu bilangan itu habis dibagi $9$ tanpa membaginya panjang, cukup menjumlahkan angka-angkanya:

$$1+2+3+4+5+6+7+8+9+0=45.$$

Karena $45$ habis dibagi $9$, bilangan asalnya juga habis dibagi $9$. Mengapa trik ini bekerja? Apa hubungannya dengan sisa pembagian?`,
      blocks: [
        {
          kind: 'prediction',
          prompt: 'Apakah $1\\,234\\,567\\,890$ habis dibagi $9$? Pilih dugaanmu, lalu bandingkan dengan aturan jumlah angka.',
          options: [
            'Ya, habis dibagi $9$',
            'Tidak, bersisa $1$',
            'Tidak, bersisa $2$',
            'Tidak dapat ditentukan',
          ],
          reveal: 'Jumlah angkanya $45$, dan $45$ habis dibagi $9$, sehingga bilangan itu habis dibagi $9$. Alasannya: $10 \\equiv 1 \\pmod 9$, sehingga setiap pangkat $10$ juga kongruen dengan $1$, dan nilai bilangan kongruen dengan jumlah angka-angkanya.',
          saveLabel: 'Simpan dugaan',
        },
      ],
    },
    {
      id: 'prasyarat',
      kind: 'prasyarat',
      title: 'Prasyarat',
      body: `Sebelum melanjutkan, pastikan kamu menguasai:
- pembagian bersisa, yaitu menulis $a=qb+r$ dengan $0 \\le r < b$;
- faktorisasi prima, misalnya $60=2^2\\cdot 3\\cdot 5$;
- bentuk pangkat dan operasi bilangan bulat.`,
    },
    {
      id: 'konteks',
      kind: 'konteks',
      title: 'Situasi dan Konteks',
      body: `Teori bilangan lahir dari pertanyaan sederhana tentang pembagian. Meski tampak abstrak, gagasannya meresap ke banyak hal: pemeriksaan digit terakhir nomor kartu, penjadwalan yang berulang, sampai sandi pengaman pesan digital.

Kunci penghematan tenaganya adalah **modulo**, yaitu sisa pembagian. Dengan modulo, perkalian dan pangkat besar bisa diringkas menjadi sisa yang kecil. Topik ini membangun alat-alat itu secara bertahap.`,
    },
    {
      id: 'konsep',
      kind: 'konsep',
      title: 'Konsep Inti: Keterbagian',
      body: `Bilangan bulat $a$ dikatakan **membagi** $b$, ditulis $a \\mid b$, jika terdapat bilangan bulat $k$ sehingga

$$b = a \\cdot k.$$

Contoh: $3 \\mid 12$ karena $12 = 3 \\cdot 4$, sedangkan $5 \\nmid 12$ karena tidak ada bilangan bulat $k$ dengan $12 = 5k$.

Setiap pembagian bersisa menuliskan $b = qa + r$ dengan $0 \\le r < a$. Bilangan $q$ adalah hasil bagi dan $r$ adalah **sisa**. Jika $r=0$, maka $a \\mid b$.

Kongruensi $a \\equiv b \\pmod{m}$ berarti $m \\mid (a-b)$, yaitu $a$ dan $b$ memberi sisa yang sama saat dibagi $m$.`,
      blocks: [
        {
          kind: 'callout',
          variant: 'concept',
          title: 'Inti yang perlu diingat',
          text: 'Keterbagian, sisa pembagian, dan kongruensi adalah tiga cara memandang hal yang sama. Menulis $a \\equiv b \\pmod{m}$ sama artinya dengan "$a$ dan $b$ bersisa sama saat dibagi $m$".',
        },
        {
          kind: 'flip-cards',
          intro: 'Bolak-balik kartu untuk mengingat istilah dasar teori bilangan.',
          cards: [
            {
              front: '$a \\mid b$',
              back: 'Ada bilangan bulat $k$ dengan $b=ak$; artinya $a$ membagi habis $b$.',
            },
            {
              front: 'FPB',
              back: 'Faktor persekutuan terbesar, yaitu pembagi terbesar yang dimiliki dua bilangan.',
            },
            {
              front: 'KPK',
              back: 'Kelipatan persekutuan terkecil, yaitu kelipatan terkecil yang sama bagi dua bilangan.',
            },
            {
              front: '$a \\equiv b \\pmod{m}$',
              back: '$m$ membagi $a-b$; kedua bilangan bersisa sama saat dibagi $m$.',
            },
          ],
        },
      ],
    },
    {
      id: 'representasi',
      kind: 'representasi',
      title: 'Representasi',
      body: 'Bandingkan cara menghitung FPB dan KPK dari bilangan yang sama.',
      blocks: [
        {
          kind: 'table',
          caption: 'FPB dan KPK dari $36$ dan $60$',
          headers: ['Bilangan', 'Faktorisasi prima'],
          rows: [
            ['$36$', '$2^2 \\cdot 3^2$'],
            ['$60$', '$2^2 \\cdot 3 \\cdot 5$'],
            ['FPB', '$2^2 \\cdot 3 = 12$ (pangkat terkecil)'],
            ['KPK', '$2^2 \\cdot 3^2 \\cdot 5 = 180$ (pangkat terbesar)'],
          ],
        },
        {
          kind: 'tabs',
          items: [
            {
              label: 'Faktorisasi',
              body: 'FPB mengambil pangkat **terkecil** tiap prima, KPK mengambil pangkat **terbesar**.',
            },
            {
              label: 'Euklides',
              body: 'FPB dicari dengan pembagian berulang: $\\gcd(a,b)=\\gcd(b, a \\bmod b)$ sampai sisanya nol.',
            },
            {
              label: 'Modulo',
              body: 'Sisa pembagian ditulis $r = a \\bmod m$; kongruensi mencatat kesamaan sisa.',
            },
          ],
        },
      ],
    },
    {
      id: 'eksplorasi',
      kind: 'eksplorasi',
      title: 'Eksplorasi Pola Bilangan',
      body: 'Pola bilangan membantu melihat dugaan sebelum dibuktikan. Eksplorasi barisan memperlihatkan bagaimana bilangan tersusun beraturan, contohnya bilangan segitiga $1, 3, 6, 10, \\dots$ yang jumlahnya berhubungan dengan rumus jumlah bilangan asli.',
      blocks: [
        {
          kind: 'exploration',
          explorationId: 'barisan-pola',
        },
      ],
    },
    {
      id: 'generalisasi',
      kind: 'generalisasi',
      title: 'Menurunkan Algoritma Euklides',
      body: `Untuk mencari FPB, tulis $a = qb + r$ dengan $0 \\le r < b$. Klaimnya:

$$\\gcd(a,b) = \\gcd(b,r).$$

**Mengapa.** Setiap pembagi persekutuan $d$ dengan $d \\mid a$ dan $d \\mid b$ juga membagi $r = a - qb$. Sebaliknya, setiap pembagi persekutuan $d$ dengan $d \\mid b$ dan $d \\mid r$ juga membagi $a = qb + r$. Jadi himpunan pembagi persekutuan $a,b$ sama dengan himpunan pembagi persekutuan $b,r$; akibatnya FPB-nya sama.

Karena sisanya makin mengecil, proses berhenti saat sisanya $0$. Sisa terakhir yang **tak nol** adalah FPB-nya.

Dari hubungan ini juga diperoleh, untuk bilangan positif $a$ dan $b$,

$$\\gcd(a,b)\\cdot \\operatorname{lcm}(a,b) = a\\cdot b.$$`,
    },
    {
      id: 'rumus',
      kind: 'rumus',
      title: 'Rumus dan Sifat Penting',
      body: `**Algoritma Euklides:**
$$\\gcd(a,b)=\\gcd(b,\\, a \\bmod b),\\qquad 0 \\le a \\bmod b < b.$$

**Hubungan FPB dan KPK:**
$$\\gcd(a,b)\\cdot \\operatorname{lcm}(a,b)=a\\cdot b.$$

**Kongruensi.** Jika $a \\equiv b \\pmod{m}$ dan $c \\equiv d \\pmod{m}$, maka
$$a+c \\equiv b+d \\pmod{m}, \\qquad a\\cdot c \\equiv b\\cdot d \\pmod{m}.$$

Khususnya, dengan mengulang perkalian, berlaku
$$a \\equiv b \\pmod{m} \\implies a^{n} \\equiv b^{n} \\pmod{m}.$$`,
      blocks: [
        {
          kind: 'callout',
          variant: 'warning',
          title: 'Hati-hati',
          text: 'Kongruensi tidak boleh dibagi begitu saja. Dari $ac \\equiv bc \\pmod{m}$ kita **tidak** selalu boleh mencoret $c$ kecuali $\\gcd(c,m)=1$.',
        },
      ],
    },
    {
      id: 'contoh',
      kind: 'contoh',
      title: 'Contoh Terbimbing',
      body: `**Contoh 1 (Euklides).** Tentukan $\\gcd(1071, 462)$.

*Penyelesaian.*
$$1071 = 2\\cdot 462 + 147$$
$$462 = 3\\cdot 147 + 21$$
$$147 = 7\\cdot 21 + 0.$$
Sisa terakhir tak nol adalah $21$, jadi $\\gcd(1071,462)=21$.

**Contoh 2 (KPK).** Karena $\\gcd(18,24)=6$, maka
$$\\operatorname{lcm}(18,24)=\\frac{18\\cdot 24}{6}=72.$$

**Contoh 3 (modulo).** Tentukan $2^{10} \\bmod 7$. Karena $2^3=8\\equiv 1 \\pmod 7$, maka
$$2^{10}=2\\cdot(2^3)^3 \\equiv 2\\cdot 1^3 = 2 \\pmod 7.$$
Jadi sisanya $2$.`,
      blocks: [
        {
          kind: 'step-reveal',
          intro: 'Ikuti langkah algoritma Euklides untuk $\\gcd(1071,462)$.',
          steps: [
            {
              title: 'Langkah 1',
              text: 'Bagi $1071$ oleh $462$: $1071 = 2\\cdot 462 + 147$. Sisanya $147$.',
            },
            {
              title: 'Langkah 2',
              text: 'Ganti pasangan menjadi $(462, 147)$: $462 = 3\\cdot 147 + 21$. Sisanya $21$.',
            },
            {
              title: 'Langkah 3',
              text: 'Ganti menjadi $(147, 21)$: $147 = 7\\cdot 21 + 0$. Sisanya $0$, proses berhenti.',
            },
            {
              title: 'Langkah 4',
              text: 'Sisa terakhir yang tak nol adalah $21$, sehingga $\\gcd(1071,462)=21$.',
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
      body: `Aritmetika modulo hadir di banyak tempat. Angka terakhir nomor identitas dipakai sebagai digit pemeriksa dengan aturan modulo. Jam digital bekerja modulo $12$ atau modulo $24$. Penjadwalan dua kegiatan yang berulang memakai KPK.

Sistem sandi kunci publik (seperti RSA) bertumpu pada bilangan prima besar dan operasi modulo: pesan dikodekan dengan perpangkatan modulo suatu bilangan yang sangat besar, dan keamanannya bersandar pada sulitnya memfaktorkan bilangan besar. Dari pembagian bersisa, lahirlah pengaman komunikasi digital.`,
    },
    {
      id: 'kesalahan-umum',
      kind: 'kesalahan-umum',
      title: 'Kesalahan Umum',
      body: `**1. Mengira $1$ prima.** Bilangan prima harus lebih besar dari $1$. Bilangan $1$ hanya punya satu faktor positif, jadi bukan prima maupun komposit.

**2. Menguji keprimaan kurang teliti.** Cukup menguji pembagi prima sampai $\\sqrt{n}$. Menguji hanya sampai angka kecil dapat meloloskan bilangan komposit.

**3. Mencoret faktor pada kongruensi tanpa syarat.** Dari $ac \\equiv bc \\pmod m$ hanya boleh dibagi $c$ bila $\\gcd(c,m)=1$.

**4. Menukar FPB dan KPK.** FPB adalah pembagi terbesar (memakai pangkat **terkecil**), KPK adalah kelipatan terkecil (memakai pangkat **terbesar**).`,
      blocks: [
        {
          kind: 'spot-mistake',
          intro: 'Seorang siswa menyimpulkan "$91$ adalah bilangan prima karena tidak habis dibagi $2$, $3$, atau $5$." Satu langkah keliru. Klik langkah itu.',
          steps: [
            'Uji pembagi mulai dari yang terkecil.',
            '$91$ tidak habis dibagi $2$ (ganjil), tidak habis dibagi $3$ ($9+1=10$), dan tidak habis dibagi $5$.',
            'Karena tidak ada pembagi yang ditemukan, simpulkan $91$ prima.',
          ],
          wrongIndex: 2,
          explanation: 'Pengujian kurang lengkap. Karena $\\sqrt{91} \\approx 9{,}5$, kita harus menguji pembagi prima sampai $7$. Ternyata $91 = 7 \\times 13$, sehingga $91$ bukan bilangan prima.',
        },
      ],
    },
    {
      id: 'tantangan',
      kind: 'tantangan',
      title: 'Tantangan',
      body: `Euclid membuktikan bahwa tidak ada bilangan prima terbesar, dengan kata lain banyak bilangan prima **tak berhingga**.

Buktikan pernyataan tersebut. Andaikan hanya ada berhingga bilangan prima, lalu temukan kontradiksinya.`,
      blocks: [
        {
          kind: 'callout',
          variant: 'tip',
          title: 'Petunjuk',
          text: 'Andaikan prima-prima itu $p_1, p_2, \\dots, p_n$. Bentuk bilangan $N = p_1 p_2 \\cdots p_n + 1$, lalu selidiki sisa pembagian $N$ oleh setiap $p_i$. Gunakan fakta bahwa setiap bilangan bulat lebih besar dari $1$ memiliki faktor prima.',
        },
        {
          kind: 'step-reveal',
          intro: 'Ikuti langkah pembuktian tak berhingga bilangan prima ala Euclid.',
          steps: [
            {
              title: 'Pengandaian',
              text: 'Andaikan hanya ada berhingga bilangan prima, sebut saja $p_1, p_2, \\dots, p_n$ adalah daftar lengkapnya.',
            },
            {
              title: 'Membentuk bilangan baru',
              text: 'Bentuk $N = p_1 p_2 \\cdots p_n + 1$. Karena setiap $p_i \\ge 2$, jelas $N > 1$.',
            },
            {
              title: 'Selidiki sisa pembagian',
              text: 'Untuk setiap $i$, bilangan $N$ memberi sisa $1$ saat dibagi $p_i$, sebab bagian $p_1 \\cdots p_n$ habis dibagi $p_i$ dan tinggal sisa $1$. Jadi tidak ada $p_i$ yang membagi $N$.',
            },
            {
              title: 'Faktor prima $N$',
              text: 'Setiap bilangan bulat lebih besar dari $1$ memiliki paling sedikit satu faktor prima. Maka $N$ memiliki suatu faktor prima $q$.',
            },
            {
              title: 'Kontradiksi',
              text: 'Faktor prima $q$ ini berbeda dari semua $p_i$ (karena tidak ada $p_i$ yang membagi $N$). Jadi daftar $p_1, \\dots, p_n$ ternyata tidak lengkap — bertentangan dengan pengandaian.',
            },
            {
              title: 'Kesimpulan',
              text: 'Pengandaian salah, sehingga banyak bilangan prima tak berhingga. Terbukti.',
            },
          ],
        },
      ],
    },
    {
      id: 'refleksi',
      kind: 'refleksi',
      title: 'Refleksi',
      blocks: [
        {
          kind: 'reflection',
          prompts: [
            'Mengapa algoritma Euklides selalu berhenti? Apa jaminannya?',
            'Dalam situasi apa KPK lebih tepat dipakai daripada FPB, dan sebaliknya?',
            'Bagaimana kamu memeriksa kebenaran hasil FPB yang kamu hitung?',
          ],
          confidenceLabel: 'Seberapa yakin kamu dengan keterbagian dan modulo?',
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
          headers: ['Konsep', 'Makna / Rumus'],
          rows: [
            ['Keterbagian', '$a \\mid b \\iff b = ak$ untuk suatu bilangan bulat $k$'],
            ['Kongruensi', '$a \\equiv b \\pmod{m} \\iff m \\mid (a-b)$'],
            ['Euklides', '$\\gcd(a,b)=\\gcd(b, a \\bmod b)$'],
            ['FPB dan KPK', '$\\gcd(a,b)\\cdot \\operatorname{lcm}(a,b)=ab$'],
            ['Bilangan prima', 'Bilangan $>1$ dengan tepat dua faktor positif'],
          ],
        },
      ],
    },
    {
      id: 'evaluasi',
      kind: 'evaluasi',
      title: 'Evaluasi',
      body: '**Tiket keluar.** (1) Bagaimana algoritma Euklides menyederhanakan pencarian FPB? (2) Mengapa $a \\equiv b \\pmod m$ setara dengan "$a$ dan $b$ bersisa sama saat dibagi $m$"? Setelah menjawab, lanjut ke [Latihan & Asesmen](/latihan) topik **Teori Bilangan** untuk latihan tambahan.',
    },
  ],
};
