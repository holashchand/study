import { cn } from '@/lib/utils'
import { AlertTriangle, BookOpen, CheckCircle, Zap } from 'lucide-react'

const ACCENTS = [
  { grad: 'from-violet-500 to-purple-600',  light: 'bg-violet-50 dark:bg-violet-950/40',  border: 'border-violet-200 dark:border-violet-800',  text: 'text-violet-700 dark:text-violet-300',  num: 'bg-gradient-to-br from-violet-500 to-purple-600' },
  { grad: 'from-blue-500 to-cyan-600',      light: 'bg-blue-50 dark:bg-blue-950/40',      border: 'border-blue-200 dark:border-blue-800',      text: 'text-blue-700 dark:text-blue-300',      num: 'bg-gradient-to-br from-blue-500 to-cyan-600' },
  { grad: 'from-emerald-500 to-teal-600',   light: 'bg-emerald-50 dark:bg-emerald-950/40', border: 'border-emerald-200 dark:border-emerald-800', text: 'text-emerald-700 dark:text-emerald-300', num: 'bg-gradient-to-br from-emerald-500 to-teal-600' },
  { grad: 'from-amber-500 to-orange-600',   light: 'bg-amber-50 dark:bg-amber-950/40',    border: 'border-amber-200 dark:border-amber-800',    text: 'text-amber-700 dark:text-amber-300',    num: 'bg-gradient-to-br from-amber-500 to-orange-600' },
  { grad: 'from-rose-500 to-pink-600',      light: 'bg-rose-50 dark:bg-rose-950/40',      border: 'border-rose-200 dark:border-rose-800',      text: 'text-rose-700 dark:text-rose-300',      num: 'bg-gradient-to-br from-rose-500 to-pink-600' },
  { grad: 'from-indigo-500 to-blue-700',    light: 'bg-indigo-50 dark:bg-indigo-950/40',  border: 'border-indigo-200 dark:border-indigo-800',  text: 'text-indigo-700 dark:text-indigo-300',  num: 'bg-gradient-to-br from-indigo-500 to-blue-700' },
  { grad: 'from-cyan-500 to-sky-600',       light: 'bg-cyan-50 dark:bg-cyan-950/40',      border: 'border-cyan-200 dark:border-cyan-800',      text: 'text-cyan-700 dark:text-cyan-300',      num: 'bg-gradient-to-br from-cyan-500 to-sky-600' },
  { grad: 'from-fuchsia-500 to-purple-700', light: 'bg-fuchsia-50 dark:bg-fuchsia-950/40', border: 'border-fuchsia-200 dark:border-fuchsia-800', text: 'text-fuchsia-700 dark:text-fuchsia-300', num: 'bg-gradient-to-br from-fuchsia-500 to-purple-700' },
  { grad: 'from-teal-500 to-emerald-600',   light: 'bg-teal-50 dark:bg-teal-950/40',      border: 'border-teal-200 dark:border-teal-800',      text: 'text-teal-700 dark:text-teal-300',      num: 'bg-gradient-to-br from-teal-500 to-emerald-600' },
  { grad: 'from-orange-500 to-red-600',     light: 'bg-orange-50 dark:bg-orange-950/40',  border: 'border-orange-200 dark:border-orange-800',  text: 'text-orange-700 dark:text-orange-300',  num: 'bg-gradient-to-br from-orange-500 to-red-600' },
]

function ChapterBlock({ chapter, idx }) {
  const a = ACCENTS[idx % ACCENTS.length]

  return (
    <div className={cn('rounded-xl border overflow-hidden', a.border)}>
      {/* Colored top bar */}
      <div className={cn('h-1.5 bg-gradient-to-r', a.grad)} />

      <div className={cn('p-4', a.light)}>
        {/* Chapter heading */}
        <div className="flex items-center gap-2.5 mb-3">
          <span className={cn('flex items-center justify-center h-7 w-7 rounded-lg text-white text-xs font-black shrink-0', a.num)}>
            {chapter.num}
          </span>
          <h2 className="text-sm font-black text-foreground leading-snug">{chapter.title}</h2>
        </div>

        {/* Key concepts */}
        <div className="grid grid-cols-1 gap-2 mb-3">
          {chapter.keyPoints.map((point, i) => (
            <div key={i} className="flex items-start gap-2 px-3 py-2 rounded-lg bg-background/60 border border-border/60">
              <span className="text-base shrink-0 leading-none mt-0.5">{point.icon}</span>
              <div className="min-w-0">
                <span className={cn('text-xs font-bold', a.text)}>{point.title}: </span>
                <span className="text-xs text-muted-foreground leading-snug">{point.text}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick facts */}
        {chapter.quickFacts.length > 0 && (
          <div className="mb-3 space-y-1.5">
            <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 mb-1.5">Quick Facts</p>
            {chapter.quickFacts.map((fact, i) => (
              <div key={i} className="flex items-start gap-2 text-xs">
                <CheckCircle className={cn('h-3 w-3 shrink-0 mt-0.5', a.text)} />
                <span className="text-foreground/75 leading-relaxed">{fact}</span>
              </div>
            ))}
          </div>
        )}

        {/* Remember this */}
        {chapter.rememberThis.length > 0 && (
          <div className="space-y-1.5">
            <p className="text-[10px] font-black uppercase tracking-widest text-amber-600/70 mb-1.5">Remember</p>
            {chapter.rememberThis.map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-xs px-2.5 py-1.5 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40">
                <AlertTriangle className="h-3 w-3 text-amber-500 shrink-0 mt-0.5" />
                <span className="font-medium text-amber-800 dark:text-amber-300 leading-snug">{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export function CourseShortNotesView({ notes }) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-6">

      {/* Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 dark:from-slate-900 dark:to-black text-white px-6 py-5 mb-8">
        <div className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        <div className="relative flex items-center gap-4">
          <div className="h-11 w-11 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
            <Zap className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-0.5">Course Notes</p>
            <h1 className="text-lg font-black">{notes.title}</h1>
            <p className="text-xs text-white/60 mt-0.5">{notes.chapters.length} chapters &nbsp;·&nbsp; scroll to review all</p>
          </div>
        </div>
      </div>

      {/* Chapter grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {notes.chapters.map((chapter, i) => (
          <ChapterBlock key={chapter.num} chapter={chapter} idx={i} />
        ))}
      </div>

    </div>
  )
}
