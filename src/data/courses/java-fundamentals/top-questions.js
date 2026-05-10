// Top 100 Java Interview Questions - Course Level

export const topQuestions = [
  // ── FOUNDATIONS ───────────────────────────────────────────────────────
  {
    id: 1, chapter: 1, difficulty: 'easy',
    q: 'What is the difference between JDK, JRE, and JVM?',
    a: 'JVM (Java Virtual Machine) executes bytecode and provides the runtime environment. JRE (Java Runtime Environment) = JVM + core libraries needed to run Java programs. JDK (Java Development Kit) = JRE + compiler (javac) + debugger + other dev tools. You need JDK to develop, JRE to run.',
    tags: ['jvm', 'jdk', 'jre']
  },
  {
    id: 2, chapter: 1, difficulty: 'easy',
    q: 'Explain "Write Once, Run Anywhere" (WORA).',
    a: 'Java source code compiles to platform-independent bytecode (.class files). The JVM on each OS interprets/JIT-compiles this bytecode to native machine code. So one .class file runs on any OS that has a JVM — no recompilation needed.',
    tags: ['bytecode', 'platform']
  },
  {
    id: 3, chapter: 1, difficulty: 'medium',
    q: 'What are the JVM memory areas (runtime data areas)?',
    a: 'Heap (object storage, GC-managed), Stack (per-thread, method frames, local vars), Method Area/Metaspace (class metadata, static fields), PC Register (per-thread instruction pointer), Native Method Stack (native code). Heap and Method Area are shared; Stack/PC/NativeStack are per-thread.',
    tags: ['jvm', 'memory', 'heap', 'stack']
  },
  {
    id: 4, chapter: 1, difficulty: 'medium',
    q: 'What is the JIT compiler and how does it improve performance?',
    a: 'JIT (Just-In-Time) compiler converts hotspot bytecode to native machine code at runtime. Instead of interpreting every instruction, frequently executed code ("hot paths") is compiled once and cached as native code, dramatically improving execution speed. The JVM profiles code to decide what to JIT compile.',
    tags: ['jit', 'performance']
  },
  {
    id: 5, chapter: 1, difficulty: 'easy',
    q: 'What is the correct signature of the main() method in Java?',
    a: '`public static void main(String[] args)` — must be public (accessible by JVM), static (called without instantiation), void (returns nothing), with a String array parameter. `String... args` (varargs) is also valid since Java 5. The class name must match the filename for public classes.',
    tags: ['main', 'entry-point']
  },
  {
    id: 6, chapter: 1, difficulty: 'medium',
    q: 'What is garbage collection in Java? What are the main GC algorithms?',
    a: 'GC automatically reclaims heap memory occupied by objects with no live references. Main algorithms: Serial GC (single-threaded, small apps), Parallel GC (multi-threaded throughput), G1 GC (default Java 9+, low latency, region-based), ZGC and Shenandoah (ultra-low pause, < 1ms). GC cannot be forced but can be hinted with System.gc().',
    tags: ['gc', 'memory', 'performance']
  },
  {
    id: 7, chapter: 1, difficulty: 'easy',
    q: 'What is classpath in Java?',
    a: 'Classpath tells the JVM where to find .class files and JARs. Set via -cp/-classpath flag, CLASSPATH env var, or in manifests. From Java 9+, the module system largely replaces classpath with module path for modular apps.',
    tags: ['classpath', 'jvm']
  },
  {
    id: 8, chapter: 1, difficulty: 'hard',
    q: 'What is the Java module system (Project Jigsaw, Java 9+)?',
    a: 'Modules are named, self-describing collections of packages with explicit dependencies declared in module-info.java. Benefits: strong encapsulation (only exported packages are accessible), reliable configuration (no classpath hell), smaller runtimes (jlink). A module declares: `module com.example { requires other.module; exports com.example.api; }`',
    tags: ['modules', 'java9']
  },

  // ── DATA TYPES & OPERATORS ────────────────────────────────────────────
  {
    id: 9, chapter: 2, difficulty: 'easy',
    q: 'What are the 8 primitive types in Java and their sizes?',
    a: 'byte (8-bit), short (16-bit), int (32-bit), long (64-bit), float (32-bit IEEE 754), double (64-bit IEEE 754), char (16-bit Unicode), boolean (JVM-dependent, typically 1 bit logically). All are signed except char.',
    tags: ['primitives', 'types']
  },
  {
    id: 10, chapter: 2, difficulty: 'medium',
    q: 'What is autoboxing and unboxing? What are the pitfalls?',
    a: 'Autoboxing: automatic conversion of primitive → wrapper (int → Integer). Unboxing: wrapper → primitive. Pitfalls: (1) NullPointerException when unboxing null: `Integer x = null; int y = x; // NPE`. (2) Performance overhead in tight loops. (3) `==` compares references for Integer outside [-128,127] cache range — use .equals().',
    tags: ['autoboxing', 'wrappers', 'Integer']
  },
  {
    id: 11, chapter: 2, difficulty: 'medium',
    q: 'Explain integer overflow in Java.',
    a: 'Java integers wrap around silently on overflow. `Integer.MAX_VALUE + 1 == Integer.MIN_VALUE` (-2147483648). No exception is thrown. Use `Math.addExact()` for overflow-detecting arithmetic, or use `long`/`BigInteger` for large numbers.',
    tags: ['overflow', 'int', 'math']
  },
  {
    id: 12, chapter: 2, difficulty: 'easy',
    q: 'What is the difference between == and .equals() for Strings?',
    a: '`==` compares object references (memory address). `.equals()` compares content. String literals from the pool may share the same reference, making `==` accidentally work, but `new String("x") == "x"` is false. Always use `.equals()` for content comparison. Use `.equalsIgnoreCase()` for case-insensitive.',
    tags: ['string', 'equals', 'comparison']
  },
  {
    id: 13, chapter: 2, difficulty: 'medium',
    q: 'What is String interning in Java?',
    a: 'The JVM maintains a String pool. String literals are automatically interned (stored once, shared). `String.intern()` explicitly adds a String to the pool and returns the pooled reference. This saves memory when many identical Strings exist. From Java 7+, the pool lives in the heap (not PermGen).',
    tags: ['string', 'pool', 'interning']
  },
  {
    id: 14, chapter: 2, difficulty: 'medium',
    q: 'What is the difference between `var` (Java 10+) and explicit type declaration?',
    a: '`var` enables local variable type inference — the compiler infers the type from the initializer. It is NOT dynamic typing; the type is fixed at compile time. Restrictions: cannot be used for fields, method params, return types, or without an initializer. `var list = new ArrayList<String>();` infers `ArrayList<String>`.',
    tags: ['var', 'type-inference', 'java10']
  },
  {
    id: 15, chapter: 2, difficulty: 'hard',
    q: 'Explain the difference between `>>` and `>>>` operators.',
    a: '`>>` is arithmetic (signed) right shift — fills leftmost bits with the sign bit (preserves sign for negative numbers). `>>>` is logical (unsigned) right shift — always fills with 0. Example: `-8 >> 1 = -4` (sign preserved), `-8 >>> 1 = 2147483644` (treated as unsigned). Use `>>>` for bit manipulation on negative numbers.',
    tags: ['operators', 'bitwise', 'shift']
  },
  {
    id: 16, chapter: 2, difficulty: 'medium',
    q: 'What is the difference between float and double? When should you use BigDecimal?',
    a: 'float has 7 significant decimal digits, double has 15-16. Both use binary floating-point and cannot represent values like 0.1 exactly. Use BigDecimal for financial/monetary calculations where exact decimal arithmetic is required. `0.1 + 0.2 == 0.3` is false with double; BigDecimal handles it correctly.',
    tags: ['float', 'double', 'BigDecimal', 'precision']
  },

  // ── CONTROL FLOW ──────────────────────────────────────────────────────
  {
    id: 17, chapter: 3, difficulty: 'easy',
    q: 'What is the enhanced switch expression (Java 14+)?',
    a: 'Switch expressions use `->` for arrow-case syntax (no fall-through, no break needed), return values, and support `yield`. Example: `int result = switch(day) { case MON, TUE -> 1; case WED -> 2; default -> { yield compute(day); } };`. Unlike statements, expressions must be exhaustive.',
    tags: ['switch', 'java14', 'expressions']
  },
  {
    id: 18, chapter: 3, difficulty: 'medium',
    q: 'What is the difference between break, continue, and return in loops?',
    a: '`break`: exits the innermost loop/switch entirely. `continue`: skips the current iteration, proceeds to next. `return`: exits the current method. Labeled break/continue (`break outerLoop;`) can target outer loops. Using labels is considered code smell — prefer refactoring to a method.',
    tags: ['break', 'continue', 'return', 'loops']
  },
  {
    id: 19, chapter: 3, difficulty: 'medium',
    q: 'When would you use a do-while loop instead of a while loop?',
    a: 'Use do-while when the loop body must execute at least once before the condition is checked. Classic example: user input validation — prompt once, then repeat if invalid. `do { input = scanner.nextLine(); } while (!isValid(input));`. A while loop would require duplicating the first execution.',
    tags: ['do-while', 'while', 'loops']
  },
  {
    id: 20, chapter: 3, difficulty: 'hard',
    q: 'What is pattern matching for switch (Java 21)?',
    a: 'Pattern matching in switch allows type patterns: `switch(obj) { case Integer i -> i * 2; case String s when s.length() > 5 -> s.toUpperCase(); case null -> "null"; default -> obj.toString(); }`. Supports guarded patterns with `when`, null handling, and exhaustiveness checking.',
    tags: ['pattern-matching', 'switch', 'java21']
  },
  {
    id: 21, chapter: 3, difficulty: 'easy',
    q: 'What is fall-through behavior in a switch statement?',
    a: 'In traditional switch statements, execution continues to the next case if there is no `break`. This is fall-through. It allows multiple cases to share code but is a common bug source. Switch expressions with `->` syntax eliminate fall-through entirely. Use `// fall-through` comment to document intentional fall-through.',
    tags: ['switch', 'fall-through']
  },

  // ── METHODS & ARRAYS ──────────────────────────────────────────────────
  {
    id: 22, chapter: 4, difficulty: 'easy',
    q: 'What is method overloading? How is the correct overload selected?',
    a: 'Multiple methods with the same name but different parameter lists (number, types, or order). Selected at compile time based on the static type of arguments — most specific matching signature wins. NOT based on return type. `void print(int x)` and `void print(double x)` are valid overloads.',
    tags: ['overloading', 'methods']
  },
  {
    id: 23, chapter: 4, difficulty: 'medium',
    q: 'Is Java pass-by-value or pass-by-reference?',
    a: 'Java is strictly pass-by-value. For primitives, the value is copied. For objects, the object reference is copied — the method receives a copy of the reference, not the object itself. So you can mutate the object\'s state through the copied reference, but you cannot make the caller\'s variable point to a different object.',
    tags: ['pass-by-value', 'references']
  },
  {
    id: 24, chapter: 4, difficulty: 'medium',
    q: 'What are varargs? What are the rules for using them?',
    a: 'Varargs (`Type... name`) allow a method to accept zero or more arguments of a type. Compiled to an array. Rules: only one varargs per method, must be the last parameter, can be passed an array directly. `void log(String fmt, Object... args)`. Prefer explicit overloads when you need 0, 1, or 2 params for clarity.',
    tags: ['varargs', 'methods']
  },
  {
    id: 25, chapter: 4, difficulty: 'medium',
    q: 'What is the difference between Array and ArrayList?',
    a: 'Array: fixed size, can hold primitives, O(1) access, no built-in add/remove. ArrayList: dynamic size, only objects (autoboxing for primitives), backed by array with auto-resize (1.5× growth), O(1) amortized add, O(n) insert/remove at middle. Use array for performance-critical fixed-size collections, ArrayList otherwise.',
    tags: ['array', 'ArrayList', 'collections']
  },
  {
    id: 26, chapter: 4, difficulty: 'hard',
    q: 'How does recursion work in Java? What causes StackOverflowError?',
    a: 'Each recursive call creates a new stack frame on the thread\'s call stack (local vars, return address). StackOverflowError occurs when the stack is exhausted — typically with infinite recursion or recursion depth exceeding JVM stack size (default ~512 frames, configurable with -Xss). Java lacks tail-call optimization, so deep recursion must use iteration or trampolining.',
    tags: ['recursion', 'stack', 'StackOverflow']
  },
  {
    id: 27, chapter: 4, difficulty: 'medium',
    q: 'What is Arrays.sort() time complexity? How does it work internally?',
    a: 'Arrays.sort() uses Dual-Pivot Quicksort for primitives (O(n log n) average, O(n²) worst case rare) and TimSort for objects (O(n log n) worst case, O(n) best case for nearly-sorted data, stable). Collections.sort() also uses TimSort. TimSort is a hybrid merge/insertion sort.',
    tags: ['sorting', 'Arrays', 'complexity']
  },
  {
    id: 28, chapter: 4, difficulty: 'medium',
    q: 'What is the difference between Arrays.copyOf() and array clone?',
    a: 'Both create a shallow copy. `Arrays.copyOf(arr, newLength)` allows specifying a new length (truncates or pads with defaults). `arr.clone()` copies the exact length. For 2D arrays, both are shallow — inner arrays are still shared. For deep copy of 2D arrays, use a loop with Arrays.copyOf() on each row.',
    tags: ['arrays', 'copy', 'clone']
  },

  // ── OOP ───────────────────────────────────────────────────────────────
  {
    id: 29, chapter: 5, difficulty: 'easy',
    q: 'What are the four pillars of OOP?',
    a: 'Encapsulation (bundling data + behavior, hiding internals via access modifiers), Abstraction (exposing only essential details via abstract classes/interfaces), Inheritance (extending behavior from parent class via `extends`), Polymorphism (one interface, many implementations — method overriding, dynamic dispatch).',
    tags: ['oop', 'fundamentals']
  },
  {
    id: 30, chapter: 5, difficulty: 'medium',
    q: 'What is the difference between method overriding and overloading?',
    a: 'Overloading: same name, different signature, resolved at compile time (static polymorphism). Overriding: same name + signature in subclass, resolved at runtime via vtable (dynamic polymorphism). Overriding requires @Override, same or wider access, same/covariant return type, and cannot override final/static/private methods.',
    tags: ['overriding', 'overloading', 'polymorphism']
  },
  {
    id: 31, chapter: 5, difficulty: 'medium',
    q: 'What is the difference between abstract class and interface?',
    a: 'Abstract class: can have state (fields), constructors, concrete methods, single inheritance. Interface: no state (only constants), no constructors, all methods abstract by default (but can have default/static methods since Java 8, private methods since Java 9), multiple implementation. Use abstract class for "is-a" with shared state; interface for "can-do" contracts.',
    tags: ['abstract', 'interface', 'design']
  },
  {
    id: 32, chapter: 5, difficulty: 'medium',
    q: 'Explain the SOLID principles.',
    a: 'S: Single Responsibility — one class, one reason to change. O: Open/Closed — open for extension, closed for modification (use inheritance/composition). L: Liskov Substitution — subclass must be substitutable for parent. I: Interface Segregation — many small interfaces > one fat interface. D: Dependency Inversion — depend on abstractions, not concretions.',
    tags: ['solid', 'design-principles']
  },
  {
    id: 33, chapter: 5, difficulty: 'hard',
    q: 'What is the diamond problem and how does Java solve it?',
    a: 'The diamond problem: if class D extends B and C, and both B and C override method from A, which implementation does D inherit? Java solves it by disallowing multiple class inheritance. With interfaces (Java 8+), if two interfaces provide conflicting default methods, the implementing class MUST override to resolve. Most-specific class wins over interface.',
    tags: ['diamond', 'multiple-inheritance', 'interface']
  },
  {
    id: 34, chapter: 5, difficulty: 'medium',
    q: 'What is the difference between composition and inheritance?',
    a: 'Inheritance ("is-a"): subclass inherits all public/protected members, creates tight coupling, fragile base class problem. Composition ("has-a"): class holds reference to another object, delegates to it — looser coupling, more flexible. Prefer composition over inheritance (Effective Java Item 18). Use inheritance only when the subtype truly IS the parent type.',
    tags: ['composition', 'inheritance', 'design']
  },
  {
    id: 35, chapter: 5, difficulty: 'medium',
    q: 'What is a static nested class vs inner class?',
    a: 'Static nested class: declared with `static`, no implicit reference to outer instance, can exist without outer instance — essentially a top-level class inside another for packaging. Inner (non-static) class: has implicit reference to outer instance, can access outer fields/methods directly. Anonymous/local classes are also inner classes. Inner classes prevent outer class GC — memory leak risk.',
    tags: ['nested-class', 'inner-class', 'static']
  },
  {
    id: 36, chapter: 5, difficulty: 'easy',
    q: 'What are access modifiers in Java?',
    a: '`private`: class only. `package-private` (default, no modifier): class + same package. `protected`: class + same package + subclasses. `public`: everywhere. For class members, use the most restrictive access that still works. Outer classes can only be `public` or package-private.',
    tags: ['access-modifiers', 'encapsulation']
  },
  {
    id: 37, chapter: 5, difficulty: 'medium',
    q: 'What is the `final` keyword and where can it be applied?',
    a: '`final` variable: can be assigned once (effectively constant; for references, the reference is constant, not the object). `final` method: cannot be overridden. `final` class: cannot be subclassed (e.g., String, Integer). Constructors cannot be final. Use final for immutability and to signal design intent.',
    tags: ['final', 'immutability']
  },
  {
    id: 38, chapter: 5, difficulty: 'hard',
    q: 'What is dynamic dispatch (virtual method invocation)?',
    a: 'At runtime, the JVM calls the overriding method based on the actual object type, not the declared reference type. `Animal a = new Dog(); a.speak();` calls Dog\'s speak(), not Animal\'s. Implemented via vtable (virtual method table) — each class has a table of method pointers. Static, private, and final methods are not dispatched dynamically.',
    tags: ['dynamic-dispatch', 'polymorphism', 'vtable']
  },
  {
    id: 39, chapter: 5, difficulty: 'medium',
    q: 'What is the `super` keyword?',
    a: '`super` references the parent class. Uses: (1) `super.method()` — call overridden parent method. (2) `super(args)` — call parent constructor (must be first statement in constructor). (3) `super.field` — access hidden parent field (rare, avoid). If a constructor doesn\'t explicitly call super(), the compiler inserts `super()` automatically.',
    tags: ['super', 'inheritance', 'constructor']
  },
  {
    id: 40, chapter: 5, difficulty: 'medium',
    q: 'What is constructor chaining?',
    a: 'Constructors can call other constructors using `this(args)` (same class) or `super(args)` (parent class). Must be the first statement. Enables DRY constructor logic. Example: `public Person(String name) { this(name, 0); }` calls `Person(String, int)`. Prevents duplication and ensures invariants are set once.',
    tags: ['constructor', 'chaining', 'this']
  },
  {
    id: 41, chapter: 5, difficulty: 'hard',
    q: 'What is the difference between early binding and late binding?',
    a: 'Early binding (static): method resolved at compile time — overloaded methods, static methods, final methods, private methods. Late binding (dynamic): method resolved at runtime based on actual object type — overridden instance methods. Late binding enables polymorphism. Fields are always early-bound (no field overriding, only hiding).',
    tags: ['binding', 'polymorphism', 'static']
  },
  {
    id: 42, chapter: 5, difficulty: 'medium',
    q: 'What is an immutable class? How do you create one?',
    a: 'An immutable object\'s state cannot change after construction. Steps: (1) `final` class. (2) All fields `private final`. (3) No setters. (4) Initialize all fields in constructor. (5) Defensive copies for mutable fields (Date, arrays). Benefits: thread-safe without synchronization, safe for caching/hashing. Examples: String, Integer, all wrapper types.',
    tags: ['immutable', 'thread-safety', 'design']
  },
  {
    id: 43, chapter: 5, difficulty: 'medium',
    q: 'What are the rules for `hashCode()` and `equals()`?',
    a: 'Contract: (1) If a.equals(b) then a.hashCode() == b.hashCode(). (2) a.equals(a) is true (reflexive). (3) a.equals(b) == b.equals(a) (symmetric). (4) Transitive. (5) Consistent — multiple calls return same result. hashCode does NOT need to be unique per-object. Violating the contract breaks HashMap/HashSet. Always override both together.',
    tags: ['hashCode', 'equals', 'contract']
  },
  {
    id: 44, chapter: 5, difficulty: 'hard',
    q: 'What is the `instanceof` operator and pattern matching (Java 16+)?',
    a: '`instanceof` checks if an object is an instance of a type (including subtypes), returns false for null. Java 16 pattern matching: `if (obj instanceof String s) { s.toUpperCase(); }` — no cast needed, s is in scope. Java 21 allows pattern matching in switch. Replaces verbose `instanceof + cast` patterns.',
    tags: ['instanceof', 'pattern-matching', 'java16']
  },
  {
    id: 45, chapter: 5, difficulty: 'medium',
    q: 'What are records in Java (Java 16+)?',
    a: 'Records are immutable data classes. `record Point(int x, int y) {}` auto-generates: constructor, accessors (x(), y()), equals(), hashCode(), toString(). Fields are `private final`. Records can have additional methods and implement interfaces but cannot extend classes. Ideal for DTOs and value objects.',
    tags: ['records', 'java16', 'immutable']
  },
  {
    id: 46, chapter: 5, difficulty: 'medium',
    q: 'What are sealed classes (Java 17+)?',
    a: 'Sealed classes restrict which classes can extend them. `sealed class Shape permits Circle, Rectangle {}`. Permitted subclasses must be `final`, `sealed`, or `non-sealed`. Enables exhaustive pattern matching — compiler can verify all cases are handled. Useful for modeling closed hierarchies like ASTs or domain types.',
    tags: ['sealed', 'java17', 'pattern-matching']
  },
  {
    id: 47, chapter: 5, difficulty: 'easy',
    q: 'What is the `this` keyword?',
    a: '`this` is a reference to the current object instance. Uses: (1) Disambiguate field from local var: `this.name = name`. (2) Pass current object as argument. (3) Call another constructor: `this(args)` (must be first statement). (4) Return current object from method (builder pattern). Cannot be used in static contexts.',
    tags: ['this', 'oop']
  },
  {
    id: 48, chapter: 5, difficulty: 'hard',
    q: 'What is covariant return type?',
    a: 'An overriding method can return a subtype of the parent method\'s return type. Example: parent returns `Animal`, child can return `Dog`. Introduced in Java 5. Enables fluent builder patterns where each subclass builder method returns the subclass type. Internally the JVM uses bridge methods to maintain bytecode compatibility.',
    tags: ['covariant', 'overriding', 'generics']
  },

  // ── COLLECTIONS ───────────────────────────────────────────────────────
  {
    id: 49, chapter: 6, difficulty: 'medium',
    q: 'What is the difference between ArrayList and LinkedList?',
    a: 'ArrayList: backed by resizable array, O(1) random access, O(n) insert/remove in middle (shift), good cache locality. LinkedList: doubly-linked nodes, O(n) access by index, O(1) insert/remove at known position, implements Deque. Use ArrayList for most cases (better cache performance); LinkedList when you have many insertions/deletions at the middle.',
    tags: ['ArrayList', 'LinkedList', 'performance']
  },
  {
    id: 50, chapter: 6, difficulty: 'medium',
    q: 'What is the difference between HashMap, LinkedHashMap, and TreeMap?',
    a: 'HashMap: O(1) average get/put, no order guarantee. LinkedHashMap: maintains insertion (or access) order, slightly slower. TreeMap: sorted by key (natural order or Comparator), O(log n) operations. HashMap has best performance; use LinkedHashMap for predictable iteration; TreeMap when you need sorted keys or range operations.',
    tags: ['HashMap', 'LinkedHashMap', 'TreeMap']
  },
  {
    id: 51, chapter: 6, difficulty: 'hard',
    q: 'How does HashMap work internally? What is the load factor?',
    a: 'HashMap uses an array of buckets with linked lists/red-black trees for collision resolution. Default capacity: 16, load factor: 0.75. When size > capacity × loadFactor, it rehashes (doubles capacity, O(n)). Java 8+: buckets with ≥8 entries become trees (O(log n) lookup). hashCode() determines bucket; equals() resolves collisions.',
    tags: ['HashMap', 'internals', 'hashCode']
  },
  {
    id: 52, chapter: 6, difficulty: 'medium',
    q: 'What is the difference between HashSet, LinkedHashSet, and TreeSet?',
    a: 'HashSet: backed by HashMap, O(1) operations, no order. LinkedHashSet: maintains insertion order. TreeSet: sorted, O(log n), implements NavigableSet (floor, ceiling, headSet, tailSet). Sets allow no duplicates — uses equals()/hashCode() for HashSet, Comparable/Comparator for TreeSet.',
    tags: ['HashSet', 'TreeSet', 'Set']
  },
  {
    id: 53, chapter: 6, difficulty: 'medium',
    q: 'What is the difference between Iterator and ListIterator?',
    a: 'Iterator: forward-only, supports remove(). ListIterator (List-specific): bidirectional (hasPrevious/previous), supports add(), set(), remove(), and provides nextIndex/previousIndex. Both throw ConcurrentModificationException if the list is structurally modified during iteration (except via iterator\'s own remove/add).',
    tags: ['Iterator', 'ListIterator', 'collections']
  },
  {
    id: 54, chapter: 6, difficulty: 'medium',
    q: 'What is Comparable vs Comparator?',
    a: 'Comparable: interface with `compareTo(T other)` in the class itself — defines natural ordering. Comparator: external interface with `compare(T a, T b)` — defines custom/alternative ordering. Use Comparable for the default sort order; Comparator for multiple sort strategies or sorting classes you don\'t control. Java 8: `Comparator.comparing(Person::getAge).thenComparing(Person::getName)`.',
    tags: ['Comparable', 'Comparator', 'sorting']
  },
  {
    id: 55, chapter: 6, difficulty: 'medium',
    q: 'What are the main String methods you should know?',
    a: 'length(), charAt(i), substring(start,end), indexOf(str), contains(seq), startsWith/endsWith, toLowerCase/toUpperCase, trim()/strip(), replace(old,new), split(regex), join(delim, elements), String.valueOf(x), toCharArray(), isEmpty/isBlank (Java 11+), formatted/stripLeading/stripTrailing (Java 11+), repeat (Java 11+).',
    tags: ['String', 'methods', 'API']
  },
  {
    id: 56, chapter: 6, difficulty: 'medium',
    q: 'When should you use StringBuilder vs String concatenation?',
    a: 'String is immutable; each `+` creates a new String object. In loops, this is O(n²) time. StringBuilder is mutable, append() is O(1) amortized — O(n) for full build. The compiler optimizes simple single-line concatenation to StringBuilder, but NOT in loops. Always use StringBuilder for loop-based string building. StringBuffer is thread-safe but slower.',
    tags: ['StringBuilder', 'String', 'performance']
  },
  {
    id: 57, chapter: 6, difficulty: 'hard',
    q: 'What is generics type erasure?',
    a: 'At compile time, generic type parameters are erased and replaced with their bounds (Object if unbounded). `List<String>` becomes `List` at runtime — `list instanceof List<String>` is illegal. Type casts are inserted by the compiler. This means you cannot: create `new T()`, `new T[]`, use primitives as type params, or get the actual type at runtime via reflection (without workarounds).',
    tags: ['generics', 'type-erasure', 'advanced']
  },
  {
    id: 58, chapter: 6, difficulty: 'hard',
    q: 'What is the difference between `List<? extends T>` and `List<? super T>`?',
    a: 'PECS: Producer Extends, Consumer Super. `List<? extends T>` (upper bounded wildcard): can read T from it (producer), cannot add to it. `List<? super T>` (lower bounded wildcard): can add T to it (consumer), can only read Object from it. Use when writing generic utility methods. `Collections.copy(dest, src)`: dest is `<? super T>`, src is `<? extends T>`.',
    tags: ['generics', 'wildcards', 'PECS']
  },
  {
    id: 59, chapter: 6, difficulty: 'medium',
    q: 'What is the difference between Queue and Deque?',
    a: 'Queue is FIFO: offer/add (tail), poll/remove (head), peek/element (head). Deque (double-ended queue) supports both ends: offerFirst/offerLast, pollFirst/pollLast — can function as stack or queue. ArrayDeque is the go-to implementation (faster than Stack and LinkedList for most operations). PriorityQueue is a heap-based queue ordered by priority.',
    tags: ['Queue', 'Deque', 'Stack']
  },
  {
    id: 60, chapter: 6, difficulty: 'easy',
    q: 'What is the Collections utility class? Name 5 key methods.',
    a: '`Collections.sort(list)`, `Collections.binarySearch(list, key)`, `Collections.reverse(list)`, `Collections.shuffle(list)`, `Collections.min/max(coll)`, `Collections.unmodifiableList(list)`, `Collections.synchronizedList(list)`, `Collections.frequency(coll, obj)`, `Collections.disjoint(c1, c2)`, `Collections.nCopies(n, obj)`.',
    tags: ['Collections', 'utility']
  },
  {
    id: 61, chapter: 6, difficulty: 'medium',
    q: 'What is the difference between fail-fast and fail-safe iterators?',
    a: 'Fail-fast iterators (ArrayList, HashMap) throw ConcurrentModificationException if the collection is structurally modified during iteration (detected via modCount). Fail-safe iterators (CopyOnWriteArrayList, ConcurrentHashMap) iterate over a snapshot or handle concurrent modification — no exception, but may not reflect latest changes.',
    tags: ['Iterator', 'fail-fast', 'concurrency']
  },
  {
    id: 62, chapter: 6, difficulty: 'medium',
    q: 'What is an EnumSet and EnumMap and when should you use them?',
    a: 'EnumSet: Set implementation for enum values using bit vectors — extremely compact and fast O(1) operations. EnumMap: Map with enum keys, backed by an array — faster than HashMap for enum keys. Always prefer EnumSet over `Set<MyEnum>` and EnumMap over `Map<MyEnum, V>` for better performance.',
    tags: ['EnumSet', 'EnumMap', 'enum', 'performance']
  },

  // ── EXCEPTIONS & I/O ──────────────────────────────────────────────────
  {
    id: 63, chapter: 7, difficulty: 'easy',
    q: 'What is the difference between checked and unchecked exceptions?',
    a: 'Checked exceptions: subclasses of Exception (not RuntimeException) — compiler requires you to catch or declare them (`throws`). Examples: IOException, SQLException. Unchecked exceptions: RuntimeException and its subclasses — no compiler enforcement. Examples: NullPointerException, IllegalArgumentException. Errors (OutOfMemoryError) are unchecked and usually unrecoverable.',
    tags: ['exceptions', 'checked', 'unchecked']
  },
  {
    id: 64, chapter: 7, difficulty: 'medium',
    q: 'What is the try-with-resources statement?',
    a: 'Try-with-resources (Java 7+) automatically closes resources implementing `AutoCloseable` at the end of the block, even if an exception occurs. `try (InputStream is = new FileInputStream(f)) { ... }` — `is.close()` is called automatically. Multiple resources are closed in reverse order. Exceptions from close() are suppressed if an exception already propagated.',
    tags: ['try-with-resources', 'AutoCloseable', 'I/O']
  },
  {
    id: 65, chapter: 7, difficulty: 'medium',
    q: 'What is exception chaining?',
    a: 'Wrapping one exception inside another to preserve the original cause while providing context. `throw new ServiceException("Failed", cause)` where the constructor accepts a `Throwable cause`. Access via `getCause()`. Crucial for debugging — always pass the original exception when rethrowing or wrapping. Introduced in Java 1.4.',
    tags: ['exception-chaining', 'cause', 'debugging']
  },
  {
    id: 66, chapter: 7, difficulty: 'hard',
    q: 'What is a finally block? Can it suppress exceptions?',
    a: 'finally always executes after try/catch, whether or not an exception occurred, except `System.exit()` or JVM crash. A `return` in finally overrides any return in try/catch. An exception thrown in finally suppresses the original exception from try (losing it). This is why try-with-resources is preferred — it preserves the original and attaches close exceptions as suppressed.',
    tags: ['finally', 'exceptions', 'pitfalls']
  },
  {
    id: 67, chapter: 7, difficulty: 'medium',
    q: 'What is the difference between Files.readAllBytes, BufferedReader, and Scanner for file reading?',
    a: '`Files.readAllBytes()`: reads entire file into byte array — simple, good for small files. `BufferedReader`: buffered line-by-line reading — memory efficient, fast for text files. `Scanner`: tokenized reading — convenient for structured input, slower. Java 11+: `Files.readString(path)` for simple text. Java 8+: `Files.lines(path)` returns a lazy Stream<String>.',
    tags: ['Files', 'IO', 'NIO2']
  },
  {
    id: 68, chapter: 7, difficulty: 'medium',
    q: 'What is the best practice for catching multiple exception types?',
    a: 'Multi-catch (Java 7+): `catch (IOException | SQLException e)` catches both types — cleaner than duplicate blocks. Catch more specific exceptions before general ones (compiler enforces this). Never catch Exception or Throwable unless you re-throw or log carefully. Avoid empty catch blocks — at minimum log the exception.',
    tags: ['multi-catch', 'exceptions', 'best-practices']
  },
  {
    id: 69, chapter: 7, difficulty: 'hard',
    q: 'What are suppressed exceptions?',
    a: 'When a try-with-resources block has an exception and the auto-close also throws, the close exception is suppressed (attached to the primary exception). Access via `e.getSuppressed()`. You can also manually suppress: `primaryEx.addSuppressed(suppressedEx)`. This preserves the full picture vs the finally-block approach which loses the original.',
    tags: ['suppressed-exceptions', 'try-with-resources']
  },
  {
    id: 70, chapter: 7, difficulty: 'medium',
    q: 'What is the Path API (NIO.2)? How is it better than File?',
    a: '`java.nio.file.Path` (Java 7+): immutable path representation, works with `Files` utility class. Advantages over `File`: throws IOException (not boolean returns), supports symbolic links, file attributes, directory streams, and watch service. `Paths.get("a/b/c")` or `Path.of(...)` (Java 11+). Files.walk() for recursive traversal.',
    tags: ['NIO2', 'Path', 'Files']
  },
  {
    id: 71, chapter: 7, difficulty: 'medium',
    q: 'What is serialization in Java?',
    a: 'Converting an object\'s state to a byte stream (Serializable interface) for storage or network transfer. `ObjectOutputStream.writeObject()` serializes; `ObjectInputStream.readObject()` deserializes. Mark fields not to serialize with `transient`. serialVersionUID controls version compatibility. Security: deserialization of untrusted data is a major vulnerability (use whitelisting/alternatives like JSON).',
    tags: ['serialization', 'Serializable']
  },
  {
    id: 72, chapter: 7, difficulty: 'hard',
    q: 'What is the difference between InputStream/OutputStream and Reader/Writer?',
    a: 'InputStream/OutputStream: work with raw bytes — for binary data (images, files, network). Reader/Writer: work with characters using a charset — for text data. Bridge: InputStreamReader/OutputStreamWriter convert between the two using a specified charset. Always specify charset explicitly (UTF-8) — never rely on platform default.',
    tags: ['IO', 'streams', 'charset']
  },

  // ── FUNCTIONAL & STREAMS ─────────────────────────────────────────────
  {
    id: 73, chapter: 8, difficulty: 'medium',
    q: 'What is a functional interface? Name 5 built-in ones.',
    a: 'An interface with exactly one abstract method (SAM). Annotated with @FunctionalInterface (optional but documents intent). Built-ins: Function<T,R> (apply), Consumer<T> (accept), Supplier<T> (get), Predicate<T> (test), BiFunction<T,U,R>, UnaryOperator<T>, BinaryOperator<T>, Runnable, Callable<T>.',
    tags: ['functional-interface', 'lambda', 'java8']
  },
  {
    id: 74, chapter: 8, difficulty: 'medium',
    q: 'What is the difference between map() and flatMap() in streams?',
    a: '`map()`: 1-to-1 transformation — each element → one element. `flatMap()`: 1-to-many transformation — each element → Stream of elements, then flattened. Example: `List<List<String>>` → `flatMap(List::stream)` → `Stream<String>`. flatMap is crucial for working with nested collections or Optional chaining.',
    tags: ['Stream', 'map', 'flatMap']
  },
  {
    id: 75, chapter: 8, difficulty: 'medium',
    q: 'What is the difference between intermediate and terminal stream operations?',
    a: 'Intermediate operations (filter, map, sorted, distinct, limit) are lazy — they return a new Stream, no processing until terminal. Terminal operations (collect, forEach, reduce, count, findFirst, anyMatch) trigger processing and return a result. Streams are consumed — cannot be reused after terminal operation. Short-circuiting: findFirst, anyMatch stop early.',
    tags: ['Stream', 'intermediate', 'terminal', 'lazy']
  },
  {
    id: 76, chapter: 8, difficulty: 'hard',
    q: 'What is the difference between reduce() and collect()?',
    a: '`reduce()`: folds stream into a single value via a BinaryOperator. Immutable: `Optional<T> reduce(BinaryOperator<T>)` or `T reduce(T identity, BinaryOperator<T>)`. `collect()`: mutable reduction into a container (List, Map, String) using a Collector. `Collectors.toList()`, `groupingBy()`, `joining()`. Prefer collect() for building collections; reduce() for computing scalar values.',
    tags: ['Stream', 'reduce', 'collect', 'Collectors']
  },
  {
    id: 77, chapter: 8, difficulty: 'medium',
    q: 'What is Optional and when should you use it?',
    a: 'Optional<T> is a container that may or may not hold a value — a type-safe alternative to null returns. Methods: `isPresent()`, `get()` (throws if empty), `orElse(default)`, `orElseGet(supplier)`, `orElseThrow()`, `ifPresent(consumer)`, `map()`, `flatMap()`, `filter()`. Use as return type when absence is expected; never use as parameter or field type.',
    tags: ['Optional', 'null', 'java8']
  },
  {
    id: 78, chapter: 8, difficulty: 'medium',
    q: 'What are method references? What are the 4 types?',
    a: '1. Static: `ClassName::staticMethod` (e.g., `Integer::parseInt`). 2. Instance on specific object: `instance::method` (e.g., `System.out::println`). 3. Instance on arbitrary object of type: `ClassName::instanceMethod` (e.g., `String::toUpperCase`). 4. Constructor: `ClassName::new` (e.g., `ArrayList::new`). All are syntactic sugar for lambdas.',
    tags: ['method-references', 'lambda', 'java8']
  },
  {
    id: 79, chapter: 8, difficulty: 'hard',
    q: 'What are Collectors.groupingBy() and partitioningBy()?',
    a: '`groupingBy(classifier)` groups elements by a key: `Map<K, List<T>>`. `groupingBy(classifier, downstream)` applies further reduction. `partitioningBy(predicate)` is a special case of groupingBy with boolean key: `Map<Boolean, List<T>>`. Example: `students.stream().collect(groupingBy(Student::getGrade, counting()))` → grade → count.',
    tags: ['Collectors', 'groupingBy', 'Stream']
  },
  {
    id: 80, chapter: 8, difficulty: 'hard',
    q: 'What are parallel streams? When should you use them?',
    a: '`stream.parallel()` or `Collection.parallelStream()` splits work across ForkJoinPool (default: CPU cores - 1 threads). Good for: CPU-intensive operations on large datasets with no shared mutable state. Bad for: I/O-bound, small collections, sequential-dependent operations, or when thread safety is complex. Use benchmarks (JMH) — parallel streams have overhead that can make them slower for small data.',
    tags: ['parallel-streams', 'concurrency', 'performance']
  },
  {
    id: 81, chapter: 8, difficulty: 'medium',
    q: 'What is a lambda expression? What is an effectively final variable?',
    a: 'A lambda is an anonymous function: `(params) -> body`. Can capture variables from enclosing scope only if they are `final` or "effectively final" (never reassigned after assignment). This is because lambdas may outlive the enclosing scope and need a stable value. Instance fields and static fields can be captured freely.',
    tags: ['lambda', 'closure', 'effectively-final']
  },
  {
    id: 82, chapter: 8, difficulty: 'medium',
    q: 'What is CompletableFuture?',
    a: 'CompletableFuture<T> enables composable asynchronous programming. Key methods: `supplyAsync(supplier)` (async value), `thenApply(fn)` (transform), `thenAccept(consumer)` (consume), `thenCompose(fn)` (chain futures), `thenCombine(other, fn)` (combine two), `exceptionally(fn)` (error handling), `allOf/anyOf`. Replaces callback hell with readable pipelines.',
    tags: ['CompletableFuture', 'async', 'java8']
  },

  // ── CONCURRENCY ───────────────────────────────────────────────────────
  {
    id: 83, chapter: 9, difficulty: 'medium',
    q: 'What is the difference between a process and a thread?',
    a: 'Process: independent program with its own memory space, OS manages, expensive to create/context-switch. Thread: lightweight execution unit within a process, shares heap memory (not stack), cheaper to create/switch. Java threads map 1:1 to OS threads (platform threads). Virtual threads (Java 21) are lightweight JVM-managed threads mapped M:N to platform threads.',
    tags: ['thread', 'process', 'concurrency']
  },
  {
    id: 84, chapter: 9, difficulty: 'medium',
    q: 'What is the `synchronized` keyword?',
    a: '`synchronized` ensures only one thread executes a block/method at a time using a monitor lock. `synchronized method`: locks on `this` (instance) or the Class object (static). `synchronized(lock) { }`: explicitly specifies the lock object. Provides mutual exclusion and visibility (flushes/reads from main memory). Reentrant — same thread can re-acquire.',
    tags: ['synchronized', 'monitor', 'thread-safety']
  },
  {
    id: 85, chapter: 9, difficulty: 'hard',
    q: 'What is the Java Memory Model (JMM)? What does `volatile` guarantee?',
    a: 'JMM defines how threads interact with memory. Without synchronization, threads may see stale values from caches. `volatile`: (1) writes are immediately visible to all threads (happens-before), (2) prevents reordering of reads/writes around the volatile variable. volatile does NOT make compound actions (i++) atomic — use AtomicInteger for that.',
    tags: ['volatile', 'JMM', 'memory-visibility']
  },
  {
    id: 86, chapter: 9, difficulty: 'medium',
    q: 'What is the difference between wait(), notify(), and notifyAll()?',
    a: 'Must be called inside synchronized block on the lock object. `wait()`: releases lock and suspends until notified. `notify()`: wakes one waiting thread (unspecified which). `notifyAll()`: wakes all waiting threads. Always use wait() in a loop: `while (!condition) wait();` — prevents spurious wakeups. Prefer higher-level constructs (Condition, BlockingQueue).',
    tags: ['wait', 'notify', 'monitor']
  },
  {
    id: 87, chapter: 9, difficulty: 'medium',
    q: 'What is the difference between Runnable and Callable?',
    a: 'Runnable: `void run()` — no return value, no checked exception. Callable<V>: `V call() throws Exception` — returns a value and can throw. Use Callable with ExecutorService when you need the result. ExecutorService.submit(callable) returns a Future<V> for async result retrieval.',
    tags: ['Runnable', 'Callable', 'ExecutorService']
  },
  {
    id: 88, chapter: 9, difficulty: 'hard',
    q: 'What is a deadlock and how do you prevent it?',
    a: 'Deadlock: two+ threads each hold a lock the other needs → circular wait → both suspended indefinitely. Prevention: (1) Lock ordering — always acquire locks in same order. (2) Lock timeout — use tryLock() with timeout. (3) Lock-free algorithms — use atomic operations. (4) Single lock — reduce lock granularity. Detection: thread dump analysis.',
    tags: ['deadlock', 'concurrency', 'prevention']
  },
  {
    id: 89, chapter: 9, difficulty: 'medium',
    q: 'What is ExecutorService? What are common thread pool types?',
    a: '`ExecutorService` manages thread pools. Types via Executors factory: `newFixedThreadPool(n)` (fixed n threads), `newCachedThreadPool()` (grows/shrinks on demand), `newSingleThreadExecutor()` (single thread, sequential), `newScheduledThreadPool(n)` (delayed/periodic tasks). Use `ThreadPoolExecutor` directly for fine-grained control. Always shutdown() the executor.',
    tags: ['ExecutorService', 'thread-pool', 'concurrency']
  },
  {
    id: 90, chapter: 9, difficulty: 'hard',
    q: 'What are virtual threads (Project Loom, Java 21)?',
    a: 'Virtual threads are JVM-managed lightweight threads (not OS threads). Millions can exist; they mount/unmount from carrier (platform) threads at blocking points. Created with `Thread.ofVirtual().start(runnable)` or `Executors.newVirtualThreadPerTaskExecutor()`. Eliminates "one thread per request" scalability limits without reactive/async programming. Use for I/O-bound workloads.',
    tags: ['virtual-threads', 'loom', 'java21']
  },
  {
    id: 91, chapter: 9, difficulty: 'hard',
    q: 'What is a ConcurrentHashMap? How is it different from Hashtable?',
    a: 'ConcurrentHashMap allows concurrent reads and segmented writes without locking the whole map (Java 8+: uses CAS + node-level locks). Hashtable: all methods synchronized on object — only one thread at a time. ConcurrentHashMap: null keys/values not allowed, weakly consistent iterators (no ConcurrentModificationException). Use ConcurrentHashMap over synchronized maps in multi-threaded contexts.',
    tags: ['ConcurrentHashMap', 'Hashtable', 'concurrency']
  },
  {
    id: 92, chapter: 9, difficulty: 'hard',
    q: 'What is the ForkJoinPool?',
    a: 'ForkJoinPool is an ExecutorService optimized for divide-and-conquer tasks. Uses work-stealing: idle threads steal tasks from busy threads\' queues. Tasks extend RecursiveTask<V> (returns value) or RecursiveAction (no return). Used internally by parallel streams. The common pool (`ForkJoinPool.commonPool()`) is shared across the JVM.',
    tags: ['ForkJoinPool', 'work-stealing', 'parallel']
  },

  // ── MODERN JAVA ───────────────────────────────────────────────────────
  {
    id: 93, chapter: 10, difficulty: 'medium',
    q: 'What are text blocks (Java 15+)?',
    a: 'Text blocks allow multi-line string literals with triple-quote delimiters. The common leading whitespace is stripped. `String json = """ { "name": "Java" } """;` — preserves internal formatting, no need to escape internal quotes. `\\` (line continuation) and `\\s` (preserve trailing space) are new escape sequences.',
    tags: ['text-blocks', 'java15', 'string']
  },
  {
    id: 94, chapter: 10, difficulty: 'medium',
    q: 'What is the difference between String.formatted() and String.format()?',
    a: '`String.formatted(args)` is the instance method equivalent of `String.format(this, args)` introduced in Java 15. Both use the same format specifiers (%s, %d, %n etc.). `formatted()` is more readable in method chains and text blocks. `String.format()` is a static method for compatibility.',
    tags: ['String', 'formatting', 'java15']
  },
  {
    id: 95, chapter: 10, difficulty: 'hard',
    q: 'What are unnamed patterns and variables (Java 21)?',
    a: 'Unnamed patterns `_` allow ignoring components in pattern matching: `case Point(_, int y) -> y`. Unnamed variables `_` signal intentional non-use: `try { ... } catch (Exception _) { }` or `for (var _ : list) { count++; }`. Clarifies intent and suppresses "unused variable" warnings.',
    tags: ['unnamed-patterns', 'java21', 'pattern-matching']
  },
  {
    id: 96, chapter: 10, difficulty: 'medium',
    q: 'What is String.stripLeading(), stripTrailing(), and strip() vs trim()?',
    a: 'Java 11+: `strip()`, `stripLeading()`, `stripTrailing()` are Unicode-aware — handle all Unicode whitespace including non-breaking spaces. `trim()` only removes ASCII control characters ≤ \\u0020. Always prefer strip() in modern code for correct internationalization.',
    tags: ['String', 'java11', 'unicode']
  },
  {
    id: 97, chapter: 10, difficulty: 'hard',
    q: 'What are sequenced collections (Java 21)?',
    a: 'Java 21 added SequencedCollection, SequencedSet, SequencedMap interfaces that provide a defined encounter order with uniform API: `getFirst()`, `getLast()`, `addFirst()`, `addLast()`, `removeFirst()`, `removeLast()`, `reversed()`. Implemented by List, Deque, LinkedHashSet, LinkedHashMap, SortedSet, SortedMap.',
    tags: ['SequencedCollection', 'java21', 'collections']
  },
  {
    id: 98, chapter: 10, difficulty: 'medium',
    q: 'What are the improvements to instanceof in Java 16+ (Pattern Matching)?',
    a: 'Java 16: `if (obj instanceof String s && s.length() > 0)` — `s` is pattern variable, automatically cast and scoped within the if block. No explicit cast needed. Java 21: pattern matching extends to switch: `case String s when s.isEmpty() -> ...`. Null handling: `case null -> ...` in switch.',
    tags: ['instanceof', 'pattern-matching', 'java16']
  },
  {
    id: 99, chapter: 10, difficulty: 'hard',
    q: 'What is the difference between Java 8, 11, 17, and 21 LTS releases?',
    a: 'Java 8 (LTS): lambdas, streams, Optional, Date/Time API, default methods. Java 11 (LTS): HTTP client, String methods (strip, isBlank), Files.readString, local-var in lambdas. Java 17 (LTS): sealed classes, records, text blocks, pattern matching instanceof, switch expressions stable. Java 21 (LTS): virtual threads, pattern matching switch, record patterns, sequenced collections.',
    tags: ['java8', 'java11', 'java17', 'java21', 'LTS']
  },
  {
    id: 100, chapter: 10, difficulty: 'hard',
    q: 'What are structured concurrency and scoped values (Java 21 Preview)?',
    a: 'Structured Concurrency: treat multiple concurrent tasks as a unit — if one fails, cancel the rest (StructuredTaskScope). Ensures tasks don\'t outlive their scope — prevents leaks and simplifies error handling. Scoped Values: immutable per-thread values passed through call stacks without explicit parameter threading — a better alternative to ThreadLocal for virtual threads.',
    tags: ['structured-concurrency', 'scoped-values', 'java21']
  },
]

export const courseQuizConfig = {
  poolSize: 30,
  displayCount: 10,
}

export const courseQuiz = [
  { id: 1, q: 'Which memory area is shared among all threads in a JVM?', options: ['Stack', 'PC Register', 'Heap', 'Native Method Stack'], answer: 2, explanation: 'The Heap is shared among all threads. Stack, PC Register, and Native Method Stack are per-thread.' },
  { id: 2, q: 'What is the default load factor of a HashMap?', options: ['0.5', '0.75', '1.0', '0.25'], answer: 1, explanation: 'HashMap default load factor is 0.75. When size exceeds 75% of capacity, it rehashes to double the capacity.' },
  { id: 3, q: 'Which of the following is a checked exception?', options: ['NullPointerException', 'ArrayIndexOutOfBoundsException', 'IOException', 'ClassCastException'], answer: 2, explanation: 'IOException is a checked exception. The others are subclasses of RuntimeException (unchecked).' },
  { id: 4, q: 'What does PECS stand for in Java generics?', options: ['Producer Extends Consumer Super', 'Protected Encapsulated Class System', 'Primitive Enumeration Collection Stream', 'Package Export Class Singleton'], answer: 0, explanation: 'PECS: Producer Extends, Consumer Super. Use <? extends T> when reading, <? super T> when writing.' },
  { id: 5, q: 'Which Java version introduced virtual threads?', options: ['Java 17', 'Java 18', 'Java 19', 'Java 21'], answer: 3, explanation: 'Virtual threads (Project Loom) became a standard feature in Java 21 LTS.' },
  { id: 6, q: 'What is the time complexity of HashMap.get() in the average case?', options: ['O(n)', 'O(log n)', 'O(1)', 'O(n log n)'], answer: 2, explanation: 'HashMap.get() is O(1) average case. With many collisions it degrades to O(log n) (tree buckets in Java 8+) or O(n) worst case.' },
  { id: 7, q: '`String s = "hello"; s = s + " world";` — how many String objects are created?', options: ['1', '2', '3', '4'], answer: 2, explanation: '"hello" (pool), " world" (pool), and "hello world" (new concatenated string) — 3 objects.' },
  { id: 8, q: 'Which collection maintains insertion order and allows duplicates?', options: ['HashSet', 'TreeSet', 'ArrayList', 'HashMap'], answer: 2, explanation: 'ArrayList is a List that maintains insertion order and allows duplicates. HashSet/TreeSet disallow duplicates; HashMap is a map.' },
  { id: 9, q: 'What happens when you unbox a null Integer to int?', options: ['Returns 0', 'Returns -1', 'NullPointerException', 'Compiler error'], answer: 2, explanation: 'Unboxing null causes NullPointerException at runtime. The compiler cannot detect this at compile time.' },
  { id: 10, q: 'Which keyword makes a variable accessible without an instance?', options: ['final', 'static', 'volatile', 'transient'], answer: 1, explanation: 'static fields and methods belong to the class, not instances, and can be accessed without creating an object.' },
  { id: 11, q: 'What is the output of `System.out.println(1 + 2 + "3");`?', options: ['"123"', '"33"', '"6"', '33'], answer: 1, explanation: '1 + 2 evaluates to 3 (int addition), then 3 + "3" is "33" (string concatenation). Output is 33 (String).' },
  { id: 12, q: 'Which interface must be implemented for try-with-resources?', options: ['Closeable', 'AutoCloseable', 'Serializable', 'Runnable'], answer: 1, explanation: 'AutoCloseable (or its subinterface Closeable) is required. close() is called automatically at the end of the try block.' },
  { id: 13, q: 'What is the visibility of a method with no access modifier?', options: ['private', 'public', 'package-private', 'protected'], answer: 2, explanation: 'No modifier = package-private (default). Accessible within the same package only.' },
  { id: 14, q: 'Which stream operation is lazy?', options: ['collect()', 'forEach()', 'filter()', 'count()'], answer: 2, explanation: 'filter() is an intermediate operation — lazy. collect(), forEach(), and count() are terminal operations that trigger processing.' },
  { id: 15, q: 'What does `volatile` guarantee that `synchronized` also provides?', options: ['Atomicity of compound actions', 'Memory visibility across threads', 'Mutual exclusion', 'Deadlock prevention'], answer: 1, explanation: 'Both volatile and synchronized provide memory visibility (happens-before). Only synchronized provides mutual exclusion and atomicity.' },
  { id: 16, q: 'Which record component accessor style does Java generate?', options: ['getX() / setX()', 'x() (no prefix)', 'fieldX()', 'isX() for all types'], answer: 1, explanation: 'Records generate accessors named after the component without a prefix: `record Point(int x, int y)` → x() and y().' },
  { id: 17, q: 'What is the result of `10 % 3` in Java?', options: ['3', '0', '1', '3.33'], answer: 2, explanation: '10 divided by 3 is 3 remainder 1. The % operator returns the remainder.' },
  { id: 18, q: 'Which of these correctly prevents a class from being subclassed?', options: ['abstract class', 'static class', 'final class', 'private class'], answer: 2, explanation: 'final class cannot be subclassed. abstract classes are meant to be subclassed. static applies to nested classes only.' },
  { id: 19, q: 'What does `Optional.orElseThrow()` do when the Optional is empty?', options: ['Returns null', 'Returns Optional.empty()', 'Throws NoSuchElementException', 'Throws NullPointerException'], answer: 2, explanation: 'orElseThrow() throws NoSuchElementException if empty. Use orElseThrow(supplier) for a custom exception.' },
  { id: 20, q: 'In Java, can an interface have private methods?', options: ['No, interfaces cannot have private methods', 'Yes, since Java 8', 'Yes, since Java 9', 'Yes, since Java 11'], answer: 2, explanation: 'Private methods in interfaces were added in Java 9. They are used as helper methods for default methods.' },
  { id: 21, q: 'What is the purpose of `transient` keyword?', options: ['Makes a variable constant', 'Excludes a field from serialization', 'Makes a method thread-safe', 'Marks a class as abstract'], answer: 1, explanation: 'transient fields are excluded from serialization — their values are not persisted.' },
  { id: 22, q: 'Which method is called when a thread is started?', options: ['start()', 'run()', 'execute()', 'init()'], answer: 0, explanation: 'call start() to create a new thread and invoke run(). Calling run() directly executes in the current thread — no new thread created.' },
  { id: 23, q: 'What does `Arrays.asList()` return?', options: ['An ArrayList', 'A fixed-size List backed by the array', 'An immutable List', 'A LinkedList'], answer: 1, explanation: 'Arrays.asList() returns a fixed-size list backed by the array — add/remove throws UnsupportedOperationException, but set() is allowed.' },
  { id: 24, q: 'What is the output of: `Integer a = 127; Integer b = 127; System.out.println(a == b);`', options: ['false', 'true', 'Depends on JVM', 'Compiler error'], answer: 1, explanation: 'Integer caches values from -128 to 127. a and b reference the same cached object, so == is true.' },
  { id: 25, q: 'Which functional interface has the signature `boolean test(T t)`?', options: ['Function<T,Boolean>', 'Consumer<T>', 'Predicate<T>', 'Supplier<Boolean>'], answer: 2, explanation: 'Predicate<T> has method boolean test(T t) — used for filtering.' },
  { id: 26, q: 'What is the difference between `throw` and `throws`?', options: ['No difference', 'throw throws an exception; throws declares exceptions in method signature', 'throws throws an exception; throw declares exceptions', 'throw is for checked; throws is for unchecked'], answer: 1, explanation: '`throw` (statement) actually throws the exception object. `throws` (in method signature) declares that the method may throw that exception.' },
  { id: 27, q: 'Which sort algorithm does Arrays.sort() use for objects?', options: ['QuickSort', 'MergeSort', 'TimSort', 'HeapSort'], answer: 2, explanation: 'Arrays.sort() uses TimSort for object arrays (stable, O(n log n) worst case). Dual-pivot QuickSort is used for primitives.' },
  { id: 28, q: 'What is method hiding in Java?', options: ['Overriding a private method', 'Redefining a static method in a subclass', 'Using final to prevent overriding', 'Making a method package-private'], answer: 1, explanation: 'When a subclass redefines a static method, it hides the parent\'s static method (not overrides). Resolved at compile time, not runtime.' },
  { id: 29, q: 'Which collection is best for implementing a stack (LIFO) in Java?', options: ['java.util.Stack', 'LinkedList', 'ArrayDeque', 'PriorityQueue'], answer: 2, explanation: 'ArrayDeque is recommended for stack/queue use (Javadoc says so). java.util.Stack extends Vector and is legacy/thread-heavy.' },
  { id: 30, q: 'What keyword is used to define a sealed class?', options: ['locked', 'sealed', 'closed', 'restricted'], answer: 1, explanation: 'The `sealed` keyword (Java 17+) restricts which classes can extend or implement the sealed class/interface.' },
]
