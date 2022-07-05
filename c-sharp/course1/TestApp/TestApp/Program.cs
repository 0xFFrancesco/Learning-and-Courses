class Sample
{
    static void Main()
    {
        ConsoleClass();
        Variables();
    }

    static void ConsoleClass()
    {
        System.Console.WriteLine("Welcome");
        System.Console.WriteLine("to");
        System.Console.WriteLine("C# programming");
        System.Console.ReadKey();
        System.Console.Clear();

        System.Console.Write("Welcome ");
        System.Console.Write("to ");
        System.Console.Write("C# programming ");
        System.Console.ReadKey();
        System.Console.Clear();

        System.Console.ReadKey();
    }

    static void Variables()
    {
        sbyte maxSByteVal = sbyte.MaxValue;
        sbyte mySByteVal = 0;
        sbyte defaultSByteVal = default(sbyte);
        byte byteVal = 1;

        short shortVal = 2;
        ushort uShortVal = 3;

        int intVal = 4;
        uint uIntVal = 5;

        long longVal = 6;
        ulong uLongVal = 7;

        float floatVal = 8;

        double doubleVal = 9;

        decimal decimalVal = 0.1m + 0.2m;

        char charVal = 'C';
        string stringVal = "String";
        bool booleanVal = false;
        
        System.Console.WriteLine("Variables!");
        System.Console.WriteLine(maxSByteVal);
        System.Console.WriteLine(mySByteVal);
        System.Console.WriteLine(defaultSByteVal);
        System.Console.WriteLine(byteVal);
        System.Console.WriteLine(shortVal);
        System.Console.WriteLine(uShortVal);
        System.Console.WriteLine(intVal);
        System.Console.WriteLine(uIntVal);
        System.Console.WriteLine(longVal);
        System.Console.WriteLine(uLongVal);
        System.Console.WriteLine(floatVal);
        System.Console.WriteLine(doubleVal);
        System.Console.WriteLine(decimalVal);
        System.Console.WriteLine(charVal);
        System.Console.WriteLine(stringVal);
        System.Console.WriteLine(booleanVal);
        System.Console.ReadKey();
    }
}