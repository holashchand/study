import { useEffect } from 'react'

export default function useKeyboardNav(prev, next) {
  useEffect(() => {
    const handler = e => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return
      if (e.key === 'ArrowRight' || e.key === 'j') next()
      if (e.key === 'ArrowLeft' || e.key === 'k') prev()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [prev, next])
}
