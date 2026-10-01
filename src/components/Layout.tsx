import { useLayoutEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { BrandMark } from './BrandMark'
import { useUi } from '../copy'
import { useLocale } from '../locale'
import { useContent } from '../useContent'
import { ThemeSwitch } from './ThemeSwitch'
import { PaymentLogos } from './PaymentLogos'

function scrollToPageStart() {
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0
}

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useLayoutEffect(() => {
    if (hash) {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)))
      if (target) {
        target.scrollIntoView({ block: 'start', behavior: 'auto' })
        return
      }
    }

    const main = document.querySelector('main')
    if (main instanceof HTMLElement) {
      if (!main.hasAttribute('tabindex')) main.tabIndex = -1
      main.focus({ preventScroll: true })
    }

    scrollToPageStart()
    const frame = window.requestAnimationFrame(() => scrollToPageStart())
    return () => window.cancelAnimationFrame(frame)
  }, [pathname, hash])

  return null
}

function LangSwitch() {
  const { lang, setLang } = useLocale()
  return (
    <div className="lang-switch" role="group" aria-label="Language">
      <button
        type="button"
        className={lang === 'de' ? 'on' : undefined}
        aria-pressed={lang === 'de'}
        onClick={() => setLang('de')}
      >
        DE
      </button>
      <span className="sep" aria-hidden>
        /
      </span>
      <button
        type="button"
        className={lang === 'en' ? 'on' : undefined}
        aria-pressed={lang === 'en'}
        onClick={() => setLang('en')}
      >
        EN
      </button>
    </div>
  )
}

export function Layout() {
  const t = useUi()
  const { contact, wa } = useContent()

  return (
    <>
      <ScrollToTop />
      <header className="nav">
        <LangSwitch />
        <Link className="brand" to="/" aria-label="M³ Performance">
          <BrandMark />
        </Link>
        <div className="nav-actions">
          <a
            className="nav-cal-link"
            href={contact.cal}
            target="_blank"
            rel="noreferrer"
            data-cal-link="michelmeier/30min"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="nav-cal-icon"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span>{t.navCal}</span>
          </a>
          <a className="btn btn-gold" href={wa.talk} target="_blank" rel="noreferrer">
            {t.writeMe}
          </a>
        </div>
      </header>
      <Outlet />
      <footer className="footer">
        <div className="wrap footer-grid">
          <div>
            <div className="brand" aria-label="M³ Performance">
              <BrandMark />
            </div>
            <p>{t.footerLine}</p>
            <p>{t.footerAbout}</p>
          </div>
          <div>
            <strong>{t.system}</strong>
            <p><Link to="/system-start" onClick={scrollToPageStart}>{t.systemStart}</Link></p>
            <p><Link to="/metabolism" onClick={scrollToPageStart}>M¹ Metabolism</Link></p>
            <p><Link to="/movement" onClick={scrollToPageStart}>M² Movement</Link></p>
            <p><Link to="/mental-performance" onClick={scrollToPageStart}>{t.footerMental}</Link></p>
            <p><Link to="/blog" onClick={scrollToPageStart}>{t.blog}</Link></p>
          </div>
          <div>
            <strong>{t.footerModules}</strong>
            <p><Link to="/body-reset" onClick={scrollToPageStart}>Body Reset</Link></p>
            <p><Link to="/performance-training" onClick={scrollToPageStart}>Performance Training</Link></p>
            <p><Link to="/schmerzfrei" onClick={scrollToPageStart}>{t.painfree}</Link></p>
            <p><Link to="/sitemap" onClick={scrollToPageStart}>{t.sitemap}</Link></p>
          </div>
          <div>
            <strong>{t.footerContact}</strong>
            <p>
              <a href={contact.cal} target="_blank" rel="noreferrer">
                {t.bookCal}
              </a>
            </p>
            <p><Link to="/kontakt" onClick={scrollToPageStart}>{t.footerWaTalk}</Link></p>
            <p><Link to="/katalog" onClick={scrollToPageStart}>{t.footerWaCat}</Link></p>
            <p><Link to="/ueber-mich" onClick={scrollToPageStart}>{t.footerAboutMichel}</Link></p>
            <p><Link to="/impressum" onClick={scrollToPageStart}>{t.imprint}</Link></p>
            <p><Link to="/datenschutz" onClick={scrollToPageStart}>{t.privacy}</Link></p>
          </div>
        </div>
        <div className="wrap footer-payment-container">
          <PaymentLogos />
        </div>
        <div className="wrap footer-bar">
          <span>{t.footerCopy}</span>
          <nav className="footer-legal" aria-label={t.imprint}>
            <Link to="/impressum" onClick={scrollToPageStart}>{t.imprint}</Link>
            <Link to="/datenschutz" onClick={scrollToPageStart}>{t.privacy}</Link>
          </nav>
          <ThemeSwitch />
        </div>
      </footer>
    </>
  )
}
