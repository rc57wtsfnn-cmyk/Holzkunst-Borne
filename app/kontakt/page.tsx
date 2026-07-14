import type { Metadata } from "next";
import { Suspense } from "react";
import ParallaxImage from "@/components/ParallaxImage";
import Reveal from "@/components/Reveal";
import ScrollLine from "@/components/ScrollLine";
import ScrollUnderline from "@/components/ScrollUnderline";
import KontaktStatus from "@/components/KontaktStatus";

export const metadata: Metadata = {
  title: "Über uns & Kontakte",
  description:
    "Julian Borne — Schreinermeister in 5. Generation aus Trierweiler-Udelfangen bei Trier. Maßarbeit für die Region Trier und den Großraum Luxemburg. Jetzt unverbindlich anfragen.",
  alternates: { canonical: "/kontakt" },
};

// Einbauschrank in der Dachschräge — gleiches Schlüsselbild wie in der Hero
const aboutImage = "/images/IMG-20260625-WA0014.jpg";

const werte = [
  {
    n: "01",
    title: "Maßarbeit",
    text: "Jedes Stück wird für deinen Raum geplant und gefertigt. Keine Vorlage, keine Massenware — sondern eine Lösung, die exakt passt.",
  },
  {
    n: "02",
    title: "Ehrlichkeit",
    text: "Ich sage dir vorher, was geht und was nicht. Klare Absprachen, faire Preise, keine versteckten Kosten.",
  },
  {
    n: "03",
    title: "Langlebigkeit",
    text: "Was ich baue, soll Jahrzehnte halten. Gutes Holz, saubere Verbindungen, ehrliches Handwerk.",
  },
];

export default function KontaktPage() {
  return (
    <>
      {/* PAGE HEAD */}
      <section className="relative border-b border-line bg-ink2 px-6 pb-20 pt-44 md:px-12">
        <span className="eyebrow mb-5 block">Hinter Holzkunst Borne</span>
        <h1 className="font-serif text-[clamp(3rem,6vw,5.5rem)] leading-[1.05]">
          Junger Schreiner.
          <br />
          <em className="font-serif italic text-gold">Alter Anspruch.</em>
        </h1>
      </section>

      {/* ABOUT */}
      <section className="grid items-stretch md:grid-cols-[0.95fr_1.05fr]">
        <ParallaxImage
          src={aboutImage}
          alt="Einbauschrank in der Dachschräge mit Eichen-Regalnische"
          className="min-h-[80vw] md:min-h-full"
          imgClassName="object-[center_35%]"
        />
        <div className="flex flex-col justify-center bg-ink2 p-8 md:p-20">
          <Reveal>
            <span className="eyebrow mb-4 block">Über mich</span>
            <h2 className="mb-8 font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1.08]">
              Handwerk mit Herkunft.
              <br />
              Qualität mit{" "}
              <ScrollUnderline>
                <em className="font-serif italic text-gold">Zukunft</em>
              </ScrollUnderline>
              .
            </h2>
            <div className="space-y-5 font-sans text-[0.92rem] font-light leading-[1.9] text-muted">
              <p>
                Ich bin <strong className="font-normal text-cream">Julian Borne</strong>,
                Schreinermeister und die{" "}
                <strong className="font-normal text-cream">
                  5. Generation einer Schreinerfamilie
                </strong>
                . Seit Generationen steht der Name Borne für echtes Handwerk, Präzision
                und den Anspruch, aus Holz etwas Besonderes zu schaffen.
              </p>
              <p>
                Mit Holzkunst Borne verbinde ich traditionelle Handwerkskunst mit
                modernem Design und innovativen Lösungen. Mein Ziel ist es, individuelle
                Wohnräume zu gestalten, die nicht nur optisch begeistern, sondern auch
                durch Qualität, Funktionalität und Langlebigkeit überzeugen.
              </p>
              <p>
                Jedes Projekt beginnt mit einer Idee und endet mit einem Unikat —
                gefertigt mit höchster Präzision, hochwertigen Materialien und viel
                Liebe zum Detail. Ob maßgefertigte Möbel, exklusive Garderoben,
                stilvolle Treppen, hochwertige Türen oder Parkettarbeiten — ich setze
                Ihre Wünsche mit handwerklicher Perfektion um.
              </p>
              <p>
                Ich nehme mir Zeit für eine persönliche Beratung, arbeite zuverlässig
                und lege größten Wert auf saubere Ausführung und höchste Qualität. Denn
                echte Handwerkskunst erkennt man nicht nur am fertigen Ergebnis, sondern
                an jedem einzelnen Arbeitsschritt.
              </p>
            </div>
            <p className="mt-8 font-serif text-2xl italic text-gold">Julian Borne</p>
          </Reveal>
        </div>
      </section>

      {/* WERTE */}
      <section className="px-6 py-24 md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-col items-center text-center">
              <span className="eyebrow mb-5 block">Wofür ich stehe</span>
              <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1.1]">
                <ScrollUnderline delay={0.3}>Drei Versprechen.</ScrollUnderline>
              </h2>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-px bg-line md:grid-cols-3">
            {werte.map((w, i) => (
              <Reveal key={w.n} delay={i * 0.1}>
                <div className="group relative h-full overflow-hidden bg-ink p-9 transition-[transform,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:bg-ink2">
                  {/* Gold-Linie: Desktop beim Hover, Mobile beim Reinscrollen */}
                  <span className="absolute left-0 top-0 hidden h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100 md:block" />
                  <ScrollLine className="absolute left-0 top-0 w-full md:hidden" delay={0.25} />
                  <div className="font-serif text-5xl text-faint transition-colors duration-500 group-hover:text-gold">
                    {w.n}
                  </div>
                  <h3 className="mt-5 font-serif text-2xl transition-colors duration-500 group-hover:text-cream">
                    {w.title}
                  </h3>
                  <p className="mt-3 font-sans text-[0.85rem] font-light leading-[1.85] text-muted">
                    {w.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="anfrage" className="bg-ink2 px-6 py-24 md:px-12 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">
          {/* Links: Kontaktwege */}
          <Reveal>
            <span className="eyebrow mb-4 block">Kontakt</span>
            {/* leading eng, sonst hängt die Unterstreichung zu weit unterm Satz */}
            <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1.1]">
              <ScrollUnderline>Lass uns reden.</ScrollUnderline>
            </h2>
            <p className="mb-10 mt-8 max-w-md font-sans text-[0.92rem] font-light leading-[1.9] text-muted">
              Du hast ein Projekt im Kopf? Schreib mir per WhatsApp, ruf an oder nutz
              das Formular. Ich melde mich meistens schneller, als du denkst.
            </p>
            <div className="grid gap-px bg-line">
              <a
                href="https://wa.me/4916092962709"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 bg-ink2 p-6 transition-colors hover:bg-ink3"
              >
                <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full border border-faint text-gold">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
                  </svg>
                </span>
                <span>
                  <span className="block font-sans text-[0.62rem] uppercase tracking-[0.18em] text-gold">
                    WhatsApp
                  </span>
                  <span className="font-sans text-[0.92rem] text-cream">0160 92962709</span>
                </span>
              </a>
              <a
                href="tel:+4916092962709"
                className="flex items-center gap-5 bg-ink2 p-6 transition-colors hover:bg-ink3"
              >
                <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full border border-faint text-gold">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-[18px] w-[18px]">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </span>
                <span>
                  <span className="block font-sans text-[0.62rem] uppercase tracking-[0.18em] text-gold">
                    Telefon
                  </span>
                  <span className="font-sans text-[0.92rem] text-cream">0160 92962709</span>
                </span>
              </a>
              <a
                href="https://maps.google.com/?q=Zum+Katzbach+27,+54311+Trierweiler-Udelfangen"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 bg-ink2 p-6 transition-colors hover:bg-ink3"
              >
                <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full border border-faint text-gold">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-[18px] w-[18px]">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span>
                  <span className="block font-sans text-[0.62rem] uppercase tracking-[0.18em] text-gold">
                    Werkstatt
                  </span>
                  <span className="font-sans text-[0.92rem] text-cream">
                    Zum Katzbach 27, 54311 Trierweiler-Udelfangen
                  </span>
                </span>
              </a>
            </div>
          </Reveal>

          {/* Rechts: Formular */}
          <Reveal delay={0.1}>
            <div className="border border-line bg-ink p-8 md:p-10">
              <h3 className="font-serif text-2xl">Projekt anfragen</h3>
              <p className="mt-1 font-sans text-[0.82rem] text-muted">
                Erzähl mir kurz, worum es geht. Unverbindlich.
              </p>
              <form action="/api/kontakt" method="POST" className="mt-8 space-y-5">
                <Field label="Name">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Dein Name"
                    className="field-input"
                  />
                </Field>
                <Field label="E-Mail oder Telefon">
                  <input
                    type="text"
                    name="kontakt"
                    required
                    placeholder="So erreiche ich dich"
                    className="field-input"
                  />
                </Field>
                <Field label="Art des Projekts">
                  <select name="art" className="field-input cursor-pointer">
                    <option>Treppe</option>
                    <option>Parkett / Boden</option>
                    <option>Maßmöbel</option>
                    <option>Tür</option>
                    <option>Aufarbeitung</option>
                    <option>Anderes</option>
                  </select>
                </Field>
                <Field label="Nachricht">
                  <textarea
                    name="nachricht"
                    placeholder="Was schwebt dir vor…"
                    className="field-input min-h-28 resize-y"
                  />
                </Field>
                <button
                  type="submit"
                  className="w-full border border-cream/50 py-3.5 text-center font-sans text-[0.72rem] uppercase tracking-[0.2em] text-cream transition-colors hover:border-cream hover:bg-cream hover:text-ink"
                >
                  Anfrage senden
                </button>
                <p className="font-sans text-[0.7rem] leading-[1.7] text-faint">
                  Deine Angaben werden nur zur Bearbeitung deiner Anfrage verwendet und
                  nicht weitergegeben.
                </p>
                <Suspense fallback={null}>
                  <KontaktStatus />
                </Suspense>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block font-sans text-[0.65rem] uppercase tracking-[0.16em] text-gold">
        {label}
      </span>
      {children}
    </label>
  );
}
