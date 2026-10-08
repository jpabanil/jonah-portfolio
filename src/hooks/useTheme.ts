import { useCallback, useEffect, useState } from 'react'

export type Theme = 'dark' | 'light'

const themeColor: Record<Theme, string> = {
  dark: '#0B0F17',
  light: '#F8FAFC',
}

function readStoredTheme(): Theme | null {
  try {
    const stored = localStorage.getItem('theme')
    if (stored === 'light' || stored === 'dark') return stored
  } catch {
    // Storage can throw in private mode.
  }
  return null
}

function systemTheme(): Theme {
  if (typeof window === 'undefined') return 'dark'
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

function getInitialTheme(): Theme {
  if (typeof document === 'undefined') return 'dark'
  const current = document.documentElement.dataset.theme
  if (current === 'light' || current === 'dark') return current
  return readStoredTheme() ?? systemTheme()
}

function applyTheme(theme: Theme) {
  const root = document.documentElement
  root.dataset.theme = theme
  root.style.backgroundColor = themeColor[theme]
  const meta = document.querySelector('meta[name="theme-color"]')
  meta?.setAttribute('content', themeColor[theme])
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: light)')
    const onChange = () => {
      if (readStoredTheme()) return
      setTheme(media.matches ? 'light' : 'dark')
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next: Theme = current === 'dark' ? 'light' : 'dark'
      try {
        localStorage.setItem('theme', next)
      } catch {
        // Storage can throw in private mode.
      }
      return next
    })
  }, [])

  return { theme, toggleTheme }
}
