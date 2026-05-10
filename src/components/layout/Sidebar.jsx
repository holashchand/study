import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'
import { BookOpen, PanelLeftClose, PanelLeftOpen, Brain, Sparkles, Zap } from 'lucide-react'

export function Sidebar({ sections, currentIdx, onNavigate, extras }) {
  const [collapsed, setCollapsed] = useState(false)
  const location = useLocation()

  // extras-only mode: currentIdx === -1 means we're on a chapter tool page (quiz/questions/notes)
  const extrasOnly = currentIdx === -1

  return (
    <aside className={cn(
      'hidden lg:flex flex-col shrink-0 border-r border-border bg-card transition-all duration-200',
      collapsed ? 'w-12' : 'w-56'
    )}>
      {/* ── HEADER ───────────────────────────────── */}
      <div className="flex items-center justify-between px-3 py-3 border-b border-border shrink-0">
        {!collapsed && (
          <div className="flex items-center gap-2 min-w-0">
            {extrasOnly
              ? <><Zap className="h-3.5 w-3.5 text-primary shrink-0" /><span className="text-xs font-semibold uppercase tracking-wider text-foreground truncate">Chapter Tools</span></>
              : <><BookOpen className="h-3.5 w-3.5 text-muted-foreground shrink-0" /><span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground truncate">Contents</span></>
            }
          </div>
        )}
        <button
          onClick={() => setCollapsed(c => !c)}
          className={cn(
            'flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground transition-colors shrink-0',
            collapsed && 'mx-auto'
          )}
          title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? <PanelLeftOpen className="h-4 w-4" /> : <PanelLeftClose className="h-4 w-4" />}
        </button>
      </div>

      {/* ── SECTIONS (chapter content mode only) ── */}
      {!extrasOnly && !collapsed && (
        <ScrollArea className="flex-1">
          <nav className="p-2">
            {sections.map((section, idx) => (
              <button
                key={section.id}
                onClick={() => onNavigate(idx)}
                className={cn(
                  'w-full text-left px-3 py-1.5 rounded-md text-xs transition-colors mb-0.5 leading-snug',
                  idx === currentIdx
                    ? 'bg-primary/10 text-primary font-semibold border-l-2 border-primary pl-[10px]'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
              >
                {section.title}
              </button>
            ))}
          </nav>
        </ScrollArea>
      )}

      {/* ── COLLAPSED DOTS (chapter content mode) ── */}
      {!extrasOnly && collapsed && (
        <div className="flex flex-col items-center gap-1.5 py-3 flex-1 overflow-hidden">
          {sections.map((_, idx) => (
            <button
              key={idx}
              onClick={() => { onNavigate(idx); setCollapsed(false) }}
              className={cn(
                'h-2 w-2 rounded-full transition-all',
                idx === currentIdx ? 'bg-primary scale-125' : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'
              )}
              title={sections[idx]?.title}
            />
          ))}
        </div>
      )}

      {/* ── CHAPTER TOOLS ────────────────────────── */}
      {extras && !collapsed && (
        <div className={cn('p-2 shrink-0', !extrasOnly && 'border-t border-border')}>
          {!extrasOnly && (
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground px-2 pt-1 pb-1.5">
              Chapter Tools
            </p>
          )}
          <div className="space-y-0.5">
            {extras.topQuestionsUrl && (
              <Link
                to={extras.topQuestionsUrl}
                className={cn(
                  'flex items-center gap-2.5 px-3 py-2 rounded-md text-xs font-semibold transition-colors',
                  location.hash.includes('top-questions')
                    ? 'bg-violet-100 text-violet-700 dark:bg-violet-950/60 dark:text-violet-300'
                    : 'text-muted-foreground hover:bg-violet-50 hover:text-violet-700 dark:hover:bg-violet-950/40 dark:hover:text-violet-300'
                )}
              >
                <Brain className="h-3.5 w-3.5 shrink-0 text-violet-500" />
                Top {extras.topQuestionsCount ?? 20} Questions
              </Link>
            )}
            {extras.quizUrl && (
              <Link
                to={extras.quizUrl}
                className={cn(
                  'flex items-center gap-2.5 px-3 py-2 rounded-md text-xs font-semibold transition-colors',
                  location.hash.includes('/quiz')
                    ? 'bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300'
                    : 'text-muted-foreground hover:bg-amber-50 hover:text-amber-700 dark:hover:bg-amber-950/40 dark:hover:text-amber-300'
                )}
              >
                <Sparkles className="h-3.5 w-3.5 shrink-0 text-amber-500" />
                Chapter Quiz
              </Link>
            )}
            {extras.shortNotesUrl && (
              <Link
                to={extras.shortNotesUrl}
                className={cn(
                  'flex items-center gap-2.5 px-3 py-2 rounded-md text-xs font-semibold transition-colors',
                  location.hash.includes('short-notes')
                    ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300'
                    : 'text-muted-foreground hover:bg-emerald-50 hover:text-emerald-700 dark:hover:bg-emerald-950/40 dark:hover:text-emerald-300'
                )}
              >
                <Zap className="h-3.5 w-3.5 shrink-0 text-emerald-500" />
                Short Notes
              </Link>
            )}
          </div>
        </div>
      )}

      {/* ── COLLAPSED EXTRAS ICONS ───────────────── */}
      {extras && collapsed && (
        <div className={cn('py-2 shrink-0 flex flex-col items-center gap-1', !extrasOnly && 'border-t border-border mt-auto')}>
          {extras.topQuestionsUrl && (
            <Link to={extras.topQuestionsUrl} title="Top Questions"
              className="flex h-7 w-7 items-center justify-center rounded-md text-violet-500 hover:bg-violet-50 dark:hover:bg-violet-950/40 transition-colors"
            >
              <Brain className="h-4 w-4" />
            </Link>
          )}
          {extras.quizUrl && (
            <Link to={extras.quizUrl} title="Chapter Quiz"
              className="flex h-7 w-7 items-center justify-center rounded-md text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-950/40 transition-colors"
            >
              <Sparkles className="h-4 w-4" />
            </Link>
          )}
          {extras.shortNotesUrl && (
            <Link to={extras.shortNotesUrl} title="Short Notes"
              className="flex h-7 w-7 items-center justify-center rounded-md text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 transition-colors"
            >
              <Zap className="h-4 w-4" />
            </Link>
          )}
        </div>
      )}

      {/* ── EXTRAS-ONLY FLEX FILL ────────────────── */}
      {extrasOnly && !collapsed && <div className="flex-1" />}
    </aside>
  )
}

export default Sidebar
