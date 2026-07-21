let collegeName: string = "SVECW";
let establishedYear: number = 2008;
let isAutonomous: boolean = true;

function getCollegeDetails(name: string, year: number): string {
    return `${name} was established in ${year}.`;
}

let courses: string[] = ["CSE", "ECE", "EEE", "IT"];

let collegeInfo: string = getCollegeDetails(collegeName, establishedYear);

console.log("College Name:", collegeName);
console.log("Established Year:", establishedYear);
console.log("Autonomous:", isAutonomous);
console.log(collegeInfo);
console.log("Courses:", courses);