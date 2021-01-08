const PassengerPlane = require('./Planes/PassengerPlane');
const MilitaryPlane = require('./Planes/MilitaryPlane');
const PlanesTypes = require('./models/planesTypes');

class Airport {

    constructor(planes) {
        this.planes = planes;
    }

    get getPlanes() {
        return this.planes;
    }

    getCertainTypePlanes(type) {
       if (!PlanesTypes.includes(type.name)) throw new TypePlaneError(type);;
        let typePlanes = [];
        this.getPlanes.forEach(plane => {
            if (plane instanceof type) {
                typePlanes.push(plane);
            }
        });
        return typePlanes;
    }

    getMilitaryCertainTypePlanes(militaryType){
        let militaryCertainTypePlanes = [];
        let militaryPlanes =  this.getCertainTypePlanes(MilitaryPlane);
        for (let i = 0; i < militaryPlanes.length; i++) {
        if (militaryPlanes[i].getMilitaryType == militaryType) {
            militaryCertainTypePlanes.push(militaryPlanes[i]);
        }
        }
        return militaryCertainTypePlanes;
    }

    sortByMaxPlaneProperty(planeProperty) {
        this.getPlanes.sort((a, b) => eval(`a.${planeProperty}`) <= eval(`b.${planeProperty}`) ? 1 : -1);
        return this; 
    }

    getPassengerPlaneWithMaxPassengersCapacity() {
        return this.getCertainTypePlanes(PassengerPlane).sort((plane1,plane2) => plane1.getPassengersCapacity <= plane2.getPassengersCapacity ? 1 : -1)[0];
    }

    static planesToJSON(planes) {
        return JSON.stringify(planes);
    }
}

module.exports = Airport;
