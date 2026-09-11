"use client";

import WaIcon from "./WaIcon";

const WA_NUMBER = "6208118500177";
const WA_MESSAGE = encodeURIComponent(
  "Halo, saya ingin konsultasi mengenai pelatihan & jasa K3."
);

export default function WaFloatingButton() {
  const waUrl = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hubungi kami via WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 p-3 sm:px-4 sm:py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-green-500/30 group"
      style={{
        background: "#25D366",
        color: "#ffffff",
        boxShadow: "0 8px 24px rgba(37, 211, 102, 0.4)",
        textDecoration: "none",
      }}
    >
      <div className="relative flex items-center justify-center">
        {/* Pulse effect animation */}
        <span
          className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping"
          style={{ background: "#25D366" }}
        />
        <WaIcon size={24} />
      </div>
      <span className="hidden sm:inline-block font-semibold text-sm tracking-wide">
        Chat WhatsApp
      </span>
    </a>
  );
}
