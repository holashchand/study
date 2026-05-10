// Chapter 10 - Structured block data (no raw HTML)
export const sections = [
  {
    "id": "version-overview",
    "title": "Java Version Overview (9-26)",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "Java Version Overview (9-26)"
      },
      {
        "type": "paragraph",
        "text": "**LTS (Long-Term Support):** Java 8, 11, 17, 21, 25 receive extended support for 5-8 years. Non-LTS versions get 6 months support."
      }
    ]
  },
  {
    "id": "java9",
    "title": "Java 9 (2017): JPMS, Collections, Streams",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "Java 9 (2017): JPMS, Collections, Streams"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "1. Java Platform Module System (JPMS)"
      },
      {
        "type": "paragraph",
        "text": "**What it is:** Explicit module declarations, strong encapsulation, dependencies, service loading. Every module declares what it needs and what it exports."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Module Declaration Syntax"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// File: src/module-info.java (at source root, parallel to packages)\nmodule com.myapp {\n    // REQUIRES: dependencies on other modules\n    requires java.sql;                    // standard module\n    requires transitive java.xml;         // transitive: users of myapp get xml too\n    requires static java.logging;         // optional (compile-time only)\n\n    // EXPORTS: packages visible outside this module\n    exports com.myapp.api;                // only this package is public\n    exports com.myapp.util to com.other;  // qualified export\n\n    // OPENS: allow reflection (for frameworks like Jackson, Spring)\n    opens com.myapp.model;                // reflection on entire package\n    opens com.myapp.config to\n        com.fasterxml.jackson.databind;   // qualified open\n\n    // USES & PROVIDES: service discovery pattern\n    uses com.myapp.spi.Plugin;            // this module uses Plugin\n\n    provides com.myapp.spi.Plugin\n        with com.myapp.impl.DefaultPlugin,  // can provide multiple impls\n                com.myapp.impl.AdvancedPlugin;\n}"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Module Diagram"
      },
      {
        "type": "diagram",
        "content": "\njava.base (always implicitly required)\n    │\n    ├── java.sql\n    │   ├── JDBC drivers\n    │   └── Connection, Statement, etc\n    │\n    ├── java.xml\n    │   ├── SAX, DOM, StAX parsing\n    │   └── (transitive from com.myapp)\n    │\n    └── com.myapp (our module)\n        ├── exports com.myapp.api\n        ├── opens   com.myapp.model\n        └── uses    com.myapp.spi.Plugin\n            │\n            ├─→ provides com.myapp.impl.DefaultPlugin\n            └─→ provides com.myapp.impl.AdvancedPlugin\n      "
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Service Discovery Example"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// File: com/myapp/spi/Plugin.java\npublic interface Plugin {\n    String getName();\n    void execute();\n}\n\n// File: com/myapp/impl/DefaultPlugin.java (in same module or different)\npublic class DefaultPlugin implements Plugin {\n    @Override\n    public String getName() { return \"Default\"; }\n    @Override\n    public void execute() { System.out.println(\"Executing default\"); }\n}\n\n// File: com/myapp/App.java (consumer)\nimport java.util.ServiceLoader;\nimport com.myapp.spi.Plugin;\n\npublic class App {\n    public static void main(String[] args) {\n        // Load all Plugin implementations declared in module-info.java\n        ServiceLoader<Plugin> loader = ServiceLoader.load(Plugin.class);\n        loader.forEach(plugin -> {\n            System.out.println(\"Found: \" + plugin.getName());\n            plugin.execute();\n        });\n    }\n}\n"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Compilation & Execution"
      },
      {
        "type": "code",
        "language": "bash",
        "code": "javac -d out/classes \\\\\n    --module-source-path src \\\\\n    src/com.myapp/module-info.java \\\\\n    src/com.myapp/com/myapp/**/*.java\n\n# Run with module path instead of classpath\njava --module-path out/classes \\\\\n     --module com.myapp/com.myapp.App\n\n# Create modular JAR\njar --create --file app.jar \\\\\n    --main-class com.myapp.App \\\\\n    -C out/classes .\n\n# Reduce JRE size using jlink\njlink --module-path $JAVA_HOME/jmods:app.jar \\\\\n      --add-modules com.myapp \\\\\n      --output app-runtime\n./app-runtime/bin/java -m com.myapp/com.myapp.App\n"
      },
      {
        "type": "paragraph",
        "text": "**Benefits:** Strong encapsulation (private by default), explicit dependencies (avoid jar hell), smaller JRE footprint, better security boundaries."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "2. Collection Factory Methods (Immutable)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// OLD WAY (pre-Java 9)\nList<String> list = new ArrayList<>(Arrays.asList(\"a\", \"b\", \"c\"));\n// Still mutable, requires 3 imports\n\n// JAVA 9+ IMMUTABLE FACTORIES\nList<String> list = List.of(\"a\", \"b\", \"c\");      // immutable, no nulls\nSet<Integer> set = Set.of(1, 2, 3);              // immutable, unordered\nMap<String, Integer> map = Map.of(\n    \"one\", 1,\n    \"two\", 2,\n    \"three\", 3\n);\n\n// For larger maps (varargs have limit):\nMap<String, Integer> bigMap = Map.ofEntries(\n    Map.entry(\"first\", 1),\n    Map.entry(\"second\", 2),\n    Map.entry(\"third\", 3)\n);\n\n// Try to modify:\nlist.add(\"d\");  // UnsupportedOperationException\nset.remove(1);  // UnsupportedOperationException\nmap.put(\"four\", 4);  // UnsupportedOperationException\n\n// Null not allowed:\nList.of(\"a\", null);  // NullPointerException\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "3. Stream API Enhancements"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// takeWhile: stop when predicate fails\nStream.of(1, 2, 3, 4, 5, 1, 2)\n    .takeWhile(n -> n < 4)\n    .forEach(System.out::println);\n// Output: 1, 2, 3 (stops at 4)\n\n// dropWhile: skip while predicate is true\nStream.of(1, 2, 3, 4, 5, 1, 2)\n    .dropWhile(n -> n < 4)\n    .forEach(System.out::println);\n// Output: 4, 5, 1, 2\n\n// iterate with finite limit (vs infinite pre-9)\nStream.iterate(1, n -> n <= 100, n -> n * 2)\n    .forEach(System.out::println);\n// Output: 1, 2, 4, 8, 16, 32, 64\n\n// ofNullable: stream of 0 or 1 element\nStream.ofNullable(null).count();      // 0\nStream.ofNullable(\"value\").count();   // 1\nOptional.of(\"x\").stream();             // Stream[\"x\"]\n\n// Use in stream chain:\nList<String> values = List.of(\"a\", null, \"b\", null, \"c\");\nvalues.stream()\n    .flatMap(Stream::ofNullable)\n    .forEach(System.out::println);\n// Output: a, b, c\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "4. Optional Enhancements"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// ifPresentOrElse: handle both present and empty cases\nOptional.of(\"Alice\")\n    .ifPresentOrElse(\n        name -> System.out.println(\"Hello, \" + name),\n        () -> System.out.println(\"No user found\")\n    );\n\n// or: get alternative Optional\nOptional<String> fallback = Optional.empty()\n    .or(() -> Optional.of(\"default\"))\n    .or(() -> Optional.of(\"another default\"));\nSystem.out.println(fallback.get());  // \"default\"\n\n// stream: convert Optional to Stream\nList<String> names = List.of(\n    Optional.of(\"Alice\"),\n    Optional.empty(),\n    Optional.of(\"Bob\")\n);\nnames.stream()\n    .flatMap(Optional::stream)\n    .forEach(System.out::println);\n// Output: Alice, Bob\n"
      }
    ]
  },
  {
    "id": "java10",
    "title": "Java 10 (2018): var Keyword",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "Java 10 (2018): var Keyword"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Local Variable Type Inference (var)"
      },
      {
        "type": "paragraph",
        "text": "**What it is:** Compiler infers type from initializer. Still fully statically typed. Only for local variables."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Basic Usage"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Type is inferred from right-hand side\nvar name = \"Alice\";                    // String\nvar age = 30;                          // int\nvar score = 95.5;                      // double\nvar list = new ArrayList<String>();   // ArrayList<String>\nvar map = new HashMap<String, Integer>();  // HashMap<String,Integer>\n\n// Method calls infer return type\nvar now = LocalDateTime.now();         // LocalDateTime\nvar files = Files.list(Paths.get(\".\")); // Stream<Path>\n\n// Type is determined at compile time (not runtime)\nvar x = 5;\nx = \"hello\";  // COMPILE ERROR: String cannot assign to int\n"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "In Loops and Iteration"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// for-loop\nList<String> words = List.of(\"hello\", \"world\", \"java\");\nfor (var word : words) {\n    System.out.println(word);  // word is String\n}\n\n// Traditional for-loop\nfor (var i = 0; i < 10; i++) {\n    System.out.println(i);  // i is int\n}\n\n// Map iteration\nMap<String, Integer> scores = Map.of(\"Alice\", 95, \"Bob\", 87);\nfor (var entry : scores.entrySet()) {\n    System.out.println(entry.getKey() + \": \" + entry.getValue());\n}\n"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "With Try-with-Resources"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Old way: verbose\ntry (BufferedReader br = new BufferedReader(new FileReader(\"file.txt\"))) {\n    String line;\n    while ((line = br.readLine()) != null) {\n        System.out.println(line);\n    }\n}\n\n// Java 10+: var everywhere\ntry (var br = new BufferedReader(new FileReader(\"file.txt\"))) {\n    String line;\n    while ((line = br.readLine()) != null) {\n        System.out.println(line);\n    }\n}\n\n// Multiple resources\ntry (var br = new BufferedReader(new FileReader(\"input.txt\"));\n     var bw = new BufferedWriter(new FileWriter(\"output.txt\"))) {\n    // ...\n}\n"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Limitations (var cannot be used)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// ✗ Method parameters\npublic void process(var list) { }  // ERROR\n\n// ✗ Return types\npublic var getData() { return \"x\"; }  // ERROR\n\n// ✗ Class fields\nclass Person {\n    var name = \"Alice\";  // ERROR\n}\n\n// ✗ Catch parameters (until Java 14)\ntry { ... } catch (var e) { }  // ERROR (pre-Java 14)\n\n// ✗ Without initializer\nvar x;  // ERROR: no initializer\n\n// ✗ Null initializer (too broad)\nvar x = null;  // ERROR: type is indeterminate\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Unmodifiable Copy Methods"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Make defensive copies (immutable views)\nList<String> original = new ArrayList<>(List.of(\"a\", \"b\", \"c\"));\nList<String> copy = List.copyOf(original);\n\nSet<Integer> setCopy = Set.copyOf(Set.of(1, 2, 3));\nMap<String, Integer> mapCopy = Map.copyOf(Map.of(\"x\", 1, \"y\", 2));\n\n// Original is still mutable\noriginal.add(\"d\");\nSystem.out.println(original);  // [a, b, c, d]\nSystem.out.println(copy);      // [a, b, c] (unchanged)\n\n// In streams\nList<String> immutable = someStream\n    .collect(Collectors.toUnmodifiableList());\nSet<String> immutableSet = someStream\n    .collect(Collectors.toUnmodifiableSet());\n"
      }
    ]
  },
  {
    "id": "java11",
    "title": "Java 11 (2018 LTS): String APIs, HttpClient, Files",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "Java 11 (2018 LTS): String APIs, HttpClient, Files"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "1. String Methods"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// isBlank: checks for whitespace-only strings (Unicode-aware)\n\"  \".isBlank();                 // true\n\"  hello  \".isBlank();          // false\n\"\".isBlank();                   // true\n\n// strip: Unicode-aware trim (removes leading/trailing whitespace)\n\"  hello  \".strip();            // \"hello\"\n\" hello \".strip();    // \"hello\" (includes non-breaking space)\n\nString s = \"  hello  \";\ns.stripLeading();               // \"hello  \"\ns.stripTrailing();              // \"  hello\"\n\n// repeat: duplicate string\n\"ha\".repeat(3);                 // \"hahaha\"\n\"abc\".repeat(0);                // \"\"\n\"x\".repeat(5);                  // \"xxxxx\"\n\n// lines: split string into stream of lines\nString multiline = \"line1\\\\nline2\\\\nline3\";\nmultiline.lines()\n    .forEach(System.out::println);\n// Output: line1, line2, line3\n\n// Practical: read file with lines()\nFiles.readString(Path.of(\"file.txt\"))\n    .lines()\n    .filter(line -> !line.isBlank())\n    .map(String::trim)\n    .forEach(System.out::println);\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "2. Files I/O Methods"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.nio.file.Files;\nimport java.nio.file.Path;\nimport java.nio.file.StandardOpenOption;\n\n// Read entire file as string\nString content = Files.readString(Path.of(\"file.txt\"));\nString content2 = Files.readString(Path.of(\"file.txt\"),\n                                    StandardCharsets.UTF_8);\n\n// Write string to file\nFiles.writeString(Path.of(\"output.txt\"), \"Hello, World!\");\nFiles.writeString(Path.of(\"output.txt\"), \"Hello\",\n                  StandardCharsets.UTF_8,\n                  StandardOpenOption.CREATE_NEW);\n\n// Append to file\nFiles.writeString(Path.of(\"output.txt\"), \"\\\\nMore content\",\n                  StandardOpenOption.APPEND);\n\n// Read all lines\nList<String> lines = Files.readAllLines(Path.of(\"file.txt\"));\n\n// Read all bytes\nbyte[] bytes = Files.readAllBytes(Path.of(\"binary.bin\"));\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "3. HttpClient (Modern HTTP)"
      },
      {
        "type": "paragraph",
        "text": "**Why:** HttpURLConnection is ancient and clunky. HttpClient supports HTTP/2, async, modern patterns."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Synchronous GET"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.net.http.HttpClient;\nimport java.net.http.HttpRequest;\nimport java.net.http.HttpResponse;\nimport java.net.URI;\nimport java.time.Duration;\n\n// Create client (reuse for multiple requests)\nHttpClient client = HttpClient.newBuilder()\n    .version(HttpClient.Version.HTTP_2)\n    .followRedirects(HttpClient.Redirect.NORMAL)\n    .connectTimeout(Duration.ofSeconds(10))\n    .build();\n\n// Build request\nHttpRequest request = HttpRequest.newBuilder()\n    .uri(URI.create(\"https://api.example.com/users\"))\n    .GET()\n    .timeout(Duration.ofSeconds(30))\n    .header(\"Accept\", \"application/json\")\n    .build();\n\n// Send and get response\nHttpResponse<String> response = client.send(request,\n    HttpResponse.BodyHandlers.ofString());\n\nSystem.out.println(\"Status: \" + response.statusCode());\nSystem.out.println(\"Body: \" + response.body());\n\nif (response.statusCode() == 200) {\n    String json = response.body();\n    // parse JSON here\n}\n"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Asynchronous GET"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Non-blocking, returns CompletableFuture\nclient.sendAsync(request, HttpResponse.BodyHandlers.ofString())\n    .thenApply(HttpResponse::body)\n    .thenAccept(body -> System.out.println(\"Response: \" + body))\n    .exceptionally(e -> {\n        System.err.println(\"Error: \" + e.getMessage());\n        return null;\n    });\n\n// Or with explicit completion\nclient.sendAsync(request, HttpResponse.BodyHandlers.ofString())\n    .whenComplete((response, exception) -> {\n        if (exception != null) {\n            exception.printStackTrace();\n        } else {\n            System.out.println(\"Got: \" + response.body());\n        }\n    });\n"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "POST with JSON Body"
      },
      {
        "type": "code",
        "language": "java",
        "code": "String jsonBody = \"\"\"\n    {\n      \"name\": \"Alice\",\n      \"email\": \"alice@example.com\"\n    }\n    \"\"\";\n\nHttpRequest post = HttpRequest.newBuilder()\n    .uri(URI.create(\"https://api.example.com/users\"))\n    .header(\"Content-Type\", \"application/json\")\n    .POST(HttpRequest.BodyPublishers.ofString(jsonBody))\n    .build();\n\nHttpResponse<String> response = client.send(post,\n    HttpResponse.BodyHandlers.ofString());\n\nSystem.out.println(\"Created: \" + response.statusCode());\n"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Different Response Body Handlers"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// String body\nHttpResponse<String> resp1 = client.send(request,\n    HttpResponse.BodyHandlers.ofString());\n\n// Byte array (for binary)\nHttpResponse<byte[]> resp2 = client.send(request,\n    HttpResponse.BodyHandlers.ofByteArray());\n\n// Write to file\nHttpResponse<Path> resp3 = client.send(request,\n    HttpResponse.BodyHandlers.ofFile(Path.of(\"output.bin\")));\n\n// Stream processing\nHttpResponse<Stream<String>> resp4 = client.send(request,\n    HttpResponse.BodyHandlers.ofLines());\nresp4.body().forEach(System.out::println);\n\n// Custom handler (discard body, just status)\nHttpResponse<Void> resp5 = client.send(request,\n    HttpResponse.BodyHandlers.discarding());\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "4. Single-File Programs"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// File: Hello.java\npublic class Hello {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n    }\n}\n"
      },
      {
        "type": "code",
        "language": "bash",
        "code": "# Pre-Java 11: must compile first\njavac Hello.java\njava Hello\n\n# Java 11+: run directly (no separate compile step)\njava Hello.java\n# Output: Hello, World!\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "5. Predicate.not()"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.util.function.Predicate;\n\nList<String> words = List.of(\"hello\", \"\", \"world\", \"\", \"java\");\n\n// Old way: verbose\nwords.stream()\n    .filter(s -> !s.isBlank())\n    .forEach(System.out::println);\n\n// Java 11+: cleaner\nwords.stream()\n    .filter(Predicate.not(String::isBlank))\n    .forEach(System.out::println);\n\n// Works with custom predicates too\nPredicate<Integer> isEven = n -> n % 2 == 0;\nList<Integer> nums = List.of(1, 2, 3, 4, 5, 6);\nnums.stream()\n    .filter(Predicate.not(isEven))\n    .forEach(System.out::println);  // 1, 3, 5\n"
      }
    ]
  },
  {
    "id": "java12-15",
    "title": "Java 12-15: Switch Expressions, Text Blocks, Sealed Classes",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "Java 12-15: Switch Expressions, Text Blocks, Sealed Classes"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Switch Expressions (Java 12 preview, Java 14 final)"
      },
      {
        "type": "paragraph",
        "text": "**Covered in Chapter 3.** Mark here: Java 12 introduced preview, Java 14+ is final."
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Old switch statement\nString day = \"Monday\";\nString type;\nswitch (day) {\n    case \"Saturday\":\n    case \"Sunday\":\n        type = \"weekend\";\n        break;\n    default:\n        type = \"weekday\";\n        break;\n}\n\n// Java 12+ switch expression\nString type = switch (day) {\n    case \"Saturday\", \"Sunday\" -> \"weekend\";\n    case \"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\" -> \"weekday\";\n    default -> \"unknown\";\n};\n\n// With blocks\nint value = switch (status) {\n    case \"active\" -> {\n        System.out.println(\"Processing active\");\n        yield 1;  // yield returns value from block\n    }\n    case \"inactive\" -> {\n        System.out.println(\"Skipping inactive\");\n        yield 0;\n    }\n    default -> -1;\n};\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Text Blocks (Java 13 preview, Java 15 final)"
      },
      {
        "type": "paragraph",
        "text": "**What it is:** Multi-line strings with automatic indentation handling. No escaping needed for quotes."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Basic Syntax"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// OLD: Messy string concatenation\nString json = \"{\\\\n\" +\n    \"  \\\\\"name\\\\\": \\\\\"Alice\\\\\",\\\\n\" +\n    \"  \\\\\"age\\\\\": 30,\\\\n\" +\n    \"  \\\\\"active\\\\\": true\\\\n\" +\n    \"}\";\n\n// JAVA 15+: Text block (triple quotes)\nString json = \"\"\"\n    {\n      \"name\": \"Alice\",\n      \"age\": 30,\n      \"active\": true\n    }\n    \"\"\";\n\n// HTML example\nString html = \"\"\"\n    <html>\n        <head>\n            <title>Example</title>\n        </head>\n        <body>\n            <p>Hello, World!</p>\n</body>\n    </html>\n    \"\"\";\n\n// SQL example\nString query = \"\"\"\n    SELECT * FROM users\n    WHERE age > 18\n    AND status = 'active'\n    ORDER BY created_at DESC\n    \"\"\";\n"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Formatting & Whitespace"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Indentation is automatically stripped based on closing \"\"\"\nString output = \"\"\"\n    Line one\n    Line two\n      Line three (extra indent preserved)\n    Line four\n    \"\"\";\n// Result:\n// \"Line one\\\\nLine two\\\\n  Line three (extra indent preserved)\\\\nLine four\\\\n\"\n\n// Using .formatted() (like String.format)\nString greeting = \"\"\"\n    Hello, %s!\n    Your age is %d.\n    \"\"\".formatted(\"Alice\", 30);\n\n// Suppress final newline with trailing backslash\nString oneLine = \"\"\"\n    This is a \\\\\n    single line\"\"\";\n// Result: \"This is a single line\"\n\n// Raw string (rarely used)\nString raw = \"C:\\\\\\\\Users\\\\\\\\Alice\\\\\\\\Documents\";  // before 15\nString raw15 = \"\"\"\n    C:\\\\Users\\\\Alice\\\\Documents\n    \"\"\";  // backslashes literal in text blocks\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "String.indent() and String.transform()"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// indent: add/remove indentation from each line\nString code = \"hello\\\\nworld\\\\njava\";\nString indented = code.indent(4);\n// Result: \"    hello\\\\n    world\\\\n    java\\\\n\"\n\nString dedented = \"    line1\\\\n    line2\".indent(-4);\n// Result: \"line1\\\\nline2\"\n\n// transform: apply function to string\n\"42\".transform(Integer::parseInt);              // 42\n\"HELLO\".transform(String::toLowerCase);         // \"hello\"\n\"  spaced  \".transform(String::trim);           // \"spaced\"\n\n// Practical: format JSON with indentation\nString json = \"\"\"\n    {\"name\":\"Alice\",\"age\":30}\n    \"\"\";\nString pretty = JsonUtils.format(json)\n    .indent(2);  // indent pretty-printed result\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Sealed Classes (Java 15 preview, Java 17 final)"
      },
      {
        "type": "paragraph",
        "text": "**Covered in Chapter 5.** Mark here: Java 15 introduced preview, Java 17+ is final."
      },
      {
        "type": "paragraph",
        "text": "**Syntax:** \\"
      }
    ]
  },
  {
    "id": "java16-17",
    "title": "Java 16-17 (LTS): Records Final, Pattern Matching, Sealed Classes Final",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "Java 16-17 (LTS): Records Final, Pattern Matching, Sealed Classes Final"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Records (Java 14 preview, Java 16 final)"
      },
      {
        "type": "paragraph",
        "text": "**Covered in Chapter 5 in detail.** Summary here:"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Data class with fields, constructor, equals, hashCode, toString\nrecord Person(String name, int age) {\n    // Automatically generates:\n    // - Constructor: Person(String name, int age)\n    // - Field accessors: name(), age()\n    // - equals(), hashCode(), toString()\n}\n\n// Usage\nPerson alice = new Person(\"Alice\", 30);\nSystem.out.println(alice);              // Person[name=Alice, age=30]\nSystem.out.println(alice.name());       // Alice\nSystem.out.println(alice.age());        // 30\n\n// Custom validation in constructor\nrecord Point(int x, int y) {\n    public Point {  // compact constructor (no params)\n        if (x < 0 || y < 0) {\n            throw new IllegalArgumentException(\"Coordinates must be non-negative\");\n        }\n    }\n}\n\n// With methods\nrecord Rectangle(double width, double height) {\n    public double area() {\n        return width * height;\n    }\n\n    public boolean isSquare() {\n        return width == height;\n    }\n}\n\n// Records are immutable\nPoint p = new Point(5, 10);\np.x = 20;  // ERROR: cannot assign to field\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Pattern Matching for instanceof (Final in Java 16)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Already shown above, now final (not preview)\nObject obj = \"test\";\n\nif (obj instanceof String s) {\n    System.out.println(\"Length: \" + s.length());\n}\n\n// Nested patterns with records (Java 21 feature, but instanceof part is 16)\nrecord User(String name, int age) {}\nObject user = new User(\"Alice\", 30);\n\nif (user instanceof User u) {\n    System.out.println(u.name() + \" is \" + u.age());\n}\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Stream.toList()"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.util.stream.Collectors;\n\n// OLD: verbose collector\nList<String> result = stream\n    .collect(Collectors.toList());\n\n// JAVA 16+: shorthand\nList<String> result = stream\n    .toList();  // returns unmodifiable List\n\n// Note: returns unmodifiable list (can't add/remove)\nList<Integer> nums = List.of(1, 2, 3).stream()\n    .filter(n -> n > 1)\n    .toList();  // [2, 3]\nnums.add(4);   // UnsupportedOperationException\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Stream.mapMulti()"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Generate multiple outputs per input (like flatMap but more explicit)\nList<Integer> inputs = List.of(1, 2, 3);\n\nList<Integer> result = inputs.stream()\n    .mapMulti((num, consumer) -> {\n        consumer.accept(num);        // emit original\n        consumer.accept(num * 10);   // emit multiplied\n    })\n    .toList();\n// Result: [1, 10, 2, 20, 3, 30]\n\n// More practical: flatten optional fields\nrecord Order(String id, List<Item> items) {}\nrecord Item(String sku, int qty) {}\n\nList<Item> allItems = orders.stream()\n    .mapMulti((order, consumer) -> {\n        order.items().forEach(consumer);\n    })\n    .toList();\n\n// Equivalent to flatMap:\nList<Item> allItems2 = orders.stream()\n    .flatMap(order -> order.items().stream())\n    .toList();\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Sealed Classes (Final in Java 17)"
      },
      {
        "type": "paragraph",
        "text": "**Already shown in Java 15 section.** Java 17 just finalizes the feature (not preview)."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Pattern Matching for switch (Java 17 preview)"
      },
      {
        "type": "paragraph",
        "text": "**Covered in Chapter 3, Java 21 final.** Java 17 introduces preview version:"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Java 17+ (preview, final in 21)\nObject obj = 42;\n\nString result = switch (obj) {\n    case Integer i -> \"Integer: \" + i;\n    case String s -> \"String: \" + s;\n    case Double d -> \"Double: \" + d;\n    default -> \"Unknown\";\n};\n\n// With guards\nint value = switch (obj) {\n    case Integer i when i > 0 -> i * 2;\n    case Integer i when i < 0 -> -i;\n    case Integer i -> 0;  // i == 0\n    default -> -1;\n};\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "RandomGenerator API"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.util.random.RandomGenerator;\n\n// Modern replacement for java.util.Random\nRandomGenerator rng = RandomGenerator.of(\"L64X128MixRandom\");\n\n// Generate random numbers\nint num = rng.nextInt(100);           // 0-99\ndouble decimal = rng.nextDouble();     // 0.0-1.0\nlong bigNum = rng.nextLong(1000000);  // 0-999999\nboolean flag = rng.nextBoolean();\n\n// Stream generation\nrng.ints(10, 0, 100)          // 10 random ints 0-99\n    .forEach(System.out::println);\n\nrng.longs(5, 0, 1000)         // 5 random longs 0-999\n    .forEach(System.out::println);\n\n// Different algorithm options\n// Math.random() still works (uses default)\ndouble x = Math.random();\n\n// Old Random class still works\nvar oldRng = new java.util.Random();\nint y = oldRng.nextInt(100);\n"
      }
    ]
  },
  {
    "id": "java18-20",
    "title": "Java 18-20: Web Server, Virtual Threads (Preview)",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "Java 18-20: Web Server, Virtual Threads (Preview)"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Simple Web Server (Java 18)"
      },
      {
        "type": "paragraph",
        "text": "**What it is:** Built-in static file server, no dependencies needed."
      },
      {
        "type": "code",
        "language": "bash",
        "code": "# Start default server (localhost:8000, serving current dir)\njwebserver\n\n# Custom port\njwebserver -p 9090\n\n# Custom directory\njwebserver -d /var/www\n\n# Both\njwebserver -p 3000 -d /home/user/public_html\n\n# Set bind address\njwebserver -b 0.0.0.0 -p 8000\n\n# Then access: curl http://localhost:8000/\n"
      },
      {
        "type": "paragraph",
        "text": "**Use case:** Quick demo server, testing, single-page app development. Not production."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Virtual Threads Introduction (Java 19-20 preview)"
      },
      {
        "type": "paragraph",
        "text": "**Covered in Chapter 9 (Concurrency).** Full feature in Java 21. Here's quick intro:"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// OLD: limited by expensive OS threads\nExecutorService executor = Executors.newFixedThreadPool(10);\nfor (int i = 0; i < 1000; i++) {\n    executor.submit(() -> {\n        doSomeWork();  // but only 10 threads total\n    });\n}\n\n// JAVA 19+ Virtual Threads (lightweight, millions possible)\ntry (var executor = Executors.newVirtualThreadPerTaskExecutor()) {\n    for (int i = 0; i < 100_000; i++) {\n        executor.submit(() -> {\n            doSomeWork();  // each task gets its own virtual thread!\n        });\n    }\n}  // wait for all to complete\n\n// Direct creation\nThread vThread = Thread.ofVirtual()\n    .name(\"worker-1\")\n    .start(() -> System.out.println(\"Running in virtual thread\"));\n\n// Not for CPU-intensive work (still limited by CPU cores)\n// Best for I/O-bound work (network, database, file I/O)\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Javadoc @snippet Tag (Java 18)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "/**\n * Processes a list of numbers and returns the sum.\n *\n * {@snippet :\n * var numbers = List.of(1, 2, 3, 4, 5);\n * int sum = numbers.stream()\n *     .mapToInt(Integer::intValue)\n *     .sum();\n * System.out.println(sum);  // @highlight substring=\"sum\"\n * }\n *\n * @param numbers the input numbers\n * @return the sum\n */\npublic int sum(List<Integer> numbers) {\n    return numbers.stream().mapToInt(Integer::intValue).sum();\n}\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "UTF-8 Default Charset (Java 18)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Pre-Java 18: default charset depends on OS/locale\nCharset old = Charset.defaultCharset();  // could be Cp1252, UTF-8, etc.\n\n// Java 18+: always UTF-8\nCharset ch = Charset.defaultCharset();   // always StandardCharsets.UTF_8\n\n// Always safe to assume UTF-8 for:\nFiles.readString(path);\nFiles.writeString(path, content);\nnew String(bytes);\n"
      }
    ]
  },
  {
    "id": "java21",
    "title": "Java 21 (2023 LTS): Virtual Threads Final, Record Patterns, Sequenced Collections",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "Java 21 (2023 LTS): Virtual Threads Final, Record Patterns, Sequenced Collections"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Virtual Threads (Final)"
      },
      {
        "type": "paragraph",
        "text": "**Detailed in Chapter 9.** Quick reference:"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.util.concurrent.Executors;\n\n// Create executor that uses virtual threads\nExecutorService executor = Executors.newVirtualThreadPerTaskExecutor();\n\n// Submit tasks (each gets a virtual thread)\nfor (int i = 0; i < 10_000; i++) {\n    executor.submit(() -> {\n        // Blocking call (e.g., HTTP request, database query)\n        // Doesn't waste OS thread; virtual thread is parked\n        String result = makeHttpRequest();\n        System.out.println(result);\n    });\n}\n\nexecutor.shutdown();\nexecutor.awaitTermination(1, TimeUnit.MINUTES);\n\n// Direct thread creation\nThread vthread = Thread.ofVirtual()\n    .name(\"request-handler-%d\")\n    .start(() -> {\n        handleRequest();  // I/O-bound work\n    });\n\n// Check if virtual\nif (Thread.currentThread().isVirtual()) {\n    System.out.println(\"Running in virtual thread\");\n}\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Record Patterns (Final)"
      },
      {
        "type": "paragraph",
        "text": "**What it is:** Deconstruct records in patterns. Works with instanceof and switch."
      },
      {
        "type": "code",
        "language": "java",
        "code": "record Point(int x, int y) {}\nrecord Line(Point start, Point end) {}\nrecord Circle(Point center, int radius) {}\n\n// Deconstruct in instanceof\nObject obj = new Point(3, 4);\nif (obj instanceof Point(int x, int y)) {\n    System.out.println(\"Point at (\" + x + \", \" + y + \")\");\n}\n\n// Nested record patterns\nShape shape = new Line(new Point(0, 0), new Point(10, 10));\nif (shape instanceof Line(Point(int x1, int y1), Point(int x2, int y2))) {\n    double length = Math.hypot(x2 - x1, y2 - y1);\n    System.out.println(\"Line length: \" + length);\n}\n\n// In switch statement\ndouble area = switch (shape) {\n    case Circle(Point c, int r) -> Math.PI * r * r;\n    case Rectangle(int w, int h) -> w * h;\n    case Line(Point start, Point end) -> 0;  // lines have no area\n};\n\n// With wildcard (_) for unused fields\nif (shape instanceof Circle(Point _, int r)) {\n    System.out.println(\"Radius: \" + r);  // center not used\n}\n\n// Guard expressions\nif (shape instanceof Point(int x, int y) && x == y) {\n    System.out.println(\"Point is on diagonal\");\n}\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Sequenced Collections"
      },
      {
        "type": "paragraph",
        "text": "**What it is:** Every ordered collection now has first/last access. New interfaces: SequencedCollection, SequencedSet, SequencedMap."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "SequencedCollection (List, Deque, etc.)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "List<String> list = new ArrayList<>(List.of(\"a\", \"b\", \"c\", \"d\"));\n\n// New methods\nlist.getFirst();          // \"a\"\nlist.getLast();           // \"d\"\nlist.removeFirst();       // removes \"a\"\nlist.removeLast();        // removes \"d\"\nlist.addFirst(\"z\");       // prepend\nlist.addLast(\"w\");        // append\n\n// Reversed view\nSequencedCollection<String> reversed = list.reversed();\nreversed.stream().forEach(System.out::println);  // d, c, b, a\n\n// Works with Deque too\nDeque<Integer> deque = new LinkedList<>(List.of(1, 2, 3, 4, 5));\ndeque.getFirst();         // 1\ndeque.getLast();          // 5\n"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "SequencedSet (LinkedHashSet, etc.)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "SequencedSet<String> set = new LinkedHashSet<>(Set.of(\"x\", \"y\", \"z\"));\n\nset.getFirst();           // \"x\" (insertion order)\nset.getLast();            // \"z\"\nset.reversed();           // views in reverse order\n\n// Iterator respects order\nset.stream().forEach(System.out::println);  // x, y, z\n"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "SequencedMap (LinkedHashMap, etc.)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "SequencedMap<String, Integer> map = new LinkedHashMap<>();\nmap.put(\"alpha\", 1);\nmap.put(\"beta\", 2);\nmap.put(\"gamma\", 3);\n\n// Entry access\nMap.Entry<String, Integer> first = map.firstEntry();   // alpha=1\nMap.Entry<String, Integer> last = map.lastEntry();     // gamma=3\n\n// Remove and return\nMap.Entry<String, Integer> removed = map.pollFirstEntry();  // removes alpha\nremoved = map.pollLastEntry();  // removes gamma\n\n// Sequenced views\nSequencedCollection<String> keys = map.sequencedKeySet();\nSequencedCollection<Integer> values = map.sequencedValues();\nSequencedCollection<Map.Entry<String, Integer>> entries = map.sequencedEntrySet();\n\n// Reversed\nmap.reversed().forEach((k, v) ->\n    System.out.println(k + \": \" + v)\n);  // gamma: 3, beta: 2, alpha: 1\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Pattern Matching for switch (Final)"
      },
      {
        "type": "paragraph",
        "text": "**Covered in Chapter 3, Java 17+ preview.** Java 21 finalizes."
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Guard expressions\nint days = switch (month) {\n    case \"January\", \"March\", \"May\" -> 31;\n    case \"April\", \"June\" -> 30;\n    case \"February\" when isLeapYear() -> 29;\n    case \"February\" -> 28;\n    default -> throw new IllegalArgumentException(\"Unknown month\");\n};\n\n// Type patterns\nString result = switch (obj) {\n    case String s when s.length() > 5 -> \"Long string: \" + s;\n    case String s -> \"Short string: \" + s;\n    case Integer i when i > 0 -> \"Positive integer\";\n    case Integer i -> \"Non-positive integer\";\n    case null -> \"Null value\";\n    default -> \"Other\";\n};\n"
      }
    ]
  },
  {
    "id": "java22-24",
    "title": "Java 22-24: Unnamed Variables, Unnamed Classes, Stream.gather()",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "Java 22-24: Unnamed Variables, Unnamed Classes, Stream.gather()"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Unnamed Variables (_) (Java 22 final)"
      },
      {
        "type": "paragraph",
        "text": "**What it is:** Use \\"
      }
    ]
  },
  {
    "id": "java25-26",
    "title": "Java 25-26 (LTS/Preview): Value Classes, Scoped Values, Constructor Flexibility",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "Java 25-26 (LTS/Preview): Value Classes, Scoped Values, Constructor Flexibility"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Flexible Constructor Bodies (Java 25 final)"
      },
      {
        "type": "paragraph",
        "text": "**What it is:** In Java 25, constructors can have statements before super() call (as long as they don't reference this)."
      },
      {
        "type": "code",
        "language": "java",
        "code": "class Base {\n    int value;\n    Base(int value) { this.value = value; }\n}\n\n// Pre-Java 25: super() MUST be first\nclass OldDerived extends Base {\n    OldDerived(int value) {\n        super(value);  // must be first statement\n        System.out.println(\"Created with \" + value);  // only after\n    }\n}\n\n// JAVA 25+: statements allowed before super()\nclass NewDerived extends Base {\n    NewDerived(int value) {\n        // Pre-super work allowed (just not 'this' reference)\n        System.out.println(\"Creating Derived with \" + value);\n        int adjusted = value * 2;\n        super(adjusted);  // super can be anywhere now\n        System.out.println(\"Initialized\");\n    }\n}\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Module Import Declarations (Java 25 final)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Import all exported packages from a module at once\nimport module java.base;        // imports all java.* packages from java.base\nimport module java.sql;         // imports all javax.sql, java.sql packages\nimport module com.myapp;        // imports all from our module\n\n// Instead of:\nimport java.lang.*;\nimport java.util.*;\nimport java.util.stream.*;\nimport java.util.function.*;\n// ... dozens of import statements\n\npublic class App {\n    // Can use String, List, Stream, Function, etc. from java.base\n}\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Value Classes (Java 26 preview)"
      },
      {
        "type": "paragraph",
        "text": "**What it is:** Immutable, identity-free classes optimized for memory efficiency. Part of Project Valhalla."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Value Class Basics"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Value class: no object identity, can be stored flat in arrays\nvalue class Point {\n    int x;\n    int y;\n\n    Point(int x, int y) {\n        this.x = x;\n        this.y = y;\n    }\n\n    double distanceFromOrigin() {\n        return Math.sqrt(x * x + y * y);\n    }\n}\n\n// Usage\nPoint p1 = new Point(3, 4);\nPoint p2 = new Point(3, 4);\n\n// No identity (no '==' by object ref)\np1 == p2;  // false (no identity)\np1.equals(p2);  // true (value equality)\n\n// Can be stored flat in arrays (no per-object overhead)\nPoint[] points = new Point[1000];  // efficient!\n// vs regular: new Point[1000] creates 1000 object headers\n\n// Immutable (can't modify)\np1.x = 10;  // ERROR: cannot assign\n"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Primitive Classes (Even Flatter)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Primitive class: absolutely no overhead, just data\n// (preview within preview, likely Java 27+)\nprimitive class Complex {\n    double real;\n    double imag;\n\n    Complex(double real, double imag) {\n        this.real = real;\n        this.imag = imag;\n    }\n\n    Complex add(Complex other) {\n        return new Complex(\n            this.real + other.real,\n            this.imag + other.imag\n        );\n    }\n}\n\n// Stored flat, no object headers\nComplex[] numbers = new Complex[1000_000];  // minimal memory\nComplex[] matrix = new Complex[1000][1000];  // 2D arrays efficient\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Scoped Values (Java 26 final)"
      },
      {
        "type": "paragraph",
        "text": "**What it is:** Thread-local-like mechanism optimized for Virtual Threads. Safe inheritance across threads."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Basic Usage"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.lang.ScopedValue;\n\n// Declare a scoped value\nstatic final ScopedValue<String> REQUEST_USER = ScopedValue.newInstance();\nstatic final ScopedValue<Integer> REQUEST_ID = ScopedValue.newInstance();\n\n// Set for a scope (runs a callable)\nvoid handleRequest(String userId) {\n    ScopedValue.where(REQUEST_USER, userId)\n        .run(() -> {\n            processRequest();  // can read REQUEST_USER.get()\n        });\n}\n\nvoid processRequest() {\n    String user = REQUEST_USER.get();\n    System.out.println(\"Processing for: \" + user);\n}\n\n// Multiple scoped values\nvoid complexOperation(String user, int id) {\n    ScopedValue.where(REQUEST_USER, user)\n        .where(REQUEST_ID, id)\n        .run(() -> {\n            System.out.println(\"User: \" + REQUEST_USER.get());\n            System.out.println(\"ID: \" + REQUEST_ID.get());\n        });\n}\n"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "With Virtual Threads"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// ScopedValue is virtual-thread friendly\n// (unlike ThreadLocal which doesn't scale to millions)\ntry (var executor = Executors.newVirtualThreadPerTaskExecutor()) {\n    for (int i = 0; i < 100_000; i++) {\n        final int taskId = i;\n        executor.submit(() -> {\n            // Each virtual thread can have its own scoped value\n            ScopedValue.where(REQUEST_ID, taskId)\n                .run(this::handleTask);\n        });\n    }\n}\n\nvoid handleTask() {\n    int id = REQUEST_ID.get();\n    // Process with id\n}\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Advanced Pattern Matching (Java 26)"
      },
      {
        "type": "paragraph",
        "text": "**Pattern matching continues to improve.** Further integration with expressions and patterns."
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Deeper nesting and more complex patterns\nrecord Pair<T>(T first, T second) {}\nrecord Container(Pair<String> pair) {}\n\nObject obj = new Container(new Pair<>(\"hello\", \"world\"));\n\n// Complex nested pattern\nif (obj instanceof Container(Pair(String s1, String s2))) {\n    System.out.println(s1 + \" \" + s2);  // hello world\n}\n\n// Pattern in variable declaration (experimental)\nif (obj instanceof Container c) {\n    Pair<String> p = c.pair();\n    // Traditional destructuring still works alongside new patterns\n}\n"
      }
    ]
  },
  {
    "id": "feature-matrix",
    "title": "Complete Feature Matrix: Java 9-26",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "Complete Feature Matrix: Java 9-26"
      },
      {
        "type": "paragraph",
        "text": "This table shows when each feature first appeared and its status."
      }
    ]
  },
  {
    "id": "summary",
    "title": "Key Takeaways",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "Key Takeaways"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "**Java 9:** Foundation for modular Java. Modules, immutable collections, and stream improvements make this a turning point.",
          "**Java 10-11:** Ergonomic wins. var reduces boilerplate. HttpClient modernizes networking. String/Files APIs improve daily coding.",
          "**Java 12-17:** Language evolution. Switch expressions, text blocks, records, sealed classes, and pattern matching transform how we write code.",
          "**Java 18-21 (LTS):** Concurrency revolution. Virtual Threads reduce thread overhead from 1MB each to ~10KB. Transforms IO-bound applications.",
          "**Java 22-26:** Continued refinement. Unnamed variables reduce noise. Unnamed classes simplify scripts. Value classes target performance (preview).",
          "**LTS Versions:** Java 8, 11, 17, 21, 25. Use LTS for production. Non-LTS for experimentation.",
          "**Six-month release cycle:** New version every 6 months. Features graduate from preview → final over multiple releases."
        ]
      }
    ]
  }
]
