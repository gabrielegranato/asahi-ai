import { createFileRoute } from "@tanstack/react-router";

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
          "AI Adoption-as-a-Service. Processi, governance, persone, asset proprietari. Monetizziamo autonomia, non dipendenza.",
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
      <Assets />
      <Method />
      
      <Footer />
    </div>
  );
}

/* ----------------------------- NAV ----------------------------- */
function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/75 border-b hairline">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <SunMark className="h-7 w-7" />
          <span className="font-serif text-[22px] tracking-tight leading-none">Asahi</span>
          <span className="hidden sm:inline text-[10px] uppercase tracking-[0.32em] text-ink-soft pl-3 ml-1 border-l hairline">
            Sunrise clarity
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-9 text-[13px] text-ink-soft">
          <a href="#tesi" className="hover:text-foreground transition">Tesi</a>
          <a href="#modello" className="hover:text-foreground transition">Modello</a>
          <a href="#asset" className="hover:text-foreground transition">Asset</a>
          <a href="#metodo" className="hover:text-foreground transition">Metodo</a>
        </nav>
        <a
          href="#contatto"
          className="text-[13px] inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background hover:bg-asahi-deep transition-colors"
        >
          Conversazione strategica
          <span aria-hidden>→</span>
        </a>
      </div>
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
      {/* Sun composition — sunrise glow */}
      <div className="pointer-events-none absolute -right-40 -top-40 md:-right-24 md:-top-24 w-[680px] h-[680px] opacity-95">
        <div className="absolute inset-0 sun-halo" />
        <div className="absolute inset-[22%] rounded-full sun-disc sun-pulse" />
      </div>

      {/* Sunrise tagline */}
      <div className="hidden lg:flex absolute left-6 top-32 flex-col items-start gap-3 text-[10px] uppercase tracking-[0.4em] text-ink-soft">
        <span className="inline-block h-10 w-px bg-foreground/40" />
        Sunrise · Clarity · Value
      </div>

      <div className="mx-auto max-w-[1320px] px-6 md:px-10 pt-20 md:pt-28 pb-24 md:pb-36 relative">
        <h1 className="font-serif font-light text-[44px] sm:text-[64px] md:text-[88px] lg:text-[108px] leading-[0.95] tracking-[-0.02em] text-balance max-w-[1100px]">
          Portiamo l’AI <br className="hidden sm:block" />
          <span className="italic">dove</span> <span className="italic">tu</span> crei <span className="relative inline-block">
            valore
            <span className="absolute left-0 right-0 -bottom-1 h-[6px] bg-asahi/80" />
          </span>.
        </h1>

        <div className="mt-10 grid md:grid-cols-12 gap-8 md:gap-12 items-end">
          <p className="md:col-span-7 text-[18px] md:text-[22px] leading-[1.45] text-ink-soft text-pretty max-w-[680px]">
            Partiamo dai tuoi processi per costruire soluzioni AI{" "}
            <span className="text-foreground">utili, adottabili e misurabili</span>.
            Non vendiamo dipendenza: trasferiamo capacità, governance e risultati.
          </p>

          <div className="md:col-span-5 flex flex-col gap-3">
            <a
              href="#contatto"
              className="group inline-flex items-center justify-between gap-6 px-6 py-5 bg-foreground text-background hover:bg-asahi-deep transition-colors"
            >
              <span className="text-[15px] font-medium">Prenota una conversazione strategica</span>
              <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#modello"
              className="inline-flex items-center justify-between gap-6 px-6 py-5 border hairline hover:bg-paper-2 transition-colors"
            >
              <span className="text-[15px]">Scopri il modello in 4 blocchi</span>
              <span className="text-xl">↓</span>
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
            “Monetizziamo <span className="text-asahi">autonomia</span>,
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
      title: "Asahi Academy",
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

/* ----------------------------- ASSETS ----------------------------- */
function Assets() {
  const assets = [
    {
      name: "Asahi AI Score",
      role: "Qualifica il terreno",
      body:
        "Pre-diagnosi rapida della maturità AI organizzativa. Non è un audit e non valuta i casi d’uso: dice se sei pronto a partire.",
    },
    {
      name: "Asahi AI Builder",
      role: "Valuta i casi d’uso",
      body:
        "Dallo Stage 1 in poi: readiness, rischio, priorità operative. Trasforma idee in iniziative pesabili e ordinabili.",
    },
    {
      name: "Asahi AI Canvas",
      role: "Governa l’esecuzione",
      body:
        "Responsabilità, KPI, rischi e adozione nel tempo. È il quadro che tiene insieme persone, processi e tecnologia.",
    },
    {
      name: "Software Factory",
      role: "Scala i pattern",
      body:
        "Trasforma pattern ricorrenti in soluzioni AI, dashboard e prodotti riutilizzabili. Dalla pratica al prodotto.",
    },
  ];

  return (
    <section id="asset" className="mx-auto max-w-[1320px] px-6 md:px-10 py-28 md:py-40">
      <SectionLabel n="03" label="Asset proprietari" />
      <div className="mt-8 grid md:grid-cols-12 gap-10">
        <h2 className="md:col-span-6 font-serif text-[40px] md:text-[60px] leading-[1.02] tracking-[-0.02em] text-balance">
          La nostra <span className="italic">tecnologia</span><br />
          al servizio dei<br />tuoi <span className="italic">processi</span>.
        </h2>
        <p className="md:col-span-6 md:pt-6 text-[18px] text-ink-soft max-w-[520px] text-pretty">
          Non un metodo astratto: quattro asset proprietari che entrano nel tuo
          contesto, qualificano, valutano, governano e scalano.
        </p>
      </div>

      <ol className="mt-16 divide-y hairline border-y hairline">
        {assets.map((a, i) => (
          <li
            key={a.name}
            className="grid md:grid-cols-12 gap-6 md:gap-10 py-8 md:py-10 group"
          >
            <div className="md:col-span-1 number-marker text-[28px] text-ink-soft">
              0{i + 1}
            </div>
            <div className="md:col-span-4">
              <h3 className="font-serif text-[26px] md:text-[30px] tracking-[-0.01em] leading-tight">
                {a.name}
              </h3>
              <div className="mt-1 text-[12px] uppercase tracking-[0.28em] text-asahi">
                {a.role}
              </div>
            </div>
            <p className="md:col-span-7 text-[16px] md:text-[18px] text-ink-soft text-pretty md:pt-2 max-w-[680px]">
              {a.body}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ----------------------------- METHOD ----------------------------- */
function Method() {
  const steps = [
    { k: "Score", v: "Qualifichiamo il terreno e la prontezza." },
    { k: "Builder", v: "Valutiamo casi d’uso, readiness e priorità." },
    { k: "Canvas", v: "Governiamo esecuzione, KPI e adozione." },
    { k: "Factory", v: "Scaliamo i pattern in prodotti e moduli." },
  ];
  return (
    <section id="metodo" className="bg-foreground text-background relative overflow-hidden">
      <div className="absolute -left-40 -bottom-40 w-[520px] h-[520px] opacity-30 sun-disc rounded-full" />
      <div className="mx-auto max-w-[1320px] px-6 md:px-10 py-28 md:py-36 relative">
        <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-background/60 mb-10">
          <span className="inline-block h-px w-8 bg-background/60" />
          04 — Metodo
        </div>
        <h2 className="font-serif text-[40px] md:text-[64px] leading-[1.02] tracking-[-0.02em] max-w-[1000px] text-balance">
          Dall’<span className="italic">idea</span> al prodotto
          in quattro fasi <span className="text-asahi">misurabili</span>.
        </h2>

        <ol className="mt-16 grid md:grid-cols-4 gap-px bg-background/15 border border-background/15">
          {steps.map((s, i) => (
            <li key={s.k} className="bg-foreground p-8">
              <div className="number-marker text-[36px] text-asahi leading-none">
                0{i + 1}
              </div>
              <div className="mt-6 font-serif text-[24px] tracking-[-0.01em]">
                {s.k}
              </div>
              <p className="mt-3 text-[15px] text-background/70 max-w-[260px]">
                {s.v}
              </p>
            </li>
          ))}
        </ol>
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
          <div className="flex items-center gap-3">
            <SunMark className="h-6 w-6" />
            <span className="font-serif text-[20px]">Asahi</span>
            <span className="text-[10px] uppercase tracking-[0.4em] text-ink-soft pl-3 border-l hairline">
              Sunrise clarity
            </span>
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
            <li>Asahi Academy</li>
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
          <span>Monetizziamo autonomia, non dipendenza.</span>
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
