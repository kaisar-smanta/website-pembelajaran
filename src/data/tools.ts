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
        name: 'GeoGebra Geometry',
        url: 'https://www.geogebra.org/geometry',
        ext: true,
        note: 'Ruang konstruksi geometri.',
        use: 'Menjelajahi lingkaran, garis singgung, dan sudut.',
      },
    ],
  },
  {
    heading: 'Perhitungan & Pemeriksaan',
    intro: 'Untuk memeriksa hasil, bukan menggantikan proses berpikir.',
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
    intro: 'Mengolah data, membuat diagram, dan memeriksa model regresi.',
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
    name: 'Wolfram Alpha',
    url: 'https://www.wolframalpha.com/',
    ext: true,
    note: 'Memeriksa langkah dan bentuk sederhana.',
  },
  {
    name: 'Google Sheets',
    url: 'https://docs.google.com/spreadsheets/',
    ext: true,
    note: 'Menghitung statistik dan membuat diagram.',
  },
];
