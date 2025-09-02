const numbers = [5, 4, 20, 42, 69, 23, 12, 49];
let sum = 0;
// for (const number of numbers) {
//   sum = sum + number;
//   console.log(sum);
// }

const total = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(total);
