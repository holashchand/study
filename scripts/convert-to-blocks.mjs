import { parse } from 'node-html-parser'
import { readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'

const chaptersDir = resolve(process.cwd(), 'src/data/courses/java-fundamentals/chapters')

// Decode HTML entities in a string
function decodeEntities(str) {
  return str
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, ' ')
}

// Convert inline HTML to markdown-lite text
function inlineToText(node) {
  if (!node) return ''
  let result = ''
  for (const child of node.childNodes) {
    if (child.nodeType === 3) {
      // text node — use .text to decode HTML entities (&lt; → <)
      result += child.text
    } else {
      const tag = child.tagName?.toLowerCase()
      const inner = inlineToText(child)
      if (tag === 'strong' || tag === 'b') result += `**${inner}**`
      else if (tag === 'code') result += `\`${inner}\``
      else if (tag === 'em' || tag === 'i') result += `_${inner}_`
      else result += inner
    }
  }
  return result.trim()
}

// Parse HTML string into block array
function htmlToBlocks(html) {
  const root = parse(html)
  const blocks = []

  function processNode(node) {
    if (node.nodeType === 3) {
      // text node - skip if whitespace only
      if (node.text.trim()) {
        blocks.push({ type: 'paragraph', text: node.text.trim() })
      }
      return
    }

    const tag = node.tagName?.toLowerCase()
    if (!tag) {
      // process children
      for (const child of node.childNodes) processNode(child)
      return
    }

    if (tag === 'h2') {
      blocks.push({ type: 'heading', level: 2, text: node.text.trim() })
    } else if (tag === 'h3') {
      blocks.push({ type: 'heading', level: 3, text: node.text.trim() })
    } else if (tag === 'h4') {
      blocks.push({ type: 'heading', level: 4, text: node.text.trim() })
    } else if (tag === 'p') {
      const cls = node.getAttribute('class') || ''
      const text = inlineToText(node)
      if (!text) return
      if (cls.includes('syntax-label')) {
        blocks.push({ type: 'heading', level: 4, text })
      } else {
        blocks.push({ type: 'paragraph', text })
      }
    } else if (tag === 'ul' || tag === 'ol') {
      const items = node.querySelectorAll('li').map(li => inlineToText(li)).filter(Boolean)
      if (items.length) blocks.push({ type: 'list', ordered: tag === 'ol', items })
    } else if (tag === 'pre') {
      const cls = node.getAttribute('class') || ''
      // node-html-parser treats <pre> as raw text — querySelector('code') always fails.
      // Use rawText (innerHTML of <pre>) and parse with regex instead.
      const inner = node.rawText || ''
      const codeMatch = inner.match(/^<code(?:\s[^>]*)?>(.+?)<\/code>$/s)
      if (codeMatch) {
        const openTag = inner.match(/^<code([^>]*)>/)
        const codeCls = openTag ? (openTag[1] || '') : ''
        const langMatch = codeCls.match(/language-(\w+)/)
        const language = langMatch ? langMatch[1] : 'text'
        const code = decodeEntities(codeMatch[1])
        blocks.push({ type: 'code', language, code })
      } else if (cls.includes('diagram')) {
        blocks.push({ type: 'diagram', content: decodeEntities(inner) })
      } else {
        // Plain <pre> without <code> — treat as code
        blocks.push({ type: 'code', language: 'text', code: decodeEntities(inner) })
      }
    } else if (tag === 'table') {
      const headers = node.querySelectorAll('thead th').map(th => th.text.trim())
      const rows = node.querySelectorAll('tbody tr').map(tr =>
        tr.querySelectorAll('td').map(td => inlineToText(td))
      )
      if (headers.length && rows.length) {
        blocks.push({ type: 'table', headers, rows })
      }
    } else if (tag === 'div') {
      const cls = node.getAttribute('class') || ''
      const variant = ['note', 'tip', 'warning', 'important'].find(v => cls.includes(v))
      if (variant) {
        // Extract title from first strong/b element or first heading
        const titleEl = node.querySelector('strong') || node.querySelector('b') || node.querySelector('h3') || node.querySelector('h4')
        const title = titleEl ? titleEl.text.trim() : undefined
        // Get all text content excluding the title element
        let text = ''
        const childBlocks = []
        for (const child of node.childNodes) {
          const childTag = child.tagName?.toLowerCase()
          if (child === titleEl) continue
          if (childTag === 'p') {
            const t = inlineToText(child)
            if (t) childBlocks.push(t)
          } else if (childTag === 'ul' || childTag === 'ol') {
            const items = child.querySelectorAll('li').map(li => inlineToText(li)).filter(Boolean)
            if (items.length) childBlocks.push(items.join('\n- '))
          } else if (child.nodeType === 3 && child.text.trim()) {
            childBlocks.push(child.text.trim())
          }
        }
        text = childBlocks.join(' ').trim() || node.text.trim()
        blocks.push({ type: 'callout', variant, ...(title ? { title } : {}), text })
      } else {
        // generic div - process children
        for (const child of node.childNodes) processNode(child)
      }
    } else if (tag === 'hr') {
      blocks.push({ type: 'divider' })
    } else if (['span', 'section', 'article', 'main', 'header', 'footer'].includes(tag)) {
      for (const child of node.childNodes) processNode(child)
    } else {
      // skip unknown tags but process children
      for (const child of node.childNodes) processNode(child)
    }
  }

  for (const child of root.childNodes) processNode(child)
  return blocks
}

// Extract sections from a chapter JSX file
function extractSections(fileContent) {
  const sections = []
  // Match each section object: { id: '...', title: '...', content: () => ... }
  // We need to extract id, title, and the HTML template literal

  // Split by section boundaries - look for id: ' patterns
  const sectionPattern = /\{\s*\n?\s*id:\s*['"]([^'"]+)['"]\s*,\s*\n?\s*title:\s*['"]([^'"]+)['"]/g
  let match
  const sectionStarts = []
  while ((match = sectionPattern.exec(fileContent)) !== null) {
    sectionStarts.push({ index: match.index, id: match[1], title: match[2] })
  }

  for (let i = 0; i < sectionStarts.length; i++) {
    const { id, title } = sectionStarts[i]
    const start = sectionStarts[i].index
    const end = i + 1 < sectionStarts.length ? sectionStarts[i + 1].index : fileContent.length

    const chunk = fileContent.slice(start, end)

    // Find the HTML content inside dangerouslySetInnerHTML={{ __html: `...` }}
    // The template literal starts after __html: ` and ends before ` }} />
    const htmlStart = chunk.indexOf('__html: `')
    if (htmlStart === -1) continue

    const contentStart = htmlStart + 9 // length of '__html: `'

    // Find the end of template literal - look for ` }} />
    // Be careful with nested backticks
    let depth = 1
    let pos = contentStart
    let htmlContent = ''

    // Simple approach: find the pattern ` }} at same nesting level
    // Since the HTML shouldn't have backticks, find the first unescaped backtick
    const remaining = chunk.slice(contentStart)
    const backtickIdx = remaining.indexOf('`')
    if (backtickIdx === -1) continue

    htmlContent = remaining.slice(0, backtickIdx)

    const blocks = htmlToBlocks(htmlContent.trim())
    sections.push({ id, title, blocks })
  }

  return sections
}

// Process all chapter files
for (let n = 1; n <= 10; n++) {
  const num = String(n).padStart(2, '0')
  const inputPath = `${chaptersDir}/chapter${num}.jsx`
  const outputPath = `${chaptersDir}/chapter${num}.js`

  console.log(`Converting chapter${num}...`)

  const content = readFileSync(inputPath, 'utf8')
  const sections = extractSections(content)

  if (sections.length === 0) {
    console.warn(`  WARNING: No sections found in chapter${num}!`)
    continue
  }

  console.log(`  Found ${sections.length} sections`)

  // Write new .js file with pure block data
  const output = `// Chapter ${n} - Structured block data (no raw HTML)
export const sections = ${JSON.stringify(sections, null, 2)}
`

  writeFileSync(outputPath, output, 'utf8')
  console.log(`  Written to chapter${num}.js`)
}

console.log('\nConversion complete!')
