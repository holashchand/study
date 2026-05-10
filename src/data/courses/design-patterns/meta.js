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
import { sections as s11 } from './chapters/chapter11.js'
import { sections as s12 } from './chapters/chapter12.js'

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
import { topQuestions as q11, quiz as quiz11, shortNotes as notes11 } from './chapters/chapter11-extras.js'
import { topQuestions as q12, quiz as quiz12, shortNotes as notes12 } from './chapters/chapter12-extras.js'

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
  ...quiz11.map(q => ({ ...q, id: `ch11-${q.id}`, chapter: 11 })),
  ...quiz12.map(q => ({ ...q, id: `ch12-${q.id}`, chapter: 12 })),
]

// Course-level short notes aggregating all chapters
const courseShortNotes = {
  title: 'Design Patterns — Complete Course Notes',
  color: 'indigo',
  chapters: [
    { num: 1,  title: 'Introduction to Design Patterns', color: notes01.color, keyPoints: notes01.keyPoints, quickFacts: notes01.quickFacts, rememberThis: notes01.rememberThis },
    { num: 2,  title: 'Creational Patterns I',           color: notes02.color, keyPoints: notes02.keyPoints, quickFacts: notes02.quickFacts, rememberThis: notes02.rememberThis },
    { num: 3,  title: 'Creational Patterns II',          color: notes03.color, keyPoints: notes03.keyPoints, quickFacts: notes03.quickFacts, rememberThis: notes03.rememberThis },
    { num: 4,  title: 'Structural Patterns I',           color: notes04.color, keyPoints: notes04.keyPoints, quickFacts: notes04.quickFacts, rememberThis: notes04.rememberThis },
    { num: 5,  title: 'Structural Patterns II',          color: notes05.color, keyPoints: notes05.keyPoints, quickFacts: notes05.quickFacts, rememberThis: notes05.rememberThis },
    { num: 6,  title: 'Behavioral Patterns I',           color: notes06.color, keyPoints: notes06.keyPoints, quickFacts: notes06.quickFacts, rememberThis: notes06.rememberThis },
    { num: 7,  title: 'Behavioral Patterns II',          color: notes07.color, keyPoints: notes07.keyPoints, quickFacts: notes07.quickFacts, rememberThis: notes07.rememberThis },
    { num: 8,  title: 'Behavioral Patterns III',         color: notes08.color, keyPoints: notes08.keyPoints, quickFacts: notes08.quickFacts, rememberThis: notes08.rememberThis },
    { num: 9,  title: 'Behavioral Patterns IV',          color: notes09.color, keyPoints: notes09.keyPoints, quickFacts: notes09.quickFacts, rememberThis: notes09.rememberThis },
    { num: 10, title: 'Architectural Patterns',          color: notes10.color, keyPoints: notes10.keyPoints, quickFacts: notes10.quickFacts, rememberThis: notes10.rememberThis },
    { num: 11, title: 'Modern Patterns & Anti-Patterns', color: notes11.color, keyPoints: notes11.keyPoints, quickFacts: notes11.quickFacts, rememberThis: notes11.rememberThis },
    { num: 12, title: 'Applying Patterns in Practice',   color: notes12.color, keyPoints: notes12.keyPoints, quickFacts: notes12.quickFacts, rememberThis: notes12.rememberThis },
  ],
}

const meta = {
  slug: 'design-patterns',
  title: 'Design Patterns in Java',
  description: 'Master all 23 GoF patterns + modern patterns — with diagrams, real-world examples, quizzes, and interview prep.',
  icon: 'Layers',

  // Course-level extras
  topQuestionsCount: 100,
  topQuestions: courseTopQuestions,
  quiz: allChapterQuizzes,          // 180 questions from all chapters
  quizConfig: { displayCount: 30 }, // 30 shown randomly per attempt
  shortNotes: courseShortNotes,

  chapters: [
    { num: 1,  title: 'Introduction to Design Patterns', description: 'GoF, pattern categories, SOLID principles, UML notation.',          subtitle: 'The foundation for learning all design patterns.',           sections: s01, topQuestions: q01, topQuestionsCount: 20, quiz: quiz01, quizDisplayCount: 10, shortNotes: notes01 },
    { num: 2,  title: 'Creational Patterns I',           description: 'Singleton, Factory Method, Abstract Factory.',                      subtitle: 'Controlling how objects are created.',                       sections: s02, topQuestions: q02, topQuestionsCount: 20, quiz: quiz02, quizDisplayCount: 10, shortNotes: notes02 },
    { num: 3,  title: 'Creational Patterns II',          description: 'Builder, Prototype, Object Pool.',                                  subtitle: 'Advanced object creation techniques.',                       sections: s03, topQuestions: q03, topQuestionsCount: 20, quiz: quiz03, quizDisplayCount: 10, shortNotes: notes03 },
    { num: 4,  title: 'Structural Patterns I',           description: 'Adapter, Bridge, Composite.',                                       subtitle: 'Composing classes and objects into larger structures.',       sections: s04, topQuestions: q04, topQuestionsCount: 20, quiz: quiz04, quizDisplayCount: 10, shortNotes: notes04 },
    { num: 5,  title: 'Structural Patterns II',          description: 'Decorator, Facade, Flyweight, Proxy.',                              subtitle: 'Extending and simplifying object structures.',                sections: s05, topQuestions: q05, topQuestionsCount: 20, quiz: quiz05, quizDisplayCount: 10, shortNotes: notes05 },
    { num: 6,  title: 'Behavioral Patterns I',           description: 'Chain of Responsibility, Command, Iterator.',                       subtitle: 'Managing algorithms and object communication.',               sections: s06, topQuestions: q06, topQuestionsCount: 20, quiz: quiz06, quizDisplayCount: 10, shortNotes: notes06 },
    { num: 7,  title: 'Behavioral Patterns II',          description: 'Mediator, Memento, Observer.',                                      subtitle: 'Coordinating state and event-driven communication.',          sections: s07, topQuestions: q07, topQuestionsCount: 20, quiz: quiz07, quizDisplayCount: 10, shortNotes: notes07 },
    { num: 8,  title: 'Behavioral Patterns III',         description: 'State, Strategy, Template Method.',                                 subtitle: 'Encapsulating algorithms and varying behavior.',              sections: s08, topQuestions: q08, topQuestionsCount: 20, quiz: quiz08, quizDisplayCount: 10, shortNotes: notes08 },
    { num: 9,  title: 'Behavioral Patterns IV',          description: 'Visitor, Interpreter, Null Object + complete GoF reference.',       subtitle: 'Advanced operations and the complete pattern catalog.',       sections: s09, topQuestions: q09, topQuestionsCount: 20, quiz: quiz09, quizDisplayCount: 10, shortNotes: notes09 },
    { num: 10, title: 'Architectural Patterns',          description: 'MVC, MVP, MVVM, Repository, Service Locator.',                      subtitle: 'Large-scale application structure patterns.',                 sections: s10, topQuestions: q10, topQuestionsCount: 20, quiz: quiz10, quizDisplayCount: 10, shortNotes: notes10 },
    { num: 11, title: 'Modern Patterns & Anti-Patterns', description: 'Dependency Injection, CQRS, Event Sourcing, anti-patterns.',        subtitle: 'Contemporary patterns and what to avoid.',                   sections: s11, topQuestions: q11, topQuestionsCount: 20, quiz: quiz11, quizDisplayCount: 10, shortNotes: notes11 },
    { num: 12, title: 'Applying Patterns in Practice',   description: 'Case studies, pattern combinations, frameworks, interview prep.',   subtitle: 'Using patterns together in real-world systems.',              sections: s12, topQuestions: q12, topQuestionsCount: 20, quiz: quiz12, quizDisplayCount: 10, shortNotes: notes12 },
  ],
}

export default meta
