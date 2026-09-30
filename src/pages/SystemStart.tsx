import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BackLink } from '../components/BackLink'
import { Img } from '../components/Img'
import { useUi } from '../copy'
import { useLocale } from '../locale'
import { useContent } from '../useContent'

export function SystemStart() {
  const t = useUi()
  const { lang } = useLocale()
  const isEn = lang === 'en'
  const { compass, contact, modules, pillars, startProof, wa } = useContent()
  const [pick, setPick] = useState<string>('m1')
  const picked = pillars.find((p) => p.id === pick) || pillars[0]
  const next = picked ? modules.filter((m) => m.pillar === picked.id).slice(0, 3) : []

  return (
    <main className="bento-page">
      <div className="wrap">
        <div style={{ marginBottom: 14 }}>
          <BackLink fallback="/#start" />
        </div>

        {/* Master Bento Grid */}
        <section className="bento-grid" aria-label="M³ System Start Bento Grid">

          {/* 1. HERO BENTO CARD (Span 8 - The Front Door Manifesto) */}
          <article className="bento-card bento-card--hero bento-span-8">
            <picture className="bento-bg">
              <source
                type="image/webp"
                srcSet="/images/moodboard/mood-elevate.webp 1x, /images/moodboard/mood-elevate@2x.webp 2x"
              />
              <source
                srcSet="/images/moodboard/mood-elevate.jpg 1x, /images/moodboard/mood-elevate.jpg 2x"
              />
              <img
                src="/images/moodboard/mood-elevate.jpg"
                alt="M3 System Start Standortbestimmung"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="bento-bg-img"
              />
            </picture>
            <div className="bento-overlay" />
            <div className="bento-content bento-content--hero">
              <h1 className="bento-hero-h1">
                {isEn ? (
                  <>01 · System Start. <span>Your 360° Assessment.</span></>
                ) : (
                  <>01 · System Start. <span>Deine Standortbestimmung.</span></>
                )}
              </h1>
              <p className="bento-lead">
                {isEn
                  ? 'Not just another coaching offer. Your front door. We analyze your biological baseline across metabolism, biomechanics, and mindset – zero guesswork.'
                  : 'Nicht irgendein Coaching. Deine 360°-Eingangstür. Wir analysieren deinen biologischen Status quo, identifizieren dein primäres Energie-Leck und erstellen deinen glasklaren Fahrplan.'}
              </p>
              <div className="bento-cta-row" style={{ marginTop: 16 }}>
                <a href={wa.start} target="_blank" rel="noreferrer" className="btn-white">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="btn-icon" style={{ width: 16, height: 16, marginRight: 6 }}>
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
                  </svg>
                  {isEn ? 'Start Assessment' : 'Standortbestimmung starten'}
                </a>
                <a
                  href={contact.cal}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-white-ghost"
                  data-cal-link="michelmeier/30min"
                >
                  {isEn ? 'Book 30-Min. Slot (Cal.com) →' : '30 Min. Slot buchen (Cal.com) →'}
                </a>
              </div>
            </div>
          </article>

          {/* 2. 3-STAGE AUDIT OVERVIEW (Span 4) */}
          <article className="bento-card bento-card--audit-step bento-span-4" style={{ justifyContent: 'space-between', minHeight: 'clamp(440px, 50vh, 540px)' }}>
            <div>
              <span className="bento-audit-badge">{isEn ? 'THE DIAGNOSTICS' : 'DIE DIAGNOSTIK'}</span>
              <h2 className="bento-title" style={{ fontSize: 21 }}>
                {isEn ? '3-Stage Audit Sequence' : 'Das 3-Stufen-Audit'}
              </h2>
              <p className="bento-desc">
                {isEn
                  ? 'Before we prescribe any intervention, we measure where your capacity is limited.'
                  : 'Bevor wir eine Intervention starten, prüfen wir exakt, wo das System blockiert.'}
              </p>
            </div>
            <ul className="bento-audit-points">
              <li>
                <div>
                  <strong>01 · Stoffwechsel & Zellenergie (M¹)</strong>
                  <div style={{ fontSize: 12, marginTop: 2 }}>Mikrobiom, Blutzuckerstabilität, Entzündungslevel</div>
                </div>
              </li>
              <li>
                <div>
                  <strong>02 · Biomechanik & Schmerz (M²)</strong>
                  <div style={{ fontSize: 12, marginTop: 2 }}>Gelenkbelastbarkeit, Faszienketten, Bewegungsmuster</div>
                </div>
              </li>
              <li>
                <div>
                  <strong>03 · Neuro-Stress-Profil (M³)</strong>
                  <div style={{ fontSize: 12, marginTop: 2 }}>Tiefschlafarchitektur, Fokus & Entscheidungsresilienz</div>
                </div>
              </li>
            </ul>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#ffffff', opacity: 0.85 }}>
              {isEn ? '→ 100% individual roadmap' : '→ 100% individueller 90-Tage-Fahrplan'}
            </div>
          </article>

          {/* 3. INTERACTIVE SYSTEM COMPASS BENTO (Span 12) */}
          <article className="bento-card bento-card--journal bento-span-12" style={{ padding: 'clamp(22px, 3vw, 36px)' }}>
            <div className="bento-card-header" style={{ marginBottom: 20 }}>
              <div>
                <h2 className="bento-title" style={{ fontSize: 'clamp(20px, 2.4cqi, 28px)' }}>
                  {isEn ? 'System Compass: Where is your primary hurdle?' : 'Der System-Kompass: Wo spürst du deine größte Hürde?'}
                </h2>
                <p className="bento-desc" style={{ maxWidth: '64ch' }}>
                  {isEn
                    ? 'Click your primary friction point. The system instantly maps your required starting pillar and next steps.'
                    : 'Wähle dein Hauptsymptom. Das M³ System ordnet dich sofort in die richtige Säule und den passenden Start ein.'}
                </p>
              </div>
            </div>

            {/* 3 Selectable Interactive Compass Cards */}
            <div className="bento-compass-grid">
              {compass.map((c) => {
                const isSelected = pick === c.id
                const imgMap: Record<string, string> = {
                  m1: '/images/moodboard/mood-kitchen.webp',
                  m2: '/images/moodboard/mood-limitless.webp',
                  m3: '/images/moodboard/mood-focus.webp',
                }
                const imgSrc = imgMap[c.id] || c.image

                return (
                  <button
                    key={c.id}
                    type="button"
                    className={`bento-compass-card ${isSelected ? 'selected' : ''}`}
                    onClick={() => setPick(c.id)}
                  >
                    <picture className="bento-bg">
                      <source type="image/webp" srcSet={`${imgSrc} 1x, ${imgSrc.replace('.webp', '@2x.webp')} 2x`} />
                      <img src={imgSrc} alt={c.title} className="bento-bg-img" loading="lazy" />
                    </picture>
                    <div className="bento-overlay" style={{ background: isSelected ? 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.88) 100%)' : 'linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.92) 100%)' }} />
                    <div className="bento-content">
                      <h3 className="bento-title" style={{ fontSize: 18 }}>
                        <span className="bento-pillar-accent" style={{ color: '#ffffff' }}>
                          {c.id.toUpperCase()}
                        </span>{' '}
                        {c.title}
                      </h3>
                      <p className="bento-desc" style={{ fontSize: 13, color: 'rgba(255,255,255,0.86)' }}>{c.text}</p>
                      <div style={{ marginTop: 8, fontSize: 12, fontWeight: 800, color: isSelected ? '#ffffff' : 'rgba(255,255,255,0.6)' }}>
                        {isSelected ? (isEn ? '✓ Selected Starting Point' : '✓ Ausgewählter Startpunkt') : (isEn ? 'Select this area →' : 'Diesen Bereich wählen →')}
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Dynamic Results Panel */}
            {picked && (
              <div className="bento-result-box">
                <div className="bento-result-header">
                  <div>
                    <span className="bento-audit-badge">{isEn ? 'YOUR RECOMMENDED ENTRY' : 'DEIN EMPFOHLENER EINSTIEG'}</span>
                    <h3 style={{ margin: '4px 0 0', fontSize: 20, color: '#ffffff' }}>
                      <span className="bento-pillar-accent" style={{ color: '#ffffff' }}>{picked.mark}</span> {picked.name} · {picked.title}
                    </h3>
                  </div>
                  <Link to={`/${picked.slug}`} className="btn-white">
                    {isEn ? `Explore Pillar ${picked.mark} →` : `Säule ${picked.mark} vertiefen →`}
                  </Link>
                </div>
                <p style={{ margin: 0, fontSize: 14, color: 'rgba(255,255,255,0.78)', lineHeight: 1.5, maxWidth: '75ch' }}>
                  {picked.body}
                </p>

                {next.length > 0 && (
                  <div style={{ marginTop: 20 }}>
                    <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#ffffff', marginBottom: 10 }}>
                      {isEn ? 'Matching Modules in this Pillar:' : 'Passende Module in dieser Säule:'}
                    </div>
                    <div className="bento-audience-grid">
                      {next.map((m) => (
                        <Link to={`/${m.slug}`} className="bento-sub-card" key={m.slug} style={{ textDecoration: 'none' }}>
                          <Img className="bento-sub-media" src={m.image} alt={m.title} />
                          <div className="bento-sub-body">
                            <h3>{m.title}</h3>
                            <p>{m.text}</p>
                            <span style={{ fontSize: 12, fontWeight: 700, color: '#ffffff', marginTop: 4 }}>
                              {t.detailsArrow}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </article>

          {/* 4, 5, 6. THE 3 AUDIT DIMENSIONS (Span 4 Each) */}
          <article className="bento-card bento-card--audit-step bento-span-4">
            <span className="bento-audit-badge">M¹ · METABOLISMUS</span>
            <h2 className="bento-title" style={{ fontSize: 19 }}>
              {isEn ? 'Zellenergie & Mikrobiom-Audit' : 'Zellenergie & Mikrobiom-Audit'}
            </h2>
            <p className="bento-desc">
              {isEn
                ? 'We check nutrient absorption, blood sugar balance, and gut inflammation markers.'
                : 'Wir analysieren Nährstoffresorption, Blutzuckerschwankungen, Darmimmunität und stille Entzündungen.'}
            </p>
            <ul className="bento-audit-points">
              <li>Keine Nachmittagstiefs & Heißhunger mehr</li>
              <li>Optimale mitochondriale ATP-Produktion</li>
              <li>Stabiler Stoffwechsel ohne Verzichtsdogmen</li>
            </ul>
          </article>

          <article className="bento-card bento-card--audit-step bento-span-4">
            <span className="bento-audit-badge">M² · BIOMECHANIK</span>
            <h2 className="bento-title" style={{ fontSize: 19 }}>
              {isEn ? 'Gelenk- & Schmerz-Screening' : 'Gelenk- & Schmerz-Screening'}
            </h2>
            <p className="bento-desc">
              {isEn
                ? 'Full range of motion audit, muscular imbalances, and functional joint decompression.'
                : 'Prüfung von Gelenkwinkeln, myofaszialen Ketten, Wirbelsäulenbelastung und Asymmetrien.'}
            </p>
            <ul className="bento-audit-points">
              <li>Schmerzfreie Beweglichkeit im Berufsalltag</li>
              <li>Gezielte Dekompression geschädigter Segmente</li>
              <li>Athletische Belastbarkeit & Gelenkschutz</li>
            </ul>
          </article>

          <article className="bento-card bento-card--audit-step bento-span-4">
            <span className="bento-audit-badge">M³ · MINDSET</span>
            <h2 className="bento-title" style={{ fontSize: 19 }}>
              {isEn ? 'Neuro-Stress & Tiefschlaf-Audit' : 'Neuro-Stress & Tiefschlaf-Audit'}
            </h2>
            <p className="bento-desc">
              {isEn
                ? 'Analysis of decision fatigue, restorative sleep architecture, and neural recovery under pressure.'
                : 'Analyse von Stressachsen, Tiefschlafphasen, Entscheidungsökonomie und mentalem Fokus.'}
            </p>
            <ul className="bento-audit-points">
              <li>Tiefer, erholsamer Schlaf ab Nacht eins</li>
              <li>Glasklare Entscheidungsfähigkeit unter Last</li>
              <li>Stabile Routinen, die bei Stress nicht kippen</li>
            </ul>
          </article>

          {/* 7 & 8. THE PROOF & METHODOLOGY (Span 6 + Span 6) */}
          <article className="bento-card bento-card--audit-step bento-span-6">
            <h2 className="bento-title" style={{ fontSize: 19 }}>
              {startProof[0]?.title || 'Ein Katalog fragt nach der Wahl. Ein Eingang nach dem Engpass.'}
            </h2>
            <p className="bento-desc" style={{ marginTop: 8 }}>
              {startProof[0]?.text || 'Body Reset, Schmerzfrei, Performance — wer dort startet, hat die Diagnose schon selbst gestellt. Der System Start prüft zuerst, wo dein wahrer Engpass liegt.'}
            </p>
          </article>

          <article className="bento-card bento-card--audit-step bento-span-6">
            <h2 className="bento-title" style={{ fontSize: 19 }}>
              {startProof[1]?.title || 'Die Säulen bedingen einander. Parallel starten ist Raten.'}
            </h2>
            <p className="bento-desc" style={{ marginTop: 8 }}>
              {startProof[1]?.text || 'Last auf einem brennenden Fundament erzeugt Verschleiß. Die feste Reihenfolge existiert, weil der Körper eine biologische Ordnung hat.'}
            </p>
          </article>

          {/* 9. EXECUTIVE DIRECT BOOKING CTA (Span 12) */}
          <article className="bento-card bento-card--hero bento-span-12" style={{ minHeight: 'clamp(380px, 42vh, 460px)' }}>
            <picture className="bento-bg">
              <source
                type="image/webp"
                srcSet="/images/moodboard/mood-pushup.webp 1x, /images/moodboard/mood-pushup@2x.webp 2x"
              />
              <source
                srcSet="/images/moodboard/mood-pushup.jpg 1x, /images/moodboard/mood-pushup.jpg 2x"
              />
              <img
                src="/images/moodboard/mood-pushup.jpg"
                alt="Michél Meier System Start"
                loading="lazy"
                decoding="async"
                className="bento-bg-img"
              />
            </picture>
            <div className="bento-overlay" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.92) 100%)' }} />
            <div className="bento-content" style={{ maxWidth: 680 }}>
              <h2 className="bento-title" style={{ fontSize: 'clamp(24px, 3.2cqi, 36px)' }}>
                {isEn ? 'Status first, then intervention.' : 'Erst Status, dann Eingriff.'}
              </h2>
              <p className="bento-lead">
                {isEn
                  ? 'Start your 360° assessment with Michél Meier. Identify your bottleneck, protect your time, and get your custom 90-day trajectory.'
                  : 'Sichere dir deine persönliche Standortbestimmung mit Michél. Wir analysieren deine Situation direkt, ehrlich und ohne leere Versprechungen.'}
              </p>
              <div className="bento-cta-row" style={{ marginTop: 16 }}>
                <a href={wa.start} target="_blank" rel="noreferrer" className="btn-white">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="btn-icon" style={{ width: 16, height: 16, marginRight: 6 }}>
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
                  </svg>
                  {isEn ? 'Start System Assessment' : 'Standortbestimmung buchen'}
                </a>
                <Link to="/kontakt" className="btn-white-ghost">
                  {isEn ? 'Contact options' : 'Kontaktoptionen'}
                </Link>
              </div>
            </div>
          </article>

        </section>
      </div>
    </main>
  )
}
