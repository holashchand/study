export const sections = [
  {
    id: 'state-concept',
    title: 'State Pattern: Concept',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Object Behavior Varies with Internal State'
      },
      {
        type: 'paragraph',
        text: 'The **State Pattern** allows an object to change its behavior when its internal state changes. Instead of using massive `if-else` chains to handle different states, we encapsulate each state as a separate object that defines behavior for that state.'
      },
      {
        type: 'callout',
        variant: 'important',
        title: 'Core Intent',
        text: 'Allow an object to alter its behavior when its internal state changes. The object will appear to change its class.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Problem: State-Dependent Behavior'
      },
      {
        type: 'paragraph',
        text: 'A vending machine accepts coins only when idle, dispenses items only after selection, and rejects coins while dispensing. Without State pattern, this becomes messy:'
      },
      {
        type: 'code',
        language: 'java',
        code: 'public class VendingMachineMessy {\n    private String state = "IDLE";\n    private double balance = 0;\n\n    public void insertCoin(double amount) {\n        if (state.equals("IDLE")) {\n            balance += amount;\n            state = "MONEY_INSERTED";\n        } else if (state.equals("DISPENSING")) {\n            System.out.println("Cannot insert coin while dispensing!");\n        }\n        // More if-else chains...\n    }\n\n    public void selectItem(String item) {\n        if (state.equals("MONEY_INSERTED")) {\n            // ... validate price and dispense\n        } else {\n            System.out.println("Insert money first!");\n        }\n    }\n    // This grows exponentially with each new state\n}',
        filename: 'VendingMachineMessy.java'
      },
      {
        type: 'callout',
        variant: 'warning',
        title: 'Anti-Pattern',
        text: 'State logic scattered across methods. Each method becomes a forest of if-else chains. Hard to add new states. Easy to miss edge cases.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Solution: Encapsulate States'
      },
      {
        type: 'diagram',
        format: 'mermaid',
        content: 'classDiagram\n  class Context {\n    -state: State\n    +request()\n    +setState(State)\n  }\n  class State {\n    <<interface>>\n    +handle(Context)*\n  }\n  class ConcreteStateA {\n    +handle(Context)\n  }\n  class ConcreteStateB {\n    +handle(Context)\n  }\n  Context --> State\n  State <|-- ConcreteStateA\n  State <|-- ConcreteStateB',
        label: 'State pattern structure'
      },
      {
        type: 'paragraph',
        text: 'Each state becomes a separate class implementing the `State` interface. The context delegates behavior to the current state object, which can transition to another state.'
      },
      {
        type: 'callout',
        variant: 'tip',
        title: 'When to Use',
        text: 'Use State when object behavior is determined by its state, and behavior changes dynamically at runtime. Examples: workflow engines, payment processing, game characters, TCP connections.'
      }
    ]
  },
  {
    id: 'state-diagram',
    title: 'State Machine Diagram',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Vending Machine State Transitions'
      },
      {
        type: 'paragraph',
        text: 'A vending machine has four states with specific transitions based on events:'
      },
      {
        type: 'diagram',
        format: 'mermaid',
        content: 'stateDiagram-v2\n  [*] --> Idle\n  Idle --> HasMoney: insertCoin()\n  HasMoney --> Idle: returnChange()\n  HasMoney --> Dispensing: selectItem()\n  Dispensing --> Idle: dispenseItem()\n  note right of Idle\n    Waiting for customer\n    Rejects item selection\n  end note\n  note right of HasMoney\n    Customer inserted money\n    Ready to select item\n  end note\n  note right of Dispensing\n    Dispensing selected item\n    Cannot accept input\n  end note',
        label: 'Vending machine state machine'
      },
      {
        type: 'callout',
        variant: 'note',
        title: 'State Design',
        text: 'Each state has specific entry conditions (can you reach it?) and allowed transitions (what can happen from here?). Invalid transitions are rejected.'
      }
    ]
  },
  {
    id: 'state-implementation',
    title: 'State Implementation: Vending Machine',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Building a State-Based Vending Machine'
      },
      {
        type: 'paragraph',
        text: 'We\'ll implement a vending machine using the State pattern, where each state encapsulates its own behavior.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 1: State Interface'
      },
      {
        type: 'code',
        language: 'java',
        code: 'public interface VendingMachineState {\n    void insertCoin(VendingMachine machine, double amount);\n    void selectItem(VendingMachine machine, String item);\n    void dispense(VendingMachine machine);\n    void returnChange(VendingMachine machine);\n}',
        filename: 'VendingMachineState.java'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 2: Concrete States'
      },
      {
        type: 'code',
        language: 'java',
        code: 'public class IdleState implements VendingMachineState {\n    @Override\n    public void insertCoin(VendingMachine machine, double amount) {\n        System.out.println("Coin accepted: $" + amount);\n        machine.setBalance(machine.getBalance() + amount);\n        machine.setState(new HasMoneyState());\n    }\n\n    @Override\n    public void selectItem(VendingMachine machine, String item) {\n        System.out.println("Please insert money first!");\n    }\n\n    @Override\n    public void dispense(VendingMachine machine) {\n        System.out.println("No item selected!");\n    }\n\n    @Override\n    public void returnChange(VendingMachine machine) {\n        System.out.println("No change to return!");\n    }\n}\n\npublic class HasMoneyState implements VendingMachineState {\n    @Override\n    public void insertCoin(VendingMachine machine, double amount) {\n        System.out.println("Coin accepted: $" + amount);\n        machine.setBalance(machine.getBalance() + amount);\n    }\n\n    @Override\n    public void selectItem(VendingMachine machine, String item) {\n        double price = machine.getItemPrice(item);\n        if (machine.getBalance() >= price) {\n            System.out.println("Item selected: " + item);\n            machine.setSelectedItem(item);\n            machine.setState(new DispensingState());\n        } else {\n            System.out.println("Insufficient funds for " + item);\n        }\n    }\n\n    @Override\n    public void dispense(VendingMachine machine) {\n        System.out.println("Please select an item first!");\n    }\n\n    @Override\n    public void returnChange(VendingMachine machine) {\n        double change = machine.getBalance();\n        System.out.println("Returning change: $" + change);\n        machine.setBalance(0);\n        machine.setState(new IdleState());\n    }\n}\n\npublic class DispensingState implements VendingMachineState {\n    @Override\n    public void insertCoin(VendingMachine machine, double amount) {\n        System.out.println("Cannot insert coin while dispensing!");\n    }\n\n    @Override\n    public void selectItem(VendingMachine machine, String item) {\n        System.out.println("Already dispensing!");\n    }\n\n    @Override\n    public void dispense(VendingMachine machine) {\n        String item = machine.getSelectedItem();\n        double price = machine.getItemPrice(item);\n        System.out.println("Dispensing: " + item);\n        machine.setBalance(machine.getBalance() - price);\n        machine.setSelectedItem(null);\n        machine.setState(new IdleState());\n    }\n\n    @Override\n    public void returnChange(VendingMachine machine) {\n        System.out.println("Finishing transaction first...");\n        dispense(machine);\n    }\n}',
        filename: 'VendingMachineStates.java'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 3: Context (VendingMachine)'
      },
      {
        type: 'code',
        language: 'java',
        code: 'import java.util.*;\n\npublic class VendingMachine {\n    private VendingMachineState state;\n    private double balance = 0;\n    private String selectedItem = null;\n    private Map<String, Double> inventory = new HashMap<>();\n\n    public VendingMachine() {\n        this.state = new IdleState();\n        this.inventory.put("Soda", 1.50);\n        this.inventory.put("Chips", 1.00);\n        this.inventory.put("Candy", 0.75);\n    }\n\n    public void insertCoin(double amount) {\n        state.insertCoin(this, amount);\n    }\n\n    public void selectItem(String item) {\n        state.selectItem(this, item);\n    }\n\n    public void dispense() {\n        state.dispense(this);\n    }\n\n    public void returnChange() {\n        state.returnChange(this);\n    }\n\n    // State management\n    public void setState(VendingMachineState state) {\n        System.out.println("State changed to: " + state.getClass().getSimpleName());\n        this.state = state;\n    }\n\n    // Getters and setters\n    public double getBalance() { return balance; }\n    public void setBalance(double balance) { this.balance = balance; }\n\n    public String getSelectedItem() { return selectedItem; }\n    public void setSelectedItem(String item) { this.selectedItem = item; }\n\n    public double getItemPrice(String item) {\n        return inventory.getOrDefault(item, 0.0);\n    }\n\n    public void showStatus() {\n        System.out.println("Balance: $" + balance + \", State: \" \n                         + state.getClass().getSimpleName());\n    }\n}',
        filename: 'VendingMachine.java'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 4: Client Code'
      },
      {
        type: 'code',
        language: 'java',
        code: 'public class VendingMachineDemo {\n    public static void main(String[] args) {\n        VendingMachine machine = new VendingMachine();\n\n        System.out.println("=== Normal Transaction ===\");\n        machine.insertCoin(1.00);\n        machine.showStatus();\n        machine.selectItem("Soda");\n        machine.dispense();\n        machine.showStatus();\n\n        System.out.println("\\n=== Invalid Operations ===\");\n        machine.selectItem("Chips");  // No money\n        machine.insertCoin(0.50);\n        machine.insertCoin(0.75);\n        machine.showStatus();\n\n        System.out.println("\\n=== Insufficient Funds ===\");\n        machine.selectItem("Soda");  // Need $1.50, have $1.25\n        machine.returnChange();\n    }\n}',
        filename: 'VendingMachineDemo.java'
      }
    ]
  },
  {
    id: 'state-vs-strategy',
    title: 'State vs Strategy Pattern',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Understanding the Difference'
      },
      {
        type: 'paragraph',
        text: 'State and Strategy patterns look similar structurally but solve different problems with different dynamics.'
      },
      {
        type: 'table',
        headers: [
          'Aspect',
          'State Pattern',
          'Strategy Pattern'
        ],
        rows: [
          [
            'Problem',
            'Behavior changes based on internal state',
            'Select one of many algorithms'
          ],
          [
            'Who Changes Behavior',
            'Object changes its own state (state transitions)',
            'Client injects behavior from outside'
          ],
          [
            'State Awareness',
            'States know about other states (transitions)',
            'Strategies are independent, no awareness'
          ],
          [
            'Lifetime',
            'States typically short-lived, created/destroyed',
            'Strategies often reused across requests'
          ],
          [
            'Control Flow',
            'State object calls context methods to change state',
            'Context calls strategy; no callback'
          ],
          [
            'Example',
            'Vending machine (IDLE → MONEY → DISPENSING)',
            'Payment method (Visa vs PayPal vs Crypto)'
          ],
          [
            'Java Analogy',
            'Object behavior evolves during lifetime',
            'Passing different `Comparator` to `sort()`'
          ]
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Structural Comparison'
      },
      {
        type: 'code',
        language: 'java',
        code: '// STATE: Context knows it\'s in a state; state transitions itself\npublic class StateContext {\n    private State state = new IdleState();  // Starts in some state\n    public void request() {\n        state = state.handle(this);  // State returns new state\n    }\n}\n\n// STRATEGY: Client chooses which strategy to use; strategies don\'t change\npublic class StrategyContext {\n    private Strategy strategy;  // No default; injected by client\n    public StrategyContext(Strategy strategy) {\n        this.strategy = strategy;\n    }\n    public void request() {\n        strategy.execute();  // Execute; no state change\n    }\n}',
        filename: 'StateVsStrategy.java'
      },
      {
        type: 'callout',
        variant: 'tip',
        title: 'Quick Rule',
        text: '**State:** Object morphs behavior during lifetime based on events. **Strategy:** Client picks behavior before execution. State involves transitions; Strategy doesn\'t.'
      }
    ]
  },
  {
    id: 'strategy-concept',
    title: 'Strategy Pattern: Concept',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Encapsulating Interchangeable Algorithms'
      },
      {
        type: 'paragraph',
        text: 'The **Strategy Pattern** defines a family of algorithms, encapsulates each, and makes them interchangeable. Clients can select a strategy based on context, and switch strategies at runtime without changing the context\'s code.'
      },
      {
        type: 'callout',
        variant: 'important',
        title: 'Core Intent',
        text: 'Define a family of algorithms, encapsulate each one, and make them interchangeable. Strategy lets the algorithm vary independently from clients that use it.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Class Structure'
      },
      {
        type: 'diagram',
        format: 'mermaid',
        content: 'classDiagram\n  class Context {\n    -strategy: Strategy\n    +setStrategy(Strategy)\n    +executeStrategy()\n  }\n  class Strategy {\n    <<interface>>\n    +execute()*\n  }\n  class ConcreteStrategyA {\n    +execute()\n  }\n  class ConcreteStrategyB {\n    +execute()\n  }\n  class ConcreteStrategyC {\n    +execute()\n  }\n  Context --> Strategy\n  Strategy <|-- ConcreteStrategyA\n  Strategy <|-- ConcreteStrategyB\n  Strategy <|-- ConcreteStrategyC',
        label: 'Strategy pattern structure'
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
          '**Eliminates if-else chains**: No conditional logic for algorithm selection.',
          '**Open/Closed Principle**: Add new strategies without modifying context.',
          '**Runtime flexibility**: Change strategy on the fly.',
          '**Testability**: Test each strategy independently.',
          '**Reusability**: Strategies can be used across different contexts.'
        ]
      },
      {
        type: 'callout',
        variant: 'tip',
        title: 'When to Use',
        text: 'Use Strategy when you have multiple ways to do something and the choice depends on runtime conditions. Examples: sorting algorithms, compression, encryption, payment methods, routing.'
      }
    ]
  },
  {
    id: 'strategy-implementation',
    title: 'Strategy Implementation: Payment System',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Building a Flexible Payment System'
      },
      {
        type: 'paragraph',
        text: 'A shopping cart that accepts multiple payment methods via Strategy pattern. Each method encapsulates its logic independently.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 1: Strategy Interface'
      },
      {
        type: 'code',
        language: 'java',
        code: 'public interface PaymentStrategy {\n    boolean pay(double amount);\n    String getPaymentMethod();\n}',
        filename: 'PaymentStrategy.java'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 2: Concrete Strategies'
      },
      {
        type: 'code',
        language: 'java',
        code: 'public class CreditCardPayment implements PaymentStrategy {\n    private String cardNumber;\n    private String cvv;\n\n    public CreditCardPayment(String cardNumber, String cvv) {\n        this.cardNumber = cardNumber;\n        this.cvv = cvv;\n    }\n\n    @Override\n    public boolean pay(double amount) {\n        System.out.println("Processing credit card payment of $" + amount);\n        System.out.println("Card: " + cardNumber.substring(cardNumber.length() - 4));\n        System.out.println("Verifying CVV...\");\n        return true;  // Assume success\n    }\n\n    @Override\n    public String getPaymentMethod() { return "Credit Card\"; }\n}\n\npublic class PayPalPayment implements PaymentStrategy {\n    private String email;\n    private String password;\n\n    public PayPalPayment(String email) {\n        this.email = email;\n    }\n\n    @Override\n    public boolean pay(double amount) {\n        System.out.println("Processing PayPal payment of $" + amount);\n        System.out.println("PayPal account: \" + email);\n        System.out.println("Redirecting to PayPal...\");\n        return true;\n    }\n\n    @Override\n    public String getPaymentMethod() { return \"PayPal\"; }\n}\n\npublic class CryptoPayment implements PaymentStrategy {\n    private String walletAddress;\n\n    public CryptoPayment(String walletAddress) {\n        this.walletAddress = walletAddress;\n    }\n\n    @Override\n    public boolean pay(double amount) {\n        System.out.println(\"Processing crypto payment of $\" + amount);\n        System.out.println(\"Wallet: \" + walletAddress);\n        System.out.println(\"Converting to BTC...\");\n        return true;\n    }\n\n    @Override\n    public String getPaymentMethod() { return \"Cryptocurrency\"; }\n}',
        filename: 'PaymentStrategies.java'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 3: Context (ShoppingCart)'
      },
      {
        type: 'code',
        language: 'java',
        code: 'import java.util.*;\n\npublic class ShoppingCart {\n    private List<String> items = new ArrayList<>();\n    private double total = 0;\n    private PaymentStrategy paymentStrategy;\n\n    public void addItem(String item, double price) {\n        items.add(item);\n        total += price;\n        System.out.println("Added \" + item + \" ($\" + price + \") to cart\");\n    }\n\n    public void setPaymentStrategy(PaymentStrategy strategy) {\n        System.out.println(\"Payment method changed to: \" + strategy.getPaymentMethod());\n        this.paymentStrategy = strategy;\n    }\n\n    public void checkout() {\n        if (paymentStrategy == null) {\n            System.out.println(\"No payment method selected!\");\n            return;\n        }\n        System.out.println(\"\\n=== Checkout ===\");\n        System.out.println(\"Items: \" + items);\n        System.out.println(\"Total: $\" + total);\n        System.out.println();\n\n        if (paymentStrategy.pay(total)) {\n            System.out.println(\"Payment successful!\");\n            items.clear();\n            total = 0;\n        } else {\n            System.out.println(\"Payment failed!\");\n        }\n    }\n\n    public double getTotal() { return total; }\n}',
        filename: 'ShoppingCart.java'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 4: Client Code'
      },
      {
        type: 'code',
        language: 'java',
        code: 'public class PaymentDemo {\n    public static void main(String[] args) {\n        ShoppingCart cart = new ShoppingCart();\n        cart.addItem(\"Laptop\", 1200);\n        cart.addItem(\"Mouse\", 50);\n\n        System.out.println(\"\\n=== Payment Option 1: Credit Card ===\");\n        cart.setPaymentStrategy(new CreditCardPayment(\"4532-1111-2222-3333\", \"123\"));\n        cart.checkout();\n\n        // New order\n        cart.addItem(\"Monitor\", 300);\n\n        System.out.println(\"\\n=== Payment Option 2: PayPal ===\");\n        cart.setPaymentStrategy(new PayPalPayment(\"user@example.com\"));\n        cart.checkout();\n\n        // New order\n        cart.addItem(\"Keyboard\", 150);\n\n        System.out.println(\"\\n=== Payment Option 3: Crypto ===\");\n        cart.setPaymentStrategy(new CryptoPayment(\"1A2B3C4D5E6F7G8H9I0J\"));\n        cart.checkout();\n    }\n}',
        filename: 'PaymentDemo.java'
      }
    ]
  },
  {
    id: 'strategy-java',
    title: 'Strategy in Standard Java Libraries',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Strategy Pattern in Java APIs'
      },
      {
        type: 'paragraph',
        text: 'The Strategy pattern is pervasive in Java. The most common example is `java.util.Comparator`.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Comparator as Strategy'
      },
      {
        type: 'code',
        language: 'java',
        code: 'import java.util.*;\n\npublic class Person {\n    private String name;\n    private int age;\n\n    public Person(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n\n    @Override\n    public String toString() { return name + \"(\" + age + \")\"; }\n\n    public String getName() { return name; }\n    public int getAge() { return age; }\n}\n\npublic class ComparatorDemo {\n    public static void main(String[] args) {\n        List<Person> people = Arrays.asList(\n            new Person(\"Alice\", 30),\n            new Person(\"Bob\", 25),\n            new Person(\"Charlie\", 35)\n        );\n\n        // Strategy 1: Sort by name\n        Collections.sort(people, (p1, p2) -> p1.getName().compareTo(p2.getName()));\n        System.out.println(\"By name: \" + people);\n\n        // Strategy 2: Sort by age\n        Collections.sort(people, (p1, p2) -> Integer.compare(p1.getAge(), p2.getAge()));\n        System.out.println(\"By age: \" + people);\n\n        // Strategy 3: Sort by age descending\n        Collections.sort(people, (p1, p2) -> Integer.compare(p2.getAge(), p1.getAge()));\n        System.out.println(\"By age descending: \" + people);\n    }\n}',
        filename: 'ComparatorStrategy.java'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Function as Strategy'
      },
      {
        type: 'code',
        language: 'java',
        code: 'import java.util.function.Function;\nimport java.util.*;\n\npublic class DataProcessor {\n    public static <T, R> List<R> process(List<T> input, Function<T, R> transformer) {\n        List<R> result = new ArrayList<>();\n        for (T item : input) {\n            result.add(transformer.apply(item));\n        }\n        return result;\n    }\n}\n\npublic class FunctionStrategyDemo {\n    public static void main(String[] args) {\n        List<String> words = Arrays.asList(\"hello\", \"world\", \"java\");\n\n        // Strategy 1: Convert to uppercase\n        List<String> upper = DataProcessor.process(words, String::toUpperCase);\n        System.out.println(upper);  // [HELLO, WORLD, JAVA]\n\n        // Strategy 2: Get length\n        List<Integer> lengths = DataProcessor.process(words, String::length);\n        System.out.println(lengths);  // [5, 5, 4]\n\n        // Strategy 3: Custom transformation\n        List<String> reversed = DataProcessor.process(words,\n            s -> new StringBuilder(s).reverse().toString());\n        System.out.println(reversed);  // [olleh, dlrow, java]\n    }\n}',
        filename: 'FunctionStrategy.java'
      },
      {
        type: 'callout',
        variant: 'tip',
        title: 'Functional Strategy',
        text: 'In modern Java, lambda expressions and functional interfaces make Strategy pattern elegant. You don\'t need verbose strategy classes—just pass a lambda. This is the idiomatic Java way.'
      }
    ]
  },
  {
    id: 'strategy-lambda',
    title: 'Strategy with Lambdas',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Modern Strategy: Before and After'
      },
      {
        type: 'paragraph',
        text: 'Lambda expressions eliminate boilerplate. Compare traditional Strategy classes with modern lambda-based approaches.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Traditional Strategy Classes'
      },
      {
        type: 'code',
        language: 'java',
        code: '// Old way: Create a class for each strategy\npublic interface Formatter {\n    String format(String input);\n}\n\npublic class UppercaseFormatter implements Formatter {\n    @Override\n    public String format(String input) {\n        return input.toUpperCase();\n    }\n}\n\npublic class ReverseFormatter implements Formatter {\n    @Override\n    public String format(String input) {\n        return new StringBuilder(input).reverse().toString();\n    }\n}\n\npublic class PadFormatter implements Formatter {\n    @Override\n    public String format(String input) {\n        return \"[\" + input + \"]\";  // Add brackets\n    }\n}\n\n// Usage\nFormatter formatter = new UppercaseFormatter();\nString result = formatter.format(\"hello\");\n// Result: HELLO',
        filename: 'TraditionalStrategy.java'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Modern Lambda Strategy'
      },
      {
        type: 'code',
        language: 'java',
        code: '// New way: Use lambdas\npublic interface Formatter {\n    String format(String input);\n}\n\n// Usage - no classes needed!\nFormatter uppercase = input -> input.toUpperCase();\nFormatter reverse = input -> new StringBuilder(input).reverse().toString();\nFormatter pad = input -> \"[\" + input + \"]\";\n\nString result1 = uppercase.format(\"hello\");  // HELLO\nString result2 = reverse.format(\"hello\");     // olleh\nString result3 = pad.format(\"hello\");         // [hello]\n\n// Or pass strategy directly\nSystem.out.println(processText(\"hello\", String::toUpperCase));\nSystem.out.println(processText(\"hello\", s -> \"***\" + s + \"***\"));\n\npublic static String processText(String text, Formatter formatter) {\n    return formatter.format(text);\n}',
        filename: 'LambdaStrategy.java'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Comparison'
      },
      {
        type: 'table',
        headers: [
          'Aspect',
          'Traditional Classes',
          'Lambda Expressions'
        ],
        rows: [
          [
            'Code Volume',
            'Large (one file per strategy)',
            'Minimal'
          ],
          [
            'Boilerplate',
            'High (class declaration, override)',
            'None'
          ],
          [
            'Readability',
            'Verbose but explicit',
            'Concise and clear intent'
          ],
          [
            'Memory',
            'Multiple objects in memory',
            'Single lambda object'
          ],
          [
            'Testing',
            'Easy (create instances)',
            'Easy (inline lambdas)'
          ],
          [
            'Composition',
            'Difficult',
            'Easy (chain functions)'
          ]
        ]
      },
      {
        type: 'callout',
        variant: 'important',
        title: 'Modern Java Best Practice',
        text: 'Use lambdas for simple strategies. Use classes only when the strategy needs state or is complex. Lambda is the new Strategy pattern in modern Java.'
      }
    ]
  },
  {
    id: 'template-method-concept',
    title: 'Template Method Pattern: Concept',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Define Algorithm Structure, Defer Implementation'
      },
      {
        type: 'paragraph',
        text: 'The **Template Method Pattern** defines the skeleton of an algorithm in a base class and defers specific steps to subclasses. Subclasses override primitive operations without changing the algorithm\'s structure.'
      },
      {
        type: 'callout',
        variant: 'important',
        title: 'Core Intent',
        text: 'Define the skeleton of an algorithm in an operation, deferring some steps to subclasses. Template Method lets subclasses redefine certain steps of an algorithm without changing the algorithm\'s structure.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Class Structure'
      },
      {
        type: 'diagram',
        format: 'mermaid',
        content: 'classDiagram\n  class AbstractClass {\n    +templateMethod()\n    #primitiveOp1()*\n    #primitiveOp2()*\n    #primitiveOp3()*\n  }\n  class ConcreteClassA {\n    #primitiveOp1()\n    #primitiveOp2()\n    #primitiveOp3()\n  }\n  class ConcreteClassB {\n    #primitiveOp1()\n    #primitiveOp2()\n    #primitiveOp3()\n  }\n  AbstractClass <|-- ConcreteClassA\n  AbstractClass <|-- ConcreteClassB',
        label: 'Template Method pattern structure'
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
          '**Template Method**: Concrete method in base class that defines algorithm skeleton.',
          '**Primitive Operations**: Abstract methods subclasses must override.',
          '**Hook Methods**: Optional protected methods subclasses can override (do nothing by default).',
          '**Inversion of Control**: Base class calls methods; subclasses provide implementations.'
        ]
      },
      {
        type: 'callout',
        variant: 'tip',
        title: 'Hollywood Principle',
        text: '"Don\'t call us, we\'ll call you." Subclasses don\'t call the algorithm; the template method calls subclass methods at appropriate points. Control flow is inverted from typical imperative programming.'
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
          'Algorithm has common skeleton with varying implementation details',
          'Avoid code duplication across similar algorithms',
          'Control inversion: framework controls main flow',
          'Examples: data processing pipelines, document parsing, game loops, build systems'
        ]
      }
    ]
  },
  {
    id: 'template-method-implementation',
    title: 'Template Method: Data Processing Pipeline',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Implementing Data Processing with Template Method'
      },
      {
        type: 'paragraph',
        text: 'A data processing framework where the pipeline is fixed but implementations vary: CSV vs JSON vs XML.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 1: Abstract Template Class'
      },
      {
        type: 'code',
        language: 'java',
        code: 'import java.util.*;\n\npublic abstract class DataProcessor {\n    // Template method - defines algorithm skeleton\n    public final void processData(String filePath) {\n        System.out.println(\"\\n=== Processing \" + filePath + \" ===\");\n        \n        List<String> rawData = readFile(filePath);\n        List<Map<String, String>> parsedData = parseData(rawData);\n        List<Map<String, String>> validatedData = validateData(parsedData);\n        saveData(validatedData, filePath);\n        \n        System.out.println(\"Processing complete!\");\n    }\n\n    // Primitive operations (must be implemented by subclasses)\n    protected abstract List<String> readFile(String filePath);\n    protected abstract List<Map<String, String>> parseData(List<String> rawData);\n    protected abstract List<Map<String, String>> validateData(List<Map<String, String>> data);\n    protected abstract void saveData(List<Map<String, String>> data, String filePath);\n}',
        filename: 'DataProcessor.java'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 2: Concrete Implementations'
      },
      {
        type: 'code',
        language: 'java',
        code: 'import java.util.*;\n\npublic class CSVProcessor extends DataProcessor {\n    @Override\n    protected List<String> readFile(String filePath) {\n        System.out.println(\"[CSV] Reading file: \" + filePath);\n        return Arrays.asList(\"name,age,city\", \"Alice,30,NYC\", \"Bob,25,LA\");\n    }\n\n    @Override\n    protected List<Map<String, String>> parseData(List<String> rawData) {\n        System.out.println(\"[CSV] Parsing CSV data...\");\n        List<Map<String, String>> result = new ArrayList<>();\n        String[] headers = rawData.get(0).split(\",\");\n        \n        for (int i = 1; i < rawData.size(); i++) {\n            String[] values = rawData.get(i).split(\",\");\n            Map<String, String> row = new HashMap<>();\n            for (int j = 0; j < headers.length; j++) {\n                row.put(headers[j], values[j]);\n            }\n            result.add(row);\n        }\n        return result;\n    }\n\n    @Override\n    protected List<Map<String, String>> validateData(List<Map<String, String>> data) {\n        System.out.println(\"[CSV] Validating CSV data... \" + data.size() + \" rows\");\n        return data;  // Assume valid\n    }\n\n    @Override\n    protected void saveData(List<Map<String, String>> data, String filePath) {\n        System.out.println(\"[CSV] Saving processed data to CSV...\");\n    }\n}\n\npublic class JSONProcessor extends DataProcessor {\n    @Override\n    protected List<String> readFile(String filePath) {\n        System.out.println(\"[JSON] Reading file: \" + filePath);\n        return Arrays.asList(\n            \"[{\\\"name\\\":\\\"Alice\\\",\\\"age\\\":30,\\\"city\\\":\\\"NYC\\\"},\",\n            \"{\\\"name\\\":\\\"Bob\\\",\\\"age\\\":25,\\\"city\\\":\\\"LA\\\"}]\"\n        );\n    }\n\n    @Override\n    protected List<Map<String, String>> parseData(List<String> rawData) {\n        System.out.println(\"[JSON] Parsing JSON data...\");\n        List<Map<String, String>> result = new ArrayList<>();\n        // Simulate JSON parsing\n        Map<String, String> row1 = new HashMap<>();\n        row1.put(\"name\", \"Alice\");\n        row1.put(\"age\", \"30\");\n        result.add(row1);\n        return result;\n    }\n\n    @Override\n    protected List<Map<String, String>> validateData(List<Map<String, String>> data) {\n        System.out.println(\"[JSON] Validating JSON schema... \" + data.size() + \" objects\");\n        return data;\n    }\n\n    @Override\n    protected void saveData(List<Map<String, String>> data, String filePath) {\n        System.out.println(\"[JSON] Saving processed data to JSON...\");\n    }\n}',
        filename: 'DataProcessorImplementations.java'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 3: Client Code'
      },
      {
        type: 'code',
        language: 'java',
        code: 'public class DataProcessingDemo {\n    public static void main(String[] args) {\n        DataProcessor csvProcessor = new CSVProcessor();\n        csvProcessor.processData(\"data.csv\");\n\n        DataProcessor jsonProcessor = new JSONProcessor();\n        jsonProcessor.processData(\"data.json\");\n    }\n}',
        filename: 'DataProcessingDemo.java'
      }
    ]
  },
  {
    id: 'template-method-hooks',
    title: 'Template Method: Hook Methods',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Optional Steps with Hooks'
      },
      {
        type: 'paragraph',
        text: 'Hook methods are protected methods in the template that do nothing by default. Subclasses override them when needed, providing extension points without changing the algorithm structure.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Template with Hooks'
      },
      {
        type: 'code',
        language: 'java',
        code: 'public abstract class DocumentGenerator {\n    public final void generate(String filename) {\n        System.out.println(\"\\n=== Generating \" + filename + \" ===\");\n        \n        onBeforeGenerate();      // Hook (optional)\n        validateTemplate();      // Required (abstract)\n        renderContent();         // Required (abstract)\n        onAfterValidate();       // Hook (optional)\n        addFooter();             // Required (abstract)\n        onBeforeSave();          // Hook (optional)\n        save(filename);          // Required (abstract)\n    }\n\n    // Primitive operations (must override)\n    protected abstract void validateTemplate();\n    protected abstract void renderContent();\n    protected abstract void addFooter();\n    protected abstract void save(String filename);\n\n    // Hook methods (optional override, empty by default)\n    protected void onBeforeGenerate() {\n        // Empty by default - subclasses can override\n    }\n\n    protected void onAfterValidate() {\n        // Empty by default\n    }\n\n    protected void onBeforeSave() {\n        // Empty by default\n    }\n}',
        filename: 'DocumentGenerator.java'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Concrete Implementation Using Hooks'
      },
      {
        type: 'code',
        language: 'java',
        code: 'public class PDFGenerator extends DocumentGenerator {\n    @Override\n    protected void validateTemplate() {\n        System.out.println(\"Validating PDF template...\");\n    }\n\n    @Override\n    protected void renderContent() {\n        System.out.println(\"Rendering PDF content...\");\n    }\n\n    @Override\n    protected void addFooter() {\n        System.out.println(\"Adding PDF footer and page numbers...\");\n    }\n\n    @Override\n    protected void save(String filename) {\n        System.out.println(\"Saving as \" + filename + \".pdf\");\n    }\n\n    // Override hook for logging\n    @Override\n    protected void onBeforeGenerate() {\n        System.out.println(\"[LOG] Starting PDF generation...\");\n    }\n\n    // Override hook for compression\n    @Override\n    protected void onBeforeSave() {\n        System.out.println(\"[OPTIMIZATION] Compressing PDF before save...\");\n    }\n}\n\npublic class HTMLGenerator extends DocumentGenerator {\n    @Override\n    protected void validateTemplate() {\n        System.out.println(\"Validating HTML template...\");\n    }\n\n    @Override\n    protected void renderContent() {\n        System.out.println(\"Rendering HTML content...\");\n    }\n\n    @Override\n    protected void addFooter() {\n        System.out.println(\"Adding HTML footer and navigation...\");\n    }\n\n    @Override\n    protected void save(String filename) {\n        System.out.println(\"Saving as \" + filename + \".html\");\n    }\n\n    // Override hook for statistics\n    @Override\n    protected void onAfterValidate() {\n        System.out.println(\"[STATS] Document validation complete. Ready to render.\");\n    }\n}',
        filename: 'DocumentGeneratorImplementations.java'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Client Code'
      },
      {
        type: 'code',
        language: 'java',
        code: 'public class DocumentDemo {\n    public static void main(String[] args) {\n        DocumentGenerator pdfGen = new PDFGenerator();\n        pdfGen.generate(\"report\");\n\n        DocumentGenerator htmlGen = new HTMLGenerator();\n        htmlGen.generate(\"webpage\");\n    }\n}',
        filename: 'DocumentDemo.java'
      },
      {
        type: 'callout',
        variant: 'tip',
        title: 'Hook Method Benefits',
        text: 'Hooks provide extension points without requiring subclasses to override all primitive operations. Subclasses participate only in steps they care about. This reduces coupling between base and derived classes.'
      }
    ]
  },
  {
    id: 'chapter08-summary',
    title: 'Chapter 8: Summary',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Behavioral Patterns III: Key Takeaways'
      },
      {
        type: 'heading',
        level: 3,
        text: 'State Pattern'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Encapsulates state-specific behavior in separate classes',
          'Eliminates massive if-else chains checking internal state',
          'States know about other states and can transition',
          'Examples: vending machines, workflow engines, TCP connection states',
          'Key difference from Strategy: states transition internally; strategies chosen externally'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Strategy Pattern'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Encapsulates interchangeable algorithms independently',
          'Client injects strategy; strategies don\'t know about each other',
          'Modern Java: Use lambdas instead of verbose strategy classes',
          'Examples: sorting (Comparator), payment methods, compression algorithms',
          'Eliminates conditional logic for algorithm selection'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Template Method Pattern'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Defines algorithm skeleton in base class, defer steps to subclasses',
          'Implements Hollywood Principle: base class calls subclass methods',
          'Hook methods provide optional extension points',
          'Examples: data processing pipelines, document generation, game loops',
          'Reduces code duplication while maintaining control flow'
        ]
      },
      {
        type: 'divider'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Pattern Comparison Table'
      },
      {
        type: 'table',
        headers: [
          'Aspect',
          'State',
          'Strategy',
          'Template Method'
        ],
        rows: [
          [
            'Control Source',
            'Object (internal state)',
            'Client (external injection)',
            'Base class (inversion)'
          ],
          [
            'Behavior Variety',
            'Multiple states at runtime',
            'Multiple algorithms at runtime',
            'Fixed algorithm, varying steps'
          ],
          [
            'Structure',
            'State objects know transitions',
            'Independent strategy objects',
            'Inheritance hierarchy'
          ],
          [
            'Use When',
            'Behavior changes based on state',
            'Multiple ways to do something',
            'Algorithm has common skeleton'
          ],
          [
            'Example',
            'Vending machine state machine',
            'Payment methods (lambda-friendly)',
            'Data processing pipeline'
          ]
        ]
      },
      {
        type: 'callout',
        variant: 'important',
        title: 'Design Mastery',
        text: 'These three patterns represent different control inversion strategies: **State** inverts control of transitions (object changes itself), **Strategy** externalizes algorithm selection (client chooses), **Template Method** inverts control of implementation (base class calls subclass). Master these to handle any behavioral complexity.'
      }
    ]
  }
];
