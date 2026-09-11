import type { MetadataRoute } from "next";
import kotaData from "@/data/kota.json";
import layananData from "@/data/layanan.json";

// Sitemap index — referensikan sitemap per kelompok
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://trainingk3nusantara.id"; // ganti dengan domain aktual

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
  ];

  // Halaman per kota
  const kotaRoutes: MetadataRoute.Sitemap = kotaData.map((kota) => ({
    url: `${base}/kota/${kota.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Halaman artikel kota×layanan — batasi priority lebih rendah
  const artikelRoutes: MetadataRoute.Sitemap = kotaData.flatMap((kota) =>
    layananData.map((l) => ({
      url: `${base}/kota/${kota.slug}/${l.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  return [...staticRoutes, ...kotaRoutes, ...artikelRoutes];
}
