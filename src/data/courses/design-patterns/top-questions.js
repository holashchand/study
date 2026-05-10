export const topQuestions = [
  // Chapter 1: Intro/SOLID/UML (Q1–Q8)
  {
    id: 1,
    chapter: 1,
    difficulty: 'easy',
    q: 'What is a design pattern and why should we use them?',
    a: 'A design pattern is a reusable solution to a common problem in software design. Patterns provide tested, proven development paradigms that increase code maintainability, scalability, and reduce development time. They promote best practices, improve communication among developers, and help avoid reinventing the wheel.',
    tags: ['gof', 'fundamentals']
  },
  {
    id: 2,
    chapter: 1,
    difficulty: 'easy',
    q: 'What are the three GoF (Gang of Four) pattern categories?',
    a: 'The three GoF pattern categories are: (1) Creational patterns - focus on object creation mechanisms (Singleton, Factory, Builder, etc.), (2) Structural patterns - deal with object composition and relationships (Adapter, Bridge, Decorator, etc.), (3) Behavioral patterns - handle object collaboration and responsibility distribution (Observer, Command, State, etc.).',
    tags: ['gof']
  },
  {
    id: 3,
    chapter: 1,
    difficulty: 'easy',
    q: 'Explain the SOLID principles briefly.',
    a: 'SOLID is an acronym for five design principles: (1) Single Responsibility - a class should have one reason to change, (2) Open/Closed - open for extension, closed for modification, (3) Liskov Substitution - derived classes must substitute base classes without breaking, (4) Interface Segregation - clients should depend on specific interfaces, not generic ones, (5) Dependency Inversion - depend on abstractions, not concrete implementations. These principles guide writing maintainable, scalable code.',
    tags: ['solid']
  },
  {
    id: 4,
    chapter: 1,
    difficulty: 'medium',
    q: 'What is the Single Responsibility Principle and how does it improve design?',
    a: 'The Single Responsibility Principle (SRP) states that a class should have only one reason to change - one responsibility. This improves design by reducing coupling, making code easier to test, maintain, and understand. When a class has a single responsibility, changes to one aspect of the system don\'t require modifying unrelated classes, reducing the ripple effect of changes.',
    tags: ['solid']
  },
  {
    id: 5,
    chapter: 1,
    difficulty: 'medium',
    q: 'How does the Open/Closed Principle differ from the Closed/Open Principle?',
    a: 'The Open/Closed Principle (OCP) states that classes should be open for extension but closed for modification. This means you should be able to add new functionality without changing existing code. This is achieved through inheritance, polymorphism, and composition. The reverse (Closed/Open) doesn\'t have a standard meaning - it\'s not a recognized principle.',
    tags: ['solid']
  },
  {
    id: 6,
    chapter: 1,
    difficulty: 'medium',
    q: 'What is the Liskov Substitution Principle with an example?',
    a: 'The Liskov Substitution Principle (LSP) states that objects of a superclass should be replaceable with objects of its subclasses without breaking the application. Example: if Bird is a superclass and Penguin is a subclass, you can\'t force Penguin to implement a fly() method just because Bird has it. Violating LSP creates fragile hierarchies where substitution breaks type contracts.',
    tags: ['solid']
  },
  {
    id: 7,
    chapter: 1,
    difficulty: 'medium',
    q: 'What is UML and what are its main diagram types in design patterns?',
    a: 'UML (Unified Modeling Language) is a standardized notation for visualizing software designs. Key diagram types for design patterns include: (1) Class diagrams - show class relationships (inheritance, composition, dependencies), (2) Sequence diagrams - show interactions between objects over time, (3) State diagrams - depict object state transitions, (4) Collaboration diagrams - show message flow between objects. These diagrams help communicate pattern structure clearly.',
    tags: ['uml']
  },
  {
    id: 8,
    chapter: 1,
    difficulty: 'hard',
    q: 'How do design patterns relate to SOLID principles?',
    a: 'Design patterns and SOLID principles are complementary. Patterns provide concrete implementations of SOLID principles. For example, the Factory pattern embodies Dependency Inversion, the Decorator pattern supports Open/Closed, the Interface Segregation principle guides Observer pattern design. Most well-designed patterns naturally follow SOLID principles, making code more maintainable, testable, and flexible.',
    tags: ['gof', 'solid']
  },
  // Chapter 2: Singleton/Factory/AbstractFactory (Q9–Q16)
  {
    id: 9,
    chapter: 2,
    difficulty: 'easy',
    q: 'What is the Singleton pattern and when would you use it?',
    a: 'The Singleton pattern ensures that a class has only one instance and provides a global point of access to it. Use cases include database connections, logging, configuration management, and thread pools. It\'s useful when you need exactly one object to coordinate actions across the system, but overuse can lead to hidden dependencies and difficult testing.',
    tags: ['singleton', 'creational']
  },
  {
    id: 10,
    chapter: 2,
    difficulty: 'hard',
    q: 'What is the best thread-safe Singleton implementation in Java?',
    a: 'The best approach is the Bill Pugh Singleton (class loader) or enum-based Singleton. For Bill Pugh: create a private nested static helper class that holds the Singleton instance - the class loader guarantees thread safety without synchronization overhead. For enums: use public enum SingletonExample { INSTANCE; } - it\'s inherently thread-safe, serialization-safe, and prevents reflection attacks. Enums are preferred in modern Java.',
    tags: ['singleton', 'creational']
  },
  {
    id: 11,
    chapter: 2,
    difficulty: 'medium',
    q: 'What are the drawbacks of the Singleton pattern?',
    a: 'Drawbacks include: (1) Hidden dependencies - makes class dependencies implicit, (2) Difficult testing - global state complicates unit tests, (3) Concurrency issues with naive implementations, (4) Reflection/serialization can create multiple instances if not handled, (5) Violates Single Responsibility if Singleton manages its own instantiation, (6) Makes code harder to parallelize.',
    tags: ['singleton', 'creational', 'anti-patterns']
  },
  {
    id: 12,
    chapter: 2,
    difficulty: 'easy',
    q: 'What is the Factory Method pattern?',
    a: 'The Factory Method pattern defines an interface for creating objects, but lets subclasses decide which class to instantiate. It decouples client code from concrete classes, allowing new types to be added without modifying existing code. The pattern promotes the Open/Closed principle by allowing extension without modification.',
    tags: ['factory', 'creational']
  },
  {
    id: 13,
    chapter: 2,
    difficulty: 'medium',
    q: 'What is the difference between Factory Method and Abstract Factory patterns?',
    a: 'Factory Method creates a single object using an abstract method that subclasses implement. Abstract Factory creates families of related objects through an abstract factory interface with multiple abstract creation methods. Factory Method focuses on object creation through inheritance, while Abstract Factory uses composition. Use Factory Method for single object creation, Abstract Factory when you need to create coordinated families of objects.',
    tags: ['factory', 'creational']
  },
  {
    id: 14,
    chapter: 2,
    difficulty: 'medium',
    q: 'When would you use the Abstract Factory pattern?',
    a: 'Use Abstract Factory when: (1) Your system must work with multiple families of related objects, (2) You need to enforce that related products are used together (e.g., UI components that must match a theme), (3) You want to provide a library where only the interfaces are revealed, (4) You need to isolate concrete implementations from clients. Common examples: cross-platform UI toolkits, database driver families.',
    tags: ['factory', 'creational']
  },
  {
    id: 15,
    chapter: 2,
    difficulty: 'hard',
    q: 'How do Factory Method and Strategy patterns differ?',
    a: 'Factory Method is a creational pattern for object creation - it controls which concrete class gets instantiated, often using inheritance. Strategy is a behavioral pattern for selecting algorithms at runtime - it defines a family of algorithms, encapsulates each one, and makes them interchangeable. Factory Method answers "how to create," Strategy answers "which algorithm to use." Both can be used together: a Factory might create Strategy implementations.',
    tags: ['factory', 'creational']
  },
  {
    id: 16,
    chapter: 2,
    difficulty: 'medium',
    q: 'What are the advantages of using Factory patterns over direct instantiation?',
    a: 'Advantages include: (1) Decoupling - clients don\'t depend on concrete classes, (2) Centralized creation logic - easier to manage and modify, (3) Flexibility - new types can be added without changing client code, (4) Object pool management - factories can reuse objects, (5) Validation - creation logic can include validation, (6) Logging/tracking - factories can monitor object creation, (7) Lazy initialization - objects created on-demand.',
    tags: ['factory', 'creational']
  },
  // Chapter 3: Builder/Prototype/Pool (Q17–Q22)
  {
    id: 17,
    chapter: 3,
    difficulty: 'easy',
    q: 'What is the Builder pattern and when is it useful?',
    a: 'The Builder pattern separates the construction of complex objects from their representation, allowing step-by-step object construction. It\'s useful for: (1) Objects with many optional parameters, (2) Complex initialization logic, (3) Immutable objects, (4) Readable fluent API. Instead of multiple constructors (telescoping constructor), builders provide a flexible, readable way to construct objects with arbitrary combinations of parameters.',
    tags: ['builder', 'creational']
  },
  {
    id: 18,
    chapter: 3,
    difficulty: 'medium',
    q: 'What is the difference between Builder pattern and telescoping constructor?',
    a: 'Telescoping constructor uses multiple overloaded constructors to handle optional parameters (e.g., Person(name), Person(name, age), Person(name, age, email)). This becomes unreadable with many parameters. The Builder pattern uses a separate builder class with fluent methods to set optional fields, resulting in more readable code: new PersonBuilder().name("John").age(30).email("john@example.com").build(). Builder also enables partial construction and better parameter validation.',
    tags: ['builder', 'creational']
  },
  {
    id: 19,
    chapter: 3,
    difficulty: 'medium',
    q: 'What is the Prototype pattern?',
    a: 'The Prototype pattern creates new objects by cloning an existing object (prototype) rather than creating from scratch. It\'s useful when object creation is expensive. Implementation requires implementing Cloneable interface or using copy constructors. Benefits: faster creation for expensive objects, fewer subclasses, dynamic object registration. Challenges: proper implementation of deep vs shallow copying, circular references.',
    tags: ['prototype', 'creational']
  },
  {
    id: 20,
    chapter: 3,
    difficulty: 'medium',
    q: 'What is shallow copy vs deep copy in the Prototype pattern?',
    a: 'Shallow copy duplicates the top-level object but copies references for nested objects - changes to nested objects affect both original and copy. Deep copy duplicates the entire object graph including all nested objects - changes don\'t affect the original. Use deep copy when the object contains mutable references. Java\'s default clone() is shallow; deep copy requires manually copying all nested fields.',
    tags: ['prototype', 'creational']
  },
  {
    id: 21,
    chapter: 3,
    difficulty: 'medium',
    q: 'What is the Object Pool pattern?',
    a: 'The Object Pool pattern reuses expensive-to-create objects by maintaining a pool of initialized objects. When a client needs an object, it borrows one from the pool instead of creating new. When done, the object is returned to the pool for reuse. Benefits: reduced creation overhead, better performance for expensive objects (database connections, thread pools). Challenges: pool management complexity, object state management, potential memory overhead.',
    tags: ['pool', 'creational']
  },
  {
    id: 22,
    chapter: 3,
    difficulty: 'hard',
    q: 'How do Builder, Prototype, and Factory patterns compare in object creation?',
    a: 'Factory (method/abstract) creates objects through abstraction - subclasses/implementations decide the concrete type. Builder constructs complex objects step-by-step with optional parameters, providing flexible fluent APIs. Prototype clones existing objects avoiding expensive creation. Use Factory for polymorphic creation based on type, Builder for complex objects with many options, Prototype for expensive object creation. They complement each other - a Factory could use Builder internally.',
    tags: ['builder', 'factory', 'prototype', 'creational']
  },
  // Chapter 4: Adapter/Bridge/Composite (Q23–Q30)
  {
    id: 23,
    chapter: 4,
    difficulty: 'easy',
    q: 'What is the Adapter pattern?',
    a: 'The Adapter pattern converts the interface of one class into another interface clients expect, allowing incompatible interfaces to work together. It acts as a bridge between a client and a class with an incompatible interface. Use cases: integrating legacy code, working with third-party libraries, adapting objects to a common interface. There are two types: class adapter (uses inheritance) and object adapter (uses composition).',
    tags: ['adapter', 'structural']
  },
  {
    id: 24,
    chapter: 4,
    difficulty: 'medium',
    q: 'What is the difference between class adapter and object adapter?',
    a: 'Class adapter uses multiple inheritance to adapt an interface - the adapter extends the adaptee class and implements the target interface. Object adapter uses composition - the adapter holds an instance of the adaptee and implements the target interface by delegating calls. Object adapter is more flexible (works with subclasses of adaptee), but requires composition. Class adapter is more direct but less flexible and not supported in languages without multiple inheritance.',
    tags: ['adapter', 'structural']
  },
  {
    id: 25,
    chapter: 4,
    difficulty: 'medium',
    q: 'What is the Bridge pattern and when should you use it?',
    a: 'The Bridge pattern decouples an abstraction from its implementation so they can vary independently. It uses composition to separate interface (abstraction) from implementation into different hierarchies. Use when: (1) you want to avoid permanent binding between abstraction and implementation, (2) both abstraction and implementation should be extensible through subclassing, (3) changes to implementation shouldn\'t affect clients. Example: different database implementations for an ORM.',
    tags: ['bridge', 'structural']
  },
  {
    id: 26,
    chapter: 4,
    difficulty: 'hard',
    q: 'How do Adapter and Bridge patterns differ?',
    a: 'Both use composition but solve different problems. Adapter makes incompatible interfaces compatible - it\'s about integration of existing classes. Bridge decouples abstraction from implementation - it\'s about design before implementation. Adapter changes an interface, Bridge provides flexibility to vary both abstraction and implementation. Adapter is typically used after design, Bridge during design. Example: Adapter makes USB-C cable work with USB-A port; Bridge separates Shape abstraction from Drawing implementation.',
    tags: ['adapter', 'bridge', 'structural']
  },
  {
    id: 27,
    chapter: 4,
    difficulty: 'easy',
    q: 'What is the Composite pattern?',
    a: 'The Composite pattern composes objects into tree structures to represent part-whole hierarchies, allowing clients to treat individual objects and compositions uniformly. Key idea: both leaf and container objects implement the same interface. Use when: (1) you have part-whole hierarchies, (2) clients should work with individual and composite objects identically. Examples: file systems (files and directories), GUI components (buttons, panels), organizational hierarchies.',
    tags: ['composite', 'structural']
  },
  {
    id: 28,
    chapter: 4,
    difficulty: 'medium',
    q: 'What are the benefits and drawbacks of the Composite pattern?',
    a: 'Benefits: (1) Part-whole hierarchies handled uniformly, (2) Easy to add new component types, (3) Cleaner client code (no type checking), (4) Natural representation of hierarchical data. Drawbacks: (1) Overly general design - some operations may not make sense for all components, (2) Making the interface too broad - some methods may not apply to leaves, (3) Difficulty restricting component types in a composition.',
    tags: ['composite', 'structural']
  },
  {
    id: 29,
    chapter: 4,
    difficulty: 'medium',
    q: 'What is the difference between Composite and Tree data structures?',
    a: 'A Composite pattern is a specific design pattern implementing tree structures, but with a key difference: in Composite, both containers (composites) and leaves implement the same interface, allowing uniform treatment. A general Tree data structure may have different types of nodes with different interfaces. Composite provides an elegant OOP solution where clients don\'t need to distinguish between leaf and composite nodes.',
    tags: ['composite', 'structural']
  },
  {
    id: 30,
    chapter: 4,
    difficulty: 'hard',
    q: 'How would you implement transparency in a Composite pattern where some operations don\'t apply to all components?',
    a: 'Transparency (treating leaves and composites uniformly) can be achieved by: (1) Implementing all methods in both leaf and composite - leaf methods are no-ops or throw exceptions, (2) Using default implementations in a base class, (3) Using composition checks in client code (less desirable), (4) Creating separate interfaces for leaf-specific and composite-specific operations while sharing common operations. The trade-off is between interface clarity (safety) and transparency (uniformity).',
    tags: ['composite', 'structural']
  },
  // Chapter 5: Decorator/Facade/Flyweight/Proxy (Q31–Q40)
  {
    id: 31,
    chapter: 5,
    difficulty: 'easy',
    q: 'What is the Decorator pattern?',
    a: 'The Decorator pattern attaches additional responsibilities to an object dynamically, providing a flexible alternative to subclassing. It uses composition to add behavior to objects at runtime. Key idea: decorators wrap objects and implement the same interface. Benefits: more flexible than subclassing, can combine decorators, follows Single Responsibility. Use when: (1) adding features to objects without affecting others, (2) subclassing would create too many classes, (3) responsibilities need to be added/removed dynamically.',
    tags: ['decorator', 'structural']
  },
  {
    id: 32,
    chapter: 5,
    difficulty: 'medium',
    q: 'What is the difference between Decorator and Subclassing?',
    a: 'Subclassing creates different classes for each combination of features (e.g., Coffee, DecaffCoffee, DecaffWhippedCreamCoffee), leading to class explosion. Decorator uses composition to add behaviors dynamically - a single Coffee class can be decorated with different additions at runtime. Decorator is more flexible (combinations created at runtime) and follows Open/Closed principle. Subclassing is compile-time, Decorator is runtime. Example: Java IO classes use Decorator (InputStreamReader, BufferedInputStream).',
    tags: ['decorator', 'structural']
  },
  {
    id: 33,
    chapter: 5,
    difficulty: 'medium',
    q: 'What is the Facade pattern and when is it used?',
    a: 'The Facade pattern provides a unified, simplified interface to a complex subsystem. It doesn\'t encapsulate subsystem classes but provides a convenient entry point. Use when: (1) you have a complex library/subsystem and want to simplify client access, (2) you want to decouple clients from subsystem components, (3) you need to layer subsystems. Benefits: simplifies client code, decouples client from subsystem. Unlike Adapter, Facade creates new interfaces rather than adapting existing ones.',
    tags: ['facade', 'structural']
  },
  {
    id: 34,
    chapter: 5,
    difficulty: 'medium',
    q: 'What is the Flyweight pattern?',
    a: 'The Flyweight pattern shares common state between multiple objects to save memory. Objects are split into intrinsic state (shared, immutable) and extrinsic state (unique per object, passed by client). Use when: (1) many similar objects consume too much memory, (2) you can extract common state, (3) objects are stateless or mostly stateless. Example: text editor where each character is a Flyweight with intrinsic state (glyph, font) and extrinsic state (position, color).',
    tags: ['flyweight', 'structural']
  },
  {
    id: 35,
    chapter: 5,
    difficulty: 'hard',
    q: 'What is the Proxy pattern and what are its four main types?',
    a: 'The Proxy pattern provides a surrogate or placeholder for another object to control access to it. The four main types are: (1) Remote Proxy - controls access to remote objects (RPC), (2) Virtual Proxy - defers expensive object creation (lazy loading), (3) Protection Proxy - controls access based on permissions, (4) Smart Reference - performs additional actions when accessing (logging, reference counting, cleanup). All provide the same interface as the real object.',
    tags: ['proxy', 'structural']
  },
  {
    id: 36,
    chapter: 5,
    difficulty: 'medium',
    q: 'What is the difference between Proxy and Decorator patterns?',
    a: 'Both use composition and provide the same interface as the wrapped object, but serve different purposes. Proxy controls access to the subject - it\'s about providing a surrogate. Decorator adds responsibilities - it\'s about extending functionality. Proxy typically wraps one subject, Decorator can wrap other decorators. Proxy is often created on behalf of a subject, Decorator is client-chosen. Example: Proxy prevents premature loading of images, Decorator adds border to images.',
    tags: ['proxy', 'decorator', 'structural']
  },
  {
    id: 37,
    chapter: 5,
    difficulty: 'medium',
    q: 'How do you implement lazy initialization using the Virtual Proxy pattern?',
    a: 'A Virtual Proxy delays expensive object creation until first access. Implementation: the proxy holds a reference to the real object (initially null), implements the same interface, and on method calls checks if the real object exists. If not, creates it (lazy loading). Example: image viewer proxy that creates expensive Image objects only when getImage() is called. Benefits: improved startup time, memory savings for unused objects.',
    tags: ['proxy', 'structural']
  },
  {
    id: 38,
    chapter: 5,
    difficulty: 'medium',
    q: 'What is the difference between Facade, Adapter, and Decorator patterns?',
    a: 'Facade simplifies a complex subsystem with a new unified interface - it\'s about reducing complexity. Adapter makes incompatible interfaces compatible - it\'s about integration. Decorator adds responsibilities to objects - it\'s about extending functionality. Facade typically wraps multiple classes, Adapter wraps one, Decorator can wrap single or multiple. Facade simplifies, Adapter adapts, Decorator enhances.',
    tags: ['facade', 'adapter', 'decorator', 'structural']
  },
  {
    id: 39,
    chapter: 5,
    difficulty: 'hard',
    q: 'What are the design considerations for using Decorator vs Proxy patterns?',
    a: 'Use Decorator when: (1) adding responsibilities is the primary goal, (2) you expect multiple decorators to be combined, (3) transparency is important (client doesn\'t know about decoration). Use Proxy when: (1) controlling access is primary, (2) you need lazy loading/remote access/security, (3) you want to maintain 1:1 relationship with subject. Decorator enhances, Proxy controls. In Java, java.io uses Decorator extensively, while enterprise frameworks often use Proxy for lazy loading.',
    tags: ['proxy', 'decorator', 'structural']
  },
  {
    id: 40,
    chapter: 5,
    difficulty: 'hard',
    q: 'How would you combine Flyweight and Factory patterns for memory optimization?',
    a: 'A FlyweightFactory manages a pool of shared Flyweight objects. When a client requests a Flyweight with certain intrinsic state, the factory returns an existing instance if available, or creates a new one. The factory uses a HashMap to cache Flyweights by their intrinsic state. Clients pass extrinsic state separately. This combines Flyweight (shared state) and Factory (creation management) to minimize object creation and memory usage.',
    tags: ['flyweight', 'factory', 'structural', 'creational']
  },
  // Chapter 6: Chain/Command/Iterator (Q41–Q50)
  {
    id: 41,
    chapter: 6,
    difficulty: 'easy',
    q: 'What is the Chain of Responsibility pattern?',
    a: 'The Chain of Responsibility pattern allows multiple objects to handle a request in a chain. Each handler decides either to process the request or pass it to the next handler. Use when: (1) multiple objects may handle a request, (2) handlers aren\'t known in advance, (3) you want to avoid coupling sender to specific handlers. Example: event handling in GUI, approval workflows, logging frameworks with multiple levels.',
    tags: ['chain-of-responsibility', 'behavioral']
  },
  {
    id: 42,
    chapter: 6,
    difficulty: 'medium',
    q: 'How is Chain of Responsibility different from if-else statements?',
    a: 'If-else statements hardcode all conditions and create tight coupling. Chain of Responsibility decouples the sender from handlers - handlers form a dynamic chain. New handlers can be added without modifying existing code (Open/Closed principle). If-else is linear and all conditions are checked, while Chain stops at the first matching handler. Chain allows runtime reorganization of handlers, dynamic chain building. Chain is more maintainable for complex, changing logic.',
    tags: ['chain-of-responsibility', 'behavioral']
  },
  {
    id: 43,
    chapter: 6,
    difficulty: 'medium',
    q: 'What is the Command pattern?',
    a: 'The Command pattern encapsulates a request as an object, allowing parameterization of clients with different requests, queuing requests, and logging requests. Key idea: the command object decouples the object invoking the operation from the objects that perform the operation. Benefits: (1) decoupling invoker from receiver, (2) queuing commands, (3) undo/redo support, (4) macro commands. Use when: (1) parameterizing objects with operations, (2) queuing operations, (3) supporting undo.',
    tags: ['command', 'behavioral']
  },
  {
    id: 44,
    chapter: 6,
    difficulty: 'medium',
    q: 'How does the Command pattern support undo and redo functionality?',
    a: 'Each Command implements execute() and undo() methods. Execute performs the operation, Undo reverses it. An invoker maintains a stack of executed commands. To undo: pop from stack and call undo(). For redo: maintain a separate redo stack. When a new command executes after an undo, the redo stack clears. The Command object stores all state needed to undo the operation. This decouples undo logic from the operation itself.',
    tags: ['command', 'behavioral']
  },
  {
    id: 45,
    chapter: 6,
    difficulty: 'hard',
    q: 'What are macro commands and how would you implement them?',
    a: 'Macro commands execute multiple commands as a single unit. Implementation: create a MacroCommand that holds a list of commands and implements execute() by iterating and executing each command in sequence. Undo reverses the order of undo calls. This allows composing complex operations from simple commands. Example: "save and print" command combines Save and Print commands. Enables command composition for complex workflows.',
    tags: ['command', 'behavioral']
  },
  {
    id: 46,
    chapter: 6,
    difficulty: 'easy',
    q: 'What is the Iterator pattern?',
    a: 'The Iterator pattern provides a way to access elements of a collection sequentially without exposing its underlying representation. It decouples algorithms from container structures. An iterator implements methods like hasNext() and next(). Benefits: (1) collection implementation can change without affecting clients, (2) multiple iterations can be concurrent, (3) clean separation of iteration logic from collection logic. Java\'s Iterator interface is a standard example.',
    tags: ['iterator', 'behavioral']
  },
  {
    id: 47,
    chapter: 6,
    difficulty: 'medium',
    q: 'What is the difference between Iterator and Iterable in Java?',
    a: 'Iterable is an interface representing a collection that can be iterated - it provides iterator() method that returns an Iterator. Iterator is an interface providing hasNext() and next() methods for traversing elements. Iterable provides access to an Iterator, Iterator performs the actual iteration. A class implements Iterable if it supports iteration, and provides an Iterator implementation. This separation allows multiple concurrent iterations over the same collection.',
    tags: ['iterator', 'behavioral']
  },
  {
    id: 48,
    chapter: 6,
    difficulty: 'medium',
    q: 'How would you implement an Iterator for a custom collection?',
    a: 'Create an Iterator implementation (inner class) that implements hasNext() and next(). The iterator maintains current index/position in the collection. hasNext() checks if more elements exist, next() returns the current element and advances position. Example: for an ArrayList, the iterator maintains an internal index, hasNext() returns index < size(), next() returns and increments index. Throw NoSuchElementException if next() is called when hasNext() is false.',
    tags: ['iterator', 'behavioral']
  },
  {
    id: 49,
    chapter: 6,
    difficulty: 'hard',
    q: 'How do Command and Iterator patterns work together in an invoker-receiver scenario?',
    a: 'Commands encapsulate requests and can be iterated over. An Invoker can maintain a list of pending/executed commands and use an Iterator to traverse them for undo/redo operations. Example: a document editor maintains a command history; an iterator traverses this history for undo operations. The Command pattern provides the abstraction, Iterator provides traversal. This separation allows complex command sequences to be managed and traversed independently.',
    tags: ['command', 'iterator', 'behavioral']
  },
  {
    id: 50,
    chapter: 6,
    difficulty: 'hard',
    q: 'What is the relationship between Chain of Responsibility and Command patterns?',
    a: 'Both decouple sender from receiver/handler. Command encapsulates a request as an object, while Chain of Responsibility passes requests through a chain of handlers. Commands can be queued/stored, Chain processes requests sequentially. They can be combined: a chain of command handlers where each handler implements the Command interface. Command focuses on request encapsulation, Chain focuses on handler hierarchy. Both improve flexibility and maintainability.',
    tags: ['chain-of-responsibility', 'command', 'behavioral']
  },
  // Chapter 7: Mediator/Memento/Observer (Q51–Q60)
  {
    id: 51,
    chapter: 7,
    difficulty: 'easy',
    q: 'What is the Mediator pattern?',
    a: 'The Mediator pattern defines an object that encapsulates how a set of objects interact, promoting loose coupling. Instead of objects communicating directly, they communicate through a mediator. Use when: (1) objects have complex communication logic, (2) many interdependent objects, (3) you want to avoid tight coupling. Benefits: (1) centralizes complex communication logic, (2) reduces coupling, (3) reusable mediator for similar objects. Example: air traffic control system, chat application mediator.',
    tags: ['mediator', 'behavioral']
  },
  {
    id: 52,
    chapter: 7,
    difficulty: 'medium',
    q: 'What is the difference between Mediator and Observer patterns?',
    a: 'Mediator centralizes complex communication logic - objects communicate through the mediator. Observer defines one-to-many dependencies - when one object changes, many observers are notified. Mediator is bidirectional (mediator sends to multiple objects), Observer is typically unidirectional (subject to observers). Mediator handles complex interactions between peer objects, Observer handles subject-observer relationships. Mediator contains communication logic, Observer is about propagating state changes.',
    tags: ['mediator', 'observer', 'behavioral']
  },
  {
    id: 53,
    chapter: 7,
    difficulty: 'medium',
    q: 'What is the Memento pattern?',
    a: 'The Memento pattern captures and stores an object\'s internal state without exposing its structure, allowing the object to be restored to this state later. Key objects: (1) Originator - the object whose state is captured, (2) Memento - stores the state, (3) Caretaker - manages mementos. Use when: (1) you need to save/restore object state, (2) you want undo functionality, (3) you need checkpoints. Benefits: encapsulation preserved, state saved without exposing internal structure.',
    tags: ['memento', 'behavioral']
  },
  {
    id: 54,
    chapter: 7,
    difficulty: 'medium',
    q: 'How does Memento differ from cloning in capturing object state?',
    a: 'Memento stores specific saved states (snapshots) at points in time, while cloning creates a complete copy of the current object. Memento is better for undo/redo (preserves multiple historical states), cloning is better for creating independent copies. Memento preserves encapsulation (internal state not exposed), clone requires exposing state to copy. Memento allows selective state restoration, cloning creates entire new objects. Memento is more memory-efficient for sparse snapshots.',
    tags: ['memento', 'behavioral']
  },
  {
    id: 55,
    chapter: 7,
    difficulty: 'medium',
    q: 'What is the Observer pattern?',
    a: 'The Observer pattern defines a one-to-many dependency where when one object (subject) changes state, all its dependents (observers) are notified automatically. Key idea: loose coupling - subject and observers don\'t need to know details about each other. Benefits: (1) dynamic subscription, (2) subject doesn\'t assume observer types, (3) easy to add observers. Use when: (1) a change in one object requires changing others, (2) number of dependent objects is unknown.',
    tags: ['observer', 'behavioral']
  },
  {
    id: 56,
    chapter: 7,
    difficulty: 'medium',
    q: 'What is the difference between push and pull models in Observer pattern?',
    a: 'Push model: subject sends all state changes to observers (often too much information). Pull model: subject notifies observers of change, observers query subject for details they need. Pull model is more efficient (only necessary data retrieved), decouples subject from observer state needs. Pull model requires observers to know what to query, push model sends everything. Most modern implementations use pull with notification.',
    tags: ['observer', 'behavioral']
  },
  {
    id: 57,
    chapter: 7,
    difficulty: 'hard',
    q: 'What are memory leaks in Observer pattern and how to prevent them?',
    a: 'Memory leaks occur when observers aren\'t unsubscribed from subjects, preventing garbage collection of observer objects. The subject holds references to observers, preventing their cleanup even when no longer needed. Prevention: (1) always unsubscribe when observer is done, (2) use weak references for observer lists, (3) implement life cycle management, (4) use try-with-resources if implementing AutoCloseable. In Android, lifecycle-aware observers automatically unsubscribe. Always properly clean up subscriptions.',
    tags: ['observer', 'behavioral']
  },
  {
    id: 58,
    chapter: 7,
    difficulty: 'hard',
    q: 'How would you implement Memento with deep copy to handle mutable state?',
    a: 'For mutable state in Memento, use deep copy to ensure saved state isn\'t affected by subsequent changes to the original object. In the Originator\'s saveToMemento() method, deep copy all mutable objects. In restoreFromMemento(), deep copy the memento\'s state back to originator. This prevents external modifications to mutable objects from affecting saved state. Cost: memory overhead for deep copies. Alternative: immutable objects eliminate this issue.',
    tags: ['memento', 'behavioral']
  },
  {
    id: 59,
    chapter: 7,
    difficulty: 'medium',
    q: 'How do Mediator and Command patterns work together?',
    a: 'A Mediator can handle Command objects from multiple components. Components issue Commands to the Mediator instead of directly to each other. The Mediator coordinates command execution and responses. This combines Mediator\'s centralized coordination with Command\'s encapsulation of requests. Example: a dialog coordinator (Mediator) receives Commands from buttons, processes them, and coordinates with other controls.',
    tags: ['mediator', 'command', 'behavioral']
  },
  {
    id: 60,
    chapter: 7,
    difficulty: 'hard',
    q: 'What is the relationship between Observer and Memento patterns in event sourcing?',
    a: 'Event Sourcing captures all state changes as immutable events (similar to Mementos). Observers can subscribe to these events and react. The event log serves as both audit trail and state history. Observers process events to update views/state. Mementos could be derived from the event log by replaying events up to a checkpoint. Together they enable recovering to any historical state while providing real-time event notification.',
    tags: ['observer', 'memento', 'behavioral']
  },
  // Chapter 8: State/Strategy/TemplateMethod (Q61–Q70)
  {
    id: 61,
    chapter: 8,
    difficulty: 'easy',
    q: 'What is the State pattern?',
    a: 'The State pattern allows an object to alter its behavior when its internal state changes, appearing to change its class. It encapsulates different behaviors for different states. Key idea: separate state-specific logic into state classes. Use when: (1) object behavior depends on state and must change at runtime, (2) code has large conditional statements based on state, (3) states are peer classes. Benefits: eliminates large if-else chains, state transitions are explicit.',
    tags: ['state', 'behavioral']
  },
  {
    id: 62,
    chapter: 8,
    difficulty: 'medium',
    q: 'What is the difference between State and Strategy patterns?',
    a: 'Both use composition to delegate behavior, but for different purposes. State allows an object to change behavior based on internal state - state transitions may be automatic or triggered internally. Strategy allows clients to select algorithms - algorithm is chosen by client, strategies don\'t transition automatically. State is about object behavior changing over time, Strategy is about client-selected variations. Example: State - TCP connection states (closed, listen, established), Strategy - different sorting algorithms (client chooses QuickSort or MergeSort).',
    tags: ['state', 'strategy', 'behavioral']
  },
  {
    id: 63,
    chapter: 8,
    difficulty: 'easy',
    q: 'What is the Strategy pattern?',
    a: 'The Strategy pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable. Clients can select the strategy to use. Key idea: extract algorithm variations into strategy classes implementing a common interface. Benefits: (1) eliminates if-else conditionals, (2) strategies are interchangeable, (3) easy to add new strategies, (4) enables runtime algorithm selection. Use when: (1) multiple algorithms for a task, (2) you want to avoid conditionals, (3) algorithms may change frequently.',
    tags: ['strategy', 'behavioral']
  },
  {
    id: 64,
    chapter: 8,
    difficulty: 'medium',
    q: 'How would you implement Strategy pattern for different sorting algorithms?',
    a: 'Create a SortStrategy interface with sort(array) method. Implement concrete strategies (QuickSortStrategy, MergeSortStrategy, etc.). A Sorter class accepts a strategy in constructor and uses it via sort(). Clients can inject different strategies: new Sorter(new QuickSortStrategy()) or new Sorter(new MergeSortStrategy()). This allows selecting algorithms at runtime without changing Sorter code. Strategies encapsulate the algorithm details.',
    tags: ['strategy', 'behavioral']
  },
  {
    id: 65,
    chapter: 8,
    difficulty: 'easy',
    q: 'What is the Template Method pattern?',
    a: 'The Template Method pattern defines the skeleton of an algorithm in a base class method, letting subclasses implement specific steps. The template method calls abstract methods that subclasses override. Use when: (1) multiple classes have similar algorithms with different details, (2) you want to avoid code duplication, (3) you want to control algorithm structure. Benefits: code reuse, consistent algorithm structure, defined extension points.',
    tags: ['template-method', 'behavioral']
  },
  {
    id: 66,
    chapter: 8,
    difficulty: 'medium',
    q: 'What is the Hollywood Principle and how does Template Method embody it?',
    a: 'The Hollywood Principle states "don\'t call us, we\'ll call you" - the framework calls your code rather than your code calling the framework. Template Method embodies this: the base class (framework) defines the algorithm skeleton and calls abstract methods (hook methods) that subclasses implement. Subclasses don\'t call the parent algorithm; the parent calls their implementations. This inversion of control ensures consistent algorithm flow while allowing customization.',
    tags: ['template-method', 'behavioral']
  },
  {
    id: 67,
    chapter: 8,
    difficulty: 'medium',
    q: 'How would you implement Template Method for a document processing workflow?',
    a: 'Create abstract Document class with templateMethod() defining the workflow: open() -> read() -> parse() -> process() -> save(). Abstract methods (read, parse, process) are overridden by subclasses (PdfDocument, WordDocument). The templateMethod controls order and flow, while subclasses provide specific implementations. This ensures all documents follow the same workflow while supporting different formats.',
    tags: ['template-method', 'behavioral']
  },
  {
    id: 68,
    chapter: 8,
    difficulty: 'hard',
    q: 'What is the difference between Template Method and Strategy for implementing algorithm variations?',
    a: 'Template Method uses inheritance - subclasses override template methods to customize algorithm steps. Strategy uses composition - strategies implement a common interface and are injected. Template Method defines algorithm structure in base class (fixed), Strategy allows selecting entire algorithm (flexible). Template Method is inheritance-based (class-time), Strategy is composition-based (runtime). Template Method better for fixed workflows with variable steps, Strategy better for selecting entire algorithms.',
    tags: ['template-method', 'strategy', 'behavioral']
  },
  {
    id: 69,
    chapter: 8,
    difficulty: 'hard',
    q: 'When would you use State vs Template Method patterns?',
    a: 'Use State when: (1) object behavior changes based on internal state, (2) state transitions are complex, (3) states are distinct peer objects. Use Template Method when: (1) algorithm structure is fixed, (2) subclasses customize specific steps, (3) code reuse is the goal. State emphasizes behavior changes and state transitions, Template Method emphasizes consistent algorithm with customizable steps. State objects are transient (change frequently), Template Method subclasses are fixed.',
    tags: ['state', 'template-method', 'behavioral']
  },
  {
    id: 70,
    chapter: 8,
    difficulty: 'hard',
    q: 'How do State, Strategy, and Template Method patterns relate to polymorphism?',
    a: 'All three use polymorphism but for different purposes. State uses polymorphism to vary behavior based on object state - state objects are polymorphic peers. Strategy uses polymorphism to select algorithms - strategies are interchangeable implementations. Template Method uses polymorphism to customize algorithm steps - subclasses are polymorphic specializations. State and Strategy defer behavior selection to runtime, Template Method defines structure at compile time. All enable flexible, maintainable code.',
    tags: ['state', 'strategy', 'template-method', 'behavioral']
  },
  // Chapter 9: Visitor/Interpreter/NullObject (Q71–Q78)
  {
    id: 71,
    chapter: 9,
    difficulty: 'easy',
    q: 'What is the Visitor pattern?',
    a: 'The Visitor pattern represents an operation to be performed on elements of an object structure. Visitors let you define new operations without changing the classes of elements being operated on. Key idea: separate algorithms from the objects they operate on. Benefits: (1) easy to add new operations, (2) operations are centralized, (3) avoids type casting. Use when: (1) many unrelated operations on objects, (2) operations change frequently but structure is stable.',
    tags: ['visitor', 'behavioral']
  },
  {
    id: 72,
    chapter: 9,
    difficulty: 'medium',
    q: 'What is double dispatch and how is it used in the Visitor pattern?',
    a: 'Double dispatch is technique where method call is determined by two types: the object\'s type and the parameter\'s type. In Visitor: (1) element.accept(visitor) dispatches based on element type, (2) visitor.visit(element) dispatches based on visitor type. This determines which visit() method is called. Example: a Circle accepts a Visitor, which dispatches to visit(Circle), while a Square dispatches to visit(Square). This enables different operations for different element types without type casting.',
    tags: ['visitor', 'behavioral']
  },
  {
    id: 73,
    chapter: 9,
    difficulty: 'medium',
    q: 'How would you implement Visitor pattern for a compiler AST (Abstract Syntax Tree)?',
    a: 'Create Visitor interface with visit(NodeType) methods for each AST node type. Each AST node implements accept(Visitor) that calls visitor.visit(this). Concrete visitors implement specific operations (CodeGenerationVisitor, OptimizationVisitor, etc.). The AST structure remains unchanged while operations are added as new visitors. Example: a PrintVisitor prints the tree, a TypeCheckVisitor validates types, a CodeGenVisitor generates code.',
    tags: ['visitor', 'behavioral']
  },
  {
    id: 74,
    chapter: 9,
    difficulty: 'hard',
    q: 'What are the pros and cons of the Visitor pattern?',
    a: 'Pros: (1) Easy to add new operations without modifying element classes, (2) Related operations grouped in visitor classes, (3) Follows Single Responsibility. Cons: (1) Adding new element types requires modifying all visitors, (2) Breaks encapsulation (visitor accesses private members), (3) Double dispatch adds complexity, (4) Harder to understand than simple methods. Best for stable element hierarchies with frequently changing operations.',
    tags: ['visitor', 'behavioral']
  },
  {
    id: 75,
    chapter: 9,
    difficulty: 'easy',
    q: 'What is the Interpreter pattern?',
    a: 'The Interpreter pattern defines a grammar for a language and an interpreter to process it. Use when: (1) you have a domain-specific language, (2) you need to parse and execute expressions, (3) grammar is relatively simple. Key idea: represent grammar rules as classes, build abstract syntax trees, interpret them. Benefits: easy to modify grammar, cleanly separates parsing from execution. Example: expression parsers, rule engines, configuration interpreters.',
    tags: ['interpreter', 'behavioral']
  },
  {
    id: 76,
    chapter: 9,
    difficulty: 'medium',
    q: 'How would you implement Interpreter pattern for a mathematical expression evaluator?',
    a: 'Create Expression interface with interpret() method. Terminal expressions (Number) directly return values. Non-terminal expressions (Add, Subtract) recursively interpret left and right expressions. Build an AST from the expression string. Call interpret() on root node. Example: "5 + 3" creates Add(Number(5), Number(3)), interpret() returns 8. Each expression recursively evaluates, composing results bottom-up.',
    tags: ['interpreter', 'behavioral']
  },
  {
    id: 77,
    chapter: 9,
    difficulty: 'medium',
    q: 'What is the Null Object pattern?',
    a: 'The Null Object pattern provides a null object implementing the same interface as real objects, providing default behavior. It eliminates null checks by having a concrete "do nothing" object. Benefits: (1) eliminates null checks, (2) simpler client code, (3) consistent interface. Use when: (1) null values appear frequently, (2) default behavior is appropriate, (3) client code would otherwise check for null. Example: NullLogger that does nothing instead of null logger.',
    tags: ['null-object', 'behavioral']
  },
  {
    id: 78,
    chapter: 9,
    difficulty: 'hard',
    q: 'How do Null Object and Optional patterns compare?',
    a: 'Null Object provides a concrete object implementing the interface with default behavior, eliminating null checks. Optional (Java) explicitly represents present/absent values - callers must handle both cases. Null Object hides the absence (transparent), Optional makes it explicit (consumer must decide). Null Object is better for default behavior scenarios, Optional is better for forcing explicit handling. Modern Java prefers Optional over Null Objects for clarity.',
    tags: ['null-object', 'behavioral']
  },
  // Chapter 10: MVC/MVP/MVVM/Repository (Q79–Q86)
  {
    id: 79,
    chapter: 10,
    difficulty: 'easy',
    q: 'What is the MVC (Model-View-Controller) pattern?',
    a: 'MVC separates an application into three interconnected components: (1) Model - represents data and business logic, (2) View - displays data to user, (3) Controller - handles user input and updates model. The controller mediates between view and model. Benefits: separation of concerns, testable models, multiple views for same model. Drawbacks: controller can become large, tight coupling between controller and view. Common in web frameworks (Rails, Spring MVC).',
    tags: ['mvc']
  },
  {
    id: 80,
    chapter: 10,
    difficulty: 'medium',
    q: 'What is the MVP (Model-View-Presenter) pattern?',
    a: 'MVP is similar to MVC but with different responsibilities. The Presenter (not Controller) handles all UI logic and updates the View. The View is passive - it only displays data and forwards user input to Presenter. The Model contains business logic. Benefits: (1) easier to test (View is passive), (2) clearer separation - Presenter contains all UI logic, (3) View is simpler. Drawback: more boilerplate code. Used in desktop apps and Android.',
    tags: ['mvvm']
  },
  {
    id: 81,
    chapter: 10,
    difficulty: 'medium',
    q: 'What is the MVVM (Model-View-ViewModel) pattern?',
    a: 'MVVM separates into: (1) Model - data and business logic, (2) View - UI elements, (3) ViewModel - exposes model data and handles view logic. Key feature: data binding - View automatically updates when ViewModel changes, and ViewModel updates when user interacts with View. Benefits: (1) clean separation, (2) highly testable ViewModel, (3) loose coupling via binding. Used in WPF, Xamarin, Angular, Vue.',
    tags: ['mvvm']
  },
  {
    id: 82,
    chapter: 10,
    difficulty: 'hard',
    q: 'What are the differences between MVC, MVP, and MVVM?',
    a: 'MVC: Controller handles input and updates Model, View observes Model changes. MVP: Presenter is the middle-man - it updates View based on Model, View is completely passive. MVVM: ViewModel exposes Model data via binding, View binds to ViewModel automatically. MVC has active View (observes Model), MVP has passive View (Presenter drives), MVVM has ViewModel with two-way binding. Testability: Model (all), MVP (Presenter easily), MVVM (ViewModel easily).',
    tags: ['mvc', 'mvvm']
  },
  {
    id: 83,
    chapter: 10,
    difficulty: 'easy',
    q: 'What is the Repository pattern?',
    a: 'The Repository pattern abstracts data access logic, providing a centralized place to manage data sources. It implements CRUD operations and query logic. Benefits: (1) decouples business logic from data access, (2) easier to test (mock repositories), (3) data source independence (can switch databases), (4) centralized data access logic. Repositories sit between domain models and data sources, providing collection-like interfaces.',
    tags: ['repository']
  },
  {
    id: 84,
    chapter: 10,
    difficulty: 'medium',
    q: 'What is the difference between Repository and DAO patterns?',
    a: 'Both provide data access abstraction, but differ in scope. DAO (Data Access Object) is data-centric - it exposes database operations for a single entity (UserDAO). Repository is domain-centric - it exposes domain-level queries (UserRepository.findActiveUsers()). Repository may use multiple DAOs internally. DAOs are lower-level, Repositories are higher-level and more business-focused. Modern applications prefer Repository pattern for cleaner domain abstractions.',
    tags: ['repository']
  },
  {
    id: 85,
    chapter: 10,
    difficulty: 'medium',
    q: 'How would you implement a generic Repository pattern?',
    a: 'Create a generic Repository interface: interface IRepository<T> { T getById(id); List<T> getAll(); save(T); delete(T); }. Implement it for a specific entity: class UserRepository implements IRepository<User>. Use generics to reuse code for all entities. Optionally use query specifications (Specification pattern) for complex queries. This provides type-safe, reusable data access across all entities.',
    tags: ['repository']
  },
  {
    id: 86,
    chapter: 10,
    difficulty: 'hard',
    q: 'How do MVC, MVP, MVVM, and Repository patterns work together in a typical application?',
    a: 'Repository provides data access abstraction (decouples from database). Model represents business data/logic. In MVC: Controller queries Repository, updates Model, View renders Model. In MVP: Presenter queries Repository, updates View. In MVVM: ViewModel queries Repository, View binds to ViewModel. Repository enables all patterns to be independent of data source. Together they create layered architecture: Presentation (View/Controller/Presenter/ViewModel) - Business (Model) - Data Access (Repository) - Database.',
    tags: ['mvc', 'mvvm', 'repository']
  },
  // Chapter 11: DI/CQRS/EventSourcing/AntiPatterns (Q87–Q94)
  {
    id: 87,
    chapter: 11,
    difficulty: 'easy',
    q: 'What is Dependency Injection (DI)?',
    a: 'Dependency Injection is a technique where an object receives its dependencies from external sources rather than creating them internally. Instead of "new Dependency()", dependencies are injected (passed in constructor, setter, or interface). Benefits: (1) loose coupling, (2) easier testing (inject mocks), (3) flexibility (swap implementations), (4) centralized dependency management. Three types: constructor injection, setter injection, interface injection.',
    tags: ['dependency-injection']
  },
  {
    id: 88,
    chapter: 11,
    difficulty: 'medium',
    q: 'What is the difference between Constructor and Setter injection?',
    a: 'Constructor injection: dependencies passed in constructor, making them required and immutable. Benefits: mandatory dependencies clear, objects fully initialized. Setter injection: dependencies set via setters, making them optional. Benefits: flexible, can override later, supports optional dependencies. Constructor injection is safer (no uninitialized objects), Setter injection is more flexible (can change dependencies later). Modern best practice: prefer constructor injection for required dependencies.',
    tags: ['dependency-injection']
  },
  {
    id: 89,
    chapter: 11,
    difficulty: 'medium',
    q: 'What is CQRS (Command Query Responsibility Segregation)?',
    a: 'CQRS separates read and write operations into different models. Commands modify state (create/update/delete), Queries fetch data. Benefits: (1) optimize read and write independently, (2) scale read model separately, (3) complex business logic encapsulated in commands, (4) audit trail of changes. Challenges: eventual consistency between models, increased complexity. Used with Event Sourcing for audit and rebuild capabilities.',
    tags: ['cqrs']
  },
  {
    id: 90,
    chapter: 11,
    difficulty: 'medium',
    q: 'What is Event Sourcing?',
    a: 'Event Sourcing stores state changes as immutable events rather than storing current state. The event log is the source of truth. Current state is derived by replaying events. Benefits: (1) complete audit trail, (2) temporal queries (state at any point in time), (3) recovery from any event, (4) performance (events append-only). Challenges: eventual consistency, storage of events, complexity. Pairs well with CQRS for command handling and query optimization.',
    tags: ['event-sourcing']
  },
  {
    id: 91,
    chapter: 11,
    difficulty: 'hard',
    q: 'How do CQRS and Event Sourcing work together?',
    a: 'Event Sourcing stores all state changes as events. CQRS separates commands (which produce events) from queries (which read a derived read model). Process: (1) Command received, validated, produces events, (2) Events stored in event log, (3) Events update read model asynchronously, (4) Queries read from optimized read model. This enables independent scaling of writes and reads, eventual consistency, full audit trail, and temporal queries.',
    tags: ['cqrs', 'event-sourcing']
  },
  {
    id: 92,
    chapter: 11,
    difficulty: 'easy',
    q: 'What is an anti-pattern?',
    a: 'An anti-pattern is a common but ineffective solution to a problem that appears to be beneficial but has negative consequences. Unlike patterns which are best practices, anti-patterns are practices to avoid. Examples: God Object (too many responsibilities), Cargo Cult Programming (copying without understanding), Spaghetti Code (no clear structure). Recognizing anti-patterns helps avoid poor design decisions.',
    tags: ['anti-patterns']
  },
  {
    id: 93,
    chapter: 11,
    difficulty: 'medium',
    q: 'What is the God Object anti-pattern and how do you avoid it?',
    a: 'The God Object anti-pattern occurs when a single class handles too many responsibilities (knows too much, does too much). Symptoms: large classes, many instance variables, many methods. Avoid by: (1) apply Single Responsibility Principle, (2) break into smaller cohesive classes, (3) delegate responsibilities, (4) extract interfaces. A God Object is a symptom of poor design - refactor by identifying responsibilities and creating focused classes.',
    tags: ['anti-patterns']
  },
  {
    id: 94,
    chapter: 11,
    difficulty: 'hard',
    q: 'What are common anti-patterns in design and how do you fix them?',
    a: 'Common anti-patterns: (1) God Object - break into smaller classes, (2) Circular dependencies - introduce mediator or repository, (3) Spaghetti Code - refactor with clear structure, (4) Magic Strings/Numbers - use constants and enums, (5) Callback Hell - use promises/async-await, (6) Premature Optimization - profile first, optimize later, (7) Copy-Paste Code - extract methods/classes. Fix by recognizing symptoms, understanding root causes, applying appropriate patterns.',
    tags: ['anti-patterns']
  },
  // Chapter 12: Applying Patterns / Combinations (Q95–Q100)
  {
    id: 95,
    chapter: 12,
    difficulty: 'medium',
    q: 'How would you choose between multiple patterns to solve a design problem?',
    a: 'Consider: (1) Problem domain - is it about creation, structure, or behavior? (2) Consequences - what trade-offs is each pattern making? (3) Forces - what constraints exist? (4) Context - is this pattern already used in codebase? (5) Complexity - choose simplest pattern that solves the problem. Apply SOLID principles as guiding factors. Start simple, add patterns only when needed. Avoid over-engineering with too many patterns.',
    tags: ['gof']
  },
  {
    id: 96,
    chapter: 12,
    difficulty: 'hard',
    q: 'How can you combine Factory, Observer, and Command patterns in a plugin architecture?',
    a: 'Plugin architecture: (1) Factory creates plugin instances based on configuration/discovery, (2) Each plugin registers itself with an Observer (plugin manager), (3) Commands represent plugin operations, (4) Plugin manager notifies observers of state changes, (5) Commands are queued for async execution. This separates plugin loading (Factory), event notification (Observer), and operation execution (Command). The architecture is flexible, extensible, and maintains loose coupling.',
    tags: ['factory', 'observer', 'command', 'gof']
  },
  {
    id: 97,
    chapter: 12,
    difficulty: 'hard',
    q: 'How would you implement a workflow engine combining State, Command, and Strategy patterns?',
    a: 'Workflow engine: (1) State pattern defines workflow states (Draft, InReview, Approved, etc.), (2) Commands represent workflow actions (Submit, Review, Approve), (3) Strategies implement different approval workflows (auto-approval, multi-level approval). Process: (1) Current state determines allowed commands, (2) Command executes, potentially changes state, (3) Strategy determines how to process command. This provides flexible, extensible workflows with clear state management.',
    tags: ['state', 'command', 'strategy', 'behavioral']
  },
  {
    id: 98,
    chapter: 12,
    difficulty: 'hard',
    q: 'How do you apply design patterns to avoid tight coupling in enterprise applications?',
    a: 'Coupling reduction strategies: (1) Dependency Injection - inject dependencies rather than creating, (2) Observer/Mediator - decouple communicating objects, (3) Adapter/Bridge - decouple interfaces from implementations, (4) Repository - decouple business logic from data access, (5) Factory - decouple from concrete classes, (6) Facade - hide subsystem complexity. Layer architecture: Presentation - Business - Data Access - Database, where each layer depends on abstractions. Use interfaces extensively.',
    tags: ['gof', 'solid']
  },
  {
    id: 99,
    chapter: 12,
    difficulty: 'hard',
    q: 'How would you design a caching system combining Proxy, Decorator, and Strategy patterns?',
    a: 'Caching design: (1) Proxy wraps expensive service, intercepts calls to check cache before delegating, (2) Decorator adds caching capabilities to existing services without modification, (3) Strategy selects caching algorithm (LRU, LFU, TTL-based). Architecture: CachingProxy wraps Service, decides whether to cache, uses Strategy to determine cache eviction. This provides transparent caching, flexible algorithms, and clean separation. Proxy controls access, Decorator adds caching, Strategy customizes eviction.',
    tags: ['proxy', 'decorator', 'strategy', 'structural']
  },
  {
    id: 100,
    chapter: 12,
    difficulty: 'hard',
    q: 'What is the relationship between design patterns and software architecture?',
    a: 'Design patterns are micro-level solutions (typically classes/components), while architecture defines macro-level structure (layers, components, systems). Architecture often uses multiple patterns: layered architecture uses Repository, MVC/MVVM patterns; microservices use Event Sourcing, CQRS, Saga pattern; plugin architecture uses Factory, Observer, Command. Good architecture applies patterns consistently, maintains SOLID principles, enables testing and maintenance. Patterns implement architectural principles; architecture guides pattern selection.',
    tags: ['gof', 'solid']
  }
];
