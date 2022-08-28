using System;
using System.Collections.Generic;
using BankingConsole.Entities;
using BankingConsole.BusinessLogic;
using BankingConsole.BusinessLogic.Contracts;
using BankingConsole.Exceptions;

namespace BankingConsole.Presentation
{
    public static class CustomerPresentation
    {
        internal static void AddCustomer()
        {
            try
            {
                Customer newCustomer = new Customer();

                // Create a new customer entity.
                Console.WriteLine("\n********* Add Customer *********");
                Console.Write("Customer Name:");
                newCustomer.Name = Console.ReadLine();
                Console.Write("Customer Address:");
                newCustomer.Address = Console.ReadLine();
                Console.Write("Customer Landmark:");
                newCustomer.Landmark = Console.ReadLine();
                Console.Write("Customer City:");
                newCustomer.City = Console.ReadLine();
                Console.Write("Customer Country:");
                newCustomer.Country = Console.ReadLine();
                Console.Write("Customer Mobile Number:");
                newCustomer.Mobile = Console.ReadLine();

                // Use the Business Logic Layer to add it.
                ICustomerBLL customerBLL = new CustomerBLL();
                Guid newId = customerBLL.AddCustomer(newCustomer);

                Console.WriteLine();

                // Retrieve the newly generated Customer Code to display.
                List<Customer> matches = customerBLL.GetCustomersByCondition(c => c.ID == newId);

                if (matches.Count > 0)
                {
                    Console.WriteLine($"Customer Added (Code: {matches[0].Code})!");
                }
                else
                {
                    Console.Write("Customer not added.");
                }
            }
            catch (Exception e)
            {
                Console.WriteLine($"!! Error: {e.Message} !!");
            }
        }

        internal static void ViewCustomers()
        {
            try
            {
                Console.WriteLine("\n********* All Customers *********");

                ICustomerBLL customerBLL = new CustomerBLL();
                List<Customer> all = customerBLL.GetCustomers();

                all.ForEach(customer =>
                {
                    Console.WriteLine($"Code: {customer.Code}");
                    Console.WriteLine($"Name: {customer.Name}");
                    Console.WriteLine($"Address: {customer.Address}");
                    Console.WriteLine($"Landmark: {customer.Landmark}");
                    Console.WriteLine($"City: {customer.City}");
                    Console.WriteLine($"Mobile number: {customer.Mobile}");
                    Console.WriteLine();
                });
            }
            catch (Exception e)
            {
                Console.WriteLine($"!! Error: {e.Message} !!");
            }
        }
    }
}

