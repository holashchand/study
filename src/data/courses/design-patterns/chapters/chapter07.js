export const sections = [
  {
    id: 'mediator-concept',
    title: 'Mediator Pattern: Concept',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Reducing Coupling with a Central Mediator'
      },
      {
        type: 'paragraph',
        text: 'The **Mediator Pattern** reduces coupling between objects by having them communicate through a central mediator object instead of directly with each other. Instead of a mesh of dependencies, objects interact with a single mediator, creating a **star topology**.'
      },
      {
        type: 'callout',
        variant: 'important',
        title: 'Core Intent',
        text: 'Define an object that encapsulates how a set of objects interact. This promotes loose coupling by keeping objects from referring to each other explicitly.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Problem: Tight Coupling'
      },
      {
        type: 'paragraph',
        text: 'In a chat application without a mediator, each user knows about every other user. Adding a new user requires updating all existing users. This creates exponential complexity: O(n²) relationships.'
      },
      {
        type: 'diagram',
        format: 'mermaid',
        content: 'flowchart LR\n  User1["User 1"]\n  User2["User 2"]\n  User3["User 3"]\n  User4["User 4"]\n  User1 <--> User2\n  User1 <--> User3\n  User1 <--> User4\n  User2 <--> User3\n  User2 <--> User4\n  User3 <--> User4\n  style User1 fill:#ff6b6b\n  style User2 fill:#ff6b6b\n  style User3 fill:#ff6b6b\n  style User4 fill:#ff6b6b',
        label: 'Mesh topology (tightly coupled)'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Solution: Mediator Pattern'
      },
      {
        type: 'paragraph',
        text: 'Introduce a `ChatMediator` that handles all communication. Users send messages to the mediator, which routes them to intended recipients. Linear O(n) complexity.'
      },
      {
        type: 'diagram',
        format: 'mermaid',
        content: 'flowchart TD\n  User1["User 1"]\n  User2["User 2"]\n  User3["User 3"]\n  User4["User 4"]\n  Mediator["ChatMediator"]\n  User1 --> Mediator\n  User2 --> Mediator\n  User3 --> Mediator\n  User4 --> Mediator\n  Mediator --> User1\n  Mediator --> User2\n  Mediator --> User3\n  Mediator --> User4\n  style Mediator fill:#51cf66\n  style User1 fill:#a5d8ff\n  style User2 fill:#a5d8ff\n  style User3 fill:#a5d8ff\n  style User4 fill:#a5d8ff',
        label: 'Star topology (decoupled via mediator)'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Class Structure'
      },
      {
        type: 'diagram',
        format: 'mermaid',
        content: 'classDiagram\n  class Mediator {\n    <<interface>>\n    +sendMessage(String message, Colleague from, Colleague to)*\n    +registerColleague(Colleague)*\n  }\n  class ConcreteMediator {\n    -colleagues: List~Colleague~\n    +sendMessage(String message, Colleague from, Colleague to)\n    +registerColleague(Colleague)\n  }\n  class Colleague {\n    <<abstract>>\n    #mediator: Mediator\n    +send(String message, Colleague recipient)*\n    +receive(String message)*\n  }\n  class ConcreteColleague {\n    +send(String message, Colleague recipient)\n    +receive(String message)\n  }\n  Mediator <|-- ConcreteMediator\n  Colleague <|-- ConcreteColleague\n  ConcreteMediator --> Colleague\n  ConcreteColleague --> Mediator',
        label: 'Mediator pattern class diagram'
      },
      {
        type: 'callout',
        variant: 'tip',
        title: 'When to Use',
        text: 'Use Mediator when objects have complex communication patterns, causing tight coupling that makes the system hard to reuse. Examples: GUI dialogs, chat rooms, workflow engines, air traffic control systems.'
      }
    ]
  },
  {
    id: 'mediator-implementation',
    title: 'Mediator Implementation: Chat Room',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Building a Chat Room System'
      },
      {
        type: 'paragraph',
        text: 'We\'ll implement a chat room where users communicate through a central `ChatRoom`. The mediator handles message routing and user management.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 1: Define the Mediator Interface'
      },
      {
        type: 'code',
        language: 'java',
        code: 'public interface ChatMediator {\n    void sendMessage(String message, User sender, User recipient);\n    void sendBroadcast(String message, User sender);\n    void registerUser(User user);\n    void unregisterUser(User user);\n}',
        filename: 'ChatMediator.java'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 2: Concrete Mediator'
      },
      {
        type: 'code',
        language: 'java',
        code: 'import java.util.*;\n\npublic class ChatRoom implements ChatMediator {\n    private List<User> users = new ArrayList<>();\n\n    @Override\n    public void registerUser(User user) {\n        users.add(user);\n        System.out.println(user.getName() + " joined the chat room");\n    }\n\n    @Override\n    public void unregisterUser(User user) {\n        users.remove(user);\n        System.out.println(user.getName() + " left the chat room");\n    }\n\n    @Override\n    public void sendMessage(String message, User sender, User recipient) {\n        if (users.contains(sender) && users.contains(recipient)) {\n            System.out.println(sender.getName() + " to " + recipient.getName() + ": " + message);\n            recipient.receive(message, sender);\n        } else {\n            System.out.println("Message delivery failed. User not in chat room.");\n        }\n    }\n\n    @Override\n    public void sendBroadcast(String message, User sender) {\n        for (User user : users) {\n            if (!user.equals(sender)) {\n                System.out.println(sender.getName() + " (broadcast): " + message);\n                user.receive(message, sender);\n            }\n        }\n    }\n}',
        filename: 'ChatRoom.java'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 3: Colleague Class'
      },
      {
        type: 'code',
        language: 'java',
        code: 'public class User {\n    private String name;\n    private ChatMediator mediator;\n    private List<String> messageHistory = new ArrayList<>();\n\n    public User(String name, ChatMediator mediator) {\n        this.name = name;\n        this.mediator = mediator;\n        mediator.registerUser(this);\n    }\n\n    public void sendMessage(String message, User recipient) {\n        System.out.println(name + " sends: " + message);\n        mediator.sendMessage(message, this, recipient);\n    }\n\n    public void sendBroadcast(String message) {\n        System.out.println(name + " broadcasts: " + message);\n        mediator.sendBroadcast(message, this);\n    }\n\n    public void receive(String message, User sender) {\n        String formatted = sender.getName() + " says: " + message;\n        messageHistory.add(formatted);\n        System.out.println(name + " received: " + formatted);\n    }\n\n    public String getName() { return name; }\n    public List<String> getMessageHistory() { return messageHistory; }\n    public void disconnect() {\n        mediator.unregisterUser(this);\n    }\n}',
        filename: 'User.java'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 4: Client Code'
      },
      {
        type: 'code',
        language: 'java',
        code: 'public class ChatDemo {\n    public static void main(String[] args) {\n        ChatMediator chatRoom = new ChatRoom();\n\n        User alice = new User("Alice", chatRoom);\n        User bob = new User("Bob", chatRoom);\n        User charlie = new User("Charlie", chatRoom);\n\n        alice.sendMessage("Hello Bob!", bob);\n        bob.sendMessage("Hi Alice! How are you?", alice);\n\n        charlie.sendBroadcast("Hello everyone!");\n        alice.sendBroadcast("Great to see you all!");\n\n        bob.disconnect();\n        bob.sendMessage("Anyone there?", alice);  // Fails\n    }\n}',
        filename: 'ChatDemo.java'
      },
      {
        type: 'callout',
        variant: 'note',
        title: 'Key Benefit',
        text: 'Users don\'t know about each other—they only know the `ChatMediator`. New users can be added without modifying existing code. The mediator controls all interaction logic in one place.'
      }
    ]
  },
  {
    id: 'mediator-sequence',
    title: 'Mediator: Sequence Diagram',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Message Flow Through the Mediator'
      },
      {
        type: 'paragraph',
        text: 'This sequence diagram shows how a message from User1 is routed through the ChatRoom mediator to User2 and User3:'
      },
      {
        type: 'diagram',
        format: 'mermaid',
        content: 'sequenceDiagram\n    participant User1\n    participant ChatRoom\n    participant User2\n    participant User3\n    User1->>ChatRoom: sendBroadcast(message)\n    activate ChatRoom\n    ChatRoom->>User2: receive(message, User1)\n    activate User2\n    User2->>User2: Store in messageHistory\n    deactivate User2\n    ChatRoom->>User3: receive(message, User1)\n    activate User3\n    User3->>User3: Store in messageHistory\n    deactivate User3\n    ChatRoom-->>User1: Delivery complete\n    deactivate ChatRoom',
        label: 'Broadcast message flow'
      },
      {
        type: 'callout',
        variant: 'tip',
        title: 'Decoupling Benefit',
        text: 'User1 doesn\'t call User2.receive() or User3.receive() directly. Instead, it calls mediator.sendBroadcast(). The mediator decides which users receive the message. Users remain unaware of each other.'
      }
    ]
  },
  {
    id: 'memento-concept',
    title: 'Memento Pattern: Concept',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Capturing and Restoring Object State'
      },
      {
        type: 'paragraph',
        text: 'The **Memento Pattern** allows you to capture an object\'s internal state and save it externally, enabling undo/redo functionality without violating encapsulation. The object itself doesn\'t expose its state; instead, it produces a `Memento`—an opaque snapshot that only the caretaker knows how to use.'
      },
      {
        type: 'callout',
        variant: 'important',
        title: 'Core Intent',
        text: 'Capture and externalize an object\'s internal state without violating encapsulation, and restore the object to this state later.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Key Participants'
      },
      {
        type: 'list',
        ordered: true,
        items: [
          '**Originator**: The object whose state we want to save. Creates mementos and restores from them.',
          '**Memento**: An opaque snapshot of the originator\'s state. Should be immutable. Only the originator can read its contents.',
          '**Caretaker**: Manages mementos (e.g., in a stack for undo). Doesn\'t know or care what\'s inside a memento.'
        ]
      },
      {
        type: 'diagram',
        format: 'mermaid',
        content: 'classDiagram\n  class Originator {\n    -state: Object\n    +createMemento() Memento\n    +restoreFromMemento(Memento)\n  }\n  class Memento {\n    -state: Object\n    -getState() Object\n  }\n  class Caretaker {\n    -mementos: Stack~Memento~\n    +save(Memento)\n    +restore() Memento\n  }\n  Originator --> Memento: creates\n  Originator --> Memento: restores from\n  Caretaker --> Memento: stores/retrieves',
        label: 'Memento pattern structure'
      },
      {
        type: 'callout',
        variant: 'tip',
        title: 'Encapsulation Preserved',
        text: 'The caretaker cannot access memento.state directly. This prevents accidental corruption or misuse. Only the originator can peek inside a memento.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Use Cases'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Text editors (save/restore document state)',
          'Database transactions (savepoints)',
          'Game state (save/load game)',
          'Browser history (back/forward buttons)',
          'IDE undo/redo stacks'
        ]
      }
    ]
  },
  {
    id: 'memento-implementation',
    title: 'Memento Implementation: Text Editor',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Implementing Undo/Redo with Mementos'
      },
      {
        type: 'paragraph',
        text: 'A text editor that saves document snapshots and supports unlimited undo/redo via memento pattern.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 1: Memento Class (Immutable Snapshot)'
      },
      {
        type: 'code',
        language: 'java',
        code: 'public class EditorMemento {\n    private final String content;\n    private final int cursorPosition;\n    private final long timestamp;\n\n    public EditorMemento(String content, int cursorPosition) {\n        this.content = content;\n        this.cursorPosition = cursorPosition;\n        this.timestamp = System.currentTimeMillis();\n    }\n\n    // Package-private: only Editor can access\n    String getContent() { return content; }\n    int getCursorPosition() { return cursorPosition; }\n    long getTimestamp() { return timestamp; }\n}',
        filename: 'EditorMemento.java'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 2: Originator (TextEditor)'
      },
      {
        type: 'code',
        language: 'java',
        code: 'public class TextEditor {\n    private String content = "";\n    private int cursorPosition = 0;\n\n    public void insertText(String text) {\n        content = content.substring(0, cursorPosition) + text \n                + content.substring(cursorPosition);\n        cursorPosition += text.length();\n        System.out.println("Content: " + content);\n    }\n\n    public void deleteChar() {\n        if (cursorPosition > 0) {\n            content = content.substring(0, cursorPosition - 1) \n                    + content.substring(cursorPosition);\n            cursorPosition--;\n            System.out.println("Content: " + content);\n        }\n    }\n\n    public void moveCursor(int position) {\n        if (position >= 0 && position <= content.length()) {\n            cursorPosition = position;\n            System.out.println("Cursor at: " + cursorPosition);\n        }\n    }\n\n    // Create memento (save state)\n    public EditorMemento save() {\n        System.out.println("Saving state: " + content);\n        return new EditorMemento(content, cursorPosition);\n    }\n\n    // Restore from memento (restore state)\n    public void restore(EditorMemento memento) {\n        this.content = memento.getContent();\n        this.cursorPosition = memento.getCursorPosition();\n        System.out.println("Restored: " + content);\n    }\n\n    public String getContent() { return content; }\n}',
        filename: 'TextEditor.java'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 3: Caretaker (History Manager)'
      },
      {
        type: 'code',
        language: 'java',
        code: 'import java.util.*;\n\npublic class EditorHistory {\n    private Stack<EditorMemento> undoStack = new Stack<>();\n    private Stack<EditorMemento> redoStack = new Stack<>();\n    private TextEditor editor;\n\n    public EditorHistory(TextEditor editor) {\n        this.editor = editor;\n    }\n\n    public void saveState() {\n        undoStack.push(editor.save());\n        redoStack.clear();  // Clear redo when new action is taken\n    }\n\n    public void undo() {\n        if (undoStack.isEmpty()) {\n            System.out.println("Nothing to undo!");\n            return;\n        }\n        EditorMemento memento = undoStack.pop();\n        redoStack.push(editor.save());\n        editor.restore(memento);\n    }\n\n    public void redo() {\n        if (redoStack.isEmpty()) {\n            System.out.println("Nothing to redo!");\n            return;\n        }\n        EditorMemento memento = redoStack.pop();\n        undoStack.push(editor.save());\n        editor.restore(memento);\n    }\n\n    public void printHistory() {\n        System.out.println("Undo stack size: " + undoStack.size());\n        System.out.println("Redo stack size: " + redoStack.size());\n    }\n}',
        filename: 'EditorHistory.java'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 4: Client Code'
      },
      {
        type: 'code',
        language: 'java',
        code: 'public class EditorDemo {\n    public static void main(String[] args) {\n        TextEditor editor = new TextEditor();\n        EditorHistory history = new EditorHistory(editor);\n\n        editor.insertText("Hello");  // Content: Hello\n        history.saveState();\n\n        editor.insertText(" World");  // Content: Hello World\n        history.saveState();\n\n        editor.deleteChar();  // Content: Hello Worl\n        history.saveState();\n\n        System.out.println("\\n--- Undo ---");\n        history.undo();  // Content: Hello World\n        history.undo();  // Content: Hello\n        history.undo();  // Nothing to undo\n\n        System.out.println("\\n--- Redo ---");\n        history.redo();  // Content: Hello World\n        history.redo();  // Content: Hello Worl\n    }\n}',
        filename: 'EditorDemo.java'
      }
    ]
  },
  {
    id: 'memento-serialization',
    title: 'Memento: Serialization Approach',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Serialization-Based Memento'
      },
      {
        type: 'paragraph',
        text: 'An alternative approach uses Java serialization to automatically capture all object state, eliminating the need to manually extract fields.'
      },
      {
        type: 'code',
        language: 'java',
        code: 'import java.io.*;\n\npublic class SerializableMemento implements Serializable {\n    private byte[] serializedState;\n\n    public SerializableMemento(Serializable object) throws IOException {\n        ByteArrayOutputStream baos = new ByteArrayOutputStream();\n        ObjectOutputStream oos = new ObjectOutputStream(baos);\n        oos.writeObject(object);\n        oos.close();\n        this.serializedState = baos.toByteArray();\n    }\n\n    public Object restore() throws IOException, ClassNotFoundException {\n        ByteArrayInputStream bais = new ByteArrayInputStream(serializedState);\n        ObjectInputStream ois = new ObjectInputStream(bais);\n        Object obj = ois.readObject();\n        ois.close();\n        return obj;\n    }\n}',
        filename: 'SerializableMemento.java'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Usage Example'
      },
      {
        type: 'code',
        language: 'java',
        code: 'public class Document implements Serializable {\n    private String title;\n    private String content;\n    private int version;\n\n    public Document(String title) {\n        this.title = title;\n        this.content = "";\n        this.version = 1;\n    }\n\n    public void edit(String newContent) {\n        this.content = newContent;\n        this.version++;\n    }\n\n    // ... getters\n}\n\n// In client code:\nDocument doc = new Document("Report");\ndoc.edit("First draft");\nSerializableMemento backup = new SerializableMemento(doc);\n\ndoc.edit("Second draft");  // Make changes\nDocument restored = (Document) backup.restore();  // Restore original',
        filename: 'SerializationExample.java'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Benefits & Drawbacks'
      },
      {
        type: 'table',
        headers: ['Aspect', 'Manual Memento', 'Serialization'],
        rows: [
          ['Code clarity', 'Explicit state capture', 'Automatic, less code'],
          ['Performance', 'Lightweight mementos', 'Overhead of serialization'],
          ['Flexibility', 'Control what gets saved', 'All fields serialized'],
          ['Selective state', 'Easy to exclude fields', 'Requires `transient` keyword'],
          ['Memory', 'Memory-efficient', 'Larger byte arrays'],
          ['Compatibility', 'Manual updates needed', 'Breaks on class changes']
        ]
      },
      {
        type: 'callout',
        variant: 'warning',
        title: 'Serialization Caveats',
        text: 'Serialization approach has overhead and compatibility issues across versions. Best for small objects or one-off backups. Manual memento is preferred for high-performance scenarios.'
      }
    ]
  },
  {
    id: 'observer-concept',
    title: 'Observer Pattern: Concept',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'One-to-Many Notification'
      },
      {
        type: 'paragraph',
        text: 'The **Observer Pattern** defines a one-to-many dependency between objects. When one object (the Subject) changes state, all dependent objects (Observers) are notified automatically. This is the foundation of reactive programming.'
      },
      {
        type: 'callout',
        variant: 'important',
        title: 'Core Intent',
        text: 'Define an object that encapsulates how a set of objects interact, promoting loose coupling between a subject and multiple observers.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Key Participants'
      },
      {
        type: 'list',
        ordered: true,
        items: [
          '**Subject** (Observable): Maintains list of observers, provides subscribe/unsubscribe, notifies observers of state changes.',
          '**Observer**: Defines an interface for receiving notifications when subject state changes.',
          '**ConcreteSubject**: Stores state and sends notifications to observers.',
          '**ConcreteObserver**: Implements the observer interface and updates based on subject state.'
        ]
      },
      {
        type: 'diagram',
        format: 'mermaid',
        content: 'classDiagram\n  class Subject {\n    <<interface>>\n    +attach(Observer)*\n    +detach(Observer)*\n    +notify()*\n  }\n  class Observer {\n    <<interface>>\n    +update(Subject)*\n  }\n  class ConcreteSubject {\n    -state: Object\n    -observers: List~Observer~\n    +attach(Observer)\n    +detach(Observer)\n    +notify()\n    +getState() Object\n    +setState(Object)\n  }\n  class ConcreteObserver {\n    -subjectState: Object\n    +update(Subject)\n  }\n  Subject <|-- ConcreteSubject\n  Observer <|-- ConcreteObserver\n  ConcreteSubject --> Observer\n  ConcreteObserver --> ConcreteSubject',
        label: 'Observer pattern structure'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Push vs Pull'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          '**Push Model**: Subject sends all changed state data to observers. Observers are passive. May send unnecessary data.',
          '**Pull Model**: Subject notifies observers; observers query subject for data they need. More flexible but requires extra calls.'
        ]
      },
      {
        type: 'callout',
        variant: 'tip',
        title: 'Real-World Uses',
        text: 'Stock market ticker (price changes), GUI event listeners (button clicks), MVC frameworks (model updates), reactive streams (RxJava, Project Reactor).'
      }
    ]
  },
  {
    id: 'observer-implementation',
    title: 'Observer Implementation: Stock Market',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Building a Stock Price Notification System'
      },
      {
        type: 'paragraph',
        text: 'Multiple displays and alerts subscribe to stock price changes. When price updates, all observers are notified automatically.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 1: Observer Interface'
      },
      {
        type: 'code',
        language: 'java',
        code: 'public interface StockObserver {\n    void update(Stock stock);\n}',
        filename: 'StockObserver.java'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 2: Subject (Stock)'
      },
      {
        type: 'code',
        language: 'java',
        code: 'import java.util.*;\n\npublic class Stock {\n    private String symbol;\n    private double price;\n    private List<StockObserver> observers = new ArrayList<>();\n\n    public Stock(String symbol, double initialPrice) {\n        this.symbol = symbol;\n        this.price = initialPrice;\n    }\n\n    // Subscribe observer\n    public void attach(StockObserver observer) {\n        if (!observers.contains(observer)) {\n            observers.add(observer);\n            System.out.println("Observer attached to " + symbol);\n        }\n    }\n\n    // Unsubscribe observer\n    public void detach(StockObserver observer) {\n        observers.remove(observer);\n        System.out.println("Observer detached from " + symbol);\n    }\n\n    // Notify all observers\n    private void notifyObservers() {\n        for (StockObserver observer : observers) {\n            observer.update(this);\n        }\n    }\n\n    // Update price and notify\n    public void setPrice(double newPrice) {\n        System.out.println(symbol + " price changed: $" + price + " -> $" + newPrice);\n        this.price = newPrice;\n        notifyObservers();\n    }\n\n    public String getSymbol() { return symbol; }\n    public double getPrice() { return price; }\n}',
        filename: 'Stock.java'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 3: Concrete Observers'
      },
      {
        type: 'code',
        language: 'java',
        code: 'public class StockDisplay implements StockObserver {\n    private String displayName;\n\n    public StockDisplay(String displayName) {\n        this.displayName = displayName;\n    }\n\n    @Override\n    public void update(Stock stock) {\n        System.out.println(displayName + ": " + stock.getSymbol() \n                         + " is now $" + stock.getPrice());\n    }\n}\n\npublic class PriceAlert implements StockObserver {\n    private String alertName;\n    private double threshold;\n\n    public PriceAlert(String alertName, double threshold) {\n        this.alertName = alertName;\n        this.threshold = threshold;\n    }\n\n    @Override\n    public void update(Stock stock) {\n        if (stock.getPrice() >= threshold) {\n            System.out.println(\"[ALERT] \" + alertName + \": \" + stock.getSymbol() \n                             + \" reached $\" + stock.getPrice());\n        }\n    }\n}',
        filename: 'StockDisplay.java, PriceAlert.java'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 4: Client Code'
      },
      {
        type: 'code',
        language: 'java',
        code: 'public class StockMarketDemo {\n    public static void main(String[] args) {\n        Stock apple = new Stock("AAPL", 150.00);\n\n        StockDisplay display1 = new StockDisplay("Display 1");\n        StockDisplay display2 = new StockDisplay("Display 2");\n        PriceAlert alert = new PriceAlert("High Price Alert", 160.00);\n\n        apple.attach(display1);\n        apple.attach(display2);\n        apple.attach(alert);\n\n        apple.setPrice(155.00);  // No alert\n        // Output:\n        // Display 1: AAPL is now $155.0\n        // Display 2: AAPL is now $155.0\n\n        apple.setPrice(162.00);  // Triggers alert\n        // Output:\n        // Display 1: AAPL is now $162.0\n        // Display 2: AAPL is now $162.0\n        // [ALERT] High Price Alert: AAPL reached $162.0\n\n        apple.detach(display1);\n        apple.setPrice(165.00);\n        // Output:\n        // Display 2: AAPL is now $165.0\n        // [ALERT] High Price Alert: AAPL reached $165.0\n    }\n}',
        filename: 'StockMarketDemo.java'
      }
    ]
  },
  {
    id: 'observer-sequence',
    title: 'Observer: Sequence Diagram',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Observer Notification Flow'
      },
      {
        type: 'paragraph',
        text: 'This sequence diagram shows how a stock price update triggers notifications to all registered observers:'
      },
      {
        type: 'diagram',
        format: 'mermaid',
        content: 'sequenceDiagram\n    participant Client\n    participant Stock\n    participant Display\n    participant Alert\n    Client->>Stock: setPrice(165.00)\n    activate Stock\n    Stock->>Stock: notifyObservers()\n    Stock->>Display: update(this)\n    activate Display\n    Display-->>Display: Display new price\n    deactivate Display\n    Stock->>Alert: update(this)\n    activate Alert\n    Alert->>Alert: Check threshold\n    Alert-->>Alert: Trigger if needed\n    deactivate Alert\n    Stock-->>Client: Notification complete\n    deactivate Stock',
        label: 'Stock price update notification'
      },
      {
        type: 'callout',
        variant: 'note',
        title: 'Push Model Shown',
        text: 'Stock calls observers with `this` reference (push). Observers can query stock for needed data. Alternative: push only specific data to reduce coupling.'
      }
    ]
  },
  {
    id: 'observer-java',
    title: 'Observer in Modern Java',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Java Built-in Observer Mechanisms'
      },
      {
        type: 'paragraph',
        text: 'Java provides standardized observer mechanisms that align with the Observer pattern. Modern approaches use functional interfaces and lambda expressions.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'java.beans.PropertyChangeListener'
      },
      {
        type: 'code',
        language: 'java',
        code: 'import java.beans.*;\n\npublic class Person {\n    private String name;\n    private PropertyChangeSupport support = new PropertyChangeSupport(this);\n\n    public void addPropertyChangeListener(PropertyChangeListener listener) {\n        support.addPropertyChangeListener(listener);\n    }\n\n    public void removePropertyChangeListener(PropertyChangeListener listener) {\n        support.removePropertyChangeListener(listener);\n    }\n\n    public void setName(String newName) {\n        String oldName = this.name;\n        this.name = newName;\n        support.firePropertyChange("name", oldName, newName);\n    }\n\n    public String getName() { return name; }\n}\n\n// Usage\nPerson person = new Person();\nperson.addPropertyChangeListener(event -> \n    System.out.println(event.getPropertyName() + " changed from " \n                     + event.getOldValue() + " to " + event.getNewValue())\n);\nperson.setName("John");  // Triggers listener',
        filename: 'PropertyChangeExample.java'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Functional Observer with Lambdas'
      },
      {
        type: 'code',
        language: 'java',
        code: 'import java.util.function.Consumer;\nimport java.util.*;\n\npublic class EventBus<T> {\n    private List<Consumer<T>> subscribers = new ArrayList<>();\n\n    public void subscribe(Consumer<T> listener) {\n        subscribers.add(listener);\n    }\n\n    public void publish(T event) {\n        subscribers.forEach(listener -> listener.accept(event));\n    }\n}\n\n// Usage\nEventBus<String> messageBus = new EventBus<>();\nmessageBus.subscribe(msg -> System.out.println("Subscriber 1: " + msg));\nmessageBus.subscribe(msg -> System.out.println("Subscriber 2: " + msg.toUpperCase()));\n\nmessageBus.publish("Hello World");\n// Output:\n// Subscriber 1: Hello World\n// Subscriber 2: HELLO WORLD',
        filename: 'FunctionalObserver.java'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Reactive Streams (RxJava)'
      },
      {
        type: 'code',
        language: 'java',
        code: 'import io.reactivex.rxjava3.core.Observable;\n\n// RxJava is Observer pattern on steroids\nObservable<Integer> numbers = Observable.range(1, 5);\n\nnumbers.subscribe(\n    value -> System.out.println("Next: " + value),\n    error -> System.err.println("Error: " + error),\n    () -> System.out.println("Completed")\n);\n// Output:\n// Next: 1\n// Next: 2\n// Next: 3\n// Next: 4\n// Next: 5\n// Completed',
        filename: 'RxJavaExample.java'
      },
      {
        type: 'callout',
        variant: 'tip',
        title: 'Modern Observer Pattern',
        text: 'Reactive libraries like RxJava, Project Reactor, and coroutines extend Observer with features like error handling, backpressure, and composition operators. Observer is the foundation of all reactive frameworks.'
      }
    ]
  },
  {
    id: 'mediator-memento-observer-comparison',
    title: 'Behavioral Pattern Comparison',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Mediator vs Memento vs Observer'
      },
      {
        type: 'paragraph',
        text: 'All three are behavioral patterns but solve different problems. Here\'s how they compare:'
      },
      {
        type: 'table',
        headers: [
          'Aspect',
          'Mediator',
          'Memento',
          'Observer'
        ],
        rows: [
          [
            'Problem Solved',
            'Reduce coupling in complex interactions',
            'Capture/restore object state',
            'Notify multiple objects of state change'
          ],
          [
            'Key Participants',
            'Mediator + Colleagues',
            'Originator + Memento + Caretaker',
            'Subject + Observers'
          ],
          [
            'Coupling Direction',
            'Colleagues -> Mediator (centralized)',
            'Unidirectional (Originator -> Memento)',
            'Subject -> Observers (broadcast)'
          ],
          [
            'Data Flow',
            'Through mediator',
            'Into and out of memento',
            'From subject to observers'
          ],
          [
            'Primary Use Case',
            'Dialog boxes, workflow engines, chat',
            'Undo/redo, transaction savepoints',
            'Event notification, model updates'
          ],
          [
            'Java Example',
            'Dialog mediating between text field and button',
            'Serialization.createMemento()',
            'PropertyChangeListener, RxJava'
          ]
        ]
      },
      {
        type: 'callout',
        variant: 'note',
        title: 'Complementary Patterns',
        text: 'These patterns work well together. A mediator might use mementos to save dialog state. An observer might notify a mediator of state changes. They solve orthogonal problems in system design.'
      }
    ]
  },
  {
    id: 'chapter07-summary',
    title: 'Chapter 7: Summary',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Behavioral Patterns II: Key Takeaways'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Mediator Pattern'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Centralizes communication through a mediator object',
          'Reduces coupling from O(n²) mesh to O(n) star topology',
          'Examples: chat rooms, GUI dialogs, workflow engines, air traffic control',
          'Trade-off: Mediator becomes a complex central coordinator'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Memento Pattern'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Captures object state without breaking encapsulation',
          'Mementos are opaque to caretak—only originator understands them',
          'Enables undo/redo, transaction savepoints, game saves',
          'Two approaches: manual (field-by-field) vs serialization-based'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Observer Pattern'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Defines one-to-many dependency with automatic notification',
          'Foundation of reactive programming and event-driven systems',
          'Java built-ins: PropertyChangeListener, lambda-based EventBus, RxJava',
          'Push model sends all data; pull model lets observers query what they need'
        ]
      },
      {
        type: 'divider'
      },
      {
        type: 'callout',
        variant: 'important',
        title: 'Key Insight',
        text: '**Observer Pattern is foundational**. It\'s the basis for all reactive frameworks (RxJava, Spring Reactor, async/await). Understanding Observer deeply unlocks understanding of modern asynchronous architectures.'
      }
    ]
  }
];
