import type { Topic } from '@/types/content';

export const trigonometri: Topic = {
  id: 'trigonometri',
  slug: 'trigonometri',
  title: 'Trigonometri',
  subtitle: 'Perbandingan pada segitiga siku-siku dan pengukuran sudut',
  grade: 'X',
  phase: 'E',
  element: 'geometri',
  featured: true,
  status: 'lengkap',
  estimatedMinutes: 90,
  summary:
    'Mengenal sinus, kosinus, dan tangen melalui perbandingan sisi segitiga siku-siku, sudut istimewa, identitas dasar, serta pengantar aturan sinus dan kosinus.',
  description:
    'Trigonometri menghubungkan sudut dengan panjang sisi. Berawal dari perbandingan pada segitiga siku-siku, kita menemukan nilai sinus, kosinus, dan tangen untuk sudut istimewa, membangun identitas dasar, lalu memperluasnya ke segitiga sebarang melalui aturan sinus dan kosinus. Topik ini menjadi alat utama untuk mengukur tinggi menara, lebar sungai, hingga posisi pada navigasi.',
  keywords: [
    'trigonometri',
    'sinus',
    'kosinus',
    'tangen',
    'sudut istimewa',
    'identitas trigonometri',
    'aturan sinus',
    'aturan kosinus',
    'sudut elevasi',
  ],
  prerequisites: [],
  relatedTopics: ['lingkaran'],
  prerequisiteKnowledge: [
    'Teorema Pythagoras pada segitiga siku-siku',
    'Operasi bilangan dan bentuk akar',
    'Kesebangunan segitiga',
  ],
  objectives: [
    { text: 'Menjelaskan perbandingan trigonometri sinus, kosinus, dan tangen pada segitiga siku-siku.' },
    { text: 'Menentukan nilai perbandingan trigonometri untuk sudut-sudut istimewa.' },
    { text: 'Menggunakan identitas dasar $\\sin^{2}\\alpha+\\cos^{2}\\alpha=1$ dan $\\tan\\alpha=\\dfrac{\\sin\\alpha}{\\cos\\alpha}$.' },
    { text: 'Menyelesaikan masalah pengukuran menggunakan sudut elevasi dan sudut depresi.' },
    { text: 'Mengenal aturan sinus dan kosinus sebagai perluasan pada segitiga sebarang.' },
  ],
  applications: ['pengukuran-tinggi-menara', 'luas-juring-taman'],
  sections: [
    {
      id: "tujuan",
      kind: "tujuan",
      title: "Tujuan Pembelajaran",
      body: "Setelah mempelajari topik ini, peserta didik dapat menjelaskan perbandingan trigonometri pada segitiga siku-siku, menentukan nilai sudut istimewa, menggunakan identitas dasar, serta memanfaatkan trigonometri untuk mengukur jarak dan tinggi secara tidak langsung.",
    },
    {
      id: "pemantik",
      kind: "pemantik",
      title: "Pertanyaan Pemantik",
      body: `Seorang pengamat berdiri **40 m** dari kaki sebuah menara. Ia mengarahkan alat ukur ke puncak menara dan mencatat sudut elevasi sebesar **45°**. Tanpa memanjat, mungkinkah ia mengetahui tinggi menara?

Kunci jawabannya terletak pada perbandingan sisi segitiga siku-siku. Jika sudut $45^\\circ$ membuat sisi depan dan sisi samping **sama panjang**, apa dugaanmu tentang tinggi menara?`,
      blocks: [
        {
          kind: "prediction",
          prompt: "Pengamat berjarak $40$ m dari kaki menara dengan sudut elevasi $45^\\circ$. Berapa tinggi menara?",
          options: [
            "Sekitar 20 m",
            "Sekitar 40 m",
            "Sekitar 69 m",
            "Tidak dapat ditentukan dari informasi itu",
          ],
          reveal: "Segitiga siku-siku dengan sudut $45^\\circ$ selalu *sama kaki*, sehingga sisi depan (tinggi menara) sama dengan sisi samping (jarak pengamat). Karena $\\tan 45^\\circ=1$, tinggi menara $=40\\tan 45^\\circ=40$ m. Inilah inti trigonometri: **cukup mengetahui satu sudut dan satu sisi** untuk menentukan sisi lain.",
          saveLabel: "Simpan dugaan",
        },
      ],
    },
    {
      id: "prasyarat",
      kind: "prasyarat",
      title: "Prasyarat",
      body: `Perbandingan trigonometri berdiri di atas kesebangunan segitiga siku-siku. Bekal yang perlu kamu siapkan:

- teorema Pythagoras, misalnya $3^{2}+4^{2}=5^{2}$;
- penyederhanaan bentuk akar, seperti $\\dfrac{1}{\\sqrt{3}}=\\dfrac{\\sqrt{3}}{3}$;
- kesebangunan segitiga: dua segitiga dengan sudut-sudut sama memiliki perbandingan sisi yang sama.`,
    },
    {
      id: "konteks",
      kind: "konteks",
      title: "Situasi dan Konteks",
      body: "Mengukur tinggi pohon, lebar sungai, atau kemiringan atap sering kali sulit dilakukan secara langsung. Namun semua segitiga siku-siku dengan sudut yang sama bersifat **sebangun**, sehingga perbandingan sisinya tetap sama berapa pun ukurannya. Sifat inilah yang membuat trigonometri ampuh: kita cukup mengukur satu sudut dan satu panjang, lalu menghitung sisanya.",
    },
    {
      id: "konsep",
      kind: "konsep",
      title: "Konsep Inti: Perbandingan Trigonometri",
      body: `Perhatikan segitiga siku-siku dengan sudut lancip $\\alpha$. Terhadap sudut $\\alpha$:

- **sisi depan** adalah sisi di hadapan $\\alpha$;
- **sisi samping** adalah sisi yang berdekatan dengan $\\alpha$ (bukan sisi miring);
- **sisi miring** (hipotenusa) adalah sisi terpanjang, di hadapan sudut siku-siku.

Berdasarkan definisi di atas:

$$\\sin\\alpha=\\frac{\\text{depan}}{\\text{miring}},\\qquad \\cos\\alpha=\\frac{\\text{samping}}{\\text{miring}},\\qquad \\tan\\alpha=\\frac{\\text{depan}}{\\text{samping}}.$$

Pada segitiga siku-siku dengan panjang sisi $3$, $4$, dan $5$, untuk sudut $\\alpha$ yang menghadap sisi $3$:

$$\\sin\\alpha=\\frac{3}{5},\\qquad \\cos\\alpha=\\frac{4}{5},\\qquad \\tan\\alpha=\\frac{3}{4}.$$`,
      blocks: [
        {
          kind: "figure",
          alt: "Segitiga siku-siku dengan sisi tegak berlabel depan, sisi datar berlabel samping, sisi miring berlabel miring, dan sudut theta di salah satu sudut lancip.",
          caption: "Sisi-sisi segitiga siku-siku terhadap sudut $\\theta$: $\\sin\\theta=\\frac{\\text{depan}}{\\text{miring}}$, $\\cos\\theta=\\frac{\\text{samping}}{\\text{miring}}$, $\\tan\\theta=\\frac{\\text{depan}}{\\text{samping}}$.",
          svg: '<svg viewBox="0 0 320 220" aria-hidden="true" role="presentation"><polygon points="60,180 60,55 265,180" fill="none" stroke="currentColor" stroke-width="2"/><path d="M 60,166 L 74,166 L 74,180" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M 231,180 A 34,34 0 0 1 236,162" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="244" y="171" font-size="13" fill="currentColor">θ</text><text x="6" y="122" font-size="12" fill="currentColor">depan</text><text x="150" y="205" font-size="12" fill="currentColor">samping</text><text x="150" y="104" font-size="12" fill="currentColor">miring</text></svg>',
        },
        {
          kind: "callout",
          variant: "concept",
          title: "Nilai bergantung pada sudut, bukan ukuran",
          text: "Perbandingan trigonometri **hanya bergantung pada besar sudut**, bukan pada ukuran segitiga. Nilai perbandingan yang sama muncul pada semua segitiga yang sebangun.",
        },
        {
          kind: "match",
          intro: "Pasangkan istilah dengan maknanya.",
          pairs: [
            {
              left: "Sinus",
              right: "Perbandingan sisi depan dengan sisi miring",
            },
            {
              left: "Kosinus",
              right: "Perbandingan sisi samping dengan sisi miring",
            },
            {
              left: "Tangen",
              right: "Perbandingan sisi depan dengan sisi samping",
            },
            {
              left: "Hipotenusa",
              right: "Sisi terpanjang, di hadapan sudut siku-siku",
            },
          ],
        },
      ],
    },
    {
      id: "representasi",
      kind: "representasi",
      title: "Representasi: Dua Sudut Lancip",
      body: "Karena jumlah sudut segitiga adalah $180^\\circ$ dan satu sudutnya $90^\\circ$, kedua sudut lancip saling **berpenyiku**. Perhatikan bagaimana perbandingannya bertukar.",
      blocks: [
        {
          kind: "table",
          caption: "Perbandingan trigonometri pada segitiga siku-siku bersisi $3$, $4$, $5$",
          headers: [
            "Sudut",
            "$\\sin$",
            "$\\cos$",
            "$\\tan$",
          ],
          rows: [
            [
              "$\\alpha$ (menghadap sisi 3)",
              "$\\dfrac{3}{5}$",
              "$\\dfrac{4}{5}$",
              "$\\dfrac{3}{4}$",
            ],
            [
              "$\\beta$ (menghadap sisi 4)",
              "$\\dfrac{4}{5}$",
              "$\\dfrac{3}{5}$",
              "$\\dfrac{4}{3}$",
            ],
          ],
        },
        {
          kind: "callout",
          variant: "tip",
          title: "Pola berpenyiku",
          text: "Karena $\\alpha+\\beta=90^\\circ$, berlaku $\\sin\\alpha=\\cos\\beta$ dan $\\cos\\alpha=\\sin\\beta$. Perhatikan $\\sin\\alpha=\\dfrac{3}{5}=\\cos\\beta$.",
        },
        {
          kind: "tabs",
          items: [
            {
              label: "Simbolik",
              body: "Untuk sudut $\\alpha$: $\\sin\\alpha=\\dfrac{3}{5}$, $\\cos\\alpha=\\dfrac{4}{5}$, dan $\\tan\\alpha=\\dfrac{3}{4}$.",
            },
            {
              label: "Tabel",
              body: "Baris $\\alpha$ dan $\\beta$ menunjukkan perbandingan yang bertukar karena kedua sudut berpenyiku.",
            },
            {
              label: "Grafik",
              body: "Pada segitiga bersisi $3$, $4$, $5$, sisi $3$ berada di hadapan $\\alpha$, sisi $4$ di hadapan $\\beta$, dan sisi $5$ adalah sisi miring.",
            },
          ],
        },
      ],
    },
    {
      id: "sudut-istimewa",
      kind: "konsep",
      title: "Sudut Istimewa",
      body: "Sudut $0^\\circ, 30^\\circ, 45^\\circ, 60^\\circ$, dan $90^\\circ$ disebut **sudut istimewa** karena nilai perbandingannya dapat dinyatakan dalam bentuk akar sederhana tanpa kalkulator.",
      blocks: [
        {
          kind: "table",
          caption: "Nilai perbandingan trigonometri sudut istimewa",
          headers: [
            "Sudut",
            "$0^\\circ$",
            "$30^\\circ$",
            "$45^\\circ$",
            "$60^\\circ$",
            "$90^\\circ$",
          ],
          rows: [
            [
              "$\\sin$",
              "$0$",
              "$\\dfrac{1}{2}$",
              "$\\dfrac{\\sqrt{2}}{2}$",
              "$\\dfrac{\\sqrt{3}}{2}$",
              "$1$",
            ],
            [
              "$\\cos$",
              "$1$",
              "$\\dfrac{\\sqrt{3}}{2}$",
              "$\\dfrac{\\sqrt{2}}{2}$",
              "$\\dfrac{1}{2}$",
              "$0$",
            ],
            [
              "$\\tan$",
              "$0$",
              "$\\dfrac{\\sqrt{3}}{3}$",
              "$1$",
              "$\\sqrt{3}$",
              "tidak terdefinisi",
            ],
          ],
        },
      ],
    },
    {
      id: "identitas",
      kind: "generalisasi",
      title: "Identitas Dasar",
      body: `Misalkan sisi depan $=y$, sisi samping $=x$, dan sisi miring $=r$. Dengan teorema Pythagoras $x^{2}+y^{2}=r^{2}$. Membagi kedua ruas dengan $r^{2}$ memberi

$$\\left(\\frac{x}{r}\\right)^{2}+\\left(\\frac{y}{r}\\right)^{2}=1 \\quad\\Longrightarrow\\quad \\cos^{2}\\alpha+\\sin^{2}\\alpha=1.$$

Selain itu, dari definisinya langsung diperoleh

$$\\tan\\alpha=\\frac{\\text{depan}}{\\text{samping}}=\\frac{\\text{depan}/\\text{miring}}{\\text{samping}/\\text{miring}}=\\frac{\\sin\\alpha}{\\cos\\alpha}.$$

**Contoh penggunaan.** Jika $\\sin\\alpha=\\dfrac{3}{5}$ dan $\\alpha$ lancip, maka

$$\\cos^{2}\\alpha=1-\\left(\\frac{3}{5}\\right)^{2}=1-\\frac{9}{25}=\\frac{16}{25} \\Rightarrow \\cos\\alpha=\\frac{4}{5}, \\qquad \\tan\\alpha=\\frac{3/5}{4/5}=\\frac{3}{4}.$$

Hasil ini konsisten dengan segitiga $3$-$4$-$5$.`,
    },
    {
      id: "aturan",
      kind: "rumus",
      title: "Pengantar Aturan Sinus dan Kosinus",
      body: `Perbandingan trigonometri di atas terbatas pada segitiga siku-siku. Untuk **segitiga sebarang** (tidak harus siku-siku) dengan sisi $a, b, c$ yang masing-masing berhadapan dengan sudut $A, B, C$ seperti pada gambar, berlaku dua aturan umum berikut.`,
      blocks: [
        {
          kind: "figure",
          alt: "Segitiga sebarang dengan titik sudut A, B, dan C. Sisi a berada di hadapan sudut A, sisi b di hadapan sudut B, dan sisi c di hadapan sudut C.",
          caption: "Pada segitiga sebarang, setiap sisi berhadapan dengan satu sudut: $a$ di hadapan $A$, $b$ di hadapan $B$, dan $c$ di hadapan $C$.",
          svg: '<svg viewBox="0 0 320 240" aria-hidden="true" role="presentation"><polygon points="150,45 45,195 285,195" fill="none" stroke="currentColor" stroke-width="2"/><path d="M138.5,61.4 Q150.6,54.4 163.4,59.9" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M56.5,178.6 Q54.5,190.1 65,195" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M271.6,180.1 Q275,190.5 265,195" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="144" y="36" font-size="13" fill="currentColor">A</text><text x="30" y="212" font-size="13" fill="currentColor">B</text><text x="288" y="212" font-size="13" fill="currentColor">C</text><text x="160" y="220" font-size="13" fill="currentColor">a</text><text x="230" y="126" font-size="13" fill="currentColor">b</text><text x="76" y="126" font-size="13" fill="currentColor">c</text></svg>',
        },
        {
          kind: "tabs",
          items: [
            {
              label: "Aturan sinus",
              body: "Untuk segitiga sebarang berlaku\n$$\\frac{a}{\\sin A}=\\frac{b}{\\sin B}=\\frac{c}{\\sin C}.$$\nAturan ini dipakai bila diketahui satu sisi dan dua sudut, atau dua sisi dan satu sudut di hadapan salah satunya.",
            },
            {
              label: "Aturan kosinus",
              body: "Untuk segitiga sebarang berlaku\n$$a^{2}=b^{2}+c^{2}-2bc\\cos A.$$\nBila $A=90^\\circ$, maka $\\cos 90^\\circ=0$ sehingga aturan kosinus kembali menjadi teorema Pythagoras $a^{2}=b^{2}+c^{2}$. Jadi teorema Pythagoras adalah kasus khusus dari aturan kosinus.",
            },
          ],
        },
        {
          kind: "callout",
          variant: "warning",
          title: "Hati-hati",
          text: "Sudut dan sisi harus **berpasangan dengan benar**: sisi $a$ selalu berhadapan dengan sudut $A$. Menukar pasangan ini adalah penyebab kesalahan paling umum.",
        },
      ],
    },
    {
      id: "eksplorasi",
      kind: "eksplorasi",
      title: "Eksplorasi Gelombang Sinus",
      body: `Fungsi sinus $f(x)=a\\sin(kx)$ muncul dari memutar sebuah titik pada lingkaran satuan. **Lingkaran satuan** adalah lingkaran berjari-jari $1$ berpusat di titik asal $O(0,0)$; jika sebuah titik diputar sejauh **sudut sebarang** $\\theta$ dari sumbu-$x$ positif, koordinatnya menjadi $(\\cos\\theta,\\sin\\theta)$. Dengan cara ini sinus dan kosinus terdefinisi untuk semua sudut, tidak hanya sudut lancip segitiga. Pada $f(x)=a\\sin(kx)$, bilangan $a$ adalah **amplitudo**, yaitu setengah tinggi gelombang, sedangkan **periode** adalah $\\dfrac{2\\pi}{k}$ radian, yaitu panjang satu gelombang penuh. Amati gambar berikut, lalu selidiki bagaimana amplitudo $a$ dan bilangan gelombang $k$ mengubah bentuk gelombang.`,
      blocks: [
        {
          kind: "figure",
          alt: "Lingkaran satuan berjari-jari satu dengan sebuah titik pada lingkaran, sudut theta dari sumbu x positif, serta proyeksi mendatar cos theta dan proyeksi tegak sin theta.",
          caption: "Lingkaran satuan: titik pada sudut $\\theta$ berkoordinat $(\\cos\\theta,\\sin\\theta)$, dengan proyeksi $\\cos\\theta$ pada sumbu-$x$ dan $\\sin\\theta$ pada sumbu-$y$.",
          svg: '<svg viewBox="0 0 320 280" aria-hidden="true" role="presentation"><line x1="10" y1="160" x2="235" y2="160" stroke="currentColor" stroke-width="1.5"/><line x1="110" y1="15" x2="110" y2="272" stroke="currentColor" stroke-width="1.5"/><circle cx="110" cy="160" r="100" fill="none" stroke="currentColor" stroke-width="1.6"/><line x1="110" y1="160" x2="186.6" y2="95.7" stroke="currentColor" stroke-width="2"/><line x1="186.6" y1="95.7" x2="186.6" y2="160" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 3"/><line x1="186.6" y1="95.7" x2="110" y2="95.7" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 3"/><path d="M 150,160 A 40,40 0 0 0 140.6,134.3" fill="none" stroke="currentColor" stroke-width="1.4"/><circle cx="186.6" cy="95.7" r="3" fill="currentColor"/><text x="140" y="132" font-size="12" fill="currentColor">1</text><text x="147" y="152" font-size="12" fill="currentColor">θ</text><text x="63" y="92" font-size="12" fill="currentColor">sin θ</text><text x="158" y="182" font-size="12" fill="currentColor">cos θ</text><text x="192" y="88" font-size="12" fill="currentColor">(cos θ, sin θ)</text></svg>',
        },
        {
          kind: "exploration",
          explorationId: "trigonometri-gelombang",
        },
      ],
    },
    {
      id: "contoh",
      kind: "contoh",
      title: "Contoh Terbimbing",
      blocks: [
        {
          kind: "step-reveal",
          intro: "Kerjakan contoh-contoh berikut langkah demi langkah, mulai dari perbandingan pada segitiga siku-siku sampai aturan sinus dan kosinus.",
          steps: [
            {
              title: "Contoh 1: Sisi segitiga siku-siku",
              text: `Pada segitiga siku-siku, sudut $\\alpha=30^\\circ$ dan sisi miring $10$ cm. Tentukan sisi depan dan sisi samping.

Sisi depan $=10\\sin 30^\\circ=10\\cdot\\dfrac{1}{2}=5$ cm. Sisi samping $=10\\cos 30^\\circ=10\\cdot\\dfrac{\\sqrt{3}}{2}=5\\sqrt{3}\\approx 8{,}66$ cm. Periksa: $5^{2}+(5\\sqrt{3})^{2}=25+75=100=10^{2}$.`,
            },
            {
              title: "Contoh 2: kenali sisi sudut elevasi",
              text: "Pada jarak $40$ m dari kaki menara, sudut elevasi ke puncak adalah $30^\\circ$. Sudut itu menghadap tinggi menara $h$ (sisi depan) dan berdekatan dengan jarak $40$ m (sisi samping).",
            },
            {
              title: "Contoh 2: pilih perbandingan",
              text: "Karena memakai sisi depan dan sisi samping, gunakan tangen: $\\tan 30^\\circ=\\dfrac{h}{40}$.",
            },
            {
              title: "Contoh 2: hitung dan tafsirkan",
              text: "$h=40\\tan 30^\\circ=40\\cdot\\dfrac{\\sqrt{3}}{3}=\\dfrac{40\\sqrt{3}}{3}\\approx 23{,}09$. Jadi tinggi menara sekitar $23{,}09$ m.",
            },
            {
              title: "Contoh 3: Aturan kosinus",
              text: `Pada segitiga $ABC$ diketahui $b=5$, $c=8$, dan $A=60^\\circ$. Tentukan panjang sisi $a$.

Gunakan aturan kosinus:
$$a^{2}=b^{2}+c^{2}-2bc\\cos A=25+64-2\\cdot5\\cdot8\\cdot\\frac{1}{2}=89-40=49,$$
sehingga $a=\\sqrt{49}=7$.`,
            },
            {
              title: "Contoh 4: Aturan sinus",
              text: `Pada segitiga $ABC$ diketahui $A=45^\\circ$, $B=30^\\circ$, dan $a=10$. Tentukan panjang sisi $b$.

Dengan aturan sinus, $\\dfrac{b}{\\sin B}=\\dfrac{a}{\\sin A}$, sehingga
$$b=a\\cdot\\frac{\\sin B}{\\sin A}=10\\cdot\\frac{\\frac{1}{2}}{\\frac{\\sqrt{2}}{2}}=\\frac{10}{\\sqrt{2}}=5\\sqrt{2}\\approx 7{,}07.$$`,
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
      body: `Trigonometri dipakai pada survei tanah (**triangulasi**), navigasi kapal dan pesawat, desain atap, serta grafik gelombang bunyi dan cahaya. Prinsipnya selalu sama: ukur sudut yang sulit dikira-kira, lalu hitung panjang yang sulit dijangkau.

Sebagai gambaran, sebuah tiang bendera berjarak $18$ m dari pengamat dengan sudut elevasi $55^\\circ$ memiliki tinggi sekitar $18\\tan 55^\\circ \\approx 25{,}7$ m. Untuk menaksir lebar sungai, dua penanda dipasang $60$ m terpisah di satu tepi, lalu sudut ke sebuah pohon di tepi seberang diukur dari keduanya; aturan sinus mengubah dua sudut itu menjadi lebar sungai. Atap rumah umumnya memakai kemiringan $30^\\circ$ sampai $45^\\circ$ agar air hujan cepat mengalir sekaligus tetap kuat menahan beban.

Untuk latihan membaca kasus nyata, lihat [Menaksir Tinggi Menara](/aplikasi/pengukuran-tinggi-menara).`,
    },
    {
      id: "kesalahan-umum",
      kind: "kesalahan-umum",
      title: "Kesalahan Umum",
      body: `**1. Tertukar antara sisi depan dan sisi samping.** Perbandingan bergantung pada **sudut acuan**. Sebelum menulis $\\sin\\alpha$, tandai dahulu sisi mana yang di hadapan $\\alpha$. Sisi miring tidak pernah menjadi "samping".

**2. Menganggap $\\sin 2\\alpha=2\\sin\\alpha$.** Uji dengan $\\alpha=30^\\circ$: $\\sin 60^\\circ=\\dfrac{\\sqrt{3}}{2}\\approx 0{,}866$, sedangkan $2\\sin 30^\\circ=2\\cdot\\dfrac{1}{2}=1$. Keduanya **tidak sama**; fungsi trigonometri bukan operasi linear.

**3. Menyamakan satuan sudut kalkulator.** Pastikan kalkulator berada pada mode **derajat** saat menghitung $\\tan 30^\\circ$; mode radian memberi nilai yang sama sekali berbeda.

**4. Memakai $\\tan$ untuk mencari sisi miring.** $\\tan$ hanya melibatkan sisi depan dan samping. Untuk sisi miring gunakan $\\sin$ atau $\\cos$.`,
      blocks: [
        {
          kind: "spot-mistake",
          intro: "Seorang siswa menghitung $\\sin 60^\\circ$ dengan mengaitkannya ke sudut $30^\\circ$. Klik langkah yang keliru.",
          steps: [
            "Diketahui $\\sin 30^\\circ=\\dfrac{1}{2}$.",
            "Karena $60^\\circ=2\\cdot30^\\circ$, maka $\\sin 60^\\circ=\\sin(2\\cdot30^\\circ)=2\\sin 30^\\circ$.",
            "Jadi $\\sin 60^\\circ=2\\cdot\\dfrac{1}{2}=1$.",
          ],
          wrongIndex: 1,
          explanation: "Sifat $\\sin 2\\alpha=2\\sin\\alpha$ tidak berlaku; fungsi trigonometri bukan operasi linear. Nilai yang benar adalah $\\sin 60^\\circ=\\dfrac{\\sqrt{3}}{2}\\approx 0{,}866$, bukan $1$.",
        },
      ],
    },
    {
      id: "tantangan",
      kind: "tantangan",
      title: "Tantangan",
      body: `**Soal.** Seorang pengamat berdiri di titik $A$ dan mengukur sudut elevasi ke puncak sebuah menara sebesar $30^\\circ$. Ia berjalan $20$ m lurus mendekati kaki menara menuju titik $B$, lalu mengukur lagi sudut elevasinya sebesar $60^\\circ$. Abaikan tinggi alat ukur. Tentukan tinggi menara.`,
      blocks: [
        {
          kind: "step-reveal",
          intro: "Bentuk dua segitiga siku-siku dari kedua posisi, lalu samakan tinggi menara.",
          steps: [
            {
              title: "Tentukan variabel",
              text: "Misalkan $h$ tinggi menara dan $x$ jarak dari titik $B$ ke kaki menara.",
            },
            {
              title: "Dari titik dekat $B$",
              text: "Segitiga siku-siku dengan sudut $60^\\circ$: $\\tan 60^\\circ=\\dfrac{h}{x}$, sehingga $h=x\\sqrt{3}$.",
            },
            {
              title: "Dari titik jauh $A$",
              text: "Jarak ke kaki menara sekarang $x+20$ dan sudutnya $30^\\circ$: $\\tan 30^\\circ=\\dfrac{h}{x+20}$, sehingga $h=\\dfrac{x+20}{\\sqrt{3}}$.",
            },
            {
              title: "Samakan dan selesaikan",
              text: "$x\\sqrt{3}=\\dfrac{x+20}{\\sqrt{3}}$. Kalikan dengan $\\sqrt{3}$: $3x=x+20$, sehingga $2x=20$ dan $x=10$ m.",
            },
            {
              title: "Hitung tinggi menara",
              text: "$h=x\\sqrt{3}=10\\sqrt{3}\\approx 17{,}32$ m. Jadi tinggi menara sekitar $17{,}32$ m.",
            },
          ],
        },
      ],
    },
    {
      id: "sejarah",
      kind: "sejarah",
      title: "Jejak Sejarah",
      body: `Trigonometri tumbuh dari kebutuhan astronomi. Pada abad ke-2 SM, Hipparchus dari Nicea menyusun tabel **tali busur** yang menghubungkan sudut dengan panjang tali busur pada sebuah lingkaran, sebuah alat untuk memperkirakan posisi benda langit. Claudius Ptolemaeus, sekitar empat abad kemudian, menyempurnakan tabel itu dalam *Almagest* dengan mengambil lingkaran berjari-jari 60 dan membuktikan sifat tali busur yang setara dengan rumus penjumlahan sudut. Pada mulanya yang dihitung adalah tali busur penuh, bukan setengahnya.

Di India, Aryabhata (sekitar 500 M) memakai **setengah tali busur** (*ardha-jya*), yang lebih dekat dengan sinus kita sekarang. Kata *jya* berarti tali busur; melalui terjemahan Arab menjadi *jayb* dan kemudian dibaca *jaib* ("kantong"), istilah itu masuk ke bahasa Latin sebagai *sinus*. Kosinus muncul belakangan sebagai *sinus complementi*, yakni sinus dari sudut penyiku, sedangkan istilah *tangen* dipopulerkan pada abad ke-16. Notasi singkat $\\sin$, $\\cos$, dan $\\tan$ serta perumusan pada lingkaran satuan baru matang pada karya Leonhard Euler pada abad ke-18. Jadi perbandingan $\\sin\\alpha = \\dfrac{\\text{depan}}{\\text{miring}}$ yang kita pelajari adalah warisan panjang dari cara para astronom mengukur langit.`,
      blocks: [
        {
          kind: "table",
          caption: "Dari tabel tali busur ke notasi modern",
          headers: [
            "Tokoh",
            "Sumbangan",
          ],
          rows: [
            [
              "Hipparchus (abad ke-2 SM)",
              "Menyusun tabel tali busur untuk astronomi.",
            ],
            [
              "Ptolemaeus (abad ke-2 M)",
              "Menyempurnakan tabel tali busur dalam *Almagest*.",
            ],
            [
              "Aryabhata (sekitar 500 M)",
              "Memakai setengah tali busur, cikal bakal sinus.",
            ],
            [
              "Leonhard Euler (abad ke-18)",
              "Merumuskan trigonometri pada lingkaran satuan dengan notasi modern.",
            ],
          ],
        },
        {
          kind: "callout",
          variant: "info",
          title: "Dari mana kata sinus",
          text: "Kata *sinus* bukan istilah asli Latin, tetapi hasil rantai terjemahan: *jya* (Sanskerta) menjadi *jayb* dan *jaib* (Arab), lalu dibaca *sinus* oleh para penerjemah Latin. Bahkan namanya menempuh perjalanan lebih panjang daripada rumusnya.",
        },
      ],
    },
    {
      id: "refleksi",
      kind: "refleksi",
      title: "Refleksi",
      body: "Perbandingan trigonometri mengubah satu sudut dan satu panjang menjadi seluruh ukuran segitiga. Gunakan refleksi berikut untuk menghubungkan rumus dengan pengukuran nyata, lalu pilih satu objek tinggi di sekitarmu dan rancang langkah pengukurannya dengan sudut yang tepat.",
      blocks: [
        {
          kind: "reflection",
          prompts: [
            "Bagaimana kamu memutuskan apakah suatu masalah menggunakan $\\sin$, $\\cos$, atau $\\tan$?",
            "Kapan aturan sinus atau kosinus diperlukan, dan kapan perbandingan segitiga siku-siku sudah cukup?",
            "Sebutkan satu benda di sekitarmu yang tingginya sulit diukur langsung dan rancang cara mengukurnya dengan trigonometri.",
          ],
          confidenceLabel: "Seberapa yakin kamu memilih perbandingan trigonometri yang tepat?",
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
            "Bentuk",
          ],
          rows: [
            [
              "Sinus",
              "$\\sin\\alpha=\\dfrac{\\text{depan}}{\\text{miring}}$",
            ],
            [
              "Kosinus",
              "$\\cos\\alpha=\\dfrac{\\text{samping}}{\\text{miring}}$",
            ],
            [
              "Tangen",
              "$\\tan\\alpha=\\dfrac{\\text{depan}}{\\text{samping}}=\\dfrac{\\sin\\alpha}{\\cos\\alpha}$",
            ],
            [
              "Identitas dasar",
              "$\\sin^{2}\\alpha+\\cos^{2}\\alpha=1$",
            ],
            [
              "Aturan sinus",
              "$\\dfrac{a}{\\sin A}=\\dfrac{b}{\\sin B}=\\dfrac{c}{\\sin C}$",
            ],
            [
              "Aturan kosinus",
              "$a^{2}=b^{2}+c^{2}-2bc\\cos A$",
            ],
          ],
        },
      ],
    },
    {
      id: "evaluasi",
      kind: "evaluasi",
      title: "Evaluasi",
      body: `**Cek pemahaman.** Tuliskan dengan kata-katamu sendiri mengapa $\\sin$, $\\cos$, dan $\\tan$ bernilai sama untuk semua segitiga yang sebangun. Kemudian jelaskan satu situasi ketika aturan kosinus lebih tepat dipakai daripada teorema Pythagoras. Setelah menjawab, lanjut ke [Latihan & Asesmen](/latihan) topik **Trigonometri** untuk latihan tambahan.`,
    },
  ],
};
