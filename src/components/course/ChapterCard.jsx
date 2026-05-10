import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export function ChapterCard({ chapter, courseSlug }) {
  return (
    <Link to={`/courses/${courseSlug}/chapter/${chapter.num}`} className="group block">
      <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">
              {chapter.num}
            </span>
            <span className="text-xs font-medium text-muted-foreground">Chapter {chapter.num}</span>
          </div>
          <CardTitle className="text-base group-hover:text-primary transition-colors leading-snug">
            {chapter.title}
          </CardTitle>
          {chapter.subtitle && (
            <CardDescription className="text-xs">{chapter.subtitle}</CardDescription>
          )}
        </CardHeader>
        {chapter.description && (
          <CardContent className="pt-0">
            <p className="text-sm text-muted-foreground line-clamp-2">{chapter.description}</p>
            <div className="flex items-center text-xs text-primary font-medium gap-1 mt-3">
              View Chapter <ArrowRight className="h-3 w-3" />
            </div>
          </CardContent>
        )}
      </Card>
    </Link>
  )
}
