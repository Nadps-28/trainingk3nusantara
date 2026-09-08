import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = "https://trainingpro-k3.com"; // ganti dengan domain aktual
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${base}/sitemap.xml`,
  };
}
