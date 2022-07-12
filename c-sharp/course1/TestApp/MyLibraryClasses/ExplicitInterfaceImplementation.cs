using System;

namespace MyLibraryClasses
{
    interface IPoint
    {
        void Draw();
    }

    interface ICircle
    {
        void Draw();
    }

    public class CirclePoint : IPoint, ICircle
    {
        void IPoint.Draw()
        {
            Console.WriteLine("Point");
        }

        void ICircle.Draw()
        {
            Console.WriteLine("Circle");
        }

        public void Draw()
        {
            Console.WriteLine("Circle Point");
        }

        public static void Test()
        {
            IPoint a = new CirclePoint();
            a.Draw(); /// Point
            ICircle b = new CirclePoint();
            b.Draw(); /// Circle
            CirclePoint c = new CirclePoint();
            c.Draw(); /// Circle Point

        }
    }
}

