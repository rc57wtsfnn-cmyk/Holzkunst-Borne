import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import ParallaxImage from "@/components/ParallaxImage";
import ScrollLine from "@/components/ScrollLine";
import ScrollUnderline from "@/components/ScrollUnderline";
import MagneticButton from "@/components/MagneticButton";
import { sculptureImage, diningImage, ctaImage, teaserImages } from "@/lib/images";

const leistungen = [
  {
    num: "01",
    title: "Treppen",
    text: "Freischwebend, mit Glasgeländer oder klassisch — Treppen, die Räume in Szene setzen. Auf Wunsch mit indirekter LED-Beleuchtung.",
    img: teaserImages.treppen,
    href: "/projekte#treppen",
  },
  {
    num: "02",
    title: "Parkett & Böden",
    text: "Fischgrät, Landhausdiele, Massivholz — Verlegung und Aufarbeitung. Alte Böden bekommen ein zweites Leben.",
    img: teaserImages.parkett,
    href: "/projekte#parkett",
  },
  {
    num: "03",
    title: "Maßmöbel & Türen",
    text: "Einbauschränke, Badmöbel, Esstische, Innentüren — gefertigt für den Raum, den du dir vorstellst.",
    img: teaserImages.moebel,
    href: "/projekte#moebel",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* STATEMENT */}
      <section className="bg-ink2 px-6 py-24 text-center md:px-12 md:py-28">
        <ScrollLine className="mx-auto mb-12 w-16" origin="center" delay={0.1} />
        <Reveal y={36}>
          <p className="group mx-auto max-w-3xl cursor-default font-serif text-[clamp(1.5rem,3.5vw,2.4rem)] italic leading-[1.45] text-cream/90 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:text-cream">
            Nicht jedes Projekt fängt bei null an. Manchmal steckt der größte Schatz
            im bereits Bestehenden — ganz nach meinem Motto:{" "}
            <span className="relative inline-block">
              <em className="font-serif italic text-gold transition-colors duration-500 group-hover:text-goldlt">
                Aus Ranz mach Glanz.
              </em>
              {/* Desktop: Unterstreichung beim Hover — Mobile: zeichnet sich beim Reinscrollen */}
              <span className="absolute -bottom-1 left-0 hidden h-px w-0 bg-gold/70 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full md:block" />
              <ScrollLine className="absolute -bottom-1 left-0 w-full bg-gold/70 md:hidden" delay={0.4} />
            </span>
          </p>
        </Reveal>
      </section>

      {/* LEISTUNGEN */}
      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span className="eyebrow mb-5 block">Leistungen</span>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1.08]">
              Handwerk,
              <br />
              das bleibt.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-px bg-line md:grid-cols-3">
            {leistungen.map((l, i) => (
              <Reveal key={l.num} delay={i * 0.1}>
                <Link
                  href={l.href}
                  className="group flex h-full flex-col bg-ink transition-[transform,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:bg-ink2"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={l.img}
                      alt={l.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover brightness-[0.82] transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 group-hover:brightness-100"
                    />
                    {/* dunkler Schleier lichtet sich beim Hover */}
                    <span className="absolute inset-0 bg-ink/20 opacity-100 transition-opacity duration-700 group-hover:opacity-0" />
                    {/* Gold-Linie: Desktop beim Hover, Mobile beim Reinscrollen */}
                    <span className="absolute left-0 top-0 hidden h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100 md:block" />
                    <ScrollLine className="absolute left-0 top-0 z-10 w-full md:hidden" delay={0.25} />
                  </div>
                  <div className="flex flex-1 flex-col p-8 md:p-9">
                    <span className="font-sans text-[0.65rem] tracking-[0.2em] text-faint transition-colors duration-500 group-hover:text-gold">
                      {l.num}
                    </span>
                    <h3 className="mt-5 font-serif text-2xl transition-colors duration-500 group-hover:text-gold">
                      {l.title}
                    </h3>
                    <p className="mt-3 flex-1 font-sans text-[0.85rem] font-light leading-[1.85] text-muted">
                      {l.text}
                    </p>
                    <span className="mt-7 inline-flex translate-x-0 items-center gap-2 font-sans text-[0.7rem] uppercase tracking-[0.18em] text-gold opacity-100 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:-translate-x-2 md:opacity-0 md:group-hover:translate-x-0 md:group-hover:opacity-100">
                      Mehr sehen
                      <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE: Skulptur-Schreibtisch */}
      <section className="grid items-stretch md:grid-cols-2">
        <ParallaxImage
          src={sculptureImage}
          alt="Meisterstück Slatewave — geschwungener Schreibtisch aus Rüster mit Steinfurnier"
          className="min-h-[60vw] md:min-h-full"
          zoom={1.02}
          amount={12}
          imgClassName="object-[center_48%]"
        />
        <div className="flex flex-col justify-center bg-ink2 p-8 md:p-20">
          <Reveal>
            <span className="eyebrow mb-5 block">Mein Meisterstück — Slatewave</span>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1.08]">
              Wenn Form zur
              <br />
              <ScrollUnderline>
                <em className="font-serif italic text-gold">Skulptur</em>
              </ScrollUnderline>{" "}
              wird.
            </h2>
            <p className="mt-10 max-w-md font-sans text-[0.92rem] font-light leading-[1.9] text-muted">
              Ein Schreibtisch, der aus dem Boden zu wachsen scheint. Die geschwungene
              Tischplatte aus einem Stück — kein Standardmaß, keine Vorlage. So entsteht
              Maßarbeit, die man nicht kaufen, sondern nur fertigen lassen kann.
            </p>
            {/* Zeilen gleiten beim Scrollen gestaffelt von links rein */}
            <ul className="mb-10 mt-8 border-t border-line">
              {[
                "Rüster mit Steinfurnier, durchgehende Maserung",
                "Schräge Schubladen mit flächenbündigen Schwenkgriffen",
                "Korpus mit Echtsteinfurnier",
              ].map((li, i) => (
                <Reveal
                  key={li}
                  as="li"
                  x={-32}
                  y={0}
                  delay={0.15 + i * 0.15}
                  className="group flex items-center gap-4 border-b border-line py-4 pl-0 font-sans text-[0.88rem] text-muted transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] before:text-gold before:transition-transform before:duration-400 hover:pl-2 hover:text-cream hover:before:translate-x-1 before:content-['—']"
                >
                  {li}
                </Reveal>
              ))}
            </ul>
            <MagneticButton href="/projekte#moebel" variant="ghost">
              Alle Möbel ansehen
            </MagneticButton>
          </Reveal>
        </div>
      </section>

      {/* Atempause zwischen den beiden Einzelstücken */}
      <div className="h-14 bg-ink md:h-24" />

      {/* FEATURE 2: Baumkanten-Esstisch */}
      <section className="grid items-stretch md:grid-cols-[5fr_7fr]">
        <div className="order-2 flex flex-col justify-center bg-ink p-8 md:order-1 md:p-20">
          <Reveal>
            <span className="eyebrow mb-5 block">XXL Mammuteiche</span>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1.08]">
              Ein Tisch, an dem
              <br />
              man{" "}
              <ScrollUnderline>
                <em className="font-serif italic text-gold">bleibt</em>
              </ScrollUnderline>
              .
            </h2>
            <p className="mt-10 max-w-md font-sans text-[0.92rem] font-light leading-[1.9] text-muted">
              Eine Baumkanten-Platte aus XXL Mammuteiche — gefertigt aus einer
              einzigen Eichenbohle, keine Leimplatte. Kein Tisch von der Stange:
              ein Stück, das den Raum definiert und Generationen überdauert.
            </p>
            <p className="mt-5 max-w-md font-sans text-[0.82rem] font-light leading-[1.8] text-faint">
              Auf Wunsch mit Stahl-, Holz- oder Steingestell — ganz nach Kundenwunsch.
              Dein Tisch, nach deinen Maßen.
            </p>
            <div className="mt-10">
              <MagneticButton href="/kontakt" variant="gold">
                Eigenen Tisch anfragen
              </MagneticButton>
            </div>
          </Reveal>
        </div>
        <ParallaxImage
          src={diningImage}
          alt="Baumkanten-Esstisch aus massiver Eiche mit Edison-Beleuchtung"
          className="order-1 min-h-[80vw] md:order-2 md:min-h-full"
        />
      </section>

      {/* CTA-BAND */}
      <section className="relative overflow-hidden px-6 py-32 text-center md:px-12 md:py-40">
        <Image
          src={ctaImage}
          alt=""
          fill
          sizes="100vw"
          className="object-cover brightness-[0.3] saturate-[0.8]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(17,12,8,0.3)_0%,rgba(17,12,8,0.9)_75%)]" />
        <div className="relative z-10 mx-auto max-w-xl">
          <Reveal>
            <span className="eyebrow mb-5 block">Zusammenarbeiten</span>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1.1]">
              Hast du ein Projekt
              <br />
              im Kopf?
            </h2>
            <p className="mx-auto mt-6 max-w-md font-sans font-light text-muted">
              Ein Raum, der noch nicht fertig ist. Ein Boden, der neues Leben braucht.
              Eine Idee, die du noch nirgends so gesehen hast.
            </p>
            <div className="mt-10">
              <MagneticButton href="/kontakt" variant="ghost">
                Lass uns reden
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
