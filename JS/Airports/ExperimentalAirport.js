const Airport = require('./Airport');
const ExperimentalPlane = require('../Planes/experimentalPlane');
const ClassificationLevel = require('../types/ClassificationLevel');

class ExperimentalAirport extends Airport {
    constructor(planes) {
        super(Airport.getCertainTypePlanes(planes,ExperimentalPlane));
    }
    
    hasUnclassifiedPlanes() {
        return this.planes.filter(experimentalPlane => experimentalPlane.classificationLevel === ClassificationLevel.UNCLASSIFIED).length > 0;
    }
}
module.exports = ExperimentalAirport;