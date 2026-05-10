// Chapter 7 - Structured block data (no raw HTML)
export const sections = [
  {
    "id": "exception-hierarchy",
    "title": "1. Exception Hierarchy",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "1. Exception Hierarchy"
      },
      {
        "type": "paragraph",
        "text": "Java exceptions form a class hierarchy. Understanding the relationships is critical for effective error handling."
      },
      {
        "type": "diagram",
        "format": "mermaid",
        "content": "graph TD\n  Throwable[\"Throwable\"] --> Error[\"Error<br/>unrecoverable JVM errors\"]\n  Throwable --> Exception[\"Exception\"]\n  Error --> OOM[\"OutOfMemoryError\"]\n  Error --> SOE[\"StackOverflowError\"]\n  Exception --> RE[\"RuntimeException<br/>unchecked — optional catch\"]\n  Exception --> Checked[\"Checked Exceptions<br/>must catch or declare\"]\n  RE --> NPE[\"NullPointerException\"]\n  RE --> AE[\"ArithmeticException\"]\n  RE --> CCE[\"ClassCastException\"]\n  RE --> AIOBE[\"ArrayIndexOutOfBoundsException\"]\n  Checked --> IOE[\"IOException\"]\n  Checked --> SQL[\"SQLException\"]\n  Checked --> PE[\"ParseException\"]\n  style Throwable fill:#dbeafe,stroke:#1d4ed8\n  style Error fill:#fee2e2,stroke:#dc2626\n  style Exception fill:#fef9c3,stroke:#854d0e\n  style RE fill:#fff7ed,stroke:#c2410c\n  style Checked fill:#dcfce7,stroke:#166534"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "**Checked exceptions**: Must be declared in method signature or caught in try-catch. Examples: IOException, SQLException, ParseException.",
          "**Unchecked exceptions**: RuntimeException and subclasses. Optional to catch (but recommended). Examples: NullPointerException, ArrayIndexOutOfBoundsException.",
          "**Errors**: JVM-level problems (OutOfMemoryError, StackOverflowError). Do not catch these; they indicate fatal problems.",
          "**Throwable**: Root of all exceptions. Both Exception and Error extend Throwable."
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Example: Recognizing exception types"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// UNCHECKED — NullPointerException (RuntimeException subclass)\nString name = null;\nname.length();  // throws NullPointerException at runtime\n\n// CHECKED — IOException (extends Exception, not RuntimeException)\n// Must be caught or declared:\npublic void readFile(String path) throws IOException {\n    Files.readAllLines(Path.of(path));  // throws IOException if file not found\n}\n\n// ERROR — OutOfMemoryError (JVM problem, don't catch)\nList<byte[]> list = new ArrayList<>();\nwhile (true) {\n    list.add(new byte[1000000]);  // eventually throws OutOfMemoryError\n}"
      }
    ]
  },
  {
    "id": "common-exceptions",
    "title": "2. Common Exceptions Table",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "2. Common Exceptions Table"
      },
      {
        "type": "table",
        "headers": [
          "Exception",
          "Type",
          "Cause",
          "How to Avoid"
        ],
        "rows": [
          [
            "NullPointerException",
            "Unchecked",
            "Calling method/property on null reference",
            "Check for null before use: `if (obj != null) obj.method();`"
          ],
          [
            "ArrayIndexOutOfBoundsException",
            "Unchecked",
            "Accessing `arr[i]` where `i >= arr.length`",
            "Check bounds: `if (i < arr.length) arr[i];`"
          ],
          [
            "ClassCastException",
            "Unchecked",
            "Invalid type cast: `(Dog) catObject`",
            "Use instanceof: `if (obj instanceof Dog) Dog d = (Dog) obj;`"
          ],
          [
            "NumberFormatException",
            "Unchecked",
            "Invalid number string: `Integer.parseInt(\"abc\")`",
            "Validate input or use try-catch"
          ],
          [
            "ArithmeticException",
            "Unchecked",
            "Integer division by zero: `10 / 0`",
            "Check divisor: `if (divisor != 0) result = x / divisor;`"
          ],
          [
            "StackOverflowError",
            "Error",
            "Infinite recursion or very deep call stack",
            "Ensure base case in recursion; avoid deep recursion"
          ],
          [
            "OutOfMemoryError",
            "Error",
            "Heap memory exhausted",
            "Profile memory; use smaller collections or streams"
          ],
          [
            "IllegalArgumentException",
            "Unchecked",
            "Invalid argument passed to method",
            "Validate arguments in method; document constraints"
          ],
          [
            "IllegalStateException",
            "Unchecked",
            "Object in wrong state for operation",
            "Check state before operations: `if (isOpen) { ... }`"
          ],
          [
            "UnsupportedOperationException",
            "Unchecked",
            "Calling unsupported method, e.g., `unmodifiableList.add()`",
            "Check documentation; avoid operations on immutable collections"
          ],
          [
            "ConcurrentModificationException",
            "Unchecked",
            "Modifying collection while iterating",
            "Use iterator.remove() or collect changes first"
          ],
          [
            "IOException",
            "Checked",
            "I/O operation failure (file not found, read error, etc.)",
            "Use try-catch or declare throws IOException"
          ]
        ]
      }
    ]
  },
  {
    "id": "try-catch-basics",
    "title": "3. try-catch Basics",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "3. try-catch Basics"
      },
      {
        "type": "paragraph",
        "text": "The try-catch block catches exceptions and prevents program termination. Catch blocks must be ordered from specific to general."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Simple try-catch"
      },
      {
        "type": "code",
        "language": "java",
        "code": "try {\n    int result = 10 / 0;  // throws ArithmeticException\n} catch (ArithmeticException e) {\n    System.out.println(\"Error: \" + e.getMessage());\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Multiple catch blocks (specific to general)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "try {\n    String s = null;\n    s.length();  // throws NullPointerException\n} catch (NullPointerException e) {\n    System.out.println(\"Caught null: \" + e.getMessage());\n} catch (RuntimeException e) {\n    System.out.println(\"Caught runtime exception: \" + e.getMessage());\n} catch (Exception e) {\n    System.out.println(\"Caught exception: \" + e.getMessage());\n}\n// Output: Caught null: Cannot invoke instance method java.lang.String.length() on a null object reference"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "WRONG vs CORRECT ordering"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// WRONG — General catch before specific (compile error)\ntry {\n    // ...\n} catch (Exception e) {\n    // This catches everything\n} catch (NullPointerException e) {\n    // This code is unreachable! Compiler error\n}\n\n// CORRECT — Specific before general\ntry {\n    // ...\n} catch (NullPointerException e) {\n    // Specific exception handled first\n} catch (Exception e) {\n    // Fallback for all other exceptions\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Exception methods"
      },
      {
        "type": "code",
        "language": "java",
        "code": "try {\n    Integer.parseInt(\"not a number\");\n} catch (NumberFormatException e) {\n    String msg = e.getMessage();           // \"For input string: \\\\\"not a number\\\\\"\"\n    String str = e.toString();             // \"java.lang.NumberFormatException: For input string: \\\\\"not a number\\\\\"\"\n    e.printStackTrace();                    // Prints full stack trace to stderr\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Accessing exception information"
      },
      {
        "type": "code",
        "language": "java",
        "code": "try {\n    int[] arr = {1, 2, 3};\n    System.out.println(arr[10]);  // throws ArrayIndexOutOfBoundsException\n} catch (ArrayIndexOutOfBoundsException e) {\n    System.out.println(\"Message: \" + e.getMessage());\n    System.out.println(\"Class: \" + e.getClass().getSimpleName());\n    System.out.println(\"Cause: \" + e.getCause());  // null unless wrapped\n    StackTraceElement[] trace = e.getStackTrace();\n}"
      }
    ]
  },
  {
    "id": "finally-block",
    "title": "4. finally Block",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "4. finally Block"
      },
      {
        "type": "paragraph",
        "text": "The finally block executes regardless of whether an exception was thrown or caught. Use it for cleanup (closing resources, releasing locks)."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "finally always executes"
      },
      {
        "type": "code",
        "language": "java",
        "code": "try {\n    System.out.println(\"try\");\n    throw new RuntimeException(\"oops\");\n} catch (RuntimeException e) {\n    System.out.println(\"catch: \" + e.getMessage());\n} finally {\n    System.out.println(\"finally\");  // Always runs\n}\n// Output: try, catch: oops, finally"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "finally runs even with return in try"
      },
      {
        "type": "code",
        "language": "java",
        "code": "public String example() {\n    try {\n        return \"from try\";\n    } finally {\n        System.out.println(\"finally runs before return\");\n    }\n}\n// Output when called: finally runs before return\n// Return value: \"from try\""
      },
      {
        "type": "heading",
        "level": 3,
        "text": "WRONG — return in finally overrides try/catch returns"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// WRONG — Don't put return in finally\npublic int tricky() {\n    try {\n        return 1;\n    } finally {\n        return 2;  // This overwrites the return 1\n    }\n}\nSystem.out.println(tricky());  // Output: 2 (unexpected!)\n\n// CORRECT — No return in finally\npublic int correct() {\n    try {\n        return 1;\n    } finally {\n        System.out.println(\"cleanup\");\n    }\n}\nSystem.out.println(correct());  // Output: cleanup, then 1"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Exceptions in finally"
      },
      {
        "type": "code",
        "language": "java",
        "code": "try {\n    throw new RuntimeException(\"original\");\n} finally {\n    throw new IllegalArgumentException(\"from finally\");  // Hides original\n}\n// Output: IllegalArgumentException is thrown, RuntimeException is lost"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "finally does NOT run if JVM exits"
      },
      {
        "type": "code",
        "language": "java",
        "code": "try {\n    System.out.println(\"try\");\n    System.exit(1);  // JVM terminates immediately\n} finally {\n    System.out.println(\"finally\");  // Never runs\n}"
      }
    ]
  },
  {
    "id": "multi-catch",
    "title": "5. Multi-catch (Java 7+)",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "5. Multi-catch (Java 7+)"
      },
      {
        "type": "paragraph",
        "text": "Catch multiple exception types with a single catch block using the pipe operator (|). Reduces code duplication when handling unrelated exceptions."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Single catch block for multiple exceptions"
      },
      {
        "type": "code",
        "language": "java",
        "code": "try {\n    boolean flag = Math.random() > 0.5;\n    if (flag) {\n        throw new IOException(\"Network error\");\n    } else {\n        throw new SQLException(\"Database error\");\n    }\n} catch (IOException | SQLException e) {  // Multi-catch\n    System.out.println(\"Error: \" + e.getMessage());\n    // e is treated as a common supertype\n}\n// Output: Error: Network error (or Error: Database error)"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "e is effectively final in multi-catch"
      },
      {
        "type": "code",
        "language": "java",
        "code": "try {\n    if (Math.random() > 0.5) throw new IOException();\n    else throw new RuntimeException();\n} catch (IOException | RuntimeException e) {\n    e.getMessage();  // OK\n    // e = new Exception();  // COMPILE ERROR — e is effectively final\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Ordering still matters"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// WRONG — IOException and FileNotFoundException in same line\n// (FileNotFoundException extends IOException)\ntry {\n    // ...\n} catch (IOException | FileNotFoundException e) {  // Compile error\n    // ...\n}\n\n// CORRECT — Use either IOException or FileNotFoundException, not both\ntry {\n    // ...\n} catch (IOException e) {  // Catches FileNotFoundException too\n    // ...\n}"
      }
    ]
  },
  {
    "id": "throw-throws",
    "title": "6. throw and throws",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "6. throw and throws"
      },
      {
        "type": "paragraph",
        "text": "throw instantiates and throws an exception. throws declares that a method may throw checked exceptions."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "throw — Manually throw an exception"
      },
      {
        "type": "code",
        "language": "java",
        "code": "public int divide(int a, int b) {\n    if (b == 0) {\n        throw new ArithmeticException(\"Cannot divide by zero\");\n    }\n    return a / b;\n}\n\ntry {\n    int result = divide(10, 0);\n} catch (ArithmeticException e) {\n    System.out.println(\"Caught: \" + e.getMessage());\n}\n// Output: Caught: Cannot divide by zero"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "throws — Declare checked exceptions"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.nio.file.*;\n\n// Method declares it throws IOException\npublic void readFile(String path) throws IOException {\n    String content = Files.readString(Path.of(path));\n    System.out.println(content);\n}\n\n// Caller must handle it\npublic void loadConfig() {\n    try {\n        readFile(\"config.txt\");\n    } catch (IOException e) {\n        System.out.println(\"Failed to read config: \" + e.getMessage());\n    }\n}\n\n// Or caller can re-throw\npublic void loadAndValidateConfig() throws IOException {\n    readFile(\"config.txt\");  // If it throws, propagate to caller\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "throws can declare multiple exceptions"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.io.*;\nimport java.sql.*;\n\npublic void processData() throws IOException, SQLException {\n    // May throw either IOException or SQLException\n    String data = Files.readString(Path.of(\"data.txt\"));  // IOException\n    Connection conn = DriverManager.getConnection(\"jdbc:mysql://...\");  // SQLException\n}\n\ntry {\n    processData();\n} catch (IOException | SQLException e) {\n    System.out.println(\"Error: \" + e.getMessage());\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Unchecked exceptions don't require throws (but can be documented)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Compile error — NullPointerException doesn't require throws\npublic int process(String s) throws NullPointerException {\n    return s.length();  // s might be null\n}\n\n// Better — Don't declare unchecked exceptions, but document them\n/**\n * Processes the given string.\n * @param s the string to process (not null)\n * @return the length of the string\n * @throws NullPointerException if s is null\n */\npublic int process(String s) {\n    return s.length();\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Method can throw subtypes of declared exception"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.io.*;\n\npublic void process() throws IOException {\n    // All of these are OK — they are IOException or subtypes\n    throw new IOException(\"general I/O error\");\n    // throw new FileNotFoundException(\"file not found\");  // FileNotFoundException extends IOException\n    // throw new EOFException(\"unexpected end of file\");    // EOFException extends IOException\n}"
      }
    ]
  },
  {
    "id": "custom-exceptions",
    "title": "7. Custom Exceptions",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "7. Custom Exceptions"
      },
      {
        "type": "paragraph",
        "text": "Create custom exception classes by extending Exception (checked) or RuntimeException (unchecked). Always include a serialVersionUID."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Checked custom exception"
      },
      {
        "type": "code",
        "language": "java",
        "code": "public class InsufficientFundsException extends Exception {\n    private static final long serialVersionUID = 1L;\n    private double amount;\n\n    public InsufficientFundsException(double shortfall) {\n        super(\"Insufficient funds: need $\" + String.format(\"%.2f\", shortfall) + \" more\");\n        this.amount = shortfall;\n    }\n\n    public double getAmount() {\n        return amount;\n    }\n}\n\n// Usage\npublic class BankAccount {\n    private double balance = 100.0;\n\n    public void withdraw(double amount) throws InsufficientFundsException {\n        if (amount > balance) {\n            throw new InsufficientFundsException(amount - balance);\n        }\n        balance -= amount;\n        System.out.println(\"Withdrew $\" + amount);\n    }\n}\n\n// Caller must handle\ntry {\n    BankAccount account = new BankAccount();\n    account.withdraw(150.0);\n} catch (InsufficientFundsException e) {\n    System.out.println(e.getMessage());\n    System.out.println(\"Need $\" + e.getAmount() + \" more\");\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Unchecked custom exception"
      },
      {
        "type": "code",
        "language": "java",
        "code": "public class ValidationException extends RuntimeException {\n    private static final long serialVersionUID = 1L;\n    private String field;\n\n    public ValidationException(String field, String message) {\n        super(field + \": \" + message);\n        this.field = field;\n    }\n\n    public String getField() {\n        return field;\n    }\n}\n\n// Usage (no throws required)\npublic class User {\n    public void setEmail(String email) {\n        if (email == null || !email.contains(\"@\")) {\n            throw new ValidationException(\"email\", \"Must be a valid email address\");\n        }\n    }\n}\n\n// Caller can catch but doesn't have to\nUser user = new User();\ntry {\n    user.setEmail(\"not-an-email\");\n} catch (ValidationException e) {\n    System.out.println(\"Validation error in field '\" + e.getField() + \"': \" + e.getMessage());\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Best practices for custom exceptions"
      },
      {
        "type": "code",
        "language": "java",
        "code": "public class PaymentException extends Exception {\n    private static final long serialVersionUID = 1L;\n    private String transactionId;\n    private int errorCode;\n\n    // Multiple constructors for flexibility\n    public PaymentException(String message) {\n        super(message);\n    }\n\n    public PaymentException(String message, Throwable cause) {\n        super(message, cause);\n    }\n\n    public PaymentException(String message, String transactionId, int errorCode) {\n        super(message);\n        this.transactionId = transactionId;\n        this.errorCode = errorCode;\n    }\n\n    public String getTransactionId() { return transactionId; }\n    public int getErrorCode() { return errorCode; }\n}\n\n// Usage\ntry {\n    processPayment(\"txn123\");\n} catch (PaymentException e) {\n    System.out.println(\"Payment failed [\" + e.getErrorCode() + \"]: \" + e.getMessage());\n    logFailure(e.getTransactionId());\n}"
      }
    ]
  },
  {
    "id": "exception-chaining",
    "title": "8. Exception Chaining",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "8. Exception Chaining"
      },
      {
        "type": "paragraph",
        "text": "Preserve the original exception when throwing a new one using the cause parameter. This maintains the full error context."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Chaining exceptions"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.nio.file.*;\n\ntry {\n    Files.readAllLines(Path.of(\"config.txt\"));\n} catch (IOException e) {\n    // Wrap IOException in RuntimeException, preserving the original\n    throw new RuntimeException(\"Failed to load configuration\", e);\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Retrieving the original cause"
      },
      {
        "type": "code",
        "language": "java",
        "code": "try {\n    try {\n        Files.readAllLines(Path.of(\"config.txt\"));\n    } catch (IOException e) {\n        throw new RuntimeException(\"Config error\", e);\n    }\n} catch (RuntimeException e) {\n    Throwable cause = e.getCause();\n    System.out.println(\"Direct cause: \" + cause.getClass().getSimpleName());\n    System.out.println(\"Cause message: \" + cause.getMessage());\n}\n// Output:\n// Direct cause: FileNotFoundException\n// Cause message: config.txt (No such file or directory)"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Chained stack traces"
      },
      {
        "type": "code",
        "language": "java",
        "code": "public void chainedExample() {\n    try {\n        try {\n            throw new FileNotFoundException(\"data.csv\");\n        } catch (FileNotFoundException e) {\n            throw new RuntimeException(\"Data processing failed\", e);\n        }\n    } catch (RuntimeException e) {\n        e.printStackTrace();  // Shows full chain\n        // Output includes:\n        // java.lang.RuntimeException: Data processing failed\n        // Caused by: java.io.FileNotFoundException: data.csv\n        //   at ...\n    }\n}\n\n// Inspect the entire chain\ntry {\n    // ...\n} catch (RuntimeException e) {\n    Throwable current = e;\n    while (current != null) {\n        System.out.println(current.getClass().getSimpleName() + \": \" + current.getMessage());\n        current = current.getCause();\n    }\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "When NOT to chain (preserves only root cause)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// WRONG — Loses intermediate exceptions\ntry {\n    methodA();\n} catch (Exception e) {\n    throw new Exception(\"methodA failed\");  // cause is null, e is lost\n}\n\n// CORRECT — Preserve cause\ntry {\n    methodA();\n} catch (Exception e) {\n    throw new Exception(\"methodA failed\", e);  // cause is e\n}"
      }
    ]
  },
  {
    "id": "try-with-resources",
    "title": "9. try-with-resources (Java 7+)",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "9. try-with-resources (Java 7+)"
      },
      {
        "type": "paragraph",
        "text": "Automatically closes resources that implement AutoCloseable. Eliminates verbose finally blocks and prevents resource leaks."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Reading a file with try-with-resources"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.io.*;\n\n// CORRECT — Resource is closed automatically\ntry (BufferedReader br = new BufferedReader(new FileReader(\"input.txt\"))) {\n    String line;\n    while ((line = br.readLine()) != null) {\n        System.out.println(line);\n    }\n}  // br is closed here, even if exception occurs\n\n// WRONG — Old verbose way\nBufferedReader br = null;\ntry {\n    br = new BufferedReader(new FileReader(\"input.txt\"));\n    String line;\n    while ((line = br.readLine()) != null) {\n        System.out.println(line);\n    }\n} finally {\n    if (br != null) {\n        try {\n            br.close();  // Have to close manually\n        } catch (IOException e) {\n            // Suppress or log\n        }\n    }\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Multiple resources (closed in reverse order)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.io.*;\n\ntry (FileReader fr = new FileReader(\"input.txt\");\n     BufferedReader br = new BufferedReader(fr)) {\n    String line;\n    while ((line = br.readLine()) != null) {\n        System.out.println(line);\n    }\n}\n// Order: br is closed first, then fr (reverse of declaration)"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Custom AutoCloseable resource"
      },
      {
        "type": "code",
        "language": "java",
        "code": "public class Connection implements AutoCloseable {\n    private String name;\n    private boolean open = true;\n\n    public Connection(String name) {\n        this.name = name;\n        System.out.println(\"Opening \" + name);\n    }\n\n    public void query(String sql) {\n        if (!open) throw new IllegalStateException(\"Connection is closed\");\n        System.out.println(name + \" executing: \" + sql);\n    }\n\n    @Override\n    public void close() {\n        open = false;\n        System.out.println(\"Closing \" + name);\n    }\n}\n\n// Usage\ntry (Connection conn = new Connection(\"DB\")) {\n    conn.query(\"SELECT * FROM users\");\n}  // close() is called automatically\n// Output:\n// Opening DB\n// DB executing: SELECT * FROM users\n// Closing DB"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Suppressed exceptions"
      },
      {
        "type": "code",
        "language": "java",
        "code": "public class BrokenResource implements AutoCloseable {\n    public void work() throws IOException {\n        throw new IOException(\"Work failed\");\n    }\n\n    @Override\n    public void close() throws IOException {\n        throw new IOException(\"Close failed\");\n    }\n}\n\ntry (BrokenResource r = new BrokenResource()) {\n    r.work();\n} catch (IOException e) {\n    System.out.println(\"Primary exception: \" + e.getMessage());\n    Throwable[] suppressed = e.getSuppressed();\n    if (suppressed.length > 0) {\n        System.out.println(\"Suppressed exception: \" + suppressed[0].getMessage());\n    }\n}\n// Output:\n// Primary exception: Work failed\n// Suppressed exception: Close failed"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "try-with-resources + catch + finally"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.io.*;\n\ntry (BufferedReader br = new BufferedReader(new FileReader(\"file.txt\"))) {\n    String line = br.readLine();\n    System.out.println(line);\n} catch (FileNotFoundException e) {\n    System.out.println(\"File not found: \" + e.getMessage());\n} catch (IOException e) {\n    System.out.println(\"Read error: \" + e.getMessage());\n} finally {\n    System.out.println(\"Cleanup complete\");  // Runs after resource is closed\n}"
      }
    ]
  },
  {
    "id": "helpful-npe",
    "title": "10. Helpful NullPointerException (Java 14+)",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "10. Helpful NullPointerException (Java 14+)"
      },
      {
        "type": "paragraph",
        "text": "Java 14+ provides detailed NullPointerException messages that identify exactly which variable is null. Enable with flag: -XX:+ShowCodeDetailsInExceptionMessages"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Old vs. new NullPointerException"
      },
      {
        "type": "code",
        "language": "java",
        "code": "public class Address {\n    private String city;\n    public String getCity() { return city; }\n}\n\npublic class User {\n    private Address address;\n    public Address getAddress() { return address; }\n}\n\n// Code that throws NPE:\nUser user = new User();\nString city = user.getAddress().getCity().toUpperCase();\n\n// Java 13 and earlier:\n// NullPointerException\n// (Very unhelpful — which field is null?)\n\n// Java 14+ with -XX:+ShowCodeDetailsInExceptionMessages:\n// java.lang.NullPointerException: Cannot invoke \"String.toUpperCase()\"\n// because the return value of \"Address.getCity()\" is null"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Null checking is still important"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Even with helpful NPE, null checks prevent exceptions:\nUser user = getUser();\nif (user != null) {\n    Address address = user.getAddress();\n    if (address != null) {\n        String city = address.getCity();\n        if (city != null) {\n            System.out.println(city.toUpperCase());\n        }\n    }\n}\n\n// Or use Optional (Java 8+):\nOptional.ofNullable(user)\n    .map(User::getAddress)\n    .map(Address::getCity)\n    .map(String::toUpperCase)\n    .ifPresent(System.out::println);"
      }
    ]
  },
  {
    "id": "classic-io",
    "title": "11. Classic java.io",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "11. Classic java.io"
      },
      {
        "type": "paragraph",
        "text": "The java.io package provides character and byte stream classes for file I/O. Use try-with-resources for automatic resource management."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Reading text with BufferedReader"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.io.*;\n\ntry (BufferedReader br = new BufferedReader(new FileReader(\"input.txt\"))) {\n    String line;\n    while ((line = br.readLine()) != null) {\n        System.out.println(line);\n    }\n} catch (IOException e) {\n    System.out.println(\"Error reading file: \" + e.getMessage());\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Writing text with BufferedWriter"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.io.*;\n\ntry (BufferedWriter bw = new BufferedWriter(new FileWriter(\"output.txt\"))) {\n    bw.write(\"Hello, World!\");\n    bw.newLine();\n    bw.write(\"Second line\");\n    bw.flush();  // Optional with try-with-resources (close does it)\n} catch (IOException e) {\n    System.out.println(\"Error writing file: \" + e.getMessage());\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "PrintWriter for convenient formatting"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.io.*;\n\n// Write mode (overwrites file):\ntry (PrintWriter pw = new PrintWriter(new FileWriter(\"output.txt\"))) {\n    pw.println(\"Line 1\");\n    pw.println(\"Line 2\");\n    pw.printf(\"Number: %d, String: %s%n\", 42, \"test\");\n}\n\n// Append mode:\ntry (PrintWriter pw = new PrintWriter(new FileWriter(\"output.txt\", true))) {\n    pw.println(\"Appended line\");\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Reading binary data"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.io.*;\n\ntry (FileInputStream fis = new FileInputStream(\"image.png\");\n     BufferedInputStream bis = new BufferedInputStream(fis)) {\n    byte[] buffer = new byte[1024];\n    int bytesRead;\n    while ((bytesRead = bis.read(buffer)) != -1) {\n        // Process buffer[0..bytesRead-1]\n        System.out.println(\"Read \" + bytesRead + \" bytes\");\n    }\n} catch (IOException e) {\n    System.out.println(\"Error: \" + e.getMessage());\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Writing binary data"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.io.*;\n\ntry (FileOutputStream fos = new FileOutputStream(\"data.bin\");\n     BufferedOutputStream bos = new BufferedOutputStream(fos)) {\n    byte[] data = {1, 2, 3, 4, 5};\n    bos.write(data);\n    bos.flush();\n} catch (IOException e) {\n    System.out.println(\"Error: \" + e.getMessage());\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Scanner for convenient text parsing"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.io.*;\nimport java.util.Scanner;\n\n// Reading from file:\ntry (Scanner sc = new Scanner(new File(\"data.txt\"))) {\n    while (sc.hasNextLine()) {\n        String line = sc.nextLine();\n        System.out.println(line);\n    }\n}\n\n// Parsing by token:\ntry (Scanner sc = new Scanner(new File(\"numbers.txt\"))) {\n    while (sc.hasNextInt()) {\n        int n = sc.nextInt();\n        System.out.println(n * 2);\n    }\n}\n\n// Custom delimiter:\ntry (Scanner sc = new Scanner(new File(\"csv.txt\"))) {\n    sc.useDelimiter(\",\");\n    while (sc.hasNext()) {\n        System.out.println(sc.next());\n    }\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Scanner for console input"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.util.Scanner;\n\nScanner console = new Scanner(System.in);\n\nSystem.out.print(\"Enter your name: \");\nString name = console.nextLine();\n\nSystem.out.print(\"Enter your age: \");\nint age = console.nextInt();\n\nSystem.out.println(\"Hello, \" + name + \"! You are \" + age + \" years old.\");\n\n// console.close();  // Only close when done; closes System.in"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Reading entire file into String"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.io.*;\nimport java.nio.file.*;\n\n// Using java.nio (preferred):\nString content = Files.readString(Path.of(\"file.txt\"));\n\n// Using java.io:\nStringBuilder sb = new StringBuilder();\ntry (BufferedReader br = new BufferedReader(new FileReader(\"file.txt\"))) {\n    String line;\n    while ((line = br.readLine()) != null) {\n        sb.append(line).append(\"\\\\n\");\n    }\n}\nString content = sb.toString();"
      }
    ]
  },
  {
    "id": "nio2",
    "title": "12. java.nio.file — NIO.2 (Java 7+)",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "12. java.nio.file — NIO.2 (Java 7+)"
      },
      {
        "type": "paragraph",
        "text": "The java.nio.file package provides modern, efficient file I/O. Path and Files classes are the foundation of NIO.2."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Creating and manipulating paths"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.nio.file.*;\n\n// Create paths (no I/O):\nPath p1 = Path.of(\"file.txt\");\nPath p2 = Path.of(\"src\", \"main\", \"Hello.java\");  // src/main/Hello.java\nPath p3 = Path.of(\"/home/user/documents\");\n\n// Path operations:\nPath abs = p1.toAbsolutePath();\nPath parent = p2.getParent();           // src/main\nPath filename = p2.getFileName();       // Hello.java\nPath normalized = p2.normalize();       // Removes . and ..\nPath resolved = p1.resolve(\"backup.txt\");  // file.txt/backup.txt (usually nonsense)\n\nSystem.out.println(\"Absolute: \" + abs);\nSystem.out.println(\"Parent: \" + parent);\nSystem.out.println(\"Name: \" + filename);"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Reading files"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.nio.file.*;\nimport java.nio.charset.StandardCharsets;\n\n// Read entire file into String (Java 11+):\nString content = Files.readString(Path.of(\"file.txt\"));\nString utf8 = Files.readString(Path.of(\"file.txt\"), StandardCharsets.UTF_8);\n\n// Read all lines into List:\nList<String> lines = Files.readAllLines(Path.of(\"file.txt\"));\nfor (String line : lines) {\n    System.out.println(line);\n}\n\n// Read all bytes:\nbyte[] bytes = Files.readAllBytes(Path.of(\"image.png\"));\nSystem.out.println(\"Read \" + bytes.length + \" bytes\");"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Writing files"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.nio.file.*;\nimport java.nio.charset.StandardCharsets;\nimport java.util.List;\n\n// Write String to file (Java 11+, overwrites):\nFiles.writeString(Path.of(\"output.txt\"), \"Hello, World!\");\n\n// Write String with options:\nFiles.writeString(\n    Path.of(\"output.txt\"),\n    \"Hello\",\n    StandardCharsets.UTF_8,\n    StandardOpenOption.CREATE,\n    StandardOpenOption.WRITE\n);\n\n// Write lines:\nList<String> lines = List.of(\"line1\", \"line2\", \"line3\");\nFiles.write(Path.of(\"output.txt\"), lines);\n\n// Write bytes:\nbyte[] data = new byte[]{1, 2, 3, 4, 5};\nFiles.write(Path.of(\"data.bin\"), data);"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Appending to files"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.nio.file.*;\n\n// Append using writeString (Java 11+):\nFiles.writeString(\n    Path.of(\"log.txt\"),\n    \"New log entry\\\\n\",\n    StandardOpenOption.APPEND,\n    StandardOpenOption.CREATE\n);\n\n// Append using write:\nFiles.write(\n    Path.of(\"log.txt\"),\n    \"Entry 2\\\\n\".getBytes(),\n    StandardOpenOption.APPEND,\n    StandardOpenOption.CREATE\n);"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "File operations (copy, move, delete)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.nio.file.*;\n\nPath src = Path.of(\"original.txt\");\nPath dst = Path.of(\"backup.txt\");\n\n// Copy file:\nFiles.copy(src, dst);  // Throws if destination exists\nFiles.copy(src, dst, StandardCopyOption.REPLACE_EXISTING);\n\n// Move/rename file:\nFiles.move(src, dst);\nFiles.move(src, dst, StandardCopyOption.REPLACE_EXISTING);\n\n// Delete file (throws if not exists):\nFiles.delete(Path.of(\"temp.txt\"));\n\n// Delete safely (no exception if not exists):\nFiles.deleteIfExists(Path.of(\"temp.txt\"));\n\n// Atomic move:\nFiles.move(src, dst, StandardCopyOption.ATOMIC_MOVE);"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Directory operations"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.nio.file.*;\n\nPath dir = Path.of(\"src/main/java\");\n\n// Create single directory (parent must exist):\nFiles.createDirectory(Path.of(\"newdir\"));\n\n// Create directory with parents (like mkdir -p):\nFiles.createDirectories(Path.of(\"a/b/c/d\"));\n\n// Create temporary directory:\nPath temp = Files.createTempDirectory(\"myapp\");\n\n// Delete empty directory:\nFiles.delete(Path.of(\"emptydir\"));"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Checking file properties"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.nio.file.*;\nimport java.io.IOException;\n\nPath p = Path.of(\"file.txt\");\n\n// Existence and type:\nSystem.out.println(\"Exists: \" + Files.exists(p));\nSystem.out.println(\"Not exists: \" + Files.notExists(p));\nSystem.out.println(\"Is directory: \" + Files.isDirectory(p));\nSystem.out.println(\"Is regular file: \" + Files.isRegularFile(p));\nSystem.out.println(\"Is symlink: \" + Files.isSymbolicLink(p));\n\n// Permissions:\nSystem.out.println(\"Readable: \" + Files.isReadable(p));\nSystem.out.println(\"Writable: \" + Files.isWritable(p));\nSystem.out.println(\"Executable: \" + Files.isExecutable(p));\n\n// File size and modification time:\nSystem.out.println(\"Size: \" + Files.size(p) + \" bytes\");\nSystem.out.println(\"Last modified: \" + Files.getLastModifiedTime(p));"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Listing directory contents"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.nio.file.*;\nimport java.io.IOException;\nimport java.util.stream.Stream;\n\nPath dir = Path.of(\".\");\n\n// List direct children:\ntry (Stream<Path> entries = Files.list(dir)) {\n    entries.forEach(System.out::println);\n}\n\n// List Java files only:\ntry (Stream<Path> entries = Files.list(dir)) {\n    entries.filter(p -> p.toString().endsWith(\".java\"))\n           .forEach(System.out::println);\n}\n\n// List directories only:\ntry (Stream<Path> entries = Files.list(dir)) {\n    entries.filter(Files::isDirectory)\n           .forEach(System.out::println);\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Walking directory tree"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.nio.file.*;\nimport java.io.IOException;\nimport java.util.stream.Stream;\n\n// Walk all files recursively:\ntry (Stream<Path> walk = Files.walk(Path.of(\"src\"))) {\n    walk.filter(Files::isRegularFile)\n        .forEach(System.out::println);\n}\n\n// Find all Java files:\ntry (Stream<Path> walk = Files.walk(Path.of(\"src\"))) {\n    walk.filter(p -> p.toString().endsWith(\".java\"))\n        .forEach(System.out::println);\n}\n\n// Limit depth:\ntry (Stream<Path> walk = Files.walk(Path.of(\"src\"), 2)) {\n    walk.forEach(System.out::println);  // Max 2 levels deep\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Reading file line by line"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.nio.file.*;\nimport java.io.IOException;\nimport java.util.stream.Stream;\n\nPath p = Path.of(\"large.txt\");\n\n// Stream approach (memory efficient):\ntry (Stream<String> lines = Files.lines(p)) {\n    lines.filter(line -> !line.isEmpty())\n         .map(String::toUpperCase)\n         .forEach(System.out::println);\n} catch (IOException e) {\n    System.out.println(\"Error: \" + e.getMessage());\n}\n\n// List approach (loads entire file):\nList<String> lines = Files.readAllLines(p);\nfor (String line : lines) {\n    System.out.println(line);\n}"
      }
    ]
  },
  {
    "id": "serialization",
    "title": "13. Serialization",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "13. Serialization"
      },
      {
        "type": "paragraph",
        "text": "Serialization converts objects to bytes for storage or transmission. Deserialization reconstructs the object. Use serialVersionUID for version control."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Making a class serializable"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.io.Serializable;\n\npublic class Person implements Serializable {\n    private static final long serialVersionUID = 1L;\n\n    private String name;\n    private int age;\n    private transient String password;  // NOT serialized\n\n    public Person(String name, int age, String password) {\n        this.name = name;\n        this.age = age;\n        this.password = password;\n    }\n\n    public String getName() { return name; }\n    public int getAge() { return age; }\n    public String getPassword() { return password; }\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Serializing (writing) objects"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.io.*;\n\ntry (ObjectOutputStream oos = new ObjectOutputStream(\n         new FileOutputStream(\"person.ser\"))) {\n    Person p = new Person(\"Alice\", 30, \"secret123\");\n    oos.writeObject(p);\n    System.out.println(\"Object serialized\");\n} catch (IOException e) {\n    System.out.println(\"Error: \" + e.getMessage());\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Deserializing (reading) objects"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.io.*;\n\ntry (ObjectInputStream ois = new ObjectInputStream(\n         new FileInputStream(\"person.ser\"))) {\n    Person p = (Person) ois.readObject();\n    System.out.println(\"Name: \" + p.getName());\n    System.out.println(\"Age: \" + p.getAge());\n    System.out.println(\"Password: \" + p.getPassword());  // null (transient)\n} catch (IOException | ClassNotFoundException e) {\n    System.out.println(\"Error: \" + e.getMessage());\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Multiple objects"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.io.*;\nimport java.util.ArrayList;\nimport java.util.List;\n\n// Writing multiple objects:\ntry (ObjectOutputStream oos = new ObjectOutputStream(\n         new FileOutputStream(\"people.ser\"))) {\n    oos.writeObject(new Person(\"Alice\", 30, \"pass1\"));\n    oos.writeObject(new Person(\"Bob\", 25, \"pass2\"));\n    oos.writeObject(new Person(\"Charlie\", 35, \"pass3\"));\n}\n\n// Reading multiple objects:\ntry (ObjectInputStream ois = new ObjectInputStream(\n         new FileInputStream(\"people.ser\"))) {\n    List<Person> people = new ArrayList<>();\n    while (ois.available() > 0) {\n        try {\n            Person p = (Person) ois.readObject();\n            people.add(p);\n        } catch (EOFException e) {\n            break;  // End of stream\n        }\n    }\n    people.forEach(p -> System.out.println(p.getName()));\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "serialVersionUID for version control"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.io.Serializable;\n\n// If class changes, JVM invalidates old serialized data\npublic class Person implements Serializable {\n    // IMPORTANT: Change this if you add/remove/modify fields\n    private static final long serialVersionUID = 1L;\n\n    private String name;\n    private int age;\n    // Added new field in version 2:\n    // private String email;  // Would require serialVersionUID = 2L\n}\n\n// If serialVersionUID doesn't match, deserialization fails:\n// java.io.InvalidClassException: Person; local class incompatible:\n//   stream classdesc serialVersionUID = 1\n//   local class serialVersionUID = 2"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Excluding fields with transient"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.io.Serializable;\n\npublic class User implements Serializable {\n    private static final long serialVersionUID = 1L;\n\n    private String username;\n    private String password;       // Sensitive — exclude from serialization\n    private transient Connection connection;  // Streams can't be serialized\n    private transient Object cache;           // Temporary cache\n\n    // These fields ARE serialized: username\n    // These are NOT serialized: password, connection, cache\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Objects with non-serializable fields"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.io.Serializable;\nimport java.io.IOException;\nimport java.io.ObjectOutputStream;\nimport java.io.ObjectInputStream;\n\npublic class Config implements Serializable {\n    private static final long serialVersionUID = 1L;\n\n    private String name;\n    private transient Map<String, Object> settings;  // Custom object\n\n    public Config(String name) {\n        this.name = name;\n        this.settings = new HashMap<>();\n    }\n\n    // Custom serialization:\n    private void writeObject(ObjectOutputStream oos) throws IOException {\n        oos.defaultWriteObject();  // Serialize all non-transient fields\n        oos.writeObject(new HashMap<>(settings));  // Manually serialize settings\n    }\n\n    private void readObject(ObjectInputStream ois)\n            throws IOException, ClassNotFoundException {\n        ois.defaultReadObject();  // Deserialize all non-transient fields\n        this.settings = (Map<String, Object>) ois.readObject();  // Manually restore\n    }\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "WRONG vs CORRECT serialization"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// WRONG — No Serializable interface\npublic class Data {  // Throws NotSerializableException\n    private String value;\n}\n\ntry (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream(\"data.ser\"))) {\n    oos.writeObject(new Data());  // FAILS\n}\n\n// CORRECT — Implement Serializable\npublic class Data implements Serializable {\n    private static final long serialVersionUID = 1L;\n    private String value;\n}\n\ntry (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream(\"data.ser\"))) {\n    oos.writeObject(new Data());  // OK\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Security warning"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.io.*;\n\n// DANGEROUS — Deserializing untrusted data can execute arbitrary code\ntry (ObjectInputStream ois = new ObjectInputStream(\n         new FileInputStream(\"untrusted.ser\"))) {\n    Object obj = ois.readObject();  // Could be a malicious object\n}\n\n// SAFER — Use ObjectInputFilter (Java 9+)\ntry (ObjectInputStream ois = new ObjectInputStream(\n         new FileInputStream(\"untrusted.ser\"))) {\n    ois.setObjectInputFilter(ObjectInputFilter.rejectUndeclaredClasses());\n    Object obj = ois.readObject();  // Rejects unexpected classes\n}"
      }
    ]
  }
]
