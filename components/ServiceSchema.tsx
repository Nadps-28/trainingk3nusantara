interface ServiceSchemaProps {
  namaLayanan: string;
  kategori: string;
  namaKota: string;
  slugKota: string;
  slugLayanan: string;
  deskripsi: string;
}

export default function ServiceSchema({
  namaLayanan,
  kategori,
  namaKota,
  slugKota,
  slugLayanan,
  deskripsi,
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${namaLayanan} di ${namaKota}`,
    "description": deskripsi,
    "serviceType": namaLayanan,
    "category": `K3 ${kategori}`,
    "areaServed": {
      "@type": "City",
      "name": namaKota,
      "addressCountry": "ID",
    },
    "provider": {
      "@type": "Organization",
      "name": "TrainingPro K3",
      "url": "https://trainingk3nusantara.id",
      "telephone": "+6208118500177",
      "areaServed": {
        "@type": "Country",
        "name": "Indonesia",
      },
    },
    "url": `https://trainingk3nusantara.id/kota/${slugKota}/${slugLayanan}`,
    "inLanguage": "id-ID",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
