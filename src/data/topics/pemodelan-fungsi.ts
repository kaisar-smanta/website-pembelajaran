import type { Topic } from '@/types/content';

export const pemodelanFungsi: Topic = {
  id: 'pemodelan-fungsi',
  slug: 'pemodelan-fungsi',
  title: 'Pemodelan Fungsi',
  subtitle: 'Dari situasi nyata ke fungsi dan grafik',
  grade: 'XI',
  phase: 'F',
  element: 'aljabar-fungsi',
  status: 'lengkap',
  estimatedMinutes: 90,
  summary:
    'Mengubah situasi nyata menjadi model fungsi, menentukan konstanta dari data, dan menafsirkan hasilnya.',
  description:
    'Pemodelan fungsi adalah proses menerjemahkan situasi nyata menjadi hubungan matematis. Kita mulai dari mengenali besaran dan asumsi, memilih jenis fungsi yang sesuai (linear, kuadrat, atau eksponensial), menentukan konstanta dari data, lalu memeriksa grafik dan menafsirkan hasil beserta satuannya. Topik ini melatih seluruh alur tersebut, dari soal cerita hingga prediksi yang tetap masuk akal.',
  keywords: [
    'pemodelan',
    'fungsi',
    'variabel',
    'asumsi',
    'grafik',
    'interpretasi',
  ],
  prerequisites: ['fungsi-kuadrat', 'fungsi-eksponensial'],
  relatedTopics: ['transformasi-fungsi', 'regresi'],
  prerequisiteKnowledge: [
    'Fungsi kuadrat dan fungsi eksponensial beserta grafiknya',
    'Membaca dan menafsirkan grafik pada bidang koordinat',
    'Menyusun persamaan dari data yang diketahui',
    'Menghitung persentase dan rasio',
  ],
  objectives: [
    { text: 'Mengidentifikasi besaran, variabel, dan asumsi dari situasi nyata.' },
    { text: 'Memilih jenis fungsi (linear, kuadrat, atau eksponensial) berdasarkan pola data.' },
    { text: 'Menentukan konstanta model dari titik puncak, dua titik, atau rasio data.' },
    { text: 'Memeriksa kecocokan model dengan data dan grafiknya.' },
    { text: 'Menafsirkan parameter beserta satuan serta menentukan domain yang valid.' },
  ],
  applications: ['pemodelan-penyebaran', 'lintasan-bola'],
  sections: [
    {
      id: "tujuan",
      kind: "tujuan",
      title: "Tujuan Pembelajaran",
      body: "Setelah mempelajari topik ini, peserta didik dapat mengubah situasi nyata menjadi model fungsi, menentukan jenis fungsi yang sesuai, menetapkan konstanta dari data, memeriksa kecocokan model dengan grafik, serta menafsirkan parameter dan domainnya dalam konteks asal.",
    },
    {
      id: "pemantik",
      kind: "pemantik",
      title: "Pertanyaan Pemantik",
      blocks: [
        {
          kind: "prediction",
          prompt: `Jumlah pengguna sebuah aplikasi tercatat sebagai berikut: tahun 2020 sebanyak $2000$ pengguna, tahun 2021 sebanyak $3000$, tahun 2022 sebanyak $4500$, dan tahun 2023 sebanyak $6750$.

Bertambahkah pengguna dengan pola tetap (selisih sama) atau berlipat (rasio sama)? Model fungsi apa yang paling cocok, dan berapa perkiraan pengguna pada tahun 2024?`,
          reveal: "Bandingkan rasio tiap tahun: $\\dfrac{3000}{2000}=1{,}5$, $\\dfrac{4500}{3000}=1{,}5$, dan $\\dfrac{6750}{4500}=1{,}5$. Rasio selalu sama, jadi polanya eksponensial. Model $P(t)=2000\\cdot(1{,}5)^{t}$ dengan $t$ tahun sejak 2020. Untuk tahun 2024, $t=4$, sehingga $P(4)=2000\\cdot(1{,}5)^{4}=2000\\cdot5{,}0625=10125$ pengguna.",
          saveLabel: "Simpan dugaan & lihat jawabannya",
        },
      ],
    },
    {
      id: "prasyarat",
      kind: "prasyarat",
      title: "Prasyarat",
      body: `Pemodelan menuntut kepekaan terhadap pola dan ketelitian satuan. Pastikan kamu sudah menguasai:
- fungsi kuadrat dan fungsi eksponensial beserta bentuk grafiknya;
- membaca titik dan kecenderungan grafik pada bidang koordinat;
- menyusun persamaan dari data yang diketahui;
- menghitung persentase dan rasio antar nilai.`,
    },
    {
      id: "konteks",
      kind: "konteks",
      title: "Situasi dan Konteks",
      body: `Banyak keputusan sehari-hari berdasar pada perkiraan: ongkos perjalanan, pertumbuhan pengguna aplikasi, penyusutan nilai mesin, atau laba sebuah usaha. Semua itu dapat didekati dengan fungsi.

Pemodelan membuat perkiraan menjadi terukur. Alih-alih menebak, kita menyusun fungsi yang mewakili pola data, lalu memakainya untuk memprediksi atau memilih keputusan terbaik. Tantangan sebenarnya adalah memilih model yang tepat dan menyadari batas keberlakuannya, bukan sekadar menghitung.`,
      blocks: [
        {
          kind: "callout",
          variant: "info",
          title: "Kunci pemodelan",
          text: "Model yang baik bukan yang paling rumit, tetapi yang paling sederhana namun cukup mewakili data dan tetap masuk akal dalam konteksnya.",
        },
      ],
    },
    {
      id: "konsep",
      kind: "konsep",
      title: "Konsep Inti: Langkah Pemodelan",
      questionIds: ['pmf-02'],
      body: `Pemodelan fungsi mengikuti alur yang dapat diulang:

1. **Pahami situasi dan tentukan variabel.** Beri nama tiap besaran beserta satuannya, seperti $t$ waktu (jam) dan $N$ populasi (ekor).
2. **Rumuskan asumsi.** Nyatakan penyederhanaan yang dipakai, misalnya "laju pertumbuhan tetap" atau "tidak ada biaya lain".
3. **Pilih jenis fungsi.** Periksa pola data: beda tetap, beda kedua tetap, atau rasio tetap.
4. **Tentukan konstanta.** Gunakan titik puncak, dua titik, atau rasio yang diketahui.
5. **Periksa model.** Bandingkan hasil model dengan data dan bentuk grafiknya.
6. **Tafsirkan dan batasi domain.** Jelaskan arti tiap konstanta beserta satuannya, lalu tentukan rentang nilai variabel yang bermakna.

Tiga jenis fungsi yang paling sering dipakai memiliki ciri pola yang khas. Selain itu, ada pula **model periodik** untuk pola yang berulang secara teratur, seperti pasang surut air laut, suhu harian, atau gerak bandul.`,
      blocks: [
        {
          kind: "table",
          caption: "Memilih jenis fungsi dari pola data",
          headers: [
            "Pola data",
            "Jenis fungsi",
            "Bentuk umum",
          ],
          rows: [
            [
              "Beda antar nilai berurutan tetap",
              "Linear",
              "$y=mx+c$",
            ],
            [
              "Beda kedua tetap atau ada titik puncak",
              "Kuadrat",
              "$y=a(x-h)^2+k$",
            ],
            [
              "Rasio antar nilai berurutan tetap",
              "Eksponensial",
              "$y=a\\cdot b^{x}$",
            ],
            [
              "Nilai berulang teratur dengan periode tetap",
              "Periodik",
              "$y=A\\sin(Bx)+C$",
            ],
          ],
        },
        {
          kind: "figure",
          alt: "Satu bidang koordinat dengan tiga kurva: garis lurus linear yang naik tetap, kurva kuadrat yang melengkung, dan kurva eksponensial yang naik makin cepat. Gaya garis dan keterangan membedakan ketiganya.",
          caption: "Tiga keluarga fungsi yang sering dipakai memodelkan data: linear (beda tetap), kuadrat (berpuncak dan simetris), serta eksponensial (rasio tetap).",
          svg: '<svg viewBox="0 0 340 220" aria-hidden="true" role="presentation"><defs><marker id="fig-model-family" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0,0 L 10,5 L 0,10 z" fill="currentColor"/></marker></defs><line x1="40" y1="190" x2="320" y2="190" stroke="currentColor" stroke-width="1.3" marker-end="url(#fig-model-family)"/><line x1="40" y1="205" x2="40" y2="45" stroke="currentColor" stroke-width="1.3" marker-end="url(#fig-model-family)"/><line x1="52" y1="30" x2="76" y2="30" stroke="currentColor" stroke-width="2.2"/><text x="82" y="34" font-size="11" fill="currentColor">linear</text><line x1="140" y1="30" x2="164" y2="30" stroke="currentColor" stroke-width="2" stroke-dasharray="6 3"/><text x="170" y="34" font-size="11" fill="currentColor">kuadrat</text><line x1="228" y1="30" x2="252" y2="30" stroke="currentColor" stroke-width="2" stroke-dasharray="2 3"/><text x="258" y="34" font-size="11" fill="currentColor">eksponensial</text><polyline points="40,180 130,150 220,110 300,55" fill="none" stroke="currentColor" stroke-width="2.2"/><polyline points="40,188 90,182 130,168 170,140 205,95 230,55" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6 3"/><polyline points="40,192 95,186 140,170 180,140 210,90 230,35" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="2 3"/><text x="316" y="206" font-size="11" fill="currentColor">x</text><text x="46" y="52" font-size="11" fill="currentColor">y</text></svg>',
        },
        {
          kind: "callout",
          variant: "concept",
          title: "Pegangan utama",
          text: "Jenis fungsi ditentukan oleh **pola perubahan**, bukan oleh banyaknya data. Linear berubah dengan beda tetap, kuadrat punya titik puncak dan simetri, sedangkan eksponensial berubah dengan rasio tetap.",
        },
        {
          kind: "callout",
          variant: "warning",
          title: "Hati-hati",
          text: "Model hanya berlaku pada domain yang wajar. Memakai model di luar rentang data (ekstrapolasi jauh) dapat memberi nilai yang tidak masuk akal secara fisik.",
        },
        {
          kind: "callout",
          variant: "concept",
          title: "Model periodik",
          text: "Pola yang berulang pada selang tetap dimodelkan fungsi periodik berbentuk $y=A\\sin(Bx)+C$. Amplitudo $\\lvert A\\rvert$ menentukan besar simpangan, $C$ menggeser grafik ke atas atau ke bawah, dan $B$ menentukan periode $\\dfrac{360^\\circ}{B}$ (atau $\\dfrac{2\\pi}{B}$). Contohnya pasang surut, suhu harian, dan arus listrik bolak-balik.",
        },
        {
          kind: "match",
          intro: "Cocokkan pola perubahan dengan jenis modelnya.",
          pairs: [
            {
              left: "Model linear",
              right: "Perubahan tetap setiap satuan",
            },
            {
              left: "Model kuadrat",
              right: "Perubahan laju yang tetap",
            },
            {
              left: "Model eksponensial",
              right: "Berubah dengan faktor pengali tetap",
            },
            {
              left: "Model periodik",
              right: "Berulang pada selang tetap",
            },
          ],
        },
      ],
    },
    {
      id: "representasi",
      kind: "representasi",
      title: "Membaca Pola dan Menentukan Konstanta",
      body: `Perhatikan tiga kumpulan data berikut. Data A memiliki beda tetap, data B memiliki beda kedua tetap, dan data C memiliki rasio tetap.
`,
      blocks: [
        {
          kind: "table",
          caption: "Tiga pola data yang berbeda",
          headers: [
            "$x$",
            "Data A",
            "Data B",
            "Data C",
          ],
          rows: [
            [
              "$0$",
              "3",
              "5",
              "2",
            ],
            [
              "$1$",
              "7",
              "8",
              "6",
            ],
            [
              "$2$",
              "11",
              "13",
              "18",
            ],
            [
              "$3$",
              "15",
              "20",
              "54",
            ],
          ],
        },
        {
          kind: "table",
          caption: "Menentukan konstanta dari informasi yang diketahui",
          headers: [
            "Jenis fungsi",
            "Informasi diketahui",
            "Cara menentukan konstanta",
          ],
          rows: [
            [
              "Linear $y=mx+c$",
              "dua titik $(x_1,y_1)$ dan $(x_2,y_2)$",
              "$m=\\dfrac{y_2-y_1}{x_2-x_1}$, lalu $c=y_1-mx_1$",
            ],
            [
              "Kuadrat $y=a(x-h)^2+k$",
              "titik puncak $(h,k)$ dan satu titik lain",
              "substitusi titik lain untuk memperoleh $a$",
            ],
            [
              "Eksponensial $y=a\\cdot b^{x}$",
              "dua titik $(x_1,y_1)$ dan $(x_2,y_2)$",
              "$b=\\left(\\dfrac{y_2}{y_1}\\right)^{1/(x_2-x_1)}$, lalu $a=\\dfrac{y_1}{b^{x_1}}$",
            ],
          ],
        },
        {
          kind: "callout",
          variant: "tip",
          title: "Tips cepat",
          text: "Data A (beda tetap $4$) memberi $y=4x+3$; data B (beda kedua $2$) memberi $y=x^2+2x+5$; data C (rasio tetap $3$) memberi $y=2\\cdot3^{x}$. Bandingkan hasilnya dengan data asli untuk memastikan model tepat.",
        },
        {
          kind: "tabs",
          items: [
            {
              label: "Verbal",
              body: "Deskripsi situasi dalam kata-kata",
            },
            {
              label: "Tabel",
              body: "Daftar pasangan masukan dan keluaran",
            },
            {
              label: "Rumus",
              body: "$y=f(x)$",
            },
            {
              label: "Grafik",
              body: "Gambar hubungan masukan dan keluaran",
            },
          ],
        },
        {
          kind: "figure",
          alt: "Diagram sebar titik-titik data nyata dengan sebuah kurva model eksponensial yang mencocokkan titik-titik tersebut.",
          caption: "Titik-titik data hasil pengamatan dan model halus $y=a\\cdot b^{x}$ yang mencocokkannya. Model membantu meramalkan nilai di antara maupun di luar data yang diamati.",
          svg: '<svg viewBox="0 0 320 240" aria-hidden="true" role="presentation"><line x1="40" y1="200" x2="300" y2="200" stroke="currentColor" stroke-width="1.5"/><line x1="50" y1="200" x2="50" y2="30" stroke="currentColor" stroke-width="1.5"/><polyline points="50,181 98,170 146,154 194,131 242,95 290,41" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="50" cy="181" r="3.6" fill="currentColor"/><circle cx="98" cy="169" r="3.6" fill="currentColor"/><circle cx="146" cy="153" r="3.6" fill="currentColor"/><circle cx="194" cy="132" r="3.6" fill="currentColor"/><circle cx="242" cy="95" r="3.6" fill="currentColor"/><circle cx="290" cy="45" r="3.6" fill="currentColor"/><text x="292" y="218" font-size="12" fill="currentColor">x</text><text x="30" y="26" font-size="12" fill="currentColor">y</text><text x="196" y="86" font-size="11" fill="currentColor">model</text><text x="54" y="197" font-size="11" fill="currentColor">data</text></svg>',
        },
      ],
    },
    {
      id: "eksplorasi",
      kind: "eksplorasi",
      title: "Eksplorasi: Menyetel Koefisien agar Cocok",
      body: "Dalam pemodelan, koefisien tidak muncul begitu saja: kita menyetelnya hingga grafik melewati titik-titik data. Gunakan penggeser $a$, $b$, dan $c$ pada $f(x)=ax^2+bx+c$ untuk mencocokkan parabola dengan lengkung nyata, seperti lintasan air mancur atau lengkung jembatan. Ubah satu koefisien sekaligus, amati bagaimana titik puncak dan lebar kurva berubah, lalu cari setelan yang paling dekat dengan data.",
      blocks: [
        {
          kind: "exploration",
          explorationId: "pemodelan-model-data",
        },
      ],
    },
    {
      id: "eksplorasi-keluarga-fungsi",
      kind: "eksplorasi",
      title: "Eksplorasi Batas Domain Model Rasional",
      body: "Selain model kuadrat, model rasional memperlihatkan perilaku khas: sebuah titik yang terhapus (lubang) dan sebuah asimtot tegak. Geser parameter $a$ dan $b$ untuk menyelidiki kapan lubang muncul dan di mana asimtot berdiri, lalu kaitkan dengan batasan domain model.",
      blocks: [
        {
          kind: "exploration",
          explorationId: "pemodelan-keluarga-fungsi",
        },
      ],
    },
    {
      id: "generalisasi",
      kind: "generalisasi",
      title: "Pola Umum Pemodelan",
      body: `Setiap contoh di atas mengikuti alur yang sama: kenali **pola perubahan** data, pilih bentuk fungsi yang sesuai, tentukan konstantanya dari titik yang diketahui, lalu periksa dan batasi domain. Pemilihan bentuk fungsi sepenuhnya ditentukan oleh pola perubahan:

$$\\text{beda tetap} \\Rightarrow \\text{linear}, \\qquad \\text{beda kedua tetap} \\Rightarrow \\text{kuadrat}, \\qquad \\text{rasio tetap} \\Rightarrow \\text{eksponensial}.$$

Setelah bentuk dipilih, konstanta diperoleh dengan menyubstitusi titik data yang diketahui. Langkah terakhir tidak boleh dilewati: tafsirkan arti tiap konstanta beserta satuannya, lalu tentukan rentang variabel yang bermakna. Model yang benar secara aljabar tetap keliru bila menghasilkan nilai yang tidak masuk akal.`,
    },
    {
      id: "rumus",
      kind: "rumus",
      title: "Rumus dan Prosedur",
      body: `**Memilih model dari pola data.**
- beda tetap $\\Rightarrow$ linear $y=mx+c$;
- beda kedua tetap atau ada titik puncak $\\Rightarrow$ kuadrat $y=a(x-h)^2+k$;
- rasio tetap $\\Rightarrow$ eksponensial $y=a\\cdot b^{x}$;
- berulang teratur $\\Rightarrow$ periodik $y=A\\sin(Bx)+C$.

**Menentukan konstanta.**
- Linear dari dua titik: $m=\\dfrac{y_2-y_1}{x_2-x_1}$, lalu $c=y_1-mx_1$.
- Eksponensial dari dua titik: $b=\\left(\\dfrac{y_2}{y_1}\\right)^{1/(x_2-x_1)}$, lalu $a=\\dfrac{y_1}{b^{x_1}}$.
- Kuadrat: substitusi titik puncak dan satu titik lain untuk memperoleh $a$.

**Prosedur.** (1) Tentukan variabel dan satuannya. (2) Tuliskan asumsi. (3) Kenali pola perubahan dan pilih jenis fungsi. (4) Tentukan konstanta dari data. (5) Periksa kecocokan dengan grafik. (6) Tafsirkan parameter dan batasi domainnya.`,
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
              text: `Tarif sebuah layanan antar adalah Rp8.000 tetap ditambah Rp3.000 per kilometer. Dari catatan dua perjalanan, jarak $2$ km berbiaya Rp14.000 dan jarak $5$ km berbiaya Rp23.000.

*Penyelesaian.* Misal $s$ jarak (km) dan $C(s)$ biaya (rupiah). Karena pertambahan biaya tetap, modelnya linear $C(s)=ms+c$.

$$m=\\frac{23000-14000}{5-2}=\\frac{9000}{3}=3000.$$

Lalu $c=14000-3000\\cdot2=8000$, sehingga $C(s)=3000s+8000$. Perkiraan biaya $7$ km:
$$C(7)=3000\\cdot7+8000=29000.$$
Jadi sekitar Rp29.000. Parameter $m=3000$ berarti tarif Rp3.000 per km dan $c=8000$ adalah biaya tetap. Domain yang wajar adalah $s\\geq0$.`,
            },
            {
              title: "Contoh 2",
              text: `Pancuran air mencapai titik tertinggi $16$ m pada jarak horizontal $4$ m dari mulut pancuran dan jatuh kembali ke tanah pada jarak $8$ m. Susun model $h(x)=a(x-p)^2+q$.

*Penyelesaian.* Puncaknya $(p,q)=(4,16)$, sehingga $h(x)=a(x-4)^2+16$. Pancuran mulai dari tanah di $x=0$:

$$a(0-4)^2+16=0 \\Rightarrow 16a=-16 \\Rightarrow a=-1.$$

Jadi $h(x)=-(x-4)^2+16=-x^2+8x$. Periksa $h(4)=16$ dan $h(8)=-64+64=0$. Tinggi maksimum $16$ m, dan domainnya $0\\leq x\\leq8$ karena di luar rentang itu model memberi tinggi negatif yang tidak bermakna.`,
            },
            {
              title: "Contoh 3",
              text: `Dua titik data $(0,5)$ dan $(4,5)$ bernilai sama, dengan titik terendah di $(2,1)$. Tentukan model kuadratnya.

*Penyelesaian.* Nilai sama di $x=0$ dan $x=4$ menunjukkan sumbu simetri $x=2$, sehingga puncaknya $(2,1)$. Tulis $y=a(x-2)^2+1$. Substitusi $(0,5)$:

$$a(0-2)^2+1=5 \\Rightarrow 4a=4 \\Rightarrow a=1.$$

Modelnya $y=(x-2)^2+1=x^2-4x+5$. Periksa titik $(4,5)$: $16-16+5=5$. Benar.`,
            },
            {
              title: "Contoh 4",
              text: `Pengamatan populasi bakteri memberi $N(0)=200$ dan $N(3)=1600$ (waktu dalam jam). Tentukan model $N(t)=N_0\\cdot b^{t}$ dan ramalkan $N(6)$.

*Penyelesaian.* Dari $N(0)=200$ diperoleh $N_0=200$. Lalu $200\\,b^{3}=1600$, sehingga $b^{3}=8$ dan $b=2$. Modelnya $N(t)=200\\cdot2^{t}$. Ramalan:
$$N(6)=200\\cdot2^{6}=200\\cdot64=12800.$$
Faktor $b=2$ berarti populasi berlipat dua setiap jam.`,
            },
            {
              title: "Contoh 5",
              text: `Sebuah eksperimen mencatat data $(0,5)$, $(1,8)$, $(2,17)$, $(3,32)$. Tentukan model yang paling sesuai dan ramalkan nilai pada $x=4$.

*Penyelesaian.* Periksa beda antar nilai berurutan: $8-5=3$, $17-8=9$, dan $32-17=15$, tidak tetap. Beda kedua: $9-3=6$ dan $15-9=6$, tetap, sehingga polanya kuadrat $y=ax^2+bx+c$. Dari $x=0$ diperoleh $c=5$. Substitusi dua titik lain:
$$x=1:\\ a+b+5=8 \\Rightarrow a+b=3,$$
$$x=2:\\ 4a+2b+5=17 \\Rightarrow 2a+b=6.$$
Mengurangkan kedua persamaan memberi $a=3$ dan $b=0$, sehingga $y=3x^2+5$. Periksa $x=3$: $3(9)+5=32$, cocok. Ramalan pada $x=4$ adalah $y=3(16)+5=53$.`,
            },
            {
              title: "Contoh 6",
              text: `Sebuah kota mencatat populasi $8000$ jiwa pada tahun $2018$ dan $11520$ jiwa pada tahun $2020$. Susun model eksponensial $P(t)=a\\cdot b^{t}$ dengan $t$ tahun sejak $2018$, lalu ramalkan populasi tahun $2022$.

*Penyelesaian.* Ambil $t=0$ untuk tahun $2018$, sehingga data menjadi titik $(0,8000)$ dan $(2,11520)$. Dari $P(0)=8000$ diperoleh $a=8000$. Untuk $b$, pakai rumus dua titik:
$$b=\\left(\\frac{11520}{8000}\\right)^{1/(2-0)}=\\sqrt{1{,}44}=1{,}2.$$
Jadi $P(t)=8000\\cdot(1{,}2)^{t}$, artinya populasi tumbuh $20\\%$ per tahun. Untuk tahun 2022, $t=4$:
$$P(4)=8000\\cdot(1{,}2)^{4}=8000\\cdot2{,}0736=16588{,}8\\approx16589.$$
Perkiraan populasinya sekitar $16.589$ jiwa.`,
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
      body: `Pemodelan fungsi muncul di banyak bidang. Sebuah usaha jasa antar memakai model linear $C(s)=3000s+8000$ (rupiah) untuk biaya pengiriman jarak $s$ km, sehingga pengiriman $10$ km diperkirakan Rp38.000. Epidemiolog memakai model eksponensial $P(t)=8000(1{,}2)^{t}$ jiwa untuk populasi yang tumbuh $20\\%$ per tahun; pada $t=4$ diperkirakan sekitar $16.589$ jiwa. Teknisi memakai model kuadrat $h(x)=-(x-4)^2+16$ untuk lintasan air yang mencapai tinggi maksimum $16$ m pada jarak $4$ m.

Alur kerjanya selalu sama: tentukan variabel dan satuannya, tuliskan asumsi, pilih jenis fungsi dari pola data, tentukan konstanta, periksa kecocokan dengan grafik, lalu tafsirkan parameter. Model hanyalah perkiraan, sehingga kesimpulannya berlaku selama asumsi dan domainnya masih masuk akal.`,
    },
    {
      id: "kesalahan-umum",
      kind: "kesalahan-umum",
      title: "Kesalahan Umum",
      body: `**1. Memilih jenis fungsi tanpa memeriksa pola.** Dua titik data selalu dapat dihubungkan garis lurus, tetapi itu belum tentu model terbaik. Periksa beda, beda kedua, atau rasio pada seluruh data.

**2. Mengabaikan satuan dan arti parameter.** Koefisien $m=3000$ pada model biaya baru bermakna jika disebut satuannya, misalnya Rp3.000 per km.

**3. Memakai model di luar domain yang wajar.** Tinggi $h(t)=-3t^2+12t$ hanya bermakna untuk $0\\leq t\\leq4$. Di luar itu model memberi nilai negatif yang tidak mungkin secara fisik.

**4. Menganggap laju eksponensial sama dengan $b$.** Faktor $b=1{,}1$ berarti tumbuh $10\\%$ per selang, bukan $1{,}1\\%$. Laju persentasenya adalah $b-1$.

**5. Lupa menuliskan asumsi.** Setiap model dibangun di atas penyederhanaan, seperti "tidak ada biaya lain" atau "laju pertumbuhan tetap". Asumsi ini perlu disadari agar kesimpulan tidak berlebihan.`,
    },
    {
      id: "tantangan",
      kind: "tantangan",
      title: "Tantangan",
      body: `**Soal.** Sebuah mesin dibeli dengan harga Rp50.000.000. Nilainya menyusut $20\\%$ setiap tahun. (a) Susun model nilainya. (b) Berapa nilainya setelah $3$ tahun? (c) Setelah berapa tahun nilai mesin turun di bawah Rp20.000.000?`,
      blocks: [
        {
          kind: "step-reveal",
          intro: "Kita susun model eksponensial lalu memeriksa nilainya tahun demi tahun.",
          steps: [
            {
              title: "Langkah 1",
              text: "Penyusutan $20\\%$ berarti nilai setiap tahun tersisa $80\\%$, yaitu faktor $0{,}8$. Modelnya $V(t)=50.000.000\\times(0{,}8)^{t}$ dengan $t$ dalam tahun.",
            },
            {
              title: "Langkah 2",
              text: "Setelah $3$ tahun: $(0{,}8)^{3}=0{,}512$, sehingga $V(3)=50.000.000\\times0{,}512=\\text{Rp}25.600.000$.",
            },
            {
              title: "Langkah 3",
              text: "Ingin $V(t)<20.000.000$, yaitu $50.000.000\\times(0{,}8)^{t}<20.000.000$, sehingga $(0{,}8)^{t}<0{,}4$.",
            },
            {
              title: "Langkah 4",
              text: "Periksa tahun ke-4: $(0{,}8)^{4}=0{,}4096$, nilai $\\text{Rp}20.480.000$ masih **di atas** Rp20.000.000.",
            },
            {
              title: "Langkah 5",
              text: "Periksa tahun ke-5: $(0{,}8)^{5}=0{,}32768$, nilai $\\text{Rp}16.384.000$ sudah **di bawah** Rp20.000.000. Jadi pada tahun ke-5.",
            },
          ],
        },
      ],
    },
    {
      id: "sejarah",
      kind: "sejarah",
      title: "Jejak Sejarah",
      body: `Pemodelan matematis menjadi ciri ilmu modern. Pada abad ke-17, Isaac Newton dan Gottfried Leibniz mengembangkan kalkulus untuk memodelkan gerak dan perubahan, sedangkan pada abad ke-18 Leonhard Euler serta Daniel Bernoulli memakai fungsi eksponensial untuk pertumbuhan dan peluruhan. Abad ke-19 dan ke-20 melihat model dipakai makin luas di fisika, biologi, dan ekonomi; Thomas Malthus merumuskan model pertumbuhan populasi pada 1798, dan Pierre-François Verhulst menambahkan batas pertumbuhan pada 1838. Kini memilih jenis fungsi dari pola data, baik linear, kuadrat, maupun eksponensial, menjadi keterampilan dasar dalam sains dan analisis data.`,
    },
    {
      id: "refleksi",
      kind: "refleksi",
      title: "Refleksi",
      body: "Tinjau kembali bagaimana sebuah model menyederhanakan keadaan nyata dan di mana batas keberlakuannya.",
      blocks: [
        {
          kind: "reflection",
          prompts: [
            "Ketika menghadapi data baru, langkah apa yang paling dahulu kamu lakukan untuk menebak jenis fungsinya?",
            "Mengapa memeriksa satuan membantumu memastikan interpretasi parameter sudah benar?",
            "Ceritakan satu situasi di sekitarmu yang menurutmu paling baik dimodelkan dengan fungsi eksponensial, dan jelaskan alasannya.",
          ],
          confidenceLabel: "Seberapa yakin kamu memilih jenis fungsi yang cocok untuk suatu data?",
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
              "Langkah pemodelan",
              "tentukan variabel, asumsi, pilih fungsi, cari konstanta, periksa, tafsirkan",
            ],
            [
              "Linear",
              "beda tetap; $y=mx+c$",
            ],
            [
              "Kuadrat",
              "ada puncak dan simetri; $y=a(x-h)^2+k$",
            ],
            [
              "Eksponensial",
              "rasio tetap; $y=a\\cdot b^{x}$",
            ],
            [
              "Menentukan konstanta",
              "dua titik untuk linear/eksponensial, puncak dan satu titik untuk kuadrat",
            ],
            [
              "Domain",
              "batasi agar model hanya dipakai pada rentang yang bermakna",
            ],
            [
              "Interpretasi parameter",
              "sebutkan arti dan satuan setiap konstanta",
            ],
          ],
        },
      ],
    },
    {
      id: "evaluasi",
      kind: "evaluasi",
      title: "Evaluasi",
      questionIds: ['pmf-09'],
      body: `**Kesimpulan singkat.** (1) Bagaimana pola perubahan data menunjukkan jenis fungsi yang paling tepat? (2) Mengapa domain model perlu dibatasi meskipun rumusnya berlaku untuk semua bilangan? Setelah menjawab, dalami lewat [Latihan & Asesmen](/latihan) topik **Pemodelan Fungsi**.`,
    },
  ],
};
