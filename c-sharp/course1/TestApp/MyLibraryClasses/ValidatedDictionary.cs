using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;

namespace MyLibraryClasses
{
    /// <summary>
    ///     ValidatedDictionary: only accepts strings as Key.
    ///     Keys not matching a validator (parameter in the constructor) are ignored and not added to the dictionary.
    /// </summary>
    /// <typeparam name="V">Type of the values.</typeparam>
    public class ValidatedDictionary<V> : IDictionary<string, V>
    {
        private IDictionary<string, V> Dict = new Dictionary<string, V>();
        private Predicate<string> KeyValidator;

        public ValidatedDictionary(Predicate<string> keyValidator) {
            KeyValidator = keyValidator;
        }

        public V this[string key]
        {
            get => Dict[key];
            set
            {
                if (KeyValidator(key))
                {
                    Dict[key] = value;
                }
            }
        }

        public ICollection<string> Keys => Dict.Keys;

        public ICollection<V> Values => Dict.Values;

        public int Count => Dict.Count;

        public bool IsReadOnly => Dict.IsReadOnly;

        public void Add(string key, V value)
        {
            if (KeyValidator(key))
            {
                Dict.Add(key, value);
            }
            
        }

        public void Add(KeyValuePair<string, V> item)
        {
            if (KeyValidator(item.Key))
            {
                Dict.Add(item);
            }
        }

        public void Clear()
        {
            Dict.Clear();
        }

        public bool Contains(KeyValuePair<string, V> item)
        {
            return Dict.Contains(item);
        }

        public bool ContainsKey(string key)
        {
            return Dict.ContainsKey(key);
        }

        public void CopyTo(KeyValuePair<string, V>[] array, int arrayIndex)
        {
            Dict.CopyTo(array, arrayIndex);
        }

        public IEnumerator<KeyValuePair<string, V>> GetEnumerator()
        {
            return Dict.GetEnumerator();
        }

        public bool Remove(string key)
        {
            return Dict.Remove(key);
        }

        public bool Remove(KeyValuePair<string, V> item)
        {
            return Dict.Remove(item);
        }

        public bool TryGetValue(string key, [MaybeNullWhen(false)] out V value)
        {
            return Dict.TryGetValue(key, out value);
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return GetEnumerator();
        }

        public static void Test()
        {
            Predicate<string> validator = (key) => key.StartsWith("CU-");
            ValidatedDictionary<int> instance = new ValidatedDictionary<int>(validator)
            {
                {"CU-100001", 25},
                {"CU-100002", 300},
                {"EE-300301", 11},
                {"EE-300302", 440},
                {"CU-100003", 532},
            };

            instance.Add("CU-100004", 994);
            instance.Add("EE-300303", 244);
            instance["EE-300304"] = 345;
            instance["CU-100005"] = 552;
            instance["CU-100005"] = 661;
            instance.TryAdd("EE-300305", 993);

            Console.WriteLine("Validated Dictionay.");
            Console.WriteLine(">>> Keys are only strings, and must start with \"CU-\".");

            foreach(var item in instance)
            {
                Console.WriteLine("Customer " + item.Key + " has a total amount of: " + item.Value + ".");
            }
        }
    }
}

