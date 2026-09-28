import { Img } from '../components/Img'
import { BackLink } from '../components/BackLink'
import { useUi } from '../copy'
import { useContent } from '../useContent'

export function About() {
  const t = useUi()
  const { about, wa } = useContent()

  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <BackLink fallback="/" />
        </div>
        <div className="wrap grid-2">
          <div>
            <p className="eyebrow">Michél Meier</p>
            <h1>{about.headline}</h1>
            <p className="lead">{about.intro}</p>
            <p className="quote">„{about.quote}“</p>
            <p className="prose">{about.bio}</p>
            <a className="btn btn-gold" href={wa.talk} style={{ marginTop: 20 }}>
              {t.firstTalk}
            </a>
          </div>
          <Img className="portrait-cutout" src="/images/michel-portrait.png" alt={t.aboutPortrait} priority max />
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <h2>{t.aboutYears}</h2>
          <div className="grid-2" style={{ marginTop: 28 }}>
            {about.stations.map((s) => (
              <article className="card" key={s.years}>
                <div className="mark">{s.years}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <h2>{t.aboutValues}</h2>
          <div className="grid-2" style={{ marginTop: 28 }}>
            {about.values.map((v) => (
              <article className="card" key={v.title}>
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
