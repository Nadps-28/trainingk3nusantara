import kecamatanData from "@/data/kecamatan.json";

export interface KecamatanDetail {
  nama_kecamatan: string;
  kelurahan_desa: string[];
}

export function getKecamatanForKota(slug: string): KecamatanDetail[] {
  const raw = (kecamatanData as Record<string, unknown[]>)[slug];
  if (!raw || !Array.isArray(raw)) return [];

  return raw.map((item) => {
    if (typeof item === "string") {
      return { nama_kecamatan: item, kelurahan_desa: [] };
    }
    if (item && typeof item === "object" && item !== null && "nama_kecamatan" in item) {
      const obj = item as { nama_kecamatan: string; kelurahan_desa?: string[] };
      return {
        nama_kecamatan: obj.nama_kecamatan,
        kelurahan_desa: Array.isArray(obj.kelurahan_desa) ? obj.kelurahan_desa : [],
      };
    }
    return { nama_kecamatan: String(item), kelurahan_desa: [] };
  });
}
