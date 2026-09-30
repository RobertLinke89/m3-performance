import { Link } from 'react-router-dom'
import { BackLink } from '../components/BackLink'
import { useUi } from '../copy'
import { useLocale } from '../locale'
import { useContent } from '../useContent'

const phoneDisplay = '+49 176 99016640'

export function Contact() {
  const t = useUi()
  const { lang } = useLocale()
  const isEn = lang === 'en'
  const { contact, wa } = useContent()

  return (
    <main className="bento-page">
      <div className="wrap">
        <div style={{ marginBottom: 14 }}>
          <BackLink fallback="/" home={false} />
        </div>

        {/* Master Bento Grid */}
        <section className="bento-grid" aria-label="M³ Contact Bento Grid">

          {/* 1. HERO BENTO CARD (Span 8) */}
          <article className="bento-card bento-card--hero bento-span-8">
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
                alt="Michél Meier Kontakt & Orientierungsgespräch"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="bento-bg-img"
              />
            </picture>
            <div className="bento-overlay" />
            <div className="bento-content bento-content--hero">
              <h1 className="bento-hero-h1">
                {t.contactH}
              </h1>
              <p className="bento-lead">
                {t.contactLead}
              </p>
              <div className="bento-cta-row" style={{ marginTop: 16 }}>
                <a href={wa.talk} target="_blank" rel="noreferrer" className="btn-white">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="btn-icon" style={{ width: 16, height: 16, marginRight: 6 }}>
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
                  </svg>
                  {t.contactWa}
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

          {/* 2. DIRECT CHANNELS CARD (Span 4) */}
          <article className="bento-card bento-card--audit-step bento-span-4" style={{ justifyContent: 'space-between', minHeight: 'clamp(440px, 50vh, 540px)' }}>
            <div>
              <span className="bento-audit-badge">{isEn ? 'DIRECT CHANNELS' : 'DIREKTKONTAKT'}</span>
              <h2 className="bento-title" style={{ fontSize: 21 }}>
                {isEn ? 'Fast & Confidential' : 'Schnell & Unverbindlich'}
              </h2>
              <p className="bento-desc">
                {isEn
                  ? 'Reach out via your preferred channel – directly with Michél Meier:'
                  : 'Wähle deinen bevorzugten Kanal – direkt und persönlich mit Michél:'}
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, margin: '14px 0' }}>
              <a
                href={wa.talk}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '12px 16px',
                  borderRadius: 12,
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontSize: 13.5,
                  fontWeight: 650,
                }}
              >
                <span>WhatsApp: {t.footerWaTalk}</span>
              </a>

              <a
                href={`tel:+${contact.phone}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '12px 16px',
                  borderRadius: 12,
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontSize: 13.5,
                  fontWeight: 650,
                }}
              >
                <span>Telefon: {phoneDisplay}</span>
              </a>

              <a
                href={contact.instagram}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '12px 16px',
                  borderRadius: 12,
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontSize: 13.5,
                  fontWeight: 650,
                }}
              >
                <span>Instagram: @michelmeiermoves</span>
              </a>
            </div>

            <div style={{ fontSize: 12, fontWeight: 700, color: '#ffffff', opacity: 0.85 }}>
              {isEn ? '→ Responses usually within a few hours' : '→ Antwort meist innerhalb weniger Stunden'}
            </div>
          </article>

          {/* 3. 3-STEP CONSULTATION FLOW (Span 12) */}
          <article className="bento-card bento-card--journal bento-span-12" style={{ padding: 'clamp(22px, 3vw, 36px)' }}>
            <div className="bento-card-header" style={{ marginBottom: 20 }}>
              <div>
                <h2 className="bento-title" style={{ fontSize: 'clamp(20px, 2.4cqi, 28px)' }}>
                  {t.contactHow}
                </h2>
                <p className="bento-desc" style={{ maxWidth: '64ch' }}>
                  {isEn
                    ? 'No sales pressure. A real 1:1 conversation on eye level to assess your capacity.'
                    : 'Kein Verkaufsdruck. Ein ehrliches Gespräch auf Augenhöhe, um deine Ist-Situation zu verstehen.'}
                </p>
              </div>
            </div>

            <div className="bento-compass-grid">
              <div className="bento-compass-card" style={{ minHeight: 180, cursor: 'default', pointerEvents: 'none' }}>
                <span style={{ fontSize: 11, fontWeight: 800, color: '#ffffff', opacity: 0.6, letterSpacing: '0.08em' }}>
                  SCHRITT 01
                </span>
                <h3 style={{ margin: '8px 0 6px', fontSize: 16, fontWeight: 700, color: '#ffffff' }}>
                  {t.contactS1T}
                </h3>
                <p style={{ margin: 0, fontSize: 13, color: 'rgba(255,255,255,0.72)', lineHeight: 1.45 }}>
                  {t.contactS1}
                </p>
              </div>

              <div className="bento-compass-card" style={{ minHeight: 180, cursor: 'default', pointerEvents: 'none' }}>
                <span style={{ fontSize: 11, fontWeight: 800, color: '#ffffff', opacity: 0.6, letterSpacing: '0.08em' }}>
                  SCHRITT 02
                </span>
                <h3 style={{ margin: '8px 0 6px', fontSize: 16, fontWeight: 700, color: '#ffffff' }}>
                  {t.contactS2T}
                </h3>
                <p style={{ margin: 0, fontSize: 13, color: 'rgba(255,255,255,0.72)', lineHeight: 1.45 }}>
                  {t.contactS2}
                </p>
              </div>

              <div className="bento-compass-card" style={{ minHeight: 180, cursor: 'default', pointerEvents: 'none' }}>
                <span style={{ fontSize: 11, fontWeight: 800, color: '#ffffff', opacity: 0.6, letterSpacing: '0.08em' }}>
                  SCHRITT 03
                </span>
                <h3 style={{ margin: '8px 0 6px', fontSize: 16, fontWeight: 700, color: '#ffffff' }}>
                  {t.contactS3T}
                </h3>
                <p style={{ margin: 0, fontSize: 13, color: 'rgba(255,255,255,0.72)', lineHeight: 1.45 }}>
                  {t.contactS3}
                </p>
              </div>
            </div>
          </article>

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
                {isEn ? 'Ready for your Baseline Assessment?' : 'Bereit für deine Standortbestimmung?'}
              </h2>
              <p className="bento-lead">
                {isEn
                  ? 'Start with the comprehensive 360° System Start or book your 30-min intro slot.'
                  : 'Starte direkt mit der 360° System Start Diagnostik oder sichere dir deinen Termin.'}
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
