// Filter hocche condition diye kichu ekta khujbo...jodi condition fullfil kore tahole result pabo ar nah korle pabo nah

const numbers = [5, 4, 20, 42, 69, 23, 12, 49];
const greaterThan10 = numbers.filter((number) => number > 10);
const evenNumbers = numbers.filter((number) => number % 2 === 0);
const oddNumbers = numbers.filter((number) => number % 2 === 1);
console.log(greaterThan10);
console.log(evenNumbers);
console.log(oddNumbers);

const threeChar = ["Aam", "Kathal", "Komola", "Jam", "Lichu", "Mango"];
const findThree = threeChar.filter((three) => three.length <= 3);
console.log(findThree);
