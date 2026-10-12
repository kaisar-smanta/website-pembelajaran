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
      { key: 'A', text: '$1$' },
      { key: 'B', text: '$6$' },
      { key: 'C', text: '$9$' },
      { key: 'D', text: '$27$' },
    ],
    answer: 'B',
    explanation:
      'Ketiga orang berbeda, sehingga banyak susunannya $3! = 3 \\cdot 2 \\cdot 1 = 6$. Opsi $1$ muncul bila urutan diabaikan, sedangkan $9$ dan $27$ muncul bila keliru memakai pangkat alih-alih faktorial.',
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
      { key: 'A', text: '$20$' },
      { key: 'B', text: '$60$' },
      { key: 'C', text: '$120$' },
      { key: 'D', text: '$720$' },
    ],
    answer: 'C',
    explanation:
      '$5! = 5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1 = 120$. Opsi $20 = 5 \\cdot 4$ dan $60 = 5 \\cdot 4 \\cdot 3$ muncul bila berhenti mengalikan terlalu awal, sedangkan $720 = 6!$ muncul bila salah menghitung banyak faktornya.',
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
      'Ada $4$ huruf, tetapi huruf U muncul $2$ kali, sehingga $\\dfrac{4!}{2!} = \\dfrac{24}{2} = 12$. Opsi C, $24 = 4!$, muncul bila pengulangan huruf U diabaikan. Opsi A, $6 = 3!$, muncul bila hanya mencacah $3$ huruf yang dianggap berbeda dan membuang huruf U kedua. Opsi D, $120 = 5!$, muncul bila banyak huruf salah dihitung atau semua objek dianggap berbeda.',
    hints: ['Perhatikan huruf yang muncul lebih dari sekali.', 'Bagi $4!$ dengan faktorial banyak huruf yang berulang.'],
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
      'Karena tidak ada jabatan, urutan tidak penting sehingga memakai kombinasi: $\\binom{8}{3} = \\dfrac{8!}{3!\\,5!} = \\dfrac{8 \\cdot 7 \\cdot 6}{6} = 56$. Opsi C, $336$, muncul bila memakai permutasi $P(8,3)=8\\cdot7\\cdot6$ seakan urutan jabatan penting. Opsi D, $512 = 8^{3}$, muncul bila memakai aturan perkalian dengan pengulangan karena menganggap setiap posisi punya $8$ pilihan. Opsi A, $24$, muncul bila kombinasi dihitung keliru, misalnya memakai hasil antara $\\dfrac{8\\cdot6}{2}$ atau menganggap jawabannya $4!$.',
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
    rubric: [
      'Membedakan peran urutan',
      'Menghitung kombinasi $\\binom{5}{2}$',
      'Menghitung permutasi $P(5,2)$',
      'Menjelaskan hubungan $P=k!\\,\\binom{n}{k}$',
    ],
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
    acceptedAnswers: ['3/10', '0,3', '0.3', '0,30', '0.30'],
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
    rubric: [
      'Mendaftar frekuensi tiap huruf',
      'Menyadari adanya huruf berulang',
      'Membagi $10!$ dengan faktorial tiap frekuensi',
      'Memperoleh hasil akhir',
    ],
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
    rubric: [
      'Menentukan total cara memilih 4 dari 10',
      'Memilih 4 pasangan dari 5',
      'Mengalikan dengan $2^{4}$ pilihan orang',
      'Menghitung peluang sebagai hasil bagi',
    ],
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
    rubric: [
      'Menghitung permutasi dengan jabatan',
      'Menghitung kombinasi tanpa jabatan',
      'Menghubungkan keduanya lewat $4!$',
      'Menjelaskan mengapa hasil berbeda',
    ],
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
  {
    id: 'perkom-14',
    topicId: 'permutasi-kombinasi',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Sebuah panitia beranggota $5$ orang akan dibentuk dari $6$ pria dan $4$ wanita. (a) Berapa banyak susunan panitia yang memuat tepat $2$ wanita? (b) Berapa banyak susunan panitia yang memuat paling sedikit $1$ wanita?',
    answer:
      '(a) Pilih $2$ wanita dari $4$ dan $3$ pria dari $6$: $\\binom{4}{2}\\binom{6}{3}=6\\cdot20=120$. (b) Hitung total semua panitia lalu kurangi panitia tanpa wanita: $\\binom{10}{5}-\\binom{6}{5}=252-6=246$. Jadi ada $246$ susunan yang memuat paling sedikit $1$ wanita.',
    explanation:
      'Kunci: memakai aturan perkalian kombinasi untuk kasus "tepat", dan strategi komplemen (total dikurangi tanpa wanita) untuk kasus "paling sedikit".',
    hints: [
      'Untuk "tepat $2$ wanita", pilih wanita dan pria secara terpisah lalu kalikan.',
      'Untuk "paling sedikit $1$", kurangi total dengan susunan tanpa wanita.',
    ],
    competencies: ['kombinasi', 'aturan perkalian', 'strategi komplemen', 'pemodelan'],
    rubric: [
      'Menghitung banyak panitia dengan tepat 2 wanita',
      'Menghitung total semua panitia',
      'Menggunakan komplemen untuk paling sedikit 1 wanita',
      'Menafsirkan hasil sesuai konteks',
    ],
  },
  {
    id: 'perkom-15',
    topicId: 'permutasi-kombinasi',
    difficulty: 'mahir',
    type: 'short-answer',
    category: 'kontekstual',
    prompt:
      'Sebuah sistem membuat kode undian tiga digit dari angka $0$ sampai $9$ **tanpa pengulangan**, dengan syarat digit pertama tidak boleh $0$. Berapa banyak kode undian yang mungkin?',
    answer: '648',
    acceptedAnswers: ['648', '648 kode'],
    explanation:
      'Ada $9$ pilihan untuk digit pertama (angka $1$–$9$), lalu $9$ pilihan untuk digit kedua (angka $0$ ditambah delapan angka yang tersisa), dan $8$ pilihan untuk digit ketiga. Jadi banyak kode $= 9 \\cdot 9 \\cdot 8 = 648$. Cara lain: dari seluruh $P(10,3) = 720$ kode tanpa pengulangan, kurangi yang diawali $0$ sebanyak $P(9,2) = 72$, sehingga $720 - 72 = 648$.',
    hints: [
      'Batasi digit pertama lebih dahulu karena ada larangan angka $0$.',
      'Setelah digit pertama dipilih, hitung ulang sisa pilihan tiap posisi, lalu kalikan.',
    ],
    competencies: ['permutasi', 'aturan perkalian', 'pemodelan'],
  },
  {
    id: 'perkom-16',
    topicId: 'permutasi-kombinasi',
    difficulty: 'mahir',
    type: 'multiple-choice',
    category: 'evaluasi',
    prompt:
      'Seorang siswa menghitung banyak susunan huruf berbeda dari kata "LEVEL" sebagai $5! = 120$. Pernyataan yang paling tepat mengenai perhitungan yang benar adalah …',
    options: [
      { key: 'A', text: 'Cara siswa benar karena kata "LEVEL" memiliki $5$ huruf' },
      { key: 'B', text: 'Cukup membagi dengan $2!$ sekali sehingga hasilnya $60$' },
      {
        key: 'C',
        text: 'Harus membagi dengan $2!\\cdot 2!$ karena L dan E masing-masing muncul dua kali, sehingga hasilnya $30$',
      },
      { key: 'D', text: 'Harus memakai kombinasi $\\binom{5}{2} = 10$ karena hanya urutan dua huruf yang berbeda' },
    ],
    answer: 'C',
    explanation:
      'Kata "LEVEL" memuat L dua kali dan E dua kali, sehingga setiap susunan terhitung $2!\\cdot 2! = 4$ kali. Banyak susunan berbeda $= \\dfrac{5!}{2!\\cdot 2!} = \\dfrac{120}{4} = 30$. Opsi A salah karena mengabaikan pengulangan L dan E. Opsi B hanya mengoreksi satu pasang huruf kembar, padahal ada dua. Opsi D keliru karena susunan tetap memperhatikan urutan sehingga memakai permutasi dengan unsur sama, bukan kombinasi.',
    hints: [
      'Daftar dahulu huruf yang muncul lebih dari sekali beserta frekuensinya.',
      'Bagi $5!$ dengan faktorial tiap frekuensi, bukan hanya satu frekuensi.',
    ],
    competencies: ['permutasi unsur sama', 'evaluasi penalaran'],
  },
];
