import { useParams } from 'react-router-dom'
import { TopNav } from '@/components/layout/TopNav'
import { AppShell } from '@/components/layout/AppShell'
import { getCourse } from '@/data/courses/registry'
import { BookOpen, ArrowRight, Layers, Clock } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

const CHAPTER_COLORS = [
  { bg: 'bg-violet-500', light: 'bg-violet-50 dark:bg-violet-950/50', border: 'border-violet-200 dark:border-violet-800', text: 'text-violet-700 dark:text-violet-300', from: 'from-violet-500', to: 'to-purple-600' },
  { bg: 'bg-blue-500',   light: 'bg-blue-50   dark:bg-blue-950/50',   border: 'border-blue-200   dark:border-blue-800',   text: 'text-blue-700   dark:text-blue-300',   from: 'from-blue-500',   to: 'to-cyan-600' },
  { bg: 'bg-emerald-500',light: 'bg-emerald-50 dark:bg-emerald-950/50',border: 'border-emerald-200 dark:border-emerald-800',text: 'text-emerald-700 dark:text-emerald-300',from: 'from-emerald-500',to: 'to-teal-600' },
  { bg: 'bg-amber-500',  light: 'bg-amber-50  dark:bg-amber-950/50',  border: 'border-amber-200  dark:border-amber-800',  text: 'text-amber-700  dark:text-amber-300',  from: 'from-amber-500',  to: 'to-orange-600' },
  { bg: 'bg-rose-500',   light: 'bg-rose-50   dark:bg-rose-950/50',   border: 'border-rose-200   dark:border-rose-800',   text: 'text-rose-700   dark:text-rose-300',   from: 'from-rose-500',   to: 'to-pink-600' },
  { bg: 'bg-indigo-500', light: 'bg-indigo-50 dark:bg-indigo-950/50', border: 'border-indigo-200 dark:border-indigo-800', text: 'text-indigo-700 dark:text-indigo-300', from: 'from-indigo-500', to: 'to-blue-700' },
  { bg: 'bg-cyan-500',   light: 'bg-cyan-50   dark:bg-cyan-950/50',   border: 'border-cyan-200   dark:border-cyan-800',   text: 'text-cyan-700   dark:text-cyan-300',   from: 'from-cyan-500',   to: 'to-sky-600' },
  { bg: 'bg-fuchsia-500',light: 'bg-fuchsia-50 dark:bg-fuchsia-950/50',border: 'border-fuchsia-200 dark:border-fuchsia-800',text: 'text-fuchsia-700 dark:text-fuchsia-300',from: 'from-fuchsia-500',to: 'to-purple-700' },
]

export default function CoursePage() {
  const { courseSlug } = useParams()
  const course = getCourse(courseSlug)
  const totalSections = course?.chapters.reduce((s, ch) => s + (ch.sections?.length || 0), 0) || 0

  if (!course) return (
    <AppShell>
      <TopNav backHref="/" backLabel="Courses" />
      <div className="flex items-center justify-center h-64 flex-col gap-3">
        <BookOpen className="h-12 w-12 text-muted-foreground/30" />
        <p className="text-muted-foreground font-medium">Course not found</p>
        <Link to="/" className="text-sm text-primary hover:underline">← Back to courses</Link>
      </div>
    </AppShell>
  )

  return (
    <AppShell>
      <TopNav backHref="/" backLabel="All Courses" />

      {/* ── COURSE HERO ─────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-600 via-primary to-indigo-700 text-white px-6 py-14">
        <div className="absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        <div className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

        <div className="relative mx-auto max-w-4xl">
          <div className="flex flex-col sm:flex-row items-start gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm ring-1 ring-white/20">
              <BookOpen className="h-7 w-7 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <Badge className="bg-white/15 text-white border-white/25 text-xs font-semibold">
                  <Layers className="h-3 w-3 mr-1" />{course.chapters.length} Chapters
                </Badge>
                <Badge className="bg-white/15 text-white border-white/25 text-xs font-semibold">
                  {totalSections} Sections
                </Badge>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black mb-2 text-white leading-tight">{course.title}</h1>
              <p className="text-white/75 leading-relaxed max-w-2xl">{course.description}</p>
            </div>
            <Link
              to={`/courses/${courseSlug}/chapter/1`}
              className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-white text-violet-700 px-5 py-2.5 text-sm font-bold shadow-lg hover:bg-white/90 hover:scale-105 transition-all"
            >
              Start <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CHAPTER GRID ────────────────────────────── */}
      <main className="mx-auto max-w-4xl px-6 py-10">
        <h2 className="text-xl font-bold mb-6 text-foreground">Chapters</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {course.chapters.map((chapter, idx) => {
            const color = CHAPTER_COLORS[idx % CHAPTER_COLORS.length]
            return (
              <Link
                key={chapter.num}
                to={`/courses/${courseSlug}/chapter/${chapter.num}`}
                className="group block"
              >
                <div className={cn(
                  'relative overflow-hidden rounded-xl border p-5 h-full transition-all duration-200',
                  'hover:shadow-lg hover:-translate-y-0.5',
                  color.light, color.border
                )}>
                  {/* Decorative blob */}
                  <div className={cn('absolute -top-6 -right-6 h-20 w-20 rounded-full opacity-20 blur-xl bg-gradient-to-br', color.from, color.to)} />

                  <div className="relative flex items-start gap-4">
                    {/* Chapter number */}
                    <div className={cn('flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white font-black text-base bg-gradient-to-br shadow-sm', color.from, color.to)}>
                      {chapter.num}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        {chapter.sections && (
                          <span className={cn('text-xs font-medium', color.text)}>
                            {chapter.sections.length} sections
                          </span>
                        )}
                      </div>
                      <h3 className="font-bold text-sm leading-snug text-foreground group-hover:text-primary transition-colors mb-1">
                        {chapter.title}
                      </h3>
                      {chapter.subtitle && (
                        <p className="text-xs text-muted-foreground line-clamp-1">{chapter.subtitle}</p>
                      )}
                    </div>

                    <ArrowRight className={cn('h-4 w-4 shrink-0 mt-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all', color.text)} />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </main>
    </AppShell>
  )
}
