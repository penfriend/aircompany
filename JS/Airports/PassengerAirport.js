const Airport = require('./Airport');
const PassengerPlane = require('../Planes/PassengerPlane');

class PassengerAirport extends Airport {
    constructor(planes) {
        super(Airport.getCertainTypePlanes(planes,PassengerPlane));
    }
    
    getPlaneWithMaxPassengersCapacity() {
        return this.planes.sort((plane1,plane2) => plane1.passengersCapacity <= plane2.passengersCapacity ? 1 : -1)[0];
    }

}
module.exports = PassengerAirport;