// Chapter 3 - Structured block data (no raw HTML)
export const sections = [
  {
    "id": "if-else",
    "title": "1. if / else if / else",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "1. if / else if / else"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Syntax"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Single if\nif (condition) {\n    statement;\n}\n\n// if-else\nif (condition) {\n    statement;\n} else {\n    statement;\n}\n\n// if-else if-else chain\nif (condition1) {\n    statement;\n} else if (condition2) {\n    statement;\n} else if (condition3) {\n    statement;\n} else {\n    statement;\n}\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Basic Conditional Execution"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Example 1: Simple if\nint age = 18;\nif (age >= 18) {\n    System.out.println(\"You are an adult\");\n}\n\n// Example 2: if-else\nint score = 45;\nif (score >= 60) {\n    System.out.println(\"Pass\");\n} else {\n    System.out.println(\"Fail\");\n}\n\n// Example 3: if-else if-else chain\nint temperature = 25;\nif (temperature < 0) {\n    System.out.println(\"Freezing\");\n} else if (temperature < 15) {\n    System.out.println(\"Cold\");\n} else if (temperature < 25) {\n    System.out.println(\"Cool\");\n} else {\n    System.out.println(\"Warm\");\n}\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Grade Calculator Example"
      },
      {
        "type": "code",
        "language": "java",
        "code": "public class GradeCalculator {\n    public static void main(String[] args) {\n        int percentage = 87;\n        String grade;\n\n        if (percentage >= 90) {\n            grade = \"A\";\n        } else if (percentage >= 80) {\n            grade = \"B\";\n        } else if (percentage >= 70) {\n            grade = \"C\";\n        } else if (percentage >= 60) {\n            grade = \"D\";\n        } else {\n            grade = \"F\";\n        }\n\n        System.out.println(\"Score: \" + percentage + \", Grade: \" + grade);\n        // Output: Score: 87, Grade: B\n    }\n}\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Single-Statement Shorthand (Not Recommended)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// WRONG — Missing braces makes code error-prone:\nint x = 5;\nif (x > 0)\n    System.out.println(\"Positive\");\n    System.out.println(\"This always runs!\");  // Not part of if!\n\n// CORRECT — Always use braces:\nif (x > 0) {\n    System.out.println(\"Positive\");\n    System.out.println(\"This only runs if x > 0\");\n}\n"
      },
      {
        "type": "callout",
        "variant": "note",
        "title": "Note:",
        "text": "Always use braces even for single statements. Omitting braces leads to subtle bugs when code is modified later."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Nested if Statements"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Check if user can vote and if eligible for special ballot\nint age = 25;\nboolean isRegistered = true;\nString eligibility;\n\nif (age >= 18) {\n    if (isRegistered) {\n        eligibility = \"Can vote\";\n    } else {\n        eligibility = \"Must register first\";\n    }\n} else {\n    eligibility = \"Too young to vote\";\n}\n\nSystem.out.println(eligibility);  // Output: Can vote\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "The Dangling-else Problem"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// AMBIGUOUS — Which if does the else match?\nint x = 5, y = -3;\nif (x > 0)\n    if (y > 0)\n        System.out.println(\"A\");\n    else\n        System.out.println(\"B\");  // This matches the inner if!\n// Output: B (not what you might expect)\n\n// CLEAR — Always use braces:\nif (x > 0) {\n    if (y > 0) {\n        System.out.println(\"A\");\n    } else {\n        System.out.println(\"B\");\n    }\n}\n"
      },
      {
        "type": "callout",
        "variant": "important",
        "title": "Key Takeaway:",
        "text": "An else always matches the nearest if. Always use braces to make intent clear."
      }
    ]
  },
  {
    "id": "switch-traditional",
    "title": "2. switch Statement (Traditional)",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "2. switch Statement (Traditional)"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Syntax"
      },
      {
        "type": "code",
        "language": "java",
        "code": "switch (expression) {\n    case value1:\n        statement;\n        break;\n    case value2:\n        statement;\n        break;\n    default:\n        statement;\n}\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Supported Types"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Primitive: `int`, `byte`, `short`, `char`",
          "Reference: `String` (Java 7+), `enum`"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Basic switch Example"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Day-of-week example\nint day = 3;\nString dayName;\n\nswitch (day) {\n    case 1:\n        dayName = \"Monday\";\n        break;\n    case 2:\n        dayName = \"Tuesday\";\n        break;\n    case 3:\n        dayName = \"Wednesday\";\n        break;\n    case 4:\n        dayName = \"Thursday\";\n        break;\n    case 5:\n        dayName = \"Friday\";\n        break;\n    case 6:\n        dayName = \"Saturday\";\n        break;\n    case 7:\n        dayName = \"Sunday\";\n        break;\n    default:\n        dayName = \"Invalid day\";\n}\n\nSystem.out.println(dayName);  // Output: Wednesday\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "String switch Example"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Command processor\nString command = \"start\";\n\nswitch (command) {\n    case \"start\":\n        System.out.println(\"Starting application...\");\n        break;\n    case \"stop\":\n        System.out.println(\"Stopping application...\");\n        break;\n    case \"restart\":\n        System.out.println(\"Restarting application...\");\n        break;\n    default:\n        System.out.println(\"Unknown command\");\n}\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Intentional Fall-through"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Group multiple cases together\nint month = 12;\nString season;\n\nswitch (month) {\n    case 12:\n    case 1:\n    case 2:\n        season = \"Winter\";\n        break;\n    case 3:\n    case 4:\n    case 5:\n        season = \"Spring\";\n        break;\n    case 6:\n    case 7:\n    case 8:\n        season = \"Summer\";\n        break;\n    case 9:\n    case 10:\n    case 11:\n        season = \"Fall\";\n        break;\n    default:\n        season = \"Invalid month\";\n}\n\nSystem.out.println(season);  // Output: Winter\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "The Fall-through Bug"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// WRONG — Missing break causes unintended fall-through:\nint x = 1;\nswitch (x) {\n    case 1:\n        System.out.println(\"One\");  // No break here!\n    case 2:\n        System.out.println(\"Two\");  // Executes when x == 1!\n        break;\n    case 3:\n        System.out.println(\"Three\");\n        break;\n}\n// Output:\n// One\n// Two  ← Unexpected!\n\n// CORRECT — Add break:\nswitch (x) {\n    case 1:\n        System.out.println(\"One\");\n        break;\n    case 2:\n        System.out.println(\"Two\");\n        break;\n    case 3:\n        System.out.println(\"Three\");\n        break;\n}\n// Output: One\n"
      },
      {
        "type": "callout",
        "variant": "warning",
        "title": "Warning:",
        "text": "Forgetting is a common bug. Without it, execution \"falls through\" to the next case, producing unexpected output."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "enum switch Example"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Define an enum\nenum Status {\n    PENDING, APPROVED, REJECTED, COMPLETED\n}\n\nStatus status = Status.APPROVED;\nString message;\n\nswitch (status) {\n    case PENDING:\n        message = \"Awaiting review\";\n        break;\n    case APPROVED:\n        message = \"Request accepted\";\n        break;\n    case REJECTED:\n        message = \"Request denied\";\n        break;\n    case COMPLETED:\n        message = \"Task finished\";\n        break;\n}\n\nSystem.out.println(message);  // Output: Request accepted\n"
      }
    ]
  },
  {
    "id": "switch-expression",
    "title": "3. switch Expression (Java 14+) Java 14+",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "3. switch Expression (Java 14+) Java 14+"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Syntax"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Arrow syntax (recommended)\nType result = switch (expression) {\n    case value1 -> statement;\n    case value2 -> statement;\n    default -> statement;\n};\n\n// Block syntax with yield\nType result = switch (expression) {\n    case value1 -> {\n        statement;\n        yield value;\n    }\n    default -> value;\n};\n"
      },
      {
        "type": "callout",
        "variant": "note",
        "title": "Note:",
        "text": "Switch expressions introduced in Java 14 eliminate fall-through and require no statements."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Arrow Syntax (Simple Expressions)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Simple arrow syntax — returns a value directly\nint day = 3;\nString dayName = switch (day) {\n    case 1 -> \"Monday\";\n    case 2 -> \"Tuesday\";\n    case 3 -> \"Wednesday\";\n    case 4 -> \"Thursday\";\n    case 5 -> \"Friday\";\n    case 6 -> \"Saturday\";\n    case 7 -> \"Sunday\";\n    default -> \"Invalid day\";\n};\n\nSystem.out.println(dayName);  // Output: Wednesday\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Multiple Labels on One Arrow"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Group multiple cases with comma separation\nint month = 12;\nString season = switch (month) {\n    case 12, 1, 2 -> \"Winter\";\n    case 3, 4, 5 -> \"Spring\";\n    case 6, 7, 8 -> \"Summer\";\n    case 9, 10, 11 -> \"Fall\";\n    default -> \"Invalid month\";\n};\n\nSystem.out.println(season);  // Output: Winter\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Block Syntax with yield"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Use yield when you need multiple statements\nchar grade = 'B';\nint score = switch (grade) {\n    case 'A' -> 100;\n    case 'B' -> 80;\n    case 'C' -> 70;\n    case 'D' -> 60;\n    case 'F' -> {\n        System.out.println(\"Need to improve\");\n        yield 0;\n    }\n    default -> {\n        System.out.println(\"Invalid grade\");\n        yield -1;\n    }\n};\n\nSystem.out.println(\"Score: \" + score);  // Output: Score: 80\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "String switch Expression"
      },
      {
        "type": "code",
        "language": "java",
        "code": "String command = \"start\";\nString result = switch (command) {\n    case \"start\" -> \"Application starting...\";\n    case \"stop\" -> \"Application stopping...\";\n    case \"pause\" -> \"Application paused...\";\n    case \"resume\" -> \"Application resuming...\";\n    default -> \"Unknown command\";\n};\n\nSystem.out.println(result);\n// Output: Application starting...\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Traditional switch vs switch Expression"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// OLD WAY (Traditional switch statement)\nint num = 2;\nString name;\nswitch (num) {\n    case 1:\n        name = \"One\";\n        break;\n    case 2:\n        name = \"Two\";\n        break;\n    case 3:\n        name = \"Three\";\n        break;\n    default:\n        name = \"Other\";\n}\nSystem.out.println(name);\n\n// NEW WAY (Switch expression — cleaner, no break needed)\nString name = switch (num) {\n    case 1 -> \"One\";\n    case 2 -> \"Two\";\n    case 3 -> \"Three\";\n    default -> \"Other\";\n};\nSystem.out.println(name);\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Exhaustiveness Checking"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Switch expressions must cover all possible cases\nenum Color { RED, GREEN, BLUE }\n\n// WRONG — Missing case for BLUE:\n// String hex = switch (color) {  // Compile error!\n//     case RED -> \"#FF0000\";\n//     case GREEN -> \"#00FF00\";\n//     // Missing BLUE and default\n// };\n\n// CORRECT — All cases covered:\nColor color = Color.RED;\nString hex = switch (color) {\n    case RED -> \"#FF0000\";\n    case GREEN -> \"#00FF00\";\n    case BLUE -> \"#0000FF\";\n};\n\nSystem.out.println(hex);  // Output: #FF0000\n"
      },
      {
        "type": "callout",
        "variant": "important",
        "title": "Key Difference:",
        "text": "Switch expressions return a value and prevent fall-through. Use when you need a block with multiple statements."
      }
    ]
  },
  {
    "id": "pattern-matching",
    "title": "4. Pattern Matching in switch (Java 21+) Java 21+",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "4. Pattern Matching in switch (Java 21+) Java 21+"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Syntax"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Type pattern\nObject obj = \"Hello\";\nswitch (obj) {\n    case Integer i -> System.out.println(\"Integer: \" + i);\n    case String s -> System.out.println(\"String: \" + s);\n    case null -> System.out.println(\"null value\");\n    default -> System.out.println(\"Other type\");\n}\n\n// Guarded pattern\nswitch (obj) {\n    case String s when s.length() > 5 -> System.out.println(\"Long\");\n    case String s -> System.out.println(\"Short\");\n    default -> {}\n}\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Type Patterns"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Match on type and automatically cast\nObject value = 42;\n\nString result = switch (value) {\n    case Integer i -> \"Integer: \" + (i * 2);\n    case String s -> \"String: \" + s.toUpperCase();\n    case Double d -> \"Double: \" + (d + 0.5);\n    case Boolean b -> \"Boolean: \" + b;\n    default -> \"Unknown type\";\n};\n\nSystem.out.println(result);  // Output: Integer: 84\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Guarded Patterns with when"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Add conditions to refine pattern matches\nObject obj = \"Hello World\";\n\nString category = switch (obj) {\n    case String s when s.length() > 10 -> \"Long string\";\n    case String s when s.length() > 5 -> \"Medium string\";\n    case String s -> \"Short string\";\n    case Integer i when i > 0 -> \"Positive integer\";\n    case Integer i when i < 0 -> \"Negative integer\";\n    case Integer i -> \"Zero\";\n    default -> \"Other\";\n};\n\nSystem.out.println(category);  // Output: Long string\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "null Handling in switch"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Java 21+ allows null in switch cases\nString input = null;\n\nString output = switch (input) {\n    case null -> \"Input is null\";\n    case \"\" -> \"Input is empty\";\n    case String s when s.length() < 5 -> \"Short input: \" + s;\n    case String s -> \"Input: \" + s;\n};\n\nSystem.out.println(output);  // Output: Input is null\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Pattern Matching with Records"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Record definition\nrecord Point(int x, int y) {}\n\nPoint point = new Point(5, 10);\n\nString description = switch (point) {\n    case Point(0, 0) -> \"Origin\";\n    case Point(int x, 0) -> \"On X-axis at \" + x;\n    case Point(0, int y) -> \"On Y-axis at \" + y;\n    case Point(int x, int y) when x == y -> \"On diagonal at (\" + x + \",\" + y + \")\";\n    case Point(int x, int y) -> \"Point at (\" + x + \",\" + y + \")\";\n};\n\nSystem.out.println(description);  // Output: Point at (5,10)\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Sealed Class Hierarchy with Pattern Matching"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Sealed class hierarchy\nsealed class Animal permits Dog, Cat, Bird {}\nfinal class Dog extends Animal { String breed; }\nfinal class Cat extends Animal { String color; }\nfinal class Bird extends Animal { int wingspan; }\n\nAnimal animal = new Dog();\n\nString info = switch (animal) {\n    case Dog d -> \"Dog breed: \" + d.breed;\n    case Cat c -> \"Cat color: \" + c.color;\n    case Bird b -> \"Bird wingspan: \" + b.wingspan;\n};\n\nSystem.out.println(info);\n"
      },
      {
        "type": "callout",
        "variant": "tip",
        "title": "Tip:",
        "text": "Pattern matching in switch is particularly powerful with sealed classes, as the compiler can verify you've covered all possible subtypes."
      }
    ]
  },
  {
    "id": "for-loop",
    "title": "5. for Loop",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "5. for Loop"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Syntax"
      },
      {
        "type": "code",
        "language": "java",
        "code": "for (initialization; condition; update) {\n    body;\n}\n"
      },
      {
        "type": "diagram",
        "format": "mermaid",
        "content": "flowchart TD\n  START([Start]) --> INIT[\"initialization<br/>e.g. int i = 0\"]\n  INIT --> COND{\"condition?<br/>e.g. i < n\"}\n  COND -->|YES| BODY[\"loop body<br/>execute code\"]\n  BODY --> UPDATE[\"update<br/>e.g. i++\"]\n  UPDATE --> COND\n  COND -->|NO| EXIT([Exit Loop])\n  style START fill:#dbeafe,stroke:#1d4ed8\n  style EXIT fill:#fce7f3,stroke:#9d174d\n  style COND fill:#fef9c3,stroke:#854d0e\n  style BODY fill:#dcfce7,stroke:#166534\n  style UPDATE fill:#f3e8ff,stroke:#6d28d9"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Basic Counter Loop"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Simple counter loop\nfor (int i = 0; i < 5; i++) {\n    System.out.println(\"Count: \" + i);\n}\n// Output:\n// Count: 0\n// Count: 1\n// Count: 2\n// Count: 3\n// Count: 4\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Iterating an Array"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Loop through array elements\nint[] numbers = {10, 20, 30, 40, 50};\n\nfor (int i = 0; i < numbers.length; i++) {\n    System.out.println(\"numbers[\" + i + \"] = \" + numbers[i]);\n}\n// Output:\n// numbers[0] = 10\n// numbers[1] = 20\n// numbers[2] = 30\n// numbers[3] = 40\n// numbers[4] = 50\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Backwards Iteration"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Count down\nfor (int i = 5; i > 0; i--) {\n    System.out.println(i);\n}\n// Output:\n// 5\n// 4\n// 3\n// 2\n// 1\n\n// Backwards through array\nString[] colors = {\"Red\", \"Green\", \"Blue\"};\nfor (int i = colors.length - 1; i >= 0; i--) {\n    System.out.println(colors[i]);\n}\n// Output:\n// Blue\n// Green\n// Red\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Multiple Variables"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Multiple initialization and update expressions\nfor (int i = 0, j = 10; i < j; i++, j--) {\n    System.out.println(\"i=\" + i + \", j=\" + j);\n}\n// Output:\n// i=0, j=10\n// i=1, j=9\n// i=2, j=8\n// i=3, j=7\n// i=4, j=6\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Empty Sections — Infinite Loop"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Infinite loop (all sections empty)\n// for (;;) {\n//     System.out.println(\"Infinite loop\");\n// }\n\n// More practical infinite loop with break:\nfor (int i = 0; ; i++) {\n    if (i == 5) break;\n    System.out.println(i);\n}\n// Output: 0 1 2 3 4\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Common Off-by-One Errors"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// WRONG — Loop runs one too many times:\nint[] arr = {1, 2, 3, 4, 5};\nfor (int i = 0; i <= arr.length; i++) {  // i <= (should be i <)\n    System.out.println(arr[i]);  // ArrayIndexOutOfBoundsException!\n}\n\n// CORRECT:\nfor (int i = 0; i < arr.length; i++) {\n    System.out.println(arr[i]);\n}\n\n// WRONG — Skips first element:\nfor (int i = 1; i < arr.length; i++) {  // Should start at 0\n    System.out.println(arr[i]);\n}\n\n// CORRECT:\nfor (int i = 0; i < arr.length; i++) {\n    System.out.println(arr[i]);\n}\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Practical Example: Multiplication Table"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Print multiplication table for 5\nint num = 5;\nfor (int i = 1; i <= 10; i++) {\n    System.out.println(num + \" × \" + i + \" = \" + (num * i));\n}\n// Output:\n// 5 × 1 = 5\n// 5 × 2 = 10\n// 5 × 3 = 15\n// ...\n// 5 × 10 = 50\n"
      }
    ]
  },
  {
    "id": "while-loop",
    "title": "6. while Loop",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "6. while Loop"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Syntax"
      },
      {
        "type": "code",
        "language": "java",
        "code": "while (condition) {\n    body;\n}\n"
      },
      {
        "type": "diagram",
        "format": "mermaid",
        "content": "flowchart TD\n  START([Start]) --> COND{\"condition?\"}\n  COND -->|YES| BODY[\"loop body<br/>execute code\"]\n  BODY --> COND\n  COND -->|NO| EXIT([Exit Loop])\n  style START fill:#dbeafe,stroke:#1d4ed8\n  style EXIT fill:#fce7f3,stroke:#9d174d\n  style COND fill:#fef9c3,stroke:#854d0e\n  style BODY fill:#dcfce7,stroke:#166534"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Basic while Loop"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Count from 0 to 4\nint i = 0;\nwhile (i < 5) {\n    System.out.println(i);\n    i++;\n}\n// Output: 0 1 2 3 4\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Pre-condition: Body May Never Run"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// If condition is false initially, body never executes\nint count = 10;\nwhile (count < 5) {\n    System.out.println(count);  // Never runs\n}\n\nSystem.out.println(\"Loop skipped\");\n// Output: Loop skipped\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Reading Input Until Sentinel Value"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Read numbers until -1 is entered\njava.util.Scanner scanner = new java.util.Scanner(System.in);\nint num;\nint sum = 0;\n\nSystem.out.println(\"Enter numbers (enter -1 to stop):\");\nwhile ((num = scanner.nextInt()) != -1) {\n    sum += num;\n}\n\nSystem.out.println(\"Sum: \" + sum);\n// Input: 5 10 15 -1\n// Output: Sum: 30\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "User Input Validation"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Repeat until valid input is given\njava.util.Scanner scanner = new java.util.Scanner(System.in);\nint age;\n\nwhile (true) {\n    System.out.print(\"Enter your age (1-120): \");\n    age = scanner.nextInt();\n\n    if (age >= 1 && age <= 120) {\n        break;\n    }\n    System.out.println(\"Invalid age. Try again.\");\n}\n\nSystem.out.println(\"Your age: \" + age);\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "while vs for: When to Use Each"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Use for when iteration count is known\nfor (int i = 0; i < 5; i++) {\n    System.out.println(i);\n}\n\n// Use while when iteration count is unknown\nint value = 100;\nwhile (value > 1) {\n    System.out.println(value);\n    value /= 2;\n}\n// Output: 100 50 25 12 6 3 1\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Infinite while Loop (with break)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Game loop pattern\nint score = 0;\nwhile (true) {\n    score += 10;\n    System.out.println(\"Score: \" + score);\n\n    if (score >= 100) {\n        System.out.println(\"Game Over!\");\n        break;\n    }\n}\n"
      }
    ]
  },
  {
    "id": "do-while-loop",
    "title": "7. do-while Loop",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "7. do-while Loop"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Syntax"
      },
      {
        "type": "code",
        "language": "java",
        "code": "do {\n    body;\n} while (condition);\n"
      },
      {
        "type": "diagram",
        "format": "mermaid",
        "content": "flowchart TD\n  START([Start]) --> BODY[\"loop body<br/>always runs at least once!\"]\n  BODY --> COND{\"condition?\"}\n  COND -->|YES| BODY\n  COND -->|NO| EXIT([Exit Loop])\n  style START fill:#dbeafe,stroke:#1d4ed8\n  style EXIT fill:#fce7f3,stroke:#9d174d\n  style COND fill:#fef9c3,stroke:#854d0e\n  style BODY fill:#dcfce7,stroke:#166534"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Key Difference: Body Always Executes At Least Once"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// while: condition checked first, body may never run\nint x = 10;\nwhile (x < 5) {\n    System.out.println(x);  // Never prints\n}\n\n// do-while: body runs first, then condition checked\nint y = 10;\ndo {\n    System.out.println(y);  // Prints once: 10\n} while (y < 5);\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Menu Loop Example"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Menu system — must show menu at least once\njava.util.Scanner scanner = new java.util.Scanner(System.in);\nint choice;\n\ndo {\n    System.out.println(\"\\\\n=== Menu ===\");\n    System.out.println(\"1. Start\");\n    System.out.println(\"2. Settings\");\n    System.out.println(\"3. Exit\");\n    System.out.print(\"Choose option: \");\n\n    choice = scanner.nextInt();\n\n    switch (choice) {\n        case 1 -> System.out.println(\"Starting...\");\n        case 2 -> System.out.println(\"Opening settings...\");\n        case 3 -> System.out.println(\"Goodbye!\");\n        default -> System.out.println(\"Invalid choice\");\n    }\n} while (choice != 3);\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Input Validation Loop"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Repeat until valid input (guaranteed to ask at least once)\njava.util.Scanner scanner = new java.util.Scanner(System.in);\nint password;\nfinal int CORRECT_PASSWORD = 1234;\n\ndo {\n    System.out.print(\"Enter password: \");\n    password = scanner.nextInt();\n\n    if (password != CORRECT_PASSWORD) {\n        System.out.println(\"Wrong password. Try again.\");\n    }\n} while (password != CORRECT_PASSWORD);\n\nSystem.out.println(\"Access granted!\");\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "do-while vs while Comparison"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// SCENARIO: Print numbers from 1 to 5\nint i = 1;\n\n// Using while\nwhile (i <= 5) {\n    System.out.println(i);\n    i++;\n}\n\n// Using do-while (equivalent for this case)\nint j = 1;\ndo {\n    System.out.println(j);\n    j++;\n} while (j <= 5);\n\n// SCENARIO: Condition false from start\nint count = 10;\n\n// while: never executes\nwhile (count < 5) {\n    System.out.println(count);  // Never runs\n}\n\n// do-while: executes once anyway\nint count2 = 10;\ndo {\n    System.out.println(count2);  // Prints 10 once\n} while (count2 < 5);\n"
      },
      {
        "type": "callout",
        "variant": "important",
        "title": "When to Use do-while:",
        "text": "Menu systems, password prompts, and any case where you must execute code at least once before checking the condition."
      }
    ]
  },
  {
    "id": "enhanced-for",
    "title": "8. Enhanced for Loop (for-each)",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "8. Enhanced for Loop (for-each)"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Syntax"
      },
      {
        "type": "code",
        "language": "java",
        "code": "for (Type element : collection) {\n    body;\n}\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Iterating an Array"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Simple array iteration\nint[] numbers = {10, 20, 30, 40, 50};\n\nfor (int n : numbers) {\n    System.out.println(\"Number: \" + n);\n}\n// Output:\n// Number: 10\n// Number: 20\n// Number: 30\n// Number: 40\n// Number: 50\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Iterating a String Array"
      },
      {
        "type": "code",
        "language": "java",
        "code": "String[] fruits = {\"Apple\", \"Banana\", \"Cherry\", \"Date\"};\n\nfor (String fruit : fruits) {\n    System.out.println(\"Fruit: \" + fruit);\n}\n// Output:\n// Fruit: Apple\n// Fruit: Banana\n// Fruit: Cherry\n// Fruit: Date\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Iterating Collections"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Works with any Iterable\njava.util.List<String> colors = java.util.Arrays.asList(\"Red\", \"Green\", \"Blue\");\n\nfor (String color : colors) {\n    System.out.println(color);\n}\n// Output:\n// Red\n// Green\n// Blue\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Enhanced for vs Regular for"
      },
      {
        "type": "code",
        "language": "java",
        "code": "int[] nums = {1, 2, 3, 4, 5};\n\n// Enhanced for — simpler, no index needed\nfor (int n : nums) {\n    System.out.println(n);\n}\n\n// Regular for — when you need the index\nfor (int i = 0; i < nums.length; i++) {\n    System.out.println(\"Index \" + i + \": \" + nums[i]);\n}\n\n// Regular for — when you need to skip or iterate backwards\nfor (int i = nums.length - 1; i >= 0; i--) {\n    System.out.println(nums[i]);\n}\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Limitation: Cannot Modify Collection During Iteration"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// WRONG — Will throw ConcurrentModificationException:\njava.util.List<String> list = new java.util.ArrayList<>(\n    java.util.Arrays.asList(\"A\", \"B\", \"C\")\n);\n\n// for (String s : list) {\n//     list.remove(s);  // ConcurrentModificationException!\n// }\n\n// CORRECT — Use regular for loop or iterator:\nfor (int i = 0; i < list.size(); i++) {\n    if (list.get(i).equals(\"B\")) {\n        list.remove(i);\n    }\n}\n\nSystem.out.println(list);  // [A, C]\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Cannot Access Index in Enhanced for"
      },
      {
        "type": "code",
        "language": "java",
        "code": "String[] names = {\"Alice\", \"Bob\", \"Charlie\"};\n\n// WRONG — No index variable in enhanced for:\n// for (String name : names) {\n//     System.out.println(index + \": \" + name);  // Index not available\n// }\n\n// Solution 1: Use regular for with index\nfor (int i = 0; i < names.length; i++) {\n    System.out.println(i + \": \" + names[i]);\n}\n\n// Solution 2: Create a wrapper class (advanced)\nfor (int i = 0; i < names.length; i++) {\n    System.out.println(i + \": \" + names[i]);\n}\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Nested Enhanced for"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// 2D array (matrix)\nint[][] matrix = {\n    {1, 2, 3},\n    {4, 5, 6},\n    {7, 8, 9}\n};\n\nfor (int[] row : matrix) {\n    for (int value : row) {\n        System.out.print(value + \" \");\n    }\n    System.out.println();\n}\n// Output:\n// 1 2 3\n// 4 5 6\n// 7 8 9\n"
      },
      {
        "type": "callout",
        "variant": "tip",
        "title": "Tip:",
        "text": "Use enhanced for when you don't need the index. It's cleaner and less error-prone than indexed loops."
      }
    ]
  },
  {
    "id": "break",
    "title": "9. break",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "9. break"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Syntax"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Unlabeled break\nbreak;\n\n// Labeled break\nlabelName:\nfor (...) {\n    break labelName;  // Exits the labeled loop\n}\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Unlabeled break: Exit Innermost Loop"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Exit from for loop when condition met\nfor (int i = 0; i < 10; i++) {\n    if (i == 5) {\n        break;  // Exits the for loop\n    }\n    System.out.println(i);\n}\n// Output: 0 1 2 3 4\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "break in while Loop"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Search for a value\nint[] numbers = {2, 4, 6, 8, 10};\nint target = 6;\nint index = -1;\n\nfor (int i = 0; i < numbers.length; i++) {\n    if (numbers[i] == target) {\n        index = i;\n        break;  // Found it, exit loop\n    }\n}\n\nSystem.out.println(\"Index of \" + target + \": \" + index);\n// Output: Index of 6: 2\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "break in switch Statement"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// (Already covered in switch section — break prevents fall-through)\nint day = 3;\nswitch (day) {\n    case 1:\n        System.out.println(\"Monday\");\n        break;  // Exits switch\n    case 2:\n        System.out.println(\"Tuesday\");\n        break;\n    case 3:\n        System.out.println(\"Wednesday\");\n        break;\n}\n// Output: Wednesday\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Labeled break: Exit Outer Loop"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Label the outer loop\nouterLoop:\nfor (int i = 0; i < 3; i++) {\n    for (int j = 0; j < 3; j++) {\n        if (i == 1 && j == 1) {\n            System.out.println(\"Breaking out of outer loop at (\" + i + \",\" + j + \")\");\n            break outerLoop;  // Exits both loops\n        }\n        System.out.println(\"(\" + i + \",\" + j + \")\");\n    }\n}\n// Output:\n// (0,0)\n// (0,1)\n// (0,2)\n// (1,0)\n// Breaking out of outer loop at (1,1)\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Unlabeled vs Labeled break"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// UNLABELED — Only exits innermost loop\nsearchLoop:\nfor (int i = 0; i < 3; i++) {\n    for (int j = 0; j < 3; j++) {\n        if (i == 1 && j == 1) {\n            break;  // Only exits inner loop\n        }\n        System.out.println(\"Inner: \" + j);\n    }\n    System.out.println(\"Outer: \" + i);\n}\n// Output:\n// Inner: 0\n// Inner: 1\n// Inner: 2\n// Outer: 0\n// Outer: 1  ← Still continues\n// Inner: 0\n// Inner: 1\n// Inner: 2\n// Outer: 2\n\n// LABELED — Exits the labeled loop\nouter:\nfor (int i = 0; i < 3; i++) {\n    for (int j = 0; j < 3; j++) {\n        if (i == 1 && j == 1) {\n            break outer;  // Exits outer loop\n        }\n        System.out.println(\"Inner: \" + j);\n    }\n    System.out.println(\"Outer: \" + i);\n}\n// Output:\n// Inner: 0\n// Inner: 1\n// Inner: 2\n// Outer: 0\n// (Exits completely)\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Real-world Example: Find Prime Factor"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Find the first prime factor of a number\nint num = 24;\nint factor = -1;\n\nfor (int i = 2; i < num; i++) {\n    if (num % i == 0) {\n        factor = i;\n        break;  // Found smallest factor, exit\n    }\n}\n\nSystem.out.println(\"Smallest factor of \" + num + \": \" + factor);\n// Output: Smallest factor of 24: 2\n"
      },
      {
        "type": "callout",
        "variant": "warning",
        "title": "Warning:",
        "text": "Labeled breaks can make code harder to follow. Use them sparingly and prefer refactoring into separate methods."
      }
    ]
  },
  {
    "id": "continue",
    "title": "10. continue",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "10. continue"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Syntax"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Unlabeled continue\ncontinue;\n\n// Labeled continue\nlabelName:\nfor (...) {\n    continue labelName;  // Skips to next iteration of labeled loop\n}\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Basic continue: Skip Current Iteration"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Skip even numbers\nfor (int i = 0; i < 10; i++) {\n    if (i % 2 == 0) {\n        continue;  // Skip to next iteration\n    }\n    System.out.println(i);\n}\n// Output: 1 3 5 7 9\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Filtering with continue"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Process only valid data\nString[] values = {\"10\", \"abc\", \"20\", \"xyz\", \"30\"};\n\nfor (String val : values) {\n    if (!val.matches(\"\\\\\\\\d+\")) {\n        continue;  // Skip non-numeric values\n    }\n    int num = Integer.parseInt(val);\n    System.out.println(\"Number: \" + num);\n}\n// Output:\n// Number: 10\n// Number: 20\n// Number: 30\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "continue vs break"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// break: exits loop completely\nSystem.out.println(\"=== break ===\");\nfor (int i = 0; i < 5; i++) {\n    if (i == 3) break;\n    System.out.println(i);\n}\n// Output: 0 1 2\n\n// continue: skips current iteration, continues loop\nSystem.out.println(\"=== continue ===\");\nfor (int i = 0; i < 5; i++) {\n    if (i == 3) continue;\n    System.out.println(i);\n}\n// Output: 0 1 2 4\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Labeled continue: Skip to Next Iteration of Outer Loop"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Skip when condition met in inner loop\nouterLoop:\nfor (int i = 0; i < 3; i++) {\n    System.out.println(\"Outer: \" + i);\n    for (int j = 0; j < 3; j++) {\n        if (j == 1) {\n            continue outerLoop;  // Skip to next outer iteration\n        }\n        System.out.println(\"  Inner: \" + j);\n    }\n}\n// Output:\n// Outer: 0\n//   Inner: 0\n// Outer: 1\n//   Inner: 0\n// Outer: 2\n//   Inner: 0\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Unlabeled vs Labeled continue"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// UNLABELED — Continues innermost loop\nfor (int i = 0; i < 3; i++) {\n    for (int j = 0; j < 3; j++) {\n        if (j == 1) {\n            continue;  // Only continues inner loop\n        }\n        System.out.println(\"(\" + i + \",\" + j + \")\");\n    }\n}\n// Output:\n// (0,0)\n// (0,2)\n// (1,0)\n// (1,2)\n// (2,0)\n// (2,2)\n\n// LABELED — Continues the labeled loop\nouter:\nfor (int i = 0; i < 3; i++) {\n    for (int j = 0; j < 3; j++) {\n        if (j == 1) {\n            continue outer;  // Skips to next outer iteration\n        }\n        System.out.println(\"(\" + i + \",\" + j + \")\");\n    }\n}\n// Output:\n// (0,0)\n// (1,0)\n// (2,0)\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Real-world Example: Sum Valid Numbers"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Sum numbers, skipping zeros and negatives\nint[] data = {10, 0, -5, 20, 15, 0, -3, 25};\nint sum = 0;\n\nfor (int value : data) {\n    if (value <= 0) {\n        continue;  // Skip invalid values\n    }\n    sum += value;\n}\n\nSystem.out.println(\"Sum: \" + sum);  // Output: Sum: 70\n"
      },
      {
        "type": "callout",
        "variant": "note",
        "title": "Note:",
        "text": "Use to skip unnecessary processing. It keeps code cleaner than deeply nested if statements."
      }
    ]
  },
  {
    "id": "return",
    "title": "11. return",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "11. return"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Syntax"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Return from void method (no value)\nreturn;\n\n// Return value from non-void method\nreturn value;\n\n// Return different values based on condition\nif (condition) {\n    return value1;\n} else {\n    return value2;\n}\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Return from void Method"
      },
      {
        "type": "code",
        "language": "java",
        "code": "public class Example {\n    public static void greet(String name) {\n        if (name == null || name.isEmpty()) {\n            return;  // Exit method early\n        }\n        System.out.println(\"Hello, \" + name);\n    }\n\n    public static void main(String[] args) {\n        greet(\"Alice\");   // Output: Hello, Alice\n        greet(\"\");        // No output (returns early)\n        greet(\"Bob\");     // Output: Hello, Bob\n    }\n}\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Return Value from Method"
      },
      {
        "type": "code",
        "language": "java",
        "code": "public static int add(int a, int b) {\n    return a + b;  // Return result\n}\n\npublic static int max(int x, int y) {\n    if (x > y) {\n        return x;\n    } else {\n        return y;\n    }\n}\n\npublic static void main(String[] args) {\n    System.out.println(add(3, 5));      // Output: 8\n    System.out.println(max(10, 20));    // Output: 20\n}\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Early Return (Guard Clauses)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// BAD: Deep nesting\npublic String validateEmail(String email) {\n    if (email != null) {\n        if (!email.isEmpty()) {\n            if (email.contains(\"@\")) {\n                return \"Valid\";\n            } else {\n                return \"Missing @\";\n            }\n        } else {\n            return \"Empty\";\n        }\n    } else {\n        return \"Null\";\n    }\n}\n\n// GOOD: Guard clauses (early returns)\npublic String validateEmail(String email) {\n    if (email == null) return \"Null\";\n    if (email.isEmpty()) return \"Empty\";\n    if (!email.contains(\"@\")) return \"Missing @\";\n    return \"Valid\";\n}\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Multiple Return Statements"
      },
      {
        "type": "code",
        "language": "java",
        "code": "public static String getGrade(int score) {\n    if (score >= 90) return \"A\";\n    if (score >= 80) return \"B\";\n    if (score >= 70) return \"C\";\n    if (score >= 60) return \"D\";\n    return \"F\";\n}\n\npublic static void main(String[] args) {\n    System.out.println(getGrade(95));  // Output: A\n    System.out.println(getGrade(75));  // Output: C\n    System.out.println(getGrade(50));  // Output: F\n}\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Return in Loop"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Search and return immediately when found\npublic static int findIndex(int[] array, int target) {\n    for (int i = 0; i < array.length; i++) {\n        if (array[i] == target) {\n            return i;  // Exit method and return result\n        }\n    }\n    return -1;  // Not found\n}\n\npublic static void main(String[] args) {\n    int[] numbers = {10, 20, 30, 40, 50};\n    System.out.println(findIndex(numbers, 30));  // Output: 2\n    System.out.println(findIndex(numbers, 99));  // Output: -1\n}\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Return vs System.exit()"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// return: Exits method, returns control to caller\npublic static void method1() {\n    System.out.println(\"Start\");\n    return;\n    // System.out.println(\"Never reached\");\n}\n\n// System.exit(code): Terminates entire JVM\npublic static void main(String[] args) {\n    System.out.println(\"Before exit\");\n    System.exit(0);\n    // System.out.println(\"Never runs\");  — JVM terminated\n}\n"
      },
      {
        "type": "callout",
        "variant": "important",
        "title": "Guard Clauses Pattern:",
        "text": "Use early returns to handle invalid cases first, keeping the happy path clean and readable."
      }
    ]
  },
  {
    "id": "nested-loops",
    "title": "12. Nested Loops with Practical Examples",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "12. Nested Loops with Practical Examples"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Multiplication Table"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Print 10x10 multiplication table\nSystem.out.println(\"Multiplication Table\");\nfor (int i = 1; i <= 10; i++) {\n    for (int j = 1; j <= 10; j++) {\n        System.out.printf(\"%4d\", i * j);\n    }\n    System.out.println();\n}\n// Output (partial):\n//    1   2   3   4   5   6   7   8   9  10\n//    2   4   6   8  10  12  14  16  18  20\n//    3   6   9  12  15  18  21  24  27  30\n//  ...\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Triangle Pattern"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Print a triangle of asterisks\nint rows = 5;\nfor (int i = 1; i <= rows; i++) {\n    for (int j = 0; j < i; j++) {\n        System.out.print(\"* \");\n    }\n    System.out.println();\n}\n// Output:\n// *\n// * *\n// * * *\n// * * * *\n// * * * * *\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Reverse Triangle Pattern"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Print inverted triangle\nint rows = 5;\nfor (int i = rows; i >= 1; i--) {\n    for (int j = 0; j < i; j++) {\n        System.out.print(\"* \");\n    }\n    System.out.println();\n}\n// Output:\n// * * * * *\n// * * * *\n// * * *\n// * *\n// *\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Diamond Pattern"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Print a diamond pattern\nint n = 4;\n\n// Upper half (including middle)\nfor (int i = 1; i <= n; i++) {\n    for (int j = 0; j < n - i; j++) System.out.print(\" \");\n    for (int j = 0; j < 2 * i - 1; j++) System.out.print(\"*\");\n    System.out.println();\n}\n\n// Lower half\nfor (int i = n - 1; i >= 1; i--) {\n    for (int j = 0; j < n - i; j++) System.out.print(\" \");\n    for (int j = 0; j < 2 * i - 1; j++) System.out.print(\"*\");\n    System.out.println();\n}\n// Output:\n//    *\n//   ***\n//  *****\n// *******\n//  *****\n//   ***\n//    *\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "2D Array (Matrix) Processing"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Print a 3x3 matrix\nint[][] matrix = {\n    {1, 2, 3},\n    {4, 5, 6},\n    {7, 8, 9}\n};\n\nSystem.out.println(\"Matrix:\");\nfor (int i = 0; i < matrix.length; i++) {\n    for (int j = 0; j < matrix[i].length; j++) {\n        System.out.print(matrix[i][j] + \" \");\n    }\n    System.out.println();\n}\n// Output:\n// 1 2 3\n// 4 5 6\n// 7 8 9\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Sum All Elements in 2D Array"
      },
      {
        "type": "code",
        "language": "java",
        "code": "int[][] data = {\n    {10, 20, 30},\n    {40, 50, 60},\n    {70, 80, 90}\n};\n\nint total = 0;\nfor (int i = 0; i < data.length; i++) {\n    for (int j = 0; j < data[i].length; j++) {\n        total += data[i][j];\n    }\n}\n\nSystem.out.println(\"Sum of all elements: \" + total);\n// Output: Sum of all elements: 450\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Find Prime Numbers (Sieve of Eratosthenes)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Find all prime numbers up to 50\nint limit = 50;\nboolean[] isPrime = new boolean[limit + 1];\n\n// Initialize all as prime\nfor (int i = 2; i <= limit; i++) {\n    isPrime[i] = true;\n}\n\n// Sieve: mark multiples as not prime\nfor (int i = 2; i * i <= limit; i++) {\n    if (isPrime[i]) {\n        for (int j = i * i; j <= limit; j += i) {\n            isPrime[j] = false;\n        }\n    }\n}\n\n// Print primes\nSystem.out.println(\"Primes up to \" + limit + \":\");\nfor (int i = 2; i <= limit; i++) {\n    if (isPrime[i]) {\n        System.out.print(i + \" \");\n    }\n}\n// Output: 2 3 5 7 11 13 17 19 23 29 31 37 41 43 47\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Labeled break in Nested Loops"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Find first matching pair and exit\nsearchLoop:\nfor (int i = 0; i < 3; i++) {\n    for (int j = 0; j < 3; j++) {\n        int sum = i + j;\n        System.out.println(\"(\" + i + \",\" + j + \") = \" + sum);\n\n        if (sum == 3) {\n            System.out.println(\"Found sum == 3, exiting!\");\n            break searchLoop;  // Exit both loops\n        }\n    }\n}\n// Output:\n// (0,0) = 0\n// (0,1) = 1\n// (0,2) = 2\n// (1,0) = 1\n// (1,1) = 2\n// (1,2) = 3\n// Found sum == 3, exiting!\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Nested while Loops"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Countdown pattern\nint rows = 3;\nint cols = 3;\n\nint row = 0;\nwhile (row < rows) {\n    int col = 0;\n    while (col < cols) {\n        System.out.print((row * cols + col + 1) + \" \");\n        col++;\n    }\n    System.out.println();\n    row++;\n}\n// Output:\n// 1 2 3\n// 4 5 6\n// 7 8 9\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Practical: Find All Factors"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Find all factors of numbers 1-20\nfor (int n = 1; n <= 20; n++) {\n    System.out.print(n + \": \");\n    for (int i = 1; i <= n; i++) {\n        if (n % i == 0) {\n            System.out.print(i + \" \");\n        }\n    }\n    System.out.println();\n}\n// Output:\n// 1: 1\n// 2: 1 2\n// 3: 1 3\n// 4: 1 2 4\n// 5: 1 5\n// ...\n"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Practical: Transpose a Matrix"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Transpose a 3x2 matrix to 2x3\nint[][] original = {\n    {1, 2},\n    {3, 4},\n    {5, 6}\n};\n\nint[][] transposed = new int[2][3];\n\nfor (int i = 0; i < original.length; i++) {\n    for (int j = 0; j < original[i].length; j++) {\n        transposed[j][i] = original[i][j];\n    }\n}\n\n// Print transposed\nfor (int i = 0; i < transposed.length; i++) {\n    for (int j = 0; j < transposed[i].length; j++) {\n        System.out.print(transposed[i][j] + \" \");\n    }\n    System.out.println();\n}\n// Output:\n// 1 3 5\n// 2 4 6\n"
      },
      {
        "type": "callout",
        "variant": "tip",
        "title": "Tip:",
        "text": "When working with nested loops, use meaningful variable names (row, col) and consider extracting logic into separate methods for clarity."
      }
    ]
  },
  {
    "id": "summary",
    "title": "Summary: Control Flow Decision Tree",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "Summary: Control Flow Decision Tree"
      },
      {
        "type": "diagram",
        "format": "mermaid",
        "content": "flowchart TD\n  START[\"Need control flow?\"] --> D1{\"What type?\"}\n  D1 -->|\"Single condition\"| IFELSE[\"if / else\"]\n  D1 -->|\"Multiple on same var\"| SWITCH[\"switch / switch expression\"]\n  D1 -->|\"Loops needed\"| LOOP{\"Known iterations?\"}\n  LOOP -->|\"Yes\"| FOR[\"for / for-each loop\"]\n  LOOP -->|\"No\"| D2{\"Runs at least once?\"}\n  D2 -->|\"Yes\"| DOWHILE[\"do-while\"]\n  D2 -->|\"No\"| WHILE[\"while\"]\n  D1 -->|\"Pattern matching\"| SPAT[\"switch expression<br/>Java 21+ patterns\"]\n  D1 -->|\"Early exit\"| RETURN[\"return\"]\n  style IFELSE fill:#dbeafe,stroke:#1d4ed8\n  style SWITCH fill:#f3e8ff,stroke:#6d28d9\n  style FOR fill:#dcfce7,stroke:#166534\n  style DOWHILE fill:#fef9c3,stroke:#854d0e\n  style WHILE fill:#fce7f3,stroke:#9d174d\n  style SPAT fill:#e0f2fe,stroke:#0369a1\n  style RETURN fill:#fff7ed,stroke:#c2410c"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Quick Reference"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "**if/else:** Execute code based on boolean condition",
          "**switch:** Compare value against multiple cases (use switch expression in Java 14+)",
          "**for:** Loop a known number of times",
          "**while:** Loop while condition is true (body may never run)",
          "**do-while:** Loop while condition is true (body always runs once)",
          "**for-each:** Iterate arrays/collections without index",
          "**break:** Exit loop or switch (use label for outer loop)",
          "**continue:** Skip to next iteration (use label for outer loop)",
          "**return:** Exit method (returns value in non-void methods)"
        ]
      }
    ]
  }
]
