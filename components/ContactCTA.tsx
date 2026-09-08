import WaIcon from "./WaIcon";

const WA_NUMBER = "6208118500177";
const WA_MESSAGE = encodeURIComponent(
  "Halo, saya ingin mengetahui lebih lanjut tentang layanan Training K3 Anda."
);

export default function ContactCTA() {
  return (
    <section id="kontak" className="relative" style={{ borderTop: "1px solid #d4a200" }}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1400&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      />
      <div className="absolute inset-0" style={{ background: "rgba(242,183,5,0.88)" }} />

      <div className="relative max-w-5xl mx-auto px-6 py-14 flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div>
          <p
            className="text-xs mb-2"
            style={{ fontFamily: "var(--font-mono)", color: "rgba(28,30,27,0.5)", letterSpacing: "0.06em" }}
          >
            0811-8500-177 · Senin–Sabtu 08.00–17.00 WITA
          </p>
          <h2 className="text-2xl font-bold leading-snug" style={{ color: "var(--color-base)", maxWidth: "420px" }}>
            Siap meningkatkan standar K3 perusahaan Anda?
          </h2>
          <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(28,30,27,0.65)", maxWidth: "380px" }}>
            Konsultasikan kebutuhan pelatihan dan jasa K3 Anda bersama tim ahli kami.
          </p>
        </div>

        <a
          href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 font-semibold px-7 py-4 text-sm flex-shrink-0 transition-opacity hover:opacity-90"
          style={{ background: "#25D366", color: "#fff", textDecoration: "none" }}
        >
          <WaIcon size={20} />
          Hubungi via WhatsApp
        </a>
      </div>
    </section>
  );
}
