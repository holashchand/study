import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import {
  oneDark,
  vscDarkPlus,
  dracula,
  nord,
  materialLight,
  solarizedlight,
} from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/context/ThemeContext'

// GitHub Light — high-contrast custom theme
const githubLight = {
  'code[class*="language-"]': { color: '#24292e', background: '#f6f8fa' },
  'pre[class*="language-"]':  { color: '#24292e', background: '#f6f8fa', overflow: 'auto' },
  comment:     { color: '#6a737d', fontStyle: 'italic' },
  prolog:      { color: '#6a737d' },
  doctype:     { color: '#6a737d' },
  cdata:       { color: '#6a737d' },
  punctuation: { color: '#24292e' },
  keyword:     { color: '#d73a49', fontWeight: 'bold' },
  boolean:     { color: '#005cc5' },
  number:      { color: '#005cc5' },
  string:      { color: '#032f62' },
  char:        { color: '#032f62' },
  regex:       { color: '#032f62' },
  operator:    { color: '#d73a49' },
  variable:    { color: '#e36209' },
  constant:    { color: '#005cc5' },
  property:    { color: '#005cc5' },
  function:    { color: '#6f42c1' },
  'class-name':{ color: '#6f42c1' },
  'attr-name': { color: '#005cc5' },
  'attr-value':{ color: '#032f62' },
  atrule:      { color: '#d73a49' },
  selector:    { color: '#6f42c1' },
  important:   { fontWeight: 'bold' },
  bold:        { fontWeight: 'bold' },
  italic:      { fontStyle: 'italic' },
  inserted:    { color: '#22863a', background: '#f0fff4' },
  deleted:     { color: '#b31d28', background: '#ffeef0' },
}

const THEME_MAP = {
  'one-dark':        oneDark,
  'vsc-dark':        vscDarkPlus,
  'dracula':         dracula,
  'nord':            nord,
  'github-light':    githubLight,
  'material-light':  materialLight,
  'solarized-light': solarizedlight,
}

export function CodeBlock({ block }) {
  const [copied, setCopied] = useState(false)
  const { codeTheme } = useTheme()
  const syntaxStyle = THEME_MAP[codeTheme] || oneDark

  const copy = () => {
    navigator.clipboard.writeText(block.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="mb-4 rounded-lg border border-border overflow-hidden">
      {block.filename && (
        <div className="flex items-center justify-between px-4 py-2 bg-muted border-b border-border">
          <span className="text-xs font-mono text-muted-foreground">{block.filename}</span>
          <Button variant="ghost" size="icon" className="h-6 w-6" onClick={copy}>
            {copied ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5" />}
          </Button>
        </div>
      )}
      <div className="relative">
        {!block.filename && (
          <Button variant="ghost" size="icon" className="absolute top-2 right-2 h-6 w-6 z-10" onClick={copy}>
            {copied ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5" />}
          </Button>
        )}
        <SyntaxHighlighter
          key={block.code}
          language={block.language || 'text'}
          style={syntaxStyle}
          customStyle={{ margin: 0, borderRadius: 0, fontSize: '0.875rem' }}
        >
          {block.code}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}
