import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Schreiner in Trier | Maßmöbel, Treppen & Parkett – Holzkunst Borne",
  description:
    "Schreinermeister Julian Borne fertigt individuelle Möbel, Treppen und Parkettarbeiten für Trier und Umgebung. Persönlich geplant, präzise gebaut. Projekt anfragen.",
  alternates: { canonical: "/schreiner-trier" },
};

const services = [
  { title: "Treppen nach Maß", text: "Holztreppen, Faltwerktreppen und individuelle Lösungen – geplant für Raum, Stil und Alltag.", href: "/treppenbau-trier-luxemburg", link: "Treppenbau für Trier und Luxemburg" },
  { title: "Möbel nach Maß", text: "Einbauschränke, Garderoben, Badmöbel und Esstische, gefertigt passend zu deinem Zuhause.", href: "/moebel-nach-mass-trier", link: "Maßmöbel ansehen" },
  { title: "Parkett und Türen", text: "Parkett verlegen und aufarbeiten sowie Innentüren, sauber geplant und fachgerecht eingebaut.", href: "/projekte#parkett", link: "Arbeiten ansehen" },
];

export default function SchreinerTrierPage() {
  return (
    <div>
      <section className="border-b border-line bg-ink2 px-6 pb-20 pt-44 md:px-12 md:pb-28">
        <div className="mx-auto max-w-7xl">
          <span className="eyebrow mb-5 block">Holzkunst Borne · Trierweiler bei Trier</span>
          <h1 className="max-w-4xl font-serif text-[clamp(2.8rem,6vw,5.4rem)] leading-[1.05]">
            Schreiner für Trier.
            <br />
            <em className="font-serif italic text-gold">Maßarbeit aus Holz.</em>
          </h1>
          <p className="mt-8 max-w-2xl font-sans text-lg font-light leading-[1.85] text-muted">
            Ich bin Julian Borne, Schreinermeister in fünfter Generation. In meiner Werkstatt in Trierweiler-Udelfangen entstehen individuelle Treppen, Möbel, Türen und Parkettarbeiten für Trier und die Region.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/kontakt" className="border border-gold bg-gold px-7 py-3.5 font-sans text-sm uppercase tracking-[0.16em] text-ink transition-colors hover:bg-goldlt">Projekt anfragen</Link>
            <Link href="/projekte" className="border border-cream/40 px-7 py-3.5 font-sans text-sm uppercase tracking-[0.16em] text-cream transition-colors hover:border-cream">Referenzen ansehen</Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">
          <span className="eyebrow mb-5 block">Leistungen</span>
          <h2 className="max-w-3xl font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1.12]">
            Schreinerarbeiten, die zu deinem Zuhause passen.
          </h2>
          <div className="mt-12 grid gap-px bg-line md:grid-cols-3">
            {services.map((service, index) => (
              <article key={service.title} className="bg-ink p-8 md:p-10">
                <span className="font-sans text-xs tracking-[0.18em] text-gold">0{index + 1}</span>
                <h3 className="mt-5 font-serif text-2xl">{service.title}</h3>
                <p className="mt-4 font-sans text-sm font-light leading-[1.85] text-muted">{service.text}</p>
                <Link href={service.href} className="mt-7 inline-flex font-sans text-xs uppercase tracking-[0.15em] text-gold hover:text-goldlt">{service.link} <span className="ml-2" aria-hidden="true">→</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink2 px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:gap-20">
          <div>
            <span className="eyebrow mb-5 block">Persönlich vor Ort</span>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] leading-tight">
              Handwerk aus Trierweiler – für Trier und die Umgebung.
            </h2>
          </div>
          <div className="space-y-5 font-sans text-sm font-light leading-[1.9] text-muted">
            <p>
              Von meiner Werkstatt in Trierweiler-Udelfangen aus betreue ich Projekte in Trier, Trierweiler und im Großraum Luxemburg. Du sprichst direkt mit mir – vom ersten Gespräch und Aufmaß bis zur Montage.
            </p>
            <p>
              Ob ein Einbauschrank für eine Nische, eine neue Holztreppe oder ein Boden, der wieder frisch aussehen soll: Ich plane jedes Vorhaben nach den räumlichen Gegebenheiten, deinen Wünschen und dem passenden Material.
            </p>
            <p>
              Schau dir ausgewählte Arbeiten an oder erzähl mir von deinem Projekt. Eine erste Anfrage ist unverbindlich.
            </p>
            <div className="flex flex-wrap gap-5 pt-2">
              <Link href="/projekte" className="text-gold underline underline-offset-4">Ausgewählte Schreinerarbeiten</Link>
              <Link href="/kontakt" className="text-gold underline underline-offset-4">Kontakt aufnehmen</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
