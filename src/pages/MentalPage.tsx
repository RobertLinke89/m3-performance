import { Link } from 'react-router-dom'
import { BackLink } from '../components/BackLink'
import { Img } from '../components/Img'
import { useUi } from '../copy'
import { useContent } from '../useContent'

export function MentalPage() {
  const t = useUi()
  const { pillars, posts, wa } = useContent()
  const pillar = pillars.find((p) => p.id === 'm3')!
  const relatedPosts = posts.filter((p) => p.pillar === 'm3')
  const prompts = 'prompts' in pillar ? pillar.prompts : []

  return (
    <main className="mental-page">
      <section className="mental-hero">
        <Img className="mental-hero-media" src={pillar.image} alt="" priority />
        <div className="mental-hero-shade" aria-hidden />
        <div className="wrap mental-hero-top">
          <BackLink fallback="/#start" home={false} />
        </div>
        <div className="wrap mental-hero-copy">
          <p className="eyebrow" style={{ color: pillar.color }}>
            {pillar.mark} · {pillar.name}
          </p>
          <h1>{pillar.title}</h1>
          <p className="mental-tick">{pillar.label}</p>
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
      </section>

      <section className="section mental-drill">
        <div className="wrap">
          <p className="eyebrow">{t.mentalDrillEyebrow}</p>
          <h2>{t.mentalDrillH}</h2>
          <p className="lead">{t.mentalDrillLead}</p>
          <div className="mental-prompts">
            {prompts.map((item, i) => (
              <article className="mental-prompt" key={item.q}>
                <span className="mental-n" aria-hidden>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3>{item.q}</h3>
                <p>{item.hint}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="eyebrow">{t.mentalScienceEyebrow}</p>
          <h2>{t.mentalScienceH}</h2>
          <div className="mental-proof">
            {pillar.science.map((item, i) => (
              <article className={`mental-proof-row${i % 2 ? ' flip' : ''}`} key={item.title}>
                <div className="mental-proof-copy">
                  <span className="mental-n" aria-hidden>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <Img className="mental-proof-photo" src={item.image} alt="" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap page-split mental-experience">
          <Img className="page-photo" src={pillar.experience.image} alt="" />
          <div className="mental-experience-copy">
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
            <h2>{t.mentalSignalsH}</h2>
            <ul className="mental-signals">
              {pillar.signals.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">{t.principlesEyebrow}</p>
            <h2>{t.mentalPrinciplesH}</h2>
            <div className="fact-stack mental-rules">
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
