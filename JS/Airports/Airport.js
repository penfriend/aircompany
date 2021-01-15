class Airport {

    constructor(planes) {
        this._planes = planes;
    }

    get planes() {
        return this._planes;
    }

    sortByMaxPlaneProperty(planeProperty) {
        return this.planes.sort((a, b) => a[planeProperty] <= b[planeProperty] ? 1 : -1);
    }

    static getCertainTypePlanes(planes, type) {
        return planes.filter(plane => plane instanceof type);
    }

    static planesToJSON(planes) {
        return JSON.stringify(planes);
    }
}

module.exports = Airport;
