import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      style={{ background: "var(--color-surface)", borderBottom: "1px solid var(--color-hairline)" }}
    >
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center gap-2 flex-wrap">
        {crumbs.map((c, i) => (
          <span key={i} className="flex items-center gap-2">
            {i > 0 && (
              <span style={{ color: "var(--color-hairline)", fontFamily: "var(--font-mono)", fontSize: "11px" }}>/</span>
            )}
            {c.href ? (
              <Link
                href={c.href}
                className="text-xs font-medium"
                style={{ color: "var(--color-steel)", textDecoration: "none" }}
              >
                {c.label}
              </Link>
            ) : (
              <span className="text-xs" style={{ color: "#8a9290" }}>{c.label}</span>
            )}
          </span>
        ))}
      </div>
    </nav>
  );
}
