using System;
using BankingConsole.Entities;
using System.Collections.Generic;

namespace BankingConsole.DataAccessLayer.Contracts
{ 
    /// <summary>
    /// Represents the customers data access layer.
    /// </summary>
    public interface ICustomerDAL
    {
        /// <summary>
        /// Returns all existing customers.
        /// </summary>
        /// <returns>All existing customers.</returns>
        List<Customer> GetCustomers();

        /// <summary>
        /// Returns a set of customers based on a predicate.
        /// </summary>
        /// <param name="predicate">A predicate to check if the customer matches the condition.</param>
        /// <returns>The matching customers.</returns>
        List<Customer> GetCustomersByCondition(Predicate<Customer> predicate);

        /// <summary>
        /// Adds a new customer.
        /// </summary>
        /// <param name="customer">The customer object to be added.</param>
        /// <returns>The Guid of the newly added customer.</returns>
        Guid AddCustomer(Customer customer);

        /// <summary>
        /// Updates an existing customer.
        /// </summary>
        /// <param name="customer">The customer object with the updared properties.</param>
        /// <returns>True if successful, otherwise false.</returns>
        bool UpdateCustomer(Customer customer);

        /// <summary>
        /// Deletes an existing customer.
        /// </summary>
        /// <param name="customerID">The Guid of the customer to be deleted.</param>
        /// <returns>True if successful, otherwise false.</returns>
        bool DeleteCustomer(Guid customerID);

    }
}

