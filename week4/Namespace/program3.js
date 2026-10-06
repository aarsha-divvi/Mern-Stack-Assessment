"use strict";
var Vehicle;
(function (Vehicle) {
    function show(model) {
        console.log("Vehicle:", model);
    }
    Vehicle.show = show;
})(Vehicle || (Vehicle = {}));
Vehicle.show("Chetak");
