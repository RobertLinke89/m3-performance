import { useUi } from '../copy'
import { useContent } from '../useContent'

const phoneDisplay = '+49 176 99016640'

export function Contact() {
  const t = useUi()
  const { contact, wa } = useContent()

  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">{t.contactEyebrow}</p>
          <h1>{t.contactH}</h1>
          <p className="lead">{t.contactLead}</p>
          <div className="cta-row">
            <a className="btn btn-gold" href={wa.talk}>
              {t.contactWa}
            </a>
            <a className="btn btn-ghost" href={`tel:+${contact.phone}`}>
              {phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid-2">
          <div>
            <h2>{t.contactHow}</h2>
            <div className="fact-stack">
              <article>
                <h3>01 · {t.contactS1T}</h3>
                <p>{t.contactS1}</p>
              </article>
              <article>
                <h3>02 · {t.contactS2T}</h3>
                <p>{t.contactS2}</p>
              </article>
              <article>
                <h3>03 · {t.contactS3T}</h3>
                <p>{t.contactS3}</p>
              </article>
            </div>
          </div>
          <div>
            <ul className="detail-list">
              <li>
                {t.contactPhone}
                <br />
                <a href={`tel:+${contact.phone}`}>{phoneDisplay}</a>
              </li>
              <li>
                WhatsApp
                <br />
                <a href={wa.talk}>{t.footerWaTalk}</a>
              </li>
              <li>
                {t.contactIg}
                <br />
                <a href={contact.instagram} target="_blank" rel="noreferrer">
                  @michelmeiermoves
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
