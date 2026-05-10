import { useState, useMemo } from 'react'
import { cn } from '@/lib/utils'
import { CheckCircle2, XCircle, Trophy, RotateCcw, ChevronRight, Target, Sparkles } from 'lucide-react'

function shuffleAndPick(arr, count) {
  const shuffled = [...arr].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}

function ScoreScreen({ score, total, onRetry }) {
  const pct = Math.round((score / total) * 100)
  const { label, color, bg, icon } = pct >= 80
    ? { label: 'Excellent!', color: 'text-emerald-600 dark:text-emerald-400', bg: 'from-emerald-400 to-teal-500', icon: '🎉' }
    : pct >= 60
    ? { label: 'Good Job!', color: 'text-amber-600 dark:text-amber-400', bg: 'from-amber-400 to-orange-500', icon: '👍' }
    : { label: 'Keep Practicing!', color: 'text-rose-600 dark:text-rose-400', bg: 'from-rose-400 to-pink-500', icon: '💪' }

  return (
    <div className="flex flex-col items-center justify-center py-10 px-4 text-center max-w-sm mx-auto">
      <div className={cn('h-24 w-24 rounded-full bg-gradient-to-br flex items-center justify-center shadow-lg mb-6', bg)}>
        <Trophy className="h-12 w-12 text-white" />
      </div>
      <div className="text-5xl mb-2">{icon}</div>
      <h2 className={cn('text-2xl font-black mb-1', color)}>{label}</h2>
      <p className="text-4xl font-black text-foreground mb-1">{score}<span className="text-xl text-muted-foreground">/{total}</span></p>
      <p className="text-lg font-bold text-muted-foreground mb-2">{pct}% correct</p>

      {/* Progress bar */}
      <div className="w-full h-3 bg-muted rounded-full overflow-hidden mb-6">
        <div
          className={cn('h-full rounded-full transition-all duration-1000 bg-gradient-to-r', bg)}
          style={{ width: `${pct}%` }}
        />
      </div>

      <p className="text-sm text-muted-foreground mb-6">
        {pct >= 80 ? 'You\'ve mastered this topic! Try the harder questions.' :
         pct >= 60 ? 'You\'re on the right track. Review the ones you missed.' :
         'Don\'t give up! Review the material and try again.'}
      </p>

      <button
        onClick={onRetry}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold hover:opacity-90 transition-opacity shadow-md"
      >
        <RotateCcw className="h-4 w-4" /> Try Again
      </button>
    </div>
  )
}

export function QuizView({ questions, displayCount = 10, title, subtitle }) {
  const [quizQuestions, setQuizQuestions] = useState(() => shuffleAndPick(questions, displayCount))
  const [currentIdx, setCurrentIdx] = useState(0)
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [finished, setFinished] = useState(false)

  const current = quizQuestions[currentIdx]
  const total = quizQuestions.length
  const selectedAnswer = answers[currentIdx]
  const isAnswered = selectedAnswer !== undefined
  const isCorrect = selectedAnswer === current?.answer

  const score = useMemo(() => {
    return quizQuestions.filter((q, i) => answers[i] === q.answer).length
  }, [quizQuestions, answers])

  function selectAnswer(optionIdx) {
    if (submitted) return
    setAnswers(a => ({ ...a, [currentIdx]: optionIdx }))
    setSubmitted(true)
  }

  function next() {
    if (currentIdx < total - 1) {
      setCurrentIdx(i => i + 1)
      setSubmitted(false)
    } else {
      setFinished(true)
    }
  }

  function retry() {
    setQuizQuestions(shuffleAndPick(questions, displayCount))
    setCurrentIdx(0)
    setAnswers({})
    setSubmitted(false)
    setFinished(false)
  }

  if (finished) {
    return (
      <div className="max-w-xl mx-auto px-4 py-6">
        <ScoreScreen score={score} total={total} onRetry={retry} />

        {/* Answer review */}
        <div className="mt-8">
          <h3 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
            <Target className="h-4 w-4 text-primary" /> Question Review
          </h3>
          <div className="space-y-2">
            {quizQuestions.map((q, i) => {
              const correct = answers[i] === q.answer
              return (
                <div key={i} className={cn(
                  'rounded-lg border p-3 text-sm',
                  correct ? 'border-emerald-200 bg-emerald-50 dark:bg-emerald-950/40 dark:border-emerald-800' : 'border-rose-200 bg-rose-50 dark:bg-rose-950/40 dark:border-rose-800'
                )}>
                  <div className="flex items-start gap-2">
                    {correct ? <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" /> : <XCircle className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />}
                    <div>
                      <p className="font-medium text-foreground text-xs">{q.q}</p>
                      {!correct && (
                        <p className="text-xs text-muted-foreground mt-1">
                          Correct: <span className="font-semibold text-emerald-600 dark:text-emerald-400">{q.options[q.answer]}</span>
                        </p>
                      )}
                      {q.explanation && (
                        <p className="text-xs text-muted-foreground mt-1 italic">{q.explanation}</p>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-sm">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-black text-foreground">{title}</h1>
            {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
          </div>
        </div>

        {/* Progress bar */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full transition-all duration-500"
              style={{ width: `${((currentIdx + (submitted ? 1 : 0)) / total) * 100}%` }}
            />
          </div>
          <span className="text-xs font-bold text-muted-foreground shrink-0">{currentIdx + 1}/{total}</span>
        </div>

        {/* Score tracker */}
        <div className="flex gap-1 mt-2">
          {quizQuestions.map((_, i) => (
            <div key={i} className={cn(
              'h-1.5 flex-1 rounded-full transition-colors',
              i < currentIdx
                ? (answers[i] === quizQuestions[i].answer ? 'bg-emerald-500' : 'bg-rose-400')
                : i === currentIdx
                ? 'bg-primary/50'
                : 'bg-muted',
            )} />
          ))}
        </div>
      </div>

      {/* Question card */}
      <div className="rounded-2xl border border-border bg-card shadow-sm p-6 mb-4">
        <p className="text-sm font-bold text-foreground leading-relaxed mb-5">{current.q}</p>

        <div className="space-y-2.5">
          {current.options.map((opt, oi) => {
            const isSelected = selectedAnswer === oi
            const isCorrectOpt = oi === current.answer

            return (
              <button
                key={oi}
                onClick={() => selectAnswer(oi)}
                disabled={submitted}
                className={cn(
                  'w-full text-left px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-200',
                  !submitted && 'hover:border-primary/40 hover:bg-primary/5 cursor-pointer',
                  !submitted && !isSelected && 'border-border bg-background text-foreground',
                  !submitted && isSelected && 'border-primary bg-primary/10 text-primary',
                  submitted && isCorrectOpt && 'border-emerald-500 bg-emerald-50 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300',
                  submitted && isSelected && !isCorrectOpt && 'border-rose-400 bg-rose-50 text-rose-800 dark:bg-rose-950/50 dark:text-rose-300',
                  submitted && !isSelected && !isCorrectOpt && 'border-border bg-background text-muted-foreground opacity-60',
                )}
              >
                <div className="flex items-start gap-3">
                  <span className={cn(
                    'flex-shrink-0 h-6 w-6 rounded-full border flex items-center justify-center text-xs font-bold mt-0.5',
                    !submitted && 'border-current',
                    submitted && isCorrectOpt && 'border-emerald-500 bg-emerald-500 text-white',
                    submitted && isSelected && !isCorrectOpt && 'border-rose-400 bg-rose-400 text-white',
                    submitted && !isSelected && !isCorrectOpt && 'border-muted-foreground/30',
                  )}>
                    {submitted && isCorrectOpt ? <CheckCircle2 className="h-3.5 w-3.5" /> :
                     submitted && isSelected && !isCorrectOpt ? <XCircle className="h-3.5 w-3.5" /> :
                     String.fromCharCode(65 + oi)}
                  </span>
                  <span className="flex-1">{opt}</span>
                </div>
              </button>
            )
          })}
        </div>

        {/* Explanation */}
        {submitted && current.explanation && (
          <div className={cn(
            'mt-4 rounded-lg p-3 text-sm border',
            isCorrect
              ? 'bg-emerald-50 border-emerald-200 text-emerald-800 dark:bg-emerald-950/40 dark:border-emerald-800 dark:text-emerald-300'
              : 'bg-rose-50 border-rose-200 text-rose-800 dark:bg-rose-950/40 dark:border-rose-800 dark:text-rose-300',
          )}>
            <div className="flex items-center gap-1.5 mb-1 font-semibold">
              {isCorrect ? <CheckCircle2 className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
              {isCorrect ? 'Correct!' : 'Incorrect'}
            </div>
            <p className="text-xs leading-relaxed">{current.explanation}</p>
          </div>
        )}
      </div>

      {/* Next button */}
      {submitted && (
        <button
          onClick={next}
          className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-md"
        >
          {currentIdx < total - 1 ? (
            <><span>Next Question</span><ChevronRight className="h-4 w-4" /></>
          ) : (
            <><Trophy className="h-4 w-4" /><span>See Results</span></>
          )}
        </button>
      )}

      {!submitted && (
        <p className="text-center text-xs text-muted-foreground mt-2">Select an answer to continue</p>
      )}
    </div>
  )
}
