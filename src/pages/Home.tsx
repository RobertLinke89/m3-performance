import { useEffect, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { SystemMolecule } from '../components/SystemMolecule'
import { useUi } from '../copy'
import { useLocale } from '../locale'

export function Home() {
  const t = useUi()
  const { lang } = useLocale()
  const isEn = lang === 'en'

  useEffect(() => {
    document.body.classList.add('page-landing')
    return () => {
      document.body.classList.remove('page-landing')
    }
  }, [])

  return (
    <main className="bento-page bento-page--landing">
      <div className="wrap wrap--landing">
        {/* Bento Grid Master Universe */}
        <section className="bento-grid bento-grid--landing" aria-label="M³ Performance System Bento Grid">
          
          {/* 1. HERO BENTO CARD (Span 12 - The Temple Roof / Dach) */}
          <article className="bento-card bento-card--hero bento-card--temple-roof bento-span-12">
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
            <div className="bento-content bento-content--hero" style={{ maxWidth: 760 }}>
              <div className="bento-tag bento-tag--gold" style={{ marginBottom: 8 }}>
                {isEn ? 'THE ARCHITECTURE · FOOD · MOVE · REPEAT' : 'DAS ARCHITEKTUR-SYSTEM · FOOD · MOVE · REPEAT'}
              </div>
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

              {/* Action Row */}
              <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginTop: 14, flexWrap: 'wrap' }}>
                <Link to="/ueber-mich" className="hero-btn-showreel">
                  About
                </Link>
                <Link to="/system-start" className="btn-white-ghost" style={{ padding: '0 18px', minHeight: 38, fontSize: 13 }}>
                  {t.systemStart} →
                </Link>
              </div>
            </div>
          </article>

          {/* 2. PILLAR M¹: FOOD (Span 4 - The First Column) */}
          <Link
            to="/metabolism"
            className="bento-card bento-card--pillar bento-card--m1 bento-span-4"
            style={{ '--pillar-color': '#e8a14a' } as CSSProperties}
            aria-label="Pillar M1 Food Metabolism"
          >
            <div className="bento-molecule-visual" style={{ position: 'absolute', inset: 0, opacity: 0.9, pointerEvents: 'none' }}>
              <SystemMolecule />
            </div>
            <div className="bento-overlay" />
            <div className="bento-content">
              <span className="bento-pillar-badge" style={{ borderColor: 'rgba(232, 161, 74, 0.45)', color: '#e8a14a' }}>
                SÄULE M¹
              </span>
              <h2 className="bento-pillar-head">Food.</h2>
              <p className="bento-pillar-sub">
                {isEn ? 'Metabolism & Cellular Energy' : 'Metabolismus & Zellenergie'}
              </p>
              <p className="bento-desc">
                {isEn
                  ? 'Stable blood sugar, gut health, and cellular nutrient absorption for sustained drive.'
                  : 'Stabiler Blutzucker, Darmgesundheit und optimale Nährstoffverwertung für konstante Tagesenergie.'}
              </p>
              <div className="bento-arrow-btn">
                <span>{isEn ? 'Explore Food (M¹) →' : 'Säule Food entdecken →'}</span>
              </div>
            </div>
          </Link>

          {/* 3. PILLAR M²: MOVE (Span 4 - The Second Column) */}
          <Link
            to="/biomechanics"
            className="bento-card bento-card--pillar bento-card--m2 bento-span-4"
            style={{ '--pillar-color': '#2f9a72' } as CSSProperties}
            aria-label="Pillar M2 Move Biomechanics"
          >
            <picture className="bento-bg">
              <source
                type="image/webp"
                srcSet="/images/moodboard/mood-limitless.webp 1x, /images/moodboard/mood-limitless@2x.webp 2x"
              />
              <source
                srcSet="/images/moodboard/mood-limitless.jpg 1x, /images/moodboard/mood-limitless.jpg 2x"
              />
              <img
                src="/images/moodboard/mood-limitless.jpg"
                alt="M2 Biomechanics Mobilität & Schmerzfreiheit"
                loading="lazy"
                decoding="async"
                className="bento-bg-img"
              />
            </picture>
            <div className="bento-overlay" />
            <div className="bento-content">
              <span className="bento-pillar-badge" style={{ borderColor: 'rgba(47, 154, 114, 0.45)', color: '#2f9a72' }}>
                SÄULE M²
              </span>
              <h2 className="bento-pillar-head">Move.</h2>
              <p className="bento-pillar-sub">
                {isEn ? 'Biomechanics & Pain Freedom' : 'Biomechanik & Schmerzfreiheit'}
              </p>
              <p className="bento-desc">
                {isEn
                  ? 'Joint stability, functional mobility, and full physical resilience under high demand.'
                  : 'Gelenkstabilität, funktionelle Mobilität und maximale Belastbarkeit im Alltag und Sport.'}
              </p>
              <div className="bento-arrow-btn">
                <span>{isEn ? 'Explore Move (M²) →' : 'Säule Move entdecken →'}</span>
              </div>
            </div>
          </Link>

          {/* 4. PILLAR M³: REPEAT (Span 4 - The Third Column) */}
          <Link
            to="/mental"
            className="bento-card bento-card--pillar bento-card--m3 bento-span-4"
            style={{ '--pillar-color': '#4f6fd6' } as CSSProperties}
            aria-label="Pillar M3 Repeat Mindset"
          >
            <picture className="bento-bg">
              <source
                type="image/webp"
                srcSet="/images/moodboard/mood-focus.webp 1x, /images/moodboard/mood-focus@2x.webp 2x"
              />
              <source
                srcSet="/images/moodboard/mood-focus.jpg 1x, /images/moodboard/mood-focus.jpg 2x"
              />
              <img
                src="/images/moodboard/mood-focus.jpg"
                alt="M3 Mindset Fokus & neuronale Klarheit"
                loading="lazy"
                decoding="async"
                className="bento-bg-img"
              />
            </picture>
            <div className="bento-overlay" />
            <div className="bento-content">
              <span className="bento-pillar-badge" style={{ borderColor: 'rgba(79, 111, 214, 0.45)', color: '#4f6fd6' }}>
                SÄULE M³
              </span>
              <h2 className="bento-pillar-head">Repeat.</h2>
              <p className="bento-pillar-sub">
                {isEn ? 'Mindset & Neural Clarity' : 'Mindset & neuronale Klarheit'}
              </p>
              <p className="bento-desc">
                {isEn
                  ? 'Decision economy, deep restorative sleep, and nervous system control under pressure.'
                  : 'Entscheidungsökonomie, tiefer Schlaf und Stressresilienz – trainiert wie ein Muskel.'}
              </p>
              <div className="bento-arrow-btn">
                <span>{isEn ? 'Explore Repeat (M³) →' : 'Säule Repeat entdecken →'}</span>
              </div>
            </div>
          </Link>

        </section>
      </div>
    </main>
  )
}
