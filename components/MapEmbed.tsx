interface MapEmbedProps {
  lat: number;
  lng: number;
  namaKota: string;
}

export default function MapEmbed({ lat, lng, namaKota }: MapEmbedProps) {
  const src = `https://maps.google.com/maps?q=${lat},${lng}&z=12&output=embed`;

  return (
    <section
      id="lokasi"
      style={{ background: "var(--color-base)", borderTop: "1px solid #2e3129" }}
    >
      <div className="max-w-5xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <p
              className="text-xs mb-2"
              style={{
                fontFamily: "var(--font-mono)",
                color: "#4a4f4c",
                letterSpacing: "0.06em",
              }}
            >
              {`LAT ${lat.toFixed(4)} · LNG ${lng.toFixed(4)}`}
            </p>
            <h2 className="text-2xl font-bold" style={{ color: "var(--color-text-on-base)" }}>
              Area Layanan
            </h2>
          </div>
          <p className="text-sm" style={{ color: "#6b7370", maxWidth: "320px" }}>
            Kami melayani wilayah {namaKota} dan sekitarnya. Tersedia layanan in-house training di lokasi perusahaan Anda.
          </p>
        </div>

        <div style={{ border: "1px solid #2e3129", overflow: "hidden", height: "360px" }}>
          <iframe
            src={src}
            width="100%"
            height="100%"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Peta wilayah layanan ${namaKota}`}
          />
        </div>
      </div>
    </section>
  );
}
