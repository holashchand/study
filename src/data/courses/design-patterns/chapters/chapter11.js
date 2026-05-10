export const sections = [
  {
    id: 'di-concept',
    title: 'Dependency Injection: Core Concept',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'What is Dependency Injection?'
      },
      {
        type: 'paragraph',
        text: 'Dependency Injection (DI) is a design principle that states: **do not create your dependencies, receive them**. Instead of an object creating the objects it needs (tight coupling), those dependencies are provided externally (loose coupling). This implements the broader principle of **Inversion of Control (IoC)**.'
      },
      {
        type: 'paragraph',
        text: 'The core idea: objects should depend on `abstractions` (interfaces), not `concrete implementations`. A container or factory wires up these dependencies, making your code flexible, testable, and maintainable.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Tight Coupling vs Loose Coupling'
      },
      {
        type: 'diagram',
        format: 'mermaid',
        content: 'classDiagram\n  class UserServiceTight {\n    -repository: UserRepositoryImpl\n    +getUser(id)\n  }\n  class UserRepositoryImpl {\n    -database: Database\n    +findById(id)\n  }\n  class Database\n  UserServiceTight *-- UserRepositoryImpl\n  UserRepositoryImpl *-- Database\n  note for UserServiceTight "Tight Coupling: UserService knows concrete implementation"\n\n  class UserServiceLoose {\n    -repository: UserRepository\n    +getUser(id)\n  }\n  class UserRepository {\n    +findById(id)\n  }\n  class UserRepositorySQL {\n    -db: Database\n    +findById(id)\n  }\n  class UserRepositoryMongo {\n    +findById(id)\n  }\n  UserServiceLoose *-- UserRepository\n  UserRepository <|-- UserRepositorySQL\n  UserRepository <|-- UserRepositoryMongo\n  note for UserServiceLoose "Loose Coupling: UserService depends on interface"',
        label: 'Without DI (left) vs With DI (right): Decoupling with interfaces'
      },
      {
        type: 'callout',
        variant: 'important',
        title: 'Key Principle',
        text: '**Depend on abstractions, not concrete implementations.** This allows you to swap implementations without changing client code.'
      }
    ]
  },
  {
    id: 'di-types',
    title: 'Types of Dependency Injection',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Three Main DI Patterns'
      },
      {
        type: 'paragraph',
        text: 'There are three primary ways to inject dependencies into a class. Each has different trade-offs in terms of clarity, flexibility, and testability.'
      },
      {
        type: 'table',
        headers: ['Type', 'Pros', 'Cons', 'When to Use'],
        rows: [
          ['Constructor Injection', 'Immutable, clear dependencies, all required deps obvious', 'Constructor can get large, harder to subclass', 'PREFERRED: Most classes, ensures immutability'],
          ['Setter Injection', 'Flexible, optional dependencies, cleaner constructor', 'Object mutable, hard to track required deps, partial construction risk', 'Optional dependencies, frameworks like Spring'],
          ['Field Injection', 'Very clean syntax, good for frameworks', 'Hard to test without container, unclear dependencies, mutation risk', 'Framework-heavy code only (Spring @Autowired)']
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Constructor Injection Example'
      },
      {
        type: 'code',
        language: 'java',
        code: 'public interface UserRepository {\n  User findById(int id);\n}\n\npublic class UserService {\n  private final UserRepository repository;\n\n  // Constructor Injection: dependencies passed in\n  public UserService(UserRepository repository) {\n    this.repository = repository;\n  }\n\n  public User getUser(int id) {\n    return repository.findById(id);\n  }\n}',
        filename: 'UserService.java'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Setter Injection Example'
      },
      {
        type: 'code',
        language: 'java',
        code: 'public class EmailService {\n  private NotificationProvider provider;\n\n  // Setter Injection: optional dependency\n  public void setNotificationProvider(NotificationProvider provider) {\n    this.provider = provider;\n  }\n\n  public void sendEmail(String to, String message) {\n    if (provider != null) {\n      provider.send(to, message);\n    }\n  }\n}',
        filename: 'EmailService.java'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Field Injection Example (Spring)'
      },
      {
        type: 'code',
        language: 'java',
        code: 'import org.springframework.beans.factory.annotation.Autowired;\n\npublic class OrderService {\n  // Field Injection: framework injects directly\n  @Autowired\n  private OrderRepository orderRepository;\n\n  @Autowired\n  private PaymentService paymentService;\n\n  public Order createOrder(Order order) {\n    paymentService.process(order);\n    return orderRepository.save(order);\n  }\n}',
        filename: 'OrderService.java (Spring Style)'
      },
      {
        type: 'tip',
        title: 'Best Practice',
        text: 'Prefer constructor injection: it makes required dependencies explicit and keeps objects immutable.'
      }
    ]
  },
  {
    id: 'di-manual',
    title: 'Manual Dependency Injection (Poor Man\'s DI)',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Building Dependency Graphs Without a Framework'
      },
      {
        type: 'paragraph',
        text: 'You don\'t need a framework to implement DI. You can manually compose your object graph in a `main()` method or factory. This is often called **"Poor Man\'s DI"** or **"Pure DI"**. It\'s transparent and has zero runtime magic.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Full Example: User Management System'
      },
      {
        type: 'code',
        language: 'java',
        code: '// Interfaces\npublic interface UserRepository {\n  User findById(int id);\n  void save(User user);\n}\n\npublic interface Logger {\n  void log(String message);\n}\n\n// Concrete implementations\npublic class SqlUserRepository implements UserRepository {\n  private final DatabaseConnection db;\n\n  public SqlUserRepository(DatabaseConnection db) {\n    this.db = db;\n  }\n\n  public User findById(int id) {\n    return db.query("SELECT * FROM users WHERE id = ?", id);\n  }\n\n  public void save(User user) {\n    db.execute("INSERT INTO users VALUES (?, ?)", user.id, user.name);\n  }\n}\n\npublic class ConsoleLogger implements Logger {\n  public void log(String message) {\n    System.out.println("[LOG] " + message);\n  }\n}\n\n// Service that depends on interfaces\npublic class UserService {\n  private final UserRepository repository;\n  private final Logger logger;\n\n  public UserService(UserRepository repository, Logger logger) {\n    this.repository = repository;\n    this.logger = logger;\n  }\n\n  public User getUser(int id) {\n    logger.log("Fetching user: " + id);\n    return repository.findById(id);\n  }\n\n  public void registerUser(User user) {\n    logger.log("Registering user: " + user.name);\n    repository.save(user);\n  }\n}\n\n// Manual DI: Compose in main()\npublic class Main {\n  public static void main(String[] args) {\n    // 1. Create low-level dependencies\n    DatabaseConnection db = new DatabaseConnection("jdbc:mysql://localhost/mydb");\n    Logger logger = new ConsoleLogger();\n\n    // 2. Create intermediate dependencies\n    UserRepository userRepo = new SqlUserRepository(db);\n\n    // 3. Create service and inject dependencies\n    UserService userService = new UserService(userRepo, logger);\n\n    // 4. Use the service\n    User user = userService.getUser(1);\n    userService.registerUser(new User(2, "Alice"));\n  }\n}',
        filename: 'ManualDIExample.java'
      },
      {
        type: 'callout',
        variant: 'note',
        title: 'Advantages of Manual DI',
        text: '✓ No magic: you see exactly what\'s being created\n✓ No runtime reflection overhead\n✓ Easy to debug (just follow the constructors)\n✓ No dependencies on a framework'
      },
      {
        type: 'callout',
        variant: 'warning',
        title: 'Disadvantages',
        text: '✗ Boilerplate: large graphs require lots of code\n✗ Configuration scattered in code\n✗ Hard to switch implementations at runtime\n✗ Doesn\'t scale well for large applications'
      }
    ]
  },
  {
    id: 'di-ioc-container',
    title: 'IoC Containers and Frameworks',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Automating Dependency Wiring'
      },
      {
        type: 'paragraph',
        text: 'An **IoC Container** (Inversion of Control Container) is a framework that automatically creates and wires up dependencies based on configuration or annotations. Popular examples: Spring Framework, Guice, Dagger, CDI.'
      },
      {
        type: 'paragraph',
        text: 'Instead of manually writing the composition code, you declare dependencies (via annotations, XML, or code config), and the container handles the rest.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'How an IoC Container Works'
      },
      {
        type: 'diagram',
        format: 'mermaid',
        content: 'flowchart TD\n  A["1. Read Configuration<br/>(Annotations, XML, Code)"] --> B["2. Scan Classpath<br/>(Find @Component, @Bean, etc.)"] --> C["3. Analyze Dependencies<br/>(Constructor, Setter params)"]\n  C --> D["4. Determine Creation Order<br/>(Topological sort)"]\n  D --> E["5. Instantiate Objects<br/>(Recursively)"]\n  E --> F["6. Wire Dependencies<br/>(Inject into constructors, setters)"]\n  F --> G["7. Cache Singletons<br/>(For reuse)"]\n  G --> H["Application requests bean from container"]\n  H --> I["Container returns wired instance"]',
        label: 'IoC Container lifecycle'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Spring Framework Example (Conceptual)'
      },
      {
        type: 'code',
        language: 'java',
        code: 'import org.springframework.stereotype.Component;\nimport org.springframework.beans.factory.annotation.Autowired;\n\n// Declare components to be managed by Spring\n@Component\npublic class SqlUserRepository implements UserRepository {\n  // Spring injects DatabaseConnection\n  @Autowired\n  private DatabaseConnection db;\n\n  public User findById(int id) {\n    return db.query("SELECT * FROM users WHERE id = ?", id);\n  }\n}\n\n@Component\npublic class ConsoleLogger implements Logger {\n  public void log(String message) {\n    System.out.println("[LOG] " + message);\n  }\n}\n\n@Component\npublic class UserService {\n  private final UserRepository repository;\n  private final Logger logger;\n\n  // Spring sees constructor params and injects matching beans\n  @Autowired\n  public UserService(UserRepository repository, Logger logger) {\n    this.repository = repository;\n    this.logger = logger;\n  }\n\n  public User getUser(int id) {\n    logger.log("Fetching user: " + id);\n    return repository.findById(id);\n  }\n}\n\n// Application startup\npublic class Main {\n  public static void main(String[] args) {\n    // Spring container auto-discovers and wires everything\n    var context = new AnnotationConfigApplicationContext("com.example");\n    \n    // Get wired service from container\n    UserService userService = context.getBean(UserService.class);\n    User user = userService.getUser(1);\n  }\n}',
        filename: 'SpringDIExample.java'
      },
      {
        type: 'tip',
        title: 'IoC Container Benefits',
        text: 'Reduces boilerplate, enables easy bean switching (e.g., test double substitution), centralized configuration, AOP support, lifecycle management.'
      }
    ]
  },
  {
    id: 'cqrs-concept',
    title: 'CQRS: Command Query Responsibility Segregation',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Separating Reads and Writes'
      },
      {
        type: 'paragraph',
        text: 'CQRS is an architectural pattern that separates the model for **updating data** (writes/commands) from the model for **reading data** (queries). Instead of a single entity that handles both reads and writes, you maintain separate read and write models.'
      },
      {
        type: 'paragraph',
        text: 'Benefits: optimized query performance, independent scaling, simpler business logic per model, eventual consistency, event sourcing integration.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'CQRS Architecture'
      },
      {
        type: 'diagram',
        format: 'mermaid',
        content: 'flowchart LR\n  A["Client"] --> B["Command API<br/>(POST, PUT, DELETE)"]\n  A --> C["Query API<br/>(GET)"]\n  B --> D["Command Handler<br/>(Process & Validate)"]\n  D --> E["Event Store<br/>(Append-only log)"]\n  E --> F["Event Processors<br/>(Projectors)"]\n  F --> G["Read Model DB<br/>(Optimized for queries)"]\n  C --> G\n  E -.-> H["Event Log<br/>(Audit trail)"]',
        label: 'CQRS: Separate command and query sides'
      },
      {
        type: 'callout',
        variant: 'note',
        title: 'Key Insight',
        text: 'The write side (command) and read side (query) have different optimization goals. Write side cares about consistency and transactions; read side cares about speed and availability.'
      }
    ]
  },
  {
    id: 'cqrs-implementation',
    title: 'CQRS Implementation Example',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Order Management with CQRS'
      },
      {
        type: 'paragraph',
        text: 'Here\'s a practical example: an order system where `CreateOrderCommand` writes to an event store, and a separate `OrderQueryService` maintains an optimized read model for order lookups.'
      },
      {
        type: 'code',
        language: 'java',
        code: '// === WRITE SIDE: Commands & Handlers ===\n\n// Command (intent)\npublic class CreateOrderCommand {\n  public final int customerId;\n  public final List<OrderItem> items;\n  public final String shippingAddress;\n\n  public CreateOrderCommand(int customerId, List<OrderItem> items, String address) {\n    this.customerId = customerId;\n    this.items = items;\n    this.shippingAddress = address;\n  }\n}\n\n// Command Handler (business logic)\npublic class OrderCommandHandler {\n  private final EventStore eventStore;\n\n  public OrderCommandHandler(EventStore eventStore) {\n    this.eventStore = eventStore;\n  }\n\n  public void handle(CreateOrderCommand cmd) {\n    // Validate\n    if (cmd.items.isEmpty()) {\n      throw new IllegalArgumentException("Order must have items");\n    }\n\n    // Create domain events\n    Event orderCreated = new OrderCreatedEvent(\n      UUID.randomUUID(),\n      cmd.customerId,\n      cmd.items,\n      cmd.shippingAddress,\n      Instant.now()\n    );\n\n    // Append to event store (immutable log)\n    eventStore.append(orderCreated);\n  }\n}\n\n// === READ SIDE: Queries & View Service ===\n\npublic class OrderQueryService {\n  private final ReadModelDB readDB;\n\n  public OrderQueryService(ReadModelDB readDB) {\n    this.readDB = readDB;\n  }\n\n  // Query: fetch optimized read model\n  public OrderDTO getOrder(UUID orderId) {\n    return readDB.fetchOrder(orderId);\n  }\n\n  public List<OrderDTO> getCustomerOrders(int customerId) {\n    return readDB.fetchOrdersByCustomer(customerId);\n  }\n\n  public long getPendingOrderCount() {\n    return readDB.countOrdersByStatus("PENDING");\n  }\n}\n\n// === PROJECTOR: Keeps Read Model in Sync ===\n\npublic class OrderProjector {\n  private final ReadModelDB readDB;\n\n  public void on(OrderCreatedEvent event) {\n    // When event occurs, update read model\n    readDB.insertOrder(new OrderDTO(\n      event.orderId,\n      event.customerId,\n      event.items,\n      "PENDING",\n      event.createdAt\n    ));\n  }\n\n  public void on(OrderShippedEvent event) {\n    readDB.updateOrderStatus(event.orderId, "SHIPPED");\n  }\n}\n\n// === APPLICATION FLOW ===\n\npublic class OrderApplication {\n  public static void main(String[] args) {\n    EventStore eventStore = new InMemoryEventStore();\n    ReadModelDB readDB = new MySqlReadModelDB();\n    OrderProjector projector = new OrderProjector(readDB);\n\n    // Wire event store to projector (subscribe)\n    eventStore.subscribe(projector);\n\n    // Write side: create order via command\n    OrderCommandHandler commandHandler = new OrderCommandHandler(eventStore);\n    commandHandler.handle(new CreateOrderCommand(\n      123,\n      List.of(new OrderItem("Product A", 2)),\n      "123 Main St"\n    ));\n\n    // Read side: query optimized view (eventually consistent)\n    OrderQueryService queryService = new OrderQueryService(readDB);\n    OrderDTO order = queryService.getOrder(/* orderId */);\n    System.out.println("Order status: " + order.status);\n  }\n}',
        filename: 'CQRSOrderExample.java'
      },
      {
        type: 'callout',
        variant: 'tip',
        title: 'When to Use CQRS',
        text: 'Complex domains with rich business logic, read-heavy workloads, audit trails important, scalability concerns, or when integrating with Event Sourcing.'
      }
    ]
  },
  {
    id: 'event-sourcing-concept',
    title: 'Event Sourcing: Store Events, Not State',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'The Event Sourcing Pattern'
      },
      {
        type: 'paragraph',
        text: 'Instead of storing the **current state** of an entity (traditional CRUD), **Event Sourcing** stores a **log of all events** that happened. The current state is derived by replaying all events from the beginning.'
      },
      {
        type: 'paragraph',
        text: 'Example: Instead of storing "Account balance: $1000", store [AccountCreated, MoneyDeposited($500), MoneyWithdrawn($200), MoneyDeposited($700)] → replay to get balance $1000.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Event Sourcing Flow'
      },
      {
        type: 'diagram',
        format: 'mermaid',
        content: 'sequenceDiagram\n  Client->>CommandHandler: CreateOrder(items)\n  CommandHandler->>Domain: Validate & apply\n  Domain->>EventStore: Append OrderCreatedEvent\n  EventStore->>EventLog: [OrderCreatedEvent]\n  EventStore->>Projector: Notify event\n  Projector->>ReadModel: Update OrderReadModel\n  Client->>QueryService: GetOrder(id)\n  QueryService->>ReadModel: Query\n  ReadModel-->>Client: OrderDTO (current state)',
        label: 'Event Sourcing with projections'
      },
      {
        type: 'callout',
        variant: 'important',
        title: 'Key Advantage',
        text: '**Complete audit trail**: Every change to your data is recorded. You can see exactly what happened, when, and replay to any point in time.'
      }
    ]
  },
  {
    id: 'event-sourcing-vs-crud',
    title: 'Event Sourcing vs Traditional CRUD',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Comparison'
      },
      {
        type: 'table',
        headers: ['Aspect', 'Traditional CRUD', 'Event Sourcing'],
        rows: [
          ['Storage', 'Current state in rows', 'Immutable event log'],
          ['Audit Trail', 'None (unless added separately)', 'Built-in: all events logged'],
          ['Complexity', 'Simpler for basic CRUD', 'More complex upfront'],
          ['Rebuild State', 'Query DB', 'Replay events (slow but possible)'],
          ['Temporal Queries', 'Hard (no history)', 'Easy (query at any point)'],
          ['Concurrency', 'Traditional locking/versioning', 'Event version numbers'],
          ['Performance (reads)', 'Fast single query', 'Depends on materialized view'],
          ['Performance (writes)', 'Single update', 'Append event (usually faster)'],
          ['Data Loss', 'Update overwrites previous value', 'Event log is immutable backup'],
          ['When to Use', 'Simple CRUD apps, standard DB schemas', 'Complex domains, audit critical, temporal queries needed']
        ]
      },
      {
        type: 'callout',
        variant: 'note',
        title: 'Hybrid Approach',
        text: 'Many systems use Event Sourcing on the **write side** (append events) with CQRS **read side** (materialized views in traditional DB). Best of both worlds.'
      }
    ]
  },
  {
    id: 'anti-patterns-overview',
    title: 'Anti-Patterns: Recognized Bad Solutions',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'What Are Anti-Patterns?'
      },
      {
        type: 'paragraph',
        text: 'An **anti-pattern** is a commonly used solution to a problem that appears to be beneficial but in the long run produces more bad consequences than good ones. They are the opposite of design patterns: recurring, recognizable solutions that actually make code harder to maintain, test, and extend.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Why Anti-Patterns Exist'
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Pressure to ship code fast (no time for proper design)',
          'Lack of experience or knowledge',
          'Copy-paste from other projects without understanding',
          'Over-engineering for "future flexibility"',
          'Misunderstanding of a design pattern (Cargo Cult Programming)',
          'Legacy code nobody dares refactor',
          'Wrong tool for the job'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Anti-Patterns by Category'
      },
      {
        type: 'diagram',
        format: 'mermaid',
        content: 'flowchart TD\n  A["Anti-Patterns"] --> B["Architectural"]\n  A --> C["Object-Oriented"]\n  A --> D["Concurrency"]\n  B --> B1["Spaghetti Code<br/>Lava Flow<br/>Big Ball of Mud"]\n  C --> C1["God Object<br/>Feature Envy<br/>Anemic Model<br/>Golden Hammer"]\n  D --> D1["Race Condition<br/>Deadlock<br/>Busy Waiting"]',
        label: 'Anti-pattern categories'
      }
    ]
  },
  {
    id: 'common-anti-patterns',
    title: 'Four Key Anti-Patterns Detailed',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'God Object Anti-Pattern'
      },
      {
        type: 'paragraph',
        text: '**Description**: A class that knows and does too much. It centralizes all business logic, making it impossible to test, modify, or reuse individual features.'
      },
      {
        type: 'paragraph',
        text: '**Code Smells**: Class has 100+ methods, 10+ fields, mixed responsibilities (UserManager handles users, orders, payments, and emails), hard-to-name class.'
      },
      {
        type: 'code',
        language: 'java',
        code: '// ANTI-PATTERN: God Object\npublic class UserManager {\n  public void createUser(String name) { /* ... */ }\n  public void updateUser(int id, String name) { /* ... */ }\n  public void deleteUser(int id) { /* ... */ }\n  public void sendEmail(String to, String msg) { /* ... */ }\n  public void processPayment(int userId, double amount) { /* ... */ }\n  public void generateReport(int userId) { /* ... */ }\n  public void backupDatabase() { /* ... */ }\n  // ... 50 more methods\n}',
        filename: 'GodObjectAntiPattern.java'
      },
      {
        type: 'paragraph',
        text: '**Fix**: Break into smaller classes, each with single responsibility (Single Responsibility Principle). UserService, EmailService, PaymentService, ReportService.'
      },
      {
        type: 'divider'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Spaghetti Code Anti-Pattern'
      },
      {
        type: 'paragraph',
        text: '**Description**: Code with tangled, hard-to-follow control flow. No clear structure, deeply nested conditionals, global state everywhere.'
      },
      {
        type: 'paragraph',
        text: '**Code Smells**: Deeply nested if-else (5+ levels), gotos (rare in Java), global variables, functions with multiple entry/exit points, no clear structure.'
      },
      {
        type: 'code',
        language: 'java',
        code: '// ANTI-PATTERN: Spaghetti Code\npublic void processOrder(Order order) {\n  if (order != null) {\n    if (order.items.size() > 0) {\n      if (order.customer != null) {\n        if (order.customer.balance >= order.total) {\n          if (warehouse.hasStock(order.items)) {\n            order.status = "PROCESSING";\n            if (paymentGateway.charge(order.customer, order.total)) {\n              warehouse.deductStock(order.items);\n              if (notificationService != null) {\n                notificationService.sendConfirmation(order.customer.email);\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}',
        filename: 'SpaghettiCodeAntiPattern.java'
      },
      {
        type: 'paragraph',
        text: '**Fix**: Use early returns (guard clauses), extract methods, separate concerns, use State pattern for order states.'
      },
      {
        type: 'divider'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Golden Hammer Anti-Pattern'
      },
      {
        type: 'paragraph',
        text: '**Description**: Using the same solution (technology, pattern, library) for every problem, regardless of whether it\'s appropriate. "When you have a hammer, everything looks like a nail."'
      },
      {
        type: 'paragraph',
        text: '**Examples**: Always using Java Maps instead of domain objects, using Singleton for everything, forcing MVC into every scenario, applying Decorator pattern everywhere.'
      },
      {
        type: 'callout',
        variant: 'warning',
        title: 'Problem',
        text: 'Over-engineering, unnecessary complexity, forcing wrong tool into wrong context, maintenance burden.'
      },
      {
        type: 'divider'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Lava Flow Anti-Pattern'
      },
      {
        type: 'paragraph',
        text: '**Description**: Dead code that nobody dares remove. Like lava from a volcano, old code solidifies and stays, even though it\'s no longer used. The codebase accumulates layers of dead code that slow down understanding and refactoring.'
      },
      {
        type: 'paragraph',
        text: '**Code Smells**: Unused methods, commented-out code blocks, deprecated classes never removed, "legacy" packages with cryptic names.'
      },
      {
        type: 'callout',
        variant: 'tip',
        title: 'Solution',
        text: 'Use version control. Don\'t fear deleting code—it\'s in git history. Run automated tests to ensure nothing breaks. Delete aggressively.'
      }
    ]
  },
  {
    id: 'refactoring-anti-patterns',
    title: 'Identifying and Refactoring Anti-Patterns',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Refactoring Strategy'
      },
      {
        type: 'table',
        headers: ['Anti-Pattern', 'Detection Signs', 'Refactoring Approach', 'Pattern to Apply'],
        rows: [
          ['God Object', 'Class has 50+ methods, many responsibilities, hard to test', 'Extract classes by responsibility, split into services', 'Single Responsibility Principle, Facade'],
          ['Spaghetti Code', 'Deep nesting (5+ levels), complex control flow, hard to follow', 'Early returns, extract methods, use State pattern', 'State, Strategy, Template Method'],
          ['Golden Hammer', 'Same solution forced into different contexts, over-engineering', 'Step back, evaluate problem, choose fit-for-purpose solution', 'None (principle: right tool for job)'],
          ['Lava Flow', 'Unused methods, cryptic old code, deprecated classes', 'Delete fearlessly (it\'s in git), write tests before deleting', 'None (principle: embrace change)'],
          ['Feature Envy', 'Class calls too many methods on another class', 'Move method to where it belongs, use cohesive design', 'Strategy, Visitor'],
          ['Anemic Model', 'Domain objects are data holders only, logic in services', 'Move behavior into domain objects, enable polymorphism', 'Strategy, Command, Polymorphism']
        ]
      },
      {
        type: 'callout',
        variant: 'note',
        title: 'Refactoring Safely',
        text: '✓ Write tests BEFORE refactoring\n✓ Make small, incremental changes\n✓ Run tests after each change\n✓ Use IDE refactoring tools (extract method, rename, etc.)\n✓ Commit frequently'
      }
    ]
  },
  {
    id: 'modern-java-patterns',
    title: 'Modern Java Patterns (Java 17+)',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Recent Java Features Enable Cleaner Patterns'
      },
      {
        type: 'paragraph',
        text: 'Java 17+ introduced several language features that make it easier to implement design patterns with less boilerplate: **records**, **sealed classes**, and **pattern matching**.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Records as Value Objects & DTOs'
      },
      {
        type: 'paragraph',
        text: 'Records automatically generate `equals()`, `hashCode()`, `toString()`, and a canonical constructor. Perfect for immutable value objects.'
      },
      {
        type: 'code',
        language: 'java',
        code: '// Before Java 16: Lots of boilerplate\npublic class UserDTO {\n  private final String name;\n  private final String email;\n  private final int age;\n\n  public UserDTO(String name, String email, int age) {\n    this.name = name;\n    this.email = email;\n    this.age = age;\n  }\n\n  public String name() { return name; }\n  public String email() { return email; }\n  public int age() { return age; }\n\n  @Override\n  public boolean equals(Object o) { /* ... */ }\n\n  @Override\n  public int hashCode() { /* ... */ }\n\n  @Override\n  public String toString() { /* ... */ }\n}\n\n// Java 17: Records (same thing, 1 line!)\npublic record UserDTO(String name, String email, int age) {}'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Sealed Classes Replace Visitor Pattern'
      },
      {
        type: 'paragraph',
        text: 'Sealed classes restrict which classes can extend them, enabling compile-time exhaustiveness checks. Reduces need for Visitor pattern.'
      },
      {
        type: 'code',
        language: 'java',
        code: '// Java 17: Sealed classes\npublic sealed class Shape permits Circle, Rectangle, Triangle {\n  abstract double area();\n}\n\npublic final class Circle extends Shape {\n  private double radius;\n  @Override double area() { return Math.PI * radius * radius; }\n}\n\npublic final class Rectangle extends Shape {\n  private double width, height;\n  @Override double area() { return width * height; }\n}\n\n// Pattern matching (Java 17+)\npublic double calculateArea(Shape shape) {\n  return switch (shape) {\n    case Circle c -> Math.PI * c.radius * c.radius;\n    case Rectangle r -> r.width * r.height;\n    case Triangle t -> t.base * t.height / 2;\n  };\n}'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Pattern Matching with instanceof (Java 16+)'
      },
      {
        type: 'code',
        language: 'java',
        code: '// Old way: cast required\nif (obj instanceof String) {\n  String str = (String) obj;\n  System.out.println(str.length());\n}\n\n// Java 16+: Pattern matching\nif (obj instanceof String str) {\n  System.out.println(str.length());\n}\n\n// Java 17+: Switch patterns\nString result = switch (obj) {\n  case String s -> "String: " + s;\n  case Integer i -> "Number: " + i;\n  case null -> "null";\n  default -> "Unknown";\n};'
      },
      {
        type: 'callout',
        variant: 'important',
        title: 'Modern Java Principle',
        text: 'Modern Java reduces boilerplate significantly. Records replace Value Object factories, sealed classes replace Visitor, pattern matching replaces type-checking chains. Write less code, maintain more easily.'
      }
    ]
  },
  {
    id: 'chapter11-summary',
    title: 'Chapter 11: Summary & Key Takeaways',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'What We Covered'
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Dependency Injection: depend on abstractions, receive dependencies',
          'Three injection types: constructor, setter, field',
          'Manual DI vs IoC containers (Spring, Guice)',
          'CQRS: separate read and write models for scalability',
          'Event Sourcing: store events, not state → complete audit trail',
          'Anti-patterns: God Object, Spaghetti Code, Golden Hammer, Lava Flow',
          'Modern Java (records, sealed classes, pattern matching) reduces boilerplate'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'Dependency Injection vs Service Locator'
      },
      {
        type: 'table',
        headers: ['Aspect', 'Dependency Injection', 'Service Locator'],
        rows: [
          ['Dependencies', 'Explicit (constructor/setter)', 'Hidden (looked up at runtime)'],
          ['Testability', 'Excellent (easy to mock)', 'Harder (locator is global)'],
          ['Coupling', 'Loose (depends on interfaces)', 'Tight (depends on locator)'],
          ['Documentation', 'Clear what dependencies exist', 'Unclear without reading code'],
          ['Performance', 'No lookup overhead', 'Lookup cost (usually negligible)']
        ]
      },
      {
        type: 'callout',
        variant: 'important',
        title: 'Key Takeaway',
        text: '**Favor DI over Service Locator.** Make dependencies explicit. If using a framework (Spring), let it manage wiring. If writing vanilla Java, manual DI is fine and transparent.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Patterns vs Simplicity'
      },
      {
        type: 'callout',
        variant: 'note',
        title: 'Balance',
        text: 'Patterns are tools for managing complexity in large systems. Don\'t apply every pattern to every problem. Start simple, refactor when pain points emerge. Over-engineering is worse than under-engineering.'
      }
    ]
  }
];
