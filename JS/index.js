const Airport = require('./Airports/Airport');
const PassengerAirport = require('./Airports/PassengerAirport');
const MilitaryAirport = require('./Airports/MilitaryAirport');
const planes = require('./initData');

(function run() {
    let militaryAirport = new MilitaryAirport(planes);
    let passengerAirport = new PassengerAirport(planes);
    console.log(`Military airport sorted by max distance: ${Airport.planesToJSON(militaryAirport.sortByMaxPlaneProperty('maxFlightDistance'))}`);
    console.log(`Passenger airport sorted by max speed: ${Airport.planesToJSON(passengerAirport.sortByMaxPlaneProperty('maxSpeed'))}`);
    console.log(`Plane with max passenger capacity: ${Airport.planesToJSON(passengerAirport.getPlaneWithMaxPassengersCapacity())}`);
})();