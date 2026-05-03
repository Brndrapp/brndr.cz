/**
 * ============================================================
 *  CONTENT CONFIGURATION — edit this file to update the site
 * ============================================================
 *
 *  Every piece of text, link, colour and image that appears on
 *  the page is defined here.  No HTML knowledge required.
 *
 *  Colours accept any valid CSS value: "#76ffcb", "rgb(…)", etc.
 *  Images can be a relative path ("assets/images/hero.jpg") or any
 *  absolute URL.
 * ============================================================
 */

const SITE = {

  /* ── Meta ──────────────────────────────────────────────── */
  meta: {
    title:       "Brndr — studentská seznamka",
    description: "Férová studentská seznamka s ověřením identity, férovým párováním a šifrovanou komunikací.",
    lang:        "cs",
  },

  /* ── Brand colours ─────────────────────────────────────── */
  colors: {
    background:  "#0d0d0d",
    surface:     "#141414",
    primary:     "#f2f2f2",
    accent:      "#76ffcb",
    accent2:     "#df000e",
    muted:       "#909090",
    border:      "#242424",
  },

  /* ── Navigation ─────────────────────────────────────────── */
  nav: {
    logo: "brndr",
    links: [
      { label: "Funkce",     href: "#features" },
      { label: "O projektu", href: "#about"    },
      { label: "Registrace", href: "#signup"   },
    ],
    cta: { label: "Zaregistrovat se", href: "https://forms.gle/placeholder", newTab: true },
  },

  /* ── Hero section ───────────────────────────────────────── */
  hero: {
    eyebrow: "Studentská seznamka · Coming soon",
    headline: "Seznamka,\nkterá tě\nbere vážně.",
    subline:  "Ověřená identita. Férové párování. Šifrovaná komunikace.",
    cta:      { label: "Zaregistrovat se do mailing listu", href: "https://forms.gle/placeholder", newTab: true },
  },

  /* ── Features section ───────────────────────────────────── */
  features: {
    sectionLabel: "Co nabízíme",
    heading:      "Seznamování tak,\njak má být.",
    items: [
      {
        icon:  "01",
        title: "Ověření studenti",
        body:  "Přístup pouze pro ověřené studenty přes školní e-mail. Žádné falešné profily ani anonymní účty bez záruky.",
      },
      {
        icon:  "02",
        title: "Férové párování",
        body:  "Žádné skryté škálování popularity. Transparentní algoritmus, který nezamyká lidi do kategorií.",
      },
      {
        icon:  "03",
        title: "E2EE šifrování",
        body:  "End-to-end šifrování zpráv se samostatnou správou klíčů. Obsah komunikace zůstává jen mezi vámi.",
      },
      {
        icon:  "04",
        title: "Reálná setkání",
        body:  "Speed-dating akce a tematické meetupy. Pomáháme domluvit setkání — ne ho nahrazovat nekonečným swipováním.",
      },
    ],
  },

  /* ── About section ──────────────────────────────────────── */
  about: {
    sectionLabel: "O projektu",
    heading:      "Proč Brndr?",
    paragraphs: [
      "Běžné seznamovací platformy jsou optimalizované na zisk, ne na reálné seznamování. Místo podpory smysluplného kontaktu posilují povrchní metriky popularity a uzavírají uživatele do kategorií, ze kterých se prakticky nelze vymanit.",
      "Brndr vznikl jako reakce na tuto realitu. Jsme studentský projekt z FIT VUT v Brně s cílem přinést férovější, bezpečnější a autentičtější způsob, jak se seznámit.",
    ],
    stats: [
      { value: "PWA",  label: "Dostupné přes odkaz" },
      { value: "E2EE", label: "Šifrovaná komunikace" },
      { value: "FIT",  label: "VUT v Brně" },
    ],
  },

  /* ── Signup / Mailing list section ─────────────────────── */
  signup: {
    sectionLabel: "Buď první",
    heading:      "Zaregistruj se\ndo mailing listu.",
    subline:      "Jako první se dozvíš o spuštění, beta testování a dalším vývoji platformy.",
    cta:          { label: "Zaregistrovat se →", href: "https://forms.gle/placeholder", newTab: true },
  },

  /* ── Footer ─────────────────────────────────────────────── */
  footer: {
    copyright: `© ${new Date().getFullYear()} Brndr — Brno, Czech Republic`,
    socials: [
      { label: "LinkedIn · Petr Obšel",     href: "#" },
      { label: "LinkedIn · Daniel Pelánek", href: "#" },
      { label: "Instagram",                 href: "#" },
    ],
  },

};
