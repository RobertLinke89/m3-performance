import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BackLink } from '../components/BackLink'
import { Img } from '../components/Img'
import { useUi } from '../copy'
import { useContent } from '../useContent'

export function SystemStart() {
  const t = useUi()
  const { compass, modules, pillars, startProof, wa } = useContent()
  const [pick, setPick] = useState<string | null>(null)
  const picked = pillars.find((p) => p.id === pick)
  const next = picked ? modules.filter((m) => m.pillar === picked.id).slice(0, 3) : []

  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <BackLink fallback="/#start" />
        </div>
        <div className="wrap page-split">
          <div>
            <p className="eyebrow">{t.ssEyebrow}</p>
            <h1>{t.ssH}</h1>
            <p className="lead">{t.ssLead}</p>
          </div>
          <Img className="page-photo" src="/images/system-start.jpg" alt={t.ssH} priority max />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="eyebrow">{t.ssProofEyebrow}</p>
          <h2>{t.ssWhy}</h2>
          <div className="proof-list">
            {startProof.map((item, i) => (
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
        <div className="wrap">
          <div className="grid-3">
            {pillars.map((p) => (
              <Link className="card" key={p.id} to={`/${p.slug}`}>
                <Img className="card-media" src={p.image} alt="" />
                <p className="mark" style={{ color: p.color }}>
                  {p.mark} · {p.name}
                </p>
                <h3>{p.title}</h3>
                <p>{p.lead}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid-2">
          <div>
            <h2>{t.ssCompass}</h2>
            <p className="lead">{t.ssP1}</p>
            <p>{t.ssP2}</p>
          </div>
          <div>
            <div style={{ display: 'grid', gap: 10 }}>
              {compass.map((c) => (
                <button
                  key={c.id}
                  className={`compass-opt${pick === c.id ? ' on' : ''}`}
                  type="button"
                  onClick={() => setPick(c.id)}
                >
                  <Img src={c.image} alt="" />
                  <span>
                    <strong>{c.title}</strong>
                    <div style={{ color: 'var(--muted)', marginTop: 6 }}>{c.text}</div>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {picked && (
        <section className="section">
          <div className="wrap">
            <h2>
              {t.ssYourStart} {picked.mark} {picked.name}
            </h2>
            <p className="lead">{picked.body}</p>
            <Link className="btn btn-ghost" to={`/${picked.slug}`} style={{ marginTop: 18 }}>
              {t.openPillarBtn}
            </Link>
            {next.length > 0 && (
              <div className="grid-3" style={{ marginTop: 28 }}>
                {next.map((m) => (
                  <article className="card" key={m.slug}>
                    <Img className="card-media" src={m.image} alt="" />
                    <h3>{m.title}</h3>
                    <p>{m.text}</p>
                    <Link to={`/${m.slug}`}>{t.detailsArrow}</Link>
                  </article>
                ))}
              </div>
            )}
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
            <a className="btn btn-gold" href={wa.start}>
              {t.checkStart}
            </a>
            <Link className="btn btn-ghost" to="/kontakt">
              {t.firstTalk}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
