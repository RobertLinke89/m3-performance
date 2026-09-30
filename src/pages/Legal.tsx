import { Link } from 'react-router-dom'
import { useUi } from '../copy'
import { legal } from '../legal'
import { useLocale } from '../locale'

type Kind = 'imprint' | 'privacy'

export function Imprint() {
  return <LegalPage kind="imprint" />
}

export function Privacy() {
  return <LegalPage kind="privacy" />
}

function LegalPage({ kind }: { kind: Kind }) {
  const { lang } = useLocale()
  const t = useUi()
  const page = legal[lang][kind]
  const other = kind === 'imprint' ? { to: '/datenschutz', label: t.privacy } : { to: '/impressum', label: t.imprint }

  return (
    <main className="legal-page">
      <div className="legal-container">
        <header className="legal-header">
          <h1>{page.title}</h1>
          <p className="lead">{page.lead}</p>
        </header>
        <div className="legal">
          {page.sections.map((block) => (
            <article key={block.h}>
              <h2>{block.h}</h2>
              {block.p.map((text) => (
                <p key={text.slice(0, 48)}>{text}</p>
              ))}
            </article>
          ))}
          <p className="legal-alt">
            <Link to={other.to}>{other.label}</Link>
          </p>
        </div>
      </div>
    </main>
  )
}
