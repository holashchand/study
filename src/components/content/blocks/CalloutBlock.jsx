import { Info, Lightbulb, AlertTriangle, AlertCircle } from 'lucide-react'
import { renderInline } from '@/lib/renderInline'

function renderCalloutText(text) {
  if (!text) return null
  return text.split('\n').map((line, i) => {
    const isBullet = line.startsWith('- ')
    const content = isBullet ? line.slice(2) : line
    if (isBullet) return (
      <li key={i} className="ml-4 list-disc">{renderInline(content)}</li>
    )
    return <p key={i} className={i > 0 ? 'mt-1' : ''}>{renderInline(content)}</p>
  })
}

// Use static inline styles so dark/light both work without Tailwind scanning issues
const CONFIG = {
  note: {
    icon: Info,
    label: 'Note',
    bg: { light: '#eff6ff', dark: '#1e3a5f' },
    border: '#3b82f6',
    iconColor: '#2563eb',
    titleColor: { light: '#1d4ed8', dark: '#93c5fd' },
  },
  tip: {
    icon: Lightbulb,
    label: 'Tip',
    bg: { light: '#f0fdf4', dark: '#14532d' },
    border: '#22c55e',
    iconColor: '#16a34a',
    titleColor: { light: '#15803d', dark: '#86efac' },
  },
  warning: {
    icon: AlertTriangle,
    label: 'Warning',
    bg: { light: '#fffbeb', dark: '#451a03' },
    border: '#f59e0b',
    iconColor: '#d97706',
    titleColor: { light: '#b45309', dark: '#fcd34d' },
  },
  important: {
    icon: AlertCircle,
    label: 'Important',
    bg: { light: '#faf5ff', dark: '#3b0764' },
    border: '#a855f7',
    iconColor: '#9333ea',
    titleColor: { light: '#7e22ce', dark: '#d8b4fe' },
  },
}

export function CalloutBlock({ block }) {
  const cfg = CONFIG[block.variant] || CONFIG.note
  const Icon = cfg.icon

  return (
    <div
      className="mb-5 rounded-xl overflow-hidden border-l-4"
      style={{ borderColor: cfg.border }}
    >
      {/* Header */}
      <div
        className="flex items-center gap-2 px-4 py-2 text-sm font-semibold border-b"
        style={{ borderColor: cfg.border + '40' }}
      >
        <span className="dark:hidden">
          <Icon className="h-4 w-4 shrink-0" style={{ color: cfg.iconColor }} />
        </span>
        <span className="hidden dark:inline">
          <Icon className="h-4 w-4 shrink-0" style={{ color: cfg.titleColor.dark }} />
        </span>
        <span className="dark:hidden" style={{ color: cfg.titleColor.light }}>
          {block.title || cfg.label}
        </span>
        <span className="hidden dark:inline" style={{ color: cfg.titleColor.dark }}>
          {block.title || cfg.label}
        </span>
      </div>

      {/* Body */}
      <div className="px-4 py-3 text-sm leading-relaxed bg-card text-card-foreground">
        <ul className="space-y-0.5">{renderCalloutText(block.text)}</ul>
      </div>
    </div>
  )
}
