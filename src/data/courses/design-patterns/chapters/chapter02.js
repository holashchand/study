export const sections = [
  {
    id: 'creational-overview',
    title: 'Creational Patterns Overview',
    blocks: [
      { type: 'heading', level: 2, text: 'Creational Patterns Overview' },
      { type: 'paragraph', text: 'Creational patterns address **object instantiation mechanisms**. They abstract the process of creating objects, hiding the logic of which classes to instantiate and how to construct them. This improves flexibility and reduces coupling between client code and concrete classes.' },
      { type: 'heading', level: 3, text: 'Why Creational Patterns?' },
      { type: 'list', ordered: false, items: [
        '**Direct instantiation** with `new` keyword couples code to concrete classes',
        'Complex initialization logic scattered across codebases leads to duplication and bugs',
        '**Object composition** and hierarchies need consistent, controlled creation',
        'Dynamic selection of classes and parameterized creation require abstraction'
      ]},
      { type: 'heading', level: 3, text: 'The Five Creational Patterns' },
      { type: 'diagram', format: 'mermaid', content: 'flowchart TD\n  A["Need to Create Objects"] --> B{"What is the challenge?"}\n  B -->|"Only one instance<br/>needed"| C["Singleton"]\n  B -->|"Subclass chooses<br/>concrete class"| D["Factory Method"]\n  B -->|"Create family of<br/>related objects"| E["Abstract Factory"]\n  B -->|"Complex step-by-step<br/>construction"| F["Builder"]\n  B -->|"Clone instead of<br/>create new"| G["Prototype"]\n  C --> C1["Global access<br/>to single instance"]\n  D --> D1["Vary object type<br/>at runtime"]\n  E --> E1["Ensure consistency<br/>across families"]\n  F --> F1["Readable, fluent<br/>construction"]\n  G --> G1["Performance/<br/>state copying"]', label: 'Choosing a Creational Pattern' },
      { type: 'callout', variant: 'note', title: 'Learning Path', text: 'This chapter covers **Singleton**, **Factory Method**, and **Abstract Factory**. Builder and Prototype follow in subsequent chapters.' }
    ]
  },
  {
    id: 'singleton-concept',
    title: 'Singleton Pattern Concept',
    blocks: [
      { type: 'heading', level: 2, text: 'Singleton Pattern Concept' },
      { type: 'paragraph', text: 'The **Singleton pattern** ensures a class has **exactly one instance** and provides a **global access point** to it. It restricts instantiation to prevent multiple instances of a class that should exist in only one copy.' },
      { type: 'heading', level: 3, text: 'Intent' },
      { type: 'paragraph', text: 'Ensure a class has only one instance, while providing a global point of access to the instance.' },
      { type: 'heading', level: 3, text: 'Problem It Solves' },
      { type: 'list', ordered: false, items: [
        '**Resource pooling**: Database connections, thread pools, loggers should have one shared instance',
        '**Coordination point**: Some objects need to coordinate behavior globally (e.g., configuration manager)',
        '**Prevent duplication**: Multiple instances of the same service cause inconsistency and waste memory',
        '**Global state**: Need a single, globally accessible instance without passing references everywhere'
      ]},
      { type: 'heading', level: 3, text: 'Singleton UML Structure' },
      { type: 'diagram', format: 'mermaid', content: 'classDiagram\n  class Singleton {\n    -instance: Singleton\n    -Singleton()\n    +getInstance() Singleton\n    +business_method()\n  }\n  Singleton --> Singleton: creates and returns', label: 'Singleton Pattern UML Class Diagram' },
      { type: 'callout', variant: 'note', title: 'Key Feature', text: 'Private constructor **prevents external instantiation**. Only the class itself can create its instance via a static method.' }
    ]
  },
  {
    id: 'singleton-naive',
    title: 'Singleton: Naive Implementation',
    blocks: [
      { type: 'heading', level: 2, text: 'Singleton: Naive Implementation' },
      { type: 'paragraph', text: 'The simplest Singleton implementation uses a static instance and a static getter method. However, this approach is **not thread-safe** and breaks in multi-threaded environments.' },
      { type: 'heading', level: 3, text: 'Non-Thread-Safe Singleton' },
      { type: 'code', language: 'java', code: 'public class Logger {\n  private static Logger instance;\n  \n  private Logger() {\n    // Private constructor prevents instantiation\n  }\n  \n  public static Logger getInstance() {\n    if (instance == null) {\n      instance = new Logger();\n    }\n    return instance;\n  }\n  \n  public void log(String message) {\n    System.out.println("[LOG] " + message);\n  }\n}', filename: 'Logger.java' },
      { type: 'heading', level: 3, text: 'Problems with This Approach' },
      { type: 'callout', variant: 'warning', title: 'Race Condition', text: 'In multi-threaded code, two threads can simultaneously check `instance == null`, both pass the check, and both create new instances. This defeats the Singleton guarantee.' },
      { type: 'list', ordered: false, items: [
        '**Thread-unsafe**: Multiple threads may create multiple instances',
        '**Lazy initialization**: Object is created on first access, adding unpredictable latency',
        '**Testing nightmare**: Global static state is hard to mock or reset',
        '**Tight coupling**: Classes depend on the concrete Logger class, not an abstraction'
      ]},
      { type: 'paragraph', text: 'For educational purposes, understanding this naive approach illustrates the **thread-safety problem**. Production code must use one of the thread-safe variants shown in the next section.' }
    ]
  },
  {
    id: 'singleton-thread-safe',
    title: 'Singleton: Thread-Safe Approaches',
    blocks: [
      { type: 'heading', level: 2, text: 'Singleton: Thread-Safe Approaches' },
      { type: 'paragraph', text: 'Three proven approaches provide thread-safe Singleton instantiation. Each has different trade-offs in terms of simplicity, performance, and code clarity.' },
      { type: 'heading', level: 3, text: 'Approach 1: Double-Checked Locking' },
      { type: 'code', language: 'java', code: 'public class Logger {\n  private static volatile Logger instance;\n  \n  private Logger() {}\n  \n  public static Logger getInstance() {\n    if (instance == null) { // First check (no lock)\n      synchronized (Logger.class) {\n        if (instance == null) { // Second check (with lock)\n          instance = new Logger();\n        }\n      }\n    }\n    return instance;\n  }\n}', filename: 'Logger_DCL.java' },
      { type: 'paragraph', text: 'Uses the `volatile` keyword to ensure visibility across threads. The first null-check avoids synchronization overhead after initialization. **Downside**: Complex and error-prone; requires deep understanding of Java memory model.' },
      { type: 'heading', level: 3, text: 'Approach 2: Enum Singleton (BEST PRACTICE)' },
      { type: 'code', language: 'java', code: 'public enum Logger {\n  INSTANCE;\n  \n  public void log(String message) {\n    System.out.println("[LOG] " + message);\n  }\n}\n\n// Usage\npublic class Main {\n  public static void main(String[] args) {\n    Logger.INSTANCE.log("Application started");\n  }\n}', filename: 'Logger_Enum.java' },
      { type: 'paragraph', text: 'Java guarantees that an enum has exactly one instance per enum constant and handles serialization/deserialization correctly. **Advantages**: Thread-safe, serializable, reflection-proof, simple syntax.' },
      { type: 'heading', level: 3, text: 'Approach 3: Bill Pugh Holder Idiom' },
      { type: 'code', language: 'java', code: 'public class Logger {\n  private Logger() {}\n  \n  private static class LoggerHolder {\n    static final Logger INSTANCE = new Logger();\n  }\n  \n  public static Logger getInstance() {\n    return LoggerHolder.INSTANCE;\n  }\n}', filename: 'Logger_BillPugh.java' },
      { type: 'paragraph', text: 'Uses lazy initialization via classloader mechanism. Instance is created when `getInstance()` is first called. **Advantages**: Thread-safe, lazy, simple, no synchronization overhead.' },
      { type: 'heading', level: 3, text: 'Comparison of Thread-Safe Approaches' },
      { type: 'table', headers: ['Approach', 'Thread-Safe', 'Lazy Init', 'Simplicity', 'Serialization', 'Best For'], rows: [
        ['Double-Checked Locking', 'Yes', 'Yes', 'Complex', 'Manual', 'Legacy code (pre-Java 5)'],
        ['Enum Singleton', 'Yes', 'No', 'Simple', 'Built-in', 'Modern Java, most cases'],
        ['Bill Pugh Holder', 'Yes', 'Yes', 'Medium', 'Manual', 'Lazy init required']
      ]},
      { type: 'callout', variant: 'tip', title: 'Recommendation', text: 'Use **Enum Singleton** for new code. It\'s the simplest, safest, and most idiomatic approach in modern Java.' }
    ]
  },
  {
    id: 'singleton-real-world',
    title: 'Singleton: Real-World Examples',
    blocks: [
      { type: 'heading', level: 2, text: 'Singleton: Real-World Examples' },
      { type: 'paragraph', text: 'Singletons appear throughout the Java Standard Library and popular frameworks. Here are practical examples from real-world code.' },
      { type: 'heading', level: 3, text: 'Java Runtime' },
      { type: 'code', language: 'java', code: '// Runtime is a Singleton in the JDK\nRuntime runtime = Runtime.getRuntime();\nruntime.availableProcessors(); // Get CPU count\nruntime.totalMemory(); // Get heap size\nruntime.exec("command"); // Execute external command', filename: 'RuntimeExample.java' },
      { type: 'heading', level: 3, text: 'Logger Instance' },
      { type: 'code', language: 'java', code: '// Using SLF4J (popular logging framework)\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\npublic class UserService {\n  private static final Logger logger = LoggerFactory.getLogger(UserService.class);\n  \n  public void createUser(String name) {\n    logger.info("Creating user: {}", name);\n    // ...\n  }\n}', filename: 'LoggerExample.java' },
      { type: 'heading', level: 3, text: 'Configuration Manager' },
      { type: 'code', language: 'java', code: 'public enum AppConfig {\n  INSTANCE;\n  \n  private final Properties properties = new Properties();\n  \n  AppConfig() {\n    try {\n      properties.load(\n        getClass().getResourceAsStream("/app.properties")\n      );\n    } catch (IOException e) {\n      throw new RuntimeException(e);\n    }\n  }\n  \n  public String getProperty(String key) {\n    return properties.getProperty(key);\n  }\n}\n\n// Usage\nString dbUrl = AppConfig.INSTANCE.getProperty("db.url");', filename: 'AppConfig.java' },
      { type: 'heading', level: 3, text: 'Connection Pool' },
      { type: 'code', language: 'java', code: 'public enum ConnectionPool {\n  INSTANCE;\n  \n  private final HikariDataSource dataSource;\n  \n  ConnectionPool() {\n    HikariConfig config = new HikariConfig();\n    config.setJdbcUrl("jdbc:mysql://localhost:3306/mydb");\n    config.setUsername("user");\n    config.setPassword("pass");\n    config.setMaximumPoolSize(10);\n    dataSource = new HikariDataSource(config);\n  }\n  \n  public Connection getConnection() throws SQLException {\n    return dataSource.getConnection();\n  }\n}', filename: 'ConnectionPool.java' },
      { type: 'callout', variant: 'note', title: 'Pattern in Practice', text: 'Notice how all these examples use Singletons for **stateful resources** (runtime, logger, config, connection pool) that should exist in only one copy per JVM.' }
    ]
  },
  {
    id: 'singleton-pitfalls',
    title: 'Singleton: Pitfalls and Cautions',
    blocks: [
      { type: 'heading', level: 2, text: 'Singleton: Pitfalls and Cautions' },
      { type: 'paragraph', text: 'While useful, Singletons introduce design trade-offs that can complicate code and testing. Understand these pitfalls before applying the pattern.' },
      { type: 'heading', level: 3, text: 'Major Pitfalls' },
      { type: 'callout', variant: 'warning', title: 'Global State', text: 'Singletons are **global state**. Global state makes code harder to understand, test, and parallelize. Functions that depend on global state are less predictable.' },
      { type: 'list', ordered: false, items: [
        '**Hidden dependencies**: A method depends on a Singleton, but this dependency isn\'t visible in the method signature',
        '**Tight coupling**: Code directly references `Logger.INSTANCE`, coupling to a concrete class, not an abstraction',
        '**Testing nightmare**: Unit tests can\'t isolate components; Singleton state persists between tests, causing flaky tests',
        '**Reflection vulnerabilities**: Some Singletons can be broken via Java reflection (unless carefully guarded)',
        '**Inheritance issues**: Can\'t subclass an Enum Singleton to test different behaviors',
        '**Lazy initialization**: Thread creation and initialization happen at unpredictable times'
      ]},
      { type: 'heading', level: 3, text: 'Better Alternative: Dependency Injection' },
      { type: 'code', language: 'java', code: '// AVOID: Direct Singleton usage\npublic class UserService {\n  public void createUser(String name) {\n    Logger.INSTANCE.log("Creating user: " + name); // Tight coupling\n  }\n}\n\n// BETTER: Inject Logger via constructor\npublic class UserService {\n  private final Logger logger;\n  \n  public UserService(Logger logger) { // Dependency injected\n    this.logger = logger;\n  }\n  \n  public void createUser(String name) {\n    logger.log("Creating user: " + name);\n  }\n}\n\n// Testing: Easy to mock\n@Test\nvoid testCreateUser() {\n  Logger mockLogger = mock(Logger.class);\n  UserService service = new UserService(mockLogger);\n  service.createUser("Alice");\n  verify(mockLogger).log(contains("Creating user"));\n}', filename: 'DI_vs_Singleton.java' },
      { type: 'heading', level: 3, text: 'When NOT to Use Singleton' },
      { type: 'list', ordered: false, items: [
        '**Stateless utilities**: If the object has no mutable state, just use static methods or static imports',
        '**Services that vary by context**: If you need different implementations in different parts of the app, use dependency injection',
        '**Objects that change state**: Shared mutable state is notoriously hard to reason about',
        '**Lightweight objects**: Creating multiple instances of lightweight objects has minimal cost'
      ]},
      { type: 'callout', variant: 'tip', title: 'Modern Approach', text: 'In modern frameworks (Spring, Guice, etc.), **dependency injection** has largely replaced Singletons. Frameworks manage object creation and scope for you, making Singletons unnecessary.' }
    ]
  },
  {
    id: 'factory-method-concept',
    title: 'Factory Method Pattern Concept',
    blocks: [
      { type: 'heading', level: 2, text: 'Factory Method Pattern Concept' },
      { type: 'paragraph', text: 'The **Factory Method pattern** defines an **interface for creating objects**, but lets **subclasses decide which class to instantiate**. It decouples client code from concrete classes by introducing a method that creates objects.' },
      { type: 'heading', level: 3, text: 'Intent' },
      { type: 'paragraph', text: 'Define an interface for creating an object, but let subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses.' },
      { type: 'heading', level: 3, text: 'Problem: Direct Instantiation' },
      { type: 'paragraph', text: 'When you use `new` directly, you couple code to concrete classes:' },
      { type: 'code', language: 'java', code: 'public class ReportGenerator {\n  public void generateReport(String type) {\n    Report report;\n    if ("PDF".equals(type)) {\n      report = new PDFReport(); // Tight coupling to PDFReport\n    } else if ("Excel".equals(type)) {\n      report = new ExcelReport(); // Tight coupling to ExcelReport\n    }\n    report.generate();\n  }\n}', filename: 'ReportGenerator_Bad.java' },
      { type: 'heading', level: 3, text: 'Solution: Factory Method' },
      { type: 'diagram', format: 'mermaid', content: 'classDiagram\n  class Creator {\n    +factoryMethod() Product*\n    +businessLogic()\n  }\n  class ConcreteCreatorA {\n    +factoryMethod() ConcreteProductA\n  }\n  class ConcreteCreatorB {\n    +factoryMethod() ConcreteProductB\n  }\n  class Product {\n    <<interface>>\n    +doStuff()\n  }\n  class ConcreteProductA {\n    +doStuff()\n  }\n  class ConcreteProductB {\n    +doStuff()\n  }\n  Creator <|-- ConcreteCreatorA\n  Creator <|-- ConcreteCreatorB\n  Product <|-- ConcreteProductA\n  Product <|-- ConcreteProductB\n  Creator --> Product: creates', label: 'Factory Method UML Class Diagram' },
      { type: 'callout', variant: 'note', title: 'Key Insight', text: 'The client doesn\'t know which concrete product class is being instantiated. It depends on the abstraction (Product interface) and lets the factory decide.' }
    ]
  },
  {
    id: 'factory-method-implementation',
    title: 'Factory Method: Implementation',
    blocks: [
      { type: 'heading', level: 2, text: 'Factory Method: Implementation' },
      { type: 'paragraph', text: 'Here\'s a complete example using the Factory Method pattern. Multiple concrete factories create different product types, and client code depends on abstractions.' },
      { type: 'code', language: 'java', code: 'public interface Shape {\n  void draw();\n  double getArea();\n}\n\npublic class Circle implements Shape {\n  private double radius;\n  \n  public Circle(double radius) {\n    this.radius = radius;\n  }\n  \n  @Override\n  public void draw() {\n    System.out.println("Drawing Circle with radius " + radius);\n  }\n  \n  @Override\n  public double getArea() {\n    return Math.PI * radius * radius;\n  }\n}\n\npublic class Rectangle implements Shape {\n  private double width, height;\n  \n  public Rectangle(double width, double height) {\n    this.width = width;\n    this.height = height;\n  }\n  \n  @Override\n  public void draw() {\n    System.out.println("Drawing Rectangle " + width + "x" + height);\n  }\n  \n  @Override\n  public double getArea() {\n    return width * height;\n  }\n}\n\npublic class Triangle implements Shape {\n  private double base, height;\n  \n  public Triangle(double base, double height) {\n    this.base = base;\n    this.height = height;\n  }\n  \n  @Override\n  public void draw() {\n    System.out.println("Drawing Triangle");\n  }\n  \n  @Override\n  public double getArea() {\n    return 0.5 * base * height;\n  }\n}', filename: 'Shapes.java' },
      { type: 'code', language: 'java', code: 'public abstract class ShapeCreator {\n  // Factory method: subclasses must implement\n  protected abstract Shape createShape();\n  \n  // Template method using the factory\n  public Shape getShape() {\n    Shape shape = createShape(); // Let subclass decide\n    shape.draw();\n    return shape;\n  }\n}\n\npublic class CircleCreator extends ShapeCreator {\n  @Override\n  protected Shape createShape() {\n    return new Circle(5.0);\n  }\n}\n\npublic class RectangleCreator extends ShapeCreator {\n  @Override\n  protected Shape createShape() {\n    return new Rectangle(10.0, 20.0);\n  }\n}\n\npublic class TriangleCreator extends ShapeCreator {\n  @Override\n  protected Shape createShape() {\n    return new Triangle(15.0, 12.0);\n  }\n}', filename: 'ShapeCreator.java' },
      { type: 'code', language: 'java', code: '// Client code: Works with abstractions\npublic class Canvas {\n  public void render(ShapeCreator creator) {\n    Shape shape = creator.getShape();\n    System.out.println("Area: " + shape.getArea());\n  }\n}\n\n// Usage\npublic class Main {\n  public static void main(String[] args) {\n    Canvas canvas = new Canvas();\n    \n    // Client doesn\'t know which concrete Shape is created\n    canvas.render(new CircleCreator());\n    canvas.render(new RectangleCreator());\n    canvas.render(new TriangleCreator());\n  }\n}', filename: 'CanvasExample.java' },
      { type: 'callout', variant: 'tip', title: 'Benefits', text: 'Adding a new Shape type (e.g., Polygon) only requires adding a new concrete creator. Existing client code needs no changes (Open-Closed Principle).' }
    ]
  },
  {
    id: 'factory-method-stdlib',
    title: 'Factory Method in Java Standard Library',
    blocks: [
      { type: 'heading', level: 2, text: 'Factory Method in Java Standard Library' },
      { type: 'paragraph', text: 'The Factory Method pattern is extensively used in the Java Standard Library. Recognizing these patterns helps you use the JDK more effectively.' },
      { type: 'heading', level: 3, text: 'JDBC DriverManager' },
      { type: 'code', language: 'java', code: '// Factory method: Returns appropriate database Connection\n// The DriverManager decides which driver to use based on URL\nConnection conn = DriverManager.getConnection(\n  "jdbc:mysql://localhost:3306/mydb",\n  "user",\n  "password"\n);\n// Client doesn\'t know whether it gets MySQLConnection or OracleConnection', filename: 'JDBCExample.java' },
      { type: 'heading', level: 3, text: 'NumberFormat Factory' },
      { type: 'code', language: 'java', code: '// Static factory methods create appropriate locale-specific formatter\nNumberFormat usFormat = NumberFormat.getInstance(Locale.US);\nNumberFormat deFormat = NumberFormat.getInstance(Locale.GERMANY);\n\nSystem.out.println(usFormat.format(1234.56)); // 1,234.56\nSystem.out.println(deFormat.format(1234.56)); // 1.234,56', filename: 'NumberFormatExample.java' },
      { type: 'heading', level: 3, text: 'DocumentBuilderFactory' },
      { type: 'code', language: 'java', code: '// Factory creates appropriate XML parser implementation\nDocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();\nDocumentBuilder builder = factory.newDocumentBuilder();\nDocument doc = builder.parse(new File("data.xml"));\n// Client doesn\'t know the concrete parser implementation', filename: 'XMLParserExample.java' },
      { type: 'heading', level: 3, text: 'Collection Factories' },
      { type: 'code', language: 'java', code: '// Static factory methods in List, Set, Map (Java 9+)\nList<String> list = List.of("a", "b", "c"); // Immutable list\nSet<Integer> set = Set.of(1, 2, 3); // Immutable set\nMap<String, Integer> map = Map.of("x", 10, "y", 20); // Immutable map\n\n// Calendar factory returns appropriate calendar implementation\nCalendar cal = Calendar.getInstance(); // Gets system default calendar\nCalendar gregCalendar = Calendar.getInstance(Locale.US);\nCalendar japCalendar = Calendar.getInstance(Locale.JAPAN);', filename: 'CollectionFactoriesExample.java' },
      { type: 'callout', variant: 'note', title: 'Factory Pattern Variants', text: 'In the JDK, factory methods are often **static methods** rather than instance methods. Both are valid implementations of the Factory Method pattern.' }
    ]
  },
  {
    id: 'abstract-factory-concept',
    title: 'Abstract Factory Pattern Concept',
    blocks: [
      { type: 'heading', level: 2, text: 'Abstract Factory Pattern Concept' },
      { type: 'paragraph', text: 'The **Abstract Factory pattern** provides an **interface for creating families of related or dependent objects** without specifying their concrete classes. It\'s useful when you have multiple related product hierarchies that must be kept consistent.' },
      { type: 'heading', level: 3, text: 'Intent' },
      { type: 'paragraph', text: 'Provide an interface for creating families of related or dependent objects without specifying their concrete classes.' },
      { type: 'heading', level: 3, text: 'Factory Method vs. Abstract Factory' },
      { type: 'list', ordered: false, items: [
        '**Factory Method**: Creates **one product type** through a virtual constructor',
        '**Abstract Factory**: Creates **families of related products** with consistency guarantees',
        '**Factory Method**: Subclass decides which concrete product to instantiate',
        '**Abstract Factory**: Factory implementation decides which concrete products to create together'
      ]},
      { type: 'heading', level: 3, text: 'Motivating Example: UI Toolkits' },
      { type: 'paragraph', text: 'Imagine a cross-platform UI library. You need **Button, TextField, Dialog** components. But each OS (Windows, Mac, Linux) has different look-and-feel. You can\'t mix **WindowsButton** with **MacDialog**—they must come from the same family.' },
      { type: 'heading', level: 3, text: 'Abstract Factory UML Structure' },
      { type: 'diagram', format: 'mermaid', content: 'classDiagram\n  class UIFactory {\n    <<interface>>\n    +createButton() Button\n    +createTextField() TextField\n  }\n  class WindowsFactory {\n    +createButton() WindowsButton\n    +createTextField() WindowsTextField\n  }\n  class MacFactory {\n    +createButton() MacButton\n    +createTextField() MacTextField\n  }\n  class Button {\n    <<interface>>\n    +paint()\n  }\n  class WindowsButton {\n    +paint()\n  }\n  class MacButton {\n    +paint()\n  }\n  class TextField {\n    <<interface>>\n    +paint()\n  }\n  class WindowsTextField {\n    +paint()\n  }\n  class MacTextField {\n    +paint()\n  }\n  UIFactory <|-- WindowsFactory\n  UIFactory <|-- MacFactory\n  Button <|-- WindowsButton\n  Button <|-- MacButton\n  TextField <|-- WindowsTextField\n  TextField <|-- MacTextField\n  UIFactory --> Button: creates\n  UIFactory --> TextField: creates', label: 'Abstract Factory UML Class Diagram' },
      { type: 'callout', variant: 'note', title: 'Consistency Guarantee', text: 'Abstract Factory **ensures** that all products created by one factory are compatible. You can\'t accidentally mix WindowsButton with MacTextField.' }
    ]
  },
  {
    id: 'abstract-factory-implementation',
    title: 'Abstract Factory: Implementation',
    blocks: [
      { type: 'heading', level: 2, text: 'Abstract Factory: Implementation' },
      { type: 'paragraph', text: 'Here\'s a complete UI toolkit example demonstrating Abstract Factory. We create platform-specific GUI components while maintaining consistency.' },
      { type: 'code', language: 'java', code: 'public interface Button {\n  void paint();\n}\n\npublic interface TextField {\n  void paint();\n}\n\npublic class WindowsButton implements Button {\n  @Override\n  public void paint() {\n    System.out.println("Rendering Windows-style button");\n  }\n}\n\npublic class WindowsTextField implements TextField {\n  @Override\n  public void paint() {\n    System.out.println("Rendering Windows-style text field");\n  }\n}\n\npublic class MacButton implements Button {\n  @Override\n  public void paint() {\n    System.out.println("Rendering macOS-style button");\n  }\n}\n\npublic class MacTextField implements TextField {\n  @Override\n  public void paint() {\n    System.out.println("Rendering macOS-style text field");\n  }\n}', filename: 'UIComponents.java' },
      { type: 'code', language: 'java', code: 'public interface UIFactory {\n  Button createButton();\n  TextField createTextField();\n}\n\npublic class WindowsFactory implements UIFactory {\n  @Override\n  public Button createButton() {\n    return new WindowsButton();\n  }\n  \n  @Override\n  public TextField createTextField() {\n    return new WindowsTextField();\n  }\n}\n\npublic class MacFactory implements UIFactory {\n  @Override\n  public Button createButton() {\n    return new MacButton();\n  }\n  \n  @Override\n  public TextField createTextField() {\n    return new MacTextField();\n  }\n}', filename: 'UIFactory.java' },
      { type: 'code', language: 'java', code: 'public class Application {\n  private Button button;\n  private TextField textField;\n  \n  // Client depends on UIFactory abstraction, not concrete factories\n  public Application(UIFactory factory) {\n    this.button = factory.createButton();\n    this.textField = factory.createTextField();\n  }\n  \n  public void render() {\n    button.paint();\n    textField.paint();\n  }\n}\n\n// Usage: Select factory based on OS at runtime\npublic class Main {\n  public static void main(String[] args) {\n    UIFactory factory;\n    \n    if (System.getProperty("os.name").contains("Windows")) {\n      factory = new WindowsFactory();\n    } else {\n      factory = new MacFactory();\n    }\n    \n    Application app = new Application(factory);\n    app.render(); // Renders platform-specific UI\n  }\n}', filename: 'Application.java' },
      { type: 'callout', variant: 'tip', title: 'Benefit: Family Consistency', text: 'All UI components come from the same factory, guaranteeing consistent look-and-feel. You never accidentally mix WindowsButton with MacTextField.' }
    ]
  },
  {
    id: 'factory-comparison',
    title: 'Factory Method vs. Abstract Factory',
    blocks: [
      { type: 'heading', level: 2, text: 'Factory Method vs. Abstract Factory' },
      { type: 'paragraph', text: 'While similar, Factory Method and Abstract Factory solve different problems and have distinct structures. Understanding their differences helps you choose the right pattern.' },
      { type: 'heading', level: 3, text: 'Detailed Comparison' },
      { type: 'table', headers: ['Aspect', 'Factory Method', 'Abstract Factory'], rows: [
        ['Intent', 'Create a single product type', 'Create families of related products'],
        ['Number of Products', '1 product hierarchy', 'Multiple product hierarchies'],
        ['Typical Use', 'Database drivers, document creation', 'UI toolkits, theme systems'],
        ['Structure', 'Virtual constructor in base class', 'Factory with multiple creation methods'],
        ['Flexibility', 'Easy to add new product types', 'Easy to add new product families'],
        ['Cost of Change', 'Add subclass for new product', 'Add new factory for new family'],
        ['Coupling', 'Loose: depends on Product interface', 'Looser: depends on Factory interface'],
        ['Complexity', 'Simpler', 'More complex with many products'],
        ['Real-world Example', 'Calendar.getInstance()', 'Swing UIManager (different L&F)']
      ]},
      { type: 'heading', level: 3, text: 'When to Use Factory Method' },
      { type: 'list', ordered: false, items: [
        'Single product type with multiple implementations',
        'Subclass decides which implementation to create',
        'Avoiding direct instantiation with `new` keyword',
        'Parameterized object creation (e.g., shape by name)'
      ]},
      { type: 'heading', level: 3, text: 'When to Use Abstract Factory' },
      { type: 'list', ordered: false, items: [
        'Multiple related product families',
        'Products from one family must be used together',
        'Need to switch between families at runtime',
        'Want to ensure product consistency across families (e.g., all Windows components or all Mac components)'
      ]},
      { type: 'callout', variant: 'note', title: 'Pattern Overlap', text: 'Abstract Factory often uses Factory Methods internally. The two patterns can be combined: Abstract Factory might delegate product creation to Factory Methods.' }
    ]
  },
  {
    id: 'chapter02-summary',
    title: 'Chapter 2 Summary',
    blocks: [
      { type: 'heading', level: 2, text: 'Chapter 2 Summary' },
      { type: 'paragraph', text: 'Creational patterns **control how objects are instantiated**. This chapter covered three essential patterns: **Singleton** for global access to a single instance, **Factory Method** for creating products without specifying concrete classes, and **Abstract Factory** for creating consistent families of related products.' },
      { type: 'heading', level: 3, text: 'Key Takeaways' },
      { type: 'list', ordered: true, items: [
        '**Singleton**: One instance, global access. Use Enum for modern Java. Watch out for global state and testability.',
        '**Factory Method**: Create single product type via virtual constructor. Decouples client from concrete classes.',
        '**Abstract Factory**: Create families of related products. Ensures consistency within a family.',
        'All three patterns are extensively used in Java Standard Library (Runtime, Calendar, JDBC, etc.).',
        'Prefer **dependency injection** over Singletons for better testability in modern applications.',
        'Factory Method is simpler; use it when you need to create one type. Use Abstract Factory when coordinating multiple related types.',
        'Trade-off: Patterns add abstraction layers, which improve flexibility but increase complexity.'
      ]},
      { type: 'heading', level: 3, text: 'Runtime Behavior: Factory Method in Action' },
      { type: 'diagram', format: 'mermaid', content: 'sequenceDiagram\n  participant Client\n  participant Creator\n  participant ConcreteCreatorA as Concrete Creator\n  participant Product\n  Client->>Creator: businessLogic()\n  activate Creator\n  Creator->>Creator: factoryMethod()\n  activate Creator\n  Creator->>ConcreteCreatorA: new (overridden)\n  activate ConcreteCreatorA\n  ConcreteCreatorA->>Product: new ConcreteProductA()\n  activate Product\n  Product-->>ConcreteCreatorA: instance\n  deactivate Product\n  ConcreteCreatorA-->>Creator: concrete product\n  deactivate ConcreteCreatorA\n  deactivate Creator\n  Creator->>Product: use product\n  Product-->>Creator: result\n  Creator-->>Client: result\n  deactivate Creator', label: 'Factory Method Pattern: Runtime Sequence' },
      { type: 'paragraph', text: 'Next chapter: Explore **Builder** and **Prototype** patterns, completing the Creational pattern family.' }
    ]
  }
];
