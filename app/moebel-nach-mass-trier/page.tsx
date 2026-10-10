import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Möbel nach Maß in Trier | Einbauschränke – Holzkunst Borne",
  description:
    "Maßmöbel vom Schreinermeister in Trier: Einbauschränke, Garderoben, Badmöbel, TV-Boards und Tische, individuell geplant und gefertigt.",
  alternates: { canonical: "/moebel-nach-mass-trier" },
};

const steps = [
  { title: "Idee und Aufmaß", text: "Wir besprechen den Raum, deinen Bedarf und die Details. Maße und Einbausituation bilden die Grundlage für den Entwurf." },
  { title: "Material und Gestaltung", text: "Holz, Oberfläche, Farben, Griffe und Innenaufteilung stimmen wir passend zur Nutzung und zum übrigen Raum ab." },
  { title: "Fertigung und Montage", text: "Dein Möbel wird in meiner Werkstatt gefertigt und vor Ort präzise eingebaut – mit Blick auf saubere Anschlüsse und langlebige Funktion." },
];

export default function MassmoebelTrierPage() {
  return (
    <div>
      <section className="border-b border-line bg-ink2 px-6 pb-20 pt-44 md:px-12 md:pb-28">
        <div className="mx-auto max-w-7xl">
          <span className="eyebrow mb-5 block">Holzkunst Borne · Maßgefertigte Schreinerarbeiten</span>
          <h1 className="max-w-4xl font-serif text-[clamp(2.8rem,6vw,5.4rem)] leading-[1.05]">
            Möbel nach Maß
            <br />
            <em className="font-serif italic text-gold">für Trier und Umgebung.</em>
          </h1>
          <p className="mt-8 max-w-2xl font-sans text-lg font-light leading-[1.85] text-muted">
            Ein Möbelstück, das genau in deinen Raum passt: Schreinermeister Julian Borne plant und fertigt individuelle Einbauschränke, Garderoben, Badmöbel, TV-Boards und Tische in Trierweiler bei Trier.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/kontakt" className="border border-gold bg-gold px-7 py-3.5 font-sans text-sm uppercase tracking-[0.16em] text-ink transition-colors hover:bg-goldlt">Möbelprojekt anfragen</Link>
            <Link href="/projekte#moebel" className="border border-cream/40 px-7 py-3.5 font-sans text-sm uppercase tracking-[0.16em] text-cream transition-colors hover:border-cream">Möbelprojekte ansehen</Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:gap-20">
          <div>
            <span className="eyebrow mb-5 block">Passend geplant</span>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1.12]">
              Jede Nische hat Potenzial.
            </h2>
          </div>
          <div className="space-y-5 font-sans text-sm font-light leading-[1.9] text-muted">
            <p>
              Schrägen, Ecken und ungewöhnliche Grundrisse lassen sich mit passgenauen Möbeln sinnvoll nutzen. Statt ein Standardmaß an den Raum anzupassen, plane ich das Möbelstück für den Platz, den du hast.
            </p>
            <p>
              Das kann ein raumhoher Einbauschrank, eine Garderobe mit Sitzbank, ein Badmöbel, ein TV-Board oder ein Esstisch aus Massivholz sein. Funktion, Stauraum und Gestaltung werden auf dein Vorhaben abgestimmt.
            </p>
            <Link href="/projekte#moebel" className="inline-block text-gold underline underline-offset-4">Ausgewählte Maßmöbel ansehen</Link>
          </div>
        </div>
      </section>

      <section className="bg-ink2 px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <span className="eyebrow mb-5 block">Von der Idee bis zum Einbau</span>
          <h2 className="max-w-3xl font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1.12]">
            So entsteht dein Maßmöbel.
          </h2>
          <div className="mt-12 grid gap-px bg-line md:grid-cols-3">
            {steps.map((step, index) => (
              <article key={step.title} className="bg-ink2 p-8 md:p-10">
                <span className="font-sans text-xs tracking-[0.18em] text-gold">0{index + 1}</span>
                <h3 className="mt-5 font-serif text-2xl">{step.title}</h3>
                <p className="mt-4 font-sans text-sm font-light leading-[1.85] text-muted">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <span className="eyebrow mb-5 block">Trier · Trierweiler · Großraum Luxemburg</span>
            <h2 className="max-w-2xl font-serif text-[clamp(2rem,4vw,3.2rem)] leading-tight">
              Dein Raum. Deine Maße. Ein Schreinermeister als Ansprechpartner.
            </h2>
            <p className="mt-5 max-w-2xl font-sans text-sm font-light leading-[1.9] text-muted">
              Ich berate dich persönlich, plane das Möbel passend zur Einbausituation und stimme Material und Ausführung mit dir ab. Meine Werkstatt befindet sich in Trierweiler-Udelfangen.
            </p>
          </div>
          <Link href="/kontakt" className="shrink-0 border border-gold px-7 py-3.5 font-sans text-sm uppercase tracking-[0.16em] text-gold transition-colors hover:bg-gold hover:text-ink">Projekt besprechen</Link>
        </div>
      </section>
    </div>
  );
}
