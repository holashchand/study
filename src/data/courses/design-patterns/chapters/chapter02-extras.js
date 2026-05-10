export const topQuestions = [
  {
    id: 1,
    difficulty: 'easy',
    q: 'What is the Singleton pattern and when should you use it?',
    a: 'The Singleton pattern ensures a class has only one instance and provides a global point of access to it. Use it when you need exactly one instance of a resource that is expensive to create, shared across the application, or coordinates centralized access. Common examples: configuration managers, logging services, database connection pools, thread pool managers. Key: Singleton hides the creation complexity and controls instance uniqueness.'
  },
  {
    id: 2,
    difficulty: 'easy',
    q: 'How do you make a Singleton thread-safe in Java?',
    a: 'There are several approaches: (1) Eager initialization: create instance at class loading time; (2) Synchronized method: synchronize the getInstance() method (simple but performance overhead); (3) Double-checked locking: check twice with synchronization for performance; (4) Bill Pugh Singleton holder: use static inner class (recommended, lazy-loaded, thread-safe without synchronization); (5) Enum Singleton: single instance guaranteed by JVM (best practice, serialization-safe).'
  },
  {
    id: 3,
    difficulty: 'easy',
    q: 'What is the best way to implement Singleton in Java?',
    a: 'Using an Enum is the best approach. It is thread-safe by design (JVM guarantees), handles serialization correctly, prevents reflection attacks, and has minimal performance overhead. Simply: public enum Singleton { INSTANCE; public void doSomething() {} }. Access via Singleton.INSTANCE.doSomething(). This pattern is endorsed by Joshua Bloch in Effective Java.'
  },
  {
    id: 4,
    difficulty: 'easy',
    q: 'What is the Factory Method pattern?',
    a: 'Factory Method is a creational pattern that defines an interface for creating an object but lets subclasses decide which class to instantiate. It encapsulates object creation logic, reducing coupling between client code and concrete classes. Key participants: Creator (declares factory method), ConcreteCreator (implements factory method), Product (object interface), ConcreteProduct (actual objects). Clients depend on abstractions, not concrete classes.'
  },
  {
    id: 5,
    difficulty: 'easy',
    q: 'What is the difference between Factory Method and Abstract Factory?',
    a: 'Factory Method creates one type of object and is often implemented via inheritance. Abstract Factory creates families of related objects and uses composition of factory methods. Factory Method has one creation method per subclass; Abstract Factory has multiple methods creating different product types. Use Factory Method for simple object creation; use Abstract Factory when you need to create multiple related objects (e.g., GUI themes with buttons, dialogs, menus for each theme).'
  },
  {
    id: 6,
    difficulty: 'medium',
    q: 'What are the problems with naive Singleton implementations?',
    a: 'Problems include: (1) Not thread-safe in basic implementations, leading to multiple instances; (2) Synchronized methods create performance bottlenecks; (3) Reflection can bypass private constructors; (4) Serialization can create new instances; (5) Cloning can create new instances; (6) Violates Single Responsibility Principle; (7) Hard to test due to global state; (8) Tight coupling to Singleton class. These issues led to better implementations like enum and Bill Pugh holder.'
  },
  {
    id: 7,
    difficulty: 'medium',
    q: 'Why is Enum Singleton preferred over other approaches?',
    a: 'Enum Singleton is preferred because: (1) Thread-safe by JVM design (no synchronization needed); (2) Serialization-safe (JVM handles it correctly); (3) Reflection-safe (reflection cannot create new enum instances); (4) Simple and readable syntax; (5) No performance overhead; (6) Endorsed by Joshua Bloch (Effective Java); (7) Handles all edge cases automatically. It is the most robust and elegant solution for implementing Singleton in Java.'
  },
  {
    id: 8,
    difficulty: 'medium',
    q: 'How does double-checked locking work in Singleton?',
    a: 'Double-checked locking minimizes synchronization overhead: (1) First check (without lock): if instance is not null, return it (fast path); (2) If null, acquire lock (expensive, rare); (3) Second check (with lock): verify instance is still null before creating it. This handles race condition where multiple threads pass the first check. Requires volatile keyword on instance field to prevent compiler reordering. Works but complex—prefer Bill Pugh or Enum approach.'
  },
  {
    id: 9,
    difficulty: 'medium',
    q: 'How does Factory Method differ from direct instantiation with the "new" keyword?',
    a: 'Direct "new" creates tight coupling to concrete classes. Factory Method decouples client code from concrete implementations by having subclasses decide which class to instantiate. Benefits: (1) Easier to extend with new product types without changing client code; (2) Satisfies Open/Closed Principle; (3) Centralizes creation logic; (4) Enables dependency injection; (5) Easier to test (mock factory methods). Trade-off: slightly more complex code structure.'
  },
  {
    id: 10,
    difficulty: 'medium',
    q: 'What is the role of the Creator class in Factory Method pattern?',
    a: 'The Creator class defines the factory method interface and may provide a default implementation. It uses the factory method to create products without knowing concrete classes. Key points: (1) Creator declares the abstract factory method; (2) ConcreteCreator overrides it to return specific products; (3) Creator depends on Product abstraction, not concrete products; (4) Clients typically work with Creator interface. Creator may contain business logic that uses created products, separating creation from usage.'
  },
  {
    id: 11,
    difficulty: 'medium',
    q: 'How does Factory Method support the Open/Closed Principle?',
    a: 'Factory Method enables adding new product types without modifying existing code (closed for modification, open for extension): (1) Create new ConcreteCreator subclass; (2) Override factory method to return new product type; (3) Register new creator with client code (if needed). Existing Creator and ConcreteCreator classes remain unchanged. Client code depends on abstractions, allowing new implementations to be plugged in. This is the essence of OCP.'
  },
  {
    id: 12,
    difficulty: 'medium',
    q: 'What is a "product family" in the context of Abstract Factory?',
    a: 'A product family is a group of related objects that are designed to work together. Example: a UI theme creates a family of related components (button, dialog, menu) in a consistent style. Light theme family: LightButton, LightDialog, LightMenu. Dark theme family: DarkButton, DarkDialog, DarkMenu. Abstract Factory ensures you create all products from the same family, maintaining consistency. Without it, you might mix LightButton with DarkDialog, breaking visual coherence.'
  },
  {
    id: 13,
    difficulty: 'medium',
    q: 'When would you choose Abstract Factory over Factory Method?',
    a: 'Choose Abstract Factory when: (1) You need to create multiple related objects (product families); (2) You want to ensure consistency across product families; (3) Different implementations exist for the entire family (e.g., Windows UI vs Mac UI); (4) Products are strongly related and should be used together. Choose Factory Method for simpler scenarios with single object type creation. Example: Abstract Factory for cross-platform UI libraries; Factory Method for single object creation like document formats.'
  },
  {
    id: 14,
    difficulty: 'medium',
    q: 'How does Singleton violate the Single Responsibility Principle?',
    a: 'Singleton has two responsibilities: (1) Managing its own instantiation (creation logic); (2) The actual business logic of the class. This violates SRP. The class is responsible for both being a Singleton AND doing its job. Better approach: use dependency injection to inject a single instance (managed externally) rather than having the class manage its own singleton status. This separates concerns and makes classes more testable and flexible.'
  },
  {
    id: 15,
    difficulty: 'medium',
    q: 'What is the Bill Pugh Singleton holder idiom?',
    a: 'The Bill Pugh holder idiom uses a static inner helper class to implement lazy-loaded, thread-safe Singleton without synchronization: public class Singleton { private static class SingletonHolder { static final Singleton INSTANCE = new Singleton(); } public static Singleton getInstance() { return SingletonHolder.INSTANCE; } }. The inner class is not loaded until getInstance() is called, providing lazy initialization. Thread-safe because class loading is synchronized by JVM. Elegant solution before Enum became standard.'
  },
  {
    id: 16,
    difficulty: 'hard',
    q: 'Why is Singleton considered an anti-pattern by some developers?',
    a: 'Criticisms: (1) Hides dependencies (no way to see it is used without code inspection); (2) Creates global state (hard to reason about, causes testing issues); (3) Violates SRP (manages instantiation and business logic); (4) Tightly couples code to Singleton class; (5) Makes unit testing difficult (cannot mock or inject); (6) Not thread-safe in simple implementations; (7) Can lead to unmaintainable code. Modern preference: use dependency injection to manage single instances externally, decoupling from the class.'
  },
  {
    id: 17,
    difficulty: 'hard',
    q: 'How do you unit test code that uses Singleton?',
    a: 'Strategies: (1) Use reflection to reset the Singleton instance between tests (messy, fragile); (2) Create a spy/mock of the Singleton if using Mockito (limited); (3) Refactor to use an interface and inject dependencies (best practice); (4) Use a test double that replaces the Singleton (requires test setup); (5) Use parameterized tests with different Singleton states. Best approach: avoid Singleton in testable code by using dependency injection. Design for testability from the start, not as an afterthought.'
  },
  {
    id: 18,
    difficulty: 'hard',
    q: 'When would you choose Abstract Factory over Builder?',
    a: 'Abstract Factory and Builder have different purposes: Abstract Factory creates families of related simple objects (each product is ready to use immediately), emphasizing consistency. Builder creates a single complex object step-by-step with optional parameters and flexibility. Use Abstract Factory for fast creation of related objects (UI components, database drivers). Use Builder for constructing complex objects with many optional parameters (e.g., HTTP request with headers, body, cookies). Builder is about construction flexibility; Abstract Factory is about product family consistency.'
  },
  {
    id: 19,
    difficulty: 'hard',
    q: 'How does Factory Method relate to the Template Method pattern?',
    a: 'Both patterns deal with polymorphism and subclass specialization. Template Method defines an algorithm skeleton in a base class, letting subclasses override specific steps. Factory Method is often used within Template Method: the base class template method may call a factory method (overridden by subclasses) to create objects it needs. Example: DocumentCreator template method creates and processes documents; ConcreteCreator subclasses override factory method to create specific document types (PDF, Word). Factory Method supports Template Method by providing polymorphic object creation within the algorithm.'
  },
  {
    id: 20,
    difficulty: 'hard',
    q: 'Explain how JDBC DriverManager uses the Factory Method pattern.',
    a: 'JDBC DriverManager demonstrates Factory Method: (1) java.sql.Driver interface is the Product; (2) Different database vendors (MySQL, PostgreSQL, Oracle) implement Driver—ConcreteProducts; (3) DriverManager.getConnection() is the factory method that determines which driver to use based on connection string; (4) Clients call getConnection() without knowing concrete driver classes; (5) New drivers can be added without modifying DriverManager. This decouples client code from database vendor implementations, allowing runtime driver selection and extensibility.'
  }
];

export const quiz = [
  {
    id: 1,
    q: 'Which implementation is considered the best practice for Singleton in Java?',
    options: ['Synchronized getInstance() method', 'Eager initialization', 'Enum Singleton', 'Bill Pugh holder class'],
    answer: 2,
    explanation: 'Enum Singleton is the best practice because it is thread-safe by JVM design, serialization-safe, reflection-safe, and endorsed by Joshua Bloch in Effective Java.'
  },
  {
    id: 2,
    q: 'What keyword must be used on the instance field in double-checked locking Singleton?',
    options: ['synchronized', 'volatile', 'final', 'static'],
    answer: 1,
    explanation: 'The volatile keyword ensures visibility of instance assignment across threads and prevents compiler reordering in double-checked locking pattern.'
  },
  {
    id: 3,
    q: 'How many instances can a Singleton class have?',
    options: ['Zero', 'One', 'Multiple based on thread count', 'Unlimited'],
    answer: 1,
    explanation: 'A Singleton class, by definition, should have exactly one instance throughout the application lifecycle.'
  },
  {
    id: 4,
    q: 'What is the primary benefit of using Factory Method over direct instantiation?',
    options: ['Faster execution', 'Decoupling from concrete classes', 'Reduced memory usage', 'Simpler syntax'],
    answer: 1,
    explanation: 'Factory Method decouples client code from concrete classes, enabling loose coupling and supporting the Open/Closed Principle.'
  },
  {
    id: 5,
    q: 'In Factory Method, who decides which concrete class to instantiate?',
    options: ['Client code', 'The Product class', 'ConcreteCreator subclasses', 'The abstract Creator class'],
    answer: 2,
    explanation: 'In Factory Method, ConcreteCreator subclasses override the factory method to decide and instantiate the appropriate ConcreteProduct.'
  },
  {
    id: 6,
    q: 'What is the main difference between Abstract Factory and Factory Method?',
    options: ['Abstract Factory uses more classes', 'Abstract Factory creates families of related objects; Factory Method creates single objects', 'They are identical', 'Factory Method is deprecated'],
    answer: 1,
    explanation: 'Abstract Factory creates multiple related objects (families); Factory Method creates a single object type. Use Abstract Factory for product families like UI themes.'
  },
  {
    id: 7,
    q: 'Which is a problem with naive (non-thread-safe) Singleton implementation?',
    options: ['It uses too much memory', 'Multiple instances can be created', 'It is slow', 'It cannot be serialized'],
    answer: 1,
    explanation: 'Naive Singleton implementations are not thread-safe, allowing multiple threads to create different instances, violating the Singleton contract.'
  },
  {
    id: 8,
    q: 'How does Enum Singleton prevent reflection attacks?',
    options: ['Enums cannot be reflected', 'Reflection cannot create enum instances', 'Enum constructors are public', 'Reflection throws an exception'],
    answer: 1,
    explanation: 'Java\'s reflection API specifically prevents creating new enum instances, making Enum Singleton secure against reflection-based attacks.'
  },
  {
    id: 9,
    q: 'What does Bill Pugh Singleton use to achieve lazy initialization?',
    options: ['Synchronized methods', 'Static inner class', 'Volatile field', 'Atomic variable'],
    answer: 1,
    explanation: 'Bill Pugh Singleton uses a static inner helper class that is loaded only when getInstance() is called, providing lazy initialization.'
  },
  {
    id: 10,
    q: 'In Abstract Factory, what term describes the group of related objects?',
    options: ['Object hierarchy', 'Product family', 'Object collection', 'Class constellation'],
    answer: 1,
    explanation: 'In Abstract Factory, a product family is a group of related objects designed to work together, like components from the same UI theme.'
  },
  {
    id: 11,
    q: 'Which pattern is more suitable for creating a complex object with many optional parameters?',
    options: ['Singleton', 'Factory Method', 'Builder', 'Abstract Factory'],
    answer: 2,
    explanation: 'Builder pattern is designed for constructing complex objects step-by-step with optional parameters, while Factory Method is for simple object creation.'
  },
  {
    id: 12,
    q: 'What problem does Singleton create for unit testing?',
    options: ['It makes code run slower', 'It hides dependencies and creates global state', 'It uses too much memory', 'It cannot be imported in tests'],
    answer: 1,
    explanation: 'Singleton hides dependencies (hard to discover usage), creates global state (affects test isolation), and is difficult to mock or inject for testing.'
  },
  {
    id: 13,
    q: 'Which of the following violates the Single Responsibility Principle in Singleton?',
    options: ['Creating one instance', 'Returning the instance', 'Managing instantiation AND business logic', 'Storing data'],
    answer: 2,
    explanation: 'Singleton violates SRP by having two responsibilities: managing its own instantiation and handling its business logic.'
  },
  {
    id: 14,
    q: 'How does JDBC DriverManager demonstrate Factory Method?',
    options: ['It implements Singleton', 'getConnection() selects appropriate driver without knowing concrete classes', 'It uses multiple inheritance', 'It is not a design pattern'],
    answer: 1,
    explanation: 'DriverManager.getConnection() acts as a factory method that returns the appropriate Driver implementation based on connection URL, without client code knowing concrete classes.'
  },
  {
    id: 15,
    q: 'Which creational pattern should you use for cross-platform UI libraries with consistent themes?',
    options: ['Singleton', 'Factory Method', 'Abstract Factory', 'Prototype'],
    answer: 2,
    explanation: 'Abstract Factory is ideal for cross-platform UI libraries because it creates families of related components (buttons, dialogs, menus) consistent within each theme.'
  }
];

export const shortNotes = {
  title: 'Chapter 2 — Creational Patterns I Quick Reference',
  color: 'blue',
  keyPoints: [
    {
      icon: '1️⃣',
      title: 'Singleton Pattern',
      text: 'Ensures one instance globally. Best: Enum Singleton (thread-safe, reflection-safe, serialization-safe). Avoid naive implementations; violates SRP and complicates testing.'
    },
    {
      icon: '🔒',
      title: 'Three Thread-Safe Approaches',
      text: '(1) Eager: create at load time. (2) Double-checked locking: expensive but lazy (use volatile). (3) Bill Pugh holder: static inner class, lazy, no synchronization overhead.'
    },
    {
      icon: '🏭',
      title: 'Factory Method Pattern',
      text: 'Encapsulates object creation. Subclasses decide what to create. Decouples clients from concrete classes. Enables extension without modifying existing code (Open/Closed).'
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Factory Method Participants',
      text: 'Creator: declares factory method. ConcreteCreator: implements it. Product: interface. ConcreteProduct: actual objects. Clients depend on abstractions, not implementations.'
    },
    {
      icon: '🌈',
      title: 'Abstract Factory Pattern',
      text: 'Creates families of related objects. Ensures consistency across product families (e.g., light theme vs dark theme UI components). Multiple factory methods, one per product type.'
    },
    {
      icon: '⚖️',
      title: 'Factory vs Abstract Factory',
      text: 'Factory Method: single object creation. Abstract Factory: multiple related objects. FM via inheritance; AF via composition. Use AF for product family consistency.'
    },
    {
      icon: '🔍',
      title: 'Singleton Pitfalls',
      text: 'Hides dependencies, creates global state, hard to test, violates SRP. Modern approach: use dependency injection to manage single instances externally.'
    },
    {
      icon: '📦',
      title: 'Product Family Concept',
      text: 'Group of related objects designed together (e.g., button, dialog, menu from same UI theme). Abstract Factory ensures all products come from same family.'
    }
  ],
  quickFacts: [
    'Enum Singleton: public enum Singleton { INSTANCE; } — simplest, safest implementation.',
    'Serialization affects Singleton—Enum handles it automatically; other approaches need readResolve().',
    'Reflection can break Singleton unless using Enum (reflection cannot create enum instances).',
    'Double-checked locking requires volatile keyword to prevent compiler reordering issues.',
    'Factory Method enables polymorphic object creation—subclasses override factory method to return specific products.',
    'JDBC DriverManager.getConnection() is a real-world Factory Method—returns different drivers by URL.',
    'Abstract Factory used in GUI libraries for consistent multi-platform themes (Windows, Mac, Linux).'
  ],
  rememberThis: [
    'Use Enum Singleton—it handles all edge cases (thread-safety, serialization, reflection) automatically.',
    'Factory Method supports Open/Closed Principle: extend with new creators without modifying existing code.',
    'Abstract Factory prevents mixing products from different families (e.g., Light Button with Dark Dialog).',
    'Singleton hides dependencies; prefer dependency injection to manage single instances externally for testability.'
  ]
};
