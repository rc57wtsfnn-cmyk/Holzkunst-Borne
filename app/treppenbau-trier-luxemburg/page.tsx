import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Treppenbauer für Trier & Luxemburg | Holzkunst Borne",
  description:
    "Individuell geplante Holztreppen vom Schreinermeister: Faltwerktreppen, moderne Treppen und passende Geländer für Trier, Trierweiler und Luxemburg.",
  alternates: { canonical: "/treppenbau-trier-luxemburg" },
};

const details = [
  { title: "Passend zum Raum", text: "Grundriss, Öffnung, Anschlüsse und Laufweg fließen in die Planung ein. So fügt sich die Treppe sinnvoll in den vorhandenen Raum." },
  { title: "Material und Gestaltung", text: "Holzart, Oberflächen und Details stimmen wir auf deinen Einrichtungsstil ab – von ruhigem Eichenholz bis zu einem modernen, klaren Auftritt." },
  { title: "Sorgfältige Umsetzung", text: "Von Aufmaß und Abstimmung bis zur Montage hast du einen direkten Ansprechpartner: Schreinermeister Julian Borne." },
];

export default function TreppenbauPage() {
  return (
    <div>
      <section className="border-b border-line bg-ink2 px-6 pb-20 pt-44 md:px-12 md:pb-28">
        <div className="mx-auto max-w-7xl">
          <span className="eyebrow mb-5 block">Holzkunst Borne · Schreinermeister Julian Borne</span>
          <h1 className="max-w-4xl font-serif text-[clamp(2.8rem,6vw,5.4rem)] leading-[1.05]">
            Treppenbau für Trier
            <br />
            <em className="font-serif italic text-gold">und Luxemburg.</em>
          </h1>
          <p className="mt-8 max-w-2xl font-sans text-lg font-light leading-[1.85] text-muted">
            Eine Holztreppe prägt den ganzen Raum. Ich plane und fertige individuelle Treppen, die zu deinem Zuhause, den vorhandenen Maßen und deinen Vorstellungen passen – in Trier, Trierweiler und im Großraum Luxemburg.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/kontakt" className="border border-gold bg-gold px-7 py-3.5 font-sans text-sm uppercase tracking-[0.16em] text-ink transition-colors hover:bg-goldlt">Treppe anfragen</Link>
            <Link href="/projekte#treppen" className="border border-cream/40 px-7 py-3.5 font-sans text-sm uppercase tracking-[0.16em] text-cream transition-colors hover:border-cream">Treppenprojekte ansehen</Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">
          <span className="eyebrow mb-5 block">Individuell geplant</span>
          <h2 className="max-w-3xl font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1.12]">
            Welche Treppe passt zu deinem Haus?
          </h2>
          <p className="mt-6 max-w-2xl font-sans text-sm font-light leading-[1.9] text-muted">
            Ob Faltwerktreppe aus Eiche, moderne Holztreppe oder eine Lösung mit Glasgeländer: Jede Planung beginnt mit den baulichen Gegebenheiten und der Frage, wie sich die Treppe im Alltag anfühlen soll. Gemeinsam stimmen wir Form, Holz und Ausführung ab.
          </p>
          <div className="mt-12 grid gap-px bg-line md:grid-cols-3">
            {details.map((item, index) => (
              <article key={item.title} className="bg-ink p-8 md:p-10">
                <span className="font-sans text-xs tracking-[0.18em] text-gold">0{index + 1}</span>
                <h3 className="mt-5 font-serif text-2xl">{item.title}</h3>
                <p className="mt-4 font-sans text-sm font-light leading-[1.85] text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink2 px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:gap-20">
          <div>
            <span className="eyebrow mb-5 block">Trier · Trierweiler · Luxemburg</span>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] leading-tight">
              Vom ersten Aufmaß bis zur fertigen Treppe.
            </h2>
          </div>
          <div className="space-y-5 font-sans text-sm font-light leading-[1.9] text-muted">
            <p>
              Meine Werkstatt liegt in Trierweiler-Udelfangen, nahe Trier und der luxemburgischen Grenze. Ich betreue Treppenprojekte in der Region persönlich und stimme die Ausführung direkt mit dir ab.
            </p>
            <p>
              Für eine erste Einschätzung besprechen wir Einbausituation, Maße, gewünschte Holzart und Stil. Danach erhältst du eine abgestimmte Planung und ein konkretes Angebot.
            </p>
            <div className="flex flex-wrap gap-5 pt-2">
              <Link href="/kontakt" className="text-gold underline underline-offset-4">Unverbindlich Kontakt aufnehmen</Link>
              <Link href="/schreiner-trier" className="text-gold underline underline-offset-4">Weitere Schreinerarbeiten in Trier</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
