import type { Question } from '@/types/content';

export const matriksQuestions: Question[] = [
  {
    id: 'mt-01',
    topicId: 'matriks',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'cepat',
    prompt:
      'Determinan dari matriks $A = \\begin{pmatrix} 4 & 2 \\\\ 1 & 3 \\end{pmatrix}$ adalah …',
    options: [
      { key: 'A', text: '$10$' },
      { key: 'B', text: '$14$' },
      { key: 'C', text: '$6$' },
      { key: 'D', text: '$2$' },
    ],
    answer: 'A',
    explanation:
      'Untuk $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$ berlaku $\\det(A) = ad - bc$. Maka $\\det(A) = 4(3) - 2(1) = 12 - 2 = 10$.',
    hints: ['Kalikan unsur diagonal utama lalu kurangi hasil kali diagonal lainnya.'],
    competencies: ['determinan matriks $2 \\times 2$'],
  },
  {
    id: 'mt-02',
    topicId: 'matriks',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'konsep',
    prompt:
      'Ordo dari matriks $\\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{pmatrix}$ adalah …',
    options: [
      { key: 'A', text: '$3 \\times 2$' },
      { key: 'B', text: '$2 \\times 3$' },
      { key: 'C', text: '$2 \\times 2$' },
      { key: 'D', text: '$6 \\times 1$' },
    ],
    answer: 'B',
    explanation:
      'Ordo ditulis sebagai (banyak baris) $\\times$ (banyak kolom). Matriks itu memiliki $2$ baris dan $3$ kolom, sehingga ordonya $2 \\times 3$.',
    hints: ['Hitung baris lebih dahulu, lalu kolom.'],
    competencies: ['ordo matriks'],
  },
  {
    id: 'mt-03',
    topicId: 'matriks',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'cepat',
    prompt:
      'Diketahui $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 0 & 1 \\\\ 2 & 1 \\end{pmatrix}$. Tentukan entri pada baris kedua kolom pertama dari $A + B$.',
    answer: '5',
    explanation:
      '$A + B = \\begin{pmatrix} 1+0 & 2+1 \\\\ 3+2 & 4+1 \\end{pmatrix} = \\begin{pmatrix} 1 & 3 \\\\ 5 & 5 \\end{pmatrix}$. Entri baris kedua kolom pertama adalah $5$.',
    hints: ['Jumlahkan entri yang seposisi, lalu baca posisi yang diminta.'],
    competencies: ['penjumlahan matriks'],
  },
  {
    id: 'mt-04',
    topicId: 'matriks',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'konsep',
    prompt:
      'Diketahui $\\begin{pmatrix} x & 2 \\\\ 3 & y \\end{pmatrix} = \\begin{pmatrix} 1 & 2 \\\\ 3 & 5 \\end{pmatrix}$. Tentukan nilai $x + y$.',
    answer: '6',
    explanation:
      'Kesamaan matriks memberi $x = 1$ dan $y = 5$, sehingga $x + y = 1 + 5 = 6$.',
    hints: ['Bandingkan entri yang bersesuaian posisinya.'],
    competencies: ['kesamaan matriks'],
  },
  {
    id: 'mt-05',
    topicId: 'matriks',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt:
      'Diketahui $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 2 & 0 \\\\ 1 & 3 \\end{pmatrix}$. Hasil kali $AB$ adalah …',
    options: [
      { key: 'A', text: '$\\begin{pmatrix} 4 & 6 \\\\ 10 & 12 \\end{pmatrix}$' },
      { key: 'B', text: '$\\begin{pmatrix} 2 & 4 \\\\ 10 & 14 \\end{pmatrix}$' },
      { key: 'C', text: '$\\begin{pmatrix} 4 & 10 \\\\ 6 & 12 \\end{pmatrix}$' },
      { key: 'D', text: '$\\begin{pmatrix} 6 & 4 \\\\ 12 & 10 \\end{pmatrix}$' },
    ],
    answer: 'A',
    explanation:
      'Baris pertama: $1(2)+2(1)=4$ dan $1(0)+2(3)=6$. Baris kedua: $3(2)+4(1)=10$ dan $3(0)+4(3)=12$. Jadi $AB = \\begin{pmatrix} 4 & 6 \\\\ 10 & 12 \\end{pmatrix}$. Opsi B adalah $BA$, yang nilainya berbeda karena perkalian matriks tidak komutatif.',
    hints: ['Kalikan baris $A$ dengan kolom $B$, lalu jumlahkan hasilnya.'],
    competencies: ['perkalian matriks'],
  },
  {
    id: 'mt-06',
    topicId: 'matriks',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt:
      'Invers dari matriks $A = \\begin{pmatrix} 3 & 1 \\\\ 2 & 4 \\end{pmatrix}$ adalah …',
    options: [
      { key: 'A', text: '$\\dfrac{1}{10}\\begin{pmatrix} 4 & -1 \\\\ -2 & 3 \\end{pmatrix}$' },
      { key: 'B', text: '$\\dfrac{1}{10}\\begin{pmatrix} 4 & 1 \\\\ 2 & 3 \\end{pmatrix}$' },
      { key: 'C', text: '$\\dfrac{1}{10}\\begin{pmatrix} 3 & -1 \\\\ -2 & 4 \\end{pmatrix}$' },
      { key: 'D', text: '$\\dfrac{1}{10}\\begin{pmatrix} 4 & -2 \\\\ -1 & 3 \\end{pmatrix}$' },
    ],
    answer: 'A',
    explanation:
      '$\\det(A) = 3(4) - 1(2) = 10 \\neq 0$, maka $A$ memiliki invers. Untuk $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$, $A^{-1} = \\dfrac{1}{ad-bc}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix} = \\dfrac{1}{10}\\begin{pmatrix} 4 & -1 \\\\ -2 & 3 \\end{pmatrix}$.',
    hints: ['Tukar posisi $a$ dan $d$, lalu ubah tanda $b$ dan $c$.'],
    competencies: ['invers matriks $2 \\times 2$'],
  },
  {
    id: 'mt-07',
    topicId: 'matriks',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt:
      'Hitunglah determinan matriks $B = \\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 4 \\\\ 5 & 6 & 0 \\end{pmatrix}$.',
    answer: '1',
    explanation:
      'Ekspansi baris pertama: $1(1 \\cdot 0 - 4 \\cdot 6) - 2(0 \\cdot 0 - 4 \\cdot 5) + 3(0 \\cdot 6 - 1 \\cdot 5) = 1(-24) - 2(-20) + 3(-5) = -24 + 40 - 15 = 1$.',
    hints: ['Gunakan ekspansi baris pertama dengan tanda $+$, $-$, $+$.'],
    competencies: ['determinan matriks $3 \\times 3$'],
  },
  {
    id: 'mt-08',
    topicId: 'matriks',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Selesaikan sistem persamaan $2x + 3y = 8$ dan $x + 2y = 5$ menggunakan invers matriks. Tunjukkan langkah-langkahnya.',
    answer:
      'Tulis sistem sebagai $A\\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 8 \\\\ 5 \\end{pmatrix}$ dengan $A = \\begin{pmatrix} 2 & 3 \\\\ 1 & 2 \\end{pmatrix}$. Determinan $\\det(A) = 2(2) - 3(1) = 1$, sehingga $A^{-1} = \\begin{pmatrix} 2 & -3 \\\\ -1 & 2 \\end{pmatrix}$. Maka $\\begin{pmatrix} x \\\\ y \\end{pmatrix} = A^{-1}\\begin{pmatrix} 8 \\\\ 5 \\end{pmatrix} = \\begin{pmatrix} 16 - 15 \\\\ -8 + 10 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$. Jadi $x = 1$ dan $y = 2$. Periksa: $2(1)+3(2)=8$ dan $1+2(2)=5$, benar.',
    explanation:
      'Kunci menekankan penulisan sistem dalam bentuk matriks, pemeriksaan $\\det(A) \\neq 0$, penurunan invers, lalu perkalian $A^{-1}$ dengan vektor konstanta.',
    hints: ['Nyatakan koefisien sebagai matriks $A$ dan konstanta sebagai vektor kolom.'],
    competencies: ['invers matriks', 'penyelesaian SPLDV'],
  },
  {
    id: 'mt-09',
    topicId: 'matriks',
    difficulty: 'mahir',
    type: 'multiple-choice',
    category: 'penalaran',
    prompt:
      'Nilai $x$ yang membuat matriks $\\begin{pmatrix} x & 2 \\\\ 2 & x \\end{pmatrix}$ singular adalah …',
    options: [
      { key: 'A', text: '$x = 2$ atau $x = -2$' },
      { key: 'B', text: '$x = 2$ saja' },
      { key: 'C', text: '$x = -2$ saja' },
      { key: 'D', text: '$x = 0$' },
    ],
    answer: 'A',
    explanation:
      'Matriks singular jika determinannya nol: $x \\cdot x - 2 \\cdot 2 = x^{2} - 4 = 0$, sehingga $x^{2} = 4$ dan $x = 2$ atau $x = -2$. Kedua nilai harus disertakan.',
    hints: ['Matriks singular berarti determinannya nol.'],
    competencies: ['matriks singular', 'penalaran aljabar'],
  },
  {
    id: 'mt-10',
    topicId: 'matriks',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Sebuah toko mencatat penjualan dua jenis barang selama dua hari dalam matriks $S = \\begin{pmatrix} 3 & 4 \\\\ 5 & 2 \\end{pmatrix}$, dengan baris menyatakan hari (Senin, Selasa) dan kolom menyatakan jenis barang (A, B). Harga barang A adalah $5$ ribu rupiah dan barang B adalah $4$ ribu rupiah. Nyatakan harga sebagai matriks kolom $H$, hitung $SH$, lalu jelaskan makna hasilnya.',
    answer:
      'Harga ditulis sebagai $H = \\begin{pmatrix} 5 \\\\ 4 \\end{pmatrix}$ (dalam ribuan rupiah). Maka $SH = \\begin{pmatrix} 3 & 4 \\\\ 5 & 2 \\end{pmatrix}\\begin{pmatrix} 5 \\\\ 4 \\end{pmatrix} = \\begin{pmatrix} 3(5) + 4(4) \\\\ 5(5) + 2(4) \\end{pmatrix} = \\begin{pmatrix} 31 \\\\ 33 \\end{pmatrix}$. Hasil ini berarti pendapatan hari Senin $31$ ribu rupiah dan hari Selasa $33$ ribu rupiah.',
    explanation:
      'Perkalian matriks $2 \\times 2$ dengan matriks kolom $2 \\times 1$ menghasilkan matriks kolom $2 \\times 1$; setiap entrinya adalah total pendapatan pada hari yang bersangkutan.',
    hints: ['Ukuran $S$ adalah $2 \\times 2$ dan $H$ adalah $2 \\times 1$, sehingga $SH$ berukuran $2 \\times 1$.'],
    competencies: ['pemodelan matriks', 'perkalian matriks'],
  },
];
