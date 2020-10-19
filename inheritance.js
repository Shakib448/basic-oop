class SmartDevice {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  charging() {
    console.log("I am eating electrons");
  }
}

class Phone extends SmartDevice {
  constructor(name, price, camera) {
    super(name, price);
    this.camera = camera;
  }

}

class Watch extends SmartDevice {
  constructor(name, price, distance) {
    super(name, price);

    this.distance = distance;
  }
 
}

class Tablet extends SmartDevice {
  constructor(name, price, isWifi) {
    super(name, price);

    this.isWifi = isWifi;
  }
  super(name, price);

}

const samsung = new Phone("samsung", 5000, "16px");

console.log(samsung);
