import type { Application } from '@/types/content';

export const pengukuranApplications: Application[] = [
  {
    id: 'pengukuran-tinggi-menara',
    title: 'Menaksir Tinggi Menara tanpa Memanjat',
    category: 'pengukuran',
    element: 'geometri',
    grade: 'X',
    level: 'dasar',
    estimatedMinutes: 8,
    explorationId: 'trigonometri-segitiga',
    tags: ['trigonometri', 'sudut elevasi', 'triangulasi', 'pengukuran', 'tangen'],
    summary: 'Menggunakan perbandingan trigonometri untuk mengukur tinggi objek dari jarak tertentu.',
    topicIds: ['trigonometri'],
    body: `Pada jarak **50 m** dari kaki sebuah menara, seorang pengamat mengukur sudut elevasi ke puncak menara sebesar **30°**. Tanah dianggap datar dan tinggi mata pengamat diabaikan. Menaksir tinggi menara $h$ memakai perbandingan tangen:

$$\\tan 30^\\circ = \\frac{h}{50}.$$

Namun muncul sebuah keputusan. Pengamat bisa berdiri **50 m** dari menara (sudut sekitar $30^\\circ$) atau menjauh ke **100 m** (sudut sekitar $16^\\circ$). Alat ukur sudutnya hanya teliti sampai **±1°**. Posisi mana yang sebaiknya dipilih agar taksiran tinggi menara lebih dapat dipercaya, dan mengapa jarak yang lebih jauh belum tentu memberi hasil lebih baik?`,
    analysis: `Karena $\\tan 30^\\circ = \\dfrac{1}{\\sqrt{3}} \\approx 0{,}5774$, dari posisi 50 m:
$$h = 50 \\times \\tan 30^\\circ = \\frac{50}{\\sqrt{3}} \\approx 28{,}87 \\text{ m}.$$

Untuk menilai keandalan tiap posisi, kita hitung seberapa besar taksiran $h$ bergeser ketika sudut meleset $1^\\circ$. Karena $h = d\\tan\\theta$, perubahan $h$ terhadap sudut adalah $\\dfrac{dh}{d\\theta} = d\\,\\sec^{2}\\theta$.

- Dari 50 m ($\\theta = 30^\\circ$, $\\sec^{2}30^\\circ = \\tfrac{4}{3}$): $\\Delta h \\approx 50 \\times \\tfrac{4}{3} \\times 0{,}01745 \\approx 1{,}16$ m.
- Dari 100 m (sudut terukur hanya $16{,}1^\\circ$, $\\sec^{2}16{,}1^\\circ \\approx 1{,}083$): $\\Delta h \\approx 100 \\times 1{,}083 \\times 0{,}01745 \\approx 1{,}89$ m.

Jadi posisi 100 m memberi galat hampir **1,6 kali** lebih besar, dan jarak dasarnya sendiri lebih sulit diukur tepat. Kesimpulannya, berdiri lebih dekat sehingga sudut elevasi lebih besar memberi taksiran yang lebih andal, selama menara masih terlihat dan sudut tidak mendekati $90^\\circ$. Dengan kata lain, semakin besar sudut elevasi (selama masih terukur andal), semakin kecil pergeseran taksiran akibat galat sudut. Metode ini disebut **triangulasi** dan dipakai pada survei serta navigasi. Inilah alasan juru ukur mengukur dari beberapa titik berbeda lalu membandingkan hasilnya, bukan hanya dari satu posisi.`,
    takeaways: [
      'Satu sudut dan satu jarak cukup untuk menaksir tinggi lewat tangen.',
      'Hasil pengukuran bergantung pada asumsi yang dipakai.',
      'Galat taksiran membesar ketika sudut elevasi makin kecil, sehingga pemilihan posisi ukur memengaruhi ketelitian.',
    ],
    reflection: [
      'Asumsi apa yang paling mudah dilanggar saat mengukur di lapangan?',
      'Bagaimana koreksi dilakukan jika tinggi mata pengamat tidak diabaikan?',
    ],
    source:
      'Mengacu pada metode triangulasi yang dipakai juru ukur dan surveyor; jarak 50 m dan sudut 30° dipilih agar perhitungan tangen mudah, dengan angka dibulatkan dan bukan hasil pengukuran lapangan tertentu.',
  },
  {
    id: 'luas-juring-taman',
    title: 'Merancang Taman Berbentuk Juring',
    category: 'pengukuran',
    element: 'geometri',
    grade: 'XI',
    level: 'dasar',
    estimatedMinutes: 8,
    explorationId: 'lingkaran-eksplorasi',
    tags: ['lingkaran', 'juring', 'busur', 'luas', 'desain taman'],
    summary: 'Menghitung luas juring dan panjang busur untuk kebutuhan material.',
    topicIds: ['lingkaran', 'trigonometri'],
    body: `Panitia lingkungan akan membuat taman berbentuk **juring lingkaran**. Anggarannya adalah **rumput maksimum 40 m²** dan **pagar lengkung maksimum 12 m**. Ada dua rancangan yang diusulkan:

- **Rancangan A:** sudut pusat $90^\\circ$ dengan jari-jari $7$ m.
- **Rancangan B:** sudut pusat $120^\\circ$ dengan jari-jari $6$ m.

Hanya sisi lengkung yang perlu dipagari (sisi lurus berbatasan dengan dinding). Pertanyaan pemicunya: rancangan mana yang masih memenuhi kedua anggaran? Luas juring dan panjang busur sebanding dengan sudut pusat terhadap satu putaran penuh:

$$L = \\frac{\\theta}{360^\\circ} \\times \\pi r^{2}, \\qquad s = \\frac{\\theta}{360^\\circ} \\times 2\\pi r.$$`,
    analysis: `Pakai $\\pi \\approx \\tfrac{22}{7}$.

**Rancangan A ($\\theta = 90^\\circ$, $r = 7$ m).**
$$L = \\frac{90}{360} \\times \\frac{22}{7} \\times 7^{2} = \\frac{1}{4} \\times 154 = 38{,}5\\ \\text{m}^2,$$
$$s = \\frac{90}{360} \\times 2 \\times \\frac{22}{7} \\times 7 = \\frac{1}{4} \\times 44 = 11\\ \\text{m}.$$
Luas $38{,}5 \\le 40$ dan busur $11 \\le 12$, jadi **Rancangan A memenuhi kedua anggaran**.

**Rancangan B ($\\theta = 120^\\circ$, $r = 6$ m).**
$$L = \\frac{120}{360} \\times \\frac{22}{7} \\times 6^{2} = \\frac{1}{3} \\times 113{,}14 \\approx 37{,}71\\ \\text{m}^2,$$
$$s = \\frac{120}{360} \\times 2 \\times \\frac{22}{7} \\times 6 = \\frac{1}{3} \\times 37{,}71 \\approx 12{,}57\\ \\text{m}.$$
Luasnya memang masih di bawah 40 m², tetapi busurnya $12{,}57 > 12$ m sehingga **melebihi anggaran pagar**.

Pelajaran dari keputusan ini: mengubah sudut dan jari-jari tidak mengubah luas dan busur dengan laju yang sama, sehingga memenuhi satu kendala belum tentu memenuhi kendala lain. Rancangan A dipilih karena lolos kedua anggaran sekaligus. Mengubah jari-jari juga lebih berpengaruh daripada mengubah sudut, karena luas bergantung pada $r^{2}$ sedangkan panjang busur hanya pada $r$. Selain itu, sisi lurus taman (dua jari-jari) tidak dihitung sebagai busur, sehingga anggaran material harus memisahkan bagian lurus dan bagian lengkung.`,
    takeaways: [
      'Luas juring dan panjang busur sebanding dengan besar sudut pusat.',
      'Menghitung material berarti memisahkan bagian lurus dan bagian lengkung.',
      'Luas bergantung pada kuadrat jari-jari sedangkan panjang busur hanya pada jari-jari, sehingga keduanya tidak berubah sebanding.',
    ],
    reflection: [
      'Bagaimana hasil berubah jika sudut juring diperbesar dua kali?',
      'Bagian taman mana yang paling mahal, dan mengapa?',
    ],
    source:
      'Skenario pengajaran yang dikonstruksi mengikuti perancangan taman berbentuk juring pada praktik lansekap; ukuran dan anggaran dipilih agar luas, busur, dan biaya mudah dibandingkan, bukan proyek taman tertentu.',
  },
  {
    id: 'skala-logaritma',
    title: 'Skala Logaritma: Mengukur Gempa dan Keasaman',
    category: 'pengukuran',
    element: 'bilangan',
    grade: 'X',
    level: 'cakap',
    estimatedMinutes: 11,
    explorationId: 'fungsi-eksponensial-grafik',
    tags: ['logaritma', 'skala richter', 'pH', 'gempa', 'skala logaritma'],
    summary: 'Menggunakan logaritma untuk menafsirkan skala kekuatan gempa dan pH.',
    topicIds: ['persamaan-eksponen-logaritma', 'eksponen', 'fungsi-eksponensial'],
    body: `Sebagian besaran memiliki jangkauan yang sangat lebar sehingga diukur dengan skala logaritma. Kekuatan gempa dinyatakan $M = \\log_{10}\\!\\left(\\dfrac{A}{A_0}\\right)$, sedangkan keasaman larutan dinyatakan $\\mathrm{pH} = -\\log_{10}[\\mathrm{H}^{+}]$.

Mengapa gempa bermagnitudo $7$ jauh lebih dahsyat daripada magnitudo $5$, padahal angkanya hanya berbeda dua? Dan mengapa larutan dengan $\\mathrm{pH}$ satu satuan lebih rendah bisa jauh lebih asam? Kunci jawabannya ada pada sifat logaritma yang memampatkan rentang besar menjadi angka kecil.`,
    analysis: `**Gempa.** Selisih satu satuan Richter berarti amplitudo $10$ kali lebih besar. Gempa bermagnitudo $7$ memiliki amplitudo $10^{7-5} = 10^{2} = 100$ kali gempa bermagnitudo $5$. Karena energi sebanding dengan $10^{1{,}5M}$, selisih dua satuan magnitudo menaikkan energi sekitar $10^{3} = 1000$ kali. Kenaikan yang terasa kecil pada angka, tetapi sangat besar pada kenyataan.

**pH.** Larutan dengan $\\mathrm{pH}=3$ memiliki konsentrasi ion $\\mathrm{H}^{+}$ sebesar $10^{-3}$ M, sedangkan $\\mathrm{pH}=5$ sebesar $10^{-5}$ M. Selisih dua satuan pH berarti konsentrasinya **100 kali** berbeda. Skala logaritma memampatkan rentang raksasa menjadi angka yang mudah dibaca, tetapi justru menyembunyikan besarnya perbedaan jika hanya angka yang dilihat sekilas.`,
    takeaways: [
      'Selisih satu satuan pada skala logaritma berarti perbedaan kelipatan sepuluh.',
      'Skala logaritma memampatkan rentang besar agar mudah dibaca.',
    ],
    reflection: [
      'Mengapa kenaikan satu angka pada skala Richter terasa jauh lebih dahsyat daripada kelihatannya?',
      'Sebutkan besaran lain yang cocok diukur dengan skala logaritma.',
    ],
    source:
      'Mengacu pada rumus skala magnitudo gempa (Richter) dan definisi pH; angka dibulatkan untuk pembelajaran dan bukan data satu peristiwa gempa tertentu.',
  },
  {
    id: 'lintasan-bola',
    title: 'Lintasan Bola: Kapan Mencapai Tinggi Maksimum?',
    category: 'pengukuran',
    element: 'aljabar-fungsi',
    grade: 'X',
    level: 'cakap',
    estimatedMinutes: 10,
    explorationId: 'kuadrat-parameter',
    tags: ['fungsi kuadrat', 'parabola', 'titik puncak', 'lintasan', 'pemodelan'],
    summary: 'Menentukan waktu dan tinggi maksimum lintasan bola dengan titik puncak fungsi kuadrat.',
    topicIds: ['fungsi-kuadrat', 'pemodelan-fungsi'],
    body: `Sebuah tendangan bebas melambungkan bola. Tinggi bola (dalam meter) setelah $t$ detik dimodelkan oleh fungsi kuadrat

$$h(t) = -5t^{2} + 20t + 1.$$

Anggap bola bergerak mendatar dengan laju tetap **10 m/s**, sehingga posisi mendatar bertambah 10 m setiap detik. Gawang berada **30 m** dari titik tendangan dengan tinggi mistar **2,44 m**. Pemain harus memutuskan: apakah tendangan ini akan masuk ke gawang, atau bola justru melambung terlalu tinggi?

Karena lintasannya parabola yang membuka ke bawah, titik tertinggi tepat di **titik puncak**; apakah bola masuk ditentukan dengan menghitung tingginya saat mencapai gawang. Model ini mengabaikan hambatan udara dan efek putaran bola, jadi hanya berlaku sebagai perkiraan.`,
    analysis: `Koefisien $t^{2}$ bernilai negatif, sehingga grafik membuka ke bawah dan puncaknya adalah nilai maksimum. Waktu saat mencapai puncak:
$$t = -\\frac{b}{2a} = -\\frac{20}{2 \\cdot (-5)} = 2 \\text{ detik},$$
dengan tinggi puncak
$$h(2) = -5(2)^{2} + 20(2) + 1 = 21 \\text{ m}.$$

Sekarang periksa apakah tendangan itu masuk. Bola menempuh 30 m dengan laju 10 m/s, sehingga tiba di gawang pada $t = 3$ detik. Tinggi bola saat itu:
$$h(3) = -5(3)^{2} + 20(3) + 1 = -45 + 60 + 1 = 16 \\text{ m}.$$
Karena $16 \\text{ m} \\gg 2{,}44 \\text{ m}$, bola **jauh melewati mistar gawang**. Tendangan ini bukan tembakan yang tepat sasaran. Keputusan yang benar adalah memakai tendangan yang lebih datar (memperkecil koefisien linear) agar bola tiba di gawang di bawah mistar.

Model tetap memberi informasi lain yang berguna: bola kembali menyentuh tanah ketika $h(t) = 0$, yaitu pada $t \\approx 4{,}05$ detik. Menghitung tinggi pada satu waktu tertentu dan titik puncak sekaligus jauh lebih cepat daripada menguji nilai $t$ satu per satu.`,
    takeaways: [
      'Titik puncak parabola $y = ax^{2} + bx + c$ terjadi pada $x = -\\dfrac{b}{2a}$.',
      'Tanda koefisien $a$ menentukan arah bukaan lintasan.',
      'Model matematika tetap dibatasi asumsi, seperti pengabaian hambatan udara.',
    ],
    reflection: [
      'Apa arti fisis dari angka $1$ pada model $h(t)$?',
      'Bagaimana bentuk parabola berubah jika tendangan lebih kuat?',
      'Pada detik ke berapa bola menyentuh tanah, dan bagaimana kamu menghitungnya?',
    ],
    source:
      'Mengacu pada model gerak parabola (peluru) dengan pengabaian hambatan udara; koefisien dipilih agar titik puncak mudah dihitung, bukan data tendangan nyata.',
  },
  {
    id: 'transformasi-matriks',
    title: 'Menaksir Perubahan Luas Lahan dengan Determinan Matriks',
    category: 'pengukuran',
    element: 'aljabar-fungsi',
    grade: 'XI',
    level: 'mahir',
    estimatedMinutes: 12,
    explorationId: 'matriks-transformasi',
    tags: ['matriks', 'transformasi', 'determinan', 'luas', 'shear'],
    summary: 'Menghubungkan determinan matriks dengan perubahan luas dan orientasi sebuah bangun.',
    topicIds: ['matriks'],
    body: `Sebuah petak lahan pada denah berbentuk persegi panjang dengan titik sudut $O(0,0)$, $P(4,0)$, $R(4,2)$, dan $S(0,2)$ (satuan meter), sehingga luasnya $8\\ \\text{m}^2$. Perencana ingin menguji tiga matriks transformasi pada denah itu:

$$T_1 = \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}, \\quad T_2 = \\begin{pmatrix} 2 & 0 \\\\ 0 & 1 \\end{pmatrix}, \\quad T_3 = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}.$$

Pertanyaan pemicunya: matriks mana yang mengubah luas lahan, dan matriks mana yang hanya mengubah bentuk atau posisinya? Menebak dari "bentuk yang tampak berubah" saja tidak cukup; **determinan** memberi jawabannya, karena luas bangun berubah dengan faktor $|\\det T|$.`,
    analysis: `Bayangan sebuah titik diperoleh dengan mengalikan matriks ke vektor kolom koordinatnya, misalnya untuk $P(4,0)$:

$$T_1 \\begin{pmatrix} 4 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} 4 \\\\ 0 \\end{pmatrix}, \\quad T_2 \\begin{pmatrix} 4 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} 8 \\\\ 0 \\end{pmatrix}, \\quad T_3 \\begin{pmatrix} 4 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 4 \\end{pmatrix}.$$

Melanjutkan cara yang sama, seluruh titik sudut menjadi:
- $T_1$: $O(0,0)$, $P(4,0)$, $R(6,2)$, $S(2,2)$.
- $T_2$: $O(0,0)$, $P(8,0)$, $R(8,2)$, $S(0,2)$.
- $T_3$: $O(0,0)$, $P(0,4)$, $R(2,4)$, $S(2,0)$.

Determinannya:
$$\\det T_1 = 1, \\qquad \\det T_2 = 2, \\qquad \\det T_3 = -1.$$

Karena faktor pengali luas adalah $|\\det T|$:
- $|\\det T_1| = 1$, sehingga $T_1$ (shear, transformasi gunting) **mempertahankan luas $8\\ \\text{m}^2$** meski bentuknya menjadi miring. Periksa dengan alas $4$ dan tinggi $2$: $4 \\times 2 = 8$.
- $|\\det T_2| = 2$, sehingga luas menjadi $2 \\times 8 = 16\\ \\text{m}^2$ (persegi panjang $8 \\times 2$).
- $|\\det T_3| = 1$, sehingga luas tetap $8\\ \\text{m}^2$ (persegi panjang $2 \\times 4$). Determinan negatif menandakan orientasi terbalik karena $T_3$ adalah pencerminan terhadap garis $y = x$.`,
    takeaways: [
      'Nilai mutlak determinan matriks $2 \\times 2$ adalah faktor pengali luas bangun.',
      'Transformasi dengan $|\\det| = 1$, seperti rotasi, pencerminan, dan shear, tidak mengubah luas.',
      'Tanda determinan menunjukkan apakah orientasi bangun terbalik.',
    ],
    reflection: [
      'Mengapa shear mengubah bentuk lahan tetapi tidak mengubah luasnya?',
      'Transformasi dengan determinan berapa yang memperbesar luas, dan berapa yang mengecilkannya?',
      'Apa arti tanda negatif pada determinan $T_3$ bagi arah denah?',
    ],
    source:
      'Skenario pengajaran yang dikonstruksi dengan angka realistis: petak lahan pada denah dipilih agar determinan matriks dan perubahan luasnya mudah diperiksa, bukan data pertanahan tertentu.',
  },
  {
    id: 'peta-dan-skala',
    title: 'Peta, Skala, dan Transformasi Grafik',
    category: 'pengukuran',
    element: 'aljabar-fungsi',
    grade: 'XI',
    level: 'cakap',
    estimatedMinutes: 12,
    explorationId: 'transformasi-fungsi-sim',
    tags: ['skala', 'peta', 'transformasi fungsi', 'translasi', 'dilatasi'],
    summary: 'Menghitung jarak sebenarnya dari skala peta dan memodelkan perubahan gambarnya sebagai transformasi fungsi.',
    topicIds: ['transformasi-fungsi', 'lingkaran'],
    body: `Peta desa digambar dengan skala **1 : 20.000**, artinya $1 \\text{ cm}$ pada peta mewakili $200 \\text{ m}$ di lapangan. Dua lokasi terletak di $A(0,0)$ dan $B(3,4)$ dengan satuan sentimeter pada peta.

Berapa jarak sebenarnya kedua lokasi? Ketika peta diperbesar dan titik acuannya digeser, bagaimana persamaan sebuah jalan yang semula berbentuk $y = x^{2}$ berubah? Memperbesar peta adalah **dilatasi**, sedangkan menggeser acuan adalah **translasi**, dua transformasi yang dapat dipelajari langsung melalui fungsi.`,
    analysis: `Jarak pada peta dihitung dengan rumus jarak:

$$AB = \\sqrt{3^{2} + 4^{2}} = \\sqrt{25} = 5 \\text{ cm}.$$

Skala $1 : 20.000$ berarti setiap $1 \\text{ cm}$ mewakili $20.000 \\text{ cm} = 200 \\text{ m}$, sehingga jarak sebenarnya:

$$5 \\times 200 = 1000 \\text{ m} = 1 \\text{ km}.$$

Peta itu juga menampilkan danau berbentuk lingkaran berjari-jari $2 \\text{ cm}$. Jari-jari sebenarnya $2 \\times 200 = 400 \\text{ m}$, sehingga luasnya $L = \\pi r^{2} = 3{,}14 \\times 400^{2} = 502.400 \\text{ m}^{2} \\approx 0{,}50 \\text{ km}^{2}$. Luas berubah mengikuti **kuadrat** faktor skala, bukan hanya perkalian faktor skala.

Untuk jalan $y = x^{2}$, andaikan peta diperbesar dua kali lalu acuannya digeser sehingga koordinat baru memenuhi $X = 2x + 1$ dan $Y = 2y + 3$. Maka $x = \\dfrac{X-1}{2}$ dan $y = \\dfrac{Y-3}{2}$, sehingga

$$\\frac{Y-3}{2} = \\left(\\frac{X-1}{2}\\right)^{2} = \\frac{(X-1)^{2}}{4} \\quad \\Rightarrow \\quad Y = \\frac{1}{2}(X-1)^{2} + 3.$$

Bentuk akhirnya adalah $Y = a\\,f(X-h)+k$ dengan $a = \\frac{1}{2}$, $h = 1$, dan $k = 3$. Faktor $a$ berasal dari perubahan skala, sedangkan $h$ dan $k$ adalah pergeseran titik acuan peta.`,
    takeaways: [
      'Skala peta adalah faktor pengali yang mengubah jarak gambar menjadi jarak sebenarnya.',
      'Memperbesar peta adalah dilatasi, sedangkan menggeser acuan adalah translasi.',
      'Bentuk $y = a\\,f(x-h)+k$ memisahkan pengaruh skala dan pergeseran.',
    ],
    reflection: [
      'Apa yang terjadi pada jarak sebenarnya jika skala diubah menjadi 1 : 40.000?',
      'Bagaimana menentukan persamaan jalan jika peta diputar, bukan hanya digeser?',
    ],
    source:
      'Mengacu pada peta berskala (misalnya peta desa berskala 1 : 20.000); jarak dan skala dipilih agar konversi mudah dihitung, bukan peta wilayah tertentu.',
  },
  {
    id: 'tgeo-motif-batik',
    title: 'Menata Motif Batik dengan Komposisi Transformasi',
    category: 'pengukuran',
    element: 'geometri',
    grade: 'XII',
    level: 'cakap',
    estimatedMinutes: 11,
    explorationId: 'transformasi-geometri-matriks',
    tags: ['transformasi geometri', 'rotasi', 'dilatasi', 'komposisi', 'motif'],
    summary:
      'Menggabungkan rotasi dan dilatasi menjadi satu matriks untuk menata motif pada bidang koordinat.',
    topicIds: ['transformasi-geometri', 'matriks'],
    body: `Sebuah motif batik diawali dari segitiga dengan titik sudut $A(1,1)$, $B(3,1)$, dan $C(1,2)$. Untuk membuat variasi, motif itu diputar $90^\\circ$ berlawanan arah jarum jam terhadap titik asal, lalu diperbesar dua kali dari titik asal.

Bagaimana menentukan koordinat bayangan ketiga titik, dan berapa luas segitiga hasilnya? Alih-alih mengerjakan dua langkah terpisah, kedua transformasi dapat digabung menjadi satu matriks, sehingga penggandaan motif pada kain tidak perlu menghitung titik demi titik.`,
    analysis: `Matriks rotasi $90^\\circ$ berlawanan arah jarum jam dan matriks dilatasi faktor $2$ adalah
$$R = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}, \\qquad S = \\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix}.$$
Karena rotasi dikerjakan lebih dulu, matriks gabungannya
$$SR = \\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix}\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix} = \\begin{pmatrix} 0 & -2 \\\\ 2 & 0 \\end{pmatrix}.$$
Menerapkannya pada tiap titik:
$$A(1,1) \\to (-2,2),\\quad B(3,1) \\to (-2,6),\\quad C(1,2) \\to (-4,2).$$
Luas segitiga awal
$$L = \\frac{1}{2}\\left| (3-1)(2-1) - (1-1)(1-1) \\right| = 1.$$
Karena $\\lvert\\det(SR)\\rvert = \\lvert 0 \\cdot 0 - (-2)(2)\\rvert = 4$, luas segitiga hasil adalah $4 \\times 1 = 4$ satuan luas. Hasil ini dapat diperiksa dengan rumus luas pada titik bayangan $(-2,2)$, $(-2,6)$, $(-4,2)$ yang memberi nilai yang sama. Determinan positif menunjukkan orientasi bangun tetap, karena rotasi dan dilatasi tidak membalik arah seperti pencerminan.`,
    takeaways: [
      'Rotasi dan dilatasi terhadap titik asal dapat digabung menjadi satu matriks $2 \\times 2$.',
      'Urutan perkalian penting: $SR$ berarti rotasi dahulu, baru dilatasi.',
      'Nilai mutlak determinan adalah faktor pengali luas bangun.',
      'Determinan positif menandakan orientasi bangun tidak terbalik.',
    ],
    reflection: [
      'Bagaimana hasilnya berbeda bila dilatasi dikerjakan sebelum rotasi?',
      'Transformasi mana yang mengubah luas, dan seberapa besar pengaruhnya?',
      'Mengapa penggandaan motif lebih efisien memakai matriks gabungan?',
    ],
    source:
      'Skenario pengajaran yang dikonstruksi mengikuti penataan motif batik dengan transformasi pada bidang koordinat; koordinat dipilih agar matriks gabungan dan luasnya mudah diperiksa, bukan motif atau pengrajin tertentu.',
  },
  {
    id: 'ktk-optimasi-pagar-taman',
    title: 'Merancang Taman: Luas Terbesar dengan Pagar Terbatas',
    category: 'pengukuran',
    element: 'aljabar-fungsi',
    grade: 'X',
    level: 'cakap',
    estimatedMinutes: 12,
    explorationId: 'kuadrat-parameter',
    tags: ['ketaksamaan', 'AM-GM', 'optimasi', 'luas maksimum', 'desain'],
    summary:
      'Memakai ketaksamaan AM-GM untuk menentukan ukuran taman dengan luas terbesar pada panjang pagar yang tetap.',
    topicIds: ['ketaksamaan', 'fungsi-kuadrat', 'sistem-pertidaksamaan'],
    body: `Panitia lingkungan memiliki pagar sepanjang **40 m** untuk memagari taman berbentuk persegi panjang. Salah satu sisi taman menempel pada dinding yang sudah ada, sehingga pagar hanya dipasang pada **tiga sisi**. Sementara itu, dana yang tersedia adalah **Rp6.000.000**, dan harga pagar **Rp150.000 per meter**, tepat cukup untuk 40 m.

Pertanyaan pemicunya: berapa ukuran taman agar **luasnya maksimum**, dan berapa luas maksimum itu? Menariknya, ketaksamaan **AM-GM** menjawabnya tanpa perlu menggambar grafik.`,
    analysis: `Misalkan sisi taman yang tegak lurus dinding berukuran $x$ meter (ada dua sisi) dan sisi yang sejajar dinding berukuran $y$ meter (ada satu sisi). Panjang pagar yang tersedia memberi kendala
$$2x + y = 40, \\qquad x > 0,\\ y > 0,$$
sedangkan luas taman adalah $L = xy$. Kita ingin memaksimalkan $xy$.

Terapkan ketaksamaan **AM-GM** pada bilangan positif $2x$ dan $y$:
$$\\frac{2x + y}{2} \\ge \\sqrt{(2x)(y)}.$$
Karena $2x + y = 40$, maka
$$20 \\ge \\sqrt{2xy} \\quad\\Longrightarrow\\quad 400 \\ge 2xy \\quad\\Longrightarrow\\quad xy \\le 200.$$
Jadi luas taman tidak pernah melebihi $200\\ \\text{m}^2$.

Kesamaan AM-GM tercapai ketika kedua bilangan sama, yaitu $2x = y$. Gabungkan dengan kendala:
$$2x + y = 40 \\Rightarrow 2x + 2x = 40 \\Rightarrow x = 10,\\quad y = 20.$$
Ukuran optimal adalah $10\\ \\text{m} \\times 20\\ \\text{m}$ dengan luas maksimum $L = 10 \\times 20 = 200\\ \\text{m}^2$.

Cara ini menghemat langkah dibandingkan memeriksa satu per satu nilai $x$. Nilai $x = 5$ memberi luas $5 \\times 30 = 150\\ \\text{m}^2$ dan $x = 15$ memberi $15 \\times 10 = 150\\ \\text{m}^2$. Keduanya sama-sama di bawah $200\\ \\text{m}^2$. Anggaran yang terbatas justru memaksa kita memilih proporsi yang paling efisien.`,
    takeaways: [
      'AM-GM mengubah masalah optimasi menjadi penentuan syarat kesamaan.',
      'Kesamaan AM-GM tercapai saat suku-suku yang dibandingkan sama besar.',
      'Batasan sumber daya (panjang pagar) tidak menghalangi nilai optimum, asalkan proporsinya tepat.',
    ],
    reflection: [
      'Mengapa kesamaan AM-GM menuntut $2x = y$, bukan $x = y$?',
      'Bagaimana hasilnya berubah jika pagar dipasang pada keempat sisi dengan panjang total 40 m?',
      'Sebutkan satu situasi lain yang dapat dioptimalkan dengan pola yang sama.',
    ],
    source:
      'Skenario pengajaran yang dikonstruksi mengikuti desain taman berpagar di lahan yang berbatas dinding; panjang pagar dan harga dipilih agar kesamaan AM-GM mudah diterapkan, bukan proyek tertentu.',
  },
];
