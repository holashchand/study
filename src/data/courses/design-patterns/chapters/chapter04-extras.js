export const topQuestions = [
  {
    id: 1,
    difficulty: 'easy',
    q: 'What is the Adapter pattern?',
    a: 'The Adapter pattern is a structural design pattern that converts the interface of a class into another interface clients expect. It allows incompatible classes to work together by wrapping an incompatible object and presenting it through a compatible interface.'
  },
  {
    id: 2,
    difficulty: 'easy',
    q: 'What real-world analogy explains the Adapter pattern?',
    a: 'A power adapter converts electrical outlets from one standard to another. Similarly, the Adapter pattern converts an incompatible interface into a compatible one. A European plug adapter lets European appliances work with American outlets without modifying either.'
  },
  {
    id: 3,
    difficulty: 'easy',
    q: 'What is the Bridge pattern?',
    a: 'The Bridge pattern is a structural design pattern that decouples an abstraction from its implementation so they can vary independently. It uses composition to bridge the gap between abstraction and implementation, allowing both to evolve without affecting each other.'
  },
  {
    id: 4,
    difficulty: 'easy',
    q: 'What is the Composite pattern?',
    a: 'The Composite pattern is a structural design pattern that allows you to compose objects into tree structures to represent part-whole hierarchies. It enables clients to treat individual objects and compositions uniformly, supporting recursive composition.'
  },
  {
    id: 5,
    difficulty: 'easy',
    q: 'What is the difference between Class Adapter and Object Adapter?',
    a: 'Class Adapter uses inheritance: the Adapter class inherits from both the target interface and the adaptee class (requires multiple inheritance, only in languages supporting it). Object Adapter uses composition: the Adapter holds a reference to the adaptee and delegates calls. Object Adapter is more flexible and generally preferred.'
  },
  {
    id: 6,
    difficulty: 'medium',
    q: 'What problem does Bridge pattern solve that inheritance alone can\'t?',
    a: 'Inheritance creates a cartesian product explosion when combining two independent dimensions (e.g., Shape hierarchy and Color hierarchy). Bridge decouples these by separating abstraction (Shape interface) from implementation (Color implementations), allowing each to evolve independently without creating exponential subclasses.'
  },
  {
    id: 7,
    difficulty: 'medium',
    q: 'What is Cartesian product explosion and how does Bridge fix it?',
    a: 'With inheritance, combining m abstractions with n implementations requires m×n classes. For example, 3 shapes × 4 colors = 12 subclasses. Bridge decouples them: keep 3 shape classes and create 4 color implementations. Shapes delegate to color implementations via composition, avoiding the explosion.'
  },
  {
    id: 8,
    difficulty: 'medium',
    q: 'When would you use the Composite pattern?',
    a: 'Use Composite when you have part-whole hierarchies that should be treated uniformly (file systems, UI components, org charts, menus with submenus). Clients can work with individual items and containers using the same interface, simplifying recursive algorithms and reducing conditional logic.'
  },
  {
    id: 9,
    difficulty: 'medium',
    q: 'What is the difference between Leaf and Composite nodes in the Composite pattern?',
    a: 'Leaf nodes are terminal nodes with no children; they implement the Component interface but their methods do no recursive operations. Composite nodes can contain children (Leaves or other Composites); they implement Component methods by delegating to children. Both implement the same interface for uniformity.'
  },
  {
    id: 10,
    difficulty: 'medium',
    q: 'How does the Adapter pattern relate to the Open/Closed Principle?',
    a: 'Adapter demonstrates Open/Closed: classes are open for extension (via Adapter wrapping) but closed for modification. By using Adapter, you don\'t modify the adaptee or target interface; instead you create a new class that bridges them. This enables backward compatibility without changing existing code.'
  },
  {
    id: 11,
    difficulty: 'medium',
    q: 'Explain how InputStreamReader acts as an Adapter in Java.',
    a: 'InputStreamReader adapts InputStream (byte-based, no encoding awareness) into Reader (character-based, with encoding). It wraps an InputStream and provides the Reader interface. Internally it buffers bytes, applies character encoding (UTF-8, etc.), and returns characters. Clients see only the Reader interface.'
  },
  {
    id: 12,
    difficulty: 'medium',
    q: 'In Bridge pattern, what goes in the abstraction and what goes in the implementation?',
    a: 'Abstraction contains high-level concepts and delegates to implementation for actual work. Implementation contains the actual algorithms/behaviors. Example: Shape abstraction delegates to Color implementation. Changes to color strategies don\'t affect Shape hierarchy. Both can evolve independently.'
  },
  {
    id: 13,
    difficulty: 'medium',
    q: 'How does Composite pattern support recursive structures?',
    a: 'Composite can contain children of any Component type (Leaves or other Composites). Methods like add(), remove(), getChild() enable building trees. When a method is called on a Composite, it recursively calls the same method on its children. This treats the entire tree uniformly.'
  },
  {
    id: 14,
    difficulty: 'medium',
    q: 'What are the key differences between Adapter and Decorator patterns?',
    a: 'Adapter changes interface to enable compatibility; Decorator adds behavior while preserving interface. Adapter wraps incompatible objects; Decorator wraps to extend functionality. Adapter is about interface translation; Decorator is about behavior augmentation. Adapter resolves interface mismatch; Decorator layers functionality.'
  },
  {
    id: 15,
    difficulty: 'medium',
    q: 'What are the similarities and differences between Bridge and Strategy patterns?',
    a: 'Both use composition to delegate to implementations. Bridge decouples abstraction from implementation at design time to avoid cartesian product. Strategy encapsulates interchangeable algorithms the client can swap at runtime. Bridge is structural (architecture), Strategy is behavioral (algorithm selection).'
  },
  {
    id: 16,
    difficulty: 'hard',
    q: 'How does the Composite pattern implement the Component interface?',
    a: 'Both Leaf and Composite classes implement Component. Leaf implements all operations as defined (no children). Composite implements operations by first calling the same operation on all children, then applying its own logic. The interface is identical, but implementations differ based on whether children exist.'
  },
  {
    id: 17,
    difficulty: 'hard',
    q: 'What is the difference between Transparent and Safe Composite and what are the trade-offs?',
    a: 'Transparent Composite: Component interface includes add/remove, so clients treat Leaves and Composites uniformly but Leaves expose meaningless add/remove methods. Safe Composite: only Composite has add/remove, so interface is clear but requires type checking (instanceof). Trade-off between uniform interface (transparent) vs type safety (safe).'
  },
  {
    id: 18,
    difficulty: 'hard',
    q: 'How would you test code using the Bridge pattern?',
    a: 'Test abstraction and implementations separately. Mock or create dummy implementations to test abstraction logic. Test that abstraction correctly delegates to implementation. Test each implementation independently. Use dependency injection so tests can inject mock implementations. Verify both can change independently without breaking tests.'
  },
  {
    id: 19,
    difficulty: 'hard',
    q: 'How does the Adapter pattern support the Legacy Code integration strategy?',
    a: 'Adapters wrap legacy code with incompatible interfaces, allowing new code to use it without modification. This enables gradual migration: new code uses adapters to legacy systems, avoiding rewriting legacy code. Adapters provide a facade protecting new code from legacy complexity while maintaining backward compatibility.'
  },
  {
    id: 20,
    difficulty: 'hard',
    q: 'When does composition over inheritance apply specifically to the Bridge pattern?',
    a: 'Bridge exemplifies composition over inheritance by composing abstraction with implementation (delegation) rather than inheritance hierarchies. Example: instead of RedCircle, BlueCircle, RedSquare, BlueSquare (4 subclasses), use Shape + Color composition. Composition scales linearly (m + n classes) vs inheritance (m × n classes).'
  }
];

export const quiz = [
  {
    id: 1,
    q: 'Which pattern converts the interface of a class into another interface clients expect?',
    options: [
      'Bridge pattern',
      'Adapter pattern',
      'Facade pattern',
      'Decorator pattern'
    ],
    answer: 1,
    explanation: 'The Adapter pattern specifically addresses interface conversion, allowing incompatible classes to work together. It wraps an incompatible object and presents a compatible interface to clients.'
  },
  {
    id: 2,
    q: 'What is the key difference between Class Adapter and Object Adapter?',
    options: [
      'Class Adapter is synchronous; Object Adapter is asynchronous',
      'Class Adapter uses inheritance; Object Adapter uses composition and delegation',
      'Class Adapter works with interfaces; Object Adapter works with classes',
      'Class Adapter is faster than Object Adapter'
    ],
    answer: 1,
    explanation: 'Class Adapter inherits from both target interface and adaptee (requires multiple inheritance). Object Adapter holds a reference to the adaptee and delegates calls, making it more flexible. Object Adapter is generally preferred.'
  },
  {
    id: 3,
    q: 'The Bridge pattern solves the cartesian product problem. What is this problem?',
    options: [
      'Mathematical calculation of complex numbers',
      'Inheritance creating m×n classes when combining m abstractions with n implementations',
      'Network routing across multiple paths',
      'Sorting items in multiple dimensions'
    ],
    answer: 1,
    explanation: 'Cartesian product explosion occurs when inheritance combines independent dimensions. Example: 3 shapes × 4 colors = 12 subclasses with inheritance. Bridge decouples them using composition, avoiding this explosion.'
  },
  {
    id: 4,
    q: 'In the Composite pattern, how do Composite nodes typically implement their methods?',
    options: [
      'They throw UnsupportedOperationException',
      'They delegate recursively to all children and aggregate results',
      'They do nothing',
      'They copy implementation from Leaf nodes'
    ],
    answer: 1,
    explanation: 'Composite nodes implement methods by delegating to all their children (which may be Leaves or other Composites) and aggregating results. This enables recursive tree operations with the same interface.'
  },
  {
    id: 5,
    q: 'How does InputStreamReader work as an Adapter in Java?',
    options: [
      'It converts Reader interface into InputStream interface',
      'It wraps InputStream and provides Reader interface with character encoding support',
      'It caches input for faster reading',
      'It implements both InputStream and Reader identically'
    ],
    answer: 1,
    explanation: 'InputStreamReader adapts byte-based InputStream into character-based Reader. It wraps InputStream, buffers bytes, applies character encoding, and presents the Reader interface to clients.'
  },
  {
    id: 6,
    q: 'What is the main purpose of the Bridge pattern?',
    options: [
      'To connect two incompatible interfaces',
      'To decouple abstraction from implementation so both can vary independently',
      'To add functionality to an object dynamically',
      'To create object collections'
    ],
    answer: 1,
    explanation: 'Bridge decouples abstraction (what the client sees) from implementation (how it works). Both can evolve independently. This avoids the cartesian product explosion of inheritance-based hierarchies.'
  },
  {
    id: 7,
    q: 'In a Composite tree, what is a Leaf node?',
    options: [
      'A node that is always at the deepest level',
      'A terminal node with no children; implements Component interface without recursion',
      'A node that can only have string values',
      'A temporary node that is later converted to Composite'
    ],
    answer: 1,
    explanation: 'Leaf is a terminal node with no children. It implements Component interface methods but does not perform recursive operations since it has no children to delegate to.'
  },
  {
    id: 8,
    q: 'How does the Adapter pattern support the Open/Closed Principle?',
    options: [
      'It requires modifying both adaptee and target',
      'Classes remain closed for modification; extension happens via new Adapter wrapping',
      'It always opens the base class for extension',
      'It requires recompiling original classes'
    ],
    answer: 1,
    explanation: 'Adapter enables Open/Closed: classes are closed (not modified) but open for extension (via Adapter wrapping). New Adapter classes bridge incompatibility without changing existing code.'
  },
  {
    id: 9,
    q: 'What real-world concept does the Composite pattern model?',
    options: [
      'Mathematical composition functions',
      'Part-whole hierarchies where individual objects and compositions are treated uniformly',
      'Musical chord combinations',
      'Chemical compound formulas'
    ],
    answer: 1,
    explanation: 'Composite models part-whole hierarchies like file systems (folders contain files or folders), UI components (panels contain widgets or panels), or org charts (departments contain employees or subdepartments).'
  },
  {
    id: 10,
    q: 'What is the key difference between Adapter and Decorator patterns?',
    options: [
      'Adapter is structural; Decorator is creational',
      'Adapter changes interface for compatibility; Decorator adds behavior while preserving interface',
      'Adapter uses inheritance; Decorator uses composition',
      'Adapter works with classes; Decorator works with interfaces'
    ],
    answer: 1,
    explanation: 'Adapter resolves interface mismatch between incompatible components. Decorator preserves interface while layering additional behavior. Both use composition but serve different purposes.'
  },
  {
    id: 11,
    q: 'In Bridge pattern, which should be more stable: abstraction or implementation?',
    options: [
      'Implementation should be more stable',
      'Abstraction should be more stable; implementation can vary',
      'Both must be equally stable',
      'Neither needs stability; Bridge handles changes'
    ],
    answer: 1,
    explanation: 'Abstraction should be more stable because clients depend on it. Implementation (strategies/algorithms) can change, evolve, or be added without affecting the abstraction layer or clients.'
  },
  {
    id: 12,
    q: 'What is Transparent Composite?',
    options: [
      'A Composite that is invisible to clients',
      'Component interface includes add/remove methods; clients treat Leaves and Composites uniformly but Leaves have meaningless add/remove',
      'A Composite made of transparent materials',
      'A Composite that forwards all calls unchanged'
    ],
    answer: 1,
    explanation: 'Transparent Composite puts add/remove in the Component interface, allowing uniform client code. Trade-off: Leaves expose meaningless add/remove methods, reducing type safety.'
  },
  {
    id: 13,
    q: 'How does the Bridge pattern relate to composition over inheritance?',
    options: [
      'Bridge requires inheritance',
      'Bridge exemplifies composition: abstracting with implementations composed in, avoiding m×n inheritance explosion',
      'Bridge discourages composition',
      'Bridge has no relation to composition'
    ],
    answer: 1,
    explanation: 'Bridge is a textbook example of composition over inheritance. Instead of Shape subclasses (RedCircle, BlueCircle, etc.), compose Shape with Color implementations, achieving linear scaling instead of exponential.'
  },
  {
    id: 14,
    q: 'How do Bridge and Strategy patterns differ?',
    options: [
      'Bridge is behavioral; Strategy is structural',
      'Bridge decouples abstraction/implementation at design time; Strategy enables algorithm swapping at runtime',
      'Bridge requires inheritance; Strategy uses composition',
      'They are essentially the same pattern'
    ],
    answer: 1,
    explanation: 'Both use composition but for different reasons: Bridge separates architecture concerns; Strategy encapsulates interchangeable algorithms. Bridge is structural (architecture design); Strategy is behavioral (algorithm selection).'
  },
  {
    id: 15,
    q: 'When integrating legacy code, how does the Adapter pattern help?',
    options: [
      'It converts legacy code to modern languages',
      'It wraps legacy interfaces, allowing new code to use legacy systems without modification',
      'It eliminates the need for legacy code',
      'It prevents legacy code from being called'
    ],
    answer: 1,
    explanation: 'Adapter enables gradual migration by wrapping legacy interfaces. New code uses adapters to legacy systems, avoiding rewriting legacy code and maintaining backward compatibility.'
  }
];

export const shortNotes = {
  title: 'Structural Patterns I',
  color: 'orange',
  keyPoints: [
    {
      icon: '🔌',
      title: 'Adapter Pattern',
      text: 'Converts incompatible interface into compatible one. Two types: Class (inheritance, rarely used) and Object (composition, preferred). Analogy: power adapter converts outlets. Enables legacy code integration without modification.'
    },
    {
      icon: '🌉',
      title: 'Bridge Pattern',
      text: 'Decouples abstraction from implementation via composition. Avoids m×n inheritance explosion (cartesian product). Abstraction stays stable; implementations can vary. Both can evolve independently without affecting clients.'
    },
    {
      icon: '🎨',
      title: 'Bridge Example: Shape & Color',
      text: 'Inheritance: RedCircle, BlueCircle, RedSquare, BlueSquare = 2×2=4 classes. Bridge: 2 shape classes + 2 color implementations = 2+2=4 items. Scales linearly (m+n) not exponentially (m×n). Shapes delegate to color implementations.'
    },
    {
      icon: '🌳',
      title: 'Composite Pattern',
      text: 'Composes objects into tree structures for part-whole hierarchies. Uniform interface for individuals and composites. Leaf nodes have no children. Composite nodes recursively delegate to children. Examples: file systems, UI trees, org charts.'
    },
    {
      icon: '🔄',
      title: 'Leaf vs Composite in Trees',
      text: 'Leaf: terminal node, no children, implements Component methods as base operations. Composite: can contain Leaves or other Composites, implements methods by delegating to children and aggregating results. Same interface, different behaviors.'
    },
    {
      icon: '📖',
      title: 'InputStreamReader as Adapter',
      text: 'Wraps byte-based InputStream and provides character-based Reader interface. Handles character encoding (UTF-8, ASCII). Clients see Reader; internally manages byte buffering and encoding. Demonstrates Object Adapter pattern.'
    },
    {
      icon: '🔒',
      title: 'Transparent vs Safe Composite',
      text: 'Transparent: add/remove in Component interface; uniform but Leaves expose meaningless methods. Safe: add/remove only in Composite; clear but requires instanceof type checking. Trade-off between uniformity and type safety.'
    },
    {
      icon: '📦',
      title: 'When to Use Each',
      text: 'Adapter: interface incompatibility, legacy code integration. Bridge: avoid m×n inheritance explosion, decouple abstraction/implementation. Composite: part-whole hierarchies, recursive structures, uniform treatment of containers and items.'
    }
  ],
  quickFacts: [
    'Class Adapter uses multiple inheritance (inheritance from both target and adaptee); Object Adapter uses composition (holds adaptee reference). Object Adapter is preferred.',
    'Adapter pattern supports Open/Closed: classes remain closed for modification, extension happens via new Adapter wrappers.',
    'Bridge avoids explosion: instead of RedCircle, BlueCircle, RedSquare, BlueSquare (4 classes), use Shape + Color composition (2+2=4 items).',
    'InputStreamReader adapts InputStream (bytes) into Reader (characters) with encoding support.',
    'Composite enables recursive tree algorithms with uniform interface: treat file and folder, button and panel identically.',
    'Decorator preserves interface while adding behavior; Adapter changes interface for compatibility.',
    'Bridge separates abstraction (stable) from implementation (variable); allows evolution independently.',
    'Safe Composite requires type checks; Transparent Composite allows uniform interface but Leaves expose meaningless methods.'
  ],
  rememberThis: [
    'Use Object Adapter (composition) over Class Adapter (inheritance) for flexibility and avoiding multiple inheritance complications.',
    'Bridge pattern is composition over inheritance: solves m×n explosion by composing abstractions with implementations instead of creating subclass matrix.',
    'Composite pattern enables recursive structures where you can treat leaves and composites uniformly, simplifying algorithms that work on trees.',
    'Adapter enables legacy code integration by wrapping incompatible interfaces; supports gradual migration without modifying original code.'
  ]
};
