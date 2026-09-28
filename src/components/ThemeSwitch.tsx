import { useUi } from '../copy'
import { useTheme, type ThemeMode } from '../theme'

function ThemeGlyph({ id }: { id: ThemeMode }) {
  if (id === 'day') {
    return (
      <svg viewBox="0 0 24 24" className="theme-glyph" aria-hidden>
        <circle cx="12" cy="12" r="4" fill="currentColor" />
        <path
          d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.1 5.1l1.6 1.6M17.3 17.3l1.6 1.6M5.1 18.9l1.6-1.6M17.3 6.7l1.6-1.6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    )
  }
  if (id === 'night') {
    return (
      <svg viewBox="0 0 24 24" className="theme-glyph" aria-hidden>
        <path
          d="M18.5 14.2A7.2 7.2 0 0 1 9.8 5.5 7.5 7.5 0 1 0 18.5 14.2Z"
          fill="currentColor"
        />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" className="theme-glyph" aria-hidden>
      <rect x="3.5" y="4.5" width="17" height="12" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M8 20h8M12 16.5V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="10.5" r="1.6" fill="currentColor" />
    </svg>
  )
}

export function ThemeSwitch() {
  const { mode, setMode } = useTheme()
  const t = useUi()
  const options: { id: ThemeMode; label: string }[] = [
    { id: 'day', label: t.day },
    { id: 'night', label: t.night },
    { id: 'system', label: t.system },
  ]

  return (
    <div className="theme-switch" role="group" aria-label={t.theme}>
      {options.map((opt) => (
        <button
          key={opt.id}
          type="button"
          className={mode === opt.id ? 'on' : undefined}
          aria-pressed={mode === opt.id}
          aria-label={opt.label}
          title={opt.label}
          onClick={() => setMode(opt.id)}
        >
          <ThemeGlyph id={opt.id} />
        </button>
      ))}
    </div>
  )
}
