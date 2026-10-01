import { Link, Navigate, useParams } from 'react-router-dom'
import { BackLink } from '../components/BackLink'
import { Img } from '../components/Img'
import { useUi } from '../copy'
import { useLocale } from '../locale'
import { byTier } from '../tierSort'
import { useContent } from '../useContent'

export function PillarPage() {
  const { slug } = useParams()
  const t = useUi()
  const { lang } = useLocale()
  const isEn = lang === 'en'
  const { contact, modules, pillars, posts, wa } = useContent()

  const pillarSlugMap: Record<string, string> = {
    metabolism: 'metabolism',
    stoffwechsel: 'metabolism',
    m1: 'metabolism',
    movement: 'movement',
    biomechanics: 'movement',
    biomechanik: 'movement',
    m2: 'movement',
    'mental-performance': 'mental-performance',
    mental: 'mental-performance',
    mindset: 'mental-performance',
    m3: 'mental-performance',
  }
  const s = (slug || '').toLowerCase()
  const resolvedSlug = pillarSlugMap[s] || s
  const pillar = pillars.find((p) => p.slug === resolvedSlug || p.id === resolvedSlug)
  if (!pillar) return <Navigate to="/" replace />
  const related = modules.filter((m) => m.pillar === pillar.id).slice().sort(byTier)
  const relatedPosts = posts.filter((p) => p.pillar === pillar.id)

  const moodMap: Record<string, string> = {
    m1: '/images/moodboard/mood-kitchen',
    m2: '/images/moodboard/mood-limitless',
    m3: '/images/moodboard/mood-focus',
  }
  const heroImageBase = moodMap[pillar.id] || '/images/moodboard/mood-kitchen'

  return (
    <main className="bento-page">
      <div className="wrap">
        <div style={{ marginBottom: 14 }}>
          <BackLink fallback="/#start" />
        </div>

        {/* Master Bento Grid */}
        <section className="bento-grid" aria-label={`${pillar.name} Bento Grid`}>

          {/* 1. HERO BENTO CARD (Span 8) */}
          <article className="bento-card bento-card--hero bento-span-8">
            <picture className="bento-bg">
              <source
                type="image/webp"
                srcSet={`${heroImageBase}.webp 1x, ${heroImageBase}@2x.webp 2x`}
              />
              <source
                srcSet={`${heroImageBase}.jpg 1x, ${heroImageBase}@2x.jpg 2x`}
              />
              <img
                src={`${heroImageBase}.jpg`}
                alt={`${pillar.mark} ${pillar.name}`}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="bento-bg-img"
              />
            </picture>
            <div className="bento-overlay" />
            <div className="bento-content bento-content--hero">
              <h1 className="bento-hero-h1">
                {pillar.mark} · {pillar.name}. <span>{pillar.title}</span>
              </h1>
              <p className="bento-lead" style={{ fontStyle: 'italic', opacity: 0.95 }}>
                „{pillar.quote}“
              </p>
              <p className="bento-desc" style={{ maxWidth: '56ch', marginTop: 6, fontSize: 14 }}>
                {pillar.body}
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

          {/* 2. SIGNALS & FOCUS AUDIT CARD (Span 4) */}
          <article className="bento-card bento-card--audit-step bento-span-4" style={{ justifyContent: 'space-between', minHeight: 'clamp(440px, 50vh, 540px)' }}>
            <div>
              <span className="bento-audit-badge">{isEn ? 'CORE FOCUS & SIGNALS' : 'FOKUS & KÖRPERSIGNALE'}</span>
              <h2 className="bento-title" style={{ fontSize: 21 }}>
                {pillar.label} · {t.signalsH}
              </h2>
              <p className="bento-desc">
                {isEn
                  ? 'Typical friction points indicating an acute bottleneck in this pillar:'
                  : 'Typische Reibungspunkte, die auf einen akuten Engpass in diesem Bereich hinweisen:'}
              </p>
            </div>
            <ul className="bento-audit-points">
              {pillar.signals.map((sig) => (
                <li key={sig}>{sig}</li>
              ))}
            </ul>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#ffffff', opacity: 0.85 }}>
              {isEn ? '→ Solved in the 90-Day Trajectory' : '→ Gelöst im 90-Tage-Fahrplan'}
            </div>
          </article>

          {/* 3. MATCHING MODULES IN THIS PILLAR (Span 12) */}
          <article className="bento-card bento-card--journal bento-span-12" style={{ padding: 'clamp(22px, 3vw, 36px)' }}>
            <div className="bento-card-header" style={{ marginBottom: 20 }}>
              <div>
                <h2 className="bento-title" style={{ fontSize: 'clamp(20px, 2.4cqi, 28px)' }}>
                  {isEn ? `Matching Modules in Pillar ${pillar.mark}` : `Passende Module & Angebote in Säule ${pillar.mark}`}
                </h2>
                <p className="bento-desc" style={{ maxWidth: '64ch' }}>
                  {isEn
                    ? 'Targeted interventions, structured protocols, and 1:1 coaching specifically engineered for this pillar.'
                    : 'Gezielte Einzelbausteine, strukturierte Protokolle und 1:1 Betreuungen für messbare Resultate.'}
                </p>
              </div>
            </div>

            {related.length > 0 ? (
              <div className="bento-audience-grid">
                {related.map((m) => (
                  <Link to={`/${m.slug}`} className="bento-sub-card" key={m.slug} style={{ textDecoration: 'none' }}>
                    <Img className="bento-sub-media" src={m.image} alt={m.title} />
                    <div className="bento-sub-body">
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 6 }}>
                        <h3>{m.title}</h3>
                        {'priceLabel' in m && m.priceLabel && (
                          <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.6)' }}>
                            {m.priceLabel}
                          </span>
                        )}
                      </div>
                      <p>{m.kicker}</p>
                      <span style={{ fontSize: 12, fontWeight: 700, color: '#ffffff', marginTop: 4 }}>
                        {t.detailsArrow}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="bento-desc">{t.noModules}</p>
            )}
          </article>

          {/* 4. PHYSIOLOGY & SCIENCE EVIDENCE (Span 6) */}
          <article className="bento-card bento-card--audit-step bento-span-6" style={{ padding: 'clamp(22px, 3vw, 32px)' }}>
            <div>
              <span className="bento-audit-badge">{isEn ? 'PHYSIOLOGICAL PRINCIPLES' : 'BIOLOGISCHE LOGIK'}</span>
              <h2 className="bento-title" style={{ fontSize: 20 }}>
                {t.scienceH}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 16 }}>
                {pillar.science.map((s) => (
                  <div key={s.title} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: 14 }}>
                    <h3 style={{ margin: '0 0 4px', fontSize: 15, fontWeight: 700, color: '#ffffff' }}>
                      {s.title}
                    </h3>
                    <p style={{ margin: 0, fontSize: 13, color: 'rgba(255,255,255,0.72)', lineHeight: 1.45 }}>
                      {s.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* 5. EXPERIENCE & REAL-WORLD CODEX (Span 6) */}
          <article className="bento-card bento-card--audit-step bento-span-6" style={{ padding: 'clamp(22px, 3vw, 32px)' }}>
            <div>
              <span className="bento-audit-badge">{isEn ? 'PRACTICE OVER THEORY' : 'PRAXIS-ERFAHRUNG'}</span>
              <h2 className="bento-title" style={{ fontSize: 20 }}>
                {pillar.experience.title}
              </h2>
              <p style={{ margin: '14px 0 0', fontSize: 13.5, color: 'rgba(255,255,255,0.78)', lineHeight: 1.55 }}>
                {pillar.experience.text}
              </p>
              <div style={{ marginTop: 18, padding: 14, borderRadius: 12, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <p style={{ margin: 0, fontSize: 13, fontStyle: 'italic', color: '#ffffff', lineHeight: 1.45 }}>
                  „{pillar.experience.quote}“
                </p>
              </div>
            </div>
          </article>

          {/* 6. GUIDING PRINCIPLES (Span 6) */}
          <article className="bento-card bento-card--audit-step bento-span-6" style={{ padding: 'clamp(22px, 3vw, 32px)' }}>
            <div>
              <span className="bento-audit-badge">{isEn ? 'CORE TENETS' : 'LEITPRINZIPIEN'}</span>
              <h2 className="bento-title" style={{ fontSize: 20 }}>
                {t.principlesH}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 16 }}>
                {pillar.principles.map((pr) => (
                  <div key={pr.title} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: 12 }}>
                    <strong style={{ display: 'block', fontSize: 14, color: '#ffffff', marginBottom: 2 }}>
                      {pr.title}
                    </strong>
                    <span style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.7)', lineHeight: 1.4 }}>
                      {pr.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* 7. RELATED JOURNAL ARTICLES (Span 6) */}
          <article className="bento-card bento-card--audit-step bento-span-6" style={{ padding: 'clamp(22px, 3vw, 32px)' }}>
            <div>
              <span className="bento-audit-badge">{isEn ? 'INSIGHTS & JOURNAL' : 'VERTIEFENDE ARTIKEL'}</span>
              <h2 className="bento-title" style={{ fontSize: 20 }}>
                {t.blogMore}
              </h2>
              {relatedPosts.length > 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 16 }}>
                  {relatedPosts.map((post) => (
                    <Link
                      to={`/blog/${post.slug}`}
                      key={post.slug}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: 12,
                        borderRadius: 12,
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        textDecoration: 'none',
                        color: '#ffffff',
                      }}
                    >
                      <div>
                        <strong style={{ fontSize: 13.5, display: 'block' }}>{post.title}</strong>
                        <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>
                          {post.minutes} {t.blogMin} · {post.excerpt.slice(0, 60)}…
                        </span>
                      </div>
                      <span style={{ fontSize: 14, color: '#ffffff', marginLeft: 12, flexShrink: 0 }}>→</span>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="bento-desc" style={{ marginTop: 12 }}>{isEn ? 'More insights in the journal.' : 'Weitere Artikel im Journal.'}</p>
              )}
            </div>
          </article>

          {/* 8. MASTER BOTTOM CTA BENTO (Span 12) */}
          <article className="bento-card bento-card--start bento-span-12">
            <picture className="bento-bg">
              <source
                type="image/webp"
                srcSet="/images/moodboard/mood-mobility.webp 1x, /images/moodboard/mood-mobility@2x.webp 2x"
              />
              <source
                srcSet="/images/moodboard/mood-mobility.jpg 1x, /images/moodboard/mood-mobility.jpg 2x"
              />
              <img
                src="/images/moodboard/mood-mobility.jpg"
                alt="Michél Meier Performance Coaching"
                loading="lazy"
                decoding="async"
                className="bento-bg-img"
              />
            </picture>
            <div className="bento-overlay" />
            <div className="bento-content" style={{ maxWidth: 680 }}>
              <h2 className="bento-title" style={{ fontSize: 'clamp(24px, 3.2cqi, 36px)' }}>
                {t.ctaBefore} {t.ctaGold} {t.ctaAfter}
              </h2>
              <p className="bento-lead">
                {t.pillarCtaLead}
              </p>
              <div className="bento-cta-row" style={{ marginTop: 16 }}>
                <a href={wa.talk} target="_blank" rel="noreferrer" className="btn-white">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="btn-icon" style={{ width: 16, height: 16, marginRight: 6 }}>
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
                  </svg>
                  {t.ctaTalk}
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

        </section>
      </div>
    </main>
  )
}
