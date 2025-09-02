const numbers = [1, 2, 3, 4, 5, 6, 7, 89, 10];
// const doubled = [];
// for (const number of numbers) {
//   result = number * 2;
//   doubled.push(result);
// }

// const doubleIt = (x) => x * 2;

// const doubled = numbers.map((x) => x * 2);
// const fiveTimes = numbers.map((five) => five * 5);
// const tenTimes = numbers.map((ten) => ten * 10);
// const twentyTimes = numbers.map((twenty) => twenty * 20);
// console.log(doubled);
// console.log(fiveTimes);
// console.log(tenTimes);
// console.log(twentyTimes);

const friends = ["Monir", "Anisul", "Araf", "Moon", "Rifat", "Mehedi", "Ali"];
const nameLength = [];
for (const friend of friends) {
  length = friend.length;
  nameLength.push(length);
}

console.log(nameLength);

const nameLeng = friends.map((name) => name.length);
const firstLetter = friends.map((name) => name[0]);
console.log(nameLeng);
console.log(firstLetter);
