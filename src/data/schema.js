/**
 * Study Platform - Content Block Schema
 *
 * Every section has: { id: string, title: string, blocks: Block[] }
 *
 * Block types:
 *
 * { type: 'heading', level: 2|3|4, text: string }
 * { type: 'paragraph', text: string }   // supports **bold**, `code`, _italic_ inline
 * { type: 'list', ordered: boolean, items: string[] }
 * { type: 'code', language: string, code: string, filename?: string, highlightLines?: number[] }
 * { type: 'diagram', content: string, label?: string, format?: 'mermaid'|'plantuml' }
 *   format omitted → ASCII art (legacy)
 *   format 'mermaid' → rendered client-side with Mermaid.js
 *   format 'plantuml' → rendered via Kroki.io (https://kroki.io)
 * { type: 'table', headers: string[], rows: string[][] }
 * { type: 'callout', variant: 'note'|'tip'|'warning'|'important', title?: string, text: string }
 * { type: 'badge', text: string, variant: 'lts'|'preview'|'new'|'default' }
 * { type: 'image', src: string, alt: string, caption?: string }
 * { type: 'quiz', questions: Array<{ q: string, options: string[], answer: number, explanation?: string }> }
 * { type: 'divider' }
 * { type: 'html', html: string }  // fallback for unmigrated content
 */

export const BLOCK_TYPES = [
  'heading', 'paragraph', 'list', 'code', 'diagram',
  'table', 'callout', 'badge', 'image', 'quiz', 'divider', 'html'
]
