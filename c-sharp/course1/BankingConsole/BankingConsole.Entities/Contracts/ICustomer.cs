namespace BankingConsole.Entities.Contracts
{
    /// <summary>
    /// Represents the interface of a customer entity.
    /// </summary>
    public interface ICustomer
    {
        #region Properties
        Guid ID { get; set; }
        long Code { get; set; }
        string Name { get; set; }
        string Address { get; set; }
        string Landmark { get; set; }
        string City { get; set; }
        string Country { get; set; }
        string Mobile { get; set; }
        #endregion
    }
}
