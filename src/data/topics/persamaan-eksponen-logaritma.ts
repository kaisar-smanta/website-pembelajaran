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
    'Setelah menguasai sifat-sifat eksponen, kita memakainya untuk menyelesaikan persamaan seperti $2^{x+1}=32$ dengan menyamakan basis atau menyubstitusi variabel. Namun tidak semua persamaan dapat diselesaikan dengan basis yang sama, sehingga kita memerlukan logaritma, yaitu invers dari eksponen. Pada topik ini kita membangun makna $\\log_{a} b = c$ sebagai jawaban atas pertanyaan "a pangkat berapa sama dengan b", mempelajari sifat-sifat logaritma, lalu menyelesaikan persamaan logaritma sederhana sambil selalu memeriksa syarat numerus positif.',
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
  applications: ['skala-logaritma'],
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
          reveal: "Karena $2^{7}=128$, dibutuhkan $7$ jam, mudah karena $128$ adalah pangkat bulat dari $2$. Namun untuk $2^{t}=100$, nilai $t$ berada di antara $6$ dan $7$ karena $2^{6}=64$ dan $2^{7}=128$. Jawaban tepatnya ditulis $t=\\log_{2}100$, yaitu \"pangkat yang harus diberikan pada $2$ agar hasilnya $100$\", sekitar $6{,}64$ jam. Di sinilah logaritma muncul.",
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

Bila nilai target kebetulan merupakan pangkat bulat dari basisnya, menyamakan basis saja cukup. Namun bilangan nyata jarang seberuntung itu. Logaritma diciptakan justru untuk menjawab pertanyaan semacam ini secara umum, dan juga sebagai skala yang memampatkan rentang nilai yang sangat lebar, seperti skala Richter untuk gempa atau skala pH untuk keasaman.`,
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

Dengan kata lain, $\\log_{a}b$ menjawab pertanyaan "basis $a$ harus dipangkatkan berapa agar menghasilkan $b$". Misalnya, $2^{3}=8 \\iff \\log_{2}8=3$.

**Sifat-sifat logaritma.** Untuk $a>0$, $a\\neq1$, dan numerus positif:

$$\\log_{a}(mn)=\\log_{a}m+\\log_{a}n$$

$$\\log_{a}\\!\\left(\\frac{m}{n}\\right)=\\log_{a}m-\\log_{a}n$$

$$\\log_{a}(m^{n})=n\\,\\log_{a}m \\qquad \\log_{a}a=1 \\qquad \\log_{a}1=0$$`,
      blocks: [
        {
          kind: "callout",
          variant: "concept",
          title: "Eksponen dan logaritma saling membalik",
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
        {
          kind: "flip-cards",
          intro: "Pelajari istilah dasar logaritma melalui kartu berikut.",
          cards: [
            {
              front: "Bentuk eksponen",
              back: "Penulisan $a^{c}=b$: basis $a$ dipangkatkan $c$ menghasilkan $b$.",
            },
            {
              front: "Bentuk logaritma",
              back: "Penulisan $\\log_{a}b=c$: pangkat yang diberikan pada basis $a$ agar menghasilkan $b$.",
            },
            {
              front: "Basis",
              back: "Bilangan pokok $a$ pada $a^{c}=b$ atau $\\log_{a}b$, dengan $a>0$ dan $a\\neq1$.",
            },
            {
              front: "Numerus",
              back: "Bilangan $b$ di dalam logaritma; harus positif agar $\\log_{a}b$ terdefinisi.",
            },
            {
              front: "Menyamakan basis",
              back: "Mengubah kedua ruas persamaan ke basis yang sama, lalu menyamakan eksponennya.",
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
        {
          kind: "figure",
          alt: "Diagram bentuk logaritma log basis a dari b sama dengan c, dengan label basis pada a, numerus pada b, dan hasil pada c.",
          caption: "Pada $\\log_{a}b=c$: $a$ adalah **basis**, $b$ adalah **numerus** (harus positif), dan $c$ adalah **hasil** logaritma.",
          svg: '<svg viewBox="0 0 320 240" aria-hidden="true" role="presentation"><text x="58" y="132" font-size="34" fill="currentColor">log</text><text x="132" y="148" font-size="20" fill="currentColor">a</text><text x="156" y="132" font-size="34" fill="currentColor">b = c</text><line x1="138" y1="156" x2="118" y2="192" stroke="currentColor" stroke-width="1.5"/><text x="62" y="210" font-size="14" fill="currentColor">basis</text><line x1="166" y1="140" x2="180" y2="196" stroke="currentColor" stroke-width="1.5"/><text x="158" y="216" font-size="14" fill="currentColor">numerus</text><line x1="238" y1="122" x2="264" y2="80" stroke="currentColor" stroke-width="1.5"/><text x="240" y="72" font-size="14" fill="currentColor">hasil</text></svg>',
        },
      ],
    },
    {
      id: "eksplorasi",
      kind: "eksplorasi",
      title: "Eksplorasi",
      body: `Gunakan eksplorasi grafik fungsi eksponensial berikut untuk melihat bagaimana nilai $a\\cdot b^{x}$ berubah, lalu bayangkan grafik logaritma sebagai hasil pencerminannya.

Ketika grafik $y=b^{x}$ dicerminkan terhadap garis $y=x$, kita memperoleh grafik $y=\\log_{b}x$. Titik $(0,1)$ pada grafik eksponen bertukar menjadi $(1,0)$ pada grafik logaritma; titik $(1,b)$ bertukar menjadi $(b,1)$. Itulah alasan $\\log_{b}1=0$ dan $\\log_{b}b=1$. Ketika basis $b>1$, grafik eksponen menanjak cepat dan grafik logaritmanya menanjak lambat. Keduanya saling membalik.`,
      blocks: [
        {
          kind: "exploration",
          explorationId: "logaritma-invers-grafik",
        },
        {
          kind: "exploration",
          explorationId: "logaritma-pencerminan-grafik",
        },
        {
          kind: "callout",
          variant: "info",
          title: "Menghubungkan dengan logaritma",
          text: "Grafik $y=b^{x}$ tidak pernah menyentuh sumbu-$x$. Akibatnya $b^{x}$ selalu positif, sehingga logaritma hanya terdefinisi untuk bilangan positif. Cerminan grafik juga menunjukkan bahwa sumbu-$y$ menjadi asimtot bagi grafik logaritma.",
        },
        {
          kind: "figure",
          alt: "Grafik fungsi eksponen yang naik tajam dan grafik logaritma yang merupakan pencerminannya terhadap garis y sama dengan x, dengan titik-titik pasangan koordinat yang saling bertukar.",
          caption: "Grafik $y=2^{x}$ dan inversnya $y=\\log_{2}x$ saling mencerminkan terhadap garis $y=x$.",
          svg: '<svg viewBox="0 0 320 240" aria-hidden="true" role="presentation"><defs><marker id="fig-eel-axis" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0,0 L 10,5 L 0,10 z" fill="currentColor"/></marker></defs><line x1="80" y1="175" x2="305" y2="175" stroke="currentColor" stroke-width="1.2" marker-end="url(#fig-eel-axis)"/><line x1="80" y1="175" x2="80" y2="15" stroke="currentColor" stroke-width="1.2" marker-end="url(#fig-eel-axis)"/><line x1="80" y1="175" x2="196" y2="59" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/><line x1="80" y1="151" x2="104" y2="175" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/><line x1="104" y1="127" x2="128" y2="151" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/><line x1="56" y1="163" x2="92" y2="199" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/><polyline points="8,172 32,169 56,163 80,151 104,127 128,79 140,39" fill="none" stroke="currentColor" stroke-width="2.2"/><polyline points="86,223 92,199 104,175 128,151 176,127 216,115 272,103 316,96" fill="none" stroke="currentColor" stroke-width="2.2" stroke-dasharray="7 3"/><circle cx="80" cy="151" r="2.6" fill="currentColor"/><circle cx="104" cy="127" r="2.6" fill="currentColor"/><circle cx="56" cy="163" r="2.6" fill="currentColor"/><circle cx="104" cy="175" r="2.6" fill="currentColor"/><circle cx="128" cy="151" r="2.6" fill="currentColor"/><circle cx="92" cy="199" r="2.6" fill="currentColor"/><text x="96" y="46" font-size="12" fill="currentColor">y = 2^x</text><text x="196" y="120" font-size="12" fill="currentColor">y = log₂ x</text><text x="150" y="90" font-size="12" fill="currentColor">y = x</text><text x="300" y="168" font-size="11" fill="currentColor">x</text><text x="86" y="24" font-size="11" fill="currentColor">y</text><text x="30" y="185" font-size="11" fill="currentColor">O</text></svg>',
        },
      ],
    },
    {
      id: "generalisasi",
      kind: "generalisasi",
      title: "Kunci Umum: Hubungan Balik Eksponen dan Logaritma",
      body: `Seluruh soal pada topik ini bertumpu pada satu kesetaraan. Untuk $a>0$, $a\\neq1$, dan $b>0$:

$$a^{c}=b \\iff \\log_{a}b=c.$$

Dari kesetaraan itu lahir dua strategi umum. Persamaan eksponen diselesaikan dengan **menyamakan basis** (karena fungsi eksponen satu-satu, $a^{m}=a^{n}$ hanya mungkin bila $m=n$) atau dengan **substitusi** $t=a^{x}$ untuk mengubahnya menjadi persamaan kuadrat. Persamaan logaritma diselesaikan dengan mengubahnya kembali ke bentuk eksponen, atau menggabungkan suku dengan sifat $\\log_{a}m+\\log_{a}n=\\log_{a}(mn)$.

Kedua arah selalu ditutup dengan pemeriksaan: solusi eksponen harus memenuhi $t=a^{x}>0$, sedangkan solusi logaritma harus memenuhi syarat **numerus positif**.`,
    },
    {
      id: "rumus",
      kind: "rumus",
      title: "Rumus dan Prosedur",
      body: `**Persamaan eksponen dengan basis sama.** Untuk $a>0$ dan $a\\neq1$, berlaku
$$a^{f(x)}=a^{g(x)} \\Rightarrow f(x)=g(x).$$

**Substitusi variabel.** Untuk bentuk $a^{2x}+p\\,a^{x}+q=0$, misalkan $t=a^{x}$ dengan $t>0$, selesaikan $t^{2}+pt+q=0$, lalu kembalikan ke $a^{x}=t$.

**Definisi logaritma.** Untuk $a>0$, $a\\neq1$, dan $b>0$,
$$a^{c}=b \\iff \\log_{a}b=c.$$

**Sifat logaritma.**
$$\\log_{a}(mn)=\\log_{a}m+\\log_{a}n, \\qquad \\log_{a}\\!\\left(\\frac{m}{n}\\right)=\\log_{a}m-\\log_{a}n, \\qquad \\log_{a}(m^{n})=n\\,\\log_{a}m,$$
$$\\log_{a}a=1, \\qquad \\log_{a}1=0.$$

**Prosedur.** (1) Samakan basis atau ubah ke bentuk eksponen; (2) gunakan substitusi bila muncul suku $a^{2x}$ dan $a^{x}$; (3) setelah solusi diperoleh, periksa syarat $t=a^{x}>0$ pada persamaan eksponen serta syarat numerus positif pada persamaan logaritma.`,
    },
    {
      id: "contoh",
      kind: "contoh",
      title: "Contoh Terbimbing",
      body: `Empat contoh berikut mencakup persamaan eksponen dengan basis sama, substitusi variabel, dan persamaan logaritma. Buka setiap langkah untuk mengikuti penyelesaian lengkapnya.`,
      blocks: [
        {
          kind: "step-reveal",
          intro: "Buka setiap contoh untuk mengikuti penyelesaiannya satu per satu.",
          steps: [
            {
              title: "Contoh 1: menyamakan basis",
              text: `Tentukan $x$ dari $2^{x+1}=32$.

*Penyelesaian.* Nyatakan $32$ sebagai pangkat basis $2$: $32=2^{5}$. Maka
$$2^{x+1}=2^{5} \\Rightarrow x+1=5 \\Rightarrow x=4.$$
Periksa: $2^{4+1}=2^{5}=32$ benar.`,
            },
            {
              title: "Contoh 2: substitusi variabel",
              text: `Tentukan $x$ dari $2^{2x}-5\\cdot2^{x}+4=0$.

*Penyelesaian.* Misalkan $t=2^{x}$ dengan $t>0$. Karena $2^{2x}=(2^{x})^{2}=t^{2}$, persamaan menjadi
$$t^{2}-5t+4=0 \\Rightarrow (t-1)(t-4)=0 \\Rightarrow t=1 \\text{ atau } t=4.$$
Kembalikan: $2^{x}=1 \\Rightarrow x=0$, dan $2^{x}=4=2^{2} \\Rightarrow x=2$. Solusinya $x=0$ atau $x=2$, keduanya memenuhi $t>0$.`,
            },
            {
              title: "Contoh 3: logaritma sebagai invers",
              text: `Tentukan $x$ dari $\\log_{3}(x+2)=2$.

*Penyelesaian.* Ubah ke bentuk eksponen: $3^{2}=x+2$, sehingga $x+2=9$ dan $x=7$. Periksa syarat numerus: $x+2=9>0$ benar. Jadi $x=7$.`,
            },
            {
              title: "Contoh 4: sifat logaritma",
              text: `Hitung $\\log_{2}12+\\log_{2}6-\\log_{2}9$.

*Penyelesaian.* Gabungkan dengan sifat penjumlahan dan pengurangan:
$$\\log_{2}12+\\log_{2}6-\\log_{2}9=\\log_{2}\\!\\left(\\frac{12\\cdot6}{9}\\right)=\\log_{2}8=3.$$
Periksa dengan $2^{3}=8$ benar.`,
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
      body: `Logaritma dipakai untuk menjawab "kapan" pada pertumbuhan dan peluruhan. Populasi $P_{0}$ yang berlipat dengan faktor tetap setiap periode dimodelkan $P(t)=P_{0}\\cdot b^{t}$. Untuk mencari waktu $t$ saat populasi mencapai target $P$, kita menyelesaikan $b^{t}=P/P_{0}$, sehingga

$$t=\\log_{b}\\!\\left(\\frac{P}{P_{0}}\\right).$$

Misalnya, satu sel yang berlipat dua setiap jam mencapai $100$ sel setelah $t=\\log_{2}100 \\approx 6{,}64$ jam. Skala logaritma juga memampatkan rentang yang sangat lebar: larutan dengan $[H^{+}]=10^{-3}$ memiliki $\\text{pH}=3$, dan gempa bermagnitudo $6$ mengguncang $10^{2}=100$ kali lebih kuat daripada gempa bermagnitudo $4$. Untuk penerapan lanjutan, lihat topik [Bunga dan Investasi](/aplikasi/bunga-investasi).`,
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
      id: "tantangan",
      kind: "tantangan",
      title: "Tantangan",
      body: `**Soal.** Tentukan semua nilai $x$ yang memenuhi $\\log_{2}(x+3)+\\log_{2}(x-1)=5$. Periksa syarat numerus sebelum menetapkan jawaban.`,
      blocks: [
        {
          kind: "step-reveal",
          intro: "Gabungkan kedua logaritma, ubah ke bentuk eksponen, lalu saring jawabannya dengan syarat numerus.",
          steps: [
            {
              title: "Tulis syarat numerus",
              text: "Numerus harus positif: $x+3>0$ dan $x-1>0$, sehingga berlaku $x>1$.",
            },
            {
              title: "Gabungkan logaritma",
              text: "Dengan sifat penjumlahan, $\\log_{2}(x+3)+\\log_{2}(x-1)=\\log_{2}\\big((x+3)(x-1)\\big)=5$.",
            },
            {
              title: "Ubah ke bentuk eksponen",
              text: "$(x+3)(x-1)=2^{5}=32$.",
            },
            {
              title: "Selesaikan persamaan kuadrat",
              text: "Jabarkan: $x^{2}+2x-3=32 \\Rightarrow x^{2}+2x-35=0 \\Rightarrow (x+7)(x-5)=0$, sehingga $x=-7$ atau $x=5$.",
            },
            {
              title: "Saring dengan syarat",
              text: "$x=-7$ ditolak karena tidak memenuhi $x>1$, sedangkan $x=5$ memenuhi. Jadi solusinya $x=5$.",
            },
          ],
        },
      ],
    },
    {
      id: "sejarah",
      kind: "sejarah",
      title: "Jejak Sejarah",
      body: `Logaritma lahir dari kebutuhan berhitung yang sangat praktis. Pada awal abad ke-17, para astronom harus mengalikan bilangan-bilangan besar dan panjang. John Napier, dalam *Mirifici Logarithmorum Canonis Descriptio* (1614), memperkenalkan gagasan "bilangan perbandingan" yang mengubah perkalian menjadi penjumlahan. Henry Briggs kemudian menyusun tabel logaritma basis 10 pada 1617 sehingga metode ini cepat menyebar. Kata *logarithm* berasal dari bahasa Yunani *logos* (perbandingan) dan *arithmos* (bilangan).

Untuk beberapa waktu logaritma dipandang semata sebagai alat hitung, bukan sebagai fungsi. Leonhard Euler dalam *Introductio in analysin infinitorum* (1748) menempatkannya pada dasar yang modern: ia memperkenalkan bilangan $e \\approx 2{,}71828$, menuliskan fungsi eksponen $e^{x}$, dan menegaskan bahwa logaritma adalah **operasi invers** dari eksponen. Dari sanalah hubungan $a^{c} = b \\iff \\log_{a}b = c$ menjadi definisi yang kita pakai sekarang. Justru karena sifat balik inilah persamaan eksponen dan persamaan logaritma dapat saling diterjemahkan, dan pemeriksaan syarat numerus positif menjadi bagian yang tak terpisahkan.`,
      blocks: [
        {
          kind: "table",
          caption: "Tokoh kunci dalam perkembangan logaritma",
          headers: [
            "Tokoh",
            "Sumbangan",
          ],
          rows: [
            [
              "John Napier (1614)",
              "Memperkenalkan logaritma sebagai alat hitung.",
            ],
            [
              "Henry Briggs (1617)",
              "Menyusun tabel logaritma basis 10.",
            ],
            [
              "Leonhard Euler (1748)",
              "Menegaskan logaritma sebagai invers eksponen dan memperkenalkan bilangan $e$.",
            ],
          ],
        },
        {
          kind: "callout",
          variant: "concept",
          title: "Inti pandangan Euler",
          text: "Bagi Euler, $e^{x}$ dan $\\ln x$ adalah dua fungsi yang saling membalik. Cara pandang inilah yang mengubah logaritma dari sekadar trik perkalian menjadi konsep pusat dalam kalkulus dan penyelesaian persamaan.",
        },
      ],
    },
    {
      id: "refleksi",
      kind: "refleksi",
      title: "Refleksi",
      body: "Logaritma lahir untuk menjawab pertanyaan yang tidak dapat diselesaikan dengan menyamakan basis. Setiap kali kamu menjumpai pertumbuhan atau peluruhan dengan target yang bukan pangkat bulat, logaritma adalah jalan keluarnya. Jelaskan dengan kata-katamu sendiri mengapa logaritma disebut operasi invers dari eksponen.",
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
      body: `**Tiket keluar.** (1) Selesaikan $5^{x}=125$ dan $5^{x}=100$, lalu jelaskan mengapa yang kedua memerlukan logaritma. (2) Tentukan $x$ dari $\\log_{2}(x-1)=3$ dan sebutkan syarat numerus yang harus dipenuhi. Setelah menjawab, lanjut ke [Latihan & Asesmen](/latihan) topik **Persamaan Eksponen dan Logaritma** untuk latihan tambahan.`,
    },
  ],
};
