using System;

class Sample
{
    static void Main()
    {
        ConsoleClass();
        Variables();
        CircleArea();
        PersonHeight();
    }

    static void ConsoleClass()
    {
        Introduction("The Console Class");

        System.Console.WriteLine("Welcome");
        System.Console.WriteLine("to");
        System.Console.WriteLine("C# programming");
        System.Console.ReadKey();

        System.Console.WriteLine();
        System.Console.Write("Welcome ");
        System.Console.Write("to ");
        System.Console.Write("C# programming ");
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
        uint uIntVal = 5U;

        long longVal = 6L;
        ulong uLongVal = 7UL;

        float floatVal = 8F;

        double doubleVal = 9D;

        decimal decimalVal = 0.1M + 0.2M;

        char charVal = 'C';
        string stringVal = "String";
        bool booleanVal = false;

        Introduction("Variables");
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

    static void CircleArea()
    {
        Introduction("Circle Area");
        byte r = 12;
        double area = Math.PI * Math.Pow(r, 2);

        System.Console.WriteLine("The area of a circle with r=" + r + " is equal to " + area.ToString("N2") + ".");
        System.Console.ReadKey();
    }

    static void PersonHeight()
    {
        Introduction("Feet and Inches to Centimeters");
        byte feet = 10;
        byte inches = 7;

        double centimeters = (12 * feet + inches) * 2.54;

        System.Console.WriteLine("The conversion of " + feet + " feet and " + inches + " inches is equal to " + centimeters + " centimeters.");
        System.Console.ReadKey();
    }

    static void Introduction(string text)
    {
        System.Console.Clear();
        System.Console.WriteLine(text);
        System.Console.ReadKey();
        System.Console.Clear();
    }
}