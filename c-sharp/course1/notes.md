# .NET and C# Fundamentals

## .NET

-   Framework to build web or standalone desktop and mobile apps;
-   Introduced in the year 2000 as .NET Framework (first public version in 2002);
-   Provides a secured and managed environment to execute the .NET code (CLR);
-   Supports actually not only C#, but also VB, VC++, etc.;
    -   It is anyway mainly used via C#;
-   Benefits of using .NET:
    -   Provides a secure runtime (CLR);
    -   Support different languages and application types;
    -   Code re-usability;
-   Has mainly 2 modules:
    -   ASP.NET (websites, web apps, web services);
    -   C#.NET (Windows GUI apps, Windows services, console apps);

## .NET Architecture

-   Has 2 major components:
    -   CLR (see CLR);
    -   FCL (Framework Class Library):
        -   Collection of all the predefined classes, structures and interfaces available in .NET and used to develop programs (ex. `System.Console.WriteLine()`);
-   Abstractions flow: CLR (Common Language Runtime) -> BCL (Base Class Library) -> ADO.NET (database connections) -> WinForms, ASP.NET, WPF, ... -> CLS (Common Language Specifications) -> C#, VB, VC++, ...;
-   BCL (Base Class Library) is a set of pre-defined classes that can be used in all .NET programs for general things such as I/O, type conversions, threads creation, etc.;
-   FCL is a super-set of BCL;
    -   All classes available in BCL are available in every OS and hardware (ex. I/O), while classes available in FCL may be OS or hardware specific (ex. WinForms is only avaialble in Windows);
-   ADO.NET is a set of pre-defined classes useful to perform operations on databases (connection, insert/update/delete rows, ...);
-   WinForms is a set of pre-defined classes useful to create Windows GUI applications (form, textbox, button, checkbox, ...);
-   WPF (Windows Presentation Foundation) is the evolution of WinForms (introduced in .NET 3.0);
-   WCF (Windows Communication Foundation) is a set of pre-defined classes useful to create Service Oriented Applications (SOA);
-   WWF (Windows Workflow Foundation) is a set of pre-defined classes useful to develop task automation and transactions using workflows;
-   ASP.NET is a set of pre-defined classes useful to create Web applications (textbox, radio button, checkbox, dropdown list, ...);
-   CLS (Common Language Specification) is a set of rules on which all the .NET languages (C#, VB, VC++, ...) must be developed:
    -   Example of these rules are CTS (Common Type System: Int32, Int64, Single, Double, ...), Classes and Objects, Reference Variables, Generics, ...;

## Versions of .NET

-   .NET Framework:
    -   First version (1.0) released in 2002, and then a new version almost every year;
    -   Every version introduced new features;
    -   There are only 3 versions of CLR (1,2,4) though;
-   .NET Core:
    -   Introduced in 2016 (in parallel to .NET Framework);
    -   Offers cross-platform support for all the major OSs (Windows, Mac, Linux, Windows Phone, iOS, Android), while the "normal .NET" can only run on Windows;
    -   Is open source (MIT license);
    -   Offers only a sub-set of the entire universe of .NET Framework, and of course doesn't contain any OS-only specific classes (like WinForms);
    -   Supports only 2 languages (C# and VB.NET);
-   .NET:
    -   Introduced in 2020 (as .NET 5.0);
    -   Replaces both .NET Framework and .NET Core;
    -   Every new update is on .NET, both .NET Framework and .NET Core are no longer developed by Microsoft;

## CLI

-   Stands for **Common Language Infrastructure**;
-   Flow: source code (C#, VB, ...) -> Compiler -> IL (Intermediate Language) -> CLR -> native machine code -> execution by the OS;

## CLR

-   Stands for **Common Language Runtime**;
-   Execution engine for all .NET programs;
-   Must be installed on the OS (every OS has a different CLR available developed by Microsoft);
-   Part of the .NET framework (preinstalled in Windows);
-   Converts the IL to native machine code based on the underlying hardware and OS;
-   Provides additional run-time services such as:
    -   Class loader:
        -   Loads classes from compiled source code to memory when needed;
    -   Memory manager:
        -   Allocates the needed memory;
        -   Local variables are stored in the Stack, while objects are stored in the Heap;
    -   Gargabe collector:
        -   Frees the memory not anymore in use (un-reachable variables and objects);
    -   JIT (Just-In-Time) compiler:
        -   Converts the IL code (equal for every OS and hardware) to native machine language (different for every OS and hardware);
        -   Doesn't compile all the IL at once, but only the parts that are loaded via the Class loader;
    -   Exception Manager:
        -   Catches all the run-time exceptions;
        -   Creates exception logs;
    -   Thread manager:
        -   Creates, runs and stops the threads;
        -   By default every .NET program has a "Main Thread" (it's possible to creade sub-threads based on it);
    -   Security manager:
        -   Verifies whether the program has the needed permissions to access the requested resources (ex. files, hardware, etc.);

## CSC

-   Stands for **C Sharp Compiler**;
-   Compiles the C# source code into the IL needed by the CLR;

## Visual Studio

-   IDE for all types of .NET and .NET Core apps and languages;
-   Great support (and often the IDE of choice) for C++ as well;

## C#

-   General purpose programming language.
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
-   Fields:
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
-   Methods:
    -   Access modifiers are the exact same of fields;
    -   Modifiers (optional):
        -   static:
        -   virtual:
        -   abstract:
        -   override:
        -   new:
        -   partial:
        -   sealed:
    -   Overloading:
    -   Parameter modifiers:
    -   Ref return;
    -   Local function:
    -   Static local function: