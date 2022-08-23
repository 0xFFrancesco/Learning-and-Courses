using System;
using System.Collections.Generic;

namespace MyLibraryClasses
{
    public static class FindLargestInCollections
    {
        static public List<int> Find(List<List<int>> collections)
        {
            List<int> results = new List<int>();

            foreach(List<int> collection in collections)
            {
                int collectionMax = 0;
                foreach(int value in collection)
                {
                    collectionMax = value > collectionMax ? value : collectionMax;
                }
                results.Add(collectionMax);
            }

            return results;
        }

        public static void Test()
        {
            var testInput = new List<List<int>>() {
                new List<int>( ) { 67, 100, 23 },
                new List<int>( ) { 80, 99, 750, 99 },
                new List<int>( ) { 888, 333, 9898 }
            };

            var result = Find(testInput);

            Console.WriteLine("Largest numbers:");
            int i = 0;
            foreach(int item in result)
            {
                i++;
                Console.WriteLine("Collection {0} -> {1}.", i, item);
            }

        }
    }
}

