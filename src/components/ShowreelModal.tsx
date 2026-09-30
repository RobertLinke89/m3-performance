import { useEffect, useRef, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { JockeyUnderline } from './JockeyUnderline'
import { showreelAudio } from '../utils/showreelAudio'
import { contact } from '../content'

interface ShowreelModalProps {
  isOpen: boolean
  onClose: () => void
  isEn?: boolean
}

interface Scene {
  id: number
  startTime: number
  endTime: number
  title: string
  subtitle: string
  label: string
  image?: string
  alt?: string
  hudTag: string
  color: string
}

const TOTAL_DURATION = 15 // 15 seconds

export function ShowreelModal({ isOpen, onClose, isEn = false }: ShowreelModalProps) {
  const [currentTime, setCurrentTime] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [isFinished, setIsFinished] = useState(false)
  const animFrameRef = useRef<number | null>(null)
  const lastTimestampRef = useRef<number | null>(null)
  const currentSceneIdxRef = useRef<number>(-1)

  const scenes: Scene[] = [
    {
      id: 1,
      startTime: 0,
      endTime: 2.8,
      title: isEn ? 'MOBILITY IS PERFORMANCE.' : 'MOBILITY IS PERFORMANCE.',
      subtitle: isEn
        ? 'Performance starts when the foundation is solid.'
        : 'Leistung beginnt, wenn das Fundament stabil steht.',
      label: isEn ? '01 · ORIGIN' : '01 · URSPRUNG',
      hudTag: 'M³ SYSTEM CODEX · v2.5',
      color: 'var(--gold, #d97706)',
    },
    {
      id: 2,
      startTime: 2.8,
      endTime: 6.0,
      title: isEn ? 'TRAIN LIKE AN ATHLETE.' : 'TRAIN LIKE AN ATHLETE.',
      subtitle: isEn
        ? 'Maximum range of motion meets functional power.'
        : 'Maximale Bewegungsfreiheit trifft funktionale Kraft.',
      label: isEn ? '02 · BIOMECHANICS' : '02 · BIOMECHANIK',
      image: '/images/michel-work-mobility.webp',
      alt: 'Michél Mobility Training',
      hudTag: 'M² BIOMECHANICS · 100% RANGE',
      color: 'var(--m2, #2f9a72)',
    },
    {
      id: 3,
      startTime: 6.0,
      endTime: 9.2,
      title: isEn ? 'WORLD CHAMPION CODEX.' : '30+ JAHRE BEWEGUNG.',
      subtitle: isEn
        ? 'IDO World Champion 2006/07. Pure body mastery.'
        : 'IDO World Champion 2006/07. Reine Körperbeherrschung.',
      label: isEn ? '03 · MASTERY' : '03 · KÖRPERBEHERRSCHUNG',
      image: '/images/michel-breakdance.webp',
      alt: 'Michél Breakdance Freeze',
      hudTag: 'WORLD CHAMPION 2006/07 · B-BOY CODEX',
      color: '#ea580c',
    },
    {
      id: 4,
      startTime: 9.2,
      endTime: 12.2,
      title: isEn ? 'COACHING THAT TRANSFORMS.' : 'COACHING DAS TRANSFORMIERT.',
      subtitle: isEn
        ? 'Metabolism (M¹) · Biomechanics (M²) · Mindset (M³)'
        : 'Stoffwechsel (M¹) · Biomechanik (M²) · Mindset (M³)',
      label: isEn ? '04 · SYSTEM' : '04 · GANZHEITLICH',
      image: '/images/michel-work-training.webp',
      alt: 'Michél Athletic Coaching',
      hudTag: 'M¹ + M² + M³ INTEGRATION',
      color: 'var(--m3, #4f6fd6)',
    },
    {
      id: 5,
      startTime: 12.2,
      endTime: 15.0,
      title: isEn ? 'UNLEASH YOUR POTENTIAL.' : 'UNLEASH YOUR POTENTIAL.',
      subtitle: isEn
        ? 'Start your 1:1 Performance Audit with Michél.'
        : 'Starte dein 1:1 Performance Audit mit Michél.',
      label: isEn ? '05 · PITCH & ACTION' : '05 · CONVERSION',
      image: '/images/hero-system.webp',
      alt: 'M3 Performance System',
      hudTag: 'HIGH-CONVERSION 1:1 SERVICE',
      color: 'var(--gold, #d97706)',
    },
  ]

  // Find active scene
  const activeSceneIndex = scenes.findIndex(
    (s) => currentTime >= s.startTime && currentTime <= s.endTime
  )
  const currentScene = scenes[activeSceneIndex >= 0 ? activeSceneIndex : scenes.length - 1]

  // Play audio triggers on scene change
  useEffect(() => {
    if (!isOpen || !isPlaying) return
    if (activeSceneIndex !== currentSceneIdxRef.current) {
      currentSceneIdxRef.current = activeSceneIndex
      if (activeSceneIndex === 0) {
        showreelAudio.playImpact()
      } else {
        showreelAudio.playWhoosh()
      }
    }
  }, [activeSceneIndex, isOpen, isPlaying])

  // Animation Loop for 15s showreel
  const updatePlayback = useCallback((timestamp: number) => {
    if (!lastTimestampRef.current) {
      lastTimestampRef.current = timestamp
    }
    const delta = (timestamp - lastTimestampRef.current) / 1000
    lastTimestampRef.current = timestamp

    setCurrentTime((prev) => {
      const next = prev + delta
      if (next >= TOTAL_DURATION) {
        setIsPlaying(false)
        setIsFinished(true)
        showreelAudio.playImpact()
        return TOTAL_DURATION
      }
      return next
    })

    animFrameRef.current = requestAnimationFrame(updatePlayback)
  }, [])

  useEffect(() => {
    if (isOpen && isPlaying) {
      lastTimestampRef.current = null
      animFrameRef.current = requestAnimationFrame(updatePlayback)
    } else {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current)
      }
    }

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current)
      }
    }
  }, [isOpen, isPlaying, updatePlayback])

  // Reset when opened
  useEffect(() => {
    if (isOpen) {
      setCurrentTime(0)
      setIsPlaying(true)
      setIsFinished(false)
      lastTimestampRef.current = null
      currentSceneIdxRef.current = -1
    } else {
      setIsPlaying(false)
    }
  }, [isOpen])

  // ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
      if (e.key === ' ' && isOpen) {
        e.preventDefault()
        togglePlay()
      }
    }
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  const togglePlay = () => {
    if (isFinished) {
      setCurrentTime(0)
      setIsFinished(false)
      setIsPlaying(true)
      return
    }
    setIsPlaying((prev) => !prev)
  }

  const handleReplay = () => {
    setCurrentTime(0)
    setIsFinished(false)
    setIsPlaying(true)
    showreelAudio.playImpact()
  }

  const toggleMute = () => {
    const nextMuted = !isMuted
    setIsMuted(nextMuted)
    showreelAudio.setMuted(nextMuted)
  }

  const handleSeek = (newTime: number) => {
    setCurrentTime(Math.min(Math.max(newTime, 0), TOTAL_DURATION))
    if (newTime < TOTAL_DURATION && isFinished) {
      setIsFinished(false)
    }
  }

  if (!isOpen) return null

  const progressPercent = (currentTime / TOTAL_DURATION) * 100
  const formattedSeconds = Math.floor(currentTime).toString().padStart(2, '0')
  const formattedMs = Math.floor((currentTime % 1) * 10).toString()

  const waAuditUrl = isEn
    ? contact.wa('Hi Michél, I just watched your 15s Showreel and would like to request my 1:1 Performance Audit.')
    : contact.wa('Hallo Michél, ich habe dein 15-Sekunden Showreel gesehen und möchte mein individuelles M³ Performance Audit anfragen.')

  return (
    <div
      className="showreel-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="M³ Performance Showreel"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="showreel-modal">
        {/* Header bar */}
        <div className="showreel-header">
          <div className="showreel-brand">
            <span className="showreel-brand-mark">M¹–M³</span>
            <span className="showreel-brand-title">SHOWREEL · 15S BRAND REEL</span>
          </div>
          <div className="showreel-header-actions">
            <button
              type="button"
              className={`showreel-btn-audio ${!isMuted ? 'active' : ''}`}
              onClick={toggleMute}
              title={isMuted ? (isEn ? 'Unmute sound effects' : 'Sound aktivieren') : (isEn ? 'Mute' : 'Stumm')}
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M11 5L6 9H2v6h4l5 4V5zM23 9l-6 6M17 9l6 6" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
              )}
              <span className="showreel-audio-label">{isMuted ? (isEn ? 'Sound OFF' : 'Sound AUS') : 'Sound ON'}</span>
            </button>
            <button
              type="button"
              className="showreel-btn-close"
              onClick={onClose}
              aria-label={isEn ? 'Close showreel' : 'Showreel schließen'}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Video Screen / Canvas Viewport */}
        <div className="showreel-viewport" onClick={togglePlay}>
          {/* Visual Background Layers */}
          {scenes.map((s, idx) => {
            const isSceneActive = idx === activeSceneIndex
            return (
              <div
                key={s.id}
                className={`showreel-scene-layer ${isSceneActive ? 'active' : ''}`}
                style={{
                  opacity: isSceneActive ? 1 : 0,
                  transition: 'opacity 0.4s ease-in-out',
                }}
              >
                {s.image ? (
                  <div className="showreel-image-container">
                    <img
                      src={s.image}
                      alt={s.alt || s.title}
                      className="showreel-scene-image"
                    />
                    <div className="showreel-scene-gradient" />
                  </div>
                ) : (
                  <div className="showreel-scene-solid">
                    <div className="showreel-grid-pattern" />
                  </div>
                )}
              </div>
            )
          })}

          {/* HUD Tech Overlay */}
          <div className="showreel-hud">
            <div className="showreel-hud-top">
              <span className="showreel-hud-badge">{currentScene.hudTag}</span>
              <span className="showreel-hud-time">
                00:{formattedSeconds}.{formattedMs} <small>/ 00:15</small>
              </span>
            </div>
            <div className="showreel-hud-lines" />
          </div>

          {/* Main Kinetic Typography / Center Stage */}
          <div className="showreel-stage">
            {activeSceneIndex === 0 && (
              <div className="showreel-kinetic showreel-kinetic--hook">
                <div className="showreel-k-eyebrow">M³ PERFORMANCE & GESUNDHEIT</div>
                <h2 className="showreel-k-title">
                  MOBILITY IS<br />
                  <span>PERFORMANCE.</span>
                </h2>
                <div className="showreel-underline-wrap">
                  <JockeyUnderline variant="codex" className="showreel-jockey-svg" />
                </div>
                <p className="showreel-k-sub">{currentScene.subtitle}</p>
              </div>
            )}

            {activeSceneIndex === 1 && (
              <div className="showreel-kinetic showreel-kinetic--athletic">
                <div className="showreel-k-badge-m2">SÄULE M² · BIOMECHANIK</div>
                <h2 className="showreel-k-title">TRAIN LIKE AN ATHLETE.</h2>
                <div className="showreel-underline-wrap">
                  <JockeyUnderline variant="lightning" className="showreel-jockey-svg" />
                </div>
                <p className="showreel-k-sub">{currentScene.subtitle}</p>
                <div className="showreel-hud-metrics">
                  <span>[ MOBILITY: 100% ]</span>
                  <span>[ PAIN-FREE: TRUE ]</span>
                  <span>[ LOAD CAPACITY: MAX ]</span>
                </div>
              </div>
            )}

            {activeSceneIndex === 2 && (
              <div className="showreel-kinetic showreel-kinetic--champion">
                <div className="showreel-k-badge-champion">
                  🏆 IDO WORLD CHAMPION 2006 / 2007
                </div>
                <h2 className="showreel-k-title">
                  {isEn ? 'WORLD CHAMPION CODEX.' : '30+ JAHRE BEWEGUNG.'}
                </h2>
                <div className="showreel-underline-wrap">
                  <JockeyUnderline variant="flow" className="showreel-jockey-svg" />
                </div>
                <p className="showreel-k-sub">{currentScene.subtitle}</p>
                <div className="showreel-quote-pill">
                  „Kein Dogma. Reine Körperbeherrschung.“
                </div>
              </div>
            )}

            {activeSceneIndex === 3 && (
              <div className="showreel-kinetic showreel-kinetic--system">
                <div className="showreel-k-eyebrow">DREI SÄULEN · EIN SYSTEM</div>
                <h2 className="showreel-k-title">
                  {isEn ? 'COACHING THAT TRANSFORMS.' : 'COACHING DAS TRANSFORMIERT.'}
                </h2>
                <div className="showreel-underline-wrap">
                  <JockeyUnderline variant="codex" className="showreel-jockey-svg" />
                </div>
                <div className="showreel-pillars-row">
                  <span className="pillar-tag pillar-tag--m1">M¹ Stoffwechsel</span>
                  <span className="pillar-tag pillar-tag--m2">M² Biomechanik</span>
                  <span className="pillar-tag pillar-tag--m3">M³ Mindset</span>
                </div>
                <p className="showreel-k-sub">{currentScene.subtitle}</p>
              </div>
            )}

            {activeSceneIndex === 4 && (
              <div className="showreel-kinetic showreel-kinetic--cta">
                <div className="showreel-logo-lockup">
                  <div className="showreel-logo-mark">M¹–M³</div>
                </div>
                <h2 className="showreel-k-title">UNLEASH YOUR POTENTIAL.</h2>
                <div className="showreel-underline-wrap">
                  <JockeyUnderline variant="codex" className="showreel-jockey-svg" />
                </div>
                <p className="showreel-k-pitch">
                  {isEn
                    ? 'Turn high-performance mobility & mindset into your unfair advantage.'
                    : 'Mache biomechanische Präzision & mentale Klarheit zu deinem Wettbewerbsvorteil.'}
                </p>
                <div className="showreel-cta-actions">
                  <a
                    href={waAuditUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="showreel-cta-btn showreel-cta-btn--primary"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="btn-icon">
                      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
                    </svg>
                    {isEn ? 'Book 1:1 Performance Audit' : '1:1 Performance Audit anfragen'}
                  </a>
                  <Link
                    to="/system-start"
                    className="showreel-cta-btn showreel-cta-btn--secondary"
                    onClick={() => onClose()}
                  >
                    {isEn ? 'System Start details →' : 'System Start entdecken →'}
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Big Play Pause Floating Indicator */}
          {!isPlaying && !isFinished && (
            <div className="showreel-play-overlay">
              <button
                type="button"
                className="showreel-big-play"
                onClick={(e) => {
                  e.stopPropagation()
                  togglePlay()
                }}
                aria-label="Play"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11.5-6.86a1 1 0 0 0 0-1.72L9.5 4.28a1 1 0 0 0-1.5.86z" />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Timeline & Scrubber Controls */}
        <div className="showreel-controls">
          <div className="showreel-timeline-wrap">
            <div
              className="showreel-timeline"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect()
                const clickX = e.clientX - rect.left
                const pct = Math.max(0, Math.min(1, clickX / rect.width))
                handleSeek(pct * TOTAL_DURATION)
              }}
            >
              <div
                className="showreel-progress-fill"
                style={{ width: `${progressPercent}%` }}
              />
              {/* Scene Markers */}
              {scenes.map((s) => {
                const markerLeft = (s.startTime / TOTAL_DURATION) * 100
                return (
                  <div
                    key={s.id}
                    className={`showreel-scene-marker ${currentTime >= s.startTime ? 'passed' : ''}`}
                    style={{ left: `${markerLeft}%` }}
                    title={s.label}
                  />
                )
              })}
            </div>
          </div>

          <div className="showreel-bottom-bar">
            <div className="showreel-playback-buttons">
              <button
                type="button"
                className="showreel-control-btn"
                onClick={togglePlay}
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? (
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11.5-6.86a1 1 0 0 0 0-1.72L9.5 4.28a1 1 0 0 0-1.5.86z" />
                  </svg>
                )}
              </button>
              <button
                type="button"
                className="showreel-control-btn"
                onClick={handleReplay}
                title={isEn ? 'Replay showreel' : 'Von vorne abspielen'}
                aria-label="Replay"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M1 4v6h6M23 20v-6h-6" />
                  <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
                </svg>
              </button>
              <div className="showreel-timer-display">
                <span className="time-curr">00:{formattedSeconds}</span>
                <span className="time-divider">/</span>
                <span className="time-total">00:15</span>
              </div>
            </div>

            <div className="showreel-scene-pills">
              {scenes.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  className={`showreel-scene-pill ${idx === activeSceneIndex ? 'active' : ''}`}
                  onClick={() => handleSeek(s.startTime)}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Highly Convertible Service Footer Pitch */}
        <div className="showreel-service-card">
          <div className="showreel-service-info">
            <span className="service-tag">
              {isEn ? 'HIGH-CONVERTIBLE SERVICE' : 'M³ HIGH-PERFORMANCE SERVICE'}
            </span>
            <h3 className="service-title">
              {isEn
                ? 'Ready to upgrade your physical and mental baseline?'
                : 'Bereit, deine Beweglichkeit & Belastbarkeit neu aufzustellen?'}
            </h3>
            <p className="service-desc">
              {isEn
                ? '15-minute 1:1 strategy audit directly with Michél. No dogma. Direct clarity.'
                : '15-minütige 1:1 Potenzial-Analyse direkt mit Michél. Kein Dogma. Klare Hebel.'}
            </p>
          </div>
          <div className="showreel-service-actions">
            <a
              href={waAuditUrl}
              target="_blank"
              rel="noreferrer"
              className="showreel-action-primary"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="icon-wa">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
              </svg>
              {isEn ? 'Claim WhatsApp Audit' : 'Kostenloses Audit via WhatsApp'}
            </a>
            <Link
              to="/system-start"
              className="showreel-action-secondary"
              onClick={onClose}
            >
              {isEn ? 'View System Start' : 'System Start Details'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
