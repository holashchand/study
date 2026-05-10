import { cn } from '@/lib/utils'
import { AlertTriangle } from 'lucide-react'

const CHAPTER_ACCENT = [
  'border-l-violet-500', 'border-l-blue-500', 'border-l-emerald-500',
  'border-l-amber-500', 'border-l-rose-500', 'border-l-indigo-500',
  'border-l-cyan-500', 'border-l-fuchsia-500', 'border-l-rose-400', 'border-l-indigo-400',
]

function ChapterBlock({ chapter, accentClass }) {
  return (
    <div className={cn('border-l-4 pl-4 py-1', accentClass)}>
      {/* Chapter title */}
      <h2 className="text-sm font-black text-foreground mb-3">
        <span className="text-muted-foreground font-mono text-xs mr-2">Ch.{chapter.num}</span>
        {chapter.title}
      </h2>

      {/* Key concepts — 2-col tight grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 mb-3">
        {chapter.keyPoints.map((point, i) => (
          <div key={i} className="flex items-start gap-1.5">
            <span className="text-sm shrink-0 leading-none mt-0.5">{point.icon}</span>
            <div className="min-w-0">
              <span className="text-xs font-bold text-foreground">{point.title}: </span>
              <span className="text-xs text-muted-foreground leading-snug">{point.text}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Quick facts — inline tags */}
      <div className="flex flex-wrap gap-1 mb-2.5">
        {chapter.quickFacts.map((fact, i) => (
          <span key={i} className="inline-block bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] text-muted-foreground leading-snug max-w-xs truncate" title={fact}>
            {fact}
          </span>
        ))}
      </div>

      {/* Remember this — compact inline warnings */}
      <div className="flex flex-col gap-1">
        {chapter.rememberThis.map((item, i) => (
          <div key={i} className="flex items-start gap-1.5">
            <AlertTriangle className="h-3 w-3 text-amber-500 shrink-0 mt-0.5" />
            <span className="text-[11px] font-medium text-amber-800 dark:text-amber-300 leading-snug">{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function CourseShortNotesView({ notes }) {
  return (
    <div className="max-w-5xl mx-auto px-6 py-6">
      {/* Minimal header */}
      <div className="mb-6 pb-4 border-b border-border">
        <h1 className="text-lg font-black text-foreground">{notes.title}</h1>
        <p className="text-xs text-muted-foreground mt-0.5">{notes.chapters.length} chapters · scroll to read all</p>
      </div>

      {/* All chapters in a two-column masonry grid */}
      <div className="columns-1 md:columns-2 gap-8 space-y-0">
        {notes.chapters.map((chapter, i) => (
          <div key={chapter.num} className="break-inside-avoid mb-8">
            <ChapterBlock chapter={chapter} accentClass={CHAPTER_ACCENT[i % CHAPTER_ACCENT.length]} />
          </div>
        ))}
      </div>
    </div>
  )
}
