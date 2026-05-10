# Study Platform - Project Overview

## What is it?

A React-based educational platform for hosting structured course content. Built with a **block-based content schema** where chapters are composed of semantic building blocks (heading, paragraph, code, quiz, etc.) rather than raw HTML. Designed for enterprise-grade maintainability with theme support, responsive UI, and extensible content architecture.

## Tech Stack

- **Frontend:** React 19, React Router v7 (HashRouter)
- **Styling:** Tailwind CSS v4, shadcn UI components
- **Code:** Vite (build tool), Lucide icons
- **Syntax highlighting:** react-syntax-highlighter with Prism
- **Diagrams:** Mermaid.js (client-side), PlantUML via Kroki.io (server-side)
- **Utilities:** clsx, class-variance-authority, tailwind-merge

## Running the Project

```bash
# Development server (http://localhost:5173)
npm run dev

# Production build
npm run build

# Preview built assets
npm run preview
```

## Folder Structure

```
src/
├── pages/              # Top-level page components (HomePage, CoursePage, ChapterPage, TopQuestionsPage, QuizPage, ShortNotesPage)
├── components/         # Reusable component library
│   ├── ui/            # shadcn primitives (button, card, badge, ThemeToggle, etc.)
│   ├── layout/        # App shell components (AppShell, TopNav, Sidebar)
│   └── content/       # BlockRenderer + block components
│       ├── blocks/    # Individual block types (HeadingBlock, CodeBlock, etc.)
│       ├── TopQuestionsView.jsx   # Searchable Q&A accordion with difficulty filter
│       ├── QuizView.jsx           # Interactive random-question quiz with score screen
│       └── ShortNotesView.jsx     # Key points, quick facts, remember-this panels
├── data/              # Content and configuration
│   ├── courses/       # Course data (see src/data/CLAUDE.md)
│   ├── registry.js    # Course registration
│   └── schema.js      # Block type definitions
├── context/           # React Context (ThemeProvider, ThemeContext)
├── hooks/             # Custom React hooks
├── router/            # AppRouter with HashRouter config
├── lib/               # Utilities (cn for class merging)
└── index.css          # Global styles and CSS variables
```

## Routing

Using **HashRouter** for client-side routing (URLs like `#/courses/java`):

- **`/`** — HomePage: List all available courses
- **`/courses/:courseSlug`** — CoursePage: Course overview + chapter list + course-level Q&A + quiz cards
- **`/courses/:courseSlug/chapter/:num`** — ChapterPage: Render chapter sections with sidebar navigation + extras bar
- **`/courses/:courseSlug/top-questions`** — TopQuestionsPage: Course-level top N interview questions (100 for Java)
- **`/courses/:courseSlug/quiz`** — QuizPage: Course quiz — 30 random from all chapter quiz pools (150 total for Java)
- **`/courses/:courseSlug/short-notes`** — ShortNotesPage: Course notes aggregating all chapters (accordion, one per chapter)
- **`/courses/:courseSlug/chapter/:num/top-questions`** — Chapter-level top questions (20 for Java)
- **`/courses/:courseSlug/chapter/:num/quiz`** — Chapter-level quiz (10 random from 15 pool)
- **`/courses/:courseSlug/chapter/:num/short-notes`** — Chapter short notes (key points, quick facts, reminders)

## Theme System

The app uses **ThemeContext** with persistent localStorage storage:

- **Storage key:** `theme` (values: `'light'` | `'dark'` | `'system'`)
- **DOM:** Adds `.dark` class to `<html>` element when theme is dark
- **CSS Variables:** Defined in `src/index.css` for semantic token colors
- **ThemeToggle component:** Located in `src/components/ui/ThemeToggle.jsx`

Semantic color tokens (use these, never hardcoded colors):
- `bg-background`, `bg-muted`, `bg-card`
- `text-foreground`, `text-muted-foreground`, `text-primary`
- `border-border`

Theme must use bright and constrating colors for visibility. it should not be too contrasting or dark/white as for blind

## How to Add a New Course

1. Create a new folder: `src/data/courses/<slug>/`
2. Create `meta.js` with course metadata and chapters array
3. Create `chapters/chapter01.jsx`, `chapter02.jsx`, etc. exporting `sections` array
4. Import metadata in `src/data/courses/registry.js` and add to `courses` array

See **`src/data/CLAUDE.md`** for detailed step-by-step instructions and examples.

## Chapter Extras System

Each chapter in `meta.js` can optionally carry:
- `topQuestions: []` — array of `{id, difficulty, q, a, tags?}` objects
- `topQuestionsCount: 20` — display label for total count
- `quiz: []` — pool of `{id, q, options[], answer, explanation}` MCQ objects
- `quizDisplayCount: 10` — how many to randomly select per quiz attempt
- `shortNotes: { title, color, keyPoints[], quickFacts[], rememberThis[] }` — structured key-point notes

Course-level (`meta.js` root): `topQuestions`, `topQuestionsCount`, `quiz`, `quizConfig.displayCount`.

Data files follow naming convention: `chapter0N-extras.js` alongside `chapter0N.js`.

## Key Design Decisions

### Block-Based Content Schema
All chapter content is structured as an array of **blocks** with a `type` field. Each block type has a specific shape (e.g., code blocks have `language`, `code`, optional `filename`, `highlightLines`). This enables:
- Reusable block components
- Easy validation and migration
- Semantic content structure
- No hardcoded HTML

### shadcn UI + Tailwind
- shadcn components provide accessible, styled primitives
- Tailwind CSS for utility-first styling with semantic tokens
- No component library lock-in (components are just files)

### Diagram Block — Mermaid & PlantUML Support
The `diagram` block type supports three formats via the optional `format` field:

- **No `format` (default):** ASCII art rendered in a `<pre>` tag (legacy)
- **`format: 'mermaid'`:** Rendered client-side using Mermaid.js. Respects dark/light theme. Component: `src/components/content/MermaidDiagram.jsx`
- **`format: 'plantuml'`:** Rendered server-side via [Kroki.io](https://kroki.io). Component: `src/components/content/PlantUMLDiagram.jsx`

All 28 diagrams across Java Fundamentals chapters have been converted to Mermaid.

```javascript
// Mermaid flowchart example
{ type: 'diagram', format: 'mermaid', content: 'flowchart LR\n  A["Source"] --> B["Output"]', label: 'Optional label' }

// PlantUML example
{ type: 'diagram', format: 'plantuml', content: '@startuml\nAlice -> Bob: Hello\n@enduml' }
```

### HtmlBlock Fallback
The `html` block type supports raw HTML for legacy content or edge cases, but new courses should use structured blocks. See `src/components/content/blocks/HtmlBlock.jsx`.

### Responsive Design
- Mobile-first Tailwind approach
- Sidebar hidden on screens < `lg` (1024px)
- TopNav always visible with responsive back button
- ScrollArea for long content

## Component Organization

See **`src/components/CLAUDE.md`** for detailed component architecture, BlockRenderer mechanics, and how to add new block types.

## AI Instructions

After completion of any change test building the application and update this file and other CLAUDE.md files to be up to date
