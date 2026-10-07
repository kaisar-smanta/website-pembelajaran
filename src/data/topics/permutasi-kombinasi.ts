import type { Topic } from '@/types/content';

export const permutasiKombinasi: Topic = {
  id: 'permutasi-kombinasi',
  slug: 'permutasi-kombinasi',
  title: 'Permutasi dan Kombinasi',
  subtitle: 'Aturan pencacahan untuk menghitung banyak cara',
  grade: 'XII',
  phase: 'F',
  element: 'data-peluang',
  status: 'lengkap',
  estimatedMinutes: 90,
  summary:
    'Menggunakan aturan pencacahan, faktorial, permutasi, dan kombinasi untuk menghitung banyak cara serta peluang suatu kejadian.',
  description:
    'Banyak situasi menuntut kita menghitung banyak cara sesuatu dapat terjadi, dari menyusun kata sandi hingga memilih anggota tim. Aturan pencacahan menyediakan cara sistematis untuk melakukannya. Pada topik ini kita mempelajari aturan perkalian dan penjumlahan, faktorial, permutasi (saat urutan diperhatikan), kombinasi (saat urutan tidak diperhatikan), cara membedakan keduanya dari konteks soal, serta penerapan pencacahan untuk menghitung peluang.',
  keywords: [
    'aturan pencacahan',
    'faktorial',
    'permutasi',
    'kombinasi',
    'banyak cara',
  ],
  prerequisites: ['peluang'],
  relatedTopics: ['peluang-bersyarat'],
  explorations: ['peluang-sim'],
  prerequisiteKnowledge: [
    'Aturan perkalian dan aturan penjumlahan pada proses bertahap',
    'Operasi bilangan bulat dan pecahan',
    'Konsep peluang teoretis $P(A) = \\dfrac{n(A)}{n(S)}$',
    'Notasi faktorial $n!$ dan nilainya',
  ],
  objectives: [
    { text: 'Menggunakan aturan perkalian dan aturan penjumlahan untuk mencacah banyak cara.' },
    { text: 'Menghitung nilai faktorial dan menerapkannya pada pencacahan.' },
    { text: 'Menentukan banyak permutasi untuk semua unsur, sebagian unsur, dan unsur yang sama.' },
    { text: 'Menentukan banyak kombinasi dan membedakan kapan memakai permutasi atau kombinasi.' },
    { text: 'Menggunakan pencacahan untuk menghitung peluang suatu kejadian.' },
  ],
  sections: [
    {
      id: 'tujuan',
      kind: 'tujuan',
      title: 'Tujuan Pembelajaran',
      body: `Setelah mempelajari topik ini, peserta didik dapat menggunakan aturan perkalian dan penjumlahan untuk mencacah, menghitung nilai faktorial, menentukan banyak permutasi (semua unsur, sebagian unsur, dan unsur sama), menentukan banyak kombinasi, membedakan kapan memakai permutasi atau kombinasi dari konteks soal, serta menggunakan pencacahan untuk menghitung peluang suatu kejadian.`,
    },
    {
      id: 'pemantik',
      kind: 'pemantik',
      title: 'Pertanyaan Pemantik',
      body: `Dari $5$ siswa akan dipilih seorang **ketua** dan seorang **wakil ketua**. Berapa banyak susunan pengurus yang mungkin?

Sekarang bandingkan dengan pertanyaan berikut: dari $5$ siswa yang sama akan dipilih **dua orang** untuk mengikuti lomba tanpa jabatan apa pun. Berapa banyak pilihan yang mungkin?

- Mengapa dua pertanyaan yang mirip menghasilkan jawaban berbeda?
- Pada pertanyaan mana urutan penting, dan pada pertanyaan mana urutan tidak penting?

Coba daftarkan beberapa kemungkinan terlebih dahulu sebelum memakai rumus.`,
      blocks: [
        {
          kind: 'details',
          summary: 'Lihat jawaban pemantik',
          text: `Untuk pemilihan ketua dan wakil, urutan **penting** karena (Ani, Budi) berbeda dari (Budi, Ani). Ada $5$ pilihan ketua dan $4$ sisa pilihan wakil, sehingga $5 \\cdot 4 = 20$ susunan.

Untuk pemilihan dua orang tanpa jabatan, urutan **tidak penting** karena memilih Ani dan Budi sama saja dengan memilih Budi dan Ani. Setiap pasangan terhitung dua kali, sehingga $20 : 2 = 10$ pilihan. Inilah perbedaan **permutasi** dan **kombinasi**.`,
        },
      ],
    },
    {
      id: 'prasyarat',
      kind: 'prasyarat',
      title: 'Prasyarat',
      body: `Sebelum melanjutkan, pastikan kamu menguasai:
- aturan perkalian dan aturan penjumlahan pada proses bertahap;
- operasi bilangan bulat dan pecahan;
- konsep peluang teoretis $P(A) = \\dfrac{n(A)}{n(S)}$;
- notasi faktorial $n!$ dan nilainya.`,
    },
    {
      id: 'konteks',
      kind: 'konteks',
      title: 'Situasi dan Konteks',
      body: `Banyak masalah sehari-hari menuntut kita menghitung banyak cara: menyusun kata sandi, mengatur urutan pemenang lomba, menyusun jadwal, memilih anggota tim, atau memperkirakan peluang menang undian. Ketika pilihannya sedikit, kita bisa mendaftar satu per satu; ketika pilihannya mencapai ribuan atau jutaan, kita perlu **aturan pencacahan**.

Dua pertanyaan dasar yang selalu muncul adalah: apakah **urutan** hasil penting? Jika ya, kita memakai **permutasi**; jika tidak, kita memakai **kombinasi**. Topik ini melatih kita mengenali perbedaan itu dan menghitung dengan tepat, termasuk saat menghitung peluang.`,
    },
    {
      id: 'konsep',
      kind: 'konsep',
      title: 'Konsep Inti: Aturan Pencacahan, Permutasi, dan Kombinasi',
      body: `**Aturan perkalian.** Jika suatu kejadian terdiri atas tahapan berurutan dengan $n_1$ cara pada tahap pertama, $n_2$ cara pada tahap kedua, dan seterusnya, maka total cara adalah hasil kalinya:
$$n_1 \\cdot n_2 \\cdots n_k.$$
Aturan ini dipakai ketika tahapan terjadi bersama-sama (dan/atau).

**Aturan penjumlahan.** Jika suatu tugas dapat diselesaikan melalui $n_1$ cara pada pilihan pertama **atau** $n_2$ cara pada pilihan kedua yang saling lepas, maka totalnya $n_1 + n_2$.

**Faktorial.** Untuk bilangan bulat $n \\ge 0$,
$$n! = n \\cdot (n-1) \\cdot (n-2) \\cdots 3 \\cdot 2 \\cdot 1, \\qquad 0! = 1.$$
Misalnya $5! = 5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1 = 120$.

**Permutasi (urutan diperhatikan).**
- Semua unsur: $n!$ cara menyusun $n$ objek berbeda.
- Sebagian unsur: menyusun $k$ objek dari $n$ objek berbeda,
$$P(n,k) = \\frac{n!}{(n-k)!}.$$
- Unsur sama: bila terdapat unsur yang berulang, bagi dengan faktorial setiap kelompok,
$$\\frac{n!}{k_1!\\,k_2!\\cdots k_m!}.$$

**Kombinasi (urutan tidak diperhatikan).** Memilih $k$ objek dari $n$ objek berbeda:
$$\\binom{n}{k} = \\frac{n!}{k!\\,(n-k)!}.$$

Hubungan keduanya adalah $\\binom{n}{k} = \\dfrac{P(n,k)}{k!}$, karena setiap pilihan $k$ objek memiliki $k!$ susunan.`,
      blocks: [
        {
          kind: 'callout',
          variant: 'concept',
          title: 'Inti yang perlu diingat',
          text: 'Aturan perkalian dan penjumlahan adalah pondasi. Sebelum memakai rumus, tentukan dahulu apakah urutan penting, apakah ada unsur yang sama, dan apakah objek boleh dipakai berulang.',
        },
      ],
    },
    {
      id: 'representasi',
      kind: 'representasi',
      title: 'Representasi: Kotak Pengisian dan Tabel Pembanding',
      body: `Dua cara memandang pencacahan membantu kita memilih rumus yang tepat.

**Mengisi kotak (slots).** Menyusun $3$ huruf berbeda dari $5$ huruf yang tersedia dapat dibayangkan sebagai mengisi $3$ kotak kosong:
$$\\underline{5} \\; \\underline{4} \\; \\underline{3} = 60,$$
yaitu $5$ pilihan untuk kotak pertama, $4$ untuk kedua, dan $3$ untuk ketiga. Cara ini menegaskan bahwa urutan penting.

**Tabel pembanding.** Perhatikan perbedaan permutasi dan kombinasi berikut.`,
      blocks: [
        {
          kind: 'table',
          caption: 'Perbandingan permutasi dan kombinasi',
          headers: ['Aspek', 'Permutasi', 'Kombinasi'],
          rows: [
            ['Urutan', 'diperhatikan', 'tidak diperhatikan'],
            ['Notasi', '$P(n,k) = \\dfrac{n!}{(n-k)!}$', '$\\binom{n}{k} = \\dfrac{n!}{k!(n-k)!}$'],
            ['Contoh pemakaian', 'kata sandi, jabatan', 'anggota tim, kartu'],
            ['Contoh nilai', '$P(5,2) = 20$', '$\\binom{5}{2} = 10$'],
          ],
        },
      ],
    },
    {
      id: 'eksplorasi',
      kind: 'eksplorasi',
      title: 'Eksplorasi: Peluang Empiris dan Teoretis',
      body: `Pada eksplorasi ini kita membandingkan **peluang teoretis** hasil pencacahan dengan **peluang empiris** yang diperoleh dari simulasi.

Misalkan sebuah kotak berisi $4$ bola merah dan $6$ bola biru, lalu diambil $3$ bola sekaligus. Peluang terambilnya tepat $2$ bola merah dapat dihitung dengan pencacahan:
$$P = \\frac{\\binom{4}{2}\\binom{6}{1}}{\\binom{10}{3}} = \\frac{6 \\cdot 6}{120} = \\frac{36}{120} = \\frac{3}{10}.$$
Jalankan simulasi berkali-kali. Apakah frekuensi relatif kejadian ini mendekati $0{,}3$? Semakin banyak percobaan, frekuensi empiris biasanya makin dekat dengan nilai teoretis. Pencacahan memberi nilai **teoretis** yang menjadi acuan.`,
      blocks: [{ kind: 'exploration', explorationId: 'peluang-sim' }],
    },
    {
      id: 'contoh',
      kind: 'contoh',
      title: 'Contoh Terbimbing',
      body: `**Contoh 1 (aturan perkalian).** Sebuah kata sandi terdiri atas $4$ angka berbeda yang dipilih dari angka $0$ sampai $9$. Berapa banyak kata sandi yang mungkin?

*Penyelesaian.* Isi empat kotak: $10$ pilihan untuk angka pertama, lalu $9$, $8$, dan $7$ karena angka tidak boleh berulang:
$$10 \\cdot 9 \\cdot 8 \\cdot 7 = 5040.$$

**Contoh 2 (faktorial dan unsur sama).** Berapa banyak susunan huruf dari kata "BUKU"?

*Penyelesaian.* Kata "BUKU" tersusun dari $4$ huruf dengan huruf U muncul $2$ kali. Bila semua huruf berbeda akan ada $4! = 24$ susunan, tetapi menukar posisi kedua huruf U menghasilkan susunan yang sama. Jadi
$$\\frac{4!}{2!} = \\frac{24}{2} = 12.$$

**Contoh 3 (permutasi sebagian).** Dari $5$ siswa akan dipilih ketua, sekretaris, dan bendahara. Berapa banyak susunan yang mungkin?

*Penyelesaian.* Urutan penting, sehingga
$$P(5,3) = \\frac{5!}{(5-3)!} = \\frac{120}{2} = 60.$$

**Contoh 4 (kombinasi).** Dari $10$ siswa akan dipilih $3$ orang untuk sebuah tim tanpa jabatan. Berapa banyak susunan tim?

*Penyelesaian.* Urutan tidak penting, sehingga
$$\\binom{10}{3} = \\frac{10!}{3!\\,7!} = \\frac{10 \\cdot 9 \\cdot 8}{3 \\cdot 2 \\cdot 1} = 120.$$

**Contoh 5 (pencacahan untuk peluang).** Sebuah kotak berisi $5$ bola merah dan $3$ bola putih. Dua bola diambil sekaligus. Tentukan peluang keduanya merah.

*Penyelesaian.* Banyak cara mengambil $2$ dari $8$ bola adalah $\\binom{8}{2} = 28$. Cara mendapat dua merah adalah $\\binom{5}{2} = 10$. Jadi
$$P = \\frac{\\binom{5}{2}}{\\binom{8}{2}} = \\frac{10}{28} = \\frac{5}{14}.$$`,
    },
    {
      id: 'latihan-dasar',
      kind: 'latihan-dasar',
      title: 'Latihan Dasar',
      level: 'dasar',
      body: `1. Hitung nilai $5!$.
2. Hitung $P(5,2)$.
3. Hitung $\\binom{6}{2}$.
4. Berapa banyak susunan huruf dari kata "BUKU"?
5. Tiga orang akan berfoto berjajar. Berapa banyak urutan berfoto yang mungkin?`,
      blocks: [
        {
          kind: 'details',
          summary: 'Lihat kunci dan pembahasan',
          text: `1. $5! = 5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1 = 120$.
2. $P(5,2) = \\dfrac{5!}{3!} = 5 \\cdot 4 = 20$.
3. $\\binom{6}{2} = \\dfrac{6!}{2!\\,4!} = \\dfrac{6 \\cdot 5}{2} = 15$.
4. Huruf U muncul dua kali, sehingga $\\dfrac{4!}{2!} = 12$.
5. Tiga orang berbeda berjajar: $3! = 6$ urutan.`,
        },
      ],
    },
    {
      id: 'latihan-cakap',
      kind: 'latihan-cakap',
      title: 'Latihan Cakap',
      level: 'cakap',
      body: `1. Dari $7$ siswa akan dipilih ketua, sekretaris, dan bendahara. Berapa banyak susunan pengurus?
2. Berapa banyak susunan huruf dari kata "MATEMATIKA"?
3. Dari $6$ siswa laki-laki dan $4$ siswa perempuan akan dibentuk komite berisi $3$ orang dengan tepat $1$ perempuan. Berapa banyak komite yang mungkin?
4. Sebuah kotak berisi $4$ bola merah dan $6$ bola biru. Tiga bola diambil sekaligus. Tentukan peluang terambil tepat $2$ bola merah.
5. Berapa banyak bilangan tiga angka **berbeda** yang dapat dibentuk dari angka $1, 2, 3, 4, 5$?`,
      blocks: [
        {
          kind: 'details',
          summary: 'Lihat kunci dan pembahasan',
          text: `1. Urutan penting: $P(7,3) = \\dfrac{7!}{4!} = 7 \\cdot 6 \\cdot 5 = 210$.
2. Huruf pada "MATEMATIKA": M $2$, A $3$, T $2$, E $1$, I $1$, K $1$ (total $10$ huruf). Maka $\\dfrac{10!}{2!\\,3!\\,2!} = \\dfrac{3628800}{24} = 151200$.
3. Pilih $1$ perempuan dari $4$ dan $2$ laki-laki dari $6$: $\\binom{4}{1}\\binom{6}{2} = 4 \\cdot 15 = 60$.
4. $\\dfrac{\\binom{4}{2}\\binom{6}{1}}{\\binom{10}{3}} = \\dfrac{6 \\cdot 6}{120} = \\dfrac{36}{120} = \\dfrac{3}{10}$.
5. Urutan penting dan angka harus berbeda: $P(5,3) = 5 \\cdot 4 \\cdot 3 = 60$.`,
        },
      ],
    },
    {
      id: 'latihan-mahir',
      kind: 'latihan-mahir',
      title: 'Latihan Mahir',
      level: 'mahir',
      body: `1. Berapa banyak susunan huruf dari kata "STATISTIKA"?
2. Dari $5$ pasangan suami istri akan dipilih $4$ orang. Tentukan peluang tidak ada pasangan suami istri yang terpilih.
3. Empat buku matematika, $3$ buku fisika, dan $2$ buku kimia disusun pada rak. Berapa banyak susunan bila buku sejenis harus berdampingan?
4. Dari $10$ calon akan dibentuk komite $4$ orang. Tentukan peluang komite tersebut memuat dua orang tertentu.`,
      blocks: [
        {
          kind: 'details',
          summary: 'Lihat kunci dan pembahasan',
          text: `1. Huruf pada "STATISTIKA": S $2$, T $3$, A $2$, I $2$, K $1$ (total $10$ huruf). Maka $\\dfrac{10!}{2!\\,3!\\,2!\\,2!} = \\dfrac{3628800}{48} = 75600$.
2. Total cara memilih $4$ dari $10$ adalah $\\binom{10}{4} = 210$. Agar tidak ada pasangan, pilih $4$ pasangan dari $5$ pasangan $(\\binom{5}{4} = 5)$, lalu pilih $1$ orang dari tiap pasangan $(2^4 = 16)$. Jadi $5 \\cdot 16 = 80$ cara, dan $P = \\dfrac{80}{210} = \\dfrac{8}{21}$.
3. Perlakukan setiap jenis sebagai satu blok: $3!$ cara menyusun blok, lalu di dalamnya $4!$, $3!$, dan $2!$. Total $3! \\cdot 4! \\cdot 3! \\cdot 2! = 6 \\cdot 24 \\cdot 6 \\cdot 2 = 1728$.
4. Total $\\binom{10}{4} = 210$. Bila komite harus memuat dua orang tertentu, pilih $2$ orang lagi dari $8$ sisanya: $\\binom{8}{2} = 28$. Jadi $P = \\dfrac{28}{210} = \\dfrac{2}{15}$.`,
        },
      ],
    },
    {
      id: 'dunia-nyata',
      kind: 'dunia-nyata',
      title: 'Penerapan di Dunia Nyata',
      body: `Aturan pencacahan membantu kita memahami skala kemungkinan di sekitar kita. Banyaknya kata sandi yang mungkin menentukan seberapa kuat sebuah akun; banyaknya susunan kartu menentukan peluang kombinasi tertentu; banyaknya urutan penjadwalan menentukan seberapa besar ruang pencarian yang harus dijelajahi komputer.

Pencacahan juga menjadi dasar banyak perhitungan peluang, mulai dari undian, lotere, hingga pengambilan sampel acak dalam penelitian. Prinsipnya sederhana: bila setiap hasil sama mungkin, peluang adalah **perbandingan banyak cara**.`,
    },
    {
      id: 'kesalahan-umum',
      kind: 'kesalahan-umum',
      title: 'Kesalahan Umum',
      body: `**1. Tertukar permutasi dan kombinasi.** Tanyakan lebih dahulu: apakah urutan penting? Memilih pengurus (urutan penting) memakai permutasi, sedangkan memilih tim (urutan tidak penting) memakai kombinasi.

**2. Lupa membagi dengan faktorial unsur yang sama.** Untuk kata seperti "BUKU", jawaban $4! = 24$ salah karena huruf U yang kembar membuat banyak susunan terhitung berulang.

**3. Salah menghitung faktorial.** Ingat $0! = 1$ dan $1! = 1$. Faktorial tumbuh sangat cepat, jadi hitung dengan teliti.

**4. Memakai aturan penjumlahan padahal perkalian, atau sebaliknya.** Gunakan **perkalian** bila tahapan terjadi berurutan (dan), serta **penjumlahan** bila pilihannya saling lepas (atau).

**5. Mengabaikan syarat pengulangan.** Kata sandi dengan "angka boleh berulang" dan "angka tidak boleh berulang" memberi hasil berbeda. Baca soal dengan cermat.`,
    },
    {
      id: 'refleksi',
      kind: 'refleksi',
      title: 'Refleksi',
      body: `1. Dari sebuah soal cerita, bagaimana kamu memutuskan apakah urutan penting atau tidak?
2. Kapan kamu harus membagi dengan faktorial unsur yang sama, dan mengapa?
3. Bagaimana pencacahan membantumu menghitung peluang suatu kejadian?`,
    },
    {
      id: 'rangkuman',
      kind: 'rangkuman',
      title: 'Rangkuman',
      blocks: [
        {
          kind: 'table',
          headers: ['Aspek', 'Penjelasan'],
          rows: [
            ['Aturan perkalian', 'tahapan berurutan: $n_1 \\cdot n_2 \\cdots n_k$'],
            ['Aturan penjumlahan', 'pilihan saling lepas: $n_1 + n_2$'],
            ['Faktorial', '$n! = n(n-1)\\cdots 1$ dan $0! = 1$'],
            ['Permutasi semua unsur', '$n!$ susunan $n$ objek berbeda'],
            ['Permutasi sebagian', '$P(n,k) = \\dfrac{n!}{(n-k)!}$'],
            ['Permutasi unsur sama', '$\\dfrac{n!}{k_1!\\,k_2!\\cdots}$'],
            ['Kombinasi', '$\\binom{n}{k} = \\dfrac{n!}{k!(n-k)!}$'],
            ['Pencacahan untuk peluang', '$P(A) = \\dfrac{n(A)}{n(S)}$'],
          ],
        },
      ],
    },
    {
      id: 'evaluasi',
      kind: 'evaluasi',
      title: 'Evaluasi',
      body: `Kerjakan kuis topik ini untuk memeriksa pemahamanmu. Buka halaman [Latihan & Asesmen](/latihan) lalu pilih topik **Permutasi dan Kombinasi**.`,
    },
  ],
};
