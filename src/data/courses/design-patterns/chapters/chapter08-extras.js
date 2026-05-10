export const topQuestions = [
  {
    id: 1,
    difficulty: 'easy',
    q: 'What is the State pattern?',
    a: 'The State pattern allows an object to alter its behavior when its internal state changes. The object appears to change its class by delegating requests to different State objects that handle behavior specific to their state.'
  },
  {
    id: 2,
    difficulty: 'easy',
    q: 'What is the Strategy pattern?',
    a: 'The Strategy pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable. Strategy lets the algorithm vary independently from clients that use it.'
  },
  {
    id: 3,
    difficulty: 'easy',
    q: 'What is the Template Method pattern?',
    a: 'The Template Method pattern defines the skeleton of an algorithm in a base class but lets subclasses override specific steps without changing the algorithm\'s overall structure.'
  },
  {
    id: 4,
    difficulty: 'easy',
    q: 'How does the State pattern eliminate large if-else chains?',
    a: 'Instead of conditional logic checking state and performing different actions, each state is encapsulated in its own State object that implements the required behavior, eliminating the need for large if-else chains.'
  },
  {
    id: 5,
    difficulty: 'easy',
    q: 'What is the main difference between State and Strategy patterns?',
    a: 'State uses state transitions controlled by the Context; states may change during the object\'s lifetime. Strategy is client-selected; the algorithm is chosen before use and typically remains fixed during execution.'
  },
  {
    id: 6,
    difficulty: 'medium',
    q: 'Who is responsible for managing state transitions in the State pattern?',
    a: 'State transitions can be managed by either the Context (simpler) or the State objects themselves (more flexible). When states manage transitions, they create the next State and pass it to the Context.'
  },
  {
    id: 7,
    difficulty: 'medium',
    q: 'How does Strategy align with the Open/Closed Principle?',
    a: 'Strategy is open for extension (add new Strategy subclasses) and closed for modification (existing client code does not change). New algorithms can be added without modifying the Context.'
  },
  {
    id: 8,
    difficulty: 'medium',
    q: 'What is the Hollywood Principle as it applies to Template Method?',
    a: 'The Hollywood Principle states "Don\'t call us, we\'ll call you." Template Method embodies this: the base class calls hook methods that subclasses override, not vice versa.'
  },
  {
    id: 9,
    difficulty: 'medium',
    q: 'How is Comparator an example of the Strategy pattern in Java?',
    a: 'Comparator encapsulates different sorting/comparison strategies. Collections.sort() accepts a Comparator, allowing the sorting algorithm to vary by providing different Comparator implementations without changing the sort method.'
  },
  {
    id: 10,
    difficulty: 'medium',
    q: 'What is the purpose of hook methods in Template Method?',
    a: 'Hook methods are optional overridable steps within the template. They provide extension points for subclasses to customize algorithm behavior without overriding the entire template method structure.'
  },
  {
    id: 11,
    difficulty: 'medium',
    q: 'What are thread safety concerns with the State pattern?',
    a: 'If multiple threads access the Context and trigger state transitions concurrently, race conditions can occur when changing the current State. Synchronization or atomic state updates are needed.'
  },
  {
    id: 12,
    difficulty: 'medium',
    q: 'How does Strategy benefit from Java 8+ lambdas?',
    a: 'Functional interfaces allow Strategy implementations to be passed as lambda expressions, reducing boilerplate. For example, Collections.sort(list, (a, b) -> a.compareTo(b)) instead of an explicit Comparator class.'
  },
  {
    id: 13,
    difficulty: 'medium',
    q: 'What is the key difference between Template Method and Strategy in terms of control?',
    a: 'Template Method: the algorithm structure is in the base class; subclasses fill in steps. Strategy: the client selects the entire algorithm implementation; the Context delegates to the selected Strategy.'
  },
  {
    id: 14,
    difficulty: 'medium',
    q: 'Why is the State pattern preferable to a large switch statement?',
    a: 'State encapsulates behavior per state, improves code organization, enables easy addition of new states, and follows Open/Closed Principle. Switch statements are brittle and hard to extend.'
  },
  {
    id: 15,
    difficulty: 'medium',
    q: 'How is the Template Method pattern used in HttpServlet?',
    a: 'HttpServlet.service() is the template; doGet(), doPost(), etc., are hook methods that subclasses override. The template handles common request processing; hooks customize per HTTP method.'
  },
  {
    id: 16,
    difficulty: 'hard',
    q: 'When does a State pattern implementation become a State Machine?',
    a: 'When state transitions are formally defined, often with state diagrams, and transitions are explicitly managed (Context or State-driven), the pattern evolves into a full State Machine with defined transition rules and potential final states.'
  },
  {
    id: 17,
    difficulty: 'hard',
    q: 'What performance implications does Strategy have due to object creation?',
    a: 'Creating a new Strategy instance per use has overhead. Strategies can be reused/cached if stateless, or flyweighted to reduce allocation. This overhead is typically negligible unless Strategy selection happens millions of times.'
  },
  {
    id: 18,
    difficulty: 'hard',
    q: 'What is the inheritance coupling trade-off in Template Method?',
    a: 'Template Method requires subclassing; subclasses are tightly coupled to the base class structure. If the template changes, all subclasses may be affected. This can be mitigated by composition/delegation strategies.'
  },
  {
    id: 19,
    difficulty: 'hard',
    q: 'How would you refactor a large switch statement into the State pattern?',
    a: 'Create a State interface with a handle() method. Create concrete State classes for each switch case. In the Context, replace the switch with state.handle(). Manage state transitions within State classes or the Context.'
  },
  {
    id: 20,
    difficulty: 'hard',
    q: 'Compare State, Strategy, and Template Method for algorithm variation.',
    a: 'State: behavior varies by context state; transitions over time. Strategy: behavior selected by client; fixed during execution. Template Method: algorithm structure is fixed; steps vary by subclass. Choose based on when variation occurs.'
  }
];

export const quiz = [
  {
    id: 1,
    q: 'What are the two main roles in the State pattern?',
    options: ['Algorithm and Context', 'Context and State', 'Client and Server', 'Subject and Observer'],
    answer: 1,
    explanation: 'Context delegates behavior to State objects. The Context is the object whose behavior varies; States encapsulate behavior for each state.'
  },
  {
    id: 2,
    q: 'In a state diagram, what does an arrow represent?',
    options: ['A method call', 'A state transition', 'An instance variable', 'A class dependency'],
    answer: 1,
    explanation: 'Arrows in state diagrams represent transitions from one state to another, often triggered by events or conditions.'
  },
  {
    id: 3,
    q: 'What participants are required in the Strategy pattern?',
    options: ['Context, State, ConcreteState', 'Strategy, ConcreteStrategy, Context', 'Client, Server, Mediator', 'Observer, Subject, Listener'],
    answer: 1,
    explanation: 'Strategy pattern requires: Strategy (interface), ConcreteStrategy (implementations), and Context (client of Strategy).'
  },
  {
    id: 4,
    q: 'In Template Method, what is the relationship between abstract and concrete methods?',
    options: ['Concrete methods define steps; abstract methods define the structure', 'Abstract methods define the skeleton; concrete subclasses implement steps', 'They are unrelated', 'Concrete methods override abstract completely'],
    answer: 1,
    explanation: 'The template method is often abstract or concrete but defines the algorithm skeleton; subclasses override hook methods to implement steps.'
  },
  {
    id: 5,
    q: 'How is Java\'s Comparator an example of Strategy?',
    options: ['It stores an object\'s state', 'It encapsulates a comparison algorithm and allows client selection', 'It defines state transitions', 'It extends a base template'],
    answer: 1,
    explanation: 'Comparator is a Strategy interface; different Comparator implementations (ConcreteStrategies) encapsulate different comparison algorithms.'
  },
  {
    id: 6,
    q: 'What is the Hollywood Principle?',
    options: ['Use only inheritance', 'Don\'t call us, we\'ll call you', 'Delegation over composition', 'Interface segregation'],
    answer: 1,
    explanation: 'The Hollywood Principle: the framework/base class calls subclass/registered methods, not vice versa. Template Method and Observer embody this.'
  },
  {
    id: 7,
    q: 'What do hook methods in Template Method enable?',
    options: ['State transitions', 'Customization points without overriding the full template', 'Algorithm selection', 'Observer notification'],
    answer: 1,
    explanation: 'Hook methods are optional steps subclasses can override to customize behavior while preserving the algorithm skeleton.'
  },
  {
    id: 8,
    q: 'When choosing between State and Strategy, what is the key decision?',
    options: ['Whether to use inheritance', 'Whether behavior changes at runtime vs selected at creation', 'Whether to use interfaces', 'Performance requirements'],
    answer: 1,
    explanation: 'State: behavior varies over the object\'s lifetime via transitions. Strategy: behavior is selected once and typically remains fixed. Choose based on when variation occurs.'
  },
  {
    id: 9,
    q: 'How does AbstractList in Java demonstrate the Template Method pattern?',
    options: ['It stores list state', 'It defines the structure for list operations; subclasses implement backing storage', 'It uses Strategy for sorting', 'It defines state transitions'],
    answer: 1,
    explanation: 'AbstractList provides the template (add, remove, etc.) that calls abstract methods like get() which concrete subclasses override.'
  },
  {
    id: 10,
    q: 'What is a risk of excessive hook methods in Template Method?',
    options: ['Memory leak', 'Too many extension points; loss of algorithm coherence', 'State leak', 'Observer bloat'],
    answer: 1,
    explanation: 'Too many hooks can make the algorithm structure unclear and hard to follow. Hooks should be strategic, not pervasive.'
  },
  {
    id: 11,
    q: 'Can Strategy implementations be stateless and reused?',
    options: ['No, each Strategy needs unique state', 'Yes, if stateless, a single instance can be reused (Flyweight)', 'Only in Java 8+', 'Only with lambdas'],
    answer: 1,
    explanation: 'Stateless Strategy instances can be shared (Flyweight pattern), reducing object creation overhead.'
  },
  {
    id: 12,
    q: 'What happens if a State object modifies the Context during a request?',
    options: ['It violates encapsulation', 'It triggers recursive calls', 'It can cause unexpected behavior; careful design is needed', 'It is the intended use'],
    answer: 2,
    explanation: 'States can trigger transitions or modify Context state, but this must be carefully managed to avoid race conditions or infinite loops.'
  },
  {
    id: 13,
    q: 'How does Template Method support the Open/Closed Principle?',
    options: ['It does not', 'New subclasses can extend without modifying the template (open for extension, closed for modification)', 'It forbids subclassing', 'It requires rewriting the base class'],
    answer: 1,
    explanation: 'The template is closed for modification (base class is stable); the algorithm is open for extension via subclass overrides.'
  },
  {
    id: 14,
    q: 'What is the primary purpose of the State pattern?',
    options: ['Encapsulate algorithms', 'Eliminate conditional logic and simplify behavior changes by state', 'Reduce memory usage', 'Improve performance'],
    answer: 1,
    explanation: 'State\'s primary purpose is to eliminate large if-else chains and encapsulate state-specific behavior in separate objects.'
  },
  {
    id: 15,
    q: 'How do lambdas simplify Strategy in Java 8+?',
    options: ['They replace the Strategy interface', 'They allow inline algorithm definition without explicit Strategy classes', 'They enable state management', 'They provide automatic type conversion'],
    answer: 1,
    explanation: 'Lambda expressions can implement functional Strategy interfaces concisely, reducing boilerplate for simple algorithms.'
  }
];

export const shortNotes = {
  title: 'Behavioral Patterns III: State, Strategy, Template Method',
  color: 'indigo',
  keyPoints: [
    {
      icon: '🔄',
      title: 'State Pattern',
      text: 'Object delegates behavior to State objects based on current state. Eliminates if-else chains. Encapsulates state-specific behavior. States may transition over time.'
    },
    {
      icon: '⚡',
      title: 'Strategy Pattern',
      text: 'Encapsulates interchangeable algorithms in separate classes. Client selects algorithm at runtime. Selected strategy is typically fixed during execution. Enables Open/Closed Principle.'
    },
    {
      icon: '📋',
      title: 'Template Method Pattern',
      text: 'Base class defines algorithm skeleton; subclasses override hook methods to implement steps. Eliminates code duplication. Preserves algorithm structure across variations.'
    },
    {
      icon: '🎯',
      title: 'State vs Strategy',
      text: 'State: behavior changes over object\'s lifetime via transitions. Strategy: algorithm chosen at creation, remains fixed. Use State for state-driven behavior; Strategy for algorithm selection.'
    },
    {
      icon: '🪝',
      title: 'Hook Methods',
      text: 'Optional customization points in Template Method. Subclasses override hooks to add behavior. Base class calls hooks; subclasses implement details. Enables granular extension.'
    },
    {
      icon: '🔐',
      title: 'Comparator as Strategy',
      text: 'Java\'s Comparator interface is a Strategy. Collections.sort() delegates comparison logic to Comparator. Allows different sorting/comparison strategies without changing sort implementation.'
    },
    {
      icon: '🚫',
      title: 'Risks and Trade-offs',
      text: 'State: thread safety concerns during transitions. Strategy: object creation overhead. Template Method: inheritance coupling; changes affect subclasses. Choose based on trade-offs.'
    },
    {
      icon: '📝',
      title: 'Modern Java Simplifications',
      text: 'Java 8+ lambdas reduce Strategy boilerplate by allowing inline algorithm definitions. Functional interfaces enable concise Strategy implementations without explicit classes.'
    }
  ],
  quickFacts: [
    'HttpServlet uses Template Method: service() is template; doGet(), doPost() are hooks.',
    'State pattern is ideal for finite state machines (FSM) and workflow engines.',
    'AbstractList demonstrates Template Method: defines structure; subclasses override get(), set().',
    'Strategy requires client to know all available algorithms; State hides transitions.',
    'Stateless Strategies can be cached/reused as Flyweights to reduce allocation overhead.',
    'Template Method creates tight coupling via inheritance; use carefully for deep hierarchies.',
    'Hollywood Principle: framework calls you; applicable to State, Strategy, Template Method.'
  ],
  rememberThis: [
    'State: transitions over time. Strategy: selected upfront. Template Method: steps in subclasses.',
    'Use State for if-else hell based on state. Use Strategy for if-else hell based on algorithm choice.',
    'Template Method: base class calls hooks; subclasses fill in steps. Preserve skeleton, vary steps.',
    'Comparator is Strategy; Collections.sort() lets client choose comparison logic.'
  ]
};
