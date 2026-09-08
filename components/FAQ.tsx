"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Apakah sertifikat pelatihan K3 diakui secara resmi?",
    a: "Ya. Seluruh program pelatihan kami mengacu pada regulasi Kemnaker RI dan menghasilkan sertifikat yang diakui secara nasional sesuai peraturan perundang-undangan K3 yang berlaku.",
  },
  {
    q: "Berapa lama durasi pelatihan K3?",
    a: "Durasi bervariasi tergantung program: pelatihan Ahli K3 Umum berlangsung 12 hari, operator alat berat 3–5 hari, sedangkan pelatihan teknis lainnya umumnya 1–3 hari.",
  },
  {
    q: "Apakah pelatihan bisa dilakukan secara in-house di perusahaan kami?",
    a: "Tentu. Kami menyediakan layanan in-house training di lokasi perusahaan Anda. Hubungi kami untuk penjadwalan dan penawaran khusus grup.",
  },
  {
    q: "Apa saja persyaratan peserta untuk mengikuti pelatihan K3?",
    a: "Persyaratan umum meliputi: minimal lulusan SMA/SMK, surat penugasan dari perusahaan, dan foto identitas. Persyaratan spesifik tiap program akan kami informasikan saat pendaftaran.",
  },
  {
    q: "Bagaimana cara mendaftar dan berapa biayanya?",
    a: "Pendaftaran dapat dilakukan via WhatsApp atau email. Biaya pelatihan bervariasi per program — hubungi kami untuk mendapatkan penawaran harga terbaik sesuai kebutuhan perusahaan Anda.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      style={{ background: "var(--color-surface)", borderTop: "1px solid var(--color-hairline)" }}
    >
      <div className="max-w-5xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <p
              className="text-xs mb-2"
              style={{
                fontFamily: "var(--font-mono)",
                color: "#8a9290",
                letterSpacing: "0.06em",
              }}
            >
              FAQ · {faqs.length} pertanyaan
            </p>
            <h2 className="text-2xl font-bold" style={{ color: "var(--color-text-on-surface)" }}>
              Pertanyaan Umum
            </h2>
          </div>
        </div>

        {/* Accordion — gaya dokumen, bukan card */}
        <div style={{ border: "1px solid var(--color-hairline)" }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{ borderTop: i === 0 ? "none" : "1px solid var(--color-hairline)" }}
            >
              <button
                className="w-full text-left flex items-start justify-between gap-6 px-5 py-4"
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  color: "var(--color-text-on-surface)",
                }}
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-medium text-sm leading-snug" style={{ flex: 1 }}>
                  {faq.q}
                </span>
                <span
                  className="flex-shrink-0 text-lg leading-none"
                  style={{
                    color: "var(--color-steel)",
                    transform: open === i ? "rotate(45deg)" : "none",
                    transition: "transform 0.2s ease",
                    display: "inline-block",
                    marginTop: "1px",
                  }}
                >
                  +
                </span>
              </button>

              {open === i && (
                <div
                  className="px-5 pb-5 text-sm leading-relaxed"
                  style={{
                    color: "#5a5f5c",
                    borderTop: "1px solid var(--color-hairline)",
                    paddingTop: "14px",
                  }}
                >
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
