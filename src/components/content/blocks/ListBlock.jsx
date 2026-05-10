import { renderInline } from '@/lib/renderInline'

export function ListBlock({ block }) {
  const Tag = block.ordered ? 'ol' : 'ul'
  return (
    <Tag className={`mb-4 pl-6 space-y-1.5 ${block.ordered ? 'list-decimal' : 'list-disc'}`}>
      {block.items.map((item, i) => (
        <li key={i} className="text-base leading-7">{renderInline(item)}</li>
      ))}
    </Tag>
  )
}
