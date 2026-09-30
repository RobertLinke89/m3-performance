import { Link } from 'react-router-dom'
import { BackLink } from '../components/BackLink'
import { Img } from '../components/Img'
import { useUi } from '../copy'
import { useLocale } from '../locale'
import { useContent } from '../useContent'

function formatDate(iso: string, lang: string) {
  return new Intl.DateTimeFormat(lang === 'en' ? 'en-GB' : 'de-DE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(`${iso}T00:00:00`))
}

export function Blog() {
  const t = useUi()
  const { lang } = useLocale()
  const isEn = lang === 'en'
  const { contact, pillars, posts } = useContent()

  return (
    <main className="bento-page">
      <div className="wrap">
        <div style={{ marginBottom: 14 }}>
          <BackLink fallback="/" home={false} />
        </div>

        {/* Master Bento Grid */}
        <section className="bento-grid" aria-label="M³ Journal Bento Grid">

          {/* 1. HERO BENTO CARD (Span 8) */}
          <article className="bento-card bento-card--hero bento-span-8">
            <picture className="bento-bg">
              <source
                type="image/webp"
                srcSet="/images/moodboard/mood-focus.webp 1x, /images/moodboard/mood-focus@2x.webp 2x"
              />
              <source
                srcSet="/images/moodboard/mood-focus.jpg 1x, /images/moodboard/mood-focus@2x.jpg 2x"
              />
              <img
                src="/images/moodboard/mood-focus.jpg"
                alt="M3 Performance Journal"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="bento-bg-img"
              />
            </picture>
            <div className="bento-overlay" />
            <div className="bento-content bento-content--hero">
              <h1 className="bento-hero-h1">
                {t.blogH}
              </h1>
              <p className="bento-lead">
                {t.blogLead}
              </p>
              <div className="bento-cta-row" style={{ marginTop: 16 }}>
                <Link to="/system-start" className="btn-white">
                  {t.systemStart}
                </Link>
                <a
                  href={contact.cal}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-white-ghost"
                  data-cal-link="michelmeier/30min"
                >
                  {isEn ? 'Book 30-Min. Slot (Cal.com) →' : '30 Min. Slot buchen (Cal.com) →'}
                </a>
              </div>
            </div>
          </article>

          {/* 2. JOURNAL EDITORIAL CARD (Span 4) */}
          <article className="bento-card bento-card--audit-step bento-span-4" style={{ justifyContent: 'space-between', minHeight: 'clamp(440px, 50vh, 540px)' }}>
            <div>
              <span className="bento-audit-badge">{isEn ? 'DEEP DIVES & SCIENCE' : 'WISSEN AUS DER PRAXIS'}</span>
              <h2 className="bento-title" style={{ fontSize: 21 }}>
                {isEn ? 'No Theory. Biological Logic.' : 'Kein Hype. Reine Biologie.'}
              </h2>
              <p className="bento-desc">
                {isEn
                  ? 'In-depth essays and protocols breaking down metabolism, fascia architecture, and decision resilience:'
                  : 'Fundierte Einblicke und konkrete Handlungsmuster zu Stoffwechsel, Biomechanik und mentaler Klarheit:'}
              </p>
            </div>

            <ul className="bento-audit-points">
              <li>{isEn ? 'M¹ Metabolism & Cellular Energy' : 'M¹ Stoffwechsel & Zellenergie'}</li>
              <li>{isEn ? 'M² Biomechanics & Fascial Chains' : 'M² Biomechanik & Faszienketten'}</li>
              <li>{isEn ? 'M³ Decision Economy & Deep Sleep' : 'M³ Entscheidungsökonomie & Tiefschlaf'}</li>
            </ul>

            <div style={{ fontSize: 12, fontWeight: 700, color: '#ffffff', opacity: 0.85 }}>
              {isEn ? '→ Read in 3–5 minutes' : '→ Lesedauer 3–5 Minuten pro Artikel'}
            </div>
          </article>

          {/* 3. PILLAR JOURNAL SECTIONS (Span 12 each) */}
          {pillars.map((pillar) => {
            const group = posts.filter((p) => p.pillar === pillar.id)
            return (
              <article className="bento-card bento-card--journal bento-span-12" key={pillar.id} style={{ padding: 'clamp(22px, 3vw, 36px)' }}>
                <div className="bento-card-header" style={{ marginBottom: 20 }}>
                  <div>
                    <h2 className="bento-title" style={{ fontSize: 'clamp(20px, 2.4cqi, 28px)' }}>
                      <span className="bento-pillar-accent" style={{ color: '#ffffff' }}>{pillar.mark}</span> {pillar.name} · {pillar.title}
                    </h2>
                    <p className="bento-desc" style={{ maxWidth: '64ch' }}>
                      {pillar.lead}
                    </p>
                  </div>
                  <Link to={`/${pillar.slug}`} className="btn-white-ghost" style={{ alignSelf: 'flex-start' }}>
                    {t.blogPillar} →
                  </Link>
                </div>

                <div className="bento-audience-grid">
                  {group.map((post) => (
                    <Link to={`/blog/${post.slug}`} className="bento-sub-card" key={post.slug} style={{ textDecoration: 'none' }}>
                      <Img className="bento-sub-media" src={post.image} alt={post.title} />
                      <div className="bento-sub-body">
                        <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', fontWeight: 650 }}>
                          {formatDate(post.date, lang)} · {post.minutes} {t.blogMin}
                        </span>
                        <h3 style={{ marginTop: 2 }}>{post.title}</h3>
                        <p>{post.excerpt}</p>
                        <span style={{ fontSize: 12, fontWeight: 700, color: '#ffffff', marginTop: 4 }}>
                          {t.blogRead} →
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </article>
            )
          })}

          {/* 4. MASTER BOTTOM CTA BENTO (Span 12) */}
          <article className="bento-card bento-card--start bento-span-12">
            <picture className="bento-bg">
              <source
                type="image/webp"
                srcSet="/images/moodboard/mood-elevate.webp 1x, /images/moodboard/mood-elevate@2x.webp 2x"
              />
              <source
                srcSet="/images/moodboard/mood-elevate.jpg 1x, /images/moodboard/mood-elevate.jpg 2x"
              />
              <img
                src="/images/moodboard/mood-elevate.jpg"
                alt="M3 System Start Standortbestimmung"
                loading="lazy"
                decoding="async"
                className="bento-bg-img"
              />
            </picture>
            <div className="bento-overlay" />
            <div className="bento-content" style={{ maxWidth: 680 }}>
              <h2 className="bento-title" style={{ fontSize: 'clamp(24px, 3.2cqi, 36px)' }}>
                {isEn ? 'From Knowledge to Application.' : 'Vom Wissen zur Umsetzung.'}
              </h2>
              <p className="bento-lead">
                {isEn
                  ? 'Start your 360° System Start assessment or schedule your 20-30 min intro call with Michél.'
                  : 'Starte mit deiner persönlichen 360° Standortbestimmung oder sprich direkt mit Michél.'}
              </p>
              <div className="bento-cta-row" style={{ marginTop: 16 }}>
                <Link to="/system-start" className="btn-white">
                  {t.systemStart}
                </Link>
                <a
                  href={contact.cal}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-white-ghost"
                  data-cal-link="michelmeier/30min"
                >
                  {isEn ? 'Book 30-Min. Slot (Cal.com) →' : '30 Min. Slot buchen (Cal.com) →'}
                </a>
              </div>
            </div>
          </article>

        </section>
      </div>
    </main>
  )
}
