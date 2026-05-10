import { Suspense, lazy } from 'react'

const MermaidDiagram = lazy(() => import('../MermaidDiagram'))
const PlantUMLDiagram = lazy(() => import('../PlantUMLDiagram'))

function DiagramSkeleton() {
  return <div className="h-40 bg-muted/30 rounded-xl border border-border animate-pulse" />
}

export function DiagramBlock({ block }) {
  const label = block.label && (
    <p className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">
      {block.label}
    </p>
  )

  if (block.format === 'mermaid') {
    return (
      <figure className="mb-6">
        {label}
        <Suspense fallback={<DiagramSkeleton />}>
          <MermaidDiagram code={block.content} />
        </Suspense>
      </figure>
    )
  }

  if (block.format === 'plantuml') {
    return (
      <figure className="mb-6">
        {label}
        <Suspense fallback={<DiagramSkeleton />}>
          <PlantUMLDiagram code={block.content} />
        </Suspense>
      </figure>
    )
  }

  return (
    <figure className="mb-4">
      {label}
      <pre className="text-sm font-mono bg-muted border border-border rounded-lg p-4 overflow-x-auto whitespace-pre">
        {block.content}
      </pre>
    </figure>
  )
}
