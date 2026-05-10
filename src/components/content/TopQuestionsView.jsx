import { useState, useMemo } from 'react'
import { cn } from '@/lib/utils'
import { ChevronDown, Search, BookOpen, Zap, Brain, Tag, X } from 'lucide-react'

const DIFFICULTY_CONFIG = {
  easy:   { label: 'Easy',   color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800' },
  medium: { label: 'Medium', color: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300 border-amber-200 dark:border-amber-800' },
  hard:   { label: 'Hard',   color: 'bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300 border-rose-200 dark:border-rose-800' },
}

function QuestionCard({ question, index, isOpen, onToggle }) {
  const diff = DIFFICULTY_CONFIG[question.difficulty] || DIFFICULTY_CONFIG.medium

  return (
    <div className={cn(
      'rounded-xl border transition-all duration-200',
      isOpen
        ? 'border-primary/30 bg-primary/5 shadow-sm'
        : 'border-border bg-card hover:border-primary/20 hover:shadow-sm',
    )}>
      <button onClick={onToggle} className="w-full text-left p-4 flex items-start gap-3 group">
        <span className={cn(
          'flex-shrink-0 flex items-center justify-center h-7 w-7 rounded-lg text-xs font-bold mt-0.5 transition-colors',
          isOpen ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary',
        )}>
          {index + 1}
        </span>

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-1.5 mb-1">
            <span className={cn('text-xs font-semibold px-2 py-0.5 rounded-full border', diff.color)}>
              {diff.label}
            </span>
            {question.tags?.slice(0, 3).map(tag => (
              <span key={tag} className="text-xs px-1.5 py-0.5 rounded bg-muted text-muted-foreground font-mono">
                #{tag}
              </span>
            ))}
          </div>
          <p className="text-sm font-semibold text-foreground leading-snug pr-2">{question.q}</p>
        </div>

        <ChevronDown className={cn(
          'flex-shrink-0 h-4 w-4 text-muted-foreground transition-transform duration-200 mt-1',
          isOpen && 'rotate-180',
        )} />
      </button>

      {isOpen && (
        <div className="px-4 pb-4 pt-0 ml-10">
          <div className="rounded-lg bg-background border border-border p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-bold text-primary">A</span>
              </div>
              <span className="text-xs font-semibold text-primary uppercase tracking-wide">Answer</span>
            </div>
            <p className="text-sm text-foreground leading-relaxed">{question.a}</p>
            {question.tags?.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-3 pt-3 border-t border-border">
                {question.tags.map(tag => (
                  <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground font-mono">
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export function TopQuestionsView({ questions, title, subtitle, totalCount }) {
  const [openIdx, setOpenIdx] = useState(null)
  const [search, setSearch] = useState('')
  const [diffFilter, setDiffFilter] = useState('all')
  const [selectedTags, setSelectedTags] = useState([])
  const [showAllTags, setShowAllTags] = useState(false)

  // Collect all unique tags
  const allTags = useMemo(() => {
    const tagMap = {}
    questions.forEach(q => {
      q.tags?.forEach(tag => { tagMap[tag] = (tagMap[tag] ?? 0) + 1 })
    })
    return Object.entries(tagMap)
      .sort((a, b) => b[1] - a[1])
      .map(([tag, count]) => ({ tag, count }))
  }, [questions])

  const visibleTags = showAllTags ? allTags : allTags.slice(0, 12)

  function toggleTag(tag) {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    )
    setOpenIdx(null)
  }

  const filtered = useMemo(() => questions.filter(q => {
    const matchSearch = !search || q.q.toLowerCase().includes(search.toLowerCase()) || q.a.toLowerCase().includes(search.toLowerCase())
    const matchDiff = diffFilter === 'all' || q.difficulty === diffFilter
    const matchTags = selectedTags.length === 0 || selectedTags.some(tag => q.tags?.includes(tag))
    return matchSearch && matchDiff && matchTags
  }), [questions, search, diffFilter, selectedTags])

  const counts = useMemo(() => {
    const c = { easy: 0, medium: 0, hard: 0 }
    questions.forEach(q => { if (q.difficulty) c[q.difficulty]++ })
    return c
  }, [questions])

  const hasFilters = search || diffFilter !== 'all' || selectedTags.length > 0

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="mb-5">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-sm shrink-0">
            <Brain className="h-5 w-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-black text-foreground">{title}</h1>
            {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300">
            <BookOpen className="h-3.5 w-3.5" /> {totalCount} Questions
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300">Easy: {counts.easy}</span>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300">Medium: {counts.medium}</span>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300">Hard: {counts.hard}</span>
        </div>

        {/* Search */}
        <div className="relative mb-3">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          <input
            type="text"
            placeholder="Search questions and answers..."
            value={search}
            onChange={e => { setSearch(e.target.value); setOpenIdx(null) }}
            className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
          />
        </div>

        {/* Difficulty filter */}
        <div className="flex gap-1.5 mb-3">
          {['all', 'easy', 'medium', 'hard'].map(d => (
            <button
              key={d}
              onClick={() => { setDiffFilter(d); setOpenIdx(null) }}
              className={cn(
                'px-3 py-1.5 text-xs font-semibold rounded-lg border capitalize transition-colors',
                diffFilter === d
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground',
              )}
            >
              {d === 'all' ? 'All levels' : d}
            </button>
          ))}
        </div>

        {/* Tag filters */}
        {allTags.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Tag className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Filter by topic</span>
              {selectedTags.length > 0 && (
                <button
                  onClick={() => setSelectedTags([])}
                  className="ml-auto flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
                >
                  <X className="h-3 w-3" /> Clear
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {visibleTags.map(({ tag, count }) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={cn(
                    'inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-mono font-medium transition-colors border',
                    selectedTags.includes(tag)
                      ? 'bg-primary/10 border-primary text-primary'
                      : 'bg-background border-border text-muted-foreground hover:border-primary/40 hover:text-foreground',
                  )}
                >
                  #{tag}
                  <span className="text-[10px] opacity-60">{count}</span>
                </button>
              ))}
              {allTags.length > 12 && (
                <button
                  onClick={() => setShowAllTags(v => !v)}
                  className="px-2 py-1 rounded-md text-xs text-muted-foreground border border-dashed border-border hover:border-primary/40 hover:text-primary transition-colors"
                >
                  {showAllTags ? 'Show less' : `+${allTags.length - 12} more`}
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Results count */}
      {hasFilters && (
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filtered.length}</span> of {questions.length} questions
          </p>
          {selectedTags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {selectedTags.map(tag => (
                <span key={tag} className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-primary/10 text-primary text-xs font-mono">
                  #{tag}
                  <button onClick={() => toggleTag(tag)}><X className="h-3 w-3" /></button>
                </span>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Question list */}
      <div className="space-y-2">
        {filtered.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            <Zap className="h-8 w-8 mx-auto mb-2 opacity-30" />
            <p className="text-sm">No questions match your filters.</p>
            <button onClick={() => { setSearch(''); setDiffFilter('all'); setSelectedTags([]) }}
              className="mt-2 text-xs text-primary hover:underline">Clear all filters</button>
          </div>
        ) : (
          filtered.map((q, i) => (
            <QuestionCard
              key={q.id ?? i}
              question={q}
              index={i}
              isOpen={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? null : i)}
            />
          ))
        )}
      </div>

      {filtered.length > 0 && openIdx === null && (
        <p className="text-center text-xs text-muted-foreground mt-4">Click any question to reveal the answer</p>
      )}
    </div>
  )
}
