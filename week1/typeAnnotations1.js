"use strict";
let collegeName = "SVECW";
let establishedYear = 2008;
let isAutonomous = true;
function getCollegeDetails(name, year) {
    return `${name} was established in ${year}.`;
}
let courses = ["CSE", "ECE", "EEE", "IT"];
let collegeInfo = getCollegeDetails(collegeName, establishedYear);
console.log("College Name:", collegeName);
console.log("Established Year:", establishedYear);
console.log("Autonomous:", isAutonomous);
console.log(collegeInfo);
console.log("Courses:", courses);
