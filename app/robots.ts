import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = "https://trainingk3nusantara.id"; // ganti dengan domain aktual
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${base}/sitemap.xml`,
  };
}
