export const topQuestions = [
  {
    id: 1,
    difficulty: 'easy',
    q: 'What is the Mediator pattern?',
    a: 'The Mediator pattern defines an object that encapsulates how a set of objects interact, promoting loose coupling by keeping objects from referring to each other explicitly and letting the mediator handle their communication.'
  },
  {
    id: 2,
    difficulty: 'easy',
    q: 'What is the Memento pattern?',
    a: 'The Memento pattern captures and externalizes an object\'s internal state without violating encapsulation, allowing the object to be restored to this state later.'
  },
  {
    id: 3,
    difficulty: 'easy',
    q: 'What is the Observer pattern?',
    a: 'The Observer pattern defines a one-to-many dependency between objects such that when one object changes state, all its dependents are notified and updated automatically.'
  },
  {
    id: 4,
    difficulty: 'easy',
    q: 'How does Observer implement loose coupling?',
    a: 'Observer achieves loose coupling by having the Subject know only about the Observer interface, not concrete Observer implementations. Observers can be added or removed dynamically without the Subject needing to know their specific types.'
  },
  {
    id: 5,
    difficulty: 'easy',
    q: 'What is the difference between Mediator and Observer?',
    a: 'Observer is one-to-many where many objects watch one subject\'s state changes. Mediator is many-to-many where a central mediator coordinates communication between multiple objects that would otherwise communicate directly.'
  },
  {
    id: 6,
    difficulty: 'medium',
    q: 'Explain the Originator, Memento, and Caretaker roles in the Memento pattern.',
    a: 'Originator is the object whose state is saved; it creates a Memento containing its state snapshot. Memento is an opaque object holding the state (no public access). Caretaker stores and retrieves Mementos without accessing or modifying their contents.'
  },
  {
    id: 7,
    difficulty: 'medium',
    q: 'What are push vs pull notification models in Observer?',
    a: 'Push model: Subject sends all relevant state to observers in the notification call. Pull model: Subject only notifies observers of a change; observers then request the specific state they need from the subject.'
  },
  {
    id: 8,
    difficulty: 'medium',
    q: 'When should you use Mediator vs direct object communication?',
    a: 'Use Mediator when you have complex, many-to-many interactions between objects that would create tight coupling. Direct communication works for simple, one-to-one relationships; Mediator prevents communication complexity from spreading.'
  },
  {
    id: 9,
    difficulty: 'medium',
    q: 'How do you implement undo functionality with the Memento pattern?',
    a: 'The Caretaker maintains a stack of Mementos. On each state-changing action, a new Memento is created and pushed onto the stack. Undo pops from the stack and restores the Originator to that saved state.'
  },
  {
    id: 10,
    difficulty: 'medium',
    q: 'How does Java\'s PropertyChangeListener exemplify the Observer pattern?',
    a: 'PropertyChangeListener is the Observer interface. A bean (Subject) fires PropertyChangeEvents when properties change, notifying all registered listeners without knowing their specific implementations.'
  },
  {
    id: 11,
    difficulty: 'medium',
    q: 'What causes memory leaks in Observer patterns?',
    a: 'If observers are not unregistered when no longer needed, they remain in the subject\'s observer list, preventing garbage collection even if the observer is no longer referenced elsewhere in the application.'
  },
  {
    id: 12,
    difficulty: 'medium',
    q: 'How does Memento preserve encapsulation?',
    a: 'Memento is opaque to the Caretaker—it cannot inspect or modify the captured state. Only the Originator can access the state within a Memento, maintaining the object\'s internal structure as private.'
  },
  {
    id: 13,
    difficulty: 'medium',
    q: 'How can an event bus be considered a Mediator?',
    a: 'An event bus is a central coordinator where components publish events and subscribe to events without direct references to each other, reducing coupling and centralizing interaction logic.'
  },
  {
    id: 14,
    difficulty: 'medium',
    q: 'What are thread safety concerns with the Observer pattern?',
    a: 'Multiple threads registering/unregistering observers or notifying simultaneously can cause race conditions. Synchronization or thread-safe collections are needed to ensure consistent observer lists and notifications.'
  },
  {
    id: 15,
    difficulty: 'medium',
    q: 'What are the pros and cons of serialization-based Memento?',
    a: 'Pros: Works for any serializable object without custom code. Cons: Serialization overhead, deep copy cost, version compatibility issues, and may not capture transient or runtime-computed state.'
  },
  {
    id: 16,
    difficulty: 'hard',
    q: 'How is Observer a foundation of reactive programming?',
    a: 'Reactive programming chains Observables where each step transforms and notifies downstream observers, creating a declarative, asynchronous data flow model where computations react to upstream value changes.'
  },
  {
    id: 17,
    difficulty: 'hard',
    q: 'Why does the Mediator pattern risk becoming a God Object anti-pattern?',
    a: 'A Mediator that coordinates many objects and handles all their interactions becomes bloated, knowing too much and doing too much. It can violate single responsibility and become hard to maintain.'
  },
  {
    id: 18,
    difficulty: 'hard',
    q: 'How does Memento handle complex object graphs with nested references?',
    a: 'Deep copying of the entire graph ensures all nested objects are captured. Alternatively, use graph traversal algorithms or serialize references by ID, then rebuild the graph structure during restoration.'
  },
  {
    id: 19,
    difficulty: 'hard',
    q: 'How does Event-Driven Architecture relate to the Observer pattern?',
    a: 'Event-Driven Architecture applies Observer at scale: events are published to a central bus, multiple subscribers consume them asynchronously, decoupling producers from consumers and enabling scalable, loosely-coupled systems.'
  },
  {
    id: 20,
    difficulty: 'hard',
    q: 'Compare Mediator, Memento, and Observer for managing state changes.',
    a: 'Observer notifies about state changes; Mediator coordinates the responses; Memento captures historical states. Together they enable complex state management: Observer detects changes, Mediator orchestrates responses, Memento enables time-travel undo.'
  }
];

export const quiz = [
  {
    id: 1,
    q: 'Which pattern has an abstract Memento that is opaque to clients?',
    options: ['Observer', 'Mediator', 'Memento', 'Strategy'],
    answer: 2,
    explanation: 'Memento is designed to be opaque—only the Originator can access its state; the Caretaker treats it as a black box.'
  },
  {
    id: 2,
    q: 'In Observer, what is the primary role of the Subject?',
    options: ['Execute observer logic', 'Maintain and notify observers', 'Store historical state', 'Mediate observer communication'],
    answer: 1,
    explanation: 'The Subject maintains a list of observers and notifies them when its state changes.'
  },
  {
    id: 3,
    q: 'Which pattern creates a star topology of communication?',
    options: ['Observer', 'Mediator', 'Memento', 'Strategy'],
    answer: 1,
    explanation: 'Mediator creates a central hub (star) through which all object communication flows, reducing direct coupling.'
  },
  {
    id: 4,
    q: 'In the push notification model, who decides what state data to send?',
    options: ['The Observer', 'The Subject', 'The Caretaker', 'A shared interface'],
    answer: 1,
    explanation: 'In push, the Subject decides which state to send in the notify call, minimizing observer queries.'
  },
  {
    id: 5,
    q: 'How does Java\'s PropertyChangeListener use the Observer pattern?',
    options: ['It is the Mediator', 'It is the Observer interface', 'It is the Subject', 'It is the Memento'],
    answer: 1,
    explanation: 'PropertyChangeListener is the Observer interface that beans notify when properties change.'
  },
  {
    id: 6,
    q: 'What prevents memory leaks in Observer implementations?',
    options: ['Using Memento to save state', 'Unregistering observers when done', 'Using a Mediator', 'Serializing observers'],
    answer: 1,
    explanation: 'Observers must be explicitly unregistered to allow garbage collection and prevent memory leaks.'
  },
  {
    id: 7,
    q: 'How does an undo stack work with the Memento pattern?',
    options: ['Push new Mementos, pop to restore state', 'Serialize and deserialize objects', 'Use a Mediator to coordinate', 'Notify all observers of changes'],
    answer: 0,
    explanation: 'The Caretaker (undo manager) pushes Mementos on each action and pops them to restore prior states.'
  },
  {
    id: 8,
    q: 'Which best describes the relationship between Mediator and Observer?',
    options: ['They are the same pattern', 'Mediator is one-to-many; Observer is many-to-many', 'Observer is one-to-many; Mediator is many-to-many', 'They serve opposite purposes'],
    answer: 2,
    explanation: 'Observer is one subject notifying many observers. Mediator is many objects coordinating through a central hub.'
  },
  {
    id: 9,
    q: 'What is a key advantage of Memento over direct cloning for undo?',
    options: ['Faster execution', 'Encapsulation of state; opaque to caretaker', 'Less memory usage', 'No need for Originator'],
    answer: 1,
    explanation: 'Memento preserves encapsulation by keeping state opaque to the Caretaker and Originator.'
  },
  {
    id: 10,
    q: 'In Mediator, what happens when object A wants to communicate with object B?',
    options: ['A calls B directly', 'A notifies all observers', 'A sends to Mediator, Mediator relays to B', 'B watches A\'s state changes'],
    answer: 2,
    explanation: 'Objects do not communicate directly; they send messages to the Mediator, which routes them appropriately.'
  },
  {
    id: 11,
    q: 'What is the Hollywood Principle as it relates to these patterns?',
    options: ['Use inheritance over composition', 'Let framework call you, not vice versa', 'Observer must be eager', 'Mediators must be stateless'],
    answer: 1,
    explanation: 'Observer and Mediator embody this: frameworks (Subject, Mediator) call registered objects when needed.'
  },
  {
    id: 12,
    q: 'Which pattern is best for capturing a snapshot of an object\'s state?',
    options: ['Observer', 'Mediator', 'Memento', 'Strategy'],
    answer: 2,
    explanation: 'Memento\'s sole purpose is to capture and store an object\'s state without violating encapsulation.'
  },
  {
    id: 13,
    q: 'How does reactive programming use Observer?',
    options: ['Chains Observables with transformations and async notifications', 'Mediates between producers and consumers', 'Stores past states', 'Encapsulates algorithms'],
    answer: 0,
    explanation: 'Reactive programming chains Observables, where each notifies downstream observers with transformed data.'
  },
  {
    id: 14,
    q: 'What is a risk of a large Mediator object?',
    options: ['Memory leak', 'Becoming a God Object', 'Observer bloat', 'Memento bloat'],
    answer: 1,
    explanation: 'A Mediator that coordinates many objects risks becoming a God Object, violating single responsibility.'
  },
  {
    id: 15,
    q: 'What is a con of serialization-based Memento?',
    options: ['No encapsulation', 'High serialization overhead and version compatibility issues', 'Cannot be used with nested objects', 'Requires manual state capture'],
    answer: 1,
    explanation: 'Serialization overhead, version compatibility, and inability to capture transient state are limitations.'
  }
];

export const shortNotes = {
  title: 'Behavioral Patterns II: Mediator, Memento, Observer',
  color: 'amber',
  keyPoints: [
    {
      icon: '📢',
      title: 'Observer Pattern',
      text: 'One-to-many notification: Subject maintains observers; when state changes, all observers are notified. Enables loose coupling via the Observer interface.'
    },
    {
      icon: '💾',
      title: 'Memento Pattern',
      text: 'Captures state snapshots (Memento) without violating encapsulation. Originator creates Memento; Caretaker stores it (opaque). Enables undo/redo and time-travel.'
    },
    {
      icon: '🔀',
      title: 'Mediator Pattern',
      text: 'Central coordinator (Mediator) handles many-to-many communication. Objects send requests to Mediator; Mediator routes/relays. Reduces direct coupling and complex interactions.'
    },
    {
      icon: '🔗',
      title: 'Observer & Loose Coupling',
      text: 'Subject knows only about Observer interface, not concrete types. Observers added/removed dynamically. Subject and Observers can be developed independently.'
    },
    {
      icon: '📊',
      title: 'Push vs Pull Notifications',
      text: 'Push: Subject sends state in notify() call. Pull: Subject only signals change; observers query what they need. Trade-off between granularity and subject knowledge.'
    },
    {
      icon: '⚙️',
      title: 'Mediator vs Observer',
      text: 'Observer: one Subject, many Observers. Mediator: many Colleagues, one Mediator coordinator. Use Mediator when interactions are complex; Observer for broadcast notifications.'
    },
    {
      icon: '🚫',
      title: 'Memory Leaks in Observer',
      text: 'Unregistered observers remain in Subject\'s list, preventing garbage collection. Always unsubscribe when observer is no longer needed.'
    },
    {
      icon: '↩️',
      title: 'Undo with Memento',
      text: 'Caretaker (undo manager) maintains a stack of Mementos. On action, push new Memento; on undo, pop and restore Originator to that state.'
    }
  ],
  quickFacts: [
    'PropertyChangeListener is Observer pattern in Java Beans.',
    'EventBus (Guava, Spring) is a Mediator for decoupled event handling.',
    'Memento must be opaque to enforce encapsulation.',
    'Observer is foundation of reactive programming (RxJava, Reactor).',
    'Mediator risks becoming a God Object if it knows/does too much.',
    'Thread safety is critical for Observer notify loops.',
    'Serialization-based Memento has version compatibility overhead.'
  ],
  rememberThis: [
    'Observer: one-to-many, Subject notifies. Mediator: many-to-many, central hub.',
    'Memento preserves encapsulation; Caretaker cannot access or modify state.',
    'Use Mediator when object interactions are complex; Observer for simple state broadcasts.',
    'Always unregister observers to prevent memory leaks.'
  ]
};
