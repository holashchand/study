export const sections = [
  {
    id: 'architectural-overview',
    title: 'Architectural Patterns: Overview',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Design Patterns vs Architectural Patterns'
      },
      {
        type: 'paragraph',
        text: '**Design Patterns** (GoF) solve local problems: how to create objects, structure classes, communicate between objects. **Architectural Patterns** solve system-level problems: how to organize entire applications, separate concerns, manage dependencies across layers.'
      },
      {
        type: 'table',
        headers: ['Aspect', 'Design Pattern', 'Architectural Pattern'],
        rows: [
          ['**Scope**', 'Classes and local interactions', 'Entire application structure'],
          ['**Problem Level**', 'Object creation, behavior, structure', 'System organization, layer separation'],
          ['**Example**', 'Singleton, Observer, Strategy', 'MVC, Repository, Layered Architecture'],
          ['**Reusability**', 'High - applies to many domains', 'Medium - domain-specific'],
          ['**Complexity**', 'Lower', 'Higher'],
          ['**Team Impact**', 'Individual developers', 'Entire team/project']
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Patterns in This Chapter'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          '**MVC (Model-View-Controller):** Separates data, UI, logic',
          '**MVP (Model-View-Presenter):** Similar to MVC; presenter handles all logic',
          '**MVVM (Model-View-ViewModel):** Data binding between view and viewmodel',
          '**Repository:** Abstract data access behind interface',
          '**Service Locator:** Lookup services (often considered anti-pattern)',
          '**Layered Architecture:** Organize code into horizontal layers'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Architectural Decision Flow'
      },
      {
        type: 'diagram',
        format: 'mermaid',
        content: 'flowchart TD\n  A["Need to structure entire application?"] -->|Yes| B["Choose architectural pattern"]\n  B --> C{"Domain-heavy\nor UI-heavy?"}\n  C -->|UI-heavy web app| D["Use MVC or MVVM"]\n  C -->|Complex business logic| E["Use Layered + Repository"]\n  C -->|Large domain model| F["Use CQRS or DDD"]\n  D --> G["Implement pattern"]',
        label: 'Choosing an Architectural Pattern'
      }
    ]
  },
  {
    id: 'mvc-concept',
    title: 'MVC Pattern: Concept',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Model-View-Controller (MVC)'
      },
      {
        type: 'paragraph',
        text: 'MVC divides an application into three interconnected components: **Model** (data and logic), **View** (presentation), and **Controller** (handles user input). This separation of concerns enables independent development and testing of each layer.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Core Responsibilities'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          '**Model:** Contains business logic and state. Notifies observers when state changes.',
          '**View:** Displays model data. Sends user actions to controller.',
          '**Controller:** Processes user input, updates model, and triggers view updates.'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'MVC Data Flow'
      },
      {
        type: 'diagram',
        format: 'mermaid',
        content: 'flowchart LR\n  User["User"] -->|Input| Controller["Controller"]\n  Controller -->|Modifies| Model["Model"]\n  Model -->|Notifies| View["View"]\n  View -->|Renders| User\n  User -->|Sees changes| View',
        label: 'MVC Data and Control Flow'
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
          '✓ Clear separation of concerns',
          '✓ Easy to test model and controller in isolation',
          '✓ Multiple views can use same model',
          '✗ Controller can become a dumping ground (bloated)',
          '✗ Requires strong discipline to keep concerns separated',
          '✗ View-to-Model communication can be implicit'
        ]
      },
      {
        type: 'callout',
        variant: 'tip',
        title: 'Real-World Usage',
        text: 'MVC is the foundation of frameworks like Spring MVC, Ruby on Rails, ASP.NET MVC, Django, and Laravel.'
      }
    ]
  },
  {
    id: 'mvc-implementation',
    title: 'MVC Pattern: Implementation',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'User Management Web App Example'
      },
      {
        type: 'paragraph',
        text: 'We\'ll build a simple user management system using MVC: users can be added and listed.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 1: Model - Business Logic & Data'
      },
      {
        type: 'code',
        language: 'java',
        code: 'import java.util.*;\n\npublic class User {\n  private String id;\n  private String name;\n  private String email;\n\n  public User(String id, String name, String email) {\n    this.id = id;\n    this.name = name;\n    this.email = email;\n  }\n\n  public String getId() { return id; }\n  public String getName() { return name; }\n  public String getEmail() { return email; }\n}\n\npublic class UserModel {\n  private List<User> users = new ArrayList<>();\n  private List<UserObserver> observers = new ArrayList<>();\n\n  public void addUser(User user) {\n    users.add(user);\n    notifyObservers();\n  }\n\n  public List<User> getUsers() {\n    return new ArrayList<>(users);\n  }\n\n  public void addObserver(UserObserver observer) {\n    observers.add(observer);\n  }\n\n  private void notifyObservers() {\n    for (UserObserver observer : observers) {\n      observer.onUsersChanged();\n    }\n  }\n}\n\npublic interface UserObserver {\n  void onUsersChanged();\n}',
        filename: 'Model.java'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 2: View - Presentation'
      },
      {
        type: 'code',
        language: 'java',
        code: 'public class UserView implements UserObserver {\n  private UserModel model;\n\n  public UserView(UserModel model) {\n    this.model = model;\n    model.addObserver(this);\n  }\n\n  public void display() {\n    System.out.println(\"=== Users ===\");\n    List<User> users = model.getUsers();\n    if (users.isEmpty()) {\n      System.out.println(\"No users yet.\");\n    } else {\n      for (User user : users) {\n        System.out.println(user.getId() + \": \" + user.getName() + \" (\" + user.getEmail() + \")\");\n      }\n    }\n  }\n\n  @Override\n  public void onUsersChanged() {\n    System.out.println(\"\\n[View notified: users changed]\");\n    display();\n  }\n}',
        filename: 'View.java'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 3: Controller - User Input Handler'
      },
      {
        type: 'code',
        language: 'java',
        code: 'import java.util.Scanner;\n\npublic class UserController {\n  private UserModel model;\n  private UserView view;\n  private Scanner scanner;\n\n  public UserController(UserModel model, UserView view) {\n    this.model = model;\n    this.view = view;\n    this.scanner = new Scanner(System.in);\n  }\n\n  public void start() {\n    view.display();\n    boolean running = true;\n\n    while (running) {\n      System.out.println(\"\\nOptions: [1] Add User, [2] List Users, [3] Exit\");\n      System.out.print(\"Choose: \");\n      String choice = scanner.nextLine();\n\n      switch (choice) {\n        case \"1\":\n          addUser();\n          break;\n        case \"2\":\n          view.display();\n          break;\n        case \"3\":\n          running = false;\n          break;\n        default:\n          System.out.println(\"Invalid option.\");\n      }\n    }\n  }\n\n  private void addUser() {\n    System.out.print(\"Enter ID: \");\n    String id = scanner.nextLine();\n    System.out.print(\"Enter Name: \");\n    String name = scanner.nextLine();\n    System.out.print(\"Enter Email: \");\n    String email = scanner.nextLine();\n\n    User user = new User(id, name, email);\n    model.addUser(user);\n  }\n}',
        filename: 'Controller.java'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 4: Main - Tying It Together'
      },
      {
        type: 'code',
        language: 'java',
        code: 'public class Main {\n  public static void main(String[] args) {\n    UserModel model = new UserModel();\n    UserView view = new UserView(model);\n    UserController controller = new UserController(model, view);\n\n    controller.start();\n  }\n}',
        filename: 'Main.java'
      },
      {
        type: 'callout',
        variant: 'important',
        title: 'Key Observation',
        text: 'The Model notifies the View through the Observer pattern. The Controller modifies the Model, and the View automatically updates. The View never directly manipulates the Model. The Controller is the only entry point for user input.'
      }
    ]
  },
  {
    id: 'mvc-sequence',
    title: 'MVC Interaction Sequence',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'User Interaction Flow in MVC'
      },
      {
        type: 'paragraph',
        text: 'This sequence diagram shows how MVC components interact when a user submits a form to add a new user.'
      },
      {
        type: 'diagram',
        format: 'mermaid',
        content: 'sequenceDiagram\n  participant User\n  participant Controller\n  participant Model\n  participant View\n  User->>Controller: Submit form (name, email)\n  activate Controller\n  Controller->>Model: addUser(name, email)\n  activate Model\n  Model->>Model: Validate & store user\n  Model->>View: Notify observers (onUsersChanged)\n  deactivate Model\n  activate View\n  View->>Model: getUsers()\n  Model-->>View: List of users\n  View->>User: Render updated user list\n  deactivate View\n  deactivate Controller',
        label: 'MVC User Interaction Sequence'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step-by-Step Breakdown'
      },
      {
        type: 'list',
        ordered: true,
        items: [
          '**User submits form:** "Add Alice, alice@example.com"',
          '**Controller receives input:** Validates user input (optional)',
          '**Controller updates Model:** Calls model.addUser() with validated data',
          '**Model stores data:** Adds user to internal list',
          '**Model notifies View:** Calls observer.onUsersChanged() to alert view',
          '**View fetches data:** Calls model.getUsers() to get latest list',
          '**View renders:** Displays updated user list to user'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Why This Architecture Works'
      },
      {
        type: 'callout',
        variant: 'tip',
        title: 'Design Benefits',
        text: 'Each layer has a single responsibility: Model manages state and logic, View displays data, Controller handles input. You can swap the View (web, desktop, CLI) without changing Model or Controller. You can test Model logic independently of the UI.'
      }
    ]
  },
  {
    id: 'mvp-concept',
    title: 'MVP Pattern: Concept',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Model-View-Presenter (MVP)'
      },
      {
        type: 'paragraph',
        text: 'MVP is similar to MVC but with a key difference: **the Presenter handles ALL logic**, not the Model. The View becomes completely passive and only renders what the Presenter tells it to. This makes testing easier because the Presenter can be tested without a real UI.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'MVC vs MVP Comparison'
      },
      {
        type: 'diagram',
        format: 'mermaid',
        content: 'classDiagram\n  class MVCController {\n    +update model directly\n  }\n  class MVPPresenter {\n    +fetches from model\n    +formats for view\n    +handles all logic\n  }\n  class MVCModel {\n    +notifies view\n  }\n  class PassiveView {\n    +just renders\n    +no logic\n  }\n  MVCController --> MVCModel\n  MVCModel --> PassiveView\n  MVPPresenter --> PassiveView\n  note for PassiveView "MVP: View is completely dumb"',
        label: 'MVC vs MVP Comparison'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Core Responsibilities'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          '**Model:** Holds data. No knowledge of View or Presenter.',
          '**View:** Renders data. Completely passive - no logic. Sends user actions to Presenter.',
          '**Presenter:** All business logic. Fetches from Model, formats data, tells View what to display.'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'MVP Flow'
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'User interacts with View (clicks button, enters text)',
          'View notifies Presenter of action',
          'Presenter fetches data from Model',
          'Presenter formats and processes data (all logic here)',
          'Presenter tells View what to display',
          'View renders the data'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'When to Use MVP'
      },
      {
        type: 'callout',
        variant: 'tip',
        title: 'Best Use Cases',
        text: 'MVP is popular in Android development and desktop applications (WinForms, JavaFX) where you want to completely isolate business logic from UI. The passive view and test-friendly presenter make it ideal for UI-heavy applications.'
      }
    ]
  },
  {
    id: 'mvvm-concept',
    title: 'MVVM Pattern: Concept',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Model-View-ViewModel (MVVM)'
      },
      {
        type: 'paragraph',
        text: 'MVVM is designed for frameworks with **data binding** support (e.g., WPF, Angular, Vue.js). The **ViewModel** exposes properties and commands that the View binds to automatically. When ViewModel data changes, the View updates without manual refresh.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Core Components'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          '**Model:** Contains domain data and business logic',
          '**View:** UI (HTML/XAML/JSX). Binds to ViewModel properties and commands.',
          '**ViewModel:** Exposes Model data as properties. Handles user actions. Supports two-way data binding.'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'MVVM Data Flow'
      },
      {
        type: 'diagram',
        format: 'mermaid',
        content: 'flowchart LR\n  View["View<br/>(HTML/JSX)"] -->|Two-way<br/>Data Binding| ViewModel["ViewModel<br/>(Observable Properties)"]\n  ViewModel -->|Read/Write| Model["Model<br/>(Domain Logic)"]\n  Model -->|Update| ViewModel\n  ViewModel -->|PropertyChanged| View',
        label: 'MVVM Data Binding Flow'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Key Feature: Two-Way Data Binding'
      },
      {
        type: 'paragraph',
        text: 'In MVVM, if the user types in a text field, the ViewModel property updates automatically. If the ViewModel property changes programmatically, the View updates automatically. This eliminates manual synchronization.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'When to Use MVVM'
      },
      {
        type: 'callout',
        variant: 'tip',
        title: 'Best Use Cases',
        text: 'Use MVVM with frameworks that support data binding: WPF (.NET), Angular, Vue.js, Xamarin. MVVM reduces boilerplate code by letting the framework handle View-ViewModel synchronization.'
      }
    ]
  },
  {
    id: 'mvc-mvp-mvvm-comparison',
    title: 'MVC, MVP, MVVM: Complete Comparison',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Comprehensive Comparison Table'
      },
      {
        type: 'table',
        headers: ['Aspect', 'MVC', 'MVP', 'MVVM'],
        rows: [
          ['**View Intelligence**', 'Can have some logic', 'Completely passive', 'Data binding aware'],
          ['**Who Handles Logic**', 'Controller + Model', 'Presenter', 'ViewModel'],
          ['**View-Model Communication**', 'Model notifies View', 'Presenter tells View', 'Automatic binding'],
          ['**Testability**', 'Good', 'Excellent', 'Good'],
          ['**Data Binding**', 'Manual (Observer)', 'Manual', 'Automatic (framework support)'],
          ['**Two-Way Binding**', 'No', 'No', 'Yes'],
          ['**Best For**', 'Web apps (Rails, Spring)', 'Mobile (Android)', 'Modern SPAs (Angular, Vue)'],
          ['**Framework Examples**', 'Spring MVC, Rails, Django', 'MVP on Android', 'WPF, Angular, Vue.js'],
          ['**Complexity**', 'Medium', 'Medium-High', 'Medium (if framework supports binding)'],
          ['**Learning Curve**', 'Moderate', 'Moderate-Steep', 'Steep (framework-dependent)']
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Quick Decision Guide'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          '**Choose MVC** if: Building a traditional web application (server-side rendering), using frameworks like Spring or Rails',
          '**Choose MVP** if: Building an Android app or desktop application where you want complete logic isolation',
          '**Choose MVVM** if: Using a modern SPA framework (Angular, Vue) with data binding support'
        ]
      },
      {
        type: 'callout',
        variant: 'note',
        title: 'Real-World Reality',
        text: 'Most modern frameworks blur these distinctions. React is technically neither MVC, MVP, nor MVVM - it\'s component-based. Redux brings patterns from MVC/MVVM. The core principle remains: separate concerns (data, logic, presentation).'
      }
    ]
  },
  {
    id: 'repository-concept',
    title: 'Repository Pattern: Concept',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Repository Pattern'
      },
      {
        type: 'paragraph',
        text: 'The **Repository** pattern abstracts data access behind an interface. Instead of business logic directly accessing databases, it uses a repository that handles all persistence concerns. This decouples business logic from data sources.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Core Idea'
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Define a Repository interface with domain-specific methods (e.g., findUserById, saveUser)',
          'Implement Repository for different storage: InMemory, SQL Database, NoSQL, REST API',
          'Business logic depends only on the interface, not concrete implementations',
          'Swap implementations without changing business logic'
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
        content: 'classDiagram\n  class UserRepository {\n    +findById(id) User\n    +save(user) void\n    +delete(id) void\n  }\n  class InMemoryUserRepository {\n    -users Map\n    +findById(id) User\n    +save(user) void\n    +delete(id) void\n  }\n  class JpaUserRepository {\n    -entityManager\n    +findById(id) User\n    +save(user) void\n    +delete(id) void\n  }\n  class UserService {\n    -repository UserRepository\n    +createUser(name) void\n  }\n  UserRepository <|-- InMemoryUserRepository\n  UserRepository <|-- JpaUserRepository\n  UserService --> UserRepository',
        label: 'Repository Pattern Structure'
      },
      {
        type: 'heading',
        level: 3,
        text: 'When to Use Repository'
      },
      {
        type: 'callout',
        variant: 'tip',
        title: 'Best Use Cases',
        text: 'Use Repository when: (1) you want to decouple business logic from persistence, (2) you need to support multiple data sources, (3) you want to mock data access in tests, (4) you\'re building domain-driven designs.'
      }
    ]
  },
  {
    id: 'repository-implementation',
    title: 'Repository Pattern: Implementation',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'User Repository Example'
      },
      {
        type: 'paragraph',
        text: 'We\'ll implement a UserRepository with two concrete implementations: InMemoryUserRepository for testing and JpaUserRepository for production.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 1: Define Repository Interface'
      },
      {
        type: 'code',
        language: 'java',
        code: 'public interface UserRepository {\n  User findById(String id);\n  void save(User user);\n  void delete(String id);\n  List<User> findAll();\n}',
        filename: 'UserRepository.java'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 2: In-Memory Implementation (Testing)'
      },
      {
        type: 'code',
        language: 'java',
        code: 'import java.util.*;\n\npublic class InMemoryUserRepository implements UserRepository {\n  private Map<String, User> users = new HashMap<>();\n\n  @Override\n  public User findById(String id) {\n    return users.get(id);\n  }\n\n  @Override\n  public void save(User user) {\n    users.put(user.getId(), user);\n  }\n\n  @Override\n  public void delete(String id) {\n    users.remove(id);\n  }\n\n  @Override\n  public List<User> findAll() {\n    return new ArrayList<>(users.values());\n  }\n}',
        filename: 'InMemoryUserRepository.java'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 3: JPA Implementation (Production)'
      },
      {
        type: 'code',
        language: 'java',
        code: 'import javax.persistence.*;\nimport java.util.List;\n\npublic class JpaUserRepository implements UserRepository {\n  @PersistenceContext\n  private EntityManager entityManager;\n\n  @Override\n  public User findById(String id) {\n    return entityManager.find(User.class, id);\n  }\n\n  @Override\n  public void save(User user) {\n    if (user.getId() == null || entityManager.find(User.class, user.getId()) == null) {\n      entityManager.persist(user);\n    } else {\n      entityManager.merge(user);\n    }\n  }\n\n  @Override\n  public void delete(String id) {\n    User user = findById(id);\n    if (user != null) {\n      entityManager.remove(user);\n    }\n  }\n\n  @Override\n  public List<User> findAll() {\n    return entityManager.createQuery(\"SELECT u FROM User u\", User.class)\n        .getResultList();\n  }\n}',
        filename: 'JpaUserRepository.java'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 4: Business Service (Uses Repository)'
      },
      {
        type: 'code',
        language: 'java',
        code: 'public class UserService {\n  private UserRepository repository;\n\n  public UserService(UserRepository repository) {\n    this.repository = repository;\n  }\n\n  public void createUser(String id, String name, String email) {\n    User user = new User(id, name, email);\n    repository.save(user);\n    System.out.println(\"User created: \" + user.getName());\n  }\n\n  public User getUser(String id) {\n    return repository.findById(id);\n  }\n\n  public void deleteUser(String id) {\n    repository.delete(id);\n    System.out.println(\"User deleted: \" + id);\n  }\n}',
        filename: 'UserService.java'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Step 5: Using Repository (Dependency Injection)'
      },
      {
        type: 'code',
        language: 'java',
        code: 'public class Main {\n  public static void main(String[] args) {\n    // For testing: use in-memory\n    UserRepository testRepo = new InMemoryUserRepository();\n    UserService testService = new UserService(testRepo);\n    testService.createUser(\"1\", \"Alice\", \"alice@example.com\");\n    System.out.println(\"User in test: \" + testService.getUser(\"1\").getName());\n\n    // For production: use JPA\n    // UserRepository prodRepo = new JpaUserRepository();\n    // UserService prodService = new UserService(prodRepo);\n    // prodService.createUser(\"1\", \"Alice\", \"alice@example.com\");\n  }\n}',
        filename: 'Main.java'
      },
      {
        type: 'callout',
        variant: 'important',
        title: 'Key Benefit',
        text: 'The UserService has NO dependencies on how users are stored. It only cares about the UserRepository interface. You can test UserService with InMemoryUserRepository, and in production use JpaUserRepository. The service code never changes.'
      }
    ]
  },
  {
    id: 'repository-spring-analogy',
    title: 'Repository Pattern in Spring Data',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'How Spring Data Implements Repository'
      },
      {
        type: 'paragraph',
        text: 'Spring Data JPA automatically generates Repository implementations from your interface definitions. This is the Repository pattern at scale: you define the interface, Spring provides the implementation.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Spring Data Repository Example'
      },
      {
        type: 'code',
        language: 'java',
        code: 'import org.springframework.data.jpa.repository.JpaRepository;\nimport java.util.List;\n\n// No implementation code needed!\npublic interface UserRepository extends JpaRepository<User, Long> {\n  User findByEmail(String email);\n  List<User> findByNameContaining(String name);\n}',
        filename: 'UserRepository.java'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Using Spring Data Repository'
      },
      {
        type: 'code',
        language: 'java',
        code: '@RestController\n@RequestMapping(\"/users\")\npublic class UserController {\n  @Autowired\n  private UserRepository userRepository; // Automatically injected!\n\n  @PostMapping\n  public User createUser(@RequestBody User user) {\n    return userRepository.save(user);\n  }\n\n  @GetMapping(\"/{id}\")\n  public User getUser(@PathVariable Long id) {\n    return userRepository.findById(id).orElse(null);\n  }\n\n  @GetMapping\n  public List<User> searchByEmail(@RequestParam String email) {\n    return userRepository.findByEmail(email);\n  }\n}',
        filename: 'UserController.java'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Spring Data Magic'
      },
      {
        type: 'paragraph',
        text: 'Spring Data does incredible things automatically:'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Generates CRUD operations (save, findById, delete, etc.)',
          'Parses method names to generate queries (findByEmail, findByNameContaining)',
          'Supports custom `@Query` annotations for complex queries',
          'Works with multiple data sources (JPA, MongoDB, Redis, Elasticsearch)',
          'Provides pagination and sorting out of the box'
        ]
      },
      {
        type: 'callout',
        variant: 'note',
        title: 'Educational Note',
        text: 'For this course, understanding how Spring Data works is educational. In practice, frameworks like Spring eliminate boilerplate, but the underlying Repository pattern is the same.'
      }
    ]
  },
  {
    id: 'service-locator-concept',
    title: 'Service Locator Pattern',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Service Locator Pattern (And Why It\'s Controversial)'
      },
      {
        type: 'paragraph',
        text: 'The **Service Locator** pattern provides a central registry for looking up services (database, cache, logger, etc.). Instead of injecting dependencies, code asks the locator for what it needs.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'UML Structure'
      },
      {
        type: 'diagram',
        format: 'mermaid',
        content: 'classDiagram\n  class ServiceLocator {\n    -services Map\n    +register(name, service)\n    +getService(name)\n  }\n  class Logger {\n  }\n  class Database {\n  }\n  class EmailService {\n  }\n  ServiceLocator --> Logger\n  ServiceLocator --> Database\n  ServiceLocator --> EmailService',
        label: 'Service Locator Structure'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Code Example'
      },
      {
        type: 'code',
        language: 'java',
        code: 'public class ServiceLocator {\n  private static Map<String, Object> services = new HashMap<>();\n\n  public static void register(String name, Object service) {\n    services.put(name, service);\n  }\n\n  public static Object getService(String name) {\n    return services.get(name);\n  }\n}\n\n// Usage\nUserService service = new UserService();\nservice.createUser(\"Alice\");\n\npublic class UserService {\n  public void createUser(String name) {\n    // Get logger from locator\n    Logger logger = (Logger) ServiceLocator.getService(\"logger\");\n    logger.info(\"Creating user: \" + name);\n  }\n}',
        filename: 'ServiceLocator.java'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Why Service Locator is Controversial'
      },
      {
        type: 'callout',
        variant: 'warning',
        title: 'Anti-Pattern Alert',
        text: 'Service Locator is generally considered an **anti-pattern** by modern standards. Problems:\n1. **Hidden Dependencies:** Code doesn\'t declare what it needs (see ServiceLocator.getService() calls)\n2. **Hard to Test:** Can\'t easily mock services; must configure the locator\n3. **Hard to Debug:** Dependencies aren\'t visible in method signatures\n4. **Runtime Errors:** Missing service only fails at runtime, not compile time'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Service Locator vs Dependency Injection'
      },
      {
        type: 'code',
        language: 'java',
        code: '// BAD: Service Locator (hidden dependency)\npublic class UserService {\n  public void createUser(String name) {\n    Logger logger = (Logger) ServiceLocator.getService(\"logger\"); // Hidden!\n    logger.info(\"Creating user\");\n  }\n}\n\n// GOOD: Dependency Injection (explicit dependency)\npublic class UserService {\n  private Logger logger;\n\n  public UserService(Logger logger) { // Clear dependency!\n    this.logger = logger;\n  }\n\n  public void createUser(String name) {\n    logger.info(\"Creating user\");\n  }\n}',
        filename: 'Comparison.java'
      },
      {
        type: 'callout',
        variant: 'tip',
        title: 'Modern Best Practice',
        text: 'Use **Dependency Injection** instead of Service Locator. With frameworks like Spring, dependency injection is automatic and makes dependencies explicit.'
      }
    ]
  },
  {
    id: 'layered-architecture',
    title: 'Layered Architecture',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Layered Architecture Pattern'
      },
      {
        type: 'paragraph',
        text: 'Layered architecture organizes code into horizontal layers, each with a specific responsibility. Dependencies flow downward only (Presentation → Business → Data Access → Database).'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Four-Layer Architecture'
      },
      {
        type: 'diagram',
        format: 'mermaid',
        content: 'flowchart TD\n  Presentation["Presentation Layer<br/>(UI, Controllers, REST APIs)"]\n  Business["Business Logic Layer<br/>(Services, Domain Logic)"]\n  Data["Data Access Layer<br/>(Repositories, DAOs)"]\n  Database["Database / External Services"]\n  Presentation -->|Calls| Business\n  Business -->|Calls| Data\n  Data -->|Reads/Writes| Database\n  style Presentation fill:#e1f5ff\n  style Business fill:#fff3e0\n  style Data fill:#f3e5f5\n  style Database fill:#e8f5e9',
        label: 'Four-Layer Architecture'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Layer Responsibilities'
      },
      {
        type: 'table',
        headers: ['Layer', 'Responsibility', 'Examples'],
        rows: [
          ['**Presentation**', 'Display data, handle user input', 'Controllers, Views, REST endpoints'],
          ['**Business**', 'Core domain logic, rules, calculations', 'Services, use cases, workflows'],
          ['**Data Access**', 'CRUD operations, queries', 'Repositories, DAOs, O/RM'],
          ['**Database**', 'Persistence, transactions', 'SQL database, NoSQL, cache, APIs']
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'How Repository Fits In'
      },
      {
        type: 'paragraph',
        text: 'The Repository pattern is the standard way to implement the **Data Access Layer**. Business logic (services) depends on Repository interfaces, not concrete database implementations.'
      },
      {
        type: 'code',
        language: 'java',
        code: '// Presentation Layer\n@RestController\npublic class UserController {\n  @Autowired\n  private UserService service; // Depends on business layer\n  \n  @GetMapping(\"/users/{id}\")\n  public User getUser(@PathVariable Long id) {\n    return service.getUser(id);\n  }\n}\n\n// Business Layer\n@Service\npublic class UserService {\n  @Autowired\n  private UserRepository repo; // Depends on data access layer\n  \n  public User getUser(Long id) {\n    User user = repo.findById(id).orElse(null);\n    // Apply business logic here\n    return user;\n  }\n}\n\n// Data Access Layer\npublic interface UserRepository extends JpaRepository<User, Long> {\n  // Depends only on database\n}\n\n// Database Layer\n// (SQL, MongoDB, Redis, etc.)',
        filename: 'LayeredExample.java'
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
          '✓ Clear separation of concerns',
          '✓ Easy to understand and maintain',
          '✓ Independent development: teams work on different layers',
          '✓ Testing: each layer can be tested independently',
          '✗ **Big Ball of Mud risk:** Without discipline, layers become entangled',
          '✗ Performance overhead from layer-by-layer calls',
          '✗ Not ideal for very simple applications'
        ]
      },
      {
        type: 'callout',
        variant: 'important',
        title: 'Key Principle',
        text: 'Dependencies flow **downward only**. The Presentation layer never directly calls the Database. It must go through Business → Data Access. This maintains encapsulation and allows swapping implementations.'
      }
    ]
  },
  {
    id: 'chapter10-summary',
    title: 'Chapter 10: Summary & Key Takeaways',
    blocks: [
      {
        type: 'heading',
        level: 2,
        text: 'Architectural Patterns Summary'
      },
      {
        type: 'paragraph',
        text: 'This chapter covered high-level patterns for organizing entire applications. Unlike GoF patterns (which focus on classes and objects), architectural patterns define the overall structure of your system.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Patterns Covered'
      },
      {
        type: 'table',
        headers: ['Pattern', 'Problem', 'Key Benefit', 'Used In'],
        rows: [
          ['**MVC**', 'Separate UI, logic, data', 'Multiple views, testable logic', 'Rails, Spring, Django'],
          ['**MVP**', 'Isolate logic from UI', 'Testable presenter, passive view', 'Android, WinForms'],
          ['**MVVM**', 'Automatic view-model sync', 'Data binding, less boilerplate', 'Angular, Vue, WPF'],
          ['**Repository**', 'Decouple logic from persistence', 'Swappable storage, easy testing', 'Domain-driven design, Spring Data'],
          ['**Service Locator**', 'Centralized service lookup', '(Anti-pattern - use DI instead)', 'Legacy code'],
          ['**Layered**', 'Organize code into layers', 'Clear structure, team scalability', 'Enterprise apps']
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
          '**MVC = Controller-driven:** Controller handles input and updates Model. View observes changes.',
          '**MVP = Presenter-driven:** All logic in Presenter. View is completely passive.',
          '**MVVM = Data-binding-driven:** Framework automatically syncs View and ViewModel.',
          '**Repository = Abstraction:** Business logic depends only on Repository interface, not concrete storage.',
          '**Service Locator = Anti-pattern:** Use Dependency Injection instead.',
          '**Layered = Structure:** Presentation → Business → Data Access → Database. Dependencies flow downward.'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Choosing the Right Architecture'
      },
      {
        type: 'callout',
        variant: 'tip',
        title: 'Decision Flowchart',
        text: '1. **Is it a web app?** → Use MVC or Layered Architecture\n2. **Heavy UI, light logic?** → Use MVP\n3. **Modern SPA framework (React, Vue)?** → Use component-based + Redux/Vuex\n4. **Complex domain model?** → Use DDD + Repository\n5. **Enterprise app?** → Use Layered + Repository + Service Layer'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Final Wisdom'
      },
      {
        type: 'callout',
        variant: 'important',
        title: 'Remember',
        text: 'Architecture is not about following rules - it\'s about managing complexity. Choose patterns that:\n- Keep your code understandable\n- Allow independent testing\n- Enable team collaboration\n- Support future changes\n\nSimple projects don\'t need complex architecture. Complex projects will fail without it.'
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
          'Study how your favorite frameworks implement these patterns',
          'Practice refactoring code into layered architecture',
          'Experiment with Repository pattern in a side project',
          'Learn Dependency Injection (Spring, Guice, Dagger)',
          'Explore Domain-Driven Design (DDD) for complex domains'
        ]
      }
    ]
  }
];
