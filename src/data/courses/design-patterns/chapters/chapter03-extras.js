export const topQuestions = [
  {
    id: 1,
    difficulty: 'easy',
    q: 'What is the Builder pattern?',
    a: 'The Builder pattern is a creational design pattern that separates the construction of a complex object from its representation. It uses a Builder class with fluent methods to construct objects step-by-step, making it easier to create objects with many optional parameters.'
  },
  {
    id: 2,
    difficulty: 'easy',
    q: 'What problem does Builder solve that constructors can\'t?',
    a: 'Builder solves the telescoping constructor problem where you need multiple constructors to handle different combinations of optional parameters. Instead of creating many overloaded constructors, Builder provides a single fluent interface to set any combination of properties in any order.'
  },
  {
    id: 3,
    difficulty: 'easy',
    q: 'What is the Director in the Builder pattern?',
    a: 'The Director is an optional component in the Builder pattern that encapsulates the construction algorithm. It knows the sequence of steps needed to build a specific product and calls builder methods in the correct order. It decouples construction logic from the client code.'
  },
  {
    id: 4,
    difficulty: 'easy',
    q: 'What is the Prototype pattern?',
    a: 'The Prototype pattern is a creational design pattern that creates new objects by copying an existing object (the prototype) rather than creating from scratch. It uses cloning to avoid expensive initialization and allows runtime configuration of object types.'
  },
  {
    id: 5,
    difficulty: 'easy',
    q: 'What is the difference between shallow copy and deep copy?',
    a: 'Shallow copy duplicates the object but its fields reference the same objects as the original. Deep copy duplicates both the object and all objects it references. Deep copy is necessary when the prototype contains mutable objects to ensure true independence from the original.'
  },
  {
    id: 6,
    difficulty: 'medium',
    q: 'What is method chaining in a Fluent Builder and how does it work?',
    a: 'Method chaining (fluent interface) is when builder methods return "this" to allow calling multiple methods in sequence: builder.setName("X").setAge(25).build(). Each method modifies the builder state and returns self, creating readable and expressive object construction code.'
  },
  {
    id: 7,
    difficulty: 'medium',
    q: 'Explain the Builder inner class pattern as described in Effective Java.',
    a: 'The Effective Java approach uses a static inner Builder class within the target object. The Builder has same fields as the outer class, provides fluent setter methods, and a build() method that creates the final immutable object. This pattern is type-safe and can validate invariants in build().'
  },
  {
    id: 8,
    difficulty: 'medium',
    q: 'When would you choose Builder vs constructor vs factory method?',
    a: 'Use constructor for simple objects with few parameters. Use factory method when creation logic is complex or you need polymorphism. Use Builder when the object has many optional parameters, needs fluent interface, or requires step-by-step construction with validation between steps.'
  },
  {
    id: 9,
    difficulty: 'medium',
    q: 'What are the main problems with Java\'s Cloneable interface?',
    a: 'Cloneable is a marker interface with no methods, relying on Object.clone() which is poorly designed. It requires implementing Cloneable and overriding clone(), has quirks with exception handling, doesn\'t work well with interfaces, and has subtle bugs with shallow vs deep copying expectations.'
  },
  {
    id: 10,
    difficulty: 'medium',
    q: 'How can you implement deep copy without using the Cloneable interface?',
    a: 'Implement a custom copy constructor that accepts an instance of the same class and manually creates new copies of all mutable fields. For nested objects, recursively call their copy constructors. This is type-safe, easier to understand, and avoids Cloneable\'s limitations.'
  },
  {
    id: 11,
    difficulty: 'medium',
    q: 'Compare copy constructor vs clone() method - which approach is preferred and why?',
    a: 'Copy constructor is generally preferred because it\'s more explicit, type-safe, works with immutable classes, and avoids Cloneable\'s quirks. clone() is awkward to use and often requires casting. Copy constructors make intent clear and can be easily combined with other design patterns.'
  },
  {
    id: 12,
    difficulty: 'medium',
    q: 'What is the Object Pool pattern and when is it useful?',
    a: 'Object Pool is a creational pattern that maintains a reusable pool of objects instead of creating and destroying them repeatedly. It\'s useful when object creation is expensive (database connections, thread pools, graphics resources) and objects are frequently needed and released.'
  },
  {
    id: 13,
    difficulty: 'medium',
    q: 'How does StringBuilder implement the Builder pattern?',
    a: 'StringBuilder uses the Builder pattern by providing fluent methods like append(), insert(), delete() that modify internal state and return "this". It defers creating the final immutable String until toString() is called, avoiding expensive string concatenation in loops.'
  },
  {
    id: 14,
    difficulty: 'medium',
    q: 'What are the key similarities between connection pool and object pool patterns?',
    a: 'Both maintain reusable resources in a pool to avoid expensive creation/destruction. Both provide acquire and release mechanisms. Both manage resource lifecycle and handle cases when the pool is exhausted. Both improve performance by amortizing expensive initialization costs.'
  },
  {
    id: 15,
    difficulty: 'medium',
    q: 'How does the Builder pattern support immutability?',
    a: 'Builder allows creating immutable objects by accumulating all parameters in the builder (which is mutable) and only creating the immutable final object once in build(). The built object\'s fields can be final and private, with no setters, while Builder provides all configuration flexibility.'
  },
  {
    id: 16,
    difficulty: 'hard',
    q: 'What is the relationship between Builder pattern and thread safety of the constructed object?',
    a: 'Builder pattern naturally supports creating thread-safe immutable objects. By accumulating mutable state in the Builder (typically not shared) and only producing the final immutable object, you avoid race conditions. The final object can safely be shared across threads with no synchronization.'
  },
  {
    id: 17,
    difficulty: 'hard',
    q: 'What is a Prototype registry and when would you use it?',
    a: 'A Prototype registry is a central map storing named prototype instances. Clients clone registered prototypes instead of hardcoding class instantiation. It\'s useful when you have many prototype variants, want runtime configuration of cloneable types, or need to decouple client code from concrete classes.'
  },
  {
    id: 18,
    difficulty: 'hard',
    q: 'How do you handle circular references when implementing deep copy?',
    a: 'Use a separate map (identity map) to track already-cloned objects by identity hashcode. When encountering an object, check if it\'s already been cloned. If yes, reuse the clone. This breaks cycles and ensures shared references in the original are preserved in the copy.'
  },
  {
    id: 19,
    difficulty: 'hard',
    q: 'What happens in an Object Pool when the pool is exhausted and all objects are in use?',
    a: 'Behavior depends on pool implementation: block and wait for an object to be released, throw an exception, create additional objects on-demand, or use a timeout. Pool exhaustion indicates tuning is needed. Good pools monitor utilization and provide metrics to optimize pool size.'
  },
  {
    id: 20,
    difficulty: 'hard',
    q: 'Compare Builder, Prototype, and Object Pool patterns for reducing object creation cost.',
    a: 'Builder reduces cost of construction logic repetition but still creates one new object. Prototype avoids construction logic entirely by cloning. Object Pool avoids creation/destruction by reusing. Use Builder for complex construction, Prototype for expensive initialization or runtime types, Pool for frequently created/discarded objects.'
  }
];

export const quiz = [
  {
    id: 1,
    q: 'What are the three main participants in the Builder pattern?',
    options: [
      'Product, Builder, Director, Client',
      'Builder, Setter, Getter, Product',
      'Product, Builder, Client',
      'Factory, Prototype, Builder'
    ],
    answer: 0,
    explanation: 'The Builder pattern has four main participants: Product (the object being built), Builder (constructs the product step-by-step), Director (encapsulates construction algorithm), and Client (uses Director or Builder directly).'
  },
  {
    id: 2,
    q: 'What is the telescoping constructor problem?',
    options: [
      'Constructor methods that are too long',
      'Multiple overloaded constructors to handle different parameter combinations',
      'Constructors that call other constructors in a chain',
      'Constructors with parameters of the same type'
    ],
    answer: 1,
    explanation: 'Telescoping constructors are multiple overloads to support different parameter combinations. With many optional parameters, this results in many constructors (n choices² possibilities), making code hard to maintain and read. Builder pattern elegantly solves this.'
  },
  {
    id: 3,
    q: 'In Java, the Object class clone() method performs a:',
    options: [
      'Deep copy of all fields',
      'Shallow copy of all fields',
      'Reference copy only',
      'Deep copy only for immutable types'
    ],
    answer: 1,
    explanation: 'Object.clone() performs a shallow copy. It duplicates the object but fields still reference the same objects as the original. For deep copy, you must override clone() and recursively clone mutable fields.'
  },
  {
    id: 4,
    q: 'Why is the Java Cloneable interface considered problematic?',
    options: [
      'It requires implementing too many methods',
      'It is a marker interface with no methods; relies on Object.clone() which is awkwardly designed and has subtle semantics',
      'It is not thread-safe',
      'It only works with immutable objects'
    ],
    answer: 1,
    explanation: 'Cloneable is a marker interface (no methods). You must implement Cloneable and override clone(). The design is awkward: clone() is protected in Object, CloneNotSupportedException is a checked exception, and shallow vs deep copy is ambiguous.'
  },
  {
    id: 5,
    q: 'How does StringBuilder implement the Builder pattern?',
    options: [
      'It has an inner Builder class that constructs String objects',
      'Methods like append() return "this" for chaining, deferring final String creation until toString()',
      'It uses a prototype pattern to clone strings',
      'It maintains a pool of immutable strings'
    ],
    answer: 1,
    explanation: 'StringBuilder embodies Builder by providing fluent methods (append, insert, delete) that return "this" for method chaining. The mutable StringBuilder accumulates operations, then toString() produces the final immutable String, avoiding expensive string concatenation.'
  },
  {
    id: 6,
    q: 'In an Object Pool, what are the two main operations?',
    options: [
      'create() and destroy()',
      'acquire() and release()',
      'clone() and reset()',
      'initialize() and finalize()'
    ],
    answer: 1,
    explanation: 'Object Pool uses acquire() to get an object from the pool and release() to return it. These operations manage the lifecycle of reusable objects, avoiding expensive creation/destruction overhead.'
  },
  {
    id: 7,
    q: 'The Builder pattern naturally supports which principle?',
    options: [
      'Builder always creates mutable objects',
      'Builder accumulates state in a mutable builder, then creates immutable final objects in build()',
      'Builder requires all parameters to be set before build()',
      'Builder cannot validate invariants'
    ],
    answer: 1,
    explanation: 'Builder separates mutable construction (in Builder) from the immutable final product. This enables creating thread-safe immutable objects with flexible configuration, since the final object\'s fields can be final with no setters.'
  },
  {
    id: 8,
    q: 'When using Prototype pattern, what is a key advantage over using "new"?',
    options: [
      'Prototypes are always faster',
      'Prototypes can avoid expensive initialization logic and allow runtime configuration of object types',
      'Prototypes require less memory',
      'Prototypes are always thread-safe'
    ],
    answer: 1,
    explanation: 'Prototype\'s power comes from avoiding construction logic (useful for objects with expensive initialization like copying large data structures) and allowing runtime type configuration through a prototype registry.'
  },
  {
    id: 9,
    q: 'What is the purpose of a Prototype registry?',
    options: [
      'To store all created objects for garbage collection',
      'To maintain a map of named prototypes that clients can clone instead of hardcoding classes',
      'To synchronize access to shared prototypes',
      'To validate that objects are properly cloned'
    ],
    answer: 1,
    explanation: 'A Prototype registry is a central store of prototype instances. Clients look up and clone registered prototypes by name, avoiding hardcoded class dependencies. This supports runtime type configuration and decouples clients from concrete classes.'
  },
  {
    id: 10,
    q: 'How do you prevent infinite loops when deep-copying objects with circular references?',
    options: [
      'Use a shallow copy only',
      'Limit copy depth to a maximum level',
      'Use an identity-based map to track already-cloned objects',
      'Throw an exception if a cycle is detected'
    ],
    answer: 2,
    explanation: 'Track cloned objects by identity (using IdentityHashMap) during deep copy. When you encounter an object already in the map, reuse its clone. This preserves shared references and breaks cycles.'
  },
  {
    id: 11,
    q: 'What is the main advantage of a copy constructor over clone()?',
    options: [
      'Copy constructors are always faster',
      'Copy constructors are type-safe, explicit, and avoid Cloneable\'s awkward design',
      'Copy constructors work with all objects',
      'Copy constructors can be inherited'
    ],
    answer: 1,
    explanation: 'Copy constructors are preferred because they\'re type-safe (no casting), work with interfaces and immutable classes, make intent explicit, and avoid Cloneable\'s complexity. They integrate naturally with other design patterns.'
  },
  {
    id: 12,
    q: 'In Builder pattern, why would you use a Director class?',
    options: [
      'To force all objects to be immutable',
      'To encapsulate construction algorithm and call builder steps in a specific order',
      'To improve performance of object creation',
      'To support multiple languages'
    ],
    answer: 1,
    explanation: 'Director encapsulates the construction algorithm. It knows the sequence of steps needed and calls builder methods in order. This separates construction logic from the client, supporting multiple construction variations without client complexity.'
  },
  {
    id: 13,
    q: 'When an Object Pool is exhausted, a well-designed pool should:',
    options: [
      'Immediately create more objects without limit',
      'Always throw an exception',
      'Have a clear policy: block and wait, throw exception, create on-demand, or timeout',
      'Silently return null'
    ],
    answer: 2,
    explanation: 'A good pool has explicit handling for exhaustion: block waiting for available objects, raise an exception, create additional objects on-demand, or use a timeout. The policy should be configurable and monitored.'
  },
  {
    id: 14,
    q: 'What is the key difference between a Builder and a Factory?',
    options: [
      'Builder is for classes, Factory is for primitives',
      'Builder constructs step-by-step with fluent interface; Factory creates objects in a single call based on parameters',
      'Builder always creates immutable objects; Factory creates mutable objects',
      'Factory is only for static creation'
    ],
    answer: 1,
    explanation: 'Builder emphasizes step-by-step construction with fluent methods and optional parameters. Factory emphasizes encapsulating creation logic, choosing implementations, or managing resources. Builder is better for complex configuration; Factory is better for polymorphism or logic-based creation.'
  },
  {
    id: 15,
    q: 'The Prototype pattern is most useful when:',
    options: [
      'Objects are simple and cheap to create',
      'Object creation is expensive, or you need runtime-configurable types via a registry',
      'You want to enforce strict typing',
      'You need thread-safe access to objects'
    ],
    answer: 1,
    explanation: 'Prototype excels when creating objects is expensive (complex initialization, large data copying) or when you need to support runtime type configuration through a prototype registry, allowing clients to dynamically choose which types to instantiate.'
  }
];

export const shortNotes = {
  title: 'Creational Patterns II',
  color: 'green',
  keyPoints: [
    {
      icon: '🔨',
      title: 'Builder Pattern',
      text: 'Separates construction from representation using fluent step-by-step configuration. Solves telescoping constructor problem. Returns builder or final product. Supports immutability.'
    },
    {
      icon: '📋',
      title: 'Builder Inner Class (Effective Java)',
      text: 'Static inner Builder class with same fields as outer class. Fluent setters return "this". build() creates immutable outer object. Type-safe and validates in build().'
    },
    {
      icon: '🔗',
      title: 'Method Chaining / Fluent Interface',
      text: 'Builder methods return "this" enabling: builder.setA("x").setB(5).build(). Expressive, readable, no intermediate variables needed. Each method modifies state and returns self.'
    },
    {
      icon: '🖇️',
      title: 'Prototype Pattern',
      text: 'Creates new objects by cloning existing prototype rather than instantiation. Avoids expensive initialization. Supports runtime type configuration via Prototype registry. Better than Java\'s Cloneable.'
    },
    {
      icon: '📊',
      title: 'Copy Semantics: Shallow vs Deep',
      text: 'Shallow: duplicate object but fields reference same objects (Object.clone()). Deep: recursively clone all referenced objects. Deep copy needed for mutable fields to ensure independence.'
    },
    {
      icon: '🔄',
      title: 'Copy Constructor (Preferred Over clone())',
      text: 'Define constructor accepting same type: Person(Person p). Type-safe, explicit, works with interfaces. Better than Cloneable which relies on awkward Object.clone(). Easy to understand and compose.'
    },
    {
      icon: '♻️',
      title: 'Object Pool Pattern',
      text: 'Maintains pool of reusable objects. acquire() gets object, release() returns it. Avoids expensive creation/destruction. Useful for connections, threads, resources. Monitor pool exhaustion policy.'
    },
    {
      icon: '⚙️',
      title: 'When to Use Each',
      text: 'Constructor: simple objects. Factory: complex logic/polymorphism. Builder: many optional params, fluent interface, immutability. Prototype: expensive init, runtime types. Pool: frequent create/destroy cycles.'
    }
  ],
  quickFacts: [
    'Builder decouples construction details from clients via fluent interface.',
    'Prototype registry maps names to prototypes; clients clone by name avoiding hardcoded classes.',
    'Circular references in deep copy require identity-based tracking to avoid infinite loops.',
    'Java Cloneable is a marker interface; clone() is protected and CloneNotSupportedException is checked—awkward design.',
    'StringBuilder exemplifies Builder: append() chains, toString() produces final immutable String.',
    'Object Pool acquire/release cycle improves performance when object creation is expensive.',
    'Copy constructor integrates naturally with immutable classes and other patterns.',
    'Builder naturally supports immutability: mutable builder → immutable final product in build().'
  ],
  rememberThis: [
    'Avoid Java\'s clone() and Cloneable; use copy constructors instead for clarity and type safety.',
    'Builder shines with many optional parameters; fluent interface prevents telescoping constructor explosion.',
    'Prototype is for expensive initialization or runtime type configuration via registry, not just any object copying.',
    'Object Pool needs clear exhaustion policy (block, exception, on-demand, timeout) and monitoring for effectiveness.'
  ]
};
