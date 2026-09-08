import Link from "next/link";
import layananData from "@/data/layanan.json";

type Kategori = "Pelatihan" | "Jasa" | "Kajian";

const labelKategori: Record<Kategori, string> = {
  Pelatihan: "Program Pelatihan",
  Jasa: "Layanan Jasa",
  Kajian: "Kajian Teknis",
};

interface RelatedServicesProps {
  currentKategori: Kategori;
  kotaSlug: string;
}

export default function RelatedServices({ currentKategori, kotaSlug }: RelatedServicesProps) {
  const others = (["Pelatihan", "Jasa", "Kajian"] as Kategori[]).filter(
    (k) => k !== currentKategori
  );

  return (
    <section
      style={{ background: "var(--color-surface)", borderTop: "1px solid var(--color-hairline)" }}
    >
      <div className="max-w-5xl mx-auto px-6 py-12">
        <p
          className="text-xs mb-2"
          style={{ fontFamily: "var(--font-mono)", color: "#8a9290", letterSpacing: "0.06em" }}
        >
          Layanan Lainnya
        </p>
        <h3 className="text-lg font-bold mb-6" style={{ color: "var(--color-text-on-surface)" }}>
          Eksplorasi Program Lain
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {others.map((kat) => {
            const items = layananData.filter((l) => l.kategori === kat).slice(0, 2);
            return (
              <div
                key={kat}
                style={{ border: "1px solid var(--color-hairline)", padding: "20px" }}
              >
                <p
                  className="text-xs mb-3 font-medium"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--color-steel)", letterSpacing: "0.05em" }}
                >
                  {labelKategori[kat]}
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px 0" }}>
                  {items.map((item) => (
                    <li
                      key={item.nama}
                      className="text-sm py-1"
                      style={{ color: "#5a5f5c", borderBottom: "1px solid var(--color-hairline)" }}
                    >
                      {item.nama}
                    </li>
                  ))}
                  <li className="text-xs pt-2" style={{ color: "#8a9290" }}>
                    + {layananData.filter((l) => l.kategori === kat).length - 2} program lainnya
                  </li>
                </ul>
                <a
                  href={`/kota/${kotaSlug}#${kat.toLowerCase()}`}
                  className="text-sm font-medium"
                  style={{ color: "var(--color-steel)", textDecoration: "none" }}
                >
                  Lihat semua {labelKategori[kat]}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
