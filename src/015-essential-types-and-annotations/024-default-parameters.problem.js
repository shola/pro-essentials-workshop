"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var concatName = function (first, last) {
    if (!last) {
        return first;
    }
    return "".concat(first, " ").concat(last);
};
(0, vitest_1.it)("should return the full name", function () {
    var result = concatName("John", "Doe");
    (0, vitest_1.expect)(result).toEqual("John Doe");
});
(0, vitest_1.it)("should return the first name", function () {
    var result = concatName("John");
    (0, vitest_1.expect)(result).toEqual("John Pocock");
});
