import { useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import Prism from 'prismjs'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-bash'
import { getCourse } from '../data/courses/registry'
import TopNav from '../components/layout/TopNav'
import Sidebar from '../components/layout/Sidebar'
import SectionFooter from '../components/course/SectionFooter'
import useSectionNav from '../hooks/useSectionNav'
import useKeyboardNav from '../hooks/useKeyboardNav'

function ChapterView({ course, chapterMeta, courseSlug }) {
  const { sections } = chapterMeta
  const { currentIdx, navigate, prev, next } = useSectionNav(sections.length)
  useKeyboardNav(prev, next)

  useEffect(() => { Prism.highlightAll() }, [currentIdx])

  const prevChapter = course.chapters.find(c => c.num === chapterMeta.num - 1)
  const nextChapter = course.chapters.find(c => c.num === chapterMeta.num + 1)
  const Content = sections[currentIdx].content

  return (
    <>
      <TopNav
        prevPath={prevChapter ? `/courses/${courseSlug}/chapter/${prevChapter.num}` : null}
        prevLabel={prevChapter ? `Chapter ${prevChapter.num}` : 'Start'}
        tocPath={`/courses/${courseSlug}`}
        nextPath={nextChapter ? `/courses/${courseSlug}/chapter/${nextChapter.num}` : null}
        nextLabel={nextChapter ? `Chapter ${nextChapter.num}` : null}
      />
      <div className="chapter-layout">
        <Sidebar sections={sections} currentIdx={currentIdx} onNavigate={navigate} />
        <article>
          <div className="chapter-header">
            <div className="chapter-number">Chapter {chapterMeta.num}</div>
            <h1 className="chapter-title">{chapterMeta.title}</h1>
            {chapterMeta.subtitle && <p className="chapter-subtitle">{chapterMeta.subtitle}</p>}
          </div>
          <Content />
          <SectionFooter
            currentIdx={currentIdx}
            total={sections.length}
            onPrev={prev}
            onNext={next}
            nextChapterPath={nextChapter ? `/courses/${courseSlug}/chapter/${nextChapter.num}` : null}
            nextChapterLabel={nextChapter ? `Chapter ${nextChapter.num}` : null}
          />
        </article>
      </div>
    </>
  )
}

export default function ChapterPage() {
  const { courseSlug, num } = useParams()
  const course = getCourse(courseSlug)
  const chapterNum = parseInt(num, 10)

  if (!course) return <Navigate to="/" replace />

  const chapterMeta = course.chapters.find(c => c.num === chapterNum)
  if (!chapterMeta) return <Navigate to={`/courses/${courseSlug}`} replace />

  return <ChapterView course={course} chapterMeta={chapterMeta} courseSlug={courseSlug} />
}
