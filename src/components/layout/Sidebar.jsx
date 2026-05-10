import { useState } from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'
import { BookOpen, PanelLeftClose, PanelLeftOpen } from 'lucide-react'

export function Sidebar({ sections, currentIdx, onNavigate }) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside className={cn(
      'hidden lg:flex flex-col shrink-0 border-r border-border bg-card transition-all duration-200',
      collapsed ? 'w-12' : 'w-64'
    )}>
      {/* Header row */}
      <div className="flex items-center justify-between px-3 py-3 border-b border-border shrink-0">
        {!collapsed && (
          <div className="flex items-center gap-2 min-w-0">
            <BookOpen className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground truncate">
              Contents
            </span>
          </div>
        )}
        <button
          onClick={() => setCollapsed(c => !c)}
          className={cn(
            'flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground transition-colors shrink-0',
            collapsed && 'mx-auto'
          )}
          title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed
            ? <PanelLeftOpen className="h-4 w-4" />
            : <PanelLeftClose className="h-4 w-4" />
          }
        </button>
      </div>

      {/* Section list — hidden when collapsed */}
      {!collapsed && (
        <ScrollArea className="flex-1">
          <nav className="p-2">
            {sections.map((section, idx) => (
              <button
                key={section.id}
                onClick={() => onNavigate(idx)}
                className={cn(
                  'w-full text-left px-3 py-1.5 rounded-md text-xs transition-colors mb-0.5 leading-snug',
                  idx === currentIdx
                    ? 'bg-primary/10 text-primary font-semibold border-l-2 border-primary pl-[10px]'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
              >
                {section.title}
              </button>
            ))}
          </nav>
        </ScrollArea>
      )}

      {/* Collapsed: show dot indicators for sections */}
      {collapsed && (
        <div className="flex flex-col items-center gap-1.5 py-3 flex-1 overflow-hidden">
          {sections.map((_, idx) => (
            <button
              key={idx}
              onClick={() => { onNavigate(idx); setCollapsed(false) }}
              className={cn(
                'h-2 w-2 rounded-full transition-all',
                idx === currentIdx ? 'bg-primary scale-125' : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'
              )}
              title={sections[idx]?.title}
            />
          ))}
        </div>
      )}
    </aside>
  )
}

export default Sidebar
