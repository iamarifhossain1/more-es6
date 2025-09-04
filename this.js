class Vehicle {
  constructor(type, brand, price) {
    this.type = type;
    this.brand = brand;
    this.price = price;
  }

  getThis() {
    console.log(this);
  }

  getPrice() {
    return this.price;
  }
}

const car = new Vehicle("car", "Toyota", 5000);
console.log(car);
