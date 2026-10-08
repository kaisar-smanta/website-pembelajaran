import type { Topic } from '@/types/content';

export const fungsiEksponensial: Topic = {
  id: 'fungsi-eksponensial',
  slug: 'fungsi-eksponensial',
  title: 'Fungsi Eksponensial',
  subtitle: 'Pertumbuhan dan peluruhan yang berlipat',
  grade: 'X',
  phase: 'E',
  element: 'aljabar-fungsi',
  featured: true,
  status: 'lengkap',
  estimatedMinutes: 90,
  summary:
    'Memahami bentuk dan grafik fungsi eksponensial, pertumbuhan dan peluruhan, persamaan eksponen, serta penerapannya dalam pemodelan.',
  description:
    'Fungsi eksponensial menggambarkan perubahan yang berlipat dengan faktor tetap: pertumbuhan populasi, bunga majemuk, dan peluruhan zat. Pada topik ini kita mempelajari bentuk $f(x)=a\\cdot b^{x}$, menggambar grafik dan asimtotnya, membedakan pertumbuhan dan peluruhan, menyelesaikan persamaan eksponen, serta memodelkan situasi nyata dan menafsirkan hasilnya.',
  keywords: [
    'fungsi eksponensial',
    'pertumbuhan',
    'peluruhan',
    'asimtot',
    'persamaan eksponen',
    'grafik',
  ],
  prerequisites: ['eksponen'],
  relatedTopics: ['bunga-majemuk', 'fungsi-kuadrat'],
  prerequisiteKnowledge: [
    'Sifat-sifat eksponen dan pangkat negatif',
    'Menggambar titik pada bidang koordinat',
    'Menyelesaikan persamaan linear sederhana',
  ],
  objectives: [
    { text: 'Menjelaskan bentuk fungsi eksponensial dan peran basisnya.' },
    { text: 'Menggambar grafik fungsi eksponensial beserta asimtotnya.' },
    { text: 'Membedakan pertumbuhan dan peluruhan eksponensial.' },
    { text: 'Menyelesaikan persamaan eksponen dengan menyamakan basis.' },
    { text: 'Memodelkan dan menafsirkan masalah pertumbuhan serta peluruhan.' },
  ],
  explorations: ['fungsi-eksponensial-grafik'],
  applications: ['pertumbuhan-populasi', 'peluruhan-zat'],
  sections: [
    {
      id: "tujuan",
      kind: "tujuan",
      title: "Tujuan Pembelajaran",
      body: "Setelah mempelajari topik ini, peserta didik dapat menjelaskan bentuk fungsi eksponensial, menggambar grafik disertai asimtot dan pergeserannya, membedakan pertumbuhan dan peluruhan, menyelesaikan persamaan eksponen dengan menyamakan basis, serta memodelkan masalah pertumbuhan dan peluruhan.",
    },
    {
      id: "pemantik",
      kind: "pemantik",
      title: "Pertanyaan Pemantik",
      body: `Sebuah kultur bakteri mula-mula berisi $500$ sel. Setiap $20$ menit, populasinya berlipat dua. Jika $t$ dinyatakan dalam menit, populasi mengikuti

$$N(t) = 500 \\cdot 2^{\\,t/20}.$$

Dua jam kemudian, berapa banyak bakteri? Sebelum menghitung, kira-kira apakah jawabannya ratusan, ribuan, atau puluhan ribu?`,
      blocks: [
        {
          kind: "prediction",
          prompt: "Dua jam kemudian, kira-kira berapa banyak bakteri?",
          options: [
            "Ratusan",
            "Ribuan",
            "Puluhan ribu",
          ],
          reveal: "Dua jam sama dengan $120$ menit, yaitu $120/20=6$ selang waktu. Maka $N(120)=500\\cdot2^{6}=500\\cdot64=32.000$ sel. Jauh lebih besar dari dugaan \"hanya beberapa ribu\" — inilah ciri pertumbuhan berlipat yang cepat.",
          saveLabel: "Simpan dugaan",
        },
      ],
    },
    {
      id: "prasyarat",
      kind: "prasyarat",
      title: "Prasyarat",
      body: `Sebelum melanjutkan, pastikan kamu menguasai:
- sifat eksponen, khususnya $a^{m}\\cdot a^{n}=a^{m+n}$ dan $a^{-n}=\\dfrac{1}{a^{n}}$;
- menyatakan bilangan sebagai pangkat dari basis tertentu, misalnya $32=2^{5}$ dan $27=3^{3}$;
- menyelesaikan persamaan linear satu variabel.`,
    },
    {
      id: "konteks",
      kind: "konteks",
      title: "Situasi dan Konteks",
      body: `Pertumbuhan bakteri, penyebaran virus, dan bunga majemuk mengikuti pola yang berlipat: setiap periode mengalikan nilai sebelumnya dengan faktor tetap. Sebaliknya, peluruhan zat radioaktif dan penyusutan nilai barang mengikuti pola menyusut dengan faktor tetap yang kurang dari satu.

Fungsi eksponensial merangkum kedua pola itu dalam satu bentuk. Memahaminya membantu kita memperkirakan kapan suatu nilai berlipat atau berkurang separuh.`,
    },
    {
      id: "konsep",
      kind: "konsep",
      title: "Konsep Inti: Bentuk Fungsi Eksponensial",
      body: `Fungsi eksponensial adalah fungsi yang variabel bebasnya muncul pada eksponen:

$$f(x) = a \\cdot b^{x}, \\qquad a \\neq 0,\\ b > 0,\\ b \\neq 1.$$

Di sini $b$ disebut **basis**. Syarat $b>0$ dan $b\\neq1$ penting: basis negatif menghasilkan nilai tak real untuk eksponen pecahan, sedangkan $b=1$ membuat fungsinya konstan.

Karena $f(0)=a\\cdot b^{0}=a$, nilai $a$ adalah titik potong grafik dengan sumbu-$y$. Fungsi ini terdefinisi untuk **semua** bilangan real $x$, dan untuk $a>0$ hasilnya selalu **positif**.`,
      blocks: [
        {
          kind: "callout",
          variant: "concept",
          title: "Inti yang perlu diingat",
          text: "Pada fungsi eksponensial, **variabel berada di eksponen**, bukan di basis. Inilah pembeda utamanya dari fungsi kuadrat $ax^{2}$.",
        },
        {
          kind: "match",
          intro: "Cocokkan istilah berikut dengan maknanya.",
          pairs: [
            {
              left: "Basis",
              right: "Bilangan $b$ yang dipangkatkan pada $f(x)=a\\cdot b^{x}$",
            },
            {
              left: "Pertumbuhan",
              right: "Terjadi saat $b>1$ sehingga grafik monoton naik",
            },
            {
              left: "Peluruhan",
              right: "Terjadi saat $0<b<1$ sehingga grafik monoton turun",
            },
            {
              left: "Asimtot horizontal",
              right: "Garis $y=0$ yang didekati grafik tetapi tidak disentuh",
            },
          ],
        },
        {
          kind: "flip-cards",
          intro: "Bedakan peran setiap bagian fungsi.",
          cards: [
            {
              front: "Basis $b$",
              back: "Faktor pengali tiap langkah; $b>1$ naik, $0<b<1$ turun",
            },
            {
              front: "Koefisien $a$",
              back: "Nilai awal $f(0)=a$",
            },
            {
              front: "Asimtot datar",
              back: "Garis $y=0$ yang didekati grafik",
            },
            {
              front: "Peluruhan",
              back: "Terjadi ketika $0<b<1$",
            },
          ],
        },
      ],
    },
    {
      id: "representasi",
      kind: "representasi",
      title: "Representasi",
      body: "Tabel nilai membantu melihat pola berlipat pada $f(x)=2^{x}$.",
      blocks: [
        {
          kind: "table",
          caption: "Nilai $f(x)=2^{x}$",
          headers: [
            "$x$",
            "-2",
            "-1",
            "0",
            "1",
            "2",
            "3",
          ],
          rows: [
            [
              "$f(x)$",
              "$\\tfrac14$",
              "$\\tfrac12$",
              "1",
              "2",
              "4",
              "8",
            ],
          ],
        },
        {
          kind: "callout",
          variant: "info",
          title: "Yang terlihat dari tabel",
          text: "Setiap kenaikan $x$ sebesar $1$ mengalikan nilai dengan $2$. Untuk $x$ negatif, nilainya mengecil mendekati nol tetapi tidak pernah negatif — inilah asimtot.",
        },
        {
          kind: "tabs",
          items: [
            {
              label: "Simbolik",
              body: "$f(x)=2^{x}$. Variabel $x$ berada di eksponen dan basisnya tetap, yaitu $2$.",
            },
            {
              label: "Tabel",
              body: "Nilai pada tabel berlipat dua setiap $x$ bertambah satu, dan mengecil mendekati nol untuk $x$ negatif.",
            },
            {
              label: "Grafik",
              body: "Kurva naik dari kiri ke kanan, melalui $(0,1)$, dan mendekati sumbu-$x$ sebagai asimtot tanpa menyentuhnya.",
            },
          ],
        },
      ],
    },
    {
      id: "generalisasi",
      kind: "generalisasi",
      title: "Grafik, Monotonisitas, dan Asimtot",
      body: `Bentuk grafik ditentukan oleh basis $b$:
- jika $b>1$, fungsi **naik** (monoton naik) dan disebut **pertumbuhan** — makin ke kanan nilainya makin besar;
- jika $0<b<1$, fungsi **turun** (monoton turun) dan disebut **peluruhan**.

Pada kedua kasus, grafik mendekati sumbu-$x$ tetapi tidak pernah menyentuhnya. Garis $y=0$ adalah **asimtot horizontal**.

Untuk $a>0$, domain fungsi adalah seluruh bilangan real dan daerah hasilnya $y>0$. Titik $(0,a)$ selalu dilalui grafik, dan grafik tidak pernah memotong sumbu-$x$.`,
      blocks: [
        {
          kind: "callout",
          variant: "warning",
          title: "Hati-hati",
          text: "$f(x)=x^{2}$ **bukan** fungsi eksponensial (variabelnya di basis), sedangkan $f(x)=2^{x}$ bukan fungsi kuadrat. Bentuk grafik keduanya berbeda: parabola simetris versus kurva yang terus menanjak.",
        },
      ],
    },
    {
      id: "eksplorasi",
      kind: "eksplorasi",
      title: "Eksplorasi",
      body: "Gunakan penggeser untuk mengubah koefisien $a$ dan basis $b$ pada $f(x)=a\\cdot b^{x}$. Bandingkan grafik untuk $b>1$ (pertumbuhan) dan $0<b<1$ (peluruhan), lalu amati kapan grafik naik atau turun.",
      blocks: [
        {
          kind: "exploration",
          explorationId: "fungsi-eksponensial-grafik",
        },
      ],
    },
    {
      id: "rumus",
      kind: "rumus",
      title: "Pertumbuhan, Peluruhan, dan Pergeseran",
      body: `**Faktor pertumbuhan dan peluruhan.** Jika suatu besaran berubah sebesar $r$ per periode, faktor pengalinya adalah
- pertumbuhan: $b = 1 + r$, misalnya naik $8\\%$ memberi $b=1{,}08$;
- peluruhan: $b = 1 - r$, misalnya turun $10\\%$ memberi $b=0{,}9$.

Modelnya $f(t)=a\\cdot b^{t}$ dengan $a$ nilai awal dan $t$ banyak periode.

**Pergeseran grafik.** Dari grafik dasar $y=b^{x}$:
- $y = b^{x} + c$ bergeser naik sebanyak $c$; asimtotnya menjadi $y=c$;
- $y = b^{x-h}$ bergeser ke kanan sebanyak $h$;
- $y = -b^{x}$ dicerminkan terhadap sumbu-$x$ (nilainya menjadi negatif).

**Persamaan eksponen.** Jika $b^{f(x)} = b^{g(x)}$ dengan $b>0$ dan $b\\neq1$, maka $f(x)=g(x)$. Menyamakan basis adalah kunci.`,
    },
    {
      id: "contoh",
      kind: "contoh",
      title: "Contoh Terbimbing",
      body: `**Contoh 1.** Diberikan $f(x)=3\\cdot2^{x}$. Hitung $f(0)$, $f(1)$, $f(3)$, dan $f(-1)$.

*Penyelesaian.* $f(0)=3\\cdot1=3$; $f(1)=3\\cdot2=6$; $f(3)=3\\cdot8=24$; $f(-1)=3\\cdot\\tfrac12=\\tfrac32$.

**Contoh 2.** Selesaikan $3^{2x-1}=27$.

*Penyelesaian.* Nyatakan $27=3^{3}$, maka $3^{2x-1}=3^{3}$, sehingga $2x-1=3 \\Rightarrow x=2$.

**Contoh 3.** Selesaikan $4^{x}=8^{x-1}$.

*Penyelesaian.* Ubah ke basis $2$: $4^{x}=(2^{2})^{x}=2^{2x}$ dan $8^{x-1}=(2^{3})^{x-1}=2^{3x-3}$. Maka $2x=3x-3 \\Rightarrow x=3$. Periksa: $4^{3}=64$ dan $8^{2}=64$ ✓.

**Contoh 4 (pemodelan).** Modal Rp5.000.000 ditabung dengan bunga majemuk $10\\%$ per tahun. Tentukan saldo setelah $3$ tahun.

*Penyelesaian.* $M(t)=5.000.000(1{,}1)^{t}$, maka $M(3)=5.000.000\\cdot1{,}331=6.655.000$. Saldo menjadi **Rp6.655.000**.`,
      blocks: [
        {
          kind: "step-reveal",
          intro: "Mari selesaikan $4^{x}=8^{x-1}$ dengan menyamakan basis, satu langkah sekaligus.",
          steps: [
            {
              title: "Ubah ke basis 2",
              text: "$4^{x}=(2^{2})^{x}=2^{2x}$ dan $8^{x-1}=(2^{3})^{x-1}=2^{3x-3}$.",
            },
            {
              title: "Samakan eksponen",
              text: "Karena basisnya sama, berlaku $2x=3x-3$.",
            },
            {
              title: "Selesaikan",
              text: "$2x=3x-3 \\Rightarrow x=3$.",
            },
            {
              title: "Periksa",
              text: "$4^{3}=64$ dan $8^{2}=64$, jadi $x=3$ memenuhi.",
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
      body: `1. Diketahui $f(x)=4^{x}$. Hitung $f(3)$.

2. Diketahui $f(x)=2\\cdot3^{x}$. Hitung $f(2)$.

3. Selesaikan $5^{x}=125$.

4. Tentukan asimtot horizontal $f(x)=3^{x}-2$.

5. Tentukan apakah fungsi berikut menggambarkan pertumbuhan atau peluruhan: $f(x)=0{,}6^{x}$, $g(x)=1{,}5^{x}$, $h(x)=2^{x}$.`,
      blocks: [
        {
          kind: "details",
          summary: "Lihat kunci dan pembahasan",
          text: `1. $f(3)=4^{3}=64$.
2. $f(2)=2\\cdot3^{2}=2\\cdot9=18$.
3. $125=5^{3}$, maka $x=3$.
4. Grafik $y=3^{x}$ bergeser turun $2$ satuan, sehingga asimtotnya $y=-2$.
5. Karena $0<b<1$, $f(x)=0{,}6^{x}$ **peluruhan**; karena $b>1$, $g(x)=1{,}5^{x}$ dan $h(x)=2^{x}$ **pertumbuhan**.`,
        },
      ],
    },
    {
      id: "latihan-cakap",
      kind: "latihan-cakap",
      title: "Latihan Cakap",
      level: "cakap",
      body: `1. Selesaikan $9^{x+1}=27^{x}$.

2. Selesaikan $2^{x^{2}-3x}=16$.

3. Populasi kota $500$ jiwa tumbuh $8\\%$ per tahun. Tentukan populasi setelah $10$ tahun (bulatkan ke satuan terdekat).

4. Konsentrasi obat $120$ mg/L berkurang setengah setiap $6$ jam. Berapa konsentrasinya setelah $18$ jam?

5. Selesaikan $2^{2x}-5\\cdot2^{x}+4=0$.`,
      blocks: [
        {
          kind: "details",
          summary: "Lihat kunci dan pembahasan",
          text: `1. $9^{x+1}=3^{2x+2}$ dan $27^{x}=3^{3x}$, maka $2x+2=3x \\Rightarrow x=2$.
2. $16=2^{4}$, maka $x^{2}-3x=4 \\Rightarrow x^{2}-3x-4=0 \\Rightarrow (x-4)(x+1)=0$, jadi $x=4$ atau $x=-1$.
3. $N(t)=500(1{,}08)^{t}$. Karena $1{,}08^{10}\\approx2{,}1589$, maka $N(10)\\approx500\\cdot2{,}1589\\approx1079$ jiwa.
4. $C(t)=120\\left(\\tfrac12\\right)^{t/6}$. Untuk $t=18$: $120\\left(\\tfrac12\\right)^{3}=120\\cdot\\tfrac18=15$ mg/L.
5. Misal $u=2^{x}>0$. Maka $u^{2}-5u+4=0 \\Rightarrow (u-1)(u-4)=0$, jadi $u=1$ atau $u=4$. Dari $2^{x}=1$ diperoleh $x=0$; dari $2^{x}=4$ diperoleh $x=2$.`,
        },
      ],
    },
    {
      id: "latihan-mahir",
      kind: "latihan-mahir",
      title: "Latihan Mahir",
      level: "mahir",
      body: `1. Selesaikan $3^{2x}-10\\cdot3^{x}+9=0$.

2. Modal Rp5.000.000 tumbuh dengan bunga majemuk $6\\%$ per tahun. Setelah berapa tahun nilainya menjadi dua kali lipat? (Petunjuk: gunakan $1{,}06^{11}\\approx1{,}90$ dan $1{,}06^{12}\\approx2{,}01$.)

3. Buktikan bahwa $f(x)=b^{x}$ dengan $b>0$ selalu bernilai positif untuk setiap bilangan real $x$.

4. Sebuah zat radioaktif berkurang setengah setiap $8$ tahun. Tentukan bagian zat yang tersisa setelah $24$ tahun.

5. Jelaskan transformasi grafik $f(x)=2^{x+1}-3$ dari grafik $y=2^{x}$, lalu tentukan asimtot dan titik potong sumbu-$y$-nya.`,
      blocks: [
        {
          kind: "details",
          summary: "Lihat pembahasan",
          text: `1. Misal $u=3^{x}>0$. $u^{2}-10u+9=0 \\Rightarrow (u-1)(u-9)=0$, jadi $u=1$ atau $u=9$. Maka $x=0$ atau $x=2$.
2. Cari $t$ dengan $(1{,}06)^{t}=2$. Karena $1{,}06^{11}\\approx1{,}90<2$ dan $1{,}06^{12}\\approx2{,}01>2$, nilai dua kali lipat tercapai pada tahun ke-$12$.
3. Untuk $x$ bulat, $b^{x}>0$ jelas dari definisi; untuk $x=\\tfrac{m}{n}$, $b^{m/n}=\\sqrt[n]{b^{m}}$ dengan $b^{m}>0$ sehingga akarnya positif; untuk $x$ real, $b^{x}$ didefinisikan sebagai limit nilai positif. Karena itu $b^{x}$ selalu positif.
4. Setelah $24$ tahun ada $24/8=3$ selang paruh, sehingga tersisa $\\left(\\tfrac12\\right)^{3}=\\tfrac18$ bagian.
5. Grafik bergeser ke kiri $1$ satuan (dari $2^{x+1}$) lalu turun $3$ satuan. Asimtot $y=-3$. Titik potong sumbu-$y$: $f(0)=2^{1}-3=2-3=-1$, yaitu $(0,-1)$.`,
        },
      ],
    },
    {
      id: "dunia-nyata",
      kind: "dunia-nyata",
      title: "Penerapan di Dunia Nyata",
      body: `Fungsi eksponensial dipakai untuk memodelkan pertumbuhan populasi, penyebaran penyakit, bunga majemuk, dan peluruhan zat radioaktif maupun obat dalam tubuh. Modelnya selalu berbentuk nilai awal dikali faktor tetap yang dipangkatkan banyak periode.

Untuk contoh lengkap, lihat [Pertumbuhan Populasi Bakteri](/aplikasi/pertumbuhan-populasi) dan [Peluruhan Zat dalam Darah](/aplikasi/peluruhan-zat).`,
    },
    {
      id: "kesalahan-umum",
      kind: "kesalahan-umum",
      title: "Kesalahan Umum",
      body: `**1. Mengira $2^{x+1}=2^{x}+1$.** Sifat eksponen bekerja pada **perkalian**, bukan penjumlahan. Yang benar $2^{x+1}=2\\cdot2^{x}$, bukan $2^{x}+1$.

**2. Menyamakan basis tanpa memeriksa syarat.** Menyamakan eksponen hanya sah bila basis sama, $b>0$, dan $b\\neq1$. Untuk $b=1$, semua nilai $x$ benar.

**3. Menukar pertumbuhan dan peluruhan.** Basis $b>1$ berarti **pertumbuhan**; $0<b<1$ berarti **peluruhan**. Jangan terbalik.

**4. Mengganggap grafik memotong sumbu-$x$.** Untuk $a>0$, $b^{x}$ tidak pernah nol; sumbu-$x$ hanyalah asimtot.`,
      blocks: [
        {
          kind: "spot-mistake",
          intro: "Seorang siswa menyederhanakan $2^{x+1}$. Klik langkah yang keliru.",
          steps: [
            "Tulis $2^{x+1}$ sebagai hasil perkalian sesuai sifat pangkat.",
            "Gunakan $a^{m+n}=a^{m}\\cdot a^{n}$, sehingga $2^{x+1}=2^{x}\\cdot2^{1}$.",
            "Karena $2^{1}=2$, hasilnya $2\\cdot2^{x}$.",
            "Karena eksponennya dijumlahkan, hasilnya juga $2^{x}+2$.",
          ],
          wrongIndex: 3,
          explanation: "Sifat eksponen bekerja pada **perkalian**, bukan penjumlahan. Hasil yang benar adalah $2^{x+1}=2\\cdot2^{x}$, bukan $2^{x}+2$.",
        },
      ],
    },
    {
      id: "refleksi",
      kind: "refleksi",
      title: "Refleksi",
      blocks: [
        {
          kind: "reflection",
          prompts: [
            "Apa perbedaan penting antara fungsi kuadrat dan fungsi eksponensial?",
            "Bagaimana kamu menentukan apakah suatu model menggambarkan pertumbuhan atau peluruhan?",
            "Mengapa besaran yang tumbuh eksponensial akhirnya dapat melampaui besaran yang tumbuh linear?",
            "Mengapa sebuah besaran yang tumbuh eksponensial akhirnya bisa melampaui besaran yang tumbuh linear?",
          ],
          confidenceLabel: "Seberapa yakin kamu membedakan pertumbuhan dan peluruhan?",
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
            "Bentuk / Sifat",
          ],
          rows: [
            [
              "Bentuk umum",
              "$f(x)=a\\cdot b^{x},\\ b>0,\\ b\\neq1$",
            ],
            [
              "Pertumbuhan",
              "$b>1$, grafik naik",
            ],
            [
              "Peluruhan",
              "$0<b<1$, grafik turun",
            ],
            [
              "Asimtot dasar",
              "$y=0$",
            ],
            [
              "Pergeseran vertikal",
              "$y=b^{x}+c$, asimtot $y=c$",
            ],
            [
              "Titik potong sumbu-$y$",
              "$(0,a)$",
            ],
            [
              "Persamaan eksponen",
              "$b^{f(x)}=b^{g(x)} \\Rightarrow f(x)=g(x)$",
            ],
          ],
        },
      ],
    },
    {
      id: "evaluasi",
      kind: "evaluasi",
      title: "Evaluasi",
      body: "Kerjakan kuis topik ini untuk memeriksa pemahamanmu. Buka halaman [Latihan & Asesmen](/latihan) lalu pilih topik **Fungsi Eksponensial**.",
    },
  ],
};
