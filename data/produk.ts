export interface ProdukItem {
  id: number;
  foto: string;
  judul: string;
  cuplikan: string;
  konten: string;
  tgl: string;
}

// foto pakai Unsplash — ganti dengan foto asli kamu kalau udah ada
// caranya: taruh foto di public/images/produk1.jpg dst, lalu ganti url di bawah
export const ProdukData: ProdukItem[] = [
  {
    id: 1,
    foto: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
    judul: "tas kulit coklat",
    cuplikan: "beli waktu ke bandung, ternyata jarang banget kepake. mending dijual deh.",
    konten:
      "jadi ceritanya aku beli ini waktu jalan-jalan ke Bandung bulan lalu. keliatan bagus di toko, eh sampe rumah malah jarang dipake karena kegedean buat aku sehari-hari.\n\nkulitnya asli, jahitannya rapi. kondisi masih mulus banget, cuma sempet dipake coba-coba aja di rumah.\n\nmuat laptop 13 inch, ada kantong dalam 2, tali bahu bisa lepas pasang.\n\nwarna: coklat tua (ada di foto)\n\nbeli Rp 600rb, jual Rp 450rb — udah paling murah yang bisa aku kasih 😅\n\nchat aja langsung kalau serius.",
    tgl: "1 Jan 2026",
  },
  {
    id: 2,
    foto: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80",
    judul: "brownies coklat",
    cuplikan: "resep sendiri, mulai jualan gara-gara temen-temen nagih terus.",
    konten:
      "awalnya cuma iseng bikin waktu pandemi buat konsumsi sendiri, terus dikasih ke temen, eh mereka pada minta lagi. ya udah akhirnya jualan beneran.\n\nrasanya coklat pekat, bagian tengah lumer, pinggir agak crispy. nggak pake pengawet, jadi mending habis 3 hari ya.\n\nvarian: original, keju (paling laku), almond\n\n1 loyang (20x20, isi 16 potong) — Rp 85.000\n\norder minimal H-1.",
    tgl: "15 Feb 2026",
  },
  {
    id: 3,
    foto: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
    judul: "sneakers lokal size 42",
    cuplikan: "salah pesen ukuran, males tuker jadi jual aja. masih baru, box ada.",
    konten:
      "ini sepatu dari brand lokal yang sempet rame, belinya agak susah waktu itu. pas dateng ternyata size 42 kegedean buat aku yang normalnya 41.\n\nniat mau tuker tapi ribet dan aku males. jadi daripada nganggur, mending jual.\n\nkondisi: baru, belum pernah dipake keluar. box ada, dust bag ada.\n\nwarna: putih krem, sol hijau army\n\nbeli Rp 450rb → jual Rp 320rb",
    tgl: "3 Mar 2026",
  },
  {
    id: 4,
    foto: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=600&q=80",
    judul: "lilin lavender",
    cuplikan: "bikin sendiri dari soy wax, wanginya soft nggak bikin pusing.",
    konten:
      "aku mulai bikin lilin ini dari hobi, terus banyak yang tanya beli jadi aku jual deh.\n\nwanginya lavender tapi versi soft, nggak yang menyengat. enak buat belajar atau mau tidur.\n\nbahan: soy wax + essential oil lavender, sumbu katun\nlama bakar: 35–40 jam\n\n150gr → Rp 65.000\n250gr → Rp 95.000\n\ntoples kaca bisa dipakai ulang. bisa request kartu tulis kalau buat hadiah, gratis.",
    tgl: "20 Apr 2026",
  },
  {
    id: 5,
    foto: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&q=80",
    judul: "kamera film instax",
    cuplikan: "jarang dipake, masih mulus. dapet dari hadiah ulang tahun tapi bukan selera aku.",
    konten:
      "dikasih sebagai hadiah tahun lalu tapi jujur jarang banget aku pake karena bukan tipe kamera yang biasa aku pakai.\n\nkondisi mulus, nggak ada goresan. semua tombol dan fungsi normal. baterai baru diganti.\n\ntermasuk:\n- kamera instax mini 11 warna putih\n- tali kamera\n- manual book\n- 5 lembar film sisa\n\nbeli Rp 700rb, jual Rp 500rb.",
    tgl: "5 Mei 2026",
  },
  {
    id: 6,
    foto: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600&q=80",
    judul: "hoodie oversized abu",
    cuplikan: "udah nggak muat, sayang banget padahal masih bagus. beli di event pop-up lokal.",
    konten:
      "beli ini di pop-up market bulan lalu, waktu itu langsung suka desainnya. tapi setelah dicoba di rumah, ukurannya terlalu oversized bahkan buat standar oversized aku.\n\nbahan: fleece premium, nggak pilling, tetep lembut setelah dicuci.\n\nwarna: abu medium\nsize tag: L tapi fit ke M-L\n\nkondisi: baru dicuci sekali, nggak ada cacat.\n\nharga: Rp 180.000.",
    tgl: "12 Mei 2026",
  },
  {
    id: 7,
    foto: "https://images.unsplash.com/photo-1617957718614-8c23f060b2b7?w=600&q=80",
    judul: "tripod mini fleksibel",
    cuplikan: "beli dua, ternyata kebanyakan. yang satu ini nggak kepake sama sekali.",
    konten:
      "beli dua karena lagi promo bundle, tapi ternyata satu udah cukup buat kebutuhan aku. jadi yang satu ini masih dalam kondisi baru, belum pernah dipake.\n\ncocok buat HP dan kamera mirrorless ringan. kakinya fleksibel, bisa nempel di berbagai permukaan.\n\ntinggi max: 28cm\nberat: ringan banget, kira-kira 200gr\n\nharga: Rp 75.000.",
    tgl: "18 Mei 2026",
  },
  {
    id: 8,
    foto: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=600&q=80",
    judul: "buku catatan aesthetic",
    cuplikan: "terlalu sayang buat dipake, akhirnya cuma numpuk. mending ke orang yang mau nulis.",
    konten:
      "beli tiga karena desainnya bagus banget waktu itu. sekarang sadar aku tipe orang yang lebih suka digital, jadi ketiga-tiganya cuma nganggur.\n\njual dua dulu, satu lagi disimpen.\n\ndetail:\n- cover linen warna sage green\n- kertas dotted 160 halaman\n- ukuran A5\n- ada pocket di belakang\n\nkondisi: baru, plastik wrapping masih ada.\n\nharga: Rp 55.000/buah, Rp 100.000/dua.",
    tgl: "25 Mei 2026",
  },
];
