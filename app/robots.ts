import type { MetadataRoute } from "next";

// Noch keine eigene Domain — läuft auf der Vercel-URL. Bei Domain-Kauf hier umstellen.
const BASE = "https://holzkunst-borne-next.vercel.app";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
