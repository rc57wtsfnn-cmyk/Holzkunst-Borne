import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
  robots: { index: false },
};

export default function DatenschutzPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 pb-28 pt-44 md:px-12">
      <h1 className="font-serif text-[clamp(2.4rem,5vw,3.6rem)]">Datenschutz</h1>
      <span className="my-8 block h-px w-10 bg-gold" />

      <div className="space-y-8 font-sans text-[0.92rem] font-light leading-[1.9] text-muted">
        <div>
          <h2 className="mb-2 font-serif text-lg text-cream">Verantwortlicher</h2>
          <p>
            Holzkunst Borne, Inh. Julian Borne, Zum Katzbach 10, 54311
            Trierweiler-Udelfangen, info@holzkunst-borne.com
          </p>
        </div>
        <div>
          <h2 className="mb-2 font-serif text-lg text-cream">Hosting</h2>
          <p>
            Diese Website wird bei Cloudflare (Cloudflare, Inc., USA) gehostet. Beim
            Aufruf verarbeitet Cloudflare technisch notwendige Zugriffsdaten (u. a.
            IP-Adresse, Zeitpunkt des Zugriffs). Mit Cloudflare besteht ein
            Auftragsverarbeitungsvertrag (Data Processing Addendum); für die
            Übermittlung in die USA greifen die EU-Standardvertragsklauseln.
            Rechtsgrundlage ist unser berechtigtes Interesse an einem sicheren,
            stabilen Betrieb der Website (Art. 6 Abs. 1 lit. f DSGVO).
          </p>
        </div>
        <div>
          <h2 className="mb-2 font-serif text-lg text-cream">Server-Logfiles</h2>
          <p>
            Beim Aufruf werden automatisch Daten erhoben, die dein Browser übermittelt:
            IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, Referrer-URL,
            Browsertyp und Betriebssystem. Zweck ist der technische Betrieb und die
            Sicherheit der Website (Art. 6 Abs. 1 lit. f DSGVO). Die Logs werden nach
            spätestens 30 Tagen gelöscht.
          </p>
        </div>
        <div>
          <h2 className="mb-2 font-serif text-lg text-cream">SSL-/TLS-Verschlüsselung</h2>
          <p>
            Diese Website nutzt aus Sicherheitsgründen eine TLS-Verschlüsselung. Eine
            verschlüsselte Verbindung erkennst du am „https://“ in der Adresszeile.
          </p>
        </div>
        <div>
          <h2 className="mb-2 font-serif text-lg text-cream">Kontaktformular</h2>
          <p>
            Wenn du das Formular nutzt, verarbeiten wir deine Angaben (Name,
            Kontaktdaten, Art des Projekts, Nachricht) ausschließlich zur Bearbeitung
            deiner Anfrage. Der technische Versand erfolgt über Brevo GmbH,
            Köpenicker Str. 126, 10179 Berlin, deren Muttergesellschaft Sendinblue
            SAS (Frankreich) ist. Die Datenspeicherung erfolgt in der EU; im Rahmen
            der Auftragsverarbeitung (u. a. Support) kann es laut Brevo in
            Einzelfällen zu einer Verarbeitung außerhalb der EU kommen, abgesichert
            durch die EU-Standardvertragsklauseln. Mit der Nutzung des Dienstes ist
            ein Auftragsverarbeitungsvertrag mit Brevo eingeschlossen.
            Rechtsgrundlage ist die Anbahnung bzw. Durchführung eines Vertrags
            (Art. 6 Abs. 1 lit. b DSGVO) sowie unser Interesse an der Beantwortung
            von Anfragen (Art. 6 Abs. 1 lit. f DSGVO). Wir speichern die Daten, bis
            die Anfrage erledigt ist; gesetzliche Aufbewahrungsfristen bleiben unberührt.
          </p>
        </div>
        <div>
          <h2 className="mb-2 font-serif text-lg text-cream">
            Kontakt per Telefon, E-Mail oder WhatsApp
          </h2>
          <p>
            Nimmst du direkt Kontakt auf, verarbeiten wir deine Angaben zur
            Bearbeitung deines Anliegens (Art. 6 Abs. 1 lit. b bzw. f DSGVO). Nutzt
            du den WhatsApp-Link, gelten zusätzlich die Datenschutzbestimmungen von
            WhatsApp (Meta). Bitte sende über WhatsApp keine sensiblen Daten.
          </p>
        </div>
        <div>
          <h2 className="mb-2 font-serif text-lg text-cream">Schriftarten</h2>
          <p>
            Verwendete Schriftarten sind lokal auf dem Server eingebunden. Beim
            Aufruf wird keine Verbindung zu Servern Dritter (z. B. Google Fonts)
            hergestellt.
          </p>
        </div>
        <div>
          <h2 className="mb-2 font-serif text-lg text-cream">
            Cookies und Tracking
          </h2>
          <p>
            Diese Website setzt keine Cookies und nutzt keine Analyse- oder
            Tracking-Dienste.
          </p>
        </div>
        <div>
          <h2 className="mb-2 font-serif text-lg text-cream">Deine Rechte</h2>
          <p>
            Du hast das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16),
            Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18),
            Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21 DSGVO). Wende
            dich dafür an die oben genannten Kontaktdaten.
          </p>
        </div>
        <div>
          <h2 className="mb-2 font-serif text-lg text-cream">Beschwerderecht</h2>
          <p>
            Du hast das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu
            beschweren. Zuständig ist der Landesbeauftragte für den Datenschutz und
            die Informationsfreiheit Rheinland-Pfalz, Hintere Bleiche 34, 55116
            Mainz.
          </p>
        </div>
      </div>
    </section>
  );
}
