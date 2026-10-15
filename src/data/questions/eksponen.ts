import type { Question } from '@/types/content';

export const eksponenQuestions: Question[] = [
  {
    id: 'eks-01',
    topicId: 'eksponen',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'cepat',
    prompt: 'Bentuk sederhana dari $2^{3} \\cdot 2^{5}$ adalah …',
    options: [
      { key: 'A', text: '$2^{15}$' },
      { key: 'B', text: '$2^{2}$' },
      { key: 'C', text: '$4^{8}$' },
      { key: 'D', text: '$2^{8}$' },
    ],
    answer: 'D',
    explanation:
      'Karena basisnya sama, eksponen dijumlahkan: $2^{3} \\cdot 2^{5} = 2^{3+5} = 2^{8}$. Basis tidak berubah. Opsi A mengalikan eksponen ($3\\times5$); opsi B mengurangi eksponen ($5-3$); opsi C mengalikan basis menjadi $4$ sambil menjumlahkan eksponen.',
    hints: ['Jika basis sama dan dikalikan, apa yang terjadi pada eksponennya?'],
    competencies: ['sifat eksponen'],
  },
  {
    id: 'eks-02',
    topicId: 'eksponen',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'konsep',
    prompt: 'Nilai dari $2^{-3}$ adalah …',
    options: [
      { key: 'A', text: '$-0{,}125$' },
      { key: 'B', text: '$8$' },
      { key: 'C', text: '$-0{,}25$' },
      { key: 'D', text: '$0{,}125$' },
    ],
    answer: 'D',
    explanation:
      'Pangkat negatif berarti kebalikan: $2^{-3} = \\dfrac{1}{2^{3}} = \\dfrac{1}{8}$. Tanda menjadi negatif hanya jika basisnya negatif dan eksponennya ganjil. Opsi B mengabaikan tanda negatif dan menghitung $2^{3}$. Opsi A membawa tanda negatif pangkat ke hasil sehingga menulis $-0{,}125$. Opsi C selain memberi tanda negatif juga keliru menghitung kebalikannya menjadi $-0{,}25$.',
    hints: ['Pangkat negatif bukan berarti hasilnya bilangan negatif.'],
    competencies: ['pangkat negatif'],
  },
  {
    id: 'eks-03',
    topicId: 'eksponen',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'cepat',
    prompt: 'Hitung nilai $16^{\\frac{3}{4}}$.',
    answer: '8',
    explanation:
      '$16^{3/4} = (2^{4})^{3/4} = 2^{4 \\cdot 3/4} = 2^{3} = 8$.',
    hints: ['Tulis 16 sebagai $2^{4}$ terlebih dahulu.'],
    competencies: ['pangkat pecahan'],
  },
  {
    id: 'eks-04',
    topicId: 'eksponen',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt: 'Bentuk sederhana dari $\\sqrt{75}$ adalah …',
    options: [
      { key: 'A', text: '$3\\sqrt{5}$' },
      { key: 'B', text: '$25\\sqrt{3}$' },
      { key: 'C', text: '$15$' },
      { key: 'D', text: '$5\\sqrt{3}$' },
    ],
    answer: 'D',
    explanation:
      '$\\sqrt{75}=\\sqrt{25\\cdot3}=\\sqrt{25}\\,\\sqrt{3}=5\\sqrt{3}$. Opsi A ($3\\sqrt{5}$) menarik faktor $3$ alih-alih $25$, padahal $3\\sqrt{5}=\\sqrt{45}\\ne\\sqrt{75}$. Opsi B ($25\\sqrt{3}$) mengeluarkan faktor $25$ tanpa mengambil akarnya, seharusnya $\\sqrt{25}=5$. Opsi C ($15$) keliru menganggap $\\sqrt{75}=75/5$.',
    hints: [
      'Cari faktor kuadrat sempurna terbesar dari 75.',
      'Ambil akar dari faktor kuadrat sempurna itu, jangan hanya menuliskannya.',
    ],
    competencies: ['bentuk akar'],
  },
  {
    id: 'eks-05',
    topicId: 'eksponen',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt: 'Nilai $x$ yang memenuhi $3^{x-1} = 81$ adalah …',
    options: [
      { key: 'A', text: '$3$' },
      { key: 'B', text: '$4$' },
      { key: 'C', text: '$7$' },
      { key: 'D', text: '$5$' },
    ],
    answer: 'D',
    explanation:
      'Karena $81=3^{4}$, maka $x-1=4$ sehingga $x=5$. Opsi A ($3$) menjawab basisnya, bukan nilai $x$. Opsi B ($4$) berhenti pada $x-1=4$ dan lupa menambahkan $1$. Opsi C ($7$) menjumlahkan $3$ dan $4$ alih-alih menyelesaikan $x-1=4$.',
    hints: [
      'Nyatakan 81 sebagai pangkat dari 3.',
      'Setelah pangkatnya sama, selesaikan $x-1=4$ sampai memperoleh $x$.',
    ],
    competencies: ['persamaan eksponen'],
  },
  {
    id: 'eks-06',
    topicId: 'eksponen',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt: 'Sederhanakan $\\dfrac{(3a^{2}b^{3})^{2}}{a^{4}b}$ dan tulis dalam variabel $a$ dan $b$.',
    answer: '9b^5',
    acceptedAnswers: ['9b^{5}', '9 b^5', '9b5'],
    explanation:
      'Pembilang: $(3a^{2}b^{3})^{2} = 9a^{4}b^{6}$. Dibagi $a^{4}b$ menghasilkan $9a^{0}b^{5} = 9b^{5}$.',
    hints: [
      'Kuadratkan setiap faktor di dalam kurung.',
      'Setelah dikalikan, kurangkan eksponen basis yang sama antara pembilang dan penyebut.',
    ],
    competencies: ['sifat eksponen'],
  },
  {
    id: 'eks-07',
    topicId: 'eksponen',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'kontekstual',
    prompt:
      'Populasi bakteri berlipat dua setiap 30 menit. Jika mula-mula ada 200 bakteri, banyak bakteri setelah 2 jam adalah …',
    options: [
      { key: 'A', text: '$800$' },
      { key: 'B', text: '$1.600$' },
      { key: 'C', text: '$3.200$' },
      { key: 'D', text: '$6.400$' },
    ],
    answer: 'C',
    explanation:
      'Dua jam sama dengan 4 selang 30 menit, sehingga $200\\cdot2^{4}=200\\cdot16=3.200$ bakteri. Opsi A ($800$) memakai 2 selang ($2^{2}=4$). Opsi B ($1.600$) memakai 3 selang ($2^{3}=8$). Opsi D ($6.400$) memakai 5 selang ($2^{5}=32$).',
    hints: [
      'Berapa banyak selang 30 menit dalam 2 jam?',
      'Karena populasi berlipat dua, banyak bakteri adalah $200\\times2^{(\\text{banyak selang})}$.',
    ],
    competencies: ['pemodelan eksponen'],
  },
  {
    id: 'eks-08',
    topicId: 'eksponen',
    difficulty: 'mahir',
    type: 'multiple-choice',
    category: 'penalaran',
    prompt: 'Manakah pernyataan berikut yang **selalu benar** untuk semua bilangan real $a, b$?',
    options: [
      { key: 'A', text: '$(a+b)^{2} = a^{2} + b^{2}$' },
      { key: 'B', text: '$\\sqrt{a+b} = \\sqrt{a} + \\sqrt{b}$' },
      { key: 'C', text: '$a^{m} \\cdot a^{n} = a^{m+n}$ untuk $a > 0$' },
      { key: 'D', text: '$2^{a} \\cdot 2^{b} = 4^{ab}$' },
    ],
    answer: 'C',
    explanation:
      'Sifat $a^{m} \\cdot a^{n} = a^{m+n}$ benar untuk basis positif. Opsi A salah karena $(a+b)^2 = a^2+2ab+b^2$; opsi B hanya benar pada kasus khusus; opsi D salah karena $2^a \\cdot 2^b = 2^{a+b}$, bukan $4^{ab}$.',
    hints: [
      'Uji setiap opsi dengan bilangan sederhana.',
      'Pangkat dapat disebar pada perkalian, tetapi tidak pada penjumlahan atau pengurangan.',
    ],
    competencies: ['penalaran sifat eksponen'],
  },
  {
    id: 'eks-09',
    topicId: 'eksponen',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Jelaskan mengapa $a^{0} = 1$ untuk $a \\neq 0$, lalu jelaskan mengapa $\\dfrac{a^{m}}{a^{n}} = a^{m-n}$ juga berlaku ketika $m < n$.',
    answer:
      'Karena $a^{n}/a^{n}=1$ dan dengan sifat pengurangan eksponen $a^{n}/a^{n}=a^{n-n}=a^{0}$, maka $a^{0}=1$. Untuk $m<n$, pengurangan $m-n$ menghasilkan bilangan negatif, sehingga berlaku $a^{m-n}=a^{-(n-m)}=1/a^{n-m}$, yaitu kebalikan, konsisten dengan definisi pangkat negatif.',
    explanation:
      'Kunci jawaban menekankan pendekatan dari kesamaan dua cara menghitung hasil bagi yang sama, lalu perluasan definisi ke eksponen negatif.',
    hints: [
      'Mulai dari $a^{n}/a^{n}=1$, lalu terapkan sifat pengurangan eksponen pada hasil bagi yang sama.',
      'Untuk $m<n$, tulis $m-n=-(n-m)$ dan gunakan definisi pangkat negatif sebagai kebalikan.',
    ],
    competencies: ['pembuktian', 'pangkat nol dan negatif'],
    rubric: [
      'Memulai dari $a^{n}/a^{n}=1$',
      'Menerapkan $a^{n}/a^{n}=a^{n-n}=a^{0}$ untuk menyimpulkan $a^{0}=1$',
      'Menjelaskan $m<n$ memberi eksponen negatif yang berarti kebalikan',
    ],
  },
  {
    id: 'eks-10',
    topicId: 'eksponen',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt: 'Rasionalkan penyebut dari $\\dfrac{6}{\\sqrt{5}-\\sqrt{2}}$ dan tulis hasil akhir dalam bentuk paling sederhana tanpa pecahan.',
    answer: '2(√5+√2)',
    acceptedAnswers: ['2(\\sqrt{5}+\\sqrt{2})', '2√5+2√2', '2\\sqrt{5}+2\\sqrt{2}'],
    explanation:
      'Kalikan pembilang dan penyebut dengan bentuk sekawan $\\sqrt{5}+\\sqrt{2}$: $\\dfrac{6(\\sqrt{5}+\\sqrt{2})}{5-2} = 2(\\sqrt{5}+\\sqrt{2})$.',
    hints: [
      'Bentuk sekawan dari $\\sqrt{5}-\\sqrt{2}$ adalah $\\sqrt{5}+\\sqrt{2}$.',
      'Gunakan $(\\sqrt{a}-\\sqrt{b})(\\sqrt{a}+\\sqrt{b})=a-b$ pada penyebut.',
    ],
    competencies: ['merasionalkan penyebut'],
  },
  {
    id: 'eks-11',
    topicId: 'eksponen',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'evaluasi',
    prompt:
      'Seorang siswa menyederhanakan $\\left(2x^{3}\\right)^{2}\\cdot x^{-4}$ dan menulis hasilnya $2x^{2}$. (a) Tuliskan langkah yang benar untuk perkalian itu. (b) Jelaskan dengan tepat letak kesalahan siswa sehingga hasilnya kehilangan satu faktor.',
    answer:
      '(a) Kuadratkan setiap faktor: $\\left(2x^{3}\\right)^{2}=2^{2}\\left(x^{3}\\right)^{2}=4x^{6}$. Lalu kalikan dengan $x^{-4}$: $4x^{6}\\cdot x^{-4}=4x^{6+(-4)}=4x^{2}$, jadi hasil yang benar $4x^{2}$. (b) Siswa lupa mengkuadratkan koefisien $2$; ia menulis $2x^{6}$ alih-alih $4x^{6}$. Sifat $(ab)^{n}=a^{n}b^{n}$ menuntut koefisien ikut dipangkatkan, sehingga koefisien yang benar adalah $2^{2}=4$.',
    explanation:
      'Kunci: menerapkan $(ab)^{n}=a^{n}b^{n}$ pada koefisien sekaligus variabel, lalu menjumlahkan eksponen saat mengalikan basis yang sama.',
    hints: [
      'Ingat bahwa $(ab)^{n}=a^{n}b^{n}$, termasuk untuk koefisien angka.',
      'Jumlahkan eksponen ketika mengalikan dua pangkat dengan basis sama.',
      'Periksa seharusnya koefisien $2$ pada jawaban siswa menjadi berapa setelah dikuadratkan.',
    ],
    competencies: ['sifat eksponen', 'evaluasi kesalahan'],
    rubric: [
      'Mengkuadratkan koefisien menjadi $2^{2}=4$',
      'Menggunakan $\\left(x^{3}\\right)^{2}=x^{6}$',
      'Menjumlahkan eksponen $x^{6}\\cdot x^{-4}=x^{2}$',
      'Menjelaskan siswa lupa mengkuadratkan koefisien',
    ],
  },
  {
    id: 'eks-12',
    topicId: 'eksponen',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Nilai sebuah perangkat elektronik menyusut mengikuti $V(t)=8.000.000\\times(0{,}8)^{t}$ rupiah, dengan $t$ dalam tahun. (a) Tentukan nilai perangkat setelah $3$ tahun. (b) Jelaskan arti faktor $0{,}8$ pada model tersebut.',
    answer:
      '(a) $V(3)=8.000.000\\times(0{,}8)^{3}=8.000.000\\times0{,}512=4.096.000$. Jadi nilainya sekitar Rp4.096.000. (b) Faktor $0{,}8$ berarti nilai perangkat setiap tahun menjadi $80\\%$ dari nilai tahun sebelumnya, yaitu menyusut $20\\%$ per tahun.',
    explanation:
      'Kunci: mensubstitusi $t=3$ dan menafsirkan basis $0<b<1$ sebagai faktor penyusutan.',
    hints: ['Hitung $(0{,}8)^{3}$ lebih dahulu.', 'Basis kurang dari $1$ menandakan peluruhan.'],
    competencies: ['pemodelan eksponen', 'peluruhan'],
    rubric: [
      'Menghitung $V(3)=8.000.000\\times0{,}512=4.096.000$',
      'Menafsirkan faktor $0{,}8$ sebagai sisa $80\\%$ tiap tahun',
      'Menyebut nilai menyusut $20\\%$ per tahun',
    ],
  },
  {
    id: 'eks-13',
    topicId: 'eksponen',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Pada awal tahun $2020$, penduduk Kota A berjumlah $500.000$ orang dan bertambah $3\\%$ setiap tahun, sedangkan Kota B berjumlah $800.000$ orang dan bertambah $1\\%$ setiap tahun. (a) Tuliskan model $A(t)$ dan $B(t)$ untuk penduduk setelah $t$ tahun. (b) Tentukan tahun pertama ketika penduduk Kota A melampaui Kota B, dengan menghitung nilai tiap tahun. (c) Sebutkan satu alasan mengapa model pertumbuhan tetap ini mungkin tidak berlaku lama.',
    answer:
      '(a) $A(t)=500.000(1{,}03)^t$ dan $B(t)=800.000(1{,}01)^t$. (b) Kita perlu $500.000(1{,}03)^t>800.000(1{,}01)^t$, yaitu $\\left(\\dfrac{1{,}03}{1{,}01}\\right)^t>1{,}6$. Menguji nilai bulat: pada $t=23$, $A\\approx500.000(1{,}973587)\\approx986.793$ dan $B\\approx800.000(1{,}257163)\\approx1.005.730$, jadi A masih lebih kecil. Pada $t=24$, $A\\approx500.000(2{,}032794)\\approx1.016.397$ dan $B\\approx800.000(1{,}269735)\\approx1.015.788$, sehingga A sudah melampaui B. Jadi Kota A melampaui Kota B pada tahun ke-$24$, yaitu awal tahun $2044$ (dihitung dari $2020$). (c) Model mengasumsikan laju pertumbuhan tetap tanpa batas; pada kenyataannya daya dukung wilayah, keterbatasan lahan dan air, serta migrasi akan memperlambat pertumbuhan sehingga laju tidak konstan selamanya.',
    explanation:
      'Kunci: menyusun dua model eksponen, mengubah perbandingan menjadi pertidaksamaan pangkat, menguji nilai tahun secara bertahap, dan menyadari keterbatasan asumsi laju tetap.',
    hints: [
      'Bentuk model $P(t)=P_0(1+r)^t$ untuk tiap kota.',
      'Bandingkan dengan membagi kedua model sehingga muncul $\\left(\\dfrac{1{,}03}{1{,}01}\\right)^t>1{,}6$.',
    ],
    competencies: ['pemodelan eksponen', 'pertidaksamaan', 'interpretasi'],
    rubric: [
      'Menuliskan $A(t)=500.000(1{,}03)^{t}$ dan $B(t)=800.000(1{,}01)^{t}$',
      'Mengubah perbandingan menjadi $\\left(\\dfrac{1{,}03}{1{,}01}\\right)^{t}>1{,}6$ dan menguji nilai $t$',
      'Menyimpulkan Kota A melampaui pada tahun ke-$24$ dan menyebut keterbatasan laju tetap',
    ],
  },
  {
    id: 'eks-14',
    topicId: 'eksponen',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Massa sebuah zat radioaktif mula-mula $320$ gram. Setelah $15$ tahun, massanya tersisa $40$ gram. Massa zat itu menyusut mengikuti $M(t)=M_0\\left(\\dfrac{1}{2}\\right)^{t/T}$ dengan $T$ waktu paruh. (a) Tentukan waktu paruh $T$. (b) Tuliskan model lengkapnya. (c) Tentukan massa zat setelah $25$ tahun.',
    answer:
      '(a) Dari $320\\left(\\dfrac{1}{2}\\right)^{15/T}=40$ diperoleh $\\left(\\dfrac{1}{2}\\right)^{15/T}=\\dfrac{40}{320}=\\dfrac{1}{8}=\\left(\\dfrac{1}{2}\\right)^{3}$, sehingga $\\dfrac{15}{T}=3$ dan $T=5$ tahun. (b) Modelnya $M(t)=320\\left(\\dfrac{1}{2}\\right)^{t/5}$. (c) Setelah $25$ tahun terjadi $\\dfrac{25}{5}=5$ waktu paruh, sehingga $M(25)=320\\left(\\dfrac{1}{2}\\right)^{5}=320\\cdot\\dfrac{1}{32}=10$ gram.',
    explanation:
      'Kunci: mengubah data pengamatan menjadi persamaan eksponen, menyatakan $\\dfrac{1}{8}$ sebagai $\\left(\\dfrac{1}{2}\\right)^{3}$ untuk memperoleh waktu paruh, lalu memakai model pada waktu yang diminta.',
    hints: [
      'Nyatakan rasio massa yang tersisa sebagai pangkat dari $\\dfrac{1}{2}$.',
      'Setelah waktu paruh diketahui, bagi lama waktu dengan $T$ untuk memperoleh banyak waktu paruh.',
    ],
    competencies: ['peluruhan eksponen', 'waktu paruh', 'persamaan eksponen', 'pemodelan'],
    rubric: [
      'Menyusun $320\\left(\\tfrac12\\right)^{15/T}=40$ lalu $\\left(\\tfrac12\\right)^{15/T}=\\left(\\tfrac12\\right)^{3}$',
      'Memperoleh waktu paruh $T=5$ tahun dan menuliskan model lengkapnya',
      'Menghitung $M(25)=10$ gram',
    ],
  },
  {
    id: 'eks-15',
    topicId: 'eksponen',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'kontekstual',
    prompt:
      'Sebuah aplikasi memadatkan (mengompresi) berkas sehingga ukurannya menjadi $75\\%$ dari ukuran tahap sebelumnya setiap kali diproses. Jika ukuran awal berkas $64$ MB, ukurannya setelah $3$ tahap kompresi adalah …',
    options: [
      { key: 'A', text: '$48$ MB' },
      { key: 'B', text: '$36$ MB' },
      { key: 'C', text: '$27$ MB' },
      { key: 'D', text: '$16$ MB' },
    ],
    answer: 'C',
    explanation:
      'Setiap tahap mengalikan ukuran dengan $0{,}75$, sehingga setelah 3 tahap $64\\cdot(0{,}75)^{3}=64\\cdot0{,}421875=27$ MB. Opsi A ($48$) baru menerapkan satu tahap. Opsi B ($36$) baru menerapkan dua tahap. Opsi D ($16$) mengurangkan $25\\%$ dari ukuran awal secara linear ($64-3\\cdot16$), padahal kompresi bekerja dari ukuran tahap sebelumnya.',
    hints: [
      'Faktor tiap tahap adalah $0{,}75$ karena berkas menyusut $25\\%$.',
      'Setelah 3 tahap, hitung $64\\times(0{,}75)^{3}$.',
    ],
    competencies: ['pemodelan peluruhan', 'kontekstual'],
  },
];
