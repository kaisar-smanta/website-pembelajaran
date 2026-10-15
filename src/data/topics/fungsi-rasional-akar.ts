import type { Topic } from '@/types/content';

export const fungsiRasionalAkar: Topic = {
  id: 'fungsi-rasional-akar',
  slug: 'fungsi-rasional-akar',
  title: 'Fungsi Rasional dan Fungsi Akar',
  subtitle: 'Domain, asimtot, lubang, dan transformasi akar',
  grade: 'XI',
  phase: 'F',
  element: 'aljabar-fungsi',
  subject: 'matematika-lanjut',
  status: 'lengkap',
  estimatedMinutes: 95,
  summary:
    'Mempelajari fungsi rasional p(x)/q(x) beserta domain, asimtot tegak, asimtot datar, dan lubang. Materi berlanjut ke fungsi akar kuadrat dengan domain, range, dan transformasinya, lalu dipakai untuk memodelkan biaya rata-rata.',
  description:
    'Fungsi rasional dan fungsi akar memperluas keluarga fungsi yang telah kamu kenal. Topik ini mulai dari bentuk p(x)/q(x), menentukan domain saat penyebut bernilai nol, lalu membedakan asimtot tegak dari lubang yang muncul ketika sebuah faktor saling meniadakan, dengan perbandingan derajat pembilang dan penyebut sebagai kunci asimtot datar. Setelah itu kita mempelajari fungsi akar beserta transformasinya, lalu menutup topik dengan pemodelan biaya rata-rata dan pengenalan sekilas fungsi nilai mutlak, fungsi tangga, serta fungsi piecewise.',
  keywords: [
    'fungsi rasional',
    'fungsi akar',
    'domain',
    'asimtot',
    'lubang',
    'perilaku ujung',
    'nilai mutlak',
    'piecewise',
  ],
  prerequisites: ['fungsi-kuadrat', 'komposisi-fungsi'],
  relatedTopics: ['pemodelan-fungsi', 'limit-fungsi', 'fungsi-logaritma', 'transformasi-fungsi'],
  prerequisiteKnowledge: [
    'Fungsi kuadrat, akar-akarnya, dan pemfaktoran selisih kuadrat a^2 - b^2',
    'Komposisi fungsi serta gagasan domain dan range suatu fungsi',
    'Menyederhanakan pecahan aljabar dengan mencoret faktor yang sama',
    'Membaca titik dan kecenderungan grafik pada bidang koordinat',
  ],
  objectives: [
    { text: 'Peserta didik dapat menentukan domain fungsi rasional dan fungsi akar.' },
    { text: 'Peserta didik dapat mengidentifikasi asimtot tegak dan asimtot datar fungsi rasional dari derajat pembilang dan penyebut.' },
    { text: 'Peserta didik dapat membedakan diskontinuitas terhapus (lubang) dari asimtot tegak.' },
    { text: 'Peserta didik dapat menganalisis transformasi fungsi akar beserta domain dan rangenya.' },
    { text: 'Peserta didik dapat memodelkan biaya rata-rata sebagai fungsi rasional dan menafsirkan asimtot datarnya.' },
    { text: 'Peserta didik dapat mengenali fungsi nilai mutlak, fungsi tangga, dan fungsi piecewise sebagai bagian keluarga fungsi yang lebih luas.' },
  ],
  applications: ['mtl-biaya-rata-rasional'],
  sections: [
    {
      id: 'tujuan',
      kind: 'tujuan',
      title: 'Tujuan Pembelajaran',
      body: 'Setelah mempelajari topik ini, peserta didik dapat menentukan domain fungsi rasional dan fungsi akar, mengidentifikasi asimtot tegak, asimtot datar, dan lubang, menganalisis transformasi fungsi akar, serta memodelkan situasi nyata seperti biaya rata-rata dan menafsirkan perilaku ujungnya.',
    },
    {
      id: 'pemantik',
      kind: 'pemantik',
      title: 'Pertanyaan Pemantik',
      blocks: [
        {
          kind: 'prediction',
          prompt: `Perhatikan fungsi $f(x)=\\dfrac{x^{2}-4}{(x-2)(x-1)}$. Jika kita substitusikan $x=2$, baik pembilang maupun penyebut bernilai nol sehingga bentuknya menjadi $\\dfrac{0}{0}$.

Apakah grafik fungsi ini memiliki asimtot tegak di $x=2$, atau ada kemungkinan lain? Apa yang terjadi pada grafik tepat di titik itu?`,
          reveal: `Pembilang dapat difaktorkan: $x^{2}-4=(x-2)(x+2)$. Faktor $(x-2)$ muncul di pembilang dan penyebut lalu saling meniadakan, sehingga untuk $x\\neq2$
$$f(x)=\\dfrac{x+2}{x-1}.$$
Di $x=2$ fungsi tetap tidak terdefinisi, tetapi nilai di sekitarnya mendekati $\\dfrac{2+2}{2-1}=4$. Karena nilainya mendekati bilangan berhingga, titik itu merupakan **lubang** (diskontinuitas terhapus), bukan asimtot tegak. Asimtot tegak justru berada di $x=1$, tempat penyebut yang tersisa bernilai nol.`,
          saveLabel: 'Simpan dugaan & lihat jawabannya',
        },
      ],
    },
    {
      id: 'prasyarat',
      kind: 'prasyarat',
      title: 'Prasyarat',
      body: `Fungsi rasional dan fungsi akar menuntut ketelitian pada domain dan pemfaktoran. Pastikan kamu sudah menguasai:
- pemfaktoran bentuk aljabar, terutama selisih kuadrat $a^{2}-b^{2}=(a-b)(a+b)$;
- fungsi kuadrat beserta akar-akarnya;
- gagasan domain fungsi sebagai himpunan nilai $x$ yang boleh dimasukkan;
- menyederhanakan pecahan aljabar dengan mencoret faktor yang sama.`,
    },
    {
      id: 'konteks',
      kind: 'konteks',
      title: 'Situasi dan Konteks',
      body: `Banyak besaran nyata merupakan hasil bagi dua besaran lain: kecepatan rata-rata adalah jarak dibagi waktu, kepadatan penduduk adalah jumlah penduduk dibagi luas wilayah, dan biaya rata-rata per unit adalah biaya total dibagi banyak unit. Semuanya berbentuk fungsi rasional $\\dfrac{p(x)}{q(x)}$.

Fungsi akar muncul ketika suatu besaran tumbuh makin lambat, seperti jarak jatuh bebas terhadap waktu atau hubungan antara luas dan sisi. Kedua jenis fungsi ini menuntut kehati-hatian pada domain, karena pembagian dengan nol dan akar bilangan negatif tidak diperbolehkan.`,
      blocks: [
        {
          kind: 'callout',
          variant: 'info',
          title: 'Mengapa domain penting',
          text: 'Fungsi rasional tidak terdefinisi saat penyebutnya nol, dan fungsi akar kuadrat hanya terdefinisi saat isi akarnya tidak negatif. Menentukan domain lebih dahulu memandu kita membaca letak asimtot maupun titik awal grafik.',
        },
      ],
    },
    {
      id: 'konsep',
      kind: 'konsep',
      title: 'Fungsi Rasional: Domain, Asimtot, dan Lubang',
      body: `Fungsi rasional adalah hasil bagi dua polinomial,
$$f(x)=\\dfrac{p(x)}{q(x)}, \\qquad q(x)\\neq 0.$$
**Domain** fungsi ini adalah semua bilangan real kecuali nilai yang membuat $q(x)=0$, sebab pembagian dengan nol tidak terdefinisi.

Ada tiga ciri grafik yang perlu dikenali:
- **Asimtot tegak** di $x=c$ muncul bila $q(c)=0$ **dan** faktor $(x-c)$ tidak meniadakan faktor di pembilang. Di dekat $x=c$, nilai $f(x)$ membesar tanpa batas.
- **Lubang** (diskontinuitas terhapus) muncul bila faktor $(x-c)$ terdapat pada pembilang maupun penyebut lalu saling meniadakan. Fungsi tetap tak terdefinisi di $x=c$, tetapi nilai di sekitarnya mendekati bilangan berhingga.
- **Asimtot datar** $y=L$ menggambarkan perilaku ujung: nilai yang didekati grafik ketika $x$ menjadi sangat besar atau sangat kecil.

Misalnya, pada $f(x)=\\dfrac{x^{2}-4}{(x-2)(x-1)}$ faktor $(x-2)$ meniadakan, sehingga grafik memiliki lubang di $x=2$ dan asimtot tegak di $x=1$.`,
      blocks: [
        {
          kind: 'match',
          intro: 'Cocokkan istilah pada fungsi rasional dengan maknanya.',
          pairs: [
            {
              left: 'Domain',
              right: 'Semua $x$ yang membuat penyebut tidak nol',
            },
            {
              left: 'Asimtot tegak',
              right: 'Garis $x=c$ yang didekati kurva saat nilai fungsi membesar tanpa batas',
            },
            {
              left: 'Asimtot datar',
              right: 'Garis $y=L$ yang didekati kurva saat $x$ menuju tak hingga',
            },
            {
              left: 'Lubang',
              right: 'Titik terhapus karena faktor pembilang dan penyebut saling meniadakan',
            },
          ],
        },
      ],
    },
    {
      id: 'representasi-asimtot',
      kind: 'representasi',
      title: 'Membandingkan Derajat untuk Membaca Asimtot Datar',
      body: `Simbol $\\deg p$ menyatakan derajat pembilang $p(x)$ dan $\\deg q$ menyatakan derajat penyebut $q(x)$. Perbandingan keduanya menghasilkan aturan cepat berikut.

Perhatikan tabel berikut, lalu bandingkan dengan gambar grafik di bawahnya.`,
      blocks: [
        {
          kind: 'table',
          caption: 'Asimtot datar berdasarkan derajat pembilang dan penyebut',
          headers: ['Perbandingan derajat', 'Asimtot datar', 'Contoh'],
          rows: [
            ['$\\deg p < \\deg q$', '$y=0$', '$\\dfrac{2x+1}{x^{2}-4}$'],
            ['$\\deg p = \\deg q$', '$y=\\dfrac{a_{n}}{b_{m}}$', '$\\dfrac{3x^{2}+1}{x^{2}-4}\\to y=3$'],
            ['$\\deg p > \\deg q$', 'tidak ada', '$\\dfrac{x^{3}+2x}{x^{2}-1}$'],
          ],
        },
        {
          kind: 'figure',
          alt: 'Grafik fungsi rasional f(x) sama dengan (x+2)/(x-1) dengan dua cabang kurva, asimtot tegak garis putus-putus x sama dengan 1, asimtot datar garis putus-putus y sama dengan 1, dan sebuah lingkaran kosong menandai lubang di titik (2, 4).',
          caption: 'Grafik $f(x)=\\dfrac{x^{2}-4}{(x-2)(x-1)}=\\dfrac{x+2}{x-1}$ memiliki asimtot tegak $x=1$, asimtot datar $y=1$, dan lubang di $(2,4)$.',
          svg: '<svg viewBox="0 0 320 240" aria-hidden="true" role="presentation"><defs><marker id="fra-arrow-r1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="currentColor"/></marker></defs><line x1="20" y1="140" x2="305" y2="140" stroke="currentColor" stroke-width="1.4" marker-end="url(#fra-arrow-r1)"/><line x1="140" y1="228" x2="140" y2="14" stroke="currentColor" stroke-width="1.4" marker-end="url(#fra-arrow-r1)"/><line x1="162" y1="20" x2="162" y2="224" stroke="currentColor" stroke-width="1.3" stroke-dasharray="6 4"/><line x1="20" y1="122" x2="300" y2="122" stroke="currentColor" stroke-width="1.3" stroke-dasharray="6 4"/><polyline points="52,133 74,136 96,140 118,149 140,176 151,230" fill="none" stroke="currentColor" stroke-width="2.4"/><polyline points="173,14 175,32 180,55 188,77 195,86 206,95 228,104 250,109 272,111" fill="none" stroke="currentColor" stroke-width="2.4"/><circle cx="184" cy="68" r="4" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="96" cy="140" r="2.6" fill="currentColor"/><text x="300" y="134" font-size="11" fill="currentColor">x</text><text x="146" y="24" font-size="11" fill="currentColor">y</text><text x="166" y="32" font-size="10" fill="currentColor">x = 1</text><text x="200" y="116" font-size="10" fill="currentColor">y = 1</text><text x="192" y="62" font-size="10" fill="currentColor">lubang (2, 4)</text></svg>',
        },
      ],
    },
    {
      id: 'representasi-akar',
      kind: 'representasi',
      title: 'Fungsi Akar dan Transformasinya',
      body: `Fungsi akar paling sederhana adalah $f(x)=\\sqrt{x}$. Karena akar kuadrat dari bilangan negatif tidak real, domainnya adalah $x\\geq0$ dan rangenya $y\\geq0$. Grafiknya berupa setengah parabola yang dibuka ke kanan dan makin landai saat $x$ membesar.

Bentuk umum fungsi akar adalah
$$g(x)=a\\sqrt{x-h}+k.$$
- $h$ menggeser grafik **ke kanan** sebesar $h$, sehingga domain bergeser menjadi $x\\geq h$;
- $k$ menggeser grafik **ke atas** sebesar $k$, sehingga range menjadi $y\\geq k$ (bila $a>0$);
- $a$ meregangkan atau memampatkan grafik sekaligus mencerminkannya bila $a<0$.

Contohnya, $g(x)=\\sqrt{x-1}+1$ memiliki domain $x\\geq1$ dan range $y\\geq1$, serta grafik yang diperoleh dari $y=\\sqrt{x}$ dengan menggesernya 1 satuan ke kanan lalu 1 satuan ke atas.`,
      blocks: [
        {
          kind: 'figure',
          alt: 'Grafik fungsi akar g(x) sama dengan akar dari (x-1) ditambah 1, berupa kurva yang mulai di titik (1, 1) dan naik makin landai, dengan garis putus-putus tegak x sama dengan 1 menandai batas domain.',
          caption: 'Grafik $g(x)=\\sqrt{x-1}+1$ berawal di $(1,1)$, dengan domain $x\\geq1$ dan range $y\\geq1$.',
          svg: '<svg viewBox="0 0 320 240" aria-hidden="true" role="presentation"><defs><marker id="fra-arrow-r2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="currentColor"/></marker></defs><line x1="30" y1="200" x2="310" y2="200" stroke="currentColor" stroke-width="1.4" marker-end="url(#fra-arrow-r2)"/><line x1="60" y1="224" x2="60" y2="24" stroke="currentColor" stroke-width="1.4" marker-end="url(#fra-arrow-r2)"/><line x1="94" y1="174" x2="94" y2="206" stroke="currentColor" stroke-width="1.3" stroke-dasharray="5 4"/><polyline points="94,174 128,148 162,137 196,129 230,122 264,116 298,110" fill="none" stroke="currentColor" stroke-width="2.4"/><circle cx="94" cy="174" r="3" fill="currentColor"/><text x="300" y="194" font-size="11" fill="currentColor">x</text><text x="66" y="34" font-size="11" fill="currentColor">y</text><text x="98" y="198" font-size="10" fill="currentColor">x = 1</text><text x="122" y="188" font-size="10" fill="currentColor">(1, 1)</text></svg>',
        },
        {
          kind: 'flip-cards',
          intro: 'Balik kartu untuk menguji ingatanmu tentang fungsi akar.',
          cards: [
            { front: 'Domain $\\sqrt{x-h}$', back: '$x\\geq h$' },
            { front: 'Range $\\sqrt{x-h}+k$ untuk $a>0$', back: '$y\\geq k$' },
            { front: 'Grafik $\\sqrt{x-1}+1$', back: 'Grafik $\\sqrt{x}$ digeser 1 satuan ke kanan dan 1 satuan ke atas' },
            { front: 'Fungsi tangga', back: 'Fungsi yang nilainya tetap pada setiap selang lalu melompat di batasnya' },
          ],
        },
      ],
    },
    {
      id: 'eksplorasi',
      kind: 'eksplorasi',
      title: 'Eksplorasi Keluarga Fungsi Rasional',
      body: `Sekarang amati bagaimana satu model rasional berubah ketika parameternya digeser. Pada simulasi berikut, telusuri $f(x)=\\dfrac{x^{2}-a^{2}}{(x-a)(x-b)}$ sambil mengubah $a$ dan $b$. Tentukan sendiri kapan sebuah titik menjadi lubang dan kapan menjadi asimtot tegak, lalu bandingkan dengan aturan derajat pada bagian sebelumnya.`,
      blocks: [
        {
          kind: 'exploration',
          explorationId: 'rasional-akar-sim',
        },
        {
          kind: 'callout',
          variant: 'tip',
          title: 'Amatilah',
          text: 'Saat $a=b$, hanya satu salinan faktor $(x-a)$ yang tersisa di penyebut sehingga titik itu berubah menjadi asimtot tegak, bukan lubang. Inilah pembeda yang paling halus antara keduanya.',
        },
      ],
    },
    {
      id: 'generalisasi',
      kind: 'generalisasi',
      title: 'Dari Satu Model ke Seluruh Keluarga Fungsi',
      body: `Model $f(x)=\\dfrac{x^{2}-a^{2}}{(x-a)(x-b)}$ menyatukan ketiga gagasan sekaligus: lubang di $x=a$ karena faktor $(x-a)$ meniadakan, asimtot tegak di $x=b$ karena faktor penyebut yang tersisa tidak meniadakan, dan asimtot datar $y=1$ karena derajat pembilang sama dengan derajat penyebut.

Gagasannya berlaku umum. Untuk setiap fungsi rasional, derajat pembilang dan penyebut menentukan perilaku ujung, sedangkan akar penyebut menentukan posisi titik-titik istimewa setelah faktor bersama dicoret. Menyederhanakan pecahan **tanpa** melupakan syarat $q(x)\\neq0$ adalah kunci agar tidak salah menyimpulkan.

Fungsi rasional dan fungsi akar hanyalah dua anggota keluarga fungsi yang lebih luas. Dalam capaian pembelajaran Matematika Tingkat Lanjut, kita juga mengenal **fungsi nilai mutlak** seperti $|x|$, **fungsi tangga** yang nilainya melompat pada setiap selang, dan **fungsi piecewise** yang rumusnya berbeda pada tiap bagian domainnya. Setiap anggota keluarga ini dipilih sesuai pola fenomena yang dimodelkan: rasional untuk besaran per satuan, akar untuk pertumbuhan yang melandai, tangga untuk tarif bertingkat, dan nilai mutlak untuk besaran tanpa tanda.`,
      blocks: [
        {
          kind: 'figure',
          alt: 'Tiga sketsa berdampingan: grafik nilai mutlak berbentuk V, grafik fungsi tangga yang melompat pada tiap selang, dan grafik fungsi piecewise yang berganti rumus pada bagian domainnya.',
          caption: 'Tiga anggota keluarga fungsi yang lebih luas: nilai mutlak $|x|$ berbentuk V, fungsi tangga yang melompat, dan fungsi piecewise yang berganti rumus.',
          svg: '<svg viewBox="0 0 330 140" aria-hidden="true" role="presentation"><line x1="14" y1="100" x2="96" y2="100" stroke="currentColor" stroke-width="1.2"/><line x1="55" y1="120" x2="55" y2="20" stroke="currentColor" stroke-width="1.2"/><polyline points="25,60 55,100 85,60" fill="none" stroke="currentColor" stroke-width="2.2"/><text x="24" y="132" font-size="11" fill="currentColor">|x|</text><line x1="118" y1="100" x2="204" y2="100" stroke="currentColor" stroke-width="1.2"/><line x1="160" y1="120" x2="160" y2="20" stroke="currentColor" stroke-width="1.2"/><polyline points="122,90 142,90 142,74 162,74 162,58 182,58 182,42 200,42" fill="none" stroke="currentColor" stroke-width="2.2"/><text x="116" y="132" font-size="11" fill="currentColor">tangga</text><line x1="222" y1="100" x2="318" y2="100" stroke="currentColor" stroke-width="1.2"/><line x1="266" y1="120" x2="266" y2="20" stroke="currentColor" stroke-width="1.2"/><polyline points="228,92 250,60 266,60" fill="none" stroke="currentColor" stroke-width="2.2"/><polyline points="266,70 280,58 296,54 312,50" fill="none" stroke="currentColor" stroke-width="2.2"/><text x="226" y="132" font-size="11" fill="currentColor">piecewise</text></svg>',
        },
      ],
    },
    {
      id: 'rumus',
      kind: 'rumus',
      title: 'Rumus dan Prosedur',
      body: `**Domain.** Untuk $f(x)=\\dfrac{p(x)}{q(x)}$, domainnya semua $x$ dengan $q(x)\\neq0$.

**Asimtot tegak.** Setelah pembilang dan penyebut difaktorkan dan faktor bersama dicoret, setiap akar penyebut yang tersisa adalah asimtot tegak.

**Asimtot datar.** Bandingkan derajat:
$$\\deg p<\\deg q \\Rightarrow y=0, \\qquad \\deg p=\\deg q \\Rightarrow y=\\dfrac{a_{n}}{b_{m}}, \\qquad \\deg p>\\deg q \\Rightarrow \\text{tidak ada},$$
dengan $a_{n}$ koefisien utama pembilang dan $b_{m}$ koefisien utama penyebut.

**Lubang.** Jika faktor $(x-c)$ muncul pada pembilang dan penyebut, maka $x=c$ menjadi lubang bila limit di $x=c$ berhingga. Ordinat lubang diperoleh dengan menyubstitusikan $x=c$ ke bentuk yang sudah disederhanakan.

**Fungsi akar.** Untuk $g(x)=a\\sqrt{x-h}+k$, syarat domain adalah $x-h\\geq0$, yaitu $x\\geq h$; range untuk $a>0$ adalah $y\\geq k$.`,
    },
    {
      id: 'contoh',
      kind: 'contoh',
      title: 'Contoh Terbimbing',
      blocks: [
        {
          kind: 'step-reveal',
          intro: 'Pelajari tiap contoh secara bertahap, lalu coba ulangi tanpa membuka langkahnya.',
          steps: [
            {
              title: 'Contoh 1: domain dan penyederhanaan',
              text: `Tentukan domain dan bentuk sederhana dari $f(x)=\\dfrac{x^{2}-9}{(x-3)(x+1)}$.

*Penyelesaian.* Faktorkan pembilang: $x^{2}-9=(x-3)(x+3)$, sehingga
$$f(x)=\\dfrac{(x-3)(x+3)}{(x-3)(x+1)}=\\dfrac{x+3}{x+1}, \\qquad x\\neq3.$$
Domainnya semua bilangan real kecuali $x=3$ dan $x=-1$.`,
            },
            {
              title: 'Contoh 2: lubang, asimtot tegak, dan asimtot datar',
              text: `Untuk fungsi pada Contoh 1, tentukan lubang, asimtot tegak, dan asimtot datar.

*Penyelesaian.* Karena faktor $(x-3)$ meniadakan tetapi $x=3$ tetap tak terdefinisi, grafik memiliki **lubang** di $x=3$ dengan ordinat $\\dfrac{3+3}{3+1}=\\dfrac{6}{4}=\\dfrac{3}{2}$. Faktor penyebut yang tersisa, $(x+1)$, memberi **asimtot tegak** $x=-1$. Derajat pembilang dan penyebut bentuk sederhana keduanya $1$, sehingga **asimtot datar** $y=\\dfrac{1}{1}=1$.`,
            },
            {
              title: 'Contoh 3: domain dan range fungsi akar',
              text: `Tentukan domain dan range dari $g(x)=\\sqrt{x-1}+1$, lalu hitung $g(5)$.

*Penyelesaian.* Isi akar harus tidak negatif: $x-1\\geq0$, jadi domainnya $x\\geq1$. Karena $\\sqrt{x-1}\\geq0$, nilai terkecil $g$ tercapai di $x=1$, yaitu $g(1)=1$, sehingga range-nya $y\\geq1$. Nilai $g(5)=\\sqrt{4}+1=2+1=3$.`,
            },
            {
              title: 'Contoh 4: asimtot datar tanpa perhitungan panjang',
              text: `Tentukan asimtot datar $h(x)=\\dfrac{2x+1}{x^{2}-4}$ dan $\\ell(x)=\\dfrac{3x^{2}+1}{x^{2}-4}$.

*Penyelesaian.* Untuk $h$, derajat pembilang $1$ lebih kecil daripada derajat penyebut $2$, sehingga asimtot datarnya $y=0$. Untuk $\\ell$, derajat pembilang sama dengan derajat penyebut, sehingga asimtot datarnya $y=\\dfrac{3}{1}=3$.`,
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
      body: `Bagaimana biaya per unit berubah ketika produksi diperbesar? Misalkan sebuah usaha menanggung biaya tetap Rp2.000.000 per bulan (sewa dan listrik) dan biaya variabel Rp25.000 per unit. Biaya total untuk $x$ unit adalah
$$C(x)=25.000x+2.000.000.$$
Biaya rata-rata per unit adalah
$$\\bar{C}(x)=\\dfrac{C(x)}{x}=25.000+\\dfrac{2.000.000}{x}.$$
Bentuk ini adalah fungsi rasional dengan asimtot datar $y=25.000$. Ketika produksi makin besar, bagian biaya tetap per unit makin kecil, sehingga biaya rata-rata mendekati Rp25.000 per unit. Asimtot datar di sini bermakna **batas bawah** yang tidak akan dilewati: usaha tidak dapat menekan biaya rata-rata di bawah biaya variabel per unit.

Pemahaman serupa dipakai pada kepadatan lalu lintas, konsentrasi larutan, dan kecepatan rata-rata perjalanan. Pada semua kasus, fungsi rasional menangkap gagasan "besaran per satuan" yang menuju sebuah batas.`,
    },
    {
      id: 'kesalahan-umum',
      kind: 'kesalahan-umum',
      title: 'Kesalahan Umum',
      body: `**1. Menyamakan faktor tanpa mencatat syarat.** Setelah mencoret $(x-a)$, tuliskan tetap $x\\neq a$. Tanpa itu, domain ikut berubah secara keliru.
**2. Menganggap pembilang nol sebagai asimtot tegak.** Pembilang nol menghasilkan titik potong sumbu-$x$, bukan asimtot. Asimtot tegak berasal dari penyebut.
**3. Mengira asimtot datar selalu $y=0$.** Nilai $y=0$ hanya berlaku ketika derajat pembilang lebih kecil daripada derajat penyebut.
**4. Lupa bahwa domain fungsi akar dibatasi.** Untuk $\\sqrt{x-h}$, nilai $x<h$ tidak termasuk domain.

Perhatikan penentuan asimtot berikut. Ada satu langkah yang keliru. Klik langkah itu.`,
      blocks: [
        {
          kind: 'spot-mistake',
          intro: 'Langkah menentukan asimtot fungsi $f(x)=\\dfrac{x^{2}-4}{(x-2)(x-1)}$.',
          steps: [
            'Faktorkan pembilang: $x^{2}-4=(x-2)(x+2)$.',
            'Tulis $f(x)=\\dfrac{(x-2)(x+2)}{(x-2)(x-1)}=\\dfrac{x+2}{x-1}$, dengan syarat $x\\neq2$.',
            'Karena penyebut bentuk sederhana bernilai nol di $x=1$, grafik memiliki asimtot tegak $x=1$.',
            'Karena pembilang bentuk sederhana bernilai nol di $x=-2$, grafik memiliki asimtot tegak $x=-2$.',
          ],
          wrongIndex: 3,
          explanation: 'Pembilang bernilai nol memberi titik potong sumbu-$x$ di $(-2,0)$, bukan asimtot tegak. Asimtot tegak hanya berasal dari penyebut yang tidak meniadakan, yaitu $x=1$.',
        },
      ],
    },
    {
      id: 'tantangan',
      kind: 'tantangan',
      title: 'Tantangan',
      body: `Soal nonrutin ini menuntut penalaran; menghitung saja tidak cukup.

Tentukan semua nilai $k$ sehingga grafik
$$f(x)=\\dfrac{x^{2}-4}{(x-1)(x-k)}$$
memiliki tepat satu lubang dan satu asimtot tegak. Jelaskan alasanmu.`,
      blocks: [
        {
          kind: 'callout',
          variant: 'tip',
          title: 'Petunjuk',
          text: 'Lubang hanya muncul bila ada faktor bersama antara pembilang dan penyebut. Faktorkan pembilang menjadi $(x-2)(x+2)$, lalu selidiki nilai $k$ yang membuat salah satu faktor itu muncul pada penyebut tanpa menghilangkan asimtot tegak.',
        },
        {
          kind: 'step-reveal',
          intro: 'Ikuti pembahasan berikut satu langkah demi satu.',
          steps: [
            {
              title: 'Memfaktorkan pembilang',
              text: `Tulis $f(x)=\\dfrac{(x-2)(x+2)}{(x-1)(x-k)}$. Faktor penyebut adalah $(x-1)$ dan $(x-k)$.`,
            },
            {
              title: 'Syarat adanya lubang',
              text: `Agar muncul lubang, salah satu faktor penyebut harus sama dengan $(x-2)$ atau $(x+2)$, sehingga dapat mencoret faktor di pembilang. Ini terjadi bila $k=2$ atau $k=-2$.`,
            },
            {
              title: 'Kasus $k=2$',
              text: `Untuk $k=2$, penyebutnya $(x-1)(x-2)$. Faktor $(x-2)$ mencoret pembilang, menyisakan $f(x)=\\dfrac{x+2}{x-1}$ dengan lubang di $x=2$ dan asimtot tegak $x=1$. Tepat satu lubang dan satu asimtot tegak.`,
            },
            {
              title: 'Kasus $k=-2$',
              text: `Untuk $k=-2$, penyebutnya $(x-1)(x+2)$. Faktor $(x+2)$ mencoret pembilang, menyisakan $f(x)=\\dfrac{x-2}{x-1}$ dengan lubang di $x=-2$ dan asimtot tegak $x=1$. Tepat satu lubang dan satu asimtot tegak.`,
            },
            {
              title: 'Menyimpulkan',
              text: `Nilai $k=2$ dan $k=-2$ memenuhi. Sebaliknya, $k=1$ tidak memenuhi: penyebutnya menjadi $(x-1)^{2}$ yang tidak mencoret faktor pembilang, sehingga hanya memberi satu asimtot tegak tanpa lubang. Jadi himpunan jawabannya $k\\in\\{-2,\\,2\\}$.`,
            },
          ],
        },
      ],
    },
    {
      id: 'sejarah',
      kind: 'sejarah',
      title: 'Jejak Sejarah',
      body: `Kata "asimtot" berasal dari bahasa Yunani *asymptotos* yang berarti "tidak pernah bersentuhan". Istilah ini dipakai oleh Apollonius dari Perga sekitar abad ke-3 SM ketika mempelajari cabang-cabang hiperbola yang makin dekat ke suatu garis namun tidak pernah memotongnya. Baru jauh kemudian, setelah kalkulus dikembangkan oleh Isaac Newton dan Gottfried Wilhelm Leibniz pada abad ke-17, gagasan "mendekati tanpa mencapai" diformalkan melalui limit dan perilaku ujung.

Fungsi rasional dan fungsi akar menjadi alat penting dalam pemodelan besaran per satuan dan pertumbuhan yang melandai. Penggunaannya meluas seiring berkembangnya analisis matematis pada abad ke-18 dan ke-19, termasuk ketika Augustin-Louis Cauchy dan Karl Weierstrass merapikan dasar-dasar limit yang kita pakai untuk menjelaskan lubang, asimtot, dan diskontinuitas.`,
    },
    {
      id: 'refleksi',
      kind: 'refleksi',
      title: 'Refleksi',
      body: 'Renungkan bagaimana satu model rasional dapat memuat lubang, asimtot tegak, dan asimtot datar sekaligus, serta bagaimana fungsi akar membatasi domain dan range-nya.',
      blocks: [
        {
          kind: 'reflection',
          prompts: [
            'Apa perbedaan penting antara lubang dan asimtot tegak, dan bagaimana cara membedakannya dari bentuk faktor?',
            'Mengapa derajat pembilang dan penyebut cukup untuk menentukan asimtot datar?',
            'Pada pemodelan biaya rata-rata, apa makna asimtot datar dalam bahasa sehari-hari?',
          ],
          confidenceLabel: 'Seberapa yakin kamu membedakan lubang dari asimtot tegak?',
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
          headers: ['Konsep', 'Bentuk / Aturan'],
          rows: [
            ['Fungsi rasional', '$f(x)=\\dfrac{p(x)}{q(x)}$ dengan $q(x)\\neq0$'],
            ['Domain rasional', 'semua $x$ yang membuat penyebut tidak nol'],
            ['Asimtot tegak', 'akar penyebut yang tidak mencoret pembilang'],
            ['Asimtot datar: $\\deg p<\\deg q$', '$y=0$'],
            ['Asimtot datar: $\\deg p=\\deg q$', '$y=\\dfrac{a_{n}}{b_{m}}$'],
            ['Asimtot datar: $\\deg p>\\deg q$', 'tidak ada'],
            ['Lubang', 'faktor bersama $(x-c)$ yang saling meniadakan'],
            ['Fungsi akar', '$g(x)=a\\sqrt{x-h}+k$, domain $x\\geq h$'],
            ['Keluarga fungsi lain', 'nilai mutlak, tangga, dan piecewise'],
          ],
        },
      ],
    },
    {
      id: 'evaluasi',
      kind: 'evaluasi',
      title: 'Evaluasi',
      body: `Mengapa sebuah faktor yang saling meniadakan menghasilkan lubang alih-alih asimtot tegak, dan bagaimana derajat pembilang serta penyebut memandu pembacaan asimtot datar? Susun penjelasan singkat beserta satu contohmu sendiri, lalu lanjutkan ke [Latihan & Asesmen](/latihan) topik **Fungsi Rasional dan Fungsi Akar**.`,
    },
  ],
};
