using System;

namespace MyLibraryClasses
{
    public class CreditCard
    {

        public CreditCard()
        {
        }

        private string _pin;
        public string Pin
        {
            set
            {
                if (value.Length < 4 || value.Length > 6 || !Int32.TryParse(value, out int _))
                {
                    System.Console.WriteLine("Error: invalid PIN (" + value + ")!");
                    return;
                }
                System.Console.WriteLine("PIN set (" + value + ")!");
                _pin = value;
            }
            get
            {
                return _pin;
            }
        }
    }
}

