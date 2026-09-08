"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import WaIcon from "./WaIcon";

const WA = "https://wa.me/6208118500177";

interface NavbarProps {
  kotaSlug?: string;
  kotaNama?: string;
}

export default function Navbar({ kotaSlug, kotaNama }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const base = kotaSlug ? `/kota/${kotaSlug}` : "/";
  const beranda = kotaSlug ? `/kota/${kotaSlug}` : "/";

  const links = [
    { label: "Beranda", href: beranda },
    { label: "Pelatihan", href: `${base}#pelatihan` },
    { label: "Jasa", href: `${base}#jasa` },
    { label: "Kajian", href: `${base}#kajian` },
  ];

  const isActive = (href: string) => pathname === href.split("#")[0];

  return (
    <>
      <header
        className="sticky top-0 z-50"
        style={{ background: "var(--color-base)", borderBottom: "1px solid #2e3129" }}
      >
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
            <span
              className="text-xs font-bold px-2 py-1 leading-none"
              style={{ background: "var(--color-accent)", color: "var(--color-base)", fontFamily: "var(--font-mono)" }}
            >
              K3
            </span>
            <span className="font-semibold text-base" style={{ color: "var(--color-text-on-base)" }}>
              TrainingPro{kotaNama ? ` · ${kotaNama}` : ""}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="px-4 py-2 text-sm font-medium transition-colors"
                style={{
                  color: isActive(l.href) ? "var(--color-accent)" : "#9aa3a0",
                  textDecoration: "none",
                  borderBottom: isActive(l.href) ? "2px solid var(--color-accent)" : "2px solid transparent",
                }}
              >
                {l.label}
              </a>
            ))}
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-4 py-2 text-sm font-semibold transition-opacity hover:opacity-90 inline-flex items-center gap-2"
              style={{ background: "#25D366", color: "#fff", textDecoration: "none" }}
            >
              <WaIcon size={15} />
              WhatsApp
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block", width: "22px", height: "2px",
                  background: "var(--color-text-on-base)",
                  transition: "transform 0.2s, opacity 0.2s",
                  transform: open
                    ? i === 0 ? "translateY(7px) rotate(45deg)"
                    : i === 2 ? "translateY(-7px) rotate(-45deg)"
                    : "none"
                    : "none",
                  opacity: open && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </header>

      {/* Mobile drawer overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          style={{ background: "rgba(28,30,27,0.97)" }}
          onClick={() => setOpen(false)}
        >
          <div
            className="flex flex-col px-8 pt-24 gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-4 text-lg font-medium"
                style={{
                  color: isActive(l.href) ? "var(--color-accent)" : "var(--color-text-on-base)",
                  textDecoration: "none",
                  borderBottom: "1px solid #2e3129",
                }}
              >
                {l.label}
              </a>
            ))}
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-6 py-4 text-center text-base font-semibold inline-flex items-center justify-center gap-3"
              style={{ background: "#25D366", color: "#fff", textDecoration: "none" }}
            >
              <WaIcon size={20} />
              Hubungi via WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
}
