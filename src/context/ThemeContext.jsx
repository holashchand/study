import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext(null)

export const CODE_THEMES = [
  { key: 'one-dark',        label: 'One Dark',       dark: true  },
  { key: 'vsc-dark',        label: 'VS Code Dark',   dark: true  },
  { key: 'dracula',         label: 'Dracula',        dark: true  },
  { key: 'nord',            label: 'Nord',           dark: true  },
  { key: 'github-light',    label: 'GitHub Light',   dark: false },
  { key: 'material-light',  label: 'Material Light', dark: false },
  { key: 'solarized-light', label: 'Solarized',      dark: false },
]

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'system'
  })

  const [codeTheme, setCodeThemeState] = useState(() => {
    return localStorage.getItem('codeTheme') || 'one-dark'
  })

  const setCodeTheme = (key) => {
    localStorage.setItem('codeTheme', key)
    setCodeThemeState(key)
  }

  useEffect(() => {
    const root = document.documentElement
    const applyDark = () => root.classList.add('dark')
    const applyLight = () => root.classList.remove('dark')

    if (theme === 'dark') {
      applyDark()
    } else if (theme === 'light') {
      applyLight()
    } else {
      // system
      const mq = window.matchMedia('(prefers-color-scheme: dark)')
      mq.matches ? applyDark() : applyLight()
      const handler = (e) => e.matches ? applyDark() : applyLight()
      mq.addEventListener('change', handler)
      return () => mq.removeEventListener('change', handler)
    }

    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, codeTheme, setCodeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
