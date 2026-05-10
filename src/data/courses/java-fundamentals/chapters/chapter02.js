// Chapter 2 - Structured block data (no raw HTML)
export const sections = [
  {
    "id": "variables",
    "title": "1. Variables",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "1. Variables"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "Syntax"
      },
      {
        "type": "code",
        "language": "java",
        "code": "Type variableName;                    // declaration\nType variableName = value;            // declaration with initialization\nType var1 = val1, var2 = val2, var3 = val3;  // multiple declarations"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Declaration and Initialization"
      },
      {
        "type": "code",
        "language": "java",
        "code": "int age;                    // declared, uninitialized (not usable yet)\nint age = 25;               // declared and initialized\ndouble salary = 45000.50;   // double initialization\nboolean isActive = true;    // boolean initialization\n\n// Multiple variables of same type\nint x = 10, y = 20, z = 30;\nString name = \"Alice\", city = \"New York\";"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Naming Rules and Conventions"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Must start with letter, underscore, or dollar sign (NOT a digit)",
          "Subsequent chars: letters, digits, underscores, dollar signs",
          "Convention: camelCase for variables and methods (starts lowercase)",
          "Cannot be Java keywords (int, class, for, while, etc.)"
        ]
      },
      {
        "type": "code",
        "language": "java",
        "code": "// VALID names\nint studentAge = 20;\nint _privateThing = 100;\nint $dollarSign = 50;\nint snake_case_allowed = 30;  // works, but not conventional in Java\n\n// INVALID names — these will NOT compile\nint 42invalid;              // ERROR: starts with digit\nint my-variable;            // ERROR: hyphen not allowed\nint class = 5;              // ERROR: 'class' is a keyword\nint my variable;            // ERROR: space not allowed"
      },
      {
        "type": "callout",
        "variant": "note",
        "title": "Note:",
        "text": "Variables must be initialized before use. Using an uninitialized local variable causes a compile error."
      }
    ]
  },
  {
    "id": "primitive-types",
    "title": "2. The 8 Primitive Types",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "2. The 8 Primitive Types"
      },
      {
        "type": "paragraph",
        "text": "Java has 8 built-in primitive types. All other data is made of objects."
      },
      {
        "type": "table",
        "headers": [
          "Type",
          "Size",
          "Min Value",
          "Max Value",
          "Default",
          "Example Literal"
        ],
        "rows": [
          [
            "**byte**",
            "8 bits",
            "-128",
            "127",
            "0",
            "`byte b = 100;`"
          ],
          [
            "**short**",
            "16 bits",
            "-32,768",
            "32,767",
            "0",
            "`short s = 10000;`"
          ],
          [
            "**int**",
            "32 bits",
            "-231",
            "231 - 1",
            "0",
            "`int i = 100000;`"
          ],
          [
            "**long**",
            "64 bits",
            "-263",
            "263 - 1",
            "0L",
            "`long l = 9223372036854775807L;`"
          ],
          [
            "**float**",
            "32 bits",
            "≈ -3.4 × 1038",
            "≈ 3.4 × 1038",
            "0.0f",
            "`float f = 3.14f;`"
          ],
          [
            "**double**",
            "64 bits",
            "≈ -1.7 × 10308",
            "≈ 1.7 × 10308",
            "0.0",
            "`double d = 3.141592653589793;`"
          ],
          [
            "**char**",
            "16 bits",
            "0 (null char)",
            "65,535",
            "' '",
            "`char c = 'A';`"
          ],
          [
            "**boolean**",
            "1 bit (variant)",
            "true or false",
            "false",
            "`boolean flag = true;`"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "All 8 Primitive Types in One Example"
      },
      {
        "type": "code",
        "language": "java",
        "code": "public class PrimitiveTypesDemo {\n    public static void main(String[] args) {\n        // Integers (various sizes)\n        byte b = 127;                                  // 8-bit signed\n        short s = 32767;                              // 16-bit signed\n        int i = 2_147_483_647;                        // 32-bit signed (most common)\n        long l = 9_223_372_036_854_775_807L;          // 64-bit signed (requires L suffix)\n\n        // Floating-point (decimal numbers)\n        float f = 3.14f;                              // 32-bit (requires f suffix)\n        double d = 3.141592653589793;                 // 64-bit (most common for decimals)\n\n        // Character (single Unicode character)\n        char ch = 'A';                                // 16-bit Unicode\n        char num = 65;                                // same as 'A'\n        char emoji = '😀';                            // Unicode supports emojis\n\n        // Boolean (true/false only)\n        boolean isActive = true;\n        boolean isEmpty = false;\n\n        System.out.println(\"byte max: \" + Byte.MAX_VALUE);           // 127\n        System.out.println(\"int max: \" + Integer.MAX_VALUE);         // 2147483647\n        System.out.println(\"long min: \" + Long.MIN_VALUE);           // -9223372036854775808\n        System.out.println(\"char 'A': \" + (int)ch);                  // prints 65\n    }\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Important Notes on Primitive Types"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "**int is the default integer type** — use int unless you need byte/short for memory or long for huge numbers",
          "**double is the default floating-point type** — float requires explicit f suffix",
          "**boolean is NOT convertible to int** — you cannot do (int) true",
          "**char is actually a number** — each character has a numeric Unicode value (0-65535)"
        ]
      },
      {
        "type": "callout",
        "variant": "warning",
        "title": "Warning:",
        "text": "Floating-point arithmetic has precision limitations. Avoid using double/float for money—use BigDecimal instead."
      }
    ]
  },
  {
    "id": "literals",
    "title": "3. Literals",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "3. Literals"
      },
      {
        "type": "paragraph",
        "text": "A literal is a value written directly in code. Different numeric bases and formats are supported."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Integer Literals (Multiple Bases)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Decimal (base 10) — most common\nint decimal = 42;\nint million = 1_000_000;  // underscores for readability\n\n// Hexadecimal (base 16) — prefix 0x\nint hex = 0xFF;            // 255\nint color = 0xFF_FF_00;    // yellow in RGB\n\n// Octal (base 8) — prefix 0\nint octal = 077;           // 63 in decimal (rarely used)\n\n// Binary (base 2) — prefix 0b\nint binary = 0b1010;       // 10 in decimal\nint flags = 0b1111_0000;   // underscores improve readability"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Floating-Point Literals"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Standard decimal notation\ndouble d1 = 3.14;\ndouble d2 = 0.5;\ndouble d3 = 10.0;\n\n// Scientific notation (exponent)\ndouble d4 = 3.14e2;        // 3.14 × 10^2 = 314.0\ndouble d5 = 3.14e-2;       // 3.14 × 10^-2 = 0.0314\ndouble d6 = 1E3;           // 1 × 10^3 = 1000.0\n\n// Float requires 'f' suffix (default is double)\nfloat f1 = 3.14f;          // CORRECT\n// float f2 = 3.14;         // ERROR: loses precision, must use f suffix\n\n// Special floating-point values\ndouble posInf = Double.POSITIVE_INFINITY;\ndouble negInf = Double.NEGATIVE_INFINITY;\ndouble notNum = Double.NaN;"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Character Literals and Escape Sequences"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Character literals (single character in single quotes)\nchar letter = 'A';\nchar digit = '9';\nchar space = ' ';\n\n// Numeric value of character (Unicode code point)\nchar unicode = 'A';   // 'A' (Unicode escape)\nchar tab = '\\\\t';           // tab character\nchar newline = '\\\\n';       // newline character\nchar backslash = '\\\\\\\\';     // single backslash (needs escaping)\nchar quote = '\\\\'';         // single quote (needs escaping)\nchar doubleQuote = '\"';    // double quote (no escape needed in char)\nchar nullChar = '\\\\0';      // null character (0)\nchar carrageReturn = '\\\\r'; // carriage return"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "String Literals (Not Primitive, But Common)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "String name = \"Alice\";\nString message = \"Hello, World!\";\nString empty = \"\";\n\n// String escape sequences (same as char)\nString path = \"C:\\\\\\\\Users\\\\\\\\Name\\\\\\\\file.txt\";\nString json = \"{\\\\\"name\\\\\": \\\\\"Alice\\\\\"}\";\nString multiline = \"Line 1\\\\nLine 2\\\\nLine 3\";\n\n// null literal (represents no object)\nString reference = null;\nint[] array = null;"
      },
      {
        "type": "callout",
        "variant": "tip",
        "title": "Tip:",
        "text": "Use underscores in numeric literals to make large numbers readable: 1_000_000_000 is clearer than 1000000000."
      }
    ]
  },
  {
    "id": "wrapper-classes",
    "title": "4. Wrapper Classes",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "4. Wrapper Classes"
      },
      {
        "type": "paragraph",
        "text": "Every primitive type has a corresponding wrapper class. Wrappers allow primitives to be treated as objects and provide useful utility methods."
      },
      {
        "type": "table",
        "headers": [
          "Primitive",
          "Wrapper Class",
          "Example"
        ],
        "rows": [
          [
            "byte",
            "Byte",
            "`new Byte(127)`"
          ],
          [
            "short",
            "Short",
            "`new Short(1000)`"
          ],
          [
            "int",
            "Integer",
            "`new Integer(42)`"
          ],
          [
            "long",
            "Long",
            "`new Long(999L)`"
          ],
          [
            "float",
            "Float",
            "`new Float(3.14f)`"
          ],
          [
            "double",
            "Double",
            "`new Double(3.14)`"
          ],
          [
            "char",
            "Character",
            "`new Character('A')`"
          ],
          [
            "boolean",
            "Boolean",
            "`new Boolean(true)`"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Useful Wrapper Class Methods"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Parsing strings to numbers\nint num = Integer.parseInt(\"42\");           // String → int\ndouble d = Double.parseDouble(\"3.14\");      // String → double\nboolean flag = Boolean.parseBoolean(\"true\"); // String → boolean\n\n// Constants\nint maxInt = Integer.MAX_VALUE;             // 2147483647\nint minInt = Integer.MIN_VALUE;             // -2147483648\nlong maxLong = Long.MAX_VALUE;              // 9223372036854775807\ndouble maxDouble = Double.MAX_VALUE;\n\n// Utility methods\nint abs = Math.abs(-42);                    // absolute value\nString binary = Integer.toBinaryString(255); // \"11111111\"\nString hex = Integer.toHexString(255);      // \"ff\"\nString octal = Integer.toOctalString(8);    // \"10\"\n\n// Check for special values\nboolean isNaN = Double.isNaN(0.0 / 0.0);    // true\nboolean isInf = Double.isInfinite(1.0 / 0.0); // true\nboolean isFinite = Double.isFinite(3.14);   // true"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Autoboxing and Unboxing"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Autoboxing: primitive → wrapper (automatic)\nInteger wrapped = 42;              // int 42 → Integer(42)\nDouble d = 3.14;                   // double 3.14 → Double(3.14)\n\n// Unboxing: wrapper → primitive (automatic)\nint unwrapped = wrapped;           // Integer(42) → int 42\ndouble dval = d;                   // Double(3.14) → double 3.14\n\n// Useful in collections (which require objects)\nList<Integer> numbers = new ArrayList<>();\nnumbers.add(42);                   // autoboxing: 42 → Integer(42)\nint first = numbers.get(0);        // unboxing: Integer(42) → 42"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "The == Cache Trap with Wrapper Classes"
      },
      {
        "type": "callout",
        "variant": "important",
        "title": "Important:",
        "text": "The Integer class caches values -128 to 127 for performance. Outside this range, == returns false even for equal values!"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// WRONG: comparing wrapper objects with ==\nInteger a = 127;               // cached value\nInteger b = 127;\nSystem.out.println(a == b);    // true (LUCK! both cached)\n\nInteger c = 200;               // NOT cached\nInteger d = 200;\nSystem.out.println(c == d);    // false (WRONG! different objects)\n\n// CORRECT: always use .equals() for value comparison\nSystem.out.println(a.equals(b));  // true\nSystem.out.println(c.equals(d));  // true\n\n// This applies to other wrapper classes too\nDouble x = 1.0;\nDouble y = 1.0;\nSystem.out.println(x == y);       // false (different objects)\nSystem.out.println(x.equals(y));  // true (same value)"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "NullPointerException from Unboxing"
      },
      {
        "type": "code",
        "language": "java",
        "code": "Integer wrapped = null;\n// int value = wrapped;            // ERROR: NullPointerException at runtime!\n\n// Safe pattern: check for null first\nif (wrapped != null) {\n    int value = wrapped;           // safe to unbox\n}\n\n// Or use Optional (Java 8+)\nOptional<Integer> opt = Optional.ofNullable(wrapped);\nint value = opt.orElse(0);         // 0 if null"
      },
      {
        "type": "callout",
        "variant": "warning",
        "title": "Warning:",
        "text": "Unboxing a null wrapper throws NullPointerException. Always check for null before unboxing in production code."
      }
    ]
  },
  {
    "id": "type-casting",
    "title": "5. Type Casting",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "5. Type Casting"
      },
      {
        "type": "paragraph",
        "text": "Converting from one data type to another. Widening is automatic; narrowing requires explicit cast."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Type Widening Hierarchy"
      },
      {
        "type": "diagram",
        "content": "byte → short → int → long → float → double\n              ↑\n             char"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Widening (Implicit, Safe)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Widening: smaller type → larger type (automatic, no data loss)\nbyte b = 100;\nshort s = b;                    // byte → short (automatic)\nint i = s;                      // short → int (automatic)\nlong l = i;                     // int → long (automatic)\nfloat f = l;                    // long → float (automatic)\ndouble d = f;                   // float → double (automatic)\n\n// In one line\ndouble result = 42;             // int → double (implicit widening)\n\n// Character widening\nchar c = 'A';                   // 'A' = 65\nint codePoint = c;             // char → int (automatic), codePoint = 65"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Narrowing (Explicit, Potential Data Loss)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Narrowing: larger type → smaller type (explicit cast required, may lose data)\n\n// WRONG: compile error without cast\n// int i = 3.14;\n\n// CORRECT: explicit cast with (Type)\ndouble d = 3.99;\nint i = (int) d;                // i = 3 (truncated, not rounded!)\n\n// Integer overflow in narrowing\nint big = 130;\nbyte b = (byte) big;            // b = -126 (wraps around due to overflow)\nSystem.out.println(b);          // prints -126\n\n// Explaining the overflow\nint value = 256;\nbyte b = (byte) value;          // 256 in binary: 0x100 → truncated to 0x00 = 0\nSystem.out.println(b);          // prints 0\n\nint value2 = 257;\nbyte b2 = (byte) value2;        // 257 in binary: 0x101 → truncated to 0x01 = 1\nSystem.out.println(b2);         // prints 1"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Casting Primitives in Arithmetic"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Type promotion in mixed-type arithmetic\nint i = 5;\ndouble d = 2.0;\ndouble result = i / d;          // 5 / 2.0 = 2.5 (int promoted to double)\n\n// Common mistake: integer division\nint a = 5;\nint b = 2;\nint divided = a / b;            // 5 / 2 = 2 (integer division, not 2.5)\ndouble correct = (double) a / b; // (double)5 / 2 = 2.5 (correct)"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Casting Objects (String to Number, etc.)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// String to primitive number\nString num = \"42\";\nint i = Integer.parseInt(num);              // \"42\" → 42\nlong l = Long.parseLong(num);               // \"42\" → 42L\ndouble d = Double.parseDouble(\"3.14\");      // \"3.14\" → 3.14\nboolean flag = Boolean.parseBoolean(\"true\"); // \"true\" → true\n\n// Primitive number to String\nint value = 42;\nString str1 = String.valueOf(value);        // 42 → \"42\"\nString str2 = \"\" + value;                   // concatenation trick: 42 → \"42\"\nString str3 = Integer.toString(value);      // 42 → \"42\"\n\n// NumberFormatException on invalid input\ntry {\n    int bad = Integer.parseInt(\"abc\");      // ERROR: not a valid number\n} catch (NumberFormatException e) {\n    System.out.println(\"Invalid number format\");\n}"
      },
      {
        "type": "callout",
        "variant": "warning",
        "title": "Warning:",
        "text": "Casting from double to int truncates (not rounds). Use Math.round() if you need rounding."
      }
    ]
  },
  {
    "id": "var-keyword",
    "title": "6. var — Local Variable Type Inference (Java 10+)",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "6. var — Local Variable Type Inference (Java 10+)"
      },
      {
        "type": "paragraph",
        "text": "The var keyword allows the compiler to infer the type from the initializer. The variable is still statically typed at compile time."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Valid Uses of var"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Type is inferred from the initializer\nvar name = \"Alice\";                    // String (inferred)\nvar count = 42;                        // int (inferred)\nvar salary = 50000.50;                 // double (inferred)\nvar isActive = true;                   // boolean (inferred)\n\n// Useful for reducing verbosity with complex types\nvar list = new ArrayList<String>();   // ArrayList<String> (inferred)\nvar map = new HashMap<String, Integer>(); // HashMap<String, Integer> (inferred)\n\n// Even better readability\nvar students = Arrays.asList(\"Alice\", \"Bob\", \"Charlie\");  // List<String>\nvar uniqueStudents = new HashSet<String>();             // HashSet<String>\n\n// Type is still known (static)\nvar x = 5;\n// x = \"string\";  // ERROR: x is int, cannot assign string"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "INVALID Uses of var (Will Not Compile)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// WRONG: no initializer (compiler can't infer type)\n// var x;\n\n// WRONG: initializer is null (ambiguous type)\n// var y = null;\n\n// WRONG: var only works for local variables, not fields\n// class MyClass {\n//     var field = 5;  // ERROR: var not allowed here\n// }\n\n// WRONG: var not allowed in method parameters or return types\n// public var getData() { ... }  // ERROR\n// public void method(var x) { ... } // ERROR\n\n// WRONG: can't use var with array initializer without explicit type\n// var arr = { 1, 2, 3 };  // ERROR\nvar arr = new int[] { 1, 2, 3 };  // CORRECT (explicit type)"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "When to Use var"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Reduces visual clutter with long generic types",
          "Only for local variables in methods",
          "NOT recommended for public APIs where type clarity is important"
        ]
      }
    ]
  },
  {
    "id": "arithmetic-operators",
    "title": "7. Arithmetic Operators",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "7. Arithmetic Operators"
      },
      {
        "type": "paragraph",
        "text": "Five basic operators: + (addition), - (subtraction), * (multiplication), / (division), % (modulo/remainder)."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Basic Arithmetic"
      },
      {
        "type": "code",
        "language": "java",
        "code": "int a = 10;\nint b = 3;\n\nint add = a + b;           // 13\nint subtract = a - b;      // 7\nint multiply = a * b;      // 30\nint divide = a / b;        // 3 (integer division)\nint remainder = a % b;     // 1 (10 - (3 * 3) = 1)\n\nSystem.out.println(\"10 + 3 = \" + add);        // 13\nSystem.out.println(\"10 - 3 = \" + subtract);   // 7\nSystem.out.println(\"10 * 3 = \" + multiply);   // 30\nSystem.out.println(\"10 / 3 = \" + divide);     // 3\nSystem.out.println(\"10 % 3 = \" + remainder);  // 1"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Integer Division Truncates (Does Not Round)"
      },
      {
        "type": "callout",
        "variant": "warning",
        "title": "Common Mistake:",
        "text": "Integer division truncates toward zero, it does NOT round."
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Integer division: result is truncated\nint result1 = 5 / 2;           // 2 (not 2.5!)\nint result2 = 7 / 2;           // 3 (not 3.5!)\nint result3 = 9 / 4;           // 2 (not 2.25!)\n\n// WRONG: trying to round with integer division\n// int avg = sum / count;      // loses decimal part\n\n// CORRECT: cast to double for true division\ndouble correctAvg = (double) sum / count;  // 2.5\ndouble avg = sum / (double) count;         // also correct (either operand can be double)\n\n// Or use floating-point types from the start\ndouble dividend = 5.0;\ndouble divisor = 2.0;\ndouble result = dividend / divisor;        // 2.5 (true division)"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Modulo with Negative Numbers"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Modulo returns the sign of the dividend (left operand)\nSystem.out.println(7 % 3);       // 1\nSystem.out.println(-7 % 3);      // -1 (negative dividend → negative result)\nSystem.out.println(7 % -3);      // 1 (positive dividend → positive result)\nSystem.out.println(-7 % -3);     // -1 (negative dividend → negative result)\n\n// Practical: check if number is even or odd\nint num = 42;\nif (num % 2 == 0) {\n    System.out.println(\"Even\");\n} else {\n    System.out.println(\"Odd\");\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Arithmetic with Mixed Types (Type Promotion)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// When mixing int and double, int is promoted to double\nint i = 5;\ndouble d = 2.0;\ndouble result = i / d;          // 5 / 2.0 = 2.5 (int promoted to double)\n\n// When mixing all integers, result is integer\nint result2 = 5 / 2;            // 2 (integer division)\n\n// Promotion happens automatically in broader operations\nbyte b = 10;\nshort s = 20;\nint sum = b + s;                // byte + short = int (both promoted to int)"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Overflow and Underflow"
      },
      {
        "type": "callout",
        "variant": "warning",
        "title": "Warning:",
        "text": "Integer overflow wraps around silently. Java does NOT throw an exception."
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Overflow: exceeding max value wraps to min value\nint max = Integer.MAX_VALUE;    // 2147483647\nint overflow = max + 1;         // wraps to -2147483648 (Integer.MIN_VALUE)\nSystem.out.println(overflow);   // prints -2147483648 (SILENT overflow)\n\n// Underflow: going below min value wraps to max value\nint min = Integer.MIN_VALUE;    // -2147483648\nint underflow = min - 1;        // wraps to 2147483647 (Integer.MAX_VALUE)\nSystem.out.println(underflow);  // prints 2147483647 (SILENT underflow)\n\n// Check for overflow before it happens (use long)\nlong safe = (long) Integer.MAX_VALUE + 1;  // 2147483648 (no overflow)"
      }
    ]
  },
  {
    "id": "unary-operators",
    "title": "8. Unary Operators",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "8. Unary Operators"
      },
      {
        "type": "paragraph",
        "text": "Unary operators act on a single operand. Pre and post versions of ++ and -- have different behaviors."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Increment and Decrement Operators"
      },
      {
        "type": "code",
        "language": "java",
        "code": "int x = 5;\n\n// Pre-increment: increment THEN return the value\nint a = ++x;           // x becomes 6, then a gets 6\nSystem.out.println(x);  // 6\nSystem.out.println(a);  // 6\n\n// Post-increment: return the value THEN increment\nint y = 5;\nint b = y++;           // b gets 5, then y becomes 6\nSystem.out.println(y);  // 6\nSystem.out.println(b);  // 5\n\n// Pre-decrement: decrement THEN return the value\nint z = 10;\nint c = --z;           // z becomes 9, then c gets 9\nSystem.out.println(z);  // 9\nSystem.out.println(c);  // 9\n\n// Post-decrement: return the value THEN decrement\nint w = 10;\nint d = w--;           // d gets 10, then w becomes 9\nSystem.out.println(w);  // 9\nSystem.out.println(d);  // 10"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Side Effects in Expressions"
      },
      {
        "type": "code",
        "language": "java",
        "code": "int x = 5;\n\nSystem.out.println(x++);       // prints 5, x becomes 6\nSystem.out.println(x);         // prints 6\n\nSystem.out.println(++x);       // x becomes 7, prints 7\nSystem.out.println(x);         // prints 7\n\n// In assignments and method calls\nint[] arr = {1, 2, 3};\nint i = 0;\nint value = arr[i++];          // value = arr[0], then i becomes 1\nSystem.out.println(i);         // 1\nSystem.out.println(value);     // 1\n\n// Common mistake: using post-increment in loop\nfor (int j = 0; j < 5; j++) {\n    // j++ is executed after body, behavior is expected here\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Unary Plus and Minus"
      },
      {
        "type": "code",
        "language": "java",
        "code": "int a = 5;\nint b = -a;            // -5 (unary minus)\nint c = +a;            // 5 (unary plus, rarely used)\n\ndouble d = 3.14;\ndouble negD = -d;      // -3.14"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Logical NOT Operator"
      },
      {
        "type": "code",
        "language": "java",
        "code": "boolean flag = true;\nboolean inverted = !flag;      // false\n\nboolean isEmpty = false;\nif (!isEmpty) {                // if NOT empty\n    System.out.println(\"Has content\");\n}\n\n// Double negation (avoid, confusing)\nboolean result = !!flag;       // true (but hard to read)"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Bitwise NOT Operator"
      },
      {
        "type": "code",
        "language": "java",
        "code": "int a = 0b0000_1010;           // 10\nint inverted = ~a;             // flips all bits: 0b1111_0101 = -11 (two's complement)\nSystem.out.println(inverted);  // -11\n\n// Formula: ~x = -(x + 1)\nSystem.out.println(~5);        // -6\nSystem.out.println(~(-5));     // 4"
      }
    ]
  },
  {
    "id": "assignment-operators",
    "title": "9. Assignment Operators",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "9. Assignment Operators"
      },
      {
        "type": "paragraph",
        "text": "Assignment operators assign a value to a variable. Compound assignment operators combine an operation with assignment."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Basic and Compound Assignment"
      },
      {
        "type": "code",
        "language": "java",
        "code": "int x = 10;\n\n// Basic assignment\nx = 5;                 // x is now 5\n\n// Arithmetic compound assignments\nx += 3;                // x = x + 3 → 8\nx -= 2;                // x = x - 2 → 6\nx *= 2;                // x = x * 2 → 12\nx /= 3;                // x = x / 3 → 4\nx %= 3;                // x = x % 3 → 1\n\n// Each compound is equivalent to its expanded form\nint y = 10;\ny += 5;                // same as: y = y + 5; (y is now 15)\n\nint z = 10;\nz -= 3;                // same as: z = z - 3; (z is now 7)"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Bitwise Compound Assignment"
      },
      {
        "type": "code",
        "language": "java",
        "code": "int mask = 0xFF;\n\n// AND assignment\nmask &= 0x0F;          // mask = mask & 0x0F\n\n// OR assignment\nint flags = 0b0000;\nflags |= 0b1111;       // flags = flags | 0b1111 → 0b1111\n\n// XOR assignment\nint toggle = 0b1010;\ntoggle ^= 0b1100;      // toggle = toggle ^ 0b1100 → 0b0110"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Shift Compound Assignment"
      },
      {
        "type": "code",
        "language": "java",
        "code": "int value = 5;         // 0b0101\n\nvalue <<= 1;           // value = value << 1 → 10 (0b1010)\nvalue >>= 1;           // value = value >> 1 → 5 (0b0101)\nvalue >>>= 1;          // value = value >>> 1 → 2 (0b0010)"
      },
      {
        "type": "callout",
        "variant": "tip",
        "title": "Tip:",
        "text": "Compound assignments (+=, -=, etc.) are preferred over x = x + y because they're more concise and sometimes more efficient."
      }
    ]
  },
  {
    "id": "comparison-operators",
    "title": "10. Comparison Operators",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "10. Comparison Operators"
      },
      {
        "type": "paragraph",
        "text": "Comparison operators compare two values and return a boolean. WARNING: == on objects compares references, not values."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "All Comparison Operators"
      },
      {
        "type": "code",
        "language": "java",
        "code": "int a = 10;\nint b = 5;\n\nSystem.out.println(a == b);     // false (equality)\nSystem.out.println(a != b);     // true (inequality)\nSystem.out.println(a > b);      // true (greater than)\nSystem.out.println(a >= b);     // true (greater than or equal)\nSystem.out.println(a < b);      // false (less than)\nSystem.out.println(a <= b);     // false (less than or equal)\n\ndouble x = 3.14;\ndouble y = 3.14;\nSystem.out.println(x == y);     // true (same value)"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "The String == Trap (Comparing Objects)"
      },
      {
        "type": "callout",
        "variant": "important",
        "title": "Critical:",
        "text": "== compares object REFERENCES, not values. Use .equals() for String comparison."
      },
      {
        "type": "code",
        "language": "java",
        "code": "// WRONG: using == on String objects\nString s1 = new String(\"Hello\");\nString s2 = new String(\"Hello\");\nSystem.out.println(s1 == s2);        // false (different objects, same content)\n\n// CORRECT: using .equals()\nSystem.out.println(s1.equals(s2));   // true (same content)\n\n// String literals are usually interned (special optimization)\nString s3 = \"Hello\";\nString s4 = \"Hello\";\nSystem.out.println(s3 == s4);        // true (same reference, due to interning)\nSystem.out.println(s3.equals(s4));   // true (same content)\n\n// Case-insensitive comparison\nString s5 = \"HELLO\";\nString s6 = \"hello\";\nSystem.out.println(s5.equals(s6));           // false (case-sensitive)\nSystem.out.println(s5.equalsIgnoreCase(s6)); // true (case-insensitive)"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Comparing null"
      },
      {
        "type": "code",
        "language": "java",
        "code": "String s = null;\n\n// Safe: comparing with null using ==\nif (s == null) {\n    System.out.println(\"s is null\");\n}\n\n// WRONG: calling method on null (NullPointerException)\n// if (s.equals(\"test\")) { ... }  // ERROR: NullPointerException\n\n// CORRECT: check null first\nif (s != null && s.equals(\"test\")) {\n    System.out.println(\"s equals test\");\n}\n\n// Java 8+ Objects.equals() handles null safely\nif (Objects.equals(s, \"test\")) {   // safe even if s is null\n    System.out.println(\"s equals test\");\n}"
      }
    ]
  },
  {
    "id": "logical-operators",
    "title": "11. Logical Operators",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "11. Logical Operators"
      },
      {
        "type": "paragraph",
        "text": "Logical operators combine boolean values. Short-circuit evaluation is critical for safety."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Logical AND (&& ) and OR (||)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "boolean a = true;\nboolean b = false;\n\nSystem.out.println(a && b);     // false (AND requires both true)\nSystem.out.println(a || b);     // true (OR requires at least one true)\nSystem.out.println(!a);         // false (NOT inverts boolean)\nSystem.out.println(!b);         // true"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Short-Circuit Evaluation (Critical!)"
      },
      {
        "type": "callout",
        "variant": "important",
        "title": "Important:",
        "text": "&& and || short-circuit: they stop evaluating once the result is known. This prevents NullPointerException and other errors."
      },
      {
        "type": "code",
        "language": "java",
        "code": "// CORRECT: short-circuit prevents null dereference\nString s = null;\nif (s != null && s.length() > 0) {\n    System.out.println(s);      // safe: never calls s.length() if s is null\n}\n\n// WRONG: single & operator does NOT short-circuit\nif (s != null & s.length() > 0) {\n    System.out.println(s);      // NullPointerException! & evaluates both sides\n}\n\n// Short-circuit with OR: stops at first true\nint x = 5;\nif (x == 5 || expensiveFunction()) {  // expensiveFunction() never called\n    System.out.println(\"x is 5\");\n}\n\n// Both conditions evaluated if first is false\nif (x == 10 || expensiveFunction()) {  // expensiveFunction() IS called\n    System.out.println(\"condition met\");\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Truth Tables"
      },
      {
        "type": "table",
        "headers": [
          "A",
          "B",
          "A && B",
          "A || B",
          "!A"
        ],
        "rows": [
          [
            "true",
            "true",
            "true",
            "true",
            "false"
          ],
          [
            "true",
            "false",
            "false",
            "true",
            "false"
          ],
          [
            "false",
            "true",
            "false",
            "true",
            "true"
          ],
          [
            "false",
            "false",
            "false",
            "false",
            "true"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Non-Short-Circuit Bitwise Operators (& and |)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// & (bitwise AND): same as && for booleans, but does NOT short-circuit\n// | (bitwise OR): same as || for booleans, but does NOT short-circuit\n\n// When used with booleans, avoid & and | (prefer && and ||)\nboolean a = true;\nboolean b = true;\n\nSystem.out.println(a & b);      // true (but didn't short-circuit)\nSystem.out.println(a | b);      // true (but didn't short-circuit)\n\n// & and | are useful for bitwise operations on integers (different purpose)\nint x = 0b1100;\nint y = 0b1010;\nSystem.out.println(Integer.toBinaryString(x & y));  // 0b1000 (bitwise)\nSystem.out.println(Integer.toBinaryString(x | y));  // 0b1110 (bitwise)"
      }
    ]
  },
  {
    "id": "bitwise-operators",
    "title": "12. Bitwise Operators",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "12. Bitwise Operators"
      },
      {
        "type": "paragraph",
        "text": "Bitwise operators manipulate individual bits. Useful for flags, masks, and efficient math."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Bitwise AND (&), OR (|), XOR (^), NOT (~)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "int a = 0b1010;  // 10\nint b = 0b1100;  // 12\n\n// AND: both bits must be 1\nint andResult = a & b;                          // 0b1000 = 8\nSystem.out.println(Integer.toBinaryString(andResult));  // \"1000\"\n\n// OR: at least one bit must be 1\nint orResult = a | b;                           // 0b1110 = 14\nSystem.out.println(Integer.toBinaryString(orResult));   // \"1110\"\n\n// XOR: bits must be different\nint xorResult = a ^ b;                          // 0b0110 = 6\nSystem.out.println(Integer.toBinaryString(xorResult));  // \"110\"\n\n// NOT: flip all bits (two's complement for signed numbers)\nint notA = ~a;                                  // flips all bits\nSystem.out.println(Integer.toBinaryString(notA));      // many bits = negative"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Shift Operators"
      },
      {
        "type": "code",
        "language": "java",
        "code": "int value = 8;  // 0b1000\n\n// Left shift: multiply by 2^n (shift bits left, fill with 0)\nint leftShift = value << 1;           // 0b10000 = 16 (8 * 2)\nSystem.out.println(leftShift);        // 16\n\nint leftShift2 = value << 2;          // 0b100000 = 32 (8 * 4)\nSystem.out.println(leftShift2);       // 32\n\n// Right shift (signed): divide by 2^n, preserve sign bit\nint rightShift = value >> 1;          // 0b0100 = 4 (8 / 2)\nSystem.out.println(rightShift);       // 4\n\n// Right shift with negative number\nint neg = -8;\nint negShift = neg >> 1;              // -4 (sign preserved)\nSystem.out.println(negShift);         // -4\n\n// Unsigned right shift: shift right, fill with 0 (ignores sign)\nint unsignedShift = neg >>> 1;        // huge positive number (sign bit becomes 0)\nSystem.out.println(unsignedShift);    // 2147483644"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Practical Bitwise Uses: Flags and Masks"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Using bits as flags\nint perms = 0;              // no permissions\n\nfinal int READ = 1;         // 0b001\nfinal int WRITE = 2;        // 0b010\nfinal int EXECUTE = 4;      // 0b100\n\n// Set flags with OR\nperms |= READ;              // add READ\nperms |= WRITE;             // add WRITE\nSystem.out.println(perms);  // 3 (0b011)\n\n// Check flags with AND\nif ((perms & READ) != 0) {\n    System.out.println(\"Can read\");\n}\nif ((perms & EXECUTE) != 0) {\n    System.out.println(\"Can execute\");\n} else {\n    System.out.println(\"Cannot execute\");  // prints this\n}\n\n// Remove flag with AND + NOT\nperms &= ~WRITE;            // remove WRITE\nSystem.out.println(perms);  // 1 (0b001 = READ only)"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Fast Multiply and Divide"
      },
      {
        "type": "code",
        "language": "java",
        "code": "int x = 10;\n\n// Left shift is faster than multiplication\nint double_x = x << 1;      // x * 2 = 20\nint quad_x = x << 2;        // x * 4 = 40\n\n// Right shift is faster than division\nint half_x = x >> 1;        // x / 2 = 5\nint quarter_x = x >> 2;     // x / 4 = 2"
      }
    ]
  },
  {
    "id": "ternary-operator",
    "title": "13. Ternary Operator",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "13. Ternary Operator"
      },
      {
        "type": "paragraph",
        "text": "The ternary operator (? :) is the only three-operand operator. It evaluates a condition and returns one of two values."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Basic Ternary Syntax"
      },
      {
        "type": "code",
        "language": "java",
        "code": "condition ? valueIfTrue : valueIfFalse"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Simple Examples"
      },
      {
        "type": "code",
        "language": "java",
        "code": "int age = 25;\n\n// Simple ternary\nString status = (age >= 18) ? \"adult\" : \"minor\";\nSystem.out.println(status);  // \"adult\"\n\n// In method calls\nSystem.out.println((age > 30) ? \"older\" : \"younger\");\n\n// Assigning numeric values\nint score = 85;\nint grade = (score >= 90) ? 10 : (score >= 80) ? 9 : 8;\nSystem.out.println(grade);  // 9"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Nested Ternary (Use Cautiously)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "int hours = 15;\n\n// Nested ternary (readable)\nString timeOfDay = (hours < 12) ? \"morning\"\n                 : (hours < 18) ? \"afternoon\"\n                 : \"evening\";\nSystem.out.println(timeOfDay);  // \"afternoon\"\n\n// Same logic with if-else is often clearer\nString timeOfDay2;\nif (hours < 12) {\n    timeOfDay2 = \"morning\";\n} else if (hours < 18) {\n    timeOfDay2 = \"afternoon\";\n} else {\n    timeOfDay2 = \"evening\";\n}\n\n// WRONG: deeply nested ternary is hard to read\n// int result = a ? b : c ? d : e ? f : g;  // avoid!"
      },
      {
        "type": "callout",
        "variant": "tip",
        "title": "Tip:",
        "text": "Use ternary for simple conditions. For complex logic, prefer if-else statements."
      }
    ]
  },
  {
    "id": "instanceof-operator",
    "title": "14. instanceof Operator",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "14. instanceof Operator"
      },
      {
        "type": "paragraph",
        "text": "The instanceof operator tests whether an object is an instance of a class or interface."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Basic instanceof Usage"
      },
      {
        "type": "code",
        "language": "java",
        "code": "Object obj = \"Hello\";\n\n// Check type\nif (obj instanceof String) {\n    String str = (String) obj;           // explicit cast\n    System.out.println(str.toUpperCase());\n}\n\n// Works with inheritance\nclass Animal { }\nclass Dog extends Animal { }\n\nDog dog = new Dog();\nSystem.out.println(dog instanceof Dog);     // true\nSystem.out.println(dog instanceof Animal);  // true (subclass is instance of superclass)"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Pattern Matching with instanceof (Java 16+)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Old way: cast explicitly\nObject obj = \"Hello\";\nif (obj instanceof String) {\n    String s = (String) obj;\n    System.out.println(s.length());\n}\n\n// New way: pattern variable (Java 16+)\nif (obj instanceof String s) {         // s is already cast to String\n    System.out.println(s.length());    // can use s directly\n}\n\n// Pattern with complex types\nif (obj instanceof List list) {\n    System.out.println(\"List size: \" + list.size());\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Common Pattern: Type Checking and Casting"
      },
      {
        "type": "code",
        "language": "java",
        "code": "void printLength(Object obj) {\n    if (obj instanceof String) {\n        System.out.println(\"String length: \" + ((String) obj).length());\n    } else if (obj instanceof int[]) {\n        System.out.println(\"Array length: \" + ((int[]) obj).length);\n    } else {\n        System.out.println(\"Unknown type\");\n    }\n}"
      }
    ]
  },
  {
    "id": "operator-precedence",
    "title": "15. Operator Precedence",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "15. Operator Precedence"
      },
      {
        "type": "paragraph",
        "text": "Operators are evaluated in a specific order. Higher precedence operators are evaluated first. Use parentheses when in doubt."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Complete Operator Precedence Table (Highest to Lowest)"
      },
      {
        "type": "table",
        "headers": [
          "Precedence",
          "Operators",
          "Associativity",
          "Example"
        ],
        "rows": [
          [
            "1 (highest)",
            "() [] . ++ --",
            "Left to right",
            "`(a + b)`, `arr[0]`, `obj.field`"
          ],
          [
            "2",
            "! ~ ++ -- + -",
            "Right to left",
            "`!true`, `~x`, `-5`"
          ],
          [
            "3",
            "* / %",
            "Left to right",
            "`10 * 2 / 5`"
          ],
          [
            "4",
            "+ -",
            "Left to right",
            "`5 + 3 - 2`"
          ],
          [
            "5",
            "<< >> >>>",
            "Left to right",
            "`x << 2`, `y >> 1`"
          ],
          [
            "6",
            "< <= > >= instanceof",
            "Left to right",
            "`x < 10`, `obj instanceof String`"
          ],
          [
            "7",
            "== !=",
            "Left to right",
            "`a == b`, `x != y`"
          ],
          [
            "8",
            "& (bitwise AND)",
            "Left to right",
            "`x & 0xFF`"
          ],
          [
            "9",
            "^ (XOR)",
            "Left to right",
            "`a ^ b`"
          ],
          [
            "10",
            "| (bitwise OR)",
            "Left to right",
            "`flags | 0x01`"
          ],
          [
            "11",
            "&& (logical AND)",
            "Left to right",
            "`a && b`"
          ],
          [
            "12",
            "|| (logical OR)",
            "Left to right",
            "`a || b`"
          ],
          [
            "13",
            "? : (ternary)",
            "Right to left",
            "`condition ? true_val : false_val`"
          ],
          [
            "14",
            "= += -= *= /= %= &= |= ^= <<= >>= >>>=",
            "Right to left",
            "`x = 5`, `x += 10`"
          ],
          [
            "15 (lowest)",
            ";",
            "Left to right",
            "`statement;`"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Precedence Examples (Without Parentheses = Confusing)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// WRONG: operator precedence causes unexpected result\nint result1 = 2 + 3 * 4;       // 14 (not 20) — * before +\nSystem.out.println(result1);   // prints 14\n\n// CORRECT: use parentheses for clarity\nint result2 = (2 + 3) * 4;     // 20 (addition before multiplication)\nSystem.out.println(result2);   // prints 20\n\n// More examples\nint a = 5, b = 3, c = 2;\nSystem.out.println(a + b * c);         // 11 (3*2=6, then 5+6=11)\nSystem.out.println((a + b) * c);       // 16 (5+3=8, then 8*2=16)\n\n// Boolean logic precedence\nboolean x = true, y = false, z = true;\nSystem.out.println(x || y && z);       // true (&& before ||, so y && z = false, then true || false = true)\nSystem.out.println((x || y) && z);     // true (x || y = true, then true && z = true)"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Mixing Logical and Bitwise Operators (Easy to Confuse)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "int a = 5, b = 3;\n\n// Bitwise (single &, |, ^)\nSystem.out.println(a & b);     // 1 (0101 & 0011 = 0001)\nSystem.out.println(a | b);     // 7 (0101 | 0011 = 0111)\n\n// Logical (double &&, ||)\nSystem.out.println((a > 0) && (b > 0));  // true\nSystem.out.println((a > 0) || (b > 0));  // true\n\n// WRONG: confusing bitwise with logical\n// boolean result = a & b;     // type error: & expects int, not boolean\n// boolean result = (a > 0) & (b > 0);  // compiles but doesn't short-circuit!"
      }
    ]
  },
  {
    "id": "string-concatenation",
    "title": "16. String Concatenation with +",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "16. String Concatenation with +"
      },
      {
        "type": "paragraph",
        "text": "The + operator concatenates strings. When mixing strings and primitives, type coercion rules apply."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Basic String Concatenation"
      },
      {
        "type": "code",
        "language": "java",
        "code": "String greeting = \"Hello\" + \" \" + \"World\";\nSystem.out.println(greeting);  // \"Hello World\"\n\nString name = \"Alice\";\nString message = \"Welcome, \" + name;\nSystem.out.println(message);   // \"Welcome, Alice\""
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Concatenating Primitives (Implicit Conversion to String)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "System.out.println(\"The answer is: \" + 42);        // \"The answer is: 42\"\nSystem.out.println(\"Pi is: \" + 3.14);              // \"Pi is: 3.14\"\nSystem.out.println(\"Flag: \" + true);               // \"Flag: true\"\nSystem.out.println(\"Char: \" + 'A');                // \"Char: A\"\n\n// Multiple values concatenated left to right\nSystem.out.println(\"Value: \" + 10 + \" dollars\");   // \"Value: 10 dollars\""
      },
      {
        "type": "heading",
        "level": 3,
        "text": "The Concatenation Order Trap"
      },
      {
        "type": "callout",
        "variant": "important",
        "title": "Critical:",
        "text": "+ is left-to-right associative. String context determines if + means concatenation or arithmetic."
      },
      {
        "type": "code",
        "language": "java",
        "code": "// WRONG: arithmetic happens first, then concatenation\nSystem.out.println(\"Result: \" + 1 + 2);    // \"Result: 12\" (not \"Result: 3\")\n// Explanation: \"Result: \" + 1 = \"Result: 1\", then \"Result: 1\" + 2 = \"Result: 12\"\n\n// CORRECT: use parentheses to do arithmetic first\nSystem.out.println(\"Result: \" + (1 + 2));  // \"Result: 3\"\n\n// Another example\nSystem.out.println(1 + 2 + \" items\");      // \"3 items\" (1 + 2 = 3 first, then string)\nSystem.out.println(\"Item \" + 1 + 2);       // \"Item 12\" (string context from left)\n\n// Complex example\nint a = 5, b = 3;\nSystem.out.println(\"a + b = \" + a + b);           // \"a + b = 53\" (WRONG)\nSystem.out.println(\"a + b = \" + (a + b));        // \"a + b = 8\" (CORRECT)"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Alternatives to + Concatenation"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Using String.format (readable, similar to printf)\nString formatted = String.format(\"Value: %d, Name: %s\", 42, \"Alice\");\nSystem.out.println(formatted);  // \"Value: 42, Name: Alice\"\n\n// Using StringBuilder (efficient for many concatenations)\nStringBuilder sb = new StringBuilder();\nsb.append(\"Hello\");\nsb.append(\" \");\nsb.append(\"World\");\nString result = sb.toString();\nSystem.out.println(result);     // \"Hello World\"\n\n// Using String.join (clean for joining multiple strings)\nString joined = String.join(\"-\", \"one\", \"two\", \"three\");\nSystem.out.println(joined);     // \"one-two-three\""
      },
      {
        "type": "callout",
        "variant": "note",
        "title": "Note:",
        "text": "For performance-critical code with many concatenations, use StringBuilder. The + operator creates intermediate String objects."
      }
    ]
  }
]
