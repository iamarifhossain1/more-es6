/**
 * 1. Given an array of numbers, create a new array where each number is doubled. (use map)
 * 2. From an array of numbers, get only the even numbers. (use filter)
 * 3. From an array of numbers, find the first number that is greater than 50. (use find)
 * 4. Given an array of strings (names), print each name with "Hello, " in front. (use forEach)
 * 5. Given an array of numbers, create a new array of their squares. (use map)
 * 6. From an array of ages, return only the ages that are 18 or older. (use filter)
 * 7. From an array of numbers, find the first number that is divisible by 7. (use find)
 * 8. From an array of words, print the length of each word. (use forEach)
 * 9. Given an array of temperatures in Celsius, create a new array with the values converted to Fahrenheit. (use map)
 * 10.From an array of products with prices, filter out only the products that cost more than 100. (use filter)
 */

// Task 1 -->

const numbers = [21, 19, 46, 81, 32, 59];
const total = numbers.map((num) => num * 2);
// console.log(total);

// Task 2 -->

const findEven = [21, 19, 46, 81, 32, 59];
const evenNumber = findEven.filter((num) => num % 2 === 0);
// console.log(evenNumber);

// Task 3 -->

const greaterNumber = [21, 19, 46, 81, 32, 59];
const findGreater = greaterNumber.find((num) => num > 50);
// console.log(findGreater);

// Task - 4

const nameStr = ["Arif", "Hanif", "Mousumi"];
const name = nameStr.forEach((name) => {
  //   console.log(`Hello, ${name}`);
});

// Task - 5

const squareNumbers = [21, 19, 46, 81, 32, 59];
const findSquareNumber = squareNumbers.map((num) => num * num);
// console.log(findSquareNumber);

// Task - 6

const ages = [20, 25, 28, 14, 9, 45, 5, 3, 12, 16];
const findAges = ages.filter((age) => age > 18);
// console.log(findAges);

// Task - 7

const divide = [20, 25, 28, 14, 9, 45, 5, 3, 12, 16];
const divisibleNumber = divide.find((number) => number % 7 === 0);
// console.log(divisibleNumber);

// Task - 8

const words = ["Apple", "Mango", "Pineapple", "Watermelon", "Coconut"];
const wordLength = words.forEach((words) => {
  findLength = words.length;
  //   console.log(findLength);
});

// Task - 9

const products = [
  { name: "Shirt", price: 80 },
  { name: "Shoes", price: 150 },
  { name: "Watch", price: 200 },
  { name: "Hat", price: 50 },
];

const findPrice = products.filter((products) => products.price > 100);
// console.log(findPrice);

/**
 * Task - 10 --> Get only the names from the users array.
 */

const users = [
  { id: 1, name: "Alice", age: 22 },
  { id: 2, name: "Bob", age: 17 },
  { id: 3, name: "Charlie", age: 25 },
];

const getName = users.map((user) => user.name);
// console.log(getName);

/**
 * Task - 11 -->  Return only the products that cost less than 100.
 */

const productsPrice = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Phone", price: 800 },
  { id: 3, name: "Pen", price: 2 },
];

const getPrice = productsPrice.filter((products) => products.price < 100);
// console.log(getPrice);

/**
 * Task - 12 --> Find the first student whose grade is "B".
 */

const students = [
  { id: 1, name: "David", grade: "A" },
  { id: 2, name: "Eve", grade: "C" },
  { id: 3, name: "Frank", grade: "B" },
];

const getGrades = students.find((student) => student.grade === "B");
// console.log(getGrades);

/**
 * Task - 13 --> Print each book title with its page count.
 */

const books = [
  { title: "Book One", pages: 200 },
  { title: "Book Two", pages: 150 },
  { title: "Book Three", pages: 300 },
];

const bookNameAndPageCount = books.map(
  (book) => `Book Name: ${book.title}, ${book.pages}, Pages`
);

// console.log(bookNameAndPageCount);

/**
 * Task 14 --> Create a new array of employee names with their salaries increased by 10%.
 */

const employees = [
  { id: 1, name: "Sam", salary: 5000 },
  { id: 2, name: "John", salary: 7000 },
  { id: 3, name: "Sara", salary: 4000 },
];

const getNameSalaries = employees.map(
  (employees) => `${employees.name}, ${(employees.salary * 1.1).toFixed(2)}`
);
console.log(getNameSalaries);
