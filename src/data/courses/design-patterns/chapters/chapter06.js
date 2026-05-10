export const sections = [
  {
    id: 'behavioral-overview',
    title: 'Behavioral Patterns: Overview',
    blocks: [
      {
        type: 'paragraph',
        text: 'Behavioral patterns deal with **object collaboration and responsibility distribution**. They define how objects communicate, delegate tasks, and organize work flow.'
      },
      {
        type: 'heading',
        level: 3,
        text: '11 Behavioral Patterns'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Chain of Responsibility, Command, Iterator',
          'Mediator, Memento, Observer',
          'State, Strategy, Template Method',
          'Visitor, Interpreter'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Key Characteristics'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Describe **how objects interact** and **distribute responsibility**',
          'Decouple senders from receivers',
          'Make communication flexible and extensible',
          'Often involve **event handling**, **sequencing**, or **delegation**'
        ]
      },
      {
        type: 'diagram',
        format: 'mermaid',
        content: 'flowchart LR\n  A["Communication<br/>Patterns"] --> B["Chain of Responsibility<br/>Command<br/>Iterator"]\n  A --> C["Control Flow<br/>Patterns"]\n  C --> D["State<br/>Strategy<br/>Template Method"]\n  A --> E["Behavioral<br/>Data Patterns"]\n  E --> F["Mediator<br/>Memento<br/>Observer"]\n  A --> G["Specialized<br/>Patterns"]\n  G --> H["Visitor<br/>Interpreter"]',
        label: 'Behavioral Patterns Categories'
      },
      {
        type: 'callout',
        variant: 'note',
        title: 'Communication Focus',
        text: 'Behavioral patterns are about how objects talk to each other, who decides what happens, and how to avoid tight coupling.'
      }
    ]
  },
  {
    id: 'chain-concept',
    title: 'Chain of Responsibility: Concept',
    blocks: [
      {
        type: 'paragraph',
        text: 'The **Chain of Responsibility pattern** passes a request along a chain of handlers until one handles it. This avoids coupling the sender to a specific receiver.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Problem: Who Handles This?'
      },
      {
        type: 'paragraph',
        text: 'In a support ticket system, a Level 1 technician might resolve simple issues, but complex issues go to Level 2, and billing disputes go to Level 3. Without this pattern, the system would need complex if-else statements to route requests.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Solution: Chain of Handlers'
      },
      {
        type: 'paragraph',
        text: 'Each handler knows about the next handler in the chain. If it can handle the request, it does. Otherwise, it forwards to the next handler.'
      },
      {
        type: 'diagram',
        format: 'mermaid',
        content: 'classDiagram\n  class Handler {\n    <<abstract>>\n    -successor: Handler\n    +setSuccessor(Handler) void\n    +handleRequest(Request) void\n  }\n  class ConcreteHandler1 {\n    +handleRequest(Request) void\n  }\n  class ConcreteHandler2 {\n    +handleRequest(Request) void\n  }\n  class ConcreteHandler3 {\n    +handleRequest(Request) void\n  }\n  class Request {\n    -level: int\n    -message: String\n  }\n  Handler <|-- ConcreteHandler1\n  Handler <|-- ConcreteHandler2\n  Handler <|-- ConcreteHandler3\n  Handler o-- Handler : next\n  Handler --> Request : processes',
        label: 'Chain of Responsibility Pattern'
      },
      {
        type: 'callout',
        variant: 'tip',
        title: 'Dynamic Chain',
        text: 'You can build the chain at runtime, change it mid-execution, or have multiple chains depending on the context.'
      }
    ]
  },
  {
    id: 'chain-implementation',
    title: 'Chain of Responsibility: Java Implementation',
    blocks: [
      {
        type: 'paragraph',
        text: 'We\'ll implement a support ticket system with three levels of handlers.'
      },
      {
        type: 'code',
        language: 'java',
        filename: 'SupportTicket.java',
        code: 'public class SupportTicket {\n  public enum Priority {\n    LOW(1), MEDIUM(2), HIGH(3)\n  }\n\n  private String message;\n  private Priority priority;\n\n  public SupportTicket(String message, Priority priority) {\n    this.message = message;\n    this.priority = priority;\n  }\n\n  public String getMessage() {\n    return message;\n  }\n\n  public Priority getPriority() {\n    return priority;\n  }\n}'
      },
      {
        type: 'code',
        language: 'java',
        filename: 'SupportHandler.java',
        code: 'public abstract class SupportHandler {\n  protected SupportHandler nextHandler;\n\n  public void setNextHandler(SupportHandler nextHandler) {\n    this.nextHandler = nextHandler;\n  }\n\n  public void handleTicket(SupportTicket ticket) {\n    if (canHandle(ticket)) {\n      resolveTicket(ticket);\n    } else if (nextHandler != null) {\n      nextHandler.handleTicket(ticket);\n    } else {\n      System.out.println("No handler found for ticket: " + ticket.getMessage());\n    }\n  }\n\n  protected abstract boolean canHandle(SupportTicket ticket);\n  protected abstract void resolveTicket(SupportTicket ticket);\n}'
      },
      {
        type: 'code',
        language: 'java',
        filename: 'Level1Support.java',
        code: 'public class Level1Support extends SupportHandler {\n  @Override\n  protected boolean canHandle(SupportTicket ticket) {\n    return ticket.getPriority() == SupportTicket.Priority.LOW;\n  }\n\n  @Override\n  protected void resolveTicket(SupportTicket ticket) {\n    System.out.println("Level 1 Support: Resolved \"" + ticket.getMessage() + "\"\n                      + \" - Password reset, basic troubleshooting");\n  }\n}'
      },
      {
        type: 'code',
        language: 'java',
        filename: 'Level2Support.java',
        code: 'public class Level2Support extends SupportHandler {\n  @Override\n  protected boolean canHandle(SupportTicket ticket) {\n    return ticket.getPriority() == SupportTicket.Priority.MEDIUM;\n  }\n\n  @Override\n  protected void resolveTicket(SupportTicket ticket) {\n    System.out.println("Level 2 Support: Escalated for \"" + ticket.getMessage() +\n                      "\" - Database issues, complex configuration");\n  }\n}'
      },
      {
        type: 'code',
        language: 'java',
        filename: 'Level3Support.java',
        code: 'public class Level3Support extends SupportHandler {\n  @Override\n  protected boolean canHandle(SupportTicket ticket) {\n    return ticket.getPriority() == SupportTicket.Priority.HIGH;\n  }\n\n  @Override\n  protected void resolveTicket(SupportTicket ticket) {\n    System.out.println("Level 3 Support (Manager): Escalated for \"" +\n                      ticket.getMessage() + "\" - Critical issues, billing disputes");\n  }\n}'
      },
      {
        type: 'code',
        language: 'java',
        filename: 'ChainClient.java',
        code: 'public class ChainClient {\n  public static void main(String[] args) {\n    // Build the chain\n    SupportHandler level1 = new Level1Support();\n    SupportHandler level2 = new Level2Support();\n    SupportHandler level3 = new Level3Support();\n\n    level1.setNextHandler(level2);\n    level2.setNextHandler(level3);\n\n    // Process tickets\n    SupportTicket ticket1 = new SupportTicket("Forgot password",\n                                              SupportTicket.Priority.LOW);\n    SupportTicket ticket2 = new SupportTicket("Database connection error",\n                                              SupportTicket.Priority.MEDIUM);\n    SupportTicket ticket3 = new SupportTicket("Billing discrepancy",\n                                              SupportTicket.Priority.HIGH);\n\n    level1.handleTicket(ticket1);\n    level1.handleTicket(ticket2);\n    level1.handleTicket(ticket3);\n  }\n}'
      },
      {
        type: 'callout',
        variant: 'important',
        title: 'Handler Routing',
        text: 'Each handler only knows about the next one. The chain is built once and then reused for many requests.'
      }
    ]
  },
  {
    id: 'chain-sequence',
    title: 'Chain of Responsibility: Sequence Diagram',
    blocks: [
      {
        type: 'paragraph',
        text: 'This diagram shows how a request flows through the chain until it finds a handler.'
      },
      {
        type: 'diagram',
        format: 'mermaid',
        content: 'sequenceDiagram\n  participant Client\n  participant L1 as Level1Support\n  participant L2 as Level2Support\n  participant L3 as Level3Support\n  Client->>L1: handleTicket(MEDIUM priority)\n  Note over L1: Can I handle MEDIUM?<br/>No, I handle LOW\n  L1->>L2: handleTicket(MEDIUM priority)\n  Note over L2: Can I handle MEDIUM?<br/>Yes!\n  L2->>L2: resolveTicket()\n  L2-->>Client: Resolved by Level2',
        label: 'Request Flowing Through Chain'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Key Points'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Client sends request to first handler only',
          'Each handler checks if it can handle the request',
          'If not, it delegates to the next handler in the chain',
          'The chain continues until someone handles it or the chain ends'
        ]
      }
    ]
  },
  {
    id: 'chain-stdlib',
    title: 'Chain of Responsibility: Java Standard Library',
    blocks: [
      {
        type: 'paragraph',
        text: 'Several Java frameworks use Chain of Responsibility for filtering and request processing.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Java Servlet Filters'
      },
      {
        type: 'code',
        language: 'java',
        filename: 'ServletFilterExample.java',
        code: 'import javax.servlet.*;\nimport java.io.IOException;\n\npublic class AuthenticationFilter implements Filter {\n  private FilterChain chain;\n\n  @Override\n  public void doFilter(ServletRequest request, ServletResponse response,\n                      FilterChain chain) throws IOException, ServletException {\n    System.out.println("AuthenticationFilter: Checking credentials");\n    // Check authentication\n    chain.doFilter(request, response);  // Pass to next filter\n  }\n}\n\npublic class LoggingFilter implements Filter {\n  @Override\n  public void doFilter(ServletRequest request, ServletResponse response,\n                      FilterChain chain) throws IOException, ServletException {\n    System.out.println("LoggingFilter: Logging request");\n    chain.doFilter(request, response);  // Pass to next filter\n  }\n}'
      },
      {
        type: 'paragraph',
        text: 'In web.xml, filters are chained automatically: AuthenticationFilter → LoggingFilter → Servlet'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Spring Security Filter Chain'
      },
      {
        type: 'code',
        language: 'java',
        filename: 'SpringSecurityChain.java',
        code: 'import org.springframework.security.config.annotation.web.builders.HttpSecurity;\nimport org.springframework.security.web.SecurityFilterChain;\n\npublic class SecurityConfig {\n  // Spring automatically chains these filters:\n  // SecurityContextPersistenceFilter\n  //   -> LogoutFilter\n  //   -> AuthenticationFilter\n  //   -> ExceptionTranslationFilter\n  //   -> FilterSecurityInterceptor\n\n  public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n    http\n      .authorizeRequests()\n        .antMatchers("/public").permitAll()\n        .antMatchers("/admin").hasRole("ADMIN")\n        .anyRequest().authenticated()\n      .and()\n      .formLogin();\n    return http.build();\n  }\n}'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Exception Handling Chain'
      },
      {
        type: 'code',
        language: 'java',
        filename: 'ExceptionChain.java',
        code: 'public class ExceptionHandlingDemo {\n  public static void main(String[] args) {\n    // Java exception handling is implicit chain of responsibility:\n    try {\n      riskyOperation();\n    } catch (FileNotFoundException e) {\n      System.out.println("Handler 1: File not found");\n    } catch (IOException e) {\n      System.out.println("Handler 2: IO problem");\n    } catch (Exception e) {\n      System.out.println("Handler 3: General exception");\n    }\n    // Catch blocks are tried in order until one matches\n  }\n\n  private static void riskyOperation() throws IOException {\n    throw new IOException("Disk error");\n  }\n}'
      },
      {
        type: 'callout',
        variant: 'note',
        title: 'Framework Integration',
        text: 'Many frameworks implement Chain of Responsibility internally for filters, middleware, and exception handling. Understanding the pattern helps you use these frameworks effectively.'
      }
    ]
  },
  {
    id: 'command-concept',
    title: 'Command Pattern: Concept',
    blocks: [
      {
        type: 'paragraph',
        text: 'The **Command pattern** encapsulates a request as an object, allowing you to parameterize clients with different requests, queue requests, and support undoable operations.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Four Parts'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          '**Command**: Interface for executing an operation',
          '**ConcreteCommand**: Implements Command, holds receiver and parameters',
          '**Receiver**: The object that actually does the work',
          '**Invoker**: Asks the command to carry out the request'
        ]
      },
      {
        type: 'diagram',
        format: 'mermaid',
        content: 'classDiagram\n  class Command {\n    <<interface>>\n    +execute() void\n  }\n  class ConcreteCommand {\n    -receiver: Receiver\n    -args: Object\n    +execute() void\n  }\n  class Receiver {\n    +action() void\n  }\n  class Invoker {\n    -command: Command\n    +setCommand(Command) void\n    +executeCommand() void\n  }\n  Command <|.. ConcreteCommand\n  ConcreteCommand --> Receiver : delegates to\n  Invoker o-- Command : invokes',
        label: 'Command Pattern Structure'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Key Benefits'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          '**Decoupling**: Invoker doesn\'t know about Receiver',
          '**Undo/Redo**: Commands can implement undo() methods',
          '**Queuing**: Commands can be queued and executed later',
          '**Macros**: Multiple commands can be composed'
        ]
      },
      {
        type: 'callout',
        variant: 'tip',
        title: 'Request as Object',
        text: 'The key insight is treating a request (like "save file") as a first-class object that can be stored, passed around, and executed at any time.'
      }
    ]
  },
  {
    id: 'command-implementation',
    title: 'Command Pattern: Java Implementation',
    blocks: [
      {
        type: 'paragraph',
        text: 'We\'ll implement a text editor with undo support using the Command pattern.'
      },
      {
        type: 'code',
        language: 'java',
        filename: 'Command.java',
        code: 'public interface Command {\n  void execute();\n  void undo();\n}'
      },
      {
        type: 'code',
        language: 'java',
        filename: 'TextEditor.java',
        code: 'public class TextEditor {\n  private StringBuilder content = new StringBuilder();\n\n  public void type(String text) {\n    content.append(text);\n  }\n\n  public void delete(int length) {\n    if (content.length() >= length) {\n      content.delete(content.length() - length, content.length());\n    }\n  }\n\n  public String getContent() {\n    return content.toString();\n  }\n}'
      },
      {
        type: 'code',
        language: 'java',
        filename: 'TypeCommand.java',
        code: 'public class TypeCommand implements Command {\n  private TextEditor editor;\n  private String text;\n\n  public TypeCommand(TextEditor editor, String text) {\n    this.editor = editor;\n    this.text = text;\n  }\n\n  @Override\n  public void execute() {\n    editor.type(text);\n    System.out.println("Typed: " + text);\n  }\n\n  @Override\n  public void undo() {\n    editor.delete(text.length());\n    System.out.println("Undid type: " + text);\n  }\n}'
      },
      {
        type: 'code',
        language: 'java',
        filename: 'DeleteCommand.java',
        code: 'public class DeleteCommand implements Command {\n  private TextEditor editor;\n  private int length;\n  private String deletedText;\n\n  public DeleteCommand(TextEditor editor, int length) {\n    this.editor = editor;\n    this.length = length;\n  }\n\n  @Override\n  public void execute() {\n    String content = editor.getContent();\n    if (content.length() >= length) {\n      deletedText = content.substring(content.length() - length);\n      editor.delete(length);\n      System.out.println("Deleted: " + deletedText);\n    }\n  }\n\n  @Override\n  public void undo() {\n    editor.type(deletedText);\n    System.out.println("Undid delete: " + deletedText);\n  }\n}'
      },
      {
        type: 'code',
        language: 'java',
        filename: 'EditorInvoker.java',
        code: 'import java.util.Stack;\n\npublic class EditorInvoker {\n  private Stack<Command> history = new Stack<>();\n  private TextEditor editor;\n\n  public EditorInvoker(TextEditor editor) {\n    this.editor = editor;\n  }\n\n  public void executeCommand(Command command) {\n    command.execute();\n    history.push(command);\n  }\n\n  public void undo() {\n    if (!history.isEmpty()) {\n      Command command = history.pop();\n      command.undo();\n    }\n  }\n\n  public void printHistory() {\n    System.out.println("History size: " + history.size());\n  }\n}'
      },
      {
        type: 'code',
        language: 'java',
        filename: 'CommandClient.java',
        code: 'public class CommandClient {\n  public static void main(String[] args) {\n    TextEditor editor = new TextEditor();\n    EditorInvoker invoker = new EditorInvoker(editor);\n\n    // Execute commands\n    invoker.executeCommand(new TypeCommand(editor, "Hello "));\n    invoker.executeCommand(new TypeCommand(editor, "World"));\n    System.out.println("Content: " + editor.getContent());\n    // Output: Content: Hello World\n\n    invoker.executeCommand(new DeleteCommand(editor, 5));\n    System.out.println("Content: " + editor.getContent());\n    // Output: Content: Hello \n\n    // Undo\n    invoker.undo();\n    System.out.println("Content: " + editor.getContent());\n    // Output: Content: Hello World\n\n    invoker.undo();\n    System.out.println("Content: " + editor.getContent());\n    // Output: Content: Hello \n  }\n}'
      },
      {
        type: 'callout',
        variant: 'important',
        title: 'History Stack',
        text: 'By maintaining a stack of executed commands, the invoker can support unlimited undo operations. Each command knows how to reverse its changes.'
      }
    ]
  },
  {
    id: 'command-macro',
    title: 'Command Pattern: Macro Execution',
    blocks: [
      {
        type: 'paragraph',
        text: 'Commands can be composed into macros—a single command that contains multiple sub-commands executed in sequence.'
      },
      {
        type: 'code',
        language: 'java',
        filename: 'MacroCommand.java',
        code: 'import java.util.ArrayList;\nimport java.util.List;\n\npublic class MacroCommand implements Command {\n  private List<Command> commands = new ArrayList<>();\n\n  public void add(Command command) {\n    commands.add(command);\n  }\n\n  public void remove(Command command) {\n    commands.remove(command);\n  }\n\n  @Override\n  public void execute() {\n    for (Command command : commands) {\n      command.execute();\n    }\n  }\n\n  @Override\n  public void undo() {\n    // Undo in reverse order\n    for (int i = commands.size() - 1; i >= 0; i--) {\n      commands.get(i).undo();\n    }\n  }\n}'
      },
      {
        type: 'code',
        language: 'java',
        filename: 'MacroExample.java',
        code: 'public class MacroExample {\n  public static void main(String[] args) {\n    TextEditor editor = new TextEditor();\n    EditorInvoker invoker = new EditorInvoker(editor);\n\n    // Create a macro that types a template\n    MacroCommand template = new MacroCommand();\n    template.add(new TypeCommand(editor, "public class "));\n    template.add(new TypeCommand(editor, "MyClass {\"));\n    template.add(new TypeCommand(editor, "\n"));\n    template.add(new TypeCommand(editor, "}"));\n\n    // Execute the macro once\n    invoker.executeCommand(template);\n    System.out.println("Content: " + editor.getContent());\n\n    // Undo the entire template with one undo\n    invoker.undo();\n    System.out.println("Content: " + editor.getContent());\n  }\n}'
      },
      {
        type: 'diagram',
        format: 'mermaid',
        content: 'sequenceDiagram\n  participant Client\n  participant Invoker\n  participant Macro as MacroCommand\n  participant Cmd1 as TypeCommand\n  participant Cmd2 as TypeCommand\n  Client->>Invoker: executeCommand(macro)\n  Invoker->>Macro: execute()\n  Macro->>Cmd1: execute()\n  Cmd1->>Cmd1: type text\n  Macro->>Cmd2: execute()\n  Cmd2->>Cmd2: type text\n  Macro-->>Invoker: Done\n  Note over Invoker: Macro stored in history\n  Client->>Invoker: undo()\n  Invoker->>Macro: undo()\n  Macro->>Cmd2: undo()\n  Macro->>Cmd1: undo()',
        label: 'Macro Command Execution and Undo'
      },
      {
        type: 'callout',
        variant: 'tip',
        title: 'Composite Pattern Integration',
        text: 'MacroCommand is an example of combining Command with the Composite pattern. A command can contain other commands, forming a tree structure.'
      }
    ]
  },
  {
    id: 'command-stdlib',
    title: 'Command Pattern: Java Standard Library',
    blocks: [
      {
        type: 'paragraph',
        text: 'Several Java APIs use the Command pattern implicitly.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'java.lang.Runnable'
      },
      {
        type: 'code',
        language: 'java',
        filename: 'RunnableExample.java',
        code: 'public class RunnableExample {\n  public static void main(String[] args) {\n    // Runnable is a Command that wraps code to be executed\n    Runnable command = () -> System.out.println("Task executed");\n\n    // Executor (Invoker) executes the command\n    Thread thread = new Thread(command);  // Deferred execution\n    thread.start();\n\n    // Can also use ExecutorService for queuing\n    import java.util.concurrent.ExecutorService;\n    ExecutorService executor = java.util.concurrent.Executors.newFixedThreadPool(2);\n    executor.submit(command);  // Queue the command\n  }\n}'
      },
      {
        type: 'heading',
        level: 3,
        text: 'javax.swing.Action'
      },
      {
        type: 'code',
        language: 'java',
        filename: 'SwingActionExample.java',
        code: 'import javax.swing.*;\n\npublic class SwingActionExample {\n  public static void main(String[] args) {\n    // Action encapsulates an operation with name, icon, description\n    Action saveAction = new AbstractAction("Save") {\n      @Override\n      public void actionPerformed(java.awt.event.ActionEvent e) {\n        System.out.println("Document saved");\n      }\n    };\n\n    // Same action can be used in multiple places\n    JButton button = new JButton(saveAction);\n    JMenuItem menuItem = new JMenuItem(saveAction);\n    // Both button and menu item invoke the same command\n  }\n}'
      },
      {
        type: 'heading',
        level: 3,
        text: 'java.util.Timer'
      },
      {
        type: 'code',
        language: 'java',
        filename: 'TimerCommandExample.java',
        code: 'import java.util.Timer;\nimport java.util.TimerTask;\n\npublic class TimerCommandExample {\n  public static void main(String[] args) {\n    Timer timer = new Timer();\n\n    // TimerTask is a command scheduled for later execution\n    TimerTask command = new TimerTask() {\n      @Override\n      public void run() {\n        System.out.println("Scheduled task executed");\n      }\n    };\n\n    // Schedule the command to execute after 5 seconds\n    timer.schedule(command, 5000);\n  }\n}'
      }
    ]
  },
  {
    id: 'iterator-concept',
    title: 'Iterator Pattern: Concept',
    blocks: [
      {
        type: 'paragraph',
        text: 'The **Iterator pattern** provides a way to access elements of a collection sequentially without exposing its underlying representation.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Problem: Coupling to Collection'
      },
      {
        type: 'paragraph',
        text: 'If a collection exposes its internal structure (arrays, linked lists, trees), client code becomes tightly coupled. Changing the internal structure breaks all client code.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Solution: Iterator Interface'
      },
      {
        type: 'paragraph',
        text: 'Provide a standardized interface (`hasNext()`, `next()`) that works with any collection, hiding its internal structure.'
      },
      {
        type: 'diagram',
        format: 'mermaid',
        content: 'classDiagram\n  class Iterator {\n    <<interface>>\n    +hasNext() boolean\n    +next() Object\n  }\n  class ConcreteIterator {\n    -collection: ConcreteAggregate\n    -index: int\n    +hasNext() boolean\n    +next() Object\n  }\n  class Aggregate {\n    <<interface>>\n    +createIterator() Iterator\n  }\n  class ConcreteAggregate {\n    -items: Object[]\n    +createIterator() Iterator\n  }\n  Iterator <|.. ConcreteIterator\n  Aggregate <|.. ConcreteAggregate\n  ConcreteIterator --> ConcreteAggregate : iterates\n  ConcreteAggregate --> ConcreteIterator : creates',
        label: 'Iterator Pattern Structure'
      },
      {
        type: 'callout',
        variant: 'note',
        title: 'Separation of Concerns',
        text: 'The collection is responsible for storage. The iterator is responsible for traversal. This separation allows each to evolve independently.'
      }
    ]
  },
  {
    id: 'iterator-implementation',
    title: 'Iterator Pattern: Java Implementation',
    blocks: [
      {
        type: 'paragraph',
        text: 'We\'ll implement a custom NumberRange collection with a custom iterator.'
      },
      {
        type: 'code',
        language: 'java',
        filename: 'NumberRange.java',
        code: 'import java.util.Iterator;\nimport java.util.NoSuchElementException;\n\npublic class NumberRange implements Iterable<Integer> {\n  private int from;\n  private int to;\n\n  public NumberRange(int from, int to) {\n    this.from = from;\n    this.to = to;\n  }\n\n  @Override\n  public Iterator<Integer> iterator() {\n    return new RangeIterator();\n  }\n\n  private class RangeIterator implements Iterator<Integer> {\n    private int current = from;\n\n    @Override\n    public boolean hasNext() {\n      return current <= to;\n    }\n\n    @Override\n    public Integer next() {\n      if (!hasNext()) {\n        throw new NoSuchElementException();\n      }\n      return current++;\n    }\n\n    @Override\n    public void remove() {\n      throw new UnsupportedOperationException("Range is immutable");\n    }\n  }\n}'
      },
      {
        type: 'code',
        language: 'java',
        filename: 'IteratorClient.java',
        code: 'public class IteratorClient {\n  public static void main(String[] args) {\n    NumberRange range = new NumberRange(1, 5);\n\n    // Using explicit iterator\n    System.out.println("Explicit iterator:");\n    Iterator<Integer> iterator = range.iterator();\n    while (iterator.hasNext()) {\n      System.out.println(iterator.next());\n    }\n\n    // Using for-each loop (syntactic sugar for iterator)\n    System.out.println("\\nFor-each loop:");\n    for (Integer num : range) {\n      System.out.println(num);\n    }\n\n    // Can iterate multiple times\n    System.out.println("\\nSecond iteration:");\n    for (Integer num : range) {\n      System.out.println(num);\n    }\n  }\n}'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Key Features'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          '`RangeIterator` knows only about the range\'s state, not the client',
          'Client knows nothing about `RangeIterator` or the range\'s internals',
          'Can create multiple independent iterators from the same range',
          'For-each loop uses Iterator internally via `Iterable` interface'
        ]
      },
      {
        type: 'callout',
        variant: 'important',
        title: 'Inner Class Pattern',
        text: 'The iterator is an inner class, giving it access to the collection\'s private fields. This is a common pattern for iterator implementation.'
      }
    ]
  },
  {
    id: 'iterator-java',
    title: 'Iterator Pattern: Java Collections',
    blocks: [
      {
        type: 'paragraph',
        text: 'Java collections framework fully implements the Iterator pattern through `java.util.Iterator` and `java.util.Iterable`.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Standard Iteration'
      },
      {
        type: 'code',
        language: 'java',
        filename: 'CollectionsIteratorExample.java',
        code: 'import java.util.*;\n\npublic class CollectionsIteratorExample {\n  public static void main(String[] args) {\n    List<String> names = Arrays.asList("Alice", "Bob", "Charlie");\n\n    // Iterator interface\n    Iterator<String> iterator = names.iterator();\n    while (iterator.hasNext()) {\n      System.out.println(iterator.next());\n    }\n\n    // For-each (uses Iterator internally)\n    for (String name : names) {\n      System.out.println(name);\n    }\n\n    // Stream API (functional iteration)\n    names.stream().forEach(System.out::println);\n  }\n}'
      },
      {
        type: 'heading',
        level: 3,
        text: 'ListIterator'
      },
      {
        type: 'code',
        language: 'java',
        filename: 'ListIteratorExample.java',
        code: 'import java.util.*;\n\npublic class ListIteratorExample {\n  public static void main(String[] args) {\n    List<String> list = new ArrayList<>(Arrays.asList("A", "B", "C"));\n\n    // ListIterator allows backward traversal\n    ListIterator<String> iter = list.listIterator();\n\n    // Forward\n    while (iter.hasNext()) {\n      System.out.println("Forward: " + iter.next());\n    }\n\n    // Backward\n    while (iter.hasPrevious()) {\n      System.out.println("Backward: " + iter.previous());\n    }\n\n    // Modification during iteration\n    ListIterator<String> iter2 = list.listIterator();\n    while (iter2.hasNext()) {\n      String item = iter2.next();\n      if (item.equals("B")) {\n        iter2.set("B_modified");  // Safe modification\n      }\n    }\n  }\n}'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Fail-Fast Iterator'
      },
      {
        type: 'code',
        language: 'java',
        filename: 'FailFastExample.java',
        code: 'import java.util.*;\n\npublic class FailFastExample {\n  public static void main(String[] args) {\n    List<String> list = new ArrayList<>(Arrays.asList("A", "B", "C"));\n\n    // This throws ConcurrentModificationException\n    try {\n      for (String item : list) {\n        System.out.println(item);\n        if (item.equals("B")) {\n          list.add("D");  // Modifying collection during iteration\n        }\n      }\n    } catch (ConcurrentModificationException e) {\n      System.out.println("Error: Collection modified during iteration");\n    }\n\n    // Safe way: use iterator\'s remove()\n    Iterator<String> iter = list.iterator();\n    while (iter.hasNext()) {\n      String item = iter.next();\n      if (item.equals("B")) {\n        iter.remove();  // Safe\n      }\n    }\n  }\n}'
      },
      {
        type: 'callout',
        variant: 'warning',
        title: 'Modification Safety',
        text: 'Don\'t modify a collection directly while iterating. Use the iterator\'s `remove()` method or use ListIterator\'s `set()` method for safe modifications.'
      }
    ]
  },
  {
    id: 'chapter06-summary',
    title: 'Chapter 6 Summary: Behavioral Patterns I',
    blocks: [
      {
        type: 'paragraph',
        text: 'This chapter covered three behavioral patterns that handle communication and collaboration between objects.'
      },
      {
        type: 'table',
        headers: ['Pattern', 'Problem', 'Solution', 'Key Feature'],
        rows: [
          ['Chain of Responsibility', 'Don\'t know which object should handle request', 'Chain of handlers, each decides', 'Dynamic routing, deferred selection'],
          ['Command', 'Need to decouple invoker from receiver', 'Encapsulate request as object', 'Undo/redo, queuing, macros'],
          ['Iterator', 'Need to traverse collection without exposing structure', 'Provide standard traversal interface', 'Decouples client from internals']
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
          '**Chain of Responsibility**: Build flexible request routing without tight coupling.',
          '**Command**: Treat requests as objects for flexibility in execution, queuing, and undo.',
          '**Iterator**: Provide uniform traversal regardless of collection type or structure.'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Real-World Presence'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          '**Chain**: Servlet filters, Spring Security filter chain, exception handling',
          '**Command**: Runnable, Thread, TimerTask, Swing Actions, UI buttons',
          '**Iterator**: for-each loops, List.iterator(), Stream API'
        ]
      },
      {
        type: 'callout',
        variant: 'tip',
        title: 'Behavioral Mastery',
        text: 'These patterns appear everywhere in real applications. Understanding them helps you recognize and implement flexible, maintainable communication patterns in your own code.'
      }
    ]
  }
];
