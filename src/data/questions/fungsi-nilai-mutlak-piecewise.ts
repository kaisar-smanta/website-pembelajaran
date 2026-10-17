import type { Question } from '@/types/content';

export const fungsiNilaiMutlakPiecewiseQuestions: Question[] = [
  {
    id: 'nmp-01',
    topicId: 'fungsi-nilai-mutlak-piecewise',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'konsep',
    prompt: 'Nilai dari $|5-12|$ adalah …',
    options: [
      { key: 'A', text: '$7$' },
      { key: 'B', text: '$-7$' },
      { key: 'C', text: '$17$' },
      { key: 'D', text: '$-17$' },
    ],
    answer: 'A',
    explanation:
      'Hitung isi dulu: $5-12=-7$. Nilai mutlak membuang tanda, sehingga $|-7|=7$ (A). Opsi B berhenti pada $-7$ dan lupa membuang tanda; opsi C menjumlahkan $5$ dan $12$ alih-alih mengurangkan; opsi D melakukan dua kekeliruan sekaligus, yaitu menjumlahkan lalu mempertahankan tanda negatif.',
    hints: [
      'Hitung $5-12$ terlebih dahulu.',
      'Nilai mutlak adalah jarak, sehingga hasilnya tidak pernah negatif.',
      'Setelah memperoleh $-7$, tanyakan seberapa jauh bilangan itu dari nol.',
    ],
    competencies: ['nilai mutlak sebagai jarak'],
  },
  {
    id: 'nmp-02',
    topicId: 'fungsi-nilai-mutlak-piecewise',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'cepat',
    prompt: 'Diketahui $f(x)=|2x-5|$. Tentukan nilai $f(1)$.',
    answer: '3',
    explanation: 'Substitusi $x=1$: $f(1)=|2(1)-5|=|-3|=3$.',
    hints: [
      'Substitusikan $x=1$ ke dalam bentuk $2x-5$.',
      'Hitung $2(1)-5$ lalu ambil nilai mutlaknya.',
    ],
    competencies: ['menilai fungsi nilai mutlak'],
  },
  {
    id: 'nmp-03',
    topicId: 'fungsi-nilai-mutlak-piecewise',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'konsep',
    prompt: 'Himpunan penyelesaian $|x-4|=6$ adalah …',
    options: [
      { key: 'A', text: '$\\{10\\}$' },
      { key: 'B', text: '$\\{-2\\}$' },
      { key: 'C', text: '$\\{-2,\\,10\\}$' },
      { key: 'D', text: '$\\{2,\\,-10\\}$' },
    ],
    answer: 'C',
    explanation:
      'Persamaan $|u|=6$ memberi dua kasus: $x-4=6$ sehingga $x=10$, dan $x-4=-6$ sehingga $x=-2$. Jadi himpunannya $\\{-2,\\,10\\}$ (C). Opsi A hanya mengambil kasus positif; opsi B hanya mengambil kasus negatif; opsi D salah tanda pada kedua solusi karena keliru memindahkan $4$.',
    hints: [
      'Bentuk $|u|=c$ untuk $c>0$ menghasilkan dua kasus.',
      'Kasus pertama $x-4=6$, kasus kedua $x-4=-6$.',
      'Selesaikan kedua kasus lalu periksa dengan mensubstitusi balik.',
    ],
    competencies: ['persamaan nilai mutlak'],
  },
  {
    id: 'nmp-04',
    topicId: 'fungsi-nilai-mutlak-piecewise',
    difficulty: 'dasar',
    type: 'short-answer',
    category: 'penerapan',
    prompt:
      'Diberikan $h(x)=\\begin{cases} x^{2}-1, & x<0 \\\\ 3x+2, & x\\geq0 \\end{cases}$. Tentukan $h(-2)$.',
    answer: '3',
    explanation:
      'Karena $-2<0$, dipakai potongan pertama $x^{2}-1$: $h(-2)=(-2)^{2}-1=4-1=3$.',
    hints: [
      'Periksa dulu posisi $x=-2$ terhadap batas $0$.',
      'Karena $-2<0$, pakai rumus $x^{2}-1$.',
    ],
    competencies: ['menilai fungsi piecewise'],
  },
  {
    id: 'nmp-05',
    topicId: 'fungsi-nilai-mutlak-piecewise',
    difficulty: 'dasar',
    type: 'multiple-choice',
    category: 'konsep',
    prompt: 'Himpunan penyelesaian $|x-3|\\leq5$ adalah …',
    options: [
      { key: 'A', text: '$x\\leq8$' },
      { key: 'B', text: '$-2\\leq x\\leq8$' },
      { key: 'C', text: '$x\\geq-2$' },
      { key: 'D', text: '$x\\leq-2$ atau $x\\geq8$' },
    ],
    answer: 'B',
    explanation:
      'Bentuk $|u|\\leq c$ setara dengan $-c\\leq u\\leq c$, sehingga $-5\\leq x-3\\leq5$. Menambahkan $3$ memberi $-2\\leq x\\leq8$ (B). Opsi A hanya mengambil batas atas; opsi C hanya mengambil batas bawah; opsi D justru memakai aturan untuk tanda "lebih dari", bukan "kurang dari atau sama dengan".',
    hints: [
      'Ubah pertidaksamaan menjadi bentuk berantai di antara dua batas.',
      'Gunakan $-5\\leq x-3\\leq5$, lalu tambahkan $3$ pada ketiga ruas.',
    ],
    competencies: ['pertidaksamaan nilai mutlak'],
  },
  {
    id: 'nmp-06',
    topicId: 'fungsi-nilai-mutlak-piecewise',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt:
      'Diberikan $f(x)=\\begin{cases} x+1, & x<2 \\\\ x^{2}-1, & x\\geq2 \\end{cases}$. Pernyataan yang benar tentang titik $x=2$ adalah …',
    options: [
      { key: 'A', text: '$f$ tidak terdefinisi di $x=2$' },
      { key: 'B', text: '$f$ kontinu di $x=2$ karena nilai kiri, nilai kanan, dan $f(2)$ sama' },
      { key: 'C', text: '$f$ melompat di $x=2$ karena potongannya berbeda rumus' },
      { key: 'D', text: 'Grafik $f$ memiliki asimtot tegak $x=2$' },
    ],
    answer: 'B',
    explanation:
      'Nilai dari kiri di $x=2$ adalah $\\lim_{x\\to2^{-}}(x+1)=3$; nilai dari kanan adalah $\\lim_{x\\to2^{+}}(x^{2}-1)=3$; dan $f(2)=2^{2}-1=3$. Ketiganya sama, jadi $f$ kontinu di $x=2$ (B). Opsi A keliru karena $x=2$ tercakup potongan kedua; opsi C mengira rumus berbeda otomatis berarti lompatan, padahal nilainya bertemu; opsi D mencampurkan gagasan asimtot yang tidak berkaitan dengan fungsi piecewise ini.',
    hints: [
      'Hitung nilai dari kiri memakai potongan $x+1$ dan nilai dari kanan memakai $x^{2}-1$.',
      'Bandingkan keduanya dengan nilai $f(2)$.',
      'Rumus yang berbeda belum tentu berarti ada lompatan; yang menentukan adalah nilainya di titik sambung.',
    ],
    competencies: ['kontinuitas di titik sambung'],
  },
  {
    id: 'nmp-07',
    topicId: 'fungsi-nilai-mutlak-piecewise',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'kontekstual',
    prompt:
      'Sebuah jasa kirim memakai tarif bertingkat sesuai tabel berikut. Tentukan ongkos kirim paket bermassa $4\\ \\text{kg}$ (dalam rupiah).',
    table: {
      caption: 'Tarif ongkos kirim bertingkat berdasarkan berat paket',
      headers: ['Lapisan berat $w$ (kg)', 'Rumus ongkos'],
      rows: [
        ['$0 < w \\leq 1$', 'Rp8.000'],
        ['$1 < w \\leq 3$', 'Rp8.000 + Rp4.000 per kg lebih dari 1'],
        ['$3 < w \\leq 5$', 'Rp16.000 + Rp3.000 per kg lebih dari 3'],
        ['$w>5$', 'Rp22.000 + Rp2.000 per kg lebih dari 5'],
      ],
    },
    answer: '19000',
    acceptedAnswers: ['19000', 'Rp19.000', 'Rp 19.000', '19.000', '19000 rupiah'],
    explanation:
      'Berat $4\\ \\text{kg}$ berada pada lapisan $3<w\\leq5$, sehingga dipakai $16.000+3.000(w-3)$: $16.000+3.000(4-3)=16.000+3.000=19.000$ rupiah.',
    hints: [
      'Tentukan lapisan mana yang memuat $w=4$.',
      'Karena $3<4\\leq5$, gunakan rumus $16.000+3.000(w-3)$ dengan $w=4$.',
    ],
    competencies: ['tarif bertingkat', 'menilai fungsi piecewise'],
  },
  {
    id: 'nmp-08',
    topicId: 'fungsi-nilai-mutlak-piecewise',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penerapan',
    prompt:
      'Tarif parkir dikenakan Rp3.000 untuk jam pertama dan bertambah Rp2.000 untuk setiap jam berikutnya, selalu dibulatkan ke atas per jam. Fungsi biaya terhadap waktu paling tepat dimodelkan oleh …',
    options: [
      { key: 'A', text: 'fungsi linear' },
      { key: 'B', text: 'fungsi kuadrat' },
      { key: 'C', text: 'fungsi tangga' },
      { key: 'D', text: 'fungsi nilai mutlak' },
    ],
    answer: 'C',
    explanation:
      'Karena biaya tetap pada tiap selang satu jam lalu melompat tepat di batas jam, fungsi yang tepat adalah fungsi tangga (C). Opsi A keliru karena fungsi linear berubah mulus tanpa lompatan; opsi B menghasilkan lengkung halus yang tidak muncul pada tarif; opsi D memiliki bentuk V yang simetris dan tidak cocok dengan kenaikan bertahap ini.',
    hints: [
      'Perhatikan bahwa biaya tidak berubah selama satu jam penuh.',
      'Lompatan nilai di batas jam menuntun pada satu jenis fungsi khusus.',
    ],
    competencies: ['fungsi tangga', 'pemodelan'],
  },
  {
    id: 'nmp-09',
    topicId: 'fungsi-nilai-mutlak-piecewise',
    difficulty: 'cakap',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Tuliskan $f(x)=|2x-6|$ sebagai fungsi piecewise tanpa tanda mutlak, lalu hitung $f(0)$ dan $f(5)$.',
    answer:
      'Bentuk $|2x-6|$ bernilai nol saat $x=3$, sehingga potongannya berganti di $x=3$. Untuk $x\\geq3$, isi mutlak tak negatif sehingga $f(x)=2x-6$. Untuk $x<3$, isi mutlak negatif sehingga $f(x)=-(2x-6)=6-2x$. Jadi $f(x)=\\begin{cases} 6-2x, & x<3 \\\\ 2x-6, & x\\geq3 \\end{cases}$. Nilai $f(0)=6$ karena $0<3$, dan $f(5)=2(5)-6=4$ karena $5\\geq3$.',
    explanation:
      'Kunci menekankan titik sambung $x=3$, pemilihan tanda tiap potongan, dan penilaian yang konsisten dengan domain potongannya.',
    hints: [
      'Cari nilai $x$ yang membuat $2x-6=0$; di situlah potongan berganti.',
      'Untuk $x$ di bawah titik itu, balik tanda isi mutlak.',
      'Periksa hasil dengan menghitung langsung $|2(0)-6|$ dan $|2(5)-6|$.',
    ],
    competencies: ['menulis fungsi nilai mutlak sebagai piecewise', 'menilai fungsi'],
    rubric: [
      'Menemukan titik sambung $x=3$ dari $2x-6=0$',
      'Menuliskan kedua potongan dengan tanda yang benar',
      'Menghitung $f(0)$ dan $f(5)$ sesuai potongannya',
    ],
  },
  {
    id: 'nmp-10',
    topicId: 'fungsi-nilai-mutlak-piecewise',
    difficulty: 'cakap',
    type: 'short-answer',
    category: 'kontekstual',
    prompt:
      'Tarif sebuah taksi adalah Rp10.000 untuk $3\\ \\text{km}$ pertama, lalu Rp4.000 untuk setiap km berikutnya. Jika seorang penumpang membayar Rp27.000, berapa jarak tempuhnya (dalam km)?',
    answer: '7,25',
    acceptedAnswers: ['7,25', '7.25', '29/4', '7,25 km', '7,25 kilometer'],
    explanation:
      'Karena Rp27.000 lebih besar daripada Rp10.000, perjalanan melewati $3\\ \\text{km}$. Misalkan jarak $d\\ \\text{km}$, maka $10.000+4.000(d-3)=27.000$. Diperoleh $4.000(d-3)=17.000$, sehingga $d-3=4{,}25$ dan $d=7{,}25\\ \\text{km}$.',
    hints: [
      'Kurangi biaya dasar Rp10.000 dari total untuk mengetahui porsi biaya km tambahan.',
      'Porsi Rp17.000 dibagi Rp4.000 per km memberi tambahan km di atas 3.',
      'Jangan lupa menambahkan kembali $3\\ \\text{km}$ pertama.',
    ],
    competencies: ['fungsi piecewise', 'pertanyaan kebalikan'],
  },
  {
    id: 'nmp-11',
    topicId: 'fungsi-nilai-mutlak-piecewise',
    difficulty: 'cakap',
    type: 'multiple-choice',
    category: 'penalaran',
    prompt: 'Himpunan penyelesaian $|2x-4|>6$ adalah …',
    options: [
      { key: 'A', text: '$-1<x<5$' },
      { key: 'B', text: '$x<-1$ atau $x>5$' },
      { key: 'C', text: '$x>5$' },
      { key: 'D', text: '$-5<x<1$' },
    ],
    answer: 'B',
    explanation:
      'Bentuk $|u|>c$ setara dengan $u<-c$ atau $u>c$, sehingga $2x-4<-6$ atau $2x-4>6$. Kasus pertama memberi $x<-1$, kasus kedua memberi $x>5$ (B). Opsi A justru memakai aturan "kurang dari" sehingga mengambil selang antara; opsi C hanya mengambil satu cabang; opsi D terbalik tanda dan arahnya karena keliru memindahkan suku.',
    hints: [
      'Untuk tanda "lebih dari", nilai mutlak menghasilkan gabungan dua selang.',
      'Pecah menjadi $2x-4<-6$ atau $2x-4>6$.',
      'Selesaikan tiap pertidaksamaan lalu gabungkan dengan kata "atau".',
    ],
    competencies: ['pertidaksamaan nilai mutlak'],
  },
  {
    id: 'nmp-12',
    topicId: 'fungsi-nilai-mutlak-piecewise',
    difficulty: 'mahir',
    type: 'multiple-choice',
    category: 'penalaran',
    prompt:
      'Agar fungsi $f(x)=\\begin{cases} x^{2}+1, & x<2 \\\\ kx-1, & x\\geq2 \\end{cases}$ kontinu di $x=2$, nilai $k$ yang tepat adalah …',
    options: [
      { key: 'A', text: '$2$' },
      { key: 'B', text: '$3$' },
      { key: 'C', text: '$4$' },
      { key: 'D', text: '$5$' },
    ],
    answer: 'B',
    explanation:
      'Agar kontinu, nilai dari kiri harus sama dengan $f(2)$. Nilai dari kiri di $x=2$ memakai potongan pertama: $2^{2}+1=5$. Nilai fungsi dari potongan kedua di $x=2$ adalah $k(2)-1=2k-1$. Menyamakan keduanya memberi $2k-1=5$, sehingga $k=3$ (B). Opsi A lupa menambahkan $1$ sehingga memakai $2^{2}=4$ dan memperoleh $k=2{,}5$ lalu dibulatkan; opsi C menyamakan dengan $7$ karena salah memasukkan potongan; opsi D mengambil nilai $5$ langsung sebagai $k$ sehingga lupa membagi setelah menambahkan $1$.',
    hints: [
      'Kontinuitas mensyaratkan nilai kiri sama dengan nilai fungsi di titik sambung.',
      'Hitung $x^{2}+1$ di $x=2$ untuk memperoleh nilai kiri.',
      'Samakan $2k-1$ dengan nilai kiri itu, lalu selesaikan untuk $k$.',
    ],
    competencies: ['kontinuitas', 'menyelesaikan parameter'],
  },
  {
    id: 'nmp-13',
    topicId: 'fungsi-nilai-mutlak-piecewise',
    difficulty: 'mahir',
    type: 'short-answer',
    category: 'pemodelan',
    prompt:
      'Ongkos kirim bertingkat: Rp8.000 untuk $0 < w \\leq 1$; $8.000+4.000(w-1)$ untuk $1 < w \\leq 3$; $16.000+3.000(w-3)$ untuk $3 < w \\leq 5$; dan $22.000+2.000(w-5)$ untuk $w > 5$ (dalam rupiah, $w$ dalam kg). Seorang pelanggan membayar Rp25.000. Tentukan berat paketnya dalam kg.',
    answer: '6,5',
    acceptedAnswers: ['6,5', '6.5', '13/2', '6,5 kg', '6,5 kilogram'],
    explanation:
      'Karena Rp25.000 melebihi Rp22.000, beratnya berada di lapisan $w>5$. Gunakan $22.000+2.000(w-5)=25.000$, sehingga $2.000(w-5)=3.000$ dan $w-5=1{,}5$. Jadi $w=6{,}5\\ \\text{kg}$.',
    hints: [
      'Bandingkan tagihan dengan ongkos maksimum lapisan sebelumnya untuk menemukan lapisannya.',
      'Rp25.000 lebih besar daripada Rp22.000, jadi pakai rumus lapisan $w>5$.',
      'Selesaikan $22.000+2.000(w-5)=25.000$ untuk $w$.',
    ],
    competencies: ['pertanyaan kebalikan', 'tarif bertingkat'],
  },
  {
    id: 'nmp-14',
    topicId: 'fungsi-nilai-mutlak-piecewise',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Pajak penghasilan tahunan dikenakan per lapisan: tarif $5\\%$ untuk lapisan $0 < H \\leq 60$ juta, $15\\%$ untuk $60 < H \\leq 250$ juta, $25\\%$ untuk $250 < H \\leq 500$ juta, dan $30\\%$ untuk $H > 500$ juta (tiap lapisan dikenai tarifnya sendiri). (a) Tuliskan fungsi pajak $T(H)$ sebagai piecewise. (b) Hitung pajak untuk penghasilan Rp300 juta. (c) Periksa apakah $T$ kontinu di batas $H=250$ juta dan jelaskan maknanya.',
    table: {
      caption: 'Lapisan tarif pajak penghasilan progresif',
      headers: ['Lapisan penghasilan tahunan', 'Tarif'],
      rows: [
        ['$0 < H \\leq 60$ juta', '$5\\%$'],
        ['$60 < H \\leq 250$ juta', '$15\\%$'],
        ['$250 < H \\leq 500$ juta', '$25\\%$'],
        ['$H>500$ juta', '$30\\%$'],
      ],
    },
    answer:
      '(a) Pajak tiap lapisan dijumlahkan bertahap: $T(H)=\\begin{cases} 0{,}05H, & 0 < H \\leq 60 \\\\ 3+0{,}15(H-60), & 60 < H \\leq 250 \\\\ 31{,}5+0{,}25(H-250), & 250 < H \\leq 500 \\\\ 94+0{,}30(H-500), & H > 500 \\end{cases}$ dengan $H$ dan $T$ dalam juta rupiah. (b) Untuk $H=300$, pakai potongan ketiga: $T(300)=31{,}5+0{,}25(300-250)=31{,}5+12{,}5=44$ juta rupiah. (c) Nilai dari kiri di $H=250$ adalah $3+0{,}15(250-60)=3+28{,}5=31{,}5$, dan potongan ketiga tepat di $H=250$ juga memberi $31{,}5+0=31{,}5$. Karena keduanya sama, $T$ kontinu di $H=250$: grafiknya terhubung meskipun kemiringannya berubah, sehingga tidak ada lompatan pajak saat penghasilan melewati batas lapisan.',
    explanation:
      'Kunci menekankan penyusunan potongan berjenjang, penjumlahan pajak tiap lapisan, perhitungan pada satu kasus, serta pemeriksaan kontinuitas di batas lapisan.',
    hints: [
      'Hitung dulu total pajak lapisan-lapisan di bawah batas sebelum menyusun potongan berikutnya.',
      'Untuk $H=300$, gunakan konstanta akumulasi pajak sampai Rp250 juta lalu tambahkan $25\\%$ dari kelebihannya.',
      'Periksa kontinuitas dengan membandingkan nilai dari kiri dan nilai tepat di batas.',
    ],
    competencies: ['pemodelan piecewise', 'pajak progresif', 'kontinuitas'],
    rubric: [
      'Menuliskan fungsi pajak piecewise dengan konstanta akumulasi tiap lapisan yang benar',
      'Menghitung pajak Rp300 juta sebesar 44 juta dengan langkah yang jelas',
      'Memeriksa kontinuitas di batas Rp250 juta dan menjelaskan maknanya',
    ],
  },
  {
    id: 'nmp-15',
    topicId: 'fungsi-nilai-mutlak-piecewise',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'penalaran',
    prompt:
      'Perhatikan fungsi $g(x)=\\begin{cases} x+2, & x<1 \\\\ x^{2}+1, & x\\geq1 \\end{cases}$. (a) Tentukan nilai dari kiri dan nilai dari kanan di $x=1$. (b) Tentukan $g(1)$. (c) Apakah $g$ kontinu di $x=1$? Jelaskan alasanmu. (d) Jelaskan bagaimana perilaku grafik di sekitar $x=1$.',
    answer:
      '(a) Nilai dari kiri memakai potongan pertama: $\\lim_{x\\to1^{-}}(x+2)=3$. Nilai dari kanan memakai potongan kedua: $\\lim_{x\\to1^{+}}(x^{2}+1)=1^{2}+1=2$. (b) Karena $1\\geq1$, dipakai potongan kedua: $g(1)=1^{2}+1=2$. (c) $g$ tidak kontinu di $x=1$ sebab nilai dari kiri $(3)$ berbeda dari nilai dari kanan dan nilai fungsi $(2)$. Fungsi kontinu mensyaratkan ketiganya sama. (d) Grafik melompat turun di $x=1$: potongan garis $x+2$ berakhir dengan titik terbuka di $(1,3)$, sedangkan potongan parabola $x^{2}+1$ dimulai dengan titik tertutup di $(1,2)$. Karena batasnya tidak bertemu, terjadi lompatan setinggi $1$ satuan.',
    explanation:
      'Kunci menekankan perhitungan nilai satu sisi, pemilihan potongan yang tepat untuk $g(1)$, kesimpulan ketidakkontinuan, dan deskripsi titik terbuka serta tertutup pada grafik.',
    hints: [
      'Untuk nilai dari kiri, gunakan potongan $x+2$; untuk nilai dari kanan, gunakan $x^{2}+1$.',
      'Perhatikan bahwa kondisi $x\\geq1$ membuat $g(1)$ memakai potongan kedua.',
      'Ketidakkontinuan terjadi ketika nilai kiri dan nilai kanan tidak bertemu.',
    ],
    competencies: ['kontinuitas di titik sambung', 'analisis grafik'],
    rubric: [
      'Menghitung nilai dari kiri dan nilai dari kanan dengan tepat',
      'Menentukan $g(1)$ memakai potongan yang benar',
      'Menyimpulkan ketidakkontinuan beserta alasan yang benar',
      'Menggambarkan lompatan dengan titik terbuka dan titik tertutup',
    ],
  },
  {
    id: 'nmp-16',
    topicId: 'fungsi-nilai-mutlak-piecewise',
    difficulty: 'mahir',
    type: 'multiple-choice',
    category: 'penalaran',
    prompt: 'Himpunan penyelesaian $|3x-6|=|x+2|$ adalah …',
    options: [
      { key: 'A', text: '$\\{1\\}$' },
      { key: 'B', text: '$\\{4\\}$' },
      { key: 'C', text: '$\\{1,\\,4\\}$' },
      { key: 'D', text: '$\\{-1,\\,4\\}$' },
    ],
    answer: 'C',
    explanation:
      'Kesamaan dua nilai mutlak berarti kedua isi sama atau berlawanan tanda. Kasus pertama $3x-6=x+2$ memberi $2x=8$ sehingga $x=4$. Kasus kedua $3x-6=-(x+2)$ memberi $3x-6=-x-2$ sehingga $4x=4$ dan $x=1$. Uji $x=1$: $|-3|=|3|$ benar; uji $x=4$: $|6|=|6|$ benar. Jadi himpunannya $\\{1,\\,4\\}$ (C). Opsi A hanya mengambil satu kasus; opsi B hanya mengambil kasus lainnya; opsi D salah tanda karena keliru memindahkan suku pada kasus kedua.',
    hints: [
      'Untuk $|A|=|B|$, berlaku $A=B$ atau $A=-B$.',
      'Selesaikan tiap kasus secara terpisah.',
      'Substitusikan kembali kedua kandidat untuk memastikan keduanya sah.',
    ],
    competencies: ['persamaan nilai mutlak', 'penalaran aljabar'],
  },
  {
    id: 'nmp-17',
    topicId: 'fungsi-nilai-mutlak-piecewise',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Sebuah taman menetapkan tarif masuk Rp5.000 untuk pengunjung berusia di bawah 12 tahun dan Rp12.000 untuk usia 12 tahun ke atas. (a) Tuliskan fungsi tarif $T(u)$ sebagai piecewise dengan $u$ usia dalam tahun. (b) Hitung $T(11)$ dan $T(12)$. (c) Jelaskan mengapa tarif ini tepat dimodelkan fungsi tangga, lalu usulkan satu perbaikan kebijakan agar kenaikan tarif terasa lebih adil bagi pengunjung yang berusia tepat di batas.',
    answer:
      '(a) $T(u)=\\begin{cases} 5.000, & 0\\leq u<12 \\\\ 12.000, & u\\geq12 \\end{cases}$. (b) $T(11)=5.000$ karena $11<12$, dan $T(12)=12.000$ karena $12\\geq12$. (c) Tarif ini berupa fungsi tangga karena nilainya tetap dalam tiap selang usia lalu melompat tepat di batas 12 tahun, tanpa nilai antara. Kenaikan $7.000$ sekaligus di satu titik terasa tidak adil bagi yang baru menginjak 12 tahun. Perbaikan yang masuk akal adalah menambahkan lapisan transisi, misalnya tarif Rp8.000 untuk usia 12 sampai 14 tahun, sehingga kenaikan terbagi menjadi dua tahap yang lebih kecil. Modelnya menjadi piecewise tiga potongan yang tetap tangga, tetapi lompatan tiap batasnya lebih ringan.',
    explanation:
      'Kunci menekankan penulisan fungsi tangga dua potongan, penilaian di dua sisi batas, pengenalan ciri fungsi tangga, dan usulan perbaikan yang tetap konsisten dengan model bertingkat.',
    hints: [
      'Tentukan batas usia tempat tarif berganti.',
      'Perhatikan kondisi "$<$" dan "$\\geq$" agar $T(12)$ memakai tarif dewasa.',
      'Untuk perbaikan, tambahkan lapisan peralihan agar selisih antarlapisan lebih kecil.',
    ],
    competencies: ['fungsi tangga', 'pemodelan', 'evaluasi kebijakan'],
    rubric: [
      'Menuliskan fungsi tarif piecewise dengan batas usia yang benar',
      'Menghitung $T(11)$ dan $T(12)$ sesuai potongannya',
      'Menjelaskan ciri fungsi tangga dan mengusulkan perbaikan yang masuk akal',
    ],
  },
  {
    id: 'nmp-18',
    topicId: 'fungsi-nilai-mutlak-piecewise',
    difficulty: 'mahir',
    type: 'open-response',
    category: 'pemodelan',
    prompt:
      'Sebuah penyedia internet memasang tarif Rp100.000 untuk pemakaian sampai 10 GB, lalu Rp15.000 untuk setiap GB kelebihan di atas 10 GB. (a) Tuliskan fungsi biaya $B(d)$ sebagai piecewise dengan $d$ pemakaian dalam GB. (b) Hitung biaya untuk pemakaian 14 GB. (c) Jelaskan satu kelemahan model tarif seperti ini ketika pemakaian berada tepat di sekitar batas paket, lalu sebutkan cara sederhana mengatasinya.',
    answer:
      '(a) $B(d)=\\begin{cases} 100.000, & 0\\leq d\\leq10 \\\\ 100.000+15.000(d-10), & d>10 \\end{cases}$. (b) Untuk $d=14$, pakai potongan kedua: $B(14)=100.000+15.000(14-10)=100.000+60.000=160.000$ rupiah. (c) Kelemahannya, pemakaian sedikit di atas 10 GB langsung dikenai tambahan penuh per GB, sehingga pemakaian 10,1 GB terasa jauh lebih mahal daripada 10 GB dan pengguna cenderung menahan diri di batas paket. Model tarif ini tetap menyambung di $d=10$ karena kedua potongan bernilai Rp100.000 di titik itu, jadi tidak ada lompatan, hanya perubahan kemiringan. Cara sederhana mengatasinya adalah memberi kelonggaran kuota pada batas, misalnya 2 GB pertama kelebihan tetap Rp100.000, lalu kelebihannya Rp15.000 per GB.',
    explanation:
      'Kunci menekankan penulisan model dua potongan yang menyambung di batas, perhitungan biaya, serta kritik atas perilaku di sekitar batas paket.',
    hints: [
      'Bagi domain menjadi dua: pemakaian sampai 10 GB dan di atas 10 GB.',
      'Untuk 14 GB, hitung kelebihan $14-10=4$ GB lalu kalikan tarif per GB.',
      'Periksa nilai kedua potongan di $d=10$ untuk melihat apakah model melompat.',
    ],
    competencies: ['pemodelan piecewise', 'kontinuitas', 'evaluasi model'],
    rubric: [
      'Menuliskan fungsi biaya piecewise dengan batas 10 GB yang benar',
      'Menghitung biaya 14 GB sebesar Rp160.000 dengan langkah yang jelas',
      'Menjelaskan kelemahan di sekitar batas dan menawarkan perbaikan yang masuk akal',
    ],
  },
];
