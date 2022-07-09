using System;
namespace MyLibraryClasses
{
    public class MCQuestion
    {
        public string questionText;
        public string optionA;
        public string optionB;
        public string optionC;
        public string optionD;
        public char correctOption;

        private static char defaultCorrectOption = 'A';

        public MCQuestion()
        {
            correctOption = defaultCorrectOption;
        }

        public MCQuestion(string questionText)
        {
            this.questionText = questionText;
            correctOption = defaultCorrectOption;
        }

        public MCQuestion(string questionText, string a, string b, string c, string d, char correct)
        {
            this.questionText = questionText;
            optionA = a;
            optionB = b;
            optionC = c;
            optionD = d;
            correctOption = correct;
        }

        public bool isValidQuestion()
        {
            byte options = 0;
            if (!String.IsNullOrEmpty(optionA))
            {
                options++;
            }
            if (!String.IsNullOrEmpty(optionB))
            {
                options++;
            }
            if (!String.IsNullOrEmpty(optionC))
            {
                options++;
            }
            if (!String.IsNullOrEmpty(optionD))
            {
                options++;
            }
            return options > 1;
        }

        public static void Test()
        {
            MCQuestion q1 = new MCQuestion();
            MCQuestion q2 = new MCQuestion("Q2 text");
            MCQuestion q3 = new MCQuestion("Q3 text", "Opt. A", "Opt. B", "Opt. C", "Opt. D", 'C');
            MCQuestion q4 = new MCQuestion()
            {
                questionText = "Q4 text",
                optionA = "Opt. A",
                optionB = "Opt. B",
                optionC = "Opt. C",
                optionD = "Opt. D"
            };

            System.Console.WriteLine(q1.isValidQuestion());
            System.Console.WriteLine(q2.isValidQuestion());
            System.Console.WriteLine(q3.isValidQuestion());
            System.Console.WriteLine(q4.isValidQuestion());
        }
    }
}

