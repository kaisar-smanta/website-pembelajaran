import type { Question } from '@/types/content';

export const peluangQuestions: Question[] = [
  {
    id: 'pl-01',
    topicId: 'peluang',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'cepat',
    prompt: 'Sebuah dadu dilempar satu kali. Peluang muncul mata dadu prima adalah …',
    options: [
      { key: 'A', text: '$\\dfrac{1}{6}$' },
      { key: 'B', text: '$\\dfrac{1}{3}$' },
      { key: 'C', text: '$\\dfrac{2}{3}$' },
      { key: 'D', text: '$\\dfrac{1}{2}$' },
    ],
    answer: 'D',
    explanation:
      'Mata dadu prima adalah $\\{2, 3, 5\\}$, sehingga $n(A) = 3$ dari $n(S) = 6$ dan $P(A) = \\dfrac{3}{6} = \\dfrac{1}{2}$ (opsi D). Opsi A ($\\tfrac{1}{6}$) hanya menghitung satu mata prima. Opsi B ($\\tfrac{1}{3}$) memakai hanya dua mata prima. Opsi C ($\\tfrac{2}{3}$) menghitung empat mata, mungkin karena keliru memasukkan $1$ sebagai prima.',
    hints: ['Bilangan prima terkecil adalah 2, jadi 1 bukan bilangan prima.'],
    competencies: ['peluang teoretis', 'ruang sampel'],
  },
  {
    id: 'pl-02',
    topicId: 'peluang',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'cepat',
    prompt: 'Sebuah dadu dilempar satu kali. Tentukan peluang muncul mata dadu lebih dari 4.',
    answer: '1/3',
    acceptedAnswers: ['1/3', '2/6', '0,33', '0.33', '0,333', '0.333', '0,3333', '0.3333'],
    explanation:
      'Mata dadu lebih dari 4 adalah $\\{5, 6\\}$ sehingga $n(A) = 2$. Jadi $P(A) = \\dfrac{2}{6} = \\dfrac{1}{3}$.',
    hints: ['Tuliskan anggota kejadian, lalu bandingkan dengan $n(S) = 6$.'],
    competencies: ['peluang teoretis'],
  },
  {
    id: 'pl-03',
    topicId: 'peluang',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt:
      'Dua dadu dilempar bersama. Peluang jumlah kedua mata dadu sama dengan 7 atau 11 adalah …',
    options: [
      { key: 'A', text: '$\\dfrac{1}{6}$' },
      { key: 'B', text: '$\\dfrac{1}{18}$' },
      { key: 'C', text: '$\\dfrac{4}{9}$' },
      { key: 'D', text: '$\\dfrac{2}{9}$' },
    ],
    answer: 'D',
    explanation:
      'Jumlah 7 muncul dari 6 cara, jumlah 11 dari 2 cara yaitu $(5,6)$ dan $(6,5)$. Kedua kejadian saling lepas, sehingga $P = \\dfrac{6 + 2}{36} = \\dfrac{8}{36} = \\dfrac{2}{9}$ (opsi D). Opsi A ($\\tfrac{1}{6}$) hanya menghitung jumlah 7. Opsi B ($\\tfrac{1}{18}$) hanya menghitung jumlah 11. Opsi C ($\\tfrac{4}{9}$) keliru memakai ruang sampel 18, bukan 36.',
    hints: [
      'Hitung banyak cara tiap jumlah dari 36 hasil yang sama mungkin.',
      'Jumlah 7 ada 6 cara dan jumlah 11 ada 2 cara; keduanya saling lepas sehingga peluangnya dijumlahkan.',
    ],
    competencies: ['aturan penjumlahan', 'kejadian saling lepas'],
  },
  {
    id: 'pl-04',
    topicId: 'peluang',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt:
      'Dua dadu dilempar $108$ kali. Jika peluang muncul jumlah 7 atau 11 adalah $\\dfrac{2}{9}$, tentukan frekuensi harapan muncul jumlah 7 atau 11.',
    answer: '24',
    acceptedAnswers: ['24', '24 kali'],
    explanation:
      'Frekuensi harapan $= N \\cdot P(A) = 108 \\cdot \\dfrac{2}{9} = 24$ kali.',
    hints: [
      'Gunakan $F_h = N \\cdot P(A)$.',
      'Substitusi $N = 108$ dan $P(A) = \\dfrac{2}{9}$.',
    ],
    competencies: ['frekuensi harapan'],
  },
  {
    id: 'pl-05',
    topicId: 'peluang',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'kontekstual',
    prompt:
      'Sebuah kantong berisi 5 bola merah, 3 bola biru, dan 2 bola hijau. Satu bola diambil secara acak. Peluang terambil bola bukan hijau adalah …',
    options: [
      { key: 'A', text: '$\\dfrac{1}{5}$' },
      { key: 'B', text: '$\\dfrac{3}{10}$' },
      { key: 'C', text: '$\\dfrac{2}{5}$' },
      { key: 'D', text: '$\\dfrac{4}{5}$' },
    ],
    answer: 'D',
    explanation:
      'Total bola $= 5 + 3 + 2 = 10$ dan bola hijau ada 2, sehingga bola bukan hijau ada 8. Jadi $P = \\dfrac{8}{10} = \\dfrac{4}{5}$ (opsi D); bisa juga $1 - \\dfrac{2}{10} = \\dfrac{4}{5}$. Opsi A ($\\tfrac{1}{5}$) adalah peluang terambil bola hijau. Opsi B ($\\tfrac{3}{10}$) hanya menghitung bola biru dan mengabaikan bola merah. Opsi C ($\\tfrac{2}{5}$) keliru menghitung banyak bola bukan hijau menjadi $4$.',
    hints: [
      'Gunakan aturan komplemen $P(A^c) = 1 - P(A)$.',
      'Peluang terambil hijau adalah $\\dfrac{2}{10}$, sehingga komplemennya $1-\\dfrac{2}{10}$.',
    ],
    competencies: ['aturan komplemen', 'kontekstual'],
  },
  {
    id: 'pl-06',
    topicId: 'peluang',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt:
      'Sebuah dadu dilempar dua kali. Tentukan peluang munculnya paling sedikit satu mata 6.',
    answer: '11/36',
    acceptedAnswers: ['11/36', '0,3056', '0.3056', '0,30556', '0.30556', '0,31', '0.31'],
    explanation:
      'Gunakan komplemen. Peluang tidak muncul mata 6 pada kedua lemparan adalah $\\dfrac{5}{6} \\cdot \\dfrac{5}{6} = \\dfrac{25}{36}$, sehingga $P(\\text{paling sedikit satu } 6) = 1 - \\dfrac{25}{36} = \\dfrac{11}{36}$.',
    hints: [
      'Hitung peluang kejadian komplemennya lebih dahulu.',
      'Komplemennya adalah tidak muncul mata 6 pada kedua lemparan, yaitu $\\left(\\dfrac{5}{6}\\right)^2$.',
    ],
    competencies: ['aturan komplemen', 'kejadian saling bebas'],
  },
  {
    id: 'pl-07',
    topicId: 'peluang',
    difficulty: 'mahir',
    type: 'multiple-choice',
    category: 'penalaran',
    prompt:
      'Pada satu lemparan dadu, $A$ adalah kejadian muncul mata genap dan $B$ adalah kejadian muncul mata prima. Pernyataan yang benar adalah …',
    options: [
      { key: 'A', text: 'Saling bebas karena $P(A)=P(B)$.' },
      { key: 'B', text: 'Saling lepas karena $A \\cap B = \\varnothing$.' },
      { key: 'C', text: 'Saling bebas karena $P(A \\mid B)=P(A)$.' },
      {
        key: 'D',
        text: 'Tidak saling bebas karena $P(A \\cap B) \\neq P(A)\\,P(B)$.',
      },
    ],
    answer: 'D',
    explanation:
      '$P(A) = \\dfrac{3}{6} = \\dfrac{1}{2}$, $P(B) = \\dfrac{3}{6} = \\dfrac{1}{2}$, dan $A \\cap B = \\{2\\}$ sehingga $P(A \\cap B) = \\dfrac{1}{6}$. Karena $P(A)P(B) = \\dfrac{1}{4} \\neq \\dfrac{1}{6}$, keduanya tidak saling bebas (opsi D). Opsi A salah karena $P(A)=P(B)$ tidak menjamin kebebasan. Opsi B salah karena $A \\cap B=\\{2\\}$ tidak kosong. Opsi C salah karena $P(A \\mid B)=\\dfrac{1/6}{1/2}=\\dfrac13 \\neq \\dfrac12 = P(A)$.',
    hints: [
      'Periksa apakah berlaku $P(A \\cap B) = P(A) \\cdot P(B)$.',
      'Daftar $A=\\{2,4,6\\}$ dan $B=\\{2,3,5\\}$, lalu cari $A\\cap B$.',
    ],
    competencies: ['kejadian saling bebas', 'penalaran'],
  },
  {
    id: 'pl-08',
    topicId: 'peluang',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Jelaskan perbedaan antara dua kejadian yang saling lepas (mutually exclusive) dan dua kejadian yang saling bebas (independent). Berikan satu contoh untuk masing-masing.',
    answer:
      'Dua kejadian saling lepas tidak dapat terjadi bersamaan, sehingga $A \\cap B = \\varnothing$, $P(A \\cap B) = 0$, dan berlaku $P(A \\cup B) = P(A) + P(B)$. Contohnya pada satu lemparan dadu, kejadian "muncul mata 1" dan "muncul mata 6" saling lepas. Dua kejadian saling bebas berarti terjadinya satu kejadian tidak mengubah peluang kejadian lain, sehingga $P(A \\cap B) = P(A) \\cdot P(B)$. Contohnya hasil lemparan koin pertama dan koin kedua saling bebas karena keduanya tidak saling memengaruhi.',
    explanation:
      'Penilaian menekankan dua perbedaan utama: saling lepas berbicara tentang tidak dapat terjadi bersamaan ($P(A \\cap B) = 0$), sedangkan saling bebas berbicara tentang tidak saling memengaruhi ($P(A \\cap B) = P(A)P(B)$).',
    hints: [
      'Saling lepas berbicara tentang irisan yang kosong; saling bebas tentang aturan perkalian.',
      'Perhatikan bahwa dua kejadian berpeluang positif yang saling lepas justru tidak saling bebas.',
    ],
    competencies: ['kejadian saling lepas', 'kejadian saling bebas', 'penalaran'],
    rubric: [
      'Membedakan definisi saling lepas dan saling bebas',
      'Menyebut syarat $P(A\\cap B)=0$ untuk saling lepas',
      'Menyebut syarat $P(A\\cap B)=P(A)P(B)$ untuk saling bebas',
      'Memberi satu contoh yang tepat untuk masing-masing',
    ],
  },
  {
    id: 'pl-09',
    topicId: 'peluang',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'kontekstual',
    prompt:
      'Sebuah koin dilempar 200 kali dan muncul gambar sebanyak 120 kali. (a) Tentukan peluang empiris muncul gambar. (b) Bandingkan dengan peluang teoretisnya dan jelaskan mengapa hasilnya dapat berbeda.',
    answer:
      '(a) Peluang empiris $= \\dfrac{120}{200} = \\dfrac{3}{5} = 0{,}6$. (b) Peluang teoretis muncul gambar adalah $\\dfrac{1}{2} = 0{,}5$. Keduanya dapat berbeda karena pada percobaan dengan banyak lemparan yang terbatas, hasil nyata dipengaruhi variasi acak. Menurut hukum bilangan besar, peluang empiris akan makin mendekati peluang teoretis $\\dfrac{1}{2}$ jika jumlah lemparan diperbesar.',
    explanation:
      'Jawaban benar membedakan peluang empiris (berdasarkan hasil percobaan) dari peluang teoretis, serta mengaitkannya dengan hukum bilangan besar.',
    hints: [
      'Bagi banyak munculnya gambar dengan banyak lemparan.',
      'Bandingkan hasil itu dengan peluang teoretis koin seimbang, yaitu $\\dfrac{1}{2}$.',
    ],
    competencies: ['peluang empiris', 'hukum bilangan besar'],
    rubric: [
      'Menghitung peluang empiris sebagai hasil bagi',
      'Menyebut peluang teoretis koin',
      'Menjelaskan sumber perbedaan hasil',
      'Mengaitkan dengan hukum bilangan besar',
    ],
  },
  {
    id: 'pl-10',
    topicId: 'peluang',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Dua dadu dilempar 180 kali. Tentukan frekuensi harapan munculnya jumlah kedua mata dadu lebih dari 9, lalu jelaskan maknanya.',
    answer:
      'Jumlah yang lebih dari 9 adalah 10, 11, dan 12. Jumlah 10 muncul dari $(4,6), (5,5), (6,4)$ yaitu 3 cara, jumlah 11 dari $(5,6), (6,5)$ yaitu 2 cara, dan jumlah 12 dari $(6,6)$ yaitu 1 cara, sehingga total 6 cara dari 36 hasil. Jadi $P = \\dfrac{6}{36} = \\dfrac{1}{6}$ dan frekuensi harapan $= 180 \\cdot \\dfrac{1}{6} = 30$ kali. Artinya, dari 180 lemparan kita memperkirakan sekitar 30 lemparan menghasilkan jumlah lebih dari 9; ini hanya perkiraan, bukan jaminan.',
    explanation:
      'Kunci jawaban menuntut pencacahan cara yang benar (6 cara), perhitungan $P = \\tfrac{1}{6}$, $F_h = 30$, serta penafsiran bahwa frekuensi harapan adalah nilai perkiraan jangka panjang.',
    hints: [
      'Cacah cara untuk jumlah 10, 11, dan 12.',
      'Gunakan $F_h = N \\cdot P(A)$ setelah peluang ditemukan.',
    ],
    competencies: ['frekuensi harapan', 'pemodelan', 'pencacahan'],
    rubric: [
      'Mencacah cara jumlah 10, 11, dan 12',
      'Menghitung peluang kejadian',
      'Menerapkan rumus frekuensi harapan',
      'Menafsirkan hasil sebagai perkiraan',
    ],
  },
  {
    id: 'pl-11',
    topicId: 'peluang',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'evaluasi',
    prompt:
      'Kantong I berisi $3$ bola merah dan $2$ bola biru, sedangkan Kantong II berisi $4$ bola merah dan $1$ bola biru. Satu bola diambil dari tiap kantong. (a) Tentukan peluang kedua bola merah. (b) Tentukan peluang tepat satu bola merah. (c) Jelaskan mengapa kejadian dari kedua kantong saling bebas.',
    answer:
      'Peluang dari Kantong I: $P(M_1)=\\dfrac{3}{5}$; dari Kantong II: $P(M_2)=\\dfrac{4}{5}$. (a) Karena saling bebas, $P(M_1\\cap M_2)=\\dfrac{3}{5}\\cdot\\dfrac{4}{5}=\\dfrac{12}{25}$. (b) Tepat satu merah berarti (merah, biru) atau (biru, merah): $P=\\dfrac{3}{5}\\cdot\\dfrac{1}{5}+\\dfrac{2}{5}\\cdot\\dfrac{4}{5}=\\dfrac{3}{25}+\\dfrac{8}{25}=\\dfrac{11}{25}$. (c) Kedua kejadian saling bebas karena hasil pengambilan dari satu kantong tidak mengubah isi maupun peluang pada kantong lain.',
    explanation:
      'Kunci: memakai aturan perkalian untuk kejadian saling bebas, menjumlahkan dua jalur untuk tepat satu merah, dan menjelaskan mengapa keduanya bebas.',
    hints: ['Hasil dari satu kantong tidak memengaruhi kantong lain.', 'Untuk tepat satu merah, jumlahkan dua urutan kejadian.'],
    competencies: ['kejadian saling bebas', 'aturan perkalian', 'evaluasi'],
    rubric: [
      'Menentukan peluang merah tiap kantong',
      'Mengalikan peluang untuk kedua bola merah',
      'Menjumlahkan dua jalur untuk tepat satu merah',
      'Menjelaskan mengapa kedua kejadian saling bebas',
    ],
  },
  {
    id: 'pl-12',
    topicId: 'peluang',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'konsep',
    prompt: 'Sebuah koin dilempar satu kali. Peluang muncul sisi angka adalah …',
    options: [
      { key: 'A', text: '$\\dfrac{1}{4}$' },
      { key: 'B', text: '$\\dfrac{1}{3}$' },
      { key: 'C', text: '$\\dfrac{2}{3}$' },
      { key: 'D', text: '$\\dfrac{1}{2}$' },
    ],
    answer: 'D',
    explanation:
      'Ruang sampelnya $\\{\\text{angka}, \\text{gambar}\\}$ dengan dua hasil sama mungkin, sehingga $P(\\text{angka})=\\dfrac{1}{2}$ (opsi D). Opsi A ($\\tfrac{1}{4}$) keliru memakai ruang sampel empat hasil seperti dua koin. Opsi B ($\\tfrac{1}{3}$) menganggap ada tiga hasil sama mungkin. Opsi C ($\\tfrac{2}{3}$) menganggap sisi angka lebih mungkin daripada gambar.',
    hints: ['Ada berapa hasil yang sama mungkin, dan berapa yang termasuk kejadian?'],
    competencies: ['peluang teoretis', 'ruang sampel'],
  },
  {
    id: 'pl-13',
    topicId: 'peluang',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Di sebuah kelas terdapat $40$ siswa. Sebanyak $25$ siswa menyukai matematika, $20$ siswa menyukai fisika, dan $10$ siswa menyukai keduanya. Seorang siswa dipilih secara acak. (a) Tentukan peluang siswa menyukai matematika dan fisika. (b) Tentukan peluang siswa menyukai matematika jika diketahui ia menyukai fisika. (c) Periksa apakah kedua kejadian saling bebas, lalu simpulkan.',
    answer:
      'Misal $M$ kejadian menyukai matematika dan $F$ kejadian menyukai fisika. (a) $P(M\\cap F)=\\dfrac{10}{40}=\\dfrac{1}{4}$. (b) $P(M\\mid F)=\\dfrac{P(M\\cap F)}{P(F)}=\\dfrac{10/40}{20/40}=\\dfrac{10}{20}=\\dfrac{1}{2}$. (c) $P(M)=\\dfrac{25}{40}=\\dfrac{5}{8}$ dan $P(F)=\\dfrac{20}{40}=\\dfrac{1}{2}$. Karena $P(M)P(F)=\\dfrac{5}{16}\\neq\\dfrac{1}{4}=P(M\\cap F)$, kedua kejadian tidak saling bebas. Mengetahui siswa menyukai fisika mengubah peluangnya menyukai matematika.',
    explanation:
      'Kunci: menghitung peluang irisan langsung dari data, memakai definisi peluang bersyarat, lalu membandingkan $P(M)P(F)$ dengan $P(M\\cap F)$ untuk menguji kebebasan.',
    hints: [
      'Peluang bersyarat $P(M\\mid F)=\\dfrac{P(M\\cap F)}{P(F)}$.',
      'Dua kejadian saling bebas bila $P(M\\cap F)=P(M)P(F)$.',
    ],
    competencies: ['peluang bersyarat', 'kejadian saling bebas', 'penalaran'],
    rubric: [
      'Menghitung peluang irisan dari data',
      'Menerapkan rumus peluang bersyarat',
      'Membandingkan $P(M)P(F)$ dengan $P(M\\cap F)$',
      'Menyimpulkan ketidakbebasan kedua kejadian',
    ],
  },
  {
    id: 'pl-14',
    topicId: 'peluang',
    difficulty: 'mahir',
    type: 'multiple-choice',
    category: 'penalaran',
    prompt:
      'Sebuah kantong berisi $5$ bola merah dan $3$ bola putih. Dua bola diambil satu per satu tanpa pengembalian. Peluang terambil kedua bola merah adalah …',
    options: [
      { key: 'A', text: '$\\dfrac{5}{14}$' },
      { key: 'B', text: '$\\dfrac{25}{64}$' },
      { key: 'C', text: '$\\dfrac{5}{8}$' },
      { key: 'D', text: '$\\dfrac{1}{2}$' },
    ],
    answer: 'A',
    explanation:
      'Karena tanpa pengembalian, peluang berubah setelah pengambilan pertama. $P(M_{1})=\\dfrac{5}{8}$ dan setelah satu merah terambil tersisa $4$ merah dari $7$ bola sehingga $P(M_{2}\\mid M_{1})=\\dfrac{4}{7}$. Maka $P(M_{1}\\cap M_{2})=\\dfrac{5}{8}\\cdot\\dfrac{4}{7}=\\dfrac{20}{56}=\\dfrac{5}{14}$ (opsi A). Opsi B ($\\tfrac{25}{64}$) menganggap pengambilan dengan pengembalian, memakai $\\tfrac58\\cdot\\tfrac58$. Opsi C ($\\tfrac{5}{8}$) hanya peluang bola merah pada pengambilan pertama. Opsi D ($\\tfrac12$) keliru menganggap peluang kedua tetap $\\tfrac12$ tanpa menyesuaikan sisa bola.',
    hints: [
      'Karena tanpa pengembalian, banyak bola dan banyak merah berkurang setelah pengambilan pertama.',
      'Kalikan peluang pengambilan pertama dengan peluang bersyarat pengambilan kedua.',
    ],
    competencies: ['peluang bersyarat', 'aturan perkalian', 'penalaran'],
  },
  {
    id: 'pl-15',
    topicId: 'peluang',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'kontekstual',
    prompt:
      'Pada suatu hari hujan, dari $20$ siswa di sebuah kelas hanya $8$ yang membawa payung. Seorang siswa dipilih secara acak. Peluang siswa terpilih tidak membawa payung adalah …',
    options: [
      { key: 'A', text: '$\\dfrac{2}{5}$' },
      { key: 'B', text: '$\\dfrac{3}{5}$' },
      { key: 'C', text: '$\\dfrac{1}{2}$' },
      { key: 'D', text: '$\\dfrac{3}{4}$' },
    ],
    answer: 'B',
    explanation:
      'Siswa yang tidak membawa payung ada $20-8=12$, sehingga $P=\\dfrac{12}{20}=\\dfrac{3}{5}$ (opsi B). Opsi A ($\\tfrac{2}{5}$) adalah peluang membawa payung, $\\dfrac{8}{20}$. Opsi C ($\\tfrac12$) keliru menganggap setengah siswa. Opsi D ($\\tfrac34$) salah membagi $12$ dengan $16$, bukan dengan $20$.',
    hints: [
      'Hitung banyak siswa yang tidak membawa payung, atau gunakan aturan komplemen.',
      'Komplemennya: $1-\\dfrac{8}{20}$ memberi hasil yang sama.',
    ],
    competencies: ['aturan komplemen', 'kontekstual'],
  },
  {
    id: 'pl-16',
    topicId: 'peluang',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'kontekstual',
    prompt:
      'Sebuah survei terhadap $50$ siswa dirangkum pada diagram Venn berikut. Seorang siswa dipilih secara acak. Peluang siswa tersebut tidak menyukai kopi maupun teh adalah …',
    figure: {
      svg: '<svg viewBox="0 0 320 230" role="img" aria-hidden="true"><rect x="20" y="20" width="280" height="185" fill="none" stroke="currentColor" stroke-width="1.4"/><circle cx="125" cy="105" r="72" fill="none" stroke="currentColor" stroke-width="1.4"/><circle cx="195" cy="105" r="72" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="90" y="50" fill="currentColor" font-size="11" text-anchor="middle">Kopi</text><text x="212" y="50" fill="currentColor" font-size="11" text-anchor="middle">Teh</text><text x="86" y="120" fill="currentColor" font-size="11" text-anchor="middle">20</text><text x="160" y="120" fill="currentColor" font-size="11" text-anchor="middle">8</text><text x="234" y="120" fill="currentColor" font-size="11" text-anchor="middle">12</text><text x="278" y="45" fill="currentColor" font-size="11" text-anchor="middle">10</text></svg>',
      alt: 'Diagram Venn dua lingkaran bertumpang tindih untuk peminat kopi dan teh: hanya kopi 20, keduanya 8, hanya teh 12, dan 10 siswa di luar keduanya.',
      caption: 'Peminat kopi dan teh dari $50$ siswa.',
    },
    options: [
      { key: 'A', text: '$\\dfrac{1}{5}$' },
      { key: 'B', text: '$\\dfrac{1}{4}$' },
      { key: 'C', text: '$\\dfrac{3}{10}$' },
      { key: 'D', text: '$\\dfrac{4}{5}$' },
    ],
    answer: 'A',
    explanation:
      'Dari diagram, siswa di luar kedua lingkaran ada $10$ dari total $50$, sehingga $P=\\dfrac{10}{50}=\\dfrac{1}{5}$ (opsi A). Opsi B ($\\tfrac14$) keliru membagi $10$ dengan $40$, jumlah siswa yang menyukai minimal salah satu. Opsi C ($\\tfrac{3}{10}$) keliru menghitung siswa di luar kedua himpunan menjadi $15$. Opsi D ($\\tfrac45$) justru peluang menyukai kopi atau teh, $\\dfrac{40}{50}$.',
    hints: [
      'Angka di luar kedua lingkaran (tetapi di dalam persegi) adalah yang tidak menyukai keduanya.',
      'Bagi banyak siswa di luar kedua lingkaran dengan total siswa.',
    ],
    competencies: ['diagram Venn', 'peluang komplemen', 'kontekstual'],
  },
];
