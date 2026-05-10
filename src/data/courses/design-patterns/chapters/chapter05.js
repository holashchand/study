export const sections = [
  {
    id: 'decorator-concept',
    title: 'Decorator Pattern: Concept',
    blocks: [
      {
        type: 'paragraph',
        text: 'The **Decorator pattern** allows you to attach additional responsibilities to an object dynamically. It provides a flexible alternative to subclassing for extending functionality.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Problem: The Subclassing Trap'
      },
      {
        type: 'paragraph',
        text: 'Without decorators, you might create a class hierarchy: `Coffee`, `CoffeeWithMilk`, `CoffeeWithSugar`, `CoffeeWithMilkAndSugar`, `CoffeeWithWhipped`, etc. This leads to a **combinatorial explosion** of classes.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Solution: Wrap Objects'
      },
      {
        type: 'paragraph',
        text: 'Instead, use decorators to wrap objects and add behavior at runtime. A `SugarDecorator` can wrap any `Coffee`, and a `MilkDecorator` can wrap the result.'
      },
      {
        type: 'diagram',
        format: 'mermaid',
        content: 'classDiagram\n  class Component {\n    <<interface>>\n    +cost() double\n    +description() String\n  }\n  class ConcreteComponent {\n    +cost() double\n    +description() String\n  }\n  class Decorator {\n    <<abstract>>\n    -component: Component\n    +cost() double\n    +description() String\n  }\n  class ConcreteDecoratorA {\n    +cost() double\n    +description() String\n  }\n  class ConcreteDecoratorB {\n    +cost() double\n    +description() String\n  }\n  Component <|.. ConcreteComponent\n  Component <|.. Decorator\n  Decorator <|-- ConcreteDecoratorA\n  Decorator <|-- ConcreteDecoratorB\n  Decorator o-- Component : wraps',
        label: 'Decorator Pattern Structure'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Coffee Shop Analogy'
      },
      {
        type: 'paragraph',
        text: 'You order a base coffee ($2). Then you add milk (+$0.50), then sugar (+$0.30), then whipped cream (+$0.70). Each addition is a decorator that wraps the previous order and adds cost and description.'
      },
      {
        type: 'callout',
        variant: 'tip',
        title: 'Key Insight',
        text: 'Decorators are transparent to the client. You call methods on the outermost decorator, which delegates to the inner object, creating a chain of responsibility for behavior.'
      }
    ]
  },
  {
    id: 'decorator-implementation',
    title: 'Decorator Pattern: Java Implementation',
    blocks: [
      {
        type: 'paragraph',
        text: 'Let\'s implement the coffee shop example with a complete working decorator pattern in Java.'
      },
      {
        type: 'code',
        language: 'java',
        filename: 'Coffee.java',
        code: 'public interface Coffee {\n  double getCost();\n  String getDescription();\n}'
      },
      {
        type: 'code',
        language: 'java',
        filename: 'SimpleCoffee.java',
        code: 'public class SimpleCoffee implements Coffee {\n  @Override\n  public double getCost() {\n    return 2.0;\n  }\n\n  @Override\n  public String getDescription() {\n    return "Simple Coffee";\n  }\n}'
      },
      {
        type: 'code',
        language: 'java',
        filename: 'CoffeeDecorator.java',
        code: 'public abstract class CoffeeDecorator implements Coffee {\n  protected Coffee coffee;\n\n  public CoffeeDecorator(Coffee coffee) {\n    this.coffee = coffee;\n  }\n\n  @Override\n  public double getCost() {\n    return coffee.getCost();\n  }\n\n  @Override\n  public String getDescription() {\n    return coffee.getDescription();\n  }\n}'
      },
      {
        type: 'code',
        language: 'java',
        filename: 'MilkDecorator.java',
        code: 'public class MilkDecorator extends CoffeeDecorator {\n  public MilkDecorator(Coffee coffee) {\n    super(coffee);\n  }\n\n  @Override\n  public double getCost() {\n    return super.getCost() + 0.50;\n  }\n\n  @Override\n  public String getDescription() {\n    return super.getDescription() + ", Milk";\n  }\n}'
      },
      {
        type: 'code',
        language: 'java',
        filename: 'SugarDecorator.java',
        code: 'public class SugarDecorator extends CoffeeDecorator {\n  public SugarDecorator(Coffee coffee) {\n    super(coffee);\n  }\n\n  @Override\n  public double getCost() {\n    return super.getCost() + 0.30;\n  }\n\n  @Override\n  public String getDescription() {\n    return super.getDescription() + ", Sugar";\n  }\n}'
      },
      {
        type: 'code',
        language: 'java',
        filename: 'WhippedCreamDecorator.java',
        code: 'public class WhippedCreamDecorator extends CoffeeDecorator {\n  public WhippedCreamDecorator(Coffee coffee) {\n    super(coffee);\n  }\n\n  @Override\n  public double getCost() {\n    return super.getCost() + 0.70;\n  }\n\n  @Override\n  public String getDescription() {\n    return super.getDescription() + ", Whipped Cream";\n  }\n}'
      },
      {
        type: 'code',
        language: 'java',
        filename: 'Client.java',
        code: 'public class Client {\n  public static void main(String[] args) {\n    // Base coffee\n    Coffee coffee = new SimpleCoffee();\n    System.out.println(coffee.getDescription() + ": $" + coffee.getCost());\n    // Output: Simple Coffee: $2.0\n\n    // Add milk\n    coffee = new MilkDecorator(coffee);\n    System.out.println(coffee.getDescription() + ": $" + coffee.getCost());\n    // Output: Simple Coffee, Milk: $2.5\n\n    // Add sugar\n    coffee = new SugarDecorator(coffee);\n    System.out.println(coffee.getDescription() + ": $" + coffee.getCost());\n    // Output: Simple Coffee, Milk, Sugar: $2.8\n\n    // Add whipped cream\n    coffee = new WhippedCreamDecorator(coffee);\n    System.out.println(coffee.getDescription() + ": $" + coffee.getCost());\n    // Output: Simple Coffee, Milk, Sugar, Whipped Cream: $3.5\n  }\n}'
      },
      {
        type: 'callout',
        variant: 'important',
        title: 'Dynamic Composition',
        text: 'Notice how you can stack decorators in any order at runtime. The same `SimpleCoffee` can be wrapped differently in different parts of your application.'
      }
    ]
  },
  {
    id: 'decorator-java-io',
    title: 'Decorator Pattern: Java I/O Streams',
    blocks: [
      {
        type: 'paragraph',
        text: 'Java\'s `java.io` package is a perfect real-world example of the Decorator pattern. Streams wrap each other to add functionality.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Stream Wrapping Example'
      },
      {
        type: 'code',
        language: 'java',
        filename: 'JavaIOExample.java',
        code: 'import java.io.*;\n\npublic class JavaIOExample {\n  public static void main(String[] args) throws IOException {\n    // FileInputStream: basic file reading\n    FileInputStream fis = new FileInputStream("data.txt");\n\n    // BufferedInputStream: adds buffering for efficiency\n    BufferedInputStream bis = new BufferedInputStream(fis);\n\n    // DataInputStream: adds typed data reading (readInt, readDouble, etc.)\n    DataInputStream dis = new DataInputStream(bis);\n\n    // Now you can read typed data efficiently with buffering\n    int count = dis.readInt();\n    double value = dis.readDouble();\n\n    dis.close();\n  }\n}'
      },
      {
        type: 'diagram',
        format: 'mermaid',
        content: 'graph TD\n  A["FileInputStream"] -->|reads raw bytes| B["BufferedInputStream"]\n  B -->|adds buffering| C["DataInputStream"]\n  C -->|adds typed reading| D["Client Code"]\n  D -->|calls readInt/readDouble| C\n  C -->|delegates to| B\n  B -->|delegates to| A',
        label: 'Java I/O Stream Wrapping'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Component Hierarchy'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          '`InputStream`: component interface (all streams implement this)',
          '`FileInputStream`: concrete component (reads from file)',
          '`BufferedInputStream`: decorator (adds buffering)',
          '`DataInputStream`: decorator (adds typed reading)',
          '`ZipInputStream`: decorator (adds decompression)',
          'Can be stacked: `new ZipInputStream(new BufferedInputStream(new FileInputStream(...)))`'
        ]
      },
      {
        type: 'callout',
        variant: 'note',
        title: 'Constructor Pattern',
        text: 'Each decorator accepts the wrapped stream in its constructor. This allows building chains at runtime without modifying the original classes.'
      }
    ]
  },
  {
    id: 'facade-concept',
    title: 'Facade Pattern: Concept',
    blocks: [
      {
        type: 'paragraph',
        text: 'The **Facade pattern** provides a unified, simplified interface to a set of interfaces in a subsystem. It\'s used to hide the complexity of a large system behind a single, easy-to-use interface.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Problem: Complex Subsystems'
      },
      {
        type: 'paragraph',
        text: 'You have a home theater system with multiple components: amplifier, DVD player, projector, lights, popcorn machine. Coordinating all of them for a movie requires many method calls and understanding each component\'s API.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Solution: Single Entry Point'
      },
      {
        type: 'paragraph',
        text: 'A `HomeTheaterFacade` provides simple methods like `watchMovie()` and `endMovie()` that internally coordinate all the subsystem components.'
      },
      {
        type: 'diagram',
        format: 'mermaid',
        content: 'classDiagram\n  class HomeTheaterFacade {\n    -amplifier: Amplifier\n    -dvdPlayer: DVDPlayer\n    -projector: Projector\n    -lights: Light\n    +watchMovie(movie: String) void\n    +endMovie() void\n  }\n  class Amplifier {\n    +on() void\n    +setVolume(int) void\n    +off() void\n  }\n  class DVDPlayer {\n    +on() void\n    +play(String) void\n    +stop() void\n    +off() void\n  }\n  class Projector {\n    +on() void\n    +wideScreenOn() void\n    +off() void\n  }\n  class Light {\n    +on() void\n    +dim(int) void\n    +off() void\n  }\n  HomeTheaterFacade o-- Amplifier\n  HomeTheaterFacade o-- DVDPlayer\n  HomeTheaterFacade o-- Projector\n  HomeTheaterFacade o-- Light',
        label: 'Home Theater Facade Structure'
      },
      {
        type: 'callout',
        variant: 'tip',
        title: 'Decoupling Benefit',
        text: 'Clients don\'t need to know about subsystem components. Changes to the subsystem don\'t affect client code as long as the facade interface stays the same.'
      }
    ]
  },
  {
    id: 'facade-implementation',
    title: 'Facade Pattern: Java Implementation',
    blocks: [
      {
        type: 'paragraph',
        text: 'Let\'s implement the home theater facade with all subsystem components.'
      },
      {
        type: 'code',
        language: 'java',
        filename: 'Amplifier.java',
        code: 'public class Amplifier {\n  private String description;\n  private Tuner tuner;\n  private int volume;\n\n  public Amplifier(String description) {\n    this.description = description;\n  }\n\n  public void on() {\n    System.out.println(description + " on");\n  }\n\n  public void setVolume(int level) {\n    this.volume = level;\n    System.out.println(description + " setting volume to " + level);\n  }\n\n  public void off() {\n    System.out.println(description + " off");\n  }\n}'
      },
      {
        type: 'code',
        language: 'java',
        filename: 'DVDPlayer.java',
        code: 'public class DVDPlayer {\n  private String description;\n\n  public DVDPlayer(String description) {\n    this.description = description;\n  }\n\n  public void on() {\n    System.out.println(description + " on");\n  }\n\n  public void play(String movie) {\n    System.out.println(description + " playing \\"" + movie + "\\"");\n  }\n\n  public void stop() {\n    System.out.println(description + " stopped");\n  }\n\n  public void off() {\n    System.out.println(description + " off");\n  }\n}'
      },
      {
        type: 'code',
        language: 'java',
        filename: 'Projector.java',
        code: 'public class Projector {\n  private String description;\n\n  public Projector(String description) {\n    this.description = description;\n  }\n\n  public void on() {\n    System.out.println(description + " on");\n  }\n\n  public void wideScreenOn() {\n    System.out.println(description + " in widescreen mode");\n  }\n\n  public void off() {\n    System.out.println(description + " off");\n  }\n}'
      },
      {
        type: 'code',
        language: 'java',
        filename: 'Light.java',
        code: 'public class Light {\n  private String location;\n  private int level;\n\n  public Light(String location) {\n    this.location = location;\n  }\n\n  public void on() {\n    level = 100;\n    System.out.println(location + " lights on");\n  }\n\n  public void dim(int level) {\n    this.level = level;\n    System.out.println(location + " lights dimmed to " + level + "%");\n  }\n\n  public void off() {\n    level = 0;\n    System.out.println(location + " lights off");\n  }\n}'
      },
      {
        type: 'code',
        language: 'java',
        filename: 'HomeTheaterFacade.java',
        code: 'public class HomeTheaterFacade {\n  private Amplifier amplifier;\n  private DVDPlayer dvdPlayer;\n  private Projector projector;\n  private Light light;\n\n  public HomeTheaterFacade(Amplifier amplifier, DVDPlayer dvdPlayer,\n                           Projector projector, Light light) {\n    this.amplifier = amplifier;\n    this.dvdPlayer = dvdPlayer;\n    this.projector = projector;\n    this.light = light;\n  }\n\n  public void watchMovie(String movie) {\n    System.out.println("Getting ready to watch a movie...");\n    light.dim(10);\n    projector.on();\n    projector.wideScreenOn();\n    amplifier.on();\n    amplifier.setVolume(5);\n    dvdPlayer.on();\n    dvdPlayer.play(movie);\n  }\n\n  public void endMovie() {\n    System.out.println("Shutting down movie theater...");\n    light.on();\n    projector.off();\n    amplifier.off();\n    dvdPlayer.stop();\n    dvdPlayer.off();\n  }\n}'
      },
      {
        type: 'code',
        language: 'java',
        filename: 'HomeTheaterClient.java',
        code: 'public class HomeTheaterClient {\n  public static void main(String[] args) {\n    // Create subsystem components\n    Amplifier amplifier = new Amplifier("Amplifier");\n    DVDPlayer dvdPlayer = new DVDPlayer("DVD Player");\n    Projector projector = new Projector("Projector");\n    Light light = new Light("Room");\n\n    // Create facade\n    HomeTheaterFacade homeTheater = new HomeTheaterFacade(\n      amplifier, dvdPlayer, projector, light\n    );\n\n    // Simple interface: just call watchMovie()\n    homeTheater.watchMovie("The Matrix");\n    System.out.println();\n    homeTheater.endMovie();\n  }\n}'
      },
      {
        type: 'callout',
        variant: 'important',
        title: 'Simplified Client Code',
        text: 'Notice how the client only calls two methods on the facade. Without it, the client would need to understand and coordinate 5+ components independently.'
      }
    ]
  },
  {
    id: 'facade-comparison',
    title: 'Facade vs Adapter vs Mediator',
    blocks: [
      {
        type: 'paragraph',
        text: 'These three patterns are often confused because they all manage complexity. Here\'s how they differ:'
      },
      {
        type: 'table',
        headers: ['Aspect', 'Facade', 'Adapter', 'Mediator'],
        rows: [
          ['Intent', 'Hide subsystem complexity', 'Make incompatible interfaces work', 'Reduce coupling between colleagues'],
          ['Hides complexity?', 'Yes, simplifies interface', 'No, wraps for compatibility', 'Centralizes communication'],
          ['Changes interface?', 'Yes, creates new simpler one', 'Yes, adapts interface', 'No, uses existing interfaces'],
          ['Knows subsystems?', 'Yes, coordinates them', 'No, wraps single object', 'Yes, knows all colleagues'],
          ['Example', 'HomeTheaterFacade wraps amplifier, DVD, projector', 'ObjectAdapter wraps legacy class', 'AirTrafficController coordinates aircraft']
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'When to Use Each'
      },
      {
        type: 'list',
        ordered: true,
        items: [
          '**Facade**: You have a complex subsystem and want to provide a simple entry point. Example: web framework abstracts HTTP complexity.',
          '**Adapter**: You have two incompatible interfaces that need to work together. Example: power adapter for different countries.',
          '**Mediator**: Multiple objects need to communicate but you want to avoid tight coupling. Example: dialog box coordinating form fields.'
        ]
      }
    ]
  },
  {
    id: 'flyweight-concept',
    title: 'Flyweight Pattern: Concept',
    blocks: [
      {
        type: 'paragraph',
        text: 'The **Flyweight pattern** shares common state across multiple objects to save memory. It\'s useful when an application creates many similar objects and memory usage becomes a concern.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Two Types of State'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          '**Intrinsic State**: Shared, immutable data that can be reused across flyweight objects. Example: character shape and font in a text editor.',
          '**Extrinsic State**: Context-specific data that changes per use. Example: position and color of text in the document.'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'String Pool Analogy'
      },
      {
        type: 'paragraph',
        text: 'Java caches immutable strings. Instead of creating 1000 identical "Hello" strings in memory, it reuses a single instance. This is the Flyweight pattern in action.'
      },
      {
        type: 'diagram',
        format: 'mermaid',
        content: 'classDiagram\n  class FlyweightFactory {\n    -flyweights: Map\n    +getFlyweight(key: String) Flyweight\n  }\n  class Flyweight {\n    <<interface>>\n    +operation(extrinsicState) void\n  }\n  class ConcreteFlyweight {\n    -intrinsicState: String\n    +operation(extrinsicState) void\n  }\n  class UnsharedConcreteFlyweight {\n    -intrinsicState: String\n    +operation(extrinsicState) void\n  }\n  FlyweightFactory --> ConcreteFlyweight : creates/caches\n  Flyweight <|.. ConcreteFlyweight\n  Flyweight <|.. UnsharedConcreteFlyweight',
        label: 'Flyweight Pattern Structure'
      },
      {
        type: 'callout',
        variant: 'tip',
        title: 'Memory Optimization',
        text: 'Flyweight is most effective when you have many objects with significant overlap in intrinsic state. The trade-off is slightly increased CPU time to manage the shared pool.'
      }
    ]
  },
  {
    id: 'flyweight-implementation',
    title: 'Flyweight Pattern: Java Implementation',
    blocks: [
      {
        type: 'paragraph',
        text: 'We\'ll implement a text editor with character flyweights. Each character\'s font and shape are shared (intrinsic), but position and color are per-instance (extrinsic).'
      },
      {
        type: 'code',
        language: 'java',
        filename: 'CharacterFlyweight.java',
        code: 'public class CharacterFlyweight {\n  private char character;\n  private String font;\n  private int fontSize;\n\n  public CharacterFlyweight(char character, String font, int fontSize) {\n    this.character = character;\n    this.font = font;\n    this.fontSize = fontSize;\n  }\n\n  public void render(int x, int y, String color) {\n    System.out.println("Render \'" + character + "\' at position (" + x + ", " +\n                      y + ") in " + font + " (" + fontSize + "pt) " + color);\n  }\n}'
      },
      {
        type: 'code',
        language: 'java',
        filename: 'CharacterFlyweightFactory.java',
        code: 'import java.util.HashMap;\nimport java.util.Map;\n\npublic class CharacterFlyweightFactory {\n  private Map<String, CharacterFlyweight> flyweights = new HashMap<>();\n\n  public CharacterFlyweight getCharacter(char c, String font, int fontSize) {\n    String key = c + "-" + font + "-" + fontSize;\n\n    // Check if flyweight already exists\n    if (!flyweights.containsKey(key)) {\n      flyweights.put(key, new CharacterFlyweight(c, font, fontSize));\n      System.out.println("Created new flyweight for: " + key);\n    } else {\n      System.out.println("Reused flyweight for: " + key);\n    }\n\n    return flyweights.get(key);\n  }\n\n  public int getFlyweightCount() {\n    return flyweights.size();\n  }\n}'
      },
      {
        type: 'code',
        language: 'java',
        filename: 'Document.java',
        code: 'import java.util.ArrayList;\nimport java.util.List;\n\npublic class Document {\n  private List<Character> characters = new ArrayList<>();\n  private CharacterFlyweightFactory factory;\n\n  public Document(CharacterFlyweightFactory factory) {\n    this.factory = factory;\n  }\n\n  public void addCharacter(char c, String font, int fontSize, int x, int y, String color) {\n    CharacterFlyweight flyweight = factory.getCharacter(c, font, fontSize);\n    characters.add(new Character(flyweight, x, y, color));\n  }\n\n  public void render() {\n    for (Character character : characters) {\n      character.render();\n    }\n  }\n\n  private static class Character {\n    private CharacterFlyweight flyweight;\n    private int x, y;\n    private String color;\n\n    public Character(CharacterFlyweight flyweight, int x, int y, String color) {\n      this.flyweight = flyweight;\n      this.x = x;\n      this.y = y;\n      this.color = color;\n    }\n\n    public void render() {\n      flyweight.render(x, y, color);\n    }\n  }\n}'
      },
      {
        type: 'code',
        language: 'java',
        filename: 'FlyweightClient.java',
        code: 'public class FlyweightClient {\n  public static void main(String[] args) {\n    CharacterFlyweightFactory factory = new CharacterFlyweightFactory();\n    Document document = new Document(factory);\n\n    // Add characters to document\n    document.addCharacter(\'H\', "Arial", 12, 10, 10, "black");\n    document.addCharacter(\'e\', "Arial", 12, 20, 10, "black");\n    document.addCharacter(\'l\', "Arial", 12, 30, 10, "black");\n    document.addCharacter(\'l\', "Arial", 12, 40, 10, "black");  // Reuses \'l\' flyweight\n    document.addCharacter(\'o\', "Arial", 12, 50, 10, "red");\n\n    System.out.println("\\nTotal unique flyweights: " + factory.getFlyweightCount());\n    System.out.println("\\nRendering document:");\n    document.render();\n  }\n}'
      },
      {
        type: 'callout',
        variant: 'important',
        title: 'Object Pool Management',
        text: 'The factory maintains a cache (HashMap) of intrinsic states. When the same character-font-size combination is requested again, it returns the cached flyweight instead of creating a new one.'
      }
    ]
  },
  {
    id: 'proxy-concept',
    title: 'Proxy Pattern: Concept',
    blocks: [
      {
        type: 'paragraph',
        text: 'The **Proxy pattern** provides a placeholder or surrogate for another object to control access to it. The proxy acts as a gatekeeper, controlling when and how the real object is accessed.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Four Types of Proxies'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          '**Virtual Proxy**: Lazy initialization. Defers creating expensive objects until they\'re actually needed.',
          '**Remote Proxy**: Represents a remote object (across network). Handles serialization and communication.',
          '**Protection Proxy**: Controls access based on permissions. Checks credentials before delegating.',
          '**Caching Proxy**: Caches results to avoid repeated expensive operations.'
        ]
      },
      {
        type: 'diagram',
        format: 'mermaid',
        content: 'classDiagram\n  class Subject {\n    <<interface>>\n    +request() void\n  }\n  class RealSubject {\n    +request() void\n  }\n  class Proxy {\n    -realSubject: RealSubject\n    +request() void\n  }\n  Subject <|.. RealSubject\n  Subject <|.. Proxy\n  Proxy --> RealSubject : delegates to',
        label: 'Proxy Pattern Structure'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Proxy vs Decorator'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          '**Proxy**: Controls access (one purpose), same interface as real subject',
          '**Decorator**: Adds functionality (open-ended), wraps to enhance behavior'
        ]
      },
      {
        type: 'callout',
        variant: 'note',
        title: 'Transparency',
        text: 'The proxy implements the same interface as the real subject, so clients don\'t know they\'re talking to a proxy. This is intentional—the proxy is meant to be invisible.'
      }
    ]
  },
  {
    id: 'proxy-types',
    title: 'Proxy Pattern: Types and Examples',
    blocks: [
      {
        type: 'table',
        headers: ['Proxy Type', 'Purpose', 'When to Use', 'Example'],
        rows: [
          ['Virtual Proxy', 'Lazy load expensive objects', 'Large images, databases, network resources', 'Image viewer that loads thumbnails first'],
          ['Remote Proxy', 'Represent remote object', 'Distributed systems, microservices', 'Java RMI, gRPC, web service client'],
          ['Protection Proxy', 'Control access', 'Authentication, authorization', 'DatabaseProxy checking user permissions'],
          ['Caching Proxy', 'Cache results', 'Expensive computations, API calls', 'HTTPProxy caching responses, result cache']
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Virtual Proxy Example: Lazy Image Loading'
      },
      {
        type: 'code',
        language: 'java',
        filename: 'VirtualProxyExample.java',
        code: 'public interface Image {\n  void display();\n}\n\npublic class RealImage implements Image {\n  private String filename;\n\n  public RealImage(String filename) {\n    this.filename = filename;\n    loadFromDisk();\n  }\n\n  private void loadFromDisk() {\n    System.out.println("Loading image: " + filename);\n  }\n\n  @Override\n  public void display() {\n    System.out.println("Displaying: " + filename);\n  }\n}\n\npublic class ProxyImage implements Image {\n  private String filename;\n  private RealImage realImage;\n\n  public ProxyImage(String filename) {\n    this.filename = filename;\n  }\n\n  @Override\n  public void display() {\n    if (realImage == null) {\n      realImage = new RealImage(filename);  // Load only when needed\n    }\n    realImage.display();\n  }\n}'
      }
    ]
  },
  {
    id: 'proxy-implementation',
    title: 'Proxy Pattern: Protection Proxy Implementation',
    blocks: [
      {
        type: 'paragraph',
        text: 'We\'ll implement a protection proxy that checks user permissions before allowing database access.'
      },
      {
        type: 'code',
        language: 'java',
        filename: 'Database.java',
        code: 'public interface Database {\n  String readData(String key);\n  void writeData(String key, String value);\n}'
      },
      {
        type: 'code',
        language: 'java',
        filename: 'RealDatabase.java',
        code: 'import java.util.HashMap;\nimport java.util.Map;\n\npublic class RealDatabase implements Database {\n  private Map<String, String> data = new HashMap<>();\n\n  @Override\n  public String readData(String key) {\n    System.out.println("RealDatabase: Reading " + key);\n    return data.getOrDefault(key, "Not found");\n  }\n\n  @Override\n  public void writeData(String key, String value) {\n    System.out.println("RealDatabase: Writing " + key + " = " + value);\n    data.put(key, value);\n  }\n}'
      },
      {
        type: 'code',
        language: 'java',
        filename: 'User.java',
        code: 'public class User {\n  private String username;\n  private String role;  // "admin", "user", "guest"\n\n  public User(String username, String role) {\n    this.username = username;\n    this.role = role;\n  }\n\n  public String getUsername() {\n    return username;\n  }\n\n  public String getRole() {\n    return role;\n  }\n\n  public boolean canRead() {\n    return role.equals("admin") || role.equals("user");\n  }\n\n  public boolean canWrite() {\n    return role.equals("admin");\n  }\n}'
      },
      {
        type: 'code',
        language: 'java',
        filename: 'DatabaseProxy.java',
        code: 'public class DatabaseProxy implements Database {\n  private RealDatabase realDatabase;\n  private User user;\n\n  public DatabaseProxy(User user) {\n    this.user = user;\n    this.realDatabase = new RealDatabase();\n  }\n\n  @Override\n  public String readData(String key) {\n    if (!user.canRead()) {\n      throw new SecurityException("User " + user.getUsername() +\n                                  " does not have read permissions");\n    }\n    return realDatabase.readData(key);\n  }\n\n  @Override\n  public void writeData(String key, String value) {\n    if (!user.canWrite()) {\n      throw new SecurityException("User " + user.getUsername() +\n                                  " does not have write permissions");\n    }\n    realDatabase.writeData(key, value);\n  }\n}'
      },
      {
        type: 'code',
        language: 'java',
        filename: 'ProtectionProxyClient.java',
        code: 'public class ProtectionProxyClient {\n  public static void main(String[] args) {\n    User admin = new User("alice", "admin");\n    User regularUser = new User("bob", "user");\n    User guest = new User("charlie", "guest");\n\n    Database adminDb = new DatabaseProxy(admin);\n    Database userDb = new DatabaseProxy(regularUser);\n    Database guestDb = new DatabaseProxy(guest);\n\n    // Admin: can read and write\n    adminDb.readData("secret");\n    adminDb.writeData("secret", "admin-data");\n\n    // Regular user: can only read\n    userDb.readData("public");\n    try {\n      userDb.writeData("public", "user-data");  // Throws exception\n    } catch (SecurityException e) {\n      System.out.println("Access denied: " + e.getMessage());\n    }\n\n    // Guest: cannot read\n    try {\n      guestDb.readData("public");  // Throws exception\n    } catch (SecurityException e) {\n      System.out.println("Access denied: " + e.getMessage());\n    }\n  }\n}'
      },
      {
        type: 'callout',
        variant: 'important',
        title: 'Access Control Pattern',
        text: 'The proxy checks permissions before delegating to the real database. The real object never sees unauthorized requests.'
      }
    ]
  },
  {
    id: 'proxy-dynamic',
    title: 'Proxy Pattern: Dynamic Proxy',
    blocks: [
      {
        type: 'paragraph',
        text: 'Java provides `java.lang.reflect.Proxy` to create proxies dynamically at runtime without writing proxy classes. This is powerful for cross-cutting concerns like logging and timing.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Dynamic Proxy Mechanism'
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Create an `InvocationHandler` that intercepts method calls',
          'Use `Proxy.newProxyInstance()` to create a proxy instance',
          'All method calls go through the handler\'s `invoke()` method'
        ]
      },
      {
        type: 'code',
        language: 'java',
        filename: 'Service.java',
        code: 'public interface Service {\n  void doWork();\n  String getData(String key);\n}'
      },
      {
        type: 'code',
        language: 'java',
        filename: 'RealService.java',
        code: 'public class RealService implements Service {\n  @Override\n  public void doWork() {\n    System.out.println("RealService: Doing work");\n  }\n\n  @Override\n  public String getData(String key) {\n    System.out.println("RealService: Getting data for " + key);\n    return "Data: " + key;\n  }\n}'
      },
      {
        type: 'code',
        language: 'java',
        filename: 'LoggingInvocationHandler.java',
        code: 'import java.lang.reflect.InvocationHandler;\nimport java.lang.reflect.Method;\n\npublic class LoggingInvocationHandler implements InvocationHandler {\n  private Object realObject;\n\n  public LoggingInvocationHandler(Object realObject) {\n    this.realObject = realObject;\n  }\n\n  @Override\n  public Object invoke(Object proxy, Method method, Object[] args)\n      throws Throwable {\n    long startTime = System.nanoTime();\n    System.out.println("[LOG] Calling method: " + method.getName());\n\n    try {\n      Object result = method.invoke(realObject, args);\n      long duration = (System.nanoTime() - startTime) / 1_000_000;  // ms\n      System.out.println("[LOG] Method " + method.getName() +\n                        " took " + duration + "ms");\n      return result;\n    } catch (Exception e) {\n      System.out.println("[ERROR] Method " + method.getName() +\n                        " threw " + e.getCause().getClass().getSimpleName());\n      throw e;\n    }\n  }\n}'
      },
      {
        type: 'code',
        language: 'java',
        filename: 'DynamicProxyClient.java',
        code: 'import java.lang.reflect.Proxy;\n\npublic class DynamicProxyClient {\n  public static void main(String[] args) {\n    Service realService = new RealService();\n\n    // Create a dynamic proxy\n    Service proxyService = (Service) Proxy.newProxyInstance(\n      Service.class.getClassLoader(),\n      new Class[]{Service.class},\n      new LoggingInvocationHandler(realService)\n    );\n\n    // Call methods through the proxy\n    proxyService.doWork();\n    System.out.println();\n    String data = proxyService.getData("user:123");\n    System.out.println("Got: " + data);\n  }\n}'
      },
      {
        type: 'callout',
        variant: 'important',
        title: 'No Proxy Class Needed',
        text: 'With dynamic proxies, you don\'t need to create a separate DatabaseProxy or ServiceProxy class. The JVM creates the proxy class at runtime, reducing boilerplate.'
      }
    ]
  },
  {
    id: 'chapter05-summary',
    title: 'Chapter 5 Summary: Structural Patterns II',
    blocks: [
      {
        type: 'paragraph',
        text: 'This chapter covered four structural patterns that help manage complexity and relationships between objects.'
      },
      {
        type: 'table',
        headers: ['Pattern', 'Problem', 'Solution', 'Key Classes', 'JDK Example'],
        rows: [
          ['Decorator', 'Avoid class explosion from combinations', 'Wrap objects to add behavior', 'Component, Decorator, ConcreteDecorator', 'InputStream wrappers (BufferedInputStream)'],
          ['Facade', 'Complex subsystem hard to use', 'Single unified interface', 'Facade, Subsystem classes', 'java.net.URLEncoder, File I/O'],
          ['Flyweight', 'Too many similar objects consume memory', 'Share intrinsic state via factory', 'Flyweight, FlyweightFactory, Client', 'String pool, Character caches'],
          ['Proxy', 'Need to control access or defer creation', 'Surrogate object as gatekeeper', 'Subject, RealSubject, Proxy', 'java.lang.reflect.Proxy, RMI proxies']
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Key Takeaways'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          '**Decorator**: Stacking and runtime composition beat static inheritance hierarchies.',
          '**Facade**: Simplify external APIs by hiding internal complexity.',
          '**Flyweight**: Cache and share immutable data to save memory in large object systems.',
          '**Proxy**: Control access, defer creation, or add cross-cutting concerns without modifying the real object.'
        ]
      },
      {
        type: 'callout',
        variant: 'tip',
        title: 'Structural Patterns Unify',
        text: 'These four patterns all deal with object composition and relationships. Decorator and Proxy are often confused—remember: Decorator adds features, Proxy controls access.'
      }
    ]
  }
];
