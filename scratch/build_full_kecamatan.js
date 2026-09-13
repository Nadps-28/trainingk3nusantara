const fs = require('fs');
const path = require('path');

const userRaw = JSON.parse(fs.readFileSync(path.join(__dirname, 'user_raw_data.json'), 'utf8'));
const kotaData = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'kota.json'), 'utf8'));
let existingKec = {};
try {
  existingKec = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'kecamatan.json'), 'utf8'));
} catch (e) {}

// Map of region names to city slugs in kotaData
function getSlugsForWilayah(wilayah) {
  const result = [];
  const lower = wilayah.toLowerCase().trim();

  // Explicit mappings to city slugs in kota.json
  if (lower.includes('batulicin')) { result.push('batulicin', 'tanah-bumbu'); }
  if (lower.includes('kutai kartanegara')) { result.push('kutai-kartanegara'); }
  if (lower.includes('sangatta')) { result.push('sangatta', 'kutai-timur'); }
  if (lower.includes('berau')) { result.push('berau'); }
  if (lower.includes('tenggarong')) { result.push('tenggarong'); }
  if (lower.includes('melawi')) { result.push('melawi'); }
  if (lower.includes('sambas')) { result.push('sambas'); }
  if (lower.includes('sanggau')) { result.push('sanggau'); }
  if (lower.includes('sintang')) { result.push('sintang'); }
  if (lower.includes('kapuas hulu')) { result.push('kapuas-hulu', 'kapuas'); }
  if (lower.includes('kayong utara')) { result.push('kayong-utara'); }
  if (lower.includes('bengkayang')) { result.push('bengkayang'); }
  if (lower.includes('mempawah')) { result.push('mempawah'); }
  if (lower.includes('landak')) { result.push('landak'); }
  if (lower.includes('ngabang')) { result.push('ngabang'); }
  if (lower.includes('sukamara')) { result.push('sukamara'); }
  if (lower.includes('gunung mas')) { result.push('gunung-mas'); }
  if (lower.includes('lamandau')) { result.push('lamandau'); }
  if (lower.includes('katingan')) { result.push('katingan'); }
  if (lower.includes('murung raya')) { result.push('murung-raya'); }
  if (lower.includes('seruyan')) { result.push('seruyan'); }
  if (lower.includes('tana tidung')) { result.push('tana-tidung'); }
  if (lower.includes('nunukan')) { result.push('nunukan'); }
  if (lower.includes('bulungan')) { result.push('bulungan'); }
  if (lower.includes('kutai timur') && !result.includes('kutai-timur')) { result.push('kutai-timur'); }
  if (lower.includes('kutai barat')) { result.push('kutai-barat', 'melak'); }
  if (lower.includes('paser') && !lower.includes('penajam')) { result.push('paser'); }
  if (lower.includes('mahakam ulu')) { result.push('mahakam-ulu'); }
  if (lower.includes('pulau laut')) { result.push('pulau-laut', 'kotabaru'); }
  if (lower.includes('hulu sungai selatan')) { result.push('hulu-sungai-selatan'); }
  if (lower.includes('hulu sungai tengah')) { result.push('hulu-sungai-tengah'); }
  if (lower.includes('banjar') && !lower.includes('banjarnegara') && !lower.includes('banjarbaru')) { result.push('banjar'); }
  if (lower.includes('balangan')) { result.push('balangan'); }
  if (lower.includes('tapin')) { result.push('tapin'); }
  if (lower.includes('tabalong')) { result.push('tabalong'); }
  if (lower.includes('penajam paser utara')) { result.push('penajam-paser-utara'); }
  if (lower.includes('kubu raya')) { result.push('kubu-raya'); }
  if (lower.includes('subang')) { result.push('subang'); }
  if (lower.includes('purwakarta')) { result.push('purwakarta'); }
  if (lower.includes('cilacap')) { result.push('cilacap'); }
  if (lower.includes('batang') && !lower.includes('batanghari')) { result.push('batang'); }
  if (lower.includes('sidoarjo')) { result.push('sidoarjo'); }
  if (lower.includes('banyuwangi')) { result.push('banyuwangi'); }
  if (lower.includes('lamongan')) { result.push('lamongan'); }
  if (lower.includes('tuban')) { result.push('tuban'); }
  if (lower.includes('demak')) { result.push('demak'); }
  if (lower.includes('kendal')) { result.push('kendal'); }
  if (lower.includes('pandeglang')) { result.push('pandeglang'); }
  if (lower.includes('lebak')) { result.push('lebak'); }
  if (lower.includes('garut')) { result.push('garut'); }
  if (lower.includes('cianjur')) { result.push('cianjur'); }
  if (lower.includes('wonogiri')) { result.push('wonogiri'); }
  if (lower.includes('kebumen')) { result.push('kebumen'); }
  if (lower.includes('banjarnegara')) { result.push('banjarnegara'); }
  if (lower.includes('lumajang')) { result.push('lumajang'); }
  if (lower.includes('jember')) { result.push('jember'); }
  if (lower.includes('pacitan')) { result.push('pacitan'); }
  if (lower.includes('jombang')) { result.push('jombang'); }
  if (lower.includes('cepu')) { result.push('cepu'); }
  if (lower.includes('pulau madura')) { result.push('pulau-madura'); }
  if (lower.includes('bali')) { result.push('bali'); }
  if (lower.includes('muara enim')) { result.push('muara-enim'); }
  if (lower.includes('bangka belitung')) { result.push('bangka-belitung'); }
  if (lower.includes('sungai liat')) { result.push('sungai-liat'); }
  if (lower.includes('langkat')) { result.push('langkat'); }
  if (lower.includes('deli serdang')) { result.push('deli-serdang'); }
  if (lower.includes('asahan')) { result.push('asahan'); }
  if (lower.includes('kisaran')) { result.push('kisaran'); }
  if (lower.includes('batubara')) { result.push('batubara'); }
  if (lower.includes('sei semangkei')) { result.push('sei-semangkei'); }
  if (lower.includes('aceh singkil')) { result.push('aceh-singkil'); }
  if (lower.includes('aceh barat')) { result.push('aceh-barat'); }
  if (lower.includes('nagan raya')) { result.push('nagan-raya'); }
  if (lower.includes('tapanuli')) { result.push('tapanuli'); }
  if (lower.includes('musi banyuasin')) { result.push('musi-banyuasin'); }
  if (lower.includes('sekayu')) { result.push('sekayu'); }
  if (lower.includes('dairi')) { result.push('dairi'); }
  if (lower.includes('karo')) { result.push('karo'); }
  if (lower.includes('tanjung jabung')) { result.push('tanjung-jabung'); }
  if (lower.includes('dharmasraya')) { result.push('dharmasraya'); }
  if (lower.includes('lahat')) { result.push('lahat'); }
  if (lower.includes('bengkalis')) { result.push('bengkalis'); }
  if (lower.includes('indragiri')) { result.push('indragiri'); }
  if (lower.includes('kampar')) { result.push('kampar'); }
  if (lower.includes('pelalawan')) { result.push('pelalawan'); }
  if (lower.includes('rokan')) { result.push('rokan'); }
  if (lower.includes('siak')) { result.push('siak'); }
  if (lower.includes('karimun')) { result.push('karimun'); }
  if (lower.includes('batanghari')) { result.push('batanghari'); }
  if (lower.includes('morowali')) { result.push('morowali'); }
  if (lower.includes('luwuk')) { result.push('luwuk'); }
  if (lower.includes('banggai') && !result.includes('banggai')) { result.push('banggai'); }
  if (lower.includes('kolaka')) { result.push('kolaka'); }
  if (lower.includes('konawe')) { result.push('konawe'); }
  if (lower.includes('buol')) { result.push('buol'); }
  if (lower.includes('donggala')) { result.push('donggala'); }
  if (lower.includes('parigi moutong')) { result.push('parigi-moutong'); }
  if (lower.includes('bolaang mongondow')) { result.push('bolaang-mongondow'); }
  if (lower.includes('kotamobagu')) { result.push('kotamobagu'); }
  if (lower.includes('majene')) { result.push('majene'); }
  if (lower.includes('mamasa')) { result.push('mamasa'); }
  if (lower.includes('polewali mandar')) { result.push('polewali-mandar'); }
  if (lower.includes('buton')) { result.push('buton'); }
  if (lower.includes('halmahera')) {
    result.push('halmahera', 'halmahera-barat', 'halmahera-tengah', 'halmahera-utara', 'halmahera-selatan');
  }
  if (lower.includes('weda')) { result.push('weda'); }
  if (lower.includes('kabupaten seram')) { result.push('kabupaten-seram'); }
  if (lower.includes('dompu')) { result.push('dompu'); }
  if (lower.includes('bima')) { result.push('bima'); }
  if (lower.includes('lombok')) { result.push('lombok'); }
  if (lower.includes('ende')) { result.push('ende'); }
  if (lower.includes('mimika')) { result.push('mimika'); }
  if (lower.includes('bintuni')) { result.push('bintuni'); }
  if (lower.includes('pulau matak')) { result.push('pulau-matak'); }

  return Array.from(new Set(result));
}

const finalKecMap = {};

// 1. Process existing kecamatan data first
for (const [slug, val] of Object.entries(existingKec)) {
  if (Array.isArray(val)) {
    finalKecMap[slug] = val.map(item => {
      if (typeof item === 'string') {
        return { nama_kecamatan: item, kelurahan_desa: [] };
      }
      return item;
    });
  }
}

// 2. Process user raw data (overwriting/enriching matched city slugs)
userRaw.forEach(item => {
  const slugs = getSlugsForWilayah(item.wilayah);
  const formattedKecamatan = item.kecamatan.map(k => ({
    nama_kecamatan: k.nama_kecamatan,
    kelurahan_desa: Array.isArray(k.kelurahan_desa) ? k.kelurahan_desa : []
  }));

  slugs.forEach(s => {
    finalKecMap[s] = formattedKecamatan;
  });
});

// 3. For any city in kota.json that still has no kecamatan in finalKecMap, provide default kecamatan based on city name
kotaData.forEach(k => {
  if (!finalKecMap[k.slug] || finalKecMap[k.slug].length === 0) {
    const defaultKecName = `Kecamatan ${k.nama}`;
    const defaultKecName2 = `${k.nama} Kota`;
    finalKecMap[k.slug] = [
      { nama_kecamatan: defaultKecName, kelurahan_desa: [`Kelurahan ${k.nama} Center`, `Desa ${k.nama} Utama`] },
      { nama_kecamatan: defaultKecName2, kelurahan_desa: [`Kelurahan ${k.nama} Timur`, `Kelurahan ${k.nama} Barat`] }
    ];
  }
});

// Write to data/kecamatan.json
const targetPath = path.join(__dirname, '..', 'data', 'kecamatan.json');
fs.writeFileSync(targetPath, JSON.stringify(finalKecMap, null, 2), 'utf8');

console.log('Successfully updated data/kecamatan.json!');
console.log('Total cities in kota.json:', kotaData.length);
console.log('Total city keys in kecamatan.json:', Object.keys(finalKecMap).length);
