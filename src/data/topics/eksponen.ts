import type { Topic } from '@/types/content';

export const eksponen: Topic = {
  id: 'eksponen',
  slug: 'eksponen',
  title: 'Eksponen dan Bentuk Akar',
  subtitle: 'Dari perkalian berulang sampai pangkat pecahan',
  grade: 'X',
  phase: 'E',
  element: 'bilangan',
  featured: true,
  status: 'lengkap',
  estimatedMinutes: 90,
  summary:
    'Memahami eksponen sebagai perkalian berulang, sifat-sifatnya, pangkat negatif dan pecahan, serta bentuk akar.',
  description:
    'Eksponen adalah cara ringkas menuliskan perkalian berulang dan menjadi dasar bagi fungsi eksponensial, barisan geometri, pertumbuhan, hingga matematika keuangan. Pada topik ini kita membangun makna eksponen terlebih dahulu, kemudian menurunkan sifat-sifatnya, memperluas ke pangkat nol, negatif, dan pecahan, lalu menyederhanakan bentuk akar.',
  keywords: [
    'eksponen',
    'pangkat',
    'bentuk akar',
    'pangkat negatif',
    'pangkat pecahan',
    'sifat eksponen',
  ],
  prerequisites: [],
  relatedTopics: ['barisan-deret', 'fungsi-eksponensial', 'bunga-majemuk'],
  prerequisiteKnowledge: [
    'Operasi bilangan bulat dan pecahan',
    'Faktorisasi bilangan prima',
    'Konsep variabel dan bentuk aljabar sederhana',
  ],
  objectives: [
    { text: 'Menjelaskan makna eksponen sebagai perkalian berulang dan kaitannya dengan notasi.' },
    { text: 'Menggunakan sifat-sifat eksponen untuk menyederhanakan bentuk aljabar.' },
    { text: 'Menyatakan dan menghitung pangkat nol, pangkat negatif, dan pangkat pecahan.' },
    { text: 'Menyederhanakan bentuk akar dan merasionalkan penyebut.' },
    { text: 'Memodelkan situasi pertumbuhan sederhana menggunakan eksponen.' },
  ],
  explorations: ['eksponen-pertumbuhan'],
  applications: ['pertumbuhan-populasi', 'bunga-investasi'],
  sections: [
    {
      id: 'tujuan',
      kind: 'tujuan',
      title: 'Tujuan Pembelajaran',
      body: `Setelah mempelajari topik ini, peserta didik dapat memahami eksponen sebagai perkalian berulang, menerapkan sifat-sifat eksponen, bekerja dengan pangkat negatif dan pecahan, menyederhanakan bentuk akar, serta menggunakan eksponen untuk memodelkan pertumbuhan sederhana.`,
    },
    {
      id: 'pemantik',
      kind: 'pemantik',
      title: 'Pertanyaan Pemantik',
      body: `Bayangkan selembar kertas yang tebalnya $0{,}1$ mm. Kertas itu dilipat dua terus-menerus. Setelah dilipat **10 kali**, berapa tebal tumpukannya?

Banyak siswa memperkirakan tebalnya hanya beberapa milimeter. Hitunglah secara bertahap:

- setelah 1 lipatan: $0{,}1 \\times 2 = 0{,}2$ mm;
- setelah 2 lipatan: $0{,}2 \\times 2 = 0{,}4$ mm;
- setiap lipatan berikutnya mengalikan tebal dengan 2.

Setelah 10 lipatan tebalnya adalah $0{,}1 \\times 2^{10}$ mm. Berapa hasilnya? Bandingkan dugaanmu sebelum menekan tombol hitung.`,
      blocks: [
        {
          kind: 'prediction',
          prompt: `Setelah dilipat $10$ kali, berapa tebal tumpukan kertas $0{,}1$ mm itu? Pilih dugaanmu, lalu bandingkan dengan perhitungan sebenarnya.`,
          options: [
            'Sekitar $10$ mm',
            'Sekitar $100$ mm (10 cm)',
            'Sekitar $1.000$ mm (1 m)',
            'Lebih dari $1$ m',
          ],
          reveal: `Karena $2^{10} = 1024$, maka tebalnya $0{,}1 \\times 1024 = 102{,}4$ mm, yaitu sekitar $10{,}24$ cm. Jauh lebih besar daripada dugaan awal. Di sinilah pentingnya memahami **perkalian berulang yang tumbuh cepat**.`,
          saveLabel: 'Simpan dugaan',
        },
      ],
    },
    {
      id: 'prasyarat',
      kind: 'prasyarat',
      title: 'Prasyarat',
      body: `Sebelum melanjutkan, pastikan kamu menguasai:

- operasi perkalian dan pembagian bilangan;
- faktorisasi prima, misalnya $36 = 2^{2} \\cdot 3^{2}$;
- sifat komutatif, asosiatif, dan distributif pada bentuk aljabar.`,
    },
    {
      id: 'konteks',
      kind: 'konteks',
      title: 'Situasi dan Konteks',
      body: `Perkalian berulang muncul di banyak tempat. Sebuah bakteri membelah menjadi dua setiap 20 menit, sehingga populasinya menjadi $2$ kali lipat pada setiap selang 20 menit. Nilai tabungan berbunga majemuk juga berlipat dengan faktor tetap setiap periode.

Menuliskan $2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2$ jelas tidak praktis. Notasi eksponen mempersingkatnya menjadi $2^{10}$. Topik ini membangun aturan agar kita dapat menghitung bentuk seperti itu dengan cepat dan tepat.`,
    },
    {
      id: 'konsep',
      kind: 'konsep',
      title: 'Konsep Inti: Makna Eksponen',
      body: `Untuk bilangan real $a$ dan bilangan bulat positif $n$,

$$a^{n} = \\underbrace{a \\cdot a \\cdot a \\cdots a}_{n \\text{ faktor}}$$

Pada notasi $a^{n}$, bilangan $a$ disebut **basis** (bilangan pokok) dan $n$ disebut **eksponen** (pangkat). Sebagai contoh,

$$5^{3} = 5 \\cdot 5 \\cdot 5 = 125.$$

Perhatikan bahwa eksponen berfungsi sebagai **penghitung banyaknya faktor**, bukan sebagai pengali biasa. Inilah alasan $2^{5} \\neq 2 \\times 5$.`,
      blocks: [
        {
          kind: 'callout',
          variant: 'concept',
          title: 'Inti yang perlu diingat',
          text: 'Eksponen menyatakan berapa kali basis dijadikan faktor. Menambah eksponen berarti **mengalikan**, bukan menjumlahkan basis.',
        },
        {
          kind: 'flip-cards',
          intro: 'Bolak-balik kartu untuk memeriksa istilah kunci pada topik ini.',
          cards: [
            { front: 'Basis', back: 'Bilangan yang dipangkatkan, misalnya $a$ pada $a^{n}$.' },
            { front: 'Eksponen', back: 'Banyaknya faktor basis, misalnya $n$ pada $a^{n}$.' },
            { front: 'Pangkat nol', back: '$a^{0} = 1$ untuk $a \\neq 0$.' },
            { front: 'Pangkat negatif', back: '$a^{-n} = \\dfrac{1}{a^{n}}$ untuk $a \\neq 0$.' },
            { front: 'Pangkat pecahan', back: '$a^{m/n} = \\sqrt[n]{a^{m}}$, misalnya $27^{2/3} = 9$.' },
          ],
        },
      ],
    },
    {
      id: 'representasi',
      kind: 'representasi',
      title: 'Representasi',
      body: `Satu gagasan yang sama dapat dinyatakan dengan cara berbeda:`,
      blocks: [
        {
          kind: 'table',
          caption: 'Tiga representasi untuk $2^{5}$',
          headers: ['Representasi', 'Bentuk'],
          rows: [
            ['Perkalian berulang', '$2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2$'],
            ['Notasi eksponen', '$2^{5}$'],
            ['Hasil', '$32$'],
          ],
        },
        {
          kind: 'tabs',
          items: [
            { label: 'Simbolik', body: 'Bentuk ringkasnya $2^{5}$, yang berarti basis $2$ dipangkatkan $5$.' },
            { label: 'Perkalian', body: 'Dijabarkan menjadi $2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2$, yaitu lima faktor yang sama.' },
            { label: 'Tabel', body: 'Nilainya tumbuh cepat: $2^{1}=2$, $2^{2}=4$, $2^{3}=8$, $2^{4}=16$, $2^{5}=32$.' },
          ],
        },
      ],
    },
    {
      id: 'eksplorasi',
      kind: 'eksplorasi',
      title: 'Eksplorasi',
      body: `Gunakan penggeser berikut untuk mengamati bagaimana nilai $a^{n}$ berubah ketika basis dan eksponen diubah.`,
      blocks: [{ kind: 'exploration', explorationId: 'eksponen-pertumbuhan' }],
    },
    {
      id: 'sifat',
      kind: 'generalisasi',
      title: 'Menemukan Sifat-Sifat Eksponen',
      body: `Coba amati pola berikut. Dari $2^{3}\\cdot 2^{4} = (2\\cdot2\\cdot2)(2\\cdot2\\cdot2\\cdot2) = 2^{7}$ kita melihat bahwa eksponen **bertambah**. Pola ini berlaku umum.

Untuk $a \\neq 0$ dan bilangan bulat $m, n$:

$$a^{m} \\cdot a^{n} = a^{m+n} \\qquad \\frac{a^{m}}{a^{n}} = a^{m-n}$$

$$(a^{m})^{n} = a^{mn} \\qquad (ab)^{n} = a^{n}b^{n} \\qquad \\left(\\frac{a}{b}\\right)^{n} = \\frac{a^{n}}{b^{n}}$$

Setiap sifat dapat dibuktikan dengan menuliskan kembali definisi perkalian berulang. Misalnya $(a^{m})^{n}$ berarti $a^{m}$ dikalikan sebanyak $n$ kali, sehingga total ada $mn$ faktor $a$.`,
      blocks: [
        {
          kind: 'callout',
          variant: 'warning',
          title: 'Hati-hati',
          text: 'Sifat $a^{m}\\cdot a^{n}=a^{m+n}$ hanya berlaku jika **basisnya sama**. Bentuk $2^{3}\\cdot 3^{3}$ tidak dapat disatukan menjadi $6^{6}$; gunakan $(ab)^n=a^n b^n$ sehingga $2^3\\cdot 3^3=(2\\cdot3)^3=6^3$.',
        },
      ],
    },
    {
      id: 'pangkat-khusus',
      kind: 'konsep',
      title: 'Pangkat Nol, Negatif, dan Pecahan',
      body: `**Pangkat nol.** Dari $\\dfrac{a^{n}}{a^{n}} = a^{n-n} = a^{0}$ dan karena $\\dfrac{a^{n}}{a^{n}} = 1$, maka untuk $a \\neq 0$:

$$a^{0} = 1.$$

**Pangkat negatif.** Dari $\\dfrac{a^{0}}{a^{n}} = a^{-n}$ dan $\\dfrac{1}{a^{n}} = a^{0-n}$, maka:

$$a^{-n} = \\frac{1}{a^{n}}, \\qquad a \\neq 0.$$

**Pangkat pecahan.** Karena $(a^{1/2})^{2} = a^{1} = a$, maka $a^{1/2}$ haruslah akar kuadrat dari $a$. Secara umum:

$$a^{\\frac{m}{n}} = \\sqrt[n]{a^{m}}, \\qquad a \\geq 0.$$

Sebagai contoh $27^{\\frac{2}{3}} = \\left(\\sqrt[3]{27}\\right)^{2} = 3^{2} = 9$.`,
    },
    {
      id: 'bentuk-akar',
      kind: 'konsep',
      title: 'Bentuk Akar',
      body: `Bentuk akar $\\sqrt[n]{a}$ adalah cara lain menuliskan $a^{1/n}$. Untuk menyederhanakan bentuk akar, keluarkan faktor kuadrat sempurna:

$$\\sqrt{50} = \\sqrt{25 \\cdot 2} = 5\\sqrt{2}.$$

Merasionalkan penyebut dilakukan dengan mengalikan bentuk sekawan. Contoh:

$$\\frac{6}{\\sqrt{5}-\\sqrt{2}} = \\frac{6(\\sqrt{5}+\\sqrt{2})}{(\\sqrt{5}-\\sqrt{2})(\\sqrt{5}+\\sqrt{2})} = \\frac{6(\\sqrt{5}+\\sqrt{2})}{5-2} = 2(\\sqrt{5}+\\sqrt{2}).$$`,
      blocks: [
        {
          kind: 'callout',
          variant: 'warning',
          title: 'Kesalahan yang sering terjadi',
          text: 'Secara umum $\\sqrt{a+b} \\neq \\sqrt{a}+\\sqrt{b}$. Periksa dengan $a=b=4$: $\\sqrt{8} \\approx 2{,}83$ sedangkan $\\sqrt{4}+\\sqrt{4}=4$.',
        },
      ],
    },
    {
      id: 'contoh',
      kind: 'contoh',
      title: 'Contoh Terbimbing',
      body: `**Contoh 1.** Sederhanakan $(2x^{3}y^{-2})^{2} \\cdot (x^{-2}y^{3})$.

*Penyelesaian.* Gunakan $(ab)^n=a^n b^n$ pada faktor pertama:

$$(2x^{3}y^{-2})^{2} = 2^{2} (x^{3})^{2} (y^{-2})^{2} = 4x^{6}y^{-4}.$$

Kalikan dengan $x^{-2}y^{3}$:

$$4x^{6}y^{-4} \\cdot x^{-2}y^{3} = 4x^{6+(-2)}y^{-4+3} = 4x^{4}y^{-1} = \\frac{4x^{4}}{y}.$$

**Contoh 2.** Sederhanakan $\\sqrt{12}+\\sqrt{27}-\\sqrt{48}$.

*Penyelesaian.* Faktorkan setiap akar:

$$\\sqrt{12}=2\\sqrt{3}, \\quad \\sqrt{27}=3\\sqrt{3}, \\quad \\sqrt{48}=4\\sqrt{3}.$$

Maka $2\\sqrt{3}+3\\sqrt{3}-4\\sqrt{3} = (2+3-4)\\sqrt{3} = \\sqrt{3}$.

**Contoh 3.** Tentukan $x$ dari $2^{x+1} = 32$.

*Penyelesaian.* Nyatakan kedua ruas dengan basis yang sama, yaitu 2:

$$2^{x+1} = 2^{5} \\Rightarrow x+1 = 5 \\Rightarrow x = 4.$$`,
      blocks: [
        {
          kind: 'step-reveal',
          intro: 'Ikuti langkah menyederhanakan $(2x^{3}y^{-2})^{2} \\cdot (x^{-2}y^{3})$ satu per satu.',
          steps: [
            { title: 'Langkah 1', text: 'Pangkatkan setiap faktor: $(2x^{3}y^{-2})^{2} = 2^{2}(x^{3})^{2}(y^{-2})^{2} = 4x^{6}y^{-4}$.' },
            { title: 'Langkah 2', text: 'Kalikan dengan $x^{-2}y^{3}$: $4x^{6}y^{-4} \\cdot x^{-2}y^{3}$.' },
            { title: 'Langkah 3', text: 'Jumlahkan eksponen basis yang sama: $4x^{6+(-2)}y^{-4+3} = 4x^{4}y^{-1}$.' },
            { title: 'Langkah 4', text: 'Tulis pangkat negatif sebagai pecahan: $\\dfrac{4x^{4}}{y}$.' },
          ],
        },
      ],
    },
    {
      id: 'latihan-dasar',
      kind: 'latihan-dasar',
      title: 'Latihan Dasar',
      level: 'dasar',
      body: `1. Hitung nilai $3^{4}$ dan $2^{-3}$.

2. Sederhanakan $a^{5} \\cdot a^{-2}$.

3. Hitung $16^{\\frac{3}{4}}$.

4. Sederhanakan $\\sqrt{75}$.

5. Tentukan nilai $\\left(\\dfrac{2}{3}\\right)^{-2}$.`,
      blocks: [
        {
          kind: 'details',
          summary: 'Lihat kunci dan pembahasan',
          text: `1. $3^{4}=81$; $2^{-3}=\\dfrac{1}{8}$.
2. $a^{5}\\cdot a^{-2}=a^{3}$.
3. $16^{3/4}=(2^{4})^{3/4}=2^{3}=8$.
4. $\\sqrt{75}=\\sqrt{25\\cdot3}=5\\sqrt{3}$.
5. $\\left(\\dfrac{2}{3}\\right)^{-2}=\\left(\\dfrac{3}{2}\\right)^{2}=\\dfrac{9}{4}$.`,
        },
      ],
    },
    {
      id: 'latihan-cakap',
      kind: 'latihan-cakap',
      title: 'Latihan Cakap',
      level: 'cakap',
      body: `1. Sederhanakan $\\dfrac{(3a^{2}b^{3})^{2}}{a^{4}b}$.

2. Rasionalkan penyebut dari $\\dfrac{4}{\\sqrt{7}+\\sqrt{3}}$.

3. Populasi bakteri berlipat dua setiap 30 menit. Jika mula-mula ada 200 bakteri, berapa banyak bakteri setelah 3 jam?

4. Tentukan $x$ dari $9^{x} = 243$.`,
      blocks: [
        {
          kind: 'details',
          summary: 'Lihat kunci dan pembahasan',
          text: `1. $\\dfrac{9a^{4}b^{6}}{a^{4}b}=9b^{5}$.
2. $\\dfrac{4(\\sqrt7-\\sqrt3)}{7-3}=\\sqrt7-\\sqrt3$.
3. 3 jam = 6 selang 30 menit, sehingga $200\\cdot2^{6}=200\\cdot64=12\\,800$ bakteri.
4. $9^{x}=3^{2x}$ dan $243=3^{5}$, maka $2x=5$ sehingga $x=\\dfrac{5}{2}$.`,
        },
      ],
    },
    {
      id: 'latihan-mahir',
      kind: 'latihan-mahir',
      title: 'Latihan Mahir',
      level: 'mahir',
      body: `1. Jika $2^{a}=5$, nyatakan $8^{a+1}$ dalam bentuk pangkat dari 5. Jelaskan langkahmu.

2. Buktikan bahwa $\\dfrac{a^{m}}{a^{n}}=a^{m-n}$ untuk $a\\neq0$ dengan menggunakan definisi eksponen dan sifat pembagian.

3. Sebuah alat menurunkan konsentrasi zat sebesar setengah setiap 4 jam. Konsentrasi awal $80$ mg/L. Setelah berapa jam konsentrasinya pertama kali kurang dari $5$ mg/L? Jelaskan strategimu.`,
      blocks: [
        {
          kind: 'details',
          summary: 'Lihat pembahasan',
          text: `1. $8^{a+1}=(2^{3})^{a+1}=2^{3a+3}=2^{3a}\\cdot2^{3}=(2^{a})^{3}\\cdot8=5^{3}\\cdot8=1000$. (Bentuk pangkat 5: $1000=5^{3}\\cdot2^{3}$ tidak tunggal sebagai pangkat murni; yang diminta adalah nilainya, yaitu $125\\cdot8=1000$.)
2. Tulis $\\dfrac{a^{m}}{a^{n}}=\\dfrac{\\overbrace{a\\cdots a}^{m}}{\\underbrace{a\\cdots a}_{n}}$. Setelah mencoret $n$ faktor yang sama, tersisa $m-n$ faktor $a$, yaitu $a^{m-n}$.
3. Model: $C(t)=80\\left(\\frac12\\right)^{t/4}$. Cari $t$ terkecil dengan $80(1/2)^{t/4}<5 \\Rightarrow (1/2)^{t/4}<1/16=(1/2)^{4} \\Rightarrow t/4>4 \\Rightarrow t>16$. Jadi setelah **lebih dari 16 jam**, pertama kali kurang dari 5 mg/L (pada $t=16$ tepat 5 mg/L).`,
        },
      ],
    },
    {
      id: 'dunia-nyata',
      kind: 'dunia-nyata',
      title: 'Penerapan di Dunia Nyata',
      body: `Eksponen dipakai untuk memodelkan pertumbuhan populasi, penyebaran informasi, peluruhan zat, dan bunga majemuk. Misalnya, jika tabungan awal $M_0$ tumbuh dengan faktor $(1+i)$ setiap tahun, maka saldo setelah $n$ tahun adalah $M_0(1+i)^n$ — sebuah bentuk eksponen.

Untuk latihan pemodelan, lihat topik [Pertumbuhan Populasi](/aplikasi/pertumbuhan-populasi) dan [Bunga dan Investasi](/aplikasi/bunga-investasi).`,
    },
    {
      id: 'kesalahan-umum',
      kind: 'kesalahan-umum',
      title: 'Kesalahan Umum',
      body: `**1. Menjumlahkan basis saat mengalikan.** Menulis $2^{3}\\cdot2^{5}=4^{8}$ adalah salah. Mengapa? Karena basis tidak berubah; yang bertambah adalah banyaknya faktor, sehingga hasilnya $2^{8}=256$. Jika kamu jumlahkan basisnya, kamu mengubah bilangan yang dipakai sebagai faktor.

**2. Menganggap pangkat negatif menghasilkan bilangan negatif.** $2^{-3}\\neq-8$. Pangkat negatif berarti **kebalikan**, sehingga $2^{-3}=\\dfrac{1}{2^{3}}=\\dfrac{1}{8}$.

**3. Mengalikan eksponen saat menjumlahkan basis.** $(a+b)^{2}\\neq a^{2}+b^{2}$. Sifat $(ab)^n=a^nb^n$ berlaku untuk **perkalian**, bukan penjumlahan. Coba $a=b=1$: $(1+1)^2=4$ sedangkan $1^2+1^2=2$.

**4. Menjumlahkan akar berbeda.** $\\sqrt{2}+\\sqrt{8}=3\\sqrt{2}$, bukan $\\sqrt{10}$.`,
      blocks: [
        {
          kind: 'spot-mistake',
          intro: 'Perhatikan penyelesaian $2^{3} \\cdot 2^{5}$. Salah satu langkah keliru. Klik langkah yang salah.',
          steps: [
            'Kalikan basisnya: $2 \\times 2 = 4$.',
            'Jumlahkan eksponennya: $3 + 5 = 8$.',
            'Tuliskan hasil sebagai $2^{8}$.',
            'Hitung nilainya: $2^{8} = 256$.',
          ],
          wrongIndex: 0,
          explanation: 'Langkah pertama keliru. Saat mengalikan bilangan berpangkat dengan **basis sama**, basis tidak berubah; yang bertambah adalah eksponennya. Jadi $2^{3} \\cdot 2^{5} = 2^{8} = 256$, bukan $4^{8}$.',
        },
      ],
    },
    {
      id: 'refleksi',
      kind: 'refleksi',
      title: 'Refleksi',
      body: `Jawab dengan jujur:

1. Kapan kamu perlu menggunakan sifat eksponen, dan kapan sifat itu **tidak** berlaku?
2. Kesalahan apa yang paling sering kamu lakukan, dan bagaimana cara menghindarinya?
3. Berikan satu contoh situasi nyata di sekitarmu yang pertumbuhannya bersifat "berlipat" (eksponensial), bukan "bertambah tetap" (linear).`,
      blocks: [
        {
          kind: 'reflection',
          prompts: [
            'Kapan kamu perlu menggunakan sifat eksponen, dan kapan sifat itu **tidak** berlaku?',
            'Kesalahan apa yang paling sering kamu lakukan saat bekerja dengan pangkat, dan bagaimana cara menghindarinya?',
            'Berikan satu contoh pertumbuhan yang bersifat "berlipat" di sekitarmu.',
          ],
          confidenceLabel: 'Seberapa yakin kamu dengan materi eksponen ini?',
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
          headers: ['Konsep', 'Bentuk'],
          rows: [
            ['Definisi', '$a^{n}=\\underbrace{a\\cdots a}_{n}$',],
            ['Hasil kali basis sama', '$a^{m}\\cdot a^{n}=a^{m+n}$'],
            ['Hasil bagi basis sama', '$\\dfrac{a^{m}}{a^{n}}=a^{m-n}$'],
            ['Pangkat dari pangkat', '$(a^{m})^{n}=a^{mn}$'],
            ['Pangkat nol', '$a^{0}=1,\\ a\\neq0$'],
            ['Pangkat negatif', '$a^{-n}=\\dfrac{1}{a^{n}}$'],
            ['Pangkat pecahan', '$a^{m/n}=\\sqrt[n]{a^{m}}$'],
          ],
        },
      ],
    },
    {
      id: 'evaluasi',
      kind: 'evaluasi',
      title: 'Evaluasi',
      body: `Kerjakan kuis topik ini untuk memeriksa pemahamanmu. Buka halaman [Latihan & Asesmen](/latihan) lalu pilih topik **Eksponen dan Bentuk Akar**.
`,
    },
  ],
};
