class Hero {
  constructor(name, power) {
    this.name = name;
    this.power = power;
  }
  getPower() {
    if (this.power) {
      return this.power;
    }
    return "I have no power";
  }
  gotForGrocery(budget) {
    if (this.power && budget > 1000) {
      console.log(this.getPower());
    }
    return "Price is too hight, I can not buy";
  }
}

const CatMan = new Hero("CatMan", "khamsi");

console.log(CatMan.getPower());
console.log(CatMan.gotForGrocery(100));
