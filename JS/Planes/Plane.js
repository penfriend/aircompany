class Plane {

    constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity) {
        this.model = model;
        this.maxSpeed = maxSpeed;
        this.maxFlightDistance = maxFlightDistance;
        this.maxLoadCapacity = maxLoadCapacity;
    }

    get getModel() {
        return this.model;
    }

    get getMaxSpeed() {
        return this.maxSpeed;
    }

    get GetMaxFlightDistance() {
        return this.maxFlightDistance;
    }

    get getMaxLoadCapacity() {
     return this.maxLoadCapacity;
    }

}

module.exports = Plane;
