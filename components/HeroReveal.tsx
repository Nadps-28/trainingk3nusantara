"use client";
import { useEffect, useRef } from "react";

export default function HeroReveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "opacity 0.55s ease, transform 0.55s ease";
    el.style.opacity = "1";
    el.style.transform = "translateY(0)";
  }, []);

  return (
    <div
      ref={ref}
      style={{ opacity: 0, transform: "translateY(18px)" }}
      className="relative max-w-5xl mx-auto px-6 pb-16 pt-32 w-full"
    >
      {children}
    </div>
  );
}
