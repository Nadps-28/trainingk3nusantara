import type { Metadata } from "next";
import Link from "next/link";
import kotaData from "@/data/kota.json";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LayananSection from "@/components/LayananSection";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Training K3 Profesional | Pelatihan & Jasa K3 Bersertifikat Kemnaker RI",
  description:
    "Lembaga pelatihan dan konsultasi K3 terpercaya. Lebih dari 62 program, melayani perusahaan di seluruh Indonesia. Bersertifikat Kemnaker RI.",
};

const stats = [
  { kode: "PRG", label: "Program Tersedia", value: "62" },
  { kode: "KOT", label: "Kota Dilayani", value: "212+" },
  { kode: "KAT", label: "Kategori Layanan", value: "3" },
  { kode: "WIL", label: "Cakupan Wilayah", value: "Nasional" },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
      <Hero />

      {/* Stats bar */}
      <div style={{ background: "var(--color-base)", borderBottom: "1px solid #2e3129" }}>
        <div className="max-w-5xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.kode}>
              <p
                className="text-xs mb-1"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "#4a4f4c",
                  letterSpacing: "0.06em",
                }}
              >
                {s.kode}
              </p>
              <p
                className="text-2xl font-bold"
                style={{ color: "var(--color-accent)", fontFamily: "var(--font-mono)" }}
              >
                {s.value}
              </p>
              <p className="text-xs mt-0.5" style={{ color: "#6b7370" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* About */}
      <section
        style={{ background: "var(--color-surface)", borderBottom: "1px solid var(--color-hairline)" }}
      >
        <div className="max-w-5xl mx-auto px-6 py-14 flex flex-col md:flex-row gap-12 items-start">
          <div className="flex-1">
            <p
              className="text-xs mb-3"
              style={{
                fontFamily: "var(--font-mono)",
                color: "#8a9290",
                letterSpacing: "0.06em",
              }}
            >
              Tentang Kami
            </p>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--color-text-on-surface)" }}>
              Lembaga K3 Terpercaya
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#5a5f5c" }}>
              Kami adalah lembaga pelatihan dan konsultasi Keselamatan dan Kesehatan Kerja (K3) yang telah berpengalaman lebih dari 15 tahun. Seluruh program mengacu pada regulasi Kemnaker RI dan standar internasional.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#5a5f5c" }}>
              Dengan tim instruktur bersertifikat dan pengalaman lapangan yang luas, kami membantu perusahaan membangun budaya K3 yang kuat dan memenuhi seluruh kewajiban regulasi.
            </p>
          </div>
          <div className="flex-1 w-full" style={{ maxWidth: "420px" }}>
            <img
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80"
              alt="Instruktur K3 di lapangan"
              className="w-full object-cover"
              style={{ height: "260px", display: "block" }}
            />
          </div>
        </div>
      </section>

      <LayananSection kategori="Pelatihan" />
      <LayananSection kategori="Jasa" />
      <LayananSection kategori="Kajian" />

      {/* Kota yang dilayani */}
      <section
        style={{ background: "var(--color-surface)", borderTop: "1px solid var(--color-hairline)" }}
        id="kota"
      >
        <div className="max-w-5xl mx-auto px-6 py-14">
          <p
            className="text-xs mb-2"
            style={{
              fontFamily: "var(--font-mono)",
              color: "#8a9290",
              letterSpacing: "0.06em",
            }}
          >
            KOT · {kotaData.length} kota aktif
          </p>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--color-text-on-surface)" }}>
            Kota yang Kami Layani
          </h2>
          <div className="flex flex-wrap gap-2">
            {kotaData.map((kota) => (
              <Link
                key={kota.slug}
                href={`/kota/${kota.slug}`}
                className="kota-link text-sm font-medium px-4 py-2"
              >
                {kota.nama}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
      <ContactCTA />
      </main>
    </>
  );
}
