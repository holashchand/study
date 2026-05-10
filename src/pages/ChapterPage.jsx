import { useEffect, useRef } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import Prism from 'prismjs'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-bash'
import { TopNav } from '@/components/layout/TopNav'
import { AppShell } from '@/components/layout/AppShell'
import { Sidebar } from '@/components/layout/Sidebar'
import { SectionFooter } from '@/components/course/SectionFooter'
import { ProgressBar } from '@/components/course/ProgressBar'
import { BlockRenderer } from '@/components/content/BlockRenderer'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { getCourse } from '@/data/courses/registry'
import useSectionNav from '@/hooks/useSectionNav'
import useKeyboardNav from '@/hooks/useKeyboardNav'

export default function ChapterPage() {
  const { courseSlug, num } = useParams()
  const chapterNum = parseInt(num, 10)
  const course = getCourse(courseSlug)
  const chapter = course?.chapters.find(c => c.num === chapterNum)
  const sections = chapter?.sections || []

  const contentRef = useRef(null)
  const { currentIdx, navigate, prev, next } = useSectionNav(sections.length)
  useKeyboardNav(prev, next)

  useEffect(() => {
    contentRef.current?.scrollTo(0, 0)
    Prism.highlightAll()
  }, [currentIdx])

  if (!course || !chapter) return (
    <AppShell>
      <TopNav backHref={`/courses/${courseSlug}`} backLabel="Back" />
      <div className="flex items-center justify-center h-64">
        <p className="text-muted-foreground">Chapter not found</p>
      </div>
    </AppShell>
  )

  const section = sections[currentIdx]
  const prevChapter = course.chapters.find(c => c.num === chapterNum - 1)
  const nextChapter = course.chapters.find(c => c.num === chapterNum + 1)

  return (
    <AppShell>
      <TopNav
        backHref={`/courses/${courseSlug}`}
        backLabel={course.title}
        title={chapter.title}
      />
      <ProgressBar current={currentIdx + 1} total={sections.length} />

      <div className="flex h-[calc(100vh-7rem)] overflow-hidden">
        <Sidebar
          sections={sections}
          currentIdx={currentIdx}
          onNavigate={navigate}
          extras={chapter.topQuestions?.length || chapter.quiz?.length || chapter.shortNotes ? {
            topQuestionsUrl: chapter.topQuestions?.length ? `/courses/${courseSlug}/chapter/${chapterNum}/top-questions` : null,
            topQuestionsCount: chapter.topQuestionsCount,
            quizUrl: chapter.quiz?.length ? `/courses/${courseSlug}/chapter/${chapterNum}/quiz` : null,
            shortNotesUrl: chapter.shortNotes ? `/courses/${courseSlug}/chapter/${chapterNum}/short-notes` : null,
          } : null}
        />

        <div className="flex flex-col flex-1 min-w-0">
          <div ref={contentRef} className="flex-1 overflow-y-auto bg-background">
            <article className="px-8 py-6 max-w-none">

              {/* ── SECTION HEADER ──────────────────────── */}
              <div className="flex items-center gap-2 mb-5 text-xs text-muted-foreground">
                <span className="font-semibold text-primary">Ch.{chapterNum}</span>
                <span>›</span>
                <span className="font-medium text-foreground truncate">{section?.title}</span>
                <span className="ml-auto shrink-0 font-mono">{currentIdx + 1}/{sections.length}</span>
              </div>

              {/* ── CONTENT ─────────────────────────────── */}
              <ErrorBoundary key={currentIdx}>
                <div className="space-y-1">
                  {section?.blocks ? (
                    <BlockRenderer blocks={section.blocks.filter((b, i) => !(i === 0 && b.type === 'heading'))} />
                  ) : (
                    section?.content && <section.content />
                  )}
                </div>
              </ErrorBoundary>

            </article>
          </div>

          <SectionFooter
            sections={sections}
            currentIdx={currentIdx}
            onNavigate={navigate}
            courseSlug={courseSlug}
            chapterNum={chapterNum}
            totalChapters={course.chapters.length}
            onPrev={prev}
            onNext={next}
            nextChapterPath={nextChapter ? `/courses/${courseSlug}/chapter/${nextChapter.num}` : null}
            nextChapterLabel={nextChapter ? `Chapter ${nextChapter.num}` : null}
          />
        </div>
      </div>
    </AppShell>
  )
}
