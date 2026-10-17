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
    hints: [
      'Ingat sifat simetri dan letak puncak kurva lonceng.',
      'Puncak kurva normal berada tepat di rata-rata $x=\\mu$, bukan bergeser satu simpangan baku.',
      'Simetri berarti sisi kiri dan kanan puncak saling mencerminkan terhadap garis $x=\\mu$.',
    ],
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
    hints: [
      'Gunakan $z = \\dfrac{x-\\mu}{\\sigma}$ dengan $x = 86$.',
      'Kurangkan rata-rata terlebih dahulu, baru bagi dengan simpangan baku.',
      'Hasil $z$ positif menandakan nilai itu berada di atas rata-rata.',
    ],
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
    hints: [
      'Selang $\\pm 1$ simpangan baku memuat sekitar $68\\%$ data.',
      'Kaidah empiris menyebut sekitar $68{,}27\\%$ data berada dalam $\\mu \\pm \\sigma$.',
      'Kaidah ini membagi data menjadi selang $\\pm 1$, $\\pm 2$, dan $\\pm 3$ simpangan baku.',
    ],
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
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Nilai ujian berdistribusi normal $N(72, 9^{2})$. (a) Tentukan peluang peserta bernilai di atas $90$. (b) Tentukan peluang peserta bernilai antara $63$ dan $81$. (c) Jelaskan mengapa peluang peserta bernilai tepat $72$ sama dengan nol.',
    answer:
      '(a) Standardisasi: $z=\\dfrac{90-72}{9}=2$, sehingga $P(X>90)=P(z>2)\\approx0{,}0228$, sekitar $2{,}28\\%$. (b) Batas $63$ dan $81$ sama dengan $\\mu\\pm\\sigma$ karena $72\\pm9$, sehingga $z=-1$ sampai $z=1$ dan $P(63<X<81)=P(-1\\le z\\le1)\\approx0{,}6827$, sekitar $68{,}27\\%$. (c) Nilai ujian adalah variabel kontinu, sehingga peluang dihitung sebagai luas daerah; satu titik tidak memiliki lebar, maka $P(X=72)=0$.',
    explanation:
      'Kunci: menstandardisasi kedua batas, memakai kaidah empiris untuk peluang selang $\\pm1\\sigma$ dan ekor kanan $2\\sigma$, serta menyadari peluang satu titik pada variabel kontinu adalah nol.',
    hints: [
      'Hitung $z$ untuk setiap batas dengan $\\mu=72$ dan $\\sigma=9$.',
      'Selang $63$ sampai $81$ adalah $\\mu\\pm\\sigma$; gunakan kaidah empiris.',
      'Pada variabel kontinu, peluang satu nilai tepat berupa luas titik yang bernilai nol.',
    ],
    competencies: ['skor baku', 'kaidah empiris', 'penalaran'],
    rubric: [
      'Menghitung $z=2$ dan $P(X>90)\\approx0{,}0228$',
      'Mengenali $63$ dan $81$ sebagai $\\mu\\pm\\sigma$ dan menghitung $P(-1\\le z\\le1)\\approx0{,}6827$',
      'Menjelaskan $P(X=72)=0$ karena variabel kontinu',
    ],
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
    hints: [
      'Gunakan $x = \\mu + z\\sigma$.',
      'Substitusikan $\\mu=20$, $\\sigma=5$, dan $z=3$.',
      'Nilai $x$ berada tiga simpangan baku di atas rata-rata.',
    ],
    competencies: ['skor baku'],
  },
  {
    id: 'dn-16',
    topicId: 'distribusi-normal',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penalaran',
    prompt:
      'Perhatikan kurva distribusi normal baku berikut. Daerah di bawah kurva yang diarsir menyatakan peluang …',
    figure: {
      svg: '<svg viewBox="0 0 320 200" role="img" aria-hidden="true"><line x1="24" y1="160" x2="300" y2="160" stroke="currentColor" stroke-width="1.4"/><line x1="160" y1="160" x2="160" y2="28" stroke="currentColor" stroke-width="1.4"/><path d="M160.0 45.0 L164.0 45.6 L168.0 47.3 L172.0 50.1 L176.0 53.8 L180.0 58.5 L184.0 63.9 L188.0 70.0 L192.0 76.5 L196.0 83.3 L200.0 90.2 L200.0 160 L160.0 160 Z" fill="currentColor" opacity="0.22"/><path d="M32.0 159.3 L36.0 159.1 L40.0 158.7 L44.0 158.3 L48.0 157.7 L52.0 157.0 L56.0 156.1 L60.0 154.9 L64.0 153.5 L68.0 151.8 L72.0 149.8 L76.0 147.3 L80.0 144.4 L84.0 141.1 L88.0 137.2 L92.0 132.9 L96.0 128.0 L100.0 122.7 L104.0 116.8 L108.0 110.6 L112.0 104.0 L116.0 97.2 L120.0 90.2 L124.0 83.3 L128.0 76.5 L132.0 70.0 L136.0 63.9 L140.0 58.5 L144.0 53.8 L148.0 50.1 L152.0 47.3 L156.0 45.6 L160.0 45.0 L164.0 45.6 L168.0 47.3 L172.0 50.1 L176.0 53.8 L180.0 58.5 L184.0 63.9 L188.0 70.0 L192.0 76.5 L196.0 83.3 L200.0 90.2 L204.0 97.2 L208.0 104.0 L212.0 110.6 L216.0 116.8 L220.0 122.7 L224.0 128.0 L228.0 132.9 L232.0 137.2 L236.0 141.1 L240.0 144.4 L244.0 147.3 L248.0 149.8 L252.0 151.8 L256.0 153.5 L260.0 154.9 L264.0 156.1 L268.0 157.0 L272.0 157.7 L276.0 158.3 L280.0 158.7 L284.0 159.1 L288.0 159.3" fill="none" stroke="currentColor" stroke-width="1.6"/><line x1="160" y1="45" x2="160" y2="160" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/><line x1="200" y1="90.2" x2="200" y2="160" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/><text x="160" y="176" font-size="11" fill="currentColor" text-anchor="middle">0</text><text x="200" y="176" font-size="11" fill="currentColor" text-anchor="middle">1</text><text x="160" y="24" font-size="11" fill="currentColor" text-anchor="middle">z</text></svg>',
      alt: 'Kurva distribusi normal baku dengan daerah di bawah kurva dari titik tengah (z = 0) sampai satu simpangan baku di kanan (z = 1) diarsir.',
      caption: 'Daerah di bawah kurva normal baku.',
    },
    options: [
      { key: 'A', text: '$P(0 \\leq z \\leq 1)$' },
      { key: 'B', text: '$P(-1 \\leq z \\leq 1)$' },
      { key: 'C', text: '$P(z > 1)$' },
      { key: 'D', text: '$P(z < -1)$' },
    ],
    answer: 'A',
    explanation:
      'Daerah yang diarsir membentang dari sumbu simetri $z=0$ (tepat di bawah puncak) sampai satu simpangan baku di kanan, yaitu $z=1$, sehingga menyatakan $P(0 \\leq z \\leq 1)$ (opsi A). Opsi B mencakup kedua sisi simetris yang tidak seluruhnya diarsir; opsi C hanya ekor kanan di luar $z=1$; opsi D adalah ekor kiri yang juga tidak diarsir.',
    hints: [
      'Perhatikan batas kiri dan batas kanan daerah yang diarsir pada sumbu datar.',
      'Batas kirinya tepat di bawah puncak kurva, yaitu rata-rata $z=0$.',
    ],
    competencies: ['membaca kurva normal', 'peluang selang'],
  },
  {
    id: 'dn-17',
    topicId: 'distribusi-normal',
    difficulty: 'mahir',
    type: 'short-answer',
    category: 'penerapan',
    prompt:
      'Variabel $X$ berdistribusi normal $N(60, 5^{2})$. Tentukan $P(X > 70)$.',
    answer: '0,0228',
    acceptedAnswers: ['0,0228', '0.0228', '0,02275', '0.02275', '2,28%', '2.28%'],
    explanation:
      'Standardisasi: $z=\\dfrac{70-60}{5}=2$, sehingga $P(X>70)=P(z>2)$. Dari kaidah empiris, luas di luar $\\pm2$ adalah $1-0{,}9545=0{,}0455$ dan terbagi dua ekor, jadi $P(z>2)\\approx0{,}0228$.',
    hints: [
      'Ubah $x=70$ menjadi skor baku dengan $\\sigma=5$.',
      'Peluang ekor kanan $z>2$ sama dengan $\\dfrac{1-P(-2\\le z\\le2)}{2}$.',
    ],
    competencies: ['skor baku', 'peluang ekor'],
  },
  {
    id: 'dn-18',
    topicId: 'distribusi-normal',
    difficulty: 'mahir',
    type: 'multiple-choice',
    category: 'kontekstual',
    prompt:
      'Skor seleksi berdistribusi normal $N(500, 100^{2})$. Hanya peserta dengan skor di $2{,}5\\%$ teratas yang lolos. Dengan skor baku kritis $z\\approx1{,}96$, skor minimum kelulusan adalah …',
    options: [
      { key: 'A', text: '$669$' },
      { key: 'B', text: '$696$' },
      { key: 'C', text: '$720$' },
      { key: 'D', text: '$700$' },
    ],
    answer: 'B',
    explanation:
      'Batas $2{,}5\\%$ teratas berarti $P(Z>z)=0{,}025$, sehingga skor baku kritisnya $z\\approx1{,}96$. Skor minimum $x=\\mu+z\\sigma=500+1{,}96(100)=696$ (opsi B). Opsi A ($669$) memakai $z\\approx1{,}69$; opsi D ($700$) memakai $z=2$ sehingga justru memotong sekitar $2{,}28\\%$ (lebih sedikit dari $2{,}5\\%$); opsi C ($720$) memakai batas yang terlalu tinggi.',
    hints: [
      'Ubah "2,5% teratas" menjadi skor baku kritis $z$.',
      'Gunakan $x=\\mu+z\\sigma$ dengan $\\mu=500$ dan $\\sigma=100$.',
    ],
    competencies: ['skor baku', 'nilai kritis', 'kontekstual'],
  },
];
