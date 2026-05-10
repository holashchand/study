import { cn } from '@/lib/utils'
import { Zap, CheckCircle, AlertCircle, Lightbulb } from 'lucide-react'

const COLOR_MAP = {
  violet: { from: 'from-violet-500', to: 'to-purple-600', light: 'bg-violet-50 dark:bg-violet-950/50', border: 'border-violet-200 dark:border-violet-800', text: 'text-violet-700 dark:text-violet-300', badge: 'bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300' },
  blue:   { from: 'from-blue-500',   to: 'to-cyan-600',   light: 'bg-blue-50   dark:bg-blue-950/50',   border: 'border-blue-200   dark:border-blue-800',   text: 'text-blue-700   dark:text-blue-300',   badge: 'bg-blue-100   text-blue-800   dark:bg-blue-900/40   dark:text-blue-300' },
  emerald:{ from: 'from-emerald-500',to: 'to-teal-600',   light: 'bg-emerald-50 dark:bg-emerald-950/50',border: 'border-emerald-200 dark:border-emerald-800',text: 'text-emerald-700 dark:text-emerald-300',badge: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300' },
  amber:  { from: 'from-amber-500',  to: 'to-orange-600', light: 'bg-amber-50  dark:bg-amber-950/50',  border: 'border-amber-200  dark:border-amber-800',  text: 'text-amber-700  dark:text-amber-300',  badge: 'bg-amber-100  text-amber-800  dark:bg-amber-900/40  dark:text-amber-300' },
  rose:   { from: 'from-rose-500',   to: 'to-pink-600',   light: 'bg-rose-50   dark:bg-rose-950/50',   border: 'border-rose-200   dark:border-rose-800',   text: 'text-rose-700   dark:text-rose-300',   badge: 'bg-rose-100   text-rose-800   dark:bg-rose-900/40   dark:text-rose-300' },
  indigo: { from: 'from-indigo-500', to: 'to-blue-700',   light: 'bg-indigo-50 dark:bg-indigo-950/50', border: 'border-indigo-200 dark:border-indigo-800', text: 'text-indigo-700 dark:text-indigo-300', badge: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300' },
  cyan:   { from: 'from-cyan-500',   to: 'to-sky-600',    light: 'bg-cyan-50   dark:bg-cyan-950/50',   border: 'border-cyan-200   dark:border-cyan-800',   text: 'text-cyan-700   dark:text-cyan-300',   badge: 'bg-cyan-100   text-cyan-800   dark:bg-cyan-900/40   dark:text-cyan-300' },
  fuchsia:{ from: 'from-fuchsia-500',to: 'to-purple-700', light: 'bg-fuchsia-50 dark:bg-fuchsia-950/50',border: 'border-fuchsia-200 dark:border-fuchsia-800',text: 'text-fuchsia-700 dark:text-fuchsia-300',badge: 'bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900/40 dark:text-fuchsia-300' },
}

export function ShortNotesView({ notes }) {
  const colors = COLOR_MAP[notes.color] || COLOR_MAP.violet

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="mb-8">
        <div className="relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 text-white shadow-lg">
          <div className="absolute inset-0 opacity-[0.06]"
            style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
          <div className={cn('absolute -bottom-10 -right-10 h-40 w-40 rounded-full blur-3xl opacity-20 bg-gradient-to-br', colors.from, colors.to)} />
          <div className="relative flex items-center gap-4">
            <div className={cn('h-12 w-12 rounded-2xl flex items-center justify-center bg-gradient-to-br shadow-sm', colors.from, colors.to)}>
              <Zap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-black text-white">{notes.title}</h1>
              <p className="text-sm text-white/60">Key concepts at a glance</p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Points Grid */}
      <section className="mb-8">
        <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-4 flex items-center gap-2">
          <Lightbulb className="h-4 w-4" /> Key Concepts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {notes.keyPoints.map((point, i) => (
            <div key={i} className={cn(
              'rounded-xl border p-4 transition-shadow hover:shadow-md',
              colors.light, colors.border,
            )}>
              <div className="flex items-start gap-3">
                <span className="text-xl flex-shrink-0 mt-0.5">{point.icon}</span>
                <div>
                  <h3 className={cn('text-sm font-bold mb-1', colors.text)}>{point.title}</h3>
                  <p className="text-xs text-foreground/80 leading-relaxed">{point.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Facts */}
      <section className="mb-8">
        <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-4 flex items-center gap-2">
          <CheckCircle className="h-4 w-4" /> Quick Facts
        </h2>
        <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
          {notes.quickFacts.map((fact, i) => (
            <div key={i} className={cn(
              'flex items-start gap-3 px-4 py-3 text-sm',
              i % 2 === 0 ? 'bg-muted/30' : 'bg-background',
              i !== 0 && 'border-t border-border',
            )}>
              <span className={cn('flex-shrink-0 h-1.5 w-1.5 rounded-full mt-2', `bg-gradient-to-br ${colors.from}`)} />
              <span className="text-foreground leading-relaxed">{fact}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Remember This */}
      <section>
        <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-4 flex items-center gap-2">
          <AlertCircle className="h-4 w-4" /> Remember This
        </h2>
        <div className="space-y-2">
          {notes.rememberThis.map((item, i) => (
            <div key={i} className="flex items-start gap-3 rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/40 px-4 py-3">
              <span className="text-amber-500 flex-shrink-0 font-black text-base mt-0.5">!</span>
              <p className="text-sm font-medium text-amber-900 dark:text-amber-200 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
