import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

// Noch keine eigene Domain — läuft auf der Vercel-URL. Bei Domain-Kauf hier umstellen
// (og:image/sitemap/robots brechen sonst: sie zeigen auf eine nicht erreichbare Domain).
const SITE_URL = "https://holzkunst-borne-next.vercel.app";
const OG_IMAGE = "/images/og-treppe.jpg"; // Landscape-Crop des Hero-Startbilds (freischwebende Treppe)

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Holzkunst Borne – Maßgefertigte Treppen, Parkett & Möbel | Region Trier",
    template: "%s – Holzkunst Borne",
  },
  description:
    "Schreinermeister in 5. Generation aus Trierweiler bei Trier: handgefertigte Treppen, Parkett und Maßmöbel. Maßarbeit für die Region Trier und den Großraum Luxemburg. Jedes Stück ein Unikat.",
  keywords: [
    "Schreiner Trier",
    "Tischler Trier",
    "Treppenbau Trier",
    "Maßmöbel Trier",
    "Parkett verlegen Trier",
    "Schreinermeister Trierweiler",
    "Innentüren Eiche",
    "Einbauschrank Maßanfertigung",
    "Holzkunst Borne",
  ],
  authors: [{ name: "Julian Borne" }],
  creator: "Julian Borne",
  publisher: "Holzkunst Borne",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Holzkunst Borne – Maßgefertigtes Handwerk aus der Region Trier",
    description:
      "Treppen, Parkett und Maßmöbel. Zeitlos. Modern. Langlebig. Jedes Stück ein Unikat.",
    url: SITE_URL,
    siteName: "Holzkunst Borne",
    type: "website",
    locale: "de_DE",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Freischwebende Massivholztreppe mit indirekter LED-Beleuchtung von Holzkunst Borne",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Holzkunst Borne – Maßgefertigtes Handwerk aus der Region Trier",
    description:
      "Treppen, Parkett und Maßmöbel. Zeitlos. Modern. Langlebig. Jedes Stück ein Unikat.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

// Strukturierte Daten für lokale Suche (Google Rich Results / Maps)
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  name: "Holzkunst Borne",
  description:
    "Schreinermeister in 5. Generation aus Trierweiler bei Trier: handgefertigte Treppen, Parkett und Maßmöbel für die Region Trier und den Großraum Luxemburg.",
  url: SITE_URL,
  image: `${SITE_URL}${OG_IMAGE}`,
  telephone: "+4916092962709",
  email: "info@holzkunst-borne.com",
  founder: { "@type": "Person", name: "Julian Borne" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Zum Katzbach 27",
    postalCode: "54311",
    addressLocality: "Trierweiler-Udelfangen",
    addressRegion: "Rheinland-Pfalz",
    addressCountry: "DE",
  },
  areaServed: [
    { "@type": "Place", name: "Trier" },
    { "@type": "Place", name: "Trierweiler" },
    { "@type": "Place", name: "Großraum Luxemburg" },
  ],
  knowsAbout: [
    "Treppenbau",
    "Parkett verlegen und aufarbeiten",
    "Maßmöbel",
    "Einbauschränke",
    "Innentüren",
    "Schreinerei",
  ],
  priceRange: "€€",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="de"
      data-scroll-behavior="smooth"
      className={`${ebGaramond.variable} ${inter.variable} antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-ink text-cream">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <SmoothScroll />
        <ScrollProgress />
        <CursorGlow />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
