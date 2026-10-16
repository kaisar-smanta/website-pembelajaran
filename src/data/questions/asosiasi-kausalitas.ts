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
      'Bila $x$ menyebabkan $y$, biasanya muncul asosiasi di antara keduanya, sehingga asosiasi adalah syarat perlu. Namun asosiasi saja tidak cukup untuk menyimpulkan sebab-akibat karena bisa berasal dari variabel perancu atau kebetulan, jadi B benar. Opsi A menyamakan korelasi dengan kausalitas; opsi C salah karena dua variabel dapat berhubungan sebab-akibat tanpa asosiasi yang tampak secara linear; opsi D terlalu percaya bahwa satu diagram pencar sudah membuktikan sebab-akibat.',
    hints: [
      'Ingat semboyan "korelasi tidak menyiratkan kausalitas".',
      'Asosiasi hanya syarat perlu; belum cukup karena bisa muncul dari variabel perancu atau kebetulan.',
      'Cari opsi yang membedakan "perlu" dari "cukup" secara tepat.',
    ],
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
      'Suhu udara memengaruhi keduanya: saat cuaca panas orang lebih banyak membeli es krim sekaligus lebih banyak beraktivitas di luar rumah sehingga peluang kejahatan naik, sehingga suhu adalah variabel perancu (A). Opsi B (harga es krim) hanya berkaitan dengan penjualan es krim, bukan dengan kejahatan; opsi C (jumlah polisi) berkaitan dengan kejahatan tetapi tidak dengan penjualan es krim; opsi D (merek es krim) tidak menjelaskan pola kejahatan.',
    hints: [
      'Cari faktor ketiga yang membuat kedua hal berubah bersamaan.',
      'Faktor itu harus menjelaskan naiknya penjualan es krim sekaligus naiknya angka kejahatan.',
      'Pikirkan kondisi musiman yang mendorong keduanya pada waktu yang sama.',
    ],
    competencies: ['variabel perancu', 'korelasi semu'],
  },
  {
    id: 'ak-03',
    topicId: 'asosiasi-kausalitas',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'konsep',
    prompt:
      'Variabel ketiga yang berkaitan dengan variabel yang diduga sebagai penyebab sekaligus berkaitan dengan variabel akibat, sehingga dapat menciptakan asosiasi semu tanpa sebab-akibat langsung, disebut …',
    answer: 'variabel perancu',
    acceptedAnswers: [
      'variabel perancu',
      'confounding variable',
      'perancu',
      'variabel pengganggu',
      'faktor perancu',
    ],
    explanation:
      'Variabel seperti ini dinamakan variabel perancu (confounding variable). Ia berkaitan dengan variabel yang diduga sebagai penyebab sekaligus dengan variabel akibat, sehingga asosiasi bisa tampak meskipun tidak ada sebab-akibat langsung.',
    hints: [
      'Pikirkan variabel ketiga yang memengaruhi keduanya sekaligus.',
      'Istilahnya memuat kata "perancu" karena mengacaukan pembacaan sebab-akibat.',
      'Variabel ini berkaitan dengan yang diduga penyebab sekaligus dengan akibatnya.',
    ],
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
      'Karena peneliti hanya mengamati tanpa memberikan perlakuan atau pengacakan, studi ini bersifat observasional (A). Opsi B salah karena eksperimen acak mensyaratkan perlakuan sekaligus pengacakan; opsi C juga salah karena eksperimen terkontrol tetap memberikan perlakuan kepada subjek; opsi D (sensus) berarti mendata seluruh populasi, bukan mengamati sebagian siswa untuk meneliti hubungan dua variabel.',
    hints: [
      'Apakah peneliti mengendalikan atau memberikan perlakuan kepada subjek?',
      'Ketiadaan perlakuan dan pengacakan menandakan studi observasional.',
    ],
    competencies: ['studi observasional', 'desain penelitian'],
  },
  {
    id: 'ak-05',
    topicId: 'asosiasi-kausalitas',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Sebuah studi menemukan korelasi positif antara konsumsi kopi dan penyakit jantung. Jelaskan bagaimana kausalitas terbalik dapat menjelaskan temuan tersebut.',
    answer:
      'Kausalitas terbalik berarti arah sebab-akibat justru berlawanan dari dugaan. Mungkin penyakit jantung atau gejalanya (misalnya kelelahan atau gangguan tidur) yang membuat penderita lebih banyak minum kopi, bukan kopi yang menyebabkan penyakit jantung. Karena itu urutan waktunya harus diperiksa sebelum menyimpulkan arah sebab-akibat.',
    explanation:
      'Jawaban benar mengenali bahwa data korelasi tidak menentukan arah, sehingga penyebab bisa jadi justru akibat.',
    hints: [
      'Pikirkan apakah penyakitnya yang menyebabkan kebiasaan minum kopi.',
      'Periksa urutan waktu: mana yang terjadi lebih dahulu, kebiasaan minum kopi atau penyakitnya?',
    ],
    competencies: ['kausalitas terbalik', 'berpikir kritis'],
    rubric: [
      'Menjelaskan kausalitas terbalik sebagai arah sebab-akibat yang berlawanan dari dugaan',
      'Mengajukan penyakit atau gejalanya sebagai penyebab kebiasaan minum kopi',
      'Menyimpulkan urutan waktu perlu diperiksa sebelum menetapkan arah',
    ],
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
      'Korelasi saja tidak membuktikan kausalitas, sehingga kesimpulan yang paling tepat adalah B. Opsi A menganggap korelasi positif sudah membuktikan sebab-akibat; opsi C menyangkal adanya hubungan padahal asosiasinya ada; opsi D menggeneralisasi "selalu" tanpa bukti. Arah sebab-akibat bisa terbalik (anak yang sulit tidur menonton televisi lebih lama) atau ada variabel perancu seperti kebiasaan keluarga, jadi simpulan harus dinyatakan lebih hati-hati.',
    hints: [
      'Bukti apa yang masih diperlukan sebelum menyimpulkan sebab-akibat?',
      'Tanyakan apakah ada variabel ketiga yang memengaruhi menonton televisi sekaligus tidur.',
    ],
    competencies: ['asosiasi', 'kausalitas', 'evaluasi klaim'],
  },
  {
    id: 'ak-07',
    topicId: 'asosiasi-kausalitas',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'konsep',
    prompt:
      'Mengapa pengacakan (randomisasi) dalam sebuah eksperimen dapat menekan pengaruh variabel perancu?',
    answer:
      'Pembagian subjek secara acak membuat kelompok perlakuan dan kelompok kontrol cenderung sebanding pada semua karakteristik, baik yang diamati maupun yang tidak diamati (misalnya gaya hidup dan riwayat kesehatan). Dengan begitu pengaruh variabel perancu terbagi rata antar kelompok, sehingga perbedaan hasil lebih mungkin disebabkan oleh perlakuan.',
    explanation:
      'Inti jawaban: randomisasi menyeimbangkan variabel perancu yang mungkin tidak terukur, sehingga perbandingan kelompok menjadi lebih adil.',
    hints: [
      'Pikirkan mengapa dua kelompok yang diacak cenderung mirip.',
      'Pikirkan mengapa kelompok yang dibagi acak cenderung serupa pada faktor seperti kesehatan dan gaya hidup.',
    ],
    competencies: ['eksperimen acak', 'variabel perancu'],
    rubric: [
      'Menjelaskan pengacakan membuat kelompok perlakuan dan kontrol sebanding',
      'Menyebut variabel perancu yang diamati maupun tidak terukur menjadi seimbang',
      'Menyimpulkan perbedaan hasil lebih layak dikaitkan dengan perlakuan',
    ],
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
    rubric: [
      'Menyebut kelompok perlakuan (belajar sambil mendengarkan musik klasik)',
      'Menyebut kelompok kontrol (belajar dalam kondisi sunyi) dan menyamakan kondisi lain',
      'Menjelaskan pembagian subjek secara acak beserta tujuannya',
    ],
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
    rubric: [
      'Menguraikan rantai penalaran menghubungkan fasilitas olahraga dengan kesehatan',
      'Menyebut variabel perancu seperti pendapatan atau akses layanan kesehatan',
      'Menawarkan cara menguji klaim dengan mengontrol variabel tersebut atau eksperimen acak',
    ],
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
    hints: [
      'Bandingkan siapa yang menentukan perlakuan pada tiap jenis studi.',
      'Bandingkan siapa yang menentukan perlakuan pada eksperimen acak dan pada studi observasional.',
    ],
    competencies: ['eksperimen acak', 'kausalitas', 'penalaran'],
    rubric: [
      'Menjelaskan peneliti menentukan perlakuan dan membagi subjek secara acak',
      'Menjelaskan pengacakan menyeimbangkan variabel perancu termasuk yang tidak terukur',
      'Membandingkan dengan studi observasional yang tidak mengendalikan perlakuan dan perancu',
      'Menyimpulkan perbedaan hasil lebih layak dikaitkan dengan perlakuan',
    ],
  },
  {
    id: 'ak-11',
    topicId: 'asosiasi-kausalitas',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'konsep',
    prompt:
      'Ketika sebuah penelitian menyimpulkan bahwa akibat justru dianggap sebagai penyebab, misalnya penyakit yang membuat penderita lebih banyak minum kopi, bukan kopi yang menyebabkan penyakit, fenomena ini disebut …',
    answer: 'kausalitas terbalik',
    acceptedAnswers: [
      'kausalitas terbalik',
      'reverse causation',
      'sebab-akibat terbalik',
      'arah sebab-akibat terbalik',
      'kausalitas terbalik (reverse causation)',
    ],
    explanation:
      'Arah pengaruh yang sebenarnya berlawanan dari dugaan disebut kausalitas terbalik (reverse causation). Data korelasi tidak menentukan arah, sehingga urutan waktu perlu diperiksa.',
    hints: [
      'Perhatikan siapa yang sebenarnya lebih dahulu terjadi.',
      'Cari istilah yang menandakan arah pengaruh justru berlawanan dari dugaan.',
    ],
    competencies: ['kausalitas terbalik'],
  },
  {
    id: 'ak-12',
    topicId: 'asosiasi-kausalitas',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penalaran',
    prompt:
      'Dari 100 siswa, 60 biasa sarapan dan 40 tidak. Di antara yang sarapan, 45 lulus ujian; di antara yang tidak sarapan, 20 lulus. Berapa poin persen selisih persentase kelulusan kedua kelompok?',
    answer: '25',
    acceptedAnswers: ['25', '25%', '25 persen', '25 poin persen', '25 poin'],
    explanation:
      'Kelompok sarapan: $\\dfrac{45}{60}=75\\%$. Kelompok tidak sarapan: $\\dfrac{20}{40}=50\\%$. Selisih $=75\\%-50\\%=25$ poin persen. Selisih ini hanya menunjukkan asosiasi; masih mungkin ada variabel perancu seperti kondisi ekonomi keluarga atau kebiasaan belajar, sehingga belum cukup untuk menyimpulkan sebab-akibat.',
    hints: [
      'Hitung persentase kelulusan masing-masing kelompok terhadap banyak anggotanya.',
      'Kurangkan kedua persentase untuk memperoleh selisihnya.',
    ],
    competencies: ['asosiasi', 'membandingkan proporsi', 'penalaran'],
  },
  {
    id: 'ak-13',
    topicId: 'asosiasi-kausalitas',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'evaluasi',
    prompt:
      'Sebuah perusahaan melaporkan bahwa karyawan yang mengikuti program kebugaran **sukarela** memiliki tingkat absensi lebih rendah, lalu menyimpulkan bahwa program itu menurunkan absensi. Evaluasilah kesimpulan tersebut: sebutkan bias pemilihannya dan jelaskan bagaimana eksperimen acak dapat memperbaiki simpulan itu.',
    answer:
      'Kesimpulan itu lemah karena program bersifat sukarela, sehingga timbul bias pemilihan diri (self-selection). Karyawan yang memilih ikut program kemungkinan memang sudah lebih sehat, lebih sadar kesehatan, atau lebih disiplin, sehingga absensi rendah lebih tepat dikaitkan dengan sifat awal peserta daripada dengan program. Kelompok yang tidak ikut tidak setara sejak awal, sehingga perbandingan menjadi tidak adil. Eksperimen acak memperbaikinya dengan menempatkan karyawan secara acak ke kelompok perlakuan (ikut program) dan kelompok kontrol, sehingga perbedaan karakteristik terbagi rata dan perbedaan absensi lebih layak dikaitkan dengan program. Pengukuran sebelum-sesudah dan pengendalian faktor seperti usia dan beban kerja juga memperkuat bukti.',
    explanation:
      'Kunci jawaban mengenali self-selection sebagai variabel perancu dan menjelaskan peran pengacakan untuk membuat kelompok setara.',
    hints: [
      'Pikirkan ciri karyawan yang cenderung memilih ikut program secara sukarela.',
      'Apa yang membuat kelompok perlakuan dan kontrol setara pada eksperimen acak?',
    ],
    competencies: ['bias pemilihan', 'eksperimen acak', 'evaluasi klaim'],
    rubric: [
      'Mengenali bias pemilihan diri (self-selection) karena program bersifat sukarela',
      'Menjelaskan peserta cenderung sudah lebih sehat atau disiplin sehingga kelompok tidak setara',
      'Menjelaskan eksperimen acak membagi karakteristik secara merata ke kelompok perlakuan dan kontrol',
      'Menyebut pengukuran sebelum-sesudah atau pengendalian faktor untuk memperkuat bukti',
    ],
  },
  {
    id: 'ak-14',
    topicId: 'asosiasi-kausalitas',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'kontekstual',
    prompt:
      'Sebuah layanan pesan-antar menguji dua kelompok pengguna: kelompok A menerima notifikasi harian untuk memilih wadah guna ulang, sedangkan kelompok B tidak. Pemakaian wadah guna ulang kelompok A ternyata lebih tinggi daripada kelompok B, lalu tim menyimpulkan bahwa notifikasi itulah penyebabnya. Tanggapan yang paling tepat adalah …',
    options: [
      { key: 'A', text: 'Klaim sebab-akibat sudah terbukti karena kelompok A lebih tinggi.' },
      {
        key: 'B',
        text: 'Perbandingan dua kelompok lebih kuat daripada sebelum-sesudah, tetapi kelompok tetap perlu dibagi acak dan dipastikan tidak ada faktor lain yang berbeda sebelum menyimpulkan sebab-akibat.',
      },
      { key: 'C', text: 'Tidak ada hubungan apa pun antara notifikasi dan pemakaian wadah guna ulang.' },
      { key: 'D', text: 'Notifikasi pasti menaikkan pemakaian wadah guna ulang di semua layanan.' },
    ],
    answer: 'B',
    explanation:
      'Perbandingan dua kelompok memang lebih kuat daripada sebelum-sesudah, tetapi sebab-akibat baru layak disimpulkan bila pembagiannya acak dan tidak ada faktor lain yang berbeda, sehingga B paling tepat. Opsi A keliru karena perbedaan hasil bisa berasal dari perbedaan karakteristik pengguna antar kelompok; opsi C menyangkal asosiasi yang nyata teramati; opsi D menggeneralisasi ke semua layanan tanpa bukti. Pengacakan dan pengendalian faktor lain akan membuat klaim sebab-akibat jauh lebih kuat.',
    hints: [
      'Cari faktor ketiga yang dapat menurunkan pemakaian plastik sekaligus berkaitan dengan program.',
      'Pikirkan bagaimana kelompok pembanding (kontrol) membuat klaim sebab-akibat lebih kuat.',
    ],
    competencies: ['asosiasi', 'kausalitas', 'evaluasi klaim'],
  },
  {
    id: 'ak-15',
    topicId: 'asosiasi-kausalitas',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'kontekstual',
    prompt:
      'Sebuah survei observasional mendata kebiasaan olahraga dan tekanan darah 240 responden seperti pada tabel berikut. Pernyataan yang paling tepat berdasarkan tabel tersebut adalah …',
    table: {
      caption: 'Kebiasaan olahraga dan tekanan darah 240 responden.',
      headers: ['Kebiasaan', 'Tekanan darah normal', 'Tekanan darah tinggi'],
      rows: [
        ['Rajin berolahraga', '90', '30'],
        ['Jarang berolahraga', '60', '60'],
      ],
    },
    options: [
      {
        key: 'A',
        text: 'Ada asosiasi karena kelompok rajin berolahraga punya persentase tekanan darah normal lebih tinggi ($75\\%$ berbanding $50\\%$), tetapi survei belum membuktikan sebab-akibat.',
      },
      { key: 'B', text: 'Olahraga pasti menurunkan tekanan darah setiap orang karena asosiasinya jelas.' },
      { key: 'C', text: 'Tidak ada hubungan sama sekali antara olahraga dan tekanan darah.' },
      { key: 'D', text: 'Karena kedua kelompok berjumlah sama, persentase tidak perlu dihitung.' },
    ],
    answer: 'A',
    explanation:
      'Dari tabel, kelompok rajin berolahraga memiliki $\\dfrac{90}{120}=75\\%$ tekanan darah normal, sedangkan kelompok jarang berolahraga $\\dfrac{60}{120}=50\\%$. Selisih $25$ poin persen menunjukkan ada asosiasi, tetapi karena ini hanya survei observasional, variabel perancu seperti pola makan atau usia masih mungkin berperan sehingga sebab-akibat belum dapat disimpulkan (opsi A). Opsi B menggeneralisasi tanpa bukti percobaan; opsi C menyangkal asosiasi yang tampak pada tabel; opsi D salah karena persentase justru diperlukan untuk membandingkan kelompok.',
    hints: [
      'Hitung persentase tekanan darah normal pada tiap kelompok lebih dahulu.',
      'Asosiasi yang tampak belum otomatis berarti sebab-akibat pada studi observasional.',
    ],
    competencies: ['membaca tabel kontingensi', 'asosiasi vs kausalitas', 'evaluasi klaim'],
  },
];
