import type { Question } from '@/types/content';

export const pinjamanInvestasiQuestions: Question[] = [
  {
    id: 'pinv-01',
    topicId: 'pinjaman-investasi',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'cepat',
    prompt:
      'Pak Andi meminjam Rp10.000.000 dengan suku bunga $1{,}5\\%$ per bulan dan melunasinya dengan angsuran anuitas. Besar angsuran bunga pada bulan pertama adalah …',
    options: [
      { key: 'A', text: 'Rp150.000' },
      { key: 'B', text: 'Rp125.000' },
      { key: 'C', text: 'Rp175.000' },
      { key: 'D', text: 'Rp200.000' },
    ],
    answer: 'A',
    explanation:
      'Bunga bulan pertama dihitung dari pokok pinjaman awal, yaitu $0{,}015 \\times 10.000.000 = \\text{Rp}150.000$.',
    hints: ['Bunga periode pertama dihitung dari pokok pinjaman, bukan dari angsuran.'],
    competencies: ['anuitas', 'bunga pinjaman'],
  },
  {
    id: 'pinv-02',
    topicId: 'pinjaman-investasi',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt:
      'Sebuah pinjaman dilunasi dengan angsuran anuitas tetap Rp499.241,02 per bulan selama $24$ bulan. Total pembayaran yang dilakukan adalah …',
    options: [
      { key: 'A', text: 'Rp11.981.784' },
      { key: 'B', text: 'Rp11.500.000' },
      { key: 'C', text: 'Rp12.000.000' },
      { key: 'D', text: 'Rp12.481.000' },
    ],
    answer: 'A',
    explanation:
      'Total pembayaran $= n \\times A = 24 \\times 499.241{,}02 = 11.981.784{,}48 \\approx \\text{Rp}11.981.784$.',
    hints: ['Kalikan besar angsuran dengan banyak periode.'],
    competencies: ['total pembayaran anuitas'],
  },
  {
    id: 'pinv-03',
    topicId: 'pinjaman-investasi',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'cepat',
    prompt:
      'Pinjaman Rp10.000.000 dengan bunga $1{,}5\\%$ per bulan dilunasi dengan angsuran anuitas Rp499.241,02. Berapa sisa utang setelah angsuran pertama (dibulatkan ke rupiah terdekat)?',
    answer: '9650759',
    acceptedAnswers: ['9650759', '9.650.759', '9.650.759,00', '9650759,00', 'Rp9.650.759', 'Rp9.650.759,00'],
    explanation:
      'Bunga bulan pertama $= 0{,}015 \\times 10.000.000 = \\text{Rp}150.000$. Angsuran pokok $= 499.241{,}02 - 150.000 = \\text{Rp}349.241{,}02$. Sisa utang $= 10.000.000 - 349.241{,}02 = 9.650.758{,}98 \\approx \\text{Rp}9.650.759$.',
    hints: ['Hitung bunga bulan pertama, lalu kurangkan dari angsuran untuk memperoleh angsuran pokok.'],
    competencies: ['amortisasi', 'angsuran pokok'],
  },
  {
    id: 'pinv-04',
    topicId: 'pinjaman-investasi',
    difficulty: 'dasar',
    type: 'open-response',
    category: 'konsep',
    prompt:
      'Jelaskan mengapa total pembayaran sebuah pinjaman anuitas selalu lebih besar daripada pokok pinjaman, dan mengapa porsi bunga pada angsuran menurun dari bulan ke bulan.',
    answer:
      'Total pembayaran sama dengan $n \\times A$ dan memuat pokok ditambah bunga, sehingga selalu melampaui pokok pinjaman sebesar total bunga. Bunga setiap bulan dihitung dari sisa utang. Karena sisa utang makin kecil setelah tiap pembayaran, bunga bulan berikutnya menurun. Karena angsuran $A$ tetap, bagian pokok (yaitu $A$ dikurangi bunga) justru makin besar. Jadi porsi bunga menyusut dan porsi pokok menguat dari bulan ke bulan.',
    explanation:
      'Kunci jawaban: mengaitkan total pembayaran dengan $n \\times A$, serta menjelaskan bahwa bunga dihitung dari sisa utang yang terus menurun.',
    hints: [
      'Ingat bahwa total pembayaran $= n \\times A$.',
      'Bunga tiap bulan dihitung dari sisa utang periode sebelumnya.',
    ],
    competencies: ['konsep anuitas', 'penalaran'],
  },
  {
    id: 'pinv-05',
    topicId: 'pinjaman-investasi',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'kontekstual',
    prompt:
      'Seseorang membandingkan dua penawaran pinjaman Rp10.000.000: Penawaran A bunga $1{,}25\\%$ per bulan selama $36$ bulan; Penawaran B bunga $1{,}5\\%$ per bulan selama $24$ bulan. Pernyataan yang benar tentang total bunga adalah …',
    options: [
      { key: 'A', text: 'Total bunga A lebih kecil daripada B.' },
      { key: 'B', text: 'Total bunga B lebih kecil daripada A.' },
      { key: 'C', text: 'Total bunga keduanya sama.' },
      { key: 'D', text: 'Tidak dapat dibandingkan tanpa mengetahui angsuran bulanan.' },
    ],
    answer: 'B',
    explanation:
      'Penawaran A: $A = 346.653{,}29$, total $= 36 \\times 346.653{,}29 \\approx \\text{Rp}12.479.518{,}26$, bunga $\\approx \\text{Rp}2.479.518$. Penawaran B: $A = 499.241{,}02$, total $= \\text{Rp}11.981.784{,}48$, bunga $\\approx \\text{Rp}1.981.784$. Jadi total bunga B lebih kecil meskipun suku bunganya per bulan lebih besar, karena tenornya lebih pendek.',
    hints: ['Hitung total pembayaran tiap penawaran, lalu kurangi pokoknya.'],
    competencies: ['membandingkan pinjaman', 'total bunga'],
  },
  {
    id: 'pinv-06',
    topicId: 'pinjaman-investasi',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt:
      'Seseorang menabung Rp500.000 setiap bulan dengan bunga $0{,}5\\%$ per bulan. Berapa saldo akhir setelah $24$ bulan (dibulatkan ke ribuan rupiah terdekat)?',
    answer: '12716000',
    acceptedAnswers: ['12716000', '12.716.000', '12.716.000,00', '12716000,00', 'Rp12.716.000', 'Rp12.716.000,00', '12715978'],
    explanation:
      '$FV = A \\cdot \\dfrac{(1+i)^{n}-1}{i} = 500.000 \\cdot \\dfrac{(1{,}005)^{24}-1}{0{,}005} \\approx 500.000 \\cdot 25{,}431955 \\approx \\text{Rp}12.715.978$, dibulatkan menjadi Rp12.716.000.',
    hints: ['Gunakan rumus nilai masa depan anuitas, bukan bunga majemuk biasa.'],
    competencies: ['nilai masa depan', 'investasi berkala'],
  },
  {
    id: 'pinv-07',
    topicId: 'pinjaman-investasi',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Bu Sari ingin mengumpulkan Rp50.000.000 dalam $5$ tahun melalui setoran bulanan tetap dengan bunga $0{,}75\\%$ per bulan. Tentukan besar setoran bulanan yang diperlukan dan jelaskan langkahnya.',
    answer:
      'Diketahui target $FV = 50.000.000$, $i = 0{,}0075$ per bulan, dan $n = 5 \\times 12 = 60$ bulan. Dari $FV = A \\cdot \\dfrac{(1+i)^{n}-1}{i}$, diperoleh $A = \\dfrac{FV \\cdot i}{(1+i)^{n}-1} = \\dfrac{50.000.000 \\times 0{,}0075}{(1{,}0075)^{60}-1}$. Karena $(1{,}0075)^{60} \\approx 1{,}565681$, maka $A \\approx \\dfrac{375.000}{0{,}565681} \\approx \\text{Rp}662.918$. Jadi Bu Sari perlu menabung sekitar Rp662.918 setiap bulan.',
    explanation:
      'Kunci jawaban: membalik rumus nilai masa depan untuk mencari setoran tetap dan mengubah 5 tahun menjadi 60 bulan.',
    hints: [
      'Ubah $5$ tahun menjadi $60$ bulan.',
      'Gunakan $A = \\dfrac{FV \\cdot i}{(1+i)^{n}-1}$.',
    ],
    competencies: ['pemodelan keuangan', 'nilai masa depan'],
  },
  {
    id: 'pinv-08',
    topicId: 'pinjaman-investasi',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'evaluasi',
    prompt:
      'Dua penawaran pinjaman Rp12.000.000: Penawaran A bunga $1\\%$ per bulan selama $24$ bulan dengan biaya administrasi Rp300.000; Penawaran B bunga $1{,}5\\%$ per bulan selama $18$ bulan tanpa biaya administrasi. Pernyataan yang benar tentang total biaya adalah …',
    options: [
      { key: 'A', text: 'Penawaran A lebih murah, total sekitar Rp13.557.160.' },
      { key: 'B', text: 'Penawaran B lebih murah, total sekitar Rp13.782.049.' },
      { key: 'C', text: 'Penawaran A lebih murah, totalnya tidak terpengaruh biaya administrasi.' },
      { key: 'D', text: 'Kedua penawaran sama murahnya.' },
    ],
    answer: 'B',
    explanation:
      'Penawaran A: $A = 564.881{,}67$, total angsuran $= 24 \\times 564.881{,}67 \\approx \\text{Rp}13.557.160$, ditambah administrasi Rp300.000 menjadi Rp13.857.160. Penawaran B: $A = 765.669{,}38$, total $= 18 \\times 765.669{,}38 \\approx \\text{Rp}13.782.048{,}86$. Karena Rp13.782.049 lebih kecil, penawaran B lebih murah sekitar Rp75.111.',
    hints: [
      'Hitung total angsuran tiap penawaran, lalu tambahkan biaya administrasi pada penawaran A.',
      'Bandingkan total biaya, bukan hanya suku bunga atau angsuran.',
    ],
    competencies: ['membandingkan penawaran', 'evaluasi biaya'],
  },
  {
    id: 'pinv-09',
    topicId: 'pinjaman-investasi',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Sebuah pinjaman Rp20.000.000 dikenai bunga $1\\%$ per bulan. Hitung angsuran bulanan dan total bunga untuk tenor $24$ bulan dan $48$ bulan, lalu jelaskan mengapa angsuran turun tetapi total bunga naik.',
    answer:
      'Tenor $24$ bulan: $A = \\dfrac{20.000.000 \\times 0{,}01}{1-(1{,}01)^{-24}} = \\dfrac{200.000}{0{,}212434} \\approx \\text{Rp}941.469{,}44$; total pembayaran $= 24 \\times 941.469{,}44 \\approx \\text{Rp}22.595.267$; total bunga $\\approx \\text{Rp}2.595.267$. Tenor $48$ bulan: $A = \\dfrac{200.000}{1-(1{,}01)^{-48}} = \\dfrac{200.000}{0{,}379737} \\approx \\text{Rp}526.676{,}71$; total pembayaran $\\approx \\text{Rp}25.280.482$; total bunga $\\approx \\text{Rp}5.280.482$. Angsuran turun karena pokok dicicil lebih lama, tetapi bunga berjalan selama lebih banyak periode sehingga total bunga justru naik.',
    explanation:
      'Kunci jawaban: menghitung kedua tenor dengan rumus anuitas dan menjelaskan hubungan tenor dengan total bunga.',
    hints: [
      'Gunakan rumus $A = \\dfrac{M \\cdot i}{1-(1+i)^{-n}}$ untuk tiap tenor.',
      'Total bunga $= n \\times A - M$.',
    ],
    competencies: ['anuitas', 'penalaran keuangan'],
  },
  {
    id: 'pinv-10',
    topicId: 'pinjaman-investasi',
    difficulty: 'mahir',
    type: 'short-answer',
    category: 'penalaran',
    prompt:
      'Dengan data pinjaman Rp20.000.000 dan bunga $1\\%$ per bulan, berapa selisih total bunga antara tenor $48$ bulan dan tenor $24$ bulan? Bulatkan ke ribuan rupiah terdekat.',
    answer: '2685000',
    acceptedAnswers: ['2685000', '2.685.000', '2.685.000,00', '2685000,00', 'Rp2.685.000', 'Rp2.685.000,00', '2685215'],
    explanation:
      'Total bunga tenor $48$ bulan $= 48 \\times 526.676{,}71 - 20.000.000 \\approx \\text{Rp}5.280.482{,}01$. Total bunga tenor $24$ bulan $= 24 \\times 941.469{,}44 - 20.000.000 \\approx \\text{Rp}2.595.266{,}67$. Selisih $= 5.280.482{,}01 - 2.595.266{,}67 = 2.685.215{,}34 \\approx \\text{Rp}2.685.000$.',
    hints: [
      'Hitung total bunga tiap tenor terlebih dahulu.',
      'Selisihnya adalah total bunga tenor panjang dikurangi tenor pendek.',
    ],
    competencies: ['anuitas', 'total bunga'],
  },
  {
    id: 'pinv-11',
    topicId: 'pinjaman-investasi',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'evaluasi',
    prompt:
      'Sebuah aplikasi menawarkan pinjaman Rp16.000.000 dengan angsuran tetap Rp1.500.000 per bulan selama $12$ bulan. Hitung total pembayaran dan total bunganya, lalu bandingkan dengan angsuran wajar pada bunga $1{,}5\\%$ per bulan. Berikan penilaianmu.',
    answer:
      'Total pembayaran $= 12 \\times 1.500.000 = \\text{Rp}18.000.000$, sehingga total bunga $= 18.000.000 - 16.000.000 = \\text{Rp}2.000.000$. Angsuran wajar pada $i = 0{,}015$ dan $n = 12$ adalah $A = \\dfrac{16.000.000 \\times 0{,}015}{1-(1{,}015)^{-12}} = \\dfrac{240.000}{0{,}163613} \\approx \\text{Rp}1.466.880$. Karena penawaran Rp1.500.000 lebih besar daripada Rp1.466.880, suku bunga efektif penawaran ini lebih tinggi daripada $1{,}5\\%$ per bulan. Penawaran ini lebih mahal daripada yang wajar, sehingga sebaiknya dicari pembanding lain atau dinegosiasikan.',
    explanation:
      'Kunci jawaban: menghitung total biaya dan membandingkan angsuran penawaran dengan angsuran wajar.',
    hints: [
      'Total pembayaran $= n \\times A$.',
      'Bandingkan angsuran penawaran dengan angsuran anuitas pada $1{,}5\\%$ per bulan.',
    ],
    competencies: ['evaluasi pinjaman', 'pengambilan keputusan'],
  },
];
