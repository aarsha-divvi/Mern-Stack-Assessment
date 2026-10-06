"use strict";
var Mathematics;
(function (Mathematics) {
    function square(num) {
        return num * num;
    }
    Mathematics.square = square;
})(Mathematics || (Mathematics = {}));
console.log(Mathematics.square(5));
