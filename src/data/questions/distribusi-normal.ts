import type { Question } from '@/types/content';

export const distribusiNormalQuestions: Question[] = [
  {
    id: 'dn-01',
    topicId: 'distribusi-normal',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'konsep',
    prompt: 'Manakah pernyataan yang **benar** tentang kurva distribusi normal?',
    options: [
      { key: 'A', text: 'Kurva simetris terhadap garis $x = \\mu$' },
      { key: 'B', text: 'Kurva mencapai puncak tertinggi di $x = \\mu + \\sigma$' },
      { key: 'C', text: 'Makin besar $\\sigma$, kurva makin tinggi dan sempit' },
      { key: 'D', text: 'Luas daerah di bawah kurva bergantung pada nilai $\\mu$' },
    ],
    answer: 'A',
    explanation:
      'Kurva normal simetris terhadap garis rata-rata $x = \\mu$. Opsi B salah karena puncak tertinggi justru di $x = \\mu$, bukan di $\\mu + \\sigma$. Opsi C salah karena $\\sigma$ besar membuat kurva lebih rendah dan lebar, bukan tinggi dan sempit. Opsi D salah karena luas total di bawah kurva selalu $1$ untuk semua $\\mu$, sehingga tidak bergantung pada nilai rata-rata.',
    hints: ['Ingat sifat simetri dan letak puncak kurva lonceng.'],
    competencies: ['sifat kurva normal', 'konsep'],
  },
  {
    id: 'dn-02',
    topicId: 'distribusi-normal',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'cepat',
    prompt:
      'Nilai ulangan sekelas berdistribusi normal dengan rata-rata $\\mu = 70$ dan simpangan baku $\\sigma = 8$. Tentukan skor baku $z$ seorang siswa yang bernilai $86$.',
    answer: '2',
    acceptedAnswers: ['2', '2,0', '2.0'],
    explanation:
      'Skor baku dihitung dengan $z = \\dfrac{x-\\mu}{\\sigma} = \\dfrac{86-70}{8} = \\dfrac{16}{8} = 2$. Nilai $86$ berada dua simpangan baku di atas rata-rata.',
    hints: ['Gunakan $z = \\dfrac{x-\\mu}{\\sigma}$ dengan $x = 86$.'],
    competencies: ['skor baku'],
  },
  {
    id: 'dn-03',
    topicId: 'distribusi-normal',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'konsep',
    prompt:
      'Jika simpangan baku $\\sigma$ diperbesar sementara rata-rata $\\mu$ tetap, bentuk kurva normal menjadi …',
    options: [
      { key: 'A', text: 'Lebih tinggi dan sempit' },
      { key: 'B', text: 'Lebih rendah dan lebar' },
      { key: 'C', text: 'Tetap sama persis' },
      { key: 'D', text: 'Bergeser ke kanan tanpa berubah bentuk' },
    ],
    answer: 'B',
    explanation:
      'Simpangan baku mengatur lebar sebaran. Karena luas total tetap $1$, memperbesar $\\sigma$ membuat kurva lebih rendah dan lebar. Opsi A justru terjadi bila $\\sigma$ diperkecil. Opsi D menggambarkan pengaruh $\\mu$, bukan $\\sigma$; sedangkan opsi C salah karena bentuk kurva memang berubah.',
    hints: ['Ingat luas total kurva selalu $1$.', 'Bila sebaran melebar, puncaknya harus turun.'],
    competencies: ['pengaruh sigma', 'konsep'],
  },
  {
    id: 'dn-04',
    topicId: 'distribusi-normal',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'penerapan',
    prompt:
      'Untuk distribusi normal baku, hitung peluang $P(-1 \\leq z \\leq 1)$ memakai kaidah empiris.',
    answer: '0,6827',
    acceptedAnswers: ['0,6827', '0.6827', '0,683', '0.683', '68%', '68,27%', '68.27%'],
    explanation:
      'Menurut kaidah empiris, sekitar $68{,}27\\%$ data distribusi normal berada dalam $\\mu \\pm \\sigma$; pada normal baku ini berarti $P(-1 \\leq z \\leq 1) \\approx 0{,}6827$.',
    hints: ['Selang $\\pm 1$ simpangan baku memuat sekitar $68\\%$ data.'],
    competencies: ['kaidah empiris'],
  },
  {
    id: 'dn-05',
    topicId: 'distribusi-normal',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt:
      'Variabel $X$ berdistribusi normal $N(100, 15^{2})$. Tentukan $P(X < 70)$.',
    answer: '0,0228',
    acceptedAnswers: ['0,0228', '0.0228', '0,02275', '0.02275', '2,28%', '2.28%', '0,023', '0.023'],
    explanation:
      'Standardisasi: $z = \\dfrac{70-100}{15} = -2$, sehingga $P(X < 70) = P(z < -2)$. Karena $P(-2 \\leq z \\leq 2) \\approx 0{,}9545$, sisa $0{,}0455$ terbagi dua ekor, jadi tiap ekor sekitar $0{,}0228$.',
    hints: [
      'Ubah $x = 70$ menjadi skor baku lebih dahulu.',
      'Gunakan kaidah empiris: luas di luar $\\pm 2$ adalah $100\\% - 95{,}45\\%$, lalu bagi dua.',
    ],
    competencies: ['skor baku', 'peluang ekor'],
  },
  {
    id: 'dn-06',
    topicId: 'distribusi-normal',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penalaran',
    prompt:
      'Untuk $X \\sim N(50, 10^{2})$, manakah pernyataan yang **benar**?',
    options: [
      { key: 'A', text: '$P(X \\leq 65) = P(z \\leq 1{,}5)$' },
      { key: 'B', text: '$P(X \\leq 65) = P(z \\leq 15)$' },
      { key: 'C', text: '$P(X \\leq 65) = P(z \\leq 1)$' },
      { key: 'D', text: '$P(X \\leq 65) = P(z \\leq 0{,}65)$' },
    ],
    answer: 'A',
    explanation:
      'Skor baku $z = \\dfrac{65-50}{10} = 1{,}5$, jadi jawabannya opsi A. Opsi B salah karena $15$ adalah selisih mentah tanpa dibagi $\\sigma$. Opsi C salah karena membagi dengan $15$ alih-alih $\\sigma = 10$. Opsi D salah karena membagi dengan $100$ atau menukar peran pembilang dan penyebut.',
    hints: [
      'Gunakan $z = \\dfrac{x-\\mu}{\\sigma}$ dengan $\\sigma = 10$.',
      'Bagi selisih $65-50$ dengan simpangan baku, bukan dengan bilangan lain.',
    ],
    competencies: ['standardisasi', 'penalaran'],
  },
  {
    id: 'dn-07',
    topicId: 'distribusi-normal',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'kontekstual',
    prompt:
      'Sebuah mesin mengisi botol dengan volume berdistribusi $N(500, 4^{2})$ mL. Tentukan peluang sebuah botol berisi antara $496$ mL dan $504$ mL.',
    answer: '0,6827',
    acceptedAnswers: ['0,6827', '0.6827', '0,683', '0.683', '68%', '68,27%', '68.27%'],
    explanation:
      'Batas $496$ dan $504$ adalah $\\mu \\pm \\sigma$ karena $500 \\pm 4$. Maka $z_1 = -1$ dan $z_2 = 1$, sehingga $P(496 \\leq X \\leq 504) = P(-1 \\leq z \\leq 1) \\approx 0{,}6827$. Sekitar $68{,}3\\%$ botol memenuhi selang tersebut.',
    hints: [
      'Periksa bahwa $496 = \\mu - \\sigma$ dan $504 = \\mu + \\sigma$.',
      'Setelah standardisasi, pakai kaidah empiris untuk selang $\\pm 1$ simpangan baku.',
    ],
    competencies: ['standardisasi', 'kaidah empiris', 'kontekstual'],
  },
  {
    id: 'dn-08',
    topicId: 'distribusi-normal',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Tinggi $1000$ siswa sebuah sekolah dapat dimodelkan normal dengan rata-rata $165$ cm dan simpangan baku $6$ cm. (a) Jelaskan mengapa model normal masuk akal. (b) Hitung peluang seorang siswa bertinggi antara $153$ cm dan $177$ cm. (c) Tafsirkan hasilnya dalam banyak siswa.',
    answer:
      '(a) Tinggi badan adalah variabel kontinu dan berasal dari banyak faktor kecil yang saling memengaruhi, sehingga sebarannya cenderung menumpuk di tengah secara simetris menyerupai kurva lonceng; karena itu model normal $X \\sim N(165, 6^{2})$ masuk akal. (b) Selang $153$–$177$ adalah $\\mu \\pm 2\\sigma$ karena $165 \\pm 12$, sehingga $z = -2$ sampai $z = 2$ dan $P(153 \\leq X \\leq 177) = P(-2 \\leq z \\leq 2) \\approx 0{,}9545$. (c) Sekitar $95{,}45\\%$ dari $1000$ siswa, yaitu sekitar $955$ siswa, bertinggi antara $153$ cm dan $177$ cm; hanya sekitar $45$ siswa berada di luar selang itu.',
    explanation:
      'Kunci mencakup justifikasi variabel kontinu dan sifat sebaran simetris, standardisasi menjadi selang $z = \\pm 2$, pemakaian kaidah empiris $95{,}45\\%$, serta penafsiran dalam bentuk cacah siswa dari total $1000$.',
    hints: [
      'Periksa apakah $153$ dan $177$ sama dengan $\\mu \\pm \\sigma$ atau $\\mu \\pm 2\\sigma$.',
      'Setelah memperoleh peluang, kalikan dengan $1000$ untuk menaksir banyak siswa.',
    ],
    competencies: ['pemodelan normal', 'kaidah empiris', 'penafsiran'],
    rubric: [
      'Menjelaskan alasan model normal (kontinu, simetris, banyak faktor kecil)',
      'Menghitung $P(153 \\leq X \\leq 177) = P(-2 \\leq z \\leq 2) \\approx 0{,}9545$',
      'Menafsirkan sekitar $955$ dari $1000$ siswa berada dalam selang itu',
    ],
  },
  {
    id: 'dn-09',
    topicId: 'distribusi-normal',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penalaran',
    prompt:
      'Untuk distribusi normal baku, tentukan $P(z > 2)$.',
    answer: '0,0228',
    acceptedAnswers: ['0,0228', '0.0228', '0,02275', '0.02275', '2,28%', '2.28%', '0,023', '0.023'],
    explanation:
      'Karena kurva normal baku simetris terhadap $0$, peluang ekor kanan sama dengan ekor kiri: $P(z > 2) = P(z < -2)$. Dari kaidah empiris, luas di luar $\\pm 2$ adalah $1 - 0{,}9545 = 0{,}0455$, terbagi dua ekor, sehingga $P(z > 2) \\approx 0{,}0228$.',
    hints: [
      'Manfaatkan simetri kurva: ekor kanan $2$ sama dengan ekor kiri $-2$.',
      'Luas total $1$; sisihkan luas tengah $P(-2 \\leq z \\leq 2)$ terlebih dahulu.',
    ],
    competencies: ['simetri normal', 'peluang ekor'],
  },
  {
    id: 'dn-10',
    topicId: 'distribusi-normal',
    difficulty: 'mahir',
    type: 'short-answer',
    category: 'penalaran',
    prompt:
      'Nilai ujian berdistribusi normal $N(72, 9^{2})$. Tentukan peluang seorang peserta bernilai **di atas** $90$.',
    answer: '0,0228',
    acceptedAnswers: ['0,0228', '0.0228', '0,02275', '0.02275', '2,28%', '2.28%', '0,023', '0.023'],
    explanation:
      'Standardisasi: $z = \\dfrac{90-72}{9} = 2$. Maka $P(X > 90) = P(z > 2) \\approx 0{,}0228$, yaitu sekitar $2{,}28\\%$ peserta.',
    hints: [
      'Hitung $z$ untuk $x = 90$ dengan $\\mu = 72$ dan $\\sigma = 9$.',
      'Setelah memperoleh $z = 2$, gunakan luas ekor kanan dari kaidah empiris.',
    ],
    competencies: ['skor baku', 'peluang ekor', 'penalaran'],
  },
  {
    id: 'dn-11',
    topicId: 'distribusi-normal',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'kontekstual',
    prompt:
      'Sebuah mesin pengisi mengisi kemasan dengan volume berdistribusi $N(250, 2^{2})$ mL. Spesifikasi menuntut isi berada dalam selang $246$–$254$ mL dan mesin dianggap baik bila paling sedikit $95\\%$ kemasan memenuhi spesifikasi. (a) Hitung peluang satu kemasan memenuhi spesifikasi. (b) Hitung peluang kemasan berisi kurang dari $244$ mL. (c) Nilai apakah mesin sudah memenuhi target, dan jelaskan.',
    answer:
      '(a) Batas spesifikasi adalah $\\mu \\pm 2\\sigma$ karena $250 \\pm 4$, sehingga $z_1 = -2$ dan $z_2 = 2$. Maka $P(246 \\leq X \\leq 254) = P(-2 \\leq z \\leq 2) \\approx 0{,}9545$, yaitu sekitar $95{,}45\\%$. (b) Untuk $x = 244$: $z = \\dfrac{244-250}{2} = -3$, sehingga $P(X < 244) = P(z < -3) \\approx 0{,}00135$, sekitar $0{,}135\\%$. (c) Karena $95{,}45\\% \\geq 95\\%$, target terpenuhi. Mesin sudah baik untuk toleransi $\\pm 2\\sigma$; namun bila pihak pabrik ingin menekan kemasan kurang isi, simpangan baku perlu diperkecil atau rata-rata dinaikkan sedikit.',
    explanation:
      'Kunci: mengenali toleransi sebagai selang $\\pm 2\\sigma$, memakai kaidah empiris $95{,}45\\%$ untuk bagian (a), standardisasi $z = -3$ dengan peluang ekor $0{,}00135$ untuk bagian (b), lalu membandingkan $95{,}45\\%$ dengan ambang $95\\%$ untuk menyimpulkan target terpenuhi.',
    hints: [
      'Periksa bahwa $246$ dan $254$ sama dengan $\\mu \\pm 2\\sigma$.',
      'Untuk bagian (c), bandingkan peluang pada bagian (a) dengan ambang $95\\%$.',
    ],
    competencies: ['pemodelan normal', 'kaidah empiris', 'evaluasi mutu', 'kontekstual'],
    rubric: [
      'Menghitung $P(246 \\leq X \\leq 254) = P(-2 \\leq z \\leq 2) \\approx 0{,}9545$',
      'Menghitung $P(X < 244) = P(z < -3) \\approx 0{,}00135$',
      'Menyimpulkan target $95\\%$ terpenuhi karena $95{,}45\\% \\geq 95\\%$',
    ],
  },
  {
    id: 'dn-12',
    topicId: 'distribusi-normal',
    difficulty: 'mahir',
    type: 'multiple-choice',
    category: 'evaluasi',
    prompt:
      'Seorang siswa berkata, "Karena kurva normal simetris dan puncaknya di $x = \\mu$, maka $P(X = \\mu) = 0{,}5$." Nilai pernyataan itu dan pilihlah tanggapan yang tepat.',
    options: [
      { key: 'A', text: 'Salah, karena pada variabel kontinu peluang satu titik tepat selalu $0$' },
      { key: 'B', text: 'Benar, karena kurva simetris terhadap $\\mu$' },
      { key: 'C', text: 'Benar, karena puncak kurva berada di $\\mu$' },
      { key: 'D', text: 'Salah, karena $P(X = \\mu)$ seharusnya $1$' },
    ],
    answer: 'A',
    explanation:
      'Pada variabel acak kontinu, peluang dihitung sebagai luas, dan satu titik tidak punya lebar sehingga $P(X = \\mu) = 0$. Opsi B dan C keliru karena mengaitkan simetri dan letak puncak dengan peluang satu titik; luas di bawah satu titik tetap nol. Opsi D keliru karena $P(X=\\mu)$ bukan $1$; yang bernilai $1$ adalah luas total seluruh kurva.',
    hints: [
      'Ingat bahwa pada variabel kontinu peluang diperoleh dari luas, bukan tinggi.',
      'Berapa luas daerah tepat di bawah satu titik pada kurva kontinu?',
    ],
    competencies: ['peluang kontinu', 'evaluasi penalaran'],
  },
  {
    id: 'dn-13',
    topicId: 'distribusi-normal',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Kaidah empiris $68$–$95$–$99{,}7$ berlaku untuk **semua** distribusi normal. (a) Jelaskan mengapa luas selang $\\mu \\pm 2\\sigma$ selalu sama meskipun $\\mu$ dan $\\sigma$ berbeda. (b) Untuk $X \\sim N(150, 20^{2})$, hitung $P(110 \\leq X \\leq 190)$ dan $P(X < 110)$.',
    answer:
      '(a) Dengan standardisasi $z = \\dfrac{x-\\mu}{\\sigma}$, setiap selang $\\mu \\pm k\\sigma$ berubah menjadi selang baku $-k \\leq z \\leq k$ yang sama untuk semua distribusi normal. Karena $\\mu$ dan $\\sigma$ hilang dalam proses ini, luasnya tetap, yaitu sekitar $95{,}45\\%$ untuk $k = 2$, berapa pun nilai rata-rata dan simpangan bakunya. (b) Batas $110$ dan $190$ adalah $\\mu \\pm 2\\sigma$ karena $150 \\pm 40$, sehingga $z = -2$ sampai $z = 2$ dan $P(110 \\leq X \\leq 190) = P(-2 \\leq z \\leq 2) \\approx 0{,}9545$. Untuk $P(X < 110)$, standardisasi memberi $z = -2$, sehingga $P(X < 110) = P(z < -2) \\approx 0{,}0228$.',
    explanation:
      'Kunci: menjelaskan bahwa standardisasi memetakan setiap selang $\\mu \\pm k\\sigma$ ke selang baku yang sama sehingga luasnya invarian, lalu menerapkan hasil itu pada $X \\sim N(150, 20^{2})$ untuk memperoleh $0{,}9545$ dan peluang ekor $0{,}0228$.',
    hints: [
      'Tuliskan selang $\\mu \\pm k\\sigma$ lalu ubah batasnya dengan $z = \\dfrac{x-\\mu}{\\sigma}$.',
      'Setelah standardisasi, gunakan kaidah empiris untuk $\\pm 2$ simpangan baku.',
    ],
    competencies: ['standardisasi', 'kaidah empiris', 'penalaran'],
    rubric: [
      'Menjelaskan standardisasi membuat luas selang $\\mu \\pm k\\sigma$ invarian',
      'Menghitung $P(110 \\leq X \\leq 190) = P(-2 \\leq z \\leq 2) \\approx 0{,}9545$',
      'Menghitung $P(X < 110) = P(z < -2) \\approx 0{,}0228$',
    ],
  },
  {
    id: 'dn-14',
    topicId: 'distribusi-normal',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt:
      'Untuk distribusi normal baku, tentukan $P(-2 \\leq z \\leq 2)$.',
    answer: '0,9545',
    acceptedAnswers: ['0,9545', '0.9545', '0,955', '0.955', '95%', '95,45%', '95.45%'],
    explanation:
      'Menurut kaidah empiris, sekitar $95{,}45\\%$ data berada dalam dua simpangan baku dari rata-rata, sehingga $P(-2 \\leq z \\leq 2) \\approx 0{,}9545$.',
    hints: [
      'Selang $\\pm 2$ simpangan baku memuat sekitar $95\\%$ data.',
      'Nilai ini adalah bagian tengah dari kaidah $68$–$95$–$99{,}7$.',
    ],
    competencies: ['kaidah empiris'],
  },
  {
    id: 'dn-15',
    topicId: 'distribusi-normal',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'cepat',
    prompt:
      'Suatu variabel normal memiliki $\\mu = 20$ dan $\\sigma = 5$. Tentukan nilai $x$ yang berskor baku $z = 3$.',
    answer: '35',
    acceptedAnswers: ['35', '35,0', '35.0'],
    explanation:
      'Dari $z = \\dfrac{x-\\mu}{\\sigma}$ diperoleh $x = \\mu + z\\sigma = 20 + 3(5) = 35$.',
    hints: ['Gunakan $x = \\mu + z\\sigma$.'],
    competencies: ['skor baku'],
  },
];
