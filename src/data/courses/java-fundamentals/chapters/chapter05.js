// Chapter 5 - Structured block data (no raw HTML)
export const sections = [
  {
    "id": "classes-objects",
    "title": "1. Classes and Objects",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "1. Classes and Objects"
      },
      {
        "type": "paragraph",
        "text": "A **class** is a blueprint or template. An **object** is an instance created from that blueprint."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Complete Class Example"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class Car {\n    // Fields (data)\n    String color;\n    String brand;\n    int speed;\n\n    // Constructor (initializes objects)\n    Car(String color, String brand, int speed) {\n        this.color = color;\n        this.brand = brand;\n        this.speed = speed;\n    }\n\n    // Methods (behavior)\n    void accelerate(int amount) {\n        speed += amount;\n        System.out.println(brand + \" accelerates to \" + speed + \" km/h\");\n    }\n\n    void brake(int amount) {\n        speed = Math.max(0, speed - amount);\n        System.out.println(brand + \" brakes to \" + speed + \" km/h\");\n    }\n\n    void displayInfo() {\n        System.out.println(brand + \" (\" + color + \") at \" + speed + \" km/h\");\n    }\n}\n\n// Creating objects with new\nCar car1 = new Car(\"red\", \"Ferrari\", 0);\nCar car2 = new Car(\"blue\", \"Tesla\", 0);\n\ncar1.accelerate(150);      // red Ferrari accelerates to 150 km/h\ncar1.displayInfo();        // Ferrari (red) at 150 km/h\ncar2.accelerate(100);      // blue Tesla accelerates to 100 km/h\ncar2.displayInfo();        // Tesla (blue) at 100 km/h"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Memory Layout: Stack vs Heap"
      },
      {
        "type": "diagram",
        "format": "mermaid",
        "content": "flowchart LR\n  subgraph Stack[\"Stack Memory\"]\n    direction TB\n    V1[\"car1 (reference)\"]\n    V2[\"car2 (reference)\"]\n  end\n  subgraph Heap[\"Heap Memory\"]\n    direction TB\n    O1[\"Car Object — car1<br/>color=red<br/>brand=Ferrari, speed=150\"]\n    O2[\"Car Object — car2<br/>color=blue<br/>brand=Tesla, speed=100\"]\n  end\n  V1 -->|\"reference\"| O1\n  V2 -->|\"reference\"| O2\n  style Stack fill:#dbeafe,stroke:#1d4ed8,color:#1e3a5f\n  style Heap fill:#dcfce7,stroke:#166534,color:#14532d\n  style O1 fill:#fef9c3,stroke:#854d0e\n  style O2 fill:#fce7f3,stroke:#9d174d"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Multiple Objects from Same Class"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Each object is independent\nCar c1 = new Car(\"red\", \"Ferrari\", 0);\nCar c2 = new Car(\"blue\", \"Tesla\", 0);\nCar c3 = new Car(\"red\", \"Ferrari\", 0);\n\nc1.accelerate(100);\nc2.accelerate(80);\nc3.accelerate(120);\n\nSystem.out.println(c1.speed);  // 100 — independent of c2, c3\nSystem.out.println(c2.speed);  // 80  — c2 has its own state\nSystem.out.println(c3.speed);  // 120 — c3 has its own state\n\n// c1 and c3 have SAME color and brand but are DIFFERENT objects\nSystem.out.println(c1 == c3);  // false — different objects on heap\nSystem.out.println(c1.color.equals(c3.color));  // true — same value"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Class = template defining structure and behavior",
          "Object = instance with its own state (field values)",
          "Variables store references; objects live on heap",
          "Multiple objects can have same field values but different identity"
        ]
      }
    ]
  },
  {
    "id": "fields",
    "title": "2. Fields: Instance vs Static",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "2. Fields: Instance vs Static"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Instance Fields: Each Object Has Its Own Copy"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class BankAccount {\n    String accountHolder;\n    double balance;  // instance field — each account has separate balance\n\n    BankAccount(String holder, double initialBalance) {\n        this.accountHolder = holder;\n        this.balance = initialBalance;\n    }\n\n    void withdraw(double amount) {\n        balance -= amount;\n    }\n}\n\n// Three objects, three separate balance values\nBankAccount acc1 = new BankAccount(\"Alice\", 1000);\nBankAccount acc2 = new BankAccount(\"Bob\", 500);\nBankAccount acc3 = new BankAccount(\"Charlie\", 2000);\n\nacc1.withdraw(100);\nacc2.withdraw(50);\nacc3.withdraw(200);\n\nSystem.out.println(acc1.balance);  // 900   — acc1's own balance\nSystem.out.println(acc2.balance);  // 450   — acc2's separate balance\nSystem.out.println(acc3.balance);  // 1800  — acc3's independent balance"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Static Fields: Shared Across All Instances"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class User {\n    String name;\n    static int totalUsers = 0;  // SHARED by all User objects\n\n    User(String name) {\n        this.name = name;\n        totalUsers++;  // increment shared counter\n    }\n}\n\nUser u1 = new User(\"Alice\");\nSystem.out.println(User.totalUsers);  // 1 — class variable, accessed via class name\n\nUser u2 = new User(\"Bob\");\nSystem.out.println(User.totalUsers);  // 2 — still same field, now incremented\n\nUser u3 = new User(\"Charlie\");\nSystem.out.println(User.totalUsers);  // 3\n\n// All objects see the SAME totalUsers\nSystem.out.println(u1.totalUsers);  // 3 — same shared value\nSystem.out.println(u2.totalUsers);  // 3 — same shared value\nSystem.out.println(u3.totalUsers);  // 3 — same shared value"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Instance vs Static Comparison"
      },
      {
        "type": "diagram",
        "format": "mermaid",
        "content": "flowchart LR\n  subgraph Heap[\"Heap — Instance Objects\"]\n    direction TB\n    U1[\"u1: name = Alice\"]\n    U2[\"u2: name = Bob\"]\n    U3[\"u3: name = Charlie\"]\n  end\n  subgraph ClassArea[\"Class Area — Static (Shared)\"]\n    TOTAL[\"User.totalUsers = 3<br/>shared by ALL instances\"]\n  end\n  U1 -->|\"references static\"| TOTAL\n  U2 -->|\"references static\"| TOTAL\n  U3 -->|\"references static\"| TOTAL\n  style Heap fill:#dbeafe,stroke:#1d4ed8,color:#1e3a5f\n  style ClassArea fill:#dcfce7,stroke:#166534,color:#14532d\n  style TOTAL fill:#fef9c3,stroke:#854d0e"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Instance Initializer Blocks"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class Widget {\n    int id;\n    List<String> logs;\n\n    // Instance initializer block — runs BEFORE constructor\n    {\n        logs = new ArrayList<>();\n        logs.add(\"Widget initialized\");\n    }\n\n    Widget(int id) {\n        this.id = id;\n        logs.add(\"Constructor called for id=\" + id);\n    }\n}\n\nWidget w = new Widget(1);\n// logs contains:\n// [\"Widget initialized\", \"Constructor called for id=1\"]"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Static Initializer Blocks"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class Constants {\n    static final int[] PRIMES;\n\n    // Static initializer — runs ONCE when class loads\n    static {\n        PRIMES = new int[]{2, 3, 5, 7, 11, 13};\n        System.out.println(\"Constants class loaded, primes initialized\");\n    }\n}\n\n// When Constants class first referenced:\nConstants c;  // prints: \"Constants class loaded...\""
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Instance fields: separate value per object",
          "Static fields: one shared value for entire class",
          "Instance initializers run before constructor for each object",
          "Static initializers run once when class loads"
        ]
      }
    ]
  },
  {
    "id": "constructors",
    "title": "3. Constructors",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "3. Constructors"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Default Constructor"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class Point {\n    int x;\n    int y;\n    // If no constructor defined, Java generates default constructor\n    // Point() { }  — auto-generated, does nothing\n}\n\nPoint p = new Point();  // uses default constructor\nSystem.out.println(p.x);  // 0 (fields auto-initialized to default values)"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Parameterized Constructor"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class Point {\n    int x;\n    int y;\n\n    // Define custom constructor — overrides default\n    Point(int x, int y) {\n        this.x = x;\n        this.y = y;\n    }\n}\n\nPoint p = new Point(10, 20);\nSystem.out.println(p.x + \", \" + p.y);  // 10, 20"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Constructor Overloading"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class Rectangle {\n    int width;\n    int height;\n\n    Rectangle() {\n        this.width = 1;\n        this.height = 1;\n    }\n\n    Rectangle(int side) {\n        this.width = side;\n        this.height = side;\n    }\n\n    Rectangle(int width, int height) {\n        this.width = width;\n        this.height = height;\n    }\n}\n\nRectangle r1 = new Rectangle();           // 1x1\nRectangle r2 = new Rectangle(5);          // 5x5\nRectangle r3 = new Rectangle(10, 20);     // 10x20"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Constructor Chaining with this(...)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class Rectangle {\n    int width;\n    int height;\n\n    // All constructors eventually call the full constructor\n    Rectangle() {\n        this(1, 1);  // chains to Rectangle(int, int)\n    }\n\n    Rectangle(int side) {\n        this(side, side);  // chains to Rectangle(int, int)\n    }\n\n    Rectangle(int width, int height) {\n        // Only this constructor does actual work\n        this.width = width;\n        this.height = height;\n    }\n\n    int area() { return width * height; }\n}\n\nSystem.out.println(new Rectangle().area());           // 1\nSystem.out.println(new Rectangle(5).area());          // 25\nSystem.out.println(new Rectangle(4, 6).area());       // 24\n\n// WRONG — this() is not first statement, will not compile\n// Rectangle(int x) {\n//     System.out.println(x);\n//     this(x, x);  // ERROR — this() must be FIRST statement\n// }"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "The this Keyword for Disambiguation"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class Person {\n    String name;\n    int age;\n\n    Person(String name, int age) {\n        this.name = name;  // this.name = parameter name\n        this.age = age;    // this.age = parameter age\n    }\n\n    // WRONG — confused which 'name' and 'age'\n    // Person(String name, int age) {\n    //     name = name;  // WRONG! assigns parameter to itself\n    //     age = age;    // WRONG! assigns parameter to itself\n    // }\n}\n\nPerson p = new Person(\"Alice\", 30);\nSystem.out.println(p.name);  // \"Alice\" — correctly assigned"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Default constructor auto-generated if none defined",
          "Can define multiple constructors (overloading) with different parameters",
          "Constructor chaining with `this(...)` reduces code duplication",
          "`this(...)` must be first statement in constructor"
        ]
      }
    ]
  },
  {
    "id": "this-keyword",
    "title": "4. The this Keyword",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "4. The this Keyword"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Accessing Fields and Methods"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class Circle {\n    double radius;\n\n    Circle(double radius) {\n        this.radius = radius;  // this.radius = field, radius = parameter\n    }\n\n    double area() {\n        return Math.PI * this.radius * this.radius;\n    }\n\n    void printInfo() {\n        this.displayArea();  // this.methodName() to call another method\n    }\n\n    void displayArea() {\n        System.out.println(\"Area: \" + this.area());\n    }\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Returning this for Method Chaining (Builder Pattern)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class StringBuilder_Example {\n    private String name;\n    private int age;\n    private String email;\n\n    StringBuilder_Example name(String n) {\n        this.name = n;\n        return this;  // return this to allow chaining\n    }\n\n    StringBuilder_Example age(int a) {\n        this.age = a;\n        return this;  // return this to allow chaining\n    }\n\n    StringBuilder_Example email(String e) {\n        this.email = e;\n        return this;  // return this to allow chaining\n    }\n\n    String build() {\n        return name + \" (\" + age + \") \" + email;\n    }\n}\n\n// Method chaining — each method returns 'this' for next call\nString result = new StringBuilder_Example()\n    .name(\"Alice\")\n    .age(30)\n    .email(\"alice@example.com\")\n    .build();\n\nSystem.out.println(result);  // Alice (30) alice@example.com"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Practical Example: Fluent Configuration"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class DatabaseConnection {\n    private String host = \"localhost\";\n    private int port = 5432;\n    private String database = \"mydb\";\n    private boolean ssl = false;\n\n    DatabaseConnection host(String h) {\n        this.host = h;\n        return this;\n    }\n\n    DatabaseConnection port(int p) {\n        this.port = p;\n        return this;\n    }\n\n    DatabaseConnection database(String db) {\n        this.database = db;\n        return this;\n    }\n\n    DatabaseConnection ssl(boolean s) {\n        this.ssl = s;\n        return this;\n    }\n\n    void connect() {\n        System.out.println(\"Connecting to \" + host + \":\" + port + \"/\" + database + \" (SSL=\" + ssl + \")\");\n    }\n}\n\n// Fluent interface — reads naturally\nnew DatabaseConnection()\n    .host(\"prod.example.com\")\n    .port(5432)\n    .database(\"analytics\")\n    .ssl(true)\n    .connect();\n// Output: Connecting to prod.example.com:5432/analytics (SSL=true)"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "`this.field` — access current object's field",
          "`this.method()` — call current object's method",
          "`return this` — enables method chaining for fluent interfaces",
          "Method chaining improves readability for complex object configuration"
        ]
      }
    ]
  },
  {
    "id": "access-modifiers",
    "title": "5. Access Modifiers",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "5. Access Modifiers"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Four Access Levels"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Private: Same Class Only"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class BankAccount {\n    private double balance;  // only BankAccount can access\n    private String pin;      // private data\n\n    public double getBalance() {\n        return balance;  // OK — same class\n    }\n\n    public void deposit(double amount) {\n        balance += amount;  // OK — same class\n    }\n}\n\nBankAccount acc = new BankAccount();\nacc.getBalance();   // OK — public method\nacc.balance;        // COMPILE ERROR — private field"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Package-Private (Default): Same Package Only"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// package com.example.utils\n\nclass Logger {\n    void log(String msg) {  // no modifier = package-private\n        System.out.println(msg);\n    }\n}\n\n// Same package — OK to access\nnew Logger().log(\"Message\");  // OK\n\n// Different package — COMPILE ERROR\n// com.example.other.SomeClass cannot access Logger.log()"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Protected: Same Package + Subclasses"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// package animals\n\nclass Animal {\n    protected void makeSound() {  // accessible in subclasses\n        System.out.println(\"Some sound\");\n    }\n}\n\n// Same package — OK\nclass Zoo {\n    void visitAnimal(Animal a) {\n        a.makeSound();  // OK — same package\n    }\n}\n\n// Different package, but extends Animal — OK\npackage visitors;\nclass Dog extends Animal {\n    @Override\n    protected void makeSound() {\n        System.out.println(\"Woof!\");  // OK — subclass can override\n    }\n}\n\n// Different package, not subclass — COMPILE ERROR\nclass RandomClass {\n    void visit(Animal a) {\n        a.makeSound();  // COMPILE ERROR — not subclass, different package\n    }\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Public: Everywhere"
      },
      {
        "type": "code",
        "language": "java",
        "code": "public class Calculator {\n    public int add(int a, int b) {\n        return a + b;\n    }\n}\n\n// Any class, any package\nCalculator c = new Calculator();\nint result = c.add(5, 3);  // OK — public class and method"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Visibility Diagram"
      },
      {
        "type": "diagram",
        "format": "mermaid",
        "content": "graph TD\n  subgraph com.shop[\"📦 com.shop\"]\n    PROD[\"class Product<br/>private sku — only Product<br/>default stockLevel — Warehouse OK<br/>protected reorder() — Warehouse OK<br/>public getPrice() — everyone\"]\n    WH[\"class Warehouse<br/>accesses: default, protected, public\"]\n  end\n  subgraph delivery[\"📦 com.shop.delivery\"]\n    DD[\"class DeliveryDriver extends Product<br/>accesses: protected, public\"]\n    DH[\"class DeliveryHelper<br/>accesses: public only\"]\n  end\n  subgraph customer[\"📦 com.customer\"]\n    CUST[\"class Customer<br/>accesses: public only\"]\n  end\n  style com.shop fill:#dbeafe,stroke:#1d4ed8,color:#1e3a5f\n  style delivery fill:#dcfce7,stroke:#166534,color:#14532d\n  style customer fill:#fce7f3,stroke:#9d174d,color:#4a044e"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "**private:** tightest encapsulation, same class only",
          "**package-private (default):** accessible within package, good for internal APIs",
          "**protected:** allows subclasses to inherit and override, still restricted outside package",
          "**public:** widest access, use carefully for stable APIs"
        ]
      }
    ]
  },
  {
    "id": "encapsulation",
    "title": "6. Encapsulation",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "6. Encapsulation"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Private Fields with Public Getters and Setters"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class Student {\n    private String name;\n    private int age;\n    private double gpa;\n\n    // Getters — read access\n    public String getName() {\n        return name;\n    }\n\n    public int getAge() {\n        return age;\n    }\n\n    public double getGpa() {\n        return gpa;\n    }\n\n    // Setters — write access with validation\n    public void setName(String name) {\n        if (name == null || name.trim().isEmpty()) {\n            throw new IllegalArgumentException(\"Name cannot be empty\");\n        }\n        this.name = name;\n    }\n\n    public void setAge(int age) {\n        if (age < 0 || age > 120) {\n            throw new IllegalArgumentException(\"Age must be 0-120\");\n        }\n        this.age = age;\n    }\n\n    public void setGpa(double gpa) {\n        if (gpa < 0 || gpa > 4.0) {\n            throw new IllegalArgumentException(\"GPA must be 0.0-4.0\");\n        }\n        this.gpa = gpa;\n    }\n}\n\n// Using encapsulation\nStudent s = new Student();\ns.setName(\"Alice\");\ns.setAge(20);\ns.setGpa(3.85);\n\nSystem.out.println(s.getName());  // Alice\nSystem.out.println(s.getGpa());   // 3.85\n\ns.setGpa(5.0);  // IllegalArgumentException — enforces constraint"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Bank Account with Validation"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class BankAccount {\n    private String accountHolder;\n    private double balance;\n\n    public BankAccount(String holder, double initialBalance) {\n        this.accountHolder = holder;\n        this.balance = initialBalance;\n    }\n\n    public double getBalance() {\n        return balance;\n    }\n\n    public void deposit(double amount) {\n        if (amount <= 0) {\n            throw new IllegalArgumentException(\"Deposit must be positive\");\n        }\n        balance += amount;\n        System.out.println(\"Deposited \" + amount + \". New balance: \" + balance);\n    }\n\n    public void withdraw(double amount) {\n        if (amount <= 0) {\n            throw new IllegalArgumentException(\"Withdrawal must be positive\");\n        }\n        if (amount > balance) {\n            throw new IllegalArgumentException(\"Insufficient funds. Balance: \" + balance);\n        }\n        balance -= amount;\n        System.out.println(\"Withdrawn \" + amount + \". New balance: \" + balance);\n    }\n\n    public void transfer(BankAccount recipient, double amount) {\n        this.withdraw(amount);\n        recipient.deposit(amount);\n        System.out.println(\"Transferred \" + amount + \" to \" + recipient.accountHolder);\n    }\n}\n\nBankAccount alice = new BankAccount(\"Alice\", 1000);\nBankAccount bob = new BankAccount(\"Bob\", 500);\n\nalice.withdraw(100);        // Withdrawn 100. New balance: 900\nalice.transfer(bob, 200);   // Withdrawn 200. New balance: 700\n                            // Deposited 200. New balance: 700\n                            // Transferred 200 to Bob\nbob.withdraw(1000);         // IllegalArgumentException — insufficient funds"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Benefits of Encapsulation"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// WRONG — no encapsulation, direct field access\nclass BadUser {\n    public String email;\n    public int age;\n}\nBadUser u = new BadUser();\nu.email = \"\";               // invalid!\nu.age = -5;                 // invalid!\nu.age = 200;                // invalid!\n\n// CORRECT — encapsulation with validation\nclass GoodUser {\n    private String email;\n    private int age;\n\n    public void setEmail(String e) {\n        if (!e.contains(\"@\")) throw new IllegalArgumentException(\"Invalid email\");\n        this.email = e;\n    }\n\n    public void setAge(int a) {\n        if (a < 18) throw new IllegalArgumentException(\"Must be 18+\");\n        this.age = a;\n    }\n}\nGoodUser u = new GoodUser();\nu.setEmail(\"\");             // IllegalArgumentException — caught!\nu.setAge(-5);               // IllegalArgumentException — caught!"
      },
      {
        "type": "paragraph",
        "text": "Records (Java 16+) provide encapsulation automatically with getters, equals, hashCode, and toString."
      },
      {
        "type": "code",
        "language": "java",
        "code": "record Point(int x, int y) { }  // automatic getters x() and y()\nPoint p = new Point(10, 20);\nint px = p.x();  // getter is x(), not getX()"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Encapsulation = hide implementation, expose controlled interface",
          "Private fields prevent direct invalid access",
          "Setters provide validation and business logic enforcement",
          "Internal changes don't affect external code using getters/setters"
        ]
      }
    ]
  },
  {
    "id": "inheritance",
    "title": "7. Inheritance",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "7. Inheritance"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "extends Keyword: Single Inheritance"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class Animal {\n    String name;\n\n    void eat() {\n        System.out.println(name + \" eats\");\n    }\n\n    void sleep() {\n        System.out.println(name + \" sleeps\");\n    }\n}\n\nclass Dog extends Animal {\n    // Inherits: name, eat(), sleep()\n\n    void bark() {\n        System.out.println(name + \" barks\");\n    }\n}\n\nclass Cat extends Animal {\n    // Inherits: name, eat(), sleep()\n\n    void meow() {\n        System.out.println(name + \" meows\");\n    }\n}\n\nDog dog = new Dog();\ndog.name = \"Rex\";\ndog.eat();    // inherited method — Rex eats\ndog.bark();   // own method — Rex barks\n\nCat cat = new Cat();\ncat.name = \"Whiskers\";\ncat.eat();    // inherited method — Whiskers eats\ncat.meow();   // own method — Whiskers meows"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Inheritance Hierarchy"
      },
      {
        "type": "diagram",
        "format": "mermaid",
        "content": "graph TD\n  Animal[\"🐾 Animal<br/>eat() · sleep()\"] --> Dog[\"🐕 Dog<br/>+bark()\"]\n  Animal --> Cat[\"🐈 Cat<br/>+meow()\"]\n  Dog --> GR[\"GoldenRetriever<br/>+fetch()\"]\n  Dog --> PD[\"Poodle\"]\n  Cat --> PS[\"Persian\"]\n  style Animal fill:#dbeafe,stroke:#1d4ed8\n  style Dog fill:#dcfce7,stroke:#166534\n  style Cat fill:#fce7f3,stroke:#9d174d\n  style GR fill:#f3e8ff,stroke:#6d28d9\n  style PD fill:#f3e8ff,stroke:#6d28d9\n  style PS fill:#fef9c3,stroke:#854d0e"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Multi-Level Inheritance"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class Vehicle {\n    String brand;\n    int speed;\n\n    void drive() {\n        System.out.println(brand + \" drives at \" + speed);\n    }\n}\n\nclass Car extends Vehicle {\n    int doors;\n\n    void honk() {\n        System.out.println(brand + \" honks\");\n    }\n}\n\nclass ElectricCar extends Car {\n    int batteryPercent;\n\n    void chargeBattery() {\n        batteryPercent = 100;\n        System.out.println(brand + \" fully charged\");\n    }\n}\n\nElectricCar tesla = new ElectricCar();\ntesla.brand = \"Tesla\";\ntesla.speed = 120;\ntesla.doors = 4;\ntesla.batteryPercent = 75;\n\ntesla.drive();          // inherited from Vehicle — Tesla drives at 120\ntesla.honk();           // inherited from Car — Tesla honks\ntesla.chargeBattery();  // own method — Tesla fully charged"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "IS-A Relationship"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Inheritance creates IS-A relationship\nDog dog = new Dog();\n\ndog instanceof Dog    // true — dog IS-A Dog\ndog instanceof Animal // true — dog IS-A Animal (through inheritance)\ndog instanceof Object // true — dog IS-A Object (all classes extend Object)"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Adding and Overriding in Subclass"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class Shape {\n    double width;\n    double height;\n\n    double area() {\n        return 0;\n    }\n}\n\nclass Rectangle extends Shape {\n    // Inherits: width, height, area()\n\n    // Override inherited method\n    @Override\n    double area() {\n        return width * height;\n    }\n\n    // Add new method\n    double perimeter() {\n        return 2 * (width + height);\n    }\n}\n\nclass Triangle extends Shape {\n    // Inherits: width, height, area()\n\n    // Override with different implementation\n    @Override\n    double area() {\n        return (width * height) / 2;\n    }\n\n    // Add new method\n    boolean isRightTriangle() {\n        // Pythagorean theorem check\n        return true;  // simplified\n    }\n}\n\nRectangle rect = new Rectangle();\nrect.width = 10;\nrect.height = 5;\nSystem.out.println(rect.area());       // 50 — Rectangle's implementation\nSystem.out.println(rect.perimeter());  // 30 — Rectangle's new method\n\nTriangle tri = new Triangle();\ntri.width = 10;\ntri.height = 5;\nSystem.out.println(tri.area());        // 25 — Triangle's implementation"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "`extends` keyword creates parent-child relationship",
          "Java supports single inheritance only (unlike C++)",
          "Subclass inherits non-private fields and methods",
          "Subclass can add new fields/methods and override inherited ones"
        ]
      }
    ]
  },
  {
    "id": "super-keyword",
    "title": "8. The super Keyword",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "8. The super Keyword"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Calling Parent Constructor with super(...)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class Vehicle {\n    String brand;\n    int speed;\n\n    Vehicle(String brand, int speed) {\n        this.brand = brand;\n        this.speed = speed;\n    }\n}\n\nclass Car extends Vehicle {\n    int doors;\n\n    Car(String brand, int speed, int doors) {\n        super(brand, speed);  // MUST be first statement\n        this.doors = doors;\n    }\n}\n\nCar car = new Car(\"Toyota\", 100, 4);\nSystem.out.println(car.brand);   // Toyota\nSystem.out.println(car.speed);   // 100\nSystem.out.println(car.doors);   // 4\n\n// WRONG — super() not first statement\n// class Car extends Vehicle {\n//     Car(String brand, int speed, int doors) {\n//         this.doors = doors;  // ERROR — super() must be first!\n//         super(brand, speed);\n//     }\n// }"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Calling Parent Method with super.method()"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class Animal {\n    String name;\n\n    void describe() {\n        System.out.println(\"Animal: \" + name);\n    }\n}\n\nclass Dog extends Animal {\n    String breed;\n\n    @Override\n    void describe() {\n        super.describe();  // call parent's version first\n        System.out.println(\"Dog breed: \" + breed);\n    }\n}\n\nDog dog = new Dog();\ndog.name = \"Rex\";\ndog.breed = \"Labrador\";\ndog.describe();\n// Output:\n// Animal: Rex\n// Dog breed: Labrador"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Accessing Parent Field with super.field"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class Parent {\n    int value = 10;\n}\n\nclass Child extends Parent {\n    int value = 20;  // shadows parent's value\n\n    void display() {\n        System.out.println(value);        // 20 — child's value\n        System.out.println(super.value);  // 10 — parent's value\n    }\n}\n\nChild c = new Child();\nc.display();\n// Output:\n// 20\n// 10"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Complete super Example"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class Employee {\n    String name;\n    double salary;\n\n    Employee(String name, double salary) {\n        this.name = name;\n        this.salary = salary;\n    }\n\n    void work() {\n        System.out.println(name + \" works\");\n    }\n\n    double getSalary() {\n        return salary;\n    }\n}\n\nclass Manager extends Employee {\n    int teamSize;\n    double bonus;\n\n    Manager(String name, double salary, int teamSize) {\n        super(name, salary);  // initialize parent fields\n        this.teamSize = teamSize;\n        this.bonus = 0.1 * salary;  // 10% bonus\n    }\n\n    @Override\n    void work() {\n        super.work();  // parent's version\n        System.out.println(name + \" manages \" + teamSize + \" people\");\n    }\n\n    @Override\n    double getSalary() {\n        return super.getSalary() + bonus;  // salary + bonus\n    }\n}\n\nManager mgr = new Manager(\"Alice\", 100000, 5);\nmgr.work();\n// Output:\n// Alice works\n// Alice manages 5 people\n\nSystem.out.println(mgr.getSalary());  // 110000.0"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "`super(...)` calls parent constructor, must be first statement",
          "`super.method()` calls parent's version of method",
          "`super.field` accesses parent's field if shadowed by child",
          "Use `super` to reuse parent logic instead of duplicating code"
        ]
      }
    ]
  },
  {
    "id": "method-overriding",
    "title": "9. Method Overriding",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "9. Method Overriding"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Same Signature, Different Implementation"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class Shape {\n    double width;\n    double height;\n\n    double area() {\n        return 0;\n    }\n}\n\nclass Rectangle extends Shape {\n    @Override  // recommended annotation\n    double area() {\n        return width * height;\n    }\n}\n\nclass Triangle extends Shape {\n    @Override\n    double area() {\n        return (width * height) / 2;\n    }\n}\n\nclass Circle extends Shape {\n    @Override\n    double area() {\n        return Math.PI * width * width;  // width is radius\n    }\n}\n\nRectangle rect = new Rectangle();\nrect.width = 10; rect.height = 5;\nSystem.out.println(rect.area());  // 50\n\nTriangle tri = new Triangle();\ntri.width = 10; tri.height = 5;\nSystem.out.println(tri.area());   // 25\n\nCircle circ = new Circle();\ncirc.width = 5;\nSystem.out.println(circ.area());  // 78.53981..."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "@Override Annotation Catches Typos"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class Parent {\n    void doSomething() {\n        System.out.println(\"Parent does something\");\n    }\n}\n\n// WRONG — typo not caught, creates new method instead of overriding\nclass ChildWrong extends Parent {\n    void doSomthing() {  // typo: \"Somthing\" instead of \"Something\"\n        System.out.println(\"Child does something\");\n    }\n    // Now Child has TWO methods: doSomething() and doSomthing()\n}\n\n// CORRECT — @Override annotation catches typo\nclass ChildCorrect extends Parent {\n    @Override\n    void doSomthing() {  // compile error — Parent has no doSomthing()\n        System.out.println(\"Child does something\");\n    }\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Visibility and Exception Rules"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class Parent {\n    protected void method() { }\n}\n\nclass Child extends Parent {\n    // WRONG — cannot reduce visibility\n    // private void method() { }  // compile error\n\n    // CORRECT — same visibility or more visible\n    @Override\n    public void method() { }  // public is more visible than protected\n}\n\n// Exception throwing rules\nclass Reader {\n    void read() throws IOException { }  // throws checked exception\n}\n\nclass BufferedReader extends Reader {\n    @Override\n    void read() throws IOException { }  // same exception — OK\n\n    // WRONG — cannot throw broader exception\n    // void read() throws Exception { }  // compile error\n\n    // OK — can throw narrower exception or none\n    // void read() { }  // OK\n}\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Covariant Return Types"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class Shape {\n    Shape clone() {\n        return new Shape();\n    }\n}\n\nclass Circle extends Shape {\n    @Override\n    Circle clone() {  // return type is subtype (covariant)\n        return new Circle();\n    }\n}\n\n// Caller code is more specific\nCircle c = new Circle();\nCircle c2 = c.clone();  // no cast needed"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Overriding vs Overloading (Common Confusion)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class Parent {\n    void method(int x) {\n        System.out.println(\"Parent: int\");\n    }\n}\n\nclass Child extends Parent {\n    // OVERRIDING — same signature\n    @Override\n    void method(int x) {\n        System.out.println(\"Child: int\");\n    }\n\n    // OVERLOADING — different signature (different parameter type)\n    void method(String x) {\n        System.out.println(\"Child: String\");\n    }\n\n    // OVERLOADING — different signature (different number of parameters)\n    void method(int x, int y) {\n        System.out.println(\"Child: int, int\");\n    }\n}\n\nChild c = new Child();\nc.method(5);      // Child: int (overriding)\nc.method(\"hi\");   // Child: String (overloading)\nc.method(5, 10);  // Child: int, int (overloading)"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Method overriding: subclass method has same signature as parent",
          "`@Override` annotation recommended to catch typos",
          "Cannot reduce visibility; cannot throw broader exceptions",
          "Covariant return types allowed: return subtype of parent's return type",
          "Overloading ≠ overriding: overloading changes parameters, overriding keeps signature"
        ]
      }
    ]
  },
  {
    "id": "polymorphism",
    "title": "10. Polymorphism",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "10. Polymorphism"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Compile-Time (Static) Polymorphism: Method Overloading"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class Printer {\n    void print(int x) {\n        System.out.println(\"Printing int: \" + x);\n    }\n\n    void print(String x) {\n        System.out.println(\"Printing String: \" + x);\n    }\n\n    void print(double x) {\n        System.out.println(\"Printing double: \" + x);\n    }\n\n    void print(String x, int count) {\n        for (int i = 0; i < count; i++) {\n            System.out.println(x);\n        }\n    }\n}\n\nPrinter p = new Printer();\np.print(10);           // Printing int: 10\np.print(\"Hello\");      // Printing String: Hello\np.print(3.14);         // Printing double: 3.14\np.print(\"Hi\", 3);      // Printing Hi (3 times)"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Runtime (Dynamic) Polymorphism: Method Overriding"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class Animal {\n    void makeSound() {\n        System.out.println(\"Generic animal sound\");\n    }\n}\n\nclass Dog extends Animal {\n    @Override\n    void makeSound() {\n        System.out.println(\"Woof!\");\n    }\n}\n\nclass Cat extends Animal {\n    @Override\n    void makeSound() {\n        System.out.println(\"Meow!\");\n    }\n}\n\nclass Bird extends Animal {\n    @Override\n    void makeSound() {\n        System.out.println(\"Tweet!\");\n    }\n}\n\n// Polymorphism: same method, different behavior based on actual object\nAnimal animal1 = new Dog();\nAnimal animal2 = new Cat();\nAnimal animal3 = new Bird();\n\nanimal1.makeSound();  // Woof! (actual type is Dog)\nanimal2.makeSound();  // Meow! (actual type is Cat)\nanimal3.makeSound();  // Tweet! (actual type is Bird)\n\n// Key: compiler sees Animal type, JVM sees actual type at runtime"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Polymorphic Collection"
      },
      {
        "type": "code",
        "language": "java",
        "code": "List<Animal> animals = new ArrayList<>();\nanimals.add(new Dog());\nanimals.add(new Cat());\nanimals.add(new Bird());\nanimals.add(new Dog());\n\n// Loop calls each animal's own makeSound() — polymorphism!\nfor (Animal animal : animals) {\n    animal.makeSound();\n}\n// Output:\n// Woof!\n// Meow!\n// Tweet!\n// Woof!"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Virtual Method Dispatch"
      },
      {
        "type": "diagram",
        "format": "mermaid",
        "content": "sequenceDiagram\n  participant Code\n  participant Compiler\n  participant JVM\n  participant Dog as Dog Object\n\n  Code->>Compiler: Animal ref = new Dog()\n  Code->>Compiler: ref.makeSound()\n  Compiler-->>Code: ✓ Animal has makeSound(), allowed\n\n  note over JVM,Dog: At Runtime\n  JVM->>JVM: ref points to Dog object on heap\n  JVM->>JVM: Actual type = Dog\n  JVM->>Dog: Dog.makeSound()\n  Dog-->>Code: Woof! — polymorphism!"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Practical Example: Payment Processing"
      },
      {
        "type": "code",
        "language": "java",
        "code": "abstract class PaymentMethod {\n    abstract void pay(double amount);\n}\n\nclass CreditCard extends PaymentMethod {\n    @Override\n    void pay(double amount) {\n        System.out.println(\"Charged \" + amount + \" to credit card\");\n    }\n}\n\nclass PayPal extends PaymentMethod {\n    @Override\n    void pay(double amount) {\n        System.out.println(\"Sent \" + amount + \" via PayPal\");\n    }\n}\n\nclass BitCoin extends PaymentMethod {\n    @Override\n    void pay(double amount) {\n        System.out.println(\"Transferred \" + amount + \" BTC\");\n    }\n}\n\nclass ShoppingCart {\n    double total = 99.99;\n\n    void checkout(PaymentMethod method) {\n        method.pay(total);  // polymorphism — method's type depends on actual argument\n    }\n}\n\nShoppingCart cart = new ShoppingCart();\ncart.checkout(new CreditCard());  // Charged 99.99 to credit card\ncart.checkout(new PayPal());       // Sent 99.99 via PayPal\ncart.checkout(new BitCoin());      // Transferred 99.99 BTC\n\n// Same method, different implementations based on actual type"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Static polymorphism: method overloading, resolved at compile time",
          "Dynamic polymorphism: method overriding, resolved at runtime",
          "JVM uses virtual dispatch: calls method of actual object type, not reference type",
          "Polymorphism enables flexible, extensible code without knowing concrete types"
        ]
      }
    ]
  },
  {
    "id": "object-casting",
    "title": "11. Object Casting",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "11. Object Casting"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Upcasting (Implicit, Always Safe)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class Animal { }\nclass Dog extends Animal { }\n\n// Upcasting: specific type → general type\nDog dog = new Dog();\nAnimal animal = dog;  // implicit upcasting, no cast needed\n\n// But you lose Dog-specific methods\nAnimal a = new Dog();\n// a.bark();  // COMPILE ERROR — Animal doesn't have bark()"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Downcasting (Explicit, May Throw ClassCastException)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class Animal { }\nclass Dog extends Animal { }\nclass Cat extends Animal { }\n\n// Downcasting: general type → specific type\nAnimal animal = new Dog();\nDog dog = (Dog) animal;  // explicit cast\ndog.bark();              // now we can call Dog-specific methods\n\n// WRONG — runtime exception\nAnimal catAnimal = new Cat();\nDog wrongDog = (Dog) catAnimal;  // compiles fine!\nwrongDog.bark();                 // ClassCastException at runtime\n                                 // Cat is not a Dog"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "instanceof Check Before Downcasting"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Safe downcasting with instanceof check (Java 14 and earlier)\nAnimal animal = new Dog();\nif (animal instanceof Dog) {\n    Dog dog = (Dog) animal;\n    dog.bark();\n}\n\n// Pattern variable (Java 16+) — cleaner\nAnimal animal = new Dog();\nif (animal instanceof Dog dog) {\n    dog.bark();  // dog is already Dog type, no need to cast\n}\n\n// Old way (still works but verbose)\nif (animal instanceof Dog) {\n    Dog dog = (Dog) animal;  // redundant, already checked\n    dog.bark();\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Checking Multiple Types"
      },
      {
        "type": "code",
        "language": "java",
        "code": "void handleAnimal(Animal animal) {\n    if (animal instanceof Dog dog) {\n        dog.bark();\n    } else if (animal instanceof Cat cat) {\n        cat.meow();\n    } else if (animal instanceof Bird bird) {\n        bird.chirp();\n    } else {\n        System.out.println(\"Unknown animal\");\n    }\n}\n\nhandleAnimal(new Dog());   // calls dog.bark()\nhandleAnimal(new Cat());   // calls cat.meow()\nhandleAnimal(new Bird());  // calls bird.chirp()"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "ClassCastException Example"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class Shape { }\nclass Circle extends Shape { }\nclass Rectangle extends Shape { }\n\n// WRONG — trying to cast to wrong type\nShape shape = new Circle();\nRectangle rect = (Rectangle) shape;  // ClassCastException!\n// Circle is not Rectangle\n\n// CORRECT — with instanceof guard\nShape shape = new Circle();\nif (shape instanceof Rectangle) {\n    Rectangle rect = (Rectangle) shape;\n} else {\n    System.out.println(\"Shape is not a Rectangle\");  // this executes\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Casting with Collections"
      },
      {
        "type": "code",
        "language": "java",
        "code": "List animals = new ArrayList();\nanimals.add(new Dog());\nanimals.add(new Cat());\nanimals.add(new Dog());\n\n// Old way (without generics, type erasure)\nfor (Object obj : animals) {\n    if (obj instanceof Dog dog) {\n        dog.bark();\n    } else if (obj instanceof Cat cat) {\n        cat.meow();\n    }\n}\n\n// Better way — use generics to avoid casting\nList<Animal> typedAnimals = new ArrayList<>();\ntypedAnimals.add(new Dog());\ntypedAnimals.add(new Cat());\n\nfor (Animal animal : typedAnimals) {\n    if (animal instanceof Dog dog) {\n        dog.bark();\n    }\n}"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Upcasting: subtype to supertype, implicit, always safe",
          "Downcasting: supertype to subtype, explicit, must check with `instanceof`",
          "Pattern variables (Java 16+): `if (x instanceof Dog dog)` combines check and cast",
          "Avoid downcasting when possible; prefer design with common interface"
        ]
      }
    ]
  },
  {
    "id": "object-class",
    "title": "12. Object Class Methods",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "12. Object Class Methods"
      },
      {
        "type": "paragraph",
        "text": "Every class implicitly extends Object. Three critical methods to override: toString(), equals(), hashCode()."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "toString(): String Representation"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class Point {\n    int x, y;\n\n    Point(int x, int y) {\n        this.x = x;\n        this.y = y;\n    }\n\n    // Default (not overridden)\n    // Point@1f32e575\n\n    // Override for meaningful output\n    @Override\n    public String toString() {\n        return \"Point(\" + x + \", \" + y + \")\";\n    }\n}\n\nPoint p = new Point(10, 20);\nSystem.out.println(p);              // Point(10, 20)\nSystem.out.println(p.toString());   // Point(10, 20)\nSystem.out.println(\"Point: \" + p);  // Point: Point(10, 20)"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "equals(): Value Equality"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class Point {\n    int x, y;\n\n    Point(int x, int y) {\n        this.x = x;\n        this.y = y;\n    }\n\n    // Default equals() checks identity (==)\n    // new Point(1, 2).equals(new Point(1, 2)) → false\n\n    // Override for value-based equality\n    @Override\n    public boolean equals(Object o) {\n        if (this == o) return true;  // same object\n        if (!(o instanceof Point p)) return false;  // wrong type\n        return x == p.x && y == p.y;  // same values\n    }\n}\n\nPoint p1 = new Point(10, 20);\nPoint p2 = new Point(10, 20);\nPoint p3 = p1;\n\nSystem.out.println(p1 == p2);        // false — different objects\nSystem.out.println(p1.equals(p2));   // true — same values\nSystem.out.println(p1 == p3);        // true — same object\nSystem.out.println(p1.equals(p3));   // true — same object and values"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "hashCode(): Hashing for Collections"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class Point {\n    int x, y;\n\n    Point(int x, int y) {\n        this.x = x;\n        this.y = y;\n    }\n\n    @Override\n    public boolean equals(Object o) {\n        if (this == o) return true;\n        if (!(o instanceof Point p)) return false;\n        return x == p.x && y == p.y;\n    }\n\n    // Contract: if equals() returns true, hashCode() must return same value\n    @Override\n    public int hashCode() {\n        return Objects.hash(x, y);\n    }\n}\n\nSet<Point> points = new HashSet<>();\npoints.add(new Point(1, 2));\npoints.add(new Point(1, 2));  // duplicate — same hash and equals\npoints.add(new Point(3, 4));\n\nSystem.out.println(points.size());  // 2 — duplicates removed because of equals+hashCode\n\nMap<Point, String> map = new HashMap<>();\nPoint p1 = new Point(1, 2);\nPoint p2 = new Point(1, 2);  // equal to p1 but different object\n\nmap.put(p1, \"first\");\nmap.put(p2, \"second\");  // overwrites first because equals returns true\nSystem.out.println(map.size());     // 1\nSystem.out.println(map.get(p1));    // \"second\"\nSystem.out.println(map.get(p2));    // \"second\""
      },
      {
        "type": "heading",
        "level": 3,
        "text": "getClass(): Runtime Type Information"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class Animal { }\nclass Dog extends Animal { }\n\nAnimal a = new Dog();\n\nSystem.out.println(a.getClass());       // class Dog\nSystem.out.println(a.getClass().getName());  // \"Dog\"\nSystem.out.println(a instanceof Dog);   // true\n\nString className = a.getClass().getName();\nif (className.equals(\"Dog\")) {\n    // we know it's a Dog\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "clone(): Shallow Copy"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class Point implements Cloneable {\n    int x, y;\n\n    Point(int x, int y) {\n        this.x = x;\n        this.y = y;\n    }\n\n    @Override\n    public Point clone() throws CloneNotSupportedException {\n        return (Point) super.clone();\n    }\n}\n\nPoint original = new Point(10, 20);\nPoint copy = original.clone();\n\ncopy.x = 99;\n\nSystem.out.println(original.x);  // 10 — unchanged\nSystem.out.println(copy.x);      // 99 — independent copy"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Complete equals/hashCode/toString Example"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class Person {\n    String name;\n    int age;\n\n    Person(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n\n    @Override\n    public String toString() {\n        return name + \" (\" + age + \")\";\n    }\n\n    @Override\n    public boolean equals(Object o) {\n        if (this == o) return true;\n        if (!(o instanceof Person p)) return false;\n        return age == p.age && Objects.equals(name, p.name);\n    }\n\n    @Override\n    public int hashCode() {\n        return Objects.hash(name, age);\n    }\n}\n\nSet<Person> people = new HashSet<>();\npeople.add(new Person(\"Alice\", 30));\npeople.add(new Person(\"Alice\", 30));  // duplicate, not added\npeople.add(new Person(\"Bob\", 25));\n\nSystem.out.println(people.size());  // 2\nfor (Person p : people) {\n    System.out.println(p);  // Alice (30), Bob (25)\n}"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "`toString():` returns string representation, used by print statements",
          "`equals():` compares value equality, default is identity comparison",
          "`hashCode():` must be consistent with equals() for use in HashSet/HashMap",
          "`getClass():` returns runtime type for reflection or type checking"
        ]
      }
    ]
  },
  {
    "id": "abstract-classes",
    "title": "13. Abstract Classes",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "13. Abstract Classes"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Abstract Methods (No Body)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "abstract class Shape {\n    // Abstract methods — subclass MUST implement\n    abstract double area();\n    abstract double perimeter();\n\n    // Concrete method — inherited as-is\n    void describe() {\n        System.out.printf(\"Area: %.2f, Perimeter: %.2f%n\", area(), perimeter());\n    }\n}\n\n// WRONG — cannot instantiate abstract class\n// Shape s = new Shape();  // compile error\n\n// Subclass must implement all abstract methods\nclass Circle extends Shape {\n    double radius;\n\n    Circle(double r) { this.radius = r; }\n\n    @Override\n    double area() {\n        return Math.PI * radius * radius;\n    }\n\n    @Override\n    double perimeter() {\n        return 2 * Math.PI * radius;\n    }\n}\n\nCircle c = new Circle(5);\nc.describe();  // Area: 78.54, Perimeter: 31.42"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Multiple Implementations of Same Abstract Class"
      },
      {
        "type": "code",
        "language": "java",
        "code": "abstract class Shape {\n    abstract double area();\n}\n\nclass Rectangle extends Shape {\n    double w, h;\n    @Override\n    double area() { return w * h; }\n}\n\nclass Triangle extends Shape {\n    double base, height;\n    @Override\n    double area() { return (base * height) / 2; }\n}\n\nclass Circle extends Shape {\n    double radius;\n    @Override\n    double area() { return Math.PI * radius * radius; }\n}\n\n// Polymorphic behavior\nShape[] shapes = new Shape[3];\nshapes[0] = new Rectangle();\nshapes[1] = new Triangle();\nshapes[2] = new Circle();\n\n// Each calls its own area() implementation\nfor (Shape s : shapes) {\n    System.out.println(s.area());  // different calculations\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Abstract Class with Fields and Constructor"
      },
      {
        "type": "code",
        "language": "java",
        "code": "abstract class Vehicle {\n    String color;\n    int maxSpeed;\n\n    // Constructor — called by subclass via super()\n    Vehicle(String color, int maxSpeed) {\n        this.color = color;\n        this.maxSpeed = maxSpeed;\n    }\n\n    // Abstract method\n    abstract void drive();\n\n    // Concrete method\n    void describe() {\n        System.out.println(color + \" vehicle, max speed: \" + maxSpeed);\n    }\n}\n\nclass Car extends Vehicle {\n    Car(String color, int maxSpeed) {\n        super(color, maxSpeed);\n    }\n\n    @Override\n    void drive() {\n        System.out.println(\"Car drives on road\");\n    }\n}\n\nCar car = new Car(\"red\", 200);\ncar.describe();  // red vehicle, max speed: 200\ncar.drive();     // Car drives on road"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Abstract vs Concrete Methods"
      },
      {
        "type": "code",
        "language": "java",
        "code": "abstract class Animal {\n    // Abstract — subclass chooses implementation\n    abstract void makeSound();\n\n    // Concrete — all subclasses inherit same behavior\n    final void sleep() {\n        System.out.println(\"Zzz\");\n    }\n\n    // Concrete — subclass can override if needed\n    void eat() {\n        System.out.println(\"Eating food\");\n    }\n}\n\nclass Dog extends Animal {\n    @Override\n    void makeSound() {\n        System.out.println(\"Woof!\");  // must implement abstract method\n    }\n\n    @Override\n    void eat() {\n        System.out.println(\"Dog eats kibble\");  // can override concrete\n    }\n    // sleep() inherited without change\n}\n\nDog dog = new Dog();\ndog.makeSound();  // Woof!\ndog.eat();        // Dog eats kibble\ndog.sleep();      // Zzz"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "`abstract` classes cannot be instantiated directly",
          "Abstract methods have no body; subclass must implement them",
          "Concrete methods are inherited; can be overridden if needed",
          "Abstract classes can have constructors called by subclasses via `super()`"
        ]
      }
    ]
  },
  {
    "id": "interfaces",
    "title": "14. Interfaces",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "14. Interfaces"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Basic Interface Definition"
      },
      {
        "type": "code",
        "language": "java",
        "code": "interface Drawable {\n    void draw();  // implicitly abstract and public\n    void erase();\n}\n\ninterface Colorable {\n    void setColor(String color);\n    String getColor();\n}\n\nclass Shape implements Drawable, Colorable {\n    String color;\n\n    @Override\n    public void draw() {\n        System.out.println(\"Drawing shape in \" + color);\n    }\n\n    @Override\n    public void erase() {\n        System.out.println(\"Erasing shape\");\n    }\n\n    @Override\n    public void setColor(String c) {\n        this.color = c;\n    }\n\n    @Override\n    public String getColor() {\n        return color;\n    }\n}\n\nShape s = new Shape();\ns.setColor(\"blue\");\ns.draw();   // Drawing shape in blue\ns.erase();  // Erasing shape"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Interface Constants"
      },
      {
        "type": "code",
        "language": "java",
        "code": "interface Constants {\n    // All fields are implicitly public static final\n    int MAX_SIZE = 100;\n    String APP_NAME = \"MyApp\";\n    double PI = 3.14159;\n}\n\nclass MyApp implements Constants {\n    void checkSize(int size) {\n        if (size > MAX_SIZE) {  // accessing interface constant\n            System.out.println(\"Exceeds \" + APP_NAME + \" limit\");\n        }\n    }\n}\n\n// Access directly from interface\nSystem.out.println(Constants.MAX_SIZE);  // 100"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Default Methods (Java 8+)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "interface Logger {\n    // Abstract method\n    void log(String msg);\n\n    // Default implementation — can be inherited or overridden\n    default void info(String msg) {\n        System.out.println(\"[INFO] \" + msg);\n    }\n\n    default void error(String msg) {\n        System.out.println(\"[ERROR] \" + msg);\n    }\n}\n\nclass ConsoleLogger implements Logger {\n    @Override\n    public void log(String msg) {\n        System.out.println(msg);\n    }\n\n    // Inherits info() and error() by default\n}\n\nclass FileLogger implements Logger {\n    @Override\n    public void log(String msg) {\n        // write to file\n    }\n\n    @Override\n    public void error(String msg) {\n        System.out.println(\"[CRITICAL ERROR] \" + msg);  // override default\n    }\n}\n\nLogger console = new ConsoleLogger();\nconsole.info(\"Starting app\");       // [INFO] Starting app\nconsole.error(\"Something failed\");  // [ERROR] Something failed\n\nLogger file = new FileLogger();\nfile.error(\"Something failed\");     // [CRITICAL ERROR] Something failed"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Static Methods in Interfaces (Java 8+)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "interface Database {\n    // Abstract method\n    void connect();\n\n    // Default method\n    default void disconnect() {\n        System.out.println(\"Disconnected\");\n    }\n\n    // Static factory method\n    static Database createMySQL() {\n        return new MySQLDatabase();\n    }\n\n    static Database createPostgreSQL() {\n        return new PostgreSQLDatabase();\n    }\n}\n\nclass MySQLDatabase implements Database {\n    @Override\n    public void connect() {\n        System.out.println(\"Connecting to MySQL\");\n    }\n}\n\nclass PostgreSQLDatabase implements Database {\n    @Override\n    public void connect() {\n        System.out.println(\"Connecting to PostgreSQL\");\n    }\n}\n\nDatabase db1 = Database.createMySQL();       // static factory\nDatabase db2 = Database.createPostgreSQL();  // static factory\ndb1.connect();  // Connecting to MySQL"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Private Methods in Interfaces (Java 9+)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "interface DataProcessor {\n    default void process(String data) {\n        validateData(data);  // use private helper\n        System.out.println(\"Processing: \" + data);\n    }\n\n    // Private helper method (Java 9+)\n    private void validateData(String data) {\n        if (data == null || data.isEmpty()) {\n            throw new IllegalArgumentException(\"Data cannot be empty\");\n        }\n    }\n}\n\nclass MyProcessor implements DataProcessor { }\n\nMyProcessor p = new MyProcessor();\np.process(\"Hello\");  // Processing: Hello\np.process(\"\");       // IllegalArgumentException"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Multiple Interface Implementation"
      },
      {
        "type": "code",
        "language": "java",
        "code": "interface Comparable {\n    int compareTo(Object o);\n}\n\ninterface Serializable {\n    byte[] serialize();\n}\n\ninterface Cloneable {\n    Object clone();\n}\n\nclass Document implements Comparable, Serializable, Cloneable {\n    String title;\n\n    @Override\n    public int compareTo(Object o) {\n        // compare by title\n        return 0;\n    }\n\n    @Override\n    public byte[] serialize() {\n        // convert to bytes\n        return new byte[0];\n    }\n\n    @Override\n    public Object clone() {\n        // create copy\n        return new Document();\n    }\n}\n\nDocument d = new Document();\nif (d instanceof Comparable && d instanceof Serializable) {\n    System.out.println(\"Document is comparable and serializable\");\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Diamond Problem Resolution"
      },
      {
        "type": "code",
        "language": "java",
        "code": "interface Flyer {\n    default void fly() {\n        System.out.println(\"Flying\");\n    }\n}\n\ninterface Swimmer {\n    default void fly() {\n        System.out.println(\"Swimming\");  // name conflict!\n    }\n}\n\n// Duck implements both\nclass Duck implements Flyer, Swimmer {\n    @Override\n    public void fly() {\n        System.out.println(\"Duck can do both!\");  // must choose\n        Flyer.super.fly();     // access Flyer's version\n        Swimmer.super.fly();   // access Swimmer's version\n    }\n}\n\nDuck d = new Duck();\nd.fly();\n// Output:\n// Duck can do both!\n// Flying\n// Swimming"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Interfaces vs Abstract Classes"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "All interface methods are abstract unless marked `default` or `static`",
          "A class implements multiple interfaces but extends only one class",
          "Default methods allow backward-compatible interface evolution",
          "Static methods on interfaces provide factory patterns"
        ]
      }
    ]
  },
  {
    "id": "functional-interfaces",
    "title": "15. Functional Interfaces",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "15. Functional Interfaces"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Single Abstract Method Requirement"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Functional interface — exactly ONE abstract method\n@FunctionalInterface\ninterface Greeting {\n    String greet(String name);\n\n    // Can have default/static methods\n    default void sayGoodbye() {\n        System.out.println(\"Goodbye!\");\n    }\n}\n\n// Traditional implementation\nclass FormalGreeting implements Greeting {\n    @Override\n    public String greet(String name) {\n        return \"Good day, \" + name;\n    }\n}\n\n// Lambda expression — much cleaner!\nGreeting casual = name -> \"Hey \" + name;\nGreeting formal = new FormalGreeting();\n\nSystem.out.println(casual.greet(\"Alice\"));  // Hey Alice\nSystem.out.println(formal.greet(\"Bob\"));    // Good day, Bob"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Common Built-in Functional Interfaces"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// java.util.function.Predicate<T> — test a condition\nPredicate<Integer> isEven = n -> n % 2 == 0;\nSystem.out.println(isEven.test(4));   // true\nSystem.out.println(isEven.test(3));   // false\n\n// java.util.function.Function<T, R> — transform value\nFunction<String, Integer> stringLength = s -> s.length();\nSystem.out.println(stringLength.apply(\"Hello\"));  // 5\n\n// java.util.function.Consumer<T> — consume value\nConsumer<String> printer = s -> System.out.println(s);\nprinter.accept(\"Hello\");  // Hello\n\n// java.util.function.Supplier<T> — supply value\nSupplier<Integer> random = () -> new Random().nextInt(100);\nSystem.out.println(random.get());  // random number"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Lambdas with Collections"
      },
      {
        "type": "code",
        "language": "java",
        "code": "List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6);\n\n// Filter with Predicate\nList<Integer> evens = numbers.stream()\n    .filter(n -> n % 2 == 0)  // Predicate<Integer>\n    .collect(Collectors.toList());\nSystem.out.println(evens);  // [2, 4, 6]\n\n// Transform with Function\nList<Integer> squared = numbers.stream()\n    .map(n -> n * n)  // Function<Integer, Integer>\n    .collect(Collectors.toList());\nSystem.out.println(squared);  // [1, 4, 9, 16, 25, 36]\n\n// Process with Consumer\nnumbers.forEach(n -> System.out.println(\"Number: \" + n));  // prints each"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Custom Functional Interface"
      },
      {
        "type": "code",
        "language": "java",
        "code": "@FunctionalInterface\ninterface Calculator {\n    int calculate(int a, int b);\n}\n\nCalculator add = (a, b) -> a + b;\nCalculator multiply = (a, b) -> a * b;\nCalculator divide = (a, b) -> a / b;\n\nSystem.out.println(add.calculate(5, 3));      // 8\nSystem.out.println(multiply.calculate(5, 3)); // 15\nSystem.out.println(divide.calculate(6, 3));   // 2"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Multi-Parameter Functional Interfaces"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// java.util.function.BiFunction<T, U, R> — two inputs, one output\nBiFunction<Integer, Integer, Integer> add = (a, b) -> a + b;\nSystem.out.println(add.apply(5, 3));  // 8\n\n// java.util.function.BiConsumer<T, U> — consume two values\nBiConsumer<String, Integer> printPair = (s, n) ->\n    System.out.println(s + \": \" + n);\nprintPair.accept(\"Count\", 42);  // Count: 42\n\n// Custom multi-parameter functional interface\n@FunctionalInterface\ninterface ThreeParamFunc {\n    int apply(int a, int b, int c);\n}\n\nThreeParamFunc sum = (a, b, c) -> a + b + c;\nSystem.out.println(sum.apply(1, 2, 3));  // 6"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Functional interface = exactly one abstract method",
          "`@FunctionalInterface` annotation documents intent and enforces rule",
          "Lambdas are syntax sugar for functional interface implementations",
          "Built-in functional interfaces: Predicate, Function, Consumer, Supplier, BiFunction, BiConsumer"
        ]
      }
    ]
  },
  {
    "id": "sealed-classes",
    "title": "16. Sealed Classes Java 17+",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "16. Sealed Classes Java 17+"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Restricting Inheritance with permits"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Shape can only be extended by Circle, Rectangle, Triangle\nsealed class Shape permits Circle, Rectangle, Triangle {\n    abstract double area();\n}\n\nfinal class Circle extends Shape {\n    double radius;\n    @Override\n    double area() { return Math.PI * radius * radius; }\n}\n\nfinal class Rectangle extends Shape {\n    double w, h;\n    @Override\n    double area() { return w * h; }\n}\n\nfinal class Triangle extends Shape {\n    double base, height;\n    @Override\n    double area() { return (base * height) / 2; }\n}\n\n// WRONG — Color is not in permits list\n// final class Color extends Shape { }  // compile error"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Three Options for Sealed Subclasses"
      },
      {
        "type": "code",
        "language": "java",
        "code": "sealed class Vehicle permits Car, Truck, Bicycle {\n    abstract void drive();\n}\n\n// Option 1: final — cannot be extended further\nfinal class Car extends Vehicle {\n    @Override\n    void drive() { System.out.println(\"Car drives\"); }\n}\n\n// Option 2: sealed — restrict further extensions\nsealed class Truck extends Vehicle permits ElectricTruck {\n    @Override\n    void drive() { System.out.println(\"Truck drives\"); }\n}\n\nfinal class ElectricTruck extends Truck {\n    @Override\n    void drive() { System.out.println(\"ElectricTruck drives\"); }\n}\n\n// Option 3: non-sealed — allow unlimited further extension\nnon-sealed class Bicycle extends Vehicle {\n    @Override\n    void drive() { System.out.println(\"Bicycle drives\"); }\n}\n\nclass MountainBike extends Bicycle { }  // allowed — non-sealed"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Pattern Matching with Sealed Classes"
      },
      {
        "type": "code",
        "language": "java",
        "code": "sealed class Shape permits Circle, Rectangle { }\nfinal class Circle extends Shape { double radius; }\nfinal class Rectangle extends Shape { double w, h; }\n\ndouble area(Shape s) {\n    return switch (s) {\n        case Circle c -> Math.PI * c.radius * c.radius;\n        case Rectangle r -> r.w * r.h;\n        // Compiler knows all subclasses, no need for default case!\n    };\n}\n\n// Compiler ensures exhaustiveness — must handle all permitted types"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Benefits of Sealed Classes"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// WRONG — no control over subclasses, complex inheritance tree\nclass PaymentMethod {\n    // anyone can extend\n}\nclass CreditCard extends PaymentMethod { }\nclass PayPal extends PaymentMethod { }\nclass Bitcoin extends PaymentMethod { }\nclass UnknownMethod extends PaymentMethod { }  // unexpected subclass!\n\n// CORRECT — sealed for clear, known hierarchy\nsealed class PaymentMethod permits CreditCard, PayPal, Bitcoin {\n    abstract void pay(double amount);\n}\n\ndouble processPayment(PaymentMethod method, double amount) {\n    return switch (method) {\n        case CreditCard cc -> { /* handle credit card */ yield 0; }\n        case PayPal pp -> { /* handle PayPal */ yield 0; }\n        case Bitcoin btc -> { /* handle Bitcoin */ yield 0; }\n        // No other case possible — sealed class exhaustiveness\n    };\n}"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "`sealed` keyword restricts which classes can extend",
          "`permits` lists allowed subclasses",
          "Subclasses must be `final`, `sealed`, or `non-sealed`",
          "Works perfectly with pattern matching for exhaustive switches"
        ]
      }
    ]
  },
  {
    "id": "records",
    "title": "17. Records Java 16+",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "17. Records Java 16+"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Basic Record (Immutable Data Carrier)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// One line defines: fields, constructor, getters, equals, hashCode, toString\nrecord Point(int x, int y) { }\n\nPoint p = new Point(10, 20);\nSystem.out.println(p);           // Point[x=10, y=20]\nSystem.out.println(p.x());       // 10 — getter is x(), not getX()\nSystem.out.println(p.y());       // 20 — getter is y(), not getY()\n\nPoint p2 = new Point(10, 20);\nSystem.out.println(p.equals(p2));  // true — auto-generated\nSystem.out.println(p.hashCode() == p2.hashCode());  // true — auto-generated\n\n// p.x = 5;  // COMPILE ERROR — records are immutable"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "What Records Auto-Generate"
      },
      {
        "type": "code",
        "language": "java",
        "code": "record Point(int x, int y) { }\n\n// Automatically generated:\n// 1. Constructor: public Point(int x, int y) { this.x = x; this.y = y; }\n// 2. Getters: public int x() { return x; }\n//             public int y() { return y; }\n// 3. equals(): compares x and y fields\n// 4. hashCode(): based on x and y\n// 5. toString(): \"Point[x=10, y=20]\"\n\n// Equivalent manual class:\nclass PointManual {\n    private final int x;\n    private final int y;\n\n    PointManual(int x, int y) { this.x = x; this.y = y; }\n\n    public int x() { return x; }\n    public int y() { return y; }\n\n    @Override\n    public boolean equals(Object o) {\n        if (!(o instanceof PointManual p)) return false;\n        return x == p.x && y == p.y;\n    }\n\n    @Override\n    public int hashCode() { return Objects.hash(x, y); }\n\n    @Override\n    public String toString() { return \"PointManual[x=\" + x + \", y=\" + y + \"]\"; }\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Compact Constructor for Validation"
      },
      {
        "type": "code",
        "language": "java",
        "code": "record Range(int min, int max) {\n    // Compact constructor — params already in scope, auto-assigned\n    Range {\n        if (min > max) {\n            throw new IllegalArgumentException(\"min > max\");\n        }\n    }\n}\n\nRange r = new Range(1, 10);\nSystem.out.println(r);  // Range[min=1, max=10]\n\nRange bad = new Range(10, 1);  // IllegalArgumentException"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Adding Custom Methods"
      },
      {
        "type": "code",
        "language": "java",
        "code": "record Point(int x, int y) {\n    // Custom instance method\n    double distanceTo(Point other) {\n        int dx = x - other.x;\n        int dy = y - other.y;\n        return Math.hypot(dx, dy);\n    }\n\n    // Custom static method\n    static Point origin() {\n        return new Point(0, 0);\n    }\n\n    // Override toString for custom format\n    @Override\n    public String toString() {\n        return \"(\" + x + \", \" + y + \")\";\n    }\n}\n\nPoint p1 = new Point(0, 0);\nPoint p2 = new Point(3, 4);\nSystem.out.println(p1.distanceTo(p2));  // 5.0\nSystem.out.println(Point.origin());     // (0, 0)"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Records with Generics"
      },
      {
        "type": "code",
        "language": "java",
        "code": "record Pair<T, U>(T first, U second) { }\n\nPair<String, Integer> p1 = new Pair<>(\"Alice\", 30);\nPair<Integer, Integer> p2 = new Pair<>(1, 2);\n\nSystem.out.println(p1.first());   // Alice\nSystem.out.println(p2.second());  // 2"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Records Implementing Interfaces"
      },
      {
        "type": "code",
        "language": "java",
        "code": "interface Drawable {\n    void draw();\n}\n\nrecord Point(int x, int y) implements Drawable {\n    @Override\n    public void draw() {\n        System.out.println(\"Drawing point at (\" + x + \", \" + y + \")\");\n    }\n}\n\nPoint p = new Point(10, 20);\np.draw();  // Drawing point at (10, 20)"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Record Limitations"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Records are final — cannot extend another class or be extended\nrecord Point(int x, int y) { }\n\n// WRONG\n// class ColoredPoint extends Point { }  // compile error\n\n// But records can implement interfaces\nrecord Point(int x, int y) implements Comparable<Point> {\n    @Override\n    public int compareTo(Point other) {\n        int cmp = Integer.compare(x, other.x);\n        return cmp != 0 ? cmp : Integer.compare(y, other.y);\n    }\n}"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Records eliminate boilerplate for immutable data classes",
          "Auto-generated: constructor, getters, equals, hashCode, toString",
          "Compact constructor for validation without repeating field assignments",
          "Records are implicitly `final` and cannot extend other classes"
        ]
      }
    ]
  },
  {
    "id": "enums",
    "title": "18. Enums",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "18. Enums"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Basic Enum"
      },
      {
        "type": "code",
        "language": "java",
        "code": "enum Day { MON, TUE, WED, THU, FRI, SAT, SUN }\n\nDay today = Day.MON;\nSystem.out.println(today);  // MON\nSystem.out.println(today.name());    // \"MON\" — enum name as string\nSystem.out.println(today.ordinal());  // 0 — position in enum (0-indexed)"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Enum Methods"
      },
      {
        "type": "code",
        "language": "java",
        "code": "enum Season { SPRING, SUMMER, FALL, WINTER }\n\n// values() — all constants\nfor (Season s : Season.values()) {\n    System.out.println(s);  // SPRING, SUMMER, FALL, WINTER\n}\n\n// valueOf() — string to enum\nSeason s = Season.valueOf(\"SUMMER\");\nSystem.out.println(s);  // SUMMER\n\n// ordinal() — position\nSystem.out.println(Season.FALL.ordinal());  // 2\n\n// name() — constant name\nSystem.out.println(Season.SPRING.name());   // \"SPRING\""
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Enum with Fields and Constructor"
      },
      {
        "type": "code",
        "language": "java",
        "code": "enum Planet {\n    MERCURY(3.303e+23, 2.4397e6),\n    VENUS(4.869e+24, 6.0518e6),\n    EARTH(5.976e+24, 6.37814e6),\n    MARS(6.4185e+23, 3.3972e6),\n    JUPITER(1.8986e+27, 7.1492e7);\n\n    final double mass;\n    final double radius;\n    static final double G = 6.67300E-11;\n\n    Planet(double mass, double radius) {\n        this.mass = mass;\n        this.radius = radius;\n    }\n\n    double surfaceGravity() {\n        return G * mass / (radius * radius);\n    }\n\n    double surfaceWeight(double otherMass) {\n        return otherMass * surfaceGravity();\n    }\n}\n\ndouble earthWeight = 100;\nfor (Planet p : Planet.values()) {\n    double weight = p.surfaceWeight(earthWeight);\n    System.out.printf(\"%s: %.1f kg%n\", p, weight);\n}\n// Output:\n// MERCURY: 37.7 kg\n// VENUS: 88.9 kg\n// EARTH: 100.0 kg\n// MARS: 37.9 kg\n// JUPITER: 236.6 kg"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Enum with Abstract Methods"
      },
      {
        "type": "code",
        "language": "java",
        "code": "enum Operation {\n    PLUS(\"+\") {\n        @Override\n        double apply(double x, double y) { return x + y; }\n    },\n    MINUS(\"-\") {\n        @Override\n        double apply(double x, double y) { return x - y; }\n    },\n    TIMES(\"*\") {\n        @Override\n        double apply(double x, double y) { return x * y; }\n    },\n    DIVIDE(\"/\") {\n        @Override\n        double apply(double x, double y) { return x / y; }\n    };\n\n    final String symbol;\n\n    Operation(String symbol) {\n        this.symbol = symbol;\n    }\n\n    abstract double apply(double x, double y);\n}\n\nSystem.out.println(Operation.PLUS.apply(5, 3));    // 8.0\nSystem.out.println(Operation.MINUS.apply(5, 3));   // 2.0\nSystem.out.println(Operation.TIMES.apply(5, 3));   // 15.0\nSystem.out.println(Operation.DIVIDE.apply(6, 3));  // 2.0"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Enum in Switch Statements"
      },
      {
        "type": "code",
        "language": "java",
        "code": "enum Status { PENDING, ACTIVE, COMPLETED, FAILED }\n\nvoid handleStatus(Status s) {\n    switch (s) {\n        case PENDING:\n            System.out.println(\"Waiting to start\");\n            break;\n        case ACTIVE:\n            System.out.println(\"Currently running\");\n            break;\n        case COMPLETED:\n            System.out.println(\"Finished successfully\");\n            break;\n        case FAILED:\n            System.out.println(\"Encountered error\");\n            break;\n    }\n}\n\nhandleStatus(Status.ACTIVE);  // Currently running\n\n// Java 16+ — pattern matching\nString message = switch (Status.COMPLETED) {\n    case PENDING -> \"Waiting to start\";\n    case ACTIVE -> \"Currently running\";\n    case COMPLETED -> \"Finished successfully\";\n    case FAILED -> \"Encountered error\";\n};\nSystem.out.println(message);  // Finished successfully"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "EnumSet and EnumMap"
      },
      {
        "type": "code",
        "language": "java",
        "code": "enum Color { RED, GREEN, BLUE, YELLOW }\n\n// EnumSet — efficient set of enums\nSet<Color> primary = EnumSet.of(Color.RED, Color.GREEN, Color.BLUE);\nSet<Color> warm = EnumSet.of(Color.RED, Color.YELLOW);\nSystem.out.println(primary.contains(Color.RED));  // true\nSystem.out.println(warm.contains(Color.BLUE));    // false\n\n// EnumMap — efficient map with enum keys\nMap<Color, String> names = new EnumMap<>(Color.class);\nnames.put(Color.RED, \"primary\");\nnames.put(Color.BLUE, \"primary\");\nnames.put(Color.YELLOW, \"secondary\");\nSystem.out.println(names.get(Color.RED));  // primary"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Comparing Enums"
      },
      {
        "type": "code",
        "language": "java",
        "code": "enum Priority { LOW, MEDIUM, HIGH, CRITICAL }\n\nPriority p1 = Priority.HIGH;\nPriority p2 = Priority.HIGH;\nPriority p3 = Priority.LOW;\n\nSystem.out.println(p1 == p2);          // true — same constant\nSystem.out.println(p1.equals(p2));     // true — equivalent\nSystem.out.println(p1 == p3);          // false — different constants\nSystem.out.println(p1.ordinal() > p3.ordinal());  // true — 2 > 0"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Enums define set of named constants",
          "Enums can have fields, constructors, and methods",
          "`values()` returns all constants; `valueOf(String)` converts string to enum",
          "Each constant can have different behavior via abstract methods",
          "Use `EnumSet` and `EnumMap` for optimal performance"
        ]
      }
    ]
  },
  {
    "id": "nested-classes",
    "title": "19. Nested Classes",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "19. Nested Classes"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Static Nested Class"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class Outer {\n    static int x = 10;\n\n    static class StaticNested {\n        void printOuterX() {\n            System.out.println(\"Outer x: \" + Outer.x);\n        }\n    }\n}\n\n// Instantiate static nested class\nOuter.StaticNested nested = new Outer.StaticNested();\nnested.printOuterX();  // Outer x: 10\n\n// Can access like top-level class\nOuter.StaticNested obj = new Outer.StaticNested();"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Inner Class (Non-Static Nested)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class Outer {\n    int x = 10;  // outer field\n\n    class Inner {\n        void printOuterX() {\n            System.out.println(\"Outer x: \" + x);  // accesses outer's x\n        }\n    }\n}\n\n// Outer must be instantiated first\nOuter outer = new Outer();\nOuter.Inner inner = outer.new Inner();  // notice 'outer.new' syntax\ninner.printOuterX();  // Outer x: 10\n\n// Inner has implicit reference to outer\nclass Outer {\n    int value = 42;\n\n    class Inner {\n        void show() {\n            System.out.println(Outer.this.value);  // explicit outer reference\n        }\n    }\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Local Class (Inside Method)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "void methodWithLocalClass() {\n    final int x = 10;  // must be final or effectively final\n\n    // Local class — defined inside method\n    class LocalClass {\n        void display() {\n            System.out.println(\"x: \" + x);\n        }\n    }\n\n    LocalClass local = new LocalClass();\n    local.display();  // x: 10\n}\n\n// Cannot use LocalClass outside method\n// LocalClass obj = new LocalClass();  // COMPILE ERROR"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Anonymous Class"
      },
      {
        "type": "code",
        "language": "java",
        "code": "interface Greeter {\n    void greet(String name);\n}\n\n// Anonymous class — inline implementation without named class\nGreeter g = new Greeter() {\n    @Override\n    public void greet(String name) {\n        System.out.println(\"Hello, \" + name);\n    }\n};\n\ng.greet(\"Alice\");  // Hello, Alice\n\n// More practical: callback handler\nbutton.setOnClickListener(new OnClickListener() {\n    @Override\n    public void onClick(View v) {\n        System.out.println(\"Button clicked!\");\n    }\n});\n\n// Modern Java (Java 8+): use lambda instead\nbutton.setOnClickListener(v -> System.out.println(\"Button clicked!\"));"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Comparison of All Nested Class Types"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class Outer {\n    int outerValue = 10;\n\n    // 1. Static Nested Class\n    static class StaticNested {\n        void useOuter() {\n            // System.out.println(outerValue);  // WRONG — no access\n            System.out.println(Outer.class);   // can reference Outer class\n        }\n    }\n\n    // 2. Inner Class\n    class InnerClass {\n        void useOuter() {\n            System.out.println(outerValue);  // OK — implicit access\n        }\n    }\n\n    // 3. Local Class (inside method)\n    void method() {\n        final int local = 5;\n        class LocalClass {\n            void use() {\n                System.out.println(local);      // OK — final/effectively final\n                System.out.println(outerValue); // OK — access outer\n            }\n        }\n        new LocalClass().use();\n    }\n\n    // 4. Anonymous Class (no name)\n    Runnable r = new Runnable() {\n        @Override\n        public void run() {\n            System.out.println(outerValue);\n        }\n    };\n}\n\n// Usage:\nOuter outer = new Outer();\nOuter.StaticNested sn = new Outer.StaticNested();\nOuter.InnerClass ic = outer.new InnerClass();\nouter.method();\nouter.r.run();"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "**Static nested:** no implicit outer reference, like top-level class",
          "**Inner class:** implicit outer reference, accesses outer fields/methods",
          "**Local class:** defined in method, accesses effectively final locals and outer fields",
          "**Anonymous class:** one-time implementation, no name, useful for callbacks"
        ]
      }
    ]
  },
  {
    "id": "final-keyword",
    "title": "20. final Keyword",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "20. final Keyword"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "final Variable: Assign Once"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class Config {\n    // Instance final field — assign in constructor or initializer\n    final String apiKey;\n    final int maxRetries = 3;  // assign at declaration\n\n    Config(String key) {\n        this.apiKey = key;  // assign once in constructor\n        // this.apiKey = \"new key\";  // WRONG — cannot reassign\n    }\n}\n\n// Local final variable\nfinal int x = 10;\n// x = 20;  // COMPILE ERROR — cannot reassign\n\n// final in loop\nfinal int[] array = {1, 2, 3};\narray[0] = 99;  // OK — modifying array contents\n// array = new int[]{4, 5, 6};  // WRONG — cannot reassign reference\n\n// Parameters marked final\nvoid process(final String s) {\n    // s = \"new value\";  // COMPILE ERROR\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Blank Final Fields"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class User {\n    final String userId;\n    final String email;\n    final Date created;\n\n    // Blank final fields — assigned in constructor\n    User(String userId, String email) {\n        this.userId = userId;\n        this.email = email;\n        this.created = new Date();\n    }\n\n    // WRONG — blank finals not set in this constructor\n    // User() {\n    //     this.userId = null;  // userId not set!\n    // }\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "final Method: Cannot Override"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class Parent {\n    void normalMethod() {\n        System.out.println(\"Can be overridden\");\n    }\n\n    final void criticalMethod() {\n        System.out.println(\"Cannot be overridden\");\n    }\n}\n\nclass Child extends Parent {\n    @Override\n    void normalMethod() {\n        System.out.println(\"Overridden\");\n    }\n\n    // WRONG — cannot override final method\n    // @Override\n    // void criticalMethod() { }  // COMPILE ERROR\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "final Class: Cannot Extend"
      },
      {
        "type": "code",
        "language": "java",
        "code": "final class ImmutableString {\n    private final String value;\n    ImmutableString(String value) { this.value = value; }\n}\n\n// WRONG — cannot extend final class\n// class MyString extends ImmutableString { }  // COMPILE ERROR\n\n// Examples of final classes in JDK:\n// - String\n// - Integer\n// - Long\n// - System\n// (These are final for security and performance)"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "When to Use final"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// GOOD USE CASES:\n\n// 1. Immutable data classes\nfinal class Point {\n    final int x, y;\n    Point(int x, int y) { this.x = x; this.y = y; }\n}\n\n// 2. Critical security code that shouldn't be overridden\nclass SecurityManager {\n    final void restrictAccess() {\n        // no subclass can weaken security\n    }\n}\n\n// 3. Constants\nfinal double PI = 3.14159;\nfinal String APP_NAME = \"MyApp\";\n\n// 4. Performance-critical methods (allows inline optimization)\nfinal int criticalCalculation(int x) {\n    return x * x;  // compiler can inline this\n}"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "`final` variable: assign once, cannot be changed",
          "`final` method: subclass cannot override",
          "`final` class: cannot be extended",
          "Blank finals: assigned in constructor or initializer, not at declaration"
        ]
      }
    ]
  },
  {
    "id": "sec-21",
    "title": "21. Annotations",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "21. Annotations"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Built-in Annotations"
      },
      {
        "type": "code",
        "language": "java",
        "code": "@Override          // compiler checks you're actually overriding\n@Deprecated        // marks API as obsolete — triggers warning on use\n@SuppressWarnings(\"unchecked\")  // suppress specific compiler warnings\n@FunctionalInterface   // verifies interface has exactly 1 abstract method\n@SafeVarargs       // suppresses heap pollution warning on varargs methods\n\n// @Deprecated with since and forRemoval:\n@Deprecated(since = \"11\", forRemoval = true)\npublic void oldMethod() { }"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Custom Annotation Definition"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Basic annotation:\npublic @interface MyAnnotation { }\n\n// With elements:\npublic @interface Route {\n    String value();          // element named \"value\" is special — no name needed at use\n    String method() default \"GET\";\n    int timeout() default 30;\n}\n\n// Meta-annotations:\n@Retention(RetentionPolicy.RUNTIME)  // available at runtime via reflection\n@Target(ElementType.METHOD)          // only on methods\n@Documented                          // include in Javadoc\n@Inherited                           // subclasses inherit this annotation\npublic @interface Route {\n    String value();\n    String method() default \"GET\";\n}\n\n// Usage:\n@Route(\"/users\")\n@Route(value = \"/users\", method = \"POST\")\npublic void handleRequest() { }"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Retention Policies"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "**SOURCE:** discarded by compiler (e.g., @Override)",
          "**CLASS:** in .class file, not runtime (default)",
          "**RUNTIME:** available via reflection (e.g., @Deprecated)"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Target Types (ElementType)"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "TYPE (class, interface, enum), METHOD, FIELD, PARAMETER, CONSTRUCTOR",
          "LOCAL_VARIABLE, ANNOTATION_TYPE, PACKAGE"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Repeatable Annotations (Java 8+)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "@Repeatable(Schedules.class)\npublic @interface Schedule { String cron(); }\n\n@Retention(RetentionPolicy.RUNTIME)\npublic @interface Schedules { Schedule[] value(); }\n\n// Usage:\n@Schedule(cron = \"0 0 * * *\")\n@Schedule(cron = \"0 12 * * *\")\npublic void backup() { }"
      }
    ]
  },
  {
    "id": "sec-22",
    "title": "22. Reflection API",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "22. Reflection API"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Getting Class Objects"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Three ways to get Class object:\nClass<String> c1 = String.class;           // class literal\nClass<?> c2 = \"hello\".getClass();          // from instance\nClass<?> c3 = Class.forName(\"java.lang.String\"); // by name (throws ClassNotFoundException)\n\n// Class info:\nc1.getName()           // \"java.lang.String\"\nc1.getSimpleName()     // \"String\"\nc1.getPackageName()    // \"java.lang\"\nc1.getSuperclass()     // class java.lang.Object\nc1.getInterfaces()     // [Serializable, Comparable, CharSequence]\nc1.isInterface()       // false\nc1.isEnum()            // false\nc1.isRecord()          // false"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Inspecting Fields"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class Person {\n    private String name;\n    public int age;\n    Person(String name, int age) { this.name = name; this.age = age; }\n}\n\nClass<?> cls = Person.class;\n\n// getDeclaredFields() = all fields in THIS class (including private)\n// getFields() = only public fields (including inherited)\nfor (Field field : cls.getDeclaredFields()) {\n    System.out.println(field.getName() + \" : \" + field.getType());\n}\n\n// Read/write field value:\nPerson p = new Person(\"Alice\", 30);\nField nameField = cls.getDeclaredField(\"name\");\nnameField.setAccessible(true);      // bypass private\nString name = (String) nameField.get(p);  // \"Alice\"\nnameField.set(p, \"Bob\");                  // modify private field"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Inspecting and Invoking Methods"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// getDeclaredMethods() = all methods in this class\n// getMethods() = public methods including inherited\nMethod[] methods = cls.getDeclaredMethods();\nfor (Method m : methods) {\n    System.out.println(m.getName() + \" params=\" + m.getParameterCount());\n}\n\n// Invoke a method:\nMethod greet = String.class.getMethod(\"toUpperCase\");\nString result = (String) greet.invoke(\"hello\");  // \"HELLO\"\n\n// Invoke with parameters:\nMethod sub = String.class.getMethod(\"substring\", int.class, int.class);\nString s = (String) sub.invoke(\"hello world\", 6, 11);  // \"world\""
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Constructors via Reflection"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Create instance via reflection:\nConstructor<Person> ctor = Person.class.getDeclaredConstructor(String.class, int.class);\nctor.setAccessible(true);\nPerson p = ctor.newInstance(\"Alice\", 30);\n\n// No-arg constructor:\nObject obj = String.class.getDeclaredConstructor().newInstance();"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Reading Annotations at Runtime"
      },
      {
        "type": "code",
        "language": "java",
        "code": "@Retention(RetentionPolicy.RUNTIME)\n@Target(ElementType.METHOD)\n@interface Route { String value(); }\n\nclass Controller {\n    @Route(\"/users\")\n    public void getUsers() { }\n}\n\n// Read the annotation:\nMethod method = Controller.class.getMethod(\"getUsers\");\nif (method.isAnnotationPresent(Route.class)) {\n    Route route = method.getAnnotation(Route.class);\n    System.out.println(\"Path: \" + route.value());  // \"Path: /users\"\n}\n\n// Scan all methods for @Route:\nfor (Method m : Controller.class.getDeclaredMethods()) {\n    Route r = m.getAnnotation(Route.class);\n    if (r != null) System.out.println(m.getName() + \" → \" + r.value());\n}"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "**Reflection is powerful but slow** and breaks encapsulation — use sparingly",
          "**Frameworks like Spring** use reflection heavily for dependency injection and proxies",
          "**Application code** rarely needs reflection — prefer compile-time solutions"
        ]
      }
    ]
  }
]
