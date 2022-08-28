using System;
using BankingConsole.Entities;
using BankingConsole.Exceptions;
using System.Collections.Generic;
using BankingConsole.DataAccessLayer.Contracts;
using BankingConsole.Entities.Contracts;
using System.Text.RegularExpressions;


namespace BankingConsole.DataAccessLayer
{
    /// <summary>
    /// Represents the DAL of the customer.
    /// </summary>
    public class CustomerDAL : ICustomerDAL
    {
        #region Private fields
        private static List<Customer> _customers;
        #endregion

        #region Private properties
        private static List<Customer> Customers
        {
            get => _customers;
            set => _customers = value;
        }
        #endregion

        #region Constructors
        static CustomerDAL()
        {
            _customers = new List<Customer>();
        }
        #endregion

        #region Methods
        public List<Customer> GetCustomers()
        {
            try
            {
                List<Customer> result = new List<Customer>();

                Customers.ForEach(customer => result.Add(customer.Clone() as Customer));
                return result;
            }
            catch (CustomerException)
            {
                throw;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public List<Customer> GetCustomersByCondition(Predicate<Customer> predicate)
        {
            try
            {
                List<Customer> filteredCustomers = Customers.FindAll(predicate);

                List<Customer> result = new List<Customer>();
                filteredCustomers.ForEach(customer => result.Add(customer.Clone() as Customer));
                return result;
            }
            catch (CustomerException)
            {
                throw;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public Guid AddCustomer(Customer customer)
        {
            try
            {
                customer.ID = Guid.NewGuid();
                Customers.Add(customer);
                return customer.ID;
            }
            catch (CustomerException)
            {
                throw;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public bool UpdateCustomer(Customer customer)
        {
            try
            {
                Customer match = Customers.Find(item => item.ID == customer.ID);
                if (match is null)
                {
                    return false;
                }
                else
                {
                    match.Code = customer.Code;
                    match.Name = customer.Name;
                    match.Address = customer.Address;
                    match.Landmark = customer.Landmark;
                    match.City = customer.City;
                    match.Country = customer.Country;
                    match.Mobile = customer.Mobile;
                    return true;
                }
            }
            catch (CustomerException)
            {
                throw;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public bool DeleteCustomer(Guid customerID)
        {
            try
            {
                return Customers.RemoveAll(item => item.ID == customerID) > 0 ? true : false;
            }
            catch (CustomerException)
            {
                throw;
            }
            catch (Exception)
            {
                throw;
            }
        }
        #endregion
    }
}

