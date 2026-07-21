let airlineName: string = "IndiGo";
let seatCapacity: number = 180;
let flightStatus: boolean = true;

function getFlightInfo(name: string, seats: number): string {
    return `${name} has ${seats} seats.`;
}

let destinations: string[] = ["Hyderabad", "Delhi", "Mumbai"];

let flightInfo: string = getFlightInfo(airlineName, seatCapacity);

console.log("Airline:", airlineName);
console.log("Seats:", seatCapacity);
console.log("Status:", flightStatus);
console.log(flightInfo);
console.log("Destinations:", destinations);