import { Link, Navigate, useParams } from 'react-router-dom'
import { BackLink } from '../components/BackLink'
import { Img } from '../components/Img'
import { useUi } from '../copy'
import { byTier } from '../tierSort'
import { useContent } from '../useContent'

export function ModulePage() {
  const { slug } = useParams()
  const t = useUi()
  const { contact, modules, pillars, process, wa } = useContent()
  const mod = modules.find((m) => m.slug === slug)
  if (!mod) return <Navigate to="/" replace />
  const pillar = pillars.find((p) => p.id === mod.pillar)
  const related = modules
    .filter((m) => m.pillar === mod.pillar && m.slug !== mod.slug)
    .slice()
    .sort(byTier)
    .slice(0, 3)
  const fallback = pillar ? `/${pillar.slug}` : '/#module'

  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <BackLink fallback={fallback} />
        </div>
        <div className="wrap page-split">
          <div>
            <p className="eyebrow">
              {pillar?.mark} · {mod.badge}
              {'priceLabel' in mod && mod.priceLabel ? ` · ${mod.priceLabel}` : ''}
            </p>
            <h1>{mod.title}</h1>
            <p className="lead">{mod.kicker}</p>
            <p className="prose">{mod.text}</p>
            <div className="cta-row">
              <a className="btn btn-gold" href={mod.wa} target="_blank" rel="noreferrer">
                {t.writeMe}
              </a>
              <a className="btn btn-ghost" href={wa.talk} target="_blank" rel="noreferrer">
                {t.firstTalk}
              </a>
            </div>
            <div className="cal-booking-hint">
              <span>{t.calText}</span>{' '}
              <a
                href={contact.cal}
                target="_blank"
                rel="noreferrer"
                className="cal-link"
                data-cal-link="michelmeier/30min"
              >
                {t.calLinkText}
              </a>
            </div>
          </div>
          <Img className="page-photo" src={mod.image} alt={mod.title} priority max />
        </div>
      </section>

      <section className="section">
        <div className="wrap grid-2">
          <div>
            <p className="eyebrow">{t.forWhom}</p>
            <h2>{t.forWhomH}</h2>
            <ul className="detail-list">
              {mod.forWhom.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">{t.includes}</p>
            <h2>{t.includesH}</h2>
            <ul className="detail-list">
              {mod.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="eyebrow">{t.processEyebrow}</p>
          <h2>{t.processH}</h2>
          <ol className="timeline">
            {process.map((s) => (
              <li key={s.n}>
                <span className="timeline-node">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="wrap card card-highlight card-cta">
          <h2>{mod.outcome}</h2>
          <div className="cta-row" style={{ justifyContent: 'center' }}>
            <a className="btn btn-gold" href={mod.wa} target="_blank" rel="noreferrer">
              {t.writeMe}
            </a>
            <Link className="btn btn-ghost" to="/system-start">
              {t.preferStart}
            </Link>
          </div>
          <div className="cal-booking-hint" style={{ justifyContent: 'center', marginTop: 16 }}>
            <span>{t.calText}</span>{' '}
            <a
              href={contact.cal}
              target="_blank"
              rel="noreferrer"
              className="cal-link"
              data-cal-link="michelmeier/30min"
            >
              {t.calLinkText}
            </a>
          </div>
        </div>
      </section>

      {pillar && (
        <section className="section">
          <div className="wrap">
            <p className="eyebrow">{t.context}</p>
            <h2>
              {t.partOf} {pillar.mark} {pillar.name}
            </h2>
            <p className="lead">{pillar.lead}</p>
            <Link className="btn btn-ghost" to={`/${pillar.slug}`} style={{ marginTop: 18 }}>
              {t.openPillarBtn}
            </Link>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="section">
          <div className="wrap">
            <p className="eyebrow">{t.more}</p>
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
      )}
    </main>
  )
}
