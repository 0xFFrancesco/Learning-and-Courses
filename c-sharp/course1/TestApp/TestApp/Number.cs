using System;

namespace TestApp
{
    public class Number
    {

        private int value;

        public Number()
        {
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
                for (int i = 1; i < exp; i++)
                {
                    result *= n;
                }
            }
            return result;
        }

        private int[] GetNumberDigits()
        {
            char[] digits = System.Convert.ToString(value).ToCharArray();
            int[] res = new int[digits.Length];
            for (int i = 0; i < digits.Length; i++)
            {
                res[i] = System.Convert.ToInt32(char.GetNumericValue(digits[i]));
            }
            return res;
        }

        public int GetCountOfDigits()
        {
            return GetNumberDigits().Length;
        }

        public int GetSumOfDigits()
        {
            int[] n = GetNumberDigits();
            int sum = 0;
            for (int i = 0; i < n.Length; i++)
            {
                sum += n[i];
            }
            return sum;
        }

        public int GetReverse()
        {
            int[] n = GetNumberDigits();
            string res = "";
            for (int i = n.Length; i > 0; i--)
            {
                int digit = n[i - 1];
                res += digit;
            }
            return System.Convert.ToInt32(res);
        }

        public string ToWords()
        {
            int[] n = GetNumberDigits();
            string res = "";
            for (int i = 0; i < n.Length; i++)
            {
                res += GetWord(n[i]);
                if (i < n.Length - 1)
                {
                    res += " ";
                }
            }
            return res;

        }

        public static string GetWord(int digit)
        {
            string[] words = { "Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine" };
            return words[digit];
        }

        public bool IsArmstrong()
        {
            int[] n = GetNumberDigits();
            int len = n.Length;
            int sum = 0;

            for (int i = 0; i < len; i++)
            {
                sum += Power(n[i], len);
            }

            return sum == value;
        }

        public string GetFibonacci()
        {
            int prev = 0;
            int current = 1;
            int tmp;
            string res = "0";

            do
            {

                if (current > value)
                {
                    break;
                }
                else
                {
                    res += " " + current;
                }

                tmp = current;
                current += prev;
                prev = tmp;

            } while (true);

            return res;
        }

        public bool isPalindrome()
        {
            return value == GetReverse();
        }

        public static void Test()
        {
            Number number = new Number();
            number.SetValue(371); //you can set any integer value
            System.Console.WriteLine("Value: " + number.GetValue()); //Output: 371
            System.Console.WriteLine("IsZero: " + number.IsZero()); //Output: False
            System.Console.WriteLine("IsPositive: " + number.IsPositive()); //Output: True
            System.Console.WriteLine("IsNegative: " + number.IsNegative()); //Output: False
            System.Console.WriteLine("IsOdd: " + number.IsOdd()); //Output: True
            System.Console.WriteLine("IsEven: " + number.IsEven()); //Output: False
            System.Console.WriteLine("IsPrime: " + number.IsPrime()); //Output: False
            System.Console.WriteLine("GetCountOfDigits: " + number.GetCountOfDigits()); //Output: 3
            System.Console.WriteLine("GetSumOfDigits: " + number.GetSumOfDigits()); //Output: 11
            System.Console.WriteLine("GetReverse: " + number.GetReverse()); //Output: 173
            System.Console.WriteLine("ToWords: " + number.ToWords()); //Output: Three Seven One
            System.Console.WriteLine("IsArmstrong: " + number.IsArmstrong()); //Output: True
            System.Console.WriteLine("GetFibonacci: " + number.GetFibonacci()); //Output: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233
            System.Console.WriteLine("isPalindrome: " + number.isPalindrome()); //Output: False
            System.Console.ReadKey();
        }
    }
}

