// Chapter 8 - Structured block data (no raw HTML)
export const sections = [
  {
    "id": "imperative-vs-functional",
    "title": "1. Imperative vs Functional Programming",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "1. Imperative vs Functional Programming"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "The Difference: HOW vs WHAT"
      },
      {
        "type": "paragraph",
        "text": "**Imperative:** Tell the computer HOW to do something (step-by-step instructions)\n        **Functional:** Tell the computer WHAT to do (declare the desired transformation)"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Example: Filter and transform a list of names"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// ========== IMPERATIVE (traditional loop) ==========\nList<String> names = List.of(\"Alice\", \"Amy\", \"Bob\", \"Charlie\", \"Alex\");\n\n// HOW: manually iterate, check, build result\nList<String> result = new ArrayList<>();\nfor (String s : names) {\n    if (s.startsWith(\"A\")) {\n        result.add(s.toUpperCase());\n    }\n}\nSystem.out.println(result);  // [ALICE, AMY, ALEX]\n\n// ========== FUNCTIONAL (Stream API) ==========\n// WHAT: filter then map\nList<String> result2 = names.stream()\n    .filter(s -> s.startsWith(\"A\"))\n    .map(String::toUpperCase)\n    .collect(Collectors.toList());\nSystem.out.println(result2);  // [ALICE, AMY, ALEX]"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Key Principles of Functional Programming"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "**Immutability:** Don't modify data; create new data instead",
          "**No side effects:** Functions shouldn't modify external state (only return values)",
          "**First-class functions:** Pass functions as values, return them from methods",
          "**Composition:** Combine small functions into larger ones"
        ]
      },
      {
        "type": "heading",
        "level": 4,
        "text": "More Complex Example: Chain transformations"
      },
      {
        "type": "code",
        "language": "java",
        "code": "List<Integer> nums = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);\n\n// WRONG — imperative, hard to read:\nList<Integer> result = new ArrayList<>();\nfor (Integer n : nums) {\n    if (n % 2 == 0) {\n        result.add(n * n);\n    }\n}\nCollections.sort(result, Collections.reverseOrder());\nfor (Integer n : result) {\n    System.out.println(n);\n}\n\n// CORRECT — functional, clear intent:\nnums.stream()\n    .filter(n -> n % 2 == 0)           // keep evens\n    .map(n -> n * n)                    // square\n    .sorted(Comparator.reverseOrder())  // big to small\n    .forEach(System.out::println);      // print\n// Output: 100, 64, 36, 16, 4"
      },
      {
        "type": "callout",
        "variant": "tip",
        "title": "Tip:",
        "text": "Functional code is often more concise and expresses INTENT better. But use it when it makes code clearer, not just to be trendy."
      }
    ]
  },
  {
    "id": "lambda-expressions",
    "title": "2. Lambda Expressions",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "2. Lambda Expressions"
      },
      {
        "type": "paragraph",
        "text": "A lambda is a **short anonymous function** that implements a functional interface. Syntax: `(parameters) -> body`"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Lambda Syntax — All Forms"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// ===== NO PARAMETERS =====\nRunnable greet = () -> System.out.println(\"Hello\");\ngreet.run();  // prints: Hello\n\nSupplier<String> message = () -> \"Good morning\";\nSystem.out.println(message.get());  // Good morning\n\n// ===== SINGLE PARAMETER (parens optional) =====\nConsumer<String> print1 = s -> System.out.println(s);\nConsumer<String> print2 = (s) -> System.out.println(s);  // same, explicit parens\nConsumer<String> print3 = (String s) -> System.out.println(s);  // with type\n// All three are equivalent\n\n// ===== MULTIPLE PARAMETERS =====\nBiFunction<Integer, Integer, Integer> add = (a, b) -> a + b;\nSystem.out.println(add.apply(3, 5));  // 8\n\nComparator<String> compare = (s1, s2) -> s1.compareTo(s2);\n\n// ===== BLOCK BODY (multiple statements) =====\nBiFunction<Integer, Integer, Integer> divSafe = (a, b) -> {\n    if (b == 0) throw new ArithmeticException(\"divide by zero\");\n    return a / b;\n};\nSystem.out.println(divSafe.apply(10, 2));  // 5\n\nConsumer<List<String>> printAndLog = list -> {\n    System.out.println(\"Processing...\");\n    list.forEach(System.out::println);\n    System.out.println(\"Done!\");\n};\n\n// ===== EXPLICIT TYPES (rarely needed) =====\nBiFunction<String, String, Integer> customCompare = (String a, String b) -> a.length() - b.length();\n\n// ===== EXPRESSION BODY (implicit return) =====\nFunction<String, Integer> len = s -> s.length();  // returns length\nFunction<String, String> upper = s -> s.toUpperCase();  // returns uppercase"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Effectively Final Variables"
      },
      {
        "type": "paragraph",
        "text": "Lambda can access variables from outer scope, but only if they're **effectively final** (never reassigned after initialization)."
      },
      {
        "type": "code",
        "language": "java",
        "code": "// WRONG — variable reassigned after lambda uses it:\nint x = 5;\nRunnable r = () -> System.out.println(x);  // capture x\nx = 10;  // COMPILE ERROR: x is not effectively final!\n\n// CORRECT — never reassign:\nint y = 5;\nRunnable r2 = () -> System.out.println(y);  // OK\n// y = 10;  // Don't do this\n\n// CORRECT — use final keyword explicitly:\nfinal int z = 5;\nRunnable r3 = () -> System.out.println(z);\n\n// This works because we NEVER reassign:\nint multiplier = 10;\nFunction<Integer, Integer> multiply = n -> n * multiplier;\nSystem.out.println(multiply.apply(5));  // 50\n// multiplier = 20;  // Would break the lambda\n\n// Objects are effectively final if reference doesn't change:\nList<String> items = new ArrayList<>();\nConsumer<String> add = s -> items.add(s);  // OK — list content changes, not reference\nadd.accept(\"apple\");\nadd.accept(\"banana\");\nSystem.out.println(items);  // [apple, banana]\n// items = new ArrayList<>();  // Would break the lambda"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Lambda vs Anonymous Class"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Anonymous class (pre-Java 8):\nComparator<String> comp1 = new Comparator<String>() {\n    @Override\n    public int compare(String a, String b) {\n        return a.compareTo(b);\n    }\n};\n\n// Lambda (Java 8+):\nComparator<String> comp2 = (a, b) -> a.compareTo(b);\n\n// They behave similarly, but:\n// - Lambda is more concise\n// - Lambda doesn't create new object each time (usually)\n// - Anonymous class has its own 'this'; lambda's 'this' refers to enclosing class"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Important: \\"
      }
    ]
  },
  {
    "id": "functional-interface",
    "title": "3. @FunctionalInterface Annotation",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "3. @FunctionalInterface Annotation"
      },
      {
        "type": "paragraph",
        "text": "A functional interface has **exactly one abstract method**. It can have default and static methods. The `@FunctionalInterface` annotation documents this contract and makes compilation fail if you violate it."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Creating a Functional Interface"
      },
      {
        "type": "code",
        "language": "java",
        "code": "@FunctionalInterface\npublic interface StringProcessor {\n    // Exactly ONE abstract method:\n    String process(String input);\n\n    // Can have default methods:\n    default StringProcessor andThen(StringProcessor next) {\n        return s -> next.process(this.process(s));\n    }\n\n    // Can have static methods:\n    static StringProcessor identity() {\n        return s -> s;\n    }\n\n    // Can have Object methods (don't count):\n    @Override\n    String toString();\n}\n\n// Usage:\nStringProcessor toUpper = s -> s.toUpperCase();\nStringProcessor trim = s -> s.trim();\n\n// Compose using default method:\nStringProcessor combined = trim.andThen(toUpper);\nSystem.out.println(combined.process(\"  hello  \"));  // HELLO\n\n// Use static method:\nStringProcessor id = StringProcessor.identity();\nSystem.out.println(id.process(\"test\"));  // test"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Why @FunctionalInterface Matters"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// With @FunctionalInterface annotation:\n@FunctionalInterface\npublic interface BadInterface {\n    String method1(String s);\n    String method2(String s);  // COMPILE ERROR: too many abstract methods!\n}\n\n// Without annotation, this compiles (but is wrong):\npublic interface SilentlyBroken {\n    String method1(String s);\n    String method2(String s);\n}\n// Can't use lambda with SilentlyBroken because it's not functional!"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Real-World Example: Function Composition"
      },
      {
        "type": "code",
        "language": "java",
        "code": "@FunctionalInterface\npublic interface Transformer<T> {\n    T transform(T input);\n\n    default <U> Transformer<U> pipe(Function<T, U> next) {\n        return u -> next.apply(this.transform(u));\n    }\n}\n\n// Usage:\nTransformer<String> upper = s -> s.toUpperCase();\nTransformer<String> exclaim = s -> s + \"!!!\";\n\nTransformer<String> pipeline = upper.pipe(String::new)\n    .pipe(exclaim::transform);  // Actually, this example is awkward...\n\n// Better with Function's built-in compose/andThen:\nFunction<String, String> f1 = String::toUpperCase;\nFunction<String, String> f2 = s -> s + \"!!!\";\nFunction<String, String> combined = f1.andThen(f2);\nSystem.out.println(combined.apply(\"hello\"));  // HELLO!!!"
      }
    ]
  },
  {
    "id": "builtin-functional",
    "title": "4. Built-in Functional Interfaces (java.util.function)",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "4. Built-in Functional Interfaces (java.util.function)"
      },
      {
        "type": "paragraph",
        "text": "The `java.util.function` package provides common functional interfaces so you don't have to create your own."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Quick Reference Table"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Function<T, R> — Transform One Value"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Basic transformation:\nFunction<String, Integer> strLen = String::length;\nSystem.out.println(strLen.apply(\"hello\"));  // 5\n\nFunction<Integer, String> intToStr = Object::toString;\nSystem.out.println(intToStr.apply(42));  // \"42\"\n\n// Chaining with andThen:\nFunction<String, Integer> len = String::length;\nFunction<Integer, String> toStr = Object::toString;\nFunction<String, String> pipeline = len.andThen(toStr);\nSystem.out.println(pipeline.apply(\"hello\"));  // \"5\"\n\n// Chaining with compose (opposite direction):\nFunction<Integer, Integer> double1 = n -> n * 2;\nFunction<Integer, Integer> addOne = n -> n + 1;\n// First addOne, then double1:\nFunction<Integer, Integer> composed = double1.compose(addOne);\nSystem.out.println(composed.apply(5));  // (5+1)*2 = 12"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "BiFunction<T, U, R> — Transform Two Values"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Basic use:\nBiFunction<String, Integer, String> repeat = (s, n) -> s.repeat(n);\nSystem.out.println(repeat.apply(\"ab\", 3));  // \"ababab\"\n\n// Comparing:\nBiFunction<Integer, Integer, Integer> max = Integer::max;\nSystem.out.println(max.apply(10, 20));  // 20\n\n// String operations:\nBiFunction<String, String, Integer> compare = String::compareTo;\nSystem.out.println(compare.apply(\"apple\", \"banana\"));  // negative (apple < banana)"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Predicate<T> — Test Conditions"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Basic test:\nPredicate<String> isLong = s -> s.length() > 5;\nPredicate<String> isUpper = s -> s.equals(s.toUpperCase());\n\nSystem.out.println(isLong.test(\"hello\"));    // false (5 chars)\nSystem.out.println(isLong.test(\"elephant\"));  // true (8 chars)\n\n// Combining with and, or, negate:\nPredicate<String> longAndUpper = isLong.and(isUpper);\nSystem.out.println(longAndUpper.test(\"ELEPHANT\"));  // true\nSystem.out.println(longAndUpper.test(\"hello\"));     // false\n\nPredicate<String> longOrUpper = isLong.or(isUpper);\nSystem.out.println(longOrUpper.test(\"HI\"));         // true (upper)\nSystem.out.println(longOrUpper.test(\"elephant\"));   // true (long)\n\nPredicate<String> notLong = isLong.negate();\nSystem.out.println(notLong.test(\"hi\"));  // true\n\n// Static utility for NOT (Java 11+):\nPredicate<String> notNull = Predicate.not(Objects::isNull);\nSystem.out.println(notNull.test(\"hello\"));  // true\nSystem.out.println(notNull.test(null));     // false"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Consumer<T> — Act Without Returning"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Basic action:\nConsumer<String> print = System.out::println;\nprint.accept(\"Hello\");  // prints: Hello\n\n// Chaining with andThen:\nConsumer<String> log = s -> System.err.println(\"[LOG] \" + s);\nConsumer<String> both = print.andThen(log);\nboth.accept(\"Something\");  // prints then logs\n\n// BiConsumer — two inputs:\nBiConsumer<String, Integer> printWithCount = (msg, count) ->\n    System.out.println(msg + \" x\" + count);\nprintWithCount.accept(\"Hello\", 3);  // \"Hello x3\"\n\n// Real use: iterate with side effects:\nMap<String, Integer> map = Map.of(\"a\", 1, \"b\", 2);\nmap.forEach((key, value) -> System.out.println(key + \"=\" + value));"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Supplier<T> — Produce Values"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Factory pattern:\nSupplier<List<String>> listFactory = ArrayList::new;\nList<String> list1 = listFactory.get();\nList<String> list2 = listFactory.get();  // fresh list each time\n\n// Date/time:\nSupplier<LocalDate> today = LocalDate::now;\nSystem.out.println(today.get());  // today's date\n\n// Lazy evaluation (don't compute until needed):\nSupplier<Integer> expensive = () -> {\n    System.out.println(\"Computing...\");\n    return 42;\n};\n// Not computed yet\nSystem.out.println(\"Calling get()\");\nint result = expensive.get();  // NOW it computes\nSystem.out.println(\"Result: \" + result);"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "UnaryOperator<T> & BinaryOperator<T>"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// UnaryOperator — function where input and output are same type:\nUnaryOperator<String> trim = String::trim;\nUnaryOperator<String> upper = String::toUpperCase;\nSystem.out.println(trim.apply(\"  hello  \"));  // \"hello\"\nSystem.out.println(upper.apply(\"hello\"));     // \"HELLO\"\n\n// Chaining UnaryOperators:\nUnaryOperator<String> trimUpper = trim.andThen(upper);\nSystem.out.println(trimUpper.apply(\"  hello  \"));  // \"HELLO\"\n\n// BinaryOperator — combine two values of same type:\nBinaryOperator<Integer> max = Integer::max;\nBinaryOperator<Integer> sum = (a, b) -> a + b;\nSystem.out.println(max.apply(10, 20));  // 20\nSystem.out.println(sum.apply(10, 20));  // 30\n\n// Useful with reduce:\nint result = IntStream.rangeClosed(1, 5)\n    .reduce(1, (a, b) -> a * b);  // 1*1*2*3*4*5 = 120"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Primitive Stream Functional Interfaces"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// IntFunction — int input, generic output:\nIntFunction<String> toBinary = n -> Integer.toBinaryString(n);\nSystem.out.println(toBinary.apply(5));  // \"101\"\n\n// ToIntFunction — generic input, int output:\nToIntFunction<String> len = String::length;\nSystem.out.println(len.applyAsInt(\"hello\"));  // 5\n\n// IntSupplier — produce int:\nIntSupplier random = () -> (int)(Math.random() * 100);\nSystem.out.println(random.getAsInt());  // random 0-99\n\n// IntConsumer — consume int:\nIntConsumer print = System.out::println;\nprint.accept(42);  // prints: 42\n\n// IntUnaryOperator — int to int:\nIntUnaryOperator double1 = n -> n * 2;\nSystem.out.println(double1.applyAsInt(5));  // 10\n\n// IntBinaryOperator — two ints:\nIntBinaryOperator max1 = Integer::max;\nSystem.out.println(max1.applyAsInt(10, 20));  // 20\n\n// Same variants for LongFunction, ToLongFunction, LongSupplier, etc.\n// And for Double: DoubleFunction, ToDoubleFunction, DoubleSupplier, etc."
      }
    ]
  },
  {
    "id": "method-references",
    "title": "5. Method References",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "5. Method References"
      },
      {
        "type": "paragraph",
        "text": "A method reference is a shorthand for a lambda that just calls an existing method. Syntax: `ClassName::methodName` or `instance::methodName` or `ClassName::new`"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Type 1: Static Method Reference"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Syntax: ClassName::staticMethod\n\n// Example 1: Parse integers\nFunction<String, Integer> parse = Integer::parseInt;\nSystem.out.println(parse.apply(\"42\"));  // 42\n\n// Equivalent lambda:\n// Function<String, Integer> parse = s -> Integer.parseInt(s);\n\n// Example 2: Math methods\nIntBinaryOperator max = Integer::max;\nSystem.out.println(max.applyAsInt(10, 20));  // 20\n\nUnaryOperator<Double> sqrt = Math::sqrt;\nSystem.out.println(sqrt.apply(16.0));  // 4.0\n\n// Example 3: Custom static methods\nclass StringUtils {\n    static boolean isEmpty(String s) {\n        return s == null || s.isBlank();\n    }\n    static String reverse(String s) {\n        return new StringBuilder(s).reverse().toString();\n    }\n}\n\nPredicate<String> empty = StringUtils::isEmpty;\nSystem.out.println(empty.test(\"\"));     // true\nSystem.out.println(empty.test(\"hello\")); // false\n\nUnaryOperator<String> rev = StringUtils::reverse;\nSystem.out.println(rev.apply(\"hello\"));  // \"olleh\""
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Type 2: Bound Instance Method Reference"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Syntax: instance::methodName\n\nString prefix = \"Hello, \";\n\n// Reference to instance method:\nFunction<String, String> greet = prefix::concat;\nSystem.out.println(greet.apply(\"Alice\"));  // \"Hello, Alice\"\nSystem.out.println(greet.apply(\"Bob\"));    // \"Hello, Bob\"\n\n// Equivalent lambda:\n// Function<String, String> greet = s -> prefix.concat(s);\n\n// Another example: capturing list operations\nList<String> items = new ArrayList<>();\nConsumer<String> addItem = items::add;\naddItem.accept(\"apple\");\naddItem.accept(\"banana\");\nSystem.out.println(items);  // [apple, banana]\n\n// Equivalent lambda:\n// Consumer<String> addItem = s -> items.add(s);"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Type 3: Unbound Instance Method Reference"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Syntax: ClassName::instanceMethod\n// The instance becomes the first parameter\n\n// Example 1: String methods\nFunction<String, String> toUpper = String::toUpperCase;\nSystem.out.println(toUpper.apply(\"hello\"));  // \"HELLO\"\n\nToIntFunction<String> len = String::length;\nSystem.out.println(len.applyAsInt(\"hello\"));  // 5\n\n// Equivalent lambdas:\n// Function<String, String> toUpper = s -> s.toUpperCase();\n// ToIntFunction<String> len = s -> s.length();\n\n// Example 2: Two parameters (object + argument)\nBiFunction<String, String, Integer> compare = String::compareTo;\nSystem.out.println(compare.apply(\"apple\", \"banana\"));  // negative\n\n// Equivalent:\n// BiFunction<String, String, Integer> compare = (s1, s2) -> s1.compareTo(s2);\n\n// Example 3: In streams\nList<String> words = List.of(\"apple\", \"Zebra\", \"banana\", \"Cherry\");\nwords.stream()\n    .sorted(String::compareToIgnoreCase)  // unbound method ref\n    .map(String::toUpperCase)             // unbound method ref\n    .forEach(System.out::println);        // bound method ref to PrintStream"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Type 4: Constructor Reference"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Syntax: ClassName::new\n\n// Example 1: No-arg constructor\nSupplier<ArrayList<String>> listFactory = ArrayList::new;\nArrayList<String> list1 = listFactory.get();\nArrayList<String> list2 = listFactory.get();  // fresh instance\n\n// Equivalent lambda:\n// Supplier<ArrayList<String>> listFactory = () -> new ArrayList<>();\n\n// Example 2: Single-arg constructor\nFunction<String, StringBuilder> sbFactory = StringBuilder::new;\nStringBuilder sb = sbFactory.apply(\"Hello\");\nSystem.out.println(sb);  // \"Hello\"\n\n// Equivalent:\n// Function<String, StringBuilder> sbFactory = s -> new StringBuilder(s);\n\n// Example 3: Converting string array to integer array\nFunction<Integer, int[]> arrayFactory = int[]::new;\nint[] arr = arrayFactory.apply(10);  // creates int array of size 10\n\n// Example 4: In streams\nList<String> words = List.of(\"a\", \"b\", \"c\");\nStream<StringBuilder> builders = words.stream().map(StringBuilder::new);\n// Each word becomes a StringBuilder\n\n// Example 5: Two-arg constructor (rare)\nclass Pair<A, B> {\n    A first;\n    B second;\n    Pair(A a, B b) { this.first = a; this.second = b; }\n}\n\nBiFunction<String, Integer, Pair<String, Integer>> pairFactory = Pair::new;\nPair<String, Integer> p = pairFactory.apply(\"age\", 25);\nSystem.out.println(p.first + \" = \" + p.second);  // \"age = 25\""
      },
      {
        "type": "heading",
        "level": 3,
        "text": "When to Use Method References"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// ✓ GOOD — reference is more readable:\nlist.sort(String::compareToIgnoreCase);\nnumbers.stream().map(String::valueOf).collect(Collectors.toList());\nsupplier = LocalDate::now;\n\n// ✗ AVOID — lambda is clearer:\n// Complex logic:\nnumbers.stream().filter(n -> n % 2 == 0 && n > 5)  // can't do with method ref easily\n    .map(n -> n * n)\n\n// ✓ Use reference:\nnumbers.stream().filter(n -> n % 2 == 0)\n    .map(n -> n * n)\n    .forEach(System.out::println);"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Real-World Example: Stream Processing"
      },
      {
        "type": "code",
        "language": "java",
        "code": "List<String> names = List.of(\"charlie\", \"ALICE\", \"bob\", \"David\");\n\n// Using multiple method references:\nnames.stream()\n    .map(String::toLowerCase)           // Type 3: String::toLowerCase\n    .map(String::trim)                   // Type 3: String::trim\n    .filter(s -> !s.isEmpty())          // can't be a method ref\n    .sorted(String::compareTo)           // Type 3: String::compareTo\n    .forEach(System.out::println);       // Type 2: System.out::println\n// Output:\n// alice\n// bob\n// charlie\n// david"
      }
    ]
  },
  {
    "id": "stream-overview",
    "title": "6. Stream API — Overview and Pipeline Model",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "6. Stream API — Overview and Pipeline Model"
      },
      {
        "type": "paragraph",
        "text": "A **Stream** is a sequence of values that can be processed with functional operations. Unlike collections, streams are **lazy** and **single-use**."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Stream Pipeline Diagram"
      },
      {
        "type": "diagram",
        "format": "mermaid",
        "content": "flowchart LR\n  subgraph Source[\"SOURCE\"]\n    S[\"List / Array<br/>Stream.of()\"]\n  end\n  subgraph Intermediate[\"INTERMEDIATE OPS — lazy, no execution yet\"]\n    direction LR\n    F[\"filter()\"] --> M[\"map()\"] --> SORT[\"sorted()\"]\n  end\n  subgraph Terminal[\"TERMINAL OP — triggers all execution\"]\n    T[\"collect()<br/>forEach()<br/>reduce()\"]\n  end\n  Source --> Intermediate --> Terminal\n  style Source fill:#dbeafe,stroke:#1d4ed8,color:#1e3a5f\n  style Intermediate fill:#fef9c3,stroke:#854d0e,color:#713f12\n  style Terminal fill:#dcfce7,stroke:#166534,color:#14532d"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Key Properties"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "**Lazy evaluation:** Intermediate operations (filter, map, etc.) don't run until a terminal operation is called",
          "**Single-use:** Once a terminal operation is called, the stream is consumed and can't be reused",
          "**No modification of source:** Streams don't change the original collection",
          "**Functional style:** Operations return new streams or results, don't modify state"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Lazy Evaluation Example"
      },
      {
        "type": "code",
        "language": "java",
        "code": "List<Integer> nums = List.of(1, 2, 3, 4, 5);\n\n// None of this executes yet (no terminal op):\nStream<Integer> stream = nums.stream()\n    .filter(n -> {\n        System.out.println(\"Filtering \" + n);\n        return n > 2;\n    })\n    .map(n -> {\n        System.out.println(\"Mapping \" + n);\n        return n * n;\n    });\n\n// Still hasn't run! Stream is waiting.\n\n// NOW it executes (forEach is terminal):\nstream.forEach(System.out::println);\n\n// Output (see the order!):\n// Filtering 1\n// Filtering 2\n// Filtering 3\n// Mapping 3\n// 9\n// Filtering 4\n// Mapping 4\n// 16\n// Filtering 5\n// Mapping 5\n// 25\n\n// Note: it processes element-by-element, not all filters then all maps!"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Single-Use Principle"
      },
      {
        "type": "code",
        "language": "java",
        "code": "List<String> words = List.of(\"apple\", \"banana\", \"cherry\");\n\nStream<String> stream = words.stream();\n\n// First terminal operation: works fine\nlong count = stream.count();\nSystem.out.println(count);  // 3\n\n// WRONG — stream already used!\nstream.forEach(System.out::println);  // IllegalStateException!\n\n// CORRECT — create a new stream:\nstream = words.stream();  // Fresh stream\nstream.forEach(System.out::println);  // Works!"
      }
    ]
  },
  {
    "id": "creating-streams",
    "title": "7. Creating Streams",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "7. Creating Streams"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "From Collections"
      },
      {
        "type": "code",
        "language": "java",
        "code": "List<String> list = List.of(\"apple\", \"banana\", \"cherry\");\n\n// Sequential stream:\nStream<String> seq = list.stream();\n\n// Parallel stream (runs on multiple threads):\nStream<String> par = list.parallelStream();\n\n// Same with Set and other collections:\nSet<String> set = new HashSet<>(list);\nStream<String> setStream = set.stream();\n\n// Map has special streaming methods:\nMap<String, Integer> map = Map.of(\"a\", 1, \"b\", 2);\nmap.keySet().stream().forEach(System.out::println);    // a, b\nmap.values().stream().forEach(System.out::println);    // 1, 2\nmap.entrySet().stream()\n    .forEach(e -> System.out.println(e.getKey() + \"=\" + e.getValue()));"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "From Arrays"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Object array:\nString[] names = {\"Alice\", \"Bob\", \"Charlie\"};\nStream<String> stream1 = Arrays.stream(names);\n\n// Primitive array (returns IntStream, not Stream<Integer>):\nint[] nums = {1, 2, 3, 4, 5};\nIntStream stream2 = Arrays.stream(nums);\nSystem.out.println(stream2.sum());  // 15\n\n// Partial array:\nString[] all = {\"a\", \"b\", \"c\", \"d\"};\nStream<String> partial = Arrays.stream(all, 1, 3);  // elements at index 1-2\npartial.forEach(System.out::println);  // b, c"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Explicit Values with Stream.of()"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Direct values:\nStream<String> stream1 = Stream.of(\"apple\", \"banana\", \"cherry\");\nstream1.forEach(System.out::println);\n\n// From array (same as above):\nStream<Integer> stream2 = Stream.of(1, 2, 3, 4, 5);\nSystem.out.println(stream2.count());  // 5\n\n// Empty stream:\nStream<String> empty = Stream.empty();\nSystem.out.println(empty.count());  // 0"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Generate (Infinite) — Supplier"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Generate random numbers (infinite):\nStream<Double> randoms = Stream.generate(Math::random);\nrandoms.limit(5).forEach(System.out::println);  // 5 random doubles\n\n// Constant stream:\nStream<Integer> ones = Stream.generate(() -> 1);\nones.limit(3).forEach(System.out::println);  // 1, 1, 1\n\n// UUID generator:\nStream<String> uuids = Stream.generate(() -> UUID.randomUUID().toString());\nuuids.limit(2).forEach(System.out::println);\n\n// Current time stream:\nStream<LocalDate> dates = Stream.generate(LocalDate::now);\ndates.limit(1).forEach(System.out::println);  // Always today"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Iterate (Infinite) — Seed and Function"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Old API (Java 8):\nStream<Integer> naturals = Stream.iterate(0, n -> n + 1);\nnaturals.limit(5).forEach(System.out::println);  // 0, 1, 2, 3, 4\n\n// Evens (0, 2, 4, 6, ...):\nStream<Integer> evens = Stream.iterate(0, n -> n + 2);\nevens.limit(5).forEach(System.out::println);  // 0, 2, 4, 6, 8\n\n// With termination condition (Java 9+):\nStream<Integer> limited = Stream.iterate(\n    1,                    // seed\n    n -> n < 100,        // condition: continue while...\n    n -> n * 2           // next function: 1, 2, 4, 8, 16, 32, 64\n);\nlimited.forEach(System.out::println);\n\n// Real sequence: countdown\nStream<Integer> countdown = Stream.iterate(10, n -> n > 0, n -> n - 1);\ncountdown.forEach(System.out::println);  // 10, 9, 8, ..., 1"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Primitive Streams"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// IntStream.range (exclusive end):\nIntStream stream1 = IntStream.range(1, 6);\nstream1.forEach(System.out::println);  // 1, 2, 3, 4, 5\n\n// IntStream.rangeClosed (inclusive end):\nIntStream stream2 = IntStream.rangeClosed(1, 5);\nstream2.forEach(System.out::println);  // 1, 2, 3, 4, 5\n\n// LongStream:\nLongStream bigNums = LongStream.range(0L, 1_000_000L);\nSystem.out.println(bigNums.count());  // 1000000\n\n// DoubleStream:\nDoubleStream doubles = DoubleStream.of(1.1, 2.2, 3.3, 4.4);\nSystem.out.println(doubles.average());  // OptionalDouble[2.75]\n\n// From string (character codes):\nIntStream chars = \"Hello\".chars();  // Unicode values\nchars.forEach(c -> System.out.print((char)c + \" \"));  // H e l l o"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "From Files"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.nio.file.*;\n\n// Read lines from file:\ntry (Stream<String> lines = Files.lines(Path.of(\"data.txt\"))) {\n    lines.filter(s -> !s.isBlank())\n         .forEach(System.out::println);\n}\n\n// Read all lines (loads into memory):\nList<String> allLines = Files.readAllLines(Path.of(\"data.txt\"));\nallLines.stream().forEach(System.out::println);\n\n// Walk file tree:\ntry (Stream<Path> paths = Files.walk(Path.of(\"src\"))) {\n    paths.filter(Files::isRegularFile)\n         .filter(p -> p.toString().endsWith(\".java\"))\n         .forEach(System.out::println);\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Combining Streams"
      },
      {
        "type": "code",
        "language": "java",
        "code": "Stream<Integer> s1 = Stream.of(1, 2, 3);\nStream<Integer> s2 = Stream.of(4, 5, 6);\n\n// Concatenate:\nStream<Integer> combined = Stream.concat(s1, s2);\ncombined.forEach(System.out::println);  // 1, 2, 3, 4, 5, 6"
      }
    ]
  },
  {
    "id": "intermediate-ops",
    "title": "8. Intermediate Operations",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "8. Intermediate Operations"
      },
      {
        "type": "paragraph",
        "text": "Intermediate operations return a Stream and are **lazy** — they don't execute until a terminal operation is called."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "filter — Keep Elements Matching Condition"
      },
      {
        "type": "code",
        "language": "java",
        "code": "List<Integer> nums = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);\n\n// Keep only evens:\nnums.stream()\n    .filter(n -> n % 2 == 0)\n    .forEach(System.out::println);  // 2, 4, 6, 8, 10\n\n// Keep numbers > 5:\nnums.stream()\n    .filter(n -> n > 5)\n    .forEach(System.out::println);  // 6, 7, 8, 9, 10\n\n// Multiple filters:\nnums.stream()\n    .filter(n -> n > 3)\n    .filter(n -> n < 8)\n    .forEach(System.out::println);  // 4, 5, 6, 7"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "map — Transform Each Element"
      },
      {
        "type": "code",
        "language": "java",
        "code": "List<String> words = List.of(\"hello\", \"world\", \"java\");\n\n// String to length:\nwords.stream()\n    .map(String::length)\n    .forEach(System.out::println);  // 5, 5, 4\n\n// String to uppercase:\nwords.stream()\n    .map(String::toUpperCase)\n    .forEach(System.out::println);  // HELLO, WORLD, JAVA\n\n// Chained transformations:\nwords.stream()\n    .map(String::toUpperCase)\n    .map(s -> \"[\" + s + \"]\")\n    .forEach(System.out::println);  // [HELLO], [WORLD], [JAVA]\n\n// Integer transformations:\nList<Integer> nums = List.of(1, 2, 3, 4, 5);\nnums.stream()\n    .map(n -> n * n)\n    .forEach(System.out::println);  // 1, 4, 9, 16, 25"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "mapToInt, mapToLong, mapToDouble — Convert to Primitive Stream"
      },
      {
        "type": "code",
        "language": "java",
        "code": "List<String> words = List.of(\"hello\", \"world\", \"java\");\n\n// Convert to IntStream (lengths):\nint totalChars = words.stream()\n    .mapToInt(String::length)\n    .sum();\nSystem.out.println(totalChars);  // 14\n\n// Average length:\ndouble avgLen = words.stream()\n    .mapToInt(String::length)\n    .average()\n    .orElse(0);\nSystem.out.println(avgLen);  // 4.666...\n\n// List of objects to primitive stream:\nclass Person {\n    String name;\n    int age;\n    Person(String name, int age) { this.name = name; this.age = age; }\n    public int getAge() { return age; }\n}\n\nList<Person> people = List.of(\n    new Person(\"Alice\", 25),\n    new Person(\"Bob\", 30),\n    new Person(\"Carol\", 28)\n);\n\nint totalAge = people.stream()\n    .mapToInt(Person::getAge)\n    .sum();\nSystem.out.println(totalAge);  // 83"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "flatMap — Flatten Nested Structures"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// List of lists:\nList<List<Integer>> nested = List.of(\n    List.of(1, 2),\n    List.of(3, 4),\n    List.of(5)\n);\n\n// Flatten with flatMap:\nnested.stream()\n    .flatMap(Collection::stream)  // each list becomes a stream\n    .forEach(System.out::println);  // 1, 2, 3, 4, 5\n\n// Split sentences into words:\nList<String> sentences = List.of(\n    \"hello world\",\n    \"java streams\",\n    \"are powerful\"\n);\n\nsentences.stream()\n    .flatMap(s -> Arrays.stream(s.split(\" \")))\n    .forEach(System.out::println);\n// hello, world, java, streams, are, powerful\n\n// Real example: get all names from multiple groups\nclass Group {\n    List<String> members;\n    Group(String... names) { members = List.of(names); }\n}\n\nList<Group> groups = List.of(\n    new Group(\"Alice\", \"Bob\"),\n    new Group(\"Charlie\", \"Dave\", \"Eve\")\n);\n\ngroups.stream()\n    .flatMap(g -> g.members.stream())\n    .forEach(System.out::println);\n// Alice, Bob, Charlie, Dave, Eve"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "sorted — Order Elements"
      },
      {
        "type": "code",
        "language": "java",
        "code": "List<Integer> nums = List.of(5, 2, 8, 1, 9);\n\n// Natural order:\nnums.stream()\n    .sorted()\n    .forEach(System.out::println);  // 1, 2, 5, 8, 9\n\n// Reverse order:\nnums.stream()\n    .sorted(Comparator.reverseOrder())\n    .forEach(System.out::println);  // 9, 8, 5, 2, 1\n\n// String with case-insensitive order:\nList<String> words = List.of(\"Zebra\", \"apple\", \"Banana\", \"cherry\");\nwords.stream()\n    .sorted(String::compareToIgnoreCase)\n    .forEach(System.out::println);\n// apple, Banana, cherry, Zebra\n\n// Complex: sort by length, then alphabetically:\nwords.stream()\n    .sorted(Comparator\n        .comparingInt(String::length)\n        .thenComparing(String::compareTo))\n    .forEach(System.out::println);"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "distinct — Remove Duplicates"
      },
      {
        "type": "code",
        "language": "java",
        "code": "Stream<Integer> nums = Stream.of(1, 2, 2, 3, 3, 3, 4, 1, 5);\nnums.distinct()\n    .forEach(System.out::println);  // 1, 2, 3, 4, 5\n\n// With strings:\nStream<String> words = Stream.of(\"apple\", \"apple\", \"banana\", \"apple\");\nwords.distinct()\n    .forEach(System.out::println);  // apple, banana"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "limit and skip — Slice Stream"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Limit (take first N):\nStream.iterate(1, n -> n + 1)\n    .limit(5)\n    .forEach(System.out::println);  // 1, 2, 3, 4, 5\n\n// Skip (skip first N):\nStream.iterate(1, n -> n + 1)\n    .skip(3)\n    .limit(3)\n    .forEach(System.out::println);  // 4, 5, 6\n\n// Pagination example:\nList<Integer> data = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);\nint pageSize = 3;\nint pageNum = 1;  // 0-indexed\n\ndata.stream()\n    .skip((long)pageNum * pageSize)\n    .limit(pageSize)\n    .forEach(System.out::println);  // 4, 5, 6"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "takeWhile and dropWhile — Conditional Stop"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// takeWhile (take until condition fails) — Java 9+:\nStream.of(1, 2, 3, 4, 5, 4, 3, 2, 1)\n    .takeWhile(n -> n < 4)\n    .forEach(System.out::println);  // 1, 2, 3\n\n// dropWhile (skip until condition fails) — Java 9+:\nStream.of(1, 2, 3, 4, 5, 4, 3, 2, 1)\n    .dropWhile(n -> n < 4)\n    .forEach(System.out::println);  // 4, 5, 4, 3, 2, 1"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "peek — Debug/Side Effects (Avoid in Production)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "List<Integer> nums = List.of(1, 2, 3, 4, 5);\n\n// Using peek to debug:\nnums.stream()\n    .peek(n -> System.out.println(\"Before filter: \" + n))\n    .filter(n -> n > 2)\n    .peek(n -> System.out.println(\"After filter: \" + n))\n    .map(n -> n * n)\n    .peek(n -> System.out.println(\"After map: \" + n))\n    .forEach(System.out::println);\n\n// Output:\n// Before filter: 1\n// Before filter: 2\n// Before filter: 3\n// After filter: 3\n// After map: 9\n// 9\n// Before filter: 4\n// After filter: 4\n// After map: 16\n// 16\n// ...\n\n// DON'T use peek for logic — use it only for debugging!"
      }
    ]
  },
  {
    "id": "terminal-ops",
    "title": "9. Terminal Operations",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "9. Terminal Operations"
      },
      {
        "type": "paragraph",
        "text": "Terminal operations trigger execution of the stream and return a final result (not a stream). The stream is then consumed and can't be reused."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "collect — Gather into Collection"
      },
      {
        "type": "code",
        "language": "java",
        "code": "List<String> words = List.of(\"apple\", \"banana\", \"cherry\", \"date\");\n\n// Collect to List:\nList<String> list = words.stream()\n    .filter(w -> w.length() > 4)\n    .collect(Collectors.toList());\nSystem.out.println(list);  // [apple, banana, cherry]\n\n// Collect to unmodifiable list (Java 16+):\nList<String> immutable = words.stream()\n    .filter(w -> w.length() > 4)\n    .toList();  // shorthand, can't modify\n\n// Collect to Set:\nSet<String> set = words.stream()\n    .collect(Collectors.toSet());\n\n// Collect to specific collection type:\nTreeSet<String> sorted = words.stream()\n    .collect(Collectors.toCollection(TreeSet::new));\n\n// Join to String:\nString joined = words.stream()\n    .collect(Collectors.joining(\", \", \"[\", \"]\"));\nSystem.out.println(joined);  // [apple, banana, cherry, date]"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "forEach and forEachOrdered — Side Effects"
      },
      {
        "type": "code",
        "language": "java",
        "code": "List<String> words = List.of(\"apple\", \"banana\", \"cherry\");\n\n// forEach (order may vary in parallel):\nwords.stream()\n    .forEach(System.out::println);\n\n// forEachOrdered (guaranteed order, even in parallel):\nwords.parallelStream()\n    .forEachOrdered(System.out::println);  // apple, banana, cherry (ordered)"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "count — Count Elements"
      },
      {
        "type": "code",
        "language": "java",
        "code": "List<Integer> nums = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);\n\nlong total = nums.stream().count();\nSystem.out.println(total);  // 10\n\nlong evens = nums.stream()\n    .filter(n -> n % 2 == 0)\n    .count();\nSystem.out.println(evens);  // 5"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "min and max — Find Extremes"
      },
      {
        "type": "code",
        "language": "java",
        "code": "List<String> words = List.of(\"apple\", \"banana\", \"cherry\", \"date\", \"fig\");\n\n// Shortest word:\nOptional<String> shortest = words.stream()\n    .min(Comparator.comparingInt(String::length));\nSystem.out.println(shortest);  // Optional[fig]\n\n// Longest word:\nOptional<String> longest = words.stream()\n    .max(Comparator.comparingInt(String::length));\nSystem.out.println(longest);  // Optional[banana]\n\n// Alphabetically first:\nOptional<String> first = words.stream()\n    .min(String::compareTo);\nSystem.out.println(first);  // Optional[apple]\n\n// With integers:\nList<Integer> nums = List.of(5, 2, 8, 1, 9);\nOptional<Integer> max = nums.stream().max(Integer::compareTo);\nSystem.out.println(max);  // Optional[9]"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "reduce — Combine into Single Value"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Sum using reduce:\nint sum = IntStream.rangeClosed(1, 5)\n    .reduce(0, Integer::sum);  // (0+1+2+3+4+5)\nSystem.out.println(sum);  // 15\n\n// Multiply (factorial):\nint factorial = IntStream.rangeClosed(1, 5)\n    .reduce(1, (a, b) -> a * b);\nSystem.out.println(factorial);  // 120\n\n// Concatenate strings:\nList<String> words = List.of(\"Hello\", \"World\", \"Java\");\nString result = words.stream()\n    .reduce(\"\", (acc, word) -> acc + (acc.isEmpty() ? \"\" : \" \") + word);\nSystem.out.println(result);  // \"Hello World Java\"\n\n// Without initial value:\nList<Integer> nums = List.of(1, 2, 3, 4, 5);\nOptional<Integer> sum2 = nums.stream()\n    .reduce(Integer::sum);  // no initial value\nSystem.out.println(sum2);  // Optional[15]\n\n// With combiner (for parallel streams):\nint sum3 = nums.parallelStream()\n    .reduce(\n        0,                    // identity\n        Integer::sum,         // accumulator\n        Integer::sum          // combiner (for parallel)\n    );\nSystem.out.println(sum3);  // 15"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Matching Operations"
      },
      {
        "type": "code",
        "language": "java",
        "code": "List<String> words = List.of(\"apple\", \"banana\", \"cherry\", \"date\");\n\n// anyMatch — at least one matches:\nboolean hasLong = words.stream()\n    .anyMatch(w -> w.length() > 6);\nSystem.out.println(hasLong);  // true (banana, cherry)\n\n// allMatch — all match:\nboolean allStart_a = words.stream()\n    .allMatch(w -> w.startsWith(\"a\"));\nSystem.out.println(allStart_a);  // false\n\n// noneMatch — none match:\nboolean noneHaveX = words.stream()\n    .noneMatch(w -> w.contains(\"x\"));\nSystem.out.println(noneHaveX);  // true\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "findFirst and findAny — Get Single Element"
      },
      {
        "type": "code",
        "language": "java",
        "code": "List<String> words = List.of(\"apple\", \"banana\", \"cherry\", \"date\");\n\n// findFirst — first element matching condition:\nOptional<String> first = words.stream()\n    .filter(w -> w.startsWith(\"b\"))\n    .findFirst();\nSystem.out.println(first);  // Optional[banana]\n\n// findAny — any element (often faster in parallel):\nOptional<String> any = words.parallelStream()\n    .filter(w -> w.startsWith(\"c\"))\n    .findAny();\nSystem.out.println(any);  // Optional[cherry]"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "toArray — Convert to Array"
      },
      {
        "type": "code",
        "language": "java",
        "code": "List<String> words = List.of(\"apple\", \"banana\", \"cherry\");\n\n// Object array:\nObject[] objArray = words.stream().toArray();\n\n// Typed array:\nString[] strArray = words.stream().toArray(String[]::new);\nSystem.out.println(Arrays.toString(strArray));  // [apple, banana, cherry]\n\n// Primitive arrays (from IntStream):\nint[] nums = IntStream.of(1, 2, 3, 4, 5).toArray();\nSystem.out.println(Arrays.toString(nums));  // [1, 2, 3, 4, 5]"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Numeric Terminal Operations"
      },
      {
        "type": "code",
        "language": "java",
        "code": "int[] nums = {5, 2, 8, 1, 9, 3};\nIntStream stream = Arrays.stream(nums);\n\n// sum:\nint total = stream.sum();  // 28\n\n// average (returns OptionalDouble):\nstream = Arrays.stream(nums);\nOptionalDouble avg = stream.average();\nSystem.out.println(avg.orElse(0));  // 4.666...\n\n// min and max (return OptionalInt):\nstream = Arrays.stream(nums);\nOptionalInt minimum = stream.min();\nSystem.out.println(minimum.orElse(-1));  // 1\n\nstream = Arrays.stream(nums);\nOptionalInt maximum = stream.max();\nSystem.out.println(maximum.orElse(-1));  // 9\n\n// summaryStatistics (all at once):\nstream = Arrays.stream(nums);\nIntSummaryStatistics stats = stream.summaryStatistics();\nSystem.out.println(\"Count: \" + stats.getCount());      // 6\nSystem.out.println(\"Sum: \" + stats.getSum());          // 28\nSystem.out.println(\"Min: \" + stats.getMin());          // 1\nSystem.out.println(\"Max: \" + stats.getMax());          // 9\nSystem.out.println(\"Average: \" + stats.getAverage());  // 4.666..."
      }
    ]
  },
  {
    "id": "collectors",
    "title": "10. Collectors",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "10. Collectors"
      },
      {
        "type": "paragraph",
        "text": "**Collectors** are used with `collect()` to gather stream elements into collections, perform aggregations, or create custom results."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "toList, toSet, toCollection"
      },
      {
        "type": "code",
        "language": "java",
        "code": "List<String> words = List.of(\"apple\", \"banana\", \"cherry\", \"date\");\n\n// To List:\nList<String> list = words.stream()\n    .filter(w -> w.length() > 4)\n    .collect(Collectors.toList());\nSystem.out.println(list);  // [apple, banana, cherry]\n\n// To unmodifiable List (Java 16+):\nList<String> immutable = words.stream()\n    .toList();  // shorthand\n\n// To Set (removes duplicates):\nSet<String> set = words.stream()\n    .collect(Collectors.toSet());\n\n// To specific type (TreeSet, LinkedHashSet, etc.):\nTreeSet<String> sorted = words.stream()\n    .collect(Collectors.toCollection(TreeSet::new));"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "toMap — Create a Map"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class Person {\n    String name;\n    int salary;\n    Person(String name, int salary) { this.name = name; this.salary = salary; }\n}\n\nList<Person> people = List.of(\n    new Person(\"Alice\", 90000),\n    new Person(\"Bob\", 70000),\n    new Person(\"Carol\", 85000)\n);\n\n// Simple toMap:\nMap<String, Integer> nameSalary = people.stream()\n    .collect(Collectors.toMap(\n        Person::getName,       // key\n        Person::getSalary      // value\n    ));\n// {Alice=90000, Bob=70000, Carol=85000}\n\n// Handle duplicate keys (merge function):\nList<Person> duplicate = List.of(\n    new Person(\"Alice\", 90000),\n    new Person(\"Alice\", 95000)  // duplicate key!\n);\n\nMap<String, Integer> safe = duplicate.stream()\n    .collect(Collectors.toMap(\n        Person::getName,\n        Person::getSalary,\n        Integer::max  // merge duplicates: keep max\n    ));\n// {Alice=95000}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "groupingBy — Group by Key"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class Employee {\n    String name, dept;\n    int salary;\n    Employee(String n, String d, int s) { name = n; dept = d; salary = s; }\n}\n\nList<Employee> employees = List.of(\n    new Employee(\"Alice\", \"Engineering\", 90000),\n    new Employee(\"Bob\", \"Marketing\", 70000),\n    new Employee(\"Carol\", \"Engineering\", 85000),\n    new Employee(\"Dave\", \"Marketing\", 75000)\n);\n\n// Group by department:\nMap<String, List<Employee>> byDept = employees.stream()\n    .collect(Collectors.groupingBy(Employee::getDept));\n// {Engineering=[Alice, Carol], Marketing=[Bob, Dave]}\n\n// Group and count:\nMap<String, Long> countByDept = employees.stream()\n    .collect(Collectors.groupingBy(\n        Employee::getDept,\n        Collectors.counting()\n    ));\n// {Engineering=2, Marketing=2}\n\n// Group and sum:\nMap<String, Integer> totalSalaryByDept = employees.stream()\n    .collect(Collectors.groupingBy(\n        Employee::getDept,\n        Collectors.summingInt(Employee::getSalary)\n    ));\n// {Engineering=175000, Marketing=145000}\n\n// Group and average:\nMap<String, Double> avgSalaryByDept = employees.stream()\n    .collect(Collectors.groupingBy(\n        Employee::getDept,\n        Collectors.averagingInt(Employee::getSalary)\n    ));\n// {Engineering=87500.0, Marketing=72500.0}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "partitioningBy — Partition Into True/False Groups"
      },
      {
        "type": "code",
        "language": "java",
        "code": "List<Employee> employees = List.of(\n    new Employee(\"Alice\", \"Eng\", 90000),\n    new Employee(\"Bob\", \"Mkt\", 70000),\n    new Employee(\"Carol\", \"Eng\", 85000),\n    new Employee(\"Dave\", \"Mkt\", 75000)\n);\n\n// Partition: high earners vs others:\nMap<Boolean, List<Employee>> highEarners = employees.stream()\n    .collect(Collectors.partitioningBy(e -> e.salary > 80000));\n// {true=[Alice, Carol], false=[Bob, Dave]}\n\n// With downstream collector:\nMap<Boolean, Long> count = employees.stream()\n    .collect(Collectors.partitioningBy(\n        e -> e.salary > 80000,\n        Collectors.counting()\n    ));\n// {true=2, false=2}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "joining — Concatenate Strings"
      },
      {
        "type": "code",
        "language": "java",
        "code": "List<String> words = List.of(\"apple\", \"banana\", \"cherry\");\n\n// Simple join:\nString result1 = words.stream()\n    .collect(Collectors.joining());\nSystem.out.println(result1);  // \"applebananacherry\"\n\n// With delimiter:\nString result2 = words.stream()\n    .collect(Collectors.joining(\", \"));\nSystem.out.println(result2);  // \"apple, banana, cherry\"\n\n// With prefix and suffix:\nString result3 = words.stream()\n    .collect(Collectors.joining(\", \", \"[\", \"]\"));\nSystem.out.println(result3);  // \"[apple, banana, cherry]\"\n\n// Join objects (map first):\nList<Person> people = List.of(\n    new Person(\"Alice\", 25),\n    new Person(\"Bob\", 30)\n);\nString names = people.stream()\n    .map(Person::getName)\n    .collect(Collectors.joining(\" and \"));\nSystem.out.println(names);  // \"Alice and Bob\""
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Numeric Collectors"
      },
      {
        "type": "code",
        "language": "java",
        "code": "List<Person> people = List.of(\n    new Person(\"Alice\", 25),\n    new Person(\"Bob\", 30),\n    new Person(\"Carol\", 28)\n);\n\n// counting:\nlong count = people.stream()\n    .collect(Collectors.counting());\nSystem.out.println(count);  // 3\n\n// summingInt:\nint totalAge = people.stream()\n    .collect(Collectors.summingInt(Person::getAge));\nSystem.out.println(totalAge);  // 83\n\n// averagingInt:\ndouble avgAge = people.stream()\n    .collect(Collectors.averagingInt(Person::getAge));\nSystem.out.println(avgAge);  // 27.666...\n\n// summarizingInt (all stats):\nIntSummaryStatistics stats = people.stream()\n    .collect(Collectors.summarizingInt(Person::getAge));\nSystem.out.println(\"Count: \" + stats.getCount());      // 3\nSystem.out.println(\"Sum: \" + stats.getSum());          // 83\nSystem.out.println(\"Average: \" + stats.getAverage());  // 27.666..."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "collectingAndThen — Transform Result"
      },
      {
        "type": "code",
        "language": "java",
        "code": "List<String> words = List.of(\"apple\", \"banana\", \"cherry\");\n\n// Collect to list, then make unmodifiable:\nList<String> unmod = words.stream()\n    .collect(Collectors.collectingAndThen(\n        Collectors.toList(),\n        Collections::unmodifiableList\n    ));\n// unmod is now immutable\n\n// Collect then sort:\nList<String> sorted = words.stream()\n    .collect(Collectors.collectingAndThen(\n        Collectors.toList(),\n        list -> { list.sort(String::compareTo); return list; }\n    ));"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "teeing — Use Two Collectors"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Java 12+\nList<Integer> nums = List.of(1, 2, 3, 4, 5);\n\n// Compute count and sum simultaneously:\nvar result = nums.stream()\n    .collect(Collectors.teeing(\n        Collectors.counting(),\n        Collectors.summingInt(Integer::intValue),\n        (count, sum) -> \"Count: \" + count + \", Sum: \" + sum\n    ));\nSystem.out.println(result);  // \"Count: 5, Sum: 15\"\n\n// Another example: min and max at once:\nvar minMax = nums.stream()\n    .collect(Collectors.teeing(\n        Collectors.minBy(Integer::compareTo),\n        Collectors.maxBy(Integer::compareTo),\n        (min, max) -> \"Range: \" + min.orElse(0) + \"-\" + max.orElse(0)\n    ));\nSystem.out.println(minMax);  // \"Range: 1-5\""
      }
    ]
  },
  {
    "id": "parallel-streams",
    "title": "11. Parallel Streams",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "11. Parallel Streams"
      },
      {
        "type": "paragraph",
        "text": "Parallel streams split the work across multiple threads. They're useful for large datasets and CPU-intensive operations, but can hurt performance with small data or I/O."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Creating Parallel Streams"
      },
      {
        "type": "code",
        "language": "java",
        "code": "List<Integer> nums = List.of(1, 2, 3, 4, 5);\n\n// Method 1: parallelStream():\nnums.parallelStream()\n    .filter(n -> n % 2 == 0)\n    .forEach(System.out::println);\n\n// Method 2: convert existing stream to parallel:\nnums.stream()\n    .parallel()\n    .filter(n -> n % 2 == 0)\n    .forEach(System.out::println);\n\n// Convert back to sequential:\nnums.parallelStream()\n    .sequential()\n    .forEach(System.out::println);"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "When Parallel Helps"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// ✓ Good use case: large dataset, CPU-intensive operation\nlong count = LongStream.rangeClosed(1, 100_000_000)\n    .parallel()\n    .filter(n -> {\n        // CPU-intensive: calculate if prime\n        return isPrime(n);\n    })\n    .count();\nSystem.out.println(count);\n\n// Helper function\nstatic boolean isPrime(long n) {\n    if (n < 2) return false;\n    if (n == 2) return true;\n    if (n % 2 == 0) return false;\n    for (long i = 3; i * i <= n; i += 2) {\n        if (n % i == 0) return false;\n    }\n    return true;\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "When Parallel Hurts"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// ✗ Bad: small data set\nList<Integer> tiny = List.of(1, 2, 3);\ntiny.parallelStream()\n    .map(n -> n * n)\n    .forEach(System.out::println);\n// Parallel overhead is worse than sequential!\n\n// ✗ Bad: I/O operations\nList<String> urls = List.of(\"url1\", \"url2\", \"url3\");\nurls.parallelStream()\n    .map(this::fetchUrl)  // Network calls are slow, blocking\n    .collect(Collectors.toList());\n// Threads wait on network, defeating parallelism\n\n// ✗ Bad: state mutation (race conditions)\nList<Integer> items = new ArrayList<>();\nIntStream.range(0, 1000).parallel()\n    .forEach(items::add);  // WRONG — concurrent modification!\n// items will be incomplete or corrupted"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Thread-Safe Collection"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// WRONG — mutable shared state in parallel:\nList<Integer> results = new ArrayList<>();\nIntStream.range(0, 1000).parallel()\n    .forEach(results::add);  // Race condition!\n\n// CORRECT — use collect:\nList<Integer> results2 = IntStream.range(0, 1000)\n    .parallel()\n    .boxed()\n    .collect(Collectors.toList());  // Thread-safe\n\n// CORRECT — use parallelism properly:\nSet<Integer> results3 = IntStream.range(0, 1000)\n    .parallel()\n    .boxed()\n    .collect(Collectors.toUnmodifiableSet());"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Ordering in Parallel Streams"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Parallel may not preserve order:\nList<Integer> nums = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);\n\n// Sequential: always [1, 2, 3, 4, 5]\nnums.stream()\n    .filter(n -> n <= 5)\n    .forEach(System.out::print);  // 1 2 3 4 5\n\n// Parallel: may print in any order\nnums.parallelStream()\n    .filter(n -> n <= 5)\n    .forEach(System.out::print);  // maybe: 3 1 4 2 5\n\n// forEachOrdered guarantees order even in parallel:\nnums.parallelStream()\n    .filter(n -> n <= 5)\n    .forEachOrdered(System.out::print);  // Always: 1 2 3 4 5"
      }
    ]
  },
  {
    "id": "optional",
    "title": "12. Optional&lt;T&gt;",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "12. Optional<T>"
      },
      {
        "type": "paragraph",
        "text": "**Optional** is a container for a value that may or may not be present. It replaces null checking and makes code safer."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Creating Optional Values"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Optional with value:\nOptional<String> present = Optional.of(\"Hello\");  // throws if null\n\n// Optional that may be null:\nOptional<String> maybe = Optional.ofNullable(null);  // OK\n\n// Empty Optional:\nOptional<String> empty = Optional.empty();\n\n// Check what you have:\nSystem.out.println(present.isPresent());  // true\nSystem.out.println(maybe.isPresent());    // false\nSystem.out.println(empty.isEmpty());      // true (Java 11+)"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Getting the Value Safely"
      },
      {
        "type": "code",
        "language": "java",
        "code": "Optional<String> opt = Optional.of(\"Hello\");\nOptional<String> empty = Optional.empty();\n\n// WRONG — throws NoSuchElementException if empty:\nString val = empty.get();  // java.util.NoSuchElementException\n\n// CORRECT — provide default:\nString safe1 = empty.orElse(\"default\");\nSystem.out.println(safe1);  // \"default\"\n\n// CORRECT — lazy default (computed only if needed):\nString safe2 = empty.orElseGet(() -> \"computed\");\nSystem.out.println(safe2);\n\n// CORRECT — throw custom exception:\nString safe3 = empty.orElseThrow(IllegalStateException::new);  // throws\n\n// CORRECT — get or null:\nString safe4 = empty.orElse(null);  // returns null instead of exception"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Transforming Optional Values"
      },
      {
        "type": "code",
        "language": "java",
        "code": "Optional<String> opt = Optional.of(\"hello\");\nOptional<String> empty = Optional.empty();\n\n// map — transform if present:\nOptional<Integer> len = opt.map(String::length);\nSystem.out.println(len);  // Optional[5]\n\nOptional<Integer> emptyLen = empty.map(String::length);\nSystem.out.println(emptyLen);  // Optional.empty\n\n// flatMap — when mapper returns Optional:\nOptional<Optional<String>> nested = opt.map(s -> Optional.of(s.toUpperCase()));\n// BAD — nested Optionals!\n\nOptional<String> flat = opt.flatMap(s -> Optional.of(s.toUpperCase()));\nSystem.out.println(flat);  // Optional[HELLO]\n\n// Real use: null-safe chaining:\nclass Address {\n    String city;\n    Address(String c) { this.city = c; }\n}\n\nclass Person {\n    Address addr;\n    Person(Address a) { this.addr = a; }\n}\n\nPerson p = new Person(null);\nString city = Optional.ofNullable(p)\n    .flatMap(person -> Optional.ofNullable(person.addr))\n    .map(addr -> addr.city)\n    .orElse(\"Unknown\");\nSystem.out.println(city);  // \"Unknown\""
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Conditional Actions"
      },
      {
        "type": "code",
        "language": "java",
        "code": "Optional<String> opt = Optional.of(\"Hello\");\n\n// ifPresent — act if value exists:\nopt.ifPresent(s -> System.out.println(s));  // prints \"Hello\"\n\n// ifPresentOrElse — do one of two things (Java 9+):\nopt.ifPresentOrElse(\n    s -> System.out.println(\"Got: \" + s),\n    () -> System.out.println(\"Nothing\")\n);  // prints \"Got: Hello\"\n\nOptional<String> empty = Optional.empty();\nempty.ifPresentOrElse(\n    s -> System.out.println(\"Got: \" + s),\n    () -> System.out.println(\"Nothing\")\n);  // prints \"Nothing\""
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Filtering Optional"
      },
      {
        "type": "code",
        "language": "java",
        "code": "Optional<String> opt = Optional.of(\"hello\");\n\n// filter — keep if predicate is true:\nOptional<String> long5 = opt.filter(s -> s.length() > 3);\nSystem.out.println(long5);  // Optional[hello]\n\nOptional<String> long10 = opt.filter(s -> s.length() > 10);\nSystem.out.println(long10);  // Optional.empty\n\n// Chaining filters:\nopt.filter(s -> s.length() > 2)\n   .filter(s -> s.startsWith(\"h\"))\n   .ifPresent(System.out::println);  // prints \"hello\""
      },
      {
        "type": "heading",
        "level": 3,
        "text": "or — Fallback Optional"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// or — return fallback Optional if empty (Java 9+):\nOptional<String> first = Optional.empty();\nOptional<String> second = Optional.of(\"fallback\");\n\nOptional<String> result = first.or(() -> second);\nSystem.out.println(result);  // Optional[fallback]\n\n// Chain multiple options:\nOptional<String> value = empty1\n    .or(() -> empty2)\n    .or(() -> Optional.of(\"final\"))\n    .orElse(\"default\");\nSystem.out.println(value);  // \"final\""
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Optional in Streams"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// stream() converts Optional to 0 or 1 element stream (Java 9+):\nList<Optional<String>> optionals = List.of(\n    Optional.of(\"apple\"),\n    Optional.empty(),\n    Optional.of(\"cherry\")\n);\n\noptionals.stream()\n    .flatMap(Optional::stream)  // flatten to values only\n    .forEach(System.out::println);\n// apple\n// cherry\n\n// Remove nulls from stream:\nList<String> items = List.of(\"a\", null, \"b\", null, \"c\");\nitems.stream()\n    .map(Optional::ofNullable)\n    .flatMap(Optional::stream)\n    .forEach(System.out::println);\n// a\n// b\n// c"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Common Anti-Patterns"
      },
      {
        "type": "code",
        "language": "java",
        "code": "Optional<String> opt = Optional.of(\"hello\");\n\n// ✗ WRONG — checking isPresent then get:\nif (opt.isPresent()) {\n    System.out.println(opt.get());\n}\n\n// ✓ CORRECT — use ifPresent:\nopt.ifPresent(System.out::println);\n\n// ✗ WRONG — using Optional as parameter:\nvoid process(Optional<String> value) {  // BAD design\n    System.out.println(value.orElse(\"\"));\n}\n\n// ✓ CORRECT — use null or separate methods:\nvoid process(String value) {  // if required\n}\n\n// ✗ WRONG — nested Optionals:\nOptional<Optional<String>> bad = Optional.of(Optional.of(\"value\"));\n\n// ✓ CORRECT — use flatMap:\nOptional<String> good = Optional.of(\"value\");\n\n// ✗ WRONG — checking opt.isPresent() then conditional logic:\nif (opt.isPresent()) {\n    System.out.println(\"Value: \" + opt.get().length());\n}\n\n// ✓ CORRECT — use map and ifPresent:\nopt.map(String::length)\n   .ifPresent(len -> System.out.println(\"Length: \" + len));"
      }
    ]
  },
  {
    "id": "java-time",
    "title": "13. java.time API",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "13. java.time API"
      },
      {
        "type": "paragraph",
        "text": "The `java.time` package provides immutable, thread-safe date/time classes (replaces old Date/Calendar API)."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "LocalDate — Date Only"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.time.*;\nimport java.time.temporal.*;\n\n// Current date:\nLocalDate today = LocalDate.now();\nSystem.out.println(today);  // 2026-05-10\n\n// Specific date:\nLocalDate birthday = LocalDate.of(1990, Month.MARCH, 15);\nLocalDate xmas = LocalDate.of(2024, 12, 25);\n\n// Parse from string:\nLocalDate parsed = LocalDate.parse(\"2024-12-25\");\n\n// Add/subtract:\nLocalDate nextWeek = today.plusWeeks(1);\nLocalDate nextMonth = today.plusMonths(1);\nLocalDate lastYear = today.minusYears(1);\n\n// Access components:\nint year = today.getYear();           // 2026\nint month = today.getMonthValue();     // 1-12 (5 = May)\nint dayOfMonth = today.getDayOfMonth(); // 1-31 (10)\n\n// Day of week:\nDayOfWeek dow = today.getDayOfWeek();  // SATURDAY\nSystem.out.println(dow);  // SATURDAY\n\n// Compare dates:\nboolean isBefore = birthday.isBefore(today);  // true\nboolean isAfter = today.isAfter(birthday);    // true\nboolean same = today.equals(birthday);        // false\n\n// Leap year:\nboolean isLeap = LocalDate.of(2024, 1, 1).isLeapYear();  // true"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "LocalTime — Time Only"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Current time:\nLocalTime now = LocalTime.now();\nSystem.out.println(now);  // 14:30:45.123456789\n\n// Specific time:\nLocalTime noon = LocalTime.of(12, 0);\nLocalTime meeting = LocalTime.of(14, 30, 45);\nLocalTime precise = LocalTime.of(14, 30, 45, 123000000);  // hour, min, sec, nano\n\n// Parse:\nLocalTime t = LocalTime.parse(\"14:30:45\");\n\n// Add/subtract:\nLocalTime later = now.plusHours(2);\nLocalTime earlier = now.minusMinutes(30);\n\n// Access components:\nint hour = now.getHour();       // 0-23\nint minute = now.getMinute();   // 0-59\nint second = now.getSecond();   // 0-59\nint nano = now.getNano();       // 0-999999999\n\n// Compare:\nboolean isBefore = meeting.isBefore(LocalTime.of(13, 0));  // false\nboolean isAfter = now.isAfter(noon);                       // depends on now"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "LocalDateTime — Date and Time"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Current date and time:\nLocalDateTime dt = LocalDateTime.now();\nSystem.out.println(dt);  // 2026-05-10T14:30:45.123456789\n\n// Specific date and time:\nLocalDateTime xmas = LocalDateTime.of(2024, 12, 25, 0, 0);\nLocalDateTime meeting = LocalDateTime.of(2024, 12, 25, 14, 30, 45);\n\n// Combine date and time:\nLocalDate date = LocalDate.of(2024, 12, 25);\nLocalTime time = LocalTime.of(14, 30);\nLocalDateTime combined = LocalDateTime.of(date, time);\n\n// Parse:\nLocalDateTime parsed = LocalDateTime.parse(\"2024-12-25T14:30:45\");\n\n// Add/subtract:\nLocalDateTime later = dt.plusDays(1).plusHours(2);\n\n// Access components:\nLocalDate dateOnly = dt.toLocalDate();\nLocalTime timeOnly = dt.toLocalTime();"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "ZonedDateTime — With Timezone"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Current date/time in system timezone:\nZonedDateTime zdt = ZonedDateTime.now();\nSystem.out.println(zdt);  // 2026-05-10T14:30:45.123456789-05:00\n\n// Specific timezone:\nZonedDateTime nyc = ZonedDateTime.now(ZoneId.of(\"America/New_York\"));\nZonedDateTime tokyo = ZonedDateTime.now(ZoneId.of(\"Asia/Tokyo\"));\nZonedDateTime utc = ZonedDateTime.now(ZoneId.of(\"UTC\"));\n\n// System timezone:\nZoneId sysZone = ZoneId.systemDefault();\nZonedDateTime local = ZonedDateTime.now(sysZone);\n\n// Convert between timezones:\nZonedDateTime nycTime = LocalDateTime.of(2024, 12, 25, 14, 0)\n    .atZone(ZoneId.of(\"America/New_York\"));\nZonedDateTime tokyoTime = nycTime.withZoneSameInstant(ZoneId.of(\"Asia/Tokyo\"));\n\n// Access timezone:\nZoneId zone = zdt.getZone();\nSystem.out.println(zone);"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Instant — Machine Timestamp"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Current moment (epoch):\nInstant now = Instant.now();\nSystem.out.println(now);  // 2026-05-10T19:30:45.123456789Z\n\n// Epoch instant:\nInstant epoch = Instant.EPOCH;  // 1970-01-01T00:00:00Z\n\n// Convert to milliseconds since epoch:\nlong millis = now.toEpochMilli();\nlong seconds = now.getEpochSecond();\n\n// Create from epoch:\nInstant from = Instant.ofEpochMilli(1704067200000L);\nInstant from2 = Instant.ofEpochSecond(1704067200);\n\n// Add/subtract:\nInstant later = now.plusSeconds(3600);  // 1 hour later\nInstant earlier = now.minusDuration(Duration.ofMinutes(30));\n\n// Convert to ZonedDateTime:\nZonedDateTime zdt = now.atZone(ZoneId.of(\"America/New_York\"));"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Duration — Time Difference"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Between two times:\nLocalTime t1 = LocalTime.of(9, 0);\nLocalTime t2 = LocalTime.of(17, 0);\nDuration workDay = Duration.between(t1, t2);\nSystem.out.println(workDay);  // PT8H\n\nlong hours = workDay.toHours();    // 8\nlong minutes = workDay.toMinutes();  // 480\n\n// Create duration:\nDuration d1 = Duration.ofHours(2);\nDuration d2 = Duration.ofMinutes(30);\nDuration d3 = d1.plusMinutes(30);  // PT2H30M\n\n// Add/subtract durations:\nLocalDateTime start = LocalDateTime.now();\nLocalDateTime end = start.plus(Duration.ofDays(1).plusHours(2));\n\n// With dates (use Period instead):\n// Duration.between only works with time-based values"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Period — Date Difference"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Between two dates:\nLocalDate birthday = LocalDate.of(1990, 3, 15);\nLocalDate today = LocalDate.now();\nPeriod age = Period.between(birthday, today);\n\nSystem.out.println(age);  // P35Y1M26D\nint years = age.getYears();    // 35\nint months = age.getMonths();  // 1\nint days = age.getDays();      // 26\n\n// Create period:\nPeriod p1 = Period.ofYears(1);\nPeriod p2 = Period.ofMonths(6);\nPeriod p3 = Period.ofWeeks(2);\nPeriod p4 = Period.ofDays(30);\n\n// Combine:\nPeriod combined = p1.plusMonths(6).plusDays(15);\n\n// Add to date:\nLocalDate future = today.plus(combined);"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Formatting and Parsing"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.time.format.*;\n\nLocalDate today = LocalDate.now();\n\n// Predefined formatters:\nString iso = DateTimeFormatter.ISO_LOCAL_DATE.format(today);\nSystem.out.println(iso);  // 2026-05-10\n\n// Custom patterns:\nDateTimeFormatter fmt1 = DateTimeFormatter.ofPattern(\"dd/MM/yyyy\");\nString formatted1 = today.format(fmt1);  // 10/05/2026\n\nDateTimeFormatter fmt2 = DateTimeFormatter.ofPattern(\"MMM dd, yyyy\");\nString formatted2 = today.format(fmt2);  // May 10, 2026\n\nDateTimeFormatter fmt3 = DateTimeFormatter.ofPattern(\"EEEE, MMMM d, yyyy\");\nString formatted3 = today.format(fmt3);  // Saturday, May 10, 2026\n\n// With time:\nLocalDateTime dt = LocalDateTime.now();\nDateTimeFormatter fmt4 = DateTimeFormatter.ofPattern(\"yyyy-MM-dd HH:mm:ss\");\nString formatted4 = dt.format(fmt4);  // 2026-05-10 14:30:45\n\n// Parsing:\nString dateStr = \"25/12/2024\";\nLocalDate parsed = LocalDate.parse(dateStr, DateTimeFormatter.ofPattern(\"dd/MM/yyyy\"));\n\nString timeStr = \"14:30:45\";\nLocalTime parsedTime = LocalTime.parse(timeStr);  // default format"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Temporal Adjusters"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.time.temporal.TemporalAdjusters;\n\nLocalDate today = LocalDate.now();\n\n// Next specific day:\nLocalDate nextMonday = today.with(TemporalAdjusters.next(DayOfWeek.MONDAY));\nLocalDate nextFriday = today.with(TemporalAdjusters.next(DayOfWeek.FRIDAY));\n\n// Previous specific day:\nLocalDate lastSunday = today.with(TemporalAdjusters.previous(DayOfWeek.SUNDAY));\n\n// First/last day of month:\nLocalDate firstOfMonth = today.with(TemporalAdjusters.firstDayOfMonth());\nLocalDate lastOfMonth = today.with(TemporalAdjusters.lastDayOfMonth());\n\n// First/last day of year:\nLocalDate newYear = today.with(TemporalAdjusters.firstDayOfYear());\nLocalDate yearEnd = today.with(TemporalAdjusters.lastDayOfYear());\n\n// Last day of next month:\nLocalDate future = today.with(TemporalAdjusters.lastDayOfNextMonth());"
      }
    ]
  }
]
