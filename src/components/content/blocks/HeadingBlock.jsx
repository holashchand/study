import { cn } from '@/lib/utils'

export function HeadingBlock({ block }) {
  const { level, text } = block
  const Tag = `h${level}`
  const styles = {
    2: 'text-lg font-semibold border-b border-border pb-1.5 mt-7 mb-3',
    3: 'text-base font-semibold mt-5 mb-2',
    4: 'text-sm font-semibold uppercase tracking-wide mt-4 mb-2 text-muted-foreground',
  }
  return <Tag className={cn(styles[level] || styles[2])}>{text}</Tag>
}
