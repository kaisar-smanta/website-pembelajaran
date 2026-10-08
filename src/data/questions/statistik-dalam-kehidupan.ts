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
      { key: 'B', text: '$7$' },
      { key: 'C', text: '$7{,}5$' },
      { key: 'D', text: '$8$' },
    ],
    answer: 'B',
    explanation:
      'Jumlah data $=5+6+6+7+7+7+8+10=56$ dan banyak data $=8$, sehingga mean $=\\dfrac{56}{8}=7$.',
    hints: ['Jumlahkan semua nilai terlebih dahulu, lalu bagi dengan banyak data.'],
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
      'Mean menjumlahkan seluruh nilai sehingga satu nilai ekstrem langsung menariknya. Median hanya bergantung pada posisi tengah, dan modus pada frekuensi, sehingga keduanya jauh lebih tahan terhadap pencilan.',
    hints: ['Ukuran mana yang menggunakan seluruh nilai dalam perhitungannya?'],
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
    hints: ['Cari nilai yang paling sering muncul.'],
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
    hints: ['Perhatikan adanya satu nilai yang jauh lebih besar daripada yang lain.'],
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
      { key: 'A', text: 'Karena mean seharusnya dihitung tanpa membagi dengan banyak data.' },
      {
        key: 'B',
        text: 'Karena median $4$ jam menunjukkan sebagian besar data di sekitar $4$, sedangkan mean terangkat oleh pencilan $15$.',
      },
      { key: 'C', text: 'Karena modus selalu lebih penting daripada mean.' },
      { key: 'D', text: 'Karena nilai $15$ harus dibuang dari data.' },
    ],
    answer: 'B',
    explanation:
      'Jumlah data $=40$, mean $=\\dfrac{40}{8}=5$, sedangkan median $=\\dfrac{4+4}{2}=4$. Nilai $15$ adalah pencilan yang menarik mean ke atas, sehingga mean bukan gambaran tipikal. Median $4$ jam lebih mewakili kebiasaan siswa. Pencilan tetap bagian data dan tidak otomatis dibuang.',
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
      { key: 'A', text: '$76{,}8$' },
      { key: 'B', text: '$78$' },
      { key: 'C', text: '$79{,}2$' },
      { key: 'D', text: '$80$' },
    ],
    answer: 'A',
    explanation:
      'Rata-rata gabungan $=\\dfrac{30\\cdot 72+20\\cdot 84}{30+20}=\\dfrac{2160+1680}{50}=\\dfrac{3840}{50}=76{,}8$. Angka $78$ keliru karena mengabaikan bahwa kedua kelas berukuran berbeda.',
    hints: ['Gunakan bobot ukuran kelompok, bukan rata-rata kedua mean.'],
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
    acceptedAnswers: ['4000000', '4.000.000', 'Rp4.000.000', '4 juta'],
    explanation:
      'Data terurut memuat sembilan nilai Rp4.000.000 dan satu nilai Rp40.000.000. Karena $n=10$, median adalah rata-rata data ke-5 dan ke-6, yaitu $\\dfrac{4.000.000+4.000.000}{2}=4.000.000$. Jadi median gajinya Rp4.000.000.',
    hints: ['Urutkan data lalu cari dua nilai tengah.'],
    competencies: ['median', 'kontekstual'],
  },
  {
    id: 'sdk-09',
    topicId: 'statistik-dalam-kehidupan',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Sebuah grafik batang menunjukkan penjualan Januari $100$ unit dan Februari $105$ unit, tetapi sumbu vertikalnya dimulai dari $95$ sehingga batang Februari tampak dua kali lebih tinggi daripada batang Januari. Jelaskan mengapa grafik ini menyesatkan dan bagaimana penyajian yang jujur memperbaikinya.',
    answer:
      'Kenaikan sebenarnya hanya $5$ dari $100$, yaitu $5\\%$. Karena sumbu dimulai dari $95$, tinggi batang Januari hanya $100-95=5$ satuan dan batang Februari menjadi $105-95=10$ satuan, sehingga perbedaan kecil tampak dua kali lipat. Grafik menyesatkan karena memotong sumbu, bukan karena datanya salah. Penyajian yang jujur memulai sumbu dari $0$, menjaga skala tetap, atau menuliskan angka sebenarnya secara jelas agar pembaca menilai perbedaan secara proporsional.',
    explanation:
      'Kunci jawaban: mengenali pemotongan sumbu sebagai sumber distorsi dan mengusulkan skala mulai dari nol.',
    hints: ['Hitung berapa persen kenaikan sebenarnya.', 'Perhatikan titik awal sumbu vertikal.'],
    competencies: ['grafik menyesatkan', 'penalaran'],
  },
  {
    id: 'sdk-10',
    topicId: 'statistik-dalam-kehidupan',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'evaluasi',
    prompt:
      'Sebuah perusahaan memiliki $9$ karyawan bergaji Rp4.000.000 dan $1$ direktur bergaji Rp40.000.000. Perusahaan itu mengiklankan, "gaji rata-rata karyawan Rp7.600.000." Jelaskan mengapa angka itu dapat menyesatkan dan tentukan ukuran yang lebih jujur beserta nilainya.',
    answer:
      'Mean $=\\dfrac{9\\times 4.000.000+1\\times 40.000.000}{10}=\\dfrac{76.000.000}{10}=7.600.000$ memang benar secara hitung, tetapi terangkat oleh satu gaji direktur yang sangat besar. Data terurut memuat sembilan nilai Rp4.000.000 dan satu nilai Rp40.000.000, sehingga median $=\\dfrac{4.000.000+4.000.000}{2}=4.000.000$. Median Rp4.000.000 lebih jujur menggambarkan gaji karyawan biasa; klaim rata-rata tanpa menyebut sebaran berpotensi menyesatkan.',
    explanation:
      'Kunci jawaban: membedakan mean yang terpengaruh pencilan dari median yang lebih representatif.',
    hints: [
      'Periksa apakah ada nilai yang jauh berbeda dari yang lain.',
      'Hitung median setelah mengurutkan data.',
    ],
    competencies: ['mean vs median', 'evaluasi klaim'],
  },
  {
    id: 'sdk-11',
    topicId: 'statistik-dalam-kehidupan',
    difficulty: 'mahir',
    type: 'short-answer',
    category: 'penalaran',
    prompt:
      'Rata-rata delapan bilangan adalah $12$. Setelah satu bilangan baru ditambahkan, rata-ratanya menjadi $13$. Tentukan bilangan baru tersebut.',
    answer: '21',
    acceptedAnswers: ['21'],
    explanation:
      'Jumlah delapan bilangan $=8\\times 12=96$. Jumlah sembilan bilangan $=9\\times 13=117$. Bilangan baru $=117-96=21$.',
    hints: ['Ubah rata-rata menjadi jumlah total terlebih dahulu.', 'Bandingkan jumlah sebelum dan sesudah penambahan.'],
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
  },
];
