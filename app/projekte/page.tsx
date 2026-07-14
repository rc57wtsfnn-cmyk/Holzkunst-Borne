import type { Metadata } from "next";
import ProjectShowcase from "@/components/ProjectShowcase";

export const metadata: Metadata = {
  title: "Projekte",
  description:
    "Ausgewählte Arbeiten von Holzkunst Borne — Treppen, Parkett und Maßmöbel aus der Region Trier.",
  alternates: { canonical: "/projekte" },
};

export default function ProjektePage() {
  return (
    <>
      {/* PAGE HEAD */}
      <section className="relative border-b border-line bg-ink2 px-6 pb-20 pt-44 md:px-12">
        <span className="eyebrow mb-5 block">Referenzen</span>
        <h1 className="font-serif text-[clamp(3rem,6vw,5.5rem)] leading-[1.05]">
          Ausgewählte
          <br />
          <em className="font-serif italic text-gold">Arbeiten.</em>
        </h1>
      </section>

      <ProjectShowcase />
    </>
  );
}
