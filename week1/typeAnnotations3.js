"use strict";
let airlineName = "IndiGo";
let seatCapacity = 180;
let flightStatus = true;
function getFlightInfo(name, seats) {
    return `${name} has ${seats} seats.`;
}
let destinations = ["Hyderabad", "Delhi", "Mumbai"];
let flightInfo = getFlightInfo(airlineName, seatCapacity);
console.log("Airline:", airlineName);
console.log("Seats:", seatCapacity);
console.log("Status:", flightStatus);
console.log(flightInfo);
console.log("Destinations:", destinations);
