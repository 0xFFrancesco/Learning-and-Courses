using System;
using BankingConsole.Entities.Contracts;
using BankingConsole.Exceptions;

namespace BankingConsole.Entities
{ 
    /// <summary>
    /// Represents a customer of the bank.
    /// </summary>
    public class Customer: ICustomer, ICloneable
    {
        #region Private fields
        private Guid _ID;
        private long _code;
        private string _name;
        private string _address;
        private string _landmark;
        private string _city;
        private string _country;
        private string _mobile;
        #endregion

        #region Public properties
        /// <summary>
        /// Guid of the customer for unique identification.
        /// </summary>
        public Guid ID { get => _ID; set => _ID = value; }

        /// <summary>
        /// Auto-generated code number of the customer.
        /// </summary>
        public long Code {
            get => _code;
            set
            {
                if (value > 0)
                {
                    _code = value;
                }
                else
                {
                    throw new CustomerException("Invalid customer code (less than 1).");
                }
            }
        }

        /// <summary>
        /// Name of the customer.
        /// </summary>
        public string Name {
            get => _name;
            set
            {
                if (!string.IsNullOrEmpty(value) && value.Length < 40)
                {
                    _name = value;
                }
                else
                {
                    throw new CustomerException("Invalid customer name (null or greater than 40 characters).");
                }
            }
        }

        /// <summary>
        /// Address of the customer.
        /// </summary>
        public string Address { get => _address; set => _address = value; }

        /// <summary>
        /// Landmark of the customer.
        /// </summary>
        public string Landmark { get => _landmark; set => _landmark = value; }

        /// <summary>
        /// City of the customer.
        /// </summary>
        public string City { get => _city; set => _city = value; }

        /// <summary>
        /// Country of the customer.
        /// </summary>
        public string Country { get => _country; set => _country = value; }

        /// <summary>
        /// Mobile number of the customer (10 digits).
        /// </summary>
        public string Mobile {
            get => _mobile;
            set
            {
                if (value.Length == 10)
                {
                    _mobile = value;
                }
                else
                {
                    throw new CustomerException("Invalid mobile number (different than 10 digits).");
                }
            }
        }
        #endregion

        #region Methods
        public object Clone()
        {
            return new Customer()
            {
                ID = this.ID,
                Code = this.Code,
                Name = this.Name,
                Address = this.Address,
                Landmark = this.Landmark,
                City = this.City,
                Country = this.Country,
                Mobile = this.Mobile
            };
        }
        #endregion
    }
}

