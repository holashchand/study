import { useParams } from 'react-router-dom'
import { TopNav } from '@/components/layout/TopNav'
import { AppShell } from '@/components/layout/AppShell'
import { Sidebar } from '@/components/layout/Sidebar'
import { QuizView } from '@/components/content/QuizView'
import { getCourse } from '@/data/courses/registry'

export default function QuizPage() {
  const { courseSlug, num } = useParams()
  const course = getCourse(courseSlug)
  const chapterNum = num ? parseInt(num, 10) : null
  const chapter = chapterNum ? course?.chapters.find(c => c.num === chapterNum) : null

  if (!course) return (
    <AppShell>
      <TopNav backHref="/" backLabel="Courses" />
      <div className="flex items-center justify-center h-64">
        <p className="text-muted-foreground">Course not found</p>
      </div>
    </AppShell>
  )

  if (chapterNum && !chapter) return (
    <AppShell>
      <TopNav backHref={`/courses/${courseSlug}`} backLabel={course.title} />
      <div className="flex items-center justify-center h-64">
        <p className="text-muted-foreground">Chapter not found</p>
      </div>
    </AppShell>
  )

  const questions = chapter ? chapter.quiz : course.quiz
  const displayCount = chapter ? (chapter.quizDisplayCount ?? 10) : (course.quizConfig?.displayCount ?? 30)
  const title = chapter ? `Ch.${chapterNum} Quiz` : `${course.title} — Final Quiz`
  const subtitle = chapter
    ? `${displayCount} random questions picked from ${questions?.length} question pool`
    : `${displayCount} random questions from all ${course.chapters.length} chapters (${questions?.length} total pool)`
  const backHref = chapter ? `/courses/${courseSlug}/chapter/${chapterNum}` : `/courses/${courseSlug}`
  const backLabel = chapter ? `Chapter ${chapterNum}` : course.title

  const chapterExtras = chapter ? {
    topQuestionsUrl: chapter.topQuestions?.length ? `/courses/${courseSlug}/chapter/${chapterNum}/top-questions` : null,
    topQuestionsCount: chapter.topQuestionsCount,
    quizUrl: `/courses/${courseSlug}/chapter/${chapterNum}/quiz`,
    shortNotesUrl: chapter.shortNotes ? `/courses/${courseSlug}/chapter/${chapterNum}/short-notes` : null,
  } : null

  if (!questions?.length) return (
    <AppShell>
      <TopNav backHref={backHref} backLabel={backLabel} />
      <div className="flex items-center justify-center h-64">
        <p className="text-muted-foreground">No quiz questions available yet.</p>
      </div>
    </AppShell>
  )

  return (
    <AppShell>
      <TopNav backHref={backHref} backLabel={backLabel} title={chapter ? `Ch.${chapterNum} Quiz` : 'Course Quiz'} />
      <div className="flex flex-1 overflow-hidden">
        {chapter && (
          <Sidebar
            sections={chapter.sections ?? []}
            currentIdx={-1}
            onNavigate={() => {}}
            extras={chapterExtras}
          />
        )}
        <div className="flex-1 overflow-y-auto bg-background">
          <QuizView
            questions={questions}
            displayCount={displayCount}
            title={title}
            subtitle={subtitle}
          />
        </div>
      </div>
    </AppShell>
  )
}
