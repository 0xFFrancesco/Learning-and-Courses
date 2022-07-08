using System;

namespace TestApp
{
    public class Number
    {

        private int value;

        public Number(int value)
        {
            this.value = value;
        }

        public void SetValue(int newValue)
        {
            value = newValue;
        }

        public int GetValue()
        {
            return value;
        }

        public bool IsZero()
        {
            return value == 0;
        }

        public bool IsPositive()
        {
            return value > 0;
        }

        public bool IsNegative()
        {
            return value < 0;
        }

        public bool IsOdd()
        {
            return (value % 2) != 0;
        }

        public bool IsEven()
        {
            return (value % 2) == 0;
        }

        public bool IsPrime()
        {
            if (Math.Abs(value) < 2)
            {
                return true;
            }

            for (int x = 2; x < value; x++)
            {
                if (value % x == 0)
                {
                    return false;
                }
            }


            return true;
        }

        public static int Power(int n, int exp, bool recursive = false)
        {
            if (exp == 0)
            {
                return 1;
            }

            int result = n;
            if (recursive)
            {
                result *= Power(n, exp - 1, true);
            }
            else
            {
                for (int i = 1; i <= exp; i++)
                {
                    result *= n;
                }
            }
            return result;
        }

        private char[] GetNumberDigits()
        {
            return System.Convert.ToString(value).ToCharArray();
        }

        public int GetCountOfDigits()
        {
            return GetNumberDigits().Length;
        }

        public int GetSumOfDigits()
        {
            char[] n = GetNumberDigits();
            int sum = 0;
            for (int i = 0; i < n.Length; i++)
            {
                int digit = System.Convert.ToInt32(n[i]);
                sum += digit;
            }
            return sum;
        }

        public int GetReverse()
        {
            char[] n = GetNumberDigits();
            string res = "";
            for (int i = n.Length; i > 0; i--)
            {
                int digit = n[i - 1];
                res += digit;
            }
            return System.Convert.ToInt32(res);
        }

        public void Test()
        {

        }
    }
}

