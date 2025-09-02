/**
 * Class --> Template
 * properties
 * method (a special type of function inside a class without the function keyword)
 * Object
 */

class Player {
  constructor(name, age) {
    this.name = name;
    this.location = "Bangladesh";
    this.age = age;
    // console.log("Calling the contructor method", name);
  }
  goal() {
    console.log("Score a goal");
  }

  getTeamName() {
    return "Barca";
  }
}

const player1 = new Player("Arif", 33);
const player2 = new Player("Hossain", 20);
// player1.goal();
// player1.getTeamName();
// console.log(player1);
console.log(player1 instanceof Player);
console.log(player2);
