import { useEffect, useState } from 'react'

export default function PlantUMLDiagram({ code }) {
  const [svg, setSvg] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!code) return
    setLoading(true)
    setError(null)

    fetch('https://kroki.io/plantuml/svg', {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: code,
    })
      .then(res => {
        if (!res.ok) throw new Error(`Kroki responded with HTTP ${res.status}`)
        return res.text()
      })
      .then(svgText => {
        setSvg(svgText)
      })
      .catch(err => {
        setError(err?.message ?? 'Failed to render PlantUML diagram')
      })
      .finally(() => setLoading(false))
  }, [code])

  if (loading) {
    return <div className="h-40 bg-muted/30 rounded-xl border border-border animate-pulse" />
  }

  if (error) {
    return (
      <div className="text-sm p-4 bg-destructive/10 rounded-lg border border-destructive/30">
        <p className="font-semibold text-destructive">PlantUML render error</p>
        <p className="text-xs mt-1 text-muted-foreground">{error}</p>
      </div>
    )
  }

  return (
    <div
      className="flex justify-center overflow-x-auto py-6 px-4 bg-muted/20 rounded-xl border border-border [&>svg]:max-w-full [&>svg]:h-auto"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}
