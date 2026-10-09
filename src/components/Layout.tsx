import { useLayoutEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { BrandMark } from './BrandMark'
import { useUi } from '../copy'
import { useLocale } from '../locale'


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

  return (
    <>
      <ScrollToTop />
      <header className="nav">
        <div className="nav-controls">
          <div className="nav-burger" aria-hidden="true" role="presentation" title="Menü">
            <span className="nav-burger-line" />
            <span className="nav-burger-line" />
            <span className="nav-burger-line" />
          </div>
          <LangSwitch />
        </div>
        <Link className="brand" to="/" aria-label="M³ Performance">
          <BrandMark />
        </Link>
        <div className="nav-actions">
          <Link
            className="nav-secondary-link"
            to="/ueber-mich"
          >
            About
          </Link>
          <Link className="btn btn-gold nav-btn-booking" to="/buchen">
            <span className="nav-btn-booking-full">{t.bookMichel}</span>
            <span className="nav-btn-booking-short">{t.bookMichelShort}</span>
          </Link>
        </div>
      </header>
      <Outlet />
      <footer className="footer footer--minimal">
        <div className="wrap footer-minimal-wrap">
          <div className="footer-side footer-side--left">
            <Link to="/impressum" onClick={scrollToPageStart} className="footer-corner-link">
              {t.imprint}
            </Link>
          </div>
          <div className="footer-center">
            <span className="footer-brand-text">
              M³ Performance<span className="footer-trademark">®</span>
            </span>
          </div>
          <div className="footer-side footer-side--right">
            <Link to="/datenschutz" onClick={scrollToPageStart} className="footer-corner-link">
              {t.privacy}
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}
