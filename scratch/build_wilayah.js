const fs = require('fs');
const path = require('path');

const inputData = [
  {
    "wilayah": "Batulicin (Kabupaten Tanah Bumbu)",
    "jenis": "Kabupaten",
    "slugs": ["batulicin", "tanah-bumbu"],
    "kecamatan": [
      {
        "nama_kecamatan": "Batulicin",
        "kelurahan_desa": [
          "Batulicin",
          "Kersik Putih",
          "Marsegu",
          "Segumbang",
          "Sukamaju",
          "Danau Indah",
          "Maju Bersama",
          "Polewali Marajae"
        ]
      },
      {
        "nama_kecamatan": "Simpang Empat",
        "kelurahan_desa": [
          "Baroqah",
          "Batu Ampar",
          "Gunung Antasari",
          "Gunung Besar",
          "Kampung Baru",
          "Plajau",
          "Sarigadung",
          "Sejahtera",
          "Simpang Empat",
          "Hidayat Makmur",
          "Gunung Tinggi"
        ]
      },
      {
        "nama_kecamatan": "Kusan Hilir",
        "kelurahan_desa": [
          "Kota Pagatan",
          "Batuah",
          "Jawa",
          "Kampung Baru",
          "Muara Pagatan",
          "Pasir Panjang",
          "Pejala",
          "Pesisir Pantai",
          "Salambung",
          "Tutuhi",
          "Karya Bakti",
          "Pasar Baru"
        ]
      },
      {
        "nama_kecamatan": "Satui",
        "kelurahan_desa": [
          "Sungai Danau",
          "Satui Barat",
          "Satui Timur",
          "Makmur Jaya",
          "Sekapung",
          "Wonorejo",
          "Jombang"
        ]
      }
    ]
  },
  {
    "wilayah": "Kutai Kartanegara",
    "jenis": "Kabupaten",
    "slugs": ["kutai-kartanegara"],
    "kecamatan": [
      {
        "nama_kecamatan": "Tenggarong",
        "kelurahan_desa": [
          "Tenggarong Baru",
          "Loa Ipuh",
          "Loa Ipuh Darat",
          "Loa Tebu",
          "Mangkurawang",
          "Melayu",
          "Panji",
          "Sukarame",
          "Timbau",
          "Timbau Hulu",
          "Jahab",
          "Maluhu"
        ]
      },
      {
        "nama_kecamatan": "Tenggarong Seberang",
        "kelurahan_desa": [
          "Bangun Rejo",
          "Buan Giri",
          "Bukit Pariaman",
          "Embalut",
          "Karang Tunggal",
          "Kerta Buana",
          "Loa Raya",
          "Manunggal Jaya",
          "Perjiwa",
          "Separi",
          "Sukamaju",
          "Teluk Dalam"
        ]
      },
      {
        "nama_kecamatan": "Loa Janan",
        "kelurahan_desa": [
          "Batuah",
          "Loa Duri Ilir",
          "Loa Duri Ulu",
          "Loa Janan Ulu",
          "Purwajaya",
          "Tani Harapan",
          "Tani Bhakti"
        ]
      },
      {
        "nama_kecamatan": "Loa Kulu",
        "kelurahan_desa": [
          "Jembayan",
          "Jembayan Tengah",
          "Jembayan Dalam",
          "Loh Sumber",
          "Loa Kulu Kota",
          "Margahayu",
          "Ponoragan",
          "Rempanga",
          "Sepakat",
          "Sungai Payang"
        ]
      },
      {
        "nama_kecamatan": "Anggana",
        "kelurahan_desa": [
          "Anggana",
          "Handil Terusan",
          "Kutai Lama",
          "Muara Pantuan",
          "Sepatin",
          "Sidomulyo",
          "Sungai Meriam",
          "Tani Baru"
        ]
      },
      {
        "nama_kecamatan": "Muara Badak",
        "kelurahan_desa": [
          "Batu-Batu",
          "Badak Baru",
          "Badak Mekar",
          "Gas Alam Badak I",
          "Muara Badak Ilir",
          "Muara Badak Ulu",
          "Saliki",
          "Salo Cella",
          "Salo Palai",
          "Tanah Datar",
          "Tanjung Limau"
        ]
      },
      {
        "nama_kecamatan": "Samboja",
        "kelurahan_desa": [
          "Amborawang Darat",
          "Amborawang Laut",
          "Argosari",
          "Handil Baru",
          "Handil Baru Darat",
          "Kampung Jawa",
          "Kuala Samboja",
          "Margomulyo",
          "Muara Samboja",
          "Sanipah",
          "Sungai Seluang",
          "Tanjung Harapan",
          "Wonotirto"
        ]
      },
      {
        "nama_kecamatan": "Muara Jawa",
        "kelurahan_desa": [
          "Muara Jawa Kota",
          "Muara Jawa Ilir",
          "Muara Jawa Ulu",
          "Muara Jawa Tengah",
          "Dondang",
          "Teluk Dalam"
        ]
      }
    ]
  },
  {
    "wilayah": "Sangatta (Kabupaten Kutai Timur)",
    "jenis": "Kabupaten",
    "slugs": ["sangatta", "kutai-timur"],
    "kecamatan": [
      {
        "nama_kecamatan": "Sangatta Utara",
        "kelurahan_desa": [
          "Teluk Lingga",
          "Singa Gawa",
          "Sangatta Utara",
          "Swarga Bara"
        ]
      },
      {
        "nama_kecamatan": "Sangatta Selatan",
        "kelurahan_desa": [
          "Sangatta Selatan",
          "Singa Molek",
          "Sangga Langit",
          "Teluk Singkama",
          "Pinang Tinggi"
        ]
      },
      {
        "nama_kecamatan": "Bengalon",
        "kelurahan_desa": [
          "Kerayaan",
          "Muara Bengalon",
          "Pulau Miang",
          "Sebangkur",
          "Sepaso",
          "Sepaso Barat",
          "Sepaso Selatan",
          "Sepaso Timur",
          "Tebangan Wan",
          "Tepian Langsat"
        ]
      },
      {
        "nama_kecamatan": "Kaliorang",
        "kelurahan_desa": [
          "Bukit Harapan",
          "Kaliorang",
          "Selangkau",
          "Citra Manunggal Jaya",
          "Bangun Jaya"
        ]
      },
      {
        "nama_kecamatan": "Muara Wahau",
        "kelurahan_desa": [
          "Muara Wahau",
          "Nehes Liah Bing",
          "Wahlau",
          "Kombeng",
          "Jabdan"
        ]
      }
    ]
  },
  {
    "wilayah": "Berau",
    "jenis": "Kabupaten",
    "slugs": ["berau"],
    "kecamatan": [
      {
        "nama_kecamatan": "Tanjung Redeb",
        "kelurahan_desa": [
          "Bugis",
          "Gayam",
          "Karang Ambun",
          "Rawa Indah",
          "Tanjung Redeb",
          "Gunung Tabur"
        ]
      },
      {
        "nama_kecamatan": "Sambaliung",
        "kelurahan_desa": [
          "Sambaliung",
          "Gurimbang",
          "Baringan",
          "Inaran",
          "Pegat Bukur",
          "Pesayan",
          "Sei Bebanir Bangun",
          "Suka Maju",
          "Tanjung Perangat"
        ]
      },
      {
        "nama_kecamatan": "Gunung Tabur",
        "kelurahan_desa": [
          "Gunung Tabur",
          "Batu-Batu",
          "Birang",
          "Melati Jaya",
          "Merasa",
          "Papar",
          "Pulau Besing",
          "Sambakungan",
          "Tasuk"
        ]
      },
      {
        "nama_kecamatan": "Teluk Bayur",
        "kelurahan_desa": [
          "Teluk Bayur",
          "Rinding",
          "Tumbit Dayak",
          "Labanan Jaya",
          "Labanan Makarti",
          "Labanan Salo"
        ]
      },
      {
        "nama_kecamatan": "Pulau Derawan",
        "kelurahan_desa": [
          "Pulau Derawan",
          "Kasai",
          "Pegat Batumbuk",
          "Teluk Semanting"
        ]
      }
    ]
  },
  {
    "wilayah": "Tenggarong",
    "jenis": "Kota/Kawasan",
    "slugs": ["tenggarong"],
    "kecamatan": [
      {
        "nama_kecamatan": "Tenggarong",
        "kelurahan_desa": [
          "Tenggarong Baru",
          "Loa Ipuh",
          "Loa Ipuh Darat",
          "Loa Tebu",
          "Mangkurawang",
          "Melayu",
          "Panji",
          "Sukarame",
          "Timbau",
          "Timbau Hulu",
          "Jahab",
          "Maluhu"
        ]
      }
    ]
  },
  {
    "wilayah": "Melawi",
    "jenis": "Kabupaten",
    "slugs": ["melawi"],
    "kecamatan": [
      {
        "nama_kecamatan": "Nanga Pinoh",
        "kelurahan_desa": [
          "Barat",
          "Paal",
          "Sidomulyo",
          "Tanjung Niaga",
          "Kelakik",
          "Kenual",
          "Tanjung Tengang",
          "Batu Nanta",
          "Nusa Serang"
        ]
      },
      {
        "nama_kecamatan": "Pinoh Utara",
        "kelurahan_desa": [
          "Nanga Man",
          "Kompas Kota",
          "Suka Maju",
          "Tanjung Aruk",
          "Melawi Kiri",
          "Mandalay",
          "Engkelili"
        ]
      },
      {
        "nama_kecamatan": "Pinoh Selatan",
        "kelurahan_desa": [
          "Nanga Sayan",
          "Nanga Kelawai",
          "Mungguk Permai",
          "Bikang",
          "Tanjung Harapan",
          "Sungai Nyirak"
        ]
      },
      {
        "nama_kecamatan": "Ella Hilir",
        "kelurahan_desa": [
          "Nanga Ella Hilir",
          "Popai",
          "Pelempai Jaya",
          "Lengkenat"
        ]
      }
    ]
  },
  {
    "wilayah": "Sambas",
    "jenis": "Kabupaten",
    "slugs": ["sambas"],
    "kecamatan": [
      {
        "nama_kecamatan": "Sambas",
        "kelurahan_desa": [
          "Dalam Kaum",
          "Durian",
          "Gapura",
          "Jagur",
          "Kambang",
          "Lubis",
          "Pasar Melayu",
          "Pendawan",
          "Sungai Garam",
          "Semayong",
          "Sumber Harapan",
          "Tanjung Mekar",
          "Tanjung Bugis"
        ]
      },
      {
        "nama_kecamatan": "Pemangkat",
        "kelurahan_desa": [
          "Pemangkat Kota",
          "Harapan",
          "Gugah Sejahtera",
          "Lonam",
          "Penjajap",
          "Sebakor"
        ]
      },
      {
        "nama_kecamatan": "Tebas",
        "kelurahan_desa": [
          "Tebas Sungai",
          "Tebas Kuala",
          "Batu Makjage",
          "Bekut",
          "Bukit Mulya",
          "Dugun",
          "Marabas",
          "Matang Terap",
          "Mekar Sekuntum",
          "Pangkalan Kongsi",
          "Sejiram",
          "Sempalai",
          "Sert Sema"
        ]
      },
      {
        "nama_kecamatan": "Teluk Keramat",
        "kelurahan_desa": [
          "Sekura",
          "Sungai Kumpai",
          "Tri Mandayan",
          "Pipitteja",
          "Kubutan"
        ]
      }
    ]
  },
  {
    "wilayah": "Sanggau",
    "jenis": "Kabupaten",
    "slugs": ["sanggau"],
    "kecamatan": [
      {
        "nama_kecamatan": "Kapuas",
        "kelurahan_desa": [
          "Beringin",
          "Ilir Kota",
          "Tanjung Sekayam",
          "Tanjung Kapuas",
          "Bunut",
          "Lawa",
          "Penfok",
          "Riam Macan",
          "Belangin",
          "Engkros",
          "Nanga Biang",
          "Sungai Batu"
        ]
      },
      {
        "nama_kecamatan": "Tayan Hilir",
        "kelurahan_desa": [
          "Kawat",
          "Tayan Kota",
          "Cempedak",
          "Sebaru",
          "Melugai",
          "Pedalaman",
          "Subah",
          "Tebang Benua",
          "Pulau Tayan Utara"
        ]
      },
      {
        "nama_kecamatan": "Entikong",
        "kelurahan_desa": [
          "Entikong",
          "Nekan",
          "Pala Pasang",
          "Semanget",
          "Suruh Tawang"
        ]
      },
      {
        "nama_kecamatan": "Parindu",
        "kelurahan_desa": [
          "Pusat Damai",
          "Bodok",
          "Marimani",
          "Pandu Raya"
        ]
      }
    ]
  },
  {
    "wilayah": "Sintang",
    "jenis": "Kabupaten",
    "slugs": ["sintang"],
    "kecamatan": [
      {
        "nama_kecamatan": "Sintang",
        "kelurahan_desa": [
          "Alai",
          "Banting",
          "Gajah Mada",
          "Kapuas Kanan Hilir",
          "Kapuas Kanan Hulu",
          "Kapuas Kiri Hilir",
          "Kapuas Kiri Hulu",
          "Ladang",
          "Lalang Singkai",
          "Mekar Jaya",
          "Mengkurai",
          "Munjung",
          "Tanjung Puri"
        ]
      },
      {
        "nama_kecamatan": "Kelam Permai",
        "kelurahan_desa": [
          "Kebadow",
          "Kelam Sejahtera",
          "Pelimping",
          "Merpak",
          "Samak",
          "Nanga Lebang"
        ]
      },
      {
        "nama_kecamatan": "Sungai Tebelian",
        "kelurahan_desa": [
          "Banja Ujung",
          "Bancoh",
          "Guruh Sepakat",
          "Kuning",
          "Manter",
          "Nanga Jetak",
          "Sarai",
          "Sungai Ringin"
        ]
      }
    ]
  },
  {
    "wilayah": "Kapuas Hulu",
    "jenis": "Kabupaten",
    "slugs": ["kapuas-hulu", "kapuas"],
    "kecamatan": [
      {
        "nama_kecamatan": "Putussibau Utara",
        "kelurahan_desa": [
          "Putussibau Kota",
          "Hilir Kantor",
          "Kedamin Darat",
          "Jarik",
          "Nanga Sambus",
          "Pala Pulau",
          "Sibau Hilir",
          "Sibau Hulu",
          "Tanjung Lasa"
        ]
      },
      {
        "nama_kecamatan": "Putussibau Selatan",
        "kelurahan_desa": [
          "Kedamin Hilir",
          "Kedamin Hulu",
          "Ciri",
          "Bungan Jaya",
          "Kenyabur",
          "Melapi",
          "Nanga Bungan",
          "Sama Fort"
        ]
      }
    ]
  },
  {
    "wilayah": "Kayong Utara",
    "jenis": "Kabupaten",
    "slugs": ["kayong-utara"],
    "kecamatan": [
      {
        "nama_kecamatan": "Sukadana",
        "kelurahan_desa": [
          "Sutera",
          "Pangkalan Buton",
          "Benawai Agung",
          "Sejahtera",
          "Harapan Mulia",
          "Riam Berasap Jaya",
          "Sedahan Jaya",
          "Guang"
        ]
      },
      {
        "nama_kecamatan": "Simpang Hilir",
        "kelurahan_desa": [
          "Teluk Melano",
          "Rantau Panjang",
          "Batu Barat",
          "Medan Jaya",
          "Pemangkat",
          "Penjalaan",
          "Pulau Kumbang",
          "Sungai Mata-Mata"
        ]
      },
      {
        "nama_kecamatan": "Teluk Batang",
        "kelurahan_desa": [
          "Teluk Batang",
          "Teluk Batang Selatan",
          "Alahan",
          "Mas Bangbangun"
        ]
      }
    ]
  },
  {
    "wilayah": "Bengkayang",
    "jenis": "Kabupaten",
    "slugs": ["bengkayang"],
    "kecamatan": [
      {
        "nama_kecamatan": "Bengkayang",
        "kelurahan_desa": [
          "Bumi Emas",
          "Bumi Zona",
          "Sebalo",
          "Setangau Jaya",
          "Tirta Kencana"
        ]
      },
      {
        "nama_kecamatan": "Sungai Raya",
        "kelurahan_desa": [
          "Sungai Duri",
          "Sungai Raya",
          "Sungai Jaga A",
          "Sungai Jaga B",
          "Kabulik"
        ]
      },
      {
        "nama_kecamatan": "Samalantan",
        "kelurahan_desa": [
          "Samalantan",
          "Marunsu",
          "Sababar",
          "Tuhu Jaya"
        ]
      }
    ]
  },
  {
    "wilayah": "Mempawah",
    "jenis": "Kabupaten",
    "slugs": ["mempawah"],
    "kecamatan": [
      {
        "nama_kecamatan": "Mempawah Hilir",
        "kelurahan_desa": [
          "Terusan",
          "Tengah",
          "Tanjung",
          "Mempawah Hilir",
          "Malikian",
          "Penibung",
          "Sega",
          "Santan",
          "Pasir"
        ]
      },
      {
        "nama_kecamatan": "Mempawah Timur",
        "kelurahan_desa": [
          "Antibar",
          "Pasir Palembang",
          "Sungai Kitang",
          "Sungai Bakau Kecil",
          "Parit Banjar",
          "Sungai Pinyuh"
        ]
      },
      {
        "nama_kecamatan": "Sungai Pinyuh",
        "kelurahan_desa": [
          "Sungai Pinyuh",
          "Sungai Batang",
          "Peniraman",
          "Nusapati",
          "Galang"
        ]
      }
    ]
  },
  {
    "wilayah": "Landak",
    "jenis": "Kabupaten",
    "slugs": ["landak"],
    "kecamatan": [
      {
        "nama_kecamatan": "Ngabang",
        "kelurahan_desa": [
          "Hilir Kantor",
          "Hilir Tengah",
          "Amboyo Utara",
          "Amboyo Inti",
          "Amboyo Selatan",
          "Mungguk",
          "Raja",
          "Muara Ilir",
          "Sebangki"
        ]
      },
      {
        "nama_kecamatan": "Menyuke",
        "kelurahan_desa": [
          "Darit",
          "Anik Dingir",
          "Songga",
          "Ansang"
        ]
      },
      {
        "nama_kecamatan": "Mandor",
        "kelurahan_desa": [
          "Mandor",
          "Kayu Tanam",
          "Salatiga",
          "Simpang Pasir"
        ]
      }
    ]
  },
  {
    "wilayah": "Ngabang",
    "jenis": "Kawasan / Kecamatan Utama",
    "slugs": ["ngabang"],
    "kecamatan": [
      {
        "nama_kecamatan": "Ngabang",
        "kelurahan_desa": [
          "Hilir Kantor",
          "Hilir Tengah",
          "Amboyo Utara",
          "Amboyo Inti",
          "Amboyo Selatan",
          "Mungguk",
          "Raja",
          "Tebedak"
        ]
      }
    ]
  },
  {
    "wilayah": "Sukamara",
    "jenis": "Kabupaten",
    "slugs": ["sukamara"],
    "kecamatan": [
      {
        "nama_kecamatan": "Sukamara",
        "kelurahan_desa": [
          "Mendawai",
          "Padang",
          "Nanga Tiga",
          "Pudu",
          "Kartamulia",
          "Petarikan",
          "Suka Rame"
        ]
      },
      {
        "nama_kecamatan": "Balai Riam",
        "kelurahan_desa": [
          "Balai Riam",
          "Sekuningan Baru",
          "Bangun Jaya",
          "Pembuang Hulu",
          "Air Upas"
        ]
      },
      {
        "nama_kecamatan": "Jelai",
        "kelurahan_desa": [
          "Kuala Jelai",
          "Pulau Lutu",
          "Sungai Raing"
        ]
      }
    ]
  },
  {
    "wilayah": "Gunung Mas",
    "jenis": "Kabupaten",
    "slugs": ["gunung-mas"],
    "kecamatan": [
      {
        "nama_kecamatan": "Kurun",
        "kelurahan_desa": [
          "Kuala Kurun",
          "Tampang Tahan",
          "Tumbang Lampah",
          "Tumbang Tariyak",
          "Hurung Bunut",
          "Petak Bahandang",
          "Tewang Pajangan"
        ]
      },
      {
        "nama_kecamatan": "Tewah",
        "kelurahan_desa": [
          "Tewah",
          "Tumbang Hakau",
          "Baras Senangan",
          "Kasintu",
          "Sei Pasah",
          "Tumbang Rahuyan"
        ]
      }
    ]
  },
  {
    "wilayah": "Lamandau",
    "jenis": "Kabupaten",
    "slugs": ["lamandau"],
    "kecamatan": [
      {
        "nama_kecamatan": "Nanga Bulik",
        "kelurahan_desa": [
          "Nanga Bulik",
          "Bumi Bhakti",
          "Kawa",
          "Kuantan",
          "Sumber Mulya",
          "Tamiang",
          "Bunut",
          "Batu Kotam"
        ]
      },
      {
        "nama_kecamatan": "Sematu Jaya",
        "kelurahan_desa": [
          "Purwareja",
          "Janggut",
          "Bina Bhakti",
          "Mekarsari",
          "Tri Mulya"
        ]
      },
      {
        "nama_kecamatan": "Delang",
        "kelurahan_desa": [
          "Kudangan",
          "Sepahan",
          "Sekombang"
        ]
      }
    ]
  },
  {
    "wilayah": "Katingan",
    "jenis": "Kabupaten",
    "slugs": ["katingan"],
    "kecamatan": [
      {
        "nama_kecamatan": "Katingan Hilir",
        "kelurahan_desa": [
          "Kasongan Lama",
          "Kasongan Baru",
          "Hingbing",
          "Tewang Kadamba",
          "Banut Kalanaman",
          "Talian Kereng"
        ]
      },
      {
        "nama_kecamatan": "Katingan Tengah",
        "kelurahan_desa": [
          "Tumbang Samba",
          "Samba Danum",
          "Samba Kahayan",
          "Samba Katung",
          "Batu Badinding"
        ]
      }
    ]
  },
  {
    "wilayah": "Murung Raya",
    "jenis": "Kabupaten",
    "slugs": ["murung-raya"],
    "kecamatan": [
      {
        "nama_kecamatan": "Murung",
        "kelurahan_desa": [
          "Puruk Cahu",
          "Berapang",
          "Muara Samaan",
          "Panuut",
          "Bahitom",
          "Danau Usung",
          "Jurut",
          "Muo"
        ]
      },
      {
        "nama_kecamatan": "Laung Tuhup",
        "kelurahan_desa": [
          "Muara Laung I",
          "Muara Laung II",
          "Batu Bua I",
          "Batu Bua II",
          "Biha",
          "Tumbang Tonaan"
        ]
      }
    ]
  },
  {
    "wilayah": "Seruyan",
    "jenis": "Kabupaten",
    "slugs": ["seruyan"],
    "kecamatan": [
      {
        "nama_kecamatan": "Seruyan Hilir",
        "kelurahan_desa": [
          "Kuala Pembuang I",
          "Kuala Pembuang II",
          "Sungai Undang",
          "Persil Raya",
          "Pematang Panjang",
          "Tanjung Rangas"
        ]
      },
      {
        "nama_kecamatan": "Danau Sembuluh",
        "kelurahan_desa": [
          "Telaga Pulang",
          "Sembatu",
          "Suka Maju",
          "Terawan"
        ]
      },
      {
        "nama_kecamatan": "Hanau",
        "kelurahan_desa": [
          "Pembuang Hulu I",
          "Pembuang Hulu II",
          "Parang Batang"
        ]
      }
    ]
  },
  {
    "wilayah": "Tana Tidung",
    "jenis": "Kabupaten",
    "slugs": ["tana-tidung"],
    "kecamatan": [
      {
        "nama_kecamatan": "Sesayap",
        "kelurahan_desa": [
          "Tideng Pale",
          "Sesayap",
          "Sebawang",
          "Gunung Tiram",
          "Limbawan",
          "Sedulun"
        ]
      },
      {
        "nama_kecamatan": "Sesayap Hilir",
        "kelurahan_desa": [
          "Sesayap Hilir",
          "Sepala Dalung",
          "Bebatu",
          "Bandung",
          "Bujok"
        ]
      },
      {
        "nama_kecamatan": "Tana Lia",
        "kelurahan_desa": [
          "Tanah Merah",
          "Sambungan",
          "Sambungan Selatan"
        ]
      }
    ]
  },
  {
    "wilayah": "Nunukan",
    "jenis": "Kabupaten",
    "slugs": ["nunukan"],
    "kecamatan": [
      {
        "nama_kecamatan": "Nunukan",
        "kelurahan_desa": [
          "Nunukan Barat",
          "Nunukan Timur",
          "Nunukan Tengah",
          "Nunukan Utara",
          "Binusan"
        ]
      },
      {
        "nama_kecamatan": "Nunukan Selatan",
        "kelurahan_desa": [
          "Nunukan Selatan",
          "Mansapa",
          "Tanjung Harapan",
          "Selisun"
        ]
      },
      {
        "nama_kecamatan": "Sebatik",
        "kelurahan_desa": [
          "Tanjung Karang",
          "Sungai Nyamuk",
          "Sei Pancang",
          "Padaidi"
        ]
      },
      {
        "nama_kecamatan": "Sebatik Utara",
        "kelurahan_desa": [
          "Sebatik Utara",
          "Pancang",
          "Lapri"
        ]
      }
    ]
  },
  {
    "wilayah": "Bulungan",
    "jenis": "Kabupaten",
    "slugs": ["bulungan"],
    "kecamatan": [
      {
        "nama_kecamatan": "Tanjung Selor",
        "kelurahan_desa": [
          "Tanjung Selor Hilir",
          "Tanjung Selor Timur",
          "Tanjung Selor Hulu",
          "Jenggala",
          "Tanjung Palas Harapan",
          "Apung"
        ]
      },
      {
        "nama_kecamatan": "Tanjung Palas",
        "kelurahan_desa": [
          "Tanjung Palas Hilir",
          "Tanjung Palas Tengah",
          "Tanjung Palas Hulu",
          "Karang Anyar",
          "Antutan"
        ]
      }
    ]
  },
  {
    "wilayah": "Kutai Barat",
    "jenis": "Kabupaten",
    "slugs": ["kutai-barat", "melak"],
    "kecamatan": [
      {
        "nama_kecamatan": "Sendawar (Barong Tongkok)",
        "kelurahan_desa": [
          "Barong Tongkok",
          "Simpang Raya",
          "Busur",
          "Gepura",
          "Sumber Bangun",
          "Belempung Ulaq"
        ]
      },
      {
        "nama_kecamatan": "Melak",
        "kelurahan_desa": [
          "Melak Ilir",
          "Melak Ulu",
          "Empas",
          "Muara Benangaq",
          "Muara Bunyut"
        ]
      }
    ]
  },
  {
    "wilayah": "Paser",
    "jenis": "Kabupaten",
    "slugs": ["paser"],
    "kecamatan": [
      {
        "nama_kecamatan": "Tanah Grogot",
        "kelurahan_desa": [
          "Tanah Grogot",
          "Tapis",
          "Tanah Periuk",
          "Senaken",
          "Janju",
          "Sepang",
          "Tepian Batang"
        ]
      },
      {
        "nama_kecamatan": "Kuaro",
        "kelurahan_desa": [
          "Kuaro",
          "Modang",
          "Songka",
          "Harapan Masa",
          "Pasir Mayang"
        ]
      },
      {
        "nama_kecamatan": "Batu Sopang",
        "kelurahan_desa": [
          "Batu Kajang",
          "Kasungai",
          "Songka",
          "Samurangau"
        ]
      }
    ]
  },
  {
    "wilayah": "Mahakam Ulu",
    "jenis": "Kabupaten",
    "slugs": ["mahakam-ulu"],
    "kecamatan": [
      {
        "nama_kecamatan": "Long Bagun",
        "kelurahan_desa": [
          "Ujoh Bilang",
          "Long Bagun Ulu",
          "Long Bagun Ilir",
          "Batu Majang",
          "Riam Boh"
        ]
      },
      {
        "nama_kecamatan": "Long Hubung",
        "kelurahan_desa": [
          "Long Hubung",
          "Datah Bilang",
          "Lutan",
          "Long Hubung Ulu"
        ]
      }
    ]
  },
  {
    "wilayah": "Pulau Laut (Kabupaten Kotabaru)",
    "jenis": "Kawasan / Kecamatan",
    "slugs": ["pulau-laut", "kotabaru"],
    "kecamatan": [
      {
        "nama_kecamatan": "Pulau Laut Utara",
        "kelurahan_desa": [
          "Kotabaru Hilir",
          "Kotabaru Tengah",
          "Dirgahayu",
          "Stagen",
          "Sebelimbingan",
          "Rampa",
          "Batuah"
        ]
      },
      {
        "nama_kecamatan": "Pulau Laut Selatan",
        "kelurahan_desa": [
          "Tanjung Selayar",
          "Tanjung Lalak Utara",
          "Tanjung Lalak Selatan",
          "Teluk Sirih"
        ]
      },
      {
        "nama_kecamatan": "Pulau Laut Sigam",
        "kelurahan_desa": [
          "Baharu Selatan",
          "Sebatung",
          "Gunung Sari"
        ]
      }
    ]
  },
  {
    "wilayah": "Hulu Sungai Selatan",
    "jenis": "Kabupaten",
    "slugs": ["hulu-sungai-selatan"],
    "kecamatan": [
      {
        "nama_kecamatan": "Kandangan",
        "kelurahan_desa": [
          "Kandangan Kota",
          "Kandangan Barat",
          "Kandangan Utara",
          "Jambu Hilir",
          "Gambah Luar",
          "Tibung Raya",
          "Amawang Kiri"
        ]
      },
      {
        "nama_kecamatan": "Daha Selatan",
        "kelurahan_desa": [
          "Nagara",
          "Bayanan",
          "Pandangan",
          "Tumbukan Banyu",
          "Habirau",
          "Samuda"
        ]
      }
    ]
  },
  {
    "wilayah": "Hulu Sungai Tengah",
    "jenis": "Kabupaten",
    "slugs": ["hulu-sungai-tengah"],
    "kecamatan": [
      {
        "nama_kecamatan": "Barabai",
        "kelurahan_desa": [
          "Barabai Kota",
          "Barabai Darat",
          "Barabai Utara",
          "Barabai Selatan",
          "Barabai Timur",
          "Bukat",
          "Mandingin"
        ]
      },
      {
        "nama_kecamatan": "Batu Benawa",
        "kelurahan_desa": [
          "Pagat",
          "Bakapas",
          "Aluan",
          "Kalibaru",
          "Pabahanan"
        ]
      }
    ]
  },
  {
    "wilayah": "Banjar",
    "jenis": "Kabupaten",
    "slugs": ["banjar"],
    "kecamatan": [
      {
        "nama_kecamatan": "Martapura",
        "kelurahan_desa": [
          "Martapura Kota",
          "Keraton",
          "Jawa",
          "Sekumpul",
          "Cindai Alus",
          "Pasayangan",
          "Tunggul Hitam",
          "Pesayangan",
          "Banyu Irang"
        ]
      },
      {
        "nama_kecamatan": "Gambut",
        "kelurahan_desa": [
          "Gambut",
          "Gambut Barat",
          "Guntung Payung",
          "Kayu Bawang",
          "Malintang",
          "Tambak Sirang"
        ]
      },
      {
        "nama_kecamatan": "Kertak Hanyar",
        "kelurahan_desa": [
          "Manarap Lama",
          "Kertak Hanyar",
          "Pemurus",
          "Mandarawan"
        ]
      }
    ]
  },
  {
    "wilayah": "Balangan",
    "jenis": "Kabupaten",
    "slugs": ["balangan"],
    "kecamatan": [
      {
        "nama_kecamatan": "Paringin",
        "kelurahan_desa": [
          "Paringin Kota",
          "Paringin Timur",
          "Layap",
          "Daham",
          "Nungka",
          "Batu Piring"
        ]
      },
      {
        "nama_kecamatan": "Paringin Selatan",
        "kelurahan_desa": [
          "Batu Piring",
          "Batu Merah",
          "Inan",
          "Lampihong",
          "Nibat"
        ]
      }
    ]
  },
  {
    "wilayah": "Tapin",
    "jenis": "Kabupaten",
    "slugs": ["tapin"],
    "kecamatan": [
      {
        "nama_kecamatan": "Rantau (Tapin Utara)",
        "kelurahan_desa": [
          "Rantau Kiwa",
          "Rantau Kanan",
          "Kupang",
          "Rangda Malingku",
          "Perintis Raya",
          "Keraton"
        ]
      },
      {
        "nama_kecamatan": "Binuang",
        "kelurahan_desa": [
          "Binuang",
          "Raya Belanti",
          "Tungkap",
          "Pualam Sari",
          "Karangan Putih"
        ]
      }
    ]
  },
  {
    "wilayah": "Tabalong",
    "jenis": "Kabupaten",
    "slugs": ["tabalong"],
    "kecamatan": [
      {
        "nama_kecamatan": "Tanjung",
        "kelurahan_desa": [
          "Tanjung",
          "Jawa",
          "Jamin",
          "Hikun",
          "Agung",
          "Kambitin",
          "Puain Kanan"
        ]
      },
      {
        "nama_kecamatan": "Murung Pudak",
        "kelurahan_desa": [
          "Belimbing",
          "Mabuun",
          "Sulingan",
          "Pembataan",
          "Tanta",
          "Masaka"
        ]
      }
    ]
  },
  {
    "wilayah": "Penajam Paser Utara",
    "jenis": "Kabupaten",
    "slugs": ["penajam-paser-utara"],
    "kecamatan": [
      {
        "nama_kecamatan": "Penajam",
        "kelurahan_desa": [
          "Penajam",
          "Nipah-Nipah",
          "Petung",
          "Salgulo",
          "Gersik",
          "Jenebora",
          "Nenang",
          "Sungai Ibu",
          "Girimukti"
        ]
      },
      {
        "nama_kecamatan": "Sepaku",
        "kelurahan_desa": [
          "Sepaku",
          "Pemaluan",
          "Maridan",
          "Mentawir",
          "Suka Raja",
          "Tengin Baru",
          "Benuo Taka"
        ]
      },
      {
        "nama_kecamatan": "Waru",
        "kelurahan_desa": [
          "Waru",
          "Bangun Mulya",
          "Sesumpu"
        ]
      }
    ]
  },
  {
    "wilayah": "Kubu Raya",
    "jenis": "Kabupaten",
    "slugs": ["kubu-raya"],
    "kecamatan": [
      {
        "nama_kecamatan": "Sungai Raya",
        "kelurahan_desa": [
          "Sungai Raya",
          "Sungai Raya Dalam",
          "Arang Limbung",
          "Kapur",
          "Kuala Dua",
          "Limbung",
          "Teluk Kapuas"
        ]
      },
      {
        "nama_kecamatan": "Sungai Kakap",
        "kelurahan_desa": [
          "Sungai Kakap",
          "Pal Sembilan",
          "Sungai Rengas",
          "Sungai Belidak",
          "Kalimas"
        ]
      },
      {
        "nama_kecamatan": "Sungai Ambawang",
        "kelurahan_desa": [
          "Sungai Ambawang",
          "Lingga",
          "Korek"
        ]
      }
    ]
  },
  {
    "wilayah": "Subang",
    "jenis": "Kabupaten",
    "slugs": ["subang"],
    "kecamatan": [
      {
        "nama_kecamatan": "Subang",
        "kelurahan_desa": [
          "Karanganyar",
          "Cigadung",
          "Pasirkareumbi",
          "Soklat",
          "Sukamelang",
          "Dangdeur",
          "Parung"
        ]
      },
      {
        "nama_kecamatan": "Kalijati",
        "kelurahan_desa": [
          "Kalijati Timur",
          "Kalijati Barat",
          "Marengmang",
          "Bungursari",
          "Cirangkong",
          "Kaliangsana"
        ]
      },
      {
        "nama_kecamatan": "Cipeundeuy",
        "kelurahan_desa": [
          "Cipeundeuy",
          "Batuangsana",
          "Cimayasari",
          "Lengkong",
          "Sawangan",
          "Sukahurip"
        ]
      },
      {
        "nama_kecamatan": "Pamanukan",
        "kelurahan_desa": [
          "Pamanukan",
          "Pamanukan Sebrang",
          "Lengkong",
          "Rancasari"
        ]
      }
    ]
  },
  {
    "wilayah": "Purwakarta",
    "jenis": "Kabupaten",
    "slugs": ["purwakarta"],
    "kecamatan": [
      {
        "nama_kecamatan": "Purwakarta",
        "kelurahan_desa": [
          "Ciseureuh",
          "Nagrikaler",
          "Nagrikidul",
          "Nagritengah",
          "Cipaisan",
          "Sindangkasih",
          "Tegalmunjul"
        ]
      },
      {
        "nama_kecamatan": "Bungursari",
        "kelurahan_desa": [
          "Bungursari",
          "Cibungur",
          "Cikopo",
          "Cinangka",
          "Dangdeur",
          "Wabantaa"
        ]
      },
      {
        "nama_kecamatan": "Campaka",
        "kelurahan_desa": [
          "Campaka",
          "Campakasari",
          "Cijaya",
          "Cikumpay",
          "Cimahi",
          "Cirende"
        ]
      },
      {
        "nama_kecamatan": "Jatiluhur",
        "kelurahan_desa": [
          "Jatiluhur",
          "Cikao Bandung",
          "Buleud",
          "Cisalada"
        ]
      }
    ]
  },
  {
    "wilayah": "Cilacap",
    "jenis": "Kabupaten",
    "slugs": ["cilacap"],
    "kecamatan": [
      {
        "nama_kecamatan": "Cilacap Selatan",
        "kelurahan_desa": [
          "Cilacap",
          "Sidakaya",
          "Tegalreja",
          "Tambakreja",
          "Tegalkamulyan"
        ]
      },
      {
        "nama_kecamatan": "Cilacap Tengah",
        "kelurahan_desa": [
          "Donan",
          "Lomanis",
          "Sidanegara",
          "Gunungsimping",
          "Kutawaru"
        ]
      },
      {
        "nama_kecamatan": "Cilacap Utara",
        "kelurahan_desa": [
          "Gumilir",
          "Karangtalun",
          "Krinjing",
          "Mergawati",
          "Tritih Kulon"
        ]
      },
      {
        "nama_kecamatan": "Majenang",
        "kelurahan_desa": [
          "Jenang",
          "Padangjaya",
          "Sindangsari",
          "Pahangon",
          "Cibeunying",
          "Bener"
        ]
      }
    ]
  },
  {
    "wilayah": "Batang",
    "jenis": "Kabupaten",
    "slugs": ["batang"],
    "kecamatan": [
      {
        "nama_kecamatan": "Batang",
        "kelurahan_desa": [
          "Batang Hari",
          "Kauman",
          "Kasepuhan",
          "Karangasem Utara",
          "Proyonanggan Utara",
          "Proyonanggan Selatan",
          "Proyonanggan Tengah",
          "Sambong",
          "Watesalit"
        ]
      },
      {
        "nama_kecamatan": "Tulis",
        "kelurahan_desa": [
          "Tulis",
          "Posong",
          "Sembojo",
          "Simpar",
          "Jolosekti",
          "Kenconorejo",
          "Kaliboyo"
        ]
      },
      {
        "nama_kecamatan": "Subah",
        "kelurahan_desa": [
          "Subah",
          "Jatisari",
          "Kalimanggis",
          "Karangtengah",
          "Kebumen",
          "Kecubung",
          "Menjangan"
        ]
      }
    ]
  },
  {
    "wilayah": "Sidoarjo",
    "jenis": "Kabupaten",
    "slugs": ["sidoarjo"],
    "kecamatan": [
      {
        "nama_kecamatan": "Sidoarjo",
        "kelurahan_desa": [
          "Sidokumpul",
          "Sidokare",
          "Bulu Sidokare",
          "Lemahputro",
          "Celep",
          "Magersari",
          "Pucang",
          "Sekardangan",
          "Gebyog",
          "Urangagung"
        ]
      },
      {
        "nama_kecamatan": "Waru",
        "kelurahan_desa": [
          "Waru",
          "Bungurasih",
          "Kedungrejo",
          "Medaeng",
          "Pepelegi",
          "Ngingas",
          "Jatisari",
          "Tropodo",
          "Kureksari",
          "Berbek"
        ]
      },
      {
        "nama_kecamatan": "Candi",
        "kelurahan_desa": [
          "Candi",
          "Gelam",
          "Jambangan",
          "Karangtanjung",
          "Kedangklotok",
          "Kedungpeluk",
          "Klurak",
          "Larangan",
          "Sumorame"
        ]
      },
      {
        "nama_kecamatan": "Krian",
        "kelurahan_desa": [
          "Krian",
          "Sidomulyo",
          "Tropodo",
          "Kraton",
          "Jatikalang"
        ]
      }
    ]
  },
  {
    "wilayah": "Banyuwangi",
    "jenis": "Kabupaten",
    "slugs": ["banyuwangi"],
    "kecamatan": [
      {
        "nama_kecamatan": "Banyuwangi",
        "kelurahan_desa": [
          "Kepatihan",
          "Temenggungan",
          "Tukangkayu",
          "Singotrunan",
          "Panderejo",
          "Pengantigan",
          "Sobo",
          "Penganjuran",
          "Tamanbaru",
          "Sukesada"
        ]
      },
      {
        "nama_kecamatan": "Kalipuro",
        "kelurahan_desa": [
          "Kalipuro",
          "Ketapang",
          "Bulusan",
          "Gintangan",
          "Pesanggaran",
          "Telemung",
          "Glagah"
        ]
      },
      {
        "nama_kecamatan": "Rogojampi",
        "kelurahan_desa": [
          "Rogojampi",
          "Gitik",
          "Gladag",
          "Pengantigan",
          "Kedaleman",
          "Lemahbangkulon",
          "Gitik Kulon"
        ]
      }
    ]
  },
  {
    "wilayah": "Lamongan",
    "jenis": "Kabupaten",
    "slugs": ["lamongan"],
    "kecamatan": [
      {
        "nama_kecamatan": "Lamongan",
        "kelurahan_desa": [
          "Babat",
          "Sidokumpul",
          "Sidoharjo",
          "Jetis",
          "Tumenggungan",
          "Made",
          "Banjarrejo",
          "Plosowahyu",
          "Rancangwetan"
        ]
      },
      {
        "nama_kecamatan": "Babat",
        "kelurahan_desa": [
          "Babat",
          "Bedahan",
          "Gajah",
          "Karangkembang",
          "Kebalandono",
          "Moropelang",
          "Plaosan",
          "Sogo",
          "Sumurgenuk"
        ]
      },
      {
        "nama_kecamatan": "Paciran",
        "kelurahan_desa": [
          "Paciran",
          "Tunggul",
          "Weru",
          "Kandangsemangkon"
        ]
      }
    ]
  },
  {
    "wilayah": "Tuban",
    "jenis": "Kabupaten",
    "slugs": ["tuban"],
    "kecamatan": [
      {
        "nama_kecamatan": "Tuban",
        "kelurahan_desa": [
          "Kutorejo",
          "Kebonsari",
          "Latsari",
          "Ronggomulyo",
          "Sidomulyo",
          "Sendangharjo",
          "Perbon",
          "Sukolilo",
          "Karangsari"
        ]
      },
      {
        "nama_kecamatan": "Jenu",
        "kelurahan_desa": [
          "Jenu",
          "Beji",
          "Jenggolo",
          "Mentoso",
          "Rawasan",
          "Remen",
          "Socorejo",
          "Suwalan",
          "Tasikharjo"
        ]
      },
      {
        "nama_kecamatan": "Semanding",
        "kelurahan_desa": [
          "Semanding",
          "Karang",
          "Gedongombo",
          "Tegalagung"
        ]
      }
    ]
  },
  {
    "wilayah": "Demak",
    "jenis": "Kabupaten",
    "slugs": ["demak"],
    "kecamatan": [
      {
        "nama_kecamatan": "Demak",
        "kelurahan_desa": [
          "Bintoro",
          "Bangkrihan",
          "Beto",
          "Calep",
          "Donorejo",
          "Kadilangu",
          "Kalicondong",
          "Katonsari",
          "Mangunjiwan",
          "Singorejo"
        ]
      },
      {
        "nama_kecamatan": "Sayung",
        "kelurahan_desa": [
          "Sayung",
          "Bedono",
          "Banjarsari",
          "Dombo",
          "Karasong",
          "Purwosari",
          "Sriwulan",
          "Tugu",
          "Timbulsloko"
        ]
      }
    ]
  },
  {
    "wilayah": "Kendal",
    "jenis": "Kabupaten",
    "slugs": ["kendal"],
    "kecamatan": [
      {
        "nama_kecamatan": "Kendal",
        "kelurahan_desa": [
          "Bandengan",
          "Bangsri",
          "Bugangin",
          "Candiroto",
          "Jotang",
          "Kalibuntu",
          "Karang sari",
          "Kebondalem",
          "Krapyak",
          "Pekauman",
          "Pegulon"
        ]
      },
      {
        "nama_kecamatan": "Kaliwungu",
        "kelurahan_desa": [
          "Kaliwungu",
          "Krapyak",
          "Kutoharjo",
          "Mororejo",
          "Nolokerto",
          "Sarirejo",
          "Sumberejo",
          "Wonosari"
        ]
      },
      {
        "nama_kecamatan": "Boja",
        "kelurahan_desa": [
          "Boja",
          "Campurejo",
          "Meteseh",
          "Bebengan"
        ]
      }
    ]
  },
  {
    "wilayah": "Pandeglang",
    "jenis": "Kabupaten",
    "slugs": ["pandeglang"],
    "kecamatan": [
      {
        "nama_kecamatan": "Pandeglang",
        "kelurahan_desa": [
          "Pandeglang",
          "Kabayan",
          "Kadumerak",
          "Kaduhejo",
          "Karaton",
          "Padasuka",
          "Babakan Kalanganyar"
        ]
      },
      {
        "nama_kecamatan": "Labuan",
        "kelurahan_desa": [
          "Labuan",
          "Cigondang",
          "Kalanganyar",
          "Rancateureup",
          "Sukamaju",
          "Teluk",
          "Caringin"
        ]
      },
      {
        "nama_kecamatan": "Majasari",
        "kelurahan_desa": [
          "Saruni",
          "Sukaratu",
          "Cilaja",
          "Karaton"
        ]
      }
    ]
  },
  {
    "wilayah": "Lebak",
    "jenis": "Kabupaten",
    "slugs": ["lebak"],
    "kecamatan": [
      {
        "nama_kecamatan": "Rangkasbitung",
        "kelurahan_desa": [
          "Rangkasbitung Barat",
          "Rangkasbitung Timur",
          "Muara Ciujung Barat",
          "Muara Ciujung Timur",
          "Cijoro Lebak",
          "Cijoro Pasir",
          "Citeras",
          "Kolelet Rangkas"
        ]
      },
      {
        "nama_kecamatan": "Cibadak",
        "kelurahan_desa": [
          "Cibadak",
          "Asem",
          "Bojong Cae",
          "Cisalopa",
          "Kencana",
          "Malabar",
          "Pasir Keusik",
          "Tambakbaya"
        ]
      }
    ]
  },
  {
    "wilayah": "Garut",
    "jenis": "Kabupaten",
    "slugs": ["garut"],
    "kecamatan": [
      {
        "nama_kecamatan": "Garut Kota",
        "kelurahan_desa": [
          "Cimuncang",
          "Ciwalen",
          "Guntur",
          "Kota Kulon",
          "Kota Wetan",
          "Margawati",
          "Muara Sanding",
          "Paminggir",
          "Regol",
          "Sukamentri"
        ]
      },
      {
        "nama_kecamatan": "Tarogong Kaler",
        "kelurahan_desa": [
          "Jati",
          "Cimanganten",
          "Langensari",
          "Mekarjaya",
          "Panjiwangi",
          "Pasawahan",
          "Rancabango",
          "Sirnajaya",
          "Sukajadi"
        ]
      },
      {
        "nama_kecamatan": "Tarogong Kidul",
        "kelurahan_desa": [
          "Haurpanggung",
          "Jayawaras",
          "Kersek",
          "Natarjaya",
          "Sukagalih",
          "Sukajaya",
          "Sukakarya",
          "Tarogong"
        ]
      }
    ]
  },
  {
    "wilayah": "Cianjur",
    "jenis": "Kabupaten",
    "slugs": ["cianjur"],
    "kecamatan": [
      {
        "nama_kecamatan": "Cianjur",
        "kelurahan_desa": [
          "Cianjur",
          "Bojongherang",
          "Limbangansari",
          "Mekarsari",
          "Muka",
          "Pamoyanan",
          "Salaman",
          "Sayang",
          "Solokpandan"
        ]
      },
      {
        "nama_kecamatan": "Cipanas",
        "kelurahan_desa": [
          "Cipanas",
          "Cimacan",
          "Cipendawa",
          "Ciloto",
          "Batulawang",
          "Palasari",
          "Sindanglaya"
        ]
      },
      {
        "nama_kecamatan": "Karangtengah",
        "kelurahan_desa": [
          "Hegarmanah",
          "Sukataris",
          "Maleber"
        ]
      }
    ]
  },
  {
    "wilayah": "Wonogiri",
    "jenis": "Kabupaten",
    "slugs": ["wonogiri"],
    "kecamatan": [
      {
        "nama_kecamatan": "Wonogiri",
        "kelurahan_desa": [
          "Wonogiri",
          "Girisubo",
          "Giritirto",
          "Giripurwo",
          "Kaluwaran",
          "Purwosari",
          "Wonokerto",
          "Manoko",
          "Pokoh Kidul",
          "Wonoharjo"
        ]
      },
      {
        "nama_kecamatan": "Selogiri",
        "kelurahan_desa": [
          "Jaten",
          "Jatisrono",
          "Kelor",
          "Kroyo",
          "Ngempon",
          "Parem",
          "Singodutan",
          "Sendang",
          "Waleng"
        ]
      }
    ]
  },
  {
    "wilayah": "Kebumen",
    "jenis": "Kabupaten",
    "slugs": ["kebumen"],
    "kecamatan": [
      {
        "nama_kecamatan": "Kebumen",
        "kelurahan_desa": [
          "Kebumen",
          "Bumirejo",
          "Karisma",
          "Kawedusan",
          "Kutosari",
          "Panjer",
          "Selang",
          "Sutojayan",
          "Tanahsari",
          "Wonosari"
        ]
      },
      {
        "nama_kecamatan": "Gombong",
        "kelurahan_desa": [
          "Gombong",
          "Banjarsari",
          "Kalitengah",
          "Kedungpuji",
          "Kemukus",
          "Patemon",
          "Semondo",
          "Wero",
          "Wonokriyo"
        ]
      }
    ]
  },
  {
    "wilayah": "Banjarnegara",
    "jenis": "Kabupaten",
    "slugs": ["banjarnegara"],
    "kecamatan": [
      {
        "nama_kecamatan": "Banjarnegara",
        "kelurahan_desa": [
          "Banjarnegara",
          "Ampelsari",
          "Argasoka",
          "Cendana",
          "Kutabanjarnegara",
          "Parakancanggah",
          "Semarang",
          "Sokanandi",
          "Sowan",
          "Wangon"
        ]
      },
      {
        "nama_kecamatan": "Batur",
        "kelurahan_desa": [
          "Batur",
          "Bakintang",
          "Dieng Kulon",
          "Karangtengah",
          "Pasurenan",
          "Pekasiran",
          "Sumberrejo"
        ]
      }
    ]
  },
  {
    "wilayah": "Lumajang",
    "jenis": "Kabupaten",
    "slugs": ["lumajang"],
    "kecamatan": [
      {
        "nama_kecamatan": "Lumajang",
        "kelurahan_desa": [
          "Lumajang",
          "Blukon",
          "Citrodiwangsan",
          "Jogotrunan",
          "Jogoyudan",
          "Kepuharjo",
          "Labruk Lor",
          "Rogotrunan",
          "Tompokersan"
        ]
      },
      {
        "nama_kecamatan": "Pasirian",
        "kelurahan_desa": [
          "Pasirian",
          "Bades",
          "Condro",
          "Madurejo",
          "Nguter",
          "Pasrujambe",
          "Sememu",
          "Selok Awar-Awar"
        ]
      }
    ]
  },
  {
    "wilayah": "Jember",
    "jenis": "Kabupaten",
    "slugs": ["jember"],
    "kecamatan": [
      {
        "nama_kecamatan": "Kaliwates",
        "kelurahan_desa": [
          "Kaliwates",
          "Jember Kidul",
          "Kebon Agung",
          "Kepatihan",
          "Mangli",
          "Sektor Barat",
          "Sektor Timur",
          "Tegal Besar"
        ]
      },
      {
        "nama_kecamatan": "Sumbersari",
        "kelurahan_desa": [
          "Sumbersari",
          "Antirogo",
          "Karangrejo",
          "Kebonsari",
          "Kranjingan",
          "Tegalgede",
          "Wirolegi"
        ]
      },
      {
        "nama_kecamatan": "Patrang",
        "kelurahan_desa": [
          "Patrang",
          "Banjarsari",
          "Bintoro",
          "Gebang",
          "Jemberlor",
          "Jumbo",
          "Slawu"
        ]
      }
    ]
  },
  {
    "wilayah": "Pacitan",
    "jenis": "Kabupaten",
    "slugs": ["pacitan"],
    "kecamatan": [
      {
        "nama_kecamatan": "Pacitan",
        "kelurahan_desa": [
          "Pacitan",
          "Baleharjo",
          "Bangunsari",
          "Kajoran",
          "Menadi",
          "Ploso",
          "Pule",
          "Pucangsewu",
          "Sedeng",
          "Sidoharjo",
          "Sirnoboyo",
          "Sumberejo",
          "Tambakrejo"
        ]
      },
      {
        "nama_kecamatan": "Punung",
        "kelurahan_desa": [
          "Punung",
          "Bener",
          "Candi",
          "Gondosini",
          "Kebonsari",
          "Mendolo",
          "Ploso",
          "Suroconto"
        ]
      }
    ]
  },
  {
    "wilayah": "Jombang",
    "jenis": "Kabupaten",
    "slugs": ["jombang"],
    "kecamatan": [
      {
        "nama_kecamatan": "Jombang",
        "kelurahan_desa": [
          "Jombang",
          "Banjardowo",
          "Candi Mulyo",
          "Denanyar",
          "Jombatan",
          "Jolotundo",
          "Kepambang",
          "Kepatihan",
          "Pulo Lor",
          "Sambongdukuh",
          "Sengon",
          "Tambakrejo"
        ]
      },
      {
        "nama_kecamatan": "Ploso",
        "kelurahan_desa": [
          "Ploso",
          "Bawangan",
          "Dadar",
          "Jatibanjar",
          "Kebonagung",
          "Kedungdowo",
          "Losari",
          "Pagertanjung",
          "Tanggungkramat"
        ]
      }
    ]
  },
  {
    "wilayah": "Cepu (Kabupaten Blora)",
    "jenis": "Kawasan / Kecamatan Utama",
    "slugs": ["cepu"],
    "kecamatan": [
      {
        "nama_kecamatan": "Cepu",
        "kelurahan_desa": [
          "Cepu",
          "Balun",
          "Cabeyan",
          "Getas",
          "Jipang",
          "Karangboyo",
          "Kenteng",
          "Mulyorejo",
          "Ngelo",
          "Nglanjuk",
          "Ngradin",
          "Sumberpitu",
          "Tanggungan"
        ]
      },
      {
        "nama_kecamatan": "Blora",
        "kelurahan_desa": [
          "Blora",
          "Jetis",
          "Kauman",
          "Kedungjenar",
          "Mlangsen",
          "Tempelan",
          "Bangkle"
        ]
      }
    ]
  },
  {
    "wilayah": "Pulau Madura",
    "jenis": "Kawasan (Bangkalan, Sampang, Pamekasan, Sumenep)",
    "slugs": ["pulau-madura"],
    "kecamatan": [
      {
        "nama_kecamatan": "Bangkalan",
        "kelurahan_desa": [
          "Bangkalan",
          "Bancaran",
          "Demangan",
          "Kemayoran",
          "Kraton",
          "Mersam",
          "Mlajah",
          "Pejagan",
          "Pangeranan",
          "Senen"
        ]
      },
      {
        "nama_kecamatan": "Sampang",
        "kelurahan_desa": [
          "Sampang",
          "Banyuanyar",
          "Dalpenang",
          "Gunung Sekar",
          "Karang Dalam",
          "Polagan",
          "Rongtengah"
        ]
      },
      {
        "nama_kecamatan": "Pamekasan",
        "kelurahan_desa": [
          "Pamekasan",
          "Barurjo",
          "Bugih",
          "Gladak Anyar",
          "Jungkang",
          "Kangkang",
          "Kolu",
          "Laten",
          "Partokeran"
        ]
      },
      {
        "nama_kecamatan": "Sumenep (Kota Sumenep)",
        "kelurahan_desa": [
          "Bangselok",
          "Karangduak",
          "Kepanjin",
          "Pajagalan",
          "Pamolokan",
          "Pejagan",
          "Panglegur",
          "Torjun"
        ]
      }
    ]
  },
  {
    "wilayah": "Bali",
    "jenis": "Provinsi",
    "slugs": ["bali"],
    "kecamatan": [
      {
        "nama_kecamatan": "Denpasar Selatan",
        "kelurahan_desa": [
          "Sanur",
          "Sanur Kaja",
          "Sanur Kauh",
          "Pedungan",
          "Pemogan",
          "Sidakarya",
          "Renon",
          "Panjer"
        ]
      },
      {
        "nama_kecamatan": "Kuta (Kabupaten Badung)",
        "kelurahan_desa": [
          "Kuta",
          "Legian",
          "Seminyak",
          "Kedonganan",
          "Tuban"
        ]
      },
      {
        "nama_kecamatan": "Ubud (Kabupaten Gianyar)",
        "kelurahan_desa": [
          "Ubud",
          "Kedewatan",
          "Peliatan",
          "Petulu",
          "Sayan",
          "Singakerta",
          "Lodtunduh"
        ]
      }
    ]
  },
  {
    "wilayah": "Muara Enim",
    "jenis": "Kabupaten",
    "slugs": ["muara-enim"],
    "kecamatan": [
      {
        "nama_kecamatan": "Muara Enim",
        "kelurahan_desa": [
          "Muara Enim",
          "Air Lintang",
          "Pasar Muara Enim",
          "Tanjung Enim",
          "Tungkal",
          "Kepur",
          "Muara Lawai"
        ]
      },
      {
        "nama_kecamatan": "Lawang Kidul",
        "kelurahan_desa": [
          "Tanjung Enim",
          "Tanjung Enim Selatan",
          "Pasar Tanjung Enim",
          "Tegal Rejo",
          "Keban Agung",
          "Darmo"
        ]
      }
    ]
  },
  {
    "wilayah": "Bangka Belitung",
    "jenis": "Provinsi (Kawasan Utama)",
    "slugs": ["bangka-belitung"],
    "kecamatan": [
      {
        "nama_kecamatan": "Taman Sari (Pangkalpinang)",
        "kelurahan_desa": [
          "Batin Tikal",
          "Gedung Nasional",
          "Kejaksaan",
          "Opas Indah",
          "Rawasari"
        ]
      },
      {
        "nama_kecamatan": "Tanjung Pandan (Belitung)",
        "kelurahan_desa": [
          "Tanjung Pandan",
          "Kota Tanjung Pandan",
          "Lesung Batang",
          "Parit",
          "Paal Satu"
        ]
      },
      {
        "nama_kecamatan": "Sungailiat (Bangka)",
        "kelurahan_desa": [
          "Sungai Liat",
          "Sinar Baru",
          "Kuday",
          "Parit Padang",
          "Sri Menanti"
        ]
      }
    ]
  },
  {
    "wilayah": "Sungai Liat (Kabupaten Bangka)",
    "jenis": "Kawasan / Kecamatan Utama",
    "slugs": ["sungai-liat"],
    "kecamatan": [
      {
        "nama_kecamatan": "Sungai Liat",
        "kelurahan_desa": [
          "Sungai Liat",
          "Sinar Baru",
          "Kuday",
          "Parit Padang",
          "Sri Menanti",
          "Kenanga",
          "Rebo"
        ]
      }
    ]
  },
  {
    "wilayah": "Langkat",
    "jenis": "Kabupaten",
    "slugs": ["langkat"],
    "kecamatan": [
      {
        "nama_kecamatan": "Stabat",
        "kelurahan_desa": [
          "Stabat",
          "Perdamaian",
          "Sidomulyo",
          "Kwala Bingai",
          "Banyu Emas",
          "Karang Rejo"
        ]
      },
      {
        "nama_kecamatan": "Tanjung Pura",
        "kelurahan_desa": [
          "Pekan Tanjung Pura",
          "Paya Perupuk",
          "Lalang",
          "Suka Maju",
          "Teluk Bakung"
        ]
      }
    ]
  },
  {
    "wilayah": "Deli Serdang",
    "jenis": "Kabupaten",
    "slugs": ["deli-serdang"],
    "kecamatan": [
      {
        "nama_kecamatan": "Lubuk Pakam",
        "kelurahan_desa": [
          "Lubuk Pakam Pekan",
          "Lubuk Pakam I",
          "Lubuk Pakam II",
          "Bakaran Batu",
          "Tanjung Garbus Sekip",
          "Paluh Manan"
        ]
      },
      {
        "nama_kecamatan": "Tanjung Morawa",
        "kelurahan_desa": [
          "Tanjung Morawa Pekan",
          "Tanjung Morawa A",
          "Tanjung Morawa B",
          "Dalu X A",
          "Dalu X B",
          "Limau Manis",
          "Waspada"
        ]
      }
    ]
  },
  {
    "wilayah": "Asahan",
    "jenis": "Kabupaten",
    "slugs": ["asahan"],
    "kecamatan": [
      {
        "nama_kecamatan": "Kisaran Barat",
        "kelurahan_desa": [
          "Kisaran Barat",
          "Kisaran Kota",
          "Dadap Mulyo",
          "Bunut",
          "Bunut Barat",
          "Sidodadi",
          "Sidomukti"
        ]
      },
      {
        "nama_kecamatan": "Kisaran Timur",
        "kelurahan_desa": [
          "Kisaran Timur",
          "Kisaran Naga",
          "Mutiara",
          "Lestari",
          "Teladan",
          "Gambir Baru",
          "Selawan"
        ]
      }
    ]
  },
  {
    "wilayah": "Kisaran",
    "jenis": "Kota / Kawasan Utama",
    "slugs": ["kisaran"],
    "kecamatan": [
      {
        "nama_kecamatan": "Kisaran Barat",
        "kelurahan_desa": [
          "Kisaran Barat",
          "Kisaran Kota",
          "Dadap Mulyo",
          "Bunut",
          "Sidodadi"
        ]
      },
      {
        "nama_kecamatan": "Kisaran Timur",
        "kelurahan_desa": [
          "Kisaran Timur",
          "Kisaran Naga",
          "Mutiara",
          "Lestari",
          "Teladan"
        ]
      }
    ]
  },
  {
    "wilayah": "Batubara",
    "jenis": "Kabupaten",
    "slugs": ["batubara"],
    "kecamatan": [
      {
        "nama_kecamatan": "Lima Puluh",
        "kelurahan_desa": [
          "Lima Puluh Kota",
          "Perkebunan Lima Puluh",
          "Sumber Padi",
          "Kwala Gunung",
          "Empat Negeri"
        ]
      },
      {
        "nama_kecamatan": "Sei Suka",
        "kelurahan_desa": [
          "Sei Suka Deras",
          "Tanjung Gading",
          "Perkebunan Sei Suka",
          "Simpang Kopi",
          "Kuala Tanjung"
        ]
      }
    ]
  },
  {
    "wilayah": "Sei Semangkei (Kabupaten Simalungun)",
    "jenis": "Kawasan Industri / Desa Utama",
    "slugs": ["sei-semangkei"],
    "kecamatan": [
      {
        "nama_kecamatan": "Bosar Maligas",
        "kelurahan_desa": [
          "Sei Semangkei",
          "Bosar Maligas",
          "Mayang",
          "Gunung Bayu",
          "Nantalu"
        ]
      }
    ]
  },
  {
    "wilayah": "Aceh Singkil",
    "jenis": "Kabupaten",
    "slugs": ["aceh-singkil"],
    "kecamatan": [
      {
        "nama_kecamatan": "Singkil",
        "kelurahan_desa": [
          "Singkil Utara",
          "Pulo Sarok",
          "Pasar Singkil",
          "Ujung",
          "Kuta Simboling",
          "Rantau Panjang"
        ]
      },
      {
        "nama_kecamatan": "Gunung Meriah",
        "kelurahan_desa": [
          "Rimo",
          "Tunas Harapan",
          "Lae Butar",
          "Sidorejo",
          "Sipospos",
          "Sugihen"
        ]
      }
    ]
  },
  {
    "wilayah": "Aceh Barat",
    "jenis": "Kabupaten",
    "slugs": ["aceh-barat"],
    "kecamatan": [
      {
        "nama_kecamatan": "Johan Pahlawan (Meulaboh)",
        "kelurahan_desa": [
          "Ujong Kalak",
          "Daka",
          "Kuta Padang",
          "Pasar Aceh",
          "Kampung Lapang",
          "Seuneubok",
          "Panggau"
        ]
      },
      {
        "nama_kecamatan": "Kaway XVI",
        "kelurahan_desa": [
          "Keude Aron",
          "Beureugang",
          "Marek",
          "Padang Mancang",
          "Pasi Pinang"
        ]
      }
    ]
  },
  {
    "wilayah": "Nagan Raya",
    "jenis": "Kabupaten",
    "slugs": ["nagan-raya"],
    "kecamatan": [
      {
        "nama_kecamatan": "Suka Makmue",
        "kelurahan_desa": [
          "Lueng Baro",
          "Suka Makmue",
          "Kabu",
          "Kutaraja",
          "Simpang Dua"
        ]
      },
      {
        "nama_kecamatan": "Seunagan",
        "kelurahan_desa": [
          "Jeuram",
          "Parom",
          "Paya Undan",
          "Kapeh",
          "Rambong"
        ]
      }
    ]
  },
  {
    "wilayah": "Tapanuli",
    "jenis": "Kawasan (Tapanuli Selatan / Tengah / Utara)",
    "slugs": ["tapanuli"],
    "kecamatan": [
      {
        "nama_kecamatan": "Tarutung (Tapanuli Utara)",
        "kelurahan_desa": [
          "Tarutung Kota",
          "Hutatorop",
          "Partali Julu",
          "Sipoholon",
          "Hutauruk"
        ]
      },
      {
        "nama_kecamatan": "Pandan (Tapanuli Tengah)",
        "kelurahan_desa": [
          "Pandan",
          "Aek Tolang",
          "Kalangan",
          "Luhut",
          "Pasar Baru"
        ]
      },
      {
        "nama_kecamatan": "Sipirok (Tapanuli Selatan)",
        "kelurahan_desa": [
          "Sipirok Godang",
          "Pasar Sipirok",
          "Huta Raja"
        ]
      }
    ]
  },
  {
    "wilayah": "Musi Banyuasin",
    "jenis": "Kabupaten",
    "slugs": ["musi-banyuasin"],
    "kecamatan": [
      {
        "nama_kecamatan": "Sekayu",
        "kelurahan_desa": [
          "Sekayu",
          "Kayu Ara",
          "Balai Agung",
          "Serasan Jaya",
          "Soak Baru",
          "Lais",
          "Muara Teladan"
        ]
      },
      {
        "nama_kecamatan": "Bayung Lencir",
        "kelurahan_desa": [
          "Bayung Lencir",
          "Bayung Lencir Indah",
          "Mendis",
          "Muara Medak",
          "Sukajaya"
        ]
      }
    ]
  },
  {
    "wilayah": "Sekayu",
    "jenis": "Kota / Kecamatan Utama",
    "slugs": ["sekayu"],
    "kecamatan": [
      {
        "nama_kecamatan": "Sekayu",
        "kelurahan_desa": [
          "Sekayu",
          "Kayu Ara",
          "Balai Agung",
          "Serasan Jaya",
          "Soak Baru",
          "Lais",
          "Muara Teladan"
        ]
      }
    ]
  },
  {
    "wilayah": "Dairi",
    "jenis": "Kabupaten",
    "slugs": ["dairi"],
    "kecamatan": [
      {
        "nama_kecamatan": "Sidikalang",
        "kelurahan_desa": [
          "Sidikalang",
          "Batang Beruh",
          "Bintang",
          "Hutarakyat",
          "Kuta Gambir",
          "Pasar Sidikalang",
          "Sidakal 1"
        ]
      },
      {
        "nama_kecamatan": "Sumbul",
        "kelurahan_desa": [
          "Sumbul",
          "Pegagan Julu I",
          "Pegagan Julu II",
          "Tanjung Beringin",
          "Sipoltong"
        ]
      }
    ]
  },
  {
    "wilayah": "Karo",
    "jenis": "Kabupaten",
    "slugs": ["karo"],
    "kecamatan": [
      {
        "nama_kecamatan": "Kabanjahe",
        "kelurahan_desa": [
          "Kabanjahe",
          "Gung Leto",
          "Gung Negeri",
          "Lau Cimba",
          "Padang Mas",
          "Kampung Dalam"
        ]
      },
      {
        "nama_kecamatan": "Berastagi",
        "kelurahan_desa": [
          "Berastagi",
          "Gundaling I",
          "Gundaling II",
          "Raya",
          "Tambak Lau Mulgap I",
          "Lau Gumba"
        ]
      }
    ]
  },
  {
    "wilayah": "Tanjung Jabung",
    "jenis": "Kawasan (Tanjung Jabung Barat / Timur)",
    "slugs": ["tanjung-jabung"],
    "kecamatan": [
      {
        "nama_kecamatan": "Tungkal Ilir (Tanjung Jabung Barat)",
        "kelurahan_desa": [
          "Tungkal I",
          "Tungkal II",
          "Tungkal III",
          "Tungkal IV",
          "Tungkal Harapan",
          "Kampung Nelayan"
        ]
      },
      {
        "nama_kecamatan": "Muara Sabak Timur (Tanjung Jabung Timur)",
        "kelurahan_desa": [
          "Muara Sabak Ilir",
          "Muara Sabak Ulu",
          "Tanjung Solok",
          "Alang-Alang",
          "Lambur"
        ]
      }
    ]
  },
  {
    "wilayah": "Dharmasraya",
    "jenis": "Kabupaten",
    "slugs": ["dharmasraya"],
    "kecamatan": [
      {
        "nama_kecamatan": "Pulau Punjung",
        "kelurahan_desa": [
          "Pulau Punjung",
          "Sungai Dari",
          "IV Koto Pulau Punjung",
          "Sikabau",
          "Sungai Kambut"
        ]
      },
      {
        "nama_kecamatan": "Koto Baru",
        "kelurahan_desa": [
          "Koto Baru",
          "Ampang Kuranji",
          "Sitiung",
          "Tiumang"
        ]
      }
    ]
  },
  {
    "wilayah": "Lahat",
    "jenis": "Kabupaten",
    "slugs": ["lahat"],
    "kecamatan": [
      {
        "nama_kecamatan": "Lahat",
        "kelurahan_desa": [
          "Lahat Tengah",
          "Pasar Baru",
          "Bandar Jaya",
          "Kota Baru",
          "Rawa Lebar",
          "Talang Jawa",
          "Pagar Agung"
        ]
      },
      {
        "nama_kecamatan": "Merapi Barat",
        "kelurahan_desa": [
          "Merapi",
          "Banjarsari",
          "Lebuay Bandung",
          "Muara Maung",
          "Telatan"
        ]
      }
    ]
  },
  {
    "wilayah": "Bengkalis",
    "jenis": "Kabupaten",
    "slugs": ["bengkalis"],
    "kecamatan": [
      {
        "nama_kecamatan": "Bengkalis",
        "kelurahan_desa": [
          "Bengkalis Kota",
          "Damon",
          "Rimba Sekampung",
          "Kelapapati",
          "Senggoro",
          "Air Putih",
          "Sebangar"
        ]
      },
      {
        "nama_kecamatan": "Mandau (Duri)",
        "kelurahan_desa": [
          "Duri Barat",
          "Duri Timur",
          "Gajah Sakti",
          "Pematang Pudu",
          "Balik Alam",
          "Babussalam"
        ]
      }
    ]
  },
  {
    "wilayah": "Indragiri Hulu & Hilir",
    "jenis": "Kawasan (Kab. Indragiri Hulu & Indragiri Hilir)",
    "slugs": ["indragiri"],
    "kecamatan": [
      {
        "nama_kecamatan": "Rengat (Indragiri Hulu)",
        "kelurahan_desa": [
          "Rengat Kota",
          "Kampung Besar Kota",
          "Sekip Hilir",
          "Sekip Hulu",
          "Pematang Reba"
        ]
      },
      {
        "nama_kecamatan": "Tembilahan (Indragiri Hilir)",
        "kelurahan_desa": [
          "Tembilahan Kota",
          "Tembilahan Hilir",
          "Seberang Tembilahan",
          "Pekan Arba",
          "Sungai Perak"
        ]
      }
    ]
  },
  {
    "wilayah": "Kampar",
    "jenis": "Kabupaten",
    "slugs": ["kampar"],
    "kecamatan": [
      {
        "nama_kecamatan": "Bangkinang Kota",
        "kelurahan_desa": [
          "Bangkinang",
          "Langgini",
          "Kumantan",
          "Ridan Permai"
        ]
      },
      {
        "nama_kecamatan": "Siak Hulu",
        "kelurahan_desa": [
          "Pangkalan Baru",
          "Pandau Jaya",
          "Kubang Jaya",
          "Desa Baru",
          "Teratak Buluh"
        ]
      }
    ]
  },
  {
    "wilayah": "Pelalawan",
    "jenis": "Kabupaten",
    "slugs": ["pelalawan"],
    "kecamatan": [
      {
        "nama_kecamatan": "Pangkalan Kerinci",
        "kelurahan_desa": [
          "Pangkalan Kerinci Kota",
          "Pangkalan Kerinci Barat",
          "Pangkalan Kerinci Timur",
          "Makmur",
          "Rawaang Empat"
        ]
      },
      {
        "nama_kecamatan": "Pangkalan Kuras",
        "kelurahan_desa": [
          "Sorek Satu",
          "Sorek Dua",
          "Batang Kulim",
          "Dundu",
          "Kemuning"
        ]
      }
    ]
  },
  {
    "wilayah": "Rokan Hulu & Hilir",
    "jenis": "Kawasan (Kab. Rokan Hulu & Rokan Hilir)",
    "slugs": ["rokan"],
    "kecamatan": [
      {
        "nama_kecamatan": "Rambah (Pasir Pengaraian / Rokan Hulu)",
        "kelurahan_desa": [
          "Pasir Pengaraian",
          "Kunto Utama",
          "Rambah",
          "Pematang Berangan"
        ]
      },
      {
        "nama_kecamatan": "Bagan Sinembah (Bagan Batu / Rokan Hilir)",
        "kelurahan_desa": [
          "Bagan Batu",
          "Bagan Sinembah",
          "Bahtera Makmur",
          "Pelita",
          "Suka Maju"
        ]
      }
    ]
  },
  {
    "wilayah": "Siak",
    "jenis": "Kabupaten",
    "slugs": ["siak"],
    "kecamatan": [
      {
        "nama_kecamatan": "Siak",
        "kelurahan_desa": [
          "Kampung Dalam",
          "Kampung Rempak",
          "Maredan",
          "Suak Lanjut",
          "Tumang"
        ]
      },
      {
        "nama_kecamatan": "Tualang (Perawang)",
        "kelurahan_desa": [
          "Perawang",
          "Perawang Barat",
          "Tualang",
          "Pinang Sebatang",
          "Maredan Barat"
        ]
      }
    ]
  },
  {
    "wilayah": "Karimun",
    "jenis": "Kabupaten",
    "slugs": ["karimun"],
    "kecamatan": [
      {
        "nama_kecamatan": "Karimun",
        "kelurahan_desa": [
          "Tanjung Balai",
          "Tanjung Balai Kota",
          "Lubuk Pukam",
          "Teluk Air",
          "Sungai Lakam"
        ]
      },
      {
        "nama_kecamatan": "Tebing",
        "kelurahan_desa": [
          "Tebing",
          "Tebing Tinggi",
          "Harjosari",
          "Kapling",
          "Pamok"
        ]
      }
    ]
  },
  {
    "wilayah": "Batanghari",
    "jenis": "Kabupaten",
    "slugs": ["batanghari"],
    "kecamatan": [
      {
        "nama_kecamatan": "Muara Bulian",
        "kelurahan_desa": [
          "Muara Bulian",
          "Rengas Condong",
          "Teratai",
          "Pasar Baru",
          "Bajubang",
          "Sridadi",
          "Tenam"
        ]
      },
      {
        "nama_kecamatan": "Muara Tembesi",
        "kelurahan_desa": [
          "Muara Tembesi",
          "Passar Muara Tembesi",
          "Rantau Kapas Mudo",
          "Rantau Kapas Tuo",
          "Suka Ramai"
        ]
      }
    ]
  },
  {
    "wilayah": "Morowali",
    "jenis": "Kabupaten",
    "slugs": ["morowali"],
    "kecamatan": [
      {
        "nama_kecamatan": "Bungku Tengah",
        "kelurahan_desa": [
          "Bungku",
          "Bahu Buku",
          "Bente",
          "Ipi",
          "Lanona",
          "Matano",
          "Mendui",
          "Sakita",
          "Tofoiso"
        ]
      },
      {
        "nama_kecamatan": "Bahodopi",
        "kelurahan_desa": [
          "Bahodopi",
          "Bete-Bete",
          "Keurea",
          "Fatufia",
          "Lalampu",
          "Makarti Jaya",
          "Onepute Jaya",
          "Siumbatu"
        ]
      }
    ]
  },
  {
    "wilayah": "Luwuk (Kabupaten Banggai)",
    "jenis": "Kawasan / Kota Utama",
    "slugs": ["luwuk"],
    "kecamatan": [
      {
        "nama_kecamatan": "Luwuk",
        "kelurahan_desa": [
          "Luwuk",
          "Bungin",
          "Bungin Timur",
          "Hanga-Hanga",
          "Kaleke",
          "Keanga",
          "Soakonora",
          "Tuo"
        ]
      },
      {
        "nama_kecamatan": "Luwuk Selatan",
        "kelurahan_desa": [
          "Bubung",
          "Jole",
          "Kompo",
          "Simpong",
          "Tanjung Tuvis",
          "Maahas"
        ]
      },
      {
        "nama_kecamatan": "Luwuk Utara",
        "kelurahan_desa": [
          "Boyou",
          "Biak",
          "Bunar",
          "Kilongan",
          "Kilongan Permai",
          "Laya"
        ]
      }
    ]
  },
  {
    "wilayah": "Banggai",
    "jenis": "Kabupaten",
    "slugs": ["banggai"],
    "kecamatan": [
      {
        "nama_kecamatan": "Banggai",
        "kelurahan_desa": [
          "Banggai",
          "Dodung",
          "Kokini",
          "Lambako",
          "Lulugiyangan",
          "Potil Pololoba",
          "Tammangura"
        ]
      },
      {
        "nama_kecamatan": "Batui",
        "kelurahan_desa": [
          "Batui",
          "Bakung",
          "Batu Laya",
          "Bugis",
          "Kayoa",
          "Lamo",
          "Nonong",
          "Tolando"
        ]
      }
    ]
  },
  {
    "wilayah": "Kolaka",
    "jenis": "Kabupaten",
    "slugs": ["kolaka"],
    "kecamatan": [
      {
        "nama_kecamatan": "Kolaka",
        "kelurahan_desa": [
          "Kolakaasi",
          "Lalombaa",
          "Lamokato",
          "Sabilambo",
          "Tahoa",
          "Watuliandu"
        ]
      },
      {
        "nama_kecamatan": "Pomalaa",
        "kelurahan_desa": [
          "Pomalaa",
          "Dawi-Dawi",
          "Hakatutobu",
          "Kumoro",
          "Pesouha",
          "Tambea",
          "Tonggoni"
        ]
      }
    ]
  },
  {
    "wilayah": "Konawe",
    "jenis": "Kabupaten",
    "slugs": ["konawe"],
    "kecamatan": [
      {
        "nama_kecamatan": "Unaaha",
        "kelurahan_desa": [
          "Unaaha",
          "Ambekairi",
          "Asinua",
          "Inolobu",
          "Latoma",
          "Puunaaha",
          "Tuo",
          "Wawonggole"
        ]
      },
      {
        "nama_kecamatan": "Morosi",
        "kelurahan_desa": [
          "Morosi",
          "Batusore",
          "Besu",
          "Mekar Jaya",
          "Paku",
          "Porara",
          "Tanggondoke"
        ]
      }
    ]
  },
  {
    "wilayah": "Buol",
    "jenis": "Kabupaten",
    "slugs": ["buol"],
    "kecamatan": [
      {
        "nama_kecamatan": "Biau",
        "kelurahan_desa": [
          "Buol",
          "Bugas",
          "Kali",
          "Kulango",
          "Leok I",
          "Leok II",
          "Kumang",
          "Tuo"
        ]
      },
      {
        "nama_kecamatan": "Momunu",
        "kelurahan_desa": [
          "Momunu",
          "Lamadong I",
          "Lamadong II",
          "Mangubi",
          "Pinamula",
          "Suraya"
        ]
      }
    ]
  },
  {
    "wilayah": "Donggala",
    "jenis": "Kabupaten",
    "slugs": ["donggala"],
    "kecamatan": [
      {
        "nama_kecamatan": "Banawa",
        "kelurahan_desa": [
          "Boya",
          "Ganti",
          "Kabonga Besar",
          "Kabonga Kecil",
          "Kawatuna",
          "Labuan Bajo",
          "Maleni",
          "Tanjung Batu"
        ]
      },
      {
        "nama_kecamatan": "Labuan",
        "kelurahan_desa": [
          "Labuan",
          "Labuan Lelea",
          "Labuan Panimba",
          "Labuan Salumbone",
          "Labuan Toposo"
        ]
      }
    ]
  },
  {
    "wilayah": "Parigi Moutong",
    "jenis": "Kabupaten",
    "slugs": ["parigi-moutong"],
    "kecamatan": [
      {
        "nama_kecamatan": "Parigi",
        "kelurahan_desa": [
          "Parigi",
          "Bambalemo",
          "Lage",
          "Masigi",
          "Mascot",
          "Pemu",
          "Tinimbo"
        ]
      },
      {
        "nama_kecamatan": "Moutong",
        "kelurahan_desa": [
          "Moutong Tengah",
          "Moutong Barat",
          "Moutong Timur",
          "Lobu",
          "Sejoli",
          "Talon"
        ]
      }
    ]
  },
  {
    "wilayah": "Bolaang Mongondow",
    "jenis": "Kabupaten",
    "slugs": ["bolaang-mongondow"],
    "kecamatan": [
      {
        "nama_kecamatan": "Lolak",
        "kelurahan_desa": [
          "Lolak",
          "Lolak II",
          "Bambalo",
          "Bungko",
          "Labuahan",
          "Mongkoinit",
          "Pinogaluman",
          "Tuduaog"
        ]
      },
      {
        "nama_kecamatan": "Dumoga",
        "kelurahan_desa": [
          "Dumoga",
          "Pusian",
          "Serasi",
          "Toraut",
          "Welo"
        ]
      }
    ]
  },
  {
    "wilayah": "Kotamobagu",
    "jenis": "Kota",
    "slugs": ["kotamobagu"],
    "kecamatan": [
      {
        "nama_kecamatan": "Kotamobagu Barat",
        "kelurahan_desa": [
          "Kotamobagu",
          "Gogagoman",
          "Molinow",
          "Mongkonai",
          "Mogolaing"
        ]
      },
      {
        "nama_kecamatan": "Kotamobagu Timur",
        "kelurahan_desa": [
          "Kobo Besar",
          "Kobo Kecil",
          "Matali",
          "Motonboi Besar",
          "Sinindia"
        ]
      }
    ]
  },
  {
    "wilayah": "Majene",
    "jenis": "Kabupaten",
    "slugs": ["majene"],
    "kecamatan": [
      {
        "nama_kecamatan": "Banggae",
        "kelurahan_desa": [
          "Banggae",
          "Bangsri",
          "Galung",
          "Labuang",
          "Pangali-Ali",
          "Rangas",
          "Totoli"
        ]
      },
      {
        "nama_kecamatan": "Banggae Timur",
        "kelurahan_desa": [
          "Baruga",
          "Baurung",
          "Labuang Utara",
          "Lembang",
          "Tande",
          "Tande Timur"
        ]
      }
    ]
  },
  {
    "wilayah": "Mamasa",
    "jenis": "Kabupaten",
    "slugs": ["mamasa"],
    "kecamatan": [
      {
        "nama_kecamatan": "Mamasa",
        "kelurahan_desa": [
          "Mamasa",
          "Bomba",
          "Lembanan",
          "Osango",
          "Rantebalang",
          "Tawalian"
        ]
      },
      {
        "nama_kecamatan": "Sumarorong",
        "kelurahan_desa": [
          "Sumarorong",
          "Baji Pa'mai",
          "Bala",
          "Rante Kamase",
          "Sasa"
        ]
      }
    ]
  },
  {
    "wilayah": "Polewali Mandar",
    "jenis": "Kabupaten",
    "slugs": ["polewali-mandar"],
    "kecamatan": [
      {
        "nama_kecamatan": "Polewali",
        "kelurahan_desa": [
          "Polewali",
          "Lantora",
          "Madatte",
          "Pekkabata",
          "Sulewatang",
          "Wattang"
        ]
      },
      {
        "nama_kecamatan": "Wonomulyo",
        "kelurahan_desa": [
          "Sidodadi",
          "Campurjo",
          "Mapilli",
          "Sugihwaras",
          "Sumberjo",
          "Tumpiling"
        ]
      }
    ]
  },
  {
    "wilayah": "Buton",
    "jenis": "Kabupaten",
    "slugs": ["buton"],
    "kecamatan": [
      {
        "nama_kecamatan": "Pasarwajo",
        "kelurahan_desa": [
          "Pasarwajo",
          "Kambula-Mbulana",
          "Kumbewaha",
          "Mantasigala",
          "Saragi",
          "Takimpo",
          "Wabula"
        ]
      },
      {
        "nama_kecamatan": "Lasalimu",
        "kelurahan_desa": [
          "Lasalimu",
          "Kamaru",
          "Kakenauwe",
          "Lawele",
          "Nambo"
        ]
      }
    ]
  },
  {
    "wilayah": "Halmahera",
    "jenis": "Kawasan (Halmahera Barat, Tengah, Utara, Selatan)",
    "slugs": ["halmahera", "halmahera-barat", "halmahera-tengah", "halmahera-utara", "halmahera-selatan"],
    "kecamatan": [
      {
        "nama_kecamatan": "Jailolo (Halmahera Barat)",
        "kelurahan_desa": [
          "Jailolo",
          "Gufasa",
          "Soakonora",
          "Hapu",
          "Tuada"
        ]
      },
      {
        "nama_kecamatan": "Tobelo (Halmahera Utara)",
        "kelurahan_desa": [
          "Tobelo Kota",
          "Gura",
          "Gitu",
          "Kakara",
          "Rawamangun",
          "Wari"
        ]
      },
      {
        "nama_kecamatan": "Weda (Halmahera Tengah)",
        "kelurahan_desa": [
          "Weda",
          "Fitu",
          "Goeng",
          "Kobe",
          "Lelilef Sawai",
          "Lelilef Waibulen",
          "Nurweda"
        ]
      },
      {
        "nama_kecamatan": "Labuha (Halmahera Selatan)",
        "kelurahan_desa": [
          "Labuha",
          "Amasing Kota",
          "Amasing Kali",
          "Bacan",
          "Mandaong"
        ]
      }
    ]
  },
  {
    "wilayah": "Weda (Kabupaten Halmahera Tengah)",
    "jenis": "Kawasan / Kecamatan Utama",
    "slugs": ["weda"],
    "kecamatan": [
      {
        "nama_kecamatan": "Weda",
        "kelurahan_desa": [
          "Weda",
          "Fitu",
          "Goeng",
          "Kobe",
          "Nurweda",
          "Were"
        ]
      },
      {
        "nama_kecamatan": "Weda Tengah",
        "kelurahan_desa": [
          "Lelilef Sawai",
          "Lelilef Waibulen",
          "Kobe Kote",
          "Lokai",
          "Wairoro"
        ]
      }
    ]
  },
  {
    "wilayah": "Kabupaten Seram",
    "jenis": "Kawasan (Seram Bagian Barat / Timur)",
    "slugs": ["kabupaten-seram"],
    "kecamatan": [
      {
        "nama_kecamatan": "Piru (Seram Bagian Barat)",
        "kelurahan_desa": [
          "Piru",
          "Eti",
          "Kaibobu",
          "Kairatu",
          "Lumu-Lumu",
          "Morekau"
        ]
      },
      {
        "nama_kecamatan": "Bula (Seram Bagian Timur)",
        "kelurahan_desa": [
          "Bula",
          "Bula Air",
          "Englas",
          "Limumir",
          "Salaroin"
        ]
      }
    ]
  },
  {
    "wilayah": "Dompu",
    "jenis": "Kabupaten",
    "slugs": ["dompu"],
    "kecamatan": [
      {
        "nama_kecamatan": "Dompu",
        "kelurahan_desa": [
          "Dompu",
          "Bada",
          "Bali",
          "Dorotangga",
          "Karijawa",
          "Potu",
          "Sada",
          "Simpasai"
        ]
      },
      {
        "nama_kecamatan": "Pekat",
        "kelurahan_desa": [
          "Pekat",
          "Calabai",
          "Doropeti",
          "Kadindi",
          "Nanga Kara",
          "Sorinomo"
        ]
      }
    ]
  },
  {
    "wilayah": "Bima",
    "jenis": "Kabupaten / Kota",
    "slugs": ["bima"],
    "kecamatan": [
      {
        "nama_kecamatan": "Rasanae Barat (Kota Bima)",
        "kelurahan_desa": [
          "Dara",
          "Melayu",
          "Pane",
          "Paruga",
          "Tanjung",
          "Ngeos"
        ]
      },
      {
        "nama_kecamatan": "Woha (Kabupaten Bima)",
        "kelurahan_desa": [
          "Tente",
          "Keli",
          "Naru",
          "Nisa",
          "Penapali",
          "Rabakodo",
          "Risa"
        ]
      }
    ]
  },
  {
    "wilayah": "Lombok",
    "jenis": "Pulau / Kawasan (Lombok Barat, Tengah, Timur, Utara)",
    "slugs": ["lombok"],
    "kecamatan": [
      {
        "nama_kecamatan": "Mataram (Kota Mataram)",
        "kelurahan_desa": [
          "Mataram Barat",
          "Mataram Timur",
          "Pageutan",
          "Pejanggik",
          "Punia",
          "Sangkarang"
        ]
      },
      {
        "nama_kecamatan": "Praya (Lombok Tengah)",
        "kelurahan_desa": [
          "Praya",
          "Gerunung",
          "Gonjak",
          "Jontlak",
          "Mentarang",
          "Tiugaras"
        ]
      },
      {
        "nama_kecamatan": "Selong (Lombok Timur)",
        "kelurahan_desa": [
          "Selong",
          "Kelayu Utara",
          "Kelayu Selatan",
          "Kembang Sari",
          "Majidi",
          "Pancor"
        ]
      }
    ]
  },
  {
    "wilayah": "Ende",
    "jenis": "Kabupaten",
    "slugs": ["ende"],
    "kecamatan": [
      {
        "nama_kecamatan": "Ende Selatan",
        "kelurahan_desa": [
          "Ende",
          "Mbongawani",
          "Paupanda",
          "Ratu",
          "Teti",
          "Tetandara"
        ]
      },
      {
        "nama_kecamatan": "Ende Timur",
        "kelurahan_desa": [
          "Kedebodu",
          "Lio Karia",
          "Mautapaga",
          "Ndona",
          "Rewarangga"
        ]
      }
    ]
  },
  {
    "wilayah": "Mimika",
    "jenis": "Kabupaten",
    "slugs": ["mimika"],
    "kecamatan": [
      {
        "nama_kecamatan": "Mimika Baru (Timika)",
        "kelurahan_desa": [
          "Timika Jaya",
          "Dingo Narama",
          "Hangaitji",
          "Kwamki",
          "Nayarua",
          "Otuka",
          "Passir Putih",
          "Sempan",
          "Wanagon"
        ]
      },
      {
        "nama_kecamatan": "Kuala Kencana",
        "kelurahan_desa": [
          "Kuala Kencana",
          "Bhofo Wiro",
          "Caritas",
          "Jimikigimi",
          "Kwamki Narama",
          "Lani"
        ]
      }
    ]
  },
  {
    "wilayah": "Bintuni (Kabupaten Teluk Bintuni)",
    "jenis": "Kabupaten",
    "slugs": ["bintuni"],
    "kecamatan": [
      {
        "nama_kecamatan": "Bintuni",
        "kelurahan_desa": [
          "Bintuni Barat",
          "Bintuni Timur",
          "Beimes",
          "Iguravia",
          "Nusa",
          "Venu"
        ]
      },
      {
        "nama_kecamatan": "Manimeri",
        "kelurahan_desa": [
          "Banjar Ausoy",
          "Bumi Sarsa",
          "Manimeri",
          "Pasamai",
          "Tiro"
        ]
      }
    ]
  },
  {
    "wilayah": "Pulau Matak (Kabupaten Kepulauan Anambas)",
    "jenis": "Kawasan / Pulau",
    "slugs": ["pulau-matak"],
    "kecamatan": [
      {
        "nama_kecamatan": "Palmatak",
        "kelurahan_desa": [
          "Tebang",
          "Ladan",
          "Matak",
          "Payamaram",
          "Piapas",
          "Putik"
        ]
      },
      {
        "nama_kecamatan": "Kute Siantan",
        "kelurahan_desa": [
          "Payakulam",
          "Batu Ampar",
          "Teluk Bayur"
        ]
      }
    ]
  }
];

// Load existing kecamatan.json
const existingKec = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'kecamatan.json'), 'utf8'));

// Result dictionary: citySlug -> Array<{ nama_kecamatan: string, kelurahan_desa: string[] }>
const resultMap = {};

// 1. Process existing kecamatan strings
for (const [slug, kecList] of Object.entries(existingKec)) {
  if (Array.isArray(kecList)) {
    resultMap[slug] = kecList.map(item => {
      if (typeof item === 'string') {
        return { nama_kecamatan: item, kelurahan_desa: [] };
      }
      return item;
    });
  }
}

// 2. Overwrite / merge with inputData
for (const item of inputData) {
  for (const slug of item.slugs) {
    resultMap[slug] = item.kecamatan;
  }
}

// Write to data/kecamatan.json
const targetFile = path.join(__dirname, '..', 'data', 'kecamatan.json');
fs.writeFileSync(targetFile, JSON.stringify(resultMap, null, 2), 'utf8');

console.log('Successfully written kecamatan.json with', Object.keys(resultMap).length, 'city keys!');
