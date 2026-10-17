import type { Topic } from '@/types/content';

export const fungsiNilaiMutlakPiecewise: Topic = {
  id: 'fungsi-nilai-mutlak-piecewise',
  slug: 'fungsi-nilai-mutlak-piecewise',
  title: 'Fungsi Nilai Mutlak, Tangga, dan Piecewise',
  subtitle: 'Dari jarak ke tarif bertingkat',
  grade: 'XI',
  phase: 'F',
  element: 'aljabar-fungsi',
  subject: 'matematika-lanjut',
  status: 'lengkap',
  estimatedMinutes: 100,
  summary:
    'Mengenal nilai mutlak sebagai jarak, menuliskannya kembali sebagai fungsi piecewise, membaca fungsi tangga dan tarif bertingkat, serta memeriksa kontinuitas di titik sambung.',
  description:
    'Nilai mutlak mengubah tanda menjadi jarak: $|x|$ menyatakan jarak $x$ dari nol. Topik ini mulai dari grafik V fungsi $|x|$ dan penyelesaian persamaan serta pertidaksamaan nilai mutlak, lalu memperkenalkan notasi piecewise untuk fungsi yang rumusnya berbeda pada tiap bagian domain. Kita menilai fungsi piecewise, menggambar potongannya dengan titik terbuka dan tertutup, memeriksa kontinuitas di titik sambung, dan menutup dengan fungsi tangga serta tarif bertingkat. Model seperti ongkos kirim berjenjang dan pajak progresif menunjukkan kapan fungsi piecewise menjadi pilihan yang jujur.',
  keywords: [
    'nilai mutlak',
    'fungsi piecewise',
    'fungsi tangga',
    'jarak',
    'titik sambung',
    'kontinuitas',
    'tarif bertingkat',
    'pajak progresif',
  ],
  prerequisites: ['fungsi-kuadrat', 'transformasi-fungsi'],
  relatedTopics: ['fungsi-rasional-akar', 'pemodelan-fungsi', 'fungsi-invers'],
  prerequisiteKnowledge: [
    'Fungsi linear dan kuadrat beserta grafiknya',
    'Notasi fungsi $f(x)$ dan cara menghitung nilai fungsi di suatu titik',
    'Domain sebagai himpunan nilai $x$ yang boleh dimasukkan',
    'Pertidaksamaan linear dan penulisan himpunan penyelesaiannya',
  ],
  objectives: [
    { text: 'Peserta didik dapat menafsirkan $|x|$ sebagai jarak dari nol dan menggambar grafiknya.' },
    { text: 'Peserta didik dapat menyelesaikan persamaan nilai mutlak beserta pemeriksaan solusinya.' },
    { text: 'Peserta didik dapat menyelesaikan pertidaksamaan nilai mutlak dan menuliskannya sebagai selang.' },
    { text: 'Peserta didik dapat menuliskan fungsi bernilai mutlak sebagai fungsi piecewise.' },
    { text: 'Peserta didik dapat menilai fungsi piecewise dengan aturan yang sesuai domain tiap potongan.' },
    { text: 'Peserta didik dapat memeriksa kontinuitas di titik sambung dengan membandingkan nilai kiri dan kanan.' },
    { text: 'Peserta didik dapat memodelkan tarif bertingkat dengan fungsi tangga atau piecewise.' },
  ],
  applications: ['ongkos-kirim-bertingkat'],
  sections: [
    {
      id: 'tujuan',
      kind: 'tujuan',
      title: 'Tujuan Pembelajaran',
      body: 'Setelah mempelajari topik ini, peserta didik dapat menafsirkan nilai mutlak sebagai jarak, menyelesaikan persamaan dan pertidaksamaan nilai mutlak, menuliskan fungsi bernilai mutlak sebagai fungsi piecewise, menilai dan menggambar fungsi piecewise beserta titik terbuka dan tertutup, memeriksa kontinuitas di titik sambung, serta memodelkan tarif bertingkat dengan fungsi tangga atau piecewise.',
    },
    {
      id: 'pemantik',
      kind: 'pemantik',
      title: 'Pertanyaan Pemantik',
      body: `Sebuah jasa kirim memasang tarif dua lapis. Paket dengan berat sampai $1\\ \\text{kg}$ dikenai Rp10.000, sedangkan paket yang lebih dari $1\\ \\text{kg}$ sampai $3\\ \\text{kg}$ dikenai Rp15.000.

Bayangkan berat paketmu berubah perlahan dari $0{,}9\\ \\text{kg}$ ke $1\\ \\text{kg}$ ke $1{,}1\\ \\text{kg}$. Apakah ongkos kirim ikut berubah perlahan, atau ada sesuatu yang melompat tepat di angka $1\\ \\text{kg}$?`,
      blocks: [
        {
          kind: 'prediction',
          prompt: 'Berapa ongkos kirim paket tepat $1\\ \\text{kg}$, dan apa yang terjadi pada grafik biaya tepat di berat itu?',
          options: [
            'Rp10.000, lalu grafik melompat naik begitu berat melewati $1\\ \\text{kg}$',
            'Rp15.000, karena berat $1\\ \\text{kg}$ sudah masuk lapisan kedua',
            'Rp12.500, hasil rata-rata kedua tarif',
            'Tidak dapat ditentukan tanpa tabel rinci',
          ],
          reveal: `Paket tepat $1\\ \\text{kg}$ masih berada pada lapisan pertama karena batasnya "sampai $1\\ \\text{kg}$", sehingga ongkosnya **Rp10.000** (pilihan pertama). Begitu berat melewati $1\\ \\text{kg}$, tarif langsung berpindah ke Rp15.000 tanpa tahap antara. Grafiknya mendatar di Rp10.000 sampai tepat $1\\ \\text{kg}$ lalu **melompat** ke Rp15.000. Pilihan kedua keliru menempatkan batas; pilihan ketiga mengira tarif berubah mulus padahal tidak ada nilai di antaranya; pilihan keempat mengabaikan informasi yang sudah cukup. Fungsi yang nilainya tetap pada satu selang lalu melompat seperti ini disebut **fungsi tangga**.`,
          saveLabel: 'Simpan dugaan & lihat jawabannya',
        },
      ],
    },
    {
      id: 'prasyarat',
      kind: 'prasyarat',
      title: 'Prasyarat',
      body: `Topik ini menyatukan beberapa keterampilan yang sudah kamu pelajari. Sebelum masuk, pastikan kamu nyaman dengan:
- menggambar grafik fungsi linear seperti $y=2x+1$ dan kuadrat seperti $y=x^{2}$;
- menghitung nilai fungsi $f(a)$ dengan mensubstitusi $x=a$;
- membaca pertidaksamaan linear dan menuliskannya pada garis bilangan;
- menyelesaikan persamaan linear sederhana, termasuk yang menghasilkan bilangan negatif.`,
    },
    {
      id: 'konteks',
      kind: 'konteks',
      title: 'Situasi dan Konteks',
      body: `Nilai mutlak hadir setiap kali kita hanya peduli pada **seberapa jauh**, bukan ke arah mana. Jarak dua kota, selisih suhu dari titik beku, dan toleransi ukuran mesin adalah besaran tanpa tanda: arahnya tidak penting, besarnya yang penting. Itulah alasan $|x|$ disebut nilai mutlak, yaitu ukuran jarak si $x$ dari nol.

Fungsi piecewise muncul ketika satu aturan tidak cukup. Tarif parkir yang naik per jam, ongkos kirim berdasarkan lapisan berat, pajak penghasilan progresif, dan tarif listrik bertingkat semuanya berubah aturan pada batas tertentu. Pada setiap lapisan berlaku rumus yang berbeda, dan tepat di batas inilah kita harus berhati-hati menentukan apakah batas itu termasuk lapisan bawah atau lapisan atas.`,
      blocks: [
        {
          kind: 'callout',
          variant: 'info',
          title: 'Dua wajah nilai mutlak',
          text: 'Nilai mutlak dapat dibaca sebagai **jarak** (seberapa jauh dari nol) sekaligus sebagai **aturan ganda** (pakai tanda positif untuk bilangan tak negatif, dan tanda negatif untuk bilangan negatif). Dua bacaan ini setara dan saling membantu: yang satu menjelaskan maknanya, yang lain memudahkan perhitungan.',
        },
      ],
    },
    {
      id: 'konsep-nilai-mutlak',
      kind: 'konsep',
      title: 'Nilai Mutlak sebagai Jarak',
      questionIds: ['nmp-01'],
      body: `Nilai mutlak $|x|$ menyatakan jarak bilangan $x$ dari nol pada garis bilangan. Karena jarak tidak pernah negatif, berlaku $|x|\\geq0$ untuk setiap bilangan real $x$. Misalnya $|5|=5$, $|-5|=5$, dan $|0|=0$.

Nilai mutlak juga dapat ditulis sebagai aturan ganda: pada bilangan tak negatif, tandanya tidak diubah, sedangkan pada bilangan negatif, tandanya dibalik.
$$|x|=\\begin{cases} x, & x\\geq0 \\\\ -x, & x<0 \\end{cases}$$
Grafik $y=|x|$ karena itu berbentuk huruf **V** dengan puncak di $(0,0)$: dua sinar lurus yang bertemu bersudut di titik asal. Sinar kanan adalah potongan $y=x$, dan sinar kiri adalah potongan $y=-x$.

Jarak antara $x$ dan sebuah titik tetap $a$ ditulis $|x-a|$. Jadi persamaan $|x-3|=2$ berarti "bilangan yang jaraknya $2$ dari titik $3$", yaitu $x=1$ atau $x=5$.`,
      blocks: [
        {
          kind: 'figure',
          alt: 'Grafik fungsi nilai mutlak y sama dengan x mutlak berbentuk huruf V dengan puncak di titik asal, sinar kanan dan sinar kiri bertemu bersudut, sumbu x dan sumbu y bertanda.',
          caption: 'Grafik $y=|x|$ berbentuk V dengan puncak di $(0,0)$: potongan $y=x$ untuk $x\\geq0$ dan $y=-x$ untuk $x<0$.',
          svg: '<svg viewBox="0 0 320 240" aria-hidden="true" role="presentation"><defs><marker id="nmp-axis-v" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="currentColor"/></marker></defs><line x1="20" y1="150" x2="305" y2="150" stroke="currentColor" stroke-width="1.4" marker-end="url(#nmp-axis-v)"/><line x1="150" y1="225" x2="150" y2="20" stroke="currentColor" stroke-width="1.4" marker-end="url(#nmp-axis-v)"/><polyline points="60,60 150,150 240,60" fill="none" stroke="currentColor" stroke-width="2.4"/><circle cx="150" cy="150" r="3" fill="currentColor"/><text x="298" y="166" font-size="11" fill="currentColor">x</text><text x="156" y="30" font-size="11" fill="currentColor">y</text><text x="66" y="52" font-size="11" fill="currentColor">y = |x|</text><text x="130" y="168" font-size="11" fill="currentColor">O</text></svg>',
        },
        {
          kind: 'match',
          intro: 'Cocokkan istilah pada nilai mutlak dengan maknanya.',
          pairs: [
            { left: 'Nilai mutlak $|x|$', right: 'Jarak $x$ dari nol pada garis bilangan' },
            { left: '$|x-a|$', right: 'Jarak $x$ dari titik $a$' },
            { left: 'Grafik $y=|x|$', right: 'Dua sinar membentuk huruf V dengan puncak di $(0,0)$' },
            { left: 'Rentang nilai $|x|$', right: 'Selalu $|x|\\geq0$ untuk setiap bilangan real $x$' },
            { left: 'Persamaan $|x|=c$ untuk $c>0$', right: 'Dua solusi, yaitu $x=c$ atau $x=-c$' },
          ],
        },
      ],
    },
    {
      id: 'representasi',
      kind: 'representasi',
      title: 'Tiga Cara Membaca Nilai Mutlak',
      body: 'Hubungan yang sama dapat disajikan secara simbolik, grafis, dan tabel. Ketiganya menyampaikan satu gagasan: nilai mutlak membuang tanda dan menyisakan jarak.',
      blocks: [
        {
          kind: 'tabs',
          items: [
            {
              label: 'Simbolik',
              body: 'Aturan ganda $|x|=\\begin{cases} x, & x\\geq0 \\\\ -x, & x<0 \\end{cases}$ menunjukkan bahwa nilai mutlak adalah fungsi piecewise paling sederhana. Bentuk ini dipakai saat menyelesaikan persamaan dan pertidaksamaan.',
            },
            {
              label: 'Grafik',
              body: 'Grafik $y=|x|$ berupa V dengan puncak di $(0,0)$. Menambah konstanta, misalnya $|x-2|+1$, menggeser puncaknya menjadi $(2,1)$ tanpa mengubah bentuk V.',
            },
            {
              label: 'Tabel',
              body: '| $x$ | $-3$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ |\n|---|---|---|---|---|---|---|---|\n| $\\lvert x \\rvert$ | $3$ | $2$ | $1$ | $0$ | $1$ | $2$ | $3$ |\n\nPerhatikan nilainya selalu tak negatif dan simetris terhadap nol.',
            },
          ],
        },
      ],
    },
    {
      id: 'eksplorasi',
      kind: 'eksplorasi',
      title: 'Eksplorasi Titik Sambung Piecewise',
      body: `Sekarang amati bagaimana dua potongan fungsi bertemu di sebuah titik sambung. Pada simulasi berikut, ubah kemiringan potongan kiri dan kanan serta geseran vertikal $k$, lalu perhatikan nilai dari kiri dan nilai di titik sambung. Bandingkan keduanya: kapan bertemu, dan kapan salah satunya melompat.`,
      blocks: [
        {
          kind: 'exploration',
          explorationId: 'piecewise-nilai-mutlak',
        },
        {
          kind: 'callout',
          variant: 'tip',
          title: 'Amatilah',
          text: 'Geser nilai potongan kanan perlahan sampai sama dengan nilai potongan kiri. Begitu keduanya bertemu, badge kontinuitas menyala dan lompatan menghilang. Selisih terkecil yang masih terlihat sudah cukup untuk membuat fungsi tidak kontinu.',
        },
      ],
    },
    {
      id: 'konsep-piecewise',
      kind: 'konsep',
      title: 'Notasi Piecewise dan Kontinuitas',
      body: `Fungsi **piecewise** didefinisikan oleh beberapa rumus, masing-masing berlaku pada bagian tertentu domainnya. Contohnya,
$$f(x)=\\begin{cases} x+2, & x<2 \\\\ x^{2}-1, & x\\geq2 \\end{cases}$$
Bacanya: pakai $x+2$ bila $x$ kurang dari $2$, dan pakai $x^{2}-1$ bila $x$ lebih besar atau sama dengan $2$.

Saat menilai $f$, **periksa dulu $x$ berada di potongan mana**:
- $f(0)=0+2=2$ karena $0<2$;
- $f(2)=2^{2}-1=3$ karena $2\\geq2$ (perhatikan tanda "sama dengan" memilih potongan kedua);
- $f(4)=4^{2}-1=15$.

Pada grafik, batas antar potongan digambar dengan **titik tertutup** (bulatan penuh) bila nilainya termasuk, dan **titik terbuka** (bulatan kosong) bila tidak termasuk. Di titik sambung, kita menyelidiki **kontinuitas** dengan membandingkan tiga hal: nilai dari kiri, nilai dari kanan, dan nilai fungsi di titik itu. Fungsi **kontinu** di titik sambung bila ketiganya sama. Jika nilai kiri dan kanan berbeda, grafik melompat dan fungsi **tidak kontinu** di titik itu.`,
      blocks: [
        {
          kind: 'figure',
          alt: 'Grafik fungsi piecewise dengan potongan garis dan potongan parabola yang bertemu di x sama dengan 1. Titik terbuka pada potongan garis dan titik tertutup pada potongan parabola menandai lompatan nilai di titik sambung.',
          caption: 'Contoh grafik piecewise: nilai kiri dan kanan berbeda di $x=1$ sehingga terjadi lompatan; titik terbuka dan titik tertutup menandai batas yang tidak dan yang termasuk potongan.',
          svg: '<svg viewBox="0 0 320 240" aria-hidden="true" role="presentation"><defs><marker id="nmp-axis-pw" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="currentColor"/></marker></defs><line x1="20" y1="170" x2="305" y2="170" stroke="currentColor" stroke-width="1.4" marker-end="url(#nmp-axis-pw)"/><line x1="140" y1="228" x2="140" y2="20" stroke="currentColor" stroke-width="1.4" marker-end="url(#nmp-axis-pw)"/><line x1="165" y1="20" x2="165" y2="210" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4"/><polyline points="65,195 165,95" fill="none" stroke="currentColor" stroke-width="2.4"/><circle cx="165" cy="95" r="4" fill="none" stroke="currentColor" stroke-width="2.2"/><polyline points="165,120 177.5,88.75 190,45" fill="none" stroke="currentColor" stroke-width="2.4"/><circle cx="165" cy="120" r="4" fill="currentColor"/><text x="298" y="186" font-size="11" fill="currentColor">x</text><text x="146" y="30" font-size="11" fill="currentColor">y</text><text x="168" y="44" font-size="10" fill="currentColor">x = 1</text><text x="88" y="92" font-size="9" fill="currentColor">titik terbuka</text><text x="96" y="136" font-size="9" fill="currentColor">titik tertutup</text></svg>',
        },
        {
          kind: 'flip-cards',
          intro: 'Balik kartu untuk menguji istilah kunci fungsi piecewise.',
          cards: [
            { front: 'Notasi piecewise', back: 'Menuliskan rumus berbeda pada tiap bagian domain, misalnya $f(x)=\\begin{cases} x+2, & x<2 \\\\ x^{2}-1, & x\\geq2 \\end{cases}$' },
            { front: 'Titik sambung', back: 'Nilai $x$ tempat dua potongan bertemu dan aturannya berganti' },
            { front: 'Titik terbuka', back: 'Bulatan kosong yang menandai batas tidak termasuk pada potongan itu' },
            { front: 'Titik tertutup', back: 'Bulatan penuh yang menandai batas termasuk pada potongan itu' },
            { front: 'Kontinu di titik sambung', back: 'Nilai dari kiri dan dari kanan bertemu dengan nilai fungsi di titik itu' },
          ],
        },
      ],
    },
    {
      id: 'generalisasi',
      kind: 'generalisasi',
      title: 'Dari Piecewise ke Fungsi Tangga',
      body: `Bila jarak antar titik sambung makin rapat dan tiap potongan bernilai tetap, grafiknya berubah menjadi tangga. Fungsi semacam ini disebut **fungsi tangga**. Nilainya tetap pada setiap selang, lalu **melompat** tepat di batas selang tanpa melalui nilai antara.

Dua contoh bakunya adalah fungsi lantai dan fungsi langit-langit:
$$\\lfloor x\\rfloor=\\text{bilangan bulat terbesar yang tidak melebihi }x, \\qquad \\lceil x\\rceil=\\text{bilangan bulat terkecil yang tidak kurang dari }x.$$
Misalnya $\\lfloor2{,}7\\rfloor=2$, $\\lfloor-0{,}4\\rfloor=-1$, dan $\\lceil2{,}1\\rceil=3$. Fungsi lantai sering muncul saat sesuatu "dibulatkan ke bawah per satuan", sedangkan fungsi langit-langit muncul saat tarif dibulatkan **ke atas per jam atau per kg**.

Pertanyaan pentingnya bukan "mana yang benar", melainkan "model mana yang jujur". Fungsi linear tepat untuk besaran yang berubah mulus, seperti panjang kawat terhadap biaya bahan. Fungsi piecewise atau tangga justru lebih jujur ketika aturan dunia nyata memang berubah pada ambang: tarif parkir per jam, ongkos kirim per lapisan berat, atau pajak per lapisan penghasilan. Memaksakan satu rumus linear pada fenomena bertingkat akan menghasilkan nilai yang tidak pernah benar-benar berlaku.`,
      blocks: [
        {
          kind: 'figure',
          alt: 'Grafik fungsi tangga dengan empat anak tangga mendatar yang semakin naik, setiap ujung kanan anak tangga diberi titik terbuka dan setiap ujung kiri diberi titik tertutup untuk menandai lompatan nilai.',
          caption: 'Fungsi tangga: nilainya tetap pada setiap selang lalu melompat di batas, ditandai titik terbuka di ujung kanan dan titik tertutup di ujung kiri tiap anak tangga.',
          svg: '<svg viewBox="0 0 320 240" aria-hidden="true" role="presentation"><defs><marker id="nmp-axis-step" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="currentColor"/></marker></defs><line x1="20" y1="210" x2="305" y2="210" stroke="currentColor" stroke-width="1.4" marker-end="url(#nmp-axis-step)"/><line x1="60" y1="228" x2="60" y2="20" stroke="currentColor" stroke-width="1.4" marker-end="url(#nmp-axis-step)"/><polyline points="60,175 95,175" fill="none" stroke="currentColor" stroke-width="2.4"/><polyline points="95,140 130,140" fill="none" stroke="currentColor" stroke-width="2.4"/><polyline points="130,105 165,105" fill="none" stroke="currentColor" stroke-width="2.4"/><polyline points="165,70 200,70" fill="none" stroke="currentColor" stroke-width="2.4"/><circle cx="60" cy="175" r="3.2" fill="currentColor"/><circle cx="95" cy="140" r="3.2" fill="currentColor"/><circle cx="130" cy="105" r="3.2" fill="currentColor"/><circle cx="165" cy="70" r="3.2" fill="currentColor"/><circle cx="95" cy="175" r="3.6" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="130" cy="140" r="3.6" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="165" cy="105" r="3.6" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="200" cy="70" r="3.6" fill="none" stroke="currentColor" stroke-width="2"/><text x="298" y="226" font-size="11" fill="currentColor">x</text><text x="66" y="30" font-size="11" fill="currentColor">y</text><text x="150" y="40" font-size="10" fill="currentColor">fungsi tangga</text></svg>',
        },
      ],
    },
    {
      id: 'rumus',
      kind: 'rumus',
      title: 'Rumus dan Prosedur',
      body: `**Definisi nilai mutlak.**
$$|x|=\\begin{cases} x, & x\\geq0 \\\\ -x, & x<0 \\end{cases}$$
**Persamaan nilai mutlak.** Untuk $c>0$, $|u|=c$ setara dengan $u=c$ atau $u=-c$. Untuk $c=0$, solusinya $u=0$. Untuk $c<0$, tidak ada solusi.

**Pertidaksamaan nilai mutlak.** Untuk $c>0$:
$$|u|\\leq c \\iff -c\\leq u\\leq c, \\qquad |u|\\geq c \\iff u\\leq-c \\text{ atau } u\\geq c.$$
**Menilai fungsi piecewise.** Tentukan potongan mana yang memuat nilai $x$ dengan memeriksa tanda pertidaksamaannya, lalu pakai rumus potongan itu. Perhatikan apakah batas memakai "$<$" atau "$\\leq$".

**Kontinuitas di titik sambung $x=a$.** Hitung tiga nilai: nilai dari kiri $L^{-}=\\lim_{x\\to a^{-}}f(x)$, nilai dari kanan $L^{+}=\\lim_{x\\to a^{+}}f(x)$, dan nilai fungsi $f(a)$. Fungsi kontinu di $a$ bila $L^{-}=L^{+}=f(a)$. Jika $L^{-}\\neq L^{+}$, grafik melompat.

**Prosedur menyusun model bertingkat.** (1) Tentukan batas tiap lapisan; (2) tetapkan rumus pada tiap lapisan; (3) tuliskan dalam notasi piecewise; (4) periksa nilai di batas untuk melihat apakah model melompat atau menyambung.`,
    },
    {
      id: 'contoh-nilai-mutlak',
      kind: 'contoh',
      title: 'Contoh: Persamaan dan Pertidaksamaan Nilai Mutlak',
      body: 'Pelajari contoh berikut, lalu coba menirunya tanpa membuka langkah.',
      blocks: [
        {
          kind: 'step-reveal',
          intro: 'Ikuti langkah penyelesaian dan pemeriksaannya satu per satu.',
          steps: [
            {
              title: 'Contoh 1: menyelesaikan persamaan nilai mutlak',
              text: `Selesaikan $|2x-5|=7$.
\\
*Penyelesaian.* Untuk $c=7>0$, pecah menjadi dua kasus. Kasus pertama $2x-5=7$ memberi $2x=12$ sehingga $x=6$. Kasus kedua $2x-5=-7$ memberi $2x=-2$ sehingga $x=-1$.`,
            },
            {
              title: 'Contoh 1: memeriksa solusi',
              text: `Periksa $x=6$: $|2(6)-5|=|7|=7$ benar. Periksa $x=-1$: $|2(-1)-5|=|-7|=7$ benar. Jadi himpunan penyelesaiannya $\\{-1,\\,6\\}$.`,
            },
            {
              title: 'Contoh 2: menyelesaikan pertidaksamaan nilai mutlak',
              text: `Selesaikan $|x-3|\\leq5$.
\\
*Penyelesaian.* Bentuk $|u|\\leq c$ setara dengan $-c\\leq u\\leq c$, sehingga $-5\\leq x-3\\leq5$. Tambahkan $3$ pada ketiga ruas: $-2\\leq x\\leq8$. Periksa $x=0$: $|0-3|=3\\leq5$ benar. Periksa $x=9$: $|9-3|=6>5$ salah, sesuai batas.`,
            },
            {
              title: 'Contoh 3: pertidaksamaan dengan tanda "lebih dari"',
              text: `Selesaikan $|2x-4|>6$.
\\
*Penyelesaian.* Bentuk $|u|>c$ setara dengan $u<-c$ atau $u>c$. Jadi $2x-4<-6$ atau $2x-4>6$. Dari yang pertama, $2x<-2$ sehingga $x<-1$. Dari yang kedua, $2x>10$ sehingga $x>5$. Penyelesaiannya $x<-1$ atau $x>5$.`,
            },
          ],
        },
      ],
    },
    {
      id: 'contoh-piecewise',
      kind: 'contoh',
      title: 'Contoh: Menilai dan Memeriksa Fungsi Piecewise',
      body: 'Contoh berikut menggabungkan penilaian fungsi dan pemeriksaan kontinuitas di titik sambung.',
      blocks: [
        {
          kind: 'step-reveal',
          intro: 'Ikuti tiap langkah, lalu ulangi sendiri.',
          steps: [
            {
              title: 'Menilai fungsi pada tiap potongan',
              text: `Diberikan $f(x)=\\begin{cases} x+1, & x<2 \\\\ x^{2}-1, & x\\geq2 \\end{cases}$. Hitung $f(0)$, $f(2)$, dan $f(4)$.
\\
*Penyelesaian.* Karena $0<2$, dipakai $x+1$: $f(0)=0+1=1$. Karena $2\\geq2$, dipakai $x^{2}-1$: $f(2)=2^{2}-1=3$. Karena $4\\geq2$, $f(4)=4^{2}-1=15$.`,
            },
            {
              title: 'Menentukan nilai dari kiri dan kanan di x = 2',
              text: `Di titik sambung $x=2$: nilai dari kiri memakai potongan pertama, $\\lim_{x\\to2^{-}}(x+1)=3$. Nilai dari kanan memakai potongan kedua, $\\lim_{x\\to2^{+}}(x^{2}-1)=3$.`,
            },
            {
              title: 'Menyimpulkan kontinuitas',
              text: `Nilai kiri $3$, nilai kanan $3$, dan $f(2)=3$ semuanya sama. Karena itu $f$ **kontinu** di $x=2$ dan grafiknya tidak melompat.`,
            },
            {
              title: 'Membandingkan dengan fungsi yang melompat',
              text: `Bandingkan dengan $g(x)=\\begin{cases} x+2, & x<1 \\\\ x^{2}+1, & x\\geq1 \\end{cases}$. Nilai dari kiri di $x=1$ adalah $3$, sedangkan $g(1)=1^{2}+1=2$. Karena $3\\neq2$, grafik $g$ melompat di $x=1$ dan fungsi **tidak kontinu** di titik itu. Titik terbuka dipakai pada ujung potongan garis, dan titik tertutup pada potongan parabola.`,
            },
          ],
        },
      ],
    },
    {
      id: 'contoh-tarif',
      kind: 'contoh',
      title: 'Contoh: Model Tarif Bertingkat dan Kebalikannya',
      body: `Ongkos kirim sebuah jasa dimodelkan bertingkat terhadap berat $w$ (dalam kg):
$$C(w)=\\begin{cases} 8.000, & 0 < w \\leq 1 \\\\ 8.000+4.000(w-1), & 1 < w \\leq 3 \\\\ 16.000+3.000(w-3), & 3 < w \\leq 5 \\\\ 22.000+2.000(w-5), & w > 5 \\end{cases}$$
Bagian berikut menilai model, lalu menjawab pertanyaan kebalikan: berapa berat yang menghasilkan tagihan tertentu?`,
      blocks: [
        {
          kind: 'step-reveal',
          intro: 'Ikuti langkah perhitungan dan pemeriksaannya.',
          steps: [
            {
              title: 'Menghitung ongkos untuk berat 4 kg',
              text: `Berat $4\\ \\text{kg}$ berada pada lapisan $3<w\\leq5$, sehingga dipakai $16.000+3.000(w-3)$:
$$C(4)=16.000+3.000(4-3)=16.000+3.000=19.000.$$
Jadi ongkosnya Rp19.000.`,
            },
            {
              title: 'Memeriksa kesinambungan di batas 3 kg',
              text: `Dari kiri lapisan kedua di $w=3$: $8.000+4.000(3-1)=16.000$. Dari lapisan ketiga tepat di $w=3$: $16.000+3.000(0)=16.000$. Keduanya sama, jadi model **menyambung** di $w=3$ dan tidak melompat.`,
            },
            {
              title: 'Menjawab pertanyaan kebalikan',
              text: `Seorang pelanggan membayar Rp25.000. Karena Rp25.000 lebih besar daripada Rp22.000 (ongkos maksimum lapisan ketiga), beratnya ada di lapisan $w>5$, sehingga dipakai $22.000+2.000(w-5)$:
$$22.000+2.000(w-5)=25.000 \\Rightarrow 2.000(w-5)=3.000 \\Rightarrow w-5=1{,}5.$$
Jadi berat paketnya $w=6{,}5\\ \\text{kg}$.`,
            },
            {
              title: 'Memeriksa jawaban',
              text: `Substitusi balik $w=6{,}5$: $22.000+2.000(1{,}5)=22.000+3.000=25.000$, sesuai tagihan. Model bertingkat ini dapat dibalik karena tiap lapisan linearnya satu-satu dan menghasilkan ongkos berbeda pada tiap berat.`,
            },
          ],
        },
      ],
    },
    {
      id: 'latihan-dasar',
      kind: 'latihan-dasar',
      title: 'Latihan Dasar',
      level: 'dasar',
    },
    {
      id: 'latihan-cakap',
      kind: 'latihan-cakap',
      title: 'Latihan Cakap',
      level: 'cakap',
    },
    {
      id: 'latihan-mahir',
      kind: 'latihan-mahir',
      title: 'Latihan Mahir',
      level: 'mahir',
    },
    {
      id: 'dunia-nyata',
      kind: 'dunia-nyata',
      title: 'Penerapan di Dunia Nyata',
      body: `Dua contoh nyata yang paling sering memakai fungsi piecewise adalah pajak dan tarif.

**Pajak penghasilan progresif.** Penghasilan $H$ dibagi menjadi beberapa lapisan, dan tiap lapisan dikenai tarifnya sendiri. Untuk lapisan $0 < H \\leq 60$ juta, tarif $5\\%$; lapisan $60 < H \\leq 250$ juta, tarif $15\\%$; lapisan $250 < H \\leq 500$ juta, tarif $25\\%$; dan di atas $500$ juta, tarif $30\\%$. Model pajaknya berbentuk
$$T(H)=\\begin{cases} 0{,}05H, & 0 < H \\leq 60 \\\\ 3+0{,}15(H-60), & 60 < H \\leq 250 \\\\ 31{,}5+0{,}25(H-250), & 250 < H \\leq 500 \\\\ 94+0{,}30(H-500), & H > 500 \\end{cases}$$
dengan $H$ dan $T$ dalam juta rupiah. Model ini menyambung di tiap batas: pajak untuk penghasilan Rp300 juta adalah $31{,}5+0{,}25(50)=44$ juta, dan grafiknya tetap terhubung meskipun kemiringannya berubah.

**Tarif listrik bertingkat.** Pemakaian listrik rumah tangga juga dihitung berlapis, misalnya tarif tertentu untuk pemakaian sampai sekian kWh dan tarif lebih tinggi di atasnya. Fungsi tagihannya berbentuk piecewise-linear seperti model ongkos kirim pada bagian contoh.

Kedua contoh memperlihatkan gagasan inti: fungsi piecewise bukan trik matematika, melainkan cara menuliskan aturan nyata yang memang berganti di ambang tertentu. Lihat studi kasus [Ongkos Kirim Bertingkat](/aplikasi/ongkos-kirim-bertingkat) untuk model pengiriman lengkap dengan perhitungan kebalikannya.`,
      blocks: [
        {
          kind: 'figure',
          alt: 'Grafik ongkos kirim bertingkat terhadap berat paket. Grafik mendatar pada delapan ribu rupiah untuk berat sampai satu kilogram, lalu naik makin landai melalui titik enam belas ribu rupiah di tiga kilogram, dua puluh dua ribu rupiah di lima kilogram, dan dua puluh delapan ribu rupiah di delapan kilogram.',
          caption: 'Ongkos kirim bertingkat: grafik menyambung dengan kemiringan yang menurun tiap lapisan, dari Rp8.000 pada 1 kg hingga Rp28.000 pada 8 kg (dalam ribuan rupiah).',
          svg: '<svg viewBox="0 0 320 240" aria-hidden="true" role="presentation"><defs><marker id="nmp-axis-tarif" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="currentColor"/></marker></defs><line x1="20" y1="210" x2="305" y2="210" stroke="currentColor" stroke-width="1.4" marker-end="url(#nmp-axis-tarif)"/><line x1="60" y1="228" x2="60" y2="20" stroke="currentColor" stroke-width="1.4" marker-end="url(#nmp-axis-tarif)"/><polyline points="60,170 90,170 150,130 210,100 300,70" fill="none" stroke="currentColor" stroke-width="2.4"/><circle cx="90" cy="170" r="3" fill="currentColor"/><circle cx="150" cy="130" r="3" fill="currentColor"/><circle cx="210" cy="100" r="3" fill="currentColor"/><circle cx="300" cy="70" r="3" fill="currentColor"/><text x="290" y="226" font-size="10" fill="currentColor">berat (kg)</text><text x="66" y="30" font-size="11" fill="currentColor">ongkos</text><text x="64" y="164" font-size="9" fill="currentColor">8</text><text x="128" y="126" font-size="9" fill="currentColor">16</text><text x="188" y="96" font-size="9" fill="currentColor">22</text><text x="278" y="66" font-size="9" fill="currentColor">28</text></svg>',
        },
      ],
    },
    {
      id: 'kesalahan-umum',
      kind: 'kesalahan-umum',
      title: 'Kesalahan Umum',
      body: `**1. Mengabaikan syarat domain tiap potongan.** Menilai fungsi piecewise tanpa memeriksa dulu $x$ berada di potongan mana akan memakai rumus yang salah.
**2. Salah memilih batas pada titik sambung.** Simbol "$<$" tidak memasukkan batas, sedangkan "$\\leq$" memasukkannya. Salah satu karakter ini bisa mengubah jawaban.
**3. Menganggap semua fungsi piecewise kontinu.** Lompatan di titik sambung justru hal yang wajar, misalnya pada tarif parkir. Jangan menyimpulkan kontinuitas tanpa memeriksa nilai kiri dan kanan.
**4. Menjatuhkan cabang negatif pada nilai mutlak.** Persamaan $|u|=c$ punya dua solusi, $u=c$ dan $u=-c$. Menuliskan hanya satu berarti kehilangan solusi.

Perhatikan pemeriksaan kontinuitas berikut. Ada satu langkah yang keliru. Klik langkah itu.`,
      blocks: [
        {
          kind: 'spot-mistake',
          intro: 'Langkah memeriksa kontinuitas $f(x)=\\begin{cases} x+2, & x<1 \\\\ x^{2}, & x\\geq1 \\end{cases}$ di $x=1$.',
          steps: [
            'Nilai dari kiri: $x+2$ di $x=1$ memberi $3$.',
            'Nilai dari kanan: $x^{2}$ di $x=1$ memberi $1$.',
            'Karena nilai kiri $3$ dan nilai kanan $1$ berbeda, fungsi ini kontinu.',
            'Agar kontinu, salah satu potongan harus disetel sehingga kedua nilai bertemu.',
          ],
          wrongIndex: 2,
          explanation: 'Langkah ketiga keliru. Nilai kiri dan kanan yang berbeda justru menandakan lompatan sehingga fungsi **tidak** kontinu di $x=1$. Fungsi kontinu mensyaratkan nilai kiri, nilai kanan, dan nilai fungsi semuanya sama, sedangkan di sini $3\\neq1$.',
        },
      ],
    },
    {
      id: 'refleksi',
      kind: 'refleksi',
      title: 'Refleksi',
      body: 'Nilai mutlak dan fungsi piecewise mengajarkan bahwa satu rumus tidak selalu cukup. Renungkan bagaimana aturan ganda dapat muncul dari gagasan sederhana tentang jarak, lalu bagaimana ambang dalam dunia nyata menuntut model yang berganti aturan.',
      blocks: [
        {
          kind: 'reflection',
          prompts: [
            'Mengapa $|x|$ dapat dibaca sekaligus sebagai jarak dan sebagai fungsi piecewise dua potongan?',
            'Saat menyelesaikan $|u|=c$, mengapa kita harus menyelidiki dua kasus, dan kapan kasus itu boleh diabaikan?',
            'Bagaimana kamu memutuskan apakah sebuah fenomena nyata lebih tepat dimodelkan fungsi linear atau fungsi tangga?',
          ],
          confidenceLabel: 'Seberapa yakin kamu memilih aturan piecewise yang tepat dan memeriksa titik sambungnya?',
        },
      ],
    },
    {
      id: 'rangkuman',
      kind: 'rangkuman',
      title: 'Rangkuman',
      blocks: [
        {
          kind: 'table',
          caption: 'Ringkasan konsep nilai mutlak, piecewise, dan fungsi tangga',
          headers: ['Konsep', 'Bentuk atau aturan'],
          rows: [
            ['Nilai mutlak $|x|$', 'jarak $x$ dari nol, selalu $\\geq0$'],
            ['Aturan ganda', '$|x|=x$ untuk $x\\geq0$, $|x|=-x$ untuk $x<0$'],
            ['Persamaan $|u|=c$, $c>0$', '$u=c$ atau $u=-c$'],
            ['Pertidaksamaan $|u|\\leq c$', '$-c\\leq u\\leq c$'],
            ['Pertidaksamaan $|u|\\geq c$', '$u\\leq-c$ atau $u\\geq c$'],
            ['Fungsi piecewise', 'rumus berbeda pada tiap bagian domain'],
            ['Batas potongan', '"$<$" tidak termasuk batas, "$\\leq$" termasuk'],
            ['Kontinu di titik sambung', 'nilai kiri, nilai kanan, dan nilai fungsi sama'],
            ['Fungsi tangga', 'nilai tetap per selang lalu melompat di batas'],
            ['Tarif bertingkat', 'model piecewise atau tangga yang jujur'],
          ],
        },
        {
          kind: 'callout',
          variant: 'concept',
          title: 'Benang merah',
          text: 'Gagasan tunggal yang menyatukan semua: **satu besaran kadang punya aturan berbeda di bagian domain yang berbeda**. Nilai mutlak adalah contoh paling sederhana, fungsi tangga adalah versi yang melompat, dan tarif bertingkat adalah wajahnya di dunia nyata. Kemampuan menuliskannya secara piecewise menyiapkanmu memilih model pada topik Pemodelan Fungsi, sekaligus menjadi bekal membaca kontinuitas pada Limit Fungsi.',
        },
      ],
    },
    {
      id: 'evaluasi',
      kind: 'evaluasi',
      title: 'Evaluasi',
      questionIds: ['nmp-14'],
      body: `Menuliskan model bertingkat menuntut ketelitian pada batas lapisan dan pemeriksaan di titik sambung. Kerjakan soal pemodelan pajak progresif berikut secara lengkap, lalu lanjutkan ke [Latihan & Asesmen](/latihan) topik **Fungsi Nilai Mutlak, Tangga, dan Piecewise** untuk latihan tambahan.`,
    },
    {
      id: 'sejarah',
      kind: 'sejarah',
      title: 'Dari Modulus ke Tarif Berjenjang',
      body: `Tanda mutlak $|x|$ baru memperoleh bentuknya yang kita kenal sekarang pada abad ke-19. Karl Weierstrass, dalam kuliah-kuliahnya sekitar 1841 hingga 1850-an, mulai memakai dua batang tegak untuk menyatakan **modulus**, yaitu ukuran jarak tanpa tanda. Kata *modulus* berasal dari bahasa Latin yang berarti "ukuran kecil". Sebelum itu, gagasan jarak tanpa tanda sudah muncul dalam geometri, tetapi belum memiliki lambang ringkas. Notasi $|x|$ kemudian menetap lewat buku-buku teks analisis pada akhir abad ke-19 dan awal abad ke-20.

Gagasan fungsi tangga punya jejak praktis yang lebih tua. Pada abad ke-19, tarif kereta api dan bea masuk di Eropa dihitung berlapis: barang pada rentang berat tertentu dikenai biaya tetap yang melompat pada batas rentang. Struktur seperti ini persis fungsi tangga. Tradisi itu berlanjut ke pajak penghasilan progresif: Amerika Serikat memperkenalkannya pada 1913, dan Indonesia memakai tarif berjenjang untuk Pajak Penghasilan sejak 1983. Setiap lapisan dikenai tarif yang sama pada seluruh penghasilan di lapisan itu, lalu lapisan di atasnya dikenai tarif berbeda.

Jadi fungsi piecewise dan fungsi tangga bukan penemuan buku teks, melainkan bahasa resmi tarif: pada ambang tertentu, aturannya memang berganti, bukan sekadar berubah kemiringan.`,
      blocks: [
        {
          kind: 'table',
          caption: 'Penanda waktu perkembangan nilai mutlak dan tarif berjenjang',
          headers: ['Tahun', 'Peristiwa'],
          rows: [
            ['1841', 'Karl Weierstrass mulai memakai notasi $|x|$ untuk modulus'],
            ['1913', 'Pajak penghasilan progresif pertama diberlakukan di Amerika Serikat'],
            ['1983', 'Indonesia memakai tarif Pajak Penghasilan berlapis'],
          ],
        },
      ],
    },
    {
      id: 'tantangan',
      kind: 'tantangan',
      title: 'Ketaksamaan Segitiga dan Uji Batas Tarif',
      body: `Soal nonrutin ini menuntut pembuktian, bukan sekadar menghitung.

Buktikan bahwa untuk setiap bilangan real $a$ dan $b$ berlaku
$$|a+b|\\leq|a|+|b|.$$
Pertidaksamaan ini dikenal sebagai **ketaksamaan segitiga** dan menjadi dasar banyak pembatasan galat dalam perhitungan.

Selesai membuktikan, gunakan gagasan yang sama untuk menilai sebuah model tarif bertingkat: jika ongkos kirim pada lapisan pertama berubah sebesar $4.000$ rupiah per kg dan kedua paket berbeda berat, seberapa besar selisih ongkos paling banyak yang mungkin muncul?`,
      blocks: [
        {
          kind: 'callout',
          variant: 'tip',
          title: 'Mulai dari kasus tanda',
          text: 'Pecah pembuktian menjadi dua kasus berdasarkan tanda $a+b$. Untuk setiap bilangan real $u$, berlaku $u\\leq|u|$. Gunakan fakta itu pada $a$, $b$, dan $a+b$.',
        },
        {
          kind: 'step-reveal',
          intro: 'Ikuti langkah pembuktian berikut satu per satu.',
          steps: [
            {
              title: 'Memahami dua kasus',
              text: `Nilai $|a+b|$ bergantung pada tanda $a+b$. Jika $a+b\\geq0$, maka $|a+b|=a+b$. Jika $a+b<0$, maka $|a+b|=-(a+b)=-a-b$. Kita buktikan tiap kasus terpisah.`,
            },
            {
              title: 'Kasus a + b lebih besar atau sama dengan nol',
              text: `Untuk setiap bilangan real $u$ berlaku $u\\leq|u|$, sehingga $a\\leq|a|$ dan $b\\leq|b|$. Menjumlahkan keduanya memberi $a+b\\leq|a|+|b|$. Karena pada kasus ini $|a+b|=a+b$, terbukti $|a+b|\\leq|a|+|b|$.`,
            },
            {
              title: 'Kasus a + b kurang dari nol',
              text: `Sekali lagi $a\\leq|a|$ dan $b\\leq|b|$. Kalikan dengan $-1$ dengan hati-hati: $-a\\leq|a|$ dan $-b\\leq|b|$ juga berkaitan, sehingga $-a-b\\leq|a|+|b|$. Jadi $|a+b|=-(a+b)=-a-b\\leq|a|+|b|$.`,
            },
            {
              title: 'Menyimpulkan dan memeriksa kesamaan',
              text: `Kedua kasus menutup seluruh kemungkinan, sehingga $|a+b|\\leq|a|+|b|$ terbukti untuk semua bilangan real. Kesamaan terjadi ketika $a$ dan $b$ searah (keduanya tak negatif atau keduanya tak positif) atau salah satunya nol. Periksa: untuk $a=3$ dan $b=-2$, ruas kiri $|1|=1$ dan ruas kanan $3+2=5$, jadi pertidaksamaan tegas.`,
            },
            {
              title: 'Menerapkan pada model tarif',
              text: `Tulis ongkos lapisan pertama sebagai fungsi $C(w)=8.000+4.000(w-1)$. Untuk dua berat $w_{1}$ dan $w_{2}$ dalam lapisan yang sama,
$$|C(w_{1})-C(w_{2})|=|4.000(w_{1}-w_{2})|=4.000|w_{1}-w_{2}|.$$
Selisih ongkos paling banyak sebanding dengan selisih berat: setiap selisih $1\\ \\text{kg}$ memberi selisih ongkos paling banyak Rp4.000 pada lapisan ini. Inilah cara ketaksamaan nilai mutlak membantu membatasi galat perhitungan tarif.`,
            },
          ],
        },
      ],
    },
  ],
};
