import type { Question } from '@/types/content';

export const barisanDeretQuestions: Question[] = [
  {
    id: 'bd-01',
    topicId: 'barisan-deret',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'cepat',
    prompt: 'Suku ke-$15$ dari barisan aritmetika $4, 9, 14, 19, \\dots$ adalah …',
    options: [
      { key: 'A', text: '$69$' },
      { key: 'B', text: '$74$' },
      { key: 'C', text: '$79$' },
      { key: 'D', text: '$84$' },
    ],
    answer: 'B',
    explanation:
      'Suku pertama $a=4$ dan beda $b=9-4=5$. Dengan $U_n=a+(n-1)b$ diperoleh $U_{15}=4+(15-1)\\cdot5=4+70=74$.',
    hints: ['Tentukan dulu suku pertama $a$ dan beda $b$.', 'Gunakan $U_n=a+(n-1)b$; eksponen indeksnya $(n-1)$, bukan $n$.'],
    competencies: ['suku ke-n barisan aritmetika'],
  },
  {
    id: 'bd-02',
    topicId: 'barisan-deret',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'cepat',
    prompt: 'Suku ke-$8$ dari barisan geometri $5, 10, 20, 40, \\dots$ adalah …',
    options: [
      { key: 'A', text: '$320$' },
      { key: 'B', text: '$640$' },
      { key: 'C', text: '$1.280$' },
      { key: 'D', text: '$2.560$' },
    ],
    answer: 'B',
    explanation:
      'Suku pertama $a=5$ dan rasio $r=\\dfrac{10}{5}=2$. Maka $U_8=5\\cdot2^{7}=5\\cdot128=640$.',
    hints: ['Rasio $r$ diperoleh dari pembagian dua suku berdekatan.'],
    competencies: ['suku ke-n barisan geometri'],
  },
  {
    id: 'bd-03',
    topicId: 'barisan-deret',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt:
      'Suku ke-$3$ dan suku ke-$7$ suatu barisan aritmetika berturut-turut adalah $11$ dan $27$. Suku ke-$20$ barisan itu adalah …',
    options: [
      { key: 'A', text: '$75$' },
      { key: 'B', text: '$79$' },
      { key: 'C', text: '$83$' },
      { key: 'D', text: '$87$' },
    ],
    answer: 'B',
    explanation:
      'Dari $U_3=a+2b=11$ dan $U_7=a+6b=27$. Kurangkan: $4b=16$ sehingga $b=4$, lalu $a=11-2\\cdot4=3$. Jadi $U_{20}=3+(20-1)\\cdot4=3+76=79$.',
    hints: ['Susun dua persamaan dari $U_3$ dan $U_7$, lalu eliminasi.'],
    competencies: ['barisan aritmetika'],
  },
  {
    id: 'bd-04',
    topicId: 'barisan-deret',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'cepat',
    prompt: 'Hitung jumlah $20$ suku pertama deret aritmetika $2+5+8+\\cdots$.',
    answer: '610',
    acceptedAnswers: ['610'],
    explanation:
      '$a=2$, $b=3$, sehingga $U_{20}=2+19\\cdot3=59$. Maka $S_{20}=\\dfrac{20}{2}(2+59)=10\\cdot61=610$.',
    hints: ['Tentukan $U_{20}$ lebih dahulu, lalu pakai $S_n=\\dfrac{n}{2}(a+U_n)$.'],
    competencies: ['jumlah n suku deret aritmetika'],
  },
  {
    id: 'bd-05',
    topicId: 'barisan-deret',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt: 'Pada barisan geometri diketahui $U_2=6$ dan $U_5=48$. Tentukan suku ke-$10$.',
    answer: '1536',
    acceptedAnswers: ['1536'],
    explanation:
      '$\\dfrac{U_5}{U_2}=r^{3}=\\dfrac{48}{6}=8$, sehingga $r=2$. Karena $U_2=ar=6$, maka $a=3$. Jadi $U_{10}=3\\cdot2^{9}=3\\cdot512=1536$.',
    hints: ['Bandingkan $U_5$ dan $U_2$ untuk memperoleh $r^{3}$.'],
    competencies: ['barisan geometri'],
  },
  {
    id: 'bd-06',
    topicId: 'barisan-deret',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt: 'Hitung jumlah deret geometri tak hingga $12+6+3+\\cdots$.',
    answer: '24',
    acceptedAnswers: ['24'],
    explanation:
      'Di sini $a=12$ dan $r=\\tfrac12$ dengan $\\lvert r\\rvert<1$, maka $S_\\infty=\\dfrac{12}{1-\\tfrac12}=\\dfrac{12}{\\tfrac12}=24$.',
    hints: ['Periksa dulu apakah $\\lvert r\\rvert<1$ sebelum memakai rumus $S_\\infty$.'],
    competencies: ['deret geometri tak hingga'],
  },
  {
    id: 'bd-07',
    topicId: 'barisan-deret',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt: 'Suku keberapakah $47$ pada barisan aritmetika $3, 7, 11, 15, \\dots$?',
    answer: '12',
    acceptedAnswers: ['12'],
    explanation:
      'Misalkan $47=U_n$, maka $47=3+(n-1)\\cdot4$, sehingga $44=4(n-1)$ dan $n-1=11$. Jadi $n=12$.',
    hints: ['Tulis $47$ sebagai $U_n=a+(n-1)b$, lalu selesaikan untuk $n$.'],
    competencies: ['suku ke-n barisan aritmetika'],
  },
  {
    id: 'bd-08',
    topicId: 'barisan-deret',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Sebuah aula menyediakan $1500$ kursi. Kursi ditata sehingga baris pertama memuat $30$ kursi dan setiap baris berikutnya $2$ kursi lebih banyak daripada baris sebelumnya. (a) Nyatakan banyak kursi pada baris ke-$n$ dan total kursi $n$ baris pertama. (b) Tentukan banyak baris terbanyak yang dapat dibuat agar total kursi tidak melebihi kapasitas aula. (c) Hitung berapa kursi yang tidak terpakai pada penataan itu.',
    answer:
      '(a) Banyak kursi baris ke-$n$ membentuk barisan aritmetika dengan $a=30$ dan $b=2$, sehingga $U_n=30+2(n-1)=2n+28$. Total $n$ baris pertama $S_n=\\dfrac{n}{2}\\big(2\\cdot30+(n-1)\\cdot2\\big)=\\dfrac{n}{2}(60+2n-2)=n(n+29)$. (b) Perlu $n(n+29)\\le1500$. Uji: $n=25$ memberi $25\\cdot54=1350$; $n=26$ memberi $26\\cdot55=1430$; $n=27$ memberi $27\\cdot56=1512>1500$. Jadi paling banyak $26$ baris. (c) Dengan $26$ baris terpakai $1430$ kursi, sehingga kursi yang tidak terpakai $1500-1430=70$ kursi.',
    explanation:
      'Kunci: memodelkan kursi tiap baris sebagai barisan aritmetika, menyusun fungsi jumlah $S_n$, menyelesaikan pertidaksamaan dengan menguji nilai bulat, lalu menafsirkan sisa kapasitas.',
    hints: [
      'Gunakan $U_n=a+(n-1)b$ dengan $a=30$ dan $b=2$.',
      'Uji nilai $n$ pada $S_n=n(n+29)$ sampai melewati $1500$.',
    ],
    competencies: ['pemodelan barisan aritmetika', 'deret aritmetika', 'pertidaksamaan'],
  },
  {
    id: 'bd-09',
    topicId: 'barisan-deret',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Sebuah bola dijatuhkan dari ketinggian $3$ m. Setiap kali memantul, bola mencapai $\\tfrac23$ dari ketinggian sebelumnya. Tentukan total jarak yang ditempuh bola sampai berhenti, dan jelaskan mengapa deretnya konvergen.',
    answer:
      'Jatuh pertama menempuh $3$ m. Setelah itu setiap pantulan menempuh jarak naik lalu turun. Ketinggian pantulan membentuk geometri $a=3\\cdot\\tfrac23=2$ dengan $r=\\tfrac23$. Total lintasan pantulan (naik dan turun) adalah $2\\cdot\\dfrac{2}{1-\\tfrac23}=2\\cdot\\dfrac{2}{\\tfrac13}=2\\cdot6=12$ m. Jadi total jarak $=3+12=15$ m. Deret konvergen karena $\\lvert r\\rvert=\\tfrac23<1$, sehingga suku-sukunya menuju nol.',
    explanation:
      'Kunci jawaban: memisahkan jarak jatuh pertama dari deret pantulan, lalu memakai $S_\\infty=\\dfrac{a}{1-r}$ untuk $\\lvert r\\rvert<1$.',
    hints: ['Pisahkan jarak jatuh pertama dari jarak pantulan naik-turun.', 'Gunakan $S_\\infty=\\dfrac{a}{1-r}$ karena $\\lvert r\\rvert<1$.'],
    competencies: ['deret geometri tak hingga', 'pemodelan'],
  },
  {
    id: 'bd-10',
    topicId: 'barisan-deret',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'konsep',
    prompt:
      'Jelaskan kapan deret geometri tak hingga memiliki jumlah berhingga (konvergen) dan kapan tidak. Sertakan syarat rasionya, lalu berikan satu contoh deret konvergen dan satu contoh deret divergen.',
    answer:
      'Deret geometri tak hingga konvergen jika $\\lvert r\\rvert<1$, sebab $r^{n}\\to0$ saat $n\\to\\infty$, sehingga jumlahnya $S_\\infty=\\dfrac{a}{1-r}$. Jika $\\lvert r\\rvert\\geq1$, suku-sukunya tidak menuju nol sehingga deret divergen dan jumlahnya tak berhingga. Contoh konvergen: $1+\\tfrac12+\\tfrac14+\\cdots=\\dfrac{1}{1-\\tfrac12}=2$. Contoh divergen: $2+4+8+\\cdots$ karena $r=2\\geq1$.',
    explanation: 'Kunci jawaban menekankan syarat $\\lvert r\\rvert<1$ dan alasan suku-sukunya menuju nol.',
    hints: ['Apa yang terjadi pada $r^{n}$ ketika $n$ membesar jika $\\lvert r\\rvert<1$?', 'Bandingkan dengan kasus $\\lvert r\\rvert\\geq1$.'],
    competencies: ['kekonvergenan deret geometri'],
  },
  {
    id: 'bd-11',
    topicId: 'barisan-deret',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'kontekstual',
    prompt:
      'Rani menabung pada suatu program: bulan pertama menyetor Rp100.000, dan setiap bulan berikutnya Rp25.000 lebih banyak daripada bulan sebelumnya. Setelah berapa bulan jumlah tabungan Rani pertama kali melebihi Rp3.000.000? Jelaskan pemodelannya.',
    answer:
      'Setoran tiap bulan membentuk barisan aritmetika dengan $a = 100.000$ dan $b = 25.000$. Jumlah $n$ bulan pertama adalah $S_n = \\dfrac{n}{2}\\big(2a + (n-1)b\\big) = \\dfrac{n}{2}\\big(200.000 + 25.000(n-1)\\big) = 12.500\\,n(n+7)$. Kita perlu $12.500\\,n(n+7) > 3.000.000$, yaitu $n(n+7) > 240$. Untuk $n = 12$ diperoleh $12 \\cdot 19 = 228 < 240$, sedangkan untuk $n = 13$ diperoleh $13 \\cdot 20 = 260 > 240$. Jadi jumlah tabungan pertama kali melebihi Rp3.000.000 setelah **13 bulan**, yaitu ketika $S_{13} = \\text{Rp}3.250.000$.',
    explanation:
      'Kunci jawaban: memodelkan setoran sebagai deret aritmetika, menyusun pertidaksamaan $S_n > 3.000.000$, lalu menguji nilai $n$ bilangan bulat terkecil.',
    hints: [
      'Setoran tiap bulan membentuk barisan aritmetika; gunakan $S_n$.',
      'Selesaikan pertidaksamaan lalu uji $n$ bilangan bulat terkecil.',
    ],
    competencies: ['pemodelan deret aritmetika', 'pertidaksamaan'],
  },
  {
    id: 'bd-12',
    topicId: 'barisan-deret',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'evaluasi',
    prompt:
      'Dua barisan sama-sama dimulai dari $2$. Barisan aritmetika bertambah $3$ setiap suku, sedangkan barisan geometri dikalikan $2$ setiap suku. (a) Tuliskan empat suku pertama masing-masing barisan. (b) Bandingkan suku ke-$10$ keduanya. (c) Jelaskan mengapa barisan geometri akhirnya jauh melampaui barisan aritmetika.',
    answer:
      '(a) Aritmetika: $2, 5, 8, 11, \\dots$; geometri: $2, 4, 8, 16, \\dots$. (b) Suku ke-$10$ aritmetika $U_{10}=2+9\\cdot3=29$, sedangkan geometri $U_{10}=2\\cdot2^{9}=1024$. (c) Barisan geometri bertambah secara perkalian sehingga tumbuh makin cepat (eksponensial), sedangkan barisan aritmetika bertambah secara penjumlahan tetap (linear). Akibatnya, untuk suku yang cukup jauh, nilai geometri jauh lebih besar.',
    explanation:
      'Kunci: membedakan pertumbuhan linear dan eksponensial, dibuktikan dengan perbandingan suku ke-10.',
    hints: ['Gunakan $U_n=a+(n-1)b$ untuk aritmetika dan $U_n=ar^{n-1}$ untuk geometri.', 'Bandingkan laju pertambahan keduanya.'],
    competencies: ['barisan aritmetika', 'barisan geometri', 'evaluasi'],
  },
  {
    id: 'bd-13',
    topicId: 'barisan-deret',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Buktikan bahwa pada barisan aritmetika berlaku $U_1+U_n = U_2+U_{n-1} = U_3+U_{n-2}$, lalu gunakan sifat tersebut untuk menjelaskan rumus jumlah $S_n=\\dfrac{n}{2}(U_1+U_n)$.',
    answer:
      'Dengan $U_k=a+(k-1)b$, maka $U_k+U_{n+1-k}=\\big(a+(k-1)b\\big)+\\big(a+(n-k)b\\big)=2a+(n-1)b$, yang tidak bergantung pada $k$. Jadi setiap pasangan suku yang berjarak sama dari ujung berjumlah sama, yaitu $U_1+U_n$. Ketika seluruh $n$ suku dijumlahkan, suku-sukunya dapat dipasangkan sehingga setiap pasangan berjumlah $U_1+U_n$; karena ada $\\dfrac{n}{2}$ pasangan (untuk $n$ ganjil suku tengah berpasangan dengan dirinya dan hasilnya tetap sama), diperoleh $S_n=\\dfrac{n}{2}(U_1+U_n)$.',
    explanation:
      'Kunci: membuktikan $U_k+U_{n+1-k}$ konstan, lalu menafsirkannya sebagai banyak pasangan berjumlah tetap pada penjumlahan Gauss.',
    hints: [
      'Tulis $U_k$ dan $U_{n+1-k}$ dengan rumus $a+(k-1)b$.',
      'Jumlahkan suku secara berpasangan dari kedua ujung.',
    ],
    competencies: ['barisan aritmetika', 'pembuktian', 'jumlah deret'],
  },
  {
    id: 'bd-14',
    topicId: 'barisan-deret',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Tiga bilangan membentuk barisan aritmetika. Jumlah ketiganya $24$ dan jumlah kuadrat ketiganya $200$. Tentukan ketiga bilangan tersebut dan jelaskan mengapa ada dua susunan yang mungkin.',
    answer:
      'Misalkan ketiga bilangan $a-d$, $a$, dan $a+d$. Dari jumlahnya, $(a-d)+a+(a+d)=3a=24$, sehingga $a=8$. Jumlah kuadratnya: $(a-d)^2+a^2+(a+d)^2=(64-16d+d^2)+64+(64+16d+d^2)=192+2d^2=200$, sehingga $2d^2=8$ dan $d^2=4$, yaitu $d=2$ atau $d=-2$. Untuk $d=2$ bilangannya $6,8,10$; untuk $d=-2$ bilangannya $10,8,6$, yaitu himpunan bilangan yang sama dengan urutan terbalik. Karena barisan aritmetika boleh naik atau turun, keduanya sah dan menghasilkan tiga bilangan $6,8,10$.',
    explanation:
      'Kunci: memakai bentuk simetris $a-d$, $a$, $a+d$, memanfaatkan jumlah untuk memperoleh $a$, menyelesaikan $d$ dari jumlah kuadrat, dan menafsirkan dua tanda $d$ sebagai barisan naik atau turun.',
    hints: [
      'Tulis bilangan sebagai $a-d$, $a$, $a+d$ agar jumlahnya mudah dihitung.',
      'Setelah $a=8$, gunakan jumlah kuadrat untuk mencari $d^2$.',
    ],
    competencies: ['barisan aritmetika', 'sistem persamaan', 'penalaran'],
  },
];
