# C# Fundamentals

## General

-   General purpose programming language;
-   Object Oriented;
-   Case Sensitive;
-   Strongly Typed;
-   Uses namespaces (collection of classes, its goal is to group-up classes meant for a specific purpose);
-   Needs compilation to IL (and then to native code by the CLR);
-   Naming convention:
    -   camelCase: local variables and parameters;
    -   \_camelCase: private fields;
    -   PascalCase: classes, structures, namespaces, fields, methods and properties;
    -   IPascalCase: interfaces;
-   Must provide a static "Main" method that starts the execution of the program;
-   Every method creates its own stack in which all its local variables are stored;
-   Types:
    -   Primitive: sbyte, byte, short, ushort, int, uint, long, ulong, float, double, decimal, char, bool;
        -   The "decimal" type compensates automatically for floating-point errors, it is very useful in financial and "numbers-exact" domains;
    -   Non-primitive: string, class, interface, structure, enumeration;
-   Logical AND (&): evaluates always both operands (even if the first is already false);
-   Conditional AND (&&): evaluates both operands only if the first one is true (like JavaScript);
-   Logical OR (|): evaluates always both operands (even if the first is already true);
-   Conditional OR (||): evaluates both operands only if the first one is false (like JavaScript);
-   Logical XOR (^): evaluates always both operands;
-   goto: jumps to another position (labelled) inside the same method;
-   A project can be "normal" (will produce an executable IR file) or "library" (will produce a DLL - Dynamic Link Library - that can be used in other projects, you have to create a reference in the consumer project);

## Classes

-   Classes can be either internal (default - accessible only within the same project) or public (accessible also in different projects):
    -   Optional sub-types are:
        -   static: contains only static members;
        -   abstract: can contain abstract methods, to be implemented in child classes;
        -   sealed: can't be inherited;
        -   partial: multiple partial classes with the same name can be combined into a single class;
-   Objects are stored in the Heap, methods' variables are stored in the Stack;
    -   A new Stack is created for every method call;
    -   To access an object (that is nameless), you need a reference variable that "points" to the Heap's memory location of that object (`Person person = new Person();`);
    -   An object (in Heap memory) only stores fields, the methods remain attacched to the class and are called against the object;

## Fields

-   Variables stored inside the object (declared in the class);
-   Access modifiers:

    -   private: default, accessible only in the same class;
    -   protected: accessible in the same class and in the child classes;
    -   private protected: accessible in the same class and in the child classes, but only if they are in the same project;
    -   internal: accessible everywhere (same class, child class, other class) in the same project;
    -   protected internal: accessible everywhere (same class, child class, other class) in the same project, and also in child classed of other projects;
    -   public: accessible everywhere (same class, child class, other class) both in the same project and in other projects;

-   Modifiers (optional):
    -   static: accessible without instantiating the object, common to all the objects of the same class, can be modified, stored in the class memory;
    -   const: like a static field, but its value can't be modified, must be initialized on declaration, it is not stored in memory as at compile time its occurences are substituted with the value itself;
    -   readonly: is initialized with an inline declaration or in the constructor, it is stored in the object memory itself, may be different for every object (depending on the initialization), can't be modified after being initialized;

## Methods

-   Getters and Setters: it is better to declare fields private and access them through Set and Get methods (instead of directly via public fields), better encapsulation;
-   this: refers to the "current object" on which the method is called against (only available in "non-static" methods), useful when a parameter has the same exact name of a field;
-   Named arguments: when you call a method, you can pass the argumens by their name insted of by their order (ex `Person.SetData(name: "Lukas", age: 37);`);
-   Overloading: defining multiple methods with the same name and within the same class but with different arguments' types (you can call the same method name with different arguments' types, and based on the arguments' types the "right one" will be executed);
-   Access modifiers are the exact same of fields;
-   Modifiers (optional):
    -   static:;
    -   virtual:;
    -   abstract:;
    -   override:;
    -   new:;
    -   partial:;
    -   sealed:;
-   Parameter modifiers (optional):

    -   ref: the parameter (even if it is a primitive type) is treated like a reference, and every change made inside the method is reflected outside. It must be pre-initialized and stored in a variable (no literals). Example:

    ```cs
        public void CalcData(ref int x) {
            System.Console.PrintLine(x); /// -> 5
            x = 12;
        }

        [...]

        int myData = 5;
        CalcData(ref myData);
        System.Console.WriteLine(myData); /// -> 12
    ```

    -   out: the parameter is not passed to the method, but if the method modifies it, it is passed outside. Useful for returning multiple values. It may not be already initialized, in that case you must assign it a value inside the method. Example:

    ```cs
        public void CalcData(out int x) {
            System.Console.PrintLine(x); /// -> 0
            x = 12;
        }

        [...]

        int myData = 5;
        CalcData(out myData);
        System.Console.WriteLine(myData); /// -> 12

        ///The "out" variable can be even declared inline:
        CalcData(out int myNewVar);
        System.Console.WriteLine(myNewVar); /// -> 12
    ```

    -   in: the parameter is treated as read-only inside the method, and thus can't be modified. Example:

    ```cs
        public void CalcData(in int x) {
            x = 12; /// Error! Can't assign a new value to x.
        }

        [...]

        int myData = 5;
        CalcData(in myData);
    ```

    -   params: the method can receive multiple arguments of the same type, they will be stored in a single parameter as an array. It can only be the last parameter of the method. Example:

    ```cs
        public void CalcData(int first, params int[] data) {
            /// first == 2
            /// data == [5, 3, 5, 2]
        }

        [...]

        CalcData(2, 5, 3, 5, 2);
    ```

-   Ref return: the method can return a variable as a reference. Example:

    ```cs
        class Student {
            private int _grade = 5;

            public void Print() {
                System.Console.WriteLine(_grade);
            }

            public ref int RefMethod() {
                return ref _grade;
            }
        }

        class Program {
            public void Main() {
                Student student = new Student();
                student.Print(); /// -> 5
                ref int studentGradeRef = ref student.RefMethod();
                studentGradeRef = 8;
                student.Print(); /// -> 8
            }
        }
    ```

-   Local functions: functions written directly inside a method, without the need to create another method. Functions can't be written outside methods. Access modifiers and modifiers are not applicable to local functions. Example:

```cs
    public void MyMethod() {
        int y = 15;
        int x = myLocalFn(5); /// x == 20

        int myLocalFn(int addValue) {
            return y + 5;
        }
    }
```

-   Static local functions: same as a local function, but can't access the variables or parameters of the containing method. Example:

```cs
    public void MyMethod() {
        int y = 15;
        int x = myLocalFn(5);

        static int myLocalFn(int addValue) {
            return y + 5; /// Error! Can't read y.
        }
    }
```

## Type conversion

-   Implicit casting: from lower numerical type to higher numerical type (ex. int -> long, float -> double, char -> int - here the ASCII value is used). Automatically done by the compiler, no syntax required. Signed types can't be implicitely converted to unsigned types. Double, decimal, bool and string can't be implicitely converted;
-   Explicit casting: from higher numerical type to lower numerical type (ex. int -> short, float -> byte, char -> sbyte, childClass -> parentClass). Done specifying the data type to the left hand side. The casted value may differ from the original (loosy conversion). String and bool can't be explicitely casted. Example:

```cs
    long y = 300;
    int x = (int)y; /// -> 300 (same value)
    byte z = (byte)y; /// -> 255 (max byte value, loosy conversion)

    Parent parent = (Parent)child; /// -> childClass to parentClass conversion
```

-   Parse and TryParse: from string type to numerical type (ex. string -> int, string -> float, string -> byte). The source value can only contain numerical characters, otherwise it will throw a run-time error (Parse) or return false and skip the conversion (TryParse - uses an out parameter for the conversion itself, returns wheter it was successfull). Example:

```cs
    string s = "100";

    int numInt = int.Parse(s); /// 100
    byte numByte = byte.Parse(s); /// 100

    int result; /// 100
    bool converted = int.TryParse(s, out result); /// True

    string s2 = "10.20.30";

    int numInt2 = int.Parse(s2); /// Error! Invalid string.

    int result2; /// 0
    bool converted2 = int.TryParse(s2, out result2); /// False
```

-   Conversion methods: from any primitive type to any primitive type (ex. string -> bool, string -> int, int -> byte). `System.Convert` is a predefined class that provides conversion (static) methods. If the value can't be converted, it raises a run-time exception;

## Constructor

-   Is automatically called on a new object creation, it initializes the class fields into a new object and stores it in the Heap memory. Can also contain additional logic. Gives back the object's reference;
-   Must have the same name of the class name;
-   Supports overloading;
-   Instance constructor: the "normal" constructor, executes every time a new object is created;
-   Static constructor: executes only once during the application, either when the first object of the class is created or when the class is accessed for the first time. It can initialize the static fields and run some logic required only once per class. Can't access the instance fields, must be public, can't have parameters and doesn't return any value;
-   Implicit constructor: if a class has no constructor method, then the compiler automatically creates an empty constructor for the class;
-   Object initializer: special syntax to initialize the fields (some or all) of the object along with creating the object (executes after the constructor). Example:

```cs
    Person person = new Person(){
        name: "Annette";
        age: 31;
        location: "Prague";
    }
```
