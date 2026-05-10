import { Link } from 'react-router-dom'
import courses from '../data/courses/registry'
import CourseCard from '../components/course/CourseCard'

export default function HomePage() {
  return (
    <>
      <nav className="top-nav">
        <span>Study Platform</span>
      </nav>
      <article style={{ padding: '2.5rem 3rem' }}>
        <div className="chapter-header" style={{ marginBottom: '2rem' }}>
          <h1 className="chapter-title">Study Platform</h1>
          <p className="chapter-subtitle">Select a course to begin learning.</p>
        </div>
        <div className="toc-grid">
          {courses.map(course => (
            <CourseCard
              key={course.slug}
              to={`/courses/${course.slug}`}
              chNum={course.icon ?? '📚'}
              title={course.title}
              description={course.description}
            />
          ))}
        </div>
      </article>
    </>
  )
}
