import { Link } from 'react-router-dom'
import { useUi } from '../copy'
import { useContent } from '../useContent'

export function Sitemap() {
  const t = useUi()
  const { modules, pillars, posts } = useContent()

  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">{t.smEyebrow}</p>
          <h1>{t.smH}</h1>
          <p className="lead">{t.smLead}</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap grid-2">
          <article className="card">
            <h3>{t.system}</h3>
            <p><Link to="/">{t.smHome}</Link></p>
            <p><Link to="/system-start">{t.systemStart}</Link></p>
            <p><Link to="/ueber-mich">{t.footerAboutMichel}</Link></p>
            {pillars.map((p) => (
              <p key={p.slug}>
                <Link to={`/${p.slug}`}>
                  {p.mark} {p.name}
                </Link>
              </p>
            ))}
            <p>
              <Link to="/blog">{t.blog}</Link>
            </p>
          </article>
          <article className="card">
            <h3>{t.blog}</h3>
            {posts.map((p) => (
              <p key={p.slug}>
                <Link to={`/blog/${p.slug}`}>{p.title}</Link>
              </p>
            ))}
          </article>
          <article className="card">
            <h3>{t.footerModules}</h3>
            {modules.map((m) => (
              <p key={m.slug}>
                <Link to={`/${m.slug}`}>{m.title}</Link>
              </p>
            ))}
          </article>
          <article className="card">
            <h3>{t.footerContact}</h3>
            <p><Link to="/kontakt">{t.footerWaTalk}</Link></p>
            <p><Link to="/katalog">{t.footerWaCat}</Link></p>
            <p><Link to="/ueber-mich">{t.footerAboutMichel}</Link></p>
            <p><Link to="/#faq">{t.smFaq}</Link></p>
          </article>
        </div>
      </section>
    </main>
  )
}
