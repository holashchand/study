export const sections = [
  {
    id: 'builder-concept',
    title: 'Builder Pattern: Concept & Intent',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'The Problem: Telescoping Constructors'
      },
      {
        type: 'paragraph',
        text: 'When a class has many optional parameters, constructors become unwieldy. You end up with multiple overloaded constructors (telescoping constructor anti-pattern), making code hard to read and maintain.'
      },
      {
        type: 'code',
        language: 'java',
        code: `// Anti-pattern: telescoping constructors
public class House {
  public House(String foundation) { ... }
  public House(String foundation, String walls) { ... }
  public House(String foundation, String walls, String roof) { ... }
  public House(String foundation, String walls, String roof,
               String windows, String doors, String garage) { ... }
  // ... 10 more overloads!
}`
      },
      {
        type: 'heading',
        level: 3,
        text: 'Builder Pattern Intent'
      },
      {
        type: 'paragraph',
        text: 'Separate the construction of a complex object from its representation, allowing the same construction process to create different representations. A **Builder** provides a fluent, step-by-step interface for object creation.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Architecture'
      },
      {
        type: 'diagram',
        format: 'mermaid',
        content: 'classDiagram\n  class Director {\n    -builder: Builder\n    +construct()\n  }\n  class Builder {\n    +buildPart1()*\n    +buildPart2()*\n    +getResult()*\n  }\n  class ConcreteBuilder {\n    -product: Product\n    +buildPart1()\n    +buildPart2()\n    +getResult() Product\n  }\n  class Product {\n    +display()\n  }\n  Director --> Builder\n  Builder <|-- ConcreteBuilder\n  ConcreteBuilder --> Product',
        label: 'Builder Pattern Structure'
      }
    ]
  },
  {
    id: 'builder-classic',
    title: 'Classic Builder Implementation',
    blocks: [
      {
        type: 'paragraph',
        text: 'The classic approach uses a separate Builder class with a fluent interface. A Director optionally orchestrates the build steps.'
      },
      {
        type: 'code',
        language: 'java',
        code: `public class House {
  private String foundation;
  private String walls;
  private String roof;
  private String windows;
  private String doors;
  private String garage;
  private boolean pool;

  private House(HouseBuilder builder) {
    this.foundation = builder.foundation;
    this.walls = builder.walls;
    this.roof = builder.roof;
    this.windows = builder.windows;
    this.doors = builder.doors;
    this.garage = builder.garage;
    this.pool = builder.pool;
  }

  @Override
  public String toString() {
    return "House{" +
      "foundation='" + foundation + "'" +
      ", walls='" + walls + "'" +
      ", roof='" + roof + "'" +
      ", windows='" + windows + "'" +
      ", doors='" + doors + "'" +
      ", garage='" + garage + "'" +
      ", pool=" + pool + "}";
  }

  public static class HouseBuilder {
    private String foundation = "concrete";
    private String walls = "brick";
    private String roof = "shingles";
    private String windows = "none";
    private String doors = "none";
    private String garage = "none";
    private boolean pool = false;

    public HouseBuilder foundation(String foundation) {
      this.foundation = foundation;
      return this;
    }

    public HouseBuilder walls(String walls) {
      this.walls = walls;
      return this;
    }

    public HouseBuilder roof(String roof) {
      this.roof = roof;
      return this;
    }

    public HouseBuilder windows(String windows) {
      this.windows = windows;
      return this;
    }

    public HouseBuilder doors(String doors) {
      this.doors = doors;
      return this;
    }

    public HouseBuilder garage(String garage) {
      this.garage = garage;
      return this;
    }

    public HouseBuilder withPool(boolean pool) {
      this.pool = pool;
      return this;
    }

    public House build() {
      return new House(this);
    }
  }
}`,
        filename: 'House.java'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Director Orchestrating Steps'
      },
      {
        type: 'code',
        language: 'java',
        code: `public class HouseDirector {
  private House.HouseBuilder builder;

  public HouseDirector(House.HouseBuilder builder) {
    this.builder = builder;
  }

  public House buildSimpleHouse() {
    return builder
      .foundation("concrete")
      .walls("wood")
      .roof("shingles")
      .build();
  }

  public House buildLuxuryHouse() {
    return builder
      .foundation("marble")
      .walls("stone")
      .roof("tiles")
      .windows("triple-pane")
      .doors("oak")
      .garage("smart")
      .withPool(true)
      .build();
  }
}`,
        filename: 'HouseDirector.java'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Usage'
      },
      {
        type: 'code',
        language: 'java',
        code: `// Direct builder usage
House modernHouse = new House.HouseBuilder()
  .foundation("concrete")
  .walls("glass")
  .roof("metal")
  .windows("floor-to-ceiling")
  .build();

// Via Director
HouseDirector director = new HouseDirector(new House.HouseBuilder());
House simpleHouse = director.buildSimpleHouse();
House luxuryHouse = director.buildLuxuryHouse();`
      }
    ]
  },
  {
    id: 'builder-fluent',
    title: 'Fluent Builder & Inner Class Pattern',
    blocks: [
      {
        type: 'paragraph',
        text: 'The **inner class builder pattern** (popularized by Joshua Bloch\'s Effective Java) nests the Builder as a static inner class, enabling clean fluent syntax and immutable objects.'
      },
      {
        type: 'code',
        language: 'java',
        code: `public final class Pizza {
  private final String size;
  private final boolean cheese;
  private final boolean pepperoni;
  private final boolean mushrooms;
  private final boolean olives;
  private final boolean sausage;

  private Pizza(Builder builder) {
    this.size = builder.size;
    this.cheese = builder.cheese;
    this.pepperoni = builder.pepperoni;
    this.mushrooms = builder.mushrooms;
    this.olives = builder.olives;
    this.sausage = builder.sausage;
  }

  public static class Builder {
    private final String size;
    private boolean cheese = false;
    private boolean pepperoni = false;
    private boolean mushrooms = false;
    private boolean olives = false;
    private boolean sausage = false;

    public Builder(String size) {
      this.size = size;
    }

    public Builder cheese() {
      this.cheese = true;
      return this;
    }

    public Builder pepperoni() {
      this.pepperoni = true;
      return this;
    }

    public Builder mushrooms() {
      this.mushrooms = true;
      return this;
    }

    public Builder olives() {
      this.olives = true;
      return this;
    }

    public Builder sausage() {
      this.sausage = true;
      return this;
    }

    public Pizza build() {
      return new Pizza(this);
    }
  }

  @Override
  public String toString() {
    return "Pizza{" +
      "size='" + size + "'" +
      ", cheese=" + cheese +
      ", pepperoni=" + pepperoni +
      ", mushrooms=" + mushrooms +
      ", olives=" + olives +
      ", sausage=" + sausage + "}";
  }
}`,
        filename: 'Pizza.java'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Method Chaining Usage'
      },
      {
        type: 'code',
        language: 'java',
        code: `Pizza mediumPizza = new Pizza.Builder("medium")
  .cheese()
  .pepperoni()
  .mushrooms()
  .build();

Pizza largePizza = new Pizza.Builder("large")
  .cheese()
  .sausage()
  .olives()
  .build();

System.out.println(mediumPizza);
System.out.println(largePizza);`
      },
      {
        type: 'callout',
        variant: 'tip',
        title: 'Why Inner Class Builder?',
        text: 'Nesting the Builder enforces that the product class owns the builder logic. It also creates a clean namespace (Pizza.Builder) and enables easy access to product fields via the builder constructor.'
      }
    ]
  },
  {
    id: 'builder-java-stdlib',
    title: 'Builder in Java Standard Library',
    blocks: [
      {
        type: 'paragraph',
        text: 'Many JDK classes use the Builder pattern to handle optional parameters and complex configurations.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'StringBuilder'
      },
      {
        type: 'code',
        language: 'java',
        code: `StringBuilder sb = new StringBuilder()
  .append("Hello ")
  .append("World")
  .append("!");

System.out.println(sb.toString()); // "Hello World!"`
      },
      {
        type: 'heading',
        level: 3,
        text: 'Stream.Builder'
      },
      {
        type: 'code',
        language: 'java',
        code: `Stream<String> stream = Stream.builder()
  .add("apple")
  .add("banana")
  .add("cherry")
  .build();

stream.forEach(System.out::println);`
      },
      {
        type: 'heading',
        level: 3,
        text: 'HttpClient.newBuilder()'
      },
      {
        type: 'code',
        language: 'java',
        code: `HttpClient client = HttpClient.newBuilder()
  .version(HttpClient.Version.HTTP_2)
  .connectTimeout(Duration.ofSeconds(10))
  .followRedirects(HttpClient.Redirect.NORMAL)
  .proxy(ProxySelector.of(new InetSocketAddress("proxy.example.com", 80)))
  .build();`
      },
      {
        type: 'heading',
        level: 3,
        text: 'Builder Usage in JDK'
      },
      {
        type: 'table',
        headers: ['Builder Class', 'Use Case', 'Pattern Type'],
        rows: [
          ['StringBuilder', 'Building strings efficiently', 'Fluent inner class'],
          ['Stream.Builder', 'Constructing streams', 'Fluent inner class'],
          ['HttpClient.newBuilder()', 'HTTP client configuration', 'Fluent static factory'],
          ['ProcessBuilder', 'Process execution config', 'Mutable builder'],
          ['DateTimeFormatterBuilder', 'Custom date/time formats', 'Fluent inner class']
        ]
      }
    ]
  },
  {
    id: 'builder-vs-constructor',
    title: 'Builder vs Constructor vs Factory',
    blocks: [
      {
        type: 'paragraph',
        text: 'Understanding when to use each approach is crucial for clean API design.'
      },
      {
        type: 'table',
        headers: ['Approach', 'Parameters', 'Readability', 'Mutability', 'Best For'],
        rows: [
          ['Telescoping Constructor', 'Many overloads', 'Poor', 'Mutable', 'Not recommended'],
          ['All-args Constructor', 'Single constructor', 'Poor (confusing args)', 'Mutable', 'Simple beans'],
          ['JavaBean (setter)', 'Setters', 'Good', 'Mutable', 'Legacy frameworks'],
          ['Builder', '1+ required, many optional', 'Excellent', 'Immutable', 'Complex objects'],
          ['Static Factory', 'Named method', 'Good', 'Either', 'Enum-like creation']
        ]
      },
      {
        type: 'callout',
        variant: 'important',
        title: '4+ Parameter Rule',
        text: 'If a constructor has 4 or more parameters, **strongly consider using Builder**. It drastically improves code readability and reduces parameter-order errors.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Decision Guide'
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Is there 1 required parameter? → Use simple constructor',
          'Are there 2-3 optional parameters? → Consider builder if domain-specific names improve clarity',
          'Are there 4+ optional parameters? → Use builder (almost always)',
          'Is object configuration complex and varied? → Use builder with optional Director',
          'Do you need immutability guarantees? → Use builder'
        ]
      }
    ]
  },
  {
    id: 'prototype-concept',
    title: 'Prototype Pattern: Concept & Intent',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Problem: Expensive Object Creation'
      },
      {
        type: 'paragraph',
        text: 'Sometimes creating a new object is expensive (database queries, file I/O, complex initialization). If you already have a similar object, **clone it and modify** rather than create from scratch.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Prototype Pattern Intent'
      },
      {
        type: 'paragraph',
        text: 'Specify the kinds of objects to create using a prototypical instance, and create new objects by **copying** that prototype. Objects act as blueprints for creating similar objects.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'When to Use'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Creating objects is expensive (DB connections, complex graphs)',
          'You have a prototype that can be reused and modified',
          'You need independent copies to avoid shared state issues',
          'The exact types to create are unknown until runtime'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Architecture'
      },
      {
        type: 'diagram',
        format: 'mermaid',
        content: 'classDiagram\n  class Prototype {\n    +clone()* Prototype\n  }\n  class ConcretePrototypeA {\n    +clone() ConcretePrototypeA\n  }\n  class ConcretePrototypeB {\n    +clone() ConcretePrototypeB\n  }\n  class Client {\n    -prototype: Prototype\n    +operation()\n  }\n  Prototype <|-- ConcretePrototypeA\n  Prototype <|-- ConcretePrototypeB\n  Client --> Prototype',
        label: 'Prototype Pattern Structure'
      }
    ]
  },
  {
    id: 'prototype-shallow-deep',
    title: 'Shallow Copy vs Deep Copy',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'The Copying Problem'
      },
      {
        type: 'paragraph',
        text: 'When cloning objects with references to other objects, you must decide: copy only the references (shallow) or recursively copy the entire graph (deep)?'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Shallow Copy'
      },
      {
        type: 'diagram',
        format: 'mermaid',
        content: 'graph LR\n  A["Original Object<br/>field: int<br/>nested: ref"]--shares--->D["Nested Object"]\n  B["Shallow Copy<br/>field: int<br/>nested: ref"]--shares--->D\n  style D fill:#ffcccc',
        label: 'Shallow Copy: Both point to same nested object'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Deep Copy'
      },
      {
        type: 'diagram',
        format: 'mermaid',
        content: 'graph LR\n  A["Original Object<br/>field: int<br/>nested: ref"]-->D["Nested Object"]\n  B["Deep Copy<br/>field: int<br/>nested: ref"]-->E["Nested Copy"]\n  style D fill:#ccffcc\n  style E fill:#ccffcc',
        label: 'Deep Copy: Nested objects are also cloned'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Example: Shallow vs Deep'
      },
      {
        type: 'code',
        language: 'java',
        code: `public class Configuration {
  public String name;
  public List<String> tags;

  public Configuration(String name) {
    this.name = name;
    this.tags = new ArrayList<>();
  }

  // Shallow copy
  public Configuration shallowClone() {
    Configuration copy = new Configuration(this.name);
    copy.tags = this.tags;  // Same reference!
    return copy;
  }

  // Deep copy
  public Configuration deepClone() {
    Configuration copy = new Configuration(this.name);
    copy.tags = new ArrayList<>(this.tags);  // New list
    return copy;
  }
}

// Usage
Configuration original = new Configuration("prod");
original.tags.add("critical");

Configuration shallow = original.shallowClone();
Configuration deep = original.deepClone();

original.tags.add("deprecated");
System.out.println(shallow.tags);  // [critical, deprecated] - SHARED!
System.out.println(deep.tags);     // [critical] - independent`
      }
    ]
  },
  {
    id: 'prototype-implementation',
    title: 'Prototype Implementation Approaches',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Three Approaches to Cloning'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Approach 1: Java Cloneable Interface'
      },
      {
        type: 'code',
        language: 'java',
        code: `public class Document implements Cloneable {
  private String title;
  private String content;
  private List<String> metadata;

  public Document(String title) {
    this.title = title;
    this.metadata = new ArrayList<>();
  }

  @Override
  public Document clone() {
    try {
      Document copy = (Document) super.clone();
      copy.metadata = new ArrayList<>(this.metadata);  // Deep copy list
      return copy;
    } catch (CloneNotSupportedException e) {
      throw new AssertionError();
    }
  }
}`,
        filename: 'Document.java'
      },
      {
        type: 'callout',
        variant: 'warning',
        title: 'Cloneable Pitfalls',
        text: '`Cloneable` is a **marker interface** with no methods—the protocol is poorly designed. No compiler guarantee of `clone()` method, casting required, checked exception buried in super.clone(). Many consider it a Java mistake. Prefer copy constructors or copy factories.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Approach 2: Copy Constructor (Recommended)'
      },
      {
        type: 'code',
        language: 'java',
        code: `public class Employee {
  private String name;
  private double salary;
  private Department department;

  public Employee(String name, double salary, Department dept) {
    this.name = name;
    this.salary = salary;
    this.department = dept;
  }

  // Copy constructor - EXPLICIT and TYPE-SAFE
  public Employee(Employee original) {
    this.name = original.name;
    this.salary = original.salary;
    this.department = new Department(original.department);  // Deep copy
  }
}

// Usage
Employee emp1 = new Employee("Alice", 100000, deptEng);
Employee emp2 = new Employee(emp1);  // Clear intent!`
      },
      {
        type: 'heading',
        level: 3,
        text: 'Approach 3: Static Copy Factory'
      },
      {
        type: 'code',
        language: 'java',
        code: `public class User {
  private String username;
  private String email;
  private Set<String> roles;

  private User(String username, String email, Set<String> roles) {
    this.username = username;
    this.email = email;
    this.roles = roles;
  }

  // Static factory method for copying
  public static User copyOf(User original) {
    Set<String> rolesCopy = new HashSet<>(original.roles);
    return new User(original.username, original.email, rolesCopy);
  }

  // Named factory for variations
  public static User copyWithEmail(User original, String newEmail) {
    Set<String> rolesCopy = new HashSet<>(original.roles);
    return new User(original.username, newEmail, rolesCopy);
  }
}

// Usage
User user1 = new User("john", "john@example.com", Set.of("admin"));
User user2 = User.copyOf(user1);
User user3 = User.copyWithEmail(user1, "john.new@example.com");`
      },
      {
        type: 'callout',
        variant: 'tip',
        title: 'Recommendation',
        text: '**Copy constructor** is the cleanest and most idiomatic Java approach. It\'s explicit, type-safe, and requires no casting or exception handling.'
      }
    ]
  },
  {
    id: 'object-pool-concept',
    title: 'Object Pool Pattern: Concept & Intent',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Problem: Reusing Expensive Objects'
      },
      {
        type: 'paragraph',
        text: 'Creating and destroying objects repeatedly is expensive. Database connections, thread pools, and large arrays are prime candidates for reuse. Instead of `new Connection()` each time, **acquire from a pool** and **return when done**.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Object Pool Intent'
      },
      {
        type: 'paragraph',
        text: 'Recycle objects instead of creating and destroying them. Maintain a pool of reusable objects in a **ready** state, allowing clients to acquire and release them as needed.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Benefits'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Reduces garbage collection pressure',
          'Avoids repeated initialization overhead',
          'Controls resource limits (max connections)',
          'Improves latency for repeated operations'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Lifecycle'
      },
      {
        type: 'diagram',
        format: 'mermaid',
        content: 'flowchart TD\n  A["Client Requests Object"] --> B["Is Pool Non-Empty?"]\n  B -->|Yes| C["Acquire from Pool"]\n  B -->|No| D["Create New Object"]\n  C --> E["Object in Use"]\n  D --> E\n  E --> F["Client Returns Object"]\n  F --> G["Reset Object State"]\n  G --> H["Return to Pool"]\n  H --> I["Ready for Reuse"]',
        label: 'Object Pool Lifecycle'
      }
    ]
  },
  {
    id: 'object-pool-implementation',
    title: 'Generic ObjectPool Implementation',
    blocks: [
      {
        type: 'code',
        language: 'java',
        code: `import java.util.Queue;
import java.util.LinkedList;
import java.util.concurrent.locks.ReentrantLock;

public class ObjectPool<T> {
  private Queue<T> available;
  private Queue<T> inUse;
  private ObjectFactory<T> factory;
  private int maxSize;
  private ReentrantLock lock = new ReentrantLock();

  public interface ObjectFactory<T> {
    T create();
    void reset(T obj);
  }

  public ObjectPool(ObjectFactory<T> factory, int initialSize, int maxSize) {
    this.factory = factory;
    this.maxSize = maxSize;
    this.available = new LinkedList<>();
    this.inUse = new LinkedList<>();

    for (int i = 0; i < initialSize; i++) {
      available.offer(factory.create());
    }
  }

  public T acquire() throws InterruptedException {
    lock.lock();
    try {
      if (!available.isEmpty()) {
        T obj = available.poll();
        inUse.offer(obj);
        return obj;
      } else if (inUse.size() < maxSize) {
        T obj = factory.create();
        inUse.offer(obj);
        return obj;
      } else {
        throw new RuntimeException("Pool exhausted: max " + maxSize + " objects");
      }
    } finally {
      lock.unlock();
    }
  }

  public void release(T obj) {
    lock.lock();
    try {
      inUse.remove(obj);
      factory.reset(obj);
      available.offer(obj);
    } finally {
      lock.unlock();
    }
  }

  public int getAvailableSize() {
    lock.lock();
    try {
      return available.size();
    } finally {
      lock.unlock();
    }
  }

  public int getInUseSize() {
    lock.lock();
    try {
      return inUse.size();
    } finally {
      lock.unlock();
    }
  }
}`,
        filename: 'ObjectPool.java'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Example: Database Connection Pool'
      },
      {
        type: 'code',
        language: 'java',
        code: `public class DatabaseConnection {
  private String connectionId;
  private boolean connected;

  public DatabaseConnection(String id) {
    this.connectionId = id;
    this.connected = false;
  }

  public void connect() {
    connected = true;
    System.out.println("Connected: " + connectionId);
  }

  public void disconnect() {
    connected = false;
    System.out.println("Disconnected: " + connectionId);
  }

  public void executeQuery(String sql) {
    if (!connected) throw new RuntimeException("Not connected!");
    System.out.println("Executing: " + sql);
  }

  public void reset() {
    // Reset state without closing connection
    System.out.println("Resetting: " + connectionId);
  }
}

// Pool factory
ObjectPool<DatabaseConnection> connectionPool = new ObjectPool<>(
  new ObjectPool.ObjectFactory<DatabaseConnection>() {
    private int counter = 0;

    @Override
    public DatabaseConnection create() {
      DatabaseConnection conn = new DatabaseConnection("Conn-" + (++counter));
      conn.connect();
      return conn;
    }

    @Override
    public void reset(DatabaseConnection conn) {
      conn.reset();
    }
  },
  5,   // initial size
  10   // max size
);

// Usage
DatabaseConnection conn = connectionPool.acquire();
conn.executeQuery("SELECT * FROM users");
connectionPool.release(conn);

DatabaseConnection conn2 = connectionPool.acquire();  // Reused!
conn2.executeQuery("SELECT * FROM products");
connectionPool.release(conn2);`
      }
    ]
  },
  {
    id: 'chapter03-summary',
    title: 'Chapter 3 Summary & Decision Guide',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Creational Patterns II Summary'
      },
      {
        type: 'table',
        headers: ['Pattern', 'Problem', 'Solution', 'Key Classes'],
        rows: [
          ['Builder', 'Too many constructor parameters', 'Fluent step-by-step construction', 'Builder, Director, Product'],
          ['Prototype', 'Expensive object creation', 'Clone existing object', 'Prototype, ConcretePrototype'],
          ['Object Pool', 'Repeated creation/destruction overhead', 'Reuse pooled objects', 'ObjectPool, ObjectFactory']
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Decision Guide: When to Use Each'
      },
      {
        type: 'diagram',
        format: 'mermaid',
        content: 'flowchart TD\n  A["Need to Create Object"] --> B["Is creation expensive<br/>or complex?"]\n  B -->|No| C["Use simple constructor"]\n  B -->|Yes| D["Is object similar to<br/>an existing one?"]\n  D -->|Yes| E["Use Prototype<br/>Clone and modify"]  \n  D -->|No| F["Do you need to build<br/>step-by-step?"]\n  F -->|Yes| G["Use Builder<br/>Fluent interface"]\n  F -->|No| H["Will object be created<br/>repeatedly?"]\n  H -->|Yes| I["Use Object Pool<br/>Acquire/Release cycle"]\n  H -->|No| J["Use static factory"]\n  style E fill:#ccffcc\n  style G fill:#ccffcc\n  style I fill:#ccffcc',
        label: 'Creational Pattern Decision Flow'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Key Takeaways'
      },
      {
        type: 'list',
        ordered: true,
        items: [
          '**Builder**: Use for 4+ parameters or complex initialization logic. Prefer inner static class with private constructor.',
          '**Prototype**: Use copy constructor over Cloneable. Deep copy nested mutable objects.',
          '**Object Pool**: Essential for connections, threads, buffers. Thread-safe with locks. Provide reset() method.',
          'Combine patterns: Builder to construct, then place in ObjectPool for reuse.',
          'Java stdlib examples: StringBuilder, Stream.Builder, HttpClient.newBuilder()'
        ]
      }
    ]
  }
];
