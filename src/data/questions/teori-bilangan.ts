import type { Question } from '@/types/content';

export const teoriBilanganQuestions: Question[] = [
  {
    id: 'tbil-01',
    topicId: 'teori-bilangan',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'cepat',
    prompt: 'Bilangan berikut yang habis membagi $84$ adalah …',
    options: [
      { key: 'A', text: '$5$' },
      { key: 'B', text: '$8$' },
      { key: 'C', text: '$9$' },
      { key: 'D', text: '$12$' },
    ],
    answer: 'D',
    explanation:
      '$84 = 12 \\cdot 7$, sehingga $12 \\mid 84$. Adapun $84$ tidak habis dibagi $5$, $8$, maupun $9$.',
    hints: ['Coba bagi $84$ oleh setiap pilihan; habis berarti sisanya nol.'],
    competencies: ['keterbagian'],
  },
  {
    id: 'tbil-02',
    topicId: 'teori-bilangan',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'cepat',
    prompt: 'Tentukan $\\gcd(24,36)$.',
    answer: '12',
    acceptedAnswers: ['12'],
    explanation:
      '$24=2^3\\cdot 3$ dan $36=2^2\\cdot 3^2$. FPB mengambil pangkat terkecil tiap prima: $2^2\\cdot 3=12$.',
    hints: ['Faktorkan kedua bilangan, lalu ambil pangkat terkecil setiap prima yang sama.'],
    competencies: ['FPB'],
  },
  {
    id: 'tbil-03',
    topicId: 'teori-bilangan',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'konsep',
    prompt: 'Pernyataan manakah yang benar tentang bilangan prima?',
    options: [
      { key: 'A', text: '$1$ termasuk bilangan prima.' },
      { key: 'B', text: 'Bilangan prima terkecil adalah $2$.' },
      { key: 'C', text: 'Semua bilangan prima adalah bilangan ganjil.' },
      { key: 'D', text: 'Setiap bilangan ganjil adalah bilangan prima.' },
    ],
    answer: 'B',
    explanation:
      '$1$ bukan prima karena hanya punya satu faktor positif. Bilangan prima terkecil adalah $2$, yang juga satu-satunya prima genap, sehingga pernyataan "semua prima ganjil" salah. Tidak semua bilangan ganjil prima, misalnya $9$ dan $15$.',
    hints: ['Ingat syarat prima: lebih besar dari $1$ dan hanya punya dua faktor positif.'],
    competencies: ['bilangan prima'],
  },
  {
    id: 'tbil-04',
    topicId: 'teori-bilangan',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'penerapan',
    prompt: 'Tentukan sisa pembagian $100$ oleh $7$.',
    answer: '2',
    acceptedAnswers: ['2'],
    explanation:
      '$100 = 14\\cdot 7 + 2$, sehingga sisanya $2$. Dengan kata lain $100 \\equiv 2 \\pmod 7$.',
    hints: ['Cari kelipatan $7$ terbesar yang tidak melebihi $100$.'],
    competencies: ['sisa pembagian', 'modulo'],
  },
  {
    id: 'tbil-05',
    topicId: 'teori-bilangan',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt: 'Gunakan algoritma Euklides untuk menentukan $\\gcd(1071,462)$.',
    answer: '21',
    acceptedAnswers: ['21'],
    explanation:
      '$1071=2\\cdot 462+147$, $462=3\\cdot 147+21$, $147=7\\cdot 21+0$. Sisa terakhir yang tak nol adalah $21$, jadi $\\gcd(1071,462)=21$.',
    hints: ['Ulangi pembagian bersisa sampai sisanya nol.', 'FPB adalah sisa terakhir yang tak nol.'],
    competencies: ['algoritma Euklides'],
  },
  {
    id: 'tbil-06',
    topicId: 'teori-bilangan',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt: 'Tentukan $\\operatorname{lcm}(18,24)$.',
    answer: '72',
    acceptedAnswers: ['72'],
    explanation:
      '$\\gcd(18,24)=6$, sehingga $\\operatorname{lcm}(18,24)=\\dfrac{18\\cdot 24}{6}=\\dfrac{432}{6}=72$.',
    hints: ['Gunakan $\\gcd(a,b)\\cdot\\operatorname{lcm}(a,b)=ab$.'],
    competencies: ['KPK'],
  },
  {
    id: 'tbil-07',
    topicId: 'teori-bilangan',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt: 'Tentukan sisa $2^{10}$ saat dibagi $7$.',
    answer: '2',
    acceptedAnswers: ['2'],
    explanation:
      '$2^3=8\\equiv 1 \\pmod 7$, sehingga $2^{10}=2\\cdot(2^3)^3\\equiv 2\\cdot 1^3=2 \\pmod 7$. Sisanya $2$.',
    hints: ['Cari pangkat kecil yang kongruen dengan $1$ modulo $7$.'],
    competencies: ['aritmetika modular', 'eksponen'],
  },
  {
    id: 'tbil-08',
    topicId: 'teori-bilangan',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'konsep',
    prompt:
      'Jelaskan mengapa pada algoritma Euklides berlaku $\\gcd(a,b)=\\gcd(b,\\, a \\bmod b)$.',
    answer:
      'Tulis $a=qb+r$ dengan $r=a \\bmod b$. Setiap pembagi persekutuan $d$ dari $a$ dan $b$ juga membagi $r=a-qb$; jadi $d$ membagi $b$ dan $r$. Sebaliknya, setiap pembagi persekutuan $d$ dari $b$ dan $r$ juga membagi $a=qb+r$. Jadi himpunan pembagi persekutuan $a,b$ sama dengan himpunan pembagi persekutuan $b,r$, sehingga pembagi terbesarnya pun sama: $\\gcd(a,b)=\\gcd(b,r)$.',
    explanation:
      'Kunci jawaban: menunjukkan kedua pasangan memiliki himpunan pembagi persekutuan yang sama, sehingga FPB-nya identik.',
    hints: ['Gunakan $a=qb+r$.', 'Tunjukkan arah dua kali: pembagi $a,b$ membagi $r$, dan pembagi $b,r$ membagi $a$.'],
    competencies: ['algoritma Euklides', 'penalaran'],
  },
  {
    id: 'tbil-09',
    topicId: 'teori-bilangan',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'kontekstual',
    prompt:
      'Dua lampu hias berkedip bersamaan pada awalnya. Lampu pertama berkedip setiap $12$ detik dan lampu kedua setiap $18$ detik. Setelah berapa detik keduanya kembali berkedip bersamaan?',
    answer: '36',
    acceptedAnswers: ['36'],
    explanation:
      'Keduanya berkedip bersamaan pada kelipatan persekutuan waktu. $\\operatorname{lcm}(12,18)=36$, jadi mereka berkedip bersamaan lagi setelah $36$ detik.',
    hints: ['Gunakan KPK dari kedua selang waktu.'],
    competencies: ['KPK', 'kontekstual'],
  },
  {
    id: 'tbil-10',
    topicId: 'teori-bilangan',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Buktikan bahwa jika $a \\equiv b \\pmod m$, maka $a^{n} \\equiv b^{n} \\pmod m$ untuk setiap bilangan bulat positif $n$.',
    answer:
      'Kita buktikan dengan induksi pada $n$. Basis $n=1$: $a \\equiv b \\pmod m$ tepat yang diketahui. Hipotesis: andaikan $a^{k}\\equiv b^{k}\\pmod m$. Karena kongruensi boleh dikalikan, $a^{k}\\cdot a \\equiv b^{k}\\cdot b \\pmod m$, yaitu $a^{k+1}\\equiv b^{k+1}\\pmod m$. Jadi berlaku untuk semua $n \\ge 1$.',
    explanation:
      'Kunci jawaban: memakai induksi dan sifat bahwa kongruensi boleh dikalikan suku demi suku, $ac \\equiv bd \\pmod m$ bila $a\\equiv b$ dan $c\\equiv d$.',
    hints: ['Gunakan sifat $a\\equiv b$ dan $c\\equiv d$ mengakibatkan $ac\\equiv bd \\pmod m$.', 'Buktikan dengan induksi pada pangkat $n$.'],
    competencies: ['kongruensi modulo', 'pembuktian'],
  },
  {
    id: 'tbil-11',
    topicId: 'teori-bilangan',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Buktikan bahwa hasil kali dua bilangan bulat yang masing-masing berbentuk $4k+1$ juga berbentuk $4m+1$ untuk suatu bilangan bulat $m$.',
    answer:
      'Misalkan kedua bilangan $4k+1$ dan $4l+1$. Hasil kalinya $(4k+1)(4l+1)=16kl+4k+4l+1=4(4kl+k+l)+1$. Dengan menetapkan $m=4kl+k+l$, yang jelas bilangan bulat, hasil kalinya berbentuk $4m+1$. Terbukti.',
    explanation:
      'Kunci jawaban: menjabarkan hasil kali lalu mengeluarkan faktor $4$ dari semua suku kecuali konstanta $1$.',
    hints: ['Jabarkan $(4k+1)(4l+1)$.', 'Kelompokkan suku-suku yang memuat faktor $4$.'],
    competencies: ['keterbagian', 'modulo'],
  },
  {
    id: 'tbil-12',
    topicId: 'teori-bilangan',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Tentukan bilangan bulat positif terkecil $x$ yang memenuhi $x \\equiv 2 \\pmod 3$ dan $x \\equiv 3 \\pmod 5$ sekaligus.',
    answer:
      'Bilangan yang $\\equiv 2 \\pmod 3$ adalah $2,5,8,11,\\dots$ sedangkan yang $\\equiv 3 \\pmod 5$ adalah $3,8,13,\\dots$. Nilai persekutuan terkecil adalah $x=8$. Pemeriksaan: $8 \\bmod 3=2$ dan $8 \\bmod 5=3$. Karena $3$ dan $5$ saling prima, seluruh solusi berbentuk $8+15t$; yang positif terkecil adalah $8$.',
    explanation:
      'Kunci jawaban: mendaftar atau menggunakan Teorema Sisa Tionghoa sederhana pada modulus $15$, lalu menguji sisa.',
    hints: ['Daftar bilangan dengan sisa $2$ modulo $3$, lalu periksa sisa modulo $5$.', 'Karena modulus $3$ dan $5$ saling prima, solusinya berulang setiap $15$.'],
    competencies: ['kongruensi modulo', 'pemodelan'],
  },
  {
    id: 'tbil-13',
    topicId: 'teori-bilangan',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'kontekstual',
    prompt:
      'Dalam sebuah sandi modular (modulo $26$), pencarian invers dari $3$ berarti mencari $x$ dengan $0 \\le x < 26$ sehingga $3x \\equiv 1 \\pmod{26}$. Tentukan $x$ dan jelaskan caranya.',
    answer:
      'Kita mencari $x$ dengan $3x-1$ habis dibagi $26$. Karena $3\\cdot 9=27=26+1$, maka $3\\cdot 9\\equiv 1 \\pmod{26}$. Jadi $x=9$ memenuhi. Pemeriksaan: $3\\cdot 9=27$, dan $27 \\bmod 26=1$.',
    explanation:
      'Kunci jawaban: menguji kelipatan $3$ yang bersisa $1$ saat dibagi $26$, atau mengamati $27=26+1$.',
    hints: ['Cari kelipatan $3$ yang jika dikurangi $1$ habis dibagi $26$.', 'Perhatikan $27=26+1$.'],
    competencies: ['aritmetika modular', 'invers modulo'],
  },
  {
    id: 'tbil-14',
    topicId: 'teori-bilangan',
    difficulty: 'mahir',
    type: 'multiple-choice',
    category: 'evaluasi',
    prompt:
      'Seorang siswa menyimpulkan "$121$ adalah bilangan prima karena tidak habis dibagi $2$, $3$, $5$, maupun $7$." Manakah penilaian yang tepat?',
    options: [
      { key: 'A', text: 'Kesimpulannya benar.' },
      { key: 'B', text: 'Pengujian kurang lengkap; harus diuji sampai $\\sqrt{121}=11$, dan ternyata $121=11\\times 11$.' },
      { key: 'C', text: 'Pengujian terlalu banyak; cukup memeriksa pembagi $2$ saja.' },
      { key: 'D', text: '$121$ prima karena angka-angkanya berjumlah $4$.' },
    ],
    answer: 'B',
    explanation:
      'Untuk menguji keprimaan $n$, cukup memeriksa pembagi prima sampai $\\sqrt{n}$. Di sini $\\sqrt{121}=11$, dan $11 \\mid 121$ karena $121=11\\times 11$. Jadi $121$ bukan bilangan prima dan pengujian siswa belum lengkap.',
    hints: ['Aturan: uji pembagi prima sampai akar kuadrat bilangan itu.'],
    competencies: ['bilangan prima', 'evaluasi'],
  },
  {
    id: 'tbil-15',
    topicId: 'teori-bilangan',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Tentukan dua angka terakhir dari $7^{100}$. Jelaskan langkah pemodelanmu.',
    answer:
      'Dua angka terakhir adalah nilai $7^{100} \\bmod 100$. Hitung beberapa pangkat: $7^1=7$, $7^2=49$, $7^3=343\\equiv 43$, $7^4=2401\\equiv 1 \\pmod{100}$. Karena $7^4\\equiv 1$, maka $7^{100}=(7^4)^{25}\\equiv 1^{25}=1 \\pmod{100}$. Jadi dua angka terakhirnya $01$.',
    explanation:
      'Kunci jawaban: memodelkan "dua angka terakhir" sebagai sisa modulo $100$, menemukan periode $7^4\\equiv 1$, lalu memakai sifat pangkat kongruensi.',
    hints: ['Dua angka terakhir = sisa bagi $100$.', 'Cari pangkat $7$ yang kongruen dengan $1$ modulo $100$.'],
    competencies: ['aritmetika modular', 'pemodelan'],
  },
];
