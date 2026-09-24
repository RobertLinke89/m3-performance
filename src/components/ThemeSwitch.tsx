import { useUi } from '../copy'
import { useTheme, type ThemeMode } from '../theme'

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
          onClick={() => setMode(opt.id)}
        >
          {opt.label}
        </button>
      ))}
    </div>
  )
}
