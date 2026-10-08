import type { Question } from '@/types/content';

export const spltvQuestions: Question[] = [
  {
    id: 'sp-01',
    topicId: 'spltv',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'cepat',
    prompt: 'Diketahui $x+y=10$, $y+z=12$, dan $x+z=8$. Nilai $x$ adalah …',
    options: [
      { key: 'A', text: '$3$' },
      { key: 'B', text: '$5$' },
      { key: 'C', text: '$7$' },
      { key: 'D', text: '$6$' },
    ],
    answer: 'A',
    explanation:
      'Jumlahkan ketiga persamaan: $2(x+y+z)=10+12+8=30$, sehingga $x+y+z=15$. Karena $y+z=12$, maka $x=15-12=3$.',
    hints: ['Jumlahkan ketiga persamaan untuk memperoleh $x+y+z$.'],
    competencies: ['SPLTV', 'eliminasi'],
  },
  {
    id: 'sp-02',
    topicId: 'spltv',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'cepat',
    prompt:
      'Solusi $(x,y,z)$ dari sistem $x+y+z=9$, $2x+y+z=12$, $x+y+2z=11$ adalah …',
    options: [
      { key: 'A', text: '$(3,4,2)$' },
      { key: 'B', text: '$(4,3,2)$' },
      { key: 'C', text: '$(3,2,4)$' },
      { key: 'D', text: '$(2,4,3)$' },
    ],
    answer: 'A',
    explanation:
      'Kurangkan persamaan kedua dengan pertama: $x=3$. Kurangkan persamaan ketiga dengan pertama: $z=2$. Maka $y=9-3-2=4$. Solusinya $(3,4,2)$ dan memenuhi ketiga persamaan.',
    hints: ['Kurangkan pasangan persamaan untuk menghilangkan satu variabel.'],
    competencies: ['eliminasi SPLTV'],
  },
  {
    id: 'sp-03',
    topicId: 'spltv',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'kontekstual',
    prompt:
      'Sebuah kotak berisi $30$ keping uang logam terdiri dari pecahan Rp100, Rp200, dan Rp500. Nilai totalnya Rp9.000 dan banyak koin Rp500 adalah dua kali banyak koin Rp100. Banyak koin Rp500 adalah …',
    options: [
      { key: 'A', text: '$6$' },
      { key: 'B', text: '$12$' },
      { key: 'C', text: '$18$' },
      { key: 'D', text: '$24$' },
    ],
    answer: 'B',
    explanation:
      'Misal $a,b,c$ banyak koin Rp100, Rp200, Rp500. Maka $a+b+c=30$, $a+2b+5c=90$ (dalam ratusan rupiah), dan $c=2a$. Substitusi memberi $3a+b=30$ dan $11a+2b=90$. Dari $b=30-3a$ diperoleh $11a+60-6a=90 \\Rightarrow 5a=30$, jadi $a=6$, $b=12$, dan $c=12$. Banyak koin Rp500 adalah $12$.',
    hints: ['Bagi nilai total dengan $100$ agar koefisiennya sederhana.', 'Gunakan $c=2a$ untuk mengurangi banyak variabel.'],
    competencies: ['pemodelan SPLTV'],
  },
  {
    id: 'sp-04',
    topicId: 'spltv',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'cepat',
    prompt: 'Diketahui $y=x+1$, $z=2x$, dan $x+y+z=9$. Tentukan nilai $x$.',
    answer: '2',
    acceptedAnswers: ['2'],
    explanation: '$x+(x+1)+2x=9 \\Rightarrow 4x+1=9 \\Rightarrow 4x=8 \\Rightarrow x=2$.',
    hints: ['Substitusikan $y$ dan $z$ dalam bentuk $x$.'],
    competencies: ['substitusi SPLTV'],
  },
  {
    id: 'sp-05',
    topicId: 'spltv',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt:
      'Diketahui sistem $x+2y+z=8$, $2x+y-z=1$, $x-y+2z=5$. Tentukan nilai $x+y+z$.',
    answer: '6',
    acceptedAnswers: ['6'],
    explanation:
      'Sistem ini memiliki solusi $(1,2,3)$. Periksa: $1+4+3=8$, $2+2-3=1$, dan $1-2+6=5$. Maka $x+y+z=1+2+3=6$.',
    hints: ['Selesaikan sistem terlebih dahulu, lalu jumlahkan ketiga variabel.'],
    competencies: ['eliminasi SPLTV'],
  },
  {
    id: 'sp-06',
    topicId: 'spltv',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt:
      'Selesaikan $x+y+z=6$, $x+2y+3z=14$, $x+4y+9z=36$ dan tentukan nilai $z$.',
    answer: '3',
    acceptedAnswers: ['3'],
    explanation:
      'Kurangkan persamaan pertama dari kedua: $y+2z=8$. Kurangkan persamaan pertama dari ketiga: $3y+8z=30$. Substitusi $y=8-2z$: $3(8-2z)+8z=30 \\Rightarrow 24+2z=30 \\Rightarrow z=3$. Maka $y=2$ dan $x=1$.',
    hints: ['Kurangi persamaan pertama dari dua persamaan lainnya.'],
    competencies: ['eliminasi SPLTV'],
  },
  {
    id: 'sp-07',
    topicId: 'spltv',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'kontekstual',
    prompt:
      'Harga $2$ buku, $1$ pena, dan $1$ pensil adalah Rp13.000. Harga $1$ buku, $2$ pena, dan $1$ pensil Rp17.000. Harga $1$ buku, $1$ pena, dan $2$ pensil Rp12.000. Tentukan harga satu buku dalam rupiah.',
    answer: '2500',
    acceptedAnswers: ['2500', '2.500', 'Rp2.500'],
    explanation:
      'Jumlahkan ketiga persamaan: $4x+4y+4z=42000$, sehingga $x+y+z=10500$. Dari persamaan pertama $2x+y+z=13000$, yaitu $x+(x+y+z)=13000$, maka $x=13000-10500=2500$. Jadi harga satu buku Rp2.500.',
    hints: ['Jumlahkan ketiga persamaan untuk memperoleh $x+y+z$.'],
    competencies: ['pemodelan SPLTV'],
  },
  {
    id: 'sp-08',
    topicId: 'spltv',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Jumlah tiga bilangan adalah $24$. Bilangan kedua dua kali bilangan pertama, dan bilangan ketiga $4$ lebihnya dari bilangan kedua. Tentukan ketiga bilangan tersebut beserta langkah pemodelannya.',
    answer:
      'Misal bilangan pertama $x$, maka bilangan kedua $2x$ dan bilangan ketiga $2x+4$. Persamaan: $x+2x+(2x+4)=24 \\Rightarrow 5x+4=24 \\Rightarrow 5x=20 \\Rightarrow x=4$. Jadi bilangan itu $4$, $8$, dan $12$. Periksa: $4+8+12=24$, $8=2\\cdot4$, dan $12=8+4$.',
    explanation: 'Kunci jawaban: menerjemahkan hubungan antarbilangan menjadi satu persamaan satu variabel.',
    hints: ['Nyatakan semua bilangan dalam satu variabel, misalnya $x$.', 'Periksa kembali jumlah dan hubungan antarbilangan.'],
    competencies: ['pemodelan SPLTV'],
  },
  {
    id: 'sp-09',
    topicId: 'spltv',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Selidiki banyak solusi sistem $x+y+z=6$, $2x+2y+2z=12$, dan $x-y=0$. Jelaskan hasilnya secara aljabar dan geometris.',
    answer:
      'Persamaan kedua sama dengan dua kali persamaan pertama, sehingga tidak memberi informasi baru (keduanya bergantung). Dari $x-y=0$ diperoleh $x=y$, lalu $2x+z=6$ atau $z=6-2x$. Jadi ada tak berhingga banyak solusi berbentuk $(x,x,6-2x)$. Secara geometris, ketiga bidang berpotongan pada satu garis, bukan di satu titik.',
    explanation: 'Kunci jawaban: mengenali persamaan yang bergantung dan menafsirkan solusi tak berhingga.',
    hints: ['Perhatikan hubungan antara persamaan pertama dan kedua.'],
    competencies: ['penalaran SPLTV', 'banyak solusi'],
  },
  {
    id: 'sp-10',
    topicId: 'spltv',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Diberikan sistem $x+y+z=1$, $x+y+z=2$, dan $x-y=0$. Tunjukkan bahwa sistem ini tidak memiliki solusi, lalu jelaskan artinya secara geometris.',
    answer:
      'Dua persamaan pertama memiliki ruas kiri yang sama, yaitu $x+y+z$, tetapi ruas kanannya berbeda $(1$ dan $2)$. Tidak mungkin nilai yang sama sekaligus bernilai $1$ dan $2$, sehingga sistem tidak konsisten dan tidak memiliki solusi. Secara geometris, dua bidang itu sejajar sehingga tidak pernah berpotongan, dan tidak ada titik yang memenuhi ketiga persamaan.',
    explanation: 'Kunci jawaban: mendeteksi inkonsistensi dari dua persamaan yang bertentangan.',
    hints: ['Bandingkan ruas kiri dan ruas kanan dua persamaan pertama.'],
    competencies: ['penalaran SPLTV', 'sistem tak konsisten'],
  },
  {
    id: 'sp-11',
    topicId: 'spltv',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Diberikan sistem $x+y+z=6$, $x+2y+3z=10$, dan $x+3y+kz=14$. Tentukan nilai $k$ agar sistem memiliki tak berhingga banyak solusi, lalu tuliskan bentuk umum solusinya.',
    answer:
      'Kurangkan persamaan pertama dari persamaan kedua: $y+2z=4$. Kurangkan persamaan pertama dari persamaan ketiga: $2y+(k-1)z=8$. Substitusi $y=4-2z$: $2(4-2z)+(k-1)z=8$, sehingga $8-4z+(k-1)z=8$ dan $(k-5)z=0$. Agar persamaan ini berlaku untuk sebarang $z$, haruslah $k=5$. Dengan $k=5$, misalkan $z=t$, maka $y=4-2t$ dan $x=6-y-z=2+t$. Jadi solusinya $(x,y,z)=(2+t,\\,4-2t,\\,t)$ untuk sebarang $t$, yaitu tak berhingga banyak. Ketika $k \\neq 5$ sistem memiliki solusi tunggal $(2,4,0)$.',
    explanation:
      'Kunci jawaban: mengeliminasi dua variabel hingga memperoleh bentuk $(k-5)z=0$, lalu menyimpulkan syarat tak berhingga banyak solusi dan menuliskan solusi parametriknya.',
    hints: [
      'Eliminasi agar tersisa hubungan antara $k$ dan $z$.',
      'Sistem memiliki tak berhingga solusi ketika koefisien variabel bebasnya menjadi nol.',
    ],
    competencies: ['SPLTV', 'parameter', 'banyak solusi'],
  },
  {
    id: 'sp-12',
    topicId: 'spltv',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'evaluasi',
    prompt:
      'Jumlah tiga bilangan adalah $36$. Bilangan kedua dua kali bilangan pertama, dan bilangan ketiga $6$ lebihnya dari bilangan kedua. (a) Susun SPLTV untuk situasi ini. (b) Tentukan ketiga bilangan tersebut. (c) Periksa bahwa solusinya memenuhi semua persamaan.',
    answer:
      '(a) Misal bilangan pertama $x$, kedua $y$, ketiga $z$. Maka $x+y+z=36$, $y=2x$, dan $z=y+6$. (b) Substitusi $y=2x$ dan $z=2x+6$: $x+2x+(2x+6)=36 \\Rightarrow 5x+6=36 \\Rightarrow x=6$. Maka $y=12$ dan $z=18$. (c) Periksa: $6+12+18=36$, $12=2(6)$, dan $18=12+6$. Semua benar.',
    explanation:
      'Kunci: menerjemahkan hubungan antarbilangan menjadi sistem, menyelesaikan dengan substitusi, dan memverifikasi solusi.',
    hints: ['Nyatakan $y$ dan $z$ dalam $x$.', 'Substitusikan ke persamaan jumlah.'],
    competencies: ['SPLTV', 'pemodelan', 'evaluasi'],
  },
];
