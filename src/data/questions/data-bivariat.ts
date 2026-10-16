import type { Question } from '@/types/content';

export const dataBivariatQuestions: Question[] = [
  {
    id: 'db-01',
    topicId: 'data-bivariat',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'konsep',
    prompt: 'Pada data bivariat "jumlah pupuk dan hasil panen", yang lazim menjadi variabel bebas adalah …',
    options: [
      { key: 'A', text: 'hasil panen, sebab hasil panen berubah ketika pupuk diubah' },
      { key: 'B', text: 'jumlah pupuk' },
      { key: 'C', text: 'keduanya, sebab keduanya saling berubah bersama' },
      { key: 'D', text: 'tidak ada, sebab keduanya tidak dapat dipisahkan' },
    ],
    answer: 'B',
    explanation:
      'Variabel bebas adalah variabel yang diatur atau diduga memengaruhi, yaitu jumlah pupuk. Hasil panen merupakan variabel terikat (respons). Opsi A menukar peran bebas dan terikat; opsi C salah menganggap keduanya bebas karena berubah bersama; opsi D menyamakan korelasi dengan ketiadaan variabel yang dapat diatur.',
    hints: [
      'Variabel bebas biasanya yang diatur peneliti.',
      'Tanyakan variabel mana yang diduga memengaruhi variabel lainnya.',
      'Tentukan mana yang dipilih/diatur dan mana yang mengikuti perubahan itu.',
    ],
    competencies: ['variabel bebas dan terikat'],
  },
  {
    id: 'db-02',
    topicId: 'data-bivariat',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'konsep',
    prompt: 'Deskripsikan arah hubungan antara suhu udara dan penjualan jaket tebal.',
    answer: 'negatif',
    acceptedAnswers: ['negatif', 'negative', 'berlawanan arah', 'berbanding terbalik'],
    explanation:
      'Makin tinggi suhu udara, makin sedikit jaket tebal yang terjual, sehingga hubungannya negatif (berlawanan arah).',
    hints: [
      'Apakah penjualan naik atau turun saat suhu naik?',
      'Jika satu variabel naik sementara yang lain turun, arahnya berlawanan.',
      'Turunnya penjualan saat suhu naik menandakan arah negatif.',
    ],
    competencies: ['arah hubungan'],
  },
  {
    id: 'db-03',
    topicId: 'data-bivariat',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'cepat',
    prompt:
      'Jika titik-titik pada diagram pencar menanjak dari kiri bawah ke kanan atas, bagaimana arah hubungan kedua variabel?',
    answer: 'positif',
    acceptedAnswers: ['positif', 'positive', 'searah', 'berbanding lurus'],
    explanation:
      'Pola menanjak menandakan ketika $x$ bertambah, $y$ cenderung bertambah, yaitu hubungan positif (searah).',
    hints: [
      'Bayangkan berjalan dari kiri ke kanan pada diagram.',
      'Jika titik naik dari kiri ke kanan, kedua variabel bertambah bersama.',
      'Pola menanjak berarti kedua variabel bergerak ke arah yang sama.',
    ],
    competencies: ['arah hubungan'],
  },
  {
    id: 'db-04',
    topicId: 'data-bivariat',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'cepat',
    prompt: 'Sebuah diagram pencar membentuk lengkung yang menaik lalu mendatar. Pola hubungan tersebut termasuk …',
    options: [
      { key: 'A', text: 'positif linear, sebab arahnya menanjak' },
      { key: 'B', text: 'negatif linear, sebab bentuknya melengkung' },
      { key: 'C', text: 'nonlinear' },
      { key: 'D', text: 'tidak ada hubungan, sebab titik-titik tidak segaris lurus' },
    ],
    answer: 'C',
    explanation:
      'Pola yang tidak berbentuk garis lurus disebut nonlinear (opsi C). Di sini $y$ naik lalu melandai mengikuti lengkung. Opsi A hanya melihat arah naik tanpa memperhatikan lengkungan. Opsi B keliru menafsirkan lengkungan sebagai hubungan negatif. Opsi D salah menyamakan pola lengkung dengan ketiadaan hubungan.',
    hints: [
      'Linear berarti titik-titik mengikuti garis lurus.',
      'Perhatikan apakah pola terus menanjak atau melengkung lalu mendatar.',
      'Pola yang bukan garis lurus disebut nonlinear, apa pun arahnya.',
    ],
    competencies: ['pola hubungan'],
  },
  {
    id: 'db-05',
    topicId: 'data-bivariat',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penalaran',
    prompt:
      'Sebuah penelitian menemukan korelasi positif kuat antara jumlah kembang api yang dinyalakan dan penjualan es krim. Variabel perantara yang paling masuk akal menjelaskan hal ini adalah …',
    answer: 'cuaca panas',
    acceptedAnswers: ['cuaca panas', 'cuaca', 'suhu panas', 'musim panas', 'temperatur', 'suhu udara'],
    explanation:
      'Saat cuaca panas, orang lebih banyak menyalakan kembang api sekaligus membeli es krim. Jadi korelasi tersebut muncul karena faktor ketiga, bukan sebab-akibat langsung.',
    hints: [
      'Pikirkan kondisi yang membuat keduanya sama-sama meningkat.',
      'Cari faktor ketiga yang memengaruhi baik jumlah kembang api maupun penjualan es krim.',
    ],
    competencies: ['korelasi vs sebab-akibat'],
  },
  {
    id: 'db-06',
    topicId: 'data-bivariat',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penalaran',
    prompt: 'Dua variabel memiliki koefisien korelasi $r=-0{,}85$. Tafsiran yang tepat adalah …',
    options: [
      { key: 'A', text: 'hubungan linear negatif yang lemah, sebab $|r|$ belum sama dengan $1$' },
      { key: 'B', text: 'hubungan linear negatif yang kuat' },
      { key: 'C', text: 'tidak ada hubungan, sebab tanda $r$ negatif' },
      { key: 'D', text: 'hubungan nonlinear sempurna, sebab $|r|=0{,}85$ dianggap sempurna' },
    ],
    answer: 'B',
    explanation:
      'Tanda negatif menunjukkan arah berlawanan, dan $|r|=0{,}85$ mendekati $1$ sehingga hubungan linearnya kuat. Opsi A menganggap kekuatan menuntut $|r|=1$; opsi C keliru menafsirkan tanda negatif sebagai tidak ada hubungan; opsi D salah menganggap $r$ mengukur pola nonlinear.',
    hints: [
      'Tanda $r$ menunjukkan arah; besar $|r|$ menunjukkan kekuatan.',
      'Nilai $|r|=0{,}85$ sangat dekat dengan $1$, sehingga hubungannya kuat.',
    ],
    competencies: ['koefisien korelasi'],
  },
  {
    id: 'db-07',
    topicId: 'data-bivariat',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'konsep',
    prompt:
      'Jika titik-titik diagram pencar menyebar tanpa arah yang jelas, nilai koefisien korelasi linear $r$ mendekati …',
    answer: '0',
    acceptedAnswers: ['0', 'nol', '0,0'],
    explanation:
      'Sebaran tanpa arah menunjukkan hubungan linear yang sangat lemah atau tidak ada, sehingga $r$ mendekati $0$.',
    hints: [
      'Nilai $r$ berkisar dari $-1$ sampai $1$.',
      'Sebaran tanpa arah berarti $r$ mendekati nilai tengah rentangnya.',
    ],
    competencies: ['koefisien korelasi'],
  },
  {
    id: 'db-08',
    topicId: 'data-bivariat',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'kontekstual',
    prompt:
      'Perhatikan data berikut: $x: 1,2,3,4,5$ dan $y: 10,8,7,4,3$. Tentukan arah hubungan dan perkirakan kekuatannya.',
    answer:
      'Arahnya negatif: setiap kenaikan $x$ diikuti penurunan $y$ yang cukup teratur. Titik-titiknya rapat mendekati garis menurun ($r\\approx-0{,}99$), sehingga hubungannya negatif dan sangat kuat.',
    explanation:
      'Arah ditentukan dari kecenderungan $y$ saat $x$ naik; kekuatan ditentukan dari kerapatan titik terhadap pola.',
    hints: ['Amati apakah $y$ naik atau turun saat $x$ bertambah.', 'Perhatikan kerapatan titik terhadap pola.'],
    competencies: ['menafsirkan diagram pencar'],
    rubric: [
      'Menyimpulkan arah negatif karena $y$ turun saat $x$ naik',
      'Menaksir kekuatan dari kerapatan titik terhadap garis menurun',
      'Menyebut hubungan negatif sangat kuat (misalnya $r\\approx-0{,}99$)',
    ],
  },
  {
    id: 'db-09',
    topicId: 'data-bivariat',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Pada data lama belajar dan nilai (rentang $x=1$ sampai $8$; nilai maksimum $11$), seseorang menyimpulkan bahwa belajar $30$ jam menjamin nilai $35$. Jelaskan dua kesalahan penalaran dalam kesimpulan itu.',
    answer:
      'Pertama, ini ekstrapolasi jauh di luar rentang data ($x$ hanya sampai $8$), sehingga pola linear belum tentu berlaku. Kedua, nilai $35$ melampaui skala nilai yang wajar atau mungkin (sekitar $0$–$10$), jadi tidak bermakna. Selain itu, korelasi tidak membuktikan sebab-akibat.',
    explanation:
      'Kunci: bahaya ekstrapolasi dan nilai yang keluar dari rentang yang masuk akal.',
    hints: ['Perhatikan rentang data yang diamati.', 'Periksa apakah nilai prediksinya masih masuk akal.'],
    competencies: ['ekstrapolasi', 'penalaran kritis'],
    rubric: [
      'Menyebut kesalahan ekstrapolasi jauh di luar rentang data $x\\le8$',
      'Menyebut nilai $35$ melampaui skala nilai yang masuk akal',
      'Menegaskan korelasi tidak membuktikan sebab-akibat',
    ],
  },
  {
    id: 'db-10',
    topicId: 'data-bivariat',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'evaluasi',
    prompt:
      'Dua himpunan data sama-sama memiliki $r\\approx0{,}6$. Himpunan pertama mengikuti garis lurus dengan beberapa pencilan jauh, sedangkan himpunan kedua melengkung. Mengapa satu nilai $r$ saja tidak cukup untuk menjelaskan keduanya?',
    answer:
      'Koefisien $r$ hanya mengukur seberapa dekat titik-titik dengan sebuah garis lurus, bukan bentuk polanya. Pencilan jauh dapat menekan nilai $r$ meskipun bagian utama data sangat linear, sedangkan data yang melengkung dapat menghasilkan $r$ sedang meski polanya teratur. Karena itu, bentuk diagram pencar tetap harus diperiksa, bukan hanya angka $r$.',
    explanation:
      'Kunci: $r$ mengukur kedekatan terhadap garis lurus saja; bentuk dan pencilan perlu dilihat pada diagram pencar.',
    hints: ['Apa yang sebenarnya diukur oleh $r$?', 'Pertimbangkan pengaruh pencilan dan lengkungan.'],
    competencies: ['keterbatasan korelasi', 'penalaran'],
    rubric: [
      'Menjelaskan $r$ hanya mengukur kedekatan titik terhadap garis lurus',
      'Menjelaskan pencilan jauh dapat menekan nilai $r$',
      'Menyimpulkan bentuk diagram pencar tetap harus diperiksa, bukan hanya angka $r$',
    ],
  },
  {
    id: 'db-11',
    topicId: 'data-bivariat',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penerapan',
    prompt:
      'Hitung koefisien korelasi linear $r$ untuk data $x: 1,2,3,4,5$ dan $y: 3,5,4,7,6$, lalu nyatakan arah dan kekuatan hubungannya.',
    answer:
      'Dengan $\\bar{x}=3$ dan $\\bar{y}=5$, diperoleh $\\sum(x_i-\\bar{x})^2 = 10$, $\\sum(y_i-\\bar{y})^2 = 10$, dan $\\sum(x_i-\\bar{x})(y_i-\\bar{y}) = 8$. Maka $r = \\dfrac{8}{\\sqrt{10 \\cdot 10}} = \\dfrac{8}{10} = 0{,}8$. Karena $r$ bernilai positif dan cukup dekat dengan $1$, hubungan kedua variabel adalah positif dan kuat.',
    explanation:
      'Kunci jawaban: menghitung penyimpangan dari rata-rata, lalu memakai rumus $r = \\dfrac{\\sum(x_i-\\bar{x})(y_i-\\bar{y})}{\\sqrt{\\sum(x_i-\\bar{x})^2\\sum(y_i-\\bar{y})^2}}$ dan menafsirkan tandanya serta besarnya.',
    hints: [
      'Hitung $\\bar{x}$ dan $\\bar{y}$ lebih dahulu.',
      'Gunakan $r = \\dfrac{\\sum(x_i-\\bar{x})(y_i-\\bar{y})}{\\sqrt{\\sum(x_i-\\bar{x})^2\\sum(y_i-\\bar{y})^2}}$.',
    ],
    competencies: ['koefisien korelasi', 'interpretasi'],
    rubric: [
      'Menghitung $\\bar{x}=3$ dan $\\bar{y}=5$',
      'Menghitung $\\sum(x_i-\\bar{x})^{2}=10$, $\\sum(y_i-\\bar{y})^{2}=10$, dan $\\sum(x_i-\\bar{x})(y_i-\\bar{y})=8$',
      'Memperoleh $r=0{,}8$ dan menyimpulkan hubungan positif kuat',
    ],
  },
  {
    id: 'db-12',
    topicId: 'data-bivariat',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Sebuah toko mencatat pengeluaran iklan $x$ (juta rupiah) dan penjualan $y$ (juta rupiah) sebagai berikut: $x: 1,2,3,4,5$ dan $y: 3,5,7,9,11$. (a) Tentukan arah hubungan kedua variabel. (b) Perkirakan penjualan bila iklan $6$ juta dengan menganggap pola linear, dan sebutkan asumsinya. (c) Sebutkan satu variabel lain yang mungkin ikut memengaruhi penjualan.',
    answer:
      '(a) Arahnya positif: setiap kenaikan $x$ diikuti kenaikan $y$ secara teratur, bahkan membentuk garis lurus. (b) Polanya $y=2x+1$, sehingga untuk $x=6$ diperkirakan $y=2(6)+1=13$ juta rupiah. Asumsinya pola linear tetap berlaku pada nilai $x$ yang masih dekat dengan rentang data. (c) Faktor lain misalnya musim liburan, harga pesaing, atau daya beli pelanggan.',
    explanation:
      'Kunci: mengenali hubungan linear positif, menyusun prediksi, serta menyadari asumsi dan variabel luar.',
    hints: ['Perhatikan selisih $y$ yang tetap sebesar $2$.', 'Prediksi di luar data tetap bergantung pada asumsi.'],
    competencies: ['hubungan linear', 'pemodelan', 'prediksi'],
    rubric: [
      'Menyimpulkan arah positif dan pola $y=2x+1$',
      'Memprediksi $y=13$ juta untuk $x=6$ beserta asumsi pola linear',
      'Menyebut setidaknya satu variabel luar yang memengaruhi penjualan',
    ],
  },
  {
    id: 'db-13',
    topicId: 'data-bivariat',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Data pengeluaran iklan $x$ (juta rupiah) dan penjualan $y$ (juta rupiah) adalah $(1,55), (2,60), (3,68), (4,72), (5,80)$. Tentukan persamaan garis regresi linear $y=ax+b$ dengan metode kuadrat terkecil, lalu perkirakan penjualan bila iklan $6$ juta. Sebutkan satu keterbatasan perkiraan tersebut.',
    answer:
      'Dengan $n=5$, $\\bar{x}=3$, $\\bar{y}=67$, $\\sum x_iy_i=1067$, dan $\\sum x_i^2=55$: $a=\\dfrac{\\sum x_iy_i-n\\bar{x}\\bar{y}}{\\sum x_i^2-n\\bar{x}^2}=\\dfrac{1067-1005}{55-45}=\\dfrac{62}{10}=6{,}2$ dan $b=\\bar{y}-a\\bar{x}=67-6{,}2(3)=48{,}4$. Jadi $y=6{,}2x+48{,}4$. Untuk $x=6$ diperoleh $y=6{,}2(6)+48{,}4=85{,}6$ juta rupiah. Keterbatasannya, $x=6$ berada di luar rentang data ($x$ hanya $1$ sampai $5$), sehingga perkiraan itu merupakan ekstrapolasi yang bergantung pada asumsi pola linear tetap berlaku.',
    explanation:
      'Kunci: menghitung koefisien regresi dengan rumus kuadrat terkecil, memakai model untuk memprediksi, dan menyadari risiko ekstrapolasi.',
    hints: [
      'Hitung $\\bar{x}$ dan $\\bar{y}$ serta $\\sum x_iy_i$ dan $\\sum x_i^2$.',
      'Gunakan $a=\\dfrac{\\sum x_iy_i-n\\bar{x}\\bar{y}}{\\sum x_i^2-n\\bar{x}^2}$ lalu $b=\\bar{y}-a\\bar{x}$.',
    ],
    competencies: ['regresi linear', 'metode kuadrat terkecil', 'pemodelan'],
    rubric: [
      'Menghitung $\\bar{x}=3$, $\\bar{y}=67$, $\\sum x_iy_i=1067$, dan $\\sum x_i^2=55$',
      'Memperoleh $a=6{,}2$ dan $b=48{,}4$ sehingga $y=6{,}2x+48{,}4$',
      'Memprediksi $y=85{,}6$ juta rupiah untuk $x=6$',
      'Menyebut keterbatasan ekstrapolasi karena $x=6$ di luar rentang $x=1$ sampai $5$',
    ],
  },
  {
    id: 'db-14',
    topicId: 'data-bivariat',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt:
      'Sebuah model regresi menghasilkan prediksi $\\hat{y}=6{,}2x+48{,}4$. Pada pengamatan $x=6$, nilai yang teramati adalah $y=88$. Tentukan residual (selisih nilai teramati dengan nilai prediksi).',
    answer: '2,4',
    acceptedAnswers: ['2,4', '2.4', '+2,4', '+2.4', '2,40', '2.40'],
    explanation:
      'Nilai prediksi $\\hat{y}=6{,}2(6)+48{,}4=85{,}6$. Residual $=y-\\hat{y}=88-85{,}6=2{,}4$. Residual positif berarti nilai teramati berada di atas prediksi model.',
    hints: ['Hitung nilai prediksi lebih dahulu dengan $x=6$.', 'Residual $=y-\\hat{y}$.'],
    competencies: ['regresi linear', 'residual'],
  },
  {
    id: 'db-15',
    topicId: 'data-bivariat',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penalaran',
    prompt:
      'Diagram pencar berikut menunjukkan pasangan data $(x, y)$. Pernyataan yang paling tepat menggambarkan hubungan kedua variabel adalah …',
    figure: {
      svg: '<svg viewBox="0 0 320 220" role="img" aria-hidden="true"><line x1="40" y1="190" x2="300" y2="190" stroke="currentColor" stroke-width="1.4"/><line x1="40" y1="190" x2="40" y2="20" stroke="currentColor" stroke-width="1.4"/><text x="76" y="202" fill="currentColor" font-size="8" text-anchor="middle">1</text><text x="111" y="202" fill="currentColor" font-size="8" text-anchor="middle">2</text><text x="147" y="202" fill="currentColor" font-size="8" text-anchor="middle">3</text><text x="183" y="202" fill="currentColor" font-size="8" text-anchor="middle">4</text><text x="219" y="202" fill="currentColor" font-size="8" text-anchor="middle">5</text><text x="254" y="202" fill="currentColor" font-size="8" text-anchor="middle">6</text><text x="30" y="161" fill="currentColor" font-size="8" text-anchor="end">2</text><text x="30" y="129" fill="currentColor" font-size="8" text-anchor="end">4</text><text x="30" y="97" fill="currentColor" font-size="8" text-anchor="end">6</text><text x="30" y="65" fill="currentColor" font-size="8" text-anchor="end">8</text><text x="30" y="33" fill="currentColor" font-size="8" text-anchor="end">10</text><circle cx="76" cy="46" r="4" fill="currentColor"/><circle cx="111" cy="62" r="4" fill="currentColor"/><circle cx="147" cy="94" r="4" fill="currentColor"/><circle cx="183" cy="110" r="4" fill="currentColor"/><circle cx="219" cy="126" r="4" fill="currentColor"/><circle cx="254" cy="158" r="4" fill="currentColor"/></svg>',
      alt: 'Diagram pencar dengan enam titik menurun dari kiri atas di sekitar (1, 9) hingga kanan bawah di sekitar (6, 2).',
      caption: 'Diagram pencar pasangan data $(x, y)$.',
    },
    options: [
      { key: 'A', text: 'Hubungan positif kuat.' },
      { key: 'B', text: 'Hubungan negatif kuat.' },
      { key: 'C', text: 'Tidak ada hubungan karena titik tidak tepat pada satu garis.' },
      { key: 'D', text: 'Hubungan negatif lemah karena ada titik yang menyimpang.' },
    ],
    answer: 'B',
    explanation:
      'Titik-titik menurun teratur dari kiri atas ke kanan bawah dan rapat mendekati garis, dengan $r\\approx-0{,}99$, sehingga hubungannya negatif kuat (opsi B). Opsi A salah karena polanya menurun, bukan menanjak. Opsi C salah karena kedekatan titik pada pola menurun justru menunjukkan hubungan kuat. Opsi D salah karena tidak ada titik yang menyimpang jauh; seluruh titik konsisten mendekati garis.',
    hints: [
      'Perhatikan arah kecenderungan titik dari kiri ke kanan.',
      'Makin rapat titik terhadap suatu garis, makin kuat hubungannya.',
    ],
    competencies: ['menafsirkan diagram pencar', 'koefisien korelasi'],
  },
  {
    id: 'db-16',
    topicId: 'data-bivariat',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penalaran',
    prompt:
      'Tabel berikut menyajikan pasangan data $(x, y)$. Sebagian besar titik mengikuti satu pola, tetapi ada satu titik yang menyimpang jauh. Titik yang paling layak dicurigai sebagai pencilan adalah …',
    table: {
      caption: 'Pasangan data x dan y.',
      headers: ['x', 'y'],
      math: true,
      rows: [
        ['1', '5'],
        ['2', '7'],
        ['3', '6'],
        ['4', '8'],
        ['5', '7'],
        ['6', '20'],
      ],
    },
    options: [
      { key: 'A', text: '$(6, 20)$' },
      { key: 'B', text: '$(1, 5)$' },
      { key: 'C', text: '$(3, 6)$' },
      { key: 'D', text: '$(4, 8)$' },
    ],
    answer: 'A',
    explanation:
      'Lima titik pertama berkumpul di sekitar $y=5$ sampai $8$ tanpa menyimpang jauh, sedangkan titik $(6, 20)$ jauh di atas pola itu sehingga paling layak dicurigai sebagai pencilan (opsi A). Opsi B, C, dan D semuanya masih konsisten dengan kumpulan titik lainnya, jadi bukan pencilan.',
    hints: [
      'Bandingkan nilai $y$ setiap titik dengan nilai $y$ titik lain pada tabel.',
      'Pencilan bivariat adalah titik yang jauh dari pola titik lainnya, bukan sekadar nilai terbesar.',
    ],
    competencies: ['pencilan bivariat', 'membaca tabel data'],
  },
];
