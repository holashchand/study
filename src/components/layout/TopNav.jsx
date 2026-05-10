import { Link } from 'react-router-dom'

export default function TopNav({ prevPath, prevLabel, tocPath, nextPath, nextLabel }) {
  return (
    <nav className="top-nav">
      {prevPath
        ? <Link to={prevPath}>← {prevLabel}</Link>
        : <span>{prevLabel ?? ''}</span>
      }
      <Link to={tocPath ?? '/'} className="nav-toc">Table of Contents</Link>
      {nextPath
        ? <Link to={nextPath}>{nextLabel} →</Link>
        : <span>{nextLabel ?? ''}</span>
      }
    </nav>
  )
}
