class BankingConsole
{
    static void Main()
    {
        string username = null, password = null;

        System.Console.WriteLine("********* Banking Console *********");
        System.Console.WriteLine("::Login Page::");

        System.Console.Write("Username:");
        username = System.Console.ReadLine();

        if (username != "")
        {
            System.Console.Write("Password:");
            password = System.Console.ReadLine();
        }

        if (username == "admin" && password == "admin")
        {

            sbyte menuChoiche = -1;
            do
            {

                System.Console.WriteLine("\n::Main Menu::");
                System.Console.WriteLine("1. Customers");
                System.Console.WriteLine("2. Accounts");
                System.Console.WriteLine("3. Funds Transfer");
                System.Console.WriteLine("4. Funds Transfer Statement");
                System.Console.WriteLine("5. Account Statement");
                System.Console.WriteLine("0. Exit");

                System.Console.Write("Enter choice:");
                menuChoiche = System.Convert.ToSByte(System.Console.ReadLine());

                switch (menuChoiche)
                {
                    case 1:
                        {
                            CustomersMenu();
                            break;
                        }
                    case 2:
                        {
                            AccountsMenu();
                            break;
                        }
                    case 3:
                        {
                            //
                            break;
                        }
                    case 4:
                        {
                            //
                            break;
                        }
                    case 5:
                        {
                            //
                            break;
                        }
                }
            } while (menuChoiche != 0);
        }
        else
        {
            System.Console.WriteLine("Invalid username or password.");
        }

        System.Console.WriteLine("Thank your for your visit!");
        System.Console.ReadKey();
    }

    static void CustomersMenu()
    {
        sbyte menuChoiche = -1;
        do
        {
            System.Console.WriteLine("\n::Customers Menu::");
            System.Console.WriteLine("1. Add Customer");
            System.Console.WriteLine("2. Delete Customer");
            System.Console.WriteLine("3. Update Customer");
            System.Console.WriteLine("4. View Customer");
            System.Console.WriteLine("0. Back to Main Menu");

            System.Console.Write("Enter choice:");

            menuChoiche = System.Convert.ToSByte(System.Console.ReadLine());

            switch (menuChoiche)
            {
                case 1:
                    {
                        //
                        break;
                    }
                case 2:
                    {
                        //
                        break;
                    }
                case 3:
                    {
                        //
                        break;
                    }
                case 4:
                    {
                        //
                        break;
                    }
            }
        } while (menuChoiche != 0);
    }

    static void AccountsMenu()
    {
        sbyte menuChoiche = -1;
        do
        {
            System.Console.WriteLine("\n::Accounts Menu::");
            System.Console.WriteLine("1. Add Account");
            System.Console.WriteLine("2. Delete Account");
            System.Console.WriteLine("3. Update Account");
            System.Console.WriteLine("4. View Accounts");
            System.Console.WriteLine("0. Back to Main Menu");

            System.Console.Write("Enter choice:");

            menuChoiche = System.Convert.ToSByte(System.Console.ReadLine());

            switch (menuChoiche)
            {
                case 1:
                    {
                        //
                        break;
                    }
                case 2:
                    {
                        //
                        break;
                    }
                case 3:
                    {
                        //
                        break;
                    }
                case 4:
                    {
                        //
                        break;
                    }
            }
        } while (menuChoiche != 0);
    }
}