import HeroReveal from "./HeroReveal";
import WaIcon from "./WaIcon";

interface HeroProps {
  namaKota?: string;
}

export default function Hero({ namaKota }: HeroProps) {
  const title = namaKota
    ? `Training K3\n${namaKota}`
    : `Pelatihan & Jasa K3\nBersertifikat Kemnaker RI`;

  const subtitle = namaKota
    ? `Kami melayani kebutuhan pelatihan dan jasa Keselamatan dan Kesehatan Kerja di wilayah ${namaKota} dan sekitarnya.`
    : "Lembaga pelatihan dan konsultasi K3 terpercaya. Lebih dari 62 program, melayani perusahaan di seluruh Indonesia.";

  return (
    <section
      className="relative"
      style={{ minHeight: "520px", display: "flex", alignItems: "flex-end" }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center 35%",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(28,30,27,0.88) 40%, rgba(28,30,27,0.45) 100%)",
        }}
      />

      <HeroReveal>
        <div
          className="inline-flex items-center gap-2 mb-5 text-xs font-medium"
          style={{
            fontFamily: "var(--font-mono)",
            color: "var(--color-accent)",
            letterSpacing: "0.04em",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "var(--color-accent)",
            }}
          />
          Bersertifikat Kemnaker RI · 62 Program Tersedia
        </div>

        <h1
          className="font-bold leading-tight mb-5"
          style={{
            color: "var(--color-text-on-base)",
            fontSize: "clamp(2rem, 5vw, 3.25rem)",
            whiteSpace: "pre-line",
            maxWidth: "600px",
          }}
        >
          {title}
        </h1>

        <p
          className="mb-8 text-base leading-relaxed"
          style={{ color: "#b8bdb9", maxWidth: "480px" }}
        >
          {subtitle}
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="https://wa.me/6208118500177"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold px-6 py-3 text-sm transition-opacity hover:opacity-90"
            style={{ background: "#25D366", color: "#fff", textDecoration: "none" }}
          >
            <WaIcon size={16} />
            Konsultasi Gratis
          </a>
          <a href="#pelatihan" className="btn-ghost inline-flex items-center font-medium px-6 py-3 text-sm">
            Lihat Program
          </a>
        </div>
      </HeroReveal>
    </section>
  );
}
