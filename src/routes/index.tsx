import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";


export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Asahi — Portiamo l'AI dove tu crei valore" },
      {
        name: "description",
        content:
          "Asahi è AI Adoption-as-a-Service: partiamo dai tuoi processi per costruire soluzioni AI utili, adottabili e misurabili. Formazione, consulenza, software factory.",
      },
      { property: "og:title", content: "Asahi — Portiamo l'AI dove tu crei valore" },
      {
        property: "og:description",
        content:
          "AI Adoption-as-a-Service. Processi, governance, persone, asset proprietari. Creiamo autonomia, non dipendenza.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      <Nav />
      <Hero />

      <Thesis />
      <FourBlocks />
      <Percorso />
      <Assets />

      <Footer />
    </div>
  );
}

/* ----------------------------- NAV ----------------------------- */
function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#tesi", label: "Tesi" },
    { href: "#modello", label: "Modello" },
    { href: "#percorso", label: "Percorso" },
    { href: "#asset", label: "Asset" },
  ];
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/75 border-b hairline">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-baseline gap-3 group">
          <SunMark className="h-7 w-7 self-center" />
          <span className="font-serif text-[22px] tracking-tight leading-none">Asahi</span>
          <span className="hidden lg:inline font-serif italic text-[12px] text-ink-soft leading-none border-l hairline pl-3 ml-1">
            Humanizing Artificial Intelligence
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-2 text-[13px]">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="px-3.5 py-1.5 rounded-full bg-cta-soft border border-cta-border text-cta-text hover:bg-cta-soft-hover transition-colors">{l.label}</a>
          ))}
          <a href="mailto:hello@asahi.it?subject=Prenota%20una%20consulenza" className="ml-2 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cta-primary text-cta-primary-text hover:bg-cta-primary-hover transition-colors font-medium">Prenota una consulenza <span aria-hidden>→</span></a>
        </nav>
        <button
          type="button"
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-cta-border bg-cta-soft text-cta-text hover:bg-cta-soft-hover transition-colors"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t hairline bg-background/95 backdrop-blur-md">
          <nav className="mx-auto max-w-[1320px] px-6 py-4 flex flex-col gap-2 text-[15px]">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-2xl bg-cta-soft border border-cta-border text-cta-text hover:bg-cta-soft-hover transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="mailto:hello@asahi.it?subject=Prenota%20una%20consulenza"
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex items-center justify-between gap-2 px-4 py-3 rounded-2xl bg-cta-primary text-cta-primary-text hover:bg-cta-primary-hover transition-colors font-medium"
            >
              Prenota una consulenza <span aria-hidden>→</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function SunMark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`relative inline-block ${className}`}
      aria-label="Asahi sun mark"
      role="img"
    >
      <svg viewBox="0 0 64 64" className="absolute inset-0 w-full h-full" aria-hidden="true">
        <defs>
          <radialGradient id="asahiSun" cx="42%" cy="38%" r="62%">
            <stop offset="0%" stopColor="oklch(0.96 0.05 80)" />
            <stop offset="35%" stopColor="oklch(0.86 0.13 85)" />
            <stop offset="72%" stopColor="oklch(0.74 0.16 55)" />
            <stop offset="100%" stopColor="oklch(0.6 0.17 40)" />
          </radialGradient>
          <radialGradient id="asahiHalo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="oklch(0.92 0.08 75 / 0.55)" />
            <stop offset="60%" stopColor="oklch(0.86 0.13 85 / 0.15)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <circle cx="32" cy="32" r="30" fill="url(#asahiHalo)" />
        <circle cx="32" cy="32" r="18" fill="url(#asahiSun)" />
        <circle
          cx="32"
          cy="32"
          r="18"
          fill="none"
          stroke="oklch(0.6 0.17 40 / 0.35)"
          strokeWidth="0.6"
        />
        <circle
          cx="26"
          cy="26"
          r="4"
          fill="oklch(0.96 0.05 80 / 0.55)"
        />
      </svg>
    </span>
  );
}

/* ----------------------------- HERO ----------------------------- */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden grain">
      {/* Sun composition — vertically centered with hero */}
      <div className="pointer-events-none absolute right-[-24%] top-[62%] -translate-y-1/2 w-[470px] h-[470px] md:right-[-12%] md:top-1/2 md:w-[620px] md:h-[620px] lg:w-[720px] lg:h-[720px] opacity-70 md:opacity-95">
        <div className="absolute inset-0 sun-halo" />
        <div className="absolute inset-[20%] rounded-full sun-disc sun-pulse" />
      </div>

      <div className="mx-auto max-w-[1320px] px-6 md:px-10 pt-14 md:pt-20 pb-20 md:pb-28 relative">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cta-soft border border-cta-border text-[11px] uppercase tracking-[0.28em] text-cta-text mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-asahi" />
          AI Adoption-as-a-Service
        </div>

        <h1 className="font-serif font-light text-[44px] sm:text-[64px] md:text-[84px] lg:text-[104px] leading-[1.0] tracking-[-0.02em] text-balance max-w-[1100px]">
          Portiamo l’AI <br className="hidden sm:block" />
          dove <span className="italic">tu</span> crei <span className="relative inline-block">
            valore
            <span className="absolute left-0 right-0 -bottom-1 h-[6px] bg-asahi/80" />
          </span>.
        </h1>

        <div className="mt-10 grid md:grid-cols-12 gap-8 md:gap-12 items-end">
          <p className="md:col-span-6 text-[16px] md:text-[19px] leading-[1.75] tracking-[-0.003em] text-ink-soft text-pretty max-w-[46ch]">
            Asahi aiuta le aziende a integrare l’AI nei processi aziendali, con governance chiara, KPI misurabili, AI Mentors interni e soluzioni proprietarie costruite sui problemi reali.
          </p>

          <div className="md:col-span-5 md:col-start-8 flex flex-col gap-3">
            <a
              href="#percorso"
              className="group inline-flex items-center justify-between gap-6 px-6 py-5 bg-cta-soft border border-cta-border text-cta-primary-text hover:bg-cta-soft-hover transition-colors rounded-sm"
            >
              <span className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-[0.32em] text-ink-soft">Il percorso</span>
                <span className="font-serif text-[20px] md:text-[22px] tracking-[-0.01em] leading-none">
                  Scopri il <span className="italic">Percorso</span> Asahi
                </span>
              </span>
              <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- THESIS ----------------------------- */
function Thesis() {
  return (
    <section id="tesi" className="mx-auto max-w-[1320px] px-6 md:px-10 py-28 md:py-40">
      <SectionLabel n="01" label="Tesi" />
      <div className="grid md:grid-cols-12 gap-10 md:gap-16 mt-10">
        <div className="md:col-span-7">
          <p className="font-serif text-[34px] sm:text-[44px] md:text-[56px] leading-[1.08] tracking-[-0.015em] text-balance">
            Asahi parte dai <em className="text-asahi not-italic">processi</em> per
            rendere l’AI <span className="italic">adottabile</span>,
            <span className="italic"> governabile</span> e
            <span className="italic"> misurabile</span>.
          </p>
          <p className="mt-10 text-[18px] text-ink-soft max-w-[620px] text-pretty">
            La maggior parte dei progetti AI fallisce non per la tecnologia, ma per
            adozione mancata, governance assente e KPI scollegati dal business.
            Noi attacchiamo proprio lì.
          </p>
        </div>

        <aside className="md:col-span-5 md:pl-10 md:border-l hairline">
          <div className="text-[11px] uppercase tracking-[0.32em] text-ink-soft mb-4">
            Il nostro principio
          </div>
          <blockquote className="font-serif italic text-[28px] md:text-[34px] leading-[1.15] tracking-[-0.01em]">
            “Creiamo <span className="text-asahi">autonomia</span>,
            non dipendenza.”
          </blockquote>
          <div className="mt-8 grid grid-cols-3 gap-4 text-[12px] text-ink-soft">
            <Stat k="Processi" v="al centro" />
            <Stat k="Governance" v="esplicita" />
            <Stat k="KPI" v="misurabili" />
          </div>
        </aside>
      </div>
    </section>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="border-t hairline pt-3">
      <div className="text-[10px] uppercase tracking-[0.28em]">{k}</div>
      <div className="font-serif text-[18px] text-foreground mt-1">{v}</div>
    </div>
  );
}

/* ----------------------------- 4 BLOCKS ----------------------------- */
function FourBlocks() {
  const blocks = [
    {
      n: "01",
      kicker: "Activate",
      title: "Formazione Adoption",
      body:
        "Attiviamo i decision maker e generiamo domanda qualificata. Linguaggio comune, criteri di scelta, casi reali.",
      tag: "Decision makers",
    },
    {
      n: "02",
      kicker: "Align",
      title: "Consulenza",
      body:
        "Trasformiamo processi, governance, ruoli, KPI e adozione. Dal cantiere al modello operativo che regge nel tempo.",
      tag: "Processi & Governance",
    },
    {
      n: "03",
      kicker: "Build",
      title: "Software Factory",
      body:
        "Costruiamo prodotti e moduli AI a partire dai pattern ricorrenti emersi sul campo. Soluzioni scalabili, non one-off.",
      tag: "Prodotti & Moduli",
    },
    {
      n: "04",
      kicker: "Master",
      title: "Formazione Avanzata",
      body:
        "Sviluppiamo competenze avanzate per team, AI Mentor e professionisti. Capacità che restano dentro l’azienda.",
      tag: "Team & AI Mentors",
    },
  ];

  return (
    <section id="modello" className="bg-paper-2 border-y hairline">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10 py-28 md:py-36">
        <SectionLabel n="02" label="Modello in 4 blocchi" />
        <h2 className="mt-8 font-serif text-[40px] md:text-[64px] leading-[1.02] tracking-[-0.02em] max-w-[900px] text-balance">
          Quattro fronti, <span className="italic">un solo</span> obiettivo:
          adozione reale.
        </h2>

        <div className="mt-16 grid md:grid-cols-2 gap-px bg-rule border hairline">
          {blocks.map((b) => (
            <article
              key={b.n}
              className="bg-background p-8 md:p-12 group hover:bg-paper transition-colors relative"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="number-marker text-[44px] text-asahi leading-none">
                  {b.n}
                </span>
                <span className="text-[10px] uppercase tracking-[0.32em] text-ink-soft inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-asahi" />
                  {b.kicker}
                </span>
              </div>
              <h3 className="font-serif text-[28px] md:text-[34px] tracking-[-0.01em] leading-tight">
                {b.title}
              </h3>
              <p className="mt-4 text-[16px] text-ink-soft max-w-[460px] text-pretty">
                {b.body}
              </p>
              <div className="mt-10 pt-5 border-t hairline flex items-center justify-between text-[11px] uppercase tracking-[0.28em] text-ink-soft">
                <span>{b.tag}</span>
                <span className="text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- PERCORSO ASAHI ----------------------------- */
function Percorso() {
  const phases = [
    { n: "01", k: "Discover", v: "Validiamo segnali, processi, rischi, ownership e casi d’uso prioritari." },
    { n: "02", k: "Design", v: "Trasformiamo la diagnosi in roadmap, governance, KPI e responsabilità." },
    { n: "03", k: "Activate", v: "Portiamo live il primo caso d’uso e attiviamo gli AI Mentors interni." },
    { n: "04", k: "Scale", v: "Estendiamo l’adozione con SOP, dashboard, knowledge base e nuovi processi." },
    { n: "05", k: "Sustain", v: "Manteniamo l’AI come capacità stabile, osservabile e governata nel tempo." },
  ];

  return (
    <section id="percorso" className="bg-ink-warm relative overflow-hidden">
      <div className="absolute -left-40 -bottom-40 w-[520px] h-[520px] opacity-25 sun-disc rounded-full pointer-events-none" />
      <div className="mx-auto max-w-[1320px] px-6 md:px-10 py-28 md:py-36 relative">
        <SectionLabel n="03" label="Come lavoriamo con te" />
        <div className="mt-8 grid md:grid-cols-12 gap-8 md:gap-12">
          <h2 className="md:col-span-7 font-serif text-[40px] md:text-[60px] leading-[1.04] tracking-[-0.02em] text-balance">
            Il <span className="italic">Percorso</span> Asahi, dalla
            consapevolezza all’<span className="text-asahi-deep">autonomia</span>.
          </h2>
          <p className="md:col-span-5 md:pt-4 text-[17px] md:text-[18px] text-ink-soft text-pretty max-w-[520px]">
            Un percorso in cinque fasi per trasformare l’interesse verso l’AI in adozione reale, governata e misurabile nei processi aziendali.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-16 relative">
          {/* Connecting line — desktop */}
          <div className="hidden md:block absolute left-0 right-0 top-[34px] h-px bg-rule" />
          <ol className="grid md:grid-cols-5 gap-6 md:gap-4 relative">
            {phases.map((p) => (
              <li key={p.n} className="relative">
                <div className="flex md:block items-center gap-4">
                  <span className="relative z-10 inline-flex items-center justify-center h-[68px] w-[68px] rounded-full bg-background border border-cta-border text-asahi-deep number-marker text-[24px] shrink-0 shadow-sm">
                    {p.n}
                  </span>
                  <div className="md:mt-6">
                    <div className="font-serif text-[24px] md:text-[26px] tracking-[-0.01em] text-foreground leading-tight">
                      {p.k}
                    </div>
                  </div>
                </div>
                <p className="mt-3 md:mt-3 text-[14.5px] md:text-[15px] text-ink-soft leading-[1.55] max-w-[230px] text-pretty">
                  {p.v}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- ASSETS ----------------------------- */
function Assets() {
  const assets = [
    {
      name: "Asahi AI Score",
      role: "Qualifica il contesto",
      body:
        "Radar rapido di pre-diagnosi. Misura la distanza organizzativa dall’autonomia operativa e apre la domanda verso le fasi successive.",
    },
    {
      name: "Asahi AI Builder",
      role: "Valuta i casi d’uso",
      body:
        "Dallo Stadio 1 in poi valuta readiness, rischio, priorità e decisioni operative. Non è un quiz di lead generation.",
    },
    {
      name: "Asahi AI Canvas",
      role: "Governa l’esecuzione",
      body:
        "Allinea ruoli, responsabilità, KPI, rischi e adozione nel tempo. Trasforma ogni progetto AI in standard operativo.",
    },
    {
      name: "Software Factory",
      role: "Scala il prodotto",
      body:
        "Trasforma pattern ricorrenti in moduli, dashboard, prodotti verticali e soluzioni proprietarie costruite su problemi reali.",
    },
  ];

  return (
    <section id="asset" className="mx-auto max-w-[1320px] px-6 md:px-10 py-28 md:py-40">
      <SectionLabel n="04" label="Asset proprietari" />
      <div className="mt-8 grid md:grid-cols-12 gap-10">
        <h2 className="md:col-span-7 font-serif text-[40px] md:text-[60px] leading-[1.02] tracking-[-0.02em] text-balance">
          Gli asset che rendono il <span className="italic">metodo</span> replicabile.
        </h2>
        <p className="md:col-span-5 md:pt-6 text-[18px] text-ink-soft max-w-[520px] text-pretty">
          Score, Builder, Canvas e Software Factory: ogni strumento presidia un momento diverso del percorso di adozione dell’AI.
        </p>
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-px bg-rule border hairline">
        {assets.map((a, i) => (
          <article
            key={a.name}
            className="bg-background p-8 md:p-12 group hover:bg-paper transition-colors"
          >
            <div className="flex items-start justify-between mb-8">
              <span className="number-marker text-[36px] text-asahi-deep leading-none">
                0{i + 1}
              </span>
              <span className="text-[10px] uppercase tracking-[0.32em] text-asahi inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-asahi" />
                {a.role}
              </span>
            </div>
            <h3 className="font-serif text-[28px] md:text-[32px] tracking-[-0.01em] leading-tight">
              {a.name}
            </h3>
            <p className="mt-4 text-[16px] text-ink-soft max-w-[460px] text-pretty">
              {a.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ----------------------------- FOOTER ----------------------------- */
function Footer() {
  return (
    <footer className="border-t hairline bg-paper-2">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10 py-14 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="flex items-baseline gap-3">
            <SunMark className="h-6 w-6 self-center" />
            <span className="font-serif text-[20px]">Asahi</span>
            <span className="font-serif italic text-[14px] text-ink-soft">— Humanizing Artificial Intelligence</span>
          </div>
          <p className="mt-5 text-[14px] text-ink-soft max-w-[420px] text-pretty">
            AI Adoption-as-a-Service. Portiamo l’AI dove crei valore — partendo
            dai processi, con governance, persone e risultati misurabili.
          </p>
        </div>

        <div className="md:col-span-3 text-[13px]">
          <div className="text-[11px] uppercase tracking-[0.28em] text-ink-soft mb-3">
            Modello
          </div>
          <ul className="space-y-2">
            <li>Formazione Adoption</li>
            <li>Consulenza</li>
            <li>Software Factory</li>
            <li>Formazione Avanzata</li>
          </ul>
        </div>

        <div className="md:col-span-2 text-[13px]">
          <div className="text-[11px] uppercase tracking-[0.28em] text-ink-soft mb-3">
            Asset
          </div>
          <ul className="space-y-2">
            <li>AI Score</li>
            <li>AI Builder</li>
            <li>AI Canvas</li>
            <li>Factory</li>
          </ul>
        </div>

        <div className="md:col-span-2 text-[13px]">
          <div className="text-[11px] uppercase tracking-[0.28em] text-ink-soft mb-3">
            Contatto
          </div>
          <a href="mailto:hello@asahi.it" className="hover:text-asahi transition-colors">
            hello@asahi.it
          </a>
          <div className="mt-2 text-ink-soft">Milano · Italia</div>
        </div>
      </div>
      <div className="border-t hairline">
        <div className="mx-auto max-w-[1320px] px-6 md:px-10 py-5 flex flex-wrap items-center justify-between gap-3 text-[11px] uppercase tracking-[0.28em] text-ink-soft">
          <span>© {new Date().getFullYear()} Asahi · AI Adoption-as-a-Service</span>
          <span>Creiamo autonomia, non dipendenza.</span>
        </div>
      </div>
    </footer>
  );
}

/* ----------------------------- HELPERS ----------------------------- */
function SectionLabel({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.32em] text-ink-soft">
      <span className="number-marker text-[18px] text-asahi not-italic">{n}</span>
      <span className="inline-block h-px w-10 ink-rule" />
      {label}
    </div>
  );
}
