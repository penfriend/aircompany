const PassengerPlane = require('../Planes/PassengerPlane');
const MilitaryPlane = require('../Planes/MilitaryPlane');
const ExperimentalPlane = require('../Planes/ExperimentalPlane');

const PlanesTypes = [
    PassengerPlane.name,
    MilitaryPlane.name,
    ExperimentalPlane.name
];
module.exports = PlanesTypes ;
