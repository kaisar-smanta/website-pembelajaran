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
      { key: 'A', text: 'hasil panen' },
      { key: 'B', text: 'jumlah pupuk' },
      { key: 'C', text: 'keduanya' },
      { key: 'D', text: 'tidak ada' },
    ],
    answer: 'B',
    explanation:
      'Variabel bebas adalah variabel yang diatur atau diduga memengaruhi, yaitu jumlah pupuk. Hasil panen merupakan variabel terikat (respons).',
    hints: ['Variabel bebas biasanya yang diatur peneliti.'],
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
    hints: ['Apakah penjualan naik atau turun saat suhu naik?'],
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
    hints: ['Bayangkan berjalan dari kiri ke kanan pada diagram.'],
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
      { key: 'A', text: 'positif linear' },
      { key: 'B', text: 'negatif linear' },
      { key: 'C', text: 'nonlinear' },
      { key: 'D', text: 'tidak ada hubungan' },
    ],
    answer: 'C',
    explanation:
      'Pola yang tidak berbentuk garis lurus disebut nonlinear. Di sini $y$ naik lalu melandai mengikuti lengkung.',
    hints: ['Linear berarti titik-titik mengikuti garis lurus.'],
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
    hints: ['Pikirkan kondisi yang membuat keduanya sama-sama meningkat.'],
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
      { key: 'A', text: 'hubungan linear positif yang lemah' },
      { key: 'B', text: 'hubungan linear negatif yang kuat' },
      { key: 'C', text: 'tidak ada hubungan' },
      { key: 'D', text: 'hubungan nonlinear sempurna' },
    ],
    answer: 'B',
    explanation:
      'Tanda negatif menunjukkan arah berlawanan, dan $|r|=0{,}85$ mendekati $1$ sehingga hubungan linearnya kuat.',
    hints: ['Tanda $r$ menunjukkan arah; besar $|r|$ menunjukkan kekuatan.'],
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
    hints: ['Nilai $r$ berkisar dari $-1$ sampai $1$.'],
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
  },
];
