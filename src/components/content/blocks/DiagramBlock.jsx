export function DiagramBlock({ block }) {
  return (
    <figure className="mb-4">
      {block.label && <p className="text-xs font-medium text-muted-foreground mb-1 uppercase tracking-wide">{block.label}</p>}
      <pre className="text-sm font-mono bg-muted border border-border rounded-lg p-4 overflow-x-auto whitespace-pre">
        {block.content}
      </pre>
    </figure>
  )
}
