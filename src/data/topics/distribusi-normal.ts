import type { Topic } from '@/types/content';

export const distribusiNormal: Topic = {
  id: 'distribusi-normal',
  slug: 'distribusi-normal',
  title: 'Distribusi Normal',
  subtitle: 'Kurva lonceng, skor baku, dan peluang variabel kontinu',
  grade: 'XII',
  phase: 'F',
  element: 'data-peluang',
  subject: 'matematika-lanjut',
  status: 'lengkap',
  estimatedMinutes: 95,
  summary:
    'Memodelkan variabel acak kontinu dengan distribusi normal $N(\\mu, \\sigma^{2})$, menghitung peluang lewat skor baku $z$ dan kaidah empiris, serta menerapkannya pada pengendalian mutu.',
  description:
    'Banyak data nyata (tinggi badan, hasil pengukuran mesin, nilai ujian) dapat bernilai sembarang dalam suatu selang sehingga disebut variabel acak kontinu. Sebarannya sering mengikuti **distribusi normal**, yang digambarkan oleh kurva lonceng simetris terhadap rata-rata $\\mu$. Topik ini membangun fungsi kepadatan $f(x)=\\dfrac{1}{\\sigma\\sqrt{2\\pi}}e^{-\\frac{(x-\\mu)^{2}}{2\\sigma^{2}}}$, menafsirkan peran $\\mu$ sebagai pusat dan $\\sigma$ sebagai lebar sebaran, lalu memperkenalkan **distribusi normal baku** melalui skor baku $z=\\dfrac{x-\\mu}{\\sigma}$. Peluang dihitung sebagai luas daerah di bawah kurva, dan **kaidah empiris** $68\\%$–$95\\%$–$99{,}7\\%$ memberi perkiraan cepat. Materi ditutup dengan penerapan pada pengendalian mutu, ketika peluang produk keluar dari batas toleransi ditaksir dari ekor kurva normal.',
  keywords: [
    'distribusi normal',
    'kurva normal',
    'skor baku',
    'z-score',
    'kaidah empiris',
    'simpangan baku',
    'peluang kontinu',
    'kendali mutu',
  ],
  prerequisites: ['distribusi-binomial', 'variabel-acak-diskret'],
  relatedTopics: ['statistik-dalam-kehidupan', 'regresi', 'variabel-acak-diskret'],
  prerequisiteKnowledge: [
    'Variabel acak kontinu dan gagasan peluang sebagai luas daerah',
    'Varians dan simpangan baku suatu sebaran data',
    'Rumus nilai harapan dan sebaran pada variabel acak diskret',
    'Notasi penjumlahan, eksponen, dan sifat simetri kurva',
  ],
  objectives: [
    { text: 'Peserta didik dapat membedakan variabel acak kontinu dan diskret serta mengenali ciri kurva distribusi normal.' },
    { text: 'Peserta didik dapat menjelaskan pengaruh rata-rata $\\mu$ dan simpangan baku $\\sigma$ terhadap bentuk kurva normal.' },
    { text: 'Peserta didik dapat mengubah nilai menjadi skor baku $z=\\dfrac{x-\\mu}{\\sigma}$ dan memakai distribusi normal baku.' },
    { text: 'Peserta didik dapat menghitung peluang pada distribusi normal memakai luas daerah dan kaidah empiris.' },
    { text: 'Peserta didik dapat memodelkan serta menafsirkan masalah pengendalian mutu memakai distribusi normal.' },
  ],
  applications: ['mtl-kendali-mutu-normal'],
  sections: [
    {
      id: "tujuan",
      kind: "tujuan",
      title: "Tujuan Pembelajaran",
      body: "Setelah mempelajari topik ini, peserta didik dapat menjelaskan ciri variabel acak kontinu dan kurva distribusi normal, memahami peran $\\mu$ dan $\\sigma$, mengubah nilai menjadi skor baku $z$, serta menghitung peluang lewat luas daerah dan kaidah empiris untuk memodelkan masalah nyata seperti pengendalian mutu.",
    },
    {
      id: "pemantik",
      kind: "pemantik",
      title: "Pertanyaan Pemantik",
      blocks: [
        {
          kind: "prediction",
          prompt: `Tinggi badan siswa di suatu sekolah berdistribusi normal dengan rata-rata $\\mu = 165$ cm dan simpangan baku $\\sigma = 6$ cm.

Manakah perkiraan yang paling masuk akal: sekitar berapa persen siswa bertinggi antara **159 cm dan 171 cm**?`,
          options: [
            "Sekitar 68%",
            "Sekitar 95%",
            "Sekitar 50%",
            "Sekitar 99,7%",
          ],
          reveal: `Selang $159$–$171$ adalah $\\mu - \\sigma$ sampai $\\mu + \\sigma$, sebab $165 - 6 = 159$ dan $165 + 6 = 171$. Menurut **kaidah empiris** distribusi normal, sekitar $68\\%$ data jatuh dalam satu simpangan baku dari rata-rata.

$$P(159 \\leq X \\leq 171) = P(-1 \\leq z \\leq 1) \\approx 0{,}6827.$$

Hasilnya tidak bergantung pada nilai $\\mu$ dan $\\sigma$ selama selangnya sama-sama $\\mu \\pm \\sigma$. Inilah kekuatan **skor baku** dan **distribusi normal baku** yang akan kita pelajari.`,
          saveLabel: "Simpan dugaan & lihat jawabannya",
        },
      ],
    },
    {
      id: "prasyarat",
      kind: "prasyarat",
      title: "Prasyarat",
      body: `Distribusi normal menyambung topik variabel acak dan statistik, jadi pastikan dahulu bekal berikut sudah siap:

- membedakan variabel acak diskret dan kontinu;
- menghitung rata-rata $\\mu$ dan simpangan baku $\\sigma$ dari suatu data;
- aturan komplemen $P(A^c) = 1 - P(A)$;
- menaksir luas daerah sederhana di bawah kurva sebagai peluang.`,
    },
    {
      id: "konteks",
      kind: "konteks",
      title: "Situasi dan Konteks",
      body: `Sebuah pabrik mengisi botol minuman dan ingin memastikan tiap botol berisi sekitar $500$ mL. Seorang dokter memantau tinggi anak dan ingin tahu berapa banyak yang berada di bawah tinggi tertentu. Sebuah lembaga ujian menilai sebaran nilai peserta.

Pada semua contoh itu, hasil pengukurannya **kontinu**: volume isi, tinggi badan, atau nilai dapat bernilai sembarang dalam suatu selang, bukan hanya bilangan bulat. Untuk variabel seperti ini, peluang satu nilai tepat selalu nol; yang bermakna adalah peluang suatu **selang**, yang dihitung sebagai **luas daerah** di bawah kurva kepadatan.

Ketika sebaran pengukuran menumpuk di tengah dan makin jarang di kedua ujung secara simetris, model **distribusi normal** sangat cocok. Model ini menjadi dasar menaksir peluang, menetapkan batas toleransi, dan menilai apakah suatu proses berjalan wajar.`,
    },
    {
      id: "konsep",
      kind: "konsep",
      title: "Konsep Inti: Kurva Distribusi Normal",
      questionIds: ['dn-01'],
      body: `**Variabel acak kontinu** adalah variabel yang dapat mengambil sembarang nilai dalam suatu selang. Distribusinya digambarkan oleh **fungsi kepadatan peluang** $f(x)$, dan peluang kejadian dihitung sebagai **luas daerah** di bawah kurva itu. Karena satu titik tidak punya lebar, peluang satu nilai tepat selalu $0$.

**Distribusi normal** dengan rata-rata $\\mu$ dan simpangan baku $\\sigma$ ditulis $X \\sim N(\\mu, \\sigma^{2})$ dan memiliki fungsi kepadatan

$$f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}}\\,e^{-\\frac{(x-\\mu)^{2}}{2\\sigma^{2}}}.$$

Grafiknya berupa **kurva lonceng** dengan sifat berikut.

1. **Simetris** terhadap garis $x = \\mu$; rata-rata, median, dan modusnya semua sama dengan $\\mu$.
2. **Puncak tunggal** berada di $x = \\mu$, dan kurva selalu di atas sumbu mendatar.
3. **Luas total** di bawah kurva sama dengan $1$.
4. Titik belok kurva berada di $\\mu - \\sigma$ dan $\\mu + \\sigma$.
5. Kurva **mendekati** sumbu mendatar di kedua ujung tetapi tidak pernah menyentuhnya.

**Peran $\\mu$ dan $\\sigma$.** Rata-rata $\\mu$ menentukan **letak pusat**: memperbesar $\\mu$ menggeser kurva ke kanan tanpa mengubah bentuknya. Simpangan baku $\\sigma$ menentukan **lebar sebaran**: $\\sigma$ kecil membuat kurva tinggi dan sempit (data menumpuk dekat rata-rata), sedangkan $\\sigma$ besar membuat kurva rendah dan lebar (data lebih tersebar). Karena luas total tetap $1$, kurva yang lebih lebar harus lebih rendah.`,
      blocks: [
        {
          kind: "callout",
          variant: "concept",
          title: "Gagasan pokok: peluang adalah luas",
          text: "Pada variabel kontinu, **peluang = luas daerah** di bawah kurva. Karena itu $P(X = a) = 0$ untuk setiap nilai tunggal, dan $P(a \\leq X \\leq b)$ sama dengan $P(a < X < b)$.",
        },
        {
          kind: "figure",
          alt: "Kurva lonceng distribusi normal simetris terhadap garis rata-rata mu; daerah antara mu dikurangi sigma dan mu ditambah sigma diarsir dengan keterangan kira-kira 68,3 persen.",
          caption: "Kurva normal $N(\\mu, \\sigma^{2})$ simetris terhadap $\\mu$. Daerah antara $\\mu-\\sigma$ dan $\\mu+\\sigma$ memiliki luas sekitar $68{,}3\\%$.",
          svg: '<svg viewBox="0 0 320 240" aria-hidden="true" role="presentation"><defs><marker id="dn-axis" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0,0 L 10,5 L 0,10 z" fill="currentColor"/></marker></defs><line x1="40" y1="190" x2="308" y2="190" stroke="currentColor" stroke-width="1.2" marker-end="url(#dn-axis)"/><line x1="40" y1="190" x2="40" y2="42" stroke="currentColor" stroke-width="1.2" marker-end="url(#dn-axis)"/><path d="M130,111.2 L150,78.6 L175,60 L200,78.6 L220,111.2 L220,190 L130,190 Z" fill="currentColor" fill-opacity="0.22" stroke="none"/><path d="M50,187.3 L70,181.5 L90,168.2 L110,144.2 L130,111.2 L150,78.6 L175,60 L200,78.6 L220,111.2 L240,144.2 L260,168.2 L280,181.5 L300,187.3" fill="none" stroke="currentColor" stroke-width="1.8"/><line x1="175" y1="190" x2="175" y2="60" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/><text x="90" y="207" font-size="11" text-anchor="middle" fill="currentColor">-2σ</text><text x="132" y="207" font-size="11" text-anchor="middle" fill="currentColor">-σ</text><text x="175" y="207" font-size="12" text-anchor="middle" fill="currentColor">μ</text><text x="218" y="207" font-size="11" text-anchor="middle" fill="currentColor">σ</text><text x="262" y="207" font-size="11" text-anchor="middle" fill="currentColor">2σ</text><text x="175" y="52" font-size="11" text-anchor="middle" fill="currentColor">≈ 68,3%</text><text x="300" y="183" font-size="12" fill="currentColor">x</text><text x="18" y="50" font-size="12" fill="currentColor">f(x)</text></svg>',
        },
        {
          kind: "flip-cards",
          intro: "Latih istilah kunci kurva normal.",
          cards: [
            {
              front: "Variabel acak kontinu",
              back: "Nilai sembarang dalam selang; peluang satu titik = 0",
            },
            {
              front: "Fungsi kepadatan $f(x)$",
              back: "Kurva yang luas daerah di bawahnya adalah peluang",
            },
            {
              front: "Simetri",
              back: "Kurva cermin terhadap $x = \\mu$",
            },
            {
              front: "Peran $\\sigma$",
              back: "Lebar sebaran: $\\sigma$ besar = kurva rendah dan lebar",
            },
          ],
        },
      ],
    },
    {
      id: "representasi",
      kind: "representasi",
      title: "Representasi: Normal Baku dan Skor Baku",
      body: `Karena setiap pasangan $\\mu$ dan $\\sigma$ memberi kurva berbeda, kita menyederhanakannya dengan **transformasi** menjadi satu kurva acuan, yaitu **distribusi normal baku** dengan $\\mu = 0$ dan $\\sigma = 1$, ditulis $Z \\sim N(0, 1)$.

Transformasinya memakai **skor baku**
$$z = \\frac{x - \\mu}{\\sigma}.$$

Skor baku $z$ menyatakan **berapa simpangan baku** suatu nilai $x$ berada dari rata-rata. Nilai $z$ positif berarti $x$ di atas $\\mu$, dan $z$ negatif berarti di bawah $\\mu$. Berkat transformasi ini, setiap peluang dapat dihitung sekali saja pada tabel normal baku, lalu dipakai untuk semua distribusi normal.

Contohnya, jika $X \\sim N(500, 4^{2})$ menyatakan volume isi botol, maka volume $492$ mL berskor baku
$$z = \\frac{492 - 500}{4} = -2,$$
artinya botol itu terisi dua simpangan baku di bawah rata-rata.`,
      blocks: [
        {
          kind: "tabs",
          items: [
            {
              label: "Simbolik",
              body: "$z = \\dfrac{x - \\mu}{\\sigma}$; jika $X \\sim N(\\mu, \\sigma^{2})$ maka $Z \\sim N(0, 1)$.",
            },
            {
              label: "Grafik",
              body: "Distribusi asal digeser sehingga pusatnya di $0$ lalu dimampatkan atau dilebarkan sehingga simpangan bakunya $1$.",
            },
            {
              label: "Tabel",
              body: "Nilai peluang dibaca dari tabel normal baku pada selang $z$ yang diinginkan, contohnya $P(z \\leq 1{,}5) \\approx 0{,}9332$.",
            },
          ],
        },
        {
          kind: "callout",
          variant: "tip",
          text: "Skor baku tidak memakai satuan. Dua nilai dari pengukuran berbeda, seperti volume dalam mL dan tinggi dalam cm, dapat dibandingkan langsung setelah diubah menjadi $z$.",
        },
        {
          kind: "match",
          intro: "Pasangkan istilah dengan maknanya.",
          pairs: [
            {
              left: "Distribusi normal baku",
              right: "Normal dengan $\\mu = 0$ dan $\\sigma = 1$",
            },
            {
              left: "Skor baku $z$",
              right: "Jarak nilai dari rata-rata dalam satuan simpangan baku",
            },
            {
              left: "Transformasi",
              right: "Mengubah $X \\sim N(\\mu,\\sigma^{2})$ menjadi $Z \\sim N(0,1)$",
            },
            {
              left: "Tabel normal baku",
              right: "Daftar luas daerah untuk menghitung peluang",
            },
          ],
        },
      ],
    },
    {
      id: "eksplorasi",
      kind: "eksplorasi",
      title: "Eksplorasi Kurva Distribusi Normal",
      body: `Sebelum berlatih berhitung, amati bagaimana bentuk kurva berubah ketika $\\mu$ dan $\\sigma$ diubah. Pada simulasi berikut, atur rata-rata $\\mu$ dan simpangan baku $\\sigma$, lalu geser batas selang untuk membaca peluang $P(a \\leq X \\leq b)$ beserta skor bakunya. Bandingkan selang $\\mu \\pm \\sigma$, $\\mu \\pm 2\\sigma$, dan $\\mu \\pm 3\\sigma$; luasnya selalu sama meskipun $\\mu$ dan $\\sigma$ berubah.`,
      blocks: [
        {
          kind: "exploration",
          explorationId: "normal-distribusi-sim",
        },
      ],
    },
    {
      id: "generalisasi",
      kind: "generalisasi",
      title: "Pola Umum: Standardisasi dan Kaidah Empiris",
      body: `Semua peluang pada distribusi normal dihitung dengan satu langkah yang sama, yaitu **standardisasi**:

$$P(a \\leq X \\leq b) = P\\!\\left(\\frac{a - \\mu}{\\sigma} \\leq z \\leq \\frac{b - \\mu}{\\sigma}\\right).$$

Karena $z$ menyatakan jarak dalam satuan simpangan baku, besar peluang pada selang simetris $\\mu \\pm k\\sigma$ **sama untuk semua** distribusi normal. Inilah **kaidah empiris** (aturan $68$–$95$–$99{,}7$):

- sekitar $68{,}27\\%$ data dalam $\\mu \\pm \\sigma$;
- sekitar $95{,}45\\%$ data dalam $\\mu \\pm 2\\sigma$;
- sekitar $99{,}73\\%$ data dalam $\\mu \\pm 3\\sigma$.

Dari kaidah ini pula bisa dibaca peluang ekor. Karena kurva simetris dan luas total $1$, sisa di luar $\\mu \\pm 2\\sigma$ adalah $100\\% - 95{,}45\\% = 4{,}55\\%$, terbagi rata dua ekor, sehingga tiap ekor

$$P(z < -2) = P(z > 2) \\approx 0{,}0228.$$

Menarik: luas itu **tidak bergantung** pada $\\mu$ dan $\\sigma$. Berapa pun rata-rata dan simpangan bakunya, selama selangnya diukur dalam $k$ simpangan baku, peluangnya tetap. Inilah alasan mengapa distribusi normal menjadi model serba guna.`,
      blocks: [
        {
          kind: "figure",
          alt: "Kurva normal baku dengan dua daerah ekor di kiri z sama dengan -2 dan kanan z sama dengan 2 diarsir; daerah tengah sekitar 95,45 persen dan tiap ekor sekitar 2,28 persen.",
          caption: "Kaidah empiris dan ekor: $P(-2 \\leq z \\leq 2) \\approx 0{,}9545$, sehingga sisa $4{,}55\\%$ terbagi dua ekor, $P(z < -2) = P(z > 2) \\approx 0{,}0228$.",
          svg: '<svg viewBox="0 0 320 240" aria-hidden="true" role="presentation"><defs><marker id="dn2-axis" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0,0 L 10,5 L 0,10 z" fill="currentColor"/></marker></defs><line x1="40" y1="190" x2="308" y2="190" stroke="currentColor" stroke-width="1.2" marker-end="url(#dn2-axis)"/><line x1="40" y1="190" x2="40" y2="42" stroke="currentColor" stroke-width="1.2" marker-end="url(#dn2-axis)"/><path d="M91.7,166.5 L110,144.2 L130,111.2 L150,78.6 L175,60 L200,78.6 L220,111.2 L240,144.2 L258.3,166.5 L258.3,190 L91.7,190 Z" fill="currentColor" fill-opacity="0.12" stroke="none"/><path d="M50,187.3 L70,181.5 L90,168.2 L91.7,166.5 L91.7,190 L50,190 Z" fill="currentColor" fill-opacity="0.4" stroke="none"/><path d="M258.3,166.5 L260,168.2 L280,181.5 L300,187.3 L300,190 L258.3,190 Z" fill="currentColor" fill-opacity="0.4" stroke="none"/><path d="M50,187.3 L70,181.5 L90,168.2 L110,144.2 L130,111.2 L150,78.6 L175,60 L200,78.6 L220,111.2 L240,144.2 L260,168.2 L280,181.5 L300,187.3" fill="none" stroke="currentColor" stroke-width="1.8"/><line x1="91.7" y1="190" x2="91.7" y2="166.5" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/><line x1="258.3" y1="190" x2="258.3" y2="166.5" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/><text x="92" y="207" font-size="11" text-anchor="middle" fill="currentColor">-2</text><text x="175" y="207" font-size="12" text-anchor="middle" fill="currentColor">0</text><text x="258" y="207" font-size="11" text-anchor="middle" fill="currentColor">2</text><text x="64" y="150" font-size="10" fill="currentColor">2,28%</text><text x="272" y="150" font-size="10" text-anchor="middle" fill="currentColor">2,28%</text><text x="175" y="140" font-size="11" text-anchor="middle" fill="currentColor">95,45%</text><text x="300" y="183" font-size="12" fill="currentColor">z</text><text x="18" y="50" font-size="12" fill="currentColor">f(z)</text></svg>',
        },
      ],
    },
    {
      id: "rumus",
      kind: "rumus",
      title: "Rumus-Rumus Penting",
      body: `**Fungsi kepadatan normal.** Untuk $X \\sim N(\\mu, \\sigma^{2})$:

$$f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}}\\,e^{-\\frac{(x-\\mu)^{2}}{2\\sigma^{2}}}.$$

**Skor baku.** Mengubah nilai $x$ menjadi $z$ pada normal baku:

$$z = \\frac{x - \\mu}{\\sigma}, \\qquad x = \\mu + z\\sigma.$$

**Peluang sebagai luas.** Untuk menghitung peluang, ubah batas ke skor baku lalu gunakan tabel atau sebaran normal baku:

$$P(a \\leq X \\leq b) = P\\!\\left(\\frac{a - \\mu}{\\sigma} \\leq z \\leq \\frac{b - \\mu}{\\sigma}\\right).$$

**Kaidah empiris $68$–$95$–$99{,}7$.**

$$P(\\mu - \\sigma \\leq X \\leq \\mu + \\sigma) \\approx 0{,}6827,$$
$$P(\\mu - 2\\sigma \\leq X \\leq \\mu + 2\\sigma) \\approx 0{,}9545,$$
$$P(\\mu - 3\\sigma \\leq X \\leq \\mu + 3\\sigma) \\approx 0{,}9973.$$

**Peluang ekor.** Karena simetri dan luas total $1$:

$$P(z < -2) = P(z > 2) \\approx 0{,}0228, \\qquad P(z < -1) = P(z > 1) \\approx 0{,}1587.$$`,
      blocks: [
        {
          kind: "callout",
          variant: "warning",
          title: "Hati-hati",
          text: "Selalu **standardisasi dahulu** sebelum membaca tabel. Selain itu, $f(x)$ bukan peluang; peluang hanya diperoleh dari **luas** di bawah kurva, bukan dari tinggi kurva.",
        },
      ],
    },
    {
      id: "contoh",
      kind: "contoh",
      title: "Contoh Terbimbing",
      body: "Tiga contoh berikut menelusuri peluang selang, peluang ekor, dan pencarian nilai dari peluang, masing-masing dengan alasan di balik tiap langkah.",
      blocks: [
        {
          kind: "step-reveal",
          intro: "Tinggi badan siswa berdistribusi $X \\sim N(165, 6^{2})$ cm. Hitung peluang seorang siswa bertinggi antara 159 cm dan 171 cm.",
          steps: [
            {
              title: "Catat yang diketahui",
              text: "Tinggi $X$ berdistribusi normal dengan rata-rata $\\mu=165$ cm dan simpangan baku $\\sigma=6$ cm. Kita mencari peluang pada selang $159 \\leq X \\leq 171$.",
            },
            {
              title: "Ide: standardisasi batas",
              text: "Peluang dihitung dari luas daerah di bawah kurva normal baku, jadi kedua batas diubah dahulu ke skor baku $z=\\dfrac{x-\\mu}{\\sigma}$.",
            },
            {
              title: "Substitusi batas",
              text: "Batas bawah: $z=\\dfrac{159-165}{6}=\\dfrac{-6}{6}=-1$. Batas atas: $z=\\dfrac{171-165}{6}=1$. Jadi $P(159 \\leq X \\leq 171)=P(-1 \\leq z \\leq 1)$.",
            },
            {
              title: "Pakai kaidah empiris",
              text: "Selang $-1 \\leq z \\leq 1$ tepat $\\mu \\pm \\sigma$, yang memuat sekitar $68{,}27\\%$ data: $P(-1 \\leq z \\leq 1) \\approx 0{,}6827$.",
            },
            {
              title: "Verifikasi dan simpulkan",
              text: "Cek kewajaran: nilai $68\\%$ berarti hampir dua per tiga siswa, sesuai bentuk kurva yang menumpuk dekat rata-rata. Sekitar $68\\%$ siswa bertinggi $159$ sampai $171$ cm, sedangkan sekitar $32\\%$ di luar selang itu.",
            },
          ],
        },
        {
          kind: "step-reveal",
          intro: "Volume isi botol berdistribusi $X \\sim N(500, 4^{2})$ mL. Hitung peluang sebuah botol berisi **kurang dari** 492 mL.",
          steps: [
            {
              title: "Catat yang diketahui",
              text: "Volume $X \\sim N(500, 4^{2})$ mL, jadi $\\mu=500$ dan $\\sigma=4$. Yang dicari adalah ekor kiri, yaitu peluang isi kurang dari $492$ mL.",
            },
            {
              title: "Standardisasi batas",
              text: "$z=\\dfrac{492-500}{4}=\\dfrac{-8}{4}=-2$, sehingga $P(X<492)=P(z<-2)$.",
            },
            {
              title: "Ide: manfaatkan simetri dan luas total",
              text: "Kaidah empiris memberi $P(-2 \\leq z \\leq 2) \\approx 0{,}9545$. Sisa di luar selang itu $1-0{,}9545=0{,}0455$, dan karena kurva simetris sisa terbagi rata menjadi dua ekor.",
            },
            {
              title: "Hitung peluang ekor",
              text: "Tiap ekor bernilai $\\dfrac{0{,}0455}{2}\\approx 0{,}0228$, jadi $P(z<-2)\\approx 0{,}0228$.",
            },
            {
              title: "Verifikasi dan simpulkan",
              text: "Cek: $0{,}0228$ jauh di bawah $0{,}5$, sesuai harapan karena $492$ mL terletak dua simpangan baku di bawah rata-rata. Jadi sekitar $2{,}3\\%$ botol terisi terlalu sedikit.",
            },
          ],
        },
        {
          kind: "step-reveal",
          intro: "Nilai ujian berdistribusi $X \\sim N(72, 9^{2})$. Tentukan nilai $x$ yang melampaui $97{,}72\\%$ peserta, yaitu $P(X \\leq x) = 0{,}9772$.",
          steps: [
            {
              title: "Catat yang diketahui",
              text: "Nilai ujian $X \\sim N(72, 9^{2})$, jadi $\\mu=72$ dan $\\sigma=9$. Kali ini peluangnya diketahui dan kita mencari nilai $x$.",
            },
            {
              title: "Ide: bekerja mundur dari peluang ke skor baku",
              text: "Dari tabel normal baku, luas $0{,}9772$ di sebelah kiri bersesuaian dengan $z=2$, sebab $P(z \\leq 2) \\approx 0{,}9772$.",
            },
            {
              title: "Pakai rumus invers",
              text: "Skor baku dibalik dengan $x=\\mu+z\\sigma$.",
            },
            {
              title: "Substitusi",
              text: "$x=72+2(9)=72+18=90$.",
            },
            {
              title: "Verifikasi dan simpulkan",
              text: "Cek: skor baku dari $x=90$ memang $\\dfrac{90-72}{9}=2$, cocok dengan peluang yang diminta. Jadi ambang $x=90$ melampaui sekitar $97{,}72\\%$ peserta.",
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
      body: `Distribusi normal adalah model yang paling banyak dipakai untuk data kontinu.

- **Pengendalian mutu.** Pabrik memodelkan volume isi, berat kemasan, atau ukuran komponen secara normal, lalu menaksir peluang produk keluar dari batas toleransi dari ekor kurva. Peluang cacat yang kecil di kedua ekor membantu menetapkan ambang pemeriksaan.
- **Kesehatan dan antropometri.** Tinggi dan berat badan, tekanan darah, serta hasil pemeriksaan laboratorium sering didekati normal, sehingga dapat ditaksir berapa banyak orang yang berada di atas atau di bawah suatu ambang.
- **Pendidikan.** Sebaran nilai ujian berukuran besar kerap menyerupai kurva lonceng, dasar penentuan batas kelulusan atau peringkat.
- **Sains dan teknik.** Galat pengukuran yang berasal dari banyak faktor kecil yang saling bebas cenderung menyebar normal.

Ingat, model ini tetap **perkiraan**. Sebelum memakainya, periksa apakah datanya memang menumpuk di tengah secara simetris dan tidak punya dua puncak. Bila sebarannya miring berat atau punya pencilan ekstrem, model normal bisa menyesatkan.`,
    },
    {
      id: "kesalahan-umum",
      kind: "kesalahan-umum",
      title: "Kesalahan Umum",
      body: `**1. Menghitung peluang tanpa menstandardisasi.** Peluang tidak dapat dibaca langsung dari nilai $x$; ubah dahulu menjadi skor baku $z = \\dfrac{x-\\mu}{\\sigma}$.

**2. Menganggap tinggi kurva adalah peluang.** Peluang adalah **luas** daerah di bawah kurva, bukan tinggi titik pada kurva. Kurva yang tampak lebih rendah sekaligus lebih lebar, sehingga luas totalnya tetap $1$.

**3. Menukar peran $\\mu$ dan $\\sigma$.** $\\mu$ menggeser kurva, sedangkan $\\sigma$ melebarkan atau menyempitkannya. Tertukar keduanya membuat hasil jauh dari benar.

**4. Lupa luas total $1$.** Peluang ekor dihitung dari sisa, seperti $P(z > 2) = 0{,}5 - P(0 \\leq z \\leq 2) \\approx 0{,}0228$, bukan dari tinggi kurva.

**5. Mengira peluang satu titik pada variabel kontinu positif.** Karena satu titik tidak punya lebar, $P(X = a) = 0$ untuk variabel kontinu.`,
      blocks: [
        {
          kind: "spot-mistake",
          intro: "Seorang siswa menghitung peluang volume botol $X \\sim N(500, 4^{2})$ berisi antara 496 dan 504 mL. Klik langkah yang keliru.",
          steps: [
            "Selang $496$–$504$ adalah $\\mu \\pm \\sigma$ karena $500 \\pm 4$.",
            "Maka $P(496 \\leq X \\leq 504) = P(-1 \\leq z \\leq 1)$.",
            "Karena tinggi kurva di $\\mu$ sekitar $0{,}1$, peluangnya sekitar $0{,}1$.",
          ],
          wrongIndex: 2,
          explanation: "Peluang adalah **luas** di bawah kurva, bukan tinggi puncak. Tinggi kurva di $\\mu$ hanya sekitar $0{,}1$ per satuan, tetapi luas seluruh daerah dari $\\mu-\\sigma$ sampai $\\mu+\\sigma$ sekitar $0{,}6827$. Jadi $P(496 \\leq X \\leq 504) \\approx 0{,}6827$, bukan $0{,}1$.",
        },
      ],
    },
    {
      id: "tantangan",
      kind: "tantangan",
      title: "Tantangan",
      body: `Kaidah empiris memberi luas $68{,}27\\%$, $95{,}45\\%$, dan $99{,}73\\%$ untuk $k = 1, 2, 3$. Tetapi dari manakah angka-angka itu berasal?

**Soal.** Untuk distribusi normal baku $Z \\sim N(0,1)$, luas $P(-k \\leq z \\leq k)$ dihitung dari fungsi galat $\\operatorname{erf}$, yaitu
$$P(-k \\leq z \\leq k) = \\operatorname{erf}\\!\\left(\\frac{k}{\\sqrt{2}}\\right).$$
(a) Buktikanlah bahwa untuk $k = 1$ nilai ini sekitar $0{,}6827$. (b) Turunkan rumus peluang ekor $P(z > k) = \\dfrac{1}{2}\\left(1 - \\operatorname{erf}\\!\\left(\\dfrac{k}{\\sqrt{2}}\\right)\\right)$, lalu jelaskan mengapa $P(z < -2) = P(z > 2)$.`,
      blocks: [
        {
          kind: "callout",
          variant: "tip",
          title: "Petunjuk",
          text: "Ingat bahwa luas total di bawah kurva normal baku adalah $1$ dan kurva simetris terhadap $0$. Untuk bagian (a), substitusikan $k = 1$ dan gunakan nilai $\\operatorname{erf}\\!\\left(\\dfrac{1}{\\sqrt{2}}\\right) \\approx 0{,}6827$.",
        },
        {
          kind: "details",
          summary: "Pembahasan lengkap",
          text: `**(a)** Sesuai rumus yang diberikan, $P(-1 \\leq z \\leq 1) = \\operatorname{erf}\\!\\left(\\dfrac{1}{\\sqrt{2}}\\right)$. Karena $\\dfrac{1}{\\sqrt{2}} \\approx 0{,}7071$ dan $\\operatorname{erf}(0{,}7071) \\approx 0{,}6827$, terbukti $P(-1 \\leq z \\leq 1) \\approx 0{,}6827$.

**(b)** Karena luas total $1$ dan kurva simetris, peluang di kanan $k$ adalah separuh dari sisa setelah dikurangi luas tengah:
$$P(z > k) = \\frac{1 - \\operatorname{erf}\\!\\left(\\dfrac{k}{\\sqrt{2}}\\right)}{2}.$$
Simetri kurva terhadap $0$ membuat luas ekor kiri sama dengan ekor kanannya, sehingga $P(z < -k) = P(z > k)$. Khususnya $P(z < -2) = P(z > 2) \\approx 0{,}0228$.`,
        },
      ],
    },
    {
      id: "sejarah",
      kind: "sejarah",
      title: "Jejak Sejarah",
      body: `Kurva lonceng muncul lebih dahulu daripada namanya. Abraham de Moivre pada 1733 menurunkannya sebagai hampiran bagi distribusi binomial ketika $n$ membesar, dan Pierre-Simon Laplace mengembangkan alat ini pada awal 1800-an. Carl Friedrich Gauss memakainya untuk memodelkan galat pengukuran sehingga kurva ini sering disebut **kurva Gaussian**; nama "distribusi normal" dibakukan kemudian oleh Karl Pearson pada akhir abad ke-19. Pada 1812 Laplace menyumbangkan **teorema limit pusat**, yang menjelaskan mengapa jumlah banyak pengaruh kecil yang saling bebas cenderung menyebar normal, yaitu alasan mendalam mengapa kurva ini begitu sering muncul di alam dan dalam pengukuran.`,
    },
    {
      id: "refleksi",
      kind: "refleksi",
      title: "Refleksi",
      body: "Distribusi normal muncul di hampir setiap pengukuran, dari tinggi badan sampai galat alat ukur. Pikirkan satu pengukuran di sekitarmu, lalu tuliskan mana yang berperan sebagai $\\mu$ dan $\\sigma$ pada pengukuran itu, serta selang $\\mu \\pm \\sigma$ yang masuk akal.",
      blocks: [
        {
          kind: "reflection",
          prompts: [
            "Apa perbedaan penting antara variabel acak diskret dan kontinu dalam cara menghitung peluang?",
            "Mengapa $\\mu$ menggeser kurva sedangkan $\\sigma$ mengubah bentuknya? Jelaskan dengan kata-katamu sendiri.",
            "Mengapa peluang pada selang $\\mu \\pm \\sigma$ selalu sekitar $68\\%$ terlepas dari nilai $\\mu$ dan $\\sigma$?",
            "Mengapa model normal tidak cocok untuk sebaran yang sangat miring atau punya dua puncak?",
          ],
          confidenceLabel: "Seberapa yakin kamu menghitung peluang lewat skor baku dan kaidah empiris?",
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
              "Variabel acak kontinu",
              "nilai sembarang dalam selang; peluang = luas daerah",
            ],
            [
              "Notasi normal",
              "$X \\sim N(\\mu, \\sigma^{2})$",
            ],
            [
              "Fungsi kepadatan",
              "$f(x) = \\dfrac{1}{\\sigma\\sqrt{2\\pi}}e^{-\\frac{(x-\\mu)^{2}}{2\\sigma^{2}}}$",
            ],
            [
              "Sifat kurva",
              "simetris terhadap $\\mu$; puncak di $x=\\mu$; luas total $1$",
            ],
            [
              "Peran $\\sigma$",
              "$\\sigma$ besar $\\to$ kurva rendah dan lebar",
            ],
            [
              "Normal baku",
              "$Z \\sim N(0,1)$",
            ],
            [
              "Skor baku",
              "$z = \\dfrac{x-\\mu}{\\sigma}$, $x = \\mu + z\\sigma$",
            ],
            [
              "Kaidah empiris",
              "$\\mu\\pm\\sigma \\approx 68{,}27\\%$, $\\mu\\pm2\\sigma \\approx 95{,}45\\%$, $\\mu\\pm3\\sigma \\approx 99{,}73\\%$",
            ],
            [
              "Peluang ekor",
              "$P(z < -2) = P(z > 2) \\approx 0{,}0228$",
            ],
          ],
        },
      ],
    },
    {
      id: "evaluasi",
      kind: "evaluasi",
      title: "Evaluasi",
      questionIds: ['dn-10'],
      body: `**Cek akhir.** Selesaikan dua tugas. (1) Untuk $X \\sim N(80, 10^{2})$, hitung $P(70 \\leq X \\leq 90)$ dan $P(X > 100)$, lalu tafsirkan keduanya. (2) Jelaskan mengapa menuntut **semua** botol berada dalam $\\mu \\pm \\sigma$ bertentangan dengan sifat distribusi normal, dan usulkan cara yang lebih realistis. Lanjutkan latihan di [Latihan & Asesmen](/latihan) topik **Distribusi Normal**.`,
    },
  ],
};
