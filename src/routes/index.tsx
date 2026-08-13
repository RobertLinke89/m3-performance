import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/logo.png";
import avatar from "@/assets/avatar.png";

export const Route = createFileRoute("/")({
  component: Index,
});

// WhatsApp Direktkontakt
const WHATSAPP_URL = "https://wa.me/4917699016640";

const pillars = [
  {
    tag: "M¹",
    title: "Metabolism",
    desc: "Stoffwechsel, Ernährung, Darmgesundheit & Vitalstoffe – die Grundlage für echte Leistung.",
    pitch: "Ohne funktionierenden Stoffwechsel keine Leistung. Wir bringen Ernährung, Darm & Vitalstoffe in Balance – für mehr Energie, klaren Kopf und einen Körper, der wieder mitspielt.",
    cta: "Metabolism starten",
  },
  {
    tag: "M²",
    title: "Movement",
    desc: "Kraft, Mobilität und Schmerzfreiheit. Training, das deinen Körper langfristig stark macht.",
    pitch: "Training mit System statt Beliebigkeit. Wir bauen Kraft, Mobilität und Stabilität auf – abgestimmt auf dein Level, damit du im Alltag und Sport belastbar und schmerzfrei bleibst.",
    cta: "Movement starten",
  },
  {
    tag: "M³",
    title: "Mental Performance",
    desc: "Energie, Fokus, Motivation. Klarer Kopf für Alltag, Beruf und Sport.",
    pitch: "Fokus, Antrieb und Klarheit sind trainierbar. Wir arbeiten an Routinen, Regeneration und Mindset – damit du im Kopf genauso stark bist wie im Körper.",
    cta: "Mental Performance starten",
  },
];

const services = [
  {
    name: "M³ System Start",
    tagline: "Struktur für deinen Start.",
    desc: "Du willst etwas verändern, hast schon einiges ausprobiert – aber dir fehlt eine klare Linie, die wirklich funktioniert. Im System Start bringen wir Struktur in deine Situation und finden heraus, welche Schritte für dich wirklich sinnvoll sind.",
    features: ["Standortbestimmung", "Klare Orientierung", "Individueller Plan"],
    featured: true,
  },
  {
    name: "M³ Body Reset",
    tagline: "Dein Neustart von innen.",
    desc: "Wenn dein Körper nicht mehr richtig läuft, setzen wir genau dort an. Ein klares System zur Unterstützung von Darm und Stoffwechsel – gezielte Vitalstoffe und eine strukturierte Herangehensweise bringen dich wieder ins Gleichgewicht.",
    features: ["Darm & Stoffwechsel", "Vitalstoff-Strategie", "Mehr Energie & Klarheit"],
  },
  {
    name: "M³ Ernährungscoaching",
    tagline: "Deine Ernährung. Dein Erfolg.",
    desc: "Keine starren Pläne, keine Verbote – sondern eine Struktur, die zu dir passt. Du lernst, wie du deine Ernährung sinnvoll steuerst und dauerhaft in deinen Alltag integrierst.",
    features: ["Alltagstauglich", "Individuelle Struktur", "Nachhaltige Umsetzung"],
  },
  {
    name: "M³ Performance Training",
    tagline: "Stärke mit System.",
    desc: "Gezielt an Kraft, Technik und Belastbarkeit arbeiten. Jede Einheit ist auf dein aktuelles Level abgestimmt – ob Wiedereinstieg oder gezielter Aufbau. Personal Training flexibel mit 1–2 Einheiten pro Woche.",
    features: ["Kraft & Technik", "Individuelles Level", "1–2× / Woche"],
  },
  {
    name: "M³ Schmerzfrei",
    tagline: "Beweglich. Stabil. Frei.",
    desc: "Wenn Bewegung im Alltag oder Training Probleme macht, liegt es meist an einem Zusammenspiel aus Belastung, Haltung und Gewohnheiten. Wir arbeiten daran, deinen Körper wieder beweglicher und stabiler zu machen.",
    features: ["Mobilität & Stabilität", "Effektive Übungen", "Alltagsintegration"],
  },
  {
    name: "M³ Coaching für Zwei",
    tagline: "Gemeinsam. Motiviert. Erfolgreich.",
    desc: "Gemeinsam bleibt ihr verbindlicher und zieht besser durch. Das Training wird auf euch beide abgestimmt – jeder arbeitet auf seinem Level und trotzdem funktioniert ihr als Team. Flexibel mit 1–2 Einheiten pro Woche.",
    features: ["Zu zweit trainieren", "Individuelle Level", "1–2× / Woche"],
  },
];

const testimonials = [
  {
    name: "Sarah K.",
    role: "Marketing Managerin",
    initials: "SK",
    stars: 5,
    text: "Michél hat mir geholfen, wieder Energie im Alltag zu finden. Nach 3 Monaten fühle ich mich stärker und klarer als seit Jahren.",
  },
  {
    name: "Thomas B.",
    role: "Unternehmer",
    initials: "TB",
    stars: 5,
    text: "Endlich ein Coach, der Training UND Ernährung zusammen denkt. Der Body Reset war ein echter Gamechanger für meinen Stoffwechsel.",
  },
  {
    name: "Julia M.",
    role: "Ärztin",
    initials: "JM",
    stars: 5,
    text: "Fachlich top und menschlich absolut auf Augenhöhe. Meine Rückenschmerzen sind weg – zum ersten Mal seit über 5 Jahren.",
  },
  {
    name: "Daniel R.",
    role: "Softwareentwickler",
    initials: "DR",
    stars: 5,
    text: "Kein Bullshit, keine leeren Versprechen. Nur ein klares System, das funktioniert. Bin heute 12 kg leichter und deutlich fitter.",
  },
  {
    name: "Anna & Felix",
    role: "Coaching für Zwei",
    initials: "AF",
    stars: 5,
    text: "Zusammen zu trainieren war die beste Entscheidung. Michél holt jeden auf seinem Level ab – wir ziehen es endlich durch.",
  },
  {
    name: "Michael W.",
    role: "Manager",
    initials: "MW",
    stars: 5,
    text: "Fokus, Struktur, Ergebnisse. Nach Jahren des Ausprobierens habe ich hier endlich das gefunden, was ich gesucht habe.",
  },
  {
    name: "Lisa S.",
    role: "Läuferin",
    initials: "LS",
    stars: 5,
    text: "Meine Bestzeiten sind gefallen, weil ich zum ersten Mal ganzheitlich betreut werde. Ernährung, Kraft, Regeneration – alles greift ineinander.",
  },
  {
    name: "Christoph H.",
    role: "Vater & Selbstständig",
    initials: "CH",
    stars: 5,
    text: "Weniger Zeit, mehr Effekt. Die Einheiten sind knackig, klar strukturiert und ich sehe Fortschritte Woche für Woche.",
  },
];

type Pillar = (typeof pillars)[number];
type Testimonial = (typeof testimonials)[number];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 text-gold" aria-label={`${count} von 5 Sternen`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className={`h-4 w-4 ${i < count ? "fill-current" : "fill-current opacity-20"}`}>
          <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9 4.7 17.6l1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="w-[320px] shrink-0 rounded-2xl border border-border bg-card p-6 shadow-sm hover:border-gold/40 hover:shadow-[var(--shadow-gold)] transition-all">
      <Stars count={t.stars} />
      <p className="mt-4 text-foreground/85 leading-relaxed text-sm">"{t.text}"</p>
      <div className="mt-5 flex items-center gap-3 pt-4 border-t border-border">
        <div className="h-10 w-10 rounded-full bg-gold-gradient text-primary-foreground flex items-center justify-center text-sm font-semibold shadow-[var(--shadow-gold)]">
          {t.initials}
        </div>
        <div>
          <div className="text-sm font-semibold">{t.name}</div>
          <div className="text-xs text-muted-foreground">{t.role}</div>
        </div>
      </div>
    </div>
  );
}

function PillarCard({ pillar }: { pillar: Pillar }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setFlipped((f) => !f)}
      aria-pressed={flipped}
      className="group relative h-72 w-full text-left [perspective:1200px] focus:outline-none"
    >
      <div
        className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute inset-0 rounded-2xl border border-border bg-card p-8 [backface-visibility:hidden] hover:border-gold/50 transition-colors">
          <div className="font-display text-7xl text-gold/20 group-hover:text-gold/40 transition mb-4">{pillar.tag}</div>
          <h3 className="text-2xl font-display mb-3">{pillar.title}</h3>
          <p className="text-muted-foreground leading-relaxed">{pillar.desc}</p>
          <span className="absolute bottom-4 right-5 text-xs uppercase tracking-[0.2em] text-gold/70">Tippen ↻</span>
        </div>
        {/* Back */}
        <div className="absolute inset-0 rounded-2xl border border-gold/50 bg-gradient-to-br from-gold/10 to-transparent p-8 flex flex-col [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <h3 className="text-2xl font-display mb-3">
            <span className="text-gold">{pillar.tag}</span> {pillar.title}
          </h3>
          <p className="text-foreground/85 leading-relaxed">{pillar.pitch}</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="mt-auto inline-flex items-center justify-center rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-gold)] hover:opacity-90 transition self-start"
          >
            {pillar.cta} via WhatsApp →
          </a>
        </div>
      </div>
    </button>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo} alt="M³ Performance Logo" className="h-9 w-9 object-contain" />
            <span className="font-display text-xl tracking-wider">
              M³ <span className="text-gold">Performance</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#philosophie" className="hover:text-foreground transition">Philosophie</a>
            <a href="#saeulen" className="hover:text-foreground transition">Die 3 Säulen</a>
            <a href="#services" className="hover:text-foreground transition">Services</a>
            <a href="#ueber" className="hover:text-foreground transition">Über Michél</a>
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-gold-gradient px-5 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-gold)] hover:opacity-90 transition"
          >
            WhatsApp Kontakt
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative hero-bg overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-gold/5 blur-3xl animate-glow" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-0 md:pt-24 flex flex-col">
          <div className="max-w-3xl mx-auto text-center animate-float-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              Performance & Gesundheit
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display leading-[0.95]">
              Mehr Energie.<br />
              Mehr Leistung.<br />
              <span className="text-gold">Mehr Leben.</span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed whitespace-pre-line">
              Performance beginnt mit Gesundheit.{"\u00a0"}{"\n"}
              Personal Training, Ernährung, Stoffwechsel & Gesundheitscoaching – für Menschen, die mehr wollen als nur Sport.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-gold-gradient px-8 py-3.5 font-semibold text-primary-foreground shadow-[var(--shadow-gold)] hover:opacity-90 transition"
              >
                Jetzt via WhatsApp starten
              </a>
              <a href="#services" className="inline-flex items-center rounded-full border border-border px-8 py-3.5 font-semibold hover:bg-secondary transition">
                Services entdecken
              </a>
            </div>
          </div>

          {/* Avatar näher an den CTAs */}
          <div className="mt-4 md:mt-6 flex justify-center relative">
            <img
              src={avatar}
              alt="Michél Meier – Personal Trainer"
              className="avatar-shadow h-[60vh] md:h-[70vh] max-h-[750px] w-auto object-contain object-bottom select-none pointer-events-none animate-float-up"
              style={{ animationDelay: "0.3s" }}
            />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-20 bg-gold/25 blur-3xl rounded-full" />
          </div>

        </div>
      </section>

      {/* PHILOSOPHIE */}
      <section id="philosophie" className="py-24 md:py-32 border-t border-border">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Die Philosophie</p>
          <h2 className="text-4xl md:text-6xl font-display leading-tight">
            Performance beginnt<br /><span className="text-gold">mit Gesundheit.</span>
          </h2>
          <p className="mt-8 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed whitespace-pre-line">
            Ich bin nicht der klassische Fitness-Coach.{"\u00a0"}{"\n"}
            Ernährung, Darmgesundheit, Vitalstoffe – darauf baut Training auf.{"\u00a0"}{"\n\n"}
            Erst daraus entsteht echte Performance. Für Sportler, Berufstätige und alle, die im Alltag
            wieder leistungsfähig, schmerzfrei und energiegeladen leben wollen.
          </p>
        </div>
      </section>

      {/* 3 SÄULEN */}
      <section id="saeulen" className="relative py-24 md:py-32 bg-card/40 border-y border-border overflow-hidden">
        {/* Animated performance background */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full bg-gold/15 blur-3xl animate-drift-slow" />
          <div className="absolute top-1/2 -right-32 w-[520px] h-[520px] rounded-full bg-gold-soft/20 blur-3xl animate-drift-fast" />
          <div className="absolute bottom-0 left-1/3 w-[420px] h-[420px] rounded-full bg-primary/10 blur-3xl animate-drift-mid" />
          <div className="absolute inset-0 opacity-[0.18] bg-performance-lines animate-lines-shift" />
          <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent animate-pulse-line" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Die drei M</p>
            <h2 className="text-4xl md:text-6xl font-display">Drei Säulen. Ein System.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <PillarCard key={p.tag} pillar={p} />
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="stimmen" className="py-24 md:py-32 border-t border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Stimmen</p>
          <h2 className="text-4xl md:text-6xl font-display">Was Klienten sagen.</h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Echte Menschen. Echte Ergebnisse. Und der Weg dorthin.
          </p>
        </div>

        <div className="space-y-6 marquee-mask">
          <div className="flex gap-6 w-max animate-marquee-left marquee-pause">
            {[...testimonials, ...testimonials].map((t, i) => (
              <TestimonialCard key={`row1-${i}`} t={t} />
            ))}
          </div>
          <div className="flex gap-6 w-max animate-marquee-right marquee-pause">
            {[...testimonials.slice(4), ...testimonials.slice(0, 4), ...testimonials.slice(4), ...testimonials.slice(0, 4)].map((t, i) => (
              <TestimonialCard key={`row2-${i}`} t={t} />
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Angebote</p>
            <h2 className="text-4xl md:text-6xl font-display">Deine nächsten Schritte.</h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Persönliche Begleitung – Kontakt direkt per WhatsApp.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div
                key={s.name}
                className={`relative rounded-2xl border p-8 flex flex-col ${
                  s.featured
                    ? "border-gold/60 bg-gradient-to-br from-gold/10 to-transparent"
                    : "border-border bg-card hover:border-gold/40"
                } transition-all`}
              >
                {s.featured && (
                  <span className="absolute -top-3 left-8 rounded-full bg-gold-gradient px-3 py-1 text-xs font-semibold text-primary-foreground uppercase tracking-wider">
                    Empfohlener Start
                  </span>
                )}
                <h3 className="text-2xl font-display mb-1">{s.name}</h3>
                <p className="text-sm uppercase tracking-[0.2em] text-gold mb-4">{s.tagline}</p>
                <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                <ul className="space-y-2 mb-8">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP_URL}
                  target="_blank" rel="noopener noreferrer"
                  className={`mt-auto inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold transition ${
                    s.featured
                      ? "bg-gold-gradient text-primary-foreground shadow-[var(--shadow-gold)] hover:opacity-90"
                      : "border border-border hover:bg-secondary"
                  }`}
                >
                  Per WhatsApp anfragen →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ÜBER */}
      <section id="ueber" className="py-24 md:py-32 border-t border-border">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Über Michél</p>
            <h2 className="text-4xl md:text-5xl font-display leading-tight mb-6">
              Mehr als<br /><span className="text-gold">Training.</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Ich bin Michél Meier – Personal Trainer und Gesundheitsberater. Seit Jahren
                begleite ich Menschen dabei, wieder in Bewegung zu kommen, ihren Stoffwechsel
                zu optimieren und ihre Leistungsfähigkeit im Alltag, Beruf und Sport zu steigern.
              </p>
              <p>
                Meine Arbeit verbindet Training, Ernährung, Darmgesundheit, Vitalstoffe und
                mentale Performance – zu einem klaren, ganzheitlichen System: M³ Performance.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-gold/20 to-transparent border border-gold/20 p-3 overflow-hidden">
              <iframe
                className="w-full h-full rounded-2xl"
                src="https://www.youtube.com/embed/dQrADZQ1d5I"
                title="M³ Performance"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-card/40 border-t border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-display leading-tight">
            Bereit für<br /><span className="text-gold">deinen nächsten Schritt?</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Schreib mir direkt auf WhatsApp – wir finden gemeinsam heraus, welcher
            Weg für dich der richtige ist.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank" rel="noopener noreferrer"
            className="mt-10 inline-flex items-center rounded-full bg-gold-gradient px-8 py-4 font-semibold text-primary-foreground shadow-[var(--shadow-gold)] hover:opacity-90 transition"
          >
            WhatsApp Chat starten
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="M³ Performance" className="h-8 w-8 object-contain" />
            <div>
              <div className="font-display tracking-wider">M³ Performance</div>
              <div className="text-xs text-muted-foreground">Performance beginnt mit Gesundheit.</div>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Michél Meier · M³ Performance
          </div>
        </div>
      </footer>
    </div>
  );
}
