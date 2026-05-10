import { cn } from '@/lib/utils'
import { Zap, CheckCircle, AlertTriangle, Lightbulb } from 'lucide-react'

const THEME = {
  violet:  { grad: 'from-violet-500 to-purple-600',  light: 'bg-violet-50 dark:bg-violet-950/50',  border: 'border-violet-200 dark:border-violet-800',  iconBg: 'bg-violet-100 dark:bg-violet-900/50',  text: 'text-violet-700 dark:text-violet-300',  num: 'text-violet-500 dark:text-violet-400' },
  blue:    { grad: 'from-blue-500 to-cyan-600',      light: 'bg-blue-50 dark:bg-blue-950/50',      border: 'border-blue-200 dark:border-blue-800',      iconBg: 'bg-blue-100 dark:bg-blue-900/50',      text: 'text-blue-700 dark:text-blue-300',      num: 'text-blue-500 dark:text-blue-400' },
  emerald: { grad: 'from-emerald-500 to-teal-600',   light: 'bg-emerald-50 dark:bg-emerald-950/50', border: 'border-emerald-200 dark:border-emerald-800', iconBg: 'bg-emerald-100 dark:bg-emerald-900/50', text: 'text-emerald-700 dark:text-emerald-300', num: 'text-emerald-500 dark:text-emerald-400' },
  amber:   { grad: 'from-amber-500 to-orange-600',   light: 'bg-amber-50 dark:bg-amber-950/50',    border: 'border-amber-200 dark:border-amber-800',    iconBg: 'bg-amber-100 dark:bg-amber-900/50',    text: 'text-amber-700 dark:text-amber-300',    num: 'text-amber-500 dark:text-amber-400' },
  rose:    { grad: 'from-rose-500 to-pink-600',      light: 'bg-rose-50 dark:bg-rose-950/50',      border: 'border-rose-200 dark:border-rose-800',      iconBg: 'bg-rose-100 dark:bg-rose-900/50',      text: 'text-rose-700 dark:text-rose-300',      num: 'text-rose-500 dark:text-rose-400' },
  indigo:  { grad: 'from-indigo-500 to-blue-700',    light: 'bg-indigo-50 dark:bg-indigo-950/50',  border: 'border-indigo-200 dark:border-indigo-800',  iconBg: 'bg-indigo-100 dark:bg-indigo-900/50',  text: 'text-indigo-700 dark:text-indigo-300',  num: 'text-indigo-500 dark:text-indigo-400' },
  cyan:    { grad: 'from-cyan-500 to-sky-600',       light: 'bg-cyan-50 dark:bg-cyan-950/50',      border: 'border-cyan-200 dark:border-cyan-800',      iconBg: 'bg-cyan-100 dark:bg-cyan-900/50',      text: 'text-cyan-700 dark:text-cyan-300',      num: 'text-cyan-500 dark:text-cyan-400' },
  fuchsia: { grad: 'from-fuchsia-500 to-purple-700', light: 'bg-fuchsia-50 dark:bg-fuchsia-950/50', border: 'border-fuchsia-200 dark:border-fuchsia-800', iconBg: 'bg-fuchsia-100 dark:bg-fuchsia-900/50', text: 'text-fuchsia-700 dark:text-fuchsia-300', num: 'text-fuchsia-500 dark:text-fuchsia-400' },
}

export function ShortNotesView({ notes }) {
  const c = THEME[notes.color] || THEME.violet

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 space-y-8">

      {/* ── HEADER ── */}
      <div className={cn('relative overflow-hidden rounded-2xl bg-gradient-to-br text-white', c.grad)}>
        <div className="absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-white/10 -mr-8 -mb-8 blur-2xl" />
        <div className="relative px-6 py-5">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0 mt-0.5">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-1">Quick Reference</p>
              <h1 className="text-lg font-black text-white leading-tight">{notes.title}</h1>
              <div className="flex gap-3 mt-2">
                <StatPill count={notes.keyPoints.length} label="concepts" />
                <StatPill count={notes.quickFacts.length} label="facts" />
                <StatPill count={notes.rememberThis.length} label="reminders" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── KEY CONCEPTS ── */}
      <section>
        <SectionHeader
          icon={<Lightbulb className="h-4 w-4" />}
          label="Key Concepts"
          gradient={c.grad}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
          {notes.keyPoints.map((point, i) => (
            <div key={i} className={cn(
              'rounded-xl border overflow-hidden',
              c.border
            )}>
              <div className={cn('h-1 bg-gradient-to-r', c.grad)} />
              <div className={cn('p-4', c.light)}>
                <div className="flex items-start gap-3">
                  <div className={cn('h-9 w-9 rounded-lg text-xl flex items-center justify-center shrink-0', c.iconBg)}>
                    {point.icon}
                  </div>
                  <div className="min-w-0">
                    <p className={cn('text-xs font-black leading-tight mb-1', c.text)}>{point.title}</p>
                    <p className="text-xs text-foreground/75 leading-relaxed">{point.text}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── QUICK FACTS ── */}
      <section>
        <SectionHeader
          icon={<CheckCircle className="h-4 w-4" />}
          label="Quick Facts"
          gradient="from-emerald-500 to-teal-600"
        />
        <div className="mt-4 rounded-xl border border-border overflow-hidden bg-card">
          {notes.quickFacts.map((fact, i) => (
            <div key={i} className={cn(
              'flex items-start gap-4 px-4 py-3',
              i % 2 === 0 ? 'bg-muted/30' : 'bg-transparent',
              i > 0 && 'border-t border-border/40'
            )}>
              <span className={cn(
                'text-xs font-black tabular-nums shrink-0 mt-0.5 w-6 text-right',
                c.num
              )}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-sm text-foreground/80 leading-relaxed">{fact}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── REMEMBER THIS ── */}
      <section>
        <SectionHeader
          icon={<AlertTriangle className="h-4 w-4" />}
          label="Remember This"
          gradient="from-amber-500 to-orange-600"
        />
        <div className="mt-4 space-y-2.5">
          {notes.rememberThis.map((item, i) => (
            <div key={i} className="flex items-start gap-3 px-4 py-3.5 rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/40">
              <div className="h-5 w-5 rounded-full bg-amber-200 dark:bg-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                <AlertTriangle className="h-3 w-3 text-amber-700 dark:text-amber-300" />
              </div>
              <p className="text-sm font-medium text-amber-900 dark:text-amber-100 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

function StatPill({ count, label }) {
  return (
    <span className="inline-flex items-center gap-1 text-xs text-white/70">
      <span className="font-black text-white">{count}</span>
      <span>{label}</span>
    </span>
  )
}

function SectionHeader({ icon, label, gradient }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className={cn('h-7 w-7 rounded-lg bg-gradient-to-br flex items-center justify-center text-white shrink-0', gradient)}>
        {icon}
      </div>
      <h2 className="text-sm font-black text-foreground uppercase tracking-wide">{label}</h2>
      <div className={cn('flex-1 h-px bg-gradient-to-r to-transparent', gradient.split(' ')[0].replace('from-', 'from-') + '/20')} />
    </div>
  )
}
