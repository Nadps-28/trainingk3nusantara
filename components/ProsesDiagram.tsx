type Kategori = "Pelatihan" | "Jasa" | "Kajian";

const alurProses: Record<Kategori, { step: string; label: string; sub: string }[]> = {
  Pelatihan: [
    { step: "01", label: "Pendaftaran", sub: "Pengisian formulir & kelengkapan dokumen peserta" },
    { step: "02", label: "Pre-Test", sub: "Asesmen kompetensi awal peserta" },
    { step: "03", label: "Materi Teori", sub: "Penyampaian materi regulasi & konsep K3" },
    { step: "04", label: "Praktik", sub: "Simulasi & praktik lapangan terpandu" },
    { step: "05", label: "Post-Test", sub: "Ujian akhir teori dan/atau praktik" },
    { step: "06", label: "Sertifikasi", sub: "Penerbitan sertifikat kompetensi resmi" },
  ],
  Jasa: [
    { step: "01", label: "Konsultasi", sub: "Identifikasi kebutuhan & ruang lingkup layanan" },
    { step: "02", label: "Pengumpulan Data", sub: "Checklist dokumen & survei lapangan" },
    { step: "03", label: "Penyusunan Dokumen", sub: "Drafting dokumen teknis sesuai regulasi" },
    { step: "04", label: "Review", sub: "Verifikasi bersama klien & revisi" },
    { step: "05", label: "Pengajuan", sub: "Submisi ke instansi berwenang" },
    { step: "06", label: "Penerbitan", sub: "Dokumen/izin resmi diterbitkan" },
  ],
  Kajian: [
    { step: "01", label: "Kick-off", sub: "Penetapan ruang lingkup & metodologi kajian" },
    { step: "02", label: "Pengumpulan Data", sub: "Survei lapangan & pengukuran teknis" },
    { step: "03", label: "Analisis", sub: "Identifikasi & penilaian risiko K3" },
    { step: "04", label: "Draft Laporan", sub: "Penyusunan temuan & rekomendasi" },
    { step: "05", label: "Review Klien", sub: "Presentasi & diskusi hasil kajian" },
    { step: "06", label: "Laporan Final", sub: "Finalisasi & serah terima laporan teknis" },
  ],
};

interface ProsesDiagramProps {
  kategori: Kategori;
}

export default function ProsesDiagram({ kategori }: ProsesDiagramProps) {
  const steps = alurProses[kategori];

  return (
    <section style={{ marginBottom: "36px" }}>
      <h2
        className="text-lg font-bold mb-2"
        style={{ color: "var(--color-text-on-surface)" }}
      >
        Alur {kategori === "Pelatihan" ? "Pelatihan" : kategori === "Jasa" ? "Layanan" : "Kajian"}
      </h2>
      <p
        className="text-xs mb-6"
        style={{ color: "#8a9290", fontFamily: "var(--font-mono)" }}
      >
        Proses standar · {steps.length} tahap
      </p>

      {/* Desktop: horizontal flow */}
      <div className="hidden md:block">
        <div
          style={{
            border: "1px solid var(--color-hairline)",
            background: "white",
            padding: "28px 24px",
          }}
        >
          {/* Step boxes */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: "0" }}>
            {steps.map((s, i) => (
              <div key={i} style={{ flex: 1, display: "flex", alignItems: "flex-start" }}>
                {/* Step */}
                <div style={{ flex: 1, textAlign: "center", padding: "0 4px" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      background: i === 0 || i === steps.length - 1
                        ? "var(--color-steel)"
                        : "var(--color-base)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 10px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "11px",
                        fontWeight: 600,
                        color: "white",
                      }}
                    >
                      {s.step}
                    </span>
                  </div>
                  <p
                    className="font-semibold"
                    style={{ fontSize: "11px", color: "var(--color-base)", marginBottom: "4px" }}
                  >
                    {s.label}
                  </p>
                  <p style={{ fontSize: "10px", color: "#8a9290", lineHeight: "1.4" }}>
                    {s.sub}
                  </p>
                </div>

                {/* Connector arrow — tidak di item terakhir */}
                {i < steps.length - 1 && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingTop: "10px",
                      flexShrink: 0,
                    }}
                  >
                    <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                      <path
                        d="M0 6H16M16 6L11 1M16 6L11 11"
                        stroke="#D4D6D2"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Regulasi footer */}
          <div
            style={{
              marginTop: "20px",
              paddingTop: "14px",
              borderTop: "1px solid var(--color-hairline)",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                color: "#a0a8a4",
                letterSpacing: "0.05em",
              }}
            >
              DASAR REGULASI
            </span>
            <span style={{ fontSize: "10px", color: "#8a9290" }}>
              {kategori === "Pelatihan"
                ? "Permenaker RI · UU No. 1/1970 · Kepmenaker terkait"
                : kategori === "Jasa"
                ? "UU No. 1/1970 · PP No. 50/2012 · Permenaker terkait"
                : "PP No. 50/2012 · SNI K3 · Standar teknis terkait"}
            </span>
          </div>
        </div>
      </div>

      {/* Mobile: vertical list */}
      <div className="md:hidden" style={{ border: "1px solid var(--color-hairline)", background: "white" }}>
        {steps.map((s, i) => (
          <div
            key={i}
            className="flex items-start gap-4 px-4 py-3"
            style={{ borderTop: i === 0 ? "none" : "1px solid var(--color-hairline)" }}
          >
            <div
              style={{
                flexShrink: 0,
                width: "28px",
                height: "28px",
                background: i === 0 || i === steps.length - 1
                  ? "var(--color-steel)"
                  : "var(--color-base)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  fontWeight: 600,
                  color: "white",
                }}
              >
                {s.step}
              </span>
            </div>
            <div>
              <p className="font-semibold text-xs mb-1" style={{ color: "var(--color-base)" }}>
                {s.label}
              </p>
              <p style={{ fontSize: "11px", color: "#8a9290", lineHeight: "1.4" }}>{s.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
