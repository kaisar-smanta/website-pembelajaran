import type { Topic } from '@/types/content';

export const fungsiInvers: Topic = {
  id: 'fungsi-invers',
  slug: 'fungsi-invers',
  title: 'Fungsi Invers',
  subtitle: 'Membalik arah sebuah pemetaan',
  grade: 'XI',
  phase: 'F',
  element: 'aljabar-fungsi',
  featured: true,
  status: 'lengkap',
  estimatedMinutes: 80,
  summary:
    'Memahami domain, kodomain, dan range, mengenali fungsi bijektif, lalu menentukan rumus dan grafik fungsi invers.',
  description:
    'Fungsi invers adalah fungsi yang membalik arah pemetaan: jika $f$ mengubah $x$ menjadi $y$, maka $f^{-1}$ mengubah $y$ kembali menjadi $x$. Topik ini membangun pemahaman domain, kodomain, dan range, mengenali syarat fungsi memiliki invers (bijektif), menurunkan rumus invers fungsi linear dan rasional sederhana, serta membaca hubungan grafik $f$ dan $f^{-1}$ yang saling mencerminkan terhadap garis $y = x$.',
  keywords: [
    'fungsi invers',
    'bijektif',
    'injektif',
    'surjektif',
    'domain',
    'range',
    'pencerminan y=x',
  ],
  prerequisites: ['fungsi-kuadrat'],
  relatedTopics: ['komposisi-fungsi', 'transformasi-fungsi'],
  explorations: ['fungsi-invers-sim'],
  prerequisiteKnowledge: [
    'Pengertian relasi dan fungsi',
    'Notasi fungsi serta cara mensubstitusi nilai ke dalam fungsi',
    'Menyelesaikan persamaan linear dan pecahan sederhana',
  ],
  objectives: [
    { text: 'Peserta didik dapat menjelaskan pengertian domain, kodomain, dan range suatu fungsi.' },
    { text: 'Peserta didik dapat menentukan apakah suatu fungsi bijektif sehingga memiliki invers.' },
    { text: 'Peserta didik dapat menentukan rumus fungsi invers dari fungsi linear dan rasional sederhana.' },
    { text: 'Peserta didik dapat menggambarkan grafik fungsi dan inversnya serta menjelaskan pencerminannya terhadap garis $y=x$.' },
    { text: 'Peserta didik dapat menggunakan fungsi invers untuk menyelesaikan masalah kontekstual sederhana.' },
  ],
  applications: ['konversi-satuan', 'kode-rahasia'],
  sections: [
    {
      id: 'tujuan',
      kind: 'tujuan',
      title: 'Tujuan Pembelajaran',
      body: `Setelah mempelajari topik ini, peserta didik dapat memahami domain, kodomain, dan range sebuah fungsi, mengenali ciri fungsi bijektif, menentukan rumus invers fungsi linear maupun rasional sederhana, menggambar grafik fungsi bersama inversnya, dan menggunakan fungsi invers untuk menyelesaikan masalah sederhana.`,
    },
    {
      id: 'pemantik',
      kind: 'pemantik',
      title: 'Pertanyaan Pemantik',
      body: `Sebuah mesin menerima suhu dalam satuan Celsius dan mengeluarkan suhu dalam Fahrenheit dengan aturan $F = \\dfrac{9}{5}C + 32$.
Jika kita memasukkan $C = 25$, mesin mengeluarkan $F = 77$.
Pertanyaannya: **jika yang diketahui adalah keluaran $F = 77$, dapatkah kita menemukan kembali masukan $C = 25$? Bagaimana caranya?**

Mesin tadi adalah sebuah fungsi. Yang kita cari adalah "mesin balik" yang mengubah arah dari Fahrenheit ke Celsius.`,
      blocks: [
        {
          kind: 'prediction',
          prompt: 'Jika diketahui keluaran $F = 77$, berapakah nilai masukan $C$ semula?',
          options: ['$C = 25$', '$C = 32$', '$C = 45$', '$C = 77$'],
          reveal: `Mesin balik diperoleh dengan menyelesaikan $F = \\dfrac{9}{5}C + 32$ untuk $C$:
$$C = \\frac{5}{9}(F - 32).$$
Untuk $F = 77$ diperoleh $C = \\dfrac{5}{9}(77 - 32) = \\dfrac{5}{9}(45) = 25$. Jadi masukan semula memang dapat ditemukan kembali. Inilah gagasan **fungsi invers**.`,
          saveLabel: 'Simpan dugaan',
        },
      ],
    },
    {
      id: 'prasyarat',
      kind: 'prasyarat',
      title: 'Prasyarat',
      body: `Sebelum melanjutkan, pastikan kamu menguasai:
- pengertian relasi dan fungsi;
- cara mensubstitusi nilai ke dalam rumus fungsi, misalnya $f(2)$ untuk $f(x)=3x-6$;
- menyelesaikan persamaan linear, misalnya $2x+1=7$;
- menyelesaikan persamaan berbentuk pecahan, misalnya $y=\\dfrac{2x+1}{x-3}$.`,
    },
    {
      id: 'konteks',
      kind: 'konteks',
      title: 'Situasi dan Konteks',
      body: `Banyak proses bersifat dua arah. Seorang guru memetakan setiap siswa ke nomor induknya, dan sebaliknya setiap nomor induk menunjuk tepat satu siswa. Kasir memetakan harga ke jumlah bayar, dan kita ingin tahu berapa barang yang bisa dibeli dari sejumlah uang.
Ketika setiap keluaran hanya berasal dari satu masukan, arah pemetaan dapat dibalik. Fungsi yang arahnya dapat dibalik secara sempurna disebut fungsi **bijektif**, dan pembaliknya disebut **fungsi invers**.`,
    },
    {
      id: 'konsep',
      kind: 'konsep',
      title: 'Konsep Inti: Domain, Kodomain, dan Range',
      body: `Suatu fungsi $f: A \\to B$ memetakan setiap anggota **domain** $A$ ke tepat satu anggota **kodomain** $B$. Himpunan semua hasil pemetaan yang benar-benar muncul disebut **range** (daerah hasil), dan range selalu merupakan bagian dari kodomain.
Sebagai contoh, perhatikan $f(x) = 2x + 1$ untuk $x \\in \\{1,2,3\\}$:
- domain: $\\{1,2,3\\}$;
- kodomain: himpunan bilangan real $\\mathbb{R}$;
- range: $\\{3,5,7\\}$ karena $f(1)=3$, $f(2)=5$, dan $f(3)=7$.

Untuk fungsi pada bilangan real, himpunan nilai $x$ yang boleh dimasukkan disebut domain alami. Pada $g(x)=\\dfrac{1}{x-2}$, nilai $x=2$ harus dikeluarkan agar pembilang tidak dibagi nol, sehingga domainnya $x \\neq 2$.`,
      blocks: [
        {
          kind: 'callout',
          variant: 'concept',
          title: 'Inti yang perlu diingat',
          text: 'Domain adalah himpunan masukan, kodomain adalah himpunan tujuan, dan range adalah himpunan hasil yang benar-benar tercapai. Range selalu berada di dalam kodomain.',
        },
        {
          kind: 'match',
          intro: 'Cocokkan istilah dasar pemetaan dengan maknanya.',
          pairs: [
            { left: 'Domain', right: 'Himpunan semua masukan yang boleh dimasukkan' },
            { left: 'Kodomain', right: 'Himpunan tujuan pemetaan' },
            { left: 'Range', right: 'Himpunan hasil yang benar-benar tercapai' },
            { left: 'Bijektif', right: 'Fungsi satu-satu dan pada, sehingga memiliki invers' },
          ],
        },
      ],
    },
    {
      id: 'representasi',
      kind: 'representasi',
      title: 'Representasi Pemetaan',
      body: `Satu fungsi yang sama dapat kita tampilkan dengan beberapa cara:`,
      blocks: [
        {
          kind: 'table',
          caption: 'Tiga cara menyajikan fungsi $f(x)=2x+1$ dengan domain $\\{1,2,3\\}$',
          headers: ['x', '$f(x)=2x+1$', 'Pasangan terurut'],
          rows: [
            ['$1$', '$3$', '$(1,3)$'],
            ['$2$', '$5$', '$(2,5)$'],
            ['$3$', '$7$', '$(3,7)$'],
          ],
        },
        {
          kind: 'tabs',
          items: [
            { label: 'Simbolik', body: 'Fungsi $f(x)=2x+1$ memetakan $x$ ke $2x+1$; inversnya membalik arah pemetaan itu.' },
            { label: 'Tabel', body: 'Tabel pasangan terurut $(x, f(x))$ dapat dibaca terbalik menjadi pasangan $(f(x), x)$ untuk inversnya.' },
            { label: 'Grafik', body: 'Grafik $f^{-1}$ adalah cerminan grafik $f$ terhadap garis $y=x$, karena koordinat tiap titik bertukar.' },
          ],
        },
      ],
    },
    {
      id: 'bijektif',
      kind: 'konsep',
      title: 'Fungsi Bijektif: Syarat Fungsi Punya Invers',
      body: `Agar sebuah fungsi dapat dibalik, setiap anggota kodomain harus menjadi hasil dari **tepat satu** anggota domain. Dua syarat yang harus dipenuhi:

**1. Injektif (satu-satu).** Setiap hasil berbeda berasal dari masukan berbeda. Jika $f(x_1)=f(x_2)$ maka haruslah $x_1=x_2$.

**2. Surjektif (pada).** Setiap anggota kodomain tercapai oleh suatu masukan.

Fungsi yang memenuhi keduanya disebut **bijektif**. Hanya fungsi bijektif yang memiliki fungsi invers.

Sebagai contoh, $f(x)=x^2$ pada domain $\\mathbb{R}$ **bukan** injektif karena $f(2)=f(-2)=4$; satu hasil berasal dari dua masukan berbeda. Namun jika domainnya dibatasi menjadi $x \\geq 0$, fungsinya menjadi satu-satu dan memiliki invers.`,
      blocks: [
        {
          kind: 'callout',
          variant: 'warning',
          title: 'Hati-hati',
          text: 'Menguji grafik: fungsi satu-satu bila setiap garis horizontal memotong grafik paling banyak satu kali. Grafik parabola $y=x^2$ dipotong dua kali oleh garis horizontal $y=4$.',
        },
      ],
    },
    {
      id: 'rumus-invers',
      kind: 'generalisasi',
      title: 'Cara Menentukan Rumus Fungsi Invers',
      body: `Langkah menentukan $f^{-1}(x)$ dari $y=f(x)$:

1. tulis $y = f(x)$;
2. nyatakan $x$ dalam $y$ (jadikan $x$ sebagai subjek rumus);
3. tukar nama $x$ dan $y$;
4. tulis hasilnya sebagai $f^{-1}(x)$.

Fungsi invers memenuhi dua identitas penting:

$$f\\left(f^{-1}(x)\\right) = x \\qquad \\text{dan} \\qquad f^{-1}\\left(f(x)\\right) = x.$$

Kedua identitas ini berguna untuk memeriksa kebenaran jawaban: memasukkan hasil invers ke fungsi asal harus mengembalikan nilai semula.`,
    },
    {
      id: 'grafik',
      kind: 'representasi',
      title: 'Grafik Fungsi dan Inversnya',
      body: `Bacalah titik pada grafik. Jika titik $(a,b)$ terletak pada grafik $f$, maka $f(a)=b$ sehingga $f^{-1}(b)=a$. Artinya titik $(b,a)$ terletak pada grafik $f^{-1}$.

Titik $(a,b)$ dan $(b,a)$ saling bertukar koordinat, sehingga grafik $f$ dan grafik $f^{-1}$ **saling mencerminkan terhadap garis $y = x$**.

Contoh: grafik $f(x)=2x+1$ melalui $(1,3)$. Maka grafik $f^{-1}(x)=\\dfrac{x-1}{2}$ harus melalui titik cerminnya, yaitu $(3,1)$.`,
      blocks: [
        {
          kind: 'table',
          caption: 'Pencerminan titik terhadap garis $y=x$',
          headers: ['Titik pada $f$', 'Titik pada $f^{-1}$'],
          rows: [
            ['$(1,3)$', '$(3,1)$'],
            ['$(2,5)$', '$(5,2)$'],
            ['$(0,1)$', '$(1,0)$'],
          ],
        },
      ],
    },
    {
      id: 'eksplorasi',
      kind: 'eksplorasi',
      title: 'Eksplorasi Fungsi Invers',
      body: `Gunakan simulator untuk memasukkan fungsi linear dan melihat grafik inversnya. Amati bahwa grafik $f$ dan $f^{-1}$ selalu saling mencerminkan terhadap garis $y=x$. Ubah koefisien dan periksa bagaimana kemiringan serta titik potongnya berubah.`,
      blocks: [{ kind: 'exploration', explorationId: 'fungsi-invers-sim' }],
    },
    {
      id: 'contoh',
      kind: 'contoh',
      title: 'Contoh Terbimbing',
      body: `**Contoh 1 (linear).** Tentukan invers dari $f(x)=3x-6$.

*Penyelesaian.* Tulis $y=3x-6$, lalu nyatakan $x$:

$$y = 3x-6 \\Rightarrow 3x = y+6 \\Rightarrow x = \\frac{y+6}{3}.$$

Tukar $x$ dan $y$, sehingga

$$f^{-1}(x) = \\frac{x+6}{3}.$$

*Periksa:* $f(4)=3(4)-6=6$ dan $f^{-1}(6)=\\dfrac{6+6}{3}=4$. Benar.

**Contoh 2 (rasional).** Tentukan invers dari $f(x)=\\dfrac{2x+1}{x-3}$, $x \\neq 3$.

*Penyelesaian.* Tulis $y=\\dfrac{2x+1}{x-3}$, lalu kalikan silang:

$$y(x-3) = 2x+1 \\Rightarrow xy - 3y = 2x+1.$$

Kumpulkan suku yang memuat $x$:

$$xy - 2x = 1 + 3y \\Rightarrow x(y-2) = 1+3y \\Rightarrow x = \\frac{3y+1}{y-2}.$$

Tukar $x$ dan $y$:

$$f^{-1}(x) = \\frac{3x+1}{x-2}, \\qquad x \\neq 2.$$

*Periksa:* $f(4)=\\dfrac{9}{1}=9$ dan $f^{-1}(9)=\\dfrac{28}{7}=4$. Benar.

**Contoh 3 (domain terbatas).** Tentukan invers dari $f(x)=x^2$ dengan domain $x \\geq 0$.

*Penyelesaian.* Karena domain dibatasi pada $x \\geq 0$, fungsi satu-satu. Tulis $y=x^2$ dengan $x \\geq 0$, maka $x=\\sqrt{y}$ (akar positif). Jadi

$$f^{-1}(x) = \\sqrt{x}, \\qquad x \\geq 0.$$`,
    },
    {
      id: 'latihan-dasar',
      kind: 'latihan-dasar',
      title: 'Latihan Dasar',
      level: 'dasar',
      body: `1. Tentukan $f^{-1}(x)$ untuk $f(x)=2x+3$.
2. Tentukan $f^{-1}(x)$ untuk $f(x)=5x-10$.
3. Diketahui $f(x)=2x+3$. Hitunglah $f^{-1}(7)$.
4. Tentukan $f^{-1}(x)$ untuk $f(x)=x^{3}$.`,
      blocks: [
        {
          kind: 'details',
          summary: 'Lihat kunci dan pembahasan',
          text: `1. $y=2x+3 \\Rightarrow x=\\dfrac{y-3}{2}$, jadi $f^{-1}(x)=\\dfrac{x-3}{2}$.
2. $y=5x-10 \\Rightarrow x=\\dfrac{y+10}{5}$, jadi $f^{-1}(x)=\\dfrac{x+10}{5}$.
3. Karena $f(2)=2(2)+3=7$, maka $f^{-1}(7)=2$.
4. $y=x^{3} \\Rightarrow x=\\sqrt[3]{y}$, jadi $f^{-1}(x)=\\sqrt[3]{x}=x^{1/3}$.`,
        },
      ],
    },
    {
      id: 'latihan-cakap',
      kind: 'latihan-cakap',
      title: 'Latihan Cakap',
      level: 'cakap',
      body: `1. Tentukan invers dari $f(x)=\\dfrac{x+2}{x-1}$, $x \\neq 1$.
2. Tentukan invers dari $f(x)=\\dfrac{3x-1}{x+2}$, $x \\neq -2$.
3. Tentukan invers dari $f(x)=x^{2}+1$ dengan domain $x \\geq 0$.
4. Grafik $f$ melalui titik $(5,4)$. Tentukan titik yang pasti dilalui grafik $f^{-1}$ dan jelaskan alasannya.`,
      blocks: [
        {
          kind: 'details',
          summary: 'Lihat kunci dan pembahasan',
          text: `1. $y(x-1)=x+2 \\Rightarrow xy-y=x+2 \\Rightarrow x(y-1)=y+2 \\Rightarrow x=\\dfrac{y+2}{y-1}$, sehingga $f^{-1}(x)=\\dfrac{x+2}{x-1}$. Fungsi ini **invers terhadap dirinya sendiri**: $f^{-1}=f$. Periksa: $f(3)=\\dfrac{5}{2}$ dan $f^{-1}\\!\\left(\\dfrac{5}{2}\\right)=\\dfrac{(5/2)+2}{(5/2)-1}=\\dfrac{9/2}{3/2}=3$.
2. $y(x+2)=3x-1 \\Rightarrow xy+2y=3x-1 \\Rightarrow x(y-3)=-1-2y \\Rightarrow x=\\dfrac{2y+1}{3-y}$, sehingga $f^{-1}(x)=\\dfrac{2x+1}{3-x}$. Periksa: $f(1)=\\dfrac{2}{3}$ dan $f^{-1}\\!\\left(\\dfrac{2}{3}\\right)=\\dfrac{2(2/3)+1}{3-2/3}=\\dfrac{7/3}{7/3}=1$.
3. $y=x^{2}+1 \\Rightarrow x^{2}=y-1 \\Rightarrow x=\\sqrt{y-1}$ (karena $x \\geq 0$), jadi $f^{-1}(x)=\\sqrt{x-1}$ dengan $x \\geq 1$. Periksa: $f(2)=5$ dan $f^{-1}(5)=2$.
4. Karena $f(5)=4$, maka $f^{-1}(4)=5$, sehingga $f^{-1}$ melalui $(4,5)$. Titik ini adalah pencerminan $(5,4)$ terhadap garis $y=x$.`,
        },
      ],
    },
    {
      id: 'latihan-mahir',
      kind: 'latihan-mahir',
      title: 'Latihan Mahir',
      level: 'mahir',
      body: `1. Diketahui $f^{-1}(x)=2x+3$. Tentukan rumus $f(x)$.
2. Buktikan bahwa invers dari $f^{-1}$ adalah $f$ sendiri, yaitu $\\left(f^{-1}\\right)^{-1}=f$.
3. Diketahui $f(x)=2x+3$ dan $f^{-1}(x)=\\dfrac{x-3}{2}$. Tunjukkan bahwa $f^{-1}\\!\\left(f(x)\\right)=x$ untuk setiap $x$.`,
      blocks: [
        {
          kind: 'details',
          summary: 'Lihat pembahasan',
          text: `1. Misal $f^{-1}(x)=y$, maka $y=2x+3$. Untuk memperoleh $f$, tukar peran $x$ dan $y$: $x=2y+3 \\Rightarrow y=\\dfrac{x-3}{2}$. Jadi $f(x)=\\dfrac{x-3}{2}$. Periksa: $f(7)=2$ dan $f^{-1}(2)=2(2)+3=7$.
2. Secara umum, $f^{-1}$ memetakan $y$ kembali ke $x$ bila $f$ memetakan $x$ ke $y$. Menerapkan pembalikan dua kali mengembalikan pemetaan semula, sehingga $\\left(f^{-1}\\right)^{-1}=f$. Untuk memastikannya, invers dari $f^{-1}$ diperoleh dengan menukar $x$ dan $y$ pada $y=f^{-1}(x)$ dan hasilnya adalah rumus $f$.
3. Substitusi langsung: $f^{-1}\\!\\left(f(x)\\right)=f^{-1}(2x+3)=\\dfrac{(2x+3)-3}{2}=\\dfrac{2x}{2}=x$. Terbukti.`,
        },
      ],
    },
    {
      id: 'dunia-nyata',
      kind: 'dunia-nyata',
      title: 'Penerapan di Dunia Nyata',
      body: `Fungsi invers muncul saat kita perlu "membalik" proses. Mengubah Celsius ke Fahrenheit memakai $F=\\dfrac{9}{5}C+32$, sedangkan arah sebaliknya memakai $C=\\dfrac{5}{9}(F-32)$.
Dalam kriptografi sederhana, pesan disandikan dengan suatu fungsi dan diterjemahkan kembali menggunakan fungsi inversnya. Pada ekonomi, fungsi permintaan memetakan harga ke jumlah barang, dan fungsi inversnya memetakan jumlah barang ke harga.
Latihan pemodelan lebih lanjut dapat ditemukan pada topik [Aplikasi](/aplikasi).`,
    },
    {
      id: 'kesalahan-umum',
      kind: 'kesalahan-umum',
      title: 'Kesalahan Umum',
      body: `**1. Menganggap $f^{-1}(x)$ sama dengan $\\dfrac{1}{f(x)}$.** Keduanya sangat berbeda. Untuk $f(x)=2x+3$, $f^{-1}(x)=\\dfrac{x-3}{2}$ bukan $\\dfrac{1}{2x+3}$.
**2. Lupa menukar $x$ dan $y$.** Jika langkah terakhir tidak menukar nama variabel, rumus invers akan salah.
**3. Tidak memeriksa syarat bijektif.** $f(x)=x^2$ pada $\\mathbb{R}$ tidak memiliki invers; perlu pembatasan domain seperti $x \\geq 0$.
**4. Mengabaikan domain hasil akhir.** Pada $f(x)=\\dfrac{2x+1}{x-3}$, nilai $x=3$ dikecualikan; pada inversnya, nilai $x=2$ juga harus dikecualikan.`,
    },
    {
      id: 'refleksi',
      kind: 'refleksi',
      title: 'Refleksi',
      body: `Jawab dengan jujur:
1. Bagaimana kamu menjelaskan kepada teman mengapa $f^{-1}(x) \\neq \\dfrac{1}{f(x)}$?
2. Kapan sebuah fungsi **tidak** memiliki invers, dan bagaimana cara memperbaikinya?
3. Langkah mana yang paling sering membuatmu keliru ketika menurunkan rumus invers, dan bagaimana kamu akan menghindarinya?`,
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
            ['Syarat punya invers', 'fungsi bersifat bijektif (injektif dan surjektif)'],
            ['Langkah mencari invers', '$y=f(x) \\to$ nyatakan $x$ $\\to$ tukar $x$ dan $y$'],
            ['Identitas invers', '$f(f^{-1}(x))=x$ dan $f^{-1}(f(x))=x$'],
            ['Invers linear $ax+b$', '$f^{-1}(x)=\\dfrac{x-b}{a}$'],
            ['Invers rasional $\\dfrac{ax+b}{cx+d}$', '$f^{-1}(x)=\\dfrac{-dx+b}{cx-a}$'],
            ['Hubungan grafik', 'grafik $f$ dan $f^{-1}$ bercermin terhadap $y=x$'],
          ],
        },
      ],
    },
    {
      id: 'evaluasi',
      kind: 'evaluasi',
      title: 'Evaluasi',
      body: `Kerjakan kuis topik ini untuk memeriksa pemahamanmu. Buka halaman [Latihan & Asesmen](/latihan) lalu pilih topik **Fungsi Invers**.
`,
    },
  ],
};
