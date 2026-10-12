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
  applications: ['mtl-ekspektasi-risiko', 'mtl-binomial-kendali-mutu'],
  sections: [
    {
      id: "tujuan",
      kind: "tujuan",
      title: "Tujuan Pembelajaran",
      body: "Setelah mempelajari topik ini, peserta didik dapat membedakan variabel acak diskret dan kontinu, menyusun distribusi peluangnya, memeriksa syarat fungsi peluang, serta menghitung nilai harapan, varians, dan simpangan baku untuk memodelkan data nyata.",
    },
    {
      id: "pemantik",
      kind: "pemantik",
      title: "Pertanyaan Pemantik",
      blocks: [
        {
          kind: "prediction",
          prompt: `Sebuah dadu dilempar sekali. Jika muncul mata **6**, kamu menerima Rp10.000; jika muncul mata lain, kamu membayar Rp2.000.

- Apakah permainan ini menguntungkan, merugikan, atau adil?
- Berapa rata-rata keuntunganmu **per lemparan** bila permainan dilakukan berulang kali?

Rata-rata jangka panjang inilah yang disebut **nilai harapan**, dan dadu adalah contoh **variabel acak diskret**.`,
          reveal: `Peluang muncul mata 6 adalah $\\frac{1}{6}$ dan peluang muncul mata lain adalah $\\frac{5}{6}$. Nilai harapan keuntungan tiap lemparan adalah
$$E = \\frac{1}{6}(10.000) + \\frac{5}{6}(-2.000) = \\frac{10.000}{6} - \\frac{10.000}{6} = 0.$$
Karena nilai harapannya nol, permainan ini **adil**: dalam jangka panjang, keuntungan dan kerugian saling meniadakan. Pada beberapa lemparan saja hasilnya bisa jauh berbeda, tetapi makin banyak permainan dilakukan, rata-ratanya makin dekat ke $0$.`,
          saveLabel: "Simpan dugaan & lihat jawabannya",
        },
      ],
    },
    {
      id: "prasyarat",
      kind: "prasyarat",
      title: "Prasyarat",
      body: `Sebelum melanjutkan, pastikan kamu menguasai:

- menyusun ruang sampel dan menghitung peluang teoretis;
- aturan komplemen $P(A^c) = 1 - P(A)$ dan aturan perkalian untuk kejadian saling bebas;
- penjumlahan bilangan bulat, pecahan, dan desimal;
- notasi penjumlahan, misalnya $\\sum_{x=1}^{4} x = 1 + 2 + 3 + 4 = 10$.`,
    },
    {
      id: "konteks",
      kind: "konteks",
      title: "Situasi dan Konteks",
      body: `Banyak situasi nyata menuntut kita memberi **angka** pada hasil yang belum pasti. Banyaknya mobil yang datang ke tempat cuci mobil per jam, banyaknya produk cacat dalam satu kotak, atau keuntungan penjual per hari semuanya berupa bilangan yang nilainya bergantung pada kebetulan.

Bilangan semacam itu disebut **variabel acak**. Jika nilainya tercacah dan terpisah — misalnya $0, 1, 2, 3$ mobil — variabelnya **diskret**. Sebaliknya, tinggi badan, berat badan, dan waktu tunggu dapat bernilai sembarang dalam suatu selang, sehingga termasuk variabel acak kontinu.

Dengan mengetahui distribusi peluangnya, kita dapat memprediksi rata-rata jangka panjang (nilai harapan) dan seberapa besar hasil nyata biasanya menyimpang dari rata-rata itu (varians dan simpangan baku).`,
    },
    {
      id: "konsep",
      kind: "konsep",
      title: "Konsep Inti: Variabel Acak Diskret",
      body: `**Variabel acak** adalah fungsi yang memetakan setiap hasil pada ruang sampel ke suatu bilangan real. Variabel acak disebut **diskret** bila himpunan nilainya berhingga atau tercacah, biasanya berupa bilangan bulat.

Contoh:
- $X$ = jumlah mata dua dadu, dengan nilai $2, 3, \\ldots, 12$;
- $Y$ = banyak gambar pada pelemparan tiga koin, dengan nilai $0, 1, 2, 3$;
- $Z$ = banyak produk cacat dalam satu kotak berisi $10$ produk.

**Distribusi peluang** variabel acak diskret $X$ adalah daftar semua nilai $X$ beserta peluangnya. Distribusi dapat disajikan sebagai tabel atau sebagai **rumus** $f(x) = P(X = x)$. Sifat pentingnya: jumlah seluruh peluang selalu $1$, karena semua hasil yang mungkin sudah tercakup.`,
      blocks: [
        {
          kind: "callout",
          variant: "concept",
          title: "Gagasan pokok: dari hasil ke bilangan",
          text: "Variabel acak diskret menghubungkan **hasil percobaan** dengan **bilangan**, sedangkan distribusi peluangnya memberi bobot peluang pada setiap bilangan itu.",
        },
        {
          kind: "flip-cards",
          intro: "Ingat kembali istilah variabel acak diskret.",
          cards: [
            {
              front: "Variabel acak diskret",
              back: "Peubah bernilai terhingga/tercacah",
            },
            {
              front: "Fungsi peluang",
              back: "Memetakan tiap nilai ke peluangnya; total $=1$",
            },
            {
              front: "Nilai harapan $E(X)$",
              back: "$\\sum x\\,P(X=x)$",
            },
            {
              front: "Varians",
              back: "$E(X^{2})-[E(X)]^{2}$",
            },
          ],
        },
        {
          kind: "figure",
          alt: "Diagram batang peluang banyak gambar pada pelemparan tiga koin untuk nilai 0, 1, 2, dan 3; batang untuk 1 dan 2 paling tinggi, dan garis putus-putus menandai nilai harapan 1,5.",
          caption: "Fungsi peluang $X$ = banyak gambar pada tiga koin; garis putus-putus menandai nilai harapan $E(X)=1{,}5$.",
          svg: '<svg viewBox="0 0 320 240" aria-hidden="true" role="presentation"><defs><marker id="fig-vad-axis" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0,0 L 10,5 L 0,10 z" fill="currentColor"/></marker></defs><line x1="35" y1="195" x2="290" y2="195" stroke="currentColor" stroke-width="1.2" marker-end="url(#fig-vad-axis)"/><line x1="35" y1="195" x2="35" y2="35" stroke="currentColor" stroke-width="1.2" marker-end="url(#fig-vad-axis)"/><rect x="55" y="155" width="40" height="40" fill="currentColor" opacity="0.2" stroke="currentColor" stroke-width="1"/><rect x="110" y="75" width="40" height="120" fill="currentColor" opacity="0.2" stroke="currentColor" stroke-width="1"/><rect x="165" y="75" width="40" height="120" fill="currentColor" opacity="0.2" stroke="currentColor" stroke-width="1"/><rect x="220" y="155" width="40" height="40" fill="currentColor" opacity="0.2" stroke="currentColor" stroke-width="1"/><line x1="157.5" y1="195" x2="157.5" y2="60" stroke="currentColor" stroke-width="1.8" stroke-dasharray="4 3"/><text x="157.5" y="54" font-size="11" fill="currentColor" text-anchor="middle">E(X) = 1,5</text><text x="75" y="215" font-size="12" fill="currentColor" text-anchor="middle">0</text><text x="130" y="215" font-size="12" fill="currentColor" text-anchor="middle">1</text><text x="185" y="215" font-size="12" fill="currentColor" text-anchor="middle">2</text><text x="240" y="215" font-size="12" fill="currentColor" text-anchor="middle">3</text><text x="160" y="234" font-size="11" fill="currentColor" text-anchor="middle">banyak gambar</text><text x="12" y="115" font-size="11" fill="currentColor" transform="rotate(-90 12 115)" text-anchor="middle">P(X = x)</text></svg>',
        },
      ],
    },
    {
      id: "syarat-fungsi-peluang",
      kind: "rumus",
      title: "Syarat Fungsi Peluang",
      body: `Sebuah fungsi $f$ disebut **fungsi peluang** variabel acak diskret $X$ bila memenuhi dua syarat:

1. Setiap nilai peluang berada antara $0$ dan $1$:
$$0 \\leq f(x) \\leq 1.$$
2. Jumlah seluruh peluang sama dengan $1$:
$$\\sum_{x} f(x) = 1.$$

Nilai $f(x) = 0$ berarti $x$ mustahil muncul. Sebaliknya, peluang negatif atau lebih besar dari $1$ tidak sah. Bila jumlah peluang tidak tepat $1$, tabel itu belum dapat disebut distribusi peluang.

Syarat kedua sering dipakai untuk mencari konstanta yang belum diketahui. Misalnya, jika $f(x) = kx$ untuk $x = 1, 2, 3, 4$, maka $\\sum kx = k(1+2+3+4) = 10k = 1$, sehingga $k = 0{,}1$.`,
      blocks: [
        {
          kind: "callout",
          variant: "warning",
          title: "Hati-hati",
          text: "Periksa kedua syarat sekaligus. Sebuah tabel bisa saja semua nilainya antara $0$ dan $1$, tetapi jumlahnya belum tentu $1$.",
        },
      ],
    },
    {
      id: "representasi",
      kind: "representasi",
      title: "Representasi: Tabel Distribusi Peluang",
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
      id: "nilai-harapan",
      kind: "rumus",
      title: "Nilai Harapan (Ekspektasi)",
      body: `**Nilai harapan** atau **ekspektasi** $E(X)$ adalah rata-rata tertimbang semua nilai $X$ dengan peluangnya sebagai bobot:

$$E(X) = \\sum_{x} x \\cdot f(x) = x_1 f(x_1) + x_2 f(x_2) + \\cdots + x_n f(x_n).$$

Nilai harapan menggambarkan **rata-rata hasil jangka panjang** jika percobaan diulang sangat banyak kali. Karena itu $E(X)$ tidak harus sama dengan salah satu nilai $X$ yang mungkin. Pada pelemparan tiga koin dengan $X$ = banyak gambar, $E(X) = 1{,}5$ meskipun $X$ selalu bilangan bulat.

Sebagai contoh, untuk distribusi $f(x) = 0{,}1x$ dengan $x = 1, 2, 3, 4$:
$$E(X) = 1(0{,}1) + 2(0{,}2) + 3(0{,}3) + 4(0{,}4) = 0{,}1 + 0{,}4 + 0{,}9 + 1{,}6 = 3.$$`,
    },
    {
      id: "varians",
      kind: "rumus",
      title: "Varians dan Simpangan Baku",
      body: `**Varians** mengukur seberapa jauh nilai-nilai $X$ menyebar dari nilai harapannya. Bila $\\mu = E(X)$:

$$\\operatorname{Var}(X) = \\sum_{x} (x - \\mu)^{2} f(x).$$

Bentuk lain yang lebih praktis untuk berhitung adalah
$$\\operatorname{Var}(X) = E(X^{2}) - \\mu^{2} = \\sum_{x} x^{2} f(x) - \\bigl(E(X)\\bigr)^{2}.$$

Keduanya memberi hasil yang sama. **Simpangan baku** $\\sigma$ adalah akar kuadrat varians:
$$\\sigma = \\sqrt{\\operatorname{Var}(X)}.$$

Simpangan baku bersatuan sama dengan $X$, sehingga sering lebih mudah ditafsirkan daripada varians. Karena varians adalah jumlah kuadrat, nilainya selalu tidak negatif.`,
    },
    {
      id: "eksplorasi",
      kind: "eksplorasi",
      title: "Eksplorasi Distribusi Peluang Diskret",
      body: `Nilai harapan dan varians menjadi lebih konkret jika kamu menyusun distribusinya sendiri. Pada simulasi berikut, ubah nilai $x$ dan peluang $P(X=x)$ tiap hasil, lalu perhatikan tinggi batang, letak garis nilai harapan, serta lebar sebarannya. Pastikan jumlah seluruh peluang tetap $1$ agar tabelmu sah.`,
      blocks: [
        {
          kind: "exploration",
          explorationId: "mtl-variabel-acak-pmf",
        },
      ],
    },
    {
      id: "generalisasi",
      kind: "generalisasi",
      title: "Pola Umum Distribusi, Harapan, dan Sebaran",
      body: `Semua besaran pada topik ini dihitung dengan cara yang sama, yaitu **jumlah berbobot**. Peluang bertindak sebagai bobot, dan total bobotnya selalu $1$:

$$\\sum_{x} f(x) = 1, \\qquad E(X) = \\sum_{x} x\\,f(x), \\qquad \\operatorname{Var}(X) = \\sum_{x} (x-\\mu)^{2} f(x) = E(X^{2})-\\mu^{2}.$$

Pola berbobot ini menjelaskan mengapa $E(X)$ tidak harus sama dengan salah satu nilai $X$; ia adalah titik keseimbangan distribusi. Karena setiap suku varians memuat kuadrat jarak $(x-\\mu)^{2}$, varians selalu tidak negatif dan makin besar bila nilai-nilai $X$ menyebar jauh dari nilai harapannya. Simpangan baku $\\sigma=\\sqrt{\\operatorname{Var}(X)}$ mengembalikan hasil ke satuan yang sama dengan $X$, sehingga lebih mudah ditafsirkan.`,
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
              text: `Fungsi peluang variabel acak diskret $X$ berbentuk $f(x) = kx$ untuk $x = 1, 2, 3, 4$. Tentukan $k$, lalu hitung $E(X)$.

*Penyelesaian.* Karena jumlah seluruh peluang harus $1$:
$$\\sum_{x=1}^{4} kx = k(1 + 2 + 3 + 4) = 10k = 1, \\quad \\text{sehingga } k = 0{,}1.$$
Distribusinya menjadi $f(1) = 0{,}1$, $f(2) = 0{,}2$, $f(3) = 0{,}3$, $f(4) = 0{,}4$. Maka
$$E(X) = 1(0{,}1) + 2(0{,}2) + 3(0{,}3) + 4(0{,}4) = 0{,}1 + 0{,}4 + 0{,}9 + 1{,}6 = 3.$$`,
            },
            {
              title: "Contoh 2",
              text: `Misalkan $X$ menyatakan jumlah kedua mata dadu. Ruang sampelnya $36$ hasil sama mungkin, dan nilai $X$ dari $2$ sampai $12$ dengan peluang $\\frac{1}{36}, \\frac{2}{36}, \\ldots, \\frac{6}{36}, \\ldots, \\frac{1}{36}$. Maka
$$E(X) = \\frac{2(1) + 3(2) + 4(3) + 5(4) + 6(5) + 7(6) + 8(5) + 9(4) + 10(3) + 11(2) + 12(1)}{36} = \\frac{252}{36} = 7.$$
Jadi rata-rata jumlah mata dua dadu adalah $7$.`,
            },
            {
              title: "Contoh 3",
              text: `Tiga koin dilempar dan $X$ menyatakan banyak gambar. Distribusinya $P(X=0) = \\frac{1}{8}$, $P(X=1) = \\frac{3}{8}$, $P(X=2) = \\frac{3}{8}$, $P(X=3) = \\frac{1}{8}$. Maka
$$E(X) = \\frac{0(1) + 1(3) + 2(3) + 3(1)}{8} = \\frac{12}{8} = 1{,}5.$$
Untuk variansnya, hitung dahulu $E(X^{2}) = \\frac{0(1) + 1(3) + 4(3) + 9(1)}{8} = \\frac{24}{8} = 3$. Dengan demikian
$$\\operatorname{Var}(X) = E(X^{2}) - (E(X))^{2} = 3 - (1{,}5)^{2} = 3 - 2{,}25 = 0{,}75, \\qquad \\sigma = \\sqrt{0{,}75} \\approx 0{,}87.$$`,
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
      body: `Nilai harapan adalah alat utama untuk mengambil keputusan di tengah ketidakpastian. Perusahaan asuransi menetapkan premi berdasarkan nilai harapan besar klaim, penjual menakar stok dari rata-rata permintaan, dan pengendalian mutu menilai rata-rata banyaknya produk cacat per kotak.

Sebagai gambaran, sebuah tempat cuci mobil mencatat distribusi banyak mobil yang datang per jam. Nilai harapan $E(X)$ memberi perkiraan rata-rata banyak mobil per jam, yang dipakai untuk mengatur jumlah petugas. Varians dan simpangan bakunya menunjukkan seberapa berfluktuasi kedatangan mobil: simpangan baku besar berarti arus pelanggan tidak stabil, sehingga perlu rencana cadangan.

Ingat, nilai harapan hanyalah **perkiraan jangka panjang**. Pada hari tertentu, jumlah mobil bisa jauh dari rata-ratanya.`,
    },
    {
      id: "kesalahan-umum",
      kind: "kesalahan-umum",
      title: "Kesalahan Umum",
      body: `**1. Lupa memeriksa jumlah peluang.** Sebuah tabel baru sah sebagai distribusi jika $\\sum f(x) = 1$. Tabel dengan jumlah $1{,}1$ atau $0{,}9$ bukan distribusi peluang.

**2. Mengira $E(X)$ harus salah satu nilai $X$.** Nilai harapan boleh berupa pecahan, misalnya $E(X) = 1{,}5$ pada tiga koin. Nilai itu adalah rata-rata jangka panjang, bukan hasil yang pasti muncul.

**3. Salah menghitung varians.** Varians adalah $E(X^{2}) - (E(X))^{2}$, bukan $E(X^{2}) + (E(X))^{2}$ dan bukan $E(X^{2}) - E(X)$.

**4. Menghitung varians sebagai $\\sum (x - \\mu) f(x)$ tanpa kuadrat.** Karena $\\mu = E(X)$, jumlah itu selalu $0$; simpangan harus dikuadratkan dahulu.

**5. Menyamakan nilai harapan dengan hasil setiap percobaan.** $E(X) = 7$ pada dua dadu tidak berarti setiap lemparan berjumlah $7$; itu hanya rata-rata bila percobaan diulang sangat banyak.`,
      blocks: [
        {
          kind: "spot-mistake",
          intro: "Seorang siswa menghitung varians untuk distribusi $P(X=1) = 0{,}5$ dan $P(X=3) = 0{,}5$. Klik langkah yang keliru.",
          steps: [
            "$E(X) = 1(0{,}5) + 3(0{,}5) = 2$.",
            "$E(X^{2}) = 1^{2}(0{,}5) + 3^{2}(0{,}5) = 5$.",
            "$\\operatorname{Var}(X) = E(X^{2}) + (E(X))^{2} = 5 + 4 = 9$.",
          ],
          wrongIndex: 2,
          explanation: "Varians adalah selisih, bukan jumlah: $\\operatorname{Var}(X) = E(X^{2}) - (E(X))^{2} = 5 - 4 = 1$.",
        },
      ],
    },
    {
      id: "tantangan",
      kind: "tantangan",
      title: "Tantangan",
      body: `**Soal.** Sebuah kotak berisi $4$ bola merah dan $2$ bola biru. Dua bola diambil sekaligus. Misalkan $X$ menyatakan banyak bola merah yang terambil. Tentukan distribusi peluang $X$, lalu hitung nilai harapan dan variansnya.`,
      blocks: [
        {
          kind: "step-reveal",
          intro: "Susun dahulu distribusinya, baru hitung nilai harapan dan sebarannya.",
          steps: [
            {
              title: "Langkah 1: Tentukan nilai dan ruang sampel",
              text: `Nilai yang mungkin adalah $X = 0, 1, 2$. Banyak cara mengambil $2$ bola dari $6$ bola adalah $\\binom{6}{2} = 15$, sehingga $n(S) = 15$.`,
            },
            {
              title: "Langkah 2: Hitung peluang tiap nilai",
              text: `$P(X=0) = \\dfrac{\\binom{2}{2}}{15} = \\dfrac{1}{15}$; $P(X=1) = \\dfrac{\\binom{4}{1}\\binom{2}{1}}{15} = \\dfrac{8}{15}$; $P(X=2) = \\dfrac{\\binom{4}{2}}{15} = \\dfrac{6}{15} = \\dfrac{2}{5}$. Periksa jumlahnya: $\\dfrac{1}{15}+\\dfrac{8}{15}+\\dfrac{6}{15}=1$, jadi distribusinya sah.`,
            },
            {
              title: "Langkah 3: Nilai harapan",
              text: `$E(X) = 0\\left(\\dfrac{1}{15}\\right) + 1\\left(\\dfrac{8}{15}\\right) + 2\\left(\\dfrac{6}{15}\\right) = \\dfrac{8+12}{15} = \\dfrac{20}{15} = \\dfrac{4}{3}$. Jadi rata-rata banyak bola merah per pengambilan adalah sekitar $1{,}33$.`,
            },
            {
              title: "Langkah 4: Varians dan simpangan baku",
              text: `$E(X^{2}) = 0^{2}\\left(\\dfrac{1}{15}\\right) + 1^{2}\\left(\\dfrac{8}{15}\\right) + 2^{2}\\left(\\dfrac{6}{15}\\right) = \\dfrac{8+24}{15} = \\dfrac{32}{15}$. Maka $\\operatorname{Var}(X) = \\dfrac{32}{15} - \\left(\\dfrac{4}{3}\\right)^{2} = \\dfrac{32}{15} - \\dfrac{16}{9} = \\dfrac{16}{45} \\approx 0{,}356$, dan $\\sigma = \\sqrt{\\dfrac{16}{45}} \\approx 0{,}60$.`,
            },
          ],
        },
      ],
    },
    {
      id: "sejarah",
      kind: "sejarah",
      title: "Jejak Sejarah",
      body: `Gagasan nilai harapan muncul bersama teori peluang awal. Christiaan Huygens pada 1657 memakai rata-rata tertimbang hasil untuk menghitung harapan dalam permainan, dan Jacob Bernoulli dalam *Ars Conjectandi* (1713) menjelaskan mengapa rata-rata jangka panjang mendekati nilai harapan. Ukuran sebaran berkembang kemudian; varians dan simpangan baku dibakukan oleh Karl Pearson pada akhir abad ke-19 setelah gagasan kuadrat terkecil dari Legendre dan Gauss. Istilah "variabel acak" dalam arti modern sebagai fungsi dari ruang sampel ke bilangan baru dipandang baku setelah Andrey Kolmogorov meletakkan dasar aksiomatik teori peluang pada 1933.`,
    },
    {
      id: "refleksi",
      kind: "refleksi",
      title: "Refleksi",
      body: "Nilai harapan dan simpangan baku adalah dua angka yang sering dipakai untuk menimbang pilihan. Ingat kembali permainan dadu pada awal topik, lalu tuliskan kapan sebuah keputusan lebih baik dinilai dari rata-ratanya dan kapan dari sebarannya.",
      blocks: [
        {
          kind: "reflection",
          prompts: [
            "Apa perbedaan variabel acak diskret dan kontinu? Berikan satu contoh masing-masing.",
            "Mengapa jumlah seluruh peluang harus sama dengan $1$?",
            "Apa makna nilai harapan, dan mengapa $E(X)$ boleh bukan salah satu nilai $X$ yang mungkin?",
            "Kapan simpangan baku lebih mudah ditafsirkan daripada varians?",
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
            "Konsep",
            "Bentuk / Rumus",
          ],
          rows: [
            [
              "Variabel acak diskret",
              "nilai tercacah, biasanya bilangan bulat",
            ],
            [
              "Distribusi peluang",
              "tabel atau rumus $f(x) = P(X = x)$",
            ],
            [
              "Syarat 1",
              "$0 \\leq f(x) \\leq 1$",
            ],
            [
              "Syarat 2",
              "$\\sum_{x} f(x) = 1$",
            ],
            [
              "Nilai harapan",
              "$E(X) = \\sum_{x} x \\, f(x)$",
            ],
            [
              "Momen kedua",
              "$E(X^{2}) = \\sum_{x} x^{2} f(x)$",
            ],
            [
              "Varians",
              "$\\operatorname{Var}(X) = E(X^{2}) - (E(X))^{2}$",
            ],
            [
              "Simpangan baku",
              "$\\sigma = \\sqrt{\\operatorname{Var}(X)}$",
            ],
          ],
        },
      ],
    },
    {
      id: "evaluasi",
      kind: "evaluasi",
      title: "Evaluasi",
      body: `**Cek akhir.** Selesaikan dua hal berikut secara lisan atau tertulis. (1) Jelaskan dengan contoh mengapa sebuah tabel yang semua peluangnya antara $0$ dan $1$ belum tentu sah sebagai distribusi. (2) Untuk distribusi dengan $E(X)=2$ dan $\\operatorname{Var}(X)=9$, tafsirkan kedua angka itu dalam satu kalimat. Lanjutkan berlatih di [Latihan & Asesmen](/latihan) topik **Variabel Acak Diskret**.`,
    },
  ],
};
