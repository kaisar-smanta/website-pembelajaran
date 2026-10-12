import type { Question } from '@/types/content';

export const fungsiRasionalAkarQuestions: Question[] = [
  {
    id: 'fra-01',
    topicId: 'fungsi-rasional-akar',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'konsep',
    prompt: 'Domain dari fungsi $f(x)=\\dfrac{x+2}{x-1}$ adalah …',
    options: [
      { key: 'A', text: 'semua bilangan real' },
      { key: 'B', text: '$x\\neq1$' },
      { key: 'C', text: '$x\\neq-2$' },
      { key: 'D', text: '$x>1$' },
    ],
    answer: 'B',
    explanation:
      'Penyebut bernilai nol saat $x-1=0$, yaitu $x=1$, sehingga domainnya semua bilangan real kecuali $x=1$ (B). Opsi A mengabaikan syarat penyebut tidak nol; opsi C salah mengira pembilang nol sebagai larangan, padahal $x=-2$ justru titik potong sumbu-$x$; opsi D membatasi domain secara berlebihan sebab fungsi juga terdefinisi untuk $x<1$.',
    hints: ['Cari nilai $x$ yang membuat penyebut bernilai nol.'],
    competencies: ['domain fungsi rasional'],
  },
  {
    id: 'fra-02',
    topicId: 'fungsi-rasional-akar',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'cepat',
    prompt: 'Diketahui $f(x)=\\dfrac{x+2}{x-1}$. Nilai $f(0)$ adalah …',
    options: [
      { key: 'A', text: '$2$' },
      { key: 'B', text: '$-2$' },
      { key: 'C', text: '$1$' },
      { key: 'D', text: '$0$' },
    ],
    answer: 'B',
    explanation:
      'Substitusi $x=0$ memberi $f(0)=\\dfrac{0+2}{0-1}=\\dfrac{2}{-1}=-2$ (B). Opsi A lupa tanda negatif dari penyebut; opsi C memakai nilai asimtot datar $y=1$ yang tidak berkaitan dengan $f(0)$; opsi D keliru karena pembilang bernilai $2$, bukan nol.',
    hints: ['Substitusikan $x=0$ ke pembilang dan penyebut.'],
    competencies: ['nilai fungsi rasional'],
  },
  {
    id: 'fra-03',
    topicId: 'fungsi-rasional-akar',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'konsep',
    prompt: 'Diketahui $g(x)=\\sqrt{x-3}$. Tentukan nilai $g(7)$.',
    answer: '2',
    explanation: 'Substitusi $x=7$: $g(7)=\\sqrt{7-3}=\\sqrt{4}=2$.',
    hints: ['Hitung $7-3$ terlebih dahulu, lalu ambil akar kuadratnya.'],
    competencies: ['evaluasi fungsi akar'],
  },
  {
    id: 'fra-04',
    topicId: 'fungsi-rasional-akar',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'cepat',
    prompt: 'Tentukan nilai asimtot datar fungsi $f(x)=\\dfrac{2x+1}{x^{2}-4}$.',
    answer: '0',
    explanation:
      'Derajat pembilang adalah $1$ dan derajat penyebut adalah $2$. Karena derajat pembilang lebih kecil, asimtot datarnya $y=0$.',
    hints: ['Bandingkan derajat pembilang dan penyebut terlebih dahulu.'],
    competencies: ['asimtot datar', 'perbandingan derajat'],
  },
  {
    id: 'fra-05',
    topicId: 'fungsi-rasional-akar',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt:
      'Fungsi $f(x)=\\dfrac{x^{2}-4}{(x-2)(x-1)}$ memiliki lubang (diskontinuitas terhapus) di titik …',
    options: [
      { key: 'A', text: '$(2,4)$' },
      { key: 'B', text: '$(1,-3)$' },
      { key: 'C', text: '$(2,0)$' },
      { key: 'D', text: '$(-2,0)$' },
    ],
    answer: 'A',
    explanation:
      'Pembilang $x^{2}-4=(x-2)(x+2)$ mencoret faktor $(x-2)$, sehingga $f(x)=\\dfrac{x+2}{x-1}$ untuk $x\\neq2$. Ordinat lubang $=\\dfrac{2+2}{2-1}=4$, jadi lubangnya di $(2,4)$ (A). Opsi B menukar lubang dengan asimtot tegak $x=1$; opsi C menganggap ordinat lubang nol padahal nilai fungsi mendekati $4$; opsi D mengambil titik potong sumbu-$x$ di $(-2,0)$.',
    hints: [
      'Faktorkan pembilang, lalu coret faktor yang sama dengan penyebut.',
      'Hitung nilai bentuk sederhana di $x=2$ untuk memperoleh ordinat lubang.',
    ],
    competencies: ['diskontinuitas terhapus', 'pemfaktoran'],
  },
  {
    id: 'fra-06',
    topicId: 'fungsi-rasional-akar',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt: 'Grafik fungsi $f(x)=\\dfrac{x-1}{x^{2}-3x+2}$ memiliki asimtot tegak di …',
    options: [
      { key: 'A', text: '$x=1$' },
      { key: 'B', text: '$x=2$' },
      { key: 'C', text: '$x=-1$' },
      { key: 'D', text: '$x=-2$' },
    ],
    answer: 'B',
    explanation:
      'Penyebut $x^{2}-3x+2=(x-1)(x-2)$. Faktor $(x-1)$ mencoret pembilang sehingga tersisa $f(x)=\\dfrac{1}{x-2}$, dan asimtot tegaknya $x=2$ (B). Opsi A menyebut $x=1$ yang justru menjadi lubang karena faktornya meniadakan; opsi C dan D salah tanda ketika memfaktorkan penyebut.',
    hints: [
      'Faktorkan penyebut menjadi dua faktor linear.',
      'Faktor yang mencoret pembilang menjadi lubang, bukan asimtot tegak.',
    ],
    competencies: ['asimtot tegak', 'pemfaktoran'],
  },
  {
    id: 'fra-07',
    topicId: 'fungsi-rasional-akar',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'penerapan',
    prompt: 'Tentukan nilai asimtot datar fungsi $f(x)=\\dfrac{3x^{2}+1}{x^{2}-4}$.',
    answer: '3',
    explanation:
      'Derajat pembilang sama dengan derajat penyebut ($2=2$), sehingga asimtot datar adalah rasio koefisien utamanya, yaitu $\\dfrac{3}{1}=3$.',
    hints: [
      'Bandingkan derajat kedua polinomial.',
      'Karena derajatnya sama, gunakan rasio koefisien suku berpangkat tertinggi.',
    ],
    competencies: ['asimtot datar', 'perbandingan derajat'],
  },
  {
    id: 'fra-08',
    topicId: 'fungsi-rasional-akar',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Perhatikan fungsi $f(x)=\\dfrac{x^{2}-9}{(x-3)(x+1)}$. (a) Sederhanakan sambil menuliskan syarat yang berlaku. (b) Tentukan letak lubang, asimtot tegak, dan asimtot datar.',
    answer:
      '(a) Faktorkan pembilang memakai selisih kuadrat: $x^{2}-9=(x-3)(x+3)$, sehingga $f(x)=\\dfrac{(x-3)(x+3)}{(x-3)(x+1)}=\\dfrac{x+3}{x+1}$ dengan syarat $x\\neq3$. (b) Karena faktor $(x-3)$ mencoret tetapi $x=3$ tetap tak terdefinisi, terdapat lubang di $x=3$ dengan ordinat $\\dfrac{3+3}{3+1}=\\dfrac{3}{2}$. Faktor penyebut yang tersisa $(x+1)$ memberi asimtot tegak $x=-1$. Derajat pembilang dan penyebut bentuk sederhana sama-sama $1$, sehingga asimtot datarnya $y=1$.',
    explanation:
      'Kunci menekankan pemfaktoran selisih kuadrat, pencoretan faktor bersama beserta syarat $x\\neq3$, lalu penentuan lubang, asimtot tegak, dan asimtot datar dari bentuk yang sudah disederhanakan.',
    hints: [
      'Gunakan $a^{2}-b^{2}=(a-b)(a+b)$ pada $x^{2}-9$.',
      'Setelah mencoret $(x-3)$, hitung nilainya di $x=3$ untuk memperoleh ordinat lubang.',
    ],
    competencies: ['fungsi rasional', 'lubang', 'asimtot'],
    rubric: [
      'Memfaktorkan pembilang dengan benar',
      'Mencoret faktor bersama dan menuliskan syarat $x\\neq3$',
      'Menentukan ordinat lubang',
      'Menentukan asimtot tegak dan asimtot datar',
    ],
  },
  {
    id: 'fra-09',
    topicId: 'fungsi-rasional-akar',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'kontekstual',
    prompt:
      'Biaya tetap sebuah usaha Rp500.000 per bulan dan biaya variabel Rp20.000 per unit. Biaya rata-rata per unit untuk $x$ unit adalah $\\bar{C}(x)=\\dfrac{20.000x+500.000}{x}$. Tentukan biaya rata-rata per unit bila memproduksi $500$ unit (dalam rupiah).',
    answer: '21000',
    acceptedAnswers: ['21000', 'Rp21.000', 'Rp 21.000', '21.000', '21000 rupiah'],
    explanation:
      'Substitusi $x=500$: $\\bar{C}(500)=\\dfrac{20.000(500)+500.000}{500}=\\dfrac{10.000.000+500.000}{500}=\\dfrac{10.500.000}{500}=21.000$ rupiah per unit.',
    hints: [
      'Hitung biaya total pada $x=500$ terlebih dahulu.',
      'Bagi biaya total itu dengan banyak unit, yaitu $500$.',
    ],
    competencies: ['pemodelan biaya rata-rata', 'nilai fungsi rasional'],
  },
  {
    id: 'fra-10',
    topicId: 'fungsi-rasional-akar',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Diketahui keluarga fungsi $f(x)=\\dfrac{x^{2}-a^{2}}{(x-a)(x-b)}$ dengan $a=2$ dan $b=1$. (a) Sederhanakan $f(x)$. (b) Tentukan domainnya. (c) Tentukan titik lubang, asimtot tegak, dan asimtot datar. (d) Jelaskan mengapa $x=2$ menjadi lubang, bukan asimtot tegak.',
    answer:
      '(a) Karena $x^{2}-4=(x-2)(x+2)$, maka $f(x)=\\dfrac{x+2}{x-1}$ untuk $x\\neq2$. (b) Penyebut bentuk asli bernilai nol di $x=2$ dan $x=1$, sehingga domainnya semua bilangan real kecuali $x=2$ dan $x=1$. (c) Faktor $(x-2)$ mencoret, jadi lubang berada di $x=2$ dengan ordinat $\\dfrac{2+2}{2-1}=4$, yaitu titik $(2,4)$. Faktor penyebut yang tersisa $(x-1)$ memberi asimtot tegak $x=1$. Derajat pembilang sama dengan derajat penyebut, sehingga asimtot datarnya $y=\\dfrac{1}{1}=1$. (d) Faktor $(x-2)$ muncul pada pembilang dan penyebut lalu saling meniadakan, sehingga di sekitar $x=2$ nilai fungsi mendekati bilangan berhingga $4$; titik itu hanya terhapus dari domain. Asimtot tegak berasal dari faktor penyebut yang tidak meniadakan, yaitu $(x-1)$, sebab di dekat $x=1$ nilai fungsi membesar tanpa batas.',
    explanation:
      'Kunci menekankan pemfaktoran $x^{2}-a^{2}$, pencoretan faktor bersama, penentuan ketiga ciri grafik, serta pembedaan lubang dari asimtot tegak melalui ada tidaknya limit berhingga.',
    hints: [
      'Mulai dengan memfaktorkan $x^{2}-a^{2}$ sebagai $(x-a)(x+a)$.',
      'Setelah mencoret $(x-a)$, hitung hasilnya di $x=a$ untuk ordinat lubang; faktor penyebut yang tersisa menentukan asimtot tegak.',
    ],
    competencies: ['fungsi rasional', 'lubang', 'asimtot', 'penalaran aljabar'],
    rubric: [
      'Menyederhanakan bentuk fungsi dengan benar',
      'Menentukan domain lengkap',
      'Menentukan lubang, asimtot tegak, dan asimtot datar',
      'Menjelaskan pembeda lubang dan asimtot tegak',
    ],
  },
  {
    id: 'fra-11',
    topicId: 'fungsi-rasional-akar',
    difficulty: 'mahir',
    type: 'multiple-choice',
    category: 'penalaran',
    prompt:
      'Fungsi $f(x)=\\dfrac{x^{3}+2x}{x^{2}-1}$. Pernyataan yang benar tentang asimtot datarnya adalah …',
    options: [
      { key: 'A', text: 'asimtot datar $y=0$' },
      { key: 'B', text: 'asimtot datar $y=1$' },
      { key: 'C', text: 'tidak memiliki asimtot datar karena derajat pembilang lebih besar' },
      { key: 'D', text: 'asimtot datar $y=2$' },
    ],
    answer: 'C',
    explanation:
      'Derajat pembilang adalah $3$ dan derajat penyebut adalah $2$. Karena derajat pembilang lebih besar, grafik tidak memiliki asimtot datar (C). Opsi A keliru memakai aturan $\\deg p<\\deg q$; opsi B keliru memakai aturan derajat sama; opsi D salah mengambil perbandingan koefisien konstanta sehingga memperoleh $2$.',
    hints: [
      'Bandingkan derajat pembilang dan penyebut.',
      'Aturan $y=0$ hanya berlaku bila derajat pembilang lebih kecil daripada penyebut.',
    ],
    competencies: ['asimtot datar', 'perbandingan derajat'],
  },
  {
    id: 'fra-12',
    topicId: 'fungsi-rasional-akar',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Biaya total produksi $x$ unit (dalam rupiah) dimodelkan $C(x)=25.000x+2.000.000$. (a) Tuliskan biaya rata-rata $\\bar{C}(x)=\\dfrac{C(x)}{x}$ dalam bentuk yang memisahkan bagian tetap. (b) Tentukan asimtot datar grafik $\\bar{C}(x)$ dan jelaskan maknanya dalam konteks. (c) Hitung $\\bar{C}(100)$ dan bandingkan dengan asimtot datarnya.',
    answer:
      '(a) $\\bar{C}(x)=\\dfrac{25.000x+2.000.000}{x}=25.000+\\dfrac{2.000.000}{x}$. (b) Derajat pembilang sama dengan derajat penyebut ($1=1$), sehingga asimtot datarnya adalah rasio koefisien utama, yaitu $y=25.000$. Maknanya, ketika produksi diperbesar, biaya tetap tersebar makin tipis per unit sehingga biaya rata-rata mendekati biaya variabel Rp25.000 per unit; nilai ini menjadi batas bawah yang tidak terlewati. (c) $\\bar{C}(100)=25.000+\\dfrac{2.000.000}{100}=25.000+20.000=45.000$ rupiah per unit, masih di atas asimtot $25.000$ karena bagian biaya tetap per unit pada produksi kecil masih besar.',
    explanation:
      'Kunci menekankan pemisahan pecahan menjadi konstanta ditambah suku rasional, pembacaan asimtot datar sebagai batas biaya variabel, dan penafsiran hasil hitung terhadap batas itu.',
    hints: [
      'Bagi setiap suku pada pembilang dengan $x$.',
      'Suku $\\dfrac{2.000.000}{x}$ makin kecil saat $x$ membesar; inilah yang menentukan asimtot datar.',
    ],
    competencies: ['pemodelan biaya rata-rata', 'asimtot datar', 'interpretasi'],
    rubric: [
      'Memisahkan biaya rata-rata menjadi bagian tetap dan bagian rasional',
      'Menentukan asimtot datar dengan tepat',
      'Menjelaskan makna asimtot datar dalam konteks biaya',
      'Menghitung dan membandingkan nilai biaya rata-rata',
    ],
  },
  {
    id: 'fra-13',
    topicId: 'fungsi-rasional-akar',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'evaluasi',
    prompt:
      'Diketahui $g(x)=\\sqrt{x-1}+2$ dengan $x\\geq1$. (a) Tentukan domain dan range $g$. (b) Jelaskan bagaimana grafik $g$ diperoleh dari grafik $y=\\sqrt{x}$. (c) Fungsi ini satu keluarga dengan fungsi nilai mutlak, fungsi tangga, dan fungsi piecewise. Berikan satu contoh situasi nyata yang lebih tepat dimodelkan oleh fungsi tangga daripada fungsi akar, dan jelaskan alasannya.',
    answer:
      '(a) Isi akar tidak negatif, yaitu $x-1\\geq0$, sehingga domainnya $x\\geq1$. Karena $\\sqrt{x-1}\\geq0$, nilai terkecil $g$ adalah $g(1)=2$, sehingga range-nya $y\\geq2$. (b) Grafik $y=\\sqrt{x}$ digeser $1$ satuan ke kanan lalu $2$ satuan ke atas. (c) Contoh yang tepat adalah tarif parkir atau ongkos kirim bertingkat: biaya tetap pada setiap selang waktu atau berat tertentu lalu melompat pada kelipatan berikutnya. Fungsi tangga menangkap lonjakan nilai pada batas selang, sedangkan fungsi akar berubah secara mulus sehingga tidak dapat menyatakan tarif yang melompat.',
    explanation:
      'Kunci menekankan penentuan domain dari syarat akar, range dari nilai minimum, deskripsi pergeseran grafik, serta pemilihan model yang sesuai antara fungsi tangga dan fungsi akar.',
    hints: [
      'Tentukan syarat $x-1\\geq0$ lebih dahulu.',
      'Bandingkan sifat "melompat di batas selang" milik fungsi tangga dengan "berubah mulus" milik fungsi akar.',
    ],
    competencies: ['fungsi akar', 'domain dan range', 'transformasi', 'evaluasi model'],
    rubric: [
      'Menentukan domain dari syarat akar',
      'Menentukan range fungsi',
      'Menjelaskan transformasi grafik',
      'Memilih dan menjelaskan model yang sesuai',
    ],
  },
  {
    id: 'fra-14',
    topicId: 'fungsi-rasional-akar',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'kontekstual',
    prompt:
      'Biaya rata-rata per unit sebuah produk dimodelkan $\\bar{C}(x)=\\dfrac{30.000x+900.000}{x}$ dengan $x$ banyak unit yang diproduksi. Domain yang bermakna secara kontekstual untuk fungsi ini adalah …',
    options: [
      { key: 'A', text: 'semua bilangan real' },
      { key: 'B', text: '$x>0$' },
      { key: 'C', text: '$x\\geq0$' },
      { key: 'D', text: '$x\\neq0$' },
    ],
    answer: 'B',
    explanation:
      'Banyak unit harus bilangan bulat positif, sehingga domain yang bermakna adalah $x>0$ (B). Opsi A mengabaikan pembagian dengan nol dan tidak membatasi tanda; opsi C masih memuat $x=0$ yang membuat penyebut nol sekaligus tak bermakna karena tidak ada produksi; opsi D benar secara aljabar tetapi masih mengizinkan $x<0$ yang tidak bermakna sebagai banyak unit.',
    hints: [
      'Nilai $x$ menyatakan banyak unit, sehingga harus positif.',
      'Pembagian dengan nol pada $x=0$ juga harus dihindari.',
    ],
    competencies: ['domain kontekstual', 'pemodelan biaya rata-rata'],
  },
  {
    id: 'fra-15',
    topicId: 'fungsi-rasional-akar',
    difficulty: 'mahir',
    type: 'short-answer',
    category: 'penalaran',
    prompt:
      'Fungsi $f(x)=\\dfrac{x^{2}-a^{2}}{(x-a)(x-b)}$ dengan $a=3$ dan $b=0$. Tentukan ordinat (nilai $y$) titik lubangnya.',
    answer: '2',
    explanation:
      'Faktorkan $x^{2}-9=(x-3)(x+3)$, lalu coret $(x-3)$ sehingga $f(x)=\\dfrac{x+3}{x}$ untuk $x\\neq3$. Faktor penyebut yang tersisa $x$ memberi asimtot tegak $x=0$, sedangkan lubang berada di $x=3$ dengan ordinat $\\dfrac{3+3}{3}=2$.',
    hints: [
      'Sederhanakan $f(x)$ dengan mencoret $(x-3)$.',
      'Substitusikan $x=3$ ke bentuk yang sudah disederhanakan.',
    ],
    competencies: ['fungsi rasional', 'lubang'],
  },
];
