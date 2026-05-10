import { useParams } from 'react-router-dom'
import { TopNav } from '@/components/layout/TopNav'
import { AppShell } from '@/components/layout/AppShell'
import { Sidebar } from '@/components/layout/Sidebar'
import { TopQuestionsView } from '@/components/content/TopQuestionsView'
import { getCourse } from '@/data/courses/registry'

export default function TopQuestionsPage() {
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

  const questions = chapter ? chapter.topQuestions : course.topQuestions
  const totalCount = chapter ? (chapter.topQuestionsCount ?? questions?.length) : (course.topQuestionsCount ?? questions?.length)
  const title = chapter
    ? `Top ${totalCount} Questions — Ch.${chapterNum}`
    : `Top ${totalCount} Interview Questions`
  const subtitle = chapter
    ? `Most asked interview questions for: ${chapter.title}`
    : `Most asked Java interview questions — covering all ${course.chapters.length} chapters`
  const backHref = chapter ? `/courses/${courseSlug}/chapter/${chapterNum}` : `/courses/${courseSlug}`
  const backLabel = chapter ? `Chapter ${chapterNum}` : course.title

  const chapterExtras = chapter ? {
    topQuestionsUrl: `/courses/${courseSlug}/chapter/${chapterNum}/top-questions`,
    topQuestionsCount: chapter.topQuestionsCount,
    quizUrl: chapter.quiz?.length ? `/courses/${courseSlug}/chapter/${chapterNum}/quiz` : null,
    shortNotesUrl: chapter.shortNotes ? `/courses/${courseSlug}/chapter/${chapterNum}/short-notes` : null,
  } : null

  if (!questions?.length) return (
    <AppShell>
      <TopNav backHref={backHref} backLabel={backLabel} />
      <div className="flex items-center justify-center h-64">
        <p className="text-muted-foreground">No questions available yet.</p>
      </div>
    </AppShell>
  )

  return (
    <AppShell>
      <TopNav backHref={backHref} backLabel={backLabel} title={chapter ? `Ch.${chapterNum} Questions` : 'Top Questions'} />
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
          <TopQuestionsView
            questions={questions}
            title={title}
            subtitle={subtitle}
            totalCount={totalCount}
          />
        </div>
      </div>
    </AppShell>
  )
}
