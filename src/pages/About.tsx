import { Img } from '../components/Img'
import { BackLink } from '../components/BackLink'
import { ValueIcon } from '../components/ValueIcon'
import { useUi } from '../copy'
import { useContent } from '../useContent'

export function About() {
  const t = useUi()
  const { about, wa } = useContent()

  return (
    <main className="about-page">
      <section className="page-hero about-hero">
        <div className="wrap">
          <BackLink fallback="/" home={false} />
        </div>
        <div className="wrap about-split">
          <div className="about-copy">
            <p className="eyebrow">Michél Meier</p>
            <h1>{about.headline}</h1>
            <p className="lead">{about.intro}</p>
            <p className="quote">„{about.quote}“</p>
            <p className="prose">{about.bio}</p>
            <a className="btn btn-gold" href={wa.talk} style={{ marginTop: 8 }}>
              {t.firstTalk}
            </a>
          </div>
          <Img
            className="about-portrait"
            src="/images/michel-portrait.jpg"
            alt={t.aboutPortrait}
            priority
          />
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <h2>{t.aboutYears}</h2>
          <ol className="life-timeline">
            {about.stations.map((s, i) => (
              <li className={`life-timeline-item${i % 2 ? ' flip' : ''}`} key={s.years}>
                <div className="life-timeline-marker" aria-hidden>
                  <span className="life-timeline-dot" />
                </div>
                <article className="life-timeline-card">
                  <p className="life-timeline-years">{s.years}</p>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <h2>{t.aboutValues}</h2>
          <div className="value-grid">
            {about.values.map((v) => (
              <article className="value-card" key={v.title}>
                <ValueIcon name={v.icon} />
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
