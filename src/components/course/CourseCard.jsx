import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

// Rotating gradient colors for course icons
const GRADIENTS = [
  'from-violet-500 to-purple-600',
  'from-blue-500 to-cyan-600',
  'from-emerald-500 to-teal-600',
  'from-orange-500 to-amber-600',
  'from-rose-500 to-pink-600',
  'from-indigo-500 to-blue-600',
]

export function CourseCard({ course, to, chNum, title, description, index = 0 }) {
  // Supports both new API (course object) and old API (individual props)
  const courseSlug = course?.slug
  const courseTitle = title || course?.title
  const courseDescription = description || course?.description
  const chapterCount = course?.chapters?.length || 0
  const linkTo = to || (courseSlug ? `/courses/${courseSlug}` : '#')
  const gradient = GRADIENTS[index % GRADIENTS.length]

  return (
    <Link to={linkTo} className="group block h-full">
      <Card className="h-full transition-all duration-200 hover:shadow-lg hover:-translate-y-1 hover:border-primary/40 cursor-pointer">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between mb-3">
            <div className={cn('flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br shadow-sm', gradient)}>
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <Badge variant="secondary" className="text-xs shrink-0">{chapterCount} chapters</Badge>
          </div>
          <CardTitle className="text-lg leading-snug group-hover:text-primary transition-colors">
            {courseTitle}
          </CardTitle>
          <CardDescription className="text-sm line-clamp-2 mt-1">{courseDescription}</CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="flex items-center text-sm text-primary font-medium gap-1 group-hover:gap-2 transition-all">
            Start Learning <ArrowRight className="h-4 w-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

export default CourseCard
