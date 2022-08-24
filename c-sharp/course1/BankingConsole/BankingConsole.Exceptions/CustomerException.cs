namespace BankingConsole.Exceptions
{
    /// <summary>
    /// Represents errors raised in the Customer class.
    /// </summary>
    public class CustomerException: ApplicationException
    {
        /// <summary>
        /// Constructor that initializes the exception message.
        /// </summary>
        /// <param name="message">Exception message.</param>
        public CustomerException(string message) : base(message)
        {
        }

        /// <summary>
        /// Constructor that initializes the exception message and inner exception.
        /// </summary>
        /// <param name="message">Exception message.</param>
        /// <param name="innerException">Inner exception.</param>
        public CustomerException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}