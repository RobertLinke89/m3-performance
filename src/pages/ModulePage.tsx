import { Link, Navigate, useParams } from 'react-router-dom'
import { BackLink } from '../components/BackLink'
import { Img } from '../components/Img'
import { useUi } from '../copy'
import { useLocale } from '../locale'
import { byTier } from '../tierSort'
import { useContent } from '../useContent'

export function ModulePage() {
  const { slug } = useParams()
  const t = useUi()
  const { lang } = useLocale()
  const isEn = lang === 'en'
  const { contact, modules, pillars, process } = useContent()
  const mod = modules.find((m) => m.slug === slug)
  if (!mod) return <Navigate to="/" replace />
  const pillar = pillars.find((p) => p.id === mod.pillar)
  const related = modules
    .filter((m) => m.pillar === mod.pillar && m.slug !== mod.slug)
    .slice()
    .sort(byTier)
    .slice(0, 3)
  const fallback = pillar ? `/${pillar.slug}` : '/#module'

  return (
    <main className="bento-page">
      <div className="wrap">
        <div style={{ marginBottom: 14 }}>
          <BackLink fallback={fallback} />
        </div>

        {/* Master Bento Grid */}
        <section className="bento-grid" aria-label={`${mod.title} Bento Grid`}>

          {/* 1. HERO BENTO CARD (Span 8) */}
          <article className="bento-card bento-card--hero bento-span-8">
            <picture className="bento-bg">
              <source
                type="image/webp"
                srcSet={`${mod.image} 1x, ${mod.image.replace('.webp', '@2x.webp')} 2x`}
              />
              <img
                src={mod.image.replace('.webp', '.jpg')}
                alt={mod.title}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="bento-bg-img"
              />
            </picture>
            <div className="bento-overlay" />
            <div className="bento-content bento-content--hero">
              <h1 className="bento-hero-h1">
                {pillar?.mark ? `${pillar.mark} · ` : ''}{mod.title}. <span>{mod.badge}</span>
              </h1>
              <p className="bento-lead" style={{ fontWeight: 650 }}>
                {mod.kicker}
              </p>
              <p className="bento-desc" style={{ maxWidth: '56ch', marginTop: 6, fontSize: 13.5 }}>
                {mod.text}
              </p>
              <div className="bento-cta-row" style={{ marginTop: 16 }}>
                <a href={mod.wa} target="_blank" rel="noreferrer" className="btn-white">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="btn-icon" style={{ width: 16, height: 16, marginRight: 6 }}>
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
                  </svg>
                  {t.writeMe}
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

          {/* 2. OUTCOME & FACTS CARD (Span 4) */}
          <article className="bento-card bento-card--audit-step bento-span-4" style={{ justifyContent: 'space-between', minHeight: 'clamp(440px, 50vh, 540px)' }}>
            <div>
              <span className="bento-audit-badge">{isEn ? 'CORE DELIVERABLE' : 'DAS RESULTAT'}</span>
              <h2 className="bento-title" style={{ fontSize: 20 }}>
                {mod.outcome}
              </h2>
              {'priceLabel' in mod && mod.priceLabel && (
                <div style={{ marginTop: 10, fontSize: 14, fontWeight: 700, color: '#ffffff' }}>
                  {isEn ? 'Investment: ' : 'Investition: '}
                  <span style={{ color: 'rgba(255,255,255,0.75)' }}>{mod.priceLabel}</span>
                </div>
              )}
            </div>

            <div style={{ marginTop: 16 }}>
              <span className="bento-audit-badge">{isEn ? 'TARGET AUDIENCE' : 'FÜR WEN'}</span>
              <ul className="bento-audit-points">
                {mod.forWhom.slice(0, 3).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div style={{ fontSize: 12, fontWeight: 700, color: '#ffffff', opacity: 0.85, marginTop: 12 }}>
              {isEn ? '→ Fully integrated with Michél' : '→ Persönliche Begleitung durch Michél'}
            </div>
          </article>

          {/* 3. THE 3-STEP ROADMAP IN THIS MODULE (Span 12) */}
          <article className="bento-card bento-card--journal bento-span-12" style={{ padding: 'clamp(22px, 3vw, 36px)' }}>
            <div className="bento-card-header" style={{ marginBottom: 20 }}>
              <div>
                <h2 className="bento-title" style={{ fontSize: 'clamp(20px, 2.4cqi, 28px)' }}>
                  {t.processH}
                </h2>
                <p className="bento-desc" style={{ maxWidth: '64ch' }}>
                  {isEn
                    ? 'Structured sequence from baseline analysis to sustained physical execution.'
                    : 'Klar strukturierter Ablauf von der Diagnostik bis zur festen Verankerung im Alltag.'}
                </p>
              </div>
            </div>

            <div className="bento-compass-grid">
              {process.map((s) => (
                <div
                  key={s.n}
                  className="bento-compass-card"
                  style={{ minHeight: 180, cursor: 'default', pointerEvents: 'none' }}
                >
                  <div>
                    <span style={{ fontSize: 11, fontWeight: 800, color: '#ffffff', opacity: 0.6, letterSpacing: '0.08em' }}>
                      SCHRITT 0{s.n}
                    </span>
                    <h3 style={{ margin: '8px 0 6px', fontSize: 16, fontWeight: 700, color: '#ffffff' }}>
                      {s.title}
                    </h3>
                    <p style={{ margin: 0, fontSize: 13, color: 'rgba(255,255,255,0.72)', lineHeight: 1.45 }}>
                      {s.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* 4. WHAT IS INCLUDED (Span 6) */}
          <article className="bento-card bento-card--audit-step bento-span-6" style={{ padding: 'clamp(22px, 3vw, 32px)' }}>
            <div>
              <span className="bento-audit-badge">{isEn ? 'MODULE SCOPE' : 'WAS ENTHALTEN IST'}</span>
              <h2 className="bento-title" style={{ fontSize: 20 }}>
                {t.includesH}
              </h2>
              <ul className="bento-audit-points" style={{ marginTop: 16 }}>
                {mod.includes.map((inc) => (
                  <li key={inc} style={{ fontSize: 13.5 }}>{inc}</li>
                ))}
              </ul>
            </div>
          </article>

          {/* 5. SYSTEM CONTEXT & PILLAR SYNERGY (Span 6) */}
          {pillar && (
            <article className="bento-card bento-card--audit-step bento-span-6" style={{ padding: 'clamp(22px, 3vw, 32px)', justifyContent: 'space-between' }}>
              <div>
                <span className="bento-audit-badge">{isEn ? 'SYSTEM PILLAR' : 'SÄULEN-KONTEXT'}</span>
                <h2 className="bento-title" style={{ fontSize: 20 }}>
                  {t.partOf} {pillar.mark} · {pillar.name}
                </h2>
                <p style={{ margin: '12px 0 0', fontSize: 13.5, color: '#333333', lineHeight: 1.5 }}>
                  {pillar.lead}
                </p>
                <div style={{ marginTop: 14, fontStyle: 'italic', fontSize: 13, color: '#111111' }}>
                  „{pillar.quote}“
                </div>
              </div>

              <div style={{ marginTop: 20 }}>
                <Link to={`/${pillar.slug}`} className="btn-white-ghost" style={{ display: 'inline-block' }}>
                  {t.openPillarBtn} →
                </Link>
              </div>
            </article>
          )}

          {/* 6. RELATED MODULES (Span 12) */}
          {related.length > 0 && (
            <article className="bento-card bento-card--journal bento-span-12" style={{ padding: 'clamp(22px, 3vw, 36px)' }}>
              <div className="bento-card-header" style={{ marginBottom: 20 }}>
                <div>
                  <h2 className="bento-title" style={{ fontSize: 'clamp(20px, 2.4cqi, 28px)' }}>
                    {t.related}
                  </h2>
                  <p className="bento-desc" style={{ maxWidth: '64ch' }}>
                    {isEn
                      ? 'Complementary modules from the same pillar to expand your capacity.'
                      : 'Ergänzende Bausteine aus derselben Säule für maximale Synergie.'}
                  </p>
                </div>
              </div>

              <div className="bento-audience-grid">
                {related.map((m) => (
                  <Link to={`/${m.slug}`} className="bento-sub-card" key={m.slug} style={{ textDecoration: 'none' }}>
                    <Img className="bento-sub-media" src={m.image} alt={m.title} />
                    <div className="bento-sub-body">
                      <h3>{m.title}</h3>
                      <p>{m.kicker}</p>
                      <span style={{ fontSize: 12, fontWeight: 700, color: '#ffffff', marginTop: 4 }}>
                        {t.detailsArrow}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </article>
          )}

          {/* 7. MASTER BOTTOM CTA BENTO (Span 12) */}
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
                {mod.outcome}
              </h2>
              <p className="bento-lead">
                {isEn
                  ? 'Start directly with this module or take the comprehensive 360° System Start assessment.'
                  : 'Starte direkt mit diesem Modul oder ermittle im 360° System Start deinen primären Hebel.'}
              </p>
              <div className="bento-cta-row" style={{ marginTop: 16 }}>
                <a href={mod.wa} target="_blank" rel="noreferrer" className="btn-white">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="btn-icon" style={{ width: 16, height: 16, marginRight: 6 }}>
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
                  </svg>
                  {t.writeMe}
                </a>
                <Link to="/system-start" className="btn-white-ghost">
                  {t.preferStart}
                </Link>
                <a
                  href={contact.cal}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-white-ghost"
                  data-cal-link="michelmeier/30min"
                >
                  {isEn ? '30-Min. Call (Cal.com)' : '30 Min. Slot (Cal.com)'}
                </a>
              </div>
            </div>
          </article>

        </section>
      </div>
    </main>
  )
}
