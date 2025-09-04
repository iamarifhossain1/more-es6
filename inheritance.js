class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`${this.name} is eating`);
  }

  drink() {
    console.log(`${this.name} is drinking`);
  }
}

class Dog extends Animal {
  constructor(name, breed, age) {
    super(name, age);
    this.breed = breed;
  }

  bark() {
    console.log(`${this.breed} is barking`);
  }
}

class Cat extends Animal {
  constructor(name, color, age) {
    super(name, age);
    this.color = color;
  }

  bark() {
    console.log("Meow Meow");
  }
}

class Bird extends Animal {
  constructor(name, species, age) {
    super(name, age);
    this.species = species;
  }
}

const newDog = new Dog("Tyson", "Deshi", 5);
console.log(newDog);

const newCat = new Cat("Mithu", "White & Golden", 3);
console.log(newCat);

const newBird = new Bird("Tiya Pakhi", "Deshi", 1);
console.log(newBird);

newDog.eat();
newCat.eat();
