using System;
using MyLibraryClasses;
using TestApp;

class Sample
{
    static void Main()
    {
        //ConsoleClass();
        //Variables();
        //CircleArea();
        //PersonHeight();
        //NearestThousand();
        //SecondsToTime();
        //HeightCategory();
        //LargerAmong3();
        //Loops();
        //ExternalClass();
        //RefReturn();
        //Numbers();
        //Conversions();
        //ConstructorOverloading();
        //AccessorMethods();
        //ExplicitInterfaceImplementation();
        //ArrayOfMultipleNumbers();
        //CustomCollection();
        LargestOfCollections();

    }

    static void ConsoleClass()
    {
        Introduction("The Console Class");

        Console.WriteLine("Welcome");
        Console.WriteLine("to");
        Console.WriteLine("C# programming");
        Console.ReadKey();

        Console.WriteLine();
        Console.Write("Welcome ");
        Console.Write("to ");
        Console.Write("C# programming ");
        Console.ReadKey();
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
        Console.WriteLine(maxSByteVal);
        Console.WriteLine(mySByteVal);
        Console.WriteLine(defaultSByteVal);
        Console.WriteLine(byteVal);
        Console.WriteLine(shortVal);
        Console.WriteLine(uShortVal);
        Console.WriteLine(intVal);
        Console.WriteLine(uIntVal);
        Console.WriteLine(longVal);
        Console.WriteLine(uLongVal);
        Console.WriteLine(floatVal);
        Console.WriteLine(doubleVal);
        Console.WriteLine(decimalVal);
        Console.WriteLine(charVal);
        Console.WriteLine(stringVal);
        Console.WriteLine(booleanVal);
        Console.ReadKey();
    }

    static void CircleArea()
    {
        Introduction("Circle Area");
        byte r = 12;
        double area = Math.PI * Math.Pow(r, 2);

        Console.WriteLine("The area of a circle with r=" + r + " is equal to " + area.ToString("N2") + ".");
        Console.ReadKey();
    }

    static void PersonHeight()
    {
        Introduction("Feet and Inches to Centimeters");
        byte feet = 10;
        byte inches = 7;

        double centimeters = (12 * feet + inches) * 2.54;

        Console.WriteLine("The conversion of " + feet + " feet and " + inches + " inches is equal to " + centimeters + " centimeters.");
        Console.ReadKey();
    }

    static void NearestThousand()
    {
        Introduction("Nearest Thousand");

        for (byte x = 0; x < 3; x++)
        {
            Console.WriteLine("Type an integer number.");
            int number = Convert.ToInt32(Console.ReadLine());
            int nearestThousand = 1000;
            if (number > 1499)
            {
                int remainder = number % 1000;
                nearestThousand = ((number - remainder) / 1000 + (remainder > 499 ? 1 : 0)) * 1000;
            }
            Console.WriteLine("The nearest thousand of " + number + " is " + nearestThousand + ".");
        }

        Console.ReadKey();
    }

    static void SecondsToTime()
    {
        Introduction("Seconds to Time");


        Console.WriteLine("Type an integer number representing seconds.");

        int seconds = Convert.ToInt32(Console.ReadLine());

        int displayS = seconds % 60;
        int minutes = (seconds - displayS) / 60;
        int displayM = minutes % 60;
        int hours = (minutes - displayM) / 60;
        int displayH = hours % 24;
        int days = (hours - displayH) / 24;

        Console.WriteLine(days + " Days, " + displayH + " Hours, " + displayM + " Minutes, " + displayS + " Seconds.");
        Console.ReadKey();
    }

    static void HeightCategory()
    {
        Introduction("Height Category");


        Console.WriteLine("Type an integer number representing the height in inches.");
        byte inches = Convert.ToByte(Console.ReadLine());
        double cms = inches * 2.54;

        string category;

        if (cms <= 150)
        {
            category = "a dwarf";
        }
        else if (cms > 150 & cms <= 165)
        {
            category = "average";
        }
        else if (cms > 165 & cms <= 195)
        {
            category = "tall";
        }
        else
        {
            category = "abnormal tall";
        }

        Console.WriteLine("You are " + category + ".");
        Console.ReadKey();
    }

    static void LargerAmong3()
    {
        Introduction("Larger Among 3");

        int max = 0;
        for (byte x = 0; x < 3; x++)
        {
            Console.WriteLine("Type an integer number.");
            int number = Convert.ToInt32(Console.ReadLine());
            if (number > max)
            {
                max = number;
            }
        }
        Console.WriteLine("The larger number is: " + max + ".");
        Console.ReadKey();
    }

    static void Loops()
    {
        Introduction("Loops");

        for (byte j = 1; j < 7; j++)
        {
            for (byte x = 1; x < 11; x++)
            {
                int n = x;
                if (j < 4 && (x == 5 || x == 6))
                {
                    continue;
                }
                if (j > 3)
                {
                    n = 11 - x;
                    if (j == 6 && n < 3)
                    {
                        continue;
                    }
                }
                Console.Write(n + " ");
            }
            Console.WriteLine();
        }
    }

    static void ExternalClass()
    {

        Introduction("External Class");

        Employee.OrgName = "Francesco Rizzi Inc.";

        sbyte choice;
        byte i = 0;
        do
        {
            i++;

            Console.WriteLine("\nType 1 to generate a new employee, 0 to exit.");
            Console.Write("Enter choice:");
            choice = Convert.ToSByte(Console.ReadLine());

            if (choice == 1)
            {
                Employee employee = new Employee(i, "Finance");
                employee.Name = "Name";
                employee.SalaryPerHour = 30.5;
                employee.WorkingHours = 8 * 5 * 4 * 12;
                employee.NetSalary = employee.WorkingHours * employee.SalaryPerHour;

                Console.WriteLine("--------------------");
                Console.WriteLine("Id: " + employee.Id);
                Console.WriteLine("Name: " + employee.Name);
                Console.WriteLine("Salary/h: " + employee.SalaryPerHour);
                Console.WriteLine("Working hours: " + employee.WorkingHours);
                Console.WriteLine("Net salary: " + employee.NetSalary);
                Console.WriteLine("Organization name: " + Employee.OrgName);
                Console.WriteLine("Type: " + Employee.EmployeeType);
                Console.WriteLine("Department: " + employee.Department);
                Console.WriteLine("--------------------");

            }
        } while (choice != 0);

        Console.ReadKey();
    }

    static void RefReturn()
    {
        Introduction("Ref Return");

        Student student = new Student();
        student.Print();
        ref int studentGradeRef = ref student.RefMethod();
        studentGradeRef = 8;
        student.Print();

        Console.ReadKey();
    }

    static void Numbers()
    {
        Introduction("Numbers");

        Number.Test();

        Console.ReadKey();
    }

    static void Conversions()
    {
        Introduction("Conversions");

        byte a = 10;
        short aShort = a;

        int b = 10;
        short bShort = (short)b;

        string c = "10.34";
        double cDouble = double.Parse(c);
        bool success = decimal.TryParse(c, out decimal cDecimal);

        decimal d = 11.56M;
        string dString = Convert.ToString(d);

        Console.WriteLine("Parsed values: " + aShort + ", " + bShort + ", " + cDouble + ", " + cDecimal + " (" + success + ")" + ", " + dString + ".");

        Console.ReadLine();
    }

    static void ConstructorOverloading()
    {
        Introduction("Constructor Overloading");

        MCQuestion.Test();

        Console.ReadLine();
    }

    static void AccessorMethods()
    {
        Introduction("Accessor Methods");

        CreditCard cc = new CreditCard();
        cc.Pin = "1234";
        cc.Pin = "1234ef";
        cc.Pin = "123456";
        cc.Pin = "0";
        cc.Pin = "AB12";

        Console.ReadLine();
    }

    static void ExplicitInterfaceImplementation()
    {
        Introduction("Explicit Interface Implementation");

        CirclePoint.Test();

        Console.ReadLine();
    }

    static void ArrayOfMultipleNumbers()
    {
        Introduction("Array of Multiples");

        int[] res = ArrayOfMultiples.CreateMultiples(2, 20);
        foreach (int item in res)
        {
            Console.Write(item + ", ");
        }

        Console.ReadLine();
    }

    static void CustomCollection()
    {
        Introduction("Custom Collection");

        ValidatedDictionary<int>.Test();

        Console.ReadLine();
    }

    static void LargestOfCollections()
    {
        Introduction("Largest Number of Collection");

        FindLargestInCollections.Test();

        Console.ReadLine();
    }

    static void Introduction(string text)
    {
        Console.Clear();
        Console.WriteLine(text);
        Console.ReadKey();
        Console.Clear();
    }
}

/// UTILITIES

class Student
{
    private int _grade = 5;

    public void Print()
    {
        Console.WriteLine("The grade is: " + _grade + ".");
    }

    public ref int RefMethod()
    {
        return ref _grade;
    }
}
