import { useEffect, useState, useRef } from 'react'
import mermaid from 'mermaid'
import { useTheme } from '@/context/ThemeContext'

let counter = 0

export default function MermaidDiagram({ code }) {
  const [svg, setSvg] = useState('')
  const [error, setError] = useState(null)
  const { theme } = useTheme()
  const idRef = useRef(`mermaid-${++counter}`)

  useEffect(() => {
    if (!code) return
    setError(null)

    const isDark =
      theme === 'dark' ||
      (theme === 'system' && document.documentElement.classList.contains('dark'))

    mermaid.initialize({
      startOnLoad: false,
      theme: isDark ? 'dark' : 'neutral',
      securityLevel: 'loose',
      fontFamily: '"Inter", ui-sans-serif, system-ui, sans-serif',
      fontSize: 14,
      flowchart: { htmlLabels: true, curve: 'basis' },
      sequence: { actorMargin: 50 },
    })

    // Increment ID so re-renders get a fresh container
    idRef.current = `mermaid-${++counter}`

    mermaid
      .render(idRef.current, code)
      .then(({ svg: rendered }) => {
        setSvg(rendered)
        setError(null)
      })
      .catch(err => {
        setError(err?.message ?? 'Failed to render diagram')
        setSvg('')
      })
  }, [code, theme])

  if (error) {
    return (
      <div className="text-sm p-4 bg-destructive/10 rounded-lg border border-destructive/30">
        <p className="font-semibold text-destructive">Diagram render error</p>
        <pre className="text-xs mt-1 text-muted-foreground whitespace-pre-wrap">{error}</pre>
      </div>
    )
  }

  if (!svg) {
    return <div className="h-40 bg-muted/30 rounded-xl border border-border animate-pulse" />
  }

  return (
    <div
      className="flex justify-center overflow-x-auto py-6 px-4 bg-muted/20 rounded-xl border border-border [&>svg]:max-w-full [&>svg]:h-auto"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}
