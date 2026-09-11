import Link from "next/link";
import layananData from "@/data/layanan.json";
import kotaData from "@/data/kota.json";

type Kategori = "Pelatihan" | "Jasa" | "Kajian";

const prefixKode: Record<Kategori, string> = {
  Pelatihan: "PLT",
  Jasa: "JSA",
  Kajian: "KJN",
};

const deskripsiKategori: Record<Kategori, string> = {
  Pelatihan: "Program pelatihan bersertifikat Kemnaker RI untuk peningkatan kompetensi K3 tenaga kerja.",
  Jasa: "Layanan konsultasi, pendampingan, dan implementasi sistem K3 di lingkungan kerja.",
  Kajian: "Kajian teknis dan analisis risiko K3 berbasis metodologi standar nasional dan internasional.",
};

const manfaatPerItem: Record<Kategori, string> = {
  Pelatihan: "Sertifikat resmi Kemnaker RI, kompetensi terverifikasi.",
  Jasa: "Kepatuhan regulasi, dokumentasi terstandar.",
  Kajian: "Laporan teknis, rekomendasi mitigasi risiko.",
};

const fotoKategori: Record<Kategori, { url: string; alt: string }> = {
  Pelatihan: {
    url: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&q=80",
    alt: "Pelatihan operator alat berat di lapangan industri",
  },
  Jasa: {
    url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&q=80",
    alt: "Inspeksi dan audit keselamatan di fasilitas industri",
  },
  Kajian: {
    url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80",
    alt: "Tim ahli melakukan assessment dan kajian risiko keselamatan kerja",
  },
};

interface LayananSectionProps {
  kategori: Kategori;
  kotaSlug?: string; // jika ada → tiap item jadi link ke artikel detail
}

export default function LayananSection({ kategori, kotaSlug }: LayananSectionProps) {
  const items = layananData.filter((l) => l.kategori === kategori);
  const prefix = prefixKode[kategori];
  const foto = fotoKategori[kategori];
  const isJasa = kategori === "Jasa";
  const bg = isJasa ? "var(--color-base)" : "var(--color-surface)";
  const borderColor = isJasa ? "#2e3129" : "var(--color-hairline)";
  const textPrimary = isJasa ? "var(--color-text-on-base)" : "var(--color-text-on-surface)";
  const textMuted = isJasa ? "#6b7370" : "#5a5f5c";
  const textFaint = isJasa ? "#4a4f4c" : "#a0a8a4";

  const kotaObj = kotaSlug ? kotaData.find((k) => k.slug === kotaSlug) : null;
  const imageAlt = kotaObj ? `${foto.alt} ${kotaObj.nama}` : foto.alt;

  return (
    <section id={kategori.toLowerCase()} style={{ background: bg, borderTop: `1px solid ${borderColor}` }}>
      <div className="max-w-5xl mx-auto px-6 py-14">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <p
              className="text-xs mb-2"
              style={{ fontFamily: "var(--font-mono)", color: textFaint, letterSpacing: "0.06em" }}
            >
              {prefix} · {items.length} program
            </p>
            <h2 className="text-2xl font-bold" style={{ color: textPrimary }}>
              {kategori} K3
            </h2>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: textMuted, maxWidth: "380px" }}>
            {deskripsiKategori[kategori]}
          </p>
        </div>

        {/* Foto kontekstual */}
        <div style={{ marginBottom: "24px", overflow: "hidden", height: "200px" }}>
          <img
            src={foto.url}
            alt={imageAlt}
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
          />
        </div>

        {/* List — jadi link jika kotaSlug tersedia */}
        <div style={{ border: `1px solid ${borderColor}` }}>
          {items.map((item, i) => {
            const kode = `${prefix}-${String(i + 1).padStart(3, "0")}`;
            const slug = (item as any).slug as string | undefined;

            const inner = (
              <>
                <span
                  className="flex-shrink-0 text-xs"
                  style={{ fontFamily: "var(--font-mono)", color: textFaint, minWidth: "72px" }}
                >
                  {kode}
                </span>
                <span className="flex-1 font-medium text-sm" style={{ color: textPrimary }}>
                  {item.nama}
                </span>
                <span
                  className="text-xs flex-shrink-0"
                  style={{ color: textMuted, maxWidth: "220px", textAlign: "right" }}
                >
                  {kotaSlug ? (
                    <span style={{ color: "var(--color-steel)", fontFamily: "var(--font-mono)", fontSize: "10px" }}>
                      Lihat detail
                    </span>
                  ) : (
                    manfaatPerItem[kategori]
                  )}
                </span>
              </>
            );

            const sharedStyle = {
              borderTop: i === 0 ? "none" : `1px solid ${borderColor}`,
            };

            if (kotaSlug && slug) {
              return (
                <Link
                  key={kode}
                  href={`/kota/${kotaSlug}/${slug}`}
                  className={`flex flex-col sm:flex-row sm:items-center gap-3 px-5 py-4 ${isJasa ? "layanan-link-dark" : "layanan-link"}`}
                  style={{
                    ...sharedStyle,
                    textDecoration: "none",
                  }}
                >
                  {inner}
                </Link>
              );
            }

            return (
              <div
                key={kode}
                className="flex flex-col sm:flex-row sm:items-center gap-3 px-5 py-4"
                style={sharedStyle}
              >
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
