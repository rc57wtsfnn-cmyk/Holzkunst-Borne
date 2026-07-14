import type { MetadataRoute } from "next";

// Noch keine eigene Domain — läuft auf der Vercel-URL. Bei Domain-Kauf hier umstellen.
const BASE = "https://holzkunst-borne-next.vercel.app";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  // Impressum & Datenschutz bewusst ausgelassen (noindex)
  return [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/projekte`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/kontakt`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
  ];
}
