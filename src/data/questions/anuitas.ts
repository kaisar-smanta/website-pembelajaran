import type { Question } from '@/types/content';

export const anuitasQuestions: Question[] = [
  {
    id: 'an-01',
    topicId: 'anuitas',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'cepat',
    prompt:
      'Pinjaman Rp10.000.000 dikenai suku bunga 1,5% per bulan. Besar angsuran bunga pada bulan pertama adalah …',
    options: [
      { key: 'A', text: 'Rp100.000,00' },
      { key: 'B', text: 'Rp1.500.000,00' },
      { key: 'C', text: 'Rp15.000,00' },
      { key: 'D', text: 'Rp150.000,00' },
    ],
    answer: 'D',
    explanation:
      'Bunga bulan pertama dihitung dari pokok pinjaman: $0{,}015 \\times 10.000.000 = \\text{Rp}150.000$. Opsi B salah karena memakai $15\\%$, bukan $1{,}5\\%$.',
    hints: ['Bunga periode ke-$k$ dihitung dari sisa utang sebelumnya.'],
    competencies: ['angsuran bunga'],
  },
  {
    id: 'an-02',
    topicId: 'anuitas',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'konsep',
    prompt:
      'Pada anuitas dengan besar angsuran tetap, pernyataan yang benar tentang komposisi angsuran dari bulan ke bulan adalah …',
    options: [
      { key: 'A', text: 'Porsi bunga tetap karena angsurannya tetap.' },
      { key: 'B', text: 'Porsi bunga makin besar, porsi pokok makin kecil.' },
      { key: 'C', text: 'Porsi bunga makin kecil, porsi pokok makin besar.' },
      { key: 'D', text: 'Porsi pokok dan bunga selalu sama setiap bulan.' },
    ],
    answer: 'C',
    explanation:
      'Bunga dihitung dari sisa utang. Karena sisa utang terus berkurang, porsi bunga makin kecil dan porsi pokok makin besar, meskipun total angsuran tetap. Inilah yang membuat utang turun makin cepat di akhir periode.',
    hints: ['Apakah sisa utang dari bulan ke bulan makin besar atau makin kecil?'],
    competencies: ['konsep anuitas', 'komposisi angsuran'],
  },
  {
    id: 'an-03',
    topicId: 'anuitas',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt:
      'Pinjaman Rp10.000.000 akan dilunasi dengan anuitas selama 24 bulan dan bunga 1,5% per bulan. Besar angsuran bulanan adalah …',
    options: [
      { key: 'A', text: 'Rp416.666,67' },
      { key: 'B', text: 'Rp499.241,02' },
      { key: 'C', text: 'Rp500.000,00' },
      { key: 'D', text: 'Rp649.241,02' },
    ],
    answer: 'B',
    explanation:
      '$A = \\dfrac{M i}{1-(1+i)^{-n}} = \\dfrac{10.000.000(0{,}015)}{1-(1{,}015)^{-24}} = \\dfrac{150.000}{0{,}300456} \\approx \\text{Rp}499.241,02$. Opsi A hanya membagi pokok dengan banyak bulan (mengabaikan bunga); opsi C sekadar angka bulat; opsi D salah menjumlahkan pokok dan bunga.',
    hints: [
      'Gunakan rumus anuitas dengan $(1{,}015)^{24} \\approx 1{,}429503$.',
      'Angsuran harus lebih besar dari pokok dibagi banyak bulan.',
    ],
    competencies: ['rumus anuitas'],
  },
  {
    id: 'an-04',
    topicId: 'anuitas',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'kontekstual',
    prompt:
      'Suatu pinjaman pokok Rp10.000.000 dilunasi dengan angsuran Rp499.241,02 per bulan selama 24 bulan. Total bunga yang dibayar adalah …',
    options: [
      { key: 'A', text: 'Rp1.750.000' },
      { key: 'B', text: 'Rp2.000.000' },
      { key: 'C', text: 'Rp350.000' },
      { key: 'D', text: 'Rp1.981.784' },
    ],
    answer: 'D',
    explanation:
      'Total pembayaran $= 24 \\times 499.241,02 = \\text{Rp}11.981.784,48$. Total bunga $= 11.981.784,48 - 10.000.000 = \\text{Rp}1.981.784,48 \\approx \\text{Rp}1.981.784$.',
    hints: ['Total bunga = total pembayaran − pokok pinjaman.'],
    competencies: ['total bunga', 'literasi keuangan'],
  },
  {
    id: 'an-05',
    topicId: 'anuitas',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'cepat',
    prompt:
      'Pinjaman Rp6.000.000 dikenai suku bunga 2% per bulan. Hitung angsuran bunga pada bulan pertama.',
    answer: 'Rp120.000',
    acceptedAnswers: ['Rp120.000,00', '120.000', '120000', 'Rp 120.000'],
    explanation:
      'Bunga bulan pertama $= 0{,}02 \\times 6.000.000 = \\text{Rp}120.000$.',
    hints: ['Kalikan pokok pinjaman dengan suku bunga per bulan.'],
    competencies: ['angsuran bunga'],
  },
  {
    id: 'an-06',
    topicId: 'anuitas',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt:
      'Pada pinjaman Rp6.000.000 dengan bunga 2% per bulan, jika besar angsuran bulanan Rp567.000, hitung angsuran pokok pada bulan pertama.',
    answer: 'Rp447.000',
    acceptedAnswers: ['Rp447.000,00', '447.000', '447000', 'Rp 447.000'],
    explanation:
      'Angsuran bunga bulan pertama $= 0{,}02 \\times 6.000.000 = \\text{Rp}120.000$. Angsuran pokok $= 567.000 - 120.000 = \\text{Rp}447.000$.',
    hints: ['Angsuran pokok adalah angsuran total dikurangi angsuran bunga.'],
    competencies: ['komposisi angsuran', 'angsuran pokok'],
  },
  {
    id: 'an-07',
    topicId: 'anuitas',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'kontekstual',
    prompt:
      'Seseorang menabung Rp1.000.000 setiap akhir tahun selama 5 tahun dengan bunga 6% per tahun. Gunakan rumus nilai masa depan untuk menghitung saldo akhir (bulatkan ke rupiah terdekat).',
    answer: 'Rp5.637.093',
    acceptedAnswers: ['Rp5.637.092,96', 'Rp5.637.093,00', '5.637.093,00', '5637093,00', '5.637.093', '5637093', 'Rp 5.637.093'],
    explanation:
      '$FV = A \\cdot \\dfrac{(1+i)^n - 1}{i} = 1.000.000 \\cdot \\dfrac{(1{,}06)^5 - 1}{0{,}06} = 1.000.000 \\cdot \\dfrac{0{,}338226}{0{,}06} \\approx \\text{Rp}5.637.093$.',
    hints: ['Gunakan rumus nilai masa depan anuitas, bukan bunga majemuk biasa.'],
    competencies: ['nilai masa depan', 'rumus anuitas'],
  },
  {
    id: 'an-08',
    topicId: 'anuitas',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Jelaskan mengapa pada anuitas porsi bunga dalam angsuran makin kecil dari bulan ke bulan, meskipun besar angsurannya tetap.',
    answer:
      'Bunga setiap periode dihitung dari sisa utang, yaitu $i \\times \\text{sisa utang}$. Karena setiap angsuran pokok mengurangi sisa utang, sisa utang dari bulan ke bulan makin kecil, sehingga bunga yang dihitung pun makin kecil. Karena angsuran total $A$ tetap, bagian yang tersisa untuk pokok ($A$ dikurangi bunga) justru makin besar. Jadi ada dua hal yang bergerak berlawanan: porsi bunga menurun dan porsi pokok meningkat, namun jumlahnya selalu $A$.',
    explanation:
      'Penilaian menekankan pemahaman bahwa dasar perhitungan bunga adalah sisa utang yang terus menyusut, bukan pokok awal.',
    hints: ['Ingat bahwa bunga dihitung dari sisa utang yang terus berkurang, bukan dari pokok awal.'],
    competencies: ['konsep anuitas', 'penalaran'],
  },
  {
    id: 'an-09',
    topicId: 'anuitas',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Sebuah pinjaman Rp20.000.000 dapat dilunasi dengan tenor 24 bulan atau 48 bulan. Jelaskan secara matematis mengapa memperpanjang tenor menurunkan angsuran bulanan tetapi menaikkan total bunga.',
    answer:
      'Angsuran dihitung dengan $A = \\dfrac{M i}{1-(1+i)^{-n}}$. Memperpanjang tenor memperbesar $n$. Karena $(1+i)^{-n}$ makin kecil ketika $n$ bertambah, penyebut $1-(1+i)^{-n}$ makin besar, sehingga nilai $A$ menurun. Namun pembayaran dilakukan lebih banyak kali. Total pembayaran $= n \\times A$ justru bertambah karena bunga terus berjalan selama periode yang lebih lama, sehingga total bunga $nA - M$ naik. Dengan kata lain, angsuran bulanan lebih ringan, tetapi biaya pinjaman secara keseluruhan lebih besar.',
    explanation:
      'Kunci jawaban harus menghubungkan turunnya $A$ dengan naiknya $n$, lalu menjelaskan efek pada total $n \\times A$ dan total bunga.',
    hints: ['Amati pengaruh memperbesar $n$ terhadap penyebut $1-(1+i)^{-n}$ dan terhadap banyaknya pembayaran $nA$.'],
    competencies: ['rumus anuitas', 'pemodelan keuangan', 'analisis kritis'],
  },
  {
    id: 'an-10',
    topicId: 'anuitas',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'evaluasi',
    prompt:
      'Sebuah aplikasi menawarkan pinjaman Rp16.000.000 dengan angsuran Rp1.500.000 per bulan selama 12 bulan. Hitung total bunga, tentukan nilai wajar angsuran jika suku bunga wajar 1,5% per bulan, lalu berikan penilaian kritis terhadap penawaran tersebut.',
    answer:
      'Total pembayaran $= 12 \\times 1.500.000 = \\text{Rp}18.000.000$, sehingga total bunga $= 18.000.000 - 16.000.000 = \\text{Rp}2.000.000$. Nilai wajar angsuran pada $i = 1{,}5\\%$ dan $n = 12$ adalah $A = \\dfrac{16.000.000(0{,}015)}{1-(1{,}015)^{-12}} \\approx \\text{Rp}1.466.880$ (dengan $(1{,}015)^{-12} \\approx 0{,}836387$). Karena penawaran Rp1.500.000 lebih tinggi daripada nilai wajar Rp1.466.880, suku bunga efektif yang dikenakan melebihi $1{,}5\\%$ per bulan. Penawaran ini relatif mahal; peminjam sebaiknya memeriksa biaya administrasi, denda, dan bunga efektif sebelum menyetujui.',
    explanation:
      'Penilaian mencakup tiga hal: total bunga yang benar, perhitungan nilai wajar anuitas, dan penafsiran kritis bahwa angsuran penawaran di atas nilai wajar.',
    hints: ['Bandingkan angsuran penawaran dengan nilai wajar anuitas pada suku bunga wajar $1{,}5\\%$ per bulan.'],
    competencies: ['rumus anuitas', 'evaluasi penawaran', 'literasi keuangan'],
  },
  {
    id: 'an-11',
    topicId: 'anuitas',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Pinjaman Rp12.000.000 dikenai bunga 1% per bulan dan diangsur dengan sistem anuitas selama 12 bulan. Setelah membayar 6 angsuran, peminjam berencana melunasi sisa utang sekaligus. (a) Hitung sisa utang setelah 6 angsuran. (b) Hitung total pembayaran bila rencana itu dijalankan (6 angsuran ditambah pelunasan sisa), lalu bandingkan dengan total pembayaran bila ia tetap mengangsur sampai 12 bulan. (c) Jelaskan mengapa melunasi lebih awal menghemat bunga.',
    answer:
      'Angsuran anuitas $A=\\dfrac{12.000.000(0{,}01)}{1-(1{,}01)^{-12}}\\approx\\text{Rp}1.066.185{,}46$. (a) Sisa utang setelah 6 angsuran sama dengan nilai sekarang 6 angsuran yang tersisa: $B_6=A\\cdot\\dfrac{1-(1{,}01)^{-6}}{0{,}01}\\approx1.066.185{,}46\\times5{,}795476\\approx\\text{Rp}6.179.052{,}77$. (b) Rencana percepatan: $6\\times1.066.185{,}46+6.179.052{,}77\\approx\\text{Rp}12.576.165{,}55$. Tetap 12 angsuran: $12\\times1.066.185{,}46\\approx\\text{Rp}12.794.225{,}57$. Selisihnya sekitar Rp218.060,02. (c) Bunga hanya dikenakan atas sisa utang selama dana masih dipinjam. Dengan melunasi lebih awal, sisa utang berhenti berbunga selama 6 bulan terakhir, sehingga bunga yang dibayar berkurang; inilah sumber penghematan.',
    explanation:
      'Kunci: menghitung anuitas, memakai rumus sisa utang $B_k=A\\dfrac{1-(1+i)^{-(n-k)}}{i}$ (nilai sekarang angsuran tersisa), membandingkan total pembayaran, dan menafsirkan penghematan sebagai hilangnya bunga pada periode yang dipangkas.',
    hints: [
      'Sisa utang setelah $k$ angsuran = nilai sekarang dari angsuran yang masih tersisa.',
      'Bandingkan $6A+B_6$ dengan $12A$.',
    ],
    competencies: ['rumus anuitas', 'sisa utang', 'pemodelan keuangan'],
  },
  {
    id: 'an-12',
    topicId: 'anuitas',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Sebuah pinjaman Rp12.000.000 dikenai bunga 1% per bulan selama 12 bulan. Bandingkan total bunga bila memakai sistem anuitas dengan sistem bunga tetap (flat), yang menghitung bunga selalu dari pokok awal. Jelaskan mengapa salah satunya lebih besar.',
    answer:
      'Sistem flat: bunga tiap bulan $=0{,}01\\times12.000.000=\\text{Rp}120.000$, sehingga total bunga $=12\\times120.000=\\text{Rp}1.440.000$. Sistem anuitas: $A=\\dfrac{12.000.000(0{,}01)}{1-(1{,}01)^{-12}}\\approx\\text{Rp}1.066.185,46$, sehingga total pembayaran $\\approx12\\times1.066.185,46=\\text{Rp}12.794.225$ dan total bunga $\\approx\\text{Rp}794.225$. Jadi total bunga flat lebih besar. Penyebabnya, pada sistem flat bunga selalu dihitung dari pokok penuh meskipun utang sudah berkurang, sedangkan pada anuitas bunga dihitung dari sisa utang yang terus menyusut sehingga bunga totalnya lebih kecil.',
    explanation:
      'Kunci jawaban membandingkan dasar perhitungan bunga (pokok awal vs sisa utang) dan menunjukkannya dengan angka pada tenor yang sama.',
    hints: [
      'Hitung total bunga flat sebagai $n \\times i \\times M$.',
      'Bandingkan dengan total pembayaran anuitas $n \\times A$ dikurangi pokok.',
    ],
    competencies: ['rumus anuitas', 'literasi keuangan', 'penalaran'],
  },
  {
    id: 'an-13',
    topicId: 'anuitas',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Pada anuitas dengan pokok $M$, suku bunga $i$ per periode, dan $n$ angsuran sebesar $A$, sisa utang setelah $k$ angsuran dapat ditulis $B_k=A\\dfrac{1-(1+i)^{-(n-k)}}{i}$. (a) Jelaskan mengapa rumus itu bermakna "nilai sekarang dari angsuran yang tersisa". (b) Tunjukkan dengan substitusi $A=\\dfrac{M i}{1-(1+i)^{-n}}$ bahwa rumus ini setara dengan $B_k=M(1+i)^k-A\\dfrac{(1+i)^k-1}{i}$. (c) Periksa bahwa pada $k=n$ diperoleh $B_n=0$.',
    answer:
      '(a) Pada saat $k$, masih ada $n-k$ angsuran yang harus dibayar, masing-masing sebesar $A$ pada waktu $k+1,k+2,\\dots,n$. Nilai sekarang (pada waktu $k$) angsuran-angsuran itu adalah $A(1+i)^{-1}+A(1+i)^{-2}+\\cdots+A(1+i)^{-(n-k)}$, yaitu deret geometri dengan rasio $(1+i)^{-1}$. Jumlahnya $A\\dfrac{1-(1+i)^{-(n-k)}}{i}$, tepat sama dengan $B_k$: sisa utang sekarang setara dengan seluruh pembayaran yang akan datang. (b) Substitusikan $M=A\\dfrac{1-(1+i)^{-n}}{i}$ ke $M(1+i)^k$: $B_k=A\\dfrac{(1+i)^k-(1+i)^{k-n}}{i}-A\\dfrac{(1+i)^k-1}{i}=A\\dfrac{1-(1+i)^{-(n-k)}}{i}$. Jadi kedua bentuk setara. (c) Untuk $k=n$: $B_n=A\\dfrac{1-(1+i)^{0}}{i}=A\\cdot\\dfrac{0}{i}=0$, sehingga utang lunas setelah angsuran terakhir.',
    explanation:
      'Kunci: menafsirkan sisa utang sebagai jumlah nilai sekarang angsuran tersisa (deret geometri), melakukan substitusi aljabar untuk membuktikan kesetaraan kedua rumus, dan memeriksa kasus batas $k=n$.',
    hints: [
      'Gunakan jumlah deret geometri $a\\dfrac{1-r^{m}}{1-r}$ pada $r=(1+i)^{-1}$.',
      'Substitusikan $M$ dari hubungan $M=A\\dfrac{1-(1+i)^{-n}}{i}$.',
    ],
    competencies: ['rumus anuitas', 'sisa utang', 'pembuktian'],
  },
];
