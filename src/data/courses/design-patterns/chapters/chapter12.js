export const sections = [
  {
    id: 'pattern-selection-guide',
    title: 'How to Choose the Right Pattern',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Pattern Selection Framework'
      },
      {
        type: 'paragraph',
        text: 'Design patterns solve different categories of problems. The key is to identify **what problem you\'re solving**, then navigate the decision tree to find applicable patterns.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Decision Tree'
      },
      {
        type: 'diagram',
        format: 'mermaid',
        content: 'flowchart TD\n  A["What problem<br/>are you solving?"] --> B["About object<br/>creation?"] --> C["Creational Patterns<br/>Singleton, Factory,<br/>Builder, Prototype"]]\n  A --> D["About composing<br/>objects together?"] --> E["Structural Patterns<br/>Adapter, Bridge, Composite,<br/>Decorator, Facade, Proxy"]]\n  A --> F["About how objects<br/>communicate?"] --> G["Behavioral Patterns<br/>Chain, Command, Iterator,<br/>Mediator, Memento, Observer"]]\n  A --> H["About object<br/>responsibility?"] --> I["Behavioral Patterns<br/>State, Strategy, Template,<br/>Visitor, Interpreter"]]\n  B --> J["Hide complexity?<br/>Singleton or Facade"]\n  B --> K["Avoid hardcoding<br/>dependencies?<br/>Factory, DI"]\n  B --> L["Complex construction?<br/>Builder"]',
        label: 'Pattern selection decision tree'
      },
      {
        type: 'callout',
        variant: 'tip',
        title: 'Selection Process',
        text: '1. Identify the core problem (creation, composition, communication)\n2. List patterns that address that category\n3. Evaluate trade-offs (complexity, flexibility, testability)\n4. Start with simplest solution, refactor if needed'
      }
    ]
  },
  {
    id: 'pattern-combinations',
    title: 'Patterns That Work Together',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Complementary Pattern Combinations'
      },
      {
        type: 'paragraph',
        text: 'Many patterns are designed to work together. Combining them creates robust, flexible architectures. Here are powerful combinations:'
      },
      {
        type: 'table',
        headers: ['Pattern A', 'Pairs with', 'How They Combine', 'Example Domain'],
        rows: [
          ['Dependency Injection', 'Factory', 'DI provides dependencies; Factory creates them on demand', 'Spring container uses both'],
          ['Factory Method', 'Strategy', 'Factory determines *which* object; Strategy determines *how* it behaves', 'Plugin system picking plugins and behavior'],
          ['Observer', 'Mediator', 'Observer notifies; Mediator routes to subscribers', 'Event bus with routed handlers'],
          ['Decorator', 'Strategy', 'Decorator adds features to object; Strategy changes algorithm inside', 'UI components with pluggable behaviors'],
          ['Template Method', 'Strategy', 'Both define algorithm structure; Template uses inheritance, Strategy uses composition', 'Payment processing (fixed flow, pluggable handlers)'],
          ['Composite', 'Iterator', 'Composite builds tree; Iterator traverses it', 'File systems, DOM trees'],
          ['Command', 'Memento', 'Command captures action; Memento captures state for undo/redo', 'Text editors, macro recording'],
          ['State', 'Strategy', 'State encapsulates behavior per state; Strategy encapsulates algorithm variants', 'Order workflows (states) with plug-in handlers'],
          ['Proxy', 'Decorator', 'Proxy controls access; Decorator adds features (use both for security + enhancement)', 'Lazy-loading cache with logging'],
          ['Facade', 'Adapter', 'Facade simplifies complex subsystem; Adapter makes incompatible interfaces work', 'Legacy system integration']
        ]
      },
      {
        type: 'callout',
        variant: 'important',
        title: 'Composition > Inheritance',
        text: 'When combining patterns, prefer composition (Decorator, Strategy, Proxy) over inheritance (Template Method). Composition is more flexible and avoids fragile base class problem.'
      }
    ]
  },
  {
    id: 'case-study-plugin-system',
    title: 'Case Study: Building a Plugin System',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Practical Example: Extensible Plugin Architecture'
      },
      {
        type: 'paragraph',
        text: 'Problem: Build a reporting system where users can add custom report generators without modifying core code. Solution uses **Factory Method** (to create plugins), **Strategy** (to define plugin behavior), and **Observer** (to notify plugins when reports are requested).'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Architecture'
      },
      {
        type: 'diagram',
        format: 'mermaid',
        content: 'classDiagram\n  class ReportEngine {\n    -plugins: List~ReportPlugin~\n    -listeners: List~ReportListener~\n    +addPlugin(plugin)\n    +generateReport(data)\n    +subscribe(listener)\n  }\n  class ReportPlugin {\n    +getFormat() String\n    +generate(data) String\n  }\n  class PDFReportPlugin {\n    +generate(data)\n  }\n  class ExcelReportPlugin {\n    +generate(data)\n  }\n  class CustomPlugin {\n    +generate(data)\n  }\n  class ReportListener {\n    +onReportGenerated(report)\n  }\n  class LoggingListener {\n    +onReportGenerated(report)\n  }\n  class EmailListener {\n    +onReportGenerated(report)\n  }\n  ReportEngine *-- ReportPlugin\n  ReportPlugin <|-- PDFReportPlugin\n  ReportPlugin <|-- ExcelReportPlugin\n  ReportPlugin <|-- CustomPlugin\n  ReportEngine *-- ReportListener\n  ReportListener <|-- LoggingListener\n  ReportListener <|-- EmailListener',
        label: 'Plugin system architecture'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Implementation'
      },
      {
        type: 'code',
        language: 'java',
        code: '// === STRATEGY PATTERN: Plugin interface ===\n\npublic interface ReportPlugin {\n  String getFormat();\n  String generate(ReportData data);\n}\n\n// Concrete plugins\npublic class PDFReportPlugin implements ReportPlugin {\n  @Override\n  public String getFormat() { return "PDF"; }\n\n  @Override\n  public String generate(ReportData data) {\n    return "%PDF-1.4\\n%% PDF content for " + data.title();\n  }\n}\n\npublic class ExcelReportPlugin implements ReportPlugin {\n  @Override\n  public String getFormat() { return "EXCEL"; }\n\n  @Override\n  public String generate(ReportData data) {\n    return "<?xml version=\"1.0\"?>\\n<Workbook>\\n  <Report>" + data.title() + "</Report>\\n</Workbook>";\n  }\n}\n\n// === FACTORY METHOD: Plugin registry ===\n\npublic class PluginRegistry {\n  private static final Map<String, Class<? extends ReportPlugin>> plugins = new HashMap<>();\n\n  static {\n    plugins.put("pdf", PDFReportPlugin.class);\n    plugins.put("excel", ExcelReportPlugin.class);\n  }\n\n  public static void registerPlugin(String format, Class<? extends ReportPlugin> pluginClass) {\n    plugins.put(format, pluginClass);\n  }\n\n  public static ReportPlugin createPlugin(String format) throws Exception {\n    Class<? extends ReportPlugin> pluginClass = plugins.get(format.toLowerCase());\n    if (pluginClass == null) {\n      throw new IllegalArgumentException("Unknown format: " + format);\n    }\n    return pluginClass.getDeclaredConstructor().newInstance();\n  }\n\n  public static List<String> availableFormats() {\n    return new ArrayList<>(plugins.keySet());\n  }\n}\n\n// === OBSERVER PATTERN: Notification ===\n\npublic interface ReportListener {\n  void onReportGenerated(GeneratedReport report);\n}\n\npublic class LoggingListener implements ReportListener {\n  @Override\n  public void onReportGenerated(GeneratedReport report) {\n    System.out.println("[LOG] Report generated: " + report.format() + ", size: " + report.content().length());\n  }\n}\n\npublic class EmailListener implements ReportListener {\n  private final String emailAddress;\n\n  public EmailListener(String emailAddress) {\n    this.emailAddress = emailAddress;\n  }\n\n  @Override\n  public void onReportGenerated(GeneratedReport report) {\n    System.out.println("[EMAIL] Sending " + report.format() + " report to " + emailAddress);\n    // In reality: use SMTP client\n  }\n}\n\n// === REPORT ENGINE: Orchestrates all three patterns ===\n\npublic class ReportEngine {\n  private final List<ReportListener> listeners = new ArrayList<>();\n\n  public void subscribe(ReportListener listener) {\n    listeners.add(listener);\n  }\n\n  public GeneratedReport generateReport(ReportData data, String format) throws Exception {\n    // Factory Method: create plugin dynamically\n    ReportPlugin plugin = PluginRegistry.createPlugin(format);\n\n    // Strategy: execute chosen plugin\'s algorithm\n    String content = plugin.generate(data);\n    GeneratedReport report = new GeneratedReport(format, content);\n\n    // Observer: notify all listeners\n    for (ReportListener listener : listeners) {\n      listener.onReportGenerated(report);\n    }\n\n    return report;\n  }\n}\n\npublic record GeneratedReport(String format, String content) {}\npublic record ReportData(String title, List<String> rows) {}\n\n// === USAGE ===\n\npublic class ReportApplication {\n  public static void main(String[] args) throws Exception {\n    ReportEngine engine = new ReportEngine();\n\n    // Observer: register listeners\n    engine.subscribe(new LoggingListener());\n    engine.subscribe(new EmailListener("admin@company.com"));\n\n    // Generate reports using different plugins (Factory + Strategy)\n    ReportData data = new ReportData("Q4 Sales", List.of("Row 1", "Row 2"));\n    engine.generateReport(data, "pdf");    // PDFReportPlugin\n    engine.generateReport(data, "excel");  // ExcelReportPlugin\n\n    // Register custom plugin at runtime\n    PluginRegistry.registerPlugin("json", JsonReportPlugin.class);\n    engine.generateReport(data, "json");   // Custom plugin\n  }\n}',
        filename: 'PluginSystemExample.java'
      },
      {
        type: 'callout',
        variant: 'note',
        title: 'Why This Works',
        text: '✓ **Factory**: Load plugins dynamically by name (no hardcoding)\n✓ **Strategy**: Each plugin has its own algorithm (generate method)\n✓ **Observer**: Loosely couple reports from side effects (logging, email)\n✓ **Open/Closed**: Easy to add new plugins without modifying engine'
      }
    ]
  },
  {
    id: 'case-study-order-pipeline',
    title: 'Case Study: Order Processing Pipeline',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Building Order Processing with Patterns'
      },
      {
        type: 'paragraph',
        text: 'Problem: Process orders through multiple steps (validate → authorize payment → reserve inventory → ship) where each step can succeed, fail, or need approval. Solution uses **Chain of Responsibility** (pass request through handlers), **Command** (encapsulate actions), and **State** (track order state).'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Request Flow'
      },
      {
        type: 'diagram',
        format: 'mermaid',
        content: 'sequenceDiagram\n  Client->>OrderPipeline: ProcessOrder(order)\n  OrderPipeline->>ValidatorHandler: handle(order)\n  ValidatorHandler->>PaymentHandler: handle(order)\n  PaymentHandler->>InventoryHandler: handle(order)\n  InventoryHandler->>ShippingHandler: handle(order)\n  ShippingHandler-->>OrderPipeline: order.status=SHIPPED\n  OrderPipeline-->>Client: Success',
        label: 'Chain of Responsibility flow'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Implementation Sketch'
      },
      {
        type: 'code',
        language: 'java',
        code: '// === COMMAND PATTERN: Encapsulate actions ===\n\npublic interface OrderCommand {\n  void execute(Order order);\n}\n\npublic class ValidateOrderCommand implements OrderCommand {\n  @Override\n  public void execute(Order order) {\n    if (order.items().isEmpty()) throw new IllegalArgumentException("Order empty");\n    if (order.total() <= 0) throw new IllegalArgumentException("Invalid total");\n    order.setStatus(OrderStatus.VALIDATED);\n  }\n}\n\npublic class AuthorizePaymentCommand implements OrderCommand {\n  private final PaymentGateway gateway;\n\n  public AuthorizePaymentCommand(PaymentGateway gateway) {\n    this.gateway = gateway;\n  }\n\n  @Override\n  public void execute(Order order) {\n    PaymentResult result = gateway.authorize(order.customer(), order.total());\n    if (!result.approved()) throw new PaymentException("Payment denied");\n    order.setPaymentToken(result.token());\n    order.setStatus(OrderStatus.PAYMENT_AUTHORIZED);\n  }\n}\n\npublic class ReserveInventoryCommand implements OrderCommand {\n  private final InventoryService inventory;\n\n  public ReserveInventoryCommand(InventoryService inventory) {\n    this.inventory = inventory;\n  }\n\n  @Override\n  public void execute(Order order) {\n    for (OrderItem item : order.items()) {\n      if (!inventory.reserve(item.productId(), item.quantity())) {\n        throw new OutOfStockException("Product " + item.productId() + " out of stock");\n      }\n    }\n    order.setStatus(OrderStatus.RESERVED);\n  }\n}\n\n// === CHAIN OF RESPONSIBILITY: Pipeline handler ===\n\npublic abstract class OrderHandler {\n  protected OrderHandler nextHandler;\n\n  public void setNext(OrderHandler nextHandler) {\n    this.nextHandler = nextHandler;\n  }\n\n  public final void handle(Order order) {\n    try {\n      process(order);\n      if (nextHandler != null) {\n        nextHandler.handle(order);\n      }\n    } catch (OrderProcessingException e) {\n      order.setStatus(OrderStatus.FAILED);\n      order.setErrorMessage(e.getMessage());\n      // Don\'t continue chain on error\n    }\n  }\n\n  protected abstract void process(Order order);\n}\n\npublic class ValidatorHandler extends OrderHandler {\n  @Override\n  protected void process(Order order) {\n    new ValidateOrderCommand().execute(order);\n  }\n}\n\npublic class PaymentHandler extends OrderHandler {\n  private final PaymentGateway gateway;\n\n  public PaymentHandler(PaymentGateway gateway) {\n    this.gateway = gateway;\n  }\n\n  @Override\n  protected void process(Order order) {\n    new AuthorizePaymentCommand(gateway).execute(order);\n  }\n}\n\npublic class InventoryHandler extends OrderHandler {\n  private final InventoryService inventory;\n\n  public InventoryHandler(InventoryService inventory) {\n    this.inventory = inventory;\n  }\n\n  @Override\n  protected void process(Order order) {\n    new ReserveInventoryCommand(inventory).execute(order);\n  }\n}\n\npublic class ShippingHandler extends OrderHandler {\n  @Override\n  protected void process(Order order) {\n    order.setStatus(OrderStatus.SHIPPED);\n  }\n}\n\n// === STATE PATTERN: Order state machine ===\n\npublic enum OrderStatus {\n  CREATED,\n  VALIDATED,\n  PAYMENT_AUTHORIZED,\n  RESERVED,\n  SHIPPED,\n  FAILED\n}\n\n// === ASSEMBLING THE PIPELINE ===\n\npublic class OrderApplication {\n  public static void main(String[] args) {\n    PaymentGateway paymentGateway = new StripePaymentGateway();\n    InventoryService inventory = new MySQLInventoryService();\n\n    // Build handler chain\n    ValidatorHandler validator = new ValidatorHandler();\n    PaymentHandler paymentHandler = new PaymentHandler(paymentGateway);\n    InventoryHandler inventoryHandler = new InventoryHandler(inventory);\n    ShippingHandler shippingHandler = new ShippingHandler();\n\n    validator.setNext(paymentHandler);\n    paymentHandler.setNext(inventoryHandler);\n    inventoryHandler.setNext(shippingHandler);\n\n    // Process order\n    Order order = new Order(/* ... */);\n    validator.handle(order);\n\n    if (order.getStatus() == OrderStatus.SHIPPED) {\n      System.out.println("Order processed successfully!");\n    } else {\n      System.out.println("Order failed: " + order.getErrorMessage());\n    }\n  }\n}',
        filename: 'OrderPipelineExample.java'
      },
      {
        type: 'callout',
        variant: 'tip',
        title: 'Why This Approach',
        text: '✓ **Chain of Responsibility**: Easy to add/remove/reorder handlers\n✓ **Command**: Encapsulate each step independently, enable logging/undo\n✓ **State**: Order lifecycle clear from enum, prevents invalid transitions\n✓ **Error handling**: Each step can fail, pipeline stops gracefully'
      }
    ]
  },
  {
    id: 'case-study-document-editor',
    title: 'Case Study: Document Editor Architecture',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Complex Pattern Integration'
      },
      {
        type: 'paragraph',
        text: 'Building a rich text editor (like Google Docs) requires combining multiple patterns: **Command** (undo/redo), **Memento** (save state), **Composite** (document structure), **Iterator** (traverse nodes), **Decorator** (text formatting), **Observer** (UI updates).'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Architecture Diagram'
      },
      {
        type: 'diagram',
        format: 'mermaid',
        content: 'classDiagram\n  class Document {\n    -root: DocumentNode\n    -history: CommandHistory\n    -listeners: List~DocumentListener~\n    +executeCommand(cmd)\n    +undo()\n    +redo()\n    +addListener(listener)\n  }\n  class DocumentNode {\n    -text: String\n    -formatting: TextStyle\n    +accept(visitor)\n    +iterator()\n  }\n  class ContainerNode {\n    -children: List~DocumentNode~\n    +add(node)\n    +remove(node)\n  }\n  class TextNode {\n    -text: String\n  }\n  class Command {\n    +execute()\n    +undo()\n  }\n  class InsertCommand {\n    +execute()\n    +undo()\n  }\n  class FormattingCommand {\n    +execute()\n    +undo()\n  }\n  class Memento {\n    -state: DocumentState\n  }\n  class FormattingDecorator {\n    -node: DocumentNode\n    -style: TextStyle\n    +apply()\n  }\n  Document *-- DocumentNode\n  DocumentNode <|-- ContainerNode\n  DocumentNode <|-- TextNode\n  Document *-- Command\n  Command <|-- InsertCommand\n  Command <|-- FormattingCommand\n  Document *-- Memento\n  DocumentNode *-- FormattingDecorator',
        label: 'Document editor uses multiple patterns'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Key Pattern Roles'
      },
      {
        type: 'list',
        ordered: true,
        items: [
          '**Command**: InsertCommand, DeleteCommand, FormatCommand encapsulate edits, enable undo/redo',
          '**Memento**: Save document state snapshots in history, restore on undo',
          '**Composite**: Document is tree of containers (Document, Paragraph, TextRun) and leaf nodes',
          '**Iterator**: Traverse all text nodes to count words, find text, apply formatting globally',
          '**Decorator**: Add formatting (bold, italic, underline, color) without modifying TextNode',
          '**Observer**: Listen to document changes, update UI automatically'
        ]
      },
      {
        type: 'code',
        language: 'java',
        code: '// === COMMAND + MEMENTO: Undo/redo system ===\n\npublic interface EditCommand {\n  void execute(Document doc);\n  void undo(Document doc);\n  Memento createMemento();\n}\n\npublic class InsertTextCommand implements EditCommand {\n  private final int position;\n  private final String text;\n  private Memento beforeState;\n\n  public InsertTextCommand(int position, String text) {\n    this.position = position;\n    this.text = text;\n  }\n\n  @Override\n  public void execute(Document doc) {\n    beforeState = doc.createMemento();\n    doc.insertText(position, text);\n  }\n\n  @Override\n  public void undo(Document doc) {\n    doc.restore(beforeState);\n  }\n\n  @Override\n  public Memento createMemento() { return beforeState; }\n}\n\npublic class Memento {\n  private final String documentContent;\n  private final List<TextStyle> styles;\n\n  public Memento(String content, List<TextStyle> styles) {\n    this.documentContent = content;\n    this.styles = new ArrayList<>(styles);\n  }\n\n  public String getContent() { return documentContent; }\n  public List<TextStyle> getStyles() { return styles; }\n}\n\n// === COMPOSITE + ITERATOR: Document structure ===\n\npublic abstract class DocumentNode {\n  public abstract String getText();\n  public abstract Iterator<DocumentNode> iterator();\n}\n\npublic class TextNode extends DocumentNode {\n  private String text;\n  private TextStyle style;\n\n  @Override\n  public String getText() { return text; }\n\n  @Override\n  public Iterator<DocumentNode> iterator() {\n    return Collections.singletonList((DocumentNode) this).iterator();\n  }\n}\n\npublic class ContainerNode extends DocumentNode {\n  private List<DocumentNode> children = new ArrayList<>();\n\n  public void add(DocumentNode child) { children.add(child); }\n\n  @Override\n  public String getText() {\n    return children.stream().map(DocumentNode::getText).collect(Collectors.joining());\n  }\n\n  @Override\n  public Iterator<DocumentNode> iterator() {\n    return new CompositeIterator(children.iterator());\n  }\n}\n\n// === DECORATOR: Text formatting ===\n\npublic class FormattedTextNode extends DocumentNode {\n  private final DocumentNode delegate;\n  private final TextStyle style;\n\n  public FormattedTextNode(DocumentNode delegate, TextStyle style) {\n    this.delegate = delegate;\n    this.style = style;\n  }\n\n  @Override\n  public String getText() {\n    String text = delegate.getText();\n    if (style.isBold()) text = "**" + text + "**";\n    if (style.isItalic()) text = "_" + text + "_";\n    return text;\n  }\n\n  @Override\n  public Iterator<DocumentNode> iterator() { return delegate.iterator(); }\n}\n\n// === DOCUMENT orchestrates all patterns ===\n\npublic class Document {\n  private DocumentNode root = new ContainerNode();\n  private List<EditCommand> history = new ArrayList<>();\n  private int historyIndex = -1;\n  private List<DocumentListener> listeners = new ArrayList<>();\n\n  public void executeCommand(EditCommand cmd) {\n    cmd.execute(this);\n    history.add(cmd);\n    historyIndex = history.size() - 1;\n    notifyListeners();\n  }\n\n  public void undo() {\n    if (historyIndex >= 0) {\n      history.get(historyIndex).undo(this);\n      historyIndex--;\n      notifyListeners();\n    }\n  }\n\n  public void redo() {\n    if (historyIndex < history.size() - 1) {\n      historyIndex++;\n      history.get(historyIndex).execute(this);\n      notifyListeners();\n    }\n  }\n\n  public void addListener(DocumentListener listener) { listeners.add(listener); }\n  private void notifyListeners() { listeners.forEach(l -> l.onDocumentChanged(this)); }\n\n  public Memento createMemento() {\n    return new Memento(getText(), extractStyles());\n  }\n\n  public String getText() { return root.getText(); }\n  public Iterator<DocumentNode> getNodes() { return root.iterator(); }\n}',
        filename: 'DocumentEditorExample.java'
      }
    ]
  },
  {
    id: 'case-study-notification-service',
    title: 'Case Study: Notification Service',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Integrating Observer, Template Method, and Decorator'
      },
      {
        type: 'paragraph',
        text: 'A notification system that sends emails, SMS, and push notifications with optional tracking, rate limiting, and retry logic. Uses **Observer** (notify subscribers), **Template Method** (define send algorithm), **Decorator** (add features like logging, retry).'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Design'
      },
      {
        type: 'diagram',
        format: 'mermaid',
        content: 'flowchart TD\n  A["Notification Event"] --> B["NotificationService<br/>(Observable)"]\n  B --> C["EmailNotifier<br/>(Observer)"]\n  B --> D["SMSNotifier<br/>(Observer)"]\n  B --> E["PushNotifier<br/>(Observer)"]\n  C --> C1["RetryDecorator"]\n  C1 --> C2["LoggingDecorator"]\n  D --> D1["RateLimitDecorator"]\n  E --> E1["AnalyticsDecorator"]\n  C2 --> F["Send Email"]',
        label: 'Notification service architecture'
      },
      {
        type: 'code',
        language: 'java',
        code: '// === TEMPLATE METHOD: Base notifier ===\n\npublic abstract class Notifier {\n  // Template method: defines algorithm structure\n  public final void send(Notification notification) {\n    if (shouldSend(notification)) {\n      beforeSend(notification);\n      doSend(notification);  // Subclass implements\n      afterSend(notification);\n    }\n  }\n\n  protected boolean shouldSend(Notification notification) { return true; }\n  protected void beforeSend(Notification notification) {}\n  protected abstract void doSend(Notification notification);\n  protected void afterSend(Notification notification) {}\n}\n\npublic class EmailNotifier extends Notifier {\n  private final EmailService emailService;\n\n  public EmailNotifier(EmailService emailService) {\n    this.emailService = emailService;\n  }\n\n  @Override\n  protected void doSend(Notification notification) {\n    emailService.send(notification.recipient().email(), notification.message());\n  }\n}\n\npublic class SMSNotifier extends Notifier {\n  private final SMSService smsService;\n\n  public SMSNotifier(SMSService smsService) {\n    this.smsService = smsService;\n  }\n\n  @Override\n  protected void doSend(Notification notification) {\n    smsService.send(notification.recipient().phone(), notification.message());\n  }\n}\n\n// === DECORATOR: Add features ===\n\npublic class NotifierDecorator extends Notifier {\n  protected final Notifier delegate;\n\n  public NotifierDecorator(Notifier delegate) {\n    this.delegate = delegate;\n  }\n\n  @Override\n  protected void doSend(Notification notification) {\n    delegate.send(notification);\n  }\n}\n\npublic class RetryNotifierDecorator extends NotifierDecorator {\n  private static final int MAX_RETRIES = 3;\n\n  public RetryNotifierDecorator(Notifier delegate) {\n    super(delegate);\n  }\n\n  @Override\n  protected void doSend(Notification notification) {\n    for (int attempt = 0; attempt < MAX_RETRIES; attempt++) {\n      try {\n        delegate.send(notification);\n        return;\n      } catch (Exception e) {\n        if (attempt == MAX_RETRIES - 1) throw e;\n        Thread.sleep(1000 * (attempt + 1));  // Exponential backoff\n      }\n    }\n  }\n}\n\npublic class LoggingNotifierDecorator extends NotifierDecorator {\n  private final Logger logger = LoggerFactory.getLogger(this.getClass());\n\n  public LoggingNotifierDecorator(Notifier delegate) {\n    super(delegate);\n  }\n\n  @Override\n  protected void doSend(Notification notification) {\n    logger.info("Sending notification to {}", notification.recipient());\n    try {\n      delegate.send(notification);\n      logger.info("Notification sent successfully");\n    } catch (Exception e) {\n      logger.error("Failed to send notification", e);\n      throw e;\n    }\n  }\n}\n\npublic class RateLimitNotifierDecorator extends NotifierDecorator {\n  private final RateLimiter limiter;\n\n  public RateLimitNotifierDecorator(Notifier delegate, double permitsPerSecond) {\n    super(delegate);\n    this.limiter = RateLimiter.create(permitsPerSecond);\n  }\n\n  @Override\n  protected void doSend(Notification notification) {\n    limiter.acquire();\n    delegate.send(notification);\n  }\n}\n\n// === OBSERVER PATTERN: NotificationService ===\n\npublic class NotificationService {\n  private final List<Notifier> notifiers = new ArrayList<>();\n\n  public void subscribe(Notifier notifier) {\n    notifiers.add(notifier);\n  }\n\n  public void unsubscribe(Notifier notifier) {\n    notifiers.remove(notifier);\n  }\n\n  public void notify(Notification notification) {\n    for (Notifier notifier : notifiers) {\n      notifier.send(notification);\n    }\n  }\n}\n\n// === USAGE: All patterns together ===\n\npublic class NotificationApp {\n  public static void main(String[] args) {\n    NotificationService service = new NotificationService();\n\n    // Create notifiers with decorators stacked\n    Notifier emailNotifier = new LoggingNotifierDecorator(\n      new RetryNotifierDecorator(\n        new EmailNotifier(new SmtpEmailService())\n      )\n    );\n\n    Notifier smsNotifier = new RateLimitNotifierDecorator(\n      new SMSNotifier(new TwilioSMSService()),\n      10.0  // 10 SMS per second max\n    );\n\n    // Subscribe observers\n    service.subscribe(emailNotifier);\n    service.subscribe(smsNotifier);\n\n    // Send notification to all subscribers\n    Notification notification = new Notification(\n      new User("alice@example.com", "+1234567890"),\n      "Your order is ready!"\n    );\n    service.notify(notification);\n  }\n}',
        filename: 'NotificationServiceExample.java'
      },
      {
        type: 'callout',
        variant: 'note',
        title: 'Pattern Integration Synergy',
        text: '✓ **Template Method**: Defines common algorithm (should send? → before → do → after)\n✓ **Decorator**: Wrap notifier to add logging, retry, rate limiting\n✓ **Observer**: Service doesn\'t know about specific notifiers, just calls them\n✓ Result: Flexible, extensible, easy to add new channels or features'
      }
    ]
  },
  {
    id: 'patterns-and-testing',
    title: 'How Patterns Affect Testability',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Testable Patterns'
      },
      {
        type: 'paragraph',
        text: 'Design patterns improve testability by decoupling code, making it easier to isolate units and inject test doubles (mocks, stubs, fakes).'
      },
      {
        type: 'table',
        headers: ['Pattern', 'Testability Impact', 'How to Test', 'Mock-Friendly?'],
        rows: [
          ['Dependency Injection', '★★★★★ Excellent', 'Inject test doubles in constructor', 'YES - core purpose'],
          ['Strategy', '★★★★★ Excellent', 'Test each strategy independently, inject into context', 'YES'],
          ['Observer', '★★★★☆ Very Good', 'Verify notifications sent, spy on listeners', 'YES'],
          ['Factory', '★★★★☆ Very Good', 'Test factory logic, mock created objects', 'PARTIAL (factory itself needs testing)'],
          ['Decorator', '★★★★☆ Very Good', 'Test decorator adds expected behavior', 'YES'],
          ['Singleton', '★☆☆☆☆ Poor', 'Hard to reset between tests, global state', 'NO - anti-pattern for testing'],
          ['Service Locator', '★☆☆☆☆ Poor', 'Hard to mock locator, hidden dependencies', 'NO - worse than Singleton'],
          ['Template Method', '★★★☆☆ Good', 'Test hook overrides, verify call sequence', 'PARTIAL (inheritance fragile)'],
          ['Facade', '★★☆☆☆ Weak', 'Tests subsystem, hard to unit test facade', 'PARTIAL'],
          ['Composite', '★★★☆☆ Good', 'Test leaf and container separately', 'DEPENDS']
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Testability Best Practices'
      },
      {
        type: 'callout',
        variant: 'tip',
        title: 'Keys to Testable Code',
        text: '✓ **Depend on interfaces, not implementations** (Strategy, DI)\n✓ **Keep constructors simple and injectable**\n✓ **Avoid Singletons and Service Locators** (use DI instead)\n✓ **Separate concerns** (don\'t mix business logic with I/O)\n✓ **Write seams** (points where you can inject test doubles)\n✓ **Test one responsibility per test**'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Example: Testing with Mocks'
      },
      {
        type: 'code',
        language: 'java',
        code: 'import org.junit.jupiter.api.Test;\nimport static org.mockito.Mockito.*;\n\npublic class OrderServiceTest {\n  @Test\n  void testCreateOrder_CallsRepository() {\n    // Arrange: create mocks\n    OrderRepository mockRepo = mock(OrderRepository.class);\n    PaymentService mockPayment = mock(PaymentService.class);\n    \n    // Inject mocks via constructor (Dependency Injection)\n    OrderService service = new OrderService(mockRepo, mockPayment);\n\n    Order order = new Order(/* ... */);\n\n    // Act\n    service.createOrder(order);\n\n    // Assert: verify interactions\n    verify(mockRepo).save(order);           // Repository was called\n    verify(mockPayment).process(order);     // Payment was processed\n    verify(mockRepo).save(order);           // Only called once\n  }\n\n  @Test\n  void testCreateOrder_HandlesPaymentFailure() {\n    OrderRepository mockRepo = mock(OrderRepository.class);\n    PaymentService mockPayment = mock(PaymentService.class);\n    \n    // Configure mock to throw exception\n    doThrow(new PaymentException("Card declined"))\n      .when(mockPayment).process(any());\n\n    OrderService service = new OrderService(mockRepo, mockPayment);\n    Order order = new Order(/* ... */);\n\n    // Act & Assert\n    assertThrows(PaymentException.class, () -> service.createOrder(order));\n    verify(mockRepo, never()).save(order);  // Repo not called on failure\n  }\n}'
      }
    ]
  },
  {
    id: 'patterns-and-performance',
    title: 'Patterns and Performance Considerations',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Performance Trade-offs'
      },
      {
        type: 'paragraph',
        text: 'Some patterns introduce overhead (indirection, object creation, memory). Understanding trade-offs helps you choose wisely. Remember: **measure before optimizing**.'
      },
      {
        type: 'table',
        headers: ['Pattern', 'Performance Overhead', 'When Significant?', 'Mitigation'],
        rows: [
          ['Decorator', 'Minor (method calls)', 'Not usually, unless very deep nesting', 'Limit decorator depth, use composition'],
          ['Strategy', 'Negligible (polymorphic dispatch)', 'Never; same as virtual methods', 'None needed'],
          ['Observer', 'Medium (if many listeners)', 'Large listener lists in hot loops', 'Use weak references, async notification'],
          ['Proxy', 'Medium (extra indirection)', 'If called frequently', 'Lazy load carefully, cache results'],
          ['Composite', 'Low to Medium (tree traversal)', 'Very large trees, deep recursion', 'Use iterators, avoid deep nesting'],
          ['Factory Method', 'Low (object allocation)', 'Not significant in most apps', 'Pool/cache created objects if needed'],
          ['Singleton', 'Negligible (lookup cheap)', 'None; often improves performance', 'Ensure thread-safe initialization'],
          ['Flyweight', 'Negative (improves performance)', 'High object creation volume', 'Share immutable objects (built-in use: String interning)'],
          ['Object Pool', 'Negative (improves performance)', 'Expensive object creation', 'Pool reusable objects (DB connections)'],
          ['Template Method', 'Negligible (same as inheritance)', 'None', 'None needed']
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Patterns That Help Performance'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          '**Flyweight**: Share immutable objects across instances (Java: String interning, Integer.valueOf() caching)',
          '**Object Pool**: Reuse expensive objects instead of creating/destroying (DB connections, thread pools)',
          '**Lazy Initialization**: Delay object creation until needed',
          '**Caching**: Store computed results to avoid re-computation',
          '**Iterator**: Traverse collections without materializing entire structure'
        ]
      },
      {
        type: 'callout',
        variant: 'important',
        title: 'Golden Rule',
        text: '**Patterns are about maintainability first. Don\'t sacrifice clarity for micro-optimizations.** Measure hotspots with profiler before optimizing. Most pattern overhead is negligible in real applications.'
      }
    ]
  },
  {
    id: 'patterns-in-frameworks',
    title: 'Patterns in Popular Frameworks',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'GoF Patterns in Real Frameworks'
      },
      {
        type: 'paragraph',
        text: 'Design patterns are everywhere in production frameworks. Understanding them helps you use frameworks effectively and write code that fits the framework\'s philosophy.'
      },
      {
        type: 'table',
        headers: ['Pattern', 'Framework', 'Where/How Used', 'Class/Annotation'],
        rows: [
          ['Singleton', 'Spring', 'Default bean scope', '@Bean, applicationContext singleton registry'],
          ['Factory', 'Spring', 'BeanFactory, ObjectFactory', 'FactoryBean<T>, @Bean methods'],
          ['Proxy', 'Spring', 'AOP, transactional proxies', '@Transactional, @Cacheable, JdkDynamicAopProxy'],
          ['Observer', 'Spring', 'Event publishing', 'ApplicationEventPublisher, @EventListener'],
          ['Strategy', 'Spring', 'Bean selection', 'Conditional, @ConditionalOnProperty'],
          ['Template Method', 'JUnit', 'Test lifecycle', '@BeforeEach, @AfterEach, setup(), tearDown()'],
          ['Iterator', 'Java', 'Collections framework', 'Iterator<T>, enhanced for-loop'],
          ['Composite', 'Java', 'File systems, DOM', 'java.io.File (composite), org.w3c.dom.Node'],
          ['Adapter', 'Java', 'Collection wrappers', 'Collections.list(enumeration)'],
          ['Decorator', 'Java', 'I/O streams', 'BufferedInputStream(FileInputStream(...))'],
          ['Command', 'Swing', 'GUI actions', 'Action, AbstractAction'],
          ['State', 'Many', 'State machines', 'State enum, State pattern classes'],
          ['Chain of Responsibility', 'Servlet', 'Filter chain', 'Filter, FilterChain.doFilter()'],
          ['Mediator', 'MVC', 'Controller', 'Controller class coordinating Model & View'],
          ['Facade', 'Many', 'Public APIs', 'Spring Framework itself (public API masks complexity)']
        ]
      },
      {
        type: 'callout',
        variant: 'note',
        title: 'Spring Framework: Pattern-Heavy',
        text: 'Spring Framework uses nearly **all 23 GoF patterns**. Understanding them helps you:\n✓ Know which beans to use when\n✓ Write code that works naturally with Spring\n✓ Debug unexpected behavior (understand proxies, scopes, etc.)\n✓ Design custom components correctly'
      }
    ]
  },
  {
    id: 'pattern-catalog-reference',
    title: 'Complete Pattern Catalog Reference',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: '23 Gang of Four Patterns + Modern Additions'
      },
      {
        type: 'paragraph',
        text: 'Here\'s a visual guide to all major patterns organized by category with one-line summaries.'
      },
      {
        type: 'diagram',
        format: 'mermaid',
        content: 'flowchart TD\n  A["Design Patterns"] --> B["CREATIONAL<br/>(Object Creation)"]\n  A --> C["STRUCTURAL<br/>(Object Composition)"]\n  A --> D["BEHAVIORAL<br/>(Object Communication)"]\n  B --> B1["Singleton<br/>One instance"] & B2["Factory<br/>Create without new"] & B3["Builder<br/>Complex construction"] & B4["Prototype<br/>Clone objects"] & B5["Abstract Factory<br/>Family of objects"]\n  C --> C1["Adapter<br/>Make incompatible work"] & C2["Bridge<br/>Decouple abstraction"] & C3["Composite<br/>Tree structures"] & C4["Decorator<br/>Add behavior"] & C5["Facade<br/>Simplify subsystem"] & C6["Proxy<br/>Control access"]\n  D --> D1["Chain of<br/>Responsibility"] & D2["Command<br/>Encapsulate action"] & D3["Interpreter<br/>Custom language"] & D4["Iterator<br/>Traverse collection"] & D5["Mediator<br/>Centralized communication"] & D6["Memento<br/>Capture state"] & D7["Observer<br/>Notify subscribers"] & D8["State<br/>Behavior by state"] & D9["Strategy<br/>Algorithm variants"] & D10["Template Method<br/>Algorithm skeleton"] & D11["Visitor<br/>Add operations"]',
        label: 'Complete GoF pattern taxonomy'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Modern Patterns (Beyond GoF)'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          '**Dependency Injection**: Invert control, receive dependencies (Spring, Guice)',
          '**CQRS**: Separate read and write models (Event sourcing companion)',
          '**Event Sourcing**: Store events, replay state (audit trail)',
          '**Repository**: Abstract data access (Domain Driven Design)',
          '**Specification**: Encapsulate business rules (DDD)'
        ]
      },
      { type: 'divider' },
      {
        type: 'callout',
        variant: 'note',
        title: 'Learning Path',
        text: 'Start with **3 most useful**: Dependency Injection, Strategy, Observer\nThen learn: Factory, Decorator, Composite\nAdvanced: Template Method, Chain of Responsibility, State\nArchitectural: CQRS, Event Sourcing, Repository'
      }
    ]
  },
  {
    id: 'interview-preparation',
    title: 'Patterns in Technical Interviews',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Talking About Patterns Effectively'
      },
      {
        type: 'paragraph',
        text: 'Interviewers often ask "Tell me about a time you used a design pattern." The key is to show you understand the problem, trade-offs, and why you chose that pattern.'
      },
      {
        type: 'table',
        headers: ['Common Question', 'Key Points to Mention', 'Example Approach'],
        rows: [
          ['Describe a design pattern you used', 'Problem → Pattern → Benefits', 'Problem: too many object creation. Pattern: Factory. Benefits: decoupled, testable.'],
          ['Why did you choose Pattern X?', 'Problem it solves, trade-offs', 'Chose Strategy because algorithm changes at runtime. Trade-off: slightly more classes.'],
          ['Have you used dependency injection?', 'Manual DI vs framework, benefits', 'Used Spring; enables testing, loose coupling, configuration management.'],
          ['Describe a refactoring you did', 'Anti-pattern → pattern, result', 'Identified God Object (100+ methods). Broke into 5 services. Tests increased 3x.'],
          ['How do you know which pattern to use?', 'Problem categorization', 'I ask: creation issue? → Creational. Communication issue? → Behavioral.'],
          ['Tell about testing with patterns', 'Mocking, dependency injection', 'DI makes testing easy: inject mocks in constructor. 90% code coverage.']
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'STAR Format for Pattern Stories'
      },
      {
        type: 'list',
        ordered: true,
        items: [
          '**Situation**: Describe the project context and challenge',
          '**Task**: What problem needed solving?',
          '**Action**: Which pattern(s) did you apply? Why?',
          '**Result**: What improved? Metrics (tests, speed, maintainability)?'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Example Story'
      },
      {
        type: 'paragraph',
        text: '**Situation**: I was building a payment processing system at X company handling orders.\n\n**Task**: The system needed to support multiple payment providers (Stripe, PayPal, Square), and switching providers required changing code in 5 places. Also, adding retry logic and logging was scattered.\n\n**Action**: I applied three patterns together:\n- **Strategy** for payment algorithms (each provider is a strategy)\n- **Decorator** to add cross-cutting concerns (retry, logging, rate limiting)\n- **Factory** to select provider at runtime\n\nThis decoupled payment logic from order processing and made it trivial to add new providers.\n\n**Result**: Added Square support in 2 hours (previously took a day). Test coverage increased from 60% to 88%. Debugging payment issues easier because each layer has single responsibility.'
      },
      {
        type: 'callout',
        variant: 'important',
        title: 'Interview Tip',
        text: '**Always explain WHY you chose a pattern, not just WHAT pattern.** Mention:\n✓ The problem it solves\n✓ Trade-offs (added complexity? benefit outweighs?)\n✓ Alternatives you considered\n✓ Results (better tests? faster to extend? cleaner code?)'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Common Mistakes to Avoid'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          '❌ **Naming the pattern without explaining problem**: "I used Factory" → So what?',
          '❌ **Overcomplicating**: "I applied Strategy, Decorator, Composite, Facade, and..." → Simpler is better',
          '❌ **Anti-patterns**: Admitting you used Singleton for everything or created a God Object → Frame as lesson learned',
          '❌ **No evidence of testing**: Patterns enable testability; mention tests and mocks',
          '❌ **Claiming pattern mastery prematurely**: Honest "I\'m learning" is better than bluffing'
        ]
      }
    ]
  },
  {
    id: 'course-summary',
    title: 'Design Patterns: Complete Course Recap',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Everything Covered'
      },
      {
        type: 'list',
        ordered: true,
        items: [
          '**Creational Patterns** (Ch. 1-2): Singleton, Factory, Abstract Factory, Builder, Prototype, Dependency Injection',
          '**Structural Patterns** (Ch. 3-5): Adapter, Bridge, Composite, Decorator, Facade, Proxy',
          '**Behavioral Patterns** (Ch. 6-10): Chain of Responsibility, Command, Iterator, Mediator, Memento, Observer, State, Strategy, Template Method, Visitor, Interpreter',
          '**Modern Patterns & Anti-Patterns** (Ch. 11): DI deep dive, CQRS, Event Sourcing, God Object, Spaghetti Code, Golden Hammer, Lava Flow',
          '**Application & Interviews** (Ch. 12): Case studies (plugins, orders, documents, notifications), testing, performance, frameworks, interview prep'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'Chapters & Topics Breakdown'
      },
      {
        type: 'table',
        headers: ['Chapter', 'Topics', 'Key Patterns', 'Skills Gained'],
        rows: [
          ['1-2: Creational', 'Object creation, initialization', 'Singleton, Factory, Builder, DI', 'Choose right creation pattern, when to use factory'],
          ['3-5: Structural', 'Object composition, relationships', 'Adapter, Decorator, Proxy, Composite', 'Flexible hierarchies, add behavior, adapt interfaces'],
          ['6-7: Behavioral Pt 1', 'Algorithms, responsibility', 'Strategy, State, Template Method, Visitor', 'Vary algorithms, encapsulate behavior'],
          ['8-10: Behavioral Pt 2', 'Communication, coordination', 'Observer, Mediator, Chain, Command', 'Decouple objects, centralize communication'],
          ['11: Modern & Anti', 'DI ecosystem, events, bad patterns', 'DI, CQRS, Event Sourcing, Refactoring', 'Avoid anti-patterns, recognize side effects'],
          ['12: Application', 'Real-world usage, interviews', 'All (case studies)', 'Build systems, ace interviews, choose patterns wisely']
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'Final Wisdom: Patterns as Tools, Not Rules'
      },
      {
        type: 'callout',
        variant: 'important',
        title: 'Core Principle',
        text: '**Patterns solve real problems. Use them when the problem exists.**\n\n✓ Start simple. Refactor when pain emerges.\n✓ Over-engineering is worse than under-engineering.\n✓ Patterns enable flexibility, testing, maintainability.\n✓ Choose patterns based on problem, not fashion.\n✓ Always explain why, not just what.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'What Makes a Good Design'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          '**Clarity**: Code explains intent, minimal surprises',
          '**Flexibility**: Easy to extend without modifying existing code (Open/Closed Principle)',
          '**Testability**: Dependencies injectable, no hard-to-mock global state',
          '**Maintainability**: Single responsibility, low coupling, high cohesion',
          '**Pragmatism**: Appropriate complexity for problem size'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Pattern Mastery Checklist'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          '□ Can name and describe all 23 GoF patterns',
          '□ Understand which problems each pattern solves',
          '□ Can implement at least 10 patterns from memory',
          '□ Know how to combine patterns (Decorator + Strategy, Factory + Strategy, etc.)',
          '□ Can recognize anti-patterns in code and refactor them',
          '□ Understand testability implications of each pattern',
          '□ Can explain pattern choices in interviews (STAR format)',
          '□ Know patterns used in Spring, JUnit, Java collections',
          '□ Can design simple systems using multiple patterns (plugins, order pipeline, notification service)',
          '□ Understand balance: use patterns wisely, not everywhere'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Next Steps'
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Review case studies: implement Plugin System and Order Pipeline from scratch',
          'Read code: find patterns in open-source (Spring, JUnit, Apache Commons)',
          'Practice interviews: tell stories about patterns you\'ve used (STAR format)',
          'Build projects: design system using 3-5 patterns intentionally',
          'Keep learning: DDD, Event Sourcing, CQRS for advanced topics',
          'Remember: Patterns enable quality code, but simplicity is the greatest gift'
        ]
      }
    ]
  }
];
