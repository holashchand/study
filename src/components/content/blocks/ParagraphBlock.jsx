import { renderInline } from '@/lib/renderInline'

export function ParagraphBlock({ block }) {
  return (
    <p className="text-base leading-7 mb-4 text-foreground">
      {renderInline(block.text)}
    </p>
  )
}
