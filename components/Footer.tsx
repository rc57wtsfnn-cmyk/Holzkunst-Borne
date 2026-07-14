import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink px-6 py-6 md:px-12">
      <div className="flex flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
        <div className="flex flex-col items-center gap-2 font-sans text-[0.72rem] tracking-[0.08em] text-muted md:flex-row md:gap-8">
          <span>Julian Borne</span>
          <span className="hidden text-faint md:inline">·</span>
          {/* py-1.5 gibt den kleinen Textlinks eine brauchbare Tippfläche auf Touch */}
          <a
            href="https://maps.google.com/?q=Zum+Katzbach+27,+54311+Trierweiler-Udelfangen"
            target="_blank"
            rel="noopener noreferrer"
            className="py-1.5 transition-colors hover:text-cream md:py-0"
          >
            Zum Katzbach 27, 54311 Trierweiler-Udelfangen
          </a>
          <span className="hidden text-faint md:inline">·</span>
          <a href="tel:+4916092962709" className="py-1.5 transition-colors hover:text-cream md:py-0">
            0160 92962709
          </a>
        </div>
        <div className="flex gap-6 font-sans text-[0.72rem] tracking-[0.08em] text-muted">
          <Link href="/impressum" className="py-1.5 transition-colors hover:text-cream md:py-0">
            Impressum
          </Link>
          <Link href="/datenschutz" className="py-1.5 transition-colors hover:text-cream md:py-0">
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
}
