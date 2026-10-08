import type { Question } from '@/types/content';

export const permutasiKombinasiQuestions: Question[] = [
  {
    id: 'perkom-01',
    topicId: 'permutasi-kombinasi',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'cepat',
    prompt: 'Tiga orang akan berfoto berjajar. Banyak urutan berfoto yang mungkin adalah …',
    options: [
      { key: 'A', text: '$3$' },
      { key: 'B', text: '$6$' },
      { key: 'C', text: '$9$' },
      { key: 'D', text: '$27$' },
    ],
    answer: 'B',
    explanation:
      'Ketiga orang berbeda, sehingga banyak susunannya $3! = 3 \\cdot 2 \\cdot 1 = 6$.',
    hints: ['Gunakan faktorial karena semua orang berbeda dan urutan penting.'],
    competencies: ['permutasi'],
  },
  {
    id: 'perkom-02',
    topicId: 'permutasi-kombinasi',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'cepat',
    prompt: 'Nilai $5!$ adalah …',
    options: [
      { key: 'A', text: '$25$' },
      { key: 'B', text: '$60$' },
      { key: 'C', text: '$120$' },
      { key: 'D', text: '$720$' },
    ],
    answer: 'C',
    explanation: '$5! = 5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1 = 120$.',
    hints: ['Kalikan bilangan dari $5$ turun sampai $1$.'],
    competencies: ['faktorial'],
  },
  {
    id: 'perkom-03',
    topicId: 'permutasi-kombinasi',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'cepat',
    prompt: 'Hitung nilai $P(5,3)$.',
    answer: '60',
    acceptedAnswers: ['60'],
    explanation: '$P(5,3) = \\dfrac{5!}{(5-3)!} = \\dfrac{120}{2} = 60$.',
    hints: ['Gunakan rumus permutasi sebagian $P(n,k) = \\dfrac{n!}{(n-k)!}$.'],
    competencies: ['permutasi'],
  },
  {
    id: 'perkom-04',
    topicId: 'permutasi-kombinasi',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'cepat',
    prompt: 'Banyak susunan huruf yang berbeda dari kata "BUKU" adalah …',
    options: [
      { key: 'A', text: '$6$' },
      { key: 'B', text: '$12$' },
      { key: 'C', text: '$24$' },
      { key: 'D', text: '$120$' },
    ],
    answer: 'B',
    explanation:
      'Ada $4$ huruf, tetapi huruf U muncul $2$ kali, sehingga $\\dfrac{4!}{2!} = \\dfrac{24}{2} = 12$.',
    hints: ['Perhatikan huruf yang muncul lebih dari sekali.'],
    competencies: ['permutasi unsur sama'],
  },
  {
    id: 'perkom-05',
    topicId: 'permutasi-kombinasi',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt:
      'Dari $8$ siswa akan dipilih $3$ orang untuk sebuah tim tanpa jabatan. Banyak susunan tim yang mungkin adalah …',
    options: [
      { key: 'A', text: '$24$' },
      { key: 'B', text: '$56$' },
      { key: 'C', text: '$336$' },
      { key: 'D', text: '$512$' },
    ],
    answer: 'B',
    explanation:
      'Karena tidak ada jabatan, urutan tidak penting sehingga memakai kombinasi: $\\binom{8}{3} = \\dfrac{8!}{3!\\,5!} = \\dfrac{8 \\cdot 7 \\cdot 6}{6} = 56$.',
    hints: ['Karena tidak ada jabatan, urutan tidak penting.', 'Gunakan kombinasi $\\binom{n}{k}$.'],
    competencies: ['kombinasi'],
  },
  {
    id: 'perkom-06',
    topicId: 'permutasi-kombinasi',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt:
      'Dari $7$ siswa akan dipilih ketua, sekretaris, dan bendahara. Banyak susunan pengurus yang mungkin adalah …',
    answer: '210',
    acceptedAnswers: ['210'],
    explanation:
      'Urutan penting karena jabatannya berbeda, sehingga $P(7,3) = 7 \\cdot 6 \\cdot 5 = 210$.',
    hints: ['Urutan jabatan penting.', 'Gunakan permutasi $P(7,3)$.'],
    competencies: ['permutasi'],
  },
  {
    id: 'perkom-07',
    topicId: 'permutasi-kombinasi',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt: 'Tentukan banyak susunan huruf dari kata "MATEMATIKA".',
    answer: '151200',
    acceptedAnswers: ['151200', '151.200'],
    explanation:
      'Kata "MATEMATIKA" memuat M $2$, A $3$, T $2$, E $1$, I $1$, K $1$ (total $10$ huruf). Banyak susunannya $\\dfrac{10!}{2!\\,3!\\,2!} = \\dfrac{3628800}{24} = 151200$.',
    hints: ['Hitung banyak tiap huruf dan pengulangannya.', 'Bagi $10!$ dengan faktorial huruf yang berulang.'],
    competencies: ['permutasi unsur sama'],
  },
  {
    id: 'perkom-08',
    topicId: 'permutasi-kombinasi',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'konsep',
    prompt:
      'Jelaskan perbedaan antara memilih $2$ orang dari $5$ orang untuk sebuah tim dan memilih juara $1$ serta juara $2$ dari $5$ peserta. Sertakan perhitungan keduanya.',
    answer:
      'Pada pemilihan tim, urutan tidak penting sehingga memakai kombinasi: $\\binom{5}{2} = \\dfrac{5!}{2!\\,3!} = 10$. Pada pemilihan juara $1$ dan juara $2$, urutan penting karena (A juara 1, B juara 2) berbeda dari (B juara 1, A juara 2), sehingga memakai permutasi: $P(5,2) = 5 \\cdot 4 = 20$. Hasil permutasi tepat $2! = 2$ kali kombinasi karena setiap pasangan memiliki $2$ susunan.',
    explanation:
      'Kunci jawaban: mengenali peran urutan dan menghubungkan $P(5,2) = 2!\\,\\binom{5}{2}$.',
    hints: ['Tanyakan apakah urutan mengubah hasil.', 'Bandingkan nilai $\\binom{5}{2}$ dan $P(5,2)$.'],
    competencies: ['permutasi', 'kombinasi', 'penalaran'],
  },
  {
    id: 'perkom-09',
    topicId: 'permutasi-kombinasi',
    difficulty: 'mahir',
    type: 'short-answer',
    category: 'kontekstual',
    prompt:
      'Sebuah kotak berisi $4$ bola merah dan $6$ bola biru. Tiga bola diambil sekaligus. Tentukan peluang terambil tepat $2$ bola merah (nyatakan dalam pecahan paling sederhana).',
    answer: '3/10',
    acceptedAnswers: ['3/10', '0,3', '0.3'],
    explanation:
      'Banyak cara mengambil $3$ dari $10$ bola adalah $\\binom{10}{3} = 120$. Banyak cara memperoleh tepat $2$ merah adalah $\\binom{4}{2}\\binom{6}{1} = 6 \\cdot 6 = 36$. Jadi $P = \\dfrac{36}{120} = \\dfrac{3}{10}$.',
    hints: ['Cacah pembilang dan penyebut dengan kombinasi.', 'Penyebutnya adalah $\\binom{10}{3}$.'],
    competencies: ['kombinasi', 'peluang'],
  },
  {
    id: 'perkom-10',
    topicId: 'permutasi-kombinasi',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Tentukan banyak susunan huruf yang berbeda dari kata "STATISTIKA". Jelaskan langkahmu.',
    answer:
      'Kata "STATISTIKA" memuat S $2$, T $3$, A $2$, I $2$, dan K $1$ sehingga totalnya $10$ huruf. Karena ada huruf yang berulang, banyak susunannya $\\dfrac{10!}{2!\\,3!\\,2!\\,2!} = \\dfrac{3628800}{48} = 75600$.',
    explanation:
      'Kunci jawaban: menghitung frekuensi tiap huruf lalu membagi $10!$ dengan faktorial setiap frekuensi.',
    hints: ['Daftar frekuensi tiap huruf lebih dahulu.', 'Bagi $10!$ dengan $2!\\,3!\\,2!\\,2!$.'],
    competencies: ['permutasi unsur sama', 'penalaran'],
  },
  {
    id: 'perkom-11',
    topicId: 'permutasi-kombinasi',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Dari $5$ pasangan suami istri akan dipilih $4$ orang. Tentukan peluang bahwa tidak ada pasangan suami istri yang terpilih.',
    answer:
      'Total cara memilih $4$ dari $10$ orang adalah $\\binom{10}{4} = 210$. Agar tidak ada pasangan, pilih $4$ pasangan dari $5$ pasangan $(\\binom{5}{4} = 5)$, lalu pilih $1$ orang dari tiap pasangan yang terpilih $(2^4 = 16)$. Banyak cara yang diinginkan $5 \\cdot 16 = 80$, sehingga $P = \\dfrac{80}{210} = \\dfrac{8}{21}$.',
    explanation:
      'Kunci jawaban: mencacah pilihan pasangan lalu pilihan orang dengan aturan perkalian.',
    hints: ['Pilih dahulu pasangan mana yang menyumbang anggota.', 'Setiap pasangan terpilih menyumbang $2$ kemungkinan.'],
    competencies: ['kombinasi', 'aturan perkalian', 'peluang'],
  },
  {
    id: 'perkom-12',
    topicId: 'permutasi-kombinasi',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'evaluasi',
    prompt:
      'Sebuah organisasi akan memilih pengurus dari $10$ calon. (a) Tentukan banyak susunan jika dipilih ketua, wakil, sekretaris, dan bendahara. (b) Tentukan banyak susunan jika hanya dipilih $4$ anggota tanpa jabatan. (c) Jelaskan mengapa kedua hasil berbeda.',
    answer:
      '(a) Karena jabatan berbeda, urutan penting: $P(10,4)=10\\cdot9\\cdot8\\cdot7=5040$. (b) Tanpa jabatan, urutan tidak penting: $\\binom{10}{4}=\\dfrac{10\\cdot9\\cdot8\\cdot7}{4!}=\\dfrac{5040}{24}=210$. (c) Keduanya berbeda karena setiap kelompok $4$ orang dapat disusun menjadi $4!=24$ urutan jabatan, sehingga hasil permutasi $24$ kali hasil kombinasi.',
    explanation:
      'Kunci: membedakan kapan urutan penting (permutasi) dan tidak (kombinasi), serta menjelaskan hubungan $P(10,4)=4!\\,\\binom{10}{4}$.',
    hints: ['Jabatan membuat urutan penting.', 'Gunakan $P(n,k)=k!\\,\\binom{n}{k}$.'],
    competencies: ['permutasi', 'kombinasi', 'evaluasi'],
  },
  {
    id: 'perkom-13',
    topicId: 'permutasi-kombinasi',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'pemodelan',
    prompt:
      'Sebuah kode akses terdiri atas $3$ huruf berbeda yang dipilih dari $\\{A, B, C, D, E\\}$ tanpa pengulangan. Berapa banyak kode yang mungkin?',
    answer: '60',
    acceptedAnswers: ['60', '60 kode'],
    explanation:
      'Urutan huruf penting karena "ABC" berbeda dari "ACB", sehingga memakai permutasi: $P(5,3)=5\\cdot4\\cdot3=60$.',
    hints: ['Urutan huruf pada kode penting.', 'Gunakan $P(5,3)$ karena tanpa pengulangan.'],
    competencies: ['permutasi', 'pemodelan'],
  },
];
