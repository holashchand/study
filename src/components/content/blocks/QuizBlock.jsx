import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function QuizBlock({ block }) {
  const [answers, setAnswers] = useState({})
  const [revealed, setRevealed] = useState({})

  return (
    <div className="mb-6 space-y-4">
      {block.questions.map((q, qi) => (
        <div key={qi} className="rounded-lg border border-border p-4">
          <p className="font-medium mb-3 text-sm">{q.q}</p>
          <div className="space-y-2">
            {q.options.map((opt, oi) => {
              const selected = answers[qi] === oi
              const isCorrect = oi === q.answer
              const show = revealed[qi]
              return (
                <button
                  key={oi}
                  onClick={() => setAnswers(a => ({ ...a, [qi]: oi }))}
                  className={cn(
                    'w-full text-left px-3 py-2 rounded-md text-sm border transition-colors',
                    selected && !show && 'border-primary bg-primary/10',
                    show && isCorrect && 'border-green-500 bg-green-50 dark:bg-green-950',
                    show && selected && !isCorrect && 'border-red-500 bg-red-50 dark:bg-red-950',
                    !selected && !show && 'border-border hover:border-primary hover:bg-muted',
                  )}
                >
                  {opt}
                </button>
              )
            })}
          </div>
          {answers[qi] !== undefined && !revealed[qi] && (
            <Button size="sm" variant="outline" className="mt-3" onClick={() => setRevealed(r => ({ ...r, [qi]: true }))}>
              Check Answer
            </Button>
          )}
          {revealed[qi] && q.explanation && (
            <p className="mt-3 text-xs text-muted-foreground">{q.explanation}</p>
          )}
        </div>
      ))}
    </div>
  )
}
