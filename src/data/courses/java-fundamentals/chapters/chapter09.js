// Chapter 9 - Structured block data (no raw HTML)
export const sections = [
  {
    "id": "sec-1",
    "title": "1. Process vs Thread",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "1. Process vs Thread"
      },
      {
        "type": "callout",
        "variant": "note",
        "text": "A process is an isolated program instance with its own memory. A thread is a lightweight unit of execution sharing memory within a process."
      },
      {
        "type": "diagram",
        "format": "mermaid",
        "content": "flowchart LR\n  subgraph PA[\"Process A — isolated memory\"]\n    direction TB\n    T1A[\"Thread 1\"]\n    T2A[\"Thread 2\"]\n    T3A[\"Thread 3\"]\n    HA[\"Shared Heap Memory\"]\n    T1A --> HA\n    T2A --> HA\n    T3A --> HA\n  end\n  subgraph PB[\"Process B — isolated memory\"]\n    direction TB\n    T1B[\"Thread 1\"]\n    HB[\"Heap Memory\"]\n    T1B --> HB\n  end\n  style PA fill:#dbeafe,stroke:#1d4ed8,color:#1e3a5f\n  style PB fill:#dcfce7,stroke:#166534,color:#14532d\n  style HA fill:#fef9c3,stroke:#854d0e\n  style HB fill:#fef9c3,stroke:#854d0e"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "**Process:** Isolated memory space, heavy to create (milliseconds), one Java process per JVM",
          "**Threads:** Share heap memory within a process, lightweight to create (microseconds), multiple per process",
          "**JVM:** Single process with multiple threads — main thread, GC thread, your application threads"
        ]
      },
      {
        "type": "code",
        "language": "java",
        "code": "\n// Example: What JVM threads exist?\npublic class ThreadInspection {\n    public static void main(String[] args) {\n        ThreadGroup group = Thread.currentThread().getThreadGroup();\n        Thread[] threads = new Thread[group.activeCount()];\n        group.enumerate(threads);\n\n        for (Thread t : threads) {\n            if (t != null) {\n                System.out.println(\"Thread: \" + t.getName() +\n                    \" (daemon=\" + t.isDaemon() + \")\");\n            }\n        }\n        // Output includes: main, Monitor Ctrl-Break (Windows),\n        //                 Reference Handler, Finalizer, etc.\n    }\n}\n      "
      }
    ]
  },
  {
    "id": "sec-2",
    "title": "2. Thread Lifecycle",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "2. Thread Lifecycle"
      },
      {
        "type": "callout",
        "variant": "note",
        "text": "A thread transitions through states: NEW, RUNNABLE, RUNNING, BLOCKED/WAITING, TERMINATED."
      },
      {
        "type": "diagram",
        "format": "mermaid",
        "content": "stateDiagram-v2\n  [*] --> NEW : new Thread()\n  NEW --> RUNNABLE : start()\n  RUNNABLE --> RUNNING : scheduled by OS\n  RUNNING --> RUNNABLE : preempted / yield()\n  RUNNING --> BLOCKED : waiting for monitor lock\n  RUNNING --> WAITING : sleep() / join() / wait()\n  BLOCKED --> RUNNABLE : lock acquired\n  WAITING --> RUNNABLE : notified / woken up\n  RUNNING --> TERMINATED : run() completes\n  TERMINATED --> [*]"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "**NEW:** Thread created, not started",
          "**RUNNABLE:** Start called, thread in queue, waiting for CPU",
          "**RUNNING:** Scheduled by OS, executing code",
          "**BLOCKED:** Waiting for monitor lock (synchronized)",
          "**WAITING:** Sleeping, waiting for join, or notify",
          "**TERMINATED:** run() completed or threw exception"
        ]
      },
      {
        "type": "code",
        "language": "java",
        "code": "\n// Example: Observing thread state\npublic class ThreadStateDemo {\n    public static void main(String[] args) throws Exception {\n        Thread t = new Thread(() -> {\n            try {\n                Thread.sleep(3000);\n            } catch (InterruptedException e) {\n                Thread.currentThread().interrupt();\n            }\n        });\n\n        System.out.println(\"Before start: \" + t.getState());  // NEW\n        t.start();\n\n        System.out.println(\"After start: \" + t.getState());   // RUNNABLE or RUNNING\n\n        Thread.sleep(100);\n        System.out.println(\"While sleeping: \" + t.getState()); // TIMED_WAITING\n\n        t.join();\n        System.out.println(\"After join: \" + t.getState());    // TERMINATED\n    }\n}\n      "
      }
    ]
  },
  {
    "id": "sec-3",
    "title": "3. Creating Threads — 4 Ways",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "3. Creating Threads — 4 Ways"
      },
      {
        "type": "callout",
        "variant": "important",
        "text": "Always call thread.start(), not thread.run(). Calling run() executes in the current thread, not a new one."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Way 1: Extend Thread Class"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\nclass MyThread extends Thread {\n    @Override\n    public void run() {\n        System.out.println(\"Running in: \" + Thread.currentThread().getName());\n    }\n}\n\nMyThread t = new MyThread();\nt.start();  // NEW thread created\n// DO NOT call t.run() — that runs in current thread!\n      "
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Way 2: Implement Runnable (Preferred)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\n// Preferred: allows extending another class\nclass MyTask implements Runnable {\n    @Override\n    public void run() {\n        System.out.println(\"Task in: \" + Thread.currentThread().getName());\n    }\n}\n\nThread t2 = new Thread(new MyTask());\nt2.start();\n\n// Or with lambda:\nThread t3 = new Thread(() -> System.out.println(\"Lambda thread\"));\nt3.start();\n      "
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Way 3: Callable — Returns Result"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\n// Callable: returns a result, can throw checked exceptions\nCallable<Integer> task = () -> {\n    Thread.sleep(1000);\n    return 42;\n};\n\n// Must use ExecutorService (see section 11):\nExecutorService exec = Executors.newFixedThreadPool(2);\nFuture<Integer> future = exec.submit(task);\nInteger result = future.get();  // blocks until done\nSystem.out.println(\"Result: \" + result);\nexec.shutdown();\n      "
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Way 4: Via ExecutorService (Preferred for Production)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\n// Best: thread pool management and reuse\nExecutorService exec = Executors.newFixedThreadPool(4);\n\n// Submit Runnable:\nexec.submit(() -> {\n    System.out.println(\"Task in thread pool\");\n});\n\n// Submit Callable:\nFuture<String> future = exec.submit(() -> {\n    Thread.sleep(100);\n    return \"Result from pool\";\n});\n\nString result = future.get();\nexec.shutdown();\n      "
      },
      {
        "type": "callout",
        "variant": "tip",
        "text": "Runnable for fire-and-forget tasks. Callable when you need a result."
      }
    ]
  },
  {
    "id": "sec-4",
    "title": "4. Thread Methods",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "4. Thread Methods"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Sleep and Naming"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\nThread t = new Thread(() -> {\n    System.out.println(\"Running in: \" + Thread.currentThread().getName());\n});\nt.setName(\"Worker-1\");\nt.start();\n\n// Static sleep — current thread sleeps:\ntry {\n    Thread.sleep(2000);  // 2 seconds, throws InterruptedException\n} catch (InterruptedException e) {\n    System.out.println(\"Interrupted!\");\n    Thread.currentThread().interrupt();  // restore interrupt flag\n}\n      "
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Daemon Threads"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\nThread daemonThread = new Thread(() -> {\n    while (true) {\n        System.out.println(\"Daemon working...\");\n        try { Thread.sleep(1000); } catch (InterruptedException e) {}\n    }\n});\ndaemonThread.setDaemon(true);  // JVM exits without waiting for this\ndaemonThread.start();\n\n// Main thread exits, daemon is killed (not graceful):\nSystem.out.println(\"Main exits\");\n// Output: may print only once or a few times before JVM shuts down\n      "
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Join — Wait for Thread to Finish"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\nThread t = new Thread(() -> {\n    try {\n        Thread.sleep(2000);\n        System.out.println(\"Work done\");\n    } catch (InterruptedException e) {\n        Thread.currentThread().interrupt();\n    }\n});\nt.start();\n\ntry {\n    t.join();  // main thread waits indefinitely for t to finish\n    System.out.println(\"t has finished\");\n} catch (InterruptedException e) {\n    System.out.println(\"Main was interrupted\");\n}\n\n// Join with timeout:\ntry {\n    boolean finished = t.join(5000);  // wait up to 5 seconds\n    if (finished) {\n        System.out.println(\"t finished\");\n    } else {\n        System.out.println(\"t still running after 5 seconds\");\n    }\n} catch (InterruptedException e) {}\n      "
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Other Common Methods"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\nThread t = new Thread(() -> {\n    System.out.println(\"ID: \" + Thread.currentThread().getId());\n});\nt.setName(\"MyThread\");\nt.setPriority(Thread.MAX_PRIORITY);  // 1-10, rarely effective\nt.start();\n\n// Query thread state:\nSystem.out.println(\"Is alive: \" + t.isAlive());       // true if started, not finished\nSystem.out.println(\"State: \" + t.getState());         // NEW, RUNNABLE, RUNNING, etc.\nSystem.out.println(\"Is daemon: \" + t.isDaemon());     // default false\nSystem.out.println(\"Name: \" + t.getName());           // \"MyThread\"\n\n// Interrupt (sets flag, doesn't force stop):\nt.interrupt();\nSystem.out.println(\"Is interrupted: \" + t.isInterrupted());  // doesn't clear flag\n\n// Static method:\nSystem.out.println(\"Interrupted AND clear: \" +\n    Thread.interrupted());  // CLEARS the interrupt flag\n\n// Yield (hint to scheduler, rarely useful):\nThread.yield();  // current thread yields CPU voluntarily\n      "
      }
    ]
  },
  {
    "id": "sec-5",
    "title": "5. Race Conditions",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "5. Race Conditions"
      },
      {
        "type": "callout",
        "variant": "important",
        "text": "A race condition occurs when multiple threads access shared mutable data without proper synchronization, leading to unpredictable results."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "The Problem: Non-Atomic Operations"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\nclass Counter {\n    private int count = 0;\n\n    public void increment() {\n        count++;  // NOT atomic! Compiles to: read, add 1, write\n    }\n\n    public int get() {\n        return count;\n    }\n}\n\npublic class RaceConditionDemo {\n    public static void main(String[] args) throws InterruptedException {\n        Counter counter = new Counter();\n\n        // Start 1000 threads, each increments 1000 times:\n        for (int i = 0; i < 1000; i++) {\n            new Thread(() -> {\n                for (int j = 0; j < 1000; j++) {\n                    counter.increment();\n                }\n            }).start();\n        }\n\n        // Give threads time to finish:\n        Thread.sleep(2000);\n\n        // Expected: 1,000,000\n        // Actual: varies (900k, 950k, 999k, etc.) — RACE CONDITION!\n        System.out.println(\"Count: \" + counter.get());\n    }\n}\n      "
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Why It Happens"
      },
      {
        "type": "diagram",
        "format": "mermaid",
        "content": "sequenceDiagram\n  participant T1 as Thread 1\n  participant MEM as Shared Memory (count=5)\n  participant T2 as Thread 2\n\n  T1->>MEM: read count = 5\n  T2->>MEM: read count = 5\n  T1->>T1: compute 5 + 1 = 6\n  T2->>T2: compute 5 + 1 = 6\n  T1->>MEM: write count = 6\n  T2->>MEM: write count = 6\n  note over MEM: Should be 7, got 6!<br/>Thread 1 increment LOST!"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Java Bytecode Shows the Problem"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\n// count++ compiles to (approximately):\n// 1. aload_0         — load 'this'\n// 2. dup             — duplicate\n// 3. getfield        — read count from this\n// 4. iconst_1        — push 1\n// 5. iadd            — add\n// 6. putfield        — write count back\n\n// Between steps 3 and 6, another thread can read the old value!\n      "
      },
      {
        "type": "callout",
        "variant": "tip",
        "text": "Solutions: use synchronized, ReentrantLock, or AtomicInteger (see sections 6, 9, 10)."
      }
    ]
  },
  {
    "id": "sec-6",
    "title": "6. synchronized Keyword",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "6. synchronized Keyword"
      },
      {
        "type": "callout",
        "variant": "note",
        "text": "synchronized ensures only one thread can execute a block at a time by acquiring a lock on an object."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Synchronized Methods"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\nclass SafeCounter {\n    private int count = 0;\n\n    // Lock on 'this' — only one thread in this method at a time\n    public synchronized void increment() {\n        count++;\n    }\n\n    public synchronized int get() {\n        return count;\n    }\n\n    // Equivalent to:\n    public void incrementManual() {\n        synchronized (this) {\n            count++;\n        }\n    }\n}\n\n// Fixed from section 5:\npublic class FixedRaceCondition {\n    public static void main(String[] args) throws InterruptedException {\n        SafeCounter counter = new SafeCounter();\n\n        for (int i = 0; i < 1000; i++) {\n            new Thread(() -> {\n                for (int j = 0; j < 1000; j++) {\n                    counter.increment();\n                }\n            }).start();\n        }\n\n        Thread.sleep(2000);\n        System.out.println(\"Count: \" + counter.get());  // Always 1,000,000\n    }\n}\n      "
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Synchronized Static Methods"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\nclass Utility {\n    private static int instances = 0;\n\n    // Lock on the Class object (Utility.class), not instance\n    public static synchronized void created() {\n        instances++;\n    }\n\n    public static synchronized int getInstances() {\n        return instances;\n    }\n}\n      "
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Synchronized Blocks — Fine-Grained Locking"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\nclass BankAccount {\n    private double balance = 1000;\n    private final Object lock = new Object();  // explicit lock object\n\n    public void deposit(double amount) {\n        synchronized (lock) {  // only this block is locked\n            balance += amount;\n            System.out.println(\"Deposited \" + amount);\n        }\n        // Rest of method runs without lock — can log, etc.\n    }\n\n    public void withdraw(double amount) {\n        synchronized (lock) {\n            if (amount > balance) {\n                throw new IllegalStateException(\"Insufficient funds\");\n            }\n            balance -= amount;\n        }\n    }\n\n    public synchronized double getBalance() {\n        return balance;\n    }\n}\n\n// Usage:\npublic class BankDemo {\n    public static void main(String[] args) throws InterruptedException {\n        BankAccount account = new BankAccount();\n\n        Thread t1 = new Thread(() -> {\n            for (int i = 0; i < 100; i++) account.deposit(10);\n        });\n        Thread t2 = new Thread(() -> {\n            for (int i = 0; i < 100; i++) account.withdraw(5);\n        });\n\n        t1.start();\n        t2.start();\n        t1.join();\n        t2.join();\n\n        System.out.println(\"Final balance: \" + account.getBalance());\n    }\n}\n      "
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Synchronized on 'this' vs Lock Object"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\n// Approach 1: synchronized methods (lock on 'this')\nclass BadDesign {\n    private int data1, data2;\n    public synchronized void updateData1() { data1++; }\n    public synchronized void updateData2() { data2++; }\n    // Both methods compete for same lock — if updateData1 sleeps,\n    // updateData2 is blocked even though it accesses different data!\n}\n\n// Approach 2: separate locks (better)\nclass GoodDesign {\n    private int data1, data2;\n    private final Object lock1 = new Object();\n    private final Object lock2 = new Object();\n\n    public void updateData1() {\n        synchronized (lock1) { data1++; }\n    }\n    public void updateData2() {\n        synchronized (lock2) { data2++; }\n    }\n    // Now updateData1 and updateData2 can run concurrently!\n}\n      "
      },
      {
        "type": "callout",
        "variant": "warning",
        "text": "Over-synchronization reduces concurrency. Synchronize only the critical section and only what's necessary."
      }
    ]
  },
  {
    "id": "sec-7",
    "title": "7. volatile Keyword",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "7. volatile Keyword"
      },
      {
        "type": "callout",
        "variant": "note",
        "text": "volatile ensures visibility: reads/writes go directly to main memory, not CPU cache. Does NOT guarantee atomicity."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Visibility Problem"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\n// WRONG — race condition, thread may not see update:\nclass Worker {\n    private boolean running = true;  // cached in CPU registers\n\n    public void run() {\n        while (running) {\n            doWork();\n        }\n    }\n\n    public void stop() {\n        running = false;  // another CPU might not see this\n    }\n}\n\n// CORRECT — volatile guarantees visibility:\nclass SafeWorker {\n    private volatile boolean running = true;\n\n    public void run() {\n        while (running) {  // always reads from main memory\n            doWork();\n        }\n    }\n\n    public void stop() {\n        running = false;  // visible to all threads immediately\n    }\n}\n      "
      },
      {
        "type": "heading",
        "level": 3,
        "text": "volatile Does NOT Make count++ Atomic"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\n// WRONG — still not thread-safe!\nclass BadCounter {\n    private volatile int count = 0;\n\n    public void increment() {\n        count++;  // volatile guarantees visibility, but count++ is still\n    }           // read-modify-write and not atomic\n}\n\n// Fix: use synchronized or AtomicInteger\nclass GoodCounter {\n    private volatile int count = 0;\n\n    public synchronized void increment() {  // now atomic\n        count++;\n    }\n\n    public synchronized int get() {\n        return count;\n    }\n}\n      "
      },
      {
        "type": "heading",
        "level": 3,
        "text": "When to Use volatile"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\n// Good use: simple flags\nclass Server {\n    private volatile boolean shutdown = false;\n\n    public void run() {\n        while (!shutdown) {\n            handleRequest();\n        }\n    }\n\n    public void requestShutdown() {\n        shutdown = true;\n    }\n}\n\n// Good use: reference swapping (object reference itself is atomic)\nclass ConfigHolder {\n    private volatile Config current = new Config();\n\n    public void updateConfig(Config newConfig) {\n        current = newConfig;  // assignment is atomic\n    }\n\n    public Config getConfig() {\n        return current;  // always reads latest\n    }\n}\n\n// Bad use: counter (use AtomicInteger instead)\n// Bad use: complex operations (use synchronized instead)\n      "
      }
    ]
  },
  {
    "id": "sec-8",
    "title": "8. wait/notify/notifyAll — Producer-Consumer Pattern",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "8. wait/notify/notifyAll — Producer-Consumer Pattern"
      },
      {
        "type": "callout",
        "variant": "important",
        "text": "wait(), notify(), notifyAll() must be called inside synchronized block. Always use while loop, not if, with wait()."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Classic Producer-Consumer"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\nclass SharedBuffer {\n    private final Queue<Integer> buffer = new LinkedList<>();\n    private final int capacity = 5;\n\n    public synchronized void produce(int item) throws InterruptedException {\n        // Wait while buffer is full\n        while (buffer.size() == capacity) {\n            wait();  // release lock, wait for notifyAll()\n        }\n        buffer.offer(item);\n        System.out.println(\"Produced: \" + item + \", buffer size: \" + buffer.size());\n        notifyAll();  // wake up all waiting threads\n    }\n\n    public synchronized int consume() throws InterruptedException {\n        // Wait while buffer is empty\n        while (buffer.isEmpty()) {\n            wait();\n        }\n        int item = buffer.poll();\n        System.out.println(\"Consumed: \" + item + \", buffer size: \" + buffer.size());\n        notifyAll();\n        return item;\n    }\n}\n\npublic class ProducerConsumerDemo {\n    public static void main(String[] args) throws InterruptedException {\n        SharedBuffer buffer = new SharedBuffer();\n\n        // Producer threads\n        for (int i = 0; i < 2; i++) {\n            new Thread(() -> {\n                try {\n                    for (int j = 0; j < 10; j++) {\n                        buffer.produce(j);\n                        Thread.sleep(100);\n                    }\n                } catch (InterruptedException e) {\n                    Thread.currentThread().interrupt();\n                }\n            }).start();\n        }\n\n        // Consumer threads\n        for (int i = 0; i < 3; i++) {\n            new Thread(() -> {\n                try {\n                    for (int j = 0; j < 7; j++) {\n                        buffer.consume();\n                        Thread.sleep(150);\n                    }\n                } catch (InterruptedException e) {\n                    Thread.currentThread().interrupt();\n                }\n            }).start();\n        }\n    }\n}\n      "
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Why while, not if?"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\n// WRONG — can cause spurious wakeup bug:\npublic synchronized void consume() throws InterruptedException {\n    if (buffer.isEmpty()) {           // check once\n        wait();\n    }\n    int item = buffer.poll();         // might be empty! (spurious wakeup)\n}\n\n// CORRECT — recheck after waking:\npublic synchronized void consume() throws InterruptedException {\n    while (buffer.isEmpty()) {        // loop: check again after wait\n        wait();\n    }\n    int item = buffer.poll();         // guaranteed not empty\n}\n      "
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Spurious Wakeup Scenario"
      },
      {
        "type": "diagram",
        "format": "mermaid",
        "content": "sequenceDiagram\n  participant A as Thread A (Consumer)\n  participant Buffer\n  participant B as Thread B (Producer)\n\n  A->>Buffer: check isEmpty() → true\n  A->>A: wait() — releases lock, sleeps\n  B->>Buffer: produce(item)\n  B->>A: notifyAll()\n  A->>A: wake up, recheck while(isEmpty)\n  A->>Buffer: poll() — item consumed ✓\n  note over A: Use while, not if!<br/>Guards against spurious wakeups"
      }
    ]
  },
  {
    "id": "sec-9",
    "title": "9. java.util.concurrent.locks",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "9. java.util.concurrent.locks"
      },
      {
        "type": "callout",
        "variant": "note",
        "text": "Locks provide more control than synchronized: tryLock, explicit unlock, multiple conditions, read-write scenarios."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "ReentrantLock — Explicit Lock"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\nimport java.util.concurrent.locks.*;\n\nclass SafeCounter {\n    private int count = 0;\n    private final ReentrantLock lock = new ReentrantLock();\n\n    public void increment() {\n        lock.lock();\n        try {\n            count++;\n        } finally {\n            lock.unlock();  // ALWAYS unlock in finally!\n        }\n    }\n\n    public int get() {\n        lock.lock();\n        try {\n            return count;\n        } finally {\n            lock.unlock();\n        }\n    }\n}\n\n// With tryLock — non-blocking attempt:\nclass NonBlockingCounter {\n    private int count = 0;\n    private final ReentrantLock lock = new ReentrantLock();\n\n    public boolean incrementIfPossible() {\n        if (lock.tryLock()) {  // returns immediately\n            try {\n                count++;\n                return true;\n            } finally {\n                lock.unlock();\n            }\n        }\n        return false;  // couldn't get lock\n    }\n\n    public boolean incrementWithTimeout(long timeoutMs) throws InterruptedException {\n        if (lock.tryLock(timeoutMs, TimeUnit.MILLISECONDS)) {\n            try {\n                count++;\n                return true;\n            } finally {\n                lock.unlock();\n            }\n        }\n        return false;\n    }\n}\n      "
      },
      {
        "type": "heading",
        "level": 3,
        "text": "ReadWriteLock — Multiple Readers, One Writer"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\nclass Cache {\n    private String data;\n    private final ReadWriteLock lock = new ReentrantReadWriteLock();\n\n    // Many threads can read simultaneously\n    public String read() {\n        lock.readLock().lock();\n        try {\n            System.out.println(Thread.currentThread().getName() + \" reading\");\n            Thread.sleep(100);  // simulate slow read\n            return data;\n        } catch (InterruptedException e) {\n            Thread.currentThread().interrupt();\n            return null;\n        } finally {\n            lock.readLock().unlock();\n        }\n    }\n\n    // Only one thread can write\n    public void write(String newData) {\n        lock.writeLock().lock();\n        try {\n            System.out.println(Thread.currentThread().getName() + \" writing\");\n            Thread.sleep(100);  // simulate slow write\n            this.data = newData;\n        } catch (InterruptedException e) {\n            Thread.currentThread().interrupt();\n        } finally {\n            lock.writeLock().unlock();\n        }\n    }\n}\n\npublic class ReadWriteLockDemo {\n    public static void main(String[] args) {\n        Cache cache = new Cache();\n        cache.write(\"initial\");\n\n        // Start 5 reader threads\n        for (int i = 0; i < 5; i++) {\n            new Thread(() -> {\n                for (int j = 0; j < 3; j++) {\n                    cache.read();\n                }\n            }, \"Reader-\" + i).start();\n        }\n\n        // Start 2 writer threads\n        for (int i = 0; i < 2; i++) {\n            new Thread(() -> {\n                for (int j = 0; j < 2; j++) {\n                    cache.write(\"data-\" + j);\n                }\n            }, \"Writer-\" + i).start();\n        }\n        // Readers run in parallel, writers are exclusive\n    }\n}\n      "
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Condition — wait/notify per Lock"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\nimport java.util.concurrent.locks.*;\n\nclass ConditionedBuffer {\n    private final Queue<Integer> buffer = new LinkedList<>();\n    private final int capacity = 5;\n    private final ReentrantLock lock = new ReentrantLock();\n    private final Condition notFull  = lock.newCondition();\n    private final Condition notEmpty = lock.newCondition();\n\n    public void produce(int item) throws InterruptedException {\n        lock.lock();\n        try {\n            while (buffer.size() == capacity) {\n                notFull.await();  // equivalent to wait()\n            }\n            buffer.offer(item);\n            System.out.println(\"Produced: \" + item);\n            notEmpty.signalAll();  // equivalent to notifyAll()\n        } finally {\n            lock.unlock();\n        }\n    }\n\n    public int consume() throws InterruptedException {\n        lock.lock();\n        try {\n            while (buffer.isEmpty()) {\n                notEmpty.await();\n            }\n            int item = buffer.poll();\n            System.out.println(\"Consumed: \" + item);\n            notFull.signalAll();\n            return item;\n        } finally {\n            lock.unlock();\n        }\n    }\n}\n      "
      },
      {
        "type": "callout",
        "variant": "tip",
        "text": "ReentrantLock for explicit unlock, timeout, and multiple conditions. synchronized for simple locking."
      }
    ]
  },
  {
    "id": "sec-10",
    "title": "10. Atomic Classes",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "10. Atomic Classes"
      },
      {
        "type": "callout",
        "variant": "note",
        "text": "Atomic classes use compare-and-swap (CAS) for thread-safe operations without explicit locks."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "AtomicInteger"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\nimport java.util.concurrent.atomic.*;\n\nclass AtomicCounterDemo {\n    public static void main(String[] args) throws InterruptedException {\n        AtomicInteger counter = new AtomicInteger(0);\n\n        // Returns new value\n        counter.incrementAndGet();      // count = 1, returns 1\n        int newVal = counter.addAndGet(5);  // count = 6, returns 6\n\n        // Returns old value\n        int oldVal = counter.getAndIncrement();  // count = 7, returns 6\n\n        // Compare-and-swap\n        boolean success = counter.compareAndSet(7, 100);  // if==7, set to 100\n        System.out.println(\"CAS success: \" + success);\n        System.out.println(\"Current: \" + counter.get());\n\n        // Get and accumulate\n        counter.accumulateAndGet(10, Integer::sum);  // count += 10\n    }\n}\n\n// Fixed from section 5 — now guaranteed correct:\npublic class AtomicFixedRaceCondition {\n    public static void main(String[] args) throws InterruptedException {\n        AtomicInteger counter = new AtomicInteger(0);\n\n        for (int i = 0; i < 1000; i++) {\n            new Thread(() -> {\n                for (int j = 0; j < 1000; j++) {\n                    counter.incrementAndGet();\n                }\n            }).start();\n        }\n\n        Thread.sleep(2000);\n        System.out.println(\"Count: \" + counter.get());  // Always 1,000,000\n    }\n}\n      "
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Other Atomic Classes"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\nimport java.util.concurrent.atomic.*;\n\n// AtomicBoolean\nAtomicBoolean flag = new AtomicBoolean(false);\nflag.set(true);\nboolean wasTrue = flag.getAndSet(false);\nflag.compareAndSet(false, true);\n\n// AtomicLong\nAtomicLong bigNum = new AtomicLong(0L);\nbigNum.incrementAndGet();\nbigNum.addAndGet(1_000_000);\n\n// AtomicReference — for any object\nclass User {\n    public final String name;\n    public User(String name) { this.name = name; }\n}\n\nAtomicReference<User> userRef = new AtomicReference<>(new User(\"Alice\"));\nUser alice = userRef.get();\nuserRef.set(new User(\"Bob\"));\nUser prev = userRef.getAndSet(new User(\"Charlie\"));\nuserRef.compareAndSet(prev, new User(\"David\"));\n\n// AtomicIntegerArray, AtomicLongArray\nAtomicIntegerArray array = new AtomicIntegerArray(10);\narray.set(0, 42);\narray.incrementAndGet(0);\n      "
      },
      {
        "type": "heading",
        "level": 3,
        "text": "How CAS Works"
      },
      {
        "type": "diagram",
        "format": "mermaid",
        "content": "sequenceDiagram\n  participant TA as Thread A\n  participant MEM as Memory (value=5)\n  participant TB as Thread B\n\n  TA->>MEM: read (expect = 5)\n  TB->>MEM: read (expect = 5)\n  TA->>MEM: CAS(expect=5, new=10) — SUCCESS ✓\n  note over MEM: value is now 10\n  TB->>MEM: CAS(expect=5, new=15) — FAIL ✗ (current=10)\n  TB->>TB: retry with updated expect=10\n  note over TA,TB: No lost updates — lock-free safety!"
      }
    ]
  },
  {
    "id": "sec-11",
    "title": "11. ExecutorService — Thread Pool",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "11. ExecutorService — Thread Pool"
      },
      {
        "type": "callout",
        "variant": "note",
        "text": "ExecutorService manages a thread pool, reusing threads and limiting concurrency to prevent resource exhaustion."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Creating Thread Pools"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\nimport java.util.concurrent.*;\n\n// Fixed pool — exactly N threads\nExecutorService fixedPool = Executors.newFixedThreadPool(4);\n\n// Cached pool — creates threads as needed, reuses idle threads\nExecutorService cachedPool = Executors.newCachedThreadPool();\n\n// Single thread — sequential execution\nExecutorService singleThread = Executors.newSingleThreadExecutor();\n\n// Scheduled executor — delayed and periodic tasks\nScheduledExecutorService scheduler = Executors.newScheduledThreadPool(2);\n\n// Virtual threads (Java 21+)\nExecutorService virtualPool = Executors.newVirtualThreadPerTaskExecutor();\n      "
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Submitting Tasks"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\nExecutorService exec = Executors.newFixedThreadPool(3);\n\n// Submit Runnable — fire and forget\nexec.execute(() -> System.out.println(\"Quick task\"));\nexec.submit(() -> System.out.println(\"Submitted task\"));\n\n// Submit Callable — get result\nFuture<Integer> future = exec.submit(() -> {\n    Thread.sleep(1000);\n    return 42;\n});\n\n// Wait for result\ntry {\n    Integer result = future.get();           // blocks until done\n    System.out.println(\"Result: \" + result);\n} catch (ExecutionException e) {\n    System.out.println(\"Task failed: \" + e.getCause());\n} catch (InterruptedException e) {\n    System.out.println(\"Interrupted\");\n}\n\n// Wait with timeout\ntry {\n    Integer result = future.get(2, TimeUnit.SECONDS);\n} catch (TimeoutException e) {\n    System.out.println(\"Took too long\");\n    future.cancel(true);  // cancel and interrupt\n}\n\n// Query future state\nif (future.isDone()) System.out.println(\"Done\");\nif (future.isCancelled()) System.out.println(\"Was cancelled\");\n      "
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Shutdown Properly"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\nExecutorService exec = Executors.newFixedThreadPool(2);\n\n// Submit tasks...\n\n// Graceful shutdown:\nexec.shutdown();  // no new tasks accepted\ntry {\n    if (!exec.awaitTermination(10, TimeUnit.SECONDS)) {\n        // Still running after 10 seconds\n        exec.shutdownNow();  // force interrupt\n        exec.awaitTermination(5, TimeUnit.SECONDS);\n    }\n} catch (InterruptedException e) {\n    exec.shutdownNow();\n    Thread.currentThread().interrupt();\n}\n\n// Force shutdown (abrupt):\nexec.shutdownNow();  // returns list of unstarted tasks\nList<Runnable> pending = exec.shutdownNow();\nSystem.out.println(\"Pending tasks: \" + pending.size());\n      "
      },
      {
        "type": "heading",
        "level": 3,
        "text": "invokeAll — Submit Multiple, Wait for All"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\nExecutorService exec = Executors.newFixedThreadPool(3);\n\nList<Callable<Integer>> tasks = List.of(\n    () -> { Thread.sleep(100); return 1; },\n    () -> { Thread.sleep(50);  return 2; },\n    () -> { Thread.sleep(150); return 3; }\n);\n\nList<Future<Integer>> futures = exec.invokeAll(tasks);\n\nfor (Future<Integer> f : futures) {\n    try {\n        System.out.println(f.get());\n    } catch (ExecutionException e) {\n        System.out.println(\"Task failed: \" + e.getCause());\n    }\n}\n\nexec.shutdown();\n      "
      },
      {
        "type": "heading",
        "level": 3,
        "text": "invokeAny — Return First Result"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\nExecutorService exec = Executors.newFixedThreadPool(3);\n\nList<Callable<String>> tasks = List.of(\n    () -> { Thread.sleep(200); return \"slow\"; },\n    () -> { Thread.sleep(50);  return \"fast\"; },\n    () -> { Thread.sleep(100); return \"medium\"; }\n);\n\ntry {\n    String firstResult = exec.invokeAny(tasks);\n    System.out.println(\"First result: \" + firstResult);  // \"fast\"\n} catch (ExecutionException e) {\n    System.out.println(\"All tasks failed\");\n} catch (InterruptedException e) {\n    System.out.println(\"Interrupted\");\n}\n\nexec.shutdown();\n      "
      }
    ]
  },
  {
    "id": "sec-12",
    "title": "12. CompletableFuture",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "12. CompletableFuture"
      },
      {
        "type": "callout",
        "variant": "note",
        "text": "CompletableFuture chains asynchronous operations with callbacks, avoiding deep nesting and enabling composition."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Basic Async Operations"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\nimport java.util.concurrent.CompletableFuture;\n\n// Create async computation (runs in ForkJoinPool.commonPool()):\nCompletableFuture<String> cf = CompletableFuture.supplyAsync(() -> {\n    try {\n        Thread.sleep(1000);\n    } catch (InterruptedException e) {\n        Thread.currentThread().interrupt();\n    }\n    return \"Hello\";\n});\n\n// Block and get result:\nString result = cf.get();\nSystem.out.println(result);\n\n// Complete manually:\nCompletableFuture<String> manual = new CompletableFuture<>();\nnew Thread(() -> {\n    try {\n        Thread.sleep(1000);\n        manual.complete(\"Done\");  // set result\n    } catch (Exception e) {\n        manual.completeExceptionally(e);  // set exception\n    }\n}).start();\n\nSystem.out.println(manual.join());  // like get() but unchecked\n      "
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Transformations"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\n// thenApply — transform result (synchronous):\nCompletableFuture<String> cf = CompletableFuture.supplyAsync(() -> \"hello\");\nCompletableFuture<Integer> length = cf.thenApply(String::length);\nSystem.out.println(length.join());  // 5\n\n// thenApplyAsync — transform asynchronously:\nCompletableFuture<String> upper = cf.thenApplyAsync(String::toUpperCase);\nSystem.out.println(upper.join());  // \"HELLO\"\n\n// thenAccept — consume result (no return):\ncf.thenAccept(s -> System.out.println(\"Got: \" + s));\n\n// thenRun — run when done (no input, no output):\ncf.thenRun(() -> System.out.println(\"Completed!\"));\n\n// Chain multiple transformations:\nCompletableFuture<String> chained = CompletableFuture\n    .supplyAsync(() -> \"user-123\")\n    .thenApply(id -> id.toUpperCase())\n    .thenApply(id -> \"User: \" + id);\n\nSystem.out.println(chained.join());  // \"User: USER-123\"\n      "
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Composition — thenCompose (flatMap)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\n// Simulate async operations:\nCompletableFuture<String> fetchUser(String id) {\n    return CompletableFuture.supplyAsync(() -> {\n        try { Thread.sleep(100); } catch (InterruptedException e) {}\n        return \"User \" + id;\n    });\n}\n\nCompletableFuture<String> fetchOrders(String user) {\n    return CompletableFuture.supplyAsync(() -> {\n        try { Thread.sleep(100); } catch (InterruptedException e) {}\n        return user + \" has 5 orders\";\n    });\n}\n\n// WRONG — returns CompletableFuture<CompletableFuture<String>>:\nCompletableFuture<CompletableFuture<String>> wrongNested =\n    fetchUser(\"123\").thenApply(user -> fetchOrders(user));\n\n// CORRECT — flatten with thenCompose:\nCompletableFuture<String> correct =\n    fetchUser(\"123\").thenCompose(user -> fetchOrders(user));\n\nSystem.out.println(correct.join());  // \"User 123 has 5 orders\"\n      "
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Combining Multiple Futures"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\nCompletableFuture<String> f1 = CompletableFuture.supplyAsync(() -> \"Hello\");\nCompletableFuture<String> f2 = CompletableFuture.supplyAsync(() -> \"World\");\n\n// Combine results:\nCompletableFuture<String> combined = f1.thenCombine(f2, (a, b) -> a + \" \" + b);\nSystem.out.println(combined.join());  // \"Hello World\"\n\n// Wait for all:\nCompletableFuture<Void> allDone = CompletableFuture.allOf(f1, f2);\nallDone.join();  // waits for both\n\n// First to complete:\nCompletableFuture<Object> anyDone = CompletableFuture.anyOf(f1, f2);\nSystem.out.println(anyDone.join());  // whichever finishes first\n\n// Combine many:\nList<CompletableFuture<Integer>> futures = List.of(\n    CompletableFuture.supplyAsync(() -> 1),\n    CompletableFuture.supplyAsync(() -> 2),\n    CompletableFuture.supplyAsync(() -> 3)\n);\n\nCompletableFuture<List<Integer>> allNumbers =\n    CompletableFuture.allOf(\n        futures.toArray(new CompletableFuture[0])\n    ).thenApply(v -> futures.stream()\n        .map(CompletableFuture::join)\n        .toList());\n\nSystem.out.println(allNumbers.join());  // [1, 2, 3]\n      "
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Error Handling"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\nCompletableFuture<String> cf = CompletableFuture.supplyAsync(() -> {\n    if (Math.random() < 0.5) {\n        throw new RuntimeException(\"Random failure\");\n    }\n    return \"success\";\n});\n\n// Recover with default:\nCompletableFuture<String> recovered = cf.exceptionally(ex -> {\n    System.err.println(\"Error: \" + ex.getMessage());\n    return \"default value\";\n});\n\n// Handle both success and failure:\ncf.handle((result, ex) -> {\n    if (ex != null) {\n        return \"Failed: \" + ex.getMessage();\n    }\n    return result.toUpperCase();\n}).thenAccept(System.out::println);\n\n// Side effects (doesn't transform):\ncf.whenComplete((result, ex) -> {\n    if (ex != null) {\n        System.err.println(\"Task failed: \" + ex);\n    } else {\n        System.out.println(\"Task succeeded: \" + result);\n    }\n});\n      "
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Custom Executor"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\nExecutorService customExec = Executors.newFixedThreadPool(4);\n\nCompletableFuture<String> cf = CompletableFuture.supplyAsync(\n    () -> expensiveOperation(),\n    customExec  // use custom executor instead of default pool\n);\n\ncustomExec.shutdown();\n      "
      }
    ]
  },
  {
    "id": "sec-13",
    "title": "13. Concurrent Collections",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "13. Concurrent Collections"
      },
      {
        "type": "callout",
        "variant": "note",
        "text": "Thread-safe collections use internal synchronization, allowing better concurrency than wrapping with Collections.synchronizedMap()."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "ConcurrentHashMap"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\nimport java.util.concurrent.*;\n\n// Segment-based locking (better than synchronizedMap):\nConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<>();\n\n// Normal operations:\nmap.put(\"apple\", 1);\nmap.putIfAbsent(\"banana\", 2);  // atomic: put only if absent\nint count = map.getOrDefault(\"cherry\", 0);\n\n// Atomic compound operations:\nmap.computeIfAbsent(\"date\", k -> k.length());  // put if absent + compute\n\nmap.merge(\"apple\", 1, Integer::sum);  // atomic: add value or put\n\n// Iteration is weakly consistent (safe, but may miss recent changes):\nfor (String key : map.keySet()) {\n    System.out.println(key + \": \" + map.get(key));\n}\n\n// Never throw ConcurrentModificationException during iteration\nmap.forEach((k, v) -> System.out.println(k + \": \" + v));\n      "
      },
      {
        "type": "heading",
        "level": 3,
        "text": "CopyOnWriteArrayList"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\n// Copy on write — good for reads, bad for writes:\nCopyOnWriteArrayList<String> list = new CopyOnWriteArrayList<>();\n\nlist.add(\"item1\");\nlist.add(\"item2\");\n\n// Iteration is safe even while other threads modify:\nfor (String item : list) {\n    System.out.println(item);  // never throws ConcurrentModificationException\n}\n\n// But writes are expensive (copy entire array):\nlist.add(\"item3\");  // copies array, slow\n\n// Good for: read-heavy workloads (logging, event listeners)\n// Bad for: write-heavy workloads\n      "
      },
      {
        "type": "heading",
        "level": 3,
        "text": "BlockingQueue"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\n// Bounded queue:\nBlockingQueue<String> queue = new ArrayBlockingQueue<>(5);\n\n// Blocking operations:\nqueue.put(\"item1\");           // blocks if full, throws InterruptedException\nqueue.take();                 // blocks if empty\n\n// Timeout operations:\nqueue.offer(\"item2\", 1, TimeUnit.SECONDS);    // timeout\nqueue.poll(1, TimeUnit.SECONDS);              // timeout\n\n// Non-blocking operations:\nqueue.offer(\"item3\");         // returns false if full\nqueue.poll();                 // returns null if empty\n\n// Example: work queue\nBlockingQueue<Task> workQueue = new LinkedBlockingQueue<>();\nExecutorService workers = Executors.newFixedThreadPool(2);\n\n// Producer:\nnew Thread(() -> {\n    try {\n        for (int i = 0; i < 10; i++) {\n            workQueue.put(new Task(i));\n        }\n    } catch (InterruptedException e) {}\n}).start();\n\n// Consumers:\nfor (int i = 0; i < 2; i++) {\n    workers.submit(() -> {\n        while (true) {\n            try {\n                Task task = workQueue.take();\n                task.execute();\n            } catch (InterruptedException e) {\n                Thread.currentThread().interrupt();\n                break;\n            }\n        }\n    });\n}\n      "
      },
      {
        "type": "heading",
        "level": 3,
        "text": "ConcurrentLinkedQueue"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\n// Unbounded, non-blocking queue:\nConcurrentLinkedQueue<String> queue = new ConcurrentLinkedQueue<>();\n\nqueue.offer(\"item1\");  // add to tail\nqueue.offer(\"item2\");\n\nString item = queue.poll();  // remove from head, returns null if empty\n\n// Iteration is snapshot (safe but may miss concurrent additions):\nfor (String s : queue) {\n    System.out.println(s);\n}\n      "
      }
    ]
  },
  {
    "id": "sec-14",
    "title": "14. Synchronization Aids",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "14. Synchronization Aids"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "CountDownLatch — Wait for N Events"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\nimport java.util.concurrent.*;\n\n// Main thread waits for 3 worker threads:\nCountDownLatch latch = new CountDownLatch(3);\n\nfor (int i = 0; i < 3; i++) {\n    new Thread(() -> {\n        try {\n            Thread.sleep(1000);\n            System.out.println(Thread.currentThread().getName() + \" done\");\n        } catch (InterruptedException e) {\n            Thread.currentThread().interrupt();\n        } finally {\n            latch.countDown();  // decrement count\n        }\n    }, \"Worker-\" + i).start();\n}\n\nSystem.out.println(\"Main waiting...\");\nlatch.await();  // blocks until count reaches 0\nSystem.out.println(\"All workers done!\");\n\n// With timeout:\nif (latch.await(5, TimeUnit.SECONDS)) {\n    System.out.println(\"All done in time\");\n} else {\n    System.out.println(\"Timeout reached\");\n}\n      "
      },
      {
        "type": "heading",
        "level": 3,
        "text": "CyclicBarrier — N Threads Wait for Each Other"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\n// 3 threads must all reach barrier before continuing:\nCyclicBarrier barrier = new CyclicBarrier(3,\n    () -> System.out.println(\"All reached barrier!\"));\n\nfor (int i = 0; i < 3; i++) {\n    new Thread(() -> {\n        try {\n            System.out.println(Thread.currentThread().getName() + \" working\");\n            Thread.sleep(1000 + (long)(Math.random() * 2000));\n            System.out.println(Thread.currentThread().getName() + \" at barrier\");\n            barrier.await();  // wait for all\n            System.out.println(Thread.currentThread().getName() + \" continuing\");\n        } catch (Exception e) {\n            e.printStackTrace();\n        }\n    }, \"Worker-\" + i).start();\n}\n      "
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Semaphore — Limit Concurrent Access"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\n// Allow maximum 3 threads in critical section:\nSemaphore semaphore = new Semaphore(3);\n\nfor (int i = 0; i < 10; i++) {\n    new Thread(() -> {\n        try {\n            System.out.println(Thread.currentThread().getName() + \" acquiring\");\n            semaphore.acquire();  // block if no permits\n            System.out.println(Thread.currentThread().getName() + \" in critical section\");\n            Thread.sleep(2000);\n        } catch (InterruptedException e) {\n            Thread.currentThread().interrupt();\n        } finally {\n            System.out.println(Thread.currentThread().getName() + \" releasing\");\n            semaphore.release();\n        }\n    }, \"Task-\" + i).start();\n}\n\n// Non-blocking try:\nif (semaphore.tryAcquire()) {\n    try {\n        // critical section\n    } finally {\n        semaphore.release();\n    }\n} else {\n    System.out.println(\"No permits available\");\n}\n\n// With timeout:\nif (semaphore.tryAcquire(1, TimeUnit.SECONDS)) {\n    try {\n        // critical section\n    } finally {\n        semaphore.release();\n    }\n}\n      "
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Phaser — Flexible Barrier"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\n// Phaser: like CyclicBarrier but reusable and flexible:\nPhaser phaser = new Phaser(3);  // 3 parties initially\n\nfor (int i = 0; i < 3; i++) {\n    new Thread(() -> {\n        try {\n            System.out.println(Thread.currentThread().getName() + \" phase 1\");\n            phaser.arriveAndAwaitAdvance();  // wait for all\n\n            Thread.sleep(1000);\n            System.out.println(Thread.currentThread().getName() + \" phase 2\");\n            phaser.arriveAndAwaitAdvance();\n\n            System.out.println(Thread.currentThread().getName() + \" done\");\n            phaser.arriveAndDeregister();  // deregister and advance\n        } catch (InterruptedException e) {\n            Thread.currentThread().interrupt();\n        }\n    }, \"Worker-\" + i).start();\n}\n      "
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Exchanger — Swap Data Between Two Threads"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\n// Exchanger: two threads swap objects at a synchronization point\nExchanger<String> exchanger = new Exchanger<>();\n\nThread producer = new Thread(() -> {\n    try {\n        String data = \"Hello from Producer\";\n        System.out.println(\"Producer sending: \" + data);\n        String received = exchanger.exchange(data);  // blocks until consumer exchanges\n        System.out.println(\"Producer received: \" + received);\n    } catch (InterruptedException e) {\n        Thread.currentThread().interrupt();\n    }\n});\n\nThread consumer = new Thread(() -> {\n    try {\n        String data = \"Hello from Consumer\";\n        System.out.println(\"Consumer sending: \" + data);\n        String received = exchanger.exchange(data);  // meets producer here\n        System.out.println(\"Consumer received: \" + received);\n    } catch (InterruptedException e) {\n        Thread.currentThread().interrupt();\n    }\n});\n\nproducer.start();\nconsumer.start();\n// Output:\n// Producer sending: Hello from Producer\n// Consumer sending: Hello from Consumer\n// Producer received: Hello from Consumer\n// Consumer received: Hello from Producer\n      "
      }
    ]
  },
  {
    "id": "sec-15",
    "title": "15. Virtual Threads (Java 21+) Java 21+",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "15. Virtual Threads (Java 21+) Java 21+"
      },
      {
        "type": "callout",
        "variant": "note",
        "text": "Virtual threads are lightweight threads managed by the JVM, enabling millions instead of thousands. Blocking a virtual thread doesn't block the OS thread."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Platform vs Virtual Threads"
      },
      {
        "type": "diagram",
        "format": "mermaid",
        "content": "flowchart TD\n  subgraph Platform[\"Platform Threads — 1:1 with OS (expensive)\"]\n    direction LR\n    OS1[\"OS Thread 1<br/>1 MB stack\"] --- JT1[\"Java Thread 1\"]\n    OS2[\"OS Thread 2<br/>1 MB stack\"] --- JT2[\"Java Thread 2\"]\n    OS3[\"OS Thread 3<br/>1 MB stack\"] --- JT3[\"Java Thread 3\"]\n  end\n  subgraph Virtual[\"Virtual Threads — many:1 with OS — Java 21+ (cheap)\"]\n    direction LR\n    VOS1[\"OS Thread 1\"] --> VT1[\"VT1 running\"]\n    VOS1 --> VT2[\"VT2 unmounted\"]\n    VOS1 --> VT3[\"VT3 mounted\"]\n    VOS2[\"OS Thread 2\"] --> VT4[\"VT4 running\"]\n    VOS2 --> VT5[\"VT5 unmounted\"]\n  end\n  style Platform fill:#fee2e2,stroke:#dc2626,color:#7f1d1d\n  style Virtual fill:#dcfce7,stroke:#166534,color:#14532d"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Creating Virtual Threads"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\n// Create and start virtual thread:\nThread virtual = Thread.ofVirtual()\n    .name(\"vt-\", 0)  // name pattern\n    .start(() -> System.out.println(\"Virtual thread\"));\n\n// Create platform thread (for comparison):\nThread platform = Thread.ofPlatform()\n    .name(\"pt-\", 0)\n    .start(() -> System.out.println(\"Platform thread\"));\n\n// Via ExecutorService — simplest for production:\ntry (ExecutorService vexec = Executors.newVirtualThreadPerTaskExecutor()) {\n    for (int i = 0; i < 1_000_000; i++) {  // submit a million tasks!\n        vexec.submit(() -> {\n            doWork();  // each gets own virtual thread\n        });\n    }\n}  // waits for all to complete, then shuts down\n      "
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Virtual Thread Behavior"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\n// Virtual threads make blocking I/O efficient:\nExecutorService vexec = Executors.newVirtualThreadPerTaskExecutor();\n\nfor (int i = 0; i < 100; i++) {\n    vexec.submit(() -> {\n        try {\n            // Blocking call: fetch from network\n            String response = fetchFromNetwork();  // blocks VT, not OS thread\n            System.out.println(\"Got: \" + response);\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n    });\n}\n\n// With platform threads, 100 tasks need ~100 OS threads (expensive!)\n// With virtual threads, 100 tasks need ~2-4 OS threads (cheap!)\n\n// Burdens: pinning (synchronization + native code blocks OS thread)\nsynchronized void criticalSection() {\n    // WARNING: synchronization pins the virtual thread\n    // Prefer ReentrantLock\n}\n      "
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Virtual Threads for I/O Workloads"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\n// Example: HTTP server handling many concurrent requests\ntry (ExecutorService vexec = Executors.newVirtualThreadPerTaskExecutor()) {\n    ServerSocket serverSocket = new ServerSocket(8080);\n\n    while (true) {\n        Socket clientSocket = serverSocket.accept();\n\n        // Each client gets a dedicated virtual thread:\n        vexec.submit(() -> {\n            try {\n                handleClient(clientSocket);  // blocks VT, not OS thread\n            } catch (IOException e) {\n                e.printStackTrace();\n            }\n        });\n\n        // Can handle thousands of concurrent clients!\n    }\n}\n\n// Old platform thread approach limited to ~1000 concurrent clients\n// New virtual thread approach handles 100,000+ concurrent clients\n      "
      },
      {
        "type": "heading",
        "level": 3,
        "text": "When to Use Virtual Threads"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\n// GOOD: I/O-bound workloads\nCompletableFuture.supplyAsync(\n    () -> blockingHttpCall(),  // blocking, but on virtual thread\n    Executors.newVirtualThreadPerTaskExecutor()\n);\n\n// GOOD: Handle thousands of concurrent connections\ntry (ExecutorService vexec = Executors.newVirtualThreadPerTaskExecutor()) {\n    for (int i = 0; i < 100_000; i++) {\n        vexec.submit(() -> processConnection(connection));\n    }\n}\n\n// BAD: CPU-bound work (no benefit over platform threads)\nExecutors.newVirtualThreadPerTaskExecutor().submit(() -> {\n    // Don't use virtual threads for: sorting arrays, calculating primes, etc.\n    // CPU time is CPU time, whether on platform or virtual thread\n    for (long i = 0; i < 10_000_000_000L; i++) {\n        someComputation(i);\n    }\n});\n\n// BAD: With synchronized (causes pinning)\n// Use ReentrantLock instead\n      "
      }
    ]
  },
  {
    "id": "sec-16",
    "title": "16. Structured Concurrency (Java 21+ Preview) Java 21+",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "16. Structured Concurrency (Java 21+ Preview) Java 21+"
      },
      {
        "type": "callout",
        "variant": "note",
        "text": "Structured concurrency ensures all subtasks complete successfully together or cancels all on failure — no orphaned threads."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "StructuredTaskScope.ShutdownOnFailure"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\nimport java.util.concurrent.StructuredTaskScope;\n\n// Fetch user and orders concurrently:\ntry (var scope = new StructuredTaskScope.ShutdownOnFailure()) {\n    // Fork subtasks:\n    Subtask<User> user = scope.fork(() -> fetchUserFromDb(\"123\"));\n    Subtask<List<Order>> orders = scope.fork(() -> fetchOrdersFromDb(\"123\"));\n\n    // Wait and check for failure:\n    scope.join();           // wait for all\n    scope.throwIfFailed();  // throw if any failed\n\n    // Safe to get results:\n    return new Page(user.get(), orders.get());\n} catch (ExecutionException e) {\n    // User fetch failed\n    throw new ServiceException(\"Could not load page\", e.getCause());\n} catch (InterruptedException e) {\n    Thread.currentThread().interrupt();\n    throw new ServiceException(\"Interrupted\", e);\n}\n\n// If user.fork() fails:\n// - fetchOrdersFromDb() is cancelled\n// - Both exceptions are collected\n// - scope.throwIfFailed() rethrows them\n      "
      },
      {
        "type": "heading",
        "level": 3,
        "text": "StructuredTaskScope.ShutdownOnSuccess"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\n// Return first successful result, cancel others:\ntry (var scope = new StructuredTaskScope.ShutdownOnSuccess<String>()) {\n    scope.fork(() -> tryServerA());\n    scope.fork(() -> tryServerB());\n    scope.fork(() -> tryServerC());\n\n    // Returns as soon as one succeeds\n    return scope.result();\n} catch (ExecutionException e) {\n    // All failed\n    throw new ServiceException(\"All servers down\", e.getCause());\n}\n      "
      }
    ]
  },
  {
    "id": "sec-17",
    "title": "17. ThreadLocal",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "17. ThreadLocal"
      },
      {
        "type": "callout",
        "variant": "important",
        "text": "ThreadLocal stores data per thread. Always remove() to avoid memory leaks in thread pools."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Basic ThreadLocal"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\nimport java.text.SimpleDateFormat;\n\n// Each thread gets its own SimpleDateFormat (not thread-safe):\nThreadLocal<SimpleDateFormat> threadLocalSdf =\n    ThreadLocal.withInitial(() -> new SimpleDateFormat(\"yyyy-MM-dd HH:mm:ss\"));\n\n// In any thread:\nSimpleDateFormat sdf = threadLocalSdf.get();  // thread-specific instance\nString formatted = sdf.format(new Date());\n\n// Always remove to prevent memory leak:\nthreadLocalSdf.remove();\n      "
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Request Context Example"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\n// Store current user per thread (e.g., HTTP request handler):\nclass RequestContext {\n    private static final ThreadLocal<User> currentUser = new ThreadLocal<>();\n\n    public static void setUser(User user) {\n        currentUser.set(user);\n    }\n\n    public static User getUser() {\n        return currentUser.get();  // null if not set in this thread\n    }\n\n    public static void clear() {\n        currentUser.remove();\n    }\n}\n\n// In HTTP request handler:\n@PostMapping(\"/action\")\npublic void handleRequest(HttpServletRequest req) {\n    User user = req.getSession().getAttribute(\"user\");\n    RequestContext.setUser(user);\n\n    try {\n        // Code can call RequestContext.getUser() anywhere:\n        service.doWork();  // can access user without passing it\n    } finally {\n        RequestContext.clear();  // prevent leak\n    }\n}\n      "
      },
      {
        "type": "heading",
        "level": 3,
        "text": "InheritableThreadLocal"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\n// Child threads inherit parent's value:\nInheritableThreadLocal<String> userId = new InheritableThreadLocal<>();\nuserId.set(\"user-123\");\n\nnew Thread(() -> {\n    System.out.println(\"Child sees: \" + userId.get());  // \"user-123\" inherited\n}).start();\n\n// Useful for: logging context, tracing IDs across thread boundaries\n      "
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Memory Leak Warning"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\n// WRONG in thread pool (leak):\nExecutorService exec = Executors.newFixedThreadPool(10);\n\nfor (int i = 0; i < 1000; i++) {\n    final int id = i;\n    exec.submit(() -> {\n        threadLocal.set(id);\n        // Forgot to remove!\n        // Thread is reused, next task sees id from previous task\n        // Old value stays in ThreadLocal, preventing GC\n    });\n}\n\n// CORRECT (always remove):\nexec.submit(() -> {\n    threadLocal.set(id);\n    try {\n        doWork();\n    } finally {\n        threadLocal.remove();  // always remove\n    }\n});\n\n// Or use MDC (Mapped Diagnostic Context) from logging frameworks:\ntry (MDCCloseable mdc = MDC.putCloseable(\"userId\", id)) {\n    // automatically removed when exiting try block\n}\n      "
      }
    ]
  },
  {
    "id": "sec-18",
    "title": "18. Common Concurrency Bugs",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "18. Common Concurrency Bugs"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Deadlock — Circular Lock Dependency"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\n// Two locks in circular dependency — DEADLOCK:\nObject lock1 = new Object();\nObject lock2 = new Object();\n\nThread t1 = new Thread(() -> {\n    synchronized (lock1) {\n        System.out.println(\"T1 has lock1\");\n        try { Thread.sleep(100); } catch (Exception e) {}\n\n        synchronized (lock2) {  // waits for lock2 held by t2\n            System.out.println(\"T1 has both locks\");\n        }\n    }\n});\n\nThread t2 = new Thread(() -> {\n    synchronized (lock2) {\n        System.out.println(\"T2 has lock2\");\n        try { Thread.sleep(100); } catch (Exception e) {}\n\n        synchronized (lock1) {  // waits for lock1 held by t1\n            System.out.println(\"T2 has both locks\");\n        }\n    }\n});\n\nt1.start();\nt2.start();\n// Output: T1 has lock1, T2 has lock2, then DEADLOCK — never progresses\n      "
      },
      {
        "type": "diagram",
        "format": "mermaid",
        "content": "flowchart LR\n  subgraph T1[\"Thread 1\"]\n    H1[\"holds lock1\"] -->|\"wants\"| W1[\"lock2 — BLOCKED\"]\n  end\n  subgraph T2[\"Thread 2\"]\n    H2[\"holds lock2\"] -->|\"wants\"| W2[\"lock1 — BLOCKED\"]\n  end\n  W1 -.->|\"lock2 held by T2\"| H2\n  W2 -.->|\"lock1 held by T1\"| H1\n  DEAD[\"💀 DEADLOCK<br/>Neither thread can proceed\"] \n  W1 --- DEAD\n  W2 --- DEAD\n  style T1 fill:#dbeafe,stroke:#1d4ed8,color:#1e3a5f\n  style T2 fill:#f3e8ff,stroke:#6d28d9,color:#3b0764\n  style DEAD fill:#fee2e2,stroke:#dc2626,color:#7f1d1d"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Deadlock Prevention"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\n// SOLUTION 1: Always acquire locks in same order:\nObject lock1 = new Object();\nObject lock2 = new Object();\n\nThread t1 = new Thread(() -> {\n    synchronized (lock1) {  // always lock1 first\n        synchronized (lock2) {\n            // safe, no deadlock\n        }\n    }\n});\n\nThread t2 = new Thread(() -> {\n    synchronized (lock1) {  // also lock1 first (same order!)\n        synchronized (lock2) {\n            // safe, no deadlock\n        }\n    }\n});\n\n// SOLUTION 2: Use tryLock with timeout:\nReentrantLock lock1 = new ReentrantLock();\nReentrantLock lock2 = new ReentrantLock();\n\ntry {\n    if (lock1.tryLock(1, TimeUnit.SECONDS)) {\n        try {\n            if (lock2.tryLock(1, TimeUnit.SECONDS)) {\n                try {\n                    // safe work\n                } finally {\n                    lock2.unlock();\n                }\n            }\n        } finally {\n            lock1.unlock();\n        }\n    }\n} catch (InterruptedException e) {\n    Thread.currentThread().interrupt();\n}\n\n// SOLUTION 3: Minimize lock scope, avoid nested locks\n      "
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Livelock — Infinite Retry Loop"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\n// Threads keep responding to each other, making no progress:\nclass LivelockExample {\n    public void methodA() {\n        synchronized (lockA) {\n            // if some condition\n            methodB();  // calls methodB, which calls methodA...\n        }\n    }\n\n    public void methodB() {\n        synchronized (lockB) {\n            // if some condition\n            methodA();  // back to methodA\n        }\n    }\n}\n\n// Another example:\nThread t1 = new Thread(() -> {\n    while (true) {\n        if (lockA.tryLock()) {\n            try {\n                lockB.lock();  // blocked\n            } finally { lockA.unlock(); }\n        }\n    }\n});\n\nThread t2 = new Thread(() -> {\n    while (true) {\n        if (lockB.tryLock()) {\n            try {\n                lockA.lock();  // blocked\n            } finally { lockB.unlock(); }\n        }\n    }\n});\n\n// Both threads actively trying but neither makes progress\n// (unlike deadlock, threads are not blocked, they're busy waiting)\n      "
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Starvation — One Thread Never Gets CPU"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\n// Thread with low priority never runs:\nThread highPriority = new Thread(() -> {\n    while (true) {\n        // keeps running\n    }\n});\nhighPriority.setPriority(Thread.MAX_PRIORITY);\n\nThread lowPriority = new Thread(() -> {\n    // never executes — starvation!\n});\nlowPriority.setPriority(Thread.MIN_PRIORITY);\n\n// Another form: unfair lock (holds lock indefinitely):\nsynchronized (lock) {\n    while (true) {\n        // holds lock forever, other threads starve\n    }\n}\n      "
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Memory Visibility Bug"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\n// WRONG — other thread may not see update:\nclass Counter {\n    private int count = 0;\n\n    public void increment() { count++; }\n\n    public void print() {\n        System.out.println(count);  // might print stale value\n    }\n}\n\n// FIX 1: use volatile\nclass SafeCounter {\n    private volatile int count = 0;\n    public synchronized void increment() { count++; }\n    public synchronized int get() { return count; }\n}\n\n// FIX 2: use synchronization\nclass SafeCounter2 {\n    private int count = 0;\n    public synchronized void increment() { count++; }\n    public synchronized int get() { return count; }\n}\n      "
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Lost Update (Race Condition)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\n// WRONG — race condition:\nclass Account {\n    private int balance = 1000;\n\n    public void withdraw(int amount) {\n        if (amount > balance) throw new RuntimeException(\"Insufficient\");\n        balance -= amount;  // RACE: check-then-act\n    }\n}\n\n// Timeline of lost update:\n// Thread 1: checks (1000 > 100) ✓\n// Thread 2: checks (1000 > 1000) ✓\n// Thread 1: balance = 900\n// Thread 2: balance = 0 (should be -1000!)\n\n// FIX: atomicity\nclass SafeAccount {\n    private int balance = 1000;\n\n    public synchronized void withdraw(int amount) {\n        if (amount > balance) throw new RuntimeException(\"Insufficient\");\n        balance -= amount;  // now atomic\n    }\n}\n      "
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Spurious Wakeup (seen in section 8)"
      },
      {
        "type": "code",
        "language": "java",
        "code": "\n// WRONG — doesn't recheck condition:\nsynchronized void consume() throws InterruptedException {\n    if (buffer.isEmpty()) {\n        wait();  // woken up, but buffer might be empty again!\n    }\n    int item = buffer.poll();\n}\n\n// CORRECT — recheck in loop:\nsynchronized void consume() throws InterruptedException {\n    while (buffer.isEmpty()) {  // recheck after waking\n        wait();\n    }\n    int item = buffer.poll();\n}\n      "
      }
    ]
  }
]
