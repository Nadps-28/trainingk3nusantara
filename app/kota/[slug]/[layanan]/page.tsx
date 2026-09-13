import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import kotaData from "@/data/kota.json";
import layananData from "@/data/layanan.json";
import { getKecamatanForKota } from "@/lib/wilayah";
import Breadcrumb from "@/components/Breadcrumb";
import MapEmbed from "@/components/MapEmbed";
import ContactCTA from "@/components/ContactCTA";
import Navbar from "@/components/Navbar";
import ProsesDiagram from "@/components/ProsesDiagram";
import ServiceSchema from "@/components/ServiceSchema";
import { generateArticleTitle, generateArticleDescription } from "@/lib/seo";

// ISR: generate semua kombinasi saat build, revalidate 1 hari
export const dynamicParams = true;
export const revalidate = 86400;

export function generateStaticParams() {
  return kotaData.flatMap((kota) =>
    layananData.map((l) => ({ slug: kota.slug, layanan: l.slug }))
  );
}

// ── helpers ──────────────────────────────────────────────────────────────────

type Kota = (typeof kotaData)[number] & { cluster?: string };
type Layanan = (typeof layananData)[number] & {
  regulasi?: string;
  manfaat?: string[];
  output?: string;
  foto?: string;
  fotoAlt?: string;
  proses?: string;
  faq?: { q: string; a: string }[];
};

const clusterLabel: Record<string, string> = {
  migas: "minyak, gas, dan energi",
  tambang: "pertambangan dan mineral",
  manufaktur: "manufaktur dan industri pengolahan",
  konstruksi: "konstruksi dan infrastruktur",
  maritim: "maritim dan kepelabuhanan",
  umum: "berbagai sektor industri",
};

const clusterKonteks: Record<string, string> = {
  migas: "Wilayah ini dikenal sebagai salah satu pusat kegiatan industri minyak, gas, dan energi di Indonesia. Perusahaan-perusahaan di sektor ini memiliki kewajiban ketat dalam penerapan standar K3 sesuai regulasi Kemnaker RI dan standar internasional.",
  tambang: "Wilayah ini memiliki aktivitas pertambangan dan mineral yang signifikan. Industri pertambangan termasuk sektor dengan risiko K3 tertinggi, sehingga penerapan standar keselamatan yang ketat menjadi keharusan.",
  manufaktur: "Wilayah ini merupakan salah satu pusat industri manufaktur dan pengolahan. Kepadatan aktivitas industri di kawasan ini menjadikan penerapan K3 yang komprehensif sebagai prioritas utama.",
  konstruksi: "Wilayah ini memiliki aktivitas konstruksi dan pembangunan infrastruktur yang tinggi. Sektor konstruksi merupakan salah satu bidang dengan tingkat risiko kecelakaan kerja tertinggi.",
  maritim: "Wilayah ini merupakan kawasan dengan aktivitas maritim dan kepelabuhanan yang aktif. Industri maritim memiliki karakteristik risiko K3 yang unik dan memerlukan penanganan khusus.",
  umum: "Wilayah ini memiliki keragaman sektor industri yang membutuhkan penerapan standar K3 yang komprehensif sesuai karakteristik masing-masing bidang usaha.",
};

const siapaMenggunakan: Record<string, string> = {
  migas: "Perusahaan kontraktor migas, operator kilang, perusahaan jasa pengeboran, dan seluruh entitas yang beroperasi di wilayah kerja migas wajib memastikan tenaga kerjanya memiliki kompetensi K3 yang sesuai.",
  tambang: "Perusahaan pertambangan, kontraktor tambang, dan pemasok jasa pertambangan perlu memastikan seluruh tenaga kerja memiliki sertifikasi K3 yang relevan sesuai jenis pekerjaan dan risiko yang dihadapi.",
  manufaktur: "Perusahaan manufaktur, pabrik pengolahan, dan industri produksi perlu memastikan operator, supervisor, dan manajer K3 memiliki kompetensi yang sesuai untuk menjaga keselamatan di lingkungan produksi.",
  konstruksi: "Perusahaan konstruksi, kontraktor, dan subkontraktor wajib memastikan tenaga kerja di lapangan memiliki sertifikasi K3 yang relevan, terutama untuk pekerjaan berisiko tinggi.",
  maritim: "Perusahaan pelayaran, operator pelabuhan, galangan kapal, dan perusahaan jasa maritim perlu memastikan tenaga kerjanya memiliki kompetensi K3 yang sesuai dengan standar maritim nasional dan internasional.",
  umum: "Seluruh perusahaan yang mempekerjakan tenaga kerja, baik skala kecil, menengah, maupun besar, memiliki kewajiban hukum untuk memastikan penerapan K3 yang memadai di lingkungan kerja mereka.",
};

const kategoriUrutan = ["Pelatihan", "Jasa", "Kajian"] as const;

// ── metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; layanan: string }>;
}): Promise<Metadata> {
  const { slug, layanan: layananSlug } = await params;
  const kota = kotaData.find((k) => k.slug === slug) as Kota | undefined;
  const layanan = layananData.find((l) => l.slug === layananSlug) as Layanan | undefined;
  if (!kota || !layanan) return {};

  const title = generateArticleTitle(layanan.nama, kota.nama);
  const description = generateArticleDescription(layanan.nama, kota.nama);

  return {
    title,
    description,
    alternates: { canonical: `/kota/${slug}/${layananSlug}` },
    openGraph: { title, description, type: "article" },
  };
}

// ── page ──────────────────────────────────────────────────────────────────────

export default async function LayananKotaPage({
  params,
}: {
  params: Promise<{ slug: string; layanan: string }>;
}) {
  const { slug, layanan: layananSlug } = await params;
  const kota = kotaData.find((k) => k.slug === slug) as Kota | undefined;
  const layanan = layananData.find((l) => l.slug === layananSlug) as Layanan | undefined;

  if (!kota || !layanan) notFound();

  const kecamatanList = getKecamatanForKota(kota.slug);
  const totalKelurahan = kecamatanList.reduce((acc, k) => acc + k.kelurahan_desa.length, 0);
  const cluster = kota.cluster ?? "umum";
  const clusterNama = clusterLabel[cluster] ?? clusterLabel.umum;
  const konteksWilayah = clusterKonteks[cluster] ?? clusterKonteks.umum;
  const siapaTarget = siapaMenggunakan[cluster] ?? siapaMenggunakan.umum;

  const deskripsiSchema = `Layanan ${layanan.nama} di ${kota.nama} dan sekitarnya. Program ${layanan.kategori.toLowerCase()} K3 bersertifikat untuk perusahaan di wilayah ${kota.nama}.`;

  // Navigasi semua layanan per kota, dikelompokkan per kategori
  const layananPerKategori = kategoriUrutan.map((kat) => ({
    kategori: kat,
    items: layananData.filter((l) => l.kategori === kat),
  }));

  return (
    <>
      <ServiceSchema
        namaLayanan={layanan.nama}
        kategori={layanan.kategori}
        namaKota={kota.nama}
        slugKota={kota.slug}
        slugLayanan={layananSlug}
        deskripsi={deskripsiSchema}
      />
      <Navbar kotaSlug={kota.slug} kotaNama={kota.nama} />
      <Breadcrumb
        crumbs={[
          { label: "Beranda", href: "/" },
          { label: kota.nama, href: `/kota/${kota.slug}` },
          { label: layanan.nama },
        ]}
      />

      <main style={{ background: "var(--color-surface)" }}>
        {/* Header */}
        <header style={{ background: "var(--color-base)", borderBottom: "1px solid #2e3129" }}>
          <div className="max-w-5xl mx-auto px-6 py-10">
            <p
              className="text-xs mb-3"
              style={{ fontFamily: "var(--font-mono)", color: "#4a4f4c", letterSpacing: "0.06em" }}
            >
              {layanan.kategori.toUpperCase()} · {kota.nama.toUpperCase()}
            </p>
            <h1
              className="font-bold leading-tight mb-3"
              style={{ color: "var(--color-text-on-base)", fontSize: "clamp(1.5rem, 4vw, 2.2rem)" }}
            >
              {layanan.nama} di {kota.nama}
            </h1>
            <p className="text-sm" style={{ color: "#9aa3a0", maxWidth: "520px" }}>
              Layanan {layanan.kategori.toLowerCase()} K3 profesional untuk perusahaan di wilayah{" "}
              {kota.nama} dan sekitarnya.
            </p>
          </div>
        </header>

        {/* Layout: konten + sidebar navigasi */}
        <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col lg:flex-row gap-10">

          {/* ── Konten utama ── */}
          <article className="flex-1 min-w-0">

            {/* Foto */}
            <div style={{ marginBottom: "36px", overflow: "hidden" }}>
              <img
                src={layanan.foto ?? "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80"}
                alt={`${layanan.fotoAlt ?? `kegiatan ${layanan.nama}`} ${kota.nama}`}
                style={{ width: "100%", height: "260px", objectFit: "cover", display: "block" }}
              />
            </div>

            {/* 1. Pengantar */}
            <section style={{ marginBottom: "36px" }}>
              <h2 className="text-lg font-bold mb-3" style={{ color: "var(--color-text-on-surface)" }}>
                {layanan.nama} di {kota.nama}
              </h2>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "#3a3f3c" }}>
                {layanan.nama} merupakan salah satu program {layanan.kategori.toLowerCase()} K3
                yang penting bagi perusahaan yang beroperasi di wilayah {kota.nama}.{" "}
                {konteksWilayah}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#3a3f3c" }}>
                Sebagai lembaga yang melayani kebutuhan K3 di wilayah {kota.nama} dan sekitarnya,
                kami menyediakan program {layanan.nama} yang dirancang untuk memenuhi standar
                regulasi Kemnaker RI sekaligus kebutuhan spesifik industri di sektor {clusterNama}.
              </p>
            </section>

            <div style={{ borderTop: "1px solid var(--color-hairline)", marginBottom: "36px" }} />

            {/* 2. Apa itu */}
            <section style={{ marginBottom: "36px" }}>
              <h2 className="text-lg font-bold mb-3" style={{ color: "var(--color-text-on-surface)" }}>
                Apa itu {layanan.nama}?
              </h2>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "#3a3f3c" }}>
                {layanan.nama} adalah program {layanan.kategori.toLowerCase()} dalam bidang
                Keselamatan dan Kesehatan Kerja (K3) yang bertujuan meningkatkan kompetensi dan
                kepatuhan terhadap standar keselamatan kerja yang berlaku di Indonesia.
              </p>
              <h3 className="text-sm font-semibold mb-2 mt-4" style={{ color: "var(--color-text-on-surface)" }}>
                Materi Pelatihan
              </h3>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "#3a3f3c" }}>
                Program ini mengacu pada {layanan.regulasi ?? "regulasi Kemnaker RI yang berlaku"},
                yang mewajibkan setiap perusahaan memastikan tenaga kerjanya memiliki kompetensi
                K3 yang memadai sesuai jenis pekerjaan dan risiko yang dihadapi.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#3a3f3c" }}>
                Penerapan {layanan.nama} yang tepat tidak hanya memenuhi kewajiban hukum, tetapi
                juga berkontribusi pada peningkatan produktivitas, pengurangan kecelakaan kerja,
                dan terciptanya lingkungan kerja yang aman bagi seluruh tenaga kerja.
              </p>
            </section>

            <div style={{ borderTop: "1px solid var(--color-hairline)", marginBottom: "36px" }} />

            {/* 3. Manfaat */}
            <section style={{ marginBottom: "36px" }}>
              <h2 className="text-lg font-bold mb-3" style={{ color: "var(--color-text-on-surface)" }}>
                Manfaat {layanan.nama}
              </h2>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 14px 0" }}>
                {(layanan.manfaat ?? []).map((m, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 py-3 text-sm"
                    style={{ borderBottom: "1px solid var(--color-hairline)", color: "#3a3f3c" }}
                  >
                    <span
                      style={{
                        flexShrink: 0, width: "18px", height: "18px",
                        background: "var(--color-steel)", display: "flex",
                        alignItems: "center", justifyContent: "center", marginTop: "1px",
                      }}
                    >
                      <svg width="9" height="9" fill="none" stroke="white" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {m}
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed" style={{ color: "#3a3f3c" }}>
                Dengan mengikuti program {layanan.nama}, perusahaan Anda membangun fondasi budaya
                K3 yang kuat — berdampak positif pada efisiensi operasional dan reputasi
                perusahaan di mata mitra bisnis dan regulator.
              </p>
            </section>

            <div style={{ borderTop: "1px solid var(--color-hairline)", marginBottom: "36px" }} />

            {/* 4. Siapa yang butuh */}
            <section style={{ marginBottom: "36px" }}>
              <h2 className="text-lg font-bold mb-3" style={{ color: "var(--color-text-on-surface)" }}>
                Siapa yang Membutuhkan {layanan.nama} di {kota.nama}?
              </h2>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "#3a3f3c" }}>
                {siapaTarget}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#3a3f3c" }}>
                Di wilayah {kota.nama} dengan karakteristik industri di sektor {clusterNama},
                kebutuhan akan {layanan.nama} sangat relevan bagi perusahaan yang ingin memastikan
                kepatuhan regulasi sekaligus meningkatkan standar keselamatan operasional. Program
                ini cocok untuk manajer K3, supervisor lapangan, operator, serta seluruh tenaga
                kerja yang terlibat dalam kegiatan operasional berisiko.
              </p>
            </section>

            <div style={{ borderTop: "1px solid var(--color-hairline)", marginBottom: "36px" }} />

            {/* 4b. Kecamatan & Kelurahan/Desa Area Layanan */}
            {kecamatanList.length > 0 && (
              <section style={{ marginBottom: "36px" }}>
                {/* header row */}
                <div
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-5 py-4 gap-2 mb-0"
                  style={{ background: "var(--color-base)", borderTop: "3px solid var(--color-steel)" }}
                >
                  <div>
                    <p
                      style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--color-steel)", letterSpacing: "0.1em", marginBottom: "2px" }}
                    >
                      CAKUPAN AREA LAYANAN {layanan.nama.toUpperCase()}
                    </p>
                    <p className="text-sm font-semibold" style={{ color: "var(--color-text-on-base)" }}>
                      {kota.nama} — {kecamatanList.length} Kecamatan {totalKelurahan > 0 ? `· ${totalKelurahan} Kelurahan/Desa` : ""}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className="text-xs px-3 py-1 font-mono"
                      style={{ background: "#22251f", color: "var(--color-accent)", border: "1px solid #2e3129" }}
                    >
                      In-House Training & Jasa
                    </span>
                  </div>
                </div>

                {/* tile grid */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                    gap: "1px",
                    background: "var(--color-hairline)",
                    border: "1px solid var(--color-hairline)",
                    borderTop: "none",
                  }}
                >
                  {kecamatanList.map((kec, i) => (
                    <div
                      key={kec.nama_kecamatan}
                      className="p-4 flex flex-col justify-between"
                      style={{ background: i % 2 === 0 ? "white" : "#fafbfa" }}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-semibold text-xs text-gray-900">
                            Kec. {kec.nama_kecamatan}
                          </span>
                          {kec.kelurahan_desa.length > 0 && (
                            <span className="text-[10px] text-gray-500 font-mono bg-gray-100 px-1.5 py-0.5 rounded">
                              {kec.kelurahan_desa.length} Kel/Desa
                            </span>
                          )}
                        </div>
                        {kec.kelurahan_desa.length > 0 ? (
                          <div className="flex flex-wrap gap-1 mt-2">
                            {kec.kelurahan_desa.map((kel) => (
                              <span
                                key={kel}
                                className="text-[11px] px-1.5 py-0.5 bg-gray-100 text-gray-700 rounded border border-gray-200"
                              >
                                {kel}
                              </span>
                            ))}
                          </div>
                        ) : (
                          <p className="text-[11px] text-gray-500 italic mt-1">
                            Seluruh kelurahan & desa di {kec.nama_kecamatan}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <div style={{ borderTop: "1px solid var(--color-hairline)", marginBottom: "36px" }} />

            {/* 5. Proses — diagram */}
            <ProsesDiagram kategori={layanan.kategori as "Pelatihan" | "Jasa" | "Kajian"} />
            <h3 className="text-sm font-semibold mb-2 mt-4" style={{ color: "var(--color-text-on-surface)" }}>
              Jadwal & Pendaftaran
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#3a3f3c", marginBottom: "36px" }}>
              Untuk perusahaan di wilayah {kota.nama}, kami menyediakan opsi pelaksanaan
              in-house di lokasi perusahaan maupun di tempat yang kami sediakan. Jadwal
              dapat disesuaikan dengan kebutuhan operasional perusahaan Anda.
            </p>

            <div style={{ borderTop: "1px solid var(--color-hairline)", marginBottom: "36px" }} />

            {/* 6. Output */}
            <section style={{ marginBottom: "36px" }}>
              <h2 className="text-lg font-bold mb-3" style={{ color: "var(--color-text-on-surface)" }}>
                Syarat & Sertifikasi
              </h2>
              <div
                className="p-5 text-sm leading-relaxed"
                style={{
                  background: "white", border: "1px solid var(--color-hairline)",
                  borderLeft: "3px solid var(--color-steel)", color: "#3a3f3c",
                }}
              >
                {layanan.output ?? "Sertifikat kompetensi yang diakui secara nasional."}
              </div>
            </section>

            <div style={{ borderTop: "1px solid var(--color-hairline)", marginBottom: "36px" }} />

            {/* 7. FAQ */}
            <section style={{ marginBottom: "36px" }}>
              <h2 className="text-lg font-bold mb-4" style={{ color: "var(--color-text-on-surface)" }}>
                Pertanyaan Umum
              </h2>
              <div style={{ border: "1px solid var(--color-hairline)" }}>
                {(layanan.faq ?? []).map((item, i) => (
                  <div
                    key={i}
                    className="px-5 py-4"
                    style={{ borderTop: i === 0 ? "none" : "1px solid var(--color-hairline)" }}
                  >
                    <p className="font-semibold text-sm mb-2" style={{ color: "var(--color-text-on-surface)" }}>
                      {item.q}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "#5a5f5c" }}>
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <div style={{ borderTop: "1px solid var(--color-hairline)", marginBottom: "36px" }} />

            {/* 8. Link balik ke halaman kota */}
            <div>
              <Link
                href={`/kota/${kota.slug}`}
                className="text-sm font-medium"
                style={{ color: "var(--color-steel)", textDecoration: "none" }}
              >
                ← Lihat semua layanan di {kota.nama}
              </Link>
            </div>
          </article>

          {/* ── Sidebar navigasi semua layanan ── */}
          <aside
            className="lg:w-72 flex-shrink-0"
            style={{ alignSelf: "flex-start", position: "sticky", top: "80px" }}
          >
            <div style={{ border: "1px solid var(--color-hairline)", background: "white" }}>
              <div
                className="px-4 py-3"
                style={{ borderBottom: "1px solid var(--color-hairline)", background: "var(--color-base)" }}
              >
                <p
                  className="text-xs font-medium"
                  style={{ color: "var(--color-text-on-base)", fontFamily: "var(--font-mono)", letterSpacing: "0.05em" }}
                >
                  Layanan di {kota.nama}
                </p>
              </div>

              {layananPerKategori.map(({ kategori, items }) => (
                <div key={kategori}>
                  <div
                    className="px-4 py-2"
                    style={{ borderBottom: "1px solid var(--color-hairline)", background: "#f8f9f8" }}
                  >
                    <p
                      className="text-xs font-semibold"
                      style={{ color: "var(--color-steel)", fontFamily: "var(--font-mono)", letterSpacing: "0.05em" }}
                    >
                      {kategori}
                    </p>
                  </div>
                  {items.map((l, i) => {
                    const isActive = l.slug === layananSlug;
                    return (
                      <Link
                        key={l.slug}
                        href={`/kota/${kota.slug}/${l.slug}`}
                        className="block px-4 py-2 text-xs leading-snug"
                        style={{
                          borderBottom: "1px solid var(--color-hairline)",
                          color: isActive ? "var(--color-base)" : "#5a5f5c",
                          background: isActive ? "var(--color-accent)" : "transparent",
                          textDecoration: "none",
                          fontWeight: isActive ? 600 : 400,
                        }}
                      >
                        {l.nama}
                      </Link>
                    );
                  })}
                </div>
              ))}
            </div>
          </aside>
        </div>

        <MapEmbed lat={kota.lat} lng={kota.lng} namaKota={kota.nama} />
        <ContactCTA />
      </main>
    </>
  );
}
