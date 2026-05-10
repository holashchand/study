import { sections as s01 } from './chapters/chapter01.js'
import { sections as s02 } from './chapters/chapter02.js'
import { sections as s03 } from './chapters/chapter03.js'
import { sections as s04 } from './chapters/chapter04.js'
import { sections as s05 } from './chapters/chapter05.js'
import { sections as s06 } from './chapters/chapter06.js'
import { sections as s07 } from './chapters/chapter07.js'
import { sections as s08 } from './chapters/chapter08.js'
import { sections as s09 } from './chapters/chapter09.js'
import { sections as s10 } from './chapters/chapter10.js'

import { topQuestions as q01, quiz as quiz01, shortNotes as notes01 } from './chapters/chapter01-extras.js'
import { topQuestions as q02, quiz as quiz02, shortNotes as notes02 } from './chapters/chapter02-extras.js'
import { topQuestions as q03, quiz as quiz03, shortNotes as notes03 } from './chapters/chapter03-extras.js'
import { topQuestions as q04, quiz as quiz04, shortNotes as notes04 } from './chapters/chapter04-extras.js'
import { topQuestions as q05, quiz as quiz05, shortNotes as notes05 } from './chapters/chapter05-extras.js'
import { topQuestions as q06, quiz as quiz06, shortNotes as notes06 } from './chapters/chapter06-extras.js'
import { topQuestions as q07, quiz as quiz07, shortNotes as notes07 } from './chapters/chapter07-extras.js'
import { topQuestions as q08, quiz as quiz08, shortNotes as notes08 } from './chapters/chapter08-extras.js'
import { topQuestions as q09, quiz as quiz09, shortNotes as notes09 } from './chapters/chapter09-extras.js'
import { topQuestions as q10, quiz as quiz10, shortNotes as notes10 } from './chapters/chapter10-extras.js'

import { topQuestions as courseTopQuestions } from './top-questions.js'

// Course quiz: all chapter quiz questions aggregated → 30 shown randomly per attempt
const allChapterQuizzes = [
  ...quiz01.map(q => ({ ...q, id: `ch01-${q.id}`, chapter: 1 })),
  ...quiz02.map(q => ({ ...q, id: `ch02-${q.id}`, chapter: 2 })),
  ...quiz03.map(q => ({ ...q, id: `ch03-${q.id}`, chapter: 3 })),
  ...quiz04.map(q => ({ ...q, id: `ch04-${q.id}`, chapter: 4 })),
  ...quiz05.map(q => ({ ...q, id: `ch05-${q.id}`, chapter: 5 })),
  ...quiz06.map(q => ({ ...q, id: `ch06-${q.id}`, chapter: 6 })),
  ...quiz07.map(q => ({ ...q, id: `ch07-${q.id}`, chapter: 7 })),
  ...quiz08.map(q => ({ ...q, id: `ch08-${q.id}`, chapter: 8 })),
  ...quiz09.map(q => ({ ...q, id: `ch09-${q.id}`, chapter: 9 })),
  ...quiz10.map(q => ({ ...q, id: `ch10-${q.id}`, chapter: 10 })),
]

// Course-level short notes aggregating all chapters
const courseShortNotes = {
  title: 'Java Fundamentals — Complete Course Notes',
  color: 'indigo',
  chapters: [
    { num: 1, title: 'Java Foundations', color: 'violet', keyPoints: notes01.keyPoints, quickFacts: notes01.quickFacts, rememberThis: notes01.rememberThis },
    { num: 2, title: 'Data Types & Operators', color: 'blue', keyPoints: notes02.keyPoints, quickFacts: notes02.quickFacts, rememberThis: notes02.rememberThis },
    { num: 3, title: 'Control Flow', color: 'emerald', keyPoints: notes03.keyPoints, quickFacts: notes03.quickFacts, rememberThis: notes03.rememberThis },
    { num: 4, title: 'Methods & Arrays', color: 'amber', keyPoints: notes04.keyPoints, quickFacts: notes04.quickFacts, rememberThis: notes04.rememberThis },
    { num: 5, title: 'OOP', color: 'rose', keyPoints: notes05.keyPoints, quickFacts: notes05.quickFacts, rememberThis: notes05.rememberThis },
    { num: 6, title: 'Collections & Core APIs', color: 'indigo', keyPoints: notes06.keyPoints, quickFacts: notes06.quickFacts, rememberThis: notes06.rememberThis },
    { num: 7, title: 'Exceptions & I/O', color: 'cyan', keyPoints: notes07.keyPoints, quickFacts: notes07.quickFacts, rememberThis: notes07.rememberThis },
    { num: 8, title: 'Functional & Streams', color: 'fuchsia', keyPoints: notes08.keyPoints, quickFacts: notes08.quickFacts, rememberThis: notes08.rememberThis },
    { num: 9, title: 'Concurrency', color: 'rose', keyPoints: notes09.keyPoints, quickFacts: notes09.quickFacts, rememberThis: notes09.rememberThis },
    { num: 10, title: 'Modern Java (9–26)', color: 'indigo', keyPoints: notes10.keyPoints, quickFacts: notes10.quickFacts, rememberThis: notes10.rememberThis },
  ],
}

const meta = {
  slug: 'java-fundamentals',
  title: 'Java Fundamentals',
  description: 'Core Java concepts from syntax and OOP to concurrency and modern features.',
  icon: 'Java',

  // Course-level extras
  topQuestionsCount: 100,
  topQuestions: courseTopQuestions,
  quiz: allChapterQuizzes,         // 150 questions from all chapters
  quizConfig: { displayCount: 30 }, // 30 shown randomly per attempt
  shortNotes: courseShortNotes,

  chapters: [
    { num: 1,  title: 'Java Foundations & Environment Setup',    description: 'JDK, JVM, JIT, versions, Hello World, packages.',    subtitle: 'Platform, toolchain, and your first Java program.', sections: s01, topQuestions: q01, topQuestionsCount: 20, quiz: quiz01, quizDisplayCount: 10, shortNotes: notes01 },
    { num: 2,  title: 'Data Types & Operators',                  description: 'Primitives, wrappers, var, all operators.',           subtitle: 'Every type and operator you will use daily.',       sections: s02, topQuestions: q02, topQuestionsCount: 20, quiz: quiz02, quizDisplayCount: 10, shortNotes: notes02 },
    { num: 3,  title: 'Control Flow',                            description: 'if/else, switch, loops, break, continue.',            subtitle: 'Branching and iteration patterns.',                 sections: s03, topQuestions: q03, topQuestionsCount: 20, quiz: quiz03, quizDisplayCount: 10, shortNotes: notes03 },
    { num: 4,  title: 'Methods & Arrays',                        description: 'Method anatomy, overloading, recursion, arrays.',     subtitle: 'Reusable code blocks and array data structures.',  sections: s04, topQuestions: q04, topQuestionsCount: 20, quiz: quiz04, quizDisplayCount: 10, shortNotes: notes04 },
    { num: 5,  title: 'Object-Oriented Programming',             description: 'Classes, inheritance, polymorphism, interfaces.',     subtitle: 'The full OOP toolkit.',                            sections: s05, topQuestions: q05, topQuestionsCount: 20, quiz: quiz05, quizDisplayCount: 10, shortNotes: notes05 },
    { num: 6,  title: 'Collections & Core APIs',                 description: 'List, Set, Map, Queue, String, Math, Generics.',     subtitle: 'The Java standard library you need every day.',    sections: s06, topQuestions: q06, topQuestionsCount: 20, quiz: quiz06, quizDisplayCount: 10, shortNotes: notes06 },
    { num: 7,  title: 'Exceptions & I/O',                        description: 'try/catch, custom exceptions, files, NIO.2.',        subtitle: 'Robust error handling and file operations.',       sections: s07, topQuestions: q07, topQuestionsCount: 20, quiz: quiz07, quizDisplayCount: 10, shortNotes: notes07 },
    { num: 8,  title: 'Functional Programming & Streams',        description: 'Lambdas, method refs, Stream API, Optional.',        subtitle: 'Declarative data processing.',                     sections: s08, topQuestions: q08, topQuestionsCount: 20, quiz: quiz08, quizDisplayCount: 10, shortNotes: notes08 },
    { num: 9,  title: 'Concurrency',                             description: 'Threads, locks, ExecutorService, virtual threads.',  subtitle: 'Writing correct and efficient concurrent code.',   sections: s09, topQuestions: q09, topQuestionsCount: 20, quiz: quiz09, quizDisplayCount: 10, shortNotes: notes09 },
    { num: 10, title: 'Modern Java (9–26)',                      description: 'Records, sealed classes, pattern matching, and more.',subtitle: 'What changed and why it matters.',                sections: s10, topQuestions: q10, topQuestionsCount: 20, quiz: quiz10, quizDisplayCount: 10, shortNotes: notes10 },
  ],
}

export default meta
