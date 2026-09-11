export function generateArticleTitle(namaLayanan: string, namaKota: string): string {
  const base = `${namaLayanan} ${namaKota}`;
  if (base.length >= 50 && base.length <= 60) {
    return base;
  }
  if (base.length < 50) {
    const suffixes = [" | Sertifikasi Resmi", " | Bersertifikat", " | Resmi Kemnaker", " | Resmi", " | K3"];
    for (const suf of suffixes) {
      const candidate = base + suf;
      if (candidate.length >= 50 && candidate.length <= 60) {
        return candidate;
      }
    }
    if (base.length + " | Resmi".length <= 60) {
      return base + " | Resmi";
    }
  }
  return base;
}

export function generateArticleDescription(namaLayanan: string, namaKota: string): string {
  let text = `Ikuti ${namaLayanan} di ${namaKota} bersama tim berpengalaman. Sertifikasi resmi Kemnaker RI & jadwal fleksibel. Konsultasi gratis via WhatsApp sekarang!`;
  if (text.length > 160) {
    text = `Daftar ${namaLayanan} di ${namaKota}. Program K3 resmi Kemnaker RI bersama instruktur berpengalaman. Konsultasi & pendaftaran gratis via WA!`;
  }
  if (text.length > 160) {
    text = `${namaLayanan} di ${namaKota} bersertifikat resmi Kemnaker RI. Tingkatkan kompetensi K3 perusahaan Anda. Hubungi kami untuk konsultasi gratis!`;
  }
  if (text.length > 160) {
    const truncated = text.slice(0, 157);
    text = truncated.slice(0, truncated.lastIndexOf(" ")) + "...";
  }
  return text;
}

export function generateKotaTitle(namaKota: string): string {
  const base = `Training K3 & Sertifikasi Resmi ${namaKota}`;
  if (base.length >= 50 && base.length <= 60) {
    return base;
  }
  if (base.length < 50) {
    const suffixes = [" | Pelatihan & Jasa K3", " | Jasa K3 Profesional", " | Kemnaker RI", " | TrainingPro"];
    for (const suf of suffixes) {
      const candidate = base + suf;
      if (candidate.length >= 50 && candidate.length <= 60) {
        return candidate;
      }
    }
    if (base.length + " | TrainingPro".length <= 60) {
      return base + " | TrainingPro";
    }
  }
  return base;
}

export function generateKotaDescription(namaKota: string): string {
  let text = `Layanan pelatihan & sertifikasi K3 resmi Kemnaker RI di ${namaKota} dan sekitarnya. 62+ program profesional. Hubungi kami untuk konsultasi gratis!`;
  if (text.length > 160) {
    text = `Program pelatihan dan jasa K3 terpercaya di ${namaKota} dan sekitarnya. Sertifikasi resmi Kemnaker RI. Konsultasi & info pendaftaran via WA!`;
  }
  if (text.length > 160) {
    const truncated = text.slice(0, 157);
    text = truncated.slice(0, truncated.lastIndexOf(" ")) + "...";
  }
  return text;
}
