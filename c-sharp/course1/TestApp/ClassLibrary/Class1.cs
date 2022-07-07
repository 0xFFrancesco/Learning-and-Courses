namespace ClassLibrary;
public class Employee
{
    int Id;
    string Name = "";
    double SalaryPerHour;
    double WorkingHours;
    double NetSalary;

    static string OrgName;
    const string EmployeeType = "Contract Based";
    readonly string Department;

    public Employee(string department)
    {
        Department = department;
    }
}

