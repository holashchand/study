# Component Architecture

## Directory Map

```
src/components/
├── ui/                             # shadcn Primitives
│   ├── button.jsx                 # <Button />
│   ├── card.jsx                   # <Card />
│   ├── badge.jsx                  # <Badge />
│   ├── separator.jsx              # <Separator />
│   ├── scroll-area.jsx            # <ScrollArea />
│   └── ThemeToggle.jsx            # <ThemeToggle /> — dark/light switcher
├── layout/
│   ├── AppShell.jsx               # Page wrapper (TopNav + Sidebar + main content)
│   ├── TopNav.jsx                 # Header with back button, title, theme toggle
│   └── Sidebar.jsx                # Sticky left sidebar (navigation within chapter)
├── content/
│   ├── BlockRenderer.jsx          # Dispatches block.type to renderers
│   └── blocks/                    # Individual block components
│       ├── HeadingBlock.jsx
│       ├── ParagraphBlock.jsx
│       ├── ListBlock.jsx
│       ├── CodeBlock.jsx
│       ├── DiagramBlock.jsx
│       ├── TableBlock.jsx
│       ├── CalloutBlock.jsx
│       ├── QuizBlock.jsx
│       ├── ImageBlock.jsx
│       ├── DividerBlock.jsx
│       └── HtmlBlock.jsx          # Legacy HTML fallback
├── course/
│   ├── CourseCard.jsx             # Course card on home page
│   ├── ChapterCard.jsx            # Chapter card on course overview
│   ├── SectionFooter.jsx          # Previous/Next navigation at chapter bottom
│   └── ProgressBar.jsx            # Reading progress indicator
└── CLAUDE.md                       # (this file)
```

## UI Components

All in `src/components/ui/`:

```jsx
// Button
<Button variant="primary|outline|ghost" size="sm|md|lg">
  Click me
</Button>

// Card (wrapper)
<Card>
  <div className="p-4">Content</div>
</Card>

// Badge
<Badge variant="lts|preview|new|default">Java 8+</Badge>

// Separator (dividing line)
<Separator className="my-4" />

// ScrollArea (scrollable container with mobile-friendly scrollbar)
<ScrollArea className="h-96">
  <div className="p-4">Long content...</div>
</ScrollArea>

// Theme Toggle
<ThemeToggle />  // Toggles light/dark mode
```

Use these shadcn primitives for consistent, accessible UI. They're fully styled with Tailwind and semantic color tokens.

## Layout Components

### TopNav
**File:** `src/components/layout/TopNav.jsx`

```jsx
<TopNav
  backHref="#/courses/java-fundamentals"    // Back button link (optional)
  backLabel="Back to Course"                 // Back button text
  title="Chapter 1: Foundations"             // Center title (optional)
/>
```

**Props:**
- `backHref` — Link for back button (if omitted, shows logo)
- `backLabel` — Text for back button (default: "Back")
- `title` — Chapter/section title (displayed center, muted)
- Also supports legacy props: `prevPath`, `prevLabel`, `tocPath`, `nextPath`, `nextLabel`

**Features:**
- Sticky header with semi-transparent backdrop
- Responsive: Back button text hidden on mobile (`hidden sm:inline`)
- ThemeToggle always visible on right
- Uses semantic Tailwind tokens: `border-border`, `bg-background`, `text-primary`

### Sidebar
**File:** `src/components/layout/Sidebar.jsx`

```jsx
<Sidebar
  sections={[                    // Array of section objects
    { id: 'intro', title: '1. Introduction' },
    { id: 'topic', title: '2. Main Topic' }
  ]}
  currentIdx={0}                 // Currently active section index
  onNavigate={(idx) => {         // Callback when user clicks a section
    setCurrentIdx(idx);
  }}
/>
```

**Props:**
- `sections` — Array of `{ id, title }` objects from chapter
- `currentIdx` — Zero-based index of active section
- `onNavigate(idx)` — Called when user clicks a section

**Features:**
- Hidden on screens smaller than `lg` (1024px)
- Sticky left sidebar with blue left border on active section
- ScrollArea for long section lists
- Uses semantic tokens: `bg-card`, `border-border`, `text-primary`

### AppShell
**File:** `src/components/layout/AppShell.jsx`

Wrapper component that combines TopNav, Sidebar, and main content area.

```jsx
<AppShell
  topNavProps={{ backHref, backLabel, title }}
  sidebar={<Sidebar sections={sections} currentIdx={idx} onNavigate={setIdx} />}
  children={<div>Chapter content</div>}
/>
```

## Content Components

### BlockRenderer
**File:** `src/components/content/BlockRenderer.jsx`

Core dispatcher that renders an array of content blocks:

```jsx
<BlockRenderer
  blocks={[
    { type: 'heading', level: 2, text: 'Hello' },
    { type: 'paragraph', text: 'Body text' },
    { type: 'code', language: 'js', code: '...' }
  ]}
/>
```

**How it works:**
1. Receives a `blocks` array
2. Maps each block to a renderer component based on `block.type`
3. Unknown types display a red error message

**Renderers map:**
```javascript
const RENDERERS = {
  heading:   HeadingBlock,
  paragraph: ParagraphBlock,
  list:      ListBlock,
  code:      CodeBlock,
  diagram:   DiagramBlock,
  table:     TableBlock,
  callout:   CalloutBlock,
  quiz:      QuizBlock,
  image:     ImageBlock,
  html:      HtmlBlock,
  divider:   DividerBlock,
  badge:     BadgeBlock,
}
```

### Block Components

All block components receive `{ block }` prop and render semantic HTML with Tailwind classes.

**Example: HeadingBlock**
```jsx
export function HeadingBlock({ block }) {
  const Tag = `h${block.level}`  // h2, h3, h4
  return <Tag className="font-bold text-foreground">{block.text}</Tag>
}
```

**Semantic styling pattern:**
- Use `text-foreground`, `text-muted-foreground`, `text-primary`
- Use `bg-background`, `bg-muted`, `bg-card`
- Use `border-border` for borders
- Never use hardcoded colors like `text-blue-600`

## How to Add a New Block Type

### Step 1: Add to Schema
**File:** `src/data/schema.js`

```javascript
export const BLOCK_TYPES = [
  'heading', 'paragraph', 'list', 'code', 'diagram',
  'table', 'callout', 'badge', 'image', 'quiz', 'divider', 'html',
  'myNewType'  // Add here
]
```

### Step 2: Create Block Component
**File:** `src/components/content/blocks/MyNewTypeBlock.jsx`

```jsx
export function MyNewTypeBlock({ block }) {
  return (
    <div className="my-4 p-4 bg-muted rounded-md border border-border">
      <h3 className="font-semibold text-foreground mb-2">{block.title}</h3>
      <p className="text-muted-foreground">{block.content}</p>
    </div>
  )
}
```

**Rules:**
- Always use semantic Tailwind tokens, never hardcoded colors
- Add `my-4` for vertical spacing between blocks
- Use `p-4` or similar for internal padding
- Handle optional fields gracefully
- Return null if no content

### Step 3: Register in BlockRenderer
**File:** `src/components/content/BlockRenderer.jsx`

```jsx
import { MyNewTypeBlock } from './blocks/MyNewTypeBlock'

const RENDERERS = {
  // ... existing types
  myNewType: MyNewTypeBlock,  // Add here
}
```

### Step 4: Use in Chapter Data
**File:** `src/data/courses/<slug>/chapters/chapter01.jsx`

```javascript
export const sections = [
  {
    id: 'example',
    title: 'Using New Block Type',
    blocks: [
      {
        type: 'myNewType',
        title: 'Custom Block',
        content: 'This uses our new block type.'
      }
    ]
  }
]
```

## Course Components

### CourseCard
**File:** `src/components/course/CourseCard.jsx`

Displays a course on the home page:

```jsx
<CourseCard course={meta} />
```

**Props:**
- `course` — Course metadata object with `slug`, `title`, `description`, `icon`

### ChapterCard
**File:** `src/components/course/ChapterCard.jsx`

Displays a chapter on the course overview page:

```jsx
<ChapterCard
  chapter={chapter}
  courseSlug="java-fundamentals"
/>
```

**Props:**
- `chapter` — Chapter object with `num`, `title`, `description`, `subtitle`
- `courseSlug` — Parent course slug

### SectionFooter
**File:** `src/components/course/SectionFooter.jsx`

Navigation bar at the bottom of a chapter:

```jsx
<SectionFooter
  sections={sections}                    // Array of section objects
  currentIdx={0}                         // Current section index
  onNavigate={(idx) => setIdx(idx)}     // Navigate within chapter
  courseSlug="java-fundamentals"         // For next chapter link
  chapterNum={1}                         // Current chapter number
  totalChapters={10}                     // Total chapters in course
/>
```

**Props:**
- `sections` — Sections array from chapter
- `currentIdx` — Current section (0-based)
- `onNavigate(idx)` — Called when Previous/Next clicked
- `courseSlug` — Course slug
- `chapterNum` — Current chapter number
- `totalChapters` — Total chapters in course

**Features:**
- Previous/Next buttons for sections
- Shows section count: `1 / 5`
- When on last section, shows "Next Chapter" button
- When on last chapter's last section, shows "Course Complete" (disabled)

### ProgressBar
**File:** `src/components/course/ProgressBar.jsx`

Visual progress indicator (used in ChapterPage):

```jsx
<ProgressBar current={sectionIdx + 1} total={sections.length} />
```

## Design Tokens

### Semantic Colors
Always use these Tailwind classes, never hardcoded colors:

**Text:**
- `text-foreground` — Primary text
- `text-muted-foreground` — Secondary/muted text
- `text-primary` — Interactive/highlight text

**Background:**
- `bg-background` — Page background
- `bg-card` — Card/container background
- `bg-muted` — Disabled/secondary background

**Borders:**
- `border-border` — Dividing lines

### CSS Variables
Defined in `src/index.css`, switch with `.dark` class on `<html>`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 3.6%;
  --primary: 0 0% 9%;
  /* etc. */
}

html.dark {
  --background: 0 0% 3.6%;
  --foreground: 0 0% 98%;
  --primary: 0 0% 98%;
  /* etc. */
}
```

## Common Patterns

### Spacing
- Vertical rhythm: `my-4` between sections
- Horizontal padding: `px-4` or `px-6` for page edges
- Internal spacing: `gap-2`, `gap-3` for flex/grid layouts

### Typography
- Headings: `font-semibold` or `font-bold`
- Body text: `text-foreground`
- Secondary text: `text-muted-foreground text-sm`
- Code: `` `code` `` inline in paragraphs, or CodeBlock for blocks

### Responsiveness
- Use `hidden lg:flex` to hide on mobile (like Sidebar)
- Use `hidden sm:inline` for mobile-responsive text (like TopNav back label)
- Tailwind breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)

### States
- Disabled buttons: `disabled:opacity-50 disabled:cursor-not-allowed`
- Hover: `hover:bg-muted`, `hover:text-foreground`
- Focus: Handled by Button/primitives automatically
- Active/selected: `bg-primary/10` with left border (see Sidebar)
