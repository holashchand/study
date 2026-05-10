import { Link } from 'react-router-dom'

export default function CourseCard({ to, chNum, title, description }) {
  return (
    <Link to={to} className="toc-card">
      <div className="ch-num">{chNum}</div>
      <div className="ch-title">{title}</div>
      {description && <div className="ch-desc">{description}</div>}
    </Link>
  )
}
