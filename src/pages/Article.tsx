import { Link, Navigate, useParams } from 'react-router-dom'
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

export function Article() {
  const { slug } = useParams()
  const t = useUi()
  const { lang } = useLocale()
  const isEn = lang === 'en'
  const { contact, pillars, posts, wa } = useContent()
  const post = posts.find((p) => p.slug === slug)
  if (!post) return <Navigate to="/blog" replace />
  const pillar = pillars.find((p) => p.id === post.pillar)
  const related = posts.filter((p) => p.pillar === post.pillar && p.slug !== post.slug)

  return (
    <main className="bento-page">
      <div className="wrap">
        <div style={{ marginBottom: 14 }}>
          <BackLink fallback="/blog" />
        </div>

        {/* Master Bento Grid */}
        <section className="bento-grid" aria-label={`${post.title} Bento Grid`}>

          {/* 1. HERO BENTO CARD (Span 8) */}
          <article className="bento-card bento-card--hero bento-span-8">
            <picture className="bento-bg">
              <source
                type="image/webp"
                srcSet={`${post.image} 1x, ${post.image.replace('.webp', '@2x.webp')} 2x`}
              />
              <img
                src={post.image.replace('.webp', '.jpg')}
                alt={post.title}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="bento-bg-img"
              />
            </picture>
            <div className="bento-overlay" />
            <div className="bento-content bento-content--hero">
              <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#ffffff', opacity: 0.85 }}>
                {pillar ? `${pillar.mark} · ${pillar.name}` : t.blog} · {formatDate(post.date, lang)}
              </span>
              <h1 className="bento-hero-h1" style={{ marginTop: 6 }}>
                {post.title}
              </h1>
              <p className="bento-lead" style={{ marginTop: 8 }}>
                {post.excerpt}
              </p>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.7)', marginTop: 8 }}>
                {post.minutes} {t.blogMin} {isEn ? 'read' : 'Lesezeit'}
              </div>
            </div>
          </article>

          {/* 2. PILLAR CONTEXT CARD (Span 4) */}
          {pillar ? (
            <article className="bento-card bento-card--audit-step bento-span-4" style={{ justifyContent: 'space-between', minHeight: 'clamp(440px, 50vh, 540px)' }}>
              <div>
                <span className="bento-audit-badge">{isEn ? 'SYSTEM PILLAR' : 'SÄULEN-KONTEXT'}</span>
                <h2 className="bento-title" style={{ fontSize: 21 }}>
                  {pillar.mark} · {pillar.name}
                </h2>
                <p className="bento-desc" style={{ marginTop: 8, fontSize: 13, lineHeight: 1.5 }}>
                  {pillar.lead}
                </p>
                <div style={{ marginTop: 14, fontStyle: 'italic', fontSize: 13, color: '#ffffff' }}>
                  „{pillar.quote}“
                </div>
              </div>

              <div style={{ marginTop: 16 }}>
                <Link to={`/${pillar.slug}`} className="btn-white-ghost" style={{ display: 'inline-block' }}>
                  {t.openPillarBtn} →
                </Link>
              </div>
            </article>
          ) : (
            <article className="bento-card bento-card--audit-step bento-span-4" style={{ justifyContent: 'space-between' }}>
              <div>
                <span className="bento-audit-badge">M³ JOURNAL</span>
                <h2 className="bento-title" style={{ fontSize: 21 }}>{t.blog}</h2>
                <p className="bento-desc">{t.blogLead}</p>
              </div>
            </article>
          )}

          {/* 3. ARTICLE CONTENT BENTO (Span 12) */}
          <article className="bento-card bento-card--journal bento-span-12" style={{ padding: 'clamp(24px, 4vw, 48px)' }}>
            <div style={{ maxWidth: '68ch', margin: '0 auto', width: '100%' }}>
              {post.sections.map((block) => {
                const heading = 'h' in block ? block.h : undefined
                return (
                  <div key={heading ?? block.p.slice(0, 24)} style={{ marginBottom: 32 }}>
                    {heading && (
                      <h2 style={{ fontSize: 'clamp(20px, 2.2vw, 26px)', fontWeight: 700, color: '#ffffff', margin: '0 0 12px' }}>
                        {heading}
                      </h2>
                    )}
                    <p style={{ margin: 0, fontSize: 15.5, color: 'rgba(255,255,255,0.8)', lineHeight: 1.65, fontWeight: 500 }}>
                      {block.p}
                    </p>
                  </div>
                )
              })}

              <div style={{ display: 'flex', gap: 12, marginTop: 40, borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 24, flexWrap: 'wrap' }}>
                {pillar && (
                  <Link className="btn-white" to={`/${pillar.slug}`}>
                    {pillar.mark} · {pillar.name} vertiefen
                  </Link>
                )}
                <Link className="btn-white-ghost" to="/blog">
                  {t.blogAll}
                </Link>
              </div>
            </div>
          </article>

          {/* 4. RELATED POSTS (Span 12) */}
          {related.length > 0 && (
            <article className="bento-card bento-card--journal bento-span-12" style={{ padding: 'clamp(22px, 3vw, 36px)' }}>
              <div className="bento-card-header" style={{ marginBottom: 20 }}>
                <div>
                  <h2 className="bento-title" style={{ fontSize: 'clamp(20px, 2.4cqi, 28px)' }}>
                    {t.blogRelated}
                  </h2>
                  <p className="bento-desc" style={{ maxWidth: '64ch' }}>
                    {isEn
                      ? 'More relevant insights and protocols from this pillar.'
                      : 'Weitere vertiefende Artikel und Protokolle aus dieser Säule.'}
                  </p>
                </div>
              </div>

              <div className="bento-audience-grid">
                {related.map((item) => (
                  <Link to={`/blog/${item.slug}`} className="bento-sub-card" key={item.slug} style={{ textDecoration: 'none' }}>
                    <Img className="bento-sub-media" src={item.image} alt={item.title} />
                    <div className="bento-sub-body">
                      <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', fontWeight: 650 }}>
                        {formatDate(item.date, lang)} · {item.minutes} {t.blogMin}
                      </span>
                      <h3 style={{ marginTop: 2 }}>{item.title}</h3>
                      <p>{item.excerpt}</p>
                      <span style={{ fontSize: 12, fontWeight: 700, color: '#ffffff', marginTop: 4 }}>
                        {t.blogRead} →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </article>
          )}

          {/* 5. MASTER BOTTOM CTA BENTO (Span 12) */}
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
