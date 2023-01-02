class Airport {

  planesInAirport;
  capacity;
  planesFlying;
  weather;

  constructor(weather = Math.floor(Math.random() * 10), capacity = 2) {
    this.planesInAirport = [];
    this.planesFlying = [];
    this.capacity = capacity;
    this.weather = weather;
  };

  isCalm() {
    if (this.weather < 8)
      return true;
  };

  isIn(plane) {
    if (this.planesInAirport.some((x) => x == plane)) {
      return true
    }
  }

  land = plane => {
    if (this.planesInAirport.length < this.capacity && !this.isIn(plane) && this.isCalm()) {
      this.planesInAirport.push(plane);
    }
    if (this.planesInAirport.length >= this.capacity) {
      this.planesFlying.push(plane);
    }
  }

  takeOff = plane => {
    for (let p = 0; p < this.planesInAirport.length; p++) {
      if (this.planesInAirport[p].id == plane.id && this.isCalm()) {
        this.planesFlying.push(plane);
        this.planesInAirport.pop();
      }
    }
  };
};

planeCount = () => {
  return this.planesInAirport.length
}

module.exports = Airport;


