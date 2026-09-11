import type { Metadata } from "next";
import Link from "next/link";
import WaIcon from "@/components/WaIcon";
import WaFloatingButton from "@/components/WaFloatingButton";
import "./globals.css";

export const metadata: Metadata = {
  title: "Training K3 Profesional",
  description: "Lembaga pelatihan dan konsultasi K3 terpercaya, bersertifikat Kemnaker RI.",
};

const quickLinks = [
  { label: "Beranda", href: "/" },
  { label: "Pelatihan", href: "/#pelatihan" },
  { label: "Jasa", href: "/#jasa" },
  { label: "Kajian", href: "/#kajian" },
  { label: "Kota yang Dilayani", href: "/#kota" },
  { label: "FAQ", href: "/#faq" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="min-h-screen flex flex-col">
        <div className="flex-1">{children}</div>

        {/* Footer 3 kolom */}
        <footer style={{ background: "var(--color-base)", borderTop: "1px solid #2e3129" }}>
          <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Kolom 1: Logo + deskripsi */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-xs font-bold px-2 py-1 leading-none"
                  style={{ background: "var(--color-accent)", color: "var(--color-base)", fontFamily: "var(--font-mono)" }}
                >
                  K3
                </span>
                <span className="font-semibold" style={{ color: "var(--color-text-on-base)" }}>TrainingPro</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#6b7370", maxWidth: "240px" }}>
                Lembaga pelatihan dan konsultasi K3 profesional. Melayani seluruh Indonesia.
              </p>
            </div>

            {/* Kolom 2: Quick links */}
            <div>
              <p
                className="text-xs mb-4"
                style={{ fontFamily: "var(--font-mono)", color: "#4a4f4c", letterSpacing: "0.06em" }}
              >
                NAVIGASI
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                {quickLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm"
                      style={{ color: "#6b7370", textDecoration: "none" }}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kolom 3: Kontak */}
            <div>
              <p
                className="text-xs mb-4"
                style={{ fontFamily: "var(--font-mono)", color: "#4a4f4c", letterSpacing: "0.06em" }}
              >
                KONTAK
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/6208118500177"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-90"
                  style={{ color: "#25D366", textDecoration: "none" }}
                >
                  <WaIcon size={15} />
                  0811-8500-177
                </a>
                <p className="text-sm" style={{ color: "#6b7370" }}>Senin–Sabtu, 08.00–17.00 WITA</p>
                <p className="text-sm" style={{ color: "#6b7370" }}>Melayani seluruh Indonesia</p>
              </div>
            </div>
          </div>

          {/* Copyright bar */}
          <div
            className="max-w-5xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-2"
            style={{ borderTop: "1px solid #2e3129" }}
          >
            <p className="text-xs" style={{ color: "#4a4f4c" }}>
              © {new Date().getFullYear()} TrainingPro K3. All rights reserved.
            </p>
            <p
              className="text-xs"
              style={{ fontFamily: "var(--font-mono)", color: "#3a3f3c" }}
            >
              v1.0 · {new Date().getFullYear()}
            </p>
          </div>
        </footer>
        <WaFloatingButton />
      </body>
    </html>
  );
}
