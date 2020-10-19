class Tiger {
  #speed = 100;
  constructor(name) {
    this.name = name;
  }
  run() {
    console.log(`I am ${this.name}. I am running at ${this.#speed} mph`);
  }
}

const royal = new Tiger("Royal Bengal");

royal.run();

// console.log(royal.#speed);
