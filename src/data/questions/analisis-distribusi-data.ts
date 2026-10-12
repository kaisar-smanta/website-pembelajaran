import type { Question } from '@/types/content';

export const analisisDistribusiDataQuestions: Question[] = [
  {
    id: 'ad-01',
    topicId: 'analisis-distribusi-data',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'cepat',
    prompt: 'Tentukan mean dari data $4, 5, 5, 6, 6, 6, 7, 9$.',
    answer: '6',
    explanation:
      'Jumlah data $=4+5+5+6+6+6+7+9=48$ dan banyak data $n=8$, sehingga mean $=\\dfrac{48}{8}=6$.',
    hints: ['Jumlahkan semua nilai lalu bagi dengan banyak data.'],
    competencies: ['mean data tunggal'],
  },
  {
    id: 'ad-02',
    topicId: 'analisis-distribusi-data',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'konsep',
    prompt: 'Modus dari data $4, 5, 5, 6, 6, 6, 7, 9$ adalah …',
    options: [
      { key: 'A', text: '$5$' },
      { key: 'B', text: '$7$' },
      { key: 'C', text: '$6{,}5$' },
      { key: 'D', text: '$6$' },
    ],
    answer: 'D',
    explanation:
      'Nilai $6$ muncul tiga kali, lebih sering daripada nilai lain, sehingga modusnya $6$ (opsi D). Opsi A ($5$) hanya muncul dua kali. Opsi B ($7$) muncul sekali. Opsi C ($6{,}5$) adalah rata-rata dua nilai tengah, yaitu median, bukan modus.',
    hints: ['Modus adalah nilai yang paling sering muncul.'],
    competencies: ['modus'],
  },
  {
    id: 'ad-03',
    topicId: 'analisis-distribusi-data',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'cepat',
    prompt: 'Tentukan jangkauan dari data $4, 5, 5, 6, 6, 6, 7, 9$.',
    answer: '5',
    explanation: 'Jangkauan $=x_{\\max}-x_{\\min}=9-4=5$.',
    hints: ['Kurangi nilai terbesar dengan nilai terkecil.'],
    competencies: ['jangkauan'],
  },
  {
    id: 'ad-04',
    topicId: 'analisis-distribusi-data',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt: 'Tentukan jangkauan interkuartil (IQR) dari data $4, 5, 5, 6, 6, 6, 7, 9$.',
    answer: '1,5',
    acceptedAnswers: ['1.5', '3/2', '1,5', '1,50', '1.50'],
    explanation:
      'Kuartil bawah $Q_1=5$ (median dari $4,5,5,6$) dan kuartil atas $Q_3=6{,}5$ (median dari $6,6,7,9$), sehingga $\\text{IQR}=6{,}5-5=1{,}5$.',
    hints: ['Bagi data menjadi dua bagian sama banyak terlebih dahulu.', 'IQR $=Q_3-Q_1$.'],
    competencies: ['kuartil', 'IQR'],
  },
  {
    id: 'ad-05',
    topicId: 'analisis-distribusi-data',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penalaran',
    prompt:
      'Diberikan data $3, 4, 5, 5, 6, 6, 7, 8, 10, 16$. Batas atas untuk menentukan pencilan dengan aturan $1{,}5\\times\\text{IQR}$ adalah …',
    options: [
      { key: 'A', text: '$3{,}0$' },
      { key: 'B', text: '$8{,}0$' },
      { key: 'C', text: '$15{,}5$' },
      { key: 'D', text: '$12{,}5$' },
    ],
    answer: 'D',
    explanation:
      '$Q_1=5$ (median dari $3,4,5,5,6$) dan $Q_3=8$ (median dari $6,7,8,10,16$), sehingga IQR $=3$ dan batas atas $=Q_3+1{,}5\\times\\text{IQR}=8+4{,}5=12{,}5$ (opsi D). Opsi A ($3{,}0$) keliru memakai IQR sebagai batas atas. Opsi B ($8{,}0$) hanya memakai $Q_3$ tanpa menambahkan $1{,}5\\times\\text{IQR}$. Opsi C ($15{,}5$) keliru memakai $2{,}5\\times\\text{IQR}$.',
    hints: ['Hitung $Q_1$ dan $Q_3$ lebih dahulu.', 'Batas atas $=Q_3+1{,}5\\times\\text{IQR}$.'],
    competencies: ['pencilan', 'IQR'],
  },
  {
    id: 'ad-06',
    topicId: 'analisis-distribusi-data',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'kontekstual',
    prompt:
      'Data nilai ujian disajikan sebagai berikut: kelas $50$–$59$ frekuensi $2$; kelas $60$–$69$ frekuensi $5$; kelas $70$–$79$ frekuensi $8$; kelas $80$–$89$ frekuensi $4$; kelas $90$–$99$ frekuensi $1$. Tentukan mean data berkelompok tersebut.',
    answer: '73',
    explanation:
      'Dengan titik tengah $54{,}5; 64{,}5; 74{,}5; 84{,}5; 94{,}5$, diperoleh $\\sum f_ix_i=109+322{,}5+596+338+94{,}5=1460$ dan $\\sum f_i=20$, sehingga mean $=\\dfrac{1460}{20}=73$.',
    hints: ['Gunakan titik tengah tiap kelas.', 'Mean $=\\dfrac{\\sum f_ix_i}{\\sum f_i}$.'],
    competencies: ['mean data berkelompok'],
  },
  {
    id: 'ad-07',
    topicId: 'analisis-distribusi-data',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penalaran',
    prompt:
      'Kelas A memiliki nilai $70, 72, 75, 76, 77$ dan Kelas B memiliki nilai $40, 55, 60, 100, 115$. Keduanya berrata-rata $74$. Pernyataan yang **benar** adalah …',
    options: [
      { key: 'A', text: 'Median Kelas A adalah $60$.' },
      { key: 'B', text: 'Median Kelas B adalah $60$.' },
      { key: 'C', text: 'Kelas B lebih seragam daripada Kelas A.' },
      { key: 'D', text: 'Jangkauan Kelas A lebih besar daripada Kelas B.' },
    ],
    answer: 'B',
    explanation:
      'Median Kelas A adalah nilai tengah $75$, sehingga opsi A salah karena menyebut $60$. Median Kelas B adalah nilai tengah $60$, jadi opsi B benar. Opsi C salah karena Kelas B justru lebih menyebar, bukan lebih seragam. Opsi D salah karena jangkauan Kelas A hanya $7$, jauh lebih kecil daripada jangkauan Kelas B yang $75$.',
    hints: ['Urutkan data lalu cari nilai tengah tiap kelas.', 'Bandingkan nilai terbesar dan terkecil untuk melihat sebaran.'],
    competencies: ['median', 'membandingkan distribusi'],
  },
  {
    id: 'ad-08',
    topicId: 'analisis-distribusi-data',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'penerapan',
    prompt:
      'Dengan data berkelompok pada soal sebelumnya (frekuensi $2, 5, 8, 4, 1$ untuk kelas $50$–$59$ hingga $90$–$99$), tentukan median data tersebut.',
    answer:
      'Banyak data $n=20$, sehingga posisi median $\\dfrac{n}{2}=10$, yang berada di kelas $70$–$79$ (kumulatifnya mencapai $15$). Dengan $L=69{,}5$, $F=2+5=7$, $f=8$, dan $c=10$: median $=69{,}5+\\left(\\dfrac{10-7}{8}\\right)(10)=69{,}5+3{,}75=73{,}25$.',
    explanation:
      'Gunakan rumus median data berkelompok pada kelas yang memuat data ke-$\\dfrac{n}{2}$.',
    hints: ['Tentukan kelas yang memuat data ke-10.', 'Gunakan $L+\\left(\\dfrac{n/2-F}{f}\\right)c$.'],
    competencies: ['median data berkelompok'],
    rubric: [
      'Menentukan posisi median $\\dfrac{n}{2}=10$ dan kelas $70$–$79$ sebagai kelas median',
      'Menetapkan $L=69{,}5$, $F=7$, $f=8$, dan $c=10$ dengan benar',
      'Menyelesaikan $L+\\left(\\dfrac{n/2-F}{f}\\right)c$ hingga memperoleh $73{,}25$',
    ],
  },
  {
    id: 'ad-09',
    topicId: 'analisis-distribusi-data',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Jelaskan mengapa median lebih stabil (tahan) daripada mean ketika data mengandung nilai ekstrem. Berikan contoh singkat.',
    answer:
      'Median hanya bergantung pada posisi tengah data yang telah diurutkan, sehingga satu nilai ekstrem hanya menggeser posisi tanpa mengubah nilai tengah secara besar. Mean menjumlahkan seluruh nilai, sehingga nilai ekstrem ikut terbagi dan menarik rata-rata. Contoh: pada data $3,4,5,5,6,6,7,8,10,16$ mean $=7$; bila $16$ dibuang mean turun menjadi $6$, sedangkan nilai tengahnya tetap sekitar $6$.',
    explanation:
      'Kunci: perbedaan terletak pada apakah seluruh nilai dipakai (mean) atau hanya posisi tengah (median).',
    hints: [
      'Bandingkan cara mean dan median menggunakan nilai data.',
      'Bayangkan mengganti satu nilai dengan nilai ekstrem yang sangat besar, lalu amati mana yang lebih banyak bergeser.',
    ],
    competencies: ['ukuran pemusatan', 'penalaran statistik'],
    rubric: [
      'Menjelaskan median hanya bergantung pada nilai/posisi tengah setelah diurutkan',
      'Menjelaskan mean memakai seluruh nilai sehingga terpengaruh nilai ekstrem',
      'Memberi contoh angka bahwa mean bergeser namun median tetap',
    ],
  },
  {
    id: 'ad-10',
    topicId: 'analisis-distribusi-data',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Rata-rata lima bilangan adalah $8$. Setelah satu bilangan baru ditambahkan, rata-ratanya menjadi $9$. Tentukan bilangan baru tersebut.',
    answer:
      'Jumlah lima bilangan $=5\\times8=40$. Jumlah enam bilangan $=6\\times9=54$. Bilangan baru $=54-40=14$.',
    explanation: 'Gunakan hubungan jumlah $=$ banyak data $\\times$ rata-rata sebelum dan sesudah penambahan.',
    hints: [
      'Hitung jumlah total data sebelum dan sesudah.',
      'Jumlah $=$ banyak data $\\times$ rata-rata; kurangkan jumlah awal dari jumlah akhir untuk memperoleh bilangan baru.',
    ],
    competencies: ['mean', 'pemodelan'],
    rubric: [
      'Menghitung jumlah awal $5\\times8=40$',
      'Menghitung jumlah akhir $6\\times9=54$',
      'Menemukan bilangan baru $54-40=14$',
    ],
  },
  {
    id: 'ad-11',
    topicId: 'analisis-distribusi-data',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'evaluasi',
    prompt:
      'Dua kelas memiliki rata-rata nilai yang sama, yaitu $75$. Namun jangkauan Kelas P adalah $6$, sedangkan jangkauan Kelas Q adalah $40$. (a) Kelas mana yang datanya lebih seragam? (b) Mengapa jangkauan saja kurang andal untuk menilai sebaran, dan ukuran apa yang sebaiknya dilengkapi?',
    answer:
      '(a) Kelas P lebih seragam karena jangkauannya jauh lebih kecil, sehingga nilai-nilainya lebih rapat. (b) Jangkauan hanya memakai dua nilai ekstrem (terbesar dan terkecil), sehingga sangat sensitif terhadap pencilan dan tidak menggambarkan sebaran bagian tengah data. Sebaiknya dilengkapi dengan jangkauan interkuartil (IQR) atau simpangan baku yang memakai lebih banyak informasi dari data.',
    explanation:
      'Kunci: membandingkan keragaman dari jangkauan, lalu menyadari keterbatasan jangkauan yang hanya bergantung pada dua nilai ekstrem.',
    hints: ['Bandingkan besar jangkauan kedua kelas.', 'Ingat bahwa jangkauan hanya melihat nilai terkecil dan terbesar.'],
    competencies: ['ukuran sebaran', 'penalaran statistik', 'evaluasi'],
    rubric: [
      'Menyimpulkan Kelas P lebih seragam karena jangkauannya lebih kecil',
      'Menjelaskan jangkauan hanya memakai dua nilai ekstrem sehingga sensitif terhadap pencilan',
      'Menyarankan IQR atau simpangan baku sebagai ukuran sebaran yang lebih andal',
    ],
  },
  {
    id: 'ad-12',
    topicId: 'analisis-distribusi-data',
    difficulty: 'mahir',
    type: 'short-answer',
    category: 'kontekstual',
    prompt:
      'Nilai ulangan 20 siswa dikelompokkan: kelas $50$–$59$ frekuensi $2$; $60$–$69$ frekuensi $5$; $70$–$79$ frekuensi $8$; $80$–$89$ frekuensi $4$; $90$–$99$ frekuensi $1$. Tentukan modus data berkelompok tersebut (bulatkan ke dua angka di belakang koma).',
    answer: '73,79',
    acceptedAnswers: ['73,79', '73.79', '73,8', '73.8', '73,7857', '73.7857'],
    explanation:
      'Kelas modus adalah $70$–$79$ karena frekuensinya terbesar ($8$). Dengan $L=69{,}5$, $d_1=8-5=3$, $d_2=8-4=4$, dan $c=10$: modus $=L+\\dfrac{d_1}{d_1+d_2}c=69{,}5+\\dfrac{3}{7}(10)=69{,}5+4{,}2857\\approx73{,}79$.',
    hints: [
      'Pilih kelas dengan frekuensi terbesar.',
      'Gunakan rumus modus data berkelompok $L+\\dfrac{d_1}{d_1+d_2}c$.',
    ],
    competencies: ['modus data berkelompok', 'interpretasi'],
  },
  {
    id: 'ad-13',
    topicId: 'analisis-distribusi-data',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Misalkan setiap nilai pada suatu kumpulan data ditambah dengan konstanta $c$. Buktikan bahwa rata-ratanya bertambah $c$, tetapi simpangan bakunya tetap. Jelaskan makna hasil tersebut.',
    answer:
      'Rata-rata baru: $\\bar{x}_{\\text{baru}} = \\dfrac{1}{n}\\sum (x_i + c) = \\dfrac{1}{n}\\sum x_i + \\dfrac{1}{n}(nc) = \\bar{x} + c$. Simpangan baru setiap datum: $(x_i + c) - \\bar{x}_{\\text{baru}} = (x_i + c) - (\\bar{x} + c) = x_i - \\bar{x}$, sehingga $s_{\\text{baru}} = \\sqrt{\\dfrac{1}{n}\\sum (x_i - \\bar{x})^2} = s$. Jadi menambah konstanta menggeser seluruh data tanpa mengubah keragamannya: simpangan baku mengukur sebaran relatif terhadap rata-rata, bukan posisi mutlak data.',
    explanation:
      'Kunci jawaban menuntut penggunaan definisi mean dan simpangan baku, menunjukkan bahwa setiap simpangan tidak berubah setelah pergeseran serentak, lalu menafsirkan kemandirian simpangan baku terhadap pergeseran.',
    hints: [
      'Substitusi rata-rata baru ke bentuk simpangan $x_i + c - \\bar{x}_{\\text{baru}}$.',
      'Simpangan baku hanya bergantung pada selisih setiap nilai dengan rata-ratanya.',
    ],
    competencies: ['ukuran pemusatan', 'ukuran penyebaran', 'pembuktian'],
    rubric: [
      'Menghitung rata-rata baru $\\bar{x}+c$ dari definisi $\\dfrac{1}{n}\\sum(x_i+c)$',
      'Menunjukkan simpangan tiap datum $x_i-\\bar{x}$ tidak berubah',
      'Menyimpulkan $s$ tetap dan menafsirkan sebagai ukuran sebaran relatif',
    ],
  },
  {
    id: 'ad-14',
    topicId: 'analisis-distribusi-data',
    difficulty: 'mahir',
    type: 'short-answer',
    category: 'penerapan',
    prompt: 'Tentukan simpangan baku dari data $2, 4, 6, 8, 10$.',
    answer: '2√2',
    acceptedAnswers: ['2√2', '√8', 'akar 8', '2,83', '2.83', '2,828', '2.828'],
    explanation:
      'Rata-rata $\\bar{x}=6$. Jumlah kuadrat simpangan $=(2-6)^2+(4-6)^2+(6-6)^2+(8-6)^2+(10-6)^2=16+4+0+4+16=40$, sehingga variansi $=\\dfrac{40}{5}=8$ dan simpangan baku $=\\sqrt{8}=2\\sqrt{2}\\approx2{,}83$.',
    hints: [
      'Hitung rata-rata lebih dahulu, lalu selisih tiap datum dengan rata-rata.',
      'Simpangan baku adalah akar dari rata-rata kuadrat simpangan.',
    ],
    competencies: ['simpangan baku'],
  },
  {
    id: 'ad-15',
    topicId: 'analisis-distribusi-data',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt: 'Perhatikan boxplot nilai satu kelas berikut. Jangkauan interkuartil (IQR) data tersebut adalah …',
    figure: {
      svg: '<svg viewBox="0 0 320 130" role="img" aria-hidden="true"><line x1="30" y1="100" x2="290" y2="100" stroke="currentColor" stroke-width="1.2"/><line x1="30" y1="100" x2="30" y2="106" stroke="currentColor" stroke-width="1"/><text x="30" y="118" fill="currentColor" font-size="9" text-anchor="middle">0</text><line x1="67" y1="100" x2="67" y2="106" stroke="currentColor" stroke-width="1"/><text x="67" y="118" fill="currentColor" font-size="9" text-anchor="middle">10</text><line x1="104" y1="100" x2="104" y2="106" stroke="currentColor" stroke-width="1"/><text x="104" y="118" fill="currentColor" font-size="9" text-anchor="middle">20</text><line x1="141" y1="100" x2="141" y2="106" stroke="currentColor" stroke-width="1"/><text x="141" y="118" fill="currentColor" font-size="9" text-anchor="middle">30</text><line x1="179" y1="100" x2="179" y2="106" stroke="currentColor" stroke-width="1"/><text x="179" y="118" fill="currentColor" font-size="9" text-anchor="middle">40</text><line x1="216" y1="100" x2="216" y2="106" stroke="currentColor" stroke-width="1"/><text x="216" y="118" fill="currentColor" font-size="9" text-anchor="middle">50</text><line x1="253" y1="100" x2="253" y2="106" stroke="currentColor" stroke-width="1"/><text x="253" y="118" fill="currentColor" font-size="9" text-anchor="middle">60</text><line x1="290" y1="100" x2="290" y2="106" stroke="currentColor" stroke-width="1"/><text x="290" y="118" fill="currentColor" font-size="9" text-anchor="middle">70</text><line x1="67" y1="60" x2="253" y2="60" stroke="currentColor" stroke-width="1.2"/><line x1="67" y1="52" x2="67" y2="68" stroke="currentColor" stroke-width="1.4"/><line x1="253" y1="52" x2="253" y2="68" stroke="currentColor" stroke-width="1.4"/><rect x="104" y="45" width="93" height="30" fill="none" stroke="currentColor" stroke-width="1.4"/><line x1="141" y1="45" x2="141" y2="75" stroke="currentColor" stroke-width="1.4"/></svg>',
      alt: 'Boxplot nilai kelas pada skala 0 sampai 70: minimum 10, kuartil bawah 20, median 30, kuartil atas 45, dan maksimum 60.',
      caption: 'Boxplot nilai ulangan satu kelas.',
    },
    options: [
      { key: 'A', text: '$15$' },
      { key: 'B', text: '$25$' },
      { key: 'C', text: '$20$' },
      { key: 'D', text: '$50$' },
    ],
    answer: 'B',
    explanation:
      'Dari boxplot, $Q_1=20$ dan $Q_3=45$, sehingga $\\text{IQR}=Q_3-Q_1=45-20=25$ (opsi B). Opsi A ($15$) adalah panjang ekor atas $x_{\\max}-Q_3=60-45$. Opsi C ($20$) keliru memakai median dikurangi minimum, $30-10$. Opsi D ($50$) adalah jangkauan $x_{\\max}-x_{\\min}=60-10$, bukan IQR.',
    hints: [
      'Baca posisi $Q_1$ (tepi kiri kotak) dan $Q_3$ (tepi kanan kotak) pada skala.',
      'IQR $=Q_3-Q_1$, bukan $x_{\\max}-x_{\\min}$.',
    ],
    competencies: ['kuartil', 'IQR', 'membaca boxplot'],
  },
  {
    id: 'ad-16',
    topicId: 'analisis-distribusi-data',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'evaluasi',
    prompt:
      'Perhatikan tabel distribusi frekuensi tinggi badan $40$ siswa berikut. Pernyataan yang **benar** adalah …',
    table: {
      caption: 'Tinggi badan 40 siswa.',
      headers: ['Tinggi badan (cm)', 'Frekuensi'],
      rows: [
        ['140–149', '3'],
        ['150–159', '7'],
        ['160–169', '12'],
        ['170–179', '10'],
        ['180–189', '8'],
      ],
    },
    options: [
      { key: 'A', text: 'Modus berada pada kelas $160$–$169$.' },
      { key: 'B', text: 'Median berada pada kelas $150$–$159$.' },
      { key: 'C', text: 'Rata-rata data kurang dari $160$.' },
      { key: 'D', text: 'Kelas dengan frekuensi terkecil adalah $180$–$189$.' },
    ],
    answer: 'A',
    explanation:
      'Kelas $160$–$169$ memiliki frekuensi terbesar ($12$), sehingga opsi A benar. Opsi B salah karena data ke-$\\dfrac{40}{2}=20$ jatuh pada kelas $160$–$169$ (kumulatif $3$, $10$, lalu $22$), bukan $150$–$159$. Opsi C salah karena rata-rata berkelompok $\\approx\\dfrac{6710{,}5}{40}\\approx167{,}8$, yaitu lebih dari $160$. Opsi D salah karena frekuensi terkecil ($3$) ada pada kelas $140$–$149$.',
    hints: [
      'Modus data berkelompok ada di kelas dengan frekuensi terbesar.',
      'Posisi median adalah data ke-$\\dfrac{n}{2}$; jumlahkan frekuensi kumulatif untuk menemukan kelasnya.',
    ],
    competencies: ['modus dan median berkelompok', 'evaluasi'],
  },
];
