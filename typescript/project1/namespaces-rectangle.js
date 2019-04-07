//namespaces
////////////
var MyMathRectangle;
(function (MyMathRectangle) {
    function area(width, length) {
        return width * length;
    }
    MyMathRectangle.area = area;
})(MyMathRectangle || (MyMathRectangle = {}));
