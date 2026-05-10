import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { cn } from '@/lib/utils'

export function SectionFooter({ sections, currentIdx, onNavigate, courseSlug, chapterNum, totalChapters, onPrev, onNext, nextChapterPath, nextChapterLabel }) {
  const navigate = useNavigate()
  const isFirst = currentIdx === 0
  const isLast = currentIdx === (sections?.length || 1) - 1
  const isLastChapter = nextChapterPath == null

  const goNextChapter = () => {
    if (nextChapterPath) {
      navigate(nextChapterPath)
    }
  }

  // Handle both new and old prop interfaces
  const handlePrev = onPrev ? onPrev : () => onNavigate?.(currentIdx - 1)
  const handleNext = onNext ? onNext : () => onNavigate?.(currentIdx + 1)

  return (
    <div className="border-t border-border bg-background px-6 py-4">
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          size="sm"
          onClick={handlePrev}
          disabled={isFirst}
          className="gap-1.5"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>

        <span className="text-xs text-muted-foreground font-mono">
          {currentIdx + 1} / {sections?.length || 1}
        </span>

        {isLast ? (
          isLastChapter ? (
            <Button variant="ghost" size="sm" disabled className="gap-1.5 text-muted-foreground">
              Course Complete
            </Button>
          ) : (
            <Button size="sm" onClick={goNextChapter} className="gap-1.5">
              {nextChapterLabel || 'Next Chapter'}
              <ArrowRight className="h-4 w-4" />
            </Button>
          )
        ) : (
          <Button size="sm" onClick={handleNext} className="gap-1.5">
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  )
}

export default SectionFooter
