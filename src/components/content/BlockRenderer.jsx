import { HeadingBlock } from './blocks/HeadingBlock'
import { ParagraphBlock } from './blocks/ParagraphBlock'
import { ListBlock } from './blocks/ListBlock'
import { CodeBlock } from './blocks/CodeBlock'
import { DiagramBlock } from './blocks/DiagramBlock'
import { TableBlock } from './blocks/TableBlock'
import { CalloutBlock } from './blocks/CalloutBlock'
import { QuizBlock } from './blocks/QuizBlock'
import { ImageBlock } from './blocks/ImageBlock'
import { HtmlBlock } from './blocks/HtmlBlock'
import { DividerBlock } from './blocks/DividerBlock'
import { Badge } from '@/components/ui/badge'

function BadgeBlock({ block }) {
  return <Badge variant={block.variant || 'default'} className="mb-4">{block.text}</Badge>
}

const RENDERERS = {
  heading:   HeadingBlock,
  paragraph: ParagraphBlock,
  list:      ListBlock,
  code:      CodeBlock,
  diagram:   DiagramBlock,
  table:     TableBlock,
  callout:   CalloutBlock,
  quiz:      QuizBlock,
  image:     ImageBlock,
  html:      HtmlBlock,
  divider:   DividerBlock,
  badge:     BadgeBlock,
}

export function BlockRenderer({ blocks }) {
  if (!blocks?.length) return null
  return (
    <div>
      {blocks.map((block, i) => {
        const Component = RENDERERS[block.type]
        if (!Component) return <p key={i} className="text-red-500 text-sm">Unknown block type: {block.type}</p>
        return <Component key={i} block={block} />
      })}
    </div>
  )
}
