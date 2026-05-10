// Shared inline markdown renderer: **bold**, `code`, _italic_
export function renderInline(text) {
  if (!text) return null
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`|_[^_]+_)/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**'))
      return <strong key={i} className="font-semibold">{part.slice(2, -2)}</strong>
    if (part.startsWith('`') && part.endsWith('`'))
      return <code key={i} className="text-sm font-mono bg-muted px-1.5 py-0.5 rounded text-primary">{part.slice(1, -1)}</code>
    if (part.startsWith('_') && part.endsWith('_'))
      return <em key={i}>{part.slice(1, -1)}</em>
    return part
  })
}
