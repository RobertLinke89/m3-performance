import { Link, Navigate, useParams } from 'react-router-dom'
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
  const { pillars, posts, wa } = useContent()
  const post = posts.find((p) => p.slug === slug)
  if (!post) return <Navigate to="/blog" replace />
  const pillar = pillars.find((p) => p.id === post.pillar)
  const related = posts.filter((p) => p.pillar === post.pillar && p.slug !== post.slug)

  return (
    <main>
      <section className="page-hero">
        <div className="wrap article-hero">
          <p className="eyebrow" style={pillar ? { color: pillar.color } : undefined}>
            {pillar ? `${pillar.mark} · ${pillar.name}` : t.blog}
          </p>
          <h1>{post.title}</h1>
          <p className="blog-meta">
            {formatDate(post.date, lang)} · {post.minutes} {t.blogMin}
          </p>
          <p className="lead">{post.excerpt}</p>
          <Img className="article-photo" src={post.image} alt="" priority />
        </div>
      </section>

      <section className="section">
        <div className="wrap article-body">
          {post.sections.map((block) => {
            const heading = 'h' in block ? block.h : undefined
            return (
              <article key={heading ?? block.p.slice(0, 24)}>
                {heading && <h2>{heading}</h2>}
                <p>{block.p}</p>
              </article>
            )
          })}
          {pillar && (
            <div className="cta-row">
              <Link className="btn btn-gold" to={`/${pillar.slug}`}>
                {pillar.mark} · {pillar.name}
              </Link>
              <Link className="btn btn-ghost" to="/blog">
                {t.blogAll}
              </Link>
            </div>
          )}
        </div>
      </section>

      {related.length > 0 && (
        <section className="section">
          <div className="wrap">
            <h2>{t.blogRelated}</h2>
            <div className="grid-3" style={{ marginTop: 28 }}>
              {related.map((item) => (
                <article className="card" key={item.slug}>
                  <Img className="card-media" src={item.image} alt="" />
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                  <Link to={`/blog/${item.slug}`}>{t.blogRead}</Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="wrap card card-highlight" style={{ textAlign: 'center', padding: 48 }}>
          <h2>
            {t.ctaBefore}
            <em className="gold">{t.ctaGold}</em>
            {t.ctaAfter}
          </h2>
          <p className="lead" style={{ margin: '16px auto 0' }}>
            {t.pillarCtaLead}
          </p>
          <div className="cta-row" style={{ justifyContent: 'center' }}>
            <a className="btn btn-gold" href={wa.talk}>
              {t.ctaTalk}
            </a>
            <Link className="btn btn-ghost" to="/system-start">
              {t.ctaMoreStart}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
