import { useState, type ReactNode } from 'react'

interface BentoDisclosureProps {
  title: string
  subtitle?: string
  badge?: string
  children: ReactNode
  defaultOpen?: boolean
  className?: string
  theme?: 'light' | 'dark' | 'auto'
}

export function BentoDisclosure({
  title,
  subtitle,
  badge,
  children,
  defaultOpen = false,
  className = '',
  theme = 'auto',
}: BentoDisclosureProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div
      className={`bento-disclosure bento-disclosure--${theme} ${isOpen ? 'is-open' : ''} ${className}`}
    >
      <button
        type="button"
        className="bento-disclosure-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className="bento-disclosure-header">
          {badge && <span className="bento-disclosure-badge">{badge}</span>}
          <div className="bento-disclosure-title-group">
            <h3 className="bento-disclosure-title">{title}</h3>
            {subtitle && !isOpen && (
              <p className="bento-disclosure-teaser">{subtitle}</p>
            )}
          </div>
        </div>
        <span className="bento-disclosure-icon" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="bento-disclosure-chevron"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>

      <div className="bento-disclosure-body">
        <div className="bento-disclosure-inner">
          <div className="bento-disclosure-content">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
