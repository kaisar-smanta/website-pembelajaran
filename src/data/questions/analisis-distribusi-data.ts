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
      { key: 'B', text: '$6$' },
      { key: 'C', text: '$6{,}5$' },
      { key: 'D', text: '$7$' },
    ],
    answer: 'B',
    explanation:
      'Nilai $6$ muncul tiga kali, lebih sering daripada nilai lain ($5$ muncul dua kali), sehingga modusnya $6$.',
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
    acceptedAnswers: ['1.5', '3/2'],
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
      { key: 'A', text: '$3$' },
      { key: 'B', text: '$8$' },
      { key: 'C', text: '$12{,}5$' },
      { key: 'D', text: '$15{,}5$' },
    ],
    answer: 'C',
    explanation:
      '$Q_1=5$ (median dari $3,4,5,5,6$) dan $Q_3=8$ (median dari $6,7,8,10,16$), sehingga IQR $=3$. Batas atas $=Q_3+1{,}5\\times\\text{IQR}=8+1{,}5(3)=12{,}5$.',
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
      'Median Kelas A $=75$ dan median Kelas B $=60$, sehingga B benar. Jangkauan Kelas A $=7$ dan Kelas B $=75$, jadi Kelas B jauh lebih menyebar (C dan D salah).',
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
    hints: ['Bandingkan cara mean dan median menggunakan nilai data.'],
    competencies: ['ukuran pemusatan', 'penalaran statistik'],
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
    hints: ['Hitung jumlah total data sebelum dan sesudah.'],
    competencies: ['mean', 'pemodelan'],
  },
];
