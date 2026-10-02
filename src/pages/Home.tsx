import { useState, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { Img } from '../components/Img'
import { MichelShow } from '../components/MichelShow'
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

          {/* 2. 20-MIN ORIENTIERUNGSGESPRÄCH BENTO CARD (Span 4 - Clean White Card, Black Border & Text) */}
          <article className="bento-card bento-card--call-white bento-span-4">
            <div className="bento-content">
              <div>
                <h2 className="bento-title">
                  {isEn ? '20-Min. Strategy Call with Michél' : '20 Min. Orientierungsgespräch mit Michél'}
                </h2>
                <p className="bento-desc">
                  {isEn
                    ? 'We directly and honestly evaluate where your biggest performance lever is. Zero obligation, confidential, at eye level.'
                    : 'Wir prüfen direkt und ehrlich, wo dein größter Hebel liegt. Unverbindlich, diskret und auf Augenhöhe.'}
                </p>
              </div>
              <a
                href={wa.talk}
                target="_blank"
                rel="noreferrer"
                className="bento-call-btn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 16, height: 16 }}>
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                </svg>
                {isEn ? 'Free Strategy Session' : 'Kostenloses Erstgespräch'}
              </a>
            </div>
          </article>

          {/* 3. PILLAR M¹: METABOLISM (Span 4 - Chapter 2A: The Internal Foundation) */}
          <Link
            to="/metabolism"
            className="bento-card bento-card--pillar bento-card--m1 bento-span-4"
            style={{ '--pillar-color': '#e8a14a' } as CSSProperties}
            aria-label="Pillar M1 Metabolism"
          >
            <div className="bento-molecule-visual" style={{ position: 'absolute', inset: 0, opacity: 0.9, pointerEvents: 'none' }}>
              <SystemMolecule />
            </div>
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

        </section>
      </div>

      {/* 6. ABOUT MICHÉL SECTION (Particle Animated Show) */}
      <section className="section michel-section" id="about-michel">
        <div className="wrap michel-split">
          <div className="michel-visual">
            <MichelShow />
          </div>
          <div className="michel-copy">
            <p className="eyebrow">{t.michelEyebrow}</p>
            <h2>{t.michelH}</h2>
            <div className="michel-block">
              <p>{t.michelLead}</p>
              <p>{t.michelLead2}</p>
              <p>„{t.michelQuote}“</p>
              <p className="michel-meta">{t.michelMeta}</p>
            </div>
            <Link className="btn btn-ghost" to="/ueber-mich" style={{ marginTop: 18, width: 'fit-content' }}>
              {t.moreAbout}
            </Link>
          </div>
        </div>
      </section>

      <div className="wrap">
        <section className="bento-grid" aria-label="M³ Personas & Dialogues">
          {/* AUDIENCE BENTO SECTION (Span 12 - Who this is for) */}
          <article className="bento-card bento-card--audience bento-span-12">
            <div className="bento-audience-grid">
              {audience.map((a) => (
                <div className="bento-persona-card" key={a.title}>
                  <div className="bento-persona-head">
                    <div className="bento-persona-avatar-wrap">
                      <Img className="bento-persona-avatar" src={a.image} alt={a.persona || a.title} />
                    </div>
                    <div className="bento-persona-meta">
                      <span className="bento-persona-role">{a.persona}</span>
                      <h3 className="bento-persona-title">{a.title}</h3>
                    </div>
                  </div>

                  <div className="bento-persona-chat">
                    {/* Chat Msg 1: Client / Persona */}
                    <div className="bento-chat-msg bento-chat-msg--client">
                      <div className="bento-chat-header">
                        <span className="bento-chat-author">{a.persona.split('·')[0].trim()}</span>
                        <span className="bento-chat-time">08:42</span>
                      </div>
                      <div className="bento-chat-bubble bento-chat-bubble--client">
                        <p>{a.dailyLife}</p>
                      </div>
                    </div>

                    {/* Chat Msg 2: Michél's Response & Solution */}
                    <div className="bento-chat-msg bento-chat-msg--michel">
                      <div className="bento-chat-header bento-chat-header--michel">
                        <span className="bento-chat-author">Michél · M³</span>
                        <span className="bento-chat-time">08:45</span>
                      </div>
                      <div className="bento-chat-bubble bento-chat-bubble--michel">
                        <p>{a.approach}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </section>

        {/* 11. STANDALONE JOURNAL SECTION (10 Science & Practice Articles) */}
        <section className="journal-standalone-section" id="journal" aria-labelledby="journal-main-heading">
          <div className="journal-standalone-header">
            <span className="journal-standalone-kicker">
              {isEn ? 'M³ System Journal & Science' : 'M³ Journal & Wissenschaft'}
            </span>
            <h2 id="journal-main-heading" className="journal-standalone-title">
              {isEn ? (
                <>If you want to understand <span className="journal-title-accent">how your body truly performs.</span></>
              ) : (
                <>Wenn du verstehen willst, <span className="journal-title-accent">wie dein Körper wirklich funktioniert.</span></>
              )}
            </h2>
            <p className="journal-standalone-lead">
              {isEn
                ? 'Not theoretical fluff. 10 fundamental articles from real practice — why blood sugar crashes, why load without track causes wear, and how routines hold without hype.'
                : 'Nicht Theorie für die Schublade. 10 fundamentale Texte aus der Praxis – warum der Blutzucker abstürzt, warum Last ohne saubere Bahn verschleißt und wie Routinen ohne Motivations-Hype halten.'}
            </p>

            <div className="journal-header-actions">
              <Link to="/blog" className="journal-header-link">
                {isEn ? 'View all 10 articles →' : 'Alle 10 Texte ansehen →'}
              </Link>
            </div>
          </div>

          <div className="journal-cards-container">
            <div className="journal-cards-track">
              {posts.map((post) => {
                const pillar = pillars.find((p) => p.id === post.pillar)
                return (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="journal-feed-card"
                  >
                    <div className="journal-feed-media">
                      <Img className="journal-feed-img" src={post.image} alt={post.title} />
                      {pillar && (
                        <span
                          className="journal-feed-badge"
                          style={{
                            borderColor: colorMixPillar(pillar.color),
                            color: pillar.color,
                          }}
                        >
                          {pillar.mark} · {pillar.name}
                        </span>
                      )}
                    </div>
                    <div className="journal-feed-body">
                      <h3 className="journal-feed-title">{post.title}</h3>
                      <p className="journal-feed-excerpt">{post.excerpt}</p>
                      <div className="journal-feed-footer">
                        <span className="journal-feed-cta">
                          {isEn ? 'Read article' : 'Lesen'}
                          <span className="journal-feed-arrow" aria-hidden="true">→</span>
                        </span>
                        <span className="journal-feed-min">{post.minutes} Min.</span>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* 12. STANDALONE FAQ SECTION (Centered on Page, Left-Aligned Typography) */}
        <section className="faq-standalone-section" id="faq" aria-labelledby="faq-main-heading">
          <div className="faq-standalone-container">
            <header className="faq-standalone-header">
              <span className="faq-standalone-kicker">FAQ</span>
              <h2 id="faq-main-heading" className="faq-standalone-title">{t.faqH}</h2>
              <p className="faq-standalone-lead">
                {isEn
                  ? 'Direct, transparent answers about our methodology, structure, and 1:1 mentorship.'
                  : 'Direkte und ehrliche Antworten zu Ablauf, Betreuung und dem M³-System.'}
              </p>
            </header>

            <div className="faq-standalone-list">
              {faqs.map((f, i) => {
                const isOpen = openFaq === i
                return (
                  <div
                    key={f.q}
                    className={`faq-standalone-item ${isOpen ? 'is-open' : ''}`}
                  >
                    <button
                      type="button"
                      className="faq-standalone-btn"
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      aria-expanded={isOpen}
                    >
                      <span className="faq-standalone-q">{f.q}</span>
                      <span className="faq-standalone-icon" aria-hidden="true">
                        <svg
                          viewBox="0 0 24 24"
                          width="18"
                          height="18"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={`faq-chevron-icon ${isOpen ? 'is-rotated' : ''}`}
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </span>
                    </button>
                    {isOpen && (
                      <div className="faq-standalone-panel">
                        <p className="faq-standalone-a">{f.a}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

      </div>
    </main>
  )
}

function colorMixPillar(color: string) {
  return `color-mix(in srgb, ${color} 45%, var(--line))`
}


