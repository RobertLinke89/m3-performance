import { Link } from 'react-router-dom'
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
  const { pillars, posts } = useContent()

  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">{t.blogEyebrow}</p>
          <h1>{t.blogH}</h1>
          <p className="lead">{t.blogLead}</p>
        </div>
      </section>
      {pillars.map((pillar) => {
        const group = posts.filter((p) => p.pillar === pillar.id)
        return (
          <section className="section" key={pillar.id}>
            <div className="wrap">
              <div className="blog-group-head">
                <div>
                  <p className="eyebrow" style={{ color: pillar.color }}>
                    {pillar.mark} · {pillar.name}
                  </p>
                  <h2>{pillar.title}</h2>
                </div>
                <Link className="btn btn-ghost" to={`/${pillar.slug}`}>
                  {t.blogPillar}
                </Link>
              </div>
              <div className="grid-3" style={{ marginTop: 28 }}>
                {group.map((post) => (
                  <article className="card" key={post.slug}>
                    <img className="card-media" src={post.image} alt="" />
                    <p className="blog-meta">
                      {formatDate(post.date, lang)} · {post.minutes} {t.blogMin}
                    </p>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <Link to={`/blog/${post.slug}`}>{t.blogRead}</Link>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )
      })}
    </main>
  )
}
