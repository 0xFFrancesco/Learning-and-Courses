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
    -   virtual: can be overriddend in child classes;
    -   abstract: doesn't containt the method body, must be overridden in child classes (only available in abstract classes);
    -   override: overrides a virtual or abstract parent method;
    -   new: hides a parent method (if the child one has the same exact name and parameters);
    -   partial:;
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

-   Local functions: functions written directly inside a method, without the need to create another method. Functions can't be written outside methods. Access modifiers and modifiers are not applicable to local functions. Example:

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
-   Static constructor: executes only once during the application, either when the first object of the class is created or when the class is accessed for the first time. It can initialize the static fields and run some logic required only once per class. Can't access the instance fields, must be public, can't have parameters and doesn't return any value;
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
-   Explicit interface implementation: creating two methods with the same exact signature in two different interfaces and implementing both them in the same child class, so that they are called alternatively based on the interface casting. Example:

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

-   Partial class: it is splitted across multiple files, but is treated and instantiated as a single normal class. THe different "parts" must have the same namespace, name, access modifier and modifier. Example:

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
-   Enumeration: collection of constants, supports the same access modifiers and modifiers as classes. Syntax:

```cs
    public enum CarType {
        Coupe,          /// 0 - default
        Convertible,    /// 1 - default
        Sport           /// 2 - default
    }

    /// Defaults override
    public enum AgeGroup: string
    {
        Baby = "Baby",
        Child = "Child",
        Teenager = "Teenager",
        Adult = "Adult",
        Senior = "Senior"
    }

    CarType myCar = CarType.Sport; /// 2
    AgeGroup myAge = AgeGroup.Adult; /// Adult
```
