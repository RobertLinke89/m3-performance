import { Link } from 'react-router-dom'
import { BackLink } from '../components/BackLink'
import { MichelShow } from '../components/MichelShow'
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

          {/* 2. SUMMARY / BIO CARD (Span 4) - White background with black text */}
          <article
            className="bento-card bento-card--audit-step bento-span-4"
            style={{
              justifyContent: 'space-between',
              minHeight: 'clamp(440px, 50vh, 540px)',
              background: '#ffffff',
              color: '#111111',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
            }}
          >
            <div>
              <span
                className="bento-audit-badge"
                style={{
                  background: 'rgba(0, 0, 0, 0.07)',
                  color: '#111111',
                  borderColor: 'rgba(0, 0, 0, 0.12)',
                }}
              >
                {isEn ? 'PROFILE & CODEX' : 'PROFIL & CODEX'}
              </span>
              <h2 className="bento-title" style={{ fontSize: 21, color: '#111111', marginTop: 10 }}>
                {isEn ? '30+ Years of Movement Practice' : '30+ Jahre Bewegungserfahrung'}
              </h2>
              <p className="bento-desc" style={{ marginTop: 8, fontSize: 13, lineHeight: 1.5, color: '#333333' }}>
                {about.bio}
              </p>
            </div>

            <ul className="bento-audit-points" style={{ marginTop: 14 }}>
              <li style={{ color: '#222222' }}>
                <span style={{ color: '#111111', marginRight: 6 }}>✔</span>
                {isEn ? 'Breakdance World Champion (Battle of the Year)' : 'Breakdance Weltmeister (Battle of the Year)'}
              </li>
              <li style={{ color: '#222222' }}>
                <span style={{ color: '#111111', marginRight: 6 }}>✔</span>
                {isEn ? 'C6/C7 cervical disc herniation recovery' : 'C6/C7 Bandscheibenvorfall erfolgreich überwunden'}
              </li>
              <li style={{ color: '#222222' }}>
                <span style={{ color: '#111111', marginRight: 6 }}>✔</span>
                {isEn ? 'Solo fatherhood & high-performance balance' : 'Alleinerziehender Vater im High-Performance-Alltag'}
              </li>
            </ul>

            <div style={{ fontSize: 12, fontWeight: 700, color: '#111111', opacity: 0.9 }}>
              {isEn ? '→ No dogmas. Real life proof.' : '→ Keine Dogmen. Reine Praxis.'}
            </div>
          </article>

          {/* 3. LIFE TIMELINE BENTO (Span 12) - Horizontal timeline layout */}
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

            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 16,
                width: '100%',
                overflowX: 'auto',
                paddingBottom: 14,
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                scrollSnapType: 'x mandatory',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              {about.stations.map((s) => (
                <div
                  key={s.years}
                  className="bento-compass-card"
                  style={{
                    flex: '0 0 clamp(260px, 24vw, 320px)',
                    minHeight: 200,
                    cursor: 'default',
                    pointerEvents: 'none',
                    justifyContent: 'flex-start',
                    scrollSnapAlign: 'start',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                    <span style={{ fontSize: 11, fontWeight: 800, color: '#e8a14a', letterSpacing: '0.08em' }}>
                      {s.years}
                    </span>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#e8a14a', opacity: 0.7 }} />
                  </div>
                  <h3 style={{ margin: '4px 0 8px', fontSize: 16, fontWeight: 700, color: '#ffffff' }}>
                    {s.title}
                  </h3>
                  <p style={{ margin: 0, fontSize: 13, color: 'rgba(255,255,255,0.75)', lineHeight: 1.45 }}>
                    {s.text}
                  </p>
                </div>
              ))}
            </div>
          </article>

          {/* 4. CORE VALUES GRID (Span 12) - Highlight color background */}
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
                  style={{
                    minHeight: 160,
                    cursor: 'default',
                    pointerEvents: 'none',
                    justifyContent: 'flex-start',
                    background: 'linear-gradient(145deg, rgba(232, 161, 74, 0.16) 0%, rgba(232, 161, 74, 0.06) 100%)',
                    borderColor: 'rgba(232, 161, 74, 0.35)',
                    boxShadow: '0 4px 20px rgba(232, 161, 74, 0.08)',
                  }}
                >
                  <div
                    style={{
                      marginBottom: 10,
                      width: 38,
                      height: 38,
                      borderRadius: 10,
                      background: 'rgba(232, 161, 74, 0.22)',
                      border: '1px solid rgba(232, 161, 74, 0.45)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#e8a14a',
                    }}
                  >
                    <ValueIcon name={v.icon} />
                  </div>
                  <h3 style={{ margin: '0 0 6px', fontSize: 16, fontWeight: 700, color: '#ffffff' }}>
                    {v.title}
                  </h3>
                  <p style={{ margin: 0, fontSize: 13, color: 'rgba(255,255,255,0.85)', lineHeight: 1.45 }}>
                    {v.text}
                  </p>
                </div>
              ))}
            </div>
          </article>

          {/* 5. ABOUT MICHÉL INTERACTIVE SHOWREEL (Span 12) */}
          <article className="bento-card bento-span-12" style={{ padding: 'clamp(24px, 3.5vw, 40px)', background: 'var(--bg-2)', border: '1px solid var(--line)' }}>
            <div className="michel-split" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32, alignItems: 'center', width: '100%' }}>
              <div className="michel-visual">
                <MichelShow />
              </div>
              <div className="michel-copy">
                <p className="eyebrow">{t.michelEyebrow}</p>
                <h2 style={{ fontSize: 'clamp(26px, 3.2cqi, 38px)', margin: '10px 0 16px' }}>{t.michelH}</h2>
                <div className="michel-block" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <p>{t.michelLead}</p>
                  <p>{t.michelLead2}</p>
                  <p style={{ fontStyle: 'italic', color: 'var(--gold)' }}>„{t.michelQuote}“</p>
                  <p className="michel-meta" style={{ fontSize: 13, color: 'var(--muted)' }}>{t.michelMeta}</p>
                </div>
              </div>
            </div>
          </article>

          {/* 6. MASTER BOTTOM CTA BENTO (Span 12) - High Res Pushup Asset */}
          <article className="bento-card bento-card--start bento-span-12">
            <picture className="bento-bg">
              <source
                type="image/webp"
                srcSet="/images/moodboard/mood-pushup.webp 1x, /images/moodboard/mood-pushup@2x.webp 2x"
              />
              <source
                srcSet="/images/moodboard/mood-pushup.jpg 1x, /images/moodboard/mood-pushup.jpg 2x"
              />
              <img
                src="/images/moodboard/mood-pushup.jpg"
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
