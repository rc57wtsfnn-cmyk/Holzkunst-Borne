import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false },
};

export default function ImpressumPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 pb-28 pt-44 md:px-12">
      <h1 className="font-serif text-[clamp(2.4rem,5vw,3.6rem)]">Impressum</h1>
      <span className="my-8 block h-px w-10 bg-gold" />

      <div className="space-y-8 font-sans text-[0.92rem] font-light leading-[1.9] text-muted">
        <div>
          <h2 className="mb-2 font-serif text-lg text-cream">Angaben gemäß § 5 DDG</h2>
          <p>
            Holzkunst Borne
            <br />
            Inh. Julian Borne
            <br />
            Zum Katzbach 27
            <br />
            54311 Trierweiler-Udelfangen
          </p>
        </div>
        <div>
          <h2 className="mb-2 font-serif text-lg text-cream">Kontakt</h2>
          <p>
            Telefon: 0160 92962709
            <br />
            E-Mail: info@holzkunst-borne.com
          </p>
        </div>
        <div>
          <h2 className="mb-2 font-serif text-lg text-cream">Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DE457815895
          </p>
        </div>
        <div>
          <h2 className="mb-2 font-serif text-lg text-cream">
            Berufsrechtliche Angaben
          </h2>
          <p>
            Gesetzliche Berufsbezeichnung: Tischlermeister (verliehen in der
            Bundesrepublik Deutschland)
            <br />
            Zuständige Kammer: Handwerkskammer Trier, Loebstraße 18, 54292 Trier
            <br />
            Es gelten die Handwerksordnung (HwO) und die berufsständischen
            Regelungen der Handwerkskammer Trier, einsehbar unter{" "}
            <a
              href="https://www.gesetze-im-internet.de/hwo/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold underline underline-offset-4"
            >
              gesetze-im-internet.de/hwo
            </a>
            .
          </p>
        </div>
        <div>
          <h2 className="mb-2 font-serif text-lg text-cream">
            Verbraucherstreitbeilegung
          </h2>
          <p>
            Wir sind nicht verpflichtet und nicht bereit, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </div>
      </div>
    </section>
  );
}
