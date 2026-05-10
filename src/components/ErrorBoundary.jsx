import { Component } from 'react'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null, info: null }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, info) {
    this.setState({ info })
    console.error('[ErrorBoundary]', error, info)
  }

  render() {
    const { error, info } = this.state
    if (!error) return this.props.children

    const msg = error?.message || String(error)
    const stack = info?.componentStack || error?.stack || ''

    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-6 py-16">
        <div className="max-w-xl w-full">
          {/* Icon */}
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-destructive/10 mb-6">
            <AlertTriangle className="h-7 w-7 text-destructive" />
          </div>

          <h1 className="text-2xl font-black mb-2 text-foreground">Something went wrong</h1>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            An unexpected error occurred while rendering this page.
          </p>

          {/* Error message */}
          <div className="rounded-xl border border-destructive/30 bg-destructive/5 px-4 py-3 mb-4">
            <p className="text-sm font-semibold text-destructive mb-1">Error</p>
            <p className="text-sm font-mono text-destructive/80 break-all">{msg}</p>
          </div>

          {/* Stack trace (collapsible) */}
          {stack && (
            <details className="mb-6 rounded-xl border border-border bg-muted/50 overflow-hidden">
              <summary className="px-4 py-2 text-xs font-semibold text-muted-foreground cursor-pointer select-none hover:text-foreground">
                Stack trace
              </summary>
              <pre className="px-4 pb-4 text-xs text-muted-foreground overflow-x-auto whitespace-pre-wrap leading-relaxed">
                {stack.trim()}
              </pre>
            </details>
          )}

          {/* Actions */}
          <div className="flex gap-3 flex-wrap">
            <button
              onClick={() => this.setState({ error: null, info: null })}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <RefreshCw className="h-4 w-4" /> Try Again
            </button>
            <a
              href="/"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
            >
              <Home className="h-4 w-4" /> Go Home
            </a>
          </div>
        </div>
      </div>
    )
  }
}
