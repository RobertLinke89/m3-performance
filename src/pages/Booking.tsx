import { useState, type CSSProperties } from 'react'
import { BackLink } from '../components/BackLink'
import { useLocale } from '../locale'
import { useContent } from '../useContent'

export function Booking() {
  const { lang } = useLocale()
  const isEn = lang === 'en'
  const { contact } = useContent()
  const [calLoaded, setCalLoaded] = useState(false)

  return (
    <main className="bento-page">
      <div className="wrap">
        <div style={{ marginBottom: 14 }}>
          <BackLink fallback="/" />
        </div>

        {/* Master Bento Grid */}
        <section className="bento-grid" aria-label="Michél Meier 1:1 Mentoring Booking">

          {/* 1. HERO BENTO CARD: 1:1 MENTORING OVERVIEW (Span 8) */}
          <article className="bento-card bento-card--hero bento-span-8" style={{ minHeight: 'clamp(420px, 48vh, 520px)' }}>
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
                alt="Michél Meier 1:1 Performance Mentoring"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="bento-bg-img"
                style={{ objectPosition: 'center 25%' }}
              />
            </picture>
            <div className="bento-overlay" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.85) 85%, #090a0d 100%)' }} />
            <div className="bento-content bento-content--hero" style={{ maxWidth: 660 }}>
              <div className="bento-tag bento-tag--gold" style={{ marginBottom: 6 }}>
                {isEn ? 'EXCLUSIVE 1:1 MENTORING · MICHÉL MEIER' : 'EXKLUSIVE 1:1 BEGLEITUNG · MICHÉL MEIER'}
              </div>
              <h1 className="bento-hero-h1">
                {isEn ? (
                  <>High-Performance Mentoring. <span>Daily 1:1 Access.</span></>
                ) : (
                  <>1:1 High-Performance Begleitung. <span>Täglicher Zugriff.</span></>
                )}
              </h1>
              <p className="bento-lead">
                {isEn
                  ? 'Daily direct access to Michél Meier. No generic templates or delegated coaching. A holistic biological acceleration across metabolism, biomechanics, and nervous system regulation.'
                  : 'Täglicher direkter Zugriff auf Michél Meier. Kein Standard-Trainingsplan und keine distanzierte Betreuung. Ein ganzheitlich synchronisiertes System über Stoffwechsel, Biomechanik und neuronale Regeneration.'}
              </p>

              <div className="bento-cta-row" style={{ marginTop: 18 }}>
                <a href="#cal-booking" className="btn-white">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16, marginRight: 6 }}>
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  {isEn ? 'Select Kickoff Date (Cal.com) ↓' : 'Termin auswählen (Cal.com) ↓'}
                </a>
                <a
                  href={contact.wa('Hallo Michél, ich interessiere mich für die 30-Tage Begleitung für 150€/Tag.')}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-white-ghost"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 16, height: 16, marginRight: 6 }}>
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
                  </svg>
                  {isEn ? 'Direct WhatsApp Inquiry' : 'Direkt per WhatsApp anfragen'}
                </a>
              </div>
            </div>
          </article>

          {/* 2. INVESTMENT & TERMS SUMMARY CARD (Span 4) */}
          <article className="bento-card bento-card--audit-step bento-span-4" style={{ justifyContent: 'space-between', minHeight: 'clamp(420px, 48vh, 520px)' }}>
            <div>
              <span className="bento-audit-badge">{isEn ? 'THE INVESTMENT' : 'DIE KONDITIONEN'}</span>
              
              <div style={{ margin: '14px 0 10px' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                  <span style={{ fontSize: 'clamp(36px, 4.4cqi, 48px)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.03em' }}>
                    150 €
                  </span>
                  <span style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>
                    {isEn ? '/ day' : '/ Tag'}
                  </span>
                </div>
                <div style={{ fontSize: 13, color: '#fbbf24', fontWeight: 700, marginTop: 4 }}>
                  {isEn ? 'Minimum duration: 30 days (4,500 €)' : 'Mindestabnahme: 30 Tage (4.500 €)'}
                </div>
              </div>

              <p className="bento-desc" style={{ fontSize: 13 }}>
                {isEn
                  ? 'Dedicated high-touch performance mentoring. Strictly capped at 3 simultaneous clients for unmatched focus and execution.'
                  : 'Feste Limitierung auf maximal 3 Klienten parallel, um kompromisslose Betreuungsqualität und messbare Resultate zu garantieren.'}
              </p>
            </div>

            <ul className="bento-audit-points" style={{ margin: '16px 0' }}>
              <li>
                <div>
                  <strong>{isEn ? '360° Baseline & Diagnostics' : '360° Diagnostik & Kickoff'}</strong>
                  <div style={{ fontSize: 12, marginTop: 2 }}>{isEn ? 'Lab, metabolism & movement audit' : 'Blutbild, Stoffwechsel- & Bewegungsanalyse'}</div>
                </div>
              </li>
              <li>
                <div>
                  <strong>{isEn ? 'Daily Direct Access & Check-ins' : 'Täglicher 1:1 Direktdraht'}</strong>
                  <div style={{ fontSize: 12, marginTop: 2 }}>{isEn ? 'Daily voice/chat fine-tuning with Michél' : 'Tägliche Feedback-Schleife via WhatsApp & Voice'}</div>
                </div>
              </li>
              <li>
                <div>
                  <strong>{isEn ? 'Weekly Cal.com Strategy Calls' : 'Wöchentliche Strategy Calls'}</strong>
                  <div style={{ fontSize: 12, marginTop: 2 }}>{isEn ? 'Detailed adjustments & progression review' : 'Deep-Dive Video-Calls zur Progression'}</div>
                </div>
              </li>
            </ul>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: 12, fontSize: 12, color: 'rgba(255,255,255,0.75)' }}>
              {isEn ? '⚡ Next onboarding slot available now' : '⚡ Nächster Onboarding-Slot ab sofort verfügbar'}
            </div>
          </article>

          {/* 3. CAL.COM INTERACTIVE EMBED CONTAINER (Span 12) */}
          <article id="cal-booking" className="bento-card bento-card--journal bento-span-12" style={{ padding: 'clamp(22px, 3vw, 36px)' }}>
            <div className="bento-card-header" style={{ marginBottom: 20 }}>
              <div>
                <span className="bento-audit-badge">{isEn ? 'ONLINE SCHEDULING' : 'TERMIN DIREKT BUCHEN'}</span>
                <h2 className="bento-title" style={{ fontSize: 'clamp(22px, 2.6cqi, 32px)', marginTop: 4 }}>
                  {isEn ? 'Book Your Intro & Onboarding Slot via Cal.com' : 'Wähle deinen Kennenlern- & Onboarding-Termin'}
                </h2>
                <p className="bento-desc" style={{ maxWidth: '72ch', marginTop: 6 }}>
                  {isEn
                    ? 'Select your preferred 30-minute introductory call. We evaluate your baseline, ensure a 100% mutual fit for the 30-day mentoring, and establish your target start date.'
                    : 'Wähle deinen Wunschtermin für das 30-minütige Orientierungsgespräch mit Michél. Wir analysieren deine Ausgangslage, prüfen die Eignung für die 30 Tage und legen deinen Starttermin fest.'}
                </p>
              </div>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
                <a
                  href={contact.cal}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-white-ghost"
                  style={{ fontSize: 12, padding: '8px 14px' }}
                >
                  {isEn ? 'Open in new tab ↗' : 'In neuem Tab öffnen ↗'}
                </a>
              </div>
            </div>

            {/* Cal.com IFrame Embed Wrapper */}
            <div
              className="cal-embed-wrapper"
              style={{
                position: 'relative',
                width: '100%',
                minHeight: 650,
                borderRadius: 16,
                overflow: 'hidden',
                background: '#090a0d',
                border: '1px solid rgba(255, 255, 255, 0.12)',
              }}
            >
              {!calLoaded && (
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 12,
                    background: '#090a0d',
                    zIndex: 1,
                  }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      border: '3px solid rgba(255,255,255,0.2)',
                      borderTopColor: '#fbbf24',
                      animation: 'spin 0.8s linear infinite',
                    }}
                  />
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)' }}>
                    {isEn ? 'Loading Cal.com scheduler...' : 'Cal.com Kalender wird geladen...'}
                  </span>
                </div>
              )}
              <iframe
                src="https://cal.com/michelmeier/30min?embed=true&theme=dark"
                title="Michél Meier Cal.com Scheduler"
                width="100%"
                height="650"
                frameBorder="0"
                onLoad={() => setCalLoaded(true)}
                style={{
                  width: '100%',
                  height: 650,
                  border: 0,
                  borderRadius: 16,
                  display: 'block',
                }}
              />
            </div>

            <div style={{ marginTop: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10, fontSize: 12, color: 'rgba(255,255,255,0.65)' }}>
              <span>
                🔒 {isEn ? 'Confidential 1:1 strategy session · Zero obligation' : 'Vertrauliches 1:1 Gespräch · 100% unverbindlich'}
              </span>
              <span>
                {isEn ? 'Prefer WhatsApp?' : 'Lieber direkt per WhatsApp?'}{' '}
                <a
                  href={contact.wa('Hallo Michél, ich habe eine Frage zur 30-Tage Begleitung für 150€/Tag.')}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#ffffff', textDecoration: 'underline' }}
                >
                  {isEn ? 'Message Michél directly →' : 'Michél direkt schreiben →'}
                </a>
              </span>
            </div>
          </article>

          {/* 4. THE 3 PILLARS IN YOUR 30 DAYS (Food. Move. Repeat.) */}
          <article className="bento-card bento-card--pillar bento-span-4" style={{ '--pillar-color': '#e8a14a' } as CSSProperties}>
            <div className="bento-content">
              <span className="bento-pillar-badge" style={{ borderColor: 'rgba(232, 161, 74, 0.45)', color: '#e8a14a' }}>
                SÄULE M¹
              </span>
              <h2 className="bento-pillar-head" style={{ fontSize: 32 }}>Food.</h2>
              <p className="bento-pillar-sub">
                {isEn ? 'Metabolic Fine-Tuning' : 'Metabolismus & Zellenergie'}
              </p>
              <p className="bento-desc" style={{ fontSize: 13 }}>
                {isEn
                  ? 'Continuous glucose regulation, gut barrier protection, and cellular ATP optimization without restrictive dogma.'
                  : 'Blutzuckerstabilisierung, Mikrobiom-Entlastung und optimale Nährstoffverwertung für konstante Energie ohne Leistungstiefs.'}
              </p>
            </div>
          </article>

          <article className="bento-card bento-card--pillar bento-span-4" style={{ '--pillar-color': '#2f9a72' } as CSSProperties}>
            <div className="bento-content">
              <span className="bento-pillar-badge" style={{ borderColor: 'rgba(47, 154, 114, 0.45)', color: '#2f9a72' }}>
                SÄULE M²
              </span>
              <h2 className="bento-pillar-head" style={{ fontSize: 32 }}>Move.</h2>
              <p className="bento-pillar-sub">
                {isEn ? 'Biomechanics & Resilience' : 'Biomechanik & Schmerzfreiheit'}
              </p>
              <p className="bento-desc" style={{ fontSize: 13 }}>
                {isEn
                  ? 'Joint decompression, elimination of movement compensations, and bulletproof physical longevity.'
                  : 'Gelenk-Dekompression, Beseitigung von Schmerzkaskaden und gezielter Aufbau von athletischer Stabilität.'}
              </p>
            </div>
          </article>

          <article className="bento-card bento-card--pillar bento-span-4" style={{ '--pillar-color': '#4f6fd6' } as CSSProperties}>
            <div className="bento-content">
              <span className="bento-pillar-badge" style={{ borderColor: 'rgba(79, 111, 214, 0.45)', color: '#4f6fd6' }}>
                SÄULE M³
              </span>
              <h2 className="bento-pillar-head" style={{ fontSize: 32 }}>Repeat.</h2>
              <p className="bento-pillar-sub">
                {isEn ? 'Neural Clarity & Sleep Architecture' : 'Mindset & neuronale Klarheit'}
              </p>
              <p className="bento-desc" style={{ fontSize: 13 }}>
                {isEn
                  ? 'Deep sleep architecture, nervous system downregulation under high executive stress, and non-negotiable routines.'
                  : 'Tiefschlafarchitektur, Dämpfung von Stressachsen und unerschütterliche Gewohnheiten auch in Hochlastphasen.'}
              </p>
            </div>
          </article>

          {/* 5. PROCESS & PROTOCOL (Span 6) */}
          <article className="bento-card bento-card--audit-step bento-span-6" style={{ padding: 'clamp(22px, 3vw, 32px)' }}>
            <span className="bento-audit-badge">{isEn ? 'THE ROADMAP' : 'DER 30-TAGE-ABLAUF'}</span>
            <h2 className="bento-title" style={{ fontSize: 21, marginTop: 4 }}>
              {isEn ? 'Structured Protocol, Zero Guesswork' : 'Strukturierter Fahrplan, null Raten'}
            </h2>
            <p className="bento-desc" style={{ fontSize: 13 }}>
              {isEn
                ? 'Every day is accounted for with intentional progression:'
                : 'Jeder Tag hat ein klares Ziel – von der Diagnostik bis zur gefestigten Routine:'}
            </p>
            <ul className="bento-audit-points" style={{ marginTop: 14 }}>
              <li>
                <div>
                  <strong>Tag 01: 360° Baseline & Zieldefinition</strong>
                  <div style={{ fontSize: 12, marginTop: 2 }}>Ausführliche Anamnese, Bewegungs- & Lebensstilanalyse.</div>
                </div>
              </li>
              <li>
                <div>
                  <strong>Tag 02–07: Akuter Reset & Engpass-Beseitigung</strong>
                  <div style={{ fontSize: 12, marginTop: 2 }}>Sofortige Entlastung des primären Energie-Lecks.</div>
                </div>
              </li>
              <li>
                <div>
                  <strong>Tag 08–21: Progressive Adaption & Festigung</strong>
                  <div style={{ fontSize: 12, marginTop: 2 }}>Tägliches Finetuning von Ernährung, Reizen und Regeneration.</div>
                </div>
              </li>
              <li>
                <div>
                  <strong>Tag 22–30: Leistungs-Stabilisierung & Zukunfts-Plan</strong>
                  <div style={{ fontSize: 12, marginTop: 2 }}>Feste Verankerung im Kalender und Übergang in Autonomie.</div>
                </div>
              </li>
            </ul>
          </article>

          {/* 6. FAQ & FRAMEWORK (Span 6) */}
          <article className="bento-card bento-card--audit-step bento-span-6" style={{ padding: 'clamp(22px, 3vw, 32px)' }}>
            <span className="bento-audit-badge">{isEn ? 'FAQ & DETAILS' : 'HÄUFIGE FRAGEN'}</span>
            <h2 className="bento-title" style={{ fontSize: 21, marginTop: 4 }}>
              {isEn ? 'Everything You Need to Know' : 'Wichtige Rahmenbedingungen'}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 14 }}>
              <div>
                <strong style={{ fontSize: 14, color: '#ffffff' }}>
                  {isEn ? 'Why is 30 days the minimum booking period?' : 'Warum beträgt die Mindestabnahme 30 Tage?'}
                </strong>
                <p style={{ margin: '4px 0 0', fontSize: 13, color: 'rgba(255,255,255,0.72)', lineHeight: 1.45 }}>
                  {isEn
                    ? 'Biological adaptation across metabolism, fascial chains, and nervous system pathways requires at least 3 to 4 weeks of consistent stimulus. Shorter durations produce temporary relief, not lasting physiological transformation.'
                    : 'Biologische Adaptionsprozesse (Zellstoffwechsel, Gelenk-Gewebe, Neuroplastizität) benötigen mindestens 3 bis 4 Wochen konsistenter Reize. Alles darunter ist Symptombekämpfung, keine nachhaltige Transformation.'}
                </p>
              </div>

              <div>
                <strong style={{ fontSize: 14, color: '#ffffff' }}>
                  {isEn ? 'Can the mentoring be extended after 30 days?' : 'Kann die Begleitung nach 30 Tagen verlängert werden?'}
                </strong>
                <p style={{ margin: '4px 0 0', fontSize: 13, color: 'rgba(255,255,255,0.72)', lineHeight: 1.45 }}>
                  {isEn
                    ? 'Yes. Many clients extend into a 60- or 90-day phase or transition to the flexible M³ System Hold retainer.'
                    : 'Ja. Viele Klienten verlängern im 30-Tage-Takt oder wechseln im Anschluss in den flexiblen M³ System Hold Modus zur langfristigen Absicherung.'}
                </p>
              </div>

              <div>
                <strong style={{ fontSize: 14, color: '#ffffff' }}>
                  {isEn ? 'How does daily communication work?' : 'Wie läuft die tägliche Kommunikation ab?'}
                </strong>
                <p style={{ margin: '4px 0 0', fontSize: 13, color: 'rgba(255,255,255,0.72)', lineHeight: 1.45 }}>
                  {isEn
                    ? 'Direct WhatsApp channel with voice notes and rapid feedback loops, combined with scheduled Cal.com video strategy calls.'
                    : 'Über einen direkten, priorisierten WhatsApp-Kanal mit schnellen Feedback-Schleifen und Sprachnachrichten, ergänzt durch geplante Video-Deep-Dives via Cal.com.'}
                </p>
              </div>
            </div>
          </article>

          {/* 7. BOTTOM DIRECT CAL.COM / WHATSAPP BANNER (Span 12) */}
          <article className="bento-card bento-card--temple-base bento-span-12">
            <div className="bento-base-content">
              <div className="bento-base-text">
                <span className="bento-audit-badge">{isEn ? 'READY TO START?' : 'BEREIT FÜR DEINEN START?'}</span>
                <h2 className="bento-title" style={{ fontSize: 'clamp(21px, 2.6cqi, 30px)', marginTop: 4 }}>
                  {isEn ? '30 Days 1:1 Mentoring with Michél Meier' : '30 Tage 1:1 Begleitung mit Michél Meier'}
                </h2>
                <p className="bento-desc" style={{ maxWidth: '68ch', marginTop: 6 }}>
                  {isEn
                    ? '150 € per day · 30-day minimum duration (4,500 € total). Book your intro call now or reach out directly via WhatsApp.'
                    : '150 € pro Tag · Mindestabnahme 30 Tage (4.500 € Gesamtinvestition). Sichere dir deinen Kennenlern-Termin via Cal.com oder schreibe Michél direkt.'}
                </p>
              </div>
              <div className="bento-base-actions">
                <a
                  href="#cal-booking"
                  className="btn-white"
                  style={{ padding: '12px 22px', fontSize: 14 }}
                >
                  {isEn ? 'Select Slot via Cal.com ↑' : 'Termin via Cal.com wählen ↑'}
                </a>
                <a
                  href={contact.wa('Hallo Michél, ich möchte die 30-Tage Begleitung für 150€/Tag buchen.')}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-white-ghost"
                  style={{ padding: '12px 20px', fontSize: 14 }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 16, height: 16, marginRight: 8 }}>
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
                  </svg>
                  {isEn ? 'Direct WhatsApp' : 'WhatsApp Direktanfrage'}
                </a>
              </div>
            </div>
          </article>

        </section>
      </div>
    </main>
  )
}
