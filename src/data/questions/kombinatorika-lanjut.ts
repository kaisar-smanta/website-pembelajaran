import type { Question } from '@/types/content';

export const kombinatorikaLanjutQuestions: Question[] = [
  {
    id: 'komb-01',
    topicId: 'kombinatorika-lanjut',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'cepat',
    prompt: 'Rian memiliki $3$ kaus dan $4$ celana yang semuanya berbeda. Banyak cara ia memasangkan kaus dan celana adalah …',
    options: [
      { key: 'A', text: '$7$' },
      { key: 'B', text: '$12$' },
      { key: 'C', text: '$24$' },
      { key: 'D', text: '$81$' },
    ],
    answer: 'B',
    explanation:
      'Setiap kaus dapat dipasangkan dengan $4$ celana, sehingga banyak cara $3 \\cdot 4 = 12$ (aturan perkalian). Opsi A, $7$, muncul bila $3$ dan $4$ dijumlahkan (aturan penjumlahan) alih-alih dikalikan. Opsi C, $24$, muncul bila memakai $3! \\cdot 4$, seakan urutan pemakaian kaus juga diperhitungkan. Opsi D, $81 = 3^{4}$, muncul bila menganggap setiap celana punya $3$ pilihan secara berpangkat.',
    hints: ['Tahap pertama memilih kaus, tahap kedua memilih celana.', 'Kalikan banyak pilihan tiap tahap, bukan menjumlahkannya.'],
    competencies: ['aturan perkalian'],
  },
  {
    id: 'komb-02',
    topicId: 'kombinatorika-lanjut',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'cepat',
    prompt: 'Hitung nilai $\\dbinom{6}{2}$.',
    answer: '15',
    acceptedAnswers: ['15'],
    explanation: '$\\dbinom{6}{2} = \\dfrac{6!}{2!\\,4!} = \\dfrac{6 \\cdot 5}{2} = 15$.',
    hints: [
      'Gunakan $\\dbinom{n}{k} = \\dfrac{n!}{k!\\,(n-k)!}$.',
      'Substitusikan $n = 6$ dan $k = 2$ sehingga menjadi $\\dfrac{6!}{2!\\,4!}$.',
      'Sederhanakan menjadi $\\dfrac{6 \\cdot 5}{2}$, karena faktor $4!$ saling menghapus.',
    ],
    competencies: ['kombinasi'],
  },
  {
    id: 'komb-03',
    topicId: 'kombinatorika-lanjut',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'konsep',
    prompt:
      'Tujuh bola dimasukkan ke dalam $3$ kotak. Menurut prinsip sarang merpati, paling sedikit ada satu kotak yang memuat … bola.',
    options: [
      { key: 'A', text: '$2$' },
      { key: 'B', text: '$3$' },
      { key: 'C', text: '$4$' },
      { key: 'D', text: '$7$' },
    ],
    answer: 'B',
    explanation:
      'Paling sedikit satu kotak memuat $\\left\\lceil \\dfrac{7}{3} \\right\\rceil = 3$ bola. Opsi A, $2$, muncul bila hasil bagi dibulatkan ke bawah, $\\left\\lfloor \\dfrac{7}{3} \\right\\rfloor = 2$, padahal kita mencari jaminan terburuk sehingga harus dibulatkan ke atas. Opsi C, $4$, muncul bila setelah membulatkan ke atas masih ditambah $1$, $3+1$. Opsi D, $7$, muncul bila menganggap semua bola dapat menumpuk pada satu kotak sehingga tidak ada pembagian sama sekali.',
    hints: ['Bagi banyak objek dengan banyak kotak, lalu bulatkan ke atas.', 'Pembulatan harus ke atas karena kita mencari jaminan minimum, bukan rata-rata.'],
    competencies: ['pigeonhole'],
  },
  {
    id: 'komb-04',
    topicId: 'kombinatorika-lanjut',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'cepat',
    prompt: 'Banyak himpunan bagian (termasuk himpunan kosong) dari himpunan beranggota $5$ adalah …',
    options: [
      { key: 'A', text: '$5$' },
      { key: 'B', text: '$10$' },
      { key: 'C', text: '$25$' },
      { key: 'D', text: '$32$' },
    ],
    answer: 'D',
    explanation:
      'Setiap anggota punya $2$ pilihan: dipilih atau tidak. Jadi banyak himpunan bagian $2^5 = 32$. Opsi A, $5$, muncul bila hanya menghitung himpunan bagian beranggota satu. Opsi B, $10$, muncul bila hanya menghitung pasangan, yaitu $\\binom{5}{2}$. Opsi C, $25 = 5^{2}$, muncul bila basis dan eksponen tertukar dari $2^{5}$.',
    hints: ['Gunakan aturan perkalian untuk $5$ keputusan bebas.', 'Mulai dari himpunan kosong hingga himpunan penuh, semua ukuran dihitung.'],
    competencies: ['aturan perkalian', 'himpunan bagian'],
  },
  {
    id: 'komb-05',
    topicId: 'kombinatorika-lanjut',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt:
      'Tentukan banyak bilangan bulat dari $1$ sampai $50$ yang habis dibagi $2$ atau $5$.',
    answer: '30',
    acceptedAnswers: ['30'],
    explanation:
      'Kelipatan $2$ ada $25$, kelipatan $5$ ada $10$, dan kelipatan $10$ (irisan) ada $5$. Dengan inklusi-eksklusi: $25 + 10 - 5 = 30$.',
    hints: ['Kurangi bilangan yang terhitung dua kali, yaitu kelipatan $10$.', 'Hitung dahulu $|A|$, $|B|$, dan $|A \\cap B|$ sebelum memakai $|A \\cup B| = |A| + |B| - |A \\cap B|$.'],
    competencies: ['inklusi-eksklusi'],
  },
  {
    id: 'komb-06',
    topicId: 'kombinatorika-lanjut',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt: 'Koefisien suku $x^4$ pada penjabaran $(1+x)^7$ adalah …',
    options: [
      { key: 'A', text: '$7$' },
      { key: 'B', text: '$21$' },
      { key: 'C', text: '$35$' },
      { key: 'D', text: '$70$' },
    ],
    answer: 'C',
    explanation:
      'Menurut teorema binomial, koefisien $x^4$ adalah $\\dbinom{7}{4} = 35$. Opsi B, $21 = \\dbinom{7}{2}$, muncul bila indeks $k$ tertukar dengan $n-k$ tanpa memperbaiki nilainya. Opsi A, $7$, muncul bila hanya membaca pangkat tertinggi atau memakai $\\dbinom{7}{1}$. Opsi D, $70 = \\dbinom{8}{4}$, muncul bila $n$ keliru dianggap $8$, misalnya menambah satu karena ada suku konstanta.',
    hints: ['Koefisien $x^k$ pada $(1+x)^n$ adalah $\\dbinom{n}{k}$.', 'Substitusikan $n=7$ dan $k=4$ ke koefisien binomial.'],
    competencies: ['koefisien binomial'],
  },
  {
    id: 'komb-07',
    topicId: 'kombinatorika-lanjut',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'konsep',
    prompt:
      'Jelaskan mengapa pada inklusi-eksklusi dua himpunan berlaku $|A \\cup B| = |A| + |B| - |A \\cap B|$. Berikan contoh bilangan yang menunjukkan perlunya pengurangan tersebut.',
    answer:
      'Jika kita menjumlahkan $|A|$ dan $|B|$, anggota yang berada di irisan $A \\cap B$ terhitung dua kali. Agar setiap anggota dihitung tepat sekali, kita kurangi sekali: $|A| + |B| - |A \\cap B|$. Contoh: dari bilangan $1$ sampai $30$, kelipatan $2$ ada $15$ dan kelipatan $3$ ada $10$. Menjumlahkan langsung memberi $25$, padahal bilangan kelipatan $6$ (ada $5$) terhitung dua kali. Jadi jawaban benar $15 + 10 - 5 = 20$.',
    explanation:
      'Kunci jawaban: menjelaskan cacah ganda pada irisan, menyebut perlunya pengurangan, dan memberi contoh konkret yang benar.',
    hints: ['Fokus pada anggota yang muncul di kedua himpunan.', 'Tunjukkan dengan kelipatan persekutuan.'],
    competencies: ['inklusi-eksklusi', 'komunikasi matematis'],
    rubric: [
      'Menjelaskan anggota irisan $A\\cap B$ terhitung dua kali ketika $|A|+|B|$ dijumlahkan',
      'Menyimpulkan perlunya mengurangi sekali $|A\\cap B|$ agar tiap anggota dihitung tepat sekali',
      'Memberikan contoh kelipatan persekutuan yang terhitung dua kali',
      'Menghitung hasil contoh dengan benar',
    ],
  },
  {
    id: 'komb-08',
    topicId: 'kombinatorika-lanjut',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'kontekstual',
    prompt:
      'Berapa paling sedikit siswa yang perlu hadir di suatu kelas agar pasti ada dua siswa yang lahir pada bulan yang sama?',
    answer: '13',
    acceptedAnswers: ['13', '13 siswa'],
    explanation:
      'Ada $12$ bulan sebagai "kotak". Dengan pigeonhole, dibutuhkan $12 + 1 = 13$ siswa agar pasti ada dua di bulan yang sama.',
    hints: ['Ada $12$ bulan yang berperan sebagai kotak.', 'Dengan $12$ siswa masih mungkin setiap bulan diisi tepat satu orang, sehingga jaminan baru muncul pada siswa ke-$13$.'],
    competencies: ['pigeonhole'],
  },
  {
    id: 'komb-09',
    topicId: 'kombinatorika-lanjut',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'kontekstual',
    prompt:
      'Dari $40$ siswa, $25$ menyukai matematika, $20$ menyukai fisika, dan $10$ menyukai keduanya. Banyak siswa yang menyukai matematika atau fisika adalah …',
    options: [
      { key: 'A', text: '$35$' },
      { key: 'B', text: '$45$' },
      { key: 'C', text: '$55$' },
      { key: 'D', text: '$30$' },
    ],
    answer: 'A',
    explanation:
      'Dengan inklusi-eksklusi: $|M \\cup F| = 25 + 20 - 10 = 35$ siswa. Opsi B, $45$, muncul bila $25$ dan $20$ langsung dijumlahkan tanpa mengurangi irisan. Opsi C, $55$, muncul bila irisan justru ditambahkan, $25 + 20 + 10$. Opsi D, $30$, muncul bila memakai $40 - 10$ (total siswa dikurangi irisan), bukan rumus gabungan dua himpunan.',
    hints: ['Kurangi banyak siswa yang menyukai keduanya.', 'Gunakan $|M \\cup F| = |M| + |F| - |M \\cap F|$.'],
    competencies: ['inklusi-eksklusi', 'pemodelan'],
  },
  {
    id: 'komb-10',
    topicId: 'kombinatorika-lanjut',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Buktikan bahwa di antara sebarang $5$ bilangan bulat yang dipilih dari $\\{1, 2, \\ldots, 8\\}$, selalu ada dua bilangan yang jumlahnya $9$.',
    answer:
      'Bagi $\\{1,2,\\ldots,8\\}$ menjadi pasangan berjumlah $9$: $\\{1,8\\}$, $\\{2,7\\}$, $\\{3,6\\}$, $\\{4,5\\}$. Ada $4$ pasangan. Pandang tiap pasangan sebagai satu kotak. Karena kita memilih $5$ bilangan dari $4$ kotak, prinsip sarang merpati menjamin ada satu kotak yang memuat paling sedikit $2$ bilangan. Kedua bilangan itu berasal dari pasangan yang sama, sehingga jumlahnya $9$. Terbukti.',
    explanation:
      'Kunci jawaban: mempartisi himpunan menjadi $4$ pasangan berjumlah $9$, lalu menerapkan pigeonhole pada $5$ objek dan $4$ kotak.',
    hints: ['Bentuk pasangan bilangan yang berjumlah $9$.', 'Gunakan $5 > 4$ untuk memicu pigeonhole.'],
    competencies: ['pigeonhole', 'penalaran', 'pembuktian'],
    rubric: [
      'Mempartisi $\\{1,\\ldots,8\\}$ menjadi pasangan $\\{1,8\\},\\{2,7\\},\\{3,6\\},\\{4,5\\}$ yang berjumlah $9$',
      'Menyebut ada $4$ pasangan yang berperan sebagai kotak',
      'Menerapkan pigeonhole karena $5$ bilangan lebih banyak daripada $4$ kotak',
      'Menyimpulkan ada dua bilangan dari pasangan sama sehingga jumlahnya $9$',
    ],
  },
  {
    id: 'komb-11',
    topicId: 'kombinatorika-lanjut',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penalaran',
    prompt: 'Tentukan koefisien suku $x^3$ pada penjabaran $(2+x)^5$.',
    answer: '40',
    acceptedAnswers: ['40'],
    explanation:
      'Suku dengan $x^3$ berbentuk $\\dbinom{5}{3} \\cdot 2^{2} \\cdot x^3 = 10 \\cdot 4 \\cdot x^3$, sehingga koefisiennya $40$.',
    hints: ['Gunakan $\\dbinom{n}{k} a^{n-k} b^k$ dengan $a = 2$ dan $b = x$.', 'Karena $b=x$, pangkat $x^3$ berarti $k=3$ sehingga sisa pangkat pada $a$ adalah $n-k=2$.'],
    competencies: ['teorema binomial', 'koefisien binomial'],
  },
  {
    id: 'komb-12',
    topicId: 'kombinatorika-lanjut',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Sebuah panitia beranggota $3$ orang akan dibentuk dari $5$ pria dan $4$ wanita. Berapa banyak susunan panitia yang memuat paling sedikit $1$ wanita?',
    answer:
      'Total cara memilih $3$ orang dari $9$ adalah $\\dbinom{9}{3} = 84$. Cara memilih panitia tanpa wanita (semuanya pria) adalah $\\dbinom{5}{3} = 10$. Dengan strategi komplemen, banyak panitia yang memuat paling sedikit $1$ wanita adalah $84 - 10 = 74$.',
    explanation:
      'Kunci jawaban: memakai komplemen, yaitu total susunan dikurangi susunan tanpa wanita.',
    hints: ['Hitung total terlebih dahulu.', 'Kurangi dengan susunan yang semuanya pria.'],
    competencies: ['kombinasi', 'strategi komplemen', 'pemodelan'],
    rubric: [
      'Menghitung total cara memilih $3$ dari $9$ yaitu $\\dbinom{9}{3}=84$',
      'Menghitung cara tanpa wanita (semuanya pria) $\\dbinom{5}{3}=10$',
      'Memakai strategi komplemen $84-10=74$',
      'Menyatakan hasil akhir banyak panitia $74$',
    ],
  },
  {
    id: 'komb-13',
    topicId: 'kombinatorika-lanjut',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Buktikan bahwa di antara sebarang $n+1$ bilangan bulat yang dipilih dari $\\{1, 2, \\ldots, 2n\\}$, selalu ada dua bilangan yang jumlahnya $2n+1$.',
    answer:
      'Pasangkan bilangan $\\{1, 2, \\ldots, 2n\\}$ menjadi $\\{1, 2n\\}$, $\\{2, 2n-1\\}$, $\\ldots$, $\\{n, n+1\\}$. Terdapat tepat $n$ pasangan, dan setiap pasangan berjumlah $2n+1$. Pandang setiap pasangan sebagai satu kotak. Karena kita memilih $n+1$ bilangan dari $n$ kotak, prinsip sarang merpati menjamin ada kotak yang memuat paling sedikit $2$ bilangan. Kedua bilangan tersebut berada dalam satu pasangan, sehingga jumlahnya $2n+1$. Terbukti.',
    explanation:
      'Kunci jawaban: menggeneralisasi partisi menjadi $n$ pasangan berjumlah $2n+1$ dan menerapkan pigeonhole pada $n+1$ objek.',
    hints: ['Ulangi pola pasangan pada soal sebelumnya.', 'Tunjukkan ada tepat $n$ pasangan.'],
    competencies: ['pigeonhole', 'penalaran', 'pembuktian'],
    rubric: [
      'Membentuk $n$ pasangan $\\{1,2n\\},\\{2,2n-1\\},\\ldots,\\{n,n+1\\}$ yang berjumlah $2n+1$',
      'Menunjukkan tepat ada $n$ pasangan (kotak)',
      'Menerapkan pigeonhole pada $n+1$ bilangan dan $n$ kotak',
      'Menyimpulkan dua bilangan dalam satu pasangan berjumlah $2n+1$',
    ],
  },
  {
    id: 'komb-14',
    topicId: 'kombinatorika-lanjut',
    difficulty: 'mahir',
    type: 'multiple-choice',
    category: 'evaluasi',
    prompt:
      'Banyak bilangan bulat dari $1$ sampai $200$ yang habis dibagi $3$ atau $5$ adalah …',
    options: [
      { key: 'A', text: '$93$' },
      { key: 'B', text: '$106$' },
      { key: 'C', text: '$119$' },
      { key: 'D', text: '$80$' },
    ],
    answer: 'A',
    explanation:
      'Kelipatan $3$: $\\left\\lfloor \\dfrac{200}{3} \\right\\rfloor = 66$. Kelipatan $5$: $\\left\\lfloor \\dfrac{200}{5} \\right\\rfloor = 40$. Kelipatan $15$: $\\left\\lfloor \\dfrac{200}{15} \\right\\rfloor = 13$. Jadi $66 + 40 - 13 = 93$. Opsi B, $106$, muncul bila irisan tidak dikurangkan, $66 + 40$. Opsi C, $119$, muncul bila irisan justru ditambahkan, $66 + 40 + 13$. Opsi D, $80$, muncul bila irisan dikurangi dua kali, $66 + 40 - 2(13)$.',
    hints: ['Hitung kelipatan $3$, kelipatan $5$, lalu kurangi kelipatan $15$.', 'Irisan kedua himpunan adalah kelipatan KPK dari $3$ dan $5$, yaitu kelipatan $15$.'],
    competencies: ['inklusi-eksklusi', 'evaluasi'],
  },
  {
    id: 'komb-15',
    topicId: 'kombinatorika-lanjut',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'kontekstual',
    prompt:
      'Sebuah fungsi hash memetakan setiap kunci data ke salah satu dari $5$ slot penyimpanan. Berapa banyak kunci berbeda paling sedikit yang harus dimasukkan agar dapat **dijamin** ada dua kunci menempati slot yang sama?',
    answer: '6',
    acceptedAnswers: ['6', '6 kunci'],
    explanation:
      'Dengan $5$ slot sebagai "kotak", lima kunci masih dapat menempati slot yang semuanya berbeda, sehingga tabrakan belum pasti terjadi. Begitu kunci ke-$6$ masuk, prinsip sarang merpati menjamin paling sedikit dua kunci berbagi slot. Jadi dibutuhkan $5 + 1 = 6$ kunci.',
    hints: [
      'Pandang tiap slot sebagai satu "kotak" pada prinsip sarang merpati.',
      'Cari banyak kunci yang lebih besar satu daripada banyak slot agar tabrakan pasti.',
    ],
    competencies: ['pigeonhole', 'pemodelan', 'kontekstual'],
  },
  {
    id: 'komb-16',
    topicId: 'kombinatorika-lanjut',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'evaluasi',
    prompt:
      'Sebuah layanan membangkitkan kode sesi berupa $4$ karakter, tiap karakter dipilih dari $10$ angka dan **boleh berulang**. Manajer menyatakan banyak kode sesi adalah $10^{4}$. Manakah pernyataan yang paling tepat?',
    options: [
      {
        key: 'A',
        text:
          'Manajer benar; karena pengulangan diperbolehkan, tiap posisi mempunyai $10$ pilihan sehingga total $10^{4}$',
      },
      {
        key: 'B',
        text: 'Manajer salah; kode sesi harus unik sehingga seharusnya $P(10,4) = 5.040$',
      },
      { key: 'C', text: 'Manajer salah; seharusnya $4^{10}$ karena ada $4$ karakter dan $10$ angka' },
      { key: 'D', text: 'Manajer benar, dan nilai $10^{4}$ kebetulan sama dengan $P(10,4)$' },
    ],
    answer: 'A',
    explanation:
      'Karena setiap karakter boleh berulang dan dipilih bebas dari $10$ angka, tiap posisi punya $10$ pilihan, sehingga banyak kode $= 10 \\cdot 10 \\cdot 10 \\cdot 10 = 10^{4}$. Opsi B keliru karena keunikan kode di seluruh sistem tidak melarang pengulangan karakter di dalam satu kode. Opsi C menukar basis dan eksponen. Opsi D salah karena $10^{4} = 10.000$ sedangkan $P(10,4) = 5.040$, jadi keduanya tidak sama.',
    hints: [
      'Pengulangan diperbolehkan berarti tiap posisi dipilih dari seluruh himpunan yang sama.',
      'Aturan perkalian: kalikan banyak pilihan setiap posisi tanpa mengurangi pilihan sebelumnya.',
    ],
    competencies: ['aturan perkalian', 'pemodelan', 'evaluasi'],
  },
];
