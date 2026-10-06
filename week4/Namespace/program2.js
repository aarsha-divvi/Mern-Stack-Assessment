"use strict";
var College_;
(function (College_) {
    function details(name) {
        console.log("College:", name);
    }
    College_.details = details;
})(College_ || (College_ = {}));
College_.details("SVECW");
