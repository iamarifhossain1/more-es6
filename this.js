class Vehicle {
  #tin;
  constructor(type, brand, price) {
    this.type = type;
    this.brand = brand;
    this.price = price;
    this.#tin = "152641125";
  }

  getThis() {
    console.log(this);
  }

  getTin() {
    return this.#tin;
  }

  getPrice() {
    return this.price;
  }
}

const car1 = new Vehicle("Car", "Toyota", 500000);
const car2 = new Vehicle("Car", "Mitshubishi", 1000000);

console.log(car1.getPrice());
// console.log(car2.getPrice());

// const students = {
//   name: "Arif hossain",
//   age: 28,
//   batch: "12th",
//   location: "Mirpur",
//   Country: "Bangladesh",
//   getOutput: function () {
//     console.log(this);
//   },

//   getArrow: () => {
//     console.log(this);
//   },
// };

// students.getOutput();
// students.getArrow();
