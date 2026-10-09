import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BackLink } from '../components/BackLink'
import { BentoDisclosure } from '../components/BentoDisclosure'
import { Img } from '../components/Img'
import { useUi } from '../copy'
import { useLocale } from '../locale'
import { useContent } from '../useContent'

export function MentalPage() {
  const t = useUi()
  const { lang } = useLocale()
  const isEn = lang === 'en'
  const { contact, modules, pillars, posts, wa } = useContent()
  const pillar = pillars.find((p) => p.id === 'm3')!
  const related = modules.filter((m) => m.pillar === 'm3')
  const relatedPosts = posts.filter((p) => p.pillar === 'm3')
  const prompts = 'prompts' in pillar ? pillar.prompts : []
  const [activePrompt, setActivePrompt] = useState<number>(0)

  return (
    <main className="bento-page">
      <div className="wrap">
        <div style={{ marginBottom: 14 }}>
          <BackLink fallback="/#start" />
        </div>

        {/* Master Bento Grid */}
        <section className="bento-grid" aria-label="M³ Mental Performance Bento Grid">

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
                alt="M3 Mental Performance Fokus & neuronale Klarheit"
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

          {/* 2. NEURAL STRESS & SIGNALS AUDIT CARD (Span 4) */}
          <article className="bento-card bento-card--audit-step bento-span-4" style={{ justifyContent: 'space-between', minHeight: 'clamp(440px, 50vh, 540px)' }}>
            <div>
              <span className="bento-audit-badge">{isEn ? 'NEURO-STRESS PROFILE' : 'NEURONALE RESILIENZ'}</span>
              <h2 className="bento-title" style={{ fontSize: 21 }}>
                {pillar.label} · {t.mentalSignalsH}
              </h2>
              <p className="bento-desc">
                {isEn
                  ? 'High performance without nervous system regulation leads to systemic burnout:'
                  : 'Hohe kognitive Taktung ohne parasympathische Erholung erzeugt schleichenden Fokusverlust:'}
              </p>
            </div>
            <ul className="bento-audit-points">
              {pillar.signals.map((sig) => (
                <li key={sig}>{sig}</li>
              ))}
            </ul>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#ffffff', opacity: 0.85 }}>
              {isEn ? '→ Mindset trained like physical muscle' : '→ Trainiert wie ein biologischer Muskel'}
            </div>
          </article>

          {/* 3. INTERACTIVE DECISION & CLARITY DRILL (Span 12) */}
          {prompts.length > 0 && (
            <article className="bento-card bento-card--journal bento-span-12" style={{ padding: 'clamp(22px, 3vw, 36px)' }}>
              <div className="bento-card-header" style={{ marginBottom: 20 }}>
                <div>
                  <h2 className="bento-title" style={{ fontSize: 'clamp(20px, 2.4cqi, 28px)' }}>
                    {t.mentalDrillH}
                  </h2>
                  <p className="bento-desc" style={{ maxWidth: '64ch' }}>
                    {t.mentalDrillLead}
                  </p>
                </div>
              </div>

              <div className="bento-compass-grid">
                {prompts.map((p, idx) => {
                  const isSelected = activePrompt === idx
                  return (
                    <button
                      key={p.q}
                      type="button"
                      className={`bento-compass-card ${isSelected ? 'selected' : ''}`}
                      onClick={() => setActivePrompt(idx)}
                      style={{ minHeight: 180, justifyContent: 'space-between' }}
                    >
                      <div>
                        <span style={{ fontSize: 11, fontWeight: 800, color: '#ffffff', opacity: 0.6, letterSpacing: '0.08em' }}>
                          PROMPT 0{idx + 1}
                        </span>
                        <h3 style={{ margin: '8px 0 0', fontSize: 16, fontWeight: 700, color: '#ffffff', lineHeight: 1.35 }}>
                          {p.q}
                        </h3>
                      </div>
                      <div style={{ marginTop: 12, fontSize: 12, fontWeight: 700, color: isSelected ? '#ffffff' : 'rgba(255,255,255,0.6)' }}>
                        {isSelected ? '✓ ' + (isEn ? 'Active reflection' : 'Ausgewählt') : (isEn ? 'Reflect on this →' : 'Ansehen →')}
                      </div>
                    </button>
                  )
                })}
              </div>

              {prompts[activePrompt] && (
                <div className="bento-result-box" style={{ marginTop: 18 }}>
                  <span className="bento-audit-badge">{isEn ? 'SYSTEM IMPULSE & PROTOCOL' : 'M³ SYSTEM-IMPULS'}</span>
                  <h3 style={{ margin: '6px 0 8px', fontSize: 18, color: '#ffffff' }}>
                    {prompts[activePrompt].q}
                  </h3>
                  <p style={{ margin: 0, fontSize: 14, color: 'rgba(255,255,255,0.8)', lineHeight: 1.55 }}>
                    {prompts[activePrompt].hint}
                  </p>
                </div>
              )}
            </article>
          )}

          {/* 4. MATCHING MODULES (Span 12) */}
          {related.length > 0 && (
            <article className="bento-card bento-card--journal bento-span-12" style={{ padding: 'clamp(22px, 3vw, 36px)' }}>
              <div className="bento-card-header" style={{ marginBottom: 20 }}>
                <div>
                  <h2 className="bento-title" style={{ fontSize: 'clamp(20px, 2.4cqi, 28px)' }}>
                    {isEn ? 'Matching Mental Performance Modules' : 'Passende Module in M³ Mindset & Mental Performance'}
                  </h2>
                  <p className="bento-desc" style={{ maxWidth: '64ch' }}>
                    {isEn
                      ? 'Targeted modules for decision architecture, sleep optimization, and system hold.'
                      : 'Gezielte Formate für Entscheidungsarchitektur, Schlaf-Impulse und langfristiges System Hold.'}
                  </p>
                </div>
              </div>

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
            </article>
          )}

          {/* 5. NEURO-SCIENCE & HRV EVIDENCE (Span 6) */}
          <article className="bento-card bento-card--audit-step bento-span-6" style={{ padding: 'clamp(22px, 3vw, 32px)' }}>
            <div>
              <span className="bento-audit-badge">{isEn ? 'NEURO-PHYSIOLOGY' : 'NEURO-PHYSIOLOGIE'}</span>
              <h2 className="bento-title" style={{ fontSize: 20, marginBottom: 12 }}>
                {t.mentalScienceH}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {pillar.science.map((s, idx) => (
                  <BentoDisclosure
                    key={s.title}
                    title={s.title}
                    badge={`0${idx + 1}`}
                    theme="light"
                  >
                    <p style={{ margin: 0 }}>{s.text}</p>
                  </BentoDisclosure>
                ))}
              </div>
            </div>
          </article>

          {/* 6. CODEX & EVERYDAY LEADERSHIP EXPERIENCE (Span 6) */}
          <article className="bento-card bento-card--audit-step bento-span-6" style={{ padding: 'clamp(22px, 3vw, 32px)', justifyContent: 'space-between' }}>
            <div>
              <span className="bento-audit-badge">{isEn ? 'REAL LIFE RESILIENCE' : 'ALLTAGS-RESILIENZ'}</span>
              <h2 className="bento-title" style={{ fontSize: 20 }}>
                {pillar.experience.title}
              </h2>
              <div style={{ marginTop: 14, padding: 14, borderRadius: 12, background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.08)' }}>
                <p style={{ margin: 0, fontSize: 13, fontStyle: 'italic', color: '#111111', lineHeight: 1.45 }}>
                  „{pillar.experience.quote}“
                </p>
              </div>
              <div style={{ marginTop: 12 }}>
                <BentoDisclosure
                  title={isEn ? 'Deep Dive: Real Life Codex' : 'Hintergrund: Praxis-Codex & Methodik'}
                  subtitle={isEn ? 'High pressure leadership & decision economy' : 'Führung unter Druck & Entscheidungsökonomie'}
                  theme="light"
                >
                  <p style={{ margin: 0 }}>{pillar.experience.text}</p>
                </BentoDisclosure>
              </div>
            </div>
          </article>

          {/* 7. MENTAL PRINCIPLES (Span 6) */}
          <article className="bento-card bento-card--audit-step bento-span-6" style={{ padding: 'clamp(22px, 3vw, 32px)' }}>
            <div>
              <span className="bento-audit-badge">{isEn ? 'OPERATING RULES' : 'M³ MINDSET-REGELN'}</span>
              <h2 className="bento-title" style={{ fontSize: 20, marginBottom: 12 }}>
                {t.mentalPrinciplesH}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {pillar.principles.map((pr, idx) => (
                  <BentoDisclosure
                    key={pr.title}
                    title={pr.title}
                    badge={`REGEL 0${idx + 1}`}
                    theme="light"
                  >
                    <p style={{ margin: 0 }}>{pr.text}</p>
                  </BentoDisclosure>
                ))}
              </div>
            </div>
          </article>

          {/* 8. RELATED JOURNAL ARTICLES (Span 6) */}
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
                        background: 'rgba(0,0,0,0.03)',
                        border: '1px solid rgba(0,0,0,0.08)',
                        textDecoration: 'none',
                        color: '#111111',
                      }}
                    >
                      <div>
                        <strong style={{ fontSize: 13.5, display: 'block', color: '#111111' }}>{post.title}</strong>
                        <span style={{ fontSize: 12, color: '#666666' }}>
                          {post.minutes} {t.blogMin} · {post.excerpt.slice(0, 60)}…
                        </span>
                      </div>
                      <span style={{ fontSize: 14, color: '#111111', marginLeft: 12, flexShrink: 0 }}>→</span>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="bento-desc" style={{ marginTop: 12 }}>{isEn ? 'More insights in the journal.' : 'Weitere Artikel im Journal.'}</p>
              )}
            </div>
          </article>

          {/* 9. MASTER BOTTOM CTA BENTO (Span 12) */}
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
