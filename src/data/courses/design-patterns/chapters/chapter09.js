export const sections = [
  {
    id: 'visitor-concept',
    title: 'Visitor Pattern: Concept',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'What is the Visitor Pattern?'
      },
      {
        type: 'paragraph',
        text: 'The **Visitor** pattern is a behavioral design pattern that allows you to add new operations to objects without modifying their structure. It uses a technique called **double dispatch** to select the correct operation based on both the visitor type and the element type.'
      },
      {
        type: 'paragraph',
        text: 'When your object structure is stable but operations on those objects change frequently, the Visitor pattern prevents you from polluting the element classes with new methods. Instead, operations are encapsulated in visitor classes.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Key Concepts'
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Visitor interface defines methods to visit each element type',
          'Concrete Visitors implement specific operations',
          'Element interface defines accept(Visitor) method',
          'Concrete Elements implement the accept method, calling visitor.visit(this)',
          'Double dispatch resolves both visitor and element type at runtime'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'UML Structure'
      },
      {
        type: 'diagram',
        format: 'mermaid',
        content: 'classDiagram\n  class Visitor {\n    +visit(ConcreteElementA)\n    +visit(ConcreteElementB)\n  }\n  class ConcreteVisitor {\n    +visit(ConcreteElementA)\n    +visit(ConcreteElementB)\n  }\n  class Element {\n    +accept(Visitor)\n  }\n  class ConcreteElementA {\n    +accept(Visitor)\n  }\n  class ConcreteElementB {\n    +accept(Visitor)\n  }\n  Visitor <|-- ConcreteVisitor\n  Element <|-- ConcreteElementA\n  Element <|-- ConcreteElementB\n  Visitor o-- Element',
        label: 'Visitor Pattern Structure'
      },
      {
        type: 'heading',
        level: 3,
        text: 'When to Use Visitor'
      },
      {
        type: 'callout',
        variant: 'tip',
        title: 'Best Use Cases',
        text: 'Use Visitor when: (1) element class hierarchy is stable and unlikely to change, (2) operations on elements change frequently, (3) you need to perform different operations on different element types, (4) logic for operations would otherwise be spread across many classes.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Advantages & Disadvantages'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          '✓ Separates concerns: operations live in visitor classes',
          '✓ Easy to add new operations without modifying elements',
          '✓ Centralizes operation logic',
          '✗ Hard to add new element types (must update all visitors)',
          '✗ Breaks encapsulation (elements must expose state)',
          '✗ Code complexity increases'
        ]
      }
    ]
  },
  {
    id: 'visitor-implementation',
    title: 'Visitor Pattern: Implementation',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Shopping Cart Tax Calculator Example'
      },
      {
        type: 'paragraph',
        text: 'Consider a shopping cart system with different item types (Book, Electronics, Food). Each has different tax rates. The Visitor pattern lets us calculate taxes without modifying the item classes.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 1: Define Element Hierarchy'
      },
      {
        type: 'code',
        language: 'java',
        code: 'public interface ShoppingCartItem {\n  void accept(Visitor visitor);\n  double getPrice();\n}\n\npublic class Book implements ShoppingCartItem {\n  private String title;\n  private double price;\n\n  public Book(String title, double price) {\n    this.title = title;\n    this.price = price;\n  }\n\n  @Override\n  public void accept(Visitor visitor) {\n    visitor.visit(this);\n  }\n\n  @Override\n  public double getPrice() {\n    return price;\n  }\n}\n\npublic class Electronics implements ShoppingCartItem {\n  private String name;\n  private double price;\n\n  public Electronics(String name, double price) {\n    this.name = name;\n    this.price = price;\n  }\n\n  @Override\n  public void accept(Visitor visitor) {\n    visitor.visit(this);\n  }\n\n  @Override\n  public double getPrice() {\n    return price;\n  }\n}\n\npublic class Food implements ShoppingCartItem {\n  private String name;\n  private double price;\n\n  public Food(String name, double price) {\n    this.name = name;\n    this.price = price;\n  }\n\n  @Override\n  public void accept(Visitor visitor) {\n    visitor.visit(this);\n  }\n\n  @Override\n  public double getPrice() {\n    return price;\n  }\n}',
        filename: 'ShoppingCartItem.java'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 2: Define Visitor Interface'
      },
      {
        type: 'code',
        language: 'java',
        code: 'public interface Visitor {\n  double visit(Book book);\n  double visit(Electronics electronics);\n  double visit(Food food);\n}',
        filename: 'Visitor.java'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 3: Implement Concrete Visitors'
      },
      {
        type: 'code',
        language: 'java',
        code: 'public class TaxVisitor implements Visitor {\n  @Override\n  public double visit(Book book) {\n    // Books: 0% tax\n    return book.getPrice() * 0.0;\n  }\n\n  @Override\n  public double visit(Electronics electronics) {\n    // Electronics: 15% tax\n    return electronics.getPrice() * 0.15;\n  }\n\n  @Override\n  public double visit(Food food) {\n    // Food: 5% tax\n    return food.getPrice() * 0.05;\n  }\n}\n\npublic class DiscountVisitor implements Visitor {\n  @Override\n  public double visit(Book book) {\n    // Books: 10% discount\n    return book.getPrice() * 0.10;\n  }\n\n  @Override\n  public double visit(Electronics electronics) {\n    // Electronics: 5% discount\n    return electronics.getPrice() * 0.05;\n  }\n\n  @Override\n  public double visit(Food food) {\n    // Food: no discount\n    return 0;\n  }\n}',
        filename: 'Visitors.java'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 4: Client Code'
      },
      {
        type: 'code',
        language: 'java',
        code: 'public class ShoppingCart {\n  private List<ShoppingCartItem> items = new ArrayList<>();\n\n  public void addItem(ShoppingCartItem item) {\n    items.add(item);\n  }\n\n  public double calculateTax() {\n    Visitor taxVisitor = new TaxVisitor();\n    double totalTax = 0;\n    for (ShoppingCartItem item : items) {\n      totalTax += item.accept(taxVisitor);\n    }\n    return totalTax;\n  }\n\n  public double calculateDiscount() {\n    Visitor discountVisitor = new DiscountVisitor();\n    double totalDiscount = 0;\n    for (ShoppingCartItem item : items) {\n      totalDiscount += item.accept(discountVisitor);\n    }\n    return totalDiscount;\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    ShoppingCart cart = new ShoppingCart();\n    cart.addItem(new Book(\"Clean Code\", 50.0));\n    cart.addItem(new Electronics(\"Laptop\", 1200.0));\n    cart.addItem(new Food(\"Apple\", 2.0));\n\n    System.out.println(\"Total Tax: $\" + cart.calculateTax());        // Output: $185.1\n    System.out.println(\"Total Discount: $\" + cart.calculateDiscount()); // Output: $65.0\n  }\n}',
        filename: 'Main.java'
      },
      {
        type: 'callout',
        variant: 'important',
        title: 'Key Insight',
        text: 'Notice how `item.accept(visitor)` calls the correct `visit()` method based on the item type. This is **double dispatch** in action: first dispatch selects the `accept()` method, second dispatch selects the `visit()` method.'
      }
    ]
  },
  {
    id: 'visitor-double-dispatch',
    title: 'Understanding Double Dispatch',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'What is Double Dispatch?'
      },
      {
        type: 'paragraph',
        text: 'Double dispatch is a technique where method selection happens based on two runtime types: the type of the object receiving the message AND the type of the parameter. This allows the same method call to execute different code depending on both types.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Sequence Diagram: Double Dispatch in Action'
      },
      {
        type: 'diagram',
        format: 'mermaid',
        content: 'sequenceDiagram\n  participant Client\n  participant Book as book: Book\n  participant TaxVisitor as visitor: TaxVisitor\n  Client->>Book: accept(visitor)\n  Note over Book: First dispatch selects accept() on Book\n  Book->>TaxVisitor: visit(this)\n  Note over TaxVisitor: Second dispatch selects visit(Book) on TaxVisitor\n  TaxVisitor-->>Client: 0.0 (tax amount)',
        label: 'Double Dispatch Sequence'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Why This Solves the Problem'
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Without Visitor: Adding `calculateTax()` requires modifying every item class (Book, Electronics, Food, etc.)',
          'With Visitor: Create one TaxVisitor class that handles all item types',
          'Adding new operations: Create a new Visitor (e.g., DiscountVisitor, PriceValidator) without touching item classes',
          'Adding new item types: Update all Visitors (acceptable if operations change frequently, not item types)'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Static vs Dynamic Dispatch'
      },
      {
        type: 'paragraph',
        text: 'In Java, method overloading is resolved at **compile time** (static dispatch). But when you call `item.accept(visitor)`, the JVM doesn\'t know if `item` is a Book, Electronics, or Food at compile time. This is resolved at **runtime** (dynamic dispatch). Visitor exploits both mechanisms.'
      },
      {
        type: 'code',
        language: 'java',
        code: 'ShoppingCartItem item = new Book(\"Java\", 50); // Compile-time type: ShoppingCartItem\nitem.accept(visitor);                           // Runtime type: Book\n// JVM performs two lookups:\n// 1. Which accept() method? → Book.accept()\n// 2. Inside Book.accept(), which visit() method? → TaxVisitor.visit(Book)',
        filename: 'DispatchExample.java'
      },
      {
        type: 'callout',
        variant: 'note',
        title: 'Important',
        text: 'This pattern requires polymorphic method invocation and method overloading. Languages without these features (e.g., Python) handle this differently, but the concept remains the same.'
      }
    ]
  },
  {
    id: 'visitor-vs-iterator',
    title: 'Visitor vs Iterator Pattern',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Comparing Visitor and Iterator Patterns'
      },
      {
        type: 'paragraph',
        text: 'Both patterns involve traversing collections, but they solve different problems. Here\'s how they compare:'
      },
      {
        type: 'table',
        headers: ['Aspect', 'Visitor', 'Iterator'],
        rows: [
          ['**Purpose**', 'Add operations to objects', 'Access elements sequentially'],
          ['**Traversal**', 'Visitor controls traversal via accept()', 'Iterator controls traversal via next()'],
          ['**Adding Operations**', 'Easy - create new Visitor', 'Hard - modify iterator logic'],
          ['**Adding Element Types**', 'Hard - update all Visitors', 'Easy - implement Iterator interface'],
          ['**Operation Logic**', 'Encapsulated in Visitor classes', 'Encapsulated in Iterator class'],
          ['**Use When**', 'Operations change, structure stable', 'Need multiple traversal orders'],
          ['**Complexity**', 'Medium (double dispatch)', 'Low (simple iteration)']
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Code Comparison'
      },
      {
        type: 'code',
        language: 'java',
        code: '// ITERATOR PATTERN: Traverse a collection\nIterator<String> iterator = list.iterator();\nwhile (iterator.hasNext()) {\n  String item = iterator.next();\n  System.out.println(item);\n}\n\n// VISITOR PATTERN: Perform operations on elements\nfor (ShoppingCartItem item : items) {\n  double tax = item.accept(new TaxVisitor());\n  System.out.println(tax);\n}',
        filename: 'Comparison.java'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Can They Work Together?'
      },
      {
        type: 'paragraph',
        text: 'Yes! Often you\'ll use Iterator to traverse a collection, and Visitor to perform operations on each element. This combines the strengths of both patterns.'
      },
      {
        type: 'callout',
        variant: 'tip',
        title: 'Rule of Thumb',
        text: '**Use Iterator** when you need different ways to traverse the same collection. **Use Visitor** when you have a stable structure but need different operations on its elements.'
      }
    ]
  },
  {
    id: 'interpreter-concept',
    title: 'Interpreter Pattern: Concept',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'What is the Interpreter Pattern?'
      },
      {
        type: 'paragraph',
        text: 'The **Interpreter** pattern is a behavioral design pattern that defines a grammar for a language and an interpreter to parse and execute sentences in that language. It\'s useful for domain-specific languages (DSLs), expression evaluators, and rule engines.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Core Concepts'
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Abstract Expression: interface for all expression nodes',
          'Terminal Expression: represents leaf nodes (numbers, variables)',
          'Non-terminal Expression: represents operations or combinations (addition, multiplication)',
          'Context: contains shared information needed during interpretation'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'UML Structure'
      },
      {
        type: 'diagram',
        format: 'mermaid',
        content: 'classDiagram\n  class AbstractExpression {\n    +interpret(Context)\n  }\n  class TerminalExpression {\n    -value\n    +interpret(Context)\n  }\n  class NonterminalExpression {\n    -left Expression\n    -right Expression\n    +interpret(Context)\n  }\n  class Context {\n    +variables Map\n  }\n  AbstractExpression <|-- TerminalExpression\n  AbstractExpression <|-- NonterminalExpression\n  NonterminalExpression *-- AbstractExpression\n  AbstractExpression .. Context',
        label: 'Interpreter Pattern Structure'
      },
      {
        type: 'heading',
        level: 3,
        text: 'When to Use Interpreter'
      },
      {
        type: 'callout',
        variant: 'tip',
        title: 'Best Use Cases',
        text: 'Use Interpreter for: (1) simple domain-specific languages, (2) query languages, (3) expression evaluators, (4) configuration parsers, (5) rule engines. Avoid for complex grammars (use ANTLR or parser generators instead).'
      }
    ]
  },
  {
    id: 'interpreter-implementation',
    title: 'Interpreter Pattern: Implementation',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Simple Math Expression Parser'
      },
      {
        type: 'paragraph',
        text: 'Let\'s build an interpreter for simple arithmetic expressions: "3 + 4 * 2". The grammar is: Expression = Term ((+|-) Term)* and Term = Factor ((*|/) Factor)*'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 1: Abstract Expression'
      },
      {
        type: 'code',
        language: 'java',
        code: 'public interface Expression {\n  int interpret();\n}',
        filename: 'Expression.java'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 2: Terminal Expressions'
      },
      {
        type: 'code',
        language: 'java',
        code: 'public class NumberExpression implements Expression {\n  private int number;\n\n  public NumberExpression(int number) {\n    this.number = number;\n  }\n\n  @Override\n  public int interpret() {\n    return number;\n  }\n}',
        filename: 'NumberExpression.java'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 3: Non-terminal Expressions'
      },
      {
        type: 'code',
        language: 'java',
        code: 'public class AddExpression implements Expression {\n  private Expression left;\n  private Expression right;\n\n  public AddExpression(Expression left, Expression right) {\n    this.left = left;\n    this.right = right;\n  }\n\n  @Override\n  public int interpret() {\n    return left.interpret() + right.interpret();\n  }\n}\n\npublic class MultiplyExpression implements Expression {\n  private Expression left;\n  private Expression right;\n\n  public MultiplyExpression(Expression left, Expression right) {\n    this.left = left;\n    this.right = right;\n  }\n\n  @Override\n  public int interpret() {\n    return left.interpret() * right.interpret();\n  }\n}',
        filename: 'Operations.java'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 4: Building and Evaluating Expressions'
      },
      {
        type: 'code',
        language: 'java',
        code: 'public class ExpressionParser {\n  public static void main(String[] args) {\n    // Build: 3 + (4 * 2) = 3 + 8 = 11\n    Expression three = new NumberExpression(3);\n    Expression four = new NumberExpression(4);\n    Expression two = new NumberExpression(2);\n\n    // 4 * 2\n    Expression multiplication = new MultiplyExpression(four, two);\n\n    // 3 + (4 * 2)\n    Expression addition = new AddExpression(three, multiplication);\n\n    System.out.println(\"3 + 4 * 2 = \" + addition.interpret()); // Output: 11\n  }\n}',
        filename: 'ExpressionParser.java'
      },
      {
        type: 'callout',
        variant: 'note',
        title: 'Tree Structure',
        text: 'The expressions form a tree: the root is AddExpression, left child is NumberExpression(3), right child is MultiplyExpression containing two NumberExpressions. `interpret()` recursively evaluates the entire tree.'
      }
    ]
  },
  {
    id: 'interpreter-when-to-use',
    title: 'Interpreter: When to Use & Limitations',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'When to Use Interpreter'
      },
      {
        type: 'table',
        headers: ['Scenario', 'Use Interpreter?', 'Why / Why Not'],
        rows: [
          ['Simple arithmetic expressions', 'Yes', 'Grammar is simple, few operations needed'],
          ['Full programming language', 'No', 'Too complex; use ANTLR or bison instead'],
          ['Query language for domain', 'Yes', 'If grammar is simple and limited'],
          ['Regular expressions', 'No', 'Use specialized regex engines (more efficient)'],
          ['Configuration parser', 'Maybe', 'If grammar is simple; otherwise use YAML/JSON parsers'],
          ['Rule engine', 'Yes', 'If rules follow a simple grammar pattern'],
          ['SQL parser', 'No', 'SQL is complex; use established parsers']
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Limitations & Alternatives'
      },
      {
        type: 'callout',
        variant: 'warning',
        title: 'Complexity Warning',
        text: 'The Interpreter pattern can become complex as grammar grows. For production systems with complex languages, use **parser generators** like ANTLR, Yacc, or Bison. They auto-generate efficient parsers from grammar definitions.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Advantages vs Disadvantages'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          '✓ Easy to extend with new expression types',
          '✓ Grammar is clearly represented in code',
          '✓ Suitable for simple domain languages',
          '✗ Can be slow (tree-walking interpreter)',
          '✗ Grammar becomes hard to manage as complexity grows',
          '✗ Manual parsing logic is error-prone'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Alternative Approaches'
      },
      {
        type: 'list',
        ordered: true,
        items: [
          '**ANTLR (Another Tool for Language Recognition):** Auto-generates lexer/parser from grammar',
          '**Yacc (Yet Another Compiler Compiler):** C/C++ parser generator',
          '**Bison:** GNU parser generator',
          '**Regular Expressions:** For pattern matching (not full language parsing)',
          '**Expression Evaluation Libraries:** Ready-made libraries (e.g., Exp4j for Java math expressions)'
        ]
      }
    ]
  },
  {
    id: 'null-object-concept',
    title: 'Null Object Pattern: Concept',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'What is the Null Object Pattern?'
      },
      {
        type: 'paragraph',
        text: 'The **Null Object** pattern is a behavioral design pattern that replaces `null` references with an object that provides a neutral (no-op) implementation. Instead of checking `if (obj != null)` throughout your code, you use a null object that safely does nothing.'
      },
      {
        type: 'paragraph',
        text: 'This eliminates `NullPointerExceptions` and makes code cleaner by removing constant null checks.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Key Idea'
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Define a base interface or abstract class',
          'Implement a "real" class with actual behavior',
          'Implement a "null" class with no-op behavior',
          'Return null object instead of null when needed',
          'Client code never checks for null'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'UML Structure'
      },
      {
        type: 'diagram',
        format: 'mermaid',
        content: 'classDiagram\n  class AbstractAnimal {\n    +makeSound()\n    +eat()\n  }\n  class RealDog {\n    +makeSound()\n    +eat()\n  }\n  class NullAnimal {\n    +makeSound()\n    +eat()\n  }\n  AbstractAnimal <|-- RealDog\n  AbstractAnimal <|-- NullAnimal\n  note for NullAnimal "Does nothing"',
        label: 'Null Object Pattern Structure'
      },
      {
        type: 'heading',
        level: 3,
        text: 'When to Use Null Object'
      },
      {
        type: 'callout',
        variant: 'tip',
        title: 'Best Use Cases',
        text: 'Use Null Object when: (1) you want to eliminate null checks, (2) the absence of an object should be handled gracefully, (3) you need default no-op behavior, (4) it\'s acceptable for operations to silently do nothing.'
      }
    ]
  },
  {
    id: 'null-object-implementation',
    title: 'Null Object Pattern: Implementation',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Logger Example with Null Object'
      },
      {
        type: 'paragraph',
        text: 'Consider a logging system. In production, we use ConsoleLogger. In tests, we want to suppress logs but still execute without null checks. We use NullLogger instead.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 1: Logger Interface'
      },
      {
        type: 'code',
        language: 'java',
        code: 'public interface Logger {\n  void info(String message);\n  void warn(String message);\n  void error(String message);\n}',
        filename: 'Logger.java'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 2: Real Logger Implementation'
      },
      {
        type: 'code',
        language: 'java',
        code: 'public class ConsoleLogger implements Logger {\n  @Override\n  public void info(String message) {\n    System.out.println(\"[INFO] \" + message);\n  }\n\n  @Override\n  public void warn(String message) {\n    System.out.println(\"[WARN] \" + message);\n  }\n\n  @Override\n  public void error(String message) {\n    System.err.println(\"[ERROR] \" + message);\n  }\n}',
        filename: 'ConsoleLogger.java'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 3: Null Logger (No-op)'
      },
      {
        type: 'code',
        language: 'java',
        code: 'public class NullLogger implements Logger {\n  @Override\n  public void info(String message) {\n    // Do nothing\n  }\n\n  @Override\n  public void warn(String message) {\n    // Do nothing\n  }\n\n  @Override\n  public void error(String message) {\n    // Do nothing\n  }\n}',
        filename: 'NullLogger.java'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 4: Client Code (No Null Checks!)'
      },
      {
        type: 'code',
        language: 'java',
        code: 'public class Application {\n  private Logger logger;\n\n  public Application(Logger logger) {\n    this.logger = logger; // Never null\n  }\n\n  public void process(String data) {\n    logger.info(\"Processing: \" + data);\n    // ... do work ...\n    logger.warn(\"Almost done\");\n    logger.info(\"Complete\");\n  }\n\n  public static void main(String[] args) {\n    // Production: use ConsoleLogger\n    Application app1 = new Application(new ConsoleLogger());\n    app1.process(\"data\"); // Logs to console\n\n    // Testing: use NullLogger (no output)\n    Application app2 = new Application(new NullLogger());\n    app2.process(\"test\"); // Silent, no null checks needed\n  }\n}',
        filename: 'Application.java'
      },
      {
        type: 'callout',
        variant: 'important',
        title: 'No Null Checks Required',
        text: 'Notice the `process()` method never checks `if (logger != null)`. The code assumes logger is always available. In testing, we pass NullLogger which silently ignores all calls. This is much cleaner than:\n```\nif (logger != null) logger.info(...);\n```'
      }
    ]
  },
  {
    id: 'null-object-vs-optional',
    title: 'Null Object vs Optional',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Comparing Null Object and Optional'
      },
      {
        type: 'paragraph',
        text: 'Java 8 introduced `Optional<T>` which forces you to explicitly handle the absence of a value. Null Object is an older pattern that avoids this by providing a concrete object. When should you use each?'
      },
      {
        type: 'table',
        headers: ['Aspect', 'Null Object', 'Optional'],
        rows: [
          ['**Represents**', 'An object with neutral behavior', 'The absence of a value (explicitly)'],
          ['**Null Checks**', 'No null checks needed', 'Forced to handle absence with map/ifPresent'],
          ['**Method Calls**', 'Can call methods directly', 'Must unwrap first (orElse, get, ifPresent)'],
          ['**Behavior**', 'Silent no-op', 'Throws exception if unpacked incorrectly'],
          ['**Use When**', 'No-op behavior is acceptable', 'Absence is significant and must be handled'],
          ['**Overhead**', 'One extra object instance', 'Wrapper object (small overhead)'],
          ['**Readability**', 'Code doesn\'t show absence handling', 'Code explicitly handles absence']
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Code Comparison'
      },
      {
        type: 'code',
        language: 'java',
        code: '// NULL OBJECT: No null checks, silent no-op\nLogger logger = getLogger(); // Returns ConsoleLogger or NullLogger\nlogger.info(\"Hello\");         // Works regardless of which logger\n\n// OPTIONAL: Explicit handling of absence\nOptional<Logger> logger = getLoggerOptional();\nlogger.ifPresent(l -> l.info(\"Hello\"));\n// or\nlogger.orElse(new NullLogger()).info(\"Hello\");',
        filename: 'Comparison.java'
      },
      {
        type: 'heading',
        level: 3,
        text: 'When to Use Each'
      },
      {
        type: 'callout',
        variant: 'tip',
        title: 'Decision Guide',
        text: '**Use Null Object** when: absence is normal and no-op behavior is acceptable (e.g., logging, notifications).\n**Use Optional** when: absence is significant and requires explicit handling (e.g., user lookup, configuration retrieval).'
      },
      {
        type: 'paragraph',
        text: 'In modern Java code, prefer `Optional` as it makes intent explicit. However, Null Object is still useful for specific patterns like logging, event handling, or command execution where silent no-op behavior is expected.'
      }
    ]
  },
  {
    id: 'gof-complete-reference',
    title: 'Complete GoF Pattern Reference',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'All 23 Gang of Four Design Patterns'
      },
      {
        type: 'paragraph',
        text: 'Here\'s a comprehensive reference of all 23 classic GoF patterns, their categories, and real-world examples.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Complete Pattern Table'
      },
      {
        type: 'table',
        headers: ['Pattern Name', 'Category', 'Intent (One Line)', 'Java JDK Example'],
        rows: [
          ['Singleton', 'Creational', 'Ensure one instance exists', 'Runtime, Logger implementations'],
          ['Factory Method', 'Creational', 'Create objects without specifying exact classes', 'Collection.sort(), List.of()'],
          ['Abstract Factory', 'Creational', 'Create families of related objects', 'javax.xml.parsers.DocumentBuilderFactory'],
          ['Builder', 'Creational', 'Construct complex objects step-by-step', 'StringBuilder, ProcessBuilder'],
          ['Prototype', 'Creational', 'Clone objects instead of creating new ones', 'Object.clone(), Cloneable interface'],
          ['Adapter', 'Structural', 'Convert interface to another clients expect', 'Arrays.asList(), InputStreamReader'],
          ['Bridge', 'Structural', 'Decouple abstraction from implementation', 'JDBC Driver interface'],
          ['Composite', 'Structural', 'Treat individual objects and compositions uniformly', 'Swing Component hierarchy'],
          ['Decorator', 'Structural', 'Add behavior to objects dynamically', 'BufferedInputStream, Collections.synchronizedList()'],
          ['Facade', 'Structural', 'Provide unified interface to subsystem', 'java.lang.Runtime, javax.faces.context.FacesContext'],
          ['Flyweight', 'Structural', 'Share objects to save memory', 'String pool, Integer.valueOf()'],
          ['Proxy', 'Structural', 'Control access to another object', 'java.lang.reflect.Proxy, RMI stubs'],
          ['Chain of Responsibility', 'Behavioral', 'Pass request along chain of handlers', 'javax.servlet.Filter, Event handling in Swing'],
          ['Command', 'Behavioral', 'Encapsulate request as object', 'Runnable interface, javax.swing.Action'],
          ['Iterator', 'Behavioral', 'Access sequence without exposing structure', 'java.util.Iterator, enhanced for loop'],
          ['Mediator', 'Behavioral', 'Define object to coordinate others', 'java.awt.LayoutManager'],
          ['Memento', 'Behavioral', 'Capture and restore object state', 'Serialization, javax.faces.component.StateHolder'],
          ['Observer', 'Behavioral', 'Notify multiple objects of state changes', 'java.util.Observer, PropertyChangeListener'],
          ['State', 'Behavioral', 'Alter behavior when state changes', 'javax.servlet.http.HttpSession states'],
          ['Strategy', 'Behavioral', 'Define interchangeable algorithms', 'java.util.Comparator, Collections.sort()'],
          ['Template Method', 'Behavioral', 'Define skeleton; subclasses fill details', 'java.io.InputStream.read()'],
          ['Visitor', 'Behavioral', 'Add operations without modifying objects', 'javax.lang.model.element.AnnotationValue#accept()'],
          ['Interpreter', 'Behavioral', 'Define language grammar and interpreter', 'javax.script package']
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Pattern Distribution'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          '**Creational (5):** Singleton, Factory Method, Abstract Factory, Builder, Prototype',
          '**Structural (7):** Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy',
          '**Behavioral (11):** Chain of Responsibility, Command, Iterator, Mediator, Memento, Observer, State, Strategy, Template Method, Visitor, Interpreter'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Chapter Summary & Key Takeaways'
      },
      {
        type: 'callout',
        variant: 'important',
        title: 'Key Insights',
        text: '1. **Visitor** solves "adding operations to stable hierarchies" via double dispatch.\n2. **Interpreter** solves "parsing simple languages" by representing grammar as object trees.\n3. **Null Object** solves "eliminating null checks" with silent no-op behavior.\n4. **GoF Patterns are Language-Agnostic:** Same concepts apply to Python, C++, JavaScript, etc., though syntax differs.\n5. **Modern Alternatives:** Java 8+ features like lambdas, Optional, and functional interfaces reduce reliance on some GoF patterns.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Final Recommendations'
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Learn all 23 patterns to recognize when they apply',
          'Don\'t over-engineer: use patterns only when they solve real problems',
          'Prefer language features (lambdas, Optional, type inference) when available',
          'Combine patterns to solve complex problems',
          'Study real-world implementations in frameworks (Spring, Hibernate, Guava) and the JDK',
          'Keep refactoring: patterns sometimes emerge during refactoring of duplicated code'
        ]
      }
    ]
  }
];
