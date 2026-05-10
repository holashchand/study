# Data Architecture & Course System

## Directory Structure

```
src/data/
├── courses/
│   ├── registry.js                 # Central course registry
│   └── <course-slug>/
│       ├── meta.js                # Course metadata + chapters array
│       └── chapters/
│           ├── chapter01.jsx       # Sections for chapter 1
│           ├── chapter02.jsx       # Sections for chapter 2
│           └── ...
├── schema.js                       # Block type definitions (BLOCK_TYPES)
└── CLAUDE.md                       # (this file)
```

## Course Registration

**File:** `src/data/courses/registry.js`

```javascript
import javaMeta from './java-fundamentals/meta.js'

const courses = [javaMeta]

export default courses
export function getCourse(slug) {
  return courses.find(c => c.slug === slug) ?? null
}
```

To register a new course:
1. Import its metadata: `import myCourseMeta from './my-course/meta.js'`
2. Add to the `courses` array: `const courses = [javaMeta, myCourseMeta]`

## Course Metadata Shape

**File:** `src/data/courses/<slug>/meta.js`

```javascript
const meta = {
  slug: 'java-fundamentals',              // Unique identifier (URL-safe)
  title: 'Java Fundamentals',             // Display title
  description: 'Core Java concepts...',   // Short description for course list
  icon: 'Java',                           // Icon name (from Lucide)
  chapters: [
    {
      num: 1,
      title: 'Java Foundations & Environment Setup',
      description: 'JDK, JVM, JIT, versions, Hello World, packages.',
      subtitle: 'Platform, toolchain, and your first Java program.',
      sections: s01,  // Sections array imported from chapter01.jsx
    },
    // ... more chapters
  ]
}

export default meta
```

**Required fields:**
- `slug` — Must be unique, used in URLs
- `title` — Display name on course page
- `description` — Short description for course list
- `icon` — Lucide icon name
- `chapters` — Array of chapter objects

**Chapter object:**
- `num` — Chapter number (1-based)
- `title` — Chapter title
- `description` — Short summary
- `subtitle` — Secondary text (display style)
- `sections` — Array of section objects (see below)

## Section Shape

Each chapter exports a `sections` array. A section is an object:

```javascript
{
  id: 'what-is-java',              // Unique within chapter, used for navigation
  title: '1. What is Java?',       // Display title
  blocks: [                        // Array of content blocks (see Block Schema below)
    { type: 'heading', level: 2, text: 'Key Concepts' },
    { type: 'paragraph', text: 'Java is a...' },
    // ... more blocks
  ]
}
```

**Fields:**
- `id` — Unique identifier (slug format)
- `title` — Section heading
- `blocks` — Array of block objects (see below)

> **Note:** Older sections use a `content()` function returning JSX (for legacy content only). New sections should use the `blocks` array with structured block objects.

## Full Block Schema

The platform supports **12 block types**, all defined in `src/data/schema.js`:

### 1. Heading
```javascript
{
  type: 'heading',
  level: 2|3|4,           // Heading level (h2, h3, h4)
  text: 'Section Title'
}
```

### 2. Paragraph
```javascript
{
  type: 'paragraph',
  text: 'Main text here. Supports **bold**, `code`, _italic_ inline.'
}
```
Inline markdown: `**bold**`, `` `code` ``, `_italic_`

### 3. List
```javascript
{
  type: 'list',
  ordered: false,         // true for numbered list
  items: [
    'First item',
    'Second item',
    'Third item'
  ]
}
```

### 4. Code
```javascript
{
  type: 'code',
  language: 'java',       // Language for syntax highlighting
  code: 'public static void main(String[] args) { ... }',
  filename: 'Main.java',  // Optional: display filename
  highlightLines: [1, 3]  // Optional: line numbers to highlight
}
```

### 5. Diagram
```javascript
{
  type: 'diagram',
  content: '┌─────┐\n│ Box │\n└─────┘',  // ASCII art
  label: 'Architecture'    // Optional: display label
}
```

### 6. Table
```javascript
{
  type: 'table',
  headers: ['Column 1', 'Column 2', 'Column 3'],
  rows: [
    ['Cell 1', 'Cell 2', 'Cell 3'],
    ['Cell 4', 'Cell 5', 'Cell 6']
  ]
}
```

### 7. Callout
```javascript
{
  type: 'callout',
  variant: 'note'|'tip'|'warning'|'important',
  title: 'Remember',               // Optional
  text: 'This is important to know.'
}
```

### 8. Badge
```javascript
{
  type: 'badge',
  text: 'Java 8+',
  variant: 'lts'|'preview'|'new'|'default'
}
```

### 9. Image
```javascript
{
  type: 'image',
  src: '/path/to/image.png',
  alt: 'Description for accessibility',
  caption: 'Optional image caption'  // Optional
}
```

### 10. Quiz
```javascript
{
  type: 'quiz',
  questions: [
    {
      q: 'What does JVM stand for?',
      options: [
        'Java Virtual Machine',
        'Java Validation Model',
        'Java Verification Memory'
      ],
      answer: 0,               // Index of correct answer
      explanation: 'JVM is the virtual machine...'  // Optional
    }
  ]
}
```

### 11. Divider
```javascript
{
  type: 'divider'
}
```

### 12. HTML (Legacy Fallback)
```javascript
{
  type: 'html',
  html: '<div class="custom"><p>Raw HTML</p></div>'
}
```

> Use this only for content that cannot be represented with structured blocks. New content should use blocks 1–11.

## How to Add a New Course

### Step 1: Create Course Folder
```bash
mkdir -p src/data/courses/<slug>/chapters
```

### Step 2: Create Metadata File

**File:** `src/data/courses/<slug>/meta.js`

```javascript
import { sections as s01 } from './chapters/chapter01'
import { sections as s02 } from './chapters/chapter02'

const meta = {
  slug: 'my-course',
  title: 'My Course Title',
  description: 'A brief description of the course.',
  icon: 'BookOpen',  // Lucide icon name
  chapters: [
    {
      num: 1,
      title: 'Chapter 1: Getting Started',
      description: 'Introduction and setup',
      subtitle: 'Learn the basics',
      sections: s01,
    },
    {
      num: 2,
      title: 'Chapter 2: Core Concepts',
      description: 'Deep dive into concepts',
      subtitle: 'Intermediate level',
      sections: s02,
    },
    // Add more chapters as needed
  ]
}

export default meta
```

### Step 3: Create Chapter Files

**File:** `src/data/courses/<slug>/chapters/chapter01.jsx`

```javascript
export const sections = [
  {
    id: 'intro',
    title: 'Introduction',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Welcome to Chapter 1'
      },
      {
        type: 'paragraph',
        text: 'This chapter covers the fundamentals. Let\'s get started!'
      },
      {
        type: 'divider'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Learning Objectives'
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Understand core concepts',
          'Apply knowledge to real examples',
          'Practice with exercises'
        ]
      }
    ]
  },
  {
    id: 'first-topic',
    title: 'First Topic',
    blocks: [
      {
        type: 'heading',
        level: 3,
        text: 'Key Points'
      },
      {
        type: 'callout',
        variant: 'tip',
        title: 'Pro Tip',
        text: 'Remember this important concept.'
      },
      {
        type: 'code',
        language: 'javascript',
        code: 'const greeting = "Hello, World!";',
        filename: 'greeting.js'
      },
      {
        type: 'paragraph',
        text: 'Use `const` to declare constants and `let` for variables.'
      }
    ]
  },
  {
    id: 'check-your-knowledge',
    title: 'Check Your Knowledge',
    blocks: [
      {
        type: 'quiz',
        questions: [
          {
            q: 'What does const mean?',
            options: ['Constant', 'Container', 'Context'],
            answer: 0,
            explanation: 'const declares a constant value that cannot be reassigned.'
          }
        ]
      }
    ]
  }
]
```

Create `chapter02.jsx`, `chapter03.jsx`, etc. with similar structure.

### Step 4: Register in Registry

**File:** `src/data/courses/registry.js`

```javascript
import javaMeta from './java-fundamentals/meta.js'
import myCourseMeta from './my-course/meta.js'  // Add this line

const courses = [javaMeta, myCourseMeta]  // Add to array

export default courses
export function getCourse(slug) {
  return courses.find(c => c.slug === slug) ?? null
}
```

### Step 5: Verify

1. Run the app: `npm run dev`
2. Go to `http://localhost:5173/#/`
3. Your course should appear on the home page
4. Click to view course overview
5. Click a chapter to view its content

## Chapter File Template

Here's a minimal working chapter file with multiple block types:

```javascript
export const sections = [
  {
    id: 'section-1',
    title: '1. Introduction',
    blocks: [
      { type: 'heading', level: 2, text: 'What You\'ll Learn' },
      {
        type: 'list',
        ordered: false,
        items: ['Concept A', 'Concept B', 'Concept C']
      }
    ]
  },
  {
    id: 'section-2',
    title: '2. Examples',
    blocks: [
      { type: 'heading', level: 2, text: 'Code Example' },
      {
        type: 'code',
        language: 'javascript',
        code: 'function hello() {\n  console.log("Hello!");\n}',
        filename: 'example.js'
      }
    ]
  },
  {
    id: 'section-3',
    title: '3. Important',
    blocks: [
      {
        type: 'callout',
        variant: 'important',
        text: 'This is critical knowledge!'
      }
    ]
  }
]
```

## Best Practices

1. **Use `id` consistently** — Use lowercase, hyphens (e.g., `what-is-java`)
2. **One block per concept** — Don't overload a single block with too much content
3. **Use structured blocks** — Avoid `html` block type for new content
4. **Inline markdown** — Use `**bold**`, `` `code` ``, `_italic_` in paragraphs and callouts
5. **Code blocks** — Always specify `language` for proper syntax highlighting
6. **Tables** — Keep them simple; complex tables should be diagrams
7. **Quiz blocks** — Provide helpful explanations for wrong answers
8. **Callouts** — Use variants sparingly for emphasis (`tip`, `warning`, `important`)
