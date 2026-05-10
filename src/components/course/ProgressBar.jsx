import { cn } from '@/lib/utils'

export function ProgressBar({ current, total, label }) {
  const pct = total > 0 ? Math.round((current / total) * 100) : 0
  return (
    <div className="px-4 py-2 border-b border-border bg-muted/30">
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs text-muted-foreground">{label || 'Progress'}</span>
        <span className="text-xs font-mono text-muted-foreground">{pct}%</span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}
