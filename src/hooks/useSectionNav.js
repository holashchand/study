import { useState, useCallback } from 'react'

export default function useSectionNav(total) {
  const [currentIdx, setCurrentIdx] = useState(0)

  const navigate = useCallback(idx => {
    if (idx >= 0 && idx < total) setCurrentIdx(idx)
  }, [total])

  const prev = useCallback(() => navigate(currentIdx - 1), [currentIdx, navigate])
  const next = useCallback(() => navigate(currentIdx + 1), [currentIdx, navigate])

  return { currentIdx, navigate, prev, next }
}
