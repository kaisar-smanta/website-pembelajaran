import type { Topic } from '@/types/content';

export const variabelAcakDiskret: Topic = {
  id: 'variabel-acak-diskret',
  slug: 'variabel-acak-diskret',
  title: 'Variabel Acak Diskret',
  subtitle: 'Dari peluang ke nilai harapan dan sebarannya',
  grade: 'XII',
  phase: 'F',
  element: 'data-peluang',
  subject: 'matematika-lanjut',
  status: 'lengkap',
  estimatedMinutes: 90,
  summary:
    'Memahami variabel acak diskret, menyusun distribusi peluangnya, memeriksa syarat fungsi peluang, serta menghitung nilai harapan, varians, dan simpangan baku untuk memodelkan data nyata.',
  description:
    'Variabel acak mengubah hasil suatu percobaan menjadi bilangan sehingga dapat dihitung. Topik ini membahas variabel acak diskret, yaitu variabel yang nilainya tercacah, serta cara menyusun distribusi peluang dalam bentuk tabel atau rumus. Kita mempelajari syarat fungsi peluang (setiap nilai antara $0$ dan $1$ dan jumlah seluruh peluang sama dengan $1$), lalu membangun nilai harapan $E(X)$ sebagai rata-rata jangka panjang, varians, dan simpangan baku sebagai ukuran sebaran. Konsep-konsep ini dipakai untuk memodelkan data nyata seperti penjualan harian, banyak produk cacat, dan hasil suatu permainan.',
  keywords: [
    'variabel acak diskret',
    'distribusi peluang',
    'fungsi peluang',
    'nilai harapan',
    'ekspektasi',
    'varians',
    'simpangan baku',
    'pemodelan data',
  ],
  prerequisites: ['peluang'],
  relatedTopics: ['peluang-bersyarat'],
  prerequisiteKnowledge: [
    'Ruang sampel, kejadian, dan peluang teoretis $P(A) = \\dfrac{n(A)}{n(S)}$',
    'Aturan komplemen dan aturan perkalian peluang',
    'Penjumlahan pecahan dan desimal',
    'Notasi penjumlahan (sigma) sederhana',
  ],
  objectives: [
    { text: 'Peserta didik dapat membedakan variabel acak diskret dan kontinu serta memberi contohnya.' },
    { text: 'Peserta didik dapat menyusun distribusi peluang variabel acak diskret dalam bentuk tabel atau rumus.' },
    { text: 'Peserta didik dapat memeriksa syarat fungsi peluang dan menentukan konstanta yang belum diketahui.' },
    { text: 'Peserta didik dapat menghitung nilai harapan $E(X)$ suatu variabel acak diskret.' },
    { text: 'Peserta didik dapat menghitung varians dan simpangan baku variabel acak diskret.' },
    { text: 'Peserta didik dapat memakai nilai harapan dan sebaran untuk memodelkan dan menafsirkan data nyata.' },
  ],
  sections: [
    {
      id: 'tujuan',
      kind: 'tujuan',
      title: 'Tujuan Pembelajaran',
      body: `Setelah mempelajari topik ini, peserta didik dapat membedakan variabel acak diskret dan kontinu, menyusun distribusi peluangnya, memeriksa syarat fungsi peluang, serta menghitung nilai harapan, varians, dan simpangan baku untuk memodelkan data nyata.`,
    },
    {
      id: 'pemantik',
      kind: 'pemantik',
      title: 'Pertanyaan Pemantik',
      body: `Sebuah dadu dilempar sekali. Jika muncul mata **6**, kamu menerima Rp10.000; jika muncul mata lain, kamu membayar Rp2.000.

- Apakah permainan ini menguntungkan, merugikan, atau adil?
- Berapa rata-rata keuntunganmu **per lemparan** bila permainan dilakukan berulang kali?

Rata-rata jangka panjang inilah yang disebut **nilai harapan**, dan dadu adalah contoh **variabel acak diskret**.`,
      blocks: [
        {
          kind: 'details',
          summary: 'Lihat jawaban pertanyaan pemantik',
          text: `Peluang muncul mata 6 adalah $\\frac{1}{6}$ dan peluang muncul mata lain adalah $\\frac{5}{6}$. Nilai harapan keuntungan tiap lemparan adalah
$$E = \\frac{1}{6}(10.000) + \\frac{5}{6}(-2.000) = \\frac{10.000}{6} - \\frac{10.000}{6} = 0.$$
Karena nilai harapannya nol, permainan ini **adil**: dalam jangka panjang, keuntungan dan kerugian saling meniadakan. Pada beberapa lemparan saja hasilnya bisa jauh berbeda, tetapi makin banyak permainan dilakukan, rata-ratanya makin dekat ke $0$.`,
        },
      ],
    },
    {
      id: 'prasyarat',
      kind: 'prasyarat',
      title: 'Prasyarat',
      body: `Sebelum melanjutkan, pastikan kamu menguasai:

- menyusun ruang sampel dan menghitung peluang teoretis;
- aturan komplemen $P(A^c) = 1 - P(A)$ dan aturan perkalian untuk kejadian saling bebas;
- penjumlahan bilangan bulat, pecahan, dan desimal;
- notasi penjumlahan, misalnya $\\sum_{x=1}^{4} x = 1 + 2 + 3 + 4 = 10$.`,
    },
    {
      id: 'konteks',
      kind: 'konteks',
      title: 'Situasi dan Konteks',
      body: `Banyak situasi nyata menuntut kita memberi **angka** pada hasil yang belum pasti. Banyaknya mobil yang datang ke tempat cuci mobil per jam, banyaknya produk cacat dalam satu kotak, atau keuntungan penjual per hari semuanya berupa bilangan yang nilainya bergantung pada kebetulan.

Bilangan semacam itu disebut **variabel acak**. Jika nilainya tercacah dan terpisah — misalnya $0, 1, 2, 3$ mobil — variabelnya **diskret**. Sebaliknya, tinggi badan, berat badan, dan waktu tunggu dapat bernilai sembarang dalam suatu selang, sehingga termasuk variabel acak kontinu.

Dengan mengetahui distribusi peluangnya, kita dapat memprediksi rata-rata jangka panjang (nilai harapan) dan seberapa besar hasil nyata biasanya menyimpang dari rata-rata itu (varians dan simpangan baku).`,
    },
    {
      id: 'konsep',
      kind: 'konsep',
      title: 'Konsep Inti: Variabel Acak Diskret',
      body: `**Variabel acak** adalah fungsi yang memetakan setiap hasil pada ruang sampel ke suatu bilangan real. Variabel acak disebut **diskret** bila himpunan nilainya berhingga atau tercacah, biasanya berupa bilangan bulat.

Contoh:
- $X$ = jumlah mata dua dadu, dengan nilai $2, 3, \\ldots, 12$;
- $Y$ = banyak gambar pada pelemparan tiga koin, dengan nilai $0, 1, 2, 3$;
- $Z$ = banyak produk cacat dalam satu kotak berisi $10$ produk.

**Distribusi peluang** variabel acak diskret $X$ adalah daftar semua nilai $X$ beserta peluangnya. Distribusi dapat disajikan sebagai tabel atau sebagai **rumus** $f(x) = P(X = x)$. Sifat pentingnya: jumlah seluruh peluang selalu $1$, karena semua hasil yang mungkin sudah tercakup.`,
      blocks: [
        {
          kind: 'callout',
          variant: 'concept',
          title: 'Inti yang perlu diingat',
          text: 'Variabel acak diskret menghubungkan **hasil percobaan** dengan **bilangan**, sedangkan distribusi peluangnya memberi bobot peluang pada setiap bilangan itu.',
        },
      ],
    },
    {
      id: 'syarat-fungsi-peluang',
      kind: 'rumus',
      title: 'Syarat Fungsi Peluang',
      body: `Sebuah fungsi $f$ disebut **fungsi peluang** variabel acak diskret $X$ bila memenuhi dua syarat:

1. Setiap nilai peluang berada antara $0$ dan $1$:
$$0 \\leq f(x) \\leq 1.$$
2. Jumlah seluruh peluang sama dengan $1$:
$$\\sum_{x} f(x) = 1.$$

Nilai $f(x) = 0$ berarti $x$ mustahil muncul. Sebaliknya, peluang negatif atau lebih besar dari $1$ tidak sah. Bila jumlah peluang tidak tepat $1$, tabel itu belum dapat disebut distribusi peluang.

Syarat kedua sering dipakai untuk mencari konstanta yang belum diketahui. Misalnya, jika $f(x) = kx$ untuk $x = 1, 2, 3, 4$, maka $\\sum kx = k(1+2+3+4) = 10k = 1$, sehingga $k = 0{,}1$.`,
      blocks: [
        {
          kind: 'callout',
          variant: 'warning',
          title: 'Hati-hati',
          text: 'Periksa kedua syarat sekaligus. Sebuah tabel bisa saja semua nilainya antara $0$ dan $1$, tetapi jumlahnya belum tentu $1$.',
        },
      ],
    },
    {
      id: 'representasi',
      kind: 'representasi',
      title: 'Representasi: Tabel Distribusi Peluang',
      body: `Distribusi peluang variabel acak diskret paling mudah disajikan sebagai **tabel**.

**Contoh: jumlah mata dua dadu.** Misalkan $X$ adalah jumlah kedua mata dadu.

| $x$ | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| $P(X=x)$ | $\\frac{1}{36}$ | $\\frac{2}{36}$ | $\\frac{3}{36}$ | $\\frac{4}{36}$ | $\\frac{5}{36}$ | $\\frac{6}{36}$ | $\\frac{5}{36}$ | $\\frac{4}{36}$ | $\\frac{3}{36}$ | $\\frac{2}{36}$ | $\\frac{1}{36}$ |

Jumlah seluruh peluangnya $\\frac{1+2+3+4+5+6+5+4+3+2+1}{36} = \\frac{36}{36} = 1$, jadi tabel ini sah.

**Contoh: banyak gambar pada tiga koin.** Misalkan $Y$ adalah banyak gambar.

| $y$ | 0 | 1 | 2 | 3 |
| :--: | :--: | :--: | :--: | :--: |
| $P(Y=y)$ | $\\frac{1}{8}$ | $\\frac{3}{8}$ | $\\frac{3}{8}$ | $\\frac{1}{8}$ |

Sekali lagi, jumlah peluangnya $\\frac{1+3+3+1}{8} = \\frac{8}{8} = 1$.`,
    },
    {
      id: 'nilai-harapan',
      kind: 'rumus',
      title: 'Nilai Harapan (Ekspektasi)',
      body: `**Nilai harapan** atau **ekspektasi** $E(X)$ adalah rata-rata tertimbang semua nilai $X$ dengan peluangnya sebagai bobot:

$$E(X) = \\sum_{x} x \\cdot f(x) = x_1 f(x_1) + x_2 f(x_2) + \\cdots + x_n f(x_n).$$

Nilai harapan menggambarkan **rata-rata hasil jangka panjang** jika percobaan diulang sangat banyak kali. Karena itu $E(X)$ tidak harus sama dengan salah satu nilai $X$ yang mungkin. Pada pelemparan tiga koin dengan $X$ = banyak gambar, $E(X) = 1{,}5$ meskipun $X$ selalu bilangan bulat.

Sebagai contoh, untuk distribusi $f(x) = 0{,}1x$ dengan $x = 1, 2, 3, 4$:
$$E(X) = 1(0{,}1) + 2(0{,}2) + 3(0{,}3) + 4(0{,}4) = 0{,}1 + 0{,}4 + 0{,}9 + 1{,}6 = 3.$$`,
    },
    {
      id: 'varians',
      kind: 'rumus',
      title: 'Varians dan Simpangan Baku',
      body: `**Varians** mengukur seberapa jauh nilai-nilai $X$ menyebar dari nilai harapannya. Bila $\\mu = E(X)$:

$$\\operatorname{Var}(X) = \\sum_{x} (x - \\mu)^{2} f(x).$$

Bentuk lain yang lebih praktis untuk berhitung adalah
$$\\operatorname{Var}(X) = E(X^{2}) - \\mu^{2} = \\sum_{x} x^{2} f(x) - \\bigl(E(X)\\bigr)^{2}.$$

Keduanya memberi hasil yang sama. **Simpangan baku** $\\sigma$ adalah akar kuadrat varians:
$$\\sigma = \\sqrt{\\operatorname{Var}(X)}.$$

Simpangan baku bersatuan sama dengan $X$, sehingga sering lebih mudah ditafsirkan daripada varians. Karena varians adalah jumlah kuadrat, nilainya selalu tidak negatif.`,
    },
    {
      id: 'contoh',
      kind: 'contoh',
      title: 'Contoh Terbimbing',
      body: `**Contoh 1 (menentukan konstanta dan nilai harapan).** Fungsi peluang variabel acak diskret $X$ berbentuk $f(x) = kx$ untuk $x = 1, 2, 3, 4$. Tentukan $k$, lalu hitung $E(X)$.

*Penyelesaian.* Karena jumlah seluruh peluang harus $1$:
$$\\sum_{x=1}^{4} kx = k(1 + 2 + 3 + 4) = 10k = 1, \\quad \\text{sehingga } k = 0{,}1.$$
Distribusinya menjadi $f(1) = 0{,}1$, $f(2) = 0{,}2$, $f(3) = 0{,}3$, $f(4) = 0{,}4$. Maka
$$E(X) = 1(0{,}1) + 2(0{,}2) + 3(0{,}3) + 4(0{,}4) = 0{,}1 + 0{,}4 + 0{,}9 + 1{,}6 = 3.$$

**Contoh 2 (jumlah dua dadu).** Misalkan $X$ menyatakan jumlah kedua mata dadu. Ruang sampelnya $36$ hasil sama mungkin, dan nilai $X$ dari $2$ sampai $12$ dengan peluang $\\frac{1}{36}, \\frac{2}{36}, \\ldots, \\frac{6}{36}, \\ldots, \\frac{1}{36}$. Maka
$$E(X) = \\frac{2(1) + 3(2) + 4(3) + 5(4) + 6(5) + 7(6) + 8(5) + 9(4) + 10(3) + 11(2) + 12(1)}{36} = \\frac{252}{36} = 7.$$
Jadi rata-rata jumlah mata dua dadu adalah $7$.

**Contoh 3 (tiga koin).** Tiga koin dilempar dan $X$ menyatakan banyak gambar. Distribusinya $P(X=0) = \\frac{1}{8}$, $P(X=1) = \\frac{3}{8}$, $P(X=2) = \\frac{3}{8}$, $P(X=3) = \\frac{1}{8}$. Maka
$$E(X) = \\frac{0(1) + 1(3) + 2(3) + 3(1)}{8} = \\frac{12}{8} = 1{,}5.$$
Untuk variansnya, hitung dahulu $E(X^{2}) = \\frac{0(1) + 1(3) + 4(3) + 9(1)}{8} = \\frac{24}{8} = 3$. Dengan demikian
$$\\operatorname{Var}(X) = E(X^{2}) - (E(X))^{2} = 3 - (1{,}5)^{2} = 3 - 2{,}25 = 0{,}75, \\qquad \\sigma = \\sqrt{0{,}75} \\approx 0{,}87.$$`,
    },
    {
      id: 'latihan-dasar',
      kind: 'latihan-dasar',
      title: 'Latihan Dasar',
      level: 'dasar',
      body: `1. Distribusi peluang $X$ adalah $P(X=1) = 0{,}2$, $P(X=2) = 0{,}3$, $P(X=3) = 0{,}3$, dan $P(X=4) = p$. Tentukan $p$.
2. Dari distribusi pada nomor 1, tentukan $P(X \\geq 3)$.
3. Sebuah koin dilempar dua kali dan $X$ menyatakan banyak gambar. Tuliskan tabel distribusi peluang $X$.
4. Tentukan $E(X)$ untuk distribusi pada nomor 1.`,
      blocks: [
        {
          kind: 'details',
          summary: 'Lihat kunci dan pembahasan',
          text: `1. Karena $\\sum P(X=x) = 1$, maka $p = 1 - (0{,}2 + 0{,}3 + 0{,}3) = 1 - 0{,}8 = 0{,}2$.
2. $P(X \\geq 3) = P(X=3) + P(X=4) = 0{,}3 + 0{,}2 = 0{,}5$.
3. Ruang sampel $\\{GG, GA, AG, AA\\}$ dengan $X$ = banyak gambar, sehingga $P(X=0) = \\frac{1}{4}$, $P(X=1) = \\frac{1}{2}$, $P(X=2) = \\frac{1}{4}$.
4. $E(X) = 1(0{,}2) + 2(0{,}3) + 3(0{,}3) + 4(0{,}2) = 0{,}2 + 0{,}6 + 0{,}9 + 0{,}8 = 2{,}5$.`,
        },
      ],
    },
    {
      id: 'latihan-cakap',
      kind: 'latihan-cakap',
      title: 'Latihan Cakap',
      level: 'cakap',
      body: `1. Dua dadu dilempar dan $X$ menyatakan jumlah mata. Tentukan $P(X \\geq 10)$.
2. Fungsi peluang $f(x) = kx$ untuk $x = 1, 2, 3, 4$. Tentukan $k$ dan $E(X)$.
3. Tiga koin dilempar dan $X$ menyatakan banyak gambar. Tentukan $E(X)$.
4. Diketahui $E(X) = 4$ dan $E(X^{2}) = 20$. Tentukan varians dan simpangan baku $X$.`,
      blocks: [
        {
          kind: 'details',
          summary: 'Lihat kunci dan pembahasan',
          text: `1. Jumlah $\\geq 10$ muncul dari $3 + 2 + 1 = 6$ cara, sehingga $P(X \\geq 10) = \\frac{6}{36} = \\frac{1}{6}$.
2. $k(1+2+3+4) = 10k = 1$, jadi $k = 0{,}1$. Maka $E(X) = 1(0{,}1) + 2(0{,}2) + 3(0{,}3) + 4(0{,}4) = 3$.
3. Distribusinya $\\frac{1}{8}, \\frac{3}{8}, \\frac{3}{8}, \\frac{1}{8}$, sehingga $E(X) = \\frac{0 + 3 + 6 + 3}{8} = \\frac{12}{8} = 1{,}5$.
4. $\\operatorname{Var}(X) = E(X^{2}) - (E(X))^{2} = 20 - 4^{2} = 20 - 16 = 4$, dan $\\sigma = \\sqrt{4} = 2$.`,
        },
      ],
    },
    {
      id: 'latihan-mahir',
      kind: 'latihan-mahir',
      title: 'Latihan Mahir',
      level: 'mahir',
      body: `1. Dua dadu dilempar dan $X$ menyatakan jumlah mata. Tentukan varians dan simpangan baku $X$.
2. Sebuah kotak memuat 4 bola merah dan 2 bola biru. Dua bola diambil tanpa pengembalian dan $X$ menyatakan banyak bola merah. Susun distribusi $X$, lalu tentukan $E(X)$.
3. Diberikan $f(x) = c(x+1)$ untuk $x = 0, 1, 2, 3$. Tentukan $c$, $E(X)$, dan $\\operatorname{Var}(X)$.`,
      blocks: [
        {
          kind: 'details',
          summary: 'Lihat pembahasan',
          text: `1. Dari distribusi dua dadu, $E(X) = 7$ dan $E(X^{2}) = \\frac{1974}{36}$. Maka $\\operatorname{Var}(X) = \\frac{1974}{36} - 49 = \\frac{1974 - 1764}{36} = \\frac{210}{36} = \\frac{35}{6} \\approx 5{,}83$, dan $\\sigma = \\sqrt{\\frac{35}{6}} \\approx 2{,}42$.
2. Banyak cara mengambil 2 dari 6 bola adalah $\\binom{6}{2} = 15$. Maka $P(X=0) = \\frac{\\binom{2}{2}}{15} = \\frac{1}{15}$, $P(X=1) = \\frac{\\binom{4}{1}\\binom{2}{1}}{15} = \\frac{8}{15}$, dan $P(X=2) = \\frac{\\binom{4}{2}}{15} = \\frac{6}{15}$. Jumlahnya $\\frac{1+8+6}{15} = 1$. Nilai harapannya $E(X) = 0 \\cdot \\frac{1}{15} + 1 \\cdot \\frac{8}{15} + 2 \\cdot \\frac{6}{15} = \\frac{20}{15} = \\frac{4}{3}$.
3. $\\sum c(x+1) = c(1+2+3+4) = 10c = 1$, jadi $c = 0{,}1$. Maka $f(0) = 0{,}1$, $f(1) = 0{,}2$, $f(2) = 0{,}3$, $f(3) = 0{,}4$. $E(X) = 0(0{,}1) + 1(0{,}2) + 2(0{,}3) + 3(0{,}4) = 2$ dan $E(X^{2}) = 0(0{,}1) + 1(0{,}2) + 4(0{,}3) + 9(0{,}4) = 5$, sehingga $\\operatorname{Var}(X) = 5 - 2^{2} = 1$.`,
        },
      ],
    },
    {
      id: 'dunia-nyata',
      kind: 'dunia-nyata',
      title: 'Penerapan di Dunia Nyata',
      body: `Nilai harapan adalah alat utama untuk mengambil keputusan di tengah ketidakpastian. Perusahaan asuransi menetapkan premi berdasarkan nilai harapan besar klaim, penjual menakar stok dari rata-rata permintaan, dan pengendalian mutu menilai rata-rata banyaknya produk cacat per kotak.

Sebagai gambaran, sebuah tempat cuci mobil mencatat distribusi banyak mobil yang datang per jam. Nilai harapan $E(X)$ memberi perkiraan rata-rata banyak mobil per jam, yang dipakai untuk mengatur jumlah petugas. Varians dan simpangan bakunya menunjukkan seberapa berfluktuasi kedatangan mobil: simpangan baku besar berarti arus pelanggan tidak stabil, sehingga perlu rencana cadangan.

Ingat, nilai harapan hanyalah **perkiraan jangka panjang**. Pada hari tertentu, jumlah mobil bisa jauh dari rata-ratanya.`,
    },
    {
      id: 'kesalahan-umum',
      kind: 'kesalahan-umum',
      title: 'Kesalahan Umum',
      body: `**1. Lupa memeriksa jumlah peluang.** Sebuah tabel baru sah sebagai distribusi jika $\\sum f(x) = 1$. Tabel dengan jumlah $1{,}1$ atau $0{,}9$ bukan distribusi peluang.

**2. Mengira $E(X)$ harus salah satu nilai $X$.** Nilai harapan boleh berupa pecahan, misalnya $E(X) = 1{,}5$ pada tiga koin. Nilai itu adalah rata-rata jangka panjang, bukan hasil yang pasti muncul.

**3. Salah menghitung varians.** Varians adalah $E(X^{2}) - (E(X))^{2}$, bukan $E(X^{2}) + (E(X))^{2}$ dan bukan $E(X^{2}) - E(X)$.

**4. Menghitung varians sebagai $\\sum (x - \\mu) f(x)$ tanpa kuadrat.** Karena $\\mu = E(X)$, jumlah itu selalu $0$; simpangan harus dikuadratkan dahulu.

**5. Menyamakan nilai harapan dengan hasil setiap percobaan.** $E(X) = 7$ pada dua dadu tidak berarti setiap lemparan berjumlah $7$; itu hanya rata-rata bila percobaan diulang sangat banyak.`,
      blocks: [
        {
          kind: 'spot-mistake',
          intro: 'Seorang siswa menghitung varians untuk distribusi $P(X=1) = 0{,}5$ dan $P(X=3) = 0{,}5$. Klik langkah yang keliru.',
          steps: [
            '$E(X) = 1(0{,}5) + 3(0{,}5) = 2$.',
            '$E(X^{2}) = 1^{2}(0{,}5) + 3^{2}(0{,}5) = 5$.',
            '$\\operatorname{Var}(X) = E(X^{2}) + (E(X))^{2} = 5 + 4 = 9$.',
          ],
          wrongIndex: 2,
          explanation:
            'Varians adalah selisih, bukan jumlah: $\\operatorname{Var}(X) = E(X^{2}) - (E(X))^{2} = 5 - 4 = 1$.',
        },
      ],
    },
    {
      id: 'refleksi',
      kind: 'refleksi',
      title: 'Refleksi',
      body: `Jawab dengan jujur:

1. Apa perbedaan variabel acak diskret dan kontinu? Berikan satu contoh masing-masing.
2. Mengapa jumlah seluruh peluang harus sama dengan $1$?
3. Apa makna nilai harapan, dan mengapa $E(X)$ boleh bukan salah satu nilai $X$ yang mungkin?
4. Kapan simpangan baku lebih mudah ditafsirkan daripada varians?`,
    },
    {
      id: 'rangkuman',
      kind: 'rangkuman',
      title: 'Rangkuman',
      blocks: [
        {
          kind: 'table',
          headers: ['Konsep', 'Bentuk / Rumus'],
          rows: [
            ['Variabel acak diskret', 'nilai tercacah, biasanya bilangan bulat'],
            ['Distribusi peluang', 'tabel atau rumus $f(x) = P(X = x)$'],
            ['Syarat 1', '$0 \\leq f(x) \\leq 1$'],
            ['Syarat 2', '$\\sum_{x} f(x) = 1$'],
            ['Nilai harapan', '$E(X) = \\sum_{x} x \\, f(x)$'],
            ['Momen kedua', '$E(X^{2}) = \\sum_{x} x^{2} f(x)$'],
            ['Varians', '$\\operatorname{Var}(X) = E(X^{2}) - (E(X))^{2}$'],
            ['Simpangan baku', '$\\sigma = \\sqrt{\\operatorname{Var}(X)}$'],
          ],
        },
      ],
    },
    {
      id: 'evaluasi',
      kind: 'evaluasi',
      title: 'Evaluasi',
      body: `Kerjakan kuis topik ini untuk memeriksa pemahamanmu. Buka halaman [Latihan & Asesmen](/latihan) lalu pilih topik **Variabel Acak Diskret**.`,
    },
  ],
};
