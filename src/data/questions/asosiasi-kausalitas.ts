import type { Question } from '@/types/content';

export const asosiasiKausalitasQuestions: Question[] = [
  {
    id: 'ak-01',
    topicId: 'asosiasi-kausalitas',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'konsep',
    prompt: 'Pernyataan yang benar tentang asosiasi dan kausalitas adalah …',
    options: [
      { key: 'A', text: 'Jika $x$ dan $y$ berasosiasi kuat, maka $x$ pasti menyebabkan $y$.' },
      {
        key: 'B',
        text: 'Asosiasi adalah syarat perlu tetapi bukan syarat cukup untuk kausalitas.',
      },
      {
        key: 'C',
        text: 'Jika dua variabel tidak berasosiasi, keduanya pasti tidak berhubungan sebab-akibat.',
      },
      { key: 'D', text: 'Kausalitas dapat disimpulkan hanya dari sebuah diagram pencar.' },
    ],
    answer: 'B',
    explanation:
      'Bila $x$ menyebabkan $y$, biasanya ada asosiasi di antara keduanya, sehingga asosiasi adalah syarat perlu. Namun asosiasi saja tidak cukup untuk menyimpulkan sebab-akibat karena bisa muncul dari variabel perancu atau kebetulan. Karena itu korelasinya tidak menyiratkan kausalitas.',
    hints: ['Ingat semboyan "korelasi tidak menyiratkan kausalitas".'],
    competencies: ['asosiasi', 'kausalitas', 'berpikir kritis'],
  },
  {
    id: 'ak-02',
    topicId: 'asosiasi-kausalitas',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'cepat',
    prompt:
      'Penjualan es krim dan angka kejahatan di suatu kota meningkat bersama pada bulan-bulan tertentu. Variabel perancu yang paling masuk akal adalah …',
    options: [
      { key: 'A', text: 'Suhu udara' },
      { key: 'B', text: 'Harga es krim' },
      { key: 'C', text: 'Jumlah polisi' },
      { key: 'D', text: 'Merek es krim yang dijual' },
    ],
    answer: 'A',
    explanation:
      'Saat cuaca panas, orang lebih banyak membeli es krim sekaligus lebih banyak beraktivitas di luar rumah sehingga peluang kejahatan naik. Suhu udara memengaruhi keduanya, sehingga menjadi variabel perancu yang menciptakan korelasi semu.',
    hints: ['Cari faktor ketiga yang membuat kedua hal berubah bersamaan.'],
    competencies: ['variabel perancu', 'korelasi semu'],
  },
  {
    id: 'ak-03',
    topicId: 'asosiasi-kausalitas',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'konsep',
    prompt:
      'Jelaskan secara singkat apa yang dimaksud dengan variabel perancu (confounding variable).',
    answer:
      'Variabel perancu adalah variabel ketiga yang berkaitan dengan variabel yang diduga sebagai penyebab sekaligus berkaitan dengan variabel akibat, sehingga dapat menciptakan asosiasi yang tidak mencerminkan hubungan sebab-akibat langsung.',
    acceptedAnswers: [
      'variabel ketiga yang memengaruhi kedua variabel',
      'variabel yang berkaitan dengan sebab dan akibat sehingga menimbulkan korelasi semu',
    ],
    explanation:
      'Penekanan jawaban ada pada dua syarat: berkaitan dengan variabel "penyebab" dan berkaitan dengan variabel "akibat", sehingga asosiasi bisa tampak tanpa sebab-akibat langsung.',
    hints: ['Pikirkan variabel ketiga yang memengaruhi keduanya sekaligus.'],
    competencies: ['variabel perancu'],
  },
  {
    id: 'ak-04',
    topicId: 'asosiasi-kausalitas',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt:
      'Seorang peneliti mengamati kebiasaan sarapan siswa dan nilai ujiannya tanpa memberikan perlakuan apa pun. Jenis studi ini adalah …',
    options: [
      { key: 'A', text: 'Studi observasional' },
      { key: 'B', text: 'Eksperimen acak' },
      { key: 'C', text: 'Eksperimen terkontrol' },
      { key: 'D', text: 'Sensus' },
    ],
    answer: 'A',
    explanation:
      'Karena peneliti hanya mengamati tanpa memberikan perlakuan atau pengacakan, studi ini bersifat observasional. Studi seperti ini dapat menunjukkan asosiasi, tetapi lebih lemah untuk menyimpulkan kausalitas dibandingkan eksperimen acak.',
    hints: ['Apakah peneliti mengendalikan atau memberikan perlakuan kepada subjek?'],
    competencies: ['studi observasional', 'desain penelitian'],
  },
  {
    id: 'ak-05',
    topicId: 'asosiasi-kausalitas',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penalaran',
    prompt:
      'Sebuah studi menemukan korelasi positif antara konsumsi kopi dan penyakit jantung. Jelaskan bagaimana kausalitas terbalik dapat menjelaskan temuan tersebut.',
    answer:
      'Kausalitas terbalik berarti arah sebab-akibat justru berlawanan dari dugaan. Mungkin penyakit jantung atau gejalanya (misalnya kelelahan atau gangguan tidur) yang membuat penderita lebih banyak minum kopi, bukan kopi yang menyebabkan penyakit jantung. Karena itu urutan waktunya harus diperiksa sebelum menyimpulkan arah sebab-akibat.',
    acceptedAnswers: [
      'penyakit atau gejalanya membuat orang lebih banyak minum kopi',
      'arah sebab-akibat berkebalikan dari dugaan',
    ],
    explanation:
      'Jawaban benar mengenali bahwa data korelasi tidak menentukan arah, sehingga penyebab bisa jadi justru akibat.',
    hints: ['Pikirkan apakah penyakitnya yang menyebabkan kebiasaan minum kopi.'],
    competencies: ['kausalitas terbalik', 'berpikir kritis'],
  },
  {
    id: 'ak-06',
    topicId: 'asosiasi-kausalitas',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'kontekstual',
    prompt:
      'Sebuah berita menulis: "Anak yang menonton televisi lebih banyak cenderung kurang tidur, maka menonton televisi menyebabkan kurang tidur." Kesimpulan yang paling tepat adalah …',
    options: [
      { key: 'A', text: 'Hubungan sebab-akibat sudah terbukti karena korelasinya positif.' },
      {
        key: 'B',
        text: 'Hubungan itu mungkin hanya asosiasi; perlu diperiksa urutan waktu dan variabel perancu.',
      },
      { key: 'C', text: 'Tidak ada hubungan apa pun antara menonton televisi dan tidur.' },
      { key: 'D', text: 'Menonton televisi selalu menyebabkan kurang tidur pada semua anak.' },
    ],
    answer: 'B',
    explanation:
      'Korelasi saja tidak membuktikan kausalitas. Pada kasus ini dapat terjadi arah sebab-akibat terbalik (anak yang sulit tidur menonton televisi lebih lama) atau ada variabel perancu seperti kebiasaan keluarga. Kesimpulan harus dinyatakan lebih hati-hati.',
    hints: ['Bukti apa yang masih diperlukan sebelum menyimpulkan sebab-akibat?'],
    competencies: ['asosiasi', 'kausalitas', 'evaluasi klaim'],
  },
  {
    id: 'ak-07',
    topicId: 'asosiasi-kausalitas',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'konsep',
    prompt:
      'Mengapa pengacakan (randomisasi) dalam sebuah eksperimen dapat menekan pengaruh variabel perancu?',
    answer:
      'Pembagian subjek secara acak membuat kelompok perlakuan dan kelompok kontrol cenderung sebanding pada semua karakteristik, baik yang diamati maupun yang tidak diamati (misalnya gaya hidup dan riwayat kesehatan). Dengan begitu pengaruh variabel perancu terbagi rata antar kelompok, sehingga perbedaan hasil lebih mungkin disebabkan oleh perlakuan.',
    acceptedAnswers: [
      'karena kelompok menjadi sebanding pada semua variabel',
      'pengaruh variabel perancu terbagi rata antar kelompok',
    ],
    explanation:
      'Inti jawaban: randomisasi menyeimbangkan variabel perancu yang mungkin tidak terukur, sehingga perbandingan kelompok menjadi lebih adil.',
    hints: ['Pikirkan mengapa dua kelompok yang diacak cenderung mirip.'],
    competencies: ['eksperimen acak', 'variabel perancu'],
  },
  {
    id: 'ak-08',
    topicId: 'asosiasi-kausalitas',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Rancang sebuah eksperimen sederhana untuk menguji apakah mendengarkan musik klasik saat belajar meningkatkan hasil tes. Sebutkan kelompok perlakuan, kelompok kontrol, dan cara pengacakan.',
    answer:
      'Pilih sejumlah siswa secara acak, lalu bagi menjadi dua kelompok. Kelompok perlakuan belajar sambil mendengarkan musik klasik, sedangkan kelompok kontrol belajar dalam kondisi sunyi. Semua kondisi lain dibuat sama, misalnya materi, waktu belajar, dan jenis tes. Pengacakan dilakukan agar kedua kelompok sebanding pada faktor seperti kemampuan awal dan kebiasaan belajar, sehingga perbedaan rata-rata nilai tes yang tersisa lebih layak dikaitkan dengan perlakuan musik klasik.',
    explanation:
      'Rancangan yang baik memiliki kelompok perlakuan, kelompok kontrol, pembagian acak, dan pengendalian kondisi lain agar perbandingan valid.',
    hints: [
      'Pastikan hanya perlakuan yang berbeda, kondisi lain disamakan.',
      'Jelaskan mengapa pembagian harus acak.',
    ],
    competencies: ['desain eksperimen', 'randomisasi', 'pemodelan'],
  },
  {
    id: 'ak-09',
    topicId: 'asosiasi-kausalitas',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'evaluasi',
    prompt:
      'Diberikan klaim: "Kota dengan lebih banyak tempat olahraga memiliki penduduk yang lebih sehat." Uraikan rantai penalaran yang mungkin, variabel perancunya, dan bagaimana kamu akan menguji klaim tersebut.',
    answer:
      'Rantai penalaran yang mungkin: kota dengan banyak tempat olahraga mendorong penduduknya berolahraga sehingga lebih sehat. Namun ada variabel perancu, misalnya pendapatan rata-rata dan akses layanan kesehatan; kota besar dan kaya cenderung memiliki lebih banyak fasilitas olahraga sekaligus layanan kesehatan yang lebih baik, sehingga kesehatan dapat terpengaruh tanpa peran tempat olahraga. Untuk mengujinya, bandingkan kota dengan tingkat pendapatan dan akses kesehatan yang serupa, atau lakukan studi yang mengontrol variabel-variabel tersebut; eksperimen acak pada individu juga dapat memberi bukti kausal yang lebih kuat.',
    explanation:
      'Jawaban benar memisahkan asosiasi dari kausalitas, menyebut variabel perancu (pendapatan/akses kesehatan), dan menawarkan cara mengontrolnya.',
    hints: [
      'Cari faktor ketiga yang memengaruhi jumlah fasilitas dan kesehatan.',
      'Kendalikan variabel tersebut saat membandingkan kota.',
    ],
    competencies: ['variabel perancu', 'evaluasi klaim', 'penalaran'],
  },
  {
    id: 'ak-10',
    topicId: 'asosiasi-kausalitas',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Jelaskan mengapa eksperimen acak dianggap memberikan bukti terkuat untuk kausalitas dibandingkan studi observasional.',
    answer:
      'Pada eksperimen acak, peneliti menentukan sendiri perlakuan dan membagi subjek secara acak ke kelompok perlakuan dan kontrol. Pengacakan membuat kedua kelompok cenderung sebanding pada semua variabel, termasuk variabel perancu yang tidak terukur, sehingga perbedaan hasil lebih mungkin benar-benar disebabkan oleh perlakuan. Pada studi observasional, peneliti tidak mengendalikan perlakuan maupun variabel perancu, sehingga asosiasi yang teramati bisa jadi semu atau arah sebab-akibatnya tidak jelas. Karena itu eksperimen acak lebih kuat untuk menetapkan sebab-akibat.',
    explanation:
      'Jawaban benar menekankan pengendalian perlakuan dan pengacakan yang menyeimbangkan variabel perancu, berbeda dengan studi observasional.',
    hints: ['Bandingkan siapa yang menentukan perlakuan pada tiap jenis studi.'],
    competencies: ['eksperimen acak', 'kausalitas', 'penalaran'],
  },
];
