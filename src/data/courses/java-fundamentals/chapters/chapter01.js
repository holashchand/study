// Chapter 1 - Structured block data (no raw HTML)
export const sections = [
  {
    "id": "what-is-java",
    "title": "1. What is Java?",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "1. What is Java?"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "History"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "**1995:** James Gosling and team at Sun Microsystems created Java",
          "**Philosophy:** \"Write Once, Run Anywhere\" (WORA) — compile once, run on any platform",
          "**Design goals:** Platform independence, simplicity, security, robustness, network-centric"
        ]
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Java Today"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "**#1 enterprise language:** Used in 90% of Fortune 500 companies",
          "**Android development:** Official language for Android apps",
          "**Frameworks:** Spring, Hibernate, Apache Kafka, Apache Spark",
          "**Scalability:** Powers Netflix, Twitter, LinkedIn, Google services"
        ]
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Key Design Goals"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "**Platform-independent:** Bytecode runs on JVM, not CPU-specific",
          "**Object-oriented:** Everything is an object (except primitives)",
          "**Secure:** Type-safe, no direct memory access, runtime checks",
          "**Robust:** Exception handling, garbage collection, automatic memory management",
          "**Simple:** Familiar C/C++ syntax but simpler, no pointers"
        ]
      }
    ]
  },
  {
    "id": "jre-jdk-jvm",
    "title": "2. JRE vs JDK vs JVM",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "2. JRE vs JDK vs JVM"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Architecture Diagram"
      },
      {
        "type": "diagram",
        "content": "┌─────────────────────────────────────────┐\n│              JDK (Java Development Kit) │\n│  ┌───────────────────────────────────┐  │\n│  │     JRE (Java Runtime Environment)│  │\n│  │  ┌─────────────────────────────┐  │  │\n│  │  │  JVM (Java Virtual Machine) │  │  │\n│  │  │   Executes .class bytecode  │  │  │\n│  │  │   Platform-specific binary  │  │  │\n│  │  └─────────────────────────────┘  │  │\n│  │  + Java Class Libraries (stdlib)   │  │\n│  │  + Runtime Environment             │  │\n│  └───────────────────────────────────┘  │\n│  + javac (compiler)                     │\n│  + javadoc (documentation generator)    │\n│  + jdb (debugger)                       │\n│  + jshell (REPL)                        │\n│  + Other development tools              │\n└─────────────────────────────────────────┘"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "The Three Components"
      },
      {
        "type": "callout",
        "variant": "note",
        "title": "JVM (Java Virtual Machine)",
        "text": "Abstract computing machine that runs bytecode (.class files)\n- Platform-specific implementation (Windows JVM ≠ Linux JVM)\n- Responsible for Just-In-Time (JIT) compilation to native code\n- Provides memory management and garbage collection\n- Isolates Java code from hardware/OS details"
      },
      {
        "type": "callout",
        "variant": "note",
        "title": "JRE (Java Runtime Environment)",
        "text": "JVM + Java Standard Library (java.lang, java.util, java.io, etc.)\n- Needed to **run** Java programs\n- Does NOT include compiler (javac) or other dev tools\n- Lightweight; can be distributed to end users"
      },
      {
        "type": "callout",
        "variant": "note",
        "title": "JDK (Java Development Kit)",
        "text": "JRE + compiler + tools for development\n- Includes: javac, javadoc, jdb, jshell, and more\n- Needed to **develop** Java programs\n- Larger download; typically only needed on developer machines"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "What You Install"
      },
      {
        "type": "code",
        "language": "bash",
        "code": "# Check JDK installation\njava -version        # Shows JRE/JVM version\njavac -version       # Shows compiler version (JDK only)"
      },
      {
        "type": "callout",
        "variant": "important",
        "title": "For this course:",
        "text": "Install the JDK. The JDK includes everything (JVM + JRE + tools)."
      }
    ]
  },
  {
    "id": "jit-compilation",
    "title": "3. JIT Compilation",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "3. JIT Compilation"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Compilation Pipeline"
      },
      {
        "type": "diagram",
        "content": "┌──────────────┐       ┌────────────┐       ┌─────────────────┐\n│ .java source │─ ──→ │ .class     │─ ──→ │ JVM JIT         │\n│    file      │ javac │ bytecode   │ java │ Compiler        │\n│              │       │ (portable) │      │ ↓               │\n└──────────────┘       └────────────┘      │ Native machine  │\n                                           │ code (fast!)    │\n                                           └─────────────────┘"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Key Concepts"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "**Intermediate compilation (javac):** Source code → platform-independent bytecode",
          "**JIT (Just-In-Time):** JVM compiles hot bytecode paths to native machine code during execution — makes Java fast",
          "**Trade-off:** First run is slower (JIT warm-up), but subsequent runs are very fast"
        ]
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Example Execution Path"
      },
      {
        "type": "code",
        "language": "bash",
        "code": "# Step 1: Compile\njavac HelloWorld.java    # Creates HelloWorld.class (bytecode)\n\n# Step 2: Run (JVM starts)\njava HelloWorld          # JVM loads .class, JIT compiles frequently-run methods to native code"
      },
      {
        "type": "callout",
        "variant": "tip",
        "title": "Why JIT is clever:",
        "text": "The JVM profiles which methods run most often. Those hot paths are compiled to native machine code by JIT. Cold code stays as bytecode. This hybrid approach gives you portability + speed."
      }
    ]
  },
  {
    "id": "java-versions",
    "title": "4. Java Versions Timeline",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "4. Java Versions Timeline"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Complete Version History"
      },
      {
        "type": "table",
        "headers": [
          "Version",
          "Year",
          "Key Features",
          "Status"
        ],
        "rows": [
          [
            "1.0",
            "1996",
            "Initial release, applets, AWT",
            "Obsolete"
          ],
          [
            "1.2",
            "1998",
            "Swing, Collections Framework, JIT",
            "Obsolete"
          ],
          [
            "5 (1.5)",
            "2004",
            "Generics, annotations, enums, for-each loop, varargs",
            "Obsolete"
          ],
          [
            "6",
            "2006",
            "Scripting support, improved performance",
            "Obsolete"
          ],
          [
            "7",
            "2011",
            "Try-with-resources, diamond operator, string in switch",
            "Obsolete"
          ],
          [
            "8 LTS",
            "2014",
            "Lambda expressions, streams, functional programming, default methods",
            "Supported until 2030"
          ],
          [
            "9",
            "2017",
            "Modules (JPMS), jshell, private interface methods",
            "Obsolete"
          ],
          [
            "10",
            "2018",
            "Local variable type inference (var keyword)",
            "Obsolete"
          ],
          [
            "11 LTS",
            "2018",
            "Single-file programs, http client, var in lambdas",
            "Supported until 2026"
          ],
          [
            "12–13",
            "2019",
            "Switch expressions (preview), text blocks (preview)",
            "Obsolete"
          ],
          [
            "14–16",
            "2020–2021",
            "Records (preview), sealed classes, pattern matching (preview)",
            "Obsolete"
          ],
          [
            "17 LTS",
            "2021",
            "Sealed classes, strong encapsulation, pattern matching",
            "Supported until 2029"
          ],
          [
            "18–20",
            "2022–2023",
            "Virtual threads (preview), switch pattern matching",
            "Obsolete"
          ],
          [
            "21 LTS",
            "2023",
            "Virtual threads, pattern matching (final), record patterns",
            "Supported until 2031"
          ],
          [
            "22–24",
            "2024–2025",
            "Additional preview features, optimizations",
            "Obsolete"
          ],
          [
            "25 LTS",
            "2025",
            "TBD (next LTS release)",
            "Current LTS"
          ],
          [
            "26",
            "2026",
            "Current release",
            "Current"
          ]
        ]
      },
      {
        "type": "callout",
        "variant": "important",
        "title": "LTS Versions (Long-Term Support):",
        "text": "Java 8, 11, 17, 21, 25. These receive security updates for 5+ years. Use LTS versions for production."
      },
      {
        "type": "callout",
        "variant": "note",
        "title": "Non-LTS versions:",
        "text": "Released every 6 months, supported for only 6 months. Use for experimentation and learning new features."
      }
    ]
  },
  {
    "id": "installing-jdk",
    "title": "5. Installing the JDK",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "5. Installing the JDK"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Popular JDK Distributions"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "**Adoptium (OpenJDK):** Free, open-source, no licensing — `adoptium.net`",
          "**Oracle JDK:** Official, commercial support available — `oracle.com/java/`",
          "**Amazon Corretto:** Free, AWS-supported, optimized — `aws.amazon.com/corretto/`",
          "**GraalVM:** Advanced optimizations, polyglot support — `graalvm.org`"
        ]
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Installation Steps (Linux/Mac)"
      },
      {
        "type": "code",
        "language": "bash",
        "code": "# 1. Download OpenJDK 21 from adoptium.net or install via package manager\n\n# macOS (Homebrew)\nbrew install openjdk@21\n\n# Ubuntu/Debian\nsudo apt update\nsudo apt install openjdk-21-jdk\n\n# 2. Verify installation\njava -version\njavac -version"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Installation Steps (Windows)"
      },
      {
        "type": "code",
        "language": "bash",
        "code": "# 1. Download installer from adoptium.net\n# 2. Run installer, select installation directory (e.g., C:\\\\jdk-21)\n# 3. Verify in Command Prompt:\njava -version\njavac -version"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Set JAVA_HOME Environment Variable"
      },
      {
        "type": "code",
        "language": "bash",
        "code": "# Linux/Mac — add to ~/.bash_profile or ~/.zshrc\nexport JAVA_HOME=/usr/lib/jvm/java-21-openjdk\nexport PATH=$JAVA_HOME/bin:$PATH\n\n# Reload shell\nsource ~/.bash_profile\n\n# Verify\necho $JAVA_HOME\njava -version"
      },
      {
        "type": "code",
        "language": "bash",
        "code": "# Windows — set environment variables\n# Control Panel → System → Advanced system settings → Environment Variables\n# New system variable:\n#   Variable name: JAVA_HOME\n#   Variable value: C:\\\\jdk-21\n\n# Add to PATH:\n#   Edit PATH → New → %JAVA_HOME%\\\\bin\n\n# Verify in new Command Prompt:\njava -version\njavac -version"
      },
      {
        "type": "callout",
        "variant": "tip",
        "title": "Recommended for this course:",
        "text": "Install Java 21 LTS (latest LTS) or Java 11 LTS (stable, widely used)."
      }
    ]
  },
  {
    "id": "hello-world",
    "title": "6. Hello World — First Program",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "6. Hello World — First Program"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Complete HelloWorld.java with Inline Explanations"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// HelloWorld.java — File name MUST match the public class name\n\npublic class HelloWorld {      // public = accessible anywhere; class = template for objects\n    public static void main(String[] args) {  // Entry point — JVM calls this first\n        // public    = accessible by JVM launcher\n        // static    = belongs to the class, no instance needed to call it\n        // void      = method returns nothing\n        // main      = special name — JVM looks for this signature\n        // String[]  = array of text (command-line arguments)\n        // args      = array name (could be any name, but main is the standard name)\n\n        System.out.println(\"Hello, World!\");\n        // System    = built-in class from java.lang package\n        // out       = static PrintStream field (object that writes to console)\n        // println() = method that prints text and moves to new line\n    }\n}\n"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Compile and Run"
      },
      {
        "type": "code",
        "language": "bash",
        "code": "# Compile: converts .java source to .class bytecode\njavac HelloWorld.java\n# Output: HelloWorld.class created\n\n# Run: JVM executes the bytecode\njava HelloWorld\n# Output: Hello, World!"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Common Beginner Mistakes"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// WRONG — file is named Main.java, class is named HelloWorld\n// This will cause: error: class HelloWorld is public, should be declared in a file named HelloWorld.java\npublic class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println(\"Hello\");\n    }\n}\n\n// CORRECT — file name matches public class name\n// File: HelloWorld.java\npublic class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println(\"Hello\");\n    }\n}"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// WRONG — wrong main signature (compiler won't find entry point)\npublic class HelloWorld {\n    public static void main() {  // Missing String[] args parameter\n        System.out.println(\"Hello\");\n    }\n}\n// Running java HelloWorld fails: Error: Could not find or load main class\n\n// CORRECT — exact signature required by JVM\npublic class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println(\"Hello\");\n    }\n}"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "More Complex Example"
      },
      {
        "type": "code",
        "language": "java",
        "code": "public class Greeting {\n    public static void main(String[] args) {\n        String name = \"Alice\";\n        int age = 25;\n        double height = 5.7;\n\n        System.out.println(\"Name: \" + name);\n        System.out.println(\"Age: \" + age);\n        System.out.println(\"Height: \" + height);\n\n        System.out.println(\"In 10 years, age will be: \" + (age + 10));\n    }\n}\n"
      },
      {
        "type": "code",
        "language": "bash",
        "code": "javac Greeting.java\njava Greeting\n# Output:\n# Name: Alice\n# Age: 25\n# Height: 5.7\n# In 10 years, age will be: 35"
      }
    ]
  },
  {
    "id": "compilation-model",
    "title": "7. Compilation Model",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "7. Compilation Model"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Source-to-Execution Flow"
      },
      {
        "type": "diagram",
        "content": "┌──────────────────┐\n│  HelloWorld.java │  (Human-readable source code)\n│   (Source file)  │\n└────────┬─────────┘\n         │ javac compiler\n         ↓\n┌──────────────────┐\n│ HelloWorld.class │  (Bytecode — platform-independent)\n│   (.class file)  │\n└────────┬─────────┘\n         │ java command\n         ↓\n┌──────────────────┐\n│      JVM         │  (Interprets bytecode + JIT compiles to native code)\n│  (Runtime)       │\n└────────┬─────────┘\n         │\n         ↓\n┌──────────────────┐\n│  Program Output  │  (Results on screen/file)</code>"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Step-by-Step Process"
      },
      {
        "type": "callout",
        "variant": "note",
        "title": "Step 1: Compile",
        "text": "javac reads HelloWorld.java\n- Checks syntax and types\n- Produces HelloWorld.class (bytecode)\n- Does NOT produce native executable"
      },
      {
        "type": "callout",
        "variant": "note",
        "title": "Step 2: Run",
        "text": "java command loads HelloWorld.class into memory\n- JVM verifies bytecode is safe\n- JIT compiler translates hot code paths to native machine code\n- Program executes on your CPU"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Example: Compile Error"
      },
      {
        "type": "code",
        "language": "java",
        "code": "public class Bad {\n    public static void main(String[] args) {\n        int x = \"hello\";  // ERROR: cannot assign String to int\n        System.out.println(x);\n    }\n}\n"
      },
      {
        "type": "code",
        "language": "bash",
        "code": "javac Bad.java\n# Error: incompatible types: String cannot be converted to int\n# javac STOPS here, no .class file created"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Example: Runtime Error"
      },
      {
        "type": "code",
        "language": "java",
        "code": "public class Runtime {\n    public static void main(String[] args) {\n        int[] arr = new int[5];\n        System.out.println(arr[10]);  // Index 10 doesn't exist (array is size 5)\n    }\n}\n"
      },
      {
        "type": "code",
        "language": "bash",
        "code": "javac Runtime.java  # Compiles fine\njava Runtime        # Crashes at runtime\n# Exception in thread \"main\" java.lang.ArrayIndexOutOfBoundsException: Index 10 out of bounds for length 5"
      },
      {
        "type": "callout",
        "variant": "warning",
        "title": "Compile-time vs Runtime:",
        "text": "Java is statically typed, so many errors are caught by javac. But logic errors, division by zero, array bounds — these happen at runtime. Always test your code!"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "The .class File"
      },
      {
        "type": "code",
        "language": "bash",
        "code": "# After javac, you get bytecode\njavac HelloWorld.java\n\n# Look at it (binary, not human readable)\nls -la HelloWorld.class\n# -rw-r--r-- 1 user user 427 May 10 12:34 HelloWorld.class\n\n# You can't read it directly, but tools can inspect it\njavap -c HelloWorld  # Shows the bytecode instructions"
      }
    ]
  },
  {
    "id": "package-system",
    "title": "8. Package System",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "8. Package System"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Packages Organize Code"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "**Package:** Namespace for grouping related classes",
          "**Convention:** Reverse domain name: `com.company.project.feature`",
          "**Purpose:** Avoid name collisions, organize large projects, control access (package-private)"
        ]
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Package Declaration Syntax"
      },
      {
        "type": "code",
        "language": "java",
        "code": "package com.example.utils;  // Must be FIRST statement in file (before any imports)\n\npublic class StringHelper {\n    public static String reverse(String s) {\n        return new StringBuilder(s).reverse().toString();\n    }\n}\n"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Directory Structure Must Match Package Name"
      },
      {
        "type": "diagram",
        "content": "src/\n└── com/                           ← First level of package\n    └── example/                    ← Second level\n        └── utils/                  ← Third level\n            └── StringHelper.java   ← package com.example.utils;"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "File Path vs Package Name"
      },
      {
        "type": "code",
        "language": "bash",
        "code": "# File location: src/com/example/utils/StringHelper.java\n# Package inside file: package com.example.utils;\n# Class name: StringHelper\n# Fully qualified name: com.example.utils.StringHelper\n\n# To compile from project root:\njavac src/com/example/utils/StringHelper.java\n\n# To run (won't work without proper setup):\njava com.example.utils.StringHelper"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Real-World Example"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// File: src/com/myapp/user/User.java\npackage com.myapp.user;\n\npublic class User {\n    private String name;\n    private int age;\n\n    public User(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n\n    public String getName() {\n        return name;\n    }\n}\n"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// File: src/com/myapp/main/App.java\npackage com.myapp.main;\n\nimport com.myapp.user.User;  // Import from another package\n\npublic class App {\n    public static void main(String[] args) {\n        User u = new User(\"Bob\", 30);\n        System.out.println(u.getName());\n    }\n}\n"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Compiling Multi-Package Project"
      },
      {
        "type": "code",
        "language": "bash",
        "code": "# From project root, compile all source files\njavac src/com/myapp/user/User.java src/com/myapp/main/App.java\n\n# Or compile all Java files in src/\njavac src/com/myapp/**/*.java\n\n# To run (classpath must include src/)\njava -cp src com.myapp.main.App\n# Output: Bob"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Default Package (No Package Declaration)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// NO package statement — belongs to default package\npublic class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println(\"Default package\");\n    }\n}\n"
      },
      {
        "type": "callout",
        "variant": "warning",
        "title": "Avoid default package:",
        "text": "It works for tiny programs, but doesn't scale. Always use packages in real code. Default package can't be imported by other packages."
      }
    ]
  },
  {
    "id": "import-statements",
    "title": "9. Import Statements",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "9. Import Statements"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Three Types of Imports"
      },
      {
        "type": "callout",
        "variant": "note",
        "title": "Single-Type Import (Specific)",
        "text": "Import one specific class from a package\n- Recommended: Clear what you're using\n- Example: `import java.util.ArrayList;`"
      },
      {
        "type": "callout",
        "variant": "note",
        "title": "On-Demand Import (Wildcard)",
        "text": "Import all public classes from a package\n- Not recommended: Unclear dependencies, potential name collisions\n- Example: `import java.util.*;`"
      },
      {
        "type": "callout",
        "variant": "note",
        "title": "Static Import",
        "text": "Import static members (methods, constants) from a class\n- Use sparingly: Can reduce readability if overused\n- Example: `import static java.lang.Math.PI;`"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Single-Type Import Example"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.util.ArrayList;      // Specific class\n\npublic class ListDemo {\n    public static void main(String[] args) {\n        ArrayList<String> list = new ArrayList<>();  // Can use short name\n        list.add(\"Apple\");\n        list.add(\"Banana\");\n        System.out.println(list);\n    }\n}\n"
      },
      {
        "type": "code",
        "language": "bash",
        "code": "javac ListDemo.java\njava ListDemo\n# Output: [Apple, Banana]"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "On-Demand Import Example"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.util.*;  // All classes from java.util\n\npublic class MapDemo {\n    public static void main(String[] args) {\n        HashMap<String, Integer> map = new HashMap<>();\n        ArrayList<String> list = new ArrayList<>();\n        // Can use HashMap, ArrayList, etc. without prefixing\n    }\n}\n"
      },
      {
        "type": "callout",
        "variant": "warning",
        "title": "Wildcard imports hide dependencies:",
        "text": "A reader can't easily see what classes you're using. Use single-type imports for clarity (IDEs can auto-add them)."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Static Import Example"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import static java.lang.Math.PI;      // Import constant\nimport static java.lang.Math.sqrt;    // Import method\n\npublic class MathDemo {\n    public static void main(String[] args) {\n        double radius = 5;\n        double area = PI * radius * radius;\n        System.out.println(\"Area: \" + area);\n        System.out.println(\"sqrt(16) = \" + sqrt(16));\n    }\n}\n"
      },
      {
        "type": "code",
        "language": "bash",
        "code": "javac MathDemo.java\njava MathDemo\n# Output:\n# Area: 78.53981633974483\n# sqrt(16) = 4.0"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Auto-Imported Packages"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "**java.lang:** ALWAYS imported automatically (String, System, Math, Object, etc.)",
          "You never write `import java.lang.String;` — it's always available",
          "All other packages require explicit import"
        ]
      },
      {
        "type": "code",
        "language": "java",
        "code": "// String is from java.lang, no import needed\npublic class NoImport {\n    public static void main(String[] args) {\n        String s = \"Hello\";            // String is available\n        System.out.println(s);         // System is available\n        Math.sqrt(16);                 // Math is available\n        // These are java.lang classes — no import required\n    }\n}\n"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Import Statement Rules"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "All imports must come AFTER package declaration (if any)",
          "All imports must come BEFORE class declaration",
          "Import order: typically organize alphabetically (tools do this automatically)",
          "Duplicate imports are ignored",
          "Name collision: If two packages have same class name, use fully qualified name"
        ]
      },
      {
        "type": "code",
        "language": "java",
        "code": "package com.example;\n\nimport java.util.List;         // Single-type imports first\nimport java.util.ArrayList;\nimport java.io.*;              // On-demand if necessary\nimport static java.lang.Math.*;\n\npublic class ImportOrder {\n    // Class definition\n}\n"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Name Collision Example"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Both java.util and java.sql have Date class\nimport java.util.Date;         // Imports java.util.Date\n\npublic class DateDemo {\n    public static void main(String[] args) {\n        Date d1 = new Date();              // Uses java.util.Date\n        java.sql.Date d2 = new java.sql.Date(0);  // Fully qualified for java.sql.Date\n    }\n}\n"
      }
    ]
  },
  {
    "id": "comments",
    "title": "10. Comments &amp; Documentation",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "10. Comments & Documentation"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Single-Line Comments"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// This is a single-line comment\nint x = 5;  // Can appear after code too\n\n// Comments are ignored by compiler\n// Use them to explain WHY, not WHAT\n// (code already shows WHAT)"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Multi-Line Comments"
      },
      {
        "type": "code",
        "language": "java",
        "code": "/* This is a multi-line comment.\n   It can span multiple lines.\n   Useful for longer explanations. */\n\n/*\n * Common style: align asterisks\n * for readability.\n *\n * Can have blank lines inside.\n */"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Javadoc Comments"
      },
      {
        "type": "code",
        "language": "java",
        "code": "/**\n * Calculates the sum of two integers.\n *\n * Javadoc uses /** to start and has special tags.\n * This generates HTML documentation from your code.\n *\n * @param a the first number\n * @param b the second number\n * @return the sum of a and b\n * @since 1.0\n * @author John Doe\n */\npublic static int add(int a, int b) {\n    return a + b;\n}\n"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Common Javadoc Tags"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "`@param` — describes a method parameter",
          "`@return` — describes the return value",
          "`@throws` — describes exceptions the method can throw",
          "`@author` — author name",
          "`@since` — version when added",
          "`@deprecated` — marks class/method as outdated"
        ]
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Complete Javadoc Example"
      },
      {
        "type": "code",
        "language": "java",
        "code": "/**\n * Calculator utility for basic arithmetic.\n *\n * <p>Provides static methods for common operations.\n * All methods accept integer inputs.</p>\n *\n * @author Alice Smith\n * @since 1.0\n * @version 1.2\n */\npublic class Calculator {\n\n    /**\n     * Multiplies two integers.\n     *\n     * @param x the first number\n     * @param y the second number\n     * @return the product x * y\n     * @throws IllegalArgumentException if either number is negative\n     * @since 1.0\n     */\n    public static int multiply(int x, int y) {\n        if (x < 0 || y < 0) {\n            throw new IllegalArgumentException(\"Numbers must be non-negative\");\n        }\n        return x * y;\n    }\n\n    /**\n     * Checks if a number is prime.\n     *\n     * @param n the number to check\n     * @return true if n is prime, false otherwise\n     * @since 1.1\n     */\n    public static boolean isPrime(int n) {\n        if (n < 2) return false;\n        for (int i = 2; i * i <= n; i++) {\n            if (n % i == 0) return false;\n        }\n        return true;\n    }\n}\n"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Generate Javadoc HTML"
      },
      {
        "type": "code",
        "language": "bash",
        "code": "# javadoc reads all .java files and generates HTML documentation\njavadoc Calculator.java\n\n# Output: creates doc/ directory with HTML files\n# Open doc/index.html in browser to see generated docs"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Comment Best Practices"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "**Comments explain WHY, not WHAT:** Code shows what it does, comments explain reasoning",
          "**Avoid obvious comments:** Don't write `x++; // increment x`",
          "**Use Javadoc for public APIs:** Every public class and method needs Javadoc",
          "**Keep comments updated:** Outdated comments are worse than no comments"
        ]
      },
      {
        "type": "callout",
        "variant": "tip",
        "title": "Good comment examples:",
        "text": "`// HACK: Workaround for bug in legacy system`\n- `// Performance optimization: cache result to avoid O(n²) lookup`\n- `// Expected format: YYYY-MM-DD (ISO 8601)`"
      }
    ]
  },
  {
    "id": "jshell",
    "title": "11. JShell — Interactive REPL Java 9+",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "11. JShell — Interactive REPL Java 9+"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "What is JShell?"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "**REPL:** Read-Eval-Print Loop — interactive shell",
          "**No boilerplate:** No need for class or main method",
          "**Instant feedback:** Write expressions and see results immediately",
          "**Learning tool:** Perfect for testing Java syntax and APIs"
        ]
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Launching JShell"
      },
      {
        "type": "code",
        "language": "bash",
        "code": "jshell\n# Welcome to JShell -- Version 21.0.1\n# For an introduction type: /help intro"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Interactive Examples"
      },
      {
        "type": "code",
        "language": "bash",
        "code": "jshell> int x = 5\nx ==> 5\n\njshell> x * 2\n$1 ==> 10\n\njshell> \"Hello\".toUpperCase()\n$2 ==> \"HELLO\"\n\njshell> int[] arr = {1, 2, 3, 4, 5}\narr ==> int[5] { 1, 2, 3, 4, 5 }\n\njshell> for (int num : arr) System.out.println(num);\n1\n2\n3\n4\n5\n\njshell> import java.util.ArrayList;\n\njshell> var list = new ArrayList<String>()\nlist ==> []\n\njshell> list.add(\"Java\")\n$6 ==> true\n\njshell> list\nlist ==> [Java]"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "JShell Commands"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "`/exit` — quit JShell",
          "`/vars` — list all variables you've created",
          "`/methods` — list all methods you've defined",
          "`/list` — show history of entries",
          "`/help` — show help",
          "`/clear` — clear all variables and methods"
        ]
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Testing Code in JShell"
      },
      {
        "type": "code",
        "language": "bash",
        "code": "jshell> /vars\n|    int x = 5\n|    int[] arr = int[5] { 1, 2, 3, 4, 5 }\n|    ArrayList<String> list = [Java]\n\njshell> /list\n   1 : int x = 5;\n   2 : x * 2\n   3 : \"Hello\".toUpperCase()\n   4 : int[] arr = {1, 2, 3, 4, 5};\n   5 : for (int num : arr) System.out.println(num);\n   6 : import java.util.ArrayList;\n   7 : var list = new ArrayList<String>();\n   8 : list.add(\"Java\");\n   9 : list\n\njshell> /exit\n|  Goodbye"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Defining Methods in JShell"
      },
      {
        "type": "code",
        "language": "bash",
        "code": "jshell> int add(int a, int b) {\n   ...>   return a + b;\n   ...> }\n|  created method add(int,int)\n\njshell> add(3, 7)\n$10 ==> 10\n\njshell> /methods\n|    int add(int,int)\n\njshell> String greet(String name) {\n   ...>   return \"Hello, \" + name;\n   ...> }\n|  created method greet(String)\n\njshell> greet(\"Alice\")\n$11 ==> \"Hello, Alice\""
      },
      {
        "type": "callout",
        "variant": "tip",
        "title": "JShell is great for:",
        "text": "Testing library functions, exploring APIs, quick math calculations, learning syntax. Not for building full applications."
      }
    ]
  },
  {
    "id": "single-file-programs",
    "title": "12. Single-File Programs Java 11+",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "12. Single-File Programs Java 11+"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "No Compilation Needed"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "**java command:** Can run .java files directly (no javac needed)",
          "**Automatic compilation:** JVM compiles on the fly",
          "**Use case:** Scripts, one-off programs, small utilities",
          "**Limitation:** Only works if file contains a single top-level public class"
        ]
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Traditional Way (Still Works)"
      },
      {
        "type": "code",
        "language": "bash",
        "code": "# Step 1: Compile\njavac HelloWorld.java\n\n# Step 2: Run\njava HelloWorld"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "New Way (Java 11+)"
      },
      {
        "type": "code",
        "language": "bash",
        "code": "# Single command — no separate compile step\njava HelloWorld.java"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Example: Single-File Script"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// File: Temperature.java\n// Run: java Temperature.java 100 F\n// No separate javac step needed\n\npublic class Temperature {\n    public static void main(String[] args) {\n        if (args.length < 2) {\n            System.out.println(\"Usage: java Temperature.java <value> <C|F>\");\n            return;\n        }\n\n        double temp = Double.parseDouble(args[0]);\n        String unit = args[1].toUpperCase();\n\n        if (unit.equals(\"C\")) {\n            double fahrenheit = (temp * 9/5) + 32;\n            System.out.println(temp + \"°C = \" + fahrenheit + \"°F\");\n        } else if (unit.equals(\"F\")) {\n            double celsius = (temp - 32) * 5/9;\n            System.out.println(temp + \"°F = \" + celsius + \"°C\");\n        } else {\n            System.out.println(\"Unknown unit: \" + unit);\n        }\n    }\n}\n"
      },
      {
        "type": "code",
        "language": "bash",
        "code": "java Temperature.java 32 C\n# Output: 32.0°C = 89.6°F\n\njava Temperature.java 98.6 F\n# Output: 98.6°F = 37.0°C"
      },
      {
        "type": "callout",
        "variant": "note",
        "title": "When to use single-file mode:",
        "text": "Scripts, quick tests, learning. For real projects, use packages and multiple files (traditional compilation model)."
      }
    ]
  },
  {
    "id": "command-line-args",
    "title": "13. Command-Line Arguments",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "13. Command-Line Arguments"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Accessing Arguments via main(String[] args)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "public class Arguments {\n    public static void main(String[] args) {\n        // args is an array of Strings from command line\n\n        System.out.println(\"Total arguments: \" + args.length);\n\n        // Print all arguments\n        for (int i = 0; i < args.length; i++) {\n            System.out.println(\"Argument \" + i + \": \" + args[i]);\n        }\n    }\n}\n"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Running with Arguments"
      },
      {
        "type": "code",
        "language": "bash",
        "code": "javac Arguments.java\njava Arguments hello world 123\n# Output:\n# Total arguments: 3\n# Argument 0: hello\n# Argument 1: world\n# Argument 2: 123"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Using Enhanced for Loop"
      },
      {
        "type": "code",
        "language": "java",
        "code": "public class PrintArgs {\n    public static void main(String[] args) {\n        if (args.length == 0) {\n            System.out.println(\"No arguments provided\");\n            return;\n        }\n\n        System.out.println(\"Arguments:\");\n        for (String arg : args) {\n            System.out.println(\"  - \" + arg);\n        }\n    }\n}\n"
      },
      {
        "type": "code",
        "language": "bash",
        "code": "java PrintArgs apple banana cherry\n# Output:\n# Arguments:\n#   - apple\n#   - banana\n#   - cherry"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Real-World Example: Sum Calculator"
      },
      {
        "type": "code",
        "language": "java",
        "code": "public class Sum {\n    public static void main(String[] args) {\n        if (args.length == 0) {\n            System.out.println(\"Usage: java Sum <number1> <number2> ...\");\n            return;\n        }\n\n        int total = 0;\n\n        for (String arg : args) {\n            try {\n                int num = Integer.parseInt(arg);  // Convert String to int\n                total += num;\n            } catch (NumberFormatException e) {\n                System.out.println(\"Error: '\" + arg + \"' is not a valid integer\");\n            }\n        }\n\n        System.out.println(\"Sum: \" + total);\n    }\n}\n"
      },
      {
        "type": "code",
        "language": "bash",
        "code": "java Sum 10 20 30\n# Output: Sum: 60\n\njava Sum 5 abc 10\n# Output:\n# Error: 'abc' is not a valid integer\n# Sum: 15"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Command-Line with Spaces and Quotes"
      },
      {
        "type": "code",
        "language": "bash",
        "code": "# Single argument with spaces must be quoted\njava PrintArgs \"hello world\" test\n# Output:\n# Arguments:\n#   - hello world\n#   - test\n\n# Without quotes, it's two arguments\njava PrintArgs hello world test\n# Output:\n# Arguments:\n#   - hello\n#   - world\n#   - test"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Example: Greeting Program"
      },
      {
        "type": "code",
        "language": "java",
        "code": "public class Greeting {\n    public static void main(String[] args) {\n        String name = (args.length > 0) ? args[0] : \"World\";\n        String greeting = (args.length > 1) ? args[1] : \"Hello\";\n\n        System.out.println(greeting + \", \" + name + \"!\");\n    }\n}\n"
      },
      {
        "type": "code",
        "language": "bash",
        "code": "java Greeting\n# Output: Hello, World!\n\njava Greeting Alice\n# Output: Hello, Alice!\n\njava Greeting Bob \"Hi there\"\n# Output: Hi there, Bob!"
      },
      {
        "type": "callout",
        "variant": "tip",
        "title": "Best practice:",
        "text": "Always check args.length before accessing array elements to avoid ArrayIndexOutOfBoundsException."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Converting Arguments to Other Types"
      },
      {
        "type": "code",
        "language": "java",
        "code": "public class TypeConversion {\n    public static void main(String[] args) {\n        if (args.length < 2) {\n            System.out.println(\"Usage: java TypeConversion <int> <double>\");\n            return;\n        }\n\n        // String to int\n        int count = Integer.parseInt(args[0]);\n\n        // String to double\n        double price = Double.parseDouble(args[1]);\n\n        // String to boolean\n        boolean flag = Boolean.parseBoolean(args.length > 2 ? args[2] : \"false\");\n\n        System.out.println(\"Count: \" + count + \" (int)\");\n        System.out.println(\"Price: \" + price + \" (double)\");\n        System.out.println(\"Flag: \" + flag + \" (boolean)\");\n        System.out.println(\"Total: \" + (count * price));\n    }\n}\n"
      },
      {
        "type": "code",
        "language": "bash",
        "code": "java TypeConversion 5 9.99 true\n# Output:\n# Count: 5 (int)\n# Price: 9.99 (double)\n# Flag: true (boolean)\n# Total: 49.95"
      }
    ]
  },
  {
    "id": "summary",
    "title": "Summary",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "Summary"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Key Takeaways"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "**JVM makes Java portable:** Compile once (.class), run anywhere",
          "**JIT compilation:** Bytecode → native code during execution = speed + portability",
          "**JDK is what you install:** It includes JRE, JVM, and compiler",
          "**Packages organize code:** Use reverse domain naming (com.example.feature)",
          "**main(String[] args):** Exact signature required as entry point",
          "**Comments matter:** Javadoc generates documentation automatically",
          "**JShell for learning:** Test code instantly without boilerplate",
          "**Single-file programs (Java 11+):** java file.java — no javac needed"
        ]
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Common Errors Checklist"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "`class X is public, should be declared in a file named X.java` → File name must match public class name",
          "`Could not find or load main class` → main signature is wrong, or file/package path is incorrect",
          "`cannot find symbol` → Missing import or typo in class/method name",
          "`incompatible types` → Type mismatch (String assigned to int, etc.)",
          "`No class definition found` → Forgot to compile, or .class file not in classpath"
        ]
      },
      {
        "type": "callout",
        "variant": "important",
        "title": "Next chapter:",
        "text": "Data types, operators, and control flow. You'll write code that actually does something!"
      }
    ]
  }
]
