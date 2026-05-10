// Chapter 4 - Structured block data (no raw HTML)
export const sections = [
  {
    "id": "method-anatomy",
    "title": "1. Method Anatomy",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "1. Method Anatomy"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Anatomy of a Method Signature"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// modifier   return  name     parameters\n   public     int     add   (int a, int b) {\n       return a + b;     // body\n   }"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "**Access modifier:** public, private, protected, default (package-private)",
          "**Return type:** any type (int, String, etc.) or void (no return)",
          "**Method name:** camelCase convention (addTwoNumbers, calculateSum)",
          "**Parameters:** (type name, type name, ...) — can be empty ()",
          "**Method body:** code inside {}"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Examples: Different Method Signatures"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// 1. void, no parameters\npublic void greet() {\n    System.out.println(\"Hello!\");\n}\n\n// 2. returns primitive, two parameters\npublic int multiply(int x, int y) {\n    return x * y;\n}\n\n// 3. returns String, one parameter\npublic String uppercase(String s) {\n    return s.toUpperCase();\n}\n\n// 4. private, returns boolean\nprivate boolean isEven(int n) {\n    return n % 2 == 0;\n}\n\n// 5. protected, takes variable number of parameters (covered later)\nprotected double average(double... numbers) {\n    double sum = 0;\n    for (double n : numbers) sum += n;\n    return numbers.length > 0 ? sum / numbers.length : 0;\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Real-World Example: Calculator"
      },
      {
        "type": "code",
        "language": "java",
        "code": "public class Calculator {\n    // public methods (anyone can call)\n    public int add(int a, int b) {\n        return a + b;\n    }\n\n    public int subtract(int a, int b) {\n        return a - b;\n    }\n\n    public int multiply(int a, int b) {\n        return a * b;\n    }\n\n    // private helper method (only for internal use)\n    private void log(String message) {\n        System.out.println(\"[LOG] \" + message);\n    }\n}\n\n// Usage:\nCalculator calc = new Calculator();\nint result = calc.add(5, 3);  // 8\nSystem.out.println(result);"
      }
    ]
  },
  {
    "id": "calling-methods",
    "title": "2. Calling Methods",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "2. Calling Methods"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "**Instance method:** called on an object: `object.method(args)`",
          "**Static method:** called on class: `ClassName.method(args)` or just `method(args)`",
          "**Method chaining:** call methods on the result of previous method"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Instance Method Calls"
      },
      {
        "type": "code",
        "language": "java",
        "code": "String text = \"  Hello World  \";\n\n// Each call on the object\nString result = text.trim();              // \"Hello World\"\nresult = result.toUpperCase();            // \"HELLO WORLD\"\nresult = result.replace(\"O\", \"0\");        // \"HELL0 W0RLD\"\n\nSystem.out.println(result);"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Static Method Calls"
      },
      {
        "type": "code",
        "language": "java",
        "code": "public class MathHelper {\n    // static method (belongs to class, not instances)\n    public static int absolute(int n) {\n        return n < 0 ? -n : n;\n    }\n\n    public static void main(String[] args) {\n        // call static method on the class\n        int result = MathHelper.absolute(-42);  // 42\n        System.out.println(result);\n\n        // or directly if in same class\n        int result2 = absolute(-10);           // 10\n    }\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Method Chaining"
      },
      {
        "type": "code",
        "language": "java",
        "code": "String input = \"  Java Programming  \";\n\n// Chain multiple method calls:\nString result = input\n    .trim()                    // \"Java Programming\"\n    .toUpperCase()             // \"JAVA PROGRAMMING\"\n    .replace(\" \", \"_\")         // \"JAVA_PROGRAMMING\"\n    .substring(0, 4);          // \"JAVA\"\n\nSystem.out.println(result);    // JAVA"
      }
    ]
  },
  {
    "id": "return-types",
    "title": "3. Return Types",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "3. Return Types"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "**void:** method returns nothing",
          "**Primitive:** int, double, boolean, etc.",
          "**Object:** String, List, custom class, etc.",
          "**Array:** int[], String[], etc.",
          "**Multiple return paths:** different return statements for different cases"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "void Return (No Value)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "public void printMessage(String msg) {\n    System.out.println(msg);\n    // no return statement needed\n}\n\nprintMessage(\"Hello\");  // prints \"Hello\", returns nothing"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Primitive Return"
      },
      {
        "type": "code",
        "language": "java",
        "code": "public int add(int a, int b) {\n    return a + b;\n}\n\npublic double divide(double a, double b) {\n    return a / b;\n}\n\npublic boolean isAdult(int age) {\n    return age >= 18;\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Object Return"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.util.ArrayList;\nimport java.util.List;\n\npublic String getName() {\n    return \"Alice\";\n}\n\npublic List<String> getColors() {\n    List<String> colors = new ArrayList<>();\n    colors.add(\"Red\");\n    colors.add(\"Green\");\n    colors.add(\"Blue\");\n    return colors;\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Array Return"
      },
      {
        "type": "code",
        "language": "java",
        "code": "public int[] getFirstTen() {\n    int[] numbers = new int[10];\n    for (int i = 0; i < 10; i++) {\n        numbers[i] = i + 1;\n    }\n    return numbers;\n}\n\npublic String[] getNames() {\n    return new String[]{\"Alice\", \"Bob\", \"Charlie\"};\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Multiple Return Paths"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Every path must return a value (or throw exception)\npublic String classify(int n) {\n    if (n < 0) return \"negative\";\n    if (n == 0) return \"zero\";\n    return \"positive\";\n}\n\n// WRONG - not all paths return:\n// public String bad(int n) {\n//     if (n > 0) return \"positive\";\n//     // what if n <= 0? compiler error!\n// }\n\npublic int getScore(String grade) {\n    switch (grade) {\n        case \"A\": return 90;\n        case \"B\": return 80;\n        case \"C\": return 70;\n        case \"D\": return 60;\n        default: return 0;  // must handle default\n    }\n}"
      }
    ]
  },
  {
    "id": "pass-by-value",
    "title": "4. Pass-by-Value Semantics",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "4. Pass-by-Value Semantics"
      },
      {
        "type": "paragraph",
        "text": "Java passes arguments by value. For primitives, this is a copy of the value. For objects, this is a copy of the REFERENCE, not the object itself."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Primitives: Copy of Value"
      },
      {
        "type": "code",
        "language": "java",
        "code": "public static void doubleIt(int x) {\n    x = x * 2;  // only changes the local copy\n}\n\nint n = 5;\ndoubleIt(n);\nSystem.out.println(n);  // still 5 — n is NOT changed!"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Objects: Copy of Reference"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.util.ArrayList;\nimport java.util.List;\n\npublic static void addToList(List<String> list) {\n    list.add(\"new item\");  // modifies the actual list object\n}\n\npublic static void replaceList(List<String> list) {\n    list = new ArrayList<>();  // only changes the local reference copy\n    list.add(\"won't affect original\");\n}\n\nList<String> myList = new ArrayList<>();\nmyList.add(\"original\");\n\n// CORRECT: modifying list's contents\naddToList(myList);\nSystem.out.println(myList);  // [original, new item] ✓\n\n// WRONG: reassigning the reference\nmyList.add(\"second item\");\nreplaceList(myList);\nSystem.out.println(myList);  // [original, second item] — unchanged!"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Memory Diagram: Pass-by-Value"
      },
      {
        "type": "diagram",
        "format": "mermaid",
        "content": "flowchart LR\n  subgraph PBV[\"Primitives — Pass by VALUE\"]\n    direction TB\n    M1[\"main: n = 5\"] -->|\"copies value\"| F1[\"doubleIt: x = 5<br/>x becomes 10<br/>n stays 5 ✓\"]\n  end\n  subgraph PBR[\"Objects — Pass by REFERENCE (copy of ref)\"]\n    direction TB\n    M2[\"main: list\"] -->|\"copy of ref\"| HEAP[\"Heap: ArrayList<br/>shared object\"]\n    F2[\"addToList: ref\"] -->|\"same ref\"| HEAP\n  end\n  style PBV fill:#dbeafe,stroke:#1d4ed8,color:#1e3a5f\n  style PBR fill:#dcfce7,stroke:#166534,color:#14532d\n  style HEAP fill:#fef9c3,stroke:#854d0e"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Complete Example: Swapping Values"
      },
      {
        "type": "code",
        "language": "java",
        "code": "public static void swap(int a, int b) {\n    int temp = a;\n    a = b;\n    b = temp;\n    // WRONG: only swaps local copies\n}\n\nint x = 10, y = 20;\nswap(x, y);\nSystem.out.println(\"x=\" + x + \", y=\" + y);  // x=10, y=20 (unchanged)\n\n// To swap, need an array or object:\npublic static void swapArray(int[] arr, int i, int j) {\n    int temp = arr[i];\n    arr[i] = arr[j];\n    arr[j] = temp;\n    // CORRECT: modifies the actual array\n}\n\nint[] nums = {10, 20};\nswapArray(nums, 0, 1);\nSystem.out.println(\"nums[0]=\" + nums[0] + \", nums[1]=\" + nums[1]);  // 20, 10 ✓"
      }
    ]
  },
  {
    "id": "overloading",
    "title": "5. Method Overloading",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "5. Method Overloading"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "**Same method name, different parameter list:** number, type, or order of parameters",
          "**Return type alone is NOT enough:** compiler looks at parameters only",
          "**Compiler picks best match:** exact match preferred, then widening conversions"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Basic Overloading: Different Types"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class Printer {\n    void print(int x) {\n        System.out.println(\"int: \" + x);\n    }\n\n    void print(double x) {\n        System.out.println(\"double: \" + x);\n    }\n\n    void print(String s) {\n        System.out.println(\"String: \" + s);\n    }\n\n    void print(boolean b) {\n        System.out.println(\"boolean: \" + b);\n    }\n}\n\nPrinter p = new Printer();\np.print(5);           // calls print(int)\np.print(3.14);        // calls print(double)\np.print(\"hello\");     // calls print(String)\np.print(true);        // calls print(boolean)"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Overloading: Different Number of Parameters"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class Message {\n    void send() {\n        System.out.println(\"Sending default message...\");\n    }\n\n    void send(String text) {\n        System.out.println(\"Sending: \" + text);\n    }\n\n    void send(String text, String recipient) {\n        System.out.println(\"To: \" + recipient + \", Message: \" + text);\n    }\n}\n\nMessage m = new Message();\nm.send();                          // calls send()\nm.send(\"Hello\");                   // calls send(String)\nm.send(\"Hello\", \"Alice\");          // calls send(String, String)"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Overloading: Different Order of Parameters"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class Logger {\n    void log(String message, int severity) {\n        System.out.println(\"[\" + severity + \"] \" + message);\n    }\n\n    void log(int severity, String message) {\n        System.out.println(\"[\" + severity + \"] \" + message);\n    }\n}\n\nLogger log = new Logger();\nlog.log(\"Error occurred\", 5);     // first signature\nlog.log(5, \"Error occurred\");      // second signature — different order matters!"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Ambiguity and Widening"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class Calculator {\n    int compute(int a, int b) {\n        return a + b;\n    }\n\n    double compute(double a, double b) {\n        return a + b;\n    }\n}\n\nCalculator c = new Calculator();\nint result = c.compute(5, 3);        // matches compute(int, int) exactly ✓\ndouble result2 = c.compute(5.5, 3.5); // matches compute(double, double) exactly ✓\n\n// What about mixed?\n// c.compute(5, 3.5);  // AMBIGUOUS — widen 5 to double or widen 3.5 to int? Compiler error!\n\n// WRONG: overloading by return type alone\n// int getValue() { return 1; }\n// double getValue() { return 1.0; }  // compiler error!"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Real-World Example: Flexible Method"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class DataParser {\n    // Parse integer\n    int parse(String s) {\n        return Integer.parseInt(s);\n    }\n\n    // Parse integer with default fallback\n    int parse(String s, int defaultValue) {\n        try {\n            return Integer.parseInt(s);\n        } catch (NumberFormatException e) {\n            return defaultValue;\n        }\n    }\n\n    // Parse list of values\n    int[] parseMultiple(String... values) {\n        int[] result = new int[values.length];\n        for (int i = 0; i < values.length; i++) {\n            result[i] = Integer.parseInt(values[i]);\n        }\n        return result;\n    }\n}\n\nDataParser parser = new DataParser();\nint n1 = parser.parse(\"42\");           // uses parse(String)\nint n2 = parser.parse(\"abc\", 0);       // uses parse(String, int) — returns 0\nint[] arr = parser.parseMultiple(\"1\", \"2\", \"3\");  // uses parseMultiple"
      }
    ]
  },
  {
    "id": "varargs",
    "title": "6. Varargs (Variable Arguments)",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "6. Varargs (Variable Arguments)"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Syntax: Type... name"
      },
      {
        "type": "paragraph",
        "text": "Varargs allow a method to accept any number of arguments of the same type. Internally, they're converted to an array."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Basic Varargs Example"
      },
      {
        "type": "code",
        "language": "java",
        "code": "public static int sum(int... numbers) {\n    int total = 0;\n    for (int n : numbers) {\n        total += n;\n    }\n    return total;\n}\n\nSystem.out.println(sum());              // 0 (zero arguments)\nSystem.out.println(sum(5));             // 5 (one argument)\nSystem.out.println(sum(1, 2, 3));       // 6 (three arguments)\nSystem.out.println(sum(1, 2, 3, 4, 5)); // 15 (five arguments)"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Passing Array Directly"
      },
      {
        "type": "code",
        "language": "java",
        "code": "public static double average(double... values) {\n    if (values.length == 0) return 0;\n    double sum = 0;\n    for (double v : values) sum += v;\n    return sum / values.length;\n}\n\n// Individual arguments:\nSystem.out.println(average(10, 20, 30));      // 20.0\n\n// Pass array directly:\ndouble[] scores = {85.5, 90.0, 78.5};\nSystem.out.println(average(scores));          // 84.66..."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Varargs with Regular Parameters"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Regular parameters MUST come before varargs\npublic static void log(String level, String... messages) {\n    System.out.print(\"[\" + level + \"] \");\n    for (String msg : messages) {\n        System.out.print(msg + \" \");\n    }\n    System.out.println();\n}\n\nlog(\"INFO\");                              // [INFO]\nlog(\"ERROR\", \"Connection failed\");        // [ERROR] Connection failed\nlog(\"WARN\", \"Low\", \"memory\", \"detected\"); // [WARN] Low memory detected\n\n// WRONG: varargs in the middle\n// public static void bad(String... msgs, String level) { }  // compiler error!"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Varargs with Method Overloading"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class Output {\n    void print(int... numbers) {\n        System.out.print(\"Ints: \");\n        for (int n : numbers) System.out.print(n + \" \");\n        System.out.println();\n    }\n\n    void print(String... words) {\n        System.out.print(\"Strings: \");\n        for (String w : words) System.out.print(w + \" \");\n        System.out.println();\n    }\n}\n\nOutput out = new Output();\nout.print(1, 2, 3);           // calls print(int...)\nout.print(\"a\", \"b\", \"c\");     // calls print(String...)\n\n// Careful: this is ambiguous!\n// out.print();  // could be either one! compiler error"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Real-World: Flexible String Builder"
      },
      {
        "type": "code",
        "language": "java",
        "code": "public static String join(String separator, String... parts) {\n    StringBuilder result = new StringBuilder();\n    for (int i = 0; i < parts.length; i++) {\n        result.append(parts[i]);\n        if (i < parts.length - 1) {\n            result.append(separator);\n        }\n    }\n    return result.toString();\n}\n\nSystem.out.println(join(\"-\", \"2024\", \"05\", \"10\"));      // 2024-05-10\nSystem.out.println(join(\" \", \"Hello\", \"World\"));        // Hello World\nSystem.out.println(join(\", \", \"a\", \"b\", \"c\", \"d\"));     // a, b, c, d"
      }
    ]
  },
  {
    "id": "recursion",
    "title": "7. Recursion",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "7. Recursion"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Concept: A method calling itself"
      },
      {
        "type": "paragraph",
        "text": "Every recursive method MUST have a base case (stop condition) or it will cause StackOverflowError."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Factorial: Classic Recursion Example"
      },
      {
        "type": "code",
        "language": "java",
        "code": "public static long factorial(int n) {\n    if (n <= 1) return 1;           // base case\n    return n * factorial(n - 1);    // recursive case\n}\n\nSystem.out.println(factorial(0));   // 1\nSystem.out.println(factorial(1));   // 1\nSystem.out.println(factorial(5));   // 120\nSystem.out.println(factorial(10));  // 3628800"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Call Stack Diagram: factorial(4)"
      },
      {
        "type": "diagram",
        "format": "mermaid",
        "content": "flowchart TD\n  F4[\"factorial(4)<br/>wants 4 × factorial(3)\"] -->|calls| F3[\"factorial(3)<br/>wants 3 × factorial(2)\"]\n  F3 -->|calls| F2[\"factorial(2)<br/>wants 2 × factorial(1)\"]\n  F2 -->|calls| F1[\"factorial(1)<br/>BASE CASE → returns 1\"]\n  F1 -->|\"returns 1\"| R2[\"2 × 1 = 2\"]\n  R2 -->|\"returns 2\"| R3[\"3 × 2 = 6\"]\n  R3 -->|\"returns 6\"| R4[\"4 × 6 = 24 ✓\"]\n  style F1 fill:#dcfce7,stroke:#166534\n  style R4 fill:#dbeafe,stroke:#1d4ed8"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Fibonacci: Exponential Time"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Naive fibonacci (SLOW - exponential time)\npublic static int fib(int n) {\n    if (n <= 1) return n;                   // base case\n    return fib(n - 1) + fib(n - 2);         // recursive case\n}\n\nSystem.out.println(fib(5));   // 5\nSystem.out.println(fib(10));  // 55\nSystem.out.println(fib(20));  // 6765 (slow!)\n// System.out.println(fib(50));  // takes forever!\n\n// fib(5) recalculates fib(3) many times:\n// fib(5) = fib(4) + fib(3)\n//        = (fib(3) + fib(2)) + (fib(2) + fib(1))\n//        = ((fib(2) + fib(1)) + (fib(1) + fib(0))) + ...\n//        ↑ fib(2) calculated multiple times!"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Fibonacci: Memoization (Fast)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Memoization: cache results to avoid recalculation\npublic static long fibMemo(int n, java.util.Map<Integer, Long> memo) {\n    if (n <= 1) return n;\n\n    if (memo.containsKey(n)) {\n        return memo.get(n);  // return cached result\n    }\n\n    long result = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);\n    memo.put(n, result);     // store result\n    return result;\n}\n\n// Usage:\njava.util.Map<Integer, Long> memo = new java.util.HashMap<>();\nSystem.out.println(fibMemo(50, memo));  // instant! (was impossible before)\n\n// Or use wrapper:\npublic static long fib(int n) {\n    return fibMemo(n, new java.util.HashMap<>());\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Recursion: Sum of Array"
      },
      {
        "type": "code",
        "language": "java",
        "code": "public static int sumArray(int[] arr, int index) {\n    if (index == arr.length) {\n        return 0;  // base case: end of array\n    }\n    return arr[index] + sumArray(arr, index + 1);  // add current + rest\n}\n\nint[] numbers = {1, 2, 3, 4, 5};\nSystem.out.println(sumArray(numbers, 0));  // 15\n\n// Equivalent iterative version:\npublic static int sumArrayIterative(int[] arr) {\n    int sum = 0;\n    for (int n : arr) sum += n;\n    return sum;\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Recursion: Binary Search on Sorted Array"
      },
      {
        "type": "code",
        "language": "java",
        "code": "public static int binarySearch(int[] arr, int target, int left, int right) {\n    if (left > right) return -1;  // not found\n\n    int mid = left + (right - left) / 2;\n    if (arr[mid] == target) return mid;\n    else if (arr[mid] < target) return binarySearch(arr, target, mid + 1, right);\n    else return binarySearch(arr, target, left, mid - 1);\n}\n\nint[] sorted = {1, 3, 5, 7, 9, 11, 13};\nSystem.out.println(binarySearch(sorted, 7, 0, sorted.length - 1));   // 3\nSystem.out.println(binarySearch(sorted, 10, 0, sorted.length - 1));  // -1"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "StackOverflowError: Bad Base Case"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// WRONG: missing or wrong base case\npublic static void badRecursion(int n) {\n    System.out.println(n);\n    badRecursion(n + 1);  // never stops! StackOverflowError\n}\n\n// CORRECT: has proper base case\npublic static void goodRecursion(int n) {\n    if (n > 10) return;   // base case: stop when n > 10\n    System.out.println(n);\n    goodRecursion(n + 1);\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Tail Recursion (Java doesn't optimize)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Tail recursion: recursive call is the last operation\npublic static long factorial_tail(int n, long accumulator) {\n    if (n <= 1) return accumulator;\n    return factorial_tail(n - 1, n * accumulator);  // tail call\n}\n\n// Java doesn't optimize tail recursion, so this uses extra stack space\n// Better to use iteration:\npublic static long factorial_iterative(int n) {\n    long result = 1;\n    for (int i = 2; i <= n; i++) {\n        result *= i;\n    }\n    return result;  // more efficient\n}\n\nSystem.out.println(factorial_tail(5, 1));      // 120\nSystem.out.println(factorial_iterative(5));    // 120"
      }
    ]
  },
  {
    "id": "arrays-1d",
    "title": "8. 1D Arrays",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "8. 1D Arrays"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "**Declaration:** type[] name; — declares a variable that will hold array",
          "**Allocation:** new type[size]; — creates array object in heap",
          "**Initialization:** assign values using {...} or new type[]{...}",
          "**arr.length:** field (not method) giving number of elements",
          "**Index:** 0 to length-1"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Declaration and Allocation"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// 1. Declaration only (no allocation yet)\nint[] arr;                        // arr is null\n\n// 2. Allocation (all elements get default value: 0 for int)\narr = new int[5];                 // [0, 0, 0, 0, 0]\n\n// 3. Declaration + Allocation combined\nint[] arr2 = new int[5];\n\n// 4. Initializer (declaration + allocation + values in one go)\nint[] arr3 = {1, 2, 3, 4, 5};     // length is 5\n\n// 5. Explicit new with initializer\nint[] arr4 = new int[]{1, 2, 3, 4, 5};\n\n// 6. Empty array\nint[] arr5 = new int[0];          // length is 0"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Access and Iteration"
      },
      {
        "type": "code",
        "language": "java",
        "code": "int[] scores = {85, 90, 78, 92, 88};\n\n// Access by index:\nSystem.out.println(scores[0]);      // 85\nSystem.out.println(scores[4]);      // 88\nSystem.out.println(scores.length);  // 5\n\n// Traditional for loop:\nfor (int i = 0; i < scores.length; i++) {\n    System.out.println(\"Index \" + i + \": \" + scores[i]);\n}\n\n// Enhanced for loop (for-each):\nfor (int score : scores) {\n    System.out.println(\"Score: \" + score);\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Default Values"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Primitive types default to 0, false, etc:\nint[] ints = new int[3];           // [0, 0, 0]\ndouble[] doubles = new double[2];  // [0.0, 0.0]\nboolean[] bools = new boolean[3];  // [false, false, false]\n\n// Objects default to null:\nString[] strings = new String[3];  // [null, null, null]\nSystem.out.println(strings[0]);    // null\n\n// NullPointerException if you try to use:\n// System.out.println(strings[0].length());  // WRONG! NullPointerException"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Memory Diagram: 1D Array"
      },
      {
        "type": "diagram",
        "format": "mermaid",
        "content": "flowchart LR\n  subgraph Stack[\"Stack Memory\"]\n    VAR[\"arr<br/>reference\"]\n  end\n  subgraph Heap[\"Heap Memory\"]\n    OBJ[\"int[] Object<br/>length = 5<br/>[0]=10  [1]=20  [2]=30  [3]=40  [4]=50\"]\n  end\n  VAR -->|\"points to\"| OBJ\n  style Stack fill:#dbeafe,stroke:#1d4ed8,color:#1e3a5f\n  style Heap fill:#dcfce7,stroke:#166534,color:#14532d\n  style OBJ fill:#fef9c3,stroke:#854d0e"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Real-World: Grade Processor"
      },
      {
        "type": "code",
        "language": "java",
        "code": "public class GradeProcessor {\n    public double average(int[] grades) {\n        int sum = 0;\n        for (int g : grades) sum += g;\n        return grades.length > 0 ? (double) sum / grades.length : 0;\n    }\n\n    public int highest(int[] grades) {\n        int max = grades[0];\n        for (int g : grades) {\n            if (g > max) max = g;\n        }\n        return max;\n    }\n\n    public int countPassing(int[] grades) {\n        int count = 0;\n        for (int g : grades) {\n            if (g >= 60) count++;\n        }\n        return count;\n    }\n}\n\n// Usage:\nGradeProcessor proc = new GradeProcessor();\nint[] grades = {85, 92, 78, 88, 95, 76};\nSystem.out.println(\"Average: \" + proc.average(grades));        // 85.66...\nSystem.out.println(\"Highest: \" + proc.highest(grades));        // 95\nSystem.out.println(\"Passing: \" + proc.countPassing(grades));   // 5"
      }
    ]
  },
  {
    "id": "arrays-2d",
    "title": "9. 2D and Jagged Arrays",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "9. 2D and Jagged Arrays"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "**2D Array:** array of arrays — rectangular grid with rows and columns",
          "**Jagged Array:** array of arrays where rows have different lengths",
          "**matrix.length:** number of rows",
          "**matrix[0].length:** number of columns in first row"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "2D Array: Declaration and Allocation"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// 1. Allocation only (all elements default to 0)\nint[][] matrix = new int[3][4];    // 3 rows, 4 columns\n\n// 2. With initializer\nint[][] grid = {\n    {1, 2, 3},\n    {4, 5, 6},\n    {7, 8, 9}\n};\n\n// 3. Mixed\nint[][] mixed = new int[2][];      // 2 rows, columns TBD\nmixed[0] = new int[3];              // first row has 3 elements\nmixed[1] = new int[4];              // second row has 4 elements"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Accessing 2D Array Elements"
      },
      {
        "type": "code",
        "language": "java",
        "code": "int[][] matrix = {\n    {10, 20, 30},\n    {40, 50, 60},\n    {70, 80, 90}\n};\n\nSystem.out.println(matrix[0][0]);    // 10 (row 0, col 0)\nSystem.out.println(matrix[1][2]);    // 60 (row 1, col 2)\nSystem.out.println(matrix[2][1]);    // 80 (row 2, col 1)\n\n// Dimensions:\nSystem.out.println(matrix.length);        // 3 (rows)\nSystem.out.println(matrix[0].length);     // 3 (cols in row 0)\nSystem.out.println(matrix[1].length);     // 3 (cols in row 1)"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Iterating 2D Arrays"
      },
      {
        "type": "code",
        "language": "java",
        "code": "int[][] matrix = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};\n\n// Traditional nested for loop:\nfor (int i = 0; i < matrix.length; i++) {\n    for (int j = 0; j < matrix[i].length; j++) {\n        System.out.print(matrix[i][j] + \" \");\n    }\n    System.out.println();\n}\n// Output:\n// 1 2 3\n// 4 5 6\n// 7 8 9\n\n// Enhanced for loop (for-each):\nfor (int[] row : matrix) {\n    for (int val : row) {\n        System.out.print(val + \" \");\n    }\n    System.out.println();\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Jagged Arrays (Rows of Different Lengths)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Jagged: different rows have different number of columns\nint[][] jagged = new int[3][];\njagged[0] = new int[2];    // first row: 2 elements\njagged[1] = new int[4];    // second row: 4 elements\njagged[2] = new int[1];    // third row: 1 element\n\n// With initializer:\nint[][] jagged2 = {\n    {1, 2},\n    {3, 4, 5, 6},\n    {7}\n};\n\n// Iterate safely:\nfor (int i = 0; i < jagged2.length; i++) {\n    System.out.print(\"Row \" + i + \" (\" + jagged2[i].length + \" cols): \");\n    for (int j = 0; j < jagged2[i].length; j++) {\n        System.out.print(jagged2[i][j] + \" \");\n    }\n    System.out.println();\n}\n// Output:\n// Row 0 (2 cols): 1 2\n// Row 1 (4 cols): 3 4 5 6\n// Row 2 (1 cols): 7"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Matrix Transposition"
      },
      {
        "type": "code",
        "language": "java",
        "code": "public static int[][] transpose(int[][] matrix) {\n    int rows = matrix.length;\n    int cols = matrix[0].length;\n    int[][] result = new int[cols][rows];  // swap dimensions\n\n    for (int i = 0; i < rows; i++) {\n        for (int j = 0; j < cols; j++) {\n            result[j][i] = matrix[i][j];   // swap indices\n        }\n    }\n    return result;\n}\n\n// Example:\nint[][] original = {{1, 2, 3}, {4, 5, 6}};  // 2x3\nint[][] transposed = transpose(original);     // 3x2\n// Original:  1 2 3      Transposed:  1 4\n//            4 5 6                   2 5\n//                                    3 6"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "3D Arrays (Brief)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Syntax: type[][][] name;\nint[][][] cube = new int[3][3][3];  // 3x3x3 cube\n\n// Access: cube[layer][row][col]\ncube[0][1][2] = 42;\n\n// Iteration:\nfor (int i = 0; i < cube.length; i++) {           // layers\n    for (int j = 0; j < cube[i].length; j++) {    // rows\n        for (int k = 0; k < cube[i][j].length; k++) {  // cols\n            cube[i][j][k] = i * 100 + j * 10 + k;\n        }\n    }\n}"
      }
    ]
  },
  {
    "id": "arrays-utils",
    "title": "10. java.util.Arrays",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "10. java.util.Arrays"
      },
      {
        "type": "paragraph",
        "text": "The Arrays class provides static utility methods for working with arrays: sorting, searching, copying, filling, comparing, and printing."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Arrays.sort()"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.util.Arrays;\n\nint[] arr = {5, 3, 8, 1, 9, 2};\n\n// Sort entire array (in-place)\nArrays.sort(arr);\nSystem.out.println(Arrays.toString(arr));  // [1, 2, 3, 5, 8, 9]\n\n// Sort a range [fromIndex, toIndex)\nint[] arr2 = {5, 3, 8, 1, 9, 2};\nArrays.sort(arr2, 1, 4);  // sort indices 1, 2, 3 only\nSystem.out.println(Arrays.toString(arr2));  // [5, 1, 3, 8, 9, 2]\n\n// Sort objects (String already implements Comparable)\nString[] words = {\"zebra\", \"apple\", \"banana\"};\nArrays.sort(words);\nSystem.out.println(Arrays.toString(words));  // [apple, banana, zebra]"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Arrays.binarySearch()"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.util.Arrays;\n\nint[] sorted = {1, 3, 5, 7, 9, 11};\n\n// Return index if found, negative value if not found\nint idx1 = Arrays.binarySearch(sorted, 5);    // 2 (found at index 2)\nint idx2 = Arrays.binarySearch(sorted, 6);    // -4 (not found, insertion point is 3)\n\n// Search a range:\nint idx3 = Arrays.binarySearch(sorted, 1, 4, 5);  // search in [1,4), returns 2\n\n// IMPORTANT: array must be sorted first!\nint[] unsorted = {5, 1, 9, 3, 2};\nArrays.binarySearch(unsorted, 5);  // result unpredictable!"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Arrays.fill()"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.util.Arrays;\n\nint[] arr = {1, 2, 3, 4, 5};\n\n// Fill entire array\nArrays.fill(arr, 0);\nSystem.out.println(Arrays.toString(arr));  // [0, 0, 0, 0, 0]\n\n// Fill a range [fromIndex, toIndex)\nint[] arr2 = {1, 2, 3, 4, 5};\nArrays.fill(arr2, 1, 4, 99);  // fill indices 1, 2, 3\nSystem.out.println(Arrays.toString(arr2));  // [1, 99, 99, 99, 5]\n\n// Works for all primitive types\nboolean[] flags = new boolean[5];\nArrays.fill(flags, true);\nSystem.out.println(Arrays.toString(flags));  // [true, true, true, true, true]"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Arrays.copyOf() and Arrays.copyOfRange()"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.util.Arrays;\n\nint[] original = {1, 2, 3, 4, 5};\n\n// Full copy\nint[] copy = Arrays.copyOf(original, original.length);\ncopy[0] = 99;  // doesn't affect original\nSystem.out.println(Arrays.toString(original));  // [1, 2, 3, 4, 5]\nSystem.out.println(Arrays.toString(copy));      // [99, 2, 3, 4, 5]\n\n// Partial copy (first 3 elements)\nint[] partial = Arrays.copyOf(original, 3);\nSystem.out.println(Arrays.toString(partial));  // [1, 2, 3]\n\n// Copy with expansion\nint[] expanded = Arrays.copyOf(original, 8);   // new length is 8\nSystem.out.println(Arrays.toString(expanded));  // [1, 2, 3, 4, 5, 0, 0, 0]\n\n// Copy a range [fromIndex, toIndex)\nint[] ranged = Arrays.copyOfRange(original, 1, 4);  // indices 1, 2, 3\nSystem.out.println(Arrays.toString(ranged));  // [2, 3, 4]"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Arrays.toString() and Arrays.deepToString()"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.util.Arrays;\n\n// 1D array:\nint[] arr = {1, 2, 3};\nSystem.out.println(arr);                    // [I@hashcode (wrong!)\nSystem.out.println(Arrays.toString(arr));   // [1, 2, 3] (correct!)\n\n// 2D array:\nint[][] matrix = {{1, 2}, {3, 4}};\nSystem.out.println(Arrays.toString(matrix));       // [[I@h1, [I@h2] (wrong!)\nSystem.out.println(Arrays.deepToString(matrix));   // [[1, 2], [3, 4]] (correct!)\n\n// String array:\nString[] names = {\"Alice\", \"Bob\", \"Charlie\"};\nSystem.out.println(Arrays.toString(names));  // [Alice, Bob, Charlie]"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Arrays.equals() and Arrays.deepEquals()"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.util.Arrays;\n\n// Compare 1D arrays:\nint[] a = {1, 2, 3};\nint[] b = {1, 2, 3};\nint[] c = {1, 2, 4};\n\nSystem.out.println(Arrays.equals(a, b));     // true (same content)\nSystem.out.println(a == b);                  // false (different objects)\nSystem.out.println(Arrays.equals(a, c));     // false (different content)\n\n// Compare 2D arrays:\nint[][] m1 = {{1, 2}, {3, 4}};\nint[][] m2 = {{1, 2}, {3, 4}};\nSystem.out.println(Arrays.deepEquals(m1, m2));  // true (same content)\nSystem.out.println(m1 == m2);                   // false (different objects)"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Arrays.stream() (Java 8+)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.util.Arrays;\n\nint[] numbers = {1, 2, 3, 4, 5};\n\n// Sum:\nint sum = Arrays.stream(numbers).sum();\nSystem.out.println(sum);  // 15\n\n// Average:\ndouble avg = Arrays.stream(numbers).average().orElse(0);\nSystem.out.println(avg);  // 3.0\n\n// Find max:\nint max = Arrays.stream(numbers).max().orElse(-1);\nSystem.out.println(max);  // 5\n\n// Filter and count:\nlong count = Arrays.stream(numbers).filter(n -> n > 2).count();\nSystem.out.println(count);  // 3 (numbers 3, 4, 5)"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Complete Arrays Example: Data Manipulation"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.util.Arrays;\n\npublic class ArrayToolkit {\n    public static void main(String[] args) {\n        int[] data = {45, 23, 67, 12, 89, 34, 56};\n\n        // Print unsorted\n        System.out.println(\"Original: \" + Arrays.toString(data));\n\n        // Sort and print\n        Arrays.sort(data);\n        System.out.println(\"Sorted:   \" + Arrays.toString(data));\n\n        // Find specific value\n        int idx = Arrays.binarySearch(data, 45);\n        System.out.println(\"Index of 45: \" + idx);\n\n        // Copy and modify\n        int[] copy = Arrays.copyOf(data, data.length);\n        Arrays.fill(copy, 0, 3, 999);  // replace first 3 with 999\n        System.out.println(\"Modified: \" + Arrays.toString(copy));\n\n        // Compare\n        System.out.println(\"Original changed? \" + Arrays.equals(data, copy));\n    }\n}\n// Output:\n// Original: [45, 23, 67, 12, 89, 34, 56]\n// Sorted:   [12, 23, 34, 45, 56, 67, 89]\n// Index of 45: 3\n// Modified: [999, 999, 999, 45, 56, 67, 89]\n// Original changed? false"
      }
    ]
  },
  {
    "id": "array-of-objects",
    "title": "11. Array of Objects",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "11. Array of Objects"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "**Declaration:** ClassName[] name; — array of object references",
          "**Default value:** null (no object created yet)",
          "**Allocation:** manually create each object with new",
          "**NullPointerException:** occurs when accessing property or method on null element"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Array of Built-in Objects: Strings"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Declaration\nString[] names;\n\n// Allocation (all elements are null)\nnames = new String[3];\nSystem.out.println(names[0]);  // null\n\n// Assignment\nnames[0] = \"Alice\";\nnames[1] = \"Bob\";\nnames[2] = \"Charlie\";\n\n// Or with initializer\nString[] colors = {\"Red\", \"Green\", \"Blue\"};\n\n// Iteration\nfor (String name : names) {\n    System.out.println(name);\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Array of Custom Objects"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class Point {\n    int x, y;\n\n    Point(int x, int y) {\n        this.x = x;\n        this.y = y;\n    }\n\n    public String toString() {\n        return \"(\" + x + \", \" + y + \")\";\n    }\n}\n\n// Create array of Points\nPoint[] points = new Point[3];  // [null, null, null]\n\n// Allocate each object separately\npoints[0] = new Point(1, 2);\npoints[1] = new Point(3, 4);\npoints[2] = new Point(5, 6);\n\n// Iterate\nfor (Point p : points) {\n    System.out.println(p);  // uses toString()\n}\n// Output:\n// (1, 2)\n// (3, 4)\n// (5, 6)"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Real-World: Array of Students"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class Student {\n    String name;\n    int age;\n    double gpa;\n\n    Student(String name, int age, double gpa) {\n        this.name = name;\n        this.age = age;\n        this.gpa = gpa;\n    }\n\n    public String toString() {\n        return name + \" (age \" + age + \", GPA \" + String.format(\"%.2f\", gpa) + \")\";\n    }\n}\n\nStudent[] roster = new Student[4];\nroster[0] = new Student(\"Alice\", 20, 3.8);\nroster[1] = new Student(\"Bob\", 21, 3.5);\nroster[2] = new Student(\"Charlie\", 20, 3.9);\nroster[3] = new Student(\"Diana\", 22, 3.2);\n\n// Find top student\nStudent topStudent = roster[0];\nfor (Student s : roster) {\n    if (s.gpa > topStudent.gpa) {\n        topStudent = s;\n    }\n}\nSystem.out.println(\"Top student: \" + topStudent);"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Null Handling"
      },
      {
        "type": "code",
        "language": "java",
        "code": "String[] words = new String[3];\n\n// WRONG: accessing null element\n// System.out.println(words[0].length());  // NullPointerException!\n\n// CORRECT: check for null first\nif (words[0] != null) {\n    System.out.println(words[0].length());\n} else {\n    System.out.println(\"Element is null\");\n}\n\n// Safe iteration:\nfor (String word : words) {\n    if (word != null) {\n        System.out.println(word.toUpperCase());\n    }\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Array of Arrays (2D): Object Perspective"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// 2D array is really: array of array objects\nString[][] grid = new String[2][3];  // 2 arrays, each with 3 Strings\n\n// Allocate the inner arrays implicitly above, or explicitly:\nString[][] grid2 = new String[2][];\ngrid2[0] = new String[3];  // first array\ngrid2[1] = new String[2];  // second array (different size)\n\n// Access nested objects:\ngrid2[0][0] = \"A\";\ngrid2[0][1] = \"B\";\ngrid2[1][0] = \"C\";\n\nfor (String[] row : grid2) {\n    for (String cell : row) {\n        if (cell != null) {\n            System.out.print(cell + \" \");\n        }\n    }\n    System.out.println();\n}"
      }
    ]
  },
  {
    "id": "array-pitfalls",
    "title": "12. Common Array Pitfalls",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "12. Common Array Pitfalls"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Pitfall 1: ArrayIndexOutOfBoundsException"
      },
      {
        "type": "code",
        "language": "java",
        "code": "int[] arr = {10, 20, 30};\n\n// WRONG: valid indices are only 0, 1, 2\n// System.out.println(arr[3]);   // ArrayIndexOutOfBoundsException\n// System.out.println(arr[-1]);  // ArrayIndexOutOfBoundsException\n\n// CORRECT: always check bounds\nif (index >= 0 && index < arr.length) {\n    System.out.println(arr[index]);\n}\n\n// Safe loop:\nfor (int i = 0; i < arr.length; i++) {\n    System.out.println(arr[i]);  // i never exceeds arr.length - 1\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Pitfall 2: NullPointerException with Object Arrays"
      },
      {
        "type": "code",
        "language": "java",
        "code": "String[] words = new String[3];  // all null\n\n// WRONG: trying to call method on null\n// System.out.println(words[0].length());  // NullPointerException\n\n// CORRECT: check for null first\nfor (String word : words) {\n    if (word != null) {\n        System.out.println(word.length());\n    } else {\n        System.out.println(\"null element\");\n    }\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Pitfall 3: Confusing Reference vs Value"
      },
      {
        "type": "code",
        "language": "java",
        "code": "int[] a = {1, 2, 3};\nint[] b = a;  // b points to SAME array, not a copy\n\nb[0] = 99;    // modifies the shared array\nSystem.out.println(a[0]);  // 99! (a was affected)\n\n// CORRECT: make a copy if you want independence\nint[] c = Arrays.copyOf(a, a.length);\nc[0] = 88;\nSystem.out.println(a[0]);  // still 99 (a unaffected)"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Pitfall 4: Printing Arrays Wrong"
      },
      {
        "type": "code",
        "language": "java",
        "code": "int[] arr = {1, 2, 3};\n\n// WRONG: prints object reference\nSystem.out.println(arr);           // [I@a7f9d37\n\n// CORRECT: use Arrays.toString\nSystem.out.println(Arrays.toString(arr));  // [1, 2, 3]\n\n// 2D arrays:\nint[][] matrix = {{1, 2}, {3, 4}};\nSystem.out.println(matrix);                     // [[I@... (wrong)\nSystem.out.println(Arrays.toString(matrix));    // [[I@..., [I@... (still wrong)\nSystem.out.println(Arrays.deepToString(matrix));  // [[1, 2], [3, 4]] (correct)"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Pitfall 5: Forgetting arr.length is a Field, Not a Method"
      },
      {
        "type": "code",
        "language": "java",
        "code": "int[] arr = {1, 2, 3, 4, 5};\n\n// WRONG: length is not a method\n// int size = arr.length();  // compiler error!\n\n// CORRECT: length is a field (no parentheses)\nint size = arr.length;      // 5\nSystem.out.println(size);"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Pitfall 6: Modifying Array During Iteration"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.util.ArrayList;\nimport java.util.List;\n\n// With arrays, resizing is problematic:\nint[] arr = {1, 2, 3, 4, 5};\n// Can't resize array directly\n\n// If you need dynamic size, use ArrayList:\nList<Integer> list = new ArrayList<>(java.util.Arrays.asList(1, 2, 3, 4, 5));\n\nfor (int i = list.size() - 1; i >= 0; i--) {\n    if (list.get(i) > 2) {\n        list.remove(i);  // safe to remove when going backwards\n    }\n}\nSystem.out.println(list);  // [1, 2]"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Pitfall 7: Type Mismatch in 2D Arrays"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// WRONG: inconsistent row sizes can cause confusion\nint[][] data = {{1, 2, 3}, {4, 5}};\n\n// If you assume rectangular:\n// for (int i = 0; i < data.length; i++)\n//     for (int j = 0; j < data[0].length; j++)\n//         System.out.println(data[i][j]);  // IndexOutOfBounds on row 1!\n\n// CORRECT: use data[i].length for each row\nfor (int i = 0; i < data.length; i++) {\n    for (int j = 0; j < data[i].length; j++) {\n        System.out.println(data[i][j]);\n    }\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Summary Table: Common Mistakes"
      }
    ]
  }
]
