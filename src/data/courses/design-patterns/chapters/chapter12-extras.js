export const topQuestions = [
  {
    id: 1,
    difficulty: 'easy',
    q: 'How do you decide which design pattern to use?',
    a: 'Consider: (1) The specific problem to solve. (2) Pattern intent and applicability. (3) Team familiarity and project context. (4) Complexity cost vs. benefit. (5) Potential future changes. Avoid over-engineering; simplest solution that solves the problem wins.'
  },
  {
    id: 2,
    difficulty: 'easy',
    q: 'What patterns work well together? Give 2 examples.',
    a: 'Example 1: Factory Method + Strategy (factory creates strategy instances). Example 2: Composite + Visitor (visitor traverses composite tree). Example 3: Template Method + Observer (template notifies observers on key events). Patterns complement when one solves structure, another adds behavior.'
  },
  {
    id: 3,
    difficulty: 'easy',
    q: 'How do patterns help in code reviews?',
    a: 'Patterns provide a common vocabulary: reviewers and developers share understanding of intent and structure. Code following recognized patterns is easier to review—reviewers immediately know the design goals. Deviations from patterns can be questioned, improving consistency.'
  },
  {
    id: 4,
    difficulty: 'easy',
    q: 'What is the general relationship between patterns and testability?',
    a: 'Good patterns promote testability. DI enables mock injection. Strategy enables behavior swapping. Decorator allows test wrappers. Observer enables spy observers. Avoid patterns with tight coupling (Singletons). Testability is a sign of good design.'
  },
  {
    id: 5,
    difficulty: 'easy',
    q: 'What is pattern overuse or over-engineering?',
    a: 'Over-engineering applies patterns to solve problems that don\'t require them, adding unnecessary complexity. Example: using Singleton for a stateless utility, or Factory for a simple object creation. Trade-off: pattern benefits must justify complexity cost.'
  },
  {
    id: 6,
    difficulty: 'medium',
    q: 'Describe a use case where Factory Method and Observer combine.',
    a: 'Example: UI button factory creates buttons of various types. When buttons are created, an observer registers to listen for clicks. Factory encapsulates button creation logic; observer decouples click handlers. Factory could be combined with observer notification on button creation events.'
  },
  {
    id: 7,
    difficulty: 'medium',
    q: 'How do Command and Memento combine to implement undo?',
    a: 'Command encapsulates requests (do, undo). Memento captures object state snapshots. On execute, save state in Memento, store Command in history. On undo, retrieve Command and Memento, call undo() to restore state. Stack of Commands forms undo/redo history.'
  },
  {
    id: 8,
    difficulty: 'medium',
    q: 'What is the general approach to refactoring legacy code to use patterns?',
    a: '1) Identify problematic code (tight coupling, large classes). 2) Write tests for current behavior (safety net). 3) Extract interfaces/abstractions. 4) Introduce patterns incrementally (Adapter, Facade, Strategy). 5) Test after each step. Avoid big rewrites; refactor gradually.'
  },
  {
    id: 9,
    difficulty: 'medium',
    q: 'Name 5 patterns commonly used in the Spring Framework.',
    a: '1) Singleton (Spring beans by default). 2) Factory Method (BeanFactory, ApplicationContext). 3) Proxy (AOP, transactional proxies). 4) Template Method (JdbcTemplate, RestTemplate). 5) Observer (ApplicationEvent listeners). Spring embeds patterns throughout.'
  },
  {
    id: 10,
    difficulty: 'medium',
    q: 'How do design patterns appear in JUnit?',
    a: 'JUnit uses: (1) Template Method (TestCase base class, test lifecycle hooks). (2) Composite (TestSuite groups tests). (3) Strategy (assertions, matchers). (4) Command (@Test annotation wraps test method). (5) Observer (TestListener interface). Patterns make JUnit extensible and familiar.'
  },
  {
    id: 11,
    difficulty: 'medium',
    q: 'How do Observer and Decorator patterns complement each other?',
    a: 'Observer: notifies multiple listeners when state changes (broadcast, loose coupling). Decorator: wraps object to add behavior (enhancement, single target). Combined: Decorator-wrapped observer notifies. Example: logging decorator wraps listener, logs when notified.'
  },
  {
    id: 12,
    difficulty: 'medium',
    q: 'When should you prefer Template Method over Strategy?',
    a: 'Template Method: variation is in algorithm steps of one class hierarchy. Strategy: variation is behavior used by many contexts. Template Method ties behavior to inheritance; Strategy decouples via composition. Choose Strategy for better flexibility and reusability. Choose Template Method for cohesive class families.'
  },
  {
    id: 13,
    difficulty: 'medium',
    q: 'What performance overhead do Proxy and Decorator patterns introduce?',
    a: 'Both add indirection layers. Proxy: extra method call to delegate; spring AOP proxies add bytecode generation cost at startup. Decorator: extra wrapper instance and method call per decoration layer. Overhead negligible in most cases, but matters in hot loops. Profile before optimizing.'
  },
  {
    id: 14,
    difficulty: 'medium',
    q: 'How should you document pattern usage in code?',
    a: 'Options: (1) Javadoc class comment naming the pattern and its intent. (2) Code comments explaining role in pattern. (3) Package/folder names signaling pattern (e.g., "strategies" folder). (4) Architecture diagrams showing pattern structure. Clear documentation helps future maintainers understand design decisions.'
  },
  {
    id: 15,
    difficulty: 'medium',
    q: 'What is the difference between a pattern and a framework?',
    a: 'Pattern: reusable solution template you implement; you write the code. Framework: pre-built collection of patterns, tools, and conventions; you plug code in. Frameworks embody patterns. Patterns are lighter-weight guidance; frameworks impose structure and inversion of control.'
  },
  {
    id: 16,
    difficulty: 'hard',
    q: 'When is it acceptable to deviate from a pattern\'s canonical form?',
    a: 'Deviations are acceptable when: (1) Core intent is preserved. (2) Deviation solves a real problem in your context. (3) Tradeoffs are explicit and documented. (4) Team understands the deviation. Example: implementing Singleton differently to enable testing. Document why you diverged.'
  },
  {
    id: 17,
    difficulty: 'hard',
    q: 'How do microservices use GoF design patterns?',
    a: 'Microservices leverage patterns differently: (1) Factory/Builder for service clients. (2) Adapter for integrating heterogeneous services. (3) Proxy for service discovery and load balancing. (4) Observer for event-driven communication. (5) Saga pattern (behavioral) for distributed transactions. Patterns guide inter-service communication and resilience.'
  },
  {
    id: 18,
    difficulty: 'hard',
    q: 'How do Composite and Visitor patterns work together?',
    a: 'Composite builds tree structure (folders contain files/folders). Visitor traverses tree, performing operations on each node. Visitor enables adding new operations without modifying Composite classes. Example: Composite file system + Visitor to calculate total size, print tree, compress files. Separates structure (Composite) from algorithms (Visitor).'
  },
  {
    id: 19,
    difficulty: 'hard',
    q: 'How would you structure a design pattern discussion in a STAR format interview answer?',
    a: 'Situation: "We had N problem in a project." Task: "I chose pattern X." Action: "I implemented Y, considered Z alternatives, handled A challenge." Result: "Achieved B benefit (testability, flexibility, maintainability)." Metrics: specific metrics showing impact. Show pattern knowledge via real-world storytelling.'
  },
  {
    id: 20,
    difficulty: 'hard',
    q: 'Which 5 patterns appear most frequently in real enterprise code and why?',
    a: '1) Singleton (often over-used). 2) Factory Method (object creation abstraction). 3) Observer (event handling, listeners). 4) Adapter (legacy integration). 5) Strategy (behavior variation). These appear frequently because they solve common problems: initialization, variation, loose coupling, integration. Enterprise code prioritizes maintainability, making patterns valuable.'
  }
];

export const quiz = [
  {
    id: 1,
    q: 'How do you select the appropriate design pattern for a given problem?',
    options: ['Identify the problem, check pattern intent/applicability, evaluate complexity cost', 'Always use Singleton', 'Choose the most complex pattern', 'Patterns are not selection-based'],
    answer: 0,
    explanation: 'Pattern selection is context-driven: analyze the problem, review pattern intent and applicability, consider team knowledge, and weigh complexity against benefits. Avoid over-engineering.'
  },
  {
    id: 2,
    q: 'Which is a natural combination of patterns?',
    options: ['Factory Method + Strategy (factory creates strategy instances)', 'Singleton + Observer', 'Adapter + Facade', 'Template Method + Composite'],
    answer: 0,
    explanation: 'Factory Method + Strategy is a classic combination: factory creates different strategy implementations, client uses strategies polymorphically. Both solve structure and behavior variation.'
  },
  {
    id: 3,
    q: 'How do Command and Memento patterns implement undo/redo?',
    options: ['Command encapsulates requests; Memento captures state snapshots for restoration', 'Memento executes commands', 'They cannot implement undo', 'Only Command is needed'],
    answer: 0,
    explanation: 'Command wraps requests with do/undo; Memento saves object state. On undo, retrieve the Memento and call undo() to restore state. Stack of Commands forms undo history.'
  },
  {
    id: 4,
    q: 'Name a pattern commonly used in Spring Framework.',
    options: ['Singleton, Factory Method, Proxy, Template Method, Observer', 'Builder, Abstract Factory, Prototype, Facade, Bridge', 'All Spring patterns are proprietary', 'Spring does not use patterns'],
    answer: 0,
    explanation: 'Spring extensively uses: Singleton (beans), Factory Method (BeanFactory), Proxy (AOP), Template Method (JdbcTemplate), Observer (ApplicationEvents). These make Spring extensible and maintainable.'
  },
  {
    id: 5,
    q: 'How do patterns improve code reviews?',
    options: ['Reviewers and developers share common vocabulary and intent understanding', 'Patterns slow down code reviews', 'Code reviews do not benefit from patterns', 'Patterns hide intent'],
    answer: 0,
    explanation: 'Patterns establish shared language: reviewers immediately understand design intent. Deviations can be questioned. Consistency improves clarity and reduces cognitive load during review.'
  },
  {
    id: 6,
    q: 'What is pattern over-engineering or overuse?',
    options: ['Applying patterns to solve simple problems, adding unnecessary complexity', 'Using patterns correctly', 'Using too few patterns', 'Pattern overuse is impossible'],
    answer: 0,
    explanation: 'Over-engineering applies patterns where they add complexity without proportional benefit. Example: Singleton for a stateless utility. Trade-off: pattern cost must be justified by benefits.'
  },
  {
    id: 7,
    q: 'How do patterns generally affect testability?',
    options: ['Good patterns promote testability via DI, Strategy swapping, Decorator test wrappers', 'Patterns reduce testability', 'Testability is unrelated to patterns', 'Only Singleton improves testability'],
    answer: 0,
    explanation: 'Patterns like DI, Strategy, Decorator, and Observer enable loose coupling and behavior variation—essential for unit testing. Testability often indicates good design patterns are at play.'
  },
  {
    id: 8,
    q: 'What is the difference between Proxy and Decorator patterns regarding intent?',
    options: ['Proxy controls access; Decorator adds behavior. Proxy wraps one; Decorator can wrap layers.', 'They are identical', 'Proxy adds behavior; Decorator controls access', 'No meaningful difference'],
    answer: 0,
    explanation: 'Proxy: controls access to another object (lazy load, access control, remote). Decorator: adds behavior (logging, compression). Both wrap, but intent differs. Decorator enables stacking.'
  },
  {
    id: 9,
    q: 'When should you prefer Template Method over Strategy?',
    options: ['Variation is in algorithm steps within one class hierarchy; changes are cohesive', 'When you need maximum flexibility', 'Template Method is always better', 'Strategy is always better'],
    answer: 0,
    explanation: 'Template Method: binds variation to inheritance; good for cohesive families. Strategy: loose coupling via composition; better for reusability. Choose based on context and flexibility needs.'
  },
  {
    id: 10,
    q: 'How does the Composite pattern work with Visitor?',
    options: ['Composite builds tree structure; Visitor traverses and performs operations', 'Visitor builds trees', 'Composite is visitor-only', 'They serve identical purposes'],
    answer: 0,
    explanation: 'Composite: encapsulates tree structure (folders, files). Visitor: traverses tree performing operations without modifying Composite classes. Example: traverse file system to calculate size, print tree, compress.'
  },
  {
    id: 11,
    q: 'Which pattern is most frequently over-used in enterprise code?',
    options: ['Singleton (often over-applied)', 'Factory Method', 'Observer', 'Decorator'],
    answer: 0,
    explanation: 'Singleton is frequently over-used for stateless utilities, configuration holders, and simple objects. Modern Java prefers dependency injection and avoiding global state.'
  },
  {
    id: 12,
    q: 'How do Observer and Decorator patterns complement each other?',
    options: ['Observer notifies listeners; Decorator wraps to add behavior. Decorator can wrap observer.', 'They conflict', 'Observer wraps; Decorator notifies', 'They are the same'],
    answer: 0,
    explanation: 'Observer: broadcast notification pattern. Decorator: wrapping enhancement pattern. Combined: Decorator-wrapped observer; example logging decorator logs when observer is notified.'
  },
  {
    id: 13,
    q: 'How should design pattern usage be documented in code?',
    options: ['Javadoc class comments naming pattern, code comments explaining roles, package names, architecture diagrams', 'Patterns need no documentation', 'Documentation hides pattern intent', 'Only external docs matter'],
    answer: 0,
    explanation: 'Multi-faceted documentation: Javadoc naming pattern and intent, inline comments explaining roles, folder/package names signaling pattern family, architecture diagrams visualizing structure. This helps maintainers understand decisions.'
  },
  {
    id: 14,
    q: 'What is the primary difference between a design pattern and a framework?',
    options: ['Pattern is reusable template you implement; framework is pre-built tool kit with inversion of control', 'They are identical', 'Framework is smaller than pattern', 'Patterns contain frameworks'],
    answer: 0,
    explanation: 'Pattern: guidance you implement; patterns are reusable but lightweight. Framework: pre-built, opinionated, enforces structure, inverts control (calls your code). Frameworks embody multiple patterns.'
  },
  {
    id: 15,
    q: 'Which five patterns are most common in enterprise Java systems?',
    options: ['Singleton, Factory Method, Observer, Adapter, Strategy', 'Abstract Factory, Prototype, Bridge, Facade, Memento', 'Visitor, Interpreter, Chain of Responsibility, Mediator, State', 'Template Method only'],
    answer: 0,
    explanation: 'Singleton (initialization), Factory (creation abstraction), Observer (event handling), Adapter (integration), Strategy (behavior variation) appear most frequently because they solve core problems: consistency, variation, loose coupling, legacy integration.'
  }
];

export const shortNotes = {
  title: 'Applying Patterns in Practice',
  color: 'emerald',
  keyPoints: [
    {
      icon: 'CheckCircle',
      title: 'Pattern Selection Criteria',
      text: 'Analyze problem context, check pattern intent/applicability, evaluate complexity cost vs. benefit. Avoid over-engineering. Simplest solution wins. Consider team familiarity and future changes.'
    },
    {
      icon: 'Link',
      title: 'Pattern Combinations',
      text: 'Patterns work together naturally: Factory + Strategy (factory creates strategies), Command + Memento (undo/redo), Composite + Visitor (structure + traversal), Observer + Decorator (notification + enhancement).'
    },
    {
      icon: 'Users',
      title: 'Patterns in Spring Framework',
      text: 'Spring embeds patterns: Singleton (bean scope), Factory Method (BeanFactory), Proxy (AOP), Template Method (JdbcTemplate), Observer (ApplicationEvent). Patterns make Spring extensible and maintain consistency.'
    },
    {
      icon: 'Code',
      title: 'Patterns in JUnit',
      text: 'JUnit leverages: Template Method (TestCase lifecycle), Composite (TestSuite), Strategy (matchers), Command (@Test annotation), Observer (TestListener). Patterns enable extensibility and consistent test structure.'
    },
    {
      icon: 'GitBranch',
      title: 'Refactoring Legacy Code to Patterns',
      text: 'Approach: Write tests first (safety net), extract interfaces incrementally, introduce patterns gradually (Adapter, Facade, Strategy), test after each step. Avoid big rewrites; refactor gradually for safety and maintainability.'
    },
    {
      icon: 'FileText',
      title: 'Documenting Pattern Usage',
      text: 'Use Javadoc to name pattern and intent. Add inline comments explaining roles. Signal patterns via package/folder names ("strategies", "observers"). Create architecture diagrams. Help future maintainers understand design decisions.'
    },
    {
      icon: 'AlertTriangle',
      title: 'Over-Engineering Warning',
      text: 'Avoid applying patterns to simple problems. Over-engineering adds complexity without benefit. Example: Singleton for stateless utility. Trade-off: pattern cost must justify benefits. Start simple, refactor when needed.'
    },
    {
      icon: 'Target',
      title: 'Code Review with Patterns',
      text: 'Patterns provide shared vocabulary in reviews. Reviewers immediately understand intent. Deviations can be questioned constructively. Consistency improves team communication and code clarity.'
    }
  ],
  quickFacts: [
    'Pattern + framework relationship: frameworks embed multiple patterns; patterns are lighter-weight guidance you implement.',
    'Singleton is the most over-used pattern in enterprise code—consider DI alternatives for better testability.',
    'Proxy and Decorator both wrap objects but differ in intent: Proxy controls access, Decorator adds behavior.',
    'Template Method uses inheritance; Strategy uses composition. Choose Strategy for flexibility, Template Method for cohesion.',
    'Microservices use patterns differently: Factory for clients, Adapter for integration, Proxy for discovery/routing, Observer for events.',
    'Composite + Visitor is a classic combination: structure + algorithm separation enables adding new operations without modifying structure.',
    'Performance overhead of patterns (Proxy, Decorator) is typically negligible; only profile in hot loops if concerned.'
  ],
  rememberThis: [
    '"Patterns should clarify design, not obscure it." - Use patterns where they solve real problems, not everywhere.',
    'Testability is a signal of good pattern usage: testable code usually leverages DI, Strategy, Decorator, and Observer well.',
    'When deviating from canonical pattern form, document why. Core intent should be preserved; tradeoffs should be explicit.',
    'The five most common enterprise patterns (Singleton, Factory, Observer, Adapter, Strategy) appear frequently because they solve core problems teams face repeatedly.'
  ]
};
