// Chapter 6 - Structured block data (no raw HTML)
export const sections = [
  {
    "id": "string",
    "title": "6.1 String Class — Immutability &amp; String Pool",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "6.1 String Class — Immutability & String Pool"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Immutability: Every modification creates a new String object"
      },
      {
        "type": "code",
        "language": "java",
        "code": "String original = \"Hello\";\nString modified = original.toUpperCase();  // creates new String \"HELLO\"\nSystem.out.println(original);              // still \"Hello\"\nSystem.out.println(modified);              // \"HELLO\"\n\n// Reassignment vs mutation:\nString s = \"Java\";\ns = s + \" 8\";                              // creates new String, reassigns reference\nSystem.out.println(s);                     // \"Java 8\"\n// No method on String modifies the object itself"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "String Pool: String literals are interned"
      },
      {
        "type": "code",
        "language": "java",
        "code": "String a = \"hello\";        // stored in string pool\nString b = \"hello\";        // retrieves same object from pool\nString c = new String(\"hello\");  // creates new object on heap\n\nSystem.out.println(a == b);       // true (same object in pool)\nSystem.out.println(a == c);       // false (c is on heap)\nSystem.out.println(a.equals(c));  // true (same content)\n\n// WRONG: comparing with ==\nif (userInput == \"admin\") { }  // fails when userInput is new String\n\n// CORRECT: comparing with .equals()\nif (userInput.equals(\"admin\")) { }  // works always"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "The == vs .equals() trap"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// WRONG: uses == (compares references)\nString input = new String(\"hello\");\nif (input == \"hello\") {\n    System.out.println(\"Match\");  // NOT printed (different objects)\n}\n\n// CORRECT: uses .equals() (compares values)\nString input = new String(\"hello\");\nif (input.equals(\"hello\")) {\n    System.out.println(\"Match\");  // printed (values are equal)\n}\n\n// Intern for forced pool lookup:\nString x = new String(\"hello\").intern();\nString y = \"hello\";\nSystem.out.println(x == y);  // true (both now from pool)"
      }
    ]
  },
  {
    "id": "string-methods",
    "title": "6.2 String Methods Reference",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "6.2 String Methods Reference"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "length(), isEmpty(), isBlank()"
      },
      {
        "type": "code",
        "language": "java",
        "code": "String s = \"Hello\";\nSystem.out.println(s.length());     // 5\nSystem.out.println(s.isEmpty());    // false\nSystem.out.println(\"\".isEmpty());   // true\n\nString blank = \"   \\\\t\\\\n\";\nSystem.out.println(blank.isEmpty());  // false (contains whitespace)\nSystem.out.println(blank.isBlank());  // true (Java 11+, ignores whitespace)"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "charAt(int), indexOf(String), lastIndexOf(String)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "String s = \"banana\";\nSystem.out.println(s.charAt(0));           // 'b'\nSystem.out.println(s.charAt(2));           // 'n'\n\nSystem.out.println(s.indexOf('a'));        // 1 (first occurrence)\nSystem.out.println(s.lastIndexOf('a'));    // 5 (last occurrence)\nSystem.out.println(s.indexOf(\"nan\"));      // 1 (substring)\nSystem.out.println(s.indexOf('x'));        // -1 (not found)\n\nSystem.out.println(s.indexOf('a', 2));     // 3 (start searching from index 2)\nSystem.out.println(s.lastIndexOf('a', 4)); // 3 (search backwards from index 4)"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "substring(int), substring(int, int)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "String s = \"Java Programming\";\nSystem.out.println(s.substring(0));        // \"Java Programming\"\nSystem.out.println(s.substring(5));        // \"Programming\" (from index 5 to end)\nSystem.out.println(s.substring(0, 4));     // \"Java\" (0 inclusive, 4 exclusive)\nSystem.out.println(s.substring(5, 9));     // \"Prog\"\n\n// Common pattern: get file extension\nString file = \"document.pdf\";\nString ext = file.substring(file.indexOf(\".\") + 1);  // \"pdf\""
      },
      {
        "type": "heading",
        "level": 3,
        "text": "contains(CharSequence), startsWith(String), endsWith(String)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "String s = \"Hello World\";\nSystem.out.println(s.contains(\"World\"));   // true\nSystem.out.println(s.contains(\"xyz\"));     // false\n\nSystem.out.println(s.startsWith(\"Hello\")); // true\nSystem.out.println(s.startsWith(\"World\")); // false\nSystem.out.println(s.startsWith(\"lo W\", 3)); // true (from index 3)\n\nSystem.out.println(s.endsWith(\"World\"));   // true\nSystem.out.println(s.endsWith(\"o\"));       // true\n\n// URL validation pattern:\nString url = \"https://example.com\";\nif (url.startsWith(\"https://\") && url.endsWith(\".com\")) {\n    System.out.println(\"Valid URL\");\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "equals(Object), equalsIgnoreCase(String), compareTo(String)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "String s1 = \"Hello\";\nString s2 = \"Hello\";\nString s3 = \"hello\";\n\nSystem.out.println(s1.equals(s2));            // true\nSystem.out.println(s1.equals(s3));            // false (case sensitive)\nSystem.out.println(s1.equalsIgnoreCase(s3));  // true\n\n// compareTo returns: 0 if equal, negative if s1 < s2, positive if s1 > s2\nSystem.out.println(\"apple\".compareTo(\"banana\"));   // negative\nSystem.out.println(\"zebra\".compareTo(\"apple\"));    // positive\nSystem.out.println(\"same\".compareTo(\"same\"));      // 0\n\n// Sorting strings (uses compareTo):\nList<String> fruits = new ArrayList<>(Arrays.asList(\"banana\", \"apple\", \"cherry\"));\nCollections.sort(fruits);  // [apple, banana, cherry]\nSystem.out.println(fruits.get(0).compareTo(fruits.get(1))); // negative"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "replace(char, char), replace(CharSequence, CharSequence)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "String s = \"Hello World\";\nSystem.out.println(s.replace('l', 'L'));    // \"HeLLo WorLd\"\nSystem.out.println(s.replace(\"World\", \"Java\"));  // \"Hello Java\"\nSystem.out.println(s.replace(\"l\", \"LL\"));   // \"HeLLLLo WorLLd\"\n\n// Replace multiple occurrences:\nString csv = \"apple,banana,cherry\";\nSystem.out.println(csv.replace(\",\", \" | \")); // \"apple | banana | cherry\"\n\n// Important: replace() with literals only\nSystem.out.println(s.replace(\"World\", \"Galaxy\"));  // one replacement"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "replaceAll(regex, String), replaceFirst(regex, String)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "String s = \"Hello123World456\";\nSystem.out.println(s.replaceAll(\"\\\\\\\\d\", \"X\"));  // \"HelloXXXWorldXXX\"\nSystem.out.println(s.replaceFirst(\"\\\\\\\\d+\", \"NUM\"));  // \"HelloNUMWorld456\"\n\n// Remove all whitespace:\nString messy = \"H e l l o   W o r l d\";\nSystem.out.println(messy.replaceAll(\"\\\\\\\\s\", \"\"));  // \"HelloWorld\"\n\n// Replace multiple spaces with single space:\nString text = \"This  is   a    test\";\nSystem.out.println(text.replaceAll(\" +\", \" \"));  // \"This is a test\"\n\n// Remove leading zeros:\nString number = \"00123\";\nSystem.out.println(number.replaceFirst(\"^0+\", \"\"));  // \"123\""
      },
      {
        "type": "heading",
        "level": 3,
        "text": "split(String), split(String, int)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "String csv = \"apple,banana,cherry,date\";\nString[] items = csv.split(\",\");\n// Result: [\"apple\", \"banana\", \"cherry\", \"date\"]\n\nfor (String item : items) {\n    System.out.println(item);\n}\n\n// With limit:\nString[] limited = csv.split(\",\", 2);\n// Result: [\"apple\", \"banana,cherry,date\"]\n\n// Regex splitting:\nString path = \"C:\\\\\\\\Users\\\\\\\\Desktop\\\\\\\\file.txt\";\nString[] parts = path.split(\"\\\\\\\\\\\\\\\\\");  // escape backslash\n// Result: [\"C:\", \"Users\", \"Desktop\", \"file.txt\"]\n\n// Split by whitespace (any amount):\nString sentence = \"The   quick\\\\tbrown\\\\nfox\";\nString[] words = sentence.split(\"\\\\\\\\s+\");\n// Result: [\"The\", \"quick\", \"brown\", \"fox\"]"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "trim() vs strip() (Java 11+)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "String s = \"  Hello  \\\\n\";\n\n// trim() removes only ASCII whitespace (space, tab, newline, etc.)\nSystem.out.println(\"'\" + s.trim() + \"'\");    // 'Hello'\n\n// strip() (Java 11+) removes Unicode whitespace\nString unicode = \"   Hello   \";    // Unicode spaces\nSystem.out.println(\"'\" + unicode.trim() + \"'\");    // may leave Unicode spaces\nSystem.out.println(\"'\" + unicode.strip() + \"'\");   // 'Hello' (removes Unicode)\n\n// stripLeading() and stripTrailing():\nSystem.out.println(\"'\" + s.stripLeading() + \"'\");   // 'Hello  \\\\n'\nSystem.out.println(\"'\" + s.stripTrailing() + \"'\");  // '  Hello'"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "toUpperCase(), toLowerCase()"
      },
      {
        "type": "code",
        "language": "java",
        "code": "String s = \"Hello World\";\nSystem.out.println(s.toUpperCase());     // \"HELLO WORLD\"\nSystem.out.println(s.toLowerCase());     // \"hello world\"\n\n// Case-insensitive comparison:\nString input = \"JAVA\";\nif (input.toLowerCase().equals(\"java\")) {\n    System.out.println(\"Match\");\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "toCharArray(), chars() stream"
      },
      {
        "type": "code",
        "language": "java",
        "code": "String s = \"Hello\";\n\n// toCharArray() — traditional array:\nchar[] chars = s.toCharArray();\nSystem.out.println(chars[0]);     // 'H'\n\n// Stream-based (Java 8+):\ns.chars().forEach(c -> System.out.println((char)c));\n// Output: H, e, l, l, o\n\n// Convert to stream of Character (not primitive int):\ns.chars()\n    .mapToObj(c -> (char)c)\n    .filter(c -> Character.isVowel(c))\n    .forEach(System.out::println);\n// Output: e, o"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "format(String, args), formatted(args) (Java 15+)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Static method format():\nString msg = String.format(\"Hello %s, you scored %d%%\", \"Alice\", 95);\nSystem.out.println(msg);  // \"Hello Alice, you scored 95%\"\n\n// Common format specifiers:\nString formatted = String.format(\n    \"Name: %s, Age: %d, Score: %.2f\",\n    \"Bob\",\n    25,\n    87.654\n);\nSystem.out.println(formatted);  // \"Name: Bob, Age: 25, Score: 87.65\"\n\n// Instance method formatted() (Java 15+):\nString template = \"User: %s, Points: %d\".formatted(\"Charlie\", 150);\nSystem.out.println(template);  // \"User: Charlie, Points: 150\"\n\n// Alignment and padding:\nString padded = String.format(\"|%10s|\", \"hello\");  // \"|     hello|\"\nString leftAlign = String.format(\"|%-10s|\", \"hello\"); // \"|hello     |\""
      },
      {
        "type": "heading",
        "level": 3,
        "text": "valueOf(...) static methods"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Convert primitives and objects to String:\nSystem.out.println(String.valueOf(42));         // \"42\"\nSystem.out.println(String.valueOf(3.14));       // \"3.14\"\nSystem.out.println(String.valueOf(true));       // \"true\"\nSystem.out.println(String.valueOf('X'));        // \"X\"\n\nObject obj = new Object();\nSystem.out.println(String.valueOf(obj));        // object's toString()\n\n// Useful for null-safe conversion:\nString s = String.valueOf(null);                // \"null\"\n\n// More explicit than concatenation:\nint num = 100;\nString s1 = \"\" + num;                // concatenation (less clear)\nString s2 = String.valueOf(num);     // explicit conversion (clearer)"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "repeat(int) (Java 11+)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "System.out.println(\"ab\".repeat(3));     // \"ababab\"\nSystem.out.println(\"*\".repeat(10));     // \"**********\"\nSystem.out.println(\"\".repeat(5));       // \"\"\n\n// Building patterns:\nString border = \"=\".repeat(40);\nSystem.out.println(border);\nSystem.out.println(\"Welcome\");\nSystem.out.println(border);"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "lines() (Java 11+) — returns stream of lines"
      },
      {
        "type": "code",
        "language": "java",
        "code": "String multiline = \"Line 1\\\\nLine 2\\\\nLine 3\";\nmultiline.lines()\n    .forEach(System.out::println);\n// Output:\n// Line 1\n// Line 2\n// Line 3\n\n// Collect lines into list:\nList<String> lineList = multiline.lines()\n    .filter(line -> !line.isEmpty())\n    .toList();\n\n// Count lines:\nlong count = multiline.lines().count();  // 3"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "indent(int) (Java 12+)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "String code = \"int x = 5;\\\\nint y = 10;\";\nSystem.out.println(code.indent(2));\n// Output:\n//   int x = 5;\n//   int y = 10;\n\nString result = \"return value;\".indent(-2);  // dedent"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "stripIndent(), translateEscapes() (Java 15+)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// stripIndent() removes common leading whitespace\nString indented = \"\"\"\n    This is a\n    multi-line string\n    with indentation\"\"\";\nSystem.out.println(indented.stripIndent());\n\n// translateEscapes() converts escape sequences\nString escaped = \"Line1\\\\\\\\nLine2\\\\\\\\tTab\";\nSystem.out.println(escaped);                    // Line1\\\\nLine2\\\\tTab (literal)\nSystem.out.println(escaped.translateEscapes()); // Line1\n                                                 // Line2    Tab (actual escapes)"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "intern()"
      },
      {
        "type": "code",
        "language": "java",
        "code": "String s1 = new String(\"hello\");\nString s2 = \"hello\";\nSystem.out.println(s1 == s2);     // false (different objects)\n\nString s3 = s1.intern();\nSystem.out.println(s3 == s2);     // true (s3 now references pool)\n\n// Use case: memory optimization when comparing many strings\nString[] data = new String[1000];\nfor (int i = 0; i < 1000; i++) {\n    data[i] = new String(\"value\").intern();  // deduplicate\n}"
      }
    ]
  },
  {
    "id": "stringbuilder",
    "title": "6.3 StringBuilder — Mutable String Buffer",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "6.3 StringBuilder — Mutable String Buffer"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Performance comparison: concatenation vs StringBuilder"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// WRONG: String concatenation in loop creates O(n²) objects\nlong start = System.currentTimeMillis();\nString result = \"\";\nfor (int i = 0; i < 10000; i++) {\n    result += i;  // creates new String each time: \"\", \"0\", \"01\", \"012\", ...\n}\nlong end = System.currentTimeMillis();\nSystem.out.println(\"Concat time: \" + (end - start) + \"ms\");  // ~50-100ms\n\n// CORRECT: StringBuilder is O(n)\nstart = System.currentTimeMillis();\nStringBuilder sb = new StringBuilder();\nfor (int i = 0; i < 10000; i++) {\n    sb.append(i);  // amortized O(1) per append\n}\nString result = sb.toString();\nend = System.currentTimeMillis();\nSystem.out.println(\"StringBuilder time: \" + (end - start) + \"ms\");  // <1ms"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "StringBuilder methods: append, insert, delete"
      },
      {
        "type": "code",
        "language": "java",
        "code": "StringBuilder sb = new StringBuilder(\"Hello\");\n\n// append(): add to end\nsb.append(\" \");\nsb.append(\"World\");\nSystem.out.println(sb);  // \"Hello World\"\n\n// Can chain:\nsb = new StringBuilder()\n    .append(\"Java \")\n    .append(8)\n    .append(\" is \")\n    .append(\"awesome\");\nSystem.out.println(sb);  // \"Java 8 is awesome\"\n\n// insert(): add at index\nsb = new StringBuilder(\"Hello World\");\nsb.insert(5, \" Java\");\nSystem.out.println(sb);  // \"Hello Java World\"\n\n// delete(): remove range [start, end)\nsb = new StringBuilder(\"Hello World\");\nsb.delete(5, 11);\nSystem.out.println(sb);  // \"Hello\"\n\n// deleteCharAt(): remove single char\nsb = new StringBuilder(\"Hello\");\nsb.deleteCharAt(1);\nSystem.out.println(sb);  // \"Hllo\""
      },
      {
        "type": "heading",
        "level": 3,
        "text": "replace, reverse, charAt, setCharAt"
      },
      {
        "type": "code",
        "language": "java",
        "code": "StringBuilder sb = new StringBuilder(\"Hello World\");\n\n// replace(): replace substring in range\nsb.replace(0, 5, \"Hi\");\nSystem.out.println(sb);  // \"Hi World\"\n\n// reverse():\nsb = new StringBuilder(\"Java\");\nsb.reverse();\nSystem.out.println(sb);  // \"avaJ\"\n\n// charAt(): get char at index\nsb = new StringBuilder(\"Hello\");\nSystem.out.println(sb.charAt(1));  // 'e'\n\n// setCharAt(): set char at index\nsb.setCharAt(0, 'J');\nSystem.out.println(sb);  // \"Jello\""
      },
      {
        "type": "heading",
        "level": 3,
        "text": "length(), capacity(), toString()"
      },
      {
        "type": "code",
        "language": "java",
        "code": "StringBuilder sb = new StringBuilder(\"Hello\");\n\nSystem.out.println(sb.length());      // 5 (number of characters)\nSystem.out.println(sb.capacity());    // 21 (internal buffer size)\n\n// Capacity grows as needed:\nStringBuilder sb2 = new StringBuilder(5);\nsb2.append(\"Hello\");\nSystem.out.println(sb2.capacity());   // 5\nsb2.append(\"World\");\nSystem.out.println(sb2.capacity());   // 22 (doubled + 2)\n\n// toString(): convert to immutable String\nString result = sb.toString();\nSystem.out.println(result instanceof String);  // true"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "StringBuilder vs StringBuffer (thread safety)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// StringBuilder — not synchronized, faster\nStringBuilder sb = new StringBuilder();\nsb.append(\"Hello\").append(\"World\");  // ~1μs\n\n// StringBuffer — synchronized, slower (for thread-safe code)\nStringBuffer sbf = new StringBuffer();\nsbf.append(\"Hello\").append(\"World\");  // ~10μs (locking overhead)\n\n// Single-threaded code: use StringBuilder always\n// Multi-threaded (if needed): use StringBuffer or external synchronization"
      }
    ]
  },
  {
    "id": "stringjoiner",
    "title": "6.4 StringJoiner &amp; String.join()",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "6.4 StringJoiner & String.join()"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "StringJoiner with delimiters and affixes"
      },
      {
        "type": "code",
        "language": "java",
        "code": "StringJoiner sj = new StringJoiner(\", \");\nsj.add(\"Alice\");\nsj.add(\"Bob\");\nsj.add(\"Charlie\");\nSystem.out.println(sj);  // \"Alice, Bob, Charlie\"\n\n// With prefix and suffix:\nStringJoiner sj2 = new StringJoiner(\", \", \"[\", \"]\");\nsj2.add(\"Apple\")\n   .add(\"Banana\")\n   .add(\"Cherry\");\nSystem.out.println(sj2);  // \"[Apple, Banana, Cherry]\"\n\n// Empty handling:\nStringJoiner empty = new StringJoiner(\", \", \"{\", \"}\");\nSystem.out.println(empty.setEmptyValue(\"EMPTY\"));  // \"{EMPTY}\""
      },
      {
        "type": "heading",
        "level": 3,
        "text": "String.join()"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Join array:\nString result = String.join(\", \", \"a\", \"b\", \"c\");\nSystem.out.println(result);  // \"a, b, c\"\n\n// Join list:\nList<String> fruits = List.of(\"apple\", \"banana\", \"cherry\");\nString joined = String.join(\"-\", fruits);\nSystem.out.println(joined);  // \"apple-banana-cherry\"\n\n// Join stream:\nList<Integer> numbers = List.of(1, 2, 3, 4, 5);\nString numStr = String.join(\", \",\n    numbers.stream().map(String::valueOf).toList());\nSystem.out.println(numStr);  // \"1, 2, 3, 4, 5\"\n\n// CSV building:\nString csv = String.join(\",\", \"Name\", \"Age\", \"City\");\nSystem.out.println(csv);  // \"Name,Age,City\""
      }
    ]
  },
  {
    "id": "math",
    "title": "6.5 Math Class — Utilities",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "6.5 Math Class — Utilities"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Basic operations"
      },
      {
        "type": "code",
        "language": "java",
        "code": "System.out.println(Math.abs(-5));        // 5\nSystem.out.println(Math.abs(-5.5));      // 5.5\n\nSystem.out.println(Math.max(3, 7));      // 7\nSystem.out.println(Math.max(3.5, 7.2));  // 7.2\n\nSystem.out.println(Math.min(3, 7));      // 3\nSystem.out.println(Math.min(3.5, 7.2));  // 3.5\n\nSystem.out.println(Math.signum(-5.0));   // -1.0\nSystem.out.println(Math.signum(0.0));    // 0.0\nSystem.out.println(Math.signum(5.0));    // 1.0"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Powers and roots"
      },
      {
        "type": "code",
        "language": "java",
        "code": "System.out.println(Math.pow(2, 10));     // 1024.0\nSystem.out.println(Math.pow(3, 3));      // 27.0\n\nSystem.out.println(Math.sqrt(144));      // 12.0\nSystem.out.println(Math.sqrt(2));        // 1.4142135623730951\n\nSystem.out.println(Math.cbrt(27));       // 3.0\nSystem.out.println(Math.cbrt(8));        // 2.0"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Rounding: ceil, floor, round"
      },
      {
        "type": "code",
        "language": "java",
        "code": "System.out.println(Math.ceil(3.2));      // 4.0\nSystem.out.println(Math.ceil(3.9));      // 4.0\nSystem.out.println(Math.ceil(-3.2));     // -3.0\n\nSystem.out.println(Math.floor(3.9));     // 3.0\nSystem.out.println(Math.floor(3.2));     // 3.0\nSystem.out.println(Math.floor(-3.2));    // -4.0\n\nSystem.out.println(Math.round(3.5));     // 4 (banker's rounding)\nSystem.out.println(Math.round(3.4));     // 3\nSystem.out.println(Math.round(-3.5));    // -3"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Random numbers"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Random double [0.0, 1.0):\nSystem.out.println(Math.random());       // 0.7324... (varies)\n\n// Random integer 0-99:\nint random0to99 = (int)(Math.random() * 100);\nSystem.out.println(random0to99);         // 0-99\n\n// Random integer 1-10:\nint random1to10 = 1 + (int)(Math.random() * 10);\nSystem.out.println(random1to10);         // 1-10\n\n// Formula: min + (int)(Math.random() * (max - min + 1))\nint rollDice = 1 + (int)(Math.random() * 6);  // 1-6\nSystem.out.println(rollDice);            // 1-6"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Logarithmic functions"
      },
      {
        "type": "code",
        "language": "java",
        "code": "System.out.println(Math.log(Math.E));    // 1.0\nSystem.out.println(Math.log(1));         // 0.0\nSystem.out.println(Math.log(2.718281828459045)); // 1.0\n\nSystem.out.println(Math.log10(1000));    // 3.0\nSystem.out.println(Math.log10(1));       // 0.0\nSystem.out.println(Math.log10(100));     // 2.0\n\nSystem.out.println(Math.exp(1));         // 2.718281828459045\nSystem.out.println(Math.exp(0));         // 1.0"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Trigonometric functions"
      },
      {
        "type": "code",
        "language": "java",
        "code": "System.out.println(Math.PI);             // 3.141592653589793\nSystem.out.println(Math.E);              // 2.718281828459045\n\nSystem.out.println(Math.sin(Math.PI / 2)); // 1.0\nSystem.out.println(Math.sin(0));           // 0.0\n\nSystem.out.println(Math.cos(0));           // 1.0\nSystem.out.println(Math.cos(Math.PI));     // -1.0\n\nSystem.out.println(Math.tan(Math.PI / 4)); // 1.0\n\n// Inverse functions:\nSystem.out.println(Math.asin(1.0));      // π/2 (1.5707...)\nSystem.out.println(Math.acos(1.0));      // 0.0\nSystem.out.println(Math.atan(1.0));      // π/4 (0.7853...)"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Division: floorDiv, floorMod"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Standard division (rounding towards zero):\nSystem.out.println(7 / 2);                 // 3\nSystem.out.println(-7 / 2);                // -3 (truncates towards zero)\n\n// floorDiv (rounding down to negative infinity):\nSystem.out.println(Math.floorDiv(7, 2));   // 3\nSystem.out.println(Math.floorDiv(-7, 2));  // -4 (rounds down)\n\n// floorMod (always returns non-negative):\nSystem.out.println(7 % 2);                 // 1\nSystem.out.println(-7 % 2);                // -1\n\nSystem.out.println(Math.floorMod(7, 2));   // 1\nSystem.out.println(Math.floorMod(-7, 2));  // 1 (always positive)"
      }
    ]
  },
  {
    "id": "collections-hierarchy",
    "title": "6.6 Collections Framework — Hierarchy",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "6.6 Collections Framework — Hierarchy"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Collection hierarchy diagram"
      },
      {
        "type": "diagram",
        "content": "                    Iterable\n                       │\n                  Collection\n                 /    |    \\\\\n               List  Set   Queue\n               │      │      │\n          ArrayList HashSet ArrayDeque\n          LinkedList LinkedHashSet PriorityQueue\n          Vector   TreeSet  LinkedList\n          Stack\n\n         Map (separate hierarchy)\n        /    |     \\\\\n     HashMap LinkedHashMap TreeMap\n     Hashtable ConcurrentHashMap WeakHashMap"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Quick reference: When to use each"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// List — ordered, allows duplicates, index access\nList<String> list = new ArrayList<>();      // most common, O(1) access\nList<String> list = new LinkedList<>();     // frequent add/remove at ends\n\n// Set — unique values only, no order\nSet<String> set = new HashSet<>();          // O(1) operations, no order\nSet<String> set = new LinkedHashSet<>();    // insertion order preserved\nSet<String> set = new TreeSet<>();          // sorted order, O(log n)\n\n// Map — key-value pairs\nMap<String, Integer> map = new HashMap<>();         // O(1) average\nMap<String, Integer> map = new TreeMap<>();        // sorted by key\nMap<String, Integer> map = new LinkedHashMap<>();  // insertion order\n\n// Queue — FIFO\nQueue<String> queue = new LinkedList<>();  // general queue\nQueue<Integer> pq = new PriorityQueue<>(); // heap-based ordering\n\n// Deque — double-ended\nDeque<String> deque = new ArrayDeque<>();  // more efficient than LinkedList"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Key principle: Program to interface, not implementation"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// CORRECT: use interface type\nList<String> list = new ArrayList<>();\nSet<Integer> set = new HashSet<>();\nMap<String, Integer> map = new HashMap<>();\n\n// Method signature should accept interface:\npublic void processItems(List<String> items) { }  // flexible\npublic void processItems(ArrayList<String> items) { }  // too restrictive\n\n// Call works with any implementation:\nprocessItems(new ArrayList<>());   // works\nprocessItems(new LinkedList<>());  // works (if parameter is List)"
      }
    ]
  },
  {
    "id": "list",
    "title": "6.7 List — ArrayList &amp; LinkedList",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "6.7 List — ArrayList & LinkedList"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "ArrayList basics: add, remove, set, get"
      },
      {
        "type": "code",
        "language": "java",
        "code": "List<String> list = new ArrayList<>();\nlist.add(\"Alice\");\nlist.add(\"Bob\");\nlist.add(\"Charlie\");\nSystem.out.println(list);  // [Alice, Bob, Charlie]\n\n// Insert at specific index:\nlist.add(0, \"Zara\");\nSystem.out.println(list);  // [Zara, Alice, Bob, Charlie]\n\n// Set (replace):\nlist.set(1, \"Anna\");\nSystem.out.println(list);  // [Zara, Anna, Bob, Charlie]\n\n// Get:\nString first = list.get(0);    // \"Zara\"\nString last = list.get(list.size() - 1);  // \"Charlie\"\n\n// Remove by index:\nlist.remove(0);\nSystem.out.println(list);  // [Anna, Bob, Charlie]\n\n// Remove by value:\nlist.remove(\"Bob\");\nSystem.out.println(list);  // [Anna, Charlie]"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Query operations"
      },
      {
        "type": "code",
        "language": "java",
        "code": "List<String> list = new ArrayList<>(List.of(\"Alice\", \"Bob\", \"Charlie\"));\n\nint size = list.size();                    // 3\nboolean empty = list.isEmpty();            // false\n\nboolean contains = list.contains(\"Alice\"); // true\nint index = list.indexOf(\"Bob\");           // 1\nint lastIdx = list.lastIndexOf(\"Bob\");     // 1\n\nList<String> subList = list.subList(0, 2); // [Alice, Bob] (view, not copy)\nSystem.out.println(subList);\n\n// Clear:\nlist.clear();\nSystem.out.println(list.isEmpty());        // true"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Iterating over List"
      },
      {
        "type": "code",
        "language": "java",
        "code": "List<String> list = new ArrayList<>(List.of(\"Alice\", \"Bob\", \"Charlie\"));\n\n// For-each (traditional):\nfor (String item : list) {\n    System.out.println(item);\n}\n\n// forEach() with lambda:\nlist.forEach(System.out::println);\nlist.forEach(item -> System.out.println(item.toUpperCase()));\n\n// Iterator:\nIterator<String> it = list.iterator();\nwhile (it.hasNext()) {\n    String item = it.next();\n    System.out.println(item);\n}\n\n// Index-based (if needed):\nfor (int i = 0; i < list.size(); i++) {\n    System.out.println(i + \": \" + list.get(i));\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Sorting List"
      },
      {
        "type": "code",
        "language": "java",
        "code": "List<String> fruits = new ArrayList<>(List.of(\"banana\", \"apple\", \"cherry\"));\n\n// Natural order (alphabetical):\nfruits.sort(Comparator.naturalOrder());\nSystem.out.println(fruits);  // [apple, banana, cherry]\n\n// Reverse order:\nfruits.sort(Comparator.reverseOrder());\nSystem.out.println(fruits);  // [cherry, banana, apple]\n\n// Custom comparator (by length):\nfruits.sort(Comparator.comparingInt(String::length));\nSystem.out.println(fruits);  // [apple, banana, cherry]\n\n// Using Collections utility:\nList<Integer> nums = new ArrayList<>(List.of(3, 1, 4, 1, 5, 9));\nCollections.sort(nums);  // [1, 1, 3, 4, 5, 9]\nCollections.sort(nums, Comparator.reverseOrder());  // [9, 5, 4, 3, 1, 1]"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "ArrayList initialization patterns"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Empty list:\nList<String> list1 = new ArrayList<>();\n\n// With initial capacity:\nList<String> list2 = new ArrayList<>(10);\n\n// From another collection:\nList<String> list3 = new ArrayList<>(List.of(\"a\", \"b\", \"c\"));\n\n// Using Arrays.asList():\nList<String> list4 = Arrays.asList(\"x\", \"y\", \"z\");  // fixed-size list!\n// (asList() returns fixed-size list, wrap it if you need add/remove)\nList<String> list5 = new ArrayList<>(Arrays.asList(\"x\", \"y\", \"z\"));\n\n// Anonymous list (advanced):\nList<String> list6 = new ArrayList<String>() {{\n    add(\"first\");\n    add(\"second\");\n    add(\"third\");\n}};"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "LinkedList — doubly-linked implementation"
      },
      {
        "type": "code",
        "language": "java",
        "code": "LinkedList<String> ll = new LinkedList<>();\nll.add(\"A\");\nll.add(\"B\");\nll.add(\"C\");\n\n// Deque operations (LinkedList implements Deque):\nll.addFirst(\"X\");    // [X, A, B, C]\nll.addLast(\"Y\");     // [X, A, B, C, Y]\n\nll.removeFirst();    // [A, B, C, Y]\nll.removeLast();     // [A, B, C]\n\nString first = ll.peekFirst();  // look without remove\nString last = ll.peekLast();\n\n// Stack-like operations:\nll.push(\"top\");      // addFirst\nString popped = ll.pop();  // removeFirst\n\n// Use LinkedList for:\n// - Frequent insertions/deletions at both ends\n// - Use ArrayList for: general-purpose access"
      }
    ]
  },
  {
    "id": "set",
    "title": "6.8 Set — HashSet, LinkedHashSet, TreeSet",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "6.8 Set — HashSet, LinkedHashSet, TreeSet"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "HashSet — no guaranteed order, O(1) operations"
      },
      {
        "type": "code",
        "language": "java",
        "code": "Set<String> set = new HashSet<>(Arrays.asList(\"banana\", \"apple\", \"cherry\", \"apple\"));\nSystem.out.println(set);         // order undefined, no duplicates\nSystem.out.println(set.size());  // 3 (not 4)\n\nset.add(\"date\");\nSystem.out.println(set.contains(\"apple\"));   // true\nset.remove(\"banana\");\nSystem.out.println(set);         // [apple, cherry, date] in some order\n\n// Iteration (order undefined):\nfor (String item : set) {\n    System.out.println(item);\n}\n\n// Null handling:\nSet<String> nullSet = new HashSet<>();\nnullSet.add(null);\nnullSet.add(\"value\");\nSystem.out.println(nullSet.contains(null));  // true"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "LinkedHashSet — insertion order maintained"
      },
      {
        "type": "code",
        "language": "java",
        "code": "Set<String> set = new LinkedHashSet<>(Arrays.asList(\"banana\", \"apple\", \"cherry\"));\nfor (String item : set) {\n    System.out.println(item);\n}\n// Output (in insertion order):\n// banana\n// apple\n// cherry\n\n// Use LinkedHashSet for:\n// - Removing duplicates while preserving order\nString[] names = {\"Alice\", \"Bob\", \"Alice\", \"Charlie\", \"Bob\"};\nSet<String> unique = new LinkedHashSet<>(Arrays.asList(names));\nSystem.out.println(unique);  // [Alice, Bob, Charlie] (in insertion order)"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "TreeSet — sorted order, O(log n) operations"
      },
      {
        "type": "code",
        "language": "java",
        "code": "Set<String> set = new TreeSet<>(Arrays.asList(\"banana\", \"apple\", \"cherry\"));\nfor (String item : set) {\n    System.out.println(item);\n}\n// Output (sorted):\n// apple\n// banana\n// cherry\n\n// Navigating sorted set:\nSystem.out.println(set.first());                    // \"apple\"\nSystem.out.println(set.last());                     // \"cherry\"\nSystem.out.println(set.headSet(\"banana\"));          // [apple]\nSystem.out.println(set.tailSet(\"banana\"));          // [banana, cherry]\nSystem.out.println(set.subSet(\"apple\", \"cherry\")); // [apple, banana]\n\n// Descending order:\nSet<Integer> nums = new TreeSet<>((a, b) -> b.compareTo(a));\nnums.addAll(Set.of(3, 1, 4, 1, 5, 9));\nSystem.out.println(nums);  // [9, 5, 4, 3, 1]"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Set operations: union, intersection, difference"
      },
      {
        "type": "code",
        "language": "java",
        "code": "Set<Integer> a = new HashSet<>(Set.of(1, 2, 3, 4));\nSet<Integer> b = new HashSet<>(Set.of(3, 4, 5, 6));\n\n// Union: all elements from both sets\nSet<Integer> union = new HashSet<>(a);\nunion.addAll(b);\nSystem.out.println(union);  // [1, 2, 3, 4, 5, 6]\n\n// Intersection: only common elements\nSet<Integer> intersection = new HashSet<>(a);\nintersection.retainAll(b);\nSystem.out.println(intersection);  // [3, 4]\n\n// Difference: elements in a but not in b\nSet<Integer> difference = new HashSet<>(a);\ndifference.removeAll(b);\nSystem.out.println(difference);  // [1, 2]\n\n// Check subset:\nSet<Integer> subset = Set.of(3, 4);\nSystem.out.println(a.containsAll(subset));  // true"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Custom objects in HashSet (override hashCode and equals)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class Student {\n    String name;\n    int id;\n\n    Student(String name, int id) {\n        this.name = name;\n        this.id = id;\n    }\n\n    // CRITICAL: override both\n    @Override\n    public boolean equals(Object o) {\n        if (!(o instanceof Student)) return false;\n        Student s = (Student) o;\n        return this.id == s.id;  // same id = same student\n    }\n\n    @Override\n    public int hashCode() {\n        return Integer.hashCode(id);\n    }\n}\n\nSet<Student> students = new HashSet<>();\nstudents.add(new Student(\"Alice\", 1));\nstudents.add(new Student(\"Alice\", 1));  // duplicate, won't be added\nSystem.out.println(students.size());    // 1\n\n// WRONG: no override, equals by reference\nSet<Student> wrong = new HashSet<>();\nwrong.add(new Student(\"Alice\", 1));\nwrong.add(new Student(\"Alice\", 1));  // different objects\nSystem.out.println(wrong.size());     // 2 (both added!)"
      }
    ]
  },
  {
    "id": "map",
    "title": "6.9 Map — HashMap, TreeMap, LinkedHashMap",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "6.9 Map — HashMap, TreeMap, LinkedHashMap"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "HashMap — no order, O(1) average operations"
      },
      {
        "type": "code",
        "language": "java",
        "code": "Map<String, Integer> map = new HashMap<>();\nmap.put(\"Alice\", 90);\nmap.put(\"Bob\", 85);\nmap.put(\"Charlie\", 92);\n\nSystem.out.println(map.get(\"Alice\"));           // 90\nSystem.out.println(map.get(\"Unknown\"));         // null\nSystem.out.println(map.getOrDefault(\"Eve\", 0)); // 0\n\nmap.put(\"Alice\", 95);  // overwrites previous value\nSystem.out.println(map.get(\"Alice\"));           // 95\n\nSystem.out.println(map.size());                 // 3\nSystem.out.println(map.containsKey(\"Bob\"));     // true\nSystem.out.println(map.containsValue(92));      // true\n\nmap.remove(\"Bob\");\nSystem.out.println(map.size());                 // 2\n\nmap.clear();\nSystem.out.println(map.isEmpty());              // true"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Iterating over Map"
      },
      {
        "type": "code",
        "language": "java",
        "code": "Map<String, Integer> scores = new HashMap<>();\nscores.put(\"Alice\", 90);\nscores.put(\"Bob\", 85);\nscores.put(\"Charlie\", 92);\n\n// Entry iteration (most efficient):\nfor (Map.Entry<String, Integer> entry : scores.entrySet()) {\n    System.out.println(entry.getKey() + \" = \" + entry.getValue());\n}\n\n// forEach with lambda:\nscores.forEach((name, score) -> System.out.println(name + \": \" + score));\n\n// Key iteration:\nfor (String key : scores.keySet()) {\n    System.out.println(key + \" -> \" + scores.get(key));\n}\n\n// Value iteration:\nfor (Integer score : scores.values()) {\n    System.out.println(score);\n}\n\n// Iterator:\nIterator<Map.Entry<String, Integer>> it = scores.entrySet().iterator();\nwhile (it.hasNext()) {\n    Map.Entry<String, Integer> entry = it.next();\n    System.out.println(entry.getKey() + \": \" + entry.getValue());\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "putIfAbsent, computeIfAbsent, merge"
      },
      {
        "type": "code",
        "language": "java",
        "code": "Map<String, Integer> map = new HashMap<>();\n\n// putIfAbsent(): only put if key doesn't exist\nmap.putIfAbsent(\"Alice\", 90);\nSystem.out.println(map.get(\"Alice\"));  // 90\nmap.putIfAbsent(\"Alice\", 95);          // ignored, Alice already exists\nSystem.out.println(map.get(\"Alice\"));  // still 90\n\n// computeIfAbsent(): compute value if key doesn't exist\nMap<String, Integer> lengths = new HashMap<>();\nlengths.computeIfAbsent(\"hello\", k -> k.length());  // hello not in map\nSystem.out.println(lengths.get(\"hello\"));           // 5\nlengths.computeIfAbsent(\"hello\", k -> k.length());  // hello exists, ignored\nSystem.out.println(lengths.get(\"hello\"));           // still 5\n\n// merge(): combine value with existing value\nmap.put(\"hits\", 5);\nmap.merge(\"hits\", 1, Integer::sum);  // 5 + 1 = 6\nSystem.out.println(map.get(\"hits\"));  // 6"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Frequency counter pattern"
      },
      {
        "type": "code",
        "language": "java",
        "code": "String[] words = {\"apple\", \"banana\", \"apple\", \"cherry\", \"banana\", \"apple\"};\nMap<String, Integer> frequency = new HashMap<>();\n\n// Manual approach:\nfor (String word : words) {\n    frequency.put(word, frequency.getOrDefault(word, 0) + 1);\n}\n\n// Using merge() (more elegant):\nfrequency.clear();\nfor (String word : words) {\n    frequency.merge(word, 1, Integer::sum);\n}\n\nSystem.out.println(frequency);\n// {apple=3, banana=2, cherry=1}\n\n// Find most frequent:\nString mostFrequent = frequency.entrySet().stream()\n    .max(Map.Entry.comparingByValue())\n    .map(Map.Entry::getKey)\n    .orElse(null);\nSystem.out.println(mostFrequent);  // \"apple\""
      },
      {
        "type": "heading",
        "level": 3,
        "text": "TreeMap — sorted by key"
      },
      {
        "type": "code",
        "language": "java",
        "code": "Map<String, Integer> map = new TreeMap<>();\nmap.put(\"Charlie\", 92);\nmap.put(\"Alice\", 90);\nmap.put(\"Bob\", 85);\n\n// Iterates in key order:\nfor (String name : map.keySet()) {\n    System.out.println(name);  // Alice, Bob, Charlie\n}\n\n// Map.Entry iteration (also sorted):\nfor (Map.Entry<String, Integer> e : map.entrySet()) {\n    System.out.println(e.getKey() + \": \" + e.getValue());\n}\n\n// Navigating:\nTreeMap<String, Integer> treeMap = new TreeMap<>(map);\nSystem.out.println(treeMap.firstKey());      // \"Alice\"\nSystem.out.println(treeMap.lastKey());       // \"Charlie\"\nSystem.out.println(treeMap.headMap(\"Bob\"));  // {Alice=90}\nSystem.out.println(treeMap.tailMap(\"Bob\"));  // {Bob=85, Charlie=92}\nSystem.out.println(treeMap.subMap(\"Alice\", \"Charlie\")); // {Alice=90, Bob=85}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "LinkedHashMap — insertion order preserved"
      },
      {
        "type": "code",
        "language": "java",
        "code": "Map<String, Integer> map = new LinkedHashMap<>();\nmap.put(\"Charlie\", 92);\nmap.put(\"Alice\", 90);\nmap.put(\"Bob\", 85);\n\n// Iterates in insertion order:\nfor (String name : map.keySet()) {\n    System.out.println(name);  // Charlie, Alice, Bob\n}\n\n// Use LinkedHashMap for:\n// - Caching with insertion order\n// - LRU (Least Recently Used) cache with access-order LinkedHashMap:\nMap<String, String> lru = new LinkedHashMap<String, String>(16, 0.75f, true) {\n    // true = access-order (most recently used last)\n    @Override\n    protected boolean removeEldestEntry(Map.Entry eldest) {\n        return size() > 100;  // remove oldest if exceeds 100\n    }\n};"
      }
    ]
  },
  {
    "id": "queue",
    "title": "6.10 Queue &amp; Deque — FIFO &amp; Double-Ended",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "6.10 Queue & Deque — FIFO & Double-Ended"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Queue interface and implementations"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Queue methods: offer (add safe), poll (remove safe), peek (view)\nQueue<String> queue = new LinkedList<>();\nqueue.offer(\"first\");     // add to tail\nqueue.offer(\"second\");\nqueue.offer(\"third\");\n\nSystem.out.println(queue.peek());  // \"first\" (without removing)\nSystem.out.println(queue.poll());  // \"first\" (remove and return)\nSystem.out.println(queue.poll());  // \"second\"\nSystem.out.println(queue.poll());  // \"third\"\nSystem.out.println(queue.poll());  // null (empty)\n\n// Variant: throw exceptions instead of returning null\nqueue.add(\"item\");       // throws if full\nqueue.remove();          // throws if empty\nqueue.element();         // throws if empty"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "PriorityQueue — heap-based, min-heap by default"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Min-heap (smallest first):\nQueue<Integer> minHeap = new PriorityQueue<>();\nminHeap.offer(5);\nminHeap.offer(1);\nminHeap.offer(3);\nminHeap.offer(9);\n\nSystem.out.println(minHeap.poll());  // 1\nSystem.out.println(minHeap.poll());  // 3\nSystem.out.println(minHeap.poll());  // 5\nSystem.out.println(minHeap.poll());  // 9\n\n// Max-heap (largest first):\nQueue<Integer> maxHeap = new PriorityQueue<>(Comparator.reverseOrder());\nmaxHeap.offer(5);\nmaxHeap.offer(1);\nmaxHeap.offer(3);\nmaxHeap.offer(9);\n\nSystem.out.println(maxHeap.poll());  // 9\nSystem.out.println(maxHeap.poll());  // 5\nSystem.out.println(maxHeap.poll());  // 3\nSystem.out.println(maxHeap.poll());  // 1\n\n// PriorityQueue with custom objects:\nQueue<Task> tasks = new PriorityQueue<>(Comparator.comparingInt(t -> t.priority));\ntasks.offer(new Task(\"high\", 1));\ntasks.offer(new Task(\"low\", 10));\ntasks.offer(new Task(\"medium\", 5));\n// poll() will return tasks in priority order"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Deque (Double-Ended Queue) — both ends"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// ArrayDeque is more efficient than LinkedList for Deque operations\nDeque<String> deque = new ArrayDeque<>();\n\n// Add/remove from both ends:\ndeque.addFirst(\"front\");\ndeque.addLast(\"back\");\nSystem.out.println(deque);  // [front, back]\n\ndeque.addFirst(\"1st\");\ndeque.addLast(\"last\");\nSystem.out.println(deque);  // [1st, front, back, last]\n\nString removed = deque.removeFirst();  // \"1st\"\nSystem.out.println(deque);  // [front, back, last]\n\n// Peek without removing:\nSystem.out.println(deque.peekFirst());  // \"front\"\nSystem.out.println(deque.peekLast());   // \"last\"\n\n// Deque as stack (LIFO):\nDeque<Integer> stack = new ArrayDeque<>();\nstack.push(1);\nstack.push(2);\nstack.push(3);\n\nSystem.out.println(stack.pop());  // 3\nSystem.out.println(stack.pop());  // 2\nSystem.out.println(stack.pop());  // 1"
      }
    ]
  },
  {
    "id": "collections-utility",
    "title": "6.11 Collections Utility Class",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "6.11 Collections Utility Class"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Sorting and reversing"
      },
      {
        "type": "code",
        "language": "java",
        "code": "List<Integer> nums = new ArrayList<>(Arrays.asList(3, 1, 4, 1, 5, 9, 2, 6));\n\nCollections.sort(nums);  // ascending\nSystem.out.println(nums);  // [1, 1, 2, 3, 4, 5, 6, 9]\n\nCollections.sort(nums, Comparator.reverseOrder());  // descending\nSystem.out.println(nums);  // [9, 6, 5, 4, 3, 2, 1, 1]\n\nCollections.reverse(nums);\nSystem.out.println(nums);  // [1, 1, 2, 3, 4, 5, 6, 9]\n\nCollections.shuffle(nums);  // random order\nSystem.out.println(nums);  // [3, 1, 9, ...]"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Finding min/max and frequency"
      },
      {
        "type": "code",
        "language": "java",
        "code": "List<Integer> nums = new ArrayList<>(Arrays.asList(3, 1, 4, 1, 5, 9, 2, 6));\n\nint minimum = Collections.min(nums);  // 1\nint maximum = Collections.max(nums);  // 9\n\nint freq = Collections.frequency(nums, 1);  // 2 (appears twice)\nSystem.out.println(\"1 appears \" + freq + \" times\");\n\n// With custom comparator:\nList<String> words = new ArrayList<>(Arrays.asList(\"a\", \"cat\", \"dog\", \"elephant\"));\nString longest = Collections.max(words, Comparator.comparingInt(String::length));\nSystem.out.println(longest);  // \"elephant\""
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Creating filled/copied collections"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// nCopies: creates list of n identical elements\nList<String> copies = Collections.nCopies(5, \"Java\");\nSystem.out.println(copies);  // [Java, Java, Java, Java, Java]\n\n// fill: replaces all elements with a value\nList<Integer> nums = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));\nCollections.fill(nums, 0);\nSystem.out.println(nums);  // [0, 0, 0, 0, 0]\n\n// Singleton: collection with single element\nSet<String> single = Collections.singleton(\"only\");\nSystem.out.println(single);  // [only]"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Swap and rotate"
      },
      {
        "type": "code",
        "language": "java",
        "code": "List<Integer> nums = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));\n\nCollections.swap(nums, 0, 4);  // swap elements at index 0 and 4\nSystem.out.println(nums);  // [5, 2, 3, 4, 1]\n\nCollections.rotate(nums, 2);  // rotate right by 2\nSystem.out.println(nums);  // [4, 1, 5, 2, 3]\n\nCollections.rotate(nums, -2);  // rotate left by 2\nSystem.out.println(nums);  // [5, 2, 3, 4, 1]"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Unmodifiable wrappers"
      },
      {
        "type": "code",
        "language": "java",
        "code": "List<String> original = new ArrayList<>(List.of(\"a\", \"b\", \"c\"));\nList<String> fixed = Collections.unmodifiableList(original);\n\nSystem.out.println(fixed.get(0));  // \"a\" (read works)\n\n// WRONG: trying to modify\nfixed.add(\"d\");  // throws UnsupportedOperationException\nfixed.remove(0); // throws UnsupportedOperationException\n\n// Unmodifiable versions of other types:\nSet<Integer> unmodSet = Collections.unmodifiableSet(new HashSet<>(Set.of(1, 2, 3)));\nMap<String, Integer> unmodMap = Collections.unmodifiableMap(\n    new HashMap<>(Map.of(\"a\", 1, \"b\", 2))\n);"
      }
    ]
  },
  {
    "id": "unmodifiable",
    "title": "6.12 Unmodifiable Factory Methods (Java 9+)",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "6.12 Unmodifiable Factory Methods (Java 9+)"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "List.of(), Set.of(), Map.of() — immutable collections"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Immutable list:\nList<String> list = List.of(\"a\", \"b\", \"c\");\nSystem.out.println(list);  // [a, b, c]\n\n// WRONG: trying to modify immutable list\nlist.add(\"d\");     // throws UnsupportedOperationException\nlist.remove(0);    // throws UnsupportedOperationException\nlist.set(0, \"x\");  // throws UnsupportedOperationException\n\n// Immutable set (no duplicates, no order):\nSet<Integer> set = Set.of(1, 2, 3, 1);  // 1 is duplicate\nSystem.out.println(set);  // [1, 2, 3] (only 3 elements)\n\nSet<Integer> setDup = Set.of(1, 1, 2);  // throws IllegalArgumentException\n\n// Immutable map (multiple entries):\nMap<String, Integer> map = Map.of(\"one\", 1, \"two\", 2, \"three\", 3);\nSystem.out.println(map);  // {one=1, two=2, three=3}\n\n// For more than 10 entries, use Map.ofEntries():\nMap<String, Integer> bigMap = Map.ofEntries(\n    Map.entry(\"a\", 1),\n    Map.entry(\"b\", 2),\n    Map.entry(\"c\", 3),\n    Map.entry(\"d\", 4)\n);\n\n// Null handling:\nList<String> nullList = List.of(\"a\", null, \"c\");  // throws NullPointerException"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "List.copyOf(), Set.copyOf(), Map.copyOf()"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Create immutable copy:\nList<String> mutable = new ArrayList<>(List.of(\"x\", \"y\", \"z\"));\nList<String> immutable = List.copyOf(mutable);\n\nmutable.add(\"w\");  // mutable list modified\nSystem.out.println(mutable);     // [x, y, z, w]\nSystem.out.println(immutable);   // [x, y, z] (unaffected)\n\n// For sets and maps:\nSet<Integer> original = new HashSet<>(Set.of(1, 2, 3));\nSet<Integer> copy = Set.copyOf(original);\n\nMap<String, Integer> origMap = new HashMap<>(Map.of(\"a\", 1, \"b\", 2));\nMap<String, Integer> copyMap = Map.copyOf(origMap);"
      }
    ]
  },
  {
    "id": "generics",
    "title": "6.13 Generics — Type Parameters &amp; Wildcards",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "6.13 Generics — Type Parameters & Wildcards"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Generic class definition"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Single type parameter T:\nclass Box<T> {\n    private T value;\n\n    Box(T value) {\n        this.value = value;\n    }\n\n    T get() {\n        return value;\n    }\n\n    void set(T value) {\n        this.value = value;\n    }\n}\n\n// Usage:\nBox<String> strBox = new Box<>(\"hello\");\nSystem.out.println(strBox.get());  // \"hello\"\n\nBox<Integer> intBox = new Box<>(42);\nSystem.out.println(intBox.get());  // 42\n\nBox<Double> dblBox = new Box<>(3.14);\nSystem.out.println(dblBox.get());  // 3.14"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Generic methods"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Generic method in non-generic class:\npublic class Utilities {\n    // Type parameter V declared in method signature:\n    public static <V> void printArray(V[] array) {\n        for (V item : array) {\n            System.out.println(item);\n        }\n    }\n\n    public static <T> T getFirst(List<T> list) {\n        return list.isEmpty() ? null : list.get(0);\n    }\n\n    public static <K, V> void printMap(Map<K, V> map) {\n        map.forEach((k, v) -> System.out.println(k + \": \" + v));\n    }\n}\n\n// Generic method in generic class:\nclass Box<T> {\n    private T value;\n\n    // Method with additional type parameter:\n    <V> Box<V> map(Function<T, V> mapper) {\n        return new Box<>(mapper.apply(value));\n    }\n}\n\nBox<String> strBox = new Box<>(\"5\");\nBox<Integer> intBox = strBox.map(s -> Integer.parseInt(s));"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Bounded type parameters (upper bound)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// T must extend Comparable:\npublic static <T extends Comparable<T>> T max(T a, T b) {\n    return a.compareTo(b) >= 0 ? a : b;\n}\n\nSystem.out.println(max(\"apple\", \"banana\"));  // \"banana\"\nSystem.out.println(max(3, 7));                // 7\nSystem.out.println(max(3.5, 2.5));            // 3.5\n\n// Only Comparable types work:\n// max(new Object(), new Object());  // compile error\n\n// Generic class with bounded type:\nclass NumberBox<T extends Number> {\n    private T value;\n\n    NumberBox(T value) {\n        this.value = value;\n    }\n\n    double asDouble() {\n        return value.doubleValue();\n    }\n}\n\nnew NumberBox<>(5);        // Integer extends Number, OK\nnew NumberBox<>(3.14);     // Double extends Number, OK\n// new NumberBox<>(\"str\");  // String doesn't extend Number, compile error"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Multiple bounds"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// T must extend both Cloneable AND Serializable:\npublic static <T extends Cloneable & Serializable> void process(T obj) {\n    // can use Cloneable methods and Serializable interface\n}\n\n// More commonly used:\ninterface A { }\ninterface B { }\n\npublic static <T extends A & B> void doSomething(T obj) {\n    // obj must implement both A and B\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Wildcards: upper bound (? extends T)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Upper bounded wildcard: read-only from unknown type\npublic static double sumList(List<? extends Number> list) {\n    double sum = 0;\n    for (Number num : list) {\n        sum += num.doubleValue();\n    }\n    return sum;\n}\n\nsumList(List.of(1, 2, 3));           // Integer extends Number, OK\nsumList(List.of(1.5, 2.5, 3.5));    // Double extends Number, OK\nsumList(List.of(1, 2.5, 3L));        // mixed, OK\n\n// List<?> super T cannot work for reading multiple types:\nList<? extends Number> list = List.of(1, 2, 3);\nfor (Number n : list) {  // safe\n    System.out.println(n);\n}\n\n// WRONG: cannot add to ? extends\nlist.add(5);  // compile error (could be List<Integer> or List<Double>)"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Wildcards: lower bound (? super T)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Lower bounded wildcard: write-only to unknown type\npublic static void addNumbers(List<? super Integer> list) {\n    list.add(1);\n    list.add(2);\n    list.add(3);\n}\n\nList<Number> nums = new ArrayList<>();\naddNumbers(nums);  // Integer is subtype of Number, OK\n\nList<Object> objs = new ArrayList<>();\naddNumbers(objs);  // Integer is subtype of Object, OK\n\n// Cannot read from ? super T safely (not sure of exact type):\nList<? super Integer> list = new ArrayList<Number>();\n// Object obj = list.get(0);  // OK (always Object)\n// Number n = list.get(0);    // compile error (might not be Number)"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Unbounded wildcard (?)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// ? (unbounded) is equivalent to ? extends Object\npublic static void printList(List<?> list) {\n    for (Object item : list) {\n        System.out.println(item);\n    }\n}\n\nprintList(List.of(1, 2, 3));           // OK\nprintList(List.of(\"a\", \"b\", \"c\"));     // OK\nprintList(List.of(1.5, \"mixed\", true)); // OK\n\n// Cannot write to unbounded:\nList<?> list = new ArrayList<String>();\n// list.add(\"str\");  // compile error"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Type erasure at runtime"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Generics are compile-time only!\nList<String> strList = new ArrayList<>();\nList<Integer> intList = new ArrayList<>();\n\n// At runtime, both are just List:\nSystem.out.println(strList.getClass() == intList.getClass());  // true!\n\n// Cannot use instanceof with generic type:\n// if (list instanceof List<String>) { }  // compile error\n\n// Instanceof with raw type works:\nif (list instanceof List) { }  // OK (but unchecked)\n\n// Cannot create generic array:\n// List<String>[] array = new List<String>[10];  // compile error\n\n// Workaround:\n@SuppressWarnings(\"unchecked\")\nList<String>[] array = new List[10];  // raw type array"
      }
    ]
  },
  {
    "id": "comparable-comparator",
    "title": "6.14 Comparable vs Comparator",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "6.14 Comparable vs Comparator"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Comparable — natural ordering implemented by class"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class Student implements Comparable<Student> {\n    String name;\n    int gpa;\n\n    Student(String name, int gpa) {\n        this.name = name;\n        this.gpa = gpa;\n    }\n\n    // Natural ordering: by GPA (ascending)\n    @Override\n    public int compareTo(Student other) {\n        // return negative if this < other\n        // return 0 if this == other\n        // return positive if this > other\n        return Integer.compare(this.gpa, other.gpa);\n    }\n\n    @Override\n    public String toString() {\n        return name + \" (\" + gpa + \")\";\n    }\n}\n\nList<Student> students = new ArrayList<>(Arrays.asList(\n    new Student(\"Alice\", 3),\n    new Student(\"Bob\", 4),\n    new Student(\"Charlie\", 2)\n));\n\nCollections.sort(students);  // uses compareTo()\nSystem.out.println(students);\n// Charlie (2), Alice (3), Bob (4)"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Comparator — external ordering implementations"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class Student {\n    String name;\n    int gpa;\n\n    Student(String name, int gpa) {\n        this.name = name;\n        this.gpa = gpa;\n    }\n\n    @Override\n    public String toString() {\n        return name + \" (\" + gpa + \")\";\n    }\n}\n\n// Comparator 1: by name (alphabetical)\nComparator<Student> byName = (a, b) -> a.name.compareTo(b.name);\n\n// Comparator 2: by GPA (descending)\nComparator<Student> byGpaDesc = (a, b) -> Integer.compare(b.gpa, a.gpa);\n\n// Comparator 3: by name, then by GPA\nComparator<Student> byNameThenGpa = byName.thenComparingInt(s -> s.gpa);\n\nList<Student> students = new ArrayList<>(Arrays.asList(\n    new Student(\"Alice\", 3),\n    new Student(\"Bob\", 4),\n    new Student(\"Alice\", 4)\n));\n\nstudents.sort(byName);\nSystem.out.println(students);  // Alice (3), Alice (4), Bob (4)\n\nstudents.sort(byGpaDesc);\nSystem.out.println(students);  // Bob (4), Alice (4), Alice (3)\n\nstudents.sort(byNameThenGpa);\nSystem.out.println(students);  // Alice (3), Alice (4), Bob (4)"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Comparator factory methods"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class Student {\n    String name;\n    int gpa;\n    double gre;\n\n    Student(String name, int gpa, double gre) {\n        this.name = name;\n        this.gpa = gpa;\n        this.gre = gre;\n    }\n\n    @Override\n    public String toString() {\n        return name + \" (gpa:\" + gpa + \", gre:\" + gre + \")\";\n    }\n}\n\nList<Student> students = new ArrayList<>(Arrays.asList(\n    new Student(\"Alice\", 3, 150),\n    new Student(\"Bob\", 4, 160),\n    new Student(\"Charlie\", 3, 155)\n));\n\n// comparing(): by any comparable property\nComparator<Student> byName = Comparator.comparing(s -> s.name);\n\n// comparingInt(), comparingDouble(): by primitive properties\nComparator<Student> byGpa = Comparator.comparingInt(s -> s.gpa);\nComparator<Student> byGre = Comparator.comparingDouble(s -> s.gre);\n\n// Chain comparators:\nComparator<Student> complex = Comparator\n    .comparingInt((Student s) -> s.gpa)\n    .reversed()                           // descending GPA\n    .thenComparingDouble(s -> s.gre);    // then ascending GRE\n\nstudents.sort(complex);\nSystem.out.println(students);\n// Bob (gpa:4, gre:160), Alice (gpa:3, gre:150), Charlie (gpa:3, gre:155)"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Reversing and null handling"
      },
      {
        "type": "code",
        "language": "java",
        "code": "List<String> words = new ArrayList<>(Arrays.asList(\"apple\", \"banana\", \"cherry\"));\n\n// Reverse natural order:\nwords.sort(Comparator.reverseOrder());\nSystem.out.println(words);  // [cherry, banana, apple]\n\n// Reverse custom comparator:\nwords.sort(Comparator.comparingInt(String::length).reversed());\nSystem.out.println(words);  // [banana, apple, cherry] (by length desc)\n\n// Handle nulls:\nComparator<String> nullsFirst = Comparator.nullsFirst(Comparator.naturalOrder());\nComparator<String> nullsLast = Comparator.nullsLast(Comparator.naturalOrder());\n\nList<String> withNulls = new ArrayList<>(Arrays.asList(\"a\", null, \"c\", \"b\"));\nwithNulls.sort(nullsFirst);\nSystem.out.println(withNulls);  // [null, a, b, c]\n\nwithNulls.sort(nullsLast);\nSystem.out.println(withNulls);  // [a, b, c, null]"
      }
    ]
  },
  {
    "id": "iterator",
    "title": "6.15 Iterator &amp; ListIterator",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "6.15 Iterator & ListIterator"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Iterator — safe removal during iteration"
      },
      {
        "type": "code",
        "language": "java",
        "code": "List<String> list = new ArrayList<>(List.of(\"a\", \"b\", \"c\", \"d\", \"e\"));\n\n// WRONG: ConcurrentModificationException\nfor (String s : list) {\n    if (s.equals(\"b\")) {\n        list.remove(s);  // throws ConcurrentModificationException\n    }\n}\n\n// CORRECT: use iterator.remove()\nIterator<String> it = list.iterator();\nwhile (it.hasNext()) {\n    String s = it.next();\n    if (s.equals(\"b\")) {\n        it.remove();  // safe removal\n    }\n}\nSystem.out.println(list);  // [a, c, d, e]\n\n// CORRECT: use removeIf()\nlist = new ArrayList<>(List.of(\"a\", \"b\", \"c\", \"d\", \"e\"));\nlist.removeIf(s -> s.equals(\"b\"));\nSystem.out.println(list);  // [a, c, d, e]"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "ListIterator — bidirectional iteration"
      },
      {
        "type": "code",
        "language": "java",
        "code": "List<String> list = new ArrayList<>(List.of(\"a\", \"b\", \"c\", \"d\"));\n\n// Forward iteration:\nListIterator<String> lit = list.listIterator();\nwhile (lit.hasNext()) {\n    System.out.println(lit.next());\n}\n// Output: a, b, c, d\n\n// Backward iteration (start from end):\nlit = list.listIterator(list.size());\nwhile (lit.hasPrevious()) {\n    System.out.println(lit.previous());\n}\n// Output: d, c, b, a\n\n// Get current index:\nlit = list.listIterator();\nlit.next();  // a\nlit.next();  // b\nSystem.out.println(lit.previousIndex());  // 1 (index of b)\nSystem.out.println(lit.nextIndex());      // 2 (index of c)\n\n// Add elements during iteration:\nlit = list.listIterator();\nlit.next();  // a\nlit.add(\"X\");  // insert X after a\nSystem.out.println(list);  // [a, X, b, c, d]\n\n// Set element (replace):\nlit = list.listIterator();\nlit.next();  // a\nlit.set(\"A\");  // replace a with A\nSystem.out.println(list);  // [A, X, b, c, d]"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Iterator vs for-each performance"
      },
      {
        "type": "code",
        "language": "java",
        "code": "List<String> list = new ArrayList<>(List.of(\"a\", \"b\", \"c\", \"d\", \"e\"));\n\n// For-each (uses iterator internally):\nfor (String s : list) {\n    System.out.println(s);\n}\n\n// Explicit iterator (same performance):\nfor (Iterator<String> it = list.iterator(); it.hasNext(); ) {\n    String s = it.next();\n    System.out.println(s);\n}\n\n// Index-based (slower for LinkedList):\nfor (int i = 0; i < list.size(); i++) {\n    String s = list.get(i);\n    System.out.println(s);\n}\n\n// For ArrayList: index-based is fine (O(1) access)\n// For LinkedList: use iterator (O(n) vs O(n²))"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "ConcurrentModificationException"
      },
      {
        "type": "code",
        "language": "java",
        "code": "List<String> list = new ArrayList<>(List.of(\"a\", \"b\", \"c\", \"d\"));\n\n// WRONG: structural modification during iteration\ntry {\n    for (String s : list) {\n        if (s.equals(\"b\")) {\n            list.add(\"X\");  // ConcurrentModificationException\n        }\n    }\n} catch (ConcurrentModificationException e) {\n    System.out.println(\"Cannot modify list during iteration\");\n}\n\n// CORRECT: collect changes then apply\nList<String> toAdd = new ArrayList<>();\nfor (String s : list) {\n    if (s.equals(\"b\")) {\n        toAdd.add(\"X\");\n    }\n}\nlist.addAll(toAdd);\n\n// CORRECT: use iterator methods\nIterator<String> it = list.iterator();\nwhile (it.hasNext()) {\n    String s = it.next();\n    if (s.equals(\"b\")) {\n        it.remove();     // safe\n    }\n}"
      }
    ]
  },
  {
    "id": "sec-16",
    "title": "16. Objects Utility Class",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "16. Objects Utility Class"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Null checks and comparisons"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.util.Objects;\n\n// Null checks:\nObjects.isNull(obj)                      // obj == null\nObjects.nonNull(obj)                     // obj != null\nObjects.requireNonNull(obj)              // throws NPE if null\nObjects.requireNonNull(obj, \"name cannot be null\")  // with message\nObjects.requireNonNullElse(obj, \"default\")         // null-safe default (Java 9+)\n\n// Comparison:\nObjects.equals(a, b)                     // null-safe equals (no NPE if either is null)\nObjects.deepEquals(arr1, arr2)           // deep array comparison\n\n// toString:\nObjects.toString(obj)                    // null-safe, returns \"null\" string if null\nObjects.toString(obj, \"N/A\")             // null-safe with default\n\n// Hashing:\nObjects.hash(field1, field2, field3)     // combine multiple fields into hashCode\nObjects.hashCode(obj)                    // null-safe hashCode\n\n// Checking:\nObjects.checkIndex(5, 10)                // throws if 5 >= 10 (Java 9+)\nObjects.checkFromToIndex(2, 7, 10)       // range check (Java 9+)"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Practical example: proper equals/hashCode implementation"
      },
      {
        "type": "code",
        "language": "java",
        "code": "class Point {\n    int x, y;\n\n    Point(int x, int y) {\n        this.x = x;\n        this.y = y;\n    }\n\n    @Override\n    public boolean equals(Object o) {\n        if (this == o) return true;\n        if (!(o instanceof Point p)) return false;\n        return x == p.x && y == p.y;\n    }\n\n    @Override\n    public int hashCode() {\n        return Objects.hash(x, y);  // clean one-liner\n    }\n\n    @Override\n    public String toString() {\n        return String.format(\"Point(%d, %d)\", x, y);\n    }\n}\n\nSet<Point> points = new HashSet<>();\npoints.add(new Point(1, 2));\npoints.add(new Point(1, 2));  // duplicate, won't be added\nSystem.out.println(points.size());  // 1"
      }
    ]
  },
  {
    "id": "sec-17",
    "title": "17. BigDecimal &amp; BigInteger",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "17. BigDecimal & BigInteger"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "BigDecimal — exact decimal arithmetic (use for money)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.math.BigDecimal;\nimport java.math.RoundingMode;\n\n// Floating-point IS WRONG for money:\nSystem.out.println(0.1 + 0.2);          // 0.30000000000000004 ← WRONG!\nSystem.out.println(1.0 - 0.9);          // 0.09999999999999998 ← WRONG!\n\n// BigDecimal IS CORRECT:\nBigDecimal a = new BigDecimal(\"0.1\");   // always use String constructor!\nBigDecimal b = new BigDecimal(\"0.2\");\nSystem.out.println(a.add(b));           // 0.3 ✓\n\n// WRONG — double constructor loses precision:\nnew BigDecimal(0.1)  // 0.1000000000000000055511151231257827021181583404541015625"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "BigDecimal operations and rounding"
      },
      {
        "type": "code",
        "language": "java",
        "code": "BigDecimal price  = new BigDecimal(\"19.99\");\nBigDecimal tax    = new BigDecimal(\"0.08\");\nBigDecimal qty    = new BigDecimal(\"3\");\n\nBigDecimal subtotal = price.multiply(qty);        // 59.97\nBigDecimal taxAmt   = subtotal.multiply(tax);     // 4.7976\nBigDecimal total    = subtotal.add(taxAmt);\n\n// Rounding (always specify for division):\nBigDecimal result = total.divide(new BigDecimal(\"2\"), 2, RoundingMode.HALF_UP);\n\n// RoundingMode options:\n// HALF_UP: 2.5 → 3 (common for money)\n// HALF_EVEN: 2.5 → 2, 3.5 → 4 (banker's rounding)\n// FLOOR, CEILING, DOWN, UP\n\n// Scale and precision:\nBigDecimal d = new BigDecimal(\"123.4500\");\nd.scale()                               // 4 (decimal places)\nd.precision()                           // 7 (total significant digits)\nd.stripTrailingZeros()                  // 123.45\nd.setScale(2, RoundingMode.HALF_UP)     // 123.45\n\n// Comparison — NEVER use equals() for value comparison:\nBigDecimal x = new BigDecimal(\"1.0\");\nBigDecimal y = new BigDecimal(\"1.00\");\nx.equals(y)                             // false! (different scale)\nx.compareTo(y) == 0                     // true ✓  always use compareTo\n\n// Useful constants:\nBigDecimal.ZERO     // 0\nBigDecimal.ONE      // 1\nBigDecimal.TEN      // 10"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "BigInteger — arbitrary-precision integers"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.math.BigInteger;\n\nBigInteger a = new BigInteger(\"12345678901234567890\");\nBigInteger b = BigInteger.valueOf(999_999_999L);\n\na.add(b)\na.subtract(b)\na.multiply(b)\na.divide(b)\na.mod(b)\na.pow(50)                   // huge exponentiation\na.gcd(b)                    // greatest common divisor\na.isProbablePrime(10)       // probabilistic primality test\na.nextProbablePrime()\n\n// Factorial of 100:\nBigInteger factorial = BigInteger.ONE;\nfor (int i = 2; i <= 100; i++) {\n    factorial = factorial.multiply(BigInteger.valueOf(i));\n}\nSystem.out.println(factorial);\n// 9332621544394415268160609791913399234871937391072945781554316088692117905650...\n"
      }
    ]
  },
  {
    "id": "sec-18",
    "title": "18. Regular Expressions (Regex)",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "18. Regular Expressions (Regex)"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Quick regex reference"
      },
      {
        "type": "code",
        "language": "text",
        "code": "Pattern       Matches\n.             any char except newline\n\\\\d            digit [0-9]\n\\\\w            word char [a-zA-Z0-9_]\n\\\\s            whitespace (space, tab, newline)\n\\\\D \\\\W \\\\S      negations (not digit, word, space)\n^             start of line\n$             end of line\n*             0 or more times\n+             1 or more times\n?             0 or 1 time\n{n}           exactly n times\n{n,m}         n to m times\n[abc]         character class (a or b or c)\n[^abc]        negated class (not a, b, or c)\n(a|b)         alternation (a or b)\n(group)       capturing group\n(?:group)     non-capturing group\n\\\\b            word boundary"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Pattern and Matcher — find and extract"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.util.regex.*;\n\n// Basic matching:\nboolean matches = \"hello123\".matches(\"\\\\\\\\w+\");  // true (full match)\n\n// Compile pattern once, reuse:\nPattern p = Pattern.compile(\"\\\\\\\\d+\");\nMatcher m = p.matcher(\"abc 123 def 456\");\n\nwhile (m.find()) {\n    System.out.println(\"Found: \" + m.group() + \" at \" + m.start());\n}\n// Found: 123 at 4\n// Found: 456 at 12\n\n// Groups for capturing:\nPattern date = Pattern.compile(\"(\\\\\\\\d{4})-(\\\\\\\\d{2})-(\\\\\\\\d{2})\");\nMatcher dm = date.matcher(\"Today is 2024-03-15\");\nif (dm.find()) {\n    System.out.println(\"Year:  \" + dm.group(1));  // 2024\n    System.out.println(\"Month: \" + dm.group(2));  // 03\n    System.out.println(\"Day:   \" + dm.group(3));  // 15\n}\n\n// Named groups (Java 7+):\nPattern named = Pattern.compile(\"(?<year>\\\\\\\\d{4})-(?<month>\\\\\\\\d{2})-(?<day>\\\\\\\\d{2})\");\nMatcher nm = named.matcher(\"2024-03-15\");\nif (nm.matches()) {\n    System.out.println(nm.group(\"year\"));   // 2024\n    System.out.println(nm.group(\"month\"));  // 03\n}"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Replace and split with regex"
      },
      {
        "type": "code",
        "language": "java",
        "code": "String s = \"Hello   World   Java\";\n\n// replaceAll uses regex:\ns.replaceAll(\"\\\\\\\\s+\", \" \")               // \"Hello World Java\"\ns.replaceAll(\"[aeiou]\", \"*\")            // \"H*ll* W*rld J*v*\"\n\n// split with regex:\n\"a1b2c3\".split(\"\\\\\\\\d\")                   // [\"a\",\"b\",\"c\"]\n\"one,two,,three\".split(\",\", -1)         // [\"one\",\"two\",\"\",\"three\"]\n\n// Replace with back-references:\n\"John Smith\".replaceAll(\"(\\\\\\\\w+) (\\\\\\\\w+)\", \"$2, $1\")  // \"Smith, John\""
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Pattern flags and validation examples"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Case-insensitive matching:\nPattern p = Pattern.compile(\"hello\", Pattern.CASE_INSENSITIVE);\nMatcher m = p.matcher(\"HELLO\");\nSystem.out.println(m.matches());  // true\n\n// Multiple lines mode (^ and $ match line starts/ends):\nPattern multiline = Pattern.compile(\"^start\", Pattern.MULTILINE);\n\n// Dot-all mode (. matches newlines too):\nPattern dotall = Pattern.compile(\".*\", Pattern.DOTALL);\n\n// Inline flags:\nPattern inline = Pattern.compile(\"(?i)hello\");  // case-insensitive\nPattern m2 = Pattern.compile(\"(?m)^start\");     // multiline\nPattern m3 = Pattern.compile(\"(?s).*\");         // dotall\n\n// Validation examples:\n// Email (simplified):\nboolean isEmail = email.matches(\"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\\\\\\\.[a-zA-Z]{2,}\");\n\n// Phone:\nboolean isPhone = phone.matches(\"\\\\\\\\+?[0-9]{10,15}\");\n\n// UUID:\nboolean isUuid = str.matches(\"[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\");"
      }
    ]
  },
  {
    "id": "sec-19",
    "title": "19. Random Numbers",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "19. Random Numbers"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Math.random() — simplest approach"
      },
      {
        "type": "code",
        "language": "java",
        "code": "// Math.random() returns [0.0, 1.0):\ndouble d = Math.random();\n\n// Random integer 0-99:\nint n = (int)(Math.random() * 100);\n\n// Random integer 1-6 (dice roll):\nint dice = (int)(Math.random() * 6) + 1;\n\n// Formula: min + (int)(Math.random() * (max - min + 1))\nint random10to20 = 10 + (int)(Math.random() * 11);  // [10, 20]"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "java.util.Random — more control and reproducibility"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.util.Random;\n\nRandom rng = new Random();\nrng.nextInt()                           // any int\nrng.nextInt(100)                        // [0, 99]\nrng.nextInt(1, 7)                       // [1, 6] — Java 17+\nrng.nextLong()\nrng.nextDouble()                        // [0.0, 1.0)\nrng.nextDouble(1.0, 6.0)                // [1.0, 6.0) Java 17+\nrng.nextBoolean()\nrng.nextGaussian()                      // standard normal distribution\n\n// Seed for reproducibility (same seed = same sequence):\nRandom seeded = new Random(42L);\nseeded.nextInt(100);                    // always same sequence"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "ThreadLocalRandom — for multithreaded code"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.util.concurrent.ThreadLocalRandom;\n\n// Faster than Random, no synchronization overhead:\nThreadLocalRandom tlr = ThreadLocalRandom.current();\ntlr.nextInt(1, 101)                     // [1, 100]\ntlr.nextDouble(0.0, 1.0)\n\n// Stream support:\nIntStream stream = tlr.ints(10, 0, 100);  // 10 random ints in [0,99]\nstream.forEach(System.out::println);\n\n// Use ThreadLocalRandom for:\n// - Multithreaded code (each thread gets own instance)\n// - Better performance than shared Random with synchronization"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "SecureRandom — cryptographically strong randomness"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.security.SecureRandom;\n\nSecureRandom sr = new SecureRandom();\nbyte[] token = new byte[32];\nsr.nextBytes(token);                    // fill with random bytes\n\n// Use for:\n// - Security tokens, passwords, salts, session IDs\n// - Cryptographic applications\n\n// WARNING: Much slower than Random\n// Only use when security matters, not for games/simulations"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "RandomGenerator API (Java 17+)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "import java.util.random.*;\n\n// Create specific algorithm:\nRandomGenerator rg = RandomGeneratorFactory.of(\"L64X128MixRandom\").create();\nrg.nextInt(100);\n\n// Stream support for bulk generation:\nrg.ints(5, 1, 7).forEach(System.out::println);  // 5 random dice rolls\n\n// Available algorithms:\n// L64X128MixRandom, L128X128MixRandom, L64X256MixRandom\n// Xoroshiro128PlusPlus, Xoroshiro128Plus, etc."
      }
    ]
  }
]
