export const sections = [
  {
    id: 'what-are-design-patterns',
    title: 'What Are Design Patterns?',
    blocks: [
      { type: 'heading', level: 2, text: 'What Are Design Patterns?' },
      { type: 'paragraph', text: 'Design patterns are **reusable solutions** to common problems in software design. They represent **best practices** and are templates for writing maintainable, scalable code. A pattern is not a finished design, nor is it code—it\'s a **description or template** for how to solve a recurring problem.' },
      { type: 'paragraph', text: 'The concept was borrowed from **architecture** by Christopher Alexander in the 1970s. In 1994, the **Gang of Four** (Gamma, Helm, Johnson, Vlissides) published *Design Patterns: Elements of Reusable Object-Oriented Software*, which formalized 23 classic patterns for software engineers.' },
      { type: 'heading', level: 3, text: 'Pattern vs. Code Recipe' },
      { type: 'list', ordered: false, items: [
        '**Pattern**: Reusable template applicable across many contexts, languages, and domains',
        '**Code Recipe**: Specific implementation in one language for one problem',
        '**Pattern**: Solves design trade-offs and consequences',
        '**Code Recipe**: Just shows how to write something'
      ]},
      { type: 'heading', level: 3, text: 'Pattern Categories Overview' },
      { type: 'diagram', format: 'mermaid', content: 'flowchart TD\n  A["Design Patterns<br/>23 GoF Patterns"] --> B["Creational<br/>Object Creation"]\n  A --> C["Structural<br/>Object Composition"]\n  A --> D["Behavioral<br/>Object Interaction"]\n  B --> B1["Singleton"]\n  B --> B2["Factory Method"]\n  B --> B3["Abstract Factory"]\n  B --> B4["Builder"]\n  B --> B5["Prototype"]\n  C --> C1["Adapter"]\n  C --> C2["Bridge"]\n  C --> C3["Composite"]\n  C --> C4["Decorator"]\n  C --> C5["Facade"]\n  C --> C6["Flyweight"]\n  C --> C7["Proxy"]\n  D --> D1["Chain of Resp."]\n  D --> D2["Command"]\n  D --> D3["Interpreter"]\n  D --> D4["Iterator"]\n  D --> D5["Mediator"]\n  D --> D6["Memento"]\n  D --> D7["Observer"]\n  D --> D8["State"]\n  D --> D9["Strategy"]\n  D --> D10["Template Method"]\n  D --> D11["Visitor"]', label: 'The 23 Gang of Four Patterns' },
      { type: 'callout', variant: 'note', title: 'Key Insight', text: 'Patterns are not about code structure alone—they solve **design problems** and communicate **intent** between developers.' }
    ]
  },
  {
    id: 'the-gang-of-four',
    title: 'The Gang of Four',
    blocks: [
      { type: 'heading', level: 2, text: 'The Gang of Four' },
      { type: 'paragraph', text: 'In 1994, **Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides** published *Design Patterns: Elements of Reusable Object-Oriented Software*. This seminal book documented **23 object-oriented design patterns** that had emerged as best practices in the industry. The patterns are now fundamental to software engineering education and practice.' },
      { type: 'paragraph', text: 'The GoF book organized patterns into **three categories** based on their purpose: **Creational** (5 patterns), **Structural** (7 patterns), and **Behavioral** (11 patterns). Each pattern includes the problem it solves, the solution structure, and trade-offs.' },
      { type: 'heading', level: 3, text: '23 Gang of Four Patterns Overview' },
      { type: 'table', headers: ['Category', 'Count', 'Purpose', 'Example Patterns'], rows: [
        ['Creational', '5', 'Control object instantiation and hide creation logic', 'Singleton, Factory Method, Builder'],
        ['Structural', '7', 'Compose objects into larger structures while keeping flexibility', 'Decorator, Adapter, Proxy, Facade'],
        ['Behavioral', '11', 'Define communication patterns between objects', 'Observer, Strategy, Iterator, State']
      ]},
      { type: 'callout', variant: 'tip', title: 'Historical Impact', text: 'The GoF book remains one of the most cited software engineering texts. While it uses C++ and Smalltalk examples, the patterns apply to **all object-oriented languages**.' }
    ]
  },
  {
    id: 'why-use-patterns',
    title: 'Why Use Design Patterns?',
    blocks: [
      { type: 'heading', level: 2, text: 'Why Use Design Patterns?' },
      { type: 'heading', level: 3, text: 'Benefits of Design Patterns' },
      { type: 'list', ordered: false, items: [
        '**Shared Vocabulary**: Team members use consistent terminology (e.g., "This uses the Observer pattern") to communicate design ideas quickly',
        '**Proven Solutions**: Patterns have been tested in real-world scenarios and encode **best practices** rather than ad-hoc solutions',
        '**Reusability**: Patterns apply across projects and domains, reducing design time and improving consistency',
        '**Maintainability**: Structured designs are easier to understand, modify, and extend',
        '**Scalability**: Patterns help systems grow without major architectural changes',
        '**Documentation**: Naming a pattern (e.g., "Factory") immediately conveys design intent to future developers'
      ]},
      { type: 'heading', level: 3, text: 'Cost and Caution' },
      { type: 'callout', variant: 'warning', title: 'Don\'t Overuse Patterns', text: 'Applying patterns indiscriminately leads to **over-engineering**. A simple loop or conditional is not a candidate for pattern application. Use patterns when you have a **recurring, complex problem** worth solving, not for trivial code.' },
      { type: 'paragraph', text: 'Apply patterns **incrementally**: start simple, and refactor into a pattern when the need becomes clear.' }
    ]
  },
  {
    id: 'pattern-categories',
    title: 'Creational, Structural, Behavioral',
    blocks: [
      { type: 'heading', level: 2, text: 'Pattern Categories' },
      { type: 'paragraph', text: 'Design patterns are classified into three categories based on the kind of problem they solve: **Creational** patterns control object instantiation, **Structural** patterns compose objects into larger structures, and **Behavioral** patterns define communication between objects.' },
      { type: 'heading', level: 3, text: 'Creational Patterns (5)' },
      { type: 'list', ordered: false, items: [
        '**Singleton**: Ensure a class has only one instance and provide a global access point',
        '**Factory Method**: Create objects without specifying their exact classes',
        '**Abstract Factory**: Create families of related objects without coupling to concrete classes',
        '**Builder**: Construct complex objects step-by-step',
        '**Prototype**: Clone objects instead of creating new ones'
      ]},
      { type: 'heading', level: 3, text: 'Structural Patterns (7)' },
      { type: 'list', ordered: false, items: [
        '**Adapter**: Make incompatible interfaces work together',
        '**Bridge**: Decouple an abstraction from its implementation',
        '**Composite**: Treat individual objects and compositions uniformly',
        '**Decorator**: Add behavior to objects dynamically',
        '**Facade**: Provide a simplified interface to a complex subsystem',
        '**Flyweight**: Share common state to save memory',
        '**Proxy**: Provide a placeholder or surrogate for another object'
      ]},
      { type: 'heading', level: 3, text: 'Behavioral Patterns (11)' },
      { type: 'list', ordered: false, items: [
        '**Chain of Responsibility**: Pass a request along a chain of handlers',
        '**Command**: Encapsulate a request as an object',
        '**Interpreter**: Define a language grammar and parser',
        '**Iterator**: Access elements of a collection sequentially',
        '**Mediator**: Define an object that encapsulates how objects interact',
        '**Memento**: Capture and restore object state',
        '**Observer**: Notify multiple objects about state changes',
        '**State**: Vary object behavior based on internal state',
        '**Strategy**: Encapsulate interchangeable algorithms',
        '**Template Method**: Define algorithm skeleton in a base class',
        '**Visitor**: Add operations to objects without changing their classes'
      ]},
      { type: 'diagram', format: 'mermaid', content: 'graph LR\n  A["Problem Domain"] --> B{"What kind?"}\n  B -->|Object creation| C["Creational<br/>5 patterns"]\n  B -->|Object composition| D["Structural<br/>7 patterns"]\n  B -->|Object interaction| E["Behavioral<br/>11 patterns"]', label: 'Choosing a Pattern Category' }
    ]
  },
  {
    id: 'solid-principles',
    title: 'SOLID Principles',
    blocks: [
      { type: 'heading', level: 2, text: 'SOLID Principles' },
      { type: 'paragraph', text: 'SOLID is an acronym for five principles of good object-oriented design. Design patterns **embody and reinforce** these principles. Understanding SOLID helps you apply patterns effectively.' },
      { type: 'heading', level: 3, text: 'The Five SOLID Principles' },
      { type: 'table', headers: ['Principle', 'Acronym', 'Means', 'Related Pattern'], rows: [
        ['Single Responsibility', 'S', 'A class should have one reason to change', 'Strategy, Template Method'],
        ['Open/Closed', 'O', 'Open for extension, closed for modification', 'Decorator, Factory Method'],
        ['Liskov Substitution', 'L', 'Derived classes must be substitutable for base classes', 'Adapter, Bridge'],
        ['Interface Segregation', 'I', 'Depend on specific interfaces, not general ones', 'Adapter, Facade'],
        ['Dependency Inversion', 'D', 'Depend on abstractions, not concrete classes', 'Abstract Factory, Observer']
      ]},
      { type: 'heading', level: 3, text: 'SOLID and Design Patterns' },
      { type: 'diagram', format: 'mermaid', content: 'flowchart LR\n  A["Good Design"] --> B["Follow SOLID<br/>Principles"]\n  B --> C["Apply Design<br/>Patterns"]\n  C --> D["Maintainable,<br/>Scalable Code"]', label: 'How SOLID Principles Guide Pattern Use' },
      { type: 'callout', variant: 'note', title: 'Pattern Enforcement', text: 'Most design patterns naturally enforce one or more SOLID principles. When you apply a pattern correctly, you are implicitly following SOLID principles.' }
    ]
  },
  {
    id: 'uml-class-diagram-notation',
    title: 'UML Class Diagram Notation',
    blocks: [
      { type: 'heading', level: 2, text: 'UML Class Diagram Notation' },
      { type: 'paragraph', text: 'Design patterns are typically documented using **UML (Unified Modeling Language)** class diagrams. These diagrams show classes, their relationships, and their attributes/methods. Understanding UML notation is essential for reading and communicating pattern structures.' },
      { type: 'heading', level: 3, text: 'Common UML Relationships' },
      { type: 'diagram', format: 'mermaid', content: 'classDiagram\n  class Animal {\n    +name: String\n    +sleep()\n  }\n  class Dog {\n    +bark()\n  }\n  class Food {\n    +calories: int\n  }\n  class Collar {\n    +material: String\n  }\n  class Owner {\n    +name: String\n  }\n  Dog <|-- Animal: Inheritance\n  Dog *-- Collar: Composition\n  Dog o-- Food: Aggregation\n  Dog --> Owner: Association', label: 'UML Class Diagram Relationships' },
      { type: 'heading', level: 3, text: 'Relationship Types' },
      { type: 'list', ordered: false, items: [
        '**Inheritance** (`<|--`): Dog IS-A Animal. Derived class extends base class.',
        '**Composition** (`*--`): Collar belongs to Dog. Strong ownership; collar cannot exist without dog.',
        '**Aggregation** (`o--`): Dog HAS-A Food. Weaker relationship; food can exist independently.',
        '**Association** (`-->`): Dog knows about Owner. Objects are related but independent.',
        '**Dependency**: One class uses another but doesn\'t own it (often temporary).'
      ]},
      { type: 'callout', variant: 'tip', title: 'Memory Aid', text: 'Composition is **stronger** than aggregation: composition = solid diamond (filled), aggregation = hollow diamond.' }
    ]
  },
  {
    id: 'uml-sequence-diagram-notation',
    title: 'UML Sequence Diagram Notation',
    blocks: [
      { type: 'heading', level: 2, text: 'UML Sequence Diagram Notation' },
      { type: 'paragraph', text: 'Sequence diagrams show **how objects interact over time**. They display the order and timing of method calls between objects, which is useful for understanding pattern dynamics at runtime.' },
      { type: 'heading', level: 3, text: 'Reading Sequence Diagrams' },
      { type: 'diagram', format: 'mermaid', content: 'sequenceDiagram\n  participant Client\n  participant Factory\n  participant Product\n  Client->>Factory: create(type)\n  activate Factory\n  Factory->>Product: new Product()\n  activate Product\n  Product-->>Factory: instance\n  deactivate Product\n  Factory-->>Client: product\n  deactivate Factory\n  Client->>Product: use()', label: 'Sequence Diagram: Factory Method Pattern' },
      { type: 'heading', level: 3, text: 'Key Elements' },
      { type: 'list', ordered: false, items: [
        '**Participants**: Objects or actors involved (shown as boxes at top)',
        '**Messages**: Method calls shown as arrows between participants (solid = synchronous, dashed = return)',
        '**Activation boxes**: Vertical rectangles showing when an object is active/executing',
        '**Time**: Flows downward; earlier messages appear above later messages'
      ]},
      { type: 'callout', variant: 'note', title: 'Use Case', text: 'Sequence diagrams are excellent for documenting **interaction patterns** like Observer (many notifications) or Chain of Responsibility (passing requests down a chain).' }
    ]
  },
  {
    id: 'pattern-template',
    title: 'Design Pattern Template',
    blocks: [
      { type: 'heading', level: 2, text: 'Design Pattern Template' },
      { type: 'paragraph', text: 'Each design pattern is documented using a standard template. The Gang of Four established this format, which helps you understand and apply patterns consistently.' },
      { type: 'heading', level: 3, text: 'Pattern Documentation Elements' },
      { type: 'list', ordered: true, items: [
        '**Name**: The pattern\'s name (e.g., Singleton)',
        '**Classification**: Creational, Structural, or Behavioral',
        '**Intent**: What problem does it solve? What design goal?',
        '**Problem**: The issue that motivates the pattern',
        '**Solution**: The structure and participants that solve the problem',
        '**Participants**: Classes/interfaces involved and their roles',
        '**Collaborations**: How participants interact to realize responsibilities',
        '**Consequences**: Benefits and trade-offs (memory, performance, complexity)',
        '**Known Uses**: Real-world examples (Java stdlib, frameworks)',
        '**Related Patterns**: Other patterns often used together'
      ]},
      { type: 'heading', level: 3, text: 'Example: Singleton Pattern' },
      { type: 'list', ordered: false, items: [
        '**Name**: Singleton',
        '**Classification**: Creational',
        '**Intent**: Ensure a class has only one instance and provide a global access point to it',
        '**Problem**: Some classes should have exactly one instance (logger, database connection pool)',
        '**Solution**: Make constructor private; provide static method to get the single instance',
        '**Participants**: Singleton class',
        '**Consequences**: Restricts instantiation; provides global access point; complicates testing (tight coupling)'
      ]},
      { type: 'callout', variant: 'tip', title: 'Learning Strategy', text: 'When learning a new pattern, use this template to organize your understanding. You\'ll develop a consistent mental model across all 23 patterns.' }
    ]
  },
  {
    id: 'design-principles',
    title: 'Key Design Principles',
    blocks: [
      { type: 'heading', level: 2, text: 'Key Design Principles' },
      { type: 'paragraph', text: 'Two core principles underlie most design patterns. Understanding these principles will deepen your ability to apply and combine patterns effectively.' },
      { type: 'heading', level: 3, text: 'Principle 1: Program to an Interface, Not an Implementation' },
      { type: 'paragraph', text: 'Code against **abstractions** (interfaces/abstract classes), not concrete classes. This reduces coupling and makes code more flexible.' },
      { type: 'heading', level: 4, text: 'Bad: Programming to Implementation' },
      { type: 'code', language: 'java', code: 'public class DataProcessor {\n  private MySQLDatabase db = new MySQLDatabase();\n  \n  public void processData() {\n    // Tied to MySQLDatabase concrete class\n    db.connect();\n    db.query("SELECT * FROM data");\n  }\n}', filename: 'DataProcessor.java' },
      { type: 'heading', level: 4, text: 'Good: Programming to Interface' },
      { type: 'code', language: 'java', code: 'public interface Database {\n  void connect();\n  ResultSet query(String sql);\n}\n\npublic class DataProcessor {\n  private Database db; // Abstraction, not concrete class\n  \n  public DataProcessor(Database db) {\n    this.db = db; // Inject any Database implementation\n  }\n  \n  public void processData() {\n    db.connect();\n    db.query("SELECT * FROM data");\n  }\n}', filename: 'DataProcessor.java' },
      { type: 'heading', level: 3, text: 'Principle 2: Favor Composition Over Inheritance' },
      { type: 'paragraph', text: 'Use **composition** (has-a) instead of **inheritance** (is-a) when possible. Inheritance creates tight coupling and makes hierarchies rigid.' },
      { type: 'heading', level: 4, text: 'Bad: Inheritance Rigidity' },
      { type: 'code', language: 'java', code: 'public class Bird {\n  public void fly() { /* ... */ }\n}\n\npublic class Penguin extends Bird {\n  @Override\n  public void fly() {\n    throw new UnsupportedOperationException("Penguins can\'t fly!");\n  }\n}', filename: 'Penguin.java' },
      { type: 'heading', level: 4, text: 'Good: Composition Flexibility' },
      { type: 'code', language: 'java', code: 'public interface Flyer {\n  void fly();\n}\n\npublic class Bird {\n  private Flyer flyer; // Composition\n  \n  public Bird(Flyer flyer) {\n    this.flyer = flyer;\n  }\n  \n  public void move() {\n    if (flyer != null) flyer.fly();\n    else walk(); // Default behavior\n  }\n}\n\npublic class Penguin {\n  // Compose with non-flying behavior\n  private Bird bird = new Bird(new Swimmer());\n}', filename: 'Penguin.java' }
    ]
  },
  {
    id: 'when-not-to-use-patterns',
    title: 'When NOT to Use Patterns',
    blocks: [
      { type: 'heading', level: 2, text: 'When NOT to Use Patterns' },
      { type: 'paragraph', text: 'Patterns are powerful, but **not every problem needs a pattern**. Over-engineering with patterns introduces unnecessary complexity, maintenance overhead, and cognitive burden on your team.' },
      { type: 'heading', level: 3, text: 'Anti-Patterns: When Design Patterns Backfire' },
      { type: 'callout', variant: 'warning', title: 'Premature Optimization', text: 'Applying a pattern before you have a concrete problem violates YAGNI (You Aren\'t Gonna Need It). Start simple; refactor into a pattern when the need is clear.' },
      { type: 'heading', level: 3, text: 'Scenarios: Pattern vs. Better Approach' },
      { type: 'table', headers: ['Scenario', 'Tempting Pattern', 'Better Approach'], rows: [
        ['Simple data holder', 'Builder (4 lines of code)', 'Plain object or record'],
        ['Two similar classes', 'Abstract Factory', 'Simple inheritance or composition'],
        ['Tracking object state', 'Memento + Undo system', 'Simple boolean flag or version counter'],
        ['Passing data between layers', 'Complex Observer setup', 'Direct method call or event bus library'],
        ['Single inheritance path', 'Bridge pattern', 'Plain inheritance']
      ]},
      { type: 'heading', level: 3, text: 'The Pattern-Free Philosophy' },
      { type: 'list', ordered: false, items: [
        'Start with the **simplest solution** that works',
        'When **complexity emerges** in multiple places, extract a pattern',
        'Pattern refactoring is **cheaper** than pre-emptive design',
        'Some problems are **domain-specific** and don\'t fit classic patterns'
      ]},
      { type: 'callout', variant: 'tip', title: 'Rule of Three', text: 'If you see a pattern in three places, consider refactoring into a reusable solution. Two times is coincidence; three times is a pattern.' }
    ]
  },
  {
    id: 'patterns-in-java-stdlib',
    title: 'Patterns in the Java Standard Library',
    blocks: [
      { type: 'heading', level: 2, text: 'Patterns in the Java Standard Library' },
      { type: 'paragraph', text: 'Design patterns are not academic constructs—they are **embedded in widely-used libraries**. The Java Standard Library (JDK) uses classic patterns extensively. Recognizing these patterns helps you understand and use the JDK more effectively.' },
      { type: 'heading', level: 3, text: 'Gang of Four Patterns in JDK' },
      { type: 'table', headers: ['Pattern', 'Class/Interface', 'Usage', 'Example Method'], rows: [
        ['Singleton', 'java.lang.Runtime', 'Unique global instance', 'Runtime.getRuntime()'],
        ['Factory Method', 'java.util.Calendar', 'Create instances by type', 'Calendar.getInstance()'],
        ['Factory Method', 'java.text.DateFormat', 'Date formatting factory', 'DateFormat.getDateInstance()'],
        ['Iterator', 'java.util.Iterator', 'Traverse collections', 'list.iterator()'],
        ['Observer', 'java.beans.PropertyChangeListener', 'Listen for property changes', 'addPropertyChangeListener()'],
        ['Decorator', 'java.io.InputStream (subclasses)', 'Wrap streams with behavior', 'new BufferedInputStream(stream)'],
        ['Adapter', 'java.io.InputStreamReader', 'Adapt InputStream to Reader', 'new InputStreamReader(in)'],
        ['Facade', 'javax.xml.parsers.DocumentBuilderFactory', 'Simplified XML parsing', 'newInstance()'],
        ['Template Method', 'java.util.AbstractList', 'Define algorithm skeleton', 'add(), remove(), etc.']
      ]},
      { type: 'heading', level: 3, text: 'Code Example: Multiple Patterns' },
      { type: 'code', language: 'java', code: '// Singleton: Get unique Runtime instance\nRuntime runtime = Runtime.getRuntime();\n\n// Factory Method: Create calendar for current locale\nCalendar cal = Calendar.getInstance();\n\n// Decorator: Wrap InputStream with buffering\nInputStream file = new FileInputStream("data.txt");\nInputStream buffered = new BufferedInputStream(file);\n\n// Adapter: Convert InputStream to Reader\nReader reader = new InputStreamReader(buffered);\n\n// Iterator: Traverse list\nList<String> items = new ArrayList<>();\nfor (Iterator<String> it = items.iterator(); it.hasNext();) {\n  String item = it.next();\n}', filename: 'JdkPatternExamples.java' },
      { type: 'callout', variant: 'note', title: 'Learning Opportunity', text: 'Study JDK source code. When you see a pattern in the standard library, you understand both the pattern and the real-world reasoning behind it.' }
    ]
  },
  {
    id: 'chapter01-summary',
    title: 'Chapter 1 Summary',
    blocks: [
      { type: 'heading', level: 2, text: 'Chapter 1 Summary' },
      { type: 'paragraph', text: 'Design patterns are **proven, reusable solutions** to recurring design problems. They enable communication, reduce complexity, and guide developers toward maintainable code.' },
      { type: 'heading', level: 3, text: 'Key Takeaways' },
      { type: 'list', ordered: true, items: [
        'Design patterns are **templates, not code**—they apply across languages and domains',
        'The **Gang of Four** documented 23 classic patterns in three categories: Creational (5), Structural (7), Behavioral (11)',
        'Patterns **solve design problems**, provide shared vocabulary, and encode best practices',
        '**SOLID principles** guide good design and underlie pattern application',
        'Patterns are documented using **UML class and sequence diagrams**',
        'Two core principles: **Program to Interface** and **Favor Composition over Inheritance**',
        'Patterns are tools, not requirements—avoid over-engineering with patterns',
        'The **Java Standard Library** extensively uses Gang of Four patterns',
        'Learn patterns by studying real-world examples in frameworks and libraries'
      ]},
      { type: 'heading', level: 3, text: 'The 23 Gang of Four Patterns at a Glance' },
      { type: 'diagram', format: 'mermaid', content: 'graph TD\n  A["23 Design Patterns"] --> B["Creational"]  \n  A --> C["Structural"]\n  A --> D["Behavioral"]\n  B --> B1["Singleton<br/>Factory<br/>Builder<br/>Prototype<br/>Abs. Factory"]\n  C --> C1["Adapter<br/>Bridge<br/>Composite<br/>Decorator<br/>Facade<br/>Flyweight<br/>Proxy"]\n  D --> D1["Chain of Resp.<br/>Command<br/>Interpreter<br/>Iterator<br/>Mediator<br/>Memento<br/>Observer<br/>State<br/>Strategy<br/>Template Meth.<br/>Visitor"]', label: 'All 23 Patterns Organized by Category' },
      { type: 'paragraph', text: 'Next chapter: Dive deep into **Creational Patterns** starting with **Singleton**, **Factory Method**, and **Abstract Factory**.' }
    ]
  }
];
