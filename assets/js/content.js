/**
 * ============================================================
 *  CONTENT CONFIGURATION — edit this file to update the site
 * ============================================================
 *
 *  Every piece of text, link, colour and image that appears on
 *  the page is defined here.  No HTML knowledge required.
 *
 *  Colours accept any valid CSS value: "#FF5733", "rgb(…)", etc.
 *  Images can be a relative path ("assets/img/hero.jpg") or any
 *  absolute URL.
 * ============================================================
 */

const SITE = {

  /* ── Meta ──────────────────────────────────────────────── */
  meta: {
    title:       "brndr — branding that moves",
    description: "We craft bold visual identities, websites and brand strategies for ambitious companies.",
    lang:        "en",
  },

  /* ── Brand colours ─────────────────────────────────────── */
  colors: {
    background:  "#0d0d0d",
    surface:     "#161616",
    primary:     "#f0f0f0",
    accent:      "#ff4d2e",
    muted:       "#888888",
    border:      "#2a2a2a",
  },

  /* ── Navigation ─────────────────────────────────────────── */
  nav: {
    logo: "brndr",
    links: [
      { label: "Work",     href: "#work"     },
      { label: "Services", href: "#services" },
      { label: "About",    href: "#about"    },
      { label: "Contact",  href: "#contact"  },
    ],
    cta: { label: "Let's talk", href: "#contact" },
  },

  /* ── Hero section ───────────────────────────────────────── */
  hero: {
    eyebrow: "Brand studio",
    headline: "We build brands\nthat people\nremember.",
    subline:  "Strategy · Identity · Digital · Motion",
    cta:      { label: "See our work", href: "#work" },
    /* Optional background image URL — leave empty ("") to show the default
       red radial gradient defined by #hero::before in style.css */
    backgroundImage: "",
  },

  /* ── Work / Portfolio section ───────────────────────────── */
  work: {
    sectionLabel: "Selected work",
    heading:      "Projects we're proud of",
    items: [
      {
        title:    "Novak Coffee",
        category: "Brand Identity",
        image:    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
        link:     "#",
      },
      {
        title:    "Zetko Finance",
        category: "Digital & Strategy",
        image:    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
        link:     "#",
      },
      {
        title:    "Forma Studio",
        category: "Visual Identity",
        image:    "https://images.unsplash.com/photo-1545239351-ef35f43d514b?w=800&q=80",
        link:     "#",
      },
      {
        title:    "Modrá Architektura",
        category: "Brand & Web",
        image:    "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
        link:     "#",
      },
    ],
  },

  /* ── Services section ───────────────────────────────────── */
  services: {
    sectionLabel: "What we do",
    heading:      "End-to-end brand building",
    items: [
      {
        icon:  "01",
        title: "Brand Strategy",
        body:  "Positioning, audience research, messaging frameworks and naming that give your brand a clear reason to exist.",
      },
      {
        icon:  "02",
        title: "Visual Identity",
        body:  "Logo systems, typography, colour palettes and brand guidelines that travel beautifully across every touchpoint.",
      },
      {
        icon:  "03",
        title: "Digital Design",
        body:  "Web design, UI/UX and interactive experiences that convert visitors into customers.",
      },
      {
        icon:  "04",
        title: "Motion & Video",
        body:  "Animated identities, social content and brand films that bring your story to life.",
      },
    ],
  },

  /* ── About section ──────────────────────────────────────── */
  about: {
    sectionLabel: "About us",
    heading:      "A small studio with big ambitions",
    paragraphs: [
      "brndr is a Prague-based brand studio founded on the belief that great design changes how the world sees a company — and how a company sees itself.",
      "We work with startups, scale-ups and established businesses who are ready to invest in identity that lasts.",
    ],
    stats: [
      { value: "8+",  label: "Years of experience" },
      { value: "120", label: "Brands built"        },
      { value: "18",  label: "Countries reached"   },
    ],
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&q=80",
  },

  /* ── Contact section ────────────────────────────────────── */
  contact: {
    sectionLabel: "Get in touch",
    heading:      "Ready to start something?",
    subline:      "Tell us about your project. We'll get back to you within one business day.",
    email:        "hello@brndr.cz",
    socials: [
      { label: "Instagram", href: "https://instagram.com/" },
      { label: "LinkedIn",  href: "https://linkedin.com/"  },
      { label: "Behance",   href: "https://behance.net/"   },
    ],
  },

  /* ── Footer ─────────────────────────────────────────────── */
  footer: {
    copyright: `© ${new Date().getFullYear()} brndr s.r.o. — Prague, Czech Republic`,
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Cookies",        href: "#" },
    ],
  },

};
