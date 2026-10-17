import type { Question } from '@/types/content';

export const statistikDalamKehidupanQuestions: Question[] = [
  {
    id: 'sdk-01',
    topicId: 'statistik-dalam-kehidupan',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'cepat',
    prompt: 'Diberikan data $5, 6, 6, 7, 7, 7, 8, 10$. Mean data tersebut adalah …',
    options: [
      { key: 'A', text: '$6$' },
      { key: 'B', text: '$8$' },
      { key: 'C', text: '$7{,}5$' },
      { key: 'D', text: '$7$' },
    ],
    answer: 'D',
    explanation:
      'Jumlah data $=5+6+6+7+7+7+8+10=56$ dan banyak data $=8$, sehingga mean $=\\dfrac{56}{8}=7$ (opsi D). Opsi A ($6$) sekadar menebak nilai yang sering muncul. Opsi B ($8$) memakai nilai ekstrem, bukan rata-rata. Opsi C ($7{,}5$) keliru mengambil rata-rata nilai terkecil $5$ dan terbesar $10$.',
    hints: [
      'Jumlahkan semua nilai terlebih dahulu, lalu bagi dengan banyak data.',
      'Banyak data adalah $8$; nilai $7$ yang muncul tiga kali tetap dihitung tiga kali.',
      'Mean $=\\dfrac{\\text{jumlah semua nilai}}{\\text{banyak data}}$.',
    ],
    competencies: ['mean'],
  },
  {
    id: 'sdk-02',
    topicId: 'statistik-dalam-kehidupan',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'konsep',
    prompt:
      'Ukuran pemusatan yang paling terpengaruh oleh adanya satu nilai ekstrem (pencilan) adalah …',
    options: [
      { key: 'A', text: 'Median' },
      { key: 'B', text: 'Modus' },
      { key: 'C', text: 'Mean' },
      { key: 'D', text: 'Kuartil' },
    ],
    answer: 'C',
    explanation:
      'Opsi C benar: mean menjumlahkan seluruh nilai sehingga satu nilai ekstrem langsung menariknya. Opsi A salah karena median hanya bergantung pada posisi tengah data terurut. Opsi B salah karena modus hanya bergantung pada frekuensi, bukan besar nilainya. Opsi D salah karena kuartil juga ditentukan oleh posisi, sehingga lebih tahan terhadap pencilan.',
    hints: [
      'Ukuran mana yang menggunakan seluruh nilai dalam perhitungannya?',
      'Median dan modus hanya bergantung pada posisi atau frekuensi, sedangkan mean memakai besar setiap nilai.',
    ],
    competencies: ['mean', 'pencilan'],
  },
  {
    id: 'sdk-03',
    topicId: 'statistik-dalam-kehidupan',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'cepat',
    prompt: 'Tentukan modus dari data $4, 4, 5, 6, 6, 6, 7, 9$.',
    answer: '6',
    acceptedAnswers: ['6'],
    explanation:
      'Nilai $6$ muncul tiga kali, lebih sering daripada nilai lain, sehingga modusnya adalah $6$.',
    hints: [
      'Cari nilai yang paling sering muncul.',
      'Hitung berapa kali setiap nilai muncul, lalu bandingkan frekuensinya.',
    ],
    competencies: ['modus'],
  },
  {
    id: 'sdk-04',
    topicId: 'statistik-dalam-kehidupan',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'konsep',
    prompt:
      'Gaji bulanan lima karyawan adalah Rp3.000.000; Rp3.000.000; Rp3.200.000; Rp3.500.000; dan Rp25.000.000. Ukuran pemusatan yang lebih tepat untuk menggambarkan gaji karyawan biasa adalah …',
    answer: 'median',
    acceptedAnswers: ['median', 'Median', 'nilai tengah'],
    explanation:
      'Ada satu gaji yang sangat besar (Rp25.000.000) sebagai pencilan. Median, yaitu nilai tengah Rp3.200.000, lebih mewakili karyawan biasa daripada mean yang terangkat menjadi Rp7.540.000.',
    hints: [
      'Perhatikan adanya satu nilai yang jauh lebih besar daripada yang lain.',
      'Mean terangkat oleh nilai ekstrem, sedangkan median tetap di posisi tengah.',
    ],
    competencies: ['pemilihan ukuran', 'median'],
  },
  {
    id: 'sdk-05',
    topicId: 'statistik-dalam-kehidupan',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'evaluasi',
    prompt:
      'Waktu layar harian (jam) delapan siswa: $2, 3, 3, 4, 4, 4, 5, 15$. Seorang siswa menyimpulkan, "rata-ratanya $5$ jam, jadi hampir semua siswa bermain selama $5$ jam." Mengapa kesimpulan itu kurang tepat?',
    options: [
      { key: 'A', text: 'Mean dihitung tanpa membagi dengan banyak data.' },
      { key: 'B', text: 'Modus selalu lebih penting daripada mean.' },
      { key: 'C', text: 'Nilai $15$ seharusnya dibuang dari data.' },
      {
        key: 'D',
        text: 'Median $4$ jam lebih mewakili data; mean terangkat pencilan $15$.',
      },
    ],
    answer: 'D',
    explanation:
      'Jumlah data $=40$, mean $=\\dfrac{40}{8}=5$, sedangkan median $=\\dfrac{4+4}{2}=4$, sehingga opsi D benar. Opsi A salah karena mean memang sudah dibagi banyak data. Opsi B salah karena modus tidak selalu lebih penting daripada mean. Opsi C salah karena pencilan tetap bagian data dan tidak otomatis dibuang.',
    hints: ['Hitung median data terlebih dahulu.', 'Lihat pengaruh nilai $15$ terhadap mean.'],
    competencies: ['penalaran statistik', 'pencilan'],
  },
  {
    id: 'sdk-06',
    topicId: 'statistik-dalam-kehidupan',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt:
      'Kelas A berisi $30$ siswa dengan rata-rata nilai $72$, dan Kelas B berisi $20$ siswa dengan rata-rata nilai $84$. Rata-rata nilai gabungan kedua kelas adalah …',
    options: [
      { key: 'A', text: '$80$' },
      { key: 'B', text: '$78$' },
      { key: 'C', text: '$79{,}2$' },
      { key: 'D', text: '$76{,}8$' },
    ],
    answer: 'D',
    explanation:
      'Rata-rata gabungan $=\\dfrac{30\\cdot 72+20\\cdot 84}{30+20}=\\dfrac{3840}{50}=76{,}8$ (opsi D). Opsi A ($80$) keliru menjumlahkan rata-rata tanpa memperhatikan bobot. Opsi B ($78$) adalah rata-rata sederhana $(72+84)/2$ yang mengabaikan ukuran kelas. Opsi C ($79{,}2$) muncul bila bobot tertukar, memakai $20$ untuk Kelas A dan $30$ untuk Kelas B.',
    hints: ['Gunakan bobot ukuran kelompok, bukan rata-rata kedua mean.', 'Banyak siswa tiap kelas berperan sebagai bobot pada penjumlahan nilai.'],
    competencies: ['rata-rata gabungan'],
  },
  {
    id: 'sdk-07',
    topicId: 'statistik-dalam-kehidupan',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt:
      'Diberikan data $12, 15, 15, 16, 18, 20, 22, 45$. Tentukan jangkauan interkuartil (IQR) data tersebut.',
    answer: '6',
    acceptedAnswers: ['6'],
    explanation:
      '$Q_1=$ median dari $12, 15, 15, 16$ $=15$; $Q_3=$ median dari $18, 20, 22, 45$ $=21$. Maka IQR $=Q_3-Q_1=21-15=6$.',
    hints: ['Bagi data menjadi dua bagian sama banyak setelah diurutkan.', 'IQR $=Q_3-Q_1$.'],
    competencies: ['kuartil', 'IQR'],
  },
  {
    id: 'sdk-08',
    topicId: 'statistik-dalam-kehidupan',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'kontekstual',
    prompt:
      'Sebuah perusahaan memiliki $9$ karyawan bergaji Rp4.000.000 per bulan dan $1$ direktur bergaji Rp40.000.000 per bulan. Tentukan median gaji bulanan (dalam rupiah).',
    answer: '4000000',
    acceptedAnswers: ['4000000', '4.000.000', '4.000.000,00', '4000000,00', 'Rp4.000.000', 'Rp4.000.000,00', '4 juta'],
    explanation:
      'Data terurut memuat sembilan nilai Rp4.000.000 dan satu nilai Rp40.000.000. Karena $n=10$, median adalah rata-rata data ke-5 dan ke-6, yaitu $\\dfrac{4.000.000+4.000.000}{2}=4.000.000$. Jadi median gajinya Rp4.000.000.',
    hints: ['Urutkan data lalu cari dua nilai tengah.', 'Karena $n=10$ (genap), median adalah rata-rata data ke-$5$ dan ke-$6$.'],
    competencies: ['median', 'kontekstual'],
  },
  {
    id: 'sdk-09',
    topicId: 'statistik-dalam-kehidupan',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'kontekstual',
    prompt:
      'Sebuah grafik batang menunjukkan penjualan Januari $100$ unit dan Februari $105$ unit, tetapi sumbu vertikalnya dimulai dari $95$ sehingga batang Februari tampak dua kali lebih tinggi daripada batang Januari. Jelaskan mengapa grafik ini menyesatkan dan bagaimana penyajian yang jujur memperbaikinya.',
    answer:
      'Kenaikan sebenarnya hanya $5$ dari $100$, yaitu $5\\%$. Karena sumbu dimulai dari $95$, tinggi batang Januari hanya $100-95=5$ satuan dan batang Februari menjadi $105-95=10$ satuan, sehingga perbedaan kecil tampak dua kali lipat. Grafik menyesatkan karena memotong sumbu, bukan karena datanya salah. Penyajian yang jujur memulai sumbu dari $0$, menjaga skala tetap, atau menuliskan angka sebenarnya secara jelas agar pembaca menilai perbedaan secara proporsional.',
    explanation:
      'Kunci jawaban: mengenali pemotongan sumbu sebagai sumber distorsi dan mengusulkan skala mulai dari nol.',
    hints: ['Hitung berapa persen kenaikan sebenarnya.', 'Perhatikan titik awal sumbu vertikal.'],
    competencies: ['grafik menyesatkan', 'penalaran'],
    rubric: [
      'Menyebut pemotongan sumbu vertikal sebagai sumber distorsi',
      'Menghitung kenaikan sebenarnya hanya $5\\%$',
      'Mengusulkan sumbu dimulai dari nol atau skala tetap',
      'Menegaskan datanya benar, yang keliru penyajiannya',
    ],
  },
  {
    id: 'sdk-10',
    topicId: 'statistik-dalam-kehidupan',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'evaluasi',
    prompt:
      'Rumah sakit A melaporkan tingkat kesembuhan $90\\%$ dari $20$ pasien, sedangkan rumah sakit B melaporkan $80\\%$ dari $200$ pasien. Sebuah artikel menyimpulkan "rumah sakit A lebih baik daripada rumah sakit B". (a) Mengapa perbandingan langsung kedua persentase itu kurang adil? (b) Ukuran tambahan apa yang perlu diperhatikan selain persentase?',
    answer:
      '(a) Persentase tanpa menyebut banyak pasien dapat menyesatkan. RS A hanya menangani $20$ pasien, sehingga $90\\%$ berasal dari $18$ pasien dan sangat sensitif terhadap satu-dua kasus, sedangkan RS B menangani $200$ pasien dengan $160$ pasien sembuh. Ukuran sampel yang kecil membuat persentase kurang stabil, sehingga membandingkan persentase saja tidak adil. (b) Perlu memperhatikan banyaknya pasien (ukuran sampel), tingkat keparahan kasus yang ditangani, dan ketidakpastian hasil; bila mungkin bandingkan kelompok pasien yang setara sebelum menyimpulkan mana yang lebih baik.',
    explanation:
      'Kunci jawaban: menyadari bahwa persentase tanpa ukuran sampel menyesatkan, menekankan ketidakstabilan sampel kecil, dan menyebut ukuran tambahan seperti banyak pasien serta komposisi kasus.',
    hints: [
      'Perhatikan banyak pasien di balik tiap persentase, bukan hanya angkanya.',
      'Sampel kecil membuat persentase mudah berubah; sebutkan juga ukuran sampel dan tingkat keparahan kasus.',
    ],
    competencies: ['evaluasi klaim', 'ukuran sampel', 'penalaran statistik'],
    rubric: [
      'Menjelaskan persentase tanpa ukuran sampel dapat menyesatkan',
      'Menyebut sampel kecil ($20$ pasien) membuat persentase kurang stabil',
      'Menyebut ukuran tambahan seperti banyak pasien atau tingkat keparahan kasus',
    ],
  },
  {
    id: 'sdk-11',
    topicId: 'statistik-dalam-kehidupan',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'kontekstual',
    prompt:
      'Rata-rata berat delapan karung beras adalah $12$ kg. Setelah satu karung diambil, rata-rata berat karung yang tersisa menjadi $11{,}5$ kg. Tentukan berat karung yang diambil.',
    answer: '15,5',
    acceptedAnswers: ['15,5', '15.5', '15,50', '15.50', '31/2'],
    explanation:
      'Jumlah berat delapan karung $=8\\times 12=96$ kg. Jumlah berat tujuh karung yang tersisa $=7\\times 11{,}5=80{,}5$ kg. Berat karung yang diambil $=96-80{,}5=15{,}5$ kg.',
    hints: [
      'Ubah rata-rata menjadi jumlah total sebelum dan sesudah pengambilan.',
      'Berat karung yang diambil adalah selisih jumlah berat awal dan jumlah berat sisa.',
    ],
    competencies: ['mean', 'penalaran'],
  },
  {
    id: 'sdk-12',
    topicId: 'statistik-dalam-kehidupan',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Sebuah kelas berisi $30$ siswa dengan rata-rata nilai $76$. Setelah remedial, $4$ siswa yang semula bernilai $60$ memperoleh nilai baru sehingga rata-rata kelas menjadi $78$. (a) Tentukan jumlah nilai kelas sebelum dan sesudah remedial. (b) Tentukan rata-rata nilai baru keempat siswa tersebut.',
    answer:
      '(a) Jumlah sebelum $=30\\times76=2280$ dan jumlah sesudah $=30\\times78=2340$. (b) Kenaikan jumlah nilai adalah $2340-2280=60$. Jumlah nilai awal keempat siswa $=4\\times60=240$, sehingga jumlah nilai barunya $=240+60=300$. Rata-rata nilai baru keempat siswa $=\\dfrac{300}{4}=75$.',
    explanation:
      'Kunci: mengubah rata-rata menjadi jumlah total, mencari perubahan jumlah, lalu menghitung rata-rata baru kelompok kecil.',
    hints: ['Ubah rata-rata kelas menjadi total nilai.', 'Selisih total nilai berasal dari perubahan keempat siswa.'],
    competencies: ['mean', 'pemodelan', 'interpretasi'],
    rubric: [
      'Menghitung jumlah nilai sebelum $2280$ dan sesudah $2340$',
      'Menemukan kenaikan jumlah nilai sebesar $60$',
      'Menghitung jumlah nilai baru keempat siswa $300$',
      'Menyimpulkan rata-rata baru keempat siswa $75$',
    ],
  },
  {
    id: 'sdk-13',
    topicId: 'statistik-dalam-kehidupan',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'pemodelan',
    prompt:
      'Sebuah tim mengikuti tiga babak lomba. Rata-rata skor tiga babak adalah $10$. Skor babak pertama $8$ dan babak kedua $11$. Tentukan skor babak ketiga dengan menyusun model rata-ratanya.',
    answer: '11',
    acceptedAnswers: ['11'],
    explanation:
      'Model rata-rata: $\\bar{x}=\\dfrac{8+11+x}{3}=10$. Maka $19+x=30$, sehingga $x=11$. Jadi skor babak ketiga adalah $11$.',
    hints: [
      'Jumlah tiga skor $=$ rata-rata $\\times$ banyak babak.',
      'Jumlah skor yang dibutuhkan adalah $3\\times10=30$; kurangi dua skor yang sudah diketahui.',
    ],
    competencies: ['mean', 'pemodelan'],
  },
  {
    id: 'sdk-14',
    topicId: 'statistik-dalam-kehidupan',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Sebuah sekolah memiliki dua kelas. Kelas X-A berisi $32$ siswa dengan rata-rata nilai $78$, dan X-B berisi $28$ siswa dengan rata-rata $72$. (a) Susun model rata-rata gabungan dan hitung nilainya. (b) Setelah program tambahan, rata-rata X-A naik menjadi $80$ sedangkan X-B tetap. Hitung rata-rata gabungan baru. (c) Jelaskan mengapa kenaikan rata-rata gabungan lebih kecil daripada kenaikan kelas X-A.',
    answer:
      '(a) Rata-rata gabungan $=\\dfrac{32\\cdot78+28\\cdot72}{32+28}=\\dfrac{2.496+2.016}{60}=\\dfrac{4.512}{60}=75{,}2$. (b) Setelah kenaikan: $\\dfrac{32\\cdot80+28\\cdot72}{60}=\\dfrac{2.560+2.016}{60}=\\dfrac{4.576}{60}\\approx76{,}27$. (c) Rata-rata X-A naik $2$ poin, tetapi kenaikan rata-rata gabungan hanya sekitar $76{,}27-75{,}2=1{,}07$ poin. Hal ini karena X-A hanya $\\dfrac{32}{60}\\approx53\\%$ dari seluruh siswa, sedangkan X-B yang tidak berubah menahan kenaikan; semakin kecil porsi kelompok yang berubah, semakin kecil pengaruhnya pada rata-rata gabungan.',
    explanation:
      'Kunci: memodelkan rata-rata gabungan berbobot ukuran kelas, menghitung perubahan, lalu menafsirkan pengaruh porsi kelompok.',
    hints: [
      'Rata-rata gabungan adalah jumlah seluruh nilai dibagi jumlah seluruh siswa.',
      'Perhatikan bobot banyak siswa tiap kelompok, bukan sekadar rata-ratanya.',
    ],
    competencies: ['rata-rata gabungan', 'pemodelan', 'interpretasi'],
    rubric: [
      'Menghitung rata-rata gabungan awal $75{,}2$',
      'Menghitung rata-rata gabungan baru sekitar $76{,}27$',
      'Menjelaskan pengaruh porsi kelas X-A sebesar $\\dfrac{32}{60}$',
      'Menyimpulkan kenaikan gabungan lebih kecil daripada kenaikan X-A',
    ],
  },
  {
    id: 'sdk-15',
    topicId: 'statistik-dalam-kehidupan',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Dua kelas masing-masing berisi $10$ siswa memiliki rata-rata nilai sama, yaitu $75$. Data kelas P adalah $70,71,72,73,74,76,77,78,79,80$, sedangkan data kelas Q adalah $45,45,60,70,75,75,80,90,105,105$. (a) Jelaskan mengapa rata-rata saja tidak cukup untuk membandingkan kedua kelas. (b) Hitung jangkauan masing-masing kelas. (c) Ukuran penyebaran apa yang lebih informatif, dan apa kesimpulanmu tentang keragaman nilai kedua kelas?',
    answer:
      '(a) Meskipun rata-ratanya sama, sebaran nilainya jauh berbeda; rata-rata tidak menunjukkan apakah nilai siswa berdekatan atau terpencar, sehingga dua kelas dengan rata-rata sama bisa sangat berbeda mutunya. (b) Jangkauan kelas P $=80-70=10$, sedangkan jangkauan kelas Q $=105-45=60$. (c) Jangkauan (atau lebih baik lagi simpangan baku dan IQR) menunjukkan penyebaran. Kelas Q jauh lebih menyebar: selisih nilai terendah dan tertinggi mencapai $60$ poin, menandakan kemampuan yang sangat beragam, sedangkan kelas P relatif seragam dengan jangkauan hanya $10$ poin. Jadi siswa di kelas Q lebih beragam dan "nilai rata-rata" tidak mewakili sebagian besar siswa sebaik pada kelas P.',
    explanation:
      'Kunci: menegaskan keterbatasan mean, menghitung ukuran sebaran, dan menafsirkan makna keragaman data pada dua kelas.',
    hints: [
      'Rata-rata yang sama tidak menjamin sebaran yang sama.',
      'Jangkauan $=$ nilai terbesar $-$ nilai terkecil.',
    ],
    competencies: ['ukuran penyebaran', 'jangkauan', 'penalaran'],
    rubric: [
      'Menegaskan rata-rata sama tidak menjamin sebaran sama',
      'Menghitung jangkauan kelas P $=10$ dan kelas Q $=60$',
      'Menyebut jangkauan, simpangan baku, atau IQR sebagai ukuran sebaran',
      'Menyimpulkan kelas Q lebih beragam daripada kelas P',
    ],
  },
  {
    id: 'sdk-16',
    topicId: 'statistik-dalam-kehidupan',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'kontekstual',
    prompt:
      'Sebuah survei kesehatan mencatat durasi tidur harian $40$ siswa seperti pada tabel berikut. Rata-rata durasi tidur siswa tersebut adalah …',
    table: {
      caption: 'Durasi tidur harian 40 siswa.',
      headers: ['Durasi tidur (jam)', 'Frekuensi'],
      rows: [
        ['kurang dari 6', '4'],
        ['6–7', '10'],
        ['7–8', '16'],
        ['8–9', '8'],
        ['lebih dari 9', '2'],
      ],
    },
    options: [
      { key: 'A', text: '$7{,}0$ jam' },
      { key: 'B', text: '$7{,}35$ jam' },
      { key: 'C', text: '$7{,}5$ jam' },
      { key: 'D', text: '$8{,}0$ jam' },
    ],
    answer: 'B',
    explanation:
      'Dengan titik tengah $5{,}5;\\,6{,}5;\\,7{,}5;\\,8{,}5;\\,9{,}5$, diperoleh $\\sum f_ix_i=22+65+120+68+19=294$ dan $n=40$, sehingga mean $=\\dfrac{294}{40}=7{,}35$ jam (opsi B). Opsi A ($7{,}0$) keliru memakai tepi bawah kelas modus. Opsi C ($7{,}5$) hanya memakai titik tengah kelas modus dan mengabaikan kelas lain. Opsi D ($8{,}0$) membulatkan terlalu jauh dari nilai sebenarnya.',
    hints: [
      'Ganti tiap kelas dengan titik tengahnya, lalu kalikan dengan frekuensinya.',
      'Mean data berkelompok $=\\dfrac{\\sum f_ix_i}{\\sum f_i}$.',
    ],
    competencies: ['mean data berkelompok', 'kontekstual'],
  },
  {
    id: 'sdk-17',
    topicId: 'statistik-dalam-kehidupan',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'kontekstual',
    prompt:
      'Diagram kotak-garis berikut merangkum indeks kualitas udara (AQI) harian sebuah kota selama $30$ hari. Pernyataan yang benar berdasarkan diagram tersebut adalah …',
    figure: {
      svg: '<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg"><line x1="30" y1="100" x2="300" y2="100" stroke="currentColor" stroke-width="1.2"/><rect x="97.5" y="35" width="135" height="35" fill="currentColor" opacity="0.15" stroke="currentColor" stroke-width="1.6"/><line x1="165" y1="28" x2="165" y2="77" stroke="currentColor" stroke-width="2"/><line x1="30" y1="52.5" x2="97.5" y2="52.5" stroke="currentColor" stroke-width="1.4"/><line x1="232.5" y1="52.5" x2="300" y2="52.5" stroke="currentColor" stroke-width="1.4"/><line x1="30" y1="40" x2="30" y2="65" stroke="currentColor" stroke-width="1.4"/><line x1="300" y1="40" x2="300" y2="65" stroke="currentColor" stroke-width="1.4"/><text x="24" y="116" font-size="10" fill="currentColor">50</text><text x="91" y="116" font-size="10" fill="currentColor">60</text><text x="158" y="116" font-size="10" fill="currentColor">70</text><text x="226" y="116" font-size="10" fill="currentColor">80</text><text x="294" y="116" font-size="10" fill="currentColor">90</text></svg>',
      alt: 'Diagram kotak-garis indeks kualitas udara harian dengan nilai minimum 50, kuartil pertama 60, median 70, kuartil ketiga 80, dan nilai maksimum 90.',
      caption: 'Diagram kotak-garis indeks kualitas udara harian selama 30 hari.',
    },
    options: [
      { key: 'A', text: 'Median indeks kualitas udara adalah $60$.' },
      { key: 'B', text: 'Jangkauan interkuartil (IQR) data adalah $20$.' },
      { key: 'C', text: 'Jangkauan data adalah $30$.' },
      { key: 'D', text: 'Sebagian hari memiliki indeks di atas $90$.' },
    ],
    answer: 'B',
    explanation:
      'Dari diagram kotak-garis terbaca minimum $50$, $Q_1=60$, median $70$, $Q_3=80$, dan maksimum $90$. Maka IQR $=Q_3-Q_1=80-60=20$, sehingga opsi B benar. Opsi A salah karena median ada di $70$, bukan $60$. Opsi C salah karena jangkauan $=90-50=40$, bukan $30$. Opsi D salah karena titik terbesar data tepat $90$, sehingga tidak ada nilai di atasnya.',
    hints: [
      'Baca lima nilai ringkasan dari diagram: minimum, $Q_1$, median, $Q_3$, dan maksimum.',
      'IQR $=Q_3-Q_1$, sedangkan jangkauan $=$ nilai maksimum $-$ nilai minimum.',
    ],
    competencies: ['membaca diagram kotak-garis', 'IQR', 'kontekstual'],
  },
  {
    id: 'sdk-18',
    topicId: 'statistik-dalam-kehidupan',
    difficulty: 'mahir',
    type: 'multiple-choice',
    category: 'penalaran',
    prompt:
      'Lama belajar harian (jam) sepuluh siswa adalah $1, 1, 2, 2, 2, 3, 3, 4, 5, 7$. Karena kekeliruan pencatatan, data $7$ dikoreksi menjadi $4$. Pernyataan yang benar tentang mean dan median sebelum dan sesudah koreksi adalah …',
    options: [
      { key: 'A', text: 'Mean turun $0{,}3$ dan median tetap $2{,}5$.' },
      { key: 'B', text: 'Mean turun $0{,}3$ dan median turun menjadi $2$.' },
      { key: 'C', text: 'Mean tetap $3$ dan median tetap $2{,}5$.' },
      { key: 'D', text: 'Mean naik $0{,}3$ dan median tetap $2{,}5$.' },
    ],
    answer: 'A',
    explanation:
      'Jumlah data semula $30$ dengan $n=10$, sehingga mean $=3$. Setelah $7$ diganti $4$, jumlahnya menjadi $27$ dan mean $=2{,}7$, yaitu turun $0{,}3$. Urutan semula $1,1,2,2,2,3,3,4,5,7$ memiliki dua nilai tengah $2$ dan $3$, jadi median $2{,}5$; setelah koreksi urutannya $1,1,2,2,2,3,3,4,4,5$ yang tetap berpusat pada $2$ dan $3$, sehingga median tidak berubah. Jadi opsi A. Opsi B salah karena median tidak bergeser. Opsi C salah karena mean jelas berubah ketika satu data diubah. Opsi D salah arah, sebab mengganti nilai besar dengan nilai lebih kecil menurunkan mean, bukan menaikkannya.',
    hints: [
      'Ubah data menjadi jumlah total untuk menghitung mean sebelum dan sesudah koreksi.',
      'Median ditentukan dua nilai tengah setelah data diurutkan, bukan oleh besar perubahan satu data.',
    ],
    competencies: ['mean', 'median', 'penalaran'],
  },
];
