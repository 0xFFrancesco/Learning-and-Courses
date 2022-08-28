using System;
using System.Collections.Generic;
using BankingConsole.BusinessLogic.Contracts;
using BankingConsole.DataAccessLayer;
using BankingConsole.DataAccessLayer.Contracts;
using BankingConsole.Entities;
using BankingConsole.Exceptions;
using BankingConsole.Configuration;

namespace BankingConsole.BusinessLogic
{
    public class CustomerBLL : ICustomerBLL
    {
        #region Private Fields
        private ICustomerDAL _customerDAL;
        #endregion

        #region Constructors
        /// <summary>
        /// Constructor that initializes CustomerDAL.
        /// </summary>
        public CustomerBLL()
        {
            _customerDAL = new CustomerDAL();
        }
        #endregion

        #region Properties
        /// <summary>
        /// Private property that represents a reference of CustomerDAL.
        /// </summary>
        private ICustomerDAL CustomerDAL
        {
            get => _customerDAL;
            set => _customerDAL = value;
        }
        #endregion

        #region Methods
        public Guid AddCustomer(Customer customer)
        {
            try
            {
                // Generate a new Customer Code
                List<Customer> all = CustomerDAL.GetCustomers();
                long max = 0;

                if (all.Count > 0)
                {
                    all.ForEach(item => max = item.Code > max ? item.Code : max);
                    max++;
                }
                else
                {
                    max = Settings.BaseCustomerNumber;
                }

                customer.Code = max;

                // Invoke DAL
                return CustomerDAL.AddCustomer(customer);

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
                // Invoke DAL
                return CustomerDAL.DeleteCustomer(customerID);

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

        public List<Customer> GetCustomers()
        {
            try
            {
                // Invoke DAL
                return CustomerDAL.GetCustomers();

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
                // Invoke DAL
                return CustomerDAL.GetCustomersByCondition(predicate);

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
                // Invoke DAL
                return CustomerDAL.UpdateCustomer(customer);

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
