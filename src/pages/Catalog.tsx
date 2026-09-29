import { Link } from 'react-router-dom'
import { OfferCard } from '../components/OfferCard'
import { useUi } from '../copy'
import { byTier } from '../tierSort'
import { useContent } from '../useContent'

export function Catalog() {
  const t = useUi()
  const { contact, modules, pillars } = useContent()

  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">{t.catalogEyebrow}</p>
          <h1>{t.catalogH}</h1>
          <p className="lead">{t.catalogLead}</p>
          <div className="cta-row">
            <Link className="btn btn-gold" to="/kontakt">
              {t.firstTalk}
            </Link>
            <a className="btn btn-ghost" href={contact.catalog}>
              {t.catalogWa}
            </a>
          </div>
        </div>
      </section>

      {pillars.map((pillar) => {
        const group = modules.filter((m) => m.pillar === pillar.id).slice().sort(byTier)
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
                  {t.openPillarBtn}
                </Link>
              </div>
              {group.length > 0 ? (
                <div className="grid-3" style={{ marginTop: 28 }}>
                  {group.map((m) => (
                    <OfferCard key={m.slug} offer={m} />
                  ))}
                </div>
              ) : (
                <p className="lead" style={{ marginTop: 20, maxWidth: '52ch' }}>
                  {t.noModules}
                </p>
              )}
            </div>
          </section>
        )
      })}
    </main>
  )
}
