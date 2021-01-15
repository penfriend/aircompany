const Airport = require('./Airport');
const MilitaryPlane = require('../Planes/MilitaryPlane');

class MilitaryAirport extends Airport {
    constructor(planes) {
        super(Airport.getCertainTypePlanes(planes,MilitaryPlane));
    }

    getMilitaryCertainTypePlanes(militaryType){
        return this.planes.filter(plane => plane.militaryType === militaryType);
    }

}
module.exports = MilitaryAirport;