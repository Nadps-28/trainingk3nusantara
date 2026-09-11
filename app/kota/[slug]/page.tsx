import { notFound } from "next/navigation";
import type { Metadata } from "next";
import kotaData from "@/data/kota.json";
import kecamatanData from "@/data/kecamatan.json";
import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import Hero from "@/components/Hero";
import LayananSection from "@/components/LayananSection";
import RelatedServices from "@/components/RelatedServices";
import FAQ from "@/components/FAQ";
import MapEmbed from "@/components/MapEmbed";
import ContactCTA from "@/components/ContactCTA";

import { generateKotaTitle, generateKotaDescription } from "@/lib/seo";

export function generateStaticParams() {
  return kotaData.map((kota) => ({ slug: kota.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const kota = kotaData.find((k) => k.slug === slug);
  if (!kota) return {};
  const title = generateKotaTitle(kota.nama);
  const description = generateKotaDescription(kota.nama);
  return {
    title,
    description,
  };
}

export default async function KotaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const kota = kotaData.find((k) => k.slug === slug);
  if (!kota) notFound();

  const kecamatan: string[] = (kecamatanData as Record<string, string[]>)[kota.slug] ?? [];

  return (
    <>
      {/* Navbar dengan konteks kota — override navbar dari layout */}
      <Navbar kotaSlug={kota.slug} kotaNama={kota.nama} />

      <Breadcrumb
        crumbs={[
          { label: "Beranda", href: "/" },
          { label: "Kota", href: "/#kota" },
          { label: `Training K3 ${kota.nama}` },
        ]}
      />

      <main>
        <Hero namaKota={kota.nama} />
        <LayananSection kategori="Pelatihan" kotaSlug={kota.slug} />
        <LayananSection kategori="Jasa" kotaSlug={kota.slug} />
        <LayananSection kategori="Kajian" kotaSlug={kota.slug} />
        <RelatedServices currentKategori="Pelatihan" kotaSlug={kota.slug} />

        {kecamatan.length > 0 && (
          <section style={{ background: "var(--color-base)", borderTop: "2px solid var(--color-steel)" }}>
            <div className="max-w-5xl mx-auto px-6 py-14">
              {/* header */}
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
                <div>
                  <p
                    className="text-xs mb-2"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--color-steel)", letterSpacing: "0.1em" }}
                  >
                    JANGKAUAN WILAYAH
                  </p>
                  <h2
                    className="font-bold"
                    style={{ color: "var(--color-text-on-base)", fontSize: "clamp(1.2rem, 3vw, 1.6rem)", lineHeight: 1.2 }}
                  >
                    Melayani Seluruh Kecamatan<br />
                    <span style={{ color: "var(--color-accent)" }}>di {kota.nama}</span>
                  </h2>
                </div>
                <div
                  className="flex items-center gap-2 px-4 py-2 flex-shrink-0"
                  style={{ border: "1px solid #2e3129", alignSelf: "flex-start" }}
                >
                  <svg width="14" height="14" fill="none" stroke="var(--color-steel)" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#6a7370", letterSpacing: "0.05em" }}>
                    {kecamatan.length} KECAMATAN
                  </span>
                </div>
              </div>

              {/* grid tile */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                  gap: "1px",
                  background: "#2e3129",
                  border: "1px solid #2e3129",
                }}
              >
                {kecamatan.map((kec, i) => (
                  <div
                    key={kec}
                    className="flex items-center gap-3 px-4 py-3"
                    style={{ background: "#22251f" }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "10px",
                        color: "var(--color-steel)",
                        opacity: 0.6,
                        flexShrink: 0,
                        minWidth: "22px",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      style={{
                        width: "2px",
                        height: "28px",
                        background: "var(--color-steel)",
                        opacity: 0.3,
                        flexShrink: 0,
                      }}
                    />
                    <span className="text-sm" style={{ color: "#c8cdc9", lineHeight: 1.3 }}>
                      {kec}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-xs mt-6" style={{ color: "#4a4f4c", fontFamily: "var(--font-mono)" }}>
                Layanan dapat dilaksanakan in-house di lokasi perusahaan Anda di seluruh wilayah {kota.nama}.
              </p>
            </div>
          </section>
        )}
        <FAQ />
        <MapEmbed lat={kota.lat} lng={kota.lng} namaKota={kota.nama} />
        <ContactCTA />
      </main>
    </>
  );
}
