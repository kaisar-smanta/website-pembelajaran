import type { Question } from '@/types/content';

export const distribusiBinomialQuestions: Question[] = [
  {
    id: 'bin-01',
    topicId: 'distribusi-binomial',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'konsep',
    prompt: 'Manakah percobaan berikut yang merupakan **percobaan binomial**?',
    options: [
      { key: 'A', text: 'Melempar sebuah dadu sekali lalu mencatat mata yang muncul' },
      { key: 'B', text: 'Melempar sebuah koin sebanyak 8 kali lalu menghitung banyak gambar' },
      { key: 'C', text: 'Mengambil 3 bola dari kantong satu per satu **tanpa** pengembalian' },
      { key: 'D', text: 'Mengukur tinggi badan 5 siswa dalam sentimeter' },
    ],
    answer: 'B',
    explanation:
      'Percobaan binomial memenuhi empat syarat: $n$ ulangan tetap, dua hasil (sukses/gagal), peluang sukses $p$ tetap, dan ulangan saling bebas. Melempar koin 8 kali lalu menghitung gambar memenuhinya. Opsi A hanya sekali ulangan, opsi C mengubah peluang tiap pengambilan karena tanpa pengembalian, dan opsi D mengukur besaran kontinu, bukan dua hasil.',
    hints: ['Periksa empat syarat: $n$ tetap, dua hasil, $p$ tetap, dan saling bebas.'],
    competencies: ['percobaan binomial', 'konsep'],
  },
  {
    id: 'bin-02',
    topicId: 'distribusi-binomial',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'cepat',
    prompt: 'Tiga koin dilempar bersamaan. Tentukan peluang muncul **tepat dua** gambar.',
    answer: '3/8',
    acceptedAnswers: ['3/8', '0,375', '0.375', '0,3750', '0.3750'],
    explanation:
      'Dengan $n=3$, $p=\\tfrac12$, dan $k=2$: $P(X=2)=\\binom{3}{2}\\left(\\tfrac12\\right)^{2}\\left(\\tfrac12\\right)^{1}=3 \\cdot \\tfrac12 \\cdot \\tfrac14=\\tfrac38=0{,}375$.',
    hints: ['Gunakan $P(X=k)=\\binom{n}{k}p^{k}(1-p)^{n-k}$ dengan $n=3$ dan $p=\\tfrac12$.'],
    competencies: ['rumus distribusi binomial'],
  },
  {
    id: 'bin-03',
    topicId: 'distribusi-binomial',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'penerapan',
    prompt: 'Diketahui $X \\sim B(10;\\, 0{,}4)$. Tentukan nilai harapan $E(X)$.',
    answer: '4',
    acceptedAnswers: ['4,0', '4.0'],
    explanation:
      'Untuk distribusi binomial berlaku $E(X)=np=10(0{,}4)=4$.',
    hints: ['Gunakan $E(X)=np$ dengan $n=10$ dan $p=0{,}4$.'],
    competencies: ['nilai harapan binomial'],
  },
  {
    id: 'bin-04',
    topicId: 'distribusi-binomial',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'konsep',
    prompt: 'Rumus varians distribusi binomial $X \\sim B(n, p)$ adalah …',
    options: [
      { key: 'A', text: '$np$' },
      { key: 'B', text: '$np(1-p)$' },
      { key: 'C', text: '$np^{2}$' },
      { key: 'D', text: '$\\sqrt{np(1-p)}$' },
    ],
    answer: 'B',
    explanation:
      'Varians distribusi binomial adalah $\\operatorname{Var}(X)=np(1-p)$. Opsi A, $np$, adalah nilai harapan $E(X)$, bukan varians. Opsi C, $np^{2}$, muncul bila $p$ dikalikan dengan dirinya sendiri alih-alih dikalikan dengan $(1-p)$. Opsi D, $\\sqrt{np(1-p)}$, adalah simpangan baku, yaitu akar dari varians.',
    hints: ['Bedakan nilai harapan, varians, dan simpangan baku.', 'Varians selalu memuat faktor $(1-p)$ dari peluang gagal.'],
    competencies: ['varians binomial', 'konsep'],
  },
  {
    id: 'bin-05',
    topicId: 'distribusi-binomial',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt: 'Sebuah dadu dilempar 4 kali. Tentukan peluang muncul mata 6 **tepat dua kali**.',
    answer: '25/216',
    acceptedAnswers: ['25/216', '0,116', '0.116', '0,1157', '0.1157', '0,11574', '0.11574'],
    explanation:
      'Dengan $n=4$, $p=\\tfrac16$, dan $k=2$: $P(X=2)=\\binom{4}{2}\\left(\\tfrac16\\right)^{2}\\left(\\tfrac56\\right)^{2}=6 \\cdot \\tfrac{1}{36} \\cdot \\tfrac{25}{36}=\\tfrac{150}{1296}=\\tfrac{25}{216} \\approx 0{,}1157$.',
    hints: ['Gunakan $p=\\tfrac16$ untuk sukses (mata 6) dan $1-p=\\tfrac56$ untuk gagal.', 'Hitung $\\binom{4}{2}=6$ terlebih dahulu, lalu kalikan dengan $(\\tfrac16)^{2}(\\tfrac56)^{2}$.'],
    competencies: ['rumus distribusi binomial'],
  },
  {
    id: 'bin-06',
    topicId: 'distribusi-binomial',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt:
      'Peluang seorang penembak mengenai sasaran adalah $0{,}8$. Ia menembak 5 kali secara saling bebas. Tentukan peluang ia mengenai sasaran **tepat 4 kali**.',
    answer: '0,4096',
    acceptedAnswers: ['0,4096', '0.4096', '256/625'],
    explanation:
      'Dengan $n=5$, $p=0{,}8$, dan $k=4$: $P(X=4)=\\binom{5}{4}(0{,}8)^{4}(0{,}2)^{1}=5 \\cdot 0{,}4096 \\cdot 0{,}2=0{,}4096$.',
    hints: ['Hitung $(0{,}8)^{4}$ lebih dahulu, lalu kalikan $\\binom{5}{4}$ dan $(0{,}2)$.', 'Gagal tepat satu kali, sehingga faktornya $(1-p)^{1}$.'],
    competencies: ['rumus distribusi binomial', 'penerapan'],
  },
  {
    id: 'bin-07',
    topicId: 'distribusi-binomial',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Sebuah tes pilihan ganda terdiri atas 5 soal. Setiap soal punya 4 pilihan dengan tepat satu jawaban benar. Seorang siswa menjawab seluruh soal secara asal. (a) Nyatakan variabel acak dan parameternya. (b) Hitung peluang ia menjawab benar tepat 3 soal. (c) Hitung nilai harapannya.',
    answer:
      'Misalkan $X$ = banyak jawaban benar. Karena setiap soal dijawab asal dengan peluang benar $p=\\tfrac14$ dan saling bebas, maka $X \\sim B\\!\\left(5, \\tfrac14\\right)$ dengan $q=\\tfrac34$. (b) $P(X=3)=\\binom{5}{3}\\left(\\tfrac14\\right)^{3}\\left(\\tfrac34\\right)^{2}=10 \\cdot \\tfrac{1}{64} \\cdot \\tfrac{9}{16}=\\tfrac{90}{1024}=\\tfrac{45}{512} \\approx 0{,}0879$. (c) $E(X)=np=5 \\cdot \\tfrac14=\\tfrac54=1{,}25$ jawaban benar.',
    explanation:
      'Kunci mencakup penetapan $n=5$ dan $p=\\tfrac14$, penerapan rumus binomial untuk $k=3$ (ingat faktor $\\left(\\tfrac34\\right)^{2}$), dan pemakaian $E(X)=np$.',
    hints: ['Peluang satu soal benar $p=\\tfrac14$ dan salah $1-p=\\tfrac34$.', 'Jangan lupa memangkatkan peluang salah untuk 2 soal yang dijawab keliru.'],
    competencies: ['pemodelan binomial', 'nilai harapan binomial'],
    rubric: [
      'Menetapkan $X\\sim B\\!\\left(5,\\tfrac14\\right)$ dan $q=\\tfrac34$',
      'Menghitung $P(X=3)=\\binom{5}{3}\\left(\\tfrac14\\right)^{3}\\left(\\tfrac34\\right)^{2}=\\tfrac{45}{512}$',
      'Menghitung $E(X)=np=\\tfrac54=1{,}25$',
    ],
  },
  {
    id: 'bin-08',
    topicId: 'distribusi-binomial',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penalaran',
    prompt:
      'Diketahui $X \\sim B(n;\\, 0{,}5)$ dan $E(X)=6$. Nilai $P(X=0)$ adalah …',
    options: [
      { key: 'A', text: '$\\frac{1}{4096}$' },
      { key: 'B', text: '$\\frac{1}{2048}$' },
      { key: 'C', text: '$\\frac{1}{64}$' },
      { key: 'D', text: '$\\frac{1}{12}$' },
    ],
    answer: 'A',
    explanation:
      'Dari $E(X)=np=6$ dan $p=0{,}5$ diperoleh $n=\\dfrac{6}{0{,}5}=12$. Maka $P(X=0)=\\binom{12}{0}(0{,}5)^{0}(0{,}5)^{12}=(0{,}5)^{12}=\\dfrac{1}{4096}$. Opsi C, $\\dfrac{1}{64}$, muncul bila $n$ dianggap sama dengan $E(X)=6$ sehingga $(0{,}5)^{6}=\\dfrac{1}{64}$. Opsi B, $\\dfrac{1}{2048}$, muncul bila $n=11$ karena keliru mengurangkan satu. Opsi D, $\\dfrac{1}{12}$, muncul bila $P(X=0)$ dianggap $\\dfrac{1}{n}$ alih-alih $(0{,}5)^{n}$.',
    hints: ['Tentukan $n$ dari $E(X)=np$ lebih dahulu.', 'Untuk $k=0$, faktor peluang sukses menjadi $(0{,}5)^{0}=1$.'],
    competencies: ['nilai harapan binomial', 'penalaran'],
  },
  {
    id: 'bin-09',
    topicId: 'distribusi-binomial',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'kontekstual',
    prompt:
      'Peluang sebuah bibit tumbuh adalah $0{,}9$. Seorang petani menanam 6 bibit secara saling bebas. Tentukan peluang **paling sedikit 5** bibit tumbuh.',
    answer: '0,885735',
    acceptedAnswers: ['0,885735', '0.885735', '0,8857', '0.8857', '0,886', '0.886', '177147/200000'],
    explanation:
      'Kejadiannya $X \\geq 5$ sehingga $P(X \\geq 5)=P(X=5)+P(X=6)$. Diperoleh $P(X=5)=\\binom{6}{5}(0{,}9)^{5}(0{,}1)^{1}=6(0{,}59049)(0{,}1)=0{,}354294$ dan $P(X=6)=(0{,}9)^{6}=0{,}531441$. Jumlahnya $0{,}354294+0{,}531441=0{,}885735$.',
    hints: ['Pecah menjadi dua kejadian: tepat 5 tumbuh dan tepat 6 tumbuh.', 'Gunakan $p=0{,}9$ dan $1-p=0{,}1$.'],
    competencies: ['peluang kumulatif binomial', 'kontekstual'],
  },
  {
    id: 'bin-10',
    topicId: 'distribusi-binomial',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Dalam suatu survei, diperkirakan $60\\%$ penduduk sebuah kota mendukung program tertentu. Sebanyak 10 orang dipilih secara acak dan independen. (a) Jelaskan mengapa banyak pendukung $X$ dapat dimodelkan sebagai distribusi binomial, serta sebutkan asumsinya. (b) Hitung $P(X=7)$ dan $P(X \\leq 7)$.',
    answer:
      '(a) Setiap orang yang ditanya punya dua hasil (mendukung atau tidak), peluang mendukung dianggap tetap $p=0{,}6$, banyak yang ditanya tetap $n=10$, dan jawaban tiap orang saling bebas, sehingga $X \\sim B(10;\\,0{,}6)$. Asumsinya: pemilihan benar-benar acak, jawaban saling bebas, dan peluang mendukung sama bagi setiap orang. (b) $P(X=7)=\\binom{10}{7}(0{,}6)^{7}(0{,}4)^{3}=120 \\cdot 0{,}0279936 \\cdot 0{,}064 \\approx 0{,}2150$. Untuk $P(X \\leq 7)$ pakai komplemen: $P(X \\leq 7)=1-P(X=8)-P(X=9)-P(X=10)$, yaitu $1-[45(0{,}6)^{8}(0{,}4)^{2}+10(0{,}6)^{9}(0{,}4)+(0{,}6)^{10}] \\approx 1-0{,}1673=0{,}8327$.',
    explanation:
      'Kunci menekankan justifikasi keempat syarat binomial beserta asumsi realistisnya, perhitungan satu titik dengan koefisien binomial, dan penggunaan komplemen untuk peluang kumulatif (lebih praktis daripada menjumlahkan $k=0$ sampai $7$).',
    hints: ['Untuk $P(X \\leq 7)$ lebih cepat menghitung komplemen tiga suku terakhir.', 'Pastikan $\\binom{10}{7}=120$ dan $(0{,}6)^{7}(0{,}4)^{3}$ dihitung teliti.'],
    competencies: ['pemodelan binomial', 'peluang kumulatif binomial', 'penalaran'],
    rubric: [
      'Menjelaskan keempat syarat binomial beserta asumsi realistisnya',
      'Menghitung $P(X=7)=\\binom{10}{7}(0{,}6)^{7}(0{,}4)^{3}\\approx0{,}2150$',
      'Menghitung $P(X\\le7)$ lewat komplemen tiga suku terakhir $\\approx0{,}8327$',
    ],
  },
  {
    id: 'bin-11',
    topicId: 'distribusi-binomial',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Sebuah perusahaan memproduksi komponen dengan peluang cacat $0{,}05$. Dalam satu kotak terdapat 20 komponen yang diproduksi secara independen. (a) Tentukan model distribusi banyak komponen cacat. (b) Hitung nilai harapan dan simpangan bakunya. (c) Jika perusahaan ingin peluang menemukan **paling sedikit satu** komponen cacat di bawah $0{,}6$, apakah kotak berisi 20 komponen memenuhi? Jelaskan.',
    answer:
      '(a) Misalkan $X$ = banyak komponen cacat, dengan $X \\sim B(20;\\,0{,}05)$. (b) $E(X)=np=20(0{,}05)=1$ komponen, dan $\\sigma=\\sqrt{np(1-p)}=\\sqrt{20(0{,}05)(0{,}95)}=\\sqrt{0{,}95} \\approx 0{,}975$. (c) $P(X \\geq 1)=1-P(X=0)=1-(0{,}95)^{20} \\approx 1-0{,}3585=0{,}6415$. Karena $0{,}6415 \\geq 0{,}6$, kotak berisi 20 komponen **belum** memenuhi target; perusahaan perlu memperbanyak komponen per kotak agar peluang menemukan minimal satu cacat turun di bawah $0{,}6$ namun justru sebaliknya makin naik sehingga target perlu ditinjau kembali.',
    explanation:
      'Kunci: menetapkan parameter, menghitung $E(X)$ dan $\\sigma=\\sqrt{np(1-p)}$, lalu mengevaluasi target memakai komplemen $P(X \\geq 1)=1-(0{,}95)^{20} \\approx 0{,}6415$ dan membandingkannya dengan $0{,}6$. Kesimpulannya kotak 20 komponen belum memenuhi karena peluangnya masih di atas $0{,}6$.',
    hints: ['Peluang "paling sedikit satu" paling mudah lewat komplemen "tidak ada yang cacat".', 'Bandingkan $1-(0{,}95)^{20}$ dengan ambang $0{,}6$.'],
    competencies: ['pemodelan binomial', 'simpangan baku binomial', 'evaluasi model'],
    rubric: [
      'Menetapkan $X\\sim B(20;\\,0{,}05)$',
      'Menghitung $E(X)=1$ dan $\\sigma=\\sqrt{np(1-p)}\\approx0{,}975$',
      'Menghitung $P(X\\ge1)=1-(0{,}95)^{20}\\approx0{,}6415$ dan menilai target',
    ],
  },
  {
    id: 'bin-12',
    topicId: 'distribusi-binomial',
    difficulty: 'mahir',
    type: 'short-answer',
    category: 'penalaran',
    prompt:
      'Diketahui $X \\sim B(6, p)$ dengan $E(X)=2$. Tentukan $P(X=3)$ (tuliskan sebagai pecahan paling sederhana).',
    answer: '160/729',
    acceptedAnswers: ['160/729', '0,2195', '0.2195', '0,21948', '0.21948', '0,219', '0.219'],
    explanation:
      'Dari $E(X)=np=6p=2$ diperoleh $p=\\tfrac13$ dan $1-p=\\tfrac23$. Maka $P(X=3)=\\binom{6}{3}\\left(\\tfrac13\\right)^{3}\\left(\\tfrac23\\right)^{3}=20 \\cdot \\tfrac{1}{27} \\cdot \\tfrac{8}{27}=\\tfrac{160}{729} \\approx 0{,}2195$.',
    hints: ['Tentukan $p$ dari $np=2$ dan $n=6$.', 'Hitung $\\binom{6}{3}=20$, lalu kalikan $\\left(\\tfrac13\\right)^{3}\\left(\\tfrac23\\right)^{3}$.'],
    competencies: ['parameter binomial', 'rumus distribusi binomial', 'penalaran'],
  },
  {
    id: 'bin-13',
    topicId: 'distribusi-binomial',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'evaluasi',
    prompt:
      'Seorang siswa menyatakan, "Karena distribusi binomial untuk koin seimbang simetris, peluang memperoleh **tepat 5 gambar** dari 10 lemparan adalah $0{,}5$." Nilai pernyataan itu: hitung $P(X=5)$, jelaskan mengapa nilainya bukan $0{,}5$, dan tuliskan peluang kumulatif $P(X \\leq 5)$.',
    answer:
      'Dengan $n=10$ dan $p=\\tfrac12$: $P(X=5)=\\binom{10}{5}\\left(\\tfrac12\\right)^{10}=\\dfrac{252}{1024}=\\dfrac{63}{256} \\approx 0{,}2461$. Jadi pernyataan siswa **salah**; nilainya $\\approx 0{,}2461$, bukan $0{,}5$. Angka $0{,}5$ sesungguhnya adalah peluang **kumulatif** $P(X \\leq 5)$: karena distribusi simetris dan ada $11$ nilai yang mungkin ($k=0$ sampai $10$), tepat setengah massa peluang berada di $k \\leq 5$, sehingga $P(X \\leq 5)=\\tfrac12$. Peluang satu titik selalu lebih kecil daripada peluang kumulatifnya.',
    explanation:
      'Kunci: menghitung $P(X=5)=\\binom{10}{5}/2^{10}=63/256 \\approx 0{,}2461$, menyadari bahwa $0{,}5$ adalah peluang kumulatif akibat simetri, dan membedakan peluang satu titik dengan peluang kumulatif.',
    hints: ['Hitung $\\binom{10}{5}=252$ dan bagi dengan $2^{10}=1024$.', 'Ingat jumlah seluruh peluang $1$; karena simetris, peluang separuh kiri $P(X \\leq 5)=\\tfrac12$.'],
    competencies: ['peluang kumulatif binomial', 'evaluasi penalaran'],
    rubric: [
      'Menghitung $P(X=5)=\\binom{10}{5}/2^{10}=\\tfrac{63}{256}\\approx0{,}2461$',
      'Menjelaskan $0{,}5$ adalah peluang kumulatif $P(X\\le5)$ akibat simetri',
      'Membedakan peluang satu titik dengan peluang kumulatif',
    ],
  },
  {
    id: 'bin-14',
    topicId: 'distribusi-binomial',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'kontekstual',
    prompt:
      'Peluang seorang pemain basket memasukkan bola ke ring adalah $0{,}7$. Ia melakukan $4$ tembakan bebas yang saling bebas. Peluang ia memasukkan tepat $3$ bola adalah …',
    options: [
      { key: 'A', text: '$0{,}4116$' },
      { key: 'B', text: '$0{,}2401$' },
      { key: 'C', text: '$0{,}2646$' },
      { key: 'D', text: '$0{,}1029$' },
    ],
    answer: 'A',
    explanation:
      'Dengan $n=4$, $p=0{,}7$, dan $k=3$: $P(X=3)=\\binom{4}{3}(0{,}7)^3(0{,}3)=4\\cdot0{,}343\\cdot0{,}3=0{,}4116$. Opsi B adalah $P(X=4)=(0{,}7)^4$, opsi C adalah $P(X=2)$, dan opsi D lupa mengalikan koefisien $\\binom{4}{3}$.',
    hints: ['Gunakan $P(X=k)=\\binom{n}{k}p^{k}(1-p)^{n-k}$ dengan $n=4$ dan $p=0{,}7$.', 'Karena tepat $3$ masuk, faktor gagal berpangkat $4-3=1$, yaitu $(0{,}3)^{1}$.'],
    competencies: ['rumus distribusi binomial', 'kontekstual'],
  },
  {
    id: 'bin-15',
    topicId: 'distribusi-binomial',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'kontekstual',
    prompt:
      'Sebuah pabrik mengemas $4$ komponen per kotak. Peluang sebuah komponen cacat adalah $0{,}25$, saling bebas antar komponen. Diagram batang berikut menunjukkan distribusi banyak komponen cacat per kotak. Tentukan rata-rata banyak komponen cacat per kotak.',
    figure: {
      alt: 'Diagram batang distribusi binomial dengan n empat dan p nol koma dua lima untuk banyak komponen cacat nol sampai empat.',
      caption: 'Distribusi banyak komponen cacat $X \\sim B(4;\\,0{,}25)$.',
      svg: '<svg viewBox="0 0 320 200" aria-hidden="true" role="presentation"><line x1="45" y1="170" x2="300" y2="170" stroke="currentColor" stroke-width="1.5"/><line x1="45" y1="180" x2="45" y2="20" stroke="currentColor" stroke-width="1.5"/><rect x="55" y="60" width="38" height="110" fill="currentColor" opacity="0.25" stroke="currentColor" stroke-width="1"/><rect x="103" y="24" width="38" height="146" fill="currentColor" opacity="0.25" stroke="currentColor" stroke-width="1"/><rect x="151" y="97" width="38" height="73" fill="currentColor" opacity="0.25" stroke="currentColor" stroke-width="1"/><rect x="199" y="154" width="38" height="16" fill="currentColor" opacity="0.25" stroke="currentColor" stroke-width="1"/><rect x="247" y="169" width="38" height="1" fill="currentColor" opacity="0.25" stroke="currentColor" stroke-width="1"/><text x="70" y="186" font-size="12" fill="currentColor">0</text><text x="118" y="186" font-size="12" fill="currentColor">1</text><text x="166" y="186" font-size="12" fill="currentColor">2</text><text x="214" y="186" font-size="12" fill="currentColor">3</text><text x="262" y="186" font-size="12" fill="currentColor">4</text><text x="12" y="24" font-size="11" fill="currentColor">P</text></svg>',
    },
    answer: '1',
    acceptedAnswers: ['1', '1 komponen'],
    explanation:
      'Banyak komponen cacat $X$ berdistribusi binomial dengan $n=4$ dan $p=0{,}25$, sehingga rata-ratanya $E(X)=np=4(0{,}25)=1$ komponen cacat per kotak. Diagram batang memperlihatkan sebaran yang condong ke kanan dengan puncaknya di sekitar $k=0$ sampai $1$, konsisten dengan nilai harapan $1$.',
    hints: [
      'Rata-rata distribusi binomial adalah $E(X)=np$.',
      'Tentukan $n$ (banyak komponen per kotak) dan $p$ (peluang cacat) dari cerita, lalu kalikan.',
    ],
    competencies: ['nilai harapan binomial', 'membaca diagram batang', 'kontekstual'],
  },
  {
    id: 'bin-16',
    topicId: 'distribusi-binomial',
    difficulty: 'mahir',
    type: 'short-answer',
    category: 'kontekstual',
    prompt:
      'Dalam percobaan genetika mengikuti pola Mendel, peluang seekor keturunan menunjukkan sifat resesif tertentu adalah $0{,}25$. Dari $6$ keturunan yang saling bebas, tentukan peluang **tepat $3$** keturunan menunjukkan sifat resesif tersebut.',
    answer: '135/1024',
    acceptedAnswers: ['135/1024', '0,1318359375', '0.1318359375'],
    explanation:
      'Banyak keturunan bersifat resesif $X$ berdistribusi $B(6;\\,0{,}25)$. Maka $P(X=3)=\\binom{6}{3}(0{,}25)^{3}(0{,}75)^{3}=20 \\cdot \\dfrac{1}{64} \\cdot \\dfrac{27}{64}=\\dfrac{540}{4096}=\\dfrac{135}{1024} \\approx 0{,}1318$.',
    hints: [
      'Tetapkan $n=6$ dan $p=0{,}25$; gagal berarti $1-p=0{,}75$.',
      'Gunakan koefisien binomial $\\binom{6}{3}=20$ lalu kalikan $p^{3}(1-p)^{3}$.',
    ],
    competencies: ['rumus distribusi binomial', 'kontekstual', 'genetika'],
  },
  {
    id: 'bin-17',
    topicId: 'distribusi-binomial',
    difficulty: 'mahir',
    type: 'multiple-choice',
    category: 'evaluasi',
    prompt:
      'Seorang pemain basket memiliki peluang $0{,}7$ memasukkan setiap tembakan bebas, saling bebas. Ia melakukan $6$ tembakan dan pelatih menargetkan **paling sedikit $5$** masuk. Peluang pemain memenuhi target tersebut adalah …',
    options: [
      { key: 'A', text: '$0{,}420175$' },
      { key: 'B', text: '$0{,}302526$' },
      { key: 'C', text: '$0{,}117649$' },
      { key: 'D', text: '$0{,}579825$' },
    ],
    answer: 'A',
    explanation:
      'Target berarti $X \\geq 5$ dengan $X \\sim B(6;\\,0{,}7)$, sehingga $P(X \\geq 5)=P(X=5)+P(X=6)$. Diperoleh $P(X=5)=\\binom{6}{5}(0{,}7)^{5}(0{,}3)=6(0{,}16807)(0{,}3)=0{,}302526$ dan $P(X=6)=(0{,}7)^{6}=0{,}117649$. Jumlahnya $0{,}420175$. Opsi B hanya menghitung $P(X=5)$ dan lupa $X=6$. Opsi C hanya menghitung $P(X=6)$ dan lupa $X=5$. Opsi D, $0{,}579825$, adalah komplemennya, yaitu peluang justru **gagal** memenuhi target.',
    hints: [
      'Ubah frasa "paling sedikit $5$" menjadi $X=5$ atau $X=6$.',
      'Jumlahkan $P(X=5)$ dan $P(X=6)$; jangan hanya mengambil satu suku.',
    ],
    competencies: ['peluang kumulatif binomial', 'evaluasi target', 'kontekstual'],
  },
];
