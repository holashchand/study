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

const meta = {
  slug: 'java-fundamentals',
  title: 'Java Fundamentals',
  description: 'Core Java concepts from syntax and OOP to concurrency and modern features.',
  icon: 'Java',
  chapters: [
    { num: 1,  title: 'Java Foundations & Environment Setup',    description: 'JDK, JVM, JIT, versions, Hello World, packages.',    subtitle: 'Platform, toolchain, and your first Java program.', sections: s01 },
    { num: 2,  title: 'Data Types & Operators',                  description: 'Primitives, wrappers, var, all operators.',           subtitle: 'Every type and operator you will use daily.',       sections: s02 },
    { num: 3,  title: 'Control Flow',                            description: 'if/else, switch, loops, break, continue.',            subtitle: 'Branching and iteration patterns.',                 sections: s03 },
    { num: 4,  title: 'Methods & Arrays',                        description: 'Method anatomy, overloading, recursion, arrays.',     subtitle: 'Reusable code blocks and array data structures.',  sections: s04 },
    { num: 5,  title: 'Object-Oriented Programming',             description: 'Classes, inheritance, polymorphism, interfaces.',     subtitle: 'The full OOP toolkit.',                            sections: s05 },
    { num: 6,  title: 'Collections & Core APIs',                 description: 'List, Set, Map, Queue, String, Math, Generics.',     subtitle: 'The Java standard library you need every day.',    sections: s06 },
    { num: 7,  title: 'Exceptions & I/O',                        description: 'try/catch, custom exceptions, files, NIO.2.',        subtitle: 'Robust error handling and file operations.',       sections: s07 },
    { num: 8,  title: 'Functional Programming & Streams',        description: 'Lambdas, method refs, Stream API, Optional.',        subtitle: 'Declarative data processing.',                     sections: s08 },
    { num: 9,  title: 'Concurrency',                             description: 'Threads, locks, ExecutorService, virtual threads.',  subtitle: 'Writing correct and efficient concurrent code.',   sections: s09 },
    { num: 10, title: 'Modern Java (9–26)',                      description: 'Records, sealed classes, pattern matching, and more.',subtitle: 'What changed and why it matters.',                sections: s10 },
  ],
}

export default meta
