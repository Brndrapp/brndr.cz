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
    ],
    cta: { label: "Zaregistrovat se", href: "https://forms.gle/Jm5bFFcwMj9VBEK36", newTab: true },
  },

  /* ── Hero section ───────────────────────────────────────── */
  hero: {
    eyebrow: "Studentský projekt · FIT VUT Brno",
    headline: "Seznamka,\nkterá tě\nbere vážně.",
    subline:  "Ověřená identita. Férové párování. Šifrovaná komunikace.",
    cta:      { label: "Zaregistrovat se do mailing listu", href: "https://forms.gle/Jm5bFFcwMj9VBEK36", newTab: true },
  },

  /* ── Features section ───────────────────────────────────── */
  features: {
    sectionLabel: "Co nabízíme",
    heading:      "Seznamování tak,\njak má být.",
    items: [
      {
        icon:  "01",
        title: "Ověřená identita",
        body:  "Přístup pouze pro ověřené studenty přes školní e-mail. Volitelné ověření přes fotografii z průkazu ISIC eliminuje falešné profily.",
      },
      {
        icon:  "02",
        title: "Férové párování",
        body:  "Žádné skryté škálování popularity ani algoritmická manipulace. Transparentní systém, který nikoho nezamyká do kategorií.",
      },
      {
        icon:  "03",
        title: "E2EE komunikace",
        body:  "End-to-end šifrování zpráv s oddělenou správou klíčů. Obsah komunikace není čitelný na straně serveru — zůstává jen mezi vámi.",
      },
      {
        icon:  "04",
        title: "Reálná setkání",
        body:  "Speed-dating akce a tematické meetupy. Pomáháme setkání domluvit a zorganizovat — ne ho nahrazovat nekonečným swipováním.",
      },
    ],
  },

  /* ── About section ──────────────────────────────────────── */
  about: {
    sectionLabel: "O projektu",
    heading:      "Proč Brndr?",
    paragraphs: [
      "Běžné seznamovací platformy jsou optimalizované na zisk, ne na reálné seznamování. Místo podpory smysluplného kontaktu posilují povrchní metriky popularity a dlouhodobě uzavírají uživatele do kategorií, ze kterých se prakticky nelze vymanit.",
      "Brndr je studentský projekt z Fakulty informačních technologií VUT v Brně. Navrhujeme ho jako konkurenceschopnou studentskou seznamku, která umožní přístup pouze ověřeným studentům, omezí prostor pro falešné profily a online prostředí doplní o reálná setkání.",
      "Výsledkem je návrh a prototyp PWA aplikace s důrazem na nativní uživatelskou zkušenost, bezpečnou komunikaci s end-to-end šifrováním a férovým párováním bez skrytých algoritmů.",
    ],
    stats: [
      { value: "PWA",     label: "Dostupné přes odkaz" },
      { value: "E2EE",    label: "Šifrovaná komunikace" },
      { value: "FIT VUT", label: "Brno" },
    ],
  },

  /* ── Signup / Mailing list section ─────────────────────── */
  signup: {
    sectionLabel: "Buď první",
    heading:      "Zaregistruj se\ndo mailing listu.",
    subline:      "Jako první se dozvíš o spuštění, beta testování a dalším vývoji platformy.",
    cta:          { label: "Zaregistrovat se →", href: "https://forms.gle/Jm5bFFcwMj9VBEK36", newTab: true },
  },

  /* ── Footer ─────────────────────────────────────────────── */
  footer: {
    copyright: `© ${new Date().getFullYear()} Brndr · Petr Obšel & Daniel Pelánek · FIT VUT Brno`,
    socials: [
      { label: "LinkedIn · Petr Obšel",     href: "https://www.linkedin.com/in/petrobsel" },
      { label: "LinkedIn · Daniel Pelánek", href: "https://www.linkedin.com/in/danielpelanek" },
      { label: "Instagram",                 href: "https://www.instagram.com/brndr.app/" },
    ],
  },

};
