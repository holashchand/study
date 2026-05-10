import { useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function useSectionNav(total) {
  const [searchParams, setSearchParams] = useSearchParams()
  const raw = parseInt(searchParams.get('s') || '0', 10)
  const currentIdx = isNaN(raw) || raw < 0 || raw >= total ? 0 : raw

  const navigate = useCallback(idx => {
    if (idx >= 0 && idx < total) {
      setSearchParams(p => {
        const next = new URLSearchParams(p)
        next.set('s', String(idx))
        return next
      }, { replace: true })
    }
  }, [total, setSearchParams])

  const prev = useCallback(() => navigate(currentIdx - 1), [currentIdx, navigate])
  const next = useCallback(() => navigate(currentIdx + 1), [currentIdx, navigate])

  return { currentIdx, navigate, prev, next }
}
