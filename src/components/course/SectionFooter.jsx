import { Link } from 'react-router-dom'

export default function SectionFooter({ currentIdx, total, onPrev, onNext, nextChapterPath, nextChapterLabel }) {
  const isFirst = currentIdx === 0
  const isLast = currentIdx === total - 1

  return (
    <div className="section-footer">
      <button className="sec-prev" onClick={onPrev} disabled={isFirst}>← Previous</button>
      <span className="sec-counter">{currentIdx + 1} / {total}</span>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        {!isLast && (
          <button className="sec-next" onClick={onNext}>Next →</button>
        )}
        {isLast && nextChapterPath && (
          <Link to={nextChapterPath} className="sec-next-chapter">{nextChapterLabel ?? 'Next Chapter'} →</Link>
        )}
        {isLast && !nextChapterPath && (
          <button className="sec-next" onClick={onNext} disabled>Next →</button>
        )}
      </div>
    </div>
  )
}
