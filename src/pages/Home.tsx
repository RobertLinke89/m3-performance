import { useRef, useState, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { BoardFade } from '../components/BoardFade'
import { Img } from '../components/Img'
import { MichelShow } from '../components/MichelShow'
import { useUi } from '../copy'
import { useContent } from '../useContent'

export function Home() {
  const t = useUi()
  const { faqs, modules, pillars, posts, problemSlides, wa } = useContent()
  const featured = pillars
    .map((p) => posts.filter((post) => post.pillar === p.id).at(-1))
    .filter((post): post is (typeof posts)[number] => Boolean(post))
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const moduleTrack = useRef<HTMLDivElement>(null)

  const scrollModules = (dir: -1 | 1) => {
    const track = moduleTrack.current
    if (!track) return
    const card = track.querySelector('article')
    const step = card ? card.getBoundingClientRect().width + 16 : 340
    track.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  return (
    <main>
      <section className="hero">
        <div className="hero-board">
          <div className="board-tile board-thesis">
            <Img src="/images/hero-food.jpg" alt="" priority />
            <div className="board-thesis-copy">
              <div className="board-copy-box">
                <h1>
                  {t.h1a}
                  <span>{t.h1b}</span>
                  <em className="gold">{t.h1c}</em>
                </h1>
              </div>
            </div>
          </div>

          <article className="board-tile board-problem">
            <BoardFade images={problemSlides} alt={t.problemAlt} />
            <div className="board-problem-copy">
              <h2>{t.problemH}</h2>
              <p>{t.problemP}</p>
            </div>
          </article>
        </div>
      </section>

      <section className="section" id="start">
        <div className="wrap grid-2">
          <div>
            <Img className="card-media card-media-lg" src="/images/system-start.jpg" alt={t.startEyebrow} />
            <p className="eyebrow">{t.startEyebrow}</p>
            <h2>{t.startH}</h2>
            <p className="lead">{t.startLead}</p>
            <Link className="btn btn-ghost" to="/system-start" style={{ marginTop: 18 }}>
              {t.moreLearn}
            </Link>
          </div>
          <div>
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
        </div>
      </section>

      <section className="section" id="module">
        <div className="wrap">
          <div className="carousel-head">
            <div>
              <p className="eyebrow">{t.modulesEyebrow}</p>
              <h2>{t.modulesH}</h2>
              <p className="lead">{t.modulesLead}</p>
            </div>
            <div className="carousel-nav">
              <button type="button" aria-label={t.prevOffer} onClick={() => scrollModules(-1)}>
                ←
              </button>
              <button type="button" aria-label={t.nextOffer} onClick={() => scrollModules(1)}>
                →
              </button>
            </div>
          </div>
          <div className="carousel-track" ref={moduleTrack}>
            {modules.map((m) => (
              <article className="card" key={m.slug}>
                <Img className="card-media" src={m.image} alt="" />
                <div className="mark">{m.badge}</div>
                <h3>{m.title}</h3>
                <p>{m.kicker}</p>
                <p style={{ color: 'var(--muted)' }}>{m.text}</p>
                <div className="cta-row">
                  <Link className="btn btn-ghost" to={`/${m.slug}`}>
                    {t.details}
                  </Link>
                  <a className="btn btn-gold" href={m.wa}>
                    {t.whatsapp}
                  </a>
                </div>
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

      <section className="section">
        <div className="wrap grid-2">
          <MichelShow />
          <div>
            <p className="eyebrow">{t.michelEyebrow}</p>
            <h2>{t.michelH}</h2>
            <p className="lead">{t.michelLead}</p>
            <p className="lead">{t.michelLead2}</p>
            <p className="quote">„{t.michelQuote}“</p>
            <p className="michel-meta">{t.michelMeta}</p>
            <Link className="btn btn-ghost" to="/ueber-mich" style={{ marginTop: 18 }}>
              {t.moreAbout}
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="wrap">
          <p className="eyebrow">{t.faqEyebrow}</p>
          <h2>{t.faqH}</h2>
          <div style={{ marginTop: 20 }}>
            {faqs.map((f, i) => (
              <button
                key={f.q}
                className="faq-item"
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
        <div className="wrap card card-highlight" style={{ textAlign: 'center', padding: 48 }}>
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
