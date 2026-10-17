import type { Topic } from '@/types/content';

export const fungsiEksponensial: Topic = {
  id: 'fungsi-eksponensial',
  slug: 'fungsi-eksponensial',
  title: 'Fungsi Eksponensial',
  subtitle: 'Pertumbuhan dan peluruhan yang berlipat',
  grade: 'X',
  phase: 'E',
  element: 'aljabar-fungsi',
  status: 'lengkap',
  estimatedMinutes: 90,
  summary:
    'Memahami bentuk dan grafik fungsi eksponensial, perilaku pertumbuhan dan peluruhan, serta penerapannya dalam pemodelan.',
  description:
    'Fungsi eksponensial menggambarkan perubahan yang berlipat dengan faktor tetap: pertumbuhan populasi, bunga majemuk, dan peluruhan zat. Pada topik ini kita mempelajari bentuk $f(x)=a\\cdot b^{x}$, menggambar grafik dan asimtotnya, menelaah perilaku grafik pada tiap nilai basis, membedakan pertumbuhan dan peluruhan, serta memodelkan dan menafsirkan situasi nyata. Penyelesaian persamaan eksponen dibahas terpisah pada topik Persamaan Eksponen dan Logaritma.',
  keywords: [
    'fungsi eksponensial',
    'pertumbuhan',
    'peluruhan',
    'asimtot',
    'faktor pertumbuhan',
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
    { text: 'Menganalisis pengaruh parameter $a$ dan $b$ terhadap grafik serta perilaku $f(x)=a\\cdot b^{x}$.' },
    { text: 'Memodelkan dan menafsirkan masalah pertumbuhan serta peluruhan.' },
  ],
  applications: ['pertumbuhan-populasi', 'peluruhan-zat'],
  sections: [
    {
      id: "tujuan",
      kind: "tujuan",
      title: "Tujuan Pembelajaran",
      body: "Setelah mempelajari topik ini, peserta didik dapat menjelaskan bentuk fungsi eksponensial, menggambar grafik disertai asimtot dan pergeserannya, membedakan pertumbuhan dan peluruhan, menganalisis pengaruh parameter $a$ dan $b$, serta memodelkan masalah pertumbuhan dan peluruhan.",
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
          reveal: "Dua jam sama dengan $120$ menit, yaitu $120/20=6$ selang waktu. Maka $N(120)=500\\cdot2^{6}=500\\cdot64=32.000$ sel. Jauh lebih besar dari dugaan \"hanya beberapa ribu\". Inilah ciri pertumbuhan berlipat yang cepat.",
          saveLabel: "Simpan dugaan",
        },
      ],
    },
    {
      id: "prasyarat",
      kind: "prasyarat",
      title: "Prasyarat",
      body: `Topik ini melanjutkan [Eksponen dan Bentuk Akar](/matematika/kelas/X/bilangan/eksponen) ke wilayah fungsi. Pastikan kamu sudah bisa:
- memakai sifat-sifat eksponen (ringkasannya ada pada topik Eksponen) secara luwes;
- menyatakan bilangan sebagai pangkat dari basis tertentu, seperti $32=2^{5}$ dan $27=3^{3}$;
- membaca koordinat titik pada bidang kartesius.`,
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
      questionIds: ['fe-01'],
      body: `Fungsi eksponensial adalah fungsi yang variabel bebasnya muncul pada eksponen:

$$f(x) = a \\cdot b^{x}, \\qquad a \\neq 0,\\ b > 0,\\ b \\neq 1.$$

Di sini $b$ disebut **basis**. Syarat $b>0$ dan $b\\neq1$ penting: basis negatif menghasilkan nilai tak real untuk eksponen pecahan, sedangkan $b=1$ membuat fungsinya konstan.

Karena $f(0)=a\\cdot b^{0}=a$, nilai $a$ adalah titik potong grafik dengan sumbu-$y$. Fungsi ini terdefinisi untuk **semua** bilangan real $x$, dan untuk $a>0$ hasilnya selalu **positif**.`,
      blocks: [
        {
          kind: "callout",
          variant: "concept",
          title: "Variabel di eksponen, bukan di basis",
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
          text: "Setiap kenaikan $x$ sebesar $1$ mengalikan nilai dengan $2$. Untuk $x$ negatif, nilainya mengecil mendekati nol tetapi tidak pernah negatif. Inilah asimtot.",
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
- jika $b>1$, fungsi **naik** (monoton naik) dan disebut **pertumbuhan**: makin ke kanan nilainya makin besar;
- jika $0<b<1$, fungsi **turun** (monoton turun) dan disebut **peluruhan**.

Pada kedua kasus, grafik mendekati sumbu-$x$ tetapi tidak pernah menyentuhnya. Garis $y=0$ adalah **asimtot horizontal**.

Untuk $a>0$, domain fungsi adalah seluruh bilangan real dan daerah hasilnya $y>0$. Titik $(0,a)$ selalu dilalui grafik, dan grafik tidak pernah memotong sumbu-$x$.`,
      blocks: [
        {
          kind: "figure",
          alt: "Grafik fungsi eksponensial y sama dengan 2 pangkat x yang naik, dan y sama dengan setengah pangkat x yang turun, keduanya melalui titik nol koma satu dan mendekati sumbu x sebagai asimtot y sama dengan nol.",
          caption: "Pertumbuhan $y=2^{x}$ (garis penuh) dan peluruhan $y=\\left(\\tfrac12\\right)^{x}$ (garis putus-putus). Keduanya melalui $(0,1)$ dan mendekati asimtot mendatar $y=0$.",
          svg: '<svg viewBox="0 0 320 240" aria-hidden="true" role="presentation"><defs><marker id="fig-feks-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0,0 L 10,5 L 0,10 z" fill="currentColor"/></marker></defs><line x1="20" y1="190" x2="300" y2="190" stroke="currentColor" stroke-width="1.5" marker-end="url(#fig-feks-arrow)"/><line x1="50" y1="215" x2="50" y2="20" stroke="currentColor" stroke-width="1.5" marker-end="url(#fig-feks-arrow)"/><polyline points="20,175 50,160 65,147.6 80,130 95,105.2 110,70 118,48 124,30" fill="none" stroke="currentColor" stroke-width="2.2"/><polyline points="20,130 50,160 80,175 110,182.5 140,186.3 170,188.1 200,189.1 230,189.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-dasharray="6 3"/><circle cx="50" cy="160" r="3" fill="currentColor"/><text x="57" y="156" font-size="12" fill="currentColor">(0,1)</text><text x="128" y="58" font-size="12" fill="currentColor">y = 2^x</text><text x="150" y="176" font-size="12" fill="currentColor">y = (1/2)^x</text><text x="246" y="184" font-size="12" fill="currentColor">y = 0</text><text x="296" y="208" font-size="12" fill="currentColor">x</text><text x="34" y="30" font-size="12" fill="currentColor">y</text></svg>',
        },
        {
          kind: "callout",
          variant: "warning",
          title: "Bukan eksponensial: variabel di basis",
          text: "$f(x)=x^{2}$ **bukan** fungsi eksponensial (variabelnya di basis), sedangkan $f(x)=2^{x}$ bukan fungsi kuadrat. Bentuk grafik keduanya berbeda: parabola simetris versus kurva yang terus menanjak.",
        },
        {
          kind: "figure",
          alt: "Grafik garis linear y sama dengan tiga x dan kurva eksponensial y sama dengan dua pangkat x; kurva eksponensial awalnya di bawah lalu menyalip garis linear di sekitar x sama dengan tiga koma enam.",
          caption: "Pertumbuhan linear $y=3x$ dan pertumbuhan eksponensial $y=2^{x}$. Awalnya garis lurus lebih tinggi, tetapi kurva eksponensial menyalipnya di sekitar $x\\approx 3{,}6$ dan terus meninggalkannya.",
          svg: '<svg viewBox="0 0 320 200" aria-hidden="true" role="presentation"><line x1="50" y1="185" x2="300" y2="185" stroke="currentColor" stroke-width="1.4"/><line x1="50" y1="185" x2="50" y2="20" stroke="currentColor" stroke-width="1.4"/><line x1="50" y1="185" x2="250" y2="65" stroke="currentColor" stroke-width="2.2"/><polyline points="50,175 100,165 150,145 200,105 250,25" fill="none" stroke="currentColor" stroke-width="2.2" stroke-dasharray="6 3"/><circle cx="50" cy="175" r="3" fill="currentColor"/><circle cx="100" cy="165" r="3" fill="currentColor"/><circle cx="150" cy="145" r="3" fill="currentColor"/><circle cx="200" cy="105" r="3" fill="currentColor"/><circle cx="250" cy="25" r="3" fill="currentColor"/><text x="252" y="82" font-size="11" fill="currentColor">y = 3x</text><text x="146" y="122" font-size="11" fill="currentColor">y = 2^x</text><text x="294" y="181" font-size="11" fill="currentColor">x</text><text x="36" y="26" font-size="11" fill="currentColor">y</text><text x="50" y="197" font-size="10" text-anchor="middle" fill="currentColor">0</text><text x="100" y="197" font-size="10" text-anchor="middle" fill="currentColor">1</text><text x="150" y="197" font-size="10" text-anchor="middle" fill="currentColor">2</text><text x="200" y="197" font-size="10" text-anchor="middle" fill="currentColor">3</text><text x="250" y="197" font-size="10" text-anchor="middle" fill="currentColor">4</text></svg>',
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
- pertumbuhan: $b = 1 + r$; kenaikan $8\\%$ memberi $b=1{,}08$;
- peluruhan: $b = 1 - r$; penurunan $10\\%$ memberi $b=0{,}9$.

Modelnya $f(t)=a\\cdot b^{t}$ dengan $a$ nilai awal dan $t$ banyak periode.

**Pergeseran grafik.** Dari grafik dasar $y=b^{x}$:
- $y = b^{x} + c$ bergeser naik sebanyak $c$; asimtotnya menjadi $y=c$;
- $y = b^{x-h}$ bergeser ke kanan sebanyak $h$;
- $y = -b^{x}$ dicerminkan terhadap sumbu-$x$ (nilainya menjadi negatif).

Bila perlu menyelesaikan persamaan seperti $b^{f(x)}=b^{g(x)}$, prosedur lengkapnya dibahas pada topik [Persamaan Eksponen dan Logaritma](/matematika/kelas/X/aljabar-fungsi/persamaan-eksponen-logaritma).`,
      blocks: [
        {
          kind: "figure",
          alt: "Dua kurva eksponensial: y sama dengan 2 pangkat x yang mendekati asimtot y sama dengan nol, dan y sama dengan 2 pangkat x ditambah 2 yang bergeser naik dengan asimtot y sama dengan dua.",
          caption: "Menambahkan konstanta $c$ pada $y=2^{x}+c$ menggeser grafik naik dan memindahkan asimtot dari $y=0$ menjadi $y=c$; di sini $c=2$.",
          svg: '<svg viewBox="0 0 320 240" aria-hidden="true" role="presentation"><line x1="20" y1="210" x2="300" y2="210" stroke="currentColor" stroke-width="1.5"/><line x1="60" y1="222" x2="60" y2="20" stroke="currentColor" stroke-width="1.5"/><line x1="20" y1="158" x2="300" y2="158" stroke="currentColor" stroke-width="1.2" stroke-dasharray="6 4"/><polyline points="15,197 60,184 105,158 150,106 173,63" fill="none" stroke="currentColor" stroke-width="2.2"/><polyline points="15,145 60,132 105,106 150,54" fill="none" stroke="currentColor" stroke-width="2.2" stroke-dasharray="7 3"/><circle cx="60" cy="184" r="3" fill="currentColor"/><circle cx="60" cy="132" r="3" fill="currentColor"/><text x="176" y="70" font-size="11" fill="currentColor">y = 2^x</text><text x="150" y="46" font-size="11" fill="currentColor">y = 2^x + 2</text><text x="250" y="154" font-size="11" fill="currentColor">y = 2</text><text x="296" y="226" font-size="12" fill="currentColor">x</text><text x="44" y="30" font-size="12" fill="currentColor">y</text></svg>',
        },
      ],
    },
    {
      id: "contoh",
      kind: "contoh",
      title: "Contoh Terbimbing",
      body: `Lima contoh berikut menekankan perhitungan nilai, pembacaan arah grafik, penafsiran parameter model, dan pergeseran asimtot. Buka setiap langkah untuk melihat penalaran beserta pemeriksaannya.`,
      blocks: [
        {
          kind: "step-reveal",
          intro: "Buka setiap contoh untuk mengikuti penyelesaiannya satu per satu.",
          steps: [
            {
              title: "Contoh 1: menghitung nilai fungsi",
              text: `Diberikan $f(x)=3\\cdot2^{x}$. Hitung $f(0)$, $f(1)$, $f(3)$, dan $f(-1)$.

*Penyelesaian.* Substitusikan setiap nilai $x$:
$$f(0)=3\\cdot2^{0}=3, \\qquad f(1)=3\\cdot2^{1}=6,$$
$$f(3)=3\\cdot2^{3}=24, \\qquad f(-1)=3\\cdot2^{-1}=\\tfrac32.$$

*Verifikasi.* Nilai $f(0)=3$ sama dengan koefisien $a$, dan tiap langkah naik satu mengalikan hasil dengan $2$: $3 \\to 6 \\to 12 \\to 24$. Cocok.`,
            },
            {
              title: "Contoh 2: mengenali pertumbuhan atau peluruhan",
              text: `Tentukan jenis perubahan dan asimtot dari $f(x)=200\\cdot(0{,}8)^{x}$, lalu hitung $f(2)$.

*Penyelesaian.* Basis $b=0{,}8$ memenuhi $0<b<1$, sehingga $f$ **meluruh** dan grafiknya monoton turun. Karena tidak ada konstanta yang ditambahkan di luar pangkat, asimtotnya tetap $y=0$.
$$f(2)=200\\cdot(0{,}8)^{2}=200\\cdot0{,}64=128.$$

*Verifikasi.* Faktor $0{,}8$ berarti berkurang $20\\%$ tiap langkah: $200 \\to 160 \\to 128$. Cocok dengan hasil hitung.`,
            },
            {
              title: "Contoh 3: menafsirkan parameter model",
              text: `Sebuah kultur bakteri dimodelkan $N(t)=500\\cdot2^{\\,t/20}$, dengan $t$ dalam menit. Tafsirkan parameternya dan hitung $N(40)$.

*Penyelesaian.* Nilai awal $N(0)=500$ sel, dan basis $2$ menunjukkan populasi berlipat dua setiap $20$ menit. Untuk $t=40$, eksponennya $\\frac{40}{20}=2$:
$$N(40)=500\\cdot2^{2}=500\\cdot4=2.000.$$

*Verifikasi.* Empat puluh menit adalah dua selang lipat ganda: $500 \\to 1.000 \\to 2.000$. Cocok.`,
            },
            {
              title: "Contoh 4: pemodelan bunga majemuk",
              text: `Modal Rp5.000.000 ditabung dengan bunga majemuk $10\\%$ per tahun. Tentukan saldo setelah $3$ tahun.

*Penyelesaian.* Faktor pengalinya $b=1+0{,}1=1{,}1$, sehingga modelnya $M(t)=5.000.000(1{,}1)^{t}$:
$$M(3)=5.000.000\\cdot(1{,}1)^{3}=5.000.000\\cdot1{,}331=6.655.000.$$
Saldo menjadi **Rp6.655.000**.

*Verifikasi.* Telusuri baris per tahun: $5.000.000 \\to 5.500.000 \\to 6.050.000 \\to 6.655.000$, selaras dengan hasil pangkat.`,
            },
            {
              title: "Contoh 5: pergeseran grafik dan asimtot",
              text: `Grafik $y=2^{x}$ digeser menjadi $y=2^{x}-3$. Tentukan asimtot mendatarnya dan nilai $y$ saat $x=2$.

*Penyelesaian.* Konstanta $-3$ menurunkan seluruh grafik $3$ satuan, sehingga asimtot yang semula $y=0$ berpindah menjadi $y=-3$. Nilai fungsinya:
$$y=2^{2}-3=4-3=1.$$

*Verifikasi.* Tanpa pergeseran $2^{2}=4$; setelah diturunkan $3$ satuan menjadi $1$. Asimtot pun turun $3$ satuan dari $0$ ke $-3$. Cocok.`,
            },
          ],
        },
        {
          kind: "details",
          summary: "Coba sendiri: membaca parameter dari sebuah grafik",
          text: `Sebuah grafik $f(x)=a\\cdot b^{x}$ melalui $(0,4)$ dan $(2,36)$. Tentukan $a$, $b$, lalu hitung $f(3)$.

*Langkah 1.* Titik $(0,4)$ memberi nilai awal: $f(0)=a\\cdot b^{0}=a=4$.

*Langkah 2.* Titik $(2,36)$ memberi $4\\cdot b^{2}=36$, sehingga $b^{2}=9$. Karena basis harus positif, $b=3$.

*Langkah 3.* Modelnya $f(x)=4\\cdot3^{x}$, maka $f(3)=4\\cdot3^{3}=4\\cdot27=108$.

*Verifikasi.* Setiap kenaikan $x$ satu mengalikan nilai dengan $3$: $4 \\to 12 \\to 36 \\to 108$. Cocok, dan grafik memang naik karena $b=3>1$.`,
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
      body: `Fungsi eksponensial memodelkan besaran yang berlipat atau menyusut dengan faktor tetap. Kultur bakteri $500$ sel yang berlipat dua setiap $20$ menit menjadi $500 \\cdot 2^{6} = 32.000$ sel setelah $2$ jam. Zat radioaktif $80$ gram dengan waktu paruh $5$ tahun hanya tersisa $80\\left(\\tfrac12\\right)^{3} = 10$ gram setelah $15$ tahun. Modal Rp5.000.000 berbunga $10\\%$ per tahun tumbuh menjadi $5.000.000(1{,}1)^{3} = \\text{Rp}6.655.000$ setelah $3$ tahun.

Untuk contoh lengkap, lihat [Pertumbuhan Populasi Bakteri](/aplikasi/pertumbuhan-populasi) dan [Peluruhan Zat dalam Darah](/aplikasi/peluruhan-zat).`,
    },
    {
      id: "kesalahan-umum",
      kind: "kesalahan-umum",
      title: "Kesalahan Umum",
      body: `**1. Mengira $2^{x+1}=2^{x}+1$.** Sifat eksponen bekerja pada **perkalian**, bukan penjumlahan. Yang benar $2^{x+1}=2\\cdot2^{x}$, bukan $2^{x}+1$.

**2. Menyamakan basis tanpa memeriksa syarat.** Menyamakan eksponen hanya sah bila basis sama, $b>0$, dan $b\\neq1$. Untuk $b=1$, semua nilai $x$ benar.

**3. Menukar pertumbuhan dan peluruhan.** Basis $b>1$ berarti **pertumbuhan**; $0<b<1$ berarti **peluruhan**. Jangan terbalik.

**4. Mengganggap grafik memotong sumbu-$x$.** Untuk $a>0$, $b^{x}$ tidak pernah nol; sumbu-$x$ hanyalah asimtot.

**5. Menukar peran $a$ dan $b$.** Pada $f(x)=a\\cdot b^{x}$, nilai $a$ adalah nilai awal $f(0)$, sedangkan $b$ adalah faktor pengali tiap periode. Menukar keduanya menggeser seluruh model: pertumbuhan $500$ sel bukan $500^{x}$.`,
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
      id: "tantangan",
      kind: "tantangan",
      title: "Memulihkan Parameter dari Rasio",
      body: `**Soal.** Sebuah fungsi eksponensial $f(x)=a\\cdot b^{x}$ dengan $a>0$ dan $b>0$ memenuhi $f(1)=6$ dan $f(4)=162$. (a) Tentukan nilai $a$ dan $b$. (b) Hitung $f(0)$ dan $f(5)$. (c) Tentukan nilai $x$ ketika $f(x)=486$.`,
      blocks: [
        {
          kind: "step-reveal",
          intro: "Rasio dua nilai fungsi menghapus koefisien $a$ dan menyisakan pangkat dari basis.",
          steps: [
            {
              title: "Bandingkan dua nilai",
              text: "Bagi $f(4)$ dengan $f(1)$: $\\dfrac{a\\cdot b^{4}}{a\\cdot b^{1}}=b^{3}=\\dfrac{162}{6}=27$.",
            },
            {
              title: "Tentukan basis",
              text: "Karena $b^{3}=27$ dan $b>0$, maka $b=\\sqrt[3]{27}=3$. Modelnya menjadi $f(x)=a\\cdot3^{x}$.",
            },
            {
              title: "Tentukan koefisien",
              text: "Substitusi $f(1)=6$: $a\\cdot3=6$, sehingga $a=2$. Jadi $f(x)=2\\cdot3^{x}$.",
            },
            {
              title: "Hitung dua nilai",
              text: "$f(0)=2\\cdot3^{0}=2$ dan $f(5)=2\\cdot3^{5}=2\\cdot243=486$.",
            },
            {
              title: "Selesaikan $f(x)=486$",
              text: "Karena $f(5)=486$ telah diperoleh, nilai $x$ yang memenuhi adalah $x=5$. Periksa: $2\\cdot3^{5}=486$ benar.",
            },
          ],
        },
      ],
    },
    {
      id: "sejarah",
      kind: "sejarah",
      title: "Dari Bunga Majemuk ke Bilangan e",
      body: `Fungsi eksponensial bermula dari penyelidikan bunga majemuk. Pada 1683 Jacob Bernoulli menelaah tabungan yang dibungakan berkali-kali dalam setahun dan memperhatikan bahwa batas $(1+1/n)^{n}$ menuju suatu bilangan tetap di antara $2$ dan $3$. Leonhard Euler (1748) kemudian menandai bilangan itu dengan $e$ dan memperkenalkan fungsi $e^{x}$ sebagai fungsi yang lajunya sebanding dengan nilainya sendiri. Sejak itu bentuk $a\\cdot b^{x}$ dipakai untuk memodelkan pertumbuhan populasi, peluruhan zat, dan penyebaran penyakit. Karena itulah topik ini menjadi bahasa baku bagi perubahan yang berlipat.`,
    },
    {
      id: "refleksi",
      kind: "refleksi",
      title: "Refleksi",
      body: "Pertumbuhan eksponensial menjelaskan mengapa perubahan kecil yang berulang dapat berujung besar: dari wabah penyakit, bunga yang berbunga, sampai penyebaran berita. Pilih satu hal di sekitarmu yang tumbuh atau menyusut dengan faktor tetap, lalu perkirakan nilainya dua periode berikutnya.",
      blocks: [
        {
          kind: "reflection",
          prompts: [
            "Apa perbedaan penting antara fungsi kuadrat dan fungsi eksponensial?",
            "Bagaimana kamu menentukan apakah suatu model menggambarkan pertumbuhan atau peluruhan?",
            "Mengapa besaran yang tumbuh eksponensial akhirnya dapat melampaui besaran yang tumbuh linear?",
            "Mengapa grafik $f(x)=a\\cdot b^{x}$ tidak pernah memotong sumbu-$x$, dan apa artinya bagi nilai fungsi?",
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
          caption: "Ringkasan bentuk, arah grafik, dan asimtot fungsi eksponensial",
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
              "Model perubahan",
              "$f(t)=a\\cdot b^{t}$: $a$ nilai awal, $b$ faktor tiap periode",
            ],
          ],
        },
        {
          kind: "callout",
          variant: "concept",
          title: "Benang merah: satu faktor tetap yang menentukan arah",
          text: "Inti topik ini sederhana: pada $f(x)=a\\cdot b^{x}$, bilangan $a$ menetapkan titik awal dan basis $b$ menetapkan faktor pengali tiap langkah. Dari situ lahir semua pembedaan yang penting, yaitu $b>1$ untuk pertumbuhan dan $0<b<1$ untuk peluruhan, beserta asimtot $y=0$. Gagasan faktor tetap inilah yang kamu pakai lagi pada **bunga majemuk** dan **barisan geometri**, lalu diperluas dengan menanyakan waktu pada topik **persamaan eksponen dan logaritma**.",
        },
      ],
    },
    {
      id: "evaluasi",
      kind: "evaluasi",
      title: "Evaluasi",
      questionIds: ['fe-08'],
      body: `**Tiket keluar.** (1) Diberikan $f(x)=200\\cdot(0{,}8)^{x}$. Tentukan apakah $f$ menggambarkan pertumbuhan atau peluruhan, lalu hitung $f(2)$. (2) Grafik digeser menjadi $y=2^{x}-3$; tentukan persamaan asimtot mendatarnya. Setelah menjawab, lanjut ke [Latihan & Asesmen](/latihan) topik **Fungsi Eksponensial** untuk latihan tambahan.`,
    },
  ],
};
