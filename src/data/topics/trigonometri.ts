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
      body: `Sebelum melanjutkan, pastikan kamu menguasai:

- teorema Pythagoras, misalnya $3^{2}+4^{2}=5^{2}$;
- penyederhanaan bentuk akar, misalnya $\\dfrac{1}{\\sqrt{3}}=\\dfrac{\\sqrt{3}}{3}$;
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

Sebagai contoh, pada segitiga siku-siku dengan panjang sisi $3$, $4$, dan $5$, untuk sudut $\\alpha$ yang menghadap sisi $3$:

$$\\sin\\alpha=\\frac{3}{5},\\qquad \\cos\\alpha=\\frac{4}{5},\\qquad \\tan\\alpha=\\frac{3}{4}.$$`,
      blocks: [
        {
          kind: "callout",
          variant: "concept",
          title: "Inti yang perlu diingat",
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
      body: `Perbandingan trigonometri di atas terbatas pada segitiga siku-siku. Untuk segitiga sebarang dengan sisi $a, b, c$ yang berhadapan dengan sudut $A, B, C$, berlaku:

**Aturan sinus**
$$\\frac{a}{\\sin A}=\\frac{b}{\\sin B}=\\frac{c}{\\sin C}.$$

**Aturan kosinus**
$$a^{2}=b^{2}+c^{2}-2bc\\cos A.$$

Perhatikan bahwa bila $A=90^\\circ$, maka $\\cos 90^\\circ=0$ sehingga aturan kosinus kembali menjadi teorema Pythagoras $a^{2}=b^{2}+c^{2}$. Jadi teorema Pythagoras adalah kasus khusus dari aturan kosinus.`,
      blocks: [
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
      body: "Fungsi sinus $f(x)=a\\sin(kx)$ muncul dari memutar sebuah titik pada lingkaran satuan. Sebelum melanjutkan, selidiki bagaimana amplitudo $a$ dan bilangan gelombang $k$ mengubah bentuk gelombang.",
      blocks: [
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
      body: `**Contoh 1.** Pada segitiga siku-siku, sudut $\\alpha=30^\\circ$ dan sisi miring $10$ cm. Tentukan panjang sisi depan dan sisi samping.

*Penyelesaian.* Sisi depan $=10\\sin 30^\\circ=10\\cdot\\dfrac{1}{2}=5$ cm. Sisi samping $=10\\cos 30^\\circ=10\\cdot\\dfrac{\\sqrt{3}}{2}=5\\sqrt{3}\\approx 8{,}66$ cm. Periksa: $5^{2}+(5\\sqrt{3})^{2}=25+75=100=10^{2}$.

**Contoh 2.** Pada jarak $40$ m dari kaki menara, sudut elevasi ke puncak adalah $30^\\circ$. Tentukan tinggi menara. Ikuti langkah pembahasannya pada panel di bawah.

**Contoh 3.** Pada segitiga $ABC$ diketahui $b=5$, $c=8$, dan $A=60^\\circ$. Tentukan panjang sisi $a$.

*Penyelesaian.* Gunakan aturan kosinus:

$$a^{2}=b^{2}+c^{2}-2bc\\cos A=25+64-2\\cdot5\\cdot8\\cdot\\frac{1}{2}=89-40=49 \\Rightarrow a=7.$$`,
      blocks: [
        {
          kind: "step-reveal",
          intro: "Mari hitung tinggi menara dari sudut elevasi $30^\\circ$ pada jarak $40$ m, satu langkah sekaligus.",
          steps: [
            {
              title: "Kenali sisi",
              text: "Sudut elevasi $30^\\circ$ menghadap tinggi menara $h$ (sisi depan) dan berdekatan dengan jarak $40$ m (sisi samping).",
            },
            {
              title: "Pilih perbandingan",
              text: "Karena memakai sisi depan dan sisi samping, gunakan tangen: $\\tan 30^\\circ=\\dfrac{h}{40}$.",
            },
            {
              title: "Hitung",
              text: "$h=40\\tan 30^\\circ=40\\cdot\\dfrac{\\sqrt{3}}{3}=\\dfrac{40\\sqrt{3}}{3}$.",
            },
            {
              title: "Tafsirkan",
              text: "$\\dfrac{40\\sqrt{3}}{3}\\approx 23{,}09$ m, jadi tinggi menara sekitar $23{,}09$ m.",
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
      id: "refleksi",
      kind: "refleksi",
      title: "Refleksi",
      body: "Jawab dengan jujur:",
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
      body: `**Tiket keluar.** (1) Mengapa nilai perbandingan trigonometri tidak bergantung pada ukuran segitiga? (2) Kapan aturan kosinus dipakai alih-alih perbandingan pada segitiga siku-siku? Setelah menjawab, lanjut ke [Latihan & Asesmen](/latihan) topik **Trigonometri** untuk latihan tambahan.`,
    },
  ],
};
