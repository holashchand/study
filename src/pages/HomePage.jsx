import { TopNav } from '@/components/layout/TopNav'
import { AppShell } from '@/components/layout/AppShell'
import { courses } from '@/data/courses/registry'
import { BookOpen, ArrowRight, ChevronRight, GraduationCap } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

const CARD_GRADIENTS = [
  { from: 'from-violet-500', to: 'to-purple-700', light: 'bg-violet-50 dark:bg-violet-950/40', border: 'border-violet-200 dark:border-violet-800', text: 'text-violet-700 dark:text-violet-300' },
  { from: 'from-blue-500',   to: 'to-cyan-600',   light: 'bg-blue-50   dark:bg-blue-950/40',   border: 'border-blue-200   dark:border-blue-800',   text: 'text-blue-700   dark:text-blue-300'   },
  { from: 'from-emerald-500',to: 'to-teal-600',   light: 'bg-emerald-50 dark:bg-emerald-950/40',border: 'border-emerald-200 dark:border-emerald-800',text: 'text-emerald-700 dark:text-emerald-300' },
  { from: 'from-orange-500', to: 'to-amber-600',  light: 'bg-amber-50  dark:bg-amber-950/40',  border: 'border-amber-200  dark:border-amber-800',  text: 'text-amber-700  dark:text-amber-300'  },
  { from: 'from-rose-500',   to: 'to-pink-600',   light: 'bg-rose-50   dark:bg-rose-950/40',   border: 'border-rose-200   dark:border-rose-800',   text: 'text-rose-700   dark:text-rose-300'   },
  { from: 'from-indigo-500', to: 'to-blue-700',   light: 'bg-indigo-50 dark:bg-indigo-950/40', border: 'border-indigo-200 dark:border-indigo-800', text: 'text-indigo-700 dark:text-indigo-300' },
]

function CourseCard({ course, gradient, featured }) {
  const { from, to, light, border, text } = gradient
  const sections = course.chapters.reduce((s, ch) => s + (ch.sections?.length || 0), 0)

  if (featured) {
    return (
      <Link to={`/courses/${course.slug}`} className="group block sm:col-span-2 lg:col-span-3">
        <div className={cn('relative overflow-hidden rounded-2xl border-2 p-6 transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5', light, border)}>
          <div className={cn('absolute -top-8 -right-8 h-40 w-40 rounded-full opacity-20 blur-3xl bg-gradient-to-br', from, to)} />
          <div className="relative flex flex-col sm:flex-row sm:items-center gap-5">
            <div className={cn('flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br shadow-md', from, to)}>
              <BookOpen className="h-7 w-7 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className={cn('text-xs font-bold uppercase tracking-widest mb-1', text)}>Featured Course</div>
              <h3 className="font-black text-xl text-foreground group-hover:text-primary transition-colors leading-snug mb-1">{course.title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-1">{course.description}</p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <div className="text-center">
                <div className={cn('text-xl font-black', text)}>{course.chapters.length}</div>
                <div className="text-xs text-muted-foreground">Chapters</div>
              </div>
              <div className="text-center">
                <div className={cn('text-xl font-black', text)}>{sections}</div>
                <div className="text-xs text-muted-foreground">Sections</div>
              </div>
              <div className={cn('inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r px-4 py-2 text-sm font-bold text-white shadow group-hover:shadow-md transition-all', from, to)}>
                Start <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link to={`/courses/${course.slug}`} className="group block">
      <div className={cn('relative overflow-hidden rounded-xl border p-5 h-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5', light, border)}>
        <div className={cn('absolute -top-4 -right-4 h-20 w-20 rounded-full opacity-15 blur-xl bg-gradient-to-br', from, to)} />
        <div className="relative">
          <div className={cn('inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br mb-3 shadow-sm', from, to)}>
            <BookOpen className="h-5 w-5 text-white" />
          </div>
          <h3 className="font-bold text-sm leading-snug text-foreground group-hover:text-primary transition-colors mb-1.5">{course.title}</h3>
          <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed mb-3">{course.description}</p>
          <div className="flex items-center justify-between">
            <span className={cn('text-xs font-semibold', text)}>{course.chapters.length} ch · {course.chapters.reduce((s, ch) => s + (ch.sections?.length || 0), 0)} sec</span>
            <ChevronRight className={cn('h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform', text)} />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function HomePage() {
  const [featured, ...rest] = courses

  return (
    <AppShell>
      <TopNav />

      {/* ── COMPACT HERO BANNER ─────────────────────── */}
      <div className="relative overflow-hidden border-b border-border bg-gradient-to-r from-primary/8 via-background to-violet-500/5 px-6 py-5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(var(--primary)/0.1),transparent_60%)] pointer-events-none" />
        <div className="relative mx-auto max-w-5xl flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10">
              <GraduationCap className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h1 className="text-base font-black text-foreground leading-none">
                <span className="bg-gradient-to-r from-violet-600 via-primary to-cyan-500 bg-clip-text text-transparent">Master</span> the Fundamentals
              </h1>
              <p className="text-xs text-muted-foreground mt-0.5">In-depth courses for engineers. No shortcuts.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="font-semibold text-primary">{courses.length} courses</span>
            <span>·</span>
            <span>{courses.reduce((s, c) => s + c.chapters.length, 0)} chapters</span>
            <span>·</span>
            <span>{courses.reduce((s, c) => s + c.chapters.reduce((a, ch) => a + (ch.sections?.length || 0), 0), 0)} sections</span>
          </div>
        </div>
      </div>

      {/* ── COURSES ─────────────────────────────────── */}
      <main className="mx-auto max-w-5xl px-6 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured && <CourseCard course={featured} gradient={CARD_GRADIENTS[0]} featured />}
          {rest.map((course, i) => (
            <CourseCard key={course.slug} course={course} gradient={CARD_GRADIENTS[(i + 1) % CARD_GRADIENTS.length]} />
          ))}
        </div>
      </main>

      {/* ── FOOTER ──────────────────────────────────── */}
      <footer className="border-t border-border px-6 py-5 text-center">
        <div className="flex items-center justify-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center rounded bg-primary">
            <BookOpen className="h-3 w-3 text-primary-foreground" />
          </div>
          <span className="text-xs font-semibold text-foreground">StudyPlatform</span>
          <span className="text-xs text-muted-foreground">· Built for engineers who love to learn deeply.</span>
        </div>
      </footer>
    </AppShell>
  )
}
