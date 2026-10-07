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
    'Pemodelan fungsi adalah proses menerjemahkan situasi nyata menjadi hubungan matematis. Kita mulai dari mengenali besaran dan asumsi, memilih jenis fungsi yang sesuai — linear, kuadrat, atau eksponensial —, menentukan konstanta dari data, lalu memeriksa grafik dan menafsirkan hasil beserta satuannya. Topik ini melatih seluruh alur tersebut, dari soal cerita hingga prediksi yang tetap masuk akal.',
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
  explorations: ['kuadrat-parameter'],
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
  sections: [
    {
      id: 'tujuan',
      kind: 'tujuan',
      title: 'Tujuan Pembelajaran',
      body: `Setelah mempelajari topik ini, peserta didik dapat mengubah situasi nyata menjadi model fungsi, menentukan jenis fungsi yang sesuai, menetapkan konstanta dari data, memeriksa kecocokan model dengan grafik, serta menafsirkan parameter dan domainnya dalam konteks asal.`,
    },
    {
      id: 'pemantik',
      kind: 'pemantik',
      title: 'Pertanyaan Pemantik',
      body: `Jumlah pengguna sebuah aplikasi tercatat sebagai berikut: tahun 2020 sebanyak $2000$ pengguna, tahun 2021 sebanyak $3000$, tahun 2022 sebanyak $4500$, dan tahun 2023 sebanyak $6750$.

Bertambahkah pengguna dengan pola tetap (selisih sama) atau berlipat (rasio sama)? Model fungsi apa yang paling cocok, dan berapa perkiraan pengguna pada tahun 2024?`,
      blocks: [
        {
          kind: 'details',
          summary: 'Lihat jawaban pertanyaan pemantik',
          text: `Bandingkan rasio tiap tahun: $\\dfrac{3000}{2000}=1{,}5$, $\\dfrac{4500}{3000}=1{,}5$, dan $\\dfrac{6750}{4500}=1{,}5$. Rasio selalu sama, jadi polanya eksponensial. Model $P(t)=2000\\cdot(1{,}5)^{t}$ dengan $t$ tahun sejak 2020. Untuk tahun 2024, $t=4$, sehingga $P(4)=2000\\cdot(1{,}5)^{4}=2000\\cdot5{,}0625=10125$ pengguna.`,
        },
      ],
    },
    {
      id: 'prasyarat',
      kind: 'prasyarat',
      title: 'Prasyarat',
      body: `Sebelum melanjutkan, pastikan kamu menguasai:
- fungsi kuadrat dan fungsi eksponensial beserta bentuk grafiknya;
- membaca titik dan kecenderungan grafik pada bidang koordinat;
- menyusun persamaan dari data yang diketahui;
- menghitung persentase dan rasio antar nilai.`,
    },
    {
      id: 'konteks',
      kind: 'konteks',
      title: 'Situasi dan Konteks',
      body: `Banyak keputusan sehari-hari berdasar pada perkiraan: ongkos perjalanan, pertumbuhan pengguna aplikasi, penyusutan nilai mesin, atau laba sebuah usaha. Semua itu dapat didekati dengan fungsi.

Pemodelan membuat perkiraan menjadi terukur. Alih-alih menebak, kita menyusun fungsi yang mewakili pola data, lalu memakainya untuk memprediksi atau memilih keputusan terbaik. Tantangannya bukan sekadar menghitung, melainkan memilih model yang tepat dan menyadari batas keberlakuannya.`,
      blocks: [
        {
          kind: 'callout',
          variant: 'info',
          title: 'Kunci pemodelan',
          text: 'Model yang baik bukan yang paling rumit, melainkan yang paling sederhana namun cukup mewakili data dan tetap masuk akal dalam konteksnya.',
        },
      ],
    },
    {
      id: 'konsep',
      kind: 'konsep',
      title: 'Konsep Inti: Langkah Pemodelan',
      body: `Pemodelan fungsi mengikuti alur yang dapat diulang:

1. **Pahami situasi dan tentukan variabel.** Beri nama tiap besaran beserta satuannya, misalnya $t$ waktu (jam) dan $N$ populasi (ekor).
2. **Rumuskan asumsi.** Nyatakan penyederhanaan yang dipakai, misalnya "laju pertumbuhan tetap" atau "tidak ada biaya lain".
3. **Pilih jenis fungsi.** Periksa pola data: beda tetap, beda kedua tetap, atau rasio tetap.
4. **Tentukan konstanta.** Gunakan titik puncak, dua titik, atau rasio yang diketahui.
5. **Periksa model.** Bandingkan hasil model dengan data dan bentuk grafiknya.
6. **Tafsirkan dan batasi domain.** Jelaskan arti tiap konstanta beserta satuannya, lalu tentukan rentang nilai variabel yang bermakna.

Tiga jenis fungsi yang paling sering dipakai memiliki ciri pola yang khas.`,
      blocks: [
        {
          kind: 'table',
          caption: 'Memilih jenis fungsi dari pola data',
          headers: ['Pola data', 'Jenis fungsi', 'Bentuk umum'],
          rows: [
            ['Beda antar nilai berurutan tetap', 'Linear', '$y=mx+c$'],
            ['Beda kedua tetap atau ada titik puncak', 'Kuadrat', '$y=a(x-h)^2+k$'],
            ['Rasio antar nilai berurutan tetap', 'Eksponensial', '$y=a\\cdot b^{x}$'],
          ],
        },
        {
          kind: 'callout',
          variant: 'concept',
          title: 'Inti yang perlu diingat',
          text: 'Jenis fungsi ditentukan oleh **pola perubahan**, bukan oleh banyaknya data. Linear berubah dengan beda tetap, kuadrat punya titik puncak dan simetri, sedangkan eksponensial berubah dengan rasio tetap.',
        },
        {
          kind: 'callout',
          variant: 'warning',
          title: 'Hati-hati',
          text: 'Model hanya berlaku pada domain yang wajar. Memakai model di luar rentang data — ekstrapolasi jauh — dapat memberi nilai yang tidak masuk akal secara fisik.',
        },
      ],
    },
    {
      id: 'representasi',
      kind: 'representasi',
      title: 'Membaca Pola dan Menentukan Konstanta',
      body: `Perhatikan tiga kumpulan data berikut. Data A memiliki beda tetap, data B memiliki beda kedua tetap, dan data C memiliki rasio tetap.
`,
      blocks: [
        {
          kind: 'table',
          caption: 'Tiga pola data yang berbeda',
          headers: ['$x$', 'Data A', 'Data B', 'Data C'],
          rows: [
            ['$0$', '3', '5', '2'],
            ['$1$', '7', '8', '6'],
            ['$2$', '11', '13', '18'],
            ['$3$', '15', '20', '54'],
          ],
        },
        {
          kind: 'table',
          caption: 'Menentukan konstanta dari informasi yang diketahui',
          headers: ['Jenis fungsi', 'Informasi diketahui', 'Cara menentukan konstanta'],
          rows: [
            [
              'Linear $y=mx+c$',
              'dua titik $(x_1,y_1)$ dan $(x_2,y_2)$',
              '$m=\\dfrac{y_2-y_1}{x_2-x_1}$, lalu $c=y_1-mx_1$',
            ],
            [
              'Kuadrat $y=a(x-h)^2+k$',
              'titik puncak $(h,k)$ dan satu titik lain',
              'substitusi titik lain untuk memperoleh $a$',
            ],
            [
              'Eksponensial $y=a\\cdot b^{x}$',
              'dua titik $(x_1,y_1)$ dan $(x_2,y_2)$',
              '$b=\\left(\\dfrac{y_2}{y_1}\\right)^{1/(x_2-x_1)}$, lalu $a=\\dfrac{y_1}{b^{x_1}}$',
            ],
          ],
        },
        {
          kind: 'callout',
          variant: 'tip',
          title: 'Tips cepat',
          text: 'Data A (beda tetap $4$) memberi $y=4x+3$; data B (beda kedua $2$) memberi $y=x^2+2x+5$; data C (rasio tetap $3$) memberi $y=2\\cdot3^{x}$. Bandingkan hasilnya dengan data asli untuk memastikan model tepat.',
        },
      ],
    },
    {
      id: 'eksplorasi',
      kind: 'eksplorasi',
      title: 'Eksplorasi: Menyetel Koefisien agar Cocok',
      body: `Dalam pemodelan, koefisien tidak muncul begitu saja — kita menyetelnya hingga grafik melewati titik-titik data. Gunakan penggeser $a$, $b$, dan $c$ pada $f(x)=ax^2+bx+c$ untuk mencocokkan parabola dengan lengkung nyata, misalnya lintasan air mancur atau lengkung jembatan. Ubah satu koefisien sekaligus, amati bagaimana titik puncak dan lebar kurva berubah, lalu cari setelan yang paling dekat dengan data.`,
      blocks: [{ kind: 'exploration', explorationId: 'kuadrat-parameter' }],
    },
    {
      id: 'contoh',
      kind: 'contoh',
      title: 'Contoh Terbimbing',
      body: `**Contoh 1 (linear dari dua titik).** Tarif sebuah layanan antar adalah Rp8.000 tetap ditambah Rp3.000 per kilometer. Dari catatan dua perjalanan, jarak $2$ km berbiaya Rp14.000 dan jarak $5$ km berbiaya Rp23.000.

*Penyelesaian.* Misal $s$ jarak (km) dan $C(s)$ biaya (rupiah). Karena pertambahan biaya tetap, modelnya linear $C(s)=ms+c$.

$$m=\\frac{23000-14000}{5-2}=\\frac{9000}{3}=3000.$$

Lalu $c=14000-3000\\cdot2=8000$, sehingga $C(s)=3000s+8000$. Perkiraan biaya $7$ km:
$$C(7)=3000\\cdot7+8000=29000.$$
Jadi sekitar Rp29.000. Parameter $m=3000$ berarti tarif Rp3.000 per km dan $c=8000$ adalah biaya tetap. Domain yang wajar adalah $s\\geq0$.

**Contoh 2 (kuadrat dari titik puncak).** Pancuran air mencapai titik tertinggi $16$ m pada jarak horizontal $4$ m dari mulut pancuran dan jatuh kembali ke tanah pada jarak $8$ m. Susun model $h(x)=a(x-p)^2+q$.

*Penyelesaian.* Puncaknya $(p,q)=(4,16)$, sehingga $h(x)=a(x-4)^2+16$. Pancuran mulai dari tanah di $x=0$:

$$a(0-4)^2+16=0 \\Rightarrow 16a=-16 \\Rightarrow a=-1.$$

Jadi $h(x)=-(x-4)^2+16=-x^2+8x$. Periksa $h(4)=16$ dan $h(8)=-64+64=0$. Tinggi maksimum $16$ m, dan domainnya $0\\leq x\\leq8$ karena di luar rentang itu model memberi tinggi negatif yang tidak bermakna.

**Contoh 3 (kuadrat dari tiga titik).** Dua titik data $(0,5)$ dan $(4,5)$ bernilai sama, dengan titik terendah di $(2,1)$. Tentukan model kuadratnya.

*Penyelesaian.* Nilai sama di $x=0$ dan $x=4$ menunjukkan sumbu simetri $x=2$, sehingga puncaknya $(2,1)$. Tulis $y=a(x-2)^2+1$. Substitusi $(0,5)$:

$$a(0-2)^2+1=5 \\Rightarrow 4a=4 \\Rightarrow a=1.$$

Modelnya $y=(x-2)^2+1=x^2-4x+5$. Periksa titik $(4,5)$: $16-16+5=5$. Benar.

**Contoh 4 (eksponensial dari dua titik).** Pengamatan populasi bakteri memberi $N(0)=200$ dan $N(3)=1600$ (waktu dalam jam). Tentukan model $N(t)=N_0\\cdot b^{t}$ dan ramalkan $N(6)$.

*Penyelesaian.* Dari $N(0)=200$ diperoleh $N_0=200$. Lalu $200\\,b^{3}=1600$, sehingga $b^{3}=8$ dan $b=2$. Modelnya $N(t)=200\\cdot2^{t}$. Ramalan:
$$N(6)=200\\cdot2^{6}=200\\cdot64=12800.$$
Faktor $b=2$ berarti populasi berlipat dua setiap jam.

**Contoh 5 (memilih jenis fungsi).** Data suhu $y$ (°C) setiap jam $x$: $(0,20)$, $(1,24)$, $(2,28)$, $(3,32)$. Selisih $y$ selalu $4$, jadi polanya linear dengan $m=4$ dan $c=20$, sehingga $y=4x+20$. Bandingkan dengan data $(0,2)$, $(1,6)$, $(2,18)$, $(3,54)$ yang rasionya selalu $3$; model yang tepat adalah eksponensial $y=2\\cdot3^{x}$.`,
    },
    {
      id: 'latihan-dasar',
      kind: 'latihan-dasar',
      title: 'Latihan Dasar',
      level: 'dasar',
      body: `1. Biaya tetap sebuah layanan cetak Rp20.000 ditambah Rp1.500 per lembar. Susun model biaya $C(n)$ untuk $n$ lembar, lalu hitung biaya mencetak $40$ lembar.

2. Perhatikan data berikut: $x=0,1,2,3$ dengan $y=2,5,8,11$. Tentukan jenis fungsi yang sesuai dan tuliskan modelnya.

3. Fungsi kuadrat memiliki titik puncak $(3,2)$ dan melalui titik $(0,11)$. Tentukan modelnya.

4. Populasi mengikuti $N(t)=N_0\\cdot b^{t}$ dengan $N(0)=300$ dan $N(2)=1200$. Tentukan $b$ dan ramalkan $N(3)$.

5. Grafik laba harian (juta rupiah) memuncak di titik $(5,8)$. Tentukan laba maksimum dan jelaskan artinya.`,
      blocks: [
        {
          kind: 'details',
          summary: 'Lihat kunci dan pembahasan',
          text: `1. $C(n)=1500n+20000$. Untuk $n=40$: $C(40)=1500\\cdot40+20000=60000+20000=80000$, yaitu Rp80.000.

2. Selisih $y$ tetap $3$, jadi polanya linear $y=3x+2$. Periksa: $3(0)+2=2$ dan $3(3)+2=11$.

3. $y=a(x-3)^2+2$. Substitusi $(0,11)$: $a(0-3)^2+2=11 \\Rightarrow 9a=9 \\Rightarrow a=1$. Model $y=(x-3)^2+2=x^2-6x+11$.

4. $N(2)=N_0\\,b^{2}=300\\,b^{2}=1200 \\Rightarrow b^{2}=4 \\Rightarrow b=2$ (ambil nilai positif). Maka $N(3)=300\\cdot2^{3}=300\\cdot8=2400$.

5. Puncak $(5,8)$ memberi laba maksimum $8$ juta rupiah yang dicapai pada tingkat produksi $5$. Karena puncak model kuadrat merupakan titik tertinggi, laba tidak melebihi nilai itu.`,
        },
      ],
    },
    {
      id: 'latihan-cakap',
      kind: 'latihan-cakap',
      title: 'Latihan Cakap',
      level: 'cakap',
      body: `1. Ongkos perjalanan tercatat Rp17.000 untuk $3$ km dan Rp32.000 untuk $8$ km. Susun model linear $C(s)$ (rupiah) dan ramalkan ongkos $12$ km.

2. Perhatikan data berikut: $t=0,1,2,3$ dengan $P=500,1500,4500,13500$. Tentukan jenis fungsi, modelnya, dan ramalkan $P(4)$.

3. Tentukan model kuadrat yang melalui titik $(1,2)$, $(2,5)$, dan $(3,10)$.

4. Lintasan bola memenuhi $h(t)=a(t-p)^2+q$ dengan puncak $(2,12)$ dan mulai dari tanah pada $t=0$. Tentukan modelnya, kapan bola kembali menyentuh tanah, dan tinggi pada $t=3$.

5. Sebuah model linear $y=2x+5$ menyatakan jumlah penduduk (ribu jiwa) dengan $x$ tahun sejak 2020. Tentukan prediksi tahun 2025 dan sebutkan satu batasan domain yang masuk akal.`,
      blocks: [
        {
          kind: 'details',
          summary: 'Lihat kunci dan pembahasan',
          text: `1. $m=\\dfrac{32000-17000}{8-3}=\\dfrac{15000}{5}=3000$ dan $c=17000-3000\\cdot3=8000$. Model $C(s)=3000s+8000$. Untuk $s=12$: $C(12)=3000\\cdot12+8000=36000+8000=44000$, yaitu Rp44.000.

2. Rasio $\\dfrac{1500}{500}=3$, $\\dfrac{4500}{1500}=3$, dan $\\dfrac{13500}{4500}=3$, jadi polanya eksponensial $P(t)=500\\cdot3^{t}$. Ramalan $P(4)=500\\cdot3^{4}=500\\cdot81=40500$.

3. Misal $y=ax^2+bx+c$. Dari $(1,2)$: $a+b+c=2$; dari $(2,5)$: $4a+2b+c=5$; dari $(3,10)$: $9a+3b+c=10$. Kurangkan berturut-turut: $3a+b=3$ dan $5a+b=5$, sehingga $2a=2$, $a=1$, $b=0$, dan $c=1$. Model $y=x^2+1$. Periksa $(3,10)$: $9+1=10$.

4. Puncak $(2,12)$ memberi $h(t)=a(t-2)^2+12$. Mulai dari tanah: $h(0)=4a+12=0 \\Rightarrow a=-3$. Model $h(t)=-3(t-2)^2+12=-3t^2+12t$. Bola kembali ke tanah saat $-3t(t-4)=0$, yaitu $t=4$ selain $t=0$. Tinggi pada $t=3$: $h(3)=-3(1)+12=9$ m.

5. Tahun 2025 berarti $x=5$, sehingga $y=2\\cdot5+5=15$ ribu jiwa. Karena $x$ menyatakan tahun sejak 2020, domain yang wajar $x\\geq0$; model tidak bermakna untuk tahun sebelum 2020 dan sebaiknya tidak dipakai jauh di luar rentang data.`,
        },
      ],
    },
    {
      id: 'latihan-mahir',
      kind: 'latihan-mahir',
      title: 'Latihan Mahir',
      level: 'mahir',
      body: `1. Pengamatan bakteri memberi $N(1)=750$ dan $N(4)=6000$. Tentukan model $N(t)=N_0\\cdot b^{t}$ dan ramalkan $N(7)$.

2. Laba (juta rupiah) mengikuti $P(x)=-2x^2+24x-40$ dengan $x$ banyak produksi (ratus unit). Tentukan laba maksimum dan rentang $x$ agar usaha tidak merugi.

3. Nilai sebuah mesin Rp80 juta menyusut $15\\%$ per tahun. Susun model nilainya dan tentukan kira-kira pada tahun ke berapa nilainya tinggal setengah.

4. Bandingkan pertumbuhan linear dan eksponensial. Jelaskan mengapa model eksponensial akhirnya melampaui model linear, lalu berikan satu contoh situasi untuk masing-masing.`,
      blocks: [
        {
          kind: 'details',
          summary: 'Lihat pembahasan',
          text: `1. Bagi $\\dfrac{N(4)}{N(1)}$: $\\dfrac{N_0 b^{4}}{N_0 b^{1}}=b^{3}=\\dfrac{6000}{750}=8$, sehingga $b=2$. Dari $N(1)=N_0\\cdot2=750$ diperoleh $N_0=375$. Model $N(t)=375\\cdot2^{t}$. Ramalan $N(7)=375\\cdot2^{7}=375\\cdot128=48000$.

2. Puncak di $x=-\\dfrac{b}{2a}=-\\dfrac{24}{2\\cdot(-2)}=6$, sehingga $P(6)=-2(36)+24(6)-40=-72+144-40=32$ juta rupiah. Tidak merugi saat $P(x)\\geq0$: $-2x^2+24x-40\\geq0$; bagi dengan $-2$ dan balik tanda menjadi $x^2-12x+20\\leq0$, yaitu $(x-2)(x-10)\\leq0$. Jadi $2\\leq x\\leq10$ (ratus unit).

3. Model $V(t)=80\\cdot(0{,}85)^{t}$ juta rupiah. Setengah dari $80$ adalah $40$, sehingga $(0{,}85)^{t}=0{,}5$. Dengan logaritma, $t=\\dfrac{\\ln 0{,}5}{\\ln 0{,}85}\\approx\\dfrac{-0{,}693}{-0{,}163}\\approx4{,}3$. Jadi nilainya tinggal setengah setelah sekitar $4{,}3$ tahun, yaitu selama tahun ke-5.

4. Linear bertambah dengan beda tetap, sedangkan eksponensial bertambah dengan rasio tetap sehingga pertumbuhannya makin cepat. Karena itu, meskipun awalnya lebih kecil, model eksponensial akhirnya melampaui model linear. Contoh linear: tarif taksi per kilometer. Contoh eksponensial: populasi yang berlipat dua atau bunga majemuk.`,
        },
      ],
    },
    {
      id: 'dunia-nyata',
      kind: 'dunia-nyata',
      title: 'Penerapan di Dunia Nyata',
      body: `Pemodelan fungsi muncul di banyak bidang. Ekonom memakai model kuadrat untuk mencari laba maksimum, epidemiolog memakai model eksponensial untuk memantau penyebaran penyakit, dan teknisi memakai model linear untuk memperkirakan biaya produksi.

Alur kerjanya selalu sama: tentukan variabel dan satuannya, tuliskan asumsi, pilih jenis fungsi dari pola data, tentukan konstanta, periksa kecocokan dengan grafik, lalu tafsirkan parameter. Model hanyalah perkiraan, sehingga kesimpulannya berlaku selama asumsi dan domainnya masih masuk akal.`,
    },
    {
      id: 'kesalahan-umum',
      kind: 'kesalahan-umum',
      title: 'Kesalahan Umum',
      body: `**1. Memilih jenis fungsi tanpa memeriksa pola.** Dua titik data selalu dapat dihubungkan garis lurus, tetapi itu belum tentu model terbaik. Periksa beda, beda kedua, atau rasio pada seluruh data.

**2. Mengabaikan satuan dan arti parameter.** Koefisien $m=3000$ pada model biaya baru bermakna jika disebut satuannya, misalnya Rp3.000 per km.

**3. Memakai model di luar domain yang wajar.** Tinggi $h(t)=-3t^2+12t$ hanya bermakna untuk $0\\leq t\\leq4$. Di luar itu model memberi nilai negatif yang tidak mungkin secara fisik.

**4. Menganggap laju eksponensial sama dengan $b$.** Faktor $b=1{,}1$ berarti tumbuh $10\\%$ per selang, bukan $1{,}1\\%$. Laju persentasenya adalah $b-1$.

**5. Lupa menuliskan asumsi.** Setiap model dibangun di atas penyederhanaan, misalnya "tidak ada biaya lain" atau "laju pertumbuhan tetap". Asumsi ini perlu disadari agar kesimpulan tidak berlebihan.`,
    },
    {
      id: 'refleksi',
      kind: 'refleksi',
      title: 'Refleksi',
      body: `Jawab dengan jujur:
1. Ketika menghadapi data baru, langkah apa yang paling dahulu kamu lakukan untuk menebak jenis fungsinya?
2. Mengapa memeriksa satuan membantumu memastikan interpretasi parameter sudah benar?
3. Ceritakan satu situasi di sekitarmu yang menurutmu paling baik dimodelkan dengan fungsi eksponensial, dan jelaskan alasannya.`,
    },
    {
      id: 'rangkuman',
      kind: 'rangkuman',
      title: 'Rangkuman',
      blocks: [
        {
          kind: 'table',
          headers: ['Aspek', 'Penjelasan'],
          rows: [
            [
              'Langkah pemodelan',
              'tentukan variabel, asumsi, pilih fungsi, cari konstanta, periksa, tafsirkan',
            ],
            ['Linear', 'beda tetap; $y=mx+c$'],
            ['Kuadrat', 'ada puncak dan simetri; $y=a(x-h)^2+k$'],
            ['Eksponensial', 'rasio tetap; $y=a\\cdot b^{x}$'],
            ['Menentukan konstanta', 'dua titik untuk linear/eksponensial, puncak dan satu titik untuk kuadrat'],
            ['Domain', 'batasi agar model hanya dipakai pada rentang yang bermakna'],
            ['Interpretasi parameter', 'sebutkan arti dan satuan setiap konstanta'],
          ],
        },
      ],
    },
    {
      id: 'evaluasi',
      kind: 'evaluasi',
      title: 'Evaluasi',
      body: `Kerjakan kuis topik ini untuk memeriksa pemahamanmu. Buka halaman [Latihan & Asesmen](/latihan) lalu pilih topik **Pemodelan Fungsi**.`,
    },
  ],
};
