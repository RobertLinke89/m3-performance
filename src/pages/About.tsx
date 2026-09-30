import { Link } from 'react-router-dom'
import { BackLink } from '../components/BackLink'
import { ValueIcon } from '../components/ValueIcon'
import { useUi } from '../copy'
import { useLocale } from '../locale'
import { useContent } from '../useContent'

export function About() {
  const t = useUi()
  const { lang } = useLocale()
  const isEn = lang === 'en'
  const { about, contact, wa } = useContent()

  return (
    <main className="bento-page">
      <div className="wrap">
        <div style={{ marginBottom: 14 }}>
          <BackLink fallback="/" home={false} />
        </div>

        {/* Master Bento Grid */}
        <section className="bento-grid" aria-label="Michél Meier About Bento Grid">

          {/* 1. HERO BENTO CARD (Span 8 - World Champion & Codex) */}
          <article className="bento-card bento-card--hero bento-span-8">
            <picture className="bento-bg">
              <source
                type="image/webp"
                srcSet="/images/moodboard/mood-freeze.webp 1x, /images/moodboard/mood-freeze@2x.webp 2x"
              />
              <source
                srcSet="/images/moodboard/mood-freeze.jpg 1x, /images/moodboard/mood-freeze.jpg 2x"
              />
              <img
                src="/images/moodboard/mood-freeze.jpg"
                alt="Michél Meier Breakdance World Champion"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="bento-bg-img"
              />
            </picture>
            <div className="bento-overlay" />
            <div className="bento-content bento-content--hero">
              <h1 className="bento-hero-h1">
                Michél Meier. <span>{about.headline}</span>
              </h1>
              <p className="bento-lead" style={{ fontStyle: 'italic', opacity: 0.95 }}>
                „{about.quote}“
              </p>
              <p className="bento-desc" style={{ maxWidth: '56ch', marginTop: 6, fontSize: 13.5 }}>
                {about.intro}
              </p>
              <div className="bento-cta-row" style={{ marginTop: 16 }}>
                <a href={wa.talk} target="_blank" rel="noreferrer" className="btn-white">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="btn-icon" style={{ width: 16, height: 16, marginRight: 6 }}>
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
                  </svg>
                  {t.firstTalk}
                </a>
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

          {/* 2. SUMMARY / BIO CARD (Span 4) */}
          <article className="bento-card bento-card--audit-step bento-span-4" style={{ justifyContent: 'space-between', minHeight: 'clamp(440px, 50vh, 540px)' }}>
            <div>
              <span className="bento-audit-badge">{isEn ? 'PROFILE & CODEX' : 'PROFIL & CODEX'}</span>
              <h2 className="bento-title" style={{ fontSize: 21 }}>
                {isEn ? '30+ Years of Movement Practice' : '30+ Jahre Bewegungserfahrung'}
              </h2>
              <p className="bento-desc" style={{ marginTop: 8, fontSize: 13, lineHeight: 1.5 }}>
                {about.bio}
              </p>
            </div>

            <ul className="bento-audit-points" style={{ marginTop: 14 }}>
              <li>{isEn ? 'Breakdance World Champion (Battle of the Year)' : 'Breakdance Weltmeister (Battle of the Year)'}</li>
              <li>{isEn ? 'C6/C7 cervical disc herniation recovery' : 'C6/C7 Bandscheibenvorfall erfolgreich überwunden'}</li>
              <li>{isEn ? 'Solo fatherhood & high-performance balance' : 'Alleinerziehender Vater im High-Performance-Alltag'}</li>
            </ul>

            <div style={{ fontSize: 12, fontWeight: 700, color: '#ffffff', opacity: 0.85 }}>
              {isEn ? '→ No dogmas. Real life proof.' : '→ Keine Dogmen. Reine Praxis.'}
            </div>
          </article>

          {/* 3. LIFE TIMELINE BENTO (Span 12) */}
          <article className="bento-card bento-card--journal bento-span-12" style={{ padding: 'clamp(22px, 3vw, 36px)' }}>
            <div className="bento-card-header" style={{ marginBottom: 20 }}>
              <div>
                <h2 className="bento-title" style={{ fontSize: 'clamp(20px, 2.4cqi, 28px)' }}>
                  {t.aboutYears}
                </h2>
                <p className="bento-desc" style={{ maxWidth: '64ch' }}>
                  {isEn
                    ? 'From the early stages of competitive movement to the systematic origin of M³ Performance.'
                    : 'Vom frühen Leistungssport über kritische Verletzungen bis zur Geburt des M³ Performance Systems.'}
                </p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 14, width: '100%' }}>
              {about.stations.map((s) => (
                <div
                  key={s.years}
                  className="bento-compass-card"
                  style={{ minHeight: 180, cursor: 'default', pointerEvents: 'none', justifyContent: 'flex-start' }}
                >
                  <span style={{ fontSize: 11, fontWeight: 800, color: '#ffffff', opacity: 0.6, letterSpacing: '0.08em' }}>
                    {s.years}
                  </span>
                  <h3 style={{ margin: '8px 0 6px', fontSize: 16, fontWeight: 700, color: '#ffffff' }}>
                    {s.title}
                  </h3>
                  <p style={{ margin: 0, fontSize: 13, color: 'rgba(255,255,255,0.75)', lineHeight: 1.45 }}>
                    {s.text}
                  </p>
                </div>
              ))}
            </div>
          </article>

          {/* 4. CORE VALUES GRID (Span 12) */}
          <article className="bento-card bento-card--journal bento-span-12" style={{ padding: 'clamp(22px, 3vw, 36px)' }}>
            <div className="bento-card-header" style={{ marginBottom: 20 }}>
              <div>
                <h2 className="bento-title" style={{ fontSize: 'clamp(20px, 2.4cqi, 28px)' }}>
                  {t.aboutValues}
                </h2>
                <p className="bento-desc" style={{ maxWidth: '64ch' }}>
                  {isEn
                    ? 'The non-negotiable principles that guide every single intervention and coaching relationship.'
                    : 'Die unverrückbaren Leitlinien, nach denen Michél jedes Coaching und jede Betreuung führt.'}
                </p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 14, width: '100%' }}>
              {about.values.map((v) => (
                <div
                  key={v.title}
                  className="bento-compass-card"
                  style={{ minHeight: 160, cursor: 'default', pointerEvents: 'none', justifyContent: 'flex-start' }}
                >
                  <div style={{ marginBottom: 8, color: '#ffffff' }}>
                    <ValueIcon name={v.icon} />
                  </div>
                  <h3 style={{ margin: '0 0 6px', fontSize: 16, fontWeight: 700, color: '#ffffff' }}>
                    {v.title}
                  </h3>
                  <p style={{ margin: 0, fontSize: 13, color: 'rgba(255,255,255,0.72)', lineHeight: 1.45 }}>
                    {v.text}
                  </p>
                </div>
              ))}
            </div>
          </article>

          {/* 5. MASTER BOTTOM CTA BENTO (Span 12) */}
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
                alt="M3 Performance System Start"
                loading="lazy"
                decoding="async"
                className="bento-bg-img"
              />
            </picture>
            <div className="bento-overlay" />
            <div className="bento-content" style={{ maxWidth: 680 }}>
              <h2 className="bento-title" style={{ fontSize: 'clamp(24px, 3.2cqi, 36px)' }}>
                {isEn ? 'Work Directly with Michél.' : 'Direkt mit Michél arbeiten.'}
              </h2>
              <p className="bento-lead">
                {isEn
                  ? 'Get your baseline assessed or schedule your direct 20-30 min intro call.'
                  : 'Starte mit deiner persönlichen 360° Standortbestimmung oder buche direkt ein 30 Min. Orientierungsgespräch.'}
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
