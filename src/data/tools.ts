import type { ElementId } from '@/types/content';

export interface MathTool {
  name: string;
  url: string;
  ext?: boolean;
  note: string;
  use: string;
}

export interface ToolGroup {
  heading: string;
  intro: string;
  /** Elemen kurikulum yang menjadi warna aksen dan ikon kelompok ini. */
  element: ElementId;
  tools: MathTool[];
}

export interface FeaturedTool {
  name: string;
  url: string;
  ext: boolean;
  note: string;
}

export const toolGroups: ToolGroup[] = [
  {
    heading: 'Grafik & Eksplorasi',
    intro: 'Alat untuk memvisualkan fungsi, mengubah parameter, dan menyelidiki perilaku grafik.',
    element: 'aljabar-fungsi',
    tools: [
      {
        name: 'GeoGebra',
        url: 'https://www.geogebra.org/',
        ext: true,
        note: 'Perangkat matematika dinamis.',
        use: 'Menggambar grafik fungsi, konstruksi geometri, dan eksplorasi parameter.',
      },
      {
        name: 'Desmos Graphing Calculator',
        url: 'https://www.desmos.com/calculator',
        ext: true,
        note: 'Kalkulator grafik daring yang cepat.',
        use: 'Memeriksa bentuk grafik kuadrat, eksponen, dan trigonometri.',
      },
      {
        name: 'GeoGebra Calculator Suite',
        url: 'https://www.geogebra.org/calculator',
        ext: true,
        note: 'Grafer, geometri, dan CAS dalam satu ruang.',
        use: 'Menghubungkan representasi simbolik, grafik, dan tabel.',
      },
    ],
  },
  {
    heading: 'Kalkulus & CAS',
    intro: 'Sistem aljabar komputer untuk memeriksa limit, turunan, dan integral beserta langkahnya.',
    element: 'kalkulus',
    tools: [
      {
        name: 'Symbolab',
        url: 'https://www.symbolab.com/',
        ext: true,
        note: 'Penyelesai langkah demi langkah.',
        use: 'Memeriksa turunan, integral, dan limit melalui langkah penyelesaian.',
      },
      {
        name: 'GeoGebra CAS Calculator',
        url: 'https://www.geogebra.org/cas',
        ext: true,
        note: 'CAS daring untuk manipulasi simbolik.',
        use: 'Menyederhanakan, menurunkan, dan mengintegralkan bentuk aljabar.',
      },
    ],
  },
  {
    heading: 'Geometri & Vektor',
    intro: 'Konstruksi geometri dan perhitungan vektor untuk ruang dua dan tiga dimensi.',
    element: 'geometri',
    tools: [
      {
        name: 'GeoGebra Geometry',
        url: 'https://www.geogebra.org/geometry',
        ext: true,
        note: 'Ruang konstruksi geometri.',
        use: 'Menjelajahi lingkaran, garis singgung, dan sudut.',
      },
      {
        name: 'Desmos 3D',
        url: 'https://www.desmos.com/3d',
        ext: true,
        note: 'Grafer tiga dimensi.',
        use: 'Menggambar vektor, bidang, dan permukaan di ruang 3D.',
      },
    ],
  },
  {
    heading: 'Matriks & Aljabar',
    intro: 'Operasi matriks dan penyelesaian sistem persamaan linear dengan notasi ringkas.',
    element: 'aljabar-fungsi',
    tools: [
      {
        name: 'Matrix Calculator',
        url: 'https://matrixcalc.org/',
        ext: true,
        note: 'Kalkulator operasi matriks.',
        use: 'Menghitung determinan, invers, dan perkalian matriks.',
      },
      {
        name: 'Microsoft Math Solver',
        url: 'https://mathsolver.microsoft.com/',
        ext: true,
        note: 'Penyelesai soal matematika.',
        use: 'Memeriksa penyelesaian sistem persamaan dan aljabar matriks.',
      },
    ],
  },
  {
    heading: 'Perhitungan & Pemeriksaan',
    intro: 'Untuk memeriksa hasil, bukan menggantikan proses berpikir.',
    element: 'bilangan',
    tools: [
      {
        name: 'Wolfram Alpha',
        url: 'https://www.wolframalpha.com/',
        ext: true,
        note: 'Mesin pengetahuan komputasional.',
        use: 'Memeriksa langkah penyelesaian dan bentuk sederhana.',
      },
      {
        name: 'Desmos Scientific Calculator',
        url: 'https://www.desmos.com/scientific',
        ext: true,
        note: 'Kalkulator ilmiah daring.',
        use: 'Menghitung nilai trigonometri, eksponen, dan akar.',
      },
    ],
  },
  {
    heading: 'Data & Statistika',
    intro: 'Mengolah data, membuat diagram, memeriksa regresi, dan membaca sumber data nyata.',
    element: 'data-peluang',
    tools: [
      {
        name: 'Google Sheets',
        url: 'https://docs.google.com/spreadsheets/',
        ext: true,
        note: 'Lembar kerja daring.',
        use: 'Menghitung rata-rata, kuartil, dan membuat diagram pencar.',
      },
      {
        name: 'GeoGebra Classic',
        url: 'https://www.geogebra.org/classic',
        ext: true,
        note: 'Spreadsheet dan kalkulator dalam satu ruang.',
        use: 'Regresi dan analisis data bivariat.',
      },
      {
        name: 'Our World in Data',
        url: 'https://ourworldindata.org/',
        ext: true,
        note: 'Kumpulan data dan visualisasi global.',
        use: 'Mengambil data nyata untuk latihan statistika dan pemodelan.',
      },
      {
        name: 'Statistikian',
        url: 'https://www.statistikian.com/',
        ext: true,
        note: 'Referensi statistika berbahasa Indonesia.',
        use: 'Menjelaskan konsep ukuran pemusatan, sebaran, dan regresi.',
      },
    ],
  },
  {
    heading: 'Peluang & Kombinatorika',
    intro: 'Menghitung banyak susunan dan peluang, serta menafsirkan hasilnya.',
    element: 'data-peluang',
    tools: [
      {
        name: 'Statistics Kingdom',
        url: 'https://www.statskingdom.com/',
        ext: true,
        note: 'Kalkulator statistika dan peluang.',
        use: 'Menghitung peluang, distribusi, dan ukuran statistik.',
      },
      {
        name: 'Kalkulator Permutasi dan Kombinasi',
        url: 'https://www.calculator.net/permutation-and-combination-calculator.html',
        ext: true,
        note: 'Kalkulator banyak susunan.',
        use: 'Memeriksa hasil permutasi, kombinasi, dan faktorial.',
      },
      {
        name: 'Mathcyber1997',
        url: 'https://mathcyber1997.com/',
        ext: true,
        note: 'Bank soal dan pembahasan berbahasa Indonesia.',
        use: 'Melatih soal peluang dan kombinatorika dengan pembahasan.',
      },
    ],
  },
  {
    heading: 'Bilangan & Keuangan',
    intro: 'Kalkulator untuk eksponen, barisan dan deret, serta matematika keuangan.',
    element: 'bilangan',
    tools: [
      {
        name: 'Kalkulator Keuangan Sikapi Uangmu',
        url: 'https://sikapiuangmu.ojk.go.id/',
        ext: true,
        note: 'Kalkulator keuangan resmi OJK.',
        use: 'Menghitung bunga majemuk, anuitas, dan simulasi pinjaman.',
      },
      {
        name: 'Wardaya College',
        url: 'https://www.wardayacollege.com/',
        ext: true,
        note: 'Materi matematika berbahasa Indonesia.',
        use: 'Meninjau ulang eksponen, barisan dan deret, serta keuangan.',
      },
    ],
  },
];

export const featuredTools: FeaturedTool[] = [
  {
    name: 'GeoGebra',
    url: 'https://www.geogebra.org/',
    ext: true,
    note: 'Menggambar grafik, geometri, dan parameter.',
  },
  {
    name: 'Desmos Graphing Calculator',
    url: 'https://www.desmos.com/calculator',
    ext: true,
    note: 'Memeriksa grafik fungsi dengan cepat.',
  },
  {
    name: 'Symbolab',
    url: 'https://www.symbolab.com/',
    ext: true,
    note: 'Memeriksa langkah turunan dan integral.',
  },
  {
    name: 'Wolfram Alpha',
    url: 'https://www.wolframalpha.com/',
    ext: true,
    note: 'Memeriksa langkah dan bentuk sederhana.',
  },
  {
    name: 'Matrix Calculator',
    url: 'https://matrixcalc.org/',
    ext: true,
    note: 'Menghitung determinan, invers, dan perkalian matriks.',
  },
  {
    name: 'Google Sheets',
    url: 'https://docs.google.com/spreadsheets/',
    ext: true,
    note: 'Menghitung statistik dan membuat diagram.',
  },
  {
    name: 'Statistics Kingdom',
    url: 'https://www.statskingdom.com/',
    ext: true,
    note: 'Menghitung peluang dan ukuran statistik.',
  },
  {
    name: 'Kalkulator Keuangan Sikapi Uangmu',
    url: 'https://sikapiuangmu.ojk.go.id/',
    ext: true,
    note: 'Menghitung bunga majemuk dan anuitas.',
  },
];
