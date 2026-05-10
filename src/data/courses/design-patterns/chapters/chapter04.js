export const sections = [
  {
    id: 'structural-overview',
    title: 'Structural Patterns Overview',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'What Do Structural Patterns Do?'
      },
      {
        type: 'paragraph',
        text: 'Structural patterns focus on composing objects and classes into larger structures while keeping these structures flexible and efficient. They help you realize new functionality by combining existing classes and objects in novel ways.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'The Seven Structural Patterns'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          '**Adapter** - Convert interface to another clients expect',
          '**Bridge** - Decouple abstraction from implementation',
          '**Composite** - Compose objects into tree structures',
          '**Decorator** - Attach responsibilities dynamically',
          '**Facade** - Provide unified interface to subsystem',
          '**Flyweight** - Share objects to reduce memory',
          '**Proxy** - Provide surrogate for another object'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Pattern Taxonomy'
      },
      {
        type: 'diagram',
        format: 'mermaid',
        content: 'flowchart TD\n  A["Structural Patterns"] --> B["Interface Conversion"]\n  A --> C["Object Composition"]\n  A --> D["Deferred Access"]\n  B --> B1["Adapter"]\n  B --> B2["Bridge"]\n  C --> C1["Composite"]\n  C --> C2["Decorator"]\n  C --> C3["Facade"]\n  D --> D1["Proxy"]\n  D --> D2["Flyweight"]\n  style A fill:#e1f5ff\n  style B fill:#fff3e0\n  style C fill:#fff3e0\n  style D fill:#fff3e0',
        label: 'Structural Patterns Taxonomy'
      }
    ]
  },
  {
    id: 'adapter-concept',
    title: 'Adapter Pattern: Concept & Intent',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'The Problem: Incompatible Interfaces'
      },
      {
        type: 'paragraph',
        text: 'You have two classes with **incompatible interfaces** that need to work together. Changing either class is not an option (e.g., third-party library, legacy code). The Adapter acts as a **translator** between them.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Real-World Analogy'
      },
      {
        type: 'paragraph',
        text: 'A power outlet adapter lets you plug a European 220V appliance into a US 110V outlet. The adapter translates voltage and plug shape without changing either device.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Adapter Pattern Intent'
      },
      {
        type: 'paragraph',
        text: 'Convert the interface of a class into another interface clients expect. Adapter lets classes work together that otherwise could not because of incompatible interfaces.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Two Variants'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          '**Class Adapter** - Uses inheritance (Java requires interfaces since no multiple inheritance)',
          '**Object Adapter** - Uses composition (preferred in Java)'
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
        content: 'classDiagram\n  class Target {\n    +request()*\n  }\n  class Adaptee {\n    +specificRequest()\n  }\n  class Adapter {\n    -adaptee: Adaptee\n    +request()\n  }\n  class Client\n  Target <|.. Adapter\n  Adapter --> Adaptee\n  Client --> Target',
        label: 'Object Adapter Structure (Preferred)'
      }
    ]
  },
  {
    id: 'adapter-implementation',
    title: 'Adapter Implementation: Legacy to Modern',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Real Example: XML to JSON Adapter'
      },
      {
        type: 'paragraph',
        text: 'Legacy system uses XML API. New system requires JSON. Instead of rewriting, create an adapter.'
      },
      {
        type: 'code',
        language: 'java',
        code: `// Legacy XML-based API
public interface XmlDataProvider {
  String getXmlData();
}

public class LegacyXmlApi implements XmlDataProvider {
  @Override
  public String getXmlData() {
    return "<person><name>Alice</name><age>30</age></person>";
  }
}

// Modern JSON-based API (what we want)
public interface JsonDataProvider {
  Map<String, Object> getJsonData();
}

// Adapter: translates XML to JSON
public class XmlToJsonAdapter implements JsonDataProvider {
  private XmlDataProvider xmlProvider;

  public XmlToJsonAdapter(XmlDataProvider xmlProvider) {
    this.xmlProvider = xmlProvider;
  }

  @Override
  public Map<String, Object> getJsonData() {
    String xml = xmlProvider.getXmlData();

    // Parse XML and convert to JSON representation
    Map<String, Object> jsonMap = new HashMap<>();
    // Simplified: real implementation would use XML parser
    jsonMap.put("name", "Alice");
    jsonMap.put("age", 30);

    return jsonMap;
  }
}

// Usage
public class Client {
  public static void main(String[] args) {
    // Old API
    XmlDataProvider legacyXml = new LegacyXmlApi();
    System.out.println("XML: " + legacyXml.getXmlData());

    // Adapter wraps old API with new interface
    JsonDataProvider jsonView = new XmlToJsonAdapter(legacyXml);
    System.out.println("JSON: " + jsonView.getJsonData());

    // Client code works with JsonDataProvider - no coupling to legacy API
    useJsonData(jsonView);
  }

  private static void useJsonData(JsonDataProvider provider) {
    Map<String, Object> data = provider.getJsonData();
    System.out.println("Name: " + data.get("name"));
    System.out.println("Age: " + data.get("age"));
  }
}`,
        filename: 'XmlToJsonAdapter.java'
      },
      {
        type: 'callout',
        variant: 'tip',
        title: 'Composition Over Inheritance',
        text: 'Java does not support multiple inheritance. Use **Object Adapter** (composition) instead of Class Adapter. Wrap the Adaptee, don\'t extend it.'
      }
    ]
  },
  {
    id: 'adapter-class-vs-object',
    title: 'Class Adapter vs Object Adapter',
    blocks: [
      {
        type: 'table',
        headers: ['Aspect', 'Class Adapter', 'Object Adapter'],
        rows: [
          ['Mechanism', 'Extends Adaptee, implements Target', 'Composes Adaptee, implements Target'],
          ['Multiple Adaptees', 'Cannot adapt subclasses well', 'Can wrap any Adaptee'],
          ['Code Reuse', 'Adapts Adaptee behavior directly', 'Delegates to Adaptee'],
          ['Flexibility', 'Less - inheritance is rigid', 'More - composition is flexible'],
          ['Java Support', 'Limited (no multiple inheritance)', 'Full (composition native)'],
          ['Overhead', 'Minimal', 'One extra object reference']
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Class Adapter Workaround in Java'
      },
      {
        type: 'code',
        language: 'java',
        code: `// Adaptee
public class OldPaymentSystem {
  public double processPayment(int amountCents) {
    return amountCents / 100.0;
  }
}

// Target interface (what we want)
public interface ModernPaymentGateway {
  void pay(BigDecimal amount);
}

// Class Adapter (using interface + inheritance trick)
// Note: Still uses composition because Java lacks MI
public class PaymentAdapter extends OldPaymentSystem implements ModernPaymentGateway {
  @Override
  public void pay(BigDecimal amount) {
    double result = this.processPayment(amount.multiply(BigDecimal.valueOf(100)).intValue());
    System.out.println("Processed: $" + result);
  }
}

// Usage
ModernPaymentGateway gateway = new PaymentAdapter();
gateway.pay(new BigDecimal("99.99"));`
      },
      {
        type: 'callout',
        variant: 'important',
        title: 'Always Prefer Object Adapter',
        text: 'Even the "Class Adapter" workaround in Java actually uses composition. **Object Adapter is the standard and only practical choice in Java.**'
      }
    ]
  },
  {
    id: 'adapter-stdlib',
    title: 'Adapter Examples in Java Standard Library',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Adapters in the JDK'
      },
      {
        type: 'heading',
        level: 3,
        text: 'InputStreamReader: InputStream → Reader'
      },
      {
        type: 'code',
        language: 'java',
        code: `// InputStream (byte-oriented)
InputStream is = new FileInputStream("file.txt");

// InputStreamReader adapts it to Reader (character-oriented)
Reader reader = new InputStreamReader(is, StandardCharsets.UTF_8);

// Now use Reader interface
BufferedReader buffered = new BufferedReader(reader);
String line = buffered.readLine();`
      },
      {
        type: 'heading',
        level: 3,
        text: 'Arrays.asList(): Array → List'
      },
      {
        type: 'code',
        language: 'java',
        code: `String[] array = {"apple", "banana", "cherry"};

// Adapts array to List interface
List<String> list = Arrays.asList(array);

// Now use List methods
list.forEach(System.out::println);
System.out.println("Contains banana: " + list.contains("banana"));`
      },
      {
        type: 'heading',
        level: 3,
        text: 'Collections Wrappers'
      },
      {
        type: 'code',
        language: 'java',
        code: `List<String> original = new ArrayList<>(Arrays.asList("a", "b", "c"));

// Adapts mutable list to unmodifiable view
List<String> unmodifiable = Collections.unmodifiableList(original);

// Adapts collection to synchronized view
List<String> synchronized = Collections.synchronizedList(original);

// Adapts iterator to stream
Stream<String> stream = original.stream();`
      },
      {
        type: 'table',
        headers: ['Adapter', 'From', 'To', 'Use Case'],
        rows: [
          ['InputStreamReader', 'InputStream', 'Reader', 'Byte to character conversion'],
          ['Arrays.asList()', 'Array', 'List', 'Array to collection'],
          ['Collections.unmodifiable*', 'Mutable Collection', 'Immutable View', 'Read-only wrapper'],
          ['Collections.synchronized*', 'Collection', 'Thread-safe View', 'Synchronization wrapper'],
          ['StreamSupport.stream()', 'Iterable', 'Stream', 'Functional adaptation']
        ]
      }
    ]
  },
  {
    id: 'bridge-concept',
    title: 'Bridge Pattern: Concept & Intent',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Problem: Cartesian Product Explosion'
      },
      {
        type: 'paragraph',
        text: 'You have two varying dimensions: **abstraction** and **implementation**. As both vary independently, you end up with a Cartesian product of classes.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Example: Shape × Renderer'
      },
      {
        type: 'paragraph',
        text: 'You need: `Circle`, `Square`, `Triangle` (shapes) × `VectorRenderer`, `RasterRenderer`, `WebRenderer` (renderers). Naive approach: 3 × 3 = **9 classes**. Bridge: **6 classes**.'
      },
      {
        type: 'diagram',
        format: 'mermaid',
        content: 'graph LR\n  subgraph Without\n    C1["CircleVector"]\n    C2["CircleRaster"]\n    S1["SquareVector"]\n    S2["SquareRaster"]\n    T1["TriangleVector"]\n    T2["TriangleRaster"]\n    style C1 fill:#ffcccc\n    style C2 fill:#ffcccc\n    style S1 fill:#ffcccc\n    style S2 fill:#ffcccc\n    style T1 fill:#ffcccc\n    style T2 fill:#ffcccc\n  end\n  \n  subgraph With\n    A["Shape"]\n    C["Circle"]\n    S["Square"]\n    R["Renderer"]\n    V["VectorRenderer"]\n    Ra["RasterRenderer"]\n    A --> C\n    A --> S\n    A --> R\n    R --> V\n    R --> Ra\n    style A fill:#ccffcc\n    style C fill:#ccffcc\n    style S fill:#ccffcc\n    style R fill:#ccffcc\n    style V fill:#ccffcc\n    style Ra fill:#ccffcc\n  end',
        label: 'Bridge: Reducing Complexity'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Bridge Pattern Intent'
      },
      {
        type: 'paragraph',
        text: 'Decouple an abstraction from its implementation so the two can vary independently. Use a bridge interface to allow abstraction and implementation to evolve separately.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Architecture'
      },
      {
        type: 'diagram',
        format: 'mermaid',
        content: 'classDiagram\n  class Abstraction {\n    -implementor: Implementor\n    +operation()\n  }\n  class RefinedAbstraction {\n    +operation()\n  }\n  class Implementor {\n    +operationImpl()*\n  }\n  class ConcreteImplementorA {\n    +operationImpl()\n  }\n  class ConcreteImplementorB {\n    +operationImpl()\n  }\n  Abstraction --> Implementor\n  Abstraction <|-- RefinedAbstraction\n  Implementor <|-- ConcreteImplementorA\n  Implementor <|-- ConcreteImplementorB',
        label: 'Bridge Pattern Structure'
      }
    ]
  },
  {
    id: 'bridge-implementation',
    title: 'Bridge Implementation: Shape × Renderer',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Full Implementation: Separating Abstraction and Rendering'
      },
      {
        type: 'code',
        language: 'java',
        code: `// Implementor: Rendering abstraction
public interface Renderer {
  void drawCircle(int x, int y, int radius);
  void drawSquare(int x, int y, int size);
}

// Concrete Implementors
public class VectorRenderer implements Renderer {
  @Override
  public void drawCircle(int x, int y, int radius) {
    System.out.println("Drawing circle using Vector: center=(" + x + "," + y + "), radius=" + radius);
  }

  @Override
  public void drawSquare(int x, int y, int size) {
    System.out.println("Drawing square using Vector: pos=(" + x + "," + y + "), size=" + size);
  }
}

public class RasterRenderer implements Renderer {
  @Override
  public void drawCircle(int x, int y, int radius) {
    System.out.println("Rasterizing circle: center=(" + x + "," + y + "), radius=" + radius);
  }

  @Override
  public void drawSquare(int x, int y, int size) {
    System.out.println("Rasterizing square: pos=(" + x + "," + y + "), size=" + size);
  }
}

// Abstraction: Shape (holds bridge to Renderer)
public abstract class Shape {
  protected Renderer renderer;

  public Shape(Renderer renderer) {
    this.renderer = renderer;
  }

  public abstract void draw();
}

// Refined Abstractions
public class Circle extends Shape {
  private int x, y, radius;

  public Circle(Renderer renderer, int x, int y, int radius) {
    super(renderer);
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  @Override
  public void draw() {
    renderer.drawCircle(x, y, radius);
  }
}

public class Square extends Shape {
  private int x, y, size;

  public Square(Renderer renderer, int x, int y, int size) {
    super(renderer);
    this.x = x;
    this.y = y;
    this.size = size;
  }

  @Override
  public void draw() {
    renderer.drawSquare(x, y, size);
  }
}

// Usage: No explosion!
public class GraphicsApp {
  public static void main(String[] args) {
    Renderer vector = new VectorRenderer();
    Renderer raster = new RasterRenderer();

    // Same shape, different renderers
    Shape circle1 = new Circle(vector, 10, 20, 5);
    Shape circle2 = new Circle(raster, 10, 20, 5);

    Shape square1 = new Square(vector, 0, 0, 50);
    Shape square2 = new Square(raster, 0, 0, 50);

    circle1.draw();   // Drawing circle using Vector
    circle2.draw();   // Rasterizing circle
    square1.draw();   // Drawing square using Vector
    square2.draw();   // Rasterizing square
  }
}`,
        filename: 'BridgeExample.java'
      },
      {
        type: 'callout',
        variant: 'tip',
        title: 'Bridge vs Inheritance',
        text: 'Without Bridge: 3 shapes × 2 renderers = 6 concrete classes (CircleVector, CircleRaster, etc.). With Bridge: 3 shapes + 2 renderers = 5 classes. **Composition scales better than inheritance.**'
      }
    ]
  },
  {
    id: 'bridge-vs-adapter',
    title: 'Bridge vs Adapter: Key Differences',
    blocks: [
      {
        type: 'table',
        headers: ['Aspect', 'Bridge', 'Adapter'],
        rows: [
          ['Intent', 'Decouple abstraction from implementation upfront', 'Make incompatible interfaces work together'],
          ['Applied When', 'Designing system (future variation)', 'Retroactively (existing incompatibility)'],
          ['Structure', 'Composition separates two hierarchies', 'Composition translates one interface to another'],
          ['Participants', 'Abstraction, RefinedAbstraction, Implementor, ConcreteImplementor', 'Target, Adapter, Adaptee, Client'],
          ['Flexibility', 'Multiple abstractions & implementations vary independently', 'One abstraction adapted to one adaptee'],
          ['Example', 'Shape abstraction uses Renderer implementation', 'XML API adapted to JSON interface']
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Memory Aid'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          '**Bridge** = Preemptive design pattern (anticipate variation)',
          '**Adapter** = Reactive pattern (fix existing incompatibility)',
          'Both use composition, but Bridge separates **two evolving dimensions**, Adapter translates **one interface to another**'
        ]
      }
    ]
  },
  {
    id: 'composite-concept',
    title: 'Composite Pattern: Concept & Intent',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Problem: Tree Structures'
      },
      {
        type: 'paragraph',
        text: 'Many applications work with hierarchical tree structures: **file systems** (folders → files), **UI frameworks** (panels → buttons → labels), **organization charts** (departments → employees). Treating leaves and branches uniformly is hard.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Composite Pattern Intent'
      },
      {
        type: 'paragraph',
        text: 'Compose objects into **tree structures** to represent part-whole hierarchies. Composite lets clients treat individual objects and compositions of objects uniformly.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Real-World Examples'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          '**File System**: Directory (composite) contains Files (leaf) and Directories',
          '**UI Frameworks**: Panel (composite) contains Buttons (leaf), Labels, and more Panels',
          '**Organization Chart**: Department (composite) contains Employees (leaf) and sub-Departments',
          '**Graphics**: Group (composite) contains Shapes (leaf) and Groups'
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
        content: 'classDiagram\n  class Component {\n    +operation()*\n    +add(Component)*\n    +remove(Component)*\n  }\n  class Leaf {\n    +operation()\n  }\n  class Composite {\n    -children: List~Component~\n    +operation()\n    +add(Component)\n    +remove(Component)\n  }\n  class Client\n  Component <|-- Leaf\n  Component <|-- Composite\n  Composite o-- Component\n  Client --> Component',
        label: 'Composite Pattern Structure'
      }
    ]
  },
  {
    id: 'composite-implementation',
    title: 'Composite Implementation: File System',
    blocks: [
      {
        type: 'code',
        language: 'java',
        code: `import java.util.ArrayList;
import java.util.List;

// Component: Abstract file system element
public abstract class FileComponent {
  protected String name;

  public FileComponent(String name) {
    this.name = name;
  }

  public abstract int getSize();
  public abstract void display(int indentation);

  public void add(FileComponent component) {
    throw new UnsupportedOperationException("Cannot add to " + getClass().getSimpleName());
  }

  public void remove(FileComponent component) {
    throw new UnsupportedOperationException("Cannot remove from " + getClass().getSimpleName());
  }
}

// Leaf: File
public class File extends FileComponent {
  private int size;

  public File(String name, int size) {
    super(name);
    this.size = size;
  }

  @Override
  public int getSize() {
    return size;
  }

  @Override
  public void display(int indentation) {
    System.out.println(indent(indentation) + "[F] " + name + " (" + size + " bytes)");
  }

  private String indent(int count) {
    return "  ".repeat(count);
  }
}

// Composite: Directory
public class Directory extends FileComponent {
  private List<FileComponent> children = new ArrayList<>();

  public Directory(String name) {
    super(name);
  }

  @Override
  public void add(FileComponent component) {
    children.add(component);
  }

  @Override
  public void remove(FileComponent component) {
    children.remove(component);
  }

  @Override
  public int getSize() {
    // Recursively sum children
    return children.stream()
      .mapToInt(FileComponent::getSize)
      .sum();
  }

  @Override
  public void display(int indentation) {
    System.out.println(indent(indentation) + "[D] " + name + "/");
    // Recursively display children
    for (FileComponent child : children) {
      child.display(indentation + 1);
    }
  }

  private String indent(int count) {
    return "  ".repeat(count);
  }
}

// Usage
public class FileSystemExample {
  public static void main(String[] args) {
    Directory root = new Directory("root");

    Directory docs = new Directory("Documents");
    Directory photos = new Directory("Photos");

    File resume = new File("resume.pdf", 2048);
    File letter = new File("letter.txt", 512);
    File vacation = new File("vacation.jpg", 2048000);

    root.add(docs);
    root.add(photos);

    docs.add(resume);
    docs.add(letter);
    photos.add(vacation);

    // Display entire tree uniformly
    root.display(0);

    System.out.println("\\nTotal size: " + root.getSize() + " bytes");
  }
}`,
        filename: 'FileSystem.java'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Output'
      },
      {
        type: 'code',
        language: 'text',
        code: `[D] root/
  [D] Documents/
    [F] resume.pdf (2048 bytes)
    [F] letter.txt (512 bytes)
  [D] Photos/
    [F] vacation.jpg (2048000 bytes)

Total size: 2050560 bytes`
      }
    ]
  },
  {
    id: 'composite-traversal',
    title: 'Composite Traversal Strategies',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Traversing the Tree'
      },
      {
        type: 'paragraph',
        text: 'Composite patterns typically use **recursive traversal** to visit all nodes. Different traversal strategies (depth-first, breadth-first, pre-order, post-order) are possible.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Recursive Traversal Sequence'
      },
      {
        type: 'diagram',
        format: 'mermaid',
        content: 'sequenceDiagram\n  participant Client\n  participant Dir as Directory\n  participant SubDir as SubDirectory\n  participant File\n  \n  Client->>Dir: display()\n  Dir->>Dir: print self\n  Dir->>SubDir: display()\n  SubDir->>SubDir: print self\n  SubDir->>File: display()\n  File->>File: print self\n  File-->>SubDir: done\n  SubDir-->>Dir: done\n  Dir-->>Client: done',
        label: 'Recursive Tree Traversal'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Pre-Order Traversal (used above)'
      },
      {
        type: 'code',
        language: 'java',
        code: `@Override
public void display(int indentation) {
  // 1. Process self first (pre-order)
  System.out.println(indent(indentation) + "[D] " + name + "/");

  // 2. Then process children
  for (FileComponent child : children) {
    child.display(indentation + 1);
  }
}`
      },
      {
        type: 'heading',
        level: 3,
        text: 'Post-Order Traversal (size calculation)'
      },
      {
        type: 'code',
        language: 'java',
        code: `@Override
public int getSize() {
  // 1. Process children first (post-order)
  int size = 0;
  for (FileComponent child : children) {
    size += child.getSize();
  }
  // 2. Then use the results
  return size;
}`
      },
      {
        type: 'heading',
        level: 3,
        text: 'Breadth-First Traversal (Iterator Pattern)'
      },
      {
        type: 'code',
        language: 'java',
        code: `import java.util.Queue;
import java.util.LinkedList;

public void displayBreadthFirst() {
  Queue<FileComponent> queue = new LinkedList<>();
  queue.add(this);

  while (!queue.isEmpty()) {
    FileComponent current = queue.poll();
    if (current instanceof Directory dir) {
      System.out.println("[D] " + dir.name);
      queue.addAll(dir.children);
    } else {
      System.out.println("[F] " + current.name);
    }
  }
}`
      }
    ]
  },
  {
    id: 'chapter04-summary',
    title: 'Chapter 4 Summary: Structural Patterns I',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Pattern Summary Table'
      },
      {
        type: 'table',
        headers: ['Pattern', 'Problem', 'Solution', 'Key Classes'],
        rows: [
          ['Adapter', 'Incompatible interfaces', 'Translate interface via composition', 'Target, Adapter, Adaptee'],
          ['Bridge', 'Abstraction & implementation vary independently', 'Separate dimensions via composition', 'Abstraction, Implementor'],
          ['Composite', 'Tree structures with mixed leaf/branch', 'Treat nodes uniformly, recurse', 'Component, Leaf, Composite']
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Java Standard Library Examples'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          '**Adapter**: InputStreamReader, Arrays.asList(), Collections.unmodifiable*',
          '**Bridge**: Swing/AWT (Component hierarchy × platform renderers)',
          '**Composite**: File system APIs, Swing containers, XML DOM trees'
        ]
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
          '**Adapter**: Composition, not inheritance. Fix incompatibility without changing existing classes.',
          '**Bridge**: Preemptive design—decouple two varying dimensions. Use when both abstraction and implementation will evolve.',
          '**Composite**: Recursive tree traversal. Uniform treatment of leaves and branches enables clean, scalable code.',
          'All three are **object-oriented composition** patterns—prefer composition over inheritance.',
          'Next chapter: Decorator, Facade, Proxy (remaining 4 structural patterns)'
        ]
      }
    ]
  }
];
