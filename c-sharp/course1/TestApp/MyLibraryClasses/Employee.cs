namespace MyLibraryClasses
{
    public class Employee
    {
        public int Id;
        public string Name;
        public double SalaryPerHour;
        public double WorkingHours;
        public double NetSalary;

        public static string OrgName;
        public const string EmployeeType = "Contract Based";
        public readonly string Department;

        public Employee(int id, string department)
        {
            Id = id;
            Department = department;
        }
    }
}

