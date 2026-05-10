import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, BookOpen, Palette, Check } from 'lucide-react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { Button } from '@/components/ui/button'
import { useTheme, CODE_THEMES } from '@/context/ThemeContext'
import { cn } from '@/lib/utils'

function CodeThemePicker() {
  const { codeTheme, setCodeTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function onClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  const darkThemes = CODE_THEMES.filter(t => t.dark)
  const lightThemes = CODE_THEMES.filter(t => !t.dark)

  return (
    <div className="relative" ref={ref}>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setOpen(v => !v)}
        title="Code syntax theme"
        className={cn('h-8 px-2 gap-1.5', open && 'bg-muted')}
      >
        <Palette className="h-4 w-4" />
        <span className="hidden md:inline text-xs">Code Theme</span>
      </Button>

      {open && (
        <div className="absolute right-0 top-full mt-1.5 z-50 w-52 rounded-xl border border-border bg-card shadow-xl overflow-hidden">
          <div className="px-3 py-2 border-b border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Code Syntax Theme</p>
          </div>

          <div className="p-1.5">
            <p className="px-2 py-1 text-xs font-medium text-muted-foreground">Dark</p>
            {darkThemes.map(t => (
              <button
                key={t.key}
                onClick={() => { setCodeTheme(t.key); setOpen(false) }}
                className={cn(
                  'flex items-center justify-between w-full px-3 py-1.5 rounded-lg text-sm transition-colors',
                  codeTheme === t.key
                    ? 'bg-primary/10 text-primary font-medium'
                    : 'text-foreground hover:bg-muted'
                )}
              >
                {t.label}
                {codeTheme === t.key && <Check className="h-3.5 w-3.5" />}
              </button>
            ))}

            <p className="px-2 py-1 mt-1 text-xs font-medium text-muted-foreground">Light</p>
            {lightThemes.map(t => (
              <button
                key={t.key}
                onClick={() => { setCodeTheme(t.key); setOpen(false) }}
                className={cn(
                  'flex items-center justify-between w-full px-3 py-1.5 rounded-lg text-sm transition-colors',
                  codeTheme === t.key
                    ? 'bg-primary/10 text-primary font-medium'
                    : 'text-foreground hover:bg-muted'
                )}
              >
                {t.label}
                {codeTheme === t.key && <Check className="h-3.5 w-3.5" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export function TopNav({ backHref, backLabel, title, breadcrumb, prevPath, prevLabel, tocPath, nextPath, nextLabel }) {
  const showBack = backHref || prevPath
  const showBackLabel = backLabel || prevLabel
  const homeOrCourseLink = tocPath || '/'

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-primary/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center px-4 gap-4">
        {/* Left */}
        <div className="flex items-center gap-2 min-w-0">
          {showBack ? (
            <Button variant="ghost" size="sm" asChild>
              <Link to={showBack} className="flex items-center gap-1.5 text-sm">
                <ArrowLeft className="h-4 w-4" />
                <span className="hidden sm:inline">{showBackLabel || 'Back'}</span>
              </Link>
            </Button>
          ) : (
            <Link to={homeOrCourseLink} className="flex items-center gap-2 text-foreground hover:text-foreground/80">
              <div className="bg-gradient-to-br from-primary to-primary/80 text-white rounded-lg p-1.5">
                <BookOpen className="h-5 w-5" />
              </div>
              <span className="font-semibold text-sm">StudyPlatform</span>
            </Link>
          )}
        </div>

        {/* Center */}
        {title && (
          <div className="flex-1 flex items-center justify-center min-w-0 px-2">
            <p className="text-sm font-medium text-muted-foreground truncate">{title}</p>
          </div>
        )}
        {!title && <div className="flex-1" />}

        {/* Right */}
        <div className="flex items-center gap-2">
          <CodeThemePicker />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export default TopNav
