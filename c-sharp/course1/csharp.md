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
        -   static: can contain only static members;
        -   abstract: can contain abstract methods, to be implemented in child classes;
        -   sealed: can't be inherited;
        -   partial: split across multiple source files;
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

-   this: refers to the "current object" on which the method is called against (only available in "non-static" methods), useful when a parameter has the same exact name of a field;
-   Named arguments: when you call a method, you can pass the argumens by their name insted of by their order (ex `Person.SetData(name: "Lukas", age: 37);`);
-   Overloading: defining multiple methods with the same name and within the same class but with different arguments' types (you can call the same method name with different arguments' types, and based on the arguments' types the "right one" will be executed);
-   Access modifiers are the exact same of fields;
-   Modifiers (optional):
    -   static: can be called without instantiating the class;
    -   virtual: can be overridden in child classes;
    -   abstract: doesn't containt the method body, must be overridden in child classes (only available in abstract classes);
    -   override: overrides a virtual or abstract parent method;
    -   new: hides a parent method (if the child one has the same exact name and parameters);
    -   partial: is defined in a file of a partial class, and is implemented in another file of the same partial class. Partial methods must be private and void;
    -   sealed: can't be overridden in subsequent child classes;
-   Parameter modifiers (optional):

    -   ref: the parameter (even if it is a primitive type) is treated like a reference, and every change made inside the method is reflected outside. It must be pre-initialized and stored in a variable (no literals). Example:

    ```cs
        public void CalcData(ref int x)
        {
            System.Console.WriteLine(x); /// -> 5
            x = 12;
        }

        [...]

        int myData = 5;
        CalcData(ref myData);
        System.Console.WriteLine(myData); /// -> 12
    ```

    -   out: the parameter is not passed to the method, but if the method modifies it, it is passed outside. Useful for returning multiple values. It may not be already initialized, in that case you must assign it a value inside the method. Example:

    ```cs
        public void CalcData(out int x)
        {
            System.Console.WriteLine(x); /// -> 0
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
        public void CalcData(in int x)
        {
            x = 12; /// Error! Can't assign a new value to x.
        }

        [...]

        int myData = 5;
        CalcData(in myData);
    ```

    -   params: the method can receive multiple arguments of the same type, they will be stored in a single parameter as an array. It can only be the last parameter of the method. Example:

    ```cs
        public void CalcData(int first, params int[] data)
        {
            /// first == 2
            /// data == [5, 3, 5, 2]
        }

        [...]

        CalcData(2, 5, 3, 5, 2);
    ```

-   Ref return: the method can return a variable as a reference. Example:

    ```cs
        class Student
        {
            private int _grade = 5;

            public void Print()
            {
                System.Console.WriteLine(_grade);
            }

            public ref int RefMethod()
            {
                return ref _grade;
            }
        }

        class Program
        {
            public void Main()
            {
                Student student = new Student();
                student.Print(); /// -> 5
                ref int studentGradeRef = ref student.RefMethod();
                studentGradeRef = 8;
                student.Print(); /// -> 8
            }
        }
    ```

-   Local functions: functions written directly inside a method, without the need to create another method. Local functions can't be written outside methods. Access modifiers and modifiers are not applicable to local functions. Example:

```cs
    public void MyMethod()
    {
        int y = 15;
        int x = myLocalFn(5); /// x == 20

        int myLocalFn(int addValue)
        {
            return y + 5;
        }
    }
```

-   Static local functions: same as a local function, but can't access the variables or parameters of the containing method. Example:

```cs
    public void MyMethod()
    {
        int y = 15;
        int x = myLocalFn(5);

        static int myLocalFn(int addValue)
        {
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
-   Static constructor: executes only once during the application, either when the first object of the class is created or when the class is accessed for the first time. It can initialize the static fields and run some logic required only once per class. Useful to create singletons. Can't access the instance fields, must be public, can't have parameters and doesn't return any value;
-   Implicit constructor: if a class has no constructor method, then the compiler automatically creates an empty constructor for the class;
-   Object initializer: special syntax to initialize the fields (some or all) of the object along with creating the object (executes after the constructor). Example:

```cs
    Person person = new Person()
    {
        name: "Annette";
        age: 31;
        location: "Prague";
    }
```

## Properties

-   Properties expose fields: fields should be kept private and exposed only through the Set and Get accessor methods (instead of directly via public fields) for better encapsulation and abstraction level:
    -   The Set accessor can for example do some validation checks before assigning the value to the internal private field;
    -   The Get accessor can for example do some data manipulation before returning the value straight;
    -   The accessors methods are called automatically when trying to read or assign a property (just like a normal field);
    -   In the Set accessor the new value is automatically passed as an implicit parameter named "value";
    -   Both accessors can't have additional parameters;
    -   Set can't return anything, Get should return the value of the field;
-   Access modifiers for properties are the exact same of methods;
-   Modifiers for properties are the exact same of methods;
-   Access modifiers for accessor methods are the exact same of methods;
-   Read-only: exposes only the Get accessor;
-   Write-only: exposes only the Set accessor;
-   Auto-implemented: syntax-sugar for automatically creating a private field and a simple Get and Set accessor methods that just return the field or assign a new value to it respectively. You can't add additional logic to these methods. The full definition of the methods and the private field are automatically added by the compiler. Example:

```cs
    /// This (syntax-sugar):
    public int Age { get; set; }

    /// Instead of this (regular, extended syntax):
    private int _age;
    public int Age
    {
        get
        {
            return _age;
        }
        set
        {
            _age = value;
        }
    }
```

-   Auto-implemented property initializer: auto-implemented properties with a default value initializer. Example:

```cs
    public decimal TaxRate { get; set; } = 10.5;
```

## Indexer

-   Special property of a class that lets you access an instance with an array-like syntax (just like it was an array);
-   The accessor methods receive an index parameter that you can use to assign and retrieve the right data on/from your internal data structure;
-   Can't have ref and out parameter modifiers;
-   Access modifiers are the exact same of methods;
-   Modifiers are the exact same of methods, except for static that is not applicable here;
-   Example:

```cs
    class MyClass
    {
        private string[] _brands = {"Miele", "Sony", "Bosch"};

        /// Indexer
        public string this[int index]
        {
            set
            {
                if (index >= 0 && index < _brands.Lenght)
                {
                    _brands[index] = value;
                }
            }
            get
            {
                return _brands[index];
            }
        }
    }

    [...]

    /// Access the instance just like it was an array.
    MyClass myObj = new MyClass();
    string firstBrand = myObj[0]; /// Miele
    myObj[2] = "Electrolux";
```

-   Supports overloading. Example:

```cs
    class MyClass
    {
        private string[] _brands = {"Miele", "Sony", "Bosch"};

        public string this[int index]
        {
            [...]
        }
        public string this[string s]
        {
            [...]
        }
    }

    [...]

    MyClass myObj = new MyClass();
    string firstBrand = myObj[0];
    string secondBrand = myObj["second"];
```

## Inheritance

-   Syntax:

```cs
    class Parent
    {
        [...]
    }

    class Child : Parent
    {
        [...]
    }
```

-   Single: the child inherits only from one parent (that doesn't inherit from anything);
-   Multi-level: the child inherits from another child (the inheritance chain is longer than 1);
-   Hierarchical: there are multiple children from the same parent;
-   Multiple: the child has multiple parents (not allowed in C#, but can be done indirectly using interfaces). Example:

```cs
    interface A
    {
        [...]
    }

    interface B
    {
        [...]
    }

    class C : A, B
    {
        [...]
    }
```

-   Hybrid: a combination of both multi-level and hierarchical inheritance;
-   base: access the parent class members in the child class (optional, useful in case the child class has fields or methods with the exact same name of the parent class - just like using the this keyword);
-   Parent constructor: called automatically before the child constructor when instantiating a new child. If it has parameters, it has to be written in the child constructor, otherwise is optional. Example:

```cs
    /// Parent constructor with params
    class Parent
    {
        public Parent(int x)
        {
            [...]
        }
    }

    class Child: Parent
    {
        public Child(string s, int x): base(x)
        {
            [...]
        }
    }

    /// Parent constructor without params
    class Parent2
    {
        public Parent()
        {
            [...]
        }
    }

    class Child2: Parent2
    {
        public Child(string s)
        {
            [...]
        }
    }
```

-   Method hiding: hides a parent method by creating a new one with the exact same name and parameters in the child class. The new keyword has to be used. It doesn't work if the child is casted to the parent class. Example:

```cs
    class Parent
    {
        public Parent() {}

        public void Display(int x)
        {
            System.Console.WriteLine("Parent" + x);
        }
    }

    class Child: Parent
    {
        public Child() {}

        public new void Display(int x)
        {
            System.Console.WriteLine("Child" + x);
        }
    }

    Child child = new Child();
    child.Display(1); /// Child1

    Parent child2 = new Child();
    child2.Display(1); /// Parent1
```

-   Overriding: extends a parent method by creating another one with the exact same name and parameters in the child class. The virtual and overide keywords have to be used. Overriding a virtual method is optional. It works even in case the child is casted to the parent class. Example:

```cs
    class Parent
    {
        public Parent() {}

        public virtual void Display(int x)
        {
             System.Console.WriteLine("Parent" + x);
        }
    }

    class Child: Parent
    {
        public Child() {}

        public override void Display(int x)
        {
            System.Console.WriteLine("Child!" + x);
        }
    }

    Child child = new Child();
    child.Display(1); /// Child1

    Parent child2 = new Child();
    child2.Display(1); /// Child1
```

-   Sealed classes: they can't be inherited. They can't define virtual or abstract methods;
-   Sealed methods: they can't be overiddend in other child classes (assuming the parent uses the virtual or override modifier on the method);

## Abstract classes and Interfaces

-   Abstract classes: can't be instantiated, can contain abstact methods (signature methods without body, only available in abstract classes. They must be implemented in the child classes using the override modifier). Example:

```cs
    abstract class Sorter<T>
    {
        [...]

        protected abstract bool CompareElements(T a, T b)
        {
            [...]
        }
    }

    class IntSorter: Sorter<int>
    {
        protected override bool CompareElements(int a, int b)
        {
            return a > b;
        }
    }
```

-   Interfaces: can't be instantiated, can define only abstract methods and properties (that must be implemented in the child classes). All the interface methods and properties are public by default and can't have a different access modifier. The override keyword in the child class is not needed. Example:

```cs
    interface IVehicle
    {
        string FuelType { set; get; }
        int GetWheels();
        void Drive();
    }

    class Car: IVehicle
    {
        string FuelType { set; get; }

        int GetWheels()
        {
            return 4;
        }

        void Drive()
        {
            System.Console.WriteLine("Vroooom!!");
        }
    }
```

-   Polymorphism: defines different implementations of the same method in the same class or different classes;

    -   Compile-time (early binding / static polymorphism): overloading;
    -   Run-time (late binding / dynamic polymorphism): overriding. Example:

    ```cs
        interface IVehicle
        {
            void Drive();
        }

        class Car: IVehicle
        {
            void Drive()
            {
                System.Console.WriteLine("Brum brum brum!");
            }
        }

        class Truck: IVehicle
        {
            void Drive()
            {
                System.Console.WriteLine("Vrooooooooom!");
            }
        }

        IVehicle instance = new Car();
        instance.Drive(); /// Brum brum brum!
        instance = new Truck();
        instance.Drive(); /// Vrooooooooom!
    ```

-   Multiple inheritance: a child class can inherit from multiple interfaces (but not from multiple classes);
-   Interface inheritance: an interface can inherit from another interface (but not from a class);
-   Explicit interface implementation: creating two methods with the same exact signature in two different interfaces and implementing both them in the same child class, so that they are called alternatively based on the interface casting. They can't have an access modifier. Example:

```cs
    interface IPoint
    {
        void Draw();
    }

    interface ICircle
    {
        void Draw();
    }

    class CirclePoint: IPoint, ICircle
    {
        void IPoint.Draw()
        {
            System.Console.WriteLine("Point");
        }

        void ICircle.Draw()
        {
            System.Console.WriteLine("Circle");
        }

        public void Draw()
        {
            System.Console.WriteLine("Circle Point");
        }
    }

    IPoint a = new CirclePoint();
    a.Draw(); /// Point
    ICircle b = new CirclePoint();
    b.Draw(); /// Circle
    CirclePoint c = new CirclePoint();
    c.Draw(); /// Circle Point
```

## Namespaces

-   Collections of classes, interfaces, structures, delegates and enumerations. A namespace can span multiple files (but will be always treated as one-per-name);
-   Nested: a namespace (inner) created inside another namespace (outer);
-   Using: top level statement that imports all the members of a namespace so that there is no need to type the namespace name again. Inner (nested) namespaces are not automatically imported. Example:

```cs
    /// With using;
    using System;

    Console.WriteLine();
    Console.ReadLine();

    /// Without using
    System.Console.WriteLine();
    System.Console.ReadLine();
```

-   Alias: uses another name for the namespace. Useful to shorten namespace names and deal with naming conflicts. Example:

```cs
    using OS = System;
    using SysConsole = System.Console;
    using MyConsole = MyNamespace.Console;

    OS.Console.WriteLine(); /// Shorten syntax

    /// Avoid name conflicts
    SysConsole.WriteLine();
    MyConsole.Print();
```

-   Static: imports a static class from a namespace so that you can use its static members without even typing the class name. Example:

```cs
    using static System.Console;

    WriteLine("Called without typing neither the namespace nor the class name!");
```

## Partial, Static and Enumerations

-   Partial class: it is splitted across multiple files, but is treated and instantiated as a single normal class. The different "parts" must have the same namespace, name, access modifier and modifier. Example:

```cs
    /// Car_1.cs
    partial class Car {
        protected int wheels;
    }

    /// Car_2.cs
    partial class Car {
        public void Drive() {}
    }
```

-   Partial structure: the same as partial class applies;
-   Partial interface: the same as partial class applies;
-   Partial method: is defined in a file of a partial class, and is implemented in another file of the same partial class. Partial methods must be private and void;
-   Static class: can contain only static members, can't inherit from other classes or interfaces, can't be inherited, can't be instantiated;
-   Enumeration: collection of integer numerical constants, supports the same access modifiers and modifiers as classes. Syntax:

```cs
    public enum CarType {
        Coupe,          /// 0 - default
        Convertible,    /// 1 - default
        Sport = 100     /// 100 - overridden
    }

    CarType myCar = CarType.Sport; /// 100
```

## Structures

-   Value types: structures and enumerations;
    -   Meant for simple values;
    -   Stored in tha Stack (a new one for every method call);
    -   Internally derived from System.ObjectType->System.ValueType;
-   Reference types: stings, classes, interfaces and delegates;
    -   Meant for complex values;
    -   Stored in the Heap (one for the entire program);
    -   Accessible via reference variables (stored in the Stack, pointing to the Heap);
    -   Internally derived from System.ObjectType;
-   Structures VS classes: only meant for simple values, faster, stored in the Stack, don't support inheritance (but can implement interfaces), don't support abstract or virtual methods, don't support protected or protected internal access modifiers, don't support custom parameter-less-constructors or destructors, if you create a parameterized-constructor you must also initialize all the fields, can't initialize non-static fields in the declaration, isn't nullable, they "new" keyword is not required if all the fields are then manually initialized. Example:

```cs
    public struct Category {
        public int Id { set; get; }
        public string Name { set; get; }
        public void Print()
        {
            System.Console.WriteLine(Id + " - " + Name);
        }
    }

    Category cat;
    cat.Id = 1001;
    cat.Name = "Beverages";
    cat.Print(); /// 1001 - Beverages

    Category cat2 = new Category();
    cat2.Name = "Food";
    cat2.Print(); /// 0 - Food

    cat2 = cat;
    cat2.Id = 9999;
    cat2.Print(); /// 9999 - Beverages
    cat.Print(); /// 1001 - Beverages
```

-   Readonly structures: all the fields are readonly and can be assigned only in a parameterized constructor;
-   Primitive types: all primitive types (excepts strings) are internally structures;

## System.Object

-   Is the "ultimate" super/base class of everything in .NET, even of primitive types (that are derived from System.ValueType, which is itself a child of System.Object);
-   Is directly or indirectly the parent class of everything;
-   Everything can be casted to System.Object (for example even integers);
-   Some of its methods are virtual and can be overridden in child classes:
    -   `bool Equals(System.Object value)`: compares two objects and return whether they are equal or not;
    -   `int GetHashCode()`: returns an hashcode representing the object;
    -   `string ToString()`: returns a string representing the object;
-   The "object" keyword is a syntax-sugar for "System.Object";
-   Boxing: conversion from value-type to reference-type (the value is shifted from the Stack to the Heap);
-   Unboxing: conversion from reference-type to value-type (the value is shifted from the Heap to the Stack), only possible for values that can be converted to value-types;
-   Boxing is automatic, unboxing requires explicit casting. Example:

```cs
    int number = 12;
    Syste.Object myNumber = number; /// Automatic boxing
    int mySecondNumber = (int) myNumber; /// Explicit unboxing
```

## Generics

-   Parameters that specify a dynamic type across a class, method, interface or delegate. Any data type is accepted, primitive or not. Example:

```cs
    class MyClass<T>
    {
        public T Data { set; get; }
        public bool CheckData(T data) {}
        public bool GenericMethod<U, V>() {}
    }

    MyClass<string> c = new MyClass<string>();
    c.Data = "Hello!";

    MyClass<int> c2 = new MyClass<int>();
    c2.Data = 15;

    MyClass<MyOtherClass> c3 = new MyClass<MyOtherClass>();
    c3.Data = new MyOtherClass();
```

-   Constraints: a generic can be constrained to be more specific about the types it can accept. Example:

```cs
    class MyClass<T, U> where T: class where U: int, string /// Only classes are accepted for T, only integers or strings are accepted for U
    {
        public U Calculate(T data) {}
    }
```

## Nullability

-   Non-nullable: value types;
-   Nullable: reference types;
-   Is possible to convert non-nullable types to nullable types. Example:

```cs
    int x = null; /// Error! Int type is non-nullable

    Nullable<int> y = null; /// Ok!
    int? z = null; /// Ok! Sintax-sugar

    if (z.HasValue) /// Property available after conversion, checks whether a value has been assigned
    {
        int k = z.Value; /// Property available after conversion, gives back the real value (unboxed)
    }
```

-   Null coalescing operator: returns the right-hand operand only if the left-hand one is null. The right-hand type must be the same of the left-hand. Example:

```cs
    int a = 0 ?? 10; /// 0
    int b = null ?? 10; /// 10
    System.Console.WriteLine(a ?? "no value"); /// Error! left-hand is int and right-hand is string
```

-   Null propagation operator: access the right-hand only if the left-hand is not null. Example:

```cs
    MyClass c;  /// Null
    int? x;     /// Null

    x = c.Prop; /// Error! c is null
    x = c?.Prop;/// null
```

## Extension Methods and Pattern Matching

-   Extension methods: methods injected into an existing class/struct/interface from the outside. Useful to enrich pre-defined, system or library classes with additionl methods without modifying their source code. You must create a static class, and the extension method must have the target class as first parameter. Inside an extension method you can't use private or protected members of the target class. It can't be overridden. Example:

```cs
    class SystemClass {} /// Source code not accessible

    static class MyClass {
        public static void MyExtensionMethod(this SystemClass sc, int x) {
            sc.SystemPublicMethod();
            System.Console.WriteLine(x);
        }
    }

    SystemClass c = new SystemClass();
    c.MyExtensionMethod(10); /// 10
```

-   Pattern matching: allows you to declare a new variable while checking the data type (class) of an already existing reference variable and automatically type-casts the reference variable in the specified data type (class) in the new variable. Example:

```cs
    /// Without pattern matching
    if (myVar is MyClass) {
        MyClass c = (MyClass) myVar;
        c.MyClassMethod();
    }

    /// With pattern matching
    if (myVar is MyClass c) {
        c.MyClassMethod();
    }

```

-   Implicitly typed variables: declared with the "var" keyword, their type is implicitly inferred by the compiler. They must be initialized at declaration and their type can't change afterwards. They can only be local variables inside a method. Example:

```cs
    var x;           /// Error! must be initialized
    var y = "Hello"; /// Implicity typed as string
    y = 10;          /// Error! the type can't change
```

-   Dynamically typed variables: declared with the "dynamic" keyword, their type is not fixed and can change. They are not type-checked by the compiler, and thus there is a greater risk of bugs. Example:

```cs
    dynamic x;  /// Null
    x = 10;     /// Int
    x = "Test"; /// String
    x.Print();  /// Run-time error (not checked during compilation)
```

-   Inner classes: are defined inside another class, by default are private and thus accessible in the outer class only (but can be changed using other access modifiers). Example:

```cs
    class MyOuterClass
    {
        static void Calculate()
        {
            MyInnerClass c1 = new MyInnerClass();
            MyInnerPublicClass c2 = new MyInnerPublicClass();
        }


        class MyInnerClass {}
        public class MyInnerPublicClass {}
    }

    MyOuterClass.MyInnerClass c1 = new MyOuterClass.MyInnerClass(); /// Error!
    MyOuterClass.MyInnerPublicClass c2 = new MyOuterClass.MyInnerPublicClass();
```

## Garbage collection, Destructors, IDisposable

-   Garbage collection: automatic process (done by the CLR) to delete unreachable objects (with a reference count of 0) from the Heap to free up unused memory. It usually runs when the CLR can't find unused space to allocate new objects. The Heap is usually ~64MB at the start, but is extendable. If after the GC process the space is not yet enough, then the CLR requests the OS to extend its Heap memory. Stacks don't need GC as they are completely destroyed at the end of the methods;
-   `GC.Collect()`: method to manually invoke the garbage collection process;
-   Managed resources: allocated and garbage collected by the CLR;
-   Unmanaged resources: objects that are not managed by the CLR, and thus are not garbage collected (ex. file streams, database connections). They can cause memory leaks. They require manual destruction via:

    -   Destructor: method that runs automatically before de-allocating an object (GC) or before the end of the program, where you can perform the clean-up of unmanaged resources (like closing a DB connection). Is public and can't have parameters or return values. Can be defined only in classes (not in structs or interfaces). Is unique to the class and doesn't support overloading. Is converted to the .NET "Finalize()" method after the compilation, in the IL. Example:

    ```cs
        public class MyClass
        {
            public MyClass()
            {
                System.Console.WriteLine("Constructor");
                /// Set up unmanaged resource, ex. open DB connection
            }

            ~MyClass()
            {
                System.Console.WriteLine("Destructor");
                /// Destroy unmanaged resource, ex. close DB connection
            }
        }
    ```

    -   IDisposable: pre-defined interface, has a "Dispose" method, which is used to clean-up unmanaged resources after the end of a specific task, it needs to be called manually or via the "using" declaration. Can't return values (must be Void). Usually better than Destructor, as is not sure when the Destructor will be called, as it needs the GC process to run. Example:

    ```cs
        public class MyClass: System.IDisposable
        {
            [...]

            public void Dispose()
            {
                System.Console.WriteLine("Dispose");
                /// Destroy unmanaged resource, ex. close DB connection
            }
        }

        MyClass c = new MyClass();

        [...]

        c.Dispose();
    ```

-   Using declaration: creates an object only for a specific block of code or method. After that block or method the Dispose method is automatically called and the object destroyed. Example:

```cs
    public void MyMethod()
    {
        using (MyClass c = new MyClass())
        {
            [...]
        }
        /// Here c.Dispose() is called and then c is destroyed

        [...]
    }

    /// Syntax-sugar
    public void MyMethod()
    {
        using MyClass c = new MyClass()

        [...]

    } /// At the end of the method c.Dispose() is called and then c is destroyed

```

## Delegates and Events

-   Delegate: object that stores the reference of one or more methods that are compatible with the delegate type (delegate types are internally classes) in order to undirectly call them. Useful in relation to events: events are internally delegates. They are derived from System.Delegate. You can call the stored methods with the Invoke method of the delegate object. Example:

    ```cs
        namespace MyNamespace
        {
            /// Delegate type (internally is a class derived from System.Delegate)
            public delegate int GetValueDelegate(int x, int y);

            public class MyClass
            {
                public int CalculateValue(int valueA, int valueB)
                {
                    return valueA * valueB;
                }

                public int AddValues(int valueA, int valueB)
                {
                    return valueA + valueB;
                }

                public void Print()
                {
                    System.Console.WriteLine("Hello");
                }
            }
        }

        using MyNamespace;

        /// The class from which the methods are delegated must be instantiated
        MyClass c = new MyClass();

        /// Delegate objects (the new keyword is optional)
        GetValueDelegate myDelegate = c.CalculateValue;
        GetValueDelegate myDelegate2 = new GetValueDelegate(c.Print); /// Error! MyClass.Print is not compatible with the delegate type

        /// Call the stored methods
        int res = myDelegate.Invoke(3, 2); /// 6
    ```

    -   Single-cast: contains the reference of only one compatible method;
    -   Multi-cast: contains the references of multiple compatible methods, its return value is the return value of the last executed method. Example:

    ```cs
        MyClass c = new MyClass();

        GetValueDelegate myMultiCastDelegate = c.AddValues;
        /// Sustitute method with =
        myMultiCastDelegate = c.CalculateValue;
        /// Store multiple methods with +=
        myMultiCastDelegate += c.AddValues;

        int res = myMultiCastDelegate.Invoke(3, 2); /// 5
    ```

-   Event: multi-cast delegate that is created and invoked in a "publisher" class, where its "subscribers" are the stored methods. The "event" keyword is used, it provides the "add" and "remove" accesor properties to manage the list of subscribers (the delegate). The stored methods can be invoked by calling the delegate itself. Events can be static, virtual, sealed and abstract. They can be in interfaces too. If invoked with no subscribers, they will throw a run-time error. Example:

```cs
    public delegate void OnNewsCallbacks(string newsText);

    public class Subscriber
    {
        public void OnNewsItem(string text)
        {
            System.Console.WriteLine("Incoming news: " + text);
        }
    }

    public class Publisher
    {
        private OnNewsCallbacks _newsSubscribers;

        public event OnNewsCallbacks NewsEvent
        {
            add
            {
                /// Like the Set method for properties, the value parameter is automatically provided
                _newsSubscribers += value;
            }
            remove
            {
                /// Executes when a subscriber cancels the subscription
                _newsSubscribers -= value;
            }
        }

        public void RaiseNewsEvent()
        {
            string newsText = "COOL HEADLINE!";

            /// Check that there is at least one subscriber, otherwise it will throw a run-time error
            if (_newsSubscribers !== null)
            {
                _newsSubscribers(newsText);
            }
        }
    }

    Publisher p = new Publisher();
    Subscriber s = new Subscriber();

    p.NewsEvent += s.OnNewsItem; /// Automatically calls the NewsEvent.Add method
    p.RaiseNewsEvent(); /// Incoming news: COOL HEADLINE!
```

-   Auto-implemented: syntax-sugar to declare events, it auto-generates the private delegate and its add and remove accessors. You can't add custom logic to the add and remove accessors. Example:

    ```cs
        public class Publisher
        {
            public event OnNewsCallbacks NewsEvent;

            public void RaiseNewsEvent()
            {
                string newsText = "COOL HEADLINE!";
                if (NewsEvent !== null)
                {
                    NewsEvent(newsText);
                }
            }
        }

        Publisher p = new Publisher();
        Subscriber s = new Subscriber();

        p.NewsEvent += s.OnNewsItem;
        p.RaiseNewsEvent(); /// Incoming news: COOL HEADLINE!
    ```

-   Anonymous method: nameless method that can be invoked from a delegate (or event). Access modifiers and modifers are not applicable. The keyword delegate is necessary (even though it is not a delegate). It can't contain "goto", "break" or "continue" statements. It can't access ref or out parameters from outer methods. Example

```cs
    p.NewsEvent += delegate (string eventData)
        {
            System.Console.WriteLine("A NewsEvent came! - " + eventData);
        }
```

-   Lambda expression: syntax-sugar for creating anonymous methods (no "delegate" keyword is needed). The parameters' types are inferred from the delegate/event type. Example:

    ```cs
        p.NewsEvent += (eventData) =>
        {
            System.Console.WriteLine("A NewsEvent came! - " + eventData);
        }
    ```

    -   Inline: lambda expression with a single-expression body (doesn't require curly braces). Must return a value, can't be void. Example:

    ```cs
        public delegate int AdditionEventCallbacks(int a, int b);
        public event AdditionEventCallbacks AdditionEvent;

        [...]

        p.AdditionEvent += (a, b) => a + b;
    ```

-   Func: pre-defined generic delegate-type, has up to 16 parameters and returns a value. Example:

```cs
    public event Func<int, int, int, string> MyFuncEvent;

    MyFuncEvent += (a, b, c) => "Sum: " + (a + b + c);
```

-   Action: pre-defined generic delegate-type, has up to 16 parameters and doesn't return a value (must be void). Example:

```cs
    public event Action<int, int, int> MyActionEvent;

    MyActionEvent += (a, b, c) =>
    {
        System.Console.WriteLine("Sum: " + (a + b + c));
    }
```

-   Predicate: pre-defined generic delegate-type, has exactly one parameter and returns a boolean value. Example:

```cs
    public event Predicate<int> MyPredicateEvent;

    MyPredicateEvent += (x) => x > 0;
```

-   EventHandler: pre-defined generic delegate-type, has two fixed parameters that are "object sender" and "EventArgs e", and doesn't return a value (must be void). The second parameter is usually a child class of EventArgs (defined vie the generic). Example:

```cs
    public class MyEventArgs: EventArgs
    {
        public string Text { get; set; }
        public int Number { get; set; }
    }

    [...]

    public event EventHandler<MyEventArgs> MyEventHandlerEvent;

    MyEventHandlerEvent += (sender, e) =>
    {
        /// sender -> System.Object type, represents the source object from which the event was originally raised. Needs manual type-casting.
        MyPublisherClass p = (MyPublisherClass) sender;

        /// e -> MyEventArgs type (via the generic), represents all the additional parameters passed to the event handler method.
        string t = e.Text;
        int n = e.Number;

        System.Console.WriteLine("Data: " + t ", " + n : "." );
    };

    [...]

    /// Create the second parameter for the EventHandler event
    MyEventArgs params = new MyEventArgs()
    {
        Text = "Hello",
        Number = 12
    }

    /// Invoke the methods
    if (MyEventHandlerEvent != null)
    {
        MyEventHandlerEvent(this, params); /// Data: Hello, 12.
    }
```

-   Expression tree: tree-like data structure that represents an expression. Stores WHAT we want to do (source code), instead of HOW we want to do it (compiled IL). Mostly used for language-conversion purposes. Heavily used in LINQ. The source code is thus represented in a tree structure, that is easier to inspect, navigate and modify than the compiled IL output. It is useful for example to parse a C# expression to SQL code. The LINQ-to-SQL translator can better understand WHAT we want to do in order to create the appropriate SQL query. It can be manually compiled via the "Compile" method, that returns a delegate, that can be executed via the Invoke method. The "Expression" class must be used. It can contain only inline lambda expressions (no multi line). Example:

```cs
    Expression<Func<int, int>> myExpression = num => num * num;

    Func<int, int> myDelegate = myExpression.Compile();
    int res = myDelegate.Invoke(5); /// 25
```

-   Expression bodied members: use an inline lambda expression to creade methods, property accessors, constructors, destructors or indexers in a class. Example:

```cs
    class MyClass
    {
        /// This
        public int GetSum(int a, int b) => a + b;
        /// Instead of this
        public int GetSum(int a, int b)
        {
            return a + b;
        }
    }
```

-   Switch expression: short-version of a "normal" switch statement. It is used to assign a value into a resultVariable based on the value of a sourceVariable (like a mapping). Example:

```cs
    int num = 3;
    string res;
    /// This
    res = num switch
    {
        1 => "One",
        2 => "Two",
        3 => "Three",
        _ => "Default"
    }
    /// Instead of this
    switch (num)
    {
        case 1:
            res = "One":
            break;
        case 2:
            res = "Two":
            break;
        case 3:
            res = "Three":
            break;
        default:
            res = "Default";
            break;
    }
```

## Arrays

-   Array: group of multiple elements of the same type. You must specify a size or initialize all its values in order to create and use it. Is not automatically resized in case of new or deleted elements. Is an object and thus is stored in the Heap (in continuous memory locations) and is accessed via a reference variable. Starts from 0. Example:

```cs
    short[] myArrayReference = new short[4]; /// Set the exact size
    short[] myArrayReference2 = new short[]{
        /// OR initialize its elements (size is implicitely 4)
        1, 2, 3, 4
    };
    bool res = myArrayReference2[0] == 1; /// True
```

-   Iteration:
    -   For loop:
    ```cs
        int[] arr = new int[4];
        for (int i = 0; i < arr.Lenght; i++){
            System.Console.WriteLine(arr[i]);
        }
    ```
    -   Foreach loop (internally uses iterators):
    ```cs
        int[] arr = new int[4];
        foreach (int element in arr){
            System.Console.WriteLine(element);
        }
    ```
-   System.Array: arrays are derived from the System.Array class (that is derived from System.Object);
    -   Useful properties: Length;
    -   Useful methods: IndexOf (linear search), BinarySearch, Clear, Resize, Sort, Reverse, CopyTo (needs you to first create the new array to clone the elements into, performs a shallow copy), Clone (automatically creates a new array for the output, needs you to type-cast the output, performs a shallow copy);
-   IndexFromEnd operator `^`: treats the index as if the array was reversed. Example:

```cs
    int[] arr = new int[]{ 1, 2, 3, 4 };
    System.Console.WriteLine(arr[0]);   /// 1
    System.Console.WriteLine(arr[^0]);  /// 4
    System.Console.WriteLine(arr[^3]);  /// 1
```

-   Range operator `..`: returns a subset of the array. Example:

```cs
    int[] arr = new int[]{ 1, 2, 3, 4, 5, 6 };
    int[] arr2 = arr[0..2];   /// [1, 2, 3]
    int[] arr3 = arr[2..3];   /// [3, 4]
    int[] arr4 = arr[4..4];   /// [5]
```

-   Multi-dimentional:

```cs
    /// 2 dimensions (ex. 3x4)
    int[,] arr2D = new int[]
    {
        {2, 4, 6, 8},
        {3, 6, 9, 12},
        {4, 8, 12, 16},
    };

    System.Console.WriteLine(arr2D[1, 0]); /// 3
    System.Console.WriteLine(arr2D[2, 3]); /// 16

    /// 3 dimensions (ex. 2x5x8)
    int[,,] arr3D = new int[2, 5, 8];

    System.Console.WriteLine(arr3D[1, 1, 1]); /// 0 (default value)

    /// And so on for more than 3 dimensions
```

-   Jagged (the number of "columns" inside each "row" can vary):

```cs
    int[][] jagged = new int[5][]
    {
        new int[] {2, 4, 6, 8},
        new int[] {3, 6},
        new int[] {4, 8, 12, 16, 20, 24, 28},
        new int[] {5, 10, 15},
        new int[] {6}
    };

    System.Console.WriteLine(arr[0][1]); /// 4
    System.Console.WriteLine(arr[3][2]); /// 15
```

-   Mixing Jagged and Multi-dimensional:

```cs
    int[][,] jagged2DArray = new int[3][,]
    {
        new int[,] {
            {1,3},
            {5,7}
        },
        new int[,] {
            {0,2},
            {4,6},
            {8,10}
        },
        new int[,] {
            {11,22},
            {99,88},
            {0,9}
        }
    };

    System.Console.WriteLine(arr[0][0, 1]); /// 3
    System.Console.WriteLine(arr[1][2, 1]); /// 10
    System.Console.WriteLine(arr[2][1, 0]); /// 99
```

-   Array of objects:

```cs
    MyClass[] myClassArray = new MyClass[3];

    MyClass[] myClassArray2 = new MyClass[] {
        new MyClass('A'),
        new MyClass('B'),
        new MyClass('C')
    };

    char myLetter = myClassArray2[1].MyLetter; /// B
```

-   Deep-copy: copy objects by creating new instances instead of by just copying their references over;

    -   ICloneable: interface that is recommended to be implemented when deep cloning objects (to guarantee consistency across the codebase). Example:

    ```cs
        class Person
        {
            public string Name { get; set; }
            public int Age { get; set; }
        };

        Person p = new Person() {
            Name: "Lukas", Age: 25
        };
        Person p2 = p;

        p.Age = 999;
        System.Console.WriteLine(p2.Age); /// 999 -> Changed! It was shallow-copied

        class CloneablePerson: System.ICloneable
        {
            public string Name { get; set; }
            public int Age { get; set; }
            public System.Object Clone()
            {
                return new CloneablePerson()
                {
                    Name: this.Name,
                    Age: this.Age
                }
            }
        };

        CloneablePerson cp = new CloneablePerson
        {
            Name: "Lukas", Age: 25
        };
        CloneablePerson cp2 = (CloneablePerson) cp.Clone(); /// Type-cast needed: the return type is System.Object

        cp.Age = 999;
        System.Console.WriteLine(cp2.Age); /// 25 -> Didn't change! It was deep-copied
    ```

## Collections

-   Standard-way to store and manipulate groups of elements;
    -   We don't need to know and specify its size in advance;
    -   Provide useful methods and properties to store/access/manipulate the data;
-   Types of collections:

    -   List: contains elements of the same type. Index based. Needs to be imported from `System.Collections.Generic`. Internally uses arrays;

        -   Useful properties: Count (number of items stored), Capacity (number of storable items before it resizes itself, can be passed as argument in the constructor);
        -   Useful methods: Add (at the end), AddRange, Insert (at a specific index - less than Count), InsertRange, Remove (a value), RemoveAt (a index), RemoveRange, RemoveAll (based on a Predicate), Clear (empties the List), IndexOf, BinarySearch, Contains, Sort (needs "IComparable" items), Reverse, ToArray (returns an array representing the collection, performs a shallow copy), ForEach, Exists (executes a Predicate on each item, returns true if at least one matches the condition), Find (finds the first value based on a Predicate), FindIndex (Predicate based), FindLast (Predicate based), FindLastIndex (Predicate based), FindAll (Predicate based - returns a new collection with the matching items), ConvertAll (applies a lambda expression to all the items and returns the resulting List - like Map in JS);
        -   Example:

        ```cs
            using System;
            using System.Collections.Generic;

            List<Person> myPersonList = new List<Person>();
            List<int> myIntList = new List<int>()
            {
                /// Initialize some values
                10, 20, 30
            };

            for (int i = 0; i < myIntList.Count; i++)
            {
                Console.WriteLine(myIntList[i]); /// 10 20 30
            }

            myIntList.Add(40);
            myIntList.Insert(0, -10);

            foreach (int item in myIntList)
            {
                Console.WriteLine(item); /// -10 10 20 30 40
            }

            List<int> matches = myIntList.FindAll(x => x > 20);
            matches.ForEach(match => { Console.WriteLine(match); }); /// 30 40
        ```

    -   Dictionary: contains a collection of key/value pairs stored at specific and fixed indexes (that are calculated hashing the key). The hash of a numeric type is the number itself. The hash of a custom class needs to be manually calculated by implementing the GetHashCode method of the System.Object class. The retrieval time is O(1). Keys can't be null or duplicated. Internally is an Hashtable. Needs to be imported from `System.Collections.Generic`;

        -   Useful properties: Count, Keys (returns all the keys), Values (returns all the values);
        -   Useful methods: Add, Remove, ContainsKey, ContainsValue, Clear;
        -   Example:

        ```cs
            using System.Collections.Generic;

            Dictionary<string, Person> peopleDic = new Dictionary<string, Person>()
            {
                {"Lukas", new Person()},
                {"Annette", new Person()},
                {"Yulia", new Person()}
            };

            foreach (KeyValuePair<string, Person> item in peopleDic)
            {
                Console.WriteLine(item.Key); /// Lukas Annette Yulia
                Person value = item.Value;
            }

            Person lukas = peopleDic["Lukas"];

            /// Get keys
            Dictionary<string, People>.KeyCollection peopleKeys = peopleDic.Keys; /// Lukas Annette Yulia
        ```

    -   Hashtable: similar to a Dictionary, but can store different types of key/value pairs at the same time (ex. int, string, MyClass, etc.), thus it returns always a System.Object type that needs to be casted. Needs boxing/unboxing for value types (slower than Dictionary). Needs to be imported from `System.Collections`;

        -   Useful properties: same as Dictionary;
        -   Useful methods: same as Dictionary;
        -   Example:

        ```cs
            using System.Collections;

            Person lukas = new Person();
            Hashtable myHashTable = new Hashtable()
            {
                {"Lukas", lukas},
                {2, 14},
                {lukas, "test"},
            }
            myHashTable.Add("Anna", new Person());
            myHashTable[lukas] = "valUpdated";

            foreach (DictionaryEntry item in myHashTable)
            {
                if (item.Key is string)
                {
                    Console.WriteLine(item.Key); /// Lukas Anna
                }
                if (item.Value is string)
                {
                    Console.WriteLine(item.Value); /// valUpdated
                }
            }

            int myNumber = System.Conver.ToInt(myHashTable[2]);
            string myValue = System.Conver.ToString(myHashTable[lukas]);
            Person myPerson = myHashTable["Anna"] as Person;

        ```

    -   HashSet: contains a collection of values, like a Dictionary, but without keys. The hash is calculated using the values themselves (that must implement the GetHashCode method). Values can't be duplicated and can't be of different types (unlike an Hashtable). Needs to be imported from `System.Collections.Generic`;

        -   Useful properties: Count;
        -   Useful methods: Add, Remove, RemoveWhere (based on a Predicate), Contains, Clear, UnionWith (add the items contained in another HashSet), ExceptWith (removes the items contained in another HashSet), IntersectWith (keeps only the common items with another HashSet);
        -   Example:

        ```cs
           using System.Collections.Generic;

            HashSet<string> allPeople = new HashSet<string>()
            {
                "Lukas",
                "Marco",
                "Julie"
            };

            foreach (string item in allPeople)
            {
                /// It follows the insertion order
                Console.WriteLine(item); /// Lukas Marco Julie
            }

            bool isLukasIn = allPeople.Contains("Lukas"); /// True

            HashSet<string> newPeople = new HashSet<string>()
            {
                "Annette",
                "Maria"
            };

            allPeople.UnionWith(newPeople); /// Lukas Marco Julie Annette Maria
            allPeople.ExceptWith(newPeople); /// Lukas Marco Julie
            allPeople.IntersectWith(newPeople); /// empty
        ```

    -   SortedList: contains a collection of key/value pairs, automatically sorted by their keys. Keys can't be null or duplicated. Needs to be imported from `System.Collections.Generic`;

        -   Useful properties: same as Dictionary;
        -   Useful methods: same as Dictionary + IndexOfKey, IndexOfValue;
        -   Example:

        ```cs
            using System.Collections.Generic;

            SortedList<string, Person> people = new SortedList<string, Person>()
            {
                {"Lukas", new Person()},
                {"Annette", new Person()},
                {"Yulia", new Person()}
            };

            foreach (KeyValuePair<string, Person> item in people)
            {
                Console.WriteLine(item.Key); /// Annette Lukas Yulia
                Person value = item.Value;
            }

            Person lukas = people["Lukas"];
        ```

    -   ArrayList: like an array, but can contain different types of values. Values can be null or duplicated. Requires casting on retrieving the values (like an Hashtable). Needs to be imported from `System.Collections`;

        -   Useful properties: Capacity, Count;
        -   Useful methods: Add, AddRange, Insert, InsertRange, Remove, RemoveAt, RemoveRange, Clear, IndexOf, BinarySearch, Contains, Sort, Reverse, ToArray;
        -   Example:

        ```cs
            using System.Collections;

            ArrayList values = new ArrayList()
            {
                1040,
                "Maria",
                new Person()
            };

            foreach (System.Object item in values)
            {
                if (item is string) {
                    Console.Write(item); /// Maria
                }
            }

            int n = System.Convert.ToInt(values[0]);
            Person p = values[2] as Person;
        ```

    -   Stack: contains a group of elements of the same type based on LIFO (Last-In-First-Out). Values can be null or duplicated. Hasn't the "Add" method, and thus can't be default-initialized (can be done only as a constructor argument). Needs to be imported from `System.Collections.Generic`;

        -   Useful properties: Count;
        -   Useful methods: Push (puts a new item on top), Peek (gets the item on top), Pop (gets and removes the item on top), Contains, ToArray, Clear;
        -   Example:

        ```cs
            using System.Collections.Generic;

            Stack<int> myStack = new Stack<int>();
            myStack.Push(20);
            myStack.Push(10);
            myStack.Push(10);

            myStack.Push(100);
            foreach (int item in myStack)
            {
                Console.WriteLine(item); /// 100, 10, 10, 20
            }

            int firstItem = myStack.Pop(); /// 100
            foreach (int item in myStack)
            {
                Console.WriteLine(item); /// 10, 10, 20
            }
        ```

    -   Queue: contains a group of elements of the same type based on FIFO (First-In-First-Out). Values can be null or duplicated. Hasn't the "Add" method, and thus can't be default-initialized (can be done only as a constructor argument). Needs to be imported from `System.Collections.Generic`;

        -   Useful properties: Count;
        -   Useful methods: Enqueue (puts a new item at the end), Peek (gets the item on front), Dequeue (gets and removes the item on front), Contains, ToArray, Clear;
        -   Example:

        ```cs
            using System.Collections.Generic;

            Queue<int> myQueue = new Queue<int>();
            myQueue.Enqueue(20);
            myQueue.Enqueue(10);
            myQueue.Enqueue(10);

            myQueue.Enqueue(100);
            foreach (int item in myQueue)
            {
                Console.WriteLine(item); /// 20, 10, 10, 100
            }

            int firstItem = myQueue.Dequeue(); /// 20
            foreach (int item in myQueue)
            {
                Console.WriteLine(item); /// 10, 10, 100
            }
        ```

-   Hierarchy of interfaces in collections:

    ```
        IEnumerator
        IEnumerator<T>
        IEnumerable
            ICollection
                IList
                    class ArrayList
                IDictionary
                    class Hashtable
            IEnumerable<T>
                class Stack<T>
                class Queue<T>
                ICollection<T>
                    class HashSet<T>
                    IList<T>
                        class List<T>
                    IDictionary<TKey, TValue>
                        class Dictionary<TKey, TValue>
                        class SortedList<TKey, TValue>
    ```

-   IEnumerable: represents a group of elements. It is the parent interface of all the collections. Has only one method, that is `IEnumerator GetEnumerator()`;
-   IEnumerator: interface usually meant for readonly and sequential reading of the items of a collection (used internally by the `foreach` loop). Has a `object Current { get; }` property and the methods `bool MoveNext()` and `void Reset()`;
-   Iterator and Yield return: step-callable method that must return an `IEnumerable<T>`. The `IEnumerator<T>` can be accessed using the method `GetEnumerator()` on the returned value. The method can be then "step called" using the `MoveNext()` method of the returned `IEnumerator<T>`. Every "step" is enclosed by the `yield return` keyword. It can be a method or get accessor of a property. It can't be a constructor or destructor, and can't have ref or out parameters. Usually used in creating custom collections. Example

    ```cs
        public class MyClass
        {
            public IEnumerable<int> MyMethod()
            {
                System.Console.WriteLine("Step 1");
                yield return 1;
                System.Console.WriteLine("Step 2");
                yield return 2;
                System.Console.WriteLine("Step 3");
                yield return 3;
            }
        }

        class Program
        {
            static void Main()
            {
                MyClass c = new MyClass();

                IEnumerable<int> enumerable = c.MyMethod();
                IEnumerator<int> enumerator = enumerable.GetEnumerator();

                enumerator.MoveNext();          /// Step 1
                int a = enumerator.Current;
                System.Console.WriteLine(a);    /// 1
                enumerator.MoveNext();          /// Step 2
                int b = enumerator.Current;
                System.Console.WriteLine(b);    /// 2
                enumerator.MoveNext();          /// Step 3
                int c = enumerator.Current;
                System.Console.WriteLine(c);    /// 3
                enumerator.Reset();
                enumerator.MoveNext();          /// Step 1
                int d = enumerator.Current;
                System.Console.WriteLine(d);    /// 1

                foreach (int item in enumerable)
                {
                    System.Console.WriteLine(item); /// Step 1, 1, Step 2, 2, Step 3, 3
                }
            }
        }
    ```

-   Custom collections: useful to add additional methods or logic (ex. validation) to collections. They should inherit from either:

    -   `IEnumerable<T>`, example:

    ```cs
        using System.Collections.Generics;

        class CustomerList: IEnumerable<Customer>
        {
            private List<Customer> customers = new List<Customer>();

            /// Explicit interface implementation: needed because IEnumerable<T> inherits from IEnumerable. So there must be implemented two methods with the same name and parameters: IEnumerator GetEnumerator() and IEnumerator<T> GetEnumerator(). Explicit interface implementation solves this.
            IEnumerator IEnumerable.GetEnumerator()
            {
                return this.GetEnumerator();
            }

            public IEnumerator<Customer> GetEnumerator()
            {
                for (int i = 0; i < customers.Count; i++) {
                    yield return customers[i];
                }
            }

            public void Add(Customer customer)
            {
                /// Example: custom validation logic for the collection
                if (customer.ID.StartsWith("CU-"))
                {
                    customers.Add(customer);
                }
            }
        }

        [...]

        CustomerList myCustomers = new CustomerList()
        {
            /// Thanks to the "Add" method it can be directly initialized
            new Customer() { ID = "CU-1001"},
            new Customer() { ID = "CU-1002"},
            new Customer() { ID = "CU-1003"},
            new Customer() { ID = "AA-0099"}
        };

        foreach (Customer customer in MyCustomers) {
            System.Console.WriteLine(customer.ID); /// CU-1001, CU-1002, CU-1003 (AA-0099 is excluded by the validation logic of the "Add" method)
        }

    ```

    -   `ICollection<T>`, example:

    ```cs
        class CustomerList: ICollection<Customer>
        {
            private List<Customer> customers = new List<Customer>();

            /// All ICollection<T> properties and methods must be implemented (inherits from IEnumerable<T>)
            IEnumerator IEnumerable.GetEnumerator(){};
            public IEnumerator<T> GetEnumerator(){};

            public int Count { get; }
            public bool IsReadOnly { get; }
            public void Add(T item){};
            public void Clear(){};
            public bool Contains(T item){};
            public void CopyTo(T[] array, int arrayIndex){};
            public bool Remove(T item){};
        }
    ```

    -   `IList<T>`, example:

    ```cs
        class CustomerList: IList<Customer>
        {
            private List<Customer> customers = new List<Customer>();

            /// All IList<T> properties and methods must be implemented (inherits from ICollection<T>)
            IEnumerator IEnumerable.GetEnumerator(){};
            public IEnumerator<T> GetEnumerator(){};

            public int Count { get; }
            public bool IsReadOnly { get; }
            public void Add(T item){};
            public void Clear(){};
            public bool Contains(T item){};
            public void CopyTo(T[] array, int arrayIndex){};
            public bool Remove(T item){};

            T this[int index] { get; set; }
            public int IndexOf(T item){};
            public void Insert(int Index, T item){};
            public void RemoveAt(int index){};
        }
    ```

-   IEquatable: interface that defines equality; It must be implemented on a custom class in order to check for equality between different instances. Operators like `==` and `!=` don't rely on `IEquatable`, and should be overloaded separately in order to change their default equality behavior (that is checking for reference equality). For consistency also `Equals(Object other)` (for non-typed classes/collections) and `GetHashCode()` methods should be implemented. Example:

```cs
    class MyClass: IEquatable<MyClass>
    {
        public int Value { get; set; }

        public bool Equals(Object other)
        {
            if (other is MyClass) {
                return Equals((MyClass)other);
            }
            return false;
        }

        public bool Equals(MyClass other)
        {
            return Value == other.Value;
        }

        public int GetHashCode()
        {
            return Value;
        }
    }

    IList<MyClass> myList = new IList<MyClass>();
    myList.Add(new MyClass(){ Value = 1 });
    MyClass c = new MyClass(){ Value = 1 };
    System.Console.WriteLine(myList.Contains(c)); /// True - IList<T>.Contains uses IEquatable
    System.Console.WriteLine(myList[0] == c); /// False - the == operator doesn't use IEquatable
```

-   IComparable: interface that defines ordering. It must be implemented on a custom class in order to sort its instances. For consistency also the `CompareTo(Object other)` (for non-typed classes/collections) method should be implemented. Example:

```cs
    class MyClass: IComparable<MyClass>
    {
        public int Value { get; set; }

        public int CompareTo(Object other)
        {
            if (other is MyClass) {
                return CompareTo((MyClass)other);
            }
            return -1;
        }

        public int CompareTo(MyClass other)
        {
            return Value - other.Value;
        }
    }

    List<MyClass> myList = new List<MyClass>();
    myList.Sort();
```

-   IComparer: interface that defines ordering for classes that don't implement `IComparable`. An external object that implements `IComparer` can be supplied as an argument to sorthing methods. Example:

```cs
    class MyClass
    {
        public int Value { get; set; }
    }

    class MyClassComparer: IComparer<MyClass>
    {
        public int Compare(MyClass x, MyClass y)
        {
            return x.Value - y.Value;
        }
    }

    List<MyClass> myList = new List<MyClass>();
    myList.Sort(new MyClassComparer());
```

-   Covariance and Contravariance: as a general rule, you are allowed to give more (more specific - child classes), but not less (less specific - parent classes). That is because child classes have all of what parent classes have and some more. It you'd try the opposite, the parent class may not have implemented some properties or methods that are instead expected. The problem with generic types, is that they can be used for both input (parameter type) and output (return type). To solve this Invariance is the default behaviour, that means that a generic type is not allowed to receive any other type (either more or less specific). To have more flexibility covariance and contravariance were introduced, to allow the compiler to accept more or less specific types in some cases. These cases are safeguarded by the parameter modifiers `in` and `out` applied to the generic type. The `out` keyword assures that the generic type can only be used as return type, allowing to return more or less specific types, but not to receive them. The `in` keyword assures that the generic type can only be used as input type, allowing to receive more or less specific types, but not to return them. Example:

```cs
    class A { public void F1(){} }
    class B : A { public void F2(){} }
    class C : B { public void F3(){} }

    B b1 = new A(); /// Error: myObj would miss the method F2 because it is not implement in the parent class A. It's not Ok to give less.
    B b2 = new C(); /// Ok: myObj has the method F2 because it is a child class of B, which implements that method. It's Ok to give more.

    /// Generics can be used both for parameter and return types
    interface IGeneric<T>
    {
        T Output(); /// Return type
        void Input(T input); /// Parameter type
    }

    class MyClass<T> : IGeneric<T>
    {
        public T Output(){};
        public void Input(T input){};
    }

    MyClass<B> objbb = new MyClass<B>(); /// Ok: as expected

    /////////////
    ///Covariance
    /////////////

    MyClass<B> objbc = new MyClass<C>(); /// Error: Invariance violated
    /// Let's suppose we could ignore the Invariance error
    objbc.Input(new B()); /// Error: we are passing type B (less specific) (casted via MyClass<B> obj) instead of the expected type C (more specific) (created with new MyClass<C>()). It's not Ok to give less.
    objbc.Output().F2(); /// Ok: obj.Output() is expected of type B (less specific) (casted via MyClass<B> obj), but type C (more specific) is returned (created with new MyClass<C>()). It's Ok to give more.

    /// How to fix this? Covariance
    interface IGenericCovariance<out T>
    {
        T Output();
        /// void Input(T input); Removed because not allowed by "out T".
    }

    class MyClassCovariance<T> : IGenericCovariance<T>
    {
        public T Output();
        /// public void Input(T input){}; Removed because not allowed by "out T".
    }

    MyClassCovariance<B> objbc2 = new MyClassCovariance<C>(); /// Ok: contravariance
    /// objbc2.Input(new B()); /// Buggy method not allowed anymore.
    objbc2.Output().F2(); /// Ok

    /////////////////
    ///Contravariance
    /////////////////

    MyClass<B> objba = new MyClass<A>(); /// Error: Invariance violated
    /// Let's suppose we could ignore the Invariance error
    objba.Input(new B()); /// Ok: we are passing type B (more specific) (casted via MyClass<B> obj) instead of the expected type A (less specific) (created with new MyClass<A>()). It's Ok to give more.
    objba.Output().F2(); /// Error: obj.Output() is expected of type B (more specific) (casted via MyClass<B> obj), but type A (less specific) is returned (created with new MyClass<A>()). Type A has not implemented the method F2, and thus it will result in an error. It's not Ok to give less.

    /// How to fix this? Contravariance
    interface IGenericContravariance<in T>
    {
        /// T Output(); Removed because not allowed by "in T".
        void Input(T input);
    }

    class MyClassContravariance<T> : IGenericContravariance<T>
    {
        /// public T Output(); Removed because not allowed by "in T".
        public void Input(T input){};
    }

    MyClassContravariance<B> objba2 = new MyClassContravariance<A>(); /// Ok: contravariance
    objba2.Input(new B()); /// Ok
    /// objba2.Output().F2(); Buggy method not allowed anymore.
```

## Anonymous Types

-   Anonymous type: allows you to create an object with a set of properties and values, without specifiyng the type beforehand. The compiler automatically creates a class behind the scenes that supports those properties and "assings" it as the type for that object. That class is sealed (can't create child classes from it), and the properties are all public and readonly. It can be casted only to System.Object. None of its properties can be initialized with a null value (otherwise it doesn't know of which type that property should be). As the type is not formally defined, the "var" keyword must be used. Example:

```cs
    var myAnonType = new { Name = "AnonType", Subject = "C#", Level = 3};
    myAnonType.Name = "Changed"; /// Error! Anonymous properties are readonly.
```

-   Nested: it is possible to create anonymous types/objects inside other anonymous types/objects. Example:

```cs
    var myAnonType = new
    {
        Prop1 = "Prop1",
        Prop2 = "Prop2",
        Prop3 = new
        {
            Prop3_1 = 3.1,
            Prop3_2 = "Prop3_2",
        }
    }
```

-   Anonymous array: array containing anonymous objects (also called implicitly typed array). Its anonymous objects must be of the same anonymous type (can't have different properties). Example:

```cs
    var myAnonArray = new[]
    {
        new { Name = "AnonName", Subject = "C#", Level = 3},
        new { Name = "AnonName2", Subject = "C", Level = 1},
        new { Name = "AnonName3", Subject = "C++", Level = 2}
    }
```

## Tuples

-   Tuple class: represents a set of values of one or multiple types. Supports up to 8 elements by default (more if nesting tuples). Very useful to return multiple values from a method (without creating a new class or using anomymous objects or the "out" parameter modifier). Example:

```cs
    var myTuple = new Tuple<int, int, string>()
    {
        10,
        11,
        "eleven"
    };

    int a = myTuple.Item1; /// 10
    int b = myTuple.Item2; /// 11
    string c = myTuple.Item3; /// eleven
```

-   Value tuple: syntax-sugar to create a tuple. Supports property names and an unlimited number of items. Example:

```cs
    (int a, int b, string c) myValueTuple = (10, 11, "eleven");

    int a = myTuple.a; /// 10
    int b = myTuple.b; /// 11
    string c = myTuple.c; /// eleven

    [...]

    public (bool success, int value) MyMethod()
    {
        return (true, 12);
    }

    var result = MyMethod();
    System.Console.WriteLine(result.success); /// true
    System.Console.WriteLine(result.value);   /// 12
```

-   Deconstruction: syntax-sugar to copy the elements of a value tuple into local variables. It follows the tuple value order (the naming doesn't count). Example:

```cs
    public (bool success, int value) MyMethod()
    {
        return (true, 12);
    }

    (bool isSuccess, int resultValue) = MyMethod();
    System.Console.WriteLine(isSuccess);    /// true
    System.Console.WriteLine(resultValue);  /// 12
```

-   Discards: skipping elements during the deconstruction using the underscore keyword (\_). Example:

```cs
    public (bool success, int value1, int value2, int value3, int value4) MyMethod()
    {
        return (true, 1, 2, 3, 4);
    }

    (bool isSuccess, int v1, _, _, int v4) = MyMethod();
    System.Console.WriteLine(isSuccess); /// true
    System.Console.WriteLine(v1);        /// 1
    System.Console.WriteLine(v4);        /// 4
```

## Comments and Regions

-   Comments: created with a double slash (//). Example:

```cs
   int number = 4; // This is a comment
```

-   XML comments: created with a triple slash (///). The comment information is automatically provided when that class/variable/type/... is hovered with the mouse in Visual Studio. Example:

```cs
   /// <summary>
   /// Represents the choice of the customer. This text is visible hovering with the mouse on the property Choice.
   /// </summary>
   public int Choice = 4;
```

-   Regions: parts of code delimited by a region are foldable in Visual Studio. Example:

```cs
   #region Properties
   public string Name { get; set; } // This is foldable!
   public string Address { get; set; }
   #endregion
```

## LINQ

-   LINQ: Language INtegrated Query. Allows to use a uniform query syntax against different data sources (arrays, collections, databases, csv files, etc.). Must be imported from `System.Linq`. It provides extensions methods such as `Where` to be called on the data source. Returns an `IEnumerable<T>` of the type of the data source. Example:

```cs
    using System.Linq;

    class Employee
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string City { get; set; }
    }

    [...]

    List<Employee> employees = new List<Employee>()
    {
        new Employee(){ID = 100, Name = "Lukas", City = "Boston"},
        new Employee(){ID = 101, Name = "Emma", City = "Boston"},
        new Employee(){ID = 102, Name = "Hannah", City = "New York"},
        new Employee(){ID = 103, Name = "Lucia", City = "Paris"}
    };

    // Using LINQ
    IEnumerable<Employee> filtered = employees.Where(e => e.City == "Boston");
    foreach(Employee item in filtered)
    {
        Console.WriteLine(item.Name); // Lukas, Emma
    }
```

-   Filtering methods: Where, OfType;

-   Sorting methods: OrderBy, OrderByDescending, ThenBy, ThenByDescending, Reverse;

-   Grouping methods: GroupBy;

-   Joining methods: Join;

-   Projection methods: Select, SelectMany;

-   Aggregation methods: Min, Max, Average, Count, Sum;

-   Quantifier methods: All, Any, Contains;

-   Element methods: ElementAt, ElementAtOrDefault, First, FirstOrDefault, Last, LastOrDefault, Single, SingleOrDefault;

-   Set-Operation methods: Distinct, Except, Intersect, Union;

-   Partitioning methods: Skip, SkipWhile, Take, TakeWhile;

-   Concatenation methods: Concat;

-   Equaliy methods: SequenceEqual;

-   Generation methods: DefaultEmpty, Empty, Range, Repeat;

-   Conversion methods: AsEnumerable, AsQueryable, Cast, ToArray, ToDictionary, ToList;

## Strings

-   String: object of the pre-defined class `System.String`. It is stored in the Heap, and addressed via a reference variable in the Stack. It stores a set ot characters (`char[]`). Can contain a maximum number of 2 billion characters;

-   Array notation: single characters are accessible using an array-like notation. Example:

```cs
    string s = "ABCD";
    char c = s[0]; // A
```

-   Immutability: a string is immutable, when modified it actually returns a new string object;

-   Creating the same string twice: when a new string is created (or modified), if there is already a string in memory (Heap) with the same exact value, then the newly created/modified one will just be a reference to that already existing string. This is automatically enforced by the CLR to avoid memory waste. Example:

```cs
    string a = "ABC"; // Created and instantiated in the Heap
    string b = "ABC"; // String "ABC" is already existing, b is then a reference variable to the same memory location of a
```

-   Formatting: string formatting is done using the `$""` syntax-sugar (or with the "long version" `string.Format`). Example:

```cs
    string name = "Emma";
    int age = 24;

    string formatted1 = $"{name} is {age} years old.";
    /// Equivalent to:
    string formatted2 = string.Format("{0} is {1} years old.", name, age);
    /// Equivalent to:
    string formatted3 = name + " is " + age + " years old.";
```

-   Useful methods: ToUpper, ToLower, Substring, Replace, Format, IsNullOrEmpty, Split, Trim, ToCharArray, Equals, Join, CompareTo, StartsWith, EndsWith, Contains, IndexOf, LastIndexOf, IsNullOrWhiteSpace, Insert, Remove;

## StringBuilder

-   StringBuilder: pre-defined class (`System.StringBuilder`) that unlike a "normal string" allows for mutability. Must be imported from `System.Text`. Useful for continuous modifications of the same string (it doesn't create a new one each time). Example:

```cs
    using System.Text;

    string[] words = new string[]{ "I", "like", "eating". "fruits", "like", "apples", "and", "kiwis." };

    string sentence = "";
    foreach (string word in words)
    {
        // Every iteration creates a new string object, because the variable "sentence" is an immutable string.
        sentence = sentence + " " + word;
    }

    // Using StringBuilder
    StringBuilder builder = new StringBuilder();
    foreach (string word in words)
    {
        // StringBuilder is mutable, thus this doesn't create new unecessary "intermediate" string objects.
        builder.Append(" ");
        builder.Append(word);
    }
    string result = builder.ToString();

    // Single characthers of a StringBuilder can be accessed/modified with an array-like notation.
    builder[0] = 'a';
```

-   Useful methods: Append, Insert, Remove, Replace, ToString;

## Dates

-   DateTime: predefined class (`System.DateTime`) useful to store and manipulate date and time values. The default formatting is `yyyy-MM-dd hh:mm:ss.fff tt` (example `2025-12-31 11:59:59.999 PM`). Example:

```cs
    // Get the current date and time.
    DateTime currentDateTime = DateTime.Now;

    // Assign a custom value using parsing.
    DateTime dateOfBirth = DateTime.Parse("1966-06-21");
    // Assign a custom value using the System.Convert class.
    DateTime dateOfGraduation = Convert.ToDateTime("1989-03-04");
    // Assign a custom value using the constructor.
    DateTime dateOfMarriage = new DateTime(1994, 2, 28);

    // In output the formatting is taken from the OS settings.
    Console.WriteLine(dateOfBirth.ToString()); // 19/01/1995 00:00:00 AM
```

-   Subtraction: datetimes can be subtracted using the `Subtract` method or the `-` operator. They both return an object of the `System.TimeSpan` class, that represents a duration (distance between 2 points in time). Example:

```cs
    DateTime today = DateTime.Now;
    DateTime birthday = new DateTime(1993, 4, 22);
    // Find the age.
    TimeSpan tsAge1 = today.Subtract(birthday);
    TimeSpan tsAge2 = today - birthday;
    int ageInYears = tsAge1 / 365;
```

-   Manipulation: datetimes can be manipulated using the methods `AddDays`, `AddMonths`, `AddYears`, `AddHours`, `AddMinutes`, `AddSeconds` and `AddMilliseconds`. These methods can also be used with negative numbers. They all return a new `System.DateTime` object. Example:

```cs
    DateTime dateA = new DateTime(1999, 10, 10);
    DateTime dateB = dateA.AddDays(3).AddMonths(2).AddYears(1); // 2000/12/13
    DateTime dateC = dateB.AddDays(-1).AddYears(-10); // 1990/12/12
```

-   Useful properties (readonly): Day, Month, Year, Hour, Minute, Second, Millisecond, DayOfYear, DayOfWeek, Now;

-   Other useful methods: Parse, ParseExact, ToString, ToShortDateString, ToLongDateString, ToShortTimeString, ToLongTimeString, DaysInMonth;

## Math

-   Math: predefined static class (`System.Math`) useful to perform mathematical operations;
-   Useful properties: PI, E;
-   Useful methods: Abs, Sign, Pow, Sqrt, Exp, Log, Log10, Min, Max, Floor, Ceiling, Round, Truncate, Sin, Cos, Tan, Asin, Acos, Atan, DivRem, IEEERemainder;

## Regular Expressions

-   Regular expression: provides the ability to validate and capture patterns against strings. The `Regex` class must be imported from `System.Text.RegularExpressions`. Example:

```cs
    using System.Text.RegularExpressions;

    Regex regexp = new Regex("[a-z]{1}[0-9]?");
    string input = "a1b2c3def4";

    bool isValid = regexp.IsMatch(input);
    Console.WriteLine(isValid); // True

    MatchCollection matches = regexp.Matches(input);
    foreach (Match match in matches)
    {
        Console.WriteLine(match.Value); // a1, b2, c3, d, e, f4
    }
```

## Number Systems

-   There are infinitely possible number systems. The one that we are accostumed to is base-10 (decimal). Other commonly used number systems in computer science are base-2 (binary), base-8 (octal) and base-16 (hexadecimal);

-   The `Convert.ToString` method can convert numbers from base-10 to a different number system (different base, either 2, 8 or 16). The `Convert.ToInt32` method can convert a number from a non-base-10 number system (either 2, 8 or 16) to base-10. Example:

```cs
    int base10 = 100;

    // Convert to a non-base-10 number system
    string base2 = Convert.ToString(base10, 2);   // 1100100
    string base8 = Convert.ToString(base10, 8);   // 144
    string base16 = Convert.ToString(base10, 16); // 64

    // Convert from a non-base-10 number system
    string fromBase2ToBase10 = Convert.ToInt32(base2, 2);    // 100
    string fromBase8ToBase10 = Convert.ToInt32(base8, 8);    // 100
    string fromBase16ToBase10 = Convert.ToInt32(base16, 16); // 100

    // From base-16 to base-2 (via base-10)
    string fromBase16ToBase2 = Convert.ToString(Convert.ToInt32(base16, 16), 2);
```

-   This is the process to convert a number from base-10 to a different base (number system):

```cs
    // Divide the number by the new base, then take the remainder and continue with the quotient.

    // Example 100 in base-10 to ? in base-16:
    // 100 / 16 = 6 quotient + 4 remainder, take the remainder and continue with the quotient;
    // 6 / 16 = 0 quotient + 6 remainder, take the remainder and continue with the quotient;
    // The quotient is 0 thus stop;
    // The converted number is the inverse concatenation of the remainders: 64.
```

-   This is the process to convert a number from non-base-10 to base-10:

```cs
    // For every digit in reverse order do:
    // 1 - Elevate the base to the power of the digit's index;
    // 2 - Multiply that with the actual digit;
    // 3 - Sum them all.

    // Example 64 in base-16 to ? in base-10:
    // First digit is 4, index is 0;
    // The base is 16, to the power of 0 is 1;
    // The digit is 4, multiplied with 1 is 4;
    // Second digit is 6, index is 1;
    // The base is 16, to the power of 1 is 16;
    // The digit is 6, multiplied with 16 is 96;
    // The sum of all the results is 96 + 4 that is 100.
```

-   Binary and Hexadecimal literals: in order to directly write a number in the binary or hexadecimal format, you have to use the prefix `0b` or `0x`. These numbers will be automatically converted to base-10 at compilation time. Example:

```cs
    int numA = 0b1100100; // 100
    int numB = 0x64;      // 100
```

## Encoding

-   Encoding: process of converting a character into numerical format (bits);
-   Decoding: process of converting a number into a character;
-   Common encoding systems:

    -   ASCII: stands for "American Stadard Code for Information Interchange". Useful for the english based languages. Supports only 128 characters (the lower and upper case english alphabet, the numerical digits, the escape/special characters and some other useful symbols, for example the mathematical ones);
    -   UTF-16/Unicode: is the evolutions of UTF-8, uses more bits to represent a charachter than both ASCII and UTF-8, thus allowing many more characters to be representable (more than 100.000). It is indeed used for all the world languages, including chinese, japanese, arabic, greek, etc. Each character occupies 2 or 4 bytes;

-   Using the ASCII encoding:

```cs
    char character = 'A';

    // Converting an ASCII character into numerical format using explicit casting. A single byte variable is enough as ASCII only contains characters from 0 to 127.
    byte ASCIICode = (byte) character; // 65

    // Converting a number into an ASCII character using explicit casting.
    char codeToChar = (char) ASCIICode; // A

    // Converting an entire array of bytes (ASCII characters in numerical format) into a string.
    byte[] array = new byte[]
    {
        65, 66, 67
    };
    string result = System.Text.Encoding.ASCII.GetString(array); // ABC

    // Specifying an encoding system for the console.
    Console.OutputEncoding = System.Text.Encoding.ASCII;
    Console.WriteLine(result);

    // Converting an ASCII string into an array of bytes (useful for example to write the data into files).
    string data = "DEF";
    byte[] dataIntoBytes = System.Text.Encoding.ASCII.GetBytes(data); // 68, 69, 70
```

-   Using the UTF-16/Unicode encoding:

```cs
    // C# automatically supports every unicode character, either wrote directly in the code or using the appropriate unicode code (ex. \uXXXX).
    char directCharacter = "Ʊ";
    char unicodeCode = "\u01B1"; // Ʊ

    // Converting an entire array of bytes (Unicode characters in numerical format) into a string.
    byte[] array = new byte[]
    {
        144, 33, 32, 0, 146, 33
    };
    string result = System.Text.Encoding.Unicode.GetString(array); // ← →

    // Converting a Unicode string into an array of bytes (a single character is represented by multiple bytes).
    string data = "← →";
    byte[] dataIntoBytes = System.Text.Encoding.Unicode.GetBytes(data); // 144, 33, 32, 0, 146, 33
```

## I/O

-   System.IO: .NET provides the pre-defined `System.IO` namespace that contains a set of useful classes to perform file input/output operations. These classes are: `File`, `Directory`, `FileInfo`, `DirectoryInfo`, `DriveInfo`, `FileStream`, `FileNotFoundException`, `StreamWriter`, `StreamReader`, `BinaryWriter`, `BineryReader`.

-   Useful methods of the `File` static class: `Create`, `Delete`, `Exists`, `Open`, `Copy`, `Move`, `OpenRead`, `OpenWrite`, `WriteAllText`, `WriteAllLines`, `ReadAllText`, `ReadAllLines`. Example:

```cs
    using System.IO;

    string filePath = ".\\MyApp\\.data";
    string fileName = "MyFile";
    string fileExtension = ".data";
    string file1FullPath = filePath + fileName + fileExtension;

    // Create a new file (and don't keep it open).
    File.Create(file1FullPath).Close();

    // Check if a file exists.
    bool exists = File.Exists(file1FullPath);

    if (exists)
    {
        // Create a copy of a file.
        string file2FullPath = filePath + fileName + "-2" + fileExtension;
        File.Copy(file1FullPath, file2FullPath);

        // Rename or move a file.
        string newFile2FullPath = filePath + fileName + "-2-renamed" + fileExtension;
        File.Move(file2FullPath, newFile2FullPath);

        // Delete a file.
        File.Delete(newFile2FullPath);
    }

    // Writing data into a file.
    string data = "MY_KEY=1122334455";
    string path = ".\\MyApp\\Keys.txt";
    File.WriteAllText(path, data);
    // In case the file doesn't exist, it creates it.
    // In case the file exists, it overrides it.

    // Reading data from a file.
    string content = File.ReadAllText(path); // MY_KEY=1122334455

    // Writing data into a file from an IEnumerable of strings (lines).
    List<string> dataLines = new List<string>
    {
        "Europe", "Asia", "Africa"
    };
    string path2 = ".\\MyApp\\Countries.txt";
    File.WriteAllLines(path2, dataLines);

    // Reading data from a file separated into its lines.
    string[] continents = File.ReadAllLines(path2); // Europe, Asia, Africa
```

-   Useful methods of the `FileInfo` class: `Create`, `Open`, `Delete`, `MoveTo`, `CopyTo`, `OpenText`, `OpenRead`, `OpenWrite`, `CreateText`, `AppendText`. Example:

```cs
    using System.IO;

    string path = ".\\MyApp\\Data.txt";

    // Unlike File, FileInfo is not a static class and thus needs to be instantiated.
    FileInfo dataFileInfo = new FileInfo(path);

    // Create a file.
    dataFileInfo.Create().Close();

    // Copy a file.
    string destination = ".\\MyApp\\Data-copy.txt";
    FileInfo copiedFile = dataFileInfo.CopyTo(destination);

    // Rename or move a file.
    string newDestination = ".\\MyApp\\Data-copy-renamed.txt";
    copiedFile.MoveTo(newDestination);

    // Delete a file.
    copiedFile.Delete();
```

-   Useful properties of the `FileInfo` class: `Name`, `Extension`, `FullName`, `DirectoryName`, `Exists`, `Length`, `CreationTime`, `LastWriteTime`, `LastAccessTime`. Example:

```cs
    using System.IO;

    string filePath = ".\\MyApp\\Data.txt";
    FileInfo file = new FileInfo(filePath);

    string name = file.Name; // Data.txt
    string ext = file.Extension; // .txt
    string fullPath = file.FullName; // .\MyApp\Data.txt
    DateTime lastEdit = file.LastWriteTime; // 01/01/2020
```

-   Useful methods of the `Directory` static class: `CreateDirectory`, `Move`, `Delete`, `Exists`, `GetFiles`, `GetDirectories`. Example:

```cs
    using System.IO;

    string path = ".\\MyApp\\Countries";

    // Create a directory.
    Directory.CreateDirectory(path);

    // Verify that a directory exists.
    bool exists = Directory.Exists(path); // True

    string[] countries = new string[]
    {
        "Africa", "Europe", "Asia"
    };
    foreach (string country in countries)
    {
        Directory.CreateDirectory(path + "\\" + country);
    }

    // Rename/move a directory.
    string newPath = ".\\MyApp\\World";
    Directory.Move(path, newPath);

    // Get sub-directories.
    string[] subDirectories = Directory.GetDirectories(newPath); // .\MyApp\Africa, .\MyApp\Europe, .\MyApp\Asia

    // Get sub-files.
    string[] subFiles = Directory.GetFiles(newPath);

    // Delete an empty directory.
    Directory.Delete(newPath); // Error: directory not empty.

    // Delete a non-empty directory.
    Directory.Delete(newPath, true);
```

-   Useful methods of the `DirectoryInfo` class: `Create`, `MoveTo`, `Delete`, `GetFiles`, `GetDirectories`, `CreateSubDirectory`. The difference in usage is the same as `File` vs `FileInfo`, the first is a static class, while the latter has to be instantiated. Example:

```cs
    using System.IO;

    string path = ".\\MyApp\\Countries";

    // Creating a sub-directory with the static class Directory.
    Directory.CreateDirectory(path + "\\Sub1");

    // Creating a sub-directory with the class DirectoryInfo.
    DirectoryInfo dir = new DirectoryInfo(path);
    dir.CreateSubDirectory("Sub2");

    // Getting the sub-directories with the static class Directory.
    string[] subDirs = Directory.GetDirectories(path); // Retuns an array of paths (strings)

    // Getting the sub-directories with the class DirectoryInfo.
    DirectoryInfo[] subDirsInfo = DirectoryInfo.GetDirectories(); // Retuns an array of DirectoryInfo objects
```

-   Useful properties of the `DirectoryInfo` class: `Exists`, `Name`, `FullName`, `Parent`, `Root`, `CreationTime`, `LastWriteTime`, `LastAccessTime`. Example:

```cs
    using System.IO;

    string path = ".\\MyApp\\Countries";
    DirectoryInfo dir = new DirectoryInfo(path);
    dir.Create();

    bool exists = dir.Exists; // True
    string name = dir.Name; // Countries
    DirectoryInfo parent = dir.Parent().Name; // MyApp
```

-   Useful properties of the `DriveInfo` class: `Name`, `DriveType`, `VolumeLabel`, `RootDirectory`, `TotalSize`, `AvailableFreeSpace`. Those properties are read-only, and it has no methods. Example:

```cs
    using System.IO;

    // Info about the C:\ drive (Windows).
    DriveInfo drive = new DriveInfo("c:");
    string name = drive.Name; // c:\
    string type = drive.DriveType; // Fixed
    string volume = drive.VolumeLabel; // Windows SSD
    int sizeInGB = drive.TotalSize / (1024 * 1024 * 1024); // 249
```

-   FileStream: allows you to open and keep a connection to a file in order to read or write content from/into that file multiple times more efficiently than using the methods of the FileInfo class (that are suited more for one-time read or write operations). Useful methods of the `FileStream` class: `Write`, `Read`, `Close`. Those methods work with a byte array only. Example:

```cs
    using System.IO;

    string path = ".\\MyApp\\Countries\\Japan.txt";

    FileStream stream = new FileStream(path, FileMode.Create, FileAccess.Write);
    // Alternative ways.
    // FileStream stream = File.Create(path);
    // FileStream stream = File.Open(path, FileMode.Create, FileAccess.Write);
    // FileStream stream = File.OpenWrite(path);

    // Writing into a file.
    string stringContent = "Japan is full of beautiful things to see and try.";
    byte[] writeableContent = System.Text.Encoding.ASCII.GetBytes(stringContent);
    for (byte i = 0; i < 100; i++)
    {
        // Write(bytesContent, offset, numberOfBytesToWrite);
        stream.Write(writeableContent, 0, writeableContent.Length);
        // The "base position" is kept updated after each write operation, so there is no need to change the offset parameter.
    }
    stream.Close();

    // Reading from a file.
    // It is better to create a new stream and keep the read and write operations seperated: so that we don't have to seek/change the stream position inside the file for the different read and write operations.
    FileStream streamRead = new FileStream(path, FileMode.Create, FileAccess.Read);
```

-   `FileMode` options:

    -   `CreateNew`: create a new file, if it already exists throw an error;
    -   `Create`: create a new file, if it already exists overwrite it;
    -   `Open`: open an existing file, if it doesn't already exists throw an error;
    -   `OpenOrCreate`: open an existing file, if it doesn't already exists create and open it;
    -   `Append`: open an existing file and go to the end of the file in order to appen new content after it;

-   `FileAccess` options:

    -   `Read`: can read-only from a file;
    -   `Write`: can write-only into a file;
    -   `ReadWrite`: can both read and write from/into a file;

-   Useful methods of the `StreamWriter` class: `A`, `B`. Example:

```cs
    using System.IO;


```

-   Useful methods of the `StreamReader` class: `A`, `B`. Example:

```cs
    using System.IO;


```

-   Useful methods of the `BinaryWriter` class: `A`, `B`. Example:

```cs
    using System.IO;


```

-   Useful methods of the `BinaryReader` class: `A`, `B`. Example:

```cs
    using System.IO;


```

## Serialization

## Exception Handling

## C# 9 Features

-   Records:;
-   Init-only setters/properties:;
-   Top-level statements:;
-   Pattern matching enhancements:;
-   Target-typed new expressions:;
-   Module initializers:;

## C# 10 Features

-   Record structs:;
-   User-defined parameter-less constructor in structs:;
-   Global using:;
-   File-scoped namespaces:;
-   Extended property pattern:;
-   Sealed ToString() method in records:;

## C# 11 Features
