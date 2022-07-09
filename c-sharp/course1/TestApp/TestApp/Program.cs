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
        ConstructorOverloading();
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

    static void NearestThousand()
    {
        Introduction("Nearest Thousand");

        for (byte x = 0; x < 3; x++)
        {
            System.Console.WriteLine("Type an integer number.");
            int number = System.Convert.ToInt32(Console.ReadLine());
            int nearestThousand = 1000;
            if (number > 1499)
            {
                int remainder = number % 1000;
                nearestThousand = ((number - remainder) / 1000 + (remainder > 499 ? 1 : 0)) * 1000;
            }
            System.Console.WriteLine("The nearest thousand of " + number + " is " + nearestThousand + ".");
        }

        System.Console.ReadKey();
    }

    static void SecondsToTime()
    {
        Introduction("Seconds to Time");


        System.Console.WriteLine("Type an integer number representing seconds.");

        int seconds = System.Convert.ToInt32(Console.ReadLine());

        int displayS = seconds % 60;
        int minutes = (seconds - displayS) / 60;
        int displayM = minutes % 60;
        int hours = (minutes - displayM) / 60;
        int displayH = hours % 24;
        int days = (hours - displayH) / 24;

        System.Console.WriteLine(days + " Days, " + displayH + " Hours, " + displayM + " Minutes, " + displayS + " Seconds.");
        System.Console.ReadKey();
    }

    static void HeightCategory()
    {
        Introduction("Height Category");


        System.Console.WriteLine("Type an integer number representing the height in inches.");
        byte inches = System.Convert.ToByte(Console.ReadLine());
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

        System.Console.WriteLine("You are " + category + ".");
        System.Console.ReadKey();
    }

    static void LargerAmong3()
    {
        Introduction("Larger Among 3");

        int max = 0;
        for (byte x = 0; x < 3; x++)
        {
            System.Console.WriteLine("Type an integer number.");
            int number = System.Convert.ToInt32(Console.ReadLine());
            if (number > max)
            {
                max = number;
            }
        }
        System.Console.WriteLine("The larger number is: " + max + ".");
        System.Console.ReadKey();
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
                System.Console.Write(n + " ");
            }
            System.Console.WriteLine();
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

            System.Console.WriteLine("\nType 1 to generate a new employee, 0 to exit.");
            System.Console.Write("Enter choice:");
            choice = System.Convert.ToSByte(System.Console.ReadLine());

            if (choice == 1)
            {
                Employee employee = new Employee(i, "Finance");
                employee.Name = "Name";
                employee.SalaryPerHour = 30.5;
                employee.WorkingHours = 8 * 5 * 4 * 12;
                employee.NetSalary = employee.WorkingHours * employee.SalaryPerHour;

                System.Console.WriteLine("--------------------");
                System.Console.WriteLine("Id: " + employee.Id);
                System.Console.WriteLine("Name: " + employee.Name);
                System.Console.WriteLine("Salary/h: " + employee.SalaryPerHour);
                System.Console.WriteLine("Working hours: " + employee.WorkingHours);
                System.Console.WriteLine("Net salary: " + employee.NetSalary);
                System.Console.WriteLine("Organization name: " + Employee.OrgName);
                System.Console.WriteLine("Type: " + Employee.EmployeeType);
                System.Console.WriteLine("Department: " + employee.Department);
                System.Console.WriteLine("--------------------");

            }
        } while (choice != 0);

        System.Console.ReadKey();
    }

    static void RefReturn()
    {
        Introduction("Ref Return");

        Student student = new Student();
        student.Print();
        ref int studentGradeRef = ref student.RefMethod();
        studentGradeRef = 8;
        student.Print();

        System.Console.ReadKey();
    }

    static void Numbers()
    {
        Introduction("Numbers");

        Number.Test();

        System.Console.ReadKey();
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
        string dString = System.Convert.ToString(d);

        System.Console.WriteLine("Parsed values: " + aShort + ", " + bShort + ", " + cDouble + ", " + cDecimal + " (" + success + ")" + ", " + dString + ".");

        System.Console.ReadLine();
    }

    static void ConstructorOverloading()
    {
        Introduction("Constructor Overloading");

        MCQuestion.Test();

        System.Console.ReadLine();
    }

    static void Introduction(string text)
    {
        System.Console.Clear();
        System.Console.WriteLine(text);
        System.Console.ReadKey();
        System.Console.Clear();
    }
}

/// UTILITIES

class Student
{
    private int _grade = 5;

    public void Print()
    {
        System.Console.WriteLine("The grade is: " + _grade + ".");
    }

    public ref int RefMethod()
    {
        return ref _grade;
    }
}
