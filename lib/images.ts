// Zentrales Bild-Manifest — eine Quelle der Wahrheit für alle Projektfotos.

export type Category = "treppen" | "parkett" | "moebel";

export type Project = {
  src: string;
  title: string;
  meta: string;
  category: Category;
};

const P = "/images";

// ── Schlüsselbilder (Hero / Feature-Momente) ──
export const heroImage = `${P}/IMG-20260625-WA0002.jpg`; // LED-Treppe, warm
export const sculptureImage = `${P}/IMG-20260625-WA0006.jpg`; // Schwungtisch, Studio
export const diningImage = `${P}/IMG-20260625-WA0020.jpg`; // Baumkanten-Esstisch
export const ctaImage = `${P}/IMG-20260625-WA0010.jpg`; // Glastreppe

// ── Vorher / Nachher (Parkett-Aufarbeitung) ──
export const beforeImage = `${P}/IMG-20260625-WA0017.jpg`;
export const afterImage = `${P}/IMG-20260625-WA0018.jpg`;

// ── Vorher / Nachher (Treppe: Beton-Rohbau → Eiche mit LED) ──
// Gleicher Blickwinkel — sauberer Morph an der Reglerlinie.
export const treppeBeforeImage = `${P}/treppe-vorher.jpg`; // Beton-Rohbau
export const treppeAfterImage = `${P}/treppe-nachher.jpg`; // fertige Eiche-LED-Treppe

// ── Leistungs-Teaser (Startseite) ──
export const teaserImages = {
  treppen: `${P}/IMG-20260625-WA0010.jpg`,
  parkett: `${P}/IMG-20260625-WA0015.jpg`,
  // Dachschrägen-Schrank statt Schreibtisch — der Schreibtisch kommt direkt darunter im Feature
  moebel: `${P}/IMG-20260625-WA0014.jpg`,
};

// ── Galerie (Projekte-Seite + Startseite-Auswahl) ──
export const projects: Project[] = [
  // Treppen — die LED-Treppe "Schwebende Stufen" (WA0002) läuft im Vorher/Nachher
  // unten und wird darum hier nicht doppelt gezeigt (wie beim Parkett).
  { src: `${P}/IMG-20260625-WA0010.jpg`, title: "Glasgeländer", meta: "Eiche · Ganzglas", category: "treppen" },
  { src: `${P}/IMG-20260625-WA0012.jpg`, title: "Freischwebend", meta: "Eiche · Kragarmtreppe", category: "treppen" },
  { src: `${P}/IMG-20260625-WA0011.jpg`, title: "Treppe im Flur", meta: "Massivholz · Wand-LED", category: "treppen" },

  // Parkett & Böden
  { src: `${P}/IMG-20260625-WA0015.jpg`, title: "Fischgrät", meta: "Eiche · geölt", category: "parkett" },
  { src: `${P}/IMG-20260625-WA0005.jpg`, title: "Landhausdiele", meta: "Eiche · Natur", category: "parkett" },

  // Maßmöbel & Türen
  { src: `${P}/IMG-20260625-WA0006.jpg`, title: "Meisterstück Slatewave", meta: "Rüster mit Steinfurnier · Einzelstück", category: "moebel" },
  { src: `${P}/IMG-20260625-WA0020.jpg`, title: "Baumkanten-Esstisch", meta: "XXL Mammuteiche · Live Edge", category: "moebel" },
  { src: `${P}/IMG-20260625-WA0014.jpg`, title: "Einbauschrank Dachschräge", meta: "Eiche · Regalnische", category: "moebel" },
  { src: `${P}/IMG-20260625-WA0007.jpg`, title: "Schwebendes Lowboard", meta: "Nussbaum · Stein", category: "moebel" },
  { src: `${P}/IMG-20260625-WA0013.jpg`, title: "Wandnische", meta: "Einbau · weiß matt", category: "moebel" },
  { src: `${P}/IMG-20260625-WA0016.jpg`, title: "Innentür", meta: "Eiche wandbündig · versteckte Zarge", category: "moebel" },
  { src: `${P}/IMG-20260625-WA0003.jpg`, title: "Türdetail", meta: "Eiche · Griff", category: "moebel" },
];

export const categoryLabels: Record<Category, string> = {
  treppen: "Treppen",
  parkett: "Parkett & Böden",
  moebel: "Maßmöbel & Türen",
};
