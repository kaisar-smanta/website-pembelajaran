import type { Topic } from '@/types/content';

export const persamaanEksponenLogaritma: Topic = {
  id: 'persamaan-eksponen-logaritma',
  slug: 'persamaan-eksponen-logaritma',
  title: 'Persamaan Eksponen dan Logaritma',
  subtitle: 'Menyelesaikan persamaan dan memahami logaritma sebagai invers',
  grade: 'X',
  phase: 'E',
  element: 'aljabar-fungsi',
  status: 'lengkap',
  supplementary: true,
  cpNote:
    'Persamaan eksponen basis sama termasuk CP Fase E pada elemen Aljabar dan Fungsi (E-ALJ-3), sehingga topik ini ditempatkan pada elemen tersebut. Topik tetap ditandai pengayaan karena menambahkan logaritma yang melampaui tuntutan CP.',
  estimatedMinutes: 90,
  summary:
    'Menyelesaikan persamaan eksponen dengan menyamakan basis dan substitusi, serta memahami logaritma sebagai invers eksponen beserta sifat-sifatnya.',
  description:
    'Setelah menguasai sifat-sifat eksponen, kita memakainya untuk menyelesaikan persamaan seperti $2^{x+1}=32$ dengan menyamakan basis atau menyubstitusi variabel. Namun tidak semua persamaan dapat diselesaikan dengan basis yang sama, sehingga kita memerlukan logaritma — invers dari eksponen. Pada topik ini kita membangun makna $\\log_{a} b = c$ sebagai jawaban atas pertanyaan "a pangkat berapa sama dengan b", mempelajari sifat-sifat logaritma, lalu menyelesaikan persamaan logaritma sederhana sambil selalu memeriksa syarat numerus positif.',
  keywords: ['eksponen', 'logaritma', 'persamaan', 'sifat logaritma', 'basis'],
  prerequisites: ['eksponen', 'fungsi-eksponensial'],
  relatedTopics: ['barisan-deret', 'bunga-majemuk'],
  prerequisiteKnowledge: [
    'Sifat-sifat eksponen seperti $a^{m}\\cdot a^{n}=a^{m+n}$ dan $(a^{m})^{n}=a^{mn}$',
    'Menyelesaikan persamaan linear satu variabel',
    'Membaca grafik fungsi eksponensial $f(x)=a\\cdot b^{x}$',
  ],
  objectives: [
    { text: 'Menyelesaikan persamaan eksponen dengan menyamakan basis.' },
    { text: 'Menyelesaikan persamaan eksponen melalui substitusi variabel.' },
    { text: 'Menjelaskan logaritma sebagai invers dari eksponen.' },
    { text: 'Menggunakan sifat-sifat logaritma (perkalian, pembagian, dan pangkat) dalam perhitungan.' },
    { text: 'Menyelesaikan persamaan logaritma sederhana dengan memeriksa syarat numerus positif.' },
  ],
  sections: [
    {
      id: "tujuan",
      kind: "tujuan",
      title: "Tujuan Pembelajaran",
      body: "Setelah mempelajari topik ini, peserta didik dapat menyelesaikan persamaan eksponen dengan menyamakan basis maupun substitusi variabel, menjelaskan logaritma sebagai operasi invers dari eksponen, menerapkan sifat-sifat logaritma untuk menyederhanakan dan menghitung bentuk logaritma, serta menyelesaikan persamaan logaritma sederhana dengan tetap memeriksa syarat numerus positif.",
    },
    {
      id: "pemantik",
      kind: "pemantik",
      title: "Pertanyaan Pemantik",
      body: `Sebuah virus menggandakan jumlahnya setiap jam. Jika mula-mula terdapat $1$ sel, setelah berapa jam jumlahnya mencapai $128$ sel?

Kita dapat menuliskan jumlah sel setelah $t$ jam sebagai $2^{t}$. Jadi kita mencari $t$ sehingga $2^{t}=128$. Karena $2^{7}=128$, jawabannya $7$ jam. Mudah, karena $128$ adalah pangkat bulat dari $2$.

Sekarang, berapa $t$ jika jumlahnya menjadi $100$ sel? Angka $100$ bukan pangkat bulat dari $2$. Bagaimana cara menuliskan jawabannya? Di sinilah logaritma muncul.`,
      blocks: [
        {
          kind: "prediction",
          prompt: "Jika mula-mula ada $1$ sel dan setiap jam jumlahnya berlipat dua, berapa jam yang dibutuhkan agar mencapai $128$ sel?",
          options: [
            "$6$ jam",
            "$7$ jam",
            "$8$ jam",
            "$100$ jam",
          ],
          reveal: "Karena $2^{7}=128$, dibutuhkan $7$ jam — mudah karena $128$ adalah pangkat bulat dari $2$. Namun untuk $2^{t}=100$, nilai $t$ berada di antara $6$ dan $7$ karena $2^{6}=64$ dan $2^{7}=128$. Jawaban tepatnya ditulis $t=\\log_{2}100$, yaitu \"pangkat yang harus diberikan pada $2$ agar hasilnya $100$\", sekitar $6{,}64$ jam. Di sinilah logaritma muncul.",
          saveLabel: "Simpan dugaan",
        },
      ],
    },
    {
      id: "prasyarat",
      kind: "prasyarat",
      title: "Prasyarat",
      body: `Sebelum melanjutkan, pastikan kamu menguasai:
- sifat-sifat eksponen, misalnya $a^{m}\\cdot a^{n}=a^{m+n}$ dan $(a^{m})^{n}=a^{mn}$;
- menyatakan bilangan sebagai pangkat dengan basis tertentu, misalnya $32=2^{5}$ dan $81=3^{4}$;
- menyelesaikan persamaan linear satu variabel, misalnya $2x+2=3x-3$;
- membaca grafik fungsi eksponensial dan memahami bahwa grafiknya selalu berada di atas sumbu-$x$.`,
    },
    {
      id: "konteks",
      kind: "konteks",
      title: "Situasi dan Konteks",
      body: `Persamaan eksponen muncul setiap kali kita menanyakan "kapan" suatu besaran yang berlipat mencapai nilai tertentu: kapan populasi bakteri mencapai sejuta, kapan investasi berbunga majemuk menjadi dua kali, atau kapan konsentrasi obat turun di bawah ambang tertentu.

Bila nilai target kebetulan merupakan pangkat bulat dari basisnya, menyamakan basis saja cukup. Namun bilangan nyata jarang seberuntung itu. Logaritma diciptakan justru untuk menjawab pertanyaan semacam ini secara umum, dan juga sebagai skala yang memampatkan rentang nilai yang sangat lebar — seperti skala Richter untuk gempa atau skala pH untuk keasaman.`,
    },
    {
      id: "konsep",
      kind: "konsep",
      title: "Konsep Inti: Menyamakan Basis dan Definisi Logaritma",
      body: `**Persamaan eksponen dengan basis sama.** Untuk $a>0$, $a\\neq1$, dan $a^{f(x)}=a^{g(x)}$, berlaku

$$a^{f(x)}=a^{g(x)} \\Rightarrow f(x)=g(x).$$

Karena fungsi eksponen bersifat satu-satu (monoton), kesamaan nilai hanya mungkin bila eksponennya sama. Prinsip inilah yang disebut **menyamakan basis**: ubah kedua ruas agar memiliki basis yang sama, lalu samakan pangkatnya.

**Substitusi variabel.** Untuk persamaan seperti $a^{2x}+p\\,a^{x}+q=0$, kita misalkan $t=a^{x}$ sehingga bentuknya menjadi persamaan kuadrat $t^{2}+pt+q=0$. Setelah $t$ ditemukan, kembalikan ke $a^{x}=t$.

**Definisi logaritma.** Logaritma adalah invers dari eksponen. Untuk $a>0$, $a\\neq1$, dan $b>0$:

$$a^{c}=b \\iff \\log_{a}b=c.$$

Dengan kata lain, $\\log_{a}b$ menjawab pertanyaan "basis $a$ harus dipangkatkan berapa agar menghasilkan $b$". Sebagai contoh $2^{3}=8 \\iff \\log_{2}8=3$.

**Sifat-sifat logaritma.** Untuk $a>0$, $a\\neq1$, dan numerus positif:

$$\\log_{a}(mn)=\\log_{a}m+\\log_{a}n$$

$$\\log_{a}\\!\\left(\\frac{m}{n}\\right)=\\log_{a}m-\\log_{a}n$$

$$\\log_{a}(m^{n})=n\\,\\log_{a}m \\qquad \\log_{a}a=1 \\qquad \\log_{a}1=0$$`,
      blocks: [
        {
          kind: "callout",
          variant: "concept",
          title: "Inti yang perlu diingat",
          text: "Eksponen dan logaritma saling membalik, seperti kuadrat dan akar. Persamaan eksponen diselesaikan dengan menyamakan basis atau menyubstitusi variabel, sedangkan persamaan logaritma diselesaikan dengan mengubahnya kembali ke bentuk eksponen.",
        },
        {
          kind: "callout",
          variant: "warning",
          title: "Syarat yang tidak boleh dilupakan",
          text: "Basis harus $a>0$ dan $a\\neq1$, sedangkan numerus harus positif. Nilai $\\log_{a}b$ hanya terdefinisi bila $b>0$. Setiap solusi persamaan logaritma **wajib** diperiksa terhadap syarat ini.",
        },
        {
          kind: "match",
          intro: "Pasangkan setiap bentuk eksponen dengan bentuk logaritmanya.",
          pairs: [
            {
              left: "$2^{3} = 8$",
              right: "$\\log_{2}8 = 3$",
            },
            {
              left: "$3^{4} = 81$",
              right: "$\\log_{3}81 = 4$",
            },
            {
              left: "$10^{-2} = 0{,}01$",
              right: "$\\log_{10}0{,}01 = -2$",
            },
            {
              left: "$a^{c} = b$",
              right: "$\\log_{a}b = c$",
            },
          ],
        },
      ],
    },
    {
      id: "representasi",
      kind: "representasi",
      title: "Representasi",
      body: "Satu hubungan eksponen dapat dinyatakan sebagai bentuk eksponen, bentuk logaritma, maupun kalimat. Ketiganya setara.",
      blocks: [
        {
          kind: "table",
          caption: "Tiga cara menyatakan hubungan yang sama",
          headers: [
            "Bentuk eksponen",
            "Bentuk logaritma",
            "Makna",
          ],
          rows: [
            [
              "$2^{3}=8$",
              "$\\log_{2}8=3$",
              "basis $2$ dipangkatkan $3$ menghasilkan $8$",
            ],
            [
              "$3^{4}=81$",
              "$\\log_{3}81=4$",
              "basis $3$ dipangkatkan $4$ menghasilkan $81$",
            ],
            [
              "$10^{-2}=0{,}01$",
              "$\\log_{10}0{,}01=-2$",
              "basis $10$ dipangkatkan $-2$ menghasilkan $0{,}01$",
            ],
            [
              "$a^{c}=b$",
              "$\\log_{a}b=c$",
              "definisi umum, dengan $a>0$, $a\\neq1$, $b>0$",
            ],
          ],
        },
        {
          kind: "callout",
          variant: "tip",
          title: "Cara cepat mengubah bentuk",
          text: "Bila bingung, bayangkan \"basis naik jadi pangkat, hasil berpindah ke belakang\". Dari $a^{c}=b$ menjadi $\\log_{a}b=c$: basis $a$ tetap di bawah, $b$ di dalam, dan $c$ menjadi hasil.",
        },
        {
          kind: "tabs",
          items: [
            {
              label: "Eksponen",
              body: "$2^{3} = 8$ berarti basis $2$ dipangkatkan $3$ menghasilkan $8$.",
            },
            {
              label: "Logaritma",
              body: "$\\log_{2}8 = 3$ menjawab \"basis $2$ dipangkatkan berapa agar hasilnya $8$\".",
            },
            {
              label: "Makna",
              body: "Kedua bentuk menanyakan hubungan yang sama; yang berbeda hanya cara menuliskannya.",
            },
          ],
        },
      ],
    },
    {
      id: "eksplorasi",
      kind: "eksplorasi",
      title: "Eksplorasi",
      body: `Gunakan eksplorasi grafik fungsi eksponensial berikut untuk melihat bagaimana nilai $a\\cdot b^{x}$ berubah, lalu bayangkan grafik logaritma sebagai hasil pencerminannya.

Ketika grafik $y=b^{x}$ dicerminkan terhadap garis $y=x$, kita memperoleh grafik $y=\\log_{b}x$. Titik $(0,1)$ pada grafik eksponen bertukar menjadi $(1,0)$ pada grafik logaritma; titik $(1,b)$ bertukar menjadi $(b,1)$. Itulah alasan $\\log_{b}1=0$ dan $\\log_{b}b=1$. Ketika basis $b>1$, grafik eksponen menanjak cepat dan grafik logaritmanya menanjak lambat — keduanya saling membalik.`,
      blocks: [
        {
          kind: "exploration",
          explorationId: "fungsi-eksponensial-grafik",
        },
        {
          kind: "callout",
          variant: "info",
          title: "Menghubungkan dengan logaritma",
          text: "Perhatikan bahwa grafik $y=b^{x}$ tidak pernah menyentuh sumbu-$x$. Akibatnya $b^{x}$ selalu positif, sehingga logaritma hanya terdefinisi untuk bilangan positif. Cerminan grafik juga menunjukkan bahwa sumbu-$y$ menjadi asimtot bagi grafik logaritma.",
        },
      ],
    },
    {
      id: "generalisasi",
      kind: "generalisasi",
      title: "Kunci Umum: Hubungan Balik Eksponen dan Logaritma",
      body: `Seluruh soal pada topik ini bertumpu pada satu kesetaraan. Untuk $a>0$, $a\\neq1$, dan $b>0$:

$$a^{c}=b \\iff \\log_{a}b=c.$$

Dari kesetaraan itu lahir dua strategi umum. Persamaan eksponen diselesaikan dengan **menyamakan basis** — karena fungsi eksponen satu-satu, $a^{m}=a^{n}$ hanya mungkin bila $m=n$ — atau dengan **substitusi** $t=a^{x}$ untuk mengubahnya menjadi persamaan kuadrat. Persamaan logaritma diselesaikan dengan mengubahnya kembali ke bentuk eksponen, atau menggabungkan suku dengan sifat $\\log_{a}m+\\log_{a}n=\\log_{a}(mn)$.

Kedua arah selalu ditutup dengan pemeriksaan: solusi eksponen harus memenuhi $t=a^{x}>0$, sedangkan solusi logaritma harus memenuhi syarat **numerus positif**.`,
    },
    {
      id: "contoh",
      kind: "contoh",
      title: "Contoh Terbimbing",
      body: `**Contoh 1 (menyamakan basis).** Tentukan $x$ dari $2^{x+1}=32$.

*Penyelesaian.* Nyatakan $32$ sebagai pangkat basis $2$: $32=2^{5}$. Maka

$$2^{x+1}=2^{5} \\Rightarrow x+1=5 \\Rightarrow x=4.$$

Periksa: $2^{4+1}=2^{5}=32$ ✓.

**Contoh 2 (substitusi variabel).** Tentukan $x$ dari $2^{2x}-5\\cdot2^{x}+4=0$.

*Penyelesaian.* Misalkan $t=2^{x}$ dengan $t>0$. Karena $2^{2x}=(2^{x})^{2}=t^{2}$, persamaan menjadi

$$t^{2}-5t+4=0 \\Rightarrow (t-1)(t-4)=0 \\Rightarrow t=1 \\text{ atau } t=4.$$

Kembalikan: $2^{x}=1 \\Rightarrow x=0$, dan $2^{x}=4=2^{2} \\Rightarrow x=2$. Solusinya $x=0$ atau $x=2$. Keduanya memenuhi $t>0$ ✓.

**Contoh 3 (logaritma sebagai invers).** Tentukan $x$ dari $\\log_{3}(x+2)=2$.

*Penyelesaian.* Ubah ke bentuk eksponen: $3^{2}=x+2$, sehingga $x+2=9$ dan $x=7$. Periksa syarat numerus: $x+2=9>0$ ✓. Jadi $x=7$.

**Contoh 4 (sifat logaritma).** Hitung $\\log_{2}12+\\log_{2}6-\\log_{2}9$.

*Penyelesaian.* Gabungkan dengan sifat penjumlahan dan pengurangan:

$$\\log_{2}12+\\log_{2}6-\\log_{2}9=\\log_{2}\\!\\left(\\frac{12\\cdot6}{9}\\right)=\\log_{2}8=3.$$

Periksa dengan $2^{3}=8$ ✓.`,
      blocks: [
        {
          kind: "step-reveal",
          intro: "Ikuti langkah menyelesaikan $2^{2x}-5\\cdot 2^{x}+4=0$ dengan substitusi variabel.",
          steps: [
            {
              title: "Langkah 1",
              text: "Misalkan $t = 2^{x}$ dengan $t > 0$, sehingga $2^{2x} = (2^{x})^{2} = t^{2}$.",
            },
            {
              title: "Langkah 2",
              text: "Persamaan menjadi $t^{2} - 5t + 4 = 0$.",
            },
            {
              title: "Langkah 3",
              text: "Faktorkan: $(t-1)(t-4) = 0$, sehingga $t = 1$ atau $t = 4$.",
            },
            {
              title: "Langkah 4",
              text: "Kembalikan: $2^{x} = 1 \\Rightarrow x = 0$ dan $2^{x} = 4 = 2^{2} \\Rightarrow x = 2$. Keduanya memenuhi $t>0$.",
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
      body: `Logaritma dipakai untuk menyelesaikan "kapan" pada pertumbuhan dan peluruhan. Misalnya populasi $P_{0}$ yang berlipat dengan faktor tetap setiap periode dimodelkan $P(t)=P_{0}\\cdot b^{t}$. Untuk mencari waktu $t$ saat populasi mencapai target $P$, kita menyelesaikan $b^{t}=P/P_{0}$, sehingga

$$t=\\log_{b}\\!\\left(\\frac{P}{P_{0}}\\right).$$

Skala logaritma juga memampatkan rentang yang sangat lebar: skala pH, skala Richter, dan satuan desibel semuanya dibangun di atas logaritma. Untuk penerapan lanjutan, lihat topik [Bunga dan Investasi](/aplikasi/bunga-investasi).`,
    },
    {
      id: "kesalahan-umum",
      kind: "kesalahan-umum",
      title: "Kesalahan Umum",
      body: `**1. Menyamakan basis dengan cara yang salah.** Untuk $4^{x+1}=8^{x-1}$, basis $4$ dan $8$ tidak sama sehingga pangkat tidak boleh langsung disamakan. Ubah keduanya ke basis $2$ terlebih dahulu: $2^{2(x+1)}=2^{3(x-1)}$.

**2. Menjumlahkan logaritma menjadi logaritma dari jumlah.** $\\log_{a}m+\\log_{a}n=\\log_{a}(mn)$, bukan $\\log_{a}(m+n)$. Logaritma mengubah perkalian menjadi penjumlahan, bukan penjumlahan menjadi penjumlahan.

**3. Lupa memeriksa syarat numerus positif.** Pada $\\log_{2}x+\\log_{2}(x-2)=3$ muncul dua kandidat, tetapi $x=-2$ harus ditolak karena numerusnya negatif. Solusi persamaan kuadrat belum tentu solusi persamaan logaritma.

**4. Menganggap $\\log_{a}m^{n}=n\\log_{a}m$ sebagai $(\\log_{a}m)^{n}$.** Sifat pangkat menurunkan eksponen ke depan sebagai faktor, bukan memangkatkan nilai logaritmanya.`,
      blocks: [
        {
          kind: "spot-mistake",
          intro: "Perhatikan penyederhanaan $\\log_{2}4 + \\log_{2}8$. Ada satu langkah keliru. Klik langkah yang salah.",
          steps: [
            "Jumlahkan numerusnya: $\\log_{2}4 + \\log_{2}8 = \\log_{2}(4+8) = \\log_{2}12$.",
            "Gunakan sifat yang benar: $\\log_{2}4 + \\log_{2}8 = \\log_{2}(4 \\cdot 8)$.",
            "Hitung hasil kalinya: $4 \\cdot 8 = 32$.",
            "Sederhanakan: $\\log_{2}32 = 5$.",
          ],
          wrongIndex: 0,
          explanation: "Langkah pertama keliru. Sifat logaritma mengubah **perkalian** menjadi penjumlahan, bukan sebaliknya. Jadi $\\log_{2}4 + \\log_{2}8 = \\log_{2}(4 \\cdot 8) = \\log_{2}32 = 5$, bukan $\\log_{2}12$.",
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
            "Kapan kamu cukup menyamakan basis, dan kapan kamu memerlukan substitusi variabel?",
            "Bagaimana kamu menjelaskan kepada teman bahwa logaritma adalah invers dari eksponen?",
            "Mengapa memeriksa syarat numerus positif wajib dilakukan di akhir setiap penyelesaian persamaan logaritma?",
          ],
          confidenceLabel: "Seberapa yakin kamu dengan persamaan eksponen dan logaritma ini?",
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
            "Aspek",
            "Penjelasan",
          ],
          rows: [
            [
              "Menyamakan basis",
              "$a^{f(x)}=a^{g(x)} \\Rightarrow f(x)=g(x)$ untuk $a>0$ dan $a\\neq1$",
            ],
            [
              "Substitusi variabel",
              "misalkan $t=a^{x}$ pada bentuk $a^{2x}+p\\,a^{x}+q=0$",
            ],
            [
              "Definisi logaritma",
              "$a^{c}=b \\iff \\log_{a}b=c$",
            ],
            [
              "Sifat perkalian",
              "$\\log_{a}(mn)=\\log_{a}m+\\log_{a}n$",
            ],
            [
              "Sifat pembagian",
              "$\\log_{a}\\!\\left(\\dfrac{m}{n}\\right)=\\log_{a}m-\\log_{a}n$",
            ],
            [
              "Sifat pangkat",
              "$\\log_{a}(m^{n})=n\\,\\log_{a}m$",
            ],
            [
              "Syarat terdefinisi",
              "basis $a>0$, $a\\neq1$, dan numerus selalu positif",
            ],
          ],
        },
      ],
    },
    {
      id: "evaluasi",
      kind: "evaluasi",
      title: "Evaluasi",
      body: `**Tiket keluar.** (1) Bagaimana kesetaraan $a^{c}=b \\iff \\log_{a}b=c$ dipakai untuk menyelesaikan kedua jenis persamaan? (2) Mengapa setiap solusi persamaan logaritma wajib diperiksa terhadap syarat numerus? Setelah menjawab, lanjut ke [Latihan & Asesmen](/latihan) topik **Persamaan Eksponen dan Logaritma** untuk latihan tambahan.`,
    },
  ],
};
