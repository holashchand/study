export const topQuestions = [
  {
    id: 1,
    difficulty: 'easy',
    q: 'What is Chain of Responsibility pattern?',
    a: 'Chain of Responsibility is a behavioral pattern where a request is passed along a chain of handlers, each deciding whether to process it or pass it to the next handler in the chain.'
  },
  {
    id: 2,
    difficulty: 'easy',
    q: 'What is the Command pattern?',
    a: 'The Command pattern is a behavioral pattern that encapsulates a request as an object, allowing parameterization of clients with different requests, queuing, logging, and support for undoable operations.'
  },
  {
    id: 3,
    difficulty: 'easy',
    q: 'What is the Iterator pattern?',
    a: 'The Iterator pattern is a behavioral pattern that provides a way to access elements of a collection sequentially without exposing the underlying representation, hiding the internal structure.'
  },
  {
    id: 4,
    difficulty: 'easy',
    q: 'How does Chain of Responsibility avoid coupling?',
    a: 'Instead of the sender knowing all possible handlers, it only knows the first handler in the chain. Each handler knows its successor, decoupling the sender from the handlers and allowing dynamic chain building.'
  },
  {
    id: 5,
    difficulty: 'easy',
    q: 'What is the difference between Chain of Responsibility and if-else chain?',
    a: 'Chain of Responsibility is object-oriented, dynamic, and decoupled; handlers are objects that can be composed at runtime. If-else chains are static, tightly coupled, and difficult to extend without modifying existing code.'
  },
  {
    id: 6,
    difficulty: 'medium',
    q: 'How does the Command pattern support undo and redo?',
    a: 'Command encapsulates both the action (execute) and its reversal (undo). Store executed commands in a stack; redo is achieved by storing undone commands in another stack. Each command knows how to reverse itself.'
  },
  {
    id: 7,
    difficulty: 'medium',
    q: 'What is the Invoker in the Command pattern?',
    a: 'The Invoker is the object that triggers command execution. It decouples the client from the command receiver; it holds a reference to a command object and calls execute() without knowing command details.'
  },
  {
    id: 8,
    difficulty: 'medium',
    q: 'How can Command pattern support transactions?',
    a: 'Commands can implement transactional behavior: execute() applies changes, undo() rolls back. Multiple commands can be grouped in a macro; if any fails, all are rolled back. Enables all-or-nothing operations.'
  },
  {
    id: 9,
    difficulty: 'medium',
    q: 'What is the difference between internal and external iterators?',
    a: 'Internal iterator: the iterator controls iteration, client passes behavior (callback/lambda). External iterator: client controls iteration using hasNext/next methods. Java enhanced for-loop hides implementation choice.'
  },
  {
    id: 10,
    difficulty: 'medium',
    q: 'What is a fail-fast iterator in Java?',
    a: 'A fail-fast iterator detects structural modification of the collection during iteration. If the collection is modified after the iterator is created, calling next() throws ConcurrentModificationException, preventing silent data corruption.'
  },
  {
    id: 11,
    difficulty: 'medium',
    q: 'What is the key difference between Chain of Responsibility and Strategy pattern?',
    a: 'Chain of Responsibility: request flows through multiple handlers until processed; handlers decide to process or pass. Strategy: client selects one strategy; only one is executed. Chain is about finding right handler, Strategy is about choosing algorithm.'
  },
  {
    id: 12,
    difficulty: 'medium',
    q: 'What is a Macro Command?',
    a: 'A Macro Command is a composite command that groups multiple commands, executing them sequentially in a single execute() call. Enables batching operations; undo reverses all grouped commands as one unit.'
  },
  {
    id: 13,
    difficulty: 'medium',
    q: 'How is the Servlet Filter chain an example of Chain of Responsibility?',
    a: 'Servlet filters form a chain: request passes through each filter; each decides to process or call next filter via chain.doFilter(). Last filter invokes the servlet. Response travels back through chain in reverse.'
  },
  {
    id: 14,
    difficulty: 'medium',
    q: 'How does Iterator support Single Responsibility Principle?',
    a: 'Iterator extracts traversal logic from the collection, giving each class a single responsibility: collections manage data, iterators manage access. Clients don\'t couple to collection internals.'
  },
  {
    id: 15,
    difficulty: 'medium',
    q: 'How can Command pattern support queuing operations?',
    a: 'Commands are objects, so they can be stored in a queue. A command processor pops commands and executes them. Enables scheduling, delayed execution, and separation of request time from execution time.'
  },
  {
    id: 16,
    difficulty: 'hard',
    q: 'How would you implement undo/redo with Command pattern using a stack?',
    a: 'Maintain two stacks: undoStack and redoStack. On execute(), push command to undoStack, clear redoStack. On undo(), pop from undoStack and call undo(), push to redoStack. On redo(), pop redoStack, execute, push back to undoStack.'
  },
  {
    id: 17,
    difficulty: 'hard',
    q: 'When should you avoid Chain of Responsibility due to performance concerns?',
    a: 'Avoid when there are many handlers and the request must traverse most of the chain frequently. Deep chains increase latency. If most requests match the first handler, chains are efficient; otherwise, consider a lookup table or strategy map.'
  },
  {
    id: 18,
    difficulty: 'hard',
    q: 'How can Command pattern support distributed systems and message queues?',
    a: 'Serialize commands and send through message queue; remote systems deserialize and execute. Enables asynchronous processing, load balancing, and resilience. Commands become messages passed between services.'
  },
  {
    id: 19,
    difficulty: 'hard',
    q: 'What causes ConcurrentModificationException with iterators and how do you fix it?',
    a: 'Modifying a collection (add/remove) while iterating changes its modCount, causing fail-fast detection. Fix: use iterator.remove() instead of collection.remove(), or synchronize access, or use concurrent collections.'
  },
  {
    id: 20,
    difficulty: 'hard',
    q: 'Compare Chain of Responsibility, Command, and Iterator for extensibility.',
    a: 'Chain of Responsibility: easily add new handlers to chain; dynamic at runtime. Command: easily add new commands; encapsulates requests. Iterator: easily add new iterators; hides collection structure. All support open/closed principle through composition.'
  }
];

export const quiz = [
  {
    id: 1,
    q: 'Which roles does Chain of Responsibility define?',
    options: ['Client, Handler, ConcreteHandler, Successor', 'Subject, Observer, Listener', 'Command, Invoker, Receiver', 'Iterator, Collection, Element'],
    answer: 0,
    explanation: 'Chain of Responsibility defines: Client (initiates request), Handler (abstract interface), ConcreteHandler (processes or delegates), Successor (next handler). Each handler knows its successor.'
  },
  {
    id: 2,
    q: 'What are the key methods in the Command pattern?',
    options: ['fetch() and store()', 'execute() and undo()', 'next() and hasNext()', 'process() and handle()'],
    answer: 1,
    explanation: 'Command defines execute() to perform the action and undo() to reverse it. This enables undo/redo functionality and decouples invoker from receiver.'
  },
  {
    id: 3,
    q: 'How does an Iterator expose the iteration interface?',
    options: ['hasNext() and next() methods', 'get(int index) and size()', 'first() and last()', 'start() and end()'],
    answer: 0,
    explanation: 'Iterator interface provides hasNext() to check availability and next() to retrieve elements. This hides collection structure and supports various traversal implementations.'
  },
  {
    id: 4,
    q: 'In Servlet Filter chain, what happens if a filter does not call chain.doFilter()?',
    options: ['The next filter executes automatically', 'The chain stops; subsequent filters and servlet do not execute', 'An exception is thrown', 'The request is rejected'],
    answer: 1,
    explanation: 'If a filter does not call chain.doFilter(), it breaks the chain. Subsequent filters and the servlet are skipped. The filter can generate its own response (authentication failure, for example).'
  },
  {
    id: 5,
    q: 'How can Runnable be considered a Command pattern in Java?',
    options: ['It is not related to Command', 'Runnable encapsulates a request (run method) without exposing the executor', 'Runnable forces undo capability', 'Runnable is a strategy selector'],
    answer: 1,
    explanation: 'Runnable encapsulates an action as an object. The execute() method is run(). Client creates Runnable and passes to ThreadPool/Executor, which invokes it—classic Command pattern.'
  },
  {
    id: 6,
    q: 'What is fail-fast behavior in iterators?',
    options: ['Iterators fail silently on errors', 'Iterators detect structural modification and throw ConcurrentModificationException', 'Iterators create a snapshot of the collection', 'Iterators lock the collection during iteration'],
    answer: 1,
    explanation: 'Fail-fast means the iterator detects if the collection is modified (add/remove) during iteration. It throws ConcurrentModificationException to alert the client of potential data corruption.'
  },
  {
    id: 7,
    q: 'How does a Macro Command implement composite behavior?',
    options: ['It selects which command to execute', 'It groups multiple commands and executes them sequentially in one call', 'It splits one command into smaller parts', 'It caches command results'],
    answer: 1,
    explanation: 'Macro Command contains a list of commands. execute() calls execute() on each command in sequence. undo() calls undo() on each in reverse, undoing all grouped operations as one unit.'
  },
  {
    id: 8,
    q: 'When comparing internal vs external iterators, which supports lazy evaluation better?',
    options: ['Internal iterators (callbacks)', 'External iterators (hasNext/next)', 'Both equally', 'Neither supports lazy evaluation'],
    answer: 1,
    explanation: 'External iterators give the client control over iteration pace, enabling lazy evaluation: iterate only when needed. Internal iterators drive the process, iterating all elements even if not used.'
  },
  {
    id: 9,
    q: 'What is the primary role of the Receiver in Command pattern?',
    options: ['Execute command logic', 'Queue commands', 'Decide which command to run', 'Create commands'],
    answer: 0,
    explanation: 'Receiver contains the actual business logic that command delegates to. Command encapsulates the request; Receiver performs the work. This decoupling allows parameterization and dynamic command selection.'
  },
  {
    id: 10,
    q: 'How does Iterator hide collection implementation details?',
    options: ['It stores copies of all elements', 'It uses reflection to access private fields', 'It provides a uniform traversal interface regardless of internal structure', 'It does not hide anything'],
    answer: 2,
    explanation: 'Iterator provides hasNext() and next() regardless of whether the collection is a list, tree, or hash table. Clients use the same interface; implementation details remain hidden.'
  },
  {
    id: 11,
    q: 'In undo/redo, why do you clear the redo stack after a new command execute?',
    options: ['To save memory', 'Because redo becomes invalid once a new action branches history', 'To prevent stack overflow', 'No reason, it\'s optional'],
    answer: 1,
    explanation: 'Once you undo and then execute a new command, the redone state is invalidated (branching history). Clearing the redo stack prevents confusion and implements linear undo/redo semantics.'
  },
  {
    id: 12,
    q: 'Which pattern does JavaScript\'s Promise.then() resemble?',
    options: ['Iterator', 'Command', 'Chain of Responsibility', 'Strategy'],
    answer: 2,
    explanation: 'Promise.then() chains handlers; each handler can process the result or pass to the next. This resembles Chain of Responsibility where handlers process requests sequentially.'
  },
  {
    id: 13,
    q: 'How can you safely iterate and remove elements from a collection?',
    options: ['Use collection.remove() during iteration', 'Use iterator.remove() method', 'Create a copy and iterate the copy', 'Catch ConcurrentModificationException'],
    answer: 1,
    explanation: 'iterator.remove() is safe; it modifies the underlying collection while maintaining iterator state. Using collection.remove() causes ConcurrentModificationException in fail-fast iterators.'
  },
  {
    id: 14,
    q: 'Why is Command pattern useful for logging and auditing?',
    options: ['Commands execute instantly without delay', 'Commands can be stored, inspected, and logged before/after execution', 'Commands prevent errors', 'Commands are faster than functions'],
    answer: 1,
    explanation: 'Commands are objects that can be inspected, logged, and stored in audit trails. You can track what was executed, by whom, when, and what the result was—valuable for auditing and compliance.'
  },
  {
    id: 15,
    q: 'What advantage does Chain of Responsibility provide over if-else chains?',
    options: ['It is always faster', 'It decouples handlers; adding new handlers doesn\'t require modifying existing code', 'It eliminates all conditional logic', 'It requires less memory'],
    answer: 1,
    explanation: 'Chain of Responsibility encapsulates handlers as objects. Adding a new handler means implementing Handler interface and inserting into chain—no modification of existing handlers or client code.'
  }
];

export const shortNotes = {
  title: 'Behavioral Patterns I: Chain of Responsibility, Command, Iterator',
  color: 'teal',
  keyPoints: [
    {
      icon: 'Link',
      title: 'Chain of Responsibility',
      text: 'Pass request through a chain of handlers. Each handler decides to process or forward. Decouples sender from receivers. Example: Servlet filters, logging frameworks with level handlers.'
    },
    {
      icon: 'Send',
      title: 'Command Pattern',
      text: 'Encapsulate request as an object (execute method). Decouples invoker from receiver. Enables undo/redo, queuing, logging, macro commands. Example: GUI buttons, transaction operations, undo stacks.'
    },
    {
      icon: 'List',
      title: 'Iterator Pattern',
      text: 'Provide sequential access to collection without exposing structure. Hides internal representation. Supports multiple iterators, fail-fast detection. Example: Java collections, file systems.'
    },
    {
      icon: 'GitBranch',
      title: 'Undo/Redo with Command',
      text: 'Maintain two stacks: undo and redo. Execute pushes to undo. Undo calls command.undo() and moves to redo. Redo calls execute again. New command clears redo stack (branches history).'
    },
    {
      icon: 'Layers',
      title: 'Chain vs Strategy',
      text: 'Chain of Responsibility: request flows through multiple handlers until processed. Strategy: client picks one algorithm. Chain finds handler, Strategy picks behavior.'
    },
    {
      icon: 'Package',
      title: 'Macro Command',
      text: 'Composite command grouping multiple commands. execute() runs all sequentially. undo() reverses all in reverse order. Enables atomic batching of operations.'
    },
    {
      icon: 'Network',
      title: 'Servlet Filter Example',
      text: 'Filter chain: request → filter1 → filter2 → servlet. Each filter calls chain.doFilter() to continue. Response returns through chain in reverse. Classic Chain of Responsibility.'
    },
    {
      icon: 'AlertCircle',
      title: 'Fail-Fast Iterator',
      text: 'Detects collection modification during iteration (add/remove). Throws ConcurrentModificationException. Use iterator.remove() instead of collection.remove() to stay safe.'
    }
  ],
  quickFacts: [
    'Chain of Responsibility: pass until handled. Strategy: pick one. Command: encapsulate request. Iterator: hide structure.',
    'Command.undo() is not automatic; you must implement reversal logic for each command type.',
    'Servlet filter chain stops if any filter does not call chain.doFilter()—breaks the chain.',
    'Iterator exposes hasNext() and next(); client controls iteration pace and can stop anytime.',
    'Macro Command uses composition: contains a list of commands, executes all, undoes all in reverse.',
    'Runnable is a Command pattern example: encapsulates run() action for executor to invoke.',
    'Fail-fast: modify collection during iteration → ConcurrentModificationException. Use iterator.remove().',
    'Handler chains can be dynamic; build at runtime by setting handler.successor = nextHandler.'
  ],
  rememberThis: [
    'Chain: pass request through handlers until processed—decouples sender from receivers.',
    'Command: encapsulate request with execute() and undo()—enables undo/redo, queuing, auditing.',
    'Iterator: sequential access without exposing structure—hides collection internals, enables multiple iterators.',
    'fail-fast: collection modified during iteration → ConcurrentModificationException, use iterator.remove().'
  ]
};
