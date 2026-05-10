import { useParams, Navigate } from 'react-router-dom'
import { getCourse } from '../data/courses/registry'
import TopNav from '../components/layout/TopNav'
import CourseCard from '../components/course/CourseCard'

export default function CoursePage() {
  const { courseSlug } = useParams()
  const course = getCourse(courseSlug)

  if (!course) return <Navigate to="/" replace />

  return (
    <>
      <TopNav tocPath="/" />
      <article style={{ padding: '2.5rem 3rem' }}>
        <div className="chapter-header" style={{ marginBottom: '2rem' }}>
          <h1 className="chapter-title">{course.title}</h1>
          <p className="chapter-subtitle">{course.description}</p>
        </div>
        <div className="toc-grid">
          {course.chapters.map(ch => (
            <CourseCard
              key={ch.num}
              to={`/courses/${courseSlug}/chapter/${ch.num}`}
              chNum={`Chapter ${ch.num}`}
              title={ch.title}
              description={ch.description}
            />
          ))}
        </div>
      </article>
    </>
  )
}
