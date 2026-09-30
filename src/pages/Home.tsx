import { useState, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { Img } from '../components/Img'
import { SystemMolecule } from '../components/SystemMolecule'
import { useUi } from '../copy'
import { useLocale } from '../locale'
import { useContent } from '../useContent'

export function Home() {
  const t = useUi()
  const { lang } = useLocale()
  const isEn = lang === 'en'
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const { audience, faqs, pillars, posts, wa } = useContent()

  // Get featured posts for the journal bento card
  const featuredPosts = pillars
    .map((p) => posts.filter((post) => post.pillar === p.id).at(-1))
    .filter((post): post is (typeof posts)[number] => Boolean(post))

  return (
    <main className="bento-page">
      <div className="wrap">
        {/* Bento Grid Master Universe */}
        <section className="bento-grid" aria-label="M³ Performance System Bento Grid">
          
          {/* 1. HERO BENTO CARD (Span 8 - The Vision & Core Promise) */}
          <article className="bento-card bento-card--hero bento-span-8">
            <picture className="bento-bg">
              <source
                media="(max-width: 860px)"
                type="image/webp"
                srcSet="/images/hero-system-mobile.webp 1x, /images/hero-system-mobile.webp 2x"
              />
              <source
                media="(max-width: 860px)"
                srcSet="/images/hero-system-mobile-1x.jpg 1x, /images/hero-system-mobile.jpg 2x"
              />
              <source
                type="image/webp"
                srcSet="/images/hero-system.webp 1x, /images/hero-system.webp 2x"
              />
              <source
                srcSet="/images/hero-system-1x.jpg 1x, /images/hero-system.jpg 2x"
              />
              <img
                src="/images/hero-system.jpg"
                alt={t.problemAlt}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="bento-bg-img"
              />
            </picture>
            <div className="bento-overlay" />
            <div className="bento-content bento-content--hero">
              <h1 className="bento-hero-h1">
                {isEn ? (
                  <>M¹–M³ Performance. <span>Holistic, Pain-Free &amp; Sharp.</span></>
                ) : (
                  <>M¹ · M² · M³ Performance. <span>Schmerzfrei &amp; Klar.</span></>
                )}
              </h1>
              <p className="bento-lead">
                {isEn
                  ? 'For leaders, entrepreneurs & high performers: We link metabolism, biomechanics, and mindset into one biologically proven system.'
                  : 'Für Unternehmer, Macher & High-Performer: Wir verbinden Stoffwechsel, Biomechanik und Mindset zu einem biologisch fundierten System – nachhaltig & messbar.'}
              </p>

              {/* Minimalistic Transparent Showreel CTA */}
              <Link to="/ueber-mich" className="hero-btn-showreel">
                Showreel
              </Link>
            </div>
          </article>

          {/* 2. SYSTEM START BENTO CARD (Span 4 - Chapter 1: The Status Quo & Assessment) */}
          <Link
            to="/system-start"
            className="bento-card bento-card--start bento-span-4"
            aria-label={t.startH}
          >
            <picture className="bento-bg">
              <source
                type="image/webp"
                srcSet="/images/system-start.webp 1x, /images/system-start.webp 2x"
              />
              <source
                srcSet="/images/system-start.jpg 1x, /images/system-start.jpg 2x"
              />
              <img
                src="/images/system-start.jpg"
                alt="M3 System Start"
                loading="lazy"
                decoding="async"
                className="bento-bg-img"
              />
            </picture>
            <div className="bento-overlay" />
            <div className="bento-content">
              <h2 className="bento-title">
                <span className="bento-step-num">01 ·</span> {isEn ? 'Assessment & Status Quo' : 'Standortbestimmung & Analyse'}
              </h2>
              <p className="bento-desc">
                {isEn
                  ? 'The 360° audit of your capacity: metabolic markers, movement patterns, and mental reserves.'
                  : 'Die 360°-Analyse deiner Leistungsfähigkeit – Stoffwechsel-Marker, Bewegungsanalyse und neuronale Ressourcen.'}
              </p>
              <div className="bento-arrow-btn">
                <span>{isEn ? 'Start assessment →' : 'Standort analysieren →'}</span>
              </div>
            </div>
          </Link>

          {/* 3. PILLAR M¹: METABOLISM (Span 4 - Chapter 2A: The Internal Foundation) */}
          <Link
            to="/metabolism"
            className="bento-card bento-card--pillar bento-card--m1 bento-span-4"
            style={{ '--pillar-color': '#e8a14a' } as CSSProperties}
            aria-label="Pillar M1 Metabolism"
          >
            <picture className="bento-bg">
              <source
                type="image/webp"
                srcSet="/images/mod-body-reset.webp 1x, /images/mod-body-reset.webp 2x"
              />
              <source
                srcSet="/images/mod-body-reset.jpg 1x, /images/mod-body-reset.jpg 2x"
              />
              <img
                src="/images/mod-body-reset.jpg"
                alt="M1 Metabolism"
                loading="lazy"
                decoding="async"
                className="bento-bg-img"
              />
            </picture>
            <div className="bento-overlay" />
            <div className="bento-content">
              <h2 className="bento-title">
                <span className="bento-pillar-accent" style={{ color: '#e8a14a' }}>M¹</span> {isEn ? 'Metabolism & Cellular Energy' : 'Metabolismus & Zellenergie'}
              </h2>
              <p className="bento-desc">
                {isEn
                  ? 'Stable blood sugar, gut health, and cellular nutrient absorption for sustained drive.'
                  : 'Stabiler Blutzucker, Darmgesundheit und optimale Nährstoffverwertung für konstante Tagesenergie.'}
              </p>
              <div className="bento-arrow-btn">
                <span>{isEn ? 'Explore M¹ →' : 'Säule M¹ entdecken →'}</span>
              </div>
            </div>
          </Link>

          {/* 4. PILLAR M²: BIOMECHANICS (Span 4 - Chapter 2B: The Physical Freedom) */}
          <Link
            to="/biomechanics"
            className="bento-card bento-card--pillar bento-card--m2 bento-span-4"
            style={{ '--pillar-color': '#2f9a72' } as CSSProperties}
            aria-label="Pillar M2 Biomechanics"
          >
            <picture className="bento-bg">
              <source
                type="image/webp"
                srcSet="/images/michel-work-mobility.webp 1x, /images/michel-work-mobility.webp 2x"
              />
              <source
                srcSet="/images/michel-work-mobility.jpg 1x, /images/michel-work-mobility.jpg 2x"
              />
              <img
                src="/images/michel-work-mobility.jpg"
                alt="M2 Biomechanics"
                loading="lazy"
                decoding="async"
                className="bento-bg-img"
              />
            </picture>
            <div className="bento-overlay" />
            <div className="bento-content">
              <h2 className="bento-title">
                <span className="bento-pillar-accent" style={{ color: '#2f9a72' }}>M²</span> {isEn ? 'Biomechanics & Pain Freedom' : 'Biomechanik & Schmerzfreiheit'}
              </h2>
              <p className="bento-desc">
                {isEn
                  ? 'Joint stability, functional mobility, and full physical resilience under high demand.'
                  : 'Gelenkstabilität, funktionelle Mobilität und maximale Belastbarkeit im Alltag und Sport.'}
              </p>
              <div className="bento-arrow-btn">
                <span>{isEn ? 'Explore M² →' : 'Säule M² entdecken →'}</span>
              </div>
            </div>
          </Link>

          {/* 5. PILLAR M³: MINDSET (Span 4 - Chapter 2C: The Mental Clarity) */}
          <Link
            to="/mental"
            className="bento-card bento-card--pillar bento-card--m3 bento-span-4"
            style={{ '--pillar-color': '#4f6fd6' } as CSSProperties}
            aria-label="Pillar M3 Mindset"
          >
            <picture className="bento-bg">
              <source
                type="image/webp"
                srcSet="/images/mental-hero.webp 1x, /images/mental-hero.webp 2x"
              />
              <source
                srcSet="/images/mental-hero.png 1x, /images/mental-hero.png 2x"
              />
              <img
                src="/images/mental-hero.png"
                alt="M3 Mindset"
                loading="lazy"
                decoding="async"
                className="bento-bg-img"
              />
            </picture>
            <div className="bento-overlay" />
            <div className="bento-content">
              <h2 className="bento-title">
                <span className="bento-pillar-accent" style={{ color: '#4f6fd6' }}>M³</span> {isEn ? 'Mindset & Neural Clarity' : 'Mindset & neuronale Klarheit'}
              </h2>
              <p className="bento-desc">
                {isEn
                  ? 'Decision economy, deep restorative sleep, and nervous system control under pressure.'
                  : 'Entscheidungsökonomie, tiefer Schlaf und Stressresilienz – trainiert wie ein Muskel.'}
              </p>
              <div className="bento-arrow-btn">
                <span>{isEn ? 'Explore M³ →' : 'Säule M³ entdecken →'}</span>
              </div>
            </div>
          </Link>

          {/* 6. INTERACTIVE SYSTEM MOLECULE (Span 5 - Chapter 3A: The Synergy Law) */}
          <article className="bento-card bento-card--molecule bento-span-5">
            <div className="bento-molecule-visual">
              <SystemMolecule />
            </div>
            <div className="bento-molecule-content">
              <h2 className="bento-title">
                {isEn ? 'The M³ Synergy: Why isolated fixes fail.' : 'Die M³ Synergie: Warum Einzellösungen scheitern.'}
              </h2>
              <p className="bento-desc">
                {isEn
                  ? 'Training without metabolic foundation exhausts you. Diet without mindset never sticks. True performance requires all three in synergy.'
                  : 'Training ohne Stoffwechsel verbrennt dich. Ernährung ohne mentale Klarheit hält nicht. Nur das vernetzte Zusammenspiel aller 3 Säulen erzeugt dauerhafte Höchstleistung.'}
              </p>
            </div>
          </article>

          {/* 7. AUTHENTICITY & WORLD CHAMPION CODEX (Span 7 - Chapter 3B: The Origin) */}
          <Link
            to="/ueber-mich"
            className="bento-card bento-card--michel bento-span-7"
            aria-label={t.moreAbout}
          >
            <picture className="bento-bg">
              <source
                type="image/webp"
                srcSet="/images/michel-breakdance.webp 1x, /images/michel-breakdance.webp 2x"
              />
              <source
                srcSet="/images/michel-breakdance.jpg 1x, /images/michel-breakdance.jpg 2x"
              />
              <img
                src="/images/michel-breakdance.jpg"
                alt="Michél Breakdance World Champion"
                loading="lazy"
                decoding="async"
                className="bento-bg-img"
              />
            </picture>
            <div className="bento-overlay" />
            <div className="bento-content">
              <h2 className="bento-title">
                {isEn ? 'World Champion Codex & 30 Years of Movement' : 'Weltmeister-Codex & 30 Jahre Bewegungspraxis'}
              </h2>
              <p className="bento-desc">
                {isEn
                  ? 'From top-tier world dance stages through disc herniation to everyday solo fatherhood: No dogma. No hype. A system built on real resilience.'
                  : 'Vom Weltmeistertitel über Bandscheibenvorfall bis Alleinerzieher-Alltag: Kein Dogma. Keine leeren Versprechungen. Ein System aus der Praxis für die Praxis.'}
              </p>
              <div className="bento-arrow-btn">
                <span>{isEn ? 'Read Michél’s Codex →' : 'Michéls Story & Codex →'}</span>
              </div>
            </div>
          </Link>

          {/* 8. MODULAR CATALOG (Span 6 - Chapter 4A: The Custom Roadmap) */}
          <Link
            to="/catalog"
            className="bento-card bento-card--catalog bento-span-6"
            aria-label={t.modulesH}
          >
            <picture className="bento-bg">
              <source
                type="image/webp"
                srcSet="/images/mod-training-v2.webp 1x, /images/mod-training-v2.webp 2x"
              />
              <source
                srcSet="/images/mod-training-v2.jpg 1x, /images/mod-training-v2.jpg 2x"
              />
              <img
                src="/images/mod-training-v2.jpg"
                alt="M3 Modular Catalog"
                loading="lazy"
                decoding="async"
                className="bento-bg-img"
              />
            </picture>
            <div className="bento-overlay" />
            <div className="bento-content">
              <h2 className="bento-title">
                {isEn ? 'Modular Roadmap: Tailored to your bottleneck' : 'Modulbaukasten: Individuell statt Standard'}
              </h2>
              <p className="bento-desc">
                {isEn
                  ? 'From targeted self-learning modules to exclusive 1:1 executive coaching: Choose the exact lever that fits your schedule and goals.'
                  : 'Vom gezielten Einzelmodul bis zur exklusiven 1:1 Executive-Betreuung: Wähle genau die Bausteine, die zu deinem Alltag und Engpass passen.'}
              </p>
              <div className="bento-arrow-btn">
                <span>{isEn ? 'Explore modules →' : 'Modul-Katalog ansehen →'}</span>
              </div>
            </div>
          </Link>

          {/* 9. 1:1 DIRECT CONSULTATION (Span 6 - Chapter 4B: The Next Step) */}
          <article className="bento-card bento-card--contact bento-span-6">
            <picture className="bento-bg">
              <source
                type="image/webp"
                srcSet="/images/michel-trainer.webp 1x, /images/michel-trainer.webp 2x"
              />
              <source
                srcSet="/images/michel-trainer.jpg 1x, /images/michel-trainer.jpg 2x"
              />
              <img
                src="/images/michel-trainer.jpg"
                alt="Michél Meier Trainer"
                loading="lazy"
                decoding="async"
                className="bento-bg-img"
              />
            </picture>
            <div className="bento-overlay" />
            <div className="bento-content">
              <h2 className="bento-title">
                {isEn ? '20-Min. Strategy Call with Michél' : '20 Min. Orientierungsgespräch mit Michél'}
              </h2>
              <p className="bento-desc">
                {isEn
                  ? 'We directly and honestly evaluate where your biggest performance lever is. Zero obligation.'
                  : 'Wir prüfen direkt und ehrlich, wo dein größter Hebel liegt. Unverbindlich, diskret und auf Augenhöhe.'}
              </p>
              <div className="bento-cta-row">
                <a
                  href={wa.talk}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-gold"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="btn-icon" style={{ width: 16, height: 16, marginRight: 6 }}>
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
                  </svg>
                  {t.ctaTalk}
                </a>
                <Link to="/kontakt" className="btn btn-ghost">
                  {isEn ? 'Contact options' : 'Kontaktoptionen'}
                </Link>
              </div>
            </div>
          </article>

          {/* 10. AUDIENCE BENTO CARD (Span 12 - Who this is for) */}
          <article className="bento-card bento-card--audience bento-span-12">
            <div className="bento-card-header">
              <div>
                <h2 className="bento-title">{t.audienceH}</h2>
                <p className="bento-desc" style={{ maxWidth: '60ch' }}>{t.audienceLead}</p>
              </div>
            </div>
            <div className="bento-audience-grid">
              {audience.map((a) => (
                <div className="bento-sub-card" key={a.title}>
                  <Img className="bento-sub-media" src={a.image} alt={a.title} />
                  <div className="bento-sub-body">
                    <h3>{a.title}</h3>
                    <p>{a.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* 11. JOURNAL & INSIGHTS BENTO CARD (Span 7) */}
          <article className="bento-card bento-card--journal bento-span-7">
            <div className="bento-card-header">
              <div>
                <h2 className="bento-title">{t.blogH}</h2>
              </div>
              <Link to="/blog" className="bento-header-link">
                {t.blogAll} →
              </Link>
            </div>
            <div className="bento-journal-list">
              {featuredPosts.map((post) => {
                const pillar = pillars.find((p) => p.id === post.pillar)
                return (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="bento-journal-item"
                  >
                    <Img className="bento-journal-thumb" src={post.image} alt="" />
                    <div className="bento-journal-info">
                      {pillar && (
                        <span className="bento-micro-tag" style={{ color: pillar.color }}>
                          {pillar.mark} · {pillar.name}
                        </span>
                      )}
                      <h4>{post.title}</h4>
                      <p>{post.excerpt}</p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </article>

          {/* 12. FAQ BENTO CARD (Span 5) */}
          <article className="bento-card bento-card--faq bento-span-5">
            <div className="bento-card-header">
              <div>
                <h2 className="bento-title">{t.faqH}</h2>
              </div>
            </div>
            <div className="bento-faq-list">
              {faqs.map((f, i) => {
                const isOpen = openFaq === i
                return (
                  <button
                    key={f.q}
                    type="button"
                    className={`bento-faq-item ${isOpen ? 'open' : ''}`}
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                  >
                    <div className="bento-faq-q">
                      <strong>{f.q}</strong>
                      <span className="bento-faq-icon">{isOpen ? '−' : '+'}</span>
                    </div>
                    {isOpen && <p className="bento-faq-a">{f.a}</p>}
                  </button>
                )
              })}
            </div>
          </article>

        </section>
      </div>
    </main>
  )
}
