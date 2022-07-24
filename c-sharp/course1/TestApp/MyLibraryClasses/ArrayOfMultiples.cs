using System;
namespace MyLibraryClasses
{
    public static class ArrayOfMultiples
    {
        public static int[] CreateMultiples(int n, int length)
        {
            int[] res = new int[length];
            for (int i = 0; i < length; i++)
            {
                res[i] = n * (i + 1);
            }
            return res;
        }
    }
}

