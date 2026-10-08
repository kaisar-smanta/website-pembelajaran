import type { Question } from '@/types/content';

export const regresiQuestions: Question[] = [
  {
    id: 'rg-01',
    topicId: 'regresi',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'konsep',
    prompt: 'Pada persamaan garis regresi $\\hat{y}=bx+a$, besaran $b$ menyatakan …',
    options: [
      { key: 'A', text: 'intersep' },
      { key: 'B', text: 'determinasi' },
      { key: 'C', text: 'residu' },
      { key: 'D', text: 'gradien' },
    ],
    answer: 'D',
    explanation:
      'Pada $\\hat{y}=bx+a$, $b$ adalah gradien, yaitu perubahan rata-rata $y$ untuk setiap kenaikan satu satuan $x$, sedangkan $a$ adalah intersep.',
    hints: ['Gradien adalah koefisien yang menempel pada $x$.'],
    competencies: ['garis regresi'],
  },
  {
    id: 'rg-02',
    topicId: 'regresi',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'cepat',
    prompt: 'Diberikan data $x=1,2,3,4,5$ dan $y=2,3,5,4,6$. Tentukan $\\bar{x}$ dan $\\bar{y}$.',
    answer: '3 dan 4',
    acceptedAnswers: ['3 dan 4', 'x̄=3, ȳ=4', '3,4', 'x=3 y=4'],
    explanation:
      'Jumlah $x$ adalah $15$ dan jumlah $y$ adalah $20$ dengan $n=5$, sehingga $\\bar{x}=\\dfrac{15}{5}=3$ dan $\\bar{y}=\\dfrac{20}{5}=4$.',
    hints: ['Mean $=\\dfrac{\\text{jumlah data}}{\\text{banyak data}}$.'],
    competencies: ['mean'],
  },
  {
    id: 'rg-03',
    topicId: 'regresi',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'penerapan',
    prompt:
      'Dengan data $x=1,2,3,4,5$ dan $y=2,3,5,4,6$, tentukan gradien $b$ garis regresi. Diketahui $\\sum x_i=15$, $\\sum y_i=20$, $\\sum x_iy_i=69$, $\\sum x_i^2=55$, dan $n=5$.',
    answer: '0,9',
    acceptedAnswers: ['0.9', '9/10', '0,9', '0,90', '0.90'],
    explanation:
      '$b=\\dfrac{n\\sum x_iy_i-\\left(\\sum x_i\\right)\\left(\\sum y_i\\right)}{n\\sum x_i^2-\\left(\\sum x_i\\right)^2}=\\dfrac{5(69)-(15)(20)}{5(55)-15^{2}}=\\dfrac{345-300}{275-225}=\\dfrac{45}{50}=0{,}9$.',
    hints: ['Substitusikan nilai sigma ke rumus gradien kuadrat terkecil.'],
    competencies: ['gradien regresi'],
  },
  {
    id: 'rg-04',
    topicId: 'regresi',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'penerapan',
    prompt: 'Dengan $b=0{,}9$, $\\bar{x}=3$, dan $\\bar{y}=4$, tentukan intersep $a$ garis regresi.',
    answer: '1,3',
    acceptedAnswers: ['1.3', '13/10', '1,3', '1,30', '1.30'],
    explanation: '$a=\\bar{y}-b\\bar{x}=4-0{,}9(3)=4-2{,}7=1{,}3$.',
    hints: ['Gunakan $a=\\bar{y}-b\\bar{x}$.'],
    competencies: ['intersep regresi'],
  },
  {
    id: 'rg-05',
    topicId: 'regresi',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penalaran',
    prompt:
      'Sebuah model regresi memiliki koefisien determinasi $r^{2}=0{,}81$. Persentase variasi $y$ yang **tidak** dijelaskan oleh model adalah …',
    options: [
      { key: 'A', text: '$90\\%$' },
      { key: 'B', text: '$9\\%$' },
      { key: 'C', text: '$81\\%$' },
      { key: 'D', text: '$19\\%$' },
    ],
    answer: 'D',
    explanation:
      '$r^2=0{,}81=81\\%$ variasi $y$ dijelaskan model, sehingga sisanya $100\\%-81\\%=19\\%$ tidak dijelaskan.',
    hints: ['$r^2$ menyatakan proporsi variasi yang dijelaskan.'],
    competencies: ['koefisien determinasi'],
  },
  {
    id: 'rg-06',
    topicId: 'regresi',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'kontekstual',
    prompt:
      'Pada data waktu belajar (jam) dan nilai ujian, garis regresinya $\\hat{y}=1{,}190x+0{,}893$. Tafsiran gradien $1{,}190$ yang tepat adalah …',
    options: [
      { key: 'A', text: 'Nilai maksimum yang mungkin adalah $1{,}19$.' },
      { key: 'B', text: 'Setiap tambahan $1$ poin nilai dikaitkan dengan tambahan $1{,}19$ jam belajar.' },
      { key: 'C', text: 'Siswa tanpa waktu belajar diprediksi bernilai $1{,}19$.' },
      { key: 'D', text: 'Setiap tambahan $1$ jam belajar dikaitkan dengan kenaikan nilai sekitar $1{,}19$ poin.' },
    ],
    answer: 'D',
    explanation:
      'Gradien menyatakan perubahan rata-rata $y$ per satuan $x$: setiap tambahan $1$ jam belajar, nilai ujian naik sekitar $1{,}19$ poin.',
    hints: ['Satuan gradien adalah satuan $y$ per satuan $x$.'],
    competencies: ['menafsirkan gradien'],
  },
  {
    id: 'rg-07',
    topicId: 'regresi',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt: 'Gunakan garis regresi $\\hat{y}=1{,}190x+0{,}893$ untuk memperkirakan $\\hat{y}$ ketika $x=5$.',
    answer: '6,85',
    acceptedAnswers: ['6.85', '6,84', '6,843', '6,85', '6,850', '6.850'],
    explanation:
      '$\\hat{y}=1{,}190(5)+0{,}893=5{,}95+0{,}893=6{,}843\\approx6{,}85$.',
    hints: ['Substitusikan $x=5$ ke persamaan garis regresi.'],
    competencies: ['prediksi regresi'],
  },
  {
    id: 'rg-08',
    topicId: 'regresi',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'penerapan',
    prompt:
      'Untuk data waktu belajar dan nilai ujian diperoleh koefisien korelasi $r\\approx0{,}9682$. Hitung koefisien determinasi $r^{2}$ dan tafsirkan maknanya dalam konteks.',
    answer:
      '$r^{2}\\approx(0{,}9682)^{2}\\approx0{,}937$. Artinya sekitar $93{,}7\\%$ variasi nilai ujian dapat dijelaskan oleh waktu belajar melalui model linear, sedangkan sekitar $6{,}3\\%$ dipengaruhi faktor lain atau variasi acak.',
    explanation:
      'Koefisien determinasi adalah kuadrat koefisien korelasi dan menyatakan proporsi variasi $y$ yang dijelaskan model.',
    hints: ['Determinasi adalah kuadrat dari korelasi.', 'Ubah hasil desimal menjadi persen.'],
    competencies: ['koefisien determinasi', 'interpretasi'],
  },
  {
    id: 'rg-09',
    topicId: 'regresi',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Sebuah model regresi menghasilkan $r=0{,}99$ pada rentang $x\\in[10,20]$. Seorang analis memakainya untuk memprediksi $x=100$. Jelaskan mengapa prediksi ini berisiko meskipun $r$ sangat tinggi.',
    answer:
      'Nilai $r$ hanya mengukur kekuatan hubungan linear pada rentang data yang diamati. Prediksi $x=100$ merupakan ekstrapolasi jauh di luar rentang $[10,20]$, sehingga pola sebenarnya bisa berubah (melengkung atau mendatar) dan model linear belum tentu berlaku. Korelasi tinggi tidak menjamin model tetap valid jauh di luar data.',
    explanation:
      'Kunci: $r$ tinggi hanya berlaku pada rentang pengamatan; di luar itu merupakan ekstrapolasi yang berisiko.',
    hints: ['Apa cakupan rentang data yang diamati?', 'Ingat istilah ekstrapolasi.'],
    competencies: ['ekstrapolasi', 'keterbatasan model'],
  },
  {
    id: 'rg-10',
    topicId: 'regresi',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt: 'Buktikan bahwa garis regresi kuadrat terkecil selalu melalui titik $(\\bar{x},\\bar{y})$.',
    answer:
      'Garis regresi berbentuk $\\hat{y}=bx+a$ dengan $a=\\bar{y}-b\\bar{x}$. Substitusikan $x=\\bar{x}$: $\\hat{y}=b\\bar{x}+a=b\\bar{x}+(\\bar{y}-b\\bar{x})=\\bar{y}$. Jadi titik $(\\bar{x},\\bar{y})$ selalu terletak pada garis regresi.',
    explanation:
      'Kunci: manfaatkan hubungan intersep $a=\\bar{y}-b\\bar{x}$, lalu substitusikan $x=\\bar{x}$.',
    hints: ['Gunakan $a=\\bar{y}-b\\bar{x}$.', 'Substitusikan $x=\\bar{x}$ ke persamaan garis.'],
    competencies: ['pembuktian', 'garis regresi'],
  },
  {
    id: 'rg-11',
    topicId: 'regresi',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Diberikan data $x: 2,3,4,5,6$ dan $y: 2,6,6,8,8$. Tentukan persamaan garis regresi kuadrat terkecil $\\hat{y}=bx+a$, lalu perkirakan nilai $y$ ketika $x=6$.',
    answer:
      'Dengan $n=5$, $\\sum x = 20$, $\\sum y = 30$, $\\sum xy = 134$, dan $\\sum x^2 = 90$: gradien $b = \\dfrac{n\\sum xy-(\\sum x)(\\sum y)}{n\\sum x^2-(\\sum x)^2} = \\dfrac{5(134)-20(30)}{5(90)-20^{2}} = \\dfrac{670-600}{450-400} = \\dfrac{70}{50} = 1{,}4$. Karena $\\bar{x}=4$ dan $\\bar{y}=6$, maka $a = \\bar{y}-b\\bar{x} = 6-1{,}4(4) = 0{,}4$. Jadi $\\hat{y} = 1{,}4x+0{,}4$, dan untuk $x=6$ diperoleh $\\hat{y} = 1{,}4(6)+0{,}4 = 8{,}8$.',
    explanation:
      'Kunci jawaban: menghitung $\\sum xy$ dan $\\sum x^2$, menentukan gradien dengan rumus kuadrat terkecil, lalu intersep melalui titik $(\\bar{x},\\bar{y})$ sebelum melakukan prediksi.',
    hints: [
      'Hitung $\\sum xy$ dan $\\sum x^{2}$ dari data.',
      'Setelah memperoleh $b$, gunakan $a = \\bar{y}-b\\bar{x}$.',
    ],
    competencies: ['regresi linear', 'prediksi', 'pemodelan'],
  },
  {
    id: 'rg-12',
    topicId: 'regresi',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'evaluasi',
    prompt:
      'Sebuah penelitian melaporkan korelasi $r=0{,}88$ antara lama olahraga dan tingkat kesehatan. (a) Hitung koefisien determinasi $r^{2}$ dan tafsirkan. (b) Tentukan persentase variasi kesehatan yang tidak dijelaskan model. (c) Jelaskan mengapa $r$ yang tinggi tidak membuktikan hubungan sebab-akibat, dan sebutkan satu variabel perantara yang mungkin.',
    answer:
      '(a) $r^{2}=(0{,}88)^{2}=0{,}7744$, artinya sekitar $77{,}44\\%$ variasi tingkat kesehatan dapat dijelaskan oleh lama olahraga melalui model linear. (b) Sisanya $100\\%-77{,}44\\%=22{,}56\\%$ dijelaskan faktor lain atau variasi acak. (c) Korelasi hanya menunjukkan kedua besaran bergerak bersama, bukan bahwa olahraga pasti menyebabkan kesehatan. Bisa saja orang yang sehat memang lebih mampu berolahraga (arah sebaliknya), atau ada faktor ketiga seperti pola makan dan istirahat yang memengaruhi keduanya.',
    explanation:
      'Kunci: menghitung dan menafsirkan $r^{2}$, menghitung sisa variasi, serta membedakan korelasi dari kausalitas dengan variabel perantara.',
    hints: ['Kuadratkan $r$ untuk mendapatkan determinasi.', 'Pikirkan faktor ketiga yang memengaruhi keduanya.'],
    competencies: ['koefisien determinasi', 'korelasi vs kausalitas', 'evaluasi'],
  },
];
