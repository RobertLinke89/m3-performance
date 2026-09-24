import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

export type Theme = 'day' | 'night'
export type ThemeMode = 'day' | 'night' | 'system'

const STORAGE_KEY = 'm3-theme'

function systemTheme(): Theme {
  if (typeof window === 'undefined') return 'night'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day'
}

function readMode(): ThemeMode {
  if (typeof window === 'undefined') return 'system'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'day' || stored === 'night' || stored === 'system') return stored
  return 'system'
}

function resolve(mode: ThemeMode): Theme {
  return mode === 'system' ? systemTheme() : mode
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme
}

const ThemeContext = createContext<{
  theme: Theme
  mode: ThemeMode
  setMode: (mode: ThemeMode) => void
}>({
  theme: 'night',
  mode: 'system',
  setMode: () => undefined,
})

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<ThemeMode>(readMode)
  const [theme, setTheme] = useState<Theme>(() => resolve(readMode()))

  useEffect(() => {
    const next = resolve(mode)
    setTheme(next)
    applyTheme(next)
    window.localStorage.setItem(STORAGE_KEY, mode)

    if (mode !== 'system') return
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => {
      const resolved = systemTheme()
      setTheme(resolved)
      applyTheme(resolved)
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [mode])

  const setMode = useCallback((next: ThemeMode) => {
    setModeState(next)
  }, [])

  const value = useMemo(() => ({ theme, mode, setMode }), [theme, mode, setMode])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  return useContext(ThemeContext)
}
