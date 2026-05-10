export const topQuestions = [
  {
    id: 1,
    difficulty: 'easy',
    q: 'What is the Decorator pattern?',
    a: 'The Decorator pattern is a structural pattern that allows you to attach additional responsibilities to an object dynamically, providing a flexible alternative to subclassing for extending functionality.'
  },
  {
    id: 2,
    difficulty: 'easy',
    q: 'What is the Facade pattern?',
    a: 'The Facade pattern is a structural pattern that provides a unified, simplified interface to a set of interfaces in a subsystem, making the subsystem easier to use.'
  },
  {
    id: 3,
    difficulty: 'easy',
    q: 'What is the Flyweight pattern?',
    a: 'The Flyweight pattern is a structural pattern that uses sharing to support large numbers of fine-grained objects efficiently by sharing common state (intrinsic state) between objects.'
  },
  {
    id: 4,
    difficulty: 'easy',
    q: 'What is the Proxy pattern?',
    a: 'The Proxy pattern is a structural pattern that provides a surrogate or placeholder for another object to control access to it, add additional functionality, or defer expensive operations.'
  },
  {
    id: 5,
    difficulty: 'easy',
    q: 'How does Decorator differ from inheritance?',
    a: 'Decorator uses composition and wrapping to add behavior at runtime, while inheritance adds behavior at compile time through class hierarchy. Decorator follows the Open/Closed Principle better and allows dynamic combination of behaviors.'
  },
  {
    id: 6,
    difficulty: 'medium',
    q: 'Name 3 examples of Java I/O that use the Decorator pattern.',
    a: 'BufferedInputStream/BufferedOutputStream decorate input/output streams; DataInputStream/DataOutputStream add typed data reading/writing; GZIPInputStream compresses data. These wrap basic streams to add buffering, data type support, or compression capabilities.'
  },
  {
    id: 7,
    difficulty: 'medium',
    q: 'What is the difference between intrinsic and extrinsic state in Flyweight?',
    a: 'Intrinsic state is immutable, shared data that can be stored in the flyweight object itself. Extrinsic state is mutable context-specific data passed as parameters. Separating them allows many objects to share the same intrinsic state.'
  },
  {
    id: 8,
    difficulty: 'medium',
    q: 'What are the four types of Proxy pattern?',
    a: 'Virtual Proxy (defers expensive object creation), Protection Proxy (controls access based on permissions), Remote Proxy (manages communication across address spaces), and Smart Reference (performs additional actions like reference counting).'
  },
  {
    id: 9,
    difficulty: 'medium',
    q: 'Compare Decorator vs Subclassing for extending functionality.',
    a: 'Decorator: Dynamic composition, flexible, follows SRP; Subclassing: Static, creates class explosion with combinations, tightly coupled to parent. Decorator allows runtime changes and independent feature combination.'
  },
  {
    id: 10,
    difficulty: 'medium',
    q: 'What is the relationship between Facade and the Law of Demeter?',
    a: 'Facade implements the Law of Demeter by reducing coupling between client and subsystem. Instead of navigating through multiple objects, a single Facade object provides the interface, limiting object collaboration to direct neighbors.'
  },
  {
    id: 11,
    difficulty: 'medium',
    q: 'When would you use Virtual Proxy?',
    a: 'Virtual Proxy is used when the real object is expensive to create (database connections, large images, complex calculations). It defers creation until the object is actually needed, improving startup performance and memory usage.'
  },
  {
    id: 12,
    difficulty: 'medium',
    q: 'How does Java Dynamic Proxy work?',
    a: 'Java Dynamic Proxy uses java.lang.reflect.Proxy and InvocationHandler interface. Proxy.newProxyInstance() creates a proxy class at runtime that implements specified interfaces, delegating method calls to an InvocationHandler which can intercept and modify behavior.'
  },
  {
    id: 13,
    difficulty: 'medium',
    q: 'How does Java implement Flyweight in its String pool?',
    a: 'Java maintains a pool of String objects; identical string literals share the same object instance (intrinsic state). When you create a string with the same value, Java returns the existing reference from the pool, saving memory.'
  },
  {
    id: 14,
    difficulty: 'medium',
    q: 'What is the key difference between Facade and Mediator?',
    a: 'Facade provides a simplified interface to a subsystem without changing its behavior; it\'s one-way and unidirectional. Mediator centralizes communication between multiple objects that interact bidirectionally, promoting loose coupling.'
  },
  {
    id: 15,
    difficulty: 'medium',
    q: 'What is a Protection Proxy and what security use case does it solve?',
    a: 'A Protection Proxy controls access to a real object based on permissions. It checks credentials before delegating requests, implementing fine-grained access control without modifying the real object or client code.'
  },
  {
    id: 16,
    difficulty: 'hard',
    q: 'How does Decorator support the Open/Closed Principle?',
    a: 'Decorator is open for extension (new decorators can be added without modifying existing code) and closed for modification (existing objects and decorators don\'t need changes). New behaviors are added by wrapping, not altering.'
  },
  {
    id: 17,
    difficulty: 'hard',
    q: 'When should you use Proxy vs Decorator?',
    a: 'Use Proxy to control access, add caching, or defer creation of the real object; Proxy emphasizes control. Use Decorator to add responsibilities and extend behavior; Decorator emphasizes enhancement. Proxy typically wraps a single object, Decorator supports chaining.'
  },
  {
    id: 18,
    difficulty: 'hard',
    q: 'What are the key implementation considerations for a Caching Proxy?',
    a: 'Cache invalidation strategy (time-based, event-based), thread safety for concurrent access, cache miss handling, memory management for large caches, and key generation for cache lookup. Consider stale data tolerance and cache coherency.'
  },
  {
    id: 19,
    difficulty: 'hard',
    q: 'When and why is Flyweight effective for memory optimization?',
    a: 'Flyweight is effective when you have many similar objects with shared immutable state (intrinsic state). It\'s worth implementing when memory savings justify the complexity; works well for fine-grained objects like characters, tiles, or tree nodes.'
  },
  {
    id: 20,
    difficulty: 'hard',
    q: 'How does Spring AOP implement the Proxy pattern?',
    a: 'Spring AOP uses Java Dynamic Proxy (for interfaces) or CGLIB (bytecode generation) to create proxy objects at runtime. Proxies intercept method calls and weave cross-cutting concerns (logging, transactions) without modifying the actual bean code.'
  }
];

export const quiz = [
  {
    id: 1,
    q: 'Which participants make up the Decorator pattern?',
    options: ['Subject, Decorator, ConcreteComponent', 'Component, ConcreteComponent, Decorator, ConcreteDecorator', 'Client, Subject, Proxy, RealSubject', 'Handler, ConcreteHandler, Successor'],
    answer: 1,
    explanation: 'The Decorator pattern has: Component (interface), ConcreteComponent (original object), Decorator (abstract wrapper), and ConcreteDecorator (specific implementations). This allows stacking multiple decorators.'
  },
  {
    id: 2,
    q: 'How does Java I/O use the Decorator pattern?',
    options: ['Streams inherit from a common base class', 'Each stream type wraps another stream to add functionality like buffering or compression', 'I/O uses the Adapter pattern exclusively', 'Streams use composition with delegation only'],
    answer: 1,
    explanation: 'Java I/O streams wrap other streams: BufferedInputStream wraps InputStream, DataInputStream wraps BufferedInputStream, etc. Each layer adds specific functionality while delegating core operations.'
  },
  {
    id: 3,
    q: 'In the Flyweight pattern, what does intrinsic state represent?',
    options: ['State that changes frequently per object', 'Immutable state shared across multiple flyweight objects', 'State managed by the client', 'Temporary state during execution'],
    answer: 1,
    explanation: 'Intrinsic state is immutable context-independent data that can be shared (like font characteristics). Extrinsic state is mutable context-dependent data passed as parameters.'
  },
  {
    id: 4,
    q: 'Which type of Proxy defers expensive object creation until needed?',
    options: ['Protection Proxy', 'Remote Proxy', 'Virtual Proxy', 'Smart Reference Proxy'],
    answer: 2,
    explanation: 'Virtual Proxy implements lazy initialization, deferring the creation of expensive real objects (large images, database connections) until they are actually accessed.'
  },
  {
    id: 5,
    q: 'What is the primary intent of the Facade pattern?',
    options: ['To control access to an object', 'To provide a simplified unified interface to a complex subsystem', 'To extend object functionality dynamically', 'To manage a pool of reusable objects'],
    answer: 1,
    explanation: 'Facade\'s intent is to simplify complex subsystems by providing a single entry point with a clean, easy-to-use interface, hiding subsystem complexity from clients.'
  },
  {
    id: 6,
    q: 'In Java Dynamic Proxy, what interface must be implemented to handle method calls?',
    options: ['Proxy', 'ProxyHandler', 'InvocationHandler', 'MethodInterceptor'],
    answer: 2,
    explanation: 'InvocationHandler interface defines the invoke() method that handles all method calls on the proxy object, allowing interception and custom behavior implementation.'
  },
  {
    id: 7,
    q: 'How does Java\'s String pool implement the Flyweight pattern?',
    options: ['By creating a new String object for each literal', 'By storing identical string values in one object and returning the same reference', 'By using weak references for all strings', 'By compressing string data with GZIP'],
    answer: 1,
    explanation: 'Java maintains a pool of String objects; identical string literals reference the same object instance, sharing intrinsic state (the string value) across all uses.'
  },
  {
    id: 8,
    q: 'When should you choose Protection Proxy over regular inheritance-based access control?',
    options: ['Never, inheritance is always better', 'When you need runtime permission checking without modifying the real object', 'Only for remote objects', 'When performance is not a concern'],
    answer: 1,
    explanation: 'Protection Proxy allows dynamic access control at runtime, checking permissions before delegating to the real object, without modifying the real object or requiring inheritance hierarchies.'
  },
  {
    id: 9,
    q: 'What is a key advantage of Decorator over Subclassing?',
    options: ['Decorators are always faster', 'Decorators can be combined dynamically at runtime without class explosion', 'Decorators require less memory', 'Decorators support multiple inheritance'],
    answer: 1,
    explanation: 'Decorator avoids the combinatorial explosion of subclasses. Instead of creating multiple subclass combinations, decorators allow flexible runtime composition of behaviors.'
  },
  {
    id: 10,
    q: 'In the Facade pattern, what relationship exists between Facade and subsystem classes?',
    options: ['One-to-one tight coupling', 'One Facade provides simplified access to multiple complex subsystem classes', 'Many Facades for each subsystem class', 'No relationship; they are unrelated'],
    answer: 1,
    explanation: 'A Facade typically hides and simplifies the interface of multiple related subsystem classes, reducing coupling between clients and the complex subsystem.'
  },
  {
    id: 11,
    q: 'Which pattern is most suitable for adding logging to database operations without modifying database class code?',
    options: ['Decorator', 'Adapter', 'Facade', 'Factory'],
    answer: 0,
    explanation: 'Decorator wraps the database object and adds logging behavior before/after delegating to the real object, achieving cross-cutting concerns without modifying the original class.'
  },
  {
    id: 12,
    q: 'What does Smart Reference Proxy add to basic proxy functionality?',
    options: ['Network communication', 'Authentication', 'Additional operations like reference counting or lazy loading', 'Data compression'],
    answer: 2,
    explanation: 'Smart Reference Proxy performs intelligent management tasks: reference counting, logging, caching results, or automatic cleanup, in addition to basic proxy delegation.'
  },
  {
    id: 13,
    q: 'In Flyweight, what is the role of the FlyweightFactory?',
    options: ['It creates new flyweights for every request', 'It manages and reuses existing flyweight objects, returning the same object if already created', 'It destroys unused flyweights', 'It handles extrinsic state'],
    answer: 1,
    explanation: 'FlyweightFactory maintains a pool of created flyweights and returns existing instances when requested again, preventing duplicate objects and achieving memory savings.'
  },
  {
    id: 14,
    q: 'How does a Facade follow the Law of Demeter?',
    options: ['It exposes all subsystem methods', 'It provides a single interface that limits client interaction to one object', 'It requires clients to know the subsystem structure', 'It uses global state'],
    answer: 1,
    explanation: 'Facade follows the Law of Demeter by providing a single point of contact; clients interact with one Facade object rather than navigating through multiple subsystem objects.'
  },
  {
    id: 15,
    q: 'Which pattern should you use when you need to add behavior like buffering and compression to a stream?',
    options: ['Strategy', 'Decorator', 'Adapter', 'Composite'],
    answer: 1,
    explanation: 'Decorator is ideal for this: BufferedInputStream decorates a raw stream to add buffering, then GZIPInputStream decorates it to add compression, enabling flexible behavior composition.'
  }
];

export const shortNotes = {
  title: 'Structural Patterns II: Decorator, Facade, Flyweight, Proxy',
  color: 'rose',
  keyPoints: [
    {
      icon: 'Wrench',
      title: 'Decorator Pattern',
      text: 'Wrap objects to add behavior dynamically. Java I/O streams (BufferedInputStream, DataInputStream, GZIPInputStream) are classic examples. Better than inheritance for combining features.'
    },
    {
      icon: 'Building2',
      title: 'Facade Pattern',
      text: 'Provide a single simplified interface to a complex subsystem. Reduces coupling by hiding complexity. Client talks to one Facade, not multiple subsystem classes.'
    },
    {
      icon: 'Zap',
      title: 'Flyweight Pattern',
      text: 'Share common immutable state (intrinsic) across many objects to save memory. Java String pool uses this: identical strings reference the same object. Works for fine-grained objects.'
    },
    {
      icon: 'Shield',
      title: 'Proxy Pattern',
      text: 'Control access to another object via a surrogate. Types: Virtual (lazy creation), Protection (access control), Remote (network communication), Smart Reference (reference counting).'
    },
    {
      icon: 'Layers',
      title: 'Decorator vs Subclassing',
      text: 'Decorator: runtime composition, flexible, no class explosion. Subclassing: static, creates N^2 combinations for N features. Decorator follows Open/Closed Principle.'
    },
    {
      icon: 'Link2',
      title: 'Decorator Chain Example',
      text: 'new GZIPInputStream(new BufferedInputStream(new FileInputStream("file.txt"))) - each decorator wraps the previous, adding functionality layer by layer.'
    },
    {
      icon: 'Cpu',
      title: 'Proxy vs Decorator',
      text: 'Proxy: control/protect/defer. Decorator: add responsibility/enhance. Proxy usually single object, Decorator supports chaining. Both use composition and delegation.'
    },
    {
      icon: 'Package',
      title: 'FlyweightFactory Role',
      text: 'Manages pool of flyweight objects. Returns existing instance if already created, preventing duplicates. Clients request flyweights through factory, not constructor.'
    }
  ],
  quickFacts: [
    'Decorator uses composition; Subclassing uses inheritance — Decorator is more flexible.',
    'Java I/O: Stack decorators to combine buffering + compression + data typing dynamically.',
    'Facade reduces coupling; Mediator centralizes communication — different purposes.',
    'Virtual Proxy defers expensive object creation until first use (lazy initialization).',
    'String pool shares intrinsic state; ArrayList’s extrinsic state varies per element.',
    'Dynamic Proxy (java.lang.reflect) generates proxy classes at runtime for interfaces.',
    'Protection Proxy checks permissions before delegating; adds security without modifying real object.'
  ],
  rememberThis: [
    'Decorator: "wrap to add behavior" — compose decorators for flexible combinations.',
    'Flyweight: "share immutable state" — intrinsic (shared), extrinsic (passed as args).',
    'Facade: "one interface to complex system" — reduces client-subsystem coupling.',
    'Proxy types: Virtual (lazy), Protection (access), Remote (network), Smart (extras).'
  ]
};
