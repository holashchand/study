import { useParams } from 'react-router-dom'
import { TopNav } from '@/components/layout/TopNav'
import { AppShell } from '@/components/layout/AppShell'
import { Sidebar } from '@/components/layout/Sidebar'
import { ShortNotesView } from '@/components/content/ShortNotesView'
import { CourseShortNotesView } from '@/components/content/CourseShortNotesView'
import { getCourse } from '@/data/courses/registry'

export default function ShortNotesPage() {
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

  // Course-level short notes
  if (!chapterNum) {
    if (!course.shortNotes) return (
      <AppShell>
        <TopNav backHref={`/courses/${courseSlug}`} backLabel={course.title} />
        <div className="flex items-center justify-center h-64">
          <p className="text-muted-foreground">Short notes not available yet.</p>
        </div>
      </AppShell>
    )
    return (
      <AppShell>
        <TopNav backHref={`/courses/${courseSlug}`} backLabel={course.title} title="Course Notes" />
        <div className="flex-1 overflow-y-auto bg-background">
          <CourseShortNotesView notes={course.shortNotes} courseTitle={course.title} />
        </div>
      </AppShell>
    )
  }

  // Chapter-level short notes
  if (!chapter) return (
    <AppShell>
      <TopNav backHref={`/courses/${courseSlug}`} backLabel="Back" />
      <div className="flex items-center justify-center h-64">
        <p className="text-muted-foreground">Chapter not found</p>
      </div>
    </AppShell>
  )

  if (!chapter.shortNotes) return (
    <AppShell>
      <TopNav backHref={`/courses/${courseSlug}/chapter/${chapterNum}`} backLabel={`Chapter ${chapterNum}`} />
      <div className="flex items-center justify-center h-64">
        <p className="text-muted-foreground">Short notes not available yet.</p>
      </div>
    </AppShell>
  )

  const chapterExtras = {
    topQuestionsUrl: chapter.topQuestions?.length ? `/courses/${courseSlug}/chapter/${chapterNum}/top-questions` : null,
    topQuestionsCount: chapter.topQuestionsCount,
    quizUrl: chapter.quiz?.length ? `/courses/${courseSlug}/chapter/${chapterNum}/quiz` : null,
    shortNotesUrl: `/courses/${courseSlug}/chapter/${chapterNum}/short-notes`,
  }

  return (
    <AppShell>
      <TopNav
        backHref={`/courses/${courseSlug}/chapter/${chapterNum}`}
        backLabel={`Chapter ${chapterNum}`}
        title="Short Notes"
      />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          sections={chapter.sections ?? []}
          currentIdx={-1}
          onNavigate={() => {}}
          extras={chapterExtras}
        />
        <div className="flex-1 overflow-y-auto bg-background">
          <ShortNotesView notes={chapter.shortNotes} />
        </div>
      </div>
    </AppShell>
  )
}
