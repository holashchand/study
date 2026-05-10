export const topQuestions = [
  {
    id: 1,
    difficulty: 'easy',
    q: 'What is a design pattern?',
    a: 'A design pattern is a reusable solution to a common problem in software design. It is not code, but a template or blueprint describing how to structure classes and objects to solve a particular design problem while maintaining flexibility, scalability, and maintainability.'
  },
  {
    id: 2,
    difficulty: 'easy',
    q: 'Who are the Gang of Four (GoF)?',
    a: 'The Gang of Four refers to Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides who authored "Design Patterns: Elements of Reusable Object-Oriented Software" in 1994. This seminal book documented 23 classic object-oriented design patterns that have become foundational to software engineering.'
  },
  {
    id: 3,
    difficulty: 'easy',
    q: 'What are the three categories of GoF design patterns?',
    a: 'The 23 GoF patterns are divided into three categories: (1) Creational patterns (5) - focus on object creation mechanisms; (2) Structural patterns (7) - deal with object composition and relationships; (3) Behavioral patterns (11) - concerned with communication between objects and responsibility distribution.'
  },
  {
    id: 4,
    difficulty: 'easy',
    q: 'What is the difference between a design pattern and an algorithm?',
    a: 'An algorithm is a step-by-step procedure for solving a specific computational problem with a defined input and output. A design pattern is a higher-level template for organizing code structure and relationships between classes/objects to solve recurring design problems. Patterns are more about architecture and flexibility, while algorithms focus on computation.'
  },
  {
    id: 5,
    difficulty: 'easy',
    q: 'What is the Single Responsibility Principle (SRP)?',
    a: 'SRP states that a class should have only one reason to change, meaning it should have only one responsibility or job. A class should do one thing and do it well. This improves maintainability, testability, and reduces coupling between components. For example, a User class should handle user data, not both user data and database persistence.'
  },
  {
    id: 6,
    difficulty: 'medium',
    q: 'Explain the Open/Closed Principle (OCP).',
    a: 'OCP states that software entities (classes, modules, functions) should be open for extension but closed for modification. This means you should be able to add new functionality without changing existing code. You achieve this through inheritance, composition, and polymorphism. For example, use abstract classes and interfaces to allow extending behavior without modifying the base class.'
  },
  {
    id: 7,
    difficulty: 'medium',
    q: 'What is the Liskov Substitution Principle (LSP)?',
    a: 'LSP states that objects of a superclass should be replaceable with objects of its subclasses without breaking the application. In other words, a subclass should enhance, not weaken, the base class contract. If S is a subtype of T, then T can be replaced by S. Violating this principle leads to runtime errors and unpredictable behavior.'
  },
  {
    id: 8,
    difficulty: 'medium',
    q: 'What is the Interface Segregation Principle (ISP)?',
    a: 'ISP states that clients should not be forced to depend on interfaces they do not use. Instead of large, monolithic interfaces, create multiple small, focused interfaces tailored to specific client needs. This reduces coupling and makes code more flexible. For example, instead of a Worker interface with both work() and eat() methods, segregate into WorkTask and EatTask interfaces.'
  },
  {
    id: 9,
    difficulty: 'medium',
    q: 'What is the Dependency Inversion Principle (DIP)?',
    a: 'DIP has two key points: (1) High-level modules should not depend on low-level modules; both should depend on abstractions. (2) Abstractions should not depend on details; details should depend on abstractions. This reduces coupling by making components depend on stable abstractions rather than concrete implementations. Achieved through interfaces and dependency injection.'
  },
  {
    id: 10,
    difficulty: 'medium',
    q: 'What does "program to an interface, not an implementation" mean?',
    a: 'This principle advocates declaring variables, parameters, and return types using abstract types (interfaces or abstract classes) rather than concrete implementations. This allows you to swap implementations at runtime without changing client code. For example, use "List list = new ArrayList()" instead of "ArrayList list = new ArrayList()". It promotes flexibility and testability.'
  },
  {
    id: 11,
    difficulty: 'medium',
    q: 'Why should you favor composition over inheritance?',
    a: 'Composition is often preferable to inheritance because it provides greater flexibility and avoids the fragile base class problem. With composition, you can change behavior at runtime and avoid deep inheritance hierarchies. Inheritance creates tight coupling and inflexible class hierarchies. Composition makes relationships explicit, easier to test, and allows dynamic behavior changes. Use inheritance for "is-a" relationships; composition for "has-a".'
  },
  {
    id: 12,
    difficulty: 'medium',
    q: 'How do you read a UML class diagram?',
    a: 'A UML class diagram shows classes as rectangles with three compartments: (1) Class name at the top; (2) Attributes (fields) in the middle with visibility modifiers (+public, -private, #protected); (3) Methods (operations) at the bottom with signatures. Relationships are shown as lines: solid line with arrow for inheritance, dashed line for interfaces, solid line for association, diamond for composition/aggregation.'
  },
  {
    id: 13,
    difficulty: 'medium',
    q: 'What is the difference between aggregation and composition in UML?',
    a: 'Aggregation (hollow diamond) represents a "has-a" relationship where the child can exist independently of the parent. Composition (filled diamond) represents a strong ownership where the child is part of the parent and is destroyed when the parent is destroyed. Example: A Library (parent) has Books (child). Aggregation: books can exist without the library. Composition: pages cannot exist without the book.'
  },
  {
    id: 14,
    difficulty: 'medium',
    q: 'What is a UML sequence diagram used for?',
    a: 'A UML sequence diagram illustrates how objects interact over time in a specific scenario or use case. It shows the sequence of messages exchanged between objects, the order of method calls, and control flow. It helps visualize dynamic behavior and understand how different components collaborate. Time flows vertically, lifelines represent objects, and arrows represent method calls or messages.'
  },
  {
    id: 15,
    difficulty: 'medium',
    q: 'What does the term "participants" mean in the context of design patterns?',
    a: 'Participants are the classes and interfaces that participate in a design pattern. They play specific roles in the pattern, such as Subject, Observer, Concrete Observer (in Observer pattern) or Creator, Product, ConcreteCreator (in Factory Method). Understanding participant roles and their responsibilities is key to understanding and implementing a pattern correctly.'
  },
  {
    id: 16,
    difficulty: 'hard',
    q: 'How do design patterns improve team communication?',
    a: 'Design patterns provide a shared vocabulary and common language for developers. By naming a pattern (e.g., "use Singleton for the configuration manager"), you communicate intent, structure, and constraints without lengthy explanations. This accelerates design discussions, reduces misunderstandings, enables faster code reviews, and helps new team members understand architecture quickly. It bridges the gap between architectural vision and implementation.'
  },
  {
    id: 17,
    difficulty: 'hard',
    q: 'When should you NOT use a design pattern?',
    a: 'Avoid using patterns when: (1) The problem is too simple and the pattern adds unnecessary complexity; (2) Performance is critical and the pattern introduces overhead; (3) Your team lacks experience with the pattern, causing confusion; (4) The codebase doesn\'t naturally align with the pattern\'s structure; (5) Using "pattern-driven design" instead of problem-driven design. Patterns are tools, not dogma. Use them when they genuinely simplify and improve code.'
  },
  {
    id: 18,
    difficulty: 'hard',
    q: 'What is the relationship between SOLID principles and design patterns?',
    a: 'SOLID principles provide the foundation and philosophy behind design patterns. Design patterns are concrete implementations of SOLID principles. For example, Dependency Inversion Principle underlies Dependency Injection and the Factory pattern. Single Responsibility drives the Facade pattern. Open/Closed is achieved through Abstract Factory and Strategy patterns. Patterns operationalize SOLID concepts by showing how to structure code to adhere to these principles.'
  },
  {
    id: 19,
    difficulty: 'hard',
    q: 'How do creational patterns relate to the Dependency Inversion Principle?',
    a: 'Creational patterns (Singleton, Factory Method, Abstract Factory, Builder, Prototype) all help implement Dependency Inversion by removing direct dependencies on concrete classes. Instead of instantiating concrete classes with "new", you depend on abstractions (interfaces/abstract classes) and let factories create instances. This decouples high-level modules from low-level implementation details, allowing flexible object creation strategies and easier testing.'
  },
  {
    id: 20,
    difficulty: 'hard',
    q: 'Give three examples of GoF design patterns used in the Java standard library.',
    a: 'Examples include: (1) Singleton - java.lang.Runtime.getRuntime(), java.awt.Toolkit.getDefaultToolkit(); (2) Factory Method - various Collection factory methods (Collections.unmodifiableList(), Arrays.asList()); (3) Observer - Java event handling (PropertyChangeListener, ActionListener); (4) Decorator - Java I/O streams (BufferedInputStream, DataInputStream); (5) Strategy - Comparator interface; (6) Iterator - Iterator pattern in Collections; (7) Adapter - java.io.InputStreamReader wraps InputStream.'
  }
];

export const quiz = [
  {
    id: 1,
    q: 'How many classic design patterns were documented by the Gang of Four?',
    options: ['16', '20', '23', '31'],
    answer: 2,
    explanation: 'The Gang of Four documented exactly 23 classic object-oriented design patterns in their seminal 1994 book.'
  },
  {
    id: 2,
    q: 'Which category includes the Singleton and Factory Method patterns?',
    options: ['Behavioral', 'Structural', 'Creational', 'Architectural'],
    answer: 2,
    explanation: 'Singleton and Factory Method are creational patterns, which focus on object creation mechanisms and hide implementation details from clients.'
  },
  {
    id: 3,
    q: 'How many structural patterns are there among the 23 GoF patterns?',
    options: ['5 patterns', '7 patterns', '9 patterns', '11 patterns'],
    answer: 1,
    explanation: 'There are 7 structural patterns (Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy) that deal with object composition and relationships.'
  },
  {
    id: 4,
    q: 'What does the Single Responsibility Principle advocate?',
    options: ['A class should handle all data validation', 'A class should have only one reason to change', 'A class should always use inheritance', 'A class should minimize its public methods'],
    answer: 1,
    explanation: 'SRP states that a class should have only one responsibility or reason to change. This promotes maintainability and reduces coupling.'
  },
  {
    id: 5,
    q: 'Which SOLID principle is primarily about not forcing clients to depend on unused methods?',
    options: ['Single Responsibility', 'Open/Closed', 'Liskov Substitution', 'Interface Segregation'],
    answer: 3,
    explanation: 'Interface Segregation Principle (ISP) advocates creating many specific interfaces rather than a few general ones, so clients don\'t depend on methods they don\'t use.'
  },
  {
    id: 6,
    q: 'What does the Open/Closed Principle mean?',
    options: ['Classes should be small and concise', 'Software should be open for modification, closed for extension', 'Software should be open for extension, closed for modification', 'Open all source files without closing them'],
    answer: 2,
    explanation: 'OCP states that software entities should be open for extension (adding new functionality) but closed for modification (not changing existing code).'
  },
  {
    id: 7,
    q: 'Which principle states that derived classes must be substitutable for base classes?',
    options: ['Liskov Substitution Principle', 'Dependency Inversion Principle', 'Interface Segregation Principle', 'Open/Closed Principle'],
    answer: 0,
    explanation: 'The Liskov Substitution Principle (LSP) ensures that subclasses can replace their parent classes without breaking the application or violating contracts.'
  },
  {
    id: 8,
    q: 'In UML, what does a hollow diamond represent in a relationship?',
    options: ['Inheritance', 'Composition', 'Aggregation', 'Implementation'],
    answer: 2,
    explanation: 'A hollow diamond represents aggregation, which is a loose "has-a" relationship where the child can exist independently of the parent.'
  },
  {
    id: 9,
    q: 'In UML, which symbol represents implementation of an interface?',
    options: ['Solid line with arrow', 'Dashed line with arrow', 'Solid diamond', 'Double line'],
    answer: 1,
    explanation: 'A dashed line with an arrow indicates that a class implements an interface in UML class diagrams.'
  },
  {
    id: 10,
    q: 'What does "program to an interface, not an implementation" encourage?',
    options: ['Always use only interface files', 'Use abstract types for declarations instead of concrete classes', 'Never use concrete classes', 'Always program with Java interfaces'],
    answer: 1,
    explanation: 'This principle advocates using abstract types (interfaces/abstract classes) for declarations, allowing implementation flexibility and easier testing.'
  },
  {
    id: 11,
    q: 'Why is composition generally preferred over inheritance?',
    options: ['It is faster at runtime', 'It avoids the fragile base class problem and provides flexibility', 'It requires less memory', 'It is easier to understand'],
    answer: 1,
    explanation: 'Composition provides flexibility, avoids tight coupling, allows runtime behavior changes, and prevents issues with deep inheritance hierarchies.'
  },
  {
    id: 12,
    q: 'Which SOLID principle is most directly related to dependency injection?',
    options: ['Single Responsibility', 'Open/Closed', 'Dependency Inversion', 'Liskov Substitution'],
    answer: 2,
    explanation: 'Dependency Inversion Principle encourages depending on abstractions, which dependency injection implements by injecting dependencies externally.'
  },
  {
    id: 13,
    q: 'In a UML class diagram, what does the + symbol indicate about a member?',
    options: ['It is optional', 'It is public', 'It is static', 'It is private'],
    answer: 1,
    explanation: 'In UML, + denotes public visibility. Other symbols: - for private, # for protected, ~ for package-private.'
  },
  {
    id: 14,
    q: 'Which of the following best describes a design pattern?',
    options: ['Executable source code for a specific problem', 'A template for solving recurring design problems in software', 'A programming language feature', 'A testing methodology'],
    answer: 1,
    explanation: 'A design pattern is a proven, reusable template or solution for solving common design problems in software architecture.'
  },
  {
    id: 15,
    q: 'How many behavioral patterns are among the 23 GoF patterns?',
    options: ['5 patterns', '7 patterns', '9 patterns', '11 patterns'],
    answer: 3,
    explanation: 'There are 11 behavioral patterns (Chain of Responsibility, Command, Interpreter, Iterator, Mediator, Memento, Observer, State, Strategy, Template Method, Visitor).'
  }
];

export const shortNotes = {
  title: 'Chapter 1 — Design Patterns & SOLID Principles Quick Reference',
  color: 'violet',
  keyPoints: [
    {
      icon: '📚',
      title: 'Gang of Four (GoF)',
      text: 'Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides documented 23 classic OOP patterns in 1994. Foundation of modern design pattern knowledge.'
    },
    {
      icon: '📑',
      title: 'Three Pattern Categories',
      text: 'Creational (5): object creation. Structural (7): class composition. Behavioral (11): object communication and responsibility.'
    },
    {
      icon: '🎯',
      title: 'SOLID Principles',
      text: 'S=Single Responsibility, O=Open/Closed, L=Liskov Substitution, I=Interface Segregation, D=Dependency Inversion. Foundation for maintainable code.'
    },
    {
      icon: '🔗',
      title: 'Favor Composition Over Inheritance',
      text: 'Composition provides flexibility and runtime behavior changes. Inheritance creates tight coupling and fragile class hierarchies. Prefer "has-a" to "is-a".'
    },
    {
      icon: '🖼️',
      title: 'UML Class Diagram Basics',
      text: 'Classes as rectangles (name, attributes, methods). Arrows: inheritance (solid), interface (dashed). Diamonds: composition (filled), aggregation (hollow).'
    },
    {
      icon: '🎭',
      title: 'Design Patterns vs Algorithms',
      text: 'Algorithms are step-by-step computational procedures. Patterns are architectural templates for code organization and object relationships.'
    },
    {
      icon: '📢',
      title: 'Shared Vocabulary',
      text: 'Patterns enable teams to communicate intent concisely (e.g., "use Singleton"). Accelerates design discussions and code reviews.'
    },
    {
      icon: '⚖️',
      title: 'When NOT to Use Patterns',
      text: 'Avoid when problem is simple, performance-critical, team lacks experience, or architecture doesn\'t align. Use patterns for genuine problems, not dogma.'
    }
  ],
  quickFacts: [
    'Single Responsibility Principle: A class should have only one reason to change.',
    'Open/Closed Principle: Open for extension, closed for modification (use abstraction).',
    'Liskov Substitution: Subclasses must be substitutable for parent classes without breaking behavior.',
    'Interface Segregation: Clients should not depend on interfaces they don\'t use.',
    'Dependency Inversion: Depend on abstractions, not concrete implementations.',
    'UML uses + for public, - for private, # for protected visibility in class diagrams.',
    'Program to interface: Use abstract types (interfaces/abstract classes) for declarations, not concrete classes.'
  ],
  rememberThis: [
    'Patterns are tools for solving recurring problems, not dogma—use them when they genuinely improve code.',
    'SOLID principles provide philosophy; design patterns are concrete implementations of those principles.',
    'Composition is more flexible than inheritance for most scenarios involving behavior reuse.',
    'Always communicate design decisions using pattern names—it establishes shared understanding with the team.'
  ]
};
