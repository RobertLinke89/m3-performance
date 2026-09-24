import { Link, Navigate, useParams } from 'react-router-dom'
import { Img } from '../components/Img'
import { useUi } from '../copy'
import { useContent } from '../useContent'

export function PillarPage() {
  const { slug } = useParams()
  const t = useUi()
  const { modules, pillars, posts, wa } = useContent()
  const pillar = pillars.find((p) => p.slug === slug)
  if (!pillar) return <Navigate to="/" replace />
  const related = modules.filter((m) => m.pillar === pillar.id)
  const relatedPosts = posts.filter((p) => p.pillar === pillar.id)

  return (
    <main>
      <section className="page-hero">
        <div className="wrap page-split">
          <div>
            <p className="eyebrow" style={{ color: pillar.color }}>
              {pillar.mark} · {pillar.name} · {pillar.label}
            </p>
            <h1>{pillar.title}</h1>
            <p className="quote">„{pillar.quote}“</p>
            <p className="lead">{pillar.body}</p>
            <div className="cta-row">
              <a className="btn btn-gold" href={wa.talk}>
                {t.writeMe}
              </a>
              <Link className="btn btn-ghost" to="/system-start">
                {t.systemStart}
              </Link>
            </div>
          </div>
          <Img className="page-photo" src={pillar.image} alt={pillar.title} priority max />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="eyebrow">{t.scienceEyebrow}</p>
          <h2>{t.scienceH}</h2>
          <div className="proof-list">
            {pillar.science.map((item, i) => (
              <article className={`proof-row${i % 2 ? ' flip' : ''}`} key={item.title}>
                <Img className="proof-photo" src={item.image} alt="" max />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap page-split">
          <Img className="page-photo" src={pillar.experience.image} alt="" max />
          <div>
            <p className="eyebrow">{t.experienceEyebrow}</p>
            <h2>{pillar.experience.title}</h2>
            <p className="prose">{pillar.experience.text}</p>
            <p className="quote">„{pillar.experience.quote}“</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid-2">
          <div>
            <p className="eyebrow">{t.signalsEyebrow}</p>
            <h2>{t.signalsH}</h2>
            <ul className="detail-list">
              {pillar.signals.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">{t.principlesEyebrow}</p>
            <h2>{t.principlesH}</h2>
            <div className="fact-stack">
              {pillar.principles.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="section">
          <div className="wrap">
            <div className="blog-group-head">
              <div>
                <p className="eyebrow">{t.blogEyebrow}</p>
                <h2>{t.blogMore}</h2>
              </div>
              <Link className="btn btn-ghost" to="/blog">
                {t.blogAll}
              </Link>
            </div>
            <div className="grid-3" style={{ marginTop: 28 }}>
              {relatedPosts.map((post) => (
                <article className="card" key={post.slug}>
                  <Img className="card-media" src={post.image} alt="" />
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <Link to={`/blog/${post.slug}`}>{t.blogRead}</Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {related.length > 0 ? (
        <section className="section">
          <div className="wrap">
            <h2>{t.related}</h2>
            <div className="grid-3" style={{ marginTop: 28 }}>
              {related.map((m) => (
                <article className="card" key={m.slug}>
                  <Img className="card-media" src={m.image} alt="" />
                  <h3>{m.title}</h3>
                  <p>{m.kicker}</p>
                  <Link to={`/${m.slug}`}>{t.detailsArrow}</Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="section">
          <div className="wrap">
            <p className="lead" style={{ maxWidth: '52ch' }}>
              {t.noModules}
            </p>
            <Link className="btn btn-ghost" to="/system-start" style={{ marginTop: 18 }}>
              {t.systemStart}
            </Link>
          </div>
        </section>
      )}

      <section className="section">
        <div className="wrap card card-highlight card-cta">
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
