import type { SVGProps } from 'react'

interface JockeyUnderlineProps extends SVGProps<SVGSVGElement> {
  variant?: 'codex' | 'lightning' | 'flow'
  color?: string
}

/**
 * Breakdance Codex Jockey Underline:
 * A signature dynamic breakdance / b-boy scribble underline stroke
 * that captures fluid momentum, sharp whip returns, and explosive athletic energy.
 */
export function JockeyUnderline({
  variant = 'codex',
  color = 'currentColor',
  className = '',
  ...props
}: JockeyUnderlineProps) {
  if (variant === 'lightning') {
    return (
      <svg
        viewBox="0 0 240 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`jockey-underline jockey-underline--lightning ${className}`}
        aria-hidden="true"
        preserveAspectRatio="none"
        {...props}
      >
        <path
          d="M3 14.5C35 13.5 70 8 105 7C140 6 185 10.5 237 3.5M160 5.5L190 12L150 14L225 18L237 20"
          stroke={color}
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="jockey-path"
        />
      </svg>
    )
  }

  if (variant === 'flow') {
    return (
      <svg
        viewBox="0 0 280 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`jockey-underline jockey-underline--flow ${className}`}
        aria-hidden="true"
        preserveAspectRatio="none"
        {...props}
      >
        <path
          d="M4 14C30 8 70 4 110 12C140 18 175 18 205 11C235 4 255 12 276 9"
          stroke={color}
          strokeWidth="2.8"
          strokeLinecap="round"
          className="jockey-path jockey-path--flow1"
        />
        <path
          d="M20 20C65 14 105 24 150 20C195 16 230 22 268 18"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.65"
          className="jockey-path jockey-path--flow2"
        />
      </svg>
    )
  }

  // Default 'codex': The authentic B-Boy tag / jockey scribble with signature loop, whip, and baseline
  return (
    <svg
      viewBox="0 0 320 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`jockey-underline jockey-underline--codex ${className}`}
      aria-hidden="true"
      preserveAspectRatio="none"
      {...props}
    >
      <defs>
        <linearGradient id="jockeyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--gold, #d97706)" />
          <stop offset="50%" stopColor="var(--gold-2, #f59e0b)" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
      </defs>
      {/* Primary whip scribble line */}
      <path
        d="M6 18C42 16.5 78 12 115 13.5C148 14.8 178 21.2 210 17C235 13.8 260 8.5 285 10C296 10.6 308 13.2 314 15.5C282 17 248 19.5 215 21C172 23 128 24.5 85 24C60 23.7 32 23 12 21"
        stroke="url(#jockeyGrad)"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="jockey-path jockey-path--main"
      />
      {/* Secondary accent flourish / b-boy codex hook */}
      <path
        d="M245 8C265 6 290 8 312 6.5M185 24.5C220 25.5 255 24 290 23"
        stroke="url(#jockeyGrad)"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.75"
        className="jockey-path jockey-path--sub"
      />
    </svg>
  )
}
