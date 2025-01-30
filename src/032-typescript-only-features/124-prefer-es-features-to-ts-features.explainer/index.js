// Each of these has a relatively predictable output,
// but it's not as predictable as just using
// ES features directly.
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var MathUtils;
(function (MathUtils) {
    MathUtils.PI = 3.14;
    MathUtils.E = 2.71;
})(MathUtils || (MathUtils = {}));
var MyClass = /** @class */ (function () {
    function MyClass(myPrivateProp) {
        this.myPrivateProp = myPrivateProp;
    }
    return MyClass;
}());
// Open enum bugs:
// https://github.com/Microsoft/TypeScript/issues?q=is%3Aissue+is%3Aopen+enum+label%3Abug
