import { notFound } from "next/navigation";
import type { Metadata } from "next";
import kotaData from "@/data/kota.json";
import { getKecamatanForKota } from "@/lib/wilayah";
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

  const kecamatanList = getKecamatanForKota(kota.slug);
  const totalKelurahan = kecamatanList.reduce((acc, k) => acc + k.kelurahan_desa.length, 0);

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

        {kecamatanList.length > 0 && (
          <section style={{ background: "var(--color-base)", borderTop: "2px solid var(--color-steel)" }}>
            <div className="max-w-5xl mx-auto px-6 py-14">
              {/* header */}
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
                <div>
                  <p
                    className="text-xs mb-2"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--color-steel)", letterSpacing: "0.1em" }}
                  >
                    JANGKAUAN WILAYAH & AREA KERJA
                  </p>
                  <h2
                    className="font-bold"
                    style={{ color: "var(--color-text-on-base)", fontSize: "clamp(1.2rem, 3vw, 1.6rem)", lineHeight: 1.2 }}
                  >
                    Melayani Seluruh Kecamatan & Kelurahan/Desa<br />
                    <span style={{ color: "var(--color-accent)" }}>di {kota.nama}</span>
                  </h2>
                </div>
                <div className="flex flex-wrap items-center gap-3 self-start sm:self-auto">
                  <div
                    className="flex items-center gap-2 px-4 py-2"
                    style={{ border: "1px solid #2e3129", background: "#1c1f19" }}
                  >
                    <svg width="14" height="14" fill="none" stroke="var(--color-steel)" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#a0a8a4", letterSpacing: "0.05em" }}>
                      {kecamatanList.length} KECAMATAN
                    </span>
                  </div>
                  {totalKelurahan > 0 && (
                    <div
                      className="flex items-center gap-2 px-4 py-2"
                      style={{ border: "1px solid #2e3129", background: "#1c1f19" }}
                    >
                      <svg width="14" height="14" fill="none" stroke="var(--color-accent)" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V11m0 0h4m-4 0H7" />
                      </svg>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--color-accent)", letterSpacing: "0.05em" }}>
                        {totalKelurahan} KELURAHAN / DESA
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* grid tile */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                  gap: "16px",
                }}
              >
                {kecamatanList.map((kec, i) => (
                  <div
                    key={kec.nama_kecamatan}
                    className="p-5 flex flex-col justify-between"
                    style={{
                      background: "#22251f",
                      border: "1px solid #2e3129",
                      borderLeft: "3px solid var(--color-steel)",
                      borderRadius: "2px",
                    }}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "11px",
                            color: "var(--color-steel)",
                          }}
                        >
                          KECAMATAN {String(i + 1).padStart(2, "0")}
                        </span>
                        {kec.kelurahan_desa.length > 0 && (
                          <span
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: "10px",
                              background: "#2a2d26",
                              color: "#9aa3a0",
                              padding: "2px 8px",
                              borderRadius: "2px",
                            }}
                          >
                            {kec.kelurahan_desa.length} Kelurahan/Desa
                          </span>
                        )}
                      </div>
                      <h3
                        className="font-bold text-base mb-2"
                        style={{ color: "var(--color-text-on-base)", lineHeight: 1.3 }}
                      >
                        {kec.nama_kecamatan}
                      </h3>
                      {kec.kelurahan_desa.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {kec.kelurahan_desa.map((kel) => (
                            <span
                              key={kel}
                              className="text-xs px-2 py-1"
                              style={{
                                background: "#191c17",
                                color: "#c8cdc9",
                                border: "1px solid #2d3129",
                                borderRadius: "2px",
                                fontSize: "11px",
                                lineHeight: "1.2",
                              }}
                            >
                              {kel}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-xs mt-8" style={{ color: "#6a7370", fontFamily: "var(--font-mono)" }}>
                * Layanan dapat dilaksanakan secara in-house di lokasi perusahaan Anda di seluruh wilayah kecamatan dan kelurahan/desa {kota.nama}.
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
