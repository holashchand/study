export const topQuestions = [
  {
    id: 1,
    difficulty: 'easy',
    q: 'What is Dependency Injection?',
    a: 'Dependency Injection (DI) is a technique where an object receives its dependencies from external sources rather than creating them itself. Instead of a class creating objects it needs, those objects are "injected" into it via constructor, setter, or interface methods.'
  },
  {
    id: 2,
    difficulty: 'easy',
    q: 'What is Inversion of Control (IoC)?',
    a: 'Inversion of Control (IoC) is a design principle where the control flow of the program is inverted—instead of your code calling library functions, the framework calls your code. DI is one way to achieve IoC.'
  },
  {
    id: 3,
    difficulty: 'easy',
    q: 'What is CQRS?',
    a: 'CQRS (Command Query Responsibility Segregation) is a pattern that separates read (query) and write (command) operations into different models. Commands modify state; queries retrieve state without side effects.'
  },
  {
    id: 4,
    difficulty: 'easy',
    q: 'What is an anti-pattern?',
    a: 'An anti-pattern is a common response to a recurring problem that is ineffective and counterproductive. It typically looks like a solution but creates more problems than it solves, such as tight coupling or poor maintainability.'
  },
  {
    id: 5,
    difficulty: 'easy',
    q: 'What are the three main types of Dependency Injection?',
    a: '1. Constructor Injection: Dependencies passed via constructor parameters. 2. Setter Injection: Dependencies set via setter methods. 3. Interface Injection: Dependencies implemented through a special interface.'
  },
  {
    id: 6,
    difficulty: 'medium',
    q: 'When should you use Constructor Injection vs Setter Injection?',
    a: 'Use Constructor Injection for mandatory dependencies (ensures object is fully initialized). Use Setter Injection for optional dependencies or to support frameworks that require default constructors. Constructor Injection is preferred for immutability and clarity.'
  },
  {
    id: 7,
    difficulty: 'medium',
    q: 'What does an IoC container do?',
    a: 'An IoC container (like Spring or Guice) manages object creation, dependency resolution, and lifecycle. It creates objects, resolves dependencies automatically, manages scopes (singleton, prototype), and handles initialization/destruction of beans.'
  },
  {
    id: 8,
    difficulty: 'medium',
    q: 'Why does CQRS separate read and write models?',
    a: 'Separating read and write models allows independent optimization: write models can prioritize consistency, while read models optimize for query speed. Read models can be denormalized views built from events, eliminating joins on queries.'
  },
  {
    id: 9,
    difficulty: 'medium',
    q: 'How is Event Sourcing different from traditional CRUD?',
    a: 'CRUD updates state in-place, losing history. Event Sourcing stores all state changes as immutable events. Current state is derived by replaying events. Benefits: complete audit trail, ability to reconstruct any past state, event-driven architecture.'
  },
  {
    id: 10,
    difficulty: 'medium',
    q: 'What is the God Object anti-pattern?',
    a: 'A God Object is a class that knows too much and does too much—it has too many responsibilities, making it hard to test, maintain, and reuse. Violates Single Responsibility Principle. Solution: break into smaller, focused classes.'
  },
  {
    id: 11,
    difficulty: 'medium',
    q: 'How does Dependency Injection improve testability?',
    a: 'With DI, dependencies are external, so you can inject mocks or stubs for testing. Without DI, classes create their own dependencies (tight coupling), making it hard to substitute fakes. DI enables true unit testing in isolation.'
  },
  {
    id: 12,
    difficulty: 'medium',
    q: 'What is the Spaghetti Code anti-pattern and how do you prevent it?',
    a: 'Spaghetti Code results from tangled, unstructured code with unclear control flow. Prevent it by: using design patterns, maintaining clear separation of concerns, limiting deep nesting, using meaningful names, and refactoring regularly.'
  },
  {
    id: 13,
    difficulty: 'medium',
    q: 'What is the Golden Hammer anti-pattern? Give an example.',
    a: 'Applying the same familiar solution to every problem, even when inappropriate. Example: Using Singleton everywhere because you\'re comfortable with it, even for stateless utilities. Solutions: Evaluate each problem independently, consider multiple patterns.'
  },
  {
    id: 14,
    difficulty: 'medium',
    q: 'What is the Lava Flow anti-pattern and how do you address it?',
    a: 'Lava Flow is dead code—old, experimental code left in place because developers fear removing it. It spreads like lava, hardening into the codebase. Address it by: version control ensures safety to delete, refactor aggressively, use branches for experiments.'
  },
  {
    id: 15,
    difficulty: 'medium',
    q: 'What are the benefits of using Java records as Value Objects?',
    a: 'Records are immutable by default, auto-generate equals(), hashCode(), and toString(). They reduce boilerplate significantly. They signal intent: "this is a simple data holder." Perfect for DTOs and value objects in domain-driven design.'
  },
  {
    id: 16,
    difficulty: 'hard',
    q: 'How can you resolve circular dependencies in a DI system?',
    a: 'Circular dependencies (A depends on B, B depends on A) indicate design issues. Solutions: 1) Refactor to extract a third class both depend on. 2) Use interface segregation to break cycles. 3) Use setter injection instead of constructor (enables lazy resolution). 4) Use a DI container with lazy proxies.'
  },
  {
    id: 17,
    difficulty: 'hard',
    q: 'What are the challenges with eventual consistency in CQRS?',
    a: 'CQRS with eventual consistency means reads may return stale data. Challenges: handling user expectations (must explain eventual consistency), duplicate handling, ordering guarantees across services, reconciliation on failures, and testing scenarios with timing variations.'
  },
  {
    id: 18,
    difficulty: 'hard',
    q: 'What are the challenges with event replay and versioning in Event Sourcing?',
    a: 'As events evolve, old events may not match new schemas. Challenges: backward compatibility, upcasting events to new versions, handling events that no longer apply, performance of replaying millions of events, and ensuring idempotency of event handlers.'
  },
  {
    id: 19,
    difficulty: 'hard',
    q: 'How do sealed classes in modern Java replace the Visitor pattern?',
    a: 'Sealed classes restrict which classes can extend them. With sealed classes and pattern matching, you can exhaustively handle all subtypes without the Visitor pattern boilerplate. Compiler ensures all cases are covered, eliminating double dispatch complexity.'
  },
  {
    id: 20,
    difficulty: 'hard',
    q: 'When is manual Dependency Injection appropriate vs using an IoC container?',
    a: 'Manual DI: Simple projects, small dependency graphs, avoiding framework lock-in. IoC container: Complex projects, many dependencies, need for scope management, AOP/proxying. Trade-off: framework overhead vs reduced boilerplate and configuration power.'
  }
];

export const quiz = [
  {
    id: 1,
    q: 'What are the three primary types of Dependency Injection?',
    options: ['Constructor, Setter, Interface', 'Getter, Setter, Constructor', 'Static, Instance, Class', 'Factory, Singleton, Prototype'],
    answer: 0,
    explanation: 'Constructor, Setter, and Interface Injection are the three main types. Constructor is mandatory dependency-focused, Setter is optional, and Interface Injection uses special interfaces to inject.'
  },
  {
    id: 2,
    q: 'What is the primary responsibility of an IoC container?',
    options: ['Creating objects and resolving dependencies', 'Rendering user interfaces', 'Serializing data', 'Managing network connections'],
    answer: 0,
    explanation: 'An IoC container creates objects, resolves their dependencies, manages their lifecycle, and handles initialization—it inverts control from your code to the container.'
  },
  {
    id: 3,
    q: 'In CQRS, what is the main difference between Commands and Queries?',
    options: ['Commands modify state, Queries read state', 'Commands are faster than Queries', 'Queries are deprecated', 'They are synonymous'],
    answer: 0,
    explanation: 'CQRS separates responsibility: Commands modify state (create, update, delete), Queries retrieve state without side effects. This allows independent optimization of each.'
  },
  {
    id: 4,
    q: 'How does Event Sourcing differ from traditional CRUD operations?',
    options: ['Stores all state changes as events; CRUD updates state in-place', 'Event Sourcing is faster', 'Event Sourcing cannot undo operations', 'They are identical'],
    answer: 0,
    explanation: 'Event Sourcing stores immutable events of every state change. CRUD updates state directly, losing history. Event Sourcing provides complete audit trail and ability to replay.'
  },
  {
    id: 5,
    q: 'Which of the following is an anti-pattern?',
    options: ['God Object', 'Single Responsibility', 'Dependency Injection', 'Composition'],
    answer: 0,
    explanation: 'God Object is an anti-pattern—a class with too many responsibilities. Single Responsibility, DI, and Composition are best practices.'
  },
  {
    id: 6,
    q: 'What is a symptom of the God Object anti-pattern?',
    options: ['Class has too many responsibilities', 'Class is immutable', 'Class uses composition', 'Class implements few interfaces'],
    answer: 0,
    explanation: 'God Object symptoms include: too many fields, too many methods, hard to test, hard to reuse, unclear purpose. It violates Single Responsibility Principle.'
  },
  {
    id: 7,
    q: 'What is the primary benefit of Constructor Injection?',
    options: ['Ensures immutability and mandatory dependencies are clear', 'Reduces constructor parameters', 'Eliminates need for getters', 'Improves runtime performance'],
    answer: 0,
    explanation: 'Constructor Injection makes dependencies explicit and required. The object is fully initialized upon creation, ensuring no null fields and supporting immutability.'
  },
  {
    id: 8,
    q: 'How does Dependency Injection improve unit testability?',
    options: ['You can inject mocks and stubs for isolated testing', 'It reduces the number of unit tests', 'It eliminates the need for testing', 'It makes code run faster'],
    answer: 0,
    explanation: 'With DI, you inject test doubles (mocks, stubs, fakes) instead of real dependencies. This enables true unit testing in isolation without external dependencies.'
  },
  {
    id: 9,
    q: 'What is special about Java records as Value Objects?',
    options: ['Auto-generate equals(), hashCode(), toString(); immutable by default', 'They have mutable fields', 'They cannot implement interfaces', 'They require extensive boilerplate'],
    answer: 0,
    explanation: 'Records automatically provide equals(), hashCode(), and toString(). They are immutable by default and perfect for Value Objects, reducing boilerplate significantly.'
  },
  {
    id: 10,
    q: 'How do sealed classes help reduce complexity in pattern matching?',
    options: ['Compiler enforces exhaustive case coverage; eliminates Visitor boilerplate', 'They make code slower', 'They replace all design patterns', 'They enforce mutability'],
    answer: 0,
    explanation: 'Sealed classes restrict subclasses, enabling exhaustive pattern matching. Compiler ensures all cases are covered, eliminating the need for complex Visitor pattern implementations.'
  },
  {
    id: 11,
    q: 'What is the Spaghetti Code anti-pattern primarily caused by?',
    options: ['Tangled control flow and unclear structure', 'Using too many design patterns', 'Writing short code', 'Using immutable objects'],
    answer: 0,
    explanation: 'Spaghetti Code results from unstructured, tangled code with unclear flow. Prevent it with patterns, clear concerns, limited nesting, and regular refactoring.'
  },
  {
    id: 12,
    q: 'In the Golden Hammer anti-pattern, what is the core problem?',
    options: ['Applying one familiar solution to all problems regardless of fit', 'Using a hammer tool', 'Making code too simple', 'Ignoring design patterns'],
    answer: 0,
    explanation: 'Golden Hammer: over-relying on one approach (e.g., always using Singleton) even when inappropriate. Solution: evaluate each problem and select the right pattern.'
  },
  {
    id: 13,
    q: 'What makes the Lava Flow anti-pattern problematic?',
    options: ['Dead code accumulates and hardens in the codebase', 'Code becomes too fast', 'Code is properly tested', 'Code follows SOLID principles'],
    answer: 0,
    explanation: 'Lava Flow: old experimental code left in place, spreading like lava, hardening into the system. Solution: use version control to enable safe deletion and regular refactoring.'
  },
  {
    id: 14,
    q: 'How should you handle a circular dependency in a DI system?',
    options: ['Refactor the design; consider setter injection or extracting shared dependencies', 'Ignore it and deploy', 'Always use manual DI', 'Circular dependencies cannot be handled'],
    answer: 0,
    explanation: 'Circular dependencies indicate design issues. Solutions: refactor into a third class both depend on, use interface segregation, setter injection for lazy resolution, or lazy proxies in containers.'
  },
  {
    id: 15,
    q: 'What is a key challenge with CQRS and eventual consistency?',
    options: ['Reads may return stale data; requires managing user expectations', 'CQRS is always immediately consistent', 'Reads are impossible', 'Consistency is not a concern'],
    answer: 0,
    explanation: 'CQRS with eventual consistency means read models lag behind writes. Users must understand this, and systems must handle reconciliation and duplicate detection gracefully.'
  }
];

export const shortNotes = {
  title: 'Modern Patterns & Anti-Patterns',
  color: 'red',
  keyPoints: [
    {
      icon: 'Lightbulb',
      title: 'Dependency Injection (DI)',
      text: 'Objects receive dependencies rather than creating them. Enables loose coupling, testability, and flexibility. Types: Constructor (preferred), Setter, Interface.'
    },
    {
      icon: 'Zap',
      title: 'Inversion of Control (IoC)',
      text: 'Framework controls program flow instead of your code. DI is one implementation. IoC containers (Spring, Guice) manage object creation and dependencies automatically.'
    },
    {
      icon: 'TrendingUp',
      title: 'CQRS Pattern',
      text: 'Separate read (Query) and write (Command) models. Queries are optimized separately, often denormalized. Enables independent scaling and eventual consistency.'
    },
    {
      icon: 'AlertCircle',
      title: 'Anti-Patterns to Avoid',
      text: 'God Object (too many responsibilities), Spaghetti Code (tangled flow), Golden Hammer (over-relying on one solution), Lava Flow (dead code accumulation).'
    },
    {
      icon: 'Archive',
      title: 'Event Sourcing',
      text: 'Store all state changes as immutable events. Current state derived by replaying events. Benefits: complete audit trail, point-in-time reconstruction, event-driven systems.'
    },
    {
      icon: 'Box',
      title: 'Java Records as Value Objects',
      text: 'Records auto-generate equals(), hashCode(), toString(). Immutable by default. Perfect for DTOs and value objects. Reduces boilerplate significantly compared to traditional classes.'
    },
    {
      icon: 'Lock',
      title: 'Sealed Classes & Pattern Matching',
      text: 'Modern Java sealed classes restrict subclasses. Compiler enforces exhaustive pattern matching. Replaces Visitor pattern boilerplate in many scenarios.'
    },
    {
      icon: 'Target',
      title: 'Design Pattern Selection',
      text: 'Evaluate problem context before choosing a pattern. Avoid Golden Hammer (applying one pattern everywhere). Consider: complexity cost, testability, maintainability, team familiarity.'
    }
  ],
  quickFacts: [
    'Constructor Injection is preferred for mandatory dependencies; ensures full initialization.',
    'CQRS separates concerns but introduces eventual consistency challenges—document this to users.',
    'Event Sourcing provides complete history but requires careful event versioning as systems evolve.',
    'IoC containers automate DI but add framework overhead—evaluate trade-offs for your project.',
    'Sealed classes in Java 17+ enable exhaustive pattern matching, reducing Visitor pattern complexity.',
    'Anti-patterns are common pitfalls; recognize God Object, Spaghetti Code, Golden Hammer, Lava Flow.',
    'Records are immutable by default, signaling intent as data holders better than traditional classes.'
  ],
  rememberThis: [
    '"The best pattern is the one that solves your problem without over-complicating the design." - Apply patterns judiciously.',
    'DI enables testing: inject mocks to test units in isolation without real dependencies.',
    'Circular dependencies signal design problems; refactor rather than band-aid with lazy resolution.',
    'CQRS + Event Sourcing is powerful for complex domains but adds operational complexity—start simple.'
  ]
};
