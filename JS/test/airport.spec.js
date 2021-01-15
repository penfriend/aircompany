const assert = require('chai').assert;
const PassengerPlane = require('../Planes/PassengerPlane');
const MilitaryAirport = require('../Airports/MilitaryAirport');
const PassengerAirport = require('../Airports/PassengerAirport');
const ExperimentalAirport = require('../Airports/ExperimentalAirport');
const MilitaryType = require('../types/MilitaryType');
const planes = require('../initData');

describe('unit Tests of the airport app', () => {

    let planeWithMaxPassengerCapacity = new PassengerPlane('Boeing-747', 980, 16100, 70500, 242);
    let planeWithMaxLoadCapacity = new PassengerPlane('Airbus A330', 990, 14800, 80500, 222);

    it('should have military Planes with transport type', () => {
        assert.isTrue(new MilitaryAirport(planes).getMilitaryCertainTypePlanes(MilitaryType.TYPE_TRANSPORT).length > 0);
    });

    it('should get passenger plane with max capacity', () => {
        assert.deepEqual(new PassengerAirport(planes).getPlaneWithMaxPassengersCapacity(), planeWithMaxPassengerCapacity);
    })


    it('should get max load capacity passenger plane', () => {
        assert.deepEqual(new PassengerAirport(planes).sortByMaxPlaneProperty('maxLoadCapacity')[0], planeWithMaxLoadCapacity);
    })

    it('should have military Planes with bomber type', () => {
        assert.isTrue(new MilitaryAirport(planes).getMilitaryCertainTypePlanes(MilitaryType.TYPE_BOMBER).length > 0);
    })

    it('should check that experimental planes has classification level higher than unclassified', () => {
        assert.isFalse(new ExperimentalAirport(planes).hasUnclassifiedPlanes()); 
    });
});



