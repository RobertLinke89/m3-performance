import { useRef, useState, type CSSProperties, type RefObject } from 'react'
import { Link } from 'react-router-dom'
import { Img } from '../components/Img'
import { MichelShow } from '../components/MichelShow'
import { OfferCard } from '../components/OfferCard'
import { SystemMolecule } from '../components/SystemMolecule'
import { useUi } from '../copy'
import { useContent } from '../useContent'

export function Home() {
  const t = useUi()
  const { audience, faqs, modules, pillars, posts, wa } = useContent()
  const featured = pillars
    .map((p) => posts.filter((post) => post.pillar === p.id).at(-1))
    .filter((post): post is (typeof posts)[number] => Boolean(post))
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const m1 = modules.filter((m) => m.pillar === 'm1')
  const m2 = modules.filter((m) => m.pillar === 'm2')
  const m3Pillar = pillars.find((p) => p.id === 'm3')
  const m1Track = useRef<HTMLDivElement>(null)
  const m2Track = useRef<HTMLDivElement>(null)

  const scrollTrack = (trackRef: RefObject<HTMLDivElement | null>, dir: -1 | 1) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('article')
    const step = card ? card.getBoundingClientRect().width + 16 : 340
    track.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  return (
    <main>
      <section className="hero">
        <div className="hero-board">
          <article className="board-tile board-merged">
            <picture className="board-merged-hero">
              <source
                media="(max-width: 860px)"
                type="image/webp"
                srcSet="/images/hero-system-mobile.webp?v=25"
              />
              <source
                media="(max-width: 860px)"
                srcSet="/images/hero-system-mobile-1x.jpg?v=25 1x, /images/hero-system-mobile.jpg?v=25 2x"
              />
              <source type="image/webp" srcSet="/images/hero-system.webp?v=25" />
              <source srcSet="/images/hero-system-1x.jpg?v=25 1x, /images/hero-system.jpg?v=25 2x" />
              <img
                className="board-merged-hero"
                src="/images/hero-system.jpg?v=25"
                alt={t.problemAlt}
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </picture>
            <div className="board-merged-copy">
              <div className="board-copy-box">
                <h1>
                  {t.h1a} <span>{t.h1b}</span> <em className="gold">{t.h1c}</em>
                </h1>
                <p className="board-pitch">{t.heroPitch}</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section" id="start">
        <div className="wrap framework-split">
          <div className="framework-copy">
            <p className="eyebrow">{t.frameworkEyebrow}</p>
            <h2>{t.frameworkH}</h2>
            <p className="lead">{t.frameworkLead}</p>
            <div className="framework">
              {pillars.map((p) => (
                <Link
                  key={p.id}
                  className="framework-item"
                  to={`/${p.slug}`}
                  style={{ '--orb': p.color } as CSSProperties}
                >
                  <span className="mark" style={{ color: p.color }}>
                    {p.mark}
                  </span>
                  <span>
                    <span className="framework-label">
                      {p.name} · {p.label}
                    </span>
                    <h3>{p.title}</h3>
                    <p>{p.lead}</p>
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div className="framework-visual">
            <SystemMolecule />
          </div>
        </div>
      </section>

      <section className="section" id="module">
        <div className="wrap">
          <p className="eyebrow">{t.modulesEyebrow}</p>
          <h2>{t.modulesH}</h2>
          <p className="lead">{t.modulesLead}</p>

          <div className="module-group">
            <div className="carousel-head module-group-head">
              <p className="eyebrow" style={{ color: '#e8a14a' }}>
                M¹ · Metabolism
              </p>
              <div className="carousel-nav">
                <button type="button" aria-label={t.prevOffer} onClick={() => scrollTrack(m1Track, -1)}>
                  ←
                </button>
                <button type="button" aria-label={t.nextOffer} onClick={() => scrollTrack(m1Track, 1)}>
                  →
                </button>
              </div>
            </div>
            <div className="carousel-track module-track" ref={m1Track}>
              {m1.map((m) => (
                <OfferCard key={m.slug} offer={m} />
              ))}
            </div>
          </div>

          <div className="module-group">
            <div className="carousel-head module-group-head">
              <p className="eyebrow" style={{ color: '#3dba8a' }}>
                M² · Movement
              </p>
              <div className="carousel-nav">
                <button type="button" aria-label={t.prevOffer} onClick={() => scrollTrack(m2Track, -1)}>
                  ←
                </button>
                <button type="button" aria-label={t.nextOffer} onClick={() => scrollTrack(m2Track, 1)}>
                  →
                </button>
              </div>
            </div>
            <div className="carousel-track module-track" ref={m2Track}>
              {m2.map((m) => (
                <OfferCard key={m.slug} offer={m} />
              ))}
            </div>
          </div>

          {m3Pillar && (
            <div className="module-group">
              <article className="card module-m3-card">
                <p className="eyebrow">M³ · Mental Performance</p>
                <h3>{m3Pillar.title}</h3>
                <p>{t.modulesM3Note}</p>
                <Link className="btn btn-ghost" to={`/${m3Pillar.slug}`} style={{ marginTop: 16 }}>
                  {t.modulesM3Cta}
                </Link>
              </article>
            </div>
          )}
        </div>
      </section>

      <section className="section">
        <div className="wrap michel-split">
          <div className="michel-visual">
            <MichelShow />
          </div>
          <div className="michel-copy">
            <p className="eyebrow">{t.michelEyebrow}</p>
            <h2>{t.michelH}</h2>
            <div className="michel-block">
              <p>{t.michelLead}</p>
              <p>{t.michelLead2}</p>
              <p>„{t.michelQuote}“</p>
              <p className="michel-meta">{t.michelMeta}</p>
            </div>
            <Link className="btn btn-ghost" to="/ueber-mich" style={{ marginTop: 18 }}>
              {t.moreAbout}
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="audience">
        <div className="wrap">
          <p className="eyebrow">{t.audienceEyebrow}</p>
          <h2>{t.audienceH}</h2>
          <p className="lead">{t.audienceLead}</p>
          <div className="grid-2" style={{ marginTop: 28 }}>
            {audience.map((a) => (
              <article className="card" key={a.title}>
                <Img className="card-media card-media-face" src={a.image} alt="" />
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="journal">
        <div className="wrap">
          <div className="blog-group-head">
            <div>
              <p className="eyebrow">{t.blogEyebrow}</p>
              <h2>{t.blogH}</h2>
              <p className="lead">{t.blogLead}</p>
            </div>
            <Link className="btn btn-ghost" to="/blog">
              {t.blogAll}
            </Link>
          </div>
          <div className="grid-3" style={{ marginTop: 28 }}>
            {featured.map((post) => {
              const pillar = pillars.find((p) => p.id === post.pillar)
              return (
                <article className="card" key={post.slug}>
                  <Img className="card-media" src={post.image} alt="" />
                  {pillar && (
                    <div className="mark" style={{ color: pillar.color }}>
                      {pillar.mark} · {pillar.name}
                    </div>
                  )}
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <Link to={`/blog/${post.slug}`}>{t.blogRead}</Link>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="wrap faq-wrap">
          <p className="eyebrow">{t.faqEyebrow}</p>
          <h2>{t.faqH}</h2>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <button
                key={f.q}
                className={`faq-item${openFaq === i ? ' open' : ''}`}
                type="button"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <strong>{f.q}</strong>
                {openFaq === i && <p>{f.a}</p>}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap card card-highlight card-cta">
          <h2>
            {t.ctaBefore}
            <em className="gold">{t.ctaGold}</em>
            {t.ctaAfter}
          </h2>
          <p className="lead" style={{ margin: '16px auto 0' }}>
            {t.ctaLead}
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
