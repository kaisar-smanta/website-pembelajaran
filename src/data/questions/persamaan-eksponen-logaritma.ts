import type { Question } from '@/types/content';

export const persamaanEksponenLogaritmaQuestions: Question[] = [
  {
    id: 'ekslog-01',
    topicId: 'persamaan-eksponen-logaritma',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'cepat',
    prompt: 'Tentukan nilai $x$ yang memenuhi $2^{x+1}=32$.',
    options: [
      { key: 'A', text: '$3$' },
      { key: 'B', text: '$4$' },
      { key: 'C', text: '$5$' },
      { key: 'D', text: '$6$' },
    ],
    answer: 'B',
    explanation:
      'Nyatakan $32=2^{5}$, sehingga $2^{x+1}=2^{5}$. Karena basisnya sama, pangkatnya sama: $x+1=5 \\Rightarrow x=4$. Periksa: $2^{5}=32$. Opsi $3$ muncul bila $32$ keliru ditulis $2^{4}$, opsi $5$ bila lupa mengurangi $1$, dan opsi $6$ bila menambah $1$, bukan mengurangi.',
    hints: ['Tulis $32$ sebagai pangkat dari $2$.'],
    competencies: ['persamaan eksponen', 'menyamakan basis'],
  },
  {
    id: 'ekslog-02',
    topicId: 'persamaan-eksponen-logaritma',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'cepat',
    prompt: 'Nilai dari $\\log_{3}81$ adalah …',
    options: [
      { key: 'A', text: '$3$' },
      { key: 'B', text: '$27$' },
      { key: 'C', text: '$5$' },
      { key: 'D', text: '$4$' },
    ],
    answer: 'D',
    explanation:
      'Karena $3^{4}=81$, maka menurut definisi logaritma $\\log_{3}81=4$. Opsi $3$ menjawab basisnya, opsi $27$ berasal dari membagi $81$ dengan $3$, dan opsi $5$ dari menebak pangkat tanpa memeriksa hasilnya.',
    hints: ['Cari pangkat yang membuat $3$ menjadi $81$.'],
    competencies: ['definisi logaritma'],
  },
  {
    id: 'ekslog-03',
    topicId: 'persamaan-eksponen-logaritma',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'cepat',
    prompt: 'Tentukan nilai $x$ dari $\\log_{2}(3x+4)=4$.',
    answer: '4',
    acceptedAnswers: ['4'],
    explanation:
      'Ubah ke bentuk eksponen: $3x+4=2^{4}=16$, sehingga $3x=12$ dan $x=4$. Periksa numerus: $3(4)+4=16>0$ terpenuhi.',
    hints: [
      'Gunakan definisi $\\log_{a}b=c \\iff a^{c}=b$.',
      'Setelah menjadi persamaan linear, selesaikan untuk $x$.',
    ],
    competencies: ['persamaan logaritma'],
  },
  {
    id: 'ekslog-04',
    topicId: 'persamaan-eksponen-logaritma',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'konsep',
    prompt: 'Tentukan nilai $x$ dari $5^{2x}=125$. Tulis jawaban dalam bentuk pecahan.',
    answer: '3/2',
    acceptedAnswers: ['3/2', '1,5', '1.5', '1,50', '1.50'],
    explanation:
      '$125=5^{3}$, maka $5^{2x}=5^{3} \\Rightarrow 2x=3 \\Rightarrow x=\\dfrac{3}{2}$.',
    hints: ['Nyatakan $125$ sebagai $5^{3}$.', 'Selesaikan $2x=3$.'],
    competencies: ['persamaan eksponen'],
  },
  {
    id: 'ekslog-05',
    topicId: 'persamaan-eksponen-logaritma',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'konsep',
    prompt: 'Tentukan nilai $x$ yang memenuhi $4^{x+1}=8^{x-1}$.',
    options: [
      { key: 'A', text: '$2$' },
      { key: 'B', text: '$3$' },
      { key: 'C', text: '$5$' },
      { key: 'D', text: '$6$' },
    ],
    answer: 'C',
    explanation:
      'Samakan basis menjadi $2$: $4^{x+1}=2^{2(x+1)}$ dan $8^{x-1}=2^{3(x-1)}$. Maka $2x+2=3x-3 \\Rightarrow x=5$. Periksa: $4^{6}=4096$ dan $8^{4}=4096$. Opsi $2$ muncul bila faktor pangkat tidak didistribusikan, opsi $3$ bila salah mengalikan suku dalam tanda kurung, dan opsi $6$ bila salah memindahkan suku.',
    hints: ['Ubahlah kedua ruas ke basis $2$.', 'Gunakan $4=2^{2}$ dan $8=2^{3}$.'],
    competencies: ['persamaan eksponen', 'menyamakan basis'],
  },
  {
    id: 'ekslog-06',
    topicId: 'persamaan-eksponen-logaritma',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt:
      'Diberikan persamaan $9^{x}-4\\cdot3^{x}+3=0$. Tentukan nilai $x$ yang terbesar.',
    answer: '1',
    acceptedAnswers: ['1'],
    explanation:
      'Karena $9^{x}=(3^{x})^{2}$, misalkan $t=3^{x}>0$. Maka $t^{2}-4t+3=0 \\Rightarrow (t-1)(t-3)=0$, sehingga $t=1$ atau $t=3$. Dari $3^{x}=1$ diperoleh $x=0$, dan dari $3^{x}=3$ diperoleh $x=1$. Nilai terbesar adalah $1$.',
    hints: ['Misalkan $t=3^{x}$ sehingga muncul persamaan kuadrat.', 'Ingat $9^{x}=(3^{x})^{2}$.'],
    competencies: ['persamaan eksponen', 'substitusi variabel'],
  },
  {
    id: 'ekslog-07',
    topicId: 'persamaan-eksponen-logaritma',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt: 'Nilai dari $\\log_{2}12+\\log_{2}6-\\log_{2}9$ adalah …',
    options: [
      { key: 'A', text: '$1$' },
      { key: 'B', text: '$3$' },
      { key: 'C', text: '$2$' },
      { key: 'D', text: '$4$' },
    ],
    answer: 'B',
    explanation:
      'Gabungkan dengan sifat logaritma: $\\log_{2}12+\\log_{2}6-\\log_{2}9=\\log_{2}\\left(\\dfrac{12\\cdot6}{9}\\right)=\\log_{2}8=3$. Opsi A ($1$) menjumlahkan $12$ dan $6$ lalu membaginya dengan $9$ sehingga memperoleh $\\log_{2}2=1$. Opsi C ($2$) salah menyederhanakan $\\dfrac{12\\cdot6}{9}$ menjadi $4$ sehingga memperoleh $\\log_{2}4=2$. Opsi D ($4$) menganggap hasilnya $\\log_{2}16=4$ karena keliru menambah satu langkah perkalian.',
    hints: ['Penjumlahan menjadi perkalian, pengurangan menjadi pembagian.', 'Hitung $\\dfrac{12\\cdot6}{9}$ lebih dahulu.'],
    competencies: ['sifat logaritma'],
  },
  {
    id: 'ekslog-08',
    topicId: 'persamaan-eksponen-logaritma',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt: 'Tentukan nilai $x$ dari $\\log_{3}(x+2)=2$.',
    answer: '7',
    acceptedAnswers: ['7'],
    explanation:
      'Ubah ke bentuk eksponen: $x+2=3^{2}=9 \\Rightarrow x=7$. Periksa syarat numerus: $x+2=9>0$ terpenuhi.',
    hints: [
      'Gunakan definisi $\\log_{a}b=c \\iff a^{c}=b$.',
      'Setelah memperoleh $x+2=9$, kurangkan $2$ dari kedua ruas.',
    ],
    competencies: ['persamaan logaritma'],
  },
  {
    id: 'ekslog-09',
    topicId: 'persamaan-eksponen-logaritma',
    difficulty: 'mahir',
    type: 'multiple-choice',
    category: 'penalaran',
    prompt: 'Tentukan nilai $x$ yang memenuhi $3^{2x+1}=27^{x-2}$.',
    options: [
      { key: 'A', text: '$3$' },
      { key: 'B', text: '$6$' },
      { key: 'C', text: '$8$' },
      { key: 'D', text: '$7$' },
    ],
    answer: 'D',
    explanation:
      'Karena $27=3^{3}$, maka $27^{x-2}=3^{3(x-2)}=3^{3x-6}$. Samakan pangkat: $2x+1=3x-6 \\Rightarrow x=7$. Periksa: kedua ruas bernilai $3^{15}$. Opsi $3$ muncul bila $3$ tidak didistribusikan ke $-2$, opsi $6$ bila salah memindahkan suku, dan opsi $8$ bila menambah $1$, bukan mengurangi.',
    hints: [
      'Ubahlah $27$ menjadi pangkat basis $3$.',
      'Distribusikan eksponen $3(x-2)$ dengan benar sebelum menyamakan pangkat.',
    ],
    competencies: ['persamaan eksponen', 'menyamakan basis'],
  },
  {
    id: 'ekslog-10',
    topicId: 'persamaan-eksponen-logaritma',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Tentukan nilai $x$ dari $\\log_{2}x+\\log_{2}(x-2)=3$. Tuliskan langkah penyelesaian dan periksa syarat numerusnya.',
    answer:
      'Gabungkan kedua logaritma: $\\log_{2}[x(x-2)]=3$. Ubah ke bentuk eksponen: $x(x-2)=2^{3}=8$, sehingga $x^{2}-2x-8=0$. Faktorkan: $(x-4)(x+2)=0$, jadi $x=4$ atau $x=-2$. Syarat numerus menuntut $x>0$ dan $x-2>0$, yaitu $x>2$. Nilai $x=-2$ ditolak karena numerusnya negatif, sehingga solusinya $x=4$. Periksa: $\\log_{2}4+\\log_{2}2=2+1=3$.',
    explanation:
      'Kunci jawaban: menggunakan sifat perkalian logaritma, mengubah ke bentuk eksponen, lalu menolak solusi yang melanggar syarat numerus positif.',
    hints: [
      'Sifat perkalian: $\\log_{a}m+\\log_{a}n=\\log_{a}(mn)$.',
      'Ubah hasilnya ke bentuk eksponen $2^{3}=8$.',
      'Selalu periksa syarat $x>0$ dan $x-2>0$.',
    ],
    competencies: ['persamaan logaritma', 'syarat numerus'],
    rubric: [
      'Menggabungkan logaritma dengan sifat perkalian',
      'Mengubah ke bentuk eksponen',
      'Menyelesaikan persamaan kuadrat',
      'Memeriksa dan menolak solusi yang melanggar syarat numerus',
    ],
  },
  {
    id: 'ekslog-11',
    topicId: 'persamaan-eksponen-logaritma',
    difficulty: 'mahir',
    type: 'short-answer',
    category: 'penalaran',
    prompt: 'Diketahui $2^{a}=3$. Tentukan nilai dari $4^{a+1}$.',
    answer: '36',
    acceptedAnswers: ['36'],
    explanation:
      '$4^{a+1}=(2^{2})^{a+1}=2^{2a+2}=(2^{a})^{2}\\cdot2^{2}=3^{2}\\cdot4=9\\cdot4=36$.',
    hints: ['Tulis $4$ sebagai $2^{2}$.', 'Gunakan $(2^{a})^{2}=3^{2}$.'],
    competencies: ['sifat eksponen', 'manipulasi aljabar'],
  },
  {
    id: 'ekslog-12',
    topicId: 'persamaan-eksponen-logaritma',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Sebuah populasi bakteri berlipat dua setiap 30 menit. Jika mula-mula terdapat 50 bakteri, setelah berapa jam populasi mencapai 800 bakteri? Sertakan model dan langkah penyelesaianmu.',
    answer:
      'Setiap selang 30 menit populasi dikalikan 2, sehingga setelah $n$ selang populasi adalah $P(n)=50\\cdot2^{n}$. Kita mencari $n$ dengan $50\\cdot2^{n}=800$, yaitu $2^{n}=16$. Karena $16=2^{4}$, maka $n=4$. Empat selang 30 menit sama dengan $4\\cdot30=120$ menit $=2$ jam. Jadi populasi mencapai $800$ bakteri setelah $2$ jam.',
    explanation:
      'Kunci jawaban: memodelkan pertumbuhan berlipat sebagai $P=50\\cdot2^{n}$, menyamakan basis untuk menemukan banyak selang, lalu mengubahnya ke satuan jam.',
    hints: [
      'Bentuk modelnya $P(n)=50\\cdot2^{n}$.',
      'Selesaikan $50\\cdot2^{n}=800$ dengan menyamakan basis $2$.',
      'Jangan lupa mengubah banyak selang menjadi jam.',
    ],
    competencies: ['pemodelan pertumbuhan', 'persamaan eksponen'],
    rubric: [
      'Menyusun model $P(n)=50\\cdot2^{n}$',
      'Menyamakan basis untuk mencari $n$',
      'Menentukan banyak selang',
      'Mengubah selang menjadi jam',
    ],
  },
  {
    id: 'ekslog-13',
    topicId: 'persamaan-eksponen-logaritma',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'evaluasi',
    prompt:
      'Sebuah investasi Rp2.000.000 tumbuh dengan bunga majemuk $10\\%$ per tahun. (a) Susun model nilainya $M(t)$. (b) Dengan logaritma, tentukan lama waktu agar nilainya menjadi Rp4.000.000. Gunakan $\\log 2\\approx0{,}301$ dan $\\log 1{,}1\\approx0{,}0414$.',
    answer:
      '(a) $M(t)=2.000.000(1{,}1)^{t}$ rupiah. (b) Nilai dua kali lipat berarti $(1{,}1)^{t}=2$, sehingga $t=\\dfrac{\\log 2}{\\log 1{,}1}=\\dfrac{0{,}301}{0{,}0414}\\approx7{,}27$ tahun. Jadi investasi menjadi Rp4.000.000 setelah sekitar $7{,}3$ tahun, yaitu mulai tahun ke-$8$.',
    explanation:
      'Kunci: menyusun model eksponensial, mengubah persamaan menjadi bentuk logaritma, lalu menghitung dan menafsirkan hasilnya.',
    hints: ['Bagi kedua ruas dengan modal awal.', 'Gunakan $t=\\dfrac{\\log 2}{\\log 1{,}1}$.'],
    competencies: ['logaritma', 'pemodelan keuangan', 'evaluasi'],
    rubric: [
      'Menyusun model bunga majemuk',
      'Mengubah persamaan menjadi bentuk logaritma',
      'Menghitung lama waktu',
      'Menafsirkan hasil ke satuan tahun',
    ],
  },
  {
    id: 'ekslog-14',
    topicId: 'persamaan-eksponen-logaritma',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'kontekstual',
    prompt:
      'Kekuatan gempa dinyatakan $M=\\log_{10}\\!\\left(\\dfrac{A}{A_0}\\right)$. Gempa A bermagnitudo $7$ dan gempa B bermagnitudo $5$. (a) Tentukan berapa kali amplitudo gempa A dibandingkan gempa B. (b) Jelaskan mengapa skala logaritma dipakai untuk menggambarkan kekuatan gempa.',
    answer:
      '(a) $M_A-M_B=\\log_{10}\\!\\left(\\dfrac{A_A}{A_0}\\right)-\\log_{10}\\!\\left(\\dfrac{A_B}{A_0}\\right)=\\log_{10}\\!\\left(\\dfrac{A_A}{A_B}\\right)=7-5=2$, sehingga $\\dfrac{A_A}{A_B}=10^{2}=100$. Amplitudo gempa A $100$ kali gempa B. (b) Skala logaritma dipakai karena jangkauan amplitudo gempa sangat lebar; dengan logaritma, perbedaan besar dipadatkan menjadi angka kecil yang mudah dibaca dan dibandingkan.',
    explanation:
      'Kunci: memakai sifat selisih logaritma menjadi logaritma hasil bagi, lalu menafsirkan manfaat skala logaritma.',
    hints: ['Selisih logaritma sama dengan logaritma hasil bagi.', 'Perhatikan bahwa pangkat $10$ menghasilkan perbandingan amplitudo.'],
    competencies: ['logaritma', 'skala logaritma', 'kontekstual'],
    rubric: [
      'Menggunakan sifat selisih logaritma',
      'Menghitung rasio amplitudo',
      'Menyatakan perbandingan sebagai pangkat 10',
      'Menjelaskan manfaat skala logaritma',
    ],
  },
  {
    id: 'ekslog-15',
    topicId: 'persamaan-eksponen-logaritma',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'kontekstual',
    prompt:
      'Tingkat keasaman larutan dinyatakan $pH=-\\log [H^{+}]$ dengan $[H^{+}]$ konsentrasi ion hidrogen dalam mol/L. Larutan A memiliki $pH=5$ dan larutan B memiliki $pH=3$. Berapa kali konsentrasi ion $H^{+}$ larutan B dibandingkan larutan A?',
    answer: '100',
    acceptedAnswers: ['100'],
    explanation:
      'Dari definisi diperoleh $[H^{+}]=10^{-pH}$. Maka $\\dfrac{[H^{+}]_B}{[H^{+}]_A}=\\dfrac{10^{-3}}{10^{-5}}=10^{2}=100$. Larutan B $100$ kali lebih asam daripada larutan A karena setiap penurunan satu satuan pH berarti konsentrasi ion $H^{+}$ sepuluh kali lebih besar.',
    hints: [
      'Ubah pH menjadi konsentrasi lewat $[H^{+}]=10^{-pH}$.',
      'Bandingkan kedua konsentrasi sebagai hasil bagi pangkat $10$.',
    ],
    competencies: ['logaritma', 'skala logaritma', 'kontekstual'],
  },
];
